// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
if(cljs.core.truth_(m)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__2339){
var vec__2340 = p__2339;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2340,(1),null);
return cljs.core.empty_QMARK_(v);
})),m);
} else {
return null;
}
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
sablono.normalize.map_lookup_QMARK_ = (function sablono$normalize$map_lookup_QMARK_(x){
return ((cljs.core.list_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$){
if((class$ == null)){
return null;
} else {
if(cljs.core.truth_(sablono.normalize.map_lookup_QMARK_(class$))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_(class$)){
if((cljs.core.first(class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name(class$)], null);
} else {
if(((((cljs.core.set_QMARK_(class$)) || (cljs.core.sequential_QMARK_(class$)))) && (cljs.core.every_QMARK_((function (p1__2343_SHARP_){
return (((p1__2343_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__2343_SHARP_ === 'string'));
}),class$)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$);
} else {
if(((cljs.core.set_QMARK_(class$)) || (cljs.core.sequential_QMARK_(class$)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__2344 = attrs;
if(cljs.core.truth_(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__2344,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class], null),sablono.normalize.class$);
} else {
return G__2344;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2347 = arguments.length;
var i__4532__auto___2348 = (0);
while(true){
if((i__4532__auto___2348 < len__4531__auto___2347)){
args__4534__auto__.push((arguments[i__4532__auto___2348]));

var G__2349 = (i__4532__auto___2348 + (1));
i__4532__auto___2348 = G__2349;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.attributes,maps);
var classes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$class,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps__$1], 0));
if(cljs.core.seq(maps__$1)){
var G__2346 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if(!(cljs.core.empty_QMARK_(classes))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__2346,cljs.core.cst$kw$class,cljs.core.vec(classes));
} else {
return G__2346;
}
} else {
return null;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq2345){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2345));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));
var vec__2352 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,s], null))})():(cljs.core.truth_((function (){var G__2356 = cljs.core.ffirst(matches);
var fexpr__2355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null);
return (fexpr__2355.cljs$core$IFn$_invoke$arity$1 ? fexpr__2355.cljs$core$IFn$_invoke$arity$1(G__2356) : fexpr__2355.call(null,G__2356));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2352,(0),null);
var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2352,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,sablono.normalize.strip_css(cljs.core.some(((function (matches,vec__2352,tag_name,names){
return (function (p1__2350_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__2350_SHARP_))){
return p1__2350_SHARP_;
} else {
return null;
}
});})(matches,vec__2352,tag_name,names))
,names)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (matches,vec__2352,tag_name,names){
return (function (p1__2351_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__2351_SHARP_));
});})(matches,vec__2352,tag_name,names))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.normalize.strip_css)),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):(cljs.core.truth_(sablono.util.element_QMARK_(x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_(x))?x:((((cljs.core.sequential_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(x))) && (!(typeof cljs.core.first(x) === 'string')) && (cljs.core.not(sablono.util.element_QMARK_(cljs.core.first(x))))))?(function (){var G__2357 = cljs.core.first(x);
return (sablono.normalize.children.cljs$core$IFn$_invoke$arity$1 ? sablono.normalize.children.cljs$core$IFn$_invoke$arity$1(G__2357) : sablono.normalize.children.call(null,G__2357));
})():((cljs.core.sequential_QMARK_(x))?x:(new cljs.core.List(null,x,null,(1),null))
))))))));
});
/**
 * Returns true if `x` are the attributes of an HTML element,
 *   otherwise false.
 */
sablono.normalize.attrs_QMARK_ = (function sablono$normalize$attrs_QMARK_(x){
return cljs.core.map_QMARK_(x);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__2358){
var vec__2359 = p__2358;
var seq__2360 = cljs.core.seq(vec__2359);
var first__2361 = cljs.core.first(seq__2360);
var seq__2360__$1 = cljs.core.next(seq__2360);
var tag = first__2361;
var content = seq__2360__$1;
if((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$content,content], null));
}

var vec__2362 = sablono.normalize.match_tag(tag);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2362,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2362,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2362,(2),null);
var tag_attrs = sablono.normalize.compact_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$class,class$], null));
var map_attrs = cljs.core.first(content);
if(cljs.core.truth_(sablono.normalize.attrs_QMARK_(map_attrs))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,map_attrs], 0)),sablono.normalize.children(cljs.core.next(content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes(tag_attrs),sablono.normalize.children(content)], null);
}
});
