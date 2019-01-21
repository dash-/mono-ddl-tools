const loSet = require('lodash.set');
const Logger = require('./Logger');

let Ajv;
try {
  Ajv = require('ajv'); // eslint-disable-line
} catch (err) {
  Ajv = require('./ajvStandIn'); // eslint-disable-line global-require
}

const noValidator = () => false;
noValidator.errors = 'Either no schema was provided, or the schema ' +
  'provided was invalid. All validation will fail.';

/**
 * Digital Data Layer schema validation for ddl-tools.
 *
 * @class
 */
const DDLValidator = function DDLValidator(schema, configuration = {}) {
  // Configuration
  const config = Object.assign({}, configuration, { schema });

  // Logging
  const logger = new Logger();
  logger.configure(config);

  // AJV - Another Javascript Validator
  let ajv;
  let ajvValidate;

  // Helpers
  const buildValidator = () => {
    const ajvOptions = Object.assign({}, config.validator);
    delete ajvOptions.init;
    ajv = new Ajv(ajvOptions);
    if (config.validator && typeof config.validator.init === 'function') {
      config.validator.init(ajv);
    }
  };

  const compileValidator = () => {
    try {
      if (!ajv) {
        buildValidator();
      }
      ajvValidate = ajv.compile(config.schema);
    } catch (err) {
      logger.error('Could not compile schema:', err);
      ajvValidate = noValidator;
    }
  };

  // Core methods
  /**
   * Determines whether the schema allows the `value` given to be set at the
   * given `path` (if `path` is not undefined), or validates `value` as a full
   * digital data layer structure (if `path` is undefined).  Returns true if the
   * schema allows the operation; false otherwise.
   *
   * @param {string|string[]} path - The path of the element being updated, or
   *   undefined to validate value as a full digital data layer structure
   * @param {mixed} value - The value to set at the path given, or a full
   *   digital data layer structure if path is undefined
   * @returns {boolean} - Whether or not the operation is valid
   */
  this.operationIsValid = (path, value) => {
    let isValid = false;
    let errorMessage;
    if (path) {
      const data = {};
      loSet(data, path, value);
      isValid = ajvValidate(data);

      if (!isValid) {
        const flatPath = typeof path.join === 'function' ? path.join('.') : path;
        errorMessage = `${flatPath} cannot have the value ${value}`;
      }
    } else if (typeof path === 'undefined') {
      isValid = ajvValidate(value);

      if (!isValid) {
        errorMessage = 'The digital data layer is invalid';
      }
    }
    if (!isValid) {
      logger.error(`${errorMessage}. Errors:`, ajvValidate.errors);
    }
    return isValid;
  };

  /**
   * Allows package consumers to customize validation functionality.
   *
   * @params {object} options - Configuration options as key-value pairs
   */
  this.configure = function configure(options) {
    logger.configure(options);

    let requireCompile = false;
    if (typeof options.schema === 'object') {
      config.schema = options.schema;
      requireCompile = true;
    }
    if (requireCompile) {
      compileValidator();
    }
  };

  // Initialization
  compileValidator();
};

module.exports = DDLValidator;
