import { useState, useEffect } from 'react'
import styles from "./App.module.css"
import { io } from 'socket.io-client'

const socketURL = "ws://localhost:3000"
function App() {
  const [frame, setFrame] = useState("")
  const [thermal_frame, setThermalFrame] = useState("")

  useEffect(() => {
    const socket = io(socketURL)
    socket.on("frame", (data) => {
      console.log(data)
      setFrame(data)
    })
    socket.on("thermal_frame", (data) => {
      console.log(data)
      setThermalFrame(data)
    })

    return () => {
      console.log("Cleaning up WebSocket...");
      socket.disconnect(); // Close WebSocket connection
    };
  }, [])
  return <>
    <div className={styles.container}>
      SDProject
      <div>
        <img src={`data:image/jpeg;base64,${frame}`} alt="Live Frame" />
      </div>
      ThermalCamera
      <div>
        <img src={`data:image/jpeg;base64,${thermal_frame}`} alt="Live Frame" />
      </div>
    </div>
  </>
}

export default App
