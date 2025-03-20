import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

// express app
const app = express();
// http server
const server = http.createServer(app);
// websocket attach
const io = new Server(server);
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
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on ws://localhost:${process.env.PORT}`);
});

