---
name: epub-typesetting-pro
description: EPUB3 표준 리플로우(Reflowable) 및 고정 레이아웃(Fixed-Layout) 전자책 완벽 조판, Amazon Kindle KQL/Mobi, 리디북스, 교보문고 e-Book 호환성 검증 및 CSS 전자책 스타일링 마스터 스킬
---

# 📱 EPUB Typesetting Pro (표준 전자책 EPUB3 및 킨들 조판 마스터 스킬)

본 스킬은 IDPF 및 W3C 국제 전자책 표준인 **EPUB 3.2/3.3 규격**에 따라, 스마트폰, 태블릿, 전용 전자책 단말기(Kindle, Crema, Kobo)에서 글자 크기와 폰트를 자유롭게 변경해도 레이아웃이 깨지지 않는 **반응형 리플로우(Reflowable) 전자책 전문 조판 시스템**입니다.

---

## 1. 📐 EPUB3 시맨틱 마크업 및 CSS 표준 규격

```css
/* EPUB3 Core Typography Stylesheet */
@namespace "http://www.w3.org/1999/xhtml";

body {
    font-family: "KoPub World Batang", "Noto Serif CJK KR", serif;
    font-size: 1.0em;
    line-height: 1.85;
    color: #2A3439;
    background-color: transparent;
    text-align: justify;
    text-indent: 1.2em;
    margin: 0;
    padding: 0 4%;
}

h1.part-title {
    font-family: "KoPub World Dotum", "Pretendard", sans-serif;
    font-size: 1.8em;
    font-weight: 900;
    color: #521523;
    text-align: center;
    page-break-before: always;
    break-before: page;
    margin: 3em 0 1.5em 0;
    text-indent: 0;
}

h2.chapter-title {
    font-size: 1.4em;
    font-weight: 700;
    color: #1A365D;
    border-bottom: 1.5px solid #E2C992;
    padding-bottom: 0.3em;
    margin-top: 2em;
    text-indent: 0;
    page-break-after: avoid;
    break-after: avoid;
}

blockquote.insight-card {
    background-color: #FFFDF8;
    border-left: 4px solid #C2882A;
    padding: 1em 1.2em;
    margin: 1.5em 0;
    font-style: italic;
    text-indent: 0;
    border-radius: 0 8px 8px 0;
}
```

---

## 2. 🔍 전자책 무결성 검증 (EpubCheck Validation)

1. **W3C EpubCheck 5.0+ 통과**: 유효하지 않은 XML 태그, 닫히지 않은 엘리먼트, 깨진 이미지 링크 0건.
2. **다크 모드 완벽 지원**: 기기의 야간 모드 전환 시 텍스트가 배경과 함께 반전되도록 하드코딩된 `#000000` / `#FFFFFF` 배경 배제.
3. **목차 NCX & NAV 호환**: 구형 단말기용 `toc.ncx`와 신형 EPUB3용 `nav.xhtml` 듀얼 지원.
4. **글꼴 임베딩 (Font Obfuscation)**: 라이선스 준수 및 폰트 유출 방지 IDPF 난독화 적용.
