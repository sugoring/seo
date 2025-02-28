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
  shoeSize: "280mm",
  group: "NCT WISH",
  parentGroup: "NCT",
  position: "메인래퍼, 리드댄서, 비주얼",
  debutDate: "2024년 2월 21일",
  company: "SM엔터테인먼트",
  mbti: "ISFP",
  emoji: "🐿️ 🐈‍⬛",
  likedSongs: ["Songbird", "WISH", "Hands Up", "Steady", "Dunk Shot"],
  likedFood: ["김치전", "떡볶이", "너구리 라면", "슈크림 붕어빵", "민트초코"],
  likedColor: "파란색",
  likedSeason: "봄",
  hobbies: ["애니메이션 감상", "영화 감상", "배구"],
  healthRecovery: "2025년 3월부터 활동 재개 예정",
  memberNames: ["리쿠", "유우시", "사쿠야", "시온", "료", "대영"],
  school: "후쿠이현립사바에고등학교",
  nicknames: ["유리쿠", "리쿠미호", "리쿠스키", "울애기"],
  japaneseKeywords: ["前田陸", "リク", "福井県", "アイドル", "ラッパー"],
};

// URL 최적화 함수
const optimizeURL = () => {
  const allowedPaths = [
    "/riku-love",
    "/nct-wish-riku",
    "/riku-nct",
    "/maeda-riku",
    "/2003-riku",
    "/riku-profile",
    "/riku-songs",
    "/riku-health-recovery",
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
    metaDescription.content = `리쿠 사랑해. ${rikuInfo.group} ${rikuInfo.koreanName}는 ${rikuInfo.birthDate}생 일본 ${rikuInfo.birthPlace} 출신 아이돌입니다. 키 ${rikuInfo.height}, ${rikuInfo.position}, ${rikuInfo.healthRecovery}. NCT 최초의 후쿠이현 출신 K팝 아이돌.`;
    document.head.appendChild(metaDescription);

    // 추가 SEO를 위한 키워드 메타 태그
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "리쿠, 마에다 리쿠, NCT WISH, 엔시티 위시, Maeda Riku, リク, 前田陸, 2003년생, 21세, 일본 아이돌";
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  // 구조화된 데이터(Schema.org) 추가
  function getSchemaOrgJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: rikuInfo.koreanName,
      givenName: "리쿠",
      familyName: "마에다",
      alternateName: [
        rikuInfo.koreanName.split(" ")[1],
        rikuInfo.englishName,
        rikuInfo.fullName,
        "리쿠",
        "엔시티 리쿠",
        "NCT WISH 리쿠",
        "リク",
      ],
      birthDate: "2003-06-28",
      birthPlace: {
        "@type": "Place",
        name: rikuInfo.birthPlace,
        geo: {
          "@type": "GeoCoordinates",
          latitude: "36.0641",
          longitude: "136.2196",
        },
      },
      height: rikuInfo.height,
      gender: "Male",
      nationality: "일본",
      knowsLanguage: ["일본어", "한국어"],
      alumniOf: {
        "@type": "HighSchool",
        name: rikuInfo.school,
      },
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
        url: "https://www.smentertainment.com",
      },
      jobTitle: ["아이돌", "래퍼", "댄서", "가수"],
      description: `${rikuInfo.group}의 ${rikuInfo.position}로 활동하는 ${rikuInfo.koreanName}는 ${rikuInfo.debutDate} 데뷔한 일본 출신 K-POP 아이돌입니다. ${rikuInfo.healthRecovery}`,
      sameAs: [
        "https://namu.wiki/w/리쿠(NCT)",
        "https://www.youtube.com/channel/UCYIvBSmxCuHUy-60ErRCNlA",
      ],
      performerIn: [
        {
          "@type": "MusicRecording",
          name: "WISH",
        },
        {
          "@type": "MusicRecording",
          name: "Songbird",
        },
        {
          "@type": "MusicRecording",
          name: "Hands Up",
        },
        {
          "@type": "MusicRecording",
          name: "Steady",
        },
        {
          "@type": "MusicRecording",
          name: "Dunk Shot",
        },
      ],
    };
  }

  // 음악 그룹 스키마 데이터
  function getMusicGroupJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      name: "NCT WISH",
      alternateName: ["엔시티 위시", "WISH"],
      foundingDate: "2024-02-21",
      member: [
        {
          "@type": "Person",
          name: "리쿠",
          givenName: "리쿠",
          familyName: "마에다",
          birthDate: "2003-06-28",
        },
        {
          "@type": "Person",
          name: "유우시",
        },
        {
          "@type": "Person",
          name: "사쿠야",
        },
        {
          "@type": "Person",
          name: "시온",
        },
        {
          "@type": "Person",
          name: "료",
        },
        {
          "@type": "Person",
          name: "대영",
        },
      ],
      parentOrganization: {
        "@type": "MusicGroup",
        name: "NCT",
      },
      genre: ["K-pop", "J-pop", "Dance", "Hip hop", "Pop"],
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "KR",
        },
      },
      album: [
        {
          "@type": "MusicAlbum",
          name: "WISH",
          datePublished: "2024-02-21",
        },
        {
          "@type": "MusicAlbum",
          name: "Steady - The 1st Mini Album",
          datePublished: "2024-05-15",
        },
        {
          "@type": "MusicAlbum",
          name: "WISHFUL",
          datePublished: "2024-12-25",
        },
      ],
    };
  }

  // 웹페이지 스키마 데이터
  function getWebPageJsonLd() {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "리쿠 사랑해 - NCT WISH 엔시티 리쿠 팬페이지",
      description:
        "NCT WISH 리쿠(마에다 리쿠)를 위한 팬페이지. 2003년 6월 28일생 21세 일본 아이돌, 메인래퍼, 리드댄서.",
      datePublished: "2025-02-28",
      dateModified: "2025-02-28",
      inLanguage: ["ko", "ja"],
      about: {
        "@type": "Person",
        name: "마에다 리쿠",
      },
      mainEntity: {
        "@type": "Person",
        name: "마에다 리쿠",
      },
      keywords:
        "리쿠, NCT WISH, 마에다 리쿠, 2003년생, 일본 아이돌, 엔시티 위시, Maeda Riku, SM엔터테인먼트",
    };
  }

  // 추가 SEO를 위한 데이터 추가
  useEffect(() => {
    // 인물 정보 스키마
    const personScript = document.createElement("script");
    personScript.type = "application/ld+json";
    personScript.innerHTML = JSON.stringify(getSchemaOrgJsonLd());
    document.head.appendChild(personScript);

    // 음악 그룹 스키마
    const musicGroupScript = document.createElement("script");
    musicGroupScript.type = "application/ld+json";
    musicGroupScript.innerHTML = JSON.stringify(getMusicGroupJsonLd());
    document.head.appendChild(musicGroupScript);

    // 웹페이지 스키마
    const webPageScript = document.createElement("script");
    webPageScript.type = "application/ld+json";
    webPageScript.innerHTML = JSON.stringify(getWebPageJsonLd());
    document.head.appendChild(webPageScript);

    return () => {
      document.head.removeChild(personScript);
      document.head.removeChild(musicGroupScript);
      document.head.removeChild(webPageScript);
    };
  }, []);

  return (
    <div className="app">
      <Helmet>
        {/* SEO 메타태그 */}
        <title>
          리쿠 사랑해 - NCT WISH 리쿠(마에다 리쿠) | 2003년생 21세 일본 아이돌
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
        <meta
          property="og:url"
          content="https://riku-love.vercel.app/riku-love"
        />
        <meta
          property="og:image"
          content="https://riku-love.vercel.app/riku-image.jpg"
        />
        <meta property="og:site_name" content="리쿠 사랑해" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="ja_JP" />

        {/* 트위터 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="리쿠 사랑해 - NCT WISH 엔시티 리쿠 | 2003년생 일본 아이돌"
        />
        <meta
          name="twitter:description"
          content={`리쿠 사랑해. 2024년 2월 21일 NCT WISH로 데뷔한 리쿠(마에다 리쿠). 건강 회복 후 ${rikuInfo.healthRecovery}`}
        />
        <meta
          name="twitter:image"
          content="https://riku-love.vercel.app/riku-twitter-card.jpg"
        />
        <meta name="twitter:creator" content="@riku_fan" />

        {/* 검색엔진 키워드 (리쿠 관련 키워드 최적화) */}
        <meta
          name="keywords"
          content="리쿠, 리쿠 사랑해, 마에다 리쿠, NCT WISH 리쿠, 엔시티 리쿠, Maeda Riku, 2003년생, 21세, riku nct, 리쿠 NCT, 리쿠 엔시티, 리쿠 일본어, 리쿠 엔시티 키, 리쿠 나이, 일본 가수, 후쿠이현 출신, SM엔터테인먼트, 메인래퍼, 활동 재개, NCT Universe LASTART, 유우시, 사쿠야, 시온, Songbird, WISH, Hands Up, Steady, Dunk Shot, リク, 前田陸, 福井県, アイドル, ラッパー, 日本人, 身長175cm, リクミホ, 고양이상, 여우상, 다람쥐상, 건강 회복, 사촌누나 다카하시 아이, 피할 수 없는 고통이라면 즐겨라"
        />

        {/* 추가 메타태그 */}
        <meta name="author" content="리쿠 팬" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="naver" content="nosublinks" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="copyright" content="리쿠 사랑해" />
        <meta name="distribution" content="global" />

        {/* 언어 및 지역 태그 */}
        <meta name="geo.region" content="JP-18" />
        <meta name="geo.placename" content="Fukui" />
        <meta http-equiv="content-language" content="ko, ja" />

        {/* 캐노니컬 링크 - 중복 콘텐츠 방지 */}
        <link rel="canonical" href="https://riku-love.vercel.app/riku-love" />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://riku-love.vercel.app/riku-love"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://riku-love.vercel.app/ja/riku-love"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://riku-love.vercel.app/riku-love"
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
          <p>신체: 175cm, AB형, 발 사이즈 280mm</p>
          <p>소속사: SM엔터테인먼트</p>
          <p>소속 그룹: NCT, NCT WISH</p>
          <p>포지션: 메인래퍼, 리드댄서, 비주얼</p>
          <p>데뷔: 2024년 2월 21일 NCT WISH 싱글 1집 'WISH'</p>
          <p>MBTI: ISFP</p>
          <p>이모지: 🐿️ 🐈‍⬛</p>
          <p>학력: 후쿠이현립사바에고등학교 졸업</p>
          <p>별명: 유리쿠, 리쿠미호, 리쿠스키, 울애기</p>

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
          <p>눈이 크고 눈꼬리가 올라가 있어 고양이상이라는 평가를 받습니다.</p>
          <p>웃는 모습이 여우를 닮았다는 평가도 있습니다.</p>
          <p>자신감이 높고 낯가림이 있는 성격입니다.</p>

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
          <p>취미: 애니메이션, 영화 감상, 배구</p>
          <p>롤모델: NCT 마크, 둘째 누나(댄서)</p>
          <p>좋아하는 NCT 노래: NCT DREAM의 We Go Up</p>
          <p>
            관심사: 하이큐를 보고 배구부에 들어갔으며 포지션은 세터였습니다.
          </p>

          <h3>리쿠 노래 및 활동</h3>
          <p>
            주요 노래: Songbird (Wishful, 2024), WISH (Wishful, 2024), Hands Up
            (Steady - The 1st Mini Album, 2024), Dunk Shot (2024)
          </p>
          <p>리쿠가 속한 NCT WISH 멤버: 유우시, 사쿠야, 시온, 료, 대영</p>
          <p>함께 검색되는 멤버: 유우시, 사쿠야, 시온, 재희</p>
          <p>화보: DAZED x NCT WISH - 'I GO BY RIKU' (2024.02.05)</p>

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
            리쿠 나이, 리쿠 직캠, 리쿠 프리퀄, 리쿠 스테디, 리쿠 더쇼, 리쿠 화보
          </p>
          <p>
            일본어 관련 키워드: 前田陸, リク, 福井県, アイドル, ラッパー,
            日本人, 身長175cm, リクミホ
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
