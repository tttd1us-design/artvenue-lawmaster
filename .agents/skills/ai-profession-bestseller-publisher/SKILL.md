---
name: ai-profession-bestseller-publisher
description: AI 시대 지식 전문직(건축사, 의사, 변호사, 회계사 등) 생존 철학서 및 100만 자 규모 베스트셀러 도서 완전집필, 3대 거장(매튜 크로포드, 칼 뉴포트, 정지돈) 문체 융합, 2×2 직무 해부학, 출판사 납품용 B5 황금 조판(Word/PDF/HTML/MD) 자동화 퍼블리싱 마스터 스킬
---

# 🏆 AI 전문직 베스트셀러 완전집필 & 출판 마스터 스킬 (AI Profession Bestseller Publisher)

## 📌 1. 스킬 개요 및 핵심 미션
본 스킬은 AI 생성 기술의 급격한 확산으로 인해 도면, 판례, 진단, 세무 계산 등 지식 독점권이 붕괴된 지식 전문직(건축가, 의사, 변호사, 회계사, 개발자 등)의 실존적 위기를 정면으로 다루고, 단순한 테크니션에서 **'공간과 비즈니스의 총괄 디렉터(Overall Director)'이자 '전문직 2.0(Profession 2.0)'**으로 거듭나는 100만 자 규모의 초대형 베스트셀러·스테디셀러 도서를 기획, 집필, 조판, 자동 출판하는 전용 마스터 스킬입니다.

---

## 🏛️ 2. 3대 거장 집필력 융합 시스템 (3-Layer Literary Synthesis)

| 참조 작가 | 핵심 저작 | 본 스킬 이식 핵심 역량 |
| :--- | :--- | :--- |
| **매튜 크로포드<br>(Matthew B. Crawford)** | 『손으로 생각하기』<br>*(Shop Class as Soulcraft)* | **[철학적 장인 성찰 & 신체성 회복]**<br>화이트칼라 지식 노동의 소외를 비판하고, 물리적 현실과 부딪히는 장인적 신체성의 숭고함을 탐구하는 묵직한 인문학적 고백체. |
| **칼 뉴포트<br>(Cal Newport)** | 『딥 워크』<br>『열정의 배신』 | **[데이터 실증 논증 & 커리어 프레임워크]**<br>RIBA 59%, AIA 78%, 한국은행 99%, 삼일 20만 시간 등 글로벌 실증 데이터 분석 및 2×2 직무 해부 매트릭스 실행 체계. |
| **정지돈** | 도시·건축 에세이<br>『모든 것은 영원했다』 | **[한국적 감성 & 공간의 시적 묘사]**<br>논현동 새벽 3시, 마포 골목길, 노출 콘크리트 벽체의 질감 등 한국의 도시적 풍경을 영화처럼 섬세하게 복원하는 문학적 서사. |

---

## 📐 3. 전문직 2×2 직무 해부 매트릭스 (Job Dissection Matrix)

```
[복합 비정형] │  제2분면 (BIM/파라메트릭)      │  ★ 제4분면 (인간 고유 승부처)
            │  → AI 코파일럿 협업 탐색        │  → 철학 수립, 갈등 중재 (80% 집중)
────────────┼─────────────────────────────────┼────────────────────────────────────
[단순 정형]   │  제1분면 (법규/면적/도면)        │  제3분면 (정기 보고/공문)
            │  → 100% AI 자동화 위임         │  → 템플릿화 및 표준화
            └─────────────────────────────────┴────────────────────────────────────
                     [기계적 연산/계산]                  [인간적 통찰/공감]
```

---

## 🎬 4. 총괄 디렉터(Overall Director)의 5대 핵심 역할
1. **비전 설정자 (Vision Setter)**: 프로젝트의 철학적 목표와 브랜드 정체성 정의.
2. **큐레이터 (Curator)**: AI가 산출한 수백 개 대안 중 최적의 해결책 선별 및 편집.
3. **오케스트레이터 (Orchestrator)**: 다학제 엔지니어링 분야와 이해관계자 간 갈등 중재.
4. **품질 감독자 (Quality Director)**: 알고리즘의 환각(Hallucination)과 법적 무결성 최종 검증.
5. **의미 부여자 (Meaning Maker)**: 공간에 감동과 인문학적 이야기를 불어넣는 최종 결단.

---

## 📏 5. 출판사 납품용 황금 조판 표준 규격 (B5 Shingukpan)

| 조판 항목 | 표준 규격 사양 | 상세 설정 파라미터 |
| :--- | :--- | :--- |
| **판형 규격** | **신국판 B5 (152mm × 225mm)** | `page_width = Mm(152)`, `page_height = Mm(225)` |
| **여백 설정** | **상하 20mm / 좌우 21mm / 제본 12mm** | `top_margin = Mm(20)`, `gutter = Mm(12)` (책 펼침 최적화) |
| **본문 서체** | **바탕체 / KoPubWorld 바탕 9.5pt** | `style_normal.font.name = 'Batang'`, `size = Pt(9.5)` |
| **본문 줄간격**| **1.35배 (첫 줄 들여쓰기 9.0pt)** | `line_spacing = 1.35`, `first_line_indent = Pt(9.0)` |
| **제목 하이라키**| **Heading 1(20pt Bold) / Heading 2(13.5pt Bold) / Heading 3(11pt Bold)** | `keep_with_next = True` (페이지 넘김 분리 방지) |
| **페이지 번호** | **하단 중앙 동적 넘버링 (`- PAGE -`)** | Word OpenXML `w:fldChar` 동적 필드 삽입 |
| **테이블 조판** | **Oxford Classic 학술 보더** | 상하 1.5pt 진회색 실선, 연회색 헤더 음영(`#F1F5F9`), 좌우 테두리 없음 |
| **인용구 상자** | **Slate Accent 라인 박스** | 좌측 1.5pt 슬레이트 네이비 라인(`#2C4260`), 배경 `#F8FAFC` |

---

## 💻 6. 자동화 다중 포맷 출판 파이프라인 (Python Automation)

```python
# -*- coding: utf-8 -*-
"""
Million-Bestseller Multi-Format Publisher Engine
Generates:
1. Publisher Edition Word (DOCX)
2. Mandatory Backup Word (BACKUP.docx)
3. Print-Ready PDF via Word COM Automation
4. Responsive Interactive HTML eBook
5. Full Master Manuscript Markdown
"""

import os
import sys
import subprocess

def publish_all_formats(book_structure, output_dir):
    # 1. Markdown
    # 2. HTML eBook
    # 3. Publisher B5 DOCX & BACKUP.docx
    # 4. Print-Ready PDF
    pass
```

---

## 🛡️ 7. 출판 의무 백업 및 무결성 감사 규칙
1. **의무적 동시 백업**: 모든 DOCX 생성 시 반드시 동명의 `_BACKUP.docx` 파일을 함께 생성하여 원고 유실을 원천 차단한다.
2. **AI Slop 제로 검출**: 진부한 AI 클리셰 구문을 전수 검출하여 100% 정제하고, 고밀도 지식 자산으로 조판한다.
3. **100% 목차 1:1 일치**: 기획서의 모든 부(Part), 장(Chapter), 절(Section), 부록(Appendix)의 제목과 순서를 엄격히 일치시킨다.
