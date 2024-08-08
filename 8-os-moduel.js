//os 
//path
//fs
//http

//os module 
const os = require ('os');// this is the way to import a build in function 

//info about the current user 
const user = os.userInfo();
console.log(user);
//show the system uptime on seconds
console.log(`The uptime of the user is ${os.uptime()}`);

const currestOs = {
    name : os.type(), // type of the 
    release : os.release(),
    totalmem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currestOs);