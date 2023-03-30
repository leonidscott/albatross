(ns leonidscott.github.io.naca
  (:require
   [leonidscott.github.io.plot :as plot]
   [reagent.core :as r]
   [re-com.core :as re-com]))

(defn camber-line-fn
  "y_{c}(x) =
     if (0 <= x < p)  => (m/p^2) * (2px - x^2)
     if (p <= x <= 1) => (m/(1-p)^2) * (1 - 2p + 2px - x^2)
     else             => 0"
  [{:keys [m p]}]
  (fn [x]
    (cond
      (and (<= 0 x) (< x p))
      (* (/ m (Math/pow p 2))
         (- (* 2 p x)
            (Math/pow x 2)))

      (and (<= p x) (<= x 1))
      (* (/ m
            (Math/pow (- 1 p) 2))
         (+ 1 (* -2 p) (* 2 p x) (* -1 (Math/pow x 2))))

      :else 0)))


(defn camber-line-gradient-fn
  "dy_{c}/dx(x) =
      if (0 <= x < p)  => 2m/p^2 (p - x)
      if (p <= x <= 1) => 2m/(1-p)^2 (p - x)
      else             => 0"
  [{:keys [m p]}]
  (fn [x]
    (cond
      (and (<= 0 x) (< x p))
      (* (/ (* 2 m) (Math/pow p 2))
         (- p x))

      (and (<= p x) (<= x 1))
      (* (/ (* 2 m)
            (Math/pow (- 1 p) 2))
         (- p x))

      :else 0)))


(defn thickness-distrubtion-fn
  "y_{t}(x) = (t/0.2) * (a0 sqrt(x) + a1 x + a2 x^2 + a3 x^3 + a4 x^4)

   a0 = 0.2969;
   a1 = -0.126;
   a2 = -0.3516;
   a3 = 0.2843;
   a4 = -0.1015; (* open trainling edge*)
   a4 = -0.1036; (* closed trainling edge*)"
  [{:keys [t open?]}]
  (let [a0  0.2969
        a1 -0.126
        a2 -0.3516
        a3  0.284
        a4 (if open? -0.1015 -0.1036)]
    (fn [x]
      (* (/ t 0.2)
         (+ (* a0 (Math/sqrt x))
            (* a1 x)
            (* a2 (Math/pow x 2))
            (* a3 (Math/pow x 3))
            (* a4 (Math/pow x 4)))))))

(defn upper-surface-fn
  "HOF that takes in:
    y_c(x) <- camber line function
    y_t(x) <- thickness distribution function
    ϴ(x)   <- change of coordinate system function
   Returns a function that,
    when called with a cartesian x coordinate representing a point on the cord line,
    returns a tuple containing the x and y coordinate to the corresponding point on the upper surface of the foil."
  [yc yt ϴ]
  (fn [x]
    {:x (- x (* (yt x) (Math/sin (ϴ x))))
     :y (+ (yc x) (* (yt x) (Math/cos (ϴ x))))}))

(defn lower-surface-fn
  "HOF that takes in:
    y_c(x) <- camber line function
    y_t(x) <- thickness distribution function
    ϴ(x)   <- change of coordinate system function
   Returns a function that,
    when called with a cartesian x coordinate representing a point on the cord line,
    returns a tuple containing the x and y coordinate to the corresponding point on the lower surface of the foil."
  [yc yt ϴ]
  (fn [x]
    {:x (+ x (* (yt x) (Math/sin (ϴ x))))
     :y (- (yc x) (* (yt x) (Math/cos (ϴ x))))}))

(defn naca-data
  [naca-params]
  (let [x-points (->> (range 0 Math/PI (/ Math/PI 50))
                      (map (fn [β] (/ (- 1 (Math/cos β))
                                      2)))
                      doall
                      (into []))
        y-c      (camber-line-fn naca-params)
        y-t      (thickness-distrubtion-fn naca-params)
        ϴ        (fn [x] (Math/atan ((camber-line-gradient-fn naca-params) x)))
        u-points (map (upper-surface-fn y-c y-t ϴ) x-points)
        l-points (map (lower-surface-fn y-c y-t ϴ) x-points)]
    [{:x x-points
      :y (map y-c x-points)}
     {:x (reduce #(conj %1 (:x %2)) [] u-points)
      :y (reduce #(conj %1 (:y %2)) [] u-points)}
     {:x (reduce #(conj %1 (:x %2)) [] l-points)
      :y (reduce #(conj %1 (:y %2)) [] l-points)}]))

(defn param-slider
  [{:keys [value on-change min max text]}]
  [:div {:style {:max-width "100%"}}
   [:p {:style {:margin "0 0 0"}}[:b text]]
   [:div {:style {:display         "flex"
                  :flex-direction  "row"
                  :flex-wrap       "nowrap"
                  :align-items     "center"
                  :justify-content "space-between"}}
    [re-com/slider {:model     value
                    :on-change on-change
                    :min       min
                    :max       max
                    :parts     {:wrapper {:style {:max-width "70%"}}}
                    :style     {:max-width "100%"}}]
    [re-com/input-text
     :model     (.toString value)
     :on-change on-change
     :width     "50px"]]])

(defn naca-plot []
  (let [naca-params (r/atom {:m 0.02 :p 0.4 :t 0.12 :open? false :unit :naca-unit})]
    (fn []
      [:div.main-plot
       [plot/plot {:element-id "naca-plot"
                   :data       (naca-data @naca-params)
                   :layout     {:margin {:b 30 :l 30 :t 30 :r 30}
                                :xaxis  {:range    [-0.2 1.2]
                                         :dtick    0.25
                                         :showgrid false
                                         :zeroline false
                                         :showline true}
                                :yaxis  {:range    [-0.25 0.25]
                                         :dtick    0.25
                                         :showgrid false
                                         :zeroline false
                                         :showline true
                                         :scaleanchor "x"
                                         :scaleratio 1}
                                :showlegend false}
                   :config     {:staticPlot true
                                :responsive true}}]
       [:div.main-plot-controls
        [:div {:style {:display        "flex"
                       :flex-direction "column"}}
         [param-slider {:value     (* (:m @naca-params) 100)
                        :on-change #(swap! naca-params assoc :m (/ % 100))
                        :min       0
                        :max       100
                        :text      "M (Max Camber)"}]
         [param-slider {:value     (* (:p @naca-params) 100)
                        :on-change #(swap! naca-params assoc :p (/ % 100))
                        :min       0
                        :max       100
                        :text      "P (Position Camber)"}]
         [param-slider {:value     (* (:t @naca-params) 100)
                        :on-change #(swap! naca-params assoc :t (/ % 100))
                        :min       0
                        :max       40
                        :text      "XX (Thickness)"}]]
        [:div {:style {:margin-left "15px"}}
         [:p {:style {:margin "0 0 0"}} [:b "Units"]]
         [re-com/horizontal-bar-tabs
          :model (:unit @naca-params)
          :tabs  [{:id :naca-unit :label [:p "NACA"]}
                  {:id :percentages :label [:p "%'s"]}]
          :on-change #(swap! naca-params assoc :unit %)]

         [:p {:style {:margin "15px 0 0"}} [:b "Open Trailing Edge?"]]
         [re-com/checkbox {:model (:open? @naca-params)
                           :on-change #(swap! naca-params assoc :open? %)
                           :label "Open Trailing Edge"}]]]])))
