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
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"4 / 2 / 5 / 3",bg:"hsla(220, 80%, 12%, .7)"}}]),p=(0,s.qj)({preview_title_h1:{state:!1,animation:"slideInLeft"},preview_title_img:{state:!1,animation:"slideInRight"},preview_h2:{state:!1,animation:"fadeInUp"},card:{state:!1,animation:"fadeInUp"}});return{store:{cards:l,animations:p}}})},9572:(a,o,e)=>{"use strict";e.d(o,{Z:()=>w});var t=e(1432),s=e(8187),n=e(5507),l=e(9806);const p=x=>(_pushScopeId("data-v-a7a38754"),x=x(),_popScopeId(),x),u={class:"container"},d={class:"daily"},c=["src"],_=(0,t.aZ)({__name:"DailyPicture",async setup(x){let v,i;const E=(0,l.qj)(([v,i]=(0,t.mv)(()=>(0,n.ib)("https://api.nasa.gov/planetary/apod?count=3&api_key=afnJ1XFijXcMMDHkRZY16keAbGZNgRY2Va0b8NCu","$xE7UJV5vLN").data),v=await v,i(),v));return(C,R)=>((0,t.wg)(),(0,t.iD)("div",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(E,h=>((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("img",{src:h.url,alt:"daily"},null,8,c),(0,t._)("span",null,(0,s.zw)(h.date),1),(0,t._)("span",null,(0,s.zw)(h.copyright),1),(0,t._)("h1",null,(0,s.zw)(h.title),1),(0,t._)("h3",null,(0,s.zw)(h.explanation),1)]))),256))]))}});var f=e(3046);const w=(0,f.Z)(_,[["__scopeId","data-v-a7a38754"]])},1433:(a,o,e)=>{"use strict";e.d(o,{Z:()=>x});var t=e(9806),s=e(1432),n=e(7348);const l=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,p=`uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.5 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 3.0);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV, 0.5).xyz, 1.0);
}
`,u=`varying vec3 vertexNormal;

void main() {
    float intensity = pow(.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 1.5);
    gl_FragColor = vec4(0.2, 0.5, 0.9, 1.8) * intensity;
}
`,d=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix *normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var c=e(9822),_=e(5824);const f=(0,s.aZ)({__name:"Earth",setup(v){const i=(0,t.iH)(null),E=new n.dpR().load("marble.jpg"),C=new c.E,R=new n.xsS,h=new n.cPb(75,1,.1,1e3),A=new n.CP7({alpha:!0,antialias:!0});h.position.z=2,A.setPixelRatio(window.devicePixelRatio);const m=new _.z(h,A.domElement);m.maxPolarAngle=1.57,m.minPolarAngle=1,m.enableZoom=!1,m.autoRotate=!0,m.autoRotateSpeed=4,m.enableDamping=!0,m.dampingFactor=.01,m.addEventListener("change",()=>{requestAnimationFrame(()=>{m.autoRotateSpeed<4&&(m.autoRotateSpeed+=.1),m.autoRotateSpeed>4&&(m.autoRotateSpeed-=.1)})});function S(){requestAnimationFrame(S),m.update(),A.render(R,h)}const M=new n.jyz({vertexShader:l,fragmentShader:p,uniforms:{globeTexture:{value:E}}}),O=new n.Kj0(new n.xo$(1,100,100),M),L=new n.Kj0(new n.xo$(1,100,100),new n.jyz({vertexShader:d,fragmentShader:u,blending:n.WMw,side:n._Li}));L.scale.set(1.1,1.1,1.1),R.add(h,L,O);const U=()=>{const g=i.value.clientWidth,y=i.value.clientHeight;h.aspect=g/y,h.updateProjectionMatrix(),A.setSize(g,y),W(A.domElement,g,y)},I=10,T=e(2288);window.addEventListener("resize",T(U,I,{trailing:!0}));function W(g,y,P,Z=!1){const b=window.devicePixelRatio;g.width=y*b,g.height=P*b,g.style.width=`rem(${y})`,g.style.height=`rem(${P})`,Z&&g.getContext("2d").setTransform(b,0,0,b,0,0)}return(0,s.bv)(()=>{i.value.appendChild(A.domElement),U(),i.value.addEventListener("pointerup",g=>{const y=i.value.clientWidth-(i.value.clientWidth/2+g.offsetX);let P=-Math.round(y/120);P===-0&&(P=1),m.autoRotateSpeed=P}),S()}),(g,y)=>((0,s.wg)(),(0,s.iD)("div",{ref_key:"canvas",ref:i,class:"container"},null,512))}});var D=e(3046);const x=(0,D.Z)(f,[["__scopeId","data-v-0eadcdff"]])},1115:(a,o,e)=>{"use strict";e.d(o,{Z:()=>_});var t=e(1432),s=e(2964),n=e(9806);const l={class:"home__info-card"},p=["innerHTML"],u=["src"],_=(0,t.aZ)({__name:"HomeCard",props:{card:null},setup(f){const{card:D}=f;(0,s.sj)(E=>({28846308:(0,n.SU)(x),"493b388e":(0,n.SU)(v)}));const{flexDirection:w,gridArea:x,bg:v}=D.style;function i(E){return E.replace(/\n/g,"<br />")}return(E,C)=>((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("p",{innerHTML:i(f.card.text)},null,8,p),(0,t._)("img",{src:f.card.imgSrc,alt:"card"},null,8,u)]))}})},9600:(a,o,e)=>{"use strict";e.d(o,{Z:()=>d});var t=e(808),s=e(5507),n=e(1432);const l={class:"app"},d=(0,n.aZ)({__name:"app",setup(c){return(0,n.wF)(()=>{(0,s.tv)().push("/home")}),(_,f)=>{const D=(0,n.up)("NuxtPage"),w=t.Z;return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(w,null,{default:(0,n.w5)(()=>[(0,n.Wm)(D)]),_:1})])}}})},482:(a,o,e)=>{"use strict";var t=e(8455);const s={};var n=(0,t.Pv)(s)},3211:(a,o,e)=>{"use strict";var t=e(5902)},7420:(a,o,e)=>{"use strict";e.d(o,{Z:()=>s});var t=e(1432);const s={default:(0,t.RC)(()=>e.e(153).then(e.bind(e,4153)).then(n=>n.default||n))}},4654:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t,p:()=>s});const t=[],s={}},7869:(a,o,e)=>{"use strict";e.d(o,{Sb:()=>d,k0:()=>u,qq:()=>c,vk:()=>p});const t="",s="/_nuxt/",n={},l="",p={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},u={name:"layout",mode:"out-in"},d={name:"page",mode:"out-in"},c=!1},3690:(a,o,e)=>{"use strict";e.d(o,{v2:()=>l});var t=e(4557);const n=(()=>{var c;return((c=window?.__NUXT__)==null?void 0:c.config)||{}})().app,l=()=>n.baseURL,p=()=>n.buildAssetsDir,u=(...c)=>(0,t.xn)(d(),p(),...c),d=(...c)=>{const _=n.cdnURL||n.baseURL;return c.length?(0,t.xn)(_,...c):_};globalThis.__buildAssetsURL=u,globalThis.__publicAssetsURL=d,e.p=u()},359:(a,o,e)=>{"use strict";e.d(o,{Z:()=>x});var t=e(5507);const s={},n=(0,t.fm)(v=>{for(const i in s)v.vueApp.component(i,s[i]),v.vueApp.component("Lazy"+i,s[i])});var l=e(4213),p=e(7022),u=e(8932),d=e(9687),c=e(2635),_=e(5983),f=e(5665),D=e(2537);const w=(0,t.fm)(v=>{const i=(0,_.Rd)({components:f,directives:D,theme:{defaultTheme:"dark"}});v.vueApp.use(i)}),x=[n,l.Z,p.Z,u.Z,d.Z,c.Z,w]},771:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t.Z});var t=e(4524)},9435:(a,o,e)=>{"use strict";e.d(o,{Z:()=>s});const s={...{}}},9592:(a,o,e)=>{"use strict";e.d(o,{Z:()=>V});var t=e(1432);function s(r,F){return(0,t.wg)(),(0,t.iD)("h1",null,"About")}var n=e(3046);const l={},p=(0,n.Z)(l,[["render",s]]),u={},d=void 0;var c=e(7189),_=e(1115),f=e(1433);const D=r=>(_pushScopeId("data-v-e81b1ace"),r=r(),_popScopeId(),r),w={class:"home"},x={class:"home__preview"},v={class:"home__preview-title"},i={ref:"preview_title_h1"},C=[(0,t.Uk)(" DO YOU WANT TO GO TO SPACE? ")],R={ref:"preview_h2"},A=[(0,t.Uk)(" HERE YOU CAN SEE... ")],m={class:"home__info"},S=void 0,M={};var O=e(9572);const L={class:"news"},U=void 0,I={};function T(r,F){return(0,t.wg)(),(0,t.iD)("h1",null,"Planet")}const W={},g=(0,n.Z)(W,[["render",T]]),y={},P=void 0;function Z(r,F){const X=(0,t.up)("NuxtPage");return(0,t.wg)(),(0,t.j4)(X)}const b={},Y=(0,n.Z)(b,[["render",Z]]),$={},N=void 0;var H,z,j,B,K;const V=[{name:"About",path:"/About",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/About.vue",children:[],meta:d,alias:((H=d)==null?void 0:H.alias)||[],component:()=>e.e(178).then(e.bind(e,178)).then(r=>r.default||r)},{name:"Home",path:"/Home",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/Home.vue",children:[],meta:S,alias:((z=S)==null?void 0:z.alias)||[],component:()=>Promise.all([e.e(511),e.e(169)]).then(e.bind(e,1169)).then(r=>r.default||r)},{name:"News",path:"/News",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/News.vue",children:[],meta:U,alias:((j=U)==null?void 0:j.alias)||[],component:()=>e.e(297).then(e.bind(e,4297)).then(r=>r.default||r)},{name:"Planet",path:"/Planet",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/Planet.vue",children:[],meta:P,alias:((B=P)==null?void 0:B.alias)||[],component:()=>e.e(176).then(e.bind(e,4176)).then(r=>r.default||r)},{name:"index",path:"/",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/index.vue",children:[],meta:N,alias:((K=N)==null?void 0:K.alias)||[],component:()=>e.e(227).then(e.bind(e,7227)).then(r=>r.default||r)}]}},a=>{var o=t=>a(a.s=t);a.O(0,[90],()=>o(9754));var e=a.O()}]);
