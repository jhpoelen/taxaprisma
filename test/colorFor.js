var taxaprisma = require('../');
var test = require('tape');

test('color for mammals', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Animalia Mammalia Homo Sapiens'), '#1E90FF');
});

test('color for plants', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Viridiplantae'), '#73AC13');
});

test('another color for plants', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Plantae'), '#73AC13');
});

test('default color', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor('Donald duckus'), '#000000');
});

test('default color on null path', function(t) {
    t.plan(1);
    t.equal(taxaprisma.colorFor(null), '#000000');
});
