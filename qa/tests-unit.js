/**
 * Created by Jonathan on 9/15/2016.
 */
var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;
suite('Fortune cookie tests', function(){
    test('getFortune() should return a fortune', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
});