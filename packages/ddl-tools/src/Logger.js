/**
 * Map of error message generators.
 */
const errorGenerators = {
  invalidPath: path => `Invalid path: ${path}`,
  pathNotExtendable: path => `Path is not extendable: ${path}`,
  methodOverwrite: method => (
    `Method overwrite attempt detected for \`${method}\`.` +
    'Ensure you are not using the same plugin multiple times.'
  ),
  invalidArgumentType: (expectedType, argName, argValue) => (
    `Invalid argument \`${argName}\`: Expected ${expectedType}, got ${typeof argValue}`
  ),
};

/**
 * Standard non-operation function.
 */
const noop = () => {};

/**
 * Non-operation logger for non-logging logger.
 */
const noLogger = {
  debug: noop,
  error: noop,
};

/**
 * A valid default low-level logger (either console or non-logging logger)
 */
let defaultLogger;
if (typeof console === 'object') {
  defaultLogger = {
    debug: console.debug, // eslint-disable-line no-console
    error: console.warn, // eslint-disable-line no-console
  };
} else {
  defaultLogger = noLogger;
}

/**
 * High-level, configurable, basic-use logger customized for ddl-tools.
 *
 * @class
 */
const Logger = function Logger() {
  const config = {
    throw: false,
    verbose: false,
  };

  let logger = defaultLogger;

  /**
   * Logs (or throws) an error.
   *
   * If configured to throw errors, this method throws an error.  Otherwise, if
   * it has a valid low-level logger (like console) with a valid error function,
   * it will call the low-level logger's error function to log the error.
   *
   * @param {mixed} ...msg - Messages to be included in logging/exception
   * @throws {Error} - If this class instance is configured to throw errors
   * @returns {undefined}
   */
  this.error = (...msg) => {
    if (config.throw) {
      throw new Error(msg.join(' '));
    }
    const extendedMsg = ['DDLTools:'].concat(msg);
    if (logger && typeof logger.error === 'function') {
      logger.error(...extendedMsg);
    }
  };

  /**
   * Logs debug messages.
   *
   * If configured to be verbose, and if this class instance is has a valid
   * low-level logger (like `console`) with a valid debug function, it will call
   * the low-level logger's `debug` function to log the messages.
   *
   * @param {mixed} ...msg - Messages to be included in logging
   * @returns {undefined}
   */
  this.debug = (...msg) => {
    if (!config.verbose) return;
    const extendedMsg = ['DDLTools:'].concat(msg);
    if (logger && typeof logger.debug === 'function') {
      logger.debug(...extendedMsg);
    }
  };

  /**
   * Allows package consumers (via `DDLTools.configure()`) to customize logging
   * functionality.
   *
   * @params {object} options - Configuration options as key-value pairs
   */
  this.configure = (options) => {
    if (typeof options.logger === 'object') {
      logger = Object.assign({}, noLogger, options.logger);
    } else if (options.logger === false) {
      logger = noLogger;
    }
    if (typeof options.throw === 'boolean') {
      config.throw = options.throw;
    }
    if (typeof options.verbose === 'boolean') {
      config.verbose = options.verbose;
    }
  };
};

Logger.errorGenerators = errorGenerators;

module.exports = Logger;
