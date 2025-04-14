import styles from "./History.module.css"
function History({history}) {

  console.log("why")
  // const sorted = history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  return <>
    <div className={styles.container} >
      <h4>History</h4>
      <div className={styles.list}>
        {/* {sorted.map((item, index)=>{ */}
        {/*   return <div key={index}> */}
        {/*     <p>{`${item.timestamp} ${item.occupant_detected} ${item.temperature_farenheit} ${item.resolved} ${item.authorities}`}</p> */}
        {/*   </div> */}
        {/* })} */}
      </div>
    </div>
  </>
}
export default History
