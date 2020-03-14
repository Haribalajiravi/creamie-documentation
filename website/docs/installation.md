---
id: installation
title: Installation guide
sidebar_label: Installation
---

## Prerequisite
- [Node.js](https://nodejs.org/en/)

## Install Creamie's Command Line Interface (CLI)

> Install the CLI globally to use it through the terminal.

If you're on Windows:

```sh
npm install -g creamie-cli
```
If you're on Linux or MacOS:

```sh
sudo npm install -g creamie-cli
```

If you use the command without `sudo` in Linux or MacOS, you might face these errors:

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
