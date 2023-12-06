import Service from '../service/Service.js'

export default function Controller(req,res) {

    const service = new Service();

    this.main = (param1,parma2) => {
        //데이터 가져오기
        let data = service.main();

        //response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        
        res.write(data);
        //end the response
        res.end();
    }

    this.test = (param) => {
        res.writeHead(200);
        res.end(param);

    }

    this.pageNotFound = () =>{
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }

};