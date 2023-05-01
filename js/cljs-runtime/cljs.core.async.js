goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17328 = (function (f,blockable,meta17329){
this.f = f;
this.blockable = blockable;
this.meta17329 = meta17329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17330,meta17329__$1){
var self__ = this;
var _17330__$1 = this;
return (new cljs.core.async.t_cljs$core$async17328(self__.f,self__.blockable,meta17329__$1));
}));

(cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17330){
var self__ = this;
var _17330__$1 = this;
return self__.meta17329;
}));

(cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17329","meta17329",1588686285,null)], null);
}));

(cljs.core.async.t_cljs$core$async17328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17328");

(cljs.core.async.t_cljs$core$async17328.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17328.
 */
cljs.core.async.__GT_t_cljs$core$async17328 = (function cljs$core$async$__GT_t_cljs$core$async17328(f,blockable,meta17329){
return (new cljs.core.async.t_cljs$core$async17328(f,blockable,meta17329));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17325 = arguments.length;
switch (G__17325) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17340 = arguments.length;
switch (G__17340) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17342 = arguments.length;
switch (G__17342) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17355 = arguments.length;
switch (G__17355) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19610 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19610) : fn1.call(null,val_19610));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19610) : fn1.call(null,val_19610));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17360 = arguments.length;
switch (G__17360) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19614 = n;
var x_19615 = (0);
while(true){
if((x_19615 < n__5636__auto___19614)){
(a[x_19615] = x_19615);

var G__19616 = (x_19615 + (1));
x_19615 = G__19616;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17370 = (function (flag,meta17371){
this.flag = flag;
this.meta17371 = meta17371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17372,meta17371__$1){
var self__ = this;
var _17372__$1 = this;
return (new cljs.core.async.t_cljs$core$async17370(self__.flag,meta17371__$1));
}));

(cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17372){
var self__ = this;
var _17372__$1 = this;
return self__.meta17371;
}));

(cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17371","meta17371",-1938820986,null)], null);
}));

(cljs.core.async.t_cljs$core$async17370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17370");

(cljs.core.async.t_cljs$core$async17370.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17370.
 */
cljs.core.async.__GT_t_cljs$core$async17370 = (function cljs$core$async$__GT_t_cljs$core$async17370(flag,meta17371){
return (new cljs.core.async.t_cljs$core$async17370(flag,meta17371));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17370(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17385 = (function (flag,cb,meta17386){
this.flag = flag;
this.cb = cb;
this.meta17386 = meta17386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17387,meta17386__$1){
var self__ = this;
var _17387__$1 = this;
return (new cljs.core.async.t_cljs$core$async17385(self__.flag,self__.cb,meta17386__$1));
}));

(cljs.core.async.t_cljs$core$async17385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17387){
var self__ = this;
var _17387__$1 = this;
return self__.meta17386;
}));

(cljs.core.async.t_cljs$core$async17385.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17385.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17386","meta17386",1531548224,null)], null);
}));

(cljs.core.async.t_cljs$core$async17385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17385");

(cljs.core.async.t_cljs$core$async17385.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17385.
 */
cljs.core.async.__GT_t_cljs$core$async17385 = (function cljs$core$async$__GT_t_cljs$core$async17385(flag,cb,meta17386){
return (new cljs.core.async.t_cljs$core$async17385(flag,cb,meta17386));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17385(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17392_SHARP_){
var G__17407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17392_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17407) : fret.call(null,G__17407));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17393_SHARP_){
var G__17408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17393_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17408) : fret.call(null,G__17408));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19620 = (i + (1));
i = G__19620;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19621 = arguments.length;
var i__5770__auto___19622 = (0);
while(true){
if((i__5770__auto___19622 < len__5769__auto___19621)){
args__5775__auto__.push((arguments[i__5770__auto___19622]));

var G__19623 = (i__5770__auto___19622 + (1));
i__5770__auto___19622 = G__19623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17413){
var map__17414 = p__17413;
var map__17414__$1 = cljs.core.__destructure_map(map__17414);
var opts = map__17414__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17410){
var G__17411 = cljs.core.first(seq17410);
var seq17410__$1 = cljs.core.next(seq17410);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17411,seq17410__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17430 = arguments.length;
switch (G__17430) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17262__auto___19636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17479){
var state_val_17480 = (state_17479[(1)]);
if((state_val_17480 === (7))){
var inst_17475 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17490_19637 = state_17479__$1;
(statearr_17490_19637[(2)] = inst_17475);

(statearr_17490_19637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (1))){
var state_17479__$1 = state_17479;
var statearr_17491_19638 = state_17479__$1;
(statearr_17491_19638[(2)] = null);

(statearr_17491_19638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (4))){
var inst_17456 = (state_17479[(7)]);
var inst_17456__$1 = (state_17479[(2)]);
var inst_17459 = (inst_17456__$1 == null);
var state_17479__$1 = (function (){var statearr_17494 = state_17479;
(statearr_17494[(7)] = inst_17456__$1);

return statearr_17494;
})();
if(cljs.core.truth_(inst_17459)){
var statearr_17497_19640 = state_17479__$1;
(statearr_17497_19640[(1)] = (5));

} else {
var statearr_17499_19641 = state_17479__$1;
(statearr_17499_19641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (13))){
var state_17479__$1 = state_17479;
var statearr_17500_19642 = state_17479__$1;
(statearr_17500_19642[(2)] = null);

(statearr_17500_19642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (6))){
var inst_17456 = (state_17479[(7)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17479__$1,(11),to,inst_17456);
} else {
if((state_val_17480 === (3))){
var inst_17477 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17479__$1,inst_17477);
} else {
if((state_val_17480 === (12))){
var state_17479__$1 = state_17479;
var statearr_17501_19643 = state_17479__$1;
(statearr_17501_19643[(2)] = null);

(statearr_17501_19643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (2))){
var state_17479__$1 = state_17479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17479__$1,(4),from);
} else {
if((state_val_17480 === (11))){
var inst_17468 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
if(cljs.core.truth_(inst_17468)){
var statearr_17508_19644 = state_17479__$1;
(statearr_17508_19644[(1)] = (12));

} else {
var statearr_17510_19645 = state_17479__$1;
(statearr_17510_19645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (9))){
var state_17479__$1 = state_17479;
var statearr_17511_19646 = state_17479__$1;
(statearr_17511_19646[(2)] = null);

(statearr_17511_19646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (5))){
var state_17479__$1 = state_17479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17512_19647 = state_17479__$1;
(statearr_17512_19647[(1)] = (8));

} else {
var statearr_17514_19648 = state_17479__$1;
(statearr_17514_19648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (14))){
var inst_17473 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17515_19649 = state_17479__$1;
(statearr_17515_19649[(2)] = inst_17473);

(statearr_17515_19649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (10))){
var inst_17465 = (state_17479[(2)]);
var state_17479__$1 = state_17479;
var statearr_17517_19650 = state_17479__$1;
(statearr_17517_19650[(2)] = inst_17465);

(statearr_17517_19650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17480 === (8))){
var inst_17462 = cljs.core.async.close_BANG_(to);
var state_17479__$1 = state_17479;
var statearr_17519_19651 = state_17479__$1;
(statearr_17519_19651[(2)] = inst_17462);

(statearr_17519_19651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_17521 = [null,null,null,null,null,null,null,null];
(statearr_17521[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_17521[(1)] = (1));

return statearr_17521;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_17479){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17479);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17524){var ex__17097__auto__ = e17524;
var statearr_17525_19652 = state_17479;
(statearr_17525_19652[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17479[(4)]))){
var statearr_17527_19653 = state_17479;
(statearr_17527_19653[(1)] = cljs.core.first((state_17479[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19654 = state_17479;
state_17479 = G__19654;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_17479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_17479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17529 = f__17263__auto__();
(statearr_17529[(6)] = c__17262__auto___19636);

return statearr_17529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17535){
var vec__17540 = p__17535;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17540,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17540,(1),null);
var job = vec__17540;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17262__auto___19655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17564){
var state_val_17565 = (state_17564[(1)]);
if((state_val_17565 === (1))){
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17564__$1,(2),res,v);
} else {
if((state_val_17565 === (2))){
var inst_17557 = (state_17564[(2)]);
var inst_17562 = cljs.core.async.close_BANG_(res);
var state_17564__$1 = (function (){var statearr_17567 = state_17564;
(statearr_17567[(7)] = inst_17557);

return statearr_17567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17564__$1,inst_17562);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0 = (function (){
var statearr_17568 = [null,null,null,null,null,null,null,null];
(statearr_17568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__);

(statearr_17568[(1)] = (1));

return statearr_17568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1 = (function (state_17564){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17564);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17569){var ex__17097__auto__ = e17569;
var statearr_17570_19657 = state_17564;
(statearr_17570_19657[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17564[(4)]))){
var statearr_17571_19658 = state_17564;
(statearr_17571_19658[(1)] = cljs.core.first((state_17564[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19659 = state_17564;
state_17564 = G__19659;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = function(state_17564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1.call(this,state_17564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17573 = f__17263__auto__();
(statearr_17573[(6)] = c__17262__auto___19655);

return statearr_17573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17574){
var vec__17575 = p__17574;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17575,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17575,(1),null);
var job = vec__17575;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19661 = n;
var __19662 = (0);
while(true){
if((__19662 < n__5636__auto___19661)){
var G__17578_19664 = type;
var G__17578_19665__$1 = (((G__17578_19664 instanceof cljs.core.Keyword))?G__17578_19664.fqn:null);
switch (G__17578_19665__$1) {
case "compute":
var c__17262__auto___19669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19662,c__17262__auto___19669,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async){
return (function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = ((function (__19662,c__17262__auto___19669,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async){
return (function (state_17591){
var state_val_17592 = (state_17591[(1)]);
if((state_val_17592 === (1))){
var state_17591__$1 = state_17591;
var statearr_17594_19670 = state_17591__$1;
(statearr_17594_19670[(2)] = null);

(statearr_17594_19670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17592 === (2))){
var state_17591__$1 = state_17591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17591__$1,(4),jobs);
} else {
if((state_val_17592 === (3))){
var inst_17589 = (state_17591[(2)]);
var state_17591__$1 = state_17591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17591__$1,inst_17589);
} else {
if((state_val_17592 === (4))){
var inst_17581 = (state_17591[(2)]);
var inst_17582 = process__$1(inst_17581);
var state_17591__$1 = state_17591;
if(cljs.core.truth_(inst_17582)){
var statearr_17624_19671 = state_17591__$1;
(statearr_17624_19671[(1)] = (5));

} else {
var statearr_17630_19672 = state_17591__$1;
(statearr_17630_19672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17592 === (5))){
var state_17591__$1 = state_17591;
var statearr_17640_19673 = state_17591__$1;
(statearr_17640_19673[(2)] = null);

(statearr_17640_19673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17592 === (6))){
var state_17591__$1 = state_17591;
var statearr_17641_19674 = state_17591__$1;
(statearr_17641_19674[(2)] = null);

(statearr_17641_19674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17592 === (7))){
var inst_17587 = (state_17591[(2)]);
var state_17591__$1 = state_17591;
var statearr_17642_19675 = state_17591__$1;
(statearr_17642_19675[(2)] = inst_17587);

(statearr_17642_19675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19662,c__17262__auto___19669,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async))
;
return ((function (__19662,switch__17093__auto__,c__17262__auto___19669,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0 = (function (){
var statearr_17643 = [null,null,null,null,null,null,null];
(statearr_17643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__);

(statearr_17643[(1)] = (1));

return statearr_17643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1 = (function (state_17591){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17591);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17645){var ex__17097__auto__ = e17645;
var statearr_17646_19679 = state_17591;
(statearr_17646_19679[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17591[(4)]))){
var statearr_17647_19680 = state_17591;
(statearr_17647_19680[(1)] = cljs.core.first((state_17591[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19681 = state_17591;
state_17591 = G__19681;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = function(state_17591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1.call(this,state_17591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__;
})()
;})(__19662,switch__17093__auto__,c__17262__auto___19669,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async))
})();
var state__17264__auto__ = (function (){var statearr_17649 = f__17263__auto__();
(statearr_17649[(6)] = c__17262__auto___19669);

return statearr_17649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(__19662,c__17262__auto___19669,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async))
);


break;
case "async":
var c__17262__auto___19683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19662,c__17262__auto___19683,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async){
return (function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = ((function (__19662,c__17262__auto___19683,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async){
return (function (state_17664){
var state_val_17665 = (state_17664[(1)]);
if((state_val_17665 === (1))){
var state_17664__$1 = state_17664;
var statearr_17666_19684 = state_17664__$1;
(statearr_17666_19684[(2)] = null);

(statearr_17666_19684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (2))){
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17664__$1,(4),jobs);
} else {
if((state_val_17665 === (3))){
var inst_17662 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17664__$1,inst_17662);
} else {
if((state_val_17665 === (4))){
var inst_17654 = (state_17664[(2)]);
var inst_17655 = async(inst_17654);
var state_17664__$1 = state_17664;
if(cljs.core.truth_(inst_17655)){
var statearr_17668_19685 = state_17664__$1;
(statearr_17668_19685[(1)] = (5));

} else {
var statearr_17669_19686 = state_17664__$1;
(statearr_17669_19686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (5))){
var state_17664__$1 = state_17664;
var statearr_17670_19687 = state_17664__$1;
(statearr_17670_19687[(2)] = null);

(statearr_17670_19687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (6))){
var state_17664__$1 = state_17664;
var statearr_17676_19688 = state_17664__$1;
(statearr_17676_19688[(2)] = null);

(statearr_17676_19688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17665 === (7))){
var inst_17660 = (state_17664[(2)]);
var state_17664__$1 = state_17664;
var statearr_17683_19689 = state_17664__$1;
(statearr_17683_19689[(2)] = inst_17660);

(statearr_17683_19689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19662,c__17262__auto___19683,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async))
;
return ((function (__19662,switch__17093__auto__,c__17262__auto___19683,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0 = (function (){
var statearr_17694 = [null,null,null,null,null,null,null];
(statearr_17694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__);

(statearr_17694[(1)] = (1));

return statearr_17694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1 = (function (state_17664){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17664);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17695){var ex__17097__auto__ = e17695;
var statearr_17696_19690 = state_17664;
(statearr_17696_19690[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17664[(4)]))){
var statearr_17697_19692 = state_17664;
(statearr_17697_19692[(1)] = cljs.core.first((state_17664[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19694 = state_17664;
state_17664 = G__19694;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = function(state_17664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1.call(this,state_17664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__;
})()
;})(__19662,switch__17093__auto__,c__17262__auto___19683,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async))
})();
var state__17264__auto__ = (function (){var statearr_17709 = f__17263__auto__();
(statearr_17709[(6)] = c__17262__auto___19683);

return statearr_17709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
});})(__19662,c__17262__auto___19683,G__17578_19664,G__17578_19665__$1,n__5636__auto___19661,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17578_19665__$1)].join('')));

}

var G__19702 = (__19662 + (1));
__19662 = G__19702;
continue;
} else {
}
break;
}

var c__17262__auto___19703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17759){
var state_val_17760 = (state_17759[(1)]);
if((state_val_17760 === (7))){
var inst_17750 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
var statearr_17766_19705 = state_17759__$1;
(statearr_17766_19705[(2)] = inst_17750);

(statearr_17766_19705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (1))){
var state_17759__$1 = state_17759;
var statearr_17767_19706 = state_17759__$1;
(statearr_17767_19706[(2)] = null);

(statearr_17767_19706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (4))){
var inst_17723 = (state_17759[(7)]);
var inst_17723__$1 = (state_17759[(2)]);
var inst_17724 = (inst_17723__$1 == null);
var state_17759__$1 = (function (){var statearr_17768 = state_17759;
(statearr_17768[(7)] = inst_17723__$1);

return statearr_17768;
})();
if(cljs.core.truth_(inst_17724)){
var statearr_17769_19707 = state_17759__$1;
(statearr_17769_19707[(1)] = (5));

} else {
var statearr_17770_19708 = state_17759__$1;
(statearr_17770_19708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (6))){
var inst_17728 = (state_17759[(8)]);
var inst_17723 = (state_17759[(7)]);
var inst_17728__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17740 = [inst_17723,inst_17728__$1];
var inst_17741 = (new cljs.core.PersistentVector(null,2,(5),inst_17734,inst_17740,null));
var state_17759__$1 = (function (){var statearr_17772 = state_17759;
(statearr_17772[(8)] = inst_17728__$1);

return statearr_17772;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17759__$1,(8),jobs,inst_17741);
} else {
if((state_val_17760 === (3))){
var inst_17752 = (state_17759[(2)]);
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17759__$1,inst_17752);
} else {
if((state_val_17760 === (2))){
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17759__$1,(4),from);
} else {
if((state_val_17760 === (9))){
var inst_17746 = (state_17759[(2)]);
var state_17759__$1 = (function (){var statearr_17774 = state_17759;
(statearr_17774[(9)] = inst_17746);

return statearr_17774;
})();
var statearr_17779_19719 = state_17759__$1;
(statearr_17779_19719[(2)] = null);

(statearr_17779_19719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (5))){
var inst_17726 = cljs.core.async.close_BANG_(jobs);
var state_17759__$1 = state_17759;
var statearr_17788_19721 = state_17759__$1;
(statearr_17788_19721[(2)] = inst_17726);

(statearr_17788_19721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17760 === (8))){
var inst_17728 = (state_17759[(8)]);
var inst_17743 = (state_17759[(2)]);
var state_17759__$1 = (function (){var statearr_17789 = state_17759;
(statearr_17789[(10)] = inst_17743);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17759__$1,(9),results,inst_17728);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0 = (function (){
var statearr_17790 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__);

(statearr_17790[(1)] = (1));

return statearr_17790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1 = (function (state_17759){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17759);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17791){var ex__17097__auto__ = e17791;
var statearr_17792_19726 = state_17759;
(statearr_17792_19726[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17759[(4)]))){
var statearr_17794_19727 = state_17759;
(statearr_17794_19727[(1)] = cljs.core.first((state_17759[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19728 = state_17759;
state_17759 = G__19728;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = function(state_17759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1.call(this,state_17759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17796 = f__17263__auto__();
(statearr_17796[(6)] = c__17262__auto___19703);

return statearr_17796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17834){
var state_val_17835 = (state_17834[(1)]);
if((state_val_17835 === (7))){
var inst_17830 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17837_19736 = state_17834__$1;
(statearr_17837_19736[(2)] = inst_17830);

(statearr_17837_19736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (20))){
var state_17834__$1 = state_17834;
var statearr_17838_19737 = state_17834__$1;
(statearr_17838_19737[(2)] = null);

(statearr_17838_19737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (1))){
var state_17834__$1 = state_17834;
var statearr_17839_19738 = state_17834__$1;
(statearr_17839_19738[(2)] = null);

(statearr_17839_19738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (4))){
var inst_17799 = (state_17834[(7)]);
var inst_17799__$1 = (state_17834[(2)]);
var inst_17800 = (inst_17799__$1 == null);
var state_17834__$1 = (function (){var statearr_17840 = state_17834;
(statearr_17840[(7)] = inst_17799__$1);

return statearr_17840;
})();
if(cljs.core.truth_(inst_17800)){
var statearr_17841_19740 = state_17834__$1;
(statearr_17841_19740[(1)] = (5));

} else {
var statearr_17843_19742 = state_17834__$1;
(statearr_17843_19742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (15))){
var inst_17812 = (state_17834[(8)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17834__$1,(18),to,inst_17812);
} else {
if((state_val_17835 === (21))){
var inst_17825 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17844_19744 = state_17834__$1;
(statearr_17844_19744[(2)] = inst_17825);

(statearr_17844_19744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (13))){
var inst_17827 = (state_17834[(2)]);
var state_17834__$1 = (function (){var statearr_17845 = state_17834;
(statearr_17845[(9)] = inst_17827);

return statearr_17845;
})();
var statearr_17846_19745 = state_17834__$1;
(statearr_17846_19745[(2)] = null);

(statearr_17846_19745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (6))){
var inst_17799 = (state_17834[(7)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17834__$1,(11),inst_17799);
} else {
if((state_val_17835 === (17))){
var inst_17820 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
if(cljs.core.truth_(inst_17820)){
var statearr_17848_19746 = state_17834__$1;
(statearr_17848_19746[(1)] = (19));

} else {
var statearr_17849_19747 = state_17834__$1;
(statearr_17849_19747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (3))){
var inst_17832 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17834__$1,inst_17832);
} else {
if((state_val_17835 === (12))){
var inst_17809 = (state_17834[(10)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17834__$1,(14),inst_17809);
} else {
if((state_val_17835 === (2))){
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17834__$1,(4),results);
} else {
if((state_val_17835 === (19))){
var state_17834__$1 = state_17834;
var statearr_17850_19748 = state_17834__$1;
(statearr_17850_19748[(2)] = null);

(statearr_17850_19748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (11))){
var inst_17809 = (state_17834[(2)]);
var state_17834__$1 = (function (){var statearr_17851 = state_17834;
(statearr_17851[(10)] = inst_17809);

return statearr_17851;
})();
var statearr_17852_19751 = state_17834__$1;
(statearr_17852_19751[(2)] = null);

(statearr_17852_19751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (9))){
var state_17834__$1 = state_17834;
var statearr_17854_19752 = state_17834__$1;
(statearr_17854_19752[(2)] = null);

(statearr_17854_19752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (5))){
var state_17834__$1 = state_17834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17855_19753 = state_17834__$1;
(statearr_17855_19753[(1)] = (8));

} else {
var statearr_17856_19754 = state_17834__$1;
(statearr_17856_19754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (14))){
var inst_17812 = (state_17834[(8)]);
var inst_17814 = (state_17834[(11)]);
var inst_17812__$1 = (state_17834[(2)]);
var inst_17813 = (inst_17812__$1 == null);
var inst_17814__$1 = cljs.core.not(inst_17813);
var state_17834__$1 = (function (){var statearr_17857 = state_17834;
(statearr_17857[(8)] = inst_17812__$1);

(statearr_17857[(11)] = inst_17814__$1);

return statearr_17857;
})();
if(inst_17814__$1){
var statearr_17858_19760 = state_17834__$1;
(statearr_17858_19760[(1)] = (15));

} else {
var statearr_17859_19761 = state_17834__$1;
(statearr_17859_19761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (16))){
var inst_17814 = (state_17834[(11)]);
var state_17834__$1 = state_17834;
var statearr_17860_19762 = state_17834__$1;
(statearr_17860_19762[(2)] = inst_17814);

(statearr_17860_19762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (10))){
var inst_17806 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17861_19764 = state_17834__$1;
(statearr_17861_19764[(2)] = inst_17806);

(statearr_17861_19764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (18))){
var inst_17817 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17863_19766 = state_17834__$1;
(statearr_17863_19766[(2)] = inst_17817);

(statearr_17863_19766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (8))){
var inst_17803 = cljs.core.async.close_BANG_(to);
var state_17834__$1 = state_17834;
var statearr_17864_19767 = state_17834__$1;
(statearr_17864_19767[(2)] = inst_17803);

(statearr_17864_19767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0 = (function (){
var statearr_17865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__);

(statearr_17865[(1)] = (1));

return statearr_17865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1 = (function (state_17834){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17834);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17866){var ex__17097__auto__ = e17866;
var statearr_17867_19769 = state_17834;
(statearr_17867_19769[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17834[(4)]))){
var statearr_17868_19770 = state_17834;
(statearr_17868_19770[(1)] = cljs.core.first((state_17834[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19771 = state_17834;
state_17834 = G__19771;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__ = function(state_17834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1.call(this,state_17834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17094__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17869 = f__17263__auto__();
(statearr_17869[(6)] = c__17262__auto__);

return statearr_17869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));

return c__17262__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17872 = arguments.length;
switch (G__17872) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__17875 = arguments.length;
switch (G__17875) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__17878 = arguments.length;
switch (G__17878) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17262__auto___19780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17905){
var state_val_17906 = (state_17905[(1)]);
if((state_val_17906 === (7))){
var inst_17901 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17907_19781 = state_17905__$1;
(statearr_17907_19781[(2)] = inst_17901);

(statearr_17907_19781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (1))){
var state_17905__$1 = state_17905;
var statearr_17908_19782 = state_17905__$1;
(statearr_17908_19782[(2)] = null);

(statearr_17908_19782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (4))){
var inst_17882 = (state_17905[(7)]);
var inst_17882__$1 = (state_17905[(2)]);
var inst_17883 = (inst_17882__$1 == null);
var state_17905__$1 = (function (){var statearr_17910 = state_17905;
(statearr_17910[(7)] = inst_17882__$1);

return statearr_17910;
})();
if(cljs.core.truth_(inst_17883)){
var statearr_17911_19784 = state_17905__$1;
(statearr_17911_19784[(1)] = (5));

} else {
var statearr_17912_19785 = state_17905__$1;
(statearr_17912_19785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (13))){
var state_17905__$1 = state_17905;
var statearr_17913_19786 = state_17905__$1;
(statearr_17913_19786[(2)] = null);

(statearr_17913_19786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (6))){
var inst_17882 = (state_17905[(7)]);
var inst_17888 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17882) : p.call(null,inst_17882));
var state_17905__$1 = state_17905;
if(cljs.core.truth_(inst_17888)){
var statearr_17914_19792 = state_17905__$1;
(statearr_17914_19792[(1)] = (9));

} else {
var statearr_17915_19799 = state_17905__$1;
(statearr_17915_19799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (3))){
var inst_17903 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17905__$1,inst_17903);
} else {
if((state_val_17906 === (12))){
var state_17905__$1 = state_17905;
var statearr_17916_19800 = state_17905__$1;
(statearr_17916_19800[(2)] = null);

(statearr_17916_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (2))){
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17905__$1,(4),ch);
} else {
if((state_val_17906 === (11))){
var inst_17882 = (state_17905[(7)]);
var inst_17892 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17905__$1,(8),inst_17892,inst_17882);
} else {
if((state_val_17906 === (9))){
var state_17905__$1 = state_17905;
var statearr_17917_19801 = state_17905__$1;
(statearr_17917_19801[(2)] = tc);

(statearr_17917_19801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (5))){
var inst_17885 = cljs.core.async.close_BANG_(tc);
var inst_17886 = cljs.core.async.close_BANG_(fc);
var state_17905__$1 = (function (){var statearr_17919 = state_17905;
(statearr_17919[(8)] = inst_17885);

return statearr_17919;
})();
var statearr_17920_19802 = state_17905__$1;
(statearr_17920_19802[(2)] = inst_17886);

(statearr_17920_19802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (14))){
var inst_17899 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17921_19804 = state_17905__$1;
(statearr_17921_19804[(2)] = inst_17899);

(statearr_17921_19804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (10))){
var state_17905__$1 = state_17905;
var statearr_17922_19805 = state_17905__$1;
(statearr_17922_19805[(2)] = fc);

(statearr_17922_19805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (8))){
var inst_17894 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
if(cljs.core.truth_(inst_17894)){
var statearr_17923_19806 = state_17905__$1;
(statearr_17923_19806[(1)] = (12));

} else {
var statearr_17924_19807 = state_17905__$1;
(statearr_17924_19807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_17905){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17905);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17926){var ex__17097__auto__ = e17926;
var statearr_17927_19808 = state_17905;
(statearr_17927_19808[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17905[(4)]))){
var statearr_17929_19809 = state_17905;
(statearr_17929_19809[(1)] = cljs.core.first((state_17905[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19810 = state_17905;
state_17905 = G__19810;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_17905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_17905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17930 = f__17263__auto__();
(statearr_17930[(6)] = c__17262__auto___19780);

return statearr_17930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17952){
var state_val_17953 = (state_17952[(1)]);
if((state_val_17953 === (7))){
var inst_17948 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
var statearr_17955_19813 = state_17952__$1;
(statearr_17955_19813[(2)] = inst_17948);

(statearr_17955_19813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (1))){
var inst_17931 = init;
var inst_17932 = inst_17931;
var state_17952__$1 = (function (){var statearr_17956 = state_17952;
(statearr_17956[(7)] = inst_17932);

return statearr_17956;
})();
var statearr_17957_19816 = state_17952__$1;
(statearr_17957_19816[(2)] = null);

(statearr_17957_19816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (4))){
var inst_17935 = (state_17952[(8)]);
var inst_17935__$1 = (state_17952[(2)]);
var inst_17936 = (inst_17935__$1 == null);
var state_17952__$1 = (function (){var statearr_17958 = state_17952;
(statearr_17958[(8)] = inst_17935__$1);

return statearr_17958;
})();
if(cljs.core.truth_(inst_17936)){
var statearr_17959_19818 = state_17952__$1;
(statearr_17959_19818[(1)] = (5));

} else {
var statearr_17960_19819 = state_17952__$1;
(statearr_17960_19819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (6))){
var inst_17932 = (state_17952[(7)]);
var inst_17935 = (state_17952[(8)]);
var inst_17939 = (state_17952[(9)]);
var inst_17939__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17932,inst_17935) : f.call(null,inst_17932,inst_17935));
var inst_17940 = cljs.core.reduced_QMARK_(inst_17939__$1);
var state_17952__$1 = (function (){var statearr_17961 = state_17952;
(statearr_17961[(9)] = inst_17939__$1);

return statearr_17961;
})();
if(inst_17940){
var statearr_17962_19821 = state_17952__$1;
(statearr_17962_19821[(1)] = (8));

} else {
var statearr_17963_19822 = state_17952__$1;
(statearr_17963_19822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (3))){
var inst_17950 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17952__$1,inst_17950);
} else {
if((state_val_17953 === (2))){
var state_17952__$1 = state_17952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17952__$1,(4),ch);
} else {
if((state_val_17953 === (9))){
var inst_17939 = (state_17952[(9)]);
var inst_17932 = inst_17939;
var state_17952__$1 = (function (){var statearr_17965 = state_17952;
(statearr_17965[(7)] = inst_17932);

return statearr_17965;
})();
var statearr_17966_19824 = state_17952__$1;
(statearr_17966_19824[(2)] = null);

(statearr_17966_19824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (5))){
var inst_17932 = (state_17952[(7)]);
var state_17952__$1 = state_17952;
var statearr_17967_19825 = state_17952__$1;
(statearr_17967_19825[(2)] = inst_17932);

(statearr_17967_19825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (10))){
var inst_17946 = (state_17952[(2)]);
var state_17952__$1 = state_17952;
var statearr_17968_19827 = state_17952__$1;
(statearr_17968_19827[(2)] = inst_17946);

(statearr_17968_19827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (8))){
var inst_17939 = (state_17952[(9)]);
var inst_17942 = cljs.core.deref(inst_17939);
var state_17952__$1 = state_17952;
var statearr_17969_19828 = state_17952__$1;
(statearr_17969_19828[(2)] = inst_17942);

(statearr_17969_19828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17094__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17094__auto____0 = (function (){
var statearr_17970 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17970[(0)] = cljs$core$async$reduce_$_state_machine__17094__auto__);

(statearr_17970[(1)] = (1));

return statearr_17970;
});
var cljs$core$async$reduce_$_state_machine__17094__auto____1 = (function (state_17952){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17952);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17971){var ex__17097__auto__ = e17971;
var statearr_17972_19829 = state_17952;
(statearr_17972_19829[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17952[(4)]))){
var statearr_17973_19830 = state_17952;
(statearr_17973_19830[(1)] = cljs.core.first((state_17952[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19831 = state_17952;
state_17952 = G__19831;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17094__auto__ = function(state_17952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17094__auto____1.call(this,state_17952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17094__auto____0;
cljs$core$async$reduce_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17094__auto____1;
return cljs$core$async$reduce_$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17974 = f__17263__auto__();
(statearr_17974[(6)] = c__17262__auto__);

return statearr_17974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));

return c__17262__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_17981){
var state_val_17982 = (state_17981[(1)]);
if((state_val_17982 === (1))){
var inst_17976 = cljs.core.async.reduce(f__$1,init,ch);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17981__$1,(2),inst_17976);
} else {
if((state_val_17982 === (2))){
var inst_17978 = (state_17981[(2)]);
var inst_17979 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17978) : f__$1.call(null,inst_17978));
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17981__$1,inst_17979);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17094__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17094__auto____0 = (function (){
var statearr_17983 = [null,null,null,null,null,null,null];
(statearr_17983[(0)] = cljs$core$async$transduce_$_state_machine__17094__auto__);

(statearr_17983[(1)] = (1));

return statearr_17983;
});
var cljs$core$async$transduce_$_state_machine__17094__auto____1 = (function (state_17981){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_17981);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e17984){var ex__17097__auto__ = e17984;
var statearr_17985_19842 = state_17981;
(statearr_17985_19842[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_17981[(4)]))){
var statearr_17986_19843 = state_17981;
(statearr_17986_19843[(1)] = cljs.core.first((state_17981[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19848 = state_17981;
state_17981 = G__19848;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17094__auto__ = function(state_17981){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17094__auto____1.call(this,state_17981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17094__auto____0;
cljs$core$async$transduce_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17094__auto____1;
return cljs$core$async$transduce_$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_17988 = f__17263__auto__();
(statearr_17988[(6)] = c__17262__auto__);

return statearr_17988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));

return c__17262__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__17990 = arguments.length;
switch (G__17990) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_18016){
var state_val_18017 = (state_18016[(1)]);
if((state_val_18017 === (7))){
var inst_17998 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18018_19853 = state_18016__$1;
(statearr_18018_19853[(2)] = inst_17998);

(statearr_18018_19853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (1))){
var inst_17992 = cljs.core.seq(coll);
var inst_17993 = inst_17992;
var state_18016__$1 = (function (){var statearr_18019 = state_18016;
(statearr_18019[(7)] = inst_17993);

return statearr_18019;
})();
var statearr_18020_19858 = state_18016__$1;
(statearr_18020_19858[(2)] = null);

(statearr_18020_19858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (4))){
var inst_17993 = (state_18016[(7)]);
var inst_17996 = cljs.core.first(inst_17993);
var state_18016__$1 = state_18016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18016__$1,(7),ch,inst_17996);
} else {
if((state_val_18017 === (13))){
var inst_18010 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18022_19859 = state_18016__$1;
(statearr_18022_19859[(2)] = inst_18010);

(statearr_18022_19859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (6))){
var inst_18001 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_18001)){
var statearr_18023_19860 = state_18016__$1;
(statearr_18023_19860[(1)] = (8));

} else {
var statearr_18024_19861 = state_18016__$1;
(statearr_18024_19861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (3))){
var inst_18014 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18016__$1,inst_18014);
} else {
if((state_val_18017 === (12))){
var state_18016__$1 = state_18016;
var statearr_18025_19866 = state_18016__$1;
(statearr_18025_19866[(2)] = null);

(statearr_18025_19866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (2))){
var inst_17993 = (state_18016[(7)]);
var state_18016__$1 = state_18016;
if(cljs.core.truth_(inst_17993)){
var statearr_18026_19873 = state_18016__$1;
(statearr_18026_19873[(1)] = (4));

} else {
var statearr_18027_19874 = state_18016__$1;
(statearr_18027_19874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (11))){
var inst_18007 = cljs.core.async.close_BANG_(ch);
var state_18016__$1 = state_18016;
var statearr_18028_19878 = state_18016__$1;
(statearr_18028_19878[(2)] = inst_18007);

(statearr_18028_19878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (9))){
var state_18016__$1 = state_18016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18030_19880 = state_18016__$1;
(statearr_18030_19880[(1)] = (11));

} else {
var statearr_18031_19883 = state_18016__$1;
(statearr_18031_19883[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (5))){
var inst_17993 = (state_18016[(7)]);
var state_18016__$1 = state_18016;
var statearr_18032_19884 = state_18016__$1;
(statearr_18032_19884[(2)] = inst_17993);

(statearr_18032_19884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (10))){
var inst_18012 = (state_18016[(2)]);
var state_18016__$1 = state_18016;
var statearr_18033_19885 = state_18016__$1;
(statearr_18033_19885[(2)] = inst_18012);

(statearr_18033_19885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18017 === (8))){
var inst_17993 = (state_18016[(7)]);
var inst_18003 = cljs.core.next(inst_17993);
var inst_17993__$1 = inst_18003;
var state_18016__$1 = (function (){var statearr_18034 = state_18016;
(statearr_18034[(7)] = inst_17993__$1);

return statearr_18034;
})();
var statearr_18035_19889 = state_18016__$1;
(statearr_18035_19889[(2)] = null);

(statearr_18035_19889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_18036 = [null,null,null,null,null,null,null,null];
(statearr_18036[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_18036[(1)] = (1));

return statearr_18036;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_18016){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_18016);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e18037){var ex__17097__auto__ = e18037;
var statearr_18038_19894 = state_18016;
(statearr_18038_19894[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_18016[(4)]))){
var statearr_18040_19895 = state_18016;
(statearr_18040_19895[(1)] = cljs.core.first((state_18016[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19899 = state_18016;
state_18016 = G__19899;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_18016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_18016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_18041 = f__17263__auto__();
(statearr_18041[(6)] = c__17262__auto__);

return statearr_18041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));

return c__17262__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18043 = arguments.length;
switch (G__18043) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19910 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19910(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19911 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19911(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19918 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19918(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19921 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19921(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18049 = (function (ch,cs,meta18050){
this.ch = ch;
this.cs = cs;
this.meta18050 = meta18050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18051,meta18050__$1){
var self__ = this;
var _18051__$1 = this;
return (new cljs.core.async.t_cljs$core$async18049(self__.ch,self__.cs,meta18050__$1));
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18051){
var self__ = this;
var _18051__$1 = this;
return self__.meta18050;
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18050","meta18050",215511449,null)], null);
}));

(cljs.core.async.t_cljs$core$async18049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18049");

(cljs.core.async.t_cljs$core$async18049.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18049.
 */
cljs.core.async.__GT_t_cljs$core$async18049 = (function cljs$core$async$__GT_t_cljs$core$async18049(ch,cs,meta18050){
return (new cljs.core.async.t_cljs$core$async18049(ch,cs,meta18050));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18049(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17262__auto___19923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_18188){
var state_val_18189 = (state_18188[(1)]);
if((state_val_18189 === (7))){
var inst_18184 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18191_19924 = state_18188__$1;
(statearr_18191_19924[(2)] = inst_18184);

(statearr_18191_19924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (20))){
var inst_18088 = (state_18188[(7)]);
var inst_18100 = cljs.core.first(inst_18088);
var inst_18101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18100,(0),null);
var inst_18102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18100,(1),null);
var state_18188__$1 = (function (){var statearr_18192 = state_18188;
(statearr_18192[(8)] = inst_18101);

return statearr_18192;
})();
if(cljs.core.truth_(inst_18102)){
var statearr_18193_19930 = state_18188__$1;
(statearr_18193_19930[(1)] = (22));

} else {
var statearr_18194_19931 = state_18188__$1;
(statearr_18194_19931[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (27))){
var inst_18137 = (state_18188[(9)]);
var inst_18132 = (state_18188[(10)]);
var inst_18130 = (state_18188[(11)]);
var inst_18056 = (state_18188[(12)]);
var inst_18137__$1 = cljs.core._nth(inst_18130,inst_18132);
var inst_18138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18137__$1,inst_18056,done);
var state_18188__$1 = (function (){var statearr_18195 = state_18188;
(statearr_18195[(9)] = inst_18137__$1);

return statearr_18195;
})();
if(cljs.core.truth_(inst_18138)){
var statearr_18196_19937 = state_18188__$1;
(statearr_18196_19937[(1)] = (30));

} else {
var statearr_18197_19938 = state_18188__$1;
(statearr_18197_19938[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (1))){
var state_18188__$1 = state_18188;
var statearr_18198_19939 = state_18188__$1;
(statearr_18198_19939[(2)] = null);

(statearr_18198_19939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (24))){
var inst_18088 = (state_18188[(7)]);
var inst_18107 = (state_18188[(2)]);
var inst_18108 = cljs.core.next(inst_18088);
var inst_18065 = inst_18108;
var inst_18066 = null;
var inst_18067 = (0);
var inst_18068 = (0);
var state_18188__$1 = (function (){var statearr_18200 = state_18188;
(statearr_18200[(13)] = inst_18066);

(statearr_18200[(14)] = inst_18068);

(statearr_18200[(15)] = inst_18065);

(statearr_18200[(16)] = inst_18067);

(statearr_18200[(17)] = inst_18107);

return statearr_18200;
})();
var statearr_18201_19940 = state_18188__$1;
(statearr_18201_19940[(2)] = null);

(statearr_18201_19940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (39))){
var state_18188__$1 = state_18188;
var statearr_18207_19941 = state_18188__$1;
(statearr_18207_19941[(2)] = null);

(statearr_18207_19941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (4))){
var inst_18056 = (state_18188[(12)]);
var inst_18056__$1 = (state_18188[(2)]);
var inst_18057 = (inst_18056__$1 == null);
var state_18188__$1 = (function (){var statearr_18208 = state_18188;
(statearr_18208[(12)] = inst_18056__$1);

return statearr_18208;
})();
if(cljs.core.truth_(inst_18057)){
var statearr_18209_19942 = state_18188__$1;
(statearr_18209_19942[(1)] = (5));

} else {
var statearr_18210_19943 = state_18188__$1;
(statearr_18210_19943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (15))){
var inst_18066 = (state_18188[(13)]);
var inst_18068 = (state_18188[(14)]);
var inst_18065 = (state_18188[(15)]);
var inst_18067 = (state_18188[(16)]);
var inst_18084 = (state_18188[(2)]);
var inst_18085 = (inst_18068 + (1));
var tmp18202 = inst_18066;
var tmp18203 = inst_18065;
var tmp18204 = inst_18067;
var inst_18065__$1 = tmp18203;
var inst_18066__$1 = tmp18202;
var inst_18067__$1 = tmp18204;
var inst_18068__$1 = inst_18085;
var state_18188__$1 = (function (){var statearr_18211 = state_18188;
(statearr_18211[(13)] = inst_18066__$1);

(statearr_18211[(18)] = inst_18084);

(statearr_18211[(14)] = inst_18068__$1);

(statearr_18211[(15)] = inst_18065__$1);

(statearr_18211[(16)] = inst_18067__$1);

return statearr_18211;
})();
var statearr_18212_19944 = state_18188__$1;
(statearr_18212_19944[(2)] = null);

(statearr_18212_19944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (21))){
var inst_18111 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18216_19945 = state_18188__$1;
(statearr_18216_19945[(2)] = inst_18111);

(statearr_18216_19945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (31))){
var inst_18137 = (state_18188[(9)]);
var inst_18141 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18137);
var state_18188__$1 = state_18188;
var statearr_18219_19947 = state_18188__$1;
(statearr_18219_19947[(2)] = inst_18141);

(statearr_18219_19947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (32))){
var inst_18131 = (state_18188[(19)]);
var inst_18132 = (state_18188[(10)]);
var inst_18130 = (state_18188[(11)]);
var inst_18129 = (state_18188[(20)]);
var inst_18143 = (state_18188[(2)]);
var inst_18145 = (inst_18132 + (1));
var tmp18213 = inst_18131;
var tmp18214 = inst_18130;
var tmp18215 = inst_18129;
var inst_18129__$1 = tmp18215;
var inst_18130__$1 = tmp18214;
var inst_18131__$1 = tmp18213;
var inst_18132__$1 = inst_18145;
var state_18188__$1 = (function (){var statearr_18220 = state_18188;
(statearr_18220[(19)] = inst_18131__$1);

(statearr_18220[(10)] = inst_18132__$1);

(statearr_18220[(11)] = inst_18130__$1);

(statearr_18220[(20)] = inst_18129__$1);

(statearr_18220[(21)] = inst_18143);

return statearr_18220;
})();
var statearr_18221_19949 = state_18188__$1;
(statearr_18221_19949[(2)] = null);

(statearr_18221_19949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (40))){
var inst_18157 = (state_18188[(22)]);
var inst_18161 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18157);
var state_18188__$1 = state_18188;
var statearr_18222_19950 = state_18188__$1;
(statearr_18222_19950[(2)] = inst_18161);

(statearr_18222_19950[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (33))){
var inst_18148 = (state_18188[(23)]);
var inst_18150 = cljs.core.chunked_seq_QMARK_(inst_18148);
var state_18188__$1 = state_18188;
if(inst_18150){
var statearr_18223_19951 = state_18188__$1;
(statearr_18223_19951[(1)] = (36));

} else {
var statearr_18224_19952 = state_18188__$1;
(statearr_18224_19952[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (13))){
var inst_18077 = (state_18188[(24)]);
var inst_18081 = cljs.core.async.close_BANG_(inst_18077);
var state_18188__$1 = state_18188;
var statearr_18225_19953 = state_18188__$1;
(statearr_18225_19953[(2)] = inst_18081);

(statearr_18225_19953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (22))){
var inst_18101 = (state_18188[(8)]);
var inst_18104 = cljs.core.async.close_BANG_(inst_18101);
var state_18188__$1 = state_18188;
var statearr_18226_19954 = state_18188__$1;
(statearr_18226_19954[(2)] = inst_18104);

(statearr_18226_19954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (36))){
var inst_18148 = (state_18188[(23)]);
var inst_18152 = cljs.core.chunk_first(inst_18148);
var inst_18153 = cljs.core.chunk_rest(inst_18148);
var inst_18154 = cljs.core.count(inst_18152);
var inst_18129 = inst_18153;
var inst_18130 = inst_18152;
var inst_18131 = inst_18154;
var inst_18132 = (0);
var state_18188__$1 = (function (){var statearr_18227 = state_18188;
(statearr_18227[(19)] = inst_18131);

(statearr_18227[(10)] = inst_18132);

(statearr_18227[(11)] = inst_18130);

(statearr_18227[(20)] = inst_18129);

return statearr_18227;
})();
var statearr_18228_19962 = state_18188__$1;
(statearr_18228_19962[(2)] = null);

(statearr_18228_19962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (41))){
var inst_18148 = (state_18188[(23)]);
var inst_18163 = (state_18188[(2)]);
var inst_18164 = cljs.core.next(inst_18148);
var inst_18129 = inst_18164;
var inst_18130 = null;
var inst_18131 = (0);
var inst_18132 = (0);
var state_18188__$1 = (function (){var statearr_18229 = state_18188;
(statearr_18229[(19)] = inst_18131);

(statearr_18229[(10)] = inst_18132);

(statearr_18229[(11)] = inst_18130);

(statearr_18229[(20)] = inst_18129);

(statearr_18229[(25)] = inst_18163);

return statearr_18229;
})();
var statearr_18231_19966 = state_18188__$1;
(statearr_18231_19966[(2)] = null);

(statearr_18231_19966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (43))){
var state_18188__$1 = state_18188;
var statearr_18233_19967 = state_18188__$1;
(statearr_18233_19967[(2)] = null);

(statearr_18233_19967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (29))){
var inst_18172 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18234_19969 = state_18188__$1;
(statearr_18234_19969[(2)] = inst_18172);

(statearr_18234_19969[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (44))){
var inst_18181 = (state_18188[(2)]);
var state_18188__$1 = (function (){var statearr_18235 = state_18188;
(statearr_18235[(26)] = inst_18181);

return statearr_18235;
})();
var statearr_18236_19970 = state_18188__$1;
(statearr_18236_19970[(2)] = null);

(statearr_18236_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (6))){
var inst_18121 = (state_18188[(27)]);
var inst_18120 = cljs.core.deref(cs);
var inst_18121__$1 = cljs.core.keys(inst_18120);
var inst_18122 = cljs.core.count(inst_18121__$1);
var inst_18123 = cljs.core.reset_BANG_(dctr,inst_18122);
var inst_18128 = cljs.core.seq(inst_18121__$1);
var inst_18129 = inst_18128;
var inst_18130 = null;
var inst_18131 = (0);
var inst_18132 = (0);
var state_18188__$1 = (function (){var statearr_18237 = state_18188;
(statearr_18237[(28)] = inst_18123);

(statearr_18237[(19)] = inst_18131);

(statearr_18237[(10)] = inst_18132);

(statearr_18237[(11)] = inst_18130);

(statearr_18237[(20)] = inst_18129);

(statearr_18237[(27)] = inst_18121__$1);

return statearr_18237;
})();
var statearr_18238_19973 = state_18188__$1;
(statearr_18238_19973[(2)] = null);

(statearr_18238_19973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (28))){
var inst_18148 = (state_18188[(23)]);
var inst_18129 = (state_18188[(20)]);
var inst_18148__$1 = cljs.core.seq(inst_18129);
var state_18188__$1 = (function (){var statearr_18239 = state_18188;
(statearr_18239[(23)] = inst_18148__$1);

return statearr_18239;
})();
if(inst_18148__$1){
var statearr_18240_19974 = state_18188__$1;
(statearr_18240_19974[(1)] = (33));

} else {
var statearr_18241_19976 = state_18188__$1;
(statearr_18241_19976[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (25))){
var inst_18131 = (state_18188[(19)]);
var inst_18132 = (state_18188[(10)]);
var inst_18134 = (inst_18132 < inst_18131);
var inst_18135 = inst_18134;
var state_18188__$1 = state_18188;
if(cljs.core.truth_(inst_18135)){
var statearr_18242_19980 = state_18188__$1;
(statearr_18242_19980[(1)] = (27));

} else {
var statearr_18243_19981 = state_18188__$1;
(statearr_18243_19981[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (34))){
var state_18188__$1 = state_18188;
var statearr_18244_19982 = state_18188__$1;
(statearr_18244_19982[(2)] = null);

(statearr_18244_19982[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (17))){
var state_18188__$1 = state_18188;
var statearr_18245_19983 = state_18188__$1;
(statearr_18245_19983[(2)] = null);

(statearr_18245_19983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (3))){
var inst_18186 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18188__$1,inst_18186);
} else {
if((state_val_18189 === (12))){
var inst_18116 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18249_19984 = state_18188__$1;
(statearr_18249_19984[(2)] = inst_18116);

(statearr_18249_19984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (2))){
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18188__$1,(4),ch);
} else {
if((state_val_18189 === (23))){
var state_18188__$1 = state_18188;
var statearr_18251_19985 = state_18188__$1;
(statearr_18251_19985[(2)] = null);

(statearr_18251_19985[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (35))){
var inst_18170 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18254_19986 = state_18188__$1;
(statearr_18254_19986[(2)] = inst_18170);

(statearr_18254_19986[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (19))){
var inst_18088 = (state_18188[(7)]);
var inst_18092 = cljs.core.chunk_first(inst_18088);
var inst_18093 = cljs.core.chunk_rest(inst_18088);
var inst_18094 = cljs.core.count(inst_18092);
var inst_18065 = inst_18093;
var inst_18066 = inst_18092;
var inst_18067 = inst_18094;
var inst_18068 = (0);
var state_18188__$1 = (function (){var statearr_18258 = state_18188;
(statearr_18258[(13)] = inst_18066);

(statearr_18258[(14)] = inst_18068);

(statearr_18258[(15)] = inst_18065);

(statearr_18258[(16)] = inst_18067);

return statearr_18258;
})();
var statearr_18259_19987 = state_18188__$1;
(statearr_18259_19987[(2)] = null);

(statearr_18259_19987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (11))){
var inst_18065 = (state_18188[(15)]);
var inst_18088 = (state_18188[(7)]);
var inst_18088__$1 = cljs.core.seq(inst_18065);
var state_18188__$1 = (function (){var statearr_18260 = state_18188;
(statearr_18260[(7)] = inst_18088__$1);

return statearr_18260;
})();
if(inst_18088__$1){
var statearr_18261_19989 = state_18188__$1;
(statearr_18261_19989[(1)] = (16));

} else {
var statearr_18262_19990 = state_18188__$1;
(statearr_18262_19990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (9))){
var inst_18118 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18263_19998 = state_18188__$1;
(statearr_18263_19998[(2)] = inst_18118);

(statearr_18263_19998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (5))){
var inst_18063 = cljs.core.deref(cs);
var inst_18064 = cljs.core.seq(inst_18063);
var inst_18065 = inst_18064;
var inst_18066 = null;
var inst_18067 = (0);
var inst_18068 = (0);
var state_18188__$1 = (function (){var statearr_18265 = state_18188;
(statearr_18265[(13)] = inst_18066);

(statearr_18265[(14)] = inst_18068);

(statearr_18265[(15)] = inst_18065);

(statearr_18265[(16)] = inst_18067);

return statearr_18265;
})();
var statearr_18268_20004 = state_18188__$1;
(statearr_18268_20004[(2)] = null);

(statearr_18268_20004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (14))){
var state_18188__$1 = state_18188;
var statearr_18270_20008 = state_18188__$1;
(statearr_18270_20008[(2)] = null);

(statearr_18270_20008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (45))){
var inst_18178 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18272_20009 = state_18188__$1;
(statearr_18272_20009[(2)] = inst_18178);

(statearr_18272_20009[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (26))){
var inst_18121 = (state_18188[(27)]);
var inst_18174 = (state_18188[(2)]);
var inst_18175 = cljs.core.seq(inst_18121);
var state_18188__$1 = (function (){var statearr_18276 = state_18188;
(statearr_18276[(29)] = inst_18174);

return statearr_18276;
})();
if(inst_18175){
var statearr_18277_20012 = state_18188__$1;
(statearr_18277_20012[(1)] = (42));

} else {
var statearr_18279_20013 = state_18188__$1;
(statearr_18279_20013[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (16))){
var inst_18088 = (state_18188[(7)]);
var inst_18090 = cljs.core.chunked_seq_QMARK_(inst_18088);
var state_18188__$1 = state_18188;
if(inst_18090){
var statearr_18280_20014 = state_18188__$1;
(statearr_18280_20014[(1)] = (19));

} else {
var statearr_18283_20015 = state_18188__$1;
(statearr_18283_20015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (38))){
var inst_18167 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18285_20016 = state_18188__$1;
(statearr_18285_20016[(2)] = inst_18167);

(statearr_18285_20016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (30))){
var state_18188__$1 = state_18188;
var statearr_18286_20017 = state_18188__$1;
(statearr_18286_20017[(2)] = null);

(statearr_18286_20017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (10))){
var inst_18066 = (state_18188[(13)]);
var inst_18068 = (state_18188[(14)]);
var inst_18076 = cljs.core._nth(inst_18066,inst_18068);
var inst_18077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18076,(0),null);
var inst_18079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18076,(1),null);
var state_18188__$1 = (function (){var statearr_18290 = state_18188;
(statearr_18290[(24)] = inst_18077);

return statearr_18290;
})();
if(cljs.core.truth_(inst_18079)){
var statearr_18292_20025 = state_18188__$1;
(statearr_18292_20025[(1)] = (13));

} else {
var statearr_18294_20026 = state_18188__$1;
(statearr_18294_20026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (18))){
var inst_18114 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18295_20027 = state_18188__$1;
(statearr_18295_20027[(2)] = inst_18114);

(statearr_18295_20027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (42))){
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18188__$1,(45),dchan);
} else {
if((state_val_18189 === (37))){
var inst_18148 = (state_18188[(23)]);
var inst_18157 = (state_18188[(22)]);
var inst_18056 = (state_18188[(12)]);
var inst_18157__$1 = cljs.core.first(inst_18148);
var inst_18158 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18157__$1,inst_18056,done);
var state_18188__$1 = (function (){var statearr_18299 = state_18188;
(statearr_18299[(22)] = inst_18157__$1);

return statearr_18299;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18301_20034 = state_18188__$1;
(statearr_18301_20034[(1)] = (39));

} else {
var statearr_18302_20035 = state_18188__$1;
(statearr_18302_20035[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (8))){
var inst_18068 = (state_18188[(14)]);
var inst_18067 = (state_18188[(16)]);
var inst_18070 = (inst_18068 < inst_18067);
var inst_18071 = inst_18070;
var state_18188__$1 = state_18188;
if(cljs.core.truth_(inst_18071)){
var statearr_18304_20036 = state_18188__$1;
(statearr_18304_20036[(1)] = (10));

} else {
var statearr_18306_20040 = state_18188__$1;
(statearr_18306_20040[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17094__auto__ = null;
var cljs$core$async$mult_$_state_machine__17094__auto____0 = (function (){
var statearr_18309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18309[(0)] = cljs$core$async$mult_$_state_machine__17094__auto__);

(statearr_18309[(1)] = (1));

return statearr_18309;
});
var cljs$core$async$mult_$_state_machine__17094__auto____1 = (function (state_18188){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_18188);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e18310){var ex__17097__auto__ = e18310;
var statearr_18313_20041 = state_18188;
(statearr_18313_20041[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_18188[(4)]))){
var statearr_18315_20042 = state_18188;
(statearr_18315_20042[(1)] = cljs.core.first((state_18188[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20043 = state_18188;
state_18188 = G__20043;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17094__auto__ = function(state_18188){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17094__auto____1.call(this,state_18188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17094__auto____0;
cljs$core$async$mult_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17094__auto____1;
return cljs$core$async$mult_$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_18318 = f__17263__auto__();
(statearr_18318[(6)] = c__17262__auto___19923);

return statearr_18318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18326 = arguments.length;
switch (G__18326) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20045 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20045(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20046 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20046(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20047 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20047(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20054 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20054(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20055 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20055(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20056 = arguments.length;
var i__5770__auto___20057 = (0);
while(true){
if((i__5770__auto___20057 < len__5769__auto___20056)){
args__5775__auto__.push((arguments[i__5770__auto___20057]));

var G__20058 = (i__5770__auto___20057 + (1));
i__5770__auto___20057 = G__20058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18390){
var map__18391 = p__18390;
var map__18391__$1 = cljs.core.__destructure_map(map__18391);
var opts = map__18391__$1;
var statearr_18392_20059 = state;
(statearr_18392_20059[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18394_20060 = state;
(statearr_18394_20060[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18398_20061 = state;
(statearr_18398_20061[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18382){
var G__18383 = cljs.core.first(seq18382);
var seq18382__$1 = cljs.core.next(seq18382);
var G__18384 = cljs.core.first(seq18382__$1);
var seq18382__$2 = cljs.core.next(seq18382__$1);
var G__18385 = cljs.core.first(seq18382__$2);
var seq18382__$3 = cljs.core.next(seq18382__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18383,G__18384,G__18385,seq18382__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18423 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18424){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18424 = meta18424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18425,meta18424__$1){
var self__ = this;
var _18425__$1 = this;
return (new cljs.core.async.t_cljs$core$async18423(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18424__$1));
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18425){
var self__ = this;
var _18425__$1 = this;
return self__.meta18424;
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18423.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18424","meta18424",-461057077,null)], null);
}));

(cljs.core.async.t_cljs$core$async18423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18423");

(cljs.core.async.t_cljs$core$async18423.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18423.
 */
cljs.core.async.__GT_t_cljs$core$async18423 = (function cljs$core$async$__GT_t_cljs$core$async18423(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18424){
return (new cljs.core.async.t_cljs$core$async18423(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18424));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18423(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17262__auto___20075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_18532){
var state_val_18533 = (state_18532[(1)]);
if((state_val_18533 === (7))){
var inst_18487 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
if(cljs.core.truth_(inst_18487)){
var statearr_18538_20079 = state_18532__$1;
(statearr_18538_20079[(1)] = (8));

} else {
var statearr_18542_20080 = state_18532__$1;
(statearr_18542_20080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (20))){
var inst_18480 = (state_18532[(7)]);
var state_18532__$1 = state_18532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18532__$1,(23),out,inst_18480);
} else {
if((state_val_18533 === (1))){
var inst_18459 = calc_state();
var inst_18460 = cljs.core.__destructure_map(inst_18459);
var inst_18462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18460,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18460,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18460,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18465 = inst_18459;
var state_18532__$1 = (function (){var statearr_18547 = state_18532;
(statearr_18547[(8)] = inst_18462);

(statearr_18547[(9)] = inst_18465);

(statearr_18547[(10)] = inst_18464);

(statearr_18547[(11)] = inst_18463);

return statearr_18547;
})();
var statearr_18548_20081 = state_18532__$1;
(statearr_18548_20081[(2)] = null);

(statearr_18548_20081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (24))){
var inst_18468 = (state_18532[(12)]);
var inst_18465 = inst_18468;
var state_18532__$1 = (function (){var statearr_18553 = state_18532;
(statearr_18553[(9)] = inst_18465);

return statearr_18553;
})();
var statearr_18555_20082 = state_18532__$1;
(statearr_18555_20082[(2)] = null);

(statearr_18555_20082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (4))){
var inst_18482 = (state_18532[(13)]);
var inst_18480 = (state_18532[(7)]);
var inst_18478 = (state_18532[(2)]);
var inst_18480__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18478,(0),null);
var inst_18481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18478,(1),null);
var inst_18482__$1 = (inst_18480__$1 == null);
var state_18532__$1 = (function (){var statearr_18556 = state_18532;
(statearr_18556[(14)] = inst_18481);

(statearr_18556[(13)] = inst_18482__$1);

(statearr_18556[(7)] = inst_18480__$1);

return statearr_18556;
})();
if(cljs.core.truth_(inst_18482__$1)){
var statearr_18557_20086 = state_18532__$1;
(statearr_18557_20086[(1)] = (5));

} else {
var statearr_18558_20087 = state_18532__$1;
(statearr_18558_20087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (15))){
var inst_18469 = (state_18532[(15)]);
var inst_18503 = (state_18532[(16)]);
var inst_18503__$1 = cljs.core.empty_QMARK_(inst_18469);
var state_18532__$1 = (function (){var statearr_18559 = state_18532;
(statearr_18559[(16)] = inst_18503__$1);

return statearr_18559;
})();
if(inst_18503__$1){
var statearr_18560_20088 = state_18532__$1;
(statearr_18560_20088[(1)] = (17));

} else {
var statearr_18561_20089 = state_18532__$1;
(statearr_18561_20089[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (21))){
var inst_18468 = (state_18532[(12)]);
var inst_18465 = inst_18468;
var state_18532__$1 = (function (){var statearr_18562 = state_18532;
(statearr_18562[(9)] = inst_18465);

return statearr_18562;
})();
var statearr_18563_20090 = state_18532__$1;
(statearr_18563_20090[(2)] = null);

(statearr_18563_20090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (13))){
var inst_18495 = (state_18532[(2)]);
var inst_18496 = calc_state();
var inst_18465 = inst_18496;
var state_18532__$1 = (function (){var statearr_18564 = state_18532;
(statearr_18564[(9)] = inst_18465);

(statearr_18564[(17)] = inst_18495);

return statearr_18564;
})();
var statearr_18565_20091 = state_18532__$1;
(statearr_18565_20091[(2)] = null);

(statearr_18565_20091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (22))){
var inst_18525 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18566_20092 = state_18532__$1;
(statearr_18566_20092[(2)] = inst_18525);

(statearr_18566_20092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (6))){
var inst_18481 = (state_18532[(14)]);
var inst_18485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18481,change);
var state_18532__$1 = state_18532;
var statearr_18567_20093 = state_18532__$1;
(statearr_18567_20093[(2)] = inst_18485);

(statearr_18567_20093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (25))){
var state_18532__$1 = state_18532;
var statearr_18568_20094 = state_18532__$1;
(statearr_18568_20094[(2)] = null);

(statearr_18568_20094[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (17))){
var inst_18481 = (state_18532[(14)]);
var inst_18470 = (state_18532[(18)]);
var inst_18506 = (inst_18470.cljs$core$IFn$_invoke$arity$1 ? inst_18470.cljs$core$IFn$_invoke$arity$1(inst_18481) : inst_18470.call(null,inst_18481));
var inst_18507 = cljs.core.not(inst_18506);
var state_18532__$1 = state_18532;
var statearr_18569_20095 = state_18532__$1;
(statearr_18569_20095[(2)] = inst_18507);

(statearr_18569_20095[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (3))){
var inst_18529 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18532__$1,inst_18529);
} else {
if((state_val_18533 === (12))){
var state_18532__$1 = state_18532;
var statearr_18570_20096 = state_18532__$1;
(statearr_18570_20096[(2)] = null);

(statearr_18570_20096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (2))){
var inst_18465 = (state_18532[(9)]);
var inst_18468 = (state_18532[(12)]);
var inst_18468__$1 = cljs.core.__destructure_map(inst_18465);
var inst_18469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18468__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18468__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18468__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18532__$1 = (function (){var statearr_18571 = state_18532;
(statearr_18571[(15)] = inst_18469);

(statearr_18571[(12)] = inst_18468__$1);

(statearr_18571[(18)] = inst_18470);

return statearr_18571;
})();
return cljs.core.async.ioc_alts_BANG_(state_18532__$1,(4),inst_18471);
} else {
if((state_val_18533 === (23))){
var inst_18516 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
if(cljs.core.truth_(inst_18516)){
var statearr_18572_20097 = state_18532__$1;
(statearr_18572_20097[(1)] = (24));

} else {
var statearr_18573_20098 = state_18532__$1;
(statearr_18573_20098[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (19))){
var inst_18511 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18574_20099 = state_18532__$1;
(statearr_18574_20099[(2)] = inst_18511);

(statearr_18574_20099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (11))){
var inst_18481 = (state_18532[(14)]);
var inst_18492 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18481);
var state_18532__$1 = state_18532;
var statearr_18575_20100 = state_18532__$1;
(statearr_18575_20100[(2)] = inst_18492);

(statearr_18575_20100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (9))){
var inst_18469 = (state_18532[(15)]);
var inst_18481 = (state_18532[(14)]);
var inst_18499 = (state_18532[(19)]);
var inst_18499__$1 = (inst_18469.cljs$core$IFn$_invoke$arity$1 ? inst_18469.cljs$core$IFn$_invoke$arity$1(inst_18481) : inst_18469.call(null,inst_18481));
var state_18532__$1 = (function (){var statearr_18576 = state_18532;
(statearr_18576[(19)] = inst_18499__$1);

return statearr_18576;
})();
if(cljs.core.truth_(inst_18499__$1)){
var statearr_18577_20101 = state_18532__$1;
(statearr_18577_20101[(1)] = (14));

} else {
var statearr_18578_20102 = state_18532__$1;
(statearr_18578_20102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (5))){
var inst_18482 = (state_18532[(13)]);
var state_18532__$1 = state_18532;
var statearr_18579_20103 = state_18532__$1;
(statearr_18579_20103[(2)] = inst_18482);

(statearr_18579_20103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (14))){
var inst_18499 = (state_18532[(19)]);
var state_18532__$1 = state_18532;
var statearr_18580_20104 = state_18532__$1;
(statearr_18580_20104[(2)] = inst_18499);

(statearr_18580_20104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (26))){
var inst_18521 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18583_20106 = state_18532__$1;
(statearr_18583_20106[(2)] = inst_18521);

(statearr_18583_20106[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (16))){
var inst_18513 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
if(cljs.core.truth_(inst_18513)){
var statearr_18584_20107 = state_18532__$1;
(statearr_18584_20107[(1)] = (20));

} else {
var statearr_18585_20108 = state_18532__$1;
(statearr_18585_20108[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (10))){
var inst_18527 = (state_18532[(2)]);
var state_18532__$1 = state_18532;
var statearr_18586_20109 = state_18532__$1;
(statearr_18586_20109[(2)] = inst_18527);

(statearr_18586_20109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (18))){
var inst_18503 = (state_18532[(16)]);
var state_18532__$1 = state_18532;
var statearr_18587_20110 = state_18532__$1;
(statearr_18587_20110[(2)] = inst_18503);

(statearr_18587_20110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18533 === (8))){
var inst_18480 = (state_18532[(7)]);
var inst_18489 = (inst_18480 == null);
var state_18532__$1 = state_18532;
if(cljs.core.truth_(inst_18489)){
var statearr_18592_20111 = state_18532__$1;
(statearr_18592_20111[(1)] = (11));

} else {
var statearr_18593_20112 = state_18532__$1;
(statearr_18593_20112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17094__auto__ = null;
var cljs$core$async$mix_$_state_machine__17094__auto____0 = (function (){
var statearr_18599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18599[(0)] = cljs$core$async$mix_$_state_machine__17094__auto__);

(statearr_18599[(1)] = (1));

return statearr_18599;
});
var cljs$core$async$mix_$_state_machine__17094__auto____1 = (function (state_18532){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_18532);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e18600){var ex__17097__auto__ = e18600;
var statearr_18601_20114 = state_18532;
(statearr_18601_20114[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_18532[(4)]))){
var statearr_18602_20115 = state_18532;
(statearr_18602_20115[(1)] = cljs.core.first((state_18532[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20120 = state_18532;
state_18532 = G__20120;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17094__auto__ = function(state_18532){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17094__auto____1.call(this,state_18532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17094__auto____0;
cljs$core$async$mix_$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17094__auto____1;
return cljs$core$async$mix_$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_18603 = f__17263__auto__();
(statearr_18603[(6)] = c__17262__auto___20075);

return statearr_18603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20125 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20125(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20130 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20130(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20131 = (function() {
var G__20132 = null;
var G__20132__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20132__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20132 = function(p,v){
switch(arguments.length){
case 1:
return G__20132__1.call(this,p);
case 2:
return G__20132__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20132.cljs$core$IFn$_invoke$arity$1 = G__20132__1;
G__20132.cljs$core$IFn$_invoke$arity$2 = G__20132__2;
return G__20132;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18638 = arguments.length;
switch (G__18638) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20131(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20131(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18658 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18659){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18659 = meta18659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18660,meta18659__$1){
var self__ = this;
var _18660__$1 = this;
return (new cljs.core.async.t_cljs$core$async18658(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18659__$1));
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18660){
var self__ = this;
var _18660__$1 = this;
return self__.meta18659;
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18659","meta18659",-1540388429,null)], null);
}));

(cljs.core.async.t_cljs$core$async18658.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18658");

(cljs.core.async.t_cljs$core$async18658.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18658");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18658.
 */
cljs.core.async.__GT_t_cljs$core$async18658 = (function cljs$core$async$__GT_t_cljs$core$async18658(ch,topic_fn,buf_fn,mults,ensure_mult,meta18659){
return (new cljs.core.async.t_cljs$core$async18658(ch,topic_fn,buf_fn,mults,ensure_mult,meta18659));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18649 = arguments.length;
switch (G__18649) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18646_SHARP_){
if(cljs.core.truth_((p1__18646_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18646_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18646_SHARP_.call(null,topic)))){
return p1__18646_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18646_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18658(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17262__auto___20141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_18750){
var state_val_18751 = (state_18750[(1)]);
if((state_val_18751 === (7))){
var inst_18742 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
var statearr_18756_20142 = state_18750__$1;
(statearr_18756_20142[(2)] = inst_18742);

(statearr_18756_20142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (20))){
var state_18750__$1 = state_18750;
var statearr_18757_20143 = state_18750__$1;
(statearr_18757_20143[(2)] = null);

(statearr_18757_20143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (1))){
var state_18750__$1 = state_18750;
var statearr_18758_20144 = state_18750__$1;
(statearr_18758_20144[(2)] = null);

(statearr_18758_20144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (24))){
var inst_18725 = (state_18750[(7)]);
var inst_18734 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18725);
var state_18750__$1 = state_18750;
var statearr_18762_20145 = state_18750__$1;
(statearr_18762_20145[(2)] = inst_18734);

(statearr_18762_20145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (4))){
var inst_18676 = (state_18750[(8)]);
var inst_18676__$1 = (state_18750[(2)]);
var inst_18677 = (inst_18676__$1 == null);
var state_18750__$1 = (function (){var statearr_18764 = state_18750;
(statearr_18764[(8)] = inst_18676__$1);

return statearr_18764;
})();
if(cljs.core.truth_(inst_18677)){
var statearr_18765_20146 = state_18750__$1;
(statearr_18765_20146[(1)] = (5));

} else {
var statearr_18766_20147 = state_18750__$1;
(statearr_18766_20147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (15))){
var inst_18719 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
var statearr_18770_20148 = state_18750__$1;
(statearr_18770_20148[(2)] = inst_18719);

(statearr_18770_20148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (21))){
var inst_18739 = (state_18750[(2)]);
var state_18750__$1 = (function (){var statearr_18772 = state_18750;
(statearr_18772[(9)] = inst_18739);

return statearr_18772;
})();
var statearr_18773_20149 = state_18750__$1;
(statearr_18773_20149[(2)] = null);

(statearr_18773_20149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (13))){
var inst_18701 = (state_18750[(10)]);
var inst_18703 = cljs.core.chunked_seq_QMARK_(inst_18701);
var state_18750__$1 = state_18750;
if(inst_18703){
var statearr_18774_20150 = state_18750__$1;
(statearr_18774_20150[(1)] = (16));

} else {
var statearr_18778_20151 = state_18750__$1;
(statearr_18778_20151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (22))){
var inst_18731 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
if(cljs.core.truth_(inst_18731)){
var statearr_18780_20152 = state_18750__$1;
(statearr_18780_20152[(1)] = (23));

} else {
var statearr_18781_20153 = state_18750__$1;
(statearr_18781_20153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (6))){
var inst_18725 = (state_18750[(7)]);
var inst_18727 = (state_18750[(11)]);
var inst_18676 = (state_18750[(8)]);
var inst_18725__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18676) : topic_fn.call(null,inst_18676));
var inst_18726 = cljs.core.deref(mults);
var inst_18727__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18726,inst_18725__$1);
var state_18750__$1 = (function (){var statearr_18782 = state_18750;
(statearr_18782[(7)] = inst_18725__$1);

(statearr_18782[(11)] = inst_18727__$1);

return statearr_18782;
})();
if(cljs.core.truth_(inst_18727__$1)){
var statearr_18783_20155 = state_18750__$1;
(statearr_18783_20155[(1)] = (19));

} else {
var statearr_18784_20156 = state_18750__$1;
(statearr_18784_20156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (25))){
var inst_18736 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
var statearr_18785_20158 = state_18750__$1;
(statearr_18785_20158[(2)] = inst_18736);

(statearr_18785_20158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (17))){
var inst_18701 = (state_18750[(10)]);
var inst_18710 = cljs.core.first(inst_18701);
var inst_18711 = cljs.core.async.muxch_STAR_(inst_18710);
var inst_18712 = cljs.core.async.close_BANG_(inst_18711);
var inst_18713 = cljs.core.next(inst_18701);
var inst_18687 = inst_18713;
var inst_18688 = null;
var inst_18689 = (0);
var inst_18690 = (0);
var state_18750__$1 = (function (){var statearr_18790 = state_18750;
(statearr_18790[(12)] = inst_18688);

(statearr_18790[(13)] = inst_18687);

(statearr_18790[(14)] = inst_18689);

(statearr_18790[(15)] = inst_18712);

(statearr_18790[(16)] = inst_18690);

return statearr_18790;
})();
var statearr_18791_20159 = state_18750__$1;
(statearr_18791_20159[(2)] = null);

(statearr_18791_20159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (3))){
var inst_18744 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18750__$1,inst_18744);
} else {
if((state_val_18751 === (12))){
var inst_18721 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
var statearr_18792_20160 = state_18750__$1;
(statearr_18792_20160[(2)] = inst_18721);

(statearr_18792_20160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (2))){
var state_18750__$1 = state_18750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18750__$1,(4),ch);
} else {
if((state_val_18751 === (23))){
var state_18750__$1 = state_18750;
var statearr_18794_20161 = state_18750__$1;
(statearr_18794_20161[(2)] = null);

(statearr_18794_20161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (19))){
var inst_18727 = (state_18750[(11)]);
var inst_18676 = (state_18750[(8)]);
var inst_18729 = cljs.core.async.muxch_STAR_(inst_18727);
var state_18750__$1 = state_18750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18750__$1,(22),inst_18729,inst_18676);
} else {
if((state_val_18751 === (11))){
var inst_18701 = (state_18750[(10)]);
var inst_18687 = (state_18750[(13)]);
var inst_18701__$1 = cljs.core.seq(inst_18687);
var state_18750__$1 = (function (){var statearr_18795 = state_18750;
(statearr_18795[(10)] = inst_18701__$1);

return statearr_18795;
})();
if(inst_18701__$1){
var statearr_18796_20162 = state_18750__$1;
(statearr_18796_20162[(1)] = (13));

} else {
var statearr_18797_20163 = state_18750__$1;
(statearr_18797_20163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (9))){
var inst_18723 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
var statearr_18798_20164 = state_18750__$1;
(statearr_18798_20164[(2)] = inst_18723);

(statearr_18798_20164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (5))){
var inst_18683 = cljs.core.deref(mults);
var inst_18684 = cljs.core.vals(inst_18683);
var inst_18685 = cljs.core.seq(inst_18684);
var inst_18687 = inst_18685;
var inst_18688 = null;
var inst_18689 = (0);
var inst_18690 = (0);
var state_18750__$1 = (function (){var statearr_18799 = state_18750;
(statearr_18799[(12)] = inst_18688);

(statearr_18799[(13)] = inst_18687);

(statearr_18799[(14)] = inst_18689);

(statearr_18799[(16)] = inst_18690);

return statearr_18799;
})();
var statearr_18801_20165 = state_18750__$1;
(statearr_18801_20165[(2)] = null);

(statearr_18801_20165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (14))){
var state_18750__$1 = state_18750;
var statearr_18806_20166 = state_18750__$1;
(statearr_18806_20166[(2)] = null);

(statearr_18806_20166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (16))){
var inst_18701 = (state_18750[(10)]);
var inst_18705 = cljs.core.chunk_first(inst_18701);
var inst_18706 = cljs.core.chunk_rest(inst_18701);
var inst_18707 = cljs.core.count(inst_18705);
var inst_18687 = inst_18706;
var inst_18688 = inst_18705;
var inst_18689 = inst_18707;
var inst_18690 = (0);
var state_18750__$1 = (function (){var statearr_18807 = state_18750;
(statearr_18807[(12)] = inst_18688);

(statearr_18807[(13)] = inst_18687);

(statearr_18807[(14)] = inst_18689);

(statearr_18807[(16)] = inst_18690);

return statearr_18807;
})();
var statearr_18808_20167 = state_18750__$1;
(statearr_18808_20167[(2)] = null);

(statearr_18808_20167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (10))){
var inst_18688 = (state_18750[(12)]);
var inst_18687 = (state_18750[(13)]);
var inst_18689 = (state_18750[(14)]);
var inst_18690 = (state_18750[(16)]);
var inst_18695 = cljs.core._nth(inst_18688,inst_18690);
var inst_18696 = cljs.core.async.muxch_STAR_(inst_18695);
var inst_18697 = cljs.core.async.close_BANG_(inst_18696);
var inst_18698 = (inst_18690 + (1));
var tmp18803 = inst_18688;
var tmp18804 = inst_18687;
var tmp18805 = inst_18689;
var inst_18687__$1 = tmp18804;
var inst_18688__$1 = tmp18803;
var inst_18689__$1 = tmp18805;
var inst_18690__$1 = inst_18698;
var state_18750__$1 = (function (){var statearr_18809 = state_18750;
(statearr_18809[(12)] = inst_18688__$1);

(statearr_18809[(17)] = inst_18697);

(statearr_18809[(13)] = inst_18687__$1);

(statearr_18809[(14)] = inst_18689__$1);

(statearr_18809[(16)] = inst_18690__$1);

return statearr_18809;
})();
var statearr_18810_20172 = state_18750__$1;
(statearr_18810_20172[(2)] = null);

(statearr_18810_20172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (18))){
var inst_18716 = (state_18750[(2)]);
var state_18750__$1 = state_18750;
var statearr_18811_20173 = state_18750__$1;
(statearr_18811_20173[(2)] = inst_18716);

(statearr_18811_20173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18751 === (8))){
var inst_18689 = (state_18750[(14)]);
var inst_18690 = (state_18750[(16)]);
var inst_18692 = (inst_18690 < inst_18689);
var inst_18693 = inst_18692;
var state_18750__$1 = state_18750;
if(cljs.core.truth_(inst_18693)){
var statearr_18812_20174 = state_18750__$1;
(statearr_18812_20174[(1)] = (10));

} else {
var statearr_18813_20175 = state_18750__$1;
(statearr_18813_20175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_18814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18814[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_18814[(1)] = (1));

return statearr_18814;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_18750){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_18750);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e18815){var ex__17097__auto__ = e18815;
var statearr_18816_20179 = state_18750;
(statearr_18816_20179[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_18750[(4)]))){
var statearr_18817_20180 = state_18750;
(statearr_18817_20180[(1)] = cljs.core.first((state_18750[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20181 = state_18750;
state_18750 = G__20181;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_18750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_18750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_18818 = f__17263__auto__();
(statearr_18818[(6)] = c__17262__auto___20141);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18820 = arguments.length;
switch (G__18820) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18822 = arguments.length;
switch (G__18822) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18826 = arguments.length;
switch (G__18826) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17262__auto___20190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_18873){
var state_val_18874 = (state_18873[(1)]);
if((state_val_18874 === (7))){
var state_18873__$1 = state_18873;
var statearr_18875_20191 = state_18873__$1;
(statearr_18875_20191[(2)] = null);

(statearr_18875_20191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (1))){
var state_18873__$1 = state_18873;
var statearr_18876_20192 = state_18873__$1;
(statearr_18876_20192[(2)] = null);

(statearr_18876_20192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (4))){
var inst_18831 = (state_18873[(7)]);
var inst_18832 = (state_18873[(8)]);
var inst_18834 = (inst_18832 < inst_18831);
var state_18873__$1 = state_18873;
if(cljs.core.truth_(inst_18834)){
var statearr_18877_20193 = state_18873__$1;
(statearr_18877_20193[(1)] = (6));

} else {
var statearr_18878_20194 = state_18873__$1;
(statearr_18878_20194[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (15))){
var inst_18858 = (state_18873[(9)]);
var inst_18864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18858);
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18873__$1,(17),out,inst_18864);
} else {
if((state_val_18874 === (13))){
var inst_18858 = (state_18873[(9)]);
var inst_18858__$1 = (state_18873[(2)]);
var inst_18859 = cljs.core.some(cljs.core.nil_QMARK_,inst_18858__$1);
var state_18873__$1 = (function (){var statearr_18879 = state_18873;
(statearr_18879[(9)] = inst_18858__$1);

return statearr_18879;
})();
if(cljs.core.truth_(inst_18859)){
var statearr_18880_20195 = state_18873__$1;
(statearr_18880_20195[(1)] = (14));

} else {
var statearr_18881_20196 = state_18873__$1;
(statearr_18881_20196[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (6))){
var state_18873__$1 = state_18873;
var statearr_18882_20198 = state_18873__$1;
(statearr_18882_20198[(2)] = null);

(statearr_18882_20198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (17))){
var inst_18866 = (state_18873[(2)]);
var state_18873__$1 = (function (){var statearr_18886 = state_18873;
(statearr_18886[(10)] = inst_18866);

return statearr_18886;
})();
var statearr_18887_20199 = state_18873__$1;
(statearr_18887_20199[(2)] = null);

(statearr_18887_20199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (3))){
var inst_18871 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18873__$1,inst_18871);
} else {
if((state_val_18874 === (12))){
var _ = (function (){var statearr_18888 = state_18873;
(statearr_18888[(4)] = cljs.core.rest((state_18873[(4)])));

return statearr_18888;
})();
var state_18873__$1 = state_18873;
var ex18884 = (state_18873__$1[(2)]);
var statearr_18889_20200 = state_18873__$1;
(statearr_18889_20200[(5)] = ex18884);


if((ex18884 instanceof Object)){
var statearr_18894_20201 = state_18873__$1;
(statearr_18894_20201[(1)] = (11));

(statearr_18894_20201[(5)] = null);

} else {
throw ex18884;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (2))){
var inst_18830 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18831 = cnt;
var inst_18832 = (0);
var state_18873__$1 = (function (){var statearr_18896 = state_18873;
(statearr_18896[(11)] = inst_18830);

(statearr_18896[(7)] = inst_18831);

(statearr_18896[(8)] = inst_18832);

return statearr_18896;
})();
var statearr_18897_20202 = state_18873__$1;
(statearr_18897_20202[(2)] = null);

(statearr_18897_20202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (11))){
var inst_18836 = (state_18873[(2)]);
var inst_18837 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18873__$1 = (function (){var statearr_18900 = state_18873;
(statearr_18900[(12)] = inst_18836);

return statearr_18900;
})();
var statearr_18901_20203 = state_18873__$1;
(statearr_18901_20203[(2)] = inst_18837);

(statearr_18901_20203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (9))){
var inst_18832 = (state_18873[(8)]);
var _ = (function (){var statearr_18904 = state_18873;
(statearr_18904[(4)] = cljs.core.cons((12),(state_18873[(4)])));

return statearr_18904;
})();
var inst_18843 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18832) : chs__$1.call(null,inst_18832));
var inst_18844 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18832) : done.call(null,inst_18832));
var inst_18845 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18843,inst_18844);
var ___$1 = (function (){var statearr_18905 = state_18873;
(statearr_18905[(4)] = cljs.core.rest((state_18873[(4)])));

return statearr_18905;
})();
var state_18873__$1 = state_18873;
var statearr_18906_20204 = state_18873__$1;
(statearr_18906_20204[(2)] = inst_18845);

(statearr_18906_20204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (5))){
var inst_18856 = (state_18873[(2)]);
var state_18873__$1 = (function (){var statearr_18907 = state_18873;
(statearr_18907[(13)] = inst_18856);

return statearr_18907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18873__$1,(13),dchan);
} else {
if((state_val_18874 === (14))){
var inst_18861 = cljs.core.async.close_BANG_(out);
var state_18873__$1 = state_18873;
var statearr_18908_20205 = state_18873__$1;
(statearr_18908_20205[(2)] = inst_18861);

(statearr_18908_20205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (16))){
var inst_18869 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18912_20206 = state_18873__$1;
(statearr_18912_20206[(2)] = inst_18869);

(statearr_18912_20206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (10))){
var inst_18832 = (state_18873[(8)]);
var inst_18848 = (state_18873[(2)]);
var inst_18850 = (inst_18832 + (1));
var inst_18832__$1 = inst_18850;
var state_18873__$1 = (function (){var statearr_18913 = state_18873;
(statearr_18913[(14)] = inst_18848);

(statearr_18913[(8)] = inst_18832__$1);

return statearr_18913;
})();
var statearr_18914_20207 = state_18873__$1;
(statearr_18914_20207[(2)] = null);

(statearr_18914_20207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (8))){
var inst_18854 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18915_20212 = state_18873__$1;
(statearr_18915_20212[(2)] = inst_18854);

(statearr_18915_20212[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_18916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18916[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_18916[(1)] = (1));

return statearr_18916;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_18873){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_18873);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e18917){var ex__17097__auto__ = e18917;
var statearr_18918_20216 = state_18873;
(statearr_18918_20216[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_18873[(4)]))){
var statearr_18919_20217 = state_18873;
(statearr_18919_20217[(1)] = cljs.core.first((state_18873[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20221 = state_18873;
state_18873 = G__20221;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_18873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_18873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_18933 = f__17263__auto__();
(statearr_18933[(6)] = c__17262__auto___20190);

return statearr_18933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18942 = arguments.length;
switch (G__18942) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___20226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_18987){
var state_val_18988 = (state_18987[(1)]);
if((state_val_18988 === (7))){
var inst_18964 = (state_18987[(7)]);
var inst_18963 = (state_18987[(8)]);
var inst_18963__$1 = (state_18987[(2)]);
var inst_18964__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18963__$1,(0),null);
var inst_18965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18963__$1,(1),null);
var inst_18966 = (inst_18964__$1 == null);
var state_18987__$1 = (function (){var statearr_18989 = state_18987;
(statearr_18989[(7)] = inst_18964__$1);

(statearr_18989[(8)] = inst_18963__$1);

(statearr_18989[(9)] = inst_18965);

return statearr_18989;
})();
if(cljs.core.truth_(inst_18966)){
var statearr_18990_20230 = state_18987__$1;
(statearr_18990_20230[(1)] = (8));

} else {
var statearr_18991_20231 = state_18987__$1;
(statearr_18991_20231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (1))){
var inst_18950 = cljs.core.vec(chs);
var inst_18951 = inst_18950;
var state_18987__$1 = (function (){var statearr_18996 = state_18987;
(statearr_18996[(10)] = inst_18951);

return statearr_18996;
})();
var statearr_18997_20232 = state_18987__$1;
(statearr_18997_20232[(2)] = null);

(statearr_18997_20232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (4))){
var inst_18951 = (state_18987[(10)]);
var state_18987__$1 = state_18987;
return cljs.core.async.ioc_alts_BANG_(state_18987__$1,(7),inst_18951);
} else {
if((state_val_18988 === (6))){
var inst_18983 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
var statearr_18998_20236 = state_18987__$1;
(statearr_18998_20236[(2)] = inst_18983);

(statearr_18998_20236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (3))){
var inst_18985 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18987__$1,inst_18985);
} else {
if((state_val_18988 === (2))){
var inst_18951 = (state_18987[(10)]);
var inst_18953 = cljs.core.count(inst_18951);
var inst_18954 = (inst_18953 > (0));
var state_18987__$1 = state_18987;
if(cljs.core.truth_(inst_18954)){
var statearr_19000_20237 = state_18987__$1;
(statearr_19000_20237[(1)] = (4));

} else {
var statearr_19001_20238 = state_18987__$1;
(statearr_19001_20238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (11))){
var inst_18951 = (state_18987[(10)]);
var inst_18976 = (state_18987[(2)]);
var tmp18999 = inst_18951;
var inst_18951__$1 = tmp18999;
var state_18987__$1 = (function (){var statearr_19002 = state_18987;
(statearr_19002[(11)] = inst_18976);

(statearr_19002[(10)] = inst_18951__$1);

return statearr_19002;
})();
var statearr_19003_20243 = state_18987__$1;
(statearr_19003_20243[(2)] = null);

(statearr_19003_20243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (9))){
var inst_18964 = (state_18987[(7)]);
var state_18987__$1 = state_18987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18987__$1,(11),out,inst_18964);
} else {
if((state_val_18988 === (5))){
var inst_18981 = cljs.core.async.close_BANG_(out);
var state_18987__$1 = state_18987;
var statearr_19008_20244 = state_18987__$1;
(statearr_19008_20244[(2)] = inst_18981);

(statearr_19008_20244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (10))){
var inst_18979 = (state_18987[(2)]);
var state_18987__$1 = state_18987;
var statearr_19009_20245 = state_18987__$1;
(statearr_19009_20245[(2)] = inst_18979);

(statearr_19009_20245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18988 === (8))){
var inst_18964 = (state_18987[(7)]);
var inst_18951 = (state_18987[(10)]);
var inst_18963 = (state_18987[(8)]);
var inst_18965 = (state_18987[(9)]);
var inst_18968 = (function (){var cs = inst_18951;
var vec__18959 = inst_18963;
var v = inst_18964;
var c = inst_18965;
return (function (p1__18940_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18940_SHARP_);
});
})();
var inst_18969 = cljs.core.filterv(inst_18968,inst_18951);
var inst_18951__$1 = inst_18969;
var state_18987__$1 = (function (){var statearr_19012 = state_18987;
(statearr_19012[(10)] = inst_18951__$1);

return statearr_19012;
})();
var statearr_19013_20246 = state_18987__$1;
(statearr_19013_20246[(2)] = null);

(statearr_19013_20246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_19015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19015[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_19015[(1)] = (1));

return statearr_19015;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_18987){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_18987);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19017){var ex__17097__auto__ = e19017;
var statearr_19018_20247 = state_18987;
(statearr_19018_20247[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_18987[(4)]))){
var statearr_19019_20248 = state_18987;
(statearr_19019_20248[(1)] = cljs.core.first((state_18987[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20249 = state_18987;
state_18987 = G__20249;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_18987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_18987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19020 = f__17263__auto__();
(statearr_19020[(6)] = c__17262__auto___20226);

return statearr_19020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19022 = arguments.length;
switch (G__19022) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___20252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_19048){
var state_val_19049 = (state_19048[(1)]);
if((state_val_19049 === (7))){
var inst_19030 = (state_19048[(7)]);
var inst_19030__$1 = (state_19048[(2)]);
var inst_19031 = (inst_19030__$1 == null);
var inst_19032 = cljs.core.not(inst_19031);
var state_19048__$1 = (function (){var statearr_19055 = state_19048;
(statearr_19055[(7)] = inst_19030__$1);

return statearr_19055;
})();
if(inst_19032){
var statearr_19056_20254 = state_19048__$1;
(statearr_19056_20254[(1)] = (8));

} else {
var statearr_19057_20255 = state_19048__$1;
(statearr_19057_20255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (1))){
var inst_19025 = (0);
var state_19048__$1 = (function (){var statearr_19058 = state_19048;
(statearr_19058[(8)] = inst_19025);

return statearr_19058;
})();
var statearr_19059_20256 = state_19048__$1;
(statearr_19059_20256[(2)] = null);

(statearr_19059_20256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (4))){
var state_19048__$1 = state_19048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19048__$1,(7),ch);
} else {
if((state_val_19049 === (6))){
var inst_19043 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19060_20257 = state_19048__$1;
(statearr_19060_20257[(2)] = inst_19043);

(statearr_19060_20257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (3))){
var inst_19045 = (state_19048[(2)]);
var inst_19046 = cljs.core.async.close_BANG_(out);
var state_19048__$1 = (function (){var statearr_19061 = state_19048;
(statearr_19061[(9)] = inst_19045);

return statearr_19061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19048__$1,inst_19046);
} else {
if((state_val_19049 === (2))){
var inst_19025 = (state_19048[(8)]);
var inst_19027 = (inst_19025 < n);
var state_19048__$1 = state_19048;
if(cljs.core.truth_(inst_19027)){
var statearr_19062_20258 = state_19048__$1;
(statearr_19062_20258[(1)] = (4));

} else {
var statearr_19063_20259 = state_19048__$1;
(statearr_19063_20259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (11))){
var inst_19025 = (state_19048[(8)]);
var inst_19035 = (state_19048[(2)]);
var inst_19036 = (inst_19025 + (1));
var inst_19025__$1 = inst_19036;
var state_19048__$1 = (function (){var statearr_19064 = state_19048;
(statearr_19064[(10)] = inst_19035);

(statearr_19064[(8)] = inst_19025__$1);

return statearr_19064;
})();
var statearr_19065_20260 = state_19048__$1;
(statearr_19065_20260[(2)] = null);

(statearr_19065_20260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (9))){
var state_19048__$1 = state_19048;
var statearr_19066_20261 = state_19048__$1;
(statearr_19066_20261[(2)] = null);

(statearr_19066_20261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (5))){
var state_19048__$1 = state_19048;
var statearr_19067_20262 = state_19048__$1;
(statearr_19067_20262[(2)] = null);

(statearr_19067_20262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (10))){
var inst_19040 = (state_19048[(2)]);
var state_19048__$1 = state_19048;
var statearr_19068_20264 = state_19048__$1;
(statearr_19068_20264[(2)] = inst_19040);

(statearr_19068_20264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19049 === (8))){
var inst_19030 = (state_19048[(7)]);
var state_19048__$1 = state_19048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19048__$1,(11),out,inst_19030);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_19069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19069[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_19069[(1)] = (1));

return statearr_19069;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_19048){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_19048);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19070){var ex__17097__auto__ = e19070;
var statearr_19071_20267 = state_19048;
(statearr_19071_20267[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_19048[(4)]))){
var statearr_19072_20268 = state_19048;
(statearr_19072_20268[(1)] = cljs.core.first((state_19048[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20269 = state_19048;
state_19048 = G__20269;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_19048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_19048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19076 = f__17263__auto__();
(statearr_19076[(6)] = c__17262__auto___20252);

return statearr_19076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19087 = (function (f,ch,meta19082,_,fn1,meta19088){
this.f = f;
this.ch = ch;
this.meta19082 = meta19082;
this._ = _;
this.fn1 = fn1;
this.meta19088 = meta19088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19089,meta19088__$1){
var self__ = this;
var _19089__$1 = this;
return (new cljs.core.async.t_cljs$core$async19087(self__.f,self__.ch,self__.meta19082,self__._,self__.fn1,meta19088__$1));
}));

(cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19089){
var self__ = this;
var _19089__$1 = this;
return self__.meta19088;
}));

(cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19079_SHARP_){
var G__19093 = (((p1__19079_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19079_SHARP_) : self__.f.call(null,p1__19079_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19093) : f1.call(null,G__19093));
});
}));

(cljs.core.async.t_cljs$core$async19087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19082","meta19082",569644231,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19081","cljs.core.async/t_cljs$core$async19081",-1076249559,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19088","meta19088",1053825584,null)], null);
}));

(cljs.core.async.t_cljs$core$async19087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19087");

(cljs.core.async.t_cljs$core$async19087.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19087.
 */
cljs.core.async.__GT_t_cljs$core$async19087 = (function cljs$core$async$__GT_t_cljs$core$async19087(f,ch,meta19082,_,fn1,meta19088){
return (new cljs.core.async.t_cljs$core$async19087(f,ch,meta19082,_,fn1,meta19088));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19081 = (function (f,ch,meta19082){
this.f = f;
this.ch = ch;
this.meta19082 = meta19082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19083,meta19082__$1){
var self__ = this;
var _19083__$1 = this;
return (new cljs.core.async.t_cljs$core$async19081(self__.f,self__.ch,meta19082__$1));
}));

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19083){
var self__ = this;
var _19083__$1 = this;
return self__.meta19082;
}));

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19087(self__.f,self__.ch,self__.meta19082,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19094 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19094) : self__.f.call(null,G__19094));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19082","meta19082",569644231,null)], null);
}));

(cljs.core.async.t_cljs$core$async19081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19081");

(cljs.core.async.t_cljs$core$async19081.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19081.
 */
cljs.core.async.__GT_t_cljs$core$async19081 = (function cljs$core$async$__GT_t_cljs$core$async19081(f,ch,meta19082){
return (new cljs.core.async.t_cljs$core$async19081(f,ch,meta19082));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19081(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19099 = (function (f,ch,meta19100){
this.f = f;
this.ch = ch;
this.meta19100 = meta19100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19101,meta19100__$1){
var self__ = this;
var _19101__$1 = this;
return (new cljs.core.async.t_cljs$core$async19099(self__.f,self__.ch,meta19100__$1));
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19101){
var self__ = this;
var _19101__$1 = this;
return self__.meta19100;
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19100","meta19100",1847779546,null)], null);
}));

(cljs.core.async.t_cljs$core$async19099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19099");

(cljs.core.async.t_cljs$core$async19099.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19099.
 */
cljs.core.async.__GT_t_cljs$core$async19099 = (function cljs$core$async$__GT_t_cljs$core$async19099(f,ch,meta19100){
return (new cljs.core.async.t_cljs$core$async19099(f,ch,meta19100));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19099(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19106 = (function (p,ch,meta19107){
this.p = p;
this.ch = ch;
this.meta19107 = meta19107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19108,meta19107__$1){
var self__ = this;
var _19108__$1 = this;
return (new cljs.core.async.t_cljs$core$async19106(self__.p,self__.ch,meta19107__$1));
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19108){
var self__ = this;
var _19108__$1 = this;
return self__.meta19107;
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19107","meta19107",970433744,null)], null);
}));

(cljs.core.async.t_cljs$core$async19106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19106");

(cljs.core.async.t_cljs$core$async19106.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19106.
 */
cljs.core.async.__GT_t_cljs$core$async19106 = (function cljs$core$async$__GT_t_cljs$core$async19106(p,ch,meta19107){
return (new cljs.core.async.t_cljs$core$async19106(p,ch,meta19107));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19106(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19115 = arguments.length;
switch (G__19115) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___20280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_19136){
var state_val_19137 = (state_19136[(1)]);
if((state_val_19137 === (7))){
var inst_19132 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
var statearr_19138_20281 = state_19136__$1;
(statearr_19138_20281[(2)] = inst_19132);

(statearr_19138_20281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (1))){
var state_19136__$1 = state_19136;
var statearr_19139_20282 = state_19136__$1;
(statearr_19139_20282[(2)] = null);

(statearr_19139_20282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (4))){
var inst_19118 = (state_19136[(7)]);
var inst_19118__$1 = (state_19136[(2)]);
var inst_19119 = (inst_19118__$1 == null);
var state_19136__$1 = (function (){var statearr_19140 = state_19136;
(statearr_19140[(7)] = inst_19118__$1);

return statearr_19140;
})();
if(cljs.core.truth_(inst_19119)){
var statearr_19141_20283 = state_19136__$1;
(statearr_19141_20283[(1)] = (5));

} else {
var statearr_19142_20284 = state_19136__$1;
(statearr_19142_20284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (6))){
var inst_19118 = (state_19136[(7)]);
var inst_19123 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19118) : p.call(null,inst_19118));
var state_19136__$1 = state_19136;
if(cljs.core.truth_(inst_19123)){
var statearr_19143_20285 = state_19136__$1;
(statearr_19143_20285[(1)] = (8));

} else {
var statearr_19144_20286 = state_19136__$1;
(statearr_19144_20286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (3))){
var inst_19134 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19136__$1,inst_19134);
} else {
if((state_val_19137 === (2))){
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19136__$1,(4),ch);
} else {
if((state_val_19137 === (11))){
var inst_19126 = (state_19136[(2)]);
var state_19136__$1 = state_19136;
var statearr_19145_20287 = state_19136__$1;
(statearr_19145_20287[(2)] = inst_19126);

(statearr_19145_20287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (9))){
var state_19136__$1 = state_19136;
var statearr_19146_20293 = state_19136__$1;
(statearr_19146_20293[(2)] = null);

(statearr_19146_20293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (5))){
var inst_19121 = cljs.core.async.close_BANG_(out);
var state_19136__$1 = state_19136;
var statearr_19147_20294 = state_19136__$1;
(statearr_19147_20294[(2)] = inst_19121);

(statearr_19147_20294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (10))){
var inst_19129 = (state_19136[(2)]);
var state_19136__$1 = (function (){var statearr_19148 = state_19136;
(statearr_19148[(8)] = inst_19129);

return statearr_19148;
})();
var statearr_19149_20295 = state_19136__$1;
(statearr_19149_20295[(2)] = null);

(statearr_19149_20295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19137 === (8))){
var inst_19118 = (state_19136[(7)]);
var state_19136__$1 = state_19136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19136__$1,(11),out,inst_19118);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_19150 = [null,null,null,null,null,null,null,null,null];
(statearr_19150[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_19150[(1)] = (1));

return statearr_19150;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_19136){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_19136);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19151){var ex__17097__auto__ = e19151;
var statearr_19152_20304 = state_19136;
(statearr_19152_20304[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_19136[(4)]))){
var statearr_19153_20305 = state_19136;
(statearr_19153_20305[(1)] = cljs.core.first((state_19136[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20306 = state_19136;
state_19136 = G__20306;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_19136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_19136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19154 = f__17263__auto__();
(statearr_19154[(6)] = c__17262__auto___20280);

return statearr_19154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19156 = arguments.length;
switch (G__19156) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_19222){
var state_val_19223 = (state_19222[(1)]);
if((state_val_19223 === (7))){
var inst_19218 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19224_20308 = state_19222__$1;
(statearr_19224_20308[(2)] = inst_19218);

(statearr_19224_20308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (20))){
var inst_19185 = (state_19222[(7)]);
var inst_19199 = (state_19222[(2)]);
var inst_19200 = cljs.core.next(inst_19185);
var inst_19171 = inst_19200;
var inst_19172 = null;
var inst_19173 = (0);
var inst_19174 = (0);
var state_19222__$1 = (function (){var statearr_19225 = state_19222;
(statearr_19225[(8)] = inst_19173);

(statearr_19225[(9)] = inst_19174);

(statearr_19225[(10)] = inst_19172);

(statearr_19225[(11)] = inst_19199);

(statearr_19225[(12)] = inst_19171);

return statearr_19225;
})();
var statearr_19226_20309 = state_19222__$1;
(statearr_19226_20309[(2)] = null);

(statearr_19226_20309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (1))){
var state_19222__$1 = state_19222;
var statearr_19231_20310 = state_19222__$1;
(statearr_19231_20310[(2)] = null);

(statearr_19231_20310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (4))){
var inst_19160 = (state_19222[(13)]);
var inst_19160__$1 = (state_19222[(2)]);
var inst_19161 = (inst_19160__$1 == null);
var state_19222__$1 = (function (){var statearr_19232 = state_19222;
(statearr_19232[(13)] = inst_19160__$1);

return statearr_19232;
})();
if(cljs.core.truth_(inst_19161)){
var statearr_19233_20311 = state_19222__$1;
(statearr_19233_20311[(1)] = (5));

} else {
var statearr_19234_20312 = state_19222__$1;
(statearr_19234_20312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (15))){
var state_19222__$1 = state_19222;
var statearr_19238_20313 = state_19222__$1;
(statearr_19238_20313[(2)] = null);

(statearr_19238_20313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (21))){
var state_19222__$1 = state_19222;
var statearr_19239_20314 = state_19222__$1;
(statearr_19239_20314[(2)] = null);

(statearr_19239_20314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (13))){
var inst_19173 = (state_19222[(8)]);
var inst_19174 = (state_19222[(9)]);
var inst_19172 = (state_19222[(10)]);
var inst_19171 = (state_19222[(12)]);
var inst_19181 = (state_19222[(2)]);
var inst_19182 = (inst_19174 + (1));
var tmp19235 = inst_19173;
var tmp19236 = inst_19172;
var tmp19237 = inst_19171;
var inst_19171__$1 = tmp19237;
var inst_19172__$1 = tmp19236;
var inst_19173__$1 = tmp19235;
var inst_19174__$1 = inst_19182;
var state_19222__$1 = (function (){var statearr_19240 = state_19222;
(statearr_19240[(14)] = inst_19181);

(statearr_19240[(8)] = inst_19173__$1);

(statearr_19240[(9)] = inst_19174__$1);

(statearr_19240[(10)] = inst_19172__$1);

(statearr_19240[(12)] = inst_19171__$1);

return statearr_19240;
})();
var statearr_19241_20315 = state_19222__$1;
(statearr_19241_20315[(2)] = null);

(statearr_19241_20315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (22))){
var state_19222__$1 = state_19222;
var statearr_19242_20316 = state_19222__$1;
(statearr_19242_20316[(2)] = null);

(statearr_19242_20316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (6))){
var inst_19160 = (state_19222[(13)]);
var inst_19169 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19160) : f.call(null,inst_19160));
var inst_19170 = cljs.core.seq(inst_19169);
var inst_19171 = inst_19170;
var inst_19172 = null;
var inst_19173 = (0);
var inst_19174 = (0);
var state_19222__$1 = (function (){var statearr_19243 = state_19222;
(statearr_19243[(8)] = inst_19173);

(statearr_19243[(9)] = inst_19174);

(statearr_19243[(10)] = inst_19172);

(statearr_19243[(12)] = inst_19171);

return statearr_19243;
})();
var statearr_19244_20317 = state_19222__$1;
(statearr_19244_20317[(2)] = null);

(statearr_19244_20317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (17))){
var inst_19185 = (state_19222[(7)]);
var inst_19189 = cljs.core.chunk_first(inst_19185);
var inst_19190 = cljs.core.chunk_rest(inst_19185);
var inst_19191 = cljs.core.count(inst_19189);
var inst_19171 = inst_19190;
var inst_19172 = inst_19189;
var inst_19173 = inst_19191;
var inst_19174 = (0);
var state_19222__$1 = (function (){var statearr_19245 = state_19222;
(statearr_19245[(8)] = inst_19173);

(statearr_19245[(9)] = inst_19174);

(statearr_19245[(10)] = inst_19172);

(statearr_19245[(12)] = inst_19171);

return statearr_19245;
})();
var statearr_19246_20318 = state_19222__$1;
(statearr_19246_20318[(2)] = null);

(statearr_19246_20318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (3))){
var inst_19220 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19222__$1,inst_19220);
} else {
if((state_val_19223 === (12))){
var inst_19208 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19247_20319 = state_19222__$1;
(statearr_19247_20319[(2)] = inst_19208);

(statearr_19247_20319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (2))){
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19222__$1,(4),in$);
} else {
if((state_val_19223 === (23))){
var inst_19216 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19256_20320 = state_19222__$1;
(statearr_19256_20320[(2)] = inst_19216);

(statearr_19256_20320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (19))){
var inst_19203 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19263_20321 = state_19222__$1;
(statearr_19263_20321[(2)] = inst_19203);

(statearr_19263_20321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (11))){
var inst_19185 = (state_19222[(7)]);
var inst_19171 = (state_19222[(12)]);
var inst_19185__$1 = cljs.core.seq(inst_19171);
var state_19222__$1 = (function (){var statearr_19270 = state_19222;
(statearr_19270[(7)] = inst_19185__$1);

return statearr_19270;
})();
if(inst_19185__$1){
var statearr_19271_20322 = state_19222__$1;
(statearr_19271_20322[(1)] = (14));

} else {
var statearr_19272_20323 = state_19222__$1;
(statearr_19272_20323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (9))){
var inst_19210 = (state_19222[(2)]);
var inst_19211 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19222__$1 = (function (){var statearr_19273 = state_19222;
(statearr_19273[(15)] = inst_19210);

return statearr_19273;
})();
if(cljs.core.truth_(inst_19211)){
var statearr_19274_20324 = state_19222__$1;
(statearr_19274_20324[(1)] = (21));

} else {
var statearr_19275_20325 = state_19222__$1;
(statearr_19275_20325[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (5))){
var inst_19163 = cljs.core.async.close_BANG_(out);
var state_19222__$1 = state_19222;
var statearr_19276_20326 = state_19222__$1;
(statearr_19276_20326[(2)] = inst_19163);

(statearr_19276_20326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (14))){
var inst_19185 = (state_19222[(7)]);
var inst_19187 = cljs.core.chunked_seq_QMARK_(inst_19185);
var state_19222__$1 = state_19222;
if(inst_19187){
var statearr_19291_20327 = state_19222__$1;
(statearr_19291_20327[(1)] = (17));

} else {
var statearr_19292_20328 = state_19222__$1;
(statearr_19292_20328[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (16))){
var inst_19206 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19299_20329 = state_19222__$1;
(statearr_19299_20329[(2)] = inst_19206);

(statearr_19299_20329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (10))){
var inst_19174 = (state_19222[(9)]);
var inst_19172 = (state_19222[(10)]);
var inst_19179 = cljs.core._nth(inst_19172,inst_19174);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19222__$1,(13),out,inst_19179);
} else {
if((state_val_19223 === (18))){
var inst_19185 = (state_19222[(7)]);
var inst_19197 = cljs.core.first(inst_19185);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19222__$1,(20),out,inst_19197);
} else {
if((state_val_19223 === (8))){
var inst_19173 = (state_19222[(8)]);
var inst_19174 = (state_19222[(9)]);
var inst_19176 = (inst_19174 < inst_19173);
var inst_19177 = inst_19176;
var state_19222__$1 = state_19222;
if(cljs.core.truth_(inst_19177)){
var statearr_19300_20330 = state_19222__$1;
(statearr_19300_20330[(1)] = (10));

} else {
var statearr_19301_20332 = state_19222__$1;
(statearr_19301_20332[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17094__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17094__auto____0 = (function (){
var statearr_19304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19304[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17094__auto__);

(statearr_19304[(1)] = (1));

return statearr_19304;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17094__auto____1 = (function (state_19222){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_19222);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19305){var ex__17097__auto__ = e19305;
var statearr_19306_20335 = state_19222;
(statearr_19306_20335[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_19222[(4)]))){
var statearr_19308_20336 = state_19222;
(statearr_19308_20336[(1)] = cljs.core.first((state_19222[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20338 = state_19222;
state_19222 = G__20338;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17094__auto__ = function(state_19222){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17094__auto____1.call(this,state_19222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17094__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17094__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19309 = f__17263__auto__();
(statearr_19309[(6)] = c__17262__auto__);

return statearr_19309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));

return c__17262__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19311 = arguments.length;
switch (G__19311) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19316 = arguments.length;
switch (G__19316) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19318 = arguments.length;
switch (G__19318) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___20351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_19342){
var state_val_19343 = (state_19342[(1)]);
if((state_val_19343 === (7))){
var inst_19337 = (state_19342[(2)]);
var state_19342__$1 = state_19342;
var statearr_19344_20353 = state_19342__$1;
(statearr_19344_20353[(2)] = inst_19337);

(statearr_19344_20353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (1))){
var inst_19319 = null;
var state_19342__$1 = (function (){var statearr_19345 = state_19342;
(statearr_19345[(7)] = inst_19319);

return statearr_19345;
})();
var statearr_19346_20354 = state_19342__$1;
(statearr_19346_20354[(2)] = null);

(statearr_19346_20354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (4))){
var inst_19322 = (state_19342[(8)]);
var inst_19322__$1 = (state_19342[(2)]);
var inst_19323 = (inst_19322__$1 == null);
var inst_19324 = cljs.core.not(inst_19323);
var state_19342__$1 = (function (){var statearr_19347 = state_19342;
(statearr_19347[(8)] = inst_19322__$1);

return statearr_19347;
})();
if(inst_19324){
var statearr_19348_20356 = state_19342__$1;
(statearr_19348_20356[(1)] = (5));

} else {
var statearr_19349_20357 = state_19342__$1;
(statearr_19349_20357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (6))){
var state_19342__$1 = state_19342;
var statearr_19350_20358 = state_19342__$1;
(statearr_19350_20358[(2)] = null);

(statearr_19350_20358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (3))){
var inst_19339 = (state_19342[(2)]);
var inst_19340 = cljs.core.async.close_BANG_(out);
var state_19342__$1 = (function (){var statearr_19351 = state_19342;
(statearr_19351[(9)] = inst_19339);

return statearr_19351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19342__$1,inst_19340);
} else {
if((state_val_19343 === (2))){
var state_19342__$1 = state_19342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19342__$1,(4),ch);
} else {
if((state_val_19343 === (11))){
var inst_19322 = (state_19342[(8)]);
var inst_19331 = (state_19342[(2)]);
var inst_19319 = inst_19322;
var state_19342__$1 = (function (){var statearr_19352 = state_19342;
(statearr_19352[(10)] = inst_19331);

(statearr_19352[(7)] = inst_19319);

return statearr_19352;
})();
var statearr_19353_20360 = state_19342__$1;
(statearr_19353_20360[(2)] = null);

(statearr_19353_20360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (9))){
var inst_19322 = (state_19342[(8)]);
var state_19342__$1 = state_19342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19342__$1,(11),out,inst_19322);
} else {
if((state_val_19343 === (5))){
var inst_19319 = (state_19342[(7)]);
var inst_19322 = (state_19342[(8)]);
var inst_19326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19322,inst_19319);
var state_19342__$1 = state_19342;
if(inst_19326){
var statearr_19355_20361 = state_19342__$1;
(statearr_19355_20361[(1)] = (8));

} else {
var statearr_19356_20362 = state_19342__$1;
(statearr_19356_20362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (10))){
var inst_19334 = (state_19342[(2)]);
var state_19342__$1 = state_19342;
var statearr_19357_20364 = state_19342__$1;
(statearr_19357_20364[(2)] = inst_19334);

(statearr_19357_20364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19343 === (8))){
var inst_19319 = (state_19342[(7)]);
var tmp19354 = inst_19319;
var inst_19319__$1 = tmp19354;
var state_19342__$1 = (function (){var statearr_19358 = state_19342;
(statearr_19358[(7)] = inst_19319__$1);

return statearr_19358;
})();
var statearr_19359_20365 = state_19342__$1;
(statearr_19359_20365[(2)] = null);

(statearr_19359_20365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_19360 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19360[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_19360[(1)] = (1));

return statearr_19360;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_19342){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_19342);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19369){var ex__17097__auto__ = e19369;
var statearr_19370_20366 = state_19342;
(statearr_19370_20366[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_19342[(4)]))){
var statearr_19371_20367 = state_19342;
(statearr_19371_20367[(1)] = cljs.core.first((state_19342[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20368 = state_19342;
state_19342 = G__20368;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_19342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_19342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19375 = f__17263__auto__();
(statearr_19375[(6)] = c__17262__auto___20351);

return statearr_19375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19377 = arguments.length;
switch (G__19377) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___20379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_19415){
var state_val_19416 = (state_19415[(1)]);
if((state_val_19416 === (7))){
var inst_19411 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19417_20380 = state_19415__$1;
(statearr_19417_20380[(2)] = inst_19411);

(statearr_19417_20380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (1))){
var inst_19378 = (new Array(n));
var inst_19379 = inst_19378;
var inst_19380 = (0);
var state_19415__$1 = (function (){var statearr_19418 = state_19415;
(statearr_19418[(7)] = inst_19379);

(statearr_19418[(8)] = inst_19380);

return statearr_19418;
})();
var statearr_19419_20381 = state_19415__$1;
(statearr_19419_20381[(2)] = null);

(statearr_19419_20381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (4))){
var inst_19383 = (state_19415[(9)]);
var inst_19383__$1 = (state_19415[(2)]);
var inst_19384 = (inst_19383__$1 == null);
var inst_19385 = cljs.core.not(inst_19384);
var state_19415__$1 = (function (){var statearr_19420 = state_19415;
(statearr_19420[(9)] = inst_19383__$1);

return statearr_19420;
})();
if(inst_19385){
var statearr_19421_20388 = state_19415__$1;
(statearr_19421_20388[(1)] = (5));

} else {
var statearr_19422_20389 = state_19415__$1;
(statearr_19422_20389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (15))){
var inst_19405 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19423_20390 = state_19415__$1;
(statearr_19423_20390[(2)] = inst_19405);

(statearr_19423_20390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (13))){
var state_19415__$1 = state_19415;
var statearr_19426_20391 = state_19415__$1;
(statearr_19426_20391[(2)] = null);

(statearr_19426_20391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (6))){
var inst_19380 = (state_19415[(8)]);
var inst_19401 = (inst_19380 > (0));
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19401)){
var statearr_19427_20400 = state_19415__$1;
(statearr_19427_20400[(1)] = (12));

} else {
var statearr_19428_20401 = state_19415__$1;
(statearr_19428_20401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (3))){
var inst_19413 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19415__$1,inst_19413);
} else {
if((state_val_19416 === (12))){
var inst_19379 = (state_19415[(7)]);
var inst_19403 = cljs.core.vec(inst_19379);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19415__$1,(15),out,inst_19403);
} else {
if((state_val_19416 === (2))){
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19415__$1,(4),ch);
} else {
if((state_val_19416 === (11))){
var inst_19395 = (state_19415[(2)]);
var inst_19396 = (new Array(n));
var inst_19379 = inst_19396;
var inst_19380 = (0);
var state_19415__$1 = (function (){var statearr_19432 = state_19415;
(statearr_19432[(7)] = inst_19379);

(statearr_19432[(8)] = inst_19380);

(statearr_19432[(10)] = inst_19395);

return statearr_19432;
})();
var statearr_19434_20404 = state_19415__$1;
(statearr_19434_20404[(2)] = null);

(statearr_19434_20404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (9))){
var inst_19379 = (state_19415[(7)]);
var inst_19393 = cljs.core.vec(inst_19379);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19415__$1,(11),out,inst_19393);
} else {
if((state_val_19416 === (5))){
var inst_19379 = (state_19415[(7)]);
var inst_19380 = (state_19415[(8)]);
var inst_19388 = (state_19415[(11)]);
var inst_19383 = (state_19415[(9)]);
var inst_19387 = (inst_19379[inst_19380] = inst_19383);
var inst_19388__$1 = (inst_19380 + (1));
var inst_19389 = (inst_19388__$1 < n);
var state_19415__$1 = (function (){var statearr_19435 = state_19415;
(statearr_19435[(12)] = inst_19387);

(statearr_19435[(11)] = inst_19388__$1);

return statearr_19435;
})();
if(cljs.core.truth_(inst_19389)){
var statearr_19436_20410 = state_19415__$1;
(statearr_19436_20410[(1)] = (8));

} else {
var statearr_19439_20411 = state_19415__$1;
(statearr_19439_20411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (14))){
var inst_19408 = (state_19415[(2)]);
var inst_19409 = cljs.core.async.close_BANG_(out);
var state_19415__$1 = (function (){var statearr_19441 = state_19415;
(statearr_19441[(13)] = inst_19408);

return statearr_19441;
})();
var statearr_19442_20412 = state_19415__$1;
(statearr_19442_20412[(2)] = inst_19409);

(statearr_19442_20412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (10))){
var inst_19399 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19443_20417 = state_19415__$1;
(statearr_19443_20417[(2)] = inst_19399);

(statearr_19443_20417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (8))){
var inst_19379 = (state_19415[(7)]);
var inst_19388 = (state_19415[(11)]);
var tmp19440 = inst_19379;
var inst_19379__$1 = tmp19440;
var inst_19380 = inst_19388;
var state_19415__$1 = (function (){var statearr_19444 = state_19415;
(statearr_19444[(7)] = inst_19379__$1);

(statearr_19444[(8)] = inst_19380);

return statearr_19444;
})();
var statearr_19445_20420 = state_19415__$1;
(statearr_19445_20420[(2)] = null);

(statearr_19445_20420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_19446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19446[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_19446[(1)] = (1));

return statearr_19446;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_19415){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_19415);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19447){var ex__17097__auto__ = e19447;
var statearr_19448_20424 = state_19415;
(statearr_19448_20424[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_19415[(4)]))){
var statearr_19449_20426 = state_19415;
(statearr_19449_20426[(1)] = cljs.core.first((state_19415[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20427 = state_19415;
state_19415 = G__20427;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19450 = f__17263__auto__();
(statearr_19450[(6)] = c__17262__auto___20379);

return statearr_19450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19452 = arguments.length;
switch (G__19452) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17262__auto___20429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17263__auto__ = (function (){var switch__17093__auto__ = (function (state_19500){
var state_val_19501 = (state_19500[(1)]);
if((state_val_19501 === (7))){
var inst_19496 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
var statearr_19505_20430 = state_19500__$1;
(statearr_19505_20430[(2)] = inst_19496);

(statearr_19505_20430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (1))){
var inst_19456 = [];
var inst_19457 = inst_19456;
var inst_19458 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19500__$1 = (function (){var statearr_19510 = state_19500;
(statearr_19510[(7)] = inst_19457);

(statearr_19510[(8)] = inst_19458);

return statearr_19510;
})();
var statearr_19511_20431 = state_19500__$1;
(statearr_19511_20431[(2)] = null);

(statearr_19511_20431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (4))){
var inst_19461 = (state_19500[(9)]);
var inst_19461__$1 = (state_19500[(2)]);
var inst_19462 = (inst_19461__$1 == null);
var inst_19463 = cljs.core.not(inst_19462);
var state_19500__$1 = (function (){var statearr_19515 = state_19500;
(statearr_19515[(9)] = inst_19461__$1);

return statearr_19515;
})();
if(inst_19463){
var statearr_19519_20432 = state_19500__$1;
(statearr_19519_20432[(1)] = (5));

} else {
var statearr_19520_20433 = state_19500__$1;
(statearr_19520_20433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (15))){
var inst_19457 = (state_19500[(7)]);
var inst_19488 = cljs.core.vec(inst_19457);
var state_19500__$1 = state_19500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19500__$1,(18),out,inst_19488);
} else {
if((state_val_19501 === (13))){
var inst_19483 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
var statearr_19521_20434 = state_19500__$1;
(statearr_19521_20434[(2)] = inst_19483);

(statearr_19521_20434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (6))){
var inst_19457 = (state_19500[(7)]);
var inst_19485 = inst_19457.length;
var inst_19486 = (inst_19485 > (0));
var state_19500__$1 = state_19500;
if(cljs.core.truth_(inst_19486)){
var statearr_19526_20435 = state_19500__$1;
(statearr_19526_20435[(1)] = (15));

} else {
var statearr_19530_20436 = state_19500__$1;
(statearr_19530_20436[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (17))){
var inst_19493 = (state_19500[(2)]);
var inst_19494 = cljs.core.async.close_BANG_(out);
var state_19500__$1 = (function (){var statearr_19534 = state_19500;
(statearr_19534[(10)] = inst_19493);

return statearr_19534;
})();
var statearr_19535_20437 = state_19500__$1;
(statearr_19535_20437[(2)] = inst_19494);

(statearr_19535_20437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (3))){
var inst_19498 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19500__$1,inst_19498);
} else {
if((state_val_19501 === (12))){
var inst_19457 = (state_19500[(7)]);
var inst_19476 = cljs.core.vec(inst_19457);
var state_19500__$1 = state_19500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19500__$1,(14),out,inst_19476);
} else {
if((state_val_19501 === (2))){
var state_19500__$1 = state_19500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19500__$1,(4),ch);
} else {
if((state_val_19501 === (11))){
var inst_19465 = (state_19500[(11)]);
var inst_19457 = (state_19500[(7)]);
var inst_19461 = (state_19500[(9)]);
var inst_19473 = inst_19457.push(inst_19461);
var tmp19536 = inst_19457;
var inst_19457__$1 = tmp19536;
var inst_19458 = inst_19465;
var state_19500__$1 = (function (){var statearr_19547 = state_19500;
(statearr_19547[(12)] = inst_19473);

(statearr_19547[(7)] = inst_19457__$1);

(statearr_19547[(8)] = inst_19458);

return statearr_19547;
})();
var statearr_19551_20438 = state_19500__$1;
(statearr_19551_20438[(2)] = null);

(statearr_19551_20438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (9))){
var inst_19458 = (state_19500[(8)]);
var inst_19469 = cljs.core.keyword_identical_QMARK_(inst_19458,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19500__$1 = state_19500;
var statearr_19556_20439 = state_19500__$1;
(statearr_19556_20439[(2)] = inst_19469);

(statearr_19556_20439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (5))){
var inst_19465 = (state_19500[(11)]);
var inst_19466 = (state_19500[(13)]);
var inst_19458 = (state_19500[(8)]);
var inst_19461 = (state_19500[(9)]);
var inst_19465__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19461) : f.call(null,inst_19461));
var inst_19466__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19465__$1,inst_19458);
var state_19500__$1 = (function (){var statearr_19557 = state_19500;
(statearr_19557[(11)] = inst_19465__$1);

(statearr_19557[(13)] = inst_19466__$1);

return statearr_19557;
})();
if(inst_19466__$1){
var statearr_19558_20457 = state_19500__$1;
(statearr_19558_20457[(1)] = (8));

} else {
var statearr_19559_20458 = state_19500__$1;
(statearr_19559_20458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (14))){
var inst_19465 = (state_19500[(11)]);
var inst_19461 = (state_19500[(9)]);
var inst_19478 = (state_19500[(2)]);
var inst_19479 = [];
var inst_19480 = inst_19479.push(inst_19461);
var inst_19457 = inst_19479;
var inst_19458 = inst_19465;
var state_19500__$1 = (function (){var statearr_19560 = state_19500;
(statearr_19560[(14)] = inst_19478);

(statearr_19560[(15)] = inst_19480);

(statearr_19560[(7)] = inst_19457);

(statearr_19560[(8)] = inst_19458);

return statearr_19560;
})();
var statearr_19563_20459 = state_19500__$1;
(statearr_19563_20459[(2)] = null);

(statearr_19563_20459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (16))){
var state_19500__$1 = state_19500;
var statearr_19564_20460 = state_19500__$1;
(statearr_19564_20460[(2)] = null);

(statearr_19564_20460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (10))){
var inst_19471 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
if(cljs.core.truth_(inst_19471)){
var statearr_19565_20461 = state_19500__$1;
(statearr_19565_20461[(1)] = (11));

} else {
var statearr_19566_20466 = state_19500__$1;
(statearr_19566_20466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (18))){
var inst_19490 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
var statearr_19567_20470 = state_19500__$1;
(statearr_19567_20470[(2)] = inst_19490);

(statearr_19567_20470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (8))){
var inst_19466 = (state_19500[(13)]);
var state_19500__$1 = state_19500;
var statearr_19568_20472 = state_19500__$1;
(statearr_19568_20472[(2)] = inst_19466);

(statearr_19568_20472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17094__auto__ = null;
var cljs$core$async$state_machine__17094__auto____0 = (function (){
var statearr_19569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19569[(0)] = cljs$core$async$state_machine__17094__auto__);

(statearr_19569[(1)] = (1));

return statearr_19569;
});
var cljs$core$async$state_machine__17094__auto____1 = (function (state_19500){
while(true){
var ret_value__17095__auto__ = (function (){try{while(true){
var result__17096__auto__ = switch__17093__auto__(state_19500);
if(cljs.core.keyword_identical_QMARK_(result__17096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17096__auto__;
}
break;
}
}catch (e19570){var ex__17097__auto__ = e19570;
var statearr_19571_20473 = state_19500;
(statearr_19571_20473[(2)] = ex__17097__auto__);


if(cljs.core.seq((state_19500[(4)]))){
var statearr_19572_20474 = state_19500;
(statearr_19572_20474[(1)] = cljs.core.first((state_19500[(4)])));

} else {
throw ex__17097__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20483 = state_19500;
state_19500 = G__20483;
continue;
} else {
return ret_value__17095__auto__;
}
break;
}
});
cljs$core$async$state_machine__17094__auto__ = function(state_19500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17094__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17094__auto____1.call(this,state_19500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17094__auto____0;
cljs$core$async$state_machine__17094__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17094__auto____1;
return cljs$core$async$state_machine__17094__auto__;
})()
})();
var state__17264__auto__ = (function (){var statearr_19573 = f__17263__auto__();
(statearr_19573[(6)] = c__17262__auto___20429);

return statearr_19573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17264__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
