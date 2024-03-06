import styles from './JoinSection.module.scss'
import '@/app/globals.css'
import JoinGrid from '../ui/JoinGrid/JoinGrid'
import Link from 'next/link'

export const JoinSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className='container'>
            <h2 className={styles.title}>Join a thriving community.</h2>
        </div>
        <JoinGrid />

        <div className={styles.cta}>
            <h3>It's time to join the thousands of creators, <br></br> artists, and developers using Solana.</h3>
            <Link href="/3">
                <button className='btngradient'>Start building</button>
            </Link>
        </div>
    </div>
  )
}

export default JoinSection