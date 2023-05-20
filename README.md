# Emerging Finsights Website

## Branch explaination

There are three main branches:
- [`main`](https://github.com/Emerging-Finsights/Website-Development/tree/main) 
- [`dev`](https://github.com/Emerging-Finsights/Website-Development/tree/dev)
- [`prototype`](https://github.com/Emerging-Finsights/Website-Development/tree/prototype)

`main` is used as the currently deployed version of the website. The `dev` branch stores a mostly stable version of the website that is being tested before being deployed (merged to `main`). The `protoype` branch holds the most unstable version of the website, containing bleeding edge changes.

Major features of the website are developed on their own branches and merged when ready for testing & tweaking.

## Build / Generation Guide

This website uses Hugo to generate a site using articles stored in markdown. 
It also requires `nodejs` and `npm` to render the chosen Hugo theme.

### Build Procedure

You can either install the dependencies yourself or use a docker image containing the dependencies to build the site.

NOTE: git sub-modules must be cloned first before using any of these methods bellow
Run the command bellow to fetch all git submodules
```bash
$ git submodule update --init
``` 

#### Docker Instructions
[Docker](./docs/docker.md)

#### Bare-metal / local installation Instructions
[Bare-metal](./docs/bare-metal.md)


## Code Repository Conventions

[Conventions](./docs/conventions.md)

## **Resources:**

[Markdown Guide](https://www.markdownguide.org/basic-syntax/)