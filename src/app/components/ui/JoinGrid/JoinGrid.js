
import Image from 'next/image'

import join1 from '../../../../../public/home/join/join1.jpg'
import join2 from '../../../../../public/home/join/join2.png'
import join3 from '../../../../../public/home/join/join3.png'
import join4 from '../../../../../public/home/join/join4.png'
import join5 from '../../../../../public/home/join/join5.png'

import styles from './JoinGrid.module.scss'

export const JoinGrid = () => {
  return (
    <div className={styles.grid}>
    <div className={styles.grid_tworows}>
        <div className={styles.grid_tworows_card}>
            <div className={styles.grid_tworows_title} style={{color: '#F087FF'}}>
                11,000
            </div>
            <div className={styles.grid_tworows_text}>
                Solana Hacker House participants
            </div>
        </div>
        <Image src={join1} alt="join1" width="100%" height="100%" className={styles.img} />
    </div>

    <Image src={join2} alt="join2" width="100%" height="100%" className={styles.img} />

    <div className={styles.grid_tworows}>
        <div className={styles.grid_tworows_card}>
            <div className={styles.grid_tworows_title} style={{color: '#19FB9B'}}>
                48,000
            </div>
            <div className={styles.grid_tworows_text}>
                Developers building during Solana Hackathons
            </div>
        </div>
        <Image src={join3} alt="join3" width="100%" height="100%" className={styles.img} />
    </div>

    <Image src={join4} alt="join4" width="100%" height="100%" className={styles.img} />

    <div className={styles.grid_tworows}>
        <div className={styles.grid_tworows_card}>
            <div className={styles.grid_tworows_title} style={{color: '#FFEB3B'}}>
                3,800
            </div>
            <div className={styles.grid_tworows_text}>
                Solana Breakpoint 2022 attendees
            </div>
        </div>
        <Image src={join5} alt="join5" width="100%" height="100%" className={styles.img} />
    </div>

</div>
  )
}

export default JoinGrid