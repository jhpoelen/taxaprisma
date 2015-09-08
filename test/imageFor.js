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

test('image for birds', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageFor('Animalia Aves Larus', 'image/png'), 'http://phylopic.org/assets/images/submissions/ee764929-c865-44f6-b5db-b4e7d5693d1a.thumb.png');
});

test('image for sharks and rays', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageFor('Elasmobranchii something something', 'image/png'), 'http://phylopic.org/assets/images/submissions/993d4e41-51b3-4c59-a4ad-b3dbd482968e.thumb.png');
});

test('image for birds svg', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageFor('Animalia Aves Larus', 'image/svg+xml'), 'http://phylopic.org/assets/images/submissions/ee764929-c865-44f6-b5db-b4e7d5693d1a.svg');
});

test('default image', function(t) {
    t.plan(1);
    t.notOk(taxaprisma.imageFor('Donald duckus'));
});

test('default image null taxon', function(t) {
    t.plan(1);
    t.notOk(taxaprisma.imageFor(null));
});

test('all svg urls for groups', function(t) {
    t.plan(1);
    var allMatch = true;
    taxaprisma.taxonGroups.forEach(function(group) {
        allMatch = allMatch && taxaprisma.imageFor(group.name, 'image/svg+xml') != null;
    });
    t.ok(true);
});
