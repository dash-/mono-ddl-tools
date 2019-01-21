const DDLTools = require('../../src/DDLTools');
const loSet = require('lodash.set');

const pagePlugin = {
  setPageName: function setPageName(value) {
    this.set(['page', 'pageInfo', 'pageName'], value);
  },
};

const ddlOptions = {
  throw: false,
  logger: false,
  emitEvents: false,
};

const validator = {
  operationIsValid: (path, value) => {
    if (value !== 'fail') {
      return !!value;
    }
    return false;
  },
};

const buildDDL = digitalData => new DDLTools(digitalData, validator, ddlOptions);

describe('DDLTools', () => {
  describe('constructor', () => {
    it('should produce a DDLTools instance', () => {
      const ddl = buildDDL({});
      expect(ddl instanceof DDLTools).toBe(true);
    });
  });

  describe('reset()', () => {
    it('should empty the digital data object', () => {
      const digitalData = { pageInstanceID: 'test', page: { pageInfo: {} } };
      const ddl = buildDDL(digitalData);
      ddl.reset();
      expect(digitalData).toEqual({});
    });

    it('should remove configured "reset.include" key from digital data object', () => {
      const digitalData = {
        pageInstanceID: 'test',
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      };
      const ddl = buildDDL(digitalData);
      ddl.configure({ reset: { include: 'page' } });
      ddl.reset();
      expect(digitalData).toEqual({
        pageInstanceID: 'test',
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });

    it('should remove configured "reset.include" keys array from digital data object', () => {
      const digitalData = {
        pageInstanceID: 'test',
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      };
      const ddl = buildDDL(digitalData);
      ddl.configure({ reset: { include: ['pageInstanceID', 'page'] } });
      ddl.reset();
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });

    it('should remove all but configured "reset.exclude" key from digital data object', () => {
      const digitalData = {
        pageInstanceID: 'test',
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      };
      const ddl = buildDDL(digitalData);
      ddl.configure({ reset: { exclude: 'user' } });
      ddl.reset();
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });

    it('should remove all but configured "reset.exclude" keys from digital data object', () => {
      const digitalData = {
        pageInstanceID: 'test',
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      };
      const ddl = buildDDL(digitalData);
      ddl.configure({ reset: { exclude: ['pageInstanceID', 'user'] } });
      ddl.reset();
      expect(digitalData).toEqual({
        pageInstanceID: 'test',
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('set()', () => {
    it('should set a value on the digital data object', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.set('pageInstanceID', 'test');
      expect(digitalData).toEqual({ pageInstanceID: 'test' });
    });

    it('should set a deeply-nested path to the given value (base path exists)', () => {
      const x = {};
      loSet(x, 'path.to.dest', 22);

      const digitalData = { page: { pageInfo: { pageName: 'test-pageName' } } };
      const ddl = buildDDL(digitalData);
      ddl.set('page.pageInfo.pageID', 'test');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageName: 'test-pageName',
            pageID: 'test',
          },
        },
      });
    });

    it('should set a deeply-nested dot-delimited string path to the given value (base path does not exist)', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.set('page.pageInfo.pageID', 'test');
      expect(digitalData).toEqual({ page: { pageInfo: { pageID: 'test' } } });
    });

    it('should set a deeply-nested string array path to the given value (base path does not exist)', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.set(['page', 'pageInfo', 'pageID'], 'test');
      expect(digitalData).toEqual({ page: { pageInfo: { pageID: 'test' } } });
    });

    it('should refuse to set an invalid value on the digital data object', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.set('page', 'fail');
      expect(digitalData).toEqual({});
    });
  });

  describe('push()', () => {
    it('should add a data layer entry to the array at path (array exists)', () => {
      const digitalData = { product: [] };
      const ddl = buildDDL(digitalData);
      ddl.push('product', {
        productInfo: {
          productName: 'test-productName',
          sku: 'test-sku',
          manufacturer: 'test-manufacturer',
        },
        category: {
          primaryCategory: 'test-primaryCategory',
        },
      });
      expect(digitalData).toEqual({
        product: [{
          productInfo: {
            productName: 'test-productName',
            sku: 'test-sku',
            manufacturer: 'test-manufacturer',
          },
          category: {
            primaryCategory: 'test-primaryCategory',
          },
        }],
      });
    });

    it('should add a data layer entry to the array at path (array does not exist)', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.push('product', {
        productInfo: {
          productName: 'test-productName',
          sku: 'test-sku',
          manufacturer: 'test-manufacturer',
        },
        category: {
          primaryCategory: 'test-primaryCategory',
        },
      });
      expect(digitalData).toEqual({
        product: [{
          productInfo: {
            productName: 'test-productName',
            sku: 'test-sku',
            manufacturer: 'test-manufacturer',
          },
          category: {
            primaryCategory: 'test-primaryCategory',
          },
        }],
      });
    });

    it('should handle invalid paths smoothly', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.push(null, {
        productInfo: {
          productName: 'test-productName',
        },
      });
      expect(digitalData).toEqual({});
    });
  });

  describe('validate()', () => {
    it('should report valid digitalData as valid', () => {
      const digitalData = {
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      };
      const ddl = buildDDL(digitalData);
      const isValid = ddl.validate();
      expect(isValid).toBe(true);
    });

    it('should report invalid digitalData as invalid', () => {
      const digitalData = 'fail';
      const ddl = buildDDL(digitalData);
      const isValid = ddl.validate();
      expect(isValid).toBe(false);
    });
  });

  describe('use()', () => {
    it('should add functional plugin methods to DDLTools instance', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.use(pagePlugin);
      ddl.setPageName('test-pageName');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      });
    });
  });

  describe('publish()', () => {
    it('should return a promise', (done) => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.publish('page').then(() => {
        done();
      });
    });
  });

  describe('setPageInstanceId()', () => {
    it('should set page instance identifier', () => {
      const digitalData = {};
      const ddl = buildDDL(digitalData);
      ddl.setPageInstanceId('test-pageInstanceId');
      expect(digitalData).toEqual({
        pageInstanceID: 'test-pageInstanceId',
      });
    });
  });
});
