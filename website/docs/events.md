---
id: events
title: Events
sidebar_label: Events
---

## Events

Example:

app-component.js:

```javascript
import Creamie from 'creamie';
import  AppConfig  from  './app-config.js';

class App extends Creamie {

    constructor() {
        super(AppConfig);
        this.events.init({
            execute: function (e) {
                console.log(this, e);
                alert('Execute method fired!');
            }
        });
    }

    /**
     * create your methods below
     */
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
    <title>App</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script module='type' src='./App.js'></script>
</head>
<body>
    <button e="click:execute"></button>
</body>
</html>
```