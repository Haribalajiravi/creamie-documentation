---
id: binder
title: Binder
sidebar_label: Binder
---

## Binder

Binder will make the data sync between a HTMLElement and Object.

Example:

In your component html try will below code:

```html
    <input type="text" data="name" placeholder="Type anything">
    <div data="name">Previous data!</div>
    <button id="change">Change</button>
```

app-component.js:

```javascript
import Creamie from 'creamie';
import  AppConfig  from  './appConfig.js';

class App extends Creamie {

    constructor() {
        super(AppConfig);
        let _this = this;
        change.onclick = function() {
            _this.data.name = 'Data changed!';
        }
    }

    /**
     * create your methods below
     */
}

window.customElements.define(AppConfig.tag, App);
```

