import styles from "./SysInfo.module.css"
function SysInfo({ uptime, cputemp, wifistrength, sysinfo, gpsstrength }) {

  return <>
    <div className={styles.container}>
      <h4>Sys Info</h4>
      <div className={styles.list}>
        <div className={styles.item}><p className={styles.label}>Uptime:</p><p>{uptime} sec(s)</p> </div>
        <div className={styles.item}><p className={styles.label}>CPU Temp:</p><p>{cputemp} F</p> </div>
        <div className={styles.item}><p className={styles.label}>CPU Usage:</p><p>{sysinfo[0]} %</p> </div>
        <div className={styles.item}><p className={styles.label}>RAM Usage:</p><p>{sysinfo[1]} %</p> </div>
        <div className={styles.item}><p className={styles.label}>Internet Connection:</p><p>{!wifistrength ? null : wifistrength > -31 ? `Excellent (${wifistrength} dBm)` : wifistrength > -71 ? `Good (${wifistrength} dBm)` : `Weak (${wifistrength} dBm)`}</p> </div>
        <div className={styles.item}><p className={styles.label}>GPS Connection Strength:</p><p>{gpsstrength}</p> </div>
      </div>

    </div>
  </>
}
export default SysInfo
