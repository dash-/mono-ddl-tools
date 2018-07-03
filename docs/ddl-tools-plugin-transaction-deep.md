<a name="trxDeepPlugin"></a>

## trxDeepPlugin
Plugin that adds detailed transaction-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxDeepPlugin from 'ddl-tools-plugin-transaction-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxDeepPlugin);
```

* [trxDeepPlugin](#trxDeepPlugin)
    * [.setTransactionProfileId(value)](#trxDeepPlugin.setTransactionProfileId) ⇒ <code>object</code>
    * [.setTransactionProfileUserName(value)](#trxDeepPlugin.setTransactionProfileUserName) ⇒ <code>object</code>
    * [.setTransactionProfileEmail(value)](#trxDeepPlugin.setTransactionProfileEmail) ⇒ <code>object</code>
    * [.setTransactionProfileAddressLine1(value)](#trxDeepPlugin.setTransactionProfileAddressLine1) ⇒ <code>object</code>
    * [.setTransactionProfileAddressLine2(value)](#trxDeepPlugin.setTransactionProfileAddressLine2) ⇒ <code>object</code>
    * [.setTransactionProfileAddressCity(value)](#trxDeepPlugin.setTransactionProfileAddressCity) ⇒ <code>object</code>
    * [.setTransactionProfileAddressStateProvince(value)](#trxDeepPlugin.setTransactionProfileAddressStateProvince) ⇒ <code>object</code>
    * [.setTransactionProfileAddressPostalCode(value)](#trxDeepPlugin.setTransactionProfileAddressPostalCode) ⇒ <code>object</code>
    * [.setTransactionProfileAddressCountry(value)](#trxDeepPlugin.setTransactionProfileAddressCountry) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddressLine1(value)](#trxDeepPlugin.setTransactionProfileShippingAddressLine1) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddressLine2(value)](#trxDeepPlugin.setTransactionProfileShippingAddressLine2) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddressCity(value)](#trxDeepPlugin.setTransactionProfileShippingAddressCity) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddressStateProvince(value)](#trxDeepPlugin.setTransactionProfileShippingAddressStateProvince) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddressPostalCode(value)](#trxDeepPlugin.setTransactionProfileShippingAddressPostalCode) ⇒ <code>object</code>
    * [.setTransactionProfileShippingAddressCountry(value)](#trxDeepPlugin.setTransactionProfileShippingAddressCountry) ⇒ <code>object</code>
    * [.setTransactionTotalBasePrice(value)](#trxDeepPlugin.setTransactionTotalBasePrice) ⇒ <code>object</code>
    * [.setTransactionTotalVoucherCode(value)](#trxDeepPlugin.setTransactionTotalVoucherCode) ⇒ <code>object</code>
    * [.setTransactionTotalVoucherDiscount(value)](#trxDeepPlugin.setTransactionTotalVoucherDiscount) ⇒ <code>object</code>
    * [.setTransactionTotalCurrency(value)](#trxDeepPlugin.setTransactionTotalCurrency) ⇒ <code>object</code>
    * [.setTransactionTotalTaxRate(value)](#trxDeepPlugin.setTransactionTotalTaxRate) ⇒ <code>object</code>
    * [.setTransactionTotalShipping(value)](#trxDeepPlugin.setTransactionTotalShipping) ⇒ <code>object</code>
    * [.setTransactionTotalShippingMethod(value)](#trxDeepPlugin.setTransactionTotalShippingMethod) ⇒ <code>object</code>
    * [.setTransactionTotalPriceWithTax(value)](#trxDeepPlugin.setTransactionTotalPriceWithTax) ⇒ <code>object</code>
    * [.setTransactionTotal(value)](#trxDeepPlugin.setTransactionTotal) ⇒ <code>object</code>

<a name="trxDeepPlugin.setTransactionProfileId"></a>

### trxDeepPlugin.setTransactionProfileId(value) ⇒ <code>object</code>
Records the identifier of the person conducting the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileUserName"></a>

### trxDeepPlugin.setTransactionProfileUserName(value) ⇒ <code>object</code>
Records the username of the person conducting the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileEmail"></a>

### trxDeepPlugin.setTransactionProfileEmail(value) ⇒ <code>object</code>
Records the email address of the person conducting the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileAddressLine1"></a>

### trxDeepPlugin.setTransactionProfileAddressLine1(value) ⇒ <code>object</code>
Records the first line of the address of the person conducting the
transaction (ie, street number and name).

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileAddressLine2"></a>

### trxDeepPlugin.setTransactionProfileAddressLine2(value) ⇒ <code>object</code>
Records the second line of the address of the person conducting the
transaction (ie. suite or apartment number).

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileAddressCity"></a>

### trxDeepPlugin.setTransactionProfileAddressCity(value) ⇒ <code>object</code>
Records the city portion of the address of the person conducting the
transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileAddressStateProvince"></a>

### trxDeepPlugin.setTransactionProfileAddressStateProvince(value) ⇒ <code>object</code>
Records the state/province portion of the address of the person conducting
the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileAddressPostalCode"></a>

### trxDeepPlugin.setTransactionProfileAddressPostalCode(value) ⇒ <code>object</code>
Records the postal code portion of the address of the person conducting the
transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileAddressCountry"></a>

### trxDeepPlugin.setTransactionProfileAddressCountry(value) ⇒ <code>object</code>
Records the country portion of the address of the person conducting the
transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileShippingAddressLine1"></a>

### trxDeepPlugin.setTransactionProfileShippingAddressLine1(value) ⇒ <code>object</code>
Records the first line of the shipping address of the person conducting the
transaction (ie. street number and name).

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileShippingAddressLine2"></a>

### trxDeepPlugin.setTransactionProfileShippingAddressLine2(value) ⇒ <code>object</code>
Records the second line of the shipping address of the person conducting
the transaction (ie. suite or apartment number).

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileShippingAddressCity"></a>

### trxDeepPlugin.setTransactionProfileShippingAddressCity(value) ⇒ <code>object</code>
Records the city portion of the shipping address of the person conducting
the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileShippingAddressStateProvince"></a>

### trxDeepPlugin.setTransactionProfileShippingAddressStateProvince(value) ⇒ <code>object</code>
Records the state/province portion of the shipping address of the person
conducting the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileShippingAddressPostalCode"></a>

### trxDeepPlugin.setTransactionProfileShippingAddressPostalCode(value) ⇒ <code>object</code>
Records the postal code portion of the shipping address of the person
conducting the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionProfileShippingAddressCountry"></a>

### trxDeepPlugin.setTransactionProfileShippingAddressCountry(value) ⇒ <code>object</code>
Records the country portion of the shipping address of the person
conducting the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalBasePrice"></a>

### trxDeepPlugin.setTransactionTotalBasePrice(value) ⇒ <code>object</code>
Records the amount of money owed excluding taxes and shipping in the
transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalVoucherCode"></a>

### trxDeepPlugin.setTransactionTotalVoucherCode(value) ⇒ <code>object</code>
Records the voucher code used in the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalVoucherDiscount"></a>

### trxDeepPlugin.setTransactionTotalVoucherDiscount(value) ⇒ <code>object</code>
Records the amount of discount applied due to the use of a voucher code in
the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalCurrency"></a>

### trxDeepPlugin.setTransactionTotalCurrency(value) ⇒ <code>object</code>
Records the type of currency reflected used in prices/monetary numbers (ie.
dollars versus british pounds).

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalTaxRate"></a>

### trxDeepPlugin.setTransactionTotalTaxRate(value) ⇒ <code>object</code>
Records the rate of taxes applied to the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalShipping"></a>

### trxDeepPlugin.setTransactionTotalShipping(value) ⇒ <code>object</code>
Records the amount of money owed for shipping in the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalShippingMethod"></a>

### trxDeepPlugin.setTransactionTotalShippingMethod(value) ⇒ <code>object</code>
Records the shipping method selected in the transaction (ie. standard
shipping versus priority shipping).

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotalPriceWithTax"></a>

### trxDeepPlugin.setTransactionTotalPriceWithTax(value) ⇒ <code>object</code>
Records the amount of money owed including taxes in the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="trxDeepPlugin.setTransactionTotal"></a>

### trxDeepPlugin.setTransactionTotal(value) ⇒ <code>object</code>
Records the total amount of money owed in the transaction.

**Kind**: static method of [<code>trxDeepPlugin</code>](#trxDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

