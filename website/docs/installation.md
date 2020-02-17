---
id: installation
title: Installation guide
sidebar_label: Installation
---

> Note: Check the [documentation](https://github.com/haribalajiravi/creamie-cli) for now. Documentation is on progress.

## Start installing NodeJs 

Install [nodejs](https://nodejs.org/en/). If you are not yet installed, please install it right away. This framework and tools are working based on nodejs console.

## Now install creamie-cli

```sh
npm install -g creamie-cli
```

> Install globally, so that you can use creamie anywhere on the terminal.

If you are facing below error. You are probably using linux or mac OS.

```sh
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! syscall access
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, access '/usr/local/lib/node_modules'] {
npm ERR!   stack: "Error: EACCES: permission denied, access '/usr/local/lib/node_modules'",
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules'
npm ERR! }
```

> Use 'sudo' keyword to grant permission to install globally.

```sh
sudo npm install -g creamie-cli
```
