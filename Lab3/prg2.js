import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(404, {
    "content-type": "text/plain",
  });
  res.end("welcome to Node js");
});

server.listen(4444, () => console.log("Server is running..."));
