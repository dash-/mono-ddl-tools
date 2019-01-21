## Constants

<dl>
<dt><a href="#cartPlugin">cartPlugin</a></dt>
<dd><p>Plugin that adds general cart-related methods to ddl-tools.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlainCategory">PlainCategory</a></dt>
<dd><p>Categorization data.</p>
</dd>
<dt><a href="#PlainPrice">PlainPrice</a></dt>
<dd><p>Standard pricing information.</p>
</dd>
<dt><a href="#PlainCartPrice">PlainCartPrice</a> ⇐ <code><a href="#PlainPrice">PlainPrice</a></code></dt>
<dd><p>Standard pricing information for a cart.</p>
</dd>
<dt><a href="#PlainProductInfo">PlainProductInfo</a></dt>
<dd><p>Standard product information.</p>
</dd>
<dt><a href="#PlainProduct">PlainProduct</a></dt>
<dd><p>Metadata describing a product.</p>
</dd>
<dt><a href="#PlainCartItem">PlainCartItem</a></dt>
<dd><p>Metadata describing a cart item.</p>
</dd>
<dt><a href="#PlainCart">PlainCart</a></dt>
<dd><p>Metadata describing a shopping cart.</p>
</dd>
</dl>

<a name="cartPlugin"></a>

## cartPlugin
Plugin that adds general cart-related methods to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import cartPlugin from 'ddl-tools-plugin-cart';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(cartPlugin);
```

* [cartPlugin](#cartPlugin)
    * [.setCart(cart)](#cartPlugin.setCart) ⇒ <code>object</code>
    * [.mergeCart(cart)](#cartPlugin.mergeCart) ⇒ <code>object</code>
    * [.setCartId(value)](#cartPlugin.setCartId) ⇒ <code>object</code>
    * [.setCartPrice(cartPrice)](#cartPlugin.setCartPrice) ⇒ <code>object</code>
    * [.mergeCartPrice(cartPrice)](#cartPlugin.mergeCartPrice) ⇒ <code>object</code>

<a name="cartPlugin.setCart"></a>

### cartPlugin.setCart(cart) ⇒ <code>object</code>
Records cart information by replacing `cart` with the `cart` argument,
destroying any existing cart information.

**Kind**: static method of [<code>cartPlugin</code>](#cartPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| cart | [<code>PlainCart</code>](#PlainCart) | Shopping cart information |

<a name="cartPlugin.mergeCart"></a>

### cartPlugin.mergeCart(cart) ⇒ <code>object</code>
Updates cart data by deeply merging the key/value pairs from the `cart`
argument into the `cart` object, creating a new `cart` object if one did
not already exist.

**Kind**: static method of [<code>cartPlugin</code>](#cartPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| cart | [<code>PlainCart</code>](#PlainCart) | Shopping cart information |

<a name="cartPlugin.setCartId"></a>

### cartPlugin.setCartId(value) ⇒ <code>object</code>
Records the unique identifier for a shopping cart.

**Kind**: static method of [<code>cartPlugin</code>](#cartPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="cartPlugin.setCartPrice"></a>

### cartPlugin.setCartPrice(cartPrice) ⇒ <code>object</code>
Records cart pricing information by replacing `cart.price` with the
`cartPrice` argument, destroying any existing cart pricing information.

**Kind**: static method of [<code>cartPlugin</code>](#cartPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| cartPrice | [<code>PlainCartPrice</code>](#PlainCartPrice) | Cart pricing information |

<a name="cartPlugin.mergeCartPrice"></a>

### cartPlugin.mergeCartPrice(cartPrice) ⇒ <code>object</code>
Updates cart pricing information by deeply merging the key/value pairs from
the `cartPrice` argument into the `cart.price` object, creating a new
`cart.price` object if one did not already exist.

**Kind**: static method of [<code>cartPlugin</code>](#cartPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| cartPrice | [<code>PlainCartPrice</code>](#PlainCartPrice) | Cart pricing information |

<a name="PlainCategory"></a>

## PlainCategory
Categorization data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| primaryCategory | <code>string</code> | Top-level category that object belongs to |
| subCategory | <code>string</code> | Sub-level category that object belongs to |

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

<a name="PlainCartPrice"></a>

## PlainCartPrice ⇐ [<code>PlainPrice</code>](#PlainPrice)
Standard pricing information for a cart.

**Kind**: global typedef  
**Extends**: [<code>PlainPrice</code>](#PlainPrice)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cartTotal | <code>number</code> | Grand total price of all items in the shopping   cart, including taxes and shipping. |

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

<a name="PlainCartItem"></a>

## PlainCartItem
Metadata describing a cart item.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| productInfo | [<code>PlainProductInfo</code>](#PlainProductInfo) | Standard product information about   the cart item |
| category | [<code>PlainCategory</code>](#PlainCategory) | Cart item categorization data |
| quantity | <code>number</code> | Integer describing the number of items of this   type in the cart |
| price | [<code>PlainPrice</code>](#PlainPrice) | Standard pricing information about the cart   item |
| linkedProduct | [<code>Array.&lt;PlainProduct&gt;</code>](#PlainProduct) | List of data describing products   linked to the cart item |
| attributes | <code>object</code> | Extensible key-value pairs describing   additional facts about the cart item |

<a name="PlainCart"></a>

## PlainCart
Metadata describing a shopping cart.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cartID | <code>string</code> | Unique identifier of the cart |
| price | [<code>PlainCartPrice</code>](#PlainCartPrice) | Standard pricing information about the   cart |
| attributes | <code>object</code> | Additional facts about the cart |
| item | [<code>Array.&lt;PlainCartItem&gt;</code>](#PlainCartItem) | List of data describing cart item |

