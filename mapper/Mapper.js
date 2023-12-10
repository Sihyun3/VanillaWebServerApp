import db from '../database/Board.js';
import FileDatabase from '../Config/FileDatabase.js'


export default function Mapper() {

    const fileDatabase = new FileDatabase();

    this.main = () => {
        let data = JSON.stringify(db);
        return data;
    }

    this.getData = async (fileName) => {
        let data = await fileDatabase.readFile(fileName);
        return data;
    }

    this.setData = async (fileName,data) => {
        await fileDatabase.saveFile(fileName,data);
    }
};