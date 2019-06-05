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


## Usage

### Instantiation

To use, you will need to import the DDLTools class, which is the default export
of the `ddl-tools` package.  You will also need a DDL validator, which you can
either custom-build or just use the `ddl-validator` package.  You will also
require a DDL schema, which is typically a custom-built JSON Schema.

Next you will want to create an instance of the DDL validator, passing it your
schema.  Finally, you will create a DDLTools object, passing a reference to the
digital data object you wish to use (such as `window.digitalData`) as well as
the DDL validator instance.

For example:

```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
```

### Configuration

You will also probably want to configure your DDLTools instance.  This can be
done by either passing a plain configuration object as a third parameter to the
constructor, or by calling `configure()` method and passing the plain
configuration object at that time.

```js
const ddlConfig = {
  reset: {
    exclude: ['user'],
  },
  emitEvents: true,
};
const ddlTools = new DDLTools(window.digitalData, ddlValidator, ddlConfig);
```

```js
ddlTools.configure(ddlConfig);
```

### Plugins

One major benefit of `ddl-tools` is the use of the convenience methods loaded
via plugins.  These are loaded via the `use` method.

```
import pageDeepPlugin from 'ddl-tools-plugin-page-deep';
ddlTools.use(pageDeepPlugin);
```

### Operations

Once instantiated, you may perform a myriad of operations to manipulate the
digital data object.  For example, to process a new page after a hash change in
a single page application, you might reset the digital data layer and set the
page name.

```
ddlTools
  .reset()
  .set('page.pageInfo.pageName', 'cart:review');
```

Or, you might prefer to do the same with the `ddl-tools-plugin-page-deep` plugin:

```
ddlTools
  .reset()
  .setPageName('cart:review');
```

You can also use `ddl-tools` to retrieve the values (although it's basically
just a thin wrapper around Lodash's `get` method).

```
ddlTools.get('page.pageInfo.pageName');
```

See the [Technical Documentation](../../docs/ddl-tools.md) for more details
about what is possible.


## Technical Documentation

* [ddl-tools](../../docs/ddl-tools.md)
* [ddl-validator](../../docs/ddl-validator.md)
* [ddl-tools-plugin-cart-deep](../../docs/ddl-tools-plugin-cart-deep.md)
* [ddl-tools-plugin-cart](../../docs/ddl-tools-plugin-cart.md)
* [ddl-tools-plugin-event](../../docs/ddl-tools-plugin-event.md)
* [ddl-tools-plugin-page-deep](../../docs/ddl-tools-plugin-page-deep.md)
* [ddl-tools-plugin-page](../../docs/ddl-tools-plugin-page.md)
* [ddl-tools-plugin-product](../../docs/ddl-tools-plugin-product.md)
* [ddl-tools-plugin-transaction-deep](../../docs/ddl-tools-plugin-transaction-deep.md)
* [ddl-tools-plugin-transaction](../../docs/ddl-tools-plugin-transaction.md)
* [ddl-tools-plugin-transaction-list](../../docs/ddl-tools-plugin-transaction-list.md)
* [ddl-tools-plugin-user](../../docs/ddl-tools-plugin-user.md)


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
ddl-tools $ npm run test

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

