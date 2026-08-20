import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h2 style ='color:red;'>Welcome to my first server</h2>");
});

server.listen(5000, () => {
  console.log("server is running ");
});
