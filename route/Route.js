import Controller from "../controller/Controller.js";

export default function Route(req, res) {

    // const controller = new Controller();
    let routingTable = [
        {
            "url": "/api/{test}/{param1}/{param2}",
            "method": "GET",
            "controller": "main"
        },
        {
            "url": "/api/{test1}/test/",
            "method": "GET",
            "controller": "test"
        },
        {
            "url":"/",
            "method":"GET",
            "controller":"main"
        },
        {
            "url":"/test/",
            "method":"GET",
            "controller":"main"
        },
        // {
        //     "url": "/json",
        //     "method": "GET",
        //     "controller": "main"
        // },
        // {
        //     "url": "/json",
        //     "method": "GET",
        //     "controller": "main"
        // },
    ]

    return routingTable;
}




