# Repository: mono-ddl-tools

Monorepo featuring:
* [Digital Data Layer (DDL) helper utility package](#package-ddl-tools)
* [DDL validator](#package-ddl-validator)
* [Plugins packages](#package-plugins)
* Examples package (COMING SOON)

Developed at a Fortune 100 company, released anonymously with permission under
the Apache 2.0 license, for easy-to-use, highly-decoupled, flexible, and
full-featured analytics reporting.

Works with Adobe Dynamic Tag Manager (DTM), Adobe Launch, Google Tag Manager,
Tealium, and any other tag manager that supports a digital data layer.


## Installation

Packages are each separately available on `npm` (except the examples package).
See the individual [packages](#packages) for more information.


## Compatibility

`ddl-tools` is highly configurable and pluggable.  It may be used with any
digital data layer variable and schema, and is easily extendable with custom
plugins.  

However, the [plugins](#package-plugins) in this monorepo are designed for use
with the Digital Data Layer 1.0 draft specification published by the W3C
Customer Experience Digital Data Community Group located
[here](https://www.w3.org/2013/12/ceddl-201312.pdf).


<a name="packages"></a>
## Packages

<a name="package-ddl-tools"></a>
### Core Package: ddl-tools

A digital data layer helper utility for highly-decoupled analytics reporting.
This utility includes a limited number of general-use functions and supports
external data layer schema validation (see [ddl-validator](packages/ddl-validator)).
It can also be extended to provide additional functionality by passing
specialized plugins to the `use` function.

For more information, see:
* [`packages/ddl-tools/README.md`](packages/ddl-tools)
* [Technical Documentation](docs/ddl-tools.md)


<a name="package-ddl-validator"></a>
### Core Package: ddl-validator

Provides schema validation for development.  In production, schema validation is
typically disabled (the schema validator is a development dependency).

For more information, see:
* [`packages/ddl-validator/README.md`](packages/ddl-validator)
* [Technical Documentation](docs/ddl-validator.md)


<a name="package-plugins"></a>
### W3C CEDDL Plugin Packages

The following plugins are designed for use with the Digital Data Layer 1.0 draft
specification published by the W3C Customer Experience Digital Data Community
Group located [here](https://www.w3.org/2013/12/ceddl-201312.pdf).

If your schema is based on the above schema, these plugins can add significant
ease to your digital data layer work.

I would like to note that though these plugins do cover a large swath of usage
for that schema, they are not intended to be an exhaustive SDK.  Some areas of
that schema (such as the Security, Privacy, and Version objects) do not
currently have dedicated plugins in the list below.  Feel free to make your own,
and I would certainly encourage plugin developers to share their plugins with me
so that I can add those plugin packages to this list.

Finally, I'd like to add that if your schema is not based on the W3C Customer
Experience Digital Data Community schema, these plugins can still serve as
examples for your own plugins.


<a name="package-ddl-tools-plugin-cart"></a>
### Plugin Package: ddl-tools-plugin-cart

Cart plugin for recording information about a shopping cart such as cart totals
and items.

For more information, see:
* [`packages/ddl-tools-plugin-cart/README.md`](packages/ddl-tools-plugin-cart)
* [Technical Documentation](docs/ddl-tools-plugin-cart.md)


<a name="package-ddl-tools-plugin-cart-deep"></a>
### Plugin Package: ddl-tools-plugin-cart-deep

Detailed cart plugin similar to the normal cart plugin but which adds numerous
convenience functions.

For more information, see:
* [`packages/ddl-tools-plugin-cart-deep/README.md`](packages/ddl-tools-plugin-cart-deep)
* [Technical Documentation](docs/ddl-tools-plugin-cart-deep.md)


<a name="package-ddl-tools-plugin-event"></a>
### Plugin Package: ddl-tools-plugin-event

Event plugin for recording events that occur within a page such as errors or
user actions.

For more information, see:
* [`packages/ddl-tools-plugin-event/README.md`](packages/ddl-tools-plugin-event)
* [Technical Documentation](docs/ddl-tools-plugin-event.md)


<a name="package-ddl-tools-plugin-page"></a>
### Plugin Package: ddl-tools-plugin-page

Page plugin for recording information about a page such as the page name or
referrer URL.

For more information, see:
* [`packages/ddl-tools-plugin-page/README.md`](packages/ddl-tools-plugin-page)
* [Technical Documentation](docs/ddl-tools-plugin-page.md)


<a name="package-ddl-tools-plugin-page-deep"></a>
### Plugin Package: ddl-tools-plugin-page-deep

Detailed page plugin similar to the normal page plugin but which adds numerous
convenience functions.

For more information, see:
* [`packages/ddl-tools-plugin-page-deep/README.md`](packages/ddl-tools-plugin-page-deep)
* [Technical Documentation](docs/ddl-tools-plugin-page-deep.md)


<a name="package-ddl-tools-plugin-product"></a>
### Plugin Package: ddl-tools-plugin-product

Product plugin for recording information about products displayed on a page.

For more information, see:
* [`packages/ddl-tools-plugin-product/README.md`](packages/ddl-tools-plugin-product)
* [Technical Documentation](docs/ddl-tools-plugin-product.md)


<a name="package-ddl-tools-plugin-transaction"></a>
### Plugin Package: ddl-tools-plugin-transaction

Transaction plugin for recording information about a purchasing transaction.

For more information, see:
* [`packages/ddl-tools-plugin-transaction/README.md`](packages/ddl-tools-plugin-transaction)
* [Technical Documentation](docs/ddl-tools-plugin-transaction.md)


<a name="package-ddl-tools-plugin-transaction-deep"></a>
### Plugin Package: ddl-tools-plugin-transaction-deep

Detailed transaction plugin similar to the normal transaction plugin but which
adds numerous convenience functions.

For more information, see:
* [`packages/ddl-tools-plugin-transaction-deep/README.md`](packages/ddl-tools-plugin-transaction-deep)
* [Technical Documentation](docs/ddl-tools-plugin-transaction-deep.md)


<a name="package-ddl-tools-plugin-user"></a>
### Plugin Package: ddl-tools-plugin-user

Transaction plugin for recording information about the user(s).

For more information, see:
* [`packages/ddl-tools-plugin-user/README.md`](packages/ddl-tools-plugin-user)
* [Technical Documentation](docs/ddl-tools-plugin-user.md)


### Package: ddl-tools-examples (COMING SOON)

Demonstrates working examples of using `ddl-tools`.  Both Single Page
Application (SPA) and non-SPA (Legacy) web applications are included in the
examples.

For more information, see:
* [`packages/ddl-tools-examples/README.md`](./packages/ddl-tools-examples)


## Local Installation

These steps are not necessary (nor useful) for normal use.  These steps are only
necessary to view the source or run tests.

To install locally, clone this repository, install dependencies, and build it.

On a Mac or Linux variant, you can do this with the following commands in `bash`:

```
git clone https://github.com/dash-/mono-ddl-tools.git
cd mono-ddl-tools
npm run build
```


## Tests

To run the unit tests, you must have this repository
[installed locally](#local-installation).

Once you have this repository installed locally, run `npm run test`.

```
$ npm run test
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


## See Also

* [W3C Customer Experience Digital Data Layer 1.0](https://www.w3.org/2013/12/ceddl-201312.pdf)
* [Digital Data Layer JSON Schema](https://github.com/mkohlmyr/ddl-json-schema)
