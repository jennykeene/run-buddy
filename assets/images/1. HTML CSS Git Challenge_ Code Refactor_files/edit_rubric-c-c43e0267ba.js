(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3743,3647,4058,4065],{"4M30":function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
n.d(t,"b",(function(){return o}))
const i={}.hasOwnProperty
function r(e,t){for(const n in t)i.call(t,n)&&(e[n]=t[n])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e}function o(e,t){Object.keys(t).forEach(n=>Object.defineProperty(e,n,{get:t[n],enumerable:true,configurable:true}))
return e}},"65NJ":function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
n("w2hD")
r.a.fn.scrollToVisible=function(e){const t={}
const n=r()(e)
if(0===n.length)return
let i=n.offset(),o=n.outerWidth(),a=n.outerHeight(),c=i.top,s=c+a,l=i.left,u=l+o,d="html,body"==this.selector?r.a.windowScrollTop():this.scrollTop(),f=this.scrollLeft(),h=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){let e=r()("body").offset()
this.each((function(){try{e=r()(this).offset()
return false}catch(e){}}))
c-=e.top
s-=e.top
l-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){h=r()(window).height()
r()("#wizard_box:visible").length>0&&(h-=r()("#wizard_box:visible").height())
g=r()(window).width()
c-=d
l-=f
s-=d
u-=f}c<0||h<a&&s>h?t.scrollTop=c+d:s>h&&(t.scrollTop=s+d-h+20)
l<0?t.scrollLeft=l+f:u>g&&(t.scrollLeft=u+f-g+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"6ohZ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var i=n("An8g")
var r=n("Ff2n")
var o=n("q1tI")
var a=n.n(o)
n("17x9")
var c=n("Mmr1")
var s=n("msMH")
var l=n("HGxv")
var u=n("8WeW")
Object(u["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"ca":{"close_d634289d":"Tanca"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
n("jQeR")
n("0sPK")
var d=l["default"].scoped("modal")
var f=n("Dibh")
const h=["label","closeButtonLabel","onDismiss","children"]
function g(){return document.getElementById("flash_screenreader_holder")}function p(e){let t=e.label,n=e.closeButtonLabel,o=e.onDismiss,l=e.children,u=Object(r["a"])(e,h)
return a.a.createElement(f["a"],Object.assign({liveRegion:g},u,{label:t,onDismiss:o}),Object(i["a"])(f["a"].Header,{},void 0,Object(i["a"])(c["a"],{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:o},void 0,n||d.t("Close")),Object(i["a"])(s["a"],{},void 0,t)),l)}["Header","Body","Footer"].forEach(e=>p[e]=f["a"][e])
p.defaultProps={closeButtonLabel:void 0}},"897F":function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
var o=n("Y/W1")
var a=n.n(o)
var c=n("qqwe")
n("ESjL")
r.a.fn.fixDialogButtons=function(){return this.each((function(){const e=r()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=r.a.map(t.toArray(),t=>{const n=r()(t)
let i=n.attr("class")||""
const o=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(c["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(i+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:i,id:o}})
n=a.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},"8o96":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("QF4Q")
var r=n("gCYW")
var o=n("ISHz")
function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["width"]
var a=Object(i["a"])(e)
var c=Object(r["a"])(a)
var s=false
var l
var u=function e(){if(s)return
var i=Object(r["a"])(a)
var u={width:i.width,height:i.height}
n.some((function(e){return u[e]!=c[e]}))&&"function"===typeof t&&t(u)
c=u
l=Object(o["a"])(e)}
u()
return{remove:function(){s=true
l.cancel()}}}},BrAc:function(e,t,n){"use strict"
var i=n("vDqi")
var r=n.n(i)
r.a.defaults.xsrfCookieName="_csrf_token"
r.a.defaults.xsrfHeaderName="X-CSRF-Token"
const o=r.a.defaults.headers.common.Accept
r.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+o
r.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=r.a},Ce78J:function(e,t,n){"use strict"
var i=n("VTBJ")
var r=n("ouhR")
var o=n.n(r)
var a=n("Y/W1")
var c=n.n(a)
var s=n("JiFB")
var l=n("ik22")
function u(e,t,n){const r=Object(i["a"])({},n)
e.forEach(e=>{const i=t[e]
const o=n[e]
Array.isArray(i)&&Array.isArray(o)&&(r[e]=[...new Set(i.concat(o))])})
return r}function d(e,t,n,r,o){const a=new s["a"](o,l["a"],e,t)
const c=Object(i["a"])({},a.defaultConfig())
return Object(i["a"])(Object(i["a"])({},c),u(n.optionsToMerge||[],c,n.tinyOptions))}var f=d
var h=n("FNQM")
const g={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const p={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const b={wrapEditor(e){const t=Object(i["a"])(Object(i["a"])({},g),e)
return Object.assign(e,t)},wrapSidebar(e){const t=Object(i["a"])(Object(i["a"])({},p),e)
return Object.assign(e,t)}}
var m=b
var _=n("eVns")
var v=n("stQK")
const y={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const i=this.getTargetTextarea(e)
const r=this.getRenderingTarget(i,t.getRenderingTarget)
const o=this.createRCEProps(i,t)
this.loadRCE(e=>{e.renderIntoDiv(r,o,e=>{e.tinymceOn("init",()=>n(i,m.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([n.e(3),n.e(4),n.e(5),n.e(6),n.e(9),n.e(10),n.e(12),n.e(19),n.e(20),n.e(33),n.e(65),n.e(93),n.e(3700)]).then(n.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(h["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===o()(e).get(0).type?o()(e).get(0):o()(e).find("textarea").get(0),getRenderingTarget(e,t){let n
n="undefined"===typeof t?o()(e).parent().get(0):t(e)
o()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=c.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return c.a.pick(n,t)},createRCEProps(e,t){var n,r,o,a,c,s,l
const u=e.offsetWidth
const d=e.offsetHeight||400
d&&(t.tinyOptions=Object(i["a"])({height:d},t.tinyOptions||{}))
const h=ENV.LOCALE
const g=Object.keys(v["a"]).map(e=>({id:e,label:v["a"][e]})).sort((e,t)=>e.id===h?-1:t.id===h?1:e.label.localeCompare(t.label,h))
const p={enabled:ENV.rce_auto_save,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:f.bind(null,u,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(_["a"])(),languages:g,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||p,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(r=window.ENV)||void 0===r?void 0:r.url_for_high_contrast_tinymce_editor_css,use_rce_pretty_html_editor:!!(null!==(o=window.ENV)&&void 0!==o&&null!==(a=o.FEATURES)&&void 0!==a&&a.rce_pretty_html_editor),use_rce_buttons_and_icons:!!(null!==(c=window.ENV)&&void 0!==c&&null!==(s=c.FEATURES)&&void 0!==s&&s.rce_buttons_and_icons),use_rce_a11y_checker_notifications:!!(null!==(l=window.ENV)&&void 0!==l&&l.use_rce_a11y_checker_notifications)}}}
var w=y
var R=n("eodz")
function k(e,t,n){e.css("display","none")
const i=t.onFocus
t.onFocus=(...e)=>{i instanceof Function&&i(...e)}
w.loadOnTarget(e,t,(t,i)=>{const r=H(e)
const a=S(o()(t))
a.data("remoteEditor",i)
r.trigger(R["a"],i)
n&&n(i)})}function B(e){const t=H(e)
const n=t.attr("id")
const i="tinymce-parent-of-"+n
if(t.parent().attr("id")!==i)return t.wrap(`<div id='${i}' style='visibility: hidden'></div>`)}function O(){o()(".mce-resizehandle").attr("aria-hidden",true)}let x=0
function C(){return"random_editor_id_"+x++}function j(e){const t=o()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",C())}function S(e){const t=H(e)
const n=t.attr("id")
if(!n||""==n)return t
const i=o()("#"+n)
if(i.length<=0)return t
return i}const F={preloadRemoteModule:(e=(()=>{}))=>w.preload(e),loadNewEditor(e,t={},n){let i=H(e)
if(i.length<=0)return
j(i)
t=o.a.extend({},t)
const r=e=>{t.focus&&this.activateRCE(i)
n&&n(e)}
i=this.freshNode(i)
if(t.manageParent){delete t.manageParent
B(i)}k(i,t,r)
O()},callOnRCE(e,t,...n){let i=H(e)
i=this.freshNode(i)
return Object(R["d"])(i,t,...n)},destroyRCE(e){let t=H(e)
t=this.freshNode(t)
Object(R["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=H(e)
t=this.freshNode(t)
Object(R["c"])(t)},freshNode:S,ensureID:j,node2jquery:H}
function H(e){return e&&e.length?e:o()(e)}t["a"]=F},FdVj:function(e,t,n){"use strict"
var i=n("qJBq")
var r=n.n(i)
var o=n("HGxv")
const a={_parseNumber:r.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=a._parseNumber(e.toString(),{thousands:o["default"].lookup("number.format.delimiter"),decimal:o["default"].lookup("number.format.separator")})
isNaN(t)&&(t=a._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(a.parse(e))}
t["a"]=a},HMVb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var i=n("ODXe")
var r=n("i/8D")
var o=n("DUTp")
var a=n("IPIv")
var c={}
function s(e,t){if(!r["a"])return 16
var n=e||Object(o["a"])(e).documentElement
if(!t&&c[n])return c[n]
var i=parseInt(Object(a["a"])(n).getPropertyValue("font-size"))
c[n]=i
return i}var l=n("CyAq")
function u(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var r=Object(l["a"])(e),o=Object(i["a"])(r,2),a=o[0],c=o[1]
return"rem"===c?a*s():"em"===c?a*s(n):a}},QLaP:function(e,t,n){"use strict"
var i=function(e,t,n,i,r,o,a,c){false
if(!e){var s
if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[n,i,r,o,a,c]
var u=0
s=new Error(t.replace(/%s/g,(function(){return l[u++]})))
s.name="Invariant Violation"}s.framesToPop=1
throw s}}
e.exports=i},RoCN:function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
var o=n("Y/W1")
var a=n.n(o)
var c=n("gI0r")
n("tHpF")
n("sXof")
n("Dhso")
n("8JEM")
t["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".tox-tinymce").find(".tox-edit-area")},findField:function(e,t){var n,i,o
null==t&&(t=false)
o=(null!=(i=this.fieldSelectors)?i[e]:void 0)||"[name='"+e+"']"
n=t?r()(o):this.$(o)
n.data("rich_text")&&(n=this.findSiblingTinymce(n))
return n},showErrors:function(e,t){var n,i,o,a,s,l,u,d
null==t&&(t=false)
d=[]
for(o in e){i=e[o]
n=i.element||this.findField(o,t)
a=i.message||function(){var e,t,n,r
r=[]
for(e=0,t=i.length;e<t;e++){s=i[e].message
r.push(Object(c["a"])((null!=(n=this.translations)?n[s]:void 0)||s))}return r}.call(this).join("</p><p>")
null!=(l=n.errorBox(r.a.raw(""+a)))&&null!=(u=l.css("z-index","1100"))&&u.attr("role","alert")
this.attachErrorDescription(n,a)
i.$input=n
d.push(i.$errorBox=n.data("associated_error_box"))}return d},attachErrorDescription:function(e,t){var n
n=this.findOrCreateDescriptionField(e)
n["description"].text(r.a.raw(""+t))
return e.attr("aria-describedby",n["description"].attr("id")+" "+n["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var t,n,i
n=e.attr("id")
r()("#"+n+"_sr_description").length>0||r()("<div>").attr({id:n+"_sr_description",class:"screenreader-only"}).insertBefore(e)
t=r()("#"+n+"_sr_description")
i=this.getExistingDescriptionIds(e,n)
return{description:t,originalDescriptionIds:i}},getExistingDescriptionIds:function(e,t){var n,i
n=e.attr("aria-describedby")
i=n?n.split(" "):[]
return a.a.without(i,t+"_sr_description")}}},VrN0:function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
var o=n("eodz")
const a=/^(?:select|textarea)/i
const c=/\r?\n/g
const s=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function l(){if(this.elements)return r.a.makeArray(this.elements)
{const e=r()(this).find(":input")
return e.length?e:this}}function u(){return this.name&&!this.disabled&&(this.checked||a.test(this.nodeName)||s.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(c,"\r\n"))
return{name:e,value:t}}function f(){const e=r()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(o["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return r.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}r.a.fn.serializeForm=function(){return this.map(l).filter(u).map(f).get()}},WEeK:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("rePB")
var r=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var c=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var f=n.n(d)
var h=n("TSYQ")
var g=n.n(h)
var p=n("cClk")
var b=n("nAyT")
var m=n("jtGx")
var _=n("E+IV")
var v=n("tCl5")
var y=n("/UXv")
var w=n("sTNg")
var R=n("TstA")
var k=n("BTe1")
var B=n("J2CL")
function O(e){var t=e.colors,n=e.typography,i=e.borders,r=e.spacing,o=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:i.widthSmall,borderStyle:i.style,borderColor:t.borderMedium,borderRadius:i.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:r.small,focusOutlineWidth:i.widthMedium,focusOutlineStyle:i.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:n.fontSizeSmall,smallHeight:o.inputHeightSmall,mediumFontSize:n.fontSizeMedium,mediumHeight:o.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:o.inputHeightLarge}}O.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}
var x,C,j,S,F
var H={componentId:"qBMHb",template:function(e){return"\n\n.qBMHb_cSXm{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";position:relative}\n\n.qBMHb_cSXm,.qBMHb_cSXm:before{box-sizing:border-box;display:block}\n\n.qBMHb_cSXm:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.qBMHb_cSXm.qBMHb_cVYB:before{opacity:1;transform:scale(1)}\n\n.qBMHb_cSXm.qBMHb_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.qBMHb_cSXm.qBMHb_fszt,.qBMHb_cSXm.qBMHb_fszt.qBMHb_cVYB:before{border-color:').concat(e.errorBorderColor||"inherit","}\n\n.qBMHb_cwos,input[type].qBMHb_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:transparent;border:medium none currentColor;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.qBMHb_cwos::-ms-clear,input[type].qBMHb_cwos::-ms-clear{display:none}\n\n.qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button,input[type].qBMHb_cwos[autocomplete=off]::-webkit-contacts-auto-fill-button{display:none!important}\n\n.qBMHb_cwos:focus,input[type].qBMHb_cwos:focus{box-shadow:none}\n\n.qBMHb_cwos:-ms-input-placeholder,input[type].qBMHb_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos::placeholder,input[type].qBMHb_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.qBMHb_cwos.qBMHb_doqw,input[type].qBMHb_cwos.qBMHb_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.smallHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_ycrn,input[type].qBMHb_cwos.qBMHb_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.mediumHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_cMDj,input[type].qBMHb_cwos.qBMHb_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",");line-height:calc(").concat(e.largeHeight||"inherit"," - 2*").concat(e.borderWidth||"inherit",")}\n\n.qBMHb_cwos.qBMHb_EMjX,input[type].qBMHb_cwos.qBMHb_EMjX{text-align:start}\n\n[dir=ltr] .qBMHb_cwos.qBMHb_EMjX,[dir=ltr] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:left}\n\n[dir=rtl] .qBMHb_cwos.qBMHb_EMjX,[dir=rtl] input[type].qBMHb_cwos.qBMHb_EMjX{text-align:right}\n\n.qBMHb_cwos.qBMHb_ImeN,[dir=ltr] .qBMHb_cwos.qBMHb_ImeN,[dir=ltr] input[type].qBMHb_cwos.qBMHb_ImeN,[dir=rtl] .qBMHb_cwos.qBMHb_ImeN,[dir=rtl] input[type].qBMHb_cwos.qBMHb_ImeN,input[type].qBMHb_cwos.qBMHb_ImeN{text-align:center}")},facade:"qBMHb_cSXm",focused:"qBMHb_cVYB",disabled:"qBMHb_ywdX",invalid:"qBMHb_fszt",input:"qBMHb_cwos",small:"qBMHb_doqw",medium:"qBMHb_ycrn",large:"qBMHb_cMDj","textAlign--start":"qBMHb_EMjX","textAlign--center":"qBMHb_ImeN"}
var E=(x=Object(b["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),C=Object(B["l"])(O,H),x(j=C(j=(F=S=function(e){Object(c["a"])(n,e)
var t=Object(s["a"])(n)
function n(e){var i
Object(o["a"])(this,n)
i=t.call(this)
i.handleInputRef=function(e){i._input=e
i.props.inputRef(e)}
i.handleChange=function(e){i.props.onChange(e,e.target.value)}
i.handleBlur=function(e){i.props.onBlur(e)
i.setState({hasFocus:false})}
i.handleFocus=function(e){i.props.onFocus(e)
i.setState({hasFocus:true})}
i.state={hasFocus:false}
i._defaultId=Object(k["a"])("TextInput")
i._messagesId=Object(k["a"])("TextInput-messages")
return i}Object(a["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"renderInput",value:function(){var e
var t=this.props,n=t.type,o=t.size,a=t.htmlSize,c=(t.display,t.textAlign),s=t.placeholder,l=t.value,d=t.defaultValue,f=t.required,h=t.isRequired,p=Object(r["a"])(t,["type","size","htmlSize","display","textAlign","placeholder","value","defaultValue","required","isRequired"])
var b=Object(m["b"])(p)
var _=this.interaction
var v=(e={},Object(i["a"])(e,H.input,true),Object(i["a"])(e,H[o],o),Object(i["a"])(e,H["textAlign--".concat(c)],c),e)
var y=""
b["aria-describedby"]&&(y="".concat(b["aria-describedby"]))
this.hasMessages&&(y=""!==y?"".concat(y," ").concat(this._messagesId):this._messagesId)
return u.a.createElement("input",Object.assign({},b,{className:g()(v),defaultValue:d,value:l,placeholder:s,ref:this.handleInputRef,type:n,id:this.id,required:h||f,"aria-invalid":this.invalid?"true":null,disabled:"disabled"===_,readOnly:"readonly"===_,"aria-describedby":""!==y?y:null,size:a,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}},{key:"render",value:function(){var e
var t=this.props,n=t.width,r=t.inline,o=t.display,a=t.label,c=t.renderLabel,s=t.renderBeforeInput,l=t.renderAfterInput,d=t.messages,f=t.inputContainerRef,h=t.icon,p=t.shouldNotWrap
var b=this.interaction
var m=s||l||h
var v=(e={},Object(i["a"])(e,H.facade,true),Object(i["a"])(e,H.disabled,"disabled"===b),Object(i["a"])(e,H.invalid,this.invalid),Object(i["a"])(e,H.focused,this.state.hasFocus),e)
return u.a.createElement(w["a"],{id:this.id,label:Object(_["a"])(c||a),messagesId:this._messagesId,messages:d,inline:"inline-block"===o||r,width:n,inputContainerRef:f,layout:this.props.layout},u.a.createElement("span",{className:g()(v)},m?u.a.createElement(R["a"],{wrap:p?"no-wrap":"wrap"},s&&u.a.createElement(R["a"].Item,{padding:"0 0 0 small"},Object(_["a"])(s)),u.a.createElement(R["a"].Item,{shouldGrow:true,shouldShrink:true},u.a.createElement(R["a"],null,u.a.createElement(R["a"].Item,{shouldGrow:true,shouldShrink:true},this.renderInput()),(l||h)&&u.a.createElement(R["a"].Item,{padding:"0 small 0 0"},l?Object(_["a"])(l):Object(_["a"])(h))))):this.renderInput()))}},{key:"interaction",get:function(){return Object(v["a"])({props:this.props})}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}},{key:"focused",get:function(){return Object(y["a"])(this._input)}},{key:"value",get:function(){return this._input.value}},{key:"id",get:function(){return this.props.id||this._defaultId}}])
n.displayName="TextInput"
return n}(l["Component"]),S.propTypes={renderLabel:f.a.oneOfType([f.a.node,f.a.func]),type:f.a.oneOf(["text","email","url","tel","search","password"]),id:f.a.string,value:Object(p["a"])(f.a.string),defaultValue:f.a.string,interaction:f.a.oneOf(["enabled","disabled","readonly"]),messages:f.a.arrayOf(w["d"].message),size:f.a.oneOf(["small","medium","large"]),textAlign:f.a.oneOf(["start","center"]),width:f.a.string,htmlSize:f.a.oneOfType([f.a.string,f.a.number]),display:f.a.oneOf(["inline-block","block"]),shouldNotWrap:f.a.bool,placeholder:f.a.string,isRequired:f.a.bool,inputRef:f.a.func,inputContainerRef:f.a.func,renderBeforeInput:f.a.oneOfType([f.a.node,f.a.func]),renderAfterInput:f.a.oneOfType([f.a.node,f.a.func]),onChange:f.a.func,onBlur:f.a.func,onFocus:f.a.func,icon:f.a.func,label:f.a.oneOfType([f.a.node,f.a.func]),required:f.a.bool,inline:f.a.bool},S.defaultProps={renderLabel:void 0,type:"text",id:void 0,interaction:void 0,isRequired:false,value:void 0,defaultValue:void 0,display:"block",shouldNotWrap:false,placeholder:void 0,width:void 0,size:"medium",htmlSize:void 0,textAlign:"start",messages:[],inputRef:function(e){},inputContainerRef:function(e){},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){},renderBeforeInput:void 0,renderAfterInput:void 0},F))||j)||j)},XKWA:function(e,t,n){const i=n("ouhR")
var r,o,a,c=i({})
i.subscribe=r=function(e,t){if(i.isPlainObject(e))return i.each(e,(function(e,t){r(e,t)}))
function n(){return t.apply(this,Array.prototype.slice.call(arguments,1))}n.guid=t.guid=t.guid||i.guid++
c.bind(e,n)}
i.unsubscribe=o=function(){c.unbind.apply(c,arguments)}
i.publish=a=function(){c.trigger.apply(c,arguments)}
e.exports={subscribe:r,unsubscribe:o,publish:a}},Yp61:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var r=n.n(i)
n("SG4G")
const o=function(){const e=document.createEvent("Event")
e.initEvent("rubricEditDataReady",true,true)
document.dispatchEvent(e)}
r.a.isReady?o():r()(document).ready(()=>o())},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var i=n("rePB")
var r=n("1OyB")
var o=n("vuIU")
var a=n("Ji7U")
var c=n("LK+K")
var s=n("q1tI")
var l=n.n(s)
var u=n("17x9")
var d=n.n(u)
var f=n("TSYQ")
var h=n.n(f)
var g=n("J2CL")
var p=n("KgFQ")
var b=n("jtGx")
var m=n("nAyT")
var _=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,i=e.spacing
return Object(_["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(i.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,w,R,k
var B={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var O=(y=Object(g["l"])(v,B),y(w=(k=R=function(e){Object(a["a"])(n,e)
var t=Object(c["a"])(n)
function n(){Object(r["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.wrap,o=t.weight,a=t.fontStyle,c=t.size,s=t.lineHeight,u=t.letterSpacing,d=t.transform,f=t.color,g=t.children
var m=Object(p["a"])(n,this.props)
return l.a.createElement(m,Object.assign({},Object(b["b"])(this.props),{className:h()((e={},Object(i["a"])(e,B.root,true),Object(i["a"])(e,B[c],c),Object(i["a"])(e,B["wrap-".concat(r)],r),Object(i["a"])(e,B["weight-".concat(o)],o),Object(i["a"])(e,B["style-".concat(a)],a),Object(i["a"])(e,B["transform-".concat(d)],d),Object(i["a"])(e,B["lineHeight-".concat(s)],s),Object(i["a"])(e,B["letterSpacing-".concat(u)],u),Object(i["a"])(e,B["color-".concat(f)],f),e)),ref:this.props.elementRef}),g)}}])
n.displayName="Text"
return n}(s["Component"]),R.propTypes={as:d.a.elementType,children:d.a.node,color:m["a"].deprecatePropValues(d.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:d.a.func,fontStyle:d.a.oneOf(["italic","normal"]),letterSpacing:d.a.oneOf(["normal","condensed","expanded"]),lineHeight:d.a.oneOf(["default","fit","condensed","double"]),size:d.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:d.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:d.a.oneOf(["normal","light","bold"]),wrap:d.a.oneOf(["normal","break-word"])},R.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},k))||w)},aq8L:function(e,t,n){"use strict"
var i=n("HGxv")
var r=n("8WeW")
Object(r["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var o=i["default"].scoped("instructure_misc_plugins")
var a=n("ouhR")
var c=n.n(a)
var s=n("gI0r")
var l=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
c.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(s["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(s["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(c.a.raw(n))}
c.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
c.a.fn.scrollbarWidth=function(){const e=c()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
c.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
c.a.fn.undim=function(e){return this.animate({opacity:1},e)}
c.a.fn.confirmDelete=function(e){e=c.a.extend({},c.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const r=function(){if(!i){e.cancelled&&c.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(l["a"])()
c.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,r,o)=>{e.error&&c.a.isFunction(e.error)?e.error.call(t,n,i,r,o):c.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!c.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const a=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=c()(e.message).dialog(c.a.extend({},{modal:true,close:r,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){c()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:a,click(){i=true
c()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}r()}
c.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
c.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const r=this
let o=false
for(t=0;t<c.a._checkFragments.fragmentList.length;t++){const e=c.a._checkFragments.fragmentList[t]
e.doc[0]==r[0]&&(o=true)}o||c.a._checkFragments.fragmentList.push({doc:r,fragment:""})
c()(window).bind("hashchange",c.a._checkFragments)
setTimeout(()=>{i&&i.length>0?r.triggerHandler("document_fragment_change",i):r&&r[0]&&r[0].location&&r[0].location.hash.length>0&&r.triggerHandler("document_fragment_change",r[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
c.a._checkFragments=function(){const e=c.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
c.a._checkFragments.fragmentList[t]=n}}}
c.a._checkFragments.fragmentList=[]
c.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
c.a.fn.showIf=function(e){if(c.a.isFunction(e))return this.each((function(t){c()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
c.a.fn.disableIf=function(e){c.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
c.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}c()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const r=this.height()
const o=(e.container||this).zIndex()
t=c()(document.createElement("div"))
t.css({width:i+6,height:r+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){c()(this).stop().fadeOut("fast",(function(){c()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
c()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){c()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){c()(this).remove()}))
e&&e.scroll&&c()("html,body").scrollToVisible(t)}
c.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
c.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
c.a.fn.fillWindowWithMe=function(e){const t=c.a.extend({minHeight:400},e),n=c()(this),i=c()("#wrapper"),r=c()("#main"),o=c()("#not_right_side"),a=c()(window),s=c()(this).add(t.alsoResize)
function l(){s.height(0)
const e=a.height()-(i.offset().top+i.outerHeight())+(r.height()-o.height()),l=Math.max(400,e)
s.height(l)
c.a.isFunction(t.onResize)&&t.onResize.call(n,l)}l()
a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",l)
return this}
c.a.fn.autoGrowInput=function(e){e=c.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||c()(this).width(),n="",i=c()(this),r=c()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=i.val()))return
r.text(n)
const o=r.width(),a=o+e.comfortZone>=t?o+e.comfortZone:t,c=i.width(),s=a<c&&a>=t||a>t&&a<e.maxWidth
s&&i.width(a)})}
r.insertAfter(i)
c()(this).bind("keyup keydown blur update change",o)}))
return this}
c.a},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("Ff2n")
var r=n("VTBJ")
var o=n("1OyB")
var a=n("vuIU")
var c=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var f=n.n(d)
var h=n("nAyT")
var g=n("KgFQ")
var p=n("jtGx")
var b=n("sQ3t")
var m=n("E+IV")
var _=n("UCAh")
var v=n("BTe1")
var y=n("J2CL")
var w=n("oXx0")
var R=n("jsCG")
var k=n("AdN2")
var B=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var O,x,C,j,S,F
var H={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var E=(O=Object(h["a"])("8.0.0",{tip:"renderTip",variant:"color"}),x=Object(w["a"])(),C=Object(y["l"])(B,H),O(j=x(j=C(j=(F=S=function(e){Object(c["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(o["a"])(this,n)
for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a]
e=t.call.apply(t,[this].concat(r))
e._id=Object(v["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(a["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,i=e.as
var o=this.state.hasFocus
var a={"aria-describedby":this._id}
if(i){var c=Object(g["a"])(n,this.props)
var s=Object(p["a"])(this.props,n.propTypes)
return u.a.createElement(c,Object.assign({},s,a),t)}return"function"===typeof t?t({focused:o,getTriggerProps:function(e){return Object(r["a"])({},a,{},e)}}):Object(b["a"])(this.props.children,a)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,r=t.isShowingContent,o=t.defaultIsShowingContent,a=t.on,c=t.placement,s=t.mountNode,l=t.constrain,d=t.offsetX,f=t.offsetY,h=t.positionTarget,g=t.onShowContent,b=t.onHideContent,_=t.tip,v=(t.variant,Object(i["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return u.a.createElement(R["a"],Object.assign({},Object(p["b"])(v),{isShowingContent:r,defaultIsShowingContent:o,on:a,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:c,color:"primary"===y?"primary-inverse":"primary",mountNode:s,constrain:l,shadow:"none",offsetX:d,offsetY:f,positionTarget:h,renderTrigger:function(){return e.renderTrigger()},onShowContent:g,onHideContent:b,onFocus:this.handleFocus,onBlur:this.handleBlur}),u.a.createElement("span",{id:this._id,className:H.root,role:"tooltip"},n?Object(m["a"])(n):_))}}])
n.displayName="Tooltip"
return n}(l["Component"]),S.propTypes={children:f.a.oneOfType([f.a.node,f.a.func]).isRequired,renderTip:f.a.oneOfType([f.a.node,f.a.func]),isShowingContent:f.a.bool,defaultIsShowingContent:f.a.bool,as:f.a.elementType,on:f.a.oneOfType([f.a.oneOf(["click","hover","focus"]),f.a.arrayOf(f.a.oneOf(["click","hover","focus"]))]),color:f.a.oneOf(["primary","primary-inverse"]),placement:_["a"].placement,mountNode:_["a"].mountNode,constrain:_["a"].constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),positionTarget:f.a.oneOfType([k["a"],f.a.func]),onShowContent:f.a.func,onHideContent:f.a.func,tip:f.a.node,variant:f.a.oneOf(["default","inverse"])},S.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},F))||j)||j)||j)},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(i,r,o){var a=e.apply(null,arguments)
if(a)return a
if(i[r]&&"function"!==typeof i[t])return new Error(["You provided a '".concat(r,"' prop without an '").concat(t,"' handler on '").concat(o,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},dDTa:function(e,t,n){"use strict"
const i=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=i},dbrX:function(e,t,n){"use strict"
var i=n("ODXe")
var r=n("uYtQ")
var o=n("QLaP")
var a=n.n(o)
const c={}
const s={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const t=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const n=Object(r["c"])()?"_rtl":""
return`${e}_${t}${n}`},getHandlebarsIndex:()=>window.BRANDABLE_CSS_HANDLEBARS_INDEX||[[],{}],urlFor(e,{combinedChecksum:t,includesNoVariables:n}){const i=n?"no_variables":s.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",i,`${e}-${t}.css`].join("/")},loadStylesheet(e,t){if(e in c)return
const n=document.createElement("link")
n.rel="stylesheet"
n.href=s.urlFor(e,t)
n.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(n)},loadStylesheetForJST({bundle:e,id:t}){const n=s.getHandlebarsIndex(),r=Object(i["a"])(n,2),o=r[0],c=r[1]
a()(c.hasOwnProperty(t),`requested to load stylesheet for template "${e}" (${t}) but no mapping is available for it!`)
if(1===c[t].length)return s.loadStylesheet(e,{combinedChecksum:c[t][0],includesNoVariables:true})
{let n=c[t][o.indexOf(s.getCssVariant())]
"number"===typeof n&&(n=c[t][n])
return s.loadStylesheet(e,{combinedChecksum:n,includesNoVariables:false})}}}
t["a"]=s},eGSd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var i,r,o,a
var c=0
var s=[]
var l=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var u=!!n.leading
var d="maxWait"in n
var f=!("trailing"in n)||!!n.trailing
var h=d?Math.max(+n.maxWait||0,t):0
function g(t){var n=i
var a=r
i=r=void 0
c=t
if(true!==l){o=e.apply(a,n)
return o}}function p(e){c=e
s.push(setTimeout(_,t))
return u?g(e):o}function b(e){var n=e-a
var i=e-c
var r=t-n
return d?Math.min(r,h-i):r}function m(e){var n=e-a
var i=e-c
return"undefined"===typeof a||n>=t||n<0||d&&i>=h}function _(){var e=Date.now()
if(m(e))return v(e)
s.push(setTimeout(_,b(e)))}function v(e){R()
if(f&&i)return g(e)
i=r=void 0
return o}function y(){l=true
R()
c=0
i=a=r=void 0}function w(){return 0===s.length?o:v(Date.now())}function R(){s.forEach((function(e){return clearTimeout(e)}))
s=[]}function k(){var e=Date.now()
var n=m(e)
for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u]
i=l
r=this
a=e
if(n){if(0===s.length)return p(a)
if(d){s.push(setTimeout(_,t))
return g(a)}}0===s.length&&s.push(setTimeout(_,t))
return o}k.cancel=y
k.flush=w
return k}},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var i=n("QF4Q")
var r=n("i/8D")
var o=n("EgqM")
var a=n("DUTp")
function c(e){var t={top:0,left:0,height:0,width:0}
if(!r["a"])return t
var n=Object(i["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var s=e===document?document:Object(a["a"])(n)
var l=s&&s.documentElement
if(!l||!Object(o["a"])(l,n))return t
var u=n.getBoundingClientRect()
var d
for(d in u)t[d]=u[d]
if(s!==document){var f=s.defaultView.frameElement
if(f){var h=c(f)
t.top+=h.top
t.bottom+=h.top
t.left+=h.left
t.right+=h.left}}return{top:t.top+(window.pageYOffset||l.scrollTop)-(l.clientTop||0),left:t.left+(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:s.body.clientWidth-t.width-t.left,bottom:s.body.clientHeight-t.height-t.top}}},msMH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("rePB")
var r=n("Ff2n")
var o=n("1OyB")
var a=n("vuIU")
var c=n("Ji7U")
var s=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var f=n.n(d)
var h=n("TSYQ")
var g=n.n(h)
var p=n("n12J")
var b=n("J2CL")
function m(e,t,n){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}return}var _=n("nAyT")
var v=n("KgFQ")
var y=n("jtGx")
var w=n("oXx0")
function R(e){var t=e.borders,n=e.colors,i=e.spacing,r=e.typography
return{lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h1FontFamily:r.fontFamily,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h2FontFamily:r.fontFamily,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h3FontFamily:r.fontFamily,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h4FontFamily:r.fontFamily,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,h5FontFamily:r.fontFamily,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,borderPadding:i.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}R.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"]}}
R["instructure"]=function(e){var t=e.typography
return{h1FontFamily:t.fontFamilyHeading,h2FontFamily:t.fontFamilyHeading,h3FontWeight:t.fontWeightBold,h3FontSize:"2.125rem",h4FontWeight:t.fontWeightBold,h4FontSize:t.fontSizeLarge,h5FontWeight:t.fontWeightBold,h5FontSize:t.fontSizeMedium}}
var k={fontFamily:["h1FontFamily","h2FontFamily","h3FontFamily","h4FontFamily","h5FontFamily"]}
var B=Object(b["e"])({map:k,version:"8.0.0"})
var O,x,C,j,S,F
var H={componentId:"blnAQ",template:function(e){return"\n\n.blnAQ_bGBk{line-height:".concat(e.lineHeight||"inherit",";margin:0}\n\ninput.blnAQ_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-0.375rem 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.blnAQ_bGBk[type]{text-align:left}\n\n[dir=rtl] input.blnAQ_bGBk[type]{text-align:right}\n\ninput.blnAQ_bGBk[type]:focus{outline:none}\n\n.blnAQ_fCtg{font-family:").concat(e.h1FontFamily||"inherit",";font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.blnAQ_cVrl{font-family:").concat(e.h2FontFamily||"inherit",";font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.blnAQ_dnfM{font-family:").concat(e.h3FontFamily||"inherit",";font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.blnAQ_KGwv{font-family:").concat(e.h4FontFamily||"inherit",";font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.blnAQ_eYKA{font-family:").concat(e.h5FontFamily||"inherit",";font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.blnAQ_dbSc{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.blnAQ_bACI{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_kWwi{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.blnAQ_drOs{color:inherit}\n\n.blnAQ_eCSh{color:").concat(e.primaryColor||"inherit","}\n\n.blnAQ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.blnAQ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.blnAQ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.blnAQ_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"blnAQ_bGBk","level--h1":"blnAQ_fCtg","level--h2":"blnAQ_cVrl","level--h3":"blnAQ_dnfM","level--h4":"blnAQ_KGwv","level--h5":"blnAQ_eYKA","level--reset":"blnAQ_dbSc","border--top":"blnAQ_bACI","border--bottom":"blnAQ_kWwi","color--inherit":"blnAQ_drOs","color--primary":"blnAQ_eCSh","color--secondary":"blnAQ_buuG","color--primary-inverse":"blnAQ_bFtJ","color--secondary-inverse":"blnAQ_dsSB",ellipsis:"blnAQ_bOQC"}
var E=(O=Object(_["a"])("8.0.0",{ellipsis:"<TruncateText />"}),x=Object(w["a"])(),C=Object(b["l"])(R,H,B),O(j=x(j=C(j=(F=S=function(e){Object(c["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(a["a"])(n,[{key:"render",value:function(){var e
var t=this.props,o=t.border,a=t.children,c=t.color,s=t.level,l=t.margin,d=t.elementRef,f=t.ellipsis,h=Object(r["a"])(t,["border","children","color","level","margin","elementRef","ellipsis"])
var b=Object(v["a"])(n,this.props,(function(){return"reset"===s?"span":s}))
return u.a.createElement(p["a"],Object.assign({},Object(y["b"])(h),{className:g()((e={},Object(i["a"])(e,H.root,true),Object(i["a"])(e,H["level--".concat(s)],true),Object(i["a"])(e,H["color--".concat(c)],c),Object(i["a"])(e,H["border--".concat(o)],"none"!==o),Object(i["a"])(e,H.ellipsis,f),e)),as:b,margin:l,elementRef:d}),a)}}])
n.displayName="Heading"
return n}(l["Component"]),S.propTypes={border:f.a.oneOf(["none","top","bottom"]),children:m,color:f.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:f.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:f.a.elementType,margin:b["c"].spacing,elementRef:f.a.func,ellipsis:f.a.bool},S.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2"},F))||j)||j)||j)},msTH:function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
var o=n("Y/W1")
var a=n.n(o)
var c=n("gI0r")
var s=n("HGxv")
var l=n("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var u=s["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=r()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=r()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=r()(`<a\n        id='media_comment_${Object(c["a"])(r()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(c["a"])(r()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(c["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(c["a"])(r()(e).attr("data-alt"))}'\n      />`)
t.html(r()(e).html())
return t},convert(e,t={}){const n=r()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=r()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=a.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const i=r()(`<form\n            action='${Object(c["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(c["a"])(t)}'\n            id='form-${Object(c["a"])(t)}'\n          />`)
i.append(r()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
i.append(r()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
r()("body").append(i)
setTimeout(()=>i.submit(),0)
return r()(`<iframe\n            class='user_content_iframe'\n            name='${Object(c["a"])(t)}'\n            style='width: ${Object(c["a"])(e.data("uc_width"))}; height: ${Object(c["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(c["a"])(u.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=r()(t)
const i=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(i)})}return n.html()}}
t["a"]=d},qJBq:function(e,t){(function(){var t,n,i
i=[]
t={}
e.exports=n=function(e,n,r){var o,a,c,s,l,u,d,f,h
null==r&&(r=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
h=n[0],o=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
h=n[0],o=n[1]}else{h=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
o=(null!=n?n.decimal:void 0)||t.decimal}d=""+h+o+r
u=i[d]
if(null==u){c=r?3:1
u=i[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+h+"\\d{"+c+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")}f=e.match(u)
if(!(null!=f&&3===f.length))return NaN
s=f[1].replace(new RegExp("\\"+h,"g"),"")
a=f[2]
l=parseFloat(s+"."+a)
return l}
e.exports.setOptions=function(e){var n,i
for(n in e){i=e[n]
t[n]=i}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(i){return n(i,e,t)}}
e.exports.factoryReset()}).call(this)},tHpF:function(e,t,n){"use strict"
var i=n("ouhR")
var r=n.n(i)
n("VrN0")
const o={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const a=function(e,t,n){e[t]=n
return e}
r.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
r.a.each(r()(this).serializeForm(),(function(){if(!o.validate.test(this.name))return
let t,i=this.name.match(o.key),c=this.value,s=this.name
while(void 0!==(t=i.pop())){s=s.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(o.push))c=a([],n(s),c)
else if(t.match(o.fixed)){n(s,t)
c=a([],t,c)}else t.match(o.named)&&(c=a({},t,c))}e=r.a.extend(true,e,c)}))
return e}}}])

//# sourceMappingURL=edit_rubric-c-c43e0267ba.js.map