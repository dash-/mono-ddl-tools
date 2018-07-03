## Constants

<dl>
<dt><a href="#pagePlugin">pagePlugin</a></dt>
<dd><p>Plugin that adds general page-related methods to ddl-tools.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlainPageCategory">PlainPageCategory</a></dt>
<dd><p>Page categorization data.</p>
</dd>
<dt><a href="#PlainPageInfo">PlainPageInfo</a></dt>
<dd><p>Standard page information.</p>
</dd>
<dt><a href="#PlainPage">PlainPage</a></dt>
<dd><p>Metadata describing a web page.</p>
</dd>
</dl>

<a name="pagePlugin"></a>

## pagePlugin
Plugin that adds general page-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import pagePlugin from 'ddl-tools-plugin-page';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(pagePlugin);
```

* [pagePlugin](#pagePlugin)
    * [.setPage(page)](#pagePlugin.setPage) ⇒ <code>object</code>
    * [.mergePage(page)](#pagePlugin.mergePage) ⇒ <code>object</code>
    * [.setPageInfo(pageInfo)](#pagePlugin.setPageInfo) ⇒ <code>object</code>
    * [.mergePageInfo(pageInfo)](#pagePlugin.mergePageInfo) ⇒ <code>object</code>
    * [.setPageCategory(category)](#pagePlugin.setPageCategory) ⇒ <code>object</code>
    * [.mergePageCategory(category)](#pagePlugin.mergePageCategory) ⇒ <code>object</code>
    * [.setPageAttributes(attributes)](#pagePlugin.setPageAttributes) ⇒ <code>object</code>
    * [.mergePageAttributes(attributes)](#pagePlugin.mergePageAttributes) ⇒ <code>object</code>
    * [.addPageAttribute(name, value)](#pagePlugin.addPageAttribute) ⇒ <code>object</code>

<a name="pagePlugin.setPage"></a>

### pagePlugin.setPage(page) ⇒ <code>object</code>
Records page metadata by replacing `page` with the `page` argument,
destroying any existing page metadata.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| page | [<code>PlainPage</code>](#PlainPage) | Web page metadata |

<a name="pagePlugin.mergePage"></a>

### pagePlugin.mergePage(page) ⇒ <code>object</code>
Updates page metadata by deeply merging the key/value pairs from the `page`
argument into the `page` object, creating a new `page` object if one did
not already exist.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| page | [<code>PlainPage</code>](#PlainPage) | Web page metadata |

<a name="pagePlugin.setPageInfo"></a>

### pagePlugin.setPageInfo(pageInfo) ⇒ <code>object</code>
Records detailed page information by replacing `page.pageInfo` with the
`pageInfo` argument, destroying any existing detailed page information.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| pageInfo | [<code>PlainPageInfo</code>](#PlainPageInfo) | Detailed page information |

<a name="pagePlugin.mergePageInfo"></a>

### pagePlugin.mergePageInfo(pageInfo) ⇒ <code>object</code>
Updates detailed page information by deeply merging the key/value pairs
from the `pageInfo` argument into the `page.pageInfo` object, creating a
new `page.pageInfo` object if one did not already exist.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| pageInfo | [<code>PlainPageInfo</code>](#PlainPageInfo) | Detailed page information |

<a name="pagePlugin.setPageCategory"></a>

### pagePlugin.setPageCategory(category) ⇒ <code>object</code>
Records page categorization data by replacing `page.category` with the
`category` argument, destroying any existing page categorization data.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| category | [<code>PlainPageCategory</code>](#PlainPageCategory) | Page categorization data |

<a name="pagePlugin.mergePageCategory"></a>

### pagePlugin.mergePageCategory(category) ⇒ <code>object</code>
Updates page categorization data by deeply merging the key/value pairs from
the `category` argument into the `page.category` object, creating a new
`page.category` object if one did not already exist.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| category | [<code>PlainPageCategory</code>](#PlainPageCategory) | Page categorization data |

<a name="pagePlugin.setPageAttributes"></a>

### pagePlugin.setPageAttributes(attributes) ⇒ <code>object</code>
Records additional facts about the page by replacing `page.attributes` with
the `attributes` argument, destroying any existing attributes.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the page |

<a name="pagePlugin.mergePageAttributes"></a>

### pagePlugin.mergePageAttributes(attributes) ⇒ <code>object</code>
Updates additional facts about the page by deeply merging the key/value
pairs from the `attributes` argument into the `page.attributes` object,
creating a new `page.attributes` object if one did not already exist.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the page |

<a name="pagePlugin.addPageAttribute"></a>

### pagePlugin.addPageAttribute(name, value) ⇒ <code>object</code>
Records an additional fact about the page.

**Kind**: static method of [<code>pagePlugin</code>](#pagePlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Attribute name |
| value | <code>mixed</code> | Attribute value |

<a name="PlainPageCategory"></a>

## PlainPageCategory
Page categorization data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| primaryCategory | <code>string</code> | Top-level category of the page |
| subCategory | <code>string</code> | Sub-level category of the page |
| productType | <code>string</code> | Type of product in the page |

<a name="PlainPageInfo"></a>

## PlainPageInfo
Standard page information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pageID | <code>string</code> | Page's identifier |
| pageName | <code>string</code> | Page's name |
| destinationURL | <code>string</code> | Page's URL (ie. `document.location`) |
| referringURL | <code>string</code> | URL that referred user to the page   (ie. `document.referrer`) |
| sysEnv | <code>string</code> | Page's system environment |
| variant | <code>string</code> | Page variant (ie. A/B testing bucket) |
| version | <code>string</code> | Page's version number |
| breadCrumbs | <code>Array.&lt;string&gt;</code> | Page's bread crumbs (semantic path) |
| author | <code>string</code> | Name of the page's author |
| issueDate | <code>string</code> \| <code>Date</code> | Date page was issued on (JS Date or   ISO 8601) |
| effectiveDate | <code>string</code> \| <code>Date</code> | Page's effective date (JS Date or   ISO 8601) |
| expiryDate | <code>string</code> \| <code>Date</code> | Page's expiry date (JS Date or ISO 8601) |
| language | <code>string</code> | Human language the page is written in (ISO 639) |
| geoRegion | <code>string</code> | Geographic region (ie. country) (ISO 3166) |
| industryCodes | <code>string</code> | Industry codes page applies to (Standard   Industrial Classification [SIC] code) |
| publisher | <code>string</code> | Page's publisher name |

<a name="PlainPage"></a>

## PlainPage
Metadata describing a web page.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pageInfo | [<code>PlainPageInfo</code>](#PlainPageInfo) | Standard page information |
| category | [<code>PlainPageCategory</code>](#PlainPageCategory) | Page categorization data |
| attributes | <code>object</code> | Extensible key-value pairs describing   additional facts about the page |

