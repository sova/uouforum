## Welcome to uouforum

### Prequisites

[Node.js](https://nodejs.org/en/) needs to be installed to run the application.

### running in development mode

run the following command in the terminal to install NPM modules and start Figwheel:

```
lein build
```

`lein cljsbuild once` will compile the client.js file





run `node` in another terminal:

```
npm start
```

or

``` node target/out/uouforum.js ```

#### configuring the REPL

Once Figwheel and node are running, you can connect to the remote REPL at `localhost:7000`.

Type `(cljs)` in the REPL to connect to Figwheel ClojureScript REPL.


### building the release version

```
lein package
```

Run the release version:

```
npm start
```

### Running using Docker

The template comes with a `Dockerfile` for running the application using Docker

Once you've run `lein package`, you can build and run a Docker container as follows:

```
docker build -t uouforum:latest .
docker run -p 3000:3000 uouforum:latest
```
