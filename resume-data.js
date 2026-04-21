window.resumeData = {
  profile: {
    name: "김규민",
    role: "백엔드와 시스템 흐름 설계에 강점을 두는 개발자",
    summary:
      "공개 GitHub 프로젝트와 협업 기록을 바탕으로, 서비스의 핵심 로직과 데이터 흐름을 구현 가능한 형태로 만드는 데 강점을 갖고 있습니다. 백엔드 구조 설계, 시스템 프로그래밍, 데이터 처리, AI 기능 연동을 중심으로 결과물을 쌓아 가고 있습니다.",
    avatar: "./assets/profile.JPG",
    location: "South Korea",
    contactEmail: "kally.intech@gmail.com",
    github: "https://github.com/Ka11yV",
    resumeRepo: "https://github.com/Ka11yV/resume",
    focus: [
      "Backend Development",
      "System Programming",
      "Data Flow Design",
      "AI Integration",
      "System Architecture",
      "Embedded System"
    ],
    quickFacts: [
      { label: "GitHub ID", value: "@Ka11yV" },
      { label: "주요 역량", value: "Backend · System · Data · AI" },
      { label: "작업 방향", value: "서비스 로직과 시스템 흐름을 안정적으로 구현" },
      { label: "연락처", value: "kally.intech@gmail.com" },
    ],
  },
  nav: [
    { id: "hero", label: "기본 정보" },
    { id: "stats", label: "요약" },
    { id: "strengths", label: "강점" },
    { id: "stack", label: "기술 스택" },
    { id: "projects", label: "프로젝트" },
    { id: "timeline", label: "활동" },
    { id: "writing", label: "기록" },
    { id: "contact", label: "연락처" },
  ],
  ctas: [
    { label: "GitHub 프로필 보기", href: "https://github.com/Ka11yV", variant: "primary" },
  ],
  stats: [
    {
      value: "9",
      label: "공개 저장소",
      note: "GitHub 공개 저장소 기준",
    },
    {
      value: "90+",
      label: "공개 기여 수",
      note: "2026-04-21 기준 GitHub 공개 집계",
    },
    {
      value: "5",
      label: "프로젝트 축",
      note: "Backend · System · AI · Data · Utility",
    },
    {
      value: "3",
      label: "협업 저장소",
      note: "개인 및 조직 공개 활동 기준",
    },
  ],
  strengths: [
    {
      title: "서비스 로직을 구현으로 옮기는 속도",
      description:
        "아이디어 단계에서 멈추기보다 실제로 동작하는 결과물을 만드는 쪽에 강점이 있습니다. 서비스 로직, 일정 처리, 데이터 흐름, 디바이스 연결처럼 핵심 기능을 먼저 구조화하고 구현해 왔습니다.",
    },
    {
      title: "백엔드와 데이터 흐름 중심 사고",
      description:
        "화면보다 먼저 서비스 내부 동작을 생각하는 편입니다. 일정 데이터 관리, QR 기반 연결 흐름, 분석 데이터 처리, 서버 연동 구조처럼 기능의 기반이 되는 로직을 우선 설계합니다.",
    },
    {
      title: "개인 작업과 협업을 모두 이어가는 실행력",
      description:
        "개인 프로젝트에서는 빠른 의사결정으로 속도를 내고, 협업 프로젝트에서는 저장소와 이슈 흐름에 맞춰 역할을 나누어 진행해 왔습니다. 단독 구현과 팀 협업 모두에서 꾸준히 결과를 남겨 왔습니다.",
    },
  ],
  stackGroups: [
    {
      title: "Frontend / Client",
      description: "사용자 인터페이스와 클라이언트 애플리케이션 구현에 사용한 기술입니다.",
      items: ["Swift", "React", "Next.js", "Tailwind CSS", "Electron"],
    },
    {
      title: "Backend",
      description: "서버 로직, API 처리, 데이터 저장 및 연동에 사용한 기술입니다.",
      items: ["Spring Boot", "Java", "Node.js", "FastAPI", "PostgreSQL", "MySQL"],
    },
    {
      title: "System / Network",
      description: "시스템 프로그래밍과 네트워크 통신 구조 구현에 사용한 기술입니다.",
      items: ["C", "Linux", "epoll", "TCP Socket", "Non-blocking I/O", "ncursesw"],
    },

    {
      title: "Infra",
      description: "빌드, 배포, 협업, 개발 환경 구성에 사용한 도구입니다.",
      items: ["Docker", "Nginx, AWS EC2", "AWS RDS", "Tailscale", "Github Actions"],
    },
  ],
  projects: [
    {
      title: "Purby",
      period: "2026.03 - 2026.10",
      role: "졸업작품 / 진행 중",
      description:
        "AI 기반 스마트 디바이스 어시스턴트 졸업작품 프로젝트입니다. 현재는 설계와 초기 구현을 병행하는 단계로, 디바이스 연결, QR 페어링, 일정 관리, 서버 연동 구조를 중심으로 핵심 기능 흐름을 구체화하고 있습니다.",
      tags: ["Backend", "SwiftUI", "iOS", "AI Assistant", "QR Pairing", "Graduation Project"],
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
      title: "epoll-socket-chat",
      period: "2025.12",
      role: "시스템 프로그래밍 프로젝트",
      description:
        "Linux epoll과 non-blocking socket을 사용해 구현한 C 기반 터미널 채팅 프로그램입니다. 단일 이벤트 루프에서 다중 클라이언트를 처리하고, 브로드캐스트, 귓속말, 접속자 목록, 닉네임 변경 기능을 지원합니다.",
      tags: ["C", "Linux", "epoll", "TCP Socket", "ncursesw", "Non-blocking I/O"],
      links: [
        { label: "GitHub", href: "https://github.com/Ka11yV/epoll-socket-chat" },
      ],
    },
    {
      title: "동백숲",
      period: "2025.11",
      role: "팀 프로젝트",
      description:
        "동양미래대학교 학생을 위한 캠퍼스 플랫폼 프로젝트입니다. 공지 알림, 과제 마감 관리, 강의 평가처럼 학생 생활에 필요한 핵심 기능을 서비스 로직과 데이터 처리 흐름 안에서 묶어 구현했습니다.",
      tags: ["Java", "Servlet", "JSP", "MySQL", "Backend"],
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
        "개발자를 위한 커뮤니티 서비스 프로젝트입니다. 포스팅, 모임, Q&A 기능을 중심으로 서비스 구조를 설계했고, 백엔드 저장소와 데이터 흐름까지 함께 나누어 협업 형태로 진행했습니다.",
      tags: ["Node.js", "MongoDB", "JavaScript", "Community", "Backend"],
      links: [
        { label: "Backend Repo", href: "https://github.com/Ka11yV/dev-ing-be" },
        { label: "Frontend Repo", href: "https://github.com/Ka11yV/dev-ing-fe" },
        { label: "배포(현재 서버 구동X)", href: "https://dev-ing.netlify.app/" },
      ],
    },
  ],
  timeline: [
    {
      title: "퍼비 졸업작품 설계 및 초기 구현 진행",
      when: "2026.03 - 2026.10",
      detail:
        "졸업작품으로 진행 중인 `ai-purby/purby` 프로젝트에서 디바이스 연결, QR 스캔, 일정 관리, 서버 연동을 포함한 핵심 기능 구조를 설계하고 초기 구현을 진행하고 있습니다.",
    },
    {
      title: "백엔드와 AI 연동 중심의 개발 방향 정리",
      when: "2026.04",
      detail:
        "GitHub 프로필과 공개 활동을 통해 AI 연동과 시스템 구현 중심의 개발 방향을 정리하고, 현재 진행 중인 프로젝트 흐름을 외부에서 이해하기 쉬운 형태로 공개했습니다.",
    },
    {
      title: "ClipSnap 공개 및 macOS 유틸리티 제작",
      when: "2026.04",
      detail:
        "Swift 기반 메뉴바 앱을 공개하고, 클립보드 이미지 저장이라는 반복 작업을 실용적인 유틸리티로 정리했습니다.",
    },
    {
      title: "epoll 기반 소켓 채팅 서버 공개",
      when: "2026.04",
      detail:
        "C와 Linux epoll을 사용해 다중 클라이언트를 처리하는 터미널 채팅 서버와 ncursesw 클라이언트를 구현하고 공개 저장소로 정리했습니다.",
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
        "개발자 커뮤니티 서비스 구축을 통해 커뮤니티 기능 구조와 백엔드 저장소 기반 협업 경험을 축적했습니다.",
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
      "이 이력서는 GitHub 공개 활동과 저장소 정보를 중심으로 정리한 온라인 이력서입니다. 필요하면 이름, 학력, 자격, 세부 경력도 같은 구조로 확장할 수 있습니다.",
    links: [
      { label: "GitHub", href: "https://github.com/Ka11yV" },
      { label: "Email", href: "mailto:kally.intech@gmail.com" },
    ],
  },
};
