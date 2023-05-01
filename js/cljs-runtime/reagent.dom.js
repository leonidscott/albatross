goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__24493 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24494 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24494);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__24495 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24496 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24496);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24495);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24493);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__24506 = arguments.length;
switch (G__24506) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__24511 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__24530_24569 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__24531_24570 = null;
var count__24532_24571 = (0);
var i__24533_24572 = (0);
while(true){
if((i__24533_24572 < count__24532_24571)){
var vec__24551_24573 = chunk__24531_24570.cljs$core$IIndexed$_nth$arity$2(null,i__24533_24572);
var container_24574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551_24573,(0),null);
var comp_24575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24551_24573,(1),null);
reagent.dom.re_render_component(comp_24575,container_24574);


var G__24577 = seq__24530_24569;
var G__24578 = chunk__24531_24570;
var G__24579 = count__24532_24571;
var G__24580 = (i__24533_24572 + (1));
seq__24530_24569 = G__24577;
chunk__24531_24570 = G__24578;
count__24532_24571 = G__24579;
i__24533_24572 = G__24580;
continue;
} else {
var temp__5804__auto___24582 = cljs.core.seq(seq__24530_24569);
if(temp__5804__auto___24582){
var seq__24530_24583__$1 = temp__5804__auto___24582;
if(cljs.core.chunked_seq_QMARK_(seq__24530_24583__$1)){
var c__5568__auto___24584 = cljs.core.chunk_first(seq__24530_24583__$1);
var G__24585 = cljs.core.chunk_rest(seq__24530_24583__$1);
var G__24586 = c__5568__auto___24584;
var G__24587 = cljs.core.count(c__5568__auto___24584);
var G__24588 = (0);
seq__24530_24569 = G__24585;
chunk__24531_24570 = G__24586;
count__24532_24571 = G__24587;
i__24533_24572 = G__24588;
continue;
} else {
var vec__24558_24589 = cljs.core.first(seq__24530_24583__$1);
var container_24590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24558_24589,(0),null);
var comp_24591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24558_24589,(1),null);
reagent.dom.re_render_component(comp_24591,container_24590);


var G__24593 = cljs.core.next(seq__24530_24583__$1);
var G__24594 = null;
var G__24595 = (0);
var G__24596 = (0);
seq__24530_24569 = G__24593;
chunk__24531_24570 = G__24594;
count__24532_24571 = G__24595;
i__24533_24572 = G__24596;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
