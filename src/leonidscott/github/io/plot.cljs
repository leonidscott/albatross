(ns leonidscott.github.io.plot
  (:require
   ["react-plotly.js" :as plotly]
   [reagent.core :as r]
   [re-com.core :as re-com]))

;;; Example Plot

(defn plot-data []
  (let [data   [{:x [1, 2, 3, 4, 5]
                 :y [1, 2, 4, 8, 16]}]]
    {:margin {:t 0} :data data}))

(defn example-plot [] [:div [:p "example-plot"]])

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

#_(defn ellipse-plot []
  (let [ellipse-params (r/atom {:a 5 :b 2})]
    (fn []
      (let [{:keys [a b]} @ellipse-params]
        [:div
         [:div "ellipse-plot"]
         [re-com/slider {:model     a
                         :on-change #(swap! ellipse-params assoc :a %)}]]))))

(defn ellipse-plot []
  [plotly/plot (clj->js (plot-data))])
