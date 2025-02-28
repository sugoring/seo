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
    <span>키 175cm</span>
    <span>2024년 2월 21일 데뷔</span>
    <span>건강 회복</span>
    <span>2025년 3월 활동 재개</span>
    <span>Songbird</span>
    <span>WISH</span>
    <span>Hands Up</span>
    <span>Steady</span>
    <span>유우시</span>
    <span>사쿠야</span>
    <span>시온</span>
    <span>료</span>
    <span>대영</span>
    <span>NCT Universe LASTART</span>
  `;
  document.body.appendChild(rikuSeoElement);

  // 리쿠와 다른 리쿠들을 구분하기 위한 설명
  const rikuDifferentiationElement = document.createElement("div");
  rikuDifferentiationElement.className = "riku-differentiation";
  rikuDifferentiationElement.style.display = "none";
  rikuDifferentiationElement.innerHTML = `
    <p>이 페이지는 NCT WISH의 멤버 리쿠(마에다 리쿠)에 관한 것으로, 소셜로봇 리쿠(LiKU)나 게임 킹덤 하츠의 캐릭터 리쿠와는 관련이 없습니다.</p>
  `;
  document.body.appendChild(rikuDifferentiationElement);

  // 일본어 키워드 추가 (일본 검색 엔진용)
  const japaneseKeywordsElement = document.createElement("div");
  japaneseKeywordsElement.className = "japanese-keywords";
  japaneseKeywordsElement.style.display = "none";
  japaneseKeywordsElement.innerHTML = `
    <p>前田陸 リク NCT WISH エヌシーティーウィッシュ 2003年生まれ 21歳 日本人アイドル 福井県出身 健康回復 活動再開 2025年3月</p>
  `;
  document.body.appendChild(japaneseKeywordsElement);
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
];

// 검색 크롤러에게 다양한 키워드 노출을 위한 제목 변경 (1시간마다)
setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  document.title = titles[titleIndex];
}, 3600000); // 1시간마다 변경

// 검색 엔진을 위한 기타 메타 데이터
if (document.head) {
  // JSON-LD 스크립트 추가
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
        url: "https://yourdomain.com/logo.png",
      },
    },
    description:
      "NCT WISH 리쿠(마에다 리쿠)가 건강 회복 소식과 함께 2025년 3월부터 활동 재개를 발표했습니다.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://yourdomain.com/riku-health-recovery",
    },
  });
  document.head.appendChild(newsArticleScript);
}
