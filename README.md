Demo of opra.js
===============
This is as far as I've got in the documentation process. Keep an eye on [the demo code](https://github.com/jakobmattsson/opra-demo) or [the source itself](https://github.com/jakobmattsson/opra) in order to get updates.


### Getting started

Clone this project or just download the files to your own computer.


### Prerequisites

You'll need to install [node.js](http://nodejs.org), [npm](http://npmjs.org) and the npm modules `express`, `express-jit-coffee` and `opra` to run this code. In case you're not familiar with npm, the modules can be installed with the following oneliner:

    npm install express express-jit-coffee opra

This command (and all commands below) should be run from the project root, not the public-folder or anywhere else.


### Running the server

Dead simple. Just run:

    node app.js


### Compiling the script

Super easy. In order to print it to stdout you can run:

    node build.js

If you prefer to put it in a file you can pipe it:

    node build.js > output.html


### Going further

You can change all kinds of parameters for `opra.serve` (used in app.js) and `opra.build` (used in build.js) in order to serve/build your index-file in a different way. I'll document all of those a soon as the project have matured a bit. Feel free to play around with the source meanwhile.