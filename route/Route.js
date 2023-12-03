import Controller from "../controller/Controller.js";

export default function Route(req,res) {

    const controller = new Controller(req,res);

    console.log("요청 url >>>>>>>>>>>>>  " + req.url);

    if (req.url === "/api" && req.method === "GET") {
        controller.main();
    }else if(req.url === "/error" && req.method === "GET"){
        controller.error();
    }

    // If no route present
    else {
       controller.pageNotFound();
    }
}