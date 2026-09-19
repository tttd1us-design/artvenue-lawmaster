import docx
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.oxml.ns import qn
import os

def create_bestseller_docx(md_path, docx_path):
    doc = docx.Document()

    # 1. 판형 및 여백 설정 (신국판 B5: 152mm x 225mm)
    section = doc.sections[0]
    section.page_width = Mm(152)
    section.page_height = Mm(225)
    section.top_margin = Mm(25)
    section.bottom_margin = Mm(25)
    section.left_margin = Mm(23)
    section.right_margin = Mm(21)

    # 폰트 설정 함수
    def set_font(run, font_name='바탕체', size=10.5, color=None, bold=False):
        run.font.name = font_name
        run._element.rPr.rFonts.set(qn('w:eastAsia'), font_name)
        run.font.size = Pt(size)
        if color:
            run.font.color.rgb = RGBColor.from_string(color)
        run.bold = bold

    with open(md_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Heading 1
        if line.startswith('# '):
            p = doc.add_paragraph()
            run = p.add_run(line[2:])
            set_font(run, '맑은 고딕', 18, '1E2A38', True)
            p.paragraph_format.space_before = Pt(22)
            p.paragraph_format.space_after = Pt(12)
            p.paragraph_format.keep_with_next = True
        
        # Heading 2
        elif line.startswith('## '):
            p = doc.add_paragraph()
            run = p.add_run(line[3:])
            set_font(run, '맑은 고딕', 14, '1E2A38', True)
            p.paragraph_format.space_before = Pt(15)
            p.paragraph_format.space_after = Pt(8)
            p.paragraph_format.keep_with_next = True

        # Heading 3
        elif line.startswith('### '):
            p = doc.add_paragraph()
            run = p.add_run(line[4:])
            set_font(run, '맑은 고딕', 11.5, 'D97706', True)
            p.paragraph_format.space_before = Pt(11)
            p.paragraph_format.space_after = Pt(5)
            p.paragraph_format.keep_with_next = True

        # 본문
        else:
            p = doc.add_paragraph()
            # 텍스트 내 강조(**) 처리
            parts = line.split('**')
            for i, part in enumerate(parts):
                run = p.add_run(part)
                if i % 2 == 1: # 강조 텍스트
                    set_font(run, '바탕체', 10.5, '0F172A', True)
                else:
                    set_font(run, '바탕체', 10.5, '2A3439')
            
            p.paragraph_format.line_spacing = 1.75
            p.paragraph_format.space_after = Pt(8.5)
            # 첫 줄 들여쓰기 (10.5pt)
            p.paragraph_format.first_line_indent = Pt(10.5)

    doc.save(docx_path)

if __name__ == "__main__":
    md_file = "260906_1430_불편의_값_Genspark_베스트셀러_마스터.md"
    docx_file = "260906_1430_불편의_값_Genspark_베스트셀러_마스터.docx"
    create_bestseller_docx(md_file, docx_file)
    print(f"Successfully converted to {docx_file}")
