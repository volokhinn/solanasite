'use client'
import styles from './AdvantagesSection.module.scss';
import '@/app/globals.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from '../ui/Counter/Counter';
import AdvantagesCard from '../ui/AdvantagesCard/AdvantagesCard';
import { useState, useEffect } from 'react';

const randomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

  export const AdvantagesSection = () => {
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });
  const [refCounter1, inViewCounter1] = useInView({ triggerOnce: true });
  const [refCounter2, inViewCounter2] = useInView({ triggerOnce: true });
  const [refCounter3, inViewCounter3] = useInView({ triggerOnce: true });

  const [refCard1, inViewCard1] = useInView({ triggerOnce: true });
  const [refCard2, inViewCard2] = useInView({ triggerOnce: true });
  const [refCard3, inViewCard3] = useInView({ triggerOnce: true });
  const [refCard4, inViewCard4] = useInView({ triggerOnce: true });

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [title, setTitle] = useState('Join a community of millions.');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 1150 && !isScrolling && !scrolled) {
      setIsScrolling(true);
      const interval = setInterval(() => {
        setTitle(randomString(title.length - 10));
      }, 100); // Генерация рандомного текста

      setScrolled(true);

      setTimeout(() => {
        clearInterval(interval);
        setTitle('Adaptive for massive adoption');
      }, 700); // Задержка перед сменой заголовка
    } else if (scrollPosition < 1150 && scrolled) {
      setIsScrolling(false);
      setScrolled(false);
      const interval = setInterval(() => {
        setTitle(randomString(title.length - 10));
      }, 100); // Генерация рандомного текста
      setTimeout(() => {
        clearInterval(interval);
        setTitle('Join a community of millions.');
      }, 700); // Задержка перед сменой заголовка
    }
  }, [scrollPosition, isScrolling, title, scrolled]);
  

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.counters}>
          <div className={styles.left}>
            <h2 className='stickytitle'>{title}</h2>
          </div>
          <div className={styles.right} ref={refRight}>
            <div className={styles.counters_column}>
            <motion.div
                className={styles.counters_item}
                ref={refCounter1}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCounter1 ? 1 : 0, y: inViewCounter1 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Counter count="11.5M+" title="Active accounts" bg="linear-gradient(228deg, #19fb9b 0%, #8c01fa 100%)" />
              </motion.div>
              <motion.div
                className={styles.counters_item}
                ref={refCounter2}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCounter2 ? 1 : 0, y: inViewCounter2 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Counter count="21.9M" title="NFTs minted" bg="linear-gradient(229deg, #0047ff 0%, #00bcd4 100%)" />
              </motion.div>
              <motion.div
                className={styles.counters_item}
                ref={refCounter3}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCounter3 ? 1 : 0, y: inViewCounter3 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Counter count="$0.00025" title="Average cost per transaction" bg="linear-gradient(222deg, #00ffbd 0%, #025b8c 100%)" />
              </motion.div>
            </div>

              <div className={styles.cards}>
          <div className={styles.cards_right}>
            <div className={styles.column_left}>
              <motion.div
                ref={refCard1}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCard1 ? 1 : 0, y: inViewCard1 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AdvantagesCard title="Fast" count="3,969" subtitle="Transactions per second" bordercolor="rgba(31, 207, 241, 1)" dotcolor="#1FCFF1">
                  Don’t keep your users waiting.<br />
                  Solana has block times of 400 <br />
                  milliseconds — and as hardware gets <br />
                  faster, so will the network.
                </AdvantagesCard>
              </motion.div>
              <motion.div
                ref={refCard2}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCard2 ? 1 : 0, y: inViewCard2 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <AdvantagesCard title="Scalable" count="163,077,581,394" subtitle="Total transactions" bordercolor="rgba(153, 69, 255, 1)" dotcolor="#1FCFF1">
                  Get big, quick. Solana is made to<br />
                  handle thousands of transactions<br />
                  per second, and fees for both<br />
                  developers and users remain less<br />
                  than $0.01.
                </AdvantagesCard>
              </motion.div>
            </div>
            <div className={styles.column_right}>
              <motion.div
                ref={refCard3}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCard3 ? 1 : 0, y: inViewCard3 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AdvantagesCard title="Decentralized" count="1,675" subtitle="Validator nodes" bordercolor="rgba(255, 213, 18, 1)" dotcolor="#1FCFF1">
                  The Solana network is validated<br />
                  by thousands of nodes that operate<br />
                  independently of each other, ensuring<br />
                  your data remains secure and<br />
                  censorship resistant.
                </AdvantagesCard>
              </motion.div>
              <motion.div
                ref={refCard4}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inViewCard4 ? 1 : 0, y: inViewCard4 ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.8}}
              >
                <AdvantagesCard title="Energy Efficient" count="0%" subtitle="Net carbon impact" bordercolor="rgba(25, 251, 155, 1)">
                  Solana’s proof of stake network and<br />
                  other innovations minimize its impact<br />
                  on the <Link href="/" style={{ color: 'rgba(25, 251, 155, 1)', textDecoration: 'underline' }}>environment</Link>. Each Solana transaction<br />
                  uses about the same energy as a few<br />
                  Google searches.
                </AdvantagesCard>
              </motion.div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
