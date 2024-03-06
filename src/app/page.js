import styles from './page.module.css';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection';
import { BuildSection } from './components/BuildSection/BuildSection';
import { JoinSection } from './components/JoinSection/JoinSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AdvantagesSection />
      <BuildSection />
      <JoinSection />
    </main>
  );
}
