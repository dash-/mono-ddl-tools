# Repository: mono-ddl-tools

Monorepo featuring a Digital Data Layer (DDL) helper utility package, DDL
validator, plugins packages, and an examples package for easy-to-use,
highly-decoupled, and full-featured analytics reporting.

Works with Adobe Dynamic Tag Manager (DTM), Adobe Launch, Google Tag Manager,
Tealium, and any other tag manager that supports a digital data layer.


## Status

This package is early in its production life.  Please make this library better
by submitting issue tickets for any issues you experience.


## Requirements

- Node v6 or higher
- npm v3 or higher
- yarn
*TODO*


## Installation and Setup

To install the full git monorepo, just clone the repository into the desired
base directory.

*TODO*

```
git clone *TBD*
```


## Packages

### Package: ddl-tools

Provides a digital data layer helper utility for highly-decoupled analytics
reporting.  This utility includes a limited number of general-use functions and
features data layer schema validation.  It can also be extended to provide
additional functionality by passing specialized plugins to the `use` function.

For more information, see:
[`packages/ddl-tools-core/README.md`](./packages/ddl-tools-core).

### Package: ddl-validator

### Package: ddl-tools-plugin-
*TODO*

Provides a [UMD-friendly](https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/)
method of accessing `ddl-tools-core`.

### Package: ddl-tools-examples

Demonstrates working examples of using `ddl-tools`.  Both Single Page
Application (SPA) and non-SPA (Legacy) web applications are included in the
examples.

For more information, see:
[`packages/ddl-tools-examples/README.md`](./packages/ddl-tools-examples)


## See Also

* [W3C Customer Experience Digital Data Layer 1.0](https://www.w3.org/2013/12/ceddl-201312.pdf)
* [Digital Data Layer JSON Schema](https://github.com/mkohlmyr/ddl-json-schema)
