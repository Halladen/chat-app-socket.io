const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
const PORT = 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("send name", (username) => {
    io.emit("send name", username);
  });

  socket.on("send message", (message) => {
    io.emit("send message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
