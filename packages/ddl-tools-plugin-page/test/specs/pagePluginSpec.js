// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const pagePlugin = require('../../src/pagePlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

describe('Plugin: page', () => {
  describe('setPage()', () => {
    it('should set page to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPage({
        pageInfo: {
          pageID: 'test-pageID',
        },
      });
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageID: 'test-pageID',
          },
        },
      });
    });
    it('should replace existing page with the object given', () => {
      const digitalData = {
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPage({
        pageInfo: {
          pageID: 'test-pageID',
        },
      });
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageID: 'test-pageID',
          },
        },
      });
    });
  });

  describe('mergePage()', () => {
    it('should merge existing page with the object given', () => {
      const digitalData = {
        page: {
          category: {
            primaryCategory: 'test-primaryCategory',
          },
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.mergePage({
        pageInfo: {
          pageID: 'test-pageID',
        },
      });
      expect(digitalData).toEqual({
        page: {
          category: {
            primaryCategory: 'test-primaryCategory',
          },
          pageInfo: {
            pageName: 'test-pageName',
            pageID: 'test-pageID',
          },
        },
      });
    });
  });

  describe('setPageInfo()', () => {
    it('should set page.pageInfo to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPageInfo({
        pageID: 'test-pageID',
      });
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageID: 'test-pageID',
          },
        },
      });
    });
    it('should replace existing page.pageInfo with the object given', () => {
      const digitalData = {
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPageInfo({
        pageID: 'test-pageID',
      });
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageID: 'test-pageID',
          },
        },
      });
    });
  });

  describe('mergePageInfo()', () => {
    it('should merge existing page.pageInfo with the object given', () => {
      const digitalData = {
        page: {
          pageInfo: {
            pageName: 'test-pageName',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.mergePageInfo({
        pageID: 'test-pageID',
      });
      expect(digitalData).toEqual({
        page: {
          pageInfo: {
            pageID: 'test-pageID',
            pageName: 'test-pageName',
          },
        },
      });
    });
  });

  describe('setPageCategory()', () => {
    it('should set page.category to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPageCategory({
        primaryCategory: 'test-primaryCategory',
      });
      expect(digitalData).toEqual({
        page: {
          category: {
            primaryCategory: 'test-primaryCategory',
          },
        },
      });
    });
    it('should replace existing page.category with the object given', () => {
      const digitalData = {
        page: {
          category: {
            subCategory1: 'test-subCategory1',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPageCategory({
        primaryCategory: 'test-primaryCategory',
      });
      expect(digitalData).toEqual({
        page: {
          category: {
            primaryCategory: 'test-primaryCategory',
          },
        },
      });
    });
  });

  describe('mergePageCategory()', () => {
    it('should merge existing page.category with the object given', () => {
      const digitalData = {
        page: {
          category: {
            subCategory1: 'test-subCategory1',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.mergePageCategory({
        primaryCategory: 'test-primaryCategory',
      });
      expect(digitalData).toEqual({
        page: {
          category: {
            primaryCategory: 'test-primaryCategory',
            subCategory1: 'test-subCategory1',
          },
        },
      });
    });
  });

  describe('setPageAttributes()', () => {
    it('should set page.attributes to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPageAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        page: {
          attributes: {
            testAttribute: 'test-value',
          },
        },
      });
    });
    it('should replace existing page.attributes with the object given', () => {
      const digitalData = {
        page: {
          attributes: {
            existingAttribute: 'existing-value',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.setPageAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        page: {
          attributes: {
            testAttribute: 'test-value',
          },
        },
      });
    });
  });

  describe('mergePageAttributes()', () => {
    it('should merge existing page.attributes with the object given', () => {
      const digitalData = {
        page: {
          attributes: {
            existingAttribute: 'existing-value',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.mergePageAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        page: {
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        },
      });
    });
  });

  describe('addPageAttribute()', () => {
    // eslint-disable-next-line max-len
    it('should add a new page attribute with the name given, set to the value given (non-existing base object)', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.addPageAttribute('testAttribute', 'test-value');
      expect(digitalData).toEqual({
        page: {
          attributes: {
            testAttribute: 'test-value',
          },
        },
      });
    });
    it('should add a new page attribute with the name given, set to the value given (existing base object)', () => {
      const digitalData = {
        page: {
          attributes: {
            existingAttribute: 'existing-value',
          },
        },
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(pagePlugin);
      ddlTools.addPageAttribute('testAttribute', 'test-value');
      expect(digitalData).toEqual({
        page: {
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        },
      });
    });
  });
});
