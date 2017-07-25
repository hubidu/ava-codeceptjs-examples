ava-codeceptjs-examples
=======================

Example tests for ava-codeceptjs

## Usage

Install dependencies

```console
$ npm install
```

Install ava globally

```console
$ npm install ava -g
```

Install selenium-standalone (NOTE: You need a JVM for this), then install
the browser drivers and start the selenium server

```console
$ npm install selenium-standalone -g
$ selenium-standalone install
$ selenium-standalone start
```

Now you can run the tests using

```console
$ ava -c 1
```

You should see chrome starting and executing the test cases


