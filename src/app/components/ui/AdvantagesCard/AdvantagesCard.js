import styles from './AdvantagesCard.module.scss'

const AdvantagesCard = ({children, title, subtitle, count, bordercolor, dotcolor}) => {
  return (
    <div className={styles.card}>
        <div className={styles.title}>
            {bordercolor && (
                <div className={styles.title_border} style={{background: bordercolor}}></div>
            )}
            <h3>{title}</h3>
        </div>
        <div className={styles.text}>{children}</div>
        <div className={styles.count}>
            {dotcolor && (
                <div className={styles.count_dot} style={{background: dotcolor}}></div>
            )}
            <div className={styles.count_number}>{count}</div>
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
    </div>
  )
}

export default AdvantagesCard