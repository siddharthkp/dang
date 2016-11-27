const {test} = require('ava');
const markedup = require('../src/api.js');

test('is', t => {
    let input = markedup('{{#is name "sid"}}Hi sid{{else}}{{#is name "duck"}}Hi duck{{else}}Who are you?{{/is}}{{/is}}', {name: 'sid'});
    let output = '<p>Hi sid</p>\n';
    t.deepEqual(input, output);
});

test('else is', t => {
    let input = markedup('{{#is name "sid"}}Hi sid{{else}}{{#is name "duck"}}Hi duck{{else}}Who are you?{{/is}}{{/is}}', {name: 'duck'});
    let output = '<p>Hi duck</p>\n';
    t.deepEqual(input, output);
});

test('else', t => {
    let input = markedup('{{#is name "sid"}}hi sid{{else}}{{#is name "duck"}}hi duck{{else}}who are you?{{/is}}{{/is}}', {name: 'random'});
    let output = '<p>who are you?</p>\n';
    t.deepEqual(input, output);
});

