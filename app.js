const http = require('http');

const server = http.createServer((req , res) => {
    //req is a gaint object that have so many properties
   // console.log(req) // req has url property that get the url of the webpage
    if(req.url === '/') {// '/' means the home page or the main index page
        // res.write();
        res.end("Welcome to home page")
    }
    // res.write('Welcome to our home page ')
    // res.end();

    else if(req.url === '/about'){
        // res.write("This is about page");
        res.end ("This is about page");
    }
});

server.listen(5000, () => console.log("Server Running on Port 5000")) //we can give a callback function here in listen 
