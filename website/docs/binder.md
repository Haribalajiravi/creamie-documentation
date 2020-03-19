---
id: binder
title: Binder
sidebar_label: Binder
---

Binder syncs the data between a HTMLElement and an Object.

Example:

Enter the following code in `app-component.html`:

```html
    <input type="text" data="name" placeholder="Type anything">
    <div data="name">Previous data!</div>
    <button id="change">Change</button>
```

Now enter this in `app-component.js`:

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

As the `<input>` and `div` have the same `data` attribute, they are synced. Any changes made in the input field will be reflected in the div section. Furthermore, the content of the `<div>` section can be retrieved and used anywhere by using `this.data.name` in the component's JS file.
