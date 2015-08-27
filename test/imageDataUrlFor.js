var taxaprisma = require('../');
var test = require('tape');

var defaultImageDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';

test('default data url image', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageDataUrlFor('Donald duckus'), defaultImageDataUrl );
});

test('image data url for mammals', function(t) {
    t.plan(1);
    t.ok(taxaprisma.imageDataUrlFor('Animalia Mammalia Homo Sapiens').match(/^data:image\/png;base64,/));
});

test('image data url for aves', function(t) {
    t.plan(1);
    t.ok(taxaprisma.imageDataUrlFor('Animalia Aves Larus').match(/SuQmCC/));
});

test('image data url for null path', function(t) {
    t.plan(1);
    t.equal(taxaprisma.imageDataUrlFor(null), defaultImageDataUrl);
});