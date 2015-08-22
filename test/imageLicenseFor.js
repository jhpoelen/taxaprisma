var taxaprisma = require('../');
var test = require('tape');

test('image license for mammals', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageLicenseFor('Animalia Mammalia Homo Sapiens'), 'http://creativecommons.org/publicdomain/zero/1.0/');
});

test('image license for mollusks', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageLicenseFor('Animalia Mollusca Polyplacophora Neoloricata'), 'by Marcello under http://creativecommons.org/licenses/by/3.0/');
});

test('default image', function(t) {
    t.plan(1);
    t.notOk(taxaprisma.imageLicenseFor('Donald duckus'));
});