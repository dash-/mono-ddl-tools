# ddl-tools-plugin-event

Events plugin for ddl-tools, a digital data layer helper utility with data layer
schema validation for highly-decoupled analytics reporting.

## Installation

Via `yarn`:

```
yarn add ddl-tools-plugin-event
```

Via `npm`

```
npm install --save ddl-tools-plugin-event
```

<a name="usage"></a>

## Usage

## Technical Documentation

* [ddl-tools-plugin-event](../../docs/ddl-tools-plugin-event.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
git clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools/packages/ddl-tools-plugin-event
yarn install
npm run build
```

## Tests

To run the unit tests, you must have this package
[installed locally](#local-installation).

Once you have this package installed locally, from the package's base
directory, run `npm run test`.

```
ddl-tools-plugin-event $ npm run test

> ddl-tools-plugin-event@0.0.2 pretest mono-ddl-tools/packages/ddl-tools-plugin-event
> npm run -s lint

Lint finished...


> ddl-tools-plugin-event@0.0.2 test mono-ddl-tools/packages/ddl-tools-plugin-event
> jasmine test/specs/**/*Spec.js

Started
..........................


26 specs, 0 failures
Finished in 0.03 seconds
```

## Contribute

The easiest way to contribute is to
[submit issues on GitHub](https://github.com/dash-/mono-ddl-tools/issues).
We welcome feedback and **deeply appreciate** your contribution of an issue for:

* Improvement ideas
* Feature requests
* Bugs

Of course, code contributions are welcome as well!

To contribute code to this project, first fork the monorepo in GitHub, create
a feature or bug branch, and commit code to the branch.  You can then create a
PR against the main repository.  More information can be found on this topic in
Rob Allen's guide:

* [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/)


