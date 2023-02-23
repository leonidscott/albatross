(ns leonidscott.github.io.plot
  (:require
   ["plotly.js-dist-min" :as plotly]
   [reagent.core :as r]))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn initalize-plot! []
  (let [data   [{:x [1, 2, 3, 4, 5]
                 :y [1, 2, 4, 8, 16]}]
        margin {:t 0}
        plot  (-> js/document (.getElementById "plot"))]
    (. plotly newPlot plot (clj->js data) (clj->js margin))))

(defn plot []
  (r/create-class
    {:reagent-render
     (fn [] [:div {:id "plot" :style {:width "600px" :height "250px"}}])

     :component-did-mount initalize-plot!}))
