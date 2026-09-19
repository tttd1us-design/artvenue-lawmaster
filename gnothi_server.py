# -*- coding: utf-8 -*-
"""
GNŌTHI (그노티): 소크라테스 엘렌코스 자기탐구 챔버 및 로컬 서버
기반: 소크라테스 변론(Apology), 국가(Republic), 엘렌코스(Elenchus) 반문 알고리즘
목적: 7대 탐구 영역 42회 세션을 관통하는 실시간 웹 챔버 및 CLI 대화 런처
"""

import sys
import time
import os
import webbrowser
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 8780

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def print_banner():
    print("=" * 76)
    print(" 🏛️  [GNŌTHI] 소크라테스 엘렌코스(Elenchus) 자기탐구 플랫폼 v1.0")
    print(" ⚖️  γνῶθι σεαυτόν · 너 자신을 알라 · 검토되지 않은 삶은 살 가치가 없다")
    print("=" * 76)

def run_local_server():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f"\n[🚀 로컬 챔버 가동] http://localhost:{PORT}/gnothi_elenchus.html")
    httpd.serve_forever()

def main():
    clear_screen()
    print_banner()
    
    print("\n[📜 소크라테스 엘렌코스(Elenchus) 5단계 원리]")
    print(" 1. Thesis         : 상대방의 표면적 신념과 명제 진술")
    print(" 2. Premise        : 그 믿음의 암묵적 전제와 근거 탐색")
    print(" 3. Aporia         : 모순과 양립 불가능한 반례 직면")
    print(" 4. Perplexity     : 거짓된 앎의 해체와 자각의 순간")
    print(" 5. Reconstruction : 자기 언어로 정립된 흔들리지 않는 실존 원칙")
    print("-" * 76)
    
    print("\n[🎯 7대 실존 탐구 영역 (총 42회 세션)]")
    print(" • 정체성 (Identity, 8회)    : '나는 누구인가?' (명함 뒤에 남는 나)")
    print(" • 가치관 (Values, 6회)      : '진짜 중요한 것은?' (돈과 자유의 참된 환율)")
    print(" • 욕구 (Desires, 6회)       : '진심으로 원하는 것은?' (가짜 갈망 발라내기)")
    print(" • 강점 (Strengths, 5회)     : '몰입하는 것은?' (시간이 증발하는 순간)")
    print(" • 관계 (Relationships, 5회) : '어떤 관계를 원하는가?' (의존과 고립 사이)")
    print(" • 목표 (Purpose, 7회)       : '어디로 가야 하는가?' (죽음의 렌즈로 본 오늘)")
    print(" • 실행 (Praxis, 5회)        : '어떻게 시작할 것인가?' (완벽주의 해부)")
    print("-" * 76)

    # Launch server in background thread
    server_thread = threading.Thread(target=run_local_server, daemon=True)
    server_thread.start()

    time.sleep(1)
    target_url = f"http://localhost:{PORT}/gnothi_elenchus.html"
    print(f"\n👉 브라우저에서 GNŌTHI 인터랙티브 챔버를 엽니다: {target_url}")
    webbrowser.open(target_url)

    print("\n💡 키보드 [Ctrl + C]를 누르면 서버가 안전하게 종료됩니다.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n\n🏛️  소크라테스 챔버가 안전하게 닫혔습니다. '매일 다시 묻는 자만이 살아있다.'")

if __name__ == '__main__':
    main()
