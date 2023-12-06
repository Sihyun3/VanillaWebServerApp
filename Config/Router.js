import Controller from "../controller/Controller.js";
import Route from '../route/Route.js';



export default function Router(reqUrl, reqMethod) {
    let defaultTable = Route();
    let tree = {};
    let data = [];
    defaultTable.forEach((e, i) => {
        data[i] = [];
        if ("/" == e.url.charAt(e.url.length - 1) && e.url.length > 2) {
            e.url = e.url.slice(0, -1);
        }
        data[i] = e.url.split('/');
        data[i].push(e.method);
        data[i].push(e.controller);
        data[i].shift();
    })
    data.forEach((element, i) => {
        const param = "{param}"
        let variTree = {};
        // if(element[0] == })
        const regex = /\{.*\}/;
        for (let i = 0; i < element.length - 2; i++) {
            if (regex.test(element[i])) {
                element[i] = param;
            }
        }
        let firstElement = element[0];
        if (tree[firstElement] == undefined) {
            tree[firstElement] = {}
        }
        variTree = tree[firstElement]
        if (variTree[element[1]]) {
            variTree = variTree[element[1]];
        } else {
            variTree[element[1]] = {};
        }
        variTree = tree[firstElement]
        for (let i = 2; i < element.length - 2; i++) {
            let now = element[i]
            let prev = element[i - 1];
            variTree = variTree[prev];
            if (variTree[now] == undefined) {
                variTree[now] = {};
            }
        }
        if (element.length > 3) {
            variTree = variTree[element[element.length - 3]];
        }
        try {
            if (variTree[element[element.length - 2]] == element[element.length - 1]) {
                let idx = i + 1;
                throw new Error(`라우팅 테이블 ${idx} 번째에 중복 되는 url(${element})  존재 합니다.`);
            }
        } catch (error) {
            console.error(error);
            process.exit(1);
        }

        variTree[element[element.length - 2]] = element[element.length - 1];

    });

    console.log(tree);






    this.Routing = (req, res) => {

        const controller = new Controller(req, res);
        let url = req.url.split('/');
        url.shift();
        console.log(url);
        let variTree = tree;
        let param = [];
        for (let i = 0; i < url.length; i++) {
            let e = url[i]
            if (variTree[e]) {
                variTree = variTree[e];
            } else if (variTree['{param}']) {
                variTree = variTree['{param}'];
                param.push(e);
            }
            else {
                return controller.pageNotFound();
            }
        }
        // console.log(variTree);

        if (variTree[req.method]) {
            const funName = variTree[req.method];
            let controllerFun = controller[funName];
            controllerFun(...param);
        } else {
            return controller.pageNotFound();
        }
        // console.log(variTree);
        // console.log(tree);

        // const myString = "이 문자열에는 {중괄호}가 포함되어 있습니다.";
        // const regex = /\{.*\}/;

        // if (regex.test(myString)) {


        // const funName = RoutingTable[0].controller;
        // let controllerFun = controller[funName];
        // controllerFun("1", "2");
    }




}


