/*
 * dm-tabs.js v1.1
 *
 * Самый лёгкий и быстрый плагин jQuery для
 * создания вкладк(табов)
 *
 * (c) 2014 @dobrovoi http://dbmast.ru
 */

(function(s){ 
    var n;
    s(".tabs").on("click", "li:not(.active)", function() {
        n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
    }), s.fn.dmtabs = function(n) {
        s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
            s(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
            s(this).removeClass("open_tab")
        })
    }
})(jQuery);

$(document).ready(function(){
var countWebkit = 0,
    countMoz = 0,
    countMs = 0,
    counterO = 0,
    counter = 0,
    countLi = 0;
    
	$('.left').click(function(){
 if (countLi >= 0 && countLi < 6){
 $('.content').css({
    "-webkit-transform": "translate("+(countWebkit-=230)+"px)",
     "-moz-transform":  "translate("+(countMoz-=340)+"px)",
     "-ms-transform":  "translate("+(countMs-=230)+"px)",
     "-o-transform": "translate("+(counterO-=230)+"px)",
     "transform": "translate("+(counter-=230)+"px)"
    })
   countLi++;
   
 }
  });
  $('.right').click(function(){
if (countLi > 0 && countLi <= 6){
  $('.content').css({
    "-webkit-transform": "translate("+(countWebkit+=230)+"px)",
    "-moz-transform":  "translate("+(countMoz+=230)+"px)",
    "-ms-transform":  "translate("+(countMs+=230)+"px)",
    "-o-transform": "translate("+(counterO+=30)+"px)",
    "transform": "translate("+(counter+=230)+"px)"
  })
    countLi--;
    }
 })
})