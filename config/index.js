

if(process.env.NODE_ENV === 'production'){
    module.exports = {
        host: process.env.host,
        dbUri: process.env.dbUri
    }
}
else{
    module.exports = require('../development.json');
}