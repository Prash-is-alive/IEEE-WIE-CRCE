(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){"use strict";t.d(n,"a",function(){return Ze});var r=t(8),i=t(12),o=t(14),a=t(9),c=t(13),f=t(50),u=t(0),s=/^[a-z0-9]+(-[a-z0-9]+)*$/,l=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=e.split(":");if("@"===e.slice(0,1)){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){var o=i.pop(),a=i.pop(),c={provider:i.length>0?i[0]:r,prefix:a,name:o};return n&&!d(c)?null:c}var f=i[0],u=f.split("-");if(u.length>1){var s={provider:r,prefix:u.shift(),name:u.join("-")};return n&&!d(s)?null:s}if(t&&""===r){var l={provider:r,prefix:"",name:f};return n&&!d(l,t)?null:l}return null},d=function(e,n){return!!e&&!(""!==e.provider&&!e.provider.match(s)||!(n&&""===e.prefix||e.prefix.match(s))||!e.name.match(s))},p=Object.freeze({left:0,top:0,width:16,height:16}),h=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),v=Object.freeze(Object(f.a)({},p,h)),g=Object.freeze(Object(f.a)({},v,{body:"",hidden:!1}));function b(e,n){var t=function(e,n){var t={};!e.hFlip!==!n.hFlip&&(t.hFlip=!0),!e.vFlip!==!n.vFlip&&(t.vFlip=!0);var r=((e.rotate||0)+(n.rotate||0))%4;return r&&(t.rotate=r),t}(e,n);for(var r in g)r in h?r in e&&!(r in t)&&(t[r]=h[r]):r in n?t[r]=n[r]:r in e&&(t[r]=e[r]);return t}function m(e,n,t){var r=e.icons,i=e.aliases||Object.create(null),o={};function a(e){o=b(r[e]||i[e],o)}return a(n),t.forEach(a),b(e,o)}function y(e,n){var t=[];if("object"!==typeof e||"object"!==typeof e.icons)return t;e.not_found instanceof Array&&e.not_found.forEach(function(e){n(e,null),t.push(e)});var r=function(e,n){var t=e.icons,r=e.aliases||Object.create(null),i=Object.create(null);return(n||Object.keys(t).concat(Object.keys(r))).forEach(function e(n){if(t[n])return i[n]=[];if(!(n in i)){i[n]=null;var o=r[n]&&r[n].parent,a=o&&e(o);a&&(i[n]=[o].concat(a))}return i[n]}),i}(e);for(var i in r){var o=r[i];o&&(n(i,m(e,i,o)),t.push(i))}return t}var j=Object(f.a)({provider:"",aliases:{},not_found:{}},p);function x(e,n){for(var t in n)if(t in e&&typeof e[t]!==typeof n[t])return!1;return!0}function w(e){if("object"!==typeof e||null===e)return null;var n=e;if("string"!==typeof n.prefix||!e.icons||"object"!==typeof e.icons)return null;if(!x(e,j))return null;var t=n.icons;for(var r in t){var i=t[r];if(!r.match(s)||"string"!==typeof i.body||!x(i,g))return null}var o=n.aliases||Object.create(null);for(var a in o){var c=o[a],f=c.parent;if(!a.match(s)||"string"!==typeof f||!t[f]&&!o[f]||!x(c,g))return null}return n}var O=Object.create(null);function k(e,n){var t=O[e]||(O[e]=Object.create(null));return t[n]||(t[n]=function(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}(e,n))}function _(e,n){return w(n)?y(n,function(n,t){t?e.icons[n]=t:e.missing.add(n)}):[]}var S=!1;function E(e){return"boolean"===typeof e&&(S=e),S}function M(e){var n="string"===typeof e?l(e,!0,S):e;if(n){var t=k(n.provider,n.prefix),r=n.name;return t.icons[r]||(t.missing.has(r)?null:void 0)}}function I(e,n){var t=l(e,!0,S);return!!t&&function(e,n,t){try{if("string"===typeof t.body)return e.icons[n]=Object(f.a)({},t),!0}catch(Be){}return!1}(k(t.provider,t.prefix),t.name,n)}var L=Object.freeze({width:null,height:null}),T=Object.freeze(Object(f.a)({},L,h)),F=/(-?[0-9.]*[0-9]+[0-9.]*)/g,C=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function D(e,n,t){if(1===n)return e;if(t=t||100,"number"===typeof e)return Math.ceil(e*n*t)/t;if("string"!==typeof e)return e;var r=e.split(F);if(null===r||!r.length)return e;for(var i=[],o=r.shift(),a=C.test(o);;){if(a){var c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*n*t)/t)}else i.push(o);if(void 0===(o=r.shift()))return i.join("");a=!a}}var z=function(e){return"unset"===e||"undefined"===e||"none"===e};var P=/\sid="(\S+)"/g,N="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),R=0;function A(e){for(var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,r=[];n=P.exec(e);)r.push(n[1]);if(!r.length)return e;var i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return r.forEach(function(n){var r="function"===typeof t?t(n):t+(R++).toString(),o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+i+"$3")}),e=e.replace(new RegExp(i,"g"),"")}var U=Object.create(null);function $(e,n){U[e]=n}function q(e){return U[e]||U[""]}function H(e){var n;if("string"===typeof e.resources)n=[e.resources];else if(!((n=e.resources)instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}for(var J=Object.create(null),Q=["https://api.simplesvg.com","https://api.unisvg.com"],W=[];Q.length>0;)1===Q.length?W.push(Q.shift()):Math.random()>.5?W.push(Q.shift()):W.push(Q.pop());function B(e,n){var t=H(n);return null!==t&&(J[e]=t,!0)}function X(e){return J[e]}J[""]=H({resources:["https://api.iconify.design"].concat(W)});var G=function(){var e;try{if("function"===typeof(e=fetch))return e}catch(Be){}}();var K={prepare:function(e,n,t){var r=[],i=function(e,n){var t,r=X(e);if(!r)return 0;if(r.maxURL){var i=0;r.resources.forEach(function(e){var n=e;i=Math.max(i,n.length)});var o=n+".json?icons=";t=r.maxURL-i-r.path.length-o.length}else t=0;return t}(e,n),o={type:"icons",provider:e,prefix:n,icons:[]},a=0;return t.forEach(function(t,c){(a+=t.length+1)>=i&&c>0&&(r.push(o),o={type:"icons",provider:e,prefix:n,icons:[]},a=t.length),o.icons.push(t)}),r.push(o),r},send:function(e,n,t){if(G){var r=function(e){if("string"===typeof e){var n=X(e);if(n)return n.path}return"/"}(n.provider);switch(n.type){case"icons":var i=n.prefix,o=n.icons.join(",");r+=i+".json?"+new URLSearchParams({icons:o}).toString();break;case"custom":var a=n.uri;r+="/"===a.slice(0,1)?a.slice(1):a;break;default:return void t("abort",400)}var c=503;G(e+r).then(function(e){var n=e.status;if(200===n)return c=501,e.json();setTimeout(function(){t(function(e){return 404===e}(n)?"abort":"next",n)})}).then(function(e){"object"===typeof e&&null!==e?setTimeout(function(){t("success",e)}):setTimeout(function(){404===e?t("abort",e):t("next",c)})}).catch(function(){t("next",c)})}else t("abort",424)}};function V(e,n){e.forEach(function(e){var t=e.loaderCallbacks;t&&(e.loaderCallbacks=t.filter(function(e){return e.id!==n}))})}var Y=0;var Z={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ee(e,n,t,r){var i,o=e.resources.length,a=e.random?Math.floor(Math.random()*o):e.index;if(e.random){var c=e.resources.slice(0);for(i=[];c.length>1;){var f=Math.floor(Math.random()*c.length);i.push(c[f]),c=c.slice(0,f).concat(c.slice(f+1))}i=i.concat(c)}else i=e.resources.slice(a).concat(e.resources.slice(0,a));var u,s=Date.now(),l="pending",d=0,p=null,h=[],v=[];function g(){p&&(clearTimeout(p),p=null)}function b(){"pending"===l&&(l="aborted"),g(),h.forEach(function(e){"pending"===e.status&&(e.status="aborted")}),h=[]}function m(e,n){n&&(v=[]),"function"===typeof e&&v.push(e)}function y(){l="failed",v.forEach(function(e){e(void 0,u)})}function j(){h.forEach(function(e){"pending"===e.status&&(e.status="aborted")}),h=[]}function x(){if("pending"===l){g();var r=i.shift();if(void 0===r)return h.length?void(p=setTimeout(function(){g(),"pending"===l&&(j(),y())},e.timeout)):void y();var o={status:"pending",resource:r,callback:function(n,t){!function(n,t,r){var o="success"!==t;switch(h=h.filter(function(e){return e!==n}),l){case"pending":break;case"failed":if(o||!e.dataAfterTimeout)return;break;default:return}if("abort"===t)return u=r,void y();if(o)return u=r,void(h.length||(i.length?x():y()));if(g(),j(),!e.random){var a=e.resources.indexOf(n.resource);-1!==a&&a!==e.index&&(e.index=a)}l="completed",v.forEach(function(e){e(r)})}(o,n,t)}};h.push(o),d++,p=setTimeout(x,e.rotate),t(r,n,o.callback)}}return"function"===typeof r&&v.push(r),setTimeout(x),function(){return{startTime:s,payload:n,status:l,queriesSent:d,queriesPending:h.length,subscribe:m,abort:b}}}function ne(e){var n=Object(f.a)({},Z,e),t=[];function r(){t=t.filter(function(e){return"pending"===e().status})}return{query:function(e,i,o){var a=ee(n,e,i,function(e,n){r(),o&&o(e,n)});return t.push(a),a},find:function(e){return t.find(function(n){return e(n)})||null},setIndex:function(e){n.index=e},getIndex:function(){return n.index},cleanup:r}}function te(){}var re=Object.create(null);function ie(e,n,t){var r,i;if("string"===typeof e){var o=q(e);if(!o)return t(void 0,424),te;i=o.send;var a=function(e){if(!re[e]){var n=X(e);if(!n)return;var t={config:n,redundancy:ne(n)};re[e]=t}return re[e]}(e);a&&(r=a.redundancy)}else{var c=H(e);if(c){r=ne(c);var f=q(e.resources?e.resources[0]:"");f&&(i=f.send)}}return r&&i?r.query(n,i,t)().abort:(t(void 0,424),te)}var oe="iconify2",ae="iconify",ce=ae+"-count",fe=ae+"-version",ue=36e5,se=168;function le(e,n){try{return e.getItem(n)}catch(Be){}}function de(e,n,t){try{return e.setItem(n,t),!0}catch(Be){}}function pe(e,n){try{e.removeItem(n)}catch(Be){}}function he(e,n){return de(e,ce,n.toString())}function ve(e){return parseInt(le(e,ce))||0}var ge={local:!0,session:!0},be={local:new Set,session:new Set},me=!1;var ye="undefined"===typeof window?{}:window;function je(e){var n=e+"Storage";try{if(ye&&ye[n]&&"number"===typeof ye[n].length)return ye[n]}catch(Be){}ge[e]=!1}function xe(e,n){var t=je(e);if(t){var r=le(t,fe);if(r!==oe){if(r)for(var i=ve(t),o=0;o<i;o++)pe(t,ae+o.toString());return de(t,fe,oe),void he(t,0)}for(var a=Math.floor(Date.now()/ue)-se,c=function(e){var r=ae+e.toString(),i=le(t,r);if("string"===typeof i){try{var o=JSON.parse(i);if("object"===typeof o&&"number"===typeof o.cached&&o.cached>a&&"string"===typeof o.provider&&"object"===typeof o.data&&"string"===typeof o.data.prefix&&n(o,e))return!0}catch(Be){}pe(t,r)}},f=ve(t),u=f-1;u>=0;u--)c(u)||(u===f-1?he(t,--f):be[e].add(u))}}function we(){if(!me)for(var e in me=!0,ge)xe(e,function(e){var n=e.data,t=k(e.provider,n.prefix);if(!_(t,n).length)return!1;var r=n.lastModified||-1;return t.lastModifiedCached=t.lastModifiedCached?Math.min(t.lastModifiedCached,r):r,!0})}function Oe(e,n){function t(t){var r;if(ge[t]&&(r=je(t))){var i,o=be[t];if(o.size)o.delete(i=Array.from(o).shift());else if(!he(r,(i=ve(r))+1))return;var a={cached:Math.floor(Date.now()/ue),provider:e.provider,data:n};return de(r,ae+i.toString(),JSON.stringify(a))}}me||we(),n.lastModified&&!function(e,n){var t=e.lastModifiedCached;if(t&&t>=n)return t===n;if(e.lastModifiedCached=n,t)for(var r in ge)xe(r,function(t){var r=t.data;return t.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===n});return!0}(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&delete(n=Object.assign({},n)).not_found,t("local")||t("session"))}function ke(){}function _e(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(function(){e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(function(){e.pendingCallbacksFlag=!1;var n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(n.length){var t=!1,r=e.provider,i=e.prefix;n.forEach(function(n){var o=n.icons,a=o.pending.length;o.pending=o.pending.filter(function(n){if(n.prefix!==i)return!0;var a=n.name;if(e.icons[a])o.loaded.push({provider:r,prefix:i,name:a});else{if(!e.missing.has(a))return t=!0,!0;o.missing.push({provider:r,prefix:i,name:a})}return!1}),o.pending.length!==a&&(t||V([e],n.id),n.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),n.abort))})}}))}(e)}))}var Se=function(e,n){var t=function(e){var n={loaded:[],missing:[],pending:[]},t=Object.create(null);e.sort(function(e,n){return e.provider!==n.provider?e.provider.localeCompare(n.provider):e.prefix!==n.prefix?e.prefix.localeCompare(n.prefix):e.name.localeCompare(n.name)});var r={provider:"",prefix:"",name:""};return e.forEach(function(e){if(r.name!==e.name||r.prefix!==e.prefix||r.provider!==e.provider){r=e;var i=e.provider,o=e.prefix,a=e.name,c=t[i]||(t[i]=Object.create(null)),f=c[o]||(c[o]=k(i,o)),u={provider:i,prefix:o,name:a};(a in f.icons?n.loaded:""===o||f.missing.has(a)?n.missing:n.pending).push(u)}}),n}(function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[];return e.forEach(function(e){var i="string"===typeof e?l(e,n,t):e;i&&r.push(i)}),r}(e,!0,E()));if(!t.pending.length){var r=!0;return n&&setTimeout(function(){r&&n(t.loaded,t.missing,t.pending,ke)}),function(){r=!1}}var i,o,a=Object.create(null),c=[];return t.pending.forEach(function(e){var n=e.provider,t=e.prefix;if(t!==o||n!==i){i=n,o=t,c.push(k(n,t));var r=a[n]||(a[n]=Object.create(null));r[t]||(r[t]=[])}}),t.pending.forEach(function(e){var n=e.provider,t=e.prefix,r=e.name,i=k(n,t),o=i.pendingIcons||(i.pendingIcons=new Set);o.has(r)||(o.add(r),a[n][t].push(r))}),c.forEach(function(e){var n=e.provider,t=e.prefix;a[n][t].length&&function(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(function(){e.iconsQueueFlag=!1;var n,t=e.provider,r=e.prefix,i=e.iconsToLoad;delete e.iconsToLoad,i&&(n=q(t))&&n.prepare(t,r,i).forEach(function(n){ie(t,n,function(t){if("object"!==typeof t)n.icons.forEach(function(n){e.missing.add(n)});else try{var r=_(e,t);if(!r.length)return;var i=e.pendingIcons;i&&r.forEach(function(e){i.delete(e)}),Oe(e,t)}catch(Be){console.error(Be)}_e(e)})})}))}(e,a[n][t])}),n?function(e,n,t){var r=Y++,i=V.bind(null,t,r);if(!n.pending.length)return i;var o={id:r,icons:n,callback:e,abort:i};return t.forEach(function(e){(e.loaderCallbacks||(e.loaderCallbacks=[])).push(o)}),i}(n,t,c):ke};var Ee,Me=/[\s,]+/;function Ie(e,n){n.split(Me).forEach(function(n){switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}})}function Le(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=e.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(""===t){var i=parseInt(e);return isNaN(i)?0:r(i)}if(t!==e){var o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){var a=parseFloat(e.slice(0,e.length-t.length));return isNaN(a)?0:(a/=o)%1===0?r(a):0}}return n}function Te(e){return void 0===Ee&&function(){try{Ee=window.trustedTypes.createPolicy("iconify",{createHTML:function(e){return e}})}catch(Be){Ee=null}}(),Ee?Ee.createHTML(e):e}var Fe=Object(f.a)({},T,{inline:!1}),Ce={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},De={display:"inline-block"},ze={backgroundColor:"currentColor"},Pe={backgroundColor:"transparent"},Ne={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Re={WebkitMask:ze,mask:ze,background:Pe};for(var Ae in Re){var Ue=Re[Ae];for(var $e in Ne)Ue[Ae+$e]=Ne[$e]}var qe=Object(f.a)({},Fe,{inline:!0});function He(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var Je=function(e,n,t,r){var i=t?qe:Fe,o=function(e,n){var t=Object(f.a)({},e);for(var r in n){var i=n[r],o=typeof i;r in L?(null===i||i&&("string"===o||"number"===o))&&(t[r]=i):o===typeof t[r]&&(t[r]="rotate"===r?i%4:i)}return t}(i,n),a=n.mode||"svg",c={},s=n.style||{},l=Object(f.a)({},"svg"===a?Ce:{},{ref:r});for(var d in n){var p=n[d];if(void 0!==p)switch(d){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":o[d]=!0===p||"true"===p||1===p;break;case"flip":"string"===typeof p&&Ie(o,p);break;case"color":c.color=p;break;case"rotate":"string"===typeof p?o[d]=Le(p):"number"===typeof p&&(o[d]=p);break;case"ariaHidden":case"aria-hidden":!0!==p&&"true"!==p&&delete l["aria-hidden"];break;default:void 0===i[d]&&(l[d]=p)}}var h=function(e,n){var t=Object(f.a)({},v,e),r=Object(f.a)({},T,n),i={left:t.left,top:t.top,width:t.width,height:t.height},o=t.body;[t,r].forEach(function(e){var n,t=[],r=e.hFlip,a=e.vFlip,c=e.rotate;switch(r?a?c+=2:(t.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),t.push("scale(-1 1)"),i.top=i.left=0):a&&(t.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),t.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4){case 1:n=i.height/2+i.top,t.unshift("rotate(90 "+n.toString()+" "+n.toString()+")");break;case 2:t.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:n=i.width/2+i.left,t.unshift("rotate(-90 "+n.toString()+" "+n.toString()+")")}c%2===1&&(i.left!==i.top&&(n=i.left,i.left=i.top,i.top=n),i.width!==i.height&&(n=i.width,i.width=i.height,i.height=n)),t.length&&(o='<g transform="'+t.join(" ")+'">'+o+"</g>")});var a,c,u=r.width,s=r.height,l=i.width,d=i.height;null===u?a=D(c=null===s?"1em":"auto"===s?d:s,l/d):(a="auto"===u?l:u,c=null===s?D(a,d/l):"auto"===s?d:s);var p={},h=function(e,n){z(n)||(p[e]=n.toString())};return h("width",a),h("height",c),p.viewBox=i.left.toString()+" "+i.top.toString()+" "+l.toString()+" "+d.toString(),{attributes:p,body:o}}(e,o),g=h.attributes;if(o.inline&&(c.verticalAlign="-0.125em"),"svg"===a){l.style=Object(f.a)({},c,s),Object.assign(l,g);var b=0,m=n.id;return"string"===typeof m&&(m=m.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:Te(A(h.body,m?function(){return m+"ID"+b++}:"iconifyReact"))},u.createElement("svg",l)}var y,j=e.body,x=e.width,w=e.height,O="mask"===a||"bg"!==a&&-1!==j.indexOf("currentColor"),k=function(e,n){var t=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(var r in n)t+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}(j,Object(f.a)({},g,{width:x+"",height:w+""}));return l.style=Object(f.a)({},c,{"--svg":(y=k,'url("'+function(e){return"data:image/svg+xml,"+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(e)}(y)+'")'),width:He(g.width),height:He(g.height)},De,O?ze:Pe,s),u.createElement("span",l)};if(E(!0),$("",K),"undefined"!==typeof document&&"undefined"!==typeof window){we();var Qe=window;if(void 0!==Qe.IconifyPreload){var We=Qe.IconifyPreload,Be="Invalid IconifyPreload syntax.";"object"===typeof We&&null!==We&&(We instanceof Array?We:[We]).forEach(function(e){try{("object"!==typeof e||null===e||e instanceof Array||"object"!==typeof e.icons||"string"!==typeof e.prefix||!function(e,n){if("object"!==typeof e)return!1;if("string"!==typeof n&&(n=e.provider||""),S&&!n&&!e.prefix){var t=!1;return w(e)&&(e.prefix="",y(e,function(e,n){n&&I(e,n)&&(t=!0)})),t}var r=e.prefix;return!!d({provider:n,prefix:r,name:"a"})&&!!_(k(n,r),e)}(e))&&console.error(Be)}catch(n){console.error(Be)}})}if(void 0!==Qe.IconifyProviders){var Xe=Qe.IconifyProviders;if("object"===typeof Xe&&null!==Xe)for(var Ge in Xe){var Ke="IconifyProviders["+Ge+"] is invalid.";try{var Ve=Xe[Ge];if("object"!==typeof Ve||!Ve||void 0===Ve.resources)continue;B(Ge,Ve)||console.error(Ke)}catch(en){console.error(Ke)}}}}var Ye=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(o.a)(this,Object(a.a)(n).call(this,e))).state={icon:null},t}return Object(c.a)(n,e),Object(i.a)(n,[{key:"_abortLoading",value:function(){this._loading&&(this._loading.abort(),this._loading=null)}},{key:"_setData",value:function(e){this.state.icon!==e&&this.setState({icon:e})}},{key:"_checkIcon",value:function(e){var n,t=this.state,r=this.props.icon;if("object"===typeof r&&null!==r&&"string"===typeof r.body)return this._icon="",this._abortLoading(),void((e||null===t.icon)&&this._setData({data:r}));if("string"!==typeof r||null===(n=l(r,!1,!0)))return this._abortLoading(),void this._setData(null);var i=M(n);if(i){if(this._icon!==r||null===t.icon){this._abortLoading(),this._icon=r;var o=["iconify"];""!==n.prefix&&o.push("iconify--"+n.prefix),""!==n.provider&&o.push("iconify--"+n.provider),this._setData({data:i,classes:o}),this.props.onLoad&&this.props.onLoad(r)}}else this._loading&&this._loading.name===r||(this._abortLoading(),this._icon="",this._setData(null),null!==i&&(this._loading={name:r,abort:Se([n],this._checkIcon.bind(this,!1))}))}},{key:"componentDidMount",value:function(){this._checkIcon(!1)}},{key:"componentDidUpdate",value:function(e){e.icon!==this.props.icon&&this._checkIcon(!0)}},{key:"componentWillUnmount",value:function(){this._abortLoading()}},{key:"render",value:function(){var e=this.props,n=this.state.icon;if(null===n)return e.children?e.children:u.createElement("span",{});var t=e;return n.classes&&(t=Object(f.a)({},e,{className:("string"===typeof e.className?e.className+" ":"")+n.classes.join(" ")})),Je(Object(f.a)({},v,n.data),t,e._inline,e._ref)}}]),n}(u.Component),Ze=u.forwardRef(function(e,n){var t=Object(f.a)({},e,{_ref:n,_inline:!1});return u.createElement(Ye,t)});u.forwardRef(function(e,n){var t=Object(f.a)({},e,{_ref:n,_inline:!0});return u.createElement(Ye,t)})},50:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(5);function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(n){Object(r.a)(e,n,t[n])})}return e}}}]);
//# sourceMappingURL=0.95488ee0.chunk.js.map