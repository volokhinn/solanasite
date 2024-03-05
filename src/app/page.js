import styles from './page.module.css';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AdvantagesSection />
    </main>
  );
}
