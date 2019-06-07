const loSet = require('lodash.set');
const loGet = require('lodash.get');
const loMerge = require('lodash.merge');

const merge = (target, path, source) => {
  let dest = loGet(target, path);
  if (typeof dest !== 'object') {
    dest = {};
    loSet(target, path, dest);
  }
  loMerge(dest, source);
};

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
 * Helper class to build transaction list item objects for use in a digital data
 * layer.
 *
 * @class
 */
class TransactionListItem {
  constructor(transaction = {}) {
    this.raw = loMerge({}, transaction);
  }

  // Core methods

  /**
   * Sets the identifier for the transaction.
   *
   * @param {string} transactionId - Unique identifier for the transaction
   *   (typically an order number)
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setTransactionId(value) {
    loSet(this.raw, ['transactionID'], value);
    return this;
  }

  /**
   * Sets information about the person conducting the transaction by
   * replacing `transaction.profile` with the `profile` argument, destroying any
   * existing transaction profile information.
   *
   * @param {PlainTransactionProfile} profile - Information about the person
   *   conducting the transaction
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setProfile(profile) {
    loSet(this.raw, ['profile'], profile);
    return this;
  }

  /**
   * Updates information about the person conducting the transaction by deeply
   * merging the key/value pairs from the `profile` argument into the
   * `transaction.profile` object, creating a new `transaction.profile` object
   * if one did not already exist.
   *
   * @param {PlainTransactionProfile} profile - Information about the person
   *   conducting the transaction
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {TransactionListItem} - Self reference for chaining
   */
  mergeProfile(profile) {
    merge(this.raw, ['profile'], profile);
    return this;
  }

  /**
   * Sets key personal information about the person conducting the
   * transaction by replacing `transaction.profile.profileInfo` with the
   * `profileInfo` argument, destroying any existing key personal information.
   *
   * @param {PlainProfileInfo} profileInfo - Personal information about customer
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setProfileInfo(profileInfo) {
    loSet(this.raw, ['profile', 'profileInfo'], profileInfo);
    return this;
  }

  /**
   * Updates key personal information about the person conducting the
   * transaction by deeply merging the key/value pairs from the `profileInfo`
   * argument into the `transaction.profile.profileInfo` object, creating a new
   * `transaction.profile.profileInfo` object if one did not already exist.
   *
   * @param {PlainProfileInfo} profileInfo - Personal information about customer
   * @returns {TransactionListItem} - Self reference for chaining
   */
  mergeProfileInfo(profileInfo) {
    merge(this.raw, ['profile', 'profileInfo'], profileInfo);
    return this;
  }

  /**
   * Sets the primary address of the person conducting the transaction by
   * replacing `transaction.profile.address` with the `address` argument,
   * destroying any existing primary address information.
   *
   * @param {PlainProfileAddress} address - Customer's primary address
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddress(address) {
    loSet(this.raw, ['profile', 'address'], address);
    return this;
  }

  /**
   * Updates the primary address of the person conducting the transaction by
   * deeply merging the key/value pairs from the `address` argument into the
   * `transaction.profile.address` object, creating a new
   * `transaction.profile.address` object if one did not already exist.
   *
   * @param {PlainProfileAddress} address - Customer's primary address
   * @returns {TransactionListItem} - Self reference for chaining
   */
  mergeAddress(address) {
    merge(this.raw, ['profile', 'address'], address);
    return this;
  }

  /**
   * Sets the shipping address of the person conducting the transaction by
   * replacing `transaction.profile.shippingAddress` with the `address`
   * argument, destroying any existing shipping address information.
   *
   * @param {PlainProfileAddress} address - Address products are to be shipped to
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddress(address) {
    loSet(this.raw, ['profile', 'shippingAddress'], address);
    return this;
  }

  /**
   * Updates the shipping address of the person conducting the transaction by
   * deeply merging the key/value pairs from the `address` argument into the
   * `transaction.profile.shippingAddress` object, creating a new
   * `transaction.profile.shippingAddress` object if one did not already exist.
   *
   * @param {PlainProfileAddress} address - Address products are to be shipped to
   * @returns {TransactionListItem} - Self reference for chaining
   */
  mergeShippingAddress(address) {
    merge(this.raw, ['profile', 'shippingAddress'], address);
    return this;
  }

  /**
   * Sets transaction cost information by replacing `transaction.total` with
   * the `total` argument, destroying any existing transaction cost information.
   *
   * @param {PlainTransactionTotal} total - Transaction cost information
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setTotal(total) {
    loSet(this.raw, ['total'], total);
    return this;
  }

  /**
   * Updates transaction cost information by deeply merging the key/value pairs
   * from the `total` argument into the `transaction.total` object, creating a
   * new `transaction.total` object if one did not already exist.
   *
   * @param {PlainTransactionTotal} total - Transaction cost information
   * @returns {TransactionListItem} - Self reference for chaining
   */
  mergeTotal(total) {
    merge(this.raw, ['total'], total);
    return this;
  }

  /**
   * Sets additional facts about the transaction by replacing
   * `transaction.attributes` with the `attributes` argument, destroying any
   * existing attributes.
   *
   * @param {object} attributes - Additional facts about the transaction
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAttributes(attributes) {
    loSet(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Updates additional facts about the transaction by deeply merging the
   * key/value pairs from the `attributes` argument into the
   * `transaction.attributes` object, creating a new `transaction.attributes`
   * object if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the transaction
   * @returns {TransactionListItem} - Self reference for chaining
   */
  mergeAttributes(attributes) {
    merge(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Sets an additional fact about the transaction.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @returns {TransactionListItem} - Self reference for chaining
   */
  addAttribute(name, value) {
    loSet(this.raw, ['attributes', name], value);
    return this;
  }

  // Deep methods

  /**
   * Sets the identifier of the person conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setProfileId(value) {
    loSet(this.raw, ['profile', 'profileInfo', 'profileID'], value);
    return this;
  }

  /**
   * Sets the username of the person conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setUserName(value) {
    loSet(this.raw, ['profile', 'profileInfo', 'userName'], value);
    return this;
  }

  /**
   * Sets the email address of the person conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setEmail(value) {
    loSet(this.raw, ['profile', 'profileInfo', 'email'], value);
    return this;
  }

  /**
   * Sets the first line of the address of the person conducting the
   * transaction (ie, street number and name).
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddressLine1(value) {
    loSet(this.raw, ['profile', 'address', 'line1'], value);
    return this;
  }

  /**
   * Sets the second line of the address of the person conducting the
   * transaction (ie. suite or apartment number).
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddressLine2(value) {
    loSet(this.raw, ['profile', 'address', 'line2'], value);
    return this;
  }

  /**
   * Sets the city portion of the address of the person conducting the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddressCity(value) {
    loSet(this.raw, ['profile', 'address', 'city'], value);
    return this;
  }

  /**
   * Sets the state/province portion of the address of the person conducting
   * the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddressStateProvince(value) {
    loSet(this.raw, ['profile', 'address', 'stateProvince'], value);
    return this;
  }

  /**
   * Sets the postal code portion of the address of the person conducting the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddressPostalCode(value) {
    loSet(this.raw, ['profile', 'address', 'postalCode'], value);
    return this;
  }

  /**
   * Sets the country portion of the address of the person conducting the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setAddressCountry(value) {
    loSet(this.raw, ['profile', 'address', 'country'], value);
    return this;
  }

  /**
   * Sets the first line of the shipping address of the person conducting the
   * transaction (ie. street number and name).
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddressLine1(value) {
    loSet(this.raw, ['profile', 'shippingAddress', 'line1'], value);
    return this;
  }

  /**
   * Sets the second line of the shipping address of the person conducting
   * the transaction (ie. suite or apartment number).
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddressLine2(value) {
    loSet(this.raw, ['profile', 'shippingAddress', 'line2'], value);
    return this;
  }

  /**
   * Sets the city portion of the shipping address of the person conducting
   * the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddressCity(value) {
    loSet(this.raw, ['profile', 'shippingAddress', 'city'], value);
    return this;
  }

  /**
   * Sets the state/province portion of the shipping address of the person
   * conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddressStateProvince(value) {
    loSet(this.raw, ['profile', 'shippingAddress', 'stateProvince'], value);
    return this;
  }

  /**
   * Sets the postal code portion of the shipping address of the person
   * conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddressPostalCode(value) {
    loSet(this.raw, ['profile', 'shippingAddress', 'postalCode'], value);
    return this;
  }

  /**
   * Sets the country portion of the shipping address of the person
   * conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingAddressCountry(value) {
    loSet(this.raw, ['profile', 'shippingAddress', 'country'], value);
    return this;
  }

  /**
   * Sets the amount of money owed excluding taxes and shipping in the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setBasePrice(value) {
    loSet(this.raw, ['total', 'basePrice'], value);
    return this;
  }

  /**
   * Sets the voucher code used in the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setVoucherCode(value) {
    loSet(this.raw, ['total', 'voucherCode'], value);
    return this;
  }

  /**
   * Sets the amount of discount applied due to the use of a voucher code in
   * the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setVoucherDiscount(value) {
    loSet(this.raw, ['total', 'voucherDiscount'], value);
    return this;
  }

  /**
   * Sets the type of currency reflected used in prices/monetary numbers (ie.
   * dollars versus british pounds).
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setCurrency(value) {
    loSet(this.raw, ['total', 'currency'], value);
    return this;
  }

  /**
   * Sets the rate of taxes applied to the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setTaxRate(value) {
    loSet(this.raw, ['total', 'taxRate'], value);
    return this;
  }

  /**
   * Sets the amount of money owed for shipping in the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShipping(value) {
    loSet(this.raw, ['total', 'shipping'], value);
    return this;
  }

  /**
   * Sets the shipping method selected in the transaction (ie. standard
   * shipping versus priority shipping).
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setShippingMethod(value) {
    loSet(this.raw, ['total', 'shippingMethod'], value);
    return this;
  }

  /**
   * Sets the amount of money owed including taxes in the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setPriceWithTax(value) {
    loSet(this.raw, ['total', 'priceWithTax'], value);
    return this;
  }

  /**
   * Sets the total amount of money owed in the transaction.
   *
   * @param {string} value - value to set
   * @returns {TransactionListItem} - Self reference for chaining
   */
  setTransactionTotal(value) {
    loSet(this.raw, ['total', 'transactionTotal'], value);
    return this;
  }
}

/**
 * Transforms a plain transaction list item or a TransactionListItem class
 * instance into a plain javascript object and returns it.
 *
 * @param {(PlainTransactionListItem|TransactionListItem)} item - The
 *   transaction list item object to normalize
 * @returns {PlainTransactionListItem} - The normalized form of the given item
 */
TransactionListItem.normalize = item => (
  item instanceof TransactionListItem ? item.raw : item
);

/**
 * Plugin that adds transaction-list-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxListPlugin from 'ddl-tools-plugin-transaction-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxListPlugin);
 */
const trxListPlugin = {
  /**
   * The TransactionListItem class.
   *
   * @see TransactionListItem
   */
  TransactionListItem,

  /**
   * Adds a transaction list item to the transaction list array.
   *
   * @example
const trxListItem = new ddlTools.TransactionListItem();
trxListItem.setTransactionTotal(total);
ddlTools.addTransactionListItem(trxListItem);
   * @param {(PlainTransactionListItem|TransactionListItem)} item - The
   *   transaction list item to add
   * @returns {object} - Self reference for chaining
   */
  addTransactionListItem: function addTransactionListItem(item) {
    this.push(['transactionList'], TransactionListItem.normalize(item));
    return this;
  },

  /**
   * Sets the transaction list to the transaction list provided.
   *
   * @example
ddlTools.setTransactionList(transactionList);
   * @param {array} transactionList - A full list of transactions
   * @returns {object} - Self reference for chaining
   */
  setTransactionList: function setTransactionList(transactionList) {
    this.set(['transactionList'], transactionList);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = trxListPlugin;
