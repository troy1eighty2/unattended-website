import styles from "./Ticker.module.css"
import { motion } from "framer-motion"
function Ticker({ uptime }) {

  let subjectDetected = false

  return <>
    {uptime ?
      <div className={styles.container} style={subjectDetected ? { backgroundColor: "red" } : { backgroundColor: "limegreen" }}>
        <motion.div className={styles.text} animate={{ x: ["-90%", "100%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }}>
          {subjectDetected ? Array.from({ length: 10 }).map((item, index) => <p key={index}> SUBJECT DETECTED⚠️</p>) : <p>Operational</p>}
        </motion.div>
      </div> :
      null
    }
  </>
}
export default Ticker
