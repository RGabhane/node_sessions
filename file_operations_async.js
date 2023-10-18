const fs = require('fs');
/*fs.readFile("course.txt","utf-8",function myCallback(err,data) 
{
    console.log(`print data when is ready ${data}\n`);
    
}
);
*/
/*fs.readFile("course.txt","utf-8",(err,data) =>
{console.log(`print data when data is ready \n ${data}\n`);
}
);*/
fs.readFile('course.txt','utf-8',(err,data)=>

{
    console.log(`Print course file ${data}\n`);
    fs.readFile("course_append.txt","utf-8",(err,appendData)=>
    {console.log(`print appended data ${appendData}\n`);
    fs.writeFile("course_output.txt",`${data}\n${appendData}`,"utf-8",(err)=>{
        console.log("Writing to file is done");
    }
    );
});
});
console.log(`\nMeanwhile lets continue with other task\n`);