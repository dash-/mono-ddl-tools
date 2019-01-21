// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const trxPlugin = require('../../src/transactionPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

// eslint-disable-next-line max-statements
describe('Plugin: transaction', () => {
  describe('setTransaction()', () => {
    it('should set transaction to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransaction({
        profile: {
          profileInfo: {
            profileID: 'test-profileID',
          },
        },
      });
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
    it('should replace existing transaction with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-userName',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransaction({
        profile: {
          profileInfo: {
            profileID: 'test-profileID',
          },
        },
      });
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

  describe('mergeTransaction()', () => {
    it('should merge existing transaction with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-userName',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransaction({
        profile: {
          profileInfo: {
            profileID: 'test-profileID',
          },
        },
      });
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-userName',
              profileID: 'test-profileID',
            },
          },
        },
      });
    });
  });

  describe('setTransactionId()', () => {
    it('should set transaction.transactionID to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionId('test-transactionID');
      expect(digitalData).toEqual({
        transaction: {
          transactionID: 'test-transactionID',
        },
      });
    });
  });

  describe('setTransactionProfile()', () => {
    it('should set transaction.profile to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
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
    it('should replace existing transaction.profile with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
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

  describe('mergeTransactionProfile()', () => {
    it('should merge existing transaction.profile with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransactionProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
              profileID: 'test-profileID',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileInfo()', () => {
    it('should set transaction.profile.profileInfo to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfileInfo({
        profileID: 'test-profileID',
      });
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
    it('should replace existing transaction.profile.profileInfo with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfileInfo({
        profileID: 'test-profileID',
      });
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

  describe('mergeTransactionProfileInfo()', () => {
    it('should merge existing transaction.profile.profileInfo with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransactionProfileInfo({
        profileID: 'test-profileID',
      });
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            profileInfo: {
              userName: 'test-profileID',
              profileID: 'test-profileID',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileAddress()', () => {
    it('should set transaction.profile.address to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfileAddress({
        line1: 'test-line1',
      });
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
    it('should replace existing transaction.profile.address with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            address: {
              city: 'test-city',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfileAddress({
        line1: 'test-line1',
      });
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

  describe('mergeTransactionProfileAddress()', () => {
    it('should merge existing transaction.profile.address with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            address: {
              city: 'test-city',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransactionProfileAddress({
        line1: 'test-line1',
      });
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            address: {
              city: 'test-city',
              line1: 'test-line1',
            },
          },
        },
      });
    });
  });

  describe('setTransactionProfileShippingAddress()', () => {
    it('should set transaction.profile.shippingAddress to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfileShippingAddress({
        line1: 'test-line1',
      });
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
    it('should replace existing transaction.profile.shippingAddress with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            shippingAddress: {
              city: 'test-city',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionProfileShippingAddress({
        line1: 'test-line1',
      });
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

  describe('mergeTransactionProfileShippingAddress()', () => {
    it('should merge existing transaction.profile.shippingAddress with the object given', () => {
      const digitalData = {
        transaction: {
          profile: {
            shippingAddress: {
              city: 'test-city',
            },
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransactionProfileShippingAddress({
        line1: 'test-line1',
      });
      expect(digitalData).toEqual({
        transaction: {
          profile: {
            shippingAddress: {
              city: 'test-city',
              line1: 'test-line1',
            },
          },
        },
      });
    });
  });

  describe('setTransactionTotal()', () => {
    it('should set transaction.total to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionTotal({
        basePrice: 103,
      });
      expect(digitalData).toEqual({
        transaction: {
          total: {
            basePrice: 103,
          },
        },
      });
    });
    it('should replace existing transaction.total with the object given', () => {
      const digitalData = {
        transaction: {
          total: {
            transactionTotal: 113,
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionTotal({
        basePrice: 103,
      });
      expect(digitalData).toEqual({
        transaction: {
          total: {
            basePrice: 103,
          },
        },
      });
    });
  });

  describe('mergeTransactionTotal()', () => {
    it('should merge existing transaction.total with the object given', () => {
      const digitalData = {
        transaction: {
          total: {
            transactionTotal: 113,
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransactionTotal({
        basePrice: 103,
      });
      expect(digitalData).toEqual({
        transaction: {
          total: {
            transactionTotal: 113,
            basePrice: 103,
          },
        },
      });
    });
  });

  describe('setTransactionAttributes()', () => {
    it('should set transaction.attributes to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        transaction: {
          attributes: {
            testAttribute: 'test-value',
          },
        },
      });
    });
    it('should replace existing transaction.attributes with the object given', () => {
      const digitalData = {
        transaction: {
          attributes: {
            existingAttribute: 'existing-value',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.setTransactionAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        transaction: {
          attributes: {
            testAttribute: 'test-value',
          },
        },
      });
    });
  });

  describe('mergeTransactionAttributes()', () => {
    it('should merge existing transaction.attributes with the object given', () => {
      const digitalData = {
        transaction: {
          attributes: {
            existingAttribute: 'existing-value',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.mergeTransactionAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        transaction: {
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        },
      });
    });
  });

  describe('addTransactionAttribute()', () => {
    it('should add an attribute with the name given, set to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.addTransactionAttribute('testAttribute', 'test-value');
      expect(digitalData).toEqual({
        transaction: {
          attributes: {
            testAttribute: 'test-value',
          },
        },
      });
    });
    it('should add an attribute to the existing base object', () => {
      const digitalData = {
        transaction: {
          attributes: {
            existingAttribute: 'existing-value',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(trxPlugin);
      ddlTools.addTransactionAttribute('testAttribute', 'test-value');
      expect(digitalData).toEqual({
        transaction: {
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        },
      });
    });
  });
});
