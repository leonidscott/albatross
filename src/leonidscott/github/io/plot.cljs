(ns leonidscott.github.io.plot
  (:require
   ["plotly.js-dist-min" :as plotly]
   [reagent.core :as r]))

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn initalize-graph! []
  (let [data   [{:x [1, 2, 3, 4, 5]
                 :y [1, 2, 4, 8, 16]}]
        margin {:t 0}
        graph  (-> js/document (.getElementById "graph"))]
    (. plotly newPlot graph (clj->js data) (clj->js margin))))

(defn plot []
  (r/create-class
    {:reagent-render
     (fn [] [:div {:id "graph" :style {:width "600px" :height "250px"}}])

     :component-did-mount initalize-graph!}))
