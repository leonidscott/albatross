goog.provide('leonidscott.github.io.core');
leonidscott.github.io.core.banner = (function leonidscott$github$io$core$banner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner","div.banner",1606340820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.banner-text","h1.banner-text",-441169358),"Albatross"], null)], null);
});
leonidscott.github.io.core.home_page = (function leonidscott$github$io$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.core.banner], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.naca.naca_plot], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.naca_text.text], null)], null);
});
leonidscott.github.io.core.dev_setup = (function leonidscott$github$io$core$dev_setup(){
if(leonidscott.github.io.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
leonidscott.github.io.core.mount_root = (function leonidscott$github$io$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.core.home_page], null),root_el);
});
leonidscott.github.io.core.init = (function leonidscott$github$io$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("leonidscott.github.io.events","initialize-db","leonidscott.github.io.events/initialize-db",344809240)], null));

leonidscott.github.io.core.dev_setup();

return leonidscott.github.io.core.mount_root();
});

//# sourceMappingURL=leonidscott.github.io.core.js.map
