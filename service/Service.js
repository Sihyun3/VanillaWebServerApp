import Mapper from '../mapper/Mapper.js'

export default function Service() {

    const mapper = new Mapper();


    this.main = () => {
        let data = mapper.main();
        return data;
    }

    this.getData = async () => {
        let data = await mapper.getData('board.json');
        return JSON.stringify(data);
    }

    this.editData = async (body) =>{
        let data = await mapper.getData('board.json');
        data.push(body);
        await mapper.setData('board.json',data)
    }

    this.detail = async (idx) =>{
        let data = await mapper.getData('board.json');
        data = data[idx - 1];
        return JSON.stringify(data);
    }
}