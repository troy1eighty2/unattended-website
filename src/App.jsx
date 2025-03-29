import { useState, useEffect } from 'react'
import styles from "./App.module.css"
import { io } from 'socket.io-client'

const socketURL = "ws://localhost:3000"
function App() {
  const [frame, setFrame] = useState("")
  const [temp, setTemp] = useState("")
  const [humidity, setHumidity] = useState("")

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
      Temp and humidity
      <div>
        {temp}
        {humidity}
      </div>
    </div>
  </>
}

export default App
