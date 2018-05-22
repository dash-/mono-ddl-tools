# ddl-tools

A digital data layer helper utility for highly-decoupled analytics reporting.
This utility includes a limited number of general-use functions and supports
data layer schema validation.  It can also be extended to provide additional
functionality by passing specialized plugins to the `use` function.

## Installation

Via `yarn`:

```
yarn add 'ddl-tools'
```

Via `npm`

```
npm install --save 'ddl-tools'
```


<a name="usage"></a>

## Usage



## API Documentation

* [ddl-tools](../../docs/ddl-tools/DDLTools.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
npm clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools/packages/ddl-tools
yarn install
npm run build
```

## Tests

To run the unit tests, you must have this package
[installed locally](#local-installation).

Once you have this package installed locally, from the package's base
directory, run `npm run test`.

```
> ddl-tools@0.0.1 pretest /Users/ei2779/src/public/mono-ddl-tools/packages/ddl-tools
> npm run -s lint

Lint finished...


> ddl-tools@0.0.1 test /Users/ei2779/src/public/mono-ddl-tools/packages/ddl-tools
> jasmine test/specs/**/*Spec.js

Started
.................


17 specs, 0 failures
Finished in 0.024 seconds
```

## Contribute

To contribute code to this project, first fork the monorepo in GitHub, create
a feature or bug branch, and commit code to the branch.  You can then create a
PR against the main repository.

