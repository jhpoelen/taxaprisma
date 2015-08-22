var taxaprisma = require('../');
var test = require('tape');

test('image for mammals', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageFor('Animalia Mammalia Homo Sapiens'), 'http://phylopic.org/assets/images/submissions/e5b0cde8-beab-48dc-b77c-d48b16c6a05e.thumb.png');
});

test('image data url for mammals', function(t) {
    t.plan(1);
    t.ok(taxaprisma.imageDataUrlFor('Animalia Mammalia Homo Sapiens').match(/^data:image\/png;base64,/));
});

test('default image', function(t) {
    t.plan(1);
    t.notOk(taxaprisma.imageFor('Donald duckus'));
});

test('default image', function(t) {
    t.plan(1);
    t.notOk(taxaprisma.imageDataUrlFor('Donald duckus'));
});

