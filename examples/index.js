'use strict';

var ceil = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*100 - 50;
	console.log( 'Value: %d. Ceiled: %d.', x, ceil( x ) );
}
