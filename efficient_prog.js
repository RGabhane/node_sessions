const http =require("http");
const fs =require("fs");

//const printAFruit=(fruit)=>{
  //  console.log(`printing fruit -${JSON.stringify(fruit)}`);

//};
const server = http.createServer((req,res)=>{
    const pathName=req.url;
    console.log("pathName is ",pathName);
    if(pathName ==="/fruits")
    {
        res.writeHead(200,{"Content-Type":"application/json"});
        jsonData.map((fruit) =>printAFruit(fruit));
        res.
    }
})
jsonData.map((fruit)=>)