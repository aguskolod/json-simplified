const fs = require('fs');
exports.set = function(name, path, data) {
    if(!name) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');
    if(!data) throw new TypeError('No data provided.');

    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    if(!fs.existsSync(`./db/${name}.db.json`)) fs.writeFileSync(`./db/${name}.db.json`, '{}');
    if(fs.readFileSync(`./db/${name}.db.json`).toString().length <= 0) fs.writeFileSync(`./db/${name}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./db/${name}.db.json`).toString());
    const fields = path.split('.');
    let activeJson = json;
    for(let i = 0; i < fields.length - 1; i++){
        if(!activeJson[fields[i]]) activeJson[fields[i]] = {};
        activeJson = activeJson[fields[i]];
    }
    activeJson[fields.pop()] = data;
    fs.writeFileSync(`./db/${name}.db.json`, JSON.stringify(json));
}

exports.get = function(name, path){
    if(!name) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');

    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    if(!fs.existsSync(`./db/${name}.db.json`)) fs.writeFileSync(`./db/${name}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./db/${name}.db.json`).toString());
    const fields = path.split('.');
    let activeJson = json;
    for (let i = 0; i < fields.length; i++) activeJson = activeJson[fields[i]];
    return activeJson;
}