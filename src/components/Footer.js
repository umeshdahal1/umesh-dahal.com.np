import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.identity}>
          <p className={styles.name}>Umesh Dahal</p>

          <p className={styles.affiliation}>
            Central Department of Physics
            <br />
            Tribhuvan University
            <br />
            Kirtipur, Kathmandu, Nepal
          </p>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/research">Research</Link>
          <Link href="/work">Selected Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} Umesh Dahal. All rights reserved.</p>

        <p>Academic website built with Next.js and React.</p>
      </div>
    </footer>
  );
}
