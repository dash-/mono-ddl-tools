/**
 * Plugin that adds detailed transaction-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import trxDeepPlugin from 'ddl-tools-plugin-transaction-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(trxDeepPlugin);
 */
const trxDeepPlugin = {
  /**
   * Records the identifier of the person conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileId: function setTrxProfileId(value) {
    this.set(['transaction', 'profile', 'profileInfo', 'profileID'], value);
    return this;
  },

  /**
   * Records the username of the person conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileUserName: function setTrxProfileUserName(value) {
    this.set(['transaction', 'profile', 'profileInfo', 'userName'], value);
    return this;
  },

  /**
   * Records the email address of the person conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileEmail: function setTrxProfileEmail(value) {
    this.set(['transaction', 'profile', 'profileInfo', 'email'], value);
    return this;
  },

  /**
   * Records the first line of the address of the person conducting the
   * transaction (ie, street number and name).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddressLine1: function setTrxProfileAddressLine1(value) {
    this.set(['transaction', 'profile', 'address', 'line1'], value);
    return this;
  },

  /**
   * Records the second line of the address of the person conducting the
   * transaction (ie. suite or apartment number).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddressLine2: function setTrxProfileAddressLine2(value) {
    this.set(['transaction', 'profile', 'address', 'line2'], value);
    return this;
  },

  /**
   * Records the city portion of the address of the person conducting the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddressCity: function setTrxProfileAddressCity(value) {
    this.set(['transaction', 'profile', 'address', 'city'], value);
    return this;
  },

  /**
   * Records the state/province portion of the address of the person conducting
   * the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddressStateProvince: function setTrxProfileAddressStateProvince(value) {
    this.set(['transaction', 'profile', 'address', 'stateProvince'], value);
    return this;
  },

  /**
   * Records the postal code portion of the address of the person conducting the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddressPostalCode: function setTrxProfileAddressPostalCode(value) {
    this.set(['transaction', 'profile', 'address', 'postalCode'], value);
    return this;
  },

  /**
   * Records the country portion of the address of the person conducting the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileAddressCountry: function setTrxProfileAddressCountry(value) {
    this.set(['transaction', 'profile', 'address', 'country'], value);
    return this;
  },

  /**
   * Records the first line of the shipping address of the person conducting the
   * transaction (ie. street number and name).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddressLine1: function setTrxProfileShippingAddressLine1(value) {
    this.set(['transaction', 'profile', 'shippingAddress', 'line1'], value);
    return this;
  },

  /**
   * Records the second line of the shipping address of the person conducting
   * the transaction (ie. suite or apartment number).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddressLine2: function setTrxProfileShippingAddressLine2(value) {
    this.set(['transaction', 'profile', 'shippingAddress', 'line2'], value);
    return this;
  },

  /**
   * Records the city portion of the shipping address of the person conducting
   * the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddressCity: function setTrxProfileShippingAddressCity(value) {
    this.set(['transaction', 'profile', 'shippingAddress', 'city'], value);
    return this;
  },

  /**
   * Records the state/province portion of the shipping address of the person
   * conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddressStateProvince: function setTrxProfShipAddrState(value) {
    this.set(['transaction', 'profile', 'shippingAddress', 'stateProvince'], value);
    return this;
  },

  /**
   * Records the postal code portion of the shipping address of the person
   * conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddressPostalCode: function setTrxProfShipAddrPostalCode(value) {
    this.set(['transaction', 'profile', 'shippingAddress', 'postalCode'], value);
    return this;
  },

  /**
   * Records the country portion of the shipping address of the person
   * conducting the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionProfileShippingAddressCountry: function setTrxProfShipAddrCountry(value) {
    this.set(['transaction', 'profile', 'shippingAddress', 'country'], value);
    return this;
  },

  /**
   * Records the amount of money owed excluding taxes and shipping in the
   * transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalBasePrice: function setTrxTotalBasePrice(value) {
    this.set(['transaction', 'total', 'basePrice'], value);
    return this;
  },

  /**
   * Records the voucher code used in the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalVoucherCode: function setTrxTotalVoucherCode(value) {
    this.set(['transaction', 'total', 'voucherCode'], value);
    return this;
  },

  /**
   * Records the amount of discount applied due to the use of a voucher code in
   * the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalVoucherDiscount: function setTrxTotalVoucherDiscount(value) {
    this.set(['transaction', 'total', 'voucherDiscount'], value);
    return this;
  },

  /**
   * Records the type of currency reflected used in prices/monetary numbers (ie.
   * dollars versus british pounds).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalCurrency: function setTrxTotalCurrency(value) {
    this.set(['transaction', 'total', 'currency'], value);
    return this;
  },

  /**
   * Records the rate of taxes applied to the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalTaxRate: function setTrxTotalTaxRate(value) {
    this.set(['transaction', 'total', 'taxRate'], value);
    return this;
  },

  /**
   * Records the amount of money owed for shipping in the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalShipping: function setTrxTotalShipping(value) {
    this.set(['transaction', 'total', 'shipping'], value);
    return this;
  },

  /**
   * Records the shipping method selected in the transaction (ie. standard
   * shipping versus priority shipping).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalShippingMethod: function setTrxTotalShippingMethod(value) {
    this.set(['transaction', 'total', 'shippingMethod'], value);
    return this;
  },

  /**
   * Records the amount of money owed including taxes in the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotalPriceWithTax: function setTrxTotalPriceWithTax(value) {
    this.set(['transaction', 'total', 'priceWithTax'], value);
    return this;
  },

  /**
   * Records the total amount of money owed in the transaction.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setTransactionTotal: function setTrxTotal(value) {
    this.set(['transaction', 'total', 'transactionTotal'], value);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = trxDeepPlugin;
