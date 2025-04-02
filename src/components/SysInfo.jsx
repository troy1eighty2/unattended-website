import styles from "./SysInfo.module.css"
function SysInfo() {

  return <>
    <div className={styles.container}>
      <h4>Sys Info</h4>
      <div className={styles.list}>
        <div className={styles.item}><p className={styles.label}>Uptime:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>CPU Temp:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>Internet Connection:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>GPS Connection Strength:</p><p>{"placeholder"}</p> </div>
      </div>

    </div>
  </>
}
export default SysInfo
