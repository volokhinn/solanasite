import styles from './HeroSection.module.scss';
import '@/app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

import brave from '../../../../public/svg/partners/brave.svg'
import circle from '../../../../public/svg/partners/circle.svg'
import ds from '../../../../public/svg/partners/ds.svg'
import google from '../../../../public/svg/partners/google.svg'
import jump from '../../../../public/svg/partners/jump.svg'
import lol from '../../../../public/svg/partners/lol.svg'
import magic from '../../../../public/svg/partners/magic.svg'

const partners = [
  {icon: brave, alt: "Brave"},
  {icon: circle, alt: "Circle"},
  {icon: ds, alt: 'Discord'},
  {icon: google, alt: 'Google'},
  {icon: jump, alt: 'Jump'},
  {icon: lol, alt: 'Lol'},
  {icon: magic, alt: 'Magic'},
]

export const HeroSection = () => {
  return (
    <>
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
          <button className='btngradient'>Start building</button>
        </Link>
        <Link href="/3">
          <button className='btnvoid'>Read Docs</button>
        </Link>
      </div>
    </div>
    
    <div className={styles.partners}>
      <p>Powering tools and integrations from companies all around the world</p>
        <div className={styles.partners_logo}>
          {partners.map((item, i) => (
            <Image key={i} src={item.icon} alt={item.alt} height={75} width={150} />
          ))}
        </div>
    </div>
    </>
  );
};
