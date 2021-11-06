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
const db = require('json-simplified');
db.set('versionsDatabase', 'version', '1.0');
console.log(db.get('versionsDatabase', 'version')); //1.0
```

# Simple Usage
```
db.set('DatabaseName', 'Field/Path', 'Data');
db.get('DatabaseName', 'Field/Path');
```

# Settings Multiple Values
```
db.set('users', 'Finbar', {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'});
console.log(db.get('users', 'Finbar')); //{name: 'Finbar', gender: 'male', occupation: 'freelance programmer'};
```

# Settings And Getting Paths
```
db.set('users', 'Finbar.name', 'Finbar');
db.set('users', 'Finbar.gender', 'Male');
db.set('users', 'Finbar.occupation', 'freelance programmer');
console.log(db.get('users', 'Finbar')); //{name: 'Finbar', gender: 'male', occupation: 'freelance programmer'};
```
