(ns leonidscott.github.io.plot
  (:require
   [leonidscott.github.io.events :as events]
   ["plotly.js-dist-min" :as plotly]
   [reagent.core :as r]
   [re-com.core :as re-com]
   [re-frame.core :as re]))


;;; ****************  Plot effect ****************

(re/reg-fx :effects/plot!
    (fn [{:keys [element-id data layout config]}]
      (. plotly react
         (-> js/document (.getElementById element-id))
         (clj->js data)
         (clj->js (if layout layout {}))
         (clj->js (if config config {})))))


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

(defn ellipse-plot []
  (let [ellipse-params (r/atom {:a 5 :b 2})]
    (fn []
      (let [{:keys [a b]} @ellipse-params]
        [:div.main-plot
         [plot {:element-id "ellipse-plot"
                :data (ellipse-data a b)
                :layout {:title "Ellipse"
                         :xaxis {:range [-20 20]
                                 :showgrid false
                                 :zeroline false
                                 :showline true}
                         :yaxis {:range [-20 20]
                                 :showgrid false
                                 :zeroline false
                                 :showline true}}
                :config {:staticPlot true
                         :responsive true
                         #_#_:autosizable true}}]
         [:div {:style {:display "flex"
                        :flex-direction "column"}}
          [re-com/slider {:model     a
                          :on-change #(swap! ellipse-params assoc :a %)
                          :min       0
                          :max       20}]
          [re-com/slider {:model     b
                          :on-change #(swap! ellipse-params assoc :b %)
                          :min       0
                          :max       20}]]]))))
