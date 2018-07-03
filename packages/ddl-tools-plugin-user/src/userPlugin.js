const loSet = require('lodash.set');
const loGet = require('lodash.get');
const loMerge = require('lodash.merge');

const merge = (target, path, source) => {
  let dest = loGet(target, path);
  if (typeof dest !== 'object') {
    dest = {};
    loSet(target, path, dest);
  }
  loMerge(dest, source);
};

const push = (target, path, item) => {
  let dest = loGet(target, path);
  if (typeof dest !== 'object' || typeof dest.push !== 'function') {
    dest = [];
    loSet(target, path, dest);
  }
  dest.push(item);
};

/**
 * Standard physical / shipping address information.
 *
 * @typedef PlainProfileAddress
 * @property {string} line1 - ie. Street number and name
 * @property {string} line2 - ie. Suite or apartment number
 * @property {string} city - City customer resides in
 * @property {string} stateProvince - State customer resides in
 * @property {string} postalCode - Customer's postal code
 * @property {string} country - Country customer resides in (ISO 3166)
 */

/**
 * Standard detailed personal information.
 *
 * @typedef PlainProfileInfo
 * @property {string} profileID - Customer's unique identifier
 * @property {string} userName - Customer's user name
 * @property {string} email - Customer's email address
 * @property {string} language - Human language the user has chosen to receive
 *   (ISO 639)
 * @property {string} returningStatus - Returning status
 * @property {string} type - Type of user
 */

/**
 * Personal information about the user.
 *
 * @typedef PlainUserProfile
 * @property {PlainProfileInfo} profileInfo - Personal information about
 *   customer
 * @property {PlainProfileAddress} address - Customer's primary address
 * @property {object} social - Extensible social web resources
 * @property {object} attributes - Additional facts about the user profile
 */

/**
 * Data capturing one or more user profiles who are interacting with the
 * website.
 *
 * @typedef PlainUser
 * @property {object} segment - Extensible segment information
 * @property {PlainUserProfile[]} profile - Personal information about the user
 */

/**
 * Helper class to build user profile objects for use in a digital data layer.
 *
 * @class
 */
class UserProfile {
  /**
   * Instantiates a new `UserProfile`.
   *
   * @param {PlainUserProfile} [profile] - Data describing the user profile
   * @returns {UserProfile} - Instance
   */
  constructor(profile = {}) {
    this.raw = profile;
  }

  // Core methods

  /**
   * Sets standard user profile information by replacing `profileInfo` with the
   * `profileInfo` argument, destroying any existing standard user profile
   * information.
   *
   * @param {PlainProfileInfo} profileInfo - Standard user profile information
   * @returns {UserProfile} - Self reference for chaining
   */
  setProfileInfo(profileInfo) {
    loSet(this.raw, ['profileInfo'], profileInfo);
    return this;
  }

  /**
   * Updates standard user profile information by deeply merging the key/value
   * pairs from the `profileInfo` argument into the `profileInfo` object,
   * creating a new `profileInfo` object if one did not already exist.
   *
   * @param {PlainProfileInfo} profileInfo - Standard user profile information
   * @returns {UserProfile} - Self reference for chaining
   */
  mergeProfileInfo(profileInfo) {
    merge(this.raw, ['profileInfo'], profileInfo);
    return this;
  }

  /**
   * Sets standard physical address information for the user profile by
   * replacing `address` with the `address` argument, destroying any existing
   * standard physical address information for the user profile.
   *
   * @param {PlainProfileAddress} address - Standard physical address
   *   information
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddress(address) {
    loSet(this.raw, ['address'], address);
    return this;
  }

  /**
   * Updates standard physical address information for the user profile by
   * deeply merging the key/value pairs from the `address` argument into the
   * `address` object, creating a new `address` object if one did not already
   * exist.
   *
   * @param {PlainProfileAddress} address - Standard physical address
   *   information
   * @returns {UserProfile} - Self reference for chaining
   */
  mergeAddress(address) {
    merge(this.raw, ['address'], address);
    return this;
  }

  /**
   * Sets extensible social web resources associated with the user profile by
   * replacing `social` with the `social` argument, destroying any existing
   * extensible social web resources associated with the user profile.
   *
   * @param {object} social - Extensible social web resources
   * @returns {UserProfile} - Self reference for chaining
   */
  setSocialResources(social) {
    loSet(this.raw, ['social'], social);
    return this;
  }

  /**
   * Updates the extensible social web resources associated with the user by
   * deeply merging the key/value pairs from the `social` argument into the
   * `social` object, creating a new `social` object if one did not already
   * exist.
   *
   * @param {object} social - Extensible social web resources
   * @returns {UserProfile} - Self reference for chaining
   */
  mergeSocialResources(social) {
    merge(this.raw, ['social'], social);
    return this;
  }

  /**
   * Sets an additional social web resource associated with the user profile.
   *
   * @param {string} name - Social web resource name
   * @param {string} value - Social web resource value
   * @returns {UserProfile} - Self reference for chaining
   */
  addSocialResource(name, value) {
    loSet(this.raw, ['social', name], value);
    return this;
  }

  /**
   * Sets additional facts about the user profile by replacing `attributes` with
   * the `attributes` argument, destroying any existing attributes.
   *
   * @param {object} attributes - Additional facts about the user profile
   * @returns {UserProfile} - Self reference for chaining
   */
  setAttributes(attributes) {
    loSet(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Updates additional facts about the user profile by deeply merging the
   * key/value pairs from the `attributes` argument into the `attributes`
   * object, creating a new `attributes` object if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the user profile
   * @returns {UserProfile} - Self reference for chaining
   */
  mergeAttributes(attributes) {
    merge(this.raw, ['attributes'], attributes);
    return this;
  }

  /**
   * Sets an additional fact about the user profile.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @returns {UserProfile} - Self reference for chaining
   */
  addAttribute(name, value) {
    loSet(this.raw, ['attributes', name], value);
    return this;
  }

  // Developer candy

  /**
   * Sets the unique identifier for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setProfileId(value) {
    loSet(this.raw, ['profileInfo', 'profileID'], value);
    return this;
  }

  /**
   * Sets the username for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setUserName(value) {
    loSet(this.raw, ['profileInfo', 'userName'], value);
    return this;
  }

  /**
   * Sets the email address for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setEmail(value) {
    loSet(this.raw, ['profileInfo', 'email'], value);
    return this;
  }

  /**
   * Sets the choice of language (ISO 639) for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setLanguage(value) {
    loSet(this.raw, ['profileInfo', 'language'], value);
    return this;
  }

  /**
   * Sets the returning status of this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setReturningStatus(value) {
    loSet(this.raw, ['profileInfo', 'returningStatus'], value);
    return this;
  }

  /**
   * Sets the type of this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setType(value) {
    loSet(this.raw, ['profileInfo', 'type'], value);
    return this;
  }

  /**
   * Sets the first line of the address for this user profile (ie, street
   * number and name).
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddressLine1(value) {
    loSet(this.raw, ['address', 'line1'], value);
    return this;
  }

  /**
   * Sets the second line of the address for this user profile (ie. suite or
   * apartment number).
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddressLine2(value) {
    loSet(this.raw, ['address', 'line2'], value);
    return this;
  }

  /**
   * Sets the city portion of the addres for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddressCity(value) {
    loSet(this.raw, ['address', 'city'], value);
    return this;
  }

  /**
   * Sets the state/province portion of the addres for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddressStateProvince(value) {
    loSet(this.raw, ['address', 'stateProvince'], value);
    return this;
  }

  /**
   * Sets the postal code portion of the addres for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddressPostalCode(value) {
    loSet(this.raw, ['address', 'postalCode'], value);
    return this;
  }

  /**
   * Sets the country portion of the addres for this user profile.
   *
   * @param {string} value - value to set
   * @returns {UserProfile} - Self reference for chaining
   */
  setAddressCountry(value) {
    loSet(this.raw, ['address', 'country'], value);
    return this;
  }
}

/**
 * Transforms a plain user profile or a UserProfile class instance into a plain
 * javascript object and returns it.
 *
 * @param {(PlainUserProfile|UserProfile)} profile - The profile object to
 *   normalize
 * @returns {PlainUserProfile} - The normalized form of the given profile
 */
UserProfile.normalize = profile => (
  profile instanceof UserProfile ? profile.raw : profile
);

/**
 * Helper class to build user objects for use in a digital data layer.
 *
 * @class
 */
class User {
  /**
   * Instantiates a new User.
   *
   * @param {PlainUser} [user] - Data describing the user
   * @returns {User} - Instance
   */
  constructor(user = {}) {
    this.raw = user;
  }

  /**
   * Sets extensible customer segmenting information by replacing `segment` with
   * the `segment` argument, destroying any existing customer segmenting
   * information.
   *
   * @param {object} segment - Extensible segment information
   * @returns {User} - Self reference for chaining
   */
  setSegments(segment) {
    loSet(this.raw, ['segment'], segment);
    return this;
  }

  /**
   * Updates extensible customer segmenting information by deeply merging the
   * key/value pairs from the `segment` argument into the `segment` object,
   * creating a new `segment` object if one did not already exist.
   *
   * @param {object} segment - Extensible segment information
   * @returns {User} - Self reference for chaining
   */
  mergeSegments(segment) {
    merge(this.raw, ['segment'], segment);
    return this;
  }

  /**
   * Sets an additional customer segmenting data point.
   *
   * @param {string} name - Segment field name
   * @param {mixed} value - Segment field value
   * @returns {User} - Self reference for chaining
   */
  addSegment(name, value) {
    loSet(this.raw, ['segment', name], value);
    return this;
  }

  /**
   * Sets user profile data by replacing the profile at `profileIndex` with
   * the `profile` argument, destroying any existing profile data at
   * `profileIndex`.
   *
   * @param {(PlainUserProfile|UserProfile)} profile - User profile information
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   profile is to be set
   * @returns {User} - Self reference for chaining
   */
  setProfile(profile, profileIndex = 0) {
    loSet(this.raw, ['profile', profileIndex], UserProfile.normalize(profile));
    return this;
  }

  /**
   * Updates user profile data by deeply merging the key/value pairs from the
   * `profile` argument into the profile object at `profileIndex`, creating a
   * new profile object at that path if one did not already exist.
   *
   * @param {(PlainUserProfile|UserProfile)} profile - User profile information
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   profile is to be merged into
   * @returns {User} - Self reference for chaining
   */
  mergeProfile(profile, profileIndex = 0) {
    merge(this.raw, ['profile', profileIndex], UserProfile.normalize(profile));
    return this;
  }

  /**
   * Pushes an additional profile onto the end of the list of profiles.
   *
   * @param {(PlainUserProfile|UserProfile)} profile - User profile information
   * @returns {User} - Self reference for chaining
   */
  addProfile(profile) {
    push(this.raw, ['profile'], UserProfile.normalize(profile));
    return this;
  }
}

/**
 * Transforms a plain user or a User class instance into a plain javascript
 * object and returns it.
 *
 * @param {(PlainUser|User)} user - The user object to normalize
 * @returns {PlainUser} - The normalized form of the given user
 */
User.normalize = user => (
  user instanceof User ? user.raw : user
);

/**
 * Plugin that adds general user-related methods and sub-classes to ddl-tools.
 *
 * @example
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import userPlugin from 'ddl-tools-plugin-user';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(userPlugin);
 */
const userPlugin = {
  User,
  UserProfile,

  /**
   * Records user data by replacing the user at `userIndex` with the `user`
   * argument, destroying any existing user data at that path.
   *
   * @param {(PlainUser|User)} user - Information about a user
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in user list is to be set
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setUser: function setUser(user, userIndex = 0) {
    this.set(['user', userIndex], User.normalize(user));
    return this;
  },

  /**
   * Updates user data by deeply merging the key/value pairs from the `user`
   * argument into the user object at `userIndex`, creating a new user object at
   * that path if one did not already exist.
   *
   * @param {(PlainUser|User)} user - Information about a user
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in user list is to be merged with
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergeUser: function mergeUser(user, userIndex = 0) {
    this.merge(['user', userIndex], User.normalize(user));
    return this;
  },

  /**
   * Records information about an additional user in the list of users.
   *
   * @param {(PlainUser|User)} user - Information about a user
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  addUser: function addUser(user) {
    this.push(['user'], User.normalize(user));
    return this;
  },

  /**
   * Records user profile data by replacing the profile at `profileIndex` for
   * the user at `userIndex` with the `profile` argument, destroying any
   * existing user profile data at that path.
   *
   * @param {(PlainUserProfile|UserProfile)} profile - User profile data
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in user list should gain the given profile
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   user profile is to be set
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  setUserProfile: function setUserProfile(profile, userIndex = 0, profileIndex = 0) {
    this.set(['user', userIndex, 'profile', profileIndex], UserProfile.normalize(profile));
    return this;
  },

  /**
   * Updates user profile data by deeply merging the key/value pairs from the
   * `profile` argument into the profile object at `profileIndex` for the user
   * at `userIndex`, creating a new user object at that path if one did not
   * already exist.
   *
   * @param {(PlainUserProfile|UserProfile)} profile - The user profile to merge
   *   into the existing profile
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in user list is to be modified
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   user profile is to be merged with
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  mergeUserProfile: function mergeUserProfile(profile, userIndex = 0, profileIndex = 0) {
    this.merge(['user', userIndex, 'profile', profileIndex], UserProfile.normalize(profile));
    return this;
  },

  /**
   * Records information about an additional user profile in the profile list of
   * the user at `userIndex`.
   *
   * @param {(PlainUserProfile|UserProfile)} profile - The user profile to add
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in user list should gain the given profile
   * @see https://www.w3.org/2013/12/ceddl-201312.pdf
   * @returns {object} - Self reference for chaining
   */
  addUserProfile: function addUserProfile(profile, userIndex = 0) {
    this.push(['user', userIndex, 'profile'], UserProfile.normalize(profile));
    return this;
  },

  /**
   * Records additional facts about a user profile by replacing the attributes
   * of the profile at `profileIndex` for the user at `userIndex` with the
   * `attributes` argument, destroying any existing attributes at that path.
   *
   * @param {object} attributes - Additional facts about the user profile
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in the user list should be modified
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   user profile should be modified
   * @returns {object} - Self reference for chaining
   */
  setUserAttributes: function setUserAttributes(attributes, userIndex = 0, profileIndex = 0) {
    this.set(['user', userIndex, 'profile', profileIndex, 'attributes'], attributes);
    return this;
  },

  /**
   * Updates additional facts about the user profile by deeply merging the
   * key/value pairs from the `attributes` argument into the attributes of the
   * profile at `profileIndex` for the user at `userIndex`, creating a new
   * attributes object at that path if one did not already exist.
   *
   * @param {object} attributes - Additional facts about the user profile
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in the user list should be modified
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   user profile should be modified
   * @returns {UserProfile} - Self reference for chaining
   */
  mergeUserAttributes: function mergeUserAttributes(attributes, userIndex = 0, profileIndex = 0) {
    this.merge(['user', userIndex, 'profile', profileIndex, 'attributes'], attributes);
    return this;
  },

  /**
   * Records an additional fact about the user profile at `profileIndex` for the
   * user at `userIndex`.
   *
   * @param {string} name - Attribute name
   * @param {mixed} value - Attribute value
   * @param {number} [userIndex=0] - Array index integer representing which user
   *   in the user list should be modified
   * @param {number} [profileIndex=0] - Array index integer representing which
   *   user profile should be modified
   * @returns {UserProfile} - Self reference for chaining
   */
  addUserAttribute: function addUserAttribute(name, value, userIndex = 0, profileIndex = 0) {
    this.set(['user', userIndex, 'profile', profileIndex, 'attributes', name], value);
    return this;
  },
};

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = userPlugin;
