# PostCSS Custom Pseudo Element [![Build Status][ci-img]][ci]

[PostCSS] plugin to transform custom pseudo-element selectors into valid CSS selectors.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/NickGard/postcss-custom-pseudo-element.svg
[ci]:      https://travis-ci.org/NickGard/postcss-custom-pseudo-element

```html
<div class="foo">
  <div data-pseudo="bar" >
    Given this markup
  </div>
</div>
```
```css
.foo::-cpe-bar {
  /* Input example */
}
```

```css
.foo [data-pseudo="bar"] {
  /* Output example */
}
```

## Known Issues
• Nested components with the same `data-pseudo` attribute will _all_ be targeted.

## Usage

```js
postcss([ require('postcss-custom-pseudo-element') ])
```

See [PostCSS] docs for examples for your environment.
