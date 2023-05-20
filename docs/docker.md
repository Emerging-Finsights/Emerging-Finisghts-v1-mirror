# Using Docker

## Installation requirements
- [Docker](https://www.docker.com/get-started)

Docker can be used to invoke the processes to build the website. You can use this by building the provided docker image. This will take care of installing hugo and npm packages.

When using docker, run the command bellow first from the project root directory to build the docker image:
```bash
$ docker build main-site -t website-build
```

## Running a local site server for development
To run a local server of the hugo output run the command bellow:
```bash
$ docker run --rm -p 1313:1313 -it -v "$(pwd)/main-site:/src" website-build 
```
This command will host a local webserver on port 1313 serving the website.

## Building the site for deployment

To create a build of the site run the command bellow:
```bash
$ docker run --rm -it -v $(pwd)/main-site:/src -v "$(pwd)/main-site/public:/public" website-build /hugo-build.sh
```
This will create a publishable version of the site under the `public` folder in `main-site`.

NOTE: Replace `$(pwd)` with `%cd%` when using cmd on windows  
