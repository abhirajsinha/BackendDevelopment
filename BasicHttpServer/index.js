const http = require("http");
const port = 8000;
const fs = require("fs"); //Read or write from file

function requestHandler(req, res) {
  res.writeHead(200, { "content-type": "text/html" }); //Telling browser the type of content we are sending

  let filePath;
  switch (req.url) {
    case "/":
      filePath = "./index.html";
      break;
    case "/profile":
      filePath = "./profile.html";
      break;

    default:
      filePath = "./404.html";
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.log("Error!", err);
      return res.end("<h1>Error!</h1>");
    }

    return res.end(data);
  });
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
