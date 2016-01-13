Ceil
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Rounds a numeric value toward positive infinity.


## Installation

``` bash
$ npm install math-ceil
```


## Usage

``` javascript
var ceil = require( 'math-ceil' );
```

#### ceil( x )

Rounds a `numeric` value toward positive infinity.

``` javascript
var val = ceil( -4.2 );
// returns -4

val = ceil( 9.99999 );
// returns 10

val = ceil( 0 );
// returns 0
```


## Examples

``` javascript
var ceil = require( 'math-ceil' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	console.log( 'Value: %d. Ceiled: %d.', x, ceil( x ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-ceil.svg
[npm-url]: https://npmjs.org/package/math-ceil

[build-image]: http://img.shields.io/travis/math-io/ceil/master.svg
[build-url]: https://travis-ci.org/math-io/ceil

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/ceil/master.svg
[coverage-url]: https://codecov.io/github/math-io/ceil?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/ceil.svg
[dependencies-url]: https://david-dm.org/math-io/ceil

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/ceil.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/ceil

[github-issues-image]: http://img.shields.io/github/issues/math-io/ceil.svg
[github-issues-url]: https://github.com/math-io/ceil/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
