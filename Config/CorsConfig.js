export default function CorsConfig(res){
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Origin","Content-Type");
    res.setHeader("Access-Control-Allow-Methods","POST,GET,DELETE,PUT");
}       