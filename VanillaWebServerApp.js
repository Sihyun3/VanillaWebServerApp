import http from "http";
// import https from "https";
// import fs from "fs";
import dotenv from "dotenv";
import Router from "./Config/Router.js"

const PORT = process.env.PORT || 8080;
dotenv.config();


let router = new Router();


//http
const server = http.createServer(async (req, res) => {
    //라우터
    try{
        // Router(req, res);
        router.Routing(req,res);

    }catch(e){
        console.log(e);
        res.writeHead(500);
        res.end("Internel Servel Error");
    }

});

//https
// const server = https.createServer({
//     cert: fs.readFileSync('도메인 인증서 경로'),
//     key: fs.readFileSync('도메인 비밀키 경로'),
// }, (req, res) => {
//     try {
//         Route(req, res);

//     } catch (e) {
//         console.log(e);
//         res.writeHead(500);
//         res.end("Internel Servel Error");
//     }
// });


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

