# -*- coding: utf-8 -*-
"""
GNŌTHI Desktop Installer
기능: Windows 바탕화면에 'GNOTHI - 소크라테스 인생 건강검진' 바로가기를 자동 생성합니다.
"""

import os
import sys
import subprocess

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def create_desktop_shortcut():
    try:
        desktop_dir = os.path.join(os.path.expanduser("~"), "Desktop")
        script_dir = os.path.dirname(os.path.abspath(__file__))
        html_path = os.path.join(script_dir, "gnothi_elenchus.html")
        bat_launcher_path = os.path.join(script_dir, "run_gnothi_app.bat")

        # Create launcher bat that launches in app-mode (Chrome or Edge)
        launcher_content = f"""@echo off
start msedge --app="{html_path}" 2>nul || start chrome --app="{html_path}" 2>nul || start "" "{html_path}"
"""
        with open(bat_launcher_path, "w", encoding="utf-8") as f:
            f.write(launcher_content)

        shortcut_path = os.path.join(desktop_dir, "GNOTHI - 소크라테스 인생검진.lnk")

        # Use PowerShell to create shortcut cleanly without cp949 issues
        ps_cmd = f"""
$WshShell = New-Object -comObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut('{shortcut_path}')
$Shortcut.TargetPath = '{bat_launcher_path}'
$Shortcut.WorkingDirectory = '{script_dir}'
$Shortcut.Description = 'GNOTHI 소크라테스 인생 종합 건강검진'
$Shortcut.Save()
"""
        subprocess.run(["powershell", "-NoProfile", "-Command", ps_cmd], check=True)

        print("=" * 72)
        print(" 🎉 [GNOTHI 데스크톱 앱 설치 완료]")
        print(f" 🖥️  바탕화면에 바로가기가 성공적으로 생성되었습니다!")
        print(f" 📍 생성 위치: {shortcut_path}")
        print(f" 📂 실행 대상: {html_path}")
        print("=" * 72)
        return True
    except Exception as e:
        print(f"❌ 바로가기 생성 중 오류: {e}")
        return False

if __name__ == '__main__':
    create_desktop_shortcut()
