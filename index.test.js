var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('converts pseudo-selector to descendant attribute selector', () => {
    run('a::-cpe-foo { }', 'a [data-pseudo="foo"] { }');
    run('.foo .bar::-cpe-baz:hover', '.foo .bar [data-pseudo="baz"]:hover');
});
