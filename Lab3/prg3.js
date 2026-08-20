import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url == "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>About us Page</h1>");
  } else if (req.url == "/contact") {
    res.end("<h1>Contact here</h1>");
  } else {
    res.statusCode = 404;
    res.end(`
                <h1>Page not Found</h1>
                <a href='/'>Home</a>
                `);
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
