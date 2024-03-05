import styles from './Counter.module.scss'

const Counter = ({count, title, bg}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.count} style={{backgroundImage: `${bg}`}}>{count}</div>
        <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Counter