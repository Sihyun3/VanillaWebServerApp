import http from "http";
import Route from "./route/Route.js";

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {
    //라우터
    try{
        Route(req, res);
    }catch(e){
        console.log(e);
        res.writeHead(500);
        res.end("Internel Servel Error");
    }
    
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

