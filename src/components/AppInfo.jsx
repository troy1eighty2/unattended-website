import styles from "./AppInfo.module.css"
function AppInfo({ temp, humidity, heatIndex, subjects, location }) {

  return <>
    <div className={styles.container} >
      <h4>App Info</h4>
      <div className={styles.list}>
        <div className={styles.item}><p className={styles.label}>Location:</p><p>{location}</p> </div>
        <div className={styles.item}><p className={styles.label}>Subjects:</p>{subjects ? <p>{subjects.map((item, index) => <b key={index}>{item}</b>)}</p> : null} </div>
        <div className={styles.item}><p className={styles.label}>Feels Like:</p><p>{heatIndex} F</p> </div>
        <div className={styles.item}><p className={styles.label}>Sensor Temp:</p><p>{temp} F</p> </div>
        <div className={styles.item}><p className={styles.label}>Humidity:</p><p>{humidity} RH</p> </div>
      </div>
    </div>
  </>
}
export default AppInfo
