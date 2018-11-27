(defproject uouforum "0.1.0-SNAPSHOT"
  :description "nonforum with tonsky/rum and yogthos/macchiato for javascript on client and server!"
  :url "http://www.nonforum.com"
  :dependencies [[bidi "2.1.3"]
                 [com.cemerick/piggieback "0.2.2"]
                 [com.taoensso/timbre "4.10.0"]
                 [macchiato/hiccups "0.4.1"]
                 [macchiato/core "0.2.14"]
                 [macchiato/env "0.0.6"]
                 [mount "0.1.12"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 ;; needed for JDK 9 compatibility
                 [javax.xml.bind/jaxb-api "2.3.0"]
                 [rum "0.11.2"]
                 [alandipert/storage-atom "1.2.4"]
                 [cljs-ajax "0.8.0"]]
  :min-lein-version "2.0.0"
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-doo "0.1.7"]
            [macchiato/lein-npm "0.6.4"]
            [lein-figwheel "0.5.16"]
            [lein-cljsbuild "1.1.5"]]
  :npm {:dependencies [[source-map-support "0.4.6"]]
        :write-package-json true}
  :source-paths ["src/server" "target/classes"]
  :target-path "target"
  :profiles
  {:server {:clean-targets ["target"]}
   :dev
   [:server
    {:npm {:package {:main "target/out/uouforum.js"
                     :scripts {:start "node target/out/uouforum.js"}}}
     :dependencies [[figwheel-sidecar "0.5.16"]]
     :cljsbuild
     {:builds {
              :dev
               {:source-paths ["env/dev" "src/server"]
                :figwheel     true
                :compiler     {:main          uouforum.app
                               :output-to     "target/out/uouforum.js"
                               :output-dir    "target/out"
                               :target        :nodejs
                               :optimizations :none
                               :pretty-print  true
                               :source-map    true
                               :source-map-timestamp false}}}}
     :figwheel
     {:http-server-root "public"
      :nrepl-port 7000
      :reload-clj-files {:clj true :cljc true}
      :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
     :source-paths ["env/dev"]
     :repl-options {:init-ns user}}]
   :client
   {:cljsbuild
    {:builds
     {:client
               {:source-paths ["src/client"]
                :figwheel true ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;newaddition;;;;;;;;;;;;;;;;;;;;;
                :compiler {:main uouforum.client
                           :output-to "public/js/client.js"
                           :output-dir "public/js/out"
                           :asset-path "js/"
                           :source-map-timestamp true
                           :optimizations :advanced}}}}}
   :test
   {:cljsbuild
    {:builds
     {:test
      {:source-paths ["env/test" "src/server" "test"]
       :compiler     {:main uouforum.app
                      :output-to     "target/test/uouforum.js"
                      :target        :nodejs
                      :optimizations :whitespace
                      :pretty-print  true
                      :source-map    true}}}}
    :doo {:build "test"}
    :dependencies [[pjstadig/humane-test-output "0.8.3"]]}
   :release
   {:npm {:package {:main "target/release/uouforum.js"
                    :scripts {:start "node target/release/uouforum.js"}}}
    :cljsbuild
    {:builds
     {:release
      {:source-paths ["env/prod" "src/server"]
       :compiler     {:main          uouforum.app
                      :output-to     "target/release/uouforum.js"
                      :language-in   :ecmascript5
                      :target        :nodejs
                      :optimizations :simple
                      :pretty-print  false}}
      }}}}
  :aliases
  {"build" ["do"
            ["clean"]
            ["npm" "install"]
            ["figwheel" "dev"]]
   "package" ["do"
              ["clean"]
              ["npm" "install"]
              ["with-profile" "release" "npm" "init" "-y"]
              ["with-profile" "release" "cljsbuild" "once" "release"]]
   "test" ["do"
           ["npm" "install"]
           ["with-profile" "test" "doo" "node"]]
   "client" ["do"
              ["with-profile" "client" "cljsbuild" "once" "client"]]})
