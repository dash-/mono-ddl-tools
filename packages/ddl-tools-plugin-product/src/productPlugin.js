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
 * Product categorization data.
 *
 * @typedef PlainProductCategory
 * @property {string} primaryCategory - Top-level category of the product
 * @property {string} subCategory - Sub-level category of the product
 * @property {string} productType - Type of product
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
 * Metadata describing a product.
 *
 * @typedef PlainProduct
 * @property {PlainProductInfo} productInfo - Standard product information
 * @property {PlainProductCategory} category - Product categorization data
 * @property {PlainProduct[]} linkedProduct - List of data describing products
 *   linked to the product
 * @property {object} attributes - Extensible key-value pairs describing
 *   additional facts about the product
 */

/**
 * Helper class to build product objects for use in a digital data layer.
 *
 * @class
 */
class Product {
  /**
   * Instantiates a new Product.
   *
   * @param {PlainProduct} [product] - Data describing the product
   * @returns {Product} - Instance
   */
  constructor(product = {}) {
    this.raw = product;
  }

  // Core methods

  /**
   * Sets standard product information by replacing `productInfo` with the
   * `productInfo` argument, destroying any existing standard product
   * information.
   *
   * @param {PlainProductInfo} productInfo - Standard product information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {Product} - Self reference for chaining
   */
  setProductInfo(productInfo) {
    loSet(this.raw, ['productInfo'], productInfo);
    return this;
  }

  /**
   * Updates standard product information by deeply merging the key/value pairs
   * from the `productInfo` argument into the `productInfo` object, creating a
   * new `productInfo` object if one did not already exist.
   *
   * @param {PlainProductInfo} productInfo - Standard product information
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {Product} - Self reference for chaining
   */
  mergeProductInfo(productInfo) {
    merge(this.raw, ['productInfo'], productInfo);
    return this;
  }

  /**
   * Sets product categorization data by replacing `category` with the
   * `category` argument, destroying any existing product categorization data.
   *
   * @param {PlainProductCategory} category - Product categorization data
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {Product} - Self reference for chaining
   */
  setCategory(category) {
    loSet(this.raw, ['category'], category);
    return this;
  }

  /**
   * Updates product categorization data by deeply merging the key/value pairs
   * from the `category` argument into the `category` object, creating a
   * new `category` object if one did not already exist.
   *
   * @param {PlainProductCategory} category - Product categorization data
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {Product} - Self reference for chaining
   */
  mergeCategory(category) {
    merge(this.raw, ['category'], category);
    return this;
  }

  /**
   * Sets additional facts about the product by replacing `attributes` with the
   * `attributes` argument, destroying any existing attributes.
   *
   * @param {object} attributes - Additional facts about the product
   * @returns {Product} - Self reference for chaining
   */
  setAttributes(attributes) {
    loSet(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Updates additional facts about the product by deeply merging the key/value
   * pairs from the `attributes` argument into the `attributes` object, creating
   * a new `attributes` object if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the product
   * @returns {Product} - Self reference for chaining
   */
  mergeAttributes(attributes) {
    merge(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Sets an additional fact about the product.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @returns {Product} - Self reference for chaining
   */
  addAttribute(name, value) {
    loSet(this.raw, ['attributes', name], value);
    return this;
  }

  // Developer candy

  /**
   * Sets the unique identifier of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setProductId(value) {
    loSet(this.raw, ['productInfo', 'productID'], value);
    return this;
  }

  /**
   * Sets the name of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setProductName(value) {
    loSet(this.raw, ['productInfo', 'productName'], value);
    return this;
  }

  /**
   * Sets the description of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setDescription(value) {
    loSet(this.raw, ['productInfo', 'description'], value);
    return this;
  }

  /**
   * Sets the URL of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setProductURL(value) {
    loSet(this.raw, ['productInfo', 'productURL'], value);
    return this;
  }

  /**
   * Sets the image of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setProductImage(value) {
    loSet(this.raw, ['productInfo', 'productImage'], value);
    return this;
  }

  /**
   * Sets the thumbnail of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setProductThumbnail(value) {
    loSet(this.raw, ['productInfo', 'productThumbnail'], value);
    return this;
  }

  /**
   * Sets the manufacturer of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setManufacturer(value) {
    loSet(this.raw, ['productInfo', 'manufacturer'], value);
    return this;
  }

  /**
   * Sets the sku of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setSku(value) {
    loSet(this.raw, ['productInfo', 'sku'], value);
    return this;
  }

  /**
   * Sets the color of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setColor(value) {
    loSet(this.raw, ['productInfo', 'color'], value);
    return this;
  }

  /**
   * Sets the size of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setSize(value) {
    loSet(this.raw, ['productInfo', 'size'], value);
    return this;
  }

  /**
   * Sets the primary category of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setPrimaryCategory(value) {
    loSet(this.raw, ['category', 'primaryCategory'], value);
    return this;
  }

  /**
   * Sets the sub-level category of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setSubCategory(value) {
    loSet(this.raw, ['category', 'subCategory1'], value);
    return this;
  }

  /**
   * Sets the type of the product.
   *
   * @param {string} value - value to set
   * @returns {Product} - Self reference for chaining
   */
  setCategoryProductType(value) {
    loSet(this.raw, ['category', 'productType'], value);
    return this;
  }
}

/**
 * Transforms a plain product or a Product class instance into a plain
 * javascript object and returns it.
 *
 * @param {(PlainProduct|Product)} product - The product object to normalize
 * @returns {PlainProduct} - The normalized form of the given product
 */
Product.normalize = product => (
  product instanceof Product ? product.raw : product
);

/**
 * Plugin that adds general product-related methods and a sub-class to
 * ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import productPlugin from 'ddl-tools-plugin-product';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(productPlugin);
 */
const productPlugin = {
  /**
   * The Product class.
   *
   * @see Product
   */
  Product,

  /**
   * Adds a product to the list of products.
   *
   * @example
ddlTools.addProduct({
productID: '1234a',
productName: 'Example Product',
description: 'Amazing new example product',
});
   * @example
const product = new ddlTools.Product();
product
.setProductId('1234a')
.setProductName('Example Product')
.setDescription('Amazing new example product');
ddlTools.addProduct(product);
   * @param {(PlainProduct|Product)} product - The product to add
   * @returns {object} - Self reference for chaining
   */
  addProduct: function addProduct(product) {
    this.push(['product'], Product.normalize(product));
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = productPlugin;
