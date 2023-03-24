(ns leonidscott.github.io.naca-text)

(defn introduction []
  [:<>
   [:p "We define a foil by its purpose, not its geometry. Nevertheless, the infinite varieties of possible shapes a foil can take can be daunting, hard to communicate, and obscure the geometric properties that contribute to performance. The NACA series encodings directly address these problems by creating a simple, standardizable way to represent a foil shape, and in doing so, communicate the geometric properties of a foil that fundamentally impact its ability to produce lift and drag."]
   [:p "NACA foils were developed by the National Advisory Committee for Aeronautics (NACA), a US federal agency established in 1915 to research and create standards for the then blossoming field of aeronautics. Today, we know of NACA as the National Aeronautics and Space Administration (NASA). NACA developed the NACA-4 series of foils in the process of building an extensive public catalog of foil shapes that engineers could pick from in order to achieve their design targets. NACA 4 foils are composed of three numbers, expressed as four digits (lol don't tell me this is a government project), that each encode a geometric property of a foil shape."]])

(defn geometric-properties []
  (let [cord-img-src "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chord_length_definition_%28en%29.svg/2880px-Chord_length_definition_%28en%29.svg.png"]
    [:<>
     [:h2 "Geometric Properties"]
     [:p "The following pictures shows the slightly arched, teardrop foil shape we often think of when we think of an aerofoil:"]
     [:img {:src   cord-img-src
            :alt   "cord line image"
            :style {:width "-webkit-fill-available"}}]
     [:p "Running directly from the leading edge to the trailing edge of the foil is the " [:em "cord line"] ". All measurements used in the NACA-4 encoding are made in reference to the cord line as a percentage of it. Deviating from the camber line, and giving the foil its arched shape, is the " [:em "camber line"] ". Notice that the upper and lower surfaces of the foil are always the same distance perpendicular to the camber line. Finally, the teardrop shape of the foil is created by varying the thickness of the foil along the camber line, rapidly increasing until a maximum thickness (about 1/4 way down the foil), and slowly tapering off to the trailing edge."]]))

(defn naca-mpxx []
  [:<>
   [:h2 "NACA MPXX"]
   [:p "Understanding these geometric properties, NACA-4 foils become pretty intuitive! Let's take a look at the following foil: " [:code "NACA-2415"]]
   [:li "The first digit, **2**, represents the *maximum camber* (M)  of the foil. That means that the camber line deviates a maximum of 2% vertically above the cord line."]])

(defn text []
  [:div.text-container
   [:div.explanation
    [:h1 "What is a NACA 4 Foil?"]
    [introduction]
    [geometric-properties]
    [naca-mpxx]]])
