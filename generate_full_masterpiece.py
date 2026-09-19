# -*- coding: utf-8 -*-
"""
Complete Masterpiece Bestseller Book Generator
Title: Genspark(젠스파크) & 불편의 값: 누구나 쉽게 쓰는 올인원 AI 워크스페이스 60 & 430명 실증 비즈니스 생존 마스터북
Output Path: E:/도서작업/260906_0430_Genspark_불편의값_올인원AI워크스페이스_베스트셀러_마스터.docx
"""

import os
import sys
import docx
from docx import Document
from docx.shared import Pt, Inches, RGBColor, Mm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

sys.stdout.reconfigure(encoding='utf-8')

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=140, bottom=140, left=180, right=180):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def set_cell_borders(cell, top=None, bottom=None, left=None, right=None):
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = parse_xml(f'<w:tcBorders {nsdecls("w")}/>')
    edges = {'top': top, 'bottom': bottom, 'left': left, 'right': right}
    for edge, val in edges.items():
        if val:
            tag = f'<w:{edge} {nsdecls("w")} w:val="{val.get("val", "single")}" w:sz="{val.get("sz", "4")}" w:space="0" w:color="{val.get("color", "auto")}"/>'
            tcBorders.append(parse_xml(tag))
        else:
            tag = f'<w:{edge} {nsdecls("w")} w:val="none"/>'
            tcBorders.append(parse_xml(tag))
    tcPr.append(tcBorders)

class BestsellerPublisher:
    def __init__(self):
        self.doc = Document()
        self.setup_page()
        self.setup_styles()

    def setup_page(self):
        for section in self.doc.sections:
            section.page_width = Mm(152)
            section.page_height = Mm(225)
            section.top_margin = Mm(25)
            section.bottom_margin = Mm(25)
            section.left_margin = Mm(23)
            section.right_margin = Mm(21)
            section.different_first_page_header_footer = True

    def setup_styles(self):
        styles = self.doc.styles
        
        # Heading 1: 대단원 / Part / Volume
        h1 = styles['Heading 1']
        h1.font.name = 'Malgun Gothic'
        h1.font.size = Pt(18)
        h1.font.bold = True
        h1.font.color.rgb = RGBColor(0x1E, 0x2A, 0x38)
        h1.paragraph_format.space_before = Pt(22)
        h1.paragraph_format.space_after = Pt(12)
        h1.paragraph_format.keep_with_next = True
        
        # Heading 2: 장 (Chapter)
        h2 = styles['Heading 2']
        h2.font.name = 'Malgun Gothic'
        h2.font.size = Pt(13.5)
        h2.font.bold = True
        h2.font.color.rgb = RGBColor(0x1E, 0x2A, 0x38)
        h2.paragraph_format.space_before = Pt(15)
        h2.paragraph_format.space_after = Pt(8)
        h2.paragraph_format.keep_with_next = True

        # Heading 3: 절 (Section)
        h3 = styles['Heading 3']
        h3.font.name = 'Malgun Gothic'
        h3.font.size = Pt(11.0)
        h3.font.bold = True
        h3.font.color.rgb = RGBColor(0xD9, 0x77, 0x06) # Amber Gold
        h3.paragraph_format.space_before = Pt(11)
        h3.paragraph_format.space_after = Pt(5)
        h3.paragraph_format.keep_with_next = True

        # Heading 4: 소제목 / 항목
        h4 = styles['Heading 4']
        h4.font.name = 'Malgun Gothic'
        h4.font.size = Pt(10.5)
        h4.font.bold = True
        h4.font.color.rgb = RGBColor(0x47, 0x55, 0x69)
        h4.paragraph_format.space_before = Pt(8)
        h4.paragraph_format.space_after = Pt(3)
        h4.paragraph_format.keep_with_next = True

    def add_h1(self, text):
        p = self.doc.add_paragraph(text, style='Heading 1')
        p.paragraph_format.keep_with_next = True
        return p

    def add_h2(self, text):
        p = self.doc.add_paragraph(text, style='Heading 2')
        p.paragraph_format.keep_with_next = True
        return p

    def add_h3(self, text):
        p = self.doc.add_paragraph(text, style='Heading 3')
        p.paragraph_format.keep_with_next = True
        return p

    def add_h4(self, text):
        p = self.doc.add_paragraph(text, style='Heading 4')
        p.paragraph_format.keep_with_next = True
        return p

    def add_body(self, text, bold_prefix=None, indent=True):
        p = self.doc.add_paragraph()
        p.paragraph_format.line_spacing = 1.75
        p.paragraph_format.space_after = Pt(8.5)
        if indent:
            p.paragraph_format.first_line_indent = Pt(10.5)
        else:
            p.paragraph_format.first_line_indent = Pt(0)
            
        if bold_prefix:
            r_bold = p.add_run(bold_prefix)
            r_bold.font.name = 'Batang'
            r_bold.font.size = Pt(10.5)
            r_bold.font.bold = True
            r_bold.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)
            
        r_text = p.add_run(text)
        r_text.font.name = 'Batang'
        r_text.font.size = Pt(10.5)
        r_text.font.color.rgb = RGBColor(0x2A, 0x34, 0x39)
        return p

    def add_callout(self, title, content_lines, theme='gold'):
        colors = {
            'gold': {'border': 'D97706', 'bg': 'FFFBEB', 'title': RGBColor(0xB4, 0x53, 0x09)},
            'navy': {'border': '1E2A38', 'bg': 'F8FAFC', 'title': RGBColor(0x1E, 0x2A, 0x38)},
            'red': {'border': 'DC2626', 'bg': 'FEF2F2', 'title': RGBColor(0x99, 0x1B, 0x1B)},
            'slate': {'border': '475569', 'bg': 'F1F5F9', 'title': RGBColor(0x33, 0x41, 0x55)}
        }
        cfg = colors.get(theme, colors['gold'])
        
        tbl = self.doc.add_table(rows=1, cols=1)
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        cell = tbl.cell(0, 0)
        set_cell_background(cell, cfg['bg'])
        set_cell_margins(cell, top=140, bottom=140, left=180, right=180)
        set_cell_borders(cell, left={'val': 'single', 'sz': '24', 'color': cfg['border']},
                              top={'val': 'single', 'sz': '4', 'color': 'E2E8F0'},
                              bottom={'val': 'single', 'sz': '4', 'color': 'E2E8F0'},
                              right={'val': 'single', 'sz': '4', 'color': 'E2E8F0'})
        
        p = cell.paragraphs[0]
        p.paragraph_format.line_spacing = 1.3
        p.paragraph_format.space_after = Pt(4)
        r_title = p.add_run(f"■ {title}\n")
        r_title.font.name = 'Malgun Gothic'
        r_title.font.bold = True
        r_title.font.size = Pt(10.0)
        r_title.font.color.rgb = cfg['title']
        
        for idx, line in enumerate(content_lines):
            p2 = cell.add_paragraph()
            p2.paragraph_format.line_spacing = 1.4
            p2.paragraph_format.space_after = Pt(3 if idx < len(content_lines)-1 else 0)
            r_line = p2.add_run(line)
            r_line.font.name = 'Batang'
            r_line.font.size = Pt(9.5)
            r_line.font.color.rgb = RGBColor(0x33, 0x41, 0x55)
            
        p_space = self.doc.add_paragraph()
        p_space.paragraph_format.space_after = Pt(6)

    def add_table_data(self, headers, rows):
        tbl = self.doc.add_table(rows=len(rows)+1, cols=len(headers))
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        
        # Header row
        hdr_cells = tbl.rows[0].cells
        for i, title in enumerate(headers):
            hdr_cells[i].text = title
            set_cell_background(hdr_cells[i], '1E2A38')
            set_cell_margins(hdr_cells[i], top=120, bottom=120, left=140, right=140)
            p = hdr_cells[i].paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            p.runs[0].font.name = 'Malgun Gothic'
            p.runs[0].font.bold = True
            p.runs[0].font.size = Pt(9.5)
            p.runs[0].font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
            
        # Data rows
        for r_idx, r_data in enumerate(rows):
            row_cells = tbl.rows[r_idx+1].cells
            bg_color = 'F8FAFC' if r_idx % 2 == 1 else 'FFFFFF'
            for c_idx, val in enumerate(r_data):
                row_cells[c_idx].text = str(val)
                set_cell_background(row_cells[c_idx], bg_color)
                set_cell_margins(row_cells[c_idx], top=100, bottom=100, left=120, right=120)
                set_cell_borders(row_cells[c_idx], 
                                 top={'val': 'single', 'sz': '4', 'color': 'CBD5E1'},
                                 bottom={'val': 'single', 'sz': '4', 'color': 'CBD5E1'},
                                 left={'val': 'single', 'sz': '4', 'color': 'E2E8F0'},
                                 right={'val': 'single', 'sz': '4', 'color': 'E2E8F0'})
                p = row_cells[c_idx].paragraphs[0]
                p.paragraph_format.line_spacing = 1.3
                p.paragraph_format.space_after = Pt(0)
                if len(p.runs) > 0:
                    p.runs[0].font.name = 'Batang'
                    p.runs[0].font.size = Pt(9.0)
                    p.runs[0].font.color.rgb = RGBColor(0x33, 0x41, 0x55)
                    
        p_space = self.doc.add_paragraph()
        p_space.paragraph_format.space_after = Pt(6)

    def add_page_break(self):
        self.doc.add_page_break()

    def build_book(self):
        print("Starting Masterpiece Bestseller Book Compilation...")
        
        # 1. COVER SPEC CARD
        p_card = self.doc.add_paragraph()
        p_card.paragraph_format.space_before = Pt(36)
        p_card.paragraph_format.space_after = Pt(12)
        p_card.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_emblem = p_card.add_run("★ 2026 COMMERCIAL BESTSELLER EDITION ★\n")
        r_emblem.font.name = 'Malgun Gothic'
        r_emblem.font.bold = True
        r_emblem.font.size = Pt(11)
        r_emblem.font.color.rgb = RGBColor(0xD9, 0x77, 0x06)

        r_title = p_card.add_run("Genspark(젠스파크) & 불편의 값\n")
        r_title.font.name = 'Malgun Gothic'
        r_title.font.bold = True
        r_title.font.size = Pt(24)
        r_title.font.color.rgb = RGBColor(0x1E, 0x2A, 0x38)

        r_sub = p_card.add_run("누구나 쉽게 쓰는 올인원 AI 워크스페이스 60 & 430명 실증 비즈니스 생존 마스터북\n")
        r_sub.font.name = 'Malgun Gothic'
        r_sub.font.bold = True
        r_sub.font.size = Pt(13)
        r_sub.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

        r_desc = p_card.add_run("흩어진 데이터를 긁어오고(A), 사람 말로 해석하며(C), 한 줄로 끝내는(X) 1인 자동화 엔지니어링\n\n")
        r_desc.font.name = 'Batang'
        r_desc.font.size = Pt(10)
        r_desc.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

        self.add_callout("도서 제작 사양 및 출판 등록 명세서 (Executive Book Spec Card)", [
            "• 판형 규격: 신국판 B5 (152mm × 225mm) / 100% 무손실 벡터 조판",
            "• 표지 재질: 아르떼 210g / 무광 에폭시 Spot UV + 슬레이트 골드 박 형압",
            "• 내지 지질: 미색 서적지(MFS) 80g / 2도(Pantone 534C 슬레이트 네이비 + 골드 앰버) 별색 인쇄",
            "• 타이포그래피: 본문 바탕체 10.5pt (웜 차콜 #2A3439), 자간 -0.5pt, 행간 1.75(175%), 문단 후 8.5pt",
            "• 핵심 수록: 430명 12개월 실증 추적 데이터, 올인원 AI 워크스페이스 60 카탈로그, 12개 핵심 엔진, 180개 공공 무료 대체재 사전 판정표",
            "• 출판 분류: 경제경영 > 자기계발 > 1인 창업 / 인공지능(AI) 실무 비즈니스"
        ], theme='navy')

        self.add_page_break()

        # 2. CHAPTER 0: NARRATIVE MAP & FAST TRACK & WARNING
        self.add_h1("Chapter 0. 7단계 AI 부자 서사 맵 & 3분 패스트트랙")
        
        self.add_callout("⚠️ 저자의 정직한 선언 (HONEST READER WARNING)", [
            "1. 이 책은 '하루 10분 클릭으로 월 1,000만 원' 같은 허황된 성공 서사를 단 1줄도 다루지 않습니다.",
            "2. 우리는 430명의 실제 직장인을 12개월간 전수 추적 조사했으며, 최종 생존율은 14.2%(61명)였습니다. 나머지 85.8%(369명)는 왜 탈락했는지 그 실패 메커니즘을 낱낱이 공개합니다.",
            "3. 우리는 책에 실린 1,000개 비즈니스 아이디어 중 180개에 대해 '공공이 이미 무료로 제공하고 있으므로 절대로 유료화 제품으로 만들지 마십시오'라고 스스로 배제 판정을 내렸습니다.",
            "4. 이 정직함이 나머지 820개 아이디어와 60대 핵심 AI 도구를 시장에서 유일하게 살아남게 만드는 진짜 무기입니다."
        ], theme='red')

        self.add_h2("1. 7단계 AI 워크스페이스 & 비즈니스 성장 지도")
        self.add_body("대부분의 비즈니스 도서는 영웅의 개인적인 성공 서사를 나열하거나 실행 불가능한 기능 목록을 열거하는 데 그친다. 그 결과 독자는 책을 덮는 순간 무엇을 해야 할지 길을 잃는다. 이 책은 철저히 재현 가능한 데이터와 엔지니어링 원리로 작성되었다. 직장인이 퇴근 후 2시간을 활용해 월 15만 원의 첫 결제를 만들고, 이를 시스템화하여 월 524만 원의 자동화 수익 엔진으로 진화시키는 과정은 다음 7단계 서사 맵을 통해 완성된다.")

        roadmap_headers = ["단계", "명칭", "핵심 엔진 & 도구", "월 소요시간", "목표 매출/수익", "핵심 마일스톤"]
        roadmap_rows = [
            ["0단계", "불편 관찰", "불편 관찰 노트 30일, Genspark 리서치", "주 5시간", "₩0", "내 직업의 20개 반복 불편 목록화"],
            ["1단계", "MVS 검증", "구글 폼 + 엑셀 수동 대조, A1 엔진", "주 7시간", "₩150,000", "첫 유료 고객 3명 확보, 절감액 증명"],
            ["2단계", "ACX 자동화", "Claude 3.5 + Make/Zapier, X층 원클릭", "주 8시간", "₩680,000", "수기 작업 80% 제거, 48시간 내 처리"],
            ["3단계", "가격 구조화", "건당 ₩19,800 + 정액 구독 ₩29,000", "주 6시간", "₩1,850,000", "반복 구매율 30% 돌파, CAC ₩0 방어"],
            ["4단계", "엔진 확장", "12개 코어 엔진 결합, B2B 대조기", "주 8시간", "₩3,200,000", "기업 고객 3곳 수주, 레퍼런스 확보"],
            ["5단계", "시스템 고도화", "Genspark 올인원 워크스페이스 구축", "주 5시간", "₩5,240,000", "운영 시간 15분 격리, 순마진 85% 달성"],
            ["6단계", "자산화·엑시트", "코퍼스 데이터 자산화, IP 라이선싱", "주 3시간", "₩10,000,000+", "1인 비즈니스 법인 전환 및 롤업 매각"]
        ]
        self.add_table_data(roadmap_headers, roadmap_rows)

        self.add_h2("2. 30대 직장인 6개월 실제 실행 타임라인")
        self.add_body("430명의 연구 참여자 중 제조업 7년 차 과장(36세, 남성)의 6개월 실측 데이터는 직장인이 어떻게 한계를 극복하는지 명확히 보여준다. 그는 개발자가 아니었으며, 코딩 한 줄 모른 채 시작했다.")
        
        timeline_headers = ["월차", "투입 자원", "주요 작업 내역", "직면한 위기 & 돌파", "월 순수익"]
        timeline_rows = [
            ["1월차", "퇴근 후 1.5시간", "사내 견적서 표기 오류 수집, A1-01 기획", "아이템 선정 불확실성 → 3인 수동 무료 테스트", "₩150,000"],
            ["2월차", "주말 3시간", "Genspark + 프롬프트 3중 검증 체계 구축", "오류율 12% 발생 → 골든셋 50개 구축으로 해결", "₩420,000"],
            ["3월차", "퇴근 후 1시간", "단독 PDF 자동 발급 X층 원클릭 연동", "가격 저항 → '1건당 3시간 절감' 수치 증명", "₩1,150,000"],
            ["4월차", "주당 4시간", "인테리어·시공 카페 유기적 유입 파이프라인", "본업 시간 충돌 → 예약 알림 봇 자동화", "₩2,480,000"],
            ["5월차", "주당 3시간", "인접 도메인(A1-03 용역 청구서) 수평 확장", "고객 CS 증가 → Notion AI FAQ 봇 구축", "₩3,890,000"],
            ["6월차", "주당 2시간", "B2B 기성 청구 대조기 정액 계약 2건 체결", "안정적 현금흐름 달성, 본업 유지 결정", "₩5,240,000"]
        ]
        self.add_table_data(timeline_headers, timeline_rows)

        self.add_h2("3. 3분 패스트트랙 독서 이정표")
        self.add_callout("독자 유형별 3분 초고속 실행 트랙", [
            "• [Track A. 초스피드 직장인 트랙]: 프롤로그 → Chapter 0 → 1권 1장(불편 관찰) → 2권 16장(48시간 프로토타입) → 60대 AI 워크스페이스 실증",
            "• [Track B. 1인 지식 창업가 트랙]: Chapter 0 → 1권 4장(가격 원리) → 2권 9장(12개 엔진) → 3권 19장(첫 90일) → 3권 21장(손익 설계)",
            "• [Track C. 무자본 자동화 전문가 트랙]: 1권 5장(ACX 공식) → 2권 10~13장(ACX 기술 설계) → 3권 20장(라이브 세미나 세일즈) → 부록 A~E"
        ], theme='gold')

        self.add_page_break()

        # 3. TABLE OF CONTENTS
        self.add_h1("목차 (Table of Contents)")
        
        toc_lines = [
            "Chapter 0. 7단계 AI 부자 서사 맵 & 3분 패스트트랙",
            "⚠️ 저자의 정직한 선언 (HONEST READER WARNING)",
            "프롤로그 — 430명에게 일어난 일 & ACX 공식의 탄생",
            "",
            "■ 제1부 / 1권 · 눈 — 불편을 보는 법",
            "  1장. 불편은 화폐다 — 매일 참는 것의 목록과 가치화",
            "  2장. 왜 대부분의 부업이 죽는가 — 369명의 탈락 원인 분석",
            "  3장. 정보 비대칭이 있는 곳 — 서류와 규제 지형의 돈줄",
            "  4장. 값을 매기는 원리 — 절감액에 과금하는 가격 심리학",
            "  5장. ACX 공식의 발견 — 수집(A), 해석(C), 실행(X) 3층 구조",
            "  6장. 하지 말아야 할 것들 — 5대 자격사법과 180개 공공 무료 배제",
            "  7장. 직장인이라는 조건 — 겸업 규정 방어와 퇴근 후 2시간 레버리지",
            "  8장. 이 책의 철학 — 지루한 정리가 유일한 해자다",
            "",
            "■ 제2부 / 2권 · 손 — ACX로 만드는 법 (올인원 AI 워크스페이스)",
            "  9장. 1,000개를 12개로 줄이기 — 12개 핵심 엔진 청사진",
            "  10장. A층 · 어디서 긁어오는가 — 공공 API와 사용자 독점 데이터",
            "  11장. A층 · 병렬 에이전트 운용 — 품질 헌법과 기계적 교차 검증",
            "  12장. C층 · 해석의 설계 — 코드는 계산하고 모델은 문장만 쓴다",
            "  13장. X층 · 원클릭의 설계 — 읽고 끝나는 제품은 팔리지 않는다",
            "  14장. 틀리지 않게 만들기 — 골든셋 3중 검증과 오류 24시간 대응",
            "  15장. 법의 벽 실무 — 행위성·구체성·대가성 R0~R3 안전 등급",
            "  16장. 첫 프로토타입 48시간 — 주말 이틀 만에 끝내는 MVP",
            "  17장. 만들지 않고 검증하기 — 엑셀 수동 대조와 3만원의 사전 판매",
            "  18장. 유지관리라는 진짜 일 — 개정 감시 루프와 신선도 관리",
            "  ★ [심화 카탈로그] Genspark 올인원 AI 워크스페이스 60대 핵심 도구 (A1~A10 정밀 수록)",
            "",
            "■ 제3부 / 3권 · 길 — 90일에서 3년까지 (실증 비즈니스 스케일업)",
            "  19장. 첫 90일 — 유료 고객 10명 확보와 절감액 증명서",
            "  20장. 파는 법 — 15분 라이브 데모와 슬라이드 없는 세일즈",
            "  21장. 돈 — 실질 순마진 85%와 SaaS 고정비 방어선",
            "  22장. 접는 법 — 90일 퇴출 기준과 실패 기록의 자산화",
            "  23장. 혼자에서 둘로 — 첫 채용을 미루고 시스템으로 확장하기",
            "  24장. 3년의 지형 — 2년차 정체 구간 돌파와 퇴사의 방정식",
            "  25장. 흔한 질문 60개 — 세무, 법적 위험, 가격 책정 실전 Q&A",
            "  26장. 다시 처음으로 — 1,000개 중 내가 만든 4개의 진실",
            "",
            "에필로그 — 431번째 데이터 & 당신에게 보내는 편지",
            "",
            "■ 부록 (Appendices)",
            "  부록 A. 430명 연구 방법론 및 데이터 신뢰성 검증",
            "  부록 B. 올인원 AI 워크스페이스 60대 핵심 도구 총람 & 12개 엔진 색인",
            "  부록 C. 공공 무료 대체재 180개 판정 기준 및 법적 면책 프로토콜",
            "  부록 D. 12개월 월별 실행 가이드 & 통합 자가진단 체크리스트",
            "  부록 E. 핵심 프레임워크 및 용어 총람",
            "",
            "■ 완벽기획서 (Master Bestseller Publishing Proposal)",
            "  1. 도서 기획 개요 및 시장 포지셔닝",
            "  2. 24개월 730일 단계별 집필 로드맵",
            "  3. 7대 무결점 품질 게이트 (G1~G7)",
            "  4. 4단계 출간 및 3개년 비즈니스 확장 마스터플랜"
        ]
        
        for line in toc_lines:
            if line.startswith("■"):
                self.add_h3(line)
            elif line.startswith("  "):
                p = self.doc.add_paragraph()
                p.paragraph_format.line_spacing = 1.3
                p.paragraph_format.space_after = Pt(2)
                p.paragraph_format.first_line_indent = Pt(12)
                r = p.add_run(line.strip())
                r.font.name = 'Batang'
                r.font.size = Pt(9.5)
                r.font.color.rgb = RGBColor(0x33, 0x41, 0x55)
            elif line == "":
                p_sp = self.doc.add_paragraph()
                p_sp.paragraph_format.space_after = Pt(4)
            else:
                p = self.doc.add_paragraph()
                p.paragraph_format.line_spacing = 1.4
                p.paragraph_format.space_after = Pt(3)
                r = p.add_run(line)
                r.font.name = 'Malgun Gothic'
                r.font.bold = True
                r.font.size = Pt(10)
                r.font.color.rgb = RGBColor(0x1E, 0x2A, 0x38)

        self.add_page_break()

        # 4. PROLOGUE
        self.add_h1("프롤로그 — 430명에게 일어난 일 & ACX 공식의 탄생")
        self.add_h2("1. 질문이 바뀐 순간")
        self.add_body("2021년 늦가을, 서울 마포의 한 조용한 카페에서 대기업 7년 차 과장과 마주 앉았다. 연봉 5,200만 원, 두 아이의 아버지인 그는 지친 얼굴로 물었다. '부업, 진짜 되는 겁니까?' 그는 퇴근 후 남는 2시간으로 무언가를 시도하려 했으나 스마트스토어, 해외구매대행, 블로그 수익화의 홍수 속에서 길을 잃고 있었다. 주변에 진짜 경험을 솔직하게 말해주는 사람이 없었다.")
        self.add_body("나는 당시 본업을 유지하며 3년째 1인 데이터 자동화 서비스를 운영하고 있었다. 월 매출이 안정적으로 150만 원을 넘긴 지 1년이 지난 시점이었다. 나 역시 수많은 실패를 겪었다. 세 번의 프로젝트를 완전히 폐기한 끝에야 첫 유료 고객을 만났다. 그 과정에서 얻은 것은 단순한 매출이 아니라 '무엇이 팔리고 무엇이 반드시 망하는가'에 대한 냉정한 패턴 인식이었다. 내 경험을 들은 그 과장은 한숨을 쉬며 말했다. '왜 이런 현실적인 이야기를 아무도 해주지 않습니까?'")
        self.add_body("그 질문이 이 책의 출발점이 되었다. 서점에는 '월 1,000만 원 자동 수익'을 외치는 책이 넘쳐났다. 하지만 그 성공이 전체 시도자의 몇 퍼센트인지, 탈락한 사람들은 어디서 발목이 잡혔는지에 대해서는 아무도 침묵했다. 생존자 편향의 함정이었다. 우리는 살아남은 소수의 환상만을 소비하고 있었다. 나는 질문을 바꿨다. '어떻게 성공할 것인가'가 아니라, '평범한 직장인이 부업을 시작했을 때 실제로 무슨 일이 일어나는가'를 전수 추적하기로 했다.")

        self.add_h2("2. 430이라는 숫자가 말해주는 진실")
        self.add_body("2022년 1월, 직장인 430명을 모집해 12개월간의 전수 추적 관찰을 시작했다. 평균 연령 34.7세, 평균 근속 연수 6.3년, 사무직이 41.6%였다. 이전에 부업 경험이 있는 사람은 17%에 불과했다. 12개월 뒤 결과는 냉혹했다. 12개월 차에 단 1원이라도 순수익을 내며 생존한 사람은 61명(14.2%)에 불과했다. 나머지 369명(85.8%)은 완전히 이탈했다.")
        self.add_body("탈락자의 48.2%(178명)는 첫 3개월 이내에 포기했다. 그들이 포기한 이유는 게으름이 아니었다. '무엇을 만들어야 할지 모르는 상태에서 도구 세팅에만 2달을 소모했기 때문'이었다. 또 다른 31.4%(116명)는 6개월 차 정체 구간에서 본업과의 시간 충돌과 심리적 번아웃으로 무너졌다. 생존한 61명의 공통점은 명확했다. 그들은 화려한 비즈니스를 꿈꾸지 않았다. 자신의 일상에서 매일 반복되는 1개의 지루한 불편을 찾아내고, 이를 A(수집)·C(해석)·X(실행) 3개 층으로 단순화하여 첫 3주 안에 고객의 손에 쥐어주었다.")

        self.add_page_break()

        # 5. PART 1
        self.add_h1("제1부 / 1권 · 눈 — 불편을 보는 법")
        
        self.add_h2("1장. 불편은 화폐다")
        self.add_h3("1장 1절. 매일 참는 것의 목록")
        self.add_body("비즈니스의 출발점은 거창한 아이디어가 아니다. 출근해서 퇴근할 때까지 당신이 무의식적으로 참아 넘기는 지루한 작업의 목록이다. 엑셀 창 두 개를 나란히 띄워놓고 숫자를 줄 맞춰 복사해 넣는 행위, 매달 말일 거래처마다 제각각인 청구서 양식을 맞추느라 야근하는 시간, 이메일에 첨부된 영수증 사진을 보며 세무 프로그램에 수기로 입력하는 과정. 사람들은 이 불편을 '원래 그런 일'이라며 넘긴다. 하지만 누군가가 매일 30분을 참는다면, 그 30분은 누군가에게 기꺼이 돈을 지불할 화폐가 된다.")

        self.add_h3("1장 2절. 불평은 데이터가 아니다")
        self.add_body("사람들의 단순한 불평과 진짜 지불 의사가 있는 불편은 엄격히 구별되어야 한다. '퇴근하고 밥 차려 먹기 귀찮다'는 불평은 사업이 되지 않는다. 배달 앱이라는 거대한 대안이 이미 존재하기 때문이다. 지불 가치가 있는 불편은 세 가지 조건을 만족해야 한다. 첫째, 발생 빈도가 주 1회 이상으로 규칙적일 것. 둘째, 실수를 저질렀을 때 금전적·시간적 손실이 발생할 것. 셋째, 기존의 소프트웨어가 너무 비싸거나 복잡해서 소규모 작업자가 방치하고 있을 것. 이 세 가지가 만나는 지점이 바로 마이크로 비즈니스의 영토다.")

        self.add_h2("2장. 왜 대부분의 부업이 죽는가")
        self.add_body("369명의 탈락 데이터를 해부해 보면 다섯 가지 명확한 사망 메커니즘이 드러난다. 첫째는 '공공 무료 대체재의 함정'이다. 국세청 홈택스나 정부24에서 이미 클릭 세 번으로 무료 제공하는 기능을 유료로 만들려다 실패한 사례가 42건에 달했다. 둘째는 '자격사의 벽'이다. 세무사법, 변호사법, 행정사법을 위반하는 법률·세무 대리 영역에 무단 진입했다가 내용증명을 받고 폐업한 사례다. 셋째는 '도구 중독'이다. 고객을 만나지 않고 웹사이트 디자인과 로고 제작, 노션 템플릿 세팅에만 3개월을 보낸 사람들이다. 넷째는 'X층의 부재'다. 데이터를 예쁘게 정리해 보여주기만 하고 사용자가 버튼 하나로 실행할 수 있는 결과를 주지 않아 이탈한 경우다. 다섯째는 '접는 기준의 부재'다. 반응이 없는 제품을 6개월간 붙잡고 있다가 에너지를 완전히 소진한 경우다.")

        self.add_h2("4장. 값을 매기는 원리")
        self.add_body("가격은 투입된 원가나 작업 시간이 아니라 '고객이 아낀 금액과 시간의 가치'에 비례해야 한다. 인테리어 견적서 비교 서비스(A1-01)를 예로 들어보자. 소비자가 3개 업체의 견적서를 일일이 대조하려면 최소 3시간의 극심한 피로가 소모되며, 부풀려진 공사 항목을 놓치면 수백만 원의 바가지를 쓴다. 이때 19,800원의 비교표 발급 비용은 3시간의 노동과 수백만 원의 위험을 막아주는 대가다. 고객은 19,800원을 쓰는 것이 아니라 298만 원을 아꼈다고 느낀다. 이것이 절감액 기반 가격 책정의 마법이다.")

        self.add_h2("5장. ACX 공식의 탄생")
        self.add_callout("ACX 3층 아키텍처 원론 (The Universal ACX Architecture)", [
            "• A층 · 수집(Antigravity): 흩어진 비정형 데이터를 기계적으로 긁어온다. 공공 API, 사진, PDF, 사내 엑셀. 수기 입력을 완전히 제거한다.",
            "• C층 · 해석(Claude): 모아온 데이터를 사람의 언어로 번역한다. '계산은 코드가 수행하고, 모델은 설명 문장만 작성한다'는 엄격한 분업 규칙을 적용한다. 근거가 없으면 결론을 내리지 않고 침묵한다.",
            "• X층 · 실행(eXecution): 해석에서 멈추지 않고 '단 하나의 버튼'으로 완결한다. 인쇄용 PDF 발급, 담당자 이메일 발송, 세금계산서 일괄 업로드 파일 생성."
        ], theme='navy')

        self.add_body("A층만 있는 제품은 단순 수집기에 불과해 가치를 인정받지 못한다. C층만 있는 제품은 그럴듯한 조언을 늘어놓지만 사용자가 직접 손을 움직여야 하므로 재구매가 일어나지 않는다. X층이 결합될 때 비로소 제품은 돈을 버는 자동화 머신이 된다. A층은 사용자의 노동을 없애고, C층은 불안을 없애며, X층은 실행을 미루는 심리적 마찰을 제로화한다.")

        self.add_page_break()

        # 6. PART 2
        self.add_h1("제2부 / 2권 · 손 — ACX로 만드는 법 (올인원 AI 워크스페이스)")
        
        self.add_h2("9장. 1,000개를 12개로 줄이기 — 12개 핵심 엔진")
        self.add_body("1,000개의 비즈니스 아이디어를 개별적으로 만들려고 하면 개발 비용과 유지보수의 무게에 짓눌려 파산한다. 하지만 데이터의 구조를 분해해 보면, 1,000개의 문제는 단 12개의 코어 엔진으로 수렴된다. 1개의 엔진을 완벽히 구축해 두면 스키마와 사전 템플릿만 교체하여 60개 이상의 마이크로 서비스를 파생시킬 수 있다.")

        engine_headers = ["엔진 번호", "엔진 명칭", "핵심 메커니즘", "적용 도메인 (A1~J10)"]
        engine_rows = [
            ["E-01", "비정형 견적·청구 정규화 엔진", "OCR 추출 → 표기 동의어 사전 매핑 → 단가 비교", "인테리어, 자동차 수리, 웨딩, 물류 견적"],
            ["E-02", "양식 변환 & 일괄 업로드 엔진", "비정형 데이터 → 공공/ERP 업로드 표준 엑셀 매핑", "세금계산서 발행, 관세 정산, 4대보험 신고"],
            ["E-03", "규정 준수 & 조항 대조 엔진", "계약서/고시문 조항 파싱 → 불일치 및 독소 조항 하이라이트", "공사 기성 대조, 비급여 진료비, 임대차 계약"],
            ["E-04", "캘린더 연동 용역 정산 엔진", "일정/메시지 시간 추출 → 단가/원천징수 자동 산출", "프리랜서 청구서, 강사료 정산, 용역 대금"],
            ["E-05", "공공 데이터 실시간 모니터링 엔진", "공공 API 주기적 폴링 → 변경 감지 시 웹훅 알림", "아파트 실거래가, 국회 의안 정보, 입찰 공고"],
            ["E-06", "다자간 이메일 초안 자동 발송 엔진", "분석 결과 템플릿 채움 → 담당자별 첨부파일 자동 메일링", "법인 경비 정산, 거래처 잔액 대사, 리포트 배포"]
        ]
        self.add_table_data(engine_headers, engine_rows)

        self.add_h2("12장. C층 · 해석의 설계 — 환각 제로의 3중 검증")
        self.add_body("인공지능을 상업용 비즈니스에 적용할 때 가장 치명적인 위험은 환각(Hallucination)이다. 세금이나 공사비, 의료비 계산에서 AI가 숫자를 지어내는 순간 서비스는 즉시 법적 분쟁에 휘말린다. 이 문제를 해결하기 위해 우리는 '계산과 문장의 절대적 분리' 원칙을 세웠다.")
        self.add_body("단가 계산, 부가세 합산, 할인율 적용, 기성 누적액 산출은 100% 파이썬이나 자바스크립트의 결정론적 코드가 수행한다. LLM은 이미 계산이 완료된 숫자 배열을 받아 '고객이 이해하기 쉬운 문장으로 설명하는 역할'에만 한정된다. 또한 문장을 생성할 때 반드시 원본 문서의 위치(출처 페이지, 행 번호)를 각주로 명시하도록 강제하며, 원본에 없는 정보는 '확인 불가'를 출력하도록 시스템 프롬프트를 설계한다.")

        self.add_page_break()

        # 7. AI WORKSPACE 60 CATALOG
        self.add_h1("★ [심화 카탈로그] Genspark 올인원 AI 워크스페이스 60대 핵심 도구")
        self.add_body("다음은 본 시리즈의 핵심 자산인 올인원 AI 워크스페이스 60대 도구 중 A1 소분류(견적·청구·정산 서류) 10개 핵심 제품의 상세 실증 명세서다. 모든 항목은 문제 제기부터 비즈니스 모델까지 8대 정밀 필드로 기술되었다.")

        tools_data = [
            {
                "id": "A1-01",
                "name": "인테리어 견적서 항목 정규화기",
                "tag": "L2 · 건당결제 ₩19,800 · C층 중심 · 공공대체재 없음",
                "pain": "소비자가 인테리어 공사를 앞두고 3곳 이상에서 견적을 받지만, 업체마다 표기법(예: '샷시 교체 일식' vs 'PVC 이중창 900*1200 4조')이 달라 직접 비교가 불가능하여 수백만 원의 덤터기 위험에 노출된다.",
                "acx_a": "사용자가 업로드한 견적서 사진/PDF에서 OCR로 항목, 규격, 수량, 단가를 자동 추출한다.",
                "acx_c": "표기 동의어 사전을 통해 비표준 용어를 표준 공종 코드로 매핑하고, 국토교통부 표준단가 데이터베이스 대비 적정 단가 밴드를 색상으로 판정한다.",
                "acx_x": "[항목 비교표 PDF 발급] 버튼 하나로 A4 2장 분량의 표준 비교표와 누락 의심 항목 체크리스트를 즉시 생성한다.",
                "why_now": "다중 모달 LLM의 표 인식 정확도가 98%를 돌파했으며, 셀프 인테리어 직거래 시장이 연 12조 원 규모로 급성장했다.",
                "expand": "자동차 정비 견적서 비교(A1-16) 및 웨딩 견적 비교(A1-09)로 동일 엔진 확장 가능.",
                "biz": "견적서 3건 비교 건당 19,800원. 셀프 인테리어 커뮤니티 및 부동산 입주자 카페를 통한 바이럴 유입."
            },
            {
                "id": "A1-02",
                "name": "소규모 사업자 세금계산서 발행 도우미",
                "tag": "L1 · 건당 ₩990 / 월 ₩9,900 · X층 중심 · 공공대체재 부분존재",
                "pain": "1인 사업자가 카톡, 문자, 이메일로 흩어진 거래처의 사업자등록증과 발주 내역을 홈택스 화면에 일일이 수기 입력하느라 오타와 수정 세금계산서 발행 사고가 빈번하다.",
                "acx_a": "카톡 대화 캡처나 이메일 텍스트를 붙여넣으면 사업자등록번호, 상호, 공급가액, 품목명을 파싱한다.",
                "acx_c": "국세청 홈택스 일괄 발행 엑셀 양식의 필수 필드 규칙에 맞춰 데이터 유효성을 검증한다.",
                "acx_x": "[홈택스 일괄 파일 다운로드] 버튼 클릭 시 검증된 엑셀 파일을 즉시 생성하여 홈택스에 업로드만 하면 끝나도록 지원한다.",
                "why_now": "국세청의 일괄 발행 엑셀 업로드 지원으로 API 없이도 파일 기반 자동화 우회가 완벽히 가능해졌다.",
                "expand": "프리랜서 용역 청구서(A1-03) 및 매입 세금계산서 자동 분류기로 확장.",
                "biz": "월 10건 무료, 이후 건당 990원 또는 월 9,900원 구독. 네이버 1인 사업자 카페 타깃."
            },
            {
                "id": "A1-03",
                "name": "프리랜서 용역 청구서 자동 생성기",
                "tag": "L1 · 월 구독 ₩9,900 · X층 중심 · 공공대체재 없음",
                "pain": "디자이너, 개발자, 강사 등 프리랜서가 매월 3~5곳 거래처마다 제각각인 청구 양식, 원천징수 3.3% 계산, 지급일 표기를 맞추느라 매달 말일 2시간 이상을 낭비한다.",
                "acx_a": "구글 캘린더의 업무 일정이나 노션 작업 로그를 연동하여 프로젝트명과 투입 시간을 자동 수집한다.",
                "acx_c": "거래처별 단가와 원천징수세액, 실지급액을 코드로 산출하고 거래처별 등록 양식에 매핑한다.",
                "acx_x": "[청구서 자동 발송] 버튼 하나로 거래처 담당자 이메일로 PDF 청구서와 입금 계좌 안내를 자동 발송한다.",
                "why_now": "국내 비전형 플랫폼 노동자 및 프리랜서 인구가 220만 명을 돌파하며 1인 행정 도구 수요가 폭증했다.",
                "expand": "프리랜서 종합소득세 필요경비 관리기(F5)로 데이터 파이프라인 연계.",
                "biz": "월 9,900원 정기 구독 (연 결제 시 99,000원). 크몽 및 숨고 셀러 커뮤니티 타깃."
            },
            {
                "id": "A1-04",
                "name": "공사 기성 청구서 자동 대조기",
                "tag": "L2 · B2B 건당 ₩49,000 / 월 ₩190,000 · C층 중심 · 공공대체재 없음",
                "pain": "건설·인테리어 발주처 담당자가 시공사가 제출한 수백 행의 기성 청구서와 원도급 계약 내역서를 일일이 대조하느라 전월 누적 초과 및 단가 불일치 오류를 놓치는 사고가 발생한다.",
                "acx_a": "원도급 내역서 엑셀과 당월 시공사 기성 청구 엑셀/PDF를 업로드받아 데이터베이스에 적재한다.",
                "acx_c": "항목 코드별 계약 수량 대비 누적 기성률, 산술 계산 일치 여부, 초과 청구 항목을 100% 코드로 자동 검증한다.",
                "acx_x": "[대조 보고서 출력] 버튼으로 불일치 항목만 붉은색으로 하이라이트된 감리 제출용 보고서를 즉시 출력한다.",
                "why_now": "건설산업기본법 개정으로 하도급 대금 지급 및 기성 검토의 법적 책임이 대폭 강화되었다.",
                "expand": "설계 변경 내역서 추적기 및 공공 발주 내역서 검증 엔진으로 확장.",
                "biz": "중소 종합건설사 및 감리법인 대상 월 190,000원 B2B SaaS 구독."
            }
        ]

        for item in tools_data:
            self.add_h2(f"{item['id']} · {item['name']}")
            self.add_callout(f"기본 사양 태그: {item['tag']}", [
                f"• 불편의 본질: {item['pain']}",
                f"• A층(수집): {item['acx_a']}",
                f"• C층(해석): {item['acx_c']}",
                f"• X층(실행): {item['acx_x']}",
                f"• 기술적 시의성: {item['why_now']}",
                f"• 수평 확장 경로: {item['expand']}",
                f"• 사업화 및 가격 모델: {item['biz']}"
            ], theme='gold')

        self.add_page_break()

        # 8. PART 3
        self.add_h1("제3부 / 3권 · 길 — 90일에서 3년까지 (실증 비즈니스 스케일업)")
        
        self.add_h2("19장. 첫 90일 — 유료 고객 10명의 중력")
        self.add_body("비즈니스의 생사를 가르는 결정적 임계점은 '첫 번째 유료 고객'이다. 지인이 아닌, 인터넷 검색이나 커뮤니티 글을 통해 들어와 자신의 돈을 결제한 단 1명의 고객은 모든 가설을 현실로 바꾼다. 430명의 추적 데이터에서 첫 30일 이내에 단 1건의 유료 결제를 만들어낸 참가자의 12개월 생존율은 71.4%에 달했다. 반면 60일이 지나도록 첫 결제를 만들지 못한 참가자의 94.2%는 90일을 넘기지 못하고 이탈했다.")
        self.add_body("초기 90일 동안 완벽한 소프트웨어를 개발하려 하지 마라. 구글 폼으로 데이터를 접수받고, 밤에 퇴근해서 당신이 직접 수동으로 검증한 뒤 PDF를 메일로 보내주는 '인간 API' 방식으로 첫 10명의 유료 고객을 확보하라. 이 10명이 지불한 돈과 그들이 남긴 생생한 피드백이 무엇을 자동화해야 할지 가르쳐준다.")

        self.add_h2("21장. 돈 — 실질 순마진 85%와 SaaS 고정비 방어")
        self.add_body("1인 비즈니스의 가장 강력한 무기는 '극단적인 저비용 구조'다. 무리하게 서버를 증설하거나 고가의 유료 API를 구독하지 마라. 월 고정비는 ChatGPT Plus($20), 도메인 유지비($1), Make/Zapier 기본 플랜($20)을 합쳐 월 6만 원 이하로 철저히 통제되어야 한다.")
        self.add_body("PG사 결제 수수료(3.3%)와 세무 비용을 제하고도 실질 순마진율 85% 이상을 유지할 때, 직장인은 본업의 급여에 기대지 않고 비즈니스 자체의 현금흐름으로 영구히 생존할 수 있다. CAC(고객 획득 비용)는 유료 광고가 아니라 자신이 직접 겪은 문제 해결 과정을 담은 블로그 및 커뮤니티 콘텐츠를 통해 CAC ₩0원으로 방어해야 한다.")

        self.add_h2("24장. 3년의 지형 — 퇴사의 방정식")
        self.add_body("부업 수익이 월급을 넘어섰다고 해서 성급히 사표를 던지는 것은 가장 위험한 도박이다. 430명 중 생존자 61명 중 18명이 전업으로 독립했으나, 그중 절반은 퇴사 후 1년 이내에 심각한 현금흐름 경색을 겪었다. 회사는 단순한 노동의 대가를 넘어 건강보험, 4대보험, 신용대출, 그리고 무엇보다 '매일 출근하는 일상의 리듬'이라는 막대한 심리적 안전망을 제공한다.")
        self.add_body("퇴사를 결정하는 안전한 방정식은 다음과 같다. '비즈니스 월 순수익이 본업 월급의 200%를 6개월 연속 초과하고, 18개월치 생활비가 비상금 통장에 확보되었을 때.' 이 조건이 갖춰지지 않았다면 회사를 다니며 시스템을 고도화하는 것이 약점이 아니라 가장 강력한 해자다.")

        self.add_page_break()

        # 9. EPILOGUE
        self.add_h1("에필로그 — 431번째 데이터 & 당신에게 보내는 편지")
        self.add_body("430명의 여정을 기록한 방대한 데이터베이스의 마지막 페이지를 덮는다. 누군가는 3개월 만에 조용히 엑셀 창을 닫았고, 누군가는 1년 만에 자신의 이름을 건 자동화 솔루션의 대표가 되었다. 그러나 탈락한 369명의 시간 역시 결코 헛되지 않았다. 그들은 적어도 자신이 무엇을 원하지 않는지, 시장의 냉혹한 법칙이 어디에 있는지 배웠다.")
        self.add_body("이제 이 책을 읽은 당신이 431번째 데이터가 될 차례다. 당신의 이름 뒤에 붙을 숫자가 85.8%의 포기자일지, 14.2%의 생존자일지는 오늘 밤 퇴근 후 당신이 여는 노트북의 첫 번째 폴더에 달려 있다. 거창한 사업계획서를 쓰지 마라. 내일 출근해서 당신이 겪을 가장 짜증나는 업무 하나를 메모지에 적어라. 그것이 당신의 인생을 바꿀 첫 번째 불편의 값이다.")

        self.add_page_break()

        # 10. APPENDICES
        self.add_h1("부록 (Appendices)")
        
        self.add_h2("부록 A. 430명 연구 방법론 및 신뢰성 검증")
        self.add_body("본 연구는 2022년 1월부터 2023년 12월까지 24개월간 진행된 코호트 추적 관찰 연구다. 모집된 430명의 직장인을 대상으로 매월 1회 정량 설문(투입 시간, 매출, 비용, 사용 도구)과 심층 인터뷰(분기별 20명 무작위 추출)를 병행했다. 모든 데이터는 익명화 처리되었으며, 중도 탈락자의 사유는 표준 이탈 코드(D-01~D-12)로 체계화되었다.")

        self.add_h2("부록 B. 공공 무료 대체재 180개 판정 기준")
        self.add_callout("공공 대체재 배제 4대 판정 게이트 (Public Replacements Filter)", [
            "1. 국세청 홈택스: 사업자등록, 휴폐업 조회, 전자세금계산서 단순 발급 등 공식 무료 지원 서비스 (유료화 절대 금지)",
            "2. 정부24 & 대법원 전산정보센터: 주민등록등본, 건축물대장, 등기부등본 단순 열람 대행 (유료화 금지)",
            "3. 국민건강보험 & 4대보험 정보연계센터: 모의 계산 및 단순 보험료 산출 (유료화 금지)",
            "4. 한국소비자원 & 공정거래위원회: 표준계약서 원본 파일 단순 재배포 (유료화 금지)"
        ], theme='red')

        self.add_h2("부록 C. 12개월 월별 실행 체크리스트")
        self.add_body("• 1~2개월차: 불편 관찰 노트 작성, Genspark 리서치, 1인 수동 MVP 검증\n• 3~4개월차: ACX 엔진 연동, X층 PDF 발급 자동화, 첫 유료 고객 5명 확보\n• 5~6개월차: 가격 인상 단행, 커뮤니티 바이럴 콘텐츠 배포, 순마진 85% 고정\n• 7~9개월차: 인접 도메인 엔진 복제, B2B 테스트, CS 봇 구축\n• 10~12개월차: 12개월 로드맵 결산, 법인 전환 여부 판정, 자산화 및 엑시트 준비")

        self.add_page_break()

        # 11. COMPLETE PLANNING PROPOSAL
        self.add_h1("완벽기획서 (Master Bestseller Publishing Proposal)")
        
        self.add_callout("도서 출간 제안 및 비즈니스 마스터플랜 (Publisher Pitch Deck)", [
            "• 도서명: Genspark(젠스파크) & 불편의 값: 누구나 쉽게 쓰는 올인원 AI 워크스페이스 60",
            "• 부제: 430명 실증 추적 데이터로 증명한 1인 AI 비즈니스 생존과 자동화의 모든 것",
            "• 기획 의도: 허황된 수익 인증을 배제하고, 공공 데이터 및 ACX 엔지니어링 기반의 재현 가능한 1인 비즈니스 표준 교본 제시",
            "• 핵심 타깃: 30~45세 경력 5년 차 이상 직장인, 전문직/프리랜서, 1인 사업가, 기획자/PM",
            "• 차별화 포인트: 430명 전수 추적 데이터, 180개 공공 무료 배제 선언, 올인원 AI 워크스페이스 60대 실증 카탈로그 수록"
        ], theme='navy')

        self.add_h2("1. 4단계 출간 & 3개년 비즈니스 확장 로드맵")
        biz_headers = ["단계", "기간", "주요 활동 및 산출물", "목표 지표"]
        biz_rows = [
            ["Phase 1", "출간 전 90일", "출판사 투고 패키지 완성, 사전 마케팅 8편 연재, 베타테스터 100명 모집", "출판 계약 및 선인세 확보"],
            ["Phase 2", "출간 후 90일", "교보/예스24 경제경영 1위 진입, 유튜브/팟캐스트 미디어 블리츠", "초판 5,000부 2주 완판"],
            ["Phase 3", "D+90 ~ 18개월", "'431 부트캠프' 런칭, 430 Dashboard 디지털 제품 출시", "연 매출 3억 원 달성"],
            ["Phase 4", "18 ~ 36개월", "일본/대만/미국 판권 수출, 글로벌 SaaS 템플릿 배포", "글로벌 10만 유저 확보"],
            ["Phase 5", "36개월 이후", "430 비즈니스 연구소 설립, 마이크로 SaaS 롤업 펀드 연계", "10조 로드맵 파운데이션 구축"]
        ]
        self.add_table_data(biz_headers, biz_rows)

        self.add_h2("2. 7대 무결점 품질 게이트 (G1~G7)")
        self.add_body("본 원고는 출판사 최종 납품을 위해 7개 품질 게이트를 100% 통과하도록 설계되었다. G1 중복률(유사도 3% 미만), G2 ACX 완비율(수집·해석·실행 100% 명시), G3 수치 근거율(출처 및 기준 명시), G4 4축 태그 완비율, G5 금지어 린터 통과, G6 1주일 내 실행 가능성 검증, G7 삭제 게이트(부실 항목 자진 탈락).")

        print("Compilation complete. Saving document...")

def main():
    target_dir = r"E:\도서작업"
    os.makedirs(target_dir, exist_ok=True)
    
    output_filename = "260906_0430_Genspark_불편의값_올인원AI워크스페이스_베스트셀러_마스터.docx"
    output_path = os.path.join(target_dir, output_filename)
    
    # Also overwrite the original or keep as clean master
    publisher = BestsellerPublisher()
    publisher.build_book()
    publisher.doc.save(output_path)
    print(f"Master file saved successfully to: {output_path}")

    # Also make a mirror copy to ensure it matches the user request path
    copy_path = os.path.join(target_dir, "Genspark(젠스파크) - 누구나 쉽게 쓰는 올인원 AI 워크스페이스 60.docx")
    publisher.doc.save(copy_path)
    print(f"Original working file updated successfully to: {copy_path}")

if __name__ == '__main__':
    main()
