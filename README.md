# [React](http://facebook.github.io/react/)-partial

```
npm install react-partial
```

Then either `require('react-partial')` or add `node_modules/react-partial/lib/index.js` into your HTML file (exports the `Partial` global).

## What This Solves

This component allows you to partially apply attributes to a component.

```js
<input type="radio" name="fruit" value="apple" />Apple
<input type="radio" name="fruit" value="orange" />Orange
<input type="radio" name="fruit" value="watermelon" />Watermelon
```

... becomes ...

```js
<Partial cls="input" type="radio" name="fruit">
  {Radio => (
    <Radio value="apple" />Apple
    <Radio value="orange" />Orange
    <Radio value="watermelon" />Watermelon
  )}
</Partial>
```

## Formal API

#### &lt;Partial />

Exposes 1 required prop -- `cls : String | ReactClass`: The class to partially
apply. If a string, this is the name of the React DOM element to use, otherwise it's a React Class. All other attributes are pre-applied to this class.

`children` is also required to be a function taking the partially applied
class.

## License

[MIT](./LICENSE)
