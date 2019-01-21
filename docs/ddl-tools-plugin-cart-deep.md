<a name="cartDeepPlugin"></a>

## cartDeepPlugin
Plugin that adds detailed cart-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import cartDeepPlugin from 'ddl-tools-plugin-cart-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(cartDeepPlugin);
```

* [cartDeepPlugin](#cartDeepPlugin)
    * [.setCartPriceBasePrice(value)](#cartDeepPlugin.setCartPriceBasePrice) ⇒ <code>object</code>
    * [.setCartPriceVoucherCode(value)](#cartDeepPlugin.setCartPriceVoucherCode) ⇒ <code>object</code>
    * [.setCartPriceVoucherDiscount(value)](#cartDeepPlugin.setCartPriceVoucherDiscount) ⇒ <code>object</code>
    * [.setCartPriceCurrency(value)](#cartDeepPlugin.setCartPriceCurrency) ⇒ <code>object</code>
    * [.setCartPriceTaxRate(value)](#cartDeepPlugin.setCartPriceTaxRate) ⇒ <code>object</code>
    * [.setCartPriceShipping(value)](#cartDeepPlugin.setCartPriceShipping) ⇒ <code>object</code>
    * [.setCartPriceShippingMethod(value)](#cartDeepPlugin.setCartPriceShippingMethod) ⇒ <code>object</code>
    * [.setCartPricePriceWithTax(value)](#cartDeepPlugin.setCartPricePriceWithTax) ⇒ <code>object</code>
    * [.setCartPriceCartTotal(value)](#cartDeepPlugin.setCartPriceCartTotal) ⇒ <code>object</code>

<a name="cartDeepPlugin.setCartPriceBasePrice"></a>

### cartDeepPlugin.setCartPriceBasePrice(value) ⇒ <code>object</code>
Records the price of all the items in the cart, excluding taxes and
shipping.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceVoucherCode"></a>

### cartDeepPlugin.setCartPriceVoucherCode(value) ⇒ <code>object</code>
Records the voucher code being used.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceVoucherDiscount"></a>

### cartDeepPlugin.setCartPriceVoucherDiscount(value) ⇒ <code>object</code>
Records the amount of discount applied due to the use of a voucher code.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceCurrency"></a>

### cartDeepPlugin.setCartPriceCurrency(value) ⇒ <code>object</code>
Records the selected type of currency that all cart prices are in (ie. US
dollars vs. British pounds).

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceTaxRate"></a>

### cartDeepPlugin.setCartPriceTaxRate(value) ⇒ <code>object</code>
Records the tax rate applied to the cart total.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceShipping"></a>

### cartDeepPlugin.setCartPriceShipping(value) ⇒ <code>object</code>
Records the price of shipping.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceShippingMethod"></a>

### cartDeepPlugin.setCartPriceShippingMethod(value) ⇒ <code>object</code>
Records the selected shipping method (ie. standard shipping vs. priority).

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPricePriceWithTax"></a>

### cartDeepPlugin.setCartPricePriceWithTax(value) ⇒ <code>object</code>
Records total price of all items in the shopping cart, including taxes but
excluding shipping.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartDeepPlugin.setCartPriceCartTotal"></a>

### cartDeepPlugin.setCartPriceCartTotal(value) ⇒ <code>object</code>
Records grand total price of all items in the shopping cart, including
taxes and shipping.

**Kind**: static method of [<code>cartDeepPlugin</code>](#cartDeepPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

