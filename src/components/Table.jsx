import styles from "./Table.module.css"
function Table({ temp, humidity, cputemp }) {

  return <>
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <div className={styles.itemHeader}>Sensor Temperature:</div>
          <div className={styles.itemValue}>{temp}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.itemHeader}>CPU Temperature:</div>
          <div className={styles.itemValue}>{cputemp}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.itemHeader}>Humidity:</div>
          <div className={styles.itemValue}>{humidity}</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.itemHeader}>Location:</div>
          <div className={styles.itemValue}>?</div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.itemHeader}>Uptime:</div>
          <div className={styles.itemValue}>?</div>
        </div>
      </div>
    </div>
  </>
}
export default Table
