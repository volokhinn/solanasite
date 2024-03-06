import styles from './JoinSection.module.scss'
import '@/app/globals.css'
import JoinGrid from '../ui/JoinGrid/JoinGrid'
import Link from 'next/link'
import {Title} from '../ui/Title/Title'

export const JoinSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className='container'>
            <Title>Join a thriving community.</Title>
        </div>
        <JoinGrid />

        <div className={styles.cta}>
            <Title>It's time to join the thousands of creators, <br></br> artists, and developers using Solana.</Title>
            <Link href="/3">
                <button className='btngradient'>Start building</button>
            </Link>
        </div>
    </div>
  )
}

export default JoinSection