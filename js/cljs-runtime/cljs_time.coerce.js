goog.provide('cljs_time.coerce');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_25769 = (function (obj){
var x__5393__auto__ = (((obj == null))?null:obj);
var m__5394__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5394__auto__.call(null,obj));
} else {
var m__5392__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__5392__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_25769(obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__25711 = millis;
if((G__25711 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__25711) : goog.date.UtcDateTime.fromTimestamp.call(null,G__25711));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__5523__auto__ = (function cljs_time$coerce$from_string_$_iter__25713(s__25714){
return (new cljs.core.LazySeq(null,(function (){
var s__25714__$1 = s__25714;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25714__$1);
if(temp__5804__auto__){
var s__25714__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25714__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25714__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25716 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25715 = (0);
while(true){
if((i__25715 < size__5522__auto__)){
var f = cljs.core._nth(c__5521__auto__,i__25715);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e25721){if((e25721 instanceof Error)){
var _ = e25721;
return null;
} else {
throw e25721;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__25716,d);

var G__25770 = (i__25715 + (1));
i__25715 = G__25770;
continue;
} else {
var G__25771 = (i__25715 + (1));
i__25715 = G__25771;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25716),cljs_time$coerce$from_string_$_iter__25713(cljs.core.chunk_rest(s__25714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25716),null);
}
} else {
var f = cljs.core.first(s__25714__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e25724){if((e25724 instanceof Error)){
var _ = e25724;
return null;
} else {
throw e25724;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__25713(cljs.core.rest(s__25714__$2)));
} else {
var G__25772 = cljs.core.rest(s__25714__$2);
s__25714__$1 = G__25772;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__25728 = date;
var G__25728__$1 = (((G__25728 == null))?null:G__25728.getTime());
if((G__25728__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__25728__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__25737 = obj;
var G__25737__$1 = (((G__25737 == null))?null:cljs_time.coerce.to_date_time(G__25737));
if((G__25737__$1 == null)){
return null;
} else {
return G__25737__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__5043__auto__ = millis;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__5043__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__25740 = obj;
var G__25740__$1 = (((G__25740 == null))?null:cljs_time.coerce.to_date_time(G__25740));
var G__25740__$2 = (((G__25740__$1 == null))?null:G__25740__$1.getTime());
if((G__25740__$2 == null)){
return null;
} else {
return (new Date(G__25740__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__25754 = obj;
var G__25754__$1 = (((G__25754 == null))?null:cljs_time.coerce.to_date_time(G__25754));
if((G__25754__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__25754__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5802__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5802__auto__)){
var dt = temp__5802__auto__;
var G__25762 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__25762.setHours(dt.getHours());

G__25762.setMinutes(dt.getMinutes());

G__25762.setSeconds(dt.getSeconds());

G__25762.setMilliseconds(dt.getMilliseconds());

return G__25762;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));

//# sourceMappingURL=cljs_time.coerce.js.map
