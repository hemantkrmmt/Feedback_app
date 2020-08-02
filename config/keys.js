//keys.js 

if(process.env.NODE_enV==='production'){
    //we are in production - return prod set of keys
    module.exports = require('./prod');
}
else{
    //we are in development - return dev set of keys
   module.exports = require('./dev');
}