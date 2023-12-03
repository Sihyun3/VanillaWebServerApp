import Controller from "../controller/Controller.js";

export default function Route(req,res) {

    const controller = new Controller(req,res);

    console.log("요청 url >>>>>>>>>>>>>  " + req.url);

    let reqUrl = req.url.split('/')
    reqUrl.shift();

    const reqMethod = req.method;

    let routing = [
        {
            "url":"/api/test/{param1}/{param2}",
            "paramLength":2,
            "method":"GET",
            "controller":controller.main()
        },
        {
            "url":"/api/{param1}/test/{param2}",
            "paramLength":2,
            "method":"GET",
            "controller":controller.main()
        }
    ]
    this.ReturnRoutingTable = ()=>{
        return routing;
    }
    // Router(routing, reqUrl, reqMethod);
}




