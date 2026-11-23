"use strict";(()=>{var yT=Object.create;var fm=Object.defineProperty;var _T=Object.getOwnPropertyDescriptor;var vT=Object.getOwnPropertyNames;var MT=Object.getPrototypeOf,ST=Object.prototype.hasOwnProperty;var lv=s=>{throw TypeError(s)};var u=(s,e)=>fm(s,"name",{value:e,configurable:!0});var wT=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ET=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of vT(e))!ST.call(s,i)&&i!==t&&fm(s,i,{get:()=>e[i],enumerable:!(n=_T(e,i))||n.enumerable});return s};var TT=(s,e,t)=>(t=s!=null?yT(MT(s)):{},ET(e||!s||!s.__esModule?fm(t,"default",{value:s,enumerable:!0}):t,s));var pm=(s,e,t)=>e.has(s)||lv("Cannot "+t);var p=(s,e,t)=>(pm(s,e,"read from private field"),t?t.call(s):e.get(s)),G=(s,e,t)=>e.has(s)?lv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),k=(s,e,t,n)=>(pm(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),R=(s,e,t)=>(pm(s,e,"access private method"),t);var Fi=(s,e,t,n)=>({set _(i){k(s,e,i,t)},get _(){return p(s,e,n)}});var uv=wT(Mo=>{"use strict";var ns,Er=Mo&&Mo.__classPrivateFieldGet||function(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)};Object.defineProperty(Mo,"__esModule",{value:!0}),Mo.EventEmitter=void 0;var mm=class mm{constructor(){ns.set(this,{})}on(e,t){e in Er(this,ns,"f")||(Er(this,ns,"f")[e]=[]),Er(this,ns,"f")[e].push(t)}once(e,t){let n=u((...i)=>{t(...i),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Er(this,ns,"f")))return;let n=Er(this,ns,"f")[e].indexOf(t);n!==-1&&Er(this,ns,"f")[e].splice(n,1)}emit(e,...t){e in Er(this,ns,"f")&&Er(this,ns,"f")[e].forEach((n=>n(...t)))}};u(mm,"i");var kh=mm;Mo.EventEmitter=kh,ns=new WeakMap,Mo.default=kh});var cv="civMap3D";var hv=TT(uv());var is,ss,La,xm=class xm extends hv.EventEmitter{constructor(t,n){super();G(this,is);G(this,ss);G(this,La);k(this,ss,t),k(this,La,t.lockVerticalEdges),k(this,is,n)}center(){return p(this,is).centre()}isVisible(t,n,i=0){return p(this,is).visible(t,n,i)}lockVerticalEdges(){return p(this,La)}nativeTileSize(){return p(this,ss).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,ss);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,ss).playerId}render(){p(this,is).changed()}scale(){return p(this,ss).art.scale()}setCenter(t,n){p(this,is).centreOn(t,n)}setLockVerticalEdges(t){k(this,La,t),p(this,is).changed()}setZoom(){p(this,is).changed()}transport(){return p(this,ss).transport}zoom(){return p(this,ss).art.zoom()}};is=new WeakMap,ss=new WeakMap,La=new WeakMap,u(xm,"MapPortal3D");var gm=xm,dv=gm;var AT=u((s,e)=>{let[t,n]=s.centre(0,0);return Object.fromEntries(e.directions().map(i=>{let[r,o]=e.offset(i,0,0),[a,l]=s.centre(r,o);return[i,[a-t,l-n]]}))},"groundDirections"),fv=AT;var sM=0,Qm=1,rM=2;var hu=1,af=2,gl=3,vi=0,Dn=1,tn=2,zo=0,xl=1,e0=2,t0=3,n0=4,oM=5;var Go=100,aM=101,lM=102,cM=103,uM=104,hM=200,dM=201,fM=202,pM=203,i0=204,s0=205,mM=206,gM=207,xM=208,bM=209,yM=210,_M=211,vM=212,MM=213,SM=214,gd=0,xd=1,bd=2,el=3,yd=4,_d=5,vd=6,Md=7,r0=0,wM=1,EM=2,ds=0,o0=1,a0=2,l0=3,du=4,c0=5,u0=6,h0=7,Hm="attached",TM="detached",d0=300,Vo=301,bl=302,lf=303,cf=304,Gn=1e3,zn=1001,tl=1002,Wt=1003,uf=1004;var Ho=1005;var zt=1006,yl=1007;var vn=1008;var Mn=1009,f0=1010,p0=1011,_l=1012,hf=1013,Vi=1014,ni=1015,ii=1016,df=1017,ff=1018,Wo=1020,m0=35902,g0=35899,x0=1021,b0=1022,Xn=1023,Zs=1026,or=1027,pf=1028,mf=1029,fs=1030,gf=1031;var xf=1033,fu=33776,pu=33777,mu=33778,gu=33779,bf=35840,yf=35841,_f=35842,vf=35843,Mf=36196,Sf=37492,wf=37496,Ef=37488,Tf=37489,xu=37490,Af=37491,Rf=37808,Cf=37809,Pf=37810,If=37811,Lf=37812,Nf=37813,Df=37814,Of=37815,Uf=37816,Ff=37817,Bf=37818,kf=37819,zf=37820,Gf=37821,Vf=36492,Hf=36494,Wf=36495,Xf=36283,qf=36284,bu=36285,Yf=36286,AM=2200,$f=2201,RM=2202,Po=2300,Io=2301,pd=2302,Wm=2303,Ao=2400,Ro=2401,Bc=2402,Kf=2500,CM=2501,y0=0,yu=1,vl=2,PM=3200;var Zf=0,IM=1,Hi="",Nt="srgb",Pn="srgb-linear",kc="linear",Et="srgb";var md=7680;var LM=519,NM=512,DM=513,OM=514,_0=515,UM=516,FM=517,v0=518,M0=519,S0=35044;var w0="300 es",yi=2e3,nl=2001;function RT(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}u(RT,"arrayNeedsUint32");function CT(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}u(CT,"isTypedArray");function il(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}u(il,"createElementNS");function BM(){let s=il("canvas");return s.style.display="block",s}u(BM,"createCanvasElement");var pv={},sl=null;function zc(...s){let e="THREE."+s.shift();sl?sl("log",e,...s):console.log(e,...s)}u(zc,"log");function kM(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}u(kM,"enhanceLogMessage");function Xe(...s){s=kM(s);let e="THREE."+s.shift();if(sl)sl("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}u(Xe,"warn");function Je(...s){s=kM(s);let e="THREE."+s.shift();if(sl)sl("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}u(Je,"error");function Co(...s){let e=s.join(" ");e in pv||(pv[e]=!0,Xe(...s))}u(Co,"warnOnce");function zM(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}u(r,"probe"),setTimeout(r,t)})}u(zM,"probeAsync");var GM={[gd]:gd,[bd]:vd,[yd]:yd,[el]:_d,[xd]:xd,[vd]:bd,[Md]:Md,[_d]:el},N0=class N0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};u(N0,"EventDispatcher");var Gi=N0,yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mv=1234567,Oc=Math.PI/180,Lo=180/Math.PI;function ps(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}u(ps,"generateUUID");function gt(s,e,t){return Math.max(e,Math.min(t,s))}u(gt,"clamp");function E0(s,e){return(s%e+e)%e}u(E0,"euclideanModulo");function PT(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}u(PT,"mapLinear");function IT(s,e,t){return s!==e?(t-s)/(e-s):0}u(IT,"inverseLerp");function Uc(s,e,t){return(1-t)*s+t*e}u(Uc,"lerp");function LT(s,e,t,n){return Uc(s,e,1-Math.exp(-t*n))}u(LT,"damp");function NT(s,e=1){return e-Math.abs(E0(s,e*2)-e)}u(NT,"pingpong");function DT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}u(DT,"smoothstep");function OT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}u(OT,"smootherstep");function UT(s,e){return s+Math.floor(Math.random()*(e-s+1))}u(UT,"randInt");function FT(s,e){return s+Math.random()*(e-s)}u(FT,"randFloat");function BT(s){return s*(.5-Math.random())}u(BT,"randFloatSpread");function kT(s){s!==void 0&&(mv=s);let e=mv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(kT,"seededRandom");function zT(s){return s*Oc}u(zT,"degToRad");function GT(s){return s*Lo}u(GT,"radToDeg");function VT(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}u(VT,"isPowerOfTwo");function HT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}u(HT,"ceilPowerOfTwo");function T0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}u(T0,"floorPowerOfTwo");function WT(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(WT,"setQuaternionFromProperEuler");function Jf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}u(Jf,"getNormalizationScale");function A0(s,e){if(e.constructor===Float32Array)return s;let t=Jf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}u(A0,"denormalize");function R0(s,e){if(e.constructor===Float32Array)return s;let t=Jf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}u(R0,"normalize");var jf={DEG2RAD:Oc,RAD2DEG:Lo,generateUUID:ps,clamp:gt,euclideanModulo:E0,mapLinear:PT,inverseLerp:IT,lerp:Uc,damp:LT,pingpong:NT,smoothstep:DT,smootherstep:OT,randInt:UT,randFloat:FT,randFloatSpread:BT,seededRandom:kT,degToRad:zT,radToDeg:GT,isPowerOfTwo:VT,ceilPowerOfTwo:HT,floorPowerOfTwo:T0,setQuaternionFromProperEuler:WT,normalize:R0,denormalize:A0},Gd=class Gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(Gd,"Vector2"),Gd.prototype.isVector2=!0;var We=Gd,D0=class D0{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(f!==_||l!==d||c!==m||h!==g){let x=l*d+c*m+h*g+f*_;x<0&&(d=-d,m=-m,g=-g,_=-_,x=-x);let b=1-a;if(x<.9995){let v=Math.acos(x),S=Math.sin(v);b=Math.sin(b*v)/S,a=Math.sin(a*v)/S,l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a}else{l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-a*m,e[t+2]=c*g+h*m+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(D0,"Quaternion");var $t=D0,Vd=class Vd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bm.copy(this).projectOnVector(e),this.sub(bm)}reflect(e){return this.sub(bm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(Vd,"Vector3"),Vd.prototype.isVector3=!0;var H=Vd,bm=new H,gv=new $t,Hd=class Hd{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=i[0],x=i[3],b=i[6],v=i[1],S=i[4],M=i[7],A=i[2],E=i[5],y=i[8];return r[0]=o*_+a*v+l*A,r[3]=o*x+a*S+l*E,r[6]=o*b+a*M+l*y,r[1]=c*_+h*v+f*A,r[4]=c*x+h*S+f*E,r[7]=c*b+h*M+f*y,r[2]=d*_+m*v+g*A,r[5]=d*x+m*S+g*E,r[8]=d*b+m*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Co("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ym.makeScale(e,t)),this}rotate(e){return Co("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ym.makeRotation(-e)),this}translate(e,t){return Co("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ym.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(Hd,"Matrix3"),Hd.prototype.isMatrix3=!0;var je=Hd,ym=new je,xv=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bv=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XT(){let s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:u(function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(i.r=Ks(i.r),i.g=Ks(i.g),i.b=Ks(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(i.r=Qa(i.r),i.g=Qa(i.g),i.b=Qa(i.b))),i},"convert"),workingToColorSpace:u(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:u(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:u(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:u(function(i){return i===Hi?kc:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:u(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:u(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:u(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:u(function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:u(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:u(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:e,whitePoint:n,transfer:kc,toXYZ:xv,fromXYZ:bv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:xv,fromXYZ:bv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}u(XT,"createColorManagement");var ft=XT();function Ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}u(Ks,"SRGBToLinear");function Qa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}u(Qa,"LinearToSRGB");var Na,O0=class O0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Na===void 0&&(Na=il("canvas")),Na.width=e.width,Na.height=e.height;let i=Na.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Na}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=il("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ks(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ks(t[n]/255)*255):t[n]=Ks(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(O0,"ImageUtils");var Sd=O0,qT=0,U0=class U0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_m(i[o].image)):r.push(_m(i[o]))}else r=_m(i);n.url=r}return t||(e.images[this.uuid]=n),n}};u(U0,"TextureSource");var rl=U0;function _m(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}u(_m,"serializeImage");var YT=0,vm=new H,Ja=class Ja extends Gi{constructor(e=Ja.DEFAULT_IMAGE,t=Ja.DEFAULT_MAPPING,n=zn,i=zn,r=zt,o=vn,a=Xn,l=Mn,c=Ja.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=ps(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vm).x}get height(){return this.source.getSize(vm).y}get depth(){return this.source.getSize(vm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(Ja,"Texture");var Qt=Ja;Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=d0;Qt.DEFAULT_ANISOTROPY=1;var Wd=class Wd{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],x=l[6],b=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(m+1)/2,A=(b+1)/2,E=(h+d)/4,y=(f+_)/4,w=(g+x)/4;return S>M&&S>A?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=y/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=w/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=y/r,i=w/r),this.set(n,i,r,t),this}let v=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(Wd,"Vector4"),Wd.prototype.isVector4=!0;var At=Wd,F0=class F0 extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new rl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(F0,"RenderTarget");var wd=F0,B0=class B0 extends wd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};u(B0,"WebGLRenderTarget");var jn=B0,k0=class k0 extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(k0,"DataArrayTexture");var No=k0;var z0=class z0 extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};u(z0,"Data3DTexture");var Ed=z0;var Fc=class Fc{constructor(e,t,n,i,r,o,a,l,c,h,f,d,m,g,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,d,m,g,_,x)}set(e,t,n,i,r,o,a,l,c,h,f,d,m,g,_,x){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=o,b[9]=a,b[13]=l,b[2]=c,b[6]=h,b[10]=f,b[14]=d,b[3]=m,b[7]=g,b[11]=_,b[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Da.setFromMatrixColumn(e,0).length(),r=1/Da.setFromMatrixColumn(e,1).length(),o=1/Da.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($T,e,KT)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Tr.crossVectors(n,Zn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Tr.crossVectors(n,Zn)),Tr.normalize(),zh.crossVectors(Zn,Tr),i[0]=Tr.x,i[4]=zh.x,i[8]=Zn.x,i[1]=Tr.y,i[5]=zh.y,i[9]=Zn.y,i[2]=Tr.z,i[6]=zh.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],x=n[10],b=n[14],v=n[3],S=n[7],M=n[11],A=n[15],E=i[0],y=i[4],w=i[8],L=i[12],P=i[1],D=i[5],U=i[9],X=i[13],O=i[2],Y=i[6],Q=i[10],z=i[14],$=i[3],q=i[7],J=i[11],ee=i[15];return r[0]=o*E+a*P+l*O+c*$,r[4]=o*y+a*D+l*Y+c*q,r[8]=o*w+a*U+l*Q+c*J,r[12]=o*L+a*X+l*z+c*ee,r[1]=h*E+f*P+d*O+m*$,r[5]=h*y+f*D+d*Y+m*q,r[9]=h*w+f*U+d*Q+m*J,r[13]=h*L+f*X+d*z+m*ee,r[2]=g*E+_*P+x*O+b*$,r[6]=g*y+_*D+x*Y+b*q,r[10]=g*w+_*U+x*Q+b*J,r[14]=g*L+_*X+x*z+b*ee,r[3]=v*E+S*P+M*O+A*$,r[7]=v*y+S*D+M*Y+A*q,r[11]=v*w+S*U+M*Q+A*J,r[15]=v*L+S*X+M*z+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],x=e[11],b=e[15],v=l*m-c*d,S=a*m-c*f,M=a*d-l*f,A=o*m-c*h,E=o*d-l*h,y=o*f-a*h;return t*(_*v-x*S+b*M)-n*(g*v-x*A+b*E)+i*(g*S-_*A+b*y)-r*(g*M-_*E+x*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],x=e[14],b=e[15],v=t*a-n*o,S=t*l-i*o,M=t*c-r*o,A=n*l-i*a,E=n*c-r*a,y=i*c-r*l,w=h*_-f*g,L=h*x-d*g,P=h*b-m*g,D=f*x-d*_,U=f*b-m*_,X=d*b-m*x,O=v*X-S*U+M*D+A*P-E*L+y*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/O;return e[0]=(a*X-l*U+c*D)*Y,e[1]=(i*U-n*X-r*D)*Y,e[2]=(_*y-x*E+b*A)*Y,e[3]=(d*E-f*y-m*A)*Y,e[4]=(l*P-o*X-c*L)*Y,e[5]=(t*X-i*P+r*L)*Y,e[6]=(x*M-g*y-b*S)*Y,e[7]=(h*y-d*M+m*S)*Y,e[8]=(o*U-a*P+c*w)*Y,e[9]=(n*P-t*U-r*w)*Y,e[10]=(g*E-_*M+b*v)*Y,e[11]=(f*M-h*E-m*v)*Y,e[12]=(a*L-o*D-l*w)*Y,e[13]=(t*D-n*L+i*w)*Y,e[14]=(_*S-g*A-x*v)*Y,e[15]=(h*A-f*S+d*v)*Y,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,m=r*h,g=r*f,_=o*h,x=o*f,b=a*f,v=l*c,S=l*h,M=l*f,A=n.x,E=n.y,y=n.z;return i[0]=(1-(_+b))*A,i[1]=(m+M)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+b))*E,i[6]=(x+v)*E,i[7]=0,i[8]=(g+S)*y,i[9]=(x-v)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Da.set(i[0],i[1],i[2]).length(),a=Da.set(i[4],i[5],i[6]).length(),l=Da.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Bi.copy(this);let c=1/o,h=1/a,f=1/l;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=f,Bi.elements[9]*=f,Bi.elements[10]*=f,t.setFromRotationMatrix(Bi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=yi,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===yi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===nl)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=yi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===yi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===nl)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};u(Fc,"Matrix4"),Fc.prototype.isMatrix4=!0;var Ze=Fc,Da=new H,Bi=new Ze,$T=new H(0,0,0),KT=new H(1,1,1),Tr=new H,zh=new H,Zn=new H,yv=new Ze,_v=new $t,Xd=class Xd{constructor(e=0,t=0,n=0,i=Xd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(Xd,"Euler");var Qn=Xd;Qn.DEFAULT_ORDER="XYZ";var G0=class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(G0,"Layers");var ol=G0,ZT=0,vv=new H,Oa=new $t,Gs=new Ze,Gh=new H,Sc=new H,JT=new H,jT=new $t,Mv=new H(1,0,0),Sv=new H(0,1,0),wv=new H(0,0,1),Ev={type:"added"},QT={type:"removed"},Ua={type:"childadded",child:null},Mm={type:"childremoved",child:null},ja=class ja extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ja.DEFAULT_UP.clone();let e=new H,t=new Qn,n=new $t,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}u(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new je}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=ja.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ja.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oa.setFromAxisAngle(e,t),this.quaternion.multiply(Oa),this}rotateOnWorldAxis(e,t){return Oa.setFromAxisAngle(e,t),this.quaternion.premultiply(Oa),this}rotateX(e){return this.rotateOnAxis(Mv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,t){return vv.copy(e).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gh.copy(e):Gh.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gs.lookAt(Sc,Gh,this.up):Gs.lookAt(Gh,Sc,this.up),this.quaternion.setFromRotationMatrix(Gs),i&&(Gs.extractRotation(i.matrixWorld),Oa.setFromRotationMatrix(Gs),this.quaternion.premultiply(Oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ev),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QT),Mm.child=e,this.dispatchEvent(Mm),Mm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ev),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,e,JT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,jT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};u(ja,"Object3D");var Ft=ja;Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var V0=class V0 extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(V0,"Group");var Ht=V0,eA={type:"move"},H0=class H0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n),b=this._getHandJoint(c,_);x!==null&&(b.matrix.fromArray(x.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=x.radius),b.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};u(H0,"WebXRController");var al=H0,VM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Vh={h:0,s:0,l:0};function Sm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}u(Sm,"hue2rgb");var W0=class W0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=E0(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sm(o,r,e+1/3),this.g=Sm(o,r,e),this.b=Sm(o,r,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=VM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ft.workingToColorSpace(_n.copy(this),e),Math.round(gt(_n.r*255,0,255))*65536+Math.round(gt(_n.g*255,0,255))*256+Math.round(gt(_n.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Nt){ft.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Vh);let n=Uc(Ar.h,Vh.h,t),i=Uc(Ar.s,Vh.s,t),r=Uc(Ar.l,Vh.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(W0,"Color");var Pe=W0,_n=new Pe;Pe.NAMES=VM;var qd=class qd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new qd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(qd,"Fog");var Gc=qd,X0=class X0 extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(X0,"Scene");var Vc=X0,ki=new H,Vs=new H,wm=new H,Hs=new H,Fa=new H,Ba=new H,Tv=new H,Em=new H,Tm=new H,Am=new H,Rm=new At,Cm=new At,Pm=new At,Lr=class Lr{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ki.subVectors(e,t),i.cross(ki);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ki.subVectors(i,t),Vs.subVectors(n,t),wm.subVectors(e,t);let o=ki.dot(ki),a=ki.dot(Vs),l=ki.dot(wm),c=Vs.dot(Vs),h=Vs.dot(wm),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hs)===null?!1:Hs.x>=0&&Hs.y>=0&&Hs.x+Hs.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Hs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hs.x),l.addScaledVector(o,Hs.y),l.addScaledVector(a,Hs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Rm.setScalar(0),Cm.setScalar(0),Pm.setScalar(0),Rm.fromBufferAttribute(e,t),Cm.fromBufferAttribute(e,n),Pm.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Rm,r.x),o.addScaledVector(Cm,r.y),o.addScaledVector(Pm,r.z),o}static isFrontFacing(e,t,n,i){return ki.subVectors(n,t),Vs.subVectors(e,t),ki.cross(Vs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Vs.subVectors(this.a,this.b),ki.cross(Vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Lr.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Fa.subVectors(i,n),Ba.subVectors(r,n),Em.subVectors(e,n);let l=Fa.dot(Em),c=Ba.dot(Em);if(l<=0&&c<=0)return t.copy(n);Tm.subVectors(e,i);let h=Fa.dot(Tm),f=Ba.dot(Tm);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Fa,o);Am.subVectors(e,r);let m=Fa.dot(Am),g=Ba.dot(Am);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ba,a);let x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return Tv.subVectors(r,i),a=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(Tv,a);let b=1/(x+_+d);return o=_*b,a=d*b,t.copy(n).addScaledVector(Fa,o).addScaledVector(Ba,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Lr,"Triangle");var Ys=Lr,q0=class q0{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(r,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hh.copy(n.boundingBox)),Hh.applyMatrix4(e.matrixWorld),this.union(Hh)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wc),Wh.subVectors(this.max,wc),ka.subVectors(e.a,wc),za.subVectors(e.b,wc),Ga.subVectors(e.c,wc),Rr.subVectors(za,ka),Cr.subVectors(Ga,za),So.subVectors(ka,Ga);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-So.z,So.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,So.z,0,-So.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-So.y,So.x,0];return!Im(t,ka,za,Ga,Wh)||(t=[1,0,0,0,1,0,0,0,1],!Im(t,ka,za,Ga,Wh))?!1:(Xh.crossVectors(Rr,Cr),t=[Xh.x,Xh.y,Xh.z],Im(t,ka,za,Ga,Wh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ws),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};u(q0,"Box3");var ei=q0,Ws=[new H,new H,new H,new H,new H,new H,new H,new H],zi=new H,Hh=new ei,ka=new H,za=new H,Ga=new H,Rr=new H,Cr=new H,So=new H,wc=new H,Wh=new H,Xh=new H,wo=new H;function Im(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wo.fromArray(s,r);let a=i.x*Math.abs(wo.x)+i.y*Math.abs(wo.y)+i.z*Math.abs(wo.z),l=e.dot(wo),c=t.dot(wo),h=n.dot(wo);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(Im,"satForAxes");var $s=tA();function tA(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}u(tA,"_generateTables");function nA(s){Math.abs(s)>65504&&Xe("DataUtils.toHalfFloat(): Value out of range."),s=gt(s,-65504,65504),$s.floatView[0]=s;let e=$s.uint32View[0],t=e>>23&511;return $s.baseTable[t]+((e&8388607)>>$s.shiftTable[t])}u(nA,"toHalfFloat");function iA(s){let e=s>>10;return $s.uint32View[0]=$s.mantissaTable[$s.offsetTable[e]+(s&1023)]+$s.exponentTable[e],$s.floatView[0]}u(iA,"fromHalfFloat");var Y0=class Y0{static toHalfFloat(e){return nA(e)}static fromHalfFloat(e){return iA(e)}};u(Y0,"DataUtils");var as=Y0,Zt=new H,qh=new We,sA=0,$0=class $0 extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=S0,this.updateRanges=[],this.gpuType=ni,this.version=0,this._normalizationScale=e!==void 0?Jf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qh.fromBufferAttribute(this,t),qh.applyMatrix3(e),this.setXY(t,qh.x,qh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):A0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):R0(e,this.array)}};u($0,"BufferAttribute");var Mt=$0;var K0=class K0 extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};u(K0,"Uint16BufferAttribute");var Hc=K0;var Z0=class Z0 extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};u(Z0,"Uint32BufferAttribute");var Wc=Z0;var J0=class J0 extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};u(J0,"Float32BufferAttribute");var It=J0,rA=new ei,Ec=new H,Lm=new H,j0=class j0{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rA.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ec.subVectors(e,this.center);let t=Ec.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ec,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ec.copy(e.center).add(Lm)),this.expandByPoint(Ec.copy(e.center).sub(Lm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};u(j0,"Sphere");var Vn=j0,oA=0,bi=new Ze,Nm=new Ft,Va=new H,Jn=new ei,Tc=new ei,cn=new H,Yd=class Yd extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RT(e)?Wc:Hc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return Nm.lookAt(e),Nm.updateMatrix(),this.applyMatrix4(Nm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Va).negate(),this.translate(Va.x,Va.y,Va.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Tc.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Jn.min,Tc.min),Jn.expandByPoint(cn),cn.addVectors(Jn.max,Tc.max),Jn.expandByPoint(cn)):(Jn.expandByPoint(Tc.min),Jn.expandByPoint(Tc.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Va.fromBufferAttribute(e,c),cn.add(Va)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new H,l[L]=new H;let h=new H,f=new H,d=new H,m=new We,g=new We,_=new We,x=new H,b=new H;function v(L,P,D){c[L]=c[P]=c[D]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,D),f.sub(h),d.sub(h),g.sub(m),_.sub(m);let U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(U),b.copy(d).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(U),a[L].add(x),a[P].add(x),a[D].add(x),l[L].add(b),l[P].add(b),l[D].add(b))}u(v,"handleTriangle");let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,P=S.length;L<P;++L){let D=S[L],U=D.start,X=D.count;for(let O=U,Y=U+X;O<Y;O+=3)v(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let M=new H,A=new H,E=new H,y=new H;function w(L){E.fromBufferAttribute(i,L),y.copy(E);let P=a[L];M.copy(P),M.sub(E.multiplyScalar(E.dot(P))).normalize(),A.crossVectors(y,P);let U=A.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,U)}u(w,"handleVertex");for(let L=0,P=n.count;L<P;++L)c[L]&&w(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let b=0;b<h;b++)d[g++]=c[m++]}return new Mt(d,h,f)}if(u(e,"convertBufferAttribute"),this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Yd,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Yd,"BufferGeometry");var Rt=Yd,Q0=class Q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=S0,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Av(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Av(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};u(Q0,"InterleavedBuffer");var Do=Q0;function Av(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ps()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}u(Av,"getArrayKey");var Cn=new H,$d=class $d{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Jf(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $d(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):A0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):R0(e,this.data.array)}};u($d,"InterleavedBufferAttribute");var Dr=$d,Dm=new H,aA=new H,lA=new je,eg=class eg{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Dm.subVectors(n,t).cross(aA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Dm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lA.getNormalMatrix(e),i=this.coplanarPoint(Dm).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};u(eg,"Plane");var kn=eg,cA=0,tg=class tg extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=xl,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=i0,this.blendDst=s0,this.blendEquation=Go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=LM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=md,this.stencilZFail=md,this.stencilZPass=md,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};u(tg,"Material");var In=tg,ng=class ng extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(ng,"SpriteMaterial");var Or=ng,Ha,Ac=new H,Wa=new H,Xa=new H,qa=new We,Rc=new We,HM=new Ze,Yh=new H,Cc=new H,$h=new H,Rv=new We,Om=new We,Cv=new We,ig=class ig extends Ft{constructor(e=new Or){if(super(),this.isSprite=!0,this.type="Sprite",Ha===void 0){Ha=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Do(t,5);Ha.setIndex([0,1,2,0,2,3]),Ha.setAttribute("position",new Dr(n,3,0,!1)),Ha.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=Ha,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wa.setFromMatrixScale(this.matrixWorld),HM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wa.multiplyScalar(-Xa.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Kh(Yh.set(-.5,-.5,0),Xa,o,Wa,i,r),Kh(Cc.set(.5,-.5,0),Xa,o,Wa,i,r),Kh($h.set(.5,.5,0),Xa,o,Wa,i,r),Rv.set(0,0),Om.set(1,0),Cv.set(1,1);let a=e.ray.intersectTriangle(Yh,Cc,$h,!1,Ac);if(a===null&&(Kh(Cc.set(-.5,.5,0),Xa,o,Wa,i,r),Om.set(0,1),a=e.ray.intersectTriangle(Yh,$h,Cc,!1,Ac),a===null))return;let l=e.ray.origin.distanceTo(Ac);l<e.near||l>e.far||t.push({distance:l,point:Ac.clone(),uv:Ys.getInterpolation(Ac,Yh,Cc,$h,Rv,Om,Cv,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};u(ig,"Sprite");var Js=ig;function Kh(s,e,t,n,i,r){qa.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Rc.x=r*qa.x-i*qa.y,Rc.y=i*qa.x+r*qa.y):Rc.copy(qa),s.copy(e),s.x+=Rc.x,s.y+=Rc.y,s.applyMatrix4(HM)}u(Kh,"transformVertex");var Xs=new H,Um=new H,Zh=new H,Jh=new H,sg=class sg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xs.copy(this.origin).addScaledVector(this.direction,t),Xs.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Um.copy(e).add(t).multiplyScalar(.5),Zh.copy(t).sub(e).normalize(),Jh.copy(this.origin).sub(Um);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zh),a=Jh.dot(this.direction),l=-Jh.dot(Zh),c=Jh.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Um).addScaledVector(Zh,d),m}intersectSphere(e,t){if(e.radius<0)return null;Xs.subVectors(e.center,this.origin);let n=Xs.dot(this.direction),i=Xs.dot(Xs)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xs)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,x=t.z-o.z,b=n.x-o.x,v=n.y-o.y,S=n.z-o.z,M=Math.abs(l),A=Math.abs(c),E=Math.abs(h),y,w,L,P,D,U,X,O,Y,Q,z,$;if(M>=A&&M>=E?(L=l,U=f,Y=g,$=b,l>=0?(y=c,w=h,P=d,D=m,X=_,O=x,Q=v,z=S):(y=h,w=c,P=m,D=d,X=x,O=_,Q=S,z=v)):A>=E?(L=c,U=d,Y=_,$=v,c>=0?(y=h,w=l,P=m,D=f,X=x,O=g,Q=S,z=b):(y=l,w=h,P=f,D=m,X=g,O=x,Q=b,z=S)):(L=h,U=m,Y=x,$=S,h>=0?(y=l,w=c,P=f,D=d,X=g,O=_,Q=b,z=v):(y=c,w=l,P=d,D=f,X=_,O=g,Q=v,z=b)),L===0)return null;let q=y/L,J=w/L,ee=1/L,pe=P-q*U,ge=D-J*U,j=X-q*Y,xe=O-J*Y,se=Q-q*$,fe=z-J*$,ae=se*xe-fe*j,Be=pe*fe-ge*se,Qe=j*ge-xe*pe;if(i){if(ae<0||Be<0||Qe<0)return null}else if((ae<0||Be<0||Qe<0)&&(ae>0||Be>0||Qe>0))return null;let De=ae+Be+Qe;if(De===0)return null;let ut=ee*(ae*U+Be*Y+Qe*$);return(De>0?ut<0:ut>0)?null:this.at(ut/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(sg,"Ray");var Ur=sg,rg=class rg extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(rg,"MeshBasicMaterial");var ti=rg,Pv=new Ze,Eo=new Ur,jh=new Vn,Iv=new H,Qh=new H,ed=new H,td=new H,Fm=new H,nd=new H,Lv=new H,id=new H,og=class og extends Ft{constructor(e=new Rt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){nd.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Fm.fromBufferAttribute(f,e),o?nd.addScaledVector(Fm,h):nd.addScaledVector(Fm.sub(t),h))}t.add(nd)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jh.copy(n.boundingSphere),jh.applyMatrix4(r),Eo.copy(e.ray).recast(e.near),!(jh.containsPoint(Eo.origin)===!1&&(Eo.intersectSphere(jh,Iv)===null||Eo.origin.distanceToSquared(Iv)>(e.far-e.near)**2))&&(Pv.copy(r).invert(),Eo.copy(e.ray).applyMatrix4(Pv),!(n.boundingBox!==null&&Eo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Eo)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),S=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,A=S;M<A;M+=3){let E=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);i=sd(this,b,e,n,c,h,f,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=a.getX(x),S=a.getX(x+1),M=a.getX(x+2);i=sd(this,o,e,n,c,h,f,v,S,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),S=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,A=S;M<A;M+=3){let E=M,y=M+1,w=M+2;i=sd(this,b,e,n,c,h,f,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=x,S=x+1,M=x+2;i=sd(this,o,e,n,c,h,f,v,S,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};u(og,"Mesh");var pt=og;function uA(s,e,t,n,i,r,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===vi,a),l===null)return null;id.copy(a),id.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(id);return c<t.near||c>t.far?null:{distance:c,point:id.clone(),object:s}}u(uA,"checkIntersection$1");function sd(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Qh),s.getVertexPosition(l,ed),s.getVertexPosition(c,td);let h=uA(s,e,t,n,Qh,ed,td,Lv);if(h){let f=new H;Ys.getBarycoord(Lv,Qh,ed,td,f),i&&(h.uv=Ys.getInterpolatedAttribute(i,a,l,c,f,new We)),r&&(h.uv1=Ys.getInterpolatedAttribute(r,a,l,c,f,new We)),o&&(h.normal=Ys.getInterpolatedAttribute(o,a,l,c,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new H,materialIndex:0};Ys.getNormal(Qh,ed,td,d.normal),h.face=d,h.barycoord=f}return h}u(sd,"checkGeometryIntersection");var Pc=new At,Nv=new At,Dv=new At,hA=new At,Ov=new Ze,rd=new H,Bm=new Vn,Uv=new Ze,km=new Ur,ag=class ag extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hm,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rd),this.boundingBox.expandByPoint(rd)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rd),this.boundingSphere.expandByPoint(rd)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bm.copy(this.boundingSphere),Bm.applyMatrix4(i),e.ray.intersectsSphere(Bm)!==!1&&(Uv.copy(i).invert(),km.copy(e.ray).applyMatrix4(Uv),!(this.boundingBox!==null&&km.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,km)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===TM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Nv.fromBufferAttribute(i.attributes.skinIndex,e),Dv.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Pc.copy(t),t.set(0,0,0,0)):(Pc.set(t.x,t.y,t.z,1),t.set(0,0,0)),Pc.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Dv.getComponent(r);if(o!==0){let a=Nv.getComponent(r);Ov.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hA.copy(Pc).applyMatrix4(Ov),o)}}return t.isVector4&&(t.w=Pc.w),t.applyMatrix4(this.bindMatrixInverse)}};u(ag,"SkinnedMesh");var Xc=ag,lg=class lg extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(lg,"Bone");var ll=lg,cg=class cg extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Wt,h=Wt,f,d){super(null,o,a,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(cg,"DataTexture");var Fr=cg,Fv=new Ze,dA=new Ze,Kd=class Kd{constructor(e=[],t=[]){this.uuid=ps(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Xe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:dA;Fv.multiplyMatrices(a,t[r]),Fv.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Kd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fr(t,e,e,Xn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Xe("Skeleton: No bone found with UUID:",r),o=new ll),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};u(Kd,"Skeleton");var qc=Kd,ug=class ug extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(ug,"InstancedBufferAttribute");var Hn=ug,Ya=new Ze,Bv=new Ze,od=[],kv=new ei,fA=new Ze,Ic=new pt,Lc=new Vn,hg=class hg extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ya),kv.copy(e.boundingBox).applyMatrix4(Ya),this.boundingBox.union(kv)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ya),Lc.copy(e.boundingSphere).applyMatrix4(Ya),this.boundingSphere.union(Lc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ic.geometry=this.geometry,Ic.material=this.material,Ic.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(n),e.ray.intersectsSphere(Lc)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ya),Bv.multiplyMatrices(n,Ya),Ic.matrixWorld=Bv,Ic.raycast(e,od);for(let o=0,a=od.length;o<a;o++){let l=od[o];l.instanceId=r,l.object=this,t.push(l)}od.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(i*this.count),i,this.count,pf,ni));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};u(hg,"InstancedMesh");var Yc=hg,To=new Vn,pA=new We(.5,.5),ad=new H,dg=class dg{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],m=r[7],g=r[8],_=r[9],x=r[10],b=r[11],v=r[12],S=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-o,m-h,b-g,A-v).normalize(),i[1].setComponents(c+o,m+h,b+g,A+v).normalize(),i[2].setComponents(c+a,m+f,b+_,A+S).normalize(),i[3].setComponents(c-a,m-f,b-_,A-S).normalize(),n)i[4].setComponents(l,d,x,M).normalize(),i[5].setComponents(c-l,m-d,b-x,A-M).normalize();else if(i[4].setComponents(c-l,m-d,b-x,A-M).normalize(),t===yi)i[5].setComponents(c+l,m+d,b+x,A+M).normalize();else if(t===nl)i[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),To.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),To.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(To)}intersectsSprite(e){To.center.set(0,0,0);let t=pA.distanceTo(e.center);return To.radius=.7071067811865476+t,To.applyMatrix4(e.matrixWorld),this.intersectsSphere(To)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ad.x=i.normal.x>0?e.max.x:e.min.x,ad.y=i.normal.y>0?e.max.y:e.min.y,ad.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ad)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(dg,"Frustum");var Br=dg,zv=new Ze,Zd=class Zd{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];zv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Br),n[i].setFromProjectionMatrix(zv,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Br),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Zd().copy(this)}};u(Zd,"FrustumArray");var Td=Zd;var fg=class fg extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(fg,"LineBasicMaterial");var cl=fg,Ad=new H,Rd=new H,Gv=new Ze,Nc=new Ur,ld=new Vn,zm=new H,Vv=new H,pg=class pg extends Ft{constructor(e=new Rt,t=new cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ad.fromBufferAttribute(t,i-1),Rd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ad.distanceTo(Rd);e.setAttribute("lineDistance",new It(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ld.copy(n.boundingSphere),ld.applyMatrix4(i),ld.radius+=r,e.ray.intersectsSphere(ld)===!1)return;Gv.copy(i).invert(),Nc.copy(e.ray).applyMatrix4(Gv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=h.getX(_),v=h.getX(_+1),S=cd(this,e,Nc,l,b,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),x=h.getX(m),b=cd(this,e,Nc,l,_,x,g-1);b&&t.push(b)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=cd(this,e,Nc,l,_,_+1,_);b&&t.push(b)}if(this.isLineLoop){let _=cd(this,e,Nc,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(pg,"Line");var Oo=pg;function cd(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Ad.fromBufferAttribute(a,i),Rd.fromBufferAttribute(a,r),t.distanceSqToSegment(Ad,Rd,zm,Vv)>n)return;zm.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(zm);if(!(c<e.near||c>e.far))return{distance:c,point:Vv.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}u(cd,"checkIntersection");var Hv=new H,Wv=new H,mg=class mg extends Oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Hv.fromBufferAttribute(t,i),Wv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hv.distanceTo(Wv);e.setAttribute("lineDistance",new It(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(mg,"LineSegments");var $c=mg,gg=class gg extends Oo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(gg,"LineLoop");var Kc=gg,xg=class xg extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(xg,"PointsMaterial");var ul=xg,Xv=new Ze,Xm=new Ur,ud=new Vn,hd=new H,bg=class bg extends Ft{constructor(e=new Rt,t=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ud.copy(n.boundingSphere),ud.applyMatrix4(i),ud.radius+=r,e.ray.intersectsSphere(ud)===!1)return;Xv.copy(i).invert(),Xm.copy(e.ray).applyMatrix4(Xv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let x=c.getX(g);hd.fromBufferAttribute(f,x),qv(hd,x,l,i,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)hd.fromBufferAttribute(f,g),qv(hd,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(bg,"Points");var Zc=bg;function qv(s,e,t,n,i,r,o){let a=Xm.distanceSqToPoint(s);if(a<t){let l=new H;Xm.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(qv,"testPoint");var yg=class yg extends Qt{constructor(e=[],t=Vo,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(yg,"CubeTexture");var Jc=yg,_g=class _g extends Qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(_g,"CanvasTexture");var kr=_g;var vg=class vg extends Qt{constructor(e,t,n=Vi,i,r,o,a=Wt,l=Wt,c,h=Zs,f=1){if(h!==Zs&&h!==or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};u(vg,"DepthTexture");var js=vg,Mg=class Mg extends js{constructor(e,t=Vi,n=Vo,i,r,o=Wt,a=Wt,l,c=Zs){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};u(Mg,"CubeDepthTexture");var jc=Mg,Sg=class Sg extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};u(Sg,"ExternalTexture");var Qc=Sg,Jd=class Jd extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function g(_,x,b,v,S,M,A,E,y,w,L){let P=M/y,D=A/w,U=M/2,X=A/2,O=E/2,Y=y+1,Q=w+1,z=0,$=0,q=new H;for(let J=0;J<Q;J++){let ee=J*D-X;for(let pe=0;pe<Y;pe++){let ge=pe*P-U;q[_]=ge*v,q[x]=ee*S,q[b]=O,c.push(q.x,q.y,q.z),q[_]=0,q[x]=0,q[b]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(pe/y),f.push(1-J/w),z+=1}}for(let J=0;J<w;J++)for(let ee=0;ee<y;ee++){let pe=d+ee+Y*J,ge=d+ee+Y*(J+1),j=d+(ee+1)+Y*(J+1),xe=d+(ee+1)+Y*J;l.push(pe,ge,xe),l.push(ge,j,xe),$+=6}a.addGroup(m,$,L),m+=$,d+=z}u(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(Jd,"BoxGeometry");var ls=Jd;var jd=class jd extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],m=[],g=0,_=[],x=n/2,b=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function v(){let M=new H,A=new H,E=0,y=(t-e)/n;for(let w=0;w<=r;w++){let L=[],P=w/r,D=P*(t-e)+e;for(let U=0;U<=i;U++){let X=U/i,O=X*l+a,Y=Math.sin(O),Q=Math.cos(O);A.x=D*Y,A.y=-P*n+x,A.z=D*Q,f.push(A.x,A.y,A.z),M.set(Y,y,Q).normalize(),d.push(M.x,M.y,M.z),m.push(X,1-P),L.push(g++)}_.push(L)}for(let w=0;w<i;w++)for(let L=0;L<r;L++){let P=_[L][w],D=_[L+1][w],U=_[L+1][w+1],X=_[L][w+1];(e>0||L!==0)&&(h.push(P,D,X),E+=3),(t>0||L!==r-1)&&(h.push(D,U,X),E+=3)}c.addGroup(b,E,0),b+=E}u(v,"generateTorso");function S(M){let A=g,E=new We,y=new H,w=0,L=M===!0?e:t,P=M===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,x*P,0),d.push(0,P,0),m.push(.5,.5),g++;let D=g;for(let U=0;U<=i;U++){let O=U/i*l+a,Y=Math.cos(O),Q=Math.sin(O);y.x=L*Q,y.y=x*P,y.z=L*Y,f.push(y.x,y.y,y.z),d.push(0,P,0),E.x=Y*.5+.5,E.y=Q*.5*P+.5,m.push(E.x,E.y),g++}for(let U=0;U<i;U++){let X=A+U,O=D+U;M===!0?h.push(O,O+1,X):h.push(O+1,O,X),w+=3}c.addGroup(b,w,M===!0?1:2),b+=w}u(S,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(jd,"CylinderGeometry");var _i=jd,Qd=class Qd extends _i{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(Qd,"ConeGeometry");var Qs=Qd,ef=class ef extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new H,M=new H,A=new H;for(let E=0;E<t.length;E+=3)m(t[E+0],S),m(t[E+1],M),m(t[E+2],A),l(S,M,A,v)}u(a,"subdivide");function l(v,S,M,A){let E=A+1,y=[];for(let w=0;w<=E;w++){y[w]=[];let L=v.clone().lerp(M,w/E),P=S.clone().lerp(M,w/E),D=E-w;for(let U=0;U<=D;U++)U===0&&w===E?y[w][U]=L:y[w][U]=L.clone().lerp(P,U/D)}for(let w=0;w<E;w++)for(let L=0;L<2*(E-w)-1;L++){let P=Math.floor(L/2);L%2===0?(d(y[w][P+1]),d(y[w+1][P]),d(y[w][P])):(d(y[w][P+1]),d(y[w+1][P+1]),d(y[w+1][P]))}}u(l,"subdivideFace");function c(v){let S=new H;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}u(c,"applyRadius");function h(){let v=new H;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=x(v)/2/Math.PI+.5,A=b(v)/Math.PI+.5;o.push(M,1-A)}g(),f()}u(h,"generateUVs");function f(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],A=o[v+4],E=Math.max(S,M,A),y=Math.min(S,M,A);E>.9&&y<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}u(f,"correctSeam");function d(v){r.push(v.x,v.y,v.z)}u(d,"pushVertex");function m(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}u(m,"getVertexByIndex");function g(){let v=new H,S=new H,M=new H,A=new H,E=new We,y=new We,w=new We;for(let L=0,P=0;L<r.length;L+=9,P+=6){v.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),E.set(o[P+0],o[P+1]),y.set(o[P+2],o[P+3]),w.set(o[P+4],o[P+5]),A.copy(v).add(S).add(M).divideScalar(3);let D=x(A);_(E,P+0,v,D),_(y,P+2,S,D),_(w,P+4,M,D)}}u(g,"correctUVs");function _(v,S,M,A){A<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=A/2/Math.PI+.5)}u(_,"correctUV");function x(v){return Math.atan2(v.z,-v.x)}u(x,"azimuth");function b(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}u(b,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.vertices,e.indices,e.radius,e.detail)}};u(ef,"PolyhedronGeometry");var Cd=ef;var tf=class tf extends Cd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tf(e.radius,e.detail)}};u(tf,"IcosahedronGeometry");var hl=tf;var nf=class nf extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,m=[],g=[],_=[],x=[];for(let b=0;b<h;b++){let v=b*d-o;for(let S=0;S<c;S++){let M=S*f-r;g.push(M,-v,0),_.push(0,0,1),x.push(S/a),x.push(1-b/l)}}for(let b=0;b<l;b++)for(let v=0;v<a;v++){let S=v+c*b,M=v+c*(b+1),A=v+1+c*(b+1),E=v+1+c*b;m.push(S,M,E),m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.width,e.height,e.widthSegments,e.heightSegments)}};u(nf,"PlaneGeometry");var cs=nf;var sf=class sf extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new H,d=new H,m=[],g=[],_=[],x=[];for(let b=0;b<=n;b++){let v=[],S=b/n,M=o+S*a,A=e*Math.cos(M),E=Math.sqrt(e*e-A*A),y=0;b===0&&o===0?y=.5/t:b===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let L=w/t,P=i+L*r;f.x=-E*Math.cos(P),f.y=A,f.z=E*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),x.push(L+y,1-S),v.push(c++)}h.push(v)}for(let b=0;b<n;b++)for(let v=0;v<t;v++){let S=h[b][v+1],M=h[b][v],A=h[b+1][v],E=h[b+1][v+1];(b!==0||o>0)&&m.push(S,M,E),(b!==n-1||l<Math.PI)&&m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(sf,"SphereGeometry");var zr=sf;var rf=class rf extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new H,m=new H,g=new H;for(let _=0;_<=n;_++){let x=o+_/n*a;for(let b=0;b<=i;b++){let v=b/i*r;m.x=(e+t*Math.cos(x))*Math.cos(v),m.y=(e+t*Math.cos(x))*Math.sin(v),m.z=t*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(b/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){let b=(i+1)*_+x-1,v=(i+1)*(_-1)+x-1,S=(i+1)*(_-1)+x,M=(i+1)*_+x;l.push(b,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};u(rf,"TorusGeometry");var er=rf;function Xo(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Yv(i))i.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Yv(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}u(Xo,"cloneUniforms");function Sn(s){let e={};for(let t=0;t<s.length;t++){let n=Xo(s[t]);for(let i in n)e[i]=n[i]}return e}u(Sn,"mergeUniforms");function Yv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}u(Yv,"isThreeObject");function mA(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}u(mA,"cloneUniformsGroups");function C0(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}u(C0,"getUnlitUniformColorSpace");var qo={clone:Xo,merge:Sn},gA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wg=class wg extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gA,this.fragmentShader=xA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=mA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new We().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new At().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};u(wg,"ShaderMaterial");var Ln=wg,Eg=class Eg extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};u(Eg,"RawShaderMaterial");var Pd=Eg,Tg=class Tg extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(Tg,"MeshStandardMaterial");var en=Tg,Ag=class Ag extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:u(function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:u(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Co('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Co('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(Ag,"MeshPhysicalMaterial");var Nn=Ag;var Rg=class Rg extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(Rg,"MeshDepthMaterial");var Id=Rg,Cg=class Cg extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(Cg,"MeshDistanceMaterial");var Ld=Cg;function Ir(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}u(Ir,"convertArray");function Dc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}u(Dc,"hasTangents");function bA(s){function e(i,r){return s[i]-s[r]}u(e,"compareTime");let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(bA,"getKeyframeOrder");function $v(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}u($v,"sortedArray");function yA(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}u(yA,"flattenJSON");var Pg=class Pg{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};u(Pg,"Interpolant");var us=Pg,Ig=class Ig extends us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ro:r=e,a=2*t-n;break;case Bc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ro:o=e,l=2*n-t;break;case Bc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,x=_*g,b=-d*x+2*d*_-d*g,v=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-m)*x+(1.5+m)*_+.5*g,M=m*x-m*_;for(let A=0;A!==a;++A)r[A]=b*o[h+A]+v*o[c+A]+S*o[l+A]+M*o[f+A];return r}};u(Ig,"CubicInterpolant");var Nd=Ig,Lg=class Lg extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}};u(Lg,"LinearInterpolant");var eu=Lg,Ng=class Ng extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};u(Ng,"DiscreteInterpolant");var Dd=Ng,Dg=class Dg extends us{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(i-t),_=1-g;for(let x=0;x!==a;++x)r[x]=o[c+x]*_+o[l+x]*g;return r}let d=a*2,m=e-1;for(let g=0;g!==a;++g){let _=o[c+g],x=o[l+g],b=m*d+g*2,v=f[b],S=f[b+1],M=e*d+g*2,A=h[M],E=h[M+1],y=vA(n,t,v,A,i);r[g]=WM(y,_,S,E,x)}return r}};u(Dg,"BezierInterpolant");var Od=Dg;function WM(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}u(WM,"cubicBezier");function _A(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}u(_A,"cubicBezierSlope");function vA(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=WM(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=_A(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}u(vA,"solveBezierParameter");var Og=class Og{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ir(t,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ir(e.times,Array),values:Ir(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Dc(e.settings)&&(n.settings={inTangents:Ir(e.settings.inTangents,Array),outTangents:Ir(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Od(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case pd:t=this.InterpolantFactoryMethodSmooth;break;case Wm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return pd;case this.InterpolantFactoryMethodBezier:return Wm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Dc(this.settings)&&(Kv(this.settings.inTangents,e),Kv(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Dc(this.settings)&&(Zv(this.settings.inTangents,e),Zv(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&CT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pd,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Dc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};u(Og,"KeyframeTrack");var Wn=Og;function Kv(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}u(Kv,"shiftTangentTimes");function Zv(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}u(Zv,"scaleTangentTimes");Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Io;var Ug=class Ug extends Wn{constructor(e,t,n){super(e,t,n)}};u(Ug,"BooleanKeyframeTrack");var tr=Ug;tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Po;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fg=class Fg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Fg,"ColorKeyframeTrack");var tu=Fg;tu.prototype.ValueTypeName="color";var Bg=class Bg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Bg,"NumberKeyframeTrack");var nr=Bg;nr.prototype.ValueTypeName="number";var kg=class kg extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}};u(kg,"QuaternionLinearInterpolant");var Ud=kg,zg=class zg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ud(this.times,this.values,this.getValueSize(),e)}};u(zg,"QuaternionKeyframeTrack");var ir=zg;ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Gg=class Gg extends Wn{constructor(e,t,n){super(e,t,n)}};u(Gg,"StringKeyframeTrack");var sr=Gg;sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Po;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vg=class Vg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Vg,"VectorKeyframeTrack");var Gr=Vg;Gr.prototype.ValueTypeName="vector";var Hg=class Hg{constructor(e="",t=-1,n=[],i=Kf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ps(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(SA(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=bA(l);l=$v(l,1,h),c=$v(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};u(Hg,"AnimationClip");var Uo=Hg;function MA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return Gr;case"color":return tu;case"quaternion":return ir;case"bool":case"boolean":return tr;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}u(MA,"getTrackTypeForValueTypeName");function SA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=MA(s.type);if(s.times===void 0){let n=[],i=[];yA(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Dc(s.settings)&&(t.settings={inTangents:Ir(s.settings.inTangents,Float32Array),outTangents:Ir(s.settings.outTangents,Float32Array)}),t}u(SA,"parseKeyframeTrack");var os={enabled:!1,files:{},add:u(function(s,e){this.enabled!==!1&&(Jv(s)||(this.files[s]=e))},"add"),get:u(function(s){if(this.enabled!==!1&&!Jv(s))return this.files[s]},"get"),remove:u(function(s){delete this.files[s]},"remove"),clear:u(function(){this.files={}},"clear")};function Jv(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}u(Jv,"isBlobURL");var Wg=class Wg{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};u(Wg,"LoadingManager");var dl=Wg,XM=new dl,Xg=class Xg{constructor(e){this.manager=e!==void 0?e:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};u(Xg,"Loader");var hs=Xg;hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs={},qg=class qg extends Error{constructor(e,t){super(e),this.response=t}};u(qg,"HttpError");var qm=qg,Yg=class Yg extends hs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=os.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(qs[e]!==void 0){qs[e].push({onLoad:t,onProgress:n,onError:i});return}qs[e]=[],qs[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qs[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,_=0,x=new ReadableStream({start(b){v();function v(){f.read().then(({done:S,value:M})=>{if(S)b.close();else{_+=M.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let E=0,y=h.length;E<y;E++){let w=h[E];w.onProgress&&w.onProgress(A)}b.enqueue(M),v()}},S=>{b.error(S)})}u(v,"readData")}});return new Response(x)}else throw new qm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{os.add(`file:${e}`,c);let h=qs[e];delete qs[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=qs[e];if(h===void 0)throw this.manager.itemError(e),c;delete qs[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(Yg,"FileLoader");var fl=Yg;var $a=new WeakMap,$g=class $g extends hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=os.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=$a.get(o);f===void 0&&(f=[],$a.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=il("img");function l(){h(),t&&t(this);let f=$a.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onLoad&&m.onLoad(this)}$a.delete(this),r.manager.itemEnd(e)}u(l,"onImageLoad");function c(f){h(),i&&i(f),os.remove(`image:${e}`);let d=$a.get(this)||[];for(let m=0;m<d.length;m++){let g=d[m];g.onError&&g.onError(f)}$a.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),os.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};u($g,"ImageLoader");var Fd=$g;var Kg=class Kg extends hs{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new Fd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};u(Kg,"TextureLoader");var nu=Kg,Zg=class Zg extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};u(Zg,"Light");var Fo=Zg,Jg=class Jg extends Fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};u(Jg,"HemisphereLight");var iu=Jg,Gm=new Ze,jv=new H,Qv=new H,jg=class jg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;jv.setFromMatrixPosition(e.matrixWorld),t.position.copy(jv),Qv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qv),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Gm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Gm,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===nl||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Gm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(jg,"LightShadow");var pl=jg,dd=new H,fd=new $t,rs=new H,Qg=class Qg extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dd,fd,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dd,fd,rs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dd,fd,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dd,fd,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};u(Qg,"Camera");var su=Qg,Pr=new H,eM=new We,tM=new We,ex=class ex extends su{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,eM,tM),t.subVectors(tM,eM)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(ex,"PerspectiveCamera");var jt=ex,tx=class tx extends pl{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Lo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};u(tx,"SpotLightShadow");var Ym=tx,nx=class nx extends Fo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ym}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};u(nx,"SpotLight");var ru=nx,ix=class ix extends pl{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}};u(ix,"PointLightShadow");var $m=ix,sx=class sx extends Fo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};u(sx,"PointLight");var ou=sx,rx=class rx extends su{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(rx,"OrthographicCamera");var Bo=rx,ox=class ox extends pl{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(ox,"DirectionalLightShadow");var Km=ox,ax=class ax extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Km}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};u(ax,"DirectionalLight");var ko=ax;var lx=class lx{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(lx,"LoaderUtils");var rr=lx,cx=class cx extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(cx,"InstancedBufferGeometry");var au=cx;var Vm=new WeakMap,ux=class ux extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Xe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Xe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=os.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Vm.has(o)===!0?(i&&i(Vm.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return os.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vm.set(l,c),os.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});os.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(ux,"ImageBitmapLoader");var lu=ux;var Ka=-90,Za=1,hx=class hx extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(Ka,Za,e,t);i.layers=this.layers,this.add(i);let r=new jt(Ka,Za,e,t);r.layers=this.layers,this.add(r);let o=new jt(Ka,Za,e,t);o.layers=this.layers,this.add(o);let a=new jt(Ka,Za,e,t);a.layers=this.layers,this.add(a);let l=new jt(Ka,Za,e,t);l.layers=this.layers,this.add(l);let c=new jt(Ka,Za,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};u(hx,"CubeCamera");var ml=hx,dx=class dx extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};u(dx,"ArrayCamera");var Bd=dx;var fx=class fx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;$t.multiplyQuaternionsFlat(e,o,e,t,e,n),$t.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}};u(fx,"PropertyMixer");var kd=fx,P0="\\[\\]\\.:\\/",wA=new RegExp("["+P0+"]","g"),I0="[^"+P0+"]",EA="[^"+P0.replace("\\.","")+"]",TA=/((?:WC+[\/:])*)/.source.replace("WC",I0),AA=/(WCOD+)?/.source.replace("WCOD",EA),RA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",I0),CA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",I0),PA=new RegExp("^"+TA+AA+RA+CA+"$"),IA=["material","materials","bones","map"],px=class px{constructor(e,t,n){let i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};u(px,"Composite");var Zm=px,Nr=class Nr{constructor(e,t,n){this.path=t,this.parsedPath=n||Nr.parseTrackName(t),this.node=Nr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nr.Composite(e,t,n):new Nr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wA,"")}static parseTrackName(e){let t=PA.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);IA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=u(function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Nr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Nr,"PropertyBinding");var wt=Nr;wt.Composite=Zm;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=class mx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ao,endingEnd:Ao};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=$f,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case CM:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Kf:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===RM;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===AM){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ro,i.endingEnd=Ro):(e?i.endingStart=this.zeroSlopeAtStart?Ro:Ao:i.endingStart=Bc,t?i.endingEnd=this.zeroSlopeAtEnd?Ro:Ao:i.endingEnd=Bc)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}};u(mx,"AnimationAction");var zd=mx,LA=new Float32Array(1),gx=class gx extends Gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){let d=i[f],m=d.name,g=h[m];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let _=t&&t._propertyBindings[f].binding.parsedPath;g=new kd(wt.create(n,m,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new eu(new Float32Array(2),new Float32Array(2),1,LA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Uo.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Kf),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new zd(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Uo.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};u(gx,"AnimationMixer");var cu=gx;var nM=new Ze,xx=class xx{constructor(e,t,n=0,i=1/0){this.ray=new Ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nM),this}intersectObject(e,t=!0,n=[]){return Jm(e,this,n,t),n.sort(iM),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jm(e[i],this,n,t);return n.sort(iM),n}};u(xx,"Raycaster");var uu=xx;function iM(s,e){return s.distance-e.distance}u(iM,"ascSort");function Jm(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Jm(r[o],e,t,!0)}}u(Jm,"intersect");var of=class of{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};u(of,"Matrix2"),of.prototype.isMatrix2=!0;var jm=of;function L0(s,e,t,n){let i=NA(n);switch(t){case x0:return s*e;case pf:return s*e/i.components*i.byteLength;case mf:return s*e/i.components*i.byteLength;case fs:return s*e*2/i.components*i.byteLength;case gf:return s*e*2/i.components*i.byteLength;case b0:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case xf:return s*e*4/i.components*i.byteLength;case fu:case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mu:case gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:case vf:return Math.max(s,16)*Math.max(e,8)/4;case bf:case _f:return Math.max(s,8)*Math.max(e,8)/2;case Mf:case Sf:case Ef:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wf:case xu:case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Hf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Xf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bu:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(L0,"getByteLength");function NA(s){switch(s){case Mn:case f0:return{byteLength:1,components:1};case _l:case p0:case ii:return{byteLength:2,components:1};case df:case ff:return{byteLength:2,components:4};case Vi:case hf:case ni:return{byteLength:4,components:1};case m0:case g0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}u(NA,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function fS(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return u(i,"onAnimationFrame"),{start:u(function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},"start"),stop:u(function(){s!==null&&s.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:u(function(r){t=r},"setAnimationLoop"),setContext:u(function(r){s=r},"setContext")}}u(fS,"WebGLAnimation");function OA(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}u(t,"createBuffer");function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(i,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}u(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:i,remove:r,update:o}}u(OA,"WebGLAttributes");var UA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$A=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,aR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hR="gl_FragColor = linearToOutputTexel( gl_FragColor );",dR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ER=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,AR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,RR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FR=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$R=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KR=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_C=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,OC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BC=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$C=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:UA,alphahash_pars_fragment:FA,alphamap_fragment:BA,alphamap_pars_fragment:kA,alphatest_fragment:zA,alphatest_pars_fragment:GA,aomap_fragment:VA,aomap_pars_fragment:HA,batching_pars_vertex:WA,batching_vertex:XA,begin_vertex:qA,beginnormal_vertex:YA,bsdfs:$A,iridescence_fragment:KA,bumpmap_pars_fragment:ZA,clipping_planes_fragment:JA,clipping_planes_pars_fragment:jA,clipping_planes_pars_vertex:QA,clipping_planes_vertex:eR,color_fragment:tR,color_pars_fragment:nR,color_pars_vertex:iR,color_vertex:sR,common:rR,defaultnormal_vertex:oR,displacementmap_pars_vertex:aR,displacementmap_vertex:lR,emissivemap_fragment:cR,emissivemap_pars_fragment:uR,colorspace_fragment:hR,colorspace_pars_fragment:dR,envmap_fragment:fR,envmap_common_pars_fragment:pR,envmap_pars_fragment:mR,envmap_pars_vertex:gR,envmap_physical_pars_fragment:AR,envmap_vertex:xR,fog_vertex:bR,fog_pars_vertex:yR,fog_fragment:_R,fog_pars_fragment:vR,gradientmap_pars_fragment:MR,lightmap_pars_fragment:SR,lights_lambert_fragment:wR,lights_lambert_pars_fragment:ER,lights_pars_begin:TR,lights_toon_fragment:RR,lights_toon_pars_fragment:CR,lights_phong_fragment:PR,lights_phong_pars_fragment:IR,lights_physical_fragment:LR,lights_physical_pars_fragment:NR,lights_fragment_begin:DR,lights_fragment_maps:OR,lights_fragment_end:UR,lightprobes_pars_fragment:FR,logdepthbuf_fragment:BR,logdepthbuf_pars_fragment:kR,logdepthbuf_pars_vertex:zR,logdepthbuf_vertex:GR,map_fragment:VR,map_pars_fragment:HR,map_particle_fragment:WR,map_particle_pars_fragment:XR,metalnessmap_fragment:qR,metalnessmap_pars_fragment:YR,morphinstance_vertex:$R,morphcolor_vertex:KR,morphnormal_vertex:ZR,morphtarget_pars_vertex:JR,morphtarget_vertex:jR,normal_fragment_begin:QR,normal_fragment_maps:eC,normal_pars_fragment:tC,normal_pars_vertex:nC,normal_vertex:iC,normalmap_pars_fragment:sC,clearcoat_normal_fragment_begin:rC,clearcoat_normal_fragment_maps:oC,clearcoat_pars_fragment:aC,iridescence_pars_fragment:lC,opaque_fragment:cC,packing:uC,premultiplied_alpha_fragment:hC,project_vertex:dC,dithering_fragment:fC,dithering_pars_fragment:pC,roughnessmap_fragment:mC,roughnessmap_pars_fragment:gC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:bC,shadowmap_vertex:yC,shadowmask_pars_fragment:_C,skinbase_vertex:vC,skinning_pars_vertex:MC,skinning_vertex:SC,skinnormal_vertex:wC,specularmap_fragment:EC,specularmap_pars_fragment:TC,tonemapping_fragment:AC,tonemapping_pars_fragment:RC,transmission_fragment:CC,transmission_pars_fragment:PC,uv_pars_fragment:IC,uv_pars_vertex:LC,uv_vertex:NC,worldpos_vertex:DC,background_vert:OC,background_frag:UC,backgroundCube_vert:FC,backgroundCube_frag:BC,cube_vert:kC,cube_frag:zC,depth_vert:GC,depth_frag:VC,distance_vert:HC,distance_frag:WC,equirect_vert:XC,equirect_frag:qC,linedashed_vert:YC,linedashed_frag:$C,meshbasic_vert:KC,meshbasic_frag:ZC,meshlambert_vert:JC,meshlambert_frag:jC,meshmatcap_vert:QC,meshmatcap_frag:eP,meshnormal_vert:tP,meshnormal_frag:nP,meshphong_vert:iP,meshphong_frag:sP,meshphysical_vert:rP,meshphysical_frag:oP,meshtoon_vert:aP,meshtoon_frag:lP,points_vert:cP,points_frag:uP,shadow_vert:hP,shadow_frag:dP,sprite_vert:fP,sprite_frag:pP},Ie={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},gs={basic:{uniforms:Sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Sn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Sn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Sn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Sn([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Sn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Sn([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Sn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Sn([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Sn([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Sn([Ie.lights,Ie.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};gs.physical={uniforms:Sn([gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Qf={r:0,b:0,g:0},mP=new Ze,pS=new je;pS.set(-1,0,0,0,1,0,0,0,1);function gP(s,e,t,n,i,r){let o=new Pe(0),a=i===!0?0:1,l,c,h=null,f=0,d=null;function m(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}u(m,"getBackground");function g(v){let S=!1,M=m(v);M===null?x(o,a):M&&M.isColor&&(x(M,1),S=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}u(g,"render");function _(v,S){let M=m(S);M&&M.isCubeTexture?(c===void 0&&(c=new pt(new ls(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Xo(gs.backgroundCube.uniforms),vertexShader:gs.backgroundCube.vertexShader,fragmentShader:gs.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:u(function(){return this.uniforms.envMap.value},"get")}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mP.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pS),c.material.toneMapped=ft.getTransfer(M.colorSpace)!==Et,(h!==M||f!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new cs(2,2),new Ln({name:"BackgroundMaterial",uniforms:Xo(gs.background.uniforms),vertexShader:gs.background.vertexShader,fragmentShader:gs.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:u(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ft.getTransfer(M.colorSpace)!==Et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}u(_,"addToRenderList");function x(v,S){v.getRGB(Qf,C0(s)),t.buffers.color.setClear(Qf.r,Qf.g,Qf.b,S,r)}u(x,"setClear");function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return u(b,"dispose"),{getClearColor:u(function(){return o},"getClearColor"),setClearColor:u(function(v,S=1){o.set(v),a=S,x(o,a)},"setClearColor"),getClearAlpha:u(function(){return a},"getClearAlpha"),setClearAlpha:u(function(v){a=v,x(o,a)},"setClearAlpha"),render:g,addToRenderList:_,dispose:b}}u(gP,"WebGLBackground");function xP(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(D,U,X,O,Y){let Q=!1,z=f(D,O,X,U);r!==z&&(r=z,c(r.object)),Q=m(D,O,X,Y),Q&&g(D,O,X,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(D,U,X,O),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}u(a,"setup");function l(){return s.createVertexArray()}u(l,"createVertexArrayObject");function c(D){return s.bindVertexArray(D)}u(c,"bindVertexArrayObject");function h(D){return s.deleteVertexArray(D)}u(h,"deleteVertexArrayObject");function f(D,U,X,O){let Y=O.wireframe===!0,Q=n[U.id];Q===void 0&&(Q={},n[U.id]=Q);let z=D.isInstancedMesh===!0?D.id:0,$=Q[z];$===void 0&&($={},Q[z]=$);let q=$[X.id];q===void 0&&(q={},$[X.id]=q);let J=q[Y];return J===void 0&&(J=d(l()),q[Y]=J),J}u(f,"getBindingState");function d(D){let U=[],X=[],O=[];for(let Y=0;Y<t;Y++)U[Y]=0,X[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:O,object:D,attributes:{},index:null}}u(d,"createBindingState");function m(D,U,X,O){let Y=r.attributes,Q=U.attributes,z=0,$=X.getAttributes();for(let q in $)if($[q].location>=0){let ee=Y[q],pe=Q[q];if(pe===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;z++}return r.attributesNum!==z||r.index!==O}u(m,"needsUpdate");function g(D,U,X,O){let Y={},Q=U.attributes,z=0,$=X.getAttributes();for(let q in $)if($[q].location>=0){let ee=Q[q];ee===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),Y[q]=pe,z++}r.attributes=Y,r.attributesNum=z,r.index=O}u(g,"saveCache");function _(){let D=r.newAttributes;for(let U=0,X=D.length;U<X;U++)D[U]=0}u(_,"initAttributes");function x(D){b(D,0)}u(x,"enableAttribute");function b(D,U){let X=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;X[D]=1,O[D]===0&&(s.enableVertexAttribArray(D),O[D]=1),Y[D]!==U&&(s.vertexAttribDivisor(D,U),Y[D]=U)}u(b,"enableAttributeAndDivisor");function v(){let D=r.newAttributes,U=r.enabledAttributes;for(let X=0,O=U.length;X<O;X++)U[X]!==D[X]&&(s.disableVertexAttribArray(X),U[X]=0)}u(v,"disableUnusedAttributes");function S(D,U,X,O,Y,Q,z){z===!0?s.vertexAttribIPointer(D,U,X,Y,Q):s.vertexAttribPointer(D,U,X,O,Y,Q)}u(S,"vertexAttribPointer");function M(D,U,X,O){_();let Y=O.attributes,Q=X.getAttributes(),z=U.defaultAttributeValues;for(let $ in Q){let q=Q[$];if(q.location>=0){let J=Y[$];if(J===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let ee=J.normalized,pe=J.itemSize,ge=e.get(J);if(ge===void 0)continue;let j=ge.buffer,xe=ge.type,se=ge.bytesPerElement,fe=xe===s.INT||xe===s.UNSIGNED_INT||J.gpuType===hf;if(J.isInterleavedBufferAttribute){let ae=J.data,Be=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Qe=J.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let De=0;De<q.locationSize;De++)b(q.location+De,ae.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<q.locationSize;De++)x(q.location+De);s.bindBuffer(s.ARRAY_BUFFER,j);for(let De=0;De<q.locationSize;De++)S(q.location+De,pe/q.locationSize,xe,ee,Be*se,(Qe+pe/q.locationSize*De)*se,fe)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)b(q.location+ae,J.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<q.locationSize;ae++)x(q.location+ae);s.bindBuffer(s.ARRAY_BUFFER,j);for(let ae=0;ae<q.locationSize;ae++)S(q.location+ae,pe/q.locationSize,xe,ee,pe*se,pe/q.locationSize*ae*se,fe)}}else if(z!==void 0){let ee=z[$];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(q.location,ee);break;case 3:s.vertexAttrib3fv(q.location,ee);break;case 4:s.vertexAttrib4fv(q.location,ee);break;default:s.vertexAttrib1fv(q.location,ee)}}}}v()}u(M,"setupVertexAttributes");function A(){L();for(let D in n){let U=n[D];for(let X in U){let O=U[X];for(let Y in O){let Q=O[Y];for(let z in Q)h(Q[z].object),delete Q[z];delete O[Y]}}delete n[D]}}u(A,"dispose");function E(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let X in U){let O=U[X];for(let Y in O){let Q=O[Y];for(let z in Q)h(Q[z].object),delete Q[z];delete O[Y]}}delete n[D.id]}u(E,"releaseStatesOfGeometry");function y(D){for(let U in n){let X=n[U];for(let O in X){let Y=X[O];if(Y[D.id]===void 0)continue;let Q=Y[D.id];for(let z in Q)h(Q[z].object),delete Q[z];delete Y[D.id]}}}u(y,"releaseStatesOfProgram");function w(D){for(let U in n){let X=n[U],O=D.isInstancedMesh===!0?D.id:0,Y=X[O];if(Y!==void 0){for(let Q in Y){let z=Y[Q];for(let $ in z)h(z[$].object),delete z[$];delete Y[Q]}delete X[O],Object.keys(X).length===0&&delete n[U]}}}u(w,"releaseStatesOfObject");function L(){P(),o=!0,r!==i&&(r=i,c(r.object))}u(L,"reset");function P(){i.geometry=null,i.program=null,i.wireframe=!1}return u(P,"resetDefaultState"),{setup:a,reset:L,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}u(xP,"WebGLBindingStates");function bP(s,e,t){let n;function i(l){n=l}u(i,"setMode");function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}u(r,"render");function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}u(o,"renderInstances");function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,n,1)}u(a,"renderMultiDraw"),this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}u(bP,"WebGLBufferRenderer");function yP(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}u(r,"getMaxAnisotropy");function o(y){return!(y!==Xn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(y){let w=y===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Mn&&y!==ni&&!w&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}u(a,"textureTypeReadable");function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:E}}u(yP,"WebGLCapabilities");function _P(s){let e=this,t=null,n=0,i=!1,r=!1,o=new kn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,b=s.get(f);if(!i||g===null||g.length===0||r&&!x)r?h(null):c();else{let v=r?0:n,S=v*4,M=b.clippingState||null;l.value=M,M=h(g,d,S,m);for(let A=0;A!==S;++A)M[A]=t[A];b.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(f,d,m,g){let _=f!==null?f.length:0,x=null;if(_!==0){if(x=l.value,g!==!0||x===null){let b=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<b)&&(x=new Float32Array(b));for(let S=0,M=m;S!==_;++S,M+=4)o.copy(f[S]).applyMatrix4(v,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}u(h,"projectPlanes")}u(_P,"WebGLClipping");var Rx=class Rx extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ls(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:zo});r.uniforms.tEquirect.value=t;let o=new pt(i,r),a=t.minFilter;return t.minFilter===vn&&(t.minFilter=zt),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};u(Rx,"WebGLCubeRenderTarget");var Mu=Rx,qM=256,vP=3,MP=20,mS=256,gS=16,SP=3,wP=new H,EP=new Pe,ip=class ip{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ml(1,10,null),this._boxMesh=new pt(new ls(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=wP}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(EP));let x=new ml(n,i,h);return x.position.copy(a),x.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=KM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$M(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qM,T0(e))}_fromTexture(e,t){e.mapping===Vo||e.mapping===bl?this._setSize(e.image.length===0?qM:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=YM(e,!1,!1),n=Math.log2(e)-vP;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=YM(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vo||e.mapping===bl?(this._cubemapMaterial===null&&(this._cubemapMaterial=KM()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$M()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=TP(),this._integrationMaterial=AP());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/gS);for(let o=0;o<=n;o++){let a=ip.lodToRoughness(o,n);if(o>n-SP)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(mS*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=RP());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};u(ip,"PMREMGenerator");var tp=ip;function YM(s,e,t){return new Mu(s,{minFilter:vn,generateMipmaps:e,type:ii,colorSpace:Pn,depthBuffer:t})}u(YM,"_createRenderTarget");function Su(s,e,t){return new Ln({name:s,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:Dn,blending:zo,depthTest:!1,depthWrite:!1})}u(Su,"_getMaterial");function TP(){return Su("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mS}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}u(TP,"_getGGXMaterial");function AP(){return Su("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gS}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}u(AP,"_getIntegrationMaterial");function RP(){return Su("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${MP}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}u(RP,"_getBlurMaterial");function $M(){return Su("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}u($M,"_getEquirectMaterial");function KM(){return Su("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}u(KM,"_getCubemapMaterial");function CP(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?o(d):r(d)}u(i,"get");function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===lf||m===cf)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new Mu(g.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}u(r,"getCube");function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===lf||m===cf,_=m===Vo||m===bl;if(g||_){let x=t.get(d),b=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==b)return n===null&&(n=new tp(s)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new tp(s)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}u(o,"getPMREM");function a(d,m){return m===lf?d.mapping=Vo:m===cf&&(d.mapping=bl),d}u(a,"mapTextureMapping");function l(d){let m=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&m++;return m===g}u(l,"isCubeTextureComplete");function c(d){let m=d.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}u(c,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}u(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return u(f,"dispose"),{get:i,dispose:f}}u(CP,"WebGLEnvironments");function PP(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return u(t,"getExtension"),{has:u(function(n){return t(n)!==null},"has"),init:u(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:u(function(n){let i=t(n);return i===null&&Co("WebGLRenderer: "+n+" extension not supported."),i},"get")}}u(PP,"WebGLExtensions");function IP(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}u(a,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}u(l,"destroyGeometry");function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}u(c,"get");function h(g){let _=g.attributes;for(let x in _)e.update(_[x],s.ARRAY_BUFFER)}u(h,"update");function f(g){let _=g.index,x=g.attributes.position,b=0;if(x===void 0)return;let v=_!==null?_.array.length:x.array.length/3-1,S=x.count>=65535?Wc:Hc,M=new S(Math.ceil(v/3)*6,1),A=M.array;if(_!==null){let y=_.array;b=_.version;for(let w=0,L=0;w<v;w+=3){let P=y[w+0],D=y[w+1],U=y[w+2];A[L++]=P,A[L++]=D,A[L++]=D,A[L++]=U,A[L++]=U,A[L++]=P}}else{b=x.version;for(let y=0,w=0;y<v;y+=3){let L=y+0,P=y+1,D=y+2;A[w++]=L,A[w++]=P,A[w++]=P,A[w++]=D,A[w++]=D,A[w++]=L}}M.version=b;let E=r.get(g);E&&e.remove(E),r.set(g,M)}u(f,"updateWireframeAttribute");function d(g){let _=r.get(g);if(_){let x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return r.get(g)}u(d,"getWireframeAttribute");function m(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return u(m,"dispose"),{get:c,update:h,getWireframeAttribute:d,dispose:m}}u(IP,"WebGLGeometries");function LP(s,e,t){let n;function i(f){n=f}u(i,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}u(a,"setIndex");function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}u(l,"render");function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}u(c,"renderInstances");function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];t.update(_,n,1)}u(h,"renderMultiDraw"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}u(LP,"WebGLIndexedBufferRenderer");function NP(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(NP,"WebGLInfo");function DP(s,e,t){let n=new WeakMap,i=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let P=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",P)};var m=P;u(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let y=new Float32Array(A*E*4*f),w=new No(y,A,E,f);w.type=ni,w.needsUpdate=!0;let L=M*4;for(let D=0;D<f;D++){let U=b[D],X=v[D],O=S[D],Y=A*E*4*D;for(let Q=0;Q<U.count;Q++){let z=Q*L;g===!0&&(i.fromBufferAttribute(U,Q),y[Y+z+0]=i.x,y[Y+z+1]=i.y,y[Y+z+2]=i.z,y[Y+z+3]=0),_===!0&&(i.fromBufferAttribute(X,Q),y[Y+z+4]=i.x,y[Y+z+5]=i.y,y[Y+z+6]=i.z,y[Y+z+7]=0),x===!0&&(i.fromBufferAttribute(O,Q),y[Y+z+8]=i.x,y[Y+z+9]=i.y,y[Y+z+10]=i.z,y[Y+z+11]=O.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new We(A,E)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return u(r,"update"),{update:r}}u(DP,"WebGLMorphtargets");function OP(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}u(o,"update");function a(){r=new WeakMap}u(a,"dispose");function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return u(l,"onInstancedMeshDispose"),{update:o,dispose:a}}u(OP,"WebGLObjects");var UP={[o0]:"LINEAR_TONE_MAPPING",[a0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[du]:"ACES_FILMIC_TONE_MAPPING",[u0]:"AGX_TONE_MAPPING",[h0]:"NEUTRAL_TONE_MAPPING",[c0]:"CUSTOM_TONE_MAPPING"};function FP(s,e,t,n,i,r){let o=new jn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Rt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let f=new Pd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pt(h,f),m=new Bo(-1,1,1,-1,0,1),g=null,_=null,x=!1,b,v=null,S=[],M=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(A,E)}},this.setEffects=function(A){S=A,M=S.length>0&&S[0].isRenderPass===!0;let E=o.width,y=o.height;S.length>0&&a===null&&(a=new jn(E,y,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new jn(E,y,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&S.some(L=>L.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new js(E,y),r===!0&&(c.format=or,c.type=Wo)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let L=0;L<S.length;L++){let P=S[L];P.setSize&&P.setSize(E,y),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,E){if(x||A.toneMapping===ds&&S.length===0)return!1;if(v=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return M===!1&&A.setRenderTarget(o),b=A.toneMapping,A.toneMapping=ds,!0},this.hasRenderPass=function(){return M},this.end=function(A,E){A.toneMapping=b,x=!0;let y=o,w=a;for(let L=0;L<S.length;L++){let P=S[L];P.enabled!==!1&&(P.render(A,w,y,E),P.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(g!==A.outputColorSpace||_!==A.toneMapping){g=A.outputColorSpace,_=A.toneMapping,f.defines={},ft.getTransfer(g)===Et&&(f.defines.SRGB_TRANSFER="");let L=UP[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(v),A.render(d,m),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}u(FP,"WebGLOutput");var xS=new Qt,bS=new js(1,1),yS=new jc(1),_S=new No,vS=new Ed,MS=new Jc,ZM=[],JM=[],jM=new Float32Array(16),QM=new Float32Array(9),eS=new Float32Array(4);function Sl(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=ZM[i];if(r===void 0&&(r=new Float32Array(i),ZM[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}u(Sl,"flatten");function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}u(nn,"arraysEqual");function sn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}u(sn,"copyArray");function sp(s,e){let t=JM[e];t===void 0&&(t=new Int32Array(e),JM[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}u(sp,"allocTexUnits");function BP(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}u(BP,"setValueV1f");function kP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}u(kP,"setValueV2f");function zP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}u(zP,"setValueV3f");function GP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}u(GP,"setValueV4f");function VP(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;eS.set(n),s.uniformMatrix2fv(this.addr,!1,eS),sn(t,n)}}u(VP,"setValueM2");function HP(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;QM.set(n),s.uniformMatrix3fv(this.addr,!1,QM),sn(t,n)}}u(HP,"setValueM3");function WP(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;jM.set(n),s.uniformMatrix4fv(this.addr,!1,jM),sn(t,n)}}u(WP,"setValueM4");function XP(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}u(XP,"setValueV1i");function qP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}u(qP,"setValueV2i");function YP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}u(YP,"setValueV3i");function $P(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}u($P,"setValueV4i");function KP(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}u(KP,"setValueV1ui");function ZP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}u(ZP,"setValueV2ui");function JP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}u(JP,"setValueV3ui");function jP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}u(jP,"setValueV4ui");function rp(s){return s.version===0&&(s.compareFunction=M0,s.needsUpdate=!0),s}u(rp,"initShadowTexture");function QP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=rp(bS):r=xS,t.setTexture2D(e||r,i)}u(QP,"setValueT1");function e2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vS,i)}u(e2,"setValueT3D1");function t2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=rp(yS):r=MS,t.setTextureCube(e||r,i)}u(t2,"setValueT6");function n2(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_S,i)}u(n2,"setValueT2DArray1");function i2(s){switch(s){case 5126:return BP;case 35664:return kP;case 35665:return zP;case 35666:return GP;case 35674:return VP;case 35675:return HP;case 35676:return WP;case 5124:case 35670:return XP;case 35667:case 35671:return qP;case 35668:case 35672:return YP;case 35669:case 35673:return $P;case 5125:return KP;case 36294:return ZP;case 36295:return JP;case 36296:return jP;case 35678:case 36198:case 36298:case 36306:case 35682:return QP;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}u(i2,"getSingularSetter");function s2(s,e){s.uniform1fv(this.addr,e)}u(s2,"setValueV1fArray");function r2(s,e){let t=Sl(e,this.size,2);s.uniform2fv(this.addr,t)}u(r2,"setValueV2fArray");function o2(s,e){let t=Sl(e,this.size,3);s.uniform3fv(this.addr,t)}u(o2,"setValueV3fArray");function a2(s,e){let t=Sl(e,this.size,4);s.uniform4fv(this.addr,t)}u(a2,"setValueV4fArray");function l2(s,e){let t=Sl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}u(l2,"setValueM2Array");function c2(s,e){let t=Sl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}u(c2,"setValueM3Array");function u2(s,e){let t=Sl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}u(u2,"setValueM4Array");function h2(s,e){s.uniform1iv(this.addr,e)}u(h2,"setValueV1iArray");function d2(s,e){s.uniform2iv(this.addr,e)}u(d2,"setValueV2iArray");function f2(s,e){s.uniform3iv(this.addr,e)}u(f2,"setValueV3iArray");function p2(s,e){s.uniform4iv(this.addr,e)}u(p2,"setValueV4iArray");function m2(s,e){s.uniform1uiv(this.addr,e)}u(m2,"setValueV1uiArray");function g2(s,e){s.uniform2uiv(this.addr,e)}u(g2,"setValueV2uiArray");function x2(s,e){s.uniform3uiv(this.addr,e)}u(x2,"setValueV3uiArray");function b2(s,e){s.uniform4uiv(this.addr,e)}u(b2,"setValueV4uiArray");function y2(s,e,t){let n=this.cache,i=e.length,r=sp(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=rp(bS):o=xS;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}u(y2,"setValueT1Array");function _2(s,e,t){let n=this.cache,i=e.length,r=sp(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vS,r[o])}u(_2,"setValueT3DArray");function v2(s,e,t){let n=this.cache,i=e.length,r=sp(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=rp(yS):o=MS;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}u(v2,"setValueT6Array");function M2(s,e,t){let n=this.cache,i=e.length,r=sp(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||_S,r[o])}u(M2,"setValueT2DArrayArray");function S2(s){switch(s){case 5126:return s2;case 35664:return r2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return c2;case 35676:return u2;case 5124:case 35670:return h2;case 35667:case 35671:return d2;case 35668:case 35672:return f2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return x2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return M2}}u(S2,"getPureArraySetter");var Cx=class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i2(t.type)}};u(Cx,"SingleUniform");var _x=Cx,Px=class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S2(t.type)}};u(Px,"PureArrayUniform");var vx=Px,Ix=class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}};u(Ix,"StructuredUniform");var Mx=Ix,bx=/(\w+)(\])?(\[|\.)?/g;function tS(s,e){s.seq.push(e),s.map[e.id]=e}u(tS,"addUniform");function w2(s,e,t){let n=s.name,i=n.length;for(bx.lastIndex=0;;){let r=bx.exec(n),o=bx.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tS(t,c===void 0?new _x(a,s,e):new vx(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Mx(a),tS(t,f)),t=f}}}u(w2,"parseUniform");var Lx=class Lx{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);w2(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};u(Lx,"WebGLUniforms");var Ml=Lx;function nS(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}u(nS,"WebGLShader");var E2=37297,T2=0;function A2(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(A2,"handleSource");var iS=new je;function R2(s){ft._getMatrix(iS,ft.workingColorSpace,s);let e=`mat3( ${iS.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(s)){case kc:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}u(R2,"getEncodingComponents");function sS(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+A2(s.getShaderSource(e),a)}else return r}u(sS,"getShaderErrors");function C2(s,e){let t=R2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}u(C2,"getTexelEncodingFunction");var P2={[o0]:"Linear",[a0]:"Reinhard",[l0]:"Cineon",[du]:"ACESFilmic",[u0]:"AgX",[h0]:"Neutral",[c0]:"Custom"};function I2(s,e){let t=P2[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(I2,"getToneMappingFunction");var ep=new H;function L2(){ft.getLuminanceCoefficients(ep);let s=ep.x.toFixed(4),e=ep.y.toFixed(4),t=ep.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(L2,"getLuminanceFunction");function N2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vu).join(`
`)}u(N2,"generateVertexExtensions");function D2(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(D2,"generateDefines");function O2(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}u(O2,"fetchAttributeLocations");function vu(s){return s!==""}u(vu,"filterEmptyLine");function rS(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}u(rS,"replaceLightNums");function oS(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(oS,"replaceClippingPlaneNums");var U2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sx(s){return s.replace(U2,F2)}u(Sx,"resolveIncludes");function F2(s,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sx(t)}u(F2,"includeReplacer");var B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aS(s){return s.replace(B2,k2)}u(aS,"unrollLoops");function k2(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}u(k2,"loopReplacer");function lS(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}u(lS,"generatePrecision");var z2={[hu]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function G2(s){return z2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}u(G2,"generateShadowMapTypeDefine");var V2={[bl]:"ENVMAP_MODE_REFRACTION"};function H2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":V2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}u(H2,"generateEnvMapModeDefine");var W2={[r0]:"ENVMAP_BLENDING_MULTIPLY",[wM]:"ENVMAP_BLENDING_MIX",[EM]:"ENVMAP_BLENDING_ADD"};function X2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":W2[s.combine]||"ENVMAP_BLENDING_NONE"}u(X2,"generateEnvMapBlendingDefine");function q2(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=G2(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=H2(t),f=X2(t),d=N2(t),m=D2(r),g=i.createProgram(),_,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vu).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vu).join(`
`),x.length>0&&(x+=`
`)):(_=[lS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vu).join(`
`),x=[lS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?ct.tonemapping_pars_fragment:"",t.toneMapping!==ds?I2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,C2("linearToOutputTexel",t.outputColorSpace),L2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vu).join(`
`)),o=Sx(o),o=rS(o,t),o=oS(o,t),a=Sx(a),a=rS(a,t),a=oS(a,t),o=aS(o),a=aS(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===w0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===w0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=b+_+o,S=b+x+a,M=nS(i,i.VERTEX_SHADER,v),A=nS(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(M)||"",X=i.getShaderInfoLog(A)||"",O=D.trim(),Y=U.trim(),Q=X.trim(),z=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,A);else{let q=sS(i,M,"vertex"),J=sS(i,A,"fragment");Je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+q+`
`+J)}else O!==""?Xe("WebGLProgram: Program Info Log:",O):(Y===""||Q==="")&&($=!1);$&&(P.diagnostics={runnable:z,programLog:O,vertexShader:{log:Y,prefix:_},fragmentShader:{log:Q,prefix:x}})}i.deleteShader(M),i.deleteShader(A),y=new Ml(i,g),w=O2(i,g)}u(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,E2)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}u(q2,"WebGLProgram");var Y2=0,Nx=class Nx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}};u(Nx,"WebGLShaderCache");var wx=Nx,Dx=class Dx{constructor(e){this.id=Y2++,this.code=e,this.usedTimes=0}};u(Dx,"WebGLShaderStage");var Ex=Dx;function $2(s){return s===fs||s===xu||s===bu}u($2,"isPackedRGFormat");function K2(s,e,t,n,i,r){let o=new ol,a=new wx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}u(m,"getChannel");function g(y,w,L,P,D,U){let X=P.fog,O=D.geometry,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||Y,Q),$=d[y.type],q=n.precision;y.precision!==null&&(q=n.getMaxPrecision(y.precision),q!==y.precision&&Xe("WebGLProgram.getParameters:",y.precision,"not supported, using",q,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=J!==void 0?J.length:0,pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let ge,j,xe,se;if($){let Ne=gs[$];ge=Ne.vertexShader,j=Ne.fragmentShader}else{ge=y.vertexShader,j=y.fragmentShader;let Ne=a.getVertexShaderStage(y),Tt=a.getFragmentShaderStage(y);a.update(y,Ne,Tt),xe=Ne.id,se=Tt.id}let fe=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,Qe=D.isBatchedMesh===!0,De=!!y.map,ut=!!y.matcap,ht=!!z,et=ht&&z.isPMREMTexture===!0,Ct=!!y.aoMap,Ut=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,de=!!y.normalMap,he=!!y.displacementMap,me=!!y.emissiveMap,Me=!!y.metalnessMap,Ce=!!y.roughnessMap,Oe=y.anisotropy>0,B=y.clearcoat>0,at=y.diffuseRoughness>0,st=y.dispersion>0,tt=y.retroreflectivity>0,be=y.iridescence>0,dt=y.sheen>0,Ve=y.transmission>0,$e=Oe&&!!y.anisotropyMap,N=B&&!!y.clearcoatMap,T=B&&!!y.clearcoatNormalMap,W=B&&!!y.clearcoatRoughnessMap,ue=at&&!!y.diffuseRoughnessMap,ie=be&&!!y.iridescenceMap,_e=be&&!!y.iridescenceThicknessMap,Ae=dt&&!!y.sheenColorMap,re=dt&&!!y.sheenRoughnessMap,oe=!!y.specularMap,we=!!y.specularColorMap,F=!!y.specularIntensityMap,le=Ve&&!!y.transmissionMap,ne=Ve&&!!y.thicknessMap,Ee=!!y.gradientMap,ve=!!y.alphaMap,Se=y.alphaTest>0,qe=!!y.alphaHash,lt=!!y.extensions,ye=ds;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ye=s.toneMapping);let Ke=et?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,rt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:j,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:q,batching:Qe,batchingColor:Qe&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:ut,envMap:ht,envMapMode:ht&&z.mapping,envMapPMREM:et,envMapMaxLod:et?Ke.length-1:null,envMapSize:et?Ke[0].width:null,aoMap:Ct,lightMap:Ut,bumpMap:ce,normalMap:de,displacementMap:he,emissiveMap:me,normalMapObjectSpace:de&&y.normalMapType===IM,normalMapTangentSpace:de&&y.normalMapType===Zf,packedNormalMap:de&&y.normalMapType===Zf&&$2(y.normalMap.format),metalnessMap:Me,roughnessMap:Ce,anisotropy:Oe,anisotropyMap:$e,clearcoat:B,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:W,diffuseRoughness:at,diffuseRoughnessMap:ue,dispersion:st,retroreflection:tt,iridescence:be,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:dt,sheenColorMap:Ae,sheenRoughnessMap:re,specularMap:oe,specularColorMap:we,specularIntensityMap:F,transmission:Ve,transmissionMap:le,thicknessMap:ne,gradientMap:Ee,opaque:y.transparent===!1&&y.blending===xl&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:qe,combine:y.combine,mapUv:De&&m(y.map.channel),aoMapUv:Ct&&m(y.aoMap.channel),lightMapUv:Ut&&m(y.lightMap.channel),bumpMapUv:ce&&m(y.bumpMap.channel),normalMapUv:de&&m(y.normalMap.channel),displacementMapUv:he&&m(y.displacementMap.channel),emissiveMapUv:me&&m(y.emissiveMap.channel),metalnessMapUv:Me&&m(y.metalnessMap.channel),roughnessMapUv:Ce&&m(y.roughnessMap.channel),anisotropyMapUv:$e&&m(y.anisotropyMap.channel),clearcoatMapUv:N&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:re&&m(y.sheenRoughnessMap.channel),specularMapUv:oe&&m(y.specularMap.channel),specularColorMapUv:we&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:le&&m(y.transmissionMap.channel),thicknessMapUv:ne&&m(y.thicknessMap.channel),alphaMapUv:ve&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(de||Oe),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(De||ve),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&de===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:me&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}u(g,"getParameters");function _(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)w.push(L),w.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(w,y),b(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}u(_,"getProgramCacheKey");function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}u(x,"getProgramCacheKeyParameters");function b(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}u(b,"getProgramCacheKeyBooleans");function v(y){let w=d[y.type],L;if(w){let P=gs[w];L=qo.clone(P.uniforms)}else L=y.uniforms;return L}u(v,"getUniforms");function S(y,w){let L=h.get(w);return L!==void 0?++L.usedTimes:(L=new q2(s,w,y,i),c.push(L),h.set(w,L)),L}u(S,"acquireProgram");function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}u(M,"releaseProgram");function A(y){a.remove(y)}u(A,"releaseShaderCache");function E(){a.dispose()}return u(E,"dispose"),{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:E}}u(K2,"WebGLPrograms");function Z2(){let s=new WeakMap;function e(o){return s.has(o)}u(e,"has");function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}u(t,"get");function n(o){s.delete(o)}u(n,"remove");function i(o,a,l){s.get(o)[a]=l}u(i,"update");function r(){s=new WeakMap}return u(r,"dispose"),{has:e,get:t,remove:n,update:i,dispose:r}}u(Z2,"WebGLProperties");function J2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}u(J2,"painterSortStable");function cS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}u(cS,"reversePainterSortStable");function uS(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}u(r,"init");function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}u(o,"materialVariant");function a(d,m,g,_,x,b){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:x,group:b},s[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=x,v.group=b),e++,v}u(a,"getNextRenderItem");function l(d,m,g,_,x,b,v){v.reversedDepth===!0&&(x=-x);let S=a(d,m,g,_,x,b);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}u(l,"push");function c(d,m,g,_,x,b){let v=a(d,m,g,_,x,b);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}u(c,"unshift");function h(d,m){t.length>1&&t.sort(d||J2),n.length>1&&n.sort(m||cS),i.length>1&&i.sort(m||cS)}u(h,"sort");function f(){for(let d=e,m=s.length;d<m;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return u(f,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}u(uS,"WebGLRenderList");function j2(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new uS,s.set(n,[o])):i>=r.length?(o=new uS,r.push(o)):o=r[i],o}u(e,"get");function t(){s=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(j2,"WebGLRenderLists");function Q2(){let s={};return{get:u(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Pe};break;case"SpotLight":t={position:new H,direction:new H,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t},"get")}}u(Q2,"UniformsCache");function eI(){let s={};return{get:u(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t},"get")}}u(eI,"ShadowUniformsCache");var tI=0;function nI(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}u(nI,"shadowCastingAndTexturingLightsFirst");function iI(s){let e=new Q2,t=eI(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Ze,o=new Ze;function a(c){let h=0,f=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,_=0,x=0,b=0,v=0,S=0,M=0,A=0,E=0,y=0,w=0,L=0,P=0;c.sort(nI);for(let U=0,X=c.length;U<X;U++){let O=c[U],Y=O.color,Q=O.intensity,z=O.distance,$=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===fs?$=O.shadow.map.texture:$=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=Y.r*Q,f+=Y.g*Q,d+=Y.b*Q;else if(O.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(O.sh.coefficients[q],Q);P++}else if(O.isSunLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,ee=t.get(O);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=$;let pe=J.getViewportCount();for(let ge=0;ge<pe;ge++)n.sunShadowMatrix[_+ge]=J.getMatrix(ge),n.sunShadowCascade[_+ge]=J._cascadeData[ge];_+=pe,g++}n.sun[m]=q,m++}else if(O.isDirectionalLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,ee=t.get(O);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[x]=ee,n.directionalShadowMap[x]=$,n.directionalShadowMatrix[x]=O.shadow.matrix,A++}n.directional[x]=q,x++}else if(O.isSpotLight){let q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(Y).multiplyScalar(Q),q.distance=z,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,n.spot[v]=q;let J=O.shadow;if(O.map&&(n.spotLightMap[w]=O.map,w++,J.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[v]=J.matrix,O.castShadow){let ee=t.get(O);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=$,y++}v++}else if(O.isRectAreaLight){let q=e.get(O);q.color.copy(Y).multiplyScalar(Q),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),n.rectArea[S]=q,S++}else if(O.isPointLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),q.distance=O.distance,q.decay=O.decay,O.castShadow){let J=O.shadow,ee=t.get(O);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[b]=ee,n.pointShadowMap[b]=$,n.pointShadowMatrix[b]=O.shadow.matrix,E++}n.point[b]=q,b++}else if(O.isHemisphereLight){let q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(Q),q.groundColor.copy(O.groundColor).multiplyScalar(Q),n.hemi[M]=q,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==m||D.directionalLength!==x||D.pointLength!==b||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=x,n.spot.length=v,n.rectArea.length=S,n.point.length=b,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,D.sunLength=m,D.directionalLength=x,D.pointLength=b,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=P,n.version=tI++)}u(a,"setup");function l(c,h){let f=0,d=0,m=0,g=0,_=0,x=0,b=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(b),f++}else if(M.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(b),d++}else if(M.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(b),g++}else if(M.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),o.identity(),r.copy(M.matrixWorld),r.premultiply(b),o.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),m++}else if(M.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(b),x++}}}return u(l,"setupView"),{setup:a,setupView:l,state:n}}u(iI,"WebGLLights");function hS(s){let e=new iI(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}u(r,"init");function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}u(o,"pushLight");function a(f){n.push(f)}u(a,"pushShadow");function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}u(l,"setupLights");function c(f){e.setupView(t,f)}u(c,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(hS,"WebGLRenderState");function sI(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new hS(s),e.set(i,[a])):r>=o.length?(a=new hS(s),o.push(a)):a=o[r],a}u(t,"get");function n(){e=new WeakMap}return u(n,"dispose"),{get:t,dispose:n}}u(sI,"WebGLRenderStates");var rI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aI=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],lI=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],dS=new Ze,_u=new H,yx=new H;function cI(s,e,t){let n=new Br,i=new We,r=new We,o=new At,a=new Id,l=new Ld,c={},h=t.maxTextureSize,f={[vi]:Dn,[Dn]:vi,[tn]:tn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:rI,fragmentShader:oI}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let b=this.type;this.render=function(E,y,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===af&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hu);let L=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(zo),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let X=b!==this.type;X&&y.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Y=>Y.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Y=E.length;O<Y;O++){let Q=E[O],z=Q.shadow;if(z===void 0){Xe("WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let $=z.getFrameExtents();i.multiply($),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,z.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===gl){if(Q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new jn(i.x,i.y,{format:fs,type:ii,minFilter:zt,magFilter:zt,generateMipmaps:!1}),z.map.texture.name=Q.name+".shadowMap",z.map.depthTexture=new js(i.x,i.y,ni),z.map.depthTexture.name=Q.name+".shadowMapDepth",z.map.depthTexture.format=Zs,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt}else Q.isPointLight?(z.map=new Mu(i.x),z.map.depthTexture=new jc(i.x,Vi)):(z.map=new jn(i.x,i.y),z.map.depthTexture=new js(i.x,i.y,Vi)),z.map.depthTexture.name=Q.name+".shadowMap",z.map.depthTexture.format=Zs,this.type===hu?(z.map.depthTexture.compareFunction=q?v0:_0,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Q.isPointLight!==!0&&z.updateMatrices(Q,w);let ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:w.layers;for(let pe=0;pe<J;pe++){let ge=z.getCamera(pe);if(Q.isPointLight){let j=z.camera,xe=z.matrix,se=Q.distance||j.far;se!==j.far&&(j.far=se,j.updateProjectionMatrix()),_u.setFromMatrixPosition(Q.matrixWorld),j.position.copy(_u),yx.copy(j.position),yx.add(aI[pe]),j.up.copy(lI[pe]),j.lookAt(yx),j.updateMatrixWorld(),xe.makeTranslation(-_u.x,-_u.y,-_u.z),dS.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(dS,j.coordinateSystem,j.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,pe),s.clear();else{pe===0&&(s.setRenderTarget(z.map),s.clear());let j=z.getViewport(pe);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o)}n=z.getFrustum(pe),M(y,w,ge,Q,ee,this.type)}z.isPointLightShadow!==!0&&this.type===gl&&v(z,w),z.needsUpdate=!1}b=this.type,x.needsUpdate=!1,s.setRenderTarget(L,P,D)};function v(E,y){let w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(i.x,i.y,{format:fs,type:ii}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,w,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,w,m,_,null)}u(v,"VSMPass");function S(E,y,w,L){let P=null,D=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=w.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let U=P.uuid,X=y.uuid,O=c[U];O===void 0&&(O={},c[U]=O);let Y=O[X];Y===void 0&&(Y=P.clone(),O[X]=Y,y.addEventListener("dispose",A)),P=Y}if(P.visible=y.visible,P.wireframe=y.wireframe,L===gl?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:f[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=w}return P}u(S,"getDepthMaterial");function M(E,y,w,L,P,D){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===gl)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let O=e.update(E),Y=E.material;if(Array.isArray(Y)){let Q=O.groups;for(let z=0,$=Q.length;z<$;z++){let q=Q[z],J=Y[q.materialIndex];if(J&&J.visible){let ee=S(E,J,L,D);E.onBeforeShadow(s,E,y,w,O,ee,q),s.renderBufferDirect(w,null,O,ee,E,q),E.onAfterShadow(s,E,y,w,O,ee,q)}}}else if(Y.visible){let Q=S(E,Y,L,D);E.onBeforeShadow(s,E,y,w,O,Q,null),s.renderBufferDirect(w,null,O,Q,E,null),E.onAfterShadow(s,E,y,w,O,Q,null)}}let X=E.children;for(let O=0,Y=X.length;O<Y;O++)M(X[O],y,w,L,P,D)}u(M,"renderObject");function A(E){E.target.removeEventListener("dispose",A);for(let w in c){let L=c[w],P=E.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}u(A,"onMaterialDispose")}u(cI,"WebGLShadowMap");function uI(s,e){function t(){let F=!1,le=new At,ne=null,Ee=new At(0,0,0,0);return{setMask:u(function(ve){ne!==ve&&!F&&(s.colorMask(ve,ve,ve,ve),ne=ve)},"setMask"),setLocked:u(function(ve){F=ve},"setLocked"),setClear:u(function(ve,Se,qe,lt,ye){ye===!0&&(ve*=lt,Se*=lt,qe*=lt),le.set(ve,Se,qe,lt),Ee.equals(le)===!1&&(s.clearColor(ve,Se,qe,lt),Ee.copy(le))},"setClear"),reset:u(function(){F=!1,ne=null,Ee.set(-1,0,0,0)},"reset")}}u(t,"ColorBuffer");function n(){let F=!1,le=!1,ne=null,Ee=null,ve=null;return{setReversed:u(function(Se){if(le!==Se){let qe=e.get("EXT_clip_control");Se?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),le=Se;let lt=ve;ve=null,this.setClear(lt)}},"setReversed"),getReversed:u(function(){return le},"getReversed"),setTest:u(function(Se){Se?ae(s.DEPTH_TEST):Be(s.DEPTH_TEST)},"setTest"),setMask:u(function(Se){ne!==Se&&!F&&(s.depthMask(Se),ne=Se)},"setMask"),setFunc:u(function(Se){if(le&&(Se=GM[Se]),Ee!==Se){switch(Se){case gd:s.depthFunc(s.NEVER);break;case xd:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case el:s.depthFunc(s.LEQUAL);break;case yd:s.depthFunc(s.EQUAL);break;case _d:s.depthFunc(s.GEQUAL);break;case vd:s.depthFunc(s.GREATER);break;case Md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=Se}},"setFunc"),setLocked:u(function(Se){F=Se},"setLocked"),setClear:u(function(Se){ve!==Se&&(ve=Se,le&&(Se=1-Se),s.clearDepth(Se))},"setClear"),reset:u(function(){F=!1,ne=null,Ee=null,ve=null,le=!1},"reset")}}u(n,"DepthBuffer");function i(){let F=!1,le=null,ne=null,Ee=null,ve=null,Se=null,qe=null,lt=null,ye=null;return{setTest:u(function(Ke){F||(Ke?ae(s.STENCIL_TEST):Be(s.STENCIL_TEST))},"setTest"),setMask:u(function(Ke){le!==Ke&&!F&&(s.stencilMask(Ke),le=Ke)},"setMask"),setFunc:u(function(Ke,rt,Ne){(ne!==Ke||Ee!==rt||ve!==Ne)&&(s.stencilFunc(Ke,rt,Ne),ne=Ke,Ee=rt,ve=Ne)},"setFunc"),setOp:u(function(Ke,rt,Ne){(Se!==Ke||qe!==rt||lt!==Ne)&&(s.stencilOp(Ke,rt,Ne),Se=Ke,qe=rt,lt=Ne)},"setOp"),setLocked:u(function(Ke){F=Ke},"setLocked"),setClear:u(function(Ke){ye!==Ke&&(s.clearStencil(Ke),ye=Ke)},"setClear"),reset:u(function(){F=!1,le=null,ne=null,Ee=null,ve=null,Se=null,qe=null,lt=null,ye=null},"reset")}}u(i,"StencilBuffer");let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},f={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,S=null,M=null,A=null,E=null,y=null,w=new Pe(0,0,0),L=0,P=!1,D=null,U=null,X=null,O=null,Y=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,$=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=$>=2);let J=null,ee={},pe=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),j=new At().fromArray(pe),xe=new At().fromArray(ge);function se(F,le,ne,Ee){let ve=new Uint8Array(4),Se=s.createTexture();s.bindTexture(F,Se),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ne;qe++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(le+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Se}u(se,"createTexture");let fe={};fe[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(el),ce(!1),de(Qm),ae(s.CULL_FACE),Ct(zo);function ae(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}u(ae,"enable");function Be(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}u(Be,"disable");function Qe(F,le){return d[F]!==le?(s.bindFramebuffer(F,le),d[F]=le,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le),!0):!1}u(Qe,"bindFramebuffer");function De(F,le){let ne=g,Ee=!1;if(F){ne=m.get(le),ne===void 0&&(ne=[],m.set(le,ne));let ve=F.textures;if(ne.length!==ve.length||ne[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,qe=ve.length;Se<qe;Se++)ne[Se]=s.COLOR_ATTACHMENT0+Se;ne.length=ve.length,Ee=!0}}else ne[0]!==s.BACK&&(ne[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(ne)}u(De,"drawBuffers");function ut(F){return _!==F?(s.useProgram(F),_=F,!0):!1}u(ut,"useProgram");let ht={[Go]:s.FUNC_ADD,[aM]:s.FUNC_SUBTRACT,[lM]:s.FUNC_REVERSE_SUBTRACT};ht[cM]=s.MIN,ht[uM]=s.MAX;let et={[hM]:s.ZERO,[dM]:s.ONE,[fM]:s.SRC_COLOR,[i0]:s.SRC_ALPHA,[yM]:s.SRC_ALPHA_SATURATE,[xM]:s.DST_COLOR,[mM]:s.DST_ALPHA,[pM]:s.ONE_MINUS_SRC_COLOR,[s0]:s.ONE_MINUS_SRC_ALPHA,[bM]:s.ONE_MINUS_DST_COLOR,[gM]:s.ONE_MINUS_DST_ALPHA,[_M]:s.CONSTANT_COLOR,[vM]:s.ONE_MINUS_CONSTANT_COLOR,[MM]:s.CONSTANT_ALPHA,[SM]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(F,le,ne,Ee,ve,Se,qe,lt,ye,Ke){if(F===zo){x===!0&&(Be(s.BLEND),x=!1);return}if(x===!1&&(ae(s.BLEND),x=!0),F!==oM){if(F!==b||Ke!==P){if((v!==Go||A!==Go)&&(s.blendEquation(s.FUNC_ADD),v=Go,A=Go),Ke)switch(F){case xl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case e0:s.blendFunc(s.ONE,s.ONE);break;case t0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case n0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case e0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case t0:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n0:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}S=null,M=null,E=null,y=null,w.set(0,0,0),L=0,b=F,P=Ke}return}ve=ve||le,Se=Se||ne,qe=qe||Ee,(le!==v||ve!==A)&&(s.blendEquationSeparate(ht[le],ht[ve]),v=le,A=ve),(ne!==S||Ee!==M||Se!==E||qe!==y)&&(s.blendFuncSeparate(et[ne],et[Ee],et[Se],et[qe]),S=ne,M=Ee,E=Se,y=qe),(lt.equals(w)===!1||ye!==L)&&(s.blendColor(lt.r,lt.g,lt.b,ye),w.copy(lt),L=ye),b=F,P=!1}u(Ct,"setBlending");function Ut(F,le){F.side===tn?Be(s.CULL_FACE):ae(s.CULL_FACE);let ne=F.side===Dn;le&&(ne=!ne),ce(ne),F.blending===xl&&F.transparent===!1?Ct(zo):Ct(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}u(Ut,"setMaterial");function ce(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}u(ce,"setFlipSided");function de(F){F!==sM?(ae(s.CULL_FACE),F!==U&&(F===Qm?s.cullFace(s.BACK):F===rM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),U=F}u(de,"setCullFace");function he(F){F!==X&&(z&&s.lineWidth(F),X=F)}u(he,"setLineWidth");function me(F,le,ne){F?(ae(s.POLYGON_OFFSET_FILL),(O!==le||Y!==ne)&&(O=le,Y=ne,o.getReversed()&&(le=-le,ne=-ne),s.polygonOffset(le,ne))):Be(s.POLYGON_OFFSET_FILL)}u(me,"setPolygonOffset");function Me(F){F?ae(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}u(Me,"setScissorTest");function Ce(F){F===void 0&&(F=s.TEXTURE0+Q-1),J!==F&&(s.activeTexture(F),J=F)}u(Ce,"activeTexture");function Oe(F,le,ne){ne===void 0&&(J===null?ne=s.TEXTURE0+Q-1:ne=J);let Ee=ee[ne];Ee===void 0&&(Ee={type:void 0,texture:void 0},ee[ne]=Ee),(Ee.type!==F||Ee.texture!==le)&&(J!==ne&&(s.activeTexture(ne),J=ne),s.bindTexture(F,le||fe[F]),Ee.type=F,Ee.texture=le)}u(Oe,"bindTexture");function B(){let F=ee[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}u(B,"unbindTexture");function at(){try{s.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(at,"compressedTexImage2D");function st(){try{s.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(st,"compressedTexImage3D");function tt(){try{s.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(tt,"texSubImage2D");function be(){try{s.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(be,"texSubImage3D");function dt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(dt,"compressedTexSubImage2D");function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(Ve,"compressedTexSubImage3D");function $e(){try{s.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u($e,"texStorage2D");function N(){try{s.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(N,"texStorage3D");function T(){try{s.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(T,"texImage2D");function W(){try{s.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(W,"texImage3D");function ue(F){return f[F]!==void 0?f[F]:s.getParameter(F)}u(ue,"getParameter");function ie(F,le){f[F]!==le&&(s.pixelStorei(F,le),f[F]=le)}u(ie,"pixelStorei");function _e(F){j.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),j.copy(F))}u(_e,"scissor");function Ae(F){xe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),xe.copy(F))}u(Ae,"viewport");function re(F,le){let ne=c.get(le);ne===void 0&&(ne=new WeakMap,c.set(le,ne));let Ee=ne.get(F);Ee===void 0&&(Ee=s.getUniformBlockIndex(le,F.name),s.uniformBlockBinding(le,Ee,Ee),ne.set(F,Ee))}u(re,"updateUBOMapping");function oe(F,le,ne){let ve=c.get(le).get(F);l[ve]!==ne&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,ne),l[ve]=ne)}u(oe,"uniformBlockBinding");function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,ee={},d={},l={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,S=null,M=null,A=null,E=null,y=null,w=new Pe(0,0,0),L=0,P=!1,D=null,U=null,X=null,O=null,Y=null,j.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return u(we,"reset"),{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Be,bindFramebuffer:Qe,drawBuffers:De,useProgram:ut,setBlending:Ct,setMaterial:Ut,setFlipSided:ce,setCullFace:de,setLineWidth:he,setPolygonOffset:me,setScissorTest:Me,activeTexture:Ce,bindTexture:Oe,unbindTexture:B,compressedTexImage2D:at,compressedTexImage3D:st,texImage2D:T,texImage3D:W,pixelStorei:ie,getParameter:ue,updateUBOMapping:re,uniformBlockBinding:oe,texStorage2D:$e,texStorage3D:N,texSubImage2D:tt,texSubImage3D:be,compressedTexSubImage2D:dt,compressedTexSubImage3D:Ve,scissor:_e,viewport:Ae,reset:we}}u(uI,"WebGLState");function hI(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap,f=new Set,d,m=new WeakMap,g=new Set,_=new FinalizationRegistry(N=>g.delete(N)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return x?new OffscreenCanvas(N,T):il("canvas")}u(b,"createCanvas");function v(N,T,W){let ue=1,ie=$e(N);if((ie.width>W||ie.height>W)&&(ue=W/Math.max(ie.width,ie.height)),ue<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let _e=Math.floor(ue*ie.width),Ae=Math.floor(ue*ie.height);d===void 0&&(d=b(_e,Ae));let re=T?b(_e,Ae):d;return re.width=_e,re.height=Ae,re.getContext("2d").drawImage(N,0,0,_e,Ae),Xe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+_e+"x"+Ae+")."),re}else return"data"in N&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}u(v,"resizeImage");function S(N){return N.generateMipmaps}u(S,"textureNeedsGenerateMipmaps");function M(N){s.generateMipmap(N)}u(M,"generateMipmap");function A(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}u(A,"getTargetType");function E(N,T,W,ue,ie,_e=!1){if(N!==null){if(s[N]!==void 0)return s[N];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ae;ue&&(Ae=e.get("EXT_texture_norm16"),Ae||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=T;if(T===s.RED&&(W===s.FLOAT&&(re=s.R32F),W===s.HALF_FLOAT&&(re=s.R16F),W===s.UNSIGNED_BYTE&&(re=s.R8),W===s.UNSIGNED_SHORT&&Ae&&(re=Ae.R16_EXT),W===s.SHORT&&Ae&&(re=Ae.R16_SNORM_EXT)),T===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(re=s.R8UI),W===s.UNSIGNED_SHORT&&(re=s.R16UI),W===s.UNSIGNED_INT&&(re=s.R32UI),W===s.BYTE&&(re=s.R8I),W===s.SHORT&&(re=s.R16I),W===s.INT&&(re=s.R32I)),T===s.RG&&(W===s.FLOAT&&(re=s.RG32F),W===s.HALF_FLOAT&&(re=s.RG16F),W===s.UNSIGNED_BYTE&&(re=s.RG8),W===s.UNSIGNED_SHORT&&Ae&&(re=Ae.RG16_EXT),W===s.SHORT&&Ae&&(re=Ae.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(re=s.RG8UI),W===s.UNSIGNED_SHORT&&(re=s.RG16UI),W===s.UNSIGNED_INT&&(re=s.RG32UI),W===s.BYTE&&(re=s.RG8I),W===s.SHORT&&(re=s.RG16I),W===s.INT&&(re=s.RG32I)),T===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(re=s.RGB8UI),W===s.UNSIGNED_SHORT&&(re=s.RGB16UI),W===s.UNSIGNED_INT&&(re=s.RGB32UI),W===s.BYTE&&(re=s.RGB8I),W===s.SHORT&&(re=s.RGB16I),W===s.INT&&(re=s.RGB32I)),T===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),W===s.UNSIGNED_INT&&(re=s.RGBA32UI),W===s.BYTE&&(re=s.RGBA8I),W===s.SHORT&&(re=s.RGBA16I),W===s.INT&&(re=s.RGBA32I)),T===s.RGB&&(W===s.UNSIGNED_SHORT&&Ae&&(re=Ae.RGB16_EXT),W===s.SHORT&&Ae&&(re=Ae.RGB16_SNORM_EXT),W===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),T===s.RGBA){let oe=_e?kc:ft.getTransfer(ie);W===s.FLOAT&&(re=s.RGBA32F),W===s.HALF_FLOAT&&(re=s.RGBA16F),W===s.UNSIGNED_BYTE&&(re=oe===Et?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT&&Ae&&(re=Ae.RGBA16_EXT),W===s.SHORT&&Ae&&(re=Ae.RGBA16_SNORM_EXT),W===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}u(E,"getInternalFormat");function y(N,T){let W;return N?T===null||T===Vi||T===Wo?W=s.DEPTH24_STENCIL8:T===ni?W=s.DEPTH32F_STENCIL8:T===_l&&(W=s.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Vi||T===Wo?W=s.DEPTH_COMPONENT24:T===ni?W=s.DEPTH_COMPONENT32F:T===_l&&(W=s.DEPTH_COMPONENT16),W}u(y,"getInternalDepthFormat");function w(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Wt&&N.minFilter!==zt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}u(w,"getMipLevels");function L(N){let T=new WeakRef(N);n.get(N).__ref=T,g.add(T),_.register(N,T,T)}u(L,"track");function P(N){let T=n.get(N).__ref;T!==void 0&&(g.delete(T),_.unregister(T))}u(P,"untrack");function D(N){X(N.target)}u(D,"onTextureDispose");function U(N){O(N.target)}u(U,"onRenderTargetDispose");function X(N){N.removeEventListener("dispose",D),P(N),Q(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&f.delete(N)}u(X,"destroyTexture");function O(N){N.removeEventListener("dispose",U),P(N),$(N)}u(O,"destroyRenderTarget");function Y(){for(let N of g){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?O(T):X(T))}g.clear(),f.clear()}u(Y,"dispose");function Q(N){let T=n.get(N);if(T.__webglInit===void 0)return;let W=N.source,ue=m.get(W);if(ue){let ie=ue[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&z(N),Object.keys(ue).length===0&&m.delete(W)}n.remove(N)}u(Q,"deallocateTexture");function z(N){let T=n.get(N);s.deleteTexture(T.__webglTexture);let W=N.source,ue=m.get(W);delete ue[T.__cacheKey],o.memory.textures--}u(z,"deleteTexture");function $(N){let T=n.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let W=N.depthTexture;if(W&&W.renderTarget===N&&X(W),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let _e=0;_e<T.__webglFramebuffer[ie].length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[ie][_e]);else s.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[ie]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ue=N.textures;for(let ie=0,_e=ue.length;ie<_e;ie++){let Ae=n.get(ue[ie]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(ue[ie])}n.remove(N)}u($,"deallocateRenderTarget");let q=0;function J(){q=0}u(J,"resetTextureUnits");function ee(){return q}u(ee,"getTextureUnits");function pe(N){q=N}u(pe,"setTextureUnits");function ge(){let N=q;return N>=i.maxTextures&&Xe("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,N}u(ge,"allocateTextureUnit");function j(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}u(j,"getTextureCacheKey");function xe(N,T){let W=n.get(N);if(N.isVideoTexture&&dt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let ue=N.image;if(ue===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+T)}u(xe,"setTexture2D");function se(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Ut(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+T)}u(se,"setTexture2DArray");function fe(N,T){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){Ut(W,N,T);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+T)}u(fe,"setTexture3D");function ae(N,T){let W=n.get(N);if(N.version>0&&W.__version!==N.version){ce(W,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+T)}u(ae,"setTextureCube");let Be={[Gn]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[tl]:s.MIRRORED_REPEAT},Qe={[Wt]:s.NEAREST,[uf]:s.NEAREST_MIPMAP_NEAREST,[Ho]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[yl]:s.LINEAR_MIPMAP_NEAREST,[vn]:s.LINEAR_MIPMAP_LINEAR},De={[NM]:s.NEVER,[M0]:s.ALWAYS,[DM]:s.LESS,[_0]:s.LEQUAL,[OM]:s.EQUAL,[v0]:s.GEQUAL,[UM]:s.GREATER,[FM]:s.NOTEQUAL};function ut(N,T){if(T.type===ni&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zt||T.magFilter===yl||T.magFilter===Ho||T.magFilter===vn||T.minFilter===zt||T.minFilter===yl||T.minFilter===Ho||T.minFilter===vn)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Be[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Be[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Be[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Qe[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Qe[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,De[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Wt||T.minFilter!==Ho&&T.minFilter!==vn||T.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}u(ut,"setTextureParameters");function ht(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",D),L(T));let ue=T.source,ie=m.get(ue);ie===void 0&&(ie={},m.set(ue,ie));let _e=j(T);if(_e!==N.__cacheKey){ie[_e]===void 0&&(ie[_e]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[_e].usedTimes++;let Ae=ie[N.__cacheKey];Ae!==void 0&&(ie[N.__cacheKey].usedTimes--,Ae.usedTimes===0&&z(T)),N.__cacheKey=_e,N.__webglTexture=ie[_e].texture}return W}u(ht,"initTexture");function et(N,T,W){return Math.floor(Math.floor(N/W)/T)}u(et,"getRow");function Ct(N,T,W,ue){let _e=N.updateRanges;if(_e.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,W,ue,T.data);else{_e.sort((F,le)=>F.start-le.start);let Ae=0;for(let F=1;F<_e.length;F++){let le=_e[Ae],ne=_e[F],Ee=le.start+le.count,ve=et(ne.start,T.width,4),Se=et(le.start,T.width,4);ne.start<=Ee+1&&ve===Se&&et(ne.start+ne.count-1,T.width,4)===ve?le.count=Math.max(le.count,ne.start+ne.count-le.start):(++Ae,_e[Ae]=ne)}_e.length=Ae+1;let re=t.getParameter(s.UNPACK_ROW_LENGTH),oe=t.getParameter(s.UNPACK_SKIP_PIXELS),we=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let F=0,le=_e.length;F<le;F++){let ne=_e[F],Ee=Math.floor(ne.start/4),ve=Math.ceil(ne.count/4),Se=Ee%T.width,qe=Math.floor(Ee/T.width),lt=ve,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,qe),t.texSubImage2D(s.TEXTURE_2D,0,Se,qe,lt,ye,W,ue,T.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,re),t.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}u(Ct,"updateTexture");function Ut(N,T,W){let ue=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=s.TEXTURE_3D);let ie=ht(N,T),_e=T.source;t.bindTexture(ue,N.__webglTexture,s.TEXTURE0+W);let Ae=n.get(_e);if(_e.version!==Ae.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ye=ft.getPrimaries(ft.workingColorSpace),Ke=T.colorSpace===Hi?null:ft.getPrimaries(T.colorSpace),rt=T.colorSpace===Hi||ye===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let oe=v(T.image,!1,i.maxTextureSize);oe=Ve(T,oe);let we=r.convert(T.format,T.colorSpace),F=r.convert(T.type),le=E(T.internalFormat,we,F,T.normalized,T.colorSpace,T.isVideoTexture);ut(ue,T);let ne,Ee=T.mipmaps,ve=T.isVideoTexture!==!0,Se=Ae.__version===void 0||ie===!0,qe=_e.dataReady,lt=w(T,oe);if(T.isDepthTexture)le=y(T.format===or,T.type),Se&&(ve?t.texStorage2D(s.TEXTURE_2D,1,le,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,le,oe.width,oe.height,0,we,F,null));else if(T.isDataTexture)if(Ee.length>0){ve&&Se&&t.texStorage2D(s.TEXTURE_2D,lt,le,Ee[0].width,Ee[0].height);for(let ye=0,Ke=Ee.length;ye<Ke;ye++)ne=Ee[ye],ve?qe&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ne.width,ne.height,we,F,ne.data):t.texImage2D(s.TEXTURE_2D,ye,le,ne.width,ne.height,0,we,F,ne.data);T.generateMipmaps=!1}else ve?(Se&&t.texStorage2D(s.TEXTURE_2D,lt,le,oe.width,oe.height),qe&&Ct(T,oe,we,F)):t.texImage2D(s.TEXTURE_2D,0,le,oe.width,oe.height,0,we,F,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,le,Ee[0].width,Ee[0].height,oe.depth);for(let ye=0,Ke=Ee.length;ye<Ke;ye++)if(ne=Ee[ye],T.format!==Xn)if(we!==null)if(ve){if(qe)if(T.layerUpdates.size>0){let rt=L0(ne.width,ne.height,T.format,T.type);for(let Ne of T.layerUpdates){let Tt=ne.data.subarray(Ne*rt/ne.data.BYTES_PER_ELEMENT,(Ne+1)*rt/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Ne,ne.width,ne.height,1,we,Tt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,ne.width,ne.height,oe.depth,we,ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,le,ne.width,ne.height,oe.depth,0,ne.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?qe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,ne.width,ne.height,oe.depth,we,F,ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,le,ne.width,ne.height,oe.depth,0,we,F,ne.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ve&&Se&&t.texStorage2D(s.TEXTURE_2D,lt,le,Ee[0].width,Ee[0].height);for(let ye=0,Ke=Ee.length;ye<Ke;ye++)ne=Ee[ye],T.format!==Xn?we!==null?ve?qe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,ne.width,ne.height,we,ne.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,le,ne.width,ne.height,0,ne.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?qe&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ne.width,ne.height,we,F,ne.data):t.texImage2D(s.TEXTURE_2D,ye,le,ne.width,ne.height,0,we,F,ne.data)}else if(T.isDataArrayTexture)if(ve){if(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,lt,le,oe.width,oe.height,oe.depth),qe)if(T.layerUpdates.size>0){let ye=L0(oe.width,oe.height,T.format,T.type);for(let Ke of T.layerUpdates){let rt=oe.data.subarray(Ke*ye/oe.data.BYTES_PER_ELEMENT,(Ke+1)*ye/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ke,oe.width,oe.height,1,we,F,rt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,F,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,le,oe.width,oe.height,oe.depth,0,we,F,oe.data);else if(T.isData3DTexture)ve?(Se&&t.texStorage3D(s.TEXTURE_3D,lt,le,oe.width,oe.height,oe.depth),qe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,F,oe.data)):t.texImage3D(s.TEXTURE_3D,0,le,oe.width,oe.height,oe.depth,0,we,F,oe.data);else if(T.isFramebufferTexture){if(Se)if(ve)t.texStorage2D(s.TEXTURE_2D,lt,le,oe.width,oe.height);else{let ye=oe.width,Ke=oe.height;for(let rt=0;rt<lt;rt++)t.texImage2D(s.TEXTURE_2D,rt,le,ye,Ke,0,we,F,null),ye>>=1,Ke>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),oe.parentNode!==ye){ye.appendChild(oe),f.add(T),ye.onpaint=Ke=>{let rt=Ke.changedElements;for(let Ne of f)rt.includes(Ne.image)&&(Ne.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,oe);else{let rt=s.RGBA,Ne=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,rt,Ne,Tt,oe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(ve&&Se){let ye=$e(Ee[0]);t.texStorage2D(s.TEXTURE_2D,lt,le,ye.width,ye.height)}for(let ye=0,Ke=Ee.length;ye<Ke;ye++)ne=Ee[ye],ve?qe&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,we,F,ne):t.texImage2D(s.TEXTURE_2D,ye,le,we,F,ne);T.generateMipmaps=!1}else if(ve){if(Se){let ye=$e(oe);t.texStorage2D(s.TEXTURE_2D,lt,le,ye.width,ye.height)}qe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,F,oe)}else t.texImage2D(s.TEXTURE_2D,0,le,we,F,oe);S(T)&&T.mipmapsAutoUpdate===!0&&M(ue),Ae.__version=_e.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}u(Ut,"uploadTexture");function ce(N,T,W){if(T.image.length!==6)return;let ue=ht(N,T),ie=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+W);let _e=n.get(ie);if(ie.version!==_e.__version||ue===!0){t.activeTexture(s.TEXTURE0+W);let Ae=ft.getPrimaries(ft.workingColorSpace),re=T.colorSpace===Hi?null:ft.getPrimaries(T.colorSpace),oe=T.colorSpace===Hi||Ae===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,le=[];for(let Ne=0;Ne<6;Ne++)!we&&!F?le[Ne]=v(T.image[Ne],!0,i.maxCubemapSize):le[Ne]=F?T.image[Ne].image:T.image[Ne],le[Ne]=Ve(T,le[Ne]);let ne=le[0],Ee=r.convert(T.format,T.colorSpace),ve=r.convert(T.type),Se=E(T.internalFormat,Ee,ve,T.normalized,T.colorSpace),qe=T.isVideoTexture!==!0,lt=_e.__version===void 0||ue===!0,ye=ie.dataReady,Ke=w(T,ne);ut(s.TEXTURE_CUBE_MAP,T);let rt;if(T.isDepthTexture){if(Se=y(T.format===or,T.type),lt)if(qe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Se,ne.width,ne.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Se,ne.width,ne.height,0,Ee,ve,null)}else if(we){qe&&lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Se,ne.width,ne.height);for(let Ne=0;Ne<6;Ne++){rt=le[Ne].mipmaps;for(let Tt=0;Tt<rt.length;Tt++){let an=rt[Tt];T.format!==Xn?Ee!==null?qe?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,0,0,an.width,an.height,Ee,an.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,Se,an.width,an.height,0,an.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,0,0,an.width,an.height,Ee,ve,an.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,Se,an.width,an.height,0,Ee,ve,an.data)}}}else{if(rt=T.mipmaps,qe&&lt){rt.length>0&&Ke++;let Ne=$e(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Se,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(F){qe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,le[Ne].width,le[Ne].height,Ee,ve,le[Ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Se,le[Ne].width,le[Ne].height,0,Ee,ve,le[Ne].data);for(let Tt=0;Tt<rt.length;Tt++){let Sr=rt[Tt].image[Ne].image;qe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,0,0,Sr.width,Sr.height,Ee,ve,Sr.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,Se,Sr.width,Sr.height,0,Ee,ve,Sr.data)}}else{qe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ee,ve,le[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Se,Ee,ve,le[Ne]);for(let Tt=0;Tt<rt.length;Tt++){let an=rt[Tt];qe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,0,0,Ee,ve,an.image[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,Se,Ee,ve,an.image[Ne])}}}S(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),_e.__version=ie.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}u(ce,"uploadCubeTexture");function de(N,T,W,ue,ie,_e){let Ae=r.convert(W.format,W.colorSpace),re=r.convert(W.type),oe=E(W.internalFormat,Ae,re,W.normalized,W.colorSpace),we=n.get(T),F=n.get(W);if(F.__renderTarget=T,!we.__hasExternalTextures){let le=Math.max(1,T.width>>_e),ne=Math.max(1,T.height>>_e);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,_e,oe,le,ne,T.depth,0,Ae,re,null):t.texImage2D(ie,_e,oe,le,ne,0,Ae,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),be(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ie,F.__webglTexture,0,tt(T)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,ie,F.__webglTexture,_e),t.bindFramebuffer(s.FRAMEBUFFER,null)}u(de,"setupFrameBufferTexture");function he(N,T,W){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){let ue=T.depthTexture,ie=ue&&ue.isDepthTexture?ue.type:null,_e=y(T.stencilBuffer,ie),Ae=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;be(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt(T),_e,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt(T),_e,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,_e,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,N)}else{let ue=T.textures;for(let ie=0;ie<ue.length;ie++){let _e=ue[ie],Ae=r.convert(_e.format,_e.colorSpace),re=r.convert(_e.type),oe=E(_e.internalFormat,Ae,re,_e.normalized,_e.colorSpace);be(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt(T),oe,T.width,T.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt(T),oe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,oe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}u(he,"setupRenderBufferStorage");function me(N,T,W){let ue=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(T.depthTexture);ie.__renderTarget=T;let _e=ue?T.depthTexture.image[0]:T.depthTexture.image;(!ie.__webglTexture||_e.width!==T.width||_e.height!==T.height)&&(_e.width=T.width,_e.height=T.height,T.depthTexture.needsUpdate=!0),ue?ae(T.depthTexture,0):xe(T.depthTexture,0);let Ae=ie.__webglTexture,re=tt(T),oe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,we=T.depthTexture.format===or?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Zs)be(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,oe,Ae,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,we,oe,Ae,0);else if(T.depthTexture.format===or)be(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,oe,Ae,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,we,oe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}u(me,"setupDepthTexture");function Me(N){let T=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let ue=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){let ie=u(()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",ie)},"disposeEvent");ue.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=ue}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ue=0;ue<6;ue++)me(T.__webglFramebuffer[ue],N,ue);else N.texture.mipmaps.length>0?me(T.__webglFramebuffer[0],N,0):me(T.__webglFramebuffer,N,0);else if(W){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=s.createRenderbuffer(),he(T.__webglDepthbuffer[ue],N,!1);else{let ie=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,_e)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,N,!1);else{let ie=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}u(Me,"setupDepthRenderbuffer");function Ce(N,T,W){let ue=n.get(N);T!==void 0&&de(ue.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Me(N)}u(Ce,"rebindTextures");function Oe(N){let T=N.texture,W=n.get(N),ue=n.get(T);N.addEventListener("dispose",U),L(N);let ie=N.textures,_e=N.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=T.version,o.memory.textures++),_e){W.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps.length>0){W.__webglFramebuffer[re]=[];for(let oe=0;oe<T.mipmaps.length;oe++)W.__webglFramebuffer[re][oe]=s.createFramebuffer()}else W.__webglFramebuffer[re]=s.createFramebuffer()}else{if(T.mipmaps.length>0){W.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)W.__webglFramebuffer[re]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let re=0,oe=ie.length;re<oe;re++){let we=n.get(ie[re]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&be(N)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let re=0;re<ie.length;re++){let oe=ie[re];W.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[re]);let we=r.convert(oe.format,oe.colorSpace),F=r.convert(oe.type),le=E(oe.internalFormat,we,F,oe.normalized,oe.colorSpace,N.isXRRenderTarget===!0),ne=tt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,le,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,W.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),he(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),ut(s.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)de(W.__webglFramebuffer[re][oe],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else de(W.__webglFramebuffer[re],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);S(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let re=0,oe=ie.length;re<oe;re++){let we=ie[re],F=n.get(we),le=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,F.__webglTexture),ut(le,we),de(W.__webglFramebuffer,N,we,s.COLOR_ATTACHMENT0+re,le,0),S(we)&&M(le)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,ue.__webglTexture),ut(re,T),T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)de(W.__webglFramebuffer[oe],N,T,s.COLOR_ATTACHMENT0,re,oe);else de(W.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,re,0);S(T)?M(re):T.mipmaps.length>0&&s.texParameteri(re,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Me(N)}u(Oe,"setupRenderTarget");function B(N){let T=N.textures;for(let W=0,ue=T.length;W<ue;W++){let ie=T[W];if(S(ie)&&ie.mipmapsAutoUpdate===!0){let _e=A(N),Ae=n.get(ie).__webglTexture;t.bindTexture(_e,Ae),M(_e),t.unbindTexture()}}}u(B,"updateRenderTargetMipmap");let at=[];function st(N){if(N.samples>0){if(be(N)===!1){let T=N.textures,W=N.width,ue=N.height,ie=s.COLOR_BUFFER_BIT,_e=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(N),re=T.length>1;if(re)for(let we=0;we<T.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<T.length;we++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let F=n.get(T[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,W,ue,0,0,W,ue,ie,s.NEAREST),l===!0&&(at.length=0,at.push(s.COLOR_ATTACHMENT0+we),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&at.push(_e),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<T.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let F=n.get(T[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}u(st,"updateMultisampleRenderTarget");function tt(N){return Math.min(i.maxSamples,N.samples)}u(tt,"getRenderTargetSamples");function be(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}u(be,"useMultisampledRTT");function dt(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}u(dt,"updateVideoTexture");function Ve(N,T){let W=N.colorSpace,ue=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Pn&&W!==Hi&&(ft.getTransfer(W)===Et?(ue!==Xn||ie!==Mn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",W)),T}u(Ve,"verifyColorSpace");function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}u($e,"getDimensions"),this.allocateTextureUnit=ge,this.resetTextureUnits=J,this.getTextureUnits=ee,this.setTextureUnits=pe,this.setTexture2D=xe,this.setTexture2DArray=se,this.setTexture3D=fe,this.setTextureCube=ae,this.rebindTextures=Ce,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=de,this.useMultisampledRTT=be,this.dispose=Y}u(hI,"WebGLTextures");function dI(s,e){function t(n,i=Hi){let r,o=ft.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===df)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ff)return s.UNSIGNED_SHORT_5_5_5_1;if(n===m0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===g0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===f0)return s.BYTE;if(n===p0)return s.SHORT;if(n===_l)return s.UNSIGNED_SHORT;if(n===hf)return s.INT;if(n===Vi)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===ii)return s.HALF_FLOAT;if(n===x0)return s.ALPHA;if(n===b0)return s.RGB;if(n===Xn)return s.RGBA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===pf)return s.RED;if(n===mf)return s.RED_INTEGER;if(n===fs)return s.RG;if(n===gf)return s.RG_INTEGER;if(n===xf)return s.RGBA_INTEGER;if(n===fu||n===pu||n===mu||n===gu)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bf||n===yf||n===_f||n===vf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_f)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mf||n===Sf||n===wf||n===Ef||n===Tf||n===xu||n===Af)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mf||n===Sf)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ef)return r.COMPRESSED_R11_EAC;if(n===Tf)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xu)return r.COMPRESSED_RG11_EAC;if(n===Af)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rf||n===Cf||n===Pf||n===If||n===Lf||n===Nf||n===Df||n===Of||n===Uf||n===Ff||n===Bf||n===kf||n===zf||n===Gf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===If)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Df)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Of)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ff)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gf)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vf||n===Hf||n===Wf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vf)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xf||n===qf||n===bu||n===Yf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xf)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return u(t,"convert"),{convert:t}}u(dI,"WebGLUtils");var fI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ox=class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:fI,fragmentShader:pI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(Ox,"WebXRDepthSensing");var Tx=Ox,Ux=class Ux extends Gi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",x=new Tx,b={},v=t.getContextAttributes(),S=null,M=null,A=[],E=[],y=new We,w=null,L=null,P=new jt;P.viewport=new At;let D=new jt;D.viewport=new At;let U=[P,D],X=new Bd,O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let xe=A[j];return xe===void 0&&(xe=new al,A[j]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(j){let xe=A[j];return xe===void 0&&(xe=new al,A[j]=xe),xe.getGripSpace()},this.getHand=function(j){let xe=A[j];return xe===void 0&&(xe=new al,A[j]=xe),xe.getHandSpace()};function Q(j){let xe=E.indexOf(j.inputSource);if(xe===-1)return;let se=A[xe];se!==void 0&&(se.update(j.inputSource,j.frame,c||o),se.dispatchEvent({type:j.type,data:j.inputSource}))}u(Q,"onSessionEvent");function z(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",$);for(let j=0;j<A.length;j++){let xe=E[j];xe!==null&&(E[j]=null,A[j].disconnect(xe))}O=null,Y=null,x.reset();for(let j in b)delete b[j];if(e.setRenderTarget(S),m=null,d=null,f=null,i=null,M=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),L!==null){let j=L.camera;j.fov=L.fov,j.zoom=L.zoom,j.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}u(z,"onSessionEnd"),this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",z),i.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,fe=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=v.stencil?or:Zs,fe=v.stencil?Wo:Vi);let Be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new jn(d.textureWidth,d.textureHeight,{format:Xn,type:Mn,depthTexture:new js(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new jn(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(j){for(let xe=0;xe<j.removed.length;xe++){let se=j.removed[xe],fe=E.indexOf(se);fe>=0&&(E[fe]=null,A[fe].disconnect(se))}for(let xe=0;xe<j.added.length;xe++){let se=j.added[xe],fe=E.indexOf(se);if(fe===-1){for(let Be=0;Be<A.length;Be++)if(Be>=E.length){E.push(se),fe=Be;break}else if(E[Be]===null){E[Be]=se,fe=Be;break}if(fe===-1)break}let ae=A[fe];ae&&ae.connect(se)}}u($,"onInputSourcesChange");function q(j,xe){xe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(xe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}u(q,"updateCamera"),this.updateCamera=function(j){if(i===null)return;let xe=j.near,se=j.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(se=x.depthFar)),X.near=D.near=P.near=xe,X.far=D.far=P.far=se,(O!==X.near||Y!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),O=X.near,Y=X.far),X.layers.mask=j.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let fe=j.parent,ae=X.cameras;q(X,fe);for(let Be=0;Be<ae.length;Be++)q(ae[Be],fe);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&j.isPerspectiveCamera&&(L={camera:j,fov:j.fov,zoom:j.zoom}),J(j,X,fe)};function J(j,xe,se){se===null?j.matrix.copy(xe.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(xe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(xe.projectionMatrix),j.projectionMatrixInverse.copy(xe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}u(J,"updateUserCamera"),this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(j){return b[j]};let ee=null;function pe(j,xe){if(h=xe.getViewerPose(c||o),g=xe,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let fe=!1;se.length!==X.cameras.length&&(X.cameras.length=0,fe=!0);for(let De=0;De<se.length;De++){let ut=se[De],ht=null;if(m!==null)ht=m.getViewport(ut);else{let Ct=f.getViewSubImage(d,ut);ht=Ct.viewport,De===0&&(e.setRenderTargetTextures(M,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(M))}let et=U[De];et===void 0&&(et=new jt,et.layers.enable(De),et.viewport=new At,U[De]=et),et.matrix.fromArray(ut.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ut.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ht.x,ht.y,ht.width,ht.height),De===0&&(X.matrix.copy(et.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),fe===!0&&X.cameras.push(et)}let ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let De=f.getDepthInformation(se[0]);De&&De.isValid&&De.texture&&x.init(De,i.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let De=0;De<se.length;De++){let ut=se[De].camera;if(ut){let ht=b[ut];ht||(ht=new Qc,b[ut]=ht);let et=f.getCameraImage(ut);ht.sourceTexture=et}}}}for(let se=0;se<A.length;se++){let fe=E[se],ae=A[se];fe!==null&&ae!==void 0&&ae.update(fe,xe,c||o)}ee&&ee(j,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),g=null}u(pe,"onAnimationFrame");let ge=new fS;ge.setAnimationLoop(pe),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}};u(Ux,"WebXRManager");var Ax=Ux,mI=new Ze,SS=new je;SS.set(-1,0,0,0,1,0,0,0,1);function gI(s,e){function t(x,b){x.matrixAutoUpdate===!0&&x.updateMatrix(),b.value.copy(x.matrix)}u(t,"refreshTransformUniform");function n(x,b){b.color.getRGB(x.fogColor.value,C0(s)),b.isFog?(x.fogNear.value=b.near,x.fogFar.value=b.far):b.isFogExp2&&(x.fogDensity.value=b.density)}u(n,"refreshFogUniforms");function i(x,b,v,S,M){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?r(x,b):b.isMeshLambertMaterial?(r(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(r(x,b),f(x,b)):b.isMeshPhongMaterial?(r(x,b),h(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(r(x,b),d(x,b),b.isMeshPhysicalMaterial&&m(x,b,M)):b.isMeshMatcapMaterial?(r(x,b),g(x,b)):b.isMeshDepthMaterial?r(x,b):b.isMeshDistanceMaterial?(r(x,b),_(x,b)):b.isMeshNormalMaterial?r(x,b):b.isLineBasicMaterial?(o(x,b),b.isLineDashedMaterial&&a(x,b)):b.isPointsMaterial?l(x,b,v,S):b.isSpriteMaterial?c(x,b):b.isShadowMaterial?(x.color.value.copy(b.color),x.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}u(i,"refreshMaterialUniforms");function r(x,b){x.opacity.value=b.opacity,b.color&&x.diffuse.value.copy(b.color),b.emissive&&x.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.bumpMap&&(x.bumpMap.value=b.bumpMap,t(b.bumpMap,x.bumpMapTransform),x.bumpScale.value=b.bumpScale,b.side===Dn&&(x.bumpScale.value*=-1)),b.normalMap&&(x.normalMap.value=b.normalMap,t(b.normalMap,x.normalMapTransform),x.normalScale.value.copy(b.normalScale),b.side===Dn&&x.normalScale.value.negate()),b.displacementMap&&(x.displacementMap.value=b.displacementMap,t(b.displacementMap,x.displacementMapTransform),x.displacementScale.value=b.displacementScale,x.displacementBias.value=b.displacementBias),b.emissiveMap&&(x.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,x.emissiveMapTransform)),b.specularMap&&(x.specularMap.value=b.specularMap,t(b.specularMap,x.specularMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest);let v=e.get(b),S=v.envMap,M=v.envMapRotation;S&&(x.envMap.value=S,x.envMapRotation.value.setFromMatrix4(mI.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(SS),x.reflectivity.value=b.reflectivity,x.ior.value=b.ior,x.refractionRatio.value=b.refractionRatio),b.lightMap&&(x.lightMap.value=b.lightMap,x.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,x.lightMapTransform)),b.aoMap&&(x.aoMap.value=b.aoMap,x.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,x.aoMapTransform))}u(r,"refreshUniformsCommon");function o(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform))}u(o,"refreshUniformsLine");function a(x,b){x.dashSize.value=b.dashSize,x.totalSize.value=b.dashSize+b.gapSize,x.scale.value=b.scale}u(a,"refreshUniformsDash");function l(x,b,v,S){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.size.value=b.size*v,x.scale.value=S*.5,b.map&&(x.map.value=b.map,t(b.map,x.uvTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(l,"refreshUniformsPoints");function c(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.rotation.value=b.rotation,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(c,"refreshUniformsSprites");function h(x,b){x.specular.value.copy(b.specular),x.shininess.value=Math.max(b.shininess,1e-4)}u(h,"refreshUniformsPhong");function f(x,b){b.gradientMap&&(x.gradientMap.value=b.gradientMap)}u(f,"refreshUniformsToon");function d(x,b){x.metalness.value=b.metalness,b.metalnessMap&&(x.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,x.metalnessMapTransform)),x.roughness.value=b.roughness,b.roughnessMap&&(x.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,x.roughnessMapTransform)),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)}u(d,"refreshUniformsStandard");function m(x,b,v){x.ior.value=b.ior,b.diffuseRoughness>0&&(x.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),b.sheen>0&&(x.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),x.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(x.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,x.sheenColorMapTransform)),b.sheenRoughnessMap&&(x.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,x.sheenRoughnessMapTransform))),b.clearcoat>0&&(x.clearcoat.value=b.clearcoat,x.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(x.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,x.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(x.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Dn&&x.clearcoatNormalScale.value.negate())),b.dispersion>0&&(x.dispersion.value=b.dispersion),b.retroreflectivity>0&&(x.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(x.iridescence.value=b.iridescence,x.iridescenceIOR.value=b.iridescenceIOR,x.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(x.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,x.iridescenceMapTransform)),b.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),b.transmission>0&&(x.transmission.value=b.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),b.transmissionMap&&(x.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,x.transmissionMapTransform)),x.thickness.value=b.thickness,b.thicknessMap&&(x.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=b.attenuationDistance,x.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(x.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(x.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=b.specularIntensity,x.specularColor.value.copy(b.specularColor),b.specularColorMap&&(x.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,x.specularColorMapTransform)),b.specularIntensityMap&&(x.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,x.specularIntensityMapTransform))}u(m,"refreshUniformsPhysical");function g(x,b){b.matcap&&(x.matcap.value=b.matcap)}u(g,"refreshUniformsMatcap");function _(x,b){let v=e.get(b).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}u(gI,"WebGLMaterials");function xI(s,e,t,n){let i={},r={};function o(v,S){let M=S.program;n.uniformBlockBinding(v,M,i[v.id])}u(o,"bind");function a(v,S){let M=i[v.id];M===void 0&&(g(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",x));let A=S.program;n.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}u(a,"update");function l(v){let S=s.createBuffer(),M=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,M,A),s.bindBuffer(s.UNIFORM_BUFFER,null),S}u(l,"createBuffer");function c(v){let S=i[v.id],M=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,y=M.length;E<y;E++){let w=M[E];if(Array.isArray(w))for(let L=0,P=w.length;L<P;L++)h(w[L],E,L,A);else h(w,E,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}u(c,"updateBufferData");function h(v,S,M,A){if(d(v,S,M,A)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let w=0;for(let L=0;L<y.length;L++){let P=y[L],D=_(P,!0);f(P,v.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}u(h,"updateUniform");function f(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}u(f,"writeUniformValue");function d(v,S,M,A){let E=v.value,y=S+"_"+M;if(Array.isArray(E)){A[y]===void 0&&(A[y]=[]);let w=A[y],L=!1;for(let P=0;P<E.length;P++)m(E[P],w,P)===!0&&(L=!0);return L}return m(E,A,y)}u(d,"hasUniformChanged");function m(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let A=S[M];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}u(m,"hasValueChanged");function g(v){let S=v.uniforms,M=0,A=16;for(let y=0,w=S.length;y<w;y++){let L=Array.isArray(S[y])?S[y]:[S[y]];for(let P=0,D=L.length;P<D;P++){let U=L[P],X=Array.isArray(U.value)?U.value:[U.value],O=Array.isArray(S[y])||Array.isArray(U.value),Y=M;for(let z=0,$=X.length;z<$;z++){let q=X[z],J=_(q,O),ee=M%A,pe=ee%J.boundary,ge=ee+pe;M+=pe,ge!==0&&A-ge<J.storage&&(M+=A-ge),z===0&&(Y=M),M+=J.storage}let Q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Q((M-Y)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Y}}let E=M%A;return E>0&&(M+=A-E),v.__size=M,v.__cache={},this}u(g,"prepareUniformsGroup");function _(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}u(_,"getUniformSize");function x(v){let S=v.target;S.removeEventListener("dispose",x),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}u(x,"onUniformsGroupsDispose");function b(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return u(b,"dispose"),{bind:o,update:a,dispose:b}}u(xI,"WebGLUniformsGroups");var bI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ms=null;function yI(){return ms===null&&(ms=new Fr(bI,16,16,fs,ii),ms.name="DFG_LUT",ms.minFilter=zt,ms.magFilter=zt,ms.wrapS=zn,ms.wrapT=zn,ms.generateMipmaps=!1,ms.needsUpdate=!0),ms}u(yI,"getDFGLUT");var Fx=class Fx{constructor(e={}){let{canvas:t=BM(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=m,x=new Set([xf,gf,mf]),b=new Set([Mn,Vi,_l,Wo,df,ff]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,E=null,y=[],w=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,U=null,X=null,O=null,Y=null;this._outputColorSpace=Nt;let Q=0,z=0,$=null,q=-1,J=null,ee=new At,pe=new At,ge=null,j=new Pe(0),xe=0,se=t.width,fe=t.height,ae=1,Be=null,Qe=null,De=new At(0,0,se,fe),ut=new At(0,0,se,fe),ht=!1,et=new Br,Ct=new Td,Ut=!1,ce=!1,de=new Ze,he=new H,me=new At,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Oe(){return $===null?ae:1}u(Oe,"getTargetPixelRatio");let B=n;function at(C,V){return t.getContext(C,V)}u(at,"getContext");let st,tt,be,dt,Ve,$e,N,T,W,ue,ie,_e,Ae,re,oe,we,F,le,ne,Ee,ve,Se,qe;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){let V="webgl2";if(B=at(V,C),B===null)throw at(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(C){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Je("WebGLRenderer: "+C.message),C}function lt(){st=new PP(B),st.init(),ve=new dI(B,st),tt=new yP(B,st,e,ve),be=new uI(B,st),tt.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),X=B.createFramebuffer(),O=B.createFramebuffer(),Y=B.createFramebuffer(),dt=new NP(B),Ve=new Z2,$e=new hI(B,st,be,Ve,tt,ve,dt),N=new CP(P),T=new OA(B),Se=new xP(B,T),W=new IP(B,T,dt,Se),ue=new OP(B,W,T,Se,dt),le=new DP(B,tt,$e),oe=new _P(Ve),ie=new K2(P,N,st,tt,Se,oe),_e=new gI(P,Ve),Ae=new j2,re=new sI(st),F=new gP(P,N,be,ue,g,l),we=new cI(P,ue,tt),qe=new xI(B,dt,tt,be),ne=new bP(B,st,dt),Ee=new LP(B,st,dt),dt.programs=ie.programs,P.capabilities=tt,P.extensions=st,P.properties=Ve,P.renderLists=Ae,P.shadowMap=we,P.state=be,P.info=dt}u(lt,"initGLContext"),_!==Mn&&(L=new FP(_,t.width,t.height,a,i,r));let ye=new Ax(P,B);this.xr=ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(C){C!==void 0&&(ae=C,this.setSize(se,fe,!1))},this.getSize=function(C){return C.set(se,fe)},this.setSize=function(C,V,te=!0){if(ye.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,fe=V,t.width=Math.floor(C*ae),t.height=Math.floor(V*ae),te===!0&&(t.style.width=C+"px",t.style.height=V+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(se*ae,fe*ae).floor()},this.setDrawingBufferSize=function(C,V,te){se=C,fe=V,ae=te,t.width=Math.floor(C*te),t.height=Math.floor(V*te),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(_===Mn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ee)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,V,te,K){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,V,te,K),be.viewport(ee.copy(De).multiplyScalar(Oe()).round())},this.getScissor=function(C){return C.copy(ut)},this.setScissor=function(C,V,te,K){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,V,te,K),be.scissor(pe.copy(ut).multiplyScalar(Oe()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){be.setScissorTest(ht=C)},this.setOpaqueSort=function(C){Be=C},this.setTransparentSort=function(C){Qe=C},this.getClearColor=function(C){return C.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,te=!0){let K=0;if(C){let Z=!1;if($!==null){let Re=$.texture.format;Z=x.has(Re)}if(Z){let Re=$.texture.type,ke=b.has(Re),Te=F.getClearColor(),Ue=F.getClearAlpha(),He=Te.r,nt=Te.g,yt=Te.b;ke?(v[0]=He,v[1]=nt,v[2]=yt,v[3]=Ue,B.clearBufferuiv(B.COLOR,0,v)):(S[0]=He,S[1]=nt,S[2]=yt,S[3]=Ue,B.clearBufferiv(B.COLOR,0,S))}else K|=B.COLOR_BUFFER_BIT}V&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),U=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),F.dispose(),Ae.dispose(),re.dispose(),$e.dispose(),Ve.dispose(),N.dispose(),ue.dispose(),W.dispose(),Se.dispose(),qe.dispose(),ie.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",j_),ye.removeEventListener("sessionend",Q_),yo.stop()};function Ke(C){C.preventDefault(),zc("WebGLRenderer: Context Lost."),D=!0}u(Ke,"onContextLost");function rt(){zc("WebGLRenderer: Context Restored."),D=!1;let C=dt.autoReset,V=we.enabled,te=we.autoUpdate,K=we.needsUpdate,Z=we.type;lt(),dt.autoReset=C,we.enabled=V,we.autoUpdate=te,we.needsUpdate=K,we.type=Z}u(rt,"onContextRestore");function Ne(C){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(Ne,"onContextCreationError");function Tt(C){let V=C.target;V.removeEventListener("dispose",Tt),an(V)}u(Tt,"onMaterialDispose");function an(C){Sr(C),Ve.remove(C)}u(an,"deallocateMaterial");function Sr(C){let V=Ve.get(C).programs;V!==void 0&&(V.forEach(function(te){ie.releaseProgram(te)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}u(Sr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,V,te,K,Z,Re){V===null&&(V=Me);let ke=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Te=gT(C,V,te,K,Z);be.setMaterial(K,ke);let Ue=te.index,He=1;if(K.wireframe===!0){if(Ue=W.getWireframeAttribute(te),Ue===void 0)return;He=2}let nt=te.drawRange,yt=te.attributes.position,ze=nt.start*He,_t=(nt.start+nt.count)*He;Re!==null&&(ze=Math.max(ze,Re.start*He),_t=Math.min(_t,(Re.start+Re.count)*He)),Ue!==null?(ze=Math.max(ze,0),_t=Math.min(_t,Ue.count)):yt!=null&&(ze=Math.max(ze,0),_t=Math.min(_t,yt.count));let Kt=_t-ze;if(Kt<0||Kt===1/0)return;Se.setup(Z,K,Te,te,Ue);let Lt,Pt=ne;if(Ue!==null&&(Lt=T.get(Ue),Pt=Ee,Pt.setIndex(Lt)),Z.isMesh)K.wireframe===!0?(be.setLineWidth(K.wireframeLinewidth*Oe()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(Z.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),be.setLineWidth(xn*Oe()),Z.isLineSegments?Pt.setMode(B.LINES):Z.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else Z.isPoints?Pt.setMode(B.POINTS):Z.isSprite&&Pt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let xn=Z._multiDrawStarts,Ge=Z._multiDrawCounts,Rn=Z._multiDrawCount,St=Ue?T.get(Ue).bytesPerElement:1,_o=Ve.get(K).currentProgram.getUniforms();for(let bn=0;bn<Rn;bn++)_o.setValue(B,"_gl_DrawID",bn),Pt.render(xn[bn]/St,Ge[bn])}else if(Z.isInstancedMesh)Pt.renderInstances(ze,Kt,Z.count);else if(te.isInstancedBufferGeometry){let xn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ge=Math.min(te.instanceCount,xn);Pt.renderInstances(ze,Kt,Ge)}else Pt.render(ze,Kt)};function J_(C,V,te,K){U!==null&&C.isNodeMaterial&&U.setObject(K,C),Ut===!0&&oe.setState(C,te,!1),C.transparent===!0&&C.side===tn&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,Mc(C,V,K),C.side=vi,C.needsUpdate=!0,Mc(C,V,K),C.side=tn):Mc(C,V,K)}u(J_,"prepareMaterial"),this.compile=function(C,V,te=null){te===null&&(te=C),U!==null&&U.renderStart(C,V,te),E=re.get(te),E.init(V),w.push(E),te.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),C!==te&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ce=this.localClippingEnabled,Ut=oe.init(this.clippingPlanes,ce),Ut===!0&&oe.setGlobalState(this.clippingPlanes,V),U!==null&&we.render(E.state.shadowsArray,te,V);let K=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Re=Z.material;if(Re)if(Array.isArray(Re))for(let ke=0;ke<Re.length;ke++){let Te=Re[ke];J_(Te,te,V,Z),K.add(Te)}else J_(Re,te,V,Z),K.add(Re)}),E=w.pop(),U!==null&&U.renderEnd(),K},this.compileAsync=function(C,V,te=null){let K=this.compile(C,V,te);return new Promise(Z=>{function Re(){if(K.forEach(function(ke){let Ue=Ve.get(ke).currentProgram;(Ue===void 0||Ue.isReady())&&K.delete(ke)}),K.size===0){Z(C);return}setTimeout(Re,10)}u(Re,"checkMaterialsReady"),st.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let hm=null;function pT(C){hm&&hm(C)}u(pT,"onAnimationFrame");function j_(){yo.stop()}u(j_,"onXRSessionStart");function Q_(){yo.start()}u(Q_,"onXRSessionEnd");let yo=new fS;yo.setAnimationLoop(pT),typeof self<"u"&&yo.setContext(self),this.setAnimationLoop=function(C){hm=C,ye.setAnimationLoop(C),C===null?yo.stop():yo.start()},ye.addEventListener("sessionstart",j_),ye.addEventListener("sessionend",Q_),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(C,V);let te=ye.enabled===!0&&ye.isPresenting===!0,K=L!==null&&($===null||te)&&L.begin(P,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,V,$),E=re.get(C,w.length),E.init(V),E.state.textureUnits=$e.getTextureUnits(),w.push(E),de.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Ct.setFromArrayCamera(V):et.setFromProjectionMatrix(de,yi,V.reversedDepth),ce=this.localClippingEnabled,Ut=oe.init(this.clippingPlanes,ce),A=Ae.get(C,y.length),A.init(),y.push(A),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let ke=P.xr.getDepthSensingMesh();ke!==null&&dm(ke,V,-1/0,P.sortObjects)}dm(C,V,0,P.sortObjects),A.finish(),U!==null&&U.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(Be,Qe),Ce=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ce&&F.addToRenderList(A,C),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&oe.beginShadows();let Z=E.state.shadowsArray;if(we.render(Z,C,V),Ut===!0&&oe.endShadows(),(K&&L.hasRenderPass())===!1){let ke=A.opaque,Te=A.transmissive;if(E.setupLights(),V.isArrayCamera){let Ue=V.cameras;if(Te.length>0)for(let He=0,nt=Ue.length;He<nt;He++){let yt=Ue[He];tv(ke,Te,C,yt)}Ce&&F.render(C);for(let He=0,nt=Ue.length;He<nt;He++){let yt=Ue[He];ev(A,C,yt,yt.viewport)}}else Te.length>0&&tv(ke,Te,C,V),Ce&&F.render(C),ev(A,C,V)}$!==null&&z===0&&($e.updateMultisampleRenderTarget($),$e.updateRenderTargetMipmap($)),K&&L.end(P),C.isScene===!0&&C.onAfterRender(P,C,V),Se.resetDefaultState(),q=-1,J=null,w.pop(),w.length>0?(E=w[w.length-1],$e.setTextureUnits(E.state.textureUnits),Ut===!0&&oe.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,U!==null&&U.renderEnd()};function dm(C,V,te,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let ke=V.isArrayCamera?Ct:et;if(!C.frustumCulled||C.intersectsFrustum(ke)){K&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);let Te=ue.update(C),Ue=C.material;Ue.visible&&A.push(C,Te,Ue,te,me.z,null,V)}}else if(C.isMesh||C.isLine||C.isPoints){let ke=V.isArrayCamera?Ct:et;if(!C.frustumCulled||C.intersectsFrustum(ke)){let Te=ue.update(C),Ue=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),me.copy(Te.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Ue)){let He=Te.groups;for(let nt=0,yt=He.length;nt<yt;nt++){let ze=He[nt],_t=Ue[ze.materialIndex];_t&&_t.visible&&A.push(C,Te,_t,te,me.z,ze,V)}}else Ue.visible&&A.push(C,Te,Ue,te,me.z,null,V)}}}let Re=C.children;for(let ke=0,Te=Re.length;ke<Te;ke++)dm(Re[ke],V,te,K)}u(dm,"projectObject");function ev(C,V,te,K){let{opaque:Z,transmissive:Re,transparent:ke}=C;E.setupLightsView(te),Ut===!0&&oe.setGlobalState(P.clippingPlanes,te),K&&be.viewport(ee.copy(K)),Z.length>0&&Fh(Z,V,te),Re.length>0&&Fh(Re,V,te),ke.length>0&&Fh(ke,V,te),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}u(ev,"renderScene");function tv(C,V,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let ze=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new jn(1,1,{generateMipmaps:!0,type:ze?ii:Mn,minFilter:vn,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Re=E.state.transmissionRenderTarget[K.id],ke=K.viewport||ee;Re.setSize(ke.z*P.transmissionResolutionScale,ke.w*P.transmissionResolutionScale);let Te=P.getRenderTarget(),Ue=P.getActiveCubeFace(),He=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(j),xe=P.getClearAlpha(),xe<1&&P.setClearColor(16777215,.5),P.clear(),Ce&&F.render(te);let nt=P.toneMapping;P.toneMapping=ds;let yt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),Ut===!0&&oe.setGlobalState(P.clippingPlanes,K),Fh(C,te,K),$e.updateMultisampleRenderTarget(Re),$e.updateRenderTargetMipmap(Re),st.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let _t=0,Kt=V.length;_t<Kt;_t++){let Lt=V[_t],{object:Pt,geometry:xn,material:Ge,group:Rn}=Lt;if(Ge.side===tn&&Pt.layers.test(K.layers)){let St=Ge.side;Ge.side=Dn,Ge.needsUpdate=!0,nv(Pt,te,K,xn,Ge,Rn),Ge.side=St,Ge.needsUpdate=!0,ze=!0}}ze===!0&&($e.updateMultisampleRenderTarget(Re),$e.updateRenderTargetMipmap(Re))}P.setRenderTarget(Te,Ue,He),P.setClearColor(j,xe),yt!==void 0&&(K.viewport=yt),P.toneMapping=nt}u(tv,"renderTransmissionPass");function Fh(C,V,te){let K=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,Re=C.length;Z<Re;Z++){let ke=C[Z],{object:Te,geometry:Ue,group:He}=ke,nt=ke.material;nt.allowOverride===!0&&K!==null&&(nt=K),Te.layers.test(te.layers)&&nv(Te,V,te,Ue,nt,He)}}u(Fh,"renderObjects");function nv(C,V,te,K,Z,Re){U!==null&&Z.isNodeMaterial&&U.setObject(C,Z),C.onBeforeRender(P,V,te,K,Z,Re),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(P,V,te,K,C,Re),Z.transparent===!0&&Z.side===tn&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,P.renderBufferDirect(te,V,K,Z,C,Re),Z.side=vi,Z.needsUpdate=!0,P.renderBufferDirect(te,V,K,Z,C,Re),Z.side=tn):P.renderBufferDirect(te,V,K,Z,C,Re),C.onAfterRender(P,V,te,K,Z,Re)}u(nv,"renderObject");function iv(C){let V=0;for(let te of C)te.texture!==null&&V++;return V}u(iv,"countLightProbeGrids");function Mc(C,V,te){V.isScene!==!0&&(V=Me);let K=Ve.get(C),Z=E.state.lights,Re=E.state.shadowsArray,ke=Z.state.version,Te=ie.getParameters(C,Z.state,Re,V,te,E.state.lightProbeGridArray),Ue=ie.getProgramCacheKey(Te),He=K.programs;K.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;K.envMap=N.get(C.envMap||K.environment,nt),K.envMapRotation=K.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Tt),He=new Map,K.programs=He,K.programVariants=new Map);let yt=He.get(Ue);if(yt!==void 0){if(K.currentProgram===yt&&K.lightsStateVersion===ke)return rv(C,Te),yt}else Te.uniforms=ie.getUniforms(C),U!==null&&C.isNodeMaterial&&U.build(C,te,Te),C.onBeforeCompile(Te,P),yt=ie.acquireProgram(Te,Ue),He.set(Ue,yt),K.uniforms=Te.uniforms;let ze=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=oe.uniform),rv(C,Te),K.needsLights=bT(C),K.lightsStateVersion=ke,K.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.sunLights.value=Z.state.sun,ze.sunLightShadows.value=Z.state.sunShadow,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.sunShadowMatrix.value=Z.state.sunShadowMatrix,ze.sunShadowCascade.value=Z.state.sunShadowCascade,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.numLightProbeGrids=iv(E.state.lightProbeGridArray),K.currentProgram=yt,K.uniformsList=null,yt}u(Mc,"getProgram");function mT(C,V,te,K,Z){let Re=Ve.get(C),ke=Re.currentProgram.id+","+K+","+Z,Te=Re.programVariants.get(ke);return Te===void 0?(Te=Mc(C,V,te),Re.programVariants.set(ke,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=K,Re.toneMapping=Z),Te}u(mT,"getProgramVariant");function sv(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Ml.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}u(sv,"getUniformList");function rv(C,V){let te=Ve.get(C);te.outputColorSpace=V.outputColorSpace,te.batching=V.batching,te.batchingColor=V.batchingColor,te.instancing=V.instancing,te.instancingColor=V.instancingColor,te.instancingMorph=V.instancingMorph,te.skinning=V.skinning,te.morphTargets=V.morphTargets,te.morphNormals=V.morphNormals,te.morphColors=V.morphColors,te.morphTargetsCount=V.morphTargetsCount,te.numClippingPlanes=V.numClippingPlanes,te.numIntersection=V.numClipIntersection,te.vertexAlphas=V.vertexAlphas,te.vertexTangents=V.vertexTangents,te.toneMapping=V.toneMapping}u(rv,"updateCommonMaterialProperties");function gT(C,V,te,K,Z){V.isScene!==!0&&(V=Me),$e.resetTextureUnits();let Re=V.fog,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,Te=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ft.workingColorSpace,Ue=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,He=N.get(K.envMap||ke,Ue),nt=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,yt=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!te.morphAttributes.position,_t=!!te.morphAttributes.normal,Kt=!!te.morphAttributes.color,Lt=ds;K.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Lt=P.toneMapping);let Pt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,xn=Pt!==void 0?Pt.length:0,Ge=Ve.get(K),Rn=E.state.lights;if(Ut===!0&&(ce===!0||C!==J)){let Vt=C===J&&K.id===q;oe.setState(K,C,Vt)}let St=!1,_o=!1;K.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Rn.state.version||Z.isBatchedMesh&&Ge.batching===!1||!Z.isBatchedMesh&&Ge.batching===!0||Z.isBatchedMesh&&Ge.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ge.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ge.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ge.instancingMorph===!1&&Z.morphTexture!==null||Ge.envMap!==He||K.fog===!0&&Ge.fog!==Re||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==oe.numPlanes||Ge.numIntersection!==oe.numIntersection)||Ge.vertexAlphas!==nt||Ge.vertexTangents!==yt||Ge.morphTargets!==ze||Ge.morphNormals!==_t||Ge.morphColors!==Kt||Ge.morphTargetsCount!==xn||Ge.numLightProbeGrids!==iv(E.state.lightProbeGridArray)?St=!0:(Ge.outputColorSpace!==Te||Ge.toneMapping!==Lt)&&(_o=!0):(St=!0,Ge.__version=K.version);let bn=Ge.currentProgram;(St===!0||_o===!0)&&(bn=_o===!0?mT(K,V,Z,Te,Lt):Mc(K,V,Z),U&&K.isNodeMaterial&&U.onUpdateProgram(K,bn,Ge));let Bh=!1,wr=!1,vo=!1,vt=bn.getUniforms(),mn=Ge.uniforms;if(be.useProgram(bn.program)&&(Bh=!0,wr=!0,vo=!0),K.id!==q&&(q=K.id,wr=!0),Bh||J!==C){be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",C.projectionMatrix),vt.setValue(B,"viewMatrix",C.matrixWorldInverse);let ln=vt.map.cameraPosition;ln!==void 0&&ln.setValue(B,he.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,wr=!0,vo=!0)}if(Ge.needsLights&&(Rn.state.sunShadowMap.length>0&&vt.setValue(B,"sunShadowMap",Rn.state.sunShadowMap,$e),Rn.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",Rn.state.directionalShadowMap,$e),Rn.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",Rn.state.spotShadowMap,$e),Rn.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",Rn.state.pointShadowMap,$e)),Z.isSkinnedMesh){vt.setOptional(B,Z,"bindMatrix"),vt.setOptional(B,Z,"bindMatrixInverse");let Vt=Z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),vt.setValue(B,"boneTexture",Vt.boneTexture,$e))}Z.isBatchedMesh&&(vt.setOptional(B,Z,"batchingTexture"),vt.setValue(B,"batchingTexture",Z._matricesTexture,$e),vt.setOptional(B,Z,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",Z._indirectTexture,$e),vt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",Z._colorsTexture,$e));let Ui=te.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&le.update(Z,te,bn),(wr||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,vt.setValue(B,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(mn.envMapIntensity.value=V.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=yI()),wr){if(vt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Ge.needsLights&&xT(mn,vo),Re&&K.fog===!0&&_e.refreshFogUniforms(mn,Re),_e.refreshMaterialUniforms(mn,K,ae,fe,E.state.transmissionRenderTarget[C.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let Vt=M,ln=0;for(let zs of E.state.lightProbeGridArray)zs.texture!==null&&(Vt.textures[ln]=zs.texture,Vt.min[ln]=zs.boundingBox.min,Vt.max[ln]=zs.boundingBox.max,Vt.resolution[ln]=zs.resolution,ln++);for(let zs in Vt)Vt[zs].length=ln;mn.probesSH.value=Vt.textures,mn.probesMin.value=Vt.min,mn.probesMax.value=Vt.max,mn.probesResolution.value=Vt.resolution}Ml.upload(B,sv(Ge),mn,$e)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ml.upload(B,sv(Ge),mn,$e),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(B,"center",Z.center),vt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),vt.setValue(B,"normalMatrix",Z.normalMatrix),vt.setValue(B,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){let Vt=K.uniformsGroups;for(let ln=0,zs=Vt.length;ln<zs;ln++){let av=Vt[ln];qe.update(av,bn),qe.bind(av,bn)}}return bn}u(gT,"setProgram");function xT(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.sunLights.needsUpdate=V,C.sunLightShadows.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}u(xT,"markUniformsLightsNeedsUpdate");function bT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(bT,"materialNeedsLights"),this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,V,te){let K=Ve.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ve.get(C.texture).__webglTexture=V,Ve.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){let te=Ve.get(C);te.__webglFramebuffer=V,te.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,te=0){$=C,Q=V,z=te;let K=null,Z=!1,Re=!1;if(C){let Te=Ve.get(C);if(Te.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),ee.copy(C.viewport),pe.copy(C.scissor),ge=C.scissorTest,be.viewport(ee),be.scissor(pe),be.setScissorTest(ge),q=-1;return}else if(Te.__webglFramebuffer===void 0)$e.setupRenderTarget(C);else if(Te.__hasExternalTextures)$e.rebindTextures(C,Ve.get(C.texture).__webglTexture,Ve.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let nt=C.depthTexture;if(Te.__boundDepthTexture!==nt){if(nt!==null&&Ve.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(C)}}let Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Re=!0);let He=Ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[V])?K=He[V][te]:K=He[V],Z=!0):C.samples>0&&$e.useMultisampledRTT(C)===!1?K=Ve.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[te]:K=He,ee.copy(C.viewport),pe.copy(C.scissor),ge=C.scissorTest}else ee.copy(De).multiplyScalar(ae).floor(),pe.copy(ut).multiplyScalar(ae).floor(),ge=ht;if(te!==0&&(K=X),be.bindFramebuffer(B.FRAMEBUFFER,K)&&be.drawBuffers(C,K),be.viewport(ee),be.scissor(pe),be.setScissorTest(ge),Z){let Te=Ve.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,te)}else if(Re){let Te=V;for(let Ue=0;Ue<C.textures.length;Ue++){let He=Ve.get(C.textures[Ue]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ue,He.__webglTexture,te,Te)}}else if(C!==null&&te!==0){let Te=Ve.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,te)}q=-1};function ov(C){let V=Ve.get(C);return(V.__readFormat!==C.format||V.__readType!==C.type)&&(V.__readFormat=C.format,V.__readType=C.type,V.__formatReadable=tt.textureFormatReadable(C.format),V.__typeReadable=tt.textureTypeReadable(C.type)),V}u(ov,"getReadableState"),this.readRenderTargetPixels=function(C,V,te,K,Z,Re,ke,Te=0){if(!(C&&C.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){be.bindFramebuffer(B.FRAMEBUFFER,Ue);try{let He=C.textures[Te],nt=He.format,yt=He.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let ze=ov(He);if(ze.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&te>=0&&te<=C.height-Z&&B.readPixels(V,te,K,Z,ve.convert(nt),ve.convert(yt),Re)}finally{let He=$!==null?Ve.get($).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,V,te,K,Z,Re,ke,Te=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(V>=0&&V<=C.width-K&&te>=0&&te<=C.height-Z){be.bindFramebuffer(B.FRAMEBUFFER,Ue);let He=C.textures[Te],nt=He.format,yt=He.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let ze=ov(He);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),B.readPixels(V,te,K,Z,ve.convert(nt),ve.convert(yt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Kt=$!==null?Ve.get($).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,Kt);let Lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zM(B,Lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(_t),B.deleteSync(Lt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,te=0){let K=Math.pow(2,-te),Z=Math.floor(C.image.width*K),Re=Math.floor(C.image.height*K),ke=V!==null?V.x:0,Te=V!==null?V.y:0;$e.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,ke,Te,Z,Re),be.unbindTexture()},this.copyTextureToTexture=function(C,V,te=null,K=null,Z=0,Re=0){let ke,Te,Ue,He,nt,yt,ze,_t,Kt,Lt=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(te!==null)ke=te.max.x-te.min.x,Te=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,He=te.min.x,nt=te.min.y,yt=te.isBox3?te.min.z:0;else{let vt=Math.pow(2,-Z);ke=Math.floor(Lt.width*vt),Te=Math.floor(Lt.height*vt),C.isDataArrayTexture?Ue=Lt.depth:C.isData3DTexture?Ue=Math.floor(Lt.depth*vt):Ue=1,He=0,nt=0,yt=0}K!==null?(ze=K.x,_t=K.y,Kt=K.z):(ze=0,_t=0,Kt=0);let Pt=ve.convert(V.format),xn=ve.convert(V.type),Ge;V.isData3DTexture?($e.setTexture3D(V,0),Ge=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?($e.setTexture2DArray(V,0),Ge=B.TEXTURE_2D_ARRAY):($e.setTexture2D(V,0),Ge=B.TEXTURE_2D),be.activeTexture(B.TEXTURE0),be.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),be.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),be.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);let Rn=be.getParameter(B.UNPACK_ROW_LENGTH),St=be.getParameter(B.UNPACK_IMAGE_HEIGHT),_o=be.getParameter(B.UNPACK_SKIP_PIXELS),bn=be.getParameter(B.UNPACK_SKIP_ROWS),Bh=be.getParameter(B.UNPACK_SKIP_IMAGES);be.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),be.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),be.pixelStorei(B.UNPACK_SKIP_PIXELS,He),be.pixelStorei(B.UNPACK_SKIP_ROWS,nt),be.pixelStorei(B.UNPACK_SKIP_IMAGES,yt);let wr=C.isDataArrayTexture||C.isData3DTexture,vo=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){let vt=Ve.get(C),mn=Ve.get(V),Ui=Ve.get(vt.__renderTarget),Vt=Ve.get(mn.__renderTarget);be.bindFramebuffer(B.READ_FRAMEBUFFER,Ui.__webglFramebuffer),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ln=0;ln<Ue;ln++)wr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(C).__webglTexture,Z,yt+ln),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.get(V).__webglTexture,Re,Kt+ln)),B.blitFramebuffer(He,nt,He+ke,nt+Te,ze,_t,ze+ke,_t+Te,B.DEPTH_BUFFER_BIT,B.NEAREST);be.bindFramebuffer(B.READ_FRAMEBUFFER,null),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Ve.has(C)){let vt=Ve.get(C),mn=Ve.get(V);be.bindFramebuffer(B.READ_FRAMEBUFFER,O),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let Ui=0;Ui<Ue;Ui++)wr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.__webglTexture,Z,yt+Ui):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vt.__webglTexture,Z),vo?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Re,Kt+Ui):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Re),Z!==0?B.blitFramebuffer(He,nt,He+ke,nt+Te,ze,_t,ze+ke,_t+Te,B.COLOR_BUFFER_BIT,B.NEAREST):vo?B.copyTexSubImage3D(Ge,Re,ze,_t,Kt+Ui,He,nt,ke,Te):B.copyTexSubImage2D(Ge,Re,ze,_t,He,nt,ke,Te);be.bindFramebuffer(B.READ_FRAMEBUFFER,null),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vo?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ge,Re,ze,_t,Kt,ke,Te,Ue,Pt,xn,Lt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ge,Re,ze,_t,Kt,ke,Te,Ue,Pt,Lt.data):B.texSubImage3D(Ge,Re,ze,_t,Kt,ke,Te,Ue,Pt,xn,Lt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Re,ze,_t,ke,Te,Pt,xn,Lt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Re,ze,_t,Lt.width,Lt.height,Pt,Lt.data):B.texSubImage2D(B.TEXTURE_2D,Re,ze,_t,ke,Te,Pt,xn,Lt);be.pixelStorei(B.UNPACK_ROW_LENGTH,Rn),be.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St),be.pixelStorei(B.UNPACK_SKIP_PIXELS,_o),be.pixelStorei(B.UNPACK_SKIP_ROWS,bn),be.pixelStorei(B.UNPACK_SKIP_IMAGES,Bh),Re===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&B.generateMipmap(Ge),be.unbindTexture()},this.initRenderTarget=function(C){Ve.get(C).__webglFramebuffer===void 0&&$e.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?$e.setTextureCube(C,0):C.isData3DTexture?$e.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?$e.setTexture2DArray(C,0):$e.setTexture2D(C,0),be.unbindTexture()},this.resetState=function(){Q=0,z=0,$=null,be.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};u(Fx,"WebGLRenderer");var np=Fx;var wS=u(s=>{let e=Math.min(1,Math.max(0,s))**.5;return 4*e*(1-e)},"swell"),_I=u(s=>1-(1-s)*(1-s),"easeOut"),op=u(s=>{let e=Math.sin(s*12.9898)*43758.5453;return e-Math.floor(e)},"share"),Bx=u((s,e=0)=>{let t=Math.min(1,Math.max(0,s)),n=_I(t);return Array.from({length:7},(i,r)=>{if(r===0)return{at:[0,.08+.22*n,0],size:.09*wS(t),shade:0};let o=(r-1)/6*Math.PI*2+(op(e+r*7)-.5)*.6,a=(.12+op(e+r*13)*.08)*n,l=.05+(.08+op(e+r*17)*.1)*n;return{at:[Math.cos(o)*a,l,Math.sin(o)*a],size:(.055+op(e+r*19)*.03)*wS(t*1.1),shade:r%2===0?0:1}})},"puffAt");var qn=["grass","plains","sand","rock","snow","forest","mud","tundra"],xs={shore:-.03,deep:-.15,reach:3},ap={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},TS={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},ES={Ocean:{relief:{base:xs.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:TS,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Yo=u(s=>s==="Unknown"?ap:(Object.prototype.hasOwnProperty.call(ES,s)?ES[s]:void 0)??TS,"terrainEntry");var vI=u((s,e,t)=>{let n=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),AS=Float64Array.from({length:32},(s,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),RS=u(s=>s*s*s*(s*(s*6-15)+10),"fade"),bs=u(({cell:s,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/s)),i=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/s)),o=e.v===null||r===null?s:e.v/r,a=u(h=>(h%n+n)%n,"wrapU"),l=u(h=>r===null?h:(h%r+r)%r,"wrapV"),c=u((h,f,d,m)=>{let g=Math.floor(vI(h,f,t)*16)*2;return(AS[g]??0)*d+(AS[g+1]??0)*m},"slope");return(h,f)=>{let d=h/i,m=f/o,g=Math.floor(d),_=Math.floor(m),x=d-g,b=m-_,v=RS(x),S=RS(b),M=a(g),A=a(g+1),E=l(_),y=l(_+1),w=c(M,E,x,b)+(c(A,E,x-1,b)-c(M,E,x,b))*v,L=c(M,y,x,b-1)+(c(A,y,x-1,b-1)-c(M,y,x,b-1))*v;return Math.max(-1,Math.min(1,(w+(L-w)*S)*1.4))}},"periodicNoise"),si=u(s=>{let e=s.map((n,i)=>.5**i),t=e.reduce((n,i)=>n+i,0);return(n,i)=>s.reduce((r,o,a)=>r+o(n,i)*(e[a]??0),0)/t},"fractalNoise");var Vr=128,up=.5,lp=u(s=>(e,t)=>1-2*Math.abs(s(e,t)),"ridge"),MI={grass:{grain:u(({noise:s})=>si([s(64,1),s(16,2),s(4,25)]),"grain"),shade:.3,bumps:u(({noise:s})=>si([s(4,3),s(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:u(({noise:s})=>si([s(64,5),s(8,6)]),"grain"),shade:.3,bumps:u(({noise:s})=>si([s(8,7),s(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:u(({noise:s,wave:e,texels:t})=>{let n=e(7,3),i=s(64,9),r=s(32,10);return(o,a)=>.7*n(o+t(6)*i(o,a),a)+.3*r(o,a)},"grain"),shade:.12,bumps:u(({noise:s,wave:e,texels:t})=>{let n=e(7,3),i=s(64,9);return(r,o)=>n(r+t(6)*i(r,o),o)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:u(({noise:s})=>si([lp(s(24,11)),lp(s(12,12)),s(6,13)]),"grain"),shade:.35,bumps:u(({noise:s})=>si([lp(s(24,11)),lp(s(12,12)),s(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:u(({noise:s})=>s(64,14),"grain"),shade:.06,bumps:u(({noise:s})=>s(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:u(({noise:s})=>si([s(10,16),s(40,17)]),"grain"),shade:.3,bumps:u(({noise:s})=>s(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:u(({noise:s})=>s(48,19),"grain"),shade:.25,bumps:u(({noise:s})=>si([s(32,20),s(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:u(({noise:s})=>si([s(4,22),s(48,23)]),"grain"),shade:.3,bumps:u(({noise:s})=>s(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},cp=u(s=>Math.max(0,Math.min(255,Math.round(s*255))),"byte"),SI=u((s=Vr,[e,t]=[0,0])=>{let n=new Uint8Array(s*s*4*qn.length),i={u:s,v:s};return qn.forEach((r,o)=>{let a=MI[r],l=u((S,M)=>bs({cell:S*s/Vr,period:i,seed:7919*(o+1)+M}),"noise"),c=u((S,M)=>(A,E)=>Math.sin(2*Math.PI*(S*A+M*E)/s),"wave"),h={noise:l,wave:c,texels:u(S=>S*s/Vr,"texels")},f=a.grain(h),d=a.bumps(h),m=o*s*s*4,g=new Float32Array(s*s);for(let S=0;S<s;S++)for(let M=0;M<s;M++)g[S*s+M]=d(M+e,S+t);let _=u((S,M)=>g[(M+s)%s*s+(S+s)%s]??0,"height"),x=new Float32Array(s*s),b=0;for(let S=0;S<s;S++)for(let M=0;M<s;M++)x[S*s+M]=f(M+e,S+t),b+=x[S*s+M]??0;let v=b/(s*s);for(let S=0;S<s;S++)for(let M=0;M<s;M++){let A=m+(S*s+M)*4,E=(x[S*s+M]??0)-v,y=(_(M+1,S)-_(M-1,S))/2*(s/Vr),w=(_(M,S+1)-_(M,S-1))/2*(s/Vr);n[A]=cp(a.shade*E+.5),n[A+1]=cp((1-Math.max(-1,Math.min(1,y*a.steep)))/2),n[A+2]=cp((1-Math.max(-1,Math.min(1,w*a.steep)))/2),n[A+3]=cp(a.rough+a.roughVaries*E)}}),n},"surfaceTextures"),CS=SI;var Wi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Xi=u(s=>Number.isInteger(s)?`${s}.0`:`${s}`,"number"),PS=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Xi(Wi.rockTo)}, ${Xi(Wi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Xi(Wi.snowAtEquator)} + (${Xi(Wi.snowAtPoles)} - ${Xi(Wi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Xi(Wi.snowDeepens)}, height) * smoothstep(${Xi(Wi.snowSlips)}, ${Xi(Wi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Xi(Wi.wetFrom)}, ${Xi(Wi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Xi(Wi.wetUpTo)}, height));
}
`;var wI=u(s=>[s.u/Math.max(1,Math.round(s.u/up)),s.v===null?up:s.v/Math.max(1,Math.round(s.v/up))],"surfaceTile"),EI=qn.map((s,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),TI=null,AI=u(()=>TI??=CS(),"made"),RI=u((s,e)=>{let t=new No(AI(),Vr,Vr,qn.length),n=new en({roughness:.92,vertexColors:!0}),[i,r]=wI(s);return t.format=Xn,t.type=Mn,t.wrapS=Gn,t.wrapT=Gn,t.magFilter=zt,t.minFilter=vn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=Hi,t.needsUpdate=!0,n.onBeforeCompile=o=>{o.uniforms.surfaceDetail={value:t},o.uniforms.surfaceTile={value:new We(i,r)},o.uniforms.groundExtent={value:e},o.uniforms.rockColour={value:new Pe(Yo("Mountains").colour)},o.uniforms.snowColour={value:new Pe(Yo("Glacier").colour)},o.vertexShader=`attribute vec4 surfacesA;
attribute vec4 surfacesB;
attribute float shore;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
varying float vHeight;
varying float vShore;
${o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurfacesA = surfacesA;
  vSurfacesB = surfacesB;
  vShore = shore;
  // Where it is on the ground, at this copy of the world: east and south; and how high.
  vec4 groundAt = modelMatrix * vec4(transformed, 1.0);
  vGround = groundAt.xz;
  vHeight = groundAt.y;`)}`,o.fragmentShader=`uniform highp sampler2DArray surfaceDetail;
uniform vec2 surfaceTile;
uniform float groundExtent;
uniform vec3 rockColour;
uniform vec3 snowColour;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
varying float vHeight;
varying float vShore;
${PS}
${o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${EI}
  // Fading to none (the colour alone) as the ground nears a square never seen, whose points have no surface.
  surface = surface / max(surfaceTotal, 1.0) + max(0.0, 1.0 - surfaceTotal) * vec4(0.5, 0.5, 0.5, roughness);
  // Where the land lies (\`terrain/cover.ts\`): bare rock where it's steep, snow high up, wet at the waterline. Not on a
  //  square never seen, whose ground is the cloud's.
  vec3 groundNormal = transformDirectionByInverseViewMatrix(normalize(vNormal), viewMatrix);
  float seen = min(surfaceTotal, 1.0);
  float rockShare = coverRock(groundNormal.y) * seen;
  // How far from the equator, the same at every copy of the world above or below.
  float snowShare = coverSnow(vHeight, groundNormal.y, coverLatitude(vGround.y, groundExtent)) * seen;
  float wetShare = coverWet(vHeight, vShore) * seen;
  diffuseColor.rgb = mix(diffuseColor.rgb, rockColour, rockShare);
  surface = mix(surface, surface${qn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${qn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),IS=RI;function hp(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Rt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let f=s[h],d=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(f.morphAttributes[g]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,f=[];for(let d=0;d<s.length;++d){let m=s[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=LS(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][d]);let g=LS(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}u(hp,"mergeGeometries");function LS(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Mt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+f,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}u(LS,"mergeAttributes");function kx(s,e){if(e===y0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===vl||e===yu){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===vl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}u(kx,"toTrianglesDrawMode");var $o={radius:.42,thickness:.025},zx=$o.radius-$o.thickness,dp=.07,Eu=.04,Hx=.25,Bt=.004,Gx=.08,wu=.012,pp=.045,mp=.02,BS=625341585,CI=.18,PI=30,II=5,LI=u(s=>Math.min(PI,II+Math.max(0,s-1)*2),"lotsFor"),NI=u(s=>Math.floor(Math.max(0,s-1)/6),"tierFor"),Wx=u(s=>{let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619);return e>>>0},"citySeed"),kS=u((s,e,t,n=[])=>({seed:s,lots:LI(e),tier:NI(e),ways:[...t],sea:[...n]}),"planFor"),DI=u((s,e)=>{let[t,n]=s.centre,i=e.map(l=>{let[c,h]=s.toward(l),f=Math.hypot(c-t,h-n);return{offset:l,du:f===0?0:(c-t)/f,dv:f===0?0:(h-n)/f}}),r=i.reduce((l,{du:c})=>l+c,0),o=i.reduce((l,{dv:c})=>l+c,0),a=u(({du:l,dv:c})=>l*r+c*o,"most");return i.length===0?[]:[i.reduce((l,c)=>a(c)>a(l)?c:l).offset]},"quayOf"),Yn=u((s,e)=>{let t=Math.imul(s^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Tu=u((s,e,t)=>{let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i;return r===0?0:((s[0]-e[0])*n+(s[1]-e[1])*i)/r},"along"),El=u(({at:[s,e],width:t,facing:n})=>{let i=t/2,r=[Math.cos(n)*i,-Math.sin(n)*i],o=[Math.sin(n)*i,Math.cos(n)*i];return[[s-r[0]-o[0],e-r[1]-o[1]],[s+r[0]-o[0],e+r[1]-o[1]],[s+r[0]+o[0],e+r[1]+o[1]],[s-r[0]+o[0],e-r[1]+o[1]]]},"footprintOf"),OI=u(([s,e])=>{let t=Math.hypot(e[0]-s[0],e[1]-s[1]),n=-(e[1]-s[1])/t*(Eu/2),i=(e[0]-s[0])/t*(Eu/2);return[[s[0]+n,s[1]+i],[e[0]+n,e[1]+i],[e[0]-n,e[1]-i],[s[0]-n,s[1]-i]]},"stripOf"),gp=u((s,e,t)=>[s,e].some(n=>n.some((i,r)=>{let o=n[(r+1)%n.length],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=-(o[1]-i[1])/a,c=(o[0]-i[0])/a,h=u(m=>m.map(([g,_])=>g*l+_*c),"onto"),f=h(s),d=h(e);return Math.min(...d)-Math.max(...f)>=t||Math.min(...f)-Math.max(...d)>=t})),"apart"),wl=u((s,e)=>{let[t,n,,i]=e,r=Tu(s,t,n),o=Tu(s,t,i),a=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-r,r-1),Math.max(0,-o,o-1))*a},"fromFootprint"),zS=u((s,{seed:e,lots:t,tier:n,ways:i,sea:r},o)=>{let[a,l]=s.centre,c=[...i,...DI(s,r)].flatMap(x=>{let[b,v]=s.toward(x),S=[(a+b)/2,(l+v)/2],M=S[0]-a,A=S[1]-l,E=Math.hypot(M,A);return E===0?[]:[[[a+M/E*dp,l+A/E*dp],S]]}),h=c.map(OI),f=u((x,b)=>{let v=c.map(([S,M])=>{let A=Tu(x,S,M),E=[S[0]+(M[0]-S[0])*A,S[1]+(M[1]-S[1])*A];return{t:A,near:E,off:Math.hypot(E[0]-x[0],E[1]-x[1])}}).filter(({t:S,off:M})=>S>=0&&S<=1&&M<=Eu/2+b+Bt&&M>0).sort((S,M)=>S.off-M.off)[0];return v===void 0?Math.atan2(a-x[0],l-x[1]):Math.atan2(v.near[0]-x[0],v.near[1]-x[1])},"facingAt"),d=Math.ceil(zx/Gx),m=[];for(let x=-d;x<=d;x++)for(let b=-d;b<=d;b++){let v=(x+d)*(d*2+1)+(b+d),S=[a+b*Gx+(Yn(e,v*4)-.5)*2*wu,l+x*Gx+(Yn(e,v*4+1)-.5)*2*wu],M=Math.hypot(S[0]-a,S[1]-l),A=pp+Yn(e,v*4+2)*mp;M>zx||!s.owns(S[0],S[1])||m.push({at:S,width:A,facing:f(S,A),roof:Yn(e^BS,v),storeys:1+(M<CI?n:0)+(Yn(e,v*4+3)<.2?1:0),order:M+Yn(e,v*4+3)*.03})}m.sort((x,b)=>x.order-b.order);let g=[],_=[];return m.forEach(({at:x,width:b,facing:v,storeys:S,roof:M})=>{let A=El({at:x,width:b,facing:v});A.every(([E,y])=>Math.hypot(E-a,y-l)<=zx-Bt)&&wl([a,l],A)>=dp+Bt&&wl(o,A)>=Hx+Bt&&h.every(E=>gp(A,E,Bt))&&_.every(E=>gp(A,E,Bt))&&(g.push({at:x,width:b,facing:v,storeys:S,roof:M}),_.push(A))}),{plaza:{at:[a,l],radius:dp},streets:c,lots:g.slice(0,t)}},"sprawl"),NS=4,UI=.62,FI=.05,GS=12,Vx=.085,fp=.055,BI=.13,DS=32,kI=1821285621,VS=u(s=>s<NS?0:Math.min(GS,s-NS+1),"suburbStepsFor"),zI=u(s=>s<=0?0:UI+(Math.min(s,GS)-1)*FI,"suburbReach"),GI=u(s=>1-.55*Math.min(1,Math.max(0,(s-.5)/.7)),"builtShare"),OS=u(([s,e],t)=>{let n=Math.hypot(e[0]-s[0],e[1]-s[1]),i=-(e[1]-s[1])/n*t,r=(e[0]-s[0])/n*t;return[[s[0]+i,s[1]+r],[e[0]+i,e[1]+r],[e[0]-i,e[1]-r],[s[0]-i,s[1]-r]]},"strip"),US=u(s=>s.slice(1).map((e,t)=>[s[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),FS=u((s,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...s.map(([n])=>n))>=t||Math.min(...s.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...s.map(([,n])=>n))>=t||Math.min(...s.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),HS=u((s,{seed:e,steps:t,city:n},i)=>{let r=zI(t);if(r===0)return[];let[o,a]=s.centre,l=s.toward(n),c=e^Math.imul(kI,(n[0]+7)*31+(n[1]+7)),h=i.runs.flatMap(({points:E})=>US(E)),f=[...h.map(E=>({line:E,wide:fp})),...i.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:BI}))],d=[...f.map(({line:E,wide:y})=>OS(E,y)),...i.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>OS(E,fp))],m=u((E,y)=>{let w=f.map(({line:[L,P],wide:D})=>{let U=Tu(E,L,P),X=[L[0]+(P[0]-L[0])*U,L[1]+(P[1]-L[1])*U];return{t:U,near:X,off:Math.hypot(X[0]-E[0],X[1]-E[1]),wide:D}}).filter(({t:L,off:P,wide:D})=>L>=0&&L<=1&&P<=D+y+Bt&&P>0).sort((L,P)=>L.off-P.off)[0];return w===void 0?Math.atan2(l[0]-E[0],l[1]-E[1]):Math.atan2(w.near[0]-E[0],w.near[1]-E[1])},"facingAt"),g=Math.ceil(.75/Vx),_=[],x=u(E=>pp+Yn(c,E*5+2)*mp,"widthOf"),b=u(E=>Math.min(1/0,...h.map(([y,w])=>{let L=Math.max(0,Math.min(1,Tu(E,y,w)));return Math.hypot(y[0]+(w[0]-y[0])*L-E[0],y[1]+(w[1]-y[1])*L-E[1])})),"fromRuns"),v=u((E,y,w)=>{let L=Math.hypot(y[0]-l[0],y[1]-l[1]),P=L+Yn(c,E*5+3)*.03,D=x(E);P<=r&&Yn(c,E*5+4)<GI(L)&&s.owns(y[0],y[1])&&(!w||b(y)>=fp+Bt*2+pp+mp)&&_.push({at:y,width:D,facing:m(y,D),roof:Yn(c^BS,E),storeys:1+(Yn(c,E*5+3)<.15?1:0),order:P})},"consider");for(let E=-g;E<=g;E++)for(let y=-g;y<=g;y++){let w=(E+g)*(g*2+1)+(y+g);v(w,[o+y*Vx+(Yn(c,w*5)-.5)*2*wu,a+E*Vx+(Yn(c,w*5+1)-.5)*2*wu],!0)}i.runs.forEach(({key:E,points:y})=>{let w=US(y).map(([D,U])=>({from:D,to:U,length:Math.hypot(U[0]-D[0],U[1]-D[1])})),L=w.reduce((D,U)=>D+U.length,0),P=Math.min(DS,Math.floor(L/(pp+mp+Bt*2)));for(let D=0;D<P;D++)[1,-1].forEach((U,X)=>{let O=(g*2+1)**2+(E*DS+D)*2+X,Y=fp+x(O)/2+Bt*2,Q=(D+.5)/P*L+(Yn(c,O*5)-.5)*wu;for(let[z,{from:$,to:q,length:J}]of w.entries()){if(Q<=J||z===w.length-1){let ee=(q[0]-$[0])/J,pe=(q[1]-$[1])/J;v(O,[$[0]+ee*Q-pe*Y*U,$[1]+pe*Q+ee*Y*U],!1);break}Q-=J}})}),_.sort((E,y)=>E.order-y.order);let S=u(([E,y],w)=>(Math.hypot(E-w[0],y-w[1])**2-Math.hypot(E-l[0],y-l[1])**2)/(2*Math.hypot(w[0]-l[0],w[1]-l[1])),"nearer"),M=[],A=[];return _.forEach(({at:E,width:y,facing:w,storeys:L,roof:P})=>{let D=El({at:E,width:y,facing:w});El({at:E,width:y+Bt*2,facing:w}).every(([U,X])=>s.owns(U,X))&&i.others.every(U=>D.every(X=>S(X,U)>=Bt/2))&&wl(l,D)>=$o.radius+$o.thickness+Bt&&i.stands.every(U=>wl(U,D)>=Hx+Bt)&&wl(s.centre,D)>=Hx+Bt&&[E,...D].every(([U,X])=>(i.ground?.(U,X)??0)>=0)&&i.taken.every(([U,X,O])=>wl([U,X],D)>=O+Bt)&&d.every(U=>FS(D,U,Bt)||gp(D,U,Bt))&&A.every(U=>FS(D,U,Bt)||gp(D,U,Bt))&&(M.push({at:E,width:y,facing:w,storeys:L,roof:P}),A.push(D))}),M},"suburb");var WS="#c79a72",VI="#5a4a3a";var wn="#7a5532",Yx="#5f6266",XS="#8a8f96",qi="#5d6447",Xx="#e8e0cc",YS="#6e4b2f",Ko="#8a8580",qS="#5b3e27",Tl="#7d858c",HI=new H(0,1,0),Le=new ls(1,1,1),un=new _i(.5,.5,1,10),Zo=new Qs(.5,1,10),Al=new zr(.5,10,8),Kx=class Kx{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let i=Math.cos(n),r=Math.sin(n);return e.parts.forEach(o=>{let[a,l,c]=o.at;this.parts.push({...o,at:[t[0]+a*i+c*r,t[1]+l,t[2]-a*r+c*i],yaw:(o.yaw??0)+n})}),this}};u(Kx,"Parts");var hn=Kx,WI=u((s,e,t)=>{switch(s){case"ancient":t.add({shape:Al,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Zo,colour:Yx,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Le,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:un,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Al,colour:qi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),XI=u((s,e,t,n)=>{switch(s){case"club":n.add({shape:un,colour:wn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:un,colour:wn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Zo,colour:Yx,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:un,colour:wn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Zo,colour:XS,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Le,colour:XS,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Le,colour:wn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:un,colour:wn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Le,colour:s==="rifle"?"#3a3a3a":wn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Le,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Le,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:un,colour:wn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(s==="spear"||s==="sword")&&n.add({shape:un,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),qI={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},$x=u((s,e,t,{legs:n=!0,dress:i}={})=>{let r=new hn,o=i===void 0?void 0:qI[i],a=o?.coat??(s==="modern"?qi:t[0]),l=o?.legs??(s==="ancient"?WS:s==="modern"?qi:VI);return n&&(r.add({shape:Le,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Le,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Le,colour:a,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Le,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Le,colour:a,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Le,colour:a,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Al,colour:WS,at:[0,.16,0],size:[.034,.038,.034]}),i==="snow"?r.add({shape:Al,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):i==="irregular"?r.add({shape:Al,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):WI(s,t,r),i==="parachute"&&r.add({shape:Le,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),XI(e,s,t,r),r},"person"),Au=u(s=>s<=1?[[0,0]]:s===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),qx=u((s=YS)=>new hn().add({shape:Le,colour:s,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Le,colour:s,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Le,colour:s,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Le,colour:s,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Le,colour:s,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Le,colour:s,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Le,colour:s,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),YI=u((s,e,t)=>new hn().addAll(qx(),[0,0,0]).add({shape:Le,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll($x(s,e,t,{legs:!1}),[0,.04,0]),"rider"),$I=u(s=>new hn().add({shape:Le,colour:Ko,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Le,colour:Ko,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:un,colour:Ko,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Le,colour:Ko,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Le,colour:Ko,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Le,colour:Ko,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Le,colour:Ko,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Le,colour:s[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Le,colour:s[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),En=u((s,e=.05)=>({shape:un,colour:wn,at:s,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),KI=u((s,e,t)=>{if(e==="chariot")return new hn().addAll(qx(),[0,0,.09]).add({shape:Le,colour:wn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Le,colour:s[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(En([-.042,.035,-.045],.065)).add(En([.042,.035,-.045],.065)).addAll($x(t,"spear",s,{legs:!1}),[0,0,-.045]);let n=new hn().addAll(qx(t==="ancient"?"#8a7a64":YS),[0,0,.1]).add({shape:Le,colour:wn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Le,colour:s[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(En([-.042,.03,-.03])).add(En([.042,.03,-.03])).add(En([-.042,.03,-.09])).add(En([.042,.03,-.09]));return e==="wagon"?n.add({shape:un,colour:Xx,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Le,colour:Xx,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Le,colour:s[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Le,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),ZI=u((s,e,t)=>{if(s==="ancient"||s==="medieval")return new hn().add({shape:Le,colour:wn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Le,colour:wn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Le,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(En([-.045,.03,.04],.045)).add(En([.045,.03,.04],.045)).add(En([-.045,.03,-.04],.045)).add(En([.045,.03,-.04],.045));let n=t?.19:s==="renaissance"?.12:.16,i=s==="renaissance"?"#3d3a36":s==="modern"?qi:Yx;return new hn().add({shape:un,colour:i,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Le,colour:s==="modern"?qi:wn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Le,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(En([-.04,.035,0],.07)).add(En([.04,.035,0],.07))},"siege"),JI=u((s,e,t)=>{if(s==="industrial")return new hn().add({shape:Le,colour:Tl,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Le,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(En([-.045,.025,.06],.045)).add(En([.045,.025,.06],.045)).add(En([-.045,.025,-.06],.045)).add(En([.045,.025,-.06],.045));let n=new hn().add({shape:Le,colour:qi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Le,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Le,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Le,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Le,colour:qi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:un,colour:qi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Le,colour:qi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),jI=u((s,e)=>{let t=s.large?1.25:1,n=.3*t,i=.07*t,r=new hn;switch(s.hull){case"oars":case"sail":{r.add({shape:Le,colour:qS,at:[0,.03,0],size:[i,.045,n*.8]}).add({shape:Zo,colour:qS,at:[0,.03,n*.45],size:[i,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:e[0],at:[0,.056,0],size:[i+.004,.008,n*.82]});let o=s.hull==="oars"?1:s.large?3:2;for(let a=0;a<o;a++){let l=(a-(o-1)/2)*.09*t;r.add({shape:un,colour:wn,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:Le,colour:a===0?e[1]:Xx,at:[0,.16,l],size:[i*1.3,.09,.005]})}return(s.guns??0)>0&&r.add({shape:Le,colour:"#1f1f1f",at:[0,.036,0],size:[i+.006,.009,n*.66]}),s.hull==="oars"&&r.add({shape:Le,colour:wn,at:[-i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Le,colour:wn,at:[i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:un,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Le,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Le,colour:Tl,at:[0,.035,0],size:[i*1.1,.05,n*1.15]}).add({shape:Le,colour:"#55595e",at:[0,.062,0],size:[i*1.5,.008,n*1.2]}).add({shape:Le,colour:Tl,at:[i*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Le,colour:e[0],at:[i*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Le,colour:s.era==="industrial"?"#4a4a48":Tl,at:[0,.03,0],size:[i,.045,n*.85]}).add({shape:Zo,colour:s.era==="industrial"?"#4a4a48":Tl,at:[0,.03,n*.47],size:[i,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:Tl,at:[0,.075,-.02],size:[i*.6,.05,n*.3]}).add({shape:un,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Le,colour:e[1],at:[0,.056,0],size:[i+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,s.guns??0).forEach(o=>{let a=o>0?1:-1;r.add({shape:Le,colour:"#5f666c",at:[0,.066,n*o],size:[.035,.02,.035]}).add({shape:un,colour:"#5f666c",at:[0,.07,n*o+a*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),s.missiles&&[-1,1].forEach(o=>r.add({shape:Le,colour:"#4a5056",at:[o*i*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),QI=u((s,e)=>{let t=s.large?1.3:1,n=s.stealth?"#2c3034":s.large?"#6e7378":"#7d8890";return new hn().add({shape:un,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Zo,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Le,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Le,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Le,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),e3=u(s=>new hn().add({shape:Al,colour:qi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Le,colour:qi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Le,colour:s[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Le,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Le,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),t3=u((s,e)=>{let t=e?1.4:1;return new hn().add({shape:un,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Zo,colour:e?"#c8a020":s[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Le,colour:s[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Le,colour:s[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),$S=u((s,e)=>{switch(s.shape){case"foot":{let t=new hn;return Au(s.squad).forEach(([n,i],r)=>t.addAll($x(s.era,s.gear??"none",e,{dress:s.dress}),[n,0,i],r*.3-.3)),t}case"mounted":{let t=new hn;return Au(s.squad).forEach(([n,i])=>t.addAll(YI(s.era,s.gear??"none",e),[n*1.4,0,i])),t}case"elephant":return $I(e);case"cart":return KI(e,s.cart??"wagon",s.era);case"siege":return ZI(s.era,e,s.large===!0);case"vehicle":return JI(s.era,e,s.large===!0);case"ship":return jI(s,e);case"aircraft":return QI(s,e);case"helicopter":return e3(e);default:return t3(e,s.large===!0)}},"figureParts"),n3=u(({at:s,size:e,turn:t=[0,0,0],yaw:n=0})=>new Ze().compose(new H(...s),new $t().setFromAxisAngle(HI,n).multiply(new $t().setFromEuler(new Qn(...t))),new H(...e)),"partMatrix"),xp=u(s=>{let e=s.map(n=>{let{shape:i,colour:r}=n,o=i.clone(),a=new Pe(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([a.r,a.g,a.b],h*3);return o.applyMatrix4(n3(n)),o.setAttribute("color",new Mt(c,3)),o}),t=(e.length===0?null:hp(e))??new Rt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),KS=u((s,e)=>xp($S(s,e).parts),"figureGeometry"),i3=new _i(.19,.2,1,28),s3=new er(.22,.014,4,32),r3=new er(1,.03,3,40),o3="#dfe9ea",a3=[[.11,.2],[.16,.27]],ZS=u((s,e,{fortified:t,scale:n,stand:i,part:r="whole",ripples:o=!1})=>{let a=s.shape==="ship",l=a?0:i,c=r==="base"?[]:$S(s,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+l,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(r==="figures")return xp(c);if(a||c.push({shape:i3,colour:e[1],at:[0,i/2,0],size:[1,i,1]}),a&&o){let h=(s.large?1.25:1)*n;a3.forEach(([f,d])=>c.push({shape:r3,colour:o3,at:[0,.006,0],size:[f*h,d*h,.15],turn:[Math.PI/2,0,0]}))}return t&&c.push({shape:s3,colour:"#b5ab98",at:[0,l+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),xp(c)},"unitBodyGeometry"),l3=new er($o.radius,$o.thickness,6,24),JS=u(()=>xp([{shape:l3,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");function Rl(s){let e=new Map,t=new Map,n=s.clone();return jS(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}u(Rl,"clone");function jS(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)jS(s.children[n],e.children[n],t)}u(jS,"parallelTraverse");var Eb=class Eb extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new yp(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new yp(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gb(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=rr.extractUrlBase(e);o=rr.resolveURL(c,this.path)}else o=rr.extractUrlBase(e);this.manager.itemStart(e);let a=u(function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new fl(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===iw){try{o[mt.KHR_BINARY_GLTF]=new xb(e)}catch(f){i&&i(f);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case mt.KHR_MATERIALS_UNLIT:o[f]=new eb;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[f]=new bb(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[f]=new yb;break;case mt.KHR_MESH_QUANTIZATION:o[f]=new _b;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};u(Eb,"GLTFLoader");var bp=Eb;function c3(){let s={};return{get:u(function(e){return s[e]},"get"),add:u(function(e,t){s[e]=t},"add"),remove:u(function(e){delete s[e]},"remove"),removeAll:u(function(){s={}},"removeAll")}}u(c3,"GLTFRegistry");function Xt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}u(Xt,"getMaterialExtension");var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tb=class Tb{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ko(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ou(h),c.distance=f;break;case"spot":c=new ru(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ys(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};u(Tb,"GLTFLightsExtension");var Qx=Tb,Ab=class Ab{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}};u(Ab,"GLTFMaterialsUnlitExtension");var eb=Ab,Rb=class Rb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};u(Rb,"GLTFMaterialsEmissiveStrengthExtension");var tb=Rb,Cb=class Cb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(r,r)}return Promise.all(i)}};u(Cb,"GLTFMaterialsClearcoatExtension");var nb=Cb,Pb=class Pb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}};u(Pb,"GLTFMaterialsDiffuseRoughnessExtension");var ib=Pb,Ib=class Ib{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};u(Ib,"GLTFMaterialsDispersionExtension");var sb=Ib,Lb=class Lb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}};u(Lb,"GLTFMaterialsIridescenceExtension");var rb=Lb,Nb=class Nb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}};u(Nb,"GLTFMaterialsSheenExtension");var ob=Nb,Db=class Db{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}};u(Db,"GLTFMaterialsTransmissionExtension");var ab=Db,Ob=class Ob{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],Pn),Promise.all(i)}};u(Ob,"GLTFMaterialsVolumeExtension");var lb=Ob,Ub=class Ub{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};u(Ub,"GLTFMaterialsIorExtension");var cb=Ub,Fb=class Fb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(i)}};u(Fb,"GLTFMaterialsSpecularExtension");var ub=Fb,Bb=class Bb{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}};u(Bb,"GLTFMaterialsBumpExtension");var hb=Bb,kb=class kb{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}};u(kb,"GLTFMaterialsAnisotropyExtension");var db=kb,zb=class zb{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};u(zb,"GLTFTextureBasisUExtension");var fb=zb,Gb=class Gb{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Gb,"GLTFTextureWebPExtension");var pb=Gb,Vb=class Vb{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Vb,"GLTFTextureAVIFExtension");var mb=Vb,Hb=class Hb{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(m),h,f,d,i.mode,i.filter),m})})}else return null}};u(Hb,"GLTFMeshoptCompression");var yp=Hb,Wb=class Wb{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Mi.TRIANGLES&&c.mode!==Mi.TRIANGLE_STRIP&&c.mode!==Mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,m=[];for(let g of f){let _=new Ze,x=new H,b=new $t,v=new H(1,1,1),S=new Yc(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&b.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),S.setMatrixAt(A,_.compose(x,b,v));let M=null;for(let A in l)if(A==="_COLOR_0"){let E=l[A];S.instanceColor=new Hn(E.array,E.itemSize,E.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(M===null){let y=S.geometry;M=new Rt,M.name=y.name;for(let w in y.attributes)M.setAttribute(w,y.attributes[w]);for(let w in y.morphAttributes)M.morphAttributes[w]=y.morphAttributes[w];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let w of y.groups)M.addGroup(w.start,w.count,w.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),S.geometry=M}let E=l[A];M.setAttribute(A,new Hn(E.array,E.itemSize,E.normalized))}Ft.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}};u(Wb,"GLTFMeshGpuInstancing");var gb=Wb,iw="glTF",Ru=12,QS={JSON:1313821514,BIN:5130562},Xb=class Xb{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ru),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==iw)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ru,r=new DataView(e,Ru),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===QS.JSON){let c=new Uint8Array(e,Ru+o,a);this.content=n.decode(c)}else if(l===QS.BIN){let c=Ru+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(Xb,"GLTFBinaryExtension");var xb=Xb,qb=class qb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let f=Mb[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=Mb[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],m=Cl[d.componentType];c[f]=m.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],x=l[g];x!==void 0&&(_.normalized=x)}f(m)},a,c,Pn,d)})})}};u(qb,"GLTFDracoMeshCompressionExtension");var bb=qb,Yb=class Yb{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};u(Yb,"GLTFTextureTransformExtension");var yb=Yb,$b=class $b{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}};u($b,"GLTFMeshQuantizationExtension");var _b=$b,Kb=class Kb extends us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,f=(n-t)/h,d=f*f,m=d*f,g=e*c,_=g-c,x=-2*m+3*d,b=m-d,v=1-x,S=b-d+f;for(let M=0;M!==a;M++){let A=o[_+M+a],E=o[_+M+l]*h,y=o[g+M+a],w=o[g+M]*h;r[M]=v*A+S*E+x*y+b*w}return r}};u(Kb,"GLTFCubicSplineInterpolant");var _p=Kb,u3=new $t,Zb=class Zb extends _p{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return u3.fromArray(r).normalize().toArray(r),r}};u(Zb,"GLTFCubicSplineQuaternionInterpolant");var vb=Zb,Mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cl={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ew={9728:Wt,9729:zt,9984:uf,9985:yl,9986:Ho,9987:vn},tw={33071:zn,33648:tl,10497:Gn},Zx={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mb={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},h3={CUBICSPLINE:void 0,LINEAR:Io,STEP:Po},Jx={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function d3(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),s.DefaultMaterial}u(d3,"createDefaultMaterial");function Jo(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u(Jo,"addUnknownExtensionsToUserData");function ys(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(ys,"assignExtrasToUserData");function f3(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}u(f3,"addMorphTargets");function p3(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(p3,"updateMorphTargets");function m3(s){let e,t=s.extensions&&s.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jx(t.attributes):e=s.indices+":"+jx(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+jx(s.targets[n]);return e}u(m3,"createPrimitiveKey");function jx(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}u(jx,"createAttributesKey");function Sb(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(Sb,"getNormalizedComponentScale");function g3(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}u(g3,"getImageURIMimeType");var x3=new Ze,Jb=class Jb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new c3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new nu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new lu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fl(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Jo(r,a,i),ys(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=u((o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(rr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Zx[i.type],a=Cl[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Mt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Zx[i.type],c=Cl[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,x;if(m&&m!==f){let b=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,S=t.cache.get(v);S||(_=new c(a,b*m,i.count*m/h),S=new Do(_,m/h),t.cache.add(v,S)),x=new Dr(S,l,d%m/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),x=new Mt(_,l,g);if(i.sparse!==void 0){let b=Zx.SCALAR,v=Cl[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new v(o[1],S,i.sparse.count*b),E=new c(o[2],M,i.sparse.count*l);a!==null&&(x=new Mt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let y=0,w=A.length;y<w;y++){let L=A[y];if(x.setX(L,E[y*l]),l>=2&&x.setY(L,E[y*l+1]),l>=3&&x.setZ(L,E[y*l+2]),l>=4&&x.setW(L,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ew[d.magFilter]||zt,h.minFilter=ew[d.minFilter]||vn,h.wrapS=tw[d.wrapS]||Gn,h.wrapT=tw[d.wrapT]||Gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(m,g){t.parse(d,m,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let m=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=u(function(x){let b=new Qt(x);b.needsUpdate=!0,m(b)},"onLoad")),t.load(rr.resolveURL(d,r.path),_,void 0,g)})})}let f=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ys(d,o),d.userData.mimeType=o.mimeType||g3(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ul,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new cl,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){let f=i[mt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Nt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=tn);let h=r.alphaMode||Jx.OPAQUE;if(h===Jx.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Jx.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ti&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==ti&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ti){let f=r.emissiveFactor;a.emissive=new Pe().setRGB(f[0],f[1],f[2],Pn)}return r.emissiveTexture!==void 0&&o!==ti&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),ys(f,r),t.associations.set(f,{materials:e}),r.extensions&&Jo(i,f,r),f})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nw(l,a,t)})}u(r,"createDracoPrimitive");let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=m3(c),f=i[h];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=nw(new Rt,c,t),c.mode===Mi.TRIANGLE_STRIP?d=d.then(m=>kx(m,yu)):c.mode===Mi.TRIANGLE_FAN&&(d=d.then(m=>kx(m,vl))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?d3(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],x=o[m],b,v=c[m];if(x.mode===Mi.TRIANGLES||x.mode===Mi.TRIANGLE_STRIP||x.mode===Mi.TRIANGLE_FAN||x.mode===void 0){let S=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),b=S&&M?new Xc(_,v):new pt(_,v),b.isSkinnedMesh===!0&&b.normalizeSkinWeights()}else if(x.mode===Mi.LINES)b=new $c(_,v);else if(x.mode===Mi.LINE_STRIP)b=new Oo(_,v);else if(x.mode===Mi.LINE_LOOP)b=new Kc(_,v);else if(x.mode===Mi.POINTS)b=new Zc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(b.geometry.morphAttributes).length>0&&p3(b,r),b.name=t.createUniqueName(r.name||"mesh_"+e),ys(b,r),x.extensions&&Jo(i,b,x),t.assignFinalMaterial(b),f.push(b)}for(let m=0,g=f.length;m<g;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return r.extensions&&Jo(i,f[0],r),f[0];let d=new Ht;r.extensions&&Jo(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=f.length;m<g;m++)d.add(f[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ys(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let f=o[c];if(f){a.push(f);let d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qc(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let m=i.channels[f],g=i.samplers[m.sampler],_=m.target,x=_.node,b=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",b)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let d=f[0],m=f[1],g=f[2],_=f[3],x=f[4],b=[];for(let S=0,M=d.length;S<M;S++){let A=d[S],E=m[S],y=g[S],w=_[S],L=x[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=n._createAnimationTracks(A,E,y,w,L);if(P)for(let D=0;D<P.length;D++)b.push(P[D])}let v=new Uo(r,void 0,b);return ys(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,x3)});for(let m=0,g=f.length;m<g;m++)h.add(f[m]);if(h.userData.pivot!==void 0&&f.length>0){let m=h.userData.pivot,g=f[0];h.pivot=new H().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ll:c.length>1?h=new Ht:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=o),ys(h,r),r.extensions&&Jo(n,h,r),r.matrix!==void 0){let f=new Ze;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ht;n.name&&(r.name=i.createUniqueName(n.name)),ys(r,n),n.extensions&&Jo(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,f=l.length;h<f;h++){let d=l[h];d.parent!==null?r.add(Rl(d)):r.add(d)}let c=u(h=>{let f=new Map;for(let[d,m]of i.associations)(d instanceof In||d instanceof Qt)&&f.set(d,m);return h.traverse(d=>{let m=i.associations.get(d);m!=null&&f.set(d,m)}),f},"reduceAssociations");return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}u(c,"collectMorphTargets"),Hr[r.path]===Hr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Hr[r.path]){case Hr.weights:h=nr;break;case Hr.rotation:h=ir;break;case Hr.translation:case Hr.scale:h=Gr;break;default:n.itemSize===1?h=nr:h=Gr;break}let f=i.interpolation!==void 0?h3[i.interpolation]:Io,d=this._getArrayFromAccessor(n);for(let m=0,g=l.length;m<g;m++){let _=new h(l[m]+"."+Hr[r.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sb(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(n){let i=this instanceof ir?vb:_p;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(Jb,"GLTFParser");var wb=Jb;function b3(s,e,t){let n=e.attributes,i=new ei;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let h=Sb(Cl[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let _=Sb(Cl[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}u(b3,"computeBounds");function nw(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}u(r,"assignAttributeAccessor");for(let o in n){let a=Mb[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ft.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),ys(s,e),b3(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?f3(s,e.targets,t):s})}u(nw,"addPrimitiveAttributes");var Qb=["idle","move","fight","die","work","settle"],Yi=u(s=>typeof s=="object"&&s!==null&&!Array.isArray(s),"isObject"),ri=u(s=>typeof s=="string"&&s!=="","isText"),sw=u(s=>typeof s=="number"&&Number.isFinite(s)&&s>0,"isScale"),rw=u(s=>Yi(s)&&ri(s.name)&&ri(s.url)&&(s.attribution===void 0||ri(s.attribution)),"isLicence"),ow=u(s=>ri(s)&&s.endsWith(".glb")&&!s.startsWith("/")&&!/[\\%?#\u0000-\u0020]/.test(s)&&!/^[a-z][a-z0-9+.-]*:/i.test(s)&&s.split("/").every(e=>e!==""&&e!=="."&&e!==".."),"isFile"),jb=u(s=>Qb.includes(s),"isRole"),y3=u(s=>Yi(s)&&typeof s.at=="number"&&Number.isFinite(s.at)&&s.at>=0&&ri(s.joint),"isShot"),_3=u(s=>{if(!Yi(s)||!ow(s.file)||!Yi(s.clips))return;let e={};if(Object.entries(s.clips).forEach(([i,r])=>{jb(i)&&ri(r)&&(e[i]=r)}),Object.keys(e).length===0||Object.entries(s.clips).some(([i,r])=>jb(i)&&!ri(r)))return;if(s.shots===void 0)return{file:s.file,clips:e};if(!Yi(s.shots))return;let t={},n=Object.entries(s.shots).filter(([i])=>jb(i));if(n.every(([i,r])=>e[i]!==void 0&&Array.isArray(r)&&r.every(y3)))return n.forEach(([i,r])=>t[i]=r),{file:s.file,clips:e,shots:t}},"riggedOf"),aw=u(s=>{if(!Yi(s))return"not an object";if(s.schema!==1||s.kind!=="models")return"not a set of models (schema 1)";if(!ri(s.id)||!ri(s.name))return"no id or name";if(!rw(s.licence))return"no licence";if(!Array.isArray(s.credits)||s.credits.length===0||!s.credits.every(r=>Yi(r)&&ri(r.work)&&ri(r.author)&&ri(r.url)&&rw(r.licence)))return"no credits";if(!sw(s.scale))return"no scale";let e=s.models;if(!Yi(e))return"no models";let t=Object.entries(e).find(([,r])=>!Yi(r)||!ow(r.file)||r.scale!==void 0&&!sw(r.scale));if(t!==void 0)return`model ${t[0]}: no glTF binary beside the manifest, or no scale`;let n=s.names;if(!Yi(n)||!Yi(n.unit))return"no unit names";let i=Object.entries(n.unit).find(([,r])=>!ri(r)||!Object.prototype.hasOwnProperty.call(e,r));return i!==void 0?`unit ${i[0]}: drawn by a model the set hasn't`:{...s,models:Object.fromEntries(Object.entries(e).map(([r,o])=>{let{rigged:a,...l}=o,c=_3(a);return[r,c===void 0?l:{...l,rigged:c}]}))}},"readModelManifest"),lw=u(s=>{let e=new Map;return Object.entries(s.names.unit).forEach(([t,n])=>e.set(n,[...e.get(n)??[],t])),e},"unitTypesOf"),ey=u((s,e)=>s.models[e]?.scale??s.scale,"scaleOf");var uw=u(s=>hw(s.geometry,Array.isArray(s.material)?s.material[0]:s.material),"rigPart"),hw=u((s,e)=>{let t=e;return{geometry:s,map:t.map??null,tinted:t.userData?.playerColour===!0,cutout:t.alphaTest>0,doubleSided:t.side===tn}},"partOf"),v3=u(s=>{let e=[];return s.updateMatrixWorld(!0),s.traverse(t=>{let n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).slice(0,1).forEach(r=>{let o=n.geometry.clone();o.applyMatrix4(n.matrixWorld),o.computeBoundingBox(),e.push(hw(o,r))})}),e},"partsOf"),M3=u(({animations:s,scene:e},t)=>{let n=new Map,i=new Map;return Qb.forEach(r=>{let o=t.clips[r];if(o===void 0)return;let a=s.find(f=>f.name===o);if(a===void 0)throw new Error(`${t.file}: no clip ${o}`);let l=a.tracks.find(({name:f})=>e.getObjectByName(wt.parseTrackName(f).nodeName)===void 0);if(l!==void 0)throw new Error(`${t.file}: clip ${o} moves a node it can't name (${l.name})`);let c=(t.shots?.[r]??[]).map(f=>({...f,joint:wt.sanitizeNodeName(f.joint)})),h=c.find(({joint:f})=>e.getObjectByName(f)===void 0);if(h!==void 0)throw new Error(`${t.file}: clip ${o} shoots from a node it hasn't (${h.joint})`);n.set(r,a),i.set(r,c)}),{clips:n,shots:i}},"clipsOf"),S3=u(s=>{if(s.byteLength<20)return!1;let e=new DataView(s),t=e.getUint32(12,!0);if(e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==s.byteLength||e.getUint32(16,!0)!==1313821514||20+t>s.byteLength)return!1;let n=[];for(let i=12;i<s.byteLength;){if(i+8>s.byteLength)return!1;let r=e.getUint32(i,!0);if(n.push(e.getUint32(i+4,!0)),i+=8+r,i>s.byteLength)return!1}if(n.length>2||n.length===2&&n[1]!==5130562)return!1;try{let i=JSON.parse(new TextDecoder().decode(new Uint8Array(s,20,t))),r=u(a=>Array.isArray(a)?a.some(r):typeof a=="object"&&a!==null&&(Object.prototype.hasOwnProperty.call(a,"uri")||Object.values(a).some(r)),"reads"),o=u(a=>a===void 0||Array.isArray(a),"listed");return typeof i=="object"&&i!==null&&!Array.isArray(i)&&o(i.buffers)&&o(i.images)&&i.extensionsUsed===void 0&&i.extensionsRequired===void 0&&!r(i)}catch{return!1}},"selfContained"),w3=u(s=>{let e=new dl,t=`blob:${s}/`;return e.setURLModifier(n=>{if(!n.startsWith(t)&&!/^data:/i.test(n))throw new Error(`${n}: a model reads nothing from elsewhere`);return n}),e},"modelManager"),cw=u((s,e)=>{try{let t=new URL(s,e);return t.origin===new URL(e).origin?t.href:null}catch{return null}},"onSite"),vp=u((s,e)=>`${s}#${e}`,"modelKey"),dw=u(async(s,e,t,n=()=>{})=>{let i=cw(s,location.href);if(i===null)throw new Error(`${s}: not on this site`);let r=await fetch(i,{redirect:"error",credentials:"omit"});if(!r.ok)throw new Error(`${s}: ${r.status}`);let o=aw(await r.json());if(typeof o=="string")throw new Error(`${s}: ${o}`);let a=new bp(w3(location.origin)),l=lw(o),c=new URL(".",i).href,h=u(async f=>{let d=cw(f,i);if(d===null||!d.startsWith(c))throw new Error(`${f}: not beside the manifest`);let m=await fetch(d,{redirect:"error",credentials:"omit"});if(!m.ok)throw new Error(`${d}: ${m.status}`);let g=await m.arrayBuffer();if(!S3(g))throw new Error(`${d}: not a glTF binary whole in itself`);return a.parseAsync(g,"")},"parsed");return await Promise.all([...l.keys()].map(async f=>{let d=o.models[f];try{let m=await h(d.file);e(f,{parts:v3(m.scene),scale:ey(o,f)},l.get(f)??[])}catch(m){t(f,m);return}if(d.rigged!==void 0)try{let m=await h(d.rigged.file),{clips:g,shots:_}=M3(m,d.rigged);n(f,{scene:m.scene,clips:g,shots:_,scale:ey(o,f)},l.get(f)??[])}catch(m){t(f,m)}})),o},"loadModels");var fw=.08,pw=u(s=>{let e=new Pe(s),t=.2126*e.r+.7152*e.g+.0722*e.b;if(t>=fw)return e;let n=(fw-t)/(1-t);return e.setRGB(e.r+(1-e.r)*n,e.g+(1-e.g)*n,e.b+(1-e.b)*n)},"ownerTint"),ny=class ny extends en{constructor(t={}){let{tint:n,...i}=t;super(i);this.isTintedMaterial=!0;this.tint=new Pe(1,1,1);n!==void 0&&this.tint.copy(n)}onBeforeCompile(t){t.uniforms.tint={value:this.tint},t.fragmentShader=`uniform vec3 tint;
${t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 texel = texture2D( map, vMapUv );
        diffuseColor.rgb *= texel.rgb * mix( tint, vec3( 1.0 ), texel.a );
      #endif`)}`}customProgramCacheKey(){return"tinted"}copy(t){return super.copy(t),this.tint.copy(t.tint),this}};u(ny,"TintedMaterial");var ty=ny,mw=ty;var gn=u((s,e,t=3)=>({shape:"foot",era:s,gear:e,squad:t}),"foot"),Cu=u((s,e,t=2)=>({shape:"mounted",era:s,gear:e,squad:t}),"mounted"),oi=u((s,e,t=!1,n=0,i=!1)=>({shape:"ship",era:s,hull:e,squad:1,large:t,guns:n,missiles:i}),"ship"),Pu=u((s,e=!1,t=!1)=>({shape:"aircraft",era:s,squad:1,large:e,stealth:t}),"aircraft"),iy=u((s,e)=>({shape:"cart",era:s,cart:e,squad:1}),"cart"),gw={Warrior:gn("ancient","club"),Spearman:gn("ancient","spear"),Swordman:gn("ancient","sword"),Archer:gn("ancient","bow"),Horseman:Cu("ancient","spear"),Chariot:iy("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:oi("ancient","oars"),Settlers:iy("ancient","wagon"),Diplomat:gn("ancient","case",1),Caravan:iy("ancient","goods"),Explorer:gn("ancient","pack",1),Pikeman:gn("medieval","pike"),Knight:Cu("medieval","lance"),Crusader:Cu("medieval","sword"),Fanatic:gn("medieval","sword"),Sail:oi("medieval","sail"),Musketman:gn("renaissance","musket"),Dragoon:Cu("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:oi("renaissance","sail",!0,1),Galleon:oi("renaissance","sail",!0),Rifleman:gn("industrial","rifle"),AlpineTrooper:{...gn("industrial","rifle"),dress:"snow"},Partisan:{...gn("industrial","rifle"),dress:"irregular"},Cavalry:Cu("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:gn("industrial","none",2),Ironclad:oi("industrial","steam",!1,1),Transport:oi("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:gn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:gn("modern","rifle"),Paratrooper:{...gn("modern","rifle",1),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:oi("modern","steam",!1,1),Cruiser:oi("modern","steam",!0,2),MissileCruiser:oi("modern","steam",!0,1,!0),Battleship:oi("modern","steam",!0,3),Submarine:oi("modern","submarine"),Carrier:oi("modern","carrier",!0),Fighter:Pu("modern"),StealthFighter:Pu("modern",!1,!0),Bomber:Pu("modern",!0),StealthBomber:Pu("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Pl=u((s,e=[])=>(Object.prototype.hasOwnProperty.call(gw,s)?gw[s]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?oi("industrial","steam"):e.includes("Air")?Pu("modern"):gn("ancient","spear")),"unitLook"),Il=u(s=>s.shape==="aircraft"||s.shape==="helicopter"||s.shape==="missile","airborne");var cy=2,xw=.285,sy=.03,vw="#fff4b0",E3=.04,Mp=.004,ry=.018,bw=.01,yw=.022,_w=.03,Mw=.03,Sp=.002,T3="#4caf50",A3="#e0b030",R3="#d04030",C3=256,jo,$i,Qo,ea,ar,ta,na,ia,Wr,sa,ra,lr,Nl,Xr,oy,ay,dy=class dy{constructor(){G(this,Xr);G(this,jo,new Map);G(this,$i,new Map);G(this,Qo,new Map);G(this,ea,new Map);G(this,ar,new Map);G(this,ta,new Map);G(this,na,new Map);G(this,ia,new Map);G(this,Wr,new Map);G(this,sa,null);G(this,ra,new Map);G(this,lr,null);G(this,Nl,0);this.figureMaterial=new en({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new er(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,i=p(this,jo).get(n);return i===void 0&&(i=new en({color:new Pe(e),roughness:.75,metalness:.05,...t?{emissive:new Pe(e),emissiveIntensity:.6}:{}}),p(this,jo).set(n,i)),i}addModel(e,t){let n=p(this,ar).get(e);n!==void 0&&n!==t&&R(this,Xr,oy).call(this,e,n),p(this,ar).set(e,t)}addRig(e,t){p(this,ar).has(e)&&p(this,Wr).set(e,t)}rigOf(e){return p(this,Wr).get(e)??null}rigFigures(e,t,n,i=1){let r=p(this,Wr).get(e);if(r===void 0)return null;let o=t.shape==="ship",a=Il(t),l=ly(t),c=r.scale*i,h=o?0:sy+(a?xw*i:0);return Au(l).map(([f,d])=>{let m=Rl(r.scene),g=0;return m.name=Du,m.position.set(f*i,h,d*i),m.scale.setScalar(c),m.traverse(_=>{let x=_;x.isMesh&&(x.material=R(this,Xr,ay).call(this,e,g++,{...uw(x),geometry:x.geometry},n,!0),x.frustumCulled=!1)}),m})}modelFigures(e,t,n,i=1){let r=p(this,ar).get(e);if(r===void 0)return null;let o=t.shape==="ship",a=Il(t),l=ly(t),c=JSON.stringify([e,l,i,o,a]),h=JSON.stringify([e,l,i,o,a,n[0]]),f=p(this,ta).get(c),d=p(this,na).get(h);if(f===void 0){let m=r.scale*i,g=o?0:sy+(a?xw*i:0),_=Au(l).map(([v,S])=>new Ze().makeTranslation(v*i,g,S*i).multiply(new Ze().makeScale(m,m,m))),x=g;f={geometries:r.parts.map(v=>{let S=_.map(A=>v.geometry.clone().applyMatrix4(A)),M=(S.length===1?S[0].clone():hp(S))??new Rt;return S.forEach(A=>A.dispose()),M.computeBoundingBox(),M.computeBoundingSphere(),x=Math.max(x,M.boundingBox?.max.y??g),M}),top:x},p(this,ta).set(c,f)}return d===void 0&&(d={meshes:f.geometries.map((m,g)=>[m,R(this,Xr,ay).call(this,e,g,r.parts[g],n)]),top:f.top},p(this,na).set(h,d)),d}body(e,t,n,i=1,r="whole",o=!1){let a=o&&e.shape==="ship"&&r!=="figures",l=JSON.stringify([e,t,n,i,r,a]),c=p(this,ea).get(l);return c===void 0&&(c=ZS(e,t,{fortified:n,scale:i,stand:sy,part:r,ripples:a}),p(this,ea).set(l,c)),c}walls(){return p(this,sa)??k(this,sa,JS()),p(this,sa)}figure(e,t){let n=JSON.stringify([e,t]),i=p(this,Qo).get(n);return i===void 0&&(i=KS(e,t),p(this,Qo).set(n,i)),i}plain(e){let t=p(this,ra).get(e);return t===void 0&&(t=new Or({color:new Pe(e),sizeAttenuation:!1,depthTest:!1}),p(this,ra).set(e,t)),t}pointer(){if(p(this,lr)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=vw,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new kr(e);n.colorSpace=Nt,k(this,lr,new Or({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,lr)}label(e,t,n){let i=`${e}\0${t}\0${n}`,r=p(this,$i).get(i);if(r===void 0){let o=document.createElement("canvas"),a=o.getContext("2d"),l="600 28px system-ui, sans-serif",c=40;a!==null&&(a.font=l,o.width=Math.ceil(a.measureText(e).width)+24,o.height=c,a.font=l,a.fillStyle=t,a.beginPath(),a.roundRect?.(0,0,o.width,c,10),a.fill(),a.fillStyle=n,a.textBaseline="middle",a.fillText(e,12,c/2+1));let h=new kr(o);h.colorSpace=Nt,r=new Or({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,$i).set(i,r)}return r}get sweepDue(){return p(this,$i).size>Math.max(C3,p(this,Nl)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(i=>{i instanceof pt&&t.add(i.geometry),i instanceof Js&&t.add(i.material)});p(this,$i).forEach((n,i)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,$i).delete(i))}),k(this,Nl,p(this,$i).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,Qo).forEach(e=>e.dispose()),p(this,ea).forEach(e=>e.dispose()),p(this,sa)?.dispose(),k(this,sa,null),p(this,ea).clear(),[...p(this,ar)].forEach(([e,t])=>R(this,Xr,oy).call(this,e,t)),this.figureMaterial.dispose(),p(this,ra).forEach(e=>e.dispose()),p(this,lr)?.map?.dispose(),p(this,lr)?.dispose(),p(this,ra).clear(),k(this,lr,null),p(this,jo).forEach(e=>e.dispose()),p(this,$i).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,jo).clear(),p(this,$i).clear(),p(this,Qo).clear(),k(this,Nl,0)}};jo=new WeakMap,$i=new WeakMap,Qo=new WeakMap,ea=new WeakMap,ar=new WeakMap,ta=new WeakMap,na=new WeakMap,ia=new WeakMap,Wr=new WeakMap,sa=new WeakMap,ra=new WeakMap,lr=new WeakMap,Nl=new WeakMap,Xr=new WeakSet,oy=u(function(e,t){let n=u(i=>JSON.parse(i)[0]===e,"ours");p(this,Wr).get(e)?.scene.traverse(i=>{let r=i;r.isMesh&&(r.geometry.dispose(),[r.material].flat().forEach(o=>{o.map?.dispose(),o.dispose()}))}),p(this,Wr).delete(e),t.parts.forEach(({geometry:i,map:r})=>{i.dispose(),r?.dispose()}),p(this,ar).delete(e),[...p(this,ta)].forEach(([i,{geometries:r}])=>{n(i)&&(r.forEach(o=>o.dispose()),p(this,ta).delete(i))}),[...p(this,na).keys()].filter(n).forEach(i=>p(this,na).delete(i)),[...p(this,ia)].forEach(([i,r])=>{n(i)&&(r.dispose(),p(this,ia).delete(i))})},"#letGoOfModel"),ay=u(function(e,t,n,i,r=!1){let o=JSON.stringify([e,t,n.tinted?i[0]:null,r]),a=p(this,ia).get(o);if(a===void 0){let l={map:n.map,roughness:.85,metalness:0};a=n.cutout?new en({...l,alphaTest:.5,side:tn}):new mw({...l,tint:n.tinted?pw(i[0]):new Pe(1,1,1),side:n.doubleSided?tn:vi}),p(this,ia).set(o,a)}return a},"#modelMaterial"),u(dy,"MarkerKit");var Ep=dy,Sw=u(s=>{let{r:e,g:t,b:n}=new Pe(s);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Ll=u((s,e,t,n)=>(s.position.set(e,t,n),s),"place"),P3=u(s=>[s.count>1?String(s.count):"",s.status??"",s.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),I3=3,L3=4,Iu=u((s,e,t,n,i=I3)=>{let r=new Js(s);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=i,r.frustumCulled=!1,r},"badge"),ww=u((s,e,t)=>{let n=s.map?.image,i=n&&n.height>0&&n.width>0?n.width/n.height:1;return Iu(s,e*i,e,t)},"label"),wp=[0,.36,0],N3=u((s,e)=>{let t=new Ht;return e.walled&&t.add(new pt(s.walls(),s.figureMaterial)),e.unnamed!==!0&&t.add(Ll(ww(s.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Sw(e.colours[0])),Mw,0),...wp)),t},"drawCity"),D3=u((s,e,t=null,n=!1,i=t===null,r=!1)=>{let o=new Ht,{ring:a}=s.geometries,l=Pl(e.type,e.kinds),c=n&&Il(l),h=e.model===void 0?null:s.modelFigures(e.model,l,e.colours,e.size),f=h===null?s.body(l,e.colours,e.fortified,e.size,c?"figures":"whole",i):null,d=c?new Ht:o,m=h?.top??f?.boundingBox?.max.y??.3,g=t?.at??[0,m+E3,0],_=e.health!==null,x=(t?.over??0)+(_?Mp+Sp:0),b=x+bw+Sp,v=P3(e),S=b+(v===""?0:yw+Sp),M=h===null?new pt(f,s.figureMaterial):new Ht,A=r&&h!==null&&e.model!==void 0?s.rigFigures(e.model,l,e.colours,e.size):null;if(A!==null?A.forEach(E=>M.add(E)):h?.meshes.forEach(([E,y])=>M.add(new pt(E,y))),M.name=uy,M.rotation.y=e.facing,d.add(M),c||h!==null){let E=s.body(l,e.colours,e.fortified,e.size,"base",i);E.getAttribute("position")!==void 0&&o.add(new pt(E,s.figureMaterial))}if(c&&(d.name=hy,o.add(d)),e.health!==null){let E=Math.max(0,Math.min(1,e.health));if(d.add(Ll(Iu(s.plain("#202020"),ry,Mp,t?.over??0),...g)),E>0){let y=Iu(s.plain(E>.5?T3:E>.25?A3:R3),ry*E,Mp*.6,(t?.over??0)+Mp*.2);y.center.x=1/(2*E),d.add(Ll(y,...g))}}if(d.add(Ll(Iu(s.plain(e.colours[0]),ry,bw,x),...g)),v!==""&&d.add(Ll(ww(s.label(v,e.colours[0],Sw(e.colours[0])),yw,b),...g)),e.active){let E=new pt(a,s.material(vw,!0));E.rotation.x=Math.PI/2,E.position.y=.01,o.add(E),d.add(Ll(Iu(s.pointer(),_w,_w,S,L3),...g))}return o},"drawUnit"),Nu="unit",uy="figures",ly=u(s=>s.shape==="foot"?s.squad:1,"figuresOf"),Ew=u(({type:s,kinds:e})=>ly(Pl(s,e)),"markerFigures"),Du="rig figure",hy="aloft",oa=.26,Tw=u((s,e,t=!1,n=!1)=>{let i=new Ht;if(e.city!==null&&i.add(N3(s,e.city)),e.unit!==null){let r=e.inCity??e.city!==null?oa:0,o=D3(s,e.unit,e.city===null?null:{at:[wp[0],wp[1],wp[2]-r],over:Mw+Sp},t,r===0,n);o.name=Nu,o.position.z=r,i.add(o)}return i},"drawMarker"),Lu=new WeakMap,Tp=new WeakMap,O3=.5,Ou=u((s,e,t)=>{s.forEach(n=>n.traverse(i=>{if(!(i instanceof pt||i instanceof Js))return;let r=Lu.get(i)??i.material,o=t.get(r);o===void 0&&(o=r.clone(),i instanceof Js?o.transparent=!0:o.alphaHash=!0,t.set(r,o)),Lu.has(i)||(Lu.set(i,r),Tp.set(i,i.castShadow)),i.material=o,i.castShadow=(Tp.get(i)??!1)&&e>=O3})),t.forEach((n,i)=>{n.opacity=i.opacity*e})},"fade"),Aw=u((s,e)=>{s.forEach(t=>t.traverse(n=>{let i=Lu.get(n);i===void 0||!(n instanceof pt||n instanceof Js)||(n.material=i,n.castShadow=Tp.get(n)??n.castShadow,Lu.delete(n),Tp.delete(n))})),Dl(e)},"unfaded"),Dl=u(s=>{s.forEach(e=>e.dispose()),s.clear()},"unfade");var Rw=new uu,U3=u((s,e,t)=>{let n=[],i=new Map;for(let[o,a]of s)a.forEach(l=>l.getObjectByName(Nu)?.traverseVisible(c=>{c instanceof pt&&(n.push(c),i.set(c,o))}));if(n.length===0)return null;Rw.setFromCamera(new We(t[0],t[1]),e);let[r]=Rw.intersectObjects(n,!1);return r===void 0?null:i.get(r.object)??null},"unitUnder"),Cw=U3;var qr=u(s=>s*Math.PI/180,"degrees"),fy=qr(25),Pw=qr(80),Iw=5,F3=90,B3=1.12,Ol=qr(40),py=qr(45),k3={above:{yaw:0,pitch:qr(80)},classic:{yaw:0,pitch:qr(55)},isometric:{yaw:qr(45),pitch:qr(30)}};var Lw=u(s=>({focus:s,...k3.classic,distance:24}),"defaultOrbit"),Ap=u((s,e,t)=>Math.min(t,Math.max(e,s)),"clamp"),Nw=u(s=>{let e=Math.PI*2;return(s%e+e)%e},"normaliseYaw"),la=u(s=>({...s,yaw:Nw(s.yaw),pitch:Ap(s.pitch,fy,Pw),distance:Ap(s.distance,Iw,F3)}),"clampOrbit"),Ul=u((s,e)=>la({...s,distance:s.distance/B3**e}),"zoomed"),Rp=u(({yaw:s,pitch:e})=>{let t=Math.sin(s),n=Math.cos(s),i=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-i,-n*r],right:[n,0,t],up:[t*i,r,-n*i]}},"basis"),Fl=u((s,e)=>{let{forward:t}=Rp(s),[n,i]=s.focus;return[n-t[0]*s.distance,e-t[1]*s.distance,i-t[2]*s.distance]},"eye"),Bl=u((s,e,[t,n,i],r)=>{let{forward:o,right:a,up:l}=Rp(s),c=Fl(s,e),h=[t-c[0],n-c[1],i-c[2]],f=u(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(o),m=Math.tan(Ol/2);return d<=1e-6?null:[f(a)/(d*m*r),f(l)/(d*m)]},"toScreen"),my=u((s,e,[t,n],i)=>{let{forward:r,right:o,up:a}=Rp(s),l=Math.tan(Ol/2);return{from:Fl(s,e),direction:[0,1,2].map(c=>(r[c]??0)+t*l*i*(o[c]??0)+n*l*(a[c]??0))}},"rayThrough"),aa=u((s,e,t,n,i=e)=>{let{from:r,direction:o}=my(s,e,t,n);if(o[1]>-1e-6)return null;let a=(i-r[1])/o[1];return a<=0?null:[r[0]+o[0]*a,r[2]+o[2]*a]},"groundAt"),Dw=u((s,e,t,n,i)=>{let r=aa(s,e,t,i),o=aa(s,e,n,i);if(r!==null&&o!==null)return{...s,focus:[s.focus[0]+r[0]-o[0],s.focus[1]+r[1]-o[1]]};let a=(t[0]-n[0])*i,l=(t[1]-n[1])/Math.sin(s.pitch),c=s.distance*Math.tan(Ol/2),{right:h}=Rp(s),f=[Math.sin(s.yaw),-Math.cos(s.yaw)];return{...s,focus:[s.focus[0]+(a*h[0]+l*(f[0]??0))*c,s.focus[1]+(a*h[2]+l*(f[1]??0))*c]}},"panned"),Ow=u((s,e,t)=>{let n=u((o,a)=>(o%a+a)%a,"wrap"),[i,r]=s.focus;return{...s,yaw:Nw(s.yaw),focus:[n(i,e.u),e.v===null?Ap(r,0,t):n(r,e.v)]}},"settled"),Uw=u((s,e,t,n,i)=>{let r=u((l,c)=>c===null?l:l-c*Math.round(l/c),"short"),o=Math.PI*2,a=t*t*(3-2*t);return{focus:[s.focus[0]+r(e.focus[0]-s.focus[0],n.u)*a,s.focus[1]+r(e.focus[1]-s.focus[1],n.v)*a],yaw:s.yaw+(i??r(e.yaw-s.yaw,o))*a,pitch:s.pitch+(e.pitch-s.pitch)*a,distance:s.distance+(e.distance-s.distance)*a}},"between"),cr=u((s,e)=>{let t=e===void 0?1/0:Math.min(e.u,e.v??1/0)/2,n=t<Iw?1/0:t,i=Math.min(s*3.5,s+n);return{near:Math.min(s*1.2,(s+i)/2),far:i}},"sightFor"),Fw=u((s,e)=>{let t=Ol/2,n=u(i=>{let r=i/(s*Math.cos(t));return Math.atan2(r*Math.sin(t),r*Math.cos(t)-1)},"meeting");return Ap(fy+n(cr(s,e).far)-n(cr(s).far),fy,Pw)},"lowestPitch");var z3=new Pe("#3f8a8c"),G3=new Pe("#173a52"),V3=new Pe("#e8eeee"),Bw=`
#include <common>
#include <fog_pars_vertex>

varying vec3 vWorld;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * world;

  vWorld = world.xyz;
  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}
`,H3=`
#include <common>
#include <fog_pars_fragment>

uniform sampler2D ground;
uniform vec2 cell;
uniform vec2 size;
uniform vec3 shallow;
uniform vec3 deep;
uniform vec3 foam;
uniform vec3 sky;
uniform vec3 sunDirection;
uniform vec3 sunColour;
// How far the ground runs down, and whether it wraps down.
uniform float extentV;
uniform bool wrapsV;

varying vec3 vWorld;

void main() {
  // Past the poles of a world that doesn't wrap over them: no sea, as there's no land under it to read.
  if (!wrapsV && (vWorld.z < 0.0 || vWorld.z > extentV)) {
    discard;
  }

  // The land's height here, from its points, each a texel's middle.
  vec2 uv = (vWorld.xz / cell + 0.5) / size;
  vec4 here = texture2D(ground, uv);
  float depth = -here.r;

  // The land is above the water here, or it's never been seen: none to draw.
  if (depth <= 0.0 || here.g > 0.01) {
    discard;
  }

  vec3 toEye = normalize(cameraPosition - vWorld);
  vec3 colour = mix(shallow, deep, smoothstep(0.0, 0.12, depth));

  // The sky in the water, more at a low angle (Fresnel), and the sun's glint.
  float fresnel = pow(1.0 - clamp(toEye.y, 0.0, 1.0), 5.0);
  colour = mix(colour, sky, 0.12 + fresnel * 0.5);

  vec3 halfway = normalize(sunDirection + toEye);
  colour += sunColour * pow(max(halfway.y, 0.0), 300.0) * 0.5;

  // Foam where it meets the land, and clear water over the shallows.
  colour = mix(colour, foam, (1.0 - smoothstep(0.0, 0.01, depth)) * 0.6);

  gl_FragColor = vec4(colour, smoothstep(0.0, 0.004, depth) * 0.94);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,Yr,Si,ai,xy=class xy{constructor(e,t){G(this,Yr);G(this,Si);G(this,ai);k(this,Yr,e),k(this,Si,new Uint16Array(e.columns*e.rows*2));for(let i=0;i<p(this,Si).length;i+=2)p(this,Si)[i]=as.toHalfFloat(0),p(this,Si)[i+1]=as.toHalfFloat(1);k(this,ai,new Fr(p(this,Si),e.columns,e.rows,fs,ii)),p(this,ai).wrapS=Gn,p(this,ai).wrapT=e.wrapsV?Gn:zn,p(this,ai).magFilter=zt,p(this,ai).minFilter=zt,p(this,ai).needsUpdate=!0;let n=new Ln({uniforms:qo.merge([Ie.fog,{ground:{value:null},cell:{value:new We},size:{value:new We},shallow:{value:z3.clone()},deep:{value:G3.clone()},foam:{value:V3.clone()},sky:{value:t.clone()},sunDirection:{value:new H(.5,.7,.4).normalize()},sunColour:{value:new Pe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Bw,fragmentShader:H3,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,ai),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new pt(new cs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:i,spacingV:r}=p(this,Yr),o=Math.round(e.u/i),a=Math.round(e.v/r),l=e.positions.length/3;for(let c=0;c<l;c++){let h=o+Math.round((e.positions[c*3]??0)/i),f=a+Math.round((e.positions[c*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;p(this,Si)[d]=as.toHalfFloat(e.positions[c*3+1]??0),p(this,Si)[d+1]=as.toHalfFloat(e.unseen[c]??0)}}p(this,ai).needsUpdate=!0}height(e,t){return as.fromHalfFloat(p(this,Si)[(t*p(this,Yr).columns+e)*2]??0)}unseen(e,t){return as.fromHalfFloat(p(this,Si)[(t*p(this,Yr).columns+e)*2+1]??0)>.5}texture(){return p(this,ai)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Yr).wrapsV&&e}follow(e,t,n,i){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,ai).dispose()}};Yr=new WeakMap,Si=new WeakMap,ai=new WeakMap,u(xy,"Water");var gy=xy,kw=gy,W3=`
#include <common>
#include <fog_pars_fragment>

uniform sampler2D ground;
uniform vec2 cell;
uniform vec2 size;
// How far the ground runs across and down, and whether it wraps down.
uniform vec2 extent;
uniform bool wrapsV;

varying vec3 vWorld;

// Value noise, from a hash of the lattice's corners.
float lattice(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
}

// Noise that repeats as the world does: \`cells\` lattice cells across and down it, taken round at its edges, so the
//  cloud looks the same wherever the camera crosses the world's wrap.
float noise(vec2 point, vec2 cells) {
  vec2 corner = floor(point),
    along = fract(point),
    eased = along * along * (3.0 - 2.0 * along),
    first = mod(corner, cells),
    next = mod(corner + 1.0, cells);

  return mix(
    mix(lattice(first), lattice(vec2(next.x, first.y)), eased.x),
    mix(lattice(vec2(first.x, next.y)), lattice(next), eased.x),
    eased.y
  );
}

float unseenAt(vec2 point) {
  return texture2D(ground, (point / cell + 0.5) / size).g;
}

void main() {
  // Past the poles of a world that doesn't wrap over them: no cloud, as there's nothing to have seen.
  if (!wrapsV && (vWorld.z < 0.0 || vWorld.z > extent.y)) {
    discard;
  }

  // Softened over a short edge: how much of the ground round here has never been seen.
  float unseen = 0.0;

  for (int i = -1; i <= 1; i++) {
    for (int j = -1; j <= 1; j++) {
      unseen += unseenAt(vWorld.xz + vec2(float(i), float(j)) * 0.18);
    }
  }

  unseen /= 9.0;

  vec2 coarse = max(vec2(1.0), floor(extent * 1.4 + 0.5)),
    fine = max(vec2(1.0), floor(extent * 3.7 + 0.5));
  float puff =
      noise(vWorld.xz / extent * coarse, coarse) * 0.6 +
      noise(vWorld.xz / extent * fine, fine) * 0.4,
    alpha = smoothstep(0.3, 0.7, unseen + (puff - 0.5) * 0.45);

  if (alpha <= 0.0) {
    discard;
  }

  gl_FragColor = vec4(mix(vec3(0.62, 0.67, 0.74), vec3(0.94, 0.95, 0.97), puff), alpha);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,X3=.18,Uu,by=class by{constructor(e,t){G(this,Uu);k(this,Uu,t.wrapsV);let n=new Ln({uniforms:qo.merge([Ie.fog,{ground:{value:null},cell:{value:new We},size:{value:new We},extent:{value:new We},wrapsV:{value:!1}}]),vertexShader:Bw,fragmentShader:W3,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new pt(new cs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Uu)&&e}follow(e,t,n){this.mesh.position.set(e,X3,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Uu=new WeakMap,u(by,"Clouds");var Cp=by;var q3=.6,Y3=.05,ca=64,zw=.125,$3=`
  attribute vec3 anchor;
  attribute vec2 slot;
  attribute float size;
  attribute float cell;

  uniform float lean;
  uniform float lift;
  uniform float bias;
  uniform vec2 cells;
  uniform float pad;

  varying vec2 vUv;

  #include <fog_pars_vertex>

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(anchor + vec3(0.0, lift, 0.0), 1.0);

    // Upright on the screen, facing the camera: its place in its block, across and up the screen.
    mvPosition.xy += (slot + position.xy) * size * lean;
    gl_Position = projectionMatrix * mvPosition;

    // Its depth as if it were nearer the camera along the same line of sight, by bias.
    float away = length(mvPosition.xyz);
    vec4 nearer = projectionMatrix * vec4(mvPosition.xyz * max(0.0, (away - bias) / away), 1.0);

    gl_Position.z = nearer.z / nearer.w * gl_Position.w;

    // Its cell in the atlas, the room round the icon left out: rows from the top, as the atlas is drawn.
    // Half a cell on, so rounding on the GPU doesn't put it a row out, and its column from that row.
    float row = floor((cell + 0.5) / cells.x);
    float column = cell - row * cells.x;
    vec2 inCell = vec2(pad) + uv * (1.0 - 2.0 * pad);

    vUv = vec2((column + inCell.x) / cells.x, 1.0 - (row + 1.0 - inCell.y) / cells.y);

    #include <fog_vertex>
  }
`,K3=`
  uniform sampler2D atlas;

  varying vec2 vUv;

  #include <fog_pars_fragment>

  void main() {
    vec4 colour = texture2D(atlas, vUv);

    if (colour.a < 0.25) {
      discard;
    }

    // Smaller, an icon's edge is its colour mixed with the clear, black, round it: that colour again, not darkened.
    gl_FragColor = vec4(colour.rgb / max(colour.a, 1e-4), 1.0);

    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`,Gw=u(s=>{let e=Math.max(1,Math.ceil(Math.sqrt(s)));return[e,Math.max(1,Math.ceil(s/e))]},"atlasCells"),Z3=u((s,e)=>{let[t]=Gw(s.length),n=ca*(1-2*zw);return s.flatMap((i,r)=>{let o=e(i);if(o===null||o[0]<=0||o[1]<=0)return[];let a=n/Math.max(o[0],o[1]),l=o[0]*a,c=o[1]*a;return[{_:i,x:r%t*ca+(ca-l)/2,y:Math.floor(r/t)*ca+(ca-c)/2,width:l,height:c}]})},"atlasPlaces"),J3=u(s=>{let{naturalWidth:e,naturalHeight:t,width:n,height:i}=s;return[e??(typeof n=="number"?n:0),t??(typeof i=="number"?i:0)]},"imageSize"),$r,li,Fu,ua,Bu,Pp,kl,Vw,Hw,_y=class _y{constructor(e){G(this,kl);G(this,$r,null);G(this,li,null);G(this,Fu,"");G(this,ua);G(this,Bu,new WeakMap);G(this,Pp,1);k(this,ua,e),this.material=new Ln({uniforms:qo.merge([Ie.fog,{atlas:{value:null},lean:{value:1},lift:{value:Y3},bias:{value:q3},cells:{value:[1,1]},pad:{value:zw}}]),vertexShader:$3,fragmentShader:K3,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,$r)?.dispose(),k(this,$r,null),e===null||e.count===0)return null;R(this,kl,Hw).call(this,e);let t=new au,n=new cs(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Hn(e.anchors,3)),t.setAttribute("slot",new Hn(e.slots,2)),t.setAttribute("size",new Hn(e.sizes,1)),t.setAttribute("cell",new Hn(e.cells,1)),t.instanceCount=e.count,k(this,$r,t),t}make(){let e=new pt(p(this,$r)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,$r)?.dispose(),p(this,li)?.dispose(),this.material.dispose()}};$r=new WeakMap,li=new WeakMap,Fu=new WeakMap,ua=new WeakMap,Bu=new WeakMap,Pp=new WeakMap,kl=new WeakSet,Vw=u(function(e){if(e===null)return 0;let t=p(this,Bu).get(e);return t===void 0&&(t=Fi(this,Pp)._++,p(this,Bu).set(e,t)),t},"#imageId"),Hw=u(function(e){let t=e.names.map(a=>`${a}:${R(this,kl,Vw).call(this,p(this,ua).call(this,a))}`).join(",");if(t===p(this,Fu)&&p(this,li)!==null)return;let[n,i]=Gw(e.names.length),r=document.createElement("canvas"),o=r.getContext("2d");r.width=n*ca,r.height=i*ca,o!==null&&(o.imageSmoothingEnabled=!1,Z3(e.names,a=>{let l=p(this,ua).call(this,a);return l===null?null:J3(l)}).forEach(({_:a,x:l,y:c,width:h,height:f})=>{let d=p(this,ua).call(this,a);d!==null&&o.drawImage(d,l,c,h,f)})),p(this,li)?.dispose(),k(this,li,new kr(r)),p(this,li).colorSpace=Nt,p(this,li).premultiplyAlpha=!0,p(this,li).magFilter=Wt,p(this,li).minFilter=vn,p(this,li).generateMipmaps=!0,k(this,Fu,t),this.material.uniforms.atlas.value=p(this,li),this.material.uniforms.cells.value=[n,i]},"#drawAtlas"),u(_y,"YieldIcons");var yy=_y,Ww=yy;var Xw=["idle","move","work"],qw=2,vy=.13,Yw=u((s,e)=>({figures:e,stagger:vy,clips:Object.fromEntries([...s.clips].map(([t,n])=>[t,{duration:n.duration,shots:s.shots.get(t)??[]}]))}),"rigFacts"),j3=u((s,e,t)=>{if(!(e>0))return 0;let n=Math.max(0,t);return Xw.includes(s)?n%e:Math.min(n,e-1e-4)},"clipTime"),My=u((s,e,t,n,i)=>s.getObjectsByProperty("name",Du).forEach((r,o)=>{let a=t===null?void 0:e.clips.get(t),l=i.get(r)??{mixer:new cu(r),role:null},c=a===void 0?null:t;i.set(r,l),l.role!==c&&(l.mixer.stopAllAction(),l.role=c,a!==void 0&&l.mixer.clipAction(a).setLoop($f,1/0).play()),a!==void 0&&c!==null&&l.mixer.setTime(j3(c,a.duration,Xw.includes(c)?n+o*vy:n-o*vy))}),"poseFigures");var Sy=10466244,Q3=14082796,eL=5984576,tL=16773336,Lp=u((s,e,t)=>{let n=u((i,r)=>{if(r===null)return[0];let o=[];for(let a=Math.floor((i-e)/r);a*r<=i+e;a++)o.push(a*r);return o},"along");return n(s[0],t.u).flatMap(i=>n(s[1],t.v).map(r=>[i,r]))},"copiesNear"),wy=u((s,e)=>Math.min(cr(s.distance,e).far,s.distance*2.2),"markerSight"),nL=u((s,e,t,[n,i])=>{let r=s?.getObjectsByProperty("name",Du)[e]?.getObjectByName(t);if(r===void 0)return null;let o=r.getWorldPosition(new H);return[o.x-n,o.y,o.z-i]},"jointOf"),iL=u((s,e)=>()=>e?Rl(s):s.clone(),"copyOf"),Ip=u(s=>s.traverse(e=>{e.isSkinnedMesh&&e.skeleton.dispose()}),"letGoOfSkeletons"),sL=u((s,e)=>{let{near:t,far:n}=cr(s.distance,e);return{near:t,far:n,land:Lp(s.focus,n,e),markers:Lp(s.focus,wy(s,e),e)}},"sightOf"),rL=u(s=>[new kn(new H(0,0,1),0),new kn(new H(0,0,-1),s)],"polesAt"),oL=u((s,[e,t],n,i,r)=>s.flatMap(([o,a])=>[[o,a],...r&&i!==null&&t>n?[[o,a-i]]:[],...r&&i!==null&&e<0?[[o,a+i]]:[]]),"overlayCopies"),$w=2048,Kw=Math.hypot(30,40,20),Zw=u((s,{period:e,ground:t,yieldIcon:n})=>{let i=new np({antialias:!0,canvas:s}),r=new Vc,o=new jt(Ol*180/Math.PI,1,.1,400),a=new Ht,{material:l,detail:c}=IS(e,t.rows*t.spacingV),h=new ko(tL,2.6),f=new Map,d=new Map,m=new en({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,_=rL(g),x=new Map,b=new Map,v=new WeakMap,S=new Map,M=new hl(1,1),A=u(ce=>new en({color:new Pe(ce),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),E=[A("#d8d5cf"),A("#a9a59d")],y=new Map,w=new _i(.006,.009,.03,6),L=new en({color:new Pe("#3d5a3a"),roughness:.3,metalness:0}),P=new hl(.011,0),D=new ti({color:new Pe("#ffb347")}),U=new Map,X=new ti({color:new Pe("#dfe8e8"),side:tn}),O=new Ht,Y=new Ep,Q=new Ht,z=new Ww(n??(()=>null)),$=new kw(t,new Pe(Sy)),q=new Cp($.texture(),t),J=new Gc(Sy,30,110),ee=[[0,0]],pe="0,0",ge=[[0,0]],j="0,0",xe=!1,se=null,fe=!1;i.outputColorSpace=Nt,i.localClippingEnabled=!0,i.toneMapping=du,i.shadowMap.enabled=!0,i.shadowMap.type=af,r.background=new Pe(Sy),r.fog=J,r.add(new iu(Q3,eL,.9)),r.add(a),r.add(O),r.add(Q),r.add($.mesh),r.add(q.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set($w,$w),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,r.add(h),r.add(h.target);let ae=u((ce,de,he=ee)=>he.map(([me,Me])=>{let Ce=ce.make();return Ce.position.set(ce.at[0]+me,ce.at[1],ce.at[2]+Me),de.add(Ce),Ce.updateMatrixWorld(!0),Ce}),"copiesOf"),Be=u(ce=>ae(ce,a,oL(ee,ce.span,g,e.v,xe)),"overlayCopiesOf"),Qe=u(ce=>ce.flatMap(de=>{let he=de.getObjectByName(Nu);return he===void 0?[]:[he]}),"unitParts"),De=u(ce=>ce.drawn.forEach(de=>{let he=de.getObjectByName(uy),me=de.getObjectByName(hy);he!==void 0&&(he.rotation.y=ce.facing),me!==void 0&&(me.position.y=ce.aloft)}),"pose"),ut=u(ce=>ce.drawn.forEach(de=>{de.rotation.x=ce.through*Math.PI*3}),"tumble"),ht=u(ce=>{let de=Bx(ce.through,ce.seed);ce.drawn.forEach(he=>he.children.forEach((me,Me)=>{let Ce=de[Me];if(Ce===void 0){me.visible=!1;return}me.position.set(...Ce.at),me.scale.setScalar(Math.max(Ce.size,1e-4)),me.visible=Ce.size>0}))},"shapePuff"),et=u((ce,de=!1,he=!1)=>{let me=Tw(Y,ce,de,he);return me.traverse(Me=>{Me.castShadow=Me instanceof pt}),me},"markerOf"),Ct=u(()=>{Y.sweepDue&&Y.sweep([...x.values(),...b.values()].flatMap(({original:ce})=>ce===void 0?[]:[ce]))},"sweep");return{render:u(()=>i.render(r,o),"render"),resize:u((ce,de,he)=>{i.setPixelRatio(he),i.setSize(ce,de,!1),o.aspect=de>0?ce/de:1,o.updateProjectionMatrix()},"resize"),setChunk:u((ce,de,he)=>{let me=`${ce},${de}`,Me=new Rt;Me.setAttribute("position",new Mt(he.positions,3)),Me.setAttribute("normal",new Mt(he.normals,3)),Me.setAttribute("color",new Mt(he.colours,3)),Me.setAttribute("surfacesA",new Mt(he.surfacesA,4,!0)),Me.setAttribute("surfacesB",new Mt(he.surfacesB,4,!0)),Me.setAttribute("shore",new Mt(he.shore,1,!0)),Me.setIndex(new Mt(he.indices,1)),Me.computeBoundingSphere();let Ce=f.get(me);Ce!==void 0&&(Ce.drawn.forEach(B=>a.remove(B)),Ce.geometry.dispose());let Oe={geometry:Me,at:[he.u,0,he.v],make:u(()=>{let B=new pt(Me,l);return B.castShadow=!0,B.receiveShadow=!0,B},"make"),drawn:[]};Oe.drawn=ae(Oe,a),f.set(me,Oe),$.setChunk(he)},"setChunk"),setOverlay:u((ce,de,he)=>{let me=`${ce},${de}`,Me=d.get(me);if(Me!==void 0&&(Me.drawn.forEach(at=>a.remove(at)),Me.geometry.dispose(),d.delete(me)),he===null)return;let Ce=new Rt;Ce.setAttribute("position",new Mt(he.positions,3)),Ce.setAttribute("normal",new Mt(he.normals,3)),Ce.setAttribute("color",new Mt(he.colours,3)),Ce.computeBoundingSphere(),Ce.computeBoundingBox();let Oe=Ce.boundingBox,B={geometry:Ce,span:[he.v+(Oe?.min.z??0),he.v+(Oe?.max.z??0)],at:[he.u,0,he.v],make:u(()=>{let at=new pt(Ce,m);return at.castShadow=!0,at.receiveShadow=!0,at},"make"),drawn:[]};B.drawn=Be(B),d.set(me,B)},"setOverlay"),unitAt:u(ce=>(o.updateMatrixWorld(),Cw([...x].map(([de,{drawn:he}])=>[de,he]),o,ce)),"unitAt"),setMarker:u((ce,de,he)=>{let me=x.get(ce);if(me?.drawn.forEach(Oe=>O.remove(Oe)),me?.faded!==void 0&&Dl(me.faded),x.delete(ce),he===null)return;let Me=et(he),Ce={at:de,make:u(()=>Me.clone(),"make"),drawn:[],original:Me};Ce.drawn=ae(Ce,O,ge),x.set(ce,Ce),Ct()},"setMarker"),setWalker:u((ce,de)=>{let he=b.get(ce);if(he?.drawn.forEach(B=>{O.remove(B),Ip(B)}),he?.original!==void 0&&Ip(he.original),he!==void 0&&Dl(he.faded),b.delete(ce),de===null)return;let me=de.unit?.model,Me=me===void 0?null:Y.rigOf(me),Ce=et(de,!0,Me!==null),Oe={at:he?.at??[0,0,0],facing:he?.facing??de.unit?.facing??0,aloft:he?.aloft??0,opacity:1,faded:new Map,make:iL(Ce,Me!==null),drawn:[],original:Ce,rig:Me,posed:null};Oe.drawn=ae(Oe,O,ge),De(Oe),b.set(ce,Oe),Ct()},"setWalker"),placeWalker:u((ce,de,he,me=0)=>{let Me=b.get(ce);Me!==void 0&&(Me.at=de,Me.facing=he,Me.aloft=me,Me.drawn.forEach((Ce,Oe)=>{let[B,at]=ge[Oe]??[0,0];Ce.position.set(de[0]+B,de[1],de[2]+at)}),De(Me))},"placeWalker"),poseWalker:u((ce,de,he)=>{let me=b.get(ce);me===void 0||me.rig===null||(me.posed={role:de,seconds:he},me.drawn.forEach(Me=>My(Me,me.rig,de,he,v)))},"poseWalker"),rigFacts:u(ce=>{let{unit:de}=ce,he=de?.model===void 0?null:Y.rigOf(de.model);return de===null||he===null?null:Yw(he,Ew(de))},"rigFacts"),jointAt:u((ce,de,he)=>{let me=b.get(ce);return me===void 0||me.rig===null?null:nL(me.drawn[0],de,he,ge[0]??[0,0])},"jointAt"),shot:u((ce,de,he=0)=>{let me=y.get(ce);if(de===null){me?.drawn.forEach(Ce=>O.remove(Ce)),y.delete(ce);return}let Me=me??{at:de,through:he,make:u(()=>{let Ce=new Ht,Oe=new pt(P,D);return Oe.position.y=.02,Ce.add(new pt(w,L),Oe),Ce},"make"),drawn:[]};me===void 0&&(Me.drawn=ae(Me,O,ge),y.set(ce,Me)),Me.at=de,Me.through=he,Me.drawn.forEach((Ce,Oe)=>{let[B,at]=ge[Oe]??[0,0];Ce.position.set(de[0]+B,de[1],de[2]+at)}),ut(Me)},"shot"),fadeMarker:u((ce,de)=>{let he=x.get(ce),me=Math.min(1,Math.max(0,de));if(!(he===void 0||me===(he.opacity??1))){if(he.opacity=me,he.faded??=new Map,me===1){Aw(Qe(he.drawn),he.faded);return}Ou(Qe(he.drawn),me,he.faded)}},"fadeMarker"),wake:u((ce,de,he=[])=>{let me=U.get(ce);if(de===null){me?.drawn.forEach(Oe=>O.remove(Oe)),me?.shape.dispose(),U.delete(ce);return}let Me=new Rt;Me.setAttribute("position",new Mt(Float32Array.from(he),3));let Ce=me??{at:de,shape:Me,make:u(()=>new pt(Ce.shape,X),"make"),drawn:[]};me===void 0?(Ce.drawn=ae(Ce,O,ge),U.set(ce,Ce)):(me.shape.dispose(),me.shape=Me,me.drawn.forEach(Oe=>{Oe.geometry=Me})),Ce.at=de,Ce.drawn.forEach((Oe,B)=>{let[at,st]=ge[B]??[0,0];Oe.position.set(de[0]+at,de[1],de[2]+st)})},"wake"),puff:u((ce,de,he=0)=>{let me=S.get(ce);if(de===null){me?.drawn.forEach(Oe=>O.remove(Oe)),S.delete(ce);return}let Me=Number(ce.replace(/\D/g,""))||0,Ce=me??{at:de,through:he,seed:Me,make:u(()=>{let Oe=new Ht;return Bx(0,Me).forEach(({shade:B})=>Oe.add(new pt(M,E[B]))),Oe},"make"),drawn:[]};me===void 0&&(Ce.drawn=ae(Ce,O,ge),S.set(ce,Ce)),Ce.at=de,Ce.through=he,Ce.drawn.forEach((Oe,B)=>{let[at,st]=ge[B]??[0,0];Oe.position.set(de[0]+at,de[1],de[2]+st)}),ht(Ce)},"puff"),fadeWalker:u((ce,de)=>{let he=b.get(ce),me=Math.min(1,Math.max(0,de));he===void 0||me===he.opacity||(he.opacity=me,Ou(he.drawn,me,he.faded))},"fadeWalker"),setYields:u(ce=>{se?.drawn.forEach(de=>Q.remove(de)),se=null,z.set(ce)!==null&&(se={at:[0,0,0],make:u(()=>z.make(),"make"),drawn:[]},se.drawn=ae(se,Q))},"setYields"),view:u((ce,de,he=e)=>{let[me,Me]=ce.focus,[Ce,Oe,B]=Fl(ce,de),at=sL(ce,he),{near:st,far:tt}=at;o.position.set(Ce,Oe,B),o.lookAt(me,de,Me),o.far=tt*1.2,o.near=Math.max(.1,ce.distance*.02),o.updateProjectionMatrix(),J.near=st,J.far=tt;let be=ce.distance*2.2,dt=h.shadow.camera;h.position.set(me+30,de+40,Me+20),h.target.position.set(me,de,Me),dt.left=-be,dt.right=be,dt.top=be,dt.bottom=-be,dt.near=Math.max(.5,Kw-be*1.6),dt.far=Kw+be*1.6,dt.updateProjectionMatrix(),$.follow(me,Me,tt*2.2,h.position.clone().sub(h.target.position)),q.follow(me,Me,tt*2.2),$.pastThePoles(he.v!==null),q.pastThePoles(he.v!==null),m.clippingPlanes=he.v===null?_:null,xe=he.v===null;let Ve=at.land,$e=`${Ve.join(";")}${xe?" stopped":""}`,N=at.markers,T=N.join(";");$e!==pe&&(ee=Ve,pe=$e,f.forEach(W=>{W.drawn.forEach(ue=>a.remove(ue)),W.drawn=ae(W,a)}),d.forEach(W=>{W.drawn.forEach(ue=>a.remove(ue)),W.drawn=Be(W)}),se!==null&&(se.drawn.forEach(W=>Q.remove(W)),se.drawn=ae(se,Q))),z.lean(ce.pitch),T!==j&&(ge=N,j=T,[...x.values(),...b.values(),...S.values(),...U.values(),...y.values()].forEach(W=>{W.drawn.forEach(ue=>{O.remove(ue),Ip(ue)}),W.drawn=ae(W,O,ge)}),b.forEach(De),b.forEach(({drawn:W,rig:ue,posed:ie})=>{ue!==null&&ie!==null&&W.forEach(_e=>My(_e,ue,ie.role,ie.seconds,v))}),S.forEach(ht),y.forEach(ut),b.forEach(W=>{W.opacity<1&&Ou(W.drawn,W.opacity,W.faded)}),x.forEach(W=>{W.faded!==void 0&&(W.opacity??1)<1&&Ou(Qe(W.drawn),W.opacity??1,W.faded)}))},"view"),loadModels:u(async(ce,de)=>{await dw(ce,(he,me,Me)=>{if(fe){me.parts.forEach(({geometry:Oe,map:B})=>{Oe.dispose(),B?.dispose()});return}let Ce=vp(ce,he);Y.addModel(Ce,me),de(Ce,Me)},(he,me)=>console.warn(`The 3D map's model ${vp(ce,he)}:`,me),(he,me)=>{fe||Y.addRig(vp(ce,he),me)})},"loadModels"),stats:u(()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries}),"stats"),dispose:u(()=>{fe=!0,f.forEach(({geometry:ce})=>ce.dispose()),f.clear(),d.forEach(({geometry:ce})=>ce.dispose()),d.clear(),m.dispose(),x.forEach(({faded:ce})=>ce!==void 0&&Dl(ce)),x.clear(),b.forEach(({faded:ce,drawn:de,original:he})=>{Dl(ce),[...de,...he===void 0?[]:[he]].forEach(Ip)}),b.clear(),S.clear(),U.forEach(({shape:ce})=>ce.dispose()),U.clear(),X.dispose(),M.dispose(),E.forEach(ce=>ce.dispose()),y.clear(),w.dispose(),L.dispose(),P.dispose(),D.dispose(),Y.dispose(),z.dispose(),$.dispose(),q.dispose(),l.dispose(),c.dispose(),i.dispose()},"dispose")}},"createStage");var aL=.25,lL=.06,Ey=.05,Np=500,Jw=u((s,e,t)=>s.flatMap(({at:n,joint:i},r)=>Array.from({length:Math.max(1,e)},(o,a)=>({figure:a,shot:r,joint:i,leaves:n+a*t}))).sort((n,i)=>n.leaves-i.leaves),"shotTimes"),jw=u((s,e,t,n)=>{let i=e[0]-s[0],r=e[2]-s[2],o=Math.hypot(i,r),a=(t-(Math.max(1,n)-1)/2)*lL;return o===0?[e[0],e[1],e[2]]:[e[0]-r/o*a,e[1],e[2]+i/o*a]},"landsAt"),Qw=u((s,e,t)=>{let n=Math.min(1,Math.max(0,t)),i=aL*Math.hypot(e[0]-s[0],e[2]-s[2])*4*n*(1-n);return[s[0]+(e[0]-s[0])*n,s[1]+(e[1]-s[1])*n+i,s[2]+(e[2]-s[2])*n]},"shotAt");var ur=1/Math.sqrt(3),e1=1.5*ur,cL=u((s,e)=>{let t=-s-e,n=Math.round(s),i=Math.round(e),r=Math.round(t),o=Math.abs(n-s),a=Math.abs(i-e),l=Math.abs(r-t);return o>a&&o>l?n=-i-r:a>l&&(i=-n-r),[n,i]},"roundAxial"),uL=u(({height:s,width:e,wrapsY:t})=>{let n=u((i,r)=>[i+.5+(r&1)*.5,ur+r*e1],"centre");return{topologyId:"hex-odd-r",centre:n,outline:u((i,r)=>{let[o,a]=n(i,r);return[[o,a-ur],[o+.5,a-ur/2],[o+.5,a+ur/2],[o,a+ur],[o-.5,a+ur/2],[o-.5,a-ur/2]]},"outline"),tileAt:u((i,r)=>{let o=i-.5,a=r-ur,[l,c]=cL(o-a*Math.sqrt(3)/3,a*2*Math.sqrt(3)/3);return[l+(c-(c&1))/2,c]},"tileAt"),period:u(()=>({u:e,v:t?s*e1:null}),"period")}},"hexOddRLayout"),t1=uL;var hL=u(({height:s,width:e,wrapsY:t})=>({topologyId:"square",centre:u((n,i)=>[n+.5,i+.5],"centre"),outline:u((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:u((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:u(()=>({u:e,v:t?s:null}),"period")}),"squareLayout"),n1=hL;var _s=Math.SQRT2/2,dL=u(({height:s,width:e,wrapsY:t})=>{let n=u((i,r)=>[(2*i+(r&1)+1)*_s,(r+1)*_s],"centre");return{topologyId:"staggered-iso",centre:n,outline:u((i,r)=>{let[o,a]=n(i,r);return[[o,a-_s],[o+_s,a],[o,a+_s],[o-_s,a]]},"outline"),tileAt:u((i,r)=>{let o=i/_s,a=r/_s,l=Math.floor((o+a)/2-1+.5),c=Math.floor((a-o)/2+.5),h=l+c;return[Math.floor((l-c)/2),h]},"tileAt"),period:u(()=>({u:e*2*_s,v:t?s*_s:null}),"period")}},"staggeredIsoLayout"),i1=dL;var s1={square:n1,"staggered-iso":i1,"hex-odd-r":t1},fL=u(s=>{if(!Object.prototype.hasOwnProperty.call(s1,s.topologyId))throw new Error(`No ground layout for the ${s.topologyId} grid.`);if(s.wrapsY&&s.topologyId!=="square"&&s.height%2!==0)throw new Error(`The ${s.topologyId} grid can't wrap over the poles with an odd number of rows (${s.height}).`);return s1[s.topologyId](s)},"groundLayoutFor"),r1=fL;var ku=u(s=>{let e=s/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Dp=.65,Ty=u(s=>{let e=u(t=>{let n=parseInt(s.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),hr=.22,Op=.12,Ay={low:.2,high:.5},o1=u((s,e,t,n,i,r,o,a,l)=>{let c=r-t,h=o-n,f=c*c+h*h,d=f===0?0:Math.max(0,Math.min(1,((s-t)*c+(e-n)*h)/f)),m=ku(Math.hypot(s-t-c*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(i+(a-i)*(1-g*g*g)+l)},"halfRidge"),zu=u((s,e,t,n)=>{let i=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),pL=u((s,e,t)=>({u:(zu(s,e,t,1)*2-1)*hr,v:(zu(s,e,t,2)*2-1)*hr,scale:.75+zu(s,e,t,3)*.5}),"peakOf"),mL=u(({layout:s,ranges:e=!0,seed:t=1,source:n})=>{let{width:i,height:r,wrapsY:o}=n,a=s.period(),l=si([bs({cell:.7,period:a,seed:t}),bs({cell:.35,period:a,seed:t+1}),bs({cell:.17,period:a,seed:t+2})]),c=si([bs({cell:.45,period:a,seed:t+3}),bs({cell:.22,period:a,seed:t+4})]),h=u((z,$)=>1-2*Math.abs(c(z,$)),"ridged"),f=bs({cell:.8,period:a,seed:t+5}),d=bs({cell:.8,period:a,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],_=[],x=[],b=[],v=[],S=u((z,$)=>{let q=(z%i+i)%i;return!o&&($<0||$>=r)?null:($%r+r)%r*i+q},"index"),M=u(z=>{let $=new Array(i*r).fill(1/0),q=[];z.forEach((J,ee)=>{J&&($[ee]=0,q.push([ee%i,Math.floor(ee/i)]))});for(let[J,ee]of q){let pe=$[ee*i+J]??1/0;pe>=xs.reach||n.neighbours(J,ee).forEach(([ge,j])=>{let xe=j*i+ge;($[xe]??1/0)>pe+1&&($[xe]=pe+1,q.push([ge,j]))})}return $},"distancesFromLand"),A=u((z,$)=>{let q=n.terrainAt(z,$);return`${q}${q!=="Unknown"&&n.waterAt(z,$)?" water":""}`},"readAs"),E=u(z=>{if(z!==void 0&&_.length>0&&z.every(([se,fe])=>{let ae=S(se,fe);return ae===null||_[ae]===A(se,fe)}))return[];let $=[],q=[],J=[];for(let se=0;se<r;se++)for(let fe=0;fe<i;fe++){let ae=n.terrainAt(fe,se);$.push(ae),q.push(ae!=="Unknown"&&n.waterAt(fe,se)),J.push(Yo(ae))}let ee=M($.map((se,fe)=>se!=="Unknown"&&!q[fe])),pe=$.map((se,fe)=>`${se}${q[fe]?" water":""}`),ge=[];pe.forEach((se,fe)=>{_[fe]!==se&&ge.push([fe%i,Math.floor(fe/i)])}),_=pe,g=J.map((se,fe)=>{let ae=se===ap,Be=fe%i,Qe=Math.floor(fe/i),De=pL(Be,Qe,t);if(!q[fe])return{relief:se.relief,colour:Ty(se.colour),surface:qn.indexOf(se.surface),water:!1,unknown:ae,peak:De};let ut=Math.min(ee[fe]??1/0,xs.reach),ht=xs.shore+(xs.deep-xs.shore)*Math.max(0,ut-1)/Math.max(1,xs.reach-1);return{relief:{...se.relief,base:ht},colour:Ty(se.colour),surface:qn.indexOf("sand"),water:!0,unknown:ae,peak:De}});let j=v,xe=new Map(ge.map(([se,fe])=>[`${se},${fe}`,[se,fe]]));return v=g.map(({relief:se,unknown:fe},ae)=>!fe&&!q[ae]&&se.shape==="peaked"),ge.some(([se,fe])=>{let ae=fe*i+se;return v[ae]===!0||j[ae]===!0})&&([x,b]=X()),ge.forEach(([se,fe])=>{let ae=fe*i+se;v[ae]!==!0&&j[ae]!==!0||n.neighbours(se,fe).forEach(([Be,Qe])=>{let De=S(Be,Qe);De!==null&&v[De]===!0&&xe.set(`${Be},${Qe}`,[Be,Qe])})}),[...xe.values()]},"refresh"),y=u(z=>{let[$,q]=s.centre(0,z);return Math.max(...s.outline(0,z).map(([J,ee])=>Math.hypot(J-$,ee-q)))},"cornerOf"),w=u((z,$)=>{let[q,J]=s.centre(0,z),ee=[];for(let pe=-8;pe<=8;pe++)for(let ge=-6;ge<=6;ge++){let[j,xe]=s.centre(ge,z+pe);Math.hypot(j-q,xe-J)<$+1e-9&&ee.push([ge,pe])}return ee},"offsetsWithin"),L=u((z,$,q,J)=>{if(i>=6&&(!o||r>=6)){let se=u((Be,Qe)=>{let De=(Be%Qe+Qe)%Qe;return De*2<Qe?De:De-Qe},"nearest"),fe=se(q-z,i),ae=o?se(J-$,r):J-$;return fe===0&&ae===0?[]:[[fe,ae]]}let ee=u((se,fe)=>{let ae=(se%fe+fe)%fe;return ae===0?[0]:[ae,ae-fe]},"copies"),[pe,ge]=s.centre(z,$),j=ee(q-z,i).flatMap(se=>(o?ee(J-$,r):[J-$]).flatMap(fe=>{if(se===0&&fe===0)return[];let[ae,Be]=s.centre(z+se,$+fe);return[[se,fe,Math.hypot(ae-pe,Be-ge)]]})),xe=Math.min(...j.map(([,,se])=>se));return j.filter(([,,se])=>se<=xe+1e-9).map(([se,fe])=>[se,fe])},"stepsTo"),P=Math.max(...[0,1].flatMap(z=>{let[$,q]=s.centre(0,z);return n.neighbours(0,z).flatMap(([J,ee])=>L(0,z,J,ee).map(([pe,ge])=>{let[j,xe]=s.centre(pe,z+ge);return Math.hypot(j-$,xe-q)}))}),1),D=[0,1].map(z=>{let[$,q]=s.centre(0,z);return w(z,P+hr*Math.SQRT2+Op+1.2+Math.max(y(0),y(1))).flatMap(([J,ee])=>{let[pe,ge]=s.centre(J,z+ee);return[J,ee,pe-$,ge-q]})}),U=u((z,$,q,J,ee,pe)=>{let ge=ee-q,j=pe-J,xe=ge*ge+j*j,se=xe===0?0:Math.max(0,Math.min(1,((z-q)*ge+($-J)*j)/xe));return Math.hypot(z-q-ge*se,$-J-j*se)},"toSegment"),X=u(()=>{let z=g.map(()=>[]),$=g.map(()=>[]),q=Math.max(y(0),y(1));return e?(g.forEach((J,ee)=>{if(v[ee]!==!0)return;let pe=ee%i,ge=Math.floor(ee/i),[j,xe]=s.centre(pe,ge),se=new Map;n.neighbours(pe,ge).forEach(([fe,ae])=>{let Be=S(fe,ae);Be!==null&&v[Be]===!0&&L(pe,ge,fe,ae).forEach(([Qe,De])=>se.set(`${Qe},${De}`,[Qe,De,Be]))}),se.forEach(([fe,ae,Be])=>{let Qe=g[Be];if(Qe===void 0||ae<0||ae===0&&fe<0)return;let[De,ut]=s.centre(pe+fe,ge+ae),{peak:ht,relief:et}=J,{peak:Ct,relief:Ut}=Qe,ce=ht.u,de=ht.v,he=De-j+Ct.u,me=ut-xe+Ct.v,Me=et.base*Dp*ht.scale,Ce=Ut.base*Dp*Ct.scale,Oe=Math.hypot(he-ce,me-de)||1,B=16+(ae+2)*5+(fe+2),at=(zu(pe,ge,t,B)*2-1)*Op,st=Ay.low+(Ay.high-Ay.low)*zu(pe,ge,t,B+32),tt=(ce+he)/2-(me-de)/Oe*at,be=(de+me)/2+(he-ce)/Oe*at,dt=Math.max(Math.hypot(ce-tt,de-be),Math.hypot(he-tt,me-be))+1.2,Ve={au:ce,av:de,ah:Me,mu:tt,mv:be,mh:st*Math.min(Me,Ce),bu:he,bv:me,bh:Ce,roughness:(et.roughness+Ut.roughness)/2,cu:tt,cv:be,reach:dt*dt},$e=(Math.sqrt(Ve.reach)+q)**2,N=D[ge&1]??[];for(let T=0;T<N.length;T+=4){let W=N[T+2],ue=N[T+3];if((W-tt)**2+(ue-be)**2>=$e||Math.min(U(W,ue,ce,de,tt,be),U(W,ue,tt,be,he,me))>=1.2+q)continue;let ie=S(pe+N[T],ge+N[T+1]);ie!==null&&(z[ie]?.push(Ve),$[ie]?.push(W,ue))}})}),[z,$]):[z,$]},"ranges"),O=u(z=>{let[$,q]=s.centre(0,z),J=Math.max(...s.outline(0,z).map(([pe,ge])=>Math.hypot(pe-$,ge-q))),ee=[];for(let pe=-6;pe<=6;pe++)for(let ge=-4;ge<=4;ge++){let[j,xe]=s.centre(ge,z+pe);Math.hypot(j-$,xe-q)<1.2+J+hr*Math.SQRT2+1e-9&&ee.push([ge,pe])}return ee},"offsetsFor"),Y=[O(0),O(1)],Q=u((z,$)=>{let[q,J]=s.tileAt(z,$),ee=S(q,J),pe=ee===null?null:g[ee]??null;if(pe===null||pe.unknown)return{height:0,colour:Ty(ap.colour),surfaces:qn.map(()=>0),shore:0,unseen:!0};let ge=null,j=null,xe=u(Me=>Me==="rolling"?ge??=l(z,$):j??=h(z,$),"noiseHere"),se=0,fe=0,ae=0,Be=0,Qe=qn.map(()=>0),De=0,ut=0,ht=0,et=0,Ct=0,Ut=z+hr*f(z,$),ce=$+hr*d(z,$);(Y[J&1]??[]).forEach(([Me,Ce])=>{let Oe=q+Me,B=J+Ce,at=S(Oe,B);if(at===null)return;let st=g[at];if(st===void 0)return;let[tt,be]=s.centre(Oe,B),{relief:dt,colour:Ve,peak:$e,surface:N}=st,T=ku(Math.hypot(z-tt,$-be)),W=dt.shape==="peaked"?ku(Math.hypot(z-tt-$e.u,$-be-$e.v)):0,ue=ku(Math.hypot(Ut-tt,ce-be))**3;if(T>0){let ie=m[dt.shape],_e=ie===null?0:dt.roughness*xe(ie);dt.shape==="peaked"?fe+=T*(dt.base*(1-Dp)+_e*.5):fe+=T*(dt.base+_e),se+=T}if(W>0){let ie=dt.roughness*xe("ridged");ae+=W*W*(dt.base*Dp*$e.scale+ie*.5)}Be+=ue,st.unknown||(Qe[N]=(Qe[N]??0)+ue,De+=ue,ut+=st.water?ue:0),ht+=ue*Ve[0],et+=ue*Ve[1],Ct+=ue*Ve[2]});let de=ee===null?[]:x[ee]??[],he=ee===null?[]:b[ee]??[],me=ae;if(de.length>0){let[Me,Ce]=s.centre(q,J);de.forEach((Oe,B)=>{let at=z-Me+(he[B*2]??0),st=$-Ce+(he[B*2+1]??0);if((at-Oe.cu)**2+(st-Oe.cv)**2>=Oe.reach)return;let tt=Oe.roughness*xe("ridged")*.5;me=Math.max(me,o1(at,st,Oe.au,Oe.av,Oe.ah,Oe.mu,Oe.mv,Oe.mh,tt),o1(at,st,Oe.bu,Oe.bv,Oe.bh,Oe.mu,Oe.mv,Oe.mh,tt))})}return{height:(se>0?fe/se:0)+me,colour:Be>0?[ht/Be,et/Be,Ct/Be]:pe.colour,surfaces:De>0?Qe.map(Me=>Me/De):qn.map((Me,Ce)=>Ce===pe.surface?1:0),shore:De>0?ut/De:pe.water?1:0,unseen:!1}},"sample");return E(),{sample:Q,height:u((z,$)=>Q(z,$).height,"height"),refresh:E}},"createRelief"),a1=mL;var l1=u((s,e,{size:t=16,perUnit:n=8}={})=>{let{u:i,v:r}=s.period(),o=r??Math.max(...s.outline(0,e-1).map(([,f])=>f),...s.outline(1,e-1).map(([,f])=>f)),a=Math.max(1,Math.round(i/t)),l=Math.max(1,Math.round(o/t)),c=Math.max(2,Math.round(i/a*n)),h=Math.max(2,Math.round(o/l*n));return{chunksU:a,chunksV:l,stepsU:c,stepsV:h,spacingU:i/a/c,spacingV:o/l/h}},"chunkGrid"),c1=u((s,e,t,n)=>{let{stepsU:i,stepsV:r,spacingU:o,spacingV:a}=s,l=t*i,c=n*r,h=u((L,P)=>[L*o,P*a],"at"),f=i+3,d=new Float64Array(f*(r+3)),m=(i+1)*(r+1),g=new Float32Array(m*3),_=new Uint8Array(m*4),x=new Uint8Array(m*4),b=new Uint8Array(m),v=new Float32Array(m);for(let L=-1;L<=r+1;L++)for(let P=-1;P<=i+1;P++){let D=e.sample(...h(l+P,c+L)),{height:U,colour:X}=D;if(d[(L+1)*f+(P+1)]=U,P>=0&&P<=i&&L>=0&&L<=r){let O=L*(i+1)+P;g.set(X,O*3),D.surfaces.forEach((Y,Q)=>{(Q<4?_:x)[O*4+Q%4]=Math.round(Y*255)}),b[O]=Math.round(D.shore*255),v[O]=D.unseen?1:0}}let S=u((L,P)=>d[(P+1)*f+(L+1)]??0,"height"),M=new Float32Array(m*3),A=new Float32Array(m*3),[E,y]=h(l,c);for(let L=0;L<=r;L++)for(let P=0;P<=i;P++){let D=L*(i+1)+P,[U,X]=h(l+P,c+L),O=(S(P+1,L)-S(P-1,L))/(2*o),Y=(S(P,L+1)-S(P,L-1))/(2*a),Q=Math.hypot(O,1,Y);M[D*3]=U-E,M[D*3+1]=S(P,L),M[D*3+2]=X-y,A[D*3]=-O/Q,A[D*3+1]=1/Q,A[D*3+2]=-Y/Q}let w=new Uint32Array(i*r*6);for(let L=0;L<r;L++)for(let P=0;P<i;P++){let D=L*(i+1)+P,U=D+1,X=D+i+1,O=X+1,Y=(L*i+P)*6;w.set([D,X,U,U,X,O],Y)}return{u:E,v:y,positions:M,normals:A,colours:g,surfacesA:_,surfacesB:x,shore:b,unseen:v,indices:w}},"buildChunk"),Ry=u((s,e,t,n)=>{let i=s.stepsU*s.spacingU,r=s.stepsV*s.spacingV,o=e.period().v!==null,a=new Set;return t.forEach(([l,c])=>{let[h,f]=e.centre(l,c);for(let d=Math.floor((h-n)/i);d<=Math.floor((h+n)/i);d++)for(let m=Math.floor((f-n)/r);m<=Math.floor((f+n)/r);m++){if(!o&&(m<0||m>=s.chunksV))continue;let g=(d%s.chunksU+s.chunksU)%s.chunksU,_=o?(m%s.chunksV+s.chunksV)%s.chunksV:m;a.add(`${g},${_}`)}}),[...a].map(l=>l.split(",").map(Number))},"chunksNear");var ci=u((s,e,t,n,i)=>({kind:s,count:e,size:t,colour:n,detail:i}),"plant"),u1={Forest:{plants:[ci("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[ci("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),ci("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[ci("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),ci("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[ci("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[ci("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[ci("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[ci("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),ci("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[ci("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[ci("rock",2,[.7,1.1],"#a8936a","#a8936a"),ci("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Gl=u(s=>Object.prototype.hasOwnProperty.call(u1,s)?u1[s]:null,"growthOf");var h1=["Ocean"],gL=["Mountains"],xL=["Mine","Fortress","Airbase"],bL=["River"],Tn=u((s,e)=>(s.improvements??[]).some(({_:t})=>t===e),"has"),yL=["Irrigation","Farmland","Fortress","Airbase"],d1=u(s=>s.city||yL.some(e=>Tn(s,e))?null:Gl(s.terrain?._??"Unknown")?.canopy??null,"woodsOf"),_L=u((s,e)=>{if(s.city){let d=s.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:s.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:kS(Wx(String(d.id??d.name??"")),d.growth?.size??1,e.filter(({tile:m})=>Tn(m,"Road")&&(Tn(s,"Road")||Tn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>h1.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=Tn(s,"Road"),n=Tn(s,"Railroad"),i=t?e.filter(d=>Tn(d.tile,"Road")).map(({offset:d})=>d):[],r=t?e.filter(d=>!!d.tile.city||Tn(d.tile,"Railroad")).map(({offset:d})=>d):[],o=u((d,m)=>d[0]===m[0]&&d[1]===m[1],"same"),a=i.length===0&&r.length===0,l={road:t?{joins:i.filter(d=>!n||!r.some(m=>o(m,d))),alone:a&&!n}:null,railroad:t&&n?{joins:r,alone:a}:null,irrigation:Tn(s,"Farmland")?"farmland":Tn(s,"Irrigation")?"irrigation":null,mine:Tn(s,"Mine"),fortress:Tn(s,"Fortress"),airbase:Tn(s,"Airbase"),pollution:Tn(s,"Pollution"),specials:(s.terrain?.features??[]).map(({_:d})=>d).filter(d=>!bL.includes(d)).map(d=>[s.terrain._,d]),hut:s.goodyHut!==null&&s.goodyHut!==void 0,terrain:s.terrain?._??"Unknown",vegetation:Gl(s.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},c=d1(s),h=s.terrain?._??"Unknown";return s.isWater!==!0&&!h1.includes(h)&&h!=="Unknown"&&!gL.includes(h)&&!xL.some(d=>Tn(s,d))&&(l.suburbs=e.flatMap(({offset:d,tile:{city:m}})=>{let g=m?VS(m.growth?.size??1):0;return m&&g>0?[{seed:Wx(String(m.id??m.name??"")),steps:g,city:d}]:[]}).sort((d,m)=>d.seed-m.seed||d.city[0]-m.city[0]||d.city[1]-m.city[1])),l.suburbs.length>0&&(l.beside=e.filter(({tile:{city:d}})=>!!d).map(({offset:d})=>d)),c!==null&&(l.woods=e.filter(d=>d1(d.tile)===c).map(({offset:d})=>d)),(c!==null||l.suburbs.length>0)&&(l.paths=e.filter(d=>!!d.tile.city||Tn(d.tile,"Road")).map(({offset:d})=>d)),l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation&&l.suburbs.length===0?null:l},"overlayFor"),f1=_L;var Gt=u((s,e,t,n)=>({shape:s,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),p1={Coal:Gt("rocks","#26262a",4),Gold:Gt("rocks","#d8b13a",3),Gems:Gt("rocks","#59c2d6",4,"#b05ad0"),Iron:Gt("rocks","#8a5a44",4),Wheat:Gt("crop","#d9b84a",5,"#a88a2c"),Spice:Gt("crop","#c0452e",4,"#5d7a2a"),Wine:Gt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Gt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Gt("crop","#e08a2a",4,"#3f7a2a"),Horse:Gt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Gt("animal","#4a3424",3,"#2a1e16"),Game:Gt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Gt("animal","#8f7e66",2,"#e8e2d6"),Furs:Gt("animal","#b0602a",2,"#f0e8dc"),Ivory:Gt("animal","#8a8580",1,"#f2ead8"),Seal:Gt("animal","#6e7072",2,"#4a4c4e"),Pheasant:Gt("bird","#8a3a22",2,"#3d6a3a"),Fish:Gt("fish","#b8c4cc",5),Whales:Gt("whale","#3a4048",1),Oil:Gt("derrick","#222224",1,"#121214"),Oasis:Gt("oasis","#3f7a32",3,"#3f86a8"),Peat:Gt("peat","#4a3624",4),Shield:Gt("logs","#7a5532",4,"#c9a47a")},vL=Gt("cairn","#9a9690",5),m1=u((s,e)=>{let t=u(n=>Object.prototype.hasOwnProperty.call(p1,n)?p1[n]:void 0,"own");return t(`${s}:${e}`)??t(e)??vL},"specialLook");var Oy=u(()=>({positions:[],normals:[],colours:[]}),"soup"),Un={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Hl=.06,g1="#8c7a58",x1="#5f5953",ML="#a9abae",SL="#5e432b",wL="#4f87b0",EL="#7da33f",TL=["#c2b448","#8fae3e"],b1="#9d968a",AL="#4a4c50",Ly="#6b4a2e",RL="#7a6a58",CL="#b89a5a",PL="#c9b48e",y1="#34322a",On=new ls(1,1,1),Wl=new _i(.5,.5,1,8),Uy=new Qs(.5,1,8),R1=new Qs(.5,1,4),Vl=new zr(.5,8,6),Gu=new _i(.5,.5,1,4,1,!0),Vu=new Qs(.5,1,5,1,!0),Up=new zr(.5,5,3),Cy={mine:[3,.72],hut:[11,.64],special:u(s=>[s+1,.72],"special")},IL=.05,C1=.22,_1=72,wi=u((s,e)=>{let t=Math.imul(s^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Fy=.05,v1=new Map,Fp=u(s=>{let e=v1.get(s);if(e===void 0){let{r:t,g:n,b:i}=new Pe(s);e=[t,n,i],v1.set(s,e)}return e},"colourOf"),M1=new WeakMap,LL=u(s=>{let e=M1.get(s);if(e===void 0){let t=s.index===null?s:s.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},M1.set(s,e),t!==s&&t.dispose()}return e},"trianglesOf"),NL=new Ze,DL=new je,OL=new H,UL=new $t,FL=new Qn,BL=new H,Dt,P1,qt,Gy=class Gy{constructor(e,t){G(this,Dt);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let i=this.place.heightAt(e,t);return n?Math.max(0,i):i}strip(e,t,n,i,r){let o=Fp(i),a=Math.hypot(t[0]-e[0],t[1]-e[1]);if(a===0)return;let l=Math.max(1,Math.ceil(a/Hl)),c=Math.max(1,Math.ceil(n/Hl)),h=[-(t[1]-e[1])/a*n,(t[0]-e[0])/a*n],f=u((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<l;d++)for(let m=0;m<c;m++){let[g,_]=f(d/l,(m+1)/c),[x,b]=f((d+1)/l,(m+1)/c),[v,S]=f(d/l,m/c),[M,A]=f((d+1)/l,m/c);R(this,Dt,qt).call(this,g,_,r,o),R(this,Dt,qt).call(this,x,b,r,o),R(this,Dt,qt).call(this,v,S,r,o),R(this,Dt,qt).call(this,x,b,r,o),R(this,Dt,qt).call(this,M,A,r,o),R(this,Dt,qt).call(this,v,S,r,o)}}ribbon(e,t,n,i,r){let o=Fp(n),a=e.map((l,c)=>{let h=e[c-1]??l,f=e[c+1]??l,[d,m]=r?.[c]??[f[0]-h[0],f[1]-h[1]],g=Math.hypot(d,m);return g===0?[0,0]:[-m/g*t,d/g*t]});for(let l=0;l+1<e.length;l++){let c=e[l],h=e[l+1],f=a[l],d=a[l+1],m=Math.hypot(h[0]-c[0],h[1]-c[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/Hl)),_=Math.max(1,Math.ceil(t/Hl)),x=u((b,v)=>[c[0]+(h[0]-c[0])*b+(f[0]+(d[0]-f[0])*b)*(v-.5),c[1]+(h[1]-c[1])*b+(f[1]+(d[1]-f[1])*b)*(v-.5)],"at");for(let b=0;b<g;b++)for(let v=0;v<_;v++){let[S,M]=x(b/g,(v+1)/_),[A,E]=x((b+1)/g,(v+1)/_),[y,w]=x(b/g,v/_),[L,P]=x((b+1)/g,v/_);R(this,Dt,qt).call(this,S,M,i,o),R(this,Dt,qt).call(this,A,E,i,o),R(this,Dt,qt).call(this,y,w,i,o),R(this,Dt,qt).call(this,A,E,i,o),R(this,Dt,qt).call(this,L,P,i,o),R(this,Dt,qt).call(this,y,w,i,o)}}}disc(e,t,n,i,r=12){let o=Fp(n),[a,l]=e,c=Math.max(1,Math.ceil(t/Hl)),h=u((f,d)=>{let m=d/r*Math.PI*2,g=f/c*t;return[a+Math.cos(m)*g,l+Math.sin(m)*g]},"at");for(let f=0;f<c;f++)for(let d=0;d<r;d++){let m=h(f+1,d),g=h(f+1,d+1);if(f===0)R(this,Dt,qt).call(this,a,l,i,o),R(this,Dt,qt).call(this,...g,i,o),R(this,Dt,qt).call(this,...m,i,o);else{let _=h(f,d),x=h(f,d+1);R(this,Dt,qt).call(this,..._,i,o),R(this,Dt,qt).call(this,...x,i,o),R(this,Dt,qt).call(this,...m,i,o),R(this,Dt,qt).call(this,...x,i,o),R(this,Dt,qt).call(this,...g,i,o),R(this,Dt,qt).call(this,...m,i,o)}}}solid(e,t,n,i,r=[0,0,0]){let{positions:o,normals:a}=LL(e),l=NL.compose(OL.set(...t),UL.setFromEuler(FL.set(...r)),BL.set(...n)),c=l.elements,h=DL.getNormalMatrix(l).elements,[f,d,m]=Fp(i),g=this.soup;for(let _=0;_<o.length;_+=3){let x=o[_],b=o[_+1],v=o[_+2],S=a[_],M=a[_+1],A=a[_+2],E=h[0]*S+h[3]*M+h[6]*A,y=h[1]*S+h[4]*M+h[7]*A,w=h[2]*S+h[5]*M+h[8]*A,L=Math.hypot(E,y,w)||1;g.positions.push(c[0]*x+c[4]*b+c[8]*v+c[12],c[1]*x+c[5]*b+c[9]*v+c[13],c[2]*x+c[6]*b+c[10]*v+c[14]),g.normals.push(E/L,y/L,w/L),g.colours.push(f,d,m)}}spot(e,t){let n=wi(this.place.seed,e)*Math.PI*2,[i,r]=this.place.centre;return[i+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[i,r]=this.place.centre,o=Math.hypot(e-i,t-r)-C1-n;return this.lines.forEach(([a,l])=>{o=Math.min(o,tN(e,t,a,l)-IL-n)}),this.taken.forEach(([a,l,c])=>{o=Math.min(o,Math.hypot(e-a,t-l)-c-n)}),o}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let i=wi(this.place.seed,e)*Math.PI*2,[r,o]=this.place.centre,a=[r,o],l=-1/0;for(let c of[t,t*.88,t*1.1])for(let h=0;h<_1;h++){let f=i+h/_1*Math.PI*2,d=[r+Math.cos(f)*c*this.place.radius,o+Math.sin(f)*c*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>l&&(a=d,l=m)}return this.taken.push([a[0],a[1],n]),a}};Dt=new WeakSet,P1=u(function(e,t){let n=Fy,i=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),r=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),o=Math.hypot(i,1,r);return[-i/o,1/o,-r/o]},"#normal"),qt=u(function(e,t,n,i){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...R(this,Dt,P1).call(this,e,t)),this.soup.colours.push(...i)},"#point"),u(Gy,"Layer");var Ny=Gy,kp=u((s,e)=>{let[t,n]=s.centre,[i,r]=s.toward(e);return[(t+i)/2,(n+r)/2]},"halfway"),By=u(s=>s.alone||s.joins.length>0,"drawn"),kL=.09,zL=8,Dy=u(([s,e])=>300+(s+3)*7+(e+3),"wayIndex"),zp=u((s,e)=>{let[t,n]=s.centre,[i,r]=kp(s,e),o=i-t,a=r-n,l=Math.hypot(o,a);if(l===0)return{points:[[t,n]],ways:[[0,0]]};let c=(wi(s.seed,Dy(e))*2-1)*kL*l/(4/9),h=[-a/l,o/l],f=[t+o/3+h[0]*c,n+a/3+h[1]*c],d=[t+o*2/3,n+a*2/3],m=Math.max(zL,Math.ceil(l*1.02/Hl)),g=Array.from({length:m+1},(_,x)=>x/m);return{points:g.map(_=>{let x=(1-_)**3,b=3*(1-_)**2*_,v=3*(1-_)*_**2,S=_**3;return[x*t+b*f[0]+v*d[0]+S*i,x*n+b*f[1]+v*d[1]+S*r]}),ways:g.map(_=>{let x=3*(1-_)**2,b=6*(1-_)*_,v=3*_**2,S=x*(f[0]-t)+b*(d[0]-f[0])+v*(i-d[0]),M=x*(f[1]-n)+b*(d[1]-f[1])+v*(r-d[1]),A=Math.hypot(S,M);return A===0?[o/l,a/l]:[S/A,M/A]})}},"roadHalf"),GL=u((s,e)=>{let{place:t}=s;By(e)&&(e.joins.forEach(n=>{let{points:i,ways:r}=zp(t,n);s.ribbon(i,.07,g1,Un.road,r)}),s.disc(t.centre,e.alone?.09:.035,g1,Un.road))},"road"),VL=u((s,e)=>{if(!By(e))return;let{place:t}=s;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(i=>kp(t,i))).forEach(i=>{let[r,o]=t.centre,a=Math.hypot(i[0]-r,i[1]-o),l=a===0?[0,0]:[-(i[1]-o)/a*.025,(i[0]-r)/a*.025];s.strip(t.centre,i,.1,x1,Un.ballast);for(let c=.1;c<1;c+=.2){let h=[r+(i[0]-r)*c,o+(i[1]-o)*c];s.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,SL,Un.ballast+.002)}[1,-1].forEach(c=>s.strip([r+l[0]*c,o+l[1]*c],[i[0]+l[0]*c,i[1]+l[1]*c],.01,ML,Un.rail))}),s.disc(t.centre,.05,x1,Un.ballast)},"railroad"),Py=.04,HL=u((s,e,t,n,i)=>{let r=i.filter(l=>Math.min(...l.map(([,c])=>c))-Bt<t+n/2&&Math.max(...l.map(([,c])=>c))+Bt>t-n/2).map(l=>[Math.min(...l.map(([c])=>c))-Bt,Math.max(...l.map(([c])=>c))+Bt]).sort((l,c)=>l[0]-c[0]),o=[],a=s;return r.forEach(([l,c])=>{l-a>=Py&&o.push([a,Math.min(l,e)]),a=Math.max(a,c)}),e-a>=Py&&o.push([a,e]),o.filter(([l,c])=>c-l>=Py)},"rowAround"),WL=u((s,e,t)=>{let{centre:n,inner:i}=s.place,r=e==="farmland"?6:4,o=i*.9,a=o*2/r,l=u((c,h,f,d)=>HL(n[0]-o,n[0]+o,c,h,t).forEach(([m,g])=>s.strip([m,c],[g,c],h,f,d)),"across");for(let c=0;c<r;c++)l(n[1]-o+a*(c+.5),a*.8,e==="farmland"?TL[c%2]:EL,Un.field),c>0&&l(n[1]-o+a*c,.016,wL,Un.field+.001)},"fields"),S1=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],w1="#a39a88",XL="#c4b8a2",qL=.045,E1=.86,YL=u((s,e)=>{let{place:t}=s,[n,i]=t.centre,{plaza:r,streets:o,lots:a}=zS(t,e,[n,i+oa]);s.disc(r.at,r.radius,w1,Un.road,16),o.forEach(([l,c])=>s.strip(l,c,Eu,w1,Un.road)),a.forEach(l=>I1(s,l))},"city"),I1=u((s,e)=>{let{at:[t,n],width:i,facing:r,storeys:o}=e,a=[[t,n],...El(e)].map(([h,f])=>s.ground(h,f)),l=Math.min(...a)-.005,c=Math.max(...a)+qL*o;s.solid(On,[t,(l+c)/2,n],[i*E1,c-l,i*E1],XL,[0,r,0]),s.solid(R1,[t,c+i*.2,n],[i*Math.SQRT2,i*.4,i*Math.SQRT2],S1[Math.floor(e.roof*S1.length)],[0,r+Math.PI/4,0])},"house"),$L=u((s,e)=>{if(e.suburbs.length===0)return[];let{place:t}=s,n=u((a,l)=>a[0]===l[0]&&a[1]===l[1],"same"),i=u(a=>{let[l,c]=t.toward(a);return[l,c+oa]},"standOf"),r={runs:[...s.runs],lines:[...s.past],lanes:e.beside.filter(a=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(l=>n(l,a))).map(a=>[[t.centre[0],t.centre[1]],i(a)]),stands:e.beside.map(i),taken:s.taken,ground:u((a,l)=>t.heightAt(a,l),"ground")};return e.suburbs.flatMap(a=>HS(t,a,{...r,others:e.beside.filter(l=>!n(l,a.city)).map(l=>t.toward(l))})).map(a=>(I1(s,a),s.taken.push([a.at[0],a.at[1],a.width/2*Math.SQRT2]),El(a)))},"suburbs"),KL=u((s,[e,t])=>{let n=s.ground(e,t);s.solid(On,[e-.02,n+.05,t],[.01,.11,.01],Ly,[0,0,-.3]),s.solid(On,[e+.02,n+.05,t],[.01,.11,.01],Ly,[0,0,.3]),s.solid(Wl,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([i,r])=>{let o=e+i,a=t+r;s.solid(Uy,[o,s.ground(o,a)+.02,a],[.07,.04,.07],RL)})},"mine"),ZL=u(s=>{let[e,t]=s.place.centre,n=s.place.radius*.62,i=s.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,o,a,l])=>{let c=e+r,h=t+o;s.solid(On,[c,Math.max(i,s.ground(c,h))+.02,h],[a,.05,l],b1)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,o])=>{let a=e+r,l=t+o;s.solid(Wl,[a,s.ground(a,l)+.035,l],[.045,.07,.045],b1)})},"fortress"),JL=u(s=>{let[e,t]=s.place.centre,n=s.place.radius*.75,[i,r]=s.claim(5,.6,.08);s.strip([e-n,t+.12],[e+n,t+.12],.12,AL,Un.road+.002),s.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Un.road+.004),s.solid(On,[i,s.ground(i,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),jL=u(s=>{let e=s.place.radius;s.disc(s.place.centre,e*.55,y1,Un.smear,14),s.disc(s.spot(7,.5),e*.25,y1,Un.smear+.001)},"pollution"),QL=u((s,e,t,n)=>{let i=e.detail??e.colour,r=u((a,l)=>[t[0]+(wi(s.place.seed,n*31+a*2)-.5)*l,t[1]+(wi(s.place.seed,n*31+a*2+1)-.5)*l],"jitter"),o=e.shape==="fish"||e.shape==="whale";for(let a=0;a<e.count;a++){let[l,c]=e.count===1?[t[0],t[1]]:r(a,.1),h=s.ground(l,c,o),f=wi(s.place.seed,n*31+a+17)*Math.PI*2;switch(e.shape){case"rocks":s.solid(Vl,[l,h+.012,c],[.05,.035,.045],a%2===1?i:e.colour,[0,f,0]);break;case"crop":s.solid(Wl,[l,h+.02,c],[.008,.04,.008],i),s.solid(Vl,[l,h+.05,c],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;s.solid(On,[l,h+.04*d,c],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),s.solid(On,[l+Math.sin(f)*.04*d,h+.055*d,c+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],i,[0,f,0]),s.solid(On,[l,h+.013*d,c],[.03*d,.026*d,.055*d],i,[0,f,0]);break}case"bird":s.solid(Vl,[l,h+.02,c],[.03,.025,.04],e.colour,[0,f,0]),s.solid(On,[l-Math.sin(f)*.03,h+.025,c-Math.cos(f)*.03],[.008,.006,.04],i,[.4,f,0]);break;case"fish":s.solid(Vl,[l,h+.006,c],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":s.solid(Vl,[l,h,c],[.07,.05,.2],e.colour,[0,f,0]),s.solid(On,[l-Math.sin(f)*.11,h+.02,c-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":s.solid(On,[l,h+.008,c],[.08,.016,.08],i),s.solid(R1,[l,h+.1,c],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":a===0&&s.disc([l,c],.07,i,Un.field+.002);{let[d,m]=r(a+5,.1),g=s.ground(d,m);s.solid(Wl,[d,g+.06,m],[.012,.12,.012],Ly),s.solid(Uy,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":s.solid(e.shape==="logs"?Wl:On,[l,h+.012,c],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],a%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:s.solid(Vl,[t[0],s.ground(t[0],t[1])+.012+a*.018,t[1]],[.05-a*.007,.025,.05-a*.007],e.colour)}}},"special"),eN=u((s,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+wi(s.place.seed,12)*Math.PI,i=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,o=s.ground(i,r);s.solid(Wl,[i,o+.02,r],[.05,.04,.05],PL),s.solid(Uy,[i,o+.055,r],[.065,.035,.065],CL)})},"hut"),L1={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},N1=u((s,e,t,n,i,r,o)=>{let a=s.ground(n,i),{colour:l,detail:c}=e;switch(t){case"conifer":s.solid(Gu,[n,a+.025*r,i],[.016*r,.05*r,.016*r],c),s.solid(Vu,[n,a+.09*r,i],[.11*r,.12*r,.11*r],l),s.solid(Vu,[n,a+.16*r,i],[.08*r,.1*r,.08*r],l);break;case"broadleaf":s.solid(Gu,[n,a+.04*r,i],[.018*r,.08*r,.018*r],c),s.solid(Up,[n,a+.12*r,i],[.13*r,.11*r,.13*r],l,[0,o,0]);break;case"palm":s.solid(Gu,[n,a+.08*r,i],[.012*r,.16*r,.012*r],c,[.12,o,0]),s.solid(Vu,[n+.01*r,a+.165*r,i],[.15*r,.03*r,.15*r],l,[0,o,0]);break;case"deadTree":s.solid(Gu,[n,a+.06*r,i],[.014*r,.12*r,.014*r],c),s.solid(On,[n+.02*r,a+.09*r,i],[.006*r,.05*r,.006*r],c,[0,o,-.7]);break;case"bush":s.solid(Up,[n,a+.02*r,i],[.06*r,.045*r,.06*r],l,[0,o,0]);break;case"shrub":s.solid(Vu,[n,a+.025*r,i],[.05*r,.05*r,.05*r],l,[0,o,0]),s.solid(Vu,[n+.02*r,a+.018*r,i+.01*r],[.035*r,.036*r,.035*r],l,[0,o,0]);break;case"scrub":s.solid(Up,[n,a+.008*r,i],[.05*r,.02*r,.05*r],l,[0,o,0]);break;case"reeds":[-1,0,1].forEach(h=>s.solid(On,[n+h*.008*r,a+.035*r,i],[.005,.07*r,.005],h===0?l:c,[0,o,h*.18]));break;case"rock":s.solid(Up,[n,a+.012*r,i],[.07*r,.04*r,.06*r],l,[0,o,0]);break;default:s.solid(Gu,[n,a+.05*r,i],[.018*r,.1*r,.018*r],l),s.solid(On,[n+.015*r,a+.06*r,i],[.025*r,.01*r,.01*r],l,[0,o,0])}},"grow"),tN=u((s,e,t,n)=>{let i=n[0]-t[0],r=n[1]-t[1],o=i*i+r*r,a=o===0?0:Math.max(0,Math.min(1,((s-t[0])*i+(e-t[1])*r)/o));return Math.hypot(s-(t[0]+i*a),e-(t[1]+r*a))},"distanceTo"),nN=u((s,e)=>{let t=Gl(e.terrain);if(t===null)return;let{centre:n,radius:i,seed:r,latitude:o}=s.place;t.plants.forEach((a,l)=>{for(let c=0;c<a.count;c++){let h=1e3+l*97+c*7,f=a.size[0]+(a.size[1]-a.size[0])*wi(r,h),d=t.conifers,m=d!==void 0&&wi(r,h+1)>=d[0]+(d[1]-d[0])*o?"broadleaf":a.kind,g=L1[m]*f;for(let _=0;_<6;_++){let x=wi(r,h+2+_*2)*Math.PI*2,b=Math.sqrt(wi(r,h+3+_*2))*i*.92,v=n[0]+Math.cos(x)*b,S=n[1]+Math.sin(x)*b;if(s.hasRoom(v,S,g)){N1(s,a,m,v,S,f,x),s.taken.push([v,S,g]),s.grown.push([v,S,m]);break}}}})},"plants"),Iy=.26,T1=.3,iN=.15,A1=.5,Bp=[.9,1.3],ha=u((s,e,t)=>wi(Math.imul(s,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),sN=u((s,e,t)=>{let{centre:n,outline:i,owns:r,around:o,period:a,toward:l,latitude:c}=e,h=Math.max(1,Math.round(a.u/Iy)),f=a.u/h,d=a.v===null?null:Math.max(1,Math.round(a.v/Iy)),m=a.v===null||d===null?Iy:a.v/d,g=i.map(([y])=>y),_=i.map(([,y])=>y),[x,b]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[v,S]=[Math.floor(Math.min(..._)/m)-1,Math.ceil(Math.max(..._)/m)],M=o.filter(([y,w])=>!s.woods.some(([L,P])=>L===y&&P===w)).map(y=>{let[w,L]=l(y),P=Math.hypot(w-n[0],L-n[1]);return{mu:w,mv:L,length:P}}),A=t.plants.reduce((y,{count:w})=>y+w,0),E=[];for(let y=v;y<=S;y++)for(let w=x;w<=b;w++){let L=(w%h+h)%h,P=d===null?y:(y%d+d)%d,D=(w+.5+(ha(L,P,0)*2-1)*T1)*f,U=(y+.5+(ha(L,P,1)*2-1)*T1)*m;if(!r(D,U))continue;let X=M.reduce((q,{mu:J,mv:ee,length:pe})=>{let ge=pe/2-((D-n[0])*(J-n[0])+(U-n[1])*(ee-n[1]))/pe;return Math.min(q,Math.max(0,ge)/iN)},1);if(ha(L,P,2)>=A1+(1-A1)*X)continue;let O=ha(L,P,3)*A,Y=t.plants[0];for(let q of t.plants)if(Y=q,O-=q.count,O<0)break;let Q=t.conifers,z=Q!==void 0&&ha(L,P,4)>=Q[0]+(Q[1]-Q[0])*c?"broadleaf":Y.kind,$=Y.size[0]+(Y.size[1]-Y.size[0])*ha(L,P,5);E.push({u:D,v:U,kind:z,plant:Y,room:L1[z]*$*Bp[1],size:$*(Bp[0]+(Bp[1]-Bp[0])*X),facing:ha(L,P,6)*Math.PI*2})}return E},"woodsPlants"),rN=u((s,e)=>{let{centre:t,around:n,toward:i}=s.place,r=Math.max(...n.map(a=>{let[l,c]=i(a);return Math.hypot(l-t[0],c-t[1])})),o=e.paths.map(a=>i(a));o.forEach((a,l)=>o.slice(l+1).forEach(c=>{Math.hypot(c[0]-a[0],c[1]-a[1])<=r+1e-6&&(s.lines.push([a,c]),s.past.push([a,c]))}))},"pathsPast"),oN=u((s,e,t)=>{let{heightAt:n}=s.place;sN(e,s.place,t).forEach(({u:i,v:r,kind:o,plant:a,size:l,room:c,facing:h})=>{o!=="reeds"&&n(i,r)<0||s.hasRoom(i,r,c)&&(N1(s,a,o,i,r,l,h),s.grown.push([i,r,o]))})},"woods"),ky=u((s,e,t)=>{let n=new Ny(t,e),{centre:i,radius:r}=e;if(s.city!==null)return YL(n,s.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([s.road,s.railroad].forEach(l=>{l!==null&&By(l)&&(l.joins.forEach(c=>{if(l===s.road){let h=zp(e,c).points;h.slice(1).forEach((f,d)=>n.lines.push([h[d],f])),n.runs.push({key:Dy(c),points:h});return}n.lines.push([i,kp(e,c)]),n.runs.push({key:Dy(c)+100,points:[i,kp(e,c)]})}),l.alone&&n.lines.push([i,i]))}),s.fortress){let l=r*.62,c=[[-l,-l],[l,-l],[l,l],[-l,l]].map(([h,f])=>[i[0]+h,i[1]+f]);c.forEach((h,f)=>n.lines.push([h,c[(f+1)%4]]))}if(s.airbase){let l=r*.75;n.lines.push([[i[0]-l,i[1]+.12],[i[0]+l,i[1]+.12]])}s.road!==null&&GL(n,s.road),s.railroad!==null&&VL(n,s.railroad),s.front===!0&&n.taken.push([i[0],i[1]+oa,C1]),s.mine&&KL(n,n.claim(...Cy.mine,.1)),s.fortress&&ZL(n),s.airbase&&JL(n),s.pollution&&jL(n),s.specials.forEach(([l,c],h)=>QL(n,m1(l,c),n.claim(...Cy.special(h),.1),h+1)),s.hut&&eN(n,n.claim(...Cy.hut,.13)),rN(n,s);let o=$L(n,s);s.irrigation!==null&&WL(n,s.irrigation,o);let a=Gl(s.terrain);return a!==null&&s.irrigation===null&&!s.fortress&&!s.airbase&&(a.canopy!==void 0?oN(n,s,a):nN(n,s)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),aN=u((s,e,t)=>{let n=Oy();return t.forEach(({overlay:i,place:r})=>ky(i,r,n)),zy(s,e,n)},"overlayMesh"),zy=u((s,e,t)=>{let n=new Float32Array(t.positions);for(let i=0;i<n.length;i+=3)n[i]=n[i]-s,n[i+2]=n[i+2]-e;return{u:s,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),D1=aN;var O1=u((s,e)=>Math.imul(s,73856093)^Math.imul(e,19349663),"squareSeed"),Kr,rn,Ki,Xl,qu,ui,hi,dn,ql,da,Zr,fa,Jr,jr,Yu,$u,it,Hy,Wy,Xy,U1,F1,qy,Hu,Yy,Gp,Wu,Vp,Xu,$y=class $y{constructor(e){G(this,it);G(this,Kr);G(this,rn);G(this,Ki,[]);G(this,Xl);G(this,qu);G(this,ui);G(this,hi,new Set);G(this,dn,null);G(this,ql,null);G(this,da,new Map);G(this,Zr,new Map);G(this,fa,u(()=>{},"#keptCity"));G(this,Jr,!0);G(this,jr,[0,0]);G(this,Yu);G(this,$u);k(this,ui,e);let t=e.topology(),n=e.width(),i=e.height(),r=t.wrapsY();this.layout=r1({width:n,height:i,topologyId:e.topologyId(),wrapsY:r}),k(this,Kr,a1({layout:this.layout,source:{width:n,height:i,wrapsY:r,terrainAt:u((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:u((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:u((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),k(this,rn,l1(this.layout,i));let[o,a]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-o,m-a))),c=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,_]=this.layout.centre(d,m);return Math.hypot(g-o,_-a)}));k(this,Xl,1.2+l+hr*Math.SQRT2+Math.max((xs.reach-1)*c,c/2+hr*Math.SQRT2+Op)),k(this,qu,l+Fy+Math.max(p(this,rn).spacingU,p(this,rn).spacingV));let h=this.layout.outline(0,0),f=h.flatMap(([d,m],g)=>{let[_,x]=h[(g+1)%h.length],b=Math.hypot(_-d,x-m);return b===0?[]:[{away:Math.abs((_-d)*(a-m)-(x-m)*(o-d))/b,normal:[(x-m)/b,(d-_)/b]}]});k(this,Yu,Math.min(...f.map(({away:d})=>d))),k(this,$u,Math.min(...f.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:i,spacingV:r}=p(this,rn),o=Math.floor(e/i),a=Math.floor(t/r),l=e/i-o,c=t/r-a,h=u((_,x)=>{let b=`${_},${x}`,v=n.get(b);return v===void 0&&(v=p(this,Kr).height(_*i,x*r),n.set(b,v)),v},"at"),f=h(o,a),d=h(o+1,a),m=h(o,a+1);if(l+c<=1)return f+(d-f)*l+(m-f)*c;let g=h(o+1,a+1);return g+(m-g)*(1-l)+(d-g)*(1-c)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:i,spacingU:r,spacingV:o}=p(this,rn);return{columns:e*n,rows:t*i,spacingU:r,spacingV:o,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,rn).chunksV*p(this,rn).stepsV*p(this,rn).spacingV}heightAt(e,t){return p(this,Kr).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:i}=p(this,rn),r=[];for(let o=0;o<i;o++)for(let a=0;a<n;a++)r.push(`${a},${o}`);k(this,Ki,R(this,it,Xu).call(this,r,e,t)),k(this,jr,[e,t]),r.forEach(o=>p(this,hi).add(o)),R(this,it,Xy).call(this)}changed(e,t,n,i=!1){if(e.length===0&&!i)return[];k(this,jr,[t,n]),R(this,it,Hy).call(this,e.length===0?[...R(this,it,Wu).call(this).values()].flat():R(this,it,Vp).call(this,e));let r=p(this,Kr).refresh(i?void 0:e);if(r.length===0)return r;let o=Ry(p(this,rn),this.layout,r,p(this,Xl)).map(([a,l])=>`${a},${l}`);return R(this,it,Xy).call(this,Ry(p(this,rn),this.layout,r,p(this,Xl)+p(this,qu)).map(([a,l])=>`${a},${l}`)),k(this,Ki,R(this,it,Xu).call(this,[...new Set([...p(this,Ki),...o])],t,n)),r}showTowns(e,t,n){if(e===p(this,Jr))return;let i=[...R(this,it,Wu).call(this).values()].flat().filter(([r,o])=>R(this,it,Wy).call(this,r,o));k(this,Jr,e),k(this,jr,[t,n]),R(this,it,Hy).call(this,R(this,it,Vp).call(this,i))}refocus(e,t){k(this,Ki,R(this,it,Xu).call(this,p(this,Ki),e,t)),k(this,jr,[e,t])}pending(){return p(this,Ki).length}overlaysPending(){return p(this,hi).size+(p(this,dn)===null||p(this,hi).has(p(this,dn).key)?0:1)}build(e,t){let n=performance.now(),i=u(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,Ki).length>0;){if(i())return;let o=p(this,Ki).shift(),[a,l]=o.split(",").map(Number);e.setChunk(a,l,c1(p(this,rn),p(this,Kr),a,l)),p(this,hi).add(o)}let r=!1;for(;p(this,hi).size>0||p(this,dn)!==null;){if(p(this,dn)!==null&&p(this,hi).has(p(this,dn).key)&&k(this,dn,null),p(this,dn)===null){if(r&&i())return;let g=R(this,it,Xu).call(this,[...p(this,hi)],...p(this,jr))[0],_=R(this,it,Wu).call(this).get(g)??[],x=R(this,it,F1).call(this,g,_);if(p(this,hi).delete(g),x!==null){let[b,v]=g.split(",").map(Number);_.forEach(([S,M],A)=>p(this,da).set(`${S},${M}`,x.signatures[A])),e.setOverlay(b,v,x.mesh),r=!0;continue}k(this,dn,{key:g,squares:_,done:0,laid:Oy(),signatures:[],heights:new Map,keep:!0})}let o=p(this,dn);for(;o.done<o.squares.length;){let[g,_]=o.squares[o.done],x=R(this,it,Yy).call(this,g,_,o.heights);if(o.signatures.push(p(this,da).get(`${g},${_}`)),o.done++,x!==null&&ky(x.overlay,x.place,o.laid),o.done<o.squares.length&&i())return}let[a,l]=o.key.split(",").map(Number),{stepsU:c,stepsV:h,spacingU:f,spacingV:d}=p(this,rn),m=o.laid.positions.length===0?null:zy(a*c*f,l*h*d,o.laid);if(k(this,dn,null),o.keep){let g={signatures:o.signatures,mesh:m};p(this,Zr).set(o.key,R(this,it,Vp).call(this,o.squares).some(([_,x])=>R(this,it,Wy).call(this,_,x))?{...p(this,Zr).get(o.key),[p(this,Jr)?"shown":"hidden"]:g}:{shown:g,hidden:g})}e.setOverlay(a,l,m),r=!0}}keepCities(e){k(this,fa,e)}roadPath(e,t,n,i){let r=p(this,ui).topology(),o=u((M,A,E,y)=>{let w=r.directions().find(L=>{let P=r.neighbour(M,A,L);return P!==null&&P[0]===E&&P[1]===y});return w===void 0?null:r.offset(w,M,A)},"offsetTo"),a=o(e,t,n,i),l=o(n,i,e,t);if(a===null||l===null)return null;let c=u((M,A,E)=>{let y=R(this,it,Hu).call(this,M,A),w=u(P=>P!==null&&P.joins.some(([D,U])=>D===E[0]&&U===E[1]),"joins"),L=this.layout.centre(M,A);if(w(y?.road??null))return zp({centre:L,toward:u(([P,D])=>this.layout.centre(M+P,A+D),"toward"),seed:O1(M,A)},E).points;if(w(y?.railroad??null)){let[P,D]=this.layout.centre(M+E[0],A+E[1]);return[[L[0],L[1]],[(L[0]+P)/2,(L[1]+D)/2]]}return null},"half"),h=c(e,t,a),f=c(n,i,l);if(h===null&&f===null)return null;let d=this.layout.centre(e,t),m=this.layout.centre(n,i),g=this.layout.centre(e+a[0],t+a[1]),_=this.layout.centre(n+l[0],i+l[1]),x=[(d[0]+g[0])/2,(d[1]+g[1])/2],b=[(m[0]+_[0])/2,(m[1]+_[1])/2],v=[b[0]-x[0],b[1]-x[1]];return[...(h??[d,x]).map(([M,A])=>[M+v[0],A+v[1]]),...(f??[m,b]).slice(0,-1).reverse()].map(([M,A])=>[M-m[0],A-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:i,spacingU:r,spacingV:o}=p(this,rn),a=new Map,l=(R(this,it,Wu).call(this).get(`${e},${t}`)??[]).flatMap(([c,h])=>R(this,it,Yy).call(this,c,h,a)??[]);return l.length===0?null:D1(e*n*r,t*i*o,l)}overlayKeyOf(e,t){return R(this,it,Gp).call(this,e,t)}};Kr=new WeakMap,rn=new WeakMap,Ki=new WeakMap,Xl=new WeakMap,qu=new WeakMap,ui=new WeakMap,hi=new WeakMap,dn=new WeakMap,ql=new WeakMap,da=new WeakMap,Zr=new WeakMap,fa=new WeakMap,Jr=new WeakMap,jr=new WeakMap,Yu=new WeakMap,$u=new WeakMap,it=new WeakSet,Hy=u(function(e){e.forEach(([t,n])=>{let i=R(this,it,Gp).call(this,t,n);if(p(this,hi).has(i)||p(this,dn)?.key===i&&!R(this,it,U1).call(this,p(this,dn),t,n))return;JSON.stringify(R(this,it,Hu).call(this,t,n))!==(p(this,da).get(`${t},${n}`)??"null")&&p(this,hi).add(i)})},"#layAgain"),Wy=u(function(e,t){return!!p(this,ui).get(e,t).city||!!p(this,fa).call(this,e,t)},"#townAt"),Xy=u(function(e){let t=e===void 0?null:new Set(e);t===null?p(this,Zr).clear():t.forEach(n=>p(this,Zr).delete(n)),p(this,dn)!==null&&(t===null||t.has(p(this,dn).key))&&(p(this,dn).keep=!1)},"#landChanged"),U1=u(function(e,t,n){return e.squares.slice(0,e.done).some(([i,r])=>i===t&&r===n)},"#reached"),F1=u(function(e,t){let n=p(this,Zr).get(e);if(n===void 0)return null;let i=t.map(([r,o])=>JSON.stringify(R(this,it,Hu).call(this,r,o)));return[n.shown,n.hidden].find(r=>r!==void 0&&r.signatures.length===i.length&&r.signatures.every((o,a)=>o===i[a]))??null},"#madeAs"),qy=u(function(e,t){let n=p(this,ui).get(e,t),i=p(this,Jr)?p(this,fa).call(this,e,t):null;return i===void 0?n:{...n,city:i}},"#shownAt"),Hu=u(function(e,t){let n=p(this,ui).topology(),i=f1(R(this,it,qy).call(this,e,t),n.directions().flatMap(o=>{let a=n.neighbour(e,t,o);return a===null?[]:[{offset:n.offset(o,e,t),tile:R(this,it,qy).call(this,a[0],a[1])}]})),r=p(this,fa).call(this,e,t);return i!==null&&!p(this,Jr)&&(r===void 0?p(this,ui).get(e,t).city:r)?{...i,front:!0}:i},"#overlayAt"),Yy=u(function(e,t,n){let i=R(this,it,Hu).call(this,e,t);if(p(this,da).set(`${e},${t}`,JSON.stringify(i)),i===null)return null;let[r,o]=this.layout.centre(e,t),a=p(this,ui).topology();return{overlay:i,place:{centre:[r,o],toward:u(([l,c])=>this.layout.centre(e+l,t+c),"toward"),radius:p(this,Yu),inner:p(this,$u),heightAt:u((l,c)=>this.surfaceAt(l,c,n),"heightAt"),seed:O1(e,t),latitude:Math.min(1,Math.abs(2*o/this.extentV()-1)),outline:this.layout.outline(e,t),owns:u((l,c)=>{let[h,f]=this.layout.tileAt(l,c);return h===e&&f===t},"owns"),around:a.directions().filter(l=>a.neighbour(e,t,l)!==null).map(l=>a.offset(l,e,t)),period:this.layout.period()}}},"#square"),Gp=u(function(e,t){let{chunksU:n,chunksV:i,stepsU:r,stepsV:o,spacingU:a,spacingV:l}=p(this,rn),[c,h]=this.layout.centre(e,t),f=Math.floor(c/(r*a)),d=Math.floor(h/(o*l));return`${Math.min(n-1,Math.max(0,f))},${Math.min(i-1,Math.max(0,d))}`},"#chunkOf"),Wu=u(function(){if(p(this,ql)===null){let e=new Map;for(let t=0;t<p(this,ui).height();t++)for(let n=0;n<p(this,ui).width();n++){let i=R(this,it,Gp).call(this,n,t);e.set(i,[...e.get(i)??[],[n,t]])}k(this,ql,e)}return p(this,ql)},"#chunksOfSquares"),Vp=u(function(e){let t=p(this,ui).topology(),n=new Map;return e.forEach(([i,r])=>[[i,r],...t.directions().map(o=>t.neighbour(i,r,o)).filter(o=>o!==null)].forEach(o=>n.set(o.join(),o))),[...n.values()]},"#besides"),Xu=u(function(e,t,n){let{stepsU:i,stepsV:r,spacingU:o,spacingV:a}=p(this,rn),l=i*o,c=r*a,{u:h,v:f}=this.layout.period(),d=u((g,_)=>Math.abs(_===null?g:g-_*Math.round(g/_)),"round"),m=u(g=>{let[_,x]=g.split(",").map(Number);return Math.hypot(d((_+.5)*l-t,h),d((x+.5)*c-n,f))},"distance");return[...e].sort((g,_)=>m(g)-m(_))},"#nearestFirst"),u($y,"Land");var Vy=$y,B1=Vy;var lN=u(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Zi=lN;var k1=u((s,e,t=100)=>{let n=s.filter(({time:a})=>e-a<=t);if(n.length<2)return{x:0,y:0};let i=n[0],r=n[n.length-1],o=r.time-i.time;return o<=0?{x:0,y:0}:{x:(r.x-i.x)/o,y:(r.y-i.y)/o}},"releaseVelocity");var cN=8,uN=.92,hN=.02,z1=3,dN=50,fN=8,pN=10,G1=250,Ku,Zu,Yl,$l,pa,Qr,Ky=class Ky{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:i}){G(this,Ku);G(this,Zu);G(this,Yl);G(this,$l);G(this,pa,!1);G(this,Qr);this.pointerId=e,k(this,Ku,t),k(this,Zu,n),k(this,Yl,t),k(this,$l,n),k(this,Qr,[{x:t,y:n,time:i}])}dragging(){return p(this,pa)}move({pointerId:e,clientX:t,clientY:n,timeStamp:i}){if(e!==this.pointerId||!p(this,pa)&&Math.hypot(t-p(this,Ku),n-p(this,Zu))<cN)return null;let r=!p(this,pa),o=p(this,Yl)-t,a=p(this,$l)-n;return k(this,pa,!0),k(this,Yl,t),k(this,$l,n),p(this,Qr).push({x:t,y:n,time:i}),p(this,Qr).length>20&&p(this,Qr).shift(),{dx:o,dy:a,started:r}}releaseVelocity(e){return k1(p(this,Qr),e)}};Ku=new WeakMap,Zu=new WeakMap,Yl=new WeakMap,$l=new WeakMap,pa=new WeakMap,Qr=new WeakMap,u(Ky,"Press");var Hp=Ky,vs,Ju,Zy=class Zy{constructor(e){G(this,vs,null);G(this,Ju);k(this,Ju,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>z1?z1/t:1,i=e.x*n,r=e.y*n,o=null,a=u(l=>{let c=o===null?16:Math.min(l-o,64);if(o=l,Math.hypot(i,r)<hN){k(this,vs,null);return}p(this,Ju).call(this,-i*c,-r*c);let h=Math.pow(uN,c/16);i*=h,r*=h,k(this,vs,window.requestAnimationFrame(a))},"step");k(this,vs,window.requestAnimationFrame(a))}gliding(){return p(this,vs)!==null}stop(){p(this,vs)!==null&&(window.cancelAnimationFrame(p(this,vs)),k(this,vs,null))}};vs=new WeakMap,Ju=new WeakMap,u(Zy,"Glide");var Wp=Zy,ma,ju,Qu,Kl,Jy=class Jy{constructor(){G(this,ma,0);G(this,ju,0);G(this,Qu,-1/0);G(this,Kl,0)}turned(e,t){let n=e.deltaMode===0,i=e.deltaY;if(i===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=G1)return 0;let r=Math.sign(i),o=e.timeStamp-p(this,Qu)>G1||r!==p(this,ju);if(k(this,Qu,e.timeStamp),k(this,ju,r),o&&(k(this,ma,0),k(this,Kl,0)),n&&!e.ctrlKey&&p(this,Kl)>=pN)return 0;if(!o&&n){if(k(this,ma,p(this,ma)+i),Math.abs(p(this,ma))<(e.ctrlKey?fN:dN))return 0;k(this,ma,0)}return n&&!e.ctrlKey&&k(this,Kl,p(this,Kl)+1),i<0?1:-1}};ma=new WeakMap,ju=new WeakMap,Qu=new WeakMap,Kl=new WeakMap,u(Jy,"WheelTurn");var Xp=Jy;var mN=350,gN=.006,V1=.004,Ms,fn,Fn,Zl,Ss,Ji,Kp,Ti,Ai,eo,Jl,di,to,Fe,Ei,qp,Yp,H1,Qy,dr,e_,W1,fr,X1,q1,Y1,$1,eh,K1,Z1,J1,$p,t_=class t_{constructor(e,t,n=null){G(this,Fe);G(this,Ms);G(this,fn);G(this,Fn,null);G(this,Zl,[0,0]);G(this,Ss,null);G(this,Ji);G(this,Kp,new Xp);G(this,Ti,new Map);G(this,Ai,null);G(this,eo,null);G(this,Jl,[]);G(this,di);G(this,to,null);k(this,Ms,e),k(this,fn,t),k(this,di,n),k(this,Ji,new Wp((i,r)=>{let[o,a]=R(this,Fe,H1).call(this);R(this,Fe,e_).call(this,[o,a],[o-i,a-r])})),R(this,Fe,Ei).call(this,"pointerdown",i=>R(this,Fe,W1).call(this,i)),R(this,Fe,Ei).call(this,"pointermove",i=>R(this,Fe,q1).call(this,i)),R(this,Fe,Ei).call(this,"pointerup",i=>R(this,Fe,Y1).call(this,i)),R(this,Fe,Ei).call(this,"pointercancel",i=>R(this,Fe,$1).call(this,i)),R(this,Fe,Ei).call(this,"wheel",i=>R(this,Fe,Z1).call(this,i),{passive:!1}),R(this,Fe,Ei).call(this,"gesturestart",i=>R(this,Fe,$p).call(this,i,"start"),{passive:!1}),R(this,Fe,Ei).call(this,"gesturechange",i=>R(this,Fe,$p).call(this,i,"change"),{passive:!1}),R(this,Fe,Ei).call(this,"gestureend",i=>R(this,Fe,$p).call(this,i,"end"),{passive:!1}),R(this,Fe,Ei).call(this,"contextmenu",i=>R(this,Fe,X1).call(this,i)),R(this,Fe,Ei).call(this,"pointerleave",()=>p(this,di)?.hover(null)),R(this,Fe,Ei).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return p(this,Fn)?.dragging()===!0||p(this,Ss)!==null}moving(){return this.dragging()||p(this,Ai)!==null||p(this,Ji).gliding()}dispose(){p(this,Ji).stop(),R(this,Fe,fr).call(this),p(this,Jl).forEach(([e,t,n])=>p(this,Ms).removeEventListener(e,t,n)),k(this,Jl,[])}};Ms=new WeakMap,fn=new WeakMap,Fn=new WeakMap,Zl=new WeakMap,Ss=new WeakMap,Ji=new WeakMap,Kp=new WeakMap,Ti=new WeakMap,Ai=new WeakMap,eo=new WeakMap,Jl=new WeakMap,di=new WeakMap,to=new WeakMap,Fe=new WeakSet,Ei=u(function(e,t,n){p(this,Ms).addEventListener(e,t,n),p(this,Jl).push([e,t,n])},"#listen"),qp=u(function(){return{width:p(this,Ms).clientWidth||1,height:p(this,Ms).clientHeight||1}},"#box"),Yp=u(function([e,t]){let{width:n,height:i}=R(this,Fe,qp).call(this);return[e/n*2-1,1-t/i*2]},"#screen"),H1=u(function(){let{width:e,height:t}=R(this,Fe,qp).call(this);return[e/2,t/2]},"#middle"),Qy=u(function(){let{width:e,height:t}=R(this,Fe,qp).call(this);return e/t},"#aspect"),dr=u(function(e){let t=p(this,Ms).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),e_=u(function(e,t){p(this,fn).setOrbit(Dw(p(this,fn).orbit(),p(this,fn).lookHeight(),R(this,Fe,Yp).call(this,e),R(this,Fe,Yp).call(this,t),R(this,Fe,Qy).call(this)))},"#pan"),W1=u(function(e){if(p(this,Ji).stop(),p(this,di)?.hover(null),e.pointerType==="touch"&&(p(this,Ti).set(e.pointerId,R(this,Fe,dr).call(this,e)),p(this,Ti).size===2)){k(this,Fn,null),R(this,Fe,fr).call(this),k(this,Ai,R(this,Fe,eh).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Ms).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,Ss,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Hp(e),[n,i]=R(this,Fe,dr).call(this,e),{clientX:r,clientY:o}=e;k(this,Fn,t),k(this,Zl,[n,i]),R(this,Fe,fr).call(this),k(this,to,window.setTimeout(()=>{k(this,to,null),p(this,Fn)===t&&!t.dragging()&&p(this,di)?.menu(n,i,r,o,!0)===!0&&k(this,Fn,null)},mN))}}},"#down"),fr=u(function(){p(this,to)!==null&&(window.clearTimeout(p(this,to)),k(this,to,null))},"#stopHold"),X1=u(function(e){if(p(this,di)===null||!p(this,di).menuOnRightClick()||(e.preventDefault(),p(this,di).menuOpen()))return;let[t,n]=R(this,Fe,dr).call(this,e);p(this,di).menu(t,n,e.clientX,e.clientY,!1)&&(R(this,Fe,fr).call(this),k(this,Fn,null))},"#rightClick"),q1=u(function(e){if(p(this,Ti).has(e.pointerId)&&(p(this,Ti).set(e.pointerId,R(this,Fe,dr).call(this,e)),p(this,Ai)!==null)){R(this,Fe,K1).call(this);return}let t=p(this,Ss);if(t!==null&&t.pointerId===e.pointerId){let r=p(this,fn).orbit();p(this,fn).setOrbit(la({...r,yaw:r.yaw-(e.clientX-t.x)*gN,pitch:r.pitch+(e.clientY-t.y)*V1})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,Fn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,Ji).gliding()){let[r,o]=R(this,Fe,dr).call(this,e);p(this,di)?.hover({x:r,y:o,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;R(this,Fe,fr).call(this);let i=R(this,Fe,dr).call(this,e);R(this,Fe,e_).call(this,p(this,Zl),i),k(this,Zl,i)},"#move"),Y1=u(function(e){if(p(this,Ti).delete(e.pointerId),p(this,Ai)!==null){k(this,Ai,p(this,Ti).size<2?null:R(this,Fe,eh).call(this));return}if(p(this,Ss)?.pointerId===e.pointerId){k(this,Ss,null);return}let t=p(this,Fn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,Fn,null),R(this,Fe,fr).call(this),!t.dragging()){let[n,i]=R(this,Fe,dr).call(this,e);p(this,di)?.click(n,i,e.clientX,e.clientY);return}Zi()||p(this,Ji).start(t.releaseVelocity(e.timeStamp))}},"#up"),$1=u(function(e){p(this,Ti).delete(e.pointerId),p(this,Ai)!==null&&k(this,Ai,p(this,Ti).size<2?null:R(this,Fe,eh).call(this)),p(this,Fn)?.pointerId===e.pointerId&&(k(this,Fn,null),R(this,Fe,fr).call(this)),p(this,Ss)?.pointerId===e.pointerId&&k(this,Ss,null)},"#cancel"),eh=u(function(){let[e,t]=[...p(this,Ti).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,fn).orbit()}},"#measurePair"),K1=u(function(){let e=p(this,Ai),t=R(this,Fe,eh).call(this);e===null||t===null||p(this,fn).setOrbit(la({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*V1}))},"#twoFingers"),Z1=u(function(e){e.preventDefault();let t=p(this,Kp).turned(e,p(this,eo)?.at??null);t!==0&&(p(this,Ji).stop(),R(this,Fe,J1).call(this,t,R(this,Fe,dr).call(this,e)))},"#wheelTurned"),J1=u(function(e,t){let n=p(this,fn).orbit(),i=p(this,fn).lookHeight(),r=R(this,Fe,Yp).call(this,t),o=R(this,Fe,Qy).call(this),a=p(this,fn).settle(Ul(n,e)),l=aa(n,i,r,o),c=aa(a,i,r,o);if(l===null||c===null||a.distance===n.distance){p(this,fn).setOrbit(a);return}p(this,fn).setOrbit({...a,focus:[a.focus[0]+l[0]-c[0],a.focus[1]+l[1]-c[1]]})},"#zoomAbout"),$p=u(function(e,t){if(e.preventDefault(),p(this,Ai)!==null){k(this,eo,null);return}if(t==="end"){k(this,eo,null);return}if(t==="start"){p(this,Ji).stop(),k(this,Fn,null),R(this,Fe,fr).call(this),k(this,eo,{orbit:p(this,fn).orbit(),at:e.timeStamp});return}let n=p(this,eo);n!==null&&(n.at=e.timeStamp,p(this,fn).setOrbit(la({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),u(t_,"CameraInput");var jy=t_,j1=jy;var xN=["#9a9a9a","#4a4a4a"],th=u(s=>{let e=s.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?xN:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),n_=u((s,e)=>s.find(t=>t.id===e)??[...s].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),bN=u(s=>{let{current:e,max:t}=s.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),yN=u((s,e,t,n={},i=()=>0,r=1,o=()=>null)=>{let a=s.units??[],l=n_(a,e),c=l!==null&&l.id===e,h=l===null?null:o(l._),f=t&&s.city?{name:n.cityName?.(s.city)??s.city.name,size:s.city.growth?.size??1,colours:th(s.city.player),walled:s.city.walled===!0,disorder:s.city.civilDisorderDeclared===!0}:null,d=l!==null&&(t||c)?{id:l.id,type:l._,kinds:l.__??[],colours:th(l.player),count:a.length,active:c,busy:l.busy!==null&&l.busy!==void 0,fortified:(l.improvements??[]).some(({_:m})=>m==="Fortified"),veteran:(l.improvements??[]).some(({_:m})=>m==="Veteran"),health:bN(l),status:(l.busy?n.unitStatus?.(l):null)||null,facing:i(l),size:r,...h===null?{}:{model:h}}:null;return f===null&&d===null?null:{city:f,unit:d,inCity:!!s.city}},"markerFor"),i_=yN;var iE={step:250,ramp:100,most:2e3},sE={step:125,ramp:50,most:1e3},rE=u(s=>({step:s.step/2,ramp:s.ramp/2,most:s.most/2}),"quicker"),_N=50,Q1=.3,eE=1,vN=.05,MN=.02,s_=u((s,e)=>s.x===e.x&&s.y===e.y,"sameSquare"),tE=u((s,e)=>{let{started:t,from:n,speed:i,rising:r,rise:o,top:a,going:l,stopping:c,fall:h,to:f}=s,d=Math.max(0,e-t);if(d<r)return{along:n+i*d+o*d*d/2,speed:i+o*d};let m=n+(i+a)/2*r;if(d<r+l)return{along:m+a*(d-r),speed:a};let g=m+a*l,_=d-r-l;return _<c?{along:g+a*_-h*_*_/2,speed:a-h*_}:{along:f,speed:0}},"motionAt"),nh=u(s=>s.started+s.rising+s.going+s.stopping,"motionEnds"),nE=u((s,e,t,n,i)=>{let r=Math.max(0,n-e),o=Math.max(1,i.ramp),a=Math.max(1/i.step,i.most>o*2?r/(i.most-o):0),l=a/o;if(r<=0)return{started:s,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*l)>=r){let x=2*r/t;return{started:s,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let c=Math.min(a,Math.sqrt(l*r+t*t/2)),h=Math.abs(c-t)/l,f=c>=t?l:-l,d=c/l,m=(t+c)/2*h,g=c*d/2,_=Math.max(0,(r-m-g)/c);return{started:s,from:e,speed:t,rising:h,rise:f,top:c,going:_,stopping:d,fall:l,to:n}},"plan"),jl=u((s,e,t)=>t===null?s:s+t*Math.round((e-s)/t),"nearest"),ih=u((s,e)=>s[0]===e[0]&&s[1]===e[1]?null:Math.atan2(e[0]-s[0],e[1]-s[1]),"wayOf"),r_=u(s=>s*s*(3-2*s),"eased"),Ql=u((s,e,t)=>{let n=e-s-Math.PI*2*Math.round((e-s)/(Math.PI*2));return s+n*t},"turnTowards"),ec,An,Ri,oh,ah,ot,oE,aE,a_,l_,lE,c_,Zp,sh,rh,u_,ga,h_=class h_{constructor(e){G(this,ot);G(this,ec);G(this,An,new Map);G(this,Ri,new Map);G(this,oh,[]);G(this,ah,0);k(this,ec,e)}walking(e){return p(this,Ri).has(e)}size(){return p(this,An).size}step(e,t,n,i,r,o,a,l=!1){let c=p(this,Ri).get(e),h=c===void 0?void 0:p(this,An).get(c),f=h===void 0?i:R(this,ot,Zp).call(this,h,o),d=h===void 0?0:R(this,ot,rh).call(this,h,R(this,ot,sh).call(this,h,o)),m=[...p(this,An).values()].find(g=>g!==h&&(l||!g.flies)&&R(this,ot,oE).call(this,g,t,n,o)&&R(this,ot,lE).call(this,R(this,ot,Zp).call(this,g,g.stepped),h===void 0?i:R(this,ot,Zp).call(this,h,g.stepped))&&Q1*Math.abs(r_(R(this,ot,rh).call(this,g,R(this,ot,sh).call(this,g,o)))-r_(d))<MN);if(m!==void 0)return h!==void 0&&R(this,ot,l_).call(this,h,e),m.units.push(e),p(this,Ri).set(e,m.id),m.id;if(h!==void 0&&s_(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++Fi(this,ah)._}`,units:h.units.filter(_=>_!==e),points:[...h.points],squares:[...h.squares]};p(this,An).set(g.id,g),g.units.forEach(_=>p(this,Ri).set(_,g.id)),h.units=[e]}return R(this,ot,a_).call(this,h,n,r,o,a,l),h.id}return h!==void 0&&R(this,ot,l_).call(this,h,e),R(this,ot,aE).call(this,e,t,n,f,r,o,a,{flies:l,climbed:d})}at(e){let t=[],n=[];return p(this,An).forEach(i=>{let r=R(this,ot,ga).call(this,i,e);if(e>=nh(i.motion)){n.push(r),R(this,ot,c_).call(this,i);return}t.push(r)}),{going:t,ended:n}}dropped(){return p(this,oh).splice(0)}endsAt(e){let t=p(this,Ri).get(e),n=t===void 0?void 0:p(this,An).get(t);return n===void 0?null:nh(n.motion)}nextEnd(){let e=null;return p(this,An).forEach(t=>{let n=nh(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return p(this,An).forEach(i=>{e(i.units)&&(n.push(R(this,ot,ga).call(this,i,Math.max(t,nh(i.motion)))),R(this,ot,c_).call(this,i))}),n}endAll(e){let t=[...p(this,An).values()].map(n=>R(this,ot,ga).call(this,n,Math.max(e,nh(n.motion))));return p(this,An).clear(),p(this,Ri).clear(),t}};ec=new WeakMap,An=new WeakMap,Ri=new WeakMap,oh=new WeakMap,ah=new WeakMap,ot=new WeakSet,oE=u(function(e,t,n,i){let r=e.squares.length-1;return r>0&&i-e.stepped<=_N&&s_(e.squares[r-1],t)&&s_(e.squares[r],n)},"#justMade"),aE=u(function(e,t,n,i,r,o,a,{flies:l,climbed:c}){let h=`walk-${++Fi(this,ah)._}`,f={id:h,units:[e],from:t,points:[i],squares:[t],stepped:o,motion:nE(o,0,0,0,a),turned:null,flies:l,flown:0,climb:{from:c,at:0}};return p(this,An).set(h,f),p(this,Ri).set(e,h),R(this,ot,a_).call(this,f,n,r,o,a,l),h},"#setOff"),a_=u(function(e,t,n,i,r,o){let{u:a,v:l}=p(this,ec),c=e.points[e.points.length-1],h=c.middle??c.at,{along:f,speed:d}=tE(e.motion,i),m=Math.max(0,Math.floor(f)-1),g=e.points.length>1?R(this,ot,ga).call(this,e,i).facing:null,_=e.points.length-1,x=f-(_-1),b=R(this,ot,sh).call(this,e,i);e.points.length>1&&(e.climb={from:R(this,ot,rh).call(this,e,b),at:e.flown+b}),e.flies=o,c.middle!==void 0&&x*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[_]={at:c.middle,lift:0,middle:c.middle,...c.via===void 0?{}:{via:c.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[jl(n.at[0],c.at[0],a),jl(n.at[1],c.at[1],l)],lift:n.lift,...n.middle===void 0?{}:{middle:[jl(n.middle[0],h[0],a),jl(n.middle[1],h[1],l)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=i,e.motion=nE(i,f-m,d,e.points.length-1,r),e.turned=null,g!==null&&(e.turned={offset:Ql(0,g-R(this,ot,ga).call(this,e,i).facing,1),at:i,over:r.step/2})},"#goOn"),l_=u(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,Ri).delete(t),e.units.length===0&&(p(this,An).delete(e.id),p(this,oh).push(e.id))},"#leave"),lE=u(function(e,t){let{u:n,v:i}=p(this,ec);return Math.hypot(jl(e.at[0],t.at[0],n)-t.at[0],jl(e.at[1],t.at[1],i)-t.at[1])<vN},"#beside"),c_=u(function(e){p(this,An).delete(e.id),e.units.forEach(t=>p(this,Ri).delete(t))},"#end"),Zp=u(function(e,t){let{at:n,lift:i}=R(this,ot,ga).call(this,e,t);return{at:n,lift:i}},"#drawn"),sh=u(function(e,t){return Math.min(e.points.length-1,Math.max(0,tE(e.motion,t).along))},"#along"),rh=u(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/eE,(e.points.length-1-t)/eE)):0},"#climbed"),u_=u(function(e,t,n){let i=e.points[t],r=e.points[t+1]??i,o=u(x=>x.middle??x.at,"middle");if(r.via===void 0||r.via.length===0)return{at:[i.at[0]+(r.at[0]-i.at[0])*n,i.at[1]+(r.at[1]-i.at[1])*n],way:r===i?null:ih(o(i),o(r))};let[a,l]=o(r),c=[i.at,...r.via.map(([x,b])=>[a+x,l+b]),r.at],h=c.slice(1).map((x,b)=>Math.hypot(x[0]-c[b][0],x[1]-c[b][1])),f=h.reduce((x,b)=>x+b,0),d=ih(o(i),o(r)),m=c.slice(1).map((x,b)=>ih(c[b],x)??d??0),g=c.map((x,b)=>{let v=m[b-1],S=m[b];return v===void 0?S:S===void 0?v:Ql(v,S,.5)}),_=Math.min(1,Math.max(0,n))*f;for(let x=0;x<h.length;x++){let b=h[x],v=c[x],S=c[x+1];if(_<=b||x===h.length-1){let M=b===0?0:Math.min(1,_/b);return{at:[v[0]+(S[0]-v[0])*M,v[1]+(S[1]-v[1])*M],way:Ql(g[x],g[x+1],M)}}_-=b}return{at:[r.at[0],r.at[1]],way:ih(o(i),o(r))}},"#stepAt"),ga=u(function(e,t){let{points:n,squares:i,turned:r}=e,o=n.length-1,a=R(this,ot,sh).call(this,e,t),l=Math.min(o-1,Math.floor(a)),c=a-l,h=n[l],f=n[l+1]??h,{at:d,way:m}=R(this,ot,u_).call(this,e,l,c),g=u((M,A)=>M<0||M>=o?null:R(this,ot,u_).call(this,e,M,A).way,"way"),_=u(M=>{let A=g(M,1),E=g(M+1,0);return A===null||E===null?null:Ql(0,E-A,1)},"turnAt"),x=m??0,b=ih(h.middle??h.at,f.middle??f.at),v=(()=>{if(c>.75){let M=_(l);if(M!==null)return x+M*(c-.75)*2;if(l===o-1&&b!==null)return Ql(x,b,(c-.75)*4)}else if(c<.25){let M=_(l-1);if(M!==null)return x-M*(.5-c*2);if(l===0&&b!==null)return Ql(b,x,c*4)}return x})(),S=r!==null&&t-r.at<r.over?v+r.offset*(1-Math.max(0,t-r.at)/r.over):v;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(f.lift-h.lift)*c,aloft:Q1*r_(R(this,ot,rh).call(this,e,a)),facing:S,from:e.from,before:i[o-1]??i[o],to:i[o]}},"#walker"),u(h_,"Walks");var o_=h_,cE=o_;var SN=u(({kind:s,start:e,duration:t},n)=>{let i=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return s==="in"?i:1-i},"fadeAt"),ws,Jp,f_=class f_{constructor(){G(this,ws,new Map);G(this,Jp,0)}size(){return p(this,ws).size}add(e,t,n=500){let i=`fade-${++Fi(this,Jp)._}`;return p(this,ws).set(i,{id:i,kind:e,start:t,duration:n}),i}at(e){let t=[],n=[];return p(this,ws).forEach((i,r)=>{if(e>=i.start+i.duration){n.push(r),p(this,ws).delete(r);return}t.push({id:r,kind:i.kind,opacity:SN(i,e)})}),{going:t,ended:n}}end(e){p(this,ws).delete(e)}endAll(){let e=[...p(this,ws).keys()];return p(this,ws).clear(),e}};ws=new WeakMap,Jp=new WeakMap,u(f_,"Fades");var d_=f_,uE=d_;var Es,g_=class g_{constructor(){G(this,Es,new Map)}size(){return p(this,Es).size}trail(e,t,n){let i=p(this,Es).get(e),[r,o]=i?.points??[];if(i===void 0||r===void 0||o===void 0||n-o.time>=1200){p(this,Es).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}r.at=t,r.time=n;let a=t[0]-o.at[0],l=t[1]-o.at[1],c=Math.hypot(a,l),h=Math.floor(c/.04),[f,d]=o.at,m=o.time;i.points.splice(1,0,...Array.from({length:h},(g,_)=>{let x=(h-_)*.04/c;return{at:[f+a*x,d+l*x],time:m+(n-m)*x}}))}at(e){let t=[],n=[];return p(this,Es).forEach((i,r)=>{if(i.points=i.points.filter(({time:o})=>e-o<1200),i.points.length===0){p(this,Es).delete(r),n.push(r);return}t.push({id:r,points:i.points.map(({at:o,time:a})=>({at:o,age:Math.max(0,e-a)}))})}),{going:t,gone:n}}endAll(){let e=[...p(this,Es).keys()];return p(this,Es).clear(),e}};Es=new WeakMap,u(g_,"Wakes");var m_=g_,p_={start:.03,by:.17,over:.5},wN=.016,EN=.004,hE=u(s=>{let[e]=s,t=[];if(e===void 0)return t;let n=s.map((o,a)=>{let l=s[a-1]??o,c=s[a+1]??o,h=l.at[0]-c.at[0],f=l.at[1]-c.at[1],d=Math.hypot(h,f);return d===0?null:[-f/d,h/d]}),i=s.reduce((o,a,l)=>{let c=s[l-1];return o.push(c===void 0?0:o[l-1]+Math.hypot(a.at[0]-c.at[0],a.at[1]-c.at[1])),o},[]),r=u((o,a)=>{let l=s[o],c=n[o],h=Math.min(1,l.age/1200);if(c==null)return null;let f=p_.start+p_.by*Math.min(1,i[o]/p_.over),d=wN*(1-h),m=[l.at[0]-e.at[0]+c[0]*f*a,l.at[1]-e.at[1]+c[1]*f*a];return[[m[0]-c[0]*d/2,m[1]-c[1]*d/2],[m[0]+c[0]*d/2,m[1]+c[1]*d/2]]},"edges");for(let o=0;o+1<s.length;o++)[1,-1].forEach(a=>{let l=r(o,a),c=r(o+1,a);if(l===null||c===null)return;let[h,f]=l,[d,m]=c;[h,d,f,f,d,m].forEach(([g,_])=>t.push(g,EN,_))});return t},"wakeShape"),dE=m_;var fE={reach:200,back:300,fade:600},jp=350,pE=u(s=>({...s,reach:s.reach/2,back:s.back/2,fade:s.fade/2,...s.falls===void 0?{}:{falls:s.falls/2},...s.clips===void 0?{}:{clips:{...s.clips,rate:s.clips.rate*2}}}),"quickerBattle"),mE=u((s,e,t)=>{let n=e?.clips.fight,i=t?.clips.die;if(n===void 0&&i===void 0)return s;let r=u(h=>Math.max(0,(h?.figures??1)-1)*(h?.stagger??0),"tail"),o=(n?.shots??[]).map(({at:h})=>h),a=o.length===0?void 0:Math.min(...o),l=o.length===0?0:(Math.max(...o)+r(e))*1e3+jp+Np,c=a===void 0?s.reach:a*1e3+jp;return{...s,reach:c,back:n===void 0?s.back:Math.max(s.back,(n.duration+r(e))*1e3-c,l-c),...a===void 0?{}:{lunge:0},...i===void 0?{}:{falls:(i.duration+r(t))*1e3},clips:{rate:1,fight:n!==void 0,die:i!==void 0}}},"clipPace"),gE=u((s,e)=>e||s.clips?.fight===!0?Math.max(s.back,(s.falls??0)+s.fade):(s.falls??0)+s.fade,"afterBlow"),S_=u((s,e=!0)=>s.reach+gE(s,e),"battleLength"),w_=.45,tc=u(s=>s.start+s.pace.reach,"blowAt"),x_=u(s=>tc(s)+gE(s.pace,s.won),"battleEnds"),b_=u(s=>Math.min(1,Math.max(0,s)),"clamp"),TN=u(s=>s*s,"easeIn"),AN=u(s=>s*s*(3-2*s),"easeInOut"),RN=u((s,e)=>{let{reach:t,back:n,fade:i,lunge:r=1,falls:o=0}=s.pace,a=e-tc(s),l=a<o?1:1-b_(i<=0?1:(a-o)/i);return a<0?{reach:TN(b_(t<=0?1:(e-s.start)/t))*r,attacker:1,fallen:1}:s.won?{reach:(1-AN(b_(n<=0?1:a/n)))*r,attacker:1,fallen:l}:{reach:r,attacker:l,fallen:0}},"battleAt"),y_=u((s,e)=>s.x===e.x&&s.y===e.y,"sameSquare"),CN=u((s,e)=>s.attacker===e.attacker||s.attacker===e.defender,"waitsFor"),on,Ts,Qp,As,v_,M_,xE,E_=class E_{constructor(){G(this,As);G(this,on,[]);G(this,Ts,new Set);G(this,Qp,0)}size(){return p(this,on).length}attacking(e){return p(this,on).some(t=>t.attacker===e)}fighting(e){return p(this,on).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return p(this,on).find(t=>!p(this,Ts).has(t.id)&&y_(t.defenderSquare,e))??null}add(e,t,n,i=t){let r={...e,id:`battle-${++Fi(this,Qp)._}`,start:R(this,As,v_).call(this,e,n,p(this,on),Math.max(t,i)),notBefore:i,pace:n};return p(this,on).push(r),r}at(e){let t=[],n=[],i=[],r=new Set;return p(this,on).forEach(o=>{if(e>=tc(o)&&!p(this,Ts).has(o.id)&&(p(this,Ts).add(o.id),n.push(o)),e>=x_(o)){i.push(o);return}t.push(...R(this,As,xE).call(this,o,e,r))}),R(this,As,M_).call(this,i),{going:t,struck:n,ended:i}}endWhere(e,t){let n=p(this,on).filter(e),i=p(this,on).filter((o,a)=>n.includes(o)||!p(this,Ts).has(o.id)&&n.some(l=>p(this,on).indexOf(l)>a&&y_(l.defenderSquare,o.defenderSquare))),r=i.filter(o=>!p(this,Ts).has(o.id));return r.forEach(o=>p(this,Ts).add(o.id)),R(this,As,M_).call(this,i),i.length>0&&p(this,on).forEach((o,a)=>{o.start>t&&(o.start=R(this,As,v_).call(this,o,o.pace,p(this,on).slice(0,a),Math.max(t,o.notBefore)))}),{struck:r,ended:i}}longest(e){return p(this,on).filter(({attacker:t})=>e.includes(t)).reduce((t,{pace:n,won:i})=>Math.max(t,S_(n,i)),0)}busyUntil(e){return p(this,on).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,x_(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};on=new WeakMap,Ts=new WeakMap,Qp=new WeakMap,As=new WeakSet,v_=u(function(e,t,n,i){return n.reduce((r,o)=>CN(o,e)?Math.max(r,x_(o)):y_(o.defenderSquare,e.defenderSquare)?Math.max(r,tc(o)-t.reach):r,i)},"#startOf"),M_=u(function(e){e.length!==0&&(k(this,on,p(this,on).filter(t=>!e.includes(t))),e.forEach(t=>p(this,Ts).delete(t.id)))},"#take"),xE=u(function(e,t,n){let{reach:i,attacker:r,fallen:o}=RN(e,t),{from:a,edge:l,fallsAt:c}=e,{clips:h}=e.pace,f=tc(e),d=u((x,b)=>({clip:{role:x,seconds:(t-b)/1e3*(h?.rate??1)}}),"playing"),m=h===void 0?{}:!e.won&&t>=f&&h.die?d("die",f):h.fight?d("fight",e.start):{},g=[],_=!n.has(e.attacker);return n.add(e.attacker),_&&(r>0||h?.fight===!0)&&g.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[a.at[0]+(l[0]-a.at[0])*i,a.at[1]+(l[1]-a.at[1])*i],lift:a.lift*(1-i),facing:e.facing,opacity:r,...m}),e.won&&t>=tc(e)&&o>0&&g.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[c.at[0],c.at[1]],lift:c.lift,facing:e.defenderFacing,opacity:o,...h?.die?d("die",f):{}}),g},"#fighters"),u(E_,"Battles");var __=E_,bE=__;var PN=1,IN=.04,LN=12,NN=u((s,e,t,n,i,{water:r=0,ceiling:o=PN}={})=>{let{from:a,direction:l}=my(s,e,t,n),[c,h,f]=a,[d,m,g]=l;if(m>-1e-6)return null;let _=u(y=>[c+d*y,h+m*y,f+g*y],"at"),x=u(y=>{let[w,L,P]=_(y);return L-Math.max(r,i(w,P))},"above"),b=Math.max(0,(h-o)/-m),v=(h-r)/-m,S=IN/Math.max(1e-6,Math.hypot(d,g)),M=b;for(let y=b;;y=Math.min(v,y+S)){if(x(y)<=0){let w=M,L=y;for(let U=0;U<LN;U++){let X=(w+L)/2;x(X)>0?w=X:L=X}let[P,,D]=_(L);return[P,D]}if(y>=v)break;M=y}let[A,,E]=_(v);return[A,E]},"pickGround"),yE=NN;var em=4,no,lh,xa,ba,$n,nc,io,pr,ch,uh,hh,ji,tm,_E,A_,R_=class R_{constructor(e,t,n,i,r){G(this,ji);G(this,no);G(this,lh);G(this,xa);G(this,ba);G(this,$n);G(this,nc);G(this,io);G(this,pr);G(this,ch);G(this,uh);G(this,hh,u(e=>{let t=p(this,no).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,i=t.height>0?(e.clientY-t.top)/t.height:0;p(this,uh).call(this,n*p(this,$n),i*p(this,nc))},"#click"));k(this,no,e),k(this,xa,t),k(this,ba,n),k(this,$n,t.period().u),k(this,nc,i),k(this,uh,r),k(this,pr,document.createElement("canvas"));let{v:o}=t.period();k(this,io,o),k(this,ch,[[0,0],[-p(this,$n),0],...o===null?[]:[[0,-o],[-p(this,$n),-o]]]);let a=Math.max(1,Math.round(p(this,$n)*em)),l=Math.max(1,Math.round(p(this,nc)*em));[e,p(this,pr)].forEach(c=>{c.width=a,c.height=l}),k(this,lh,e.getContext("2d")),e.addEventListener("click",p(this,hh))}dispose(){p(this,no).removeEventListener("click",p(this,hh))}redraw(){let e=p(this,pr).getContext("2d");if(e===null)return;let t=p(this,ba).width(),n=p(this,ba).height(),i=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,pr).width,p(this,pr).height);for(let r=0;r<n;r++)for(let o=0;o<t;o++){let a=p(this,ba).get(o,r),l=a.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=Yo(l).colour,p(this,ch).forEach(([f,d])=>{R(this,ji,_E).call(this,e,o,r,f,d),e.fill()});let[c,h]=p(this,xa).centre(o,r);if(a.city)i.push([c,h,th(a.city.player)[0],2.2]);else if((a.units??[]).length>0){let f=n_(a.units,null);f!==null&&i.push([c,h,th(f.player)[0],1.4])}}i.forEach(([r,o,a,l])=>R(this,ji,A_).call(this,r,o).forEach(([c,h])=>{e.fillStyle="#000000",e.fillRect(c-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=a,e.fillRect(c-l,h-l,l*2,l*2)}))}show(e,t){let n=p(this,lh);if(n===null)return;if(n.clearRect(0,0,p(this,no).width,p(this,no).height),n.drawImage(p(this,pr),0,0),t!==null){let[h,f]=p(this,xa).centre(t.x,t.y);n.fillStyle="#ffffff",R(this,ji,A_).call(this,h,f).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=p(this,io),r=Math.min(...e.map(([h])=>h)),o=Math.min(...e.map(([,h])=>h)),a=-p(this,$n)*Math.floor(r/p(this,$n)),l=i===null?0:-i*Math.floor(o/i);(i===null?[0]:[-i,0,i]).forEach(h=>[-p(this,$n),0,p(this,$n)].forEach(f=>{n.beginPath(),e.forEach(([d,m],g)=>{let[_,x]=R(this,ji,tm).call(this,d+a+f,m+l+h);g===0?n.moveTo(_,x):n.lineTo(_,x)}),n.closePath(),n.stroke()}))}};no=new WeakMap,lh=new WeakMap,xa=new WeakMap,ba=new WeakMap,$n=new WeakMap,nc=new WeakMap,io=new WeakMap,pr=new WeakMap,ch=new WeakMap,uh=new WeakMap,hh=new WeakMap,ji=new WeakSet,tm=u(function(e,t){return[e*em,t*em]},"#px"),_E=u(function(e,t,n,i=0,r=0){e.beginPath(),p(this,xa).outline(t,n).forEach(([o,a],l)=>{let[c,h]=R(this,ji,tm).call(this,o+i,a+r);l===0?e.moveTo(c,h):e.lineTo(c,h)}),e.closePath()},"#outline"),A_=u(function(e,t){return(p(this,io)===null?[0]:[-p(this,io),0,p(this,io)]).flatMap(i=>[-p(this,$n),0,p(this,$n)].map(r=>R(this,ji,tm).call(this,e+r,t+i)))},"#everywhere"),u(R_,"Minimap3D");var T_=R_,vE=T_;var DN=u(s=>Object.entries(s.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),ME=u(s=>{let e=DN(s).sort((n,i)=>n._.charCodeAt(0)-i._.charCodeAt(0)).flatMap(({_:n,value:i})=>Array.from({length:i},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,i)=>({_:n,column:i%t,row:Math.floor(i/t)}))}},"tileYieldGrid");var SE=u((s,e)=>(s.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===s.x&&n===s.y)?.yields)??s.yields??[],"squareYields"),wE=u(s=>s.city??s.workedBy??null,"squareCity");var ON=.9,UN=u(s=>{let{columns:e,icons:t}=ME(s),n=Math.min(e,t.length),i=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:o,row:a})=>({_:r,right:o-(n-1)/2,up:(i-1)/2-a}))}},"yieldSlots"),FN=u((s,e)=>ON*e/Math.hypot(s,2),"yieldIconSize"),EE=u((s,e)=>{let[t,n]=s.centre(0,0);return Math.min(...e.edgeDirections().map(i=>{let[r,o]=e.offset(i,0,0),[a,l]=s.centre(r,o);return Math.hypot(a-t,l-n)}))},"innerOf"),TE=u(({at:s,yields:e},t)=>{let{columns:n,slots:i}=UN(e);return i.length===0?null:{at:s,size:FN(n,t),slots:i}},"laidYields"),AE=u(s=>{let e=[...s],t=e.reduce((o,{slots:a})=>o+a.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},i=new Map,r=0;return e.forEach(({at:o,size:a,slots:l})=>{l.forEach(({_:c,right:h,up:f})=>{let d=i.get(c);d===void 0&&(d=n.names.push(c)-1,i.set(c,d)),n.anchors[r*3]=o[0],n.anchors[r*3+1]=o[1],n.anchors[r*3+2]=o[2],n.slots[r*2]=h,n.slots[r*2+1]=f,n.sizes[r]=a,n.cells[r]=d,r++})}),n},"yieldMesh");var RE=u((s,{orbit:e,look:t,width:n,height:i,period:r,reach:o})=>{let a=n/i,l=Fl(e,t),c=[(e.focus[0]-l[0])/e.distance,(t-l[1])/e.distance,(e.focus[1]-l[2])/e.distance],{near:h,far:f}=cr(e.distance,r),d=Lp(e.focus,wy(e,r),r),m=u(([_,x])=>[(_+1)/2*n,(1-x)/2*i],"onScreen"),g=[];return s.forEach(({key:_,centre:x,outline:b})=>d.forEach(([v,S])=>{let M=u(([U,X,O])=>[U+v,X,O+S],"moved"),A=M(x),E=(A[0]-l[0])*c[0]+(A[1]-l[1])*c[1]+(A[2]-l[2])*c[2];if(E>f)return;let y=Bl(e,t,A,a);if(y===null)return;let[w]=m(y);if(w<-o||w>n+o)return;let L=b.map(U=>Bl(e,t,M(U),a));if(L.some(U=>U===null))return;let P=Math.max(...L.map(U=>m(U)[1]));if(P<-o||P>i)return;let D=Math.min(1,Math.max(0,(E-h)/(f-h)));g.push({key:_,x:w,y:P,clear:1-D*D*(3-2*D)})})),g.sort((_,x)=>_.y-x.y)},"bannerPlaces");var BN=10,kN=4e3,PE=u(s=>s-Math.PI*2*Math.round(s/(Math.PI*2)),"shortTurn"),zN=350,GN=2e3,VN=8,IE=u(s=>({...s,...s.hitPoints?{hitPoints:{...s.hitPoints}}:{},...s.defence?{defence:{...s.defence}}:{},...s.improvements?{improvements:[...s.improvements]}:{}}),"keptUnit"),LE=u(s=>Object.fromEntries(Object.entries(s).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),HN=u(s=>s&&{...s,...s.growth?{growth:LE(s.growth)}:{},...s.build?{build:LE(s.build)}:{},...s.yields?{yields:s.yields.map(e=>({...e}))}:{}},"keptCity"),WN=500,XN=.25,qN=400,YN=.5,kt,xh,bh,Ye,xt,Ma,yh,_h,bt,Ot,Bn,rc,vh,Sa,ao,oc,Mh,Sh,fi,ac,Ci,pn,Pi,wa,lo,lc,Kn,mr,Ii,co,cc,uc,Jt,pi,uo,Ps,gr,Is,xr,wh,ho,fo,mi,Ea,po,Ta,Ls,Li,gi,Ni,Ns,Ds,Eh,Th,Ah,Os,Us,br,yr,xi,hc,dc,_r,Di,es,fc,Rh,pc,mo,Ch,Aa,Fs,Ph,vr,Ra,go,Ca,mc,ts,Ih,Oi,xo,gc,Lh,xc,Nh,bo,Bs,Pa,Ia,Dh,Oh,bc,ks,yc,Uh,_c,vc,Mr,I,NE,P_,DE,OE,ic,I_,so,UE,FE,sc,nm,L_,dh,ro,N_,fh,D_,ph,O_,U_,BE,kE,zE,GE,im,mh,F_,VE,sm,HE,WE,XE,rm,qE,B_,YE,ya,om,$E,KE,ZE,am,_a,lm,k_,JE,jE,z_,QE,G_,oo,eT,V_,Rs,Cs,gh,tT,nT,H_,Qi,iT,cm,sT,um,W_,X_,q_,rT,oT,aT,lT,va,Y_,cT,uT,$_,Yt,hT,dT,K_,Z_=class Z_{constructor(e,t=Zw){G(this,I);G(this,kt);G(this,xh);G(this,bh,[]);G(this,Ye);G(this,xt);G(this,Ma,null);G(this,yh,0);G(this,_h,"");G(this,bt);G(this,Ot,null);G(this,Bn,null);G(this,rc);G(this,vh);G(this,Sa);G(this,ao,null);G(this,oc,null);G(this,Mh);G(this,Sh,!1);G(this,fi);G(this,ac);G(this,Ci,new Map);G(this,pn);G(this,Pi,new Map);G(this,wa,new Map);G(this,lo,new Map);G(this,lc,new Map);G(this,Kn,new Map);G(this,mr,new Set);G(this,Ii,new Map);G(this,co,0);G(this,cc,new Map);G(this,uc,new Map);G(this,Jt,new bE);G(this,pi,new uE);G(this,uo,new dE);G(this,Ps,new Map);G(this,gr,new Map);G(this,Is,new Map);G(this,xr,new Map);G(this,wh,!1);G(this,ho,new Map);G(this,fo,null);G(this,mi,new Map);G(this,Ea,new Map);G(this,po,new Set);G(this,Ta,new Map);G(this,Ls,new Map);G(this,Li,new Set);G(this,gi);G(this,Ni,null);G(this,Ns,null);G(this,Ds,null);G(this,Eh,u(()=>{R(this,I,ya).call(this)&&k(this,Ds,null),R(this,I,om).call(this)},"#pressed"));G(this,Th,u(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||R(this,I,om).call(this)},"#keyed"));G(this,Ah);G(this,Os,null);G(this,Us,null);G(this,br,!1);G(this,yr);G(this,xi,u(()=>{let e=p(this,Us);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,Us,null),document.removeEventListener("keydown",p(this,xi),!0),e.open&&p(this,fi).endTooltip(p(this,kt)))},"#endHover"));G(this,hc,null);G(this,dc,!0);G(this,_r,new Map);G(this,Di);G(this,es,new Map);G(this,fc,!1);G(this,Rh,!1);G(this,pc,"");G(this,mo,new Map);G(this,Ch,null);G(this,Aa,[]);G(this,Fs,null);G(this,Ph,u(()=>{},"#stopRestyled"));G(this,vr,null);G(this,Ra,new Map);G(this,go,new Map);G(this,Ca,[]);G(this,mc,0);G(this,ts,null);G(this,Ih,null);G(this,Oi,!0);G(this,xo);G(this,gc,new Map);G(this,Lh,u(e=>p(this,gc).get(e)?.id??null,"#modelOf"));G(this,xc,!1);G(this,Nh,u(()=>{},"#stopUnitSize"));G(this,bo,!1);G(this,Bs,!0);G(this,Pa,!1);G(this,Ia,new Map);G(this,Dh);G(this,Oh,u(()=>{},"#stopArtChanged"));G(this,bc,!1);G(this,ks);G(this,yc);G(this,Uh,"");G(this,_c,u(()=>R(this,I,K_).call(this),"#resizeHandler"));G(this,vc,null);G(this,Mr,!1);k(this,kt,e.mapCanvas),k(this,xh,e.coveredBy),k(this,ks,e.art),k(this,Di,e.cityBanners??null),k(this,ac,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,xo,cy*(e.unitSize?.get()??1)),k(this,yc,e.art.id()),this.world=e.world,k(this,Ye,new B1(e.world)),p(this,Ye).keepCities((i,r)=>{let o=`${i},${r}`;for(let a of p(this,mi).values())if(a.square===o)return a.city}),k(this,pn,new cE(p(this,Ye).layout.period())),k(this,gi,e.walks),k(this,Dh,EE(p(this,Ye).layout,e.world.topology())),k(this,Ca,e.world.tiles()),k(this,mc,p(this,Ca).length),k(this,vh,e.cameraDistance),k(this,Mh,e.lockVerticalEdges);let n=e.cameraDistance.get();if(k(this,bt,R(this,I,Rs).call(this,{...Lw(p(this,Ye).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,Sa,p(this,bt).distance),this.portal=new dv(e,{centre:u(()=>R(this,I,eT).call(this),"centre"),centreOn:u((i,r)=>R(this,I,KE).call(this,i,r),"centreOn"),changed:u(()=>{k(this,bt,R(this,I,Rs).call(this,p(this,bt))),R(this,I,Yt).call(this)},"changed"),visible:u((i,r,o)=>R(this,I,_a).call(this,i,r,o),"visible")}),k(this,xt,t(e.mapCanvas,{period:p(this,Ye).layout.period(),ground:p(this,Ye).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,hc,new vE(e.minimapCanvas,p(this,Ye).layout,e.world,p(this,Ye).extentV(),(i,r)=>{k(this,Ds,null),R(this,I,gh).call(this,{...p(this,Ot)?.to??p(this,bt),focus:[i,r]})})),e.debug&&e.mapCanvas.parentElement&&(k(this,Ma,R(this,I,hT).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,Di)!==null&&e.mapCanvas.parentElement){let i=document.createElement("canvas");i.className="map3d-banners",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(i),k(this,Fs,i)}else k(this,Di,null);k(this,pc,R(this,I,um).call(this)),p(this,Ye).queueAll(...R(this,I,oo).call(this)),R(this,I,va).call(this),this.portal.on("activate-unit",i=>e.activateUnit(i)),k(this,fi,e.squares),k(this,yr,e.playerId),k(this,Ah,e.transport),k(this,rc,new j1(e.mapCanvas,{orbit:u(()=>p(this,bt),"orbit"),lookHeight:u(()=>p(this,Bn)??0,"lookHeight"),setOrbit:u(i=>this.setOrbit(i),"setOrbit"),settle:u(i=>R(this,I,Rs).call(this,i),"settle")},{click:u((i,r)=>R(this,I,JE).call(this,i,r),"click"),menu:u((i,r,o,a,l)=>R(this,I,jE).call(this,i,r,o,a,l),"menu"),menuOnRightClick:u(()=>p(this,fi).menuOnRightClick(),"menuOnRightClick"),menuOpen:u(()=>p(this,fi).menuOpen(),"menuOpen"),hover:u(i=>R(this,I,QE).call(this,i),"hover")})),window.addEventListener("resize",p(this,_c)),document.addEventListener("keydown",p(this,Th),!0),e.mapCanvas.addEventListener("pointerdown",p(this,Eh),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,vc,new ResizeObserver(p(this,_c))),p(this,vc).observe(e.mapCanvas.parentElement)),R(this,I,K_).call(this),R(this,I,Yt).call(this),k(this,Nh,e.unitSize?.onChange(()=>{let i=cy*(e.unitSize?.get()??1);i!==p(this,xo)&&!p(this,Mr)&&(k(this,xo,i),R(this,I,va).call(this),R(this,I,Yt).call(this))})??(()=>{})),k(this,Oh,e.artChanged?.(()=>{p(this,Mr)||(k(this,Bs,!0),R(this,I,W_).call(this))})??(()=>{})),k(this,Ph,p(this,Di)?.restyled(()=>{p(this,Mr)||R(this,I,W_).call(this)})??(()=>{})),e.models?.forEach(({url:i},r)=>R(this,I,NE).call(this,i,r))}land(){return p(this,Ye)}orbit(){return p(this,bt)}moving(){return p(this,Ot)!==null||p(this,rc).moving()}setOrbit(e){p(this,xi).call(this),k(this,Ot,null),k(this,bt,R(this,I,Rs).call(this,e)),R(this,I,Yt).call(this)}activeUnit(){return{unit:p(this,ts),pendingTile:p(this,Ih)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,Ot)?.to??p(this,bt);R(this,I,gh).call(this,{...t,yaw:t.yaw+e*py},R(this,I,P_).call(this)+e*py)}heading(){return{turn:(p(this,Ot)?.to??p(this,bt)).yaw,directions:fv(p(this,Ye).layout,this.world.topology())}}faceNorth(){R(this,I,gh).call(this,{...p(this,Ot)?.to??p(this,bt),yaw:0},PE(-p(this,bt).yaw))}debugViewModes(){return[]}dispose(){R(this,I,$_).call(this,!0),k(this,Mr,!0),p(this,pn).endAll(0),p(this,Jt).endAll(0),p(this,pi).endAll(),p(this,Is).clear(),p(this,xr).clear(),p(this,ho).clear(),k(this,fo,null),p(this,Ps).clear(),p(this,gr).clear(),p(this,mi).clear(),p(this,Ea).clear(),p(this,Ta).clear(),p(this,Ls).clear(),p(this,Li).clear(),p(this,Kn).clear(),p(this,mr).clear(),p(this,Ii).clear(),document.removeEventListener("keydown",p(this,Th),!0),p(this,kt).removeEventListener("pointerdown",p(this,Eh),!0),p(this,Nh).call(this),p(this,Oh).call(this),p(this,Ph).call(this),p(this,Fs)?.remove(),p(this,es).clear(),p(this,mo).clear(),p(this,xi).call(this),p(this,rc).dispose(),p(this,hc)?.dispose(),window.removeEventListener("resize",p(this,_c)),p(this,vc)?.disconnect(),p(this,vr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,vr)),k(this,vr,null),p(this,Ma)?.remove(),p(this,xt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Os);e!==null&&(k(this,Os,null),p(this,kt).classList.remove("picking-tile"),e.window?.close())}flush(){R(this,I,H_).call(this),R(this,I,Yt).call(this)}mapEvent(e){if(e.kind==="moved"){R(this,I,OE).call(this,e.unit,e.from,e.to),R(this,I,am).call(this,e.unit.id,e.from,e.to);return}R(this,I,am).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),R(this,I,am).call(this,e.defender.id,e.defender.tile,e.attacker.tile),R(this,I,DE).call(this,e)}measureCovered(){let e=p(this,kt).getBoundingClientRect();k(this,bh,p(this,xh).map(t=>{let n=t.getBoundingClientRect(),i=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,e.left)-e.left,top:Math.max(n.top,i.top,e.top)-e.top,right:Math.min(n.right,i.right,e.right)-e.left,bottom:Math.min(n.bottom,i.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:i,bottom:r})=>i>t&&r>n))}pickTile(e,t,n){this.endPicking();let i={accept:e,onPick:t,window:null};k(this,Os,i),p(this,kt).classList.add("picking-tile"),i.window=p(this,fi).prompt(n,()=>{p(this,Os)===i&&(k(this,Os,null),p(this,kt).classList.remove("picking-tile"))})}picking(){return p(this,Os)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,Ra).set(t,e),p(this,cc).set(t,++Fi(this,co)._)}redrawArt(){let e=p(this,ks).id();return e===p(this,yc)?"unchanged":(k(this,yc,e),k(this,Bs,!0),"redrawn")}releaseTiles(){let e=p(this,wh)&&R(this,I,sm).call(this);e&&p(this,Ra).size>0&&p(this,fo)===null&&k(this,fo,new Set([...p(this,gr).keys(),...p(this,Pi).keys()])),p(this,Ra).forEach((t,n)=>{let i=p(this,cc).get(n)??0;e&&!p(this,ho).has(n)&&p(this,ho).set(n,p(this,Ps).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),p(this,go).set(n,t),p(this,uc).set(n,i),p(this,mi).forEach(r=>{r.square===n&&i>r.after&&(r.patched=!0)})}),p(this,Ra).clear(),p(this,cc).clear(),p(this,go).size>0&&R(this,I,Yt).call(this)}setActiveUnit(e,t){let n=p(this,ts)?.tile;if(k(this,ts,e),k(this,Ih,t??null),R(this,I,ya).call(this)&&R(this,I,$E).call(this)&&R(this,I,om).call(this),R(this,I,ya).call(this)){R(this,I,Yt).call(this);return}k(this,Ds,null);let i=p(this,Ns);k(this,Ni,e?.id??null),k(this,Ns,e?.tile??null),[n,i,e?.tile].forEach(r=>{r&&R(this,I,Qi).call(this,r.x,r.y)}),R(this,I,Yt).call(this)}setWaiting(e){k(this,bc,e),e&&p(this,xi).call(this)}showActiveUnit(e){p(this,Oi)||(k(this,Oi,!0),p(this,Ye).showTowns(!0,...R(this,I,oo).call(this)),R(this,I,va).call(this),R(this,I,Yt).call(this))}shown(){return{units:p(this,Oi),yields:p(this,bo),waiting:p(this,bc)}}tilesPending(){return p(this,go).size}toggleUnits(){k(this,Oi,!p(this,Oi)),p(this,Ye).showTowns(p(this,Oi),...R(this,I,oo).call(this)),R(this,I,va).call(this),k(this,br,!0),R(this,I,Yt).call(this)}toggleYields(){k(this,bo,!p(this,bo)),k(this,Bs,!0),k(this,br,!0),R(this,I,Yt).call(this)}zoomBy(e){p(this,xi).call(this),k(this,bt,R(this,I,Rs).call(this,Ul(p(this,bt),e))),p(this,Ot)!==null&&(p(this,Ot).from=R(this,I,Rs).call(this,Ul(p(this,Ot).from,e)),p(this,Ot).to=R(this,I,Rs).call(this,Ul(p(this,Ot).to,e))),R(this,I,Yt).call(this)}};kt=new WeakMap,xh=new WeakMap,bh=new WeakMap,Ye=new WeakMap,xt=new WeakMap,Ma=new WeakMap,yh=new WeakMap,_h=new WeakMap,bt=new WeakMap,Ot=new WeakMap,Bn=new WeakMap,rc=new WeakMap,vh=new WeakMap,Sa=new WeakMap,ao=new WeakMap,oc=new WeakMap,Mh=new WeakMap,Sh=new WeakMap,fi=new WeakMap,ac=new WeakMap,Ci=new WeakMap,pn=new WeakMap,Pi=new WeakMap,wa=new WeakMap,lo=new WeakMap,lc=new WeakMap,Kn=new WeakMap,mr=new WeakMap,Ii=new WeakMap,co=new WeakMap,cc=new WeakMap,uc=new WeakMap,Jt=new WeakMap,pi=new WeakMap,uo=new WeakMap,Ps=new WeakMap,gr=new WeakMap,Is=new WeakMap,xr=new WeakMap,wh=new WeakMap,ho=new WeakMap,fo=new WeakMap,mi=new WeakMap,Ea=new WeakMap,po=new WeakMap,Ta=new WeakMap,Ls=new WeakMap,Li=new WeakMap,gi=new WeakMap,Ni=new WeakMap,Ns=new WeakMap,Ds=new WeakMap,Eh=new WeakMap,Th=new WeakMap,Ah=new WeakMap,Os=new WeakMap,Us=new WeakMap,br=new WeakMap,yr=new WeakMap,xi=new WeakMap,hc=new WeakMap,dc=new WeakMap,_r=new WeakMap,Di=new WeakMap,es=new WeakMap,fc=new WeakMap,Rh=new WeakMap,pc=new WeakMap,mo=new WeakMap,Ch=new WeakMap,Aa=new WeakMap,Fs=new WeakMap,Ph=new WeakMap,vr=new WeakMap,Ra=new WeakMap,go=new WeakMap,Ca=new WeakMap,mc=new WeakMap,ts=new WeakMap,Ih=new WeakMap,Oi=new WeakMap,xo=new WeakMap,gc=new WeakMap,Lh=new WeakMap,xc=new WeakMap,Nh=new WeakMap,bo=new WeakMap,Bs=new WeakMap,Pa=new WeakMap,Ia=new WeakMap,Dh=new WeakMap,Oh=new WeakMap,bc=new WeakMap,ks=new WeakMap,yc=new WeakMap,Uh=new WeakMap,_c=new WeakMap,vc=new WeakMap,Mr=new WeakMap,I=new WeakSet,NE=u(function(e,t){p(this,xt).loadModels?.(e,(n,i)=>{if(p(this,Mr))return;let r=i.filter(o=>(p(this,gc).get(o)?.rank??1/0)>=t);r.length!==0&&(r.forEach(o=>p(this,gc).set(o,{id:n,rank:t})),k(this,xc,!0),R(this,I,Yt).call(this))}).catch(n=>console.warn("The 3D map's models couldn't be loaded:",n))},"#loadModels"),P_=u(function(){let e=p(this,Ot);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),DE=u(function({attacker:e,defender:t,winner:n}){let i=p(this,gi)?.speed()??"normal",r=performance.now();if(typeof requestAnimationFrame!="function"||Zi()||i==="off"||e.player!==p(this,yr)&&t.player!==p(this,yr)&&!(p(this,gi)?.rivals()??!0)||!R(this,I,_a).call(this,e.tile.x,e.tile.y,-.5)&&!R(this,I,_a).call(this,t.tile.x,t.tile.y,-.5))return;let o=this.world.get(e.tile.x,e.tile.y).units.find(({id:X})=>X===e.id),a=`${t.tile.x},${t.tile.y}`,l=this.world.get(t.tile.x,t.tile.y),c=[...p(this,mi).values()].filter(({square:X,patched:O})=>X===a&&!O).at(-1),h=c===void 0?l.units.filter(({id:X})=>!p(this,Li).has(X)).map(IE):c.units.filter(({id:X})=>!(c.won&&X===c.defender));if(p(this,Li).has(e.id)||!h.some(({id:X})=>X===t.id))return;let f=u(X=>{let O=X===void 0?null:R(this,I,fh).call(this,[X]);return O===null?null:p(this,xt).rigFacts?.(O)??null},"facts"),d=f(o??p(this,Pi).get(e.id)),m=mE(fE,d,n==="attacker"?f(h.find(({id:X})=>X===t.id)):d),g=i==="fast"?pE(m):m,_=p(this,Jt).busyUntil([e.id,t.id]),x=Math.max(S_(g),p(this,Jt).longest([e.id,t.id]));_!==null&&_-r>Math.max(GN,2*x)&&R(this,I,mh).call(this,p(this,Jt).endWhere(X=>X.attacker===e.id||X.attacker===t.id,r)),R(this,I,I_).call(this,e.id);let[b,v]=p(this,Ye).layout.centre(e.tile.x,e.tile.y),[S,M]=p(this,Ye).layout.centre(t.tile.x,t.tile.y),{u:A,v:E}=p(this,Ye).layout.period(),y=u((X,O)=>O===null?X:X-O*Math.round(X/O),"short"),w=y(S-b,A),L=y(M-v,E),P=`${e.tile.x},${e.tile.y}`,D=p(this,Jt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:R(this,I,ic).call(this,e.tile),edge:[b+w*w_,v+L*w_],fallsAt:R(this,I,ic).call(this,t.tile),facing:p(this,Ci).get(e.id)??Math.atan2(w,L),defenderFacing:p(this,Ci).get(t.id)??Math.atan2(-w,-L)},r,g,p(this,pn).endsAt(e.id)??r),U=d?.clips.fight?.shots??[];g.clips?.fight&&d!==null&&U.length>0&&p(this,Ta).set(D.id,{times:Jw(U,d.figures,d.stagger),left:new Set,target:R(this,I,dh).call(this,D.fallsAt.at,D.fallsAt.lift+Ey),figures:d.figures,rate:g.clips.rate}),p(this,mi).set(D.id,{square:a,city:c?.city??HN(l.city),units:h,after:p(this,co),won:n==="attacker",defender:t.id,patched:!1}),o!==void 0&&p(this,Pi).set(e.id,o),[e.id,t.id].forEach(X=>p(this,Ii).set(X,{squares:[P,a],after:p(this,co)})),R(this,I,Qi).call(this,e.tile.x,e.tile.y),R(this,I,Qi).call(this,t.tile.x,t.tile.y),R(this,I,Yt).call(this)},"#fight"),OE=u(function(e,t,n){let i=p(this,gi)?.speed()??"normal";if(e.id===p(this,Ni)&&k(this,Ns,n),typeof requestAnimationFrame!="function"||Zi()||i==="off")return;if(e.player!==p(this,yr)&&p(this,Jt).attacking(e.id)){p(this,Ii).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,co)});return}R(this,I,mh).call(this,p(this,Jt).endWhere(({attacker:f,defender:d})=>f===e.id||d===e.id,performance.now()));let r=p(this,pn).walking(e.id),o=this.world.get(t.x,t.y).units.find(({id:f})=>f===e.id)??(R(this,I,so).call(this,e.id)?p(this,Pi).get(e.id):void 0),a=e.player===p(this,yr);if(o===void 0||!a&&!r&&(!(p(this,gi)?.rivals()??!0)||!R(this,I,_a).call(this,t.x,t.y,-.5)&&!R(this,I,_a).call(this,n.x,n.y,-.5)))return;let l=a?iE:sE;p(this,Pi).set(e.id,o),p(this,Ii).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,co)}),R(this,I,I_).call(this,e.id);let c=Il(Pl(o._,o.__??[])),h=c?void 0:p(this,Ye).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);p(this,pn).step(e.id,t,n,R(this,I,ic).call(this,t),{...R(this,I,ic).call(this,n),...h===void 0?{}:{via:h}},performance.now(),i==="fast"?rE(l):l,c),R(this,I,Yt).call(this)},"#walk"),ic=u(function({x:e,y:t},n=!!this.world.get(e,t).city){let[i,r]=p(this,Ye).layout.centre(e,t),o=Math.max(0,p(this,Ye).surfaceAt(i,r)),a=[i,r+(n?oa:0)];return{at:a,lift:o-Math.max(0,p(this,Ye).surfaceAt(...a)),middle:[i,r]}},"#standing"),I_=u(function(e){p(this,mr).delete(e)&&p(this,Kn).forEach((t,n)=>{let i=t.units.filter(r=>r!==e);if(i.length!==t.units.length){if(i.length===0){p(this,Kn).delete(n),R(this,I,ro).call(this,n);return}p(this,Kn).set(n,{...t,units:i})}})},"#stepsOn"),so=u(function(e){return p(this,pn).walking(e)||p(this,mr).has(e)||p(this,Jt).attacking(e)||p(this,Li).has(e)},"#leftOff"),UE=u(function(e){if(p(this,pn).dropped().forEach(i=>R(this,I,ro).call(this,i)),p(this,Kn).forEach(i=>R(this,I,sc).call(this,i)),p(this,pn).size()===0)return;if(Zi()||(p(this,gi)?.speed()??"normal")==="off"){R(this,I,ph).call(this,p(this,pn).endAll(e));return}let{going:t,ended:n}=p(this,pn).at(e);R(this,I,ph).call(this,n),t.forEach(i=>{R(this,I,sc).call(this,i,!0)!==null&&i.units.some(o=>{let a=p(this,Pi).get(o);return a!==void 0&&Pl(a._,a.__??[]).shape==="ship"})&&p(this,uo).trail(i.id,i.at,e)})},"#placeWalkers"),FE=u(function(e){if(p(this,uo).size()===0)return;if(Zi()||(p(this,gi)?.speed()??"normal")==="off"){p(this,uo).endAll().forEach(i=>p(this,xt).wake(i,null));return}let{going:t,gone:n}=p(this,uo).at(e);n.forEach(i=>p(this,xt).wake(i,null)),t.forEach(({id:i,points:r})=>{let[o]=r;if(o===void 0){p(this,xt).wake(i,null);return}let[a,l]=R(this,I,L_).call(this,o.at);p(this,xt).wake(i,[a,0,l],hE(r))})},"#placeWakes"),sc=u(function(e,t=!1){let n=R(this,I,N_).call(this,e.units),i=null;if(t){let r=p(this,lc).get(e.id),o=(r?.by??0)+(r===void 0?0:Math.hypot(e.at[0]-r.at[0],e.at[1]-r.at[1]));p(this,lc).set(e.id,{at:[e.at[0],e.at[1]],by:o}),i={role:"move",seconds:o/qw}}return R(this,I,nm).call(this,e,n,1,i),n},"#drawWalker"),nm=u(function({id:e,at:t,lift:n,facing:i,aloft:r=0},o,a=1,l=null){let c=o===null?null:JSON.stringify(o);c!==(p(this,lo).get(e)??null)&&(p(this,xt).setWalker(e,o),c===null?p(this,lo).delete(e):p(this,lo).set(e,c)),o!==null&&(p(this,xt).placeWalker(e,R(this,I,dh).call(this,t,n),i,r),p(this,xt).fadeWalker(e,a),p(this,xt).poseWalker?.(e,l?.role??null,l?.seconds??0))},"#drawFigure"),L_=u(function(e){let{u:t,v:n}=p(this,Ye).layout.period(),i=u((r,o)=>o===null?r:(r%o+o)%o,"within");return[i(e[0],t),i(e[1],n)]},"#wrapped"),dh=u(function(e,t){let[n,i]=R(this,I,L_).call(this,e);return[n,Math.max(0,p(this,Ye).surfaceAt(n,i))+t,i]},"#onLand"),ro=u(function(e){p(this,lc).delete(e),p(this,lo).delete(e)&&p(this,xt).setWalker(e,null)},"#takeAway"),N_=u(function(e){let t=e.flatMap(n=>{let i=p(this,Pi).get(n);return i===void 0?[]:[i]});return R(this,I,fh).call(this,t)},"#walkerMarker"),fh=u(function(e,t=p(this,Ni)){return i_({city:null,units:e},t,p(this,Oi),p(this,ac),()=>0,p(this,xo),p(this,Lh))},"#unitsMarker"),D_=u(function({units:e}){return e.some(t=>p(this,Ii).has(t))},"#awaitsPatch"),ph=u(function(e){let t=new Set;e.forEach(n=>{let i={...n,units:n.units.filter(r=>!p(this,Jt).attacking(r))};if(i.units.length>0&&R(this,I,D_).call(this,i)){p(this,Kn).set(i.id,i),i.units.forEach(r=>p(this,mr).add(r)),R(this,I,sc).call(this,i);return}R(this,I,ro).call(this,n.id),n.units.forEach(r=>p(this,mr).delete(r)),R(this,I,O_).call(this,n.units,t)}),R(this,I,U_).call(this,t)},"#walksEnded"),O_=u(function(e,t){e.forEach(n=>{R(this,I,so).call(this,n)&&!p(this,Li).has(n)||(p(this,wa).get(n)?.forEach(i=>t.add(i)),p(this,wa).delete(n),p(this,Pi).delete(n))})},"#release"),U_=u(function(e){let t=p(this,Ni);t!==null&&t!==(p(this,ts)?.id??null)&&!p(this,pn).walking(t)&&!p(this,Jt).attacking(t)&&R(this,I,YE).call(this,e),e.forEach(n=>{let[i,r]=n.split(",").map(Number);R(this,I,Qi).call(this,i,r)})},"#released"),BE=u(function(e){let t=new Set;if(p(this,Jt).size()===0){R(this,I,im).call(this,t);return}if(Zi()||(p(this,gi)?.speed()??"normal")==="off"){R(this,I,mh).call(this,p(this,Jt).endAll(e)),R(this,I,im).call(this,t);return}let{going:n,struck:i,ended:r}=p(this,Jt).at(e);i.forEach(o=>R(this,I,F_).call(this,o,!0)),n.forEach(o=>{if(!o.fallen&&p(this,pn).walking(o.unit)){R(this,I,ro).call(this,o.id);return}R(this,I,qE).call(this,o)&&t.add(R(this,I,GE).call(this,o))}),R(this,I,kE).call(this,e,n,t),R(this,I,B_).call(this,r),R(this,I,im).call(this,t)},"#placeBattles"),kE=u(function(e,t,n){t.forEach(({id:i,battle:r,at:o,lift:a,fallen:l,clip:c})=>{let h=p(this,Ta).get(r);h===void 0||l||c?.role!=="fight"||h.times.forEach((f,d)=>{if(h.left.has(d)||c.seconds<f.leaves)return;let m=p(this,xt).jointAt?.(i,f.figure,f.joint)??R(this,I,dh).call(this,o,a+Ey),{u:g,v:_}=p(this,Ye).layout.period(),x=u((S,M,A)=>A===null?S:S+A*Math.round((M-S)/A),"near"),b=[x(h.target[0],m[0],g),h.target[1],x(h.target[2],m[2],_)],v=e-(c.seconds-f.leaves)*1e3/h.rate;h.left.add(d),p(this,Ls).set(`${r}-shot-${d}`,{battle:r,from:m,to:jw(m,b,f.figure,h.figures),leaves:v,lands:v+jp/h.rate,rate:h.rate})})}),p(this,Ls).forEach(({battle:i,from:r,to:o,leaves:a,lands:l,rate:c},h)=>{if(!p(this,lo).has(i)){p(this,xt).shot?.(h,null),p(this,Ls).delete(h);return}if(e<l){let m=(e-a)/(l-a);p(this,xt).shot?.(h,Qw(r,o,m),m);return}p(this,xt).shot?.(h,null);let f=`${h}-hit`,d=(e-l)*c/Np;if(d<1){p(this,po).add(f),p(this,xt).puff(f,o,d),n.add(f);return}p(this,Ls).delete(h)})},"#placeShots"),zE=u(function(e){p(this,Ta).delete(e),p(this,Ls).forEach((t,n)=>{t.battle===e&&(p(this,xt).shot?.(n,null),p(this,xt).puff(`${n}-hit`,null),p(this,po).delete(`${n}-hit`),p(this,Ls).delete(n))})},"#shotsOver"),GE=u(function({battle:e,at:t,lift:n,opacity:i}){let r=`${e}-puff`;return p(this,po).add(r),p(this,xt).puff(r,R(this,I,dh).call(this,t,n),1-i),r},"#puff"),im=u(function(e){p(this,po).forEach(t=>{e.has(t)||(p(this,po).delete(t),p(this,xt).puff(t,null))})},"#puffsOver"),mh=u(function({struck:e,ended:t}){e.forEach(n=>R(this,I,F_).call(this,n,!1)),R(this,I,B_).call(this,t)},"#battlesOver"),F_=u(function(e,t){let{square:n,units:i}=p(this,mi).get(e.id)??{square:"",units:[]},{x:r,y:o}=e.defenderSquare,a=[...p(this,mi).entries()].find(([f,d])=>f!==e.id&&d.square===n)?.[1],l=new Set((a?.units??this.world.get(r,o).units).map(({id:f})=>f)),c=e.won?e.defender:e.attacker,h=i.filter(({id:f})=>e.won&&f===e.defender||!l.has(f)&&!R(this,I,so).call(this,f));p(this,mi).delete(e.id),p(this,Ye).changed([[r,o]],...R(this,I,oo).call(this)),p(this,Ii).has(c)&&p(this,Li).add(c),t&&e.won&&h.length>0&&p(this,Ea).set(e.id,h),R(this,I,Qi).call(this,r,o)},"#blow"),VE=u(function(e,t,{shown:n,ringed:i,inCity:r}){if((p(this,Ps).get(e)?.units??[]).forEach(({id:o})=>{p(this,gr).get(o)===e&&p(this,gr).delete(o)}),t.length===0?p(this,Ps).delete(e):p(this,Ps).set(e,{units:t.map(IE),shown:n,ringed:i,inCity:r}),t.forEach(({id:o})=>p(this,gr).set(o,e)),p(this,Is).size>0){let o=[...p(this,Is).entries()].filter(([,a])=>a.units.some(l=>t.some(({id:c})=>c===l.id))).map(([a])=>a);o.forEach(a=>p(this,pi).end(a)),R(this,I,rm).call(this,o)}},"#drawnOn"),sm=u(function(){return typeof requestAnimationFrame=="function"&&!Zi()&&(p(this,gi)?.speed()??"normal")!=="off"},"#fadesShown"),HE=u(function(e){return p(this,gr).has(e)||R(this,I,so).call(this,e)},"#drawnAnywhere"),WE=u(function(e,t){let n=[],i=[];if(e.forEach((l,c)=>{let h=l.units.filter(({id:d})=>!R(this,I,HE).call(this,d)),f=p(this,Ps).get(c)?.shown??null;l.shown!==null&&h.some(({id:d})=>d===l.shown)&&n.push([c,l,h]),l.units.length===0&&f!==null&&!t.has(f)&&i.push([c,f])}),n.length+i.length===0||n.length+i.length>VN)return;let r=u(([l])=>{let[c,h]=l.split(",").map(Number);return R(this,I,_a).call(this,c,h,0)},"onScreen"),o=performance.now(),a=(p(this,gi)?.speed()??"normal")==="fast"?500/2:500;n.filter(r).forEach(([l,c,h])=>{let[f,d]=l.split(",").map(Number);p(this,Is).set(p(this,pi).add("out",o,a),{units:[...h.filter(({id:m})=>m===c.shown),...h.filter(({id:m})=>m!==c.shown)],shown:c.ringed?c.shown:null,at:R(this,I,ic).call(this,{x:f,y:d},c.inCity),facing:c.shown===null?0:p(this,Ci).get(c.shown)??0})}),i.filter(r).forEach(([l,c])=>{p(this,xr).set(p(this,pi).add("in",o,a),{key:l,unit:c}),p(this,xt).fadeMarker(l,0)}),R(this,I,Yt).call(this)},"#fadeChanged"),XE=u(function(e){if(p(this,pi).size()===0)return;if(!R(this,I,sm).call(this)){R(this,I,rm).call(this,p(this,pi).endAll());return}let{going:t,ended:n}=p(this,pi).at(e),i=[];t.forEach(({id:r,opacity:o})=>{let a=p(this,Is).get(r),l=p(this,xr).get(r);if(a!==void 0){let c=R(this,I,fh).call(this,a.units,a.shown);if(c===null){p(this,pi).end(r),i.push(r);return}R(this,I,nm).call(this,{id:r,at:[a.at.at[0],a.at.at[1]],lift:a.at.lift,facing:a.facing},c,o);return}if(l!==void 0){if((p(this,Ps).get(l.key)?.shown??null)!==l.unit){p(this,pi).end(r),i.push(r);return}p(this,xt).fadeMarker(l.key,o)}}),R(this,I,rm).call(this,[...n,...i])},"#placeFades"),rm=u(function(e){e.forEach(t=>{let n=p(this,xr).get(t);p(this,Is).delete(t)&&R(this,I,ro).call(this,t),n!==void 0&&(p(this,xr).delete(t),[...p(this,xr).values()].some(({key:i})=>i===n.key)||p(this,xt).fadeMarker(n.key,1))})},"#fadesOver"),qE=u(function(e){let t=p(this,Ea).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?R(this,I,fh).call(this,t):R(this,I,N_).call(this,[e.unit]);return R(this,I,nm).call(this,e,n,e.opacity,e.clip??null),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),B_=u(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:i,attacker:r,won:o,from:a,attackerSquare:l,facing:c}=n;if(R(this,I,zE).call(this,i),R(this,I,ro).call(this,`${i}-fallen`),p(this,Ea).delete(i),p(this,mi).delete(i)&&p(this,Ye).changed([[n.defenderSquare.x,n.defenderSquare.y]],...R(this,I,oo).call(this)),p(this,Ii).has(r)&&!R(this,I,so).call(this,r))if(!o)p(this,Li).add(r);else{let h={id:i,units:[r],at:[a.at[0],a.at[1]],lift:a.lift,aloft:0,facing:c,from:l,before:l,to:l};p(this,Kn).set(i,h),p(this,mr).add(r),R(this,I,sc).call(this,h);return}R(this,I,ro).call(this,i),R(this,I,O_).call(this,[r],t)}),R(this,I,U_).call(this,t)},"#battlesEnded"),YE=u(function(e){let t=p(this,ts);[p(this,Ns),t?.tile].forEach(i=>{i&&e.add(`${i.x},${i.y}`)}),k(this,Ni,t?.id??null),k(this,Ns,t?.tile??null),p(this,Kn).forEach(i=>R(this,I,sc).call(this,i));let n=p(this,Ds);n!==null&&(k(this,Ds,null),R(this,I,V_).call(this,n.x,n.y))},"#caughtUp"),ya=u(function(){let e=p(this,Ni);return e!==null&&e!==(p(this,ts)?.id??null)&&(p(this,pn).walking(e)||p(this,Jt).attacking(e))},"#holding"),om=u(function(){let e=p(this,Ni);e===null||!R(this,I,ya).call(this)||(R(this,I,ph).call(this,p(this,pn).endWhere(t=>t.includes(e),performance.now())),R(this,I,mh).call(this,p(this,Jt).endWhere(({attacker:t})=>t===e,performance.now())),R(this,I,Yt).call(this))},"#hurry"),$E=u(function(){let e=p(this,Ns),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===p(this,Ni));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),KE=u(function(e,t){if(R(this,I,ya).call(this)){k(this,Ds,{x:e,y:t});return}R(this,I,V_).call(this,e,t)},"#centreSoon"),ZE=u(function(e){if(p(this,Ii).forEach(({squares:n,after:i},r)=>{n.some(o=>(e.get(o)??0)>i)&&(p(this,Ii).delete(r),p(this,Li).delete(r))}),p(this,Kn).size===0)return;let t=[...p(this,Kn).values()].filter(n=>!R(this,I,D_).call(this,n));t.forEach(n=>p(this,Kn).delete(n.id)),R(this,I,ph).call(this,t)},"#patched"),am=u(function(e,t,n){let[i,r]=p(this,Ye).layout.centre(t.x,t.y),[o,a]=p(this,Ye).layout.centre(n.x,n.y),{u:l,v:c}=p(this,Ye).layout.period(),h=u((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),f=h(o-i,l),d=h(a-r,c);f===0&&d===0||(p(this,Ci).delete(e),p(this,Ci).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),p(this,Ci).size>kN&&p(this,Ci).delete(p(this,Ci).keys().next().value),[t,n].forEach(({x:m,y:g})=>R(this,I,Qi).call(this,m,g)),R(this,I,Yt).call(this))},"#face"),_a=u(function(e,t,n){let i=p(this,kt).clientWidth,r=p(this,kt).clientHeight;if(i<=0||r<=0)return!1;let o=p(this,Ds),a=o===null?p(this,Ot)?.to??p(this,bt):{...p(this,Ot)?.to??p(this,bt),focus:p(this,Ye).layout.centre(o.x,o.y)},[l,c]=p(this,Ye).layout.centre(e,t),{u:h,v:f}=R(this,I,Cs).call(this),[d,m]=a.focus,g=u((w,L,P)=>P===null?w:w+P*Math.round((L-w)/P),"nearest"),_=[g(l,d,h),Math.max(0,p(this,Ye).heightAt(l,c)),g(c,m,f)],x=i/r,b=p(this,Bn)??0,v=Bl(a,b,_,x),S=Bl(a,b,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],x);if(v===null||S===null)return!1;let M=(v[0]+1)/2*i,A=(1-v[1])/2*r,E=Math.abs(S[0]-v[0])*(i/2),y=(n+.5)*E;return M>=y&&M<=i-y&&A>=y&&A<=r-y&&!p(this,bh).some(({left:w,top:L,right:P,bottom:D})=>M>=w-E/2&&M<=P+E/2&&A>=L-E/2&&A<=D+E/2)},"#visible"),lm=u(function(e,t){let n=p(this,kt).clientWidth,i=p(this,kt).clientHeight;if(n<=0||i<=0)return null;let r=[e/n*2-1,1-t/i*2],o=p(this,xt).unitAt?.(r)??null;if(o!==null){let[m,g]=o.split(",").map(Number);return this.world.get(m,g)}let a=yE(p(this,bt),p(this,Bn)??0,r,n/i,(m,g)=>p(this,Ye).heightAt(m,g));if(a===null)return null;let[l,c]=p(this,Ye).layout.tileAt(...a),h=this.world.width(),f=this.world.height();return!(R(this,I,Cs).call(this).v!==null)&&(c<0||c>=f)?null:this.world.get((l%h+h)%h,(c%f+f)%f)},"#tileAt"),k_=u(function(e,t){for(let n=p(this,Aa).length-1;n>=0;n--){let{key:i,left:r,top:o,right:a,bottom:l}=p(this,Aa)[n];if(e>=r&&e<a&&t>=o&&t<l){let[c,h]=i.split(",").map(Number),f=this.world.get(c,h);if(f?.city)return{tile:f,box:{left:r,top:o,bottom:l}}}}return null},"#bannerAt"),JE=u(function(e,t){let n=R(this,I,lm).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=p(this,Os);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}let r=R(this,I,k_).call(this,e,t)?.tile.city??null;(n!==null||r!==null)&&p(this,fi).click(this.portal,n,r)},"#clicked"),jE=u(function(e,t,n,i,r){let o=p(this,ts),a=R(this,I,lm).call(this,e,t);return o===null||a===null?!1:(this.endPicking(),p(this,fi).menu(this.portal,n,i,o,a,p(this,Ah),r),!0)},"#menu"),z_=u(function(e,t){let n=R(this,I,k_).call(this,e,t);if(n!==null)return{key:`banner ${n.tile.x},${n.tile.y}`,...n};let i=R(this,I,lm).call(this,e,t);return i===null?null:{key:`${i.x},${i.y}`,tile:i,box:null}},"#subjectAt"),QE=u(function(e){let t=e===null||p(this,bc)||p(this,fi).menuOpen()?null:R(this,I,z_).call(this,e.x,e.y),n=p(this,Us);if(t===null||e===null){p(this,xi).call(this);return}let{key:i,tile:{x:r,y:o}}=t;if(n!==null&&n.key===i){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,xi).call(this);let a={key:i,x:r,y:o,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};a.timer=window.setTimeout(()=>{a.timer=null,R(this,I,G_).call(this,a)},qN),k(this,Us,a),document.addEventListener("keydown",p(this,xi),!0)},"#hovered"),G_=u(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,kt),n=t?R(this,I,z_).call(this,e.canvasX,e.canvasY):null;if(n===null||n.key!==e.key){p(this,xi).call(this);return}let i=n.box===null?null:p(this,kt).getBoundingClientRect(),r=p(this,fi).tooltip(p(this,kt),n.tile,p(this,yr),i===null||n.box===null?{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10}:{left:i.left+n.box.left,top:i.top+n.box.top,bottom:i.top+n.box.bottom});!r&&e.open&&p(this,fi).endTooltip(p(this,kt)),e.open=r},"#showHover"),oo=u(function(){return[...p(this,bt).focus]},"#focus"),eT=u(function(){let[e,t]=p(this,Ye).layout.tileAt(...p(this,bt).focus),n=this.world.width(),i=this.world.height();return{x:(e%n+n)%n,y:R(this,I,Cs).call(this).v===null?Math.min(i-1,Math.max(0,t)):(t%i+i)%i}},"#centreSquare"),V_=u(function(e,t){let[n,i]=p(this,Ye).layout.centre(e,t),[r,o]=(p(this,Ot)?.to??p(this,bt)).focus;if(n===r&&i===o)return;let a={...p(this,Ot)?.to??p(this,bt),focus:[n,i]},{u:l,v:c}=R(this,I,Cs).call(this),h=u((g,_)=>_===null?g:g-_*Math.round(g/_),"short"),[f,d]=p(this,bt).focus,m=Math.hypot(h(n-f,l),h(i-d,c));if(!p(this,Sh)||m>p(this,bt).distance*1.5){k(this,Sh,!0),this.setOrbit(a);return}R(this,I,gh).call(this,a)},"#centreOn"),Rs=u(function(e){let t=la(e),n=R(this,I,Cs).call(this);return Ow({...t,pitch:Math.max(t.pitch,Fw(t.distance,n))},n,p(this,Ye).extentV())},"#settle"),Cs=u(function(){let e=p(this,Ye).layout.period();return this.portal?.lockVerticalEdges()??p(this,Mh)?{u:e.u,v:null}:e},"#period"),gh=u(function(e,t=R(this,I,P_).call(this)+PE(e.yaw-(p(this,Ot)?.to??p(this,bt)).yaw)){p(this,xi).call(this),typeof requestAnimationFrame!="function"||Zi()?(k(this,Ot,null),k(this,bt,R(this,I,Rs).call(this,e))):k(this,Ot,{from:p(this,bt),to:e,started:null,turn:t,drawn:0}),R(this,I,Yt).call(this)},"#moveTo"),tT=u(function(e){let t=p(this,Ot);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/zN);return t.drawn=n*n*(3-2*n),k(this,bt,R(this,I,Rs).call(this,Uw(t.from,t.to,n,R(this,I,Cs).call(this),t.turn))),n>=1&&k(this,Ot,null),n<1},"#moveCamera"),nT=u(function(e){let[t,n]=p(this,bt).focus,i=Math.max(0,p(this,Ye).heightAt(t,n));return!e||p(this,Bn)===null||Zi()?(k(this,Bn,i),!1):(k(this,Bn,p(this,Bn)+(i-p(this,Bn))*XN),Math.abs(i-p(this,Bn))<.002?(k(this,Bn,i),!1):!0)},"#followHeight"),H_=u(function(){let e=[...p(this,go).values()].map(({x:h,y:f})=>[h,f]),t=this.world.tiles(),n=t!==p(this,Ca)||t.length!==p(this,mc);k(this,Ca,t),k(this,mc,t.length),p(this,go).clear();let i=R(this,I,oT).call(this,p(this,Ye).changed(e,...R(this,I,oo).call(this),n)),r=new Set(e.map(([h,f])=>`${h},${f}`)),o=new Map([...r].map(h=>[h,p(this,uc).get(h)??0]));p(this,uc).clear();let a=p(this,ho),l=p(this,fo);k(this,ho,new Map),k(this,fo,null),p(this,Is).forEach(({units:[h]})=>{h!==void 0&&l?.add(h.id)}),e.forEach(([h,f])=>R(this,I,Qi).call(this,h,f)),i.forEach(([h,f])=>{let d=`${h},${f}`;!n&&!r.has(d)&&p(this,_r).has(d)&&R(this,I,Qi).call(this,h,f)}),R(this,I,rT).call(this,e,i),i.forEach(([h,f])=>p(this,mo).delete(`${h},${f}`));let c=p(this,Us);c!==null&&c.open&&e.some(([h,f])=>h===c.x&&f===c.y)&&k(this,br,!0),(e.length>0||n)&&k(this,dc,!0),n&&(k(this,Bs,!0),p(this,_r).forEach((h,f)=>{let[d,m]=f.split(",").map(Number);R(this,I,Qi).call(this,d,m)})),l!==null&&R(this,I,sm).call(this)&&!(n&&r.size*2>=t.length)&&R(this,I,WE).call(this,a,l),e.length>0&&R(this,I,ZE).call(this,o)},"#takeTiles"),Qi=u(function(e,t){let n=`${e},${t}`,i=this.world.get(e,t),r=p(this,Jt).awaitingBlow({x:e,y:t}),o=r===null?void 0:p(this,mi).get(r.id),a=o===void 0?i.units:[...o.units,...i.units.filter(({id:v})=>!o.units.some(S=>S.id===v))];i.units.filter(({id:v})=>R(this,I,so).call(this,v)&&!p(this,Li).has(v)).forEach(v=>{let S=p(this,wa).get(v.id)??new Set;S.add(n),p(this,wa).set(v.id,S),p(this,Pi).set(v.id,v)});let c=a.filter(({id:v})=>!R(this,I,so).call(this,v)),h=o===void 0?i.city:o.city,f=i_(o===void 0&&c.length===i.units.length?i:{city:h,units:c},p(this,Ni),p(this,Oi),p(this,ac),v=>p(this,Ci).get(v.id)??0,p(this,xo),p(this,Lh)),d=f?.city&&R(this,I,iT).call(this,n,i,h)!==null?{...f,city:{...f.city,unnamed:!0}}:f;h||(p(this,es).delete(n),p(this,mo).delete(n)),R(this,I,VE).call(this,n,c,{shown:d?.unit?.id??null,ringed:d?.unit?.active===!0,inCity:(d?.unit??null)!==null&&d?.inCity===!0});let[m,g]=p(this,Ye).layout.centre(e,t),_=[m,Math.max(0,p(this,Ye).surfaceAt(m,g)),g],x=d===null?null:JSON.stringify([d,_]);x!==(p(this,_r).get(n)??null)&&(p(this,xt).setMarker(n,_,d),R(this,I,lT).call(this,n,x))},"#mark"),iT=u(function(e,t,n){if(p(this,Di)===null||!n)return null;let i=R(this,I,cm).call(this),r={...t,city:n},o=p(this,es).get(e),a="!",l=null;try{if(a=String(p(this,Di).key(r)),o?.signature===a)return o.banner;l=p(this,Di).paint(r,i)}catch(c){p(this,Rh)||(k(this,Rh,!0),console.error(c))}return p(this,es).set(e,{signature:a,banner:l}),l},"#bannerOf"),cm=u(function(){return(p(this,Ch)??(window.devicePixelRatio||1))*(p(this,ks).zoom()/p(this,ks).scale())},"#bannerDensity"),sT=u(function(e){let t=p(this,mo).get(e);if(t===void 0){let[n,i]=e.split(",").map(Number),[r,o]=p(this,Ye).layout.centre(n,i),a=u((l,c)=>Math.max(0,p(this,Ye).surfaceAt(l,c)),"up");t={key:e,centre:[r,a(r,o),o],outline:p(this,Ye).layout.outline(n,i).map(([l,c])=>[l,a(l,c),c])},p(this,mo).set(e,t)}return t},"#bannerSiteOf"),um=u(function(){return`${p(this,ks).id()} ${p(this,ks).scale()} ${R(this,I,cm).call(this)}`},"#bannersFor"),W_=u(function(){R(this,I,X_).call(this),R(this,I,Yt).call(this)},"#paintBannersAgain"),X_=u(function(){k(this,pc,R(this,I,um).call(this)),p(this,es).clear(),R(this,I,va).call(this),k(this,br,!0)},"#repaintBanners"),q_=u(function(){let e=p(this,Fs);if(e===null||p(this,Di)===null)return;R(this,I,um).call(this)!==p(this,pc)&&R(this,I,X_).call(this);let t=e.getContext("2d");if(k(this,Aa,[]),t===null||(p(this,fc)&&(t.clearRect(0,0,e.width,e.height),k(this,fc,!1)),!p(this,Oi)||p(this,bo)&&p(this,Di).giveWayToYields))return;let n=p(this,kt).clientWidth,i=p(this,kt).clientHeight,r=e.width/Math.max(1,n),o=[];if(n<=0||i<=0)return;let a=0;p(this,es).forEach(({banner:c},h)=>{c!==null&&(a=Math.max(a,c.width/r),o.push(R(this,I,sT).call(this,h)))});let l=Math.round(p(this,ks).scale()*R(this,I,cm).call(this));RE(o,{orbit:p(this,bt),look:p(this,Bn)??0,width:n,height:i,period:R(this,I,Cs).call(this),reach:a}).forEach(({key:c,x:h,y:f,clear:d})=>{let m=p(this,es).get(c)?.banner;if(m){let g=Math.round(h*r-m.centre),_=Math.round(f*r)+l;t.globalAlpha=d,t.drawImage(m.image,g,_),k(this,fc,!0),d>=YN&&p(this,Aa).push({key:c,left:g/r,top:_/r,right:(g+m.width)/r,bottom:(_+m.height)/r})}}),t.globalAlpha=1},"#drawBanners"),rT=u(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,i])=>p(this,Ia).delete(`${n},${i}`)),t.forEach(([n,i])=>p(this,Ia).delete(`${n},${i}`)),k(this,Bs,!0))},"#yieldsChanged"),oT=u(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([i,r])=>{n.set(`${i},${r}`,[i,r]),t.directions().forEach(o=>{let a=t.neighbour(i,r,o);a!==null&&n.set(`${a[0]},${a[1]}`,a)})}),[...n.values()]},"#besides"),aT=u(function(){if(!p(this,bo)){p(this,Pa)&&(p(this,xt).setYields(null),k(this,Pa,!1));return}if(!p(this,Bs)&&p(this,Pa))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,i=SE(t,wE(t)),r=p(this,Ia).get(n);if(r===void 0||r.of!==i){let[o,a]=p(this,Ye).layout.centre(t.x,t.y);r={of:i,laid:i.length===0?null:TE({at:[o,Math.max(0,p(this,Ye).surfaceAt(o,a)),a],yields:i},p(this,Dh))},p(this,Ia).set(n,r)}r.laid!==null&&e.push(r.laid)}),p(this,xt).setYields(AE(e)),k(this,Bs,!1),k(this,Pa,!0)},"#showYields"),lT=u(function(e,t){t===null?p(this,_r).delete(e):p(this,_r).set(e,t)},"#remember"),va=u(function(){let e=new Set([...p(this,_r).keys(),...p(this,es).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,i]=t.split(",").map(Number);R(this,I,Qi).call(this,n,i)})},"#markAll"),Y_=u(function(e){let t=performance.now(),n=R(this,I,tT).call(this,t),[i,r]=R(this,I,oo).call(this);p(this,xc)&&(k(this,xc,!1),R(this,I,va).call(this)),R(this,I,H_).call(this),R(this,I,UE).call(this,t),R(this,I,FE).call(this,t),R(this,I,BE).call(this,t),R(this,I,XE).call(this,t),`${i},${r}`!==p(this,_h)&&(k(this,_h,`${i},${r}`),p(this,Ye).refocus(i,r)),p(this,Ye).build(p(this,xt),e);let o=R(this,I,nT).call(this,e!==null);R(this,I,aT).call(this),p(this,xt).view(p(this,bt),p(this,Bn)??0,R(this,I,Cs).call(this)),p(this,xt).render(),R(this,I,q_).call(this),p(this,br)&&(k(this,br,!1),p(this,Us)?.open&&R(this,I,G_).call(this,p(this,Us))),R(this,I,cT).call(this),R(this,I,$_).call(this),k(this,yh,performance.now()-t),k(this,wh,!0),R(this,I,dT).call(this),(p(this,Ye).pending()>0||p(this,Ye).overlaysPending()>0||p(this,pn).size()>0||p(this,Jt).size()>0||p(this,pi).size()>0||p(this,uo).size()>0||n||o)&&R(this,I,Yt).call(this)},"#frameDrawn"),cT=u(function(){let e=p(this,hc);if(e===null)return;p(this,dc)&&(k(this,dc,!1),e.redraw());let t=R(this,I,ya).call(this)?p(this,Ns):p(this,ts)?.tile??null;e.show(R(this,I,uT).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),uT=u(function(){let e=p(this,kt).clientWidth,t=p(this,kt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,i=p(this,Bn)??0,r=cr(p(this,bt).distance,R(this,I,Cs).call(this)).far,[o,a]=p(this,bt).focus,l=u((h,f)=>{for(let d=f;d>=-1;d-=.05){let m=aa(p(this,bt),i,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-o,m[1]-a),_=g>r?r/g:1;return[o+(m[0]-o)*_,a+(m[1]-a)*_]}}return null},"corner"),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return c.every(h=>h!==null)?c:null},"#patch"),$_=u(function(e=!1){let t=(e?p(this,Ot)?.to??p(this,bt):p(this,bt)).distance,n=u(()=>{p(this,ao)!==null&&clearTimeout(p(this,ao)),k(this,ao,null),k(this,oc,null)},"stop"),i=u(()=>{n(),k(this,Sa,t),p(this,vh).set(t)},"keep");if(e){n(),t!==p(this,Sa)&&i();return}if(p(this,Ot)!==null||t===p(this,Sa)){n();return}p(this,ao)!==null&&t===p(this,oc)||(n(),k(this,oc,t),k(this,ao,setTimeout(i,WN)))},"#keepDistance"),Yt=u(function(){if(!p(this,Mr)){if(typeof requestAnimationFrame!="function"){R(this,I,Y_).call(this,null);return}p(this,vr)===null&&k(this,vr,requestAnimationFrame(()=>{k(this,vr,null),R(this,I,Y_).call(this,BN)}))}},"#draw"),hT=u(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),dT=u(function(){if(p(this,Ma)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,xt).stats();p(this,Ma).textContent=[`frame ${p(this,yh).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,Ye).pending()}`].join(`
`)},"#showStats"),K_=u(function(){let e=p(this,kt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,i=window.devicePixelRatio||1,r=`${t}\xD7${n}@${i}`;t===0||n===0||r===p(this,Uh)||(k(this,Uh,r),p(this,xt).resize(t,n,i),p(this,Fs)!==null&&(Object.assign(p(this,Fs).style,{height:`${n}px`,left:`${p(this,kt).offsetLeft||0}px`,top:`${p(this,kt).offsetTop||0}px`,width:`${t}px`}),p(this,Fs).width=Math.round(t*i),p(this,Fs).height=Math.round(n*i),k(this,Ch,i)),this.measureCovered(),p(this,xt).render(),R(this,I,q_).call(this))},"#resize"),u(Z_,"MapView3D");var C_=Z_,fT=C_;var $N={createMapView3D:u(s=>new fT(s),"createMapView3D")};globalThis[cv]=$N;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=map3d.js.map
