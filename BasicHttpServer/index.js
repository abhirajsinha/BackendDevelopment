const http = require("http");
const port = 8000;

//Creating Server
const server = http.createServer();

//Go to Port
server.listen(port, function (err) {
    if(err){
        console.log("Error!!!",err);
        return;
    }

    console.log("Server is Up and Running and Port: ",port);
});
