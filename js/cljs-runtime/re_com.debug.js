goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__25129){
var map__25130 = p__25129;
var map__25130__$1 = cljs.core.__destructure_map(map__25130);
var args = map__25130__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__25134 = src;
var map__25134__$1 = cljs.core.__destructure_map(map__25134);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25134__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__25139 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25139,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__25139;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__25152 = arguments.length;
switch (G__25152) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__25196_25324 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25195_SHARP_,p2__25194_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__25194_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__25195_SHARP_ + (1)));
}),stack));
var chunk__25200_25325 = null;
var count__25201_25326 = (0);
var i__25202_25327 = (0);
while(true){
if((i__25202_25327 < count__25201_25326)){
var map__25223_25329 = chunk__25200_25325.cljs$core$IIndexed$_nth$arity$2(null,i__25202_25327);
var map__25223_25330__$1 = cljs.core.__destructure_map(map__25223_25329);
var i_25331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25330__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_25332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25330__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_25333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25330__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_25334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25330__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_25335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25330__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_25333)){
if(cljs.core.truth_(src_25334)){
var vec__25227_25337 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_25334,/:/);
var file_25338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25227_25337,(0),null);
var line_25339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25227_25337,(1),null);
if(cljs.core.truth_(args_25335)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25331),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_25333)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_25338),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25339),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_25335,el_25332);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25331),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_25333)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_25338),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25339),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_25332);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25331),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_25333)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_25335,el_25332);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25331),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_25332);
}


var G__25345 = seq__25196_25324;
var G__25346 = chunk__25200_25325;
var G__25347 = count__25201_25326;
var G__25348 = (i__25202_25327 + (1));
seq__25196_25324 = G__25345;
chunk__25200_25325 = G__25346;
count__25201_25326 = G__25347;
i__25202_25327 = G__25348;
continue;
} else {
var temp__5804__auto___25349 = cljs.core.seq(seq__25196_25324);
if(temp__5804__auto___25349){
var seq__25196_25350__$1 = temp__5804__auto___25349;
if(cljs.core.chunked_seq_QMARK_(seq__25196_25350__$1)){
var c__5568__auto___25351 = cljs.core.chunk_first(seq__25196_25350__$1);
var G__25352 = cljs.core.chunk_rest(seq__25196_25350__$1);
var G__25353 = c__5568__auto___25351;
var G__25354 = cljs.core.count(c__5568__auto___25351);
var G__25355 = (0);
seq__25196_25324 = G__25352;
chunk__25200_25325 = G__25353;
count__25201_25326 = G__25354;
i__25202_25327 = G__25355;
continue;
} else {
var map__25232_25356 = cljs.core.first(seq__25196_25350__$1);
var map__25232_25357__$1 = cljs.core.__destructure_map(map__25232_25356);
var i_25358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232_25357__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_25359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232_25357__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_25360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232_25357__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_25361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232_25357__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_25362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25232_25357__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_25360)){
if(cljs.core.truth_(src_25361)){
var vec__25234_25363 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_25361,/:/);
var file_25364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25234_25363,(0),null);
var line_25365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25234_25363,(1),null);
if(cljs.core.truth_(args_25362)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25358),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_25360)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_25364),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25365),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_25362,el_25359);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25358),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_25360)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_25364),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25365),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_25359);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25358),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_25360)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_25362,el_25359);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_25358),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_25359);
}


var G__25368 = cljs.core.next(seq__25196_25350__$1);
var G__25369 = null;
var G__25370 = (0);
var G__25371 = (0);
seq__25196_25324 = G__25368;
chunk__25200_25325 = G__25369;
count__25201_25326 = G__25370;
i__25202_25327 = G__25371;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__25241 = cljs.core.seq(problems);
var chunk__25242 = null;
var count__25243 = (0);
var i__25244 = (0);
while(true){
if((i__25244 < count__25243)){
var map__25256 = chunk__25242.cljs$core$IIndexed$_nth$arity$2(null,i__25244);
var map__25256__$1 = cljs.core.__destructure_map(map__25256);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25256__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25256__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25256__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25256__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25256__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__25258_25375 = problem;
var G__25258_25376__$1 = (((G__25258_25375 instanceof cljs.core.Keyword))?G__25258_25375.fqn:null);
switch (G__25258_25376__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__25378 = seq__25241;
var G__25379 = chunk__25242;
var G__25380 = count__25243;
var G__25381 = (i__25244 + (1));
seq__25241 = G__25378;
chunk__25242 = G__25379;
count__25243 = G__25380;
i__25244 = G__25381;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25241);
if(temp__5804__auto__){
var seq__25241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25241__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25241__$1);
var G__25382 = cljs.core.chunk_rest(seq__25241__$1);
var G__25383 = c__5568__auto__;
var G__25384 = cljs.core.count(c__5568__auto__);
var G__25385 = (0);
seq__25241 = G__25382;
chunk__25242 = G__25383;
count__25243 = G__25384;
i__25244 = G__25385;
continue;
} else {
var map__25264 = cljs.core.first(seq__25241__$1);
var map__25264__$1 = cljs.core.__destructure_map(map__25264);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25264__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25264__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25264__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25264__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25264__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__25267_25386 = problem;
var G__25267_25387__$1 = (((G__25267_25386 instanceof cljs.core.Keyword))?G__25267_25386.fqn:null);
switch (G__25267_25387__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__25398 = cljs.core.next(seq__25241__$1);
var G__25399 = null;
var G__25400 = (0);
var G__25401 = (0);
seq__25241 = G__25398;
chunk__25242 = G__25399;
count__25243 = G__25400;
i__25244 = G__25401;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__25276){
var map__25279 = p__25276;
var map__25279__$1 = cljs.core.__destructure_map(map__25279);
var src = map__25279__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25407 = arguments.length;
var i__5770__auto___25408 = (0);
while(true){
if((i__5770__auto___25408 < len__5769__auto___25407)){
args__5775__auto__.push((arguments[i__5770__auto___25408]));

var G__25409 = (i__5770__auto___25408 + (1));
i__5770__auto___25408 = G__25409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__25293){
var map__25294 = p__25293;
var map__25294__$1 = cljs.core.__destructure_map(map__25294);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25294__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25294__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25294__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__25420__delegate = function (p__25297){
var map__25298 = p__25297;
var map__25298__$1 = cljs.core.__destructure_map(map__25298);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25298__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25298__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25298__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__25420 = function (var_args){
var p__25297 = null;
if (arguments.length > 0) {
var G__25422__i = 0, G__25422__a = new Array(arguments.length -  0);
while (G__25422__i < G__25422__a.length) {G__25422__a[G__25422__i] = arguments[G__25422__i + 0]; ++G__25422__i;}
  p__25297 = new cljs.core.IndexedSeq(G__25422__a,0,null);
} 
return G__25420__delegate.call(this,p__25297);};
G__25420.cljs$lang$maxFixedArity = 0;
G__25420.cljs$lang$applyTo = (function (arglist__25423){
var p__25297 = cljs.core.seq(arglist__25423);
return G__25420__delegate(p__25297);
});
G__25420.cljs$core$IFn$_invoke$arity$variadic = G__25420__delegate;
return G__25420;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq25290){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25290));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25424 = arguments.length;
var i__5770__auto___25425 = (0);
while(true){
if((i__5770__auto___25425 < len__5769__auto___25424)){
args__5775__auto__.push((arguments[i__5770__auto___25425]));

var G__25426 = (i__5770__auto___25425 + (1));
i__5770__auto___25425 = G__25426;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__25302){
var map__25303 = p__25302;
var map__25303__$1 = cljs.core.__destructure_map(map__25303);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25303__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25303__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__25431__delegate = function (p__25306){
var map__25307 = p__25306;
var map__25307__$1 = cljs.core.__destructure_map(map__25307);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25307__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25307__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__25431 = function (var_args){
var p__25306 = null;
if (arguments.length > 0) {
var G__25432__i = 0, G__25432__a = new Array(arguments.length -  0);
while (G__25432__i < G__25432__a.length) {G__25432__a[G__25432__i] = arguments[G__25432__i + 0]; ++G__25432__i;}
  p__25306 = new cljs.core.IndexedSeq(G__25432__a,0,null);
} 
return G__25431__delegate.call(this,p__25306);};
G__25431.cljs$lang$maxFixedArity = 0;
G__25431.cljs$lang$applyTo = (function (arglist__25433){
var p__25306 = cljs.core.seq(arglist__25433);
return G__25431__delegate(p__25306);
});
G__25431.cljs$core$IFn$_invoke$arity$variadic = G__25431__delegate;
return G__25431;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq25301){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25301));
}));


//# sourceMappingURL=re_com.debug.js.map
