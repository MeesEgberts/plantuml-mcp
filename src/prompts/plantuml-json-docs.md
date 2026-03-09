## Display JSON Data

[JSON](https://en.wikipedia.org/wiki/JSON) format is widely used in software.

You can use PlantUML to visualize your data.

To activate this feature, the diagram must:
* begin with `@startjson` keyword
* end with `@endjson` keyword.

```plantuml
@startjson
{
   "fruit":"Apple",
   "size":"Large",
   "color": ["Red", "Green"]
}
@endjson
```


🛈 *If you are looking for how to manipulate and manage JSON data on PlantUML: see rather [Preprocessing JSON](preprocessing-json).*


## Complex example

You can use complex JSON structure.

```plantuml
@startjson
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
@endjson
```


## Highlight parts

```plantuml
@startjson
#highlight "lastName"
#highlight "address" / "city"
#highlight "phoneNumbers" / "0" / "number"
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 28,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
@endjson
```


## Using different styles for highlight

It is possible to have different styles for different highlights.

```plantuml
@startjson
<style>
  .h1 {
    BackGroundColor green
    FontColor white
    FontStyle italic
  }
  .h2 {
    BackGroundColor red
    FontColor white
    FontStyle bold
  }
</style>
#highlight "lastName"
#highlight "address" / "city" <<h1>>
#highlight "phoneNumbers" / "0" / "number" <<h2>>
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 28,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
@endjson
```

*[Ref. [QA-15756](https://forum.plantuml.net/15756/yaml-multiple-highlight-defs), [GH-1393](https://github.com/plantuml/plantuml/issues/1393)]*


## JSON basic element

###  Synthesis of all JSON basic element
```plantuml
@startjson
{
"null": null,
"true": true,
"false": false,
"JSON_Number": [-1, -1.1, "<color:green>TBC"],
"JSON_String": "a\nb\rc\td <color:green>TBC...",
"JSON_Object": {
  "{}": {},
  "k_int": 123,
  "k_str": "abc",
  "k_obj": {"k": "v"}
},
"JSON_Array" : [
  [],
  [true, false],
  [-1, 1],
  ["a", "b", "c"],
  ["mix", null, true, 1, {"k": "v"}]
]
}
@endjson
```


## JSON array or table

### Array type
```plantuml
@startjson
{
"Numeric": [1, 2, 3],
"String ": ["v1a", "v2b", "v3c"],
"Boolean": [true, false, true]
}
@endjson
```


### Minimal array or table
#### Number array
```plantuml
@startjson
[1, 2, 3]
@endjson
```

#### String array
```plantuml
@startjson
["1a", "2b", "3c"]
@endjson
```

#### Boolean array
```plantuml
@startjson
[true, false, true]
@endjson
```


## JSON numbers

```plantuml
@startjson
{
"DecimalNumber": [-1, 0, 1],
"DecimalNumber . Digits": [-1.1, 0.1, 1.1],
"DecimalNumber ExponentPart": [1E5]
}
@endjson
```


## JSON strings

### JSON Unicode

On JSON you can use Unicode directly or by using escaped form like `\uXXXX`.

```plantuml
@startjson
{
  "<color:blue><b>code": "<color:blue><b>value",
  "a\\u005Cb":           "a\u005Cb",
  "\\uD83D\\uDE10":      "\uD83D\uDE10",
  "😐":                  "😐"
}
@endjson
```

### JSON two-character escape sequence

```plantuml
@startjson
{
 "**legend**: character name":               ["**two-character escape sequence**", "example (between 'a' and 'b')"],
 "quotation mark character (U+0022)":        ["\\\"", "a\"b"],
 "reverse solidus character (U+005C)":       ["\\\\", "a\\b"],
 "solidus character (U+002F)":               ["\\\/", "a\/b"],
 "backspace character (U+0008)":             ["\\b", "a\bb"],
 "form feed character (U+000C)":             ["\\f", "a\fb"],
 "line feed character (U+000A)":             ["\\n", "a\nb"],
 "carriage return character (U+000D)":       ["\\r", "a\rb"],
 "character tabulation character (U+0009)":  ["\\t", "a\tb"]
}
@endjson
```


[[#661111#FIXME]]
FIXME or not 😉, on the same item as `\\n` management in PlantUML 😉
*See [Report Bug on QA-13066](https://forum.plantuml.net/13066)*
[[#661111#FIXME]]
```plantuml
@startjson
[
"\\\\",
"\\n",
"\\r",
"\\t"
]
@endjson
```


## Minimal JSON examples

```plantuml
@startjson
"Hello world!"
@endjson
```

```plantuml
@startjson
42
@endjson
```

```plantuml
@startjson
true
@endjson
```

*(Examples come from [STD 90 - Examples](https://tools.ietf.org/html/std90#page-13))*


## Empty table or list

```plantuml
@startjson
{
  "empty_tab": [],
  "empty_list": {}
}
@endjson
```

*[Ref. [QA-14397](https://forum.plantuml.net/14397)]*


## Using (global) style

### Without style *(by default)*
```plantuml
@startjson
#highlight "1" / "hr"
[
  {
    "name": "Mark McGwire",
    "hr":   65,
    "avg":  0.278
  },
  {
    "name": "Sammy Sosa",
    "hr":   63,
    "avg":  0.288
  }
]
@endjson
```


### With style

You can use [style](style-evolution) to change rendering of elements.

```plantuml
@startjson
<style>
jsonDiagram {
  node {
    BackGroundColor Khaki
    LineColor lightblue
    FontName Helvetica
    FontColor red
    FontSize 18
    FontStyle bold
    RoundCorner 0
    LineThickness 2
    LineStyle 10-5
    separator {
      LineThickness 0.5
      LineColor black
      LineStyle 1-5
    }
  }
  arrow {
    BackGroundColor lightblue
    LineColor green
    LineThickness 2
    LineStyle 2-5
  }
  highlight {
    BackGroundColor red
    FontColor white
    FontStyle italic
  }
}
</style>
#highlight "1" / "hr"
[
  {
    "name": "Mark McGwire",
    "hr":   65,
    "avg":  0.278
  },
  {
    "name": "Sammy Sosa",
    "hr":   63,
    "avg":  0.288
  }
]
@endjson
```

*[Adapted from [QA-13123](https://forum.plantuml.net/13123) and [QA-13288](https://forum.plantuml.net/13288/)]*


## Display JSON Data on Class or Object diagram

### Simple example
```plantuml
class Class
object Object
json JSON {
   "fruit":"Apple",
   "size":"Large",
   "color": ["Red", "Green"]
}
```

*[Ref. [QA-15481](https://forum.plantuml.net/15481/possible-link-elements-from-two-jsons-with-both-jsons-embeded?show=15567#c15567)]*

### Complex example: with all JSON basic element

```plantuml
json "<b>JSON basic element" as J {
"null": null,
"true": true,
"false": false,
"JSON_Number": [-1, -1.1, "<color:green>TBC"],
"JSON_String": "a\nb\rc\td <color:green>TBC...",
"JSON_Object": {
  "{}": {},
  "k_int": 123,
  "k_str": "abc",
  "k_obj": {"k": "v"}
},
"JSON_Array" : [
  [],
  [true, false],
  [-1, 1],
  ["a", "b", "c"],
  ["mix", null, true, 1, {"k": "v"}]
]
}
```


## Display JSON Data on Deployment (Usecase, Component, Deployment) diagram

### Simple example
```plantuml
allowmixing

component Component
actor     Actor
usecase   Usecase
()        Interface
node      Node
cloud     Cloud

json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
```

*[Ref. [QA-15481](https://forum.plantuml.net/15481/possible-link-elements-from-two-jsons-with-both-jsons-embeded?show=15567#c15567)]*

Complex example: with arrow
```plantuml
@startuml
allowmixing

agent Agent
stack {
json "JSON_file.json" as J {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
}
database Database

Agent -> J
J -> Database
@enduml
```


## Display JSON Data on State diagram

### Simple example
```plantuml
state "A" as stateA
state "C" as stateC {
 state B
}

json J {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
```

*[Ref. [QA-17275](https://forum.plantuml.net/17275/composite-state-functionality-with-allow_mixing?show=17287#a17287)]*


## Creole on JSON

You can use [Creole or HTML Creole](creole) on JSON diagram:

```plantuml
@startjson
{
"Creole":
  {
  "wave": "~~wave~~",
  "bold": "**bold**",
  "italics": "//italics//",
  "stricken-out": "--stricken-out--",
  "underlined": "__underlined__",
  "not-underlined": "~__not underlined__",
  "wave-underlined": "~~wave-underlined~~"
  },
"HTML Creole":
  {
  "bold": "<b>bold",
  "italics": "<i>italics",
  "monospaced": "<font:monospaced>monospaced",
  "stroked": "<s>stroked",
  "underlined": "<u>underlined",
  "waved": "<w>waved",
  "green-stroked": "<s:green>stroked",
  "red-underlined": "<u:red>underlined",
  "blue-waved": "<w:#0000FF>waved",
  "Blue": "<color:blue>Blue",
  "Orange": "<back:orange>Orange background",
  "big": "<size:20>big"
  },
"Graphic":
  {
  "OpenIconic": "account-login <&account-login>", 
  "Unicode": "This is <U+221E> long",
  "Emoji": "<:calendar:> Calendar",
  "Image": "<img:https://plantuml.com/logo3.png>"
  }
}
@endjson
```

