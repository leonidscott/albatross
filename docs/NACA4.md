# What is a NACA 4 Foil?

We define a foil by its purpose, not it's geometry. Nevertheless, the infinitie varieties of possible shapes a foil can take can be danting, hard to communicate, and obscure the geometric properties that contribute to performance. The NACA series encodings directly address these problems by creating a simple, standardizable  way to represent a foil shape, and in doing so, communicate the geometric properties of a foil that fundementally impact its ability to produce lift and drag. 

NACA foils were developed by the National Advisory Committee for Aeronautics (NACA), a US federal agency established in 1915 to research and create standards for the then blosoming field of aeronautics. Today, we know of NACA as the National Aeronautics and Space Administration (NASA). NACA developed the NACA-4 series of foils in the process of building an extensive public catalog of foil shapes that engineers could pick from in order to achieve their design targets. NACA 4 foils are composed of three numbers, expressed as four digits (lol don't tell me this is a government project), that each encode a geometric property of a foil shape.

### Geometric Properties
The following pictures shows the slighly arched, teardrop foil shape we often think of when we think of an aerofoil:

[Insert picture]

Running directly from the leading ege to the trailing edge of the foil is the *cord line*. All measurements used in the NACA-4 encoding are made in reference to the cord line as a percentage of it. Deviating from the camber line, and giving the foil its arched shape, is the *camber line*. Notice that the upper and lower surfaces of the foil are always the same distance perpendicular to the camber line. Finally, the teardrop shape of the foil is created by varying the thickness of the foil along the camberline, rapidly increasing until a maximum thickness (about 1/4 way down the foil), and slowly tapering off to the trailing edge. 

### NACA MPXX
NACA 4 foils use the following format for encoding these features: `NACA MPXX`:


[Insert my self-made, god damn masterpiece of a picture]

* **M (Maximum Camber)** determines the maximum deflection the camber line makes from the chord line. **M** is defined as a percentage of the chord line length, as a hundredth of a percentage point. Consider an example foil, `NACA 2415`, with a chord length of one meter. In this case, the camber line deviates a maximum of 0.02%, or 2cm from the chord line.  
* **P (Maximum Camber Position)** defines where along the chord line the maximum camber lays. **P** is defined as a percentage of the chord line length, starting from the leading edge, and is measured in tenths of a percent. For our example `NACA 2415` foil with a 1m chord, this would the maximum camber would lay 40% (40cm) down the length of the chord line.  
* **XX (Thickness)** (Denoted as **T** in above) describes the maximum thickness of the foil as a percentage of the chord line length in hundredths of a percent. Therefore, our NACA 2415 foil sould have a maximum thickness of 15% of the chord line length (15cm).
