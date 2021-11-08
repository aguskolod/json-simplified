const fs = require('fs');
module.exports = function(database, path, options){
    if(!database) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');

    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    if(!fs.existsSync(`./db/${database}.db.json`)) fs.writeFileSync(`./db/${database}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./db/${database}.db.json`).toString());
    const fields = path.split('.');
    let field = json;
    for (let i = 0; i < fields.length; i++){
        if(!field?.[fields[i]]) field = {};
        field = field[fields[i]];
    }
    return field;
}