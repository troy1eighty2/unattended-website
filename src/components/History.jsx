import styles from "./History.module.css"

function History({ history }) {
  return (
    <div className={styles.container}>
      <h4>History</h4>
      <div className={styles.list}>
        {/* Header */}
        <div className={`${styles.item} ${styles.header}`}>
          <p>Date_Time</p>
          <p>Subjects</p>
          <p>Temperature_(°F)</p>
          <p>Authorities_Contacted</p>
          <p>Resolved</p>
        </div>

        {/* Rows */}
        {history
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
          .map((item, index) => (
            <div key={index} className={styles.item}>
              <p>{item.timestamp}</p>
              <b>{item.occupant_detected.toString()}</b>
              <p>{item.temperature_farenheit}</p>
              <p style={item.authorities ? {color:"green"}: {color:"red"}}>{item.authorities ? "True" : "False"}</p>

              <p style={item.resolved ? {color:"green"}: {color:"red"}}>{item.resolved ? "True" : "False"}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default History

