import db from '../database/Board.js';

export default function Mapper(){
    this.main = () => {
        let data = JSON.stringify(db);
        return data;
    }
};