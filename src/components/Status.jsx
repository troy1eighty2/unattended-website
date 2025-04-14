import styles from "./Status.module.css"
function Status({ uptime, emergency }) {
  return <>
    <div className={styles.container}>
      <h2 className={styles.statTitle}>Operational Status: {uptime ? <img className={styles.indicator} src="/greencircle.png"></img> : <img className={styles.indicator} src="/redcircle.png"></img>}</h2>
      <h2 className={styles.statTitle}>Vehicle Status: {uptime ? emergency ? <img className={styles.indicator} src="/warning.png" /> : <img className={styles.indicator} src="/greencircle.png" /> : <img className={styles.indicator} src="/redcircle.png"></img>}</h2>
      {
        emergency ?

          <li className={styles.list}>
            <h4>🧑 Subject Detected</h4>
            <h4>🔔 Notification Sent</h4>
            <h4>♨️  Temperature Rising</h4>
            <h4>🚨 Authorities Contacted</h4>
          </li>
          : null
      }

    </div>
  </>

}
export default Status
