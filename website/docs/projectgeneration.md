---
id: projectgeneration
title: Create a Creamie project
sidebar_label: Create Project
---

[Install the Creamie CLI](https://creamie.now.sh/docs/installation) and use the following command to automatically create all the folders and files required for your project.

```sh
creamie create <PROJECT_NAME>
```

## Folder Structure

The auto-generated project's folder structure will resemble this:

```sh
<PROJECT_NAME>
├── ecosystem.config.js
├── package.json
├── package-lock.json
├── server.js
├── src
│   ├── app
│   │   ├── app-boot.js
│   │   ├── app-component.css
│   │   ├── app-component.html
│   │   ├── app-component.js
│   │   └── app-config.js
│   ├── assets
│   │   └── cream.png
│   ├── index.html
│   ├── index.js
│   └── styles
│       └── main.css
└── webpack.config.js
```

## Serving application

Before serving the application do the following steps

```sh
cd MyTestApp
npm init
```

You can see that `package.json` is already there in application folder structure.

If you need to change content on that use the above specified command to re-built it.

```sh
npm install
```

This command is very important that it will install all you dependency packages to your application.

Now, you can use the below command to serve the application

```sh
npm run development
```

You can watch your application running on [http://localhost:8080](http://localhost:8080)

Happy Coding!
