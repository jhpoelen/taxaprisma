# taxaprisma
Colors and silhouettes images for taxa.

[![Build Status](https://travis-ci.org/jhpoelen/taxaprisma.svg?branch=master)](https://travis-ci.org/jhpoelen/taxaprisma)

## why?
To make it easier to see what kind of higher order taxonomic group a taxon belongs to (e.g. mammal, insect).

## install
```npm install taxaprisma --save```

## usage
### colorFor
Returns color for taxon path.

```javascript
var taxaprisma = require('taxaprisma');
var htmlHexColorCode = taxaprisma.colorFor('Animalia Mammalia Homo sapiens');
// ---> '#FF4500'
 ```

### imageFor
Returns applicable image url for taxon path.

```javascript
var taxaprisma = require('taxaprisma');
var imageUrl = taxaprisma.imageFor('Animalia Mammalia Homo sapiens');
// ---> 'http://phylopic.org/assets/images/submissions/e5b0cde8-beab-48dc-b77c-d48b16c6a05e.thumb.png'
```
### imageDataUrlFor
Returns inlined image in data url.

```javascript
var taxaprisma = require('taxaprisma');
var imageUrl = taxaprisma.imageDataUrlFor('Animalia Mammalia Homo sapiens');
// ---> 'data:image/png;base64,...'
```

### imageLicenseFor
Returns the license text for image.
```javascript
var taxaprisma = require('taxaprisma');
var licenseText = taxaprisma.imageLicenseFor('Animalia Mollusca Polyplacophora Neoloricata')
// ---> 'by Marcello under http://creativecommons.org/licenses/by/3.0/'
```
Many images were published under cc0 (http://creativecommons.org/publicdomain/zero/1.0/) .

### css
A css style sheet is also available: [taxaprisma.css](./taxaprisma.css).

## anything missing?
Please open [an issue](../../issues/new) or submit a pull request.

## colors and silhouettes
taxon | color | color code | silhouettes
--- | --- | --- | --- 
Fungi | ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorFungi.svg) | #F52887 | ![image](http://phylopic.org/assets/images/submissions/afd875a3-815f-443b-9b93-3e5bedd9a7a3.thumb.png)
Plantae| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorPlantae.svg)| #73AC13|  ![image](http://phylopic.org/assets/images/submissions/b6400f39-345a-4711-ab4f-92fd4e22cb1a.thumb.png) 
Insecta| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorInsecta.svg) | #FF4500| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/png/insecta.png)
Mollusca| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorMollusca.svg) | #FF4500| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/png/mollusca.png)
Arachnida| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorArachnida.svg) | #FF4500 | ![image](http://phylopic.org/assets/images/submissions/44fa6ec0-6bad-42bd-ae91-48d00c9b035c.thumb.png )
Aves| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorAves.svg) | #1E90FF | ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/png/aves.png)
Reptilia| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorReptilia.svg) | #1E90FF | ![image](http://phylopic.org/assets/images/submissions/dffda000-77cb-4251-b837-0cd2ab21ed5b.thumb.png)
Actinopterygii| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorActinopterygii.svg) | #1E90FF | ![image](http://phylopic.org/assets/images/submissions/90e1c28f-dd6f-4b1c-b263-91d208610458.thumb.png)
Elasmobranchii| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorElasmobranchii.svg) | #1E90FF | ![image](http://phylopic.org/assets/images/submissions/993d4e41-51b3-4c59-a4ad-b3dbd482968e.thumb.png)
Amphibia| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorAmphibia.svg) | #1E90FF | ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/png/amphibia.png)
Mammalia| ![image](https://rawgit.com/jhpoelen/taxaprisma/master/assets/colorMammalia.svg)| #1E90FF | ![image](http://phylopic.org/assets/images/submissions/e5b0cde8-beab-48dc-b77c-d48b16c6a05e.thumb.png)

## origins
colors were inspired by [iNaturalist](http://inaturalist.org)

images obtained through [PhiloPic](http://phylopic.org)

