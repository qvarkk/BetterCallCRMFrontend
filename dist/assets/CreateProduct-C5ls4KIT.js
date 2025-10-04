import{i as ce,c as f,o as l,j as c,m as o,B as L,a6 as te,a as E,f as j,p as S,q as pe,e as y,w,v as Z,b,g as B,n as F,h as I,aL as fe,T as ge,J as M,t as P,an as me,H as V,ar as G,W as he,N as R,u as m,I as O,aK as J,y as be,aM as ve,Y as ye,C as we,D as ke,E as z,aN as Be,aj as Ce,G as v,a5 as X,K as Se,_ as Fe}from"./index-BbRs3ZIa.js";import{u as ze,s as Ie}from"./productsStore-C540B38b.js";import{s as H,e as Pe,d as Le}from"./index-Do_9Fej1.js";var ne={name:"UploadIcon",extends:ce};function xe(e){return Ue(e)||Ae(e)||Te(e)||$e()}function $e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(e,t){if(e){if(typeof e=="string")return W(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}function Ae(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ue(e){if(Array.isArray(e))return W(e)}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function Ee(e,t,n,a,i,s){return l(),f("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),xe(t[0]||(t[0]=[c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)])),16)}ne.render=Ee;var De=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,Me={root:function(t){var n=t.props;return["p-message p-component p-message-"+n.severity,{"p-message-outlined":n.variant==="outlined","p-message-simple":n.variant==="simple","p-message-sm":n.size==="small","p-message-lg":n.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ve=L.extend({name:"message",style:De,classes:Me}),Oe={name:"BaseMessage",extends:E,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Ve,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function Q(e,t,n){return(t=je(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function je(e){var t=Ne(e,"string");return T(t)=="symbol"?t:t+""}function Ne(e,t){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(T(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var q={name:"Message",extends:Oe,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var t=this;this.life&&setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)},methods:{close:function(t){this.visible=!1,this.$emit("close",t)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return j(Q(Q({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:te},components:{TimesIcon:H}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(a){Re(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Re(e,t,n){return(t=We(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function We(e){var t=Ke(e,"string");return A(t)=="symbol"?t:t+""}function Ke(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(A(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var He=["data-p"],qe=["data-p"],Ye=["data-p"],Ze=["aria-label","data-p"],Ge=["data-p"];function Je(e,t,n,a,i,s){var u=S("TimesIcon"),d=pe("ripple");return l(),y(ge,o({name:"p-message",appear:""},e.ptmi("transition")),{default:w(function(){return[Z(c("div",o({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":s.dataP},e.ptm("root")),[e.$slots.container?b(e.$slots,"container",{key:0,closeCallback:s.close}):(l(),f("div",o({key:1,class:e.cx("content"),"data-p":s.dataP},e.ptm("content")),[b(e.$slots,"icon",{class:F(e.cx("icon"))},function(){return[(l(),y(I(e.icon?"span":null),o({class:[e.cx("icon"),e.icon],"data-p":s.dataP},e.ptm("icon")),null,16,["class","data-p"]))]}),e.$slots.default?(l(),f("div",o({key:0,class:e.cx("text"),"data-p":s.dataP},e.ptm("text")),[b(e.$slots,"default")],16,Ye)):B("",!0),e.closable?Z((l(),f("button",o({key:1,class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(h){return s.close(h)}),"data-p":s.dataP},ee(ee({},e.closeButtonProps),e.ptm("closeButton"))),[b(e.$slots,"closeicon",{},function(){return[e.closeIcon?(l(),f("i",o({key:0,class:[e.cx("closeIcon"),e.closeIcon],"data-p":s.dataP},e.ptm("closeIcon")),null,16,Ge)):(l(),y(u,o({key:1,class:[e.cx("closeIcon"),e.closeIcon],"data-p":s.dataP},e.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,Ze)),[[d]]):B("",!0)],16,qe))],16,He),[[fe,i.visible]])]}),_:3},16)}q.render=Je;var Xe=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,Qe={root:function(t){var n=t.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},_e=L.extend({name:"progressbar",style:Xe,classes:Qe}),et={name:"BaseProgressBar",extends:E,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:_e,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},se={name:"ProgressBar",extends:et,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return j({determinate:this.determinate,indeterminate:this.indeterminate})}}},tt=["aria-valuenow","data-p"],nt=["data-p"],st=["data-p"],at=["data-p"];function it(e,t,n,a,i,s){return l(),f("div",o({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100","data-p":s.dataP},e.ptmi("root")),[s.determinate?(l(),f("div",o({key:0,class:e.cx("value"),style:s.progressStyle,"data-p":s.dataP},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(l(),f("div",o({key:0,class:e.cx("label"),"data-p":s.dataP},e.ptm("label")),[b(e.$slots,"default",{},function(){return[M(P(e.value+"%"),1)]})],16,st)):B("",!0)],16,nt)):s.indeterminate?(l(),f("div",o({key:1,class:e.cx("value"),"data-p":s.dataP},e.ptm("value")),null,16,at)):B("",!0)],16,tt)}se.render=it;var ot=`
    .p-fileupload input[type='file'] {
        display: none;
    }

    .p-fileupload-advanced {
        border: 1px solid dt('fileupload.border.color');
        border-radius: dt('fileupload.border.radius');
        background: dt('fileupload.background');
        color: dt('fileupload.color');
    }

    .p-fileupload-header {
        display: flex;
        align-items: center;
        padding: dt('fileupload.header.padding');
        background: dt('fileupload.header.background');
        color: dt('fileupload.header.color');
        border-style: solid;
        border-width: dt('fileupload.header.border.width');
        border-color: dt('fileupload.header.border.color');
        border-radius: dt('fileupload.header.border.radius');
        gap: dt('fileupload.header.gap');
    }

    .p-fileupload-content {
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.content.gap');
        transition: border-color dt('fileupload.transition.duration');
        padding: dt('fileupload.content.padding');
    }

    .p-fileupload-content .p-progressbar {
        width: 100%;
        height: dt('fileupload.progressbar.height');
    }

    .p-fileupload-file-list {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.filelist.gap');
    }

    .p-fileupload-file {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: dt('fileupload.file.padding');
        border-block-end: 1px solid dt('fileupload.file.border.color');
        gap: dt('fileupload.file.gap');
    }

    .p-fileupload-file:last-child {
        border-block-end: 0;
    }

    .p-fileupload-file-info {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.file.info.gap');
    }

    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }

    .p-fileupload-file-actions {
        margin-inline-start: auto;
    }

    .p-fileupload-highlight {
        border: 1px dashed dt('fileupload.content.highlight.border.color');
    }

    .p-fileupload-basic .p-message {
        margin-block-end: dt('fileupload.basic.gap');
    }

    .p-fileupload-basic-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: dt('fileupload.basic.gap');
    }
`,lt={root:function(t){var n=t.props;return["p-fileupload p-fileupload-".concat(n.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button",basicContent:"p-fileupload-basic-content"},rt=L.extend({name:"fileupload",style:ot,classes:lt}),dt={name:"BaseFileUpload",extends:E,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:rt,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},ae={name:"FileContent",hostName:"FileUpload",extends:E,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(t){var n,a=1024,i=3,s=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(s[0]);var u=Math.floor(Math.log(t)/Math.log(a)),d=parseFloat((t/Math.pow(a,u)).toFixed(i));return"".concat(d," ").concat(s[u])}},components:{Button:V,Badge:me,TimesIcon:H}},ut=["alt","src","width"];function ct(e,t,n,a,i,s){var u=S("Badge"),d=S("TimesIcon"),h=S("Button");return l(!0),f(O,null,R(n.files,function(p,g){return l(),f("div",o({key:p.name+p.type+p.size,class:e.cx("file")},{ref_for:!0},e.ptm("file")),[c("img",o({role:"presentation",class:e.cx("fileThumbnail"),alt:p.name,src:p.objectURL,width:n.previewWidth},{ref_for:!0},e.ptm("fileThumbnail")),null,16,ut),c("div",o({class:e.cx("fileInfo")},{ref_for:!0},e.ptm("fileInfo")),[c("div",o({class:e.cx("fileName")},{ref_for:!0},e.ptm("fileName")),P(p.name),17),c("span",o({class:e.cx("fileSize")},{ref_for:!0},e.ptm("fileSize")),P(s.formatSize(p.size)),17)],16),m(u,{value:n.badgeValue,class:F(e.cx("pcFileBadge")),severity:n.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),c("div",o({class:e.cx("fileActions")},{ref_for:!0},e.ptm("fileActions")),[m(h,{onClick:function(Y){return e.$emit("remove",g)},text:"",rounded:"",severity:"danger",class:F(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:w(function(x){return[n.templates.fileremoveicon?(l(),y(I(n.templates.fileremoveicon),{key:0,class:F(x.class),file:p,index:g},null,8,["class","file","index"])):(l(),y(d,o({key:1,class:x.class,"aria-hidden":"true"},{ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}ae.render=ct;function N(e){return gt(e)||ft(e)||ie(e)||pt()}function pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gt(e){if(Array.isArray(e))return K(e)}function D(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ie(e))||t){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(p){throw p},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,u=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var p=n.next();return u=p.done,p},e:function(p){d=!0,s=p},f:function(){try{u||n.return==null||n.return()}finally{if(d)throw s}}}}function ie(e,t){if(e){if(typeof e=="string")return K(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var oe={name:"FileUpload",extends:dt,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(t){t.button===0&&this.$refs.fileInput.click()},onFileSelect:function(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var n=t.dataTransfer?t.dataTransfer.files:t.target.files,a=D(n),i;try{for(a.s();!(i=a.n()).done;){var s=i.value;!this.isFileSelected(s)&&!this.isFileLimitExceeded()&&this.validate(s)&&(this.isImage(s)&&(s.objectURL=window.URL.createObjectURL(s)),this.files.push(s))}}catch(u){a.e(u)}finally{a.f()}this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var t=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files});else{var n=new XMLHttpRequest,a=new FormData;this.$emit("before-upload",{xhr:n,formData:a});var i=D(this.files),s;try{for(i.s();!(s=i.n()).done;){var u=s.value;a.append(this.name,u,u.name)}}catch(d){i.e(d)}finally{i.f()}n.upload.addEventListener("progress",function(d){d.lengthComputable&&(t.progress=Math.round(d.loaded*100/d.total)),t.$emit("progress",{originalEvent:d,progress:t.progress})}),n.onreadystatechange=function(){if(n.readyState===4){if(t.progress=0,n.status>=200&&n.status<300){var d;t.fileLimit&&(t.uploadedFileCount+=t.files.length),t.$emit("upload",{xhr:n,files:t.files}),(d=t.uploadedFiles).push.apply(d,N(t.files))}else t.$emit("error",{xhr:n,files:t.files});t.clear()}},this.url&&(n.open("POST",this.url,!0),this.$emit("before-send",{xhr:n,formData:a}),n.withCredentials=this.withCredentials,n.send(a))}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(t){if(this.files&&this.files.length){var n=D(this.files),a;try{for(n.s();!(a=n.n()).done;){var i=a.value;if(i.name+i.type+i.size===t.name+t.type+t.size)return!0}}catch(s){n.e(s)}finally{n.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(t){var n=this.accept.split(",").map(function(d){return d.trim()}),a=D(n),i;try{for(a.s();!(i=a.n()).done;){var s=i.value,u=this.isWildcard(s)?this.getTypeClass(t.type)===this.getTypeClass(s):t.type==s||this.getFileExtension(t).toLowerCase()===s.toLowerCase();if(u)return!0}}catch(d){a.e(d)}finally{a.f()}return!1},getTypeClass:function(t){return t.substring(0,t.indexOf("/"))},isWildcard:function(t){return t.indexOf("*")!==-1},getFileExtension:function(t){return"."+t.name.split(".").pop()},isImage:function(t){return/^image\//.test(t.type)},onDragEnter:function(t){!this.disabled&&(!this.hasFiles||this.multiple)&&(t.stopPropagation(),t.preventDefault())},onDragOver:function(t){!this.disabled&&(!this.hasFiles||this.multiple)&&(!this.isUnstyled&&he(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),t.stopPropagation(),t.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&G(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(t){if(!this.disabled){!this.isUnstyled&&G(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),t.stopPropagation(),t.preventDefault();var n=t.dataTransfer?t.dataTransfer.files:t.target.files,a=this.multiple||n&&n.length===1;a&&this.onFileSelect(t)}},remove:function(t){this.clearInputElement();var n=this.files.splice(t,1)[0];this.files=N(this.files),this.$emit("remove",{file:n,files:this.files})},removeUploadedFile:function(t){var n=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=N(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:n,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(t){var n,a=1024,i=3,s=((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(t===0)return"0 ".concat(s[0]);var u=Math.floor(Math.log(t)/Math.log(a)),d=parseFloat((t/Math.pow(a,u)).toFixed(i));return"".concat(d," ").concat(s[u])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var t;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var n;return this.files&&this.files.length===1?this.files[0].name:(n=this.$primevue.config.locale)===null||n===void 0||(n=n.fileChosenMessage)===null||n===void 0?void 0:n.replace("{0}",this.files.length)}return((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:V,ProgressBar:se,Message:q,FileContent:ae,PlusIcon:Pe,UploadIcon:ne,TimesIcon:H},directives:{ripple:te}},mt=["multiple","accept","disabled"],ht=["accept","disabled","multiple"];function bt(e,t,n,a,i,s){var u=S("Button"),d=S("ProgressBar"),h=S("Message"),p=S("FileContent");return s.isAdvanced?(l(),f("div",o({key:0,class:e.cx("root")},e.ptmi("root")),[c("input",o({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=function(){return s.onFileSelect&&s.onFileSelect.apply(s,arguments)}),multiple:e.multiple,accept:e.accept,disabled:s.chooseDisabled},e.ptm("input")),null,16,mt),c("div",o({class:e.cx("header")},e.ptm("header")),[b(e.$slots,"header",{files:i.files,uploadedFiles:i.uploadedFiles,chooseCallback:s.choose,uploadCallback:s.uploader,clearCallback:s.clear},function(){return[m(u,o({label:s.chooseButtonLabel,class:s.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:s.choose,onKeydown:J(s.choose,["enter"]),onFocus:s.onFocus,onBlur:s.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:w(function(g){return[b(e.$slots,"chooseicon",{},function(){return[(l(),y(I(e.chooseIcon?"span":"PlusIcon"),o({class:[g.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(l(),y(u,o({key:0,class:e.cx("pcUploadButton"),label:s.uploadButtonLabel,onClick:s.uploader,disabled:s.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:w(function(g){return[b(e.$slots,"uploadicon",{},function(){return[(l(),y(I(e.uploadIcon?"span":"UploadIcon"),o({class:[g.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):B("",!0),e.showCancelButton?(l(),y(u,o({key:1,class:e.cx("pcCancelButton"),label:s.cancelButtonLabel,onClick:s.clear,disabled:s.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:w(function(g){return[b(e.$slots,"cancelicon",{},function(){return[(l(),y(I(e.cancelIcon?"span":"TimesIcon"),o({class:[g.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):B("",!0)]})],16),c("div",o({ref:"content",class:e.cx("content"),onDragenter:t[1]||(t[1]=function(){return s.onDragEnter&&s.onDragEnter.apply(s,arguments)}),onDragover:t[2]||(t[2]=function(){return s.onDragOver&&s.onDragOver.apply(s,arguments)}),onDragleave:t[3]||(t[3]=function(){return s.onDragLeave&&s.onDragLeave.apply(s,arguments)}),onDrop:t[4]||(t[4]=function(){return s.onDrop&&s.onDrop.apply(s,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[b(e.$slots,"content",{files:i.files,uploadedFiles:i.uploadedFiles,removeUploadedFileCallback:s.removeUploadedFile,removeFileCallback:s.remove,progress:i.progress,messages:i.messages},function(){return[s.hasFiles?(l(),y(d,{key:0,value:i.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):B("",!0),(l(!0),f(O,null,R(i.messages,function(g){return l(),y(h,{key:g,severity:"error",onClose:s.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:w(function(){return[M(P(g),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),s.hasFiles?(l(),f("div",{key:1,class:F(e.cx("fileList"))},[m(p,{files:i.files,onRemove:s.remove,badgeValue:s.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):B("",!0),s.hasUploadedFiles?(l(),f("div",{key:2,class:F(e.cx("fileList"))},[m(p,{files:i.uploadedFiles,onRemove:s.removeUploadedFile,badgeValue:s.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):B("",!0)]}),e.$slots.empty&&!s.hasFiles&&!s.hasUploadedFiles?(l(),f("div",be(o({key:0},e.ptm("empty"))),[b(e.$slots,"empty")],16)):B("",!0)],16)],16)):s.isBasic?(l(),f("div",o({key:1,class:e.cx("root")},e.ptmi("root")),[(l(!0),f(O,null,R(i.messages,function(g){return l(),y(h,{key:g,severity:"error",onClose:s.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:w(function(){return[M(P(g),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),c("div",o({class:e.cx("basicContent")},e.ptm("basicContent")),[m(u,o({label:s.chooseButtonLabel,class:s.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:s.onBasicUploaderClick,onKeydown:J(s.choose,["enter"]),onFocus:s.onFocus,onBlur:s.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:w(function(g){return[b(e.$slots,"chooseicon",{},function(){return[(l(),y(I(e.chooseIcon?"span":"PlusIcon"),o({class:[g.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?B("",!0):b(e.$slots,"filelabel",{key:0,class:F(e.cx("filelabel")),files:i.files},function(){return[c("span",{class:F(e.cx("filelabel"))},P(s.basicFileChosenLabel),3)]}),c("input",o({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:t[5]||(t[5]=function(){return s.onFileSelect&&s.onFileSelect.apply(s,arguments)}),onFocus:t[6]||(t[6]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:t[7]||(t[7]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)})},e.ptm("input")),null,16,ht)],16)],16)):B("",!0)}oe.render=bt;var vt=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-multiselect-label:has(.p-chip),
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,yt={root:"p-iftalabel"},wt=L.extend({name:"iftalabel",style:vt,classes:yt}),kt={name:"BaseIftaLabel",extends:E,style:wt,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},$={name:"IftaLabel",extends:kt,inheritAttrs:!1};function Bt(e,t,n,a,i,s){return l(),f("span",o({class:e.cx("root")},e.ptmi("root")),[b(e.$slots,"default")],16)}$.render=Bt;var Ct=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,St={root:{position:"relative"}},Ft={root:function(t){var n=t.instance,a=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":n.checked,"p-disabled":a.disabled,"p-invalid":n.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},zt=L.extend({name:"toggleswitch",style:Ct,classes:Ft,inlineStyles:St}),It={name:"BaseToggleSwitch",extends:ve,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:zt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},le={name:"ToggleSwitch",extends:It,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var n=this.checked?this.falseValue:this.trueValue;this.writeValue(n,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var n,a;this.$emit("blur",t),(n=(a=this.formField).onBlur)===null||n===void 0||n.call(a,t)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return j({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},Pt=["data-p-checked","data-p-disabled","data-p"],Lt=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],xt=["data-p"],$t=["data-p"];function Tt(e,t,n,a,i,s){return l(),f("div",o({class:e.cx("root"),style:e.sx("root")},s.getPTOptions("root"),{"data-p-checked":s.checked,"data-p-disabled":e.disabled,"data-p":s.dataP}),[c("input",o({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:s.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":s.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:t[1]||(t[1]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}),onChange:t[2]||(t[2]=function(){return s.onChange&&s.onChange.apply(s,arguments)})},s.getPTOptions("input")),null,16,Lt),c("div",o({class:e.cx("slider")},s.getPTOptions("slider"),{"data-p":s.dataP}),[c("div",o({class:e.cx("handle")},s.getPTOptions("handle"),{"data-p":s.dataP}),[b(e.$slots,"handle",{checked:s.checked})],16,$t)],16,xt)],16,Pt)}le.render=Tt;var At=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,Ut={root:function(t){var n=t.instance,a=t.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":a.autoResize,"p-textarea-sm p-inputfield-sm":a.size==="small","p-textarea-lg p-inputfield-lg":a.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Et=L.extend({name:"textarea",style:At,classes:Ut}),Dt={name:"BaseTextarea",extends:ye,props:{autoResize:Boolean},style:Et,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function Mt(e,t,n){return(t=Vt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vt(e){var t=Ot(e,"string");return U(t)=="symbol"?t:t+""}function Ot(e,t){if(U(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(U(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var re={name:"Textarea",extends:Dt,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var t=this.$el.style.height,n=parseInt(t)||0,a=this.$el.scrollHeight,i=!n||a>n,s=n&&a<n;s?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):i&&(this.$el.style.height="".concat(a,"px"))}},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return o(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return j(Mt({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},jt=["value","name","disabled","aria-invalid","data-p"];function Nt(e,t,n,a,i,s){return l(),f("textarea",o({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":s.dataP,onInput:t[0]||(t[0]=function(){return s.onInput&&s.onInput.apply(s,arguments)})},s.attrs),null,16,jt)}re.render=Nt;const Rt={class:"flex justify-center"},Wt={class:"flex flex-col items-start"},Kt={class:"flex flex-col gap-2"},Ht={class:"flex gap-2"},qt=we({__name:"CreateProduct",setup(e){const t=ze(),n=Se(),a=ke(),i=z(!1),s=z(""),u=z(""),d=z(0),h=z(""),p=z(!0),g=z(null),x=Be(()=>s.value.trim()&&u.value.trim()&&h.value.trim()),Y=k=>{const r=Array.isArray(k.files)?k.files[0]:k.files;r?g.value=r:g.value=null},de=async()=>{i.value=!0;const k=new FormData;k.append("name",s.value),k.append("sku",u.value),k.append("price",d.value),k.append("description",h.value),k.append("is_active",p.value?1:0),k.append("image",g.value),await t.createProduct(k),t.responseStatus!==201?a.add({severity:"error",summary:"Couldn't create product",detail:t.responseMessage,life:4e3}):(t.isProductCreated=!0,await n.push("/products")),i.value=!1},ue=async()=>{await n.push("/products")};return(k,r)=>(l(),f(O,null,[c("div",Rt,[c("form",{onSubmit:Ce(de,["prevent"]),class:"max-w-[720px] w-full p-2 flex flex-col gap-4"},[c("div",Wt,[m(v(V),{icon:"pi pi-arrow-left",label:"Back",variant:"link",onClick:ue}),r[5]||(r[5]=c("h2",{class:"text-2xl self-center"},"Create product",-1))]),m(v($),null,{default:w(()=>[m(v(X),{type:"text",id:"name",modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=C=>s.value=C),fluid:""},null,8,["modelValue"]),r[6]||(r[6]=c("label",{for:"name"},"Name",-1))]),_:1}),m(v($),null,{default:w(()=>[m(v(X),{type:"text",id:"sku",modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=C=>u.value=C),fluid:""},null,8,["modelValue"]),r[8]||(r[8]=c("label",{for:"sku"},"SKU",-1)),m(v(q),{size:"small",severity:"secondary",variant:"simple"},{default:w(()=>[...r[7]||(r[7]=[M("Unique identifier of the product.",-1)])]),_:1})]),_:1}),m(v($),null,{default:w(()=>[m(v(re),{id:"description",modelValue:h.value,"onUpdate:modelValue":r[2]||(r[2]=C=>h.value=C),rows:"5",style:{resize:"none"},fluid:""},null,8,["modelValue"]),r[9]||(r[9]=c("label",{for:"description"},"Description",-1))]),_:1}),m(v($),null,{default:w(()=>[m(v(Le),{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=C=>d.value=C),inputId:"price",mode:"currency",currency:"USD",locale:"en-US",fluid:""},null,8,["modelValue"]),r[10]||(r[10]=c("label",{for:"price"},"Price",-1))]),_:1}),c("div",Kt,[r[12]||(r[12]=c("span",{class:"text-xl"},"Product image",-1)),m(v(oe),{id:"image",multiple:!1,fileLimit:1,showUploadButton:!1,accept:"image/*",maxFileSize:1e7,onSelect:Y},{empty:w(()=>[...r[11]||(r[11]=[c("span",null,"Drag and drop files to here to upload.",-1)])]),_:1})]),c("div",Ht,[m(v(le),{inputId:"isActive",modelValue:p.value,"onUpdate:modelValue":r[4]||(r[4]=C=>p.value=C)},null,8,["modelValue"]),r[13]||(r[13]=c("label",{for:"isActive"},"Activate product",-1))]),m(v(V),{loading:i.value,disabled:!x.value||i.value,type:"submit",label:"Create"},null,8,["loading","disabled"])],32)]),m(v(Ie),{position:"bottom-right"})],64))}}),Jt=Fe(qt,[["__scopeId","data-v-33a5ed3c"]]);export{Jt as default};
