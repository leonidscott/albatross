(ns leonidscott.github.io.plot
  (:require
   [leonidscott.github.io.events :as events]
   ["plotly.js-dist-min" :as plotly]
   [reagent.core :as r]
   [re-com.core :as re-com]
   [re-frame.core :as re]))


;;; ****************  Plot effect ****************

(re/reg-fx :effects/plot!
    (fn [{:keys [element-id data margin]}]
      (. plotly newPlot
         (-> js/document (.getElementById element-id))
         (clj->js data)
         (clj->js margin))))


(events/reg-event-fx
  :events/plot
  (fn [_ [_ plot-map]] {:effects/plot! plot-map}))


;;; ****************  General Plot Component ****************

(defn plot [{:keys [element-id] :as plot-map}]
  (r/create-class
    {:reagent-render
     (fn [] [:div {:id element-id :style {:width "600px" :height "250px"}}])

     :component-did-mount #(re/dispatch [:events/plot plot-map])}))

;;; **************** Specific Plots ****************

;;; Example Plot

(defn plot-data []
  (let [data   [{:x [1, 2, 3, 4, 5]
                 :y [1, 2, 4, 8, 16]}]]
    {:margin {:t 0} :data data}))

(defn example-plot []
  [plot (merge {:element-id "plot"} (plot-data))])

;;; Ellipse Parametric Plot

(defn ellipse-data
  "x = a cos(t)
   y = b sin(t)"
  [a b]
  (let [ϴ-points (into [] (doall (range 0 (* 2 Math/PI) (/ Math/PI 50))))
        data     [{:x (map (fn [ϴ] (* a (Math/cos ϴ))) ϴ-points)
                   :y (map (fn [ϴ] (* b (Math/sin ϴ))) ϴ-points)}]]
    {:margin {:t 0} :data data}))

(defn slider []
  (let [slider-val (r/atom 0)]
    (fn []
      [re-com/slider {:model @slider-val :on-change #(reset! slider-val %)}])))

(defn ellipse-plot []
  (let [ellipse-params (r/atom {:a 5 :b 2})]
    (fn []
      (let [{:keys [a b]} @ellipse-params]
        [:div
         [plot (merge {:element-id "ellipse-plot"} (ellipse-data a b))]
         [re-com/slider {:model     a
                         :on-change #(swap! ellipse-params assoc :a %)}]]))))
