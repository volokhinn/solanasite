'use client'
import Image from 'next/image';
import styles from './JoinGrid.module.scss';
import { motion } from 'framer-motion';
import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

import '@/app/globals.css'

const joinData = [
  { 
    src: '/home/join/join1.jpg',
    alt: 'join1',
    titleColor: '#F087FF',
    title: '11,000',
    text: 'Solana Hacker House participants',
    id: 1,
  },
  { 
    src: '/home/join/join2.png',
    alt: 'join2',
    titleColor: null,
    title: null,
    text: null,
    id: 2,
  },
  { 
    src: '/home/join/join3.png',
    alt: 'join3',
    titleColor: '#19FB9B',
    title: '48,000',
    text: 'Developers building during Solana Hackathons',
    id: 3,
  },
  { 
    src: '/home/join/join4.png',
    alt: 'join4',
    titleColor: null,
    title: null,
    text: null,
    id: 4,
  },
  { 
    src: '/home/join/join5.png',
    alt: 'join5',
    titleColor: '#FFEB3B',
    title: '3,800',
    text: 'Solana Breakpoint 2022 attendees',
    id: 5,
  },
  { 
    src: '/home/join/join4.png',
    alt: 'join4',
    titleColor: null,
    title: null,
    text: null,
    id: 6,
  },
  { 
    src: '/home/join/join5.png',
    alt: 'join5',
    titleColor: '#FFEB3B',
    title: '3,800',
    text: 'Solana Breakpoint 2022 attendees',
    id: 7,
  },

  { 
    src: '/home/join/join2.png',
    alt: 'join2',
    titleColor: null,
    title: null,
    text: null,
    id: 8,
  },
  { 
    src: '/home/join/join3.png',
    alt: 'join3',
    titleColor: '#19FB9B',
    title: '48,000',
    text: 'Developers building during Solana Hackathons',
    id: 9,
  },
  { 
    src: '/home/join/join1.jpg',
    alt: 'join1',
    titleColor: '#F087FF',
    title: '11,000',
    text: 'Solana Hacker House participants',
    id: 10,
  },
  { 
    src: '/home/join/join2.png',
    alt: 'join2',
    titleColor: null,
    title: null,
    text: null,
    id: 11,
  },
];

function Parallax({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
      </motion.div>
    </div>
  );
}

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
  <Parallax baseVelocity={-1}>
  <div className={styles.grid}>
    {joinData.map(({ src, alt, titleColor, title, text, id }) => (
      <Card key={id} src={src} alt={alt} titleColor={titleColor} title={title} text={text} />
    ))}
  </div>
  </Parallax>
);

export default JoinGrid;
