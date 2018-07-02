/**
 * Plugin that adds detailed page-related methods to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import pageDeepPlugin from 'ddl-tools-plugin-page-deep';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(pageDeepPlugin);
 */
const pageDeepPlugin = {
  /**
   * Records the page's identifier.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setPageId: function setPageId(value) {
    this.set(['page', 'pageInfo', 'pageID'], value);
    return this;
  },

  /**
   * Records the page's name.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setPageName: function setPageName(value) {
    this.set(['page', 'pageInfo', 'pageName'], value);
    return this;
  },

  /**
   * Records the page's destination URL (ie. `document.location`).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setDestinationURL: function setDestinationURL(value) {
    this.set(['page', 'pageInfo', 'destinationURL'], value);
    return this;
  },

  /**
   * Records the page's referring URL (ie. `document.referrer`).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setReferringURL: function setReferringURL(value) {
    this.set(['page', 'pageInfo', 'referringURL'], value);
    return this;
  },

  /**
   * Records the page's system environment (ie. production vs development).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setSysEnv: function setSysEnv(value) {
    this.set(['page', 'pageInfo', 'sysEnv'], value);
    return this;
  },

  /**
   * Records the page variant (A/B testing).
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setVariant: function setVariant(value) {
    this.set(['page', 'pageInfo', 'variant'], value);
    return this;
  },

  /**
   * Records the page's version.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setVersion: function setVersion(value) {
    this.set(['page', 'pageInfo', 'version'], value);
    return this;
  },

  /**
   * Records the page's bread crumbs (semantic path).
   *
   * @param {string[]} breadCrumbs - path list within site hierarchy
   * @returns {object} - Self reference for chaining
   */
  setBreadCrumbs: function setBreadCrumbs(breadCrumbs) {
    this.set(['page', 'pageInfo', 'breadcrumbs'], breadCrumbs);
    return this;
  },

  /**
   * Records the name of the page's author.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setAuthor: function setAuthor(value) {
    this.set(['page', 'pageInfo', 'author'], value);
    return this;
  },

  /**
   * Records the page's issue date. (JS Date or ISO 8601)
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setIssueDate: function setIssueDate(value) {
    this.set(['page', 'pageInfo', 'issueDate'], value);
    return this;
  },

  /**
   * Records the page's effective date. (JS Date or ISO 8601)
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setEffectiveDate: function setEffectiveDate(value) {
    this.set(['page', 'pageInfo', 'effectiveDate'], value);
    return this;
  },

  /**
   * Records the page's expiration date. (JS Date or ISO 8601)
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setExpiryDate: function setExpiryDate(value) {
    this.set(['page', 'pageInfo', 'expiryDate'], value);
    return this;
  },

  /**
   * Records the human language the page is written in. (ISO 639)
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setLanguage: function setLanguage(value) {
    this.set(['page', 'pageInfo', 'language'], value);
    return this;
  },

  /**
   * Records the geographic region the page applies to (ie. country). (ISO 3166)
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setGeoRegion: function setGeoRegion(value) {
    this.set(['page', 'pageInfo', 'geoRegion'], value);
    return this;
  },

  /**
   * Records the industry codes the page applies to. (Standard Industrial
   * Classification / SIC code)
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setIndustryCodes: function setIndustryCodes(value) {
    this.set(['page', 'pageInfo', 'industryCodes'], value);
    return this;
  },

  /**
   * Records the page's publisher name.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setPublisher: function setPublisher(value) {
    this.set(['page', 'pageInfo', 'publisher'], value);
    return this;
  },

  /**
   * Records the primary category of the page.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setPagePrimaryCategory: function setPagePrimaryCategory(value) {
    this.set(['page', 'category', 'primaryCategory'], value);
    return this;
  },

  /**
   * Records the sub-level category of the page.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setPageSubCategory: function setPageSubCategory(value) {
    this.set(['page', 'category', 'subCategory1'], value);
    return this;
  },

  /**
   * Records the type of product in the page.
   *
   * @param {string} value - value to set
   * @returns {object} - Self reference for chaining
   */
  setPageCategoryProductType: function setPageCategoryProductType(value) {
    this.set(['page', 'category', 'productType'], value);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = pageDeepPlugin;
