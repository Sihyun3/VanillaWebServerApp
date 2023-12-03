export default function Router(routing, reqUrl, reqMethod) {

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


    //
    // const urlArray = [];
    // //
    // const urlParam = [];

    // // 정규 표현식
    // const regex = /\{.*\}/;

    // reqUrl.forEach(element => {
    //     if(!regex.test(element)){
    //         urlArray.push(element);
    //     }else if(regex.test(element)){
    //         urlParam.push(element);
    //     }
    // });

    // console.log(urlArray);
    // console.log(urlParam);



    routing.forEach(element => {
        element.url
    });

    // routing.controller;
    //url 입력 url





    if (reqMethod === method) {

    }

}


// export default function Router(routing, reqUrl, reqMethod) {

//     //
//     // const urlArray = [];
//     // //
//     // const urlParam = [];

//     // // 정규 표현식
//     // const regex = /\{.*\}/;

//     // reqUrl.forEach(element => {
//     //     if(!regex.test(element)){
//     //         urlArray.push(element);
//     //     }else if(regex.test(element)){
//     //         urlParam.push(element);
//     //     }
//     // });

//     // console.log(urlArray);
//     // console.log(urlParam);



//     routing.forEach(element => {
//         element.url
//     });

//     // routing.controller;
//     //url 입력 url





//     if (reqMethod === method) {

//     }

// }