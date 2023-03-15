(ns leonidscott.github.io.plot
  (:require
   [leonidscott.github.io.events :as events]
   ["plotly.js-dist-min" :as plotly]
   [reagent.core :as r]
   [re-com.core :as re-com]
   [re-frame.core :as re]))


;;; ****************  Plot effect ****************

(re/reg-fx :effects/plot!
    (fn [{:keys [element-id data]}]
      (. plotly react
         (-> js/document (.getElementById element-id))
         (clj->js data))))


(events/reg-event-fx
  :events/plot
  (fn [_ [_ plot-map]] {:effects/plot! plot-map}))


;;; ****************  General Plot Component ****************

(defn plot [_]
  (r/create-class
    {:reagent-render
     (fn [{:keys [element-id]}] [:div {:id element-id}])

     :component-did-mount #(re/dispatch [:events/plot (r/props %)])

     :component-did-update #(re/dispatch [:events/plot (r/props %)])}))

;;; **************** Specific Plots ****************

;;; Ellipse Parametric Plot

(defn ellipse-data
  "x = a cos(t)
   y = b sin(t)"
  [a b]
  (let [ϴ-points (into [] (doall (range 0 (* 2 Math/PI) (/ Math/PI 50))))]
    [{:x (map (fn [ϴ] (* a (Math/cos ϴ))) ϴ-points)
      :y (map (fn [ϴ] (* b (Math/sin ϴ))) ϴ-points)}]))

(defn slider []
  (let [slider-val (r/atom 0)]
    (fn []
      [re-com/slider {:model @slider-val :on-change #(reset! slider-val %)}])))

(defn ellipse-plot []
  (let [ellipse-params (r/atom {:a 5 :b 2})]
    (fn []
      (let [{:keys [a b]} @ellipse-params]
        [:div
         [plot {:element-id "ellipse-plot" :data (ellipse-data a b)}]
         [re-com/slider {:model     a
                         :on-change #(swap! ellipse-params assoc :a %)}]
         [re-com/slider {:model     b
                         :on-change #(swap! ellipse-params assoc :b %)}]]))))
