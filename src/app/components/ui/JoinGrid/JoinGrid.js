'use client'
import Image from 'next/image';
import styles from './JoinGrid.module.scss';
import { motion } from 'framer-motion';

const joinData = [
  { 
    src: '/home/join/join1.jpg',
    alt: 'join1',
    titleColor: '#F087FF',
    title: '11,000',
    text: 'Solana Hacker House participants'
  },
  { 
    src: '/home/join/join2.png',
    alt: 'join2',
    titleColor: null,
    title: null,
    text: null
  },
  { 
    src: '/home/join/join3.png',
    alt: 'join3',
    titleColor: '#19FB9B',
    title: '48,000',
    text: 'Developers building during Solana Hackathons'
  },
  { 
    src: '/home/join/join4.png',
    alt: 'join4',
    titleColor: null,
    title: null,
    text: null
  },
  { 
    src: '/home/join/join5.png',
    alt: 'join5',
    titleColor: '#FFEB3B',
    title: '3,800',
    text: 'Solana Breakpoint 2022 attendees'
  }
];

const Card = ({ src, alt, titleColor, title, text }) => (
  <div className={styles.grid_tworows}>
    {title && (
      <div className={styles.grid_tworows_card}>
        <div className={styles.grid_tworows_title} style={{ color: titleColor }}>
          {title}
        </div>
        <div className={styles.grid_tworows_text}>
          {text}
        </div>
      </div>
    )}
    <Image src={src} alt={alt} width={1920} height={1080} className={styles.img} />
  </div>
);

export const JoinGrid = () => (
  <motion.div className={styles.grid} whileInView={{opacity: 1}}>
    {joinData.map(({ src, alt, titleColor, title, text }) => (
      <Card key={src} src={src} alt={alt} titleColor={titleColor} title={title} text={text} />
    ))}
  </motion.div>
);

export default JoinGrid;
