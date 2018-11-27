// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mount.tools.macro');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * To be used in macro definitions.
 * Handles optional docstrings and attribute maps for a name to be defined
 * in a list of macro arguments. If the first macro argument is a string,
 * it is added as a docstring to name and removed from the macro argument
 * list. If afterwards the first macro argument is a map, its entries are
 * added to the name's metadata map and the map is removed from the
 * macro argument list. The return value is a vector containing the name
 * with its extended metadata map and the list of unprocessed macro
 * arguments.
 */
mount.tools.macro.name_with_attributes = (function mount$tools$macro$name_with_attributes(name,macro_args){
var vec__4998 = ((typeof cljs.core.first(macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(macro_args),cljs.core.next(macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4998,(0),null);
var macro_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4998,(1),null);
var vec__5001 = ((cljs.core.map_QMARK_(cljs.core.first(macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(macro_args__$1),cljs.core.next(macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5001,(0),null);
var macro_args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5001,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr,cljs.core.cst$kw$doc,docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta(name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(name,attr__$2),macro_args__$2], null);
});
