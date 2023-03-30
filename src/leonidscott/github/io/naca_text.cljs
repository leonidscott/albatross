(ns leonidscott.github.io.naca-text)

(defn img-comp
  [{:keys [src alt href]}]
  [:div {:style {:text-align "right"}}
   [:img {:src   src
          :alt   alt
          :style {:width "-webkit-fill-available"}}]
   [:a {:style {:font-size "12px"
                :margin    "0px"}
        :href href
        :target "_blank"}
    "Wikipedia Aeronautics"]])

(defn introduction []
  [:<>
   [:p "We define a foil by its purpose, not its geometry. Nevertheless, the infinite varieties of possible shapes a foil can take can be daunting, hard to communicate, and obscure the geometric properties that contribute to performance. The NACA series encodings directly address these problems by creating a simple, standardizable way to represent a foil shape, and in doing so, communicate the geometric properties of a foil that fundamentally impact its ability to produce lift and drag."]

   [:p "NACA foils were developed by the National Advisory Committee for Aeronautics (NACA), a US federal agency established in 1915 to research and create standards for the then blossoming field of aeronautics. Today, we know of NACA as the National Aeronautics and Space Administration (NASA). NACA developed the NACA-4 series of foils in the process of building an extensive public catalog of foil shapes that engineers could pick from in order to achieve their design targets. NACA 4 foils are composed of three numbers, expressed as four digits (lol don't tell me this is a government project), that each encode a geometric property of a foil shape."]])

(defn geometric-properties []
  [:<>
   [:h2 "Geometric Properties"]

   [:p "The following pictures shows the slightly arched, teardrop foil shape we often think of when we think of an aerofoil:"]

   [img-comp {:src  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chord_length_definition_%28en%29.svg/2880px-Chord_length_definition_%28en%29.svg.png"
              :alt  "cord-line-image"
              :href "https://en.wikipedia.org/wiki/Chord_%28aeronautics%29"}]

   [:p "Running directly from the leading edge to the trailing edge of the foil is the " [:em "cord line"] ". All measurements used in the NACA-4 encoding are made in reference to the cord line as a percentage of it. Deviating from the camber line, and giving the foil its arched shape, is the " [:em "camber line"] ". Notice that the upper and lower surfaces of the foil are always the same distance perpendicular to the camber line. Finally, the teardrop shape of the foil is created by varying the thickness of the foil along the camber line, rapidly increasing until a maximum thickness (about 1/4 way down the foil), and slowly tapering off to the trailing edge."]])

(defn naca-mpxx []
  [:<>
   [:h2 "NACA MPXX"]

   [:p "NACA 4 foils use the following format for encoding these features: " [:code "NACA MPXX"] "."]

   [:img {:src "imgs/NACA4-Desc.PNG"
          :alt "NACA4-Desc"
          :style {:width "-webkit-fill-available"
                  :padding "20px 15%"}}]

   [:li [:b "M (Maximum Camber) "] "determines the maximum deflection the camber line makes from the chord line. " [:em "M "] "is defined as a percentage of the chord line length, as a hundredth of a percentage point. Consider an example foil, " [:code "NACA 2415"] ", with a chord length of one meter. In this case, the camber line deviates a maximum of 0.02%, or 2cm from the chord line."]

   [:li [:b "P (Maximum Camber Position) "] "defines where along the chord line the maximum camber lays. " [:em "P "] "is defined as a percentage of the chord line length, starting from the leading edge, and is measured in tenths of a percent. For our example " [:code "NACA 2415"] " foil with a 1m chord, this would mean the maximum camber would lay 40% (40cm) down the length of the chord line."]

   [:li [:b "XX (Thickness) "] "(Denoted as " [:b "T"] " above) describes the maximum thickness of the foil as a percentage of the chord line length in hundredths of a percent. Therefore, our " [:code "NACA 2415"] " foil should have a maximum thickness of 15% of the chord line length (15cm)."]])

(defn text []
  [:div.text-container
   [:div.explanation
    [:h1 "What is a NACA 4 Foil?"]
    [introduction]
    [geometric-properties]
    [naca-mpxx]]])
