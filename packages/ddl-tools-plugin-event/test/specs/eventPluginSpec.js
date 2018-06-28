// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const eventPlugin = require('../../src/eventPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

const createEventInstance = (event) => {
  const ddlTools = new DDLTools({}, schemaValidator);
  ddlTools.use(eventPlugin);
  return new ddlTools.Event(event);
};

describe('Plugin: event', () => {
  // eslint-disable-next-line max-statements
  describe('Event', () => {
    describe('constructor()', () => {
      it('should instantiate a new Event instance', () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(eventPlugin);
        const event = new ddlTools.Event();
        expect(event instanceof ddlTools.Event).toBe(true);
      });
      it("should initialize instance's raw value to the object given", () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(eventPlugin);
        const event = new ddlTools.Event({
          eventInfo: {
            eventName: 'test-eventName',
          },
        });
        expect(event.raw).toEqual({
          eventInfo: {
            eventName: 'test-eventName',
          },
        });
      });
    });

    describe('setEventInfo()', () => {
      it('should set eventInfo on Event.raw to the value given', () => {
        const now = new Date();
        const event = createEventInstance();
        event.setEventInfo({
          eventName: 'test-eventName',
          eventAction: 'test-eventAction',
          eventPoints: 13,
          type: 'test-eventType',
          timeStamp: now,
          cause: 'test-cause',
          effect: 'test-effect',
        });
        expect(event.raw).toEqual({
          eventInfo: {
            eventName: 'test-eventName',
            eventAction: 'test-eventAction',
            eventPoints: 13,
            type: 'test-eventType',
            timeStamp: now,
            cause: 'test-cause',
            effect: 'test-effect',
          },
        });
      });
      it('should replace existing eventInfo on Event.raw with the object given', () => {
        const event = createEventInstance({
          eventInfo: {
            eventName: 'test-origEventName',
            eventPoints: 13,
            type: 'test-eventType',
            cause: 'test-cause',
            effect: 'test-effect',
          },
        });
        event.setEventInfo({
          eventName: 'test-eventName',
          eventAction: 'test-eventAction',
        });
        expect(event.raw).toEqual({
          eventInfo: {
            eventName: 'test-eventName',
            eventAction: 'test-eventAction',
          },
        });
      });
    });

    describe('mergeEventInfo()', () => {
      it('should merge key/values on Event.raw.eventInfo with the object given', () => {
        const event = createEventInstance({
          eventInfo: {
            eventName: 'test-originalEventName',
            eventAction: 'test-eventAction',
          },
        });
        event.mergeEventInfo({
          eventName: 'test-newEventName',
          eventPoints: 13,
        });
        expect(event.raw).toEqual({
          eventInfo: {
            eventName: 'test-newEventName',
            eventAction: 'test-eventAction',
            eventPoints: 13,
          },
        });
      });
    });

    describe('setCategory()', () => {
      it('should set category on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setCategory({
          primaryCategory: 'test-primaryCategory',
          subCategory: 'test-subCategory',
        });
        expect(event.raw).toEqual({
          category: {
            primaryCategory: 'test-primaryCategory',
            subCategory: 'test-subCategory',
          },
        });
      });
      it('should replace existing category on Event.raw with the object given', () => {
        const event = createEventInstance({
          category: {
            primaryCategory: 'test-oldPrimaryCategory',
            subCategory: 'test-subCategory',
          },
        });
        event.setCategory({
          primaryCategory: 'test-newPrimaryCategory',
        });
        expect(event.raw).toEqual({
          category: {
            primaryCategory: 'test-newPrimaryCategory',
          },
        });
      });
    });

    describe('mergeCategory()', () => {
      it('should merge key/values on Event.raw.category with the object given', () => {
        const event = createEventInstance({
          category: {
            primaryCategory: 'test-origPrimaryCategory',
            subCategory: 'test-subCategory',
          },
        });
        event.mergeCategory({
          primaryCategory: 'test-newPrimaryCategory',
          extendedCategory: 'test-extendedCategory',
        });
        expect(event.raw).toEqual({
          category: {
            primaryCategory: 'test-newPrimaryCategory',
            subCategory: 'test-subCategory',
            extendedCategory: 'test-extendedCategory',
          },
        });
      });
    });

    describe('setAttributes()', () => {
      it('should set attributes on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setAttributes({
          testAttribute: 'test-value',
        });
        expect(event.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should replace existing attributes on Event.raw with the object given', () => {
        const event = createEventInstance({
          attributes: {
            testAttribute: 'test-origValue',
            secondExampleKey: 'test-secondValue',
          },
        });
        event.setAttributes({
          testAttribute: 'test-newValue',
        });
        expect(event.raw).toEqual({
          attributes: {
            testAttribute: 'test-newValue',
          },
        });
      });
    });

    describe('mergeAttributes()', () => {
      it('should merge key/values on Event.raw.attributes with the object given', () => {
        const event = createEventInstance({
          attributes: {
            testAttribute: 'test-origValue',
            secondExampleKey: 'test-secondValue',
          },
        });
        event.mergeAttributes({
          testAttribute: 'test-newValue',
          thirdExampleKey: 'test-thirdValue',
        });
        expect(event.raw).toEqual({
          attributes: {
            testAttribute: 'test-newValue',
            secondExampleKey: 'test-secondValue',
            thirdExampleKey: 'test-thirdValue',
          },
        });
      });
    });

    describe('addAttribute()', () => {
      // eslint-disable-next-line max-len
      it('should add a new attributes with the name given, set to the value given (non-existent base object)', () => {
        const event = createEventInstance();
        event.addAttribute('testAttribute', 'test-value');
        expect(event.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should add a new attributes with the name given, set to the value given (existing base object)', () => {
        const event = createEventInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        event.addAttribute('testAttribute', 'test-value');
        expect(event.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('setEventName()', () => {
      it('should set eventInfo.eventName on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setEventName('test-eventName');
        expect(event.raw).toEqual({
          eventInfo: {
            eventName: 'test-eventName',
          },
        });
      });
    });

    describe('setEventAction()', () => {
      it('should set eventInfo.eventAction on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setEventAction('test-eventAction');
        expect(event.raw).toEqual({
          eventInfo: {
            eventAction: 'test-eventAction',
          },
        });
      });
    });

    describe('setEventPoints()', () => {
      it('should set eventInfo.eventPoints on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setEventPoints(13);
        expect(event.raw).toEqual({
          eventInfo: {
            eventPoints: 13,
          },
        });
      });
    });

    describe('setType()', () => {
      it('should set eventInfo.type on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setType('test-type');
        expect(event.raw).toEqual({
          eventInfo: {
            type: 'test-type',
          },
        });
      });
    });

    describe('setTimeStamp()', () => {
      it('should set eventInfo.timeStamp on Event.raw to the value given', () => {
        const now = new Date();
        const event = createEventInstance();
        event.setTimeStamp(now);
        expect(event.raw).toEqual({
          eventInfo: {
            timeStamp: now,
          },
        });
      });
    });

    describe('setCause()', () => {
      it('should set eventInfo.cause on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setCause('test-cause');
        expect(event.raw).toEqual({
          eventInfo: {
            cause: 'test-cause',
          },
        });
      });
    });

    describe('setEffect()', () => {
      it('should set eventInfo.effect on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setEffect('test-effect');
        expect(event.raw).toEqual({
          eventInfo: {
            effect: 'test-effect',
          },
        });
      });
    });

    describe('setPrimaryCategory()', () => {
      it('should set category.primaryCategory on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setPrimaryCategory('test-primaryCategory');
        expect(event.raw).toEqual({
          category: {
            primaryCategory: 'test-primaryCategory',
          },
        });
      });
    });

    describe('setSubCategory()', () => {
      it('should set category.subCategory on Event.raw to the value given', () => {
        const event = createEventInstance();
        event.setSubCategory('test-subCategory');
        expect(event.raw).toEqual({
          category: {
            subCategory: 'test-subCategory',
          },
        });
      });
    });
  });

  describe('addEvent()', () => {
    it('should add the given plain event to the list of events', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(eventPlugin);
      ddlTools.addEvent({
        eventInfo: {
          name: 'test-name',
          action: 'test-action',
          cause: 'test-cause',
          effect: 'test-effect',
        },
        category: {
          primaryCategory: 'test-primaryCategory',
          subCategory: 'test-subCategory',
        },
      });
      expect(digitalData).toEqual({
        event: [
          {
            eventInfo: {
              name: 'test-name',
              action: 'test-action',
              cause: 'test-cause',
              effect: 'test-effect',
            },
            category: {
              primaryCategory: 'test-primaryCategory',
              subCategory: 'test-subCategory',
            },
          },
        ],
      });
    });
    it('should add the given Event instance to the list of events', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(eventPlugin);
      const event = new ddlTools.Event();
      event
        .setEventName('test-name')
        .setEventAction('test-action')
        .setCause('test-cause')
        .setEffect('test-effect')
        .setPrimaryCategory('test-primaryCategory')
        .setSubCategory('test-subCategory');
      ddlTools.addEvent(event);
      expect(digitalData).toEqual({
        event: [
          {
            eventInfo: {
              eventName: 'test-name',
              eventAction: 'test-action',
              cause: 'test-cause',
              effect: 'test-effect',
            },
            category: {
              primaryCategory: 'test-primaryCategory',
              subCategory: 'test-subCategory',
            },
          },
        ],
      });
    });
  });

  describe('fromError()', () => {
    // eslint-disable-next-line max-statements
    it('should produce a valid event based on a generic error object', () => {
      const error = new Error('test-error');
      const ddlTools = new DDLTools({}, schemaValidator);
      ddlTools.use(eventPlugin);
      const event = ddlTools.transformErrorToEvent(error);

      expect(event).toBeTruthy();
      expect(event.raw).toBeTruthy();
      expect(event.raw.eventInfo).toBeTruthy();
      expect(event.raw.category).toBeTruthy();

      expect(event.raw.eventInfo.name).toBe('Error');
      expect(event.raw.eventInfo.type).toBe('javascriptError');
      expect(event.raw.eventInfo.cause).toBe('test-error');
      expect(event.raw.eventInfo.timeStamp instanceof Date).toBe(true);

      expect(event.raw.category.primaryCategory).toBe('error');
      expect(event.raw.category.subCategory).toBe('clientError');
    });
    // eslint-disable-next-line max-statements
    it('should produce a valid event based on a customized error object', () => {
      const now = new Date();
      const error = new Error('test-error');
      error.name = 'TestError';
      error.type = 'test-type';
      error.timeStamp = now;
      error.primaryCategory = 'test-primaryCategory';
      error.subCategory = 'test-subCategory';

      const ddlTools = new DDLTools({}, schemaValidator);
      ddlTools.use(eventPlugin);
      const event = ddlTools.transformErrorToEvent(error);

      expect(event.raw).toEqual({
        eventInfo: {
          name: 'TestError',
          type: 'test-type',
          cause: 'test-error',
          timeStamp: now,
        },
        category: {
          primaryCategory: 'test-primaryCategory',
          subCategory: 'test-subCategory',
        },
      });
    });
  });
});
