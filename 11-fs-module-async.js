const {readFile , writeFile} = require('fs');

//here is used as callback 
//this is non-blocking process
readFile('./content/first.txt' , (err,result) => {
if(err){
    console.log(err);
    return;
}
console.log(result);
});
// when we console like this we dont get the result we get a buffer
//if we dont provide that utf-8 we will get the buffer value for change that we have to give the utf-8 at the middle of the cb and the filepath as string
readFile('./content/first.txt' , 'utf-8', (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result
    readFile('./content/second.txt', 'utf-8', (err , result) =>{
        if(err){
            console.log(err);
            return ;
        }
        const second = result;
        console.log(result);
        writeFile('./content/result-async.txt', 
            `this is the async result : ${first} and ${second} OKAY!!!!!!  `, // here we can add the flag also if in case that must be the third  argument
        //  {flag : 'a'},
            (err , result) => {
                if(err){
                    console.log(err);
                    return  ;
                };
                console.log("File created Successfully");
                // console.log(result); // if we result will not show because it is async and result will not shows
            }
        )
    })
    });






