!function($){$.cookie=function(e,o,i){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(o))||null===o||void 0===o)){if(i=$.extend({},i),null!==o&&void 0!==o||(i.expires=-1),"number"==typeof i.expires){var n=i.expires,t=i.expires=new Date;t.setDate(t.getDate()+n)}return o=String(o),document.cookie=[encodeURIComponent(e),"=",i.raw?o:encodeURIComponent(o),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}i=o||{};for(var r=i.raw?function(e){return e}:decodeURIComponent,c=document.cookie.split("; "),s=0,a;a=c[s]&&c[s].split("=");s++)if(r(a[0])===e)return r(a[1]||"");return null},$.fn.cookieBar=function(e){var o=$.extend({closeButton:"none",hideOnClose:!0,secure:!1,path:"/",domain:""},e);return this.each(function(){var e=$(this);e.hide(),"none"==o.closeButton&&(e.append('<a class="cookiebar-close">Continue</a>'),$.extend(o,{closeButton:".cookiebar-close"})),"hide"!=$.cookie("cookiebar")&&e.show(),e.find(o.closeButton).click(function(){return o.hideOnClose&&e.hide(),$.cookie("cookiebar","hide",{path:o.path,secure:o.secure,domain:o.domain,expires:30}),e.trigger("cookieBar-close"),!1})})},$.cookieBar=function(e){$("body").prepend('<div class="ui-widget"><div style="display: none;" class="cookie-message ui-widget-header blue"><p>By using this website you allow us to place cookies on your computer. They are harmless and never personally identify you.</p></div></div>'),$(".cookie-message").cookieBar(e)}}(jQuery),$(window).ready(function(){$(".cookie-message").cookieBar({closeButton:".my-close-button"})});