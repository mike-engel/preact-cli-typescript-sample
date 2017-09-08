# preact-cli-typescript-example

> An example of how to use typescript with preact-cli and all its goodies

# Why?

[Preact](https://preactjs.com) and [preact-cli](https://github.com/developit/preact-cli) are awesome! [Typescript](https://typescriptlang.org) is awesome! Trying to use them together out of the box, however, is not so awesome. There are some cool projects like [`preact-cli-plugin-typescript`](https://github.com/wub/preact-cli-plugin-typescript) help a little, but I still found myself fighting to get it to build and include ideas like code splitting. So that's why I made this repo while working on a side project.

# Installing

Begin by cloning or forking this repo with git or github. Once you have it on your machine, run the following commands.

```sh
# install dependencies
npm install

# start the web app and development server
npm start
```

At this point, you should be able to open your browser and go to [localhost:8080](http://localhost:8080). You'll notice that the app compiles and also includes code splitting!

# Deploying

While this app doesn't do much on it's own, if you want to deploy it somewhere to see the lighthouse score or offline capabilities, run the build command and serve/upload those files somewhere. I recommend [now.sh](https://now.sh).

```sh
# build the app into a static set of files
npm run build

# deploy somewhere. This example uses now.sh
now ./build
```

# Contributing

I'd love to get your feedback and suggestions via issues and pull requests on this repo! All I ask is that you follow the [code of conduct](#code-of-conduct).

# [Code of Conduct](CODE_OF_CONDUCT.md)

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

# [License](LICENSE.md)
