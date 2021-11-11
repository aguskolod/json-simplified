const fs = require('fs');
module.exports = function(databaseClass, path) {
    if(!databaseClass.name) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');
    const registry = databaseClass?.['registry']?.toString() ? databaseClass?.['registry'].toString() : 'db';

    if (!fs.existsSync(`./${databaseClass.registry}`)) fs.mkdirSync(`./${databaseClass.registry}`);
    if(!fs.existsSync(`./${databaseClass.registry}/${databaseClass.name}.db.json`)) fs.writeFileSync(`./${databaseClass.registry}/${databaseClass.name}.db.json`, '{}');
    if(fs.readFileSync(`./${databaseClass.registry}/${databaseClass.name}.db.json`).toString().length <= 0) fs.writeFileSync(`./${databaseClass.registry}/${databaseClass.name}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./${databaseClass.registry}/${databaseClass.name}.db.json`).toString());
    const fields = path.split('.');
    let field = json;
    for(let i = 0; i < fields.length - 1; i++){
        if(!field[fields[i]]) field[fields[i]] = {};
        field = field[fields[i]];
    }
    delete field[fields.pop()];
    fs.writeFileSync(`./${databaseClass.registry}/${databaseClass.name}.db.json`, JSON.stringify(json));
}