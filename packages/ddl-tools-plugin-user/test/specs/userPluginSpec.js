// eslint-disable-next-line import/no-extraneous-dependencies
const DDLTools = require('ddl-tools');
const userPlugin = require('../../src/userPlugin').default;

const schemaValidator = {
  operationIsValid: (path, value) => value !== 'fail',
  configure: () => {},
};

const createUserProfileInstance = (profile) => {
  const ddlTools = new DDLTools({}, schemaValidator);
  ddlTools.use(userPlugin);
  return new ddlTools.UserProfile(profile);
};

const createUserInstance = (user) => {
  const ddlTools = new DDLTools({}, schemaValidator);
  ddlTools.use(userPlugin);
  return new ddlTools.User(user);
};

// eslint-disable-next-line max-statements
describe('Plugin: user', () => {
  // eslint-disable-next-line max-statements
  describe('UserProfile', () => {
    describe('constructor()', () => {
      it('should instantiate a new UserProfile instance', () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(userPlugin);
        const profile = new ddlTools.UserProfile();
        expect(profile instanceof ddlTools.UserProfile).toBe(true);
      });
      it("should initialize instance's raw value to the object given", () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(userPlugin);
        const profile = new ddlTools.UserProfile({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
        expect(profile.raw).toEqual({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
      });
    });

    describe('setProfileInfo()', () => {
      it('should set profileInfo on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setProfileInfo({
          profileID: 'test-profileID',
        });
        expect(profile.raw).toEqual({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
      });
      it('should replace existing profileInfo on UserProfile.raw with the object given', () => {
        const profile = createUserProfileInstance({
          profileInfo: {
            profileID: 'test-origProfileID',
            userName: 'test-userName',
          },
        });
        profile.setProfileInfo({
          profileID: 'test-newProfileID',
          email: 'test-email',
        });
        expect(profile.raw).toEqual({
          profileInfo: {
            profileID: 'test-newProfileID',
            email: 'test-email',
          },
        });
      });
    });

    describe('mergeProfileInfo()', () => {
      it('should merge key/values on UserProfile.raw.profileInfo with the value given', () => {
        const profile = createUserProfileInstance({
          profileInfo: {
            profileID: 'existing-profileID',
            userName: 'test-userName',
          },
        });
        profile.mergeProfileInfo({
          profileID: 'test-profileID',
          email: 'test-email',
        });
        expect(profile.raw).toEqual({
          profileInfo: {
            profileID: 'test-profileID',
            userName: 'test-userName',
            email: 'test-email',
          },
        });
      });
    });

    describe('setAddress()', () => {
      it('should set address on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddress({
          line1: 'test-line1',
        });
        expect(profile.raw).toEqual({
          address: {
            line1: 'test-line1',
          },
        });
      });
      it('should replace existing address on UserProfile.raw with the value given', () => {
        const profile = createUserProfileInstance({
          address: {
            line1: 'existing-line1',
            line2: 'test-line2',
          },
        });
        profile.setAddress({
          line1: 'test-line1',
          city: 'test-city',
        });
        expect(profile.raw).toEqual({
          address: {
            line1: 'test-line1',
            city: 'test-city',
          },
        });
      });
    });

    describe('mergeAddress()', () => {
      it('should merge key/values on UserProfile.raw.address with the value given', () => {
        const profile = createUserProfileInstance({
          address: {
            line1: 'existing-line1',
            line2: 'test-line2',
          },
        });
        profile.mergeAddress({
          line1: 'test-line1',
          city: 'test-city',
        });
        expect(profile.raw).toEqual({
          address: {
            line1: 'test-line1',
            line2: 'test-line2',
            city: 'test-city',
          },
        });
      });
    });

    describe('setSocialResources()', () => {
      it('should set social on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setSocialResources({
          facebookID: 'test-facebookID',
        });
        expect(profile.raw).toEqual({
          social: {
            facebookID: 'test-facebookID',
          },
        });
      });
      it('should replace existing social on UserProfile.raw with the value given', () => {
        const profile = createUserProfileInstance({
          social: {
            facebookID: 'existing-facebookID',
            instagramID: 'test-instagramID',
          },
        });
        profile.setSocialResources({
          facebookID: 'test-facebookID',
          twitterID: 'test-twitterID',
        });
        expect(profile.raw).toEqual({
          social: {
            facebookID: 'test-facebookID',
            twitterID: 'test-twitterID',
          },
        });
      });
    });

    describe('mergeSocialResources()', () => {
      it('should merge key/values on UserProfile.raw.social with the value given', () => {
        const profile = createUserProfileInstance({
          social: {
            facebookID: 'existing-facebookID',
            instagramID: 'test-instagramID',
          },
        });
        profile.mergeSocialResources({
          facebookID: 'test-facebookID',
          twitterID: 'test-twitterID',
        });
        expect(profile.raw).toEqual({
          social: {
            facebookID: 'test-facebookID',
            instagramID: 'test-instagramID',
            twitterID: 'test-twitterID',
          },
        });
      });
    });

    describe('addSocialResource()', () => {
      // eslint-disable-next-line max-len
      it('should add a new social resource with the name given, set to the value given (non-existent base object)', () => {
        const profile = createUserProfileInstance();
        profile.addSocialResource('facebookID', 'test-facebookID');
        expect(profile.raw).toEqual({
          social: {
            facebookID: 'test-facebookID',
          },
        });
      });
      // eslint-disable-next-line max-len
      it('should add a new social resource with the name given, set to the value given (existing base object)', () => {
        const profile = createUserProfileInstance({
          social: {
            twitterID: 'existing-twitterID',
          },
        });
        profile.addSocialResource('facebookID', 'test-facebookID');
        expect(profile.raw).toEqual({
          social: {
            twitterID: 'existing-twitterID',
            facebookID: 'test-facebookID',
          },
        });
      });
    });

    describe('setAttributes()', () => {
      it('should set attributes on UserProfile.raw to the object given', () => {
        const profile = createUserProfileInstance();
        profile.setAttributes({
          testAttribute: 'test-value',
        });
        expect(profile.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should replace existing attributes on UserProfile.raw with the object given', () => {
        const profile = createUserProfileInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        profile.setAttributes({
          testAttribute: 'test-value',
        });
        expect(profile.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('mergeAttributes()', () => {
      it('should merge attributes on UserProfile.raw with the object given', () => {
        const profile = createUserProfileInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        profile.mergeAttributes({
          testAttribute: 'test-value',
        });
        expect(profile.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('addAttribute()', () => {
      // eslint-disable-next-line max-len
      it('should add a new attributes with the name given, set to the value given (non-existent base object)', () => {
        const profile = createUserProfileInstance();
        profile.addAttribute('testAttribute', 'test-value');
        expect(profile.raw).toEqual({
          attributes: {
            testAttribute: 'test-value',
          },
        });
      });
      it('should add a new attributes with the name given, set to the value given (existing base object)', () => {
        const profile = createUserProfileInstance({
          attributes: {
            existingAttribute: 'existing-value',
          },
        });
        profile.addAttribute('testAttribute', 'test-value');
        expect(profile.raw).toEqual({
          attributes: {
            existingAttribute: 'existing-value',
            testAttribute: 'test-value',
          },
        });
      });
    });

    describe('setProfileId()', () => {
      it('should set profileInfo.profileID on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setProfileId('test-profileID');
        expect(profile.raw).toEqual({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
      });

      it('should set profileInfo.profileID on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setProfileId('test-profileID');
        expect(profile.raw).toEqual({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
      });
    });

    describe('setUserName()', () => {
      it('should set profileInfo.userName on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setUserName('test-userName');
        expect(profile.raw).toEqual({
          profileInfo: {
            userName: 'test-userName',
          },
        });
      });
    });

    describe('setEmail()', () => {
      it('should set profileInfo.email on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setEmail('test-email');
        expect(profile.raw).toEqual({
          profileInfo: {
            email: 'test-email',
          },
        });
      });
    });

    describe('setLanguage()', () => {
      it('should set profileInfo.language on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setLanguage('test-language');
        expect(profile.raw).toEqual({
          profileInfo: {
            language: 'test-language',
          },
        });
      });
    });

    describe('setReturningStatus()', () => {
      it('should set profileInfo.returningStatus on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setReturningStatus('test-returningStatus');
        expect(profile.raw).toEqual({
          profileInfo: {
            returningStatus: 'test-returningStatus',
          },
        });
      });
    });

    describe('setType()', () => {
      it('should set profileInfo.type on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setType('test-type');
        expect(profile.raw).toEqual({
          profileInfo: {
            type: 'test-type',
          },
        });
      });
    });

    describe('setAddressLine1()', () => {
      it('should set address.line1 on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddressLine1('test-line1');
        expect(profile.raw).toEqual({
          address: {
            line1: 'test-line1',
          },
        });
      });
    });

    describe('setAddressLine2()', () => {
      it('should set address.line2 on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddressLine2('test-line2');
        expect(profile.raw).toEqual({
          address: {
            line2: 'test-line2',
          },
        });
      });
    });

    describe('setAddressCity()', () => {
      it('should set address.city on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddressCity('test-city');
        expect(profile.raw).toEqual({
          address: {
            city: 'test-city',
          },
        });
      });
    });

    describe('setAddressStateProvince()', () => {
      it('should set address.stateProvince on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddressStateProvince('test-stateProvince');
        expect(profile.raw).toEqual({
          address: {
            stateProvince: 'test-stateProvince',
          },
        });
      });
    });

    describe('setAddressPostalCode()', () => {
      it('should set address.postalCode on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddressPostalCode('test-postalCode');
        expect(profile.raw).toEqual({
          address: {
            postalCode: 'test-postalCode',
          },
        });
      });
    });

    describe('setAddressCountry()', () => {
      it('should set address.country on UserProfile.raw to the value given', () => {
        const profile = createUserProfileInstance();
        profile.setAddressCountry('test-country');
        expect(profile.raw).toEqual({
          address: {
            country: 'test-country',
          },
        });
      });
    });
  });

  describe('User', () => {
    describe('constructor()', () => {
      it('should instantiate a new User instance', () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(userPlugin);
        const user = new ddlTools.User();
        expect(user instanceof ddlTools.User).toBe(true);
      });
      it("should initialize instance's raw value to the object given", () => {
        const ddlTools = new DDLTools({}, schemaValidator);
        ddlTools.use(userPlugin);
        const user = new ddlTools.User({
          segment: {
            testSegment: 'test-value',
          },
        });
        expect(user.raw).toEqual({
          segment: {
            testSegment: 'test-value',
          },
        });
      });
    });

    describe('setSegments()', () => {
      it('should set segment on User.raw to the value given', () => {
        const user = createUserInstance();
        user.setSegments({
          testSegment: 'test-testSegment',
        });
        expect(user.raw).toEqual({
          segment: {
            testSegment: 'test-testSegment',
          },
        });
      });
      it('should replace existing segment on User.raw with the value given', () => {
        const user = createUserInstance({
          segment: {
            testSegment: 'existing-testSegment',
            secondTestSegment: 'test-secondTestSegment',
          },
        });
        user.setSegments({
          testSegment: 'test-testSegment',
          thirdTestSegment: 'test-thirdTestSegment',
        });
        expect(user.raw).toEqual({
          segment: {
            testSegment: 'test-testSegment',
            thirdTestSegment: 'test-thirdTestSegment',
          },
        });
      });
    });

    describe('mergeSegments()', () => {
      it('should merge key/values on User.raw.segment with the value given', () => {
        const user = createUserInstance({
          segment: {
            testSegment: 'existing-testSegment',
            secondTestSegment: 'test-secondTestSegment',
          },
        });
        user.mergeSegments({
          testSegment: 'test-testSegment',
          thirdTestSegment: 'test-thirdTestSegment',
        });
        expect(user.raw).toEqual({
          segment: {
            testSegment: 'test-testSegment',
            secondTestSegment: 'test-secondTestSegment',
            thirdTestSegment: 'test-thirdTestSegment',
          },
        });
      });
    });

    describe('addSegment()', () => {
      // eslint-disable-next-line max-len
      it('should add a new segment with the name given, set to the value given (non-existent base object)', () => {
        const user = createUserInstance();
        user.addSegment('testSegment', 'test-value');
        expect(user.raw).toEqual({
          segment: {
            testSegment: 'test-value',
          },
        });
      });
      it('should add a new segment with the name given, set to the value given (existing base object)', () => {
        const user = createUserInstance({
          segment: {
            existingSegment: 'existing-value',
          },
        });
        user.addSegment('testSegment', 'test-value');
        expect(user.raw).toEqual({
          segment: {
            existingSegment: 'existing-value',
            testSegment: 'test-value',
          },
        });
      });
    });

    describe('setProfile()', () => {
      it('should set profile[0] on User.raw to the value given', () => {
        const user = createUserInstance();
        user.setProfile({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: {
                profileID: 'test-profileID',
              },
            },
          ],
        });
      });
      it('should replace existing profile[0] on User.raw with the value given', () => {
        const user = createUserInstance({
          profile: [
            {
              profileInfo: 'existing-profileInfo',
              address: 'test-address',
            },
          ],
        });
        user.setProfile({
          profileInfo: 'test-profileInfo',
          social: 'test-social',
        });
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: 'test-profileInfo',
              social: 'test-social',
            },
          ],
        });
      });
      it('should set profile[profileIndex] on User.raw to the value given', () => {
        const user = createUserInstance();
        user.setProfile({
          profileInfo: {
            profileID: 'test-profileID',
          },
        }, 2);
        expect(user.raw).toEqual({
          profile: [
            undefined,
            undefined,
            {
              profileInfo: {
                profileID: 'test-profileID',
              },
            },
          ],
        });
      });
      it('should replace existing profile[profileIndex] on User.raw with the value given', () => {
        const user = createUserInstance({
          profile: [
            undefined,
            undefined,
            {
              profileInfo: 'existing-profileInfo',
              address: 'test-address',
            },
          ],
        });
        user.setProfile({
          profileInfo: 'test-profileInfo',
          social: 'test-social',
        }, 2);
        expect(user.raw).toEqual({
          profile: [
            undefined,
            undefined,
            {
              profileInfo: 'test-profileInfo',
              social: 'test-social',
            },
          ],
        });
      });
      it('should set profile[0] on User.raw to the raw value of UserProfile given', () => {
        const user = createUserInstance();
        const profile = createUserProfileInstance({
          profileInfo: 'test-profileInfo',
        });
        user.setProfile(profile);
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: 'test-profileInfo',
            },
          ],
        });
      });
      it('should replace existing profile[0] on User.raw with the raw value of UserProfile given', () => {
        const user = createUserInstance({
          profile: [
            {
              profileInfo: 'existing-profileInfo',
              address: 'test-address',
            },
          ],
        });
        const profile = createUserProfileInstance({
          profileInfo: 'test-profileInfo',
          social: 'test-social',
        });
        user.setProfile(profile);
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: 'test-profileInfo',
              social: 'test-social',
            },
          ],
        });
      });
    });

    describe('mergeProfile()', () => {
      it('should merge key/values on User.raw.profile[0] with the value given', () => {
        const user = createUserInstance({
          profile: [
            {
              profileInfo: {
                profileID: 'existing-profileID',
                userName: 'test-userName',
              },
              address: {
                line1: 'test-line1',
                line2: 'test-line2',
              },
            },
          ],
        });
        user.mergeProfile({
          profileInfo: {
            profileID: 'test-profileID',
            email: 'test-email',
          },
          social: {
            facebookID: 'test-facebookID',
            twitterID: 'test-twitterID',
          },
        });
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: {
                profileID: 'test-profileID',
                userName: 'test-userName',
                email: 'test-email',
              },
              address: {
                line1: 'test-line1',
                line2: 'test-line2',
              },
              social: {
                facebookID: 'test-facebookID',
                twitterID: 'test-twitterID',
              },
            },
          ],
        });
      });

      it('should merge key/values on User.raw.profile[profileIndex] with the value given', () => {
        const user = createUserInstance({
          profile: [
            undefined,
            undefined,
            {
              profileInfo: {
                profileID: 'existing-profileID',
                userName: 'test-userName',
              },
              address: {
                line1: 'test-line1',
                line2: 'test-line2',
              },
            },
          ],
        });
        user.mergeProfile({
          profileInfo: {
            profileID: 'test-profileID',
            email: 'test-email',
          },
          social: {
            facebookID: 'test-facebookID',
            twitterID: 'test-twitterID',
          },
        }, 2);
        expect(user.raw).toEqual({
          profile: [
            undefined,
            undefined,
            {
              profileInfo: {
                profileID: 'test-profileID',
                userName: 'test-userName',
                email: 'test-email',
              },
              address: {
                line1: 'test-line1',
                line2: 'test-line2',
              },
              social: {
                facebookID: 'test-facebookID',
                twitterID: 'test-twitterID',
              },
            },
          ],
        });
      });

      it('should merge key/values on User.raw.profile[profileIndex] with the UserProfile given', () => {
        const user = createUserInstance({
          profile: [
            {
              profileInfo: {
                profileID: 'existing-profileID',
                userName: 'test-userName',
              },
              address: {
                line1: 'test-line1',
                line2: 'test-line2',
              },
            },
          ],
        });
        const profile = createUserProfileInstance({
          profileInfo: {
            profileID: 'test-profileID',
            email: 'test-email',
          },
          social: {
            facebookID: 'test-facebookID',
            twitterID: 'test-twitterID',
          },
        });
        user.mergeProfile(profile);
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: {
                profileID: 'test-profileID',
                userName: 'test-userName',
                email: 'test-email',
              },
              address: {
                line1: 'test-line1',
                line2: 'test-line2',
              },
              social: {
                facebookID: 'test-facebookID',
                twitterID: 'test-twitterID',
              },
            },
          ],
        });
      });
    });

    describe('addProfile()', () => {
      it('should create a new list of profiles and add the profile given to it', () => {
        const user = createUserInstance();
        user.addProfile({
          profileInfo: {
            profileID: 'test-profileID',
          },
        });
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: {
                profileID: 'test-profileID',
              },
            },
          ],
        });
      });
      it('should add the profile given to the existing list of profiles', () => {
        const user = createUserInstance({
          profile: [
            {
              profileInfo: {
                profileID: 'existing-profileID',
              },
            },
          ],
        });
        user.addProfile({
          profileInfo: {
            profileID: 'test-profileID',
            userName: 'test-userName',
          },
        });
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: {
                profileID: 'existing-profileID',
              },
            },
            {
              profileInfo: {
                profileID: 'test-profileID',
                userName: 'test-userName',
              },
            },
          ],
        });
      });
      it('should add the UserProfile given to the existing list of profiles', () => {
        const user = createUserInstance({
          profile: [
            {
              profileInfo: {
                profileID: 'existing-profileID',
              },
            },
          ],
        });
        const profile = createUserProfileInstance({
          profileInfo: {
            profileID: 'test-profileID',
            userName: 'test-userName',
          },
        });
        user.addProfile(profile);
        expect(user.raw).toEqual({
          profile: [
            {
              profileInfo: {
                profileID: 'existing-profileID',
              },
            },
            {
              profileInfo: {
                profileID: 'test-profileID',
                userName: 'test-userName',
              },
            },
          ],
        });
      });
    });
  });

  describe('setUser()', () => {
    it('should set user[0] to the plain user given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should replace user[0] with the plain user given', () => {
      const digitalData = {
        user: [
          {
            segment: {
              testSegment: 'test-value',
            },
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should set user[userIndex] to the plain user given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should set user[0] to the User instance given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      const user = createUserInstance({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
      });
      ddlTools.setUser(user);
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('mergeUser()', () => {
    it('should merge key/values in user[0] with the plain user given', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
        segment: {
          testSegment: 'test-value',
        },
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
              },
            ],
            segment: {
              testSegment: 'test-value',
            },
          },
        ],
      });
    });
    it('should merge key/values in user[userIndex] with the plain user given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
        segment: {
          testSegment: 'test-value',
        },
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
              },
            ],
            segment: {
              testSegment: 'test-value',
            },
          },
        ],
      });
    });
    it('should merge key/values in user[0] with the User instance given', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      const user = createUserInstance({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
        segment: {
          testSegment: 'test-value',
        },
      });
      ddlTools.mergeUser(user);
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
              },
            ],
            segment: {
              testSegment: 'test-value',
            },
          },
        ],
      });
    });
  });

  describe('addUser()', () => {
    it('should create a new list of users and add the plain user given to it', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
            },
          },
        ],
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should add the plain user given to the existing list of users', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUser({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
              userName: 'test-userName',
            },
          },
        ],
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
            ],
          },
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
              },
            ],
          },
        ],
      });
    });
    it('should add the User instance given to the existing list of users', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      const user = createUserInstance({
        profile: [
          {
            profileInfo: {
              profileID: 'test-profileID',
              userName: 'test-userName',
            },
          },
        ],
      });
      ddlTools.addUser(user);
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
            ],
          },
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('setUserProfile()', () => {
    it('should set user[0].profile[0] to the plain user profile given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should replace user[0].profile[0] with the plain user profile given', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should set user[userIndex].profile[0] to the plain user profile given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should set user[userIndex].profile[profileIndex] to the plain user profile given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      }, 2, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should set user[0].profile[0] to the UserProfile instance given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      const profile = createUserProfileInstance({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
      ddlTools.setUserProfile(profile);
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('mergeUserProfile()', () => {
    it('should merge key/values in user[0].profile[0] with the plain user profile given', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
        attributes: {
          testAttribute: 'test-value',
        },
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should merge key/values in user[userIndex].profile[0] with the plain user profile given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
        attributes: {
          testAttribute: 'test-value',
        },
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should merge key/values in user[userIndex].profile[profileIndex] with the plain user profile given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
        attributes: {
          testAttribute: 'test-value',
        },
      }, 2, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
    // eslint-disable-next-line max-len
    it('should merge key/values in user[userIndex].profile[profileIndex] with the UserProfile instance given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      const profile = createUserProfileInstance({
        profileInfo: {
          profileID: 'test-profileID',
        },
        attributes: {
          testAttribute: 'test-value',
        },
      });
      ddlTools.mergeUserProfile(profile, 2, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                profileInfo: {
                  profileID: 'test-profileID',
                  userName: 'test-userName',
                },
                address: {
                  line1: 'test-line1',
                },
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

  describe('addUserProfile()', () => {
    it('should create a new user[0].profile list and add the plain user profile given to it', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
    it('should add the plain user given to the existing user[0].profile list', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
        address: {
          line1: 'test-line1',
        },
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      });
    });
    it('should add the plain user given to the existing user[2].profile list', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserProfile({
        profileInfo: {
          profileID: 'test-profileID',
        },
        address: {
          line1: 'test-line1',
        },
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'existing-profileID',
                },
              },
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
                address: {
                  line1: 'test-line1',
                },
              },
            ],
          },
        ],
      });
    });
    it('should create a new user[0].profile list and add the UserProfile instance given to it', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      const profile = createUserProfileInstance({
        profileInfo: {
          profileID: 'test-profileID',
        },
      });
      ddlTools.addUserProfile(profile);
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                profileInfo: {
                  profileID: 'test-profileID',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('setUserAttributes()', () => {
    it('should set user[0].profile[0].attributes to the object given', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserAttributes({
        testAttribute: 'test-value',
      });
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
    it('should replace existing user[0].profile[0].attributes with the object given', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserAttributes({
        testAttribute: 'test-value',
      });
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
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should replace existing user[userIndex].profile[0].attributes with the object given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserAttributes({
        testAttribute: 'test-value',
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should replace existing user[userIndex].profile[profileIndex].attributes with the object given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.setUserAttributes({
        testAttribute: 'test-value',
      }, 2, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                attributes: {
                  testAttribute: 'test-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('mergeUserAttributes()', () => {
    it('should merge existing user[0].profile[0].attributes with the object given', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUserAttributes({
        testAttribute: 'test-value',
      });
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should merge existing user[userIndex].profile[0].attributes with the object given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUserAttributes({
        testAttribute: 'test-value',
      }, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                attributes: {
                  testAttribute: 'test-value',
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should merge existing user[userIndex].profile[profileIndex].attributes with the object given', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.mergeUserAttributes({
        testAttribute: 'test-value',
      }, 2, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                attributes: {
                  testAttribute: 'test-value',
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
          {
            profile: [
              {
                attributes: {
                  outsideAttribute: 'outside-value',
                },
              },
            ],
          },
        ],
      });
    });
  });

  describe('addUserAttribute()', () => {
    it('should create a new user[0].profile[0].attribute list and add the attribute', () => {
      const digitalData = {};
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserAttribute('testAttribute', 'test-value');
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
    it('should add the attribute to the existing user[0].profile[0].attribute list', () => {
      const digitalData = {
        user: [
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserAttribute('testAttribute', 'test-value');
      expect(digitalData).toEqual({
        user: [
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should add the attribute to the existing user[userIndex].profile[0].attribute list', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserAttribute('testAttribute', 'test-value', 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              {
                attributes: {
                  existingAttribute: 'existing-value',
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
    it('should add the attribute to the existing user[userIndex].profile[profileIndex].attribute list', () => {
      const digitalData = {
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                attributes: {
                  existingAttribute: 'existing-value',
                },
              },
            ],
          },
        ],
      };
      const ddlTools = new DDLTools(digitalData, schemaValidator);
      ddlTools.use(userPlugin);
      ddlTools.addUserAttribute('testAttribute', 'test-value', 2, 2);
      expect(digitalData).toEqual({
        user: [
          undefined,
          undefined,
          {
            profile: [
              undefined,
              undefined,
              {
                attributes: {
                  existingAttribute: 'existing-value',
                  testAttribute: 'test-value',
                },
              },
            ],
          },
        ],
      });
    });
  });
});
