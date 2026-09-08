import http, { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } else if (req.url === "/product" && req.method === "GET") {
    const products = [
      { id: 1, name: "mobile", price: 49000 },
      { id: 2, name: "laptop", price: 200000 },
    ];
    res.end(JSON.stringify(products));
  } else if (req.url === "/product" && req.method === "POST") {
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
      const product = JSON.parse(body);
      res.end(`Product ${product.name} is added successfully`);
    });
  } else if (req.url === "/product" && req.method === "PUT") {
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
      const product = JSON.parse(body);
      res.end(`Product ${product.name} is updated successfully`);
    });
  } else if (req.url === "/product" && req.method === "DELETE") {
    let body = "";
    res.on("data", (chunk) => {
      body += chunk;
    });
    res.on("end", () => {
      const product = JSON.parse(body);
      res.end(`Product ${product.name} is deleted successfully`);
    });
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Prg11 is running on port 5000");
});
