import{B as z,a as D,f as M,c as l,g as h,o as i,b as C,e as f,m as c,h as $,t as y,L as I,M as N,C as K,E as u,F as A,u as s,w as v,G as o,I as S,j as E,N as T,J as V}from"./index-BbRs3ZIa.js";import{s as F,a as r}from"./index-CEzWgJsU.js";import{b as L}from"./index-Do_9Fej1.js";var j=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,G={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},J=z.extend({name:"chip",style:j,classes:G}),q={name:"BaseChip",extends:D,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:J,provide:function(){return{$pcChip:this,$parentInstance:this}}},B={name:"Chip",extends:q,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(a){(a.key==="Enter"||a.key==="Backspace")&&this.close(a)},close:function(a){this.visible=!1,this.$emit("remove",a)}},computed:{dataP:function(){return M({removable:this.removable})}},components:{TimesCircleIcon:L}},H=["aria-label","data-p"],O=["src"];function Q(e,a,n,d,p,t){return p.visible?(i(),l("div",c({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":t.dataP}),[C(e.$slots,"default",{},function(){return[e.image?(i(),l("img",c({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,O)):e.$slots.icon?(i(),f($(e.$slots.icon),c({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),l("span",c({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):h("",!0),e.label!==null?(i(),l("div",c({key:3,class:e.cx("label")},e.ptm("label")),y(e.label),17)):h("",!0)]}),e.removable?C(e.$slots,"removeicon",{key:0,removeCallback:t.close,keydownCallback:t.onKeydown},function(){return[(i(),f($(e.removeIcon?"span":"TimesCircleIcon"),c({class:[e.cx("removeIcon"),e.removeIcon],onClick:t.close,onKeydown:t.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):h("",!0)],16,H)):h("",!0)}B.render=Q;const R={getAllPaginated:(e=5,a=1)=>I.get(`/deals?per_page=${e}&page=${a}`),getById:e=>I.get(`/deals/${e}`)},U=N("deals",{state:()=>({deals:[],count:null,errorMessage:""}),actions:{async getDeals(e=5,a=1){this.errorMessage="";try{const n=await R.getAllPaginated(e,a);this.deals=n.data,n.meta&&(this.count=n.meta.total)}catch(n){this.errorMessage=n.message}}}}),W={class:"flex flex-wrap gap-1"},X={key:0,class:"text-red-500"},ee=K({__name:"Deals",setup(e){const a=U(),n=u(!0),d=u(""),p=u(5),t=u(1),b=u([]),P=async m=>{t.value=m.page+1,p.value=m.rows,await w()},w=async()=>{n.value=!0,d.value="",await a.getDeals(p.value,t.value),b.value=a.deals,d.value=a.errorMessage,n.value=!1};return A(async()=>{await w()}),(m,Y)=>(i(),l(S,null,[s(o(F),{value:b.value,lazy:!0,loading:n.value,paginator:!0,rows:p.value,page:t.value,"rows-per-page-options":[2,5,10],"total-records":o(a).count,onPage:P},{default:v(()=>[s(o(r),{field:"id",header:"ID"}),s(o(r),{field:"title",header:"Title"}),s(o(r),{field:"products",header:"Products"},{body:v(g=>[E("div",W,[(i(!0),l(S,null,T(g.data.products,k=>(i(),f(o(B),{key:k.id,label:k.name,class:"text-xs"},null,8,["label"]))),128))])]),_:1}),s(o(r),{field:"amount",header:"Amount"},{body:v(g=>[V(" $"+y(g.data.amount),1)]),_:1}),s(o(r),{field:"expected_close_date",header:"Expected Close"}),s(o(r),{field:"closed_at",header:"Closed At"}),s(o(r),{field:"notes",header:"Notes"})]),_:1},8,["value","loading","rows","page","total-records"]),d.value?(i(),l("span",X,y(d.value),1)):h("",!0)],64))}});export{ee as default};
