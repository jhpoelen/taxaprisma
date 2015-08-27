var taxaprisma = require('../');
var test = require('tape');

test('color for mammals', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Animalia Mammalia Homo Sapiens'), '#1E90FF');
});

test('default color', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Donald duckus'), '#000000');
});

test('default color on null path', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor(null), '#000000');
});