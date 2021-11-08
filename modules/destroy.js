const fs = require('fs');
module.exports = function(database){
    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    if(!fs.existsSync(`./db/${database}.db.json`)) return;
    try{
        fs.unlinkSync(`./db/${database}.db.json`);
    }catch{}
}