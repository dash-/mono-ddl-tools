// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const cartDeepPlugin = require('../../src/cartDeepPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

describe('Plugin: cartDeep', () => {
  describe('setCartPriceBasePrice()', () => {
    it('should set cart.price.basePrice to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceBasePrice(103);
      expect(digitalData).toEqual({
        cart: {
          price: {
            basePrice: 103,
          },
        },
      });
    });
  });

  describe('setCartPriceVoucherCode()', () => {
    it('should set cart.price.voucherCode to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceVoucherCode('test-voucherCode');
      expect(digitalData).toEqual({
        cart: {
          price: {
            voucherCode: 'test-voucherCode',
          },
        },
      });
    });
  });

  describe('setCartPriceVoucherDiscount()', () => {
    it('should set cart.price.voucherDiscount to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceVoucherDiscount(103);
      expect(digitalData).toEqual({
        cart: {
          price: {
            voucherDiscount: 103,
          },
        },
      });
    });
  });

  describe('setCartPriceCurrency()', () => {
    it('should set cart.price.currency to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceCurrency('dollars');
      expect(digitalData).toEqual({
        cart: {
          price: {
            currency: 'dollars',
          },
        },
      });
    });
  });

  describe('setCartPriceTaxRate()', () => {
    it('should set cart.price.taxRate to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceTaxRate(0.10);
      expect(digitalData).toEqual({
        cart: {
          price: {
            taxRate: 0.10,
          },
        },
      });
    });
  });

  describe('setCartPriceShipping()', () => {
    it('should set cart.price.shipping to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceShipping(103);
      expect(digitalData).toEqual({
        cart: {
          price: {
            shipping: 103,
          },
        },
      });
    });
  });

  describe('setCartPriceShippingMethod()', () => {
    it('should set cart.price.shippingMethod to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceShippingMethod('priority');
      expect(digitalData).toEqual({
        cart: {
          price: {
            shippingMethod: 'priority',
          },
        },
      });
    });
  });

  describe('setCartPricePriceWithTax()', () => {
    it('should set cart.price.priceWithTax to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPricePriceWithTax(103);
      expect(digitalData).toEqual({
        cart: {
          price: {
            priceWithTax: 103,
          },
        },
      });
    });
  });

  describe('setCartPriceCartTotal()', () => {
    it('should set cart.price.cartTotal to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartDeepPlugin);
      ddlTools.setCartPriceCartTotal(103);
      expect(digitalData).toEqual({
        cart: {
          price: {
            cartTotal: 103,
          },
        },
      });
    });
  });
});
