(ns leonidscott.github.io.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      ["plotly.js-dist-min" :as plotly]))

;; -------------------------
;; Views

(defn home-page []
  [:div
   [:h2 "Welcome to Reagent"]
   [:div {:id "graph" :style {:width "600px" :height "250px"}}]])

;; -------------------------
;; Initialize app

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

(defn initalize-graph! []
  (let [data [{:x [1, 2, 3, 4, 5]
               :y [1, 2, 4, 8, 16]}]
        margin {:t 0}
        graph (-> js/document (.getElementById "graph"))]
    (. plotly newPlot graph (clj->js data) (clj->js margin))))

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app"))
  (initalize-graph!))

(defn ^:export init! []
  (mount-root))
