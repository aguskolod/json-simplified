const fs = require('fs');
module.exports = async function(databaseClass, path, options){
    if(!databaseClass?.name) throw new TypeError('No database name provided.');
    if(!path) throw new TypeError('No data path provided.');
    const registry = databaseClass?.['registry']?.toString() ? databaseClass?.['registry'].toString() : 'db';

    if (!fs.existsSync(`./${registry}`)) fs.mkdirSync(`./${registry}`);
    if(!fs.existsSync(`./${registry}/${databaseClass.name}.db.json`)) fs.writeFileSync(`./${registry}/${databaseClass.name}.db.json`, '{}');

    let json = JSON.parse(fs.readFileSync(`./${registry}/${databaseClass.name}.db.json`).toString());
    const fields = path.split('.');
    let field = json;
    for (let i = 0; i < fields.length; i++){
        if(!field?.[fields[i]]) field = {};
        field = field[fields[i]];
    }
    return field;
}