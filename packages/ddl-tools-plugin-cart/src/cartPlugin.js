/**
 * Categorization data.
 *
 * @typedef PlainCategory
 * @property {string} primaryCategory - Top-level category that object belongs to
 * @property {string} subCategory - Sub-level category that object belongs to
 */

/**
 * Standard pricing information.
 *
 * @typedef PlainPrice
 * @property {number} basePrice - Price excluding taxes and shipping
 * @property {string} voucherCode - Code used for a discount
 * @property {number} voucherDiscount - Amount of discount applied due to the
 *   use of a voucher code
 * @property {string} currency - Selected type of currency that these prices are
 *   in (ie. US dollars vs. British pounds)
 * @property {number} taxRate - Rate of taxes to be applied
 * @property {number} shipping - Price of shipping
 * @property {string} shippingMethod - Selected shipping method (ie. standard
 *   shipping vs. priority)
 * @property {number} priceWithTax - Total price including taxes but excluding
 *   shipping.
 */

/**
 * Standard pricing information for a cart.
 *
 * @typedef PlainCartPrice
 * @augments PlainPrice
 * @property {number} cartTotal - Grand total price of all items in the shopping
 *   cart, including taxes and shipping.
 */

/**
 * Standard product information.
 *
 * @typedef PlainProductInfo
 * @property {string} productID - Unique identifier for the product
 * @property {string} productName - Human-friendly name of the product
 * @property {string} description - Human-friendly product description
 * @property {string} productURL - Web address for the product
 * @property {string} productImage - Regular-sized image of the product
 * @property {string} productThumbnail - Thumbnail-sized image of the product
 * @property {string} manufacturer - Name of the company that makes the product
 * @property {string} sku - Stock Keeping Unit identification code
 * @property {string} color - The color of the product in the cart
 * @property {string} size - The physical dimensions of the product in the car
 */

/**
 * Metadata describing a product.
 *
 * @typedef PlainProduct
 * @property {PlainProductInfo} productInfo - Standard product information
 */

/**
 * Metadata describing a cart item.
 *
 * @typedef PlainCartItem
 * @property {PlainProductInfo} productInfo - Standard product information about
 *   the cart item
 * @property {PlainCategory} category - Cart item categorization data
 * @property {number} quantity - Integer describing the number of items of this
 *   type in the cart
 * @property {PlainPrice} price - Standard pricing information about the cart
 *   item
 * @property {PlainProduct[]} linkedProduct - List of data describing products
 *   linked to the cart item
 * @property {object} attributes - Extensible key-value pairs describing
 *   additional facts about the cart item
 */

/**
 * Metadata describing a shopping cart.
 *
 * @typedef PlainCart
 * @property {string} cartID - Unique identifier of the cart
 * @property {PlainCartPrice} price - Standard pricing information about the
 *   cart
 * @property {object} attributes - Additional facts about the cart
 * @property {PlainCartItem[]} item - List of data describing cart item
 */

/**
 * Plugin that adds general cart-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import cartPlugin from 'ddl-tools-plugin-cart';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(cartPlugin);
 */
const cartPlugin = {
  /**
   * Records cart information by replacing `cart` with the `cart` argument,
   * destroying any existing cart information.
   *
   * @param {PlainCart} cart - Shopping cart information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setCart: function setCart(cart) {
    this.set(['cart'], cart);
    return this;
  },

  /**
   * Updates cart data by deeply merging the key/value pairs from the `cart`
   * argument into the `cart` object, creating a new `cart` object if one did
   * not already exist.
   *
   * @param {PlainCart} cart - Shopping cart information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergeCart: function mergeCart(cart) {
    this.merge(['cart'], cart);
    return this;
  },

  /**
   * Records the unique identifier for a shopping cart.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartId: function setCartId(value) {
    this.set(['cart', 'cartID'], value);
    return this;
  },

  /**
   * Records cart pricing information by replacing `cart.price` with the
   * `cartPrice` argument, destroying any existing cart pricing information.
   *
   * @param {PlainCartPrice} cartPrice - Cart pricing information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setCartPrice: function setCartPrice(cartPrice) {
    this.set(['cart', 'price'], cartPrice);
    return this;
  },

  /**
   * Updates cart pricing information by deeply merging the key/value pairs from
   * the `cartPrice` argument into the `cart.price` object, creating a new
   * `cart.price` object if one did not already exist.
   *
   * @param {PlainCartPrice} cartPrice - Cart pricing information
   * @returns {object} - Self reference for chaining
   */
  mergeCartPrice: function mergeCartPrice(cartPrice) {
    this.merge(['cart', 'price'], cartPrice);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = cartPlugin;
