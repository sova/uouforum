// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__4077__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__4074 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__4075 = cljs.core.seq(vec__4074);
var first__4076 = cljs.core.first(seq__4075);
var seq__4075__$1 = cljs.core.next(seq__4075);
var tag = first__4076;
var body = seq__4075__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__4077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4078__i = 0, G__4078__a = new Array(arguments.length -  0);
while (G__4078__i < G__4078__a.length) {G__4078__a[G__4078__i] = arguments[G__4078__i + 0]; ++G__4078__i;}
  args = new cljs.core.IndexedSeq(G__4078__a,0,null);
} 
return G__4077__delegate.call(this,args);};
G__4077.cljs$lang$maxFixedArity = 0;
G__4077.cljs$lang$applyTo = (function (arglist__4079){
var args = cljs.core.seq(arglist__4079);
return G__4077__delegate(args);
});
G__4077.cljs$core$IFn$_invoke$arity$variadic = G__4077__delegate;
return G__4077;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__4080(s__4081){
return (new cljs.core.LazySeq(null,(function (){
var s__4081__$1 = s__4081;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4081__$1);
if(temp__5457__auto__){
var s__4081__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4081__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4081__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4083 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4082 = (0);
while(true){
if((i__4082 < size__4323__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4082);
cljs.core.chunk_append(b__4083,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__4084 = (i__4082 + (1));
i__4082 = G__4084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4083),sablono$core$update_arglists_$_iter__4080(cljs.core.chunk_rest(s__4081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4083),null);
}
} else {
var args = cljs.core.first(s__4081__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__4080(cljs.core.rest(s__4081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4090 = arguments.length;
var i__4532__auto___4091 = (0);
while(true){
if((i__4532__auto___4091 < len__4531__auto___4090)){
args__4534__auto__.push((arguments[i__4532__auto___4091]));

var G__4092 = (i__4532__auto___4091 + (1));
i__4532__auto___4091 = G__4092;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__4086(s__4087){
return (new cljs.core.LazySeq(null,(function (){
var s__4087__$1 = s__4087;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4087__$1);
if(temp__5457__auto__){
var s__4087__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4087__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4087__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4089 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4088 = (0);
while(true){
if((i__4088 < size__4323__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4088);
cljs.core.chunk_append(b__4089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__4093 = (i__4088 + (1));
i__4088 = G__4093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4089),sablono$core$iter__4086(cljs.core.chunk_rest(s__4087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4089),null);
}
} else {
var style = cljs.core.first(s__4087__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__4086(cljs.core.rest(s__4087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq4085){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq4085));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__4094 = goog.dom.getDocument().body;
var G__4095 = (function (){var G__4096 = "script";
var G__4097 = ({"src": src});
return goog.dom.createDom(G__4096,G__4097);
})();
return goog.dom.appendChild(G__4094,G__4095);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to4098 = (function sablono$core$link_to4098(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4101 = arguments.length;
var i__4532__auto___4102 = (0);
while(true){
if((i__4532__auto___4102 < len__4531__auto___4101)){
args__4534__auto__.push((arguments[i__4532__auto___4102]));

var G__4103 = (i__4532__auto___4102 + (1));
i__4532__auto___4102 = G__4103;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to4098.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to4098.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to4098.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to4098.cljs$lang$applyTo = (function (seq4099){
var G__4100 = cljs.core.first(seq4099);
var seq4099__$1 = cljs.core.next(seq4099);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4100,seq4099__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to4098);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to4104 = (function sablono$core$mail_to4104(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4111 = arguments.length;
var i__4532__auto___4112 = (0);
while(true){
if((i__4532__auto___4112 < len__4531__auto___4111)){
args__4534__auto__.push((arguments[i__4532__auto___4112]));

var G__4113 = (i__4532__auto___4112 + (1));
i__4532__auto___4112 = G__4113;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to4104.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to4104.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__4107){
var vec__4108 = p__4107;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4108,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to4104.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to4104.cljs$lang$applyTo = (function (seq4105){
var G__4106 = cljs.core.first(seq4105);
var seq4105__$1 = cljs.core.next(seq4105);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4106,seq4105__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to4104);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list4114 = (function sablono$core$unordered_list4114(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4324__auto__ = (function sablono$core$unordered_list4114_$_iter__4115(s__4116){
return (new cljs.core.LazySeq(null,(function (){
var s__4116__$1 = s__4116;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4116__$1);
if(temp__5457__auto__){
var s__4116__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4116__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4116__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4118 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4117 = (0);
while(true){
if((i__4117 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4117);
cljs.core.chunk_append(b__4118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__4119 = (i__4117 + (1));
i__4117 = G__4119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4118),sablono$core$unordered_list4114_$_iter__4115(cljs.core.chunk_rest(s__4116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4118),null);
}
} else {
var x = cljs.core.first(s__4116__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list4114_$_iter__4115(cljs.core.rest(s__4116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list4114);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list4120 = (function sablono$core$ordered_list4120(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4324__auto__ = (function sablono$core$ordered_list4120_$_iter__4121(s__4122){
return (new cljs.core.LazySeq(null,(function (){
var s__4122__$1 = s__4122;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4122__$1);
if(temp__5457__auto__){
var s__4122__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4122__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4122__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4124 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4123 = (0);
while(true){
if((i__4123 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4123);
cljs.core.chunk_append(b__4124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__4125 = (i__4123 + (1));
i__4123 = G__4125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4124),sablono$core$ordered_list4120_$_iter__4121(cljs.core.chunk_rest(s__4122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4124),null);
}
} else {
var x = cljs.core.first(s__4122__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list4120_$_iter__4121(cljs.core.rest(s__4122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list4120);
/**
 * Create an image element.
 */
sablono.core.image4126 = (function sablono$core$image4126(var_args){
var G__4128 = arguments.length;
switch (G__4128) {
case 1:
return sablono.core.image4126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image4126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image4126.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image4126.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image4126.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image4126);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__4130_SHARP_,p2__4131_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4130_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__4131_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__4132_SHARP_,p2__4133_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4132_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__4133_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__4135 = arguments.length;
switch (G__4135) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field4137 = (function sablono$core$color_field4137(var_args){
var G__4139 = arguments.length;
switch (G__4139) {
case 1:
return sablono.core.color_field4137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field4137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field4137.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__4064__auto__);
});

sablono.core.color_field4137.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.color_field4137.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field4137);

/**
 * Creates a date input field.
 */
sablono.core.date_field4140 = (function sablono$core$date_field4140(var_args){
var G__4142 = arguments.length;
switch (G__4142) {
case 1:
return sablono.core.date_field4140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field4140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field4140.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__4064__auto__);
});

sablono.core.date_field4140.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.date_field4140.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field4140);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field4143 = (function sablono$core$datetime_field4143(var_args){
var G__4145 = arguments.length;
switch (G__4145) {
case 1:
return sablono.core.datetime_field4143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field4143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field4143.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__4064__auto__);
});

sablono.core.datetime_field4143.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.datetime_field4143.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field4143);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field4146 = (function sablono$core$datetime_local_field4146(var_args){
var G__4148 = arguments.length;
switch (G__4148) {
case 1:
return sablono.core.datetime_local_field4146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field4146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field4146.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__4064__auto__);
});

sablono.core.datetime_local_field4146.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.datetime_local_field4146.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field4146);

/**
 * Creates a email input field.
 */
sablono.core.email_field4149 = (function sablono$core$email_field4149(var_args){
var G__4151 = arguments.length;
switch (G__4151) {
case 1:
return sablono.core.email_field4149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field4149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field4149.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__4064__auto__);
});

sablono.core.email_field4149.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.email_field4149.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field4149);

/**
 * Creates a file input field.
 */
sablono.core.file_field4152 = (function sablono$core$file_field4152(var_args){
var G__4154 = arguments.length;
switch (G__4154) {
case 1:
return sablono.core.file_field4152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field4152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field4152.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__4064__auto__);
});

sablono.core.file_field4152.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.file_field4152.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field4152);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field4155 = (function sablono$core$hidden_field4155(var_args){
var G__4157 = arguments.length;
switch (G__4157) {
case 1:
return sablono.core.hidden_field4155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field4155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field4155.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__4064__auto__);
});

sablono.core.hidden_field4155.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.hidden_field4155.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field4155);

/**
 * Creates a month input field.
 */
sablono.core.month_field4158 = (function sablono$core$month_field4158(var_args){
var G__4160 = arguments.length;
switch (G__4160) {
case 1:
return sablono.core.month_field4158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field4158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field4158.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__4064__auto__);
});

sablono.core.month_field4158.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.month_field4158.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field4158);

/**
 * Creates a number input field.
 */
sablono.core.number_field4161 = (function sablono$core$number_field4161(var_args){
var G__4163 = arguments.length;
switch (G__4163) {
case 1:
return sablono.core.number_field4161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field4161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field4161.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__4064__auto__);
});

sablono.core.number_field4161.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.number_field4161.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field4161);

/**
 * Creates a password input field.
 */
sablono.core.password_field4164 = (function sablono$core$password_field4164(var_args){
var G__4166 = arguments.length;
switch (G__4166) {
case 1:
return sablono.core.password_field4164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field4164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field4164.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__4064__auto__);
});

sablono.core.password_field4164.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.password_field4164.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field4164);

/**
 * Creates a range input field.
 */
sablono.core.range_field4167 = (function sablono$core$range_field4167(var_args){
var G__4169 = arguments.length;
switch (G__4169) {
case 1:
return sablono.core.range_field4167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field4167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field4167.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__4064__auto__);
});

sablono.core.range_field4167.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.range_field4167.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field4167);

/**
 * Creates a search input field.
 */
sablono.core.search_field4170 = (function sablono$core$search_field4170(var_args){
var G__4172 = arguments.length;
switch (G__4172) {
case 1:
return sablono.core.search_field4170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field4170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field4170.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__4064__auto__);
});

sablono.core.search_field4170.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.search_field4170.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field4170);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field4173 = (function sablono$core$tel_field4173(var_args){
var G__4175 = arguments.length;
switch (G__4175) {
case 1:
return sablono.core.tel_field4173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field4173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field4173.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__4064__auto__);
});

sablono.core.tel_field4173.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.tel_field4173.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field4173);

/**
 * Creates a text input field.
 */
sablono.core.text_field4176 = (function sablono$core$text_field4176(var_args){
var G__4178 = arguments.length;
switch (G__4178) {
case 1:
return sablono.core.text_field4176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field4176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field4176.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__4064__auto__);
});

sablono.core.text_field4176.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.text_field4176.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field4176);

/**
 * Creates a time input field.
 */
sablono.core.time_field4179 = (function sablono$core$time_field4179(var_args){
var G__4181 = arguments.length;
switch (G__4181) {
case 1:
return sablono.core.time_field4179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field4179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field4179.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__4064__auto__);
});

sablono.core.time_field4179.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.time_field4179.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field4179);

/**
 * Creates a url input field.
 */
sablono.core.url_field4182 = (function sablono$core$url_field4182(var_args){
var G__4184 = arguments.length;
switch (G__4184) {
case 1:
return sablono.core.url_field4182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field4182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field4182.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__4064__auto__);
});

sablono.core.url_field4182.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.url_field4182.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field4182);

/**
 * Creates a week input field.
 */
sablono.core.week_field4185 = (function sablono$core$week_field4185(var_args){
var G__4187 = arguments.length;
switch (G__4187) {
case 1:
return sablono.core.week_field4185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field4185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field4185.cljs$core$IFn$_invoke$arity$1 = (function (name__4064__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__4064__auto__);
});

sablono.core.week_field4185.cljs$core$IFn$_invoke$arity$2 = (function (name__4064__auto__,value__4065__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__4064__auto__,value__4065__auto__);
});

sablono.core.week_field4185.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field4185);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box4205 = (function sablono$core$check_box4205(var_args){
var G__4207 = arguments.length;
switch (G__4207) {
case 1:
return sablono.core.check_box4205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box4205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box4205.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box4205.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box4205.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box4205.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box4205.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box4205);
/**
 * Creates a radio button.
 */
sablono.core.radio_button4209 = (function sablono$core$radio_button4209(var_args){
var G__4211 = arguments.length;
switch (G__4211) {
case 1:
return sablono.core.radio_button4209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button4209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button4209.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button4209.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button4209.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button4209.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button4209.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button4209);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__4213 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__4213);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options4214 = (function sablono$core$select_options4214(coll){
var iter__4324__auto__ = (function sablono$core$select_options4214_$_iter__4215(s__4216){
return (new cljs.core.LazySeq(null,(function (){
var s__4216__$1 = s__4216;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__4216__$1);
if(temp__5457__auto__){
var s__4216__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4216__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__4216__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__4218 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__4217 = (0);
while(true){
if((i__4217 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__4217);
cljs.core.chunk_append(b__4218,((cljs.core.sequential_QMARK_(x))?(function (){var vec__4219 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4219,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4219,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4219,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options4214.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options4214.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options4214.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__4225 = (i__4217 + (1));
i__4217 = G__4225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4218),sablono$core$select_options4214_$_iter__4215(cljs.core.chunk_rest(s__4216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4218),null);
}
} else {
var x = cljs.core.first(s__4216__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__4222 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4222,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4222,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4222,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options4214.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options4214.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options4214.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options4214_$_iter__4215(cljs.core.rest(s__4216__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options4214);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down4226 = (function sablono$core$drop_down4226(var_args){
var G__4228 = arguments.length;
switch (G__4228) {
case 2:
return sablono.core.drop_down4226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down4226.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down4226.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down4226.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down4226.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down4226.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down4226);
/**
 * Creates a text area element.
 */
sablono.core.text_area4230 = (function sablono$core$text_area4230(var_args){
var G__4232 = arguments.length;
switch (G__4232) {
case 1:
return sablono.core.text_area4230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area4230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area4230.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area4230.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area4230.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area4230);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label4234 = (function sablono$core$label4234(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label4234);
/**
 * Creates a submit button.
 */
sablono.core.submit_button4235 = (function sablono$core$submit_button4235(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button4235);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button4236 = (function sablono$core$reset_button4236(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button4236);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to4237 = (function sablono$core$form_to4237(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4247 = arguments.length;
var i__4532__auto___4248 = (0);
while(true){
if((i__4532__auto___4248 < len__4531__auto___4247)){
args__4534__auto__.push((arguments[i__4532__auto___4248]));

var G__4249 = (i__4532__auto___4248 + (1));
i__4532__auto___4248 = G__4249;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to4237.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to4237.cljs$core$IFn$_invoke$arity$variadic = (function (p__4240,body){
var vec__4241 = p__4240;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4241,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4241,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__4244 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__4245 = "_method";
var G__4246 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__4244,G__4245,G__4246) : sablono.core.hidden_field.call(null,G__4244,G__4245,G__4246));
})()], null)),body));
});

sablono.core.form_to4237.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to4237.cljs$lang$applyTo = (function (seq4238){
var G__4239 = cljs.core.first(seq4238);
var seq4238__$1 = cljs.core.next(seq4238);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4239,seq4238__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to4237);
