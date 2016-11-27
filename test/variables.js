const {test} = require('ava');
const markedup = require('../src/api.js');

test('variables', t => {
    let input = markedup('Hello {{name}}', {name: 'sid'});
    let output = '<p>Hello sid</p>\n';
    t.deepEqual(input, output);
});
