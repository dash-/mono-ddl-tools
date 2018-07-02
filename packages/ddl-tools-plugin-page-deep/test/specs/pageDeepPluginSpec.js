// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const pageDeepPlugin = require('../../src/pageDeepPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

// eslint-disable-next-line max-statements
describe('Plugin: pageDeep', () => {
  describe('setPageId()', () => {
    it('should set page.pageInfo.pageID to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setPageId('test-pageID');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageID: 'test-pageID',
          },
        },
      });
    });
  });

  describe('setPageName()', () => {
    it('should set page.pageInfo.pageName to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setPageName('test-pageName');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      });
    });
  });

  describe('setDestinationURL()', () => {
    it('should set page.pageInfo.destinationURL to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setDestinationURL('http://test.example.com/path/to/page');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            destinationURL: 'http://test.example.com/path/to/page',
          },
        },
      });
    });
  });

  describe('setReferringURL()', () => {
    it('should set page.pageInfo.referringURL to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setReferringURL('http://test.example.com/path/to/page');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            referringURL: 'http://test.example.com/path/to/page',
          },
        },
      });
    });
  });

  describe('setSysEnv()', () => {
    it('should set page.pageInfo.sysEnv to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setSysEnv('production');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            sysEnv: 'production',
          },
        },
      });
    });
  });

  describe('setVariant()', () => {
    it('should set page.pageInfo.variant to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setVariant('a');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            variant: 'a',
          },
        },
      });
    });
  });

  describe('setVersion()', () => {
    it('should set page.pageInfo.version to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setVersion('1.0.3');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            version: '1.0.3',
          },
        },
      });
    });
  });

  describe('setBreadCrumbs()', () => {
    it('should set page.pageInfo.breadcrumbs to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setBreadCrumbs(['path', 'to', 'page']);
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            breadcrumbs: ['path', 'to', 'page'],
          },
        },
      });
    });
  });

  describe('setAuthor()', () => {
    it('should set page.pageInfo.author to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setAuthor('Justin Case');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            author: 'Justin Case',
          },
        },
      });
    });
  });

  describe('setIssueDate()', () => {
    it('should set page.pageInfo.issueDate to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      const now = new Date();
      ddlTools.use(pageDeepPlugin);
      ddlTools.setIssueDate(now);
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            issueDate: now,
          },
        },
      });
    });
  });

  describe('setEffectiveDate()', () => {
    it('should set page.pageInfo.effectiveDate to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      const now = new Date();
      ddlTools.use(pageDeepPlugin);
      ddlTools.setEffectiveDate(now);
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            effectiveDate: now,
          },
        },
      });
    });
  });

  describe('setExpiryDate()', () => {
    it('should set page.pageInfo.expiryDate to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      const now = new Date();
      ddlTools.use(pageDeepPlugin);
      ddlTools.setExpiryDate(now);
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            expiryDate: now,
          },
        },
      });
    });
  });

  describe('setLanguage()', () => {
    it('should set page.pageInfo.language to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setLanguage('en');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            language: 'en',
          },
        },
      });
    });
  });

  describe('setGeoRegion()', () => {
    it('should set page.pageInfo.geoRegion to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setGeoRegion('US');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            geoRegion: 'US',
          },
        },
      });
    });
  });

  describe('setIndustryCodes()', () => {
    it('should set page.pageInfo.industryCodes to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setIndustryCodes('6324');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            industryCodes: '6324',
          },
        },
      });
    });
  });

  describe('setPublisher()', () => {
    it('should set page.pageInfo.publisher to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setPublisher('Express Scripts');
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            publisher: 'Express Scripts',
          },
        },
      });
    });
  });

  describe('setPagePrimaryCategory()', () => {
    it('should set page.category.primaryCategory to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setPagePrimaryCategory('login');
      expect(digitalData).toEqual({
        page: {
          category: {
            primaryCategory: 'login',
          },
        },
      });
    });
  });

  describe('setPageSubCategory()', () => {
    it('should set page.category.subCategory1 to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setPageSubCategory('loginFailed');
      expect(digitalData).toEqual({
        page: {
          category: {
            subCategory1: 'loginFailed',
          },
        },
      });
    });
  });

  describe('setPageCategoryProductType()', () => {
    it('should set page.category.productType to the value given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pageDeepPlugin);
      ddlTools.setPageCategoryProductType('medicationAntiDepressant');
      expect(digitalData).toEqual({
        page: {
          category: {
            productType: 'medicationAntiDepressant',
          },
        },
      });
    });
  });
});
