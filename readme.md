# Fork by [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) diff 1024

> Convert bytes to a human readable string: `1337` → `1.31 kB`

Useful for displaying file sizes for humans.

*Note that it uses base-1024 (eg. kibibyte).  
[Read about the difference between kilobyte and kibibyte.](http://pacoup.com/2009/05/26/kb-kb-kib-whats-up-with-that/)*


## Install

```
$ npm install --save pretty-byte
```


## Usage

```js
const prettyByte = require('pretty-byte');

prettyByte(1337);
//=> '1.31 kB'

prettyByte(100);
//=> '100 B'
```

## License

MIT
