// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__23205 = arguments.length;
switch (G__23205) {
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
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__23206 = opts;
var map__23206__$1 = ((((!((map__23206 == null)))?(((((map__23206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23206):map__23206);
var ref = cljs.core.get.call(null,map__23206__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__23206__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__23208 = cljs.core.count.call(null,refs);
switch (G__23208) {
case (1):
var vec__23209 = refs;
var a = cljs.core.nth.call(null,vec__23209,(0),null);
return ((function (vec__23209,a,G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__23209,a,G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__23212 = refs;
var a = cljs.core.nth.call(null,vec__23212,(0),null);
var b = cljs.core.nth.call(null,vec__23212,(1),null);
return ((function (vec__23212,a,b,G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__23212,a,b,G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__23215 = refs;
var a = cljs.core.nth.call(null,vec__23215,(0),null);
var b = cljs.core.nth.call(null,vec__23215,(1),null);
var c = cljs.core.nth.call(null,vec__23215,(2),null);
return ((function (vec__23215,a,b,c,G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__23215,a,b,c,G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__23208,map__23206,map__23206__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__23218 = ref;
cljs.core.reset_BANG_.call(null,G__23218,recalc.call(null));

return G__23218;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__23206,map__23206__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__23206,map__23206__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__23206,map__23206__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__23206,map__23206__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__23219_23225 = cljs.core.seq.call(null,refs);
var chunk__23220_23226 = null;
var count__23221_23227 = (0);
var i__23222_23228 = (0);
while(true){
if((i__23222_23228 < count__23221_23227)){
var ref_23229__$1 = cljs.core._nth.call(null,chunk__23220_23226,i__23222_23228);
cljs.core.add_watch.call(null,ref_23229__$1,key,watch);


var G__23230 = seq__23219_23225;
var G__23231 = chunk__23220_23226;
var G__23232 = count__23221_23227;
var G__23233 = (i__23222_23228 + (1));
seq__23219_23225 = G__23230;
chunk__23220_23226 = G__23231;
count__23221_23227 = G__23232;
i__23222_23228 = G__23233;
continue;
} else {
var temp__5457__auto___23234 = cljs.core.seq.call(null,seq__23219_23225);
if(temp__5457__auto___23234){
var seq__23219_23235__$1 = temp__5457__auto___23234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23219_23235__$1)){
var c__4351__auto___23236 = cljs.core.chunk_first.call(null,seq__23219_23235__$1);
var G__23237 = cljs.core.chunk_rest.call(null,seq__23219_23235__$1);
var G__23238 = c__4351__auto___23236;
var G__23239 = cljs.core.count.call(null,c__4351__auto___23236);
var G__23240 = (0);
seq__23219_23225 = G__23237;
chunk__23220_23226 = G__23238;
count__23221_23227 = G__23239;
i__23222_23228 = G__23240;
continue;
} else {
var ref_23241__$1 = cljs.core.first.call(null,seq__23219_23235__$1);
cljs.core.add_watch.call(null,ref_23241__$1,key,watch);


var G__23242 = cljs.core.next.call(null,seq__23219_23235__$1);
var G__23243 = null;
var G__23244 = (0);
var G__23245 = (0);
seq__23219_23225 = G__23242;
chunk__23220_23226 = G__23243;
count__23221_23227 = G__23244;
i__23222_23228 = G__23245;
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


//# sourceMappingURL=derived_atom.js.map
