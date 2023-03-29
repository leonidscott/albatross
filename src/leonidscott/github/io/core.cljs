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
;;   * Float header correctly
;;   * Publish to github
;; Graph
;;   * Center graph
;;   * Swap to Material UI sliders
;;   * Add reactive input boxes
;;   * Add trailing edge open? checkbox box
;;   * Add unit conversion option
;;   * Remove legend
;;   * Make sure to scale graph
;;   * Make nicer default state
;; Explanation
;;   * Add citation
;;   * Get someone to proofread
;;   * Make text more reactive
;; Future
;;   * Make headings collapsable
;;   * Make equations description

