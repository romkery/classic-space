(self.webpackChunk=self.webpackChunk||[]).push([[143],{6491:(a,o,e)=>{a.exports=e.p+"img/mars.fc4a898.jpg"},4744:(a,o,e)=>{"use strict";e.d(o,{e:()=>s});var t=e(8600),n=e(9806);const s=(0,t.Q_)("Home",()=>{const d=(0,n.qj)([{imgSrc:e(6491),text:`The latest photos 
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
 straight from space.`,style:{flexDirection:"row-reverse",gridArea:"4 / 2 / 5 / 3",bg:"hsla(220, 80%, 12%, .7)"}}]),u=(0,n.qj)({preview_title_h1:{state:!1,animation:"slideInLeft"},preview_title_img:{state:!1,animation:"slideInRight"},preview_h2:{state:!1,animation:"fadeInUp"},card:{state:!1,animation:"fadeInUp"}});return{store:{cards:d,animations:u}}})},1433:(a,o,e)=>{"use strict";e.d(o,{Z:()=>w});var t=e(9806),n=e(1432),s=e(7348);const d=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,u=`uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.5 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 3.0);

    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV, 0.5).xyz, 1.0);
}
`,_=`varying vec3 vertexNormal;

void main() {
    float intensity = pow(.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 1.5);
    gl_FragColor = vec4(0.2, 0.5, 0.9, 1.8) * intensity;
}
`,m=`varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix *normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;var i=e(9822),p=e(5824);const v=(0,n.aZ)({__name:"Earth",setup(h){const r=(0,t.iH)(null);return(0,n.bv)(()=>{const f=new i.E,D=new s.xsS,E=new s.cPb(75,1,.1,1e3),x=new s.CP7({alpha:!0,antialias:!0});x.setPixelRatio(window.devicePixelRatio);const c=new p.z(E,x.domElement);c.maxPolarAngle=1.57,c.minPolarAngle=1,c.enableZoom=!1,c.autoRotate=!0,c.autoRotateSpeed=4,c.enableDamping=!0,c.dampingFactor=.01,c.addEventListener("change",()=>{requestAnimationFrame(()=>{c.autoRotateSpeed<4&&(c.autoRotateSpeed+=.1),c.autoRotateSpeed>4&&(c.autoRotateSpeed-=.1)})});function U(){requestAnimationFrame(U),c.update(),x.render(D,E)}const S=new s.dpR().load("marble.jpg"),L=new s.jyz({vertexShader:d,fragmentShader:u,uniforms:{globeTexture:{value:S}}}),T=new s.Kj0(new s.xo$(1,50,50),L),A=new s.Kj0(new s.xo$(1,50,50),new s.jyz({vertexShader:m,fragmentShader:_,blending:s.WMw,side:s._Li}));A.scale.set(1.1,1.1,1.1),E.position.z=2,D.add(E,A,T),r.value.appendChild(x.domElement),x.setSize(r.value.clientWidth,r.value.clientHeight),r.value.addEventListener("pointerup",b=>{const P=r.value.clientWidth-(r.value.clientWidth/2+b.offsetX);let R=-Math.round(P/120);R===-0&&(R=1),c.autoRotateSpeed=R}),U()}),(f,D)=>((0,n.wg)(),(0,n.iD)("div",{ref_key:"canvas",ref:r,class:"container"},null,512))}});var g=e(3046);const w=(0,g.Z)(v,[["__scopeId","data-v-103a9a5a"]])},1115:(a,o,e)=>{"use strict";e.d(o,{Z:()=>p});var t=e(1432),n=e(2964),s=e(9806);const d={class:"home__info-card"},u=["innerHTML"],_=["src"],p=(0,t.aZ)({__name:"HomeCard",props:{card:null},setup(v){const{card:g}=v;(0,n.sj)(f=>({"7057ce98":(0,s.SU)(w),"6e2304ac":(0,s.SU)(h)}));const{flexDirection:y,gridArea:w,bg:h}=g.style;function r(f){return f.replace(/\n/g,"<br />")}return(f,D)=>((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("p",{innerHTML:r(v.card.text)},null,8,u),(0,t._)("img",{src:v.card.imgSrc,alt:"card"},null,8,_)]))}})},9600:(a,o,e)=>{"use strict";e.d(o,{Z:()=>m});var t=e(808),n=e(1432),s=e(5507);const d={class:"app"},m=(0,n.aZ)({__name:"app",setup(i){return(0,n.bv)(()=>{(0,s.tv)().push("/home")}),(p,v)=>{const g=(0,n.up)("NuxtPage"),y=t.Z;return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(y,null,{default:(0,n.w5)(()=>[(0,n.Wm)(g)]),_:1})])}}})},482:(a,o,e)=>{"use strict";var t=e(8455);const n={};var s=(0,t.Pv)(n)},3211:(a,o,e)=>{"use strict";var t=e(5902)},7420:(a,o,e)=>{"use strict";e.d(o,{Z:()=>n});var t=e(1432);const n={default:(0,t.RC)(()=>e.e(153).then(e.bind(e,4153)).then(s=>s.default||s))}},4654:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t,p:()=>n});const t=[],n={}},7869:(a,o,e)=>{"use strict";e.d(o,{Sb:()=>m,k0:()=>_,qq:()=>i,vk:()=>u});const t="",n="/_nuxt/",s={},d="",u={meta:[],link:[],style:[],script:[],noscript:[],charset:"utf-8",viewport:"width=device-width, initial-scale=1"},_={name:"layout",mode:"out-in"},m={name:"page",mode:"out-in"},i=!1},3690:(a,o,e)=>{"use strict";e.d(o,{v2:()=>d});var t=e(4557);const s=(()=>{var i;return((i=window?.__NUXT__)==null?void 0:i.config)||{}})().app,d=()=>s.baseURL,u=()=>s.buildAssetsDir,_=(...i)=>(0,t.xn)(m(),u(),...i),m=(...i)=>{const p=s.cdnURL||s.baseURL;return i.length?(0,t.xn)(p,...i):p};globalThis.__buildAssetsURL=_,globalThis.__publicAssetsURL=m,e.p=_()},359:(a,o,e)=>{"use strict";e.d(o,{Z:()=>w});var t=e(5507);const n={},s=(0,t.fm)(h=>{for(const r in n)h.vueApp.component(r,n[r]),h.vueApp.component("Lazy"+r,n[r])});var d=e(4213),u=e(7022),_=e(8932),m=e(9687),i=e(2635),p=e(5983),v=e(5665),g=e(2537);const y=(0,t.fm)(h=>{const r=(0,p.Rd)({components:v,directives:g,theme:{defaultTheme:"dark"}});h.vueApp.use(r)}),w=[s,d.Z,u.Z,_.Z,m.Z,i.Z,y]},771:(a,o,e)=>{"use strict";e.d(o,{Z:()=>t.Z});var t=e(4524)},9435:(a,o,e)=>{"use strict";e.d(o,{Z:()=>n});const n={...{}}},3279:(a,o,e)=>{"use strict";e.d(o,{Z:()=>Z});var t=e(1432),n=e(4744),s=e(1115),d=e(1433);const u=l=>(_pushScopeId("data-v-225511e7"),l=l(),_popScopeId(),l),_={class:"home"},m={class:"home__preview"},i={class:"home__preview-title"},p={ref:"preview_title_h1"},g=[(0,t.Uk)("DO YOU WANT TO GO TO SPACE?")],y={ref:"preview_h2"},h=[(0,t.Uk)(" HERE YOU CAN SEE... ")],r={class:"home__info"},f=void 0,D={},E={class:"home"},x=(0,t._)("p",null,"do you want to go to space?",-1);function c(l,H){const C=(0,t.up)("v-slide-y-transition");return(0,t.wg)(),(0,t.iD)("div",E,[(0,t.Wm)(C,{mode:"in","hide-on-leave":""},{default:(0,t.w5)(()=>[x]),_:1})])}var U=e(3046);const S={},L=(0,U.Z)(S,[["render",c]]),T={},A=void 0;function b(l,H){const C=(0,t.up)("NuxtPage");return(0,t.wg)(),(0,t.j4)(C)}const P={},R=(0,U.Z)(P,[["render",b]]),I={},O=void 0;var W,M,N;const Z=[{name:"Home",path:"/Home",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/Home.vue",children:[],meta:f,alias:((W=f)==null?void 0:W.alias)||[],component:()=>Promise.all([e.e(511),e.e(169)]).then(e.bind(e,1169)).then(l=>l.default||l)},{name:"News",path:"/News",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/News.vue",children:[],meta:A,alias:((M=A)==null?void 0:M.alias)||[],component:()=>e.e(346).then(e.bind(e,2346)).then(l=>l.default||l)},{name:"index",path:"/",file:"/Users/romkery/Documents/WebStormWeb/classic-space/pages/index.vue",children:[],meta:O,alias:((N=O)==null?void 0:N.alias)||[],component:()=>e.e(227).then(e.bind(e,7227)).then(l=>l.default||l)}]}},a=>{var o=t=>a(a.s=t);a.O(0,[612],()=>o(9754));var e=a.O()}]);
