//Module
//common js is a library 
//In Common JS  , every file is Module (by default)

// Modules - Encapsualted Code (Only share whant we want  )

 
//iimporting the modules 
const say = require('./5-utilities');
const names = require('./4-name');

const {john , shahid } = names;
//importing the module itself when the execution place here the module is fully run in this line 
require('./7-mind-grenade')

say('susan');
say(shahid);
say(john);


// 6-alternateSyntax ile example  
const ahi = require('./6-alternateSyntax');
console.log(ahi.items);



