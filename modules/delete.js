const fs = require('fs');
module.exports = function(database, path) {
    if(!database) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');

    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    if(!fs.existsSync(`./db/${database}.db.json`)) fs.writeFileSync(`./db/${database}.db.json`, '{}');
    if(fs.readFileSync(`./db/${database}.db.json`).toString().length <= 0) fs.writeFileSync(`./db/${database}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./db/${database}.db.json`).toString());
    const fields = path.split('.');
    let field = json;
    for(let i = 0; i < fields.length - 1; i++){
        if(!field[fields[i]]) field[fields[i]] = {};
        field = field[fields[i]];
    }
    delete field[fields.pop()];
    fs.writeFileSync(`./db/${database}.db.json`, JSON.stringify(json));
}