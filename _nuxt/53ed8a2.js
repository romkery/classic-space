(self.webpackChunk=self.webpackChunk||[]).push([[143],{6491:(a,o,e)=>{a.exports=e.p+"img/mars.fc4a898.jpg"},4744:(a,o,e)=>{"use strict";e.d(o,{e:()=>s});var t=e(8600),n=e(9806);const s=(0,t.Q_)("Home",()=>{const l=(0,n.qj)([{imgSrc:e(6491),text:`The latest photos 
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
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"4 / 2 / 5 / 3",bg:"hsla(220, 80%, 12%, .7)"}}]),d=(0,n.qj)({preview_title_h1:{state:!1,animation:"slideInLeft"},preview_title_img:{state:!1,animation:"slideInRight"},preview_h2:{state:!1,animation:"fadeInUp"},card:{state:!1,animation:"fadeInUp"}});return{store:{cards:l,animations:d}}})},1433:(a,o,e)=>{"use strict";e.d(o,{Z:()=>p});var t=e(9806),n=e(1432),s=e(7348);const l=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,d=`uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.0 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 2.0);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV, 0.5).xyz, 1.0);

}
`,u=`varying vec3 vertexNormal;

void main() {
    float intensity = pow(.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 1.5);
    gl_FragColor = vec4(0.2, 0.5, 0.9, .5) * intensity;
}
`,m=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix *normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var r=e(9822),_=e(5824),v=e(2861);const x=v.T.SphereGeometry,y=(0,n.aZ)({__name:"Earth",setup(w){const g=(0,t.iH)(null),O=new r.E,U=new s.xsS,D=new s.cPb(75,1,.1,1e3),f=new s.CP7({alpha:!0,antialias:!0});f.setPixelRatio(window.devicePixelRatio);const i=new _.z(D,f.domElement);i.enableZoom=!1,i.maxPolarAngle=1.5,i.autoRotate=!0,i.autoRotateSpeed=1,i.enableDamping=!0,i.dampingFactor=.01,i.addEventListener("change",()=>{requestAnimationFrame(()=>{i.autoRotateSpeed<1&&(i.autoRotateSpeed+=.1),i.autoRotateSpeed>1&&(i.autoRotateSpeed-=.1)})});function P(){requestAnimationFrame(P),f.render(U,D),i.update()}const W=new s.dpR().load("8k_earth_nightmap(1).jpg"),R=new s.jyz({vertexShader:l,fragmentShader:d,uniforms:{globeTexture:{value:W}}}),b=new s.Kj0(new s.xo$(1,50,50),R),A=new s.Kj0(new s.xo$(1,50,50),new s.jyz({vertexShader:m,fragmentShader:u,blending:s.WMw,side:s._Li}));return A.scale.set(1.1,1.1,1.1),D.position.z=2,U.add(D,A,b),(0,n.bv)(()=>{g.value.appendChild(f.domElement),f.setSize(g.value.clientWidth,g.value.clientHeight),g.value.addEventListener("pointerup",C=>{const L=g.value.clientWidth-(g.value.clientWidth/2+C.offsetX);let S=-Math.round(L/120);S===-0&&(S=1),i.autoRotateSpeed=S}),P()}),(C,L)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"canvas",ref:g,class:"container"},null,512))}});var E=e(3046);const p=(0,E.Z)(y,[["__scopeId","data-v-496b3766"]])},1115:(a,o,e)=>{"use strict";e.d(o,{Z:()=>_});var t=e(1432),n=e(2964),s=e(9806);const l={class:"home__info-card"},d=["innerHTML"],u=["src"],_=(0,t.aZ)({__name:"HomeCard",props:{card:null},setup(v){const{card:x}=v;(0,n.sj)(w=>({"7057ce98":(0,s.SU)(E),"6e2304ac":(0,s.SU)(h)}));const{flexDirection:y,gridArea:E,bg:h}=x.style;function p(w){return w.replace(/\n/g,"<br />")}return(w,g)=>((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("p",{innerHTML:p(v.card.text)},null,8,d),(0,t._)("img",{src:v.card.imgSrc,alt:"card"},null,8,u)]))}})},9600:(a,o,e)=>{"use strict";e.d(o,{Z:()=>m});var t=e(808),n=e(1432),s=e(5507);const l={class:"app"},m=(0,n.aZ)({__name:"app",setup(r){return(0,n.bv)(()=>{(0,s.tv)().push("/home")}),(_,v)=>{const x=(0,n.up)("NuxtPage"),y=t.Z;return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(y,null,{default:(0,n.w5)(()=>[(0,n.Wm)(x)]),_:1})])}}})},482:(a,o,e)=>{"use strict";var t=e(8455);const n={};var s=(0,t.Pv)(n)},3211:(a,o,e)=>{"use strict";var t=e(5902)},7420:(a,o,e)=>{"use strict";e.d(o,{Z:()=>n});var t=e(1432);const n={default:(0,t.RC)(()=>e.e(530).then(e.bind(e,5530)).then(s=>s.default||s))}},4654:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t,p:()=>n});const t=[],n={}},7869:(a,o,e)=>{"use strict";e.d(o,{Sb:()=>m,k0:()=>u,qq:()=>r,vk:()=>d});const t="",n="/_nuxt/",s={},l="",d={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},u={name:"layout",mode:"out-in"},m={name:"page",mode:"out-in"},r=!1},3690:(a,o,e)=>{"use strict";e.d(o,{v2:()=>l});var t=e(4557);const s=(()=>{var r;return((r=window?.__NUXT__)==null?void 0:r.config)||{}})().app,l=()=>s.baseURL,d=()=>s.buildAssetsDir,u=(...r)=>(0,t.xn)(m(),d(),...r),m=(...r)=>{const _=s.cdnURL||s.baseURL;return r.length?(0,t.xn)(_,...r):_};globalThis.__buildAssetsURL=u,globalThis.__publicAssetsURL=m,e.p=u()},359:(a,o,e)=>{"use strict";e.d(o,{Z:()=>E});var t=e(5507);const n={},s=(0,t.fm)(h=>{for(const p in n)h.vueApp.component(p,n[p]),h.vueApp.component("Lazy"+p,n[p])});var l=e(4213),d=e(7022),u=e(8932),m=e(9687),r=e(2635),_=e(5983),v=e(5665),x=e(2537);const y=(0,t.fm)(h=>{const p=(0,_.Rd)({components:v,directives:x,theme:{defaultTheme:"dark"}});h.vueApp.use(p)}),E=[s,l.Z,d.Z,u.Z,m.Z,r.Z,y]},771:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t.Z});var t=e(4524)},9435:(a,o,e)=>{"use strict";e.d(o,{Z:()=>n});const n={...{}}},3279:(a,o,e)=>{"use strict";e.d(o,{Z:()=>H});var t=e(1432),n=e(4744),s=e(1115),l=e(1433);const d=c=>(_pushScopeId("data-v-c0446cac"),c=c(),_popScopeId(),c),u={class:"home"},m={class:"home__preview"},r={class:"home__preview-title"},_={ref:"preview_title_h1"},x=[(0,t.Uk)("DO YOU WANT TO GO TO SPACE?")],y={ref:"preview_h2"},h=[(0,t.Uk)(" HERE YOU CAN SEE... ")],p={class:"home__info"},w=void 0,g={},O={class:"home"},U=(0,t._)("p",null,"do you want to go to space?",-1);function D(c,I){const T=(0,t.up)("v-slide-y-transition");return(0,t.wg)(),(0,t.iD)("div",O,[(0,t.Wm)(T,{mode:"in","hide-on-leave":""},{default:(0,t.w5)(()=>[U]),_:1})])}var f=e(3046);const i={},P=(0,f.Z)(i,[["render",D]]),W={},R=void 0;function b(c,I){const T=(0,t.up)("NuxtPage");return(0,t.wg)(),(0,t.j4)(T)}const A={},C=(0,f.Z)(A,[["render",b]]),L={},S=void 0;var M,N,Z;const H=[{name:"Home",path:"/Home",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/Home.vue",children:[],meta:w,alias:((M=w)==null?void 0:M.alias)||[],component:()=>Promise.all([e.e(511),e.e(169)]).then(e.bind(e,1169)).then(c=>c.default||c)},{name:"News",path:"/News",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/News.vue",children:[],meta:R,alias:((N=R)==null?void 0:N.alias)||[],component:()=>e.e(346).then(e.bind(e,2346)).then(c=>c.default||c)},{name:"index",path:"/",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/index.vue",children:[],meta:S,alias:((Z=S)==null?void 0:Z.alias)||[],component:()=>e.e(227).then(e.bind(e,7227)).then(c=>c.default||c)}]}},a=>{var o=t=>a(a.s=t);a.O(0,[547],()=>o(9754));var e=a.O()}]);
