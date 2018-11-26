(ns uouforum.app
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [uouforum.core-test]))

(doo-tests 'uouforum.core-test)


