# json-simplified
<img src="https://img.shields.io/npm/v/json-simplified?style=for-the-badge">

Simple JSON Database

Created By: OneAndonlyFinbar<br>
Discord: Finbar#0001<br>
Email: finbar@finbar.xyz<br>
Website: https://finbar.xyz<br>

<hr>

# Quick Start

```
npm install json-simplified
```

```
const { Database } = require('json-simplified');
const db = new Database('versionsDatabase');
db.set('version', '1.0');
db.get('version') // 1.0
```

# Simple Usage
```
const db = new Database('DatabaseName')
db.set('Field/Path', 'Data');
db.get('Field/Path'); // Data
```

# Settings Multiple Values
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
