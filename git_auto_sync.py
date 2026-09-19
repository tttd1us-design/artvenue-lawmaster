# -*- coding: utf-8 -*-
"""
GNŌTHI & Workspace Git Auto-Sync Daemon
기능: 지정된 주기(기본 15분)마다 파일 변경 사항을 감지하여 자동으로 git add, commit, push를 수행합니다.
실행: python git_auto_sync.py [--interval 초]
"""

import subprocess
import time
import datetime
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

REPO_DIR = os.path.dirname(os.path.abspath(__file__))
DEFAULT_INTERVAL_SECONDS = 900  # 15분 (900초)

def run_git_cmd(args):
    try:
        res = subprocess.run(
            ["git"] + args,
            cwd=REPO_DIR,
            capture_output=True,
            text=True,
            encoding='utf-8',
            check=False
        )
        return res.returncode == 0, res.stdout.strip(), res.stderr.strip()
    except Exception as e:
        return False, "", str(e)

def has_changes():
    success, stdout, _ = run_git_cmd(["status", "--porcelain"])
    return bool(stdout.strip())

def auto_sync():
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    if not has_changes():
        print(f"[{now_str}] 🟢 변경된 파일 없음 (Clean workspace).")
        return True

    print(f"\n[{now_str}] 🔄 변경 사항 감지됨. 자동 동기화 시작...")

    # 1. git add -A
    ok, out, err = run_git_cmd(["add", "-A"])
    if not ok:
        print(f"❌ git add 실패: {err}")
        return False

    # 2. git commit
    commit_msg = f"auto: Sync workspace changes [{now_str}]"
    ok, out, err = run_git_cmd(["commit", "-m", commit_msg])
    if not ok:
        print(f"⚠️ git commit 스킵 또는 오류: {err}")
    else:
        print(f"✅ 커밋 완료: {commit_msg}")

    # 3. git push origin master
    print("🚀 GitHub 원격 저장소로 푸시 중 (origin master)...")
    ok, out, err = run_git_cmd(["push", "origin", "master"])
    if ok:
        print(f"🎉 [{now_str}] GitHub 푸시 성공 완료!")
        return True
    else:
        print(f"❌ GitHub 푸시 실패: {err or out}")
        return False

def main():
    interval = DEFAULT_INTERVAL_SECONDS
    if len(sys.argv) > 1:
        try:
            interval = int(sys.argv[1])
        except ValueError:
            interval = DEFAULT_INTERVAL_SECONDS

    print("=" * 72)
    print(" 🐙 [GIT AUTO-SYNC] GitHub 주기적 자동 백업 & 동기화 데몬")
    print(f" 📂 감시 디렉토리 : {REPO_DIR}")
    print(f" ⏱️ 동기화 주기   : {interval}초 ({interval // 60}분)")
    print("=" * 72)

    # 1회 즉시 실행
    auto_sync()

    try:
        while True:
            time.sleep(interval)
            auto_sync()
    except KeyboardInterrupt:
        print("\n\n🛑 Git 자동 동기화 데몬이 종료되었습니다.")

if __name__ == '__main__':
    main()
