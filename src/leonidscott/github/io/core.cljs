(ns leonidscott.github.io.core
    (:require
      [leonidscott.github.io.config :as config]
      [leonidscott.github.io.events :as events]
      [leonidscott.github.io.naca   :as naca]
      [leonidscott.github.io.naca-text :as naca-text]
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
   [naca/naca-plot]
   [naca-text/text]])

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

;;;TODO:
;; General
;;   * Publish to github
;; Graph
;;   * Center graph :kind of done:
;;   * Better slider bounds :check:
;;   * Make unit conversion functional :check:
;;   * Make it clear what the slider boundaries are. :check:
;;   * Make nicer default state :good  enough:
;;   * Truncate NACA Values
;; Explanation
;;   * Enter explanation of open trailing edges
;;   * Get someone to proofread
;; Future
;;   * Make headings collapsable
;;   * Make equations description
;;   * Swap to Material UI sliders? (If I have more components)

