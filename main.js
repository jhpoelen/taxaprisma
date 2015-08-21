var taxa = [
    { name: 'Fungi', color: '#F52887', image: { id: 'afd875a3-815f-443b-9b93-3e5bedd9a7a3', ns: 'phylopic' } },
    { name: 'Plantae', color: '#73AC13', image: { id: 'b6400f39-345a-4711-ab4f-92fd4e22cb1a', ns: 'phylopic' } },
    { name: 'Insecta', color: '#FF4500', image: { id: '6c6c5073-2383-40fb-9824-c6a8ed27badc', ns: 'phylopic' } },
    { name: 'Mollusca', color: '#FF4500', image: { id: '1eb7433a-4943-4220-aa66-a658b272f23c', ns: 'phylopic' } },
    { name: 'Arachnida', color: '#FF4500', image: { id: '44fa6ec0-6bad-42bd-ae91-48d00c9b035c', ns: 'phylopic' } },
    { name: 'Aves', color: '#1E90FF', image: { id: 'ee764929-c865-44f6-b5db-b4e7d5693d1a', ns: 'phylopic' } },
    { name: 'Reptilia', color: '#FF4500', image: { id: 'dffda000-77cb-4251-b837-0cd2ab21ed5b', ns: 'phylopic' } },
    { name: 'Actinopterygii', color: '#FF4500', image: { id: '90e1c28f-dd6f-4b1c-b263-91d208610458', ns: 'phylopic' } },
    { name: 'Amphibia', color: '#FF4500', image: { id: '90e1c28f-dd6f-4b1c-b263-91d208610458', ns: 'phylopic' } },
    { name: 'Mammalia', color: '#FF4500', image: { id: 'e5b0cde8-beab-48dc-b77c-d48b16c6a05e', ns: 'phylopic' } }
];

var defaultColor = '#000000';

var taxaprisma = {};

module.exports = taxaprisma;


function matchesTaxon(taxonPath) {
    return taxa.filter(function (obj) {
        return taxonPath.match(obj.name);
    });
}
taxaprisma.colorFor = function (taxonPath) {
    var matches = matchesTaxon(taxonPath);
    var color = defaultColor;
    if (matches.length > 0) {
        color = matches[0].color;
    }
    return color;
}

taxaprisma.imageFor = function (taxonPath) {
    var matches = matchesTaxon(taxonPath);
    var img = null;
    if (matches.length > 0) {
        img = 'http://phylopic.org/assets/images/submissions/' + matches[0].image.id + '.thumb.png';
    }
    return img;
}

