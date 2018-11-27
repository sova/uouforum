(ns uouforum.client
    (:require [rum.core :as rum]
              [alandipert.storage-atom :refer [local-storage]]))

(enable-console-print!)

(println "This text is printed from src/nfrum/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))
(def     tv-state (local-storage (atom
                    {:tiles
                        [ {:title "Fusion Power Imminent"
                           :contents "Horne Technologies has developed a working Plasma Containment Prototype for furthering Fusion"
                           :priority 1
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}
                          {:title "Let's Put Sun Panels on the Roof"
                           :contents "Put a powerplant on your home and be free of your electric bill"
                           :priority 2
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}
                          {:title "Tonsky/rum is excellent for cljs"
                           :contents "the best way to be the best"
                           :priority 3
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}
                          {:title "Postpostpost"
                           :contents "this is the post!"
                           :link "http://hysterical.com"
                           :priority 4
                           :posted-by "v@nonforum.com"
                           :timestamp 808080808
                           :parent nil}]}) :tv))

(def input-state (atom {:inputs
                       [ {:title ""
                          :contents ""
                          :comment "ur coment"
                          }]}))

(rum/defc link [address]
  [:a {:href address} address])

(rum/defc hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change!"]
   [:h4 "Nonforum lives again!"]])

(rum/defc top-bar []
  [:div#topbar
   [:ol.topbar
    [:li [:a {:href "/"} "nonforum"]]
    [:li (link "top")]
    [:li (link "latest")]
    [:li (link "submit")]
    [:li (link "feed")]]])

(rum/defc side-bar []
  [:div#sidebar
   [:ol.sidebar
    [:li (link "profile")]
    [:li (link  "settings")]
    [:li (link "feedback")]
    [:li (link "logout")]]])

(rum/defc login-bar []
  [:div#loginbar
   [:ol.loginbar
    [:li.fbfb [:a {:href "/facebook"} "fb login"]]
    [:li.gogo [:a {:href "/gogole"} "gogole loign"]]
    [:li.nfnf [:a {:href "/nflogin"} "nonforum login"]]]])

(rum/defc tv-cell [td]
  [:li [:div.tile {:id (str "tile" (:priority td))}
        [:div.heading (:title td)]
        [:div.contents (:contents td)]
        [:div.priority (:priority td)]]])

(rum/defc television  < rum/reactive []
  [:div#tv
   [:ol.tv
    (map tv-cell (:tiles (rum/react tv-state)))]])

(rum/defc post-input []
  [:form#postinput
   [:input.fullwidth {:place-holder "title"
                      :on-change (fn [e] (do
                                    (swap! input-state assoc-in [:inputs 0 :title] (.-value (.-target e)))
                                    (.log js/console (get-in @input-state [:inputs 0 :title]))))}]
   [:input.fullwidth {:place-holder "contents"
                      :on-change (fn [e] (do
                                   (swap! input-state assoc-in [:inputs 0 :contents] (.-value (.-target e)))
                                   (.log js/console (get-in @input-state [:inputs 0 :contents]))))}]
   [:button.fullwidth {:type "button"
                       :on-click (fn [e]
                                     ;(.preventDefault e)
                                     ;(.stopPropagation e)
                                     (.log js/console "sending..")
                                     (let [new-post-map {:title (get-in @input-state [:inputs 0 :title])
                                                                                 :contents (get-in @input-state [:inputs 0 :contents])
                                                                                 :priority 10
                                                                                 :posted-by "x@nonforum.com"
                                                                                 :timestamp 80008
                                                                                 :parent nil}]
                                       (.log js/console new-post-map)

                                       (swap! tv-state update :tiles conj new-post-map))) ;thanks @Marc O'Morain
                       } "post new"]])

;; https://github.com/tonsky/grumpy/blob/master/src/grumpy/editor.cljc#L257
;; thank you, @tonsky
;; rum is awesome. 25 nov 2018

(rum/defc post-comment-input []
  [:form#postcommentinput
   [:textarea.fullwidth {:value (get-in @input-state [:inputs 0 :comment])
                         :place-holder "your comment"
                         :on-change (fn [e] (do
                                              (swap! input-state assoc-in [:inputs 0 :comment] (.-value (.-target e)))
                                              (.log js/console (get-in @input-state [:inputs 0 :comment]))))
                         }]
   [:button.fullwidth {:type "submit"} "post comment"]])


(rum/defc nf-login-input []
  [:form#nflogin
   [:input.fullwidth {:place-holder "username"}]
   [:input.fullwidth {:place-holder "password" :type "password"}]
   [:button.fullwidth {:type "submit"} "login"]])

(rum/defc input-fields []
  [:div#inputs-contain
   (post-input)
   (post-comment-input)
   (nf-login-input)])

(rum/defc start []
  [:div#maincontain
   (top-bar)
   (side-bar)
   (login-bar)
   (television)
   (hello-world)])

(rum/mount (start)
           (. js/document (getElementById "start")))

(rum/mount (input-fields)
           (. js/document (getElementById "inputs")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
