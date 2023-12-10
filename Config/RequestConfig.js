export default async function RequestConfig(req){
    let body = ''
    await req.on('data', (data) => {
        data = data.toString();
        body = data;
    });
    if(req.headers['content-type'] == 'application/json'){
        req.body = JSON.parse(body);
    }else{
        req.body = body;
    }
}