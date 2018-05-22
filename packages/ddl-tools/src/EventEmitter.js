const ObjectPath = require('./ObjectPath');
const Logger = require('./Logger');

/**
 * Instantiates and initializes a new DOM event with the `eventName` given.
 *
 * @param {string} eventName - Name of the DOM event to create
 * @returns {Event} - Instantiated DOM event
 */
const buildEvent = (eventName) => {
  if (!document || typeof document.createEvent !== 'function') {
    return {};
  }
  const event = document.createEvent('Event');
  event.initEvent(eventName, true, true);
  return event;
};

/**
 * Determines whether the `value ` given is a number or a numeric string
 * containing only integers.  Returns `true` if it is, and `false` otherwise.
 *
 * @param {any} value - Value to test for numeric-ness
 * @returns {boolean} - Whether the value given is numeric
 */
const isNumeric = value => (
  typeof value === 'number' || (typeof value === 'string' && value.match(/^[0-9]+$/))
);

/**
 * Default event emission configuration options
 */
const defaultOptions = {
  eventPrefix: 'ddltools:',
  publishPrefix: '-publish:',
  resetName: '-reset',
};

/**
 * Provides event emission faculties for DDLTools.  Allows event emission to be
 * enabled, disabled and/or configured.  When enabled and correctly configured,
 * calls to the DDLTools methods `set`, `push`, `reset`, and `publish` will
 * emit DOM events that can trigger tag manager rules.
 *
 * @class
 */
const EventEmitter = function EventEmitter() {
  // Configuration
  let config = false;

  // Logging
  const logger = new Logger();

  // Helper methods / objects
  /**
   * A valid default DOM element-like object with a dispatch event method.
   */
  const blankEl = {
    dispatchEvent: (evt) => {
      logger.error('Cannot emit: emitOnElement is invalid:', evt);
    },
  };

  /**
   * Retrieves a valid DOM element object with a valid dispatch event method.
   * This will either be the root HTML element, or a fake blank element which
   * logs when called (if the root HTML element is not accessible).  In the
   * latter case, calls to `emit`, `emitPath`, `emitReset` and `emitPublish` may
   * log errors or throw exceptions depending on configuration.
   *
   * @returns {object} - Default DOM element to emit events on
   */
  const getDefaultEmissionElement = () => {
    if (!document || typeof document.getElementsByTagName !== 'function') {
      return blankEl;
    }
    const els = document.getElementsByTagName('html');
    if (els && els[0] && typeof els[0].dispatchEvent === 'function') {
      return els[0];
    }
    return blankEl;
  };

  // Core methods
  /**
   * Dispatches event with `eventName` given on the configured DOM element.
   *
   * @param {string} eventName - Name of the event to emit
   * @returns {undefined}
   */
  this.emit = (eventName) => {
    if (!config) {
      return;
    }
    const adjustedName = `${config.eventPrefix}${eventName}`;
    const event = buildEvent(adjustedName);
    config.emitOnElement.dispatchEvent(event);
    logger.debug('Event dispatched:', adjustedName);
  };

  /**
   * Dispatches multiple events, one for each element in the path given.
   *
   * For example, if the `path` given was `'first.second.third.fourth'`, four
   * events would be triggered:
   *
   * 'first'
   * 'first.second'
   * 'first.second.third'
   * 'first.second.third.fourth'
   *
   * This is useful because sometimes tag managers may want to trigger a rule
   * whenever any child of some parent is modified.
   *
   * @param {string|Array.<string|number>} path - Object-path to DDL field
   * @returns {undefined}
   */
  this.emitPath = (path) => {
    if (!config) {
      return;
    }
    const objectPath = new ObjectPath(path);
    if (!objectPath.isValid()) return;

    const pathAcc = [];
    objectPath.raw.forEach((pathItem) => {
      // Skip array indexes
      if (isNumeric(pathItem)) return;
      pathAcc.push(pathItem);
      const pathStr = pathAcc.join('.');
      this.emit(pathStr);
    });
  };

  /**
   * Dispatches the reset event.
   *
   * @returns {undefined}
   */
  this.emitReset = () => {
    if (!config) {
      return;
    }
    this.emit(config.emitEvents.resetName);
  };

  /**
   * Dispatches a publish event.
   *
   * @param {string} path
   * @returns {undefined}
   */
  this.emitPublish = (path) => {
    if (!config) {
      return;
    }
    this.emit(`${config.publishPrefix}${path}`);
  };

  /**
   * Allows package consumers (via `DDLTools.configure()`) to customize event
   * emission functionality.
   *
   * @params {object} options - Configuration options as key-value pairs
   */
  this.configure = (options = {}) => {
    logger.configure(options);

    const emissionConfig = options.emitEvents;

    if (emissionConfig === false) {
      config = false;
      return;
    }

    if (emissionConfig === true) {
      config = Object.assign({}, defaultOptions);
    } else if (typeof emissionConfig === 'object') {
      config = Object.assign({}, defaultOptions, emissionConfig);
    } else {
      return;
    }

    const element = config.emitOnElement;
    if (!element || typeof element.dispatchEvent !== 'function') {
      config.emitOnElement = getDefaultEmissionElement();
    }
  };
};

module.exports = EventEmitter;
