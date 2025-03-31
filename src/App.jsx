import { useState, useEffect } from 'react'
import styles from "./App.module.css"
import { io } from 'socket.io-client'

import Table from './components/Table'
import VehicleStatus from './components/VehicleStatus'

const socketURL = "ws://localhost:3000"
function App() {
  const [frame, setFrame] = useState("")
  const [temp, setTemp] = useState("")
  const [cputemp, setCpuTemp] = useState("")
  const [humidity, setHumidity] = useState("")
  const [emergency, setEmergency] = useState(false)
  const [subjects, setSubjects] = useState(0)
  const [motion, setMotion] = useState(false)

  const [status, setStatus] = useState(true)

  useEffect(() => {
    const socket = io(socketURL)
    socket.on("frame", (data) => {
      // console.log(data)
      setFrame(data)
    })
    socket.on("temp", (data) => {
      console.log(data)
      setTemp(data[0])
      setHumidity(data[1])
    })
    socket.on("cpu_temp", (data) => {
      console.log(data)
      setCpuTemp(data)

    })

    return () => {
      console.log("Cleaning up WebSocket...");
      socket.disconnect(); // Close WebSocket connection
    };
  }, [])
  return <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Guardian Eyes
        </h1>
        <div>
          <img src="/logo.jpeg" className={styles.logo} />
        </div>
      </div>
      <div className={styles.status}>
        <h2>Operational Status: {status ? <img src="/greencircle.png" className={styles.statusicon} /> : <img src="/redcircle.png" className={styles.statusicon} />}</h2>
        {status ? <VehicleStatus emergency={emergency}></VehicleStatus> : null}

      </div>
      <div>
      </div>
      <div className={styles.dashboard}>
        <Table temp={temp} humidity={humidity} cputemp={cputemp}></Table>

        <img src={`data:image/jpeg;base64,${frame}`} alt="Live Frame" className={styles.liveView} />
      </div>
    </div>
    <div className={styles.footer}>
      Built by Troy, Theirry, Joel, and Jason
    </div>
  </>
}

export default App
