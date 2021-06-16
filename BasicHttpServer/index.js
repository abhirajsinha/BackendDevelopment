const http = require("http");
const port = 8000;
const fs = require("fs"); //Read or write from file

function requestHandler(req, res) {
  res.writeHead(200, { "content-type": "text/html" }); //Telling browser the type of content we are sending

  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log("Error", err);
      return res.end("<h1>Error!</h1>");
    }
    return res.end(data);
  });

//   res.end("<h1>Sending Response !!</h1>");
}

//Creating Server
const server = http.createServer(requestHandler);

//Go to Port
server.listen(port, function (err) {
  if (err) {
    console.log("Error!!!", err);
    return;
  }

  console.log("Server is Up and Running and Port: ", port);
});
