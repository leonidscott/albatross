(ns leonidscott.github.io.core
    (:require
      [leonidscott.github.io.config :as config]
      [leonidscott.github.io.events :as events]
      ["plotly.js-dist-min" :as plotly]
      [reagent.core :as r]
      [reagent.dom :as d]
      [re-frame.core :as re-frame]))

;; -------------------------
;; Views

(defn clj->json
    [ds]
    (.stringify js/JSON (clj->js ds)))

(defn initalize-graph! []
    (let [data   [{:x [1, 2, 3, 4, 5]
                   :y [1, 2, 4, 8, 16]}]
          margin {:t 0}
          graph  (-> js/document (.getElementById "graph"))]
      (. plotly newPlot graph (clj->js data) (clj->js margin))))

(defn home-page []
  (r/create-class
    {:reagent-render
     (fn []
       [:div
        [:h2 "Welcome to Reagent"]
        [:div {:id "graph" :style {:width "600px" :height "250px"}}]])

     :component-did-mount initalize-graph!}))

;; -------------------------
;; Initialize app

(defn dev-setup []
  (when config/debug? (println "dev mode")))


(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (d/unmount-component-at-node root-el)
    (d/render [home-page] root-el)))


(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
