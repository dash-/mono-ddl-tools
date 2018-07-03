# ddl-tools

A digital data layer helper utility for highly-decoupled analytics reporting.
This utility includes a limited number of general-use functions and supports
external data layer schema validation (see [ddl-validator](packages/ddl-validator)).
It can also be extended to provide additional functionality by passing
specialized plugins to the `use` function.

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



## Technical Documentation

* [ddl-tools](../../docs/ddl-tools.md)
* [ddl-validator](docs/ddl-validator.md)
* [ddl-tools-plugin-cart-deep](docs/ddl-tools-plugin-cart-deep.md)
* [ddl-tools-plugin-cart](docs/ddl-tools-plugin-cart.md)
* [ddl-tools-plugin-event](docs/ddl-tools-plugin-event.md)
* [ddl-tools-plugin-page-deep](docs/ddl-tools-plugin-page-deep.md)
* [ddl-tools-plugin-page](docs/ddl-tools-plugin-page.md)
* [ddl-tools-plugin-product](docs/ddl-tools-plugin-product.md)
* [ddl-tools-plugin-transaction-deep](docs/ddl-tools-plugin-transaction-deep.md)
* [ddl-tools-plugin-transaction](docs/ddl-tools-plugin-transaction.md)
* [ddl-tools-plugin-user](docs/ddl-tools-plugin-user.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
git clone https://github.com/dash-/mono-ddl-tools.git
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
> ddl-tools@0.0.1 pretest mono-ddl-tools/packages/ddl-tools
> npm run -s lint

Lint finished...


> ddl-tools@0.0.1 test mono-ddl-tools/packages/ddl-tools
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

