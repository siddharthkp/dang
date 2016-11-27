<link rel='stylesheet' href='github-markdown.css'>

## name: {{star}}

#### Planets
{{#each planets}}
* {{name}}
{{/each}}

{{#is star 'Sun'}}
    Our solar system

    Number of planets: 8
{{else}}
    {{#is star 'Kepler-32'}}
        Cygnus solar system

        Number of planets: 3
    {{else}}
        Some random solar systems>
    {{/is}}
{{/is}}

