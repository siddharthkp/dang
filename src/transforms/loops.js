const getData = require('../helpers/get-data');

let transform = (content, data) => {
    let re = /<(.*?)>/g;
    let matches = content.match(re);

    if (!matches) return content;

    matches = matches.filter(match => match.includes(' in '));
    for (let match of matches) {
        let phrase = match.substring(1).substring(0, match.length - 2);

        let listVariable = phrase.split(' in ')[1];
        let list = getData(data, listVariable);

        let repeatee = phrase.split(' in ')[0];
        let iterator = repeatee.split(' ').pop();

        iteratorVariable = iterator.split('.');
        iteratorVariable.shift();
        iteratorVariable = iteratorVariable.join('.');

        let loopOutput = [];
        for (let item of list) {
            let loopItem = repeatee.replace(iterator, getData(item, iteratorVariable));
            loopOutput.push(loopItem);
        }
        content = content.replace(match, loopOutput.join('\n'));
    }
    return content;
};

module.exports = transform;
