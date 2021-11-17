const fs = require('fs');
module.exports = function(databaseClass, path, data, options) {
    if(!databaseClass?.name) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');
    if(!data) throw new TypeError('No data provided.');

    const overwriteOld = options?.['overwriteOld'] ? options?.['overwriteOld'] : false;
    const registry = databaseClass?.['registry']?.toString() ? databaseClass?.['registry'].toString() : 'db';
    const database = databaseClass.name;

    if (!fs.existsSync(`./${registry}`)) fs.mkdirSync(`./${registry}`);
    if(!fs.existsSync(`./${registry}/${database}.db.json`)) fs.writeFileSync(`./${registry}/${database}.db.json`, '{}');
    if(fs.readFileSync(`./${registry}/${database}.db.json`).toString().length <= 0) fs.writeFileSync(`./${registry}/${database}.db.json`, '{}');

    if(overwriteOld) fs.writeFileSync(`./${registry}/${database}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./${registry}/${database}.db.json`).toString());
    const fields = path.split('.');
    let field = json;
    for(let i = 1; i < fields.length; i++){
        if(!field[fields[i]]) field[fields[i]] = {};
        field = field[fields[i]];
    }
    field[fields.pop()] = data;
    fs.writeFileSync(`./${registry}/${database}.db.json`, JSON.stringify(json));
}