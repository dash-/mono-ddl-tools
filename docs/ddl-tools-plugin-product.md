## Classes

<dl>
<dt><a href="#Product">Product</a></dt>
<dd><p>Helper class to build product objects for use in a digital data layer.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#productPlugin">productPlugin</a></dt>
<dd><p>Plugin that adds general product-related methods and a sub-class to
ddl-tools.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlainProductCategory">PlainProductCategory</a></dt>
<dd><p>Product categorization data.</p>
</dd>
<dt><a href="#PlainProductInfo">PlainProductInfo</a></dt>
<dd><p>Standard product information.</p>
</dd>
<dt><a href="#PlainProduct">PlainProduct</a></dt>
<dd><p>Metadata describing a product.</p>
</dd>
</dl>

<a name="Product"></a>

## Product
Helper class to build product objects for use in a digital data layer.

**Kind**: global class  

* [Product](#Product)
    * [new Product([product])](#new_Product_new)
    * _instance_
        * [.setProductInfo(productInfo)](#Product+setProductInfo) ⇒ [<code>Product</code>](#Product)
        * [.mergeProductInfo(productInfo)](#Product+mergeProductInfo) ⇒ [<code>Product</code>](#Product)
        * [.setCategory(category)](#Product+setCategory) ⇒ [<code>Product</code>](#Product)
        * [.mergeCategory(category)](#Product+mergeCategory) ⇒ [<code>Product</code>](#Product)
        * [.setAttributes(attributes)](#Product+setAttributes) ⇒ [<code>Product</code>](#Product)
        * [.mergeAttributes(attributes)](#Product+mergeAttributes) ⇒ [<code>Product</code>](#Product)
        * [.addAttribute(name, value)](#Product+addAttribute) ⇒ [<code>Product</code>](#Product)
        * [.setProductId(value)](#Product+setProductId) ⇒ [<code>Product</code>](#Product)
        * [.setProductName(value)](#Product+setProductName) ⇒ [<code>Product</code>](#Product)
        * [.setDescription(value)](#Product+setDescription) ⇒ [<code>Product</code>](#Product)
        * [.setProductURL(value)](#Product+setProductURL) ⇒ [<code>Product</code>](#Product)
        * [.setProductImage(value)](#Product+setProductImage) ⇒ [<code>Product</code>](#Product)
        * [.setProductThumbnail(value)](#Product+setProductThumbnail) ⇒ [<code>Product</code>](#Product)
        * [.setManufacturer(value)](#Product+setManufacturer) ⇒ [<code>Product</code>](#Product)
        * [.setSku(value)](#Product+setSku) ⇒ [<code>Product</code>](#Product)
        * [.setColor(value)](#Product+setColor) ⇒ [<code>Product</code>](#Product)
        * [.setSize(value)](#Product+setSize) ⇒ [<code>Product</code>](#Product)
        * [.setPrimaryCategory(value)](#Product+setPrimaryCategory) ⇒ [<code>Product</code>](#Product)
        * [.setSubCategory(value)](#Product+setSubCategory) ⇒ [<code>Product</code>](#Product)
        * [.setCategoryProductType(value)](#Product+setCategoryProductType) ⇒ [<code>Product</code>](#Product)
    * _static_
        * [.normalize(product)](#Product.normalize) ⇒ [<code>PlainProduct</code>](#PlainProduct)

<a name="new_Product_new"></a>

### new Product([product])
Instantiates a new Product.


| Param | Type | Description |
| --- | --- | --- |
| [product] | [<code>PlainProduct</code>](#PlainProduct) | Data describing the product |

<a name="Product+setProductInfo"></a>

### product.setProductInfo(productInfo) ⇒ [<code>Product</code>](#Product)
Sets standard product information by replacing `productInfo` with the
`productInfo` argument, destroying any existing standard product
information.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| productInfo | [<code>PlainProductInfo</code>](#PlainProductInfo) | Standard product information |

<a name="Product+mergeProductInfo"></a>

### product.mergeProductInfo(productInfo) ⇒ [<code>Product</code>](#Product)
Updates standard product information by deeply merging the key/value pairs
from the `productInfo` argument into the `productInfo` object, creating a
new `productInfo` object if one did not already exist.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| productInfo | [<code>PlainProductInfo</code>](#PlainProductInfo) | Standard product information |

<a name="Product+setCategory"></a>

### product.setCategory(category) ⇒ [<code>Product</code>](#Product)
Sets product categorization data by replacing `category` with the
`category` argument, destroying any existing product categorization data.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| category | [<code>PlainProductCategory</code>](#PlainProductCategory) | Product categorization data |

<a name="Product+mergeCategory"></a>

### product.mergeCategory(category) ⇒ [<code>Product</code>](#Product)
Updates product categorization data by deeply merging the key/value pairs
from the `category` argument into the `category` object, creating a
new `category` object if one did not already exist.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| category | [<code>PlainProductCategory</code>](#PlainProductCategory) | Product categorization data |

<a name="Product+setAttributes"></a>

### product.setAttributes(attributes) ⇒ [<code>Product</code>](#Product)
Sets additional facts about the product by replacing `attributes` with the
`attributes` argument, destroying any existing attributes.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the product |

<a name="Product+mergeAttributes"></a>

### product.mergeAttributes(attributes) ⇒ [<code>Product</code>](#Product)
Updates additional facts about the product by deeply merging the key/value
pairs from the `attributes` argument into the `attributes` object, creating
a new `attributes` object if one did not already exist.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the product |

<a name="Product+addAttribute"></a>

### product.addAttribute(name, value) ⇒ [<code>Product</code>](#Product)
Sets an additional fact about the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Attribute name |
| value | <code>mixed</code> | Attribute value |

<a name="Product+setProductId"></a>

### product.setProductId(value) ⇒ [<code>Product</code>](#Product)
Sets the unique identifier of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setProductName"></a>

### product.setProductName(value) ⇒ [<code>Product</code>](#Product)
Sets the name of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setDescription"></a>

### product.setDescription(value) ⇒ [<code>Product</code>](#Product)
Sets the description of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setProductURL"></a>

### product.setProductURL(value) ⇒ [<code>Product</code>](#Product)
Sets the URL of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setProductImage"></a>

### product.setProductImage(value) ⇒ [<code>Product</code>](#Product)
Sets the image of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setProductThumbnail"></a>

### product.setProductThumbnail(value) ⇒ [<code>Product</code>](#Product)
Sets the thumbnail of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setManufacturer"></a>

### product.setManufacturer(value) ⇒ [<code>Product</code>](#Product)
Sets the manufacturer of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setSku"></a>

### product.setSku(value) ⇒ [<code>Product</code>](#Product)
Sets the sku of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setColor"></a>

### product.setColor(value) ⇒ [<code>Product</code>](#Product)
Sets the color of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setSize"></a>

### product.setSize(value) ⇒ [<code>Product</code>](#Product)
Sets the size of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setPrimaryCategory"></a>

### product.setPrimaryCategory(value) ⇒ [<code>Product</code>](#Product)
Sets the primary category of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setSubCategory"></a>

### product.setSubCategory(value) ⇒ [<code>Product</code>](#Product)
Sets the sub-level category of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product+setCategoryProductType"></a>

### product.setCategoryProductType(value) ⇒ [<code>Product</code>](#Product)
Sets the type of the product.

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: [<code>Product</code>](#Product) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Product.normalize"></a>

### Product.normalize(product) ⇒ [<code>PlainProduct</code>](#PlainProduct)
Transforms a plain product or a Product class instance into a plain
javascript object and returns it.

**Kind**: static method of [<code>Product</code>](#Product)  
**Returns**: [<code>PlainProduct</code>](#PlainProduct) - - The normalized form of the given product  

| Param | Type | Description |
| --- | --- | --- |
| product | [<code>PlainProduct</code>](#PlainProduct) \| [<code>Product</code>](#Product) | The product object to normalize |

<a name="productPlugin"></a>

## productPlugin
Plugin that adds general product-related methods and a sub-class to
ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import productPlugin from 'ddl-tools-plugin-product';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(productPlugin);
```

* [productPlugin](#productPlugin)
    * [.Product](#productPlugin.Product)
    * [.addProduct(product)](#productPlugin.addProduct) ⇒ <code>object</code>

<a name="productPlugin.Product"></a>

### productPlugin.Product
The Product class.

**Kind**: static property of [<code>productPlugin</code>](#productPlugin)  
**See**: Product  
<a name="productPlugin.addProduct"></a>

### productPlugin.addProduct(product) ⇒ <code>object</code>
Adds a product to the list of products.

**Kind**: static method of [<code>productPlugin</code>](#productPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| product | [<code>PlainProduct</code>](#PlainProduct) \| [<code>Product</code>](#Product) | The product to add |

**Example**  
```js
ddlTools.addProduct({
productID: '1234a',
productName: 'Example Product',
description: 'Amazing new example product',
});
```
**Example**  
```js
const product = new ddlTools.Product();
product
.setProductId('1234a')
.setProductName('Example Product')
.setDescription('Amazing new example product');
ddlTools.addProduct(product);
```
<a name="PlainProductCategory"></a>

## PlainProductCategory
Product categorization data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| primaryCategory | <code>string</code> | Top-level category of the product |
| subCategory | <code>string</code> | Sub-level category of the product |
| productType | <code>string</code> | Type of product |

<a name="PlainProductInfo"></a>

## PlainProductInfo
Standard product information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| productID | <code>string</code> | Unique identifier for the product |
| productName | <code>string</code> | Human-friendly name of the product |
| description | <code>string</code> | Human-friendly product description |
| productURL | <code>string</code> | Web address for the product |
| productImage | <code>string</code> | Regular-sized image of the product |
| productThumbnail | <code>string</code> | Thumbnail-sized image of the product |
| manufacturer | <code>string</code> | Name of the company that makes the product |
| sku | <code>string</code> | Stock Keeping Unit identification code |
| color | <code>string</code> | The color of the product in the cart |
| size | <code>string</code> | The physical dimensions of the product in the car |

<a name="PlainProduct"></a>

## PlainProduct
Metadata describing a product.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| productInfo | [<code>PlainProductInfo</code>](#PlainProductInfo) | Standard product information |
| category | [<code>PlainProductCategory</code>](#PlainProductCategory) | Product categorization data |
| linkedProduct | [<code>Array.&lt;PlainProduct&gt;</code>](#PlainProduct) | List of data describing products   linked to the product |
| attributes | <code>object</code> | Extensible key-value pairs describing   additional facts about the product |

