# 🏛️ ArtVenue LawMaster AI
> **공연장 6대 복합법령 상충 해결, AI 도면 법률 스캐너 & 법률 정밀진단 인텔리전스 플랫폼**

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-4.5-indigo.svg)
![Taste Skill](https://img.shields.io/badge/Design-Taste%20Skill%20Clean%20Light-emerald.svg)

---

## 🌟 프로젝트 개요 (Overview)

공연장 건축·리모델링·운영 프로젝트는 **건축법(피난·방화), 소방시설법, 장애인등편의증진법, BF(무장애)인증 심사기준, 공연법**이 복합적으로 얽혀 있어 법령 간 상충으로 인한 인허가 반려 및 막대한 재시공 손실이 빈번히 발생합니다.

**ArtVenue LawMaster AI**는 대한민국 최초로 복합법령 간 **지배기준(◉)**을 자동 판정하고, **도면(CAD/PDF) 결함 핀포인트 검출**, **자연어 법률 질의응답 및 법적근거 전문 제공**, **소방·구청 인허가 공문 원클릭 출력**을 지원하는 올인원 세이프티 플랫폼입니다.

---

## ✨ 핵심 기능 (Key Features)

### 1. 🔍 AI 도면 법률 스캐너 & 정밀진단 (AI Blueprint Legal Scanner)
- **도면 파일 업로드 (PDF, DWG, PNG, JPG)** 및 AI Vision 자동 공간 파싱
- 도면 상의 **결함 부위 핀포인트 오버레이 (`[1]~[5]` 펄스 핀)**
- 실측 치수 vs 법정 최저 기준 vs 지배기준 **1:1 비교표**
- 인허가 보완 설계안 및 지자체/소방서 사전협의 조치계획서 자동 생성

### 2. 💬 AI 공연장 법률 질의응답 & 법적근거 백과 (Legal AI Q&A Engine)
- 자연어로 법률 질문 시 **핵심 요약 결론 + 6대 법령 조문 전문 + 벌칙 + 판례 + 해결책** 즉시 답변
- 소방청 행정질의회신, 국토교통부 유권해석, 법제처 심판례 수록
- 공연장 23대 주요 부위별 법적근거 전수 사전 탑재
- 관할 인허가청 제출용 공식 **질의회신서 원클릭 인쇄/PDF 저장**

### 3. 📋 23대 부위별 6대 법령 매트릭스 & 지배기준 판정기
- 건축법(피난방화), 소방법, 편의증진법, BF인증, 공연법, 기타법 전수 교차 분석
- 가장 엄격한 법률이 최종 적용되는 **지배기준(◉)**과 실계획 권장치수 제공
- 9대 핵심 상충 구간(사운드록, FOH복도, 방화막 등) 심층 솔루션

### 4. 🕹️ 3D 인터랙티브 공간 검증 시뮬레이터
- Three.js 기반 공연장 실시간 3D 디지털 트윈
- 복도 폭, 사운드록 길이, 관람실 출구 유효너비 슬라이더 조절 시 실시간 합격/경고(PASS/WARN/FAIL) 판정

### 5. 📄 소방·인허가 공문/협의서 원클릭 생성기
- 소방서 사전협의 신청서, BF인증 상충 해명서, 구청 건축허가 검토서 자동 패키징

---

## 🎨 디자인 시스템 (Taste Skill Clean Light Mode)
- **Aesthetic**: Refined Clean Light Mode (Apple·Vercel·Stripe Style)
- **Colors**: Deep Charcoal Typography (`#0F172A`), Slate Borders (`#E2E8F0`), Royal Indigo Accent (`#4F46E5`)
- **Accessibility**: WCAG AAA Compliant High-Contrast

---

## 🚀 빠른 시작 (Getting Started)

### 로컬 실행
별도의 빌드 도구 없이 정적 파일 또는 로컬 웹서버로 즉시 실행 가능합니다.

```bash
# Python 3 로컬 서버 실행
python -m http.server 3000

# 브라우저 접속
http://localhost:3000
```

---

## 📜 라이선스 (License)
This project is licensed under the MIT License.
