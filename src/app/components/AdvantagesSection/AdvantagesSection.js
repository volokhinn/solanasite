import styles from './AdvantagesSection.module.scss'
import '@/app/globals.css'
import Link from 'next/link'

import Counter from '../ui/Counter/Counter'
import AdvantagesCard from '../ui/AdvantagesCard/AdvantagesCard'

export const AdvantagesSection = () => {
  return (
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.counters}>
                <div className={styles.left}>
                    <h2>Join a community <br></br> of millions.</h2>
                </div>
                <div className={styles.right}>
                    <Counter count="11.5M+" title="Active accounts" bg="linear-gradient(228deg, #19fb9b 0%, #8c01fa 100%)" />
                    <Counter count="21.9M" title="NFTs minted" bg="linear-gradient(229deg, #0047ff 0%, #00bcd4 100%)" />
                    <Counter count="$0.00025" title="Average cost per transaction" bg="linear-gradient(222deg, #00ffbd 0%, #025b8c 100%)" />
                </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.left}>
              <h2>Made for <br></br> mass adoption.</h2>
            </div>
            <div className={styles.cards_right}>
              <div className={styles.column_left}>
                <AdvantagesCard title="Fast" count="3,969" subtitle="Transactions per second" bordercolor="rgba(31, 207, 241, 1)" dotcolor="#1FCFF1">
                  Don’t keep your users waiting.<br></br>
                  Solana has block times of 400 <br></br>
                  milliseconds — and as hardware gets <br></br>
                  faster, so will the network.
                </AdvantagesCard>
                <AdvantagesCard title="Scalable" count="163,077,581,394" subtitle="Total transactions" bordercolor="rgba(153, 69, 255, 1)" dotcolor="#1FCFF1">
                  Get big, quick. Solana is made to<br></br>
                  handle thousands of transactions<br></br>
                  per second, and fees for both<br></br>
                  developers and users remain less<br></br>
                  than $0.01.
                </AdvantagesCard>
              </div>
              <div className={styles.column_right}>
              <AdvantagesCard title="Decentralizied" count="1,675" subtitle="Validator nodes" bordercolor="rgba(255, 213, 18, 1)" dotcolor="#1FCFF1">
                  The Solana network is validated<br></br>
                  by thousands of nodes that operate<br></br>
                  independently of each other, ensuring<br></br>
                  your data remains secure and<br></br>
                  censorship resistant.
                </AdvantagesCard>
                <AdvantagesCard title="Energy Efficient" count="0%" subtitle="Net carbon impact" bordercolor="rgba(25, 251, 155, 1)">
                  Solana’s proof of stake network and<br></br>
                  other innovations minimize its impact<br></br>
                  on the <Link href="/" style={{color: 'rgba(25, 251, 155, 1)', textDecoration: 'underline'}}>environment</Link>. Each Solana transaction<br></br>
                  uses about the same energy as a few<br></br>
                  Google searches.
                </AdvantagesCard>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdvantagesSection