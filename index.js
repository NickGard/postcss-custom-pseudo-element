var postcss = require('postcss');

module.exports = postcss.plugin('postcss-custom-pseudo-element', () => {
    const PSEUDO_PREFIX = '::-cpe-';
    const pseudoRE = RegExp(`${PSEUDO_PREFIX}([a-zA-Z\-]+)`);

    const resolvePseudoSelector = (selector, warn) => {
        if (selector.indexOf(PSEUDO_PREFIX) > -1) {
            try {
                const [pseudoSelector, pseudoName] = pseudoRE.exec(selector);
                return selector.replace(
                    pseudoSelector,
                    ` [data-pseudo="${pseudoName}"]`
                );
            } catch (e) {
                warn(`Could not resolve selector: ${selector}\n${e}`);
            }
        }
        return selector;
    };

    return (root, result) => {
        root.walkRules(rule => {
            rule.selector = resolvePseudoSelector(rule.selector, result.warn);
        });
    };
});
