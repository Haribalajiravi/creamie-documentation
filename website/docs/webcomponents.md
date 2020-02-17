---
id: webcomponents
title: Web Components
sidebar_label: Web components
---


## Web components

We have used common web component elements to achieve custom element which is convenient with [callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

Example:

app-config.js:

```javascript
import Boot from './app-boot.js';

export default {
    template: `app-component.html`,
    style: `app-component.css`,
    tag: 'app-component',
    isShadowDom: false,
    shadowMode: 'open',
    binder: 'data',
    boot: Boot
}
```

app-component.js:

```javascript
import Creamie from 'creamie';
import AppConfig from './app-config';

export default class App extends Creamie {
    constructor() {
        super(AppConfig);
        console.log("App constructor!");
    }

    connectedCallback() {
        console.log('connected!');
    }
}

window.customElements.define(AppConfig.tag, App);
```

index.html:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Cream App</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href="https://fonts.googleapis.com/css?family=Lobster|Overpass&display=swap" rel="stylesheet">
</head>

<body>
    <app-component></app-component>
</body>

</html>
```