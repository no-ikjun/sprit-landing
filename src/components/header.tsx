import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Header() {
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
        <div className={styles.download_button}>
          <p>앱 다운로드</p>
        </div>
      </div>
    </header>
  );
}
