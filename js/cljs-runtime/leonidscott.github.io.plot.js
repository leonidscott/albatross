goog.provide('leonidscott.github.io.plot');
var module$node_modules$plotly_DOT_js_dist_min$plotly_min=shadow.js.require("module$node_modules$plotly_DOT_js_dist_min$plotly_min", {});
re_frame.core.reg_fx(new cljs.core.Keyword("effects","plot!","effects/plot!",-1465907427),(function (p__26763){
var map__26764 = p__26763;
var map__26764__$1 = cljs.core.__destructure_map(map__26764);
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"element-id","element-id",798606230));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26764__$1,new cljs.core.Keyword(null,"config","config",994861415));
return module$node_modules$plotly_DOT_js_dist_min$plotly_min.react(document.getElementById(element_id),cljs.core.clj__GT_js(data),cljs.core.clj__GT_js((cljs.core.truth_(layout)?layout:cljs.core.PersistentArrayMap.EMPTY)),cljs.core.clj__GT_js((cljs.core.truth_(config)?config:cljs.core.PersistentArrayMap.EMPTY)));
}));
leonidscott.github.io.events.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","plot","events/plot",-883251350),(function (_,p__26765){
var vec__26766 = p__26765;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766,(0),null);
var plot_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26766,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("effects","plot!","effects/plot!",-1465907427),plot_map], null);
}));
leonidscott.github.io.plot.plot = (function leonidscott$github$io$plot$plot(_){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__26771){
var map__26772 = p__26771;
var map__26772__$1 = cljs.core.__destructure_map(map__26772);
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26772__$1,new cljs.core.Keyword(null,"element-id","element-id",798606230));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),element_id], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__26769_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","plot","events/plot",-883251350),reagent.core.props(p1__26769_SHARP_)], null));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (p1__26770_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","plot","events/plot",-883251350),reagent.core.props(p1__26770_SHARP_)], null));
})], null));
});
/**
 * x = a cos(t)
 * y = b sin(t)
 */
leonidscott.github.io.plot.ellipse_data = (function leonidscott$github$io$plot$ellipse_data(a,b){
var ϴ_points = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),((2) * Math.PI),(Math.PI / (50)))));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ϴ){
return (a * Math.cos(ϴ));
}),ϴ_points),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ϴ){
return (b * Math.sin(ϴ));
}),ϴ_points)], null)], null);
});
leonidscott.github.io.plot.ellipse_plot = (function leonidscott$github$io$plot$ellipse_plot(){
var ellipse_params = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(5),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null));
return (function (){
var map__26777 = cljs.core.deref(ellipse_params);
var map__26777__$1 = cljs.core.__destructure_map(map__26777);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26777__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-plot","div.main-plot",23677087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.plot.plot,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"ellipse-plot",new cljs.core.Keyword(null,"data","data",-232669377),leonidscott.github.io.plot.ellipse_data(a,b),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b","b",1482224470),(30),new cljs.core.Keyword(null,"l","l",1395893423),(30),new cljs.core.Keyword(null,"t","t",-1397832519),(30),new cljs.core.Keyword(null,"r","r",-471384190),(30)], null),new cljs.core.Keyword(null,"xaxis","xaxis",488378734),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(20)], null),new cljs.core.Keyword(null,"showgrid","showgrid",476111604),false,new cljs.core.Keyword(null,"zeroline","zeroline",-232866385),false,new cljs.core.Keyword(null,"showline","showline",-1948574348),true], null),new cljs.core.Keyword(null,"yaxis","yaxis",-1783465932),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-20),(20)], null),new cljs.core.Keyword(null,"showgrid","showgrid",476111604),false,new cljs.core.Keyword(null,"zeroline","zeroline",-232866385),false,new cljs.core.Keyword(null,"showline","showline",-1948574348),true], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"staticPlot","staticPlot",-111034272),true,new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),a,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26773_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ellipse_params,cljs.core.assoc,new cljs.core.Keyword(null,"a","a",-2123407586),p1__26773_SHARP_);
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),b,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26774_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ellipse_params,cljs.core.assoc,new cljs.core.Keyword(null,"b","b",1482224470),p1__26774_SHARP_);
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(20)], null)], null)], null)], null);
});
});

//# sourceMappingURL=leonidscott.github.io.plot.js.map
