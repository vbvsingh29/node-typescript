import http from 'http';

http.createServer(
    (req,res)=>{
        res.end('Hello Wdsdsorl3');
    }
)
.listen(5001,()=>{console.log("Servdsder started")})