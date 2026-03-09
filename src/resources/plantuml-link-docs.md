## Format definition

```plantuml
@startuml
scale 0.75
left to right direction
frame "How is a PlantUML hyperlink?" #aliceblue {

rectangle rb [
<size:25><b>""[[""
]

frame "optional" as fu #palegreen {
frame u [
<i><b>URL
]
}

frame "optional" as ft #palegreen {
rectangle tb [
<size:25><b>""{""
]
frame t [
<i><b>a tooltip
]
rectangle te [
<size:25><b>""}""
]
}

frame "optional" as l #palegreen {
rectangle s [
<size:25><b>""␣""
]
frame ll [
<i><b>a label
]
}
rectangle  fe [
<size:25><b>""]]""
]
}
rb -- u
u -- tb
tb -- t
t -- te
te - s
ll -- fe
u -- s
s -- ll
u -- fe
te -- fe
@enduml
```


#### Simple link

Simple links are define using two square brackets (or three square brackets for field or method on class diagram).

__Example__:
* ``[[http://plantuml.com]]``
* ``[[]]`` *(empty link)*

#### Link with optional label

It is possible to give an optional label that will be printed instead of the link itself.
A space is used as separator after the URL itself.

__Example__:
``[[http://plantuml.com This label is printed]]``

#### Link with optional tooltip

Finally you can also have an optional tooltip using round brackets, just after the URL and before the optional label.

__Example__:
``[[http://plantuml.com{Optional tooltip} This label is printed]]``

#### Only tooltip
You can also have only a tooltip using round brackets.

__Example__:
``[[{A tooltip}]]``

#### Only tooltip and label
You can also have only a tooltip using round brackets, and a label.

__Example__:
``[[{A tooltip} This label is printed]]``

#### URL authentication

With [URL authentication](url-authentication) it is possible to provide an authentication method, credentials, and a proxy config to URL endpoints.


## Links contained curly bracket

A link can contain some curly brackets.

```plantuml
@startuml
[[link{with_bracket}&id=10]]:Some activity\n(with link with brackets)\n""link{with_bracket}&id=10"";
[["link{with_bracket}"{}]]:Some activity\n(with link with brackets and empy tooltip)\n"""link{with_bracket}"{}"";
[["link{with_bracket}"{with tooltip}]]:Some activity\n(with link finished by brackets and tooltip)\n"""link{with_bracket}"{with tooltip}"";
[["link{with_bracket}&id=10"{with tooltip}]]:Some activity\n(with link with brackets and tooltip)\n"""link{with_bracket}&id=10"{with tooltip}"";
@enduml
```


*[Ref. [QA-13489](https://forum.plantuml.net/13489/)]*


## Links in sequence diagram

The following example lists some links features:


```plantuml
@startuml
actor Bob [[http://plantuml.com/sequence]]
actor "This is [[http://plantuml.com/sequence Alice]] actor" as Alice
Bob -> Alice [[http://plantuml.com/start]] : hello
note left [[http://plantuml.com/start]]
  a note with a link
end note
Alice -> Bob : hello with [[http://plantuml.com/start{Tooltip for message} some link]]
note right [[http://plantuml.com/start]] : another note
note left of Bob
You can use [[http://plantuml.com/start links in notes]] also.
end note
@enduml
```



## Links in class diagram
```plantuml
@startuml
class Car [[http://plantuml.com/link]]
class Wheel [[http://plantuml.com/sequence]]
note left [[http://plantuml.com]]
foo
end note
Car *-- Wheel [[http://plantuml.com/class]] : has some
@enduml
```

There is a special syntax with 3 square brackets in class definition when you want to define
a link on field or method.
For example:

```plantuml
@startuml
class Car {
  - Some field [[[http://plantuml.com]]]
  Some method() [[[http://plantuml.com/link]]]
}
@enduml
```

```plantuml
@startuml
Object <|-- Foo

class Foo {
  + Object[]   [[[http://www.google.com]]]
  + methods1() [[[http://www.yahoo.com/A1{Some explainations about this method}]]]
  + methods2() [[[http://www.yahoo.com/A2]]]
}
  
class Foo2 {
  + methods1() [[[http://www.yahoo.com/B1]]]
  + methods2() [[[http://www.yahoo.com/B2]]]
}
  
class Object [[http://www.yahoo.com]]
@enduml
```


## Links in activity diagram

### On activity label
```plantuml
@startuml
start
[[http://plantuml.com]]:Some activity;
:Some [[http://plantuml.com link]];
end
@enduml
```

### On partition
```plantuml
@startuml
start
partition "[[http://plantuml.com partition_name]]" {
    :read doc. on [[http://plantuml.com plantuml_website]];
    :test diagram;
}
end
@enduml
```
*[Ref. [QA-542](https://forum.plantuml.net/542/ability-to-define-hyperlink-on-diagram-elements?show=14003#c14003)]*


## Link in State diagram

You can add link on State diagram:
- local link on a word 
- or link on the entire state shape

```plantuml
@startuml
state state1 [[http://plantuml.com/link]]
state state2 [[http://plantuml.com/state{this is a tooltip\nand a link to "plantuml/state"}]]
state2 : a global link\nand a tooltip
note left [[http://plantuml.com]]
a note
and a link
to ""plantuml.com""
end note
state3 : a local link to [[http://plantuml.com plantuml]]

state1 --> state2
state2 --> state3
@enduml

```


## Links in Network diagram (nwdiag)

```plantuml
@startuml
nwdiag {
  network Network {
      Server [description="A [[http://plantuml.com link]] on nwdiag"];
  }
}
@enduml
```


## Links in JSON/YAML diagram 

### JSON
```plantuml
@startjson
{
"@fruit": "Apple",
"$size": "Large",
"Appli.": "A [[http://plantuml.com link]] on JSON"
}
@endjson
```

### YAML
```plantuml
@startyaml
@fruit: Apple
$size: Large
Appli.: A [[http://plantuml.com link]] on YAML
@endyaml
```


## Links in notes

It is also possible to specify a link at the beginning of a note (the link applies to the full note), or inside a note (for a portion of the note). 
```plantuml
@startuml
:Foo:
note left of Foo [[http://www.google.com]]
This is a note
end note

note right of Foo
Yet another link to [[http://www.google.com]] as demo.
You can also [[http://www.yahoo.fr specify a text]] for the link.
And even [[http://www.yahoo.fr{This is a tooltip} add a tooltip]] to the link.
end note
@enduml
```


## Links with explicit URL directive

You can use the `url of|for XXX is [[yyy]]` syntax:

```plantuml
@startebnf
CommandUrl = "url", {space}, ["of"|"for"], {space}-, name, {space}-, ["is"], {space}, URL;
@endebnf
```

### On sequence diagram
```plantuml
@startuml
Bob -> Alice : ok
url of Bob is [[http://www.google.com]]
@enduml
```

### On class diagram
```plantuml
@startuml
skinparam topurl http://www.google.com
Dog --|> Mammal
url of Mammal is [[/search]]
url of Dog is [[http://www.yahoo.com{This is Dog}]]
Dog o-- Cat
Cat --|> Mammal
@enduml
```


### On usecase diagram
```plantuml
@startuml
actor Mamal
usecase Dog

url of Mamal is [[http://www.google.com]]
url of Dog is [[http://www.yahoo.com{This is Dog}]]
@enduml
```

### On component or deployment diagram
```plantuml
@startuml
node Mamal
component Dog

url of Mamal is [[http://www.google.com]]
url of Dog is [[http://www.yahoo.com{This is Dog}]]
@enduml
```

*[Ref. [Incubation: URL in diagrams](http://wiki.plantuml.net/site/incubation#url_in_diagrams)]*


## Links in arrow (or Hyperlinks in link or connection)

### Class diagram

You can use the same syntax as above in the arrow name.
It makes an underlined link:

```plantuml
@startuml
class Car 
Car "1" *-- "*" Wheel : [[http://plantuml.com/class-diagram has some]]
@enduml
```

Or you can use this syntax. It doesn't underline the link, though it's still clickable:

```plantuml
@startuml
class Car 
Car "1" *-- "*" Wheel [[http://plantuml.com/class-diagram]] : has some
@enduml
```

### Component or Deployment diagram

[[#FFD700#FIXME]] 🚩
See Wanted features [QA-6397](https://forum.plantuml.net/6397)
[[#FFD700#FIXME]]
```plantuml
@startuml
node Car 
Car *-- Wheel [[http://plantuml.com/deployment-diagram]] : has some
@enduml
```


*[Ref. [QA-6397](https://forum.plantuml.net/6397)]*


### State diagram

[[#FFD700#FIXME]] 🚩
Same Issue 
[[#FFD700#FIXME]]
```plantuml
@startuml
state Car
state CarWithWheel
Car -> CarWithWheel [[http://plantuml.com/state-diagram]] : Add wheel to car
@enduml
```


## Specific SkinParameter for Link

### hyperlinkColor 

You can change the ``color`` value of the links with the ``hyperlinkColor`` setting.

```plantuml
@startuml
:hyperlinkColor setting, by default;
:[[http://plantuml.com]];
@enduml
```

```plantuml
@startuml
skinparam hyperlinkColor red
:hyperlinkColor setting;
:[[http://plantuml.com]];
@enduml
```

*[Ref. [QA-2322](https://forum.plantuml.net/2322/increasing-visibility-of-links)]*

### hyperlinkUnderline 

You can use ``hyperlinkUnderline`` to specify the presence and (in PNG only) thickness of hyperlink underlines.

```plantuml
@startuml
skinparam hyperlinkUnderline false
:hyperlinkColor setting;
:[[http://plantuml.com]];
@enduml
```
```plantuml
@startuml
skinparam hyperlinkUnderline 1
:hyperlinkColor setting;
:[[http://plantuml.com]];
@enduml
```
```plantuml
@startuml
skinparam hyperlinkUnderline 5
:hyperlinkColor setting;
:[[http://plantuml.com]];
@enduml
```

*[Ref. [QA-2866](https://forum.plantuml.net/2866), [QA-15114](https://forum.plantuml.net/15114), [GH-1241](https://github.com/plantuml/plantuml/issues/1241), [GH-1411](https://github.com/plantuml/plantuml/issues/1411)]*

### topurl 

You can use `topurl` setting, in order to define the prefix for all the links on a PlantUML diagram, as:

```plantuml
@startmindmap

skinparam topurl https://plantuml.com/

* [[index PlantUML website]]
** [[sequence-diagram Sequence]]
** [[mindmap-diagram MindMap]]
** [[wbs-diagram WBS]]
** ...
@endmindmap
```

*[Ref. [QA-9016](https://forum.plantuml.net/9016/dashed-vs-solid-lines-in-sequence-diagrams?show=9023#c9023), [QA-13179](https://forum.plantuml.net/13179/how-the-skinparam-topurl-works-url-links) ]*

## Other SkinParameter for Link

You can see also on:
- [Specific SkinParameter for SVG](svg#34q86jw7xgn8k362kjon)


## Using (global) style

### Without style *(by default)*
```plantuml
@startuml
title test on HyperlinkColor [[test link]]

 class test <<normal>> {
  * aaa
  + [[normal model]]
  - bb
 }
 
  class test_with_stereo AS "[[http://www.plantuml.com test]]" <<red>> {
  * aaa
  + [[red model]]
  - bb
 }
@enduml
```


### With style

You can use [style](style-evolution) to change rendering of elements.

```plantuml
@startuml
<style>
.red {
  HyperlinkColor #FF0000
}
</style>

title test on HyperlinkColor [[test link]]

 class test <<normal>> {
  * aaa
  + [[normal model]]
  - bb
 }
 
  class test_with_stereo AS "[[http://www.plantuml.com test]]" <<red>> {
  * aaa
  + [[red model]]
  - bb
 }
@enduml
```

*[Ref. [QA-8071](https://forum.plantuml.net/8071/)]*


