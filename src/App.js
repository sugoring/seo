// App.js
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";

// NCT WISH 리쿠 주요 정보 - SEO 강화
const rikuInfo = {
  fullName: "前田 陸",
  koreanName: "마에다 리쿠",
  englishName: "Maeda Riku",
  birthDate: "2003년 6월 28일",
  birthPlace: "일본 후쿠이현",
  height: "175cm",
  bloodType: "AB형",
  group: "NCT WISH",
  parentGroup: "NCT",
  position: "메인래퍼, 리드댄서",
  debutDate: "2024년 2월 21일",
  company: "SM엔터테인먼트",
  mbti: "ISFP",
  emoji: "🐿️ 🐈‍⬛",
  likedSongs: ["Songbird", "WISH", "Hands Up", "Steady"],
  healthRecovery: "2025년 3월부터 활동 재개 예정",
  memberNames: ["리쿠", "유우시", "사쿠야", "시온", "료", "대영"],
};

// URL 최적화 함수
const optimizeURL = () => {
  const allowedPaths = [
    "/riku-love",
    "/nct-wish-riku",
    "/riku-nct",
    "/maeda-riku",
    "/2003-riku",
  ];
  const currentPath = window.location.pathname;

  // 현재 경로가 허용된 경로 목록에 없으면 기본 경로로 리다이렉트
  if (!allowedPaths.includes(currentPath) && currentPath !== "/") {
    window.history.pushState({}, "", "/riku-love");
  }
};

function App() {
  // SEO 최적화를 위한 메타태그 업데이트
  useEffect(() => {
    // URL 최적화
    optimizeURL();

    // 페이지 제목 동적 업데이트
    document.title = `리쿠 사랑해 - NCT WISH ${rikuInfo.koreanName} | 2003년생 21세 일본 아이돌`;

    // 검색 엔진용 메타 설명 추가
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = `리쿠 사랑해. ${rikuInfo.group} ${rikuInfo.koreanName}는 ${rikuInfo.birthDate}생 일본 ${rikuInfo.birthPlace} 출신 아이돌입니다. 키 ${rikuInfo.height}, ${rikuInfo.position}, ${rikuInfo.healthRecovery}.`;
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  // 구조화된 데이터(Schema.org) 추가
  function getSchemaOrgJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: rikuInfo.koreanName,
      alternateName: [
        rikuInfo.koreanName.split(" ")[1],
        rikuInfo.englishName,
        rikuInfo.fullName,
      ],
      birthDate: "2003-06-28",
      birthPlace: {
        "@type": "Place",
        name: rikuInfo.birthPlace,
      },
      height: rikuInfo.height,
      gender: "Male",
      nationality: "일본",
      memberOf: {
        "@type": "MusicGroup",
        name: rikuInfo.group,
        parentOrganization: {
          "@type": "MusicGroup",
          name: rikuInfo.parentGroup,
        },
      },
      affiliation: {
        "@type": "Organization",
        name: rikuInfo.company,
      },
      jobTitle: ["아이돌", "래퍼", "댄서"],
      description: `${rikuInfo.group}의 ${rikuInfo.position}로 활동하는 ${rikuInfo.koreanName}는 ${rikuInfo.debutDate} 데뷔한 일본 출신 K-POP 아이돌입니다. ${rikuInfo.healthRecovery}`,
    };
  }

  // 추가 SEO를 위한 데이터 추가
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(getSchemaOrgJsonLd());
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="app">
      <Helmet>
        {/* SEO 메타태그 */}
        <title>
          리쿠 사랑해 - NCT WISH 리쿠(마에다 리쿠) | 2003년생 21세 아이돌
        </title>
        <meta
          name="description"
          content={`리쿠 사랑해. NCT WISH 엔시티 리쿠(마에다 리쿠)를 위한 팬페이지입니다. 2003년 6월 28일생, 21세, 후쿠이현 출신, 일본인 가수, ${rikuInfo.debutDate} 데뷔. ${rikuInfo.healthRecovery}`}
        />

        {/* 오픈 그래프 태그 (소셜 미디어 공유용) */}
        <meta
          property="og:title"
          content="리쿠 사랑해 - NCT WISH 리쿠(마에다 리쿠) 2003년생 일본 아이돌"
        />
        <meta
          property="og:description"
          content={`리쿠 사랑해. NCT WISH 엔시티의 메인래퍼 리쿠(마에다 리쿠)를 향한 팬페이지. 2003년생 21세, 일본 후쿠이현 출신, 키 ${rikuInfo.height}. ${rikuInfo.healthRecovery}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/riku-love" />
        <meta
          property="og:image"
          content="https://yourdomain.com/riku-image.jpg"
        />

        {/* 트위터 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="리쿠 사랑해 - NCT WISH 엔시티 리쿠 | 2003년생 일본 아이돌"
        />
        <meta
          name="twitter:description"
          content={`리쿠 사랑해. 2024년 2월 21일 NCT WISH로, 데뷔한 리쿠(마에다 리쿠). 건강 회복 후 ${rikuInfo.healthRecovery}`}
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/riku-twitter-card.jpg"
        />

        {/* 검색엔진 키워드 (리쿠 관련 키워드 최적화) */}
        <meta
          name="keywords"
          content="리쿠, 리쿠 사랑해, 마에다 리쿠, NCT WISH 리쿠, 엔시티 리쿠, Maeda Riku, 2003년생, 21세, riku nct, 리쿠 NCT, 리쿠 엔시티, 리쿠 일본어, 리쿠 엔시티 키, 리쿠 나이, 일본 가수, 후쿠이현 출신, SM엔터테인먼트, 메인래퍼, 활동 재개, NCT Universe LASTART, 유우시, 사쿠야, 시온, Songbird, WISH, Hands Up, Steady"
        />

        {/* 추가 메타태그 */}
        <meta name="author" content="리쿠 팬" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />

        {/* 캐노니컬 링크 - 중복 콘텐츠 방지 */}
        <link rel="canonical" href="https://yourdomain.com/riku-love" />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://yourdomain.com/riku-love"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://yourdomain.com/ja/riku-love"
        />
      </Helmet>

      <main className="content">
        <h1>리쿠 사랑해</h1>

        {/* 추가 리쿠 관련 콘텐츠 (검색 엔진이 인덱싱할 히든 콘텐츠) */}
        <div className="hidden-content">
          <h2>NCT WISH 엔시티 리쿠에게 보내는 팬들의 마음</h2>
          <p>리쿠 사랑해. 이 메시지는 리쿠를 위한 특별한 페이지입니다.</p>

          <h3>리쿠(마에다 리쿠) 프로필</h3>
          <p>본명: 前田 陸 (마에다 리쿠, Maeda Riku)</p>
          <p>출생: 2003년 6월 28일 (21세), 일본 후쿠이현</p>
          <p>신체: 175cm, AB형</p>
          <p>소속사: SM엔터테인먼트</p>
          <p>소속 그룹: NCT, NCT WISH</p>
          <p>포지션: 메인래퍼, 리드댄서</p>
          <p>데뷔: 2024년 2월 21일 NCT WISH 싱글 1집 'WISH'</p>
          <p>MBTI: ISFP</p>
          <p>이모지: 🐿️ 🐈‍⬛</p>

          <h3>리쿠 특징</h3>
          <p>
            NCT WISH의 비주얼 멤버로 청량한 소년미를 지닌 리쿠는 트인 눈매와
            고양이를 닮은 인상적인 외모가 특징입니다.
          </p>
          <p>
            NCT Universe: LASTART에서 1위로 선발되어 NCT WISH로 데뷔했습니다.
          </p>
          <p>사촌누나는 모닝구 무스메의 다카하시 아이입니다.</p>
          <p>최초의 후쿠이현 출신 K팝 아이돌입니다.</p>
          <p>좌우명: '피할 수 없는 고통이라면 즐겨라'</p>

          <h3>리쿠 건강 회복 및 활동 재개</h3>
          <p>
            2024년 10월 22일 건강상의 이유로 활동을 잠시 중단했으나, 2025년 2월
            3일 건강 회복 소식과 함께 활동 재개를 발표했습니다.
          </p>
          <p>
            2025년 3월부터 시작되는 'NCT WISH ASIA TOUR LOG in'과 상반기 중
            발매될 앨범 활동에 참여할 예정입니다.
          </p>

          <h3>리쿠 취향</h3>
          <p>좋아하는 색: 파란색</p>
          <p>좋아하는 계절: 봄</p>
          <p>좋아하는 음식: 김치전, 떡볶이, 너구리 라면, 슈크림 붕어빵</p>
          <p>좋아하는 아이스크림: 민트초코</p>
          <p>취미: 애니메이션, 영화 감상</p>

          <h3>리쿠 노래 및 활동</h3>
          <p>
            주요 노래: Songbird (Wishful, 2024), WISH (Wishful, 2024), Hands Up
            (Steady - The 1st Mini Album, 2024)
          </p>
          <p>리쿠가 속한 NCT WISH 멤버: 유우시, 사쿠야, 시온, 료, 대영</p>
          <p>함께 검색되는 멤버: 유우시, 사쿠야, 시온, 재희</p>

          <h3>리쿠 검색 관련 정보</h3>
          <p>
            이 페이지는 NCT WISH의 멤버 리쿠(마에다 리쿠)에 관한 팬페이지입니다.
          </p>
          <p>
            소셜로봇 리쿠(LiKU)나 게임 킹덤 하츠의 캐릭터 리쿠, 또는 다른
            리쿠와는 관련이 없습니다.
          </p>
          <p>
            NCT 리쿠 검색 시 나오는 정보: 2003년생, 21세, 일본 남가수, 후쿠이현
            출신, 아이돌 래퍼, 아이돌 댄서
          </p>
          <p>
            함께 검색되는 키워드: 리쿠 일본어, 리쿠 엔시티, 리쿠 키, 위시 리쿠,
            리쿠 나이
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
