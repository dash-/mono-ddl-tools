const Logger = require('./Logger');

/**
 * Error message given when no low-level validator is present.
 */
const noValidatorError = (
  'Either no validator was provided, or the validator ' +
  'provided was invalid. All validation will fail.'
);

/**
 * High-level validator class wrapping low-level validator (`ddlValidator`).
 *
 * @class
 */
const Validator = function Validator(ddlValidator) {
  // Low-level validation
  let validator;

  // Logging
  const logger = new Logger();

  // Helpers
  /**
   * Default validator to log error and always fail validation.
   */
  const defaultValidator = {
    operationIsValid: () => {
      logger.error(noValidatorError);
      return false;
    },
  };

  /**
   * Initializes validator, setting `validator` to the `ddlValidator` given or
   * the `defaultValidator` (if `ddlValidator` is not given or is invalid).
   *
   * @param {object} ddlValidator - The low-level validator instance; must
   *   contain an `operationIsValid` method to be considered valid
   */
  const initValidator = (baseValidator) => {
    if (baseValidator && typeof baseValidator.operationIsValid === 'function') {
      validator = baseValidator;
    } else {
      validator = defaultValidator;
    }
    this.operationIsValid = validator.operationIsValid;
  };

  /**
   * Allows package consumers (via `DDLTools.configure()`) to customize
   * validation functionality.
   *
   * @params {object} options - Configuration options as key-value pairs
   */
  this.configure = (options = {}) => {
    logger.configure(options);

    if (['boolean', 'object'].includes(typeof options.validator)) {
      initValidator(options.validator);
    }
    if (validator && typeof validator.configure === 'function') {
      validator.configure(options);
    }
  };

  // Initialize validator
  initValidator(ddlValidator);
};

module.exports = Validator;
