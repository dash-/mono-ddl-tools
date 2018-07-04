const loSet = require('lodash.set');
const loGet = require('lodash.get');
const loMerge = require('lodash.merge');
const loForEach = require('lodash.foreach');
const ObjectPath = require('./ObjectPath');
const Logger = require('./Logger');
const Validator = require('./Validator');
const EventEmitter = require('./EventEmitter');
const resetUtils = require('./resetUtils');

const { errorGenerators } = Logger;

/**
 * DDLTools reset options.
 *
 * @typedef DDLToolsConfigResetOptions
 * @property {string[]} include - Keys to be removed upon reset
 * @property {string[]} exclude - Keys to be ignored upon reset
 */

/**
 * A logger.
 *
 * @typedef DDLToolsConfigLogger
 * @property {function} debug - Function to call for non-critical logging
 * @property {function} error - Function to call for critical logging
 */

/**
 * A digital data layer validator.
 *
 * @typedef DDLToolsConfigValidator
 * @property {function} operationIsValid - Function called to determine whether
 *   changing a property at a path specified to a value specified should be
 *   allowed.
 * @property {function} configure - Function called to configure the validator.
 */

/**
 * DDLTools configuration object.
 *
 * @typedef DDLToolsConfig
 * @property {boolean|DDLToolsConfigLogger} logger - Either true to enable
 *   logging with the default logger; false to disable logging; or an
 *   actual logger object with appropriate methods to use for logging (default:
 *   true).
 * @property {boolean} throw - True if methods should throw an exception when an
 *   invalid operation is detected; false if exceptions should be ignored
 *   (default: false).
 * @property {boolean} verbose - True to enable extra logging information; false
 *   to keep the console clean (default)
 *   invalid operation is detected; false if exceptions should be ignored
 *   (default: false).
 * @property {DDLToolsConfigResetOptions} reset - Options customizing behavior
 *   when the `reset` method is called.
 * @property {DDLToolsConfigValidator} validator - A digital data layer
 *   validator, such as the one presented by `ddl-validator`.
 *
 * TODO
 */

/**
 * Provides digital data layer helper functions supporting data layer schema
 * validation for highly-decoupled analytics reporting.
 *
 * @class
 * @see https://www.w3.org/2013/12/ceddl-201312.pdf
 */
const DDLTools = function DDLTools(digitalData, ddlValidator, configuration = {}) {
  // Configuration
  let config = resetUtils.processConfig(configuration);

  // Logging
  const logger = new Logger();
  logger.configure(config);

  // Validation
  const validator = new Validator(ddlValidator);
  validator.configure(config);

  // Event emission
  const eventEmitter = new EventEmitter();
  eventEmitter.configure(config);

  // Core methods
  /**
   * Empties the digital data layer prior to populating data for a new page.
   * Provided for single-page apps to call during page-level widget
   * initialization prior to populating new data in the data layer.
   *
   * @example
ddlTools.reset();
   * @returns {object} - Self reference for chaining
   */
  this.reset = function reset() {
    const keys = resetUtils.getResetKeys(digitalData, config.reset);
    const keysLength = keys.length;
    for (let keyIdx = 0; keyIdx < keysLength; keyIdx += 1) {
      delete digitalData[keys[keyIdx]]; // eslint-disable-line no-param-reassign
    }
    eventEmitter.emitReset();
    return this;
  };

  /**
   * Updates or inserts a data layer entry at the given `path` with the given
   * `value` if the given path and value are valid for the data layer schema.
   * If the base path does not already exist, it will be created.
   *
   * @example
ddlTools.set("page.pageInfo.pageID", "Nikon Camera");
   * @param {string|string[]} path - Where the data layer entry should reside
   * @param {mixed} value - What the data layer entry should contain
   * @returns {object} - Self reference for chaining
   */
  this.set = function set(path, value) {
    if (!validator.operationIsValid(path, value)) {
      return this;
    }
    loSet(digitalData, path, value);
    eventEmitter.emitPath(path);
    return this;
  };

  /**
   * Retrieves the data layer entry at the given `path` if the given path
   * contains a value, or the `default` value if a default value is specified
   * and the given path does not contain a value.
   *
   * @example
const pageId = ddlTools.get("page.pageInfo.pageID");
   * @example
const pageId = ddlTools.get("page.pageInfo.pageName", 'UnknownPage');
   * @param {string|string[]} path - Where the data layer entry resides
   * @param {mixed} [defaultValue=null] - Optional value to return if the path
   *     does not contain a value
   */
  this.get = function get(path, defaultValue = null) {
    return loGet(digitalData, path, defaultValue);
  };

  /**
   * Deeply merges the data layer entry at the given `path` with the given
   * `value` if the given path and value are valid for the data layer schema.
   * If the base path does not already exist, it will be created.
   *
   * @example
ddlTools.merge("transaction.profile", {
  profileInfo: {
    shippingAddress: {
      line1: '1234 Test Dr',
      city: 'Portland',
      stateProvince: 'OR',
      postalCode: '97211',
      country: 'USA'
    }
  }
});
   * @param {string|string[]} path - Where the data layer entry should reside
   * @param {object} source - Key/value pairs to merge
   * @returns {object} - Self reference for chaining
   */
  this.merge = function merge(path, source) {
    if (!validator.operationIsValid(path, source)) {
      return this;
    }
    let dest = loGet(digitalData, path);
    if (typeof dest !== 'object') {
      dest = {};
      loSet(digitalData, path, dest);
    }
    loMerge(dest, source);
    eventEmitter.emitPath(path);
    return this;
  };

  /**
   * Adds a new data layer entry onto the end of an array at the `path` given
   * within the digital data layer.  If the base path does not already exist, it
   * will be created.  If an array does not exist at the path given, a new array
   * will be created at the given path.
   *
   * @example
ddlTools.push("transaction.item", {
  "productId": "N117MP9",
  "sku": "N117MP9-31778",
  "color": "blue"
});
   * @param {string|string[]} path - Where the data layer array resides within
   *   the data layer
   * @param {mixed} value - The data to be added to the array
   * @returns {object} - Self reference for chaining
   */
  this.push = function push(path, value) { // eslint-disable-line max-statements
    const objectPath = new ObjectPath(path);
    if (!objectPath.isValid()) {
      logger.error(errorGenerators.invalidPath(path));
      return this;
    }
    const extendedPath = objectPath.extend([0]);
    if (!validator.operationIsValid(extendedPath.raw, value)) {
      logger.error(errorGenerators.pathNotExtendable(path));
      return this;
    }
    let list = loGet(digitalData, path);
    if (!Array.isArray(list)) {
      list = [];
      loSet(digitalData, path, list);
    }
    list.push(value);
    eventEmitter.emitPath(path);
    return this;
  };

  /**
   * With event emission enabled, dispatches a "publish" event.  This is
   * useful for some types of analytics event handling.
   *
   * @example
ddlTools.publish('page');
   * @param {string} path - Indicates what has been published
   * @returns {object} - Self reference for chaining
   */
  this.publish = function publish(path) {
    eventEmitter.emitPublish(path);
  };

  /**
   * Validates the existing `digitalData` object against the DDL Schema,
   * returning true upon success (`digitalData` is valid), or false otherwise.
   *
   * NOTE: It is not necessary to use this method for validating changes
   * caused by the `DDLTools` objects -- those changes are already
   * validated.  This method is for validating an initialized value of
   * `digitalData` which is typically set by server-side processing.
   *
   * @example
window.digitalData = {
  pageInstanceID: 'example-pageInstanceId',
  invalidField: 'bad'
};
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
if (!ddlTools.validate()) {
  console.warn('`window.digitalData` is invalid');
}
   * @returns {boolean} - Whether or not the `digitalData` object
   *     is valid
   */
  this.validate = function validate() {
    return validator.operationIsValid(undefined, digitalData);
  };

  /**
   * Allows package consumers to customize the functionality of the other
   * methods in this class.
   *
   * @example
ddlTools.configure({
  logger: specialLogger,
  throw: true
});
   * @params {object} options - The new settings to be used
   * @returns {object} - Self reference for chaining
   */
  this.configure = function configure(options = {}) {
    config = resetUtils.processConfig(options);
    logger.configure(config);
    validator.configure(config);
    eventEmitter.configure(config);
    return this;
  };

  /**
   * Extends the DDLTools instance with the methods from the provided plugin.
   *
   * @example
const pagePlugin = require('ddl-tools-plugin-page');
ddlTools.use(page);
   * @example
const pagePlugin = require('ddl-tools-plugin-page');
const trxsPlugin = require('ddl-tools-plugin-transactions');
ddlTools.use(pagePlugin, trxsPlugin);
   * @param {object} plugin - The plugin to use
   * @returns {object} - Self reference for chaining
   */
  this.use = function use(...plugins) {
    plugins.forEach((plugin) => {
      loForEach(plugin, (value, key) => {
        // Ensure no method overwrites occur
        const wouldOverwrite = this[key] != null;
        if (wouldOverwrite) {
          logger.error(errorGenerators.methodOverwrite(key));
          return;
        }
        // Only copy over functions
        if (typeof value !== 'function') {
          return;
        }
        this[key] = value.bind(this);
      });
    });
    return this;
  };
};

// Core convenience methods

/**
 * Sets the page instance identifier.
 *
 * The Page Identifier is among the most widely used web analytics data
 * properties.  This value SHOULD distinguish among environments, such as
 * whether this page is in development, staging, or production.
 *
 * @param {string} value - value to set
 * @returns {object} - Self reference for chaining
 */
DDLTools.prototype.setPageInstanceId = function setPageInstanceId(value) {
  this.set(['pageInstanceID'], value);
  return this;
};

module.exports = DDLTools;
