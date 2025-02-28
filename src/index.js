import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// SEO를 위한 메타 데이터 동적 추가 함수
const addSeoMetadata = () => {
  // 추가 SEO 키워드 요소 생성
  const rikuSeoElement = document.createElement("div");
  rikuSeoElement.className = "riku-seo-keywords";
  rikuSeoElement.innerHTML = `
    <span>리쿠 사랑해</span>
    <span>NCT WISH 리쿠</span>
    <span>엔시티 위시 리쿠</span>
    <span>마에다 리쿠</span>
    <span>前田 陸</span>
    <span>Maeda Riku</span>
    <span>2003년생</span>
    <span>21세</span>
    <span>일본 아이돌</span>
    <span>후쿠이현</span>
    <span>메인래퍼</span>
    <span>리드댄서</span>
    <span>비주얼</span>
    <span>키 175cm</span>
    <span>2024년 2월 21일 데뷔</span>
    <span>건강 회복</span>
    <span>2025년 3월 활동 재개</span>
    <span>Songbird</span>
    <span>WISH</span>
    <span>Hands Up</span>
    <span>Steady</span>
    <span>Dunk Shot</span>
    <span>Wishful</span>
    <span>유우시</span>
    <span>사쿠야</span>
    <span>시온</span>
    <span>료</span>
    <span>대영</span>
    <span>재희</span>
    <span>NCT Universe LASTART</span>
    <span>후쿠이현립사바에고등학교</span>
    <span>사촌누나 다카하시 아이</span>
    <span>모닝구 무스메</span>
    <span>MBTI ISFP</span>
    <span>피할 수 없는 고통이라면 즐겨라</span>
    <span>고양이상</span>
    <span>여우상</span>
    <span>다람쥐상</span>
    <span>눈꼬리</span>
    <span>보조개</span>
    <span>I GO BY RIKU</span>
    <span>DAZED</span>
    <span>리쿠 팬미팅</span>
    <span>리쿠 직캠</span>
  `;
  document.body.appendChild(rikuSeoElement);

  // 리쿠와 다른 리쿠들을 구분하기 위한 설명
  const rikuDifferentiationElement = document.createElement("div");
  rikuDifferentiationElement.className = "riku-differentiation";
  rikuDifferentiationElement.style.display = "none";
  rikuDifferentiationElement.innerHTML = `
    <p>이 페이지는 NCT WISH의 멤버 리쿠(마에다 리쿠)에 관한 것으로, 소셜로봇 리쿠(LiKU)나 게임 킹덤 하츠의 캐릭터 리쿠와는 관련이 없습니다.</p>
    <p>NCT WISH 리쿠는 2003년 6월 28일생 21세 일본 후쿠이현 출신 아이돌로, 2024년 2월 21일 데뷔했습니다.</p>
    <p>건강상의 이유로 2024년 10월 22일 활동을 잠시 중단했으나, 2025년 2월 3일 건강 회복 소식과 함께 2025년 3월부터 활동 재개를 발표했습니다.</p>
  `;
  document.body.appendChild(rikuDifferentiationElement);

  // 일본어 키워드 추가 (일본 검색 엔진용)
  const japaneseKeywordsElement = document.createElement("div");
  japaneseKeywordsElement.className = "japanese-keywords";
  japaneseKeywordsElement.style.display = "none";
  japaneseKeywordsElement.innerHTML = `
    <p>前田陸 リク NCT WISH エヌシーティーウィッシュ 2003年6月28日生まれ 21歳 日本人アイドル 福井県出身 健康回復 活動再開 2025年3月 身長175cm AB型 メインラッパー ビジュアル担当 福井県立鯖江高等学校卒業 いとこ高橋愛 モーニング娘。 パンが好き ミントチョコが好き ブルーが好き 春が好き 猫顔 キツネ顔 リスのような ラスタート 1位 ソングバード ウィッシュ Dunk Shot ハンズアップ ステディ 2024年2月21日デビュー</p>
  `;
  document.body.appendChild(japaneseKeywordsElement);

  // 추가 SEO 최적화를 위한 요소 (리쿠 특징)
  const rikuCharacteristicsElement = document.createElement("div");
  rikuCharacteristicsElement.className = "riku-characteristics";
  rikuCharacteristicsElement.style.display = "none";
  rikuCharacteristicsElement.innerHTML = `
    <p>트인 눈매와 고양이를 닮은 인상적인 외모가 특징입니다. 웃는 모습이 여우를 닮았습니다. 자신감이 높고 낯가림이 있는 성격입니다.</p>
    <p>최초의 후쿠이현 출신 K팝 아이돌입니다. 사촌누나는 모닝구 무스메의 다카하시 아이입니다.</p>
    <p>NCT Universe: LASTART에서 1위로 선발되어 NCT WISH로 데뷔했습니다.</p>
    <p>좋아하는 색: 파란색, 좋아하는 계절: 봄, 좋아하는 아이스크림: 민트초코</p>
    <p>롤모델: NCT 마크, 둘째 누나(댄서), 좋아하는 NCT 노래: NCT DREAM의 We Go Up</p>
    <p>별명: 유리쿠, 리쿠미호, 리쿠스키, 울애기</p>
  `;
  document.body.appendChild(rikuCharacteristicsElement);

  // 리쿠 관련 음악 및 활동 정보
  const rikuActivitiesElement = document.createElement("div");
  rikuActivitiesElement.className = "riku-activities";
  rikuActivitiesElement.style.display = "none";
  rikuActivitiesElement.innerHTML = `
    <p>주요 활동: NCT WISH (멤버: 리쿠, 유우시, 사쿠야, 시온, 료, 대영)</p>
    <p>주요 노래: Songbird (Wishful, 2024), WISH (Wishful, 2024), Hands Up (Steady - The 1st Mini Album, 2024), Dunk Shot (2024)</p>
    <p>화보: DAZED x NCT WISH - 'I GO BY RIKU' (2024.02.05)</p>
    <p>2025년 3월부터 시작되는 'NCT WISH ASIA TOUR LOG in'과 상반기 중 발매될 앨범 활동에 참여할 예정</p>
  `;
  document.body.appendChild(rikuActivitiesElement);
};

// React 앱 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 페이지 로드 후 SEO 메타데이터 추가
window.addEventListener("load", addSeoMetadata);

// 페이지 제목 주기적 업데이트 (검색 엔진 크롤링 빈도 향상)
let titleIndex = 0;
const titles = [
  "리쿠 사랑해 - NCT WISH 리쿠 | 2003년생 21세 일본 아이돌",
  "리쿠 사랑해 - 마에다 리쿠(前田 陸) | NCT WISH 메인래퍼",
  "리쿠 사랑해 - 엔시티 위시 리쿠 | 2025년 3월 활동 재개",
  "리쿠 사랑해 - 일본 후쿠이현 출신 NCT 아이돌",
  "리쿠 사랑해 - NCT WISH 리쿠 | 키 175cm 메인래퍼",
  "리쿠 사랑해 - NCT 리쿠 | 21세 비주얼 담당",
  "리쿠 사랑해 - 마에다 리쿠 | LASTART 1위 NCT WISH",
  "리쿠 사랑해 - 리쿠 NCT | Songbird, WISH, Hands Up",
  "리쿠 사랑해 - NCT WISH 리쿠 | 고양이상 눈꼬리",
  "리쿠 사랑해 - 엔시티 위시 리쿠 | MBTI ISFP",
];

// 검색 크롤러에게 다양한 키워드 노출을 위한 제목 변경 (1시간마다)
setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  document.title = titles[titleIndex];
}, 3600000); // 1시간마다 변경

// 검색 엔진을 위한 기타 메타 데이터
if (document.head) {
  // 뉴스 기사 구조화 데이터
  const newsArticleScript = document.createElement("script");
  newsArticleScript.type = "application/ld+json";
  newsArticleScript.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "NCT WISH 리쿠, 건강 회복 후 2025년 3월부터 활동 재개",
    datePublished: "2025-02-03T09:00:00+09:00",
    dateModified: "2025-02-28T12:00:00+09:00",
    author: {
      "@type": "Person",
      name: "Riku Fan",
    },
    publisher: {
      "@type": "Organization",
      name: "Riku Love",
      logo: {
        "@type": "ImageObject",
        url: "https://riku-love.vercel.app/logo.png",
      },
    },
    description:
      "NCT WISH 리쿠(마에다 리쿠)가 건강 회복 소식과 함께 2025년 3월부터 활동 재개를 발표했습니다.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://riku-love.vercel.app/riku-health-recovery",
    },
    image: {
      "@type": "ImageObject",
      url: "https://riku-love.vercel.app/images/riku-recovery.jpg",
      width: "1200",
      height: "630",
    },
  });
  document.head.appendChild(newsArticleScript);

  // 음악 앨범 구조화 데이터
  const musicAlbumScript = document.createElement("script");
  musicAlbumScript.type = "application/ld+json";
  musicAlbumScript.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: "WISHFUL",
    byArtist: {
      "@type": "MusicGroup",
      name: "NCT WISH",
    },
    datePublished: "2024-12-25",
    track: [
      {
        "@type": "MusicRecording",
        name: "Songbird",
        duration: "PT3M24S",
      },
      {
        "@type": "MusicRecording",
        name: "WISH",
        duration: "PT3M18S",
      },
    ],
  });
  document.head.appendChild(musicAlbumScript);

  // 페이지에 대한 추가 메타 태그
  const additionalMeta = [
    { name: "revisit-after", content: "1 days" },
    { name: "copyright", content: "리쿠 사랑해" },
    { name: "author", content: "리쿠 팬" },
    { name: "generator", content: "React" },
    { name: "rating", content: "general" },
    { name: "format-detection", content: "telephone=no" },
  ];

  additionalMeta.forEach((meta) => {
    const metaTag = document.createElement("meta");
    metaTag.name = meta.name;
    metaTag.content = meta.content;
    document.head.appendChild(metaTag);
  });

  // 검색 엔진 최적화를 위한 링크 태그
  const linkTags = [
    {
      rel: "alternate",
      href: "https://riku-love.vercel.app/ja/",
      hreflang: "ja",
    },
    { rel: "alternate", href: "https://riku-love.vercel.app/", hreflang: "ko" },
    {
      rel: "alternate",
      href: "https://riku-love.vercel.app/",
      hreflang: "x-default",
    },
  ];

  linkTags.forEach((link) => {
    const linkTag = document.createElement("link");
    linkTag.rel = link.rel;
    linkTag.href = link.href;
    if (link.hreflang) linkTag.setAttribute("hreflang", link.hreflang);
    document.head.appendChild(linkTag);
  });
}
