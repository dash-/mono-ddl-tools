## Classes

<dl>
<dt><a href="#UserProfile">UserProfile</a></dt>
<dd><p>Helper class to build user profile objects for use in a digital data layer.</p>
</dd>
<dt><a href="#User">User</a></dt>
<dd><p>Helper class to build user objects for use in a digital data layer.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#userPlugin">userPlugin</a></dt>
<dd><p>Plugin that adds general user-related methods and sub-classes to ddl-tools.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlainProfileAddress">PlainProfileAddress</a></dt>
<dd><p>Standard physical / shipping address information.</p>
</dd>
<dt><a href="#PlainProfileInfo">PlainProfileInfo</a></dt>
<dd><p>Standard detailed personal information.</p>
</dd>
<dt><a href="#PlainUserProfile">PlainUserProfile</a></dt>
<dd><p>Personal information about the user.</p>
</dd>
<dt><a href="#PlainUser">PlainUser</a></dt>
<dd><p>Data capturing one or more user profiles who are interacting with the
website.</p>
</dd>
</dl>

<a name="UserProfile"></a>

## UserProfile
Helper class to build user profile objects for use in a digital data layer.

**Kind**: global class  

* [UserProfile](#UserProfile)
    * [new UserProfile([profile])](#new_UserProfile_new)
    * _instance_
        * [.setProfileInfo(profileInfo)](#UserProfile+setProfileInfo) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.mergeProfileInfo(profileInfo)](#UserProfile+mergeProfileInfo) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddress(address)](#UserProfile+setAddress) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.mergeAddress(address)](#UserProfile+mergeAddress) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setSocialResources(social)](#UserProfile+setSocialResources) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.mergeSocialResources(social)](#UserProfile+mergeSocialResources) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.addSocialResource(name, value)](#UserProfile+addSocialResource) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAttributes(attributes)](#UserProfile+setAttributes) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.mergeAttributes(attributes)](#UserProfile+mergeAttributes) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.addAttribute(name, value)](#UserProfile+addAttribute) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setProfileId(value)](#UserProfile+setProfileId) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setUserName(value)](#UserProfile+setUserName) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setEmail(value)](#UserProfile+setEmail) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setLanguage(value)](#UserProfile+setLanguage) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setReturningStatus(value)](#UserProfile+setReturningStatus) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setType(value)](#UserProfile+setType) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddressLine1(value)](#UserProfile+setAddressLine1) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddressLine2(value)](#UserProfile+setAddressLine2) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddressCity(value)](#UserProfile+setAddressCity) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddressStateProvince(value)](#UserProfile+setAddressStateProvince) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddressPostalCode(value)](#UserProfile+setAddressPostalCode) ⇒ [<code>UserProfile</code>](#UserProfile)
        * [.setAddressCountry(value)](#UserProfile+setAddressCountry) ⇒ [<code>UserProfile</code>](#UserProfile)
    * _static_
        * [.normalize(profile)](#UserProfile.normalize) ⇒ [<code>PlainUserProfile</code>](#PlainUserProfile)

<a name="new_UserProfile_new"></a>

### new UserProfile([profile])
Instantiates a new `UserProfile`.


| Param | Type | Description |
| --- | --- | --- |
| [profile] | [<code>PlainUserProfile</code>](#PlainUserProfile) | Data describing the user profile |

<a name="UserProfile+setProfileInfo"></a>

### userProfile.setProfileInfo(profileInfo) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets standard user profile information by replacing `profileInfo` with the
`profileInfo` argument, destroying any existing standard user profile
information.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Standard user profile information |

<a name="UserProfile+mergeProfileInfo"></a>

### userProfile.mergeProfileInfo(profileInfo) ⇒ [<code>UserProfile</code>](#UserProfile)
Updates standard user profile information by deeply merging the key/value
pairs from the `profileInfo` argument into the `profileInfo` object,
creating a new `profileInfo` object if one did not already exist.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Standard user profile information |

<a name="UserProfile+setAddress"></a>

### userProfile.setAddress(address) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets standard physical address information for the user profile by
replacing `address` with the `address` argument, destroying any existing
standard physical address information for the user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Standard physical address   information |

<a name="UserProfile+mergeAddress"></a>

### userProfile.mergeAddress(address) ⇒ [<code>UserProfile</code>](#UserProfile)
Updates standard physical address information for the user profile by
deeply merging the key/value pairs from the `address` argument into the
`address` object, creating a new `address` object if one did not already
exist.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Standard physical address   information |

<a name="UserProfile+setSocialResources"></a>

### userProfile.setSocialResources(social) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets extensible social web resources associated with the user profile by
replacing `social` with the `social` argument, destroying any existing
extensible social web resources associated with the user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| social | <code>object</code> | Extensible social web resources |

<a name="UserProfile+mergeSocialResources"></a>

### userProfile.mergeSocialResources(social) ⇒ [<code>UserProfile</code>](#UserProfile)
Updates the extensible social web resources associated with the user by
deeply merging the key/value pairs from the `social` argument into the
`social` object, creating a new `social` object if one did not already
exist.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| social | <code>object</code> | Extensible social web resources |

<a name="UserProfile+addSocialResource"></a>

### userProfile.addSocialResource(name, value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets an additional social web resource associated with the user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Social web resource name |
| value | <code>string</code> | Social web resource value |

<a name="UserProfile+setAttributes"></a>

### userProfile.setAttributes(attributes) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets additional facts about the user profile by replacing `attributes` with
the `attributes` argument, destroying any existing attributes.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the user profile |

<a name="UserProfile+mergeAttributes"></a>

### userProfile.mergeAttributes(attributes) ⇒ [<code>UserProfile</code>](#UserProfile)
Updates additional facts about the user profile by deeply merging the
key/value pairs from the `attributes` argument into the `attributes`
object, creating a new `attributes` object if one did not already exist.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the user profile |

<a name="UserProfile+addAttribute"></a>

### userProfile.addAttribute(name, value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets an additional fact about the user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Attribute name |
| value | <code>mixed</code> | Attribute value |

<a name="UserProfile+setProfileId"></a>

### userProfile.setProfileId(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the unique identifier for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setUserName"></a>

### userProfile.setUserName(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the username for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setEmail"></a>

### userProfile.setEmail(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the email address for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setLanguage"></a>

### userProfile.setLanguage(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the choice of language (ISO 639) for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setReturningStatus"></a>

### userProfile.setReturningStatus(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the returning status of this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setType"></a>

### userProfile.setType(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the type of this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setAddressLine1"></a>

### userProfile.setAddressLine1(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the first line of the address for this user profile (ie, street
number and name).

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setAddressLine2"></a>

### userProfile.setAddressLine2(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the second line of the address for this user profile (ie. suite or
apartment number).

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setAddressCity"></a>

### userProfile.setAddressCity(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the city portion of the addres for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setAddressStateProvince"></a>

### userProfile.setAddressStateProvince(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the state/province portion of the addres for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setAddressPostalCode"></a>

### userProfile.setAddressPostalCode(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the postal code portion of the addres for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile+setAddressCountry"></a>

### userProfile.setAddressCountry(value) ⇒ [<code>UserProfile</code>](#UserProfile)
Sets the country portion of the addres for this user profile.

**Kind**: instance method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="UserProfile.normalize"></a>

### UserProfile.normalize(profile) ⇒ [<code>PlainUserProfile</code>](#PlainUserProfile)
Transforms a plain user profile or a UserProfile class instance into a plain
javascript object and returns it.

**Kind**: static method of [<code>UserProfile</code>](#UserProfile)  
**Returns**: [<code>PlainUserProfile</code>](#PlainUserProfile) - - The normalized form of the given profile  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) | The profile object to   normalize |

<a name="User"></a>

## User
Helper class to build user objects for use in a digital data layer.

**Kind**: global class  

* [User](#User)
    * [new User([user])](#new_User_new)
    * _instance_
        * [.setSegments(segment)](#User+setSegments) ⇒ [<code>User</code>](#User)
        * [.mergeSegments(segment)](#User+mergeSegments) ⇒ [<code>User</code>](#User)
        * [.addSegment(name, value)](#User+addSegment) ⇒ [<code>User</code>](#User)
        * [.setProfile(profile, [profileIndex])](#User+setProfile) ⇒ [<code>User</code>](#User)
        * [.mergeProfile(profile, [profileIndex])](#User+mergeProfile) ⇒ [<code>User</code>](#User)
        * [.addProfile(profile)](#User+addProfile) ⇒ [<code>User</code>](#User)
    * _static_
        * [.normalize(user)](#User.normalize) ⇒ [<code>PlainUser</code>](#PlainUser)

<a name="new_User_new"></a>

### new User([user])
Instantiates a new User.


| Param | Type | Description |
| --- | --- | --- |
| [user] | [<code>PlainUser</code>](#PlainUser) | Data describing the user |

<a name="User+setSegments"></a>

### user.setSegments(segment) ⇒ [<code>User</code>](#User)
Sets extensible customer segmenting information by replacing `segment` with
the `segment` argument, destroying any existing customer segmenting
information.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: [<code>User</code>](#User) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| segment | <code>object</code> | Extensible segment information |

<a name="User+mergeSegments"></a>

### user.mergeSegments(segment) ⇒ [<code>User</code>](#User)
Updates extensible customer segmenting information by deeply merging the
key/value pairs from the `segment` argument into the `segment` object,
creating a new `segment` object if one did not already exist.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: [<code>User</code>](#User) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| segment | <code>object</code> | Extensible segment information |

<a name="User+addSegment"></a>

### user.addSegment(name, value) ⇒ [<code>User</code>](#User)
Sets an additional customer segmenting data point.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: [<code>User</code>](#User) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Segment field name |
| value | <code>mixed</code> | Segment field value |

<a name="User+setProfile"></a>

### user.setProfile(profile, [profileIndex]) ⇒ [<code>User</code>](#User)
Sets user profile data by replacing the profile at `profileIndex` with
the `profile` argument, destroying any existing profile data at
`profileIndex`.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: [<code>User</code>](#User) - - Self reference for chaining  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) |  | User profile information |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   profile is to be set |

<a name="User+mergeProfile"></a>

### user.mergeProfile(profile, [profileIndex]) ⇒ [<code>User</code>](#User)
Updates user profile data by deeply merging the key/value pairs from the
`profile` argument into the profile object at `profileIndex`, creating a
new profile object at that path if one did not already exist.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: [<code>User</code>](#User) - - Self reference for chaining  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) |  | User profile information |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   profile is to be merged into |

<a name="User+addProfile"></a>

### user.addProfile(profile) ⇒ [<code>User</code>](#User)
Pushes an additional profile onto the end of the list of profiles.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: [<code>User</code>](#User) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) | User profile information |

<a name="User.normalize"></a>

### User.normalize(user) ⇒ [<code>PlainUser</code>](#PlainUser)
Transforms a plain user or a User class instance into a plain javascript
object and returns it.

**Kind**: static method of [<code>User</code>](#User)  
**Returns**: [<code>PlainUser</code>](#PlainUser) - - The normalized form of the given user  

| Param | Type | Description |
| --- | --- | --- |
| user | [<code>PlainUser</code>](#PlainUser) \| [<code>User</code>](#User) | The user object to normalize |

<a name="userPlugin"></a>

## userPlugin
Plugin that adds general user-related methods and sub-classes to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import userPlugin from 'ddl-tools-plugin-user';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(userPlugin);
```

* [userPlugin](#userPlugin)
    * [.setUser(user, [userIndex])](#userPlugin.setUser) ⇒ <code>object</code>
    * [.mergeUser(user, [userIndex])](#userPlugin.mergeUser) ⇒ <code>object</code>
    * [.addUser(user)](#userPlugin.addUser) ⇒ <code>object</code>
    * [.setUserProfile(profile, [userIndex], [profileIndex])](#userPlugin.setUserProfile) ⇒ <code>object</code>
    * [.mergeUserProfile(profile, [userIndex], [profileIndex])](#userPlugin.mergeUserProfile) ⇒ <code>object</code>
    * [.addUserProfile(profile, [userIndex])](#userPlugin.addUserProfile) ⇒ <code>object</code>
    * [.setUserAttributes(attributes, [userIndex], [profileIndex])](#userPlugin.setUserAttributes) ⇒ <code>object</code>
    * [.mergeUserAttributes(attributes, [userIndex], [profileIndex])](#userPlugin.mergeUserAttributes) ⇒ [<code>UserProfile</code>](#UserProfile)
    * [.addUserAttribute(name, value, [userIndex], [profileIndex])](#userPlugin.addUserAttribute) ⇒ [<code>UserProfile</code>](#UserProfile)

<a name="userPlugin.setUser"></a>

### userPlugin.setUser(user, [userIndex]) ⇒ <code>object</code>
Records user data by replacing the user at `userIndex` with the `user`
argument, destroying any existing user data at that path.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | [<code>PlainUser</code>](#PlainUser) \| [<code>User</code>](#User) |  | Information about a user |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in user list is to be set |

<a name="userPlugin.mergeUser"></a>

### userPlugin.mergeUser(user, [userIndex]) ⇒ <code>object</code>
Updates user data by deeply merging the key/value pairs from the `user`
argument into the user object at `userIndex`, creating a new user object at
that path if one did not already exist.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| user | [<code>PlainUser</code>](#PlainUser) \| [<code>User</code>](#User) |  | Information about a user |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in user list is to be merged with |

<a name="userPlugin.addUser"></a>

### userPlugin.addUser(user) ⇒ <code>object</code>
Records information about an additional user in the list of users.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Description |
| --- | --- | --- |
| user | [<code>PlainUser</code>](#PlainUser) \| [<code>User</code>](#User) | Information about a user |

<a name="userPlugin.setUserProfile"></a>

### userPlugin.setUserProfile(profile, [userIndex], [profileIndex]) ⇒ <code>object</code>
Records user profile data by replacing the profile at `profileIndex` for
the user at `userIndex` with the `profile` argument, destroying any
existing user profile data at that path.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) |  | User profile data |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in user list should gain the given profile |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   user profile is to be set |

<a name="userPlugin.mergeUserProfile"></a>

### userPlugin.mergeUserProfile(profile, [userIndex], [profileIndex]) ⇒ <code>object</code>
Updates user profile data by deeply merging the key/value pairs from the
`profile` argument into the profile object at `profileIndex` for the user
at `userIndex`, creating a new user object at that path if one did not
already exist.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) |  | The user profile to merge   into the existing profile |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in user list is to be modified |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   user profile is to be merged with |

<a name="userPlugin.addUserProfile"></a>

### userPlugin.addUserProfile(profile, [userIndex]) ⇒ <code>object</code>
Records information about an additional user profile in the profile list of
the user at `userIndex`.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  
**See**: https://www.w3.org/2013/12/ceddl-201312.pdf  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profile | [<code>PlainUserProfile</code>](#PlainUserProfile) \| [<code>UserProfile</code>](#UserProfile) |  | The user profile to add |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in user list should gain the given profile |

<a name="userPlugin.setUserAttributes"></a>

### userPlugin.setUserAttributes(attributes, [userIndex], [profileIndex]) ⇒ <code>object</code>
Records additional facts about a user profile by replacing the attributes
of the profile at `profileIndex` for the user at `userIndex` with the
`attributes` argument, destroying any existing attributes at that path.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| attributes | <code>object</code> |  | Additional facts about the user profile |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in the user list should be modified |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   user profile should be modified |

<a name="userPlugin.mergeUserAttributes"></a>

### userPlugin.mergeUserAttributes(attributes, [userIndex], [profileIndex]) ⇒ [<code>UserProfile</code>](#UserProfile)
Updates additional facts about the user profile by deeply merging the
key/value pairs from the `attributes` argument into the attributes of the
profile at `profileIndex` for the user at `userIndex`, creating a new
attributes object at that path if one did not already exist.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| attributes | <code>object</code> |  | Additional facts about the user profile |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in the user list should be modified |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   user profile should be modified |

<a name="userPlugin.addUserAttribute"></a>

### userPlugin.addUserAttribute(name, value, [userIndex], [profileIndex]) ⇒ [<code>UserProfile</code>](#UserProfile)
Records an additional fact about the user profile at `profileIndex` for the
user at `userIndex`.

**Kind**: static method of [<code>userPlugin</code>](#userPlugin)  
**Returns**: [<code>UserProfile</code>](#UserProfile) - - Self reference for chaining  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Attribute name |
| value | <code>mixed</code> |  | Attribute value |
| [userIndex] | <code>number</code> | <code>0</code> | Array index integer representing which user   in the user list should be modified |
| [profileIndex] | <code>number</code> | <code>0</code> | Array index integer representing which   user profile should be modified |

<a name="PlainProfileAddress"></a>

## PlainProfileAddress
Standard physical / shipping address information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| line1 | <code>string</code> | ie. Street number and name |
| line2 | <code>string</code> | ie. Suite or apartment number |
| city | <code>string</code> | City customer resides in |
| stateProvince | <code>string</code> | State customer resides in |
| postalCode | <code>string</code> | Customer's postal code |
| country | <code>string</code> | Country customer resides in (ISO 3166) |

<a name="PlainProfileInfo"></a>

## PlainProfileInfo
Standard detailed personal information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| profileID | <code>string</code> | Customer's unique identifier |
| userName | <code>string</code> | Customer's user name |
| email | <code>string</code> | Customer's email address |
| language | <code>string</code> | Human language the user has chosen to receive   (ISO 639) |
| returningStatus | <code>string</code> | Returning status |
| type | <code>string</code> | Type of user |

<a name="PlainUserProfile"></a>

## PlainUserProfile
Personal information about the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| profileInfo | [<code>PlainProfileInfo</code>](#PlainProfileInfo) | Personal information about   customer |
| address | [<code>PlainProfileAddress</code>](#PlainProfileAddress) | Customer's primary address |
| social | <code>object</code> | Extensible social web resources |
| attributes | <code>object</code> | Additional facts about the user profile |

<a name="PlainUser"></a>

## PlainUser
Data capturing one or more user profiles who are interacting with the
website.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| segment | <code>object</code> | Extensible segment information |
| profile | [<code>Array.&lt;PlainUserProfile&gt;</code>](#PlainUserProfile) | Personal information about the user |

