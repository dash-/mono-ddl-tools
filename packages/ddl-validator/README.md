# ddl-validator

Provides schema validation for development.  In production, schema validation is
typically disabled (the schema validator is a development dependency).


## Installation

Via `yarn`:

```
yarn add 'ddl-validator'
```

Via `npm`

```
npm install --save 'ddl-validator'
```


## Usage

This package was built for use with `ddl-tools`.  If using it in this way, you
don't need to do much with this package directly, besides importing and
instantiating it before passing it to the `DDLTools` instance.  For example:

```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
```

However, if you're using this for another purpose, the usage will typically
include importing the class and a schema, instantiating it, and calling the
`operationIsValid` method for determining whether the `path` specified may be
set to the `value` specified.  For example:

```js
import Validator from 'ddl-validator';
import schema from './path/to/mySchema';
import loSet from 'lodash.set';

const validator = new Validator(schema);

// ...

const updateIfValid = (data, path, value) => {
  if (validator.operationIsValid(path, value)) {
    loSet(data, path, value);
  }
};
```


## Technical Documentation

* [ddl-validator](../../docs/ddl-validator.md)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

```
git clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools/packages/ddl-validator
yarn install
npm run build
```


## Tests

To run the unit tests, you must have this package
[installed locally](#local-installation).

Once you have this package installed locally, from the package's base
directory, run `npm run test`.

```
ddl-validator $ npm run test

> ddl-validator@0.0.2 pretest mono-ddl-tools/packages/ddl-validator
> npm run -s lint

Lint finished...


> ddl-validator@0.0.2 test mono-ddl-tools/packages/ddl-validator
> jasmine test/specs/**/*Spec.js

Started
.........


9 specs, 0 failures
Finished in 0.266 seconds
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

