import testCases from './test-cases';

const container = document.querySelector('#container');

testCases.forEach((mathML, index) => {
    const element = document.createElement('div');
    const separation = document.createElement('hr');

    element.id = `test-case-${index + 1}`;
    element.innerHTML = mathML;
    element.appendChild(separation);
    container.appendChild(element);
});
