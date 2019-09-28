import axios from 'axios';

const container = document.getElementById('container');
const configElement = document.getElementById('config');
const isMML = configElement.dataset.mml === 'true';

function parseResponse(response) {
    const { data } = response;
    const mml = data
        .match(/```xml\n.+\n```/g)
        .map(example => example.replace('```xml\n', ''))
        .map(example => example.replace('\n```', ''));
    const tex = data
        .match(/```\n.+\n```/g)
        .map(example => example.replace('```\n', '\\('))
        .map(example => example.replace('\n```', '\\)'));

    return {
        mml,
        tex
    };
}

axios
    .get('https://raw.githubusercontent.com/fknussel/mathml-latex-examples/master/README.md')
    .then(parseResponse)
    .then(data => {
        const { mml, tex } = data;
        const collection = isMML ? mml : tex;

        collection.forEach(formula => {
            const element = document.createElement('div');
            const separation = document.createElement('hr');

            separation.classList.add('separation');
            element.innerHTML = formula;
            element.appendChild(separation);
            container.appendChild(element);
        });
    });

