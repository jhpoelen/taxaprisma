var taxaprisma = require('../');
var test = require('tape');

test('image for mammals', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageFor('Animalia Mammalia Homo Sapiens'), 'http://phylopic.org/assets/images/submissions/e5b0cde8-beab-48dc-b77c-d48b16c6a05e.thumb.png');
});

test('image for birds', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageFor('Animalia Aves Larus'), 'http://phylopic.org/assets/images/submissions/ee764929-c865-44f6-b5db-b4e7d5693d1a.thumb.png');
});

test('default image', function(t) {
    t.plan(1);
    t.notOk(taxaprisma.imageFor('Donald duckus'));
});
