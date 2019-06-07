// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const trxListPlugin = require('../../src/transactionListPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

const createTrxListItemInstance = (trxListItem) => {
  const ddlTools = new DDLTools({}, schemaValidator);
  ddlTools.use(trxListPlugin);
  return new ddlTools.TransactionListItem(trxListItem);
};

// eslint-disable-next-line max-statements
describe('Plugin: transactionList', () => {
  describe('TransactionListItem', () => {
    describe('constructor()', () => {
      it('should instantiate a new TransactionListItem instance', () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(trxListPlugin);
        const trxListItem = new ddlTools.TransactionListItem();
        expect(trxListItem instanceof ddlTools.TransactionListItem).toEqual(true);
      });
      it("should initialize instance's raw value to the object given", () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(trxListPlugin);
        const trxListItem = new ddlTools.TransactionListItem({
          transactionID: 'test-transactionID',
        });
        expect(trxListItem.raw).toEqual({
          transactionID: 'test-transactionID',
        });
      });
    });

    describe('setTransactionId()', () => {
      it('should set transactionID to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setTransactionId('test-transactionID');
        expect(trxListItem.raw).toEqual({
          transactionID: 'test-transactionID',
        });
      });
    });

    describe('setProfile()', () => {
      it('should set profile to the object given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setProfile({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        });
      });
      it('should replace existing profile with the object given', () => {
        const plainTrxListItem = {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.setProfile({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        });
      });
    });

    describe('setProfileInfo()', () => {
      it('should set profile.profileInfo to the object given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setProfileInfo({
          profileID: 'test-profileID',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        });
      });
      it('should replace existing profile.profileInfo with the object given', () => {
        const plainTrxListItem = {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.setProfileInfo({
          profileID: 'test-profileID',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        });
      });
    });

    describe('mergeProfileInfo()', () => {
      it('should merge existing profile.profileInfo with the object given', () => {
        const plainTrxListItem = {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.mergeProfileInfo({
          profileID: 'test-profileID',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              userName: 'test-profileID',
              profileID: 'test-profileID',
            },
          },
        });
      });
    });

    describe('setAddress()', () => {
      it('should set profile.address to the object given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddress({
          line1: 'test-line1',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              line1: 'test-line1',
            },
          },
        });
      });
      it('should replace existing profile.address with the object given', () => {
        const plainTrxListItem = {
          profile: {
            address: {
              city: 'test-city',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.setAddress({
          line1: 'test-line1',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              line1: 'test-line1',
            },
          },
        });
      });
    });

    describe('mergeAddress()', () => {
      it('should merge existing profile.address with the object given', () => {
        const plainTrxListItem = {
          profile: {
            address: {
              city: 'test-city',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.mergeAddress({
          line1: 'test-line1',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              city: 'test-city',
              line1: 'test-line1',
            },
          },
        });
      });
    });

    describe('setShippingAddress()', () => {
      it('should set profile.shippingAddress to the object given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddress({
          line1: 'test-line1',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              line1: 'test-line1',
            },
          },
        });
      });
      it('should replace existing profile.shippingAddress with the object given', () => {
        const plainTrxListItem = {
          profile: {
            shippingAddress: {
              city: 'test-city',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.setShippingAddress({
          line1: 'test-line1',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              line1: 'test-line1',
            },
          },
        });
      });
    });

    describe('mergeShippingAddress()', () => {
      it('should merge existing profile.shippingAddress with the object given', () => {
        const plainTrxListItem = {
          profile: {
            shippingAddress: {
              city: 'test-city',
            },
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.mergeShippingAddress({
          line1: 'test-line1',
        });
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              city: 'test-city',
              line1: 'test-line1',
            },
          },
        });
      });
    });

    describe('setTotal()', () => {
      it('should set total to the object given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setTotal({
          basePrice: 103,
        });
        expect(trxListItem.raw).toEqual({
          total: {
            basePrice: 103,
          },
        });
      });
      it('should replace existing total with the object given', () => {
        const plainTrxListItem = {
          total: {
            transactionTotal: 113,
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.setTotal({
          basePrice: 103,
        });
        expect(trxListItem.raw).toEqual({
          total: {
            basePrice: 103,
          },
        });
      });
    });

    describe('mergeTotal()', () => {
      it('should merge existing total with the object given', () => {
        const plainTrxListItem = {
          total: {
            transactionTotal: 113,
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.mergeTotal({
          basePrice: 103,
        });
        expect(trxListItem.raw).toEqual({
          total: {
            transactionTotal: 113,
            basePrice: 103,
          },
        });
      });
    });

    describe('setAttributes()', () => {
      it('should set attributes to the object given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAttributes({
          testAttribute: 'test-value',
        });
        expect(trxListItem.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should replace existing attributes with the object given', () => {
        const plainTrxListItem = {
          attributes: {
            existingAttribute: 'existing-value',
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.setAttributes({
          testAttribute: 'test-value',
        });
        expect(trxListItem.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('mergeAttributes()', () => {
      it('should merge existing attributes with the object given', () => {
        const plainTrxListItem = {
          attributes: {
            existingAttribute: 'existing-value',
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.mergeAttributes({
          testAttribute: 'test-value',
        });
        expect(trxListItem.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('addAttribute()', () => {
      it('should add an attribute with the name given, set to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.addAttribute('testAttribute', 'test-value');
        expect(trxListItem.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should add an attribute to the existing base object', () => {
        const plainTrxListItem = {
          attributes: {
            existingAttribute: 'existing-value',
          },
        };
        const trxListItem = createTrxListItemInstance(plainTrxListItem);
        trxListItem.addAttribute('testAttribute', 'test-value');
        expect(trxListItem.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('setProfileId()', () => {
      it('should set profile.profileInfo.profileID to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setProfileId('test-profileID');
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        });
      });
    });

    describe('setUserName()', () => {
      it('should set profile.profileInfo.userName to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setUserName('test-userName');
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              userName: 'test-userName',
            },
          },
        });
      });
    });

    describe('setEmail()', () => {
      it('should set profile.profileInfo.email to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setEmail('test-email');
        expect(trxListItem.raw).toEqual({
          profile: {
            profileInfo: {
              email: 'test-email',
            },
          },
        });
      });
    });

    describe('setAddressLine1()', () => {
      it('should set profile.address.line1 to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddressLine1('test-line1');
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              line1: 'test-line1',
            },
          },
        });
      });
    });

    describe('setAddressLine2()', () => {
      it('should set profile.address.line2 to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddressLine2('test-line2');
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              line2: 'test-line2',
            },
          },
        });
      });
    });

    describe('setAddressCity()', () => {
      it('should set profile.address.city to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddressCity('test-city');
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              city: 'test-city',
            },
          },
        });
      });
    });

    describe('setAddressStateProvince()', () => {
      it('should set profile.address.stateProvince to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddressStateProvince('test-stateProvince');
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              stateProvince: 'test-stateProvince',
            },
          },
        });
      });
    });

    describe('setAddressPostalCode()', () => {
      it('should set profile.address.postalCode to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddressPostalCode('test-postalCode');
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              postalCode: 'test-postalCode',
            },
          },
        });
      });
    });

    describe('setAddressCountry()', () => {
      it('should set profile.address.country to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setAddressCountry('test-country');
        expect(trxListItem.raw).toEqual({
          profile: {
            address: {
              country: 'test-country',
            },
          },
        });
      });
    });

    describe('setShippingAddressLine1()', () => {
      it('should set profile.shippingAddress.line1 to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddressLine1('test-line1');
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              line1: 'test-line1',
            },
          },
        });
      });
    });

    describe('setShippingAddressLine2()', () => {
      it('should set profile.shippingAddress.line2 to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddressLine2('test-line2');
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              line2: 'test-line2',
            },
          },
        });
      });
    });

    describe('setShippingAddressCity()', () => {
      it('should set profile.shippingAddress.city to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddressCity('test-city');
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              city: 'test-city',
            },
          },
        });
      });
    });

    describe('setShippingAddressStateProvince()', () => {
      it('should set profile.shippingAddress.stateProvince to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddressStateProvince('test-stateProvince');
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              stateProvince: 'test-stateProvince',
            },
          },
        });
      });
    });

    describe('setShippingAddressPostalCode()', () => {
      it('should set profile.shippingAddress.postalCode to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddressPostalCode('test-postalCode');
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              postalCode: 'test-postalCode',
            },
          },
        });
      });
    });

    describe('setShippingAddressCountry()', () => {
      it('should set profile.shippingAddress.country to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingAddressCountry('test-country');
        expect(trxListItem.raw).toEqual({
          profile: {
            shippingAddress: {
              country: 'test-country',
            },
          },
        });
      });
    });

    describe('setBasePrice()', () => {
      it('should set total.basePrice to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setBasePrice('test-basePrice');
        expect(trxListItem.raw).toEqual({
          total: {
            basePrice: 'test-basePrice',
          },
        });
      });
    });

    describe('setVoucherCode()', () => {
      it('should set total.voucherCode to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setVoucherCode('test-voucherCode');
        expect(trxListItem.raw).toEqual({
          total: {
            voucherCode: 'test-voucherCode',
          },
        });
      });
    });

    describe('setVoucherDiscount()', () => {
      it('should set total.voucherDiscount to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setVoucherDiscount('test-voucherDiscount');
        expect(trxListItem.raw).toEqual({
          total: {
            voucherDiscount: 'test-voucherDiscount',
          },
        });
      });
    });

    describe('setCurrency()', () => {
      it('should set total.currency to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setCurrency('test-currency');
        expect(trxListItem.raw).toEqual({
          total: {
            currency: 'test-currency',
          },
        });
      });
    });

    describe('setTaxRate()', () => {
      it('should set total.taxRate to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setTaxRate('test-taxRate');
        expect(trxListItem.raw).toEqual({
          total: {
            taxRate: 'test-taxRate',
          },
        });
      });
    });

    describe('setShipping()', () => {
      it('should set total.shipping to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShipping('test-shipping');
        expect(trxListItem.raw).toEqual({
          total: {
            shipping: 'test-shipping',
          },
        });
      });
    });

    describe('setShippingMethod()', () => {
      it('should set total.shippingMethod to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setShippingMethod('test-shippingMethod');
        expect(trxListItem.raw).toEqual({
          total: {
            shippingMethod: 'test-shippingMethod',
          },
        });
      });
    });

    describe('setPriceWithTax()', () => {
      it('should set total.priceWithTax to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setPriceWithTax('test-priceWithTax');
        expect(trxListItem.raw).toEqual({
          total: {
            priceWithTax: 'test-priceWithTax',
          },
        });
      });
    });

    describe('setTransactionTotal()', () => {
      it('should set total.transactionTotal to the value given', () => {
        const trxListItem = createTrxListItemInstance();
        trxListItem.setTransactionTotal('test-transactionTotal');
        expect(trxListItem.raw).toEqual({
          total: {
            transactionTotal: 'test-transactionTotal',
          },
        });
      });
    });
  });

  describe('addTransactionListItem()', () => {
    it('should add a new transaction list item when given a valid plain JS object', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxListPlugin);
      ddlTools.addTransactionListItem({
        transactionID: 'test-transactionID',
      });
      expect(digitalData).toEqual({
        transactionList: [
          {
            transactionID: 'test-transactionID',
          },
        ],
      });
    });
    it('should add a new transaction list item when given a TransactionListItem class instance', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxListPlugin);
      const trxListItem = new ddlTools.TransactionListItem();
      trxListItem.setTransactionId('test-transactionID');
      ddlTools.addTransactionListItem(trxListItem);
      expect(digitalData).toEqual({
        transactionList: [
          {
            transactionID: 'test-transactionID',
          },
        ],
      });
    });
  });

  describe('setTransactionList()', () => {
    it('should set transaction list to transaction list provided', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxListPlugin);
      ddlTools.setTransactionList([{
        transactionID: 'test-transactionID',
      }]);
      expect(digitalData).toEqual({
        transactionList: [
          {
            transactionID: 'test-transactionID',
          },
        ],
      });
    });
  });
});
