export default function Controller( req,res) {

    this.main = () => {
        //response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        res.write("Hi there, This is a Vanilla Node.js API");
        //end the response
        res.end();
    }
    this.internalServerError = () =>{
        res.writeHead(500,{ "Content-Type": "application/json" })
    }
    this.pageNotFound = () =>{
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
    this.error = () =>{
        test();
    }
};