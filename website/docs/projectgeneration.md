---
id: projectgeneration
title: Creamie application generation 
sidebar_label: Project creation
---

## Creamie CLI

Creamie CLI will create a new project and snippets for you. You don't need to create manually. We recommend to use this tool to avoid typographical errors. Best to follow the commands!

## Project Generator

```sh
creamie create <PROJECT_NAME>
```

Above command will create a ready made sample project for you. Using that you can start developing your own code.

## Folder Structure

Your application folder structure will looks like this

```sh
MyTestApp
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
