// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('mount.tools.logger');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.log');
goog.require('goog.debug.Console');
if((typeof mount !== 'undefined') && (typeof mount.tools !== 'undefined') && (typeof mount.tools.logger !== 'undefined') && (typeof mount.tools.logger._STAR_logger_STAR_ !== 'undefined')){
} else {
mount.tools.logger._STAR_logger_STAR_ = (function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("mount");
})()
;
}
mount.tools.logger.log = (function mount$tools$logger$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5009 = arguments.length;
var i__4532__auto___5010 = (0);
while(true){
if((i__4532__auto___5010 < len__4531__auto___5009)){
args__4534__auto__.push((arguments[i__4532__auto___5010]));

var G__5011 = (i__4532__auto___5010 + (1));
i__4532__auto___5010 = G__5011;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,level){
var G__5008 = cljs.core.first(level);
var G__5008__$1 = (((G__5008 instanceof cljs.core.Keyword))?G__5008.fqn:null);
switch (G__5008__$1) {
case "error":
return goog.log.error(mount.tools.logger._STAR_logger_STAR_,msg);

break;
default:
return goog.log.info(mount.tools.logger._STAR_logger_STAR_,msg);

}
});

mount.tools.logger.log.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mount.tools.logger.log.cljs$lang$applyTo = (function (seq5006){
var G__5007 = cljs.core.first(seq5006);
var seq5006__$1 = cljs.core.next(seq5006);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5007,seq5006__$1);
});

