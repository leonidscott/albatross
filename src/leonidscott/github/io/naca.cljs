(ns leonidscott.github.io.naca
  (:require [leonidscott.github.io.plot :as plot]))

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
  (let [x-points (into [] (doall (range 0 1 (/ 1 60))))
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

(defn naca-plot []
  (let [naca-params {:m 0.02 :p 0.4 :t 0.12 :open? false}]
    [plot/plot {:element-id "naca-plot"
                :data       (naca-data naca-params)
                :layout     {:margin {:b 30 :l 30 :t 30 :r 30}
                             :xaxis  {:range    [0 1]
                                      :showgrid false
                                      :zeroline false
                                      :showline true}
                             :yaxis  {:range    [-0.5 0.5]
                                      :showgrid false
                                      :zeroline false
                                      :showline true}}
                :config     {:staticPlot true
                             :responsive true}}]))
