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
              ? "https://ikjun.com"
              : "https://ikjun.com/experiences"
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
