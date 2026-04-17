window.resumeData = {
  profile: {
    name: "Ka11y",
    role: "AI 기능을 실제 사용자 경험으로 연결하는 개발자",
    eyebrow: "GitHub Resume / 2026 Edition",
    summary:
      "공개 GitHub 프로젝트와 협업 기록을 바탕으로, 문제를 빠르게 구현 가능한 제품으로 옮기는 데 강점을 갖고 있습니다. 프론트엔드 구현, AI 기능 연결, 데이터 기반 실험, 데스크톱 유틸리티 제작까지 다양한 형태의 결과물을 꾸준히 만들어 왔습니다.",
    avatar: "./assets/profile.JPG",
    location: "South Korea",
    contactEmail: "kally.intech@gmail.com",
    github: "https://github.com/Ka11yV",
    resumeRepo: "https://github.com/Ka11yV/resume",
    focus: [
      "AI Integration",
      "Frontend Development",
      "UX Design",
      "Product Thinking",
    ],
    quickFacts: [
      { label: "GitHub ID", value: "@Ka11yV" },
      { label: "주요 역량", value: "AI · Frontend · UX" },
      { label: "작업 방향", value: "작동하는 제품을 빠르게 검증 가능한 형태로 구현" },
      { label: "연락처", value: "kally.intech@gmail.com" },
    ],
  },
  nav: [
    { id: "stats", label: "지표" },
    { id: "strengths", label: "강점" },
    { id: "stack", label: "기술 스택" },
    { id: "projects", label: "프로젝트" },
    { id: "timeline", label: "활동" },
    { id: "writing", label: "기록" },
    { id: "contact", label: "연결" },
  ],
  ctas: [
    { label: "GitHub 프로필 보기", href: "https://github.com/Ka11yV", variant: "primary" },
    { label: "이력서 저장소", href: "https://github.com/Ka11yV/resume", variant: "secondary" },
  ],
  stats: [
    {
      value: "8+",
      label: "공개 저장소",
      note: "직접 확인 가능한 프로젝트 기준",
    },
    {
      value: "76",
      label: "공개 기여 수",
      note: "2026-04-18 기준 GitHub 공개 집계",
    },
    {
      value: "4",
      label: "프로젝트 축",
      note: "AI · Frontend · Data · Utility",
    },
    {
      value: "3",
      label: "협업 저장소",
      note: "개인 및 조직 공개 활동 기준",
    },
  ],
  strengths: [
    {
      title: "빠른 구현과 제품화",
      description:
        "아이디어 단계에서 멈추기보다 실제로 동작하는 결과물을 만드는 쪽에 강점이 있습니다. 웹 서비스, 분석 대시보드, macOS 유틸리티까지 서로 다른 형태의 프로젝트를 짧은 사이클로 구현해 왔습니다.",
    },
    {
      title: "사용자 경험 중심의 프론트엔드",
      description:
        "화면을 단순히 만드는 데서 끝나지 않고 정보 구조와 사용 흐름을 함께 설계합니다. React, Next.js, JavaScript 기반 프로젝트를 통해 기능 구현과 인터랙션 설계를 함께 다뤄 왔습니다.",
    },
    {
      title: "개인 작업과 협업을 모두 이어가는 실행력",
      description:
        "개인 프로젝트에서는 빠른 의사결정으로 속도를 내고, 협업 프로젝트에서는 저장소와 이슈 흐름에 맞춰 역할을 나누어 진행해 왔습니다. 혼자 만드는 일과 함께 만드는 일 모두 익숙합니다.",
    },
  ],
  stackGroups: [
    {
      title: "Frontend",
      description: "웹 인터페이스와 사용자 경험 구현에 주로 사용한 기술입니다.",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Backend / Data",
      description: "서비스 기능 연결과 데이터 분석 작업에 활용한 기술입니다.",
      items: ["Spring Boot", "Node.js", "Python", "Pandas", "Streamlit", "MongoDB"],
    },
    {
      title: "Tooling / Platform",
      description: "배포, 협업, 데스크톱 환경 구현에 사용한 도구입니다.",
      items: ["GitHub", "Git", "Swift", "macOS", "Maven", "Netlify"],
    },
  ],
  projects: [
    {
      title: "Purby",
      period: "2026.03 - 2026.10",
      role: "졸업작품 / 진행 중",
      description:
        "AI 기반 스마트 디바이스 어시스턴트 졸업작품 프로젝트입니다. 현재는 설계와 초기 구현을 병행하는 단계로, 모바일 앱에서 디바이스 연결, QR 페어링, 일정 관리, 매뉴얼 확인 같은 사용 흐름을 먼저 구체화하고 있습니다.",
      tags: ["SwiftUI", "iOS", "AI Assistant", "QR Pairing", "Schedule", "Graduation Project"],
      links: [
        { label: "App Repo", href: "https://github.com/ai-purby/purby" },
        { label: "Backend Repo", href: "https://github.com/ai-purby/purby-backend" },
      ],
    },
    {
      title: "ClipSnap",
      period: "2026.04",
      role: "개인 프로젝트",
      description:
        "클립보드 이미지를 원하는 폴더에 바로 저장할 수 있도록 만든 macOS 메뉴바 유틸리티입니다. 저장 경로 설정, 전역 단축키, PNG 저장 흐름을 하나의 간결한 사용 경험으로 정리했습니다.",
      tags: ["Swift", "macOS", "Menu Bar App", "Utility"],
      links: [
        { label: "GitHub", href: "https://github.com/Ka11yV/clipsnap" },
      ],
    },
    {
      title: "동백숲",
      period: "2025.11",
      role: "팀 프로젝트",
      description:
        "동양미래대학교 학생을 위한 캠퍼스 플랫폼 프로젝트입니다. 공지 알림, 과제 마감 관리, 강의 평가처럼 학생 생활에 필요한 핵심 기능을 하나의 서비스 흐름 안에서 제공하도록 구성했습니다.",
      tags: ["Java", "Servlet", "JSP", "Tailwind CSS", "MySQL"],
      links: [
        { label: "GitHub", href: "https://github.com/Ka11yV/Dongbaeksoop" },
      ],
    },
    {
      title: "대한민국 저출산 원인 분석",
      period: "2025.11",
      role: "데이터 분석 프로젝트",
      description:
        "출산율 시계열 데이터와 결혼·출산 인식 데이터를 함께 분석해 저출산 현상의 배경을 시각적으로 설명한 프로젝트입니다. Pandas와 Streamlit 기반으로 주요 지표를 탐색 가능한 형태로 정리했습니다.",
      tags: ["Python", "Pandas", "Plotly", "Streamlit", "Data Analysis"],
      links: [
        { label: "GitHub", href: "https://github.com/Ka11yV/kr-lowbirth-causes-analysis" },
      ],
    },
    {
      title: "dev-ing",
      period: "2024.06 - 2024.07",
      role: "팀 프로젝트",
      description:
        "개발자를 위한 커뮤니티 서비스 프로젝트입니다. 포스팅, 모임, Q&A 기능을 중심으로 서비스 구조를 설계했고, 프론트엔드와 백엔드를 나누어 협업 형태로 진행했습니다.",
      tags: ["React", "JavaScript", "Node.js", "MongoDB", "Community"],
      links: [
        { label: "Frontend Repo", href: "https://github.com/Ka11yV/dev-ing-fe" },
        { label: "Backend Repo", href: "https://github.com/Ka11yV/dev-ing-be" },
        { label: "배포", href: "https://dev-ing.netlify.app/" },
      ],
    },
  ],
  timeline: [
    {
      title: "퍼비 졸업작품 설계 및 초기 구현 진행",
      when: "2026.03 - 2026.10",
      detail:
        "졸업작품으로 진행 중인 `ai-purby/purby` 프로젝트에서 모바일 앱 구조와 사용자 흐름을 먼저 설계하고, 디바이스 연결, QR 스캔, 일정 관리, 설정 화면 등 핵심 기능의 초기 구현을 진행하고 있습니다.",
    },
    {
      title: "AI 제품화 중심의 개발 방향을 공개 프로필에 정리",
      when: "2026.04",
      detail:
        "GitHub 프로필 README에서 AI Integration, Frontend Dev, UX Design을 핵심 축으로 정리하고 현재 작업 방향을 외부에서 이해하기 쉬운 형태로 공개했습니다.",
    },
    {
      title: "ClipSnap 공개 및 macOS 유틸리티 제작",
      when: "2026.04",
      detail:
        "Swift 기반 메뉴바 앱을 공개하고, 클립보드 이미지 저장이라는 반복 작업을 실용적인 유틸리티로 정리했습니다.",
    },
    {
      title: "ai-purby 조직 저장소 협업 참여",
      when: "2026.04",
      detail:
        "공개 이슈와 커밋 기록 기준으로 조직 저장소 `ai-purby/purby-backend`, `ai-purby/.github`에 참여하며 협업 중심 개발 흐름을 이어 갔습니다.",
    },
    {
      title: "데이터 분석과 웹 프로젝트 병행",
      when: "2025.11",
      detail:
        "저출산 원인 분석 프로젝트와 동백숲 프로젝트를 통해 데이터 해석과 웹 서비스 구현 경험을 함께 쌓았습니다.",
    },
    {
      title: "커뮤니티 서비스 dev-ing 참여",
      when: "2024.06 - 2024.07",
      detail:
        "개발자 커뮤니티 서비스 구축을 통해 React 기반 화면 구현과 서비스 구조 설계 경험을 축적했습니다.",
    },
  ],
  writing: {
    title: "학습 내용을 구조화해 기록하는 습관",
    description:
      "`summary_of_technical_books` 저장소를 통해 기술 서적과 개발 개념을 꾸준히 정리해 왔습니다. 읽은 내용을 다시 설명 가능한 형태로 정리하는 습관이 프로젝트 설계와 구현 판단에도 연결되고 있습니다.",
    bullets: [
      "객체지향, 테스트, 애자일, 자바스크립트, 타입스크립트 관련 학습 기록 축적",
      "읽은 내용을 다시 설명 가능한 형태로 구조화하는 습관",
      "개발 실무와 학습 흐름을 연결하려는 태도",
    ],
    links: [
      { label: "기록 저장소", href: "https://github.com/Ka11yV/summary_of_technical_books" },
      { label: "웹으로 보기", href: "https://saseungmin.github.io/summary_of_technical_books/" },
    ],
  },
  contact: {
    intro:
      "이 이력서는 GitHub 공개 활동과 저장소 정보를 중심으로 구성했습니다. 이름, 학력, 자격, 세부 경력은 `resume-data.js`에서 바로 확장할 수 있습니다.",
    links: [
      { label: "GitHub", href: "https://github.com/Ka11yV" },
      { label: "Email", href: "mailto:kally.intech@gmail.com" },
      { label: "Resume Repository", href: "https://github.com/Ka11yV/resume" },
    ],
  },
  footer:
    "This resume is based on public GitHub activity and repository information. Last updated on 2026-04-18.",
};
