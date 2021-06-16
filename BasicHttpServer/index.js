const http = require("http");
const port = 8000;

function requestHandler(req,res){
    res.writeHead(200,{'content-type':'text/html'})//Telling browser the type of content we are sending
    res.end('<h1>Sending Response !!</h1>');
}

//Creating Server
const server = http.createServer(requestHandler);

//Go to Port
server.listen(port, function (err) {
    if(err){
        console.log("Error!!!",err);
        return;
    }

    console.log("Server is Up and Running and Port: ",port);
});
