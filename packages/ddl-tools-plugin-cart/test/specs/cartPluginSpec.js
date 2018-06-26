// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const cartPlugin = require('../../src/cartPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

describe('Plugin: cart', () => {
  describe('setCart()', () => {
    it('should set cart to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.setCart({
        cartID: 'test-cartID',
      });
      expect(digitalData).toEqual({ cart: { cartID: 'test-cartID' } });
    });
    it('should replace existing cart with the object given', () => {
      const digitalData = {
        cart: {
          price: {
            basePrice: 103,
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.setCart({
        cartID: 'test-cartID',
      });
      expect(digitalData).toEqual({ cart: { cartID: 'test-cartID' } });
    });
  });

  describe('mergeCart()', () => {
    it('should merge existing cart with the object given', () => {
      const digitalData = {
        cart: {
          price: {
            basePrice: 103,
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.mergeCart({
        cartID: 'test-cartID',
      });
      expect(digitalData).toEqual({
        cart: {
          cartID: 'test-cartID',
          price: {
            basePrice: 103,
          },
        },
      });
    });
  });

  describe('setCartId()', () => {
    it('should set cart.cartID to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.setCartId('test-cartID');
      expect(digitalData).toEqual({ cart: { cartID: 'test-cartID' } });
    });
  });

  describe('setCartPrice()', () => {
    it('should set cart.price to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.setCartPrice({
        basePrice: 103,
      });
      expect(digitalData).toEqual({
        cart: {
          price: {
            basePrice: 103,
          },
        },
      });
    });
    it('should replace existing cart.price with the object given', () => {
      const digitalData = {
        cart: {
          price: {
            cartTotal: 13,
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.setCartPrice({
        basePrice: 103,
      });
      expect(digitalData).toEqual({
        cart: {
          price: {
            basePrice: 103,
          },
        },
      });
    });
  });

  describe('mergeCartPrice()', () => {
    it('should merge existing cart.price with the object given', () => {
      const digitalData = {
        cart: {
          price: {
            cartTotal: 13,
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(cartPlugin);
      ddlTools.mergeCartPrice({
        basePrice: 103,
      });
      expect(digitalData).toEqual({
        cart: {
          price: {
            basePrice: 103,
            cartTotal: 13,
          },
        },
      });
    });
  });
});
