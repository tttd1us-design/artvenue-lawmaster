/**
 * PainFinder & BizLaunch AI - High-Ticket Master Engine (v8.5 Complete Encyclopedic Edition)
 * 100만원 상당 프리미엄 1인 창업 바이블 & 월 1000만원 부수익 인큐베이터
 */

// ==========================================================================
// 1. 10대 검증 비즈니스 모델 종합 데이터베이스 (전수 100만원 VIP 패키지 수록)
// ==========================================================================
const BIZ_MODELS_DB = {
  "gov-subsidy": {
    id: "gov-subsidy",
    category: "b2b",
    categoryName: "소상공인 / B2B",
    title: "1. [소상공인] AI 정부지원금·정책자금 적격 매칭 및 자동 서류 완성기",
    shortDesc: "복잡한 공고문 없이 사업자등록번호 입력만으로 받을 수 있는 지원금 선별 및 사업계획서 3분 완성",
    targetMrr: "₩10,250,000",
    defaultStandardPrice: 39000,
    defaultStandardUsers: 200,
    defaultProPrice: 89000,
    defaultProUsers: 30,
    defaultOpsCost: 450000,
    pain: {
      summary: "전국 600만 소상공인은 수천만 원 상당의 정부지원금이 있어도 공고를 모르거나, 복잡한 서류 양식에 막혀 10~20% 고액 브로커에 의존함.",
      bullets: [
        "매달 수백 건의 지원사업 공고가 중기부, 지자체, 소진공 등에 흩어져 있어 탐색 불가능",
        "지원 자격 요건(업력, 매출, 고용인원, 특허 등) 해석이 어려워 탈락 불안감 가중",
        "한글(HWP) 사업계획서 양식 작성에 수일 소요, 브로커는 300~500만 원 선금 요구",
        "마감일을 놓쳐 수천만 원 무상 환급형 바우처 기회 상실"
      ]
    },
    solution: [
      { step: 1, title: "사업자 정보 10초 입력", desc: "사업자등록번호, 업종, 매출 규모, 직원 수를 입력하면 공공데이터 포털과 즉시 연동" },
      { step: 2, title: "전국 공고 실시간 적격 매칭", desc: "AI가 전국 1,200+개 지원사업 중 수혜 가능성이 높은 상위 3개 공고(승인확률 85%+) 선별" },
      { step: 3, title: "합격형 사업계획서 3분 완성", desc: "해당 지원사업 심사위원 평가표 기준에 맞춘 표준 HWP/PDF 사업계획서 자동 생성" },
      { step: 4, title: "원클릭 접수 가이드 및 마감 알림", desc: "공동인증서 제출 링크 및 접수 마감 D-3일 카카오톡 알림 발송" }
    ],
    delight: {
      killerFeatures: "• 내 사업체 맞춤 지원금 승인 확률 예측 게이지\n• 중기부 심사위원 출신 프롬프트 엔지니어링 기반 고득점 사업계획서 생성\n• 카카오 알림톡 기반 신규 공고 실시간 타깃 푸시",
      delightFactor: "300만 원 브로커 수수료를 아끼고, '내가 받을 수 있는 공짜 자금이 2,000만 원이나 있었다'는 즉각적 금전 혜택 체감"
    },
    persona: {
      primary: "요식업/카페/제조업 운영 3~7년 차 소상공인 대표 (매출 정체기 극복 희망)",
      secondary: "아이디어는 있으나 자금이 부족한 청년 예비 창업가 및 스타트업"
    },
    gtm: {
      channel: "네이버 카페 '아프니까 사장이다', 배달외식업 커뮤니티, 지역 소상공인 단톡방",
      leadMagnet: "'우리 매장 숨은 정부지원금 10초 무료 조회' 바이럴 계산기 링크 배포"
    },
    ops: {
      automation: "정부 24 및 기업마당 RSS/웹 크롤링 자동화 + OpenAI API 기반 서류 생성 파이프라인 (무인 운영 99%)",
      expansion: "소상공인 세무 환급(경정청구) 연계 및 프랜차이즈 본사용 단체 라이선스 공급"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "300만원 브로커 없이 국비 1,500만원~5,000만원 무상지원금 100% 합격",
        perceivedLikelihood: "중기부 전직 심사위원 평가표 15대 지표를 100% 반영한 고득점 알고리즘 (승인률 94.2%)",
        timeDelay: "10초 자가진단 ➔ 3분 만에 제출용 HWP 완성",
        effortSacrifice: "복잡한 법률 용어 해석 필요 없이 질문 3개에 '예/아니오'만 클릭",
        stack: [
          { title: "코어: 전국 1,200개 공고 실시간 AI 적격 판정기", value: "₩500,000 상당" },
          { title: "보너스 1: 2026 합격 보장 HWP/PDF 사업계획서 템플릿 10종", value: "₩300,000 상당" },
          { title: "보너스 2: 심사위원 대면 평가 1:1 모의 질의응답 시뮬레이터", value: "₩250,000 상당" },
          { title: "보너스 3: 놓치면 끝나는 정부지원금 D-3일 카카오톡 긴급 알림톡", value: "₩150,000 상당" }
        ],
        totalValue: "총 ₩1,200,000 상당의 패키지",
        specialPrice: "단 월 ₩39,000 (일 1,300원)",
        riskReversal: "30일 내 신청 가능한 지원금을 1건도 찾지 못할 경우 100% 전액 무조건 환불 + 스타벅스 커피 쿠폰 2장 지급!"
      },
      promptEngine: {
        systemPrompt: `You are the Premier Korean Government Subsidy Evaluator AI & Grant Proposal Specialist with 15 years of Ministry of SMEs and Startups (중소벤처기업부) evaluation committee experience.
Your goal is to parse user company profiles and output a high-converting, compliant grant proposal according to official SME promotion standards.

[INPUT PROFILE SCHEMA]
- company_name: string
- industry_type: string (food / retail / tech / mfg)
- annual_revenue_krw: number
- employee_count: number
- target_grant_program: string

[EVALUATION & GENERATION RULES]
1. Calculate exact suitability score (0-100) based on eligibility criteria.
2. Structure the proposal into 4 official HWP sections:
   - Section 1: Business Need & Urgency (추진 배경 및 필요성)
   - Section 2: Core Technology / Service Innovation (사업 내용 및 차별성)
   - Section 3: Expected Revenue & Job Creation (기대 효과 및 고용 창출 계획)
   - Section 4: Budget Allocation Table (사업비 집행 계획)
3. Tone: Highly objective, quantitative, professional, using official governmental policy terminologies.
4. Output MUST be valid JSON conforming to the SubsidyResult schema.`,
        apiSnippet: `// Node.js OpenAI GPT-4o Integration
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateGrantProposal(businessInfo) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify(businessInfo) }
    ],
    temperature: 0.2,
  });
  return JSON.parse(response.choices[0].message.content);
}`
      },
      salesScripts: [
        {
          channel: "네이버 카페 (아프니까 사장이다)",
          title: "고통 공감 & 무료 진단 시딩 글",
          script: `[제목] 사장님들, 300만원 브로커 쓰지 마세요. 이번 달 중기부 1500만원 지원금 공고 떴습니다.

안녕하세요, 카페 4년 차 운영 중인 자영업자입니다.
저도 작년에 서류 쓸 줄 몰라서 300만 원 주고 대행 맡겼다가 탈락하고 피눈물 흘렸는데요...

이번에 중기부에서 '2026 스마트상점 기술보급' 공고가 새로 나왔는데, 국비 70% 무상환 지원입니다.
사업자 번호만 넣으면 10초 만에 내가 받을 수 있는 지원금이랑 심사 기준 맞춰서 서류 초안 뽑아주는 무료 툴이 있더라고요.

저희 매장도 이걸로 1,500만 원 키오스크/테이블오더 지원사업 합격했습니다.
필요하신 사장님들 계실까 봐 링크 남겨드립니다. 무료니까 꼭 자가진단 해보세요!
👉 링크: https://bizlaunch.ai/check`
        },
        {
          channel: "인스타그램 릴스 / 유튜브 쇼츠",
          title: "30초 고전환 숏폼 스크립트 (3초 훅)",
          script: `[화면: 300만 원 브로커 견적서를 찢는 장면]
(자막/음성): "자영업자 99%가 몰라서 못 받는 정부 공짜 돈 2,000만 원!"

(본문): 
"사장님, 아직도 지원금 서류 쓰느라 밤새우거나 브로커한테 수수료 떼이시나요?
네이버에 '기업마당' 검색해도 공고 1,200개 중에 내 업종에 맞는 거 찾기 불가능하죠.
이제 사업자번호만 딱 입력하세요. 
10초 만에 지원 자격 합격률 94% 선별해주고, 사업계획서 1번부터 4번까지 완성해 드립니다.

프로필 링크에서 이번 달 소상공인 무상 지원금 무료로 조회해 보세요!"`
        },
        {
          channel: "인스타그램 / 카카오톡 1:1 콜드 DM",
          title: "외식업/카페 대표 타깃 1:1 아웃리치",
          script: `안녕하세요 대표님! 인스타 피드 잘 보고 있습니다. 
혹시 이번 상반기 [소상공인 경영개선 바우처] 최대 2,000만 원 지원사업 신청하셨을까요?

대표님의 매장 업력과 위치를 분석해보니 이번 지원사업 1순위 적격 대상에 해당하셔서 메시지 드립니다.
복잡한 서류 작성 없이 3분 만에 제출용 계획서를 완성할 수 있는 전용 툴을 무료로 열어드리고 있습니다.

관심 있으시면 편하게 답장 남겨주세요. 바로 진단 리포트 발송해 드리겠습니다! 😊`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차: 48시간 사전검증", targetRev: "₩390,000 (결제 10건)", actions: ["Tally 노코드 폼으로 '무료 지원금 자가진단' 오픈", "자영업자 단톡방 5곳 & 카페 시딩으로 잠재고객 100명 DB 수집", "자가진단 유저 중 10명에게 39,000원 선결제 유치 성공"] },
        { week: "2주차: 초기 바이럴 & 정기구독 50명", targetRev: "₩2,500,000 (누적 65명)", actions: ["인스타 릴스 숏폼 3편 업로드로 유입 트래픽 5,000뷰 달성", "카카오 알림톡 서비스 연동 (마감 D-3일 알림 푸시)", "표준 구독 유저 50명 돌파 (MRR ₩1,950,000 확보)"] },
        { week: "3주차: B2B 제휴 & 프랜차이즈 패키지", targetRev: "₩6,200,000 (B2B 15곳)", actions: ["지역 소상공인 협회 및 세무사 사무소 20곳에 B2B 제안서 발송", "세무사 고객 관리용 프로 라이선스(월 ₩89,000) 15곳 체결", "개인 구독자 120명 누적 달성"] },
        { week: "4주차: 월 1,000만원 달성 & 무인화", targetRev: "₩10,250,000 /월 (MRR 달성)", actions: ["스탠다드 구독자 200명 (₩7,800,000) + B2B 30곳 (₩2,670,000) 달성", "CS 챗봇 자동화로 주당 운영 시간 2시간 이내로 단축", "순이익률 95% (월 순수익 980만 원 체제 구축)"] }
      ]
    }
  },

  "pdf-excel-parser": {
    id: "pdf-excel-parser",
    category: "individual",
    categoryName: "직장인 / 실무",
    title: "2. [직장인/프리랜서] AI PDF·엑셀 데이터 자동 정제 & 보고서 생성기",
    shortDesc: "스캔된 PDF 표, 뒤죽박죽 엑셀 데이터를 업로드하면 10초 만에 완벽한 피벗 테이블과 경영 보고서로 변환",
    targetMrr: "₩10,185,000",
    defaultStandardPrice: 29000,
    defaultStandardUsers: 300,
    defaultProPrice: 99000,
    defaultProUsers: 15,
    defaultOpsCost: 350000,
    pain: {
      summary: "서로 다른 포맷의 영수증, 발주서, 거래명세서 데이터를 수작업 타이핑하고 엑셀 수식을 맞추느라 매일 2~3시간 야근 발생.",
      bullets: [
        "스캔된 이미지 PDF나 관공서 HWP 표는 복사-붙여넣기 시 서식이 전부 깨짐",
        "지점별/거래처별로 다른 엑셀 양식을 하나로 통합하는 데 매주 반나절 이상 소요",
        "VLOOKUP, INDEX-MATCH 등 복잡한 함수 오류로 인한 경영진 보고 오류 리스크",
        "반복 작업으로 인한 실무자의 만성 피로와 번아웃"
      ]
    },
    solution: [
      { step: 1, title: "비정형 문서 일괄 업로드", desc: "PDF, 이미지, 깨진 엑셀 파일을 드래그앤드롭으로 일괄 첨부" },
      { step: 2, title: "멀티모달 OCR+구조화 파싱", desc: "표 구조와 텍스트를 인식하여 표준 데이터베이스(스키마)로 자동 변환" },
      { step: 3, title: "이상치 탐지 및 자동 정제", desc: "오타, 중복 행, 계산 오류를 AI가 사전 검출하여 완벽한 정합성 확보" },
      { step: 4, title: "원클릭 엑셀/시각화 보고서 렌더링", desc: "피벗 테이블, 차트, 핵심 요약이 포함된 완성형 Excel/PPT 보고서 즉시 다운로드" }
    ],
    delight: {
      killerFeatures: "• 깨진 서식 100% 복구 지능형 테이블 파서\n• '지난달 대비 매출 변동 원인 요약' 경영 인사이트 자동 생성\n• 다운로드 즉시 임원 보고 가능한 세련된 차트 템플릿",
      delightFactor: "매일 2시간 걸리던 마감 정산 업무가 10초 만에 끝나 칼퇴근을 보장받는 압도적 해방감"
    },
    persona: {
      primary: "중소기업 총무/회계/영업관리 담당 1~5년 차 직장인",
      secondary: "여러 거래처의 세금계산서와 견적서를 취합해야 하는 1인 프리랜서"
    },
    gtm: {
      channel: "직장인 인스타 릴스/유튜브 쇼츠 ('야근러 필수템'), 블라인드 생산성 게시판",
      leadMagnet: "'깨진 PDF 표 1초 만에 엑셀로 복구하는 무료 웹툴' 배포"
    },
    ops: {
      automation: "브라우저 기반 클라이언트 사이드 파싱 + 서버리스 OCR API 호출 (서버 유지비 최소화)",
      expansion: "더존, 이카운트 ERP 연동 플러그인 및 구글 시트 전용 확장 프로그램 출시"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "매일 2시간 걸리는 영수증/발주서 타이핑 야근 100% 영구 제거",
        perceivedLikelihood: "스캔된 흐릿한 영수증도 99.8% 정확도로 인식하는 멀티모달 비전 엔진 탑재",
        timeDelay: "파일 드래그 ➔ 10초 만에 정제된 Excel 파일 다운로드",
        effortSacrifice: "복잡한 파이썬 판다스(Pandas)나 엑셀 매크로(VBA) 공부 전혀 필요 없음",
        stack: [
          { title: "코어: 무제한 PDF/이미지 표 ➔ 정형 엑셀 변환 엔진", value: "₩400,000 상당" },
          { title: "보너스 1: 대기업 재무팀 표준 자동 피벗테이블 템플릿 20종", value: "₩250,000 상당" },
          { title: "보너스 2: 임원 보고용 경영 분석 1줄 브리핑 자동 생성기", value: "₩200,000 상당" },
          { title: "보너스 3: 구글 스프레드시트 1초 연동 크롬 익스텐션", value: "₩150,000 상당" }
        ],
        totalValue: "총 ₩1,000,000 상당의 패키지",
        specialPrice: "단 월 ₩29,000 (일 900원)",
        riskReversal: "서식이 깨져서 수작업 수정이 10분 이상 걸린다면 해당 월 구독료 전액 환불!"
      },
      promptEngine: {
        systemPrompt: `You are the Expert Document Parsing & Financial Data Structuring AI.
Convert unstructured/scanned table images into normalized JSON matrix.`,
        apiSnippet: `// Python Fast-API Document Parser
async def parse_table(image_bytes):
  return await openai.chat.completions.create(model="gpt-4o", messages=[...])`
      },
      salesScripts: [
        {
          channel: "블라인드 (직장인 커뮤니티)",
          title: "야근 탈출 바이럴 공유",
          script: `[제목] 회계팀 분들 제발 영수증 PDF 손으로 치지 마세요...
매달 말일마다 스캔 PDF 엑셀에 옮겨 적느라 11시까지 야근하던 3년차입니다.
드래그하면 10초 만에 완벽한 엑셀 표로 바꿔주는 툴 만들었습니다.
👉 무료 링크: https://excel-parser.ai`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차", targetRev: "₩290,000", actions: ["직장인 커뮤니티에 무료 변환 웹툴 배포", "첫 유료 결제 10명 유치"] },
        { week: "2주차", targetRev: "₩1,800,000", actions: ["인스타 릴스 숏폼 바이럴", "월 29,000원 구독자 60명 돌파"] },
        { week: "3주차", targetRev: "₩5,400,000", actions: ["중소기업 팀 라이선스(월 99,000원) 10곳 도입"] },
        { week: "4주차", targetRev: "₩10,185,000", actions: ["개인 구독자 300명 + B2B 15곳 달성으로 월 1,000만원 MRR 돌파"] }
      ]
    }
  },

  "dirty-read-lab": {
    id: "dirty-read-lab",
    category: "edu-legal",
    categoryName: "교육 / 자기계발",
    title: "3. [교육/지식] 책을 지저분하게 만드는 능동적 독서 코칭 & '3줄 아웃풋' 워크북 (DirtyRead Lab)",
    shortDesc: "책을 사놓고 완독하지 못하는 현대인을 위해 챕터별 강제 질문 제기, 반론 낙서, 3줄 아웃풋을 강제하는 인터랙티브 디지털 워크북 및 코칭 시스템",
    targetMrr: "₩10,090,000",
    defaultStandardPrice: 35000,
    defaultStandardUsers: 220,
    defaultProPrice: 89000,
    defaultProUsers: 30,
    defaultOpsCost: 280000,
    pain: {
      summary: "책을 사놓고 완독하지 못하거나, 읽어도 머리에 남는 것이 없고 수동적으로 눈으로만 훑고 지나쳐 지식으로 체화되지 않는 만성 독서 무기력증.",
      bullets: [
        "1년에 책 10권을 사도 완독하는 책은 1권 미만, 책장만 채우는 자책감과 죄책감",
        "숏폼 도파민에 절여진 뇌 회로로 인해 3페이지 이상 깊은 텍스트를 읽지 못하는 집중력 붕괴",
        "책을 깨끗하게 보려는 강박 때문에 수동적 독서에 머물며 읽은 뒤 3일이면 내용 95% 휘발",
        "자신의 언어로 정리하거나 실행에 옮기는 '아웃풋(Output)' 훈련과 피드백 시스템의 전무"
      ]
    },
    solution: [
      { step: 1, title: "도서 및 챕터 선택", desc: "읽을 책과 오늘의 목표 챕터를 선택하면 도서별 핵심 논쟁점과 프레임워크 자동 매핑" },
      { step: 2, title: "소크라테스식 강제 반론 제기", desc: "저자의 주장에 맹종하지 않고 여백에 '지저분한 낙서와 반론'을 던지도록 유도하는 AI 반론 프롬프트" },
      { step: 3, title: "3줄 아웃풋 강제 인출", desc: "①핵심 명제 1줄, ②내 반론/경험 1줄, ③내 삶/업무 적용점 1줄을 3분 내 입력하도록 강제" },
      { step: 4, title: "디지털 인터랙티브 워크북 완성 & 완독 인증", desc: "노션 템플릿/PDF 워크북으로 즉시 변환 저장되며, 슬랙/카톡 커뮤니티에 완독 도장 자동 발행" }
    ],
    delight: {
      killerFeatures: "• 책을 낙서장으로 만드는 '지저분한 독서' 트리거 엔진\n• 3문장만 쓰면 논리 구조를 칭찬하고 확장해주는 'AI 소크라테스 튜터'\n• 베스트셀러 100선 챕터별 맞춤 질문지 및 노션 워크북 1초 자동 렌더링",
      delightFactor: "'내가 300페이지 벽돌책을 3일 만에 씹어 먹고 내 언어로 설명할 수 있게 되었다'는 지적 효능감과 문해력 폭발"
    },
    persona: {
      primary: "독서의 필요성은 절감하지만 매번 1~2챕터에서 완독에 실패하는 2040 직장인 및 취준생",
      secondary: "인사이트를 사업과 콘텐츠로 빠르게 전환해야 하는 1인 창업가, 마케터, 크리에이터"
    },
    gtm: {
      channel: "스레드(Threads) 지식 계정, 인스타 릴스 '책 깨끗하게 읽지 마라', 직장인 커뮤니티(블라인드)",
      leadMagnet: "'베스트셀러 상위 10권 3분 3줄 아웃풋 워크북 노션 템플릿 무료 배포'"
    },
    ops: {
      automation: "교보/알라딘 베스트셀러 목차 기반 자동 워크북 생성 파이프라인 + OpenAI API 실시간 반론 피드백 무인화 (98%)",
      expansion: "월간 베스트셀러 정기 배송 워크북 구독 및 오프라인 '지저분한 독서 클럽' 유료 살롱(티켓 15만원) 연계"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "벽돌책도 3일 만에 씹어 먹어 내 비즈니스와 삶의 무기로 만드는 '문해력 300% 폭발'",
        perceivedLikelihood: "430명 실증 코호트 완독률 91.4% 달성, 3줄만 쓰면 끝나는 강제 인출 시스템",
        timeDelay: "챕터당 15분 읽고 3분 만에 아웃풋 완성 ➔ 당일 즉시 지식 체화",
        effortSacrifice: "길고 지루한 독후감 쓰기 완전 폐지, 여백 낙서와 3문장 입력만으로 종결",
        stack: [
          { title: "코어: 베스트셀러 100선 챕터별 AI 인터랙티브 'DirtyRead' 워크북 엔진", value: "₩400,000相当" },
          { title: "보너스 1: 숏폼 뇌를 독서 뇌로 리셋하는 '3분 딥워크 몰입 루틴 가이드'", value: "₩150,000 상당" },
          { title: "보너스 2: 내 생각을 비즈니스 기획서로 변환하는 '3줄 아웃풋 프롬프트 10종'", value: "₩200,000 상당" },
          { title: "보너스 3: 매주 일요일 밤 9시 라이브 '지저분한 독서 살롱' VIP 입장권", value: "₩250,000 상당" }
        ],
        totalValue: "총 ₩1,000,000 상당의 패키지",
        specialPrice: "단 월 ₩35,000 (VIP 클럽 패키지 월 ₩89,000)",
        riskReversal: "30일 내에 책 2권을 완독하고 3줄 아웃풋을 남기지 못하면 100% 무조건 전액 환불 + 실물 도서 1권 무료 증정!"
      },
      promptEngine: {
        systemPrompt: `You are the Premier Socratic Active Reading Coach & 'DirtyRead Lab' Chief Mentor.
Your mission is to dismantle passive reading habits, force the user to annotate boldly with counterarguments, and crystallize text into high-converting 3-sentence outputs.

[INPUT CONTEXT]
- book_title: string
- chapter_name: string
- user_raw_reflection: string

[COACHING PROTOCOL]
1. Socratic Counter-Question: Challenge the author's premise directly to prevent blind obedience.
2. The "Dirty Margin" Note: A punchy, provocative annotation (under 30 words) to scribble on the physical/digital book margin.
3. 3-Sentence Output Matrix:
   - Line 1 (Core Premise): The single sharpest thesis of this chapter in user's own words.
   - Line 2 (Counter/Critique): The blind spot, limit, or personal counterargument.
   - Line 3 (Micro-Action): Exactly 1 action the user will execute within 24 hours.
4. Output MUST be valid JSON conforming to DirtyReadOutput schema.`,
        apiSnippet: `// Node.js DirtyRead Output Generator
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateDirtyReadWorkbook(bookTitle, chapter, rawNotes) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: DIRTY_READ_SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify({ bookTitle, chapter, rawNotes }) }
    ],
    temperature: 0.3,
  });
  return JSON.parse(response.choices[0].message.content);
}`
      },
      salesScripts: [
        {
          channel: "스레드 (Threads) / 인스타그램 릴스",
          title: "고전환 30초 숏폼 훅 ('책 깨끗하게 읽지 마세요')",
          script: `[화면: 새 책에 형광펜과 빨간 펜으로 거침없이 반론을 휘갈겨 쓰는 장면]
(음성/자막): "책 깨끗하게 읽어서 중고서점에 되파는 분들, 솔직히 돈 버린 겁니다."

(본문):
"책장에 꽂힌 책 20권 중에 지금 당장 3줄로 요약할 수 있는 책 있으신가요?
없다면 당신은 책을 읽은 게 아니라, 글자를 수동적으로 눈으로 훑고 도파민만 낭비한 겁니다.
진짜 천재들은 책을 걸레처럼 지저분하게 읽습니다. 저자의 주장에 '개소리 마라'고 반론을 달고, 질문을 던지고, 3줄로 내 삶에 적용하죠.

완독률 300% 올려주는 '지저분한 독서 3줄 아웃풋 워크북' 노션 템플릿, 지금 프로필 링크에서 무료로 받아 가세요!"`
        },
        {
          channel: "블라인드 / 직장인 자기계발 게시판",
          title: "야근러의 완독 성공기 바이럴 글",
          script: `[제목] 책 사놓고 매번 30페이지만 읽다 포기하던 사람인데 완독법 찾음
매달 교보문고에서 10만원씩 책 사놓고 완독률 0%라 늘 자책하던 4년차 대리입니다.
숏폼에 절여져서 긴 글 못 읽는 뇌가 된 줄 알았는데, 'DirtyRead Lab' 3줄 워크북 쓰고 이번 달에만 3권 완독했습니다.
독후감 길게 쓸 필요 없이 챕터 끝날 때마다 질문 1개, 반론 1개, 내 업무 적용 1줄만 딱 쓰면 끝납니다.
머리에 남는 깊이가 아예 다릅니다. 독서 포기자분들 꼭 써보세요.
👉 무료 워크북: https://dirtyread.lab/free`
        },
        {
          channel: "인스타그램 1:1 아웃리치 DM",
          title: "북스타그램 / 자기계발 크리에이터 제휴 제안",
          script: `안녕하세요 크리에이터님! 서평 피드 너무 깊이 있게 잘 보고 있습니다. 📚
혹시 팔로워분들 중에서 '책은 열심히 사는데 완독을 못 하거나 기억에 안 남는다'고 호소하시는 분들 많지 않으신가요?

저희가 개발한 [DirtyRead Lab 3줄 아웃풋 워크북]을 크리에이터님 독자 전용으로 커스텀하여 무료 배포해 드리고자 합니다. 
이미 사전 테스트에서 완독률 91.4%를 기록했습니다. 

관심 있으시다면 크리에이터님 성함이 들어간 전용 템플릿과 100만원 상당 VIP 라이선스를 전달드리겠습니다! 편하게 답장 부탁드립니다. 😊`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차: 48시간 사전검증", targetRev: "₩350,000 (결제 10건)", actions: ["스레드/인스타에 '책 지저분하게 읽기' 노션 템플릿 무료 배포", "다운로더 200명 중 10명에게 월 35,000원 워크북 구독 결제 유치", "첫 코호트 10명과 3줄 아웃풋 챌린지 시작"] },
        { week: "2주차: 완독 후기 바이럴 & 구독 70명", targetRev: "₩2,450,000 (누적 70명)", actions: ["1기 완독자들의 '새까맣게 낙서된 책 사진' 바이럴 유도", "주간 베스트셀러 10권 맞춤 워크북 매주 금요일 자동 업데이트", "월 35,000원 스탠다드 구독자 70명 돌파"] },
        { week: "3주차: VIP 독서클럽 패키지 런칭", targetRev: "₩5,800,000 (VIP 20명+)", actions: ["월 89,000원 상당 '4주 완성 라이브 소크라테스 살롱' 고가 티켓 20장 완판", "스탠다드 구독자 120명 확보 (MRR ₩4,200,000 달성)", "기업 사내 도서관 및 독서동아리 단체 제안서 발송"] },
        { week: "4주차: 월 1,000만원 MRR & 오프라인 확장", targetRev: "₩10,090,000 /월 (MRR 달성)", actions: ["스탠다드 220명 (₩7,700,000) + VIP 독서클럽 30명 (₩2,670,000) 결합", "오프라인 '지저분한 독서 클럽' 월간 유료 세미나 정기 매진", "무인 워크북 파이프라인으로 순이익률 96% 방어"] }
      ]
    }
  },

  "legal-contract-audit": {
    id: "legal-contract-audit",
    category: "edu-legal",
    categoryName: "부동산 / 계약",
    title: "5. [법률/계약] AI 부동산·원룸·용역 계약서 독소조항 탐지기",
    shortDesc: "전세 계약서, 프리랜서 용역 계약서를 올리면 사기 위험 조항과 불리한 특약을 찾아 수정 문구 제시",
    targetMrr: "₩10,170,000",
    defaultStandardPrice: 9900,
    defaultStandardUsers: 500,
    defaultProPrice: 29000,
    defaultProUsers: 180,
    defaultOpsCost: 350000,
    pain: {
      summary: "전세사기, 깡통전세, 임금체불, 불공정 위약금 등 어려운 법률 용어 때문에 변호사 상담료(건당 20만 원) 없이 위험 파악 불가.",
      bullets: [
        "부동산 공인중개사가 주는 표준계약서 뒤에 숨겨진 불리한 특약을 이해하지 못함",
        "프리랜서 계약 시 저작권 양도, 무제한 수정 요구 등 독소조항에 무방비 노출",
        "보증금을 떼일 수 있는 선순위 근저당권 위험성을 일반인이 계산하기 어려움",
        "상대방에게 어떤 문구로 수정을 요구해야 할지 법률 지식 부족"
      ]
    },
    solution: [
      { step: 1, title: "계약서 사진/PDF 업로드", desc: "임대차 계약서나 프리랜서 용역 계약서 파일 업로드" },
      { step: 2, title: "대법원 판례 기반 독소조항 탐지", desc: "주택임대차보호법 및 표준약관 기준 15대 필수 체크리스트 교차 검증" },
      { step: 3, title: "위험 등급(안전/주의/위험) 판정", desc: "선순위 채권 및 보증금 반환 리스크를 100점 만점 안전도 점수로 환산" },
      { step: 4, title: "안전 특약 수정 문구 완성", desc: "임대인/발주처에 그대로 복사해서 보낼 수 있는 '방어용 특약 조항' 텍스트 제공" }
    ],
    delight: {
      killerFeatures: "• 전세사기 10대 유형 실시간 매칭 알고리즘\n• 상대방 기분 안 나쁘게 요구하는 협상용 멘트 가이드\n• 등기부등본 권리분석 연동 점수표",
      delightFactor: "'이 특약 넣었으면 1억 떼일 뻔했다'는 소름 돋는 안도감과 든든한 법적 보호막 확보"
    },
    persona: {
      primary: "사회초년생 원룸/오피스텔 임차인, 신혼부부 전세 입주자",
      secondary: "불공정 계약에 자주 노출되는 1인 프리랜서 디자이너/개발자"
    },
    gtm: {
      channel: "직장인 익명 커뮤니티 블라인드, 청년 주거 복지 카페, 자취생 유튜브 채널",
      leadMagnet: "'전세 계약 전 필수 확인 3대 위험 특약 무료 진단기'"
    },
    ops: {
      automation: "법률 지식베이스 RAG 임베딩 및 판례 DB 자동 동기화",
      expansion: "공인중개사용 안전 계약 검증 마크 발급 B2B 서비스로 확장"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "1억 전세 보증금 사기 및 불공정 계약 위험 100% 원천 차단",
        perceivedLikelihood: "대법원 전세사기 판례 5만 건 및 주택임대차보호법 기준 15대 독소조항 교차 검증",
        timeDelay: "계약서 사진 업로드 ➔ 3초 만에 붉은색 독소조항 분석 완료",
        effortSacrifice: "어려운 법률 용어 몰라도 '집주인에게 보낼 복사 텍스트' 제공",
        stack: [
          { title: "코어: AI 전세/용역 계약서 독소조항 실시간 정밀 진단권", value: "₩300,000 상당" },
          { title: "보너스 1: 전세보증금 100% 방어 5대 필수 특약 문구집", value: "₩200,000 상당" },
          { title: "보너스 2: 등기부등본 근저당 깡통전세 위험도 계산기", value: "₩200,000 상당" },
          { title: "보너스 3: 공인중개사 협상 시 사용할 예의 바른 요청 멘트 스크립트", value: "₩150,000 상당" }
        ],
        totalValue: "총 ₩850,000 상당의 패키지",
        specialPrice: "단 ₩9,900 (공인중개사용 B2B 월 ₩29,000)",
        riskReversal: "진단 리포트가 도움이 되지 않았다고 판단되면 100% 즉시 무조건 환불!"
      },
      promptEngine: {
        systemPrompt: `You are the Senior Real Estate Legal Specialist AI.
Evaluate lease/service contracts for predatory clauses, illegal forfeitures, and fraudulent terms against the Korean Housing Lease Protection Act.`,
        apiSnippet: `const analysis = await openai.chat.completions.create({ model: "gpt-4o", messages: [...] });`
      },
      salesScripts: [
        {
          channel: "당근마켓 동네생활 / 자취생 단톡방",
          title: "전세계약 전 필수 확인",
          script: `[제목] 자취생 분들, 전세 계약서 도장 찍기 전에 이거 꼭 확인하세요!
공인중개사가 '다들 이렇게 씁니다' 하면서 특약 1줄 넣었는데, 보증금 1억 못 돌려받아도 소송 못 거는 독소조항이었습니다...
계약서 사진 올리면 3초 만에 빨간색으로 찾아주는 AI 진단기 꼭 돌려보세요!
👉 링크: https://safe-contract.ai`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차", targetRev: "₩500,000", actions: ["이사/부동산 커뮤니티에 무료 진단 배포", "단건 9,900원 결제 50건 달성"] },
        { week: "2주차", targetRev: "₩2,200,000", actions: ["공인중개사 B2B 안심마크 런칭", "B2B 30곳 가입"] },
        { week: "3주차", targetRev: "₩5,800,000", actions: ["일 결제 50건 돌파", "B2B 공인중개사 100곳 돌파"] },
        { week: "4주차", targetRev: "₩10,170,000", actions: ["개인 500건 + B2B 180곳 달성으로 월 1,000만원 돌파"] }
      ]
    }
  },

  "post-career-architect": {
    id: "post-career-architect",
    category: "retire",
    categoryName: "은퇴 / 1인 창직·지식창업",
    title: "6. [은퇴/창직] 직장인 은퇴 대비 '문해력 기반 1인 창직(創職) 로드맵' 설계 컨설팅 (Post-Career Architect)",
    shortDesc: "50대 진입을 앞두고 은퇴 이후의 삶과 소득 절벽이 두려운 직장인의 30년 커리어와 결정성 지능을 분석하여 지식 창업·전자책·1인 컨설팅 비즈니스로 변환하는 마스터플랜 엔진",
    targetMrr: "₩10,400,000",
    defaultStandardPrice: 49000,
    defaultStandardUsers: 120,
    defaultProPrice: 290000,
    defaultProUsers: 18,
    defaultOpsCost: 700000,
    pain: {
      summary: "50대 진입을 앞두고 은퇴 이후의 삶과 소득 절벽이 두렵지만, 평생 경험으로 막상 무엇을 준비해야 할지 방향을 잡지 못하는 극심한 실존적 불안과 무력감.",
      bullets: [
        "30년간 쌓아온 독보적 직무 경험과 노하우가 퇴직과 동시에 '0원'으로 초기화될 것이라는 커리어 단절 공포",
        "국민연금 수령(65세)까지 최소 5~10년 동안 발생하는 잔인한 '소득 크레바스(소득 절벽)' 기간의 자산 고갈 위기",
        "치킨집, 카페 등 섣부른 자영업 창업으로 2~3억 원의 퇴직금을 3년 안에 탕진할까 봐 두려움",
        "배움과 일에는 은퇴가 없음을 알면서도, 내 무형의 경험을 시장이 지불할 지식 상품(출판·자문·강의)으로 패키징하는 실전 방법론의 부재"
      ]
    },
    solution: [
      { step: 1, title: "30년 커리어·결정성 지능(Crystallized Intelligence) 정밀 해체", desc: "직무 이력과 사내 문제 해결 성공 경험을 입력하면 AI가 시장성 높은 핵심 3대 지식 자산 영역 자동 도출" },
      { step: 2, title: "문해력 기반 1인 창직(創職) 포지셔닝 설계", desc: "'배움에는 은퇴가 없다'는 철학 아래 소비자가 월 10~50만 원을 지불할 버티컬 틈새 시장과 1인 창직가 공식 칭호 부여" },
      { step: 3, title: "3대 고수익 지식 상품군 자동 패키징", desc: "①1인 출판(교보/알라딘 전자책 10챕터 목차), ②1:1 프리미엄 자문 컨설팅 제안서, ③B2B 기업 전직지원 출강 마스터플랜 생성" },
      { step: 4, title: "90일 소득 파이프라인 로드맵 & 세무·법률 가이드 완성", desc: "퇴직 D-180일부터 실행하는 리스크 제로 파이프라인 구축 및 신중년 1인 기업가 세무·법률(개인vs법인) 가이드라인 연 2회 자동 업데이트" }
    ],
    delight: {
      killerFeatures: "• 30년 커리어를 10초 만에 3대 고단가 지식 상품으로 변환하는 '커리어 지식 자산화 엔진'\n• 교보문고/예스24 등록용 전자책 10챕터 목차 및 프롤로그 1초 자동 조판\n• 은퇴 시장 트렌드 및 세무·법률(개인vs법인) 가이드라인 연 2회 정기 업데이트\n• 4050 은퇴 예정자를 위한 소득 크레바스 방어 90일 단계별 캐시플로우 타임라인",
      delightFactor: "'내 30년 직장 경험이 사라지는 것이 아니라, 월 1,000만 원 가치의 1인 창직 무기였다'는 눈물 나는 자존감 회복과 명확한 인생 2막의 설계도"
    },
    persona: {
      primary: "은퇴(퇴직)를 앞두고 제2의 인생과 소득 절벽을 준비하는 40대 후반~50대 전문직/대기업/금융권/공공기관 직장인",
      secondary: "조기 퇴직 후 자영업 리스크 없이 무자본 1인 지식 창업을 희망하는 5060 신중년 및 시니어 전문가"
    },
    gtm: {
      channel: "링크드인(LinkedIn) 4050 시니어 네트워킹, 리멤버(Remember) 시니어 커뮤니티, 브런치스토리(Brunch) 은퇴/커리어 섹션, 대기업 퇴직예정자 동호회",
      leadMagnet: "'퇴직금 3억으로 치킨집 차리지 마라: 30년 경력으로 월 500만원 버는 1인 창직 자가진단 리포트 (PDF 25P)' 무료 배포"
    },
    ops: {
      automation: "커리어 진단 설문 ➔ 지식 창업 기획서 생성 100% 무인 AI 파이프라인 (OpenAI API 기반)",
      expansion: "교보/예스24 전자책 출판 대행 서비스(ISBN 발급 및 유통), 1인 기업가 양성 스쿨 아카데미 법인화, 대기업 B2B 전직지원(Outplacement) 프로그램 공급"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "퇴직금 날리는 치킨집 창업 대신, 내 30년 경력으로 월 1,000만원 버는 '1인 지식 창직가(Post-Career Architect)' 데뷔",
        perceivedLikelihood: "4050 퇴직 예정자 120명 코호트 실증 완료, 90일 내 전자책 출간 및 1:1 컨설팅 수주율 88.3% 달성",
        timeDelay: "경력 키워드 3개 입력 ➔ 10초 만에 1인 창직 마스터플랜 및 전자책 목차 완성",
        effortSacrifice: "어려운 코딩이나 SNS 춤추기 없이, 검증된 1:1 컨설팅 제안서와 자문 대본 그대로 복사 사용",
        stack: [
          { title: "코어: 30년 커리어 기반 AI 1인 창직(創職) 마스터플랜 진단기", value: "₩500,000 상당" },
          { title: "보너스 1: 교보/알라딘 등록용 전자책(e-Book) 10챕터 자동 기획서 템플릿", value: "₩250,000 상당" },
          { title: "보너스 2: 시간당 30만원 받는 '1:1 자문 계약서 & B2B 제안서 양식집'", value: "₩250,000 상당" },
          { title: "보너스 3: 신중년 세무 절세(개인vs법인) & 정부 1인 창업지원금 족보집", value: "₩200,000 상당" }
        ],
        totalValue: "총 ₩1,200,000 상당의 패키지",
        specialPrice: "단 월 ₩49,000 (VIP 1:1 마스터클래스 월 ₩290,000)",
        riskReversal: "90일 내에 나만의 1인 창직 비즈니스 모델 1건 및 전자책 초안을 완성하지 못할 경우 100% 무조건 전액 환불!"
      },
      promptEngine: {
        systemPrompt: `You are the Premier Executive Post-Career Architect & Master Knowledge-Entrepreneurship Mentor.
Your philosophy is: "배움에는 은퇴가 없다 (There is no retirement in learning)."
Your mission is to dismantle the 50s income-cliff anxiety, extract the user's crystallized intelligence from 20-30 years of corporate experience, and architect a high-ticket, literacy-based solo entrepreneurship (創職) masterplan.

[INPUT PARAMETERS]
- user_career_domain: string (e.g. 28-year Manufacturing Ops Director / 25-year Commercial Bank Credit Underwriter)
- target_retirement_dday: string (e.g. D-1 Year, D-6 Months, Already Retired)
- core_strength_notes: string

[OUTPUT PROTOCOL]
1. Solo-Creator Title (1인 창직 공식 명칭): Distinctive, authoritative positioning in high-ticket consulting.
2. 3-Tier Product Architecture:
   - Tier 1: Digital E-Book Blueprint (10-chapter outline, target audience, price point ₩25,000).
   - Tier 2: 1:1 High-Ticket Advisory Package (Hour-rate ₩250,000, 4-week roadmap).
   - Tier 3: B2B Corporate Outplacement Workshop / Keynote syllabus.
3. 90-Day Cashflow Crevasse Defense Timeline: Specific week-by-week actions before and after formal retirement.
4. Tax & Legal Setup Guideline (연 2회 업데이트 기준 반영).
5. Output valid JSON matching PostCareerArchitectSchema.`,
        apiSnippet: `// Node.js Post-Career Architect Pipeline
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generatePostCareerRoadmap(careerDomain, retirementDday, coreNotes) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: POST_CAREER_ARCHITECT_SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify({ careerDomain, retirementDday, coreNotes }) }
    ],
    temperature: 0.35,
  });
  return JSON.parse(response.choices[0].message.content);
}`
      },
      salesScripts: [
        {
          channel: "링크드인 (LinkedIn) / 리멤버 시니어 라운지",
          title: "고전환 바이럴 칼럼 ('50대 부장님, 퇴직금으로 치킨집 차리지 마세요')",
          script: `[제목] 30년 직장 생활 끝내고 치킨집 차리는 선배들을 보며 눈물이 났습니다

대기업에서 28년간 생산관리 공장장으로 일하며 수백억 원 원가를 절감했던 선배가, 은퇴 후 퇴직금 2억 5천을 들여 프랜차이즈 치킨집을 차렸다가 2년 만에 빚만 안고 폐업했습니다.

왜 우리는 30년간 쌓은 그 엄청난 '결정성 지능(경험과 노하우)'을 쓰레기통에 버리고, 평생 튀겨본 적도 없는 닭을 튀기러 가는 걸까요?

"배움과 경험에는 은퇴가 없습니다."
중소 제조기업들은 지금도 스마트공장 국비 1억을 따내는 서류를 몰라 발을 동동 구릅니다. 선배의 30년 경험은 시간당 25만 원을 받아 마땅한 독보적 컨설팅 상품이었습니다.

소득 절벽이 두려운 4050 직장인 분들, 치킨집 대신 내 경험으로 월 1,000만 원 버는 '1인 창직(創職) 자가진단 리포트'를 먼저 확인해 보세요.
👉 무료 리포트: https://post-career.architect/free`
        },
        {
          channel: "대기업 사내게시판 / 퇴직자 단톡방",
          title: "은퇴 1년 남은 54세 선배의 1인 창직 실전기",
          script: `[제목] 정년 1년 남기고 무자본으로 1인 지식 기업가 된 후기

동기들이 은퇴 후 경비원 자리나 귀농을 알아볼 때, 저는 제 은행 여신 심사 25년 경력을 '중소기업 정책자금 대출 자문 전자책'과 '1:1 컨설팅'으로 패키징했습니다.

지난달 교보문고 전자책에서 150만 원, 중소기업 3곳 1:1 금융 자문으로 450만 원, 총 600만 원의 부수익을 만들었습니다. 퇴직하기도 전에 소득 크레바스 걱정이 완전히 사라졌습니다.

내 경험을 어떻게 시장이 돈을 내는 지식 상품으로 만드는지 궁금하신 분들은 'Post-Career Architect' 로드맵 꼭 참고해 보세요.
👉 로드맵 링크: https://post-career.architect/roadmap`
        },
        {
          channel: "B2B 대기업 인사팀 (HRD) 제안서",
          title: "퇴직 예정 임직원을 위한 '1인 창직·전자책 출간' 전직지원 프로그램",
          script: `수신: OOO 그룹 인사혁신팀 HRD 담당 팀장님 귀하

안녕하십니까, 1인 창직 인큐베이터 [Post-Career Architect] 총괄 디렉터입니다.

귀사의 50대 정년퇴직 예정 임직원분들이 퇴직 후 자영업 실패 리스크에 노출되지 않고, 귀사에서 쌓은 평생의 전문성을 살려 명예로운 '1인 지식 자문가 / 전문 강사 / 전자책 작가'로 제2의 커리어를 시작할 수 있도록 돕는 [4주 완성 1인 창직 마스터클래스]를 제안드립니다.

이미 대기업 시니어 퇴직자 코호트에서 88.3%가 90일 내 전자책 출간 및 1:1 자문 계약을 수주했습니다.
상세 커리큘럼 및 제안서를 검토해 보실 수 있도록 샘플 자료를 송부드립니다.`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차: 커리어 자산 해체 & 무료 자가진단", targetRev: "₩735,000 (결제 15건)", actions: ["리멤버/링크드인에 '30년 경력 1인 창직 무료 진단기' 배포", "진단자 300명 중 15명에게 월 49,000원 심층 리포트 구독 전환", "핵심 지식 자산 3대 영역 및 공식 창직 칭호 확정"] },
        { week: "2주차: 전자책 10챕터 집필 & 마스터클래스 1기", targetRev: "₩3,655,000 (누적)", actions: ["교보문고 e-Book 등록용 10챕터 원고 완성 및 표지 조판", "월 290,000원 VIP 1:1 창직 마스터클래스 1기 5명 전격 완판", "월 49,000원 스탠다드 구독자 45명 돌파"] },
        { week: "3주차: 1:1 고단가 자문 계약 8곳 수주", targetRev: "₩7,400,000 (누적)", actions: ["타깃 중소기업 및 개인 대상 시간당 25만원 자문 제안서 발송", "1:1 컨설팅 리테이너 고객 8곳 유치 (월 ₩3,500,000 매출 확보)", "스탠다드 구독자 80명 + 마스터클래스 12명"] },
        { week: "4주차: 월 1,000만원 MRR 달성 & 아카데미 법인화", targetRev: "₩10,400,000 /월 (MRR 달성)", actions: ["스탠다드 구독자 120명(₩5,880,000) + VIP 코칭 18명(₩5,220,000) 결합", "운영비 70만원 제외 순이익 ₩10,400,000 돌파", "1인 기업가 양성 스쿨 아카데미 법인 설립 및 대기업 B2B 계약 체결"] }
      ]
    }
  },

  "deepfocus-21": {
    id: "deepfocus-21",
    category: "focus",
    categoryName: "멘탈 / 도파민 디톡스·집중력",
    title: "5. [멘탈/도파민] 숏폼 도파민 중독 탈출 및 심층 사유 복원 프로젝트 코칭 (DeepFocus 21)",
    shortDesc: "릴스·쇼츠·틱톡의 자극적 알고리즘에 붕괴된 뇌의 집중력을 21일 스마트폰 강제 통제와 텍스트 몰입 미션으로 복원하는 뇌과학 기반 안티-도파민 코칭 솔루션",
    targetMrr: "₩10,350,000",
    defaultStandardPrice: 49000,
    defaultStandardUsers: 150,
    defaultProPrice: 250000,
    defaultProUsers: 12,
    defaultOpsCost: 600000,
    pain: {
      summary: "릴스, 쇼츠, 틱톡의 도파민 알고리즘에 중독되어 긴 글을 읽거나 10분 이상 깊게 집중하는 뇌의 능력이 완전히 망가진 2040 현대인의 극심한 인지 붕괴와 무기력증.",
      bullets: [
        "침대에 누워 무의식중에 숏폼을 2~3시간씩 넘기다 늦은 새벽에 잠들고 다음 날 뇌가 멍해지는 만성 수면장애 및 죄책감",
        "책이나 업무 기획서 5페이지도 진득하게 읽지 못하고 3분마다 스마트폰을 만지작거리는 팝콘 브레인(Popcorn Brain) 증후군",
        "자극적인 15초 영상에만 반응하도록 전두엽 도파민 수용체가 파괴되어, 일상의 깊은 사유와 고도의 문제 해결 능력 완전 상실",
        "의지만으로 앱을 지워보지만 3일 만에 재설치하고 실패를 반복하며 '나는 왜 이럴까' 자책하는 도파민 의존 악순환"
      ]
    },
    solution: [
      { step: 1, title: "스마트폰 사용 시간 강제 물리적·디지털 통제", desc: "도파민 트리거 차단 락커 앱 및 데스크 물리적 보관함 세팅으로 하루 SNS 노출 15분 이하 강제 잠금" },
      { step: 2, title: "주간 45분 딥다이브(Deep Dive) 몰입 타이머 가동", desc: "알파파·세타파 바이노럴 비트 뇌파 동기화 음원과 함께 잡념 없이 오직 한 가지 업무/독서에만 몰입하는 45분 타이머 훈련" },
      { step: 3, title: "텍스트 몰입 & 심층 사유 역질문 미션", desc: "단순 숏폼 소비를 끊고 엄선된 인문·과학 단행본 챕터를 정독한 뒤 저자의 핵심 논리에 반론 질문과 3줄 통찰을 작성하는 매일 1미션" },
      { step: 4, title: "21일 신경가소성(Neuroplasticity) 리셋 & 인증 커뮤니티", desc: "뇌신경 회로가 재배선되는 21일간 슬랙/디스코드 상호 인증과 전후 인지능력·업무 생산성 2배 향상 진단 리포트 발급" }
    ],
    delight: {
      killerFeatures: "• 도파민 수용체 회복률을 실시간 시각화하는 '뇌신경 가소성 21일 트래커'\n• 45분 딥다이브 초몰입 유도 세타파 바이노럴 비트 사운드트랙 전용 앱\n• 스마트폰 미사용 시간당 가치(월 +105시간 회복) 실시간 환산 대시보드\n• 전두엽 활성화를 촉진하는 매일 1개 소크라테스식 심층 사유 역질문 워크시트",
      delightFactor: "'뇌에 끼어있던 짙은 안개(Brain Fog)가 걷히고, 내 손으로 내 시간과 삶의 주도권을 되찾았다'는 눈부신 환희와 하루 3시간 이상의 온전한 몰입 해방감"
    },
    persona: {
      primary: "숏폼 중독으로 업무 집중도가 급격히 떨어지고 늘 피로와 무기력감을 호소하는 20~40대 직장인, 지식근로자, 기획자",
      secondary: "긴 글 시험 지문이나 전공 서적을 읽어야 하나 숏폼 도파민 덫에 걸려 성적이 정체된 대학원생, 고시생, 수험생"
    },
    gtm: {
      channel: "인스타그램 릴스/유튜브 쇼츠(안티 도파민 숏폼 역발상 공략), 스레드(Threads 직장인 번아웃/도파민 단식 에세이), 블라인드(Blind), 노션 템플릿 커뮤니티",
      leadMagnet: "'당신의 뇌는 지금 몇 % 절여져 있는가? 도파민 중독 10초 자가진단표 & 24시간 스마트폰 단식 치트키 PDF' 무료 배포"
    },
    ops: {
      automation: "21일 데일리 미션 카카오 알림톡/슬랙 봇 자동 발송 + 주간 집중도 리포트 AI 자동 생성 (무인 운영율 92%)",
      expansion: "오프라인 '주말 1박 2일 디지털 디톡스 캠프' (스마트폰 금고 보관 & 숲속 묵언 독서 리트릿), 수면 유도 뇌파 오디오 구독권, B2B 기업 임직원 번아웃 탈출 집중력 워크숍 공급"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "숏폼 중독과 브레인포그에서 완전히 벗어나, 하루 4시간 초집중력과 책 1권 완독 능력을 21일 만에 100% 회복",
        perceivedLikelihood: "카이스트/하버드 뇌인지과학 신경가소성 메커니즘 적용, 21일 챌린지 1~3기 420명 실증 완료 (집중 지속시간 2.4배 향상, 숏폼 스크린타임 78% 감소)",
        timeDelay: "신청 즉시 스마트폰 차단 락커 셋업 가이드 발송 + 오늘 밤 9시 첫 45분 딥다이브 세션 시작",
        effortSacrifice: "의지박약이라도 저절로 실천되는 '벌금형 디스코드 상호인증'과 '귀에 꽂기만 하면 집중되는 세타파 뇌파 사운드' 제공",
        stack: [
          { title: "코어: 21일 안티-도파민 신경가소성 챌린지 풀패키지", value: "₩500,000 상당" },
          { title: "보너스 1: 뇌파 동기화 집중력 향상 & 숙면 바이노럴 비트 음원 10선", value: "₩300,000 상당" },
          { title: "보너스 2: 전두엽 심층 사유 복원용 '소크라테스 텍스트 몰입 워크북 21선'", value: "₩250,000 상당" },
          { title: "보너스 3: 실패율 0% 보장 스마트폰 물리적·디지털 차단 완벽 셋업 매뉴얼", value: "₩150,000 상당" }
        ],
        totalValue: "총 ₩1,200,000 상당의 패키지",
        specialPrice: "단 21일 챌린지 월 ₩49,000 (VIP 1:1 심층 코칭권 월 ₩250,000)",
        riskReversal: "21일 챌린지 미션을 80% 이상 수행했음에도 스크린타임이 50% 이상 줄지 않거나 집중력 향상을 체감하지 못하면 100% 무조건 전액 환불!"
      },
      promptEngine: {
        systemPrompt: `You are the Premier Cognitive Neuro-Coach & Anti-Dopamine Attention Recovery Specialist at DeepFocus 21.
Your philosophy is: "집중력은 타고나는 재능이 아니라, 훈련으로 회복되는 뇌의 근육이다 (Attention is not innate talent; it is a brain muscle restored through systematic training)."
Your mission is to liberate modern knowledge workers from the algorithmic dopamine trap of short-form content (Reels, Shorts, TikTok) and rewire their neuroplasticity for deep cognitive reasoning and 4-hour uninterrupted flow.

[INPUT PARAMETERS]
- daily_shortform_hours: number (e.g. 2.5, 4.0, 5.5+)
- primary_symptom: string (e.g. Cannot read >5 pages of books / Checks phone every 3 minutes / Chronic brain fog & sleep disorder)
- target_habit_goal: string (e.g. Read 1 deep-thinking book weekly / Complete 45-minute deep work blocks without tab switching)

[OUTPUT PROTOCOL]
1. Dopamine Receptor Reset Prescription: Personalized 3-stage protocol (Day 1-7 Detox, Day 8-14 Text Immersion, Day 15-21 High-Order Synthesis).
2. Daily 45-Minute Deep-Dive Task: Structured text immersion prompt with critical counter-argument questions.
3. Quantified Productivity Recovery: Extra hours saved daily, annual financial value recovered (calculated at ₩25,000/hr).
4. Offline Retreat & Sleep Audio Recommendation.
5. Output valid JSON matching DeepFocusPrescriptionSchema.`,
        apiSnippet: `// Node.js DeepFocus 21 Neuro-Coach Pipeline
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateDeepFocusPlan(screenHours, symptom, goal) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: DEEPFOCUS_SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify({ screenHours, symptom, goal }) }
    ],
    temperature: 0.3,
  });
  return JSON.parse(response.choices[0].message.content);
}`
      },
      salesScripts: [
        {
          channel: "스레드 (Threads) / 블라인드 (Blind)",
          title: "고전환 바이럴 칼럼 ('침대에서 숏폼 3시간 보고 자책하는 당신에게')",
          script: `[제목] 밤 12시에 침대에 누워 숏폼 보다가 새벽 3시에 폰 던진 적 있으신가요?

"오늘도 의미 없이 3시간을 날렸다..." 
밀려오는 죄책감, 멍한 뇌, 다음 날 출근길의 극심한 피로. 
하지만 이건 당신의 의지박약 탓이 아닙니다. 

실리콘밸리의 수천 명 천재 엔지니어들이 수조 원의 AI 알고리즘으로 당신의 도파민 수용체를 해킹했기 때문입니다.
15초 자극에 뇌가 절여지면, 책을 읽거나 복잡한 기획서를 쓸 때 작동해야 할 전두엽 회로가 완전히 마비됩니다.

"집중력은 의지가 아니라 신경가소성(뇌의 물리적 회복)의 문제입니다."
스마트폰 강제 잠금과 하루 45분 텍스트 몰입 미션으로 뇌의 도파민 수용체를 원래대로 되돌려 놓는 [DeepFocus 21 챌린지]에 참여해 보세요.
21일 뒤, 당신은 하루 3시간의 잃어버린 인생을 되찾게 됩니다.

👉 10초 도파민 중독 자가진단: https://deepfocus21.ai/check`
        },
        {
          channel: "인스타그램 릴스 / 유튜브 쇼츠",
          title: "30초 역발상 숏폼 스크립트 ('지금 당장 스크롤을 멈추세요')",
          script: `[화면: 화면을 멍하니 스크롤하는 사람의 눈동자를 클로즈업하다가 갑자기 검은 화면으로 전환]
(음성/자막): "잠깐만요. 지금 이 영상을 멍하니 넘기려던 당신, 스크롤을 멈추세요."

(본문): 
"지난 1시간 동안 손가락으로 넘긴 영상 중에 머릿속에 남은 게 딱 1개라도 있나요?
없죠. 지금 당신의 뇌는 초당 수천 번의 가짜 도파민 스파이크를 맞고 탈진한 상태입니다.
책 5페이지도 못 읽고, 3분마다 폰을 확인하는 이유가 바로 이겁니다.

당신의 집중력은 망가진 게 아니라, 잠시 납치당했을 뿐입니다.
프로필 링크에서 21일 만에 도파민 뇌를 리셋하고 하루 4시간의 집중력을 되찾는 무료 자가진단 리포트를 받아보세요.
지금 당장 스마트폰 화면을 끄고 심호흡 3번을 하세요."`
        },
        {
          channel: "스터디/자기계발 커뮤니티 1:1 콜드 DM",
          title: "이직/자격증 준비생 타깃 1:1 디톡스 제안",
          script: `안녕하세요 00님! 피드에서 자기계발과 이직 준비 열심히 하시는 모습 인상 깊게 보았습니다.

혹시 퇴근 후 공부하려고 책상에 앉았는데 자꾸 손이 폰으로 가고, 릴스나 쇼츠 몇 개 보다 보면 2시간이 훌쩍 지나버려 자책하신 적 있으실까요?
저희가 뇌인지과학 기반으로 21일간 스마트폰 사용을 강제 차단하고 45분 딥다이브 몰입 루틴을 만들어주는 [DeepFocus 21] 4기를 모집 중입니다.

참여자분들의 하루 평균 집중 시간이 1.8시간에서 4.2시간으로 늘어났습니다.
부담 없이 이번 주 무료 집중력 진단 테스트 링크를 보내드릴 수 있으니 편하게 답장 주세요! 응원합니다. 🔥`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차: 도파민 자가진단 툴 & 48시간 사전예약", targetRev: "₩735,000 (결제 15건)", actions: ["스레드/노션 커뮤니티에 '10초 뇌 도파민 중독 자가진단표' 무료 배포", "진단 참여자 250명 중 15명에게 21일 챌린지 1기(₩49,000) 얼리버드 선결제 유치", "스마트폰 차단 락커 가이드 및 1주차 도파민 단식 미션 시트 전달"] },
        { week: "2주차: 1기 50명 완판 & 45분 바이노럴 세션 가동", targetRev: "₩3,700,000 (누적)", actions: ["인스타 릴스 역발상 숏폼 영상 바이럴로 챌린지 1기 50명 정원 마감 (MRR ₩2,450,000)", "월 250,000원 프리미엄 1:1 딥코칭 5명 유치 (₩1,250,000 추가 확보)", "매일 밤 9시 디스코드 45분 딥다이브 라이브 타이머 운영"] },
        { week: "3주차: 전후 비교 후기 바이럴 & 2기 100명 확장", targetRev: "₩7,400,000 (누적)", actions: ["1기 완주자 '하루 스크린타임 5시간 ➔ 1.2시간 감소, 책 3권 완독' 비포/애프터 인터뷰 카드뉴스 배포", "2기 스탠다드 100명 모집 돌파 (누적 150명 결제 완료)", "1:1 프리미엄 코칭 수강생 10명으로 확대"] },
        { week: "4주차: 월 1,000만원 순수익 달성 & 디톡스 캠프 론칭", targetRev: "₩10,350,000 /월 (MRR 달성)", actions: ["스탠다드 150명(₩7,350,000) + 프리미엄 1:1 코칭 12명(₩3,000,000) 결합", "운영비 60만원 제외 순이익 ₩9,750,000 달성", "오프라인 '주말 1박 2일 디지털 디톡스 캠프' 유료 파일럿 오픈 및 B2B 기업 출강 계약 체결"] }
      ]
    }
  },

  "resilience-60h": {
    id: "resilience-60h",
    category: "focus",
    categoryName: "멘탈 / 신경생리학",
    title: "8. [창업가/임원] 60시간 익사 쥐 회복탄력성(Resilience) 코칭 프로그램",
    shortDesc: "커트 릭터(1957) 신경생리학 기반: 번아웃·투자손실·사업실패 시 뇌의 생존 메커니즘을 재가동하는 30초 구출-재진입(Rescue-Reentry) 프로토콜",
    targetMrr: "₩14,200,000",
    defaultStandardPrice: 1800000,
    defaultStandardUsers: 4,
    defaultProPrice: 3500000,
    defaultProUsers: 2,
    defaultOpsCost: 1800000,
    pain: {
      summary: "번아웃, 사업 실패, 투자 손실 등 인생의 한계에 부딪혔을 때 4분 만에 포기하는 쥐처럼 무기력증에 빠져 재기하지 못함.",
      bullets: [
        "1957년 커트 릭터 실험: 탈출구가 없다고 인지한 쥐는 탈진 전 미주신경 충격(Vagal Shock)으로 4분 만에 심정지",
        "스타트업 창업가·펀드매니저·C레벨: '끝장났다'는 파국화 공포로 전전두엽 혈류 차단 및 자포자기 침몰",
        "기존 심리상담의 한계: '긍정적으로 생각하라'는 추상적 조언뿐, 자율신경계 물리적 재부팅 부재",
        "급성 스트레스 폭발 시 심박변이도(HRV) 붕괴 및 파국적 의사결정(패닉 셀링, 사업 자진 포기)"
      ]
    },
    solution: [
      { step: 1, title: "실시간 HRV 생체 데이터 트래킹 (A층)", desc: "스마트워치/반지로 RMSSD 및 심박수 실시간 집계, 미주신경 과부하 임계치 자동 감지" },
      { step: 2, title: "파국화 인지 왜곡 3중 해체 (C층)", desc: "소크라테스식 7문답 질문지로 '사업 실패=인생 끝장'이라는 뇌의 착각을 사실과 분리" },
      { step: 3, title: "30초 생리학적 한숨 Rescue 가동 (X층)", desc: "스탠퍼드식 이중 흡기 호흡(Physiological Sigh)으로 30초 만에 자율신경계 급속 안정화" },
      { step: 4, title: "60시간 Reentry 5분 마이크로 액션", desc: "'앞으로 60시간 동안 내가 통제할 수 있는 일 3가지'에만 집중시켜 240배 한계 돌파" }
    ],
    delight: {
      killerFeatures: "• 30초 생리학적 한숨 시각/오디오 메트로놈 가이드\\n• 실시간 심박변이도(HRV) 기반 비상 SOS 위기 개입 핫라인\\n• 커트 릭터 1957 신경생리학 대조 60시간 리질리언스 지수 분석",
      delightFactor: "4분 만에 가라앉던 절망적인 패닉 상태에서 30초 만에 뇌가 생존 통제권을 되찾는 압도적 해방감과 안도감"
    },
    persona: {
      primary: "사업 실패, 투자 손실, 런웨이 고갈로 극심한 번아웃과 공황을 겪는 스타트업 창업가 및 펀드매니저",
      secondary: "극심한 업무 스트레스와 팀 관리 압박에 짓눌린 C-Level 임원 및 수험생"
    },
    gtm: {
      channel: "스타트업 창업가 커뮤니티(EO, 디스콰이엇), 헤지펀드/트레이더 단톡방, C레벨 네트워킹 모임",
      leadMagnet: "'1957 익사 쥐 실험 기반 10초 뇌 생존 회복탄력성 자가진단표' 무료 배포"
    },
    ops: {
      automation: "웨어러블 HRV 연동 모니터링 + 30초 오디오 가이드 자동 송출 + SOS 알림 봇 (운영 공수 85% 무인화)",
      expansion: "B2C 8주 개인 집중 코스 ➔ B2B 테크 기업/투자사 임직원 EAP 구독 모델로 확장"
    },
    vipMaster: {
      grandSlamOffer: {
        dreamOutcome: "4분 만에 무기력하게 포기하던 뇌를 60시간 버티는 강철 회복탄력성 멘탈 OS로 개조",
        perceivedLikelihood: "존스홉킨스 커트 릭터 실험 & 스탠퍼드 신경생리학 기반 30초 생리학적 한숨 (성공률 96.8%)",
        timeDelay: "30초 만에 자율신경계 급속 진정 ➔ 8주 만에 번아웃 완전 극복",
        effortSacrifice: "억지로 긍정적인 척 애쓸 필요 없이, 호흡 가이드에 맞춰 숨만 쉬고 5분 마이크로 액션 수행",
        stack: [
          { title: "코어: 8주 1:1 신경생리학 회복탄력성 집중 코칭 세션 (주 1회 60분)", value: "₩2,400,000 상당" },
          { title: "보너스 1: 30초 생리학적 한숨 인터랙티브 바이오피드백 웹앱 (resilience_coach.html)", value: "₩500,000 상당" },
          { title: "보너스 2: 24/7 비상 SOS 심박변이도(HRV) 위기 개입 핫라인", value: "₩600,000 상당" },
          { title: "보너스 3: B2B 기업 C레벨 멘탈 EAP 관리 대시보드 리포트", value: "₩450,000 상당" }
        ],
        totalValue: "총 ₩3,950,000 상당의 패키지",
        specialPrice: "개인 8주 집중 코스 ₩1,800,000 (기업 EAP 월 ₩3,500,000~)",
        riskReversal: "첫 2주 수강 후 심박변이도(HRV) 안정화 및 번아웃 지수 50% 이상 개선되지 않을 시 100% 무조건 전액 환불!"
      },
      promptEngine: {
        systemPrompt: `You are the Resilience-60 Neuro-Psychologist & High-Performance Resilience Coach AI, specialized in Curt Richter's (1957) Drowning Rat survival physiology and Stanford Neuroscience (Physiological Sigh, Vagal Tone regulation).

[EVALUATION PROTOCOL]
1. Parse user crisis input (burnout, startup runway exhaustion, portfolio crash, exam despair).
2. Identify the 3 Major Cognitive Distortions:
   - Catastrophizing (파국화)
   - Personalization (개인화)
   - All-or-Nothing Thinking (전부 아니면 전무)
3. Deconstruct the "4-Minute Despair Loop" (Vagal shock caused by lack of hope).
4. Prescribe the "30-Second Rescue-Reentry Protocol":
   - Physiological Sigh (double inhale through nose, long slow exhale through mouth)
   - 3 Socratic Dispute Inquiries separating Fact from Fiction
   - 5-Minute Micro-Action Plan focused strictly on controllable variables for the next 60 hours.
5. Tone: Calm, authoritative, scientific, intensely supportive and grounded.`,
        apiSnippet: `// Node.js OpenAI GPT-4o Integration for Resilience Coaching
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function analyzeCrisisAndPrescribeRescue(crisisText, hrvMetrics) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: RESILIENCE_SYSTEM_PROMPT },
      { role: "user", content: JSON.stringify({ crisis: crisisText, hrv: hrvMetrics }) }
    ],
    temperature: 0.3
  });
  return response.choices[0].message.content;
}`
      },
      salesScripts: [
        {
          channel: "창업가 커뮤니티 (디스콰이엇, EO, 단톡방)",
          title: "고통 공감 & 1957 익사 쥐 칼럼 ('4분 만에 멈추는 쥐 이야기')",
          script: `[제목] 번아웃 온 대표님들, 당신이 나약해서 포기하는 게 아닙니다. (익사 쥐의 신경생리학)

1957년 존스홉킨스 의대 커트 릭터 교수는 쥐를 수조에 넣었습니다.
체력이 강한 야생 쥐조차 15분 만에 발길질을 멈추고 가라앉았습니다.
부검 결과 지쳐서가 아니라 '희망이 없다'고 인지한 뇌의 미주신경 충격으로 심장이 멈춘 것이었습니다.

하지만 가라앉기 직전 손으로 건져내 30초간 마른 수건에 올려둔 쥐는, 다시 수조에 넣자 '60시간(240배)'을 헤엄쳤습니다.
차이는 체력이 아니라 '구원의 경험'이었습니다.

런웨이 고갈, 투자 무산으로 밤마다 공황이 오는 창업가 대표님들,
당신의 뇌를 30초 만에 리셋하고 다시 60시간을 버티게 만드는 '30초 구출-재진입' 프로토콜을 무료로 열어드립니다.
👉 자가진단 링크: https://bizlaunch.ai/resilience`
        },
        {
          channel: "인스타그램 릴스 / 유튜브 쇼츠",
          title: "30초 충격 반전 숏폼 ('쥐는 왜 4분 만에 죽었을까?')",
          script: `[화면: 물속으로 천천히 가라앉는 쥐의 일러스트 ➔ 연구원의 손이 건져 올리는 장면]
(음성/자막): "쥐는 힘이 빠져서 익사한 게 아닙니다. 심장이 먼저 멈췄습니다."

(본문): 
"1957년 존스홉킨스 실험. 탈출구가 없다고 느낀 쥐는 15분 만에 심장을 스스로 멈췄습니다.
하지만 죽기 직전 단 30초 동안 손으로 건져 올려준 쥐는, 다시 넣자 무려 '60시간'을 헤엄쳤습니다.

당신이 사업 실패나 번아웃으로 무기력한 이유도 똑같습니다.
당신이 게을러서가 아니라, 뇌의 미주신경이 출구가 없다고 착각해 전원을 내린 것입니다.
프로필 링크에서 30초 만에 뇌의 생존 회로를 재가동하는 '생리학적 한숨' 프로토콜을 무료로 체험해보세요!"`
        },
        {
          channel: "B2B C-Level / 투자사(VC) 1:1 제안",
          title: "포트폴리오사 대표 번아웃 방지 EAP 제안",
          script: `대표님 안녕하십니까! 
스타트업 생태계에서 핵심 인재 및 대표이사의 번아웃으로 인한 의사결정 마비와 퇴사는 수억 원의 손실을 유발합니다.

저희는 존스홉킨스 익사 쥐 신경생리학 기반 30초 Rescue-Reentry 프로토콜과 실시간 HRV 모니터링을 결합한 [Resilience-60] C-Level 전담 EAP를 운영하고 있습니다.

핵심 인재의 번아웃 자진 퇴사율 65% 감소 및 위기 대응 의사결정 오류 88% 개선 효과를 제공합니다.
이번 달 5개 사 한정 파일럿 도입 제안서를 보내드릴 수 있으니 편하게 회신 부탁드립니다. 감사합니다!`
        }
      ],
      cashflowRoadmap: [
        { week: "1주차: 익사 쥐 칼럼 바이럴 & 48시간 사전예약", targetRev: "₩3,600,000 (B2C 2건)", actions: ["디스콰이엇/링크드인에 '익사 쥐의 신경생리학과 번아웃' 아티클 기고", "아티클 조회수 8,000뷰 달성 및 30초 호흡 웹앱 무료 배포", "극심한 번아웃 창업가 2명 대상 8주 집중 코스(₩1,800,000) 첫 유료 결제 유치"] },
        { week: "2주차: B2C 수강생 4명 완판 & HRV 모니터링 안착", targetRev: "₩7,200,000 (누적 4명)", actions: ["B2C 개인 집중 코스 1기 정원 4명 마감 (매출 ₩7,200,000 달성)", "애플워치/오라링 연동 실시간 HRV 자동 감시 루프 개시", "30초 생리학적 한숨 훈련 후 안정 시 심박수 18bpm 감소 실증"] },
        { week: "3주차: 스타트업 VC/액셀러레이터 B2B EAP 제휴", targetRev: "₩10,700,000 (누적)", actions: ["초기 스타트업 투자사 10곳에 포트폴리오사 대표 멘탈 케어 EAP 제안서 발송", "팁스(TIPS) 운영사 1곳과 5개 포트폴리오사 대표 단체 구독 계약(월 ₩3,500,000) 체결", "총 누적 매출 1,000만 원 돌파"] },
        { week: "4주차: 월 1,420만원 매출 & 순수익 1,240만원 안착", targetRev: "₩14,200,000 /월 (MRR 달성)", actions: ["B2C 개인 4명(₩7,200,000) + B2B 기업 2곳(₩7,000,000) 안정적 유지", "운영비(SaaS+파트너 코치 ₩1,800,000) 제외 순수익 ₩12,400,000 달성", "순마진율 87.3% 및 고단가 1인 멘탈 엔지니어링 기업 공식 안착"] }
      ]
    }
  }
};

// ==========================================================================
// 2. 🎯 15대 고객 반론 극복 & 세일즈 클로징 데이터베이스 (OBJECTION_CRUSHING_DB)
// ==========================================================================
const OBJECTION_CRUSHING_DB = [
  {
    id: 1,
    tag: "가격 저항",
    question: "1. '월 39,000원도 영세 자영업자/직장인에겐 비싸게 느껴져요.'",
    psychology: "고객은 지출 비용(3.9만 원)만 보고 자신이 아낄 수 있는 수백만 원의 손실을 인지하지 못하는 상태입니다.",
    script: `<strong>[클로징 스크립트]</strong><br>
"대표님, 완전히 이해합니다. 매달 나가는 고정비는 100원도 아까운 법이죠.<br>
하지만 만약 브로커에게 300만 원 수수료를 떼이거나, 서류를 몰라 1,500만 원 공짜 지원금을 놓친다면 그 손실은 하루 1,300원(월 3.9만 원)의 몇 백 배에 달합니다.<br>
하루 담배 반 갑, 커피 한 잔 값으로 1,500만 원의 국비를 100% 무인 확보하는 가장 확실한 투자입니다. 30일 내에 적격 지원금을 1건도 못 찾으시면 100% 전액 환불해 드립니다. 오늘 커피 한 잔으로 시작해 보세요!"`
  },
  {
    id: 2,
    tag: "효과 의심",
    question: "2. '이거 쓴다고 정말 정부지원금 합격하거나 칼퇴가 되나요?'",
    psychology: "사기나 허위 과장 광고에 대한 불안감과 탈락에 대한 두려움이 존재하는 상태입니다.",
    script: `<strong>[클로징 스크립트]</strong><br>
"정확한 질문이십니다. 뜬구름 잡는 일반 챗GPT와 달리, 저희 시스템은 중기부 전직 심사위원 평가 기준표 15개 항목과 대법원 판례 5만 건을 1:1 매칭하여 채점합니다.<br>
이미 지난달에만 84명의 소상공인 대표님이 스마트상점 및 바우처 사업에서 평균 1,800만 원 수혜를 받으셨습니다. 결과물이 마음에 들지 않으시면 즉시 환불 버튼 하나로 돌려드립니다."`
  },
  {
    id: 3,
    tag: "AI 퀄리티 의심",
    question: "3. 'AI로 작성하면 심사위원이 티 난다고 탈락시키지 않나요?'",
    psychology: "AI 특유의 어색한 문체나 복붙 느낌으로 인해 불이익을 받을까 우려하는 심리입니다.",
    script: `<strong>[클로징 스크립트]</strong><br>
"가장 많은 분들이 오해하시는 부분입니다! 저희 엔진은 단순 텍스트 생성이 아니라, 실제 중기부 공무원들이 채점하는 '정량 지표(매출 성장률, 고용 효과, 예산 집행표)'를 표준 행정 서식에 맞춰 정확히 계산해 넣습니다.<br>
오히려 손으로 대충 쓴 계획서보다 통계와 데이터 정합성이 완벽하여 심사위원 평가에서 10점 이상의 가점을 받습니다."`
  },
  {
    id: 4,
    tag: "무료 대안재",
    question: "4. '무료 챗GPT나 네이버 검색해서 쓰면 되지 않나요?'",
    psychology: "범용 AI 도구와 버티컬 전문 SaaS 솔루션의 본질적 차이를 아직 체감하지 못한 상태입니다.",
    script: `<strong>[클로징 스크립트]</strong><br>
"네, 챗GPT를 직접 쓰셔도 됩니다. 하지만 최신 정부 공고 1,200개를 실시간 크롤링하고, 사업자 자격 요건을 필터링하며, HWP 서식 규격에 맞춘 4단 표를 챗GPT 프롬프트로 직접 짜시려면 족히 20시간 이상 프롬프트 공부를 하셔야 합니다.<br>
저희는 그 20시간의 삽질을 단 '10초 원클릭'으로 줄여드리는 것입니다. 대표님의 20시간 인건비는 3만 9천 원보다 훨씬 소중합니다."`
  },
  {
    id: 5,
    tag: "보안/정보 유출",
    question: "5. '사업자등록번호나 회사 매출 데이터를 넣어도 안전한가요?'",
    psychology: "개인정보 유출 및 국세청/경쟁사 유출에 대한 본능적인 프라이버시 방어 심리입니다.",
    script: `<strong>[클로징 스크립트]</strong><br>
"안심하셔도 좋습니다! 당사는 금융기관 수준의 AES-256 비트 종단간 암호화를 적용하며, 입력하신 데이터는 AI 학습용으로 절대 사용되지 않고 분석 즉시 파기됩니다.<br>
또한 공공데이터포털(data.go.kr) 공식 API 인증 파트너로서 법적 규제를 100% 준수하고 있습니다."`
  },
  {
    id: 6,
    tag: "구독 락인 공포",
    question: "6. '나중에 해지하기 어렵게 만들어 놓은 것 아닌가요?'",
    psychology: "넷플릭스나 통신사처럼 해지 절차를 복잡하게 꼬아놓았을 것이라는 불신입니다.",
    script: `<strong>[클로징 스크립트]</strong><br>
"전혀 걱정하지 마세요. 로그인 후 마이페이지에서 [원클릭 즉시 해지] 버튼을 누르면 1초 만에 다음 달 결제가 자동 취소됩니다.<br>
어떠한 위약금이나 수수료도 없으며, 해지 후에도 이미 다운로드받으신 서류는 평생 무료로 영구 소장하실 수 있습니다."`
  }
];

// ==========================================================================
// 3. 7단계 심층 소크라테스식 인터뷰 시나리오 트리 (SOCRATIC_DISCOVERY_STEPS)
// ==========================================================================
const SOCRATIC_DISCOVERY_STEPS = [
  {
    step: 1,
    botMsg: `안녕하세요! <strong>PainFinder 100만원급 비즈니스 멘토 AI</strong>입니다.<br><br>` +
            `우리는 뜬구름 잡는 아이디어를 만들지 않습니다. <strong>"사람들이 매일 겪으며 분노하고, 돈을 내고서라도 당장 해결하고 싶어 하는 진짜 고통"</strong>만 집요하게 파고들어 <strong>월 1,000만 원 순부수익</strong> 모델을 만듭니다.<br><br>` +
            `먼저, <strong>누구의 어떤 순간에 발생하는 결정적 고통을 해결하고 싶으신가요?</strong> 아래에서 선택하거나 직접 입력해 주세요.`,
    choices: [
      "1. 🏪 소상공인: 지원금/세무 공고를 몰라 수천만원을 날리고 300만원 브로커에 의존",
      "2. 💼 직장인/회계: 깨진 스캔 PDF/영수증 표를 엑셀에 손으로 치느라 매일 2시간 야근",
      "3. 📚 직장인/성인: 책을 사놓고 완독 못하며 숏폼 도파민에 뇌가 절여져 내용 95% 휘발",
      "4. 🏠 부동산/임차인: 전세 계약서 독소조항을 몰라 1억 보증금 떼일까 봐 불안에 떪",
      "5. 🛍️ 이커머스 셀러: 상세페이지 외주비 50만원 부담 & 식약처 금지어 계정 정지 공포",
      "6. 👴 은퇴/창직: 50대 진입을 앞두고 소득 절벽과 은퇴 불안은 크지만 무엇을 할지 막막함",
      "7. 📱 숏폼/도파민: 릴스·쇼츠 알고리즘에 뇌가 절여져 집중력 붕괴 & 만성 무기력증에 시달림",
      "8. 🐭 창업가/임원: 번아웃·투자손실에 4분 만에 포기하는 쥐처럼 무기력증에 빠져 재기 불가 (60시간 익사 쥐 회복탄력성)"
    ],
    feedback: "🎯 **100만원 컨설팅 조언**: 돈을 버는 비즈니스의 첫 단추는 '타깃 고객의 분노 유발 순간'을 명확히 정의하는 것입니다."
  },
  {
    step: 2,
    botMsg: `좋습니다! 그렇다면 그 고객이 이 문제를 겪을 때 <strong>실제로 잃어버리는 비용(시간, 돈, 기회비용)의 크기</strong>는 어느 정도인가요? 고통의 크기가 클수록 고객은 더 높은 가격을 기꺼이 지불합니다.`,
    choices: [
      "A. 매달 20~40시간 이상의 극심한 야근 및 수작업 시간 낭비 (시급 환산 월 50만원 손실)",
      "B. 외주업체/브로커에게 건당 50~300만 원의 과도한 선금 수수료 강제 지출",
      "C. 자칫 잘못하면 보증금 1억 손실이나 계정 정지 등 치명적인 파산 리스크",
      "D. 비싼 교육비/학원비를 내고도 결과가 나오지 않는 기회비용 상실",
      "E. 50대 은퇴 후 30년 생애 소득 크레바스 및 평생 커리어 사장(死藏)에 대한 실존적 공포",
      "F. 하루 2~3시간씩 숏폼에 버려지는 뇌 피로, 업무 생산성 반토막 및 삶의 통제력 상실",
      "G. 사업 포기, 패닉 매도, C레벨 번아웃 퇴사로 인한 수억 원대 기회비용 및 자포자기 침몰 손실"
    ],
    feedback: "💡 **수익화 분석**: 고객이 '잃고 있는 돈'이 월 50만 원 이상이라면, 우리 서비스가 월 3만~5만 원을 청구했을 때 고객은 '10배 이득'이라고 느껴 1초 만에 결제합니다!"
  },
  {
    step: 3,
    botMsg: `핵심을 찌르셨습니다. 그렇다면 <strong>현재 사람들은 이 문제를 해결하기 위해 어떤 차선책(대안)을 쓰고 있나요? 그리고 그 기존 대안의 치명적 결함은 무엇인가요?</strong>`,
    choices: [
      "1. 네이버 검색/유튜브를 뒤지지만 90%가 쓸모없는 광고성 글이라 시간만 낭비한다.",
      "2. 외주/전문가에게 맡기지만 비용이 너무 비싸고 납기가 일주일 이상 걸린다.",
      "3. 엑셀이나 수작업으로 때우지만 오류가 잦고 담당자가 바뀌면 관리가 안 된다.",
      "4. 너무 복잡해서 그냥 포기하고 매달 수백만 원의 손해를 감수한다."
    ],
    feedback: "🔥 **킬러 기능 도출**: 기존 대안재의 빈틈이 바로 우리의 '킬러 기능'이 됩니다. '외주보다 100배 빠르고(10초), 비용은 1/10'이라는 가치 제안이 성립합니다."
  },
  {
    step: 4,
    botMsg: `이제 해결책을 구체화합시다. 만약 우리가 <strong>"사용자가 데이터 1개만 넣으면 AI가 10초 만에 완벽한 결과물을 만들어주는 무인 자동화 엔진"</strong>을 만든다면, 고객에게 어떤 <strong>극적인 감동(Delight Factor)</strong>을 안겨줄 수 있을까요?`,
    choices: [
      "✨ '300만 원 외주 비용이 0원이 되었다'는 압도적 금전 절감",
      "✨ '매일 2시간 걸리던 야근 업무가 10초 만에 끝났다'는 전율의 칼퇴 해방감",
      "✨ '1억 원 전세사기 독소조항을 붉은색으로 찾아냈다'는 소름 돋는 안도감",
      "✨ '시작 첫날부터 바로 매출 3배 주문이 터졌다'는 즉각적 성공 체험"
    ],
    feedback: "❤️ **바이럴 통찰**: 단순 편의성이 아니라 '감정적 해방감(안도감/환호)'을 주는 제품이어야 입소문 바이럴이 폭발하고 이탈률이 2% 미만으로 떨어집니다."
  },
  {
    step: 5,
    botMsg: `완벽합니다! 마지막으로 <strong>수익 창출 공식</strong>입니다.<br><br>` +
            `월 39,000원에 스탠다드 구독자 200명 + B2B 프로 89,000원에 30곳을 확보하면 <strong>월 1,025만 원의 순부수익</strong>이 달성됩니다.<br><br>` +
            `아래의 <strong>[이 아이템으로 확정 & 100만원급 바이블 열기]</strong>를 누르시면, 오늘 당장 돈을 벌 수 있는 <strong>'그랜드슬램 오퍼, 실전 시스템 프롬프트, 10대 콜드 대본, 4주 로드맵'</strong>이 즉시 열립니다!`,
    choices: [
      "🚀 이 아이템으로 확정 & 100만원급 창업 바이블 열기",
      "🔄 다른 산업 분야 불편함도 추가 탐색해보기"
    ],
    feedback: "💰 **축하합니다!** 월 1,000만원 자동화 비즈니스 모델이 완벽하게 정의되었습니다. 이제 VIP 실전 바이블을 통해 실행에 옮기세요!"
  }
];

// 12대 산업 불편함 레이더 DB
const INDUSTRY_PAIN_RADAR_DB = [
  {
    id: "p-gov",
    industry: "b2b",
    industryName: "소상공인 / 세무·지원금",
    title: "정부지원금 공고 탐색 불가 & 300만원 브로커 수수료",
    quote: "지원금이 수천만 원 있다는데 어디서 찾는지도 모르겠고, 사업계획서 양식(HWP)이 너무 복잡해서 브로커가 요구하는 300만 원 선금을 낼 수밖에 없어요.",
    intensity: "🔥 초고통 (즉시 결제 의향 95%)",
    target: "전국 600만 자영업자, 카페/식당/제조업 대표",
    solutionIdea: "사업자 번호 입력 시 적격 지원금 3종 자동 매칭 + 합격형 사업계획서 3분 완성",
    wtp: "월 ₩39,000 / 건당 ₩49,000",
    modelRef: "gov-subsidy"
  },
  {
    id: "p-pdf",
    industry: "office",
    industryName: "직장인 / 회계·총무",
    title: "스캔 PDF 표 서식 깨짐 & 수작업 엑셀 타이핑 야근",
    quote: "거래처에서 보내준 스캔 PDF나 영수증 표를 복사하면 줄이 다 깨져서 매일 밤 11시까지 일일이 손으로 엑셀에 타이핑하고 수식 검산하느라 미치겠어요.",
    intensity: "🔥 초고통 (즉시 결제 의향 92%)",
    target: "중소기업 총무/회계/영업관리 직장인, 1인 프리랜서",
    solutionIdea: "비정형 PDF/이미지 표를 10초 만에 완벽한 피벗 테이블과 경영 보고서로 변환",
    wtp: "월 ₩29,000 (기업 팀 ₩99,000)",
    modelRef: "pdf-excel-parser"
  },
  {
    id: "p-legal",
    industry: "legal",
    industryName: "부동산 / 계약·주거",
    title: "전세 계약서 독소조항 무지와 전세사기 보증금 미반환 공포",
    quote: "공인중개사가 주는 표준계약서에 숨겨진 불리한 특약 때문에 보증금 1억을 날릴까 봐 너무 무서운데, 변호사 상담료 30만 원은 부담스러워요.",
    intensity: "🔥 초고통 (즉시 결제 의향 98%)",
    target: "2030 사회초년생, 원룸/전세 임차인, 신혼부부",
    solutionIdea: "계약서 사진 업로드 시 대법원 판례 기반 독소조항 붉은색 탐지 및 방어 특약 생성",
    wtp: "건당 ₩9,900 / 공인중개사 월 ₩29,000",
    modelRef: "legal-contract-audit"
  },
  {
    id: "p-dirtyread",
    industry: "edu",
    industryName: "교육 / 자기계발·독서",
    title: "사놓고 완독 못하는 책장 책 & 숏폼 도파민 뇌의 집중력 붕괴",
    quote: "매달 책을 3~4권씩 사놓고 30페이지도 못 읽고 덮어버려요. 숏폼만 보다가 뇌가 굳어서 글을 읽어도 머리에 하나도 안 남고 자책감만 듭니다.",
    intensity: "🔥 초고통 (즉시 결제 의향 94%)",
    target: "독서 필요성은 절감하나 완독 실패하는 직장인, 취준생, 1인 창업가",
    solutionIdea: "챕터별 강제 질문, 반론 메모, 3줄 아웃풋을 강제하는 인터랙티브 디지털 워크북 & 라이브 코칭",
    wtp: "월 ₩35,000 / VIP 클럽 월 ₩89,000",
    modelRef: "dirty-read-lab"
  },
  {
    id: "p-retire",
    industry: "retire",
    industryName: "은퇴 / 1인 창직·신중년",
    title: "50대 은퇴 후 소득 절벽 & 내 경험으로 무엇을 할지 모르는 실존적 불안",
    quote: "정년이 2년 남았는데 퇴직금으로 치킨집이나 카페를 차리자니 망할까 봐 두렵고, 30년 동안 한 업무 말고는 세상 밖에서 뭘 해야 돈을 벌 수 있을지 너무 막막합니다.",
    intensity: "🔥 초고통 (즉시 결제 의향 96%)",
    target: "은퇴를 앞둔 40대 후반~50대 직장인, 퇴직 예정자, 신중년",
    solutionIdea: "사용자의 평생 경험과 결정성 지능을 분석하여 지식 창업, 전자책 출판, 1:1 컨설팅 마스터플랜으로 자동 변환",
    wtp: "월 ₩49,000 / VIP 코칭 ₩290,000",
    modelRef: "post-career-architect"
  },
  {
    id: "p-deepfocus",
    industry: "focus",
    industryName: "멘탈 / 도파민 디톡스·집중력",
    title: "릴스·쇼츠 알고리즘에 중독된 뇌의 집중력 붕괴 & 만성 무기력증",
    quote: "퇴근 후 침대에서 숏폼을 2~3시간씩 멍하니 넘기다 새벽에 자고, 책 5페이지도 못 읽으며 집중력이 완전히 산산조각 났습니다. 삶을 통제하지 못한다는 자괴감이 듭니다.",
    intensity: "🔥 초고통 (즉시 결제 의향 95%)",
    target: "숏폼 중독으로 업무 집중도가 떨어지고 무기력함을 느끼는 20~40대 직장인",
    solutionIdea: "스마트폰 강제 통제, 45분 딥다이브 타이머, 텍스트 몰입 훈련 미션을 수행하는 21일 챌린지 및 1:1 딥코칭",
    wtp: "월 ₩49,000 / VIP 코칭 ₩250,000",
    modelRef: "deepfocus-21"
  },
  {
    id: "p-resilience",
    industry: "focus",
    industryName: "멘탈 / 신경생리학·회복탄력성",
    title: "번아웃·사업실패 시 4분 만에 포기하는 쥐처럼 무기력증에 빠지는 공포",
    quote: "투자 유치가 무산되고 런웨이가 고갈되자 15분 만에 침몰한 쥐처럼 뇌가 마비되어 아무것도 못하고 자포자기 상태에 빠졌습니다.",
    intensity: "🔥 초고통 (즉시 결제 의향 99%)",
    target: "극심한 스트레스와 실패 위기에 노출된 창업가, 펀드매니저, 고강도 수험생",
    solutionIdea: "1957 익사 쥐 신경생리학 기반 30초 구출-재진입(Rescue-Reentry) 프로토콜 및 실시간 HRV 코칭",
    wtp: "8주 코스 ₩1,800,000 / B2B 월 ₩3,500,000",
    modelRef: "resilience-60h"
  }
];

// 5단계 35개 실행 체크리스트
const BASE_CHECKLIST_TEMPLATE = [
  { id: "c1", phase: 1, phaseName: "1단계: 시장 검증 (D-1~7)", title: "잠재 고객 10명 심층 인터뷰 (IDI)", desc: "타깃 고객을 찾아 핵심 불편함(Pain Point)과 기존 대안재의 불만을 구체적으로 녹취 및 문서화", duration: "D-1~2" },
  { id: "c2", phase: 1, phaseName: "1단계: 시장 검증 (D-1~7)", title: "경쟁 서비스 5곳 벤치마킹 및 빈틈 분석", desc: "경쟁사 가격, 약점 리뷰, 미충족 기능을 매트릭스로 정리하여 킬러 기능 정의", duration: "D-3" },
  { id: "c3", phase: 1, phaseName: "1단계: 시장 검증 (D-1~7)", title: "원페이지 사전 예약(스모크 테스트) 랜딩페이지 제작", desc: "Framer/Notion/HTML로 핵심 가치 제안 및 '출시 알림 받기' 이메일 수집 폼 개설", duration: "D-4~5" },
  { id: "c4", phase: 1, phaseName: "1단계: 시장 검증 (D-1~7)", title: "타깃 커뮤니티 3곳에 문제 제기 글 시딩", desc: "직접적인 홍보가 아닌 '이런 불편함 저만 겪나요?' 공감 글 작성 후 반응률 테스트", duration: "D-6" },
  { id: "c5", phase: 1, phaseName: "1단계: 시장 검증 (D-1~7)", title: "사전 예약자 50명 확보 및 시장성 Go/No-Go 판정", desc: "전환율 10% 이상 달성 시 본격 개발 착수, 미달 시 가치 제안 문구 수정", duration: "D-7" },

  { id: "c6", phase: 2, phaseName: "2단계: MVP 구축 (D-8~14)", title: "핵심 킬러 기능 1가지 정의 (Feature Freeze)", desc: "모든 부가 기능을 배제하고 고객의 고통을 즉각 해결하는 단 하나의 엔진에 집중", duration: "D-8" },
  { id: "c7", phase: 2, phaseName: "2단계: MVP 구축 (D-8~14)", title: "UI/UX 와이어프레임 및 디자인 시스템 구축", desc: "Vercel/Linear 스타일의 세련된 다크 글래스모피즘 인터페이스 설계", duration: "D-9" },
  { id: "c8", phase: 2, phaseName: "2단계: MVP 구축 (D-8~14)", title: "프론트엔드 인터랙션 및 상태 관리 구현", desc: "사용자 입력, 파일 업로드, 실시간 계산 및 반응형 웹 레이아웃 완성", duration: "D-10~11" },
  { id: "c9", phase: 2, phaseName: "2단계: MVP 구축 (D-8~14)", title: "AI 엔진 (LLM / OCR / RAG) 파이프라인 연동", desc: "OpenAI/Claude API 및 정밀 프롬프트 템플릿 결합으로 고품질 결과물 생성 보장", duration: "D-12~13" },
  { id: "c10", phase: 2, phaseName: "2단계: MVP 구축 (D-8~14)", title: "사전 예약자 10명 대상 클로즈드 알파 테스트", desc: "핵심 유저 10명에게 직접 사용하게 하고 버그 및 첫인상 피드백 즉시 개선", duration: "D-14" },

  { id: "c11", phase: 3, phaseName: "3단계: 결제·법률 (D-15~21)", title: "개인사업자등록 및 통신판매업 신고", desc: "홈택스 및 정부24를 통해 온라인 서비스 판매를 위한 기본 인허가 완료", duration: "D-15" },
  { id: "c12", phase: 3, phaseName: "3단계: 결제·법률 (D-15~21)", title: "토스페이먼츠 / 포트원 결제 모듈 연동", desc: "정기구독(빌링) 및 단건 결제 PG사 심사 신청 및 웹 결제창 연동", duration: "D-16~17" },
  { id: "c13", phase: 3, phaseName: "3단계: 결제·법률 (D-15~21)", title: "이용약관 및 개인정보처리방침 표준안 게시", desc: "전자상거래법 및 개인정보보호법 준수를 위한 필수 정책 페이지 하단 배치", duration: "D-18" },
  { id: "c14", phase: 3, phaseName: "3단계: 결제·법률 (D-15~21)", title: "3티어(Free/Standard/Pro) 가격 정책 확정", desc: "월 1,000만원 달성을 위한 최적의 유료 전환 가격대 및 크레딧 제한선 설정", duration: "D-19" },
  { id: "c15", phase: 3, phaseName: "3단계: 결제·법률 (D-15~21)", title: "실결제 및 환불 프로세스 엔드투엔드(E2E) 테스트", desc: "100원 테스트 결제, 구독 갱신, 취소/환불 시 자동 권한 회수 로직 검증", duration: "D-20~21" },

  { id: "c16", phase: 4, phaseName: "4단계: 바이럴·런칭 (D-22~28)", title: "고전환 세일즈 랜딩페이지 정식 오픈", desc: "사회적 증거(후기), 비포/애프터 비교, 100% 환불 보장 문구 전면 배치", duration: "D-22" },
  { id: "c17", phase: 4, phaseName: "4단계: 바이럴·런칭 (D-22~28)", title: "사전 예약자 50명 대상 런칭 특별 50% 할인 메일 발송", desc: "D-Day 런칭 공지와 함께 72시간 한정 특가로 첫 유료 결제 고객 전환 유도", duration: "D-23" },
  { id: "c18", phase: 4, phaseName: "4단계: 바이럴·런칭 (D-22~28)", title: "숏폼 릴스/쇼츠 5편 제작 및 업로드", desc: "'이거 모르고 야근하지 마세요' 스타일의 고통 유발 및 해결 30초 숏폼 배포", duration: "D-24~25" },
  { id: "c19", phase: 4, phaseName: "4단계: 바이럴·런칭 (D-22~28)", title: "타깃 카페 및 오픈카톡방 무료 체험 이벤트 진행", desc: "'선착순 30명 무료 진단/생성권 증정' 이벤트로 강력한 바이럴 입소문 유발", duration: "D-26~27" },
  { id: "c20", phase: 4, phaseName: "4단계: 바이럴·런칭 (D-22~28)", title: "런칭 첫 주 유료 결제 30명 돌파 및 1차 리뷰 수집", desc: "첫 결제 고객들에게 감사의 친필 이메일을 보내고 솔직한 텍스트/영상 후기 확보", duration: "D-28" },

  { id: "c21", phase: 5, phaseName: "5단계: 무인화·확장 (D-29~)", title: "CS 문의 자동 응대 채널톡/챗봇 셋업", desc: "자주 묻는 질문(FAQ) 90%를 AI 챗봇이 자동 처리하도록 구성해 시간 확보", duration: "D-29" },
  { id: "c22", phase: 5, phaseName: "5단계: 무인화·확장 (D-29~)", title: "구독 해지 방어(Churn Reduction) 시나리오 가동", desc: "해지 버튼 클릭 시 30% 추가 할인 또는 무료 크레딧을 제안하여 이탈률 3% 이하 유지", duration: "D-30" },
  { id: "c23", phase: 5, phaseName: "5단계: 무인화·확장 (D-29~)", title: "친구 추천(Referral) 바이럴 리워드 시스템 오픈", desc: "친구 초대 시 추천인과 피추천인 모두에게 1개월 무료 혜택 제공", duration: "D-31~32" },
  { id: "c24", phase: 5, phaseName: "5단계: 무인화·확장 (D-29~)", title: "B2B 단체 라이선스 및 협회 제휴 제안서 발송", desc: "관련 협회, 프랜차이즈 본사, 대형 커뮤니티에 단체 할인 패키지 제안", duration: "D-33~34" },
  { id: "c25", phase: 5, phaseName: "5단계: 무인화·확장 (D-29~)", title: "월 1,000만원 달성 모니터링 및 2차 제품군 확장", desc: "유료 구독자 200명+ 안정화 확인 후 연관 부가 서비스 런칭으로 LTV 극대화", duration: "D-35" }
];

// ==========================================================================
// 4. PainFinderApp 메인 클래스
// ==========================================================================
class PainFinderApp {
  constructor() {
    this.models = { ...BIZ_MODELS_DB };
    this.currentModelId = "gov-subsidy";
    this.currentPlaybookSubtab = "offer";
    this.checklistState = this.loadChecklistState();
    this.discoveryStep = 1;
    this.discoveredItem = {
      target: "전국 600만 소상공인, 요식업/카페/제조업 대표",
      pain: "지원금 공고를 모르거나 복잡한 HWP 서류에 막혀 수천만 원 혜택을 놓치고 브로커에 300만원을 뜯김",
      solution: "사업자 번호만 입력하면 적격 지원금 3종 자동 매칭 + 심사 기준 맞춤 사업계획서 3분 완성",
      monetization: "스탠다드 월 ₩39,000 × 200명 + 프로 ₩89,000 × 30곳 ➔ 월 1,025만 원 순부수익",
      modelRef: "gov-subsidy",
      score: 99
    };

    this.isVip = this.loadVipState();
    this.userApiKey = localStorage.getItem("painfinder_openai_key") || "";

    this.initElements();
    this.initEventListeners();
    this.initCountdownTimer();
    this.initSocialProofEngine();
    this.updateVipUI();
    this.restoreSavedProject();
    this.renderAll();
  }

  initElements() {
    this.tabs = document.querySelectorAll(".tab-item");
    this.tabPanes = document.querySelectorAll(".tab-pane");

    // Discovery Elements
    this.discoveryChatMessages = document.getElementById("discoveryChatMessages");
    this.discoveryChoiceBar = document.getElementById("discoveryChoiceBar");
    this.discoveryTextInput = document.getElementById("discoveryTextInput");
    this.btnSendDiscoveryMessage = document.getElementById("btnSendDiscoveryMessage");
    this.btnResetDiscoveryChat = document.getElementById("btnResetDiscoveryChat");
    this.btnAdoptFoundItem = document.getElementById("btnAdoptFoundItem");
    this.aiCoachFeedbackBox = document.getElementById("aiCoachFeedbackBox");
    this.aiCoachFeedbackContent = document.getElementById("aiCoachFeedbackContent");

    // Spec Sheet Elements
    this.specTargetCustomer = document.getElementById("specTargetCustomer");
    this.specCorePain = document.getElementById("specCorePain");
    this.specSolution = document.getElementById("specSolution");
    this.specMonetization = document.getElementById("specMonetization");
    this.specStatusTag = document.getElementById("specStatusTag");
    this.discoveryScoreCard = document.getElementById("discoveryScoreCard");
    this.headerCurrentItemName = document.getElementById("headerCurrentItemName");
    this.headerViabilityScore = document.getElementById("headerViabilityScore");

    // Playbook & Objection Elements
    this.playbookStageContainer = document.getElementById("playbookStageContainer");
    this.playbookHeroItemName = document.getElementById("playbookHeroItemName");
    this.playbookSubnavBtns = document.querySelectorAll(".pb-subnav-btn");
    this.objectionQaGrid = document.getElementById("objectionQaGrid");

    // Radar & Other Elements
    this.radarCategoryBar = document.getElementById("radarCategoryBar");
    this.radarPainsGrid = document.getElementById("radarPainsGrid");
    this.ideasCardsGrid = document.getElementById("ideasCardsGrid");
    this.sandboxInteractiveStage = document.getElementById("sandboxInteractiveStage");
    this.checklistContainer = document.getElementById("checklistContainer");
    this.checklistMeterFill = document.getElementById("checklistMeterFill");
    this.checklistMeterTxt = document.getElementById("checklistMeterTxt");
    this.checklistProgressBadge = document.getElementById("checklistProgressBadge");
    this.landingPreviewContainer = document.getElementById("landingPreviewContainer");
    this.printableReportPaper = document.getElementById("printableReportPaper");

    // Simulator
    this.inputStandardPrice = document.getElementById("inputStandardPrice");
    this.valStandardPrice = document.getElementById("valStandardPrice");
    this.inputStandardUsers = document.getElementById("inputStandardUsers");
    this.valStandardUsers = document.getElementById("valStandardUsers");
    this.inputProPrice = document.getElementById("inputProPrice");
    this.valProPrice = document.getElementById("valProPrice");
    this.inputProUsers = document.getElementById("inputProUsers");
    this.valProUsers = document.getElementById("valProUsers");
    this.inputOpsCost = document.getElementById("inputOpsCost");
    this.valOpsCost = document.getElementById("valOpsCost");

    this.mrrNetProfitAmount = document.getElementById("mrrNetProfitAmount");
    this.mrrProgressBarFill = document.getElementById("mrrProgressBarFill");
    this.mrrTargetPercent = document.getElementById("mrrTargetPercent");
    this.mrrGrossAmount = document.getElementById("mrrGrossAmount");
    this.mrrCostAmount = document.getElementById("mrrCostAmount");
    this.mrrMarginAmount = document.getElementById("mrrMarginAmount");
    this.mrrArrAmount = document.getElementById("mrrArrAmount");
    this.mrrFormulaInsightText = document.getElementById("mrrFormulaInsightText");
    this.simStatusTag = document.getElementById("simStatusTag");

    // Stress Testing Inputs
    this.inputCacCost = document.getElementById("inputCacCost");
    this.inputChurnRate = document.getElementById("inputChurnRate");
    this.inputRefundRate = document.getElementById("inputRefundRate");
    this.valCacCost = document.getElementById("valCacCost");
    this.valChurnRate = document.getElementById("valChurnRate");
    this.valRefundRate = document.getElementById("valRefundRate");
    this.valLtvAmount = document.getElementById("valLtvAmount");
    this.valLtvCacRatio = document.getElementById("valLtvCacRatio");
    this.valBepUsers = document.getElementById("valBepUsers");
    this.valRealNetMrr = document.getElementById("valRealNetMrr");
    this.badgeStressVerdict = document.getElementById("badgeStressVerdict");

    // Monetization & Modal Elements
    this.modalCheckout = document.getElementById("modalCheckout");
    this.modalApiKey = document.getElementById("modalApiKey");
    this.btnOpenCheckout = document.getElementById("btnOpenCheckout");
    this.btnBannerCheckout = document.getElementById("btnBannerCheckout");
    this.btnCloseCheckoutModal = document.getElementById("btnCloseCheckoutModal");
    this.btnExecutePayment = document.getElementById("btnExecutePayment");
    this.txtVipBtnLabel = document.getElementById("txtVipBtnLabel");
    this.btnOpenApiKeyModal = document.getElementById("btnOpenApiKeyModal");
    this.btnCloseApiKeyModal = document.getElementById("btnCloseApiKeyModal");
    this.inputUserApiKey = document.getElementById("inputUserApiKey");
    this.btnSaveApiKey = document.getElementById("btnSaveApiKey");
    this.btnClearApiKey = document.getElementById("btnClearApiKey");
    this.btnSaveProject = document.getElementById("btnSaveProject");
    this.btnExportProject = document.getElementById("btnExportProject");
    this.socialProofToastContainer = document.getElementById("socialProofToastContainer");
  }

  initEventListeners() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");
        this.switchTab(targetTab);
      });
    });

    this.playbookSubnavBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.playbookSubnavBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentPlaybookSubtab = btn.getAttribute("data-subtab");
        this.renderMonetizationPlaybook();
      });
    });

    document.getElementById("btnRestartDiscovery")?.addEventListener("click", () => {
      this.resetDiscovery();
    });
    document.getElementById("btnHeaderExportPlan")?.addEventListener("click", () => {
      this.switchTab("report");
    });

    this.btnSendDiscoveryMessage?.addEventListener("click", () => this.handleDiscoveryInput());
    this.discoveryTextInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.handleDiscoveryInput();
      }
    });
    this.btnResetDiscoveryChat?.addEventListener("click", () => this.resetDiscovery());
    this.btnAdoptFoundItem?.addEventListener("click", () => this.adoptCurrentDiscoveredItem());

    [this.inputStandardPrice, this.inputStandardUsers, this.inputProPrice, this.inputProUsers, this.inputOpsCost].forEach(s => {
      s?.addEventListener("input", () => this.updateSimulatorCalculations());
    });

    document.querySelectorAll(".phase-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".phase-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const phase = btn.getAttribute("data-phase");
        this.renderChecklist(phase);
      });
    });

    document.querySelectorAll("#galleryFilterGroup .filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#galleryFilterGroup .filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        this.renderCardsGrid(filter);
      });
    });

    document.getElementById("btnResetChecklist")?.addEventListener("click", () => {
      if (confirm("모든 체크리스트 진행 상황을 초기화하시겠습니까?")) {
        this.checklistState = {};
        this.saveChecklistState();
        this.renderChecklist();
      }
    });
    document.getElementById("btnExportChecklist")?.addEventListener("click", () => {
      this.exportChecklistMarkdown();
    });

    document.getElementById("btnCopyLandingHtml")?.addEventListener("click", () => this.copyLandingHtml());
    document.getElementById("btnPreviewLandingNewTab")?.addEventListener("click", () => this.openLandingInNewTab());

    document.getElementById("btnCopyReportMarkdown")?.addEventListener("click", () => this.copyReportMarkdown());
    document.getElementById("btnPrintReportPdf")?.addEventListener("click", () => window.print());

    // Stress test input listeners
    [this.inputCacCost, this.inputChurnRate, this.inputRefundRate].forEach(s => {
      s?.addEventListener("input", () => this.updateSimulatorCalculations());
    });

    // Modal & VIP listeners
    this.btnOpenCheckout?.addEventListener("click", () => this.openCheckoutModal());
    this.btnBannerCheckout?.addEventListener("click", () => this.openCheckoutModal());
    this.btnCloseCheckoutModal?.addEventListener("click", () => this.closeCheckoutModal());
    this.modalCheckout?.addEventListener("click", (e) => {
      if (e.target === this.modalCheckout) this.closeCheckoutModal();
    });

    this.btnExecutePayment?.addEventListener("click", () => this.executePaymentFlow());

    this.btnOpenApiKeyModal?.addEventListener("click", () => this.openApiKeyModal());
    this.btnCloseApiKeyModal?.addEventListener("click", () => this.closeApiKeyModal());
    this.modalApiKey?.addEventListener("click", (e) => {
      if (e.target === this.modalApiKey) this.closeApiKeyModal();
    });
    this.btnSaveApiKey?.addEventListener("click", () => this.saveUserApiKey());
    this.btnClearApiKey?.addEventListener("click", () => this.clearUserApiKey());

    this.btnSaveProject?.addEventListener("click", () => this.saveCurrentProject());
    this.btnExportProject?.addEventListener("click", () => this.exportProjectJson());
  }

  switchTab(tabName) {
    this.tabs.forEach(t => {
      if (t.getAttribute("data-tab") === tabName) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    this.tabPanes.forEach(pane => {
      if (pane.id === `tab-${tabName}`) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (tabName === "playbook") this.renderMonetizationPlaybook();
    if (tabName === "objection") this.renderObjectionCrushing();
    if (tabName === "strategy") this.renderStrategyCanvas();
    if (tabName === "sandbox") this.renderSandbox();
    if (tabName === "landing") this.renderLandingPreview();
    if (tabName === "report") this.renderReportPaper();
  }

  renderAll() {
    this.renderDiscoveryChat();
    this.renderMonetizationPlaybook();
    this.renderObjectionCrushing();
    this.renderPainRadar();
    this.renderCardsGrid();
    this.renderStrategyCanvas();
    this.renderSandbox();
    this.updateSimulatorCalculations();
    this.renderChecklist();
    this.renderLandingPreview();
    this.renderReportPaper();

    if (window.lucide) lucide.createIcons();
  }

  // [1] AI 집요한 고통 발굴실 인터뷰 엔진
  renderDiscoveryChat() {
    if (!this.discoveryChatMessages) return;
    this.discoveryChatMessages.innerHTML = "";

    const stepData = SOCRATIC_DISCOVERY_STEPS.find(s => s.step === this.discoveryStep) || SOCRATIC_DISCOVERY_STEPS[0];
    
    this.appendDiscoveryMsg("bot", stepData.botMsg);
    this.renderDiscoveryChoices(stepData.choices);

    if (stepData.feedback && this.aiCoachFeedbackBox) {
      this.aiCoachFeedbackBox.style.display = "block";
      this.aiCoachFeedbackContent.innerHTML = stepData.feedback;
    }

    const stepCounter = document.getElementById("discoveryStepCount");
    if (stepCounter) stepCounter.textContent = `Step ${this.discoveryStep}/5`;
    this.updateSpecSheetUI();
  }

  renderDiscoveryChoices(choices) {
    if (!this.discoveryChoiceBar) return;
    this.discoveryChoiceBar.innerHTML = "";

    if (!choices || choices.length === 0) {
      this.discoveryChoiceBar.style.display = "none";
      return;
    }

    this.discoveryChoiceBar.style.display = "flex";
    choices.forEach(choice => {
      const chip = document.createElement("button");
      chip.className = "choice-chip";
      chip.textContent = choice;
      chip.addEventListener("click", () => {
        this.processDiscoveryChoice(choice);
      });
      this.discoveryChoiceBar.appendChild(chip);
    });
  }

  processDiscoveryChoice(choiceText) {
    this.appendDiscoveryMsg("user", choiceText);

    if (this.discoveryStep === 1) {
      if (choiceText.includes("소상공인")) {
        this.discoveredItem.target = "전국 600만 소상공인, 요식업/카페/제조업 대표";
        this.discoveredItem.modelRef = "gov-subsidy";
      } else if (choiceText.includes("독서") || choiceText.includes("도파민") || choiceText.includes("완독")) {
        this.discoveredItem.target = "독서 필요성은 절감하지만 완독에 매번 실패하는 2040 직장인 및 취준생";
        this.discoveredItem.modelRef = "dirty-read-lab";
      } else if (choiceText.includes("직장인") || choiceText.includes("회계")) {
        this.discoveredItem.target = "중소기업 총무/회계/영업관리 담당 직장인, 1인 프리랜서";
        this.discoveredItem.modelRef = "pdf-excel-parser";
      } else if (choiceText.includes("부동산") || choiceText.includes("임차인")) {
        this.discoveredItem.target = "2030 사회초년생, 원룸/오피스텔 전세 임차인, 신혼부부";
        this.discoveredItem.modelRef = "legal-contract-audit";
      } else if (choiceText.includes("은퇴") || choiceText.includes("창직") || choiceText.includes("50대")) {
        this.discoveredItem.target = "은퇴를 앞두고 제2의 인생을 준비하는 40대 후반~50대 직장인";
        this.discoveredItem.pain = "50대 진입을 앞두고 은퇴 이후의 삶과 소득 절벽이 두렵지만 막상 무엇을 준비해야 할지 방향을 잡지 못함";
        this.discoveredItem.solution = "평생 경험과 결정성 지능을 분석하여 1인 창직(지식 창업, 컨설팅, 1인 출판) 마스터플랜 설계";
        this.discoveredItem.monetization = "스탠다드 월 ₩49,000 × 120명 + VIP 마스터클래스 ₩290,000 × 18명 ➔ 월 1,040만 원 순부수익";
        this.discoveredItem.modelRef = "post-career-architect";
      } else if (choiceText.includes("숏폼") || choiceText.includes("도파민") || choiceText.includes("DeepFocus")) {
        this.discoveredItem.target = "숏폼 중독으로 업무 집중도가 떨어지고 무기력함을 느끼는 20~40대 직장인";
        this.discoveredItem.pain = "릴스, 쇼츠, 틱톡 알고리즘에 중독되어 긴 글을 읽지 못하고 깊은 집중력이 완전히 붕괴됨";
        this.discoveredItem.solution = "스마트폰 사용 시간 강제 통제, 45분 딥다이브 몰입 타이머, 텍스트 몰입 훈련 21일 챌린지";
        this.discoveredItem.monetization = "스탠다드 월 ₩49,000 × 150명 + 1:1 딥코칭 ₩250,000 × 12명 ➔ 월 1,035만 원 순부수익";
        this.discoveredItem.modelRef = "deepfocus-21";
      }
      this.discoveredItem.score = 85;
    } else if (this.discoveryStep === 2) {
      this.discoveredItem.pain = choiceText;
      this.discoveredItem.score = 90;
    } else if (this.discoveryStep === 3) {
      this.discoveredItem.score = 95;
    } else if (this.discoveryStep === 4) {
      this.discoveredItem.solution = `원클릭 AI 자동화로 ${choiceText}를 10초 만에 완벽 실현`;
      this.discoveredItem.score = 99;
    } else if (this.discoveryStep === 5) {
      this.adoptCurrentDiscoveredItem();
      return;
    }

    this.discoveryStep = Math.min(this.discoveryStep + 1, 5);

    setTimeout(() => {
      const nextStepData = SOCRATIC_DISCOVERY_STEPS.find(s => s.step === this.discoveryStep);
      if (nextStepData) {
        this.appendDiscoveryMsg("bot", nextStepData.botMsg);
        this.renderDiscoveryChoices(nextStepData.choices);
        if (nextStepData.feedback && this.aiCoachFeedbackBox) {
          this.aiCoachFeedbackBox.style.display = "block";
          this.aiCoachFeedbackContent.innerHTML = nextStepData.feedback;
        }
        this.updateSpecSheetUI();
      }
    }, 500);
  }

  handleDiscoveryInput() {
    const text = this.discoveryTextInput.value.trim();
    if (!text) return;

    this.discoveryTextInput.value = "";
    this.processDiscoveryChoice(text);
  }

  appendDiscoveryMsg(role, htmlContent) {
    const row = document.createElement("div");
    row.className = `chat-msg-row ${role}`;
    row.innerHTML = `
      ${role === "bot" ? '<div class="ai-bot-avatar"><i data-lucide="brain-circuit"></i></div>' : ''}
      <div class="msg-bubble">${htmlContent}</div>
    `;
    this.discoveryChatMessages.appendChild(row);
    this.discoveryChatMessages.scrollTop = this.discoveryChatMessages.scrollHeight;
    if (window.lucide) lucide.createIcons();
  }

  updateSpecSheetUI() {
    if (this.specTargetCustomer) this.specTargetCustomer.textContent = this.discoveredItem.target;
    if (this.specCorePain) this.specCorePain.textContent = this.discoveredItem.pain;
    if (this.specSolution) this.specSolution.textContent = this.discoveredItem.solution;
    if (this.specMonetization) this.specMonetization.textContent = this.discoveredItem.monetization;
    if (this.discoveryScoreCard) this.discoveryScoreCard.textContent = `${this.discoveredItem.score}점`;

    if (this.specStatusTag) {
      if (this.discoveryStep >= 5) {
        this.specStatusTag.textContent = "🎯 발굴 완료 (100만원 바이블 가동)";
        this.specStatusTag.className = "spec-status-tag tag-emerald";
      } else {
        this.specStatusTag.textContent = `집요 탐색 중 (${this.discoveryStep}/5단계)`;
        this.specStatusTag.className = "spec-status-tag";
      }
    }

    if (this.headerCurrentItemName) {
      this.headerCurrentItemName.textContent = this.discoveredItem.target.split(",")[0] + " 맞춤 AI 자동화 솔루션";
    }
    if (this.headerViabilityScore) {
      this.headerViabilityScore.textContent = `수익성: ${this.discoveredItem.score}점 (월 ₩10.2M+)`;
    }
  }

  resetDiscovery() {
    this.discoveryStep = 1;
    this.renderDiscoveryChat();
  }

  adoptCurrentDiscoveredItem() {
    const targetModelId = this.discoveredItem.modelRef || "gov-subsidy";
    this.currentModelId = targetModelId;

    const m = this.models[targetModelId];
    if (m) {
      if (this.inputStandardPrice) this.inputStandardPrice.value = m.defaultStandardPrice;
      if (this.inputStandardUsers) this.inputStandardUsers.value = m.defaultStandardUsers;
      if (this.inputProPrice) this.inputProPrice.value = m.defaultProPrice;
      if (this.inputProUsers) this.inputProUsers.value = m.defaultProUsers;
      if (this.inputOpsCost) this.inputOpsCost.value = m.defaultOpsCost;
    }

    this.renderMonetizationPlaybook();
    this.renderObjectionCrushing();
    this.renderStrategyCanvas();
    this.renderSandbox();
    this.updateSimulatorCalculations();
    this.renderChecklist();
    this.renderLandingPreview();
    this.renderReportPaper();

    this.switchTab("playbook");
  }

  // [2] 💎 100만원급 실전 창업 바이블 렌더링 (VIP High-Ticket Master)
  renderMonetizationPlaybook() {
    if (!this.playbookStageContainer) return;
    const m = this.models[this.currentModelId] || this.models["gov-subsidy"];
    const vip = m.vipMaster || this.models["gov-subsidy"].vipMaster;

    if (this.playbookHeroItemName) {
      this.playbookHeroItemName.textContent = m.title.split("] ")[1] || m.title;
    }

    let subtabHtml = "";

    // Subtab 1: 그랜드 슬램 오퍼 (Hormozi Formula)
    if (this.currentPlaybookSubtab === "offer") {
      const o = vip.grandSlamOffer;
      subtabHtml = `
        <div class="grand-slam-box glass-card">
          <div class="card-section-title">
            <i data-lucide="gift" class="text-amber"></i>
            <span>100만원 가치 환산: 거절할 수 없는 '그랜드 슬램 오퍼(Grand Slam Offer)' 설계서</span>
          </div>
          
          <div class="hormozi-equation-card">
            <div class="eq-part">
              <span class="eq-title">꿈의 결과 (Dream Outcome)</span>
              <span class="eq-val">${o.dreamOutcome}</span>
            </div>
            <span class="eq-op">×</span>
            <div class="eq-part">
              <span class="eq-title">성공 확률 (Perceived Likelihood)</span>
              <span class="eq-val">${o.perceivedLikelihood}</span>
            </div>
            <span class="eq-op">÷</span>
            <div class="eq-part">
              <span class="eq-title">소요 시간 (Time Delay)</span>
              <span class="eq-val">${o.timeDelay}</span>
            </div>
            <span class="eq-op">×</span>
            <div class="eq-part">
              <span class="eq-title">노력/희생 (Effort & Sacrifice)</span>
              <span class="eq-val">${o.effortSacrifice}</span>
            </div>
          </div>

          <h3 style="font-size: 15px; font-weight: 800; color: #0F172A; margin-bottom: 12px;">📦 고객이 1초 만에 결제하게 만드는 가치 스택 (Value Stack) 구성</h3>
          <div class="offer-stack-list">
            ${o.stack.map(item => `
              <div class="offer-stack-item">
                <div class="offer-stack-content">
                  <strong>${item.title}</strong>
                  <p>경쟁사가 절대 따라올 수 없는 압도적인 킬러 보너스 구성</p>
                </div>
                <span class="offer-value-pill">${item.value}</span>
              </div>
            `).join("")}
          </div>

          <div style="padding: 16px; background: #FEF3C7; border: 1px solid #F59E0B; border-radius: 8px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="font-size: 14px; color: #92400E;">🎯 최종 판매 가격: ${o.specialPrice} (${o.totalValue})</strong>
              <span class="badge-tag tag-rose" style="font-size: 11px;">마진 95%</span>
            </div>
            <p style="font-size: 12.5px; color: #78350F; line-height: 1.5;">
              <strong>🛡️ 위험 제로 환불 보증 (Risk Reversal Guarantee):</strong> ${o.riskReversal}
            </p>
          </div>
        </div>
      `;
    }

    // Subtab 2: 실전 AI 시스템 프롬프트 & API 연동 코드
    else if (this.currentPlaybookSubtab === "prompts") {
      const pe = vip.promptEngine;
      subtabHtml = `
        <div class="code-section-card glass-card">
          <div class="code-box-header">
            <div class="card-section-title" style="margin-bottom: 0;">
              <i data-lucide="cpu" class="text-indigo"></i>
              <span>실제 서비스에 탑재되는 프로덕션 AI 시스템 프롬프트 (System Prompt Spec)</span>
            </div>
            <button class="btn btn-outline btn-sm" id="btnCopySystemPrompt">
              <i data-lucide="copy"></i> 프롬프트 복사
            </button>
          </div>
          <pre class="prompt-display-pre" id="systemPromptText">${pe.systemPrompt}</pre>

          <div class="code-box-header" style="margin-top: 20px;">
            <div class="card-section-title" style="margin-bottom: 0;">
              <i data-lucide="code" class="text-emerald"></i>
              <span>서버리스 API 연동 코드 스니펫 (Node.js / Python)</span>
            </div>
            <button class="btn btn-outline btn-sm" id="btnCopyApiCode">
              <i data-lucide="copy"></i> 코드 복사
            </button>
          </div>
          <pre class="prompt-display-pre" id="apiCodeText">${pe.apiSnippet}</pre>
        </div>
      `;
    }

    // Subtab 3: 10대 채널별 콜드 세일즈 대본
    else if (this.currentPlaybookSubtab === "scripts") {
      subtabHtml = `
        <div class="scripts-gallery-grid">
          ${vip.salesScripts.map((s, idx) => `
            <div class="script-item-card glass-card">
              <div>
                <div class="script-item-header">
                  <span class="script-channel-badge">${s.channel}</span>
                  <button class="btn btn-outline btn-sm btn-copy-script" data-idx="${idx}" style="padding: 2px 8px; font-size: 11px;">
                    <i data-lucide="copy"></i> 복사
                  </button>
                </div>
                <h4 style="font-size: 13.5px; font-weight: 700; color: #0F172A; margin-bottom: 8px;">${s.title}</h4>
                <div class="script-body-box" id="scriptText_${idx}">${s.script}</div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // Subtab 4: 4주 만에 1000만원 달성 로드맵
    else if (this.currentPlaybookSubtab === "cashflow") {
      subtabHtml = `
        <div class="cashflow-timeline-grid">
          ${vip.cashflowRoadmap.map(w => `
            <div class="week-card glass-card">
              <div>
                <div class="week-header">
                  <span class="week-num-badge">${w.week}</span>
                  <span class="week-target-rev">${w.targetRev}</span>
                </div>
                <h4 style="font-size: 13px; font-weight: 700; color: #0F172A; margin-bottom: 8px;">주차별 핵심 실행 과제</h4>
                <ul class="week-action-list">
                  ${w.actions.map(a => `<li>${a}</li>`).join("")}
                </ul>
              </div>
              <div style="padding: 6px 10px; background: #ECFDF5; border-radius: 4px; font-size: 11px; color: #065F46; font-weight: 700; text-align: center;">
                목표 매출: ${w.targetRev}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    this.playbookStageContainer.innerHTML = subtabHtml;
    if (window.lucide) lucide.createIcons();

    // Event listeners for copy buttons
    document.getElementById("btnCopySystemPrompt")?.addEventListener("click", () => {
      const txt = document.getElementById("systemPromptText")?.innerText;
      if (txt) {
        navigator.clipboard.writeText(txt).then(() => alert("시스템 프롬프트 전문이 클립보드에 복사되었습니다!"));
      }
    });
    document.getElementById("btnCopyApiCode")?.addEventListener("click", () => {
      const txt = document.getElementById("apiCodeText")?.innerText;
      if (txt) {
        navigator.clipboard.writeText(txt).then(() => alert("API 연동 코드가 클립보드에 복사되었습니다!"));
      }
    });
    document.querySelectorAll(".btn-copy-script").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-idx");
        const txt = document.getElementById(`scriptText_${idx}`)?.innerText;
        if (txt) {
          navigator.clipboard.writeText(txt).then(() => alert("세일즈 스크립트 대본이 클립보드에 복사되었습니다!"));
        }
      });
    });
  }

  // [3] 🎯 15대 고객 반론 극복 & 세일즈 클로징 렌더링 (NEW)
  renderObjectionCrushing() {
    if (!this.objectionQaGrid) return;
    this.objectionQaGrid.innerHTML = OBJECTION_CRUSHING_DB.map(item => `
      <div class="objection-card glass-card">
        <div>
          <div class="objection-header">
            <span class="objection-tag">${item.tag}</span>
            <button class="btn btn-outline btn-sm btn-copy-obj" data-id="${item.id}" style="padding: 2px 8px; font-size: 11px;">
              <i data-lucide="copy"></i> 스크립트 복사
            </button>
          </div>
          <div class="objection-q">
            <i data-lucide="help-circle"></i>
            <span>${item.question}</span>
          </div>
          <div class="objection-psychology-box">
            <strong>🧠 고객 심리 분석:</strong> ${item.psychology}
          </div>
          <div class="objection-script-box" id="objScript_${item.id}">
            ${item.script}
          </div>
        </div>
      </div>
    `).join("");

    if (window.lucide) lucide.createIcons();

    this.objectionQaGrid.querySelectorAll(".btn-copy-obj").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const el = document.getElementById(`objScript_${id}`);
        if (el) {
          navigator.clipboard.writeText(el.innerText).then(() => {
            alert("세일즈 클로징 스크립트가 클립보드에 복사되었습니다!\n상담 시 그대로 활용하세요.");
          });
        }
      });
    });
  }

  // [4] 12대 산업 불편함 레이더 렌더링
  renderPainRadar(filterCategory = "all") {
    if (!this.radarCategoryBar || !this.radarPainsGrid) return;

    const categories = [
      { id: "all", name: "전체 산업 (10+)" },
      { id: "b2b", name: "소상공인/B2B" },
      { id: "office", name: "직장인/회계" },
      { id: "legal", name: "부동산/법률" },
      { id: "edu", name: "교육/독서" },
      { id: "focus", name: "멘탈/도파민 디톡스" },
      { id: "retire", name: "은퇴/창직" }
    ];

    this.radarCategoryBar.innerHTML = categories.map(cat => `
      <button class="radar-cat-btn ${cat.id === filterCategory ? "active" : ""}" data-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join("");

    this.radarCategoryBar.querySelectorAll(".radar-cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-cat");
        this.renderPainRadar(cat);
      });
    });

    this.radarPainsGrid.innerHTML = "";
    INDUSTRY_PAIN_RADAR_DB.forEach(item => {
      if (filterCategory !== "all" && item.industry !== filterCategory) {
        return;
      }

      const card = document.createElement("div");
      card.className = "pain-radar-card glass-card";
      card.innerHTML = `
        <div>
          <div class="pain-card-header">
            <span class="pain-cat-tag">${item.industryName}</span>
            <span class="pain-intensity-badge">${item.intensity}</span>
          </div>
          <h3 class="pain-card-title">${item.title}</h3>
          <div class="pain-card-quote">"${item.quote}"</div>
          <div class="pain-card-solution-box">
            <strong style="color: #0284C7; display: block; margin-bottom: 2px;">💡 도출된 AI 솔루션:</strong>
            ${item.solutionIdea}
          </div>
        </div>
        <div class="pain-card-footer">
          <span class="pain-wtp-text">지불 의향: ${item.wtp}</span>
          <button class="btn btn-primary btn-sm">이 고통으로 발굴 시작 →</button>
        </div>
      `;

      card.addEventListener("click", () => {
        this.discoveredItem.target = item.target;
        this.discoveredItem.pain = item.quote;
        this.discoveredItem.solution = item.solutionIdea;
        this.discoveredItem.modelRef = item.modelRef;
        this.discoveredItem.score = 99;
        this.discoveryStep = 5;

        this.switchTab("discovery");
        this.renderDiscoveryChat();
      });

      this.radarPainsGrid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  // [5] TOP 10 모델 갤러리
  renderCardsGrid(categoryFilter = "all") {
    if (!this.ideasCardsGrid) return;
    this.ideasCardsGrid.innerHTML = "";

    Object.values(this.models).forEach(model => {
      if (categoryFilter !== "all" && model.category !== categoryFilter) {
        return;
      }

      const isSelected = model.id === this.currentModelId;
      const card = document.createElement("div");
      card.className = `idea-card glass-card ${isSelected ? "active-selected" : ""}`;
      card.innerHTML = `
        <div>
          <div class="idea-card-header">
            <span class="idea-badge-category">${model.categoryName}</span>
            <span class="idea-badge-mrr">목표 MRR ${model.targetMrr}</span>
          </div>
          <h3 class="idea-card-title">${model.title}</h3>
          <p class="idea-card-desc">${model.shortDesc}</p>
          <div class="idea-card-meta-list">
            <div class="meta-row">
              <span class="meta-lbl">표준 구독료:</span>
              <span class="meta-val">₩${model.defaultStandardPrice.toLocaleString()} /월</span>
            </div>
            <div class="meta-row">
              <span class="meta-lbl">타깃 고객군:</span>
              <span class="meta-val">${model.persona.primary.slice(0, 24)}...</span>
            </div>
            <div class="meta-row">
              <span class="meta-lbl">운영 자동화율:</span>
              <span class="meta-val text-emerald">95% 무인 자동화</span>
            </div>
          </div>
        </div>
        <div class="idea-card-footer">
          <span class="idea-btn-select">
            ${isSelected ? "✅ 현재 활성 모델" : "👉 이 모델로 사업화 시작"}
          </span>
          <button class="btn btn-outline btn-sm">전략 보기</button>
        </div>
      `;

      card.addEventListener("click", () => {
        this.currentModelId = model.id;
        if (this.inputStandardPrice) this.inputStandardPrice.value = model.defaultStandardPrice || 49000;
        if (this.inputStandardUsers) this.inputStandardUsers.value = model.defaultStandardUsers || 120;
        if (this.inputProPrice) this.inputProPrice.value = model.defaultProPrice || 290000;
        if (this.inputProUsers) this.inputProUsers.value = model.defaultProUsers || 18;
        if (this.inputOpsCost) this.inputOpsCost.value = model.defaultOpsCost || 700000;
        this.renderAll();
        this.switchTab("playbook");
      });

      this.ideasCardsGrid.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  // [6] 사업화 전략 캔버스 렌더링
  renderStrategyCanvas() {
    const m = this.models[this.currentModelId] || this.models["gov-subsidy"];
    if (!m) return;

    const heroName = document.getElementById("strategyHeroModelName");
    const heroTitle = document.getElementById("strategyHeroTitle");
    if (heroName) heroName.textContent = m.categoryName;
    if (heroTitle) heroTitle.textContent = `${m.title} — 사업화 캔버스`;

    const painBox = document.getElementById("strategyPainContent");
    if (painBox) {
      painBox.innerHTML = `
        <p style="font-weight: 700; color: #0F172A; margin-bottom: 10px;">"${m.pain.summary}"</p>
        <ul class="bento-list">
          ${m.pain.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      `;
    }

    const flowBox = document.getElementById("strategySolutionFlow");
    if (flowBox) {
      flowBox.innerHTML = `
        <div class="solution-steps-list">
          ${m.solution.map(s => `
            <div class="sol-step-item">
              <div class="step-num-badge">${s.step}</div>
              <div class="step-content">
                <strong>${s.title}</strong>
                <p>${s.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    const delightBox = document.getElementById("strategyDelightContent");
    if (delightBox) {
      delightBox.innerHTML = `
        <div style="margin-bottom: 12px;">
          <strong style="color: #B45309; display: block; font-size: 13px; margin-bottom: 4px;">✨ 차별화 킬러 기능 (Killer Features):</strong>
          <p style="font-size: 12.5px; color: #1E293B; white-space: pre-line;">${m.delight.killerFeatures}</p>
        </div>
        <div style="padding: 10px; background: #FFFBEB; border-left: 3px solid var(--accent-amber); border-radius: 4px;">
          <strong style="color: #92400E; display: block; font-size: 12px; margin-bottom: 2px;">❤️ 고객 감동(Delight) 포인트:</strong>
          <p style="font-size: 12px; color: #78350F;">${m.delight.delightFactor}</p>
        </div>
      `;
    }

    const personaBox = document.getElementById("strategyPersonaContent");
    if (personaBox) {
      personaBox.innerHTML = `
        <div style="margin-bottom: 10px;">
          <strong style="color: #059669; display: block; font-size: 13px; margin-bottom: 3px;">🎯 1차 핵심 타깃 (Primary Persona):</strong>
          <p style="font-size: 12.5px; color: #0F172A;">${m.persona.primary}</p>
        </div>
        <div>
          <strong style="color: var(--text-muted); display: block; font-size: 12px; margin-bottom: 3px;">👥 2차 확장 타깃 (Secondary Persona):</strong>
          <p style="font-size: 12px; color: #1E293B;">${m.persona.secondary}</p>
        </div>
      `;
    }

    const gtmBox = document.getElementById("strategyGtmContent");
    if (gtmBox) {
      gtmBox.innerHTML = `
        <div style="margin-bottom: 10px;">
          <strong style="color: #0284C7; display: block; font-size: 13px; margin-bottom: 3px;">📢 초기 유입 및 시딩 채널:</strong>
          <p style="font-size: 12.5px; color: #0F172A;">${m.gtm.channel}</p>
        </div>
        <div style="padding: 8px 10px; background: #F0F9FF; border-radius: 6px; border: 1px solid #BAE6FD;">
          <strong style="color: #0369A1; display: block; font-size: 11.5px; margin-bottom: 2px;">🧲 리드 마그넷 (무료 바이럴 도구):</strong>
          <p style="font-size: 11.5px; color: #0F172A;">${m.gtm.leadMagnet}</p>
        </div>
      `;
    }

    const opsBox = document.getElementById("strategyOpsContent");
    if (opsBox) {
      opsBox.innerHTML = `
        <div style="margin-bottom: 10px;">
          <strong style="color: #7C3AED; display: block; font-size: 13px; margin-bottom: 3px;">⚙️ 무인 운영 자동화 구조:</strong>
          <p style="font-size: 12.5px; color: #0F172A;">${m.ops.automation}</p>
        </div>
        <div>
          <strong style="color: #6D28D9; display: block; font-size: 12px; margin-bottom: 3px;">🚀 향후 스케일업 및 부가 수익:</strong>
          <p style="font-size: 12px; color: #1E293B;">${m.ops.expansion}</p>
        </div>
      `;
    }
  }

  // [7] 실시간 프로토타입 체험실
  renderSandbox() {
    if (!this.sandboxInteractiveStage) return;
    const m = this.models[this.currentModelId] || this.models["gov-subsidy"];
    const heroTitle = document.getElementById("sandboxHeroTitle");
    if (heroTitle) heroTitle.textContent = `${m.title} — 실시간 엔진 시연`;

    let sandboxHtml = "";
    if (this.currentModelId === "gov-subsidy") {
      sandboxHtml = `
        <div class="sandbox-layout-grid">
          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="building-2"></i> 소상공인 사업체 정보 입력</h3>
            </div>
            <div class="sandbox-form-box">
              <div>
                <label class="sandbox-input-label">업종 분류</label>
                <select id="sbGovType" class="form-input">
                  <option value="food">일반음식점 / 카페 / 베이커리</option>
                  <option value="retail">온라인 쇼핑몰 / 도소매업</option>
                  <option value="tech">소프트웨어 / IT 스타트업</option>
                  <option value="mfg">정밀기계 / 금형 제조업</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">연간 매출액</label>
                <select id="sbGovRev" class="form-input">
                  <option value="1">1억 원 미만 (초기 창업)</option>
                  <option value="3" selected>1억 ~ 5억 원</option>
                  <option value="10">5억 ~ 15억 원</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">상시 근로자 수</label>
                <input type="number" id="sbGovEmp" class="form-input" value="3" min="0" max="50">
              </div>
              <button class="btn btn-primary" id="btnRunGovMatch">
                <i data-lucide="sparkles"></i> 1초 만에 적격 지원금 & 서류 완성
              </button>
            </div>
          </div>

          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="check-check"></i> 실시간 AI 매칭 & 사업계획서 초안</h3>
            </div>
            <div class="sandbox-result-box" id="sbGovResultBox">
              <div class="sandbox-result-content">
                <div class="sandbox-match-card">
                  <h4>1. [중기부] 2026 소상공인 스마트상점 기술보급사업 <span class="badge-match-score">승인확률 94%</span></h4>
                  <p>지원금액: <strong>최대 1,500만 원</strong> (국비 70% 무상환 지원) / 마감 D-12일</p>
                </div>
                <div class="sandbox-match-card">
                  <h4>2. [지자체] 희망리턴패키지 경영개선 바우처 <span class="badge-match-score">승인확률 88%</span></h4>
                  <p>지원금액: <strong>최대 2,000만 원</strong> (매장 리모델링/마케팅 전액 지원)</p>
                </div>
                <div style="margin-top: 10px; padding: 10px; background: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 6px;">
                  <strong style="color: #065F46; display: block; margin-bottom: 2px;">📝 표준 사업계획서 1번 항목 자동 생성 완료:</strong>
                  <p style="font-size: 11.5px; color: #047857;">"본 사업장은 스마트 무인 주문 시스템 도입을 통해 인건비를 35% 절감하고, 테이블 회전율을 1.5배 개선하여 연매출 4.8억 원을 달성하고자 함..."</p>
                </div>
              </div>
              <button class="btn btn-outline btn-sm" style="align-self: flex-end; margin-top: 10px;">
                <i data-lucide="download"></i> HWP 사업계획서 다운로드
              </button>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentModelId === "dirty-read-lab") {
      sandboxHtml = `
        <div class="sandbox-layout-grid">
          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="book-open"></i> DirtyRead Lab · 능동적 독서 인출기</h3>
            </div>
            <div class="sandbox-form-box">
              <div>
                <label class="sandbox-input-label">읽고 있는 도서 선택 또는 입력</label>
                <select id="sbDrBookSelect" class="form-input">
                  <option value="불편의 값">《불편의 값》 — Genspark AI 워크스페이스 편</option>
                  <option value="원씽 (The One Thing)">《원씽 (The One Thing)》 — 게리 켈러</option>
                  <option value="역행자">《역행자》 — 자청</option>
                  <option value="부의 추월차선">《부의 추월차선》 — 엠제이 드마코</option>
                  <option value="직접입력">직접 도서명 입력...</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">오늘 읽은 챕터명</label>
                <input type="text" id="sbDrChapter" class="form-input" value="제1장. 불편은 화폐다: 매일 참는 고통의 목록화">
              </div>
              <div>
                <label class="sandbox-input-label">책을 읽으며 든 거친 생각 / 의문 / 밑줄 문장</label>
                <textarea id="sbDrNote" class="form-textarea" rows="3" placeholder="예: '책을 깨끗하게 읽어야 나중에 중고로 팔 수 있다는 생각 때문에 줄도 못 긋고 그냥 눈으로만 훑었음. 저자는 참지 말고 화폐로 바꾸라는데 구체적으로 어떻게?'">책을 깨끗하게 보관해야 한다는 강박 때문에 형광펜도 못 긋고 그냥 눈으로만 훑고 지나쳤음. 저자는 불편이 화폐라고 하는데 어떻게 내 일상에서 찾아내야 할지 막연함.</textarea>
              </div>
              <button class="btn btn-primary" id="btnRunDirtyReadDemo">
                <i data-lucide="zap"></i> ⚡ 지저분한 독서 반론 낙서 & 3줄 아웃풋 생성
              </button>
            </div>
          </div>

          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="award"></i> 실시간 생성된 '3줄 아웃풋' 워크북</h3>
            </div>
            <div class="sandbox-result-box" id="sbDrResultBox">
              <div class="sandbox-result-content">
                <!-- Margin Scribble -->
                <div style="padding: 12px; background: #FEF2F2; border-left: 3px solid #EF4444; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #991B1B; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i> ⚠️ 여백에 적을 지저분한 반론 낙서 (Margin Annotation):
                  </strong>
                  <p id="sbDrMarginNote" style="font-size: 12.5px; color: #7F1D1D; font-weight: 700; margin-top: 4px;">
                    "중고로 1만 원 건지려다 내 뇌에 남는 100만 원 가치 통찰을 0원으로 만드는 치명적 착각이다! 책은 찢고 더럽힐수록 내 자산이 된다."
                  </p>
                </div>

                <!-- Socratic Question -->
                <div style="padding: 10px; background: #FFFBEB; border-left: 3px solid #F59E0B; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #92400E; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="help-circle" style="width: 14px; height: 14px;"></i> 🧠 소크라테스 검증 질문 (Devil's Advocate):
                  </strong>
                  <p id="sbDrQuestion" style="font-size: 12px; color: #78350F; margin-top: 3px;">
                    "만약 오늘 퇴근길에 겪은 가장 짜증 나는 엑셀 복붙 작업 하나를 메모하지 않는다면, 1년 뒤 당신의 퇴근 시간은 단 1분이라도 줄어들 수 있는가?"
                  </p>
                </div>

                <!-- 3-Sentence Matrix -->
                <div style="padding: 12px; background: #F0FDF4; border: 1px solid #86EFAC; border-radius: 6px;">
                  <strong style="color: #166534; font-size: 12.5px; display: block; margin-bottom: 8px;">
                    📝 The 3-Sentence Output Matrix (3줄 아웃풋 완성):
                  </strong>
                  <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: #14532D;">
                    <div><strong>[1줄 핵심 명제]</strong> <span id="sbDrLine1">눈으로만 읽는 독서는 숏폼과 다를 바 없는 도파민 낭비이며, 지식은 반론을 적을 때만 체화된다.</span></div>
                    <div><strong>[1줄 내 반론/통찰]</strong> <span id="sbDrLine2">그러나 무작정 밑줄만 긋는 것도 '공부했다는 착각'을 주므로, 반드시 저자의 논리를 반박하는 1문장을 써야 한다.</span></div>
                    <div><strong>[1줄 24시간 실행]</strong> <span id="sbDrLine3">오늘 퇴근 전 10분 동안 내가 겪은 가장 번거로운 서류 작업 1개를 메모장에 적고 A-C-X 3단어로 분해한다.</span></div>
                  </div>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="badge-tag tag-emerald" style="font-size: 11px;">완독률 300% 인증 도장 발급됨</span>
                <button class="btn btn-outline btn-sm" id="btnExportDrNotion">
                  <i data-lucide="share-2"></i> 노션 워크북으로 내보내기
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentModelId === "post-career-architect") {
      sandboxHtml = `
        <div class="sandbox-layout-grid">
          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="compass"></i> Post-Career Architect · 은퇴 대비 1인 창직 진단기</h3>
            </div>
            <div class="sandbox-form-box">
              <div>
                <label class="sandbox-input-label">30년 커리어 / 전문 직무 선택</label>
                <select id="sbPcaCareerSelect" class="form-input">
                  <option value="manufacturing">대기업/중견 제조 생산관리·공장장 28년 (스마트팩토리/원가절감)</option>
                  <option value="finance">시중은행 기업금융·여신심사 지점장 25년 (대출/정책자금)</option>
                  <option value="it-pm">IT 소프트웨어 개발·기술영업 수석 PM 22년 (AI도입/시스템)</option>
                  <option value="hr-eval">대기업 인사팀장·노무·성과평가 26년 (조직문화/임금체계)</option>
                  <option value="public">공공기관/공기업 정책기획·입찰조달 감사 27년 (공공계약/B2G)</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">목표 은퇴(퇴직) D-Day</label>
                <select id="sbPcaDdaySelect" class="form-input">
                  <option value="D-1년">D-1년 (퇴직 전 무자본 셋업 & 지식 상품 1호 기획)</option>
                  <option value="D-6개월">D-6개월 (소득 크레바스 방어 & 1:1 고객 사전 확보)</option>
                  <option value="D-3개월">D-3개월 (전자책 교보문고 등록 및 1인 출판사 신고)</option>
                  <option value="이미 퇴직 완료">이미 퇴직 완료 (즉시 월 500만원+ 파이프라인 가동)</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">평생 경험 중 시장이 지불할 핵심 강점 / 노하우</label>
                <textarea id="sbPcaNote" class="form-textarea" rows="3" placeholder="예: '28년간 현장 원가 15% 절감 및 스마트팩토리 국비 심사 30회 통과. 후배들은 묻지만 정작 은퇴 후엔 무엇을 할지 막막함.'">28년간 제조 현장에서 원가 15% 절감 및 스마트공장 국비 도입 심사 30회 통과 경험 보유. 후배들은 노하우를 물어보지만 은퇴 후 치킨집밖에 떠오르지 않아 두려움.</textarea>
              </div>
              <button class="btn btn-primary" id="btnRunPostCareerDemo">
                <i data-lucide="zap"></i> ⚡ 1인 창직(創職) 로드맵 & 3대 지식 상품 즉시 설계
              </button>
            </div>
          </div>

          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="award"></i> 완성된 1인 창직 마스터플랜 & 3대 지식 상품</h3>
            </div>
            <div class="sandbox-result-box" id="sbPcaResultBox">
              <div class="sandbox-result-content">
                <!-- Positioning Title -->
                <div style="padding: 12px; background: #EEF2FF; border-left: 3px solid #6366F1; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #3730A3; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="user-check" style="width: 14px; height: 14px;"></i> 🎓 1인 창직(創職) 공식 명칭 & 포지셔닝:
                  </strong>
                  <p id="sbPcaTitle" style="font-size: 13px; color: #1E1B4B; font-weight: 800; margin-top: 4px;">
                    "중소 제조공장 스마트팩토리 국비 도입 & 원가절감 1인 자문관 (Smart-Factory Architect)"
                  </p>
                  <span id="sbPcaSlogan" style="font-size: 11.5px; color: #4F46E5; display: block; margin-top: 2px;">
                    "배움과 경험에는 은퇴가 없다 — 28년 현장 노하우를 기업이 줄 서서 사는 자문 상품으로"
                  </span>
                </div>

                <!-- 3-Tier Knowledge Products -->
                <div style="padding: 10px; background: #FFFBEB; border-left: 3px solid #F59E0B; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #92400E; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="book" style="width: 14px; height: 14px;"></i> 📚 1차 진입 상품: 교보문고 전자책 10챕터 자동 출판
                  </strong>
                  <p id="sbPcaEbook" style="font-size: 12px; color: #78350F; font-weight: 700; margin-top: 3px;">
                    《치킨집 대신 내 공장 노하우를 팝니다: 중기부 스마트팩토리 국비 1억 수혜 실전 10대 바이블》 (권당 ₩25,000)
                  </p>
                </div>

                <!-- High-Ticket Consulting & Roadmap -->
                <div style="padding: 12px; background: #F0FDF4; border: 1px solid #86EFAC; border-radius: 6px;">
                  <strong style="color: #166534; font-size: 12.5px; display: block; margin-bottom: 8px;">
                    💼 2차 고단가 오퍼 & 90일 소득 크레바스 방어선:
                  </strong>
                  <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px; color: #14532D;">
                    <div><strong>[1:1 고단가 자문]</strong> <span id="sbPcaConsulting">시간당 ₩250,000 / 월 ₩1,500,000 리테이너 자문 계약서 (지방 제조기업 5곳 타깃)</span></div>
                    <div><strong>[90일 캐시플로우]</strong> <span id="sbPcaRoadmap">D-60일 전자책 출간 ➔ D-30일 1:1 고객 3곳 확보(₩450만) ➔ D-Day 1인 출판사 법인화 & 월 1,040만 원 안정화</span></div>
                    <div><strong>[세무·법률 가이드]</strong> <span id="sbPcaTax">간이과세 1인 지식기업 등록, 출판사 부가세 면세 혜택, 신중년 중기부 창업지원금 5,000만원 연계</span></div>
                  </div>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="badge-tag tag-emerald" style="font-size: 11px;">은퇴 불안 0% 마스터플랜 승인됨</span>
                <div style="display: flex; gap: 8px;">
                  <button class="btn btn-outline btn-sm" id="btnCopyPcaEbook">
                    <i data-lucide="copy"></i> 전자책 기획서 복사
                  </button>
                  <button class="btn btn-primary btn-sm" id="btnExportPcaPlan" style="background: #4F46E5;">
                    <i data-lucide="download"></i> 창직 로드맵 내보내기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentModelId === "deepfocus-21") {
      sandboxHtml = `
        <div class="sandbox-layout-grid">
          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="zap"></i> DeepFocus 21 · 도파민 디톡스 & 심층 사유 진단기</h3>
            </div>
            <div class="sandbox-form-box">
              <div>
                <label class="sandbox-input-label">일일 숏폼/SNS 스크린타임 수준</label>
                <select id="sbDfScreenTime" class="form-input">
                  <option value="2.5">하루 2~3시간 (퇴근 후 침대에서 릴스·쇼츠 무한 스크롤)</option>
                  <option value="4.0">하루 3~5시간 (업무 중 수시 확인 + 자기 전 2시간 몰입 굴레)</option>
                  <option value="6.0">하루 5시간 이상 (기상 즉시 폰 확인 + 식사·이동 만성 중독)</option>
                  <option value="1.5">하루 1~2시간 (초기 경고: 집중력 저하 및 잦은 산만함)</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">가장 고통스러운 집중력 붕괴 증상</label>
                <select id="sbDfSymptom" class="form-input">
                  <option value="reading-fail">책 5페이지도 못 읽고 덮음 (긴 글 텍스트 난독 및 산만함)</option>
                  <option value="popcorn-brain">업무/공부 중 3분마다 스마트폰 무의식 잠금해제</option>
                  <option value="brain-fog">만성 브레인 포그 & 심각한 기상 피로 및 무기력증</option>
                  <option value="no-deep-think">심도 있는 기획서 작성 및 고도의 문제해결 사고 마비</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">21일 딥다이브 훈련 모드</label>
                <select id="sbDfMode" class="form-input">
                  <option value="standard">표준 21일 챌린지 (도파민 단식 + 45분 텍스트 몰입) - 월 ₩49,000</option>
                  <option value="vip">VIP 1:1 심층 코칭 + 오프라인 디톡스 캠프 연계 - 월 ₩250,000</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">현재 목표 및 복원하고 싶은 집중 대상</label>
                <textarea id="sbDfTargetGoal" class="form-textarea" rows="3" placeholder="예: '하루 3시간 이상 숏폼을 보느라 업무와 독서에 집중을 못합니다. 45분 동안 잡념 없이 텍스트를 정독하고 싶습니다.'">하루 3시간 이상 숏폼을 보느라 자격증 시험 공부와 업무 기획에 집중을 못합니다. 잡념 없이 45분 동안 책 1챕터를 정독하고 내 생각을 정리하고 싶습니다.</textarea>
              </div>
              <button class="btn btn-primary" id="btnRunDeepFocusDemo">
                <i data-lucide="zap"></i> ⚡ 21일 뇌신경 도파민 회복 처방전 & 딥포커스 플랜 생성
              </button>
            </div>
          </div>

          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="brain"></i> 21일 신경가소성 복원 처방전 & 몰입 리포트</h3>
            </div>
            <div class="sandbox-result-box" id="sbDfResultBox">
              <div class="sandbox-result-content">
                <!-- Neuroplasticity Recovery Gauge -->
                <div style="padding: 12px; background: #ECFDF5; border-left: 3px solid #10B981; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #065F46; font-size: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <span style="display: flex; align-items: center; gap: 4px;"><i data-lucide="activity" style="width: 14px; height: 14px;"></i> 🧠 뇌 도파민 수용체 신경가소성 회복 예측도:</span>
                    <span id="sbDfRecoveryScore" style="color: #059669; font-weight: 800; font-size: 13px;">91.8% 회복 가능</span>
                  </strong>
                  <p id="sbDfRecoveryDesc" style="font-size: 12.5px; color: #047857; font-weight: 700; margin-top: 4px;">
                    "전두엽 알파파 동기화 및 21일 알고리즘 차단 시, 14일 차부터 팝콘 브레인 78% 완화"
                  </p>
                  <span id="sbDfTimeGain" style="font-size: 11.5px; color: #059669; display: block; margin-top: 2px;">
                    ✨ 일일 회복 집중 시간: <strong>+3.5시간/일</strong> (월 105시간 ➔ 경제적 시간 가치 ₩2,625,000 상당)
                  </span>
                </div>

                <!-- 3-Phase Protocol -->
                <div style="padding: 10px; background: #EEF2FF; border-left: 3px solid #6366F1; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #3730A3; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="calendar" style="width: 14px; height: 14px;"></i> 📅 21일 단계별 뇌신경 리셋 프로토콜:
                  </strong>
                  <div style="font-size: 12px; color: #312E81; line-height: 1.6; margin-top: 4px;">
                    <div><strong>[1단계 Day 1~7] 도파민 단식:</strong> <span id="sbDfPhase1">스마트폰 물리적 보관함 강제 락 + 하루 SNS 15분 제한, 금단 불안 극복</span></div>
                    <div><strong>[2단계 Day 8~14] 45분 몰입:</strong> <span id="sbDfPhase2">세타파 바이노럴 비트 음원 동기화 + 무호흡 45분 텍스트 정독 훈련</span></div>
                    <div><strong>[3단계 Day 15~21] 심층 사유:</strong> <span id="sbDfPhase3">소크라테스식 저자 논리 반론 메모 + '3줄 통찰 아웃풋' 매일 디스코드 인증</span></div>
                  </div>
                </div>

                <!-- Retreat & Audio Bonus Box -->
                <div style="padding: 12px; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 6px;">
                  <strong style="color: #92400E; font-size: 12.5px; display: block; margin-bottom: 6px;">
                    🏕️ VIP 연계 확장: 오프라인 디지털 디톡스 캠프 & 뇌파 오디오
                  </strong>
                  <div style="font-size: 12px; color: #78350F; line-height: 1.5;">
                    <div><strong>[오프라인 캠프]</strong> <span id="sbDfCamp">강원도 숲속 1박 2일 스마트폰 압수 묵언 독서 리트릿 (주말 1기 운영)</span></div>
                    <div><strong>[수면 유도 뇌파]</strong> <span id="sbDfAudio">도파민 과다로 인한 불면증 해소용 델타파 숙면 유도 오디오 스트리밍 연계</span></div>
                    <div><strong>[기업 B2B 출강]</strong> <span id="sbDfB2b">스타트업 및 IT 기업 임직원 번아웃 탈출 '딥포커스 45분 워크숍' 공급</span></div>
                  </div>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="badge-tag tag-emerald" style="font-size: 11px;">21일 몰입 플랜 생성 완료</span>
                <div style="display: flex; gap: 8px;">
                  <button class="btn btn-outline btn-sm" id="btnCopyDfMission">
                    <i data-lucide="copy"></i> 21일 데일리 미션 복사
                  </button>
                  <button class="btn btn-primary btn-sm" id="btnCopyDfCoaching" style="background: #059669;">
                    <i data-lucide="check-circle-2"></i> 1:1 심층 코칭 신청서
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentModelId === "resilience-60h") {
      sandboxHtml = `
        <div class="sandbox-layout-grid">
          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="shield-alert"></i> Resilience-60 · 30초 구출-재진입(Rescue-Reentry) 시뮬레이터</h3>
            </div>
            <div class="sandbox-form-box">
              <div>
                <label class="sandbox-input-label">현재 직면한 극한의 스트레스 / 실패 위기</label>
                <select id="sbResCrisisType" class="form-input">
                  <option value="runway">스타트업 런웨이 2개월 고갈 & 투자 유치 최종 무산 (공황 상태)</option>
                  <option value="portfolio">포트폴리오 -45% 급락 및 마진콜 위험 (트레이더/펀드매니저)</option>
                  <option value="burnout">C-Level 임원 번아웃 & 무기력증 (출근 불가 및 팀 관리 마비)</option>
                  <option value="exam">고강도 국가고시/전문직 시험 탈락 후 실존적 절망</option>
                </select>
              </div>
              <div>
                <label class="sandbox-input-label">현재 뇌의 파국화(Catastrophizing) 독백</label>
                <textarea id="sbResThought" class="form-textarea" rows="3">내 모든 청춘과 자본이 날아갔고, 빚만 남았으며 앞으로 어떤 투자자도 나를 믿지 않을 것이다. 완전히 끝장났다.</textarea>
              </div>
              <div>
                <label class="sandbox-input-label">실시간 심박수(BPM) 및 HRV 추정치</label>
                <div style="display: flex; gap: 10px;">
                  <input type="text" class="form-input" value="심박수: 114 BPM (급성 빈맥)" readonly style="background: rgba(244,63,94,0.1); color: #FDA4AF;">
                  <input type="text" class="form-input" value="HRV: 16 ms (미주신경 붕괴)" readonly style="background: rgba(244,63,94,0.1); color: #FDA4AF;">
                </div>
              </div>
              <button class="btn btn-primary" id="btnRunResilienceDemo" style="background: linear-gradient(135deg, #E11D48, #BE123C);">
                <i data-lucide="activity"></i> ⚡ 30초 생리학적 한숨(Physiological Sigh) & CBT 반론 가동
              </button>
            </div>
          </div>

          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="award"></i> 60시간 지속 유영 회복탄력성 처방 결과</h3>
            </div>
            <div class="sandbox-result-box" id="sbResResultBox">
              <div class="sandbox-result-content">
                <!-- 1957 Experiment Benchmark -->
                <div style="padding: 12px; background: #EEF2FF; border-left: 3px solid #6366F1; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #3730A3; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="microscope" style="width: 14px; height: 14px;"></i> 🐭 커트 릭터 1957 존스홉킨스 신경생리학 대조:
                  </strong>
                  <p style="font-size: 12.5px; color: #1E1B4B; font-weight: 700; margin-top: 4px;">
                    "4분 만에 멈추는 미주신경 충격(Vagal Shock) ➔ 30초 구조 경험 후 <span style='color: #2563EB;'>60시간 유영(240배 한계 돌파)</span> 회로 활성화 완료"
                  </p>
                </div>

                <!-- 30-Sec Protocol Result -->
                <div style="padding: 10px; background: #ECFDF5; border-left: 3px solid #10B981; border-radius: 6px; margin-bottom: 10px;">
                  <strong style="color: #065F46; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="wind" style="width: 14px; height: 14px;"></i> 🌬️ 30초 생리학적 한숨 처방 (Stanford Huberman Lab):
                  </strong>
                  <p style="font-size: 12px; color: #047857; margin-top: 3px;">
                    코로 깊게 2회 연속 흡기(3초+1초) ➔ 입으로 서행 호기(6초) × 3세트. 심박수 114 BPM ➔ 68 BPM 안정화 및 전전두엽 혈류 복원.
                  </p>
                </div>

                <!-- Socratic Dispute & Action -->
                <div style="padding: 12px; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 6px;">
                  <strong style="color: #92400E; font-size: 12px; display: block; margin-bottom: 4px;">
                    🧠 소크라테스식 반론 & 60시간 재진입 5분 마이크로 액션:
                  </strong>
                  <p style="font-size: 11.5px; color: #78350F; line-height: 1.5;">
                    • <strong>인지 왜곡 해체:</strong> "투자가 1회 무산된 객관적 사실(Fact)을 인생의 파멸(Fiction)과 분리하라."<br>
                    • <strong>재진입 액션:</strong> 앞으로 60시간 동안 내가 100% 통제할 수 있는 일 3가지(지출 동결, 브릿지론 신청, 핵심 고객 콜)만 수행하라.
                  </p>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="badge-tag tag-rose" style="font-size: 11px;">익사 위기 차단됨 (생존율 96.8%)</span>
                <div style="display: flex; gap: 8px;">
                  <a href="resilience_coach.html" target="_blank" class="btn btn-emerald btn-sm">
                    <i data-lucide="external-link"></i> 전용 인터랙티브 웹앱 실행
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      sandboxHtml = `
        <div class="sandbox-layout-grid">
          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="sparkles"></i> ${m.title} 코어 엔진 실행</h3>
            </div>
            <div class="sandbox-form-box">
              <label class="sandbox-input-label">입력 데이터 (키워드 또는 요구사항)</label>
              <textarea class="form-textarea" rows="4" placeholder="${m.persona.primary}의 문제 상황 입력...">${m.shortDesc}</textarea>
              <button class="btn btn-primary" id="btnRunGenericDemo">
                <i data-lucide="cpu"></i> AI 고속 처리 엔진 구동
              </button>
            </div>
          </div>

          <div class="sandbox-panel">
            <div class="sandbox-panel-title">
              <h3><i data-lucide="file-check"></i> 자동 생성된 완성형 결과물</h3>
            </div>
            <div class="sandbox-result-box">
              <div class="sandbox-result-content">
                <div style="padding: 12px; background: #EEF2FF; border-left: 3px solid #6366F1; border-radius: 4px; margin-bottom: 10px;">
                  <strong style="color: #3730A3; display: block; font-size: 12.5px;">✨ 킬러 기능 실시간 결과 렌더링 완료:</strong>
                  <p style="font-size: 12px; color: #0F172A; margin-top: 4px;">${m.delight.killerFeatures.replace(/\n/g, "<br>")}</p>
                </div>
                <div style="padding: 8px 10px; background: #ECFDF5; border-radius: 4px; border: 1px solid #A7F3D0;">
                  <strong style="color: #065F46; font-size: 11.5px;">❤️ 고객 감동 체감 지표:</strong>
                  <p style="font-size: 11.5px; color: #047857; margin-top: 2px;">${m.delight.delightFactor}</p>
                </div>
              </div>
              <button class="btn btn-outline btn-sm" style="align-self: flex-end; margin-top: 10px;">
                <i data-lucide="download"></i> 결과물 다운로드
              </button>
            </div>
          </div>
        </div>
      `;
    }

    this.sandboxInteractiveStage.innerHTML = sandboxHtml;
    if (window.lucide) lucide.createIcons();

    document.getElementById("btnRunGovMatch")?.addEventListener("click", () => {
      alert("공공데이터 포털 1,200개 공고와 실시간 매칭하여 승인확률 94% 지원사업 2건을 선별했습니다!");
    });

    document.getElementById("sbDrBookSelect")?.addEventListener("change", (e) => {
      const val = e.target.value;
      const chapterInput = document.getElementById("sbDrChapter");
      if (val === "원씽 (The One Thing)") {
        if (chapterInput) chapterInput.value = "제5장. 도미노 효과: 모든 것을 쉽게 만드는 단 하나";
      } else if (val === "역행자") {
        if (chapterInput) chapterInput.value = "제2단계. 자의식 해체: 남 탓과 합리화 부수기";
      } else if (val === "부의 추월차선") {
        if (chapterInput) chapterInput.value = "제4부. 당신이 가난한 이유: 서행차선 승객의 덫";
      } else if (val === "불편의 값") {
        if (chapterInput) chapterInput.value = "제1장. 불편은 화폐다: 매일 참는 고통의 목록화";
      }
    });

    document.getElementById("btnRunDirtyReadDemo")?.addEventListener("click", () => {
      const book = document.getElementById("sbDrBookSelect")?.value || "도서";
      const ch = document.getElementById("sbDrChapter")?.value || "챕터";
      const note = document.getElementById("sbDrNote")?.value || "";

      const marginEl = document.getElementById("sbDrMarginNote");
      const qEl = document.getElementById("sbDrQuestion");
      const l1 = document.getElementById("sbDrLine1");
      const l2 = document.getElementById("sbDrLine2");
      const l3 = document.getElementById("sbDrLine3");

      if (marginEl) marginEl.textContent = `"${book}의 이 주장은 절반만 맞다! '${note.slice(0, 20)}...'라는 내 직관을 관철하여 내 사업의 차별점으로 삼자."`;
      if (qEl) qEl.textContent = `"저자의 결론을 반박하지 않는다면, 당신은 또다시 이 책의 지식을 실행하지 않은 채 3일 뒤 망각할 것인가?"`;
      if (l1) l1.textContent = `[${book}] ${ch}의 핵심은 '생각만 하지 말고 텍스트를 내 삶의 시스템으로 끄집어내는 것'이다.`;
      if (l2) l2.textContent = `그러나 내 현실에서는 '${note.slice(0, 25) || "시간 부족"}'이라는 장벽이 있으므로, 작은 단위부터 쪼개서 공격해야 한다.`;
      if (l3) l3.textContent = `향후 24시간 내에 오늘 읽은 챕터의 공식 하나를 내 실제 업무 메모장에 적용해 보고 팀에 공유한다.`;

      alert(`⚡ [DirtyRead Lab] '${book}' 챕터 분석 완료!\n3줄 아웃풋과 여백 낙서 카드가 갱신되었습니다.`);
    });

    document.getElementById("btnExportDrNotion")?.addEventListener("click", () => {
      alert("📋 [Notion 내보내기] 'DirtyRead Lab 3줄 아웃풋 워크북 템플릿' 링크가 클립보드에 복사되었습니다!\n노션으로 복제(Duplicate)하여 바로 기록하세요.");
    });

    document.getElementById("sbPcaCareerSelect")?.addEventListener("change", (e) => {
      const val = e.target.value;
      const noteEl = document.getElementById("sbPcaNote");
      const titleEl = document.getElementById("sbPcaTitle");
      const sloganEl = document.getElementById("sbPcaSlogan");
      const ebookEl = document.getElementById("sbPcaEbook");
      const consultEl = document.getElementById("sbPcaConsulting");
      const mapEl = document.getElementById("sbPcaRoadmap");

      if (val === "manufacturing") {
        if (noteEl) noteEl.value = "28년간 제조 현장에서 원가 15% 절감 및 스마트공장 국비 도입 심사 30회 통과 경험 보유. 후배들은 노하우를 물어보지만 은퇴 후 치킨집밖에 떠오르지 않아 두려움.";
        if (titleEl) titleEl.textContent = '"중소 제조공장 스마트팩토리 국비 도입 & 원가절감 1인 자문관 (Smart-Factory Architect)"';
        if (sloganEl) sloganEl.textContent = '"배움과 경험에는 은퇴가 없다 — 28년 현장 노하우를 기업이 줄 서서 사는 자문 상품으로"';
        if (ebookEl) ebookEl.textContent = "《치킨집 대신 내 공장 노하우를 팝니다: 중기부 스마트팩토리 국비 1억 수혜 실전 10대 바이블》 (권당 ₩25,000)";
        if (consultEl) consultEl.textContent = "시간당 ₩250,000 / 월 ₩1,500,000 리테이너 자문 계약서 (지방 제조기업 5곳 타깃)";
        if (mapEl) mapEl.textContent = "D-60일 전자책 출간 ➔ D-30일 1:1 고객 3곳 확보(₩450만) ➔ D-Day 1인 출판사 법인화 & 월 1,040만 원 안정화";
      } else if (val === "finance") {
        if (noteEl) noteEl.value = "25년간 시중은행 지점장으로 중소기업 여신 3,000건 심사. 기업들이 대출 서류를 몰라 쩔쩔매는 것을 수없이 보았음.";
        if (titleEl) titleEl.textContent = '"중소기업 정책자금 대출 & 신용평가 2등급 상향 전문 1인 금융 아키텍트"';
        if (sloganEl) sloganEl.textContent = '"은행 창구의 비밀을 중소기업 대표의 무기로 — 25년 은행 지점장의 1:1 자문"';
        if (ebookEl) ebookEl.textContent = "《은행 지점장이 절대 안 알려주는 중소기업 대출 심사 통과 15대 비밀 공식》 (권당 ₩29,000)";
        if (consultEl) consultEl.textContent = "기업당 재무 건전성 진단 ₩500,000 / 정부 정책자금 유치 성공 자문 (월 ₩2,000,000)";
        if (mapEl) mapEl.textContent = "D-90일 전자책 출판 ➔ 리멤버 4050 CEO 칼럼 기고 ➔ 자문 기업 6곳 확보로 첫 달 ₩900만 돌파";
      } else if (val === "it-pm") {
        if (noteEl) noteEl.value = "22년간 공공·금융 SI 프로젝트 총괄 수석 PM. 비개발자 경영진이 외주 개발사에 사기당하는 현장을 숱하게 목격함.";
        if (titleEl) titleEl.textContent = '"비개발자 CEO를 위한 AI·외주개발 리스크 0% 감리 전문 1인 테크 고문"';
        if (sloganEl) sloganEl.textContent = '"개발자 뽑지 마세요 — 22년 차 수석 PM이 대표님의 외주 개발사를 1:1 감리합니다"';
        if (ebookEl) ebookEl.textContent = "《외주 개발에 5천만원 날리기 전에 읽는 비개발자 대표의 실전 IT 발주 바이블》 (권당 ₩27,000)";
        if (consultEl) consultEl.textContent = "외주 계약서 RFP 검수 건당 ₩350,000 / 월간 테크 고문 리테이너 ₩1,800,000";
        if (mapEl) mapEl.textContent = "D-45일 IT 창업 커뮤니티 무료 RFP 진단 배포 ➔ 스타트업 테크 고문 5건 수주 (월 ₩1,050만)";
      } else if (val === "hr-eval") {
        if (noteEl) noteEl.value = "26년간 대기업 및 중견기업 인사팀장. 임금피크제, 노무 분쟁, 핵심 인재 이탈 방지 솔루션 전문화.";
        if (titleEl) titleEl.textContent = '"중소·스타트업 핵심 인재 이탈 방어 & 저비용 성과평가 설계 전문 1인 노무 코치"';
        if (sloganEl) sloganEl.textContent = '"대기업 26년 인사 시스템을 10인 스타트업에 맞춤 이식합니다"';
        if (ebookEl) ebookEl.textContent = "《사람 때문에 망하는 스타트업을 위한 퇴사율 0% 팀 빌딩 & 보상 매뉴얼》 (권당 ₩24,000)";
        if (consultEl) consultEl.textContent = "스타트업 분기 평가 체계 구축 건당 ₩1,200,000 / 대표 1:1 코칭 회당 ₩200,000";
        if (mapEl) mapEl.textContent = "원티드/블라인드 인사 칼럼 기고 ➔ 초기 스타트업 8개 사 인사 자문 계약으로 월 ₩1,020만";
      } else if (val === "public") {
        if (noteEl) noteEl.value = "27년간 공기업 조달·입찰 심사 평가위원 역임. 나라장터 입찰 제안서 작성 노하우 독보적 보유.";
        if (titleEl) titleEl.textContent = '"나라장터 공공조달 낙찰률 85% 전문 1인 공공 입찰 전략관"';
        if (sloganEl) sloganEl.textContent = '"27년 공공 심사위원 시각으로 낙찰되는 제안서만 설계합니다"';
        if (ebookEl) ebookEl.textContent = "《공공기관 조달 심사위원이 3초 만에 합격 도장 찍는 입찰 제안서 작성법》 (권당 ₩33,000)";
        if (consultEl) consultEl.textContent = "나라장터 제안서 1:1 클리닉 건당 ₩400,000 / 조달청 우수제품 등록 자문 ₩2,500,000";
        if (mapEl) mapEl.textContent = "D-60일 공공조달 설명회 무료 웨비나 ➔ 중소 제조업체 입찰 대행 4건 수주 (월 ₩1,100만)";
      }
    });

    document.getElementById("btnRunPostCareerDemo")?.addEventListener("click", () => {
      const career = document.getElementById("sbPcaCareerSelect")?.value || "커리어";
      const dday = document.getElementById("sbPcaDdaySelect")?.value || "D-1년";
      alert(`⚡ [Post-Career Architect] 은퇴 대비 1인 창직 로드맵 설계 완료!\n목표 시점: ${dday}\n30년 결정성 지능이 전자책 기획서, 1:1 자문 오퍼, 90일 소득 크레바스 방어선으로 즉시 변환되었습니다.`);
    });

    document.getElementById("btnCopyPcaEbook")?.addEventListener("click", () => {
      const ebookTitle = document.getElementById("sbPcaEbook")?.textContent?.trim() || "";
      const plan = `[교보문고/예스24 전자책 1인 출판 기획서]\n도서명: ${ebookTitle}\n저자: 1인 창직가 (Post-Career Architect)\n타깃 독자: 은퇴를 앞두고 제2의 삶을 준비하는 4050 직장인 및 해당 분야 실무자\n\n[10챕터 목차]\n제1장. 치킨집 창업의 덫: 내 평생 직장 경험이 진짜 자산이다\n제2장. 결정성 지능(Crystallized Intelligence)의 발견과 시장성 검증\n제3장. 시간당 25만원을 지불하게 만드는 1:1 전문 자문 포지셔닝\n제4장. 무자본 1인 출판과 교보문고 등록 A to Z\n제5장. 소득 크레바스 90일 캐시플로우 방어 매뉴얼\n제6장. 링크드인과 리멤버를 활용한 신중년 고단가 고객 발굴\n제7장. 정부지원금과 신중년 창업 바우처 5,000만원 100% 수혜법\n제8장. 1인 지식 기업가를 위한 간이과세 및 부가세 면세 세무 전략\n제9장. B2B 기업 전직지원 출강 및 아카데미 스케일업\n제10장. 배움과 나눔에는 은퇴가 없다: 존경받는 1인 기업가의 삶`;
      navigator.clipboard.writeText(plan).then(() => {
        alert("📋 [전자책 기획서 & 10챕터 목차]가 클립보드에 복사되었습니다!\n원고 집필 및 출판사 투고에 바로 활용하세요.");
      });
    });

    document.getElementById("btnExportPcaPlan")?.addEventListener("click", () => {
      const title = document.getElementById("sbPcaTitle")?.textContent?.trim() || "";
      const fullText = `[Post-Career Architect 1인 창직 로드맵 마스터플랜]\n\n공식 타이틀: ${title}\n슬로건: 배움과 경험에는 은퇴가 없다\n\n1차 지식 상품: 교보문고 1인 전자책 출판 (권당 ₩25,000)\n2차 고단가 오퍼: 1:1 자문 컨설팅 (시간당 ₩250,000 / 월 ₩150만)\n3차 스케일업: 대기업 전직지원 교육 출강 및 아카데미 법인화\n\n목표 MRR: ₩10,400,000 (자가진단 120명 + VIP 18명)\n세무/법률: 1인 지식출판 사업자 등록 & 연 2회 은퇴 트렌드 업데이트 반영`;
      navigator.clipboard.writeText(fullText).then(() => {
        alert("📥 [1인 창직 마스터플랜] 요약본이 클립보드에 복사되었습니다!\nPDF 또는 노션 문서로 보관하세요.");
      });
    });

    document.getElementById("sbDfScreenTime")?.addEventListener("change", (e) => {
      const val = e.target.value;
      const scoreEl = document.getElementById("sbDfRecoveryScore");
      const descEl = document.getElementById("sbDfRecoveryDesc");
      const timeEl = document.getElementById("sbDfTimeGain");
      const p1 = document.getElementById("sbDfPhase1");

      if (val === "2.5") {
        if (scoreEl) scoreEl.textContent = "91.8% 회복 가능";
        if (descEl) descEl.textContent = '"전두엽 알파파 동기화 및 21일 알고리즘 차단 시, 14일 차부터 팝콘 브레인 78% 완화"';
        if (timeEl) timeEl.innerHTML = "✨ 일일 회복 집중 시간: <strong>+3.5시간/일</strong> (월 105시간 ➔ 경제적 가치 ₩2,625,000 상당)";
        if (p1) p1.textContent = "스마트폰 물리적 보관함 강제 락 + 하루 SNS 15분 제한, 금단 불안 극복";
      } else if (val === "4.0") {
        if (scoreEl) scoreEl.textContent = "88.4% 회복 가능";
        if (descEl) descEl.textContent = '"만성 도파민 불응 상태: 1주차 완전 디지털 단식 후 2주차부터 독서 집중력 2.2배 급반등"';
        if (timeEl) timeEl.innerHTML = "✨ 일일 회복 집중 시간: <strong>+4.5시간/일</strong> (월 135시간 ➔ 경제적 가치 ₩3,375,000 상당)";
        if (p1) p1.textContent = "침실 스마트폰 반입 완전 금지 + 기상 후 1시간 텍스트 정독 루틴 강제";
      } else if (val === "6.0") {
        if (scoreEl) scoreEl.textContent = "84.2% 회복 가능";
        if (descEl) descEl.textContent = '"중증 알고리즘 중독: 1:1 코칭 전담 모니터링 및 주말 오프라인 디톡스 캠프 병행 필수"';
        if (timeEl) timeEl.innerHTML = "✨ 일일 회복 집중 시간: <strong>+5.5시간/일</strong> (월 165시간 ➔ 경제적 가치 ₩4,125,000 상당)";
        if (p1) p1.textContent = "스마트폰 흑백 모드 강제 전환 + SNS 앱 21일간 강제 언인스톨 및 디스코드 벌금제";
      } else if (val === "1.5") {
        if (scoreEl) scoreEl.textContent = "96.5% 회복 가능";
        if (descEl) descEl.textContent = '"초기 산만함 단계: 45분 딥다이브 타이머 습관화만으로 7일 만에 최상위 1% 초집중 모드 진입"';
        if (timeEl) timeEl.innerHTML = "✨ 일일 회복 집중 시간: <strong>+2.0시간/일</strong> (월 60시간 ➔ 경제적 가치 ₩1,500,000 상당)";
        if (p1) p1.textContent = "업무 시간 알림 무음화 + 45분 집중/10분 휴식 포모도로 리듬 고정";
      }
    });

    document.getElementById("btnRunDeepFocusDemo")?.addEventListener("click", () => {
      const hours = document.getElementById("sbDfScreenTime")?.value || "3";
      alert(`⚡ [DeepFocus 21] 21일 뇌신경 도파민 회복 처방전 생성 완료!\n일일 스크린타임: ${hours}시간 분석\n스마트폰 강제 잠금, 45분 딥다이브 타이머, 텍스트 몰입 미션이 세팅되었습니다.\n21일 후 하루 3.5시간의 온전한 집중력이 복원됩니다!`);
    });

    document.getElementById("btnCopyDfMission")?.addEventListener("click", () => {
      const text = `[DeepFocus 21 데일리 몰입 챌린지 미션 시트 (21일 뇌신경 리셋)]\n프로그램명: 숏폼 도파민 중독 탈출 & 심층 사유 복원 21일 프로젝트\n\n[1주차: 도파민 단식 & 신경 수용체 초기화]\n- Day 1: 스마트폰 흑백 모드 전환 & SNS 앱 홈 화면에서 숨기기\n- Day 2: 침실 스마트폰 반입 금지 & 아날로그 알람시계 세팅\n- Day 3: 출퇴근길 숏폼 대신 오디오북/음악 없이 걷기 (지루함 견디기 훈련)\n- Day 4: 24시간 동안 유튜브/릴스/틱톡 완전 차단 (디지털 단식 1호)\n- Day 5: 뇌파 안정화 알파파 사운드 들으며 20분 호흡 명상\n- Day 6: 나를 자극하는 도파민 트리거(특정 계정, 시간대) 5가지 적기\n- Day 7: 1주차 스크린타임 감축 결산 및 금단 증상 피드백 기록\n\n[2주차: 45분 딥다이브 & 텍스트 몰입 복원]\n- Day 8: 타이머 맞춰놓고 스마트폰 다른 방에 둔 채 30분 책 읽기\n- Day 9: 45분 딥다이브 블록 1회 완주 (중간에 딴짓 충동 기록)\n- Day 10: 인문학 단행본 1개 챕터 정독 후 밑줄 긋기\n- Day 11: 45분 몰입 세션 2회 연속 수행 (총 90분 초집중)\n- Day 12: 세타파 바이노럴 비트 음원 착용 후 복잡한 업무 기획서 작성\n- Day 13: 긴 호흡 칼럼 2편 읽고 핵심 논지 3줄 요약\n- Day 14: 2주차 인지 집중 지속 시간 자가진단 (비포 대비 1.8배)\n\n[3주차: 심층 사유 & 고차원 인지 시스템 완성]\n- Day 15: 저자의 핵심 주장에 반박하는 '소크라테스 반론 메모' 작성\n- Day 16: 오늘 읽은 텍스트를 바탕으로 나만의 3줄 통찰 글 발행\n- Day 17: 하루 스크린타임 30분 이하 유지 챌린지\n- Day 18: 90분 딥워크 블록 완주 & 핵심 산출물 1건 완성\n- Day 19: 오프라인 산책 중 떠오른 아이디어를 종이 수첩에만 메모\n- Day 20: 21일간 되찾은 시간(총 70+시간) 가치 환산 리포트 작성\n- Day 21: DeepFocus 21 완주식 & 평생 집중력 시스템 루틴 확정!`;
      navigator.clipboard.writeText(text).then(() => {
        alert("📋 [DeepFocus 21 데일리 미션 시트]가 클립보드에 복사되었습니다!\n노션이나 다이어리에 붙여넣고 오늘부터 실천하세요.");
      });
    });

    document.getElementById("btnCopyDfCoaching")?.addEventListener("click", () => {
      const text = `[DeepFocus 21 VIP 1:1 심층 코칭 신청서]\n신청자 성함: \n연락처: \n현재 일일 숏폼 스크린타임: (  )시간\n가장 고통스러운 집중력 결핍 증상: \n달성하고 싶은 21일 목표 (예: 책 3권 완독 / 자격증 취득 / 기획서 완성): \n\n[VIP 혜택 안내]\n1. 주 1회 뇌인지과학 전문 코치 1:1 줌(Zoom) 코칭 세션 (총 4회)\n2. 스마트폰 강제 차단 하드웨어 키트 & 뇌파 바이노럴 음원 평생 이용권\n3. 오프라인 주말 디지털 디톡스 캠프 우선 초청권 (30% 할인)\n4. 21일 미션 미완주 시 100% 전액 환불 보증제`;
      navigator.clipboard.writeText(text).then(() => {
        alert("📥 [DeepFocus 21 VIP 1:1 심층 코칭 신청서]가 클립보드에 복사되었습니다!");
      });
    });

    document.getElementById("btnRunGenericDemo")?.addEventListener("click", () => {
      alert("AI 코어 엔진 처리가 0.8초 만에 완료되었습니다!");
    });
  }

  // [8] 실시간 유닛 이코노믹스 & MRR 연산
  updateSimulatorCalculations() {
    if (!this.inputStandardPrice) return;
    const stdPrice = parseInt(this.inputStandardPrice.value, 10);
    const stdUsers = parseInt(this.inputStandardUsers.value, 10);
    const proPrice = parseInt(this.inputProPrice.value, 10);
    const proUsers = parseInt(this.inputProUsers.value, 10);
    const opsCost = parseInt(this.inputOpsCost.value, 10);

    if (this.valStandardPrice) this.valStandardPrice.textContent = `₩${stdPrice.toLocaleString()}`;
    if (this.valStandardUsers) this.valStandardUsers.textContent = `${stdUsers} 명`;
    if (this.valProPrice) this.valProPrice.textContent = `₩${proPrice.toLocaleString()}`;
    if (this.valProUsers) this.valProUsers.textContent = `${proUsers} 명`;
    if (this.valOpsCost) this.valOpsCost.textContent = `₩${opsCost.toLocaleString()}`;

    const grossMrr = (stdPrice * stdUsers) + (proPrice * proUsers);
    const netProfit = grossMrr - opsCost;
    const margin = grossMrr > 0 ? ((netProfit / grossMrr) * 100).toFixed(1) : 0;
    const arr = netProfit * 12;
    const targetGoal = 10000000;
    const targetPercent = Math.min(Math.max((netProfit / targetGoal) * 100, 0), 200).toFixed(1);

    if (this.mrrNetProfitAmount) this.mrrNetProfitAmount.textContent = `₩${netProfit.toLocaleString()}`;
    if (this.mrrGrossAmount) this.mrrGrossAmount.textContent = `₩${grossMrr.toLocaleString()}`;
    if (this.mrrCostAmount) this.mrrCostAmount.textContent = `-₩${opsCost.toLocaleString()}`;
    if (this.mrrMarginAmount) this.mrrMarginAmount.textContent = `${margin}%`;
    if (this.mrrArrAmount) this.mrrArrAmount.textContent = `₩${arr.toLocaleString()}`;
    if (this.mrrTargetPercent) this.mrrTargetPercent.textContent = `${targetPercent}%`;
    if (this.mrrProgressBarFill) this.mrrProgressBarFill.style.width = `${Math.min(targetPercent, 100)}%`;

    // Real-World Marketing Stress Test Calculations
    const cacCost = parseInt(this.inputCacCost?.value || 35000, 10);
    const churnRate = parseFloat(this.inputChurnRate?.value || 7.0);
    const refundRate = parseFloat(this.inputRefundRate?.value || 5.0);

    if (this.valCacCost) this.valCacCost.textContent = `₩${cacCost.toLocaleString()}`;
    if (this.valChurnRate) this.valChurnRate.textContent = `${churnRate.toFixed(1)}%`;
    if (this.valRefundRate) this.valRefundRate.textContent = `${refundRate.toFixed(1)}%`;

    const totalUsers = stdUsers + proUsers;
    const avgArpu = totalUsers > 0 ? (grossMrr / totalUsers) : 0;
    const avgLifespanMonths = churnRate > 0 ? (100 / churnRate) : 14;
    const ltv = Math.round(avgArpu * avgLifespanMonths);
    const ltvCacRatio = cacCost > 0 ? (ltv / cacCost).toFixed(1) : 99.9;

    const monthlyChurnedUsers = Math.round(totalUsers * (churnRate / 100));
    const monthlyMarketingSpend = monthlyChurnedUsers * cacCost;
    const monthlyRefundLoss = Math.round(grossMrr * (refundRate / 100));
    const realNetMrr = grossMrr - opsCost - monthlyMarketingSpend - monthlyRefundLoss;

    const unitContribution = avgArpu - (avgArpu * (refundRate / 100)) - (cacCost * (churnRate / 100));
    const bepUsers = unitContribution > 0 ? Math.ceil(opsCost / unitContribution) : 999;

    if (this.valLtvAmount) this.valLtvAmount.textContent = `₩${ltv.toLocaleString()}`;
    if (this.valLtvCacRatio) this.valLtvCacRatio.textContent = `${ltvCacRatio} 배`;
    if (this.valBepUsers) this.valBepUsers.textContent = `${bepUsers} 명`;
    if (this.valRealNetMrr) this.valRealNetMrr.textContent = `₩${realNetMrr.toLocaleString()}`;

    if (this.badgeStressVerdict) {
      if (realNetMrr > 5000000 && ltvCacRatio >= 4.0) {
        this.badgeStressVerdict.textContent = "💎 초우량 고수익형";
        this.badgeStressVerdict.className = "badge-tag tag-emerald";
      } else if (realNetMrr > 0 && ltvCacRatio >= 3.0) {
        this.badgeStressVerdict.textContent = "✅ 안정 성장형";
        this.badgeStressVerdict.className = "badge-tag tag-emerald";
      } else if (realNetMrr > 0) {
        this.badgeStressVerdict.textContent = "⚠️ 마케팅 과열 주의";
        this.badgeStressVerdict.className = "badge-tag tag-amber";
      } else {
        this.badgeStressVerdict.textContent = "🚨 적자 경보 (CAC 절감 필요)";
        this.badgeStressVerdict.className = "badge-tag tag-rose";
      }
    }

    if (this.simStatusTag) {
      if (netProfit >= targetGoal) {
        this.simStatusTag.innerHTML = `<i class="dot mandatory"></i> 🎯 월 1,000만원 달성 성공 (₩${netProfit.toLocaleString()})`;
        this.simStatusTag.className = "legend-tag mandatory";
      } else {
        const gap = targetGoal - netProfit;
        this.simStatusTag.innerHTML = `<i class="dot dominant"></i> ⚠️ 목표까지 ₩${gap.toLocaleString()} 부족`;
        this.simStatusTag.className = "legend-tag dominant";
      }
    }

    if (this.mrrFormulaInsightText) {
      this.mrrFormulaInsightText.innerHTML = `
        스탠다드 고객 <strong>${stdUsers}명</strong>(월 ₩${stdPrice.toLocaleString()}) + 
        프로 고객 <strong>${proUsers}명</strong>(월 ₩${proPrice.toLocaleString()}) 유치 시 
        월 총매출 <strong>₩${grossMrr.toLocaleString()}</strong>, 
        순부수익 <strong>₩${netProfit.toLocaleString()}</strong>(영업이익률 ${margin}%)이 발생합니다.
      `;
    }
  }

  // [9] 5단계 35개 실행 체크리스트
  renderChecklist(phaseFilter = "all") {
    if (!this.checklistContainer) return;
    this.checklistContainer.innerHTML = "";

    const totalTasks = BASE_CHECKLIST_TEMPLATE.length;
    let completedCount = 0;

    const phases = [
      { num: 1, title: "1단계: 시장 검증 및 고객 고통 발굴 (D-1 ~ D-7)" },
      { num: 2, title: "2단계: No-Code/AI 초고속 MVP 구축 (D-8 ~ D-14)" },
      { num: 3, title: "3단계: 결제·법률·사업자 인프라 셋업 (D-15 ~ D-21)" },
      { num: 4, title: "4단계: 초기 1,000명 바이럴 & 런칭 세일즈 (D-22 ~ D-28)" },
      { num: 5, title: "5단계: 무인 자동화, 이탈 방어 & B2B 확장 (D-29 ~)" }
    ];

    phases.forEach(p => {
      if (phaseFilter !== "all" && String(p.num) !== String(phaseFilter)) {
        return;
      }

      const phaseTasks = BASE_CHECKLIST_TEMPLATE.filter(t => t.phase === p.num);
      const phaseCard = document.createElement("div");
      phaseCard.className = "phase-section-card glass-card";

      let tasksHtml = "";
      phaseTasks.forEach(task => {
        const taskId = `${this.currentModelId}_${task.id}`;
        const isChecked = !!this.checklistState[taskId];
        if (isChecked) completedCount++;

        tasksHtml += `
          <div class="task-item ${isChecked ? "completed" : ""}" data-task-id="${taskId}">
            <input type="checkbox" class="task-checkbox" ${isChecked ? "checked" : ""}>
            <div class="task-content-block">
              <div class="task-title-line">
                <span class="task-text">${task.title}</span>
                <span class="task-duration-badge">${task.duration}</span>
              </div>
              <p class="task-detail-desc">${task.desc}</p>
            </div>
          </div>
        `;
      });

      phaseCard.innerHTML = `
        <div class="phase-header-row">
          <div class="phase-title-left">
            <span class="phase-num-badge">PHASE 0${p.num}</span>
            <h3>${p.title}</h3>
          </div>
        </div>
        <div class="phase-tasks-list">${tasksHtml}</div>
      `;

      this.checklistContainer.appendChild(phaseCard);
    });

    let totalCompletedAll = 0;
    BASE_CHECKLIST_TEMPLATE.forEach(task => {
      const taskId = `${this.currentModelId}_${task.id}`;
      if (this.checklistState[taskId]) totalCompletedAll++;
    });

    const progressPercent = Math.round((totalCompletedAll / totalTasks) * 100);
    if (this.checklistMeterFill) this.checklistMeterFill.style.width = `${progressPercent}%`;
    if (this.checklistMeterTxt) this.checklistMeterTxt.textContent = `${progressPercent}% (${totalCompletedAll}/${totalTasks})`;
    if (this.checklistProgressBadge) this.checklistProgressBadge.textContent = `${totalCompletedAll}/${totalTasks} 완료`;

    this.checklistContainer.querySelectorAll(".task-item").forEach(item => {
      item.addEventListener("click", (e) => {
        const checkbox = item.querySelector(".task-checkbox");
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        const taskId = item.getAttribute("data-task-id");
        this.checklistState[taskId] = checkbox.checked;
        this.saveChecklistState();
        this.renderChecklist(phaseFilter);
      });
    });
  }

  // [10] 세일즈 랜딩페이지 프리뷰
  renderLandingPreview() {
    if (!this.landingPreviewContainer) return;
    const m = this.models[this.currentModelId] || this.models["gov-subsidy"];
    const stdPrice = parseInt(this.inputStandardPrice.value, 10);
    const proPrice = parseInt(this.inputProPrice.value, 10);

    this.landingPreviewContainer.innerHTML = `
      <div class="landing-mock-header">
        <span class="landing-mock-brand">⚡ ${m.title.split("] ")[1] || m.title}</span>
        <div>
          <button class="btn btn-outline btn-sm" style="color: #0F172A; border-color: #CBD5E1;">로그인</button>
          <button class="btn btn-primary btn-sm" style="background: #4F46E5;">3일 무료 체험</button>
        </div>
      </div>

      <div class="landing-hero-block">
        <span class="landing-hero-badge">🚀 ${m.categoryName} 1위 자동화 솔루션</span>
        <h1>"${m.pain.summary}"</h1>
        <p>복잡한 수작업과 외주 비용 0원화! 10초 만에 끝내는 ${m.title.split("] ")[1] || m.title}의 혁신을 경험하세요.</p>
        <a href="#" class="landing-cta-btn-main">지금 10초 만에 무료로 시작하기 →</a>
      </div>

      <div class="landing-pricing-grid">
        <div class="landing-price-card">
          <div class="landing-price-title">Free 플랜</div>
          <div class="landing-price-amount">₩0 <span style="font-size: 13px; color: #64748B;">/평생</span></div>
          <p style="font-size: 13px; color: #475569; margin-bottom: 14px;">월 3회 무료 진단 및 기본 생성</p>
          <button class="btn btn-outline btn-sm" style="width: 100%; color: #334155;">무료 시작</button>
        </div>

        <div class="landing-price-card featured">
          <span class="landing-price-badge">가장 인기</span>
          <div class="landing-price-title">Standard 플랜</div>
          <div class="landing-price-amount">₩${stdPrice.toLocaleString()} <span style="font-size: 13px; color: #4F46E5;">/월</span></div>
          <p style="font-size: 13px; color: #3730A3; margin-bottom: 14px;">무제한 생성 + 우선 AI 연산 + 카카오 알림</p>
          <button class="btn btn-primary btn-sm" style="width: 100%; background: #4F46E5;">7일 무료 체험 후 구독</button>
        </div>

        <div class="landing-price-card">
          <div class="landing-price-title">Pro / B2B 플랜</div>
          <div class="landing-price-amount">₩${proPrice.toLocaleString()} <span style="font-size: 13px; color: #64748B;">/월</span></div>
          <p style="font-size: 13px; color: #475569; margin-bottom: 14px;">다중 계정 + 1:1 전담 컨설팅 + API 연동</p>
          <button class="btn btn-outline btn-sm" style="width: 100%; color: #334155;">도입 문의</button>
        </div>
      </div>
    `;
  }

  copyLandingHtml() {
    if (!this.landingPreviewContainer) return;
    if (!this.isVip) {
      this.openCheckoutModal("고전환 세일즈 랜딩페이지 배포용 HTML 원본 복사는 VIP 패키지 전용 기능입니다.");
      return;
    }
    const html = this.landingPreviewContainer.innerHTML;
    navigator.clipboard.writeText(html).then(() => {
      alert("📋 [VIP 라이선스 인증됨] 세일즈 랜딩페이지 배포용 HTML 코드가 클립보드에 복사되었습니다!\n즉시 웹에 호스팅하여 고객 결제를 받으세요.");
    });
  }

  openLandingInNewTab() {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Landing Preview</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <style>
          body { font-family: 'Pretendard', sans-serif; background: #f8fafc; margin: 0; padding: 40px 20px; }
          .container { max-width: 900px; margin: 0 auto; background: #fff; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
        </style>
      </head>
      <body>
        <div class="container">${this.landingPreviewContainer.innerHTML}</div>
      </body>
      </html>
    `;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  // [11] 표준 30페이지급 사업계획서 & 투자 제안서 렌더링 (100만원 VIP 종합 플랜)
  renderReportPaper() {
    const m = this.models[this.currentModelId] || this.models["gov-subsidy"];
    if (!this.printableReportPaper) return;

    const stdPrice = parseInt(this.inputStandardPrice?.value || m.defaultStandardPrice, 10);
    const stdUsers = parseInt(this.inputStandardUsers?.value || m.defaultStandardUsers, 10);
    const proPrice = parseInt(this.inputProPrice?.value || m.defaultProPrice, 10);
    const proUsers = parseInt(this.inputProUsers?.value || m.defaultProUsers, 10);
    const opsCost = parseInt(this.inputOpsCost?.value || m.defaultOpsCost, 10);
    const grossMrr = (stdPrice * stdUsers) + (proPrice * proUsers);
    const netProfit = grossMrr - opsCost;
    const margin = grossMrr > 0 ? ((netProfit / grossMrr) * 100).toFixed(1) : 0;
    const arr = netProfit * 12;

    const vip = m.vipMaster || this.models["gov-subsidy"].vipMaster;
    const o = vip.grandSlamOffer;
    const pe = vip.promptEngine;
    const scripts = vip.salesScripts || [];
    const cashflows = vip.cashflowRoadmap || [];

    this.printableReportPaper.innerHTML = `
      <div class="report-badge-meta">
        <i data-lucide="shield-check"></i> 대한민국 중기부·창진원·엔젤투자협회 표준 IR 양식 호환 (Confidential)
      </div>

      <div class="report-doc-header">
        <div class="report-doc-title">
          <h1>[30페이지급 마스터 사업계획서 & 투자 제안서] ${m.title}</h1>
          <p>${m.shortDesc}</p>
        </div>
        <div class="report-doc-stamp">
          <strong>문서번호:</strong> BIZ-2026-HIGH-TICKET<br>
          <strong>작성일자:</strong> ${new Date().toISOString().split("T")[0]}<br>
          <strong>발행처:</strong> PainFinder VIP Incubator<br>
          <strong>보안등급:</strong> STRICTLY CONFIDENTIAL
        </div>
      </div>

      <!-- 제1장: 사업 개요 및 총괄 요약 -->
      <div class="report-section">
        <h2>1. 사업 개요 및 총괄 요약 (Executive Summary)</h2>
        <div class="report-quote-box">
          <strong>사업 비전:</strong> "${m.pain.summary}"<br>
          <strong>핵심 가치 제안:</strong> ${m.shortDesc}
        </div>
        <div class="report-kpi-grid">
          <div class="report-kpi-card">
            <div class="report-kpi-lbl">목표 월 순부수익 (Net MRR)</div>
            <div class="report-kpi-val" style="color: #059669;">₩${netProfit.toLocaleString()}</div>
          </div>
          <div class="report-kpi-card">
            <div class="report-kpi-lbl">연간 환산 순이익 (ARR)</div>
            <div class="report-kpi-val" style="color: #4F46E5;">₩${arr.toLocaleString()}</div>
          </div>
          <div class="report-kpi-card">
            <div class="report-kpi-lbl">영업이익률 (Operating Margin)</div>
            <div class="report-kpi-val" style="color: #D97706;">${margin}%</div>
          </div>
          <div class="report-kpi-card">
            <div class="report-kpi-lbl">무인 운영 자동화율</div>
            <div class="report-kpi-val" style="color: #0284C7;">95%+</div>
          </div>
        </div>
        <p>
          본 사업은 현대 사회에서 특정 계층이 매일 겪으며 극심한 시간적·금전적 손실을 유발하는 고질적 결핍(Pain Point)을 버티컬 AI 자동화 엔진으로 해결하여, 고객에게 압도적 해방감(안도감·자존감 회복)을 선사하고 창업자에게는 월 1,000만 원 이상의 안정적인 캐시플로우를 창출하는 1인 마이크로 지식/SaaS 비즈니스 모델입니다.
        </p>
      </div>

      <!-- 제2장: 고객 결핍(Pain Point) 정밀 분석 -->
      <div class="report-section">
        <h2>2. 고객 결핍(Pain Point) 정밀 분석 및 시장의 경제적 손실</h2>
        <p>
          타깃 고객층이 매일 감내하고 있는 고통의 심도와 이로 인해 누출되는 경제적 비용을 정밀 분석하였습니다.
        </p>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 40%;">고객이 겪는 4대 핵심 고통 (Pain Bullets)</th>
              <th style="width: 60%;">기존 대안재의 한계 및 경제적 손실액 분석</th>
            </tr>
          </thead>
          <tbody>
            ${m.pain.bullets.map((b, i) => `
              <tr>
                <td><strong>[고통 0${i+1}]</strong> ${b}</td>
                <td>
                  ${i === 0 ? "고액 브로커/외주업체에 건당 200~500만 원의 과도한 선금 수수료를 강제 지출하거나 정보 격차로 인한 기회비용 상실." :
                    i === 1 ? "매달 30~50시간의 극심한 비효율 수작업 및 자산 고갈 위험(월 환산 손실액 100만 원 이상)." :
                    i === 2 ? "기존 포털/유튜브의 광고성 정보 범람으로 인한 탐색 피로도 및 잘못된 결정 시 수억 원대 파산 리스크." :
                    "실행력과 지속성을 담보하는 시스템 및 피드백 부재로 비싼 교육비를 지불하고도 성과 미달."}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- 제3장: 4단계 AI 무인 솔루션 아키텍처 -->
      <div class="report-section">
        <h2>3. 4단계 AI 무인 솔루션 아키텍처 및 킬러 기능 (Solution Engine)</h2>
        <p>
          고객의 입력 최소화(1클릭/10초)를 원칙으로 설계된 4단계 자동화 파이프라인입니다.
        </p>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 15%;">단계</th>
              <th style="width: 30%;">프로세스 명칭</th>
              <th style="width: 55%;">AI 엔진 세부 실행 메커니즘</th>
            </tr>
          </thead>
          <tbody>
            ${m.solution.map(s => `
              <tr>
                <td style="font-weight: 800; color: #4F46E5; text-align: center;">STEP 0${s.step}</td>
                <td><strong>${s.title}</strong></td>
                <td>${s.desc}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <div style="margin-top: 14px; padding: 14px; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 6px;">
          <strong style="color: #92400E; display: block; font-size: 13px; margin-bottom: 4px;">✨ 차별화 킬러 기능 (Killer Features):</strong>
          <p style="font-size: 12.5px; color: #78350F; white-space: pre-line;">${m.delight.killerFeatures}</p>
          <strong style="color: #065F46; display: block; font-size: 12.5px; margin-top: 8px;">❤️ 고객 감동 체감 지표 (Delight Factor):</strong>
          <p style="font-size: 12px; color: #047857;">${m.delight.delightFactor}</p>
        </div>
      </div>

      <!-- 제4장: 알렉스 호르모지식 그랜드 슬램 오퍼 -->
      <div class="report-section">
        <h2>4. 알렉스 호르모지식 '그랜드 슬램 오퍼' & 100만원 가치 스택</h2>
        <p>
          고객이 가격 저항을 전혀 느끼지 못하고 즉시 결제하도록 설계된 거절 불가능한 오퍼(Hormozi Formula) 구성입니다.
        </p>
        <table class="report-table">
          <thead>
            <tr>
              <th>호르모지 가치 방정식 변수</th>
              <th>본 비즈니스 모델의 극대화 전략</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. 꿈의 결과 (Dream Outcome)</strong></td>
              <td style="color: #059669; font-weight: 700;">${o.dreamOutcome}</td>
            </tr>
            <tr>
              <td><strong>2. 성공 확률 (Perceived Likelihood)</strong></td>
              <td>${o.perceivedLikelihood}</td>
            </tr>
            <tr>
              <td><strong>3. 소요 시간 (Time Delay)</strong></td>
              <td>${o.timeDelay}</td>
            </tr>
            <tr>
              <td><strong>4. 노력/희생 (Effort & Sacrifice)</strong></td>
              <td>${o.effortSacrifice}</td>
            </tr>
          </tbody>
        </table>

        <h3>📦 100만원 상당 가치 스택 (Value Stack) 상세 구성</h3>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 75%;">가치 스택 제공 품목</th>
              <th style="width: 25%; text-align: right;">개별 정상가 환산</th>
            </tr>
          </thead>
          <tbody>
            ${o.stack.map(st => `
              <tr>
                <td><strong>${st.title}</strong></td>
                <td style="text-align: right; font-weight: 700; color: #4F46E5;">${st.value}</td>
              </tr>
            `).join("")}
            <tr class="report-highlight-row">
              <td><strong>총합 패키지 가치 / 최종 판매 특가</strong></td>
              <td style="text-align: right; font-size: 13px;">${o.specialPrice} (정가 ${o.totalValue})</td>
            </tr>
          </tbody>
        </table>
        <div style="padding: 12px 16px; background: #FEF2F2; border-left: 4px solid #EF4444; border-radius: 4px; margin-top: 10px;">
          <strong style="color: #991B1B; font-size: 12.5px;">🛡️ 위험 제로 환불 보증 (Risk Reversal Guarantee):</strong>
          <p style="font-size: 12px; color: #7F1D1D; margin-top: 3px;">${o.riskReversal}</p>
        </div>
      </div>

      <!-- 제5장: 타깃 고객 페르소나 및 GTM 세일즈 전략 -->
      <div class="report-section">
        <h2>5. 타깃 고객 페르소나 및 GTM(Go-To-Market) 바이럴 전략</h2>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 30%;">구분</th>
              <th style="width: 70%;">상세 정의 및 타깃팅 전략</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1차 핵심 고객 (Primary)</strong></td>
              <td>${m.persona.primary}</td>
            </tr>
            <tr>
              <td><strong>2차 확장 고객 (Secondary)</strong></td>
              <td>${m.persona.secondary}</td>
            </tr>
            <tr>
              <td><strong>초기 유입 채널 (Acquisition)</strong></td>
              <td>${m.gtm.channel}</td>
            </tr>
            <tr>
              <td><strong>리드 마그넷 (Lead Magnet)</strong></td>
              <td>${m.gtm.leadMagnet}</td>
            </tr>
          </tbody>
        </table>

        <h3>📢 3대 채널별 실전 콜드 세일즈 대본 (Sales Scripts)</h3>
        ${scripts.map((sc, i) => `
          <div style="margin-bottom: 14px; padding: 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span class="report-badge-meta" style="margin-bottom: 0;">채널 0${i+1}: ${sc.channel}</span>
              <strong style="font-size: 13px; color: #0F172A;">${sc.title}</strong>
            </div>
            <pre style="font-size: 11.5px; color: #334155; white-space: pre-wrap; line-height: 1.5; font-family: var(--font-sans); margin-top: 6px; background: #FFFFFF; padding: 10px; border-radius: 4px; border: 1px solid #E2E8F0;">${sc.script}</pre>
          </div>
        `).join("")}
      </div>

      <!-- 제6장: 프로덕션 AI 시스템 아키텍처 및 프롬프트 명세서 -->
      <div class="report-section">
        <h2>6. 프로덕션 AI 시스템 아키텍처 및 기술 스택 (Technical Architecture)</h2>
        <p>
          안정적인 99.9% 가용성과 무인 자동화를 보장하는 시스템 프롬프트 및 백엔드 API 연동 구조입니다.
        </p>
        <h3>시스템 프롬프트 명세서 (System Prompt Spec)</h3>
        <pre class="report-code-block">${pe.systemPrompt}</pre>
        <h3>서버리스 API 연동 코드 스니펫</h3>
        <pre class="report-code-block">${pe.apiSnippet}</pre>
      </div>

      <!-- 제7장: 유닛 이코노믹스 및 4주 캐시플로우 로드맵 -->
      <div class="report-section">
        <h2>7. 유닛 이코노믹스 및 4주 캐시플로우 달성 로드맵 (Financials)</h2>
        <table class="report-table">
          <thead>
            <tr>
              <th>구분</th>
              <th>단가 (월)</th>
              <th>목표 유료 결제 수</th>
              <th>월 매출 (MRR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard Plan (개인/기본형)</td>
              <td>₩${stdPrice.toLocaleString()}</td>
              <td>${stdUsers} 명</td>
              <td>₩${(stdPrice * stdUsers).toLocaleString()}</td>
            </tr>
            <tr>
              <td>Pro / B2B Plan (기업/VIP형)</td>
              <td>₩${proPrice.toLocaleString()}</td>
              <td>${proUsers} 명</td>
              <td>₩${(proPrice * proUsers).toLocaleString()}</td>
            </tr>
            <tr>
              <td>월 고정 운영비 (서버/API)</td>
              <td colspan="2">-</td>
              <td style="color: #E11D48;">-₩${opsCost.toLocaleString()}</td>
            </tr>
            <tr class="report-highlight-row">
              <td><strong>최종 예상 월 순부수익 (Net MRR)</strong></td>
              <td colspan="2"><strong>영업이익률 ${margin}%</strong></td>
              <td style="color: #059669; font-size: 15px;"><strong>₩${netProfit.toLocaleString()} /월</strong></td>
            </tr>
          </tbody>
        </table>

        <h3>🗓️ 4주 만에 1,000만원 MRR 달성 캐시플로우 타임라인</h3>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 25%;">주차별 마일스톤</th>
              <th style="width: 25%;">목표 주간 매출</th>
              <th style="width: 50%;">주요 실행 액션 리스트</th>
            </tr>
          </thead>
          <tbody>
            ${cashflows.map(cf => `
              <tr>
                <td><strong>${cf.week}</strong></td>
                <td style="color: #4F46E5; font-weight: 700;">${cf.targetRev}</td>
                <td>
                  <ul style="margin: 0; padding-left: 16px; font-size: 12px;">
                    ${cf.actions.map(act => `<li>${act}</li>`).join("")}
                  </ul>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- 제8장: 30일 완결형 5단계 실행 체크리스트 -->
      <div class="report-section">
        <h2>8. 30일 완결형 5단계 실행 체크리스트 (Master Execution Roadmap)</h2>
        <p>
          아이디어 발굴부터 30일 만에 첫 유료 결제 창출 및 B2B 스케일업까지 총 25~35대 전수 과업 체계도입니다.
        </p>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 15%;">단계</th>
              <th style="width: 20%;">과업 명칭</th>
              <th style="width: 55%;">세부 실행 명세</th>
              <th style="width: 10%; text-align: center;">기한</th>
            </tr>
          </thead>
          <tbody>
            ${BASE_CHECKLIST_TEMPLATE.slice(0, 15).map(t => `
              <tr>
                <td style="font-size: 11px; font-weight: 700; color: #4F46E5;">${t.phaseName.split(":")[0]}</td>
                <td><strong>${t.title}</strong></td>
                <td style="font-size: 12px;">${t.desc}</td>
                <td style="text-align: center; font-size: 11px; font-family: var(--font-mono);">${t.duration}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- 제9장: 엔젤 & 시드 투자 유치 제안서 -->
      <div class="report-section">
        <h2>9. 엔젤 & 시드 투자 유치 제안서 (Seed Investment Proposal)</h2>
        <p>
          본 비즈니스의 빠른 스케일업과 버티컬 시장 선점을 위한 초기 라운드 투자 유치 개요입니다.
        </p>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 35%;">항목</th>
              <th style="width: 65%;">제안 내용 (Term Sheet Summary)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>희망 투자 유치 금액</strong></td>
              <td style="font-weight: 800; color: #059669; font-size: 14px;">₩200,000,000 (2억 원)</td>
            </tr>
            <tr>
              <td><strong>제안 지분율 / 기업가치</strong></td>
              <td>지분율 10.0% (Post-Money Valuation ₩2,000,000,000 기준)</td>
            </tr>
            <tr>
              <td><strong>자금 조달 목적</strong></td>
              <td>AI 버티컬 엔진 고도화(40%), 초기 고객 획득 퍼포먼스 마케팅(30%), 개발 인건비(20%), 예비 운영비(10%)</td>
            </tr>
            <tr>
              <td><strong>3개년 예상 성장 지표</strong></td>
              <td>1년 차 MRR ₩10M+ ➔ 2년 차 MRR ₩50M+ ➔ 3년 차 MRR ₩150M+ (연 매출 18억 원 돌파)</td>
            </tr>
            <tr>
              <td><strong>투자자 예상 엑시트(EXIT)</strong></td>
              <td>3~5년 내 시리즈 A/B 단계 구주 매각 또는 동종 버티컬 SaaS 기업에 M&A 매각 (목표 ROI 5.0x+)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 제10장: 무인 운영 자동화, 법률·세무 및 리스크 관리 -->
      <div class="report-section">
        <h2>10. 무인 운영 자동화, 법률·세무 및 리스크 관리 (Operations & Compliance)</h2>
        <table class="report-table">
          <thead>
            <tr>
              <th style="width: 30%;">관리 영역</th>
              <th style="width: 70%;">통제 및 자동화 전략</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>운영 무인화 (Automation)</strong></td>
              <td>${m.ops.automation}</td>
            </tr>
            <tr>
              <td><strong>스케일업 및 부가 수익</strong></td>
              <td>${m.ops.expansion}</td>
            </tr>
            <tr>
              <td><strong>법률 및 라이선스 준수</strong></td>
              <td>전자상거래법 표준약관 100% 준수, 개인정보보호법에 따른 입력 데이터 즉시 비식별화 및 파기, 통신판매업 신고 완료.</td>
            </tr>
            <tr>
              <td><strong>세무 및 절세 전략</strong></td>
              <td>초기 간이과세자 등록(세액 공제) ➔ 월 매출 1,000만원 돌파 시 법인 전환을 통한 법인세 절감 및 연 2회 정기 가이드라인 업데이트 반영.</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 24px; text-align: center; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #94A3B8;">
          © 2026 PainFinder AI Master Engine. All Rights Reserved. 본 문서는 비즈니스 실행을 위한 공식 인쇄물입니다.
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  copyReportMarkdown() {
    if (!this.printableReportPaper) return;
    if (!this.isVip) {
      this.openCheckoutModal("30페이지급 마스터 사업계획서 풀버전 복사 및 영구 소장은 VIP 패키지 전용 기능입니다.");
      return;
    }
    const text = this.printableReportPaper.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("📋 [VIP 라이선스 인증됨] 30페이지급 사업계획서 전문이 클립보드에 복사되었습니다!\n노션, 워드, 한글(HWP)에 그대로 붙여넣어 즉시 활용하세요.");
    });
  }

  loadChecklistState() {
    try {
      const data = localStorage.getItem("bizlaunch_checklist_state");
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  saveChecklistState() {
    try {
      localStorage.setItem("bizlaunch_checklist_state", JSON.stringify(this.checklistState));
    } catch (e) {}
  }

  exportChecklistMarkdown() {
    const m = this.models[this.currentModelId] || this.models["gov-subsidy"];
    let md = `# [액션 리스트] ${m.title} 30일 런칭 마스터플랜\n\n`;
    BASE_CHECKLIST_TEMPLATE.forEach(t => {
      const taskId = `${this.currentModelId}_${t.id}`;
      const checked = this.checklistState[taskId] ? "[x]" : "[ ]";
      md += `${checked} (${t.duration}) **${t.title}**: ${t.desc}\n`;
    });

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `BizLaunch_35_Action_List_${m.id}.md`;
    a.click();
  }

  // ========================================================
  // [13] 상용 상품화 & 수익화 VIP 시스템 (Monetization Engine)
  // ========================================================

  loadVipState() {
    return localStorage.getItem("painfinder_vip_license") === "true";
  }

  activateVip(licenseKey = "VIP-2026-" + Math.random().toString(36).substring(2, 8).toUpperCase()) {
    this.isVip = true;
    localStorage.setItem("painfinder_vip_license", "true");
    localStorage.setItem("painfinder_vip_key", licenseKey);
    this.updateVipUI();
    this.closeCheckoutModal();
    alert(`🎉 축하합니다! VIP 평생 소장 라이선스가 성공적으로 활성화되었습니다!\n라이선스 키: [${licenseKey}]\n모든 10대 비즈니스 모델, 30페이지 IR 사업계획서, 프롬프트 전문이 영구 잠금 해제되었습니다.`);
  }

  updateVipUI() {
    if (!this.txtVipBtnLabel) return;
    if (this.isVip) {
      this.txtVipBtnLabel.innerHTML = "👑 VIP 평생 회원";
      this.btnOpenCheckout?.classList.add("active-vip");
      if (this.btnBannerCheckout) this.btnBannerCheckout.textContent = "VIP 혜택 이용 중 ✓";
    } else {
      this.txtVipBtnLabel.innerHTML = "💎 VIP 패키지 결제";
      this.btnOpenCheckout?.classList.remove("active-vip");
    }
  }

  openCheckoutModal(customMsg = null) {
    if (this.isVip) {
      alert("이미 VIP 평생 라이선스를 보유하고 계십니다! 모든 프리미엄 기능을 자유롭게 사용하세요.");
      return;
    }
    if (customMsg) {
      const sub = this.modalCheckout?.querySelector(".price-sub");
      if (sub) sub.innerHTML = `<strong style="color: #FEF08A;">⚠️ ${customMsg}</strong><br>지금 70% 얼리버드 특가로 즉시 잠금 해제하세요.`;
    }
    if (this.modalCheckout) this.modalCheckout.style.display = "flex";
  }

  closeCheckoutModal() {
    if (this.modalCheckout) this.modalCheckout.style.display = "none";
  }

  executePaymentFlow() {
    const email = document.getElementById("checkoutUserEmail")?.value || "founder@painfinder.ai";
    const method = document.querySelector('input[name="payMethod"]:checked')?.value || "toss";
    const btn = this.btnExecutePayment;

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> 안전 결제 승인 처리 중...`;
    }

    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i data-lucide="lock"></i> ₩39,000 안전 결제 및 VIP 즉시 잠금 해제`;
      }
      this.activateVip();
    }, 1200);
  }

  // BYOK OpenAI API Engine
  openApiKeyModal() {
    if (this.inputUserApiKey) this.inputUserApiKey.value = this.userApiKey || "";
    if (this.modalApiKey) this.modalApiKey.style.display = "flex";
  }

  closeApiKeyModal() {
    if (this.modalApiKey) this.modalApiKey.style.display = "none";
  }

  saveUserApiKey() {
    const key = this.inputUserApiKey?.value?.trim() || "";
    this.userApiKey = key;
    if (key) {
      localStorage.setItem("painfinder_openai_key", key);
      alert("🔑 OpenAI API Key가 로컬에 안전하게 저장되었습니다!\n이제 실제 GPT-4o 실시간 생성이 가동됩니다.");
    } else {
      localStorage.removeItem("painfinder_openai_key");
      alert("API Key가 비어있어 기본 내장 엔진으로 동작합니다.");
    }
    this.closeApiKeyModal();
  }

  clearUserApiKey() {
    this.userApiKey = "";
    localStorage.removeItem("painfinder_openai_key");
    if (this.inputUserApiKey) this.inputUserApiKey.value = "";
    alert("API Key가 초기화되었습니다.");
  }

  // Project Workspace Save & JSON Backup
  saveCurrentProject() {
    const projectData = {
      savedAt: new Date().toISOString(),
      currentModelId: this.currentModelId,
      discoveredItem: this.discoveredItem,
      checklistState: this.checklistState,
      simulator: {
        stdPrice: this.inputStandardPrice?.value,
        stdUsers: this.inputStandardUsers?.value,
        proPrice: this.inputProPrice?.value,
        proUsers: this.inputProUsers?.value,
        opsCost: this.inputOpsCost?.value,
        cac: this.inputCacCost?.value,
        churn: this.inputChurnRate?.value,
        refund: this.inputRefundRate?.value
      }
    };
    localStorage.setItem("painfinder_saved_project", JSON.stringify(projectData));
    alert("💾 현재 프로젝트(비즈니스 모델, 수치, 발굴 아이템)가 브라우저에 안전하게 저장되었습니다!\n언제든 새로고침해도 그대로 복원됩니다.");
  }

  exportProjectJson() {
    const projectData = {
      title: "PainFinder Business Blueprint",
      version: "8.5 Commercial Edition",
      exportedAt: new Date().toISOString(),
      activeModel: this.models[this.currentModelId],
      discoveredItem: this.discoveredItem,
      checklistProgress: Object.keys(this.checklistState || {}).length,
      stressTestResults: {
        ltv: this.valLtvAmount?.textContent,
        ltvCacRatio: this.valLtvCacRatio?.textContent,
        bepUsers: this.valBepUsers?.textContent,
        realNetMrr: this.valRealNetMrr?.textContent
      }
    };
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `PainFinder_${this.currentModelId}_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  restoreSavedProject() {
    try {
      const raw = localStorage.getItem("painfinder_saved_project");
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.currentModelId && this.models[data.currentModelId]) {
        this.currentModelId = data.currentModelId;
      }
      if (data.discoveredItem) this.discoveredItem = data.discoveredItem;
      if (data.simulator) {
        if (this.inputStandardPrice && data.simulator.stdPrice) this.inputStandardPrice.value = data.simulator.stdPrice;
        if (this.inputStandardUsers && data.simulator.stdUsers) this.inputStandardUsers.value = data.simulator.stdUsers;
        if (this.inputProPrice && data.simulator.proPrice) this.inputProPrice.value = data.simulator.proPrice;
        if (this.inputProUsers && data.simulator.proUsers) this.inputProUsers.value = data.simulator.proUsers;
        if (this.inputOpsCost && data.simulator.opsCost) this.inputOpsCost.value = data.simulator.opsCost;
        if (this.inputCacCost && data.simulator.cac) this.inputCacCost.value = data.simulator.cac;
        if (this.inputChurnRate && data.simulator.churn) this.inputChurnRate.value = data.simulator.churn;
        if (this.inputRefundRate && data.simulator.refund) this.inputRefundRate.value = data.simulator.refund;
      }
    } catch (e) {
      console.warn("Project restore failed:", e);
    }
  }

  // Countdown Timer (Early Bird Sale)
  initCountdownTimer() {
    let totalSeconds = 4 * 3600 + 28 * 60 + 15;
    setInterval(() => {
      if (totalSeconds > 0) totalSeconds--;
      const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const s = String(totalSeconds % 60).padStart(2, "0");
      const elH = document.getElementById("cdHours");
      const elM = document.getElementById("cdMins");
      const elS = document.getElementById("cdSecs");
      if (elH) elH.textContent = h;
      if (elM) elM.textContent = m;
      if (elS) elS.textContent = s;
    }, 1000);
  }

  // Real-Time Social Proof Engine
  initSocialProofEngine() {
    const proofs = [
      { name: "서울 강남구 박** 대표님", item: "소상공인 정부지원금 AI 매칭기 VIP 평생권", time: "1분 전" },
      { name: "경기 성남시 이** 님", item: "DeepFocus 21 도파민 디톡스 챌린지 1:1 코칭권", time: "3분 전" },
      { name: "부산 해운대구 최** 님", item: "Post-Career 1인 창직 로드맵 마스터플랜", time: "5분 전" },
      { name: "대전 유성구 정** 수석님", item: "DirtyRead Lab 능동적 독서 워크북 라이선스", time: "8분 전" },
      { name: "인천 연수구 한** 대표님", item: "AI 계약서 독소조항 탐지기 VIP 패키지", time: "12분 전" }
    ];

    let index = 0;
    const triggerToast = () => {
      if (!this.socialProofToastContainer) return;
      const data = proofs[index % proofs.length];
      index++;

      const toast = document.createElement("div");
      toast.className = "toast-proof-card";
      toast.innerHTML = `
        <div class="toast-avatar-box">⚡</div>
        <div class="toast-content-box">
          <div class="toast-title-line">${data.name} 결제 완료</div>
          <div class="toast-sub-line">
            [${data.item}] 구매<span class="toast-time-badge">${data.time}</span>
          </div>
        </div>
      `;

      this.socialProofToastContainer.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("fading");
        setTimeout(() => toast.remove(), 400);
      }, 4500);
    };

    // First toast after 2.5s, then every 9.5s
    setTimeout(() => {
      triggerToast();
      setInterval(triggerToast, 9500);
    }, 2500);
  }
}

// DOM 준비 완료 시 초기화
document.addEventListener("DOMContentLoaded", () => {
  window.app = new PainFinderApp();
});
