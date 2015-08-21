var taxaprisma = require('../');
var test = require('tape');

test('color for mammals', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Animalia Mammalia Homo Sapiens'), '#FF4500');
});

test('default color', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Donald duckus'), '#000000');
});