## Constants

<dl>
<dt><a href="#trxPlugin">trxPlugin</a></dt>
<dd><p>Plugin that adds general transaction-related methods to ddl-tools.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlainProfileInfo">PlainProfileInfo</a></dt>
<dd><p>Standard limited personal information.</p>
</dd>
<dt><a href="#PlainProfileAddress">PlainProfileAddress</a></dt>
<dd><p>Standard physical / shipping address information.</p>
</dd>
<dt><a href="#PlainTransactionProfile">PlainTransactionProfile</a></dt>
<dd><p>Metadata describing a person associated with a transaction.</p>
</dd>
<dt><a href="#PlainTransactionTotal">PlainTransactionTotal</a></dt>
<dd><p>Metadata describing pricing information associated with the transaction.</p>
</dd>
<dt><a href="#PlainProductInfo">PlainProductInfo</a></dt>
<dd><p>Standard product information.</p>
</dd>
<dt><a href="#PlainProductCategory">PlainProductCategory</a></dt>
<dd><p>Product categorization data.</p>
</dd>
<dt><a href="#PlainPrice">PlainPrice</a></dt>
<dd><p>Standard pricing information.</p>
</dd>
<dt><a href="#PlainProduct">PlainProduct</a></dt>
<dd><p>Metadata describing a product.</p>
</dd>
<dt><a href="#PlainTransactionItem">PlainTransactionItem</a></dt>
<dd><p>Metadata describing a transaction item.</p>
</dd>
<dt><a href="#PlainTransaction">PlainTransaction</a></dt>
<dd><p>Metadata describing a transaction.</p>
</dd>
</dl>

<a name="trxPlugin"></a>

## trxPlugin
Plugin that adds general transaction-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxPlugin from 'ddl-tools-plugin-transaction';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxPlugin);
```

* [trxPlugin](#trxPlugin)
    * [.setTransaction(transaction)](#trxPlugin.setTransaction) ⇒ <code>object</code>
    * [.mergeTransaction(transaction)](#trxPlugin.mergeTransaction) ⇒ <code>object</code>
    * [.setTransactionId(transactionId)](#trxPlugin.setTransactionId) ⇒ <code>object</code>
    * [.setTransactionProfile(profile)](#trxPlugin.setTransactionProfile) ⇒ <code>object</code>
    * [.mergeTransactionProfile(profile)](#trxPlugin.mergeTransactionProfile) ⇒ <code>object</code>
    * [.setTransactionProfileInfo(profileInfo)](#trxPlugin.setTransactionProfileInfo) ⇒ <code>object</code>
    * [.mergeTransactionProfileInfo(profileInfo)](#trxPlugin.mergeTransactionProfileInfo) ⇒ <code>object</code>
    * [.setTransactionProfileAddress(address)](#trxPlugin.setTransactionProfileAddress) ⇒ <code>object</code>
    * [.mergeTransactionProfileAddress(address)](#trxPlugin.mergeTransactionProfileAddress) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddress(address)](#trxPlugin.setTransactionProfileShippingAddress) ⇒ <code>object</code>
    * [.mergeTransactionProfileShippingAddress(address)](#trxPlugin.mergeTransactionProfileShippingAddress) ⇒ <code>object</code>
    * [.setTransactionTotal(total)](#trxPlugin.setTransactionTotal) ⇒ <code>object</code>
    * [.mergeTransactionTotal(total)](#trxPlugin.mergeTransactionTotal) ⇒ <code>object</code>
    * [.setTransactionAttributes(attributes)](#trxPlugin.setTransactionAttributes) ⇒ <code>object</code>
    * [.mergeTransactionAttributes(attributes)](#trxPlugin.mergeTransactionAttributes) ⇒ <code>object</code>
    * [.addTransactionAttribute(name, value)](#trxPlugin.addTransactionAttribute) ⇒ <code>object</code>

<a name="trxPlugin.setTransaction"></a>

### trxPlugin.setTransaction(transaction) ⇒ <code>object</code>
Records transaction data by replacing `transaction` with the `transaction`
argument, destroying any existing transaction data.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| transaction | [<code>PlainTransaction</code>](#PlainTransaction) | Information about the transaction |

<a name="trxPlugin.mergeTransaction"></a>

### trxPlugin.mergeTransaction(transaction) ⇒ <code>object</code>
Updates transaction data by deeply merging the key/value pairs from the
`transaction` argument into the `transaction` object, creating a new
`transaction` object if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| transaction | [<code>PlainTransaction</code>](#PlainTransaction) | Information about the transaction |

<a name="trxPlugin.setTransactionId"></a>

### trxPlugin.setTransactionId(transactionId) ⇒ <code>object</code>
Records the identifier for the transaction.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> | Unique identifier for the transaction   (typically an order number) |

<a name="trxPlugin.setTransactionProfile"></a>

### trxPlugin.setTransactionProfile(profile) ⇒ <code>object</code>
Records information about the person conducting the transaction by
replacing `transaction.profile` with the `profile` argument, destroying any
existing transaction profile information.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>PlainTransactionProfile</code>](#PlainTransactionProfile) | Information about the person   conducting the transaction |

<a name="trxPlugin.mergeTransactionProfile"></a>

### trxPlugin.mergeTransactionProfile(profile) ⇒ <code>object</code>
Updates information about the person conducting the transaction by deeply
merging the key/value pairs from the `profile` argument into the
`transaction.profile` object, creating a new `transaction.profile` object
if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>PlainTransactionProfile</code>](#PlainTransactionProfile) | Information about the person   conducting the transaction |

<a name="trxPlugin.setTransactionProfileInfo"></a>

### trxPlugin.setTransactionProfileInfo(profileInfo) ⇒ <code>object</code>
Records key personal information about the person conducting the
transaction by replacing `transaction.profile.profileInfo` with the
`profileInfo` argument, destroying any existing key personal information.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Personal information about customer |

<a name="trxPlugin.mergeTransactionProfileInfo"></a>

### trxPlugin.mergeTransactionProfileInfo(profileInfo) ⇒ <code>object</code>
Updates key personal information about the person conducting the
transaction by deeply merging the key/value pairs from the `profileInfo`
argument into the `transaction.profile.profileInfo` object, creating a new
`transaction.profile.profileInfo` object if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Personal information about customer |

<a name="trxPlugin.setTransactionProfileAddress"></a>

### trxPlugin.setTransactionProfileAddress(address) ⇒ <code>object</code>
Records the primary address of the person conducting the transaction by
replacing `transaction.profile.address` with the `address` argument,
destroying any existing primary address information.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Customer's primary address |

<a name="trxPlugin.mergeTransactionProfileAddress"></a>

### trxPlugin.mergeTransactionProfileAddress(address) ⇒ <code>object</code>
Updates the primary address of the person conducting the transaction by
deeply merging the key/value pairs from the `address` argument into the
`transaction.profile.address` object, creating a new
`transaction.profile.address` object if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Customer's primary address |

<a name="trxPlugin.setTransactionProfileShippingAddress"></a>

### trxPlugin.setTransactionProfileShippingAddress(address) ⇒ <code>object</code>
Records the shipping address of the person conducting the transaction by
replacing `transaction.profile.shippingAddress` with the `address`
argument, destroying any existing shipping address information.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Address products are to be shipped to |

<a name="trxPlugin.mergeTransactionProfileShippingAddress"></a>

### trxPlugin.mergeTransactionProfileShippingAddress(address) ⇒ <code>object</code>
Updates the shipping address of the person conducting the transaction by
deeply merging the key/value pairs from the `address` argument into the
`transaction.profile.shippingAddress` object, creating a new
`transaction.profile.shippingAddress` object if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Address products are to be shipped to |

<a name="trxPlugin.setTransactionTotal"></a>

### trxPlugin.setTransactionTotal(total) ⇒ <code>object</code>
Records transaction cost information by replacing `transaction.total` with
the `total` argument, destroying any existing transaction cost information.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| total | [<code>PlainTransactionTotal</code>](#PlainTransactionTotal) | Transaction cost information |

<a name="trxPlugin.mergeTransactionTotal"></a>

### trxPlugin.mergeTransactionTotal(total) ⇒ <code>object</code>
Updates transaction cost information by deeply merging the key/value pairs
from the `total` argument into the `transaction.total` object, creating a
new `transaction.total` object if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| total | [<code>PlainTransactionTotal</code>](#PlainTransactionTotal) | Transaction cost information |

<a name="trxPlugin.setTransactionAttributes"></a>

### trxPlugin.setTransactionAttributes(attributes) ⇒ <code>object</code>
Records additional facts about the transaction by replacing
`transaction.attributes` with the `attributes` argument, destroying any
existing attributes.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the transaction |

<a name="trxPlugin.mergeTransactionAttributes"></a>

### trxPlugin.mergeTransactionAttributes(attributes) ⇒ <code>object</code>
Updates additional facts about the transaction by deeply merging the
key/value pairs from the `attributes` argument into the
`transaction.attributes` object, creating a new `transaction.attributes`
object if one did not already exist.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the transaction |

<a name="trxPlugin.addTransactionAttribute"></a>

### trxPlugin.addTransactionAttribute(name, value) ⇒ <code>object</code>
Records an additional fact about the transaction.

**Kind**: static method of [<code>trxPlugin</code>](#trxPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Attribute name |
| value | <code>mixed</code> | Attribute value |

<a name="PlainProfileInfo"></a>

## PlainProfileInfo
Standard limited personal information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| profileID | <code>string</code> | Customer's unique identifier |
| userName | <code>string</code> | Customer's user name |
| email | <code>string</code> | Customer's email address |

<a name="PlainProfileAddress"></a>

## PlainProfileAddress
Standard physical / shipping address information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| line1 | <code>string</code> | ie. Street number and name |
| line2 | <code>string</code> | ie. Suite or apartment number |
| city | <code>string</code> | City customer resides in |
| stateProvince | <code>string</code> | State customer resides in |
| postalCode | <code>string</code> | Customer's postal code |
| country | <code>string</code> | Country customer resides in (ISO 3166) |

<a name="PlainTransactionProfile"></a>

## PlainTransactionProfile
Metadata describing a person associated with a transaction.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Personal information about   customer |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Customer's primary address |
| shippingAddress | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Address products are to be   shipped to |

<a name="PlainTransactionTotal"></a>

## PlainTransactionTotal
Metadata describing pricing information associated with the transaction.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| basePrice | <code>number</code> | Amount of money owed excluding taxes   and shipping in the transaction |
| voucherCode | <code>string</code> | Voucher code if one was used |
| voucherDiscount | <code>number</code> | Amount of discount applied due to   the use of a voucher code |
| currency | <code>string</code> | Type of currency used in prices/monetary   numbers (ie. dollars versus british pounds) |
| taxRate | <code>number</code> | Rate of taxes applied |
| shipping | <code>number</code> | Amount of money owed for shipping |
| shippingMethod | <code>string</code> | Shipping method selected in the   transaction (ie. standard shipping versus priority shipping) |
| priceWithTax | <code>number</code> | Amount of money owed including taxes |
| transactionTotal | <code>number</code> | Total amount of money owed |

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

<a name="PlainPrice"></a>

## PlainPrice
Standard pricing information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| basePrice | <code>number</code> | Price excluding taxes and shipping |
| voucherCode | <code>string</code> | Code used for a discount |
| voucherDiscount | <code>number</code> | Amount of discount applied due to the   use of a voucher code |
| currency | <code>string</code> | Selected type of currency that these prices are   in (ie. US dollars vs. British pounds) |
| taxRate | <code>number</code> | Rate of taxes to be applied |
| shipping | <code>number</code> | Price of shipping |
| shippingMethod | <code>string</code> | Selected shipping method (ie. standard   shipping vs. priority) |
| priceWithTax | <code>number</code> | Total price including taxes but excluding   shipping. |

<a name="PlainProduct"></a>

## PlainProduct
Metadata describing a product.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| productInfo | [<code>PlainProductInfo</code>](#PlainProductInfo) | Standard product information |

<a name="PlainTransactionItem"></a>

## PlainTransactionItem
Metadata describing a transaction item.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| productInfo | [<code>PlainProductInfo</code>](#PlainProductInfo) | Standard product information |
| category | [<code>PlainProductCategory</code>](#PlainProductCategory) | Product categorization data |
| quantity | <code>number</code> | Integer describing the count of this item type |
| price | [<code>PlainPrice</code>](#PlainPrice) | Standard pricing information |
| linkedProduct | [<code>Array.&lt;PlainProduct&gt;</code>](#PlainProduct) | List of data describing products   linked to the cart item |
| attributes | <code>object</code> | Additional facts about the transaction item |

<a name="PlainTransaction"></a>

## PlainTransaction
Metadata describing a transaction.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| transactionID | <code>string</code> | Unique identifier for the transaction |
| profile | [<code>PlainTransactionProfile</code>](#PlainTransactionProfile) | User profile data associated   with the transaction |
| total | [<code>PlainTransactionTotal</code>](#PlainTransactionTotal) | Pricing information associated with   the transaction |
| attributes | <code>object</code> | Additional facts about the transaction |
| item | [<code>Array.&lt;PlainTransactionItem&gt;</code>](#PlainTransactionItem) | List of items associated with the   transaction |

