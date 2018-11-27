// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mount.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('mount.tools.macro');
goog.require('clojure.set');
goog.require('mount.tools.logger');
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core._args !== 'undefined')){
} else {
mount.core._args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.state_seq !== 'undefined')){
} else {
mount.core.state_seq = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.mode !== 'undefined')){
} else {
mount.core.mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$clj);
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.meta_state !== 'undefined')){
} else {
mount.core.meta_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof mount !== 'undefined') && (typeof mount.core !== 'undefined') && (typeof mount.core.running !== 'undefined')){
} else {
mount.core.running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
mount.core.make_state_seq = (function mount$core$make_state_seq(state){
var or__3949__auto__ = cljs.core.cst$kw$order.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__5346 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5346.cljs$core$IFn$_invoke$arity$1 ? fexpr__5346.cljs$core$IFn$_invoke$arity$1(state) : fexpr__5346.call(null,state));
})());
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mount.core.state_seq,cljs.core.inc);
}
});

/**
* @constructor
 * @implements {mount.core.Object}
*/
mount.core.NotStartedState = (function (state){
this.state = state;
});
mount.core.NotStartedState.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.state),"' is not started (to start all the states call mount/start)"].join('');
});

mount.core.NotStartedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state], null);
});

mount.core.NotStartedState.cljs$lang$type = true;

mount.core.NotStartedState.cljs$lang$ctorStr = "mount.core/NotStartedState";

mount.core.NotStartedState.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"mount.core/NotStartedState");
});

/**
 * Positional factory function for mount.core/NotStartedState.
 */
mount.core.__GT_NotStartedState = (function mount$core$__GT_NotStartedState(state){
return (new mount.core.NotStartedState(state));
});

mount.core.validate = (function mount$core$validate(p__5347){
var map__5348 = p__5347;
var map__5348__$1 = ((((!((map__5348 == null)))?(((((map__5348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5348):map__5348);
var lifecycle = map__5348__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5348__$1,cljs.core.cst$kw$start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5348__$1,cljs.core.cst$kw$stop);
var suspend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5348__$1,cljs.core.cst$kw$suspend);
var resume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5348__$1,cljs.core.cst$kw$resume);
if(cljs.core.not(start)){
throw ["can't start a stateful thing without a start function. (i.e. missing :start fn)"].join('');
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = suspend;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return resume;
}
})())){
throw ["suspend / resume lifecycle support was removed in \"0.1.10\" in favor of (mount/stop-except)"].join('');
} else {
return null;
}
}
});
mount.core.with_ns = (function mount$core$with_ns(ns,name){
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
mount.core.pounded_QMARK_ = (function mount$core$pounded_QMARK_(f){
var pound = "(fn* [] ";
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('').startsWith(pound);
});
mount.core.unpound = (function mount$core$unpound(f){
if(cljs.core.truth_(mount.core.pounded_QMARK_(f))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,(2));
} else {
return f;
}
});
/**
 * in case a namespace is recompiled without calling (mount/stop),
 * a running state instance will still be running.
 * this function stops this 'lost' state instance.
 * it is meant to be called by defstate before defining a new state
 */
mount.core.cleanup_if_dirty = (function mount$core$cleanup_if_dirty(state,reason){
var temp__5457__auto__ = (function (){var fexpr__5350 = cljs.core.deref(mount.core.running);
return (fexpr__5350.cljs$core$IFn$_invoke$arity$1 ? fexpr__5350.cljs$core$IFn$_invoke$arity$1(state) : fexpr__5350.call(null,state));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var map__5351 = temp__5457__auto__;
var map__5351__$1 = ((((!((map__5351 == null)))?(((((map__5351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5351):map__5351);
var up = map__5351__$1;
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5351__$1,cljs.core.cst$kw$stop);
if(cljs.core.truth_(stop)){
mount.tools.logger.log(["<< stopping.. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reason)].join(''));

(stop.cljs$core$IFn$_invoke$arity$0 ? stop.cljs$core$IFn$_invoke$arity$0() : stop.call(null));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mount.core.running,cljs.core.dissoc,state);
} else {
return null;
}
});
mount.core.current_state = (function mount$core$current_state(state){
return cljs.core.deref(cljs.core.cst$kw$inst.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__5353 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5353.cljs$core$IFn$_invoke$arity$1 ? fexpr__5353.cljs$core$IFn$_invoke$arity$1(state) : fexpr__5353.call(null,state));
})()));
});
mount.core.alter_state_BANG_ = (function mount$core$alter_state_BANG_(p__5354,value){
var map__5355 = p__5354;
var map__5355__$1 = ((((!((map__5355 == null)))?(((((map__5355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5355):map__5355);
var inst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5355__$1,cljs.core.cst$kw$inst);
return cljs.core.reset_BANG_(inst,value);
});
mount.core.update_meta_BANG_ = (function mount$core$update_meta_BANG_(path,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mount.core.meta_state,cljs.core.assoc_in,path,v);
});
mount.core.record_BANG_ = (function mount$core$record_BANG_(state_name,f,done){
var state = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(done,cljs.core.conj,state_name);

return state;
});
mount.core.up = (function mount$core$up(state,p__5357,done){
var map__5358 = p__5357;
var map__5358__$1 = ((((!((map__5358 == null)))?(((((map__5358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5358):map__5358);
var current = map__5358__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5358__$1,cljs.core.cst$kw$start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5358__$1,cljs.core.cst$kw$stop);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5358__$1,cljs.core.cst$kw$status);
if(cljs.core.truth_(cljs.core.cst$kw$started.cljs$core$IFn$_invoke$arity$1(status))){
return null;
} else {
var s = (function (){try{return mount.core.record_BANG_(state,start,done);
}catch (e5360){var t__4975__auto__ = e5360;
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(["could not start [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join(''))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__4975__auto__)].join('');

}})();
mount.core.alter_state_BANG_(current,s);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mount.core.running,cljs.core.assoc,state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stop,stop], null));

return mount.core.update_meta_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.cst$kw$status], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$started,null], null), null));
}
});
/**
 * brings a state down by
 *  * calling its 'stop' function if it is defined
 *    * if not defined, state will still become a 'NotStartedState'
 *    * in case of a failure on 'stop', state is still marked as :stopped, and the error is logged / printed
 *  * dissoc'ing it from the running states
 *  * marking it as :stopped
 */
mount.core.down = (function mount$core$down(state,p__5361,done){
var map__5362 = p__5361;
var map__5362__$1 = ((((!((map__5362 == null)))?(((((map__5362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5362):map__5362);
var current = map__5362__$1;
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5362__$1,cljs.core.cst$kw$stop);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5362__$1,cljs.core.cst$kw$status);
if(cljs.core.truth_(cljs.core.some(status,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$started,null], null), null)))){
if(cljs.core.truth_(stop)){
var temp__5455__auto___5365 = cljs.core.cst$kw$f_DASH_failed.cljs$core$IFn$_invoke$arity$1((function (){try{return mount.core.record_BANG_(state,stop,done);
}catch (e5364){var t__4975__auto__ = e5364;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$f_DASH_failed,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["could not stop [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join(''),cljs.core.PersistentArrayMap.EMPTY,t__4975__auto__)], null);

}})());
if(cljs.core.truth_(temp__5455__auto___5365)){
var cause_5366 = temp__5455__auto___5365;
mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic(cause_5366,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error], 0));
} else {
mount.core.alter_state_BANG_(current,(new mount.core.NotStartedState(state)));
}
} else {
mount.core.alter_state_BANG_(current,(new mount.core.NotStartedState(state)));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mount.core.running,cljs.core.dissoc,state);

return mount.core.update_meta_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.cst$kw$status], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stopped,null], null), null));
} else {
return null;
}
});
mount.core.running_states = (function mount$core$running_states(){
return cljs.core.set(cljs.core.keys(cljs.core.deref(mount.core.running)));
});

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
mount.core.DerefableState = (function (name){
this.name = name;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
mount.core.DerefableState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__5367 = (function (){var fexpr__5368 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5368.cljs$core$IFn$_invoke$arity$1 ? fexpr__5368.cljs$core$IFn$_invoke$arity$1(self__.name) : fexpr__5368.call(null,self__.name));
})();
var map__5367__$1 = ((((!((map__5367 == null)))?(((((map__5367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5367):map__5367);
var state = map__5367__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5367__$1,cljs.core.cst$kw$status);
var inst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5367__$1,cljs.core.cst$kw$inst);
if(cljs.core.truth_(cljs.core.cst$kw$started.cljs$core$IFn$_invoke$arity$1(status))){
} else {
mount.core.up(self__.name,state,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY));
}

return cljs.core.deref(inst);
});

mount.core.DerefableState.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$((function (){var fexpr__5370 = mount.core.running_states();
return (fexpr__5370.cljs$core$IFn$_invoke$arity$1 ? fexpr__5370.cljs$core$IFn$_invoke$arity$1(self__.name) : fexpr__5370.call(null,self__.name));
})());
});

mount.core.DerefableState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name], null);
});

mount.core.DerefableState.cljs$lang$type = true;

mount.core.DerefableState.cljs$lang$ctorStr = "mount.core/DerefableState";

mount.core.DerefableState.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"mount.core/DerefableState");
});

/**
 * Positional factory function for mount.core/DerefableState.
 */
mount.core.__GT_DerefableState = (function mount$core$__GT_DerefableState(name){
return (new mount.core.DerefableState(name));
});

mount.core.on_reload_meta = (function mount$core$on_reload_meta(s_var){
var or__3949__auto__ = cljs.core.cst$kw$on_DASH_reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s_var));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$restart;
}
});
mount.core.running_noop_QMARK_ = (function mount$core$running_noop_QMARK_(s_name){
var map__5371 = (function (){var fexpr__5372 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5372.cljs$core$IFn$_invoke$arity$1 ? fexpr__5372.cljs$core$IFn$_invoke$arity$1(s_name) : fexpr__5372.call(null,s_name));
})();
var map__5371__$1 = ((((!((map__5371 == null)))?(((((map__5371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5371):map__5371);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$var);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5371__$1,cljs.core.cst$kw$status);
var on_reload = cljs.core.cst$kw$on_DASH_reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(var$));
if(cljs.core.truth_(status)){
var and__3938__auto__ = (function (){var G__5375 = cljs.core.cst$kw$started;
return (status.cljs$core$IFn$_invoke$arity$1 ? status.cljs$core$IFn$_invoke$arity$1(G__5375) : status.call(null,G__5375));
})();
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$noop,on_reload);
} else {
return and__3938__auto__;
}
} else {
return null;
}
});
mount.core.mount_it = (function mount$core$mount_it(s_var,s_name,s_meta){
var with_inst = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s_meta,cljs.core.cst$kw$inst,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new mount.core.NotStartedState(s_name))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$var,s_var], 0));
var on_reload = mount.core.on_reload_meta(s_var);
var existing_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$noop,on_reload))?null:mount.core.cleanup_if_dirty(s_name,"(namespace was recompiled)"));
mount.core.update_meta_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name], null),with_inst);

if(cljs.core.truth_((function (){var and__3938__auto__ = existing_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$restart,on_reload);
} else {
return and__3938__auto__;
}
})())){
mount.tools.logger.log([">> starting.. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_name)," (namespace was recompiled)"].join(''));

return mount.core.up(s_name,with_inst,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY));
} else {
return null;
}
});
mount.core.in_cljc_mode = (function mount$core$in_cljc_mode(){
return cljs.core.reset_BANG_(mount.core.mode,cljs.core.cst$kw$cljc);
});
mount.core.in_clj_mode = (function mount$core$in_clj_mode(){
return cljs.core.reset_BANG_(mount.core.mode,cljs.core.cst$kw$clj);
});
mount.core.args = (function mount$core$args(){
return cljs.core.deref(mount.core._args);
});
mount.core.find_all_states = (function mount$core$find_all_states(){
return cljs.core.keys(cljs.core.deref(mount.core.meta_state));
});
mount.core.var_to_str = (function mount$core$var_to_str(v){
if((v instanceof cljs.core.Var)){
var map__5376 = cljs.core.meta(v);
var map__5376__$1 = ((((!((map__5376 == null)))?(((((map__5376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5376):map__5376);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5376__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5376__$1,cljs.core.cst$kw$name);
return mount.core.with_ns(ns,name);
} else {
return v;
}
});
mount.core.unvar_state = (function mount$core$unvar_state(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),s));
});
mount.core.bring = (function mount$core$bring(states,fun,order){
var done = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var $_5388 = states;
var $_5389__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mount.core.var_to_str,$_5388);
var $_5390__$2 = cljs.core.select_keys(cljs.core.deref(mount.core.meta_state),$_5389__$1);
var $_5391__$3 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$order,cljs.core.val),order,$_5390__$2);
var seq__5378_5392 = cljs.core.seq($_5391__$3);
var chunk__5379_5393 = null;
var count__5380_5394 = (0);
var i__5381_5395 = (0);
while(true){
if((i__5381_5395 < count__5380_5394)){
var vec__5382_5396 = chunk__5379_5393.cljs$core$IIndexed$_nth$arity$2(null,i__5381_5395);
var k_5397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5382_5396,(0),null);
var v_5398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5382_5396,(1),null);
(fun.cljs$core$IFn$_invoke$arity$3 ? fun.cljs$core$IFn$_invoke$arity$3(k_5397,v_5398,done) : fun.call(null,k_5397,v_5398,done));


var G__5399 = seq__5378_5392;
var G__5400 = chunk__5379_5393;
var G__5401 = count__5380_5394;
var G__5402 = (i__5381_5395 + (1));
seq__5378_5392 = G__5399;
chunk__5379_5393 = G__5400;
count__5380_5394 = G__5401;
i__5381_5395 = G__5402;
continue;
} else {
var temp__5457__auto___5403 = cljs.core.seq(seq__5378_5392);
if(temp__5457__auto___5403){
var seq__5378_5404__$1 = temp__5457__auto___5403;
if(cljs.core.chunked_seq_QMARK_(seq__5378_5404__$1)){
var c__4351__auto___5405 = cljs.core.chunk_first(seq__5378_5404__$1);
var G__5406 = cljs.core.chunk_rest(seq__5378_5404__$1);
var G__5407 = c__4351__auto___5405;
var G__5408 = cljs.core.count(c__4351__auto___5405);
var G__5409 = (0);
seq__5378_5392 = G__5406;
chunk__5379_5393 = G__5407;
count__5380_5394 = G__5408;
i__5381_5395 = G__5409;
continue;
} else {
var vec__5385_5410 = cljs.core.first(seq__5378_5404__$1);
var k_5411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5385_5410,(0),null);
var v_5412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5385_5410,(1),null);
(fun.cljs$core$IFn$_invoke$arity$3 ? fun.cljs$core$IFn$_invoke$arity$3(k_5411,v_5412,done) : fun.call(null,k_5411,v_5412,done));


var G__5413 = cljs.core.next(seq__5378_5404__$1);
var G__5414 = null;
var G__5415 = (0);
var G__5416 = (0);
seq__5378_5392 = G__5413;
chunk__5379_5393 = G__5414;
count__5380_5394 = G__5415;
i__5381_5395 = G__5416;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(done);
});
/**
 * merges with overriding _certain_ non existing keys.
 * i.e. :stop is in a 'state', but not in a 'substitute': it should be overriden with nil
 *      however other keys of 'state' (such as :ns,:name,:order) should not be overriden
 */
mount.core.merge_lifecycles = (function mount$core$merge_lifecycles(var_args){
var G__5418 = arguments.length;
switch (G__5418) {
case 2:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2 = (function (state,sub){
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3(state,null,sub);
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3 = (function (state,origin,p__5419){
var map__5420 = p__5419;
var map__5420__$1 = ((((!((map__5420 == null)))?(((((map__5420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5420):map__5420);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5420__$1,cljs.core.cst$kw$start);
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5420__$1,cljs.core.cst$kw$stop);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5420__$1,cljs.core.cst$kw$status);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$origin,origin,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$status,status,cljs.core.cst$kw$start,start,cljs.core.cst$kw$stop,stop], 0));
});

mount.core.merge_lifecycles.cljs$lang$maxFixedArity = 3;

mount.core.rollback_BANG_ = (function mount$core$rollback_BANG_(state){
var map__5423 = (function (){var fexpr__5424 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5424.cljs$core$IFn$_invoke$arity$1 ? fexpr__5424.cljs$core$IFn$_invoke$arity$1(state) : fexpr__5424.call(null,state));
})();
var map__5423__$1 = ((((!((map__5423 == null)))?(((((map__5423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5423):map__5423);
var sub = map__5423__$1;
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5423__$1,cljs.core.cst$kw$origin);
if(cljs.core.truth_(origin)){
return mount.core.update_meta_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2(sub,origin));
} else {
return null;
}
});
mount.core.substitute_BANG_ = (function mount$core$substitute_BANG_(state,with$,mode){
var lifecycle_fns = (function (p1__5426_SHARP_){
return cljs.core.select_keys(p1__5426_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$stop,cljs.core.cst$kw$status], null));
});
var origin = (function (){var fexpr__5427 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5427.cljs$core$IFn$_invoke$arity$1 ? fexpr__5427.cljs$core$IFn$_invoke$arity$1(state) : fexpr__5427.call(null,state));
})();
var sub = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,mode))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,((function (lifecycle_fns,origin){
return (function (){
return with$;
});})(lifecycle_fns,origin))
,cljs.core.cst$kw$status,cljs.core.cst$kw$stopped], null):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(with$,cljs.core.cst$kw$status,cljs.core.cst$kw$stopped));
return mount.core.update_meta_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3(origin,lifecycle_fns(origin),sub));
});
mount.core.unsub = (function mount$core$unsub(state){
if(cljs.core.truth_(cljs.core.cst$kw$sub_QMARK_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__5428 = cljs.core.deref(mount.core.meta_state);
return (fexpr__5428.cljs$core$IFn$_invoke$arity$1 ? fexpr__5428.cljs$core$IFn$_invoke$arity$1(state) : fexpr__5428.call(null,state));
})()))){
return mount.core.update_meta_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.cst$kw$sub_QMARK_], null),null);
} else {
return null;
}
});
mount.core.all_without_subs = (function mount$core$all_without_subs(){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sub_QMARK_,cljs.core.deref(mount.core.meta_state)),mount.core.find_all_states());
});
mount.core.start = (function mount$core$start(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5430 = arguments.length;
var i__4532__auto___5431 = (0);
while(true){
if((i__4532__auto___5431 < len__4531__auto___5430)){
args__4534__auto__.push((arguments[i__4532__auto___5431]));

var G__5432 = (i__4532__auto___5431 + (1));
i__4532__auto___5431 = G__5432;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mount.core.start.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first(states);
if(cljs.core.coll_QMARK_(fs)){
if(!(cljs.core.empty_QMARK_(fs))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.start,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$started,cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__3949__auto__ = cljs.core.seq(states);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return mount.core.all_without_subs();
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$started,mount.core.bring(states__$1,mount.core.up,cljs.core._LT_)], null);
}
});

mount.core.start.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.start.cljs$lang$applyTo = (function (seq5429){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5429));
});

mount.core.stop = (function mount$core$stop(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5434 = arguments.length;
var i__4532__auto___5435 = (0);
while(true){
if((i__4532__auto___5435 < len__4531__auto___5434)){
args__4534__auto__.push((arguments[i__4532__auto___5435]));

var G__5436 = (i__4532__auto___5435 + (1));
i__4532__auto___5435 = G__5436;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mount.core.stop.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first(states);
if(cljs.core.coll_QMARK_(fs)){
if(!(cljs.core.empty_QMARK_(fs))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.stop,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stopped,cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__3949__auto__ = cljs.core.seq(states);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return mount.core.find_all_states();
}
})();
var _ = cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mount.core.unsub,states__$1));
var stopped = mount.core.bring(states__$1,mount.core.down,cljs.core._GT_);
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mount.core.rollback_BANG_,states__$1));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stopped,stopped], null);
}
});

mount.core.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.stop.cljs$lang$applyTo = (function (seq5433){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5433));
});

mount.core.mapset = (function mount$core$mapset(f,xs){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});
mount.core.only = (function mount$core$only(var_args){
var G__5438 = arguments.length;
switch (G__5438) {
case 1:
return mount.core.only.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.only.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.only.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.only.cljs$core$IFn$_invoke$arity$2(mount.core.find_all_states(),states);
});

mount.core.only.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(mount.core.mapset(mount.core.var_to_str,these),mount.core.mapset(mount.core.var_to_str,states));
});

mount.core.only.cljs$lang$maxFixedArity = 2;

mount.core.with_args = (function mount$core$with_args(var_args){
var G__5441 = arguments.length;
switch (G__5441) {
case 1:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.with_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
return mount.core.with_args.cljs$core$IFn$_invoke$arity$2(mount.core.find_all_states(),args);
});

mount.core.with_args.cljs$core$IFn$_invoke$arity$2 = (function (states,args){
cljs.core.reset_BANG_(mount.core._args,args);

return states;
});

mount.core.with_args.cljs$lang$maxFixedArity = 2;

mount.core.except = (function mount$core$except(var_args){
var G__5444 = arguments.length;
switch (G__5444) {
case 1:
return mount.core.except.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.except.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.except.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.except.cljs$core$IFn$_invoke$arity$2(mount.core.find_all_states(),states);
});

mount.core.except.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mount.core.mapset(mount.core.var_to_str,these),mount.core.mapset(mount.core.var_to_str,states));
});

mount.core.except.cljs$lang$maxFixedArity = 2;

mount.core.swap = (function mount$core$swap(var_args){
var G__5447 = arguments.length;
switch (G__5447) {
case 1:
return mount.core.swap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.swap.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap.cljs$core$IFn$_invoke$arity$2(mount.core.find_all_states(),with$);
});

mount.core.swap.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__5448_5459 = cljs.core.seq(with$);
var chunk__5449_5460 = null;
var count__5450_5461 = (0);
var i__5451_5462 = (0);
while(true){
if((i__5451_5462 < count__5450_5461)){
var vec__5452_5463 = chunk__5449_5460.cljs$core$IIndexed$_nth$arity$2(null,i__5451_5462);
var from_5464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5452_5463,(0),null);
var to_5465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5452_5463,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5464),to_5465,cljs.core.cst$kw$value);


var G__5466 = seq__5448_5459;
var G__5467 = chunk__5449_5460;
var G__5468 = count__5450_5461;
var G__5469 = (i__5451_5462 + (1));
seq__5448_5459 = G__5466;
chunk__5449_5460 = G__5467;
count__5450_5461 = G__5468;
i__5451_5462 = G__5469;
continue;
} else {
var temp__5457__auto___5470 = cljs.core.seq(seq__5448_5459);
if(temp__5457__auto___5470){
var seq__5448_5471__$1 = temp__5457__auto___5470;
if(cljs.core.chunked_seq_QMARK_(seq__5448_5471__$1)){
var c__4351__auto___5472 = cljs.core.chunk_first(seq__5448_5471__$1);
var G__5473 = cljs.core.chunk_rest(seq__5448_5471__$1);
var G__5474 = c__4351__auto___5472;
var G__5475 = cljs.core.count(c__4351__auto___5472);
var G__5476 = (0);
seq__5448_5459 = G__5473;
chunk__5449_5460 = G__5474;
count__5450_5461 = G__5475;
i__5451_5462 = G__5476;
continue;
} else {
var vec__5455_5477 = cljs.core.first(seq__5448_5471__$1);
var from_5478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5455_5477,(0),null);
var to_5479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5455_5477,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5478),to_5479,cljs.core.cst$kw$value);


var G__5480 = cljs.core.next(seq__5448_5471__$1);
var G__5481 = null;
var G__5482 = (0);
var G__5483 = (0);
seq__5448_5459 = G__5480;
chunk__5449_5460 = G__5481;
count__5450_5461 = G__5482;
i__5451_5462 = G__5483;
continue;
}
} else {
}
}
break;
}

return states;
});

mount.core.swap.cljs$lang$maxFixedArity = 2;

mount.core.swap_states = (function mount$core$swap_states(var_args){
var G__5485 = arguments.length;
switch (G__5485) {
case 1:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.swap_states.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$2(mount.core.find_all_states(),with$);
});

mount.core.swap_states.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__5486_5497 = cljs.core.seq(with$);
var chunk__5487_5498 = null;
var count__5488_5499 = (0);
var i__5489_5500 = (0);
while(true){
if((i__5489_5500 < count__5488_5499)){
var vec__5490_5501 = chunk__5487_5498.cljs$core$IIndexed$_nth$arity$2(null,i__5489_5500);
var from_5502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5490_5501,(0),null);
var to_5503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5490_5501,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5502),to_5503,cljs.core.cst$kw$state);


var G__5504 = seq__5486_5497;
var G__5505 = chunk__5487_5498;
var G__5506 = count__5488_5499;
var G__5507 = (i__5489_5500 + (1));
seq__5486_5497 = G__5504;
chunk__5487_5498 = G__5505;
count__5488_5499 = G__5506;
i__5489_5500 = G__5507;
continue;
} else {
var temp__5457__auto___5508 = cljs.core.seq(seq__5486_5497);
if(temp__5457__auto___5508){
var seq__5486_5509__$1 = temp__5457__auto___5508;
if(cljs.core.chunked_seq_QMARK_(seq__5486_5509__$1)){
var c__4351__auto___5510 = cljs.core.chunk_first(seq__5486_5509__$1);
var G__5511 = cljs.core.chunk_rest(seq__5486_5509__$1);
var G__5512 = c__4351__auto___5510;
var G__5513 = cljs.core.count(c__4351__auto___5510);
var G__5514 = (0);
seq__5486_5497 = G__5511;
chunk__5487_5498 = G__5512;
count__5488_5499 = G__5513;
i__5489_5500 = G__5514;
continue;
} else {
var vec__5493_5515 = cljs.core.first(seq__5486_5509__$1);
var from_5516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5493_5515,(0),null);
var to_5517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5493_5515,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5516),to_5517,cljs.core.cst$kw$state);


var G__5518 = cljs.core.next(seq__5486_5509__$1);
var G__5519 = null;
var G__5520 = (0);
var G__5521 = (0);
seq__5486_5497 = G__5518;
chunk__5487_5498 = G__5519;
count__5488_5499 = G__5520;
i__5489_5500 = G__5521;
continue;
}
} else {
}
}
break;
}

return states;
});

mount.core.swap_states.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
mount.core.ChangeListener = function(){};

mount.core.add_watcher = (function mount$core$add_watcher(this$,ks,watcher){
if(((!((this$ == null))) && (!((this$.mount$core$ChangeListener$add_watcher$arity$3 == null))))){
return this$.mount$core$ChangeListener$add_watcher$arity$3(this$,ks,watcher);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mount.core.add_watcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,ks,watcher) : m__4244__auto__.call(null,this$,ks,watcher));
} else {
var m__4244__auto____$1 = (mount.core.add_watcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,ks,watcher) : m__4244__auto____$1.call(null,this$,ks,watcher));
} else {
throw cljs.core.missing_protocol("ChangeListener.add-watcher",this$);
}
}
}
});

mount.core.on_change = (function mount$core$on_change(this$,k){
if(((!((this$ == null))) && (!((this$.mount$core$ChangeListener$on_change$arity$2 == null))))){
return this$.mount$core$ChangeListener$on_change$arity$2(this$,k);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mount.core.on_change[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4244__auto__.call(null,this$,k));
} else {
var m__4244__auto____$1 = (mount.core.on_change["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4244__auto____$1.call(null,this$,k));
} else {
throw cljs.core.missing_protocol("ChangeListener.on-change",this$);
}
}
}
});


/**
* @constructor
 * @implements {mount.core.ChangeListener}
*/
mount.core.RestartListener = (function (watchers){
this.watchers = watchers;
});
mount.core.RestartListener.prototype.mount$core$ChangeListener$ = cljs.core.PROTOCOL_SENTINEL;

mount.core.RestartListener.prototype.mount$core$ChangeListener$add_watcher$arity$3 = (function (_,ks,state){
var self__ = this;
var ___$1 = this;
var seq__5522 = cljs.core.seq(ks);
var chunk__5523 = null;
var count__5524 = (0);
var i__5525 = (0);
while(true){
if((i__5525 < count__5524)){
var k = chunk__5523.cljs$core$IIndexed$_nth$arity$2(null,i__5525);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.watchers,cljs.core.update,k,((function (seq__5522,chunk__5523,count__5524,i__5525,k,___$1){
return (function (v){
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,state));
});})(seq__5522,chunk__5523,count__5524,i__5525,k,___$1))
);


var G__5532 = seq__5522;
var G__5533 = chunk__5523;
var G__5534 = count__5524;
var G__5535 = (i__5525 + (1));
seq__5522 = G__5532;
chunk__5523 = G__5533;
count__5524 = G__5534;
i__5525 = G__5535;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5522);
if(temp__5457__auto__){
var seq__5522__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5522__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5522__$1);
var G__5536 = cljs.core.chunk_rest(seq__5522__$1);
var G__5537 = c__4351__auto__;
var G__5538 = cljs.core.count(c__4351__auto__);
var G__5539 = (0);
seq__5522 = G__5536;
chunk__5523 = G__5537;
count__5524 = G__5538;
i__5525 = G__5539;
continue;
} else {
var k = cljs.core.first(seq__5522__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.watchers,cljs.core.update,k,((function (seq__5522,chunk__5523,count__5524,i__5525,k,seq__5522__$1,temp__5457__auto__,___$1){
return (function (v){
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,state));
});})(seq__5522,chunk__5523,count__5524,i__5525,k,seq__5522__$1,temp__5457__auto__,___$1))
);


var G__5540 = cljs.core.next(seq__5522__$1);
var G__5541 = null;
var G__5542 = (0);
var G__5543 = (0);
seq__5522 = G__5540;
chunk__5523 = G__5541;
count__5524 = G__5542;
i__5525 = G__5543;
continue;
}
} else {
return null;
}
}
break;
}
});

mount.core.RestartListener.prototype.mount$core$ChangeListener$on_change$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
var seq__5526 = cljs.core.seq(ks);
var chunk__5527 = null;
var count__5528 = (0);
var i__5529 = (0);
while(true){
if((i__5529 < count__5528)){
var k = chunk__5527.cljs$core$IIndexed$_nth$arity$2(null,i__5529);
var temp__5457__auto___5544 = cljs.core.seq((function (){var fexpr__5530 = cljs.core.deref(self__.watchers);
return (fexpr__5530.cljs$core$IFn$_invoke$arity$1 ? fexpr__5530.cljs$core$IFn$_invoke$arity$1(k) : fexpr__5530.call(null,k));
})());
if(temp__5457__auto___5544){
var states_5545 = temp__5457__auto___5544;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.stop,states_5545);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.start,states_5545);
} else {
}


var G__5546 = seq__5526;
var G__5547 = chunk__5527;
var G__5548 = count__5528;
var G__5549 = (i__5529 + (1));
seq__5526 = G__5546;
chunk__5527 = G__5547;
count__5528 = G__5548;
i__5529 = G__5549;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5526);
if(temp__5457__auto__){
var seq__5526__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5526__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5526__$1);
var G__5550 = cljs.core.chunk_rest(seq__5526__$1);
var G__5551 = c__4351__auto__;
var G__5552 = cljs.core.count(c__4351__auto__);
var G__5553 = (0);
seq__5526 = G__5550;
chunk__5527 = G__5551;
count__5528 = G__5552;
i__5529 = G__5553;
continue;
} else {
var k = cljs.core.first(seq__5526__$1);
var temp__5457__auto___5554__$1 = cljs.core.seq((function (){var fexpr__5531 = cljs.core.deref(self__.watchers);
return (fexpr__5531.cljs$core$IFn$_invoke$arity$1 ? fexpr__5531.cljs$core$IFn$_invoke$arity$1(k) : fexpr__5531.call(null,k));
})());
if(temp__5457__auto___5554__$1){
var states_5555 = temp__5457__auto___5554__$1;
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.stop,states_5555);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.start,states_5555);
} else {
}


var G__5556 = cljs.core.next(seq__5526__$1);
var G__5557 = null;
var G__5558 = (0);
var G__5559 = (0);
seq__5526 = G__5556;
chunk__5527 = G__5557;
count__5528 = G__5558;
i__5529 = G__5559;
continue;
}
} else {
return null;
}
}
break;
}
});

mount.core.RestartListener.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$watchers], null);
});

mount.core.RestartListener.cljs$lang$type = true;

mount.core.RestartListener.cljs$lang$ctorStr = "mount.core/RestartListener";

mount.core.RestartListener.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"mount.core/RestartListener");
});

/**
 * Positional factory function for mount.core/RestartListener.
 */
mount.core.__GT_RestartListener = (function mount$core$__GT_RestartListener(watchers){
return (new mount.core.RestartListener(watchers));
});

mount.core.restart_listener = (function mount$core$restart_listener(var_args){
var G__5561 = arguments.length;
switch (G__5561) {
case 0:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0 = (function (){
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1 = (function (watchers){
return (new mount.core.RestartListener(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(watchers)));
});

mount.core.restart_listener.cljs$lang$maxFixedArity = 1;

mount.core.stop_except = (function mount$core$stop_except(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5564 = arguments.length;
var i__4532__auto___5565 = (0);
while(true){
if((i__4532__auto___5565 < len__4531__auto___5564)){
args__4534__auto__.push((arguments[i__4532__auto___5565]));

var G__5566 = (i__4532__auto___5565 + (1));
i__4532__auto___5565 = G__5566;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var all = cljs.core.set(mount.core.find_all_states());
var states__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mount.core.var_to_str,states);
var states__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(states__$1),all);
if(!(cljs.core.empty_QMARK_(states__$2))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.stop,states__$2);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stopped,cljs.core.PersistentHashSet.EMPTY], null);
}
});

mount.core.stop_except.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.stop_except.cljs$lang$applyTo = (function (seq5563){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5563));
});

mount.core.start_with_args = (function mount$core$start_with_args(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5569 = arguments.length;
var i__4532__auto___5570 = (0);
while(true){
if((i__4532__auto___5570 < len__4531__auto___5569)){
args__4534__auto__.push((arguments[i__4532__auto___5570]));

var G__5571 = (i__4532__auto___5570 + (1));
i__4532__auto___5570 = G__5571;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic = (function (xs,states){
cljs.core.reset_BANG_(mount.core._args,xs);

if(cljs.core.truth_(cljs.core.first(states))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.start,states);
} else {
return mount.core.start();
}
});

mount.core.start_with_args.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mount.core.start_with_args.cljs$lang$applyTo = (function (seq5567){
var G__5568 = cljs.core.first(seq5567);
var seq5567__$1 = cljs.core.next(seq5567);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5568,seq5567__$1);
});

mount.core.start_with = (function mount$core$start_with(with$){
var seq__5572_5582 = cljs.core.seq(with$);
var chunk__5573_5583 = null;
var count__5574_5584 = (0);
var i__5575_5585 = (0);
while(true){
if((i__5575_5585 < count__5574_5584)){
var vec__5576_5586 = chunk__5573_5583.cljs$core$IIndexed$_nth$arity$2(null,i__5575_5585);
var from_5587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5576_5586,(0),null);
var to_5588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5576_5586,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5587),to_5588,cljs.core.cst$kw$value);


var G__5589 = seq__5572_5582;
var G__5590 = chunk__5573_5583;
var G__5591 = count__5574_5584;
var G__5592 = (i__5575_5585 + (1));
seq__5572_5582 = G__5589;
chunk__5573_5583 = G__5590;
count__5574_5584 = G__5591;
i__5575_5585 = G__5592;
continue;
} else {
var temp__5457__auto___5593 = cljs.core.seq(seq__5572_5582);
if(temp__5457__auto___5593){
var seq__5572_5594__$1 = temp__5457__auto___5593;
if(cljs.core.chunked_seq_QMARK_(seq__5572_5594__$1)){
var c__4351__auto___5595 = cljs.core.chunk_first(seq__5572_5594__$1);
var G__5596 = cljs.core.chunk_rest(seq__5572_5594__$1);
var G__5597 = c__4351__auto___5595;
var G__5598 = cljs.core.count(c__4351__auto___5595);
var G__5599 = (0);
seq__5572_5582 = G__5596;
chunk__5573_5583 = G__5597;
count__5574_5584 = G__5598;
i__5575_5585 = G__5599;
continue;
} else {
var vec__5579_5600 = cljs.core.first(seq__5572_5594__$1);
var from_5601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5579_5600,(0),null);
var to_5602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5579_5600,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5601),to_5602,cljs.core.cst$kw$value);


var G__5603 = cljs.core.next(seq__5572_5594__$1);
var G__5604 = null;
var G__5605 = (0);
var G__5606 = (0);
seq__5572_5582 = G__5603;
chunk__5573_5583 = G__5604;
count__5574_5584 = G__5605;
i__5575_5585 = G__5606;
continue;
}
} else {
}
}
break;
}

return mount.core.start();
});
mount.core.start_with_states = (function mount$core$start_with_states(with$){
var seq__5607_5617 = cljs.core.seq(with$);
var chunk__5608_5618 = null;
var count__5609_5619 = (0);
var i__5610_5620 = (0);
while(true){
if((i__5610_5620 < count__5609_5619)){
var vec__5611_5621 = chunk__5608_5618.cljs$core$IIndexed$_nth$arity$2(null,i__5610_5620);
var from_5622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5611_5621,(0),null);
var to_5623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5611_5621,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5622),to_5623,cljs.core.cst$kw$state);


var G__5624 = seq__5607_5617;
var G__5625 = chunk__5608_5618;
var G__5626 = count__5609_5619;
var G__5627 = (i__5610_5620 + (1));
seq__5607_5617 = G__5624;
chunk__5608_5618 = G__5625;
count__5609_5619 = G__5626;
i__5610_5620 = G__5627;
continue;
} else {
var temp__5457__auto___5628 = cljs.core.seq(seq__5607_5617);
if(temp__5457__auto___5628){
var seq__5607_5629__$1 = temp__5457__auto___5628;
if(cljs.core.chunked_seq_QMARK_(seq__5607_5629__$1)){
var c__4351__auto___5630 = cljs.core.chunk_first(seq__5607_5629__$1);
var G__5631 = cljs.core.chunk_rest(seq__5607_5629__$1);
var G__5632 = c__4351__auto___5630;
var G__5633 = cljs.core.count(c__4351__auto___5630);
var G__5634 = (0);
seq__5607_5617 = G__5631;
chunk__5608_5618 = G__5632;
count__5609_5619 = G__5633;
i__5610_5620 = G__5634;
continue;
} else {
var vec__5614_5635 = cljs.core.first(seq__5607_5629__$1);
var from_5636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5614_5635,(0),null);
var to_5637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5614_5635,(1),null);
mount.core.substitute_BANG_(mount.core.var_to_str(from_5636),to_5637,cljs.core.cst$kw$state);


var G__5638 = cljs.core.next(seq__5607_5629__$1);
var G__5639 = null;
var G__5640 = (0);
var G__5641 = (0);
seq__5607_5617 = G__5638;
chunk__5608_5618 = G__5639;
count__5609_5619 = G__5640;
i__5610_5620 = G__5641;
continue;
}
} else {
}
}
break;
}

return mount.core.start();
});
mount.core.start_without = (function mount$core$start_without(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5643 = arguments.length;
var i__4532__auto___5644 = (0);
while(true){
if((i__4532__auto___5644 < len__4531__auto___5643)){
args__4534__auto__.push((arguments[i__4532__auto___5644]));

var G__5645 = (i__4532__auto___5644 + (1));
i__4532__auto___5644 = G__5645;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic = (function (states){
if(cljs.core.truth_(cljs.core.first(states))){
var app = cljs.core.set(mount.core.all_without_subs());
var states__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mount.core.var_to_str,states);
var without = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(states__$1),app);
if(!(cljs.core.empty_QMARK_(without))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mount.core.start,without);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$started,cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
return mount.core.start();
}
});

mount.core.start_without.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.start_without.cljs$lang$applyTo = (function (seq5642){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5642));
});

