[action-image]: https://github.com/jandrey/vivaldi-location/workflows/CI/badge.svg
[action-url]: https://github.com/jandrey/vivaldi-location/actions?query=workflow%3ACI
[npm-image]: https://img.shields.io/npm/v/vivaldi-location.svg
[npm-url]: https://npmjs.org/package/vivaldi-location

# vivaldi-location [![workflow][action-image]][action-url] [![npm][npm-image]][npm-url]

> Approximates the current location of the Vivaldi browser across platforms.

# Usage

**Via Node.js:**

```js
// Returns the path to vivaldi as a string.
const vivaldiLocation = require('vivaldi-location')

console.log(vivaldiLocation())
// /Applications/Vivaldi.app/Contents/MacOS/Vivaldi
```

**Via CLI:**

```bash
> vivaldi-location
# /Applications/Vivaldi.app/Contents/MacOS/Vivaldi
```

Open vivaldi (remember to use quotes as vivaldi's path usually has spaces in it):

```bash
> "`vivaldi-location`"
```

## License

MIT (c) Jandrey Oliveira.
