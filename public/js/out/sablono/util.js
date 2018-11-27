// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if(((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null))))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (sablono.util.to_str[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if(((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null))))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (sablono.util.to_uri[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2302 = arguments.length;
var i__4532__auto___2303 = (0);
while(true){
if((i__4532__auto___2303 < len__4531__auto___2302)){
args__4534__auto__.push((arguments[i__4532__auto___2303]));

var G__2304 = (i__4532__auto___2303 + (1));
i__4532__auto___2303 = G__2304;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.util.as_str.cljs$lang$applyTo = (function (seq2301){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2301));
});

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__2305 = cljs.core.name(k).split("-");
var seq__2306 = cljs.core.seq(vec__2305);
var first__2307 = cljs.core.first(seq__2306);
var seq__2306__$1 = cljs.core.next(seq__2306);
var first_word = first__2307;
var words = seq__2306__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__2308){
var vec__2309 = p__2308;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.util.camel_case(k),v], null);
})),m);
var G__2312 = m__$1;
if(cljs.core.map_QMARK_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__2312,cljs.core.cst$kw$style,sablono.util.camel_case_keys);
} else {
return G__2312;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq(x);
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),classes));
});
/**
 * Return the symbol of a fn that build a React element. 
 */
sablono.util.react_fn = (function sablono$util$react_fn(type){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$input,null,cljs.core.cst$kw$select,null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$sym$sablono$interpreter_SLASH_create_DASH_element;
} else {
return cljs.core.cst$sym$js_SLASH_React$createElement;
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__3949__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath()))));
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
var base = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(cljs.core.count(base) - (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
}
}
});

goog.object.set(sablono.util.ToString,"null",true);

var G__2313_2322 = sablono.util.to_str;
var G__2314_2323 = "null";
var G__2315_2324 = ((function (G__2313_2322,G__2314_2323){
return (function (_){
return "";
});})(G__2313_2322,G__2314_2323))
;
goog.object.set(G__2313_2322,G__2314_2323,G__2315_2324);

goog.object.set(sablono.util.ToString,"number",true);

var G__2316_2325 = sablono.util.to_str;
var G__2317_2326 = "number";
var G__2318_2327 = ((function (G__2316_2325,G__2317_2326){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
});})(G__2316_2325,G__2317_2326))
;
goog.object.set(G__2316_2325,G__2317_2326,G__2318_2327);

goog.object.set(sablono.util.ToString,"_",true);

var G__2319_2328 = sablono.util.to_str;
var G__2320_2329 = "_";
var G__2321_2330 = ((function (G__2319_2328,G__2320_2329){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
});})(G__2319_2328,G__2320_2329))
;
goog.object.set(G__2319_2328,G__2320_2329,G__2321_2330);
goog.Uri.prototype.sablono$util$ToURI$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

goog.object.set(sablono.util.ToURI,"_",true);

var G__2331_2334 = sablono.util.to_uri;
var G__2332_2335 = "_";
var G__2333_2336 = ((function (G__2331_2334,G__2332_2335){
return (function (x){
return (new goog.Uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
});})(G__2331_2334,G__2332_2335))
;
goog.object.set(G__2331_2334,G__2332_2335,G__2333_2336);
