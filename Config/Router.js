import Controller from "../controller/Controller.js";
import Route from '../route/Route.js';
import RequestConfig from "./RequestConfig.js";
import CorsConfig from "./CorsConfig.js"

export default function Router(reqUrl, reqMethod) {
    let data = [];
    let defaultTable = Route();
    let tree = {};

    defaultTable.forEach((e, i) => {
        data[i] = [];
        if ("/" == e.url.charAt(e.url.length - 1) && e.url.length > 2) {
            e.url = e.url.slice(0, -1);
        }
        data[i] = e.url.split('/');
        data[i].push(e.method);
        data[i].push(e.controller);
        if (data[i][0] == '') {
            data[i].shift();
        }
    })
    for (let idx = 0; idx < data.length; idx++) {
        urlTree(data[idx], idx);
    }

    
    function urlTree(data, idx) {
        const param = "{param}";
        const regex = /\{.*\}/;
        let variTree = tree;
        for (let i = 0; i < data.length - 2; i++) {
            let element = data[i];
            if (regex.test(element)) {
                element = param;
            }
            if (!variTree[element]) {
                variTree[element] = {};
            }
            variTree = variTree[element];
        }

        try {
            if (variTree[data[data.length - 2]] != undefined) {
                let count = idx + 1;
                throw new Error(`라우팅 테이블 ${count} 번째에 중복 되는 url(${data})  존재 합니다.`);
            } else {
                variTree[data[data.length - 2]] = data[data.length - 1];
            }
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
    console.log(tree);

    this.Routing = async (req, res) => {
        
        CorsConfig(res);

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

        if (variTree[req.method]) {
            await RequestConfig(req);
            const funName = variTree[req.method];
            let controllerFun = controller[funName];
            controllerFun(...param);
        } else {
            return controller.pageNotFound();
        }
    }

}


