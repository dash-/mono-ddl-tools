/**
 * Standard limited personal information.
 *
 * @typedef PlainProfileInfo
 * @property {string} profileID - Customer's unique identifier
 * @property {string} userName - Customer's user name
 * @property {string} email - Customer's email address
 */

/**
 * Standard physical / shipping address information.
 *
 * @typedef PlainProfileAddress
 * @property {string} line1 - ie. Street number and name
 * @property {string} line2 - ie. Suite or apartment number
 * @property {string} city - City customer resides in
 * @property {string} stateProvince - State customer resides in
 * @property {string} postalCode - Customer's postal code
 * @property {string} country - Country customer resides in (ISO 3166)
 */

/**
 * Metadata describing a person associated with a transaction.
 *
 * @typedef PlainTransactionProfile
 * @property {PlainProfileInfo} profileInfo - Personal information about
 *   customer
 * @property {PlainProfileAddress} address - Customer's primary address
 * @property {PlainProfileAddress} shippingAddress - Address products are to be
 *   shipped to
 */

/**
 * Metadata describing pricing information associated with the transaction.
 *
 * @typedef PlainTransactionTotal
 * @property {number} basePrice - Amount of money owed excluding taxes
 *   and shipping in the transaction
 * @property {string} voucherCode - Voucher code if one was used
 * @property {number} voucherDiscount - Amount of discount applied due to
 *   the use of a voucher code
 * @property {string} currency - Type of currency used in prices/monetary
 *   numbers (ie. dollars versus british pounds)
 * @property {number} taxRate - Rate of taxes applied
 * @property {number} shipping - Amount of money owed for shipping
 * @property {string} shippingMethod - Shipping method selected in the
 *   transaction (ie. standard shipping versus priority shipping)
 * @property {number} priceWithTax - Amount of money owed including taxes
 * @property {number} transactionTotal - Total amount of money owed
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
 * Product categorization data.
 *
 * @typedef PlainProductCategory
 * @property {string} primaryCategory - Top-level category of the product
 * @property {string} subCategory - Sub-level category of the product
 * @property {string} productType - Type of product
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
 * Metadata describing a product.
 *
 * @typedef PlainProduct
 * @property {PlainProductInfo} productInfo - Standard product information
 */

/**
 * Metadata describing a transaction item.
 *
 * @typedef PlainTransactionItem
 * @property {PlainProductInfo} productInfo - Standard product information
 * @property {PlainProductCategory} category - Product categorization data
 * @property {number} quantity - Integer describing the count of this item type
 * @property {PlainPrice} price - Standard pricing information
 * @property {PlainProduct[]} linkedProduct - List of data describing products
 *   linked to the cart item
 * @property {object} attributes - Additional facts about the transaction item
 */

/**
 * Metadata describing a transaction.
 *
 * @typedef PlainTransaction
 * @property {string} transactionID - Unique identifier for the transaction
 * @property {PlainTransactionProfile} profile - User profile data associated
 *   with the transaction
 * @property {PlainTransactionTotal} total - Pricing information associated with
 *   the transaction
 * @property {object} attributes - Additional facts about the transaction
 * @property {PlainTransactionItem[]} item - List of items associated with the
 *   transaction
 */

/**
 * Plugin that adds general transaction-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxPlugin from 'ddl-tools-plugin-transaction';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxPlugin);
 */
const trxPlugin = {
  /**
   * Records transaction data by replacing `transaction` with the `transaction`
   * argument, destroying any existing transaction data.
   *
   * @param {PlainTransaction} transaction - Information about the transaction
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setTransaction: function setTransaction(transaction) {
    this.set(['transaction'], transaction);
    return this;
  },

  /**
   * Updates transaction data by deeply merging the key/value pairs from the
   * `transaction` argument into the `transaction` object, creating a new
   * `transaction` object if one did not already exist.
   *
   * @param {PlainTransaction} transaction - Information about the transaction
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergeTransaction: function mergeTransaction(transaction) {
    this.merge(['transaction'], transaction);
    return this;
  },

  /**
   * Records the identifier for the transaction.
   *
   * @param {string} transactionId - Unique identifier for the transaction
   *   (typically an order number)
   * @returns {object} - Self reference for chaining
   */
  setTransactionId: function setTransactionId(value) {
    this.set(['transaction', 'transactionID'], value);
    return this;
  },

  /**
   * Records information about the person conducting the transaction by
   * replacing `transaction.profile` with the `profile` argument, destroying any
   * existing transaction profile information.
   *
   * @param {PlainTransactionProfile} profile - Information about the person
   *   conducting the transaction
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfile: function setTransactionProfile(profile) {
    this.set(['transaction', 'profile'], profile);
    return this;
  },

  /**
   * Updates information about the person conducting the transaction by deeply
   * merging the key/value pairs from the `profile` argument into the
   * `transaction.profile` object, creating a new `transaction.profile` object
   * if one did not already exist.
   *
   * @param {PlainTransactionProfile} profile - Information about the person
   *   conducting the transaction
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergeTransactionProfile: function mergeTransactionProfile(profile) {
    this.merge(['transaction', 'profile'], profile);
    return this;
  },

  /**
   * Records key personal information about the person conducting the
   * transaction by replacing `transaction.profile.profileInfo` with the
   * `profileInfo` argument, destroying any existing key personal information.
   *
   * @param {PlainProfileInfo} profileInfo - Personal information about customer
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileInfo: function setTransactionProfileInfo(profileInfo) {
    this.set(['transaction', 'profile', 'profileInfo'], profileInfo);
    return this;
  },

  /**
   * Updates key personal information about the person conducting the
   * transaction by deeply merging the key/value pairs from the `profileInfo`
   * argument into the `transaction.profile.profileInfo` object, creating a new
   * `transaction.profile.profileInfo` object if one did not already exist.
   *
   * @param {PlainProfileInfo} profileInfo - Personal information about customer
   * @returns {object} - Self reference for chaining
   */
  mergeTransactionProfileInfo: function mergeTransactionProfileInfo(profileInfo) {
    this.merge(['transaction', 'profile', 'profileInfo'], profileInfo);
    return this;
  },

  /**
   * Records the primary address of the person conducting the transaction by
   * replacing `transaction.profile.address` with the `address` argument,
   * destroying any existing primary address information.
   *
   * @param {PlainProfileAddress} address - Customer's primary address
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddress: function setTransactionProfileAddress(address) {
    this.set(['transaction', 'profile', 'address'], address);
    return this;
  },

  /**
   * Updates the primary address of the person conducting the transaction by
   * deeply merging the key/value pairs from the `address` argument into the
   * `transaction.profile.address` object, creating a new
   * `transaction.profile.address` object if one did not already exist.
   *
   * @param {PlainProfileAddress} address - Customer's primary address
   * @returns {object} - Self reference for chaining
   */
  mergeTransactionProfileAddress: function mergeTransactionProfileAddress(address) {
    this.merge(['transaction', 'profile', 'address'], address);
    return this;
  },

  /**
   * Records the shipping address of the person conducting the transaction by
   * replacing `transaction.profile.shippingAddress` with the `address`
   * argument, destroying any existing shipping address information.
   *
   * @param {PlainProfileAddress} address - Address products are to be shipped to
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddress: function setTransactionProfileShippingAddress(address) {
    this.set(['transaction', 'profile', 'shippingAddress'], address);
    return this;
  },

  /**
   * Updates the shipping address of the person conducting the transaction by
   * deeply merging the key/value pairs from the `address` argument into the
   * `transaction.profile.shippingAddress` object, creating a new
   * `transaction.profile.shippingAddress` object if one did not already exist.
   *
   * @param {PlainProfileAddress} address - Address products are to be shipped to
   * @returns {object} - Self reference for chaining
   */
  mergeTransactionProfileShippingAddress: function mergeTransactionProfileShippingAddress(address) {
    this.merge(['transaction', 'profile', 'shippingAddress'], address);
    return this;
  },

  /**
   * Records transaction cost information by replacing `transaction.total` with
   * the `total` argument, destroying any existing transaction cost information.
   *
   * @param {PlainTransactionTotal} total - Transaction cost information
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotal: function setTransactionTotal(total) {
    this.set(['transaction', 'total'], total);
    return this;
  },

  /**
   * Updates transaction cost information by deeply merging the key/value pairs
   * from the `total` argument into the `transaction.total` object, creating a
   * new `transaction.total` object if one did not already exist.
   *
   * @param {PlainTransactionTotal} total - Transaction cost information
   * @returns {object} - Self reference for chaining
   */
  mergeTransactionTotal: function mergeTransactionTotal(total) {
    this.merge(['transaction', 'total'], total);
    return this;
  },

  /**
   * Records additional facts about the transaction by replacing
   * `transaction.attributes` with the `attributes` argument, destroying any
   * existing attributes.
   *
   * @param {object} attributes - Additional facts about the transaction
   * @returns {object} - Self reference for chaining
   */
  setTransactionAttributes: function setTransactionAttributes(attributes) {
    this.set(['transaction', 'attributes'], attributes);
    return this;
  },

  /**
   * Updates additional facts about the transaction by deeply merging the
   * key/value pairs from the `attributes` argument into the
   * `transaction.attributes` object, creating a new `transaction.attributes`
   * object if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the transaction
   * @returns {object} - Self reference for chaining
   */
  mergeTransactionAttributes: function mergeTransactionAttributes(attributes) {
    this.merge(['transaction', 'attributes'], attributes);
    return this;
  },

  /**
   * Records an additional fact about the transaction.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @returns {object} - Self reference for chaining
   */
  addTransactionAttribute: function addTransactionAttribute(name, value) {
    this.set(['transaction', 'attributes', name], value);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = trxPlugin;
