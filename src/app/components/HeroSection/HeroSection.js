'use client'
import { motion } from 'framer-motion';
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
    <section className={styles.main}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Powerful for developers.<br></br>Fast for everyone.
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.subtitle}
      >
        Bring blockchain to the people. Solana supports experiences <br></br> for power users, new
        consumers, and everyone in between.
      </motion.span>

      <div className={styles.btngroup}>
        <Link href="/3">
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='btngradient'
          >
            Start building
          </motion.button>
        </Link>
        <Link href="/3">
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='btnvoid'
          >
            Read Docs
          </motion.button>
        </Link>
      </div>
    </section>
    
    <section className={styles.partners}>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Powering tools and integrations from companies all around the world
      </motion.p>
      <div className={styles.partners_logo}>
        {partners.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
          >
            <Image src={item.icon} alt={item.alt} height={75} width={150} />
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};
