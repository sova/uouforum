// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__2466 = e.target.readyState;
var fexpr__2465 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__2465.cljs$core$IFn$_invoke$arity$1 ? fexpr__2465.cljs$core$IFn$_invoke$arity$1(G__2466) : fexpr__2465.call(null,G__2466));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__2468,handler){
var map__2469 = p__2468;
var map__2469__$1 = ((((!((map__2469 == null)))?(((((map__2469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2469):map__2469);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2469__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2469__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2469__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2469__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2469__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2469__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2469__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__2469,map__2469__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__2467_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__2467_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__2469,map__2469__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___2481 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___2481)){
var response_type_2482 = temp__5457__auto___2481;
this$__$1.responseType = cljs.core.name(response_type_2482);
} else {
}

var seq__2471_2483 = cljs.core.seq(headers);
var chunk__2472_2484 = null;
var count__2473_2485 = (0);
var i__2474_2486 = (0);
while(true){
if((i__2474_2486 < count__2473_2485)){
var vec__2475_2487 = chunk__2472_2484.cljs$core$IIndexed$_nth$arity$2(null,i__2474_2486);
var k_2488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2475_2487,(0),null);
var v_2489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2475_2487,(1),null);
this$__$1.setRequestHeader(k_2488,v_2489);


var G__2490 = seq__2471_2483;
var G__2491 = chunk__2472_2484;
var G__2492 = count__2473_2485;
var G__2493 = (i__2474_2486 + (1));
seq__2471_2483 = G__2490;
chunk__2472_2484 = G__2491;
count__2473_2485 = G__2492;
i__2474_2486 = G__2493;
continue;
} else {
var temp__5457__auto___2494 = cljs.core.seq(seq__2471_2483);
if(temp__5457__auto___2494){
var seq__2471_2495__$1 = temp__5457__auto___2494;
if(cljs.core.chunked_seq_QMARK_(seq__2471_2495__$1)){
var c__4351__auto___2496 = cljs.core.chunk_first(seq__2471_2495__$1);
var G__2497 = cljs.core.chunk_rest(seq__2471_2495__$1);
var G__2498 = c__4351__auto___2496;
var G__2499 = cljs.core.count(c__4351__auto___2496);
var G__2500 = (0);
seq__2471_2483 = G__2497;
chunk__2472_2484 = G__2498;
count__2473_2485 = G__2499;
i__2474_2486 = G__2500;
continue;
} else {
var vec__2478_2501 = cljs.core.first(seq__2471_2495__$1);
var k_2502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2478_2501,(0),null);
var v_2503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2478_2501,(1),null);
this$__$1.setRequestHeader(k_2502,v_2503);


var G__2504 = cljs.core.next(seq__2471_2495__$1);
var G__2505 = null;
var G__2506 = (0);
var G__2507 = (0);
seq__2471_2483 = G__2504;
chunk__2472_2484 = G__2505;
count__2473_2485 = G__2506;
i__2474_2486 = G__2507;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3949__auto__ = body;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
