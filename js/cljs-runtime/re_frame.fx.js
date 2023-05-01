goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24124 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24125 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24125);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24250 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24250)){
var new_db_24251 = temp__5804__auto___24250;
var fexpr__24127_24252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24127_24252.cljs$core$IFn$_invoke$arity$1 ? fexpr__24127_24252.cljs$core$IFn$_invoke$arity$1(new_db_24251) : fexpr__24127_24252.call(null,new_db_24251));
} else {
}

var seq__24128 = cljs.core.seq(effects_without_db);
var chunk__24129 = null;
var count__24130 = (0);
var i__24131 = (0);
while(true){
if((i__24131 < count__24130)){
var vec__24141 = chunk__24129.cljs$core$IIndexed$_nth$arity$2(null,i__24131);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24141,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24141,(1),null);
var temp__5802__auto___24253 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24253)){
var effect_fn_24254 = temp__5802__auto___24253;
(effect_fn_24254.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24254.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24254.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24255 = seq__24128;
var G__24256 = chunk__24129;
var G__24257 = count__24130;
var G__24258 = (i__24131 + (1));
seq__24128 = G__24255;
chunk__24129 = G__24256;
count__24130 = G__24257;
i__24131 = G__24258;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24128);
if(temp__5804__auto__){
var seq__24128__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24128__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24128__$1);
var G__24261 = cljs.core.chunk_rest(seq__24128__$1);
var G__24262 = c__5568__auto__;
var G__24263 = cljs.core.count(c__5568__auto__);
var G__24264 = (0);
seq__24128 = G__24261;
chunk__24129 = G__24262;
count__24130 = G__24263;
i__24131 = G__24264;
continue;
} else {
var vec__24144 = cljs.core.first(seq__24128__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24144,(1),null);
var temp__5802__auto___24265 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24265)){
var effect_fn_24266 = temp__5802__auto___24265;
(effect_fn_24266.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24266.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24266.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24268 = cljs.core.next(seq__24128__$1);
var G__24269 = null;
var G__24270 = (0);
var G__24271 = (0);
seq__24128 = G__24268;
chunk__24129 = G__24269;
count__24130 = G__24270;
i__24131 = G__24271;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23715__auto___24272 = re_frame.interop.now();
var duration__23716__auto___24273 = (end__23715__auto___24272 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23716__auto___24273,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23715__auto___24272);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24124);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24278 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24278)){
var new_db_24279 = temp__5804__auto___24278;
var fexpr__24151_24280 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24151_24280.cljs$core$IFn$_invoke$arity$1 ? fexpr__24151_24280.cljs$core$IFn$_invoke$arity$1(new_db_24279) : fexpr__24151_24280.call(null,new_db_24279));
} else {
}

var seq__24156 = cljs.core.seq(effects_without_db);
var chunk__24157 = null;
var count__24158 = (0);
var i__24159 = (0);
while(true){
if((i__24159 < count__24158)){
var vec__24170 = chunk__24157.cljs$core$IIndexed$_nth$arity$2(null,i__24159);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24170,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24170,(1),null);
var temp__5802__auto___24281 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24281)){
var effect_fn_24282 = temp__5802__auto___24281;
(effect_fn_24282.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24282.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24282.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24283 = seq__24156;
var G__24284 = chunk__24157;
var G__24285 = count__24158;
var G__24286 = (i__24159 + (1));
seq__24156 = G__24283;
chunk__24157 = G__24284;
count__24158 = G__24285;
i__24159 = G__24286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24156);
if(temp__5804__auto__){
var seq__24156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24156__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24156__$1);
var G__24287 = cljs.core.chunk_rest(seq__24156__$1);
var G__24288 = c__5568__auto__;
var G__24289 = cljs.core.count(c__5568__auto__);
var G__24290 = (0);
seq__24156 = G__24287;
chunk__24157 = G__24288;
count__24158 = G__24289;
i__24159 = G__24290;
continue;
} else {
var vec__24173 = cljs.core.first(seq__24156__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24173,(1),null);
var temp__5802__auto___24293 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24293)){
var effect_fn_24294 = temp__5802__auto___24293;
(effect_fn_24294.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24294.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24294.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24295 = cljs.core.next(seq__24156__$1);
var G__24296 = null;
var G__24297 = (0);
var G__24298 = (0);
seq__24156 = G__24295;
chunk__24157 = G__24296;
count__24158 = G__24297;
i__24159 = G__24298;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24176){
var map__24177 = p__24176;
var map__24177__$1 = cljs.core.__destructure_map(map__24177);
var effect = map__24177__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24177__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24182 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24183 = null;
var count__24184 = (0);
var i__24185 = (0);
while(true){
if((i__24185 < count__24184)){
var effect = chunk__24183.cljs$core$IIndexed$_nth$arity$2(null,i__24185);
re_frame.fx.dispatch_later(effect);


var G__24299 = seq__24182;
var G__24300 = chunk__24183;
var G__24301 = count__24184;
var G__24302 = (i__24185 + (1));
seq__24182 = G__24299;
chunk__24183 = G__24300;
count__24184 = G__24301;
i__24185 = G__24302;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24182);
if(temp__5804__auto__){
var seq__24182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24182__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24182__$1);
var G__24303 = cljs.core.chunk_rest(seq__24182__$1);
var G__24304 = c__5568__auto__;
var G__24305 = cljs.core.count(c__5568__auto__);
var G__24306 = (0);
seq__24182 = G__24303;
chunk__24183 = G__24304;
count__24184 = G__24305;
i__24185 = G__24306;
continue;
} else {
var effect = cljs.core.first(seq__24182__$1);
re_frame.fx.dispatch_later(effect);


var G__24307 = cljs.core.next(seq__24182__$1);
var G__24308 = null;
var G__24309 = (0);
var G__24310 = (0);
seq__24182 = G__24307;
chunk__24183 = G__24308;
count__24184 = G__24309;
i__24185 = G__24310;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24199 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24200 = null;
var count__24201 = (0);
var i__24202 = (0);
while(true){
if((i__24202 < count__24201)){
var vec__24212 = chunk__24200.cljs$core$IIndexed$_nth$arity$2(null,i__24202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24212,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24313 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24313)){
var effect_fn_24314 = temp__5802__auto___24313;
(effect_fn_24314.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24314.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24314.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24315 = seq__24199;
var G__24316 = chunk__24200;
var G__24317 = count__24201;
var G__24318 = (i__24202 + (1));
seq__24199 = G__24315;
chunk__24200 = G__24316;
count__24201 = G__24317;
i__24202 = G__24318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24199);
if(temp__5804__auto__){
var seq__24199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24199__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24199__$1);
var G__24319 = cljs.core.chunk_rest(seq__24199__$1);
var G__24320 = c__5568__auto__;
var G__24321 = cljs.core.count(c__5568__auto__);
var G__24322 = (0);
seq__24199 = G__24319;
chunk__24200 = G__24320;
count__24201 = G__24321;
i__24202 = G__24322;
continue;
} else {
var vec__24221 = cljs.core.first(seq__24199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24221,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24221,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24323 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24323)){
var effect_fn_24324 = temp__5802__auto___24323;
(effect_fn_24324.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24324.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24324.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24325 = cljs.core.next(seq__24199__$1);
var G__24326 = null;
var G__24327 = (0);
var G__24328 = (0);
seq__24199 = G__24325;
chunk__24200 = G__24326;
count__24201 = G__24327;
i__24202 = G__24328;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24230 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24231 = null;
var count__24232 = (0);
var i__24233 = (0);
while(true){
if((i__24233 < count__24232)){
var event = chunk__24231.cljs$core$IIndexed$_nth$arity$2(null,i__24233);
re_frame.router.dispatch(event);


var G__24329 = seq__24230;
var G__24330 = chunk__24231;
var G__24331 = count__24232;
var G__24332 = (i__24233 + (1));
seq__24230 = G__24329;
chunk__24231 = G__24330;
count__24232 = G__24331;
i__24233 = G__24332;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24230);
if(temp__5804__auto__){
var seq__24230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24230__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24230__$1);
var G__24333 = cljs.core.chunk_rest(seq__24230__$1);
var G__24334 = c__5568__auto__;
var G__24335 = cljs.core.count(c__5568__auto__);
var G__24336 = (0);
seq__24230 = G__24333;
chunk__24231 = G__24334;
count__24232 = G__24335;
i__24233 = G__24336;
continue;
} else {
var event = cljs.core.first(seq__24230__$1);
re_frame.router.dispatch(event);


var G__24337 = cljs.core.next(seq__24230__$1);
var G__24338 = null;
var G__24339 = (0);
var G__24340 = (0);
seq__24230 = G__24337;
chunk__24231 = G__24338;
count__24232 = G__24339;
i__24233 = G__24340;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24239 = cljs.core.seq(value);
var chunk__24240 = null;
var count__24241 = (0);
var i__24242 = (0);
while(true){
if((i__24242 < count__24241)){
var event = chunk__24240.cljs$core$IIndexed$_nth$arity$2(null,i__24242);
clear_event(event);


var G__24343 = seq__24239;
var G__24344 = chunk__24240;
var G__24345 = count__24241;
var G__24346 = (i__24242 + (1));
seq__24239 = G__24343;
chunk__24240 = G__24344;
count__24241 = G__24345;
i__24242 = G__24346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24239);
if(temp__5804__auto__){
var seq__24239__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24239__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24239__$1);
var G__24347 = cljs.core.chunk_rest(seq__24239__$1);
var G__24348 = c__5568__auto__;
var G__24349 = cljs.core.count(c__5568__auto__);
var G__24350 = (0);
seq__24239 = G__24347;
chunk__24240 = G__24348;
count__24241 = G__24349;
i__24242 = G__24350;
continue;
} else {
var event = cljs.core.first(seq__24239__$1);
clear_event(event);


var G__24351 = cljs.core.next(seq__24239__$1);
var G__24352 = null;
var G__24353 = (0);
var G__24354 = (0);
seq__24239 = G__24351;
chunk__24240 = G__24352;
count__24241 = G__24353;
i__24242 = G__24354;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
