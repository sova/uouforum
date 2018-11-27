// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__25523 = cljs.core.seq.call(null,props);
var chunk__25525 = null;
var count__25526 = (0);
var i__25527 = (0);
while(true){
if((i__25527 < count__25526)){
var vec__25529 = cljs.core._nth.call(null,chunk__25525,i__25527);
var k = cljs.core.nth.call(null,vec__25529,(0),null);
var v = cljs.core.nth.call(null,vec__25529,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__25535 = seq__25523;
var G__25536 = chunk__25525;
var G__25537 = count__25526;
var G__25538 = (i__25527 + (1));
seq__25523 = G__25535;
chunk__25525 = G__25536;
count__25526 = G__25537;
i__25527 = G__25538;
continue;
} else {
var G__25539 = seq__25523;
var G__25540 = chunk__25525;
var G__25541 = count__25526;
var G__25542 = (i__25527 + (1));
seq__25523 = G__25539;
chunk__25525 = G__25540;
count__25526 = G__25541;
i__25527 = G__25542;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25523);
if(temp__5457__auto__){
var seq__25523__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25523__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25523__$1);
var G__25543 = cljs.core.chunk_rest.call(null,seq__25523__$1);
var G__25544 = c__4351__auto__;
var G__25545 = cljs.core.count.call(null,c__4351__auto__);
var G__25546 = (0);
seq__25523 = G__25543;
chunk__25525 = G__25544;
count__25526 = G__25545;
i__25527 = G__25546;
continue;
} else {
var vec__25532 = cljs.core.first.call(null,seq__25523__$1);
var k = cljs.core.nth.call(null,vec__25532,(0),null);
var v = cljs.core.nth.call(null,vec__25532,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__25547 = cljs.core.next.call(null,seq__25523__$1);
var G__25548 = null;
var G__25549 = (0);
var G__25550 = (0);
seq__25523 = G__25547;
chunk__25525 = G__25548;
count__25526 = G__25549;
i__25527 = G__25550;
continue;
} else {
var G__25551 = cljs.core.next.call(null,seq__25523__$1);
var G__25552 = null;
var G__25553 = (0);
var G__25554 = (0);
seq__25523 = G__25551;
chunk__25525 = G__25552;
count__25526 = G__25553;
i__25527 = G__25554;
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
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__25556_SHARP_,p2__25555_SHARP_){
return p2__25555_SHARP_.call(null,p1__25556_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__25558_SHARP_,p2__25557_SHARP_){
return p2__25557_SHARP_.call(null,old_state,p1__25558_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__25559_SHARP_){
return p1__25559_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__25561 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__25561,(0),null);
var next_state = cljs.core.nth.call(null,vec__25561,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__25560_SHARP_){
return p1__25560_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__25564__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__25564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25565__i = 0, G__25565__a = new Array(arguments.length -  0);
while (G__25565__i < G__25565__a.length) {G__25565__a[G__25565__i] = arguments[G__25565__i + 0]; ++G__25565__i;}
  args = new cljs.core.IndexedSeq(G__25565__a,0,null);
} 
return G__25564__delegate.call(this,args);};
G__25564.cljs$lang$maxFixedArity = 0;
G__25564.cljs$lang$applyTo = (function (arglist__25566){
var args = cljs.core.seq(arglist__25566);
return G__25564__delegate(args);
});
G__25564.cljs$core$IFn$_invoke$arity$variadic = G__25564__delegate;
return G__25564;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__25567__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__25567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25568__i = 0, G__25568__a = new Array(arguments.length -  0);
while (G__25568__i < G__25568__a.length) {G__25568__a[G__25568__i] = arguments[G__25568__i + 0]; ++G__25568__i;}
  args = new cljs.core.IndexedSeq(G__25568__a,0,null);
} 
return G__25567__delegate.call(this,args);};
G__25567.cljs$lang$maxFixedArity = 0;
G__25567.cljs$lang$applyTo = (function (arglist__25569){
var args = cljs.core.seq(arglist__25569);
return G__25567__delegate(args);
});
G__25567.cljs$core$IFn$_invoke$arity$variadic = G__25567__delegate;
return G__25567;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__25570__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__25570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25571__i = 0, G__25571__a = new Array(arguments.length -  0);
while (G__25571__i < G__25571__a.length) {G__25571__a[G__25571__i] = arguments[G__25571__i + 0]; ++G__25571__i;}
  args = new cljs.core.IndexedSeq(G__25571__a,0,null);
} 
return G__25570__delegate.call(this,args);};
G__25570.cljs$lang$maxFixedArity = 0;
G__25570.cljs$lang$applyTo = (function (arglist__25572){
var args = cljs.core.seq(arglist__25572);
return G__25570__delegate(args);
});
G__25570.cljs$core$IFn$_invoke$arity$variadic = G__25570__delegate;
return G__25570;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
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
return (function (p1__25573_SHARP_){
return setTimeout(p1__25573_SHARP_,(16));
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
return f.call(null,a);
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__25574 = cljs.core.seq.call(null,queue);
var chunk__25576 = null;
var count__25577 = (0);
var i__25578 = (0);
while(true){
if((i__25578 < count__25577)){
var comp = cljs.core._nth.call(null,chunk__25576,i__25578);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__25580 = seq__25574;
var G__25581 = chunk__25576;
var G__25582 = count__25577;
var G__25583 = (i__25578 + (1));
seq__25574 = G__25580;
chunk__25576 = G__25581;
count__25577 = G__25582;
i__25578 = G__25583;
continue;
} else {
var G__25584 = seq__25574;
var G__25585 = chunk__25576;
var G__25586 = count__25577;
var G__25587 = (i__25578 + (1));
seq__25574 = G__25584;
chunk__25576 = G__25585;
count__25577 = G__25586;
i__25578 = G__25587;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25574);
if(temp__5457__auto__){
var seq__25574__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25574__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25574__$1);
var G__25588 = cljs.core.chunk_rest.call(null,seq__25574__$1);
var G__25589 = c__4351__auto__;
var G__25590 = cljs.core.count.call(null,c__4351__auto__);
var G__25591 = (0);
seq__25574 = G__25588;
chunk__25576 = G__25589;
count__25577 = G__25590;
i__25578 = G__25591;
continue;
} else {
var comp = cljs.core.first.call(null,seq__25574__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__25592 = cljs.core.next.call(null,seq__25574__$1);
var G__25593 = null;
var G__25594 = (0);
var G__25595 = (0);
seq__25574 = G__25592;
chunk__25576 = G__25593;
count__25577 = G__25594;
i__25578 = G__25595;
continue;
} else {
var G__25596 = cljs.core.next.call(null,seq__25574__$1);
var G__25597 = null;
var G__25598 = (0);
var G__25599 = (0);
seq__25574 = G__25596;
chunk__25576 = G__25597;
count__25577 = G__25598;
i__25578 = G__25599;
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
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
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
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__25601 = arguments.length;
switch (G__25601) {
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
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_25603 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__25604 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__25604,(0),null);
var next_state = cljs.core.nth.call(null,vec__25604,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__25607_25619 = cljs.core.seq.call(null,old_reactions);
var chunk__25608_25620 = null;
var count__25609_25621 = (0);
var i__25610_25622 = (0);
while(true){
if((i__25610_25622 < count__25609_25621)){
var ref_25623 = cljs.core._nth.call(null,chunk__25608_25620,i__25610_25622);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_25623)){
} else {
cljs.core.remove_watch.call(null,ref_25623,key);
}


var G__25624 = seq__25607_25619;
var G__25625 = chunk__25608_25620;
var G__25626 = count__25609_25621;
var G__25627 = (i__25610_25622 + (1));
seq__25607_25619 = G__25624;
chunk__25608_25620 = G__25625;
count__25609_25621 = G__25626;
i__25610_25622 = G__25627;
continue;
} else {
var temp__5457__auto___25628 = cljs.core.seq.call(null,seq__25607_25619);
if(temp__5457__auto___25628){
var seq__25607_25629__$1 = temp__5457__auto___25628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25607_25629__$1)){
var c__4351__auto___25630 = cljs.core.chunk_first.call(null,seq__25607_25629__$1);
var G__25631 = cljs.core.chunk_rest.call(null,seq__25607_25629__$1);
var G__25632 = c__4351__auto___25630;
var G__25633 = cljs.core.count.call(null,c__4351__auto___25630);
var G__25634 = (0);
seq__25607_25619 = G__25631;
chunk__25608_25620 = G__25632;
count__25609_25621 = G__25633;
i__25610_25622 = G__25634;
continue;
} else {
var ref_25635 = cljs.core.first.call(null,seq__25607_25629__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_25635)){
} else {
cljs.core.remove_watch.call(null,ref_25635,key);
}


var G__25636 = cljs.core.next.call(null,seq__25607_25629__$1);
var G__25637 = null;
var G__25638 = (0);
var G__25639 = (0);
seq__25607_25619 = G__25636;
chunk__25608_25620 = G__25637;
count__25609_25621 = G__25638;
i__25610_25622 = G__25639;
continue;
}
} else {
}
}
break;
}

var seq__25611_25640 = cljs.core.seq.call(null,new_reactions);
var chunk__25612_25641 = null;
var count__25613_25642 = (0);
var i__25614_25643 = (0);
while(true){
if((i__25614_25643 < count__25613_25642)){
var ref_25644 = cljs.core._nth.call(null,chunk__25612_25641,i__25614_25643);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_25644)){
} else {
cljs.core.add_watch.call(null,ref_25644,key,((function (seq__25611_25640,chunk__25612_25641,count__25613_25642,i__25614_25643,ref_25644,comp,old_reactions,vec__25604,dom,next_state,new_reactions,key,_STAR_reactions_STAR_25603){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__25611_25640,chunk__25612_25641,count__25613_25642,i__25614_25643,ref_25644,comp,old_reactions,vec__25604,dom,next_state,new_reactions,key,_STAR_reactions_STAR_25603))
);
}


var G__25645 = seq__25611_25640;
var G__25646 = chunk__25612_25641;
var G__25647 = count__25613_25642;
var G__25648 = (i__25614_25643 + (1));
seq__25611_25640 = G__25645;
chunk__25612_25641 = G__25646;
count__25613_25642 = G__25647;
i__25614_25643 = G__25648;
continue;
} else {
var temp__5457__auto___25649 = cljs.core.seq.call(null,seq__25611_25640);
if(temp__5457__auto___25649){
var seq__25611_25650__$1 = temp__5457__auto___25649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25611_25650__$1)){
var c__4351__auto___25651 = cljs.core.chunk_first.call(null,seq__25611_25650__$1);
var G__25652 = cljs.core.chunk_rest.call(null,seq__25611_25650__$1);
var G__25653 = c__4351__auto___25651;
var G__25654 = cljs.core.count.call(null,c__4351__auto___25651);
var G__25655 = (0);
seq__25611_25640 = G__25652;
chunk__25612_25641 = G__25653;
count__25613_25642 = G__25654;
i__25614_25643 = G__25655;
continue;
} else {
var ref_25656 = cljs.core.first.call(null,seq__25611_25650__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_25656)){
} else {
cljs.core.add_watch.call(null,ref_25656,key,((function (seq__25611_25640,chunk__25612_25641,count__25613_25642,i__25614_25643,ref_25656,seq__25611_25650__$1,temp__5457__auto___25649,comp,old_reactions,vec__25604,dom,next_state,new_reactions,key,_STAR_reactions_STAR_25603){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__25611_25640,chunk__25612_25641,count__25613_25642,i__25614_25643,ref_25656,seq__25611_25650__$1,temp__5457__auto___25649,comp,old_reactions,vec__25604,dom,next_state,new_reactions,key,_STAR_reactions_STAR_25603))
);
}


var G__25657 = cljs.core.next.call(null,seq__25611_25650__$1);
var G__25658 = null;
var G__25659 = (0);
var G__25660 = (0);
seq__25611_25640 = G__25657;
chunk__25612_25641 = G__25658;
count__25613_25642 = G__25659;
i__25614_25643 = G__25660;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_25603;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_25661 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__25615_25662 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__25616_25663 = null;
var count__25617_25664 = (0);
var i__25618_25665 = (0);
while(true){
if((i__25618_25665 < count__25617_25664)){
var ref_25666 = cljs.core._nth.call(null,chunk__25616_25663,i__25618_25665);
cljs.core.remove_watch.call(null,ref_25666,key_25661);


var G__25667 = seq__25615_25662;
var G__25668 = chunk__25616_25663;
var G__25669 = count__25617_25664;
var G__25670 = (i__25618_25665 + (1));
seq__25615_25662 = G__25667;
chunk__25616_25663 = G__25668;
count__25617_25664 = G__25669;
i__25618_25665 = G__25670;
continue;
} else {
var temp__5457__auto___25671 = cljs.core.seq.call(null,seq__25615_25662);
if(temp__5457__auto___25671){
var seq__25615_25672__$1 = temp__5457__auto___25671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25615_25672__$1)){
var c__4351__auto___25673 = cljs.core.chunk_first.call(null,seq__25615_25672__$1);
var G__25674 = cljs.core.chunk_rest.call(null,seq__25615_25672__$1);
var G__25675 = c__4351__auto___25673;
var G__25676 = cljs.core.count.call(null,c__4351__auto___25673);
var G__25677 = (0);
seq__25615_25662 = G__25674;
chunk__25616_25663 = G__25675;
count__25617_25664 = G__25676;
i__25618_25665 = G__25677;
continue;
} else {
var ref_25678 = cljs.core.first.call(null,seq__25615_25672__$1);
cljs.core.remove_watch.call(null,ref_25678,key_25661);


var G__25679 = cljs.core.next.call(null,seq__25615_25672__$1);
var G__25680 = null;
var G__25681 = (0);
var G__25682 = (0);
seq__25615_25662 = G__25679;
chunk__25616_25663 = G__25680;
count__25617_25664 = G__25681;
i__25618_25665 = G__25682;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
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

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
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
var len__4531__auto___25689 = arguments.length;
var i__4532__auto___25690 = (0);
while(true){
if((i__4532__auto___25690 < len__4531__auto___25689)){
args__4534__auto__.push((arguments[i__4532__auto___25690]));

var G__25691 = (i__4532__auto___25690 + (1));
i__4532__auto___25690 = G__25691;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__25686){
var map__25687 = p__25686;
var map__25687__$1 = ((((!((map__25687 == null)))?(((((map__25687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25687):map__25687);
var options = map__25687__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq25683){
var G__25684 = cljs.core.first.call(null,seq25683);
var seq25683__$1 = cljs.core.next.call(null,seq25683);
var G__25685 = cljs.core.first.call(null,seq25683__$1);
var seq25683__$2 = cljs.core.next.call(null,seq25683__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25684,G__25685,seq25683__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25695 = arguments.length;
var i__4532__auto___25696 = (0);
while(true){
if((i__4532__auto___25696 < len__4531__auto___25695)){
args__4534__auto__.push((arguments[i__4532__auto___25696]));

var G__25697 = (i__4532__auto___25696 + (1));
i__4532__auto___25696 = G__25697;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq25692){
var G__25693 = cljs.core.first.call(null,seq25692);
var seq25692__$1 = cljs.core.next.call(null,seq25692);
var G__25694 = cljs.core.first.call(null,seq25692__$1);
var seq25692__$2 = cljs.core.next.call(null,seq25692__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25693,G__25694,seq25692__$2);
});


//# sourceMappingURL=core.js.map
