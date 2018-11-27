(ns uouforum.routes
  (:require
    [bidi.bidi :as bidi]
    [hiccups.runtime]
    [macchiato.util.response :as r])
  (:require-macros
    [hiccups.core :refer [html]]))

(defn home [req res raise]
  (-> (html
        [:html
         [:head
          [:link {:rel "stylesheet" :href "/css/site.css"}]
          ]
         [:body
          [:h2 "Huzzah Nonforum!"]
          [:p
           "Your user-agent is: "
           (str (get-in req [:headers "user-agent"]))]
          [:div#inputs]
          [:div#start]]
         [:script {:src "js/client.js" :type "text/javascript"}]
         ;[:script {:src "js/goog/base.js" :type "text/javascript"}]
         ])
      (r/ok)
      (r/content-type "text/html")
      (res)))

(defn top [req res raise]
  (-> (html
        [:html
         [:head
          [:link {:rel "stylesheet" :href "/css/site.css"}]
          ]
         [:body
          [:h2 "Nonforum TOP"]
          [:p
           "Your user-agent is: "
           (str (get-in req [:headers "user-agent"]))]]])
      (r/ok)
      (r/content-type "text/html")
      (res)))

(defn latest [req res raise]
  (-> (html
        [:html
         [:head
          [:link {:rel "stylesheet" :href "/css/site.css"}]
          ]
         [:body
          [:h2 "Nonforum LATEST"]
          [:p
           "Your user-agent is: "
           (str (get-in req [:headers "user-agent"]))]]])
      (r/ok)
      (r/content-type "text/html")
      (res)))

(defn not-found [req res raise]
  (-> (html
        [:html
         [:body
          [:h2 (:uri req) " was not found"]]])
      (r/not-found)
      (r/content-type "text/html")
      (res)))

(def routes
  ["/" {:get home
        "top" {:get top}
        "latest" {:get latest}}])

(defn router [req res raise]
  (if-let [{:keys [handler route-params]} (bidi/match-route* routes (:uri req) req)]
    (handler (assoc req :route-params route-params) res raise)
    (not-found req res raise)))
