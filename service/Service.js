import Mapper from '../mapper/Mapper.js'

export default function Service () {
    
    const mapper = new Mapper();


    this.main = ()=>{
        let data = mapper.main();
       return data;
    }

}