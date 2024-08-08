const path = require('path');

//seprator property platform seperatorne kanikkum windows anel \ , macBook il anell / angana.... path ne sepreator cheyyunna value

//os nte seperator eeth aanenn kanikkum 

console.log(path.sep);

//path create avkkunn
const filePath = path.join('/content' ,'subfolder', 'test.txt');
// if we add tailing slashes it will remove 
//
console.log(filePath)
//basename last file nte name kittum
const base = path.basename(filePath);
console.log(base); //text.txt;

//resolve  -- it gives the absolute path of the file  resolve vangunnath oru sequence avum allel oru or path segment
const absolute = path.resolve(__dirname ,filePath); // this will print as like of the filepath because we give the / at the first that indicate the root file of the filepath abosolute path means from the root path to the base path. '/' indicate the root path if the / is not there then that gives from the User

 
console.log(absolute)

