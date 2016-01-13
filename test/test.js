'use strict';

// MODULES //

var test = require( 'tape' );
var ceil = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof ceil === 'function', 'main export is a function' );
	t.end();
});

test( 'the function returns the largest integer greater than or equal to a given number', function test( t ) {
	t.equal( ceil( -4.2 ), -4, 'equals -4' );
	t.equal( ceil( 9.99999 ), 10, 'equals 10' );
	t.equal( ceil( 0 ), 0, 'equals 0' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = ceil( NaN );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});

test( 'the function returns `+infinity` if provided a `+infinity`', function test( t ) {
	var val = ceil( Number.POSITIVE_INFINITY );
	t.equal( val, Number.POSITIVE_INFINITY, 'returns +infinity' );
	t.end();
});

test( 'the function returns `-infinity` if provided a `-infinity`', function test( t ) {
	var val = ceil( Number.NEGATIVE_INFINITY );
	t.equal( val, Number.NEGATIVE_INFINITY, 'returns -infinity' );
	t.end();
});
