# ddl-tools-plugin-cart

Cart plugin for ddl-tools, a digital data layer helper utility with data layer
schema validation for highly-decoupled analytics reporting.

## Installation

Via `yarn`:

```
yarn add ddl-tools-plugin-cart
```

Via `npm`

```
npm install --save ddl-tools-plugin-cart
```

<a name="usage"></a>

## Usage

## API Documentation

* [ddl-tools-plugin-cart](../../docs/ddl-tools-plugin-cart/cartPlugin.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
npm clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools/packages/ddl-tools-plugin-cart
yarn install
npm run build
```

## Tests

To run the unit tests, you must have this package
[installed locally](#local-installation).

Once you have this package installed locally, from the package's base
directory, run `npm run test`.

```
> ddl-tools-plugin-cart@0.0.1 pretest mono-ddl-tools/packages/ddl-tools-plugin-cart
> npm run -s lint

Lint finished...


> ddl-tools-plugin-cart@0.0.1 test mono-ddl-tools/packages/ddl-tools-plugin-cart
> jasmine test/specs/**/*Spec.js

Started
.......


7 specs, 0 failures
Finished in 0.018 seconds
```

## Contribute

To contribute code to this project, first fork the monorepo in GitHub, create
a feature or bug branch, and commit code to the branch.  You can then create a
PR against the main repository.

