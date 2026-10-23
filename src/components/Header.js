import Link from "next/link";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.identity} href="/">
          <span className={styles.name}>Umesh Dahal</span>
          <span className={styles.role}>Physics Researcher</span>
        </Link>

        <div className={styles.actions}>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/work">Selected Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
