---
id: component
title: Component creation 
sidebar_label: Component creation
---

## Components

Components are the combination of HTML, CSS and JS where everthing combine together to form an action.

```sh
creamie component <COMPONENT_NAME>
```

Using this command will create a component folder with its appropriate files in it under `src/` directory.

## Example - component creation

```sh
creamie component home

# console output
./src/home/home-component.css created!
./src/home/home-component.html created!
./src/home/home-component.js created!
./src/home/home-config.js created!
index.js modified!
./home/home-component imported!
```

## Component overwritting

If you need to replace the existing component over new one use the below command

```sh
creamie component home -r

# console output
./src/home/home-component.css replaced!
index.js modified!
./home/home-component imported!
./src/home/home-config.js replaced!
./src/home/home-component.js replaced!
./src/home/home-component.html replaced!
```