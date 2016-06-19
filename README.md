# rust-belt-rust.2016
A presentation accompanying Rust Belt Rust 2016 workshop Fly me to the moon

## Tools
This presentation is created with [Reveal.js][reveal], with the help of
[Yeoman][yeoman], [grunt][] and [bower][].

### Setup
The tools are installed with [npm][] and they depend on [node][]. So in order to
get started from scratch first [install node][install-node]. Next install Yeoman
and bower with the following command.

```sh
npm install --global yo bower grunt-cli
```

We are using [generator-reveal][], a Yeoman generator, that needs to be
installed as well. This can be done by running

```sh
npm install --global generator-reveal
```

## Contributing
Make sure you have installed all the necessary tools. With the tools installed
one can run the following commands. These download the dependencies, both for
developing the presentation as presenting the presentation.

```sh
npm install && bower install
```

You can create new slides with

```
yo reveal:slide [Slide Title]
```

To see the slides you can start a server with

```sh
grunt serve
```

and visit [http://localhost:9000](http://localhost:9000). In order to deploy it
to Github pages run

```sh
grunt deploy
```

see the [documentation][generator-reveal] for more tips and tricks.

[reveal]: http://lab.hakim.se/reveal-js/
[yeoman]: http://yeoman.io/
[grunt]: http://gruntjs.com/
[bower]: https://bower.io/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org/
[install-node]: https://nodejs.org/en/download/
[generator-reveal]: https://github.com/slara/generator-reveal
