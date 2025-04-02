import { useState, useEffect } from 'react'
import styles from "./App.module.css"
import { io } from 'socket.io-client'

import Table from './components/Table'
import VehicleStatus from './components/VehicleStatus'
import Status from './components/Status'
import AppInfo from './components/AppInfo'
import SysInfo from './components/SysInfo'
import Ticker from './components/Ticker'
import History from './components/History'

const socketURL = "ws://localhost:3000"
function App() {
  const [frame, setFrame] = useState("")
  const [temp, setTemp] = useState("")
  const [cputemp, setCpuTemp] = useState("")
  const [humidity, setHumidity] = useState("")
  const [emergency, setEmergency] = useState(false)
  const [subjects, setSubjects] = useState(0)
  const [motion, setMotion] = useState(false)
  const [uptime, setUptime] = useState(null)

  const [status, setStatus] = useState(true)
  const [capturedImages, setCapturedImages] = useState(null)

  useEffect(() => {
    const socket = io(socketURL)
    socket.on("frame", (data) => {
      // console.log(data)
      setFrame(data)
    })
    socket.on("temp", (data) => {
      setTemp(data[0])
      setHumidity(data[1])
    })
    socket.on("cpu_temp", (data) => {
      setCpuTemp(data)

    })
    socket.on("uptime", (data) => {
      setUptime(data)
      console.log(data)

    })

    return () => {
      console.log("Cleaning up WebSocket...");
      socket.disconnect(); // Close WebSocket connection
    };
  }, [])
  return <>
    <div className={styles.ticker}>
      <Ticker uptime={uptime}></Ticker>
    </div>
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.nameAndLogo}>
          <h1 >
            Guardian Eyes
          </h1>
          <div>
            <img src="/logo.jpeg" className={styles.logo} />
          </div>
        </div>
        <i>It's gonna be a hot one today</i>
        <div className={styles.status}>
          <Status uptime={uptime}></Status>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.row1}>
            <div className={styles.appInfo}>
              <AppInfo></AppInfo>
            </div>
            <div className={styles.sysInfo}>
              <SysInfo></SysInfo>
            </div>
          </div>
          <div className={styles.row2}>
            <History></History>
          </div>
        </div>
        <div className={styles.right}>
          <img src={`data:image/jpeg;base64,${frame}`} alt="Live Frame" className={styles.liveView} />
        </div>
      </div>
      <div className={styles.capturedImages}>
        <h4>Captured Images</h4>
        <div className={styles.images}>
          {capturedImages ? "map them jawns" : "Nothing to show"}
        </div>

      </div>
      <div className={styles.footer}>
        Built by Troy, Theirry, Joel, and Jason
      </div>
    </div>
  </>
}

export default App
