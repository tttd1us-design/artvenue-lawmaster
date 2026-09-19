# -*- coding: utf-8 -*-
"""
Dopamine Quench: 인지적 도파민 격리 & 생산자 락인(Lock-in) 터미널 시스템
기반: 스탠퍼드 앤드루 후버만 신경생리학, 칼 뉴포트 딥워크(Deep Work), 매튜 크로포드 인지 통제론
목적: 과시성 디지털 콘텐츠 중독 및 도파민 고갈을 진단하고 원시 텍스트/코드 생산 환경으로 뇌를 락인함.
"""

import sys
import time
import os
import webbrowser
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def print_banner():
    print("=" * 76)
    print(" 🛡️  [DOPAMINE QUENCH] 인지적 도파민 격리 & 생산자 락인 OS v2.6")
    print(" 🧠  과시성 시각자극 원천 격리 · 뇌 가소성 복원 · ACX 48시간 생산자 전환")
    print("=" * 76)

def run_dopamine_drain_diagnosis():
    print("\n[📊 진단 1. 일일 숏폼/릴스 도파민 고갈 및 경제적 기회비용 산출기]")
    print("-" * 76)
    try:
        hours_str = input("👉 하루에 숏폼/인스타그램/유튜브를 시청하는 총 시간(예: 3.5): ").strip()
        hours = float(hours_str) if hours_str else 3.5
    except ValueError:
        hours = 3.5

    try:
        rate_str = input("👉 당신의 시간당 잠재 가치/목표 시급 (원, 기본 35000): ").strip()
        rate = int(rate_str) if rate_str else 35000
    except ValueError:
        rate = 35000

    annual_hours = int(hours * 365)
    annual_loss = annual_hours * rate
    d2_damage = min(95, int(20 + hours * 14))
    reading_stamina = max(3, int(45 - hours * 9))

    print("\n" + "─" * 76)
    print(f" [🚨 신경생리학적 진단 결과]")
    print(f" • 전두엽 D2 도파민 수용체 다운레귤레이션 : {d2_damage}% 손상 (만성 무기력·브레인포그)")
    print(f" • 복합 문서(기술서/재무제표) 연속 독해력 : {reading_stamina}분 만에 인지 한계 도달")
    print(f" • 연간 빅테크에 헌납한 총 시간        : {annual_hours:,} 시간 (정규 근무 160일 전량 증발)")
    print(f" • 미창출 시간가치 총 누수액             : ₩ {annual_loss:,} 원")
    print("─" * 76)
    input("\n[Enter]를 누르면 다음 해체 시뮬레이션으로 넘어갑니다...")

def run_quench_simulation():
    print("\n[🔥 진단 2. 과시성 디지털 콘텐츠 해체 엔진 (Slop Demolisher)]")
    print("-" * 76)
    print(" 릴스/쇼츠의 화려한 시각 마약(포르쉐 하울, 월 1억 인증)이 감각계를 자극합니다.")
    print(" 알고리즘은 당신의 '시기심'과 'FOMO'를 낚아 광고 체류시간 180초를 털어갑니다.\n")
    
    input("👉 [Enter]를 누르면 '시각 자극 급랭(Quench)' 프로세스를 가동합니다...")
    print("\n [⚡ Quench Protocol Engaging...]")
    for step in [
        "1. 1080x1920 60FPS 자극성 비디오 스트림 차단 (Packet Dropped)",
        "2. 허위 과시성 썸네일 Grayscale 100% 강제 흑백화",
        "3. AST 구문 파싱: 화려한 문장 제거 -> 원시 재무제표 대조",
        "4. 검증 결과: 실질 자산 0원 / 연 14.8% 카푸어 리스 부채 노출"
    ]:
        time.sleep(0.4)
        print(f" • {step}")
    
    time.sleep(0.5)
    print("\n ✨ 인지 마약 해체 완료!")
    print(" 허상을 걷어내면 남는 것은 건조한 텍스트와 코드뿐입니다. 이제 당신이 만들 차례입니다.")
    input("\n[Enter]를 누르면 메인 메뉴로 돌아갑니다...")

def launch_web_console():
    port = 8088
    html_path = os.path.join(os.path.dirname(__file__), "dopamine_quench.html")
    
    if not os.path.exists(html_path):
        print(f"🚨 에러: {html_path} 파일이 존재하지 않습니다.")
        return

    print(f"\n🚀 [Dopamine Quench Web Console 가동]")
    print(f"👉 로컬 웹 콘솔 URL: http://localhost:{port}/dopamine_quench.html")

    class QuietHandler(SimpleHTTPRequestHandler):
        def log_message(self, format, *args):
            pass  # Suppress console log spam

    server = HTTPServer(('127.0.0.1', port), QuietHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()

    time.sleep(0.5)
    webbrowser.open(f"http://localhost:{port}/dopamine_quench.html")
    print("✨ 브라우저에서 대시보드가 열렸습니다. (콘솔을 종료하려면 Ctrl+C를 누르세요)")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n웹 서버를 안전하게 종료했습니다.")

def main():
    while True:
        clear_screen()
        print_banner()
        print("\n [실행 모드 선택]")
        print(" 1. 📊 도파민 고갈 & 기회비용 손실 자가 진단")
        print(" 2. 🔥 과시성 콘텐츠 급랭(Quench) 시뮬레이션")
        print(" 3. 🚀 고해상도 웹 터미널 & 딥워크 콘솔 열기 (권장)")
        print(" 4. 🚪 종료")
        print("-" * 76)
        
        choice = input("👉 번호를 입력하세요 (1-4): ").strip()
        
        if choice == '1':
            run_dopamine_drain_diagnosis()
        elif choice == '2':
            run_quench_simulation()
        elif choice == '3':
            launch_web_console()
            break
        elif choice == '4':
            print("\n안전하게 종료되었습니다. 생산자의 길을 응원합니다.\n")
            break
        else:
            print("올바른 번호를 입력하십시오.")
            time.sleep(1)

if __name__ == '__main__':
    main()
