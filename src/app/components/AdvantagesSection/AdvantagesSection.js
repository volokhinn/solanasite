'use client'
import styles from './AdvantagesSection.module.scss';
import '@/app/globals.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Counter from '../ui/Counter/Counter';
import AdvantagesCard from '../ui/AdvantagesCard/AdvantagesCard';
import Title from '../ui/Title/Title';

export const AdvantagesSection = () => {
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });
  const [refCounters, inViewCounters] = useInView({ triggerOnce: true });

  const [refCard1, inViewCard1] = useInView({ triggerOnce: true });
  const [refCard2, inViewCard2] = useInView({ triggerOnce: true });
  const [refCard3, inViewCard3] = useInView({ triggerOnce: true });
  const [refCard4, inViewCard4] = useInView({ triggerOnce: true });

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.counters}>
            <Title>Join a community <br /> of millions.</Title>
          <div className={styles.right} ref={refRight}>
            <motion.div
              ref={refCounters}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inViewCounters ? 1 : 0, y: inViewCounters ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Counter count="11.5M+" title="Active accounts" bg="linear-gradient(228deg, #19fb9b 0%, #8c01fa 100%)" />
              <Counter count="21.9M" title="NFTs minted" bg="linear-gradient(229deg, #0047ff 0%, #00bcd4 100%)" />
              <Counter count="$0.00025" title="Average cost per transaction" bg="linear-gradient(222deg, #00ffbd 0%, #025b8c 100%)" />
            </motion.div>
          </div>
        </div>

        <div className={styles.cards}>
          <Title>Made for <br /> mass adoption.</Title>
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
  );
};

export default AdvantagesSection;
