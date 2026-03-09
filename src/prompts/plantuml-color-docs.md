## Colors
You can use specify fill and line colors either:
* with [its standard name](https://www.w3schools.com/colors/colors_names.asp) or [CSS name](https://www.w3.org/TR/css-color-4/#named-colors)
* using [HEX value (6 digits)](https://www.w3.org/TR/css-color-4/#hex-notation): [``#RRGGBB``](https://www.w3schools.com/colors/colors_hexadecimal.asp)
* using [HEX value (8 digits)](https://www.w3.org/TR/css-color-4/#hex-notation) with [alpha compositing](https://en.wikipedia.org/wiki/Alpha_compositing) or [RGBA color model](https://en.wikipedia.org/wiki/RGBA_color_model): [``#RRGGBBaa``](https://www.w3.org/TR/css-color-4/#hex-notation)
* using [short HEX value (3 digits)](https://www.w3.org/TR/css-color-4/#hex-notation): [``#RGB``](https://www.w3.org/TR/css-color-4/#hex-notation) (so ``#ABC`` means ``#AABBCC``)
* using very short HEX value (1 digits): ``#x`` which is a shortcut for ``#xxxxxx`` (so you get some gray)

A special color values: [``transparent``](https://www.w3.org/TR/css-color-4/#valdef-color-transparent) can be used, synonym of [``transparent black``](https://www.w3.org/TR/css-color-4/#transparent-black) (``#00000000``).

Example on [Gantt Diagram](gantt-diagram):
```plantuml
@startgantt
[Activity1] lasts 5 days
[Activity2] lasts 5 days
[Activity1] is colored in White/Red
[Activity2] is colored in Silver/SeaGreen
[Activity1] -> [Activity2]
@endgantt
```


Example on [Sequence Diagram](sequence-diagram):
```plantuml
@startuml
actor Bob #Red/Yellow
actor Alice #FF0000/FFFF00
Alice -> Bob : hello
@enduml
```


This uses Color Gradient, see next section.
See also [skinparam](http://plantuml.com/skinparam).


## Color gradient

You can also use color gradient in background, with the following syntax: two colors names separated either by:

*    `|`,
*    `/`,
*    `\\`, or
*    `-`

depending the direction of the gradient.

See the previous section, and [Color gradient on Class diagram page.](class-diagram#cfe920390b501516)


## Automatic Font Color

PlantUML allows dynamic font color selection using the `#?` syntax. The system automatically chooses between two colors based on the current background color to ensure optimal contrast and readability.

### How It Works:
- The `#?` prefix defines a conditional color choice.
- Two colors follow, separated by a colon.
- The engine selects one based on the background:
  - If the background is light, it uses the first color.
  - If the background is dark, it uses the second color to maintain contrast.

Thus, the `#?black:white` syntax ensures that text remains legible across different background colors.

```plantuml
@startuml
<style>
document {
  BackGroundColor darkblue
}
root {
  FontColor #?black:white
  LineColor white
}
</style>
alice -> bob : hello
@enduml
```

In this example, since the background is dark blue, the font color automatically switches to white for better contrast in the message **"hello"**, while keeping black for the participant labels.


## Color with preprocessing

You can manipulate color with [Preprocessing](preprocessing), and the [Builtin functions](preprocessing#291cabbe982ff775):

| Name                     | Description                                                                                                                                         | Example                                               | Return                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| ``%darken``              | Return a darken color of a given color with some ratio                                                                                              | ``%darken("red", 20)``                                | ``#CC0000``                                      |
| ``%is_dark``             | Check if a color is a dark one                                                                                                                      | ``%is_dark("#000000")``                               | ``true``                                         |
| ``%is_light``            | Check if a color is a light one                                                                                                                     | ``%is_light("#000000")``                              | ``false``                                        |
| ``%lighten``             | Return a lighten color of a given color with some ratio                                                                                             | ``%lighten("red", 20)``                               | ``#CC3333``                                      |
| ``%reverse_color``       | Reverse a color using RGB                                                                                                                           | ``%reverse_color("#FF7700")``                         | ``#0088FF``                                      |
| ``%reverse_hsluv_color`` | Reverse a color [using HSLuv](https://www.hsluv.org/)                                                                                               | ``%reverse_hsluv_color("#FF7700")``                   | ``#602800``                                      |


## View colors in PlantUML
A user has recently created an image to display [all names colors used by PlantUML](https://github.com/sledgeh/PlantUML-colors). (We thank him by the way!)

So a new feature has been added to print all those colors using a special diagram description:
```plantuml
@startuml
colors
@enduml
```

It is also possible to print a palette of colors close to some other color (using its name or HEX value).


```plantuml
@startuml
colors chocolate
@enduml
```




## Archimate colors

[Archimate](archimate-diagram) uses color names that reflect the purpose of a node:
* Application
* Business
* Implementation
* Motivation
* Physical
* Strategy
* Technology

```plantuml
@startuml
skinparam minClassWidth 125
skinparam nodesep 10
skinparam ranksep 10

rectangle Application    #Application
rectangle Business       #Business
rectangle Implementation #Implementation
rectangle Motivation     #Motivation
rectangle Physical       #Physical
rectangle Strategy       #Strategy
rectangle Technology     #Technology
@enduml
```


## PlantUML colors

```plantuml
@startuml
skinparam minClassWidth 200
skinparam nodesep 10
skinparam ranksep 10

rectangle "ClassColor" {
rectangle "Class_C_Background\n #ADD1B2" #ADD1B2
rectangle "Class_N_Background\n #E3664A" #E3664A
rectangle "Class_A_Background\n #A9DCDF" #A9DCDF
rectangle "Class_I_Background\n #B4A7E5" #B4A7E5
rectangle "Class_E_Background\n #EB937F" #EB937F
}
rectangle "DefaultColor" {
rectangle "BackGroundColor_Default\n #FEFECE" #FEFECE
rectangle "LineColor_Default\n #A80036"       #A80036
rectangle "Legend_BackGroundColor\n #DDDDDD"   #DDDDDD
rectangle "//TBC//\n..."
}
@enduml
```

