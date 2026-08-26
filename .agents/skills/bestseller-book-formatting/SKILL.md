---
name: bestseller-book-formatting
description: 베스트셀러 도서 디자인, 결국해내는사람들의원칙 서식, 눈 편한 타이포그래피, 하이라키 강화 및 백업 자동화 스킬
---

# 📚 베스트셀러 도서 디자인 & 눈 편한 조판 자동화 스킬 (Bestseller Formatting & Ergonomics Skill)

본 스킬은 단행본 및 베스트셀러 도서 집필 시 **시각적 하이라키(Hierarchy) 강화, 독자 눈 피로도 감소 타이포그래피, 상시 백업 자동화 파이프라인**을 한 번에 실행하기 위한 지침서입니다.

---

## 1. 5대 핵심 실행 워크플로우

1. **원고 통합 & 무결성 점검 (Manuscript Cleanse & Audit)**:
   - 마크다운 마스터 파일(`manuscript_master.md`) 기반으로 프롬프트 잔재, 가짜 서문, 축약 문구를 100% 제거하고 35만 자 통합 원고 조판.
2. **『결국 해내는 사람들의 원칙』 조판 서식 적용 (The Answer Design)**:
   - 딥 슬레이트 네이비(`0F172A`) & 앰버 골드(`D97706`) 컬러 팔레트 적용.
   - 상하 이중 실선 콜아웃 상자 + 130개 비주얼 조판 엘리먼트 배치.
3. **본문 제목 하이라키(Hierarchy) 강화**:
   - Heading 1 (20pt Extra Bold) $\rightarrow$ Heading 2 (16pt Bold + Left 4.5pt Accent Bar) $\rightarrow$ Heading 3 (13pt Bold + `■ ` Bullet Badge) $\rightarrow$ Heading 4 (11pt Bold).
4. **독자 편의성 & 인공공학 최적화 (Eye Ergonomics Calibration)**:
   - 황금 비율 행간 **`1.75` (175%)**, 웜 차콜 폰트 색상 **`#2A3439`**, 2도 슬레이트 네이비 강조어 **`#0F172A`**, 콜아웃 셀 마진 `320 dxa`.
5. **의무적 자동 백업본 생성 (Mandatory Backup Protocol)**:
   - 모든 DOCX 파일 생성 시 `AI 출판 수익 다각화..._BACKUP.docx` 형식의 백업 파일을 동시에 생성하고 시스템 기본 프로그램(MS Word)으로 자동 런칭.

---

## 2. 파이프라인 자동화 스크립트 모음

- **최종 검수 스크립트**: `final_inspection_audit.py`
- **파일 자동 오픈 스크립트**: `open_file.py`
- **하이라키 & 인공공학 조판 스크립트**: `ultimate_eye_ergonomics_design.py`

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
