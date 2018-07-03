# Repository: mono-ddl-tools

Monorepo featuring a Digital Data Layer (DDL) helper utility package, DDL
validator, plugins packages, and an examples package (coming soon) for
easy-to-use, highly-decoupled, and full-featured analytics reporting.

Works with Adobe Dynamic Tag Manager (DTM), Adobe Launch, Google Tag Manager,
Tealium, and any other tag manager that supports a digital data layer.

*NOTE:* Most plugins are designed for the Digital Data Layer 1.0 draft
specification published by the W3C Customer Experience Digital Data Community
Group located [here](https://www.w3.org/2013/12/ceddl-201312.pdf).


## Status

This package is early in its production life.  Please make this library better
by submitting issue tickets for any issues you experience.


## Requirements

- Node v6 or higher
- npm v3 or higher
- yarn


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
