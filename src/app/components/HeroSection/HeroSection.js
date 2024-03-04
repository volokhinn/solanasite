import styles from './HeroSection.module.scss';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className={styles.main}>
      <h1>
        Powerful for developers.<br></br>Fast for everyone.
      </h1>

      <span className={styles.subtitle}>
        Bring blockchain to the people. Solana supports experiences <br></br> for power users, new
        consumers, and everyone in between.
      </span>

      <div className={styles.btngroup}>
        <Link href="/3">
          <button className={styles.btngradient}>Start building</button>
        </Link>
        <Link href="/3">
          <button className={styles.btnvoid}>Read Docs</button>
        </Link>
      </div>
    </div>
  );
};
