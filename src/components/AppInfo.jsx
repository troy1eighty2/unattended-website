import styles from "./AppInfo.module.css"
function AppInfo() {

  return <>
    <div className={styles.container} >
      <h4>App Info</h4>
      <div className={styles.list}>
        <div className={styles.item}><p className={styles.label}>Location:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>Subjects:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>Feels Like:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>Sensor Temp:</p><p>{"placeholder"}</p> </div>
        <div className={styles.item}><p className={styles.label}>Humidity:</p><p>{"placeholder"}</p> </div>
      </div>
    </div>
  </>
}
export default AppInfo
