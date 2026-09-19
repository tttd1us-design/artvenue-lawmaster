---
name: gnothi-elenchus-app
description: "GNŌTHI(그노티) 인생 방향성 진단 & 1:1 라이프 멘토링 SPA 앱의 핵심 기능, 아키텍처, 디자인 시스템, 인증/결제/AI 연동 스킬"
---

# GNŌTHI (그노티) 앱 스킬

## 1. 앱 개요

GNŌTHI(그노티)는 소크라테스 산파술(Socratic Method) 기반의 **인생 방향성 진단 & 1:1 라이프 멘토링** 단일 페이지 웹 앱입니다.

### 핵심 기능 7가지

| 탭 ID | 기능명 | 설명 |
|--------|--------|------|
| `chamber` | 1:1 방향 대화 | 5단계 턴제 소크라테스 산파술 코칭 (고정관념→동기→좋아하는것/싫어하는것→인생 방향 선언→리포트) |
| `swipe` | 3초 본능 스와이프 | 직관 테스트로 내면의 진짜 가치관 발견 (좌/우 스와이프, 키보드 ←/→) |
| `board` | 멘토 이사회 | 4인 멘토(소크라테스, 잡스, 달리오, 아우렐리우스) 관점 제공 |
| `sos` | 마인드 SOS | 24시간 긴급 감정 쿨다운 (인지 왜곡 진단, 충동 행동 3대 금지) |
| `parallel` | 미래 시나리오 | 10년 후 미래 분기점 시뮬레이션 |
| `tracker` | 주간 성장 트래커 | 방향성 실행 진척 추적 |
| `reborn` | 🌅 인생 2막 은퇴 나침반 | 직장 은퇴 준비·신중년을 위한 명함 없는 삶의 4대 기둥 설계 & 90일 지혜 자산화 로드맵 |

### 지원 페르소나 5종 (`PERSONA_CONFIGS`)
1. `student`: 중고생 (진로·전공 고민)
2. `undergrad`: 대학생 (진로·취업 탐색)
3. `worker`: 직장인 (이직·커리어 설계)
4. `founder`: 창업가·프리랜서 (방향성 검증)
5. `senior`: **은퇴준비·신중년 (인생 2막·정체성 설계)** - 명함 상실 극복, 지혜 자산화, 하루 3블록 시간 주권, 영혼의 순수 몰입

## 2. 아키텍처

- **SPA (Single Page Application)**: 단일 HTML 파일 (`gnothi_elenchus.html`)
- **상태관리**: `userDirectionSession` 전역 객체 + `conversationTurn` 정수 카운터
- **영속성**: `localStorage` (인증 정보 `gnothi_auth`, Gemini API 키 `gnothi_gemini_key`)
- **탭 전환**: CSS 클래스 `.tab-view.active` 토글 + JS `switchTab(tabId)` 함수

## 3. 디자인 시스템 (Apple Premium Aesthetic)

### 컬러 팔레트
```css
--apple-bg: #FBFBFD;
--apple-surface: #FFFFFF;
--apple-blue: #0071E3;       /* 주 CTA */
--apple-green: #34C759;      /* 성공/완료 */
--apple-rose: #FF3B30;       /* 경고/해지 */
--apple-orange: #FF9500;     /* VIP/프리미엄 */
```

### 타이포그래피
- **디스플레이**: `Plus Jakarta Sans`, `Outfit` (영문)
- **한국어 서체**: `Pretendard` (고딕), `MaruBuri`, `Gowun Batang`, `Noto Serif KR` (명조)
- **코드/수치**: `Fira Code`
- **타이틀 로고**: `Cinzel` (고전 세리프)

### 라운딩 체계
```css
--apple-radius-sm: 10px;
--apple-radius-md: 14px;
--apple-radius-lg: 20px;
--apple-radius-pill: 50px;
```

## 4. 인증 시스템 (AUTH_STATE)

### 상태 구조
```javascript
const AUTH_STATE = {
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  loginMethod: '',  // 'kakao' | 'naver' | 'google' | 'apple' | 'phone' | 'email' | 'demo' | 'guest'
  isVip: false,
  payMethod: 'kakaopay',
  subscriptionDate: null,
};
```

### 경쟁사(마인드카페, 클래스101, 원티드) 표준 로그인 체계
1. **메인 간편 로그인**: 카카오톡 1초 원탭 (`kakao`, #FEE500 풀사이즈)
2. **2차 소셜 그리드 3종**:
   - 네이버 (`naver`, #03C75A) - 4050/60대 시니어 및 신중년 점유율 1위
   - Google (`google`, 구글 멀티컬러)
   - Apple (`apple`, 블랙)
3. **휴대폰 간편 로그인 (`phone`)**: 복잡한 이메일 대신 휴대폰 번호 원클릭 인증
4. **이메일 로그인 (`email`)**: 전통적 이메일/비밀번호 가입 및 로그인
5. **체험 및 게스트 모드**:
   - 체험용 데모 계정 (`demo`)
   - 게스트 바로 둘러보기 (`guest`)
6. **편의 옵션**: 로그인 상태 유지(자동 로그인) 체크박스 및 비밀번호 찾기

### 핵심 함수
| 함수 | 설명 |
|------|------|
| `initAuthState()` | localStorage에서 세션 복원 → UI 동기화 |
| `switchAuthTab(tab)` | `[간편 소셜 로그인]` ↔ `[휴대폰 / 이메일]` 세그먼트 탭 전환 |
| `loginWith(provider)` | 4대 소셜 로그인 (kakao / naver / google / apple) |
| `loginWithPhone()` | 휴대폰 번호 간편 인증 로그인 |
| `loginWithEmail()` | 이메일 + 비밀번호 로그인 |
| `loginDemoUser()` | 체험 계정 1초 로그인 |
| `loginAsGuest()` | 게스트 바로 둘러보기 모드 |
| `logoutUser()` | 로그아웃 + 세션 초기화 |
| `handleUserAuthClick()` | 헤더 버튼 → 로그인 or 계정관리 모달 라우팅 |

## 5. 결제 시스템

### 결제 수단 4종
| ID | 이름 | 색상 |
|----|------|------|
| `kakaopay` | 카카오페이 | `#FEE500` |
| `tosspay` | 토스페이 | `#0064FF` |
| `card` | 신용/체크카드 | (기본) |
| `naverpay` | 네이버페이 | `#03CF5D` |

### 핵심 함수
| 함수 | 설명 |
|------|------|
| `selectPayMethod(method)` | 결제수단 UI 라디오 전환 |
| `processPayment()` | 결제 승인 시뮬레이션 (1.6초 딜레이) → 영수증 발급 |
| `showReceipt()` | 주문번호, 결제일시, 다음 결제일 표시 |
| `cancelSubscription()` | VIP 해지 + 환불 안내 |

## 6. AI 연동 (Gemini 2.0 Flash — 무료 가성비 AI)

### 연동 구조
```javascript
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
```

### 핵심 함수
| 함수 | 설명 |
|------|------|
| `getAICoachingResponse(userText, turnContext, persona)` | Gemini API로 코칭 응답 생성 |
| `setGeminiApiKey()` | 사용자가 무료 API 키 입력 |

### AI 시스템 프롬프트 원칙
1. 소크라테스 산파술 기반 — 정답 대신 질문으로 유도
2. 인지심리학, 행동경제학, 긍정심리학 근거 제시
3. 전문 코치 관점, 상업 서비스 수준 완성도
4. 200~500자 한국어 자연어 응답

## 7. 모달 시스템

| 모달 ID | 용도 | 열기 함수 |
|---------|------|-----------|
| `loginModal` | 로그인 (소셜/이메일/체험) | `handleUserAuthClick()` |
| `userAccountModal` | 계정관리, 플랜 확인, 해지 | `openUserAccountModal()` |
| `subscriptionModal` | 9,900원 VIP 구독 결제 | `openSubscriptionModal()` |
| `receiptModal` | 전자 결제 영수증 | `showReceipt()` |
| `reportModal` | 방향성 진단 리포트 원문 | `openFullReportModal()` |
| `shatterOverlay` | 고정관념 깨뜨리기 이펙트 | `triggerAporiaShatterDynamic()` |
| `consultantMatchModal` | AI 대화 결과 연계 1:1 전문가 상담 매칭 및 임상 브리핑 시트 | `openConsultantMatchModal()` |
| `consultantSuccessModal` | 전문가 사전 전달 접수 및 예약 완료 영수증 | `submitConsultantBooking()` |

## 8. 비즈니스 모델

- **가격**: 월 9,900원 (하루 330원)
- **무료 체험**: 7일 무료 → 자동 결제 전환
- **환불 정책**: 구독 후 7일 이내 100% 전액 환불 보장
- **결제 보안**: 256-bit SSL 보안 결제

## 10. 3D 입체 시각화 & 공간 인터랙션 엔진 (Spatial 3D & Depth Engine)

### 1) 실시간 3D 자이로스코프 나침반 (Interactive 3D Compass)
- **컴포넌트**: `#compass3DCard`, `.gyro-stage`, `.gyro-sphere`
- **3D 짐벌 링 시스템**:
  - `ring-x`: X축 3D 회전 링 (사파이어 블루 네온 글로우)
  - `ring-y`: Y축 3D 회전 링 (에메랄드 림 글로우)
  - `ring-z`: Z축 3D 회전 링 (골드 대시 방위계)
  - `north-star-core`: 3D 공간 상에서 반짝이는 다이아몬드 북극성 코어 (`✦`)
- **실시간 단계별 동기화 (`updateCompassAlignment`)**:
  - 1단계: 동기화 20% | 방위각 342° NW | 고정관념 해체 중
  - 2단계: 동기화 40% | 방위각 018° NNE | 타인 시선 분리 중
  - 3단계: 동기화 60% | 방위각 006° N | 호불호 기준 확립
  - 4단계: 동기화 80% | 방위각 002° N | 북극성 조준 80%
  - 5단계: 정렬 완료 100% | 방위각 000° TRUE NORTH | 나만의 3대 축 완성 ✨ (에메랄드/사파이어 광채 발산)
- **360도 공간 인터랙션**: 마우스 드래그를 통한 3차원 자이로스코프 회전 및 호버 패럴랙스 반응

### 2) Apple 스타일 3D 카드 틸트 & 다이내믹 글래어 (3D Tilt & Glare Engine)
- **적용 대상**: `.bento-card`, `.director-card`, `.parallel-card`, `.compass-3d-card` 등
- **원리**: 커서 위치에 따른 실시간 원근 각도(`rotateX`, `rotateY`) 계산 + 래디얼 그라디언트 반사광(`.tilt-glare`) 추적
- **시각 효과**: 마우스 호버 시 실물 글래스 카드가 부드럽게 떠오르며 자연광이 반사되는 감각 선사

### 3) 공간 3D 엠비언트 백그라운드 (Spatial Ambient Glow)
- **컴포넌트**: `.spatial-ambient-bg`, `.ambient-orb` (Blue, Emerald, Purple)
- **효과**: 80px 초미세 블러와 유기적 3D 부유 애니메이션으로 2D 평면을 탈피한 깊이 있는 공간감(Spatial Depth) 및 편안한 시각 경험 제공

## 11. 외부 리소스

| 리소스 | CDN |
|--------|-----|
| Lucide Icons | `unpkg.com/lucide@latest` |
| Pretendard 폰트 | `cdn.jsdelivr.net/gh/orioncactus/pretendard` |
| MaruBuri 폰트 | `cdn.jsdelivr.net/gh/projectnoonnu/noonfonts` |
| Google Fonts | Cinzel, Gowun Batang, Noto Serif KR, Outfit, Plus Jakarta Sans, Fira Code |

## 12. 개발 가이드

### 새 탭 추가 방법
1. CSS에 `.tab-view` 스타일 추가
2. HTML에 `<div class="tab-view" id="view-{탭ID}">` 추가
3. `<nav class="apple-nav-tabs">`에 `<button class="nav-tab-btn">` 추가
4. JS `switchTab(tabId)` 및 `init3DTiltEngine()` 연동
4. JS `switchTab()` 함수가 자동으로 토글 처리

### 새 모달 추가 방법
1. HTML에 `<div class="modal-overlay" id="{모달ID}">` 추가
2. 내부에 `.auth-modal-card` 또는 `.report-modal-card` 사용
3. 닫기: `<button class="close-btn" onclick="closeModal('{모달ID}')">`
4. 열기: JS 함수에서 `document.getElementById('{모달ID}').classList.add('active')`

## 13. 대화 결과 연계 1:1 전문가 상담 시스템 (Pre-Counseling Clinical Dossier System)

### 1) 시스템 개요 및 해결하는 페인포인트
- **전통적 상담의 한계**: 내담자가 상담사를 만났을 때 첫 20~30분을 상황 설명, 배경 문진, 형식적 라포 형성에 소모하여 실질적인 문제 해결 시간이 부족함.
- **GNŌTHI 해결책**: AI 소크라테스 산파술 5단계 대화 코칭을 통해 도출된 핵심 성과(타인의 기대 Thesis, 내적 동기 Motive, 호불호 Likes/Hates, 90일 인생 북극성 Manifesto, 5대 생체·심리 바이오마커)를 **'전문가 사전 전달 임상 브리핑 시트(Pre-Counseling Clinical Dossier)'**로 자동 가공하여 담당 공인 코치에게 암호화 사전 전달.
- **도출 효과**: 첫 30분의 지루한 문진을 원천 생략하고, 상담 시작 1분 만에 "초개인화 심층 실행 솔루션"으로 즉시 돌입하여 **상담 효율 300% 극대화**.

### 2) 페르소나별 공인 전문가 4대 라인업 (`COUNSELOR_INFO`)
1. 🎓 **이서연 수석 코치**: 서울대 교육상담 석사, KPC 공인코치 (청소년·대학생 진로학습 전문, 만족도 4.99)
2. 💼 **박진우 디렉터**: 글로벌 전략컨설팅 상무 출신, 12년차 시니어 코치 (2030·40 직장인 이직·커리어 전환 헤드헌터, 만족도 4.98)
3. 🌅 **김도현 박사**: CFP 공인재무설계사, 시니어 라이프 전략연구소장 (5060 신중년 은퇴설계 및 시간 주권 수석위원, 만족도 4.97)
4. 🌿 **최유나 소장**: 한국상담심리학회 1급 임상상담사, 마음치유센터장 (번아웃 증후군 & 내면갈등 완화 전문, 만족도 4.99)

### 3) 4중 진입 동선 (Multi-Entry Triggers)
1. **상단 글로벌 내비게이션**: 헤더 `[🩺 전문가 상담 연계]` 캡슐 버튼
2. **5단계 대화 완료 시점**: 챗봇 축하 메시지 내 `[🩺 이 대화 결과로 공인 전문 코치 1:1 심층 상담 연계하기]` 버튼
3. **진단 리포트 모달 (`reportModal`)**: 상단 하이라이트 배너 `[🩺 AI 진단 결과 연계 1:1 공인 전문가 심층 상담]`
4. **인생 2막 은퇴 나침반 탭 (`view-reborn`)**: `[🌅 은퇴설계 수석위원(김도현 박사) 1:1 사전 진단서 연계 상담]` 전용 카드

### 4) 핵심 함수
| 함수 | 설명 |
|------|------|
| `openConsultantMatchModal(preferredId)` | 세션 내 3대 축과 바이오마커를 브리핑 시트에 동적 주입 후 전문가 매칭 모달 오픈 |
| `selectCounselor(counselorId)` | 4대 전문가 카드 선택 및 라디오 전환 |
| `selectConsultMethod(methodType)` | Zoom 화상 / 전화 코칭 / 서초 대면 방식 선택 |
| `selectConsultSlot(slotId, timeStr)` | 희망 상담 일정 슬롯 선택 |
| `submitConsultantBooking()` | 필수 동의 검증 → 접수번호(`GN-CNS-2026-XXXX`) 생성 → 영수증 모달 출력 및 로컬 저장 |
