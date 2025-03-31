import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";

// express app
const app = express();
// for http requests
app.use(cors())
// http server
const server = http.createServer(app);
// websocket attach
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
dotenv.config()

io.on("connection", (socket) => {
  console.log(`Connection: ${socket.id}`)
  socket.emit("message", "Welcome to the server, little socket!")

  socket.on("disconnect", () => {
    console.log(`Disconnect: ${socket.id}`)
  });
  socket.on("message", (data) => {
    console.log(`Message from client: ${socket.id}: ${data}`)
  });
  socket.on("error", (error) => {
    console.log(`Error: ${error} on ${socket.id}`)
  });
  // receive frame as bytes object and convert into image
  socket.on("frame", (data) => {
    console.log("AI Camera Data")
    io.emit("frame", data);
  });
  socket.on("thermal_frame", (data) => {
    console.log("Thermal Camera Data")
    io.emit("thermal_frame", data);
  });
  socket.on("temp", (data) => {
    console.log("Temp Data")
    io.emit("temp", data);
  });
  socket.on("cpu_temp", (data) => {
    console.log("Cpu Temp Data")
    io.emit("cpu_temp", data);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on ws://localhost:${process.env.PORT}`);
});
