/**
 * Plugin that adds detailed cart-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import cartDeepPlugin from 'ddl-tools-plugin-cart-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(cartDeepPlugin);
 */
const cartDeepPlugin = {
  /**
   * Records the price of all the items in the cart, excluding taxes and
   * shipping.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceBasePrice: function setCartPriceBasePrice(value) {
    this.set(['cart', 'price', 'basePrice'], value);
    return this;
  },

  /**
   * Records the voucher code being used.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceVoucherCode: function setCartPriceVoucherCode(value) {
    this.set(['cart', 'price', 'voucherCode'], value);
    return this;
  },

  /**
   * Records the amount of discount applied due to the use of a voucher code.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceVoucherDiscount: function setCartPriceVoucherDiscount(value) {
    this.set(['cart', 'price', 'voucherDiscount'], value);
    return this;
  },

  /**
   * Records the selected type of currency that all cart prices are in (ie. US
   * dollars vs. British pounds).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceCurrency: function setCartPriceCurrency(value) {
    this.set(['cart', 'price', 'currency'], value);
    return this;
  },

  /**
   * Records the tax rate applied to the cart total.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceTaxRate: function setCartPriceTaxRate(value) {
    this.set(['cart', 'price', 'taxRate'], value);
    return this;
  },

  /**
   * Records the price of shipping.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceShipping: function setCartPriceShipping(value) {
    this.set(['cart', 'price', 'shipping'], value);
    return this;
  },

  /**
   * Records the selected shipping method (ie. standard shipping vs. priority).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceShippingMethod: function setCartPriceShippingMethod(value) {
    this.set(['cart', 'price', 'shippingMethod'], value);
    return this;
  },

  /**
   * Records total price of all items in the shopping cart, including taxes but
   * excluding shipping.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPricePriceWithTax: function setCartPricePriceWithTax(value) {
    this.set(['cart', 'price', 'priceWithTax'], value);
    return this;
  },

  /**
   * Records grand total price of all items in the shopping cart, including
   * taxes and shipping.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setCartPriceCartTotal: function setCartPriceCartTotal(value) {
    this.set(['cart', 'price', 'cartTotal'], value);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = cartDeepPlugin;
