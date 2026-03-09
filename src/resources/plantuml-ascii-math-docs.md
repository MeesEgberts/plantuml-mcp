## Maths

Within PlantUML, you can use [AsciiMath](http://asciimath.org) notation:
```plantuml
@startuml
:<math>int_0^1f(x)dx</math>;
:<math>x^2+y_1+z_12^34</math>;
note right
Try also
<math>d/dxf(x)=lim_(h->0)(f(x+h)-f(x))/h</math>
<math>P(y|bb"x") or f(bb"x")+epsilon</math>
end note
@enduml
```

or [JLaTeXMath](https://github.com/opencollab/jlatexmath) notation:
```plantuml
@startuml
:<latex>\int_0^1f(x)dx</latex>;
:<latex>x^2+y_1+z_{12}^{34}</latex>;
note right
Try also
<latex>\dfrac{d}{dx}f(x)=\lim\limits_{h \to 0}\dfrac{f(x+h)-f(x)}{h}</latex>
<latex>P(y|\mathbf{x}) \mbox{ or } f(\mathbf{x})+\epsilon</latex>
end note
@enduml
```

Here is another example:
```plantuml
@startuml
Bob -> Alice : Can you solve: <math>ax^2+bx+c=0</math>
Alice --> Bob: <math>x = (-b+-sqrt(b^2-4ac))/(2a)</math>
@enduml
```


## Standalone diagram

You can also use ``@startmath``/``@endmath`` to create standalone [AsciiMath](http://asciimath.org) formula.


```plantuml
@startmath
f(t)=(a_0)/2 + sum_(n=1)^ooa_ncos((npit)/L)+sum_(n=1)^oo b_n\ sin((npit)/L)
@endmath
```


Or use ``@startlatex``/``@endlatex`` to create standalone [JLaTeXMath](https://github.com/opencollab/jlatexmath) formula.

```plantuml
@startlatex
\sum_{i=0}^{n-1} (a_i + b_i^2)
@endlatex
```


## How is this working?

To draw those formulas, PlantUML uses two open source projects:

* [AsciiMath](https://github.com/asciimath/asciimathml/tree/master/asciimath-based) that converts AsciiMath notation to LaTeX expression;
* [JLatexMath](https://github.com/opencollab/jlatexmath) that displays mathematical formulas written in LaTeX. JLaTeXMath is the best Java library to display LaTeX code.

[ASCIIMathTeXImg.js](https://github.com/asciimath/asciimathml/blob/master/asciimath-based/ASCIIMathTeXImg.js) is small enough to be integrated into PlantUML standard distribution.

And since 2021 (V1.2021.8), `ASCIIMathTeXImg.js` was ported on JAVA in PlantUML with [`ASCIIMathTeXImg.java`](https://github.com/plantuml/plantuml/commit/d55c9c6ca744e9a8f0ab1a74dd52fc8a635a7729#diff-56fe8754c883fd829b39760a4d1f58db14a3ad45dd5376dff3d1b0a17c0b891f) and since 2024 (V1.2024.5) there was some more corrections and improvements *(with the [``The-Lum/ASCIIMathTeXImg``](https://github.com/The-Lum/ASCIIMathTeXImg) Project)*.


Since [JLatexMath](https://github.com/opencollab/jlatexmath) is bigger, you have to [download it](http://beta.plantuml.net/plantuml-jlatexmath.zip) separately, then unzip the 4 jar files (*batik-all-1.7.jar*, *jlatexmath-minimal-1.0.3.jar*, *jlm\_cyrillic.jar* and *jlm\_greek.jar*) in the same folder as PlantUML.jar.


