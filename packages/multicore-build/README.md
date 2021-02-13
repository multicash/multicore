# Multicore Build

**A helper to add tasks to gulp.**

## Getting started

Install with:

```sh
npm install multicore-build
```

And use and require in your gulp file:

```javascript
var gulp = require('gulp');
var multicoreTasks = require('multicore-build');

multicoreTasks('submodule');
gulp.task('default', ['lint', 'test', 'browser', 'coverage']);
```

### Notes

- There's no default task to allow for each submodule to set up their own configuration
- If the module is node-only, avoid adding the browser tasks with:

```javascript
var multicoreTasks = require('multicore-build');
multicoreTasks('submodule', {skipBrowsers: true});
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/multicore/blob/master/Contributing.md) on the main multicore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/multicore/blob/master/LICENSE).

Copyright 2013-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
