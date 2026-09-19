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
  loginMethod: '',  // 'kakao' | 'google' | 'apple' | 'email' | 'demo'
  isVip: false,
  payMethod: 'kakaopay',
  subscriptionDate: null,
};
```

### 핵심 함수
| 함수 | 설명 |
|------|------|
| `initAuthState()` | localStorage에서 세션 복원 → UI 동기화 |
| `loginWith(provider)` | 소셜 로그인 (kakao/google/apple) |
| `loginWithEmail()` | 이메일 + 비밀번호 로그인 |
| `loginDemoUser()` | 체험 계정 1초 로그인 |
| `logoutUser()` | 로그아웃 + 상태 초기화 |
| `handleUserAuthClick()` | 헤더 버튼 → 로그인 or 계정관리 라우팅 |

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
