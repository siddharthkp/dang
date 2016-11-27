# markedup

![status:WIP](https://img.shields.io/badge/status-WIP-yellow.svg)
![status:WIP](https://img.shields.io/badge/status-Experiment-yellow.svg)
[![Build
Status](https://api.travis-ci.org/siddharthkp/markedup.svg?branch=master)](https://travis-ci.org/siddharthkp/markedup)

### supercharged markdown rendering engine

![screenshot](https://raw.githubusercontent.com/siddharthkp/markedup/master/screenshot.png?v=2)

List of features
- [x] Variables

```html
## name: {{star}}
```


- [x] Loops

```html
{{#planets}}
* {{planet}}
{{/planets}}
```

- [ ] Attributes
- [x] Conditionals

```html
{{#is start 'Sun'}}
    Our solar system

    Number of planets: 8
{{else}}
    {{#is star 'Kepler-32'}}
        Cygnus solar system

        Number of planets: 3
    {{else}}
        Some random solar system
    {{/is}}
{{/is}}
```
- [ ] Includes
- [ ] Attributes
- [ ] Escape code
- [ ] Syntax errors
