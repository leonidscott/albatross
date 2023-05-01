goog.provide('leonidscott.github.io.naca');
/**
 * y_{c}(x) =
 *   if (0 <= x < p)  => (m/p^2) * (2px - x^2)
 *   if (p <= x <= 1) => (m/(1-p)^2) * (1 - 2p + 2px - x^2)
 *   else             => 0
 */
leonidscott.github.io.naca.camber_line_fn = (function leonidscott$github$io$naca$camber_line_fn(p__26778){
var map__26779 = p__26778;
var map__26779__$1 = cljs.core.__destructure_map(map__26779);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26779__$1,new cljs.core.Keyword(null,"p","p",151049309));
return (function (x){
if(((((0) <= x)) && ((x < p)))){
return ((m / Math.pow(p,(2))) * ((((2) * p) * x) - Math.pow(x,(2))));
} else {
if((((p <= x)) && ((x <= (1))))){
return ((m / Math.pow(((1) - p),(2))) * ((((1) + ((-2) * p)) + (((2) * p) * x)) + ((-1) * Math.pow(x,(2)))));
} else {
return (0);

}
}
});
});
/**
 * dy_{c}/dx(x) =
 *    if (0 <= x < p)  => 2m/p^2 (p - x)
 *    if (p <= x <= 1) => 2m/(1-p)^2 (p - x)
 *    else             => 0
 */
leonidscott.github.io.naca.camber_line_gradient_fn = (function leonidscott$github$io$naca$camber_line_gradient_fn(p__26780){
var map__26781 = p__26780;
var map__26781__$1 = cljs.core.__destructure_map(map__26781);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26781__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26781__$1,new cljs.core.Keyword(null,"p","p",151049309));
return (function (x){
if(((((0) <= x)) && ((x < p)))){
return ((((2) * m) / Math.pow(p,(2))) * (p - x));
} else {
if((((p <= x)) && ((x <= (1))))){
return ((((2) * m) / Math.pow(((1) - p),(2))) * (p - x));
} else {
return (0);

}
}
});
});
/**
 * y_{t}(x) = (t/0.2) * (a0 sqrt(x) + a1 x + a2 x^2 + a3 x^3 + a4 x^4)
 * 
 * a0 = 0.2969;
 * a1 = -0.126;
 * a2 = -0.3516;
 * a3 = 0.2843;
 * a4 = -0.1015; (* open trainling edge*)
 * a4 = -0.1036; (* closed trainling edge*)
 */
leonidscott.github.io.naca.thickness_distrubtion_fn = (function leonidscott$github$io$naca$thickness_distrubtion_fn(p__26782){
var map__26783 = p__26782;
var map__26783__$1 = cljs.core.__destructure_map(map__26783);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var a0 = 0.2969;
var a1 = -0.126;
var a2 = -0.3516;
var a3 = 0.284;
var a4 = (cljs.core.truth_(open_QMARK_)?-0.1015:-0.1036);
return (function (x){
return ((t / 0.2) * (((((a0 * Math.sqrt(x)) + (a1 * x)) + (a2 * Math.pow(x,(2)))) + (a3 * Math.pow(x,(3)))) + (a4 * Math.pow(x,(4)))));
});
});
/**
 * HOF that takes in:
 *  y_c(x) <- camber line function
 *  y_t(x) <- thickness distribution function
 *  ϴ(x)   <- change of coordinate system function
 * Returns a function that,
 *  when called with a cartesian x coordinate representing a point on the cord line,
 *  returns a tuple containing the x and y coordinate to the corresponding point on the upper surface of the foil.
 */
leonidscott.github.io.naca.upper_surface_fn = (function leonidscott$github$io$naca$upper_surface_fn(yc,yt,ϴ){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - ((yt.cljs$core$IFn$_invoke$arity$1 ? yt.cljs$core$IFn$_invoke$arity$1(x) : yt.call(null,x)) * Math.sin((ϴ.cljs$core$IFn$_invoke$arity$1 ? ϴ.cljs$core$IFn$_invoke$arity$1(x) : ϴ.call(null,x))))),new cljs.core.Keyword(null,"y","y",-1757859776),((yc.cljs$core$IFn$_invoke$arity$1 ? yc.cljs$core$IFn$_invoke$arity$1(x) : yc.call(null,x)) + ((yt.cljs$core$IFn$_invoke$arity$1 ? yt.cljs$core$IFn$_invoke$arity$1(x) : yt.call(null,x)) * Math.cos((ϴ.cljs$core$IFn$_invoke$arity$1 ? ϴ.cljs$core$IFn$_invoke$arity$1(x) : ϴ.call(null,x)))))], null);
});
});
/**
 * HOF that takes in:
 *  y_c(x) <- camber line function
 *  y_t(x) <- thickness distribution function
 *  ϴ(x)   <- change of coordinate system function
 * Returns a function that,
 *  when called with a cartesian x coordinate representing a point on the cord line,
 *  returns a tuple containing the x and y coordinate to the corresponding point on the lower surface of the foil.
 */
leonidscott.github.io.naca.lower_surface_fn = (function leonidscott$github$io$naca$lower_surface_fn(yc,yt,ϴ){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + ((yt.cljs$core$IFn$_invoke$arity$1 ? yt.cljs$core$IFn$_invoke$arity$1(x) : yt.call(null,x)) * Math.sin((ϴ.cljs$core$IFn$_invoke$arity$1 ? ϴ.cljs$core$IFn$_invoke$arity$1(x) : ϴ.call(null,x))))),new cljs.core.Keyword(null,"y","y",-1757859776),((yc.cljs$core$IFn$_invoke$arity$1 ? yc.cljs$core$IFn$_invoke$arity$1(x) : yc.call(null,x)) - ((yt.cljs$core$IFn$_invoke$arity$1 ? yt.cljs$core$IFn$_invoke$arity$1(x) : yt.call(null,x)) * Math.cos((ϴ.cljs$core$IFn$_invoke$arity$1 ? ϴ.cljs$core$IFn$_invoke$arity$1(x) : ϴ.call(null,x)))))], null);
});
});
leonidscott.github.io.naca.naca_data = (function leonidscott$github$io$naca$naca_data(naca_params){
var x_points = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (β){
return (((1) - Math.cos(β)) / (2));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),Math.PI,(Math.PI / (50))))));
var y_c = leonidscott.github.io.naca.camber_line_fn(naca_params);
var y_t = leonidscott.github.io.naca.thickness_distrubtion_fn(naca_params);
var ϴ = (function (x){
return Math.atan(leonidscott.github.io.naca.camber_line_gradient_fn(naca_params)(x));
});
var u_points = cljs.core.map.cljs$core$IFn$_invoke$arity$2(leonidscott.github.io.naca.upper_surface_fn(y_c,y_t,ϴ),x_points);
var l_points = cljs.core.map.cljs$core$IFn$_invoke$arity$2(leonidscott.github.io.naca.lower_surface_fn(y_c,y_t,ϴ),x_points);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x_points,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.map.cljs$core$IFn$_invoke$arity$2(y_c,x_points)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26784_SHARP_,p2__26785_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26784_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2__26785_SHARP_));
}),cljs.core.PersistentVector.EMPTY,u_points),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26786_SHARP_,p2__26787_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26786_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2__26787_SHARP_));
}),cljs.core.PersistentVector.EMPTY,u_points)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26788_SHARP_,p2__26789_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26788_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2__26789_SHARP_));
}),cljs.core.PersistentVector.EMPTY,l_points),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26790_SHARP_,p2__26791_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26790_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2__26791_SHARP_));
}),cljs.core.PersistentVector.EMPTY,l_points)], null)], null);
});
leonidscott.github.io.naca.param_slider = (function leonidscott$github$io$naca$param_slider(p__26792){
var map__26793 = p__26792;
var map__26793__$1 = cljs.core.__destructure_map(map__26793);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26793__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26793__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26793__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26793__$1,new cljs.core.Keyword(null,"max","max",61366548));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26793__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),text], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em"], null)], null),goog.string.format("range from %s to %s",min,max)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"nowrap",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"model","model",331153215),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),(max / (100)),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"70%"], null)], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),value.toString(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"width","width",-384071477),"55px"], null)], null)], null);
});
leonidscott.github.io.naca.naca_text = (function leonidscott$github$io$naca$naca_text(p__26794){
var map__26795 = p__26794;
var map__26795__$1 = cljs.core.__destructure_map(map__26795);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"p","p",151049309));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var m_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"m-scale","m-scale",-1264292786));
var p_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"p-scale","p-scale",-1040179341));
var t_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"t-scale","t-scale",-1410063207));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26795__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var round_fn = (function (par){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140))){
return (par | (0));
} else {
return goog.string.format("%.2f",par);
}
});
var m__$1 = round_fn((m * m_scale));
var p__$1 = round_fn((p * p_scale));
var t__$1 = round_fn((t * t_scale));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140)))?goog.string.format("NACA %s%s%s",m__$1,p__$1,(((t__$1 < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__$1)].join(''):t__$1)):goog.string.format("NACA\n(%s, %s, %s)",m__$1,p__$1,t__$1))], null);
});
leonidscott.github.io.naca.naca_plot = (function leonidscott$github$io$naca$naca_plot(){
var naca_params = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"m","m",1632677161),0.02,new cljs.core.Keyword(null,"p","p",151049309),0.4,new cljs.core.Keyword(null,"t","t",-1397832519),0.12,new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140)], null));
return (function (){
var m_scale = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140),new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params))))?(100):(1));
var p_scale = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140),new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params))))?(10):(1));
var t_scale = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140),new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params))))?(100):(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-plot","div.main-plot",23677087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.plot.plot,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"element-id","element-id",798606230),"naca-plot",new cljs.core.Keyword(null,"data","data",-232669377),leonidscott.github.io.naca.naca_data(cljs.core.deref(naca_params)),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b","b",1482224470),(30),new cljs.core.Keyword(null,"l","l",1395893423),(30),new cljs.core.Keyword(null,"t","t",-1397832519),(30),new cljs.core.Keyword(null,"r","r",-471384190),(30)], null),new cljs.core.Keyword(null,"xaxis","xaxis",488378734),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.2,1.2], null),new cljs.core.Keyword(null,"dtick","dtick",12986893),0.25,new cljs.core.Keyword(null,"showgrid","showgrid",476111604),false,new cljs.core.Keyword(null,"zeroline","zeroline",-232866385),false,new cljs.core.Keyword(null,"showline","showline",-1948574348),true], null),new cljs.core.Keyword(null,"yaxis","yaxis",-1783465932),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.25,0.25], null),new cljs.core.Keyword(null,"dtick","dtick",12986893),0.25,new cljs.core.Keyword(null,"showgrid","showgrid",476111604),false,new cljs.core.Keyword(null,"zeroline","zeroline",-232866385),false,new cljs.core.Keyword(null,"showline","showline",-1948574348),true,new cljs.core.Keyword(null,"scaleanchor","scaleanchor",-1433458418),"x",new cljs.core.Keyword(null,"scaleratio","scaleratio",-1032325167),(1)], null),new cljs.core.Keyword(null,"showlegend","showlegend",-287404369),false], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"staticPlot","staticPlot",-111034272),true,new cljs.core.Keyword(null,"responsive","responsive",-1606632318),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-plot-controls","div.main-plot-controls",-314166941),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.naca.param_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params)) * m_scale),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26796_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(naca_params,cljs.core.assoc,new cljs.core.Keyword(null,"m","m",1632677161),(p1__26796_SHARP_ / m_scale));
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(m_scale * 0.1),new cljs.core.Keyword(null,"text","text",-1790561697),"M (Max Camber)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.naca.param_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params)) * p_scale),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26797_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(naca_params,cljs.core.assoc,new cljs.core.Keyword(null,"p","p",151049309),(p1__26797_SHARP_ / p_scale));
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),p_scale,new cljs.core.Keyword(null,"text","text",-1790561697),"P (Position Camber)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.naca.param_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params)) * t_scale),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26798_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(naca_params,cljs.core.assoc,new cljs.core.Keyword(null,"t","t",-1397832519),(p1__26798_SHARP_ / t_scale));
}),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(t_scale * 0.4),new cljs.core.Keyword(null,"text","text",-1790561697),"XX (Thickness)"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Units"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params)),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"naca-unit","naca-unit",-130430140),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"NACA"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"percentages","percentages",-997361799),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"%'s"], null)], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26799_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(naca_params,cljs.core.assoc,new cljs.core.Keyword(null,"unit","unit",375175175),p1__26799_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 0 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Open Trailing Edge?"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(naca_params)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26800_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(naca_params,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),p1__26800_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Open Trailing Edge"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [leonidscott.github.io.naca.naca_text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(naca_params),new cljs.core.Keyword(null,"m-scale","m-scale",-1264292786),m_scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p-scale","p-scale",-1040179341),p_scale,new cljs.core.Keyword(null,"t-scale","t-scale",-1410063207),t_scale], 0))], null)], null)], null)], null);
});
});

//# sourceMappingURL=leonidscott.github.io.naca.js.map
