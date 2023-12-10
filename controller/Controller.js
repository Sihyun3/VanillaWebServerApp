import Service from '../service/Service.js'
import FileConfig from '../Config/FileConfig.js';

export default function Controller(req, res) {

    const service = new Service();

    this.main = (param1, parma2) => {
        //데이터 가져오기
        let data = service.main();

        //response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response

        res.write(data);
        //end the response
        res.end();
    }
    this.image = async (imageName) => {
        let splitImage = imageName.split('.')
        res.writeHead(200, { "Content-Type":"image"+splitImage[1] })
        FileConfig(imageName,res);
    }
    this.download = async (fileName) => {
        res.setHeader("Content-Disposition","attachment; filename=\"" + fileName + "\"")
        res.writeHead(200, { "Content-Type":"application/octet-stream" })
        FileConfig(fileName,res);
    }
    this.getBoard = async () => {
        let data = await service.getData();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
    }

    this.edit = async () => {
        let body = req.body;
        await service.editData(body);
        res.writeHead(200);
        res.end();
    }
    this.detail = async (idx) => {
        let data = await service.detail(idx);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
    }
    this.pageNotFound = () => {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }

};