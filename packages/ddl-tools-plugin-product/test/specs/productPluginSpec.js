// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const productPlugin = require('../../src/productPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

const createProductInstance = (product) => {
  const ddlTools = new DDLTools({}, schemaValidator);
  ddlTools.use(productPlugin);
  return new ddlTools.Product(product);
};

describe('Plugin: product', () => {
  // eslint-disable-next-line max-statements
  describe('Product', () => {
    describe('constructor()', () => {
      it('should instantiate a new Product instance', () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(productPlugin);
        const product = new ddlTools.Product();
        expect(product instanceof ddlTools.Product).toEqual(true);
      });
      it("should initialize instance's raw value to the object given", () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(productPlugin);
        const product = new ddlTools.Product({
          productInfo: {
            productID: 'test-productID',
          },
        });
        expect(product.raw).toEqual({
          productInfo: {
            productID: 'test-productID',
          },
        });
      });
    });

    describe('setProductId()', () => {
      it('should set productInfo.productID on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setProductId('test-productID');
        expect(product.raw).toEqual({
          productInfo: {
            productID: 'test-productID',
          },
        });
      });
    });

    describe('setProductName()', () => {
      it('should set productInfo.productName on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setProductName('test-productName');
        expect(product.raw).toEqual({
          productInfo: {
            productName: 'test-productName',
          },
        });
      });
    });

    describe('setDescription()', () => {
      it('should set productInfo.description on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setDescription('test-description');
        expect(product.raw).toEqual({
          productInfo: {
            description: 'test-description',
          },
        });
      });
    });

    describe('setProductURL()', () => {
      it('should set productInfo.productURL on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setProductURL('http://test.example.com/path/to/product');
        expect(product.raw).toEqual({
          productInfo: {
            productURL: 'http://test.example.com/path/to/product',
          },
        });
      });
    });

    describe('setProductImage()', () => {
      it('should set productInfo.productImage on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setProductImage('http://test.example.com/path/to/product/img.jpg');
        expect(product.raw).toEqual({
          productInfo: {
            productImage: 'http://test.example.com/path/to/product/img.jpg',
          },
        });
      });
    });

    describe('setProductThumbnail()', () => {
      it('should set productInfo.productThumbnail on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setProductThumbnail('http://test.example.com/path/to/product/thumb.jpg');
        expect(product.raw).toEqual({
          productInfo: {
            productThumbnail: 'http://test.example.com/path/to/product/thumb.jpg',
          },
        });
      });
    });

    describe('setManufacturer()', () => {
      it('should set productInfo.manufacturer on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setManufacturer('test-manufacturer');
        expect(product.raw).toEqual({
          productInfo: {
            manufacturer: 'test-manufacturer',
          },
        });
      });
    });

    describe('setSku()', () => {
      it('should set productInfo.sku on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setSku('test-sku');
        expect(product.raw).toEqual({
          productInfo: {
            sku: 'test-sku',
          },
        });
      });
    });

    describe('setColor()', () => {
      it('should set productInfo.color on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setColor('test-color');
        expect(product.raw).toEqual({
          productInfo: {
            color: 'test-color',
          },
        });
      });
    });

    describe('setSize()', () => {
      it('should set productInfo.size on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setSize('test-size');
        expect(product.raw).toEqual({
          productInfo: {
            size: 'test-size',
          },
        });
      });
    });

    describe('setPrimaryCategory()', () => {
      it('should set category.primaryCategory on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setPrimaryCategory('test-primaryCategory');
        expect(product.raw).toEqual({
          category: {
            primaryCategory: 'test-primaryCategory',
          },
        });
      });
    });

    describe('setSubCategory()', () => {
      it('should set category.subCategory1 on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setSubCategory('test-subCategory');
        expect(product.raw).toEqual({
          category: {
            subCategory1: 'test-subCategory',
          },
        });
      });
    });

    describe('setCategoryProductType()', () => {
      it('should set category.productType on Product.raw to the value given', () => {
        const product = createProductInstance();
        product.setCategoryProductType('test-productType');
        expect(product.raw).toEqual({
          category: {
            productType: 'test-productType',
          },
        });
      });
    });

    describe('setAttributes()', () => {
      it('should set attributes on Product.raw to the object given', () => {
        const product = createProductInstance();
        product.setAttributes({
          testAttribute: 'test-value',
        });
        expect(product.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should replace existing attributes on Product.raw with the object given', () => {
        const product = createProductInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        product.setAttributes({
          testAttribute: 'test-value',
        });
        expect(product.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('mergeAttributes()', () => {
      it('should merge attributes on Product.raw with the object given', () => {
        const product = createProductInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        product.mergeAttributes({
          testAttribute: 'test-value',
        });
        expect(product.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('addAttribute()', () => {
      // eslint-disable-next-line max-len
      it('should add a new attributes with the name given, set to the value given (non-existent base object)', () => {
        const product = createProductInstance();
        product.addAttribute('testAttribute', 'test-value');
        expect(product.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should add a new attributes with the name given, set to the value given (existing base object)', () => {
        const product = createProductInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        product.addAttribute('testAttribute', 'test-value');
        expect(product.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });
  });

  describe('addProduct()', () => {
    it('should add a new product when given a valid plain JS object', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(productPlugin);
      ddlTools.addProduct({
        productInfo: {
          productID: 'test-productID',
        },
      });
      expect(digitalData).toEqual({
        product: [
          {
            productInfo: {
              productID: 'test-productID',
            },
          },
        ],
      });
    });
    it('should add a new product when given a Product class instance', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(productPlugin);
      const product = new ddlTools.Product();
      product.setProductId('test-productID');
      ddlTools.addProduct(product);
      expect(digitalData).toEqual({
        product: [
          {
            productInfo: {
              productID: 'test-productID',
            },
          },
        ],
      });
    });
  });
});
