<a name="pageDeepPlugin"></a>

## pageDeepPlugin
Plugin that adds detailed page-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import pageDeepPlugin from 'ddl-tools-plugin-page-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(pageDeepPlugin);
```

* [pageDeepPlugin](#pageDeepPlugin)
    * [.setPageId(value)](#pageDeepPlugin.setPageId) ⇒ <code>object</code>
    * [.setPageName(value)](#pageDeepPlugin.setPageName) ⇒ <code>object</code>
    * [.setDestinationURL(value)](#pageDeepPlugin.setDestinationURL) ⇒ <code>object</code>
    * [.setReferringURL(value)](#pageDeepPlugin.setReferringURL) ⇒ <code>object</code>
    * [.setSysEnv(value)](#pageDeepPlugin.setSysEnv) ⇒ <code>object</code>
    * [.setVariant(value)](#pageDeepPlugin.setVariant) ⇒ <code>object</code>
    * [.setVersion(value)](#pageDeepPlugin.setVersion) ⇒ <code>object</code>
    * [.setBreadCrumbs(breadCrumbs)](#pageDeepPlugin.setBreadCrumbs) ⇒ <code>object</code>
    * [.setAuthor(value)](#pageDeepPlugin.setAuthor) ⇒ <code>object</code>
    * [.setIssueDate(value)](#pageDeepPlugin.setIssueDate) ⇒ <code>object</code>
    * [.setEffectiveDate(value)](#pageDeepPlugin.setEffectiveDate) ⇒ <code>object</code>
    * [.setExpiryDate(value)](#pageDeepPlugin.setExpiryDate) ⇒ <code>object</code>
    * [.setLanguage(value)](#pageDeepPlugin.setLanguage) ⇒ <code>object</code>
    * [.setGeoRegion(value)](#pageDeepPlugin.setGeoRegion) ⇒ <code>object</code>
    * [.setIndustryCodes(value)](#pageDeepPlugin.setIndustryCodes) ⇒ <code>object</code>
    * [.setPublisher(value)](#pageDeepPlugin.setPublisher) ⇒ <code>object</code>
    * [.setPagePrimaryCategory(value)](#pageDeepPlugin.setPagePrimaryCategory) ⇒ <code>object</code>
    * [.setPageSubCategory(value)](#pageDeepPlugin.setPageSubCategory) ⇒ <code>object</code>
    * [.setPageCategoryProductType(value)](#pageDeepPlugin.setPageCategoryProductType) ⇒ <code>object</code>

<a name="pageDeepPlugin.setPageId"></a>

### pageDeepPlugin.setPageId(value) ⇒ <code>object</code>
Records the page's identifier.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setPageName"></a>

### pageDeepPlugin.setPageName(value) ⇒ <code>object</code>
Records the page's name.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setDestinationURL"></a>

### pageDeepPlugin.setDestinationURL(value) ⇒ <code>object</code>
Records the page's destination URL (ie. `document.location`).

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setReferringURL"></a>

### pageDeepPlugin.setReferringURL(value) ⇒ <code>object</code>
Records the page's referring URL (ie. `document.referrer`).

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setSysEnv"></a>

### pageDeepPlugin.setSysEnv(value) ⇒ <code>object</code>
Records the page's system environment (ie. production vs development).

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setVariant"></a>

### pageDeepPlugin.setVariant(value) ⇒ <code>object</code>
Records the page variant (A/B testing).

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setVersion"></a>

### pageDeepPlugin.setVersion(value) ⇒ <code>object</code>
Records the page's version.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setBreadCrumbs"></a>

### pageDeepPlugin.setBreadCrumbs(breadCrumbs) ⇒ <code>object</code>
Records the page's bread crumbs (semantic path).

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| breadCrumbs | <code>Array.&lt;string&gt;</code> | path list within site hierarchy |

<a name="pageDeepPlugin.setAuthor"></a>

### pageDeepPlugin.setAuthor(value) ⇒ <code>object</code>
Records the name of the page's author.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setIssueDate"></a>

### pageDeepPlugin.setIssueDate(value) ⇒ <code>object</code>
Records the page's issue date. (JS Date or ISO 8601)

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setEffectiveDate"></a>

### pageDeepPlugin.setEffectiveDate(value) ⇒ <code>object</code>
Records the page's effective date. (JS Date or ISO 8601)

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setExpiryDate"></a>

### pageDeepPlugin.setExpiryDate(value) ⇒ <code>object</code>
Records the page's expiration date. (JS Date or ISO 8601)

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setLanguage"></a>

### pageDeepPlugin.setLanguage(value) ⇒ <code>object</code>
Records the human language the page is written in. (ISO 639)

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setGeoRegion"></a>

### pageDeepPlugin.setGeoRegion(value) ⇒ <code>object</code>
Records the geographic region the page applies to (ie. country). (ISO 3166)

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setIndustryCodes"></a>

### pageDeepPlugin.setIndustryCodes(value) ⇒ <code>object</code>
Records the industry codes the page applies to. (Standard Industrial
Classification / SIC code)

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setPublisher"></a>

### pageDeepPlugin.setPublisher(value) ⇒ <code>object</code>
Records the page's publisher name.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setPagePrimaryCategory"></a>

### pageDeepPlugin.setPagePrimaryCategory(value) ⇒ <code>object</code>
Records the primary category of the page.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setPageSubCategory"></a>

### pageDeepPlugin.setPageSubCategory(value) ⇒ <code>object</code>
Records the sub-level category of the page.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="pageDeepPlugin.setPageCategoryProductType"></a>

### pageDeepPlugin.setPageCategoryProductType(value) ⇒ <code>object</code>
Records the type of product in the page.

**Kind**: static method of [<code>pageDeepPlugin</code>](#pageDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

