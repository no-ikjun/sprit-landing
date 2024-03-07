"use client";

import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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
    console.log(deviceType);
  }, [deviceType]);
  return (
    <header className={styles.header}>
      <Image
        src="/logo.svg"
        alt="My Site"
        width={120}
        height={26.17}
        className={styles.logo}
      />
      <div className={styles.header_button}>
        <a href="mailto:sprit@ikjun.com" className={styles.mail}>
          문의하기
        </a>
        <Link
          href={
            deviceType == "ios"
              ? "https://apps.apple.com/us/app/%EC%8A%A4%ED%94%84%EB%A6%BF-%EA%BE%B8%EC%A4%80%ED%95%9C-%EB%8F%85%EC%84%9C%EC%8A%B5%EA%B4%80-%EB%A7%8C%EB%93%A4%EA%B8%B0/id6475924225"
              : "https://play.google.com/store/apps/details?id=com.ikjunchoi_android.sprit"
          }
          style={{ textDecoration: "none" }}
        >
          <div className={styles.download_button}>
            <p>앱 다운로드</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
