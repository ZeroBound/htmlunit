function com_google_gwt_sample_hello_Hello(){var l=window,k=document,t=l.external,ab,w,q,p='',z={},db=[],F=[],o=[],C,E;if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={};}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={};}function v(){try{return t&&(t.gwtOnLoad&&l.location.search.indexOf('gwt.hybrid')== -1);}catch(a){return false;}}
function y(){if(ab&&w){var c=k.getElementById('com.google.gwt.sample.hello.Hello');var b=c.contentWindow;b.__gwt_initHandlers=com_google_gwt_sample_hello_Hello.__gwt_initHandlers;if(v()){b.__gwt_getProperty=function(a){return r(a);};}com_google_gwt_sample_hello_Hello=null;b.gwtOnLoad(C,'com.google.gwt.sample.hello.Hello',p);}}
function s(){var j,h='__gwt_marker_com.google.gwt.sample.hello.Hello',i;k.write('<script id="'+h+'"><\/script>');i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!='SCRIPT'){j=j.previousSibling;}function d(b){var a=b.lastIndexOf('/');return a>=0?b.substring(0,a+1):'';}
;if(j&&j.src){p=d(j.src);}if(p==''){var c=k.getElementsByTagName('base');if(c.length>0){p=c[c.length-1].href;}else{var g=k.location;var e=g.href;p=d(e.substr(0,e.length-g.hash.length));}}else if(p.match(/^\w+:\/\//)){}else{var f=k.createElement('img');f.src=p+'clear.cache.gif';p=d(f.src);}if(i){i.parentNode.removeChild(i);}}
function D(){var f=document.getElementsByTagName('meta');for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute('name'),b;if(h){if(h=='gwt:property'){b=e.getAttribute('content');if(b){var i,c=b.indexOf('=');if(c>=0){h=b.substring(0,c);i=b.substring(c+1);}else{h=b;i='';}z[h]=i;}}else if(h=='gwt:onPropertyErrorFn'){b=e.getAttribute('content');if(b){try{E=eval(b);}catch(a){alert('Bad handler "'+b+'" for "gwt:onPropertyErrorFn"');}}}else if(h=='gwt:onLoadErrorFn'){b=e.getAttribute('content');if(b){try{C=eval(b);}catch(a){alert('Bad handler "'+b+'" for "gwt:onLoadErrorFn"');}}}}}}
function n(a,b){return b in db[a];}
function m(a){var b=z[a];return b==null?null:b;}
function cb(d,e){var a=o;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[]);}a[d[c]]=e;}
function r(d){var e=F[d](),b=db[d];if(e in b){return e;}var a=[];for(var c in b){a[b[c]]=c;}if(E){E(d,a,e);}throw null;}
F['user.agent']=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2]);};if(d.indexOf('opera')!= -1){return 'opera';}else if(d.indexOf('webkit')!= -1){return 'safari';}else if(d.indexOf('msie')!= -1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return 'ie6';}}}else if(d.indexOf('gecko')!= -1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return 'gecko1_8';}return 'gecko';}return 'unknown';};db['user.agent']={'gecko':0,'gecko1_8':1,'ie6':2,'opera':3,'safari':4};com_google_gwt_sample_hello_Hello.onInjectionDone=function(){ab=true;y();};com_google_gwt_sample_hello_Hello.onScriptLoad=function(){w=true;y();};s();D();var bb;if(v()){bb='hosted.html?com_google_gwt_sample_hello_Hello';}else{try{cb(['opera'],'4EFADF38A360961E72EC1CC349756EDA');cb(['ie6'],'7C3D053D305F37519C8E3B988005425D');cb(['gecko'],'7E26E27C1EFB3CD72A35E1A1DEC60B03');cb(['gecko1_8'],'9378EBDEE008568300477FC6A6B8D6D3');cb(['safari'],'B51C88C1F2786B63C2348C04429314BD');bb=o[r('user.agent')];}catch(a){return;}bb+='.cache.html';}var B;function A(){if(!q){q=true;y();if(k.removeEventListener){k.removeEventListener('DOMContentLoaded',A,false);}if(B){clearInterval(B);}}}
var u;function x(){if(!u){u=true;var a=k.createElement('iframe');a.src="javascript:''";a.id='com.google.gwt.sample.hello.Hello';a.style.cssText='position:absolute;width:0;height:0;border:none';k.body.appendChild(a);a.src=p+bb;}}
if(k.addEventListener){k.addEventListener('DOMContentLoaded',function(){x();A();},false);}var B=setInterval(function(){if(/loaded|complete/.test(k.readyState)){x();A();}},50);k.write("<script>com_google_gwt_sample_hello_Hello.onInjectionDone('com.google.gwt.sample.hello.Hello')<\/script>");}
com_google_gwt_sample_hello_Hello.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i();}finally{g&&g(a);}};d.onbeforeunload=function(a){var c,b;try{c=e();}finally{b=f&&f(a);}if(c!=null){return c;}if(b!=null){return b;}};d.onunload=function(a){try{j();}finally{h&&h(a);}};};com_google_gwt_sample_hello_Hello();