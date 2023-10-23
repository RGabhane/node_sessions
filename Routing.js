const http = require("http");
const serever =http.createServer((req,res) =>
{
    //console.log(req.url);
    if(req.url==="/")
    {res.end("Hello from the home sides");
    }
    else if(req.url ==="/about")
    {
        res.end("Hello from the About side");
    }
    else{
        res.end()
    }
    
});
serever.listen(8000,"127.0.01",()=>{
console.log("Listeningto the port no 8000");
});