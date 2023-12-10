import fs from "fs/promises";

export default  function FileDatabase() {
    const filePath = process.env.filePath;

    this.readFile = async (fileName) => {
        let path = filePath + fileName; 
        let file = await fs.readFile(path);
        return JSON.parse(file.toString());
    }

    this.saveFile = async (fileName, saveData) =>{
        let path = filePath + fileName; 
        let data = JSON.stringify(saveData);
        await fs.writeFile(path,data);
    }
}
