const fs=require("fs");
const inputText =fs.readFileSync("course.txt","utf-8");
console.log("Printing the file",inputText);

const outputTest =`This is something which we already read:${inputText}`;

fs.writeFileSync("course.text",outputTest);
console.log("file written now");
