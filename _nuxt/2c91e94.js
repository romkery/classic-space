(self.webpackChunk=self.webpackChunk||[]).push([[143],{6491:(a,o,e)=>{a.exports=e.p+"img/mars.fc4a898.jpg"},7189:(a,o,e)=>{"use strict";e.d(o,{e:()=>n});var t=e(8600),s=e(9806);const n=(0,t.Q_)("Home",()=>{const l=(0,s.qj)([{imgSrc:e(6491),text:`The latest photos 
 and 
 videos 
 from the rovers.`,style:{flexDirection:"row",gridArea:"1 / 1 / 2 / 3",bg:"hsla(280, 80%, 12%, .7)"}},{imgSrc:e(6491),text:`Interesting 
 news 
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"2 / 1 / 3 / 2",bg:"hsla(270, 80%, 12%, .7)"}},{imgSrc:e(6491),text:`Interesting 
 news 
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"2 / 2 / 3 / 3",bg:"hsla(260, 80%, 12%, .7)"}},{imgSrc:e(6491),text:`Interesting 
 news 
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"3 / 1 / 4 / 2",bg:"hsla(250, 80%, 12%, .7)"}},{imgSrc:e(6491),text:`Interesting 
 news 
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:" 3 / 2 / 4 / 3",bg:"hsla(240, 80%, 12%, .7)"}},{imgSrc:e(6491),text:`Interesting 
 news 
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"4 / 1 / 5 / 2",bg:"hsla(230, 80%, 12%, .7)"}},{imgSrc:e(6491),text:`Interesting 
 news 
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"4 / 2 / 5 / 3",bg:"hsla(220, 80%, 12%, .7)"}}]),m=(0,s.qj)({preview_title_h1:{state:!1,animation:"slideInLeft"},preview_title_img:{state:!1,animation:"slideInRight"},preview_h2:{state:!1,animation:"fadeInUp"},card:{state:!1,animation:"fadeInUp"}});return{store:{cards:l,animations:m}}})},9572:(a,o,e)=>{"use strict";e.d(o,{Z:()=>P});var t=e(1432),s=e(8187),n=e(5507),l=e(9806);const m=f=>(_pushScopeId("data-v-a7a38754"),f=f(),_popScopeId(),f),d={class:"container"},_={class:"daily"},c=["src"],v=(0,t.aZ)({__name:"DailyPicture",async setup(f){let g,r;const w=(0,l.qj)(([g,r]=(0,t.mv)(()=>(0,n.ib)("https://api.nasa.gov/planetary/apod?count=3&api_key=afnJ1XFijXcMMDHkRZY16keAbGZNgRY2Va0b8NCu","$xE7UJV5vLN").data),g=await g,r(),g));return(L,U)=>((0,t.wg)(),(0,t.iD)("div",d,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(w,h=>((0,t.wg)(),(0,t.iD)("div",_,[(0,t._)("img",{src:h.url,alt:"daily"},null,8,c),(0,t._)("span",null,(0,s.zw)(h.date),1),(0,t._)("span",null,(0,s.zw)(h.copyright),1),(0,t._)("h1",null,(0,s.zw)(h.title),1),(0,t._)("h3",null,(0,s.zw)(h.explanation),1)]))),256))]))}});var x=e(3046);const P=(0,x.Z)(v,[["__scopeId","data-v-a7a38754"]])},1433:(a,o,e)=>{"use strict";e.d(o,{Z:()=>f});var t=e(9806),s=e(1432),n=e(7348);const l=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,m=`uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.5 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 3.0);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV, 0.5).xyz, 1.0);
}
`,d=`varying vec3 vertexNormal;

void main() {
    float intensity = pow(.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 1.5);
    gl_FragColor = vec4(0.2, 0.5, 0.9, 1.8) * intensity;
}
`,_=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix *normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var c=e(9822),v=e(5824);const x=(0,s.aZ)({__name:"Earth",setup(g){const r=(0,t.iH)(null),w=new n.dpR().load("marble.jpg"),L=new c.E,U=new n.xsS,h=new n.cPb(75,1,.1,1e3),E=new n.CP7({alpha:!0,antialias:!0});h.position.z=2,E.setPixelRatio(window.devicePixelRatio);const u=new v.z(h,E.domElement);u.maxPolarAngle=1.57,u.minPolarAngle=1,u.enableZoom=!1,u.autoRotate=!0,u.autoRotateSpeed=4,u.enableDamping=!0,u.dampingFactor=.01,u.addEventListener("change",()=>{requestAnimationFrame(()=>{u.autoRotateSpeed<4&&(u.autoRotateSpeed+=.1),u.autoRotateSpeed>4&&(u.autoRotateSpeed-=.1)})});function S(){requestAnimationFrame(S),u.update(),E.render(U,h)}const T=new n.jyz({vertexShader:l,fragmentShader:m,uniforms:{globeTexture:{value:w}}}),M=new n.Kj0(new n.xo$(1,100,100),T),Z=new n.Kj0(new n.xo$(1,100,100),new n.jyz({vertexShader:_,fragmentShader:d,blending:n.WMw,side:n._Li}));Z.scale.set(1.1,1.1,1.1),U.add(h,Z,M);const O=()=>{const p=r.value.clientWidth,y=r.value.clientHeight;h.aspect=p/y,h.updateProjectionMatrix(),E.setSize(p,y),C(E.domElement,p,y)},A=10,b=e(2288);window.addEventListener("resize",b(O,A,{trailing:!0}));function C(p,y,i,I=!1){const R=window.devicePixelRatio;p.width=y*R,p.height=i*R,p.style.width=`rem(${y})`,p.style.height=`rem(${i})`,I&&p.getContext("2d").setTransform(R,0,0,R,0,0)}return(0,s.bv)(()=>{r.value.appendChild(E.domElement),O(),r.value.addEventListener("pointerup",p=>{const y=r.value.clientWidth-(r.value.clientWidth/2+p.offsetX);let i=-Math.round(y/120);i===-0&&(i=1),u.autoRotateSpeed=i}),S()}),(p,y)=>((0,s.wg)(),(0,s.iD)("div",{ref_key:"canvas",ref:r,class:"container"},null,512))}});var D=e(3046);const f=(0,D.Z)(x,[["__scopeId","data-v-0eadcdff"]])},1115:(a,o,e)=>{"use strict";e.d(o,{Z:()=>v});var t=e(1432),s=e(2964),n=e(9806);const l={class:"home__info-card"},m=["innerHTML"],d=["src"],v=(0,t.aZ)({__name:"HomeCard",props:{card:null},setup(x){const{card:D}=x;(0,s.sj)(w=>({28846308:(0,n.SU)(f),"493b388e":(0,n.SU)(g)}));const{flexDirection:P,gridArea:f,bg:g}=D.style;function r(w){return w.replace(/\n/g,"<br />")}return(w,L)=>((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("p",{innerHTML:r(x.card.text)},null,8,m),(0,t._)("img",{src:x.card.imgSrc,alt:"card"},null,8,d)]))}})},9600:(a,o,e)=>{"use strict";e.d(o,{Z:()=>_});var t=e(808),s=e(5507),n=e(1432);const l={class:"app"},_=(0,n.aZ)({__name:"app",setup(c){return(0,n.wF)(()=>{(0,s.tv)().push("/home")}),(v,x)=>{const D=(0,n.up)("NuxtPage"),P=t.Z;return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(P,null,{default:(0,n.w5)(()=>[(0,n.Wm)(D)]),_:1})])}}})},482:(a,o,e)=>{"use strict";var t=e(8455);const s={};var n=(0,t.Pv)(s)},3211:(a,o,e)=>{"use strict";var t=e(5902)},7420:(a,o,e)=>{"use strict";e.d(o,{Z:()=>s});var t=e(1432);const s={default:(0,t.RC)(()=>e.e(153).then(e.bind(e,4153)).then(n=>n.default||n))}},4654:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t,p:()=>s});const t=[],s={}},7869:(a,o,e)=>{"use strict";e.d(o,{Sb:()=>_,k0:()=>d,qq:()=>c,vk:()=>m});const t="",s="/_nuxt/",n={},l="",m={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},d={name:"layout",mode:"out-in"},_={name:"page",mode:"out-in"},c=!1},3690:(a,o,e)=>{"use strict";e.d(o,{v2:()=>l});var t=e(4557);const n=(()=>{var c;return((c=window?.__NUXT__)==null?void 0:c.config)||{}})().app,l=()=>n.baseURL,m=()=>n.buildAssetsDir,d=(...c)=>(0,t.xn)(_(),m(),...c),_=(...c)=>{const v=n.cdnURL||n.baseURL;return c.length?(0,t.xn)(v,...c):v};globalThis.__buildAssetsURL=d,globalThis.__publicAssetsURL=_,e.p=d()},359:(a,o,e)=>{"use strict";e.d(o,{Z:()=>f});var t=e(5507);const s={},n=(0,t.fm)(g=>{for(const r in s)g.vueApp.component(r,s[r]),g.vueApp.component("Lazy"+r,s[r])});var l=e(4213),m=e(7022),d=e(8932),_=e(9687),c=e(2635),v=e(5983),x=e(5665),D=e(2537);const P=(0,t.fm)(g=>{const r=(0,v.Rd)({components:x,directives:D,theme:{defaultTheme:"dark"}});g.vueApp.use(r)}),f=[n,l.Z,m.Z,d.Z,_.Z,c.Z,P]},771:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t.Z});var t=e(4524)},9435:(a,o,e)=>{"use strict";e.d(o,{Z:()=>s});const s={...{}}},3002:(a,o,e)=>{"use strict";e.d(o,{Z:()=>y});var t=e(1432),s=e(7189),n=e(1115),l=e(1433);const m=i=>(_pushScopeId("data-v-e81b1ace"),i=i(),_popScopeId(),i),d={class:"home"},_={class:"home__preview"},c={class:"home__preview-title"},v={ref:"preview_title_h1"},D=[(0,t.Uk)(" DO YOU WANT TO GO TO SPACE? ")],P={ref:"preview_h2"},g=[(0,t.Uk)(" HERE YOU CAN SEE... ")],r={class:"home__info"},w=void 0,L={};var U=e(9572);const h={class:"news"},E=void 0,u={};function S(i,I){const R=(0,t.up)("NuxtPage");return(0,t.wg)(),(0,t.j4)(R)}var T=e(3046);const M={},Z=(0,T.Z)(M,[["render",S]]),O={},A=void 0;var b,C,p;const y=[{name:"Home",path:"/Home",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/Home.vue",children:[],meta:w,alias:((b=w)==null?void 0:b.alias)||[],component:()=>Promise.all([e.e(511),e.e(169)]).then(e.bind(e,1169)).then(i=>i.default||i)},{name:"News",path:"/News",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/News.vue",children:[],meta:E,alias:((C=E)==null?void 0:C.alias)||[],component:()=>e.e(297).then(e.bind(e,4297)).then(i=>i.default||i)},{name:"index",path:"/",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/index.vue",children:[],meta:A,alias:((p=A)==null?void 0:p.alias)||[],component:()=>e.e(227).then(e.bind(e,7227)).then(i=>i.default||i)}]}},a=>{var o=t=>a(a.s=t);a.O(0,[90],()=>o(9754));var e=a.O()}]);
