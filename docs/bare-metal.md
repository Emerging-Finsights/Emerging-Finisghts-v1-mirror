# Bare-metal / Local installation

## Installation requirements
- [Hugo](https://gohugo.io/getting-started/installing/)
- [Node / npm](https://nodejs.org/en/download/)

## Instructions

First clone the repository and then change to the `main-site` directory.

```bash
$ git clone https://github.com/Emerging-Finsights/Website-Development.git
$ cd main-site  
```

To build for the first time `npm` dependencies have to be fetched using the command bellow:

```bash
$ npm i .
```

This only needs to run once when building a clean repository.


### Running a local site server for development
To run a local server containing the rendered site, invoke Hugo using the following command:

```bash
$ hugo serve
```

### Building the site for deployment
To create an actual build of the site run the following command:

```bash 
$ hugo 
```

This will create a rendered version of the website within the `public` folder. 
This version is the one used when deploying the site.
