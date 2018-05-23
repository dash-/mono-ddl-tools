/* eslint-disable import/no-extraneous-dependencies */
const DDLValidator = require('../../src/DDLValidator');
const loSet = require('lodash.set');
const loCloneDeep = require('lodash.clonedeep');
const defaultSchema = require('ddl-json-schema').root;
const metaSchema = require('ajv/lib/refs/json-schema-draft-04.json');
/* eslint-enable import/no-extraneous-dependencies */

const noop = () => {};

const defaultOptions = {
  verbose: false,
  throw: false,
  logger: {
    debug: noop,
    error: noop,
  },
  validator: {
    // ddl-json-schema is draft-4: Requires special configuration
    // @see https://github.com/epoberezkin/ajv/releases/tag/5.0.0
    meta: false,
    schemaId: 'id',
    init: (validator) => {
      validator.addMetaSchema(metaSchema);
    },
  },
};

const buildValidator = () => new DDLValidator(defaultSchema, defaultOptions);

describe('DDLTools', () => {
  describe('constructor', () => {
    it('should produce a DDLValidator instance', () => {
      const validator = buildValidator();
      expect(validator instanceof DDLValidator).toBe(true);
    });
  });

  describe('operationIsValid()', () => {
    it('should return true for a valid path and valid value', () => {
      const validator = buildValidator();
      const result = validator.operationIsValid('page.pageInfo.pageID', 'test123');
      expect(result).toBe(true);
    });

    it('should return false for a valid path and invalid value', () => {
      const validator = buildValidator();
      const result = validator.operationIsValid('page.pageInfo.destinationURL', 'test123');
      expect(result).toBe(false);
    });

    it('should return false for an empty path and valid value', () => {
      const validator = buildValidator();
      const result = validator.operationIsValid('', 'test123');
      expect(result).toBe(false);
    });

    it('should return true for undefined path and a valid full data structure', () => {
      const validator = buildValidator();
      const result = validator.operationIsValid(undefined, {
        page: {
          pageInfo: {
            pageID: 'test123',
            pageName: 'testPage',
          },
        },
      });
      expect(result).toBe(true);
    });

    it('should return false for undefined path and an invalid full data structure', () => {
      const validator = buildValidator();
      const result = validator.operationIsValid(undefined, {
        event: {
          fakeAttr: 'test123',
        },
      });
      expect(result).toBe(false);
    });
  });

  describe('configure()', () => {
    describe('throw option', () => {
      it('should throw an Error when operation is invalid', () => {
        const validator = buildValidator();
        validator.configure(Object.assign({}, defaultOptions, {
          throw: true,
        }));
        const test = () => validator.operationIsValid('event.fakeAttr', 'test123');
        expect(test).toThrow();
      });

      it('should not throw an Error when operation is valid', () => {
        const validator = buildValidator();
        validator.configure(Object.assign({}, defaultOptions, {
          throw: true,
        }));
        const test = () => validator.operationIsValid('page.pageInfo.pageID', 'test123');
        expect(test).not.toThrow();
      });
    });

    describe('schema option', () => {
      it('should recompile for new schema', () => {
        const schema = loCloneDeep(defaultSchema);
        loSet(schema, 'properties.event', schema.properties.page);

        const validator = buildValidator();
        let result = validator.operationIsValid('event.pageInfo.pageID', 'test123');
        expect(result).toBe(false);

        validator.configure(Object.assign({}, defaultOptions, { schema }));

        result = validator.operationIsValid('event.pageInfo.pageID', 'test123');
        expect(result).toBe(true);
      });
    });
  });
});
