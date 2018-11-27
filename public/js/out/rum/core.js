// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
var G__4653 = comp.state;
var G__4654 = ":rum/state";
return goog.object.get(G__4653,G__4654);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__4655 = cljs.core.seq(props);
var chunk__4657 = null;
var count__4658 = (0);
var i__4659 = (0);
while(true){
if((i__4659 < count__4658)){
var vec__4661 = chunk__4657.cljs$core$IIndexed$_nth$arity$2(null,i__4659);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4661,(1),null);
if(!((v == null))){
var G__4664_4673 = obj;
var G__4665_4674 = cljs.core.name(k);
var G__4666_4675 = cljs.core.clj__GT_js(v);
goog.object.set(G__4664_4673,G__4665_4674,G__4666_4675);


var G__4676 = seq__4655;
var G__4677 = chunk__4657;
var G__4678 = count__4658;
var G__4679 = (i__4659 + (1));
seq__4655 = G__4676;
chunk__4657 = G__4677;
count__4658 = G__4678;
i__4659 = G__4679;
continue;
} else {
var G__4680 = seq__4655;
var G__4681 = chunk__4657;
var G__4682 = count__4658;
var G__4683 = (i__4659 + (1));
seq__4655 = G__4680;
chunk__4657 = G__4681;
count__4658 = G__4682;
i__4659 = G__4683;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4655);
if(temp__5457__auto__){
var seq__4655__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4655__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__4655__$1);
var G__4684 = cljs.core.chunk_rest(seq__4655__$1);
var G__4685 = c__4351__auto__;
var G__4686 = cljs.core.count(c__4351__auto__);
var G__4687 = (0);
seq__4655 = G__4684;
chunk__4657 = G__4685;
count__4658 = G__4686;
i__4659 = G__4687;
continue;
} else {
var vec__4667 = cljs.core.first(seq__4655__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4667,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4667,(1),null);
if(!((v == null))){
var G__4670_4688 = obj;
var G__4671_4689 = cljs.core.name(k);
var G__4672_4690 = cljs.core.clj__GT_js(v);
goog.object.set(G__4670_4688,G__4671_4689,G__4672_4690);


var G__4691 = cljs.core.next(seq__4655__$1);
var G__4692 = null;
var G__4693 = (0);
var G__4694 = (0);
seq__4655 = G__4691;
chunk__4657 = G__4692;
count__4658 = G__4693;
i__4659 = G__4694;
continue;
} else {
var G__4695 = cljs.core.next(seq__4655__$1);
var G__4696 = null;
var G__4697 = (0);
var G__4698 = (0);
seq__4655 = G__4695;
chunk__4657 = G__4696;
count__4658 = G__4697;
i__4659 = G__4698;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__4700_SHARP_,p2__4699_SHARP_){
return (p2__4699_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__4699_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__4700_SHARP_) : p2__4699_SHARP_.call(null,p1__4700_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__4705_4742 = this$;
var G__4706_4743 = "state";
var G__4707_4744 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))});
goog.object.set(G__4705_4742,G__4706_4743,G__4707_4744);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__4708_4745 = prototype;
var G__4709_4746 = "componentWillMount";
var G__4710_4747 = ((function (G__4708_4745,G__4709_4746,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__4708_4745,G__4709_4746,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4708_4745,G__4709_4746,G__4710_4747);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__4711_4748 = prototype;
var G__4712_4749 = "componentDidMount";
var G__4713_4750 = ((function (G__4711_4748,G__4712_4749,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__4711_4748,G__4712_4749,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4711_4748,G__4712_4749,G__4713_4750);
}

var G__4714_4751 = prototype;
var G__4715_4752 = "componentWillReceiveProps";
var G__4716_4753 = ((function (G__4714_4751,G__4715_4752,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__4714_4751,G__4715_4752,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__4702_SHARP_,p2__4701_SHARP_){
return (p2__4701_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__4701_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__4702_SHARP_) : p2__4701_SHARP_.call(null,old_state,p1__4702_SHARP_));
});})(old_state,state,this$,G__4714_4751,G__4715_4752,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__4714_4751,G__4715_4752,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4714_4751,G__4715_4752,G__4716_4753);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__4717_4754 = prototype;
var G__4718_4755 = "shouldComponentUpdate";
var G__4719_4756 = ((function (G__4717_4754,G__4718_4755,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__4717_4754,G__4718_4755,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__4703_SHARP_){
return (p1__4703_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__4703_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__4703_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__4717_4754,G__4718_4755,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(G__4717_4754,G__4718_4755,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4717_4754,G__4718_4755,G__4719_4756);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__4720_4757 = prototype;
var G__4721_4758 = "componentWillUpdate";
var G__4722_4759 = ((function (G__4720_4757,G__4721_4758,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__4720_4757,G__4721_4758,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4720_4757,G__4721_4758,G__4722_4759);
}

var G__4723_4760 = prototype;
var G__4724_4761 = "render";
var G__4725_4762 = ((function (G__4723_4760,G__4724_4761,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__4726 = (function (){var G__4729 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__4729) : wrapped_render.call(null,G__4729));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4726,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4726,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__4723_4760,G__4724_4761,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4723_4760,G__4724_4761,G__4725_4762);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__4730_4763 = prototype;
var G__4731_4764 = "componentDidUpdate";
var G__4732_4765 = ((function (G__4730_4763,G__4731_4764,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__4730_4763,G__4731_4764,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4730_4763,G__4731_4764,G__4732_4765);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__4733_4766 = prototype;
var G__4734_4767 = "componentDidCatch";
var G__4735_4768 = ((function (G__4733_4766,G__4734_4767,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__4733_4766,G__4734_4767,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4733_4766,G__4734_4767,G__4735_4768);
}

var G__4736_4769 = prototype;
var G__4737_4770 = "componentWillUnmount";
var G__4738_4771 = ((function (G__4736_4769,G__4737_4770,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__4736_4769,G__4737_4770,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4736_4769,G__4737_4770,G__4738_4771);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__4739_4772 = prototype;
var G__4740_4773 = "getChildContext";
var G__4741_4774 = ((function (G__4739_4772,G__4740_4773,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__4739_4772,G__4740_4773,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__4704_SHARP_){
return (p1__4704_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__4704_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__4704_SHARP_.call(null,state));
});})(state,this$,G__4739_4772,G__4740_4773,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__4739_4772,G__4740_4773,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__4739_4772,G__4740_4773,G__4741_4774);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__4775__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__4775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4776__i = 0, G__4776__a = new Array(arguments.length -  0);
while (G__4776__i < G__4776__a.length) {G__4776__a[G__4776__i] = arguments[G__4776__i + 0]; ++G__4776__i;}
  args = new cljs.core.IndexedSeq(G__4776__a,0,null);
} 
return G__4775__delegate.call(this,args);};
G__4775.cljs$lang$maxFixedArity = 0;
G__4775.cljs$lang$applyTo = (function (arglist__4777){
var args = cljs.core.seq(arglist__4777);
return G__4775__delegate(args);
});
G__4775.cljs$core$IFn$_invoke$arity$variadic = G__4775__delegate;
return G__4775;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__4778__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__4778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4779__i = 0, G__4779__a = new Array(arguments.length -  0);
while (G__4779__i < G__4779__a.length) {G__4779__a[G__4779__i] = arguments[G__4779__i + 0]; ++G__4779__i;}
  args = new cljs.core.IndexedSeq(G__4779__a,0,null);
} 
return G__4778__delegate.call(this,args);};
G__4778.cljs$lang$maxFixedArity = 0;
G__4778.cljs$lang$applyTo = (function (arglist__4780){
var args = cljs.core.seq(arglist__4780);
return G__4778__delegate(args);
});
G__4778.cljs$core$IFn$_invoke$arity$variadic = G__4778__delegate;
return G__4778;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__4781__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__4781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4782__i = 0, G__4782__a = new Array(arguments.length -  0);
while (G__4782__i < G__4782__a.length) {G__4782__a[G__4782__i] = arguments[G__4782__i + 0]; ++G__4782__i;}
  args = new cljs.core.IndexedSeq(G__4782__a,0,null);
} 
return G__4781__delegate.call(this,args);};
G__4781.cljs$lang$maxFixedArity = 0;
G__4781.cljs$lang$applyTo = (function (arglist__4783){
var args = cljs.core.seq(arglist__4783);
return G__4781__delegate(args);
});
G__4781.cljs$core$IFn$_invoke$arity$variadic = G__4781__delegate;
return G__4781;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__4784_SHARP_){
return setTimeout(p1__4784_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__4785 = cljs.core.seq(queue);
var chunk__4787 = null;
var count__4788 = (0);
var i__4789 = (0);
while(true){
if((i__4789 < count__4788)){
var comp = chunk__4787.cljs$core$IIndexed$_nth$arity$2(null,i__4789);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__4791 = seq__4785;
var G__4792 = chunk__4787;
var G__4793 = count__4788;
var G__4794 = (i__4789 + (1));
seq__4785 = G__4791;
chunk__4787 = G__4792;
count__4788 = G__4793;
i__4789 = G__4794;
continue;
} else {
var G__4795 = seq__4785;
var G__4796 = chunk__4787;
var G__4797 = count__4788;
var G__4798 = (i__4789 + (1));
seq__4785 = G__4795;
chunk__4787 = G__4796;
count__4788 = G__4797;
i__4789 = G__4798;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__4785);
if(temp__5457__auto__){
var seq__4785__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4785__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__4785__$1);
var G__4799 = cljs.core.chunk_rest(seq__4785__$1);
var G__4800 = c__4351__auto__;
var G__4801 = cljs.core.count(c__4351__auto__);
var G__4802 = (0);
seq__4785 = G__4799;
chunk__4787 = G__4800;
count__4788 = G__4801;
i__4789 = G__4802;
continue;
} else {
var comp = cljs.core.first(seq__4785__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__4803 = cljs.core.next(seq__4785__$1);
var G__4804 = null;
var G__4805 = (0);
var G__4806 = (0);
seq__4785 = G__4803;
chunk__4787 = G__4804;
count__4788 = G__4805;
i__4789 = G__4806;
continue;
} else {
var G__4807 = cljs.core.next(seq__4785__$1);
var G__4808 = null;
var G__4809 = (0);
var G__4810 = (0);
seq__4785 = G__4807;
chunk__4787 = G__4808;
count__4788 = G__4809;
i__4789 = G__4810;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__4812 = arguments.length;
switch (G__4812) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_4814 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__4815 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4815,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4815,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__4818_4830 = cljs.core.seq(old_reactions);
var chunk__4819_4831 = null;
var count__4820_4832 = (0);
var i__4821_4833 = (0);
while(true){
if((i__4821_4833 < count__4820_4832)){
var ref_4834 = chunk__4819_4831.cljs$core$IIndexed$_nth$arity$2(null,i__4821_4833);
if(cljs.core.contains_QMARK_(new_reactions,ref_4834)){
} else {
cljs.core.remove_watch(ref_4834,key);
}


var G__4835 = seq__4818_4830;
var G__4836 = chunk__4819_4831;
var G__4837 = count__4820_4832;
var G__4838 = (i__4821_4833 + (1));
seq__4818_4830 = G__4835;
chunk__4819_4831 = G__4836;
count__4820_4832 = G__4837;
i__4821_4833 = G__4838;
continue;
} else {
var temp__5457__auto___4839 = cljs.core.seq(seq__4818_4830);
if(temp__5457__auto___4839){
var seq__4818_4840__$1 = temp__5457__auto___4839;
if(cljs.core.chunked_seq_QMARK_(seq__4818_4840__$1)){
var c__4351__auto___4841 = cljs.core.chunk_first(seq__4818_4840__$1);
var G__4842 = cljs.core.chunk_rest(seq__4818_4840__$1);
var G__4843 = c__4351__auto___4841;
var G__4844 = cljs.core.count(c__4351__auto___4841);
var G__4845 = (0);
seq__4818_4830 = G__4842;
chunk__4819_4831 = G__4843;
count__4820_4832 = G__4844;
i__4821_4833 = G__4845;
continue;
} else {
var ref_4846 = cljs.core.first(seq__4818_4840__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_4846)){
} else {
cljs.core.remove_watch(ref_4846,key);
}


var G__4847 = cljs.core.next(seq__4818_4840__$1);
var G__4848 = null;
var G__4849 = (0);
var G__4850 = (0);
seq__4818_4830 = G__4847;
chunk__4819_4831 = G__4848;
count__4820_4832 = G__4849;
i__4821_4833 = G__4850;
continue;
}
} else {
}
}
break;
}

var seq__4822_4851 = cljs.core.seq(new_reactions);
var chunk__4823_4852 = null;
var count__4824_4853 = (0);
var i__4825_4854 = (0);
while(true){
if((i__4825_4854 < count__4824_4853)){
var ref_4855 = chunk__4823_4852.cljs$core$IIndexed$_nth$arity$2(null,i__4825_4854);
if(cljs.core.contains_QMARK_(old_reactions,ref_4855)){
} else {
cljs.core.add_watch(ref_4855,key,((function (seq__4822_4851,chunk__4823_4852,count__4824_4853,i__4825_4854,ref_4855,comp,old_reactions,vec__4815,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4814){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__4822_4851,chunk__4823_4852,count__4824_4853,i__4825_4854,ref_4855,comp,old_reactions,vec__4815,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4814))
);
}


var G__4856 = seq__4822_4851;
var G__4857 = chunk__4823_4852;
var G__4858 = count__4824_4853;
var G__4859 = (i__4825_4854 + (1));
seq__4822_4851 = G__4856;
chunk__4823_4852 = G__4857;
count__4824_4853 = G__4858;
i__4825_4854 = G__4859;
continue;
} else {
var temp__5457__auto___4860 = cljs.core.seq(seq__4822_4851);
if(temp__5457__auto___4860){
var seq__4822_4861__$1 = temp__5457__auto___4860;
if(cljs.core.chunked_seq_QMARK_(seq__4822_4861__$1)){
var c__4351__auto___4862 = cljs.core.chunk_first(seq__4822_4861__$1);
var G__4863 = cljs.core.chunk_rest(seq__4822_4861__$1);
var G__4864 = c__4351__auto___4862;
var G__4865 = cljs.core.count(c__4351__auto___4862);
var G__4866 = (0);
seq__4822_4851 = G__4863;
chunk__4823_4852 = G__4864;
count__4824_4853 = G__4865;
i__4825_4854 = G__4866;
continue;
} else {
var ref_4867 = cljs.core.first(seq__4822_4861__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_4867)){
} else {
cljs.core.add_watch(ref_4867,key,((function (seq__4822_4851,chunk__4823_4852,count__4824_4853,i__4825_4854,ref_4867,seq__4822_4861__$1,temp__5457__auto___4860,comp,old_reactions,vec__4815,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4814){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__4822_4851,chunk__4823_4852,count__4824_4853,i__4825_4854,ref_4867,seq__4822_4861__$1,temp__5457__auto___4860,comp,old_reactions,vec__4815,dom,next_state,new_reactions,key,_STAR_reactions_STAR_4814))
);
}


var G__4868 = cljs.core.next(seq__4822_4861__$1);
var G__4869 = null;
var G__4870 = (0);
var G__4871 = (0);
seq__4822_4851 = G__4868;
chunk__4823_4852 = G__4869;
count__4824_4853 = G__4870;
i__4825_4854 = G__4871;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_4814;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_4872 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__4826_4873 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__4827_4874 = null;
var count__4828_4875 = (0);
var i__4829_4876 = (0);
while(true){
if((i__4829_4876 < count__4828_4875)){
var ref_4877 = chunk__4827_4874.cljs$core$IIndexed$_nth$arity$2(null,i__4829_4876);
cljs.core.remove_watch(ref_4877,key_4872);


var G__4878 = seq__4826_4873;
var G__4879 = chunk__4827_4874;
var G__4880 = count__4828_4875;
var G__4881 = (i__4829_4876 + (1));
seq__4826_4873 = G__4878;
chunk__4827_4874 = G__4879;
count__4828_4875 = G__4880;
i__4829_4876 = G__4881;
continue;
} else {
var temp__5457__auto___4882 = cljs.core.seq(seq__4826_4873);
if(temp__5457__auto___4882){
var seq__4826_4883__$1 = temp__5457__auto___4882;
if(cljs.core.chunked_seq_QMARK_(seq__4826_4883__$1)){
var c__4351__auto___4884 = cljs.core.chunk_first(seq__4826_4883__$1);
var G__4885 = cljs.core.chunk_rest(seq__4826_4883__$1);
var G__4886 = c__4351__auto___4884;
var G__4887 = cljs.core.count(c__4351__auto___4884);
var G__4888 = (0);
seq__4826_4873 = G__4885;
chunk__4827_4874 = G__4886;
count__4828_4875 = G__4887;
i__4829_4876 = G__4888;
continue;
} else {
var ref_4889 = cljs.core.first(seq__4826_4883__$1);
cljs.core.remove_watch(ref_4889,key_4872);


var G__4890 = cljs.core.next(seq__4826_4883__$1);
var G__4891 = null;
var G__4892 = (0);
var G__4893 = (0);
seq__4826_4873 = G__4890;
chunk__4827_4874 = G__4891;
count__4828_4875 = G__4892;
i__4829_4876 = G__4893;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4900 = arguments.length;
var i__4532__auto___4901 = (0);
while(true){
if((i__4532__auto___4901 < len__4531__auto___4900)){
args__4534__auto__.push((arguments[i__4532__auto___4901]));

var G__4902 = (i__4532__auto___4901 + (1));
i__4532__auto___4901 = G__4902;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__4897){
var map__4898 = p__4897;
var map__4898__$1 = ((((!((map__4898 == null)))?(((((map__4898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4898):map__4898);
var options = map__4898__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq4894){
var G__4895 = cljs.core.first(seq4894);
var seq4894__$1 = cljs.core.next(seq4894);
var G__4896 = cljs.core.first(seq4894__$1);
var seq4894__$2 = cljs.core.next(seq4894__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4895,G__4896,seq4894__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4906 = arguments.length;
var i__4532__auto___4907 = (0);
while(true){
if((i__4532__auto___4907 < len__4531__auto___4906)){
args__4534__auto__.push((arguments[i__4532__auto___4907]));

var G__4908 = (i__4532__auto___4907 + (1));
i__4532__auto___4907 = G__4908;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq4903){
var G__4904 = cljs.core.first(seq4903);
var seq4903__$1 = cljs.core.next(seq4903);
var G__4905 = cljs.core.first(seq4903__$1);
var seq4903__$2 = cljs.core.next(seq4903__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4904,G__4905,seq4903__$2);
});

