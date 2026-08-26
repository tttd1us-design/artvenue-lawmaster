---
name: book-proofreading-qc
description: 도서 원고 교정 교열, 중복 정제, AI Slop 구문 검출, B5 용지 및 Heading keep_with_next=True 조판 품질 자동 검수(QC) 스킬
---

# 🔍 Book Proofreading & Quality Control Skill (도서 교정 및 QC 스킬)

본 스킬은 단행본 도서 원고의 오탈자 교정, 중복 문장 솎아내기, AI 덤프 구문 정제 및 **출판사 제출용 조판 품질(QC) 검수 전용 가이드라인**이다.

---

## 1. 🧹 텍스트 정제 및 오탈자 교정 (Text Cleaning)

1. **AI Slop & 무의미 구문 100% 제거**:
   - "복사", "계속", "복사 계속", "클립보드", "추천작가의 집필력으로...", Genspark/Google Trends 검색 로그 구문 전량 삭제 (0건 유지).
2. **중복 표현 및 유의어 다중 언급 정제 (De-duplication)**:
   - 동일 개념의 반복 서술 및 분량 채우기용 문단 선별 정제.
3. **완벽기술 검증**:
   - "이하 생략", "위와 동일", "후략" 등의 줄임표 표현 배제 여부 검수.

---

## 2. 📐 조판 및 레이아웃 품질 검수 (Typography QC)

1. **용지 및 여백 검수**:
   - 판형: **신국판 B5 (152mm × 225mm)**
   - 여백: 상하 여백 **25.0mm**, 좌우 여백 **30.0mm**
2. **Heading 단절 방지 검수**:
   - `Heading 1` ~ `Heading 4` 문단의 `keep_with_next=True` 적용률 **100%** 검증 (페이지 하단 제목 홀로 잘림 방지).
3. **타이포그래피 규격**:
   - 본문: 바탕체 10.5pt, 웜 차콜 (`#2A3439`), 행간 1.75(175%), 문단 후 8.5pt, 첫 줄 1자(10.5pt) 들여쓰기.
   - 강조: 2도 슬레이트 네이비 (`#0F172A`) Bold.

---

## 3. 🛡️ 파일 버저닝 규칙 (File Versioning)

- 마스터 출판 파일명 서두에 `YYMMDD_HHMM_` 타임스탬프 필수 적용 (예: `260813_2340_...`).
- 임시 백업본(`_BACKUP.docx`) 전량 정리.

## 7. 📏 전문 도서 조판 및 편집 디자인 세부 표준 (Expert Layout Standard)
- **판형 규격**: 신국판 B5 (152mm × 225mm)
- **여백 설정**: 안쪽(Inside/Gutter) 21mm / 바깥쪽(Outside) 19mm / 위쪽(Top) 21mm / 아래쪽(Bottom) 24mm
- **타이포그래피 위계**:
  - Heading 1: 맑은 고딕 / KoPubWorld 돋움 Bold 20.0pt, 슬레이트 네이비 (#1E2A38), keep_with_next=True
  - Heading 2: 맑은 고딕 / KoPubWorld 돋움 Bold 14.0pt, 슬레이트 네이비 (#1E2A38), keep_with_next=True
  - Heading 3: 맑은 고딕 / KoPubWorld 돋움 Medium 11.5pt, 앰버 골드 (#D97706), keep_with_next=True
  - Heading 4: 맑은 고딕 11.0pt Bold, 슬레이트 그레이 (#475569), keep_with_next=True
  - 본문: 바탕체 10.5pt, 웜 차콜 (#2A3439), 행간 1.75(175%), 문단 후 8.5pt, 첫 줄 1자(10pt) 들여쓰기
- **2도 별색 쇄**: 슬레이트 네이비 (#1E2A38 / Pantone 534C) 포인트 강조
