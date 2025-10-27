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
              하루 한 장, 스프릿과 함께 꾸준히 읽는 습관을 만들어보세요.
              <br />
              작은 습관이 쌓여, 더 깊은 독서로 이어집니다.
            </p>
            {!isMobile ? (
              <div className={styles.button_row}>
                <Link
                  href={
                    deviceType === "ios"
                      ? "https://apps.apple.com/us/app/%EC%8A%A4%ED%94%84%EB%A6%BF-%EA%BE%B8%EC%A4%80%ED%95%9C-%EB%8F%85%EC%84%9C%EC%8A%B5%EA%B4%80-%EB%A7%8C%EB%93%A4%EA%B8%B0/id6475924225"
                      : "https://play.google.com/store/apps/details?id=com.ikjunchoi_android.sprit"
                  }
                  className={`${styles.cta_button} ${styles.cta_primary}`}
                >
                  다운로드 하기
                </Link>
                <p
                  onClick={() => {
                    const featuresSection = document.querySelector(
                      `.${styles.features_section}`
                    );
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`${styles.cta_button} ${styles.cta_secondary}`}
                >
                  더 알아보기
                </p>
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
                <strong>400+</strong>
                <span>활동 중인 독자</span>
              </div>
              <div className={styles.metric}>
                <strong>1.2K+</strong>
                <span>등록된 책</span>
              </div>
              <div className={styles.metric}>
                <strong>1.4K+</strong>
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
            <Image
              src="/record.png"
              alt="Feature 1 Visual"
              width={256}
              height={512}
              className={styles.feature_image}
            />
          </div>
        </article>

        <article className={styles.feature_row}>
          <div className={styles.feature_visual}>
            <Image
              src="/analysis.png"
              alt="Feature 1 Visual"
              width={256}
              height={512}
              className={styles.feature_image}
            />
          </div>
          <div className={styles.feature_copy}>
            <span className={styles.feature_badge}>
              <span aria-hidden="true">📊</span> 기능 2
            </span>
            <h3 className={styles.feature_heading}>독서량 분석</h3>
            <p className={styles.feature_description}>
              당신의 독서 습관을 시각적으로 분석해보세요. 주간 독서량, 도서 별
              분포 등 다양한 데이터를 한눈에 확인할 수 있습니다.
            </p>
            <ul className={styles.feature_list}>
              <li>월간/주간 독서량 통계</li>
              <li>도서 별 독서량 분석</li>
              <li>독서 목표 설정 및 달성률</li>
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
              <span aria-hidden="true">💬</span> 기능 3
            </span>
            <h3 className={styles.feature_heading}>독서 내용 공유</h3>
            <p className={styles.feature_description}>
              당신의 독서 감상과 인상 깊은 구절을 커뮤니티와 공유하세요.
              팔로워들과 의견을 나누고, 다양한 관점을 배워보세요.
            </p>
            <ul className={styles.feature_list}>
              <li>독서 감상 및 리뷰 작성</li>
              <li>인상 깊은 구절 공유</li>
              <li>다른 독자와의 소통</li>
            </ul>
          </div>
          <div className={styles.feature_visual}>
            <Image
              src="/social.png"
              alt="Feature 1 Visual"
              width={256}
              height={512}
              className={styles.feature_image}
            />
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
