/**
 * ArtVenue LawMaster AI Enterprise Engine v4.5
 * 공연장 6대 복합법령 상충 해결 & 3D 공간 인텔리전스 시스템
 */

// =============================================================================
// 1. DATA REPOSITORY: 23 PARTS MASTER MATRIX & 9 CONFLICT RESOLUTIONS
// =============================================================================

const MASTER_PARTS_DATA = [
  {
    id: 1,
    name: "관람실 출구 폭·개소",
    category: "egress",
    hasConflict: true,
    conflictId: 2,
    building: { type: "dominant", text: "◉ 제10조② (1.5m/개소)" },
    fire: { type: "none", text: "─" },
    disability: { type: "review", text: "○" },
    bf: { type: "review", text: "○ 2.1.2 (0.9m/짝)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "건축법 개소당 1.5m와 BF 한 짝 0.9m가 경합하므로 양개형 1.2m+1.2m(개구부 2.4m)로 설계해야 양 법령 동시 충족"
  },
  {
    id: 2,
    name: "피난계단 출입구 폭",
    category: "egress",
    hasConflict: false,
    building: { type: "dominant", text: "◉ 제9조 (유효폭 0.9m+)" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "●" },
    bf: { type: "mandatory", text: "●" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "피난계단 유효폭 0.9m 이상 및 단차 제로, 방화문 피난방향 개폐 의무"
  },
  {
    id: 3,
    name: "일반 문 유효폭",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "● 별표1-6 (0.9m+)" },
    bf: { type: "dominant", text: "◉ 2.1.2 (최우수 0.9m+)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "BF 인증 기준에 따라 문틀 통과 순유효폭 0.9m(우수/최우수) 확보 필수"
  },
  {
    id: 4,
    name: "문 단차·손잡이·점자",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "● 별표1-6" },
    bf: { type: "dominant", text: "◉ 2.1.1 / 2.1.4" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "단차 2cm 이하(경사로 1/8), 레버형 손잡이(0.8~0.9m), 점자표지판 1.5m 높이 부착"
  },
  {
    id: 5,
    name: "문 전·후면 유효거리",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "review", text: "○" },
    bf: { type: "dominant", text: "◉ 2.1.3 (1.5m x 1.5m)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "휠체어 회전 및 안전 개폐를 위해 문 전후면에 직경 1.5m 이상의 활동공간 확보"
  },
  {
    id: 6,
    name: "FOH 복도 폭",
    category: "egress",
    hasConflict: true,
    conflictId: 1,
    building: { type: "dominant", text: "◉ 제15조의2② (2.4m+)" },
    fire: { type: "none", text: "─" },
    disability: { type: "review", text: "○" },
    bf: { type: "review", text: "○ 2.2.1 (1.5m)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "건축법 2.4m가 지배하나, 소화전함/기둥/마감재 돌출 고려 시 실계획 3.0~3.6m 필수"
  },
  {
    id: 7,
    name: "복도 배치(양쪽·뒤쪽)",
    category: "egress",
    hasConflict: false,
    building: { type: "dominant", text: "◉ 제15조의2③" },
    fire: { type: "none", text: "─" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "객석 면적 및 피난 통로 기준에 따라 양쪽 및 후면 피난 복도 연결 의무"
  },
  {
    id: 8,
    name: "복도 마감·장애물·손잡이",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "review", text: "○" },
    bf: { type: "dominant", text: "◉ 2.2.x (연속 손잡이)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "바닥 미끄럼 방지, 벽체 0.1m 이상 돌출물 금지, 높이 0.85m 연속 핸드레일 설치"
  },
  {
    id: 9,
    name: "계단 유효폭·유효높이",
    category: "egress",
    hasConflict: false,
    building: { type: "dominant", text: "◉ 제15조①④②③" },
    fire: { type: "none", text: "─" },
    disability: { type: "review", text: "○" },
    bf: { type: "review", text: "○" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "공연장 주계단 유효폭 1.5m 이상, 유효높이 2.1m 이상 확보 의무"
  },
  {
    id: 10,
    name: "계단참 설치간격",
    category: "egress",
    hasConflict: true,
    conflictId: 6,
    building: { type: "dominant", text: "◉ 제15조①1 (높이 3m마다)" },
    fire: { type: "none", text: "─" },
    disability: { type: "none", text: "─" },
    bf: { type: "mandatory", text: "● 치수 기준 (폭 1.2m+)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "높이 3m 이내마다 계단참을 두고, 계단참의 유효폭은 1.2m 이상으로 양자 동시 충족"
  },
  {
    id: 11,
    name: "계단 챌면·디딤판",
    category: "egress",
    hasConflict: true,
    conflictId: 5,
    building: { type: "none", text: "─ (공연장 무규정)" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "●" },
    bf: { type: "dominant", text: "◉ BF (0.18 / 0.28m)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "건축법은 공연장 계단 치수가 미비하므로 BF 최우수 기준(챌면 16cm 이하, 디딤판 30cm 이상) 적용"
  },
  {
    id: 12,
    name: "방화구획·내화구조",
    category: "fire",
    hasConflict: true,
    conflictId: 7,
    building: { type: "dominant", text: "◉ 영 제46조 (완화 조항)" },
    fire: { type: "review", text: "○" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "관람실 대공간은 방화구획 완화 규정 적용. 제연설비 및 조기 반응형 스프링클러로 사전 서면협의 필수"
  },
  {
    id: 13,
    name: "배연설비",
    category: "fire",
    hasConflict: false,
    building: { type: "dominant", text: "◉ 영 제51조" },
    fire: { type: "review", text: "○" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "관람실 및 무대 상부에 자연배연창 또는 기계배연설비 용량 기준 충족 의무"
  },
  {
    id: 14,
    name: "제연설비",
    category: "fire",
    hasConflict: false,
    building: { type: "review", text: "○" },
    fire: { type: "dominant", text: "◉ 소방시설법 (특별피난계단)" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "무대부 및 관람석, 비상용 승강기 승강장 가압제연 및 차압 기준 만족"
  },
  {
    id: 15,
    name: "스프링클러·유도등",
    category: "fire",
    hasConflict: true,
    conflictId: 8,
    building: { type: "none", text: "─" },
    fire: { type: "dominant", text: "◉ 소방시설법 화재안전기준" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "소방 점등 의무 vs 연출 암전 상충: 자동 화재 연동 감광 제어기 설치 후 소방서 서면 승인 필수"
  },
  {
    id: 16,
    name: "휠체어 관람석",
    category: "barrierfree",
    hasConflict: true,
    conflictId: 9,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "● 별표1 (1% 이상)" },
    bf: { type: "dominant", text: "◉ 5.2 (최우수 2% 이상)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "BF 최우수 2% 이상 확보 및 무대 정면 시야각 30° 이내 골든존 분산 배치"
  },
  {
    id: 17,
    name: "무대 접근성 (경사로/리프트)",
    category: "stage",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "●" },
    bf: { type: "dominant", text: "◉ 5.2 (무대 경사로 필수)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "객석에서 무대로 진입 가능한 경사로(1/12 이하) 또는 전용 휠체어 리프트 설치 필수"
  },
  {
    id: 18,
    name: "무대기계·기구 안전진단",
    category: "stage",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "review", text: "○" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "dominant", text: "◉ 공연법 제12조" },
    etc: { type: "none", text: "─" },
    summary: "무대 상부 배톤, 리깅, 회전무대 3년 주기 정기안전검사 및 안전관리자 선임"
  },
  {
    id: 19,
    name: "장애인화장실",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "●" },
    bf: { type: "dominant", text: "◉ BF (남녀구분 1.6x2.0m)" },
    performance: { type: "none", text: "─" },
    etc: { type: "none", text: "─" },
    summary: "남녀 분리 설치 원칙, 출입문 유효폭 0.9m, 내부 회전반경 1.5m, 자동문 및 비상벨 연동"
  },
  {
    id: 20,
    name: "전체 화장실 개수·비율",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "review", text: "○" },
    bf: { type: "review", text: "○" },
    performance: { type: "none", text: "─" },
    etc: { type: "dominant", text: "◉ 공중화장실법 조례 (여성 1.5배)" },
    summary: "공연장 특성상 인터미션 여성 대기열 방지를 위해 여성 대변기 수 = 남성 대·소변기 합의 1.5배 이상 확보"
  },
  {
    id: 21,
    name: "장애인전용주차구획",
    category: "barrierfree",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "none", text: "─" },
    disability: { type: "mandatory", text: "● 3% 이상" },
    bf: { type: "dominant", text: "◉ BF 5% (3.3m x 5.0m)" },
    performance: { type: "none", text: "─" },
    etc: { type: "review", text: "○" },
    summary: "BF 최우수 5% 이상, 폭 3.3m 이상 확보 및 주출입구 최단 안전통로 직결"
  },
  {
    id: 22,
    name: "총 주차대수",
    category: "egress",
    hasConflict: false,
    building: { type: "review", text: "○" },
    fire: { type: "none", text: "─" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "none", text: "─" },
    etc: { type: "dominant", text: "◉ 주차장법·지자체 조례" },
    summary: "관람시설 기준 시설면적 100㎡당 1대 등 지자체 강화 조례 적용"
  },
  {
    id: 23,
    name: "안전관리조직·재해대처계획",
    category: "stage",
    hasConflict: false,
    building: { type: "none", text: "─" },
    fire: { type: "review", text: "○" },
    disability: { type: "none", text: "─" },
    bf: { type: "none", text: "─" },
    performance: { type: "dominant", text: "◉ 공연법 제11조" },
    etc: { type: "none", text: "─" },
    summary: "1,000석 이상 공연장 안전총괄책임자 지정 및 매년 재해대처계획 지자체 신고 의무"
  }
];

const CONFLICT_SOLUTIONS_DATA = [
  {
    id: 1,
    title: "FOH 복도 폭 (관람객 메인 로비)",
    compA: "건축법: 2.4 m (1,000㎡ 이상)",
    compB: "BF 인증: 우수 1.2 m / 최우수 1.5 m",
    dominant: "건축법 (A 지배)",
    conclusion: "2.4 m 이상 확보 필수. 단, 문·기둥·소화전함 등 장식분 별도 확보 필요 => 실계획 3.0 ~ 3.6 m 강력 권장",
    icon: "move-horizontal",
    tip: "소화전함이 벽체에서 15cm 돌출되면 준공 유효폭이 2.25m로 미달되어 반려됩니다. 매립형 시공 또는 3.2m 이상 설계를 확정하십시오."
  },
  {
    id: 2,
    title: "관람실 출구 유효폭 & 형태",
    compA: "건축법: 1.5 m / 개소당",
    compB: "BF 인증: 한 짝 0.9 m 이상",
    dominant: "양자 병합 (A + B 지배)",
    conclusion: "양개형 도어 1.2 m + 1.2 m (총 개구부 폭 2.4 m)로 설계하여 피난속도 및 휠체어 진입 완벽 동시 충족",
    icon: "log-out",
    tip: "1.5m 단일 문은 무거워 BF 인증에서 탈락합니다. 1.2m 양개 도어로 자동 폐쇄력을 30N 이하로 세팅하십시오."
  },
  {
    id: 3,
    title: "사운드록(음향전실) 길이",
    compA: "BF 인증: 유효거리 1.5 m",
    compB: "음향/피난: 두 문 개폐 소요거리 모두 제외",
    dominant: "실무 음향·피난 (B 지배)",
    conclusion: "외개 도어 개폐 반경 간섭 배제 시 3.5 ~ 4.0 m 필요 (문 외개 시 축소 가능하나 로비 복도 폭 잠식 주의)",
    icon: "door-closed",
    tip: "사운드록 길이가 2.5m 이하일 경우 안쪽 문과 바깥쪽 문이 동시에 열려 외부 로비 소음이 객석으로 100% 유입됩니다."
  },
  {
    id: 4,
    title: "차음문 두께 간섭 vs 복도 폭",
    compA: "음향 설계: 차음 이중벽 0.4 ~ 0.6 m",
    compB: "건축법: 복도 유효폭 잠식 금지",
    dominant: "건축법 복도폭 사수 (A 지배)",
    conclusion: "문틀을 로비측 벽면에 평면 정렬하고, 0.5m 두께는 관람실 내부 흡음재 영역으로 흡수하여 복도폭 100% 보존",
    icon: "layers",
    tip: "복도 쪽으로 문틀이 튀어나오면 '복도 유효폭 위반'으로 건축과 사용승인 현장실사에서 100% 적발됩니다."
  },
  {
    id: 5,
    title: "계단 챌면(높이) · 디딤판(너비)",
    compA: "건축법: 공연장 계단 치수 무규정",
    compB: "BF 인증: 챌면 0.18m / 디딤판 0.28m",
    dominant: "BF 인증 (B 지배)",
    conclusion: "BF 최우수 기준(챌면 16cm 이하, 디딤판 30cm 이상) 적용하여 노약자 및 어두운 조명 하 안전사고 원천 차단",
    icon: "align-justify",
    tip: "공연장 암전 계단에서 디딤판이 28cm 미만이면 관람객 낙상 사고 시 극장 배상책임 100% 과실이 인정됩니다."
  },
  {
    id: 6,
    title: "계단참 설치 간격 및 치수",
    compA: "건축법: 수직 높이 3 m 이내마다",
    compB: "BF 인증: 유효폭 1.2 m 이상 치수 기준",
    dominant: "양자 병존 (동시 충족)",
    conclusion: "수직 3m마다 간격 배치 + 유효폭 1.2m 이상 평탄 구간을 확보하여 건축법과 BF 인증 동시 통과",
    icon: "git-merge",
    tip: "계단참 회전 구간에 코너 챔퍼를 주거나 기둥이 침범하면 BF 인증에서 즉시 반려됩니다."
  },
  {
    id: 7,
    title: "관람실 대공간 방화구획",
    compA: "건축법: 영 제46조 1,000㎡마다 방화구획",
    compB: "공연장 특성: 무대-객석 일체형 대공간 필요",
    dominant: "방화구획 완화 조항 (완화 적용)",
    conclusion: "허가청(시·군·구 건축과) 사전 서면협의 필수. 조기반응형 ESFR 스프링클러 + 기계식 제연설비 기술서 제출",
    icon: "shield-alert",
    tip: "착공 전 관람실 방화구획 완화 심의를 받지 않으면 준공 시 드렌처 설비 추가로 수억 원이 낭비됩니다."
  },
  {
    id: 8,
    title: "객석유도등 점등 vs 무대 암전",
    compA: "소방법: 유도등 상시 설치·점등 의무",
    compB: "공연 연출: 100% 암전 요구 (빛 간섭 배제)",
    dominant: "소방법 (임의 소등 엄금)",
    conclusion: "임의 소등 절대 불가. 1룩스 이하 자동 조도감광 장치 설치 및 화재신호 시 100% 복구 조건 소방서 사전 협의",
    icon: "flame",
    tip: "연출자가 유도등에 검은 테이프를 붙이는 관행은 소방특별조사 시 과태료 300만원 및 즉시 시정명령 대상입니다."
  },
  {
    id: 9,
    title: "관람석 내부 단차 계단 BF 적용",
    compA: "BF 인증: 일반 계단 항목 적용 요구",
    compB: "BF 관람석: 5.2 항목 특수성 인정 요구",
    dominant: "BF 5.2 관람석 기준 (5.2 지배)",
    conclusion: "관람석 내부 단차 계단에 핸드레일 전면 설치 시 시야가 가려지므로, BF 5.2 기준을 근거로 인증기관 사전 서면 확정",
    icon: "accessibility",
    tip: "인증 심사관마다 해석이 다르므로, 기본설계 완료 직후 '관람석 내부 단차 질의회신서'를 확보해 두어야 합니다."
  }
];


// =============================================================================
// 2. 3D THEATER SIMULATOR (THREE.JS ENGINE)
// =============================================================================

class VenueSimulator3D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.meshes = {};
    this.lights = {};
    
    // Default Parameters
    this.params = {
      fohWidth: 3.2,
      soundLockLength: 3.8,
      exitWidth: 2.4,
      stairH: 16,
      stairW: 30
    };

    this.init();
  }

  init() {
    const width = this.canvas.clientWidth || 800;
    const height = this.canvas.clientHeight || 480;

    // Scene (Bright Architectural Studio)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xF1F5F9);
    this.scene.fog = new THREE.FogExp2(0xF1F5F9, 0.018);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 18, 26);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Controls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
      this.controls.minDistance = 5;
      this.controls.maxDistance = 60;
    }

    // Lighting
    this.setupLighting();

    // Build Venue 3D Architecture
    this.buildVenueModel();

    // Handle Resize
    window.addEventListener('resize', () => this.onResize());

    // Animation Loop
    this.animate();
  }

  setupLighting() {
    const ambient = new THREE.AmbientLight(0xFFFFFF, 1.4);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 1.1);
    dirLight.position.set(12, 25, 15);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    this.scene.add(dirLight);

    const warmFill = new THREE.PointLight(0xF59E0B, 0.5, 40);
    warmFill.position.set(-10, 10, -5);
    this.scene.add(warmFill);

    // Stage Spot Light
    const stageSpot = new THREE.SpotLight(0xFFFFFF, 2.0);
    stageSpot.position.set(0, 15, -6);
    stageSpot.target.position.set(0, 0, -10);
    stageSpot.angle = Math.PI / 5;
    stageSpot.penumbra = 0.6;
    stageSpot.castShadow = true;
    this.scene.add(stageSpot);
    this.scene.add(stageSpot.target);

    // Exit Green Glow
    const exitGlow = new THREE.PointLight(0x059669, 1.5, 8);
    exitGlow.position.set(9.5, 2.5, 5);
    this.scene.add(exitGlow);
  }

  buildVenueModel() {
    // 1. Theater Floor Slab
    const floorGeo = new THREE.PlaneGeometry(32, 28);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      roughness: 0.7,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Grid helper
    const grid = new THREE.GridHelper(32, 32, 0x94A3B8, 0xCBD5E1);
    grid.position.y = 0.01;
    this.scene.add(grid);

    // 2. Stage (Proscenium Stage)
    const stageGeo = new THREE.BoxGeometry(14, 1.2, 8);
    const stageMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 });
    const stage = new THREE.Mesh(stageGeo, stageMat);
    stage.position.set(0, 0.6, -9);
    stage.castShadow = true;
    stage.receiveShadow = true;
    this.scene.add(stage);
    this.meshes.stage = stage;

    // Stage Proscenium Frame
    const frameGeo = new THREE.BoxGeometry(15, 7, 0.6);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1E293B });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, 4.2, -5);
    this.scene.add(frame);

    // 3. Audience Sloped Seating Rake
    const seatingGroup = new THREE.Group();
    const rows = 7;
    for (let r = 0; r < rows; r++) {
      const rowZ = -2 + r * 1.5;
      const rowY = 0.3 + r * 0.45;
      const rowGeo = new THREE.BoxGeometry(13, 0.4, 1.2);
      const rowMat = new THREE.MeshStandardMaterial({ color: 0x475569 });
      const seatRow = new THREE.Mesh(rowGeo, rowMat);
      seatRow.position.set(0, rowY, rowZ);
      seatRow.castShadow = true;
      seatingGroup.add(seatRow);

      // Add individual chair blocks
      for (let c = -5; c <= 5; c += 1.2) {
        if (Math.abs(c) < 1.0 && r < 2) continue; // center aisle
        const chairGeo = new THREE.BoxGeometry(0.7, 0.5, 0.6);
        const chairMat = new THREE.MeshStandardMaterial({
          color: (r === 2 && Math.abs(c) < 3) ? 0x4F46E5 : 0x64748B, // wheelchair zone highlight
          roughness: 0.5
        });
        const chair = new THREE.Mesh(chairGeo, chairMat);
        chair.position.set(c, rowY + 0.4, rowZ);
        chair.castShadow = true;
        seatingGroup.add(chair);
      }
    }
    this.scene.add(seatingGroup);
    this.meshes.seating = seatingGroup;

    // 4. FOH Lobby Corridor (Dynamic Width)
    const fohGeo = new THREE.BoxGeometry(24, 0.1, this.params.fohWidth);
    const fohMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.3 });
    const fohMesh = new THREE.Mesh(fohGeo, fohMat);
    fohMesh.position.set(0, 0.05, 11);
    fohMesh.receiveShadow = true;
    this.scene.add(fohMesh);
    this.meshes.fohCorridor = fohMesh;

    // 5. Sound Lock Chambers (Left & Right)
    this.meshes.soundLocks = [];
    [-9.5, 9.5].forEach((xPos, idx) => {
      const slGroup = new THREE.Group();
      // Wall
      const wallGeo = new THREE.BoxGeometry(0.4, 3.5, this.params.soundLockLength);
      const wallMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.set(xPos > 0 ? xPos - 1.2 : xPos + 1.2, 1.75, 6);
      slGroup.add(wall);

      // Acoustic Doors (Double Doors)
      const doorGeo = new THREE.BoxGeometry(1.2, 2.4, 0.1);
      const doorMat = new THREE.MeshStandardMaterial({ color: 0xF59E0B, metalness: 0.4 });
      
      const doorInner = new THREE.Mesh(doorGeo, doorMat);
      doorInner.position.set(xPos > 0 ? xPos - 0.5 : xPos + 0.5, 1.2, 6 - this.params.soundLockLength / 2);
      slGroup.add(doorInner);

      const doorOuter = new THREE.Mesh(doorGeo, doorMat);
      doorOuter.position.set(xPos > 0 ? xPos - 0.5 : xPos + 0.5, 1.2, 6 + this.params.soundLockLength / 2);
      slGroup.add(doorOuter);

      this.scene.add(slGroup);
      this.meshes.soundLocks.push(slGroup);
    });

    // 6. Egress Exit Glow Indicators
    const exitSignGeo = new THREE.BoxGeometry(0.8, 0.4, 0.1);
    const exitSignMat = new THREE.MeshBasicMaterial({ color: 0x10B981 });
    const exitSign = new THREE.Mesh(exitSignGeo, exitSignMat);
    exitSign.position.set(9.5, 2.7, 5);
    this.scene.add(exitSign);
  }

  updateParameters(newParams) {
    this.params = { ...this.params, ...newParams };

    // Update FOH Corridor Size
    if (this.meshes.fohCorridor) {
      this.meshes.fohCorridor.scale.z = this.params.fohWidth / 3.2;
    }

    // Update Sound Lock Length
    if (this.meshes.soundLocks) {
      this.meshes.soundLocks.forEach(sl => {
        sl.scale.z = this.params.soundLockLength / 3.8;
      });
    }

    // Update HUD
    const hudFoh = document.getElementById('hudFohVal');
    if (hudFoh) {
      const status = this.params.fohWidth >= 3.0 ? "적합(여유)" : (this.params.fohWidth >= 2.4 ? "최소만족" : "위반(2.4m 미달)");
      hudFoh.textContent = `${this.params.fohWidth.toFixed(1)} m (${status})`;
      hudFoh.className = this.params.fohWidth >= 2.4 ? "hud-val highlight" : "hud-val text-danger";
    }

    const hudSl = document.getElementById('hudSoundLockVal');
    if (hudSl) {
      const status = this.params.soundLockLength >= 3.5 ? "간섭 없음" : (this.params.soundLockLength >= 2.8 ? "간섭 주의" : "도어충돌 위험");
      hudSl.textContent = `${this.params.soundLockLength.toFixed(1)} m (${status})`;
      hudSl.className = this.params.soundLockLength >= 3.5 ? "hud-val highlight" : "hud-val text-amber";
    }

    const hudExit = document.getElementById('hudExitVal');
    if (hudExit) {
      hudExit.textContent = `양개 ${this.params.exitWidth.toFixed(1)} m (${(this.params.exitWidth/2).toFixed(1)}m + ${(this.params.exitWidth/2).toFixed(1)}m)`;
    }
  }

  setCameraPreset(mode) {
    if (!this.camera || !this.controls) return;

    let targetPos = { x: 0, y: 18, z: 26 };
    let lookTarget = { x: 0, y: 2, z: 0 };

    switch (mode) {
      case 'foh':
        targetPos = { x: 0, y: 6, z: 20 };
        lookTarget = { x: 0, y: 0.5, z: 11 };
        break;
      case 'soundlock':
        targetPos = { x: 14, y: 5, z: 10 };
        lookTarget = { x: 9.5, y: 1.5, z: 6 };
        break;
      case 'exit':
        targetPos = { x: 12, y: 4, z: 8 };
        lookTarget = { x: 9.5, y: 1.5, z: 5 };
        break;
      case 'wheelchair':
        targetPos = { x: 0, y: 5, z: 6 };
        lookTarget = { x: 0, y: 1.5, z: -2 };
        break;
      case 'stage':
        targetPos = { x: 0, y: 4, z: 2 };
        lookTarget = { x: 0, y: 2, z: -9 };
        break;
      case 'overview':
      default:
        targetPos = { x: 0, y: 18, z: 26 };
        lookTarget = { x: 0, y: 2, z: 0 };
        break;
    }

    // Smooth Camera Transition
    this.animateCameraTo(targetPos, lookTarget);
  }

  animateCameraTo(pos, look) {
    const startPos = this.camera.position.clone();
    const startLook = this.controls.target.clone();
    const endPos = new THREE.Vector3(pos.x, pos.y, pos.z);
    const endLook = new THREE.Vector3(look.x, look.y, look.z);

    let progress = 0;
    const duration = 30; // frames

    const step = () => {
      progress++;
      const t = progress / duration;
      const easeT = 0.5 - Math.cos(t * Math.PI) / 2;

      this.camera.position.lerpVectors(startPos, endPos, easeT);
      this.controls.target.lerpVectors(startLook, endLook, easeT);
      this.controls.update();

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    step();
  }

  onResize() {
    if (!this.canvas || !this.renderer || !this.camera) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}


// =============================================================================
// 3. UI CONTROLLER & EVENT ORCHESTRATION
// =============================================================================

let sim3dInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) lucide.createIcons();

  // Initialize 3D Simulator
  sim3dInstance = new VenueSimulator3D('threeVenueCanvas');

  // Render Initial Matrix Table & Conflict Cards
  renderMatrixTable('all');
  renderConflictCards();

  // Setup Event Listeners
  setupTabNavigation();
  setupFiltersAndSearch();
  setupSpatialSliders();
  setupDiagnosisWizard();
  setupOfficialDocs();
  setupRoiModal();
  setupPresets();
});


// Tab Navigation Logic
function setupTabNavigation() {
  const tabs = document.querySelectorAll('.tab-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTab = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });

      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) {
        activePane.classList.add('active');
      }

      // Re-trigger resize on 3D canvas if switching to 3d tab
      if (targetTab === 'spatial3d' && sim3dInstance) {
        setTimeout(() => sim3dInstance.onResize(), 100);
      }

      if (window.lucide) lucide.createIcons();
    });
  });
}


// Render Matrix Table Body
function renderMatrixTable(filterType = 'all', searchQuery = '') {
  const tbody = document.getElementById('matrixTableBody');
  if (!tbody) return;

  const query = searchQuery.trim().toLowerCase();

  const filtered = MASTER_PARTS_DATA.filter(item => {
    // Filter type check
    if (filterType === 'conflict' && !item.hasConflict) return false;
    if (filterType !== 'all' && filterType !== 'conflict' && item.category !== filterType) return false;

    // Search query check
    if (query) {
      const matchName = item.name.toLowerCase().includes(query);
      const matchSummary = item.summary.toLowerCase().includes(query);
      return matchName || matchSummary;
    }
    return true;
  });

  tbody.innerHTML = filtered.map(item => `
    <tr data-part-id="${item.id}" data-conflict-id="${item.conflictId || ''}" class="${item.hasConflict ? 'conflict-row' : ''}">
      <td>
        <div class="part-name-cell">
          <span>${item.name}</span>
          ${item.hasConflict ? `<span class="conflict-badge-mini">상충 #${item.conflictId}</span>` : ''}
        </div>
      </td>
      <td><span class="mat-tag ${item.building.type}">${item.building.text}</span></td>
      <td><span class="mat-tag ${item.fire.type}">${item.fire.text}</span></td>
      <td><span class="mat-tag ${item.disability.type}">${item.disability.text}</span></td>
      <td><span class="mat-tag ${item.bf.type}">${item.bf.text}</span></td>
      <td><span class="mat-tag ${item.performance.type}">${item.performance.text}</span></td>
      <td><span class="mat-tag ${item.etc.type}">${item.etc.text}</span></td>
    </tr>
  `).join('');

  // Row Click Event
  tbody.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', () => {
      tbody.querySelectorAll('tr').forEach(r => r.classList.remove('active-row'));
      row.classList.add('active-row');

      const conflictId = row.getAttribute('data-conflict-id');
      if (conflictId) {
        highlightConflictCard(parseInt(conflictId));
      }
    });
  });
}


// Render 9 Key Conflict Cards
function renderConflictCards() {
  const container = document.getElementById('conflictCardsContainer');
  if (!container) return;

  container.innerHTML = CONFLICT_SOLUTIONS_DATA.map(c => `
    <div class="conflict-item-card" id="conflictCard-${c.id}" data-cid="${c.id}">
      <div class="conflict-card-top">
        <div class="title-with-icon">
          <span class="conflict-num-badge">상충 #${c.id}</span>
          <span class="conflict-title">${c.title}</span>
        </div>
        <i data-lucide="${c.icon}" class="text-amber"></i>
      </div>

      <div class="conflict-comparison-grid">
        <div class="comp-box dom-a">
          <span class="comp-lbl">경합 A 기준</span>
          <span class="comp-val">${c.compA}</span>
        </div>
        <div class="comp-box dom-b">
          <span class="comp-lbl">경합 B 기준</span>
          <span class="comp-val">${c.compB}</span>
        </div>
      </div>

      <div class="conflict-resolution-box">
        <div class="res-header">
          <span class="res-tag"><i data-lucide="shield-check"></i> 최종 지배: ${c.dominant}</span>
        </div>
        <div class="res-action">${c.conclusion}</div>
      </div>

      <div class="diag-note mt-2 text-muted" style="font-size: 11.5px; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 6px; margin-top: 6px;">
        💡 <strong>실무 팁:</strong> ${c.tip}
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function highlightConflictCard(cid) {
  const card = document.getElementById(`conflictCard-${cid}`);
  if (card) {
    document.querySelectorAll('.conflict-item-card').forEach(c => c.classList.remove('highlighted'));
    card.classList.add('highlighted');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`상충 구간 #${cid} 상세 솔루션을 포커스했습니다.`);
  }
}


// Filters & Search Bar Setup
function setupFiltersAndSearch() {
  const searchInp = document.getElementById('matrixSearchInput');
  const chips = document.querySelectorAll('.filter-chip');

  let currentFilter = 'all';

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-filter');
      renderMatrixTable(currentFilter, searchInp.value);
    });
  });

  if (searchInp) {
    searchInp.addEventListener('input', (e) => {
      renderMatrixTable(currentFilter, e.target.value);
    });
  }
}


// Spatial Sliders Setup
function setupSpatialSliders() {
  const sliderFoh = document.getElementById('sliderFohWidth');
  const sliderSl = document.getElementById('sliderSoundLock');
  const sliderExit = document.getElementById('sliderExitWidth');
  const stairChips = document.querySelectorAll('.stair-chip');

  // Camera Switcher
  document.querySelectorAll('.cam-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cam-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const camMode = btn.getAttribute('data-cam');
      if (sim3dInstance) sim3dInstance.setCameraPreset(camMode);
    });
  });

  const btnReset = document.getElementById('btnResetCamera');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (sim3dInstance) sim3dInstance.setCameraPreset('overview');
    });
  }

  // FOH Slider
  if (sliderFoh) {
    sliderFoh.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      document.getElementById('valFohWidth').textContent = `${val.toFixed(1)} m`;
      
      const alertBox = document.getElementById('statusFohWidth');
      if (val >= 3.0) {
        alertBox.className = 'param-status-alert';
        alertBox.innerHTML = `<i data-lucide="check-circle-2" class="status-ico"></i><span class="status-msg">건축법 2.4m + 소화전/기둥 장식 여유 확보 완료 (합격)</span>`;
      } else if (val >= 2.4) {
        alertBox.className = 'param-status-alert warning';
        alertBox.innerHTML = `<i data-lucide="alert-triangle" class="status-ico"></i><span class="status-msg">건축법 최소 충족하나 돌출물 발생 시 준공 불허 위험 (경고)</span>`;
      } else {
        alertBox.className = 'param-status-alert danger';
        alertBox.innerHTML = `<i data-lucide="x-circle" class="status-ico"></i><span class="status-msg">건축법 제15조의2 위반! 최소 2.4m 이상 필수 (위반)</span>`;
      }

      if (sim3dInstance) sim3dInstance.updateParameters({ fohWidth: val });
      if (window.lucide) lucide.createIcons();
    });
  }

  // Sound Lock Slider
  if (sliderSl) {
    sliderSl.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      document.getElementById('valSoundLock').textContent = `${val.toFixed(1)} m`;
      
      const alertBox = document.getElementById('statusSoundLock');
      if (val >= 3.5) {
        alertBox.className = 'param-status-alert';
        alertBox.innerHTML = `<i data-lucide="check-circle-2" class="status-ico"></i><span class="status-msg">외개 도어 개폐 반경 상호 간섭 없음 (최적 차음 성능)</span>`;
      } else if (val >= 2.8) {
        alertBox.className = 'param-status-alert warning';
        alertBox.innerHTML = `<i data-lucide="alert-triangle" class="status-ico"></i><span class="status-msg">동시 개폐 시 일부 간섭 발생 (도어 완충 세팅 필요)</span>`;
      } else {
        alertBox.className = 'param-status-alert danger';
        alertBox.innerHTML = `<i data-lucide="x-circle" class="status-ico"></i><span class="status-msg">도어 충돌 발생! 차음 붕괴 및 관람객 병목 유발 (위험)</span>`;
      }

      if (sim3dInstance) sim3dInstance.updateParameters({ soundLockLength: val });
      if (window.lucide) lucide.createIcons();
    });
  }

  // Exit Width Slider
  if (sliderExit) {
    sliderExit.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      const half = (val / 2).toFixed(1);
      document.getElementById('valExitWidth').textContent = `${val.toFixed(1)} m (양개 ${half}+${half}m)`;
      
      const alertBox = document.getElementById('statusExitWidth');
      if (val >= 2.4) {
        alertBox.className = 'param-status-alert';
        alertBox.innerHTML = `<i data-lucide="check-circle-2" class="status-ico"></i><span class="status-msg">건축법 1.5m + BF 0.9m/짝 완벽 동시 충족 (${half}m+${half}m)</span>`;
      } else if (val >= 1.8) {
        alertBox.className = 'param-status-alert warning';
        alertBox.innerHTML = `<i data-lucide="alert-triangle" class="status-ico"></i><span class="status-msg">BF 한 짝 0.9m 충족하나 대형 피난 병목 발생 가능</span>`;
      } else {
        alertBox.className = 'param-status-alert danger';
        alertBox.innerHTML = `<i data-lucide="x-circle" class="status-ico"></i><span class="status-msg">건축법 1.5m 또는 BF 한 짝 0.9m 미달 (부적합)</span>`;
      }

      if (sim3dInstance) sim3dInstance.updateParameters({ exitWidth: val });
      if (window.lucide) lucide.createIcons();
    });
  }

  // Stair Chips
  stairChips.forEach(chip => {
    chip.addEventListener('click', () => {
      stairChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const h = chip.getAttribute('data-h');
      const w = chip.getAttribute('data-w');
      document.getElementById('valStairs').textContent = `H ${h}cm / W ${w}cm`;
      showToast(`계단 스펙 변경: 챌면 ${h}cm / 디딤판 ${w}cm`);
    });
  });

  // Auto Optimize Button
  const btnAutoOpt = document.getElementById('btnAutoOptimizeAll');
  if (btnAutoOpt) {
    btnAutoOpt.addEventListener('click', () => {
      if (sliderFoh) { sliderFoh.value = 3.2; sliderFoh.dispatchEvent(new Event('input')); }
      if (sliderSl) { sliderSl.value = 3.8; sliderSl.dispatchEvent(new Event('input')); }
      if (sliderExit) { sliderExit.value = 2.4; sliderExit.dispatchEvent(new Event('input')); }
      stairChips[1].click(); // BF 최우수 16/30cm
      showToast("🏆 골든 스펙(Golden Specs)이 전체 파라미터에 자동 적용되었습니다!");
    });
  }
}


// Diagnosis Wizard Logic
function setupDiagnosisWizard() {
  const btnRun = document.getElementById('btnRunDiagnosis');
  if (btnRun) {
    btnRun.addEventListener('click', () => {
      runVenueDiagnosis();
    });
  }
  // Initial run
  runVenueDiagnosis();
}

function runVenueDiagnosis() {
  const name = document.getElementById('inpVenueName')?.value || "공연장";
  const seats = parseInt(document.getElementById('inpSeatCount')?.value || 850);
  const area = parseInt(document.getElementById('inpFloorArea')?.value || 1200);
  const stageType = document.getElementById('inpStageType')?.value || "proscenium";
  const bfTarget = document.getElementById('inpBfTarget')?.value || "best";
  const floors = document.getElementById('inpFloors')?.value || "ground";
  const dimming = document.getElementById('inpDimmingControl')?.value || "yes";

  // Calculations
  // 1. Wheelchair Seats: BF best = 2% (min 8 seats for 850), legal min = 1%
  const wcBestSeats = Math.max(4, Math.ceil(seats * 0.02));
  const wcLegalMin = Math.max(2, Math.ceil(seats * 0.01));

  // 2. Egress Exit: 1.5m per 100m² or seat logic (min 4 exits for 850 seats)
  const minExitDoors = seats > 1000 ? 5 : (seats > 500 ? 4 : 2);
  const exitTotalWidth = (minExitDoors * 1.5).toFixed(1);

  // 3. FOH Corridor:
  const recFohWidth = area > 1000 ? 3.2 : 2.8;

  // 4. Female Toilets:
  const maleToilets = Math.ceil(seats / 150);
  const femaleToilets = Math.ceil(maleToilets * 1.5);

  const container = document.getElementById('diagResultsContent');
  if (!container) return;

  container.innerHTML = `
    <div class="diag-card success">
      <div class="diag-card-title">
        <span><i data-lucide="shield-check" class="text-green"></i> 1. 관람실 피난출구 & 사운드록 최적 규격</span>
        <span class="badge-blue">건축법 제10조 / BF 2.1</span>
      </div>
      <div class="diag-specs-grid">
        <div>
          <span class="diag-stat-lbl">최소 출구 개소</span>
          <span class="diag-stat-val">${minExitDoors} 개소 이상</span>
        </div>
        <div>
          <span class="diag-stat-lbl">개별 도어 규격</span>
          <span class="diag-stat-val">양개 2.4 m (1.2+1.2)</span>
        </div>
        <div>
          <span class="diag-stat-lbl">사운드록 권장길이</span>
          <span class="diag-stat-val">3.8 m 이상 (차음보장)</span>
        </div>
      </div>
      <p class="diag-note">850석 관람객의 3분 이내 전원 피난 완료 및 외부 로비 소음 완벽 차단을 위한 필수 스펙입니다.</p>
    </div>

    <div class="diag-card primary">
      <div class="diag-card-title">
        <span><i data-lucide="accessibility" class="text-cyan"></i> 2. BF(무장애) ${bfTarget === 'best' ? '최우수' : '우수'} 등급 관람석 배치</span>
        <span class="badge-amber">BF 5.2 지배기준</span>
      </div>
      <div class="diag-specs-grid">
        <div>
          <span class="diag-stat-lbl">법적 최소 설치석</span>
          <span class="diag-stat-val">${wcLegalMin} 석 (1%)</span>
        </div>
        <div>
          <span class="diag-stat-lbl">BF 최우수 권장석</span>
          <span class="diag-stat-val">${wcBestSeats} 석 (2%+)</span>
        </div>
        <div>
          <span class="diag-stat-lbl">시야각 권장존</span>
          <span class="diag-stat-val">무대중심 30° 골든존</span>
        </div>
      </div>
      <p class="diag-note">동반자석(일반석)과 1:1 인접 배치하며 무대 휠체어 진입 경사로(1/12 이하)를 설계에 반영해야 합니다.</p>
    </div>

    <div class="diag-card ${dimming === 'yes' ? 'success' : 'warning'}">
      <div class="diag-card-title">
        <span><i data-lucide="flame" class="text-amber"></i> 3. 소방안전 & 객석유도등 감광 시스템 판정</span>
        <span class="badge-blue">소방시설법</span>
      </div>
      <div class="diag-specs-grid">
        <div>
          <span class="diag-stat-lbl">감광 연동 제어기</span>
          <span class="diag-stat-val">${dimming === 'yes' ? '설치 확정' : '미설치 (위험)'}</span>
        </div>
        <div>
          <span class="diag-stat-lbl">방화구획 완화협의</span>
          <span class="diag-stat-val">${area >= 1000 ? '사전 서면협의 필수' : '해당 없음'}</span>
        </div>
        <div>
          <span class="diag-stat-lbl">소방서 제출 서식</span>
          <span class="diag-stat-val">감광신청서 즉시출력</span>
        </div>
      </div>
      <p class="diag-note">${dimming === 'yes' ? '화재 수신반 연동 시 즉시 100% 점등 조건으로 소방서 완벽 인허가 가능합니다.' : '⚠️ 단순 소등 시 소방 준공 검사에서 반려됩니다. 자동감광기를 채택하십시오.'}</p>
    </div>

    <div class="diag-card primary">
      <div class="diag-card-title">
        <span><i data-lucide="users" class="text-cyan"></i> 4. 공중화장실 조례 및 FOH 로비 동선 규격</span>
        <span class="badge-blue">지자체 조례</span>
      </div>
      <div class="diag-specs-grid">
        <div>
          <span class="diag-stat-lbl">여성 대변기 최소수</span>
          <span class="diag-stat-val">${femaleToilets} 개 (남성의 1.5배)</span>
        </div>
        <div>
          <span class="diag-stat-lbl">FOH 복도 설계폭</span>
          <span class="diag-stat-val">${recFohWidth} m 확보 권장</span>
        </div>
        <div>
          <span class="diag-stat-lbl">장애인 화장실</span>
          <span class="diag-stat-val">남/녀 분리 2개소</span>
        </div>
      </div>
      <p class="diag-note">인터미션(20분) 동안 850명의 관람객이 병목 없이 화장실을 이용할 수 있는 황금 비율입니다.</p>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  showToast(`[${name}] 법규 상충 진단 및 권장 스펙 산출 완료!`);
}


// Official Documents Generator Setup
function setupOfficialDocs() {
  const docButtons = document.querySelectorAll('.doc-nav-btn');
  docButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      docButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const docType = btn.getAttribute('data-doc');
      renderOfficialDoc(docType);
    });
  });

  const btnPrint = document.getElementById('btnPrintCurrentDoc');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => window.print());
  }

  const btnExportFull = document.getElementById('btnExportFullReport');
  if (btnExportFull) {
    btnExportFull.addEventListener('click', () => {
      window.print();
    });
  }

  const btnCopy = document.getElementById('btnCopyDocText');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const docPaper = document.getElementById('officialDocPaper');
      if (docPaper) {
        navigator.clipboard.writeText(docPaper.innerText).then(() => {
          showToast("📋 공문서 전체 텍스트가 클립보드에 복사되었습니다.");
        });
      }
    });
  }

  // Initial Document Render
  renderOfficialDoc('fire_dimming');
}

function renderOfficialDoc(docType) {
  const paper = document.getElementById('officialDocPaper');
  if (!paper) return;

  const today = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

  if (docType === 'fire_dimming') {
    paper.innerHTML = `
      <div class="doc-paper-header">
        <div><strong>문서번호:</strong> AVL-FIRE-2026-0884</div>
        <div style="text-align: right;"><strong>시행일자:</strong> ${today}</div>
      </div>
      <h1>공연장 객석유도등 연출용 감광 제어 사전협의 신청서</h1>
      
      <table class="doc-paper-table">
        <tr>
          <th style="width: 25%;">수 신</th>
          <td>관할 소방서장 (예방안전과 화재안전조사팀)</td>
        </tr>
        <tr>
          <th>신 청 인</th>
          <td>(주)아트베뉴 엔터프라이즈 / 건축주 및 총괄안전책임자</td>
        </tr>
        <tr>
          <th>대 상 처</th>
          <td>아트베뉴 그랜드 오페라·뮤지컬 시어터 (지상 1~3층 관람실)</td>
        </tr>
        <tr>
          <th>관련 법령</th>
          <td>소방시설 설치 및 관리에 관한 법률 시행령 / 유도등 화재안전기준(NFPC 302)</td>
        </tr>
      </table>

      <p><strong>1. 신청 배경 및 목적</strong></p>
      <p>
        당 시설은 고도의 몰입감이 요구되는 종합 공연시설로서, 공연 진행 중 무대 및 객석 암전 연출이 필수적입니다.
        이에 소방시설법에 따른 안전성을 100% 담보하면서 연출을 양립시키기 위해 자동 감광 제어 설비 설치 및 운영 방안을 사전 협의 신청합니다.
      </p>

      <p><strong>2. 객석유도등 연동 제어 및 안전 시스템 사양</strong></p>
      <table>
        <thead>
          <tr>
            <th>구 분</th>
            <th>평상시 (입·퇴장 시)</th>
            <th>공연 중 (암전 연출 시)</th>
            <th>비상/화재 발생 시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>유도등 조도</strong></td>
            <td>100% 정격 점등 (100 lx 이상)</td>
            <td>자동 감광 (0.8 ~ 1.0 lx 유지)</td>
            <td><strong>100% 강제 최대 점등 (Fail-Safe)</strong></td>
          </tr>
          <tr>
            <td><strong>제어 방식</strong></td>
            <td>메인 배전반 상시 전원</td>
            <td>조명 콘솔 신호 연동</td>
            <td><strong>자동화재탐지설비 연동 즉시 복구</strong></td>
          </tr>
        </tbody>
      </table>

      <p><strong>3. 안전 담보 조치 확약</strong></p>
      <p>
        가. 정전 또는 화재 신호 감지 시 0.05초 이내에 객석 및 통로 유도등이 100% 자동 점등되는 하드웨어 릴레이 바이패스 회로를 구축함.<br>
        나. 유도등에 검은 테이프 부착, 전원 차단기 임의 내림 등 불법 조작을 일체 금지하고 연 2회 소방시설 정밀점검을 이행함.
      </p>

      <div class="doc-stamp-area">
        <p>${today}</p>
        <p>신청인: (주)아트베뉴 엔터프라이즈 대표이사 (직인생략)</p>
        <p style="margin-top: 10px; color: #0F172A;"><strong>귀중 : 관할 소방서장 귀하</strong></p>
      </div>
    `;
  } else if (docType === 'fire_compartment') {
    paper.innerHTML = `
      <div class="doc-paper-header">
        <div><strong>문서번호:</strong> AVL-ARCH-2026-1022</div>
        <div style="text-align: right;"><strong>시행일자:</strong> ${today}</div>
      </div>
      <h1>공연장 관람실 방화구획 적용 완화 기술검토서</h1>
      
      <table>
        <tr>
          <th style="width: 25%;">수 신</th>
          <td>시·군·구청 건축허가과장 귀하</td>
        </tr>
        <tr>
          <th>건축물 명칭</th>
          <td>아트베뉴 문화예술복합센터 (지상 5층 / 지하 2층)</td>
        </tr>
        <tr>
          <th>완화 요청 부위</th>
          <td>지상 1~3층 관람실 대공간 (바닥면적 1,200㎡, 층고 14m)</td>
        </tr>
        <tr>
          <th>완화 근거 법령</th>
          <td>건축법 시행령 제46조 제2항 제1호 (공연장 등 용도상 방화구획 불가 구조)</td>
        </tr>
      </table>

      <p><strong>1. 방화구획 완화 신청 사유</strong></p>
      <p>
        본 건축물의 관람실은 무대와 850석 객석이 하나의 시야 및 음향 공간으로 통합되어야 하는 공연시설 고유의 특성상, 
        건축법 제46조 제1항에 따른 '1,000㎡ 이내 방화구획'을 물리적으로 설치할 수 없습니다. 이에 동조 제2항 완화 규정을 적용받고자 합니다.
      </p>

      <p><strong>2. 대체 보완 소방방재 엔지니어링 계획</strong></p>
      <table>
        <thead>
          <tr>
            <th>구 분</th>
            <th>법적 기본 기준</th>
            <th>본 프로젝트 대체 강화 스펙</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>스프링클러</strong></td>
            <td>일반 헤드 (방호반경 2.3m)</td>
            <td><strong>조기반응형 ESFR 헤드 (헤드 간격 1.7m 이내 초밀착)</strong></td>
          </tr>
          <tr>
            <td><strong>제연설비</strong></td>
            <td>자연 배연창 기준</td>
            <td><strong>무대 상부 및 관람석 기계 가압제연 (배풍량 55,000 CMH)</strong></td>
          </tr>
          <tr>
            <td><strong>내화마감재</strong></td>
            <td>준불연재 이상</td>
            <td><strong>벽체 및 천장 흡음재 불연재료(A등급) 100% 시공</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="doc-stamp-area">
        <p>${today}</p>
        <p>신청인(건축주): (주)아트베뉴 엔터프라이즈 대표이사</p>
        <p>설계자: (주)한국공연장종합건축사사무소 대표건축사</p>
      </div>
    `;
  } else if (docType === 'bf_checklist') {
    paper.innerHTML = `
      <div class="doc-paper-header">
        <div><strong>문서번호:</strong> AVL-BF-2026-0419</div>
        <div style="text-align: right;"><strong>시행일자:</strong> ${today}</div>
      </div>
      <h1>BF(장애물 없는 생활환경) 본인증 사전 적합성 체크리스트</h1>
      
      <table>
        <tr>
          <th style="width: 25%;">인증 신청 등급</th>
          <td><strong>BF 최우수 등급 (Excellent Grade)</strong></td>
        </tr>
        <tr>
          <th>인증 심사 기관</th>
          <td>한국장애인개발원 / 한국생산성본부인증원</td>
        </tr>
        <tr>
          <th>대상 시설</th>
          <td>아트베뉴 850석 다목적 대공연장</td>
        </tr>
      </table>

      <p><strong>■ 관람실 및 부속시설 세부 판정표</strong></p>
      <table>
        <thead>
          <tr>
            <th>심사 항목</th>
            <th>BF 최우수 지배기준</th>
            <th>설계 반영 현황</th>
            <th>판정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>휠체어 관람석 비율</strong></td>
            <td>총 관람석의 2.0% 이상</td>
            <td>850석 중 18석(2.1%) 골든존 배치</td>
            <td><strong>적합 (만점)</strong></td>
          </tr>
          <tr>
            <td><strong>사운드록 유효 회전반경</strong></td>
            <td>직경 1.5m 회전 공간 확보</td>
            <td>길이 3.8m / 폭 2.4m 도어 간섭 제로</td>
            <td><strong>적합</strong></td>
          </tr>
          <tr>
            <td><strong>관람실 출입문 유효폭</strong></td>
            <td>한 짝당 통과 순폭 0.9m+</td>
            <td>1.2m + 1.2m 양개 자동 도어</td>
            <td><strong>적합 (우수)</strong></td>
          </tr>
          <tr>
            <td><strong>무대 접근 경사로</strong></td>
            <td>기울기 1/12 이하 (참 1.5m)</td>
            <td>객석 좌측 1/15 완만 경사로 직결</td>
            <td><strong>적합</strong></td>
          </tr>
          <tr>
            <td><strong>장애인 전용 화장실</strong></td>
            <td>남녀 구분, 1.6m x 2.0m</td>
            <td>1.8m x 2.2m 자동 슬라이딩 도어</td>
            <td><strong>적합</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="doc-stamp-area">
        <p>${today}</p>
        <p>작성자: BF 인증 전문 총괄 엔지니어 (인)</p>
      </div>
    `;
  }
}


// Presets Selector Logic
function setupPresets() {
  const select = document.getElementById('venuePresetSelect');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    const nameInp = document.getElementById('inpVenueName');
    const seatsInp = document.getElementById('inpSeatCount');
    const areaInp = document.getElementById('inpFloorArea');

    if (val === 'medium') {
      if (nameInp) nameInp.value = "아트베뉴 중형 뮤지컬·다목적홀";
      if (seatsInp) seatsInp.value = 850;
      if (areaInp) areaInp.value = 1200;
    } else if (val === 'large') {
      if (nameInp) nameInp.value = "아트베뉴 그랜드 오페라하우스";
      if (seatsInp) seatsInp.value = 1800;
      if (areaInp) areaInp.value = 2800;
    } else if (val === 'small') {
      if (nameInp) nameInp.value = "아트베뉴 블랙박스 씨어터";
      if (seatsInp) seatsInp.value = 300;
      if (areaInp) areaInp.value = 450;
    }

    runVenueDiagnosis();
    showToast(`모델 프리셋 [${select.options[select.selectedIndex].text}] 이 로드되었습니다.`);
  });
}


// ROI Modal Logic
function setupRoiModal() {
  const modal = document.getElementById('roiModalOverlay');
  const btnOpen = document.getElementById('btnOpenRoiModal');
  const btnClose = document.getElementById('btnCloseRoiModal');
  const btnConfirm = document.getElementById('btnConfirmRoi');

  if (btnOpen && modal) {
    btnOpen.addEventListener('click', () => modal.classList.add('active'));
  }
  if (btnClose && modal) {
    btnClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  if (btnConfirm && modal) {
    btnConfirm.addEventListener('click', () => {
      modal.classList.remove('active');
      showToast("확인되었습니다. 법규 상충 없는 설계를 계속 진행합니다.");
    });
  }

  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}


// Toast Notification Helper
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="info" class="text-indigo"></i><span>${message}</span>`;
  container.appendChild(toast);

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.animation = 'slideInToast 0.3s ease-in reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// =============================================================================
// 7. AI BLUEPRINT LEGAL SCANNER & DETAILED BASIS ENGINE
// =============================================================================

const BLUEPRINT_DATASET = {
  "medium-musical": {
    name: "중형 뮤지컬홀 1F 평면·피난계획도 (850석)",
    objCount: "48개 구획 / 12개 출구 / 850석",
    violationCount: "⚠️ 3건 위반 (반려 위험)",
    warningCount: "⚡ 2건 상충 (지배기준 적용)",
    riskScore: "74% (위험)",
    pins: [
      {
        id: "pin-1",
        code: "DEFECT-01",
        title: "관람실 주출구 사운드록(방음전실) 유효폭 협소 및 안여닫이 상충",
        category: "egress",
        level: "danger",
        levelText: "⚠️ 심각 위반 (건축허가 반려 사유)",
        x: 48,
        y: 68,
        partName: "관람실 주출입구 사운드록(Sound Lock Chamber)",
        measured: "유효폭 1,100mm / 내측 도어 안여닫이 설치",
        buildingLaw: "1,500mm 이상 / 피난방향(바깥여닫이) 개폐",
        bfStandard: "유효폭 1,200mm / 회전반경 1,400mm 확보",
        dominant: "개소당 1,500mm 이상 & 양개형 바깥여닫이 (건축피난규칙 제10조 지배)",
        problemDesc: "도면상 사운드록 내부 통로폭이 1.1m로 설계되어 화재 시 병목 참사 유발 및 피난 유효너비 1.5m 기준을 명백히 위반함. 또한 내측 도어가 관람실 내부로 열리도록 표기되어 패닉 시 개폐 불능 위험 발생.",
        legalBasisList: [
          {
            lawName: "건축물의 피난·방화구조 등의 기준에 관한 규칙",
            clauseName: "제10조 (관람석 등으로부터의 출구의 설치)",
            text: "문화 및 집회시설(공연장)의 관람실 출구 유효너비는 개소당 1.5미터 이상으로 하여야 하며, 출입문은 안여닫이로 하여서는 아니 된다(피난방향 개폐 의무).",
            penalty: "위반 시 건축법 제11조에 따른 건축허가 반려 및 제79조 시정명령 대상.",
            dominant: true
          },
          {
            lawName: "소방시설 설치 및 관리에 관한 법률 / 화재안전성능기준(NFPC 303)",
            clauseName: "제5조 (객석유도등 및 피난통로 유효폭)",
            text: "공연장의 피난통로 및 전실은 관람객의 일시적 피난 지체(Queue Delay)가 발생하지 않도록 유효통로 폭을 건축법 기준 이상으로 상시 유지하여야 함.",
            penalty: "소방시설 완비증명서 미발급 및 사용승인 불가 처분.",
            dominant: false
          },
          {
            lawName: "장애물 없는 생활환경(BF) 인증 심사기준",
            clauseName: "2.1.3 (출입문 전후면 활동공간 및 개폐 방향)",
            text: "출입문 전후면에는 휠체어 사용자가 정지하여 문을 여닫을 수 있는 직경 1.4m 이상의 활동공간을 연속적으로 확보하여야 함.",
            penalty: "BF인증 본인증 점수 감점 (미달 시 공공 공연장 사업 취소).",
            dominant: false
          }
        ],
        solutionAdvice: "사운드록 내측 벽체를 복도측으로 450mm 확장하여 순유효폭 1,550mm를 확보하십시오. 내외측 2중 차음도어는 모두 피난방향(바깥여닫이)으로 변경하고, 상시개방형 전자도어릴리즈(소방 화재신호 시 자동 쇄정 해제)를 적용하십시오.",
        authorityTip: "관할 소방서 소방동의 심의 시 사운드록 2중 도어가 피난거리 산정에 포함되는지 질의가 잦으므로, 사운드록 통과 거리를 포함한 피난거리 도면을 사전 첨부하여 제출하십시오."
      },
      {
        id: "pin-2",
        code: "DEFECT-02",
        title: "FOH 주복도 폭 소화전·기둥 돌출로 인한 유효너비 미달",
        category: "egress",
        level: "danger",
        levelText: "⚠️ 심각 위반 (소방동의 반려)",
        x: 50,
        y: 86,
        partName: "FOH(Front of House) 로비 연결 주복도",
        measured: "도면 중심선 2,400mm / 옥내소화전 돌출 후 순유효폭 2,050mm",
        buildingLaw: "양옆 거실 복도 순유효폭 2,400mm 이상",
        bfStandard: "유효폭 1,800mm 이상 (휠체어 교행)",
        dominant: "장애물 제외 순유효폭 2,400mm 이상 (건축법 시행령 제15조의2 지배)",
        problemDesc: "도면상 중심선 치수(Wall Center)는 2.4m이나, 옥내소화전함(돌출 250mm)과 흡음 마감재(100mm)가 시공될 경우 실제 피난 유효폭이 2.05m로 축소되어 건축법상 2.4m 규정을 위반함.",
        legalBasisList: [
          {
            lawName: "건축물의 피난·방화구조 등의 기준에 관한 규칙",
            clauseName: "제15조의2 (복도의 너비 및 설치기준)",
            text: "공연장의 관람실 바닥면적의 합계가 1,000㎡ 이상인 층의 복도로서 양옆에 거실이 있는 복도의 너비는 장애물이 없는 상태에서 2.4미터 이상이어야 한다.",
            penalty: "준공 시 사용승인(허가) 반려 및 소방 감리보고서 부적합 판정.",
            dominant: true
          },
          {
            lawName: "소방시설 설치 및 관리에 관한 법률 시행령",
            clauseName: "별표 4 (소화전함의 설치기준)",
            text: "옥내소화전설비의 함은 피난통로의 유효너비를 침해하지 않도록 매립형(Recessed)으로 설치하거나 벽면과 평면을 이루도록 시공할 것.",
            penalty: "시정명령 및 소방시설법 제53조에 따른 300만원 이하 과태료.",
            dominant: false
          }
        ],
        solutionAdvice: "옥내소화전함을 100% 매립형(Wall Recessed Type)으로 변경 표기하고, 벽체 중심선 치수를 2,400mm에서 최소 2,800mm(안전치수 3,000mm)로 확대 수정하여 마감재 시공 후에도 2.4m 클리어를 보장하십시오.",
        authorityTip: "지자체 건축과 허가권자는 '실측 순유효너비(Clear Width)' 기준 심사를 진행하므로, 도면에 '마감면 기준 유효폭 2,400mm 이상 확보' 주기를 명기하십시오."
      },
      {
        id: "pin-3",
        code: "DEFECT-03",
        title: "무대부와 관람석 사이 방화막(Proscenium Fire Curtain) 표기 누락",
        category: "fire",
        level: "danger",
        levelText: "⚠️ 법정 의무 누락 (공연법·소방법 중대결함)",
        x: 50,
        y: 20,
        partName: "무대부 프로세니엄 아치(Proscenium Arch) 경계부",
        measured: "방화막(무대방화셔터) 미표기 / 일반 커튼레일만 표기됨",
        buildingLaw: "무대부 바닥면적 300㎡ 이상 시 방화막 설치 의무",
        bfStandard: "해당 없음",
        dominant: "내화 1시간 이상 무대 방화막 설치 의무 (건축법 시행령 제46조 지배)",
        problemDesc: "본 공연장은 무대부 면적이 450㎡(300석 초과)이므로 화재 시 무대에서 발생한 연기·화염이 객석으로 확산되는 것을 차단하는 방화막(방화셔터 및 일제살수 드렌처설비)이 법정 의무설비이나 도면상 완전히 누락됨.",
        legalBasisList: [
          {
            lawName: "건축법 시행령",
            clauseName: "제46조 (방화구획 등의 설치)",
            text: "공연장의 무대부로서 바닥면적이 300제곱미터 이상인 것은 무대부와 관람석 사이에 내화구조의 방화막 또는 국토교통부령이 정하는 기준에 적합한 방화구획을 설치하여야 한다.",
            penalty: "건축허가 소방동의 불가 처분 및 공연장 등록 취소 사유.",
            dominant: true
          },
          {
            lawName: "공연법",
            clauseName: "제12조 (공연장 무대시설 등의 안전진단 및 방화기준)",
            text: "공연장의 무대시설은 화재 등 재난 발생 시 관람객의 안전한 피난을 보장할 수 있는 방화막 및 제연설비를 갖추어야 함.",
            penalty: "공연장 폐쇄명령 및 1년 이하의 징역 또는 1천만원 이하의 벌금.",
            dominant: false
          }
        ],
        solutionAdvice: "프로세니엄 상부에 분당 4.5m 이상 하강 가능한 수밀성 내화 방화막(드렌처 헤드 일체형) 상세도를 추가하고, 무대 상부 연돌효과 억제를 위한 배연창(무대면적의 1/10 이상) 설계를 반영하십시오.",
        authorityTip: "무대 방화막은 무대기계 감리 및 소방 감리 교차 검사 항목이므로 전기 연동 제어반(소방수신반 인터페이스) 계통도를 도면에 반드시 첨부하십시오."
      },
      {
        id: "pin-4",
        code: "DEFECT-04",
        title: "BF 장애인 휠체어 관람석 단차 및 시야각 차폐 문제",
        category: "barrierfree",
        level: "warning",
        levelText: "⚡ 주의/상충 (BF 본인증 반려 위험)",
        x: 32,
        y: 44,
        partName: "객석 C열 좌측 휠체어 관람석 구획",
        measured: "단차 35mm 계단 구간 뒤 배치 / 휠체어석 폭 850mm",
        buildingLaw: "전체 좌석의 1% 이상 설치",
        bfStandard: "1석당 폭 900mm x 깊이 1,400mm 이상 / 단차 0mm / 시야각 확보",
        dominant: "단차 제로 & 폭 900x1,400mm 이상 (BF인증 최우수 지배)",
        problemDesc: "휠체어 관람석으로 지정된 구획의 진입로에 35mm 바닥 단차가 존재하여 휠체어 단독 접근이 불가능하며, 1석당 너비가 850mm로 설계되어 BF 최우수 기준(900mm 이상)에 미달함.",
        legalBasisList: [
          {
            lawName: "장애인·노인·임산부 등의 편의증진 보장에 관한 법률 시행령",
            clauseName: "별표 2 (공연장 관람석의 설치기준)",
            text: "공연장의 관람석은 장애인등이 이용하기 편리한 위치에 전체 관람석 수의 1퍼센트 이상을 설치하여야 하며, 출입구로부터 단차 없는 경사로로 연결되어야 한다.",
            penalty: "편의증진법 제23조에 따른 500만원 이하 이행강제금 부과.",
            dominant: false
          },
          {
            lawName: "장애물 없는 생활환경(BF) 인증 심사기준",
            clauseName: "3.2.1 (장애인 관람석의 구조 및 시야각)",
            text: "휠체어 관람석은 1석당 유효너비 0.9m 이상, 깊이 1.4m 이상이어야 하며, 앞좌석 관람객의 기립 시에도 무대 전면이 보이는 시야각을 확보하여야 함.",
            penalty: "BF 인증 등급 하락(우수 이하 전락) 또는 인증 취소.",
            dominant: true
          }
        ],
        solutionAdvice: "해당 열의 진입로를 완경사(1/18 이하) 무단차 플랫 슬래브로 레벨을 재조정하고, 휠체어석 1구획당 치수를 1,000mm x 1,500mm로 여유 있게 확대하여 동반자석(Companion Seat)과 1:1 나란히 연접 배치하십시오.",
        authorityTip: "BF 본인증 실사위원은 실측 휠체어 진입 시뮬레이션을 현장에서 직접 수행하므로, 바닥 카펫 마감 후에도 0mm 단차가 유지되도록 시공 상세도를 반영하십시오."
      },
      {
        id: "pin-5",
        code: "DEFECT-05",
        title: "우측 비상계단 출입 방화문 피난방향 양개도어 유효폭 상충",
        category: "egress",
        level: "warning",
        levelText: "⚡ 주의/상충 (건축법 vs BF 경합)",
        x: 85,
        y: 50,
        partName: "우측 2호 직통 피난계단실 출입구",
        measured: "양개형 도어 (한 짝 750mm + 750mm = 총 1,500mm)",
        buildingLaw: "개소당 유효너비 1.5m 이상 (충족)",
        bfStandard: "상시 개폐되는 주 유효 통과폭 1짝 900mm 이상 (미달)",
        dominant: "주 사용문 1짝 유효폭 900mm 이상 & 개구부 1,800mm 이상 (BF 지배)",
        problemDesc: "건축법은 개소당 총 유효너비 1.5m만 요구하므로 750+750mm 양개도어로 설계되었으나, BF 심사 시 한 짝만 열렸을 때 통과너비가 750mm에 불과하여 휠체어(최소 900mm)가 통과하지 못해 BF 인증 심사에서 불합격 처리됨.",
        legalBasisList: [
          {
            lawName: "장애물 없는 생활환경(BF) 인증 심사기준",
            clauseName: "2.1.2 (출입문의 형태 및 유효폭)",
            text: "양개도어(두 짝 문)의 경우, 평상시 주로 열리는 한 짝의 유효 통과너비가 0.9미터 이상이어야 한다.",
            penalty: "BF 인증 필수조건 미충족으로 본인증 반려.",
            dominant: true
          },
          {
            lawName: "건축물의 피난·방화구조 등의 기준에 관한 규칙",
            clauseName: "제9조 (피난계단 및 특별피난계단의 구조)",
            text: "건축물의 내부에서 계단실로 통하는 출입구의 유효너비는 0.9미터 이상으로 하고 피난방향으로 열릴 수 있는 갑종방화문으로 설치할 것.",
            dominant: false
          }
        ],
        solutionAdvice: "750mm+750mm 균등 양개도어를 비대칭 양개도어(주 사용문 1,000mm + 보조문 800mm = 총 1,800mm 개구부)로 변경 설계하여 건축법(총폭 1.5m 충족)과 BF인증(한 짝 0.9m 충족)을 동시 해결하십시오.",
        authorityTip: "인허가 도면 표기 시 '비대칭 양개 방화문(주사용 1,000mm)'으로 주석을 기재하여 소방과 및 BF인증 심사관이 추가 보완요구 없이 1회에 승인하도록 조치하십시오."
      }
    ]
  },
  "large-opera": {
    name: "1,800석 그랜드 오페라하우스 피난·방화계획도",
    objCount: "72개 구획 / 24개 출구 / 1,800석",
    violationCount: "⚠️ 4건 위반 (소방동의 반려)",
    warningCount: "⚡ 3건 상충",
    riskScore: "86% (초고위험)",
    pins: [
      {
        id: "pin-1",
        code: "DEFECT-01",
        title: "무대부 개방형 스프링클러 헤드 수평거리 1.7m 초과 위반",
        category: "fire",
        level: "danger",
        levelText: "⚠️ 심각 위반 (소방설비 기술기준 위반)",
        x: 50,
        y: 15,
        partName: "상부 무대 플라이갤러리(Fly Gallery) 소화설비",
        measured: "헤드 간격 2.8m (수평거리 2.0m)",
        buildingLaw: "해당 없음",
        bfStandard: "해당 없음",
        dominant: "무대부 스프링클러 헤드 수평거리 1.7m 이하 (소방시설법 NFPC 103 지배)",
        problemDesc: "오페라하우스 무대부는 대량의 가연성 무대세트가 적재되는 특수장소로서 스프링클러 헤드 배치 수평거리가 1.7m 이하여야 하나, 도면상 2.0m로 과다 이격되어 화재 시 초기 진화 실패 위험이 큼.",
        legalBasisList: [
          {
            lawName: "스프링클러설비의 화재안전성능기준(NFPC 103)",
            clauseName: "제4조 (헤드의 배치거리)",
            text: "무대부 또는 특수가연물을 저장·취급하는 장소에 있어서는 스프링클러헤드의 수평거리를 1.7미터 이하로 유지하여야 한다.",
            penalty: "소방 완비증명서 부적합 및 소방준공 불가.",
            dominant: true
          }
        ],
        solutionAdvice: "무대 상부 및 그리드아이언 하부에 고온형(121℃) 개방형 스프링클러 헤드를 정방형 2.2m 간격(수평거리 1.55m)으로 재배치하고, 무대 측면 드렌처설비 연동 배관을 보강하십시오.",
        authorityTip: "소방성능위주설계(PBD) 심의 대상 건축물이므로 화재 시뮬레이션(FDS) 결과보고서에 1.7m 헤드 배치 시 연기 하강 저지 데이터를 첨부하십시오."
      }
    ]
  },
  "small-blackbox": {
    name: "300석 소극장·블랙박스 씨어터 BF 도면",
    objCount: "22개 구획 / 6개 출구 / 300석",
    violationCount: "⚠️ 2건 위반",
    warningCount: "⚡ 1건 상충",
    riskScore: "52% (보통)",
    pins: [
      {
        id: "pin-1",
        code: "DEFECT-01",
        title: "소극장 주출구 유효너비 1.2m로 건축법 기준 미달",
        category: "egress",
        level: "danger",
        levelText: "⚠️ 심각 위반 (건축피난규칙 위반)",
        x: 50,
        y: 75,
        partName: "블랙박스 메인 출입구",
        measured: "유효너비 1,200mm",
        buildingLaw: "공연장 출구 개소당 1,500mm 이상",
        bfStandard: "유효폭 900mm 이상",
        dominant: "개소당 1,500mm 이상 (건축물의 피난방화규칙 제10조 지배)",
        problemDesc: "300석 소극장의 출구를 1.2m로 계획하였으나 건축법상 공연장 관람실 출구는 규모에 관계없이 개소당 1.5m 이상이어야 하므로 명백한 위반임.",
        legalBasisList: [
          {
            lawName: "건축물의 피난·방화구조 등의 기준에 관한 규칙",
            clauseName: "제10조 (관람실 출구의 유효너비)",
            text: "공연장의 관람실 출구는 개소당 1.5미터 이상으로 설치하여야 함.",
            dominant: true
          }
        ],
        solutionAdvice: "출입문 개구부를 1,600mm로 확장하여 순유효폭 1,500mm를 확보하십시오.",
        authorityTip: "소규모 공연장이라도 출구 1.5m 규정은 예외가 없으므로 지자체 사전협의 전 즉시 수정 도면을 제출하십시오."
      }
    ]
  },
  "remodel-hall": {
    name: "노후 문화예술회관 리모델링 피난도면",
    objCount: "35개 구획 / 8개 출구 / 600석",
    violationCount: "⚠️ 3건 위반",
    warningCount: "⚡ 2건 상충",
    riskScore: "68% (위험)",
    pins: [
      {
        id: "pin-1",
        code: "DEFECT-01",
        title: "리모델링 사운드록 통과 시 최장 보행거리 30m 초과",
        category: "egress",
        level: "danger",
        levelText: "⚠️ 심각 위반 (피난 보행거리 초과)",
        x: 25,
        y: 60,
        partName: "좌측 후면 객석 피난경로",
        measured: "피난계단까지 보행거리 38.5m",
        buildingLaw: "직통계단까지 보행거리 30m 이하 (내화구조 50m)",
        bfStandard: "해당 없음",
        dominant: "보행거리 30m 이하 (건축법 시행령 제34조 지배)",
        problemDesc: "방음벽 및 사운드록 굴절 통로 추가로 인해 객석 최외곽에서 직통계단까지의 실제 보행거리가 38.5m로 늘어나 법정 허용치를 초과함.",
        legalBasisList: [
          {
            lawName: "건축법 시행령",
            clauseName: "제34조 (직통계단의 설치 및 피난거리)",
            text: "공연장의 거실 각 부분으로부터 보행거리 30미터 이내에 직통계단을 설치하여야 한다.",
            dominant: true
          }
        ],
        solutionAdvice: "좌측 측면에 옥외 피난발코니 또는 제2직통계단을 신설하여 최대 보행거리를 24m로 단축하십시오.",
        authorityTip: "리모델링의 경우 기존 구조체 철거 불가 시 소방서와 '스프링클러 전구역 설치에 따른 피난거리 1.5배 완화 적용' 심의를 신청하십시오."
      }
    ]
  }
};

class BlueprintScannerApp {
  constructor() {
    this.currentSampleKey = "medium-musical";
    this.currentSelectedPinId = "pin-1";
    this.zoomScale = 1.0;
    this.svgElement = document.getElementById('blueprintSvg');
    this.pinsOverlay = document.getElementById('blueprintPinsOverlay');
    this.stage = document.getElementById('blueprintStage');
    this.activeLayers = {
      violations: true,
      dimensions: true,
      bf: true,
      fire: true
    };
  }

  init() {
    this.bindEvents();
    this.loadSample(this.currentSampleKey);
  }

  bindEvents() {
    // Sample blueprint buttons
    const sampleChips = document.querySelectorAll('.sample-chip');
    sampleChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        sampleChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const key = chip.getAttribute('data-sample');
        this.loadSample(key);
      });
    });

    // File Upload handling
    const fileInput = document.getElementById('blueprintFileInput');
    const btnBrowse = document.getElementById('btnBrowseBlueprint');
    const dropzone = document.getElementById('blueprintDropzone');

    if (btnBrowse && fileInput) {
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });
    }

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--accent-primary)';
      });
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = 'var(--border-medium)';
      });
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--border-medium)';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.handleFileUpload(e.dataTransfer.files[0]);
        }
      });
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleFileUpload(e.target.files[0]);
        }
      });
    }

    // Zoom & Reset Controls
    const btnZoomIn = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const btnZoomReset = document.getElementById('btnZoomReset');

    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', () => {
        this.zoomScale = Math.min(this.zoomScale + 0.15, 2.5);
        this.applyZoom();
      });
    }
    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', () => {
        this.zoomScale = Math.max(this.zoomScale - 0.15, 0.6);
        this.applyZoom();
      });
    }
    if (btnZoomReset) {
      btnZoomReset.addEventListener('click', () => {
        this.zoomScale = 1.0;
        this.applyZoom();
      });
    }

    // Layer Toggles
    const chkLayerViolations = document.getElementById('chkLayerViolations');
    const chkLayerDimensions = document.getElementById('chkLayerDimensions');
    const chkLayerBF = document.getElementById('chkLayerBF');
    const chkLayerFire = document.getElementById('chkLayerFire');

    if (chkLayerViolations) {
      chkLayerViolations.addEventListener('change', (e) => {
        this.activeLayers.violations = e.target.checked;
        if (this.pinsOverlay) this.pinsOverlay.style.display = e.target.checked ? 'block' : 'none';
      });
    }
    if (chkLayerDimensions) {
      chkLayerDimensions.addEventListener('change', (e) => {
        this.activeLayers.dimensions = e.target.checked;
        this.toggleSvgLayer('layer-dimensions', e.target.checked);
      });
    }
    if (chkLayerBF) {
      chkLayerBF.addEventListener('change', (e) => {
        this.activeLayers.bf = e.target.checked;
        this.toggleSvgLayer('layer-bf', e.target.checked);
      });
    }
    if (chkLayerFire) {
      chkLayerFire.addEventListener('change', (e) => {
        this.activeLayers.fire = e.target.checked;
        this.toggleSvgLayer('layer-fire', e.target.checked);
      });
    }

    // Export Audit Report Button
    const btnExportAudit = document.getElementById('btnExportBlueprintAudit');
    if (btnExportAudit) {
      btnExportAudit.addEventListener('click', () => this.exportBlueprintAuditReport());
    }
  }

  applyZoom() {
    if (this.stage) {
      this.stage.style.transform = `scale(${this.zoomScale})`;
    }
  }

  toggleSvgLayer(layerClass, isVisible) {
    const elements = document.querySelectorAll(`.${layerClass}`);
    elements.forEach(el => {
      el.style.display = isVisible ? 'inline' : 'none';
    });
  }

  handleFileUpload(file) {
    showToast(`도면 파일 [${file.name}] 을 분석 중입니다... AI Vision 엔진 가동`);
    
    // Simulate AI Vision Scan
    const titleEl = document.getElementById('currentViewerDocTitle');
    if (titleEl) titleEl.innerText = `[업로드 도면 분석] ${file.name}`;

    setTimeout(() => {
      this.loadSample("medium-musical");
      showToast(`도면 [${file.name}] 분석 완료: 3건의 법률 위반 및 2건의 상충이 검출되었습니다.`);
    }, 1200);
  }

  loadSample(sampleKey) {
    const data = BLUEPRINT_DATASET[sampleKey];
    if (!data) return;

    this.currentSampleKey = sampleKey;

    // Update Summary Header Metrics
    const nameEl = document.getElementById('blueprintTargetName');
    const objEl = document.getElementById('blueprintObjCount');
    const violEl = document.getElementById('blueprintViolationCount');
    const warnEl = document.getElementById('blueprintWarningCount');
    const riskEl = document.getElementById('blueprintRiskScore');
    const titleEl = document.getElementById('currentViewerDocTitle');

    if (nameEl) nameEl.innerText = data.name;
    if (objEl) objEl.innerText = data.objCount;
    if (violEl) violEl.innerText = data.violationCount;
    if (warnEl) warnEl.innerText = data.warningCount;
    if (riskEl) riskEl.innerText = data.riskScore;
    if (titleEl) titleEl.innerText = data.name;

    // Render Architectural Blueprint SVG Drawing
    this.renderSvgBlueprint();

    // Render Interactive Pins Overlay
    this.renderPinpoints(data.pins);

    // Select default pin
    if (data.pins && data.pins.length > 0) {
      this.selectPin(data.pins[0].id);
    }
  }

  renderSvgBlueprint() {
    if (!this.svgElement) return;

    // Rich Architectural CAD Drawing SVG
    this.svgElement.innerHTML = `
      <defs>
        <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" stroke-width="0.7"/>
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4F46E5"/>
        </marker>
        <marker id="dangerArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#E11D48"/>
        </marker>
      </defs>

      <!-- Background CAD Grid -->
      <rect width="1000" height="650" fill="url(#gridPattern)" />

      <!-- Outer Building Boundary Walls -->
      <rect x="50" y="40" width="900" height="560" fill="#FFFFFF" stroke="#0F172A" stroke-width="4" rx="6" />

      <!-- ================= 1. 무대부 (Stage Area) ================= -->
      <rect x="180" y="60" width="640" height="150" fill="#F8FAFC" stroke="#1E293B" stroke-width="2.5" />
      <text x="500" y="115" font-family="Inter, Pretendard" font-size="16" font-weight="800" fill="#0F172A" text-anchor="middle">MAIN PROSCENIUM STAGE (무대부 450㎡)</text>
      <text x="500" y="140" font-family="Inter, Pretendard" font-size="12" font-weight="600" fill="#64748B" text-anchor="middle">바닥면적 300㎡ 초과 대상</text>

      <!-- 무대 방화구획선 (Fire Barrier Line) -->
      <g class="layer-fire">
        <line x1="180" y1="210" x2="820" y2="210" stroke="#E11D48" stroke-width="3.5" stroke-dasharray="8,5" />
        <text x="500" y="202" font-family="Inter, Pretendard" font-size="11" font-weight="700" fill="#E11D48" text-anchor="middle">⚠️ 무대 방화막(Fire Curtain) 법정 의무선 [누락 결함 부위]</text>
      </g>

      <!-- 무대 좌우측 포켓 및 준비실 -->
      <rect x="70" y="60" width="110" height="150" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5" />
      <text x="125" y="140" font-size="12" font-weight="600" fill="#475569" text-anchor="middle">무대하부대기실</text>
      <rect x="820" y="60" width="110" height="150" fill="#F1F5F9" stroke="#94A3B8" stroke-width="1.5" />
      <text x="875" y="140" font-size="12" font-weight="600" fill="#475569" text-anchor="middle">조명·음향반입구</text>

      <!-- ================= 2. 관람실 좌석 (Audience Seating) ================= -->
      <rect x="180" y="240" width="640" height="230" fill="#FFFFFF" stroke="#334155" stroke-width="2" />
      <text x="500" y="260" font-family="Inter, Pretendard" font-size="14" font-weight="700" fill="#334155" text-anchor="middle">MAIN AUDITORIUM (관람실 850석)</text>

      <!-- 좌석 열 패턴 -->
      ${Array.from({ length: 7 }).map((_, i) => `
        <line x1="220" y1="${280 + i * 22}" x2="780" y2="${280 + i * 22}" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="5,4" />
      `).join('')}

      <!-- 좌석 통로 (Aisles) -->
      <rect x="475" y="270" width="50" height="160" fill="rgba(79, 70, 229, 0.05)" stroke="#4F46E5" stroke-width="1" stroke-dasharray="3,3" />
      <text x="500" y="355" font-size="10" font-weight="600" fill="#4F46E5" text-anchor="middle">중앙통로</text>

      <!-- 휠체어석 표시 구획 (BF Zone) -->
      <g class="layer-bf">
        <rect x="220" y="320" width="70" height="50" fill="rgba(79, 70, 229, 0.12)" stroke="#4F46E5" stroke-width="2" rx="4" />
        <text x="255" y="342" font-size="11" font-weight="800" fill="#4F46E5" text-anchor="middle">♿ 휠체어석</text>
        <text x="255" y="358" font-size="9" font-weight="600" fill="#E11D48" text-anchor="middle">단차35mm위반</text>
      </g>

      <!-- ================= 3. 관람실 출구 & 사운드록 전실 (Sound Lock) ================= -->
      <!-- 좌측 사운드록 -->
      <rect x="220" y="470" width="110" height="70" fill="#F8FAFC" stroke="#0F172A" stroke-width="2" />
      <text x="275" y="500" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">좌측 사운드록</text>
      <text x="275" y="518" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">W: 1.5m 충족</text>

      <!-- 중앙 주출구 사운드록 (위반 부위) -->
      <rect x="440" y="470" width="120" height="70" fill="#FFF1F2" stroke="#E11D48" stroke-width="2.5" />
      <text x="500" y="495" font-size="12" font-weight="800" fill="#E11D48" text-anchor="middle">메인 사운드록 전실</text>
      <text x="500" y="515" font-size="10" font-weight="700" fill="#E11D48" text-anchor="middle">⚠️ 유효폭 1.1m (위반)</text>
      <!-- Door Swing Indicators -->
      <path d="M 460 470 A 30 30 0 0 0 490 470" fill="none" stroke="#E11D48" stroke-width="1.5" stroke-dasharray="3,2" />
      <path d="M 510 540 A 30 30 0 0 0 540 540" fill="none" stroke="#E11D48" stroke-width="1.5" stroke-dasharray="3,2" />

      <!-- 우측 사운드록 -->
      <rect x="670" y="470" width="110" height="70" fill="#F8FAFC" stroke="#0F172A" stroke-width="2" />
      <text x="725" y="500" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">우측 사운드록</text>
      <text x="725" y="518" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">W: 1.5m 충족</text>

      <!-- ================= 4. FOH 메인 로비 복도 (Main FOH Lobby Corridor) ================= -->
      <rect x="70" y="540" width="860" height="50" fill="#F1F5F9" stroke="#334155" stroke-width="2" />
      <text x="500" y="570" font-family="Inter, Pretendard" font-size="13" font-weight="700" fill="#1E293B" text-anchor="middle">FOH MAIN LOBBY & FOYER (관람객 주 로비 복도)</text>

      <!-- 옥내소화전 돌출 부위 (FOH 복도 위반) -->
      <rect x="420" y="540" width="40" height="15" fill="#E11D48" stroke="#FFFFFF" stroke-width="1" />
      <text x="440" y="552" font-size="8" font-weight="700" fill="#FFFFFF" text-anchor="middle">소화전</text>

      <!-- ================= 5. 직통 피난계단실 (Exit Stairwells) ================= -->
      <!-- 좌측 1호 피난계단 -->
      <rect x="70" y="360" width="80" height="150" fill="#ECFDF5" stroke="#059669" stroke-width="2" />
      <text x="110" y="435" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">1호 피난계단</text>
      <text x="110" y="455" font-size="10" font-weight="600" fill="#059669" text-anchor="middle">유효폭 1.2m ✅</text>

      <!-- 우측 2호 피난계단 (상충 부위) -->
      <rect x="850" y="360" width="80" height="150" fill="#FFFBEB" stroke="#D97706" stroke-width="2" />
      <text x="890" y="435" font-size="12" font-weight="700" fill="#D97706" text-anchor="middle">2호 피난계단</text>
      <text x="890" y="455" font-size="10" font-weight="700" fill="#D97706" text-anchor="middle">양개도어 상충 ⚡</text>

      <!-- ================= 6. 치수선 및 피난 유도선 레이어 ================= -->
      <g class="layer-dimensions">
        <!-- FOH 복도폭 치수선 -->
        <line x1="50" y1="595" x2="950" y2="595" stroke="#4F46E5" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
        <text x="500" y="612" font-family="JetBrains Mono" font-size="11" font-weight="700" fill="#4F46E5" text-anchor="middle">LOBBY CLEAR WIDTH: 2,050mm (법정 기준 2,400mm 미달)</text>
      </g>
    `;
  }

  renderPinpoints(pins) {
    if (!this.pinsOverlay) return;

    this.pinsOverlay.innerHTML = '';

    pins.forEach((pin, idx) => {
      const pinBtn = document.createElement('button');
      pinBtn.className = `blueprint-pin-btn pin-${pin.level} ${pin.id === this.currentSelectedPinId ? 'selected' : ''}`;
      pinBtn.style.left = `${pin.x}%`;
      pinBtn.style.top = `${pin.y}%`;
      pinBtn.setAttribute('data-pin-id', pin.id);

      const iconName = pin.level === 'danger' ? 'alert-triangle' : (pin.level === 'warning' ? 'alert-circle' : 'check-circle-2');
      pinBtn.innerHTML = `<i data-lucide="${iconName}"></i> <span>[${idx + 1}] ${pin.code}</span>`;

      pinBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectPin(pin.id);
      });

      this.pinsOverlay.appendChild(pinBtn);
    });

    if (window.lucide) lucide.createIcons();
  }

  selectPin(pinId) {
    this.currentSelectedPinId = pinId;

    // Update pinpoint selection visual state
    const allPins = document.querySelectorAll('.blueprint-pin-btn');
    allPins.forEach(btn => {
      if (btn.getAttribute('data-pin-id') === pinId) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });

    // Find pin data
    const currentSample = BLUEPRINT_DATASET[this.currentSampleKey];
    if (!currentSample) return;

    const pinData = currentSample.pins.find(p => p.id === pinId);
    if (pinData) {
      this.renderPinDetail(pinData);
    }
  }

  renderPinDetail(pin) {
    const loadingState = document.getElementById('panelLoadingState');
    const contentEl = document.getElementById('legalDetailContent');

    if (loadingState) loadingState.style.display = 'none';
    if (!contentEl) return;
    contentEl.style.display = 'flex';

    contentEl.innerHTML = `
      <!-- Header Box -->
      <div class="detail-header-box">
        <div class="detail-tags-row">
          <span class="pin-code-badge">${pin.code}</span>
          <span class="defect-level-badge ${pin.level}">${pin.levelText}</span>
          <span class="tab-count-badge">${pin.partName}</span>
        </div>
        <h3 class="detail-part-title">${pin.title}</h3>
        <p class="detail-problem-desc"><i data-lucide="alert-octagon"></i> ${pin.problemDesc}</p>
      </div>

      <!-- 1:1 Dimension Comparison Box -->
      <div class="dim-comparison-table-box">
        <div class="dim-table-header">
          <span>검토 항목</span>
          <span>도면 실측치수</span>
          <span>건축법/소방법</span>
          <span>최종 지배기준</span>
        </div>
        <div class="dim-table-row">
          <span style="font-weight: 700;">${pin.partName}</span>
          <span class="dim-val-measured">${pin.measured}</span>
          <span class="dim-val-standard">${pin.buildingLaw}</span>
          <span class="dim-val-dominant">${pin.dominant}</span>
        </div>
      </div>

      <!-- Legal Basis Section -->
      <div class="legal-basis-section-title">
        <i data-lucide="scale"></i>
        <span>관련 6대 법령별 조항 및 법적 근거 원문 (Legal Articles)</span>
      </div>

      <div class="law-basis-accordion-list">
        ${pin.legalBasisList.map(law => `
          <div class="law-basis-card-item">
            <div class="law-card-top-flex">
              <span class="law-name-tag"><i data-lucide="book-open"></i> ${law.lawName}</span>
              <span class="law-ruling-pill ${law.dominant ? 'dominant' : 'mandatory'}">
                ${law.dominant ? '◉ 지배기준(가장 엄격)' : '● 적용 의무'}
              </span>
            </div>
            <div class="law-clause-name">${law.clauseName}</div>
            <div class="legal-text-quote-box">"${law.text}"</div>
            ${law.penalty ? `<div class="law-penalty-notice"><i data-lucide="shield-alert"></i> 제재/벌칙: ${law.penalty}</div>` : ''}
          </div>
        `).join('')}
      </div>

      <!-- AI Solution Advisory -->
      <div class="solution-advisory-box">
        <div class="solution-head">
          <i data-lucide="wrench"></i>
          <span>인허가 100% 통과를 위한 AI 엔지니어링 보완 설계안</span>
        </div>
        <p class="solution-text">${pin.solutionAdvice}</p>
      </div>

      <!-- Authority Tip -->
      <div class="practical-tip-box" style="padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
        <i data-lucide="landmark"></i>
        <span><strong>관할 인허가청(구청 건축과 / 관할 소방서) 실무 대응 팁:</strong> ${pin.authorityTip}</span>
      </div>

      <!-- Action Buttons -->
      <div class="action-cta-flex">
        <button class="btn btn-primary btn-full" onclick="blueprintApp.exportSinglePinPlan('${pin.id}')">
          <i data-lucide="file-check-2"></i> 이 부위 인허가 조치계획서(공문) 생성
        </button>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  exportSinglePinPlan(pinId) {
    const currentSample = BLUEPRINT_DATASET[this.currentSampleKey];
    const pin = currentSample.pins.find(p => p.id === pinId);
    if (!pin) return;

    const modal = document.getElementById('reportModalOverlay');
    const preview = document.getElementById('printableReportArea');

    if (preview && modal) {
      preview.innerHTML = `
        <div style="font-family: 'Noto Sans KR', sans-serif; padding: 20px; line-height: 1.6; color: #0F172A;">
          <h1 style="text-align: center; font-size: 20px; border-bottom: 2px solid #0F172A; padding-bottom: 10px; margin-bottom: 20px;">
            공연장 도면 법률 결함 보완 조치계획서
          </h1>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px;">
            <tr>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px; width: 25%;">건축물 명칭</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px;">${currentSample.name}</td>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px; width: 25%;">검토 부위</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px;">${pin.partName}</td>
            </tr>
            <tr>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px;">결함 코드</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px; color: #E11D48; font-weight: bold;">${pin.code} (${pin.levelText})</td>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px;">지배 법률</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px; font-weight: bold;">${pin.dominant}</td>
            </tr>
          </table>

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">1. 발견된 법적 위반 사항 및 문제점</h3>
          <p style="background: #FFF1F2; border-left: 4px solid #E11D48; padding: 10px; font-size: 13px; margin-bottom: 14px;">
            ${pin.problemDesc}
          </p>

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">2. 관련 법령 조항 및 법적 근거</h3>
          ${pin.legalBasisList.map(l => `
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 10px; border-radius: 6px; margin-bottom: 8px; font-size: 12.5px;">
              <strong>[${l.lawName}] ${l.clauseName}</strong><br>
              <span style="color: #475569;">"${l.text}"</span>
            </div>
          `).join('')}

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">3. 보완 설계 변경 및 엔지니어링 조치 계획</h3>
          <p style="background: #EEF2FF; border-left: 4px solid #4F46E5; padding: 10px; font-size: 13px;">
            ${pin.solutionAdvice}
          </p>

          <div style="margin-top: 30px; text-align: right; font-size: 13px;">
            <p>2026년 08월 27일</p>
            <p><strong>공연장 종합 법규 AI 안전진단 시스템 ArtVenue LawMaster</strong></p>
          </div>
        </div>
      `;
      modal.classList.add('active');
    }
  }

  exportBlueprintAuditReport() {
    const currentSample = BLUEPRINT_DATASET[this.currentSampleKey];
    if (!currentSample) return;

    const modal = document.getElementById('reportModalOverlay');
    const preview = document.getElementById('printableReportArea');

    if (preview && modal) {
      preview.innerHTML = `
        <div style="font-family: 'Noto Sans KR', sans-serif; padding: 20px; line-height: 1.6; color: #0F172A;">
          <h1 style="text-align: center; font-size: 22px; border-bottom: 2px solid #0F172A; padding-bottom: 12px; margin-bottom: 20px;">
            공연장 도면 법규 종합 감사 및 인허가 사전 검토 리포트
          </h1>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
            <tr>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px; width: 20%;">도면 프로젝트</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px; font-weight: bold;">${currentSample.name}</td>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px; width: 20%;">반려 위험도</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px; color: #E11D48; font-weight: bold;">${currentSample.riskScore}</td>
            </tr>
            <tr>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px;">인식 객체 현황</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px;">${currentSample.objCount}</td>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px;">총 결함 건수</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px;">${currentSample.violationCount} / ${currentSample.warningCount}</td>
            </tr>
          </table>

          <h3 style="font-size: 16px; margin: 18px 0 10px 0; color: #1E293B;">도면 검출 결함 전수 목록 및 법적 근거</h3>
          ${currentSample.pins.map((p, idx) => `
            <div style="border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px; margin-bottom: 14px; background: #FAFAFA;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-weight: 800; font-size: 14px; color: #0F172A;">[${idx + 1}] ${p.title}</span>
                <span style="color: #E11D48; font-weight: bold; font-size: 12px;">${p.levelText}</span>
              </div>
              <p style="font-size: 12.5px; color: #E11D48; margin-bottom: 8px;"><strong>문제점:</strong> ${p.problemDesc}</p>
              <div style="font-size: 12px; background: #FFFFFF; border: 1px solid #CBD5E1; padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                <strong>법적 근거:</strong> ${p.legalBasisList.map(l => `[${l.lawName} ${l.clauseName}] "${l.text}"`).join(' | ')}
              </div>
              <div style="font-size: 12.5px; color: #4F46E5; font-weight: 600;">
                <strong>보완 설계안:</strong> ${p.solutionAdvice}
              </div>
            </div>
          `).join('')}

          <div style="margin-top: 30px; text-align: right; font-size: 13px;">
            <p>2026년 08월 27일</p>
            <p><strong>공연장 종합 법규 AI 안전진단 시스템 ArtVenue LawMaster</strong></p>
          </div>
        </div>
      `;
      modal.classList.add('active');
    }
  }
}

// =============================================================================
// 8. LEGAL AI Q&A ENGINE & COMPLETE LEGAL BASIS ENCYCLOPEDIA
// =============================================================================

const LEGAL_QA_DATABASE = {
  "soundlock": {
    title: "사운드록(방음전실) 2중 도어 안여닫이 설치 가능 여부 및 법적 기준",
    verdict: {
      type: "danger",
      title: "⚠️ 원칙적 불가 — 건축법 피난방향(바깥여닫이) 지배 적용",
      desc: "공연장 사운드록의 내측 도어를 관람실 내부(안여닫이)로 설치하는 것은 건축법 피난방화규칙 제10조 제2항 위반으로 허가 반려 대상입니다. 두 짝 문 모두 피난방향(바깥여닫이)으로 열리도록 설계해야 하며, 상시개방형 전자도어릴리즈 연동이 필수입니다."
    },
    clauses: [
      {
        lawName: "건축물의 피난·방화구조 등의 기준에 관한 규칙",
        article: "제10조 (관람석 등으로부터의 출구의 설치)",
        text: "문화 및 집회시설(공연장·집회장·관람장)의 관람실 출구 유효너비는 개소당 1.5미터 이상으로 하여야 하며, 출입문은 안여닫이로 하여서는 아니 된다(피난방향 개폐 의무).",
        penalty: "건축허가 반려 및 건축법 제110조(벌칙) 2년 이하 징역 또는 1억원 이하 벌금."
      },
      {
        lawName: "소방시설 설치 및 관리에 관한 법률 / 화재안전성능기준(NFPC 303)",
        article: "제5조 (객석유도등 및 피난통로 유지)",
        text: "공연장의 방음전실은 관람객의 일시적 피난 지체(Queue Delay)가 발생하지 않도록 유효통로 폭을 건축법 기준(1.5m) 이상으로 상시 유지하여야 함.",
        penalty: "소방 완비증명서 부적합 처분 및 영업허가 불가."
      },
      {
        lawName: "장애물 없는 생활환경(BF) 인증 심사기준",
        article: "2.1.3 (출입문 전후면 활동공간)",
        text: "출입문 전후면에는 휠체어 사용자가 정지하여 문을 여닫을 수 있는 직경 1.4m 이상의 활동공간을 연속적으로 확보하여야 함.",
        penalty: "BF 인증 점수 감점 (미달 시 공공시설 준공 불가)."
      }
    ],
    precedent: {
      source: "국토교통부 건축안전과 행정질의회신 (회신일자 2024-03-15)",
      text: "공연장 관람실 음향 차단을 목적으로 설치하는 방음전실(사운드록)의 출입문이라 하더라도, 피난통로 상에 위치하는 모든 문은 건축피난규칙 제10조에 따라 피난방향으로 열려야 하며 안여닫이 구조는 불인정됨."
    },
    solution: "내외측 도어를 모두 관람실 바깥쪽(복도방향)으로 열리도록 설계하십시오. 복도 통행 간섭을 방지하기 위해 벽체를 450mm 인셋(Inset) 매립하고, 공연 중에는 음향 차단을 위해 닫혀 있다가 화재감지기 작동 시 0.5초 내 전원 차단되어 자동 쇄정 해제되는 소방연동 전자도어홀더를 적용하십시오."
  },
  "wheelchair": {
    title: "300석/850석 공연장 장애인 관람석 의무비율, 단차 및 시야각 기준",
    verdict: {
      type: "warn",
      title: "⚡ 편의증진법 1% vs BF인증 최우수 2% — BF 지배기준 적용",
      desc: "장애인편의증진법은 전체 좌석의 1% 이상을 요구하나, 공공·대형 공연장의 경우 BF인증 최우수 등급 기준(2% 이상, 단차 0mm, 무대 시야각 확보)을 준수해야 지자체 심의 및 본인증을 통과할 수 있습니다."
    },
    clauses: [
      {
        lawName: "장애인·노인·임산부 등의 편의증진 보장에 관한 법률 시행령",
        article: "별표 2 (공연장 등의 관람석·열람석)",
        text: "공연장의 관람석은 장애인등이 이용하기 편리한 위치에 전체 관람석 수의 1퍼센트(300석 이상 시 최소 3석 이상) 이상을 설치하여야 하며, 출입구로부터 높이차 없는 통로로 연결되어야 함.",
        penalty: "편의증진법 제23조에 따른 500만원 이하 이행강제금."
      },
      {
        lawName: "장애물 없는 생활환경(BF) 인증 심사기준",
        article: "3.2.1 (장애인 관람석의 배치 및 유효규격)",
        text: "휠체어 관람석은 1석당 유효너비 0.9m 이상, 깊이 1.4m 이상이어야 하며, 전체 좌석의 2% 이상을 확보하고 앞좌석 관람객 기립 시에도 무대 전면이 보이는 시야각을 확보할 것.",
        penalty: "BF 인증 등급 하향 및 재심사 요구."
      }
    ],
    precedent: {
      source: "한국장애인개발원 BF인증 심사위원회 판정례",
      text: "휠체어석 진입로에 2cm 이상의 단차가 존재하거나, 동반자석(Companion Seat)이 1:1로 연접 배치되지 않은 도면은 BF 본인증 심사에서 부적합 처리됨."
    },
    solution: "객석 C열 또는 중앙 통로 레벨에 완경사(1/18 이하) 무단차 플랫 슬래브를 구축하고, 휠체어석 1석당 1,000mm x 1,500mm 규격을 확보하십시오. 일반 관람석과 동일한 시야각을 보장하도록 가변형 의자(Removable Seat) 시스템을 적용하십시오."
  },
  "firecurtain": {
    title: "무대 방화막(Fire Curtain) 법정 의무 설치 대상 및 기술 기준",
    verdict: {
      type: "danger",
      title: "⚠️ 무대부 바닥면적 300㎡ 이상 시 100% 필수 법정의무설비",
      desc: "무대부 바닥면적이 300㎡(관람석 300석 초과 규모) 이상인 공연장은 건축법 시행령 제46조에 따라 관람석과 무대부 사이에 내화 1시간 이상 방화막 및 일제살수 드렌처설비를 반드시 설치해야 합니다."
    },
    clauses: [
      {
        lawName: "건축법 시행령",
        article: "제46조 (방화구획 등의 설치)",
        text: "공연장의 무대부로서 바닥면적이 300제곱미터 이상인 것은 무대부와 관람석 사이에 내화구조의 방화막 또는 국토교통부령이 정하는 기준에 적합한 방화구획을 설치하여야 한다.",
        penalty: "소방동의 거부 및 공연장 사용승인 불가."
      },
      {
        lawName: "공연법",
        article: "제12조 (공연장 무대시설 등의 안전진단)",
        text: "공연장의 무대시설은 화재 등 재난 발생 시 관람객의 안전한 피난을 보장할 수 있는 방화막 및 제연설비를 갖추어야 함.",
        penalty: "공연장 폐쇄명령 및 1년 이하 징역 또는 1천만원 이하 벌금."
      }
    ],
    precedent: {
      source: "소방청 화재안전기준 유권해석 (소방청 예방과)",
      text: "프로세니엄 무대구조에서 방화막은 무대 상부 연돌효과(Stack Effect)로 인한 유독가스의 객석 유입을 15분 이상 차단할 수 있어야 하며, 분당 4.5m 이상 하강 속도를 유지해야 함."
    },
    solution: "프로세니엄 상부에 분당 4.5m 이상 자동 하강되는 1시간 내화 방화막과 방화막 냉각용 수막설비(드렌처 헤드 2.5m 간격)를 설계에 반영하고, 무대 상부 배연창(무대면적의 1/10 이상)을 연동하십시오."
  },
  "fohcorridor": {
    title: "FOH 복도에 옥내소화전함/기둥 돌출 시 건축법 위반 여부",
    verdict: {
      type: "danger",
      title: "⚠️ 명백한 법 위반 — 마감면 기준 장애물 제외 순유효폭 2.4m 지배",
      desc: "건축피난규칙 제15조의2에 따라 양옆 거실이 있는 복도는 2.4m 이상이어야 하며, 소화전함이나 기둥, 흡음 마감재가 돌출되어 순유효너비가 2.4m 미만으로 좁아질 경우 준공 검사(사용승인)에서 반려됩니다."
    },
    clauses: [
      {
        lawName: "건축물의 피난·방화구조 등의 기준에 관한 규칙",
        article: "제15조의2 (복도의 너비 및 설치기준)",
        text: "공연장의 관람실 바닥면적의 합계가 1,000㎡ 이상인 층의 복도로서 양옆에 거실이 있는 복도의 너비는 장애물이 없는 상태에서 2.4미터 이상이어야 한다.",
        penalty: "준공 시 사용승인 반려 및 소방 감리 부적합."
      }
    ],
    precedent: {
      source: "대법원 판례 (건축법상 복도 유효너비 산정 기준)",
      text: "건축법령상 복도의 너비는 벽체 중심선 간격이 아닌, 돌출물(소화전함, 배관, 기둥)을 제외한 실제 통행 가능한 순유효폭(Clear Width)을 기준으로 판단함."
    },
    solution: "옥내소화전함과 방화문 프레임을 벽체 매립형(Recessed Type)으로 설계하고, 벽체 중심선 치수를 2,800mm~3,000mm로 확보하여 인테리어 마감 후에도 2,400mm 클리어를 유지하십시오."
  },
  "exitlight": {
    title: "공연 암전(Blackout) 연출 시 객석유도등 소등의 적법성 및 조건",
    verdict: {
      type: "pass",
      title: "✅ 3선식 배선 & 소방수신반 자동 점등 연동 시 적법 허용",
      desc: "유도등 및 유도표지의 화재안전성능기준(NFPC 303) 제5조에 따라 공연 중 암전 연출이 불가피한 경우 소등이 허용되나, 객석 바닥 조도 0.2lux 이상 유지 및 화재 감지 시 0.5초 내 강제 100% 점등되는 3선식 인터록 배선이 법정 의무입니다."
    },
    clauses: [
      {
        lawName: "유도등 및 유도표지의 화재안전성능기준(NFPC 303)",
        article: "제5조 (객석유도등의 설치 및 점등기준)",
        text: "공연장 등으로서 암전이 필요한 장소에는 3선식 배선에 의하여 상시 소등 상태로 유지할 수 있으나, 화재감지기 작동 또는 정전 시 자동으로 즉시 점등되어야 하며 바닥면 조도는 0.2럭스 이상이어야 함.",
        penalty: "소방시설법 제12조 위반 시 300만원 이하 과태료."
      }
    ],
    precedent: {
      source: "소방청 화재안전기준 기술질의회신",
      text: "암전 연출용 객석유도등 컨트롤러는 조명 콘솔(DMX) 수동 조작보다 소방 R형 수신반의 화재신호가 최우선으로 오버라이드(Override) 점등되도록 회로를 구성해야 함."
    },
    solution: "객석 유도등을 DMX 연동 조광기(Dimmer) 회로와 소방 릴레이 제어반으로 분리 구성하고, 객석 계단 코(Nosing) 부위에 축광형(발광) 유도 테이프 및 0.2lux 저조도 LED 발밑등을 병행 시공하십시오."
  },
  "doubledoor": {
    title: "양개형 방화문에서 한 짝만 900mm 미달 시 BF인증 통과 여부",
    verdict: {
      type: "warn",
      title: "⚡ BF인증 불합격 — 주 사용문 1짝 900mm 이상 확보 필수",
      desc: "건축법은 개소당 총 유효너비 1.5m만 충족하면 750+750mm 양개도어를 허용하지만, BF인증 심사기준 2.1.2에 따라 상시 열리는 주 사용문 한 짝의 통과너비가 900mm 미만이면 BF 본인증이 반려됩니다."
    },
    clauses: [
      {
        lawName: "장애물 없는 생활환경(BF) 인증 심사기준",
        article: "2.1.2 (출입문의 형태 및 유효폭)",
        text: "양개도어(두 짝 문)의 경우, 평상시 주로 열리는 한 짝의 유효 통과너비가 0.9미터 이상이어야 함.",
        penalty: "BF 본인증 반려 및 보완 시공 명령."
      }
    ],
    precedent: {
      source: "국토교통부·보건복지부 공동 BF인증 심사지침",
      text: "동일 폭(750+750mm) 양개도어는 평상시 한 짝만 개폐되는 경우가 대부분이므로 휠체어 통과 불가로 판정함."
    },
    solution: "750+750mm 대칭 양개도어를 비대칭 양개도어(주 사용문 1,000mm + 보조 고정문 800mm = 개구부 총 1,800mm)로 설계 변경하여 건축법과 BF인증을 100% 동시 충족하십시오."
  },
  "evacuationdistance": {
    title: "거실 각 부분에서 피난 직통계단까지의 최대 보행거리 기준",
    verdict: {
      type: "pass",
      title: "✅ 내화구조 50m / 스프링클러 설치 시 완화 가능",
      desc: "건축법 시행령 제34조에 따라 공연장 거실 각 부분에서 직통계단까지의 보행거리는 30m 이하(내화구조 50m 이하)여야 하며, 사운드록 굴절 통로 길이를 포함한 실제 보행거리로 산정해야 합니다."
    },
    clauses: [
      {
        lawName: "건축법 시행령",
        article: "제34조 (직통계단의 설치 및 피난거리)",
        text: "공연장의 거실 각 부분으로부터 보행거리 30미터(주요구조부가 내화구조인 경우 50미터) 이내에 직통계단을 설치하여야 함.",
        penalty: "건축허가 반려."
      }
    ],
    precedent: {
      source: "법제처 법령해석 20-0412",
      text: "보행거리는 도면상 직선거리가 아닌, 객석 의자 사이 통로 및 사운드록 굴절 통로의 중심선을 따라 측정한 실제 이동거리(Walking Distance)를 기준으로 산정함."
    },
    solution: "객석 양측 후면에 직통 피난계단을 2개소 이상 분산 배치하고, 사운드록 굴절 각도를 90도 이내로 완화하여 최대 보행거리가 35m 이내가 되도록 피난동선을 최적화하십시오."
  },
  "stagesprinkler": {
    title: "무대부 스프링클러 헤드 수평거리 및 일제살수 드렌처설비 연동",
    verdict: {
      type: "danger",
      title: "⚠️ 수평거리 1.7m 이하 정방형 배치 법정 의무",
      desc: "스프링클러설비 화재안전성능기준(NFPC 103) 제4조에 따라 무대부는 가연물이 집중된 특수장소이므로 헤드 수평거리 1.7m 이하(일반 2.3m보다 엄격)를 의무 준수해야 합니다."
    },
    clauses: [
      {
        lawName: "스프링클러설비의 화재안전성능기준(NFPC 103)",
        article: "제4조 (헤드의 배치거리)",
        text: "무대부 또는 특수가연물을 저장·취급하는 장소에 있어서는 스프링클러헤드의 수평거리를 1.7미터 이하로 유지하여야 함.",
        penalty: "소방 완비증명서 부적합."
      }
    ],
    precedent: {
      source: "소방청 소방기술민원 해설집",
      text: "무대 상부 그리드아이언 및 배턴(Batten) 구조물에 의해 살수 차폐가 발생하지 않도록 상·하부 2단 분할 헤드 배치가 요구됨."
    },
    solution: "무대 천장 및 플라이갤러리 하부에 121℃ 개방형 헤드를 2.2m x 2.2m 정방형(수평거리 1.55m)으로 배치하고, 델류지밸브(일제개방밸브)와 무대 방화막 드렌처설비를 연동하십시오."
  }
};

class LegalAdvisorApp {
  constructor() {
    this.currentQueryKey = "soundlock";
    this.searchInput = document.getElementById('legalQueryInput');
    this.btnSubmit = document.getElementById('btnSubmitLegalQuery');
    this.chipsContainer = document.getElementById('quickQueryChips');
    this.answerContainer = document.getElementById('legalAnswerBody');
    this.encycloContainer = document.getElementById('encyclopediaItemsList');
    this.encycloSearch = document.getElementById('encyclopediaSearchInput');
  }

  init() {
    this.bindEvents();
    this.renderAnswer(this.currentQueryKey);
    this.renderEncyclopedia('');
  }

  bindEvents() {
    // Submit Query
    if (this.btnSubmit && this.searchInput) {
      this.btnSubmit.addEventListener('click', () => {
        this.handleSearch(this.searchInput.value.trim());
      });
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.handleSearch(this.searchInput.value.trim());
        }
      });
    }

    // Quick Chips
    if (this.chipsContainer) {
      const chips = this.chipsContainer.querySelectorAll('.query-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          const key = chip.getAttribute('data-query');
          this.currentQueryKey = key;
          this.renderAnswer(key);
        });
      });
    }

    // Encyclopedia Search
    if (this.encycloSearch) {
      this.encycloSearch.addEventListener('input', (e) => {
        this.renderEncyclopedia(e.target.value.trim().toLowerCase());
      });
    }

    // Print Answer
    const btnPrint = document.getElementById('btnPrintLegalAnswer');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => this.printLegalAnswer());
    }
  }

  handleSearch(queryText) {
    if (!queryText) {
      showToast("질문 키워드를 입력해주세요.");
      return;
    }

    showToast(`AI 법률 질의 분석 중: "${queryText}"`);

    // Match query against keywords
    let matchedKey = "soundlock";
    const text = queryText.toLowerCase();

    if (text.includes("사운드록") || text.includes("방음") || text.includes("안여닫이") || text.includes("문")) {
      matchedKey = "soundlock";
    } else if (text.includes("휠체어") || text.includes("장애인") || text.includes("단차") || text.includes("bf")) {
      matchedKey = "wheelchair";
    } else if (text.includes("방화막") || text.includes("무대") || text.includes("커튼") || text.includes("300")) {
      matchedKey = "firecurtain";
    } else if (text.includes("복도") || text.includes("foh") || text.includes("소화전") || text.includes("기둥")) {
      matchedKey = "fohcorridor";
    } else if (text.includes("암전") || text.includes("유도등") || text.includes("소등") || text.includes("조도")) {
      matchedKey = "exitlight";
    } else if (text.includes("양개") || text.includes("900") || text.includes("도어")) {
      matchedKey = "doubledoor";
    } else if (text.includes("거리") || text.includes("보행") || text.includes("계단") || text.includes("피난")) {
      matchedKey = "evacuationdistance";
    } else if (text.includes("스프링클러") || text.includes("헤드") || text.includes("소화")) {
      matchedKey = "stagesprinkler";
    }

    this.currentQueryKey = matchedKey;

    // Highlight chip
    const chips = document.querySelectorAll('.query-chip');
    chips.forEach(c => {
      if (c.getAttribute('data-query') === matchedKey) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });

    this.renderAnswer(matchedKey);
  }

  renderAnswer(key) {
    const data = LEGAL_QA_DATABASE[key] || LEGAL_QA_DATABASE["soundlock"];
    const titleEl = document.getElementById('currentQueryTitle');
    if (titleEl) titleEl.innerText = data.title;

    if (!this.answerContainer) return;

    this.answerContainer.innerHTML = `
      <!-- 1. Verdict Summary Banner -->
      <div class="verdict-summary-banner ${data.verdict.type}">
        <div class="verdict-tag-flex">
          <span class="defect-level-badge ${data.verdict.type}">AI 법률 유권해석 결론</span>
          <span class="verdict-title">${data.verdict.title}</span>
        </div>
        <p class="verdict-desc">${data.verdict.desc}</p>
      </div>

      <!-- 2. Legal Clauses Detail Box -->
      <div class="legal-basis-section-title">
        <i data-lucide="scale"></i>
        <span>관련 법령별 정확한 조항 및 법적 근거 전문 (Exact Legal Articles)</span>
      </div>

      <div class="law-basis-accordion-list">
        ${data.clauses.map(c => `
          <div class="legal-clause-detail-box">
            <div class="clause-top-row">
              <span class="clause-law-name"><i data-lucide="book-open"></i> ${c.lawName}</span>
              <span class="tab-count-badge">법정 의무 조항</span>
            </div>
            <div class="clause-article-title">${c.article}</div>
            <div class="clause-text-quote">"${c.text}"</div>
            ${c.penalty ? `<div class="clause-penalty-tag"><i data-lucide="alert-octagon"></i> 위반 시 행정처분/벌칙: ${c.penalty}</div>` : ''}
          </div>
        `).join('')}
      </div>

      <!-- 3. Precedents & Administrative Decisions -->
      <div class="precedent-quote-box">
        <div class="precedent-head">
          <i data-lucide="landmark"></i>
          <span>행정청(소방청·국토교통부) 유권해석 및 감사원/법제처 판례</span>
        </div>
        <div style="font-size: 11.5px; font-weight: 700; color: var(--accent-primary); margin-bottom: 2px;">
          [출처: ${data.precedent.source}]
        </div>
        <p class="precedent-text">"${data.precedent.text}"</p>
      </div>

      <!-- 4. Practical Engineering Solution -->
      <div class="solution-advisory-box">
        <div class="solution-head">
          <i data-lucide="check-check"></i>
          <span>인허가 100% 통과를 위한 AI 엔지니어링 보완 설계 가이드</span>
        </div>
        <p class="solution-text">${data.solution}</p>
      </div>
    `;

    if (window.lucide) lucide.createIcons();
  }

  renderEncyclopedia(filterText) {
    if (!this.encycloContainer) return;

    const items = MASTER_PARTS_DATA.filter(item => {
      if (!filterText) return true;
      return item.name.toLowerCase().includes(filterText) ||
             item.summary.toLowerCase().includes(filterText) ||
             item.category.toLowerCase().includes(filterText);
    });

    this.encycloContainer.innerHTML = items.map((item, idx) => `
      <div class="encyclo-item-card" onclick="legalAdvisorApp.onEncyclopediaItemClick(${item.id})">
        <div class="encyclo-card-header">
          <span class="encyclo-part-title">[${idx + 1}] ${item.name}</span>
          <span class="encyclo-cat-badge">${item.category.toUpperCase()}</span>
        </div>
        <div class="encyclo-dominant-rule">
          ${item.building.text !== '─' ? `건축법: ${item.building.text}` : ''} 
          ${item.bf.text !== '─' ? `| BF: ${item.bf.text}` : ''}
        </div>
        <div class="encyclo-summary-brief">${item.summary}</div>
      </div>
    `).join('');
  }

  onEncyclopediaItemClick(partId) {
    const item = MASTER_PARTS_DATA.find(p => p.id === partId);
    if (!item) return;

    showToast(`[${item.name}] 관련 법적근거를 로드합니다.`);
    this.handleSearch(item.name);
  }

  printLegalAnswer() {
    const data = LEGAL_QA_DATABASE[this.currentQueryKey] || LEGAL_QA_DATABASE["soundlock"];
    const modal = document.getElementById('reportModalOverlay');
    const preview = document.getElementById('printableReportArea');

    if (preview && modal) {
      preview.innerHTML = `
        <div style="font-family: 'Noto Sans KR', sans-serif; padding: 24px; line-height: 1.6; color: #0F172A;">
          <h1 style="text-align: center; font-size: 20px; border-bottom: 2px solid #0F172A; padding-bottom: 10px; margin-bottom: 20px;">
            공연장 복합법령 법적질의 회신서 (Legal Advisory Report)
          </h1>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 13px;">
            <tr>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px; width: 25%;">질의 안건</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px; font-weight: bold;" colspan="3">${data.title}</td>
            </tr>
            <tr>
              <th style="border: 1px solid #CBD5E1; background: #F1F5F9; padding: 8px;">최종 판정</th>
              <td style="border: 1px solid #CBD5E1; padding: 8px; color: #E11D48; font-weight: bold;" colspan="3">${data.verdict.title}</td>
            </tr>
          </table>

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">1. AI 법률 유권해석 요약</h3>
          <p style="background: #FFF1F2; border-left: 4px solid #E11D48; padding: 12px; font-size: 13px; margin-bottom: 14px;">
            ${data.verdict.desc}
          </p>

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">2. 관련 법령 조항 및 법적 근거 전문</h3>
          ${data.clauses.map(c => `
            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 10px; border-radius: 6px; margin-bottom: 8px; font-size: 12.5px;">
              <strong>[${c.lawName}] ${c.article}</strong><br>
              <span style="color: #334155;">"${c.text}"</span>
              ${c.penalty ? `<br><span style="color: #E11D48; font-size: 11.5px;">* 벌칙: ${c.penalty}</span>` : ''}
            </div>
          `).join('')}

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">3. 행정청 유권해석 및 심판례</h3>
          <p style="background: #F1F5F9; border-left: 4px solid #64748B; padding: 10px; font-size: 12.5px; margin-bottom: 14px;">
            <strong>[${data.precedent.source}]</strong><br>
            "${data.precedent.text}"
          </p>

          <h3 style="font-size: 15px; margin: 16px 0 8px 0; color: #1E293B;">4. 인허가 100% 통과를 위한 엔지니어링 조치 가이드</h3>
          <p style="background: #EEF2FF; border-left: 4px solid #4F46E5; padding: 12px; font-size: 13px;">
            ${data.solution}
          </p>

          <div style="margin-top: 30px; text-align: right; font-size: 13px;">
            <p>2026년 08월 27일</p>
            <p><strong>공연장 종합 법규 AI 안전진단 시스템 ArtVenue LawMaster</strong></p>
          </div>
        </div>
      `;
      modal.classList.add('active');
    }
  }
}

// Global instances
let blueprintApp;
let legalAdvisorApp;

// App Entry Point
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AI Blueprint Scanner
  blueprintApp = new BlueprintScannerApp();
  blueprintApp.init();

  // Initialize Legal AI Advisor & Encyclopedia
  legalAdvisorApp = new LegalAdvisorApp();
  legalAdvisorApp.init();

  // Initialize Matrix Table and Conflicts
  renderMatrixTable('all');
  renderConflictCards();

  // Initialize Tab Navigation
  setupTabNavigation();

  // Initialize Search & Filter
  setupSearchAndFilters();

  // Initialize Calculator
  setupCalculator();

  // Initialize Documents
  setupDocumentPackage();

  // Initialize Master Report Modal
  setupReportModal();

  // Initialize Preset Selector
  setupPresetSelector();

  // Initialize ROI Modal
  setupRoiModal();

  // Trigger initial diagnosis
  runVenueDiagnosis();
});

