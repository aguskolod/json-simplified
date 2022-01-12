# json-simplified
<img src="https://img.shields.io/npm/v/json-simplified?style=for-the-badge">

Simple JSON Database

Created By: OneAndonlyFinbar<br>
Discord: Finbar#0001<br>
Email: finbar@finbar.xyz<br>
Documentation: https://jsonsimplified.finbar.xyz/ <br>

<hr>

# Quick Start
```
const { Database } = require('json-simplified');
const db = new Database('versionsDatabase');
db.set('version', '1.0');
// Returns promise
db.get('version') // 1.0
```

# Simple Usage
```
const db = new Database('DatabaseName', {DatabaseOptions});
await db.set('Field/Path', 'Data');
await db.get('Field/Path'); // Data

// Using Field Names
await db.set('latestVersion', '1');
await db.get('latestVersion'); // 1

// Using JSON Paths
await db.set('versions.latest', '1');
await db.get('versions.latest'); // 1

// Delete data using field name
await db.delete('latestVersion');

// Delete Data Using JSON Path
await db.delete('versions.latest');

// Destroy database
await db.destroy();
```

# Setting Multiple Values
```
db.set('Finbar', {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'});
db.get('users', 'Finbar'); // {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'}
```

# Set And Get From JSON Path
```
db.set('Finbar.name', 'Finbar');
db.set('Finbar.gender', 'Male');
db.set('Finbar.occupation', 'freelance programmer');
db.get('Finbar'); // {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'}
db.get('users', 'Finbar.name'); // Finbar
```
# Database Options

| Option | Type | Description |
| ------ | ---- | ----------- |
| overwriteOld | boolean | Create a new database file, whether or not one exists.
| registry | string | Registry/directory for the database files to be placed in.
