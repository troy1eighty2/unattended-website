import { useState, useEffect} from 'react'
import styles from "./App.module.css"
import { io } from 'socket.io-client'

import Table from './components/Table'
import VehicleStatus from './components/VehicleStatus'
import Status from './components/Status'
import AppInfo from './components/AppInfo'
import SysInfo from './components/SysInfo'
import Ticker from './components/Ticker'
import History from './components/History'
import CapturedImages from './components/CapturedImages.jsx'

const socketURL = "ws://localhost:3000"
function App() {

  const [frame, setFrame] = useState("")
  const [temp, setTemp] = useState("")

  const [cputemp, setCpuTemp] = useState("")
  const [humidity, setHumidity] = useState("")
  const [heatIndex, setHeatIndex] = useState("")
  const [emergency, setEmergency] = useState(false)
  const [subjects, setSubjects] = useState(null)
  const [motion, setMotion] = useState(false)
  const [wifistrength, setWifiStrength] = useState(null)
  const [uptime, setUptime] = useState(null)
  const [sysinfo, setSysInfo] = useState([])
  const [history, setHistory] = useState([])
  const [pictures, setPictures] = useState([])

  const [location, setLocation] = useState(null)
  const [gpsstrength, setGPStrength] = useState(null)

  const [status, setStatus] = useState(true)
  const [capturedImages, setCapturedImages] = useState(null)

  useEffect(() => {
    console.log("test")
    const socket = io(socketURL)
    socket.on("frame", (data) => {
      setFrame(data)
    })
    socket.on("temp", (data) => {
      setTemp(data[0])
      setHumidity(data[1])
      setHeatIndex(data[2])
    })
    socket.on("cpu_temp", (data) => {
      setCpuTemp(data)

    })
    socket.on("uptime", (data) => {
      setUptime(data)

    })
    socket.on("wifi_strength", (data) => {
      setWifiStrength(data)

    })
    socket.on("detections", (data) => {
      setSubjects(data)

    })
    socket.on("sys_info", (data) => {
      setSysInfo(data)
    })
    socket.on("config", (data) => {
      console.log(data)
      setLocation(data[0])
      setGPStrength(data[1])
    })
    socket.on("emergency", (data) => {
      setEmergency(data)
    })
    socket.on("history", (data) => {
      console.log(` history: ${data}`)
      setHistory(data)
    })
    socket.on("pictures", (data) => {
      console.log(` pictures: ${data}`)
      setPictures(data)
    })

    return () => {
      console.log("Cleaning up WebSocket...");
      socket.disconnect(); // Close WebSocket connection
    };
  }, [])
  return <>
    <div className={styles.ticker}>
      <Ticker uptime={uptime} emergency={emergency}></Ticker>
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
          <Status uptime={uptime} emergency={emergency}></Status>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.row1}>
            <div className={styles.appInfo}>
              <AppInfo temp={temp} humidity={humidity} heatIndex={heatIndex} subjects={subjects} location={location} ></AppInfo>
            </div>
            <div className={styles.sysInfo}>
              <SysInfo uptime={uptime} cputemp={cputemp} wifistrength={wifistrength} sysinfo={sysinfo} gpsstrength={gpsstrength}></SysInfo>
            </div>
          </div>
          <div className={styles.row2}>
            <History history={history}></History>
          </div>
        </div>
        <div className={styles.right}>
          <img src={`data:image/jpeg;base64,${frame}`} alt="Live Frame" className={styles.liveView} />
        </div>
      </div>
      <div className={styles.capturedImages}>
          <CapturedImages pictures={pictures}></CapturedImages>
      </div>
      <div className={styles.footer}>
        Built by Troy, Theirry, Joel, and Jason
      </div>
    </div >
  </>
}

export default App
