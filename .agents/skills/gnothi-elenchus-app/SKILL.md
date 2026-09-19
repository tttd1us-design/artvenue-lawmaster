---
name: gnothi-elenchus-app
description: "GNŌTHI(그노티) 인생 방향성 진단 & 1:1 라이프 멘토링 SPA 앱의 핵심 기능, 아키텍처, 디자인 시스템, 인증/결제/AI 연동 스킬"
---

# GNŌTHI (그노티) 앱 스킬

## 1. 앱 개요

GNŌTHI(그노티)는 소크라테스 산파술(Socratic Method) 기반의 **인생 방향성 진단 & 1:1 라이프 멘토링** 단일 페이지 웹 앱입니다.

### 핵심 기능 6가지

| 탭 ID | 기능명 | 설명 |
|--------|--------|------|
| `chamber` | 1:1 방향 대화 | 5단계 턴제 소크라테스 산파술 코칭 (고정관념→동기→좋아하는것/싫어하는것→인생 방향 선언→리포트) |
| `swipe` | 3초 본능 스와이프 | 직관 테스트로 내면의 진짜 가치관 발견 (좌/우 스와이프, 키보드 ←/→) |
| `board` | 멘토 이사회 | 4인 멘토(소크라테스, 잡스, 달리오, 아우렐리우스) 관점 제공 |
| `sos` | 마인드 SOS | 24시간 긴급 감정 쿨다운 (인지 왜곡 진단, 충동 행동 3대 금지) |
| `parallel` | 미래 시나리오 | 10년 후 미래 분기점 시뮬레이션 |
| `tracker` | 주간 성장 트래커 | 방향성 실행 진척 추적 |

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

## 9. 외부 리소스

| 리소스 | CDN |
|--------|-----|
| Lucide Icons | `unpkg.com/lucide@latest` |
| Pretendard 폰트 | `cdn.jsdelivr.net/gh/orioncactus/pretendard` |
| MaruBuri 폰트 | `cdn.jsdelivr.net/gh/projectnoonnu/noonfonts` |
| Google Fonts | Cinzel, Gowun Batang, Noto Serif KR, Outfit, Plus Jakarta Sans, Fira Code |

## 10. 개발 가이드

### 새 탭 추가 방법
1. CSS에 `.tab-view` 스타일 추가
2. HTML에 `<div class="tab-view" id="view-{탭ID}">` 추가
3. `<nav class="apple-nav-tabs">`에 `<button class="nav-tab-btn">` 추가
4. JS `switchTab()` 함수가 자동으로 토글 처리

### 새 모달 추가 방법
1. HTML에 `<div class="modal-overlay" id="{모달ID}">` 추가
2. 내부에 `.auth-modal-card` 또는 `.report-modal-card` 사용
3. 닫기: `<button class="close-btn" onclick="closeModal('{모달ID}')">`
4. 열기: JS 함수에서 `document.getElementById('{모달ID}').classList.add('active')`
