# pruno-del

A lightweight module that deletes files and directories.

## Usage

```js
"use strict";

var pruno = require('pruno');

pruno.plugins(function(mix) {
    mix
      .configure({ dir: __dirname + '/config' })
      .del({ dirs: ['./dist/*', './tmp/*'] });
});
```
