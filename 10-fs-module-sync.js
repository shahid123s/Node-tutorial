//fs in synchrounsly
// this is blocking the code 
const fs = require('fs');
const readFile = fs.readFileSync;
const writeFile = fs.writeFileSync;

//or we can destructor when importing likr 
// const {readFileSunc , writeFileSync} = require('fs');

const first = readFile('./content/first.txt','utf-8');
const second = readFile('./content/second.txt','utf-8');

console.log(first , second) ;

//ivda file ondel ath override cheyyum ilel ath puthiya create cheyyum athan writeFile 
writeFile('./content/sync.text' , `hello this is the tempalte ${first} and  ${second}`);


//this override that file 
writeFile('./content/sync.text' , 
    `aahhhh`,
    {flag : 'a'})

// in write file the third argument is a object that object property is flag
//if we give flage it update the file 
// here a is stands for append that means if the file exist update the file if it is not exist create a file that i that 'a' refers in that flag

