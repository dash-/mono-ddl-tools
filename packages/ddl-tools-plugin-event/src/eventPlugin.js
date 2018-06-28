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
 * Categorization data.
 *
 * @typedef PlainCategory
 * @property {string} primaryCategory - Top-level category that object belongs to
 * @property {string} subCategory - Sub-level category that object belongs to
 */

/**
 * Standard information about an event.
 *
 * @typedef PlainEventInfo
 * @property {string} eventName - Human-friendly name of the event
 * @property {string} eventAction - Systems-oriented action id for the event
 * @property {number} eventPoints - Number of points for the event
 * @property {string} type - Type of event this is (ie. javascriptError)
 * @property {(string|Date)} timeStamp - When the event occurred
 * @property {string} cause - What caused the event
 * @property {string} effect - What happened as a result of the event
 */

/**
 * Metadata describing an event.
 *
 * @typedef PlainEvent
 * @property {PlainEventInfo} eventInfo - Standard information about the event
 * @property {PlainCategory} category - Event categorization data
 * @property {object} attributes - Extensible key-value pairs describing
 *   additional facts about the event
 */

/**
 * Helper class to build event objects that conform to the ESI ERA digital data
 * layer recommendation based on the W3C draft specification.
 *
 * @class
 */
class Event {
  /**
   * Instantiates a new Event.
   *
   * @param {PlainEvent} [event] - Data describing the event
   * @returns {Event} - Instance
   */
  constructor(event = {}) {
    this.raw = event;
  }

  // Core methods

  /**
   * Sets standard information about the event by replacing `eventInfo` with the
   * `eventInfo` argument, destroying any existing standard event information.
   *
   * @param {PlainEventInfo} eventInfo - Standard information about the event
   * @returns {Event} - Self reference for chaining
   */
  setEventInfo(eventInfo) {
    loSet(this.raw, ['eventInfo'], eventInfo);
    return this;
  }

  /**
   * Updates standard information about the event by deeply merging the
   * key/value pairs from the `eventInfo` argument into the `eventInfo` object,
   * creating a new `eventInfo` object if one did not already exist.
   *
   * @param {PlainEventInfo} eventInfo - Standard information about the event
   * @returns {Event} - Self reference for chaining
   */
  mergeEventInfo(eventInfo) {
    merge(this.raw, ['eventInfo'], eventInfo);
    return this;
  }

  /**
   * Sets event categorization data by replacing `category` with the `category`
   * argument, destroying any existing event categorization data.
   *
   * @param {PlainCategory} category - Event categorization data
   * @returns {Event} - Self reference for chaining
   */
  setCategory(category) {
    loSet(this.raw, ['category'], category);
    return this;
  }

  /**
   * Updates event categorization data by deeply merging the key/value pairs
   * from the `category` argument into the `category` object, creating a
   * new `category` object if one did not already exist.
   *
   * @param {PlainCategory} category - Event categorization data
   * @returns {Event} - Self reference for chaining
   */
  mergeCategory(category) {
    merge(this.raw, ['category'], category);
    return this;
  }

  /**
   * Sets additional facts about the event by replacing `attributes` with the
   * `attributes` argument, destroying any existing attributes.
   *
   * @param {object} attributes - Additional facts about the event
   * @returns {Event} - Self reference for chaining
   */
  setAttributes(attributes) {
    loSet(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Updates additional facts about the event by deeply merging the key/value
   * pairs from the `attributes` argument into the `attributes` object, creating
   * a new `attributes` object if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the event
   * @returns {Event} - Self reference for chaining
   */
  mergeAttributes(attributes) {
    merge(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Sets an additional fact about the event.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @returns {Event} - Self reference for chaining
   */
  addAttribute(name, value) {
    loSet(this.raw, ['attributes', name], value);
    return this;
  }

  // Developer candy

  /**
   * Sets the human-friendly name of this event.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setEventName(value) {
    loSet(this.raw, ['eventInfo', 'eventName'], value);
    return this;
  }

  /**
   * Sets the systems-oriented action identifier for this event.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setEventAction(value) {
    loSet(this.raw, ['eventInfo', 'eventAction'], value);
    return this;
  }

  /**
   * Sets the number of points for this event.
   *
   * @param {number} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setEventPoints(value) {
    loSet(this.raw, ['eventInfo', 'eventPoints'], value);
    return this;
  }

  /**
   * Sets the type of event that this is.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setType(value) {
    loSet(this.raw, ['eventInfo', 'type'], value);
    return this;
  }

  /**
   * Sets when this event occurred.
   *
   * @param {(string|Date)} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setTimeStamp(value) {
    loSet(this.raw, ['eventInfo', 'timeStamp'], value);
    return this;
  }

  /**
   * Sets the cause of this event.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setCause(value) {
    loSet(this.raw, ['eventInfo', 'cause'], value);
    return this;
  }

  /**
   * Sets the effect of this event.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setEffect(value) {
    loSet(this.raw, ['eventInfo', 'effect'], value);
    return this;
  }

  /**
   * Sets the top-level category that this event belongs to.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setPrimaryCategory(value) {
    loSet(this.raw, ['category', 'primaryCategory'], value);
    return this;
  }

  /**
   * Sets the sub-level category that this event belongs to.
   *
   * @param {string} value - value to set
   * @returns {Event} - Self reference for chaining
   */
  setSubCategory(value) {
    loSet(this.raw, ['category', 'subCategory'], value);
    return this;
  }
}

/**
 * Transforms a plain event or an Event class instance into a plain javascript
 * object and returns it.
 *
 * @param {(PlainEvent|Event)} event - The event object to normalize
 * @returns {PlainEvent} - The normalized form of the given event
 */
Event.normalize = event => (
  event instanceof Event ? event.raw : event
);

/**
 * Plugin that adds event-related methods and sub-classes to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import eventPlugin from 'ddl-tools-plugin-event';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(eventPlugin);
 */
const eventPlugin = {
  /**
   * The Event class.
   *
   * @see Event
   */
  Event,

  /**
   * Adds an event to the list of events.
   *
   * @example
ddlTools.addEvent({
eventInfo: {
  name: 'Navigation menu item selected',
  action: 'navigate',
  cause: 'userInitiated',
  effect: 'navigate to new page',
},
category: {
  primaryCategory: 'pageNavigation',
  subCategory: 'navigationMenu',
},
});
   * @example
const event = new ddlTools.Event();
event
.setEventName('Navigation menu item selected')
.setEventAction('navigate')
.setCause('userInitiated')
.setEffect('navigate to new page')
.setPrimaryCategory('pageNavigation')
.setSubCategory('navigationMenu');
ddlTools.addEvent(event);
 * @example
window.onerror = function(msg, url, line, col, error) {
const errorEvent = ddlTools.transformErrorToEvent(error);
ddlTools.addEvent(errorEvent);
};
   * @example
getNetworkResource().catch((error) => {
const errorEvent = ddlTools.transformErrorToEvent(error);
errorEvent
  .setEventName('Network resource failure')
  .setEffect('default network resource');
ddlTools.addEvent(errorEvent);
});
   * @param {(PlainEvent|Event)} event - Event to add
   * @returns {object} - Self reference for chaining
   */
  addEvent: function addEvent(event) {
    this.push(['event'], Event.normalize(event));
    return this;
  },

  /**
   * Transforms an Error object into an Event object.
   *
   * @example
window.onerror = function(msg, url, line, col, error) {
const errorEvent = ddlTools.transformErrorToEvent(error);
ddlTools.addEvent(errorEvent);
};
   * @example
getNetworkResource().catch((error) => {
const errorEvent = ddlTools.transformErrorToEvent(error);
errorEvent
  .setEventName('Network resource failure')
  .setEffect('default network resource');
ddlTools.addEvent(errorEvent);
});
   * @param {(Error|object)} error - The Error to transform into an Event
   * @returns {Event} - The Event resulting from the transformation
   */
  transformErrorToEvent: function transformErrorToEvent(error = {}) {
    const event = {
      eventInfo: {
        name: error.name || 'UnknownError',
        type: error.type || 'javascriptError',
        cause: error.message || 'Cause unknown',
        timeStamp: error.timeStamp || new Date(),
      },
      category: {
        primaryCategory: error.primaryCategory || 'error',
        subCategory: error.subCategory || 'clientError',
      },
    };
    return new Event(event);
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = eventPlugin;
