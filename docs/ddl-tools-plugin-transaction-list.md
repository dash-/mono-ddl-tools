## Classes

<dl>
<dt><a href="#TransactionListItem">TransactionListItem</a></dt>
<dd><p>Helper class to build transaction list item objects for use in a digital data
layer.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#trxListPlugin">trxListPlugin</a></dt>
<dd><p>Plugin that adds transaction-list-related methods to ddl-tools.</p>
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

<a name="TransactionListItem"></a>

## TransactionListItem
Helper class to build transaction list item objects for use in a digital data
layer.

**Kind**: global class  

* [TransactionListItem](#TransactionListItem)
    * _instance_
        * [.setTransactionId(transactionId)](#TransactionListItem+setTransactionId) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setProfile(profile)](#TransactionListItem+setProfile) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.mergeProfile(profile)](#TransactionListItem+mergeProfile) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setProfileInfo(profileInfo)](#TransactionListItem+setProfileInfo) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.mergeProfileInfo(profileInfo)](#TransactionListItem+mergeProfileInfo) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddress(address)](#TransactionListItem+setAddress) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.mergeAddress(address)](#TransactionListItem+mergeAddress) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddress(address)](#TransactionListItem+setShippingAddress) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.mergeShippingAddress(address)](#TransactionListItem+mergeShippingAddress) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setTotal(total)](#TransactionListItem+setTotal) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.mergeTotal(total)](#TransactionListItem+mergeTotal) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAttributes(attributes)](#TransactionListItem+setAttributes) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.mergeAttributes(attributes)](#TransactionListItem+mergeAttributes) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.addAttribute(name, value)](#TransactionListItem+addAttribute) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setProfileId(value)](#TransactionListItem+setProfileId) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setUserName(value)](#TransactionListItem+setUserName) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setEmail(value)](#TransactionListItem+setEmail) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddressLine1(value)](#TransactionListItem+setAddressLine1) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddressLine2(value)](#TransactionListItem+setAddressLine2) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddressCity(value)](#TransactionListItem+setAddressCity) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddressStateProvince(value)](#TransactionListItem+setAddressStateProvince) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddressPostalCode(value)](#TransactionListItem+setAddressPostalCode) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setAddressCountry(value)](#TransactionListItem+setAddressCountry) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddressLine1(value)](#TransactionListItem+setShippingAddressLine1) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddressLine2(value)](#TransactionListItem+setShippingAddressLine2) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddressCity(value)](#TransactionListItem+setShippingAddressCity) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddressStateProvince(value)](#TransactionListItem+setShippingAddressStateProvince) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddressPostalCode(value)](#TransactionListItem+setShippingAddressPostalCode) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingAddressCountry(value)](#TransactionListItem+setShippingAddressCountry) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setBasePrice(value)](#TransactionListItem+setBasePrice) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setVoucherCode(value)](#TransactionListItem+setVoucherCode) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setVoucherDiscount(value)](#TransactionListItem+setVoucherDiscount) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setCurrency(value)](#TransactionListItem+setCurrency) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setTaxRate(value)](#TransactionListItem+setTaxRate) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShipping(value)](#TransactionListItem+setShipping) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setShippingMethod(value)](#TransactionListItem+setShippingMethod) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setPriceWithTax(value)](#TransactionListItem+setPriceWithTax) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
        * [.setTransactionTotal(value)](#TransactionListItem+setTransactionTotal) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
    * _static_
        * [.normalize(item)](#TransactionListItem.normalize) ⇒ <code>PlainTransactionListItem</code>

<a name="TransactionListItem+setTransactionId"></a>

### transactionListItem.setTransactionId(transactionId) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the identifier for the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| transactionId | <code>string</code> | Unique identifier for the transaction   (typically an order number) |

<a name="TransactionListItem+setProfile"></a>

### transactionListItem.setProfile(profile) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets information about the person conducting the transaction by
replacing `transaction.profile` with the `profile` argument, destroying any
existing transaction profile information.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>PlainTransactionProfile</code>](#PlainTransactionProfile) | Information about the person   conducting the transaction |

<a name="TransactionListItem+mergeProfile"></a>

### transactionListItem.mergeProfile(profile) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Updates information about the person conducting the transaction by deeply
merging the key/value pairs from the `profile` argument into the
`transaction.profile` object, creating a new `transaction.profile` object
if one did not already exist.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>PlainTransactionProfile</code>](#PlainTransactionProfile) | Information about the person   conducting the transaction |

<a name="TransactionListItem+setProfileInfo"></a>

### transactionListItem.setProfileInfo(profileInfo) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets key personal information about the person conducting the
transaction by replacing `transaction.profile.profileInfo` with the
`profileInfo` argument, destroying any existing key personal information.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Personal information about customer |

<a name="TransactionListItem+mergeProfileInfo"></a>

### transactionListItem.mergeProfileInfo(profileInfo) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Updates key personal information about the person conducting the
transaction by deeply merging the key/value pairs from the `profileInfo`
argument into the `transaction.profile.profileInfo` object, creating a new
`transaction.profile.profileInfo` object if one did not already exist.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Personal information about customer |

<a name="TransactionListItem+setAddress"></a>

### transactionListItem.setAddress(address) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the primary address of the person conducting the transaction by
replacing `transaction.profile.address` with the `address` argument,
destroying any existing primary address information.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Customer's primary address |

<a name="TransactionListItem+mergeAddress"></a>

### transactionListItem.mergeAddress(address) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Updates the primary address of the person conducting the transaction by
deeply merging the key/value pairs from the `address` argument into the
`transaction.profile.address` object, creating a new
`transaction.profile.address` object if one did not already exist.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Customer's primary address |

<a name="TransactionListItem+setShippingAddress"></a>

### transactionListItem.setShippingAddress(address) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the shipping address of the person conducting the transaction by
replacing `transaction.profile.shippingAddress` with the `address`
argument, destroying any existing shipping address information.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Address products are to be shipped to |

<a name="TransactionListItem+mergeShippingAddress"></a>

### transactionListItem.mergeShippingAddress(address) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Updates the shipping address of the person conducting the transaction by
deeply merging the key/value pairs from the `address` argument into the
`transaction.profile.shippingAddress` object, creating a new
`transaction.profile.shippingAddress` object if one did not already exist.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Address products are to be shipped to |

<a name="TransactionListItem+setTotal"></a>

### transactionListItem.setTotal(total) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets transaction cost information by replacing `transaction.total` with
the `total` argument, destroying any existing transaction cost information.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| total | [<code>PlainTransactionTotal</code>](#PlainTransactionTotal) | Transaction cost information |

<a name="TransactionListItem+mergeTotal"></a>

### transactionListItem.mergeTotal(total) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Updates transaction cost information by deeply merging the key/value pairs
from the `total` argument into the `transaction.total` object, creating a
new `transaction.total` object if one did not already exist.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| total | [<code>PlainTransactionTotal</code>](#PlainTransactionTotal) | Transaction cost information |

<a name="TransactionListItem+setAttributes"></a>

### transactionListItem.setAttributes(attributes) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets additional facts about the transaction by replacing
`transaction.attributes` with the `attributes` argument, destroying any
existing attributes.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the transaction |

<a name="TransactionListItem+mergeAttributes"></a>

### transactionListItem.mergeAttributes(attributes) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Updates additional facts about the transaction by deeply merging the
key/value pairs from the `attributes` argument into the
`transaction.attributes` object, creating a new `transaction.attributes`
object if one did not already exist.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the transaction |

<a name="TransactionListItem+addAttribute"></a>

### transactionListItem.addAttribute(name, value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets an additional fact about the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Attribute name |
| value | <code>mixed</code> | Attribute value |

<a name="TransactionListItem+setProfileId"></a>

### transactionListItem.setProfileId(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the identifier of the person conducting the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setUserName"></a>

### transactionListItem.setUserName(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the username of the person conducting the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setEmail"></a>

### transactionListItem.setEmail(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the email address of the person conducting the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setAddressLine1"></a>

### transactionListItem.setAddressLine1(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the first line of the address of the person conducting the
transaction (ie, street number and name).

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setAddressLine2"></a>

### transactionListItem.setAddressLine2(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the second line of the address of the person conducting the
transaction (ie. suite or apartment number).

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setAddressCity"></a>

### transactionListItem.setAddressCity(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the city portion of the address of the person conducting the
transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setAddressStateProvince"></a>

### transactionListItem.setAddressStateProvince(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the state/province portion of the address of the person conducting
the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setAddressPostalCode"></a>

### transactionListItem.setAddressPostalCode(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the postal code portion of the address of the person conducting the
transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setAddressCountry"></a>

### transactionListItem.setAddressCountry(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the country portion of the address of the person conducting the
transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingAddressLine1"></a>

### transactionListItem.setShippingAddressLine1(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the first line of the shipping address of the person conducting the
transaction (ie. street number and name).

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingAddressLine2"></a>

### transactionListItem.setShippingAddressLine2(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the second line of the shipping address of the person conducting
the transaction (ie. suite or apartment number).

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingAddressCity"></a>

### transactionListItem.setShippingAddressCity(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the city portion of the shipping address of the person conducting
the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingAddressStateProvince"></a>

### transactionListItem.setShippingAddressStateProvince(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the state/province portion of the shipping address of the person
conducting the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingAddressPostalCode"></a>

### transactionListItem.setShippingAddressPostalCode(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the postal code portion of the shipping address of the person
conducting the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingAddressCountry"></a>

### transactionListItem.setShippingAddressCountry(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the country portion of the shipping address of the person
conducting the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setBasePrice"></a>

### transactionListItem.setBasePrice(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the amount of money owed excluding taxes and shipping in the
transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setVoucherCode"></a>

### transactionListItem.setVoucherCode(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the voucher code used in the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setVoucherDiscount"></a>

### transactionListItem.setVoucherDiscount(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the amount of discount applied due to the use of a voucher code in
the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setCurrency"></a>

### transactionListItem.setCurrency(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the type of currency reflected used in prices/monetary numbers (ie.
dollars versus british pounds).

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setTaxRate"></a>

### transactionListItem.setTaxRate(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the rate of taxes applied to the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShipping"></a>

### transactionListItem.setShipping(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the amount of money owed for shipping in the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setShippingMethod"></a>

### transactionListItem.setShippingMethod(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the shipping method selected in the transaction (ie. standard
shipping versus priority shipping).

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setPriceWithTax"></a>

### transactionListItem.setPriceWithTax(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the amount of money owed including taxes in the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem+setTransactionTotal"></a>

### transactionListItem.setTransactionTotal(value) ⇒ [<code>TransactionListItem</code>](#TransactionListItem)
Sets the total amount of money owed in the transaction.

**Kind**: instance method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: [<code>TransactionListItem</code>](#TransactionListItem) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="TransactionListItem.normalize"></a>

### TransactionListItem.normalize(item) ⇒ <code>PlainTransactionListItem</code>
Transforms a plain transaction list item or a TransactionListItem class
instance into a plain javascript object and returns it.

**Kind**: static method of [<code>TransactionListItem</code>](#TransactionListItem)  
**Returns**: <code>PlainTransactionListItem</code> - - The normalized form of the given item  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>PlainTransactionListItem</code> \| [<code>TransactionListItem</code>](#TransactionListItem) | The   transaction list item object to normalize |

<a name="trxListPlugin"></a>

## trxListPlugin
Plugin that adds transaction-list-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxListPlugin from 'ddl-tools-plugin-transaction-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxListPlugin);
```

* [trxListPlugin](#trxListPlugin)
    * [.TransactionListItem](#trxListPlugin.TransactionListItem)
    * [.addTransactionListItem(item)](#trxListPlugin.addTransactionListItem) ⇒ <code>object</code>

<a name="trxListPlugin.TransactionListItem"></a>

### trxListPlugin.TransactionListItem
The TransactionListItem class.

**Kind**: static property of [<code>trxListPlugin</code>](#trxListPlugin)  
**See**: TransactionListItem  
<a name="trxListPlugin.addTransactionListItem"></a>

### trxListPlugin.addTransactionListItem(item) ⇒ <code>object</code>
Adds a transaction list item to the transaction list array.

**Kind**: static method of [<code>trxListPlugin</code>](#trxListPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>PlainTransactionListItem</code> \| [<code>TransactionListItem</code>](#TransactionListItem) | The   transaction list item to add |

**Example**  
```js
const trxListItem = new ddlTools.TransactionListItem();
trxListItem.setTransactionTotal(total);
ddlTools.addTransactionListItem(trxListItem);
```
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

