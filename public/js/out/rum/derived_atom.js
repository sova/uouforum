// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__2176 = arguments.length;
switch (G__2176) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__2177 = opts;
var map__2177__$1 = ((((!((map__2177 == null)))?(((((map__2177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2177):map__2177);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2177__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2177__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__2179 = cljs.core.count(refs);
switch (G__2179) {
case (1):
var vec__2180 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2180,(0),null);
return ((function (vec__2180,a,G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_){
return (function (){
var G__2183 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__2183) : f.call(null,G__2183));
});
;})(vec__2180,a,G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__2184 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2184,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2184,(1),null);
return ((function (vec__2184,a,b,G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_){
return (function (){
var G__2187 = cljs.core.deref(a);
var G__2188 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__2187,G__2188) : f.call(null,G__2187,G__2188));
});
;})(vec__2184,a,b,G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__2189 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2189,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2189,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2189,(2),null);
return ((function (vec__2189,a,b,c,G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_){
return (function (){
var G__2192 = cljs.core.deref(a);
var G__2193 = cljs.core.deref(b);
var G__2194 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__2192,G__2193,G__2194) : f.call(null,G__2192,G__2193,G__2194));
});
;})(vec__2189,a,b,c,G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__2179,map__2177,map__2177__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__2195 = ref;
cljs.core.reset_BANG_(G__2195,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__2195;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__2177,map__2177__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
});})(map__2177,map__2177__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__2177,map__2177__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
});})(map__2177,map__2177__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__2196_2202 = cljs.core.seq(refs);
var chunk__2197_2203 = null;
var count__2198_2204 = (0);
var i__2199_2205 = (0);
while(true){
if((i__2199_2205 < count__2198_2204)){
var ref_2206__$1 = chunk__2197_2203.cljs$core$IIndexed$_nth$arity$2(null,i__2199_2205);
cljs.core.add_watch(ref_2206__$1,key,watch);


var G__2207 = seq__2196_2202;
var G__2208 = chunk__2197_2203;
var G__2209 = count__2198_2204;
var G__2210 = (i__2199_2205 + (1));
seq__2196_2202 = G__2207;
chunk__2197_2203 = G__2208;
count__2198_2204 = G__2209;
i__2199_2205 = G__2210;
continue;
} else {
var temp__5457__auto___2211 = cljs.core.seq(seq__2196_2202);
if(temp__5457__auto___2211){
var seq__2196_2212__$1 = temp__5457__auto___2211;
if(cljs.core.chunked_seq_QMARK_(seq__2196_2212__$1)){
var c__4351__auto___2213 = cljs.core.chunk_first(seq__2196_2212__$1);
var G__2214 = cljs.core.chunk_rest(seq__2196_2212__$1);
var G__2215 = c__4351__auto___2213;
var G__2216 = cljs.core.count(c__4351__auto___2213);
var G__2217 = (0);
seq__2196_2202 = G__2214;
chunk__2197_2203 = G__2215;
count__2198_2204 = G__2216;
i__2199_2205 = G__2217;
continue;
} else {
var ref_2218__$1 = cljs.core.first(seq__2196_2212__$1);
cljs.core.add_watch(ref_2218__$1,key,watch);


var G__2219 = cljs.core.next(seq__2196_2212__$1);
var G__2220 = null;
var G__2221 = (0);
var G__2222 = (0);
seq__2196_2202 = G__2219;
chunk__2197_2203 = G__2220;
count__2198_2204 = G__2221;
i__2199_2205 = G__2222;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

