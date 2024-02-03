import Header from "@/components/header";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>
          오늘부터 &ldquo;갓생&rdquo; 살기
          <br />
          <span style={{ color: "#36CED8" }}>스프릿</span>과 함께
        </h1>
        <div className={styles.content}>
          <Image
            src="/mockup.png"
            alt="Mockup"
            width={420}
            height={475.11}
            className={styles.mockup_image}
          />
          <div className={styles.ment_box}>
            <p>
              독서습관을 꾸준히 유지하고 싶다면?
              <br />
              스프릿과 함께 독서하세요!
            </p>
            <div className={styles.button_row}>
              <Link href="https://ikjun.com" style={{ textDecoration: "none" }}>
                <div className={styles.app_button}>
                  <Image src="/apple.svg" alt="Apple" width={30} height={30} />
                  <p>App Store</p>
                </div>
              </Link>
              <Link href="https://ikjun.com" style={{ textDecoration: "none" }}>
                <div className={styles.app_button}>
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={30}
                    height={30}
                  />
                  <p>Google Play</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2024 SPRIT. All Rights Reserved.</p>
      </div>
    </main>
  );
}
