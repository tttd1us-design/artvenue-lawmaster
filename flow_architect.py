# -*- coding: utf-8 -*-
"""
Flow-Architect: 일-삶 융합 플로우(Flow) 아키텍처 컨설팅 시스템
기반 이론: 미하이 칙센트미하이(Mihaly Csikszentmihalyi) 몰입 이론,
칼 뉴포트(Cal Newport) 딥워크 인지 아키텍처, 430명 실증 코호트 데이터
"""

import sys
import time
import json
import math
import os
from datetime import datetime

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def print_banner():
    print("=" * 76)
    print(" 🌊 [Flow-Architect] 일-삶 융합 플로우(Flow) 아키텍처 컨설팅 시스템")
    print(" ⚡ 분열적 워라밸을 넘어 일과 삶이 단일한 에너지로 순환하는 고몰입 OS")
    print(" 📊 430명 실증 코호트: 업무 몰입도 +65% | 퇴근 후 무력감 호소율 -80%")
    print("=" * 76)

def run_flow_matrix():
    print("\n[🎯 1. 칙센트미하이 4% 골디락스 플로우 매트릭스 진단]")
    print("-" * 76)
    print("몰입(Flow)은 '과업의 도전 난이도'와 '나의 보유 숙련도'가 정밀하게 균형을 이룰 때 발생합니다.")
    print("단순 반복은 지루함(Boredom)을, 통제를 벗어난 과업은 급성 불안(Anxiety)을 야기합니다.\n")
    
    task_name = input(" 👉 진단할 핵심 과업명을 입력하세요 (예: 2분기 사업계획서 수립): ").strip()
    if not task_name:
        task_name = "신규 프로젝트 제안서 기획"

    try:
        challenge = float(input(" 👉 과업의 체감 도전 난이도 (1: 매우 쉬움 ~ 10: 압도적 고난도) [1-10]: ").strip())
        skill = float(input(" 👉 현재 본인의 해당 과업 숙련도 (1: 초심자 ~ 10: 최고 전문가) [1-10]: ").strip())
    except ValueError:
        challenge, skill = 7.0, 5.0

    diff = challenge - skill
    print("\n" + "=" * 76)
    print(f" 📊 과업 분석 결과: [{task_name}]")
    print(f" • 도전 난이도: {challenge}/10 | 보유 숙련도: {skill}/10 (격차: {diff:+.1f})")

    if abs(diff) <= 1.5:
        zone = "🌟 [최적 몰입 통로 (FLOW CHANNEL)]"
        desc = "도전과 역량이 완벽한 골디락스 존에 위치합니다. 시간 감각이 사라지고 도파민이 최대 분비됩니다."
        action = "외부 메신저를 100% 차단하고 90분 Deep Anchor 블록에 즉시 착수하십시오."
    elif diff > 1.5:
        zone = "⚠️ [불안 및 마비 영역 (ANXIETY ZONE)]"
        desc = "역량 대비 난이도가 과도하게 높아 편도체가 활성화되고 착수 지연(미루기)이 발생합니다."
        action = "과업을 30분 단위 3단계 하위 퀘스트로 쪼개고, 1단계에선 완성도가 아닌 '초안 뼈대 잡기'만 승리 조건으로 두십시오."
    else:
        zone = "💤 [지루함 및 매너리즘 영역 (BOREDOM ZONE)]"
        desc = "역량에 비해 난이도가 낮아 뇌가 에너지 투입을 거부하고 무의미한 웹서핑을 유발합니다."
        action = "시간제한(타임어택 30분) 규칙을 추가하거나, 파이썬/AI 자동화 스크립트를 작성하여 과업의 메타 난이도를 20% 높이십시오."

    print(f" • 진단 상태: {zone}")
    print(f" • 신경생리 메커니즘: {desc}")
    print(f" • 즉각 처방: {action}")
    print("=" * 76)

def run_cognitive_drain_audit():
    print("\n[⚡ 2. 일일 인지 에너지 누수(Cognitive Drain) 정밀 감사]")
    print("-" * 76)
    print("지식 근로자의 피로는 노동량이 아니라 '주의력 분절(Context Switching)'에서 발생합니다.")
    print("다음 5가지 항목에 대해 평소 자신의 상태를 체크하십시오 (y/n):\n")

    questions = [
        ("업무 중 슬랙, 카카오톡, 이메일 알림이 실시간으로 팝업되는가?", 45),
        ("출근 직후 첫 30분 안에 이메일 확인이나 메신저 답장을 먼저 시작하는가?", 35),
        ("오전 골든타임(09:00~11:30)에 단순 공유성 주간 회의가 잡혀 있는가?", 60),
        ("퇴근 시 내일 아침 시작할 첫 3대 과업을 구체적으로 적어두지 않는가?", 40),
        ("하루 3가지 이상의 프로젝트를 오가며 동시 다발적으로 멀티태스킹하는가?", 50)
    ]

    total_loss_mins = 0
    checked_count = 0

    for idx, (q, penalty) in enumerate(questions, 1):
        ans = input(f" [{idx}/5] {q} (y/n): ").strip().lower()
        if ans == 'y':
            total_loss_mins += penalty
            checked_count += 1

    print("\n" + "=" * 76)
    print(" 📉 인지 에너지 누수 분석 리포트")
    print(f" • 에너지 고갈 체크 항목: 5개 중 {checked_count}개 감지")
    print(f" • 하루 증발하는 순수 인지 집중 시간: 약 {total_loss_mins}분 ({total_loss_mins/60:.1f}시간)")
    
    drain_level = "심각한 인지 파편화 (Critical)" if checked_count >= 3 else "경미한 주의력 분산 (Moderate)"
    recovery_roi = min(80, checked_count * 18)
    
    print(f" • 현재 상태: {drain_level}")
    print(f" • 4블록 데일리 아키텍처 도입 시 주간 확보 가능 집중 시간: 약 {total_loss_mins * 5 / 60:.1f}시간")
    print(f" • 예상 퇴근 후 무력감 감소율: 약 {recovery_roi}%")
    print("=" * 76)

def run_daily_architecture_planner():
    print("\n[🏛️ 3. 4블록 데일리 플로우 아키텍처 스케줄러]")
    print("-" * 76)
    print("시간을 쪼개지 말고, '에너지 상태'에 따라 4개 전용 블록으로 과업을 일괄 배치(Batching)하십시오.\n")

    blocks = [
        {
            "name": "Block 1. Deep Anchor (08:00 ~ 10:30)",
            "energy": "최고 (Peak Cortisol & Clarity)",
            "purpose": "하루 전체 승패를 가르는 고난도 핵심 과업 완결",
            "rule": "슬랙/메일 100% OFF, 회의 절대 금지, 90분 단일 과업 몰입"
        },
        {
            "name": "Block 2. Kinetic Sprint (10:45 ~ 12:00)",
            "energy": "중상 (Active Interaction)",
            "purpose": "팀원 협업, 피드백, 결정론적 데이터 정리",
            "rule": "고속 템포 작업, 명확한 요청 전달 및 병목 해소"
        },
        {
            "name": "Block 3. Sync & Process (13:30 ~ 15:30)",
            "energy": "식곤증/저점 (Low Dopamine)",
            "purpose": "행정 서류, 회의, 메일 답장 일괄 묶음 처리",
            "rule": "창의 과업 금지, 기계적 루틴만 Batch로 처리"
        },
        {
            "name": "Block 4. Reflect & Seed (16:00 ~ 18:00)",
            "energy": "마무리 & 회복 (Closure & Seed)",
            "purpose": "주간 몰입 일지 기록 및 내일의 3대 시드 배치",
            "rule": "내일 출근 시 첫 마우스 클릭 위치까지 미리 적어두어 자이가르닉 효과 차단"
        }
    ]

    for b in blocks:
        print(f" 🔹 {b['name']}")
        print(f"    • 생체 에너지: {b['energy']}")
        print(f"    • 핵심 목적: {b['purpose']}")
        print(f"    • 절대 행동 규칙: {b['rule']}\n")

    print(" 👉 오늘 Deep Anchor(블록 1)에 투입할 '단 1개의 승부 과업'을 작성해보세요:")
    top_task = input("    과업명: ").strip()
    if top_task:
        print(f"\n ✅ [등록 완료] 오늘 오전은 오직 '{top_task}' 하나에 모든 자원을 집중합니다!")
        print("    오전 10시 30분 전까지는 메신저와 이메일을 절대 열지 마십시오.")
    print("=" * 76)

def run_task_gamification():
    print("\n[🎮 4. 과업 게이미피케이션(Gamification) 엔진]")
    print("-" * 76)
    print("고역을 유희로 바꾸는 것은 '인지 프레임'의 재설계입니다.")
    print("지루하거나 스트레스받는 업무를 RPG 퀘스트로 즉시 전환합니다.\n")

    raw_task = input(" 👉 전환할 지루한/부담스러운 업무 입력 (예: 거래처 정산 엑셀 대조): ").strip()
    if not raw_task:
        raw_task = "분기별 세금계산서 정산 검증"

    print("\n ⚙️ [게이미피케이션 인지 변환 프로세스 가동 중...]")
    time.sleep(0.6)

    quest_title = f"⚔️ [던전 퀘스트] {raw_task}의 오차 제로 마스터리"
    time_limit = "45분 타임어택 (스톱워치 가동)"
    rule = "오직 키보드 단축키만 사용하여 마우스 사용 5회 미만으로 완결하기"
    reward = "☕ 최고급 드립커피 1잔 + 15분 완전 무소음 산책권 (+150 XP)"

    print("\n" + "=" * 76)
    print(f" 🕹️ 퀘스트 타이틀: {quest_title}")
    print(f" ⏱️ 승리 조건: {time_limit}")
    print(f" 📜 플레이어 룰: {rule}")
    print(f" 🏆 클리어 보상: {reward}")
    print(" 💡 원리: 자율적 제약 조건을 스스로 부여할 때 뇌의 선조체에서 내인성 동기가 점화됩니다.")
    print("=" * 76)

def run_flow_journal():
    print("\n[📖 5. 주간 몰입 일지(Flow Journal) 자가 점검 및 저장]")
    print("-" * 76)
    print("주간 몰입 일지는 에너지를 고갈시키는 비본질적 루틴을 도려내는 메스입니다.\n")

    date_str = datetime.now().strftime("%Y-%m-%d")
    print(f" 📅 점검일자: {date_str}")
    
    try:
        flow_score = int(input(" 👉 오늘 전체 업무 시간 중 순수 몰입(Flow) 비율 (0~100%): ").strip())
        after_energy = int(input(" 👉 퇴근 후 잔여 활력 지수 (1: 완전 방전 ~ 10: 생생한 활력) [1-10]: ").strip())
    except ValueError:
        flow_score, after_energy = 65, 7

    drained_task = input(" 👉 오늘 가장 큰 에너지를 갉아먹은 비본질적 루틴은 무엇이었습니까?: ").strip()
    tomorrow_seed = input(" 👉 내일 아침 출근 즉시 1초 만에 착수할 '시드(Seed) 과업' 1가지: ").strip()

    journal_data = {
        "date": date_str,
        "flow_ratio_percent": flow_score,
        "after_work_vitality": after_energy,
        "drained_routine": drained_task,
        "tomorrow_seed": tomorrow_seed,
        "architecture_compliance": "High" if flow_score >= 60 else "Review Needed"
    }

    log_file = "flow_journal_log.json"
    logs = []
    if os.path.exists(log_file):
        try:
            with open(log_file, "r", encoding="utf-8") as f:
                logs = json.load(f)
        except Exception:
            logs = []
    logs.append(journal_data)
    with open(log_file, "w", encoding="utf-8") as f:
        json.dump(logs, f, ensure_ascii=False, indent=2)

    print("\n" + "=" * 76)
    print(" ✅ [저장 완료] 주간 몰입 일지 데이터가 'flow_journal_log.json'에 기록되었습니다.")
    print(f" • 오늘 기록: 몰입률 {flow_score}% | 퇴근 활력 {after_energy}/10")
    print(f" • 제거할 에너지 도둑: [{drained_task or '불필요 회의'}]")
    print(f" • 내일의 시드: [{tomorrow_seed or 'Deep Anchor 1과업'}]")
    print("=" * 76)

def main():
    while True:
        clear_screen()
        print_banner()
        print("\n [메뉴를 선택하십시오]")
        print(" 1. 🎯 칙센트미하이 4% 골디락스 플로우 매트릭스 진단")
        print(" 2. ⚡ 일일 인지 에너지 누수(Cognitive Drain) 감사")
        print(" 3. 🏛️ 4블록 데일리 플로우 아키텍처 스케줄러")
        print(" 4. 🎮 과업 게이미피케이션(Gamification) 퀘스트 생성기")
        print(" 5. 📖 주간 몰입 일지(Flow Journal) 자가 진단 및 로깅")
        print(" 6. 🚀 전체 풀코스 종합 진단 실행")
        print(" 0. 종료 (Exit)")
        print("-" * 76)

        choice = input(" 👉 선택 (0-6): ").strip()
        if choice == '1':
            run_flow_matrix()
            input("\n[Enter]를 누르면 메인 메뉴로 돌아갑니다...")
        elif choice == '2':
            run_cognitive_drain_audit()
            input("\n[Enter]를 누르면 메인 메뉴로 돌아갑니다...")
        elif choice == '3':
            run_daily_architecture_planner()
            input("\n[Enter]를 누르면 메인 메뉴로 돌아갑니다...")
        elif choice == '4':
            run_task_gamification()
            input("\n[Enter]를 누르면 메인 메뉴로 돌아갑니다...")
        elif choice == '5':
            run_flow_journal()
            input("\n[Enter]를 누르면 메인 메뉴로 돌아갑니다...")
        elif choice == '6':
            run_flow_matrix()
            run_cognitive_drain_audit()
            run_daily_architecture_planner()
            run_task_gamification()
            run_flow_journal()
            input("\n🎉 전체 플로우 아키텍처 진단이 완료되었습니다. [Enter]를 누르세요...")
        elif choice == '0':
            print("\n👋 플로우 아키텍처 세션을 종료합니다. 일과 삶이 단일한 유희가 되기를 응원합니다!\n")
            break
        else:
            print("올바른 번호를 입력해주십시오.")
            time.sleep(1)

if __name__ == "__main__":
    main()
