(ns leonidscott.github.io.core
    (:require
      [leonidscott.github.io.config :as config]
      [leonidscott.github.io.events :as events]
      [leonidscott.github.io.naca   :as naca]
      [reagent.dom :as d]
      [re-frame.core :as re-frame]))

;; -------------------------
;; Views

(defn banner []
  [:div.banner
   [:h1.banner-text #_{:style {:font-family "URW Chancery L, cursive"}}
    "Albatross"]])

(defn home-page []
  [:div
   [banner]
   [naca/naca-plot]])

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
