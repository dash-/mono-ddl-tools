## Classes

<dl>
<dt><a href="#DDLTools">DDLTools</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#DDLToolsConfigResetOptions">DDLToolsConfigResetOptions</a></dt>
<dd><p>DDLTools reset options.</p>
</dd>
<dt><a href="#DDLToolsConfigLogger">DDLToolsConfigLogger</a></dt>
<dd><p>A logger.</p>
</dd>
<dt><a href="#DDLToolsConfigValidator">DDLToolsConfigValidator</a></dt>
<dd><p>A digital data layer validator.</p>
</dd>
<dt><a href="#DDLToolsConfigEmitEventsOptions">DDLToolsConfigEmitEventsOptions</a></dt>
<dd><p>DDLTools DOM event emission options.</p>
</dd>
<dt><a href="#DDLToolsConfig">DDLToolsConfig</a></dt>
<dd><p>DDLTools configuration object.</p>
</dd>
</dl>

<a name="DDLTools"></a>

## DDLTools
**Kind**: global class  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

* [DDLTools](#DDLTools)
    * [new DDLTools()](#new_DDLTools_new)
    * [.reset()](#DDLTools+reset) ⇒ <code>object</code>
    * [.set(path, value)](#DDLTools+set) ⇒ <code>object</code>
    * [.get(path, [defaultValue])](#DDLTools+get)
    * [.merge(path, source)](#DDLTools+merge) ⇒ <code>object</code>
    * [.push(path, value)](#DDLTools+push) ⇒ <code>object</code>
    * [.publish(path)](#DDLTools+publish) ⇒ <code>Promise</code>
    * [.validate()](#DDLTools+validate) ⇒ <code>boolean</code>
    * [.configure()](#DDLTools+configure) ⇒ <code>object</code>
    * [.use(plugin)](#DDLTools+use) ⇒ <code>object</code>
    * [.setPageInstanceId(value)](#DDLTools+setPageInstanceId) ⇒ <code>object</code>

<a name="new_DDLTools_new"></a>

### new DDLTools()
Provides digital data layer helper functions supporting data layer schema
validation for highly-decoupled analytics reporting.

<a name="DDLTools+reset"></a>

### ddlTools.reset() ⇒ <code>object</code>
Empties the digital data layer prior to populating data for a new page.
Provided for single-page apps to call during page-level widget
initialization prior to populating new data in the data layer.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  
**Example**  
```js
ddlTools.reset();
```
<a name="DDLTools+set"></a>

### ddlTools.set(path, value) ⇒ <code>object</code>
Updates or inserts a data layer entry at the given `path` with the given
`value` if the given path and value are valid for the data layer schema.
If the base path does not already exist, it will be created.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Where the data layer entry should reside |
| value | <code>mixed</code> | What the data layer entry should contain |

**Example**  
```js
ddlTools.set("page.pageInfo.pageID", "Nikon Camera");
```
<a name="DDLTools+get"></a>

### ddlTools.get(path, [defaultValue])
Retrieves the data layer entry at the given `path` if the given path
contains a value, or the `default` value if a default value is specified
and the given path does not contain a value.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | Where the data layer entry resides |
| [defaultValue] | <code>mixed</code> | <code></code> | Optional value to return if the path     does not contain a value |

**Example**  
```js
const pageId = ddlTools.get("page.pageInfo.pageID");
```
**Example**  
```js
const pageId = ddlTools.get("page.pageInfo.pageName", 'UnknownPage');
```
<a name="DDLTools+merge"></a>

### ddlTools.merge(path, source) ⇒ <code>object</code>
Deeply merges the data layer entry at the given `path` with the given
`value` if the given path and value are valid for the data layer schema.
If the base path does not already exist, it will be created.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Where the data layer entry should reside |
| source | <code>object</code> | Key/value pairs to merge |

**Example**  
```js
ddlTools.merge("transaction.profile", {
  profileInfo: {
    shippingAddress: {
      line1: '1234 Test Dr',
      city: 'Portland',
      stateProvince: 'OR',
      postalCode: '97211',
      country: 'USA'
    }
  }
});
```
<a name="DDLTools+push"></a>

### ddlTools.push(path, value) ⇒ <code>object</code>
Adds a new data layer entry onto the end of an array at the `path` given
within the digital data layer.  If the base path does not already exist, it
will be created.  If an array does not exist at the path given, a new array
will be created at the given path.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Where the data layer array resides within   the data layer |
| value | <code>mixed</code> | The data to be added to the array |

**Example**  
```js
ddlTools.push("transaction.item", {
  "productId": "N117MP9",
  "sku": "N117MP9-31778",
  "color": "blue"
});
```
<a name="DDLTools+publish"></a>

### ddlTools.publish(path) ⇒ <code>Promise</code>
With event emission enabled, dispatches a "publish" event.  This is
useful for some types of analytics event handling.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>Promise</code> - - Promise to be resolved when publish is complete  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Indicates what has been published |

**Example**  
```js
ddlTools.publish('page');
```
<a name="DDLTools+validate"></a>

### ddlTools.validate() ⇒ <code>boolean</code>
Validates the existing `digitalData` object against the DDL Schema,
returning true upon success (`digitalData` is valid), or false otherwise.

NOTE: It is not necessary to use this method for validating changes
caused by the `DDLTools` objects -- those changes are already
validated.  This method is for validating an initialized value of
`digitalData` which is typically set by server-side processing.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>boolean</code> - - Whether or not the `digitalData` object
    is valid  
**Example**  
```js
window.digitalData = {
  pageInstanceID: 'example-pageInstanceId',
  invalidField: 'bad'
};
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
if (!ddlTools.validate()) {
  console.warn('`window.digitalData` is invalid');
}
```
<a name="DDLTools+configure"></a>

### ddlTools.configure() ⇒ <code>object</code>
Allows package consumers to customize the functionality of the other
methods in this class.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  
**Params**: <code>object</code> options - The new settings to be used  
**Example**  
```js
ddlTools.configure({
  logger: specialLogger,
  throw: true
});
```
<a name="DDLTools+use"></a>

### ddlTools.use(plugin) ⇒ <code>object</code>
Extends the DDLTools instance with the methods from the provided plugin.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| plugin | <code>object</code> | The plugin to use |

**Example**  
```js
const pagePlugin = require('ddl-tools-plugin-page');
ddlTools.use(page);
```
**Example**  
```js
const pagePlugin = require('ddl-tools-plugin-page');
const trxsPlugin = require('ddl-tools-plugin-transactions');
ddlTools.use(pagePlugin, trxsPlugin);
```
<a name="DDLTools+setPageInstanceId"></a>

### ddlTools.setPageInstanceId(value) ⇒ <code>object</code>
Sets the page instance identifier.

The Page Identifier is among the most widely used web analytics data
properties.  This value SHOULD distinguish among environments, such as
whether this page is in development, staging, or production.

**Kind**: instance method of [<code>DDLTools</code>](#DDLTools)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="DDLToolsConfigResetOptions"></a>

## DDLToolsConfigResetOptions
DDLTools reset options.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| include | <code>Array.&lt;string&gt;</code> | Keys to be removed upon reset |
| exclude | <code>Array.&lt;string&gt;</code> | Keys to be ignored upon reset |

<a name="DDLToolsConfigLogger"></a>

## DDLToolsConfigLogger
A logger.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| debug | <code>function</code> | Function to call for non-critical logging |
| error | <code>function</code> | Function to call for critical logging |

<a name="DDLToolsConfigValidator"></a>

## DDLToolsConfigValidator
A digital data layer validator.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| operationIsValid | <code>function</code> | Function called to determine whether   changing a property at a path specified to a value specified should be   allowed. |
| configure | <code>function</code> | Function called to configure the validator. |

<a name="DDLToolsConfigEmitEventsOptions"></a>

## DDLToolsConfigEmitEventsOptions
DDLTools DOM event emission options.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| eventPrefix | <code>string</code> | String to prefix event names with |
| publishPrefix | <code>string</code> | String to prefix publish event names with |
| resetName | <code>string</code> | Name of reset events |

<a name="DDLToolsConfig"></a>

## DDLToolsConfig
DDLTools configuration object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| logger | <code>boolean</code> \| [<code>DDLToolsConfigLogger</code>](#DDLToolsConfigLogger) | Either true to enable   logging with the default logger; false to disable logging; or an   actual logger object with appropriate methods to use for logging (default:   true). |
| throw | <code>boolean</code> | True if methods should throw an exception when an   invalid operation is detected; false if exceptions should be ignored   (default: false). |
| verbose | <code>boolean</code> | True to enable extra logging information; false   to keep the console clean (default)   invalid operation is detected; false if exceptions should be ignored   (default: false). |
| reset | [<code>DDLToolsConfigResetOptions</code>](#DDLToolsConfigResetOptions) | Options customizing behavior   when the `reset` method is called. |
| validator | [<code>DDLToolsConfigValidator</code>](#DDLToolsConfigValidator) | A digital data layer   validator, such as the one presented by `ddl-validator`. |
| emitEvents | <code>boolean</code> \| [<code>DDLToolsConfigEmitEventsOptions</code>](#DDLToolsConfigEmitEventsOptions) | Either true   to enable automatic DOM event emission; false to disable the same; or a   configuration object to enable and configure the same (default: false) |

