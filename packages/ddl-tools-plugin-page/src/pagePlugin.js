/**
 * Page categorization data.
 *
 * @typedef PlainPageCategory
 * @property {string} primaryCategory - Top-level category of the page
 * @property {string} subCategory - Sub-level category of the page
 * @property {string} productType - Type of product in the page
 */

/**
 * Standard page information.
 *
 * @typedef PlainPageInfo
 * @property {string} pageID - Page's identifier
 * @property {string} pageName - Page's name
 * @property {string} destinationURL - Page's URL (ie. `document.location`)
 * @property {string} referringURL - URL that referred user to the page
 *   (ie. `document.referrer`)
 * @property {string} sysEnv - Page's system environment
 * @property {string} variant - Page variant (ie. A/B testing bucket)
 * @property {string} version - Page's version number
 * @property {string[]} breadCrumbs - Page's bread crumbs (semantic path)
 * @property {string} author - Name of the page's author
 * @property {(string|Date)} issueDate - Date page was issued on (JS Date or
 *   ISO 8601)
 * @property {(string|Date)} effectiveDate - Page's effective date (JS Date or
 *   ISO 8601)
 * @property {(string|Date)} expiryDate - Page's expiry date (JS Date or ISO 8601)
 * @property {string} language - Human language the page is written in (ISO 639)
 * @property {string} geoRegion - Geographic region (ie. country) (ISO 3166)
 * @property {string} industryCodes - Industry codes page applies to (Standard
 *   Industrial Classification [SIC] code)
 * @property {string} publisher - Page's publisher name
 */

/**
 * Metadata describing a web page.
 *
 * @typedef PlainPage
 * @property {PlainPageInfo} pageInfo - Standard page information
 * @property {PlainPageCategory} category - Page categorization data
 * @property {object} attributes - Extensible key-value pairs describing
 *   additional facts about the page
 */

/**
 * Plugin that adds general page-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import pagePlugin from 'ddl-tools-plugin-page';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(pagePlugin);
 */
const pagePlugin = {
  /**
   * Records page metadata by replacing `page` with the `page` argument,
   * destroying any existing page metadata.
   *
   * @param {PlainPage} page - Web page metadata
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setPage: function setPage(page) {
    this.set(['page'], page);
    return this;
  },

  /**
   * Updates page metadata by deeply merging the key/value pairs from the `page`
   * argument into the `page` object, creating a new `page` object if one did
   * not already exist.
   *
   * @param {PlainPage} page - Web page metadata
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergePage: function mergePage(page) {
    this.merge(['page'], page);
    return this;
  },

  /**
   * Records detailed page information by replacing `page.pageInfo` with the
   * `pageInfo` argument, destroying any existing detailed page information.
       *
   * @param {PlainPageInfo} pageInfo - Detailed page information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setPageInfo: function setPageInfo(pageInfo) {
    this.set(['page', 'pageInfo'], pageInfo);
    return this;
  },

  /**
   * Updates detailed page information by deeply merging the key/value pairs
   * from the `pageInfo` argument into the `page.pageInfo` object, creating a
   * new `page.pageInfo` object if one did not already exist.
   *
   * @param {PlainPageInfo} pageInfo - Detailed page information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergePageInfo: function mergePageInfo(pageInfo) {
    this.merge(['page', 'pageInfo'], pageInfo);
    return this;
  },

  /**
   * Records page categorization data by replacing `page.category` with the
   * `category` argument, destroying any existing page categorization data.
   *
   * @param {PlainPageCategory} category - Page categorization data
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setPageCategory: function setPageCategory(category) {
    this.set(['page', 'category'], category);
    return this;
  },

  /**
   * Updates page categorization data by deeply merging the key/value pairs from
   * the `category` argument into the `page.category` object, creating a new
   * `page.category` object if one did not already exist.
   *
   * @param {PlainPageCategory} category - Page categorization data
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergePageCategory: function mergePageCategory(category) {
    this.merge(['page', 'category'], category);
    return this;
  },

  /**
   * Records additional facts about the page by replacing `page.attributes` with
   * the `attributes` argument, destroying any existing attributes.
   *
   * @param {object} attributes - Additional facts about the page
   * @returns {object} - Self reference for chaining
   */
  setPageAttributes: function setPageAttributes(attributes) {
    this.set(['page', 'attributes'], attributes);
    return this;
  },

  /**
   * Updates additional facts about the page by deeply merging the key/value
   * pairs from the `attributes` argument into the `page.attributes` object,
   * creating a new `page.attributes` object if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the page
   * @returns {object} - Self reference for chaining
   */
  mergePageAttributes: function mergePageAttributes(attributes) {
    this.merge(['page', 'attributes'], attributes);
    return this;
  },

  /**
   * Records an additional fact about the page.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @returns {object} - Self reference for chaining
   */
  addPageAttribute: function addPageAttribute(name, value) {
    this.set(['page', 'attributes', name], value);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = pagePlugin;
