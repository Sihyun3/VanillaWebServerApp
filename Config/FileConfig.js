import fs from "fs";


export default async function FileConfig(fileName,res) {
    let data;
    const filePath = process.env.imagePath;
    let path = filePath + fileName;
    const readStream = fs.createReadStream(path,{ highWaterMark: 1048576 });
    readStream.on('data', (chuck) => {
        res.write(chuck);
    });

    readStream.on('end', () => {
        res.end();
    });

    readStream.on('error', (err) => {
        console.log(err);
    });
}