import styles from "./CapturedImages.module.css"

function History({ pictures }) {
  return (
    <div className={styles.container}>
      <h4>Captured Images</h4>
      <div className={styles.list}>
        {pictures.length > 0 ?
        <div className={styles.items}>

          {pictures
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map((item, index) =>{
            return <div key={index} className={styles.item}>
                      <p className={styles.time}>{item.timestamp}</p>
                      <img className={styles.image} src={`data:image/jpeg;base64,${item.image}`}/>
                  </div>
          })}
        </div>
        : "Nothing to show"}
      </div>
    </div>
  )
}

export default History

