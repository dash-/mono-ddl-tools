# ddl-tools-plugin-page-deep

Detailed page plugin for ddl-tools, a digital data layer helper utility with
data layer schema validation for highly-decoupled analytics reporting.

## Installation

Via `yarn`:

```
yarn add ddl-tools-plugin-page-deep
```

Via `npm`

```
npm install --save ddl-tools-plugin-page-deep
```

<a name="usage"></a>

## Usage

## API Documentation

* [ddl-tools-plugin-page-deep](../../docs/ddl-tools-plugin-page/pageDeepPlugin.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
npm clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools/packages/ddl-tools-plugin-page
yarn install
npm run build
```

## Tests

To run the unit tests, you must have this package
[installed locally](#local-installation).

Once you have this package installed locally, from the package's base
directory, run `npm run test`.

```
> ddl-tools-plugin-page-deep@0.0.2 pretest mono-ddl-tools/packages/ddl-tools-plugin-page-deep
> npm run -s lint

Lint finished...


> ddl-tools-plugin-page-deep@0.0.2 test mono-ddl-tools/packages/ddl-tools-plugin-page-deep
> jasmine test/specs/**/*Spec.js

Started
...................


19 specs, 0 failures
Finished in 0.026 seconds
```

## Contribute

To contribute code to this project, first fork the monorepo in GitHub, create
a feature or bug branch, and commit code to the branch.  You can then create a
PR against the main repository.

