const parser = require('xml-parser');
const fs = require('fs');

const library = [];
const whitelistedKeys = [
    'uuidString',
    'type',
    'title',
    'coverImageLargeURLString'
];

const xml = fs.readFileSync('library.xml', 'utf8');

if (!xml) {
    console.log('No library.xml found, exiting...');
    process.exit();
}

const data = parser(xml);
let dictionaries = data.root.children[0].children;

dictionaries.forEach(dictionary => {
    let currentProduct = {};
    let currentKey;

    dictionary.children.forEach(data => {
        if (data.name === 'key' && whitelistedKeys.indexOf(data.content) !== -1)
            currentKey = data.content;
        else if (currentKey && data.content) {
            switch (data.name) {
                case 'integer':
                    data.content = parseInt(data.content, 10);
                    break;

                case 'real':
                    data.content = parseFloat(data.content);
                    break;

                case 'date':
                    data.content = new Date(data.content);
                    break;
            }

            if (data.content) currentProduct[currentKey] = data.content;
        }

        if (data.name !== 'key') currentKey = null;
    });

    library.push(currentProduct);
});

library.sort(
    (productA, productB) =>
        productA.title.toLowerCase() > productB.title.toLowerCase() ? 1 : -1
);

fs.writeFile('./src/javascript/library.json', JSON.stringify(library), err => {
    if (err) console.err(err);
    else
        console.log(
            'library.json file written with ' + library.length + ' products'
        );
});
