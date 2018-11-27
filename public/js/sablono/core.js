// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
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
var G__24955__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24952 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__24953 = cljs.core.seq.call(null,vec__24952);
var first__24954 = cljs.core.first.call(null,seq__24953);
var seq__24953__$1 = cljs.core.next.call(null,seq__24953);
var tag = first__24954;
var body = seq__24953__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24956__i = 0, G__24956__a = new Array(arguments.length -  0);
while (G__24956__i < G__24956__a.length) {G__24956__a[G__24956__i] = arguments[G__24956__i + 0]; ++G__24956__i;}
  args = new cljs.core.IndexedSeq(G__24956__a,0,null);
} 
return G__24955__delegate.call(this,args);};
G__24955.cljs$lang$maxFixedArity = 0;
G__24955.cljs$lang$applyTo = (function (arglist__24957){
var args = cljs.core.seq(arglist__24957);
return G__24955__delegate(args);
});
G__24955.cljs$core$IFn$_invoke$arity$variadic = G__24955__delegate;
return G__24955;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__24958(s__24959){
return (new cljs.core.LazySeq(null,(function (){
var s__24959__$1 = s__24959;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24959__$1);
if(temp__5457__auto__){
var s__24959__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24959__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24959__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24961 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24960 = (0);
while(true){
if((i__24960 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__24960);
cljs.core.chunk_append.call(null,b__24961,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24962 = (i__24960 + (1));
i__24960 = G__24962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24961),sablono$core$update_arglists_$_iter__24958.call(null,cljs.core.chunk_rest.call(null,s__24959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24961),null);
}
} else {
var args = cljs.core.first.call(null,s__24959__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24958.call(null,cljs.core.rest.call(null,s__24959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24968 = arguments.length;
var i__4532__auto___24969 = (0);
while(true){
if((i__4532__auto___24969 < len__4531__auto___24968)){
args__4534__auto__.push((arguments[i__4532__auto___24969]));

var G__24970 = (i__4532__auto___24969 + (1));
i__4532__auto___24969 = G__24970;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__24964(s__24965){
return (new cljs.core.LazySeq(null,(function (){
var s__24965__$1 = s__24965;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24965__$1);
if(temp__5457__auto__){
var s__24965__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24965__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24965__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24967 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24966 = (0);
while(true){
if((i__24966 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__24966);
cljs.core.chunk_append.call(null,b__24967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24971 = (i__24966 + (1));
i__24966 = G__24971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24967),sablono$core$iter__24964.call(null,cljs.core.chunk_rest.call(null,s__24965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24967),null);
}
} else {
var style = cljs.core.first.call(null,s__24965__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24964.call(null,cljs.core.rest.call(null,s__24965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq24963){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24963));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to24972 = (function sablono$core$link_to24972(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24975 = arguments.length;
var i__4532__auto___24976 = (0);
while(true){
if((i__4532__auto___24976 < len__4531__auto___24975)){
args__4534__auto__.push((arguments[i__4532__auto___24976]));

var G__24977 = (i__4532__auto___24976 + (1));
i__4532__auto___24976 = G__24977;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to24972.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to24972.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24972.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to24972.cljs$lang$applyTo = (function (seq24973){
var G__24974 = cljs.core.first.call(null,seq24973);
var seq24973__$1 = cljs.core.next.call(null,seq24973);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24974,seq24973__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24972);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24978 = (function sablono$core$mail_to24978(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24985 = arguments.length;
var i__4532__auto___24986 = (0);
while(true){
if((i__4532__auto___24986 < len__4531__auto___24985)){
args__4534__auto__.push((arguments[i__4532__auto___24986]));

var G__24987 = (i__4532__auto___24986 + (1));
i__4532__auto___24986 = G__24987;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to24978.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to24978.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24981){
var vec__24982 = p__24981;
var content = cljs.core.nth.call(null,vec__24982,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24978.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to24978.cljs$lang$applyTo = (function (seq24979){
var G__24980 = cljs.core.first.call(null,seq24979);
var seq24979__$1 = cljs.core.next.call(null,seq24979);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24980,seq24979__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24978);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24988 = (function sablono$core$unordered_list24988(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list24988_$_iter__24989(s__24990){
return (new cljs.core.LazySeq(null,(function (){
var s__24990__$1 = s__24990;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24990__$1);
if(temp__5457__auto__){
var s__24990__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24990__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24990__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24992 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24991 = (0);
while(true){
if((i__24991 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__24991);
cljs.core.chunk_append.call(null,b__24992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24993 = (i__24991 + (1));
i__24991 = G__24993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24992),sablono$core$unordered_list24988_$_iter__24989.call(null,cljs.core.chunk_rest.call(null,s__24990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24992),null);
}
} else {
var x = cljs.core.first.call(null,s__24990__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24988_$_iter__24989.call(null,cljs.core.rest.call(null,s__24990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24988);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24994 = (function sablono$core$ordered_list24994(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list24994_$_iter__24995(s__24996){
return (new cljs.core.LazySeq(null,(function (){
var s__24996__$1 = s__24996;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24996__$1);
if(temp__5457__auto__){
var s__24996__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24996__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__24996__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__24998 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__24997 = (0);
while(true){
if((i__24997 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__24997);
cljs.core.chunk_append.call(null,b__24998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24999 = (i__24997 + (1));
i__24997 = G__24999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24998),sablono$core$ordered_list24994_$_iter__24995.call(null,cljs.core.chunk_rest.call(null,s__24996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24998),null);
}
} else {
var x = cljs.core.first.call(null,s__24996__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24994_$_iter__24995.call(null,cljs.core.rest.call(null,s__24996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24994);
/**
 * Create an image element.
 */
sablono.core.image25000 = (function sablono$core$image25000(var_args){
var G__25002 = arguments.length;
switch (G__25002) {
case 1:
return sablono.core.image25000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image25000.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25000.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25000.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25000);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25004_SHARP_,p2__25005_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25004_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25005_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25006_SHARP_,p2__25007_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25006_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__25007_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__25009 = arguments.length;
switch (G__25009) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
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
sablono.core.color_field25011 = (function sablono$core$color_field25011(var_args){
var G__25013 = arguments.length;
switch (G__25013) {
case 1:
return sablono.core.color_field25011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field25011.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24942__auto__);
});

sablono.core.color_field25011.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.color_field25011.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25011);

/**
 * Creates a date input field.
 */
sablono.core.date_field25014 = (function sablono$core$date_field25014(var_args){
var G__25016 = arguments.length;
switch (G__25016) {
case 1:
return sablono.core.date_field25014.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field25014.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24942__auto__);
});

sablono.core.date_field25014.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.date_field25014.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25014);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25017 = (function sablono$core$datetime_field25017(var_args){
var G__25019 = arguments.length;
switch (G__25019) {
case 1:
return sablono.core.datetime_field25017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field25017.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24942__auto__);
});

sablono.core.datetime_field25017.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.datetime_field25017.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25017);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25020 = (function sablono$core$datetime_local_field25020(var_args){
var G__25022 = arguments.length;
switch (G__25022) {
case 1:
return sablono.core.datetime_local_field25020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field25020.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24942__auto__);
});

sablono.core.datetime_local_field25020.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.datetime_local_field25020.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25020);

/**
 * Creates a email input field.
 */
sablono.core.email_field25023 = (function sablono$core$email_field25023(var_args){
var G__25025 = arguments.length;
switch (G__25025) {
case 1:
return sablono.core.email_field25023.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25023.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field25023.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24942__auto__);
});

sablono.core.email_field25023.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.email_field25023.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25023);

/**
 * Creates a file input field.
 */
sablono.core.file_field25026 = (function sablono$core$file_field25026(var_args){
var G__25028 = arguments.length;
switch (G__25028) {
case 1:
return sablono.core.file_field25026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field25026.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24942__auto__);
});

sablono.core.file_field25026.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.file_field25026.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25026);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25029 = (function sablono$core$hidden_field25029(var_args){
var G__25031 = arguments.length;
switch (G__25031) {
case 1:
return sablono.core.hidden_field25029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field25029.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24942__auto__);
});

sablono.core.hidden_field25029.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.hidden_field25029.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25029);

/**
 * Creates a month input field.
 */
sablono.core.month_field25032 = (function sablono$core$month_field25032(var_args){
var G__25034 = arguments.length;
switch (G__25034) {
case 1:
return sablono.core.month_field25032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field25032.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24942__auto__);
});

sablono.core.month_field25032.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.month_field25032.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25032);

/**
 * Creates a number input field.
 */
sablono.core.number_field25035 = (function sablono$core$number_field25035(var_args){
var G__25037 = arguments.length;
switch (G__25037) {
case 1:
return sablono.core.number_field25035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field25035.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24942__auto__);
});

sablono.core.number_field25035.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.number_field25035.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25035);

/**
 * Creates a password input field.
 */
sablono.core.password_field25038 = (function sablono$core$password_field25038(var_args){
var G__25040 = arguments.length;
switch (G__25040) {
case 1:
return sablono.core.password_field25038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field25038.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24942__auto__);
});

sablono.core.password_field25038.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.password_field25038.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25038);

/**
 * Creates a range input field.
 */
sablono.core.range_field25041 = (function sablono$core$range_field25041(var_args){
var G__25043 = arguments.length;
switch (G__25043) {
case 1:
return sablono.core.range_field25041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field25041.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24942__auto__);
});

sablono.core.range_field25041.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.range_field25041.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25041);

/**
 * Creates a search input field.
 */
sablono.core.search_field25044 = (function sablono$core$search_field25044(var_args){
var G__25046 = arguments.length;
switch (G__25046) {
case 1:
return sablono.core.search_field25044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field25044.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24942__auto__);
});

sablono.core.search_field25044.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.search_field25044.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25044);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25047 = (function sablono$core$tel_field25047(var_args){
var G__25049 = arguments.length;
switch (G__25049) {
case 1:
return sablono.core.tel_field25047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field25047.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24942__auto__);
});

sablono.core.tel_field25047.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.tel_field25047.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25047);

/**
 * Creates a text input field.
 */
sablono.core.text_field25050 = (function sablono$core$text_field25050(var_args){
var G__25052 = arguments.length;
switch (G__25052) {
case 1:
return sablono.core.text_field25050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field25050.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24942__auto__);
});

sablono.core.text_field25050.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.text_field25050.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25050);

/**
 * Creates a time input field.
 */
sablono.core.time_field25053 = (function sablono$core$time_field25053(var_args){
var G__25055 = arguments.length;
switch (G__25055) {
case 1:
return sablono.core.time_field25053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field25053.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24942__auto__);
});

sablono.core.time_field25053.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.time_field25053.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25053);

/**
 * Creates a url input field.
 */
sablono.core.url_field25056 = (function sablono$core$url_field25056(var_args){
var G__25058 = arguments.length;
switch (G__25058) {
case 1:
return sablono.core.url_field25056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field25056.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24942__auto__);
});

sablono.core.url_field25056.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.url_field25056.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25056);

/**
 * Creates a week input field.
 */
sablono.core.week_field25059 = (function sablono$core$week_field25059(var_args){
var G__25061 = arguments.length;
switch (G__25061) {
case 1:
return sablono.core.week_field25059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field25059.cljs$core$IFn$_invoke$arity$1 = (function (name__24942__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24942__auto__);
});

sablono.core.week_field25059.cljs$core$IFn$_invoke$arity$2 = (function (name__24942__auto__,value__24943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24942__auto__,value__24943__auto__);
});

sablono.core.week_field25059.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25059);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25079 = (function sablono$core$check_box25079(var_args){
var G__25081 = arguments.length;
switch (G__25081) {
case 1:
return sablono.core.check_box25079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25079.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box25079.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box25079.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25079.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25079.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25079);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25083 = (function sablono$core$radio_button25083(var_args){
var G__25085 = arguments.length;
switch (G__25085) {
case 1:
return sablono.core.radio_button25083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25083.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button25083.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button25083.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25083.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25083.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25083);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25087 = (function sablono$core$select_options25087(coll){
var iter__4324__auto__ = (function sablono$core$select_options25087_$_iter__25088(s__25089){
return (new cljs.core.LazySeq(null,(function (){
var s__25089__$1 = s__25089;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__25089__$1);
if(temp__5457__auto__){
var s__25089__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25089__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__25089__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__25091 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__25090 = (0);
while(true){
if((i__25090 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__25090);
cljs.core.chunk_append.call(null,b__25091,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25092 = x;
var text = cljs.core.nth.call(null,vec__25092,(0),null);
var val = cljs.core.nth.call(null,vec__25092,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25092,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25087.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25098 = (i__25090 + (1));
i__25090 = G__25098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25091),sablono$core$select_options25087_$_iter__25088.call(null,cljs.core.chunk_rest.call(null,s__25089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25091),null);
}
} else {
var x = cljs.core.first.call(null,s__25089__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25095 = x;
var text = cljs.core.nth.call(null,vec__25095,(0),null);
var val = cljs.core.nth.call(null,vec__25095,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25095,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options25087.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25087_$_iter__25088.call(null,cljs.core.rest.call(null,s__25089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25087);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25099 = (function sablono$core$drop_down25099(var_args){
var G__25101 = arguments.length;
switch (G__25101) {
case 2:
return sablono.core.drop_down25099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25099.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down25099.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25099.call(null,name,options,null);
});

sablono.core.drop_down25099.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25099.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25099);
/**
 * Creates a text area element.
 */
sablono.core.text_area25103 = (function sablono$core$text_area25103(var_args){
var G__25105 = arguments.length;
switch (G__25105) {
case 1:
return sablono.core.text_area25103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area25103.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area25103.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25103.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25103);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25107 = (function sablono$core$label25107(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25107);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25108 = (function sablono$core$submit_button25108(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25108);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25109 = (function sablono$core$reset_button25109(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25109);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25110 = (function sablono$core$form_to25110(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25117 = arguments.length;
var i__4532__auto___25118 = (0);
while(true){
if((i__4532__auto___25118 < len__4531__auto___25117)){
args__4534__auto__.push((arguments[i__4532__auto___25118]));

var G__25119 = (i__4532__auto___25118 + (1));
i__4532__auto___25118 = G__25119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25110.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to25110.cljs$core$IFn$_invoke$arity$variadic = (function (p__25113,body){
var vec__25114 = p__25113;
var method = cljs.core.nth.call(null,vec__25114,(0),null);
var action = cljs.core.nth.call(null,vec__25114,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25110.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to25110.cljs$lang$applyTo = (function (seq25111){
var G__25112 = cljs.core.first.call(null,seq25111);
var seq25111__$1 = cljs.core.next.call(null,seq25111);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25112,seq25111__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25110);

//# sourceMappingURL=core.js.map
