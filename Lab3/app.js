import http from "http";

const server = http.createServer();
server.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>welcome to my server</h1>");
  res.write("<h2>this is my first server</h2>");
  res.end();
});
server.listen(5000, () => {
  console.log("server is running ");
});
