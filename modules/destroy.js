const fs = require('fs');
module.exports = function(databaseClass){
    const registry = databaseClass?.['registry']?.toString() ? databaseClass?.['registry'].toString() : 'db';
    if (!fs.existsSync(`./${registry}`)) return;
    if(!fs.existsSync(`./${registry}/${databaseClass.name}.db.json`)) return;
    try{
        fs.unlinkSync(`./${registry}/${databaseClass.name}.db.json`);
    }catch{}
}