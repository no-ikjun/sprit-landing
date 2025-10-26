"use client";

import Header from "@/components/header";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setDeviceType("ios");
    } else if (/android/i.test(userAgent)) {
      setDeviceType("android");
    } else {
      setDeviceType("web");
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.hero_section}>
        <div className={styles.hero_inner}>
          <div className={styles.hero_copy}>
            <div className={styles.badge}>
              <span className={styles.badge_icon} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.badge_icon_svg}
                >
                  <path
                    d="m8.5 8.5 3.5-6 3.5 6 6 3.5-6 3.5-3.5 6-3.5-6-6-3.5 6-3.5z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              독서의 새로운 경험
            </div>
            <h1 className={styles.title}>
              오늘부터{" "}
              <span className={styles.highlight}>&ldquo;갓생&rdquo;</span> 살기
            </h1>
            <p className={styles.subtitle}>
              스프릿과 함께 독서 습관을 만들고, 같은 책을 읽는 사람들과
              연결하세요. 당신의 독서 여정을 더 풍요롭게 만들어보세요.
            </p>
            {!isMobile ? (
              <div className={styles.button_row}>
                <Link
                  href="https://apps.apple.com/us/app/%EC%8A%A4%ED%94%84%EB%A6%BF-%EA%BE%B8%EC%A4%80%ED%95%9C-%EB%8F%85%EC%84%9C%EC%8A%B5%EA%B4%80-%EB%A7%8C%EB%93%A4%EA%B8%B0/id6475924225"
                  className={`${styles.cta_button} ${styles.cta_primary}`}
                >
                  지금 시작하기
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ikjunchoi_android.sprit"
                  className={`${styles.cta_button} ${styles.cta_secondary}`}
                >
                  더 알아보기
                </Link>
              </div>
            ) : (
              <Link
                href={
                  deviceType === "ios"
                    ? "https://apps.apple.com/us/app/%EC%8A%A4%ED%94%84%EB%A6%BF-%EA%BE%B8%EC%A4%80%ED%95%9C-%EB%8F%85%EC%84%9C%EC%8A%B5%EA%B4%80-%EB%A7%8C%EB%93%A4%EA%B8%B0/id6475924225"
                    : "https://play.google.com/store/apps/details?id=com.ikjunchoi_android.sprit"
                }
                className={styles.mobile_button}
              >
                <p>다운로드 하기</p>
                <Image
                  src="/right_arrow.svg"
                  alt="Arrow"
                  width={9}
                  height={16}
                />
              </Link>
            )}
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <strong>50K+</strong>
                <span>활동 중인 독자</span>
              </div>
              <div className={styles.metric}>
                <strong>100K+</strong>
                <span>등록된 책</span>
              </div>
              <div className={styles.metric}>
                <strong>1M+</strong>
                <span>독서 기록</span>
              </div>
            </div>
          </div>
          <div className={styles.hero_visual}>
            <Image
              src="/mockup.png"
              alt="App Mockup"
              width={420}
              height={475.11}
              className={styles.mockup_image}
              priority
            />
          </div>
        </div>
      </section>
      <section className={styles.features_section}>
        <div className={styles.features_intro}>
          <h2 className={styles.features_title}>스프릿의 특징</h2>
          <p className={styles.features_subtitle}>
            독서를 더 즐겁고 의미 있게 만드는 기능들을 만나보세요.
          </p>
        </div>

        <article
          className={`${styles.feature_row} ${styles.feature_row_primary}`}
        >
          <div className={styles.feature_copy}>
            <span
              className={`${styles.feature_badge} ${styles.feature_badge_primary}`}
            >
              <span aria-hidden="true">📚</span> 기능 1
            </span>
            <h3 className={styles.feature_heading}>독서 기록</h3>
            <p className={styles.feature_description}>
              읽은 책을 간편하게 기록하고 당신의 독서 여정을 추적하세요. 책의
              진행 상황, 읽은 페이지, 완독 날짜 등을 모두 한 곳에서 관리할 수
              있습니다.
            </p>
            <ul className={styles.feature_list}>
              <li>책 추가 및 진행 상황 추적</li>
              <li>읽은 페이지 수 기록</li>
              <li>완독 날짜 및 평점 저장</li>
            </ul>
          </div>
          <div className={styles.feature_visual}>
            <div className={styles.feature_card_canvas}>
              <div className={styles.feature_card_head}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.feature_card_icon}
                >
                  <path
                    d="M5.5 5.2c0-.66.38-1.26.98-1.55l5.16-2.53a1.2 1.2 0 0 1 1.06 0l5.16 2.53c.6.29.98.9.98 1.55V20c0 .66-.38 1.26-.98 1.55l-5.16 2.53a1.2 1.2 0 0 1-1.06 0l-5.16-2.53a1.72 1.72 0 0 1-.98-1.55V5.2Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.feature_card_body}>
                <div className={styles.feature_card_line} />
                <div className={styles.feature_card_line} />
                <div className={styles.feature_card_line_short} />
                <div className={styles.feature_card_progress}>
                  <span>진행률</span>
                  <span>65%</span>
                </div>
                <div className={styles.feature_card_bar}>
                  <div className={styles.feature_card_bar_fill} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.feature_row}>
          <div className={styles.feature_visual}>
            <div className={styles.feature_card_canvas_secondary}>
              <div className={styles.feature_card_head}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.feature_card_icon}
                >
                  <path
                    d="M12 12.5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.59 19.64c-1.29-2.4-3.81-4.06-6.79-4.06s-5.5 1.66-6.79 4.06"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`${styles.feature_card_body} ${styles.feature_card_body_secondary}`}
              >
                <div className={styles.feature_avatar_row}>
                  <span className={styles.feature_avatar} />
                  <div className={styles.feature_card_line} />
                </div>
                <div className={styles.feature_card_line_short} />
                <div className={styles.feature_tag_row}>
                  <span className={styles.feature_tag}>새 모임</span>
                  <span className={styles.feature_tag}>토론</span>
                </div>
                <div className={styles.feature_card_line} />
              </div>
            </div>
          </div>
          <div className={styles.feature_copy}>
            <span className={styles.feature_badge}>
              <span aria-hidden="true">🤝</span> 기능 2
            </span>
            <h3 className={styles.feature_heading}>커뮤니티</h3>
            <p className={styles.feature_description}>
              같은 책을 읽는 사람들과 의견을 나누고 연결되세요. 독서 모임에
              참여하고 새로운 독서 친구들과 대화를 이어가며 독서 경험을
              확장해보세요.
            </p>
            <ul className={styles.feature_list}>
              <li>관심 주제별 독서 모임 참여</li>
              <li>다양한 의견과 추천 공유</li>
              <li>독서 챌린지로 동기 부여</li>
            </ul>
          </div>
        </article>

        <article
          className={`${styles.feature_row} ${styles.feature_row_primary}`}
        >
          <div className={styles.feature_copy}>
            <span
              className={`${styles.feature_badge} ${styles.feature_badge_primary}`}
            >
              <span aria-hidden="true">✨</span> 기능 3
            </span>
            <h3 className={styles.feature_heading}>개인화된 추천</h3>
            <p className={styles.feature_description}>
              당신의 취향과 독서 패턴을 학습해 AI가 맞춤형 책을 추천합니다. 더
              이상 무엇을 읽을지 고민하지 마세요.
            </p>
            <ul className={styles.feature_list}>
              <li>선호 장르 기반 큐레이션</li>
              <li>읽은 책과 유사한 추천 목록</li>
              <li>매주 업데이트되는 독서 인사이트</li>
            </ul>
          </div>
          <div className={styles.feature_visual}>
            <div className={styles.feature_card_canvas}>
              <div className={styles.feature_card_head}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.feature_card_icon}
                >
                  <path
                    d="M11.85 2.6c.03-.1.17-.1.2 0l1.3 4.26a.11.11 0 0 0 .1.08l4.47.14c.11 0 .15.15.07.22l-3.6 2.7a.11.11 0 0 0-.04.12l1.23 4.3c.03.1-.08.17-.16.1l-3.66-2.64a.12.12 0 0 0-.13 0l-3.66 2.63c-.08.06-.19-.02-.16-.1l1.23-4.29a.11.11 0 0 0-.04-.12l-3.6-2.7c-.09-.07-.04-.22.07-.22l4.47-.14a.11.11 0 0 0 .1-.08l1.3-4.26Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.feature_card_body}>
                <div className={styles.feature_card_bar_group}>
                  <div className={styles.feature_card_bar_item}>
                    <span />
                    <div>
                      <div className={styles.feature_card_line_micro} />
                      <div className={styles.feature_card_line_micro} />
                    </div>
                  </div>
                  <div className={styles.feature_card_bar_item}>
                    <span />
                    <div>
                      <div className={styles.feature_card_line_micro} />
                      <div className={styles.feature_card_line_micro} />
                    </div>
                  </div>
                  <div className={styles.feature_card_bar_item}>
                    <span />
                    <div>
                      <div className={styles.feature_card_line_micro} />
                      <div className={styles.feature_card_line_micro} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.cta_section}>
        <div className={styles.cta_card}>
          <div className={styles.cta_text_group}>
            <span className={styles.cta_badge}>스프릿과 함께</span>
            <h2 className={styles.cta_heading}>지금 바로 독서하세요</h2>
            <p className={styles.cta_subheading}>
              스프릿 앱을 다운로드하고 꾸준한 독서 습관을 만들어보세요.
            </p>
          </div>
          <div className={styles.cta_buttons}>
            <Link
              href="https://apps.apple.com/us/app/%EC%8A%A4%ED%94%84%EB%A6%BF-%EA%BE%B8%EC%A4%80%ED%95%9C-%EB%8F%85%EC%84%9C%EC%8A%B5%EA%B4%80-%EB%A7%8C%EB%93%A4%EA%B8%B0/id6475924225"
              className={`${styles.cta_store_button} ${styles.cta_store_button_primary}`}
            >
              <Image src="/apple.svg" alt="App Store" width={22} height={22} />
              App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.ikjunchoi_android.sprit"
              className={`${styles.cta_store_button} ${styles.cta_store_button_secondary}`}
            >
              <Image
                src="/google.svg"
                alt="Google Play"
                width={22}
                height={22}
              />
              Google Play
            </Link>
          </div>
        </div>
      </section>
      <p className={styles.copyright}>© 2024 SPRIT. All Rights Reserved.</p>
    </main>
  );
}
