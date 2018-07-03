<a name="DDLValidator"></a>

## DDLValidator
**Kind**: global class  

* [DDLValidator](#DDLValidator)
    * [new DDLValidator()](#new_DDLValidator_new)
    * [.operationIsValid(path, value)](#DDLValidator+operationIsValid) ⇒ <code>boolean</code>
    * [.configure()](#DDLValidator+configure)

<a name="new_DDLValidator_new"></a>

### new DDLValidator()
Digital Data Layer schema validation for ddl-tools.

<a name="DDLValidator+operationIsValid"></a>

### ddlValidator.operationIsValid(path, value) ⇒ <code>boolean</code>
Determines whether the schema allows the `value` given to be set at the
given `path` (if `path` is not undefined), or validates `value` as a full
digital data layer structure (if `path` is undefined).  Returns true if the
schema allows the operation; false otherwise.

**Kind**: instance method of [<code>DDLValidator</code>](#DDLValidator)  
**Returns**: <code>boolean</code> - - Whether or not the operation is valid  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The path of the element being updated, or   undefined to validate value as a full digital data layer structure |
| value | <code>mixed</code> | The value to set at the path given, or a full   digital data layer structure if path is undefined |

<a name="DDLValidator+configure"></a>

### ddlValidator.configure()
Allows package consumers to customize validation functionality.

**Kind**: instance method of [<code>DDLValidator</code>](#DDLValidator)  
**Params**: <code>object</code> options - Configuration options as key-value pairs  
