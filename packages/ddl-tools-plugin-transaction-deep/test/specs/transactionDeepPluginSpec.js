// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const trxDeepPlugin = require('../../src/transactionDeepPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

// eslint-disable-next-line max-statements
describe('Plugin: transactionDeep', () => {
  describe('setTransactionProfileId()', () => {
    it('should set transaction.profile.profileInfo.profileID to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileId('test-profileID');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileUserName()', () => {
    it('should set transaction.profile.profileInfo.userName to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileUserName('test-userName');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-userName',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileEmail()', () => {
    it('should set transaction.profile.profileInfo.email to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileEmail('test-email');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            profileInfo: {
              email: 'test-email',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddressLine1()', () => {
    it('should set transaction.profile.address.line1 to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileAddressLine1('test-line1');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              line1: 'test-line1',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddressLine2()', () => {
    it('should set transaction.profile.address.line2 to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileAddressLine2('test-line2');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              line2: 'test-line2',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddressCity()', () => {
    it('should set transaction.profile.address.city to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileAddressCity('test-city');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              city: 'test-city',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddressStateProvince()', () => {
    it('should set transaction.profile.address.stateProvince to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileAddressStateProvince('test-stateProvince');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              stateProvince: 'test-stateProvince',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddressPostalCode()', () => {
    it('should set transaction.profile.address.postalCode to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileAddressPostalCode('test-postalCode');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              postalCode: 'test-postalCode',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddressCountry()', () => {
    it('should set transaction.profile.address.country to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileAddressCountry('test-country');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              country: 'test-country',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddressLine1()', () => {
    it('should set transaction.profile.shippingAddress.line1 to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileShippingAddressLine1('test-line1');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              line1: 'test-line1',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddressLine2()', () => {
    it('should set transaction.profile.shippingAddress.line2 to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileShippingAddressLine2('test-line2');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              line2: 'test-line2',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddressCity()', () => {
    it('should set transaction.profile.shippingAddress.city to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileShippingAddressCity('test-city');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              city: 'test-city',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddressStateProvince()', () => {
    it('should set transaction.profile.shippingAddress.stateProvince to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileShippingAddressStateProvince('test-stateProvince');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              stateProvince: 'test-stateProvince',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddressPostalCode()', () => {
    it('should set transaction.profile.shippingAddress.postalCode to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileShippingAddressPostalCode('test-postalCode');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              postalCode: 'test-postalCode',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddressCountry()', () => {
    it('should set transaction.profile.shippingAddress.country to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionProfileShippingAddressCountry('test-country');
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              country: 'test-country',
            },
          },
        },
      });
    });
  });

  describe('setTransactionTotalBasePrice()', () => {
    it('should set transaction.total.basePrice to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalBasePrice('test-basePrice');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            basePrice: 'test-basePrice',
          },
        },
      });
    });
  });

  describe('setTransactionTotalVoucherCode()', () => {
    it('should set transaction.total.voucherCode to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalVoucherCode('test-voucherCode');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            voucherCode: 'test-voucherCode',
          },
        },
      });
    });
  });

  describe('setTransactionTotalVoucherDiscount()', () => {
    it('should set transaction.total.voucherDiscount to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalVoucherDiscount('test-voucherDiscount');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            voucherDiscount: 'test-voucherDiscount',
          },
        },
      });
    });
  });

  describe('setTransactionTotalCurrency()', () => {
    it('should set transaction.total.currency to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalCurrency('test-currency');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            currency: 'test-currency',
          },
        },
      });
    });
  });

  describe('setTransactionTotalTaxRate()', () => {
    it('should set transaction.total.taxRate to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalTaxRate('test-taxRate');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            taxRate: 'test-taxRate',
          },
        },
      });
    });
  });

  describe('setTransactionTotalShipping()', () => {
    it('should set transaction.total.shipping to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalShipping('test-shipping');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            shipping: 'test-shipping',
          },
        },
      });
    });
  });

  describe('setTransactionTotalShippingMethod()', () => {
    it('should set transaction.total.shippingMethod to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalShippingMethod('test-shippingMethod');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            shippingMethod: 'test-shippingMethod',
          },
        },
      });
    });
  });

  describe('setTransactionTotalPriceWithTax()', () => {
    it('should set transaction.total.priceWithTax to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotalPriceWithTax('test-priceWithTax');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            priceWithTax: 'test-priceWithTax',
          },
        },
      });
    });
  });

  describe('setTransactionTotal()', () => {
    it('should set transaction.total.transactionTotal to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxDeepPlugin);
      ddlTools.setTransactionTotal('test-transactionTotal');
      expect(digitalData).toEqual({
        transaction: {
          total: {
            transactionTotal: 'test-transactionTotal',
          },
        },
      });
    });
  });
});
