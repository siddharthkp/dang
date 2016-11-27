const {test} = require('ava');
const markedup = require('../src/api.js');

test('variables', t => {
    let input = markedup('Hello {{user.name}}', {user: {name: 'sid'}});
    let output = '<p>Hello sid</p>\n';
    t.deepEqual(input, output);
});

test('loops', t => {
    let users = [
        {name: 'sid'},
        {name: 'duck'}
    ];
    let input = markedup('{{#users}}\n* {{name}}\n{{/users}}', {users});
    let output = '<ul>\n<li>sid</li>\n<li>duck</li>\n</ul>\n';
    t.deepEqual(input, output);
});

test('conditional', t => {
    let user = {name: 'sid'};
    let input = markedup('{{#is user.name "sid"}}{{else}}Who are you?{{/is}}', {user});
    let output = '<p>Hi sid</p>\n';
    t.deepEqual(input, output);
});

