import Controller from "../controller/Controller.js";

export default function Route(req, res) {

    // const controller = new Controller();
    let routingTable = [
        {
            "url": "/api",
            "method": "GET",
            "controller": "getBoard"
        },
        {
            "url":"/",
            "method":"GET",
            "controller":"main"
        },
        {
            "url":"/api/edit",
            "method":"POST",
            "controller":"edit"
        },
        {
            "url":"/api/{idx}",
            "method":"GET",
            "controller":"detail"
        },
        {
            "url":"/image/{imageName}",
            "method":"GET",
            "controller":"image"
        },
        {
            "url":"/download/{imageName}",
            "method":"GET",
            "controller":"download"
        },
        
    ]

    return routingTable;
}




