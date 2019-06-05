# ddl-tools-plugin-transaction-list

Transaction list plugin for ddl-tools, a digital data layer helper utility
with data layer schema validation for highly-decoupled analytics reporting.


## Installation

Via `yarn`:

```
yarn add ddl-tools-plugin-transaction-list
```

Via `npm`

```
npm install --save ddl-tools-plugin-transaction-list
```


## Usage

To use this plugin, you will need to instantiate `DDLTools` like you would
typically do.  You will also need to import this plugin, and call the `use`
method to load the plugin into the `DDLTools` instance.

For example:

```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxListPlugin from 'ddl-tools-plugin-transaction-list';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxListPlugin);
```

Once loaded, additional methods will be present on the `DDLTools` instance.
For example:

```
const trxListItem = new ddlTools.TransactionListItem();
trxListItem.setTransactionTotal(total);
ddlTools.addTransactionListItem(trxListItem);
```

See the [Technical Documentation](../../docs/ddl-tools-plugin-transaction-list.md) for
more detailed information on what methods are added by this plugin.


## Technical Documentation

* [ddl-tools-plugin-transaction-list](../../docs/ddl-tools-plugin-transaction-list.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
git clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools/packages/ddl-tools-plugin-transaction-list
yarn install
npm run build
```


## Tests

To run the unit tests, you must have this package
[installed locally](#local-installation).

Once you have this package installed locally, from the package's base
directory, run `npm run test`.

```
> ddl-tools-plugin-transaction-list@0.0.1 pretest mono-ddl-tools/packages/ddl-tools-plugin-transaction-list
> npm run -s lint

Lint finished...


> ddl-tools-plugin-transaction-list@0.0.1 test mono-ddl-tools/packages/ddl-tools-plugin-transaction-list
> jasmine test/specs/**/*Spec.js

Started
................................................

48 specs, 0 failures
Finished in 0.036 seconds
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

