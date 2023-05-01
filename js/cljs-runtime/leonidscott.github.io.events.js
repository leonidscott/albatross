goog.provide('leonidscott.github.io.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("leonidscott.github.io.events","initialize-db","leonidscott.github.io.events/initialize-db",344809240),(function (_,___$1){
return leonidscott.github.io.db.default_db;
}));
leonidscott.github.io.events.reg_event_fx = (function leonidscott$github$io$events$reg_event_fx(var_args){
var G__24646 = arguments.length;
switch (G__24646) {
case 2:
return leonidscott.github.io.events.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return leonidscott.github.io.events.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(leonidscott.github.io.events.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return leonidscott.github.io.events.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(leonidscott.github.io.events.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,interceptors,handler);
}));

(leonidscott.github.io.events.reg_event_fx.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=leonidscott.github.io.events.js.map
