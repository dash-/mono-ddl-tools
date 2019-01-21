## Classes

<dl>
<dt><a href="#Event">Event</a></dt>
<dd><p>Helper class to build event objects for use in a digital data layer.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#eventPlugin">eventPlugin</a></dt>
<dd><p>Plugin that adds event-related methods and sub-classes to ddl-tools.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PlainCategory">PlainCategory</a></dt>
<dd><p>Categorization data.</p>
</dd>
<dt><a href="#PlainEventInfo">PlainEventInfo</a></dt>
<dd><p>Standard information about an event.</p>
</dd>
<dt><a href="#PlainEvent">PlainEvent</a></dt>
<dd><p>Metadata describing an event.</p>
</dd>
</dl>

<a name="Event"></a>

## Event
Helper class to build event objects for use in a digital data layer.

**Kind**: global class  

* [Event](#Event)
    * [new Event([event])](#new_Event_new)
    * _instance_
        * [.setEventInfo(eventInfo)](#Event+setEventInfo) ⇒ [<code>Event</code>](#Event)
        * [.mergeEventInfo(eventInfo)](#Event+mergeEventInfo) ⇒ [<code>Event</code>](#Event)
        * [.setCategory(category)](#Event+setCategory) ⇒ [<code>Event</code>](#Event)
        * [.mergeCategory(category)](#Event+mergeCategory) ⇒ [<code>Event</code>](#Event)
        * [.setAttributes(attributes)](#Event+setAttributes) ⇒ [<code>Event</code>](#Event)
        * [.mergeAttributes(attributes)](#Event+mergeAttributes) ⇒ [<code>Event</code>](#Event)
        * [.addAttribute(name, value)](#Event+addAttribute) ⇒ [<code>Event</code>](#Event)
        * [.setEventName(value)](#Event+setEventName) ⇒ [<code>Event</code>](#Event)
        * [.setEventAction(value)](#Event+setEventAction) ⇒ [<code>Event</code>](#Event)
        * [.setEventPoints(value)](#Event+setEventPoints) ⇒ [<code>Event</code>](#Event)
        * [.setType(value)](#Event+setType) ⇒ [<code>Event</code>](#Event)
        * [.setTimeStamp(value)](#Event+setTimeStamp) ⇒ [<code>Event</code>](#Event)
        * [.setCause(value)](#Event+setCause) ⇒ [<code>Event</code>](#Event)
        * [.setEffect(value)](#Event+setEffect) ⇒ [<code>Event</code>](#Event)
        * [.setPrimaryCategory(value)](#Event+setPrimaryCategory) ⇒ [<code>Event</code>](#Event)
        * [.setSubCategory(value)](#Event+setSubCategory) ⇒ [<code>Event</code>](#Event)
    * _static_
        * [.normalize(event)](#Event.normalize) ⇒ [<code>PlainEvent</code>](#PlainEvent)

<a name="new_Event_new"></a>

### new Event([event])
Instantiates a new Event.


| Param | Type | Description |
| --- | --- | --- |
| [event] | [<code>PlainEvent</code>](#PlainEvent) | Data describing the event |

<a name="Event+setEventInfo"></a>

### event.setEventInfo(eventInfo) ⇒ [<code>Event</code>](#Event)
Sets standard information about the event by replacing `eventInfo` with the
`eventInfo` argument, destroying any existing standard event information.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| eventInfo | [<code>PlainEventInfo</code>](#PlainEventInfo) | Standard information about the event |

<a name="Event+mergeEventInfo"></a>

### event.mergeEventInfo(eventInfo) ⇒ [<code>Event</code>](#Event)
Updates standard information about the event by deeply merging the
key/value pairs from the `eventInfo` argument into the `eventInfo` object,
creating a new `eventInfo` object if one did not already exist.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| eventInfo | [<code>PlainEventInfo</code>](#PlainEventInfo) | Standard information about the event |

<a name="Event+setCategory"></a>

### event.setCategory(category) ⇒ [<code>Event</code>](#Event)
Sets event categorization data by replacing `category` with the `category`
argument, destroying any existing event categorization data.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| category | [<code>PlainCategory</code>](#PlainCategory) | Event categorization data |

<a name="Event+mergeCategory"></a>

### event.mergeCategory(category) ⇒ [<code>Event</code>](#Event)
Updates event categorization data by deeply merging the key/value pairs
from the `category` argument into the `category` object, creating a
new `category` object if one did not already exist.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| category | [<code>PlainCategory</code>](#PlainCategory) | Event categorization data |

<a name="Event+setAttributes"></a>

### event.setAttributes(attributes) ⇒ [<code>Event</code>](#Event)
Sets additional facts about the event by replacing `attributes` with the
`attributes` argument, destroying any existing attributes.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the event |

<a name="Event+mergeAttributes"></a>

### event.mergeAttributes(attributes) ⇒ [<code>Event</code>](#Event)
Updates additional facts about the event by deeply merging the key/value
pairs from the `attributes` argument into the `attributes` object, creating
a new `attributes` object if one did not already exist.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> | Additional facts about the event |

<a name="Event+addAttribute"></a>

### event.addAttribute(name, value) ⇒ [<code>Event</code>](#Event)
Sets an additional fact about the event.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Attribute name |
| value | <code>mixed</code> | Attribute value |

<a name="Event+setEventName"></a>

### event.setEventName(value) ⇒ [<code>Event</code>](#Event)
Sets the human-friendly name of this event.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event+setEventAction"></a>

### event.setEventAction(value) ⇒ [<code>Event</code>](#Event)
Sets the systems-oriented action identifier for this event.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event+setEventPoints"></a>

### event.setEventPoints(value) ⇒ [<code>Event</code>](#Event)
Sets the number of points for this event.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | value to set |

<a name="Event+setType"></a>

### event.setType(value) ⇒ [<code>Event</code>](#Event)
Sets the type of event that this is.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event+setTimeStamp"></a>

### event.setTimeStamp(value) ⇒ [<code>Event</code>](#Event)
Sets when this event occurred.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>Date</code> | value to set |

<a name="Event+setCause"></a>

### event.setCause(value) ⇒ [<code>Event</code>](#Event)
Sets the cause of this event.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event+setEffect"></a>

### event.setEffect(value) ⇒ [<code>Event</code>](#Event)
Sets the effect of this event.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event+setPrimaryCategory"></a>

### event.setPrimaryCategory(value) ⇒ [<code>Event</code>](#Event)
Sets the top-level category that this event belongs to.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event+setSubCategory"></a>

### event.setSubCategory(value) ⇒ [<code>Event</code>](#Event)
Sets the sub-level category that this event belongs to.

**Kind**: instance method of [<code>Event</code>](#Event)  
**Returns**: [<code>Event</code>](#Event) - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | value to set |

<a name="Event.normalize"></a>

### Event.normalize(event) ⇒ [<code>PlainEvent</code>](#PlainEvent)
Transforms a plain event or an Event class instance into a plain javascript
object and returns it.

**Kind**: static method of [<code>Event</code>](#Event)  
**Returns**: [<code>PlainEvent</code>](#PlainEvent) - - The normalized form of the given event  

| Param | Type | Description |
| --- | --- | --- |
| event | [<code>PlainEvent</code>](#PlainEvent) \| [<code>Event</code>](#Event) | The event object to normalize |

<a name="eventPlugin"></a>

## eventPlugin
Plugin that adds event-related methods and sub-classes to ddl-tools.

**Kind**: global constant  
**Example**  
```js
import DDLTools from 'ddl-tools';
import DDLValidator from 'ddl-validator';
import eventPlugin from 'ddl-tools-plugin-event';
import schema from './path/to/mySchema';

const ddlValidator = new DDLValidator(schema);
const ddlTools = new DDLTools(window.digitalData, ddlValidator);
ddlTools.use(eventPlugin);
```

* [eventPlugin](#eventPlugin)
    * [.Event](#eventPlugin.Event)
    * [.addEvent(event)](#eventPlugin.addEvent) ⇒ <code>object</code>

<a name="eventPlugin.Event"></a>

### eventPlugin.Event
The Event class.

**Kind**: static property of [<code>eventPlugin</code>](#eventPlugin)  
**See**: Event  
<a name="eventPlugin.addEvent"></a>

### eventPlugin.addEvent(event) ⇒ <code>object</code>
Adds an event to the list of events.

**Kind**: static method of [<code>eventPlugin</code>](#eventPlugin)  
**Returns**: <code>object</code> - - Self reference for chaining  

| Param | Type | Description |
| --- | --- | --- |
| event | [<code>PlainEvent</code>](#PlainEvent) \| [<code>Event</code>](#Event) | Event to add |

**Example**  
```js
ddlTools.addEvent({
eventInfo: {
  name: 'Navigation menu item selected',
  action: 'navigate',
  cause: 'userInitiated',
  effect: 'navigate to new page',
},
category: {
  primaryCategory: 'pageNavigation',
  subCategory: 'navigationMenu',
},
});
```
**Example**  
```js
const event = new ddlTools.Event();
event
.setEventName('Navigation menu item selected')
.setEventAction('navigate')
.setCause('userInitiated')
.setEffect('navigate to new page')
.setPrimaryCategory('pageNavigation')
.setSubCategory('navigationMenu');
ddlTools.addEvent(event);
```
<a name="PlainCategory"></a>

## PlainCategory
Categorization data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| primaryCategory | <code>string</code> | Top-level category that object belongs to |
| subCategory | <code>string</code> | Sub-level category that object belongs to |

<a name="PlainEventInfo"></a>

## PlainEventInfo
Standard information about an event.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> | Human-friendly name of the event |
| eventAction | <code>string</code> | Systems-oriented action id for the event |
| eventPoints | <code>number</code> | Number of points for the event |
| type | <code>string</code> | Type of event this is (ie. javascriptError) |
| timeStamp | <code>string</code> \| <code>Date</code> | When the event occurred |
| cause | <code>string</code> | What caused the event |
| effect | <code>string</code> | What happened as a result of the event |

<a name="PlainEvent"></a>

## PlainEvent
Metadata describing an event.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| eventInfo | [<code>PlainEventInfo</code>](#PlainEventInfo) | Standard information about the event |
| category | [<code>PlainCategory</code>](#PlainCategory) | Event categorization data |
| attributes | <code>object</code> | Extensible key-value pairs describing   additional facts about the event |

