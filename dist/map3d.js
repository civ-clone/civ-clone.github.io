"use strict";(()=>{var FT=Object.create;var Mm=Object.defineProperty;var BT=Object.getOwnPropertyDescriptor;var kT=Object.getOwnPropertyNames;var zT=Object.getPrototypeOf,GT=Object.prototype.hasOwnProperty;var xv=r=>{throw TypeError(r)};var u=(r,e)=>Mm(r,"name",{value:e,configurable:!0});var VT=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var HT=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of kT(e))!GT.call(r,i)&&i!==t&&Mm(r,i,{get:()=>e[i],enumerable:!(n=BT(e,i))||n.enumerable});return r};var WT=(r,e,t)=>(t=r!=null?FT(zT(r)):{},HT(e||!r||!r.__esModule?Mm(t,"default",{value:r,enumerable:!0}):t,r));var Sm=(r,e,t)=>e.has(r)||xv("Cannot "+t);var p=(r,e,t)=>(Sm(r,e,"read from private field"),t?t.call(r):e.get(r)),G=(r,e,t)=>e.has(r)?xv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),k=(r,e,t,n)=>(Sm(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),A=(r,e,t)=>(Sm(r,e,"access private method"),t);var Bi=(r,e,t,n)=>({set _(i){k(r,e,i,t)},get _(){return p(r,e,n)}});var yv=VT(Eo=>{"use strict";var ir,Ts=Eo&&Eo.__classPrivateFieldGet||function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)};Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.EventEmitter=void 0;var wm=class wm{constructor(){ir.set(this,{})}on(e,t){e in Ts(this,ir,"f")||(Ts(this,ir,"f")[e]=[]),Ts(this,ir,"f")[e].push(t)}once(e,t){let n=u((...i)=>{t(...i),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Ts(this,ir,"f")))return;let n=Ts(this,ir,"f")[e].indexOf(t);n!==-1&&Ts(this,ir,"f")[e].splice(n,1)}emit(e,...t){e in Ts(this,ir,"f")&&Ts(this,ir,"f")[e].forEach((n=>n(...t)))}};u(wm,"i");var qh=wm;Eo.EventEmitter=qh,ir=new WeakMap,Eo.default=qh});var bv="civMap3D";var _v=WT(yv());var rr,sr,Ua,Tm=class Tm extends _v.EventEmitter{constructor(t,n){super();G(this,rr);G(this,sr);G(this,Ua);k(this,sr,t),k(this,Ua,t.lockVerticalEdges),k(this,rr,n)}center(){return p(this,rr).centre()}isVisible(t,n,i=0){return p(this,rr).visible(t,n,i)}lockVerticalEdges(){return p(this,Ua)}nativeTileSize(){return p(this,sr).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,sr);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,sr).playerId}render(){p(this,rr).changed()}scale(){return p(this,sr).art.scale()}setCenter(t,n){p(this,rr).centreOn(t,n)}setLockVerticalEdges(t){k(this,Ua,t),p(this,rr).changed()}setZoom(){p(this,rr).changed()}transport(){return p(this,sr).transport}zoom(){return p(this,sr).art.zoom()}};rr=new WeakMap,sr=new WeakMap,Ua=new WeakMap,u(Tm,"MapPortal3D");var Em=Tm,vv=Em;var XT=u((r,e)=>{let[t,n]=r.centre(0,0);return Object.fromEntries(e.directions().map(i=>{let[s,o]=e.offset(i,0,0),[a,l]=r.centre(s,o);return[i,[a-t,l-n]]}))},"groundDirections"),Mv=XT;var fM=0,l0=1,pM=2;var xu=1,pf=2,_l=3,vi=0,Un=1,tn=2,Wo=0,vl=1,c0=2,u0=3,h0=4,mM=5;var Xo=100,gM=101,xM=102,bM=103,yM=104,_M=200,vM=201,MM=202,SM=203,d0=204,f0=205,wM=206,EM=207,TM=208,AM=209,RM=210,CM=211,PM=212,IM=213,LM=214,Sd=0,wd=1,Ed=2,rl=3,Td=4,Ad=5,Rd=6,Cd=7,p0=0,NM=1,DM=2,fr=0,m0=1,g0=2,x0=3,bu=4,b0=5,y0=6,_0=7,jm="attached",OM="detached",v0=300,qo=301,Ml=302,mf=303,gf=304,Hn=1e3,Vn=1001,sl=1002,Ht=1003,xf=1004;var Yo=1005;var kt=1006,Sl=1007;var Sn=1008;var wn=1009,M0=1010,S0=1011,wl=1012,bf=1013,Hi=1014,ii=1015,ri=1016,yf=1017,_f=1018,$o=1020,w0=35902,E0=35899,T0=1021,A0=1022,qn=1023,Jr=1026,as=1027,vf=1028,Mf=1029,pr=1030,Sf=1031;var wf=1033,yu=33776,_u=33777,vu=33778,Mu=33779,Ef=35840,Tf=35841,Af=35842,Rf=35843,Cf=36196,Pf=37492,If=37496,Lf=37488,Nf=37489,Su=37490,Df=37491,Of=37808,Uf=37809,Ff=37810,Bf=37811,kf=37812,zf=37813,Gf=37814,Vf=37815,Hf=37816,Wf=37817,Xf=37818,qf=37819,Yf=37820,$f=37821,Kf=36492,Zf=36494,Jf=36495,jf=36283,Qf=36284,wu=36285,ep=36286,UM=2200,tp=2201,FM=2202,No=2300,Do=2301,vd=2302,Qm=2303,Po=2400,Io=2401,Xc=2402,np=2500,BM=2501,R0=0,Eu=1,El=2,kM=3200;var ip=0,zM=1,Wi="",Lt="srgb",Ln="srgb-linear",qc="linear",vt="srgb";var Md=7680;var GM=519,VM=512,HM=513,WM=514,C0=515,XM=516,qM=517,P0=518,I0=519,L0=35044;var N0="300 es",yi=2e3,ol=2001;function qT(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}u(qT,"arrayNeedsUint32");function YT(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}u(YT,"isTypedArray");function al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}u(al,"createElementNS");function YM(){let r=al("canvas");return r.style.display="block",r}u(YM,"createCanvasElement");var Sv={},ll=null;function Yc(...r){let e="THREE."+r.shift();ll?ll("log",e,...r):console.log(e,...r)}u(Yc,"log");function $M(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}u($M,"enhanceLogMessage");function We(...r){r=$M(r);let e="THREE."+r.shift();if(ll)ll("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}u(We,"warn");function Ze(...r){r=$M(r);let e="THREE."+r.shift();if(ll)ll("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}u(Ze,"error");function Lo(...r){let e=r.join(" ");e in Sv||(Sv[e]=!0,We(...r))}u(Lo,"warnOnce");function KM(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}u(s,"probe"),setTimeout(s,t)})}u(KM,"probeAsync");var ZM={[Sd]:Sd,[Ed]:Rd,[Td]:Td,[rl]:Ad,[wd]:wd,[Rd]:Ed,[Cd]:Cd,[Ad]:rl},V0=class V0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};u(V0,"EventDispatcher");var Vi=V0,yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wv=1234567,Vc=Math.PI/180,Oo=180/Math.PI;function mr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}u(mr,"generateUUID");function dt(r,e,t){return Math.max(e,Math.min(t,r))}u(dt,"clamp");function D0(r,e){return(r%e+e)%e}u(D0,"euclideanModulo");function $T(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}u($T,"mapLinear");function KT(r,e,t){return r!==e?(t-r)/(e-r):0}u(KT,"inverseLerp");function Hc(r,e,t){return(1-t)*r+t*e}u(Hc,"lerp");function ZT(r,e,t,n){return Hc(r,e,1-Math.exp(-t*n))}u(ZT,"damp");function JT(r,e=1){return e-Math.abs(D0(r,e*2)-e)}u(JT,"pingpong");function jT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}u(jT,"smoothstep");function QT(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}u(QT,"smootherstep");function eA(r,e){return r+Math.floor(Math.random()*(e-r+1))}u(eA,"randInt");function tA(r,e){return r+Math.random()*(e-r)}u(tA,"randFloat");function nA(r){return r*(.5-Math.random())}u(nA,"randFloatSpread");function iA(r){r!==void 0&&(wv=r);let e=wv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(iA,"seededRandom");function rA(r){return r*Vc}u(rA,"degToRad");function sA(r){return r*Oo}u(sA,"radToDeg");function oA(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}u(oA,"isPowerOfTwo");function aA(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}u(aA,"ceilPowerOfTwo");function O0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}u(O0,"floorPowerOfTwo");function lA(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*h,a*c);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(lA,"setQuaternionFromProperEuler");function rp(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}u(rp,"getNormalizationScale");function U0(r,e){if(e.constructor===Float32Array)return r;let t=rp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}u(U0,"denormalize");function F0(r,e){if(e.constructor===Float32Array)return r;let t=rp(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}u(F0,"normalize");var sp={DEG2RAD:Vc,RAD2DEG:Oo,generateUUID:mr,clamp:dt,euclideanModulo:D0,mapLinear:$T,inverseLerp:KT,lerp:Hc,damp:ZT,pingpong:JT,smoothstep:jT,smootherstep:QT,randInt:eA,randFloat:tA,randFloatSpread:nA,seededRandom:iA,degToRad:rA,radToDeg:sA,isPowerOfTwo:oA,ceilPowerOfTwo:aA,floorPowerOfTwo:O0,setQuaternionFromProperEuler:lA,normalize:F0,denormalize:U0},$d=class $d{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u($d,"Vector2"),$d.prototype.isVector2=!0;var He=$d,H0=class H0{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(f!==_||l!==d||c!==m||h!==g){let x=l*d+c*m+h*g+f*_;x<0&&(d=-d,m=-m,g=-g,_=-_,x=-x);let b=1-a;if(x<.9995){let v=Math.acos(x),w=Math.sin(v);b=Math.sin(b*v)/w,a=Math.sin(a*v)/w,l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a}else{l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-a*m,e[t+2]=c*g+h*m+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(H0,"Quaternion");var $t=H0,Kd=class Kd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ev.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Am.copy(this).projectOnVector(e),this.sub(Am)}reflect(e){return this.sub(Am.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(Kd,"Vector3"),Kd.prototype.isVector3=!0;var H=Kd,Am=new H,Ev=new $t,Zd=class Zd{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=i[0],x=i[3],b=i[6],v=i[1],w=i[4],M=i[7],R=i[2],E=i[5],y=i[8];return s[0]=o*_+a*v+l*R,s[3]=o*x+a*w+l*E,s[6]=o*b+a*M+l*y,s[1]=c*_+h*v+f*R,s[4]=c*x+h*w+f*E,s[7]=c*b+h*M+f*y,s[2]=d*_+m*v+g*R,s[5]=d*x+m*w+g*E,s[8]=d*b+m*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rm.makeScale(e,t)),this}rotate(e){return Lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rm.makeRotation(-e)),this}translate(e,t){return Lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(Zd,"Matrix3"),Zd.prototype.isMatrix3=!0;var Je=Zd,Rm=new Je,Tv=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Av=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cA(){let r={enabled:!0,workingColorSpace:Ln,spaces:{},convert:u(function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(i.r=Zr(i.r),i.g=Zr(i.g),i.b=Zr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=il(i.r),i.g=il(i.g),i.b=il(i.b))),i},"convert"),workingToColorSpace:u(function(i,s){return this.convert(i,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:u(function(i,s){return this.convert(i,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:u(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:u(function(i){return i===Wi?qc:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:u(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:u(function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:u(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:u(function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:u(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:u(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ln]:{primaries:e,whitePoint:n,transfer:qc,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Tv,fromXYZ:Av,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}u(cA,"createColorManagement");var lt=cA();function Zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}u(Zr,"SRGBToLinear");function il(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}u(il,"LinearToSRGB");var Fa,W0=class W0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fa===void 0&&(Fa=al("canvas")),Fa.width=e.width,Fa.height=e.height;let i=Fa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=al("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zr(t[n]/255)*255):t[n]=Zr(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(W0,"ImageUtils");var Pd=W0,uA=0,X0=class X0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Cm(i[o].image)):s.push(Cm(i[o]))}else s=Cm(i);n.url=s}return t||(e.images[this.uuid]=n),n}};u(X0,"TextureSource");var cl=X0;function Cm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}u(Cm,"serializeImage");var hA=0,Pm=new H,tl=class tl extends Vi{constructor(e=tl.DEFAULT_IMAGE,t=tl.DEFAULT_MAPPING,n=Vn,i=Vn,s=kt,o=Sn,a=qn,l=wn,c=tl.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=mr(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pm).x}get height(){return this.source.getSize(Pm).y}get depth(){return this.source.getSize(Pm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u(tl,"Texture");var Qt=tl;Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=v0;Qt.DEFAULT_ANISOTROPY=1;var Jd=class Jd{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],x=l[6],b=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(m+1)/2,R=(b+1)/2,E=(h+d)/4,y=(f+_)/4,S=(g+x)/4;return w>M&&w>R?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=y/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=S/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=y/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(Jd,"Vector4"),Jd.prototype.isVector4=!0;var St=Jd,q0=class q0 extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Qt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(q0,"RenderTarget");var Id=q0,Y0=class Y0 extends Id{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};u(Y0,"WebGLRenderTarget");var ei=Y0,$0=class $0 extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u($0,"DataArrayTexture");var Uo=$0;var K0=class K0 extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};u(K0,"Data3DTexture");var Ld=K0;var Wc=class Wc{constructor(e,t,n,i,s,o,a,l,c,h,f,d,m,g,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,m,g,_,x)}set(e,t,n,i,s,o,a,l,c,h,f,d,m,g,_,x){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=s,b[5]=o,b[9]=a,b[13]=l,b[2]=c,b[6]=h,b[10]=f,b[14]=d,b[3]=m,b[7]=g,b[11]=_,b[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ba.setFromMatrixColumn(e,0).length(),s=1/Ba.setFromMatrixColumn(e,1).length(),o=1/Ba.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dA,e,fA)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),As.crossVectors(n,jn),As.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),As.crossVectors(n,jn)),As.normalize(),Yh.crossVectors(jn,As),i[0]=As.x,i[4]=Yh.x,i[8]=jn.x,i[1]=As.y,i[5]=Yh.y,i[9]=jn.y,i[2]=As.z,i[6]=Yh.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],x=n[10],b=n[14],v=n[3],w=n[7],M=n[11],R=n[15],E=i[0],y=i[4],S=i[8],L=i[12],I=i[1],O=i[5],F=i[9],W=i[13],U=i[2],q=i[6],te=i[10],z=i[14],Z=i[3],X=i[7],j=i[11],ie=i[15];return s[0]=o*E+a*I+l*U+c*Z,s[4]=o*y+a*O+l*q+c*X,s[8]=o*S+a*F+l*te+c*j,s[12]=o*L+a*W+l*z+c*ie,s[1]=h*E+f*I+d*U+m*Z,s[5]=h*y+f*O+d*q+m*X,s[9]=h*S+f*F+d*te+m*j,s[13]=h*L+f*W+d*z+m*ie,s[2]=g*E+_*I+x*U+b*Z,s[6]=g*y+_*O+x*q+b*X,s[10]=g*S+_*F+x*te+b*j,s[14]=g*L+_*W+x*z+b*ie,s[3]=v*E+w*I+M*U+R*Z,s[7]=v*y+w*O+M*q+R*X,s[11]=v*S+w*F+M*te+R*j,s[15]=v*L+w*W+M*z+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],x=e[11],b=e[15],v=l*m-c*d,w=a*m-c*f,M=a*d-l*f,R=o*m-c*h,E=o*d-l*h,y=o*f-a*h;return t*(_*v-x*w+b*M)-n*(g*v-x*R+b*E)+i*(g*w-_*R+b*y)-s*(g*M-_*E+x*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],x=e[14],b=e[15],v=t*a-n*o,w=t*l-i*o,M=t*c-s*o,R=n*l-i*a,E=n*c-s*a,y=i*c-s*l,S=h*_-f*g,L=h*x-d*g,I=h*b-m*g,O=f*x-d*_,F=f*b-m*_,W=d*b-m*x,U=v*W-w*F+M*O+R*I-E*L+y*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/U;return e[0]=(a*W-l*F+c*O)*q,e[1]=(i*F-n*W-s*O)*q,e[2]=(_*y-x*E+b*R)*q,e[3]=(d*E-f*y-m*R)*q,e[4]=(l*I-o*W-c*L)*q,e[5]=(t*W-i*I+s*L)*q,e[6]=(x*M-g*y-b*w)*q,e[7]=(h*y-d*M+m*w)*q,e[8]=(o*F-a*I+c*S)*q,e[9]=(n*I-t*F-s*S)*q,e[10]=(g*E-_*M+b*v)*q,e[11]=(f*M-h*E-m*v)*q,e[12]=(a*L-o*O-l*S)*q,e[13]=(t*O-n*L+i*S)*q,e[14]=(_*w-g*R-x*v)*q,e[15]=(h*R-f*w+d*v)*q,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,g=s*f,_=o*h,x=o*f,b=a*f,v=l*c,w=l*h,M=l*f,R=n.x,E=n.y,y=n.z;return i[0]=(1-(_+b))*R,i[1]=(m+M)*R,i[2]=(g-w)*R,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+b))*E,i[6]=(x+v)*E,i[7]=0,i[8]=(g+w)*y,i[9]=(x-v)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Ba.set(i[0],i[1],i[2]).length(),a=Ba.set(i[4],i[5],i[6]).length(),l=Ba.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ki.copy(this);let c=1/o,h=1/a,f=1/l;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=f,ki.elements[9]*=f,ki.elements[10]*=f,t.setFromRotationMatrix(ki),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=yi,l=!1){let c=this.elements,h=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===yi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ol)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=yi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===yi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ol)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};u(Wc,"Matrix4"),Wc.prototype.isMatrix4=!0;var Ke=Wc,Ba=new H,ki=new Ke,dA=new H(0,0,0),fA=new H(1,1,1),As=new H,Yh=new H,jn=new H,Rv=new Ke,Cv=new $t,jd=class jd{constructor(e=0,t=0,n=0,i=jd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cv.setFromEuler(this),this.setFromQuaternion(Cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(jd,"Euler");var ti=jd;ti.DEFAULT_ORDER="XYZ";var Z0=class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(Z0,"Layers");var ul=Z0,pA=0,Pv=new H,ka=new $t,Vr=new Ke,$h=new H,Pc=new H,mA=new H,gA=new $t,Iv=new H(1,0,0),Lv=new H(0,1,0),Nv=new H(0,0,1),Dv={type:"added"},xA={type:"removed"},za={type:"childadded",child:null},Im={type:"childremoved",child:null},nl=class nl extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nl.DEFAULT_UP.clone();let e=new H,t=new ti,n=new $t,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}u(s,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Je}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=nl.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nl.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.multiply(ka),this}rotateOnWorldAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.premultiply(ka),this}rotateX(e){return this.rotateOnAxis(Iv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,t){return Pv.copy(e).applyQuaternion(this.quaternion),this.position.add(Pv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$h.copy(e):$h.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(Pc,$h,this.up):Vr.lookAt($h,Pc,this.up),this.quaternion.setFromRotationMatrix(Vr),i&&(Vr.extractRotation(i.matrixWorld),ka.setFromRotationMatrix(Vr),this.quaternion.premultiply(ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),za.child=e,this.dispatchEvent(za),za.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xA),Im.child=e,this.dispatchEvent(Im),Im.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pc,e,mA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pc,gA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(s,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};u(nl,"Object3D");var Ot=nl;Ot.DEFAULT_UP=new H(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var J0=class J0 extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(J0,"Group");var Vt=J0,bA={type:"move"},j0=class j0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n),b=this._getHandJoint(c,_);x!==null&&(b.matrix.fromArray(x.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=x.radius),b.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bA)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};u(j0,"WebXRController");var hl=j0,JM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Kh={h:0,s:0,l:0};function Lm(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}u(Lm,"hue2rgb");var Q0=class Q0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=D0(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lm(o,s,e+1/3),this.g=Lm(o,s,e),this.b=Lm(o,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=JM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=il(e.r),this.g=il(e.g),this.b=il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return lt.workingToColorSpace(_n.copy(this),e),Math.round(dt(_n.r*255,0,255))*65536+Math.round(dt(_n.g*255,0,255))*256+Math.round(dt(_n.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Lt){lt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(Kh);let n=Hc(Rs.h,Kh.h,t),i=Hc(Rs.s,Kh.s,t),s=Hc(Rs.l,Kh.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(Q0,"Color");var Pe=Q0,_n=new Pe;Pe.NAMES=JM;var Qd=class Qd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new Qd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(Qd,"Fog");var $c=Qd,eg=class eg extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(eg,"Scene");var Kc=eg,zi=new H,Hr=new H,Nm=new H,Wr=new H,Ga=new H,Va=new H,Ov=new H,Dm=new H,Om=new H,Um=new H,Fm=new St,Bm=new St,km=new St,Ns=class Ns{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zi.subVectors(e,t),i.cross(zi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){zi.subVectors(i,t),Hr.subVectors(n,t),Nm.subVectors(e,t);let o=zi.dot(zi),a=zi.dot(Hr),l=zi.dot(Nm),c=Hr.dot(Hr),h=Hr.dot(Nm),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wr)===null?!1:Wr.x>=0&&Wr.y>=0&&Wr.x+Wr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wr.x),l.addScaledVector(o,Wr.y),l.addScaledVector(a,Wr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Fm.setScalar(0),Bm.setScalar(0),km.setScalar(0),Fm.fromBufferAttribute(e,t),Bm.fromBufferAttribute(e,n),km.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fm,s.x),o.addScaledVector(Bm,s.y),o.addScaledVector(km,s.z),o}static isFrontFacing(e,t,n,i){return zi.subVectors(n,t),Hr.subVectors(e,t),zi.cross(Hr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Hr.subVectors(this.a,this.b),zi.cross(Hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ns.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ns.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ns.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ns.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ns.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ga.subVectors(i,n),Va.subVectors(s,n),Dm.subVectors(e,n);let l=Ga.dot(Dm),c=Va.dot(Dm);if(l<=0&&c<=0)return t.copy(n);Om.subVectors(e,i);let h=Ga.dot(Om),f=Va.dot(Om);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ga,o);Um.subVectors(e,s);let m=Ga.dot(Um),g=Va.dot(Um);if(g>=0&&m<=g)return t.copy(s);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Va,a);let x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return Ov.subVectors(s,i),a=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(Ov,a);let b=1/(x+_+d);return o=_*b,a=d*b,t.copy(n).addScaledVector(Ga,o).addScaledVector(Va,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Ns,"Triangle");var $r=Ns,tg=class tg{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gi):Gi.fromBufferAttribute(s,o),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zh.copy(n.boundingBox)),Zh.applyMatrix4(e.matrixWorld),this.union(Zh)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ic),Jh.subVectors(this.max,Ic),Ha.subVectors(e.a,Ic),Wa.subVectors(e.b,Ic),Xa.subVectors(e.c,Ic),Cs.subVectors(Wa,Ha),Ps.subVectors(Xa,Wa),To.subVectors(Ha,Xa);let t=[0,-Cs.z,Cs.y,0,-Ps.z,Ps.y,0,-To.z,To.y,Cs.z,0,-Cs.x,Ps.z,0,-Ps.x,To.z,0,-To.x,-Cs.y,Cs.x,0,-Ps.y,Ps.x,0,-To.y,To.x,0];return!zm(t,Ha,Wa,Xa,Jh)||(t=[1,0,0,0,1,0,0,0,1],!zm(t,Ha,Wa,Xa,Jh))?!1:(jh.crossVectors(Cs,Ps),t=[jh.x,jh.y,jh.z],zm(t,Ha,Wa,Xa,Jh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};u(tg,"Box3");var vn=tg,Xr=[new H,new H,new H,new H,new H,new H,new H,new H],Gi=new H,Zh=new vn,Ha=new H,Wa=new H,Xa=new H,Cs=new H,Ps=new H,To=new H,Ic=new H,Jh=new H,jh=new H,Ao=new H;function zm(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ao.fromArray(r,s);let a=i.x*Math.abs(Ao.x)+i.y*Math.abs(Ao.y)+i.z*Math.abs(Ao.z),l=e.dot(Ao),c=t.dot(Ao),h=n.dot(Ao);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(zm,"satForAxes");var Kr=yA();function yA(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}u(yA,"_generateTables");function _A(r){Math.abs(r)>65504&&We("DataUtils.toHalfFloat(): Value out of range."),r=dt(r,-65504,65504),Kr.floatView[0]=r;let e=Kr.uint32View[0],t=e>>23&511;return Kr.baseTable[t]+((e&8388607)>>Kr.shiftTable[t])}u(_A,"toHalfFloat");function vA(r){let e=r>>10;return Kr.uint32View[0]=Kr.mantissaTable[Kr.offsetTable[e]+(r&1023)]+Kr.exponentTable[e],Kr.floatView[0]}u(vA,"fromHalfFloat");var ng=class ng{static toHalfFloat(e){return _A(e)}static fromHalfFloat(e){return vA(e)}};u(ng,"DataUtils");var lr=ng,Zt=new H,Qh=new He,MA=0,ig=class ig extends Vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=L0,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?rp(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qh.fromBufferAttribute(this,t),Qh.applyMatrix3(e),this.setXY(t,Qh.x,Qh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):U0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):F0(e,this.array)}};u(ig,"BufferAttribute");var bt=ig;var rg=class rg extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};u(rg,"Uint16BufferAttribute");var Zc=rg;var sg=class sg extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};u(sg,"Uint32BufferAttribute");var Jc=sg;var og=class og extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};u(og,"Float32BufferAttribute");var Ct=og,SA=new vn,Lc=new H,Gm=new H,ag=class ag{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):SA.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lc.subVectors(e,this.center);let t=Lc.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lc,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lc.copy(e.center).add(Gm)),this.expandByPoint(Lc.copy(e.center).sub(Gm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};u(ag,"Sphere");var Mn=ag,wA=0,bi=new Ke,Vm=new Ot,qa=new H,Qn=new vn,Nc=new vn,cn=new H,ef=class ef extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qT(e)?Jc:Zc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return Vm.lookAt(e),Vm.updateMatrix(),this.applyMatrix4(Vm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qa).negate(),this.translate(qa.x,qa.y,qa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Nc.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Qn.min,Nc.min),Qn.expandByPoint(cn),cn.addVectors(Qn.max,Nc.max),Qn.expandByPoint(cn)):(Qn.expandByPoint(Nc.min),Qn.expandByPoint(Nc.max))}Qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(qa.fromBufferAttribute(e,c),cn.add(qa)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new H,l[L]=new H;let h=new H,f=new H,d=new H,m=new He,g=new He,_=new He,x=new H,b=new H;function v(L,I,O){c[L]=c[I]=c[O]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,O),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,I),_.fromBufferAttribute(s,O),f.sub(h),d.sub(h),g.sub(m),_.sub(m);let F=1/(g.x*_.y-_.x*g.y);isFinite(F)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(F),b.copy(d).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(F),a[L].add(x),a[I].add(x),a[O].add(x),l[L].add(b),l[I].add(b),l[O].add(b))}u(v,"handleTriangle");let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,I=w.length;L<I;++L){let O=w[L],F=O.start,W=O.count;for(let U=F,q=F+W;U<q;U+=3)v(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new H,R=new H,E=new H,y=new H;function S(L){E.fromBufferAttribute(i,L),y.copy(E);let I=a[L];M.copy(I),M.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(y,I);let F=R.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,F)}u(S,"handleVertex");for(let L=0,I=n.count;L<I;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,h=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let b=0;b<h;b++)d[g++]=c[m++]}return new bt(d,h,f)}if(u(e,"convertBufferAttribute"),this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ef,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(ef,"BufferGeometry");var wt=ef,lg=class lg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=L0,this.updateRanges=[],this.version=0,this.uuid=mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uv(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Uv(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};u(lg,"InterleavedBuffer");var Fo=lg;function Uv(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=mr()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}u(Uv,"getArrayKey");var In=new H,tf=class tf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?rp(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Yc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):U0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):F0(e,this.data.array)}};u(tf,"InterleavedBufferAttribute");var Os=tf,Hm=new H,EA=new H,TA=new Je,cg=class cg{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Hm.subVectors(n,t).cross(EA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Hm),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||TA.getNormalMatrix(e),i=this.coplanarPoint(Hm).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};u(cg,"Plane");var Gn=cg,AA=0,ug=class ug extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=vl,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=d0,this.blendDst=f0,this.blendEquation=Xo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=GM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Md,this.stencilZFail=Md,this.stencilZPass=Md,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};u(ug,"Material");var Nn=ug,hg=class hg extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(hg,"SpriteMaterial");var Us=hg,Ya,Dc=new H,$a=new H,Ka=new H,Za=new He,Oc=new He,jM=new Ke,ed=new H,Uc=new H,td=new H,Fv=new He,Wm=new He,Bv=new He,dg=class dg extends Ot{constructor(e=new Us){if(super(),this.isSprite=!0,this.type="Sprite",Ya===void 0){Ya=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fo(t,5);Ya.setIndex([0,1,2,0,2,3]),Ya.setAttribute("position",new Os(n,3,0,!1)),Ya.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=Ya,this.material=e,this.center=new He(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$a.setFromMatrixScale(this.matrixWorld),jM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ka.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$a.multiplyScalar(-Ka.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;nd(ed.set(-.5,-.5,0),Ka,o,$a,i,s),nd(Uc.set(.5,-.5,0),Ka,o,$a,i,s),nd(td.set(.5,.5,0),Ka,o,$a,i,s),Fv.set(0,0),Wm.set(1,0),Bv.set(1,1);let a=e.ray.intersectTriangle(ed,Uc,td,!1,Dc);if(a===null&&(nd(Uc.set(-.5,.5,0),Ka,o,$a,i,s),Wm.set(0,1),a=e.ray.intersectTriangle(ed,td,Uc,!1,Dc),a===null))return;let l=e.ray.origin.distanceTo(Dc);l<e.near||l>e.far||t.push({distance:l,point:Dc.clone(),uv:$r.getInterpolation(Dc,ed,Uc,td,Fv,Wm,Bv,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};u(dg,"Sprite");var jr=dg;function nd(r,e,t,n,i,s){Za.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Oc.x=s*Za.x-i*Za.y,Oc.y=i*Za.x+s*Za.y):Oc.copy(Za),r.copy(e),r.x+=Oc.x,r.y+=Oc.y,r.applyMatrix4(jM)}u(nd,"transformVertex");var qr=new H,Xm=new H,id=new H,rd=new H,fg=class fg{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xm.copy(e).add(t).multiplyScalar(.5),id.copy(t).sub(e).normalize(),rd.copy(this.origin).sub(Xm);let s=e.distanceTo(t)*.5,o=-this.direction.dot(id),a=rd.dot(this.direction),l=-rd.dot(id),c=rd.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Xm).addScaledVector(id,d),m}intersectSphere(e,t){if(e.radius<0)return null;qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),i=qr.dot(qr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,x=t.z-o.z,b=n.x-o.x,v=n.y-o.y,w=n.z-o.z,M=Math.abs(l),R=Math.abs(c),E=Math.abs(h),y,S,L,I,O,F,W,U,q,te,z,Z;if(M>=R&&M>=E?(L=l,F=f,q=g,Z=b,l>=0?(y=c,S=h,I=d,O=m,W=_,U=x,te=v,z=w):(y=h,S=c,I=m,O=d,W=x,U=_,te=w,z=v)):R>=E?(L=c,F=d,q=_,Z=v,c>=0?(y=h,S=l,I=m,O=f,W=x,U=g,te=w,z=b):(y=l,S=h,I=f,O=m,W=g,U=x,te=b,z=w)):(L=h,F=m,q=x,Z=w,h>=0?(y=l,S=c,I=f,O=d,W=g,U=_,te=b,z=v):(y=c,S=l,I=d,O=f,W=_,U=g,te=v,z=b)),L===0)return null;let X=y/L,j=S/L,ie=1/L,pe=I-X*F,ye=O-j*F,ne=W-X*q,me=U-j*q,he=te-X*Z,ge=z-j*Z,de=he*me-ge*ne,Fe=pe*ge-ye*he,Ye=ne*ye-me*pe;if(i){if(de<0||Fe<0||Ye<0)return null}else if((de<0||Fe<0||Ye<0)&&(de>0||Fe>0||Ye>0))return null;let De=de+Fe+Ye;if(De===0)return null;let rt=ie*(de*F+Fe*q+Ye*Z);return(De>0?rt<0:rt>0)?null:this.at(rt/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(fg,"Ray");var Fs=fg,pg=class pg extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(pg,"MeshBasicMaterial");var ni=pg,kv=new Ke,Ro=new Fs,sd=new Mn,zv=new H,od=new H,ad=new H,ld=new H,qm=new H,cd=new H,Gv=new H,ud=new H,mg=class mg extends Ot{constructor(e=new wt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){cd.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(qm.fromBufferAttribute(f,e),o?cd.addScaledVector(qm,h):cd.addScaledVector(qm.sub(t),h))}t.add(cd)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sd.copy(n.boundingSphere),sd.applyMatrix4(s),Ro.copy(e.ray).recast(e.near),!(sd.containsPoint(Ro.origin)===!1&&(Ro.intersectSphere(sd,zv)===null||Ro.origin.distanceToSquared(zv)>(e.far-e.near)**2))&&(kv.copy(s).invert(),Ro.copy(e.ray).applyMatrix4(kv),!(n.boundingBox!==null&&Ro.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ro)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),w=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,R=w;M<R;M+=3){let E=a.getX(M),y=a.getX(M+1),S=a.getX(M+2);i=hd(this,b,e,n,c,h,f,E,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=a.getX(x),w=a.getX(x+1),M=a.getX(x+2);i=hd(this,o,e,n,c,h,f,v,w,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),w=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,R=w;M<R;M+=3){let E=M,y=M+1,S=M+2;i=hd(this,b,e,n,c,h,f,E,y,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=x,w=x+1,M=x+2;i=hd(this,o,e,n,c,h,f,v,w,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};u(mg,"Mesh");var ct=mg;function RA(r,e,t,n,i,s,o,a){let l;if(e.side===Un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===vi,a),l===null)return null;ud.copy(a),ud.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ud);return c<t.near||c>t.far?null:{distance:c,point:ud.clone(),object:r}}u(RA,"checkIntersection$1");function hd(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,od),r.getVertexPosition(l,ad),r.getVertexPosition(c,ld);let h=RA(r,e,t,n,od,ad,ld,Gv);if(h){let f=new H;$r.getBarycoord(Gv,od,ad,ld,f),i&&(h.uv=$r.getInterpolatedAttribute(i,a,l,c,f,new He)),s&&(h.uv1=$r.getInterpolatedAttribute(s,a,l,c,f,new He)),o&&(h.normal=$r.getInterpolatedAttribute(o,a,l,c,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new H,materialIndex:0};$r.getNormal(od,ad,ld,d.normal),h.face=d,h.barycoord=f}return h}u(hd,"checkGeometryIntersection");var Fc=new St,Vv=new St,Hv=new St,CA=new St,Wv=new Ke,dd=new H,Ym=new Mn,Xv=new Ke,$m=new Fs,gg=class gg extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jm,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dd),this.boundingBox.expandByPoint(dd)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dd),this.boundingSphere.expandByPoint(dd)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ym.copy(this.boundingSphere),Ym.applyMatrix4(i),e.ray.intersectsSphere(Ym)!==!1&&(Xv.copy(i).invert(),$m.copy(e.ray).applyMatrix4(Xv),!(this.boundingBox!==null&&$m.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$m)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===OM?this.bindMatrixInverse.copy(this.bindMatrix).invert():We("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Vv.fromBufferAttribute(i.attributes.skinIndex,e),Hv.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Fc.copy(t),t.set(0,0,0,0)):(Fc.set(t.x,t.y,t.z,1),t.set(0,0,0)),Fc.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Hv.getComponent(s);if(o!==0){let a=Vv.getComponent(s);Wv.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(CA.copy(Fc).applyMatrix4(Wv),o)}}return t.isVector4&&(t.w=Fc.w),t.applyMatrix4(this.bindMatrixInverse)}};u(gg,"SkinnedMesh");var jc=gg,xg=class xg extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(xg,"Bone");var dl=xg,bg=class bg extends Qt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Ht,h=Ht,f,d){super(null,o,a,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(bg,"DataTexture");var Bs=bg,qv=new Ke,PA=new Ke,nf=class nf{constructor(e=[],t=[]){this.uuid=mr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){We("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:PA;qv.multiplyMatrices(a,t[s]),qv.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new nf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bs(t,e,e,qn,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(We("Skeleton: No bone found with UUID:",s),o=new dl),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};u(nf,"Skeleton");var Qc=nf,yg=class yg extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(yg,"InstancedBufferAttribute");var Wn=yg,Ja=new Ke,Yv=new Ke,fd=[],$v=new vn,IA=new Ke,Bc=new ct,kc=new Mn,_g=class _g extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,IA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ja),$v.copy(e.boundingBox).applyMatrix4(Ja),this.boundingBox.union($v)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ja),kc.copy(e.boundingSphere).applyMatrix4(Ja),this.boundingSphere.union(kc)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Bc.geometry=this.geometry,Bc.material=this.material,Bc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kc.copy(this.boundingSphere),kc.applyMatrix4(n),e.ray.intersectsSphere(kc)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ja),Yv.multiplyMatrices(n,Ja),Bc.matrixWorld=Yv,Bc.raycast(e,fd);for(let o=0,a=fd.length;o<a;o++){let l=fd[o];l.instanceId=s,l.object=this,t.push(l)}fd.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(i*this.count),i,this.count,vf,ii));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};u(_g,"InstancedMesh");var eu=_g,Co=new Mn,LA=new He(.5,.5),pd=new H,vg=class vg{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,s=new Gn,o=new Gn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],m=s[7],g=s[8],_=s[9],x=s[10],b=s[11],v=s[12],w=s[13],M=s[14],R=s[15];if(i[0].setComponents(c-o,m-h,b-g,R-v).normalize(),i[1].setComponents(c+o,m+h,b+g,R+v).normalize(),i[2].setComponents(c+a,m+f,b+_,R+w).normalize(),i[3].setComponents(c-a,m-f,b-_,R-w).normalize(),n)i[4].setComponents(l,d,x,M).normalize(),i[5].setComponents(c-l,m-d,b-x,R-M).normalize();else if(i[4].setComponents(c-l,m-d,b-x,R-M).normalize(),t===yi)i[5].setComponents(c+l,m+d,b+x,R+M).normalize();else if(t===ol)i[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Co.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Co.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Co)}intersectsSprite(e){Co.center.set(0,0,0);let t=LA.distanceTo(e.center);return Co.radius=.7071067811865476+t,Co.applyMatrix4(e.matrixWorld),this.intersectsSphere(Co)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(pd.x=i.normal.x>0?e.max.x:e.min.x,pd.y=i.normal.y>0?e.max.y:e.min.y,pd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(vg,"Frustum");var ks=vg,Kv=new Ke,rf=class rf{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];Kv.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ks),n[i].setFromProjectionMatrix(Kv,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new ks),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new rf().copy(this)}};u(rf,"FrustumArray");var Nd=rf;var Mg=class Mg extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(Mg,"LineBasicMaterial");var fl=Mg,Dd=new H,Od=new H,Zv=new Ke,zc=new Fs,md=new Mn,Km=new H,Jv=new H,Sg=class Sg extends Ot{constructor(e=new wt,t=new fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Dd.fromBufferAttribute(t,i-1),Od.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Dd.distanceTo(Od);e.setAttribute("lineDistance",new Ct(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),md.copy(n.boundingSphere),md.applyMatrix4(i),md.radius+=s,e.ray.intersectsSphere(md)===!1)return;Zv.copy(i).invert(),zc.copy(e.ray).applyMatrix4(Zv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=h.getX(_),v=h.getX(_+1),w=gd(this,e,zc,l,b,v,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(g-1),x=h.getX(m),b=gd(this,e,zc,l,_,x,g-1);b&&t.push(b)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=gd(this,e,zc,l,_,_+1,_);b&&t.push(b)}if(this.isLineLoop){let _=gd(this,e,zc,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};u(Sg,"Line");var Bo=Sg;function gd(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Dd.fromBufferAttribute(a,i),Od.fromBufferAttribute(a,s),t.distanceSqToSegment(Dd,Od,Km,Jv)>n)return;Km.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Km);if(!(c<e.near||c>e.far))return{distance:c,point:Jv.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}u(gd,"checkIntersection");var jv=new H,Qv=new H,wg=class wg extends Bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jv.fromBufferAttribute(t,i),Qv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jv.distanceTo(Qv);e.setAttribute("lineDistance",new Ct(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(wg,"LineSegments");var tu=wg,Eg=class Eg extends Bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(Eg,"LineLoop");var nu=Eg,Tg=class Tg extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(Tg,"PointsMaterial");var pl=Tg,eM=new Ke,e0=new Fs,xd=new Mn,bd=new H,Ag=class Ag extends Ot{constructor(e=new wt,t=new pl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xd.copy(n.boundingSphere),xd.applyMatrix4(i),xd.radius+=s,e.ray.intersectsSphere(xd)===!1)return;eM.copy(i).invert(),e0.copy(e.ray).applyMatrix4(eM);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let x=c.getX(g);bd.fromBufferAttribute(f,x),tM(bd,x,l,i,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)bd.fromBufferAttribute(f,g),tM(bd,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};u(Ag,"Points");var iu=Ag;function tM(r,e,t,n,i,s,o){let a=e0.distanceSqToPoint(r);if(a<t){let l=new H;e0.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(tM,"testPoint");var Rg=class Rg extends Qt{constructor(e=[],t=qo,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(Rg,"CubeTexture");var ru=Rg,Cg=class Cg extends Qt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(Cg,"CanvasTexture");var zs=Cg;var Pg=class Pg extends Qt{constructor(e,t,n=Hi,i,s,o,a=Ht,l=Ht,c,h=Jr,f=1){if(h!==Jr&&h!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};u(Pg,"DepthTexture");var Qr=Pg,Ig=class Ig extends Qr{constructor(e,t=Hi,n=qo,i,s,o=Ht,a=Ht,l,c=Jr){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};u(Ig,"CubeDepthTexture");var su=Ig,Lg=class Lg extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};u(Lg,"ExternalTexture");var ou=Lg,sf=class sf extends wt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(f,2));function g(_,x,b,v,w,M,R,E,y,S,L){let I=M/y,O=R/S,F=M/2,W=R/2,U=E/2,q=y+1,te=S+1,z=0,Z=0,X=new H;for(let j=0;j<te;j++){let ie=j*O-W;for(let pe=0;pe<q;pe++){let ye=pe*I-F;X[_]=ye*v,X[x]=ie*w,X[b]=U,c.push(X.x,X.y,X.z),X[_]=0,X[x]=0,X[b]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(pe/y),f.push(1-j/S),z+=1}}for(let j=0;j<S;j++)for(let ie=0;ie<y;ie++){let pe=d+ie+q*j,ye=d+ie+q*(j+1),ne=d+(ie+1)+q*(j+1),me=d+(ie+1)+q*j;l.push(pe,ye,me),l.push(ye,ne,me),Z+=6}a.addGroup(m,Z,L),m+=Z,d+=z}u(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(sf,"BoxGeometry");var cr=sf;var of=class of extends wt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],d=[],m=[],g=0,_=[],x=n/2,b=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ct(f,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(m,2));function v(){let M=new H,R=new H,E=0,y=(t-e)/n;for(let S=0;S<=s;S++){let L=[],I=S/s,O=I*(t-e)+e;for(let F=0;F<=i;F++){let W=F/i,U=W*l+a,q=Math.sin(U),te=Math.cos(U);R.x=O*q,R.y=-I*n+x,R.z=O*te,f.push(R.x,R.y,R.z),M.set(q,y,te).normalize(),d.push(M.x,M.y,M.z),m.push(W,1-I),L.push(g++)}_.push(L)}for(let S=0;S<i;S++)for(let L=0;L<s;L++){let I=_[L][S],O=_[L+1][S],F=_[L+1][S+1],W=_[L][S+1];(e>0||L!==0)&&(h.push(I,O,W),E+=3),(t>0||L!==s-1)&&(h.push(O,F,W),E+=3)}c.addGroup(b,E,0),b+=E}u(v,"generateTorso");function w(M){let R=g,E=new He,y=new H,S=0,L=M===!0?e:t,I=M===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,x*I,0),d.push(0,I,0),m.push(.5,.5),g++;let O=g;for(let F=0;F<=i;F++){let U=F/i*l+a,q=Math.cos(U),te=Math.sin(U);y.x=L*te,y.y=x*I,y.z=L*q,f.push(y.x,y.y,y.z),d.push(0,I,0),E.x=q*.5+.5,E.y=te*.5*I+.5,m.push(E.x,E.y),g++}for(let F=0;F<i;F++){let W=R+F,U=O+F;M===!0?h.push(U,U+1,W):h.push(U+1,U,W),S+=3}c.addGroup(b,S,M===!0?1:2),b+=S}u(w,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(of,"CylinderGeometry");var _i=of,af=class af extends _i{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new af(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(af,"ConeGeometry");var es=af,lf=class lf extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let w=new H,M=new H,R=new H;for(let E=0;E<t.length;E+=3)m(t[E+0],w),m(t[E+1],M),m(t[E+2],R),l(w,M,R,v)}u(a,"subdivide");function l(v,w,M,R){let E=R+1,y=[];for(let S=0;S<=E;S++){y[S]=[];let L=v.clone().lerp(M,S/E),I=w.clone().lerp(M,S/E),O=E-S;for(let F=0;F<=O;F++)F===0&&S===E?y[S][F]=L:y[S][F]=L.clone().lerp(I,F/O)}for(let S=0;S<E;S++)for(let L=0;L<2*(E-S)-1;L++){let I=Math.floor(L/2);L%2===0?(d(y[S][I+1]),d(y[S+1][I]),d(y[S][I])):(d(y[S][I+1]),d(y[S+1][I+1]),d(y[S+1][I]))}}u(l,"subdivideFace");function c(v){let w=new H;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(v),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}u(c,"applyRadius");function h(){let v=new H;for(let w=0;w<s.length;w+=3){v.x=s[w+0],v.y=s[w+1],v.z=s[w+2];let M=x(v)/2/Math.PI+.5,R=b(v)/Math.PI+.5;o.push(M,1-R)}g(),f()}u(h,"generateUVs");function f(){for(let v=0;v<o.length;v+=6){let w=o[v+0],M=o[v+2],R=o[v+4],E=Math.max(w,M,R),y=Math.min(w,M,R);E>.9&&y<.1&&(w<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}u(f,"correctSeam");function d(v){s.push(v.x,v.y,v.z)}u(d,"pushVertex");function m(v,w){let M=v*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}u(m,"getVertexByIndex");function g(){let v=new H,w=new H,M=new H,R=new H,E=new He,y=new He,S=new He;for(let L=0,I=0;L<s.length;L+=9,I+=6){v.set(s[L+0],s[L+1],s[L+2]),w.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),E.set(o[I+0],o[I+1]),y.set(o[I+2],o[I+3]),S.set(o[I+4],o[I+5]),R.copy(v).add(w).add(M).divideScalar(3);let O=x(R);_(E,I+0,v,O),_(y,I+2,w,O),_(S,I+4,M,O)}}u(g,"correctUVs");function _(v,w,M,R){R<0&&v.x===1&&(o[w]=v.x-1),M.x===0&&M.z===0&&(o[w]=R/2/Math.PI+.5)}u(_,"correctUV");function x(v){return Math.atan2(v.z,-v.x)}u(x,"azimuth");function b(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}u(b,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.vertices,e.indices,e.radius,e.detail)}};u(lf,"PolyhedronGeometry");var Ud=lf;var cf=class cf extends Ud{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cf(e.radius,e.detail)}};u(cf,"IcosahedronGeometry");var ml=cf;var uf=class uf extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,m=[],g=[],_=[],x=[];for(let b=0;b<h;b++){let v=b*d-o;for(let w=0;w<c;w++){let M=w*f-s;g.push(M,-v,0),_.push(0,0,1),x.push(w/a),x.push(1-b/l)}}for(let b=0;b<l;b++)for(let v=0;v<a;v++){let w=v+c*b,M=v+c*(b+1),R=v+1+c*(b+1),E=v+1+c*b;m.push(w,M,E),m.push(M,R,E)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.width,e.height,e.widthSegments,e.heightSegments)}};u(uf,"PlaneGeometry");var ur=uf;var hf=class hf extends wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new H,d=new H,m=[],g=[],_=[],x=[];for(let b=0;b<=n;b++){let v=[],w=b/n,M=o+w*a,R=e*Math.cos(M),E=Math.sqrt(e*e-R*R),y=0;b===0&&o===0?y=.5/t:b===n&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let L=S/t,I=i+L*s;f.x=-E*Math.cos(I),f.y=R,f.z=E*Math.sin(I),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),x.push(L+y,1-w),v.push(c++)}h.push(v)}for(let b=0;b<n;b++)for(let v=0;v<t;v++){let w=h[b][v+1],M=h[b][v],R=h[b+1][v],E=h[b+1][v+1];(b!==0||o>0)&&m.push(w,M,E),(b!==n-1||l<Math.PI)&&m.push(M,R,E)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(hf,"SphereGeometry");var Gs=hf;var df=class df extends wt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new H,m=new H,g=new H;for(let _=0;_<=n;_++){let x=o+_/n*a;for(let b=0;b<=i;b++){let v=b/i*s;m.x=(e+t*Math.cos(x))*Math.cos(v),m.y=(e+t*Math.cos(x))*Math.sin(v),m.z=t*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(b/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){let b=(i+1)*_+x-1,v=(i+1)*(_-1)+x-1,w=(i+1)*(_-1)+x,M=(i+1)*_+x;l.push(b,v,M),l.push(v,w,M)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};u(df,"TorusGeometry");var ts=df;function Ko(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(nM(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(nM(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}u(Ko,"cloneUniforms");function En(r){let e={};for(let t=0;t<r.length;t++){let n=Ko(r[t]);for(let i in n)e[i]=n[i]}return e}u(En,"mergeUniforms");function nM(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}u(nM,"isThreeObject");function NA(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}u(NA,"cloneUniformsGroups");function B0(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}u(B0,"getUnlitUniformColorSpace");var Zo={clone:Ko,merge:En},DA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ng=class Ng extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DA,this.fragmentShader=OA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=NA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new He().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new St().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};u(Ng,"ShaderMaterial");var Dn=Ng,Dg=class Dg extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};u(Dg,"RawShaderMaterial");var Fd=Dg,Og=class Og extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ip,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(Og,"MeshStandardMaterial");var en=Og,Ug=class Ug extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:u(function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:u(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Lo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Lo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(Ug,"MeshPhysicalMaterial");var On=Ug;var Fg=class Fg extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(Fg,"MeshDepthMaterial");var Bd=Fg,Bg=class Bg extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(Bg,"MeshDistanceMaterial");var kd=Bg;function Ls(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}u(Ls,"convertArray");function Gc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}u(Gc,"hasTangents");function UA(r){function e(i,s){return r[i]-r[s]}u(e,"compareTime");let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(UA,"getKeyframeOrder");function iM(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}u(iM,"sortedArray");function FA(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}u(FA,"flattenJSON");var kg=class kg{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};u(kg,"Interpolant");var hr=kg,zg=class zg extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Po,endingEnd:Po}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Io:s=e,a=2*t-n;break;case Xc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Io:o=e,l=2*n-t;break;case Xc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,x=_*g,b=-d*x+2*d*_-d*g,v=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-m)*x+(1.5+m)*_+.5*g,M=m*x-m*_;for(let R=0;R!==a;++R)s[R]=b*o[h+R]+v*o[c+R]+w*o[l+R]+M*o[f+R];return s}};u(zg,"CubicInterpolant");var zd=zg,Gg=class Gg extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}};u(Gg,"LinearInterpolant");var au=Gg,Vg=class Vg extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};u(Vg,"DiscreteInterpolant");var Gd=Vg,Hg=class Hg extends hr{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(i-t),_=1-g;for(let x=0;x!==a;++x)s[x]=o[c+x]*_+o[l+x]*g;return s}let d=a*2,m=e-1;for(let g=0;g!==a;++g){let _=o[c+g],x=o[l+g],b=m*d+g*2,v=f[b],w=f[b+1],M=e*d+g*2,R=h[M],E=h[M+1],y=kA(n,t,v,R,i);s[g]=QM(y,_,w,E,x)}return s}};u(Hg,"BezierInterpolant");var Vd=Hg;function QM(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}u(QM,"cubicBezier");function BA(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}u(BA,"cubicBezierSlope");function kA(r,e,t,n,i){let s=(r-e)/(i-e);for(let o=0;o<8;o++){let a=QM(s,e,t,n,i)-r;if(Math.abs(a)<1e-10)break;let l=BA(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}u(kA,"solveBezierParameter");var Wg=class Wg{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Gc(e.settings)&&(n.settings={inTangents:Ls(e.settings.inTangents,Array),outTangents:Ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case Do:t=this.InterpolantFactoryMethodLinear;break;case vd:t=this.InterpolantFactoryMethodSmooth;break;case Qm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return vd;case this.InterpolantFactoryMethodBezier:return Qm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Gc(this.settings)&&(rM(this.settings.inTangents,e),rM(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Gc(this.settings)&&(sM(this.settings.inTangents,e),sM(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&YT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Gc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};u(Wg,"KeyframeTrack");var Xn=Wg;function rM(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}u(rM,"shiftTangentTimes");function sM(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}u(sM,"scaleTangentTimes");Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Do;var Xg=class Xg extends Xn{constructor(e,t,n){super(e,t,n)}};u(Xg,"BooleanKeyframeTrack");var ns=Xg;ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=No;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var qg=class qg extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};u(qg,"ColorKeyframeTrack");var lu=qg;lu.prototype.ValueTypeName="color";var Yg=class Yg extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};u(Yg,"NumberKeyframeTrack");var is=Yg;is.prototype.ValueTypeName="number";var $g=class $g extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)$t.slerpFlat(s,0,o,c-a,o,c,l);return s}};u($g,"QuaternionLinearInterpolant");var Hd=$g,Kg=class Kg extends Xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Hd(this.times,this.values,this.getValueSize(),e)}};u(Kg,"QuaternionKeyframeTrack");var rs=Kg;rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zg=class Zg extends Xn{constructor(e,t,n){super(e,t,n)}};u(Zg,"StringKeyframeTrack");var ss=Zg;ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=No;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Jg=class Jg extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};u(Jg,"VectorKeyframeTrack");var Vs=Jg;Vs.prototype.ValueTypeName="vector";var jg=class jg{constructor(e="",t=-1,n=[],i=np){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(GA(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=UA(l);l=iM(l,1,h),c=iM(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new is(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};u(jg,"AnimationClip");var ko=jg;function zA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return lu;case"quaternion":return rs;case"bool":case"boolean":return ns;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}u(zA,"getTrackTypeForValueTypeName");function GA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zA(r.type);if(r.times===void 0){let n=[],i=[];FA(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Gc(r.settings)&&(t.settings={inTangents:Ls(r.settings.inTangents,Float32Array),outTangents:Ls(r.settings.outTangents,Float32Array)}),t}u(GA,"parseKeyframeTrack");var ar={enabled:!1,files:{},add:u(function(r,e){this.enabled!==!1&&(oM(r)||(this.files[r]=e))},"add"),get:u(function(r){if(this.enabled!==!1&&!oM(r))return this.files[r]},"get"),remove:u(function(r){delete this.files[r]},"remove"),clear:u(function(){this.files={}},"clear")};function oM(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}u(oM,"isBlobURL");var Qg=class Qg{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};u(Qg,"LoadingManager");var gl=Qg,eS=new gl,ex=class ex{constructor(e){this.manager=e!==void 0?e:eS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};u(ex,"Loader");var dr=ex;dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr={},tx=class tx extends Error{constructor(e,t){super(e),this.response=t}};u(tx,"HttpError");var t0=tx,nx=class nx extends dr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ar.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Yr[e]!==void 0){Yr[e].push({onLoad:t,onProgress:n,onError:i});return}Yr[e]=[],Yr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Yr[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,_=0,x=new ReadableStream({start(b){v();function v(){f.read().then(({done:w,value:M})=>{if(w)b.close();else{_+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let E=0,y=h.length;E<y;E++){let S=h[E];S.onProgress&&S.onProgress(R)}b.enqueue(M),v()}},w=>{b.error(w)})}u(v,"readData")}});return new Response(x)}else throw new t0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ar.add(`file:${e}`,c);let h=Yr[e];delete Yr[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Yr[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yr[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(nx,"FileLoader");var xl=nx;var ja=new WeakMap,ix=class ix extends dr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ar.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=ja.get(o);f===void 0&&(f=[],ja.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=al("img");function l(){h(),t&&t(this);let f=ja.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onLoad&&m.onLoad(this)}ja.delete(this),s.manager.itemEnd(e)}u(l,"onImageLoad");function c(f){h(),i&&i(f),ar.remove(`image:${e}`);let d=ja.get(this)||[];for(let m=0;m<d.length;m++){let g=d[m];g.onError&&g.onError(f)}ja.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ar.add(`image:${e}`,a),s.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};u(ix,"ImageLoader");var Wd=ix;var rx=class rx extends dr{constructor(e){super(e)}load(e,t,n,i){let s=new Qt,o=new Wd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}};u(rx,"TextureLoader");var cu=rx,sx=class sx extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};u(sx,"Light");var zo=sx,ox=class ox extends zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};u(ox,"HemisphereLight");var uu=ox,Zm=new Ke,aM=new H,lM=new H,ax=class ax{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;aM.setFromMatrixPosition(e.matrixWorld),t.position.copy(aM),lM.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lM),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Zm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zm,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ol||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Zm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(ax,"LightShadow");var bl=ax,yd=new H,_d=new $t,or=new H,lx=class lx extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yd,_d,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yd,_d,or.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yd,_d,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yd,_d,or.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};u(lx,"Camera");var hu=lx,Is=new H,cM=new He,uM=new He,cx=class cx extends hu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Is.x,Is.y).multiplyScalar(-e/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Is.x,Is.y).multiplyScalar(-e/Is.z)}getViewSize(e,t){return this.getViewBounds(e,cM,uM),t.subVectors(uM,cM)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u(cx,"PerspectiveCamera");var jt=cx,ux=class ux extends bl{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Oo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};u(ux,"SpotLightShadow");var n0=ux,hx=class hx extends zo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new n0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};u(hx,"SpotLight");var du=hx,dx=class dx extends bl{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}};u(dx,"PointLightShadow");var i0=dx,fx=class fx extends zo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};u(fx,"PointLight");var fu=fx,px=class px extends hu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(px,"OrthographicCamera");var Go=px,mx=class mx extends bl{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(mx,"DirectionalLightShadow");var r0=mx,gx=class gx extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new r0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};u(gx,"DirectionalLight");var Vo=gx;var xx=class xx{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(xx,"LoaderUtils");var os=xx,bx=class bx extends wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(bx,"InstancedBufferGeometry");var pu=bx;var Jm=new WeakMap,yx=class yx extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&We("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&We("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ar.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{Jm.has(o)===!0?(i&&i(Jm.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ar.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Jm.set(l,c),ar.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ar.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(yx,"ImageBitmapLoader");var mu=yx;var Qa=-90,el=1,_x=class _x extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(Qa,el,e,t);i.layers=this.layers,this.add(i);let s=new jt(Qa,el,e,t);s.layers=this.layers,this.add(s);let o=new jt(Qa,el,e,t);o.layers=this.layers,this.add(o);let a=new jt(Qa,el,e,t);a.layers=this.layers,this.add(a);let l=new jt(Qa,el,e,t);l.layers=this.layers,this.add(l);let c=new jt(Qa,el,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};u(_x,"CubeCamera");var yl=_x,vx=class vx extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};u(vx,"ArrayCamera");var Xd=vx;var Mx=class Mx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;$t.multiplyQuaternionsFlat(e,o,e,t,e,n),$t.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}};u(Mx,"PropertyMixer");var qd=Mx,k0="\\[\\]\\.:\\/",VA=new RegExp("["+k0+"]","g"),z0="[^"+k0+"]",HA="[^"+k0.replace("\\.","")+"]",WA=/((?:WC+[\/:])*)/.source.replace("WC",z0),XA=/(WCOD+)?/.source.replace("WCOD",HA),qA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",z0),YA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",z0),$A=new RegExp("^"+WA+XA+qA+YA+"$"),KA=["material","materials","bones","map"],Sx=class Sx{constructor(e,t,n){let i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};u(Sx,"Composite");var s0=Sx,Ds=class Ds{constructor(e,t,n){this.path=t,this.parsedPath=n||Ds.parseTrackName(t),this.node=Ds.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ds.Composite(e,t,n):new Ds(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VA,"")}static parseTrackName(e){let t=$A.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);KA.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=u(function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Ds.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Ds,"PropertyBinding");var _t=Ds;_t.Composite=s0;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wx=class wx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Po,endingEnd:Po};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=tp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case BM:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case np:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===FM;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===UM){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Io,i.endingEnd=Io):(e?i.endingStart=this.zeroSlopeAtStart?Io:Po:i.endingStart=Xc,t?i.endingEnd=this.zeroSlopeAtEnd?Io:Po:i.endingEnd=Xc)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}};u(wx,"AnimationAction");var Yd=wx,ZA=new Float32Array(1),Ex=class Ex extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==s;++f){let d=i[f],m=d.name,g=h[m];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let _=t&&t._propertyBindings[f].binding.parsedPath;g=new qd(_t.create(n,m,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new au(new Float32Array(2),new Float32Array(2),1,ZA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?ko.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=np),l!==void 0){let f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Yd(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?ko.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};u(Ex,"AnimationMixer");var Ho=Ex;var hM=new Ke,Tx=class Tx{constructor(e,t,n=0,i=1/0){this.ray=new Fs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hM),this}intersectObject(e,t=!0,n=[]){return o0(e,this,n,t),n.sort(dM),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)o0(e[i],this,n,t);return n.sort(dM),n}};u(Tx,"Raycaster");var gu=Tx;function dM(r,e){return r.distance-e.distance}u(dM,"ascSort");function o0(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)o0(s[o],e,t,!0)}}u(o0,"intersect");var ff=class ff{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};u(ff,"Matrix2"),ff.prototype.isMatrix2=!0;var a0=ff;function G0(r,e,t,n){let i=JA(n);switch(t){case T0:return r*e;case vf:return r*e/i.components*i.byteLength;case Mf:return r*e/i.components*i.byteLength;case pr:return r*e*2/i.components*i.byteLength;case Sf:return r*e*2/i.components*i.byteLength;case A0:return r*e*3/i.components*i.byteLength;case qn:return r*e*4/i.components*i.byteLength;case wf:return r*e*4/i.components*i.byteLength;case yu:case _u:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vu:case Mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Rf:return Math.max(r,16)*Math.max(e,8)/4;case Ef:case Af:return Math.max(r,8)*Math.max(e,8)/2;case Cf:case Pf:case Lf:case Nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case If:case Su:case Df:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kf:case Zf:case Jf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jf:case Qf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wu:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(G0,"getByteLength");function JA(r){switch(r){case wn:case M0:return{byteLength:1,components:1};case wl:case S0:case ri:return{byteLength:2,components:1};case yf:case _f:return{byteLength:2,components:4};case Hi:case bf:case ii:return{byteLength:4,components:1};case w0:case E0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}u(JA,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function MS(){let r=null,e=!1,t=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),t(s,o)}return u(i,"onAnimationFrame"),{start:u(function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},"start"),stop:u(function(){r!==null&&r.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:u(function(s){t=s},"setAnimationLoop"),setContext:u(function(s){r=s},"setContext")}}u(MS,"WebGLAnimation");function QA(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}u(t,"createBuffer");function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(i,"get");function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}u(s,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:i,remove:s,update:o}}u(QA,"WebGLAttributes");var eR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tR=`#ifdef USE_ALPHAHASH
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
#endif`,nR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oR=`#ifdef USE_AOMAP
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
#endif`,aR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lR=`#ifdef USE_BATCHING
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
#endif`,cR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fR=`#ifdef USE_IRIDESCENCE
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
#endif`,pR=`#ifdef USE_BUMPMAP
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
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SR=`#define PI 3.141592653589793
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
} // validated`,wR=`vec3 transformedNormal = objectNormal;
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
#endif`,ER=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CR="gl_FragColor = linearToOutputTexel( gl_FragColor );",PR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IR=`#ifdef USE_ENVMAP
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
#endif`,LR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,NR=`#ifdef USE_ENVMAP
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
#endif`,DR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OR=`#ifdef USE_ENVMAP
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
#endif`,UR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zR=`#ifdef USE_GRADIENTMAP
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
}`,GR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XR=`#ifdef USE_ENVMAP
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
#endif`,qR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$R=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZR=`PhysicalMaterial material;
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
#endif`,JR=`uniform sampler2D dfgLUT;
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
}`,jR=`
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
#endif`,QR=`#if defined( RE_IndirectDiffuse )
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
#endif`,eC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,nC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cC=`#if defined( USE_POINTS_UV )
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
#endif`,uC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fC=`#if defined( USE_MORPHCOLORS )
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
#endif`,pC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mC=`#ifdef USE_MORPHTARGETS
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
#endif`,gC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_C=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MC=`#ifdef USE_NORMALMAP
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
#endif`,SC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BC=`float getShadowMask() {
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
}`,kC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zC=`#ifdef USE_SKINNING
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
#endif`,GC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VC=`#ifdef USE_SKINNING
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
#endif`,HC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YC=`#ifdef USE_TRANSMISSION
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
#endif`,$C=`#ifdef USE_TRANSMISSION
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
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eP=`uniform sampler2D t2D;
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
}`,tP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nP=`uniform float backgroundBlurriness;
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
}`,iP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sP=`#include <common>
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
}`,oP=`#if DEPTH_PACKING == 3200
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
}`,aP=`#define DISTANCE
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
}`,lP=`#define DISTANCE
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
}`,cP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hP=`uniform float scale;
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
}`,dP=`uniform vec3 diffuse;
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
}`,fP=`#include <common>
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
}`,pP=`uniform vec3 diffuse;
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
}`,mP=`#define LAMBERT
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
}`,gP=`#define LAMBERT
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
}`,xP=`#define MATCAP
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
}`,bP=`#define MATCAP
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
}`,yP=`#define NORMAL
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
}`,_P=`#define NORMAL
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
}`,vP=`#define PHONG
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
}`,MP=`#define PHONG
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
}`,SP=`#define STANDARD
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
}`,wP=`#define STANDARD
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
}`,EP=`#define TOON
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
}`,TP=`#define TOON
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
}`,AP=`uniform float size;
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
}`,RP=`uniform vec3 diffuse;
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
}`,CP=`#include <common>
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
}`,PP=`uniform vec3 color;
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
}`,IP=`uniform float rotation;
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
}`,LP=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:eR,alphahash_pars_fragment:tR,alphamap_fragment:nR,alphamap_pars_fragment:iR,alphatest_fragment:rR,alphatest_pars_fragment:sR,aomap_fragment:oR,aomap_pars_fragment:aR,batching_pars_vertex:lR,batching_vertex:cR,begin_vertex:uR,beginnormal_vertex:hR,bsdfs:dR,iridescence_fragment:fR,bumpmap_pars_fragment:pR,clipping_planes_fragment:mR,clipping_planes_pars_fragment:gR,clipping_planes_pars_vertex:xR,clipping_planes_vertex:bR,color_fragment:yR,color_pars_fragment:_R,color_pars_vertex:vR,color_vertex:MR,common:SR,defaultnormal_vertex:wR,displacementmap_pars_vertex:ER,displacementmap_vertex:TR,emissivemap_fragment:AR,emissivemap_pars_fragment:RR,colorspace_fragment:CR,colorspace_pars_fragment:PR,envmap_fragment:IR,envmap_common_pars_fragment:LR,envmap_pars_fragment:NR,envmap_pars_vertex:DR,envmap_physical_pars_fragment:XR,envmap_vertex:OR,fog_vertex:UR,fog_pars_vertex:FR,fog_fragment:BR,fog_pars_fragment:kR,gradientmap_pars_fragment:zR,lightmap_pars_fragment:GR,lights_lambert_fragment:VR,lights_lambert_pars_fragment:HR,lights_pars_begin:WR,lights_toon_fragment:qR,lights_toon_pars_fragment:YR,lights_phong_fragment:$R,lights_phong_pars_fragment:KR,lights_physical_fragment:ZR,lights_physical_pars_fragment:JR,lights_fragment_begin:jR,lights_fragment_maps:QR,lights_fragment_end:eC,lightprobes_pars_fragment:tC,logdepthbuf_fragment:nC,logdepthbuf_pars_fragment:iC,logdepthbuf_pars_vertex:rC,logdepthbuf_vertex:sC,map_fragment:oC,map_pars_fragment:aC,map_particle_fragment:lC,map_particle_pars_fragment:cC,metalnessmap_fragment:uC,metalnessmap_pars_fragment:hC,morphinstance_vertex:dC,morphcolor_vertex:fC,morphnormal_vertex:pC,morphtarget_pars_vertex:mC,morphtarget_vertex:gC,normal_fragment_begin:xC,normal_fragment_maps:bC,normal_pars_fragment:yC,normal_pars_vertex:_C,normal_vertex:vC,normalmap_pars_fragment:MC,clearcoat_normal_fragment_begin:SC,clearcoat_normal_fragment_maps:wC,clearcoat_pars_fragment:EC,iridescence_pars_fragment:TC,opaque_fragment:AC,packing:RC,premultiplied_alpha_fragment:CC,project_vertex:PC,dithering_fragment:IC,dithering_pars_fragment:LC,roughnessmap_fragment:NC,roughnessmap_pars_fragment:DC,shadowmap_pars_fragment:OC,shadowmap_pars_vertex:UC,shadowmap_vertex:FC,shadowmask_pars_fragment:BC,skinbase_vertex:kC,skinning_pars_vertex:zC,skinning_vertex:GC,skinnormal_vertex:VC,specularmap_fragment:HC,specularmap_pars_fragment:WC,tonemapping_fragment:XC,tonemapping_pars_fragment:qC,transmission_fragment:YC,transmission_pars_fragment:$C,uv_pars_fragment:KC,uv_pars_vertex:ZC,uv_vertex:JC,worldpos_vertex:jC,background_vert:QC,background_frag:eP,backgroundCube_vert:tP,backgroundCube_frag:nP,cube_vert:iP,cube_frag:rP,depth_vert:sP,depth_frag:oP,distance_vert:aP,distance_frag:lP,equirect_vert:cP,equirect_frag:uP,linedashed_vert:hP,linedashed_frag:dP,meshbasic_vert:fP,meshbasic_frag:pP,meshlambert_vert:mP,meshlambert_frag:gP,meshmatcap_vert:xP,meshmatcap_frag:bP,meshnormal_vert:yP,meshnormal_frag:_P,meshphong_vert:vP,meshphong_frag:MP,meshphysical_vert:SP,meshphysical_frag:wP,meshtoon_vert:EP,meshtoon_frag:TP,points_vert:AP,points_frag:RP,shadow_vert:CP,shadow_frag:PP,sprite_vert:IP,sprite_frag:LP},Ie={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},xr={basic:{uniforms:En([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:En([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:En([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:En([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:En([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:En([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:En([Ie.points,Ie.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:En([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:En([Ie.common,Ie.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:En([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:En([Ie.sprite,Ie.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:En([Ie.common,Ie.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:En([Ie.lights,Ie.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};xr.physical={uniforms:En([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var op={r:0,b:0,g:0},NP=new Ke,SS=new Je;SS.set(-1,0,0,0,1,0,0,0,1);function DP(r,e,t,n,i,s){let o=new Pe(0),a=i===!0?0:1,l,c,h=null,f=0,d=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let M=v.backgroundBlurriness>0;w=e.get(w,M)}return w}u(m,"getBackground");function g(v){let w=!1,M=m(v);M===null?x(o,a):M&&M.isColor&&(x(M,1),w=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}u(g,"render");function _(v,w){let M=m(w);M&&M.isCubeTexture?(c===void 0&&(c=new ct(new cr(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ko(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:u(function(){return this.uniforms.envMap.value},"get")}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NP.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(SS),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==vt,(h!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ct(new ur(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ko(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:u(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}u(_,"addToRenderList");function x(v,w){v.getRGB(op,B0(r)),t.buffers.color.setClear(op.r,op.g,op.b,w,s)}u(x,"setClear");function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return u(b,"dispose"),{getClearColor:u(function(){return o},"getClearColor"),setClearColor:u(function(v,w=1){o.set(v),a=w,x(o,a)},"setClearColor"),getClearAlpha:u(function(){return a},"getClearAlpha"),setClearAlpha:u(function(v){a=v,x(o,a)},"setClearAlpha"),render:g,addToRenderList:_,dispose:b}}u(DP,"WebGLBackground");function OP(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(O,F,W,U,q){let te=!1,z=f(O,U,W,F);s!==z&&(s=z,c(s.object)),te=m(O,U,W,q),te&&g(O,U,W,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(O,F,W,U),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}u(a,"setup");function l(){return r.createVertexArray()}u(l,"createVertexArrayObject");function c(O){return r.bindVertexArray(O)}u(c,"bindVertexArrayObject");function h(O){return r.deleteVertexArray(O)}u(h,"deleteVertexArrayObject");function f(O,F,W,U){let q=U.wireframe===!0,te=n[F.id];te===void 0&&(te={},n[F.id]=te);let z=O.isInstancedMesh===!0?O.id:0,Z=te[z];Z===void 0&&(Z={},te[z]=Z);let X=Z[W.id];X===void 0&&(X={},Z[W.id]=X);let j=X[q];return j===void 0&&(j=d(l()),X[q]=j),j}u(f,"getBindingState");function d(O){let F=[],W=[],U=[];for(let q=0;q<t;q++)F[q]=0,W[q]=0,U[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:U,object:O,attributes:{},index:null}}u(d,"createBindingState");function m(O,F,W,U){let q=s.attributes,te=F.attributes,z=0,Z=W.getAttributes();for(let X in Z)if(Z[X].location>=0){let ie=q[X],pe=te[X];if(pe===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==U}u(m,"needsUpdate");function g(O,F,W,U){let q={},te=F.attributes,z=0,Z=W.getAttributes();for(let X in Z)if(Z[X].location>=0){let ie=te[X];ie===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor));let pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),q[X]=pe,z++}s.attributes=q,s.attributesNum=z,s.index=U}u(g,"saveCache");function _(){let O=s.newAttributes;for(let F=0,W=O.length;F<W;F++)O[F]=0}u(_,"initAttributes");function x(O){b(O,0)}u(x,"enableAttribute");function b(O,F){let W=s.newAttributes,U=s.enabledAttributes,q=s.attributeDivisors;W[O]=1,U[O]===0&&(r.enableVertexAttribArray(O),U[O]=1),q[O]!==F&&(r.vertexAttribDivisor(O,F),q[O]=F)}u(b,"enableAttributeAndDivisor");function v(){let O=s.newAttributes,F=s.enabledAttributes;for(let W=0,U=F.length;W<U;W++)F[W]!==O[W]&&(r.disableVertexAttribArray(W),F[W]=0)}u(v,"disableUnusedAttributes");function w(O,F,W,U,q,te,z){z===!0?r.vertexAttribIPointer(O,F,W,q,te):r.vertexAttribPointer(O,F,W,U,q,te)}u(w,"vertexAttribPointer");function M(O,F,W,U){_();let q=U.attributes,te=W.getAttributes(),z=F.defaultAttributeValues;for(let Z in te){let X=te[Z];if(X.location>=0){let j=q[Z];if(j===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){let ie=j.normalized,pe=j.itemSize,ye=e.get(j);if(ye===void 0)continue;let ne=ye.buffer,me=ye.type,he=ye.bytesPerElement,ge=me===r.INT||me===r.UNSIGNED_INT||j.gpuType===bf;if(j.isInterleavedBufferAttribute){let de=j.data,Fe=de.isInterleavedBuffer===!0?de.stride:de.itemSize,Ye=j.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let De=0;De<X.locationSize;De++)b(X.location+De,de.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let De=0;De<X.locationSize;De++)x(X.location+De);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let De=0;De<X.locationSize;De++)w(X.location+De,pe/X.locationSize,me,ie,Fe*he,(Ye+pe/X.locationSize*De)*he,ge)}else{if(j.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)b(X.location+de,j.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let de=0;de<X.locationSize;de++)x(X.location+de);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let de=0;de<X.locationSize;de++)w(X.location+de,pe/X.locationSize,me,ie,pe*he,pe/X.locationSize*de*he,ge)}}else if(z!==void 0){let ie=z[Z];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(X.location,ie);break;case 3:r.vertexAttrib3fv(X.location,ie);break;case 4:r.vertexAttrib4fv(X.location,ie);break;default:r.vertexAttrib1fv(X.location,ie)}}}}v()}u(M,"setupVertexAttributes");function R(){L();for(let O in n){let F=n[O];for(let W in F){let U=F[W];for(let q in U){let te=U[q];for(let z in te)h(te[z].object),delete te[z];delete U[q]}}delete n[O]}}u(R,"dispose");function E(O){if(n[O.id]===void 0)return;let F=n[O.id];for(let W in F){let U=F[W];for(let q in U){let te=U[q];for(let z in te)h(te[z].object),delete te[z];delete U[q]}}delete n[O.id]}u(E,"releaseStatesOfGeometry");function y(O){for(let F in n){let W=n[F];for(let U in W){let q=W[U];if(q[O.id]===void 0)continue;let te=q[O.id];for(let z in te)h(te[z].object),delete te[z];delete q[O.id]}}}u(y,"releaseStatesOfProgram");function S(O){for(let F in n){let W=n[F],U=O.isInstancedMesh===!0?O.id:0,q=W[U];if(q!==void 0){for(let te in q){let z=q[te];for(let Z in z)h(z[Z].object),delete z[Z];delete q[te]}delete W[U],Object.keys(W).length===0&&delete n[F]}}}u(S,"releaseStatesOfObject");function L(){I(),o=!0,s!==i&&(s=i,c(s.object))}u(L,"reset");function I(){i.geometry=null,i.program=null,i.wireframe=!1}return u(I,"resetDefaultState"),{setup:a,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}u(OP,"WebGLBindingStates");function UP(r,e,t){let n;function i(l){n=l}u(i,"setMode");function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}u(s,"render");function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}u(o,"renderInstances");function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,n,1)}u(a,"renderMultiDraw"),this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}u(UP,"WebGLBufferRenderer");function FP(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}u(s,"getMaxAnisotropy");function o(y){return!(y!==qn&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(y){let S=y===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==wn&&y!==ii&&!S&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}u(a,"textureTypeReadable");function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(We("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:M,maxSamples:R,samples:E}}u(FP,"WebGLCapabilities");function BP(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Gn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,b=r.get(f);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{let v=s?0:n,w=v*4,M=b.clippingState||null;l.value=M,M=h(g,d,w,m);for(let R=0;R!==w;++R)M[R]=t[R];b.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(f,d,m,g){let _=f!==null?f.length:0,x=null;if(_!==0){if(x=l.value,g!==!0||x===null){let b=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<b)&&(x=new Float32Array(b));for(let w=0,M=m;w!==_;++w,M+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}u(h,"projectPlanes")}u(BP,"WebGLClipping");var Fx=class Fx extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ru(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new cr(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Wo});s.uniforms.tEquirect.value=t;let o=new ct(i,s),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=kt),new yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};u(Fx,"WebGLCubeRenderTarget");var Ru=Fx,tS=256,kP=3,zP=20,wS=256,ES=16,GP=3,VP=new H,HP=new Pe,up=class up{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yl(1,10,null),this._boxMesh=new ct(new cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=VP}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(HP));let x=new yl(n,i,h);return x.position.copy(a),x.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(tS,O0(e))}_fromTexture(e,t){e.mapping===qo||e.mapping===Ml?this._setSize(e.image.length===0?tS:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=nS(e,!1,!1),n=Math.log2(e)-kP;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nS(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===qo||e.mapping===Ml?(this._cubemapMaterial===null&&(this._cubemapMaterial=rS()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=iS()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=WP(),this._integrationMaterial=XP());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/ES);for(let o=0;o<=n;o++){let a=up.lodToRoughness(o,n);if(o>n-GP)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(wS*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qP());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};u(up,"PMREMGenerator");var lp=up;function nS(r,e,t){return new Ru(r,{minFilter:Sn,generateMipmaps:e,type:ri,colorSpace:Ln,depthBuffer:t})}u(nS,"_createRenderTarget");function Cu(r,e,t){return new Dn({name:r,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:Un,blending:Wo,depthTest:!1,depthWrite:!1})}u(Cu,"_getMaterial");function WP(){return Cu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wS}u

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
	`)}u(WP,"_getGGXMaterial");function XP(){return Cu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ES}},`

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
	`)}u(XP,"_getIntegrationMaterial");function qP(){return Cu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zP}
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
	`)}u(qP,"_getBlurMaterial");function iS(){return Cu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}u(iS,"_getEquirectMaterial");function rS(){return Cu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}u(rS,"_getCubemapMaterial");function YP(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?o(d):s(d)}u(i,"get");function s(d){if(d&&d.isTexture){let m=d.mapping;if(m===mf||m===gf)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new Ru(g.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}u(s,"getCube");function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===mf||m===gf,_=m===qo||m===Ml;if(g||_){let x=t.get(d),b=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==b)return n===null&&(n=new lp(r)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new lp(r)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}u(o,"getPMREM");function a(d,m){return m===mf?d.mapping=qo:m===gf&&(d.mapping=Ml),d}u(a,"mapTextureMapping");function l(d){let m=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&m++;return m===g}u(l,"isCubeTextureComplete");function c(d){let m=d.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}u(c,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}u(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return u(f,"dispose"),{get:i,dispose:f}}u(YP,"WebGLEnvironments");function $P(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return u(t,"getExtension"),{has:u(function(n){return t(n)!==null},"has"),init:u(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:u(function(n){let i=t(n);return i===null&&Lo("WebGLRenderer: "+n+" extension not supported."),i},"get")}}u($P,"WebGLExtensions");function KP(r,e,t,n){let i={},s=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}u(a,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=s.get(g);_&&(e.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}u(l,"destroyGeometry");function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}u(c,"get");function h(g){let _=g.attributes;for(let x in _)e.update(_[x],r.ARRAY_BUFFER)}u(h,"update");function f(g){let _=g.index,x=g.attributes.position,b=0;if(x===void 0)return;let v=_!==null?_.array.length:x.array.length/3-1,w=x.count>=65535?Jc:Zc,M=new w(Math.ceil(v/3)*6,1),R=M.array;if(_!==null){let y=_.array;b=_.version;for(let S=0,L=0;S<v;S+=3){let I=y[S+0],O=y[S+1],F=y[S+2];R[L++]=I,R[L++]=O,R[L++]=O,R[L++]=F,R[L++]=F,R[L++]=I}}else{b=x.version;for(let y=0,S=0;y<v;y+=3){let L=y+0,I=y+1,O=y+2;R[S++]=L,R[S++]=I,R[S++]=I,R[S++]=O,R[S++]=O,R[S++]=L}}M.version=b;let E=s.get(g);E&&e.remove(E),s.set(g,M)}u(f,"updateWireframeAttribute");function d(g){let _=s.get(g);if(_){let x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return s.get(g)}u(d,"getWireframeAttribute");function m(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return u(m,"dispose"),{get:c,update:h,getWireframeAttribute:d,dispose:m}}u(KP,"WebGLGeometries");function ZP(r,e,t){let n;function i(f){n=f}u(i,"setMode");let s,o;function a(f){s=f.type,o=f.bytesPerElement}u(a,"setIndex");function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}u(l,"render");function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}u(c,"renderInstances");function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];t.update(_,n,1)}u(h,"renderMultiDraw"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}u(ZP,"WebGLIndexedBufferRenderer");function JP(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(JP,"WebGLInfo");function jP(r,e,t){let n=new WeakMap,i=new St;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let I=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",I)};var m=I;u(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let R=a.attributes.position.count*M,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let y=new Float32Array(R*E*4*f),S=new Uo(y,R,E,f);S.type=ii,S.needsUpdate=!0;let L=M*4;for(let O=0;O<f;O++){let F=b[O],W=v[O],U=w[O],q=R*E*4*O;for(let te=0;te<F.count;te++){let z=te*L;g===!0&&(i.fromBufferAttribute(F,te),y[q+z+0]=i.x,y[q+z+1]=i.y,y[q+z+2]=i.z,y[q+z+3]=0),_===!0&&(i.fromBufferAttribute(W,te),y[q+z+4]=i.x,y[q+z+5]=i.y,y[q+z+6]=i.z,y[q+z+7]=0),x===!0&&(i.fromBufferAttribute(U,te),y[q+z+8]=i.x,y[q+z+9]=i.y,y[q+z+10]=i.z,y[q+z+11]=U.itemSize===4?i.w:1)}}d={count:f,texture:S,size:new He(R,E)},n.set(a,d),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return u(s,"update"),{update:s}}u(jP,"WebGLMorphtargets");function QP(r,e,t,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}u(o,"update");function a(){s=new WeakMap}u(a,"dispose");function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return u(l,"onInstancedMeshDispose"),{update:o,dispose:a}}u(QP,"WebGLObjects");var e2={[m0]:"LINEAR_TONE_MAPPING",[g0]:"REINHARD_TONE_MAPPING",[x0]:"CINEON_TONE_MAPPING",[bu]:"ACES_FILMIC_TONE_MAPPING",[y0]:"AGX_TONE_MAPPING",[_0]:"NEUTRAL_TONE_MAPPING",[b0]:"CUSTOM_TONE_MAPPING"};function t2(r,e,t,n,i,s){let o=new ei(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new wt;h.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let f=new Fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ct(h,f),m=new Go(-1,1,1,-1,0,1),g=null,_=null,x=!1,b,v=null,w=[],M=!1;this.setSize=function(R,E){o.setSize(R,E),a!==null&&a.setSize(R,E),l!==null&&l.setSize(R,E);for(let y=0;y<w.length;y++){let S=w[y];S.setSize&&S.setSize(R,E)}},this.setEffects=function(R){w=R,M=w.length>0&&w[0].isRenderPass===!0;let E=o.width,y=o.height;w.length>0&&a===null&&(a=new ei(E,y,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new ei(E,y,{type:ri,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&w.some(L=>L.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Qr(E,y),s===!0&&(c.format=as,c.type=$o)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let L=0;L<w.length;L++){let I=w[L];I.setSize&&I.setSize(E,y),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,E){if(x||R.toneMapping===fr&&w.length===0)return!1;if(v=E,E!==null){let y=E.width,S=E.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return M===!1&&R.setRenderTarget(o),b=R.toneMapping,R.toneMapping=fr,!0},this.hasRenderPass=function(){return M},this.end=function(R,E){R.toneMapping=b,x=!0;let y=o,S=a;for(let L=0;L<w.length;L++){let I=w[L];I.enabled!==!1&&(I.render(R,S,y,E),I.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(g!==R.outputColorSpace||_!==R.toneMapping){g=R.outputColorSpace,_=R.toneMapping,f.defines={},lt.getTransfer(g)===vt&&(f.defines.SRGB_TRANSFER="");let L=e2[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,R.setRenderTarget(v),R.render(d,m),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}u(t2,"WebGLOutput");var TS=new Qt,AS=new Qr(1,1),RS=new su(1),CS=new Uo,PS=new Ld,IS=new ru,sS=[],oS=[],aS=new Float32Array(16),lS=new Float32Array(9),cS=new Float32Array(4);function Al(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=sS[i];if(s===void 0&&(s=new Float32Array(i),sS[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}u(Al,"flatten");function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}u(nn,"arraysEqual");function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}u(rn,"copyArray");function hp(r,e){let t=oS[e];t===void 0&&(t=new Int32Array(e),oS[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}u(hp,"allocTexUnits");function n2(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}u(n2,"setValueV1f");function i2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}u(i2,"setValueV2f");function r2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}u(r2,"setValueV3f");function s2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}u(s2,"setValueV4f");function o2(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;cS.set(n),r.uniformMatrix2fv(this.addr,!1,cS),rn(t,n)}}u(o2,"setValueM2");function a2(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;lS.set(n),r.uniformMatrix3fv(this.addr,!1,lS),rn(t,n)}}u(a2,"setValueM3");function l2(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;aS.set(n),r.uniformMatrix4fv(this.addr,!1,aS),rn(t,n)}}u(l2,"setValueM4");function c2(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}u(c2,"setValueV1i");function u2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}u(u2,"setValueV2i");function h2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}u(h2,"setValueV3i");function d2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}u(d2,"setValueV4i");function f2(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}u(f2,"setValueV1ui");function p2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}u(p2,"setValueV2ui");function m2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}u(m2,"setValueV3ui");function g2(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}u(g2,"setValueV4ui");function dp(r){return r.version===0&&(r.compareFunction=I0,r.needsUpdate=!0),r}u(dp,"initShadowTexture");function x2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=dp(AS):s=TS,t.setTexture2D(e||s,i)}u(x2,"setValueT1");function b2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||PS,i)}u(b2,"setValueT3D1");function y2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=dp(RS):s=IS,t.setTextureCube(e||s,i)}u(y2,"setValueT6");function _2(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||CS,i)}u(_2,"setValueT2DArray1");function v2(r){switch(r){case 5126:return n2;case 35664:return i2;case 35665:return r2;case 35666:return s2;case 35674:return o2;case 35675:return a2;case 35676:return l2;case 5124:case 35670:return c2;case 35667:case 35671:return u2;case 35668:case 35672:return h2;case 35669:case 35673:return d2;case 5125:return f2;case 36294:return p2;case 36295:return m2;case 36296:return g2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return _2}}u(v2,"getSingularSetter");function M2(r,e){r.uniform1fv(this.addr,e)}u(M2,"setValueV1fArray");function S2(r,e){let t=Al(e,this.size,2);r.uniform2fv(this.addr,t)}u(S2,"setValueV2fArray");function w2(r,e){let t=Al(e,this.size,3);r.uniform3fv(this.addr,t)}u(w2,"setValueV3fArray");function E2(r,e){let t=Al(e,this.size,4);r.uniform4fv(this.addr,t)}u(E2,"setValueV4fArray");function T2(r,e){let t=Al(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}u(T2,"setValueM2Array");function A2(r,e){let t=Al(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}u(A2,"setValueM3Array");function R2(r,e){let t=Al(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}u(R2,"setValueM4Array");function C2(r,e){r.uniform1iv(this.addr,e)}u(C2,"setValueV1iArray");function P2(r,e){r.uniform2iv(this.addr,e)}u(P2,"setValueV2iArray");function I2(r,e){r.uniform3iv(this.addr,e)}u(I2,"setValueV3iArray");function L2(r,e){r.uniform4iv(this.addr,e)}u(L2,"setValueV4iArray");function N2(r,e){r.uniform1uiv(this.addr,e)}u(N2,"setValueV1uiArray");function D2(r,e){r.uniform2uiv(this.addr,e)}u(D2,"setValueV2uiArray");function O2(r,e){r.uniform3uiv(this.addr,e)}u(O2,"setValueV3uiArray");function U2(r,e){r.uniform4uiv(this.addr,e)}u(U2,"setValueV4uiArray");function F2(r,e,t){let n=this.cache,i=e.length,s=hp(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=dp(AS):o=TS;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}u(F2,"setValueT1Array");function B2(r,e,t){let n=this.cache,i=e.length,s=hp(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||PS,s[o])}u(B2,"setValueT3DArray");function k2(r,e,t){let n=this.cache,i=e.length,s=hp(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=dp(RS):o=IS;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,s[a])}u(k2,"setValueT6Array");function z2(r,e,t){let n=this.cache,i=e.length,s=hp(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||CS,s[o])}u(z2,"setValueT2DArrayArray");function G2(r){switch(r){case 5126:return M2;case 35664:return S2;case 35665:return w2;case 35666:return E2;case 35674:return T2;case 35675:return A2;case 35676:return R2;case 5124:case 35670:return C2;case 35667:case 35671:return P2;case 35668:case 35672:return I2;case 35669:case 35673:return L2;case 5125:return N2;case 36294:return D2;case 36295:return O2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return z2}}u(G2,"getPureArraySetter");var Bx=class Bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v2(t.type)}};u(Bx,"SingleUniform");var Cx=Bx,kx=class kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G2(t.type)}};u(kx,"PureArrayUniform");var Px=kx,zx=class zx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}};u(zx,"StructuredUniform");var Ix=zx,Ax=/(\w+)(\])?(\[|\.)?/g;function uS(r,e){r.seq.push(e),r.map[e.id]=e}u(uS,"addUniform");function V2(r,e,t){let n=r.name,i=n.length;for(Ax.lastIndex=0;;){let s=Ax.exec(n),o=Ax.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uS(t,c===void 0?new Cx(a,r,e):new Px(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Ix(a),uS(t,f)),t=f}}}u(V2,"parseUniform");var Gx=class Gx{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);V2(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};u(Gx,"WebGLUniforms");var Tl=Gx;function hS(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}u(hS,"WebGLShader");var H2=37297,W2=0;function X2(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(X2,"handleSource");var dS=new Je;function q2(r){lt._getMatrix(dS,lt.workingColorSpace,r);let e=`mat3( ${dS.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case qc:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}u(q2,"getEncodingComponents");function fS(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+X2(r.getShaderSource(e),a)}else return s}u(fS,"getShaderErrors");function Y2(r,e){let t=q2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}u(Y2,"getTexelEncodingFunction");var $2={[m0]:"Linear",[g0]:"Reinhard",[x0]:"Cineon",[bu]:"ACESFilmic",[y0]:"AgX",[_0]:"Neutral",[b0]:"Custom"};function K2(r,e){let t=$2[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(K2,"getToneMappingFunction");var ap=new H;function Z2(){lt.getLuminanceCoefficients(ap);let r=ap.x.toFixed(4),e=ap.y.toFixed(4),t=ap.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(Z2,"getLuminanceFunction");function J2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Au).join(`
`)}u(J2,"generateVertexExtensions");function j2(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(j2,"generateDefines");function Q2(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}u(Q2,"fetchAttributeLocations");function Au(r){return r!==""}u(Au,"filterEmptyLine");function pS(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}u(pS,"replaceLightNums");function mS(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(mS,"replaceClippingPlaneNums");var eI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lx(r){return r.replace(eI,tI)}u(Lx,"resolveIncludes");function tI(r,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Lx(t)}u(tI,"includeReplacer");var nI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gS(r){return r.replace(nI,iI)}u(gS,"unrollLoops");function iI(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}u(iI,"loopReplacer");function xS(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}u(xS,"generatePrecision");var rI={[xu]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function sI(r){return rI[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}u(sI,"generateShadowMapTypeDefine");var oI={[Ml]:"ENVMAP_MODE_REFRACTION"};function aI(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":oI[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}u(aI,"generateEnvMapModeDefine");var lI={[p0]:"ENVMAP_BLENDING_MULTIPLY",[NM]:"ENVMAP_BLENDING_MIX",[DM]:"ENVMAP_BLENDING_ADD"};function cI(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":lI[r.combine]||"ENVMAP_BLENDING_NONE"}u(cI,"generateEnvMapBlendingDefine");function uI(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=sI(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=aI(t),f=cI(t),d=J2(t),m=j2(s),g=i.createProgram(),_,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Au).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Au).join(`
`),x.length>0&&(x+=`
`)):(_=[xS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Au).join(`
`),x=[xS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?at.tonemapping_pars_fragment:"",t.toneMapping!==fr?K2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Y2("linearToOutputTexel",t.outputColorSpace),Z2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Au).join(`
`)),o=Lx(o),o=pS(o,t),o=mS(o,t),a=Lx(a),a=pS(a,t),a=mS(a,t),o=gS(o),a=gS(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=b+_+o,w=b+x+a,M=hS(i,i.VERTEX_SHADER,v),R=hS(i,i.FRAGMENT_SHADER,w);i.attachShader(g,M),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(I){if(r.debug.checkShaderErrors){let O=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(M)||"",W=i.getShaderInfoLog(R)||"",U=O.trim(),q=F.trim(),te=W.trim(),z=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,M,R);else{let X=fS(i,M,"vertex"),j=fS(i,R,"fragment");Ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+X+`
`+j)}else U!==""?We("WebGLProgram: Program Info Log:",U):(q===""||te==="")&&(Z=!1);Z&&(I.diagnostics={runnable:z,programLog:U,vertexShader:{log:q,prefix:_},fragmentShader:{log:te,prefix:x}})}i.deleteShader(M),i.deleteShader(R),y=new Tl(i,g),S=Q2(i,g)}u(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,H2)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}u(uI,"WebGLProgram");var hI=0,Vx=class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dx(e),t.set(e,n)),n}};u(Vx,"WebGLShaderCache");var Nx=Vx,Hx=class Hx{constructor(e){this.id=hI++,this.code=e,this.usedTimes=0}};u(Hx,"WebGLShaderStage");var Dx=Hx;function dI(r){return r===pr||r===Su||r===wu}u(dI,"isPackedRGFormat");function fI(r,e,t,n,i,s){let o=new ul,a=new Nx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}u(m,"getChannel");function g(y,S,L,I,O,F){let W=I.fog,U=O.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,te=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||q,te),Z=d[y.type],X=n.precision;y.precision!==null&&(X=n.getMaxPrecision(y.precision),X!==y.precision&&We("WebGLProgram.getParameters:",y.precision,"not supported, using",X,"instead."));let j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=j!==void 0?j.length:0,pe=0;U.morphAttributes.position!==void 0&&(pe=1),U.morphAttributes.normal!==void 0&&(pe=2),U.morphAttributes.color!==void 0&&(pe=3);let ye,ne,me,he;if(Z){let Ne=xr[Z];ye=Ne.vertexShader,ne=Ne.fragmentShader}else{ye=y.vertexShader,ne=y.fragmentShader;let Ne=a.getVertexShaderStage(y),Mt=a.getFragmentShaderStage(y);a.update(y,Ne,Mt),me=Ne.id,he=Mt.id}let ge=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ye=O.isBatchedMesh===!0,De=!!y.map,rt=!!y.matcap,st=!!z,je=st&&z.isPMREMTexture===!0,At=!!y.aoMap,Et=!!y.lightMap,Pt=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,Bt=!!y.displacementMap,xt=!!y.emissiveMap,Tt=!!y.metalnessMap,Xt=!!y.roughnessMap,Q=y.anisotropy>0,N=y.clearcoat>0,se=y.diffuseRoughness>0,ue=y.dispersion>0,xe=y.retroreflectivity>0,$=y.iridescence>0,Re=y.sheen>0,Se=y.transmission>0,Be=Q&&!!y.anisotropyMap,D=N&&!!y.clearcoatMap,T=N&&!!y.clearcoatNormalMap,Y=N&&!!y.clearcoatRoughnessMap,fe=se&&!!y.diffuseRoughnessMap,le=$&&!!y.iridescenceMap,ve=$&&!!y.iridescenceThicknessMap,we=Re&&!!y.sheenColorMap,ae=Re&&!!y.sheenRoughnessMap,ee=!!y.specularMap,be=!!y.specularColorMap,B=!!y.specularIntensityMap,ce=Se&&!!y.transmissionMap,oe=Se&&!!y.thicknessMap,Te=!!y.gradientMap,Me=!!y.alphaMap,Ee=y.alphaTest>0,Xe=!!y.alphaHash,ot=!!y.extensions,_e=fr;y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(_e=r.toneMapping);let $e=je?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,tt={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:ne,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:X,batching:Ye,batchingColor:Ye&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:rt,envMap:st,envMapMode:st&&z.mapping,envMapPMREM:je,envMapMaxLod:je?$e.length-1:null,envMapSize:je?$e[0].width:null,aoMap:At,lightMap:Et,bumpMap:Pt,normalMap:ft,displacementMap:Bt,emissiveMap:xt,normalMapObjectSpace:ft&&y.normalMapType===zM,normalMapTangentSpace:ft&&y.normalMapType===ip,packedNormalMap:ft&&y.normalMapType===ip&&dI(y.normalMap.format),metalnessMap:Tt,roughnessMap:Xt,anisotropy:Q,anisotropyMap:Be,clearcoat:N,clearcoatMap:D,clearcoatNormalMap:T,clearcoatRoughnessMap:Y,diffuseRoughness:se,diffuseRoughnessMap:fe,dispersion:ue,retroreflection:xe,iridescence:$,iridescenceMap:le,iridescenceThicknessMap:ve,sheen:Re,sheenColorMap:we,sheenRoughnessMap:ae,specularMap:ee,specularColorMap:be,specularIntensityMap:B,transmission:Se,transmissionMap:ce,thicknessMap:oe,gradientMap:Te,opaque:y.transparent===!1&&y.blending===vl&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ee,alphaHash:Xe,combine:y.combine,mapUv:De&&m(y.map.channel),aoMapUv:At&&m(y.aoMap.channel),lightMapUv:Et&&m(y.lightMap.channel),bumpMapUv:Pt&&m(y.bumpMap.channel),normalMapUv:ft&&m(y.normalMap.channel),displacementMapUv:Bt&&m(y.displacementMap.channel),emissiveMapUv:xt&&m(y.emissiveMap.channel),metalnessMapUv:Tt&&m(y.metalnessMap.channel),roughnessMapUv:Xt&&m(y.roughnessMap.channel),anisotropyMapUv:Be&&m(y.anisotropyMap.channel),clearcoatMapUv:D&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:le&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ae&&m(y.sheenRoughnessMap.channel),specularMapUv:ee&&m(y.specularMap.channel),specularColorMapUv:be&&m(y.specularColorMap.channel),specularIntensityMapUv:B&&m(y.specularIntensityMap.channel),transmissionMapUv:ce&&m(y.transmissionMap.channel),thicknessMapUv:oe&&m(y.thicknessMap.channel),alphaMapUv:Me&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ft||Q),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(De||Me),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:xt&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===tn,flipSided:y.side===Un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}u(g,"getParameters");function _(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(S,y),b(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}u(_,"getProgramCacheKey");function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}u(x,"getProgramCacheKeyParameters");function b(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}u(b,"getProgramCacheKeyBooleans");function v(y){let S=d[y.type],L;if(S){let I=xr[S];L=Zo.clone(I.uniforms)}else L=y.uniforms;return L}u(v,"getUniforms");function w(y,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new uI(r,S,y,i),c.push(L),h.set(S,L)),L}u(w,"acquireProgram");function M(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}u(M,"releaseProgram");function R(y){a.remove(y)}u(R,"releaseShaderCache");function E(){a.dispose()}return u(E,"dispose"),{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:E}}u(fI,"WebGLPrograms");function pI(){let r=new WeakMap;function e(o){return r.has(o)}u(e,"has");function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}u(t,"get");function n(o){r.delete(o)}u(n,"remove");function i(o,a,l){r.get(o)[a]=l}u(i,"update");function s(){r=new WeakMap}return u(s,"dispose"),{has:e,get:t,remove:n,update:i,dispose:s}}u(pI,"WebGLProperties");function mI(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}u(mI,"painterSortStable");function bS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}u(bS,"reversePainterSortStable");function yS(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}u(s,"init");function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}u(o,"materialVariant");function a(d,m,g,_,x,b){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:x,group:b},r[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=x,v.group=b),e++,v}u(a,"getNextRenderItem");function l(d,m,g,_,x,b,v){v.reversedDepth===!0&&(x=-x);let w=a(d,m,g,_,x,b);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}u(l,"push");function c(d,m,g,_,x,b){let v=a(d,m,g,_,x,b);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}u(c,"unshift");function h(d,m){t.length>1&&t.sort(d||mI),n.length>1&&n.sort(m||bS),i.length>1&&i.sort(m||bS)}u(h,"sort");function f(){for(let d=e,m=r.length;d<m;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return u(f,"finish"),{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}u(yS,"WebGLRenderList");function gI(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new yS,r.set(n,[o])):i>=s.length?(o=new yS,s.push(o)):o=s[i],o}u(e,"get");function t(){r=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(gI,"WebGLRenderLists");function xI(){let r={};return{get:u(function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Pe};break;case"SpotLight":t={position:new H,direction:new H,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t},"get")}}u(xI,"UniformsCache");function bI(){let r={};return{get:u(function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t},"get")}}u(bI,"ShadowUniformsCache");var yI=0;function _I(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}u(_I,"shadowCastingAndTexturingLightsFirst");function vI(r){let e=new xI,t=bI(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,s=new Ke,o=new Ke;function a(c){let h=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,g=0,_=0,x=0,b=0,v=0,w=0,M=0,R=0,E=0,y=0,S=0,L=0,I=0;c.sort(_I);for(let F=0,W=c.length;F<W;F++){let U=c[F],q=U.color,te=U.intensity,z=U.distance,Z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===pr?Z=U.shadow.map.texture:Z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=q.r*te,f+=q.g*te,d+=q.b*te;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],te);I++}else if(U.isSunLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,ie=t.get(U);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=ie,n.sunShadowMap[g]=Z;let pe=j.getViewportCount();for(let ye=0;ye<pe;ye++)n.sunShadowMatrix[_+ye]=j.getMatrix(ye),n.sunShadowCascade[_+ye]=j._cascadeData[ye];_+=pe,g++}n.sun[m]=X,m++}else if(U.isDirectionalLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,ie=t.get(U);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,n.directionalShadow[x]=ie,n.directionalShadowMap[x]=Z,n.directionalShadowMatrix[x]=U.shadow.matrix,R++}n.directional[x]=X,x++}else if(U.isSpotLight){let X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(q).multiplyScalar(te),X.distance=z,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[v]=X;let j=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,j.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[v]=j.matrix,U.castShadow){let ie=t.get(U);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=Z,y++}v++}else if(U.isRectAreaLight){let X=e.get(U);X.color.copy(q).multiplyScalar(te),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=X,w++}else if(U.isPointLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let j=U.shadow,ie=t.get(U);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,n.pointShadow[b]=ie,n.pointShadowMap[b]=Z,n.pointShadowMatrix[b]=U.shadow.matrix,E++}n.point[b]=X,b++}else if(U.isHemisphereLight){let X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(te),X.groundColor.copy(U.groundColor).multiplyScalar(te),n.hemi[M]=X,M++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let O=n.hash;(O.sunLength!==m||O.directionalLength!==x||O.pointLength!==b||O.spotLength!==v||O.rectAreaLength!==w||O.hemiLength!==M||O.numSunShadows!==g||O.numDirectionalShadows!==R||O.numPointShadows!==E||O.numSpotShadows!==y||O.numSpotMaps!==S||O.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=x,n.spot.length=v,n.rectArea.length=w,n.point.length=b,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,O.sunLength=m,O.directionalLength=x,O.pointLength=b,O.spotLength=v,O.rectAreaLength=w,O.hemiLength=M,O.numSunShadows=g,O.numDirectionalShadows=R,O.numPointShadows=E,O.numSpotShadows=y,O.numSpotMaps=S,O.numLightProbes=I,n.version=yI++)}u(a,"setup");function l(c,h){let f=0,d=0,m=0,g=0,_=0,x=0,b=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let M=c[v];if(M.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(b),f++}else if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(b),d++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),R.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(b),g++}else if(M.isRectAreaLight){let R=n.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),o.identity(),s.copy(M.matrixWorld),s.premultiply(b),o.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(b),m++}else if(M.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(b),x++}}}return u(l,"setupView"),{setup:a,setupView:l,state:n}}u(vI,"WebGLLights");function _S(r){let e=new vI(r),t=[],n=[],i=[];function s(f){h.camera=f,t.length=0,n.length=0,i.length=0}u(s,"init");function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}u(o,"pushLight");function a(f){n.push(f)}u(a,"pushShadow");function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}u(l,"setupLights");function c(f){e.setupView(t,f)}u(c,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(_S,"WebGLRenderState");function MI(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new _S(r),e.set(i,[a])):s>=o.length?(a=new _S(r),o.push(a)):a=o[s],a}u(t,"get");function n(){e=new WeakMap}return u(n,"dispose"),{get:t,dispose:n}}u(MI,"WebGLRenderStates");var SI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wI=`uniform sampler2D shadow_pass;
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
}`,EI=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],TI=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],vS=new Ke,Tu=new H,Rx=new H;function AI(r,e,t){let n=new ks,i=new He,s=new He,o=new St,a=new Bd,l=new kd,c={},h=t.maxTextureSize,f={[vi]:Un,[Un]:vi,[tn]:tn},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:SI,fragmentShader:wI}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ct(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let b=this.type;this.render=function(E,y,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===pf&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xu);let L=r.getRenderTarget(),I=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Wo),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let W=b!==this.type;W&&y.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(q=>q.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,q=E.length;U<q;U++){let te=E[U],z=te.shadow;if(z===void 0){We("WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Z=z.getFrameExtents();i.multiply(Z),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,z.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_l){if(te.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ei(i.x,i.y,{format:pr,type:ri,minFilter:kt,magFilter:kt,generateMipmaps:!1}),z.map.texture.name=te.name+".shadowMap",z.map.depthTexture=new Qr(i.x,i.y,ii),z.map.depthTexture.name=te.name+".shadowMapDepth",z.map.depthTexture.format=Jr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht}else te.isPointLight?(z.map=new Ru(i.x),z.map.depthTexture=new su(i.x,Hi)):(z.map=new ei(i.x,i.y),z.map.depthTexture=new Qr(i.x,i.y,Hi)),z.map.depthTexture.name=te.name+".shadowMap",z.map.depthTexture.format=Jr,this.type===xu?(z.map.depthTexture.compareFunction=X?P0:C0,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let j=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();te.isPointLight!==!0&&z.updateMatrices(te,S);let ie=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let pe=0;pe<j;pe++){let ye=z.getCamera(pe);if(te.isPointLight){let ne=z.camera,me=z.matrix,he=te.distance||ne.far;he!==ne.far&&(ne.far=he,ne.updateProjectionMatrix()),Tu.setFromMatrixPosition(te.matrixWorld),ne.position.copy(Tu),Rx.copy(ne.position),Rx.add(EI[pe]),ne.up.copy(TI[pe]),ne.lookAt(Rx),ne.updateMatrixWorld(),me.makeTranslation(-Tu.x,-Tu.y,-Tu.z),vS.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),z._frustum.setFromProjectionMatrix(vS,ne.coordinateSystem,ne.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,pe),r.clear();else{pe===0&&(r.setRenderTarget(z.map),r.clear());let ne=z.getViewport(pe);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),F.viewport(o)}n=z.getFrustum(pe),M(y,S,ye,te,ie,this.type)}z.isPointLightShadow!==!0&&this.type===_l&&v(z,S),z.needsUpdate=!1}b=this.type,x.needsUpdate=!1,r.setRenderTarget(L,I,O)};function v(E,y){let S=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new ei(i.x,i.y,{format:pr,type:ri}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(y,null,S,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(y,null,S,m,_,null)}u(v,"VSMPass");function w(E,y,S,L){let I=null,O=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)I=O;else if(I=S.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let F=I.uuid,W=y.uuid,U=c[F];U===void 0&&(U={},c[F]=U);let q=U[W];q===void 0&&(q=I.clone(),U[W]=q,y.addEventListener("dispose",R)),I=q}if(I.visible=y.visible,I.wireframe=y.wireframe,L===_l?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:f[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=r.properties.get(I);F.light=S}return I}u(w,"getDepthMaterial");function M(E,y,S,L,I,O){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===_l)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let U=e.update(E),q=E.material;if(Array.isArray(q)){let te=U.groups;for(let z=0,Z=te.length;z<Z;z++){let X=te[z],j=q[X.materialIndex];if(j&&j.visible){let ie=w(E,j,L,O);E.onBeforeShadow(r,E,y,S,U,ie,X),r.renderBufferDirect(S,null,U,ie,E,X),E.onAfterShadow(r,E,y,S,U,ie,X)}}}else if(q.visible){let te=w(E,q,L,O);E.onBeforeShadow(r,E,y,S,U,te,null),r.renderBufferDirect(S,null,U,te,E,null),E.onAfterShadow(r,E,y,S,U,te,null)}}let W=E.children;for(let U=0,q=W.length;U<q;U++)M(W[U],y,S,L,I,O)}u(M,"renderObject");function R(E){E.target.removeEventListener("dispose",R);for(let S in c){let L=c[S],I=E.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}u(R,"onMaterialDispose")}u(AI,"WebGLShadowMap");function RI(r,e){function t(){let B=!1,ce=new St,oe=null,Te=new St(0,0,0,0);return{setMask:u(function(Me){oe!==Me&&!B&&(r.colorMask(Me,Me,Me,Me),oe=Me)},"setMask"),setLocked:u(function(Me){B=Me},"setLocked"),setClear:u(function(Me,Ee,Xe,ot,_e){_e===!0&&(Me*=ot,Ee*=ot,Xe*=ot),ce.set(Me,Ee,Xe,ot),Te.equals(ce)===!1&&(r.clearColor(Me,Ee,Xe,ot),Te.copy(ce))},"setClear"),reset:u(function(){B=!1,oe=null,Te.set(-1,0,0,0)},"reset")}}u(t,"ColorBuffer");function n(){let B=!1,ce=!1,oe=null,Te=null,Me=null;return{setReversed:u(function(Ee){if(ce!==Ee){let Xe=e.get("EXT_clip_control");Ee?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ce=Ee;let ot=Me;Me=null,this.setClear(ot)}},"setReversed"),getReversed:u(function(){return ce},"getReversed"),setTest:u(function(Ee){Ee?de(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},"setTest"),setMask:u(function(Ee){oe!==Ee&&!B&&(r.depthMask(Ee),oe=Ee)},"setMask"),setFunc:u(function(Ee){if(ce&&(Ee=ZM[Ee]),Te!==Ee){switch(Ee){case Sd:r.depthFunc(r.NEVER);break;case wd:r.depthFunc(r.ALWAYS);break;case Ed:r.depthFunc(r.LESS);break;case rl:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case Ad:r.depthFunc(r.GEQUAL);break;case Rd:r.depthFunc(r.GREATER);break;case Cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=Ee}},"setFunc"),setLocked:u(function(Ee){B=Ee},"setLocked"),setClear:u(function(Ee){Me!==Ee&&(Me=Ee,ce&&(Ee=1-Ee),r.clearDepth(Ee))},"setClear"),reset:u(function(){B=!1,oe=null,Te=null,Me=null,ce=!1},"reset")}}u(n,"DepthBuffer");function i(){let B=!1,ce=null,oe=null,Te=null,Me=null,Ee=null,Xe=null,ot=null,_e=null;return{setTest:u(function($e){B||($e?de(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},"setTest"),setMask:u(function($e){ce!==$e&&!B&&(r.stencilMask($e),ce=$e)},"setMask"),setFunc:u(function($e,tt,Ne){(oe!==$e||Te!==tt||Me!==Ne)&&(r.stencilFunc($e,tt,Ne),oe=$e,Te=tt,Me=Ne)},"setFunc"),setOp:u(function($e,tt,Ne){(Ee!==$e||Xe!==tt||ot!==Ne)&&(r.stencilOp($e,tt,Ne),Ee=$e,Xe=tt,ot=Ne)},"setOp"),setLocked:u(function($e){B=$e},"setLocked"),setClear:u(function($e){_e!==$e&&(r.clearStencil($e),_e=$e)},"setClear"),reset:u(function(){B=!1,ce=null,oe=null,Te=null,Me=null,Ee=null,Xe=null,ot=null,_e=null},"reset")}}u(i,"StencilBuffer");let s=new t,o=new n,a=new i,l={},c=new WeakMap,h={},f={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,w=null,M=null,R=null,E=null,y=null,S=new Pe(0,0,0),L=0,I=!1,O=null,F=null,W=null,U=null,q=null,te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=Z>=2);let j=null,ie={},pe=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),ne=new St().fromArray(pe),me=new St().fromArray(ye);function he(B,ce,oe,Te){let Me=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(B,Ee),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<oe;Xe++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(ce+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return Ee}u(he,"createTexture");let ge={};ge[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(r.DEPTH_TEST),o.setFunc(rl),Pt(!1),ft(l0),de(r.CULL_FACE),At(Wo);function de(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}u(de,"enable");function Fe(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}u(Fe,"disable");function Ye(B,ce){return d[B]!==ce?(r.bindFramebuffer(B,ce),d[B]=ce,B===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),B===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce),!0):!1}u(Ye,"bindFramebuffer");function De(B,ce){let oe=g,Te=!1;if(B){oe=m.get(ce),oe===void 0&&(oe=[],m.set(ce,oe));let Me=B.textures;if(oe.length!==Me.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,Xe=Me.length;Ee<Xe;Ee++)oe[Ee]=r.COLOR_ATTACHMENT0+Ee;oe.length=Me.length,Te=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,Te=!0);Te&&r.drawBuffers(oe)}u(De,"drawBuffers");function rt(B){return _!==B?(r.useProgram(B),_=B,!0):!1}u(rt,"useProgram");let st={[Xo]:r.FUNC_ADD,[gM]:r.FUNC_SUBTRACT,[xM]:r.FUNC_REVERSE_SUBTRACT};st[bM]=r.MIN,st[yM]=r.MAX;let je={[_M]:r.ZERO,[vM]:r.ONE,[MM]:r.SRC_COLOR,[d0]:r.SRC_ALPHA,[RM]:r.SRC_ALPHA_SATURATE,[TM]:r.DST_COLOR,[wM]:r.DST_ALPHA,[SM]:r.ONE_MINUS_SRC_COLOR,[f0]:r.ONE_MINUS_SRC_ALPHA,[AM]:r.ONE_MINUS_DST_COLOR,[EM]:r.ONE_MINUS_DST_ALPHA,[CM]:r.CONSTANT_COLOR,[PM]:r.ONE_MINUS_CONSTANT_COLOR,[IM]:r.CONSTANT_ALPHA,[LM]:r.ONE_MINUS_CONSTANT_ALPHA};function At(B,ce,oe,Te,Me,Ee,Xe,ot,_e,$e){if(B===Wo){x===!0&&(Fe(r.BLEND),x=!1);return}if(x===!1&&(de(r.BLEND),x=!0),B!==mM){if(B!==b||$e!==I){if((v!==Xo||R!==Xo)&&(r.blendEquation(r.FUNC_ADD),v=Xo,R=Xo),$e)switch(B){case vl:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case c0:r.blendFunc(r.ONE,r.ONE);break;case u0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case h0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",B);break}else switch(B){case vl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case c0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case u0:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h0:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",B);break}w=null,M=null,E=null,y=null,S.set(0,0,0),L=0,b=B,I=$e}return}Me=Me||ce,Ee=Ee||oe,Xe=Xe||Te,(ce!==v||Me!==R)&&(r.blendEquationSeparate(st[ce],st[Me]),v=ce,R=Me),(oe!==w||Te!==M||Ee!==E||Xe!==y)&&(r.blendFuncSeparate(je[oe],je[Te],je[Ee],je[Xe]),w=oe,M=Te,E=Ee,y=Xe),(ot.equals(S)===!1||_e!==L)&&(r.blendColor(ot.r,ot.g,ot.b,_e),S.copy(ot),L=_e),b=B,I=!1}u(At,"setBlending");function Et(B,ce){B.side===tn?Fe(r.CULL_FACE):de(r.CULL_FACE);let oe=B.side===Un;ce&&(oe=!oe),Pt(oe),B.blending===vl&&B.transparent===!1?At(Wo):At(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let Te=B.stencilWrite;a.setTest(Te),Te&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),xt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}u(Et,"setMaterial");function Pt(B){O!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),O=B)}u(Pt,"setFlipSided");function ft(B){B!==fM?(de(r.CULL_FACE),B!==F&&(B===l0?r.cullFace(r.BACK):B===pM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),F=B}u(ft,"setCullFace");function Bt(B){B!==W&&(z&&r.lineWidth(B),W=B)}u(Bt,"setLineWidth");function xt(B,ce,oe){B?(de(r.POLYGON_OFFSET_FILL),(U!==ce||q!==oe)&&(U=ce,q=oe,o.getReversed()&&(ce=-ce,oe=-oe),r.polygonOffset(ce,oe))):Fe(r.POLYGON_OFFSET_FILL)}u(xt,"setPolygonOffset");function Tt(B){B?de(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}u(Tt,"setScissorTest");function Xt(B){B===void 0&&(B=r.TEXTURE0+te-1),j!==B&&(r.activeTexture(B),j=B)}u(Xt,"activeTexture");function Q(B,ce,oe){oe===void 0&&(j===null?oe=r.TEXTURE0+te-1:oe=j);let Te=ie[oe];Te===void 0&&(Te={type:void 0,texture:void 0},ie[oe]=Te),(Te.type!==B||Te.texture!==ce)&&(j!==oe&&(r.activeTexture(oe),j=oe),r.bindTexture(B,ce||ge[B]),Te.type=B,Te.texture=ce)}u(Q,"bindTexture");function N(){let B=ie[j];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}u(N,"unbindTexture");function se(){try{r.compressedTexImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(se,"compressedTexImage2D");function ue(){try{r.compressedTexImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(ue,"compressedTexImage3D");function xe(){try{r.texSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(xe,"texSubImage2D");function $(){try{r.texSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}u($,"texSubImage3D");function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(Re,"compressedTexSubImage2D");function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(Se,"compressedTexSubImage3D");function Be(){try{r.texStorage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(Be,"texStorage2D");function D(){try{r.texStorage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(D,"texStorage3D");function T(){try{r.texImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(T,"texImage2D");function Y(){try{r.texImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}u(Y,"texImage3D");function fe(B){return f[B]!==void 0?f[B]:r.getParameter(B)}u(fe,"getParameter");function le(B,ce){f[B]!==ce&&(r.pixelStorei(B,ce),f[B]=ce)}u(le,"pixelStorei");function ve(B){ne.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}u(ve,"scissor");function we(B){me.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),me.copy(B))}u(we,"viewport");function ae(B,ce){let oe=c.get(ce);oe===void 0&&(oe=new WeakMap,c.set(ce,oe));let Te=oe.get(B);Te===void 0&&(Te=r.getUniformBlockIndex(ce,B.name),r.uniformBlockBinding(ce,Te,Te),oe.set(B,Te))}u(ae,"updateUBOMapping");function ee(B,ce,oe){let Me=c.get(ce).get(B);l[Me]!==oe&&(r.bindBufferBase(r.UNIFORM_BUFFER,Me,oe),l[Me]=oe)}u(ee,"uniformBlockBinding");function be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,ie={},d={},l={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,w=null,M=null,R=null,E=null,y=null,S=new Pe(0,0,0),L=0,I=!1,O=null,F=null,W=null,U=null,q=null,ne.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return u(be,"reset"),{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Fe,bindFramebuffer:Ye,drawBuffers:De,useProgram:rt,setBlending:At,setMaterial:Et,setFlipSided:Pt,setCullFace:ft,setLineWidth:Bt,setPolygonOffset:xt,setScissorTest:Tt,activeTexture:Xt,bindTexture:Q,unbindTexture:N,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:T,texImage3D:Y,pixelStorei:le,getParameter:fe,updateUBOMapping:ae,uniformBlockBinding:ee,texStorage2D:Be,texStorage3D:D,texSubImage2D:xe,texSubImage3D:$,compressedTexSubImage2D:Re,compressedTexSubImage3D:Se,scissor:ve,viewport:we,reset:be}}u(RI,"WebGLState");function CI(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,f=new Set,d,m=new WeakMap,g=new Set,_=new FinalizationRegistry(D=>g.delete(D)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,T){return x?new OffscreenCanvas(D,T):al("canvas")}u(b,"createCanvas");function v(D,T,Y){let fe=1,le=Be(D);if((le.width>Y||le.height>Y)&&(fe=Y/Math.max(le.width,le.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ve=Math.floor(fe*le.width),we=Math.floor(fe*le.height);d===void 0&&(d=b(ve,we));let ae=T?b(ve,we):d;return ae.width=ve,ae.height=we,ae.getContext("2d").drawImage(D,0,0,ve,we),We("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ve+"x"+we+")."),ae}else return"data"in D&&We("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}u(v,"resizeImage");function w(D){return D.generateMipmaps}u(w,"textureNeedsGenerateMipmaps");function M(D){r.generateMipmap(D)}u(M,"generateMipmap");function R(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}u(R,"getTargetType");function E(D,T,Y,fe,le,ve=!1){if(D!==null){if(r[D]!==void 0)return r[D];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let we;fe&&(we=e.get("EXT_texture_norm16"),we||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=T;if(T===r.RED&&(Y===r.FLOAT&&(ae=r.R32F),Y===r.HALF_FLOAT&&(ae=r.R16F),Y===r.UNSIGNED_BYTE&&(ae=r.R8),Y===r.UNSIGNED_SHORT&&we&&(ae=we.R16_EXT),Y===r.SHORT&&we&&(ae=we.R16_SNORM_EXT)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ae=r.R8UI),Y===r.UNSIGNED_SHORT&&(ae=r.R16UI),Y===r.UNSIGNED_INT&&(ae=r.R32UI),Y===r.BYTE&&(ae=r.R8I),Y===r.SHORT&&(ae=r.R16I),Y===r.INT&&(ae=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(ae=r.RG32F),Y===r.HALF_FLOAT&&(ae=r.RG16F),Y===r.UNSIGNED_BYTE&&(ae=r.RG8),Y===r.UNSIGNED_SHORT&&we&&(ae=we.RG16_EXT),Y===r.SHORT&&we&&(ae=we.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ae=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ae=r.RG16UI),Y===r.UNSIGNED_INT&&(ae=r.RG32UI),Y===r.BYTE&&(ae=r.RG8I),Y===r.SHORT&&(ae=r.RG16I),Y===r.INT&&(ae=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),Y===r.UNSIGNED_INT&&(ae=r.RGB32UI),Y===r.BYTE&&(ae=r.RGB8I),Y===r.SHORT&&(ae=r.RGB16I),Y===r.INT&&(ae=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ae=r.RGBA32UI),Y===r.BYTE&&(ae=r.RGBA8I),Y===r.SHORT&&(ae=r.RGBA16I),Y===r.INT&&(ae=r.RGBA32I)),T===r.RGB&&(Y===r.UNSIGNED_SHORT&&we&&(ae=we.RGB16_EXT),Y===r.SHORT&&we&&(ae=we.RGB16_SNORM_EXT),Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ae=r.R11F_G11F_B10F)),T===r.RGBA){let ee=ve?qc:lt.getTransfer(le);Y===r.FLOAT&&(ae=r.RGBA32F),Y===r.HALF_FLOAT&&(ae=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ae=ee===vt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT&&we&&(ae=we.RGBA16_EXT),Y===r.SHORT&&we&&(ae=we.RGBA16_SNORM_EXT),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}u(E,"getInternalFormat");function y(D,T){let Y;return D?T===null||T===Hi||T===$o?Y=r.DEPTH24_STENCIL8:T===ii?Y=r.DEPTH32F_STENCIL8:T===wl&&(Y=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hi||T===$o?Y=r.DEPTH_COMPONENT24:T===ii?Y=r.DEPTH_COMPONENT32F:T===wl&&(Y=r.DEPTH_COMPONENT16),Y}u(y,"getInternalDepthFormat");function S(D,T){return w(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ht&&D.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}u(S,"getMipLevels");function L(D){let T=new WeakRef(D);n.get(D).__ref=T,g.add(T),_.register(D,T,T)}u(L,"track");function I(D){let T=n.get(D).__ref;T!==void 0&&(g.delete(T),_.unregister(T))}u(I,"untrack");function O(D){W(D.target)}u(O,"onTextureDispose");function F(D){U(D.target)}u(F,"onRenderTargetDispose");function W(D){D.removeEventListener("dispose",O),I(D),te(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&f.delete(D)}u(W,"destroyTexture");function U(D){D.removeEventListener("dispose",F),I(D),Z(D)}u(U,"destroyRenderTarget");function q(){for(let D of g){let T=D.deref();T!==void 0&&(T.isRenderTarget===!0?U(T):W(T))}g.clear(),f.clear()}u(q,"dispose");function te(D){let T=n.get(D);if(T.__webglInit===void 0)return;let Y=D.source,fe=m.get(Y);if(fe){let le=fe[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&z(D),Object.keys(fe).length===0&&m.delete(Y)}n.remove(D)}u(te,"deallocateTexture");function z(D){let T=n.get(D);r.deleteTexture(T.__webglTexture);let Y=D.source,fe=m.get(Y);delete fe[T.__cacheKey],o.memory.textures--}u(z,"deleteTexture");function Z(D){let T=n.get(D);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Y=D.depthTexture;if(Y&&Y.renderTarget===D&&W(Y),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let ve=0;ve<T.__webglFramebuffer[le].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[le][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)r.deleteFramebuffer(T.__webglFramebuffer[le]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let fe=D.textures;for(let le=0,ve=fe.length;le<ve;le++){let we=n.get(fe[le]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(fe[le])}n.remove(D)}u(Z,"deallocateRenderTarget");let X=0;function j(){X=0}u(j,"resetTextureUnits");function ie(){return X}u(ie,"getTextureUnits");function pe(D){X=D}u(pe,"setTextureUnits");function ye(){let D=X;return D>=i.maxTextures&&We("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,D}u(ye,"allocateTextureUnit");function ne(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.mipmapsAutoUpdate),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}u(ne,"getTextureCacheKey");function me(D,T){let Y=n.get(D);if(D.isVideoTexture&&Re(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){let fe=D.image;if(fe===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(Y,D,T);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}u(me,"setTexture2D");function he(D,T){let Y=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Et(Y,D,T);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}u(he,"setTexture2DArray");function ge(D,T){let Y=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Et(Y,D,T);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}u(ge,"setTexture3D");function de(D,T){let Y=n.get(D);if(D.version>0&&Y.__version!==D.version){Pt(Y,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}u(de,"setTextureCube");let Fe={[Hn]:r.REPEAT,[Vn]:r.CLAMP_TO_EDGE,[sl]:r.MIRRORED_REPEAT},Ye={[Ht]:r.NEAREST,[xf]:r.NEAREST_MIPMAP_NEAREST,[Yo]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[Sl]:r.LINEAR_MIPMAP_NEAREST,[Sn]:r.LINEAR_MIPMAP_LINEAR},De={[VM]:r.NEVER,[I0]:r.ALWAYS,[HM]:r.LESS,[C0]:r.LEQUAL,[WM]:r.EQUAL,[P0]:r.GEQUAL,[XM]:r.GREATER,[qM]:r.NOTEQUAL};function rt(D,T){if(T.type===ii&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===Sl||T.magFilter===Yo||T.magFilter===Sn||T.minFilter===kt||T.minFilter===Sl||T.minFilter===Yo||T.minFilter===Sn)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Fe[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Fe[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Fe[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Ye[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Ye[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,De[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ht||T.minFilter!==Yo&&T.minFilter!==Sn||T.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}u(rt,"setTextureParameters");function st(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",O),L(T));let fe=T.source,le=m.get(fe);le===void 0&&(le={},m.set(fe,le));let ve=ne(T);if(ve!==D.__cacheKey){le[ve]===void 0&&(le[ve]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),le[ve].usedTimes++;let we=le[D.__cacheKey];we!==void 0&&(le[D.__cacheKey].usedTimes--,we.usedTimes===0&&z(T)),D.__cacheKey=ve,D.__webglTexture=le[ve].texture}return Y}u(st,"initTexture");function je(D,T,Y){return Math.floor(Math.floor(D/Y)/T)}u(je,"getRow");function At(D,T,Y,fe){let ve=D.updateRanges;if(ve.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Y,fe,T.data);else{ve.sort((B,ce)=>B.start-ce.start);let we=0;for(let B=1;B<ve.length;B++){let ce=ve[we],oe=ve[B],Te=ce.start+ce.count,Me=je(oe.start,T.width,4),Ee=je(ce.start,T.width,4);oe.start<=Te+1&&Me===Ee&&je(oe.start+oe.count-1,T.width,4)===Me?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++we,ve[we]=oe)}ve.length=we+1;let ae=t.getParameter(r.UNPACK_ROW_LENGTH),ee=t.getParameter(r.UNPACK_SKIP_PIXELS),be=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let B=0,ce=ve.length;B<ce;B++){let oe=ve[B],Te=Math.floor(oe.start/4),Me=Math.ceil(oe.count/4),Ee=Te%T.width,Xe=Math.floor(Te/T.width),ot=Me,_e=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(r.TEXTURE_2D,0,Ee,Xe,ot,_e,Y,fe,T.data)}D.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ae),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(r.UNPACK_SKIP_ROWS,be)}}u(At,"updateTexture");function Et(D,T,Y){let fe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=r.TEXTURE_3D);let le=st(D,T),ve=T.source;t.bindTexture(fe,D.__webglTexture,r.TEXTURE0+Y);let we=n.get(ve);if(ve.version!==we.__version||le===!0){if(t.activeTexture(r.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let _e=lt.getPrimaries(lt.workingColorSpace),$e=T.colorSpace===Wi?null:lt.getPrimaries(T.colorSpace),tt=T.colorSpace===Wi||_e===$e?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let ee=v(T.image,!1,i.maxTextureSize);ee=Se(T,ee);let be=s.convert(T.format,T.colorSpace),B=s.convert(T.type),ce=E(T.internalFormat,be,B,T.normalized,T.colorSpace,T.isVideoTexture);rt(fe,T);let oe,Te=T.mipmaps,Me=T.isVideoTexture!==!0,Ee=we.__version===void 0||le===!0,Xe=ve.dataReady,ot=S(T,ee);if(T.isDepthTexture)ce=y(T.format===as,T.type),Ee&&(Me?t.texStorage2D(r.TEXTURE_2D,1,ce,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,ce,ee.width,ee.height,0,be,B,null));else if(T.isDataTexture)if(Te.length>0){Me&&Ee&&t.texStorage2D(r.TEXTURE_2D,ot,ce,Te[0].width,Te[0].height);for(let _e=0,$e=Te.length;_e<$e;_e++)oe=Te[_e],Me?Xe&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,oe.width,oe.height,be,B,oe.data):t.texImage2D(r.TEXTURE_2D,_e,ce,oe.width,oe.height,0,be,B,oe.data);T.generateMipmaps=!1}else Me?(Ee&&t.texStorage2D(r.TEXTURE_2D,ot,ce,ee.width,ee.height),Xe&&At(T,ee,be,B)):t.texImage2D(r.TEXTURE_2D,0,ce,ee.width,ee.height,0,be,B,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Me&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ot,ce,Te[0].width,Te[0].height,ee.depth);for(let _e=0,$e=Te.length;_e<$e;_e++)if(oe=Te[_e],T.format!==qn)if(be!==null)if(Me){if(Xe)if(T.layerUpdates.size>0){let tt=G0(oe.width,oe.height,T.format,T.type);for(let Ne of T.layerUpdates){let Mt=oe.data.subarray(Ne*tt/oe.data.BYTES_PER_ELEMENT,(Ne+1)*tt/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,Ne,oe.width,oe.height,1,be,Mt)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,oe.width,oe.height,ee.depth,be,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,ce,oe.width,oe.height,ee.depth,0,oe.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Xe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,oe.width,oe.height,ee.depth,be,B,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,ce,oe.width,oe.height,ee.depth,0,be,B,oe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Me&&Ee&&t.texStorage2D(r.TEXTURE_2D,ot,ce,Te[0].width,Te[0].height);for(let _e=0,$e=Te.length;_e<$e;_e++)oe=Te[_e],T.format!==qn?be!==null?Me?Xe&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,oe.width,oe.height,be,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,ce,oe.width,oe.height,0,oe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Xe&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,oe.width,oe.height,be,B,oe.data):t.texImage2D(r.TEXTURE_2D,_e,ce,oe.width,oe.height,0,be,B,oe.data)}else if(T.isDataArrayTexture)if(Me){if(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ot,ce,ee.width,ee.height,ee.depth),Xe)if(T.layerUpdates.size>0){let _e=G0(ee.width,ee.height,T.format,T.type);for(let $e of T.layerUpdates){let tt=ee.data.subarray($e*_e/ee.data.BYTES_PER_ELEMENT,($e+1)*_e/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$e,ee.width,ee.height,1,be,B,tt)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,be,B,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,ee.width,ee.height,ee.depth,0,be,B,ee.data);else if(T.isData3DTexture)Me?(Ee&&t.texStorage3D(r.TEXTURE_3D,ot,ce,ee.width,ee.height,ee.depth),Xe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,be,B,ee.data)):t.texImage3D(r.TEXTURE_3D,0,ce,ee.width,ee.height,ee.depth,0,be,B,ee.data);else if(T.isFramebufferTexture){if(Ee)if(Me)t.texStorage2D(r.TEXTURE_2D,ot,ce,ee.width,ee.height);else{let _e=ee.width,$e=ee.height;for(let tt=0;tt<ot;tt++)t.texImage2D(r.TEXTURE_2D,tt,ce,_e,$e,0,be,B,null),_e>>=1,$e>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ee.parentNode!==_e){_e.appendChild(ee),f.add(T),_e.onpaint=$e=>{let tt=$e.changedElements;for(let Ne of f)tt.includes(Ne.image)&&(Ne.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ee);else{let tt=r.RGBA,Ne=r.RGBA,Mt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,tt,Ne,Mt,ee)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Me&&Ee){let _e=Be(Te[0]);t.texStorage2D(r.TEXTURE_2D,ot,ce,_e.width,_e.height)}for(let _e=0,$e=Te.length;_e<$e;_e++)oe=Te[_e],Me?Xe&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,be,B,oe):t.texImage2D(r.TEXTURE_2D,_e,ce,be,B,oe);T.generateMipmaps=!1}else if(Me){if(Ee){let _e=Be(ee);t.texStorage2D(r.TEXTURE_2D,ot,ce,_e.width,_e.height)}Xe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,B,ee)}else t.texImage2D(r.TEXTURE_2D,0,ce,be,B,ee);w(T)&&T.mipmapsAutoUpdate===!0&&M(fe),we.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}u(Et,"uploadTexture");function Pt(D,T,Y){if(T.image.length!==6)return;let fe=st(D,T),le=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Y);let ve=n.get(le);if(le.version!==ve.__version||fe===!0){t.activeTexture(r.TEXTURE0+Y);let we=lt.getPrimaries(lt.workingColorSpace),ae=T.colorSpace===Wi?null:lt.getPrimaries(T.colorSpace),ee=T.colorSpace===Wi||we===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let be=T.isCompressedTexture||T.image[0].isCompressedTexture,B=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let Ne=0;Ne<6;Ne++)!be&&!B?ce[Ne]=v(T.image[Ne],!0,i.maxCubemapSize):ce[Ne]=B?T.image[Ne].image:T.image[Ne],ce[Ne]=Se(T,ce[Ne]);let oe=ce[0],Te=s.convert(T.format,T.colorSpace),Me=s.convert(T.type),Ee=E(T.internalFormat,Te,Me,T.normalized,T.colorSpace),Xe=T.isVideoTexture!==!0,ot=ve.__version===void 0||fe===!0,_e=le.dataReady,$e=S(T,oe);rt(r.TEXTURE_CUBE_MAP,T);let tt;if(T.isDepthTexture){if(Ee=y(T.format===as,T.type),ot)if(Xe)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Ee,oe.width,oe.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,oe.width,oe.height,0,Te,Me,null)}else if(be){Xe&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,$e,Ee,oe.width,oe.height);for(let Ne=0;Ne<6;Ne++){tt=ce[Ne].mipmaps;for(let Mt=0;Mt<tt.length;Mt++){let an=tt[Mt];T.format!==qn?Te!==null?Xe?_e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt,0,0,an.width,an.height,Te,an.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt,Ee,an.width,an.height,0,an.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt,0,0,an.width,an.height,Te,Me,an.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt,Ee,an.width,an.height,0,Te,Me,an.data)}}}else{if(tt=T.mipmaps,Xe&&ot){tt.length>0&&$e++;let Ne=Be(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,$e,Ee,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(B){Xe?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ce[Ne].width,ce[Ne].height,Te,Me,ce[Ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,ce[Ne].width,ce[Ne].height,0,Te,Me,ce[Ne].data);for(let Mt=0;Mt<tt.length;Mt++){let ws=tt[Mt].image[Ne].image;Xe?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt+1,0,0,ws.width,ws.height,Te,Me,ws.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt+1,Ee,ws.width,ws.height,0,Te,Me,ws.data)}}else{Xe?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Te,Me,ce[Ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,Te,Me,ce[Ne]);for(let Mt=0;Mt<tt.length;Mt++){let an=tt[Mt];Xe?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt+1,0,0,Te,Me,an.image[Ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Mt+1,Ee,Te,Me,an.image[Ne])}}}w(T)&&T.mipmapsAutoUpdate===!0&&M(r.TEXTURE_CUBE_MAP),ve.__version=le.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}u(Pt,"uploadCubeTexture");function ft(D,T,Y,fe,le,ve){let we=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),ee=E(Y.internalFormat,we,ae,Y.normalized,Y.colorSpace),be=n.get(T),B=n.get(Y);if(B.__renderTarget=T,!be.__hasExternalTextures){let ce=Math.max(1,T.width>>ve),oe=Math.max(1,T.height>>ve);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,ve,ee,ce,oe,T.depth,0,we,ae,null):t.texImage2D(le,ve,ee,ce,oe,0,we,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),$(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,le,B.__webglTexture,0,xe(T)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,le,B.__webglTexture,ve),t.bindFramebuffer(r.FRAMEBUFFER,null)}u(ft,"setupFrameBufferTexture");function Bt(D,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){let fe=T.depthTexture,le=fe&&fe.isDepthTexture?fe.type:null,ve=y(T.stencilBuffer,le),we=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe(T),ve,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe(T),ve,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ve,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,D)}else{let fe=T.textures;for(let le=0;le<fe.length;le++){let ve=fe[le],we=s.convert(ve.format,ve.colorSpace),ae=s.convert(ve.type),ee=E(ve.internalFormat,we,ae,ve.normalized,ve.colorSpace);$(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe(T),ee,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe(T),ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ee,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}u(Bt,"setupRenderBufferStorage");function xt(D,T,Y){let fe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(T.depthTexture);le.__renderTarget=T;let ve=fe?T.depthTexture.image[0]:T.depthTexture.image;(!le.__webglTexture||ve.width!==T.width||ve.height!==T.height)&&(ve.width=T.width,ve.height=T.height,T.depthTexture.needsUpdate=!0),fe?de(T.depthTexture,0):me(T.depthTexture,0);let we=le.__webglTexture,ae=xe(T),ee=fe?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,be=T.depthTexture.format===as?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Jr)$(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ee,we,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,be,ee,we,0);else if(T.depthTexture.format===as)$(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,ee,we,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,be,ee,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}u(xt,"setupDepthTexture");function Tt(D){let T=n.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let fe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){let le=u(()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",le)},"disposeEvent");fe.addEventListener("dispose",le),T.__depthDisposeCallback=le}T.__boundDepthTexture=fe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let fe=0;fe<6;fe++)xt(T.__webglFramebuffer[fe],D,fe);else D.texture.mipmaps.length>0?xt(T.__webglFramebuffer[0],D,0):xt(T.__webglFramebuffer,D,0);else if(Y){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=r.createRenderbuffer(),Bt(T.__webglDepthbuffer[fe],D,!1);else{let le=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ve)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Bt(T.__webglDepthbuffer,D,!1);else{let le=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}u(Tt,"setupDepthRenderbuffer");function Xt(D,T,Y){let fe=n.get(D);T!==void 0&&ft(fe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Tt(D)}u(Xt,"rebindTextures");function Q(D){let T=D.texture,Y=n.get(D),fe=n.get(T);D.addEventListener("dispose",F),L(D);let le=D.textures,ve=D.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=T.version,o.memory.textures++),ve){Y.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0){Y.__webglFramebuffer[ae]=[];for(let ee=0;ee<T.mipmaps.length;ee++)Y.__webglFramebuffer[ae][ee]=r.createFramebuffer()}else Y.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ae=0;ae<T.mipmaps.length;ae++)Y.__webglFramebuffer[ae]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(we)for(let ae=0,ee=le.length;ae<ee;ae++){let be=n.get(le[ae]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&$(D)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ae=0;ae<le.length;ae++){let ee=le[ae];Y.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ae]);let be=s.convert(ee.format,ee.colorSpace),B=s.convert(ee.type),ce=E(ee.internalFormat,be,B,ee.normalized,ee.colorSpace,D.isXRRenderTarget===!0),oe=xe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ce,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ve){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),rt(r.TEXTURE_CUBE_MAP,T);for(let ae=0;ae<6;ae++)if(T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)ft(Y.__webglFramebuffer[ae][ee],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ee);else ft(Y.__webglFramebuffer[ae],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);w(T)?M(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ae=0,ee=le.length;ae<ee;ae++){let be=le[ae],B=n.get(be),ce=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,B.__webglTexture),rt(ce,be),ft(Y.__webglFramebuffer,D,be,r.COLOR_ATTACHMENT0+ae,ce,0),w(be)&&M(ce)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,fe.__webglTexture),rt(ae,T),T.mipmaps.length>0)for(let ee=0;ee<T.mipmaps.length;ee++)ft(Y.__webglFramebuffer[ee],D,T,r.COLOR_ATTACHMENT0,ae,ee);else ft(Y.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,ae,0);w(T)?M(ae):T.mipmaps.length>0&&r.texParameteri(ae,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&Tt(D)}u(Q,"setupRenderTarget");function N(D){let T=D.textures;for(let Y=0,fe=T.length;Y<fe;Y++){let le=T[Y];if(w(le)&&le.mipmapsAutoUpdate===!0){let ve=R(D),we=n.get(le).__webglTexture;t.bindTexture(ve,we),M(ve),t.unbindTexture()}}}u(N,"updateRenderTargetMipmap");let se=[];function ue(D){if(D.samples>0){if($(D)===!1){let T=D.textures,Y=D.width,fe=D.height,le=r.COLOR_BUFFER_BIT,ve=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(D),ae=T.length>1;if(ae)for(let be=0;be<T.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<T.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let B=n.get(T[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,B,0)}r.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,le,r.NEAREST),l===!0&&(se.length=0,se.push(r.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&se.push(ve),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let be=0;be<T.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let B=n.get(T[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,B,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}u(ue,"updateMultisampleRenderTarget");function xe(D){return Math.min(i.maxSamples,D.samples)}u(xe,"getRenderTargetSamples");function $(D){let T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}u($,"useMultisampledRTT");function Re(D){let T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}u(Re,"updateVideoTexture");function Se(D,T){let Y=D.colorSpace,fe=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Ln&&Y!==Wi&&(lt.getTransfer(Y)===vt?(fe!==qn||le!==wn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",Y)),T}u(Se,"verifyColorSpace");function Be(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}u(Be,"getDimensions"),this.allocateTextureUnit=ye,this.resetTextureUnits=j,this.getTextureUnits=ie,this.setTextureUnits=pe,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=de,this.rebindTextures=Xt,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=$,this.dispose=q}u(CI,"WebGLTextures");function PI(r,e){function t(n,i=Wi){let s,o=lt.getTransfer(i);if(n===wn)return r.UNSIGNED_BYTE;if(n===yf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_f)return r.UNSIGNED_SHORT_5_5_5_1;if(n===w0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===E0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===M0)return r.BYTE;if(n===S0)return r.SHORT;if(n===wl)return r.UNSIGNED_SHORT;if(n===bf)return r.INT;if(n===Hi)return r.UNSIGNED_INT;if(n===ii)return r.FLOAT;if(n===ri)return r.HALF_FLOAT;if(n===T0)return r.ALPHA;if(n===A0)return r.RGB;if(n===qn)return r.RGBA;if(n===Jr)return r.DEPTH_COMPONENT;if(n===as)return r.DEPTH_STENCIL;if(n===vf)return r.RED;if(n===Mf)return r.RED_INTEGER;if(n===pr)return r.RG;if(n===Sf)return r.RG_INTEGER;if(n===wf)return r.RGBA_INTEGER;if(n===yu||n===_u||n===vu||n===Mu)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ef||n===Tf||n===Af||n===Rf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ef)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Af)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cf||n===Pf||n===If||n===Lf||n===Nf||n===Su||n===Df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Cf||n===Pf)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===If)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lf)return s.COMPRESSED_R11_EAC;if(n===Nf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Su)return s.COMPRESSED_RG11_EAC;if(n===Df)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Of||n===Uf||n===Ff||n===Bf||n===kf||n===zf||n===Gf||n===Vf||n===Hf||n===Wf||n===Xf||n===qf||n===Yf||n===$f)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Of)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ff)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$f)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kf||n===Zf||n===Jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kf)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jf||n===Qf||n===wu||n===ep)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ep)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$o?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return u(t,"convert"),{convert:t}}u(PI,"WebGLUtils");var II=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LI=`
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

}`,Wx=class Wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ou(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dn({vertexShader:II,fragmentShader:LI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(Wx,"WebXRDepthSensing");var Ox=Wx,Xx=class Xx extends Vi{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",x=new Ox,b={},v=t.getContextAttributes(),w=null,M=null,R=[],E=[],y=new He,S=null,L=null,I=new jt;I.viewport=new St;let O=new jt;O.viewport=new St;let F=[I,O],W=new Xd,U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=R[ne];return me===void 0&&(me=new hl,R[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=R[ne];return me===void 0&&(me=new hl,R[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=R[ne];return me===void 0&&(me=new hl,R[ne]=me),me.getHandSpace()};function te(ne){let me=E.indexOf(ne.inputSource);if(me===-1)return;let he=R[me];he!==void 0&&(he.update(ne.inputSource,ne.frame,c||o),he.dispatchEvent({type:ne.type,data:ne.inputSource}))}u(te,"onSessionEvent");function z(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<R.length;ne++){let me=E[ne];me!==null&&(E[ne]=null,R[ne].disconnect(me))}U=null,q=null,x.reset();for(let ne in b)delete b[ne];if(e.setRenderTarget(w),m=null,d=null,f=null,i=null,M=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),L!==null){let ne=L.camera;ne.fov=L.fov,ne.zoom=L.zoom,ne.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}u(z,"onSessionEnd"),this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ge=null,de=null;v.depth&&(de=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?as:Jr,ge=v.stencil?$o:Hi);let Fe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ei(d.textureWidth,d.textureHeight,{format:qn,type:wn,depthTexture:new Qr(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ei(m.framebufferWidth,m.framebufferHeight,{format:qn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ne){for(let me=0;me<ne.removed.length;me++){let he=ne.removed[me],ge=E.indexOf(he);ge>=0&&(E[ge]=null,R[ge].disconnect(he))}for(let me=0;me<ne.added.length;me++){let he=ne.added[me],ge=E.indexOf(he);if(ge===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=E.length){E.push(he),ge=Fe;break}else if(E[Fe]===null){E[Fe]=he,ge=Fe;break}if(ge===-1)break}let de=R[ge];de&&de.connect(he)}}u(Z,"onInputSourcesChange");function X(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}u(X,"updateCamera"),this.updateCamera=function(ne){if(i===null)return;let me=ne.near,he=ne.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(he=x.depthFar)),W.near=O.near=I.near=me,W.far=O.far=I.far=he,(U!==W.near||q!==W.far)&&(i.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,q=W.far),W.layers.mask=ne.layers.mask|6,I.layers.mask=W.layers.mask&-5,O.layers.mask=W.layers.mask&-3;let ge=ne.parent,de=W.cameras;X(W,ge);for(let Fe=0;Fe<de.length;Fe++)X(de[Fe],ge);W.projectionMatrix.copy(I.projectionMatrix),W.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&ne.isPerspectiveCamera&&(L={camera:ne,fov:ne.fov,zoom:ne.zoom}),j(ne,W,ge)};function j(ne,me,he){he===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(he.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Oo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}u(j,"updateUserCamera"),this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(W)},this.getCameraTexture=function(ne){return b[ne]};let ie=null;function pe(ne,me){if(h=me.getViewerPose(c||o),g=me,h!==null){let he=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ge=!1;he.length!==W.cameras.length&&(W.cameras.length=0,ge=!0);for(let De=0;De<he.length;De++){let rt=he[De],st=null;if(m!==null)st=m.getViewport(rt);else{let At=f.getViewSubImage(d,rt);st=At.viewport,De===0&&(e.setRenderTargetTextures(M,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(M))}let je=F[De];je===void 0&&(je=new jt,je.layers.enable(De),je.viewport=new St,F[De]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(st.x,st.y,st.width,st.height),De===0&&(W.matrix.copy(je.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ge===!0&&W.cameras.push(je)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let De=f.getDepthInformation(he[0]);De&&De.isValid&&De.texture&&x.init(De,i.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let De=0;De<he.length;De++){let rt=he[De].camera;if(rt){let st=b[rt];st||(st=new ou,b[rt]=st);let je=f.getCameraImage(rt);st.sourceTexture=je}}}}for(let he=0;he<R.length;he++){let ge=E[he],de=R[he];ge!==null&&de!==void 0&&de.update(ge,me,c||o)}ie&&ie(ne,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}u(pe,"onAnimationFrame");let ye=new MS;ye.setAnimationLoop(pe),this.setAnimationLoop=function(ne){ie=ne},this.dispose=function(){}}};u(Xx,"WebXRManager");var Ux=Xx,NI=new Ke,LS=new Je;LS.set(-1,0,0,0,1,0,0,0,1);function DI(r,e){function t(x,b){x.matrixAutoUpdate===!0&&x.updateMatrix(),b.value.copy(x.matrix)}u(t,"refreshTransformUniform");function n(x,b){b.color.getRGB(x.fogColor.value,B0(r)),b.isFog?(x.fogNear.value=b.near,x.fogFar.value=b.far):b.isFogExp2&&(x.fogDensity.value=b.density)}u(n,"refreshFogUniforms");function i(x,b,v,w,M){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?s(x,b):b.isMeshLambertMaterial?(s(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(s(x,b),f(x,b)):b.isMeshPhongMaterial?(s(x,b),h(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(s(x,b),d(x,b),b.isMeshPhysicalMaterial&&m(x,b,M)):b.isMeshMatcapMaterial?(s(x,b),g(x,b)):b.isMeshDepthMaterial?s(x,b):b.isMeshDistanceMaterial?(s(x,b),_(x,b)):b.isMeshNormalMaterial?s(x,b):b.isLineBasicMaterial?(o(x,b),b.isLineDashedMaterial&&a(x,b)):b.isPointsMaterial?l(x,b,v,w):b.isSpriteMaterial?c(x,b):b.isShadowMaterial?(x.color.value.copy(b.color),x.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}u(i,"refreshMaterialUniforms");function s(x,b){x.opacity.value=b.opacity,b.color&&x.diffuse.value.copy(b.color),b.emissive&&x.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.bumpMap&&(x.bumpMap.value=b.bumpMap,t(b.bumpMap,x.bumpMapTransform),x.bumpScale.value=b.bumpScale,b.side===Un&&(x.bumpScale.value*=-1)),b.normalMap&&(x.normalMap.value=b.normalMap,t(b.normalMap,x.normalMapTransform),x.normalScale.value.copy(b.normalScale),b.side===Un&&x.normalScale.value.negate()),b.displacementMap&&(x.displacementMap.value=b.displacementMap,t(b.displacementMap,x.displacementMapTransform),x.displacementScale.value=b.displacementScale,x.displacementBias.value=b.displacementBias),b.emissiveMap&&(x.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,x.emissiveMapTransform)),b.specularMap&&(x.specularMap.value=b.specularMap,t(b.specularMap,x.specularMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest);let v=e.get(b),w=v.envMap,M=v.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(NI.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(LS),x.reflectivity.value=b.reflectivity,x.ior.value=b.ior,x.refractionRatio.value=b.refractionRatio),b.lightMap&&(x.lightMap.value=b.lightMap,x.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,x.lightMapTransform)),b.aoMap&&(x.aoMap.value=b.aoMap,x.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,x.aoMapTransform))}u(s,"refreshUniformsCommon");function o(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform))}u(o,"refreshUniformsLine");function a(x,b){x.dashSize.value=b.dashSize,x.totalSize.value=b.dashSize+b.gapSize,x.scale.value=b.scale}u(a,"refreshUniformsDash");function l(x,b,v,w){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.size.value=b.size*v,x.scale.value=w*.5,b.map&&(x.map.value=b.map,t(b.map,x.uvTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(l,"refreshUniformsPoints");function c(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.rotation.value=b.rotation,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(c,"refreshUniformsSprites");function h(x,b){x.specular.value.copy(b.specular),x.shininess.value=Math.max(b.shininess,1e-4)}u(h,"refreshUniformsPhong");function f(x,b){b.gradientMap&&(x.gradientMap.value=b.gradientMap)}u(f,"refreshUniformsToon");function d(x,b){x.metalness.value=b.metalness,b.metalnessMap&&(x.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,x.metalnessMapTransform)),x.roughness.value=b.roughness,b.roughnessMap&&(x.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,x.roughnessMapTransform)),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)}u(d,"refreshUniformsStandard");function m(x,b,v){x.ior.value=b.ior,b.diffuseRoughness>0&&(x.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),b.sheen>0&&(x.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),x.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(x.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,x.sheenColorMapTransform)),b.sheenRoughnessMap&&(x.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,x.sheenRoughnessMapTransform))),b.clearcoat>0&&(x.clearcoat.value=b.clearcoat,x.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(x.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,x.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(x.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Un&&x.clearcoatNormalScale.value.negate())),b.dispersion>0&&(x.dispersion.value=b.dispersion),b.retroreflectivity>0&&(x.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(x.iridescence.value=b.iridescence,x.iridescenceIOR.value=b.iridescenceIOR,x.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(x.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,x.iridescenceMapTransform)),b.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),b.transmission>0&&(x.transmission.value=b.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),b.transmissionMap&&(x.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,x.transmissionMapTransform)),x.thickness.value=b.thickness,b.thicknessMap&&(x.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=b.attenuationDistance,x.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(x.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(x.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=b.specularIntensity,x.specularColor.value.copy(b.specularColor),b.specularColorMap&&(x.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,x.specularColorMapTransform)),b.specularIntensityMap&&(x.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,x.specularIntensityMapTransform))}u(m,"refreshUniformsPhysical");function g(x,b){b.matcap&&(x.matcap.value=b.matcap)}u(g,"refreshUniformsMatcap");function _(x,b){let v=e.get(b).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}u(DI,"WebGLMaterials");function OI(r,e,t,n){let i={},s={};function o(v,w){let M=w.program;n.uniformBlockBinding(v,M,i[v.id])}u(o,"bind");function a(v,w){let M=i[v.id];M===void 0&&(g(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",x));let R=w.program;n.updateUBOMapping(v,R);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}u(a,"update");function l(v){let w=r.createBuffer(),M=v.__size,R=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,M,R),r.bindBuffer(r.UNIFORM_BUFFER,null),w}u(l,"createBuffer");function c(v){let w=i[v.id],M=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let E=0,y=M.length;E<y;E++){let S=M[E];if(Array.isArray(S))for(let L=0,I=S.length;L<I;L++)h(S[L],E,L,R);else h(S,E,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}u(c,"updateBufferData");function h(v,w,M,R){if(d(v,w,M,R)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let L=0;L<y.length;L++){let I=y[L],O=_(I,!0);f(I,v.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}u(h,"updateUniform");function f(v,w,M){typeof v=="number"||typeof v=="boolean"?w[M]=v:v.isMatrix3?(w[M]=v.elements[0],w[M+1]=v.elements[1],w[M+2]=v.elements[2],w[M+3]=0,w[M+4]=v.elements[3],w[M+5]=v.elements[4],w[M+6]=v.elements[5],w[M+7]=0,w[M+8]=v.elements[6],w[M+9]=v.elements[7],w[M+10]=v.elements[8],w[M+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-M),M):v.toArray(w,M)}u(f,"writeUniformValue");function d(v,w,M,R){let E=v.value,y=w+"_"+M;if(Array.isArray(E)){R[y]===void 0&&(R[y]=[]);let S=R[y],L=!1;for(let I=0;I<E.length;I++)m(E[I],S,I)===!0&&(L=!0);return L}return m(E,R,y)}u(d,"hasUniformChanged");function m(v,w,M){if(w[M]===void 0)return typeof v=="number"||typeof v=="boolean"?w[M]=v:ArrayBuffer.isView(v)?w[M]=v.slice():w[M]=v.clone(),!0;{let R=w[M];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return w[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}u(m,"hasValueChanged");function g(v){let w=v.uniforms,M=0,R=16;for(let y=0,S=w.length;y<S;y++){let L=Array.isArray(w[y])?w[y]:[w[y]];for(let I=0,O=L.length;I<O;I++){let F=L[I],W=Array.isArray(F.value)?F.value:[F.value],U=Array.isArray(w[y])||Array.isArray(F.value),q=M;for(let z=0,Z=W.length;z<Z;z++){let X=W[z],j=_(X,U),ie=M%R,pe=ie%j.boundary,ye=ie+pe;M+=pe,ye!==0&&R-ye<j.storage&&(M+=R-ye),z===0&&(q=M),M+=j.storage}let te=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new te((M-q)/Float32Array.BYTES_PER_ELEMENT),F.__offset=q}}let E=M%R;return E>0&&(M+=R-E),v.__size=M,v.__cache={},this}u(g,"prepareUniformsGroup");function _(v,w){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}u(_,"getUniformSize");function x(v){let w=v.target;w.removeEventListener("dispose",x),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}u(x,"onUniformsGroupsDispose");function b(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return u(b,"dispose"),{bind:o,update:a,dispose:b}}u(OI,"WebGLUniformsGroups");var UI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gr=null;function FI(){return gr===null&&(gr=new Bs(UI,16,16,pr,ri),gr.name="DFG_LUT",gr.minFilter=kt,gr.magFilter=kt,gr.wrapS=Vn,gr.wrapT=Vn,gr.generateMipmaps=!1,gr.needsUpdate=!0),gr}u(FI,"getDFGLUT");var qx=class qx{constructor(e={}){let{canvas:t=YM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=wn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=m,x=new Set([wf,Sf,Mf]),b=new Set([wn,Hi,wl,$o,yf,_f]),v=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,E=null,y=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,F=null,W=null,U=null,q=null;this._outputColorSpace=Lt;let te=0,z=0,Z=null,X=-1,j=null,ie=new St,pe=new St,ye=null,ne=new Pe(0),me=0,he=t.width,ge=t.height,de=1,Fe=null,Ye=null,De=new St(0,0,he,ge),rt=new St(0,0,he,ge),st=!1,je=new ks,At=new Nd,Et=!1,Pt=!1,ft=new Ke,Bt=new H,xt=new St,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Q(){return Z===null?de:1}u(Q,"getTargetPixelRatio");let N=n;function se(C,V){return t.getContext(C,V)}u(se,"getContext");let ue,xe,$,Re,Se,Be,D,T,Y,fe,le,ve,we,ae,ee,be,B,ce,oe,Te,Me,Ee,Xe;try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),N===null){let V="webgl2";if(N=se(V,C),N===null)throw se(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(C){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ze("WebGLRenderer: "+C.message),C}function ot(){ue=new $P(N),ue.init(),Me=new PI(N,ue),xe=new FP(N,ue,e,Me),$=new RI(N,ue),xe.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),W=N.createFramebuffer(),U=N.createFramebuffer(),q=N.createFramebuffer(),Re=new JP(N),Se=new pI,Be=new CI(N,ue,$,Se,xe,Me,Re),D=new YP(I),T=new QA(N),Ee=new OP(N,T),Y=new KP(N,T,Re,Ee),fe=new QP(N,Y,T,Ee,Re),ce=new jP(N,xe,Be),ee=new BP(Se),le=new fI(I,D,ue,xe,Ee,ee),ve=new DI(I,Se),we=new gI,ae=new MI(ue),B=new DP(I,D,$,fe,g,l),be=new AI(I,fe,xe),Xe=new OI(N,Re,xe,$),oe=new UP(N,ue,Re),Te=new ZP(N,ue,Re),Re.programs=le.programs,I.capabilities=xe,I.extensions=ue,I.properties=Se,I.renderLists=we,I.shadowMap=be,I.state=$,I.info=Re}u(ot,"initGLContext"),_!==wn&&(L=new t2(_,t.width,t.height,a,i,s));let _e=new Ux(I,N);this.xr=_e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(he,ge,!1))},this.getSize=function(C){return C.set(he,ge)},this.setSize=function(C,V,re=!0){if(_e.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}he=C,ge=V,t.width=Math.floor(C*de),t.height=Math.floor(V*de),re===!0&&(t.style.width=C+"px",t.style.height=V+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(he*de,ge*de).floor()},this.setDrawingBufferSize=function(C,V,re){he=C,ge=V,de=re,t.width=Math.floor(C*re),t.height=Math.floor(V*re),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(_===wn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ie)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,V,re,K){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,V,re,K),$.viewport(ie.copy(De).multiplyScalar(Q()).round())},this.getScissor=function(C){return C.copy(rt)},this.setScissor=function(C,V,re,K){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,V,re,K),$.scissor(pe.copy(rt).multiplyScalar(Q()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(C){$.setScissorTest(st=C)},this.setOpaqueSort=function(C){Fe=C},this.setTransparentSort=function(C){Ye=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,re=!0){let K=0;if(C){let J=!1;if(Z!==null){let Ce=Z.texture.format;J=x.has(Ce)}if(J){let Ce=Z.texture.type,ke=b.has(Ce),Ae=B.getClearColor(),Oe=B.getClearAlpha(),Ve=Ae.r,Qe=Ae.g,pt=Ae.b;ke?(v[0]=Ve,v[1]=Qe,v[2]=pt,v[3]=Oe,N.clearBufferuiv(N.COLOR,0,v)):(w[0]=Ve,w[1]=Qe,w[2]=pt,w[3]=Oe,N.clearBufferiv(N.COLOR,0,w))}else K|=N.COLOR_BUFFER_BIT}V&&(K|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),F=C},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),B.dispose(),we.dispose(),ae.dispose(),Be.dispose(),Se.dispose(),D.dispose(),fe.dispose(),Y.dispose(),Ee.dispose(),Xe.dispose(),le.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",av),_e.removeEventListener("sessionend",lv),Mo.stop()};function $e(C){C.preventDefault(),Yc("WebGLRenderer: Context Lost."),O=!0}u($e,"onContextLost");function tt(){Yc("WebGLRenderer: Context Restored."),O=!1;let C=Re.autoReset,V=be.enabled,re=be.autoUpdate,K=be.needsUpdate,J=be.type;ot(),Re.autoReset=C,be.enabled=V,be.autoUpdate=re,be.needsUpdate=K,be.type=J}u(tt,"onContextRestore");function Ne(C){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(Ne,"onContextCreationError");function Mt(C){let V=C.target;V.removeEventListener("dispose",Mt),an(V)}u(Mt,"onMaterialDispose");function an(C){ws(C),Se.remove(C)}u(an,"deallocateMaterial");function ws(C){let V=Se.get(C).programs;V!==void 0&&(V.forEach(function(re){le.releaseProgram(re)}),C.isShaderMaterial&&le.releaseShaderCache(C))}u(ws,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,V,re,K,J,Ce){V===null&&(V=Tt);let ke=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ae=DT(C,V,re,K,J);$.setMaterial(K,ke);let Oe=re.index,Ve=1;if(K.wireframe===!0){if(Oe=Y.getWireframeAttribute(re),Oe===void 0)return;Ve=2}let Qe=re.drawRange,pt=re.attributes.position,ze=Qe.start*Ve,mt=(Qe.start+Qe.count)*Ve;Ce!==null&&(ze=Math.max(ze,Ce.start*Ve),mt=Math.min(mt,(Ce.start+Ce.count)*Ve)),Oe!==null?(ze=Math.max(ze,0),mt=Math.min(mt,Oe.count)):pt!=null&&(ze=Math.max(ze,0),mt=Math.min(mt,pt.count));let Kt=mt-ze;if(Kt<0||Kt===1/0)return;Ee.setup(J,K,Ae,re,Oe);let It,Rt=oe;if(Oe!==null&&(It=T.get(Oe),Rt=Te,Rt.setIndex(It)),J.isMesh)K.wireframe===!0?($.setLineWidth(K.wireframeLinewidth*Q()),Rt.setMode(N.LINES)):Rt.setMode(N.TRIANGLES);else if(J.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),$.setLineWidth(xn*Q()),J.isLineSegments?Rt.setMode(N.LINES):J.isLineLoop?Rt.setMode(N.LINE_LOOP):Rt.setMode(N.LINE_STRIP)}else J.isPoints?Rt.setMode(N.POINTS):J.isSprite&&Rt.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let xn=J._multiDrawStarts,Ge=J._multiDrawCounts,Pn=J._multiDrawCount,yt=Oe?T.get(Oe).bytesPerElement:1,So=Se.get(K).currentProgram.getUniforms();for(let bn=0;bn<Pn;bn++)So.setValue(N,"_gl_DrawID",bn),Rt.render(xn[bn]/yt,Ge[bn])}else if(J.isInstancedMesh)Rt.renderInstances(ze,Kt,J.count);else if(re.isInstancedBufferGeometry){let xn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,xn);Rt.renderInstances(ze,Kt,Ge)}else Rt.render(ze,Kt)};function ov(C,V,re,K){F!==null&&C.isNodeMaterial&&F.setObject(K,C),Et===!0&&ee.setState(C,re,!1),C.transparent===!0&&C.side===tn&&C.forceSinglePass===!1?(C.side=Un,C.needsUpdate=!0,Cc(C,V,K),C.side=vi,C.needsUpdate=!0,Cc(C,V,K),C.side=tn):Cc(C,V,K)}u(ov,"prepareMaterial"),this.compile=function(C,V,re=null){re===null&&(re=C),F!==null&&F.renderStart(C,V,re),E=ae.get(re),E.init(V),S.push(E),re.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),C!==re&&C.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(E.pushLight(J),J.castShadow&&E.pushShadow(J))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Pt=this.localClippingEnabled,Et=ee.init(this.clippingPlanes,Pt),Et===!0&&ee.setGlobalState(this.clippingPlanes,V),F!==null&&be.render(E.state.shadowsArray,re,V);let K=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ce=J.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){let Ae=Ce[ke];ov(Ae,re,V,J),K.add(Ae)}else ov(Ce,re,V,J),K.add(Ce)}),E=S.pop(),F!==null&&F.renderEnd(),K},this.compileAsync=function(C,V,re=null){let K=this.compile(C,V,re);return new Promise(J=>{function Ce(){if(K.forEach(function(ke){let Oe=Se.get(ke).currentProgram;(Oe===void 0||Oe.isReady())&&K.delete(ke)}),K.size===0){J(C);return}setTimeout(Ce,10)}u(Ce,"checkMaterialsReady"),ue.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let _m=null;function LT(C){_m&&_m(C)}u(LT,"onAnimationFrame");function av(){Mo.stop()}u(av,"onXRSessionStart");function lv(){Mo.start()}u(lv,"onXRSessionEnd");let Mo=new MS;Mo.setAnimationLoop(LT),typeof self<"u"&&Mo.setContext(self),this.setAnimationLoop=function(C){_m=C,_e.setAnimationLoop(C),C===null?Mo.stop():Mo.start()},_e.addEventListener("sessionstart",av),_e.addEventListener("sessionend",lv),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;F!==null&&F.renderStart(C,V);let re=_e.enabled===!0&&_e.isPresenting===!0,K=L!==null&&(Z===null||re)&&L.begin(I,Z);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(V),V=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,V,Z),E=ae.get(C,S.length),E.init(V),E.state.textureUnits=Be.getTextureUnits(),S.push(E),ft.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?At.setFromArrayCamera(V):je.setFromProjectionMatrix(ft,yi,V.reversedDepth),Pt=this.localClippingEnabled,Et=ee.init(this.clippingPlanes,Pt),R=we.get(C,y.length),R.init(),y.push(R),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let ke=I.xr.getDepthSensingMesh();ke!==null&&vm(ke,V,-1/0,I.sortObjects)}vm(C,V,0,I.sortObjects),R.finish(),F!==null&&F.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(Fe,Ye),Xt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Xt&&B.addToRenderList(R,C),this.info.autoReset===!0&&this.info.reset(),Et===!0&&ee.beginShadows();let J=E.state.shadowsArray;if(be.render(J,C,V),Et===!0&&ee.endShadows(),(K&&L.hasRenderPass())===!1){let ke=R.opaque,Ae=R.transmissive;if(E.setupLights(),V.isArrayCamera){let Oe=V.cameras;if(Ae.length>0)for(let Ve=0,Qe=Oe.length;Ve<Qe;Ve++){let pt=Oe[Ve];uv(ke,Ae,C,pt)}Xt&&B.render(C);for(let Ve=0,Qe=Oe.length;Ve<Qe;Ve++){let pt=Oe[Ve];cv(R,C,pt,pt.viewport)}}else Ae.length>0&&uv(ke,Ae,C,V),Xt&&B.render(C),cv(R,C,V)}Z!==null&&z===0&&(Be.updateMultisampleRenderTarget(Z),Be.updateRenderTargetMipmap(Z)),K&&L.end(I),C.isScene===!0&&C.onAfterRender(I,C,V),Ee.resetDefaultState(),X=-1,j=null,S.pop(),S.length>0?(E=S[S.length-1],Be.setTextureUnits(E.state.textureUnits),Et===!0&&ee.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?R=y[y.length-1]:R=null,F!==null&&F.renderEnd()};function vm(C,V,re,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let ke=V.isArrayCamera?At:je;if(!C.frustumCulled||C.intersectsFrustum(ke)){K&&xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);let Ae=fe.update(C),Oe=C.material;Oe.visible&&R.push(C,Ae,Oe,re,xt.z,null,V)}}else if(C.isMesh||C.isLine||C.isPoints){let ke=V.isArrayCamera?At:je;if(!C.frustumCulled||C.intersectsFrustum(ke)){let Ae=fe.update(C),Oe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xt.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),xt.copy(Ae.boundingSphere.center)),xt.applyMatrix4(C.matrixWorld).applyMatrix4(ft)),Array.isArray(Oe)){let Ve=Ae.groups;for(let Qe=0,pt=Ve.length;Qe<pt;Qe++){let ze=Ve[Qe],mt=Oe[ze.materialIndex];mt&&mt.visible&&R.push(C,Ae,mt,re,xt.z,ze,V)}}else Oe.visible&&R.push(C,Ae,Oe,re,xt.z,null,V)}}}let Ce=C.children;for(let ke=0,Ae=Ce.length;ke<Ae;ke++)vm(Ce[ke],V,re,K)}u(vm,"projectObject");function cv(C,V,re,K){let{opaque:J,transmissive:Ce,transparent:ke}=C;E.setupLightsView(re),Et===!0&&ee.setGlobalState(I.clippingPlanes,re),K&&$.viewport(ie.copy(K)),J.length>0&&Wh(J,V,re),Ce.length>0&&Wh(Ce,V,re),ke.length>0&&Wh(ke,V,re),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}u(cv,"renderScene");function uv(C,V,re,K){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let ze=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new ei(1,1,{generateMipmaps:!0,type:ze?ri:wn,minFilter:Sn,samples:Math.max(4,xe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ce=E.state.transmissionRenderTarget[K.id],ke=K.viewport||ie;Ce.setSize(ke.z*I.transmissionResolutionScale,ke.w*I.transmissionResolutionScale);let Ae=I.getRenderTarget(),Oe=I.getActiveCubeFace(),Ve=I.getActiveMipmapLevel();I.setRenderTarget(Ce),I.getClearColor(ne),me=I.getClearAlpha(),me<1&&I.setClearColor(16777215,.5),I.clear(),Xt&&B.render(re);let Qe=I.toneMapping;I.toneMapping=fr;let pt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),Et===!0&&ee.setGlobalState(I.clippingPlanes,K),Wh(C,re,K),Be.updateMultisampleRenderTarget(Ce),Be.updateRenderTargetMipmap(Ce),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let mt=0,Kt=V.length;mt<Kt;mt++){let It=V[mt],{object:Rt,geometry:xn,material:Ge,group:Pn}=It;if(Ge.side===tn&&Rt.layers.test(K.layers)){let yt=Ge.side;Ge.side=Un,Ge.needsUpdate=!0,hv(Rt,re,K,xn,Ge,Pn),Ge.side=yt,Ge.needsUpdate=!0,ze=!0}}ze===!0&&(Be.updateMultisampleRenderTarget(Ce),Be.updateRenderTargetMipmap(Ce))}I.setRenderTarget(Ae,Oe,Ve),I.setClearColor(ne,me),pt!==void 0&&(K.viewport=pt),I.toneMapping=Qe}u(uv,"renderTransmissionPass");function Wh(C,V,re){let K=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Ce=C.length;J<Ce;J++){let ke=C[J],{object:Ae,geometry:Oe,group:Ve}=ke,Qe=ke.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),Ae.layers.test(re.layers)&&hv(Ae,V,re,Oe,Qe,Ve)}}u(Wh,"renderObjects");function hv(C,V,re,K,J,Ce){F!==null&&J.isNodeMaterial&&F.setObject(C,J),C.onBeforeRender(I,V,re,K,J,Ce),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(I,V,re,K,C,Ce),J.transparent===!0&&J.side===tn&&J.forceSinglePass===!1?(J.side=Un,J.needsUpdate=!0,I.renderBufferDirect(re,V,K,J,C,Ce),J.side=vi,J.needsUpdate=!0,I.renderBufferDirect(re,V,K,J,C,Ce),J.side=tn):I.renderBufferDirect(re,V,K,J,C,Ce),C.onAfterRender(I,V,re,K,J,Ce)}u(hv,"renderObject");function dv(C){let V=0;for(let re of C)re.texture!==null&&V++;return V}u(dv,"countLightProbeGrids");function Cc(C,V,re){V.isScene!==!0&&(V=Tt);let K=Se.get(C),J=E.state.lights,Ce=E.state.shadowsArray,ke=J.state.version,Ae=le.getParameters(C,J.state,Ce,V,re,E.state.lightProbeGridArray),Oe=le.getProgramCacheKey(Ae),Ve=K.programs;K.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;K.envMap=D.get(C.envMap||K.environment,Qe),K.envMapRotation=K.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",Mt),Ve=new Map,K.programs=Ve,K.programVariants=new Map);let pt=Ve.get(Oe);if(pt!==void 0){if(K.currentProgram===pt&&K.lightsStateVersion===ke)return pv(C,Ae),pt}else Ae.uniforms=le.getUniforms(C),F!==null&&C.isNodeMaterial&&F.build(C,re,Ae),C.onBeforeCompile(Ae,I),pt=le.acquireProgram(Ae,Oe),Ve.set(Oe,pt),K.uniforms=Ae.uniforms;let ze=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=ee.uniform),pv(C,Ae),K.needsLights=UT(C),K.lightsStateVersion=ke,K.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.sunLights.value=J.state.sun,ze.sunLightShadows.value=J.state.sunShadow,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.sunShadowMatrix.value=J.state.sunShadowMatrix,ze.sunShadowCascade.value=J.state.sunShadowCascade,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),K.numLightProbeGrids=dv(E.state.lightProbeGridArray),K.currentProgram=pt,K.uniformsList=null,pt}u(Cc,"getProgram");function NT(C,V,re,K,J){let Ce=Se.get(C),ke=Ce.currentProgram.id+","+K+","+J,Ae=Ce.programVariants.get(ke);return Ae===void 0?(Ae=Cc(C,V,re),Ce.programVariants.set(ke,Ae)):(Ce.currentProgram=Ae,Ce.uniformsList=null,Ce.outputColorSpace=K,Ce.toneMapping=J),Ae}u(NT,"getProgramVariant");function fv(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Tl.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}u(fv,"getUniformList");function pv(C,V){let re=Se.get(C);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}u(pv,"updateCommonMaterialProperties");function DT(C,V,re,K,J){V.isScene!==!0&&(V=Tt),Be.resetTextureUnits();let Ce=V.fog,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,Ae=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:lt.workingColorSpace,Oe=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ve=D.get(K.envMap||ke,Oe),Qe=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pt=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Kt=!!re.morphAttributes.color,It=fr;K.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(It=I.toneMapping);let Rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,xn=Rt!==void 0?Rt.length:0,Ge=Se.get(K),Pn=E.state.lights;if(Et===!0&&(Pt===!0||C!==j)){let Gt=C===j&&K.id===X;ee.setState(K,C,Gt)}let yt=!1,So=!1;K.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Pn.state.version||J.isBatchedMesh&&Ge.batching===!1||!J.isBatchedMesh&&Ge.batching===!0||J.isBatchedMesh&&Ge.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ge.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ge.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ge.instancingMorph===!1&&J.morphTexture!==null||Ge.envMap!==Ve||K.fog===!0&&Ge.fog!==Ce||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ee.numPlanes||Ge.numIntersection!==ee.numIntersection)||Ge.vertexAlphas!==Qe||Ge.vertexTangents!==pt||Ge.morphTargets!==ze||Ge.morphNormals!==mt||Ge.morphColors!==Kt||Ge.morphTargetsCount!==xn||Ge.numLightProbeGrids!==dv(E.state.lightProbeGridArray)?yt=!0:(Ge.outputColorSpace!==Ae||Ge.toneMapping!==It)&&(So=!0):(yt=!0,Ge.__version=K.version);let bn=Ge.currentProgram;(yt===!0||So===!0)&&(bn=So===!0?NT(K,V,J,Ae,It):Cc(K,V,J),F&&K.isNodeMaterial&&F.onUpdateProgram(K,bn,Ge));let Xh=!1,Es=!1,wo=!1,gt=bn.getUniforms(),mn=Ge.uniforms;if($.useProgram(bn.program)&&(Xh=!0,Es=!0,wo=!0),K.id!==X&&(X=K.id,Es=!0),Xh||j!==C){$.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),gt.setValue(N,"projectionMatrix",C.projectionMatrix),gt.setValue(N,"viewMatrix",C.matrixWorldInverse);let ln=gt.map.cameraPosition;ln!==void 0&&ln.setValue(N,Bt.setFromMatrixPosition(C.matrixWorld)),xe.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,Es=!0,wo=!0)}if(Ge.needsLights&&(Pn.state.sunShadowMap.length>0&&gt.setValue(N,"sunShadowMap",Pn.state.sunShadowMap,Be),Pn.state.directionalShadowMap.length>0&&gt.setValue(N,"directionalShadowMap",Pn.state.directionalShadowMap,Be),Pn.state.spotShadowMap.length>0&&gt.setValue(N,"spotShadowMap",Pn.state.spotShadowMap,Be),Pn.state.pointShadowMap.length>0&&gt.setValue(N,"pointShadowMap",Pn.state.pointShadowMap,Be)),J.isSkinnedMesh){gt.setOptional(N,J,"bindMatrix"),gt.setOptional(N,J,"bindMatrixInverse");let Gt=J.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),gt.setValue(N,"boneTexture",Gt.boneTexture,Be))}J.isBatchedMesh&&(gt.setOptional(N,J,"batchingTexture"),gt.setValue(N,"batchingTexture",J._matricesTexture,Be),gt.setOptional(N,J,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",J._indirectTexture,Be),gt.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",J._colorsTexture,Be));let Fi=re.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&ce.update(J,re,bn),(Es||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,gt.setValue(N,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(mn.envMapIntensity.value=V.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=FI()),Es){if(gt.setValue(N,"toneMappingExposure",I.toneMappingExposure),Ge.needsLights&&OT(mn,wo),Ce&&K.fog===!0&&ve.refreshFogUniforms(mn,Ce),ve.refreshMaterialUniforms(mn,K,de,ge,E.state.transmissionRenderTarget[C.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let Gt=M,ln=0;for(let Gr of E.state.lightProbeGridArray)Gr.texture!==null&&(Gt.textures[ln]=Gr.texture,Gt.min[ln]=Gr.boundingBox.min,Gt.max[ln]=Gr.boundingBox.max,Gt.resolution[ln]=Gr.resolution,ln++);for(let Gr in Gt)Gt[Gr].length=ln;mn.probesSH.value=Gt.textures,mn.probesMin.value=Gt.min,mn.probesMax.value=Gt.max,mn.probesResolution.value=Gt.resolution}Tl.upload(N,fv(Ge),mn,Be)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Tl.upload(N,fv(Ge),mn,Be),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(N,"center",J.center),gt.setValue(N,"modelViewMatrix",J.modelViewMatrix),gt.setValue(N,"normalMatrix",J.normalMatrix),gt.setValue(N,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let Gt=K.uniformsGroups;for(let ln=0,Gr=Gt.length;ln<Gr;ln++){let gv=Gt[ln];Xe.update(gv,bn),Xe.bind(gv,bn)}}return bn}u(DT,"setProgram");function OT(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.sunLights.needsUpdate=V,C.sunLightShadows.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}u(OT,"markUniformsLightsNeedsUpdate");function UT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(UT,"materialNeedsLights"),this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,V,re){let K=Se.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Se.get(C.texture).__webglTexture=V,Se.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:re,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){let re=Se.get(C);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,re=0){Z=C,te=V,z=re;let K=null,J=!1,Ce=!1;if(C){let Ae=Se.get(C);if(Ae.__useDefaultFramebuffer!==void 0){$.bindFramebuffer(N.FRAMEBUFFER,Ae.__webglFramebuffer),ie.copy(C.viewport),pe.copy(C.scissor),ye=C.scissorTest,$.viewport(ie),$.scissor(pe),$.setScissorTest(ye),X=-1;return}else if(Ae.__webglFramebuffer===void 0)Be.setupRenderTarget(C);else if(Ae.__hasExternalTextures)Be.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Qe=C.depthTexture;if(Ae.__boundDepthTexture!==Qe){if(Qe!==null&&Se.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(C)}}let Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);let Ve=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?K=Ve[V][re]:K=Ve[V],J=!0):C.samples>0&&Be.useMultisampledRTT(C)===!1?K=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[re]:K=Ve,ie.copy(C.viewport),pe.copy(C.scissor),ye=C.scissorTest}else ie.copy(De).multiplyScalar(de).floor(),pe.copy(rt).multiplyScalar(de).floor(),ye=st;if(re!==0&&(K=W),$.bindFramebuffer(N.FRAMEBUFFER,K)&&$.drawBuffers(C,K),$.viewport(ie),$.scissor(pe),$.setScissorTest(ye),J){let Ae=Se.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,re)}else if(Ce){let Ae=V;for(let Oe=0;Oe<C.textures.length;Oe++){let Ve=Se.get(C.textures[Oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Oe,Ve.__webglTexture,re,Ae)}}else if(C!==null&&re!==0){let Ae=Se.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,re)}X=-1};function mv(C){let V=Se.get(C);return(V.__readFormat!==C.format||V.__readType!==C.type)&&(V.__readFormat=C.format,V.__readType=C.type,V.__formatReadable=xe.textureFormatReadable(C.format),V.__typeReadable=xe.textureTypeReadable(C.type)),V}u(mv,"getReadableState"),this.readRenderTargetPixels=function(C,V,re,K,J,Ce,ke,Ae=0){if(!(C&&C.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe){$.bindFramebuffer(N.FRAMEBUFFER,Oe);try{let Ve=C.textures[Ae],Qe=Ve.format,pt=Ve.type;C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae);let ze=mv(Ve);if(ze.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&re>=0&&re<=C.height-J&&N.readPixels(V,re,K,J,Me.convert(Qe),Me.convert(pt),Ce)}finally{let Ve=Z!==null?Se.get(Z).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,V,re,K,J,Ce,ke,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Oe=Oe[ke],Array.isArray(Oe)&&(Oe=Oe[0])),Oe)if(V>=0&&V<=C.width-K&&re>=0&&re<=C.height-J){$.bindFramebuffer(N.FRAMEBUFFER,Oe);let Ve=C.textures[Ae],Qe=Ve.format,pt=Ve.type;C.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae);let ze=mv(Ve);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,Ce.byteLength,N.STREAM_READ),N.readPixels(V,re,K,J,Me.convert(Qe),Me.convert(pt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Kt=Z!==null?Se.get(Z).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,Kt);let It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await KM(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ce),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(mt),N.deleteSync(It),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,re=0){let K=Math.pow(2,-re),J=Math.floor(C.image.width*K),Ce=Math.floor(C.image.height*K),ke=V!==null?V.x:0,Ae=V!==null?V.y:0;Be.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,re,0,0,ke,Ae,J,Ce),$.unbindTexture()},this.copyTextureToTexture=function(C,V,re=null,K=null,J=0,Ce=0){let ke,Ae,Oe,Ve,Qe,pt,ze,mt,Kt,It=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(re!==null)ke=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,Ve=re.min.x,Qe=re.min.y,pt=re.isBox3?re.min.z:0;else{let gt=Math.pow(2,-J);ke=Math.floor(It.width*gt),Ae=Math.floor(It.height*gt),C.isDataArrayTexture?Oe=It.depth:C.isData3DTexture?Oe=Math.floor(It.depth*gt):Oe=1,Ve=0,Qe=0,pt=0}K!==null?(ze=K.x,mt=K.y,Kt=K.z):(ze=0,mt=0,Kt=0);let Rt=Me.convert(V.format),xn=Me.convert(V.type),Ge;V.isData3DTexture?(Be.setTexture3D(V,0),Ge=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Be.setTexture2DArray(V,0),Ge=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(V,0),Ge=N.TEXTURE_2D),$.activeTexture(N.TEXTURE0),$.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let Pn=$.getParameter(N.UNPACK_ROW_LENGTH),yt=$.getParameter(N.UNPACK_IMAGE_HEIGHT),So=$.getParameter(N.UNPACK_SKIP_PIXELS),bn=$.getParameter(N.UNPACK_SKIP_ROWS),Xh=$.getParameter(N.UNPACK_SKIP_IMAGES);$.pixelStorei(N.UNPACK_ROW_LENGTH,It.width),$.pixelStorei(N.UNPACK_IMAGE_HEIGHT,It.height),$.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),$.pixelStorei(N.UNPACK_SKIP_ROWS,Qe),$.pixelStorei(N.UNPACK_SKIP_IMAGES,pt);let Es=C.isDataArrayTexture||C.isData3DTexture,wo=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){let gt=Se.get(C),mn=Se.get(V),Fi=Se.get(gt.__renderTarget),Gt=Se.get(mn.__renderTarget);$.bindFramebuffer(N.READ_FRAMEBUFFER,Fi.__webglFramebuffer),$.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let ln=0;ln<Oe;ln++)Es&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(C).__webglTexture,J,pt+ln),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(V).__webglTexture,Ce,Kt+ln)),N.blitFramebuffer(Ve,Qe,Ve+ke,Qe+Ae,ze,mt,ze+ke,mt+Ae,N.DEPTH_BUFFER_BIT,N.NEAREST);$.bindFramebuffer(N.READ_FRAMEBUFFER,null),$.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||Se.has(C)){let gt=Se.get(C),mn=Se.get(V);$.bindFramebuffer(N.READ_FRAMEBUFFER,U),$.bindFramebuffer(N.DRAW_FRAMEBUFFER,q);for(let Fi=0;Fi<Oe;Fi++)Es?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,J,pt+Fi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gt.__webglTexture,J),wo?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,Ce,Kt+Fi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,Ce),J!==0?N.blitFramebuffer(Ve,Qe,Ve+ke,Qe+Ae,ze,mt,ze+ke,mt+Ae,N.COLOR_BUFFER_BIT,N.NEAREST):wo?N.copyTexSubImage3D(Ge,Ce,ze,mt,Kt+Fi,Ve,Qe,ke,Ae):N.copyTexSubImage2D(Ge,Ce,ze,mt,Ve,Qe,ke,Ae);$.bindFramebuffer(N.READ_FRAMEBUFFER,null),$.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else wo?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Ge,Ce,ze,mt,Kt,ke,Ae,Oe,Rt,xn,It.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,Ce,ze,mt,Kt,ke,Ae,Oe,Rt,It.data):N.texSubImage3D(Ge,Ce,ze,mt,Kt,ke,Ae,Oe,Rt,xn,It):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ce,ze,mt,ke,Ae,Rt,xn,It.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ce,ze,mt,It.width,It.height,Rt,It.data):N.texSubImage2D(N.TEXTURE_2D,Ce,ze,mt,ke,Ae,Rt,xn,It);$.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),$.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt),$.pixelStorei(N.UNPACK_SKIP_PIXELS,So),$.pixelStorei(N.UNPACK_SKIP_ROWS,bn),$.pixelStorei(N.UNPACK_SKIP_IMAGES,Xh),Ce===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&N.generateMipmap(Ge),$.unbindTexture()},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&Be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){te=0,z=0,Z=null,$.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};u(qx,"WebGLRenderer");var cp=qx;var NS=u(r=>{let e=Math.min(1,Math.max(0,r))**.5;return 4*e*(1-e)},"swell"),BI=u(r=>1-(1-r)*(1-r),"easeOut"),fp=u(r=>{let e=Math.sin(r*12.9898)*43758.5453;return e-Math.floor(e)},"share"),Yx=u((r,e=0)=>{let t=Math.min(1,Math.max(0,r)),n=BI(t);return Array.from({length:7},(i,s)=>{if(s===0)return{at:[0,.08+.22*n,0],size:.09*NS(t),shade:0};let o=(s-1)/6*Math.PI*2+(fp(e+s*7)-.5)*.6,a=(.12+fp(e+s*13)*.08)*n,l=.05+(.08+fp(e+s*17)*.1)*n;return{at:[Math.cos(o)*a,l,Math.sin(o)*a],size:(.055+fp(e+s*19)*.03)*NS(t*1.1),shade:s%2===0?0:1}})},"puffAt");var Yn=["grass","plains","sand","rock","snow","forest","mud","tundra"],br={shore:-.03,deep:-.15,reach:3},pp={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},OS={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},DS={Ocean:{relief:{base:br.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:OS,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Jo=u(r=>r==="Unknown"?pp:(Object.prototype.hasOwnProperty.call(DS,r)?DS[r]:void 0)??OS,"terrainEntry");var kI=u((r,e,t)=>{let n=Math.imul(r,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),US=Float64Array.from({length:32},(r,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),FS=u(r=>r*r*r*(r*(r*6-15)+10),"fade"),yr=u(({cell:r,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/r)),i=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/r)),o=e.v===null||s===null?r:e.v/s,a=u(h=>(h%n+n)%n,"wrapU"),l=u(h=>s===null?h:(h%s+s)%s,"wrapV"),c=u((h,f,d,m)=>{let g=Math.floor(kI(h,f,t)*16)*2;return(US[g]??0)*d+(US[g+1]??0)*m},"slope");return(h,f)=>{let d=h/i,m=f/o,g=Math.floor(d),_=Math.floor(m),x=d-g,b=m-_,v=FS(x),w=FS(b),M=a(g),R=a(g+1),E=l(_),y=l(_+1),S=c(M,E,x,b)+(c(R,E,x-1,b)-c(M,E,x,b))*v,L=c(M,y,x,b-1)+(c(R,y,x-1,b-1)-c(M,y,x,b-1))*v;return Math.max(-1,Math.min(1,(S+(L-S)*w)*1.4))}},"periodicNoise"),si=u(r=>{let e=r.map((n,i)=>.5**i),t=e.reduce((n,i)=>n+i,0);return(n,i)=>r.reduce((s,o,a)=>s+o(n,i)*(e[a]??0),0)/t},"fractalNoise");var Hs=128,xp=.5,mp=u(r=>(e,t)=>1-2*Math.abs(r(e,t)),"ridge"),zI={grass:{grain:u(({noise:r})=>si([r(64,1),r(16,2),r(4,25)]),"grain"),shade:.3,bumps:u(({noise:r})=>si([r(4,3),r(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:u(({noise:r})=>si([r(64,5),r(8,6)]),"grain"),shade:.3,bumps:u(({noise:r})=>si([r(8,7),r(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:u(({noise:r,wave:e,texels:t})=>{let n=e(7,3),i=r(64,9),s=r(32,10);return(o,a)=>.7*n(o+t(6)*i(o,a),a)+.3*s(o,a)},"grain"),shade:.12,bumps:u(({noise:r,wave:e,texels:t})=>{let n=e(7,3),i=r(64,9);return(s,o)=>n(s+t(6)*i(s,o),o)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:u(({noise:r})=>si([mp(r(24,11)),mp(r(12,12)),r(6,13)]),"grain"),shade:.35,bumps:u(({noise:r})=>si([mp(r(24,11)),mp(r(12,12)),r(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:u(({noise:r})=>r(64,14),"grain"),shade:.06,bumps:u(({noise:r})=>r(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:u(({noise:r})=>si([r(10,16),r(40,17)]),"grain"),shade:.3,bumps:u(({noise:r})=>r(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:u(({noise:r})=>r(48,19),"grain"),shade:.25,bumps:u(({noise:r})=>si([r(32,20),r(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:u(({noise:r})=>si([r(4,22),r(48,23)]),"grain"),shade:.3,bumps:u(({noise:r})=>r(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},gp=u(r=>Math.max(0,Math.min(255,Math.round(r*255))),"byte"),GI=u((r=Hs,[e,t]=[0,0])=>{let n=new Uint8Array(r*r*4*Yn.length),i={u:r,v:r};return Yn.forEach((s,o)=>{let a=zI[s],l=u((w,M)=>yr({cell:w*r/Hs,period:i,seed:7919*(o+1)+M}),"noise"),c=u((w,M)=>(R,E)=>Math.sin(2*Math.PI*(w*R+M*E)/r),"wave"),h={noise:l,wave:c,texels:u(w=>w*r/Hs,"texels")},f=a.grain(h),d=a.bumps(h),m=o*r*r*4,g=new Float32Array(r*r);for(let w=0;w<r;w++)for(let M=0;M<r;M++)g[w*r+M]=d(M+e,w+t);let _=u((w,M)=>g[(M+r)%r*r+(w+r)%r]??0,"height"),x=new Float32Array(r*r),b=0;for(let w=0;w<r;w++)for(let M=0;M<r;M++)x[w*r+M]=f(M+e,w+t),b+=x[w*r+M]??0;let v=b/(r*r);for(let w=0;w<r;w++)for(let M=0;M<r;M++){let R=m+(w*r+M)*4,E=(x[w*r+M]??0)-v,y=(_(M+1,w)-_(M-1,w))/2*(r/Hs),S=(_(M,w+1)-_(M,w-1))/2*(r/Hs);n[R]=gp(a.shade*E+.5),n[R+1]=gp((1-Math.max(-1,Math.min(1,y*a.steep)))/2),n[R+2]=gp((1-Math.max(-1,Math.min(1,S*a.steep)))/2),n[R+3]=gp(a.rough+a.roughVaries*E)}}),n},"surfaceTextures"),BS=GI;var Xi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var qi=u(r=>Number.isInteger(r)?`${r}.0`:`${r}`,"number"),kS=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${qi(Xi.rockTo)}, ${qi(Xi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${qi(Xi.snowAtEquator)} + (${qi(Xi.snowAtPoles)} - ${qi(Xi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${qi(Xi.snowDeepens)}, height) * smoothstep(${qi(Xi.snowSlips)}, ${qi(Xi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${qi(Xi.wetFrom)}, ${qi(Xi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${qi(Xi.wetUpTo)}, height));
}
`;var VI=u(r=>[r.u/Math.max(1,Math.round(r.u/xp)),r.v===null?xp:r.v/Math.max(1,Math.round(r.v/xp))],"surfaceTile"),HI=Yn.map((r,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),WI=null,XI=u(()=>WI??=BS(),"made"),qI=u((r,e)=>{let t=new Uo(XI(),Hs,Hs,Yn.length),n=new en({roughness:.92,vertexColors:!0}),[i,s]=VI(r);return t.format=qn,t.type=wn,t.wrapS=Hn,t.wrapT=Hn,t.magFilter=kt,t.minFilter=Sn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=Wi,t.needsUpdate=!0,n.onBeforeCompile=o=>{o.uniforms.surfaceDetail={value:t},o.uniforms.surfaceTile={value:new He(i,s)},o.uniforms.groundExtent={value:e},o.uniforms.rockColour={value:new Pe(Jo("Mountains").colour)},o.uniforms.snowColour={value:new Pe(Jo("Glacier").colour)},o.vertexShader=`attribute vec4 surfacesA;
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
${kS}
${o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${HI}
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
  surface = mix(surface, surface${Yn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${Yn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),zS=qI;function bp(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new wt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<r.length;++h){let f=r[h],d=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==r[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(f.morphAttributes[g]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,f=[];for(let d=0;d<r.length;++d){let m=r[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(f)}for(let h in s){let f=GS(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][d]);let g=GS(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}u(bp,"mergeGeometries");function GS(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new bt(o,t,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+f,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}u(GS,"mergeAttributes");function $x(r,e){if(e===R0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===El||e===Eu){let t=r.getIndex();if(t===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===El)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}u($x,"toTrianglesDrawMode");var jo={radius:.42,thickness:.025},Kx=jo.radius-jo.thickness,yp=.07,Iu=.04,jx=.25,Ut=.004,Zx=.08,Pu=.012,vp=.045,Mp=.02,YS=625341585,YI=.18,$I=30,KI=5,ZI=u(r=>Math.min($I,KI+Math.max(0,r-1)*2),"lotsFor"),JI=u(r=>Math.floor(Math.max(0,r-1)/6),"tierFor"),Qx=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return e>>>0},"citySeed"),$S=u((r,e,t,n=[])=>({seed:r,lots:ZI(e),tier:JI(e),ways:[...t],sea:[...n]}),"planFor"),jI=u((r,e)=>{let[t,n]=r.centre,i=e.map(l=>{let[c,h]=r.toward(l),f=Math.hypot(c-t,h-n);return{offset:l,du:f===0?0:(c-t)/f,dv:f===0?0:(h-n)/f}}),s=i.reduce((l,{du:c})=>l+c,0),o=i.reduce((l,{dv:c})=>l+c,0),a=u(({du:l,dv:c})=>l*s+c*o,"most");return i.length===0?[]:[i.reduce((l,c)=>a(c)>a(l)?c:l).offset]},"quayOf"),$n=u((r,e)=>{let t=Math.imul(r^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Lu=u((r,e,t)=>{let n=t[0]-e[0],i=t[1]-e[1],s=n*n+i*i;return s===0?0:((r[0]-e[0])*n+(r[1]-e[1])*i)/s},"along"),Cl=u(({at:[r,e],width:t,facing:n})=>{let i=t/2,s=[Math.cos(n)*i,-Math.sin(n)*i],o=[Math.sin(n)*i,Math.cos(n)*i];return[[r-s[0]-o[0],e-s[1]-o[1]],[r+s[0]-o[0],e+s[1]-o[1]],[r+s[0]+o[0],e+s[1]+o[1]],[r-s[0]+o[0],e-s[1]+o[1]]]},"footprintOf"),QI=u(([r,e])=>{let t=Math.hypot(e[0]-r[0],e[1]-r[1]),n=-(e[1]-r[1])/t*(Iu/2),i=(e[0]-r[0])/t*(Iu/2);return[[r[0]+n,r[1]+i],[e[0]+n,e[1]+i],[e[0]-n,e[1]-i],[r[0]-n,r[1]-i]]},"stripOf"),Sp=u((r,e,t)=>[r,e].some(n=>n.some((i,s)=>{let o=n[(s+1)%n.length],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=-(o[1]-i[1])/a,c=(o[0]-i[0])/a,h=u(m=>m.map(([g,_])=>g*l+_*c),"onto"),f=h(r),d=h(e);return Math.min(...d)-Math.max(...f)>=t||Math.min(...f)-Math.max(...d)>=t})),"apart"),Rl=u((r,e)=>{let[t,n,,i]=e,s=Lu(r,t,n),o=Lu(r,t,i),a=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-s,s-1),Math.max(0,-o,o-1))*a},"fromFootprint"),KS=u((r,{seed:e,lots:t,tier:n,ways:i,sea:s},o)=>{let[a,l]=r.centre,c=[...i,...jI(r,s)].flatMap(x=>{let[b,v]=r.toward(x),w=[(a+b)/2,(l+v)/2],M=w[0]-a,R=w[1]-l,E=Math.hypot(M,R);return E===0?[]:[[[a+M/E*yp,l+R/E*yp],w]]}),h=c.map(QI),f=u((x,b)=>{let v=c.map(([w,M])=>{let R=Lu(x,w,M),E=[w[0]+(M[0]-w[0])*R,w[1]+(M[1]-w[1])*R];return{t:R,near:E,off:Math.hypot(E[0]-x[0],E[1]-x[1])}}).filter(({t:w,off:M})=>w>=0&&w<=1&&M<=Iu/2+b+Ut&&M>0).sort((w,M)=>w.off-M.off)[0];return v===void 0?Math.atan2(a-x[0],l-x[1]):Math.atan2(v.near[0]-x[0],v.near[1]-x[1])},"facingAt"),d=Math.ceil(Kx/Zx),m=[];for(let x=-d;x<=d;x++)for(let b=-d;b<=d;b++){let v=(x+d)*(d*2+1)+(b+d),w=[a+b*Zx+($n(e,v*4)-.5)*2*Pu,l+x*Zx+($n(e,v*4+1)-.5)*2*Pu],M=Math.hypot(w[0]-a,w[1]-l),R=vp+$n(e,v*4+2)*Mp;M>Kx||!r.owns(w[0],w[1])||m.push({at:w,width:R,facing:f(w,R),roof:$n(e^YS,v),storeys:1+(M<YI?n:0)+($n(e,v*4+3)<.2?1:0),order:M+$n(e,v*4+3)*.03})}m.sort((x,b)=>x.order-b.order);let g=[],_=[];return m.forEach(({at:x,width:b,facing:v,storeys:w,roof:M})=>{let R=Cl({at:x,width:b,facing:v});R.every(([E,y])=>Math.hypot(E-a,y-l)<=Kx-Ut)&&Rl([a,l],R)>=yp+Ut&&Rl(o,R)>=jx+Ut&&h.every(E=>Sp(R,E,Ut))&&_.every(E=>Sp(R,E,Ut))&&(g.push({at:x,width:b,facing:v,storeys:w,roof:M}),_.push(R))}),{plaza:{at:[a,l],radius:yp},streets:c,lots:g.slice(0,t)}},"sprawl"),VS=4,e3=.62,t3=.05,ZS=12,Jx=.085,_p=.055,n3=.13,HS=32,i3=1821285621,JS=u(r=>r<VS?0:Math.min(ZS,r-VS+1),"suburbStepsFor"),r3=u(r=>r<=0?0:e3+(Math.min(r,ZS)-1)*t3,"suburbReach"),s3=u(r=>1-.55*Math.min(1,Math.max(0,(r-.5)/.7)),"builtShare"),WS=u(([r,e],t)=>{let n=Math.hypot(e[0]-r[0],e[1]-r[1]),i=-(e[1]-r[1])/n*t,s=(e[0]-r[0])/n*t;return[[r[0]+i,r[1]+s],[e[0]+i,e[1]+s],[e[0]-i,e[1]-s],[r[0]-i,r[1]-s]]},"strip"),XS=u(r=>r.slice(1).map((e,t)=>[r[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),qS=u((r,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...r.map(([n])=>n))>=t||Math.min(...r.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...r.map(([,n])=>n))>=t||Math.min(...r.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),jS=u((r,{seed:e,steps:t,city:n},i)=>{let s=r3(t);if(s===0)return[];let[o,a]=r.centre,l=r.toward(n),c=e^Math.imul(i3,(n[0]+7)*31+(n[1]+7)),h=i.runs.flatMap(({points:E})=>XS(E)),f=[...h.map(E=>({line:E,wide:_p})),...i.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:n3}))],d=[...f.map(({line:E,wide:y})=>WS(E,y)),...i.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>WS(E,_p))],m=u((E,y)=>{let S=f.map(({line:[L,I],wide:O})=>{let F=Lu(E,L,I),W=[L[0]+(I[0]-L[0])*F,L[1]+(I[1]-L[1])*F];return{t:F,near:W,off:Math.hypot(W[0]-E[0],W[1]-E[1]),wide:O}}).filter(({t:L,off:I,wide:O})=>L>=0&&L<=1&&I<=O+y+Ut&&I>0).sort((L,I)=>L.off-I.off)[0];return S===void 0?Math.atan2(l[0]-E[0],l[1]-E[1]):Math.atan2(S.near[0]-E[0],S.near[1]-E[1])},"facingAt"),g=Math.ceil(.75/Jx),_=[],x=u(E=>vp+$n(c,E*5+2)*Mp,"widthOf"),b=u(E=>Math.min(1/0,...h.map(([y,S])=>{let L=Math.max(0,Math.min(1,Lu(E,y,S)));return Math.hypot(y[0]+(S[0]-y[0])*L-E[0],y[1]+(S[1]-y[1])*L-E[1])})),"fromRuns"),v=u((E,y,S)=>{let L=Math.hypot(y[0]-l[0],y[1]-l[1]),I=L+$n(c,E*5+3)*.03,O=x(E);I<=s&&$n(c,E*5+4)<s3(L)&&r.owns(y[0],y[1])&&(!S||b(y)>=_p+Ut*2+vp+Mp)&&_.push({at:y,width:O,facing:m(y,O),roof:$n(c^YS,E),storeys:1+($n(c,E*5+3)<.15?1:0),order:I})},"consider");for(let E=-g;E<=g;E++)for(let y=-g;y<=g;y++){let S=(E+g)*(g*2+1)+(y+g);v(S,[o+y*Jx+($n(c,S*5)-.5)*2*Pu,a+E*Jx+($n(c,S*5+1)-.5)*2*Pu],!0)}i.runs.forEach(({key:E,points:y})=>{let S=XS(y).map(([O,F])=>({from:O,to:F,length:Math.hypot(F[0]-O[0],F[1]-O[1])})),L=S.reduce((O,F)=>O+F.length,0),I=Math.min(HS,Math.floor(L/(vp+Mp+Ut*2)));for(let O=0;O<I;O++)[1,-1].forEach((F,W)=>{let U=(g*2+1)**2+(E*HS+O)*2+W,q=_p+x(U)/2+Ut*2,te=(O+.5)/I*L+($n(c,U*5)-.5)*Pu;for(let[z,{from:Z,to:X,length:j}]of S.entries()){if(te<=j||z===S.length-1){let ie=(X[0]-Z[0])/j,pe=(X[1]-Z[1])/j;v(U,[Z[0]+ie*te-pe*q*F,Z[1]+pe*te+ie*q*F],!1);break}te-=j}})}),_.sort((E,y)=>E.order-y.order);let w=u(([E,y],S)=>(Math.hypot(E-S[0],y-S[1])**2-Math.hypot(E-l[0],y-l[1])**2)/(2*Math.hypot(S[0]-l[0],S[1]-l[1])),"nearer"),M=[],R=[];return _.forEach(({at:E,width:y,facing:S,storeys:L,roof:I})=>{let O=Cl({at:E,width:y,facing:S});Cl({at:E,width:y+Ut*2,facing:S}).every(([F,W])=>r.owns(F,W))&&i.others.every(F=>O.every(W=>w(W,F)>=Ut/2))&&Rl(l,O)>=jo.radius+jo.thickness+Ut&&i.stands.every(F=>Rl(F,O)>=jx+Ut)&&Rl(r.centre,O)>=jx+Ut&&[E,...O].every(([F,W])=>(i.ground?.(F,W)??0)>=0)&&i.taken.every(([F,W,U])=>Rl([F,W],O)>=U+Ut)&&d.every(F=>qS(O,F,Ut)||Sp(O,F,Ut))&&R.every(F=>qS(O,F,Ut)||Sp(O,F,Ut))&&(M.push({at:E,width:y,facing:S,storeys:L,roof:I}),R.push(O))}),M},"suburb");var QS="#c79a72",o3="#5a4a3a";var Tn="#7a5532",nb="#5f6266",ew="#8a8f96",Yi="#5d6447",eb="#e8e0cc",nw="#6e4b2f",Qo="#8a8580",tw="#5b3e27",Pl="#7d858c",a3=new H(0,1,0),Le=new cr(1,1,1),un=new _i(.5,.5,1,10),ea=new es(.5,1,10),Il=new Gs(.5,10,8),rb=class rb{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let i=Math.cos(n),s=Math.sin(n);return e.parts.forEach(o=>{let[a,l,c]=o.at;this.parts.push({...o,at:[t[0]+a*i+c*s,t[1]+l,t[2]-a*s+c*i],yaw:(o.yaw??0)+n})}),this}};u(rb,"Parts");var hn=rb,l3=u((r,e,t)=>{switch(r){case"ancient":t.add({shape:Il,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:ea,colour:nb,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Le,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:un,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Il,colour:Yi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),c3=u((r,e,t,n)=>{switch(r){case"club":n.add({shape:un,colour:Tn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:un,colour:Tn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:ea,colour:nb,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:un,colour:Tn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:ea,colour:ew,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Le,colour:ew,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Le,colour:Tn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:un,colour:Tn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Le,colour:r==="rifle"?"#3a3a3a":Tn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Le,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Le,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:un,colour:Tn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(r==="spear"||r==="sword")&&n.add({shape:un,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),u3={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},ib=u((r,e,t,{legs:n=!0,dress:i}={})=>{let s=new hn,o=i===void 0?void 0:u3[i],a=o?.coat??(r==="modern"?Yi:t[0]),l=o?.legs??(r==="ancient"?QS:r==="modern"?Yi:o3);return n&&(s.add({shape:Le,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Le,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Le,colour:a,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Le,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Le,colour:a,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Le,colour:a,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Il,colour:QS,at:[0,.16,0],size:[.034,.038,.034]}),i==="snow"?s.add({shape:Il,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):i==="irregular"?s.add({shape:Il,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):l3(r,t,s),i==="parachute"&&s.add({shape:Le,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),c3(e,r,t,s),s},"person"),Nu=u(r=>r<=1?[[0,0]]:r===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),tb=u((r=nw)=>new hn().add({shape:Le,colour:r,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Le,colour:r,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Le,colour:r,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Le,colour:r,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Le,colour:r,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Le,colour:r,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Le,colour:r,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),h3=u((r,e,t)=>new hn().addAll(tb(),[0,0,0]).add({shape:Le,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(ib(r,e,t,{legs:!1}),[0,.04,0]),"rider"),d3=u(r=>new hn().add({shape:Le,colour:Qo,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Le,colour:Qo,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:un,colour:Qo,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Le,colour:Qo,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Le,colour:Qo,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Le,colour:Qo,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Le,colour:Qo,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Le,colour:r[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Le,colour:r[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),An=u((r,e=.05)=>({shape:un,colour:Tn,at:r,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),f3=u((r,e,t)=>{if(e==="chariot")return new hn().addAll(tb(),[0,0,.09]).add({shape:Le,colour:Tn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Le,colour:r[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(An([-.042,.035,-.045],.065)).add(An([.042,.035,-.045],.065)).addAll(ib(t,"spear",r,{legs:!1}),[0,0,-.045]);let n=new hn().addAll(tb(t==="ancient"?"#8a7a64":nw),[0,0,.1]).add({shape:Le,colour:Tn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Le,colour:r[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(An([-.042,.03,-.03])).add(An([.042,.03,-.03])).add(An([-.042,.03,-.09])).add(An([.042,.03,-.09]));return e==="wagon"?n.add({shape:un,colour:eb,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Le,colour:eb,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Le,colour:r[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Le,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),p3=u((r,e,t)=>{if(r==="ancient"||r==="medieval")return new hn().add({shape:Le,colour:Tn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Le,colour:Tn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Le,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(An([-.045,.03,.04],.045)).add(An([.045,.03,.04],.045)).add(An([-.045,.03,-.04],.045)).add(An([.045,.03,-.04],.045));let n=t?.19:r==="renaissance"?.12:.16,i=r==="renaissance"?"#3d3a36":r==="modern"?Yi:nb;return new hn().add({shape:un,colour:i,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Le,colour:r==="modern"?Yi:Tn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Le,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(An([-.04,.035,0],.07)).add(An([.04,.035,0],.07))},"siege"),m3=u((r,e,t)=>{if(r==="industrial")return new hn().add({shape:Le,colour:Pl,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Le,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(An([-.045,.025,.06],.045)).add(An([.045,.025,.06],.045)).add(An([-.045,.025,-.06],.045)).add(An([.045,.025,-.06],.045));let n=new hn().add({shape:Le,colour:Yi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Le,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Le,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Le,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Le,colour:Yi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:un,colour:Yi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Le,colour:Yi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),g3=u((r,e)=>{let t=r.large?1.25:1,n=.3*t,i=.07*t,s=new hn;switch(r.hull){case"oars":case"sail":{s.add({shape:Le,colour:tw,at:[0,.03,0],size:[i,.045,n*.8]}).add({shape:ea,colour:tw,at:[0,.03,n*.45],size:[i,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:e[0],at:[0,.056,0],size:[i+.004,.008,n*.82]});let o=r.hull==="oars"?1:r.large?3:2;for(let a=0;a<o;a++){let l=(a-(o-1)/2)*.09*t;s.add({shape:un,colour:Tn,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:Le,colour:a===0?e[1]:eb,at:[0,.16,l],size:[i*1.3,.09,.005]})}return(r.guns??0)>0&&s.add({shape:Le,colour:"#1f1f1f",at:[0,.036,0],size:[i+.006,.009,n*.66]}),r.hull==="oars"&&s.add({shape:Le,colour:Tn,at:[-i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Le,colour:Tn,at:[i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:un,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Le,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Le,colour:Pl,at:[0,.035,0],size:[i*1.1,.05,n*1.15]}).add({shape:Le,colour:"#55595e",at:[0,.062,0],size:[i*1.5,.008,n*1.2]}).add({shape:Le,colour:Pl,at:[i*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Le,colour:e[0],at:[i*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Le,colour:r.era==="industrial"?"#4a4a48":Pl,at:[0,.03,0],size:[i,.045,n*.85]}).add({shape:ea,colour:r.era==="industrial"?"#4a4a48":Pl,at:[0,.03,n*.47],size:[i,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:Pl,at:[0,.075,-.02],size:[i*.6,.05,n*.3]}).add({shape:un,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Le,colour:e[1],at:[0,.056,0],size:[i+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,r.guns??0).forEach(o=>{let a=o>0?1:-1;s.add({shape:Le,colour:"#5f666c",at:[0,.066,n*o],size:[.035,.02,.035]}).add({shape:un,colour:"#5f666c",at:[0,.07,n*o+a*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),r.missiles&&[-1,1].forEach(o=>s.add({shape:Le,colour:"#4a5056",at:[o*i*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),x3=u((r,e)=>{let t=r.large?1.3:1,n=r.stealth?"#2c3034":r.large?"#6e7378":"#7d8890";return new hn().add({shape:un,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:ea,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Le,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Le,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Le,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),b3=u(r=>new hn().add({shape:Il,colour:Yi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Le,colour:Yi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Le,colour:r[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Le,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Le,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),y3=u((r,e)=>{let t=e?1.4:1;return new hn().add({shape:un,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:ea,colour:e?"#c8a020":r[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Le,colour:r[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Le,colour:r[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),iw=u((r,e)=>{switch(r.shape){case"foot":{let t=new hn;return Nu(r.squad).forEach(([n,i],s)=>t.addAll(ib(r.era,r.gear??"none",e,{dress:r.dress}),[n,0,i],s*.3-.3)),t}case"mounted":{let t=new hn;return Nu(r.squad).forEach(([n,i])=>t.addAll(h3(r.era,r.gear??"none",e),[n*1.4,0,i])),t}case"elephant":return d3(e);case"cart":return f3(e,r.cart??"wagon",r.era);case"siege":return p3(r.era,e,r.large===!0);case"vehicle":return m3(r.era,e,r.large===!0);case"ship":return g3(r,e);case"aircraft":return x3(r,e);case"helicopter":return b3(e);default:return y3(e,r.large===!0)}},"figureParts"),_3=u(({at:r,size:e,turn:t=[0,0,0],yaw:n=0})=>new Ke().compose(new H(...r),new $t().setFromAxisAngle(a3,n).multiply(new $t().setFromEuler(new ti(...t))),new H(...e)),"partMatrix"),wp=u(r=>{let e=r.map(n=>{let{shape:i,colour:s}=n,o=i.clone(),a=new Pe(s),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([a.r,a.g,a.b],h*3);return o.applyMatrix4(_3(n)),o.setAttribute("color",new bt(c,3)),o}),t=(e.length===0?null:bp(e))??new wt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),rw=u((r,e)=>wp(iw(r,e).parts),"figureGeometry"),v3=new _i(.19,.2,1,28),M3=new ts(.22,.014,4,32),S3=new ts(1,.03,3,40),w3="#dfe9ea",E3=[[.11,.2],[.16,.27]],sw=u((r,e,{fortified:t,scale:n,stand:i,part:s="whole",ripples:o=!1})=>{let a=r.shape==="ship",l=a?0:i,c=s==="base"?[]:iw(r,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+l,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(s==="figures")return wp(c);if(a||c.push({shape:v3,colour:e[1],at:[0,i/2,0],size:[1,i,1]}),a&&o){let h=(r.large?1.25:1)*n;E3.forEach(([f,d])=>c.push({shape:S3,colour:w3,at:[0,.006,0],size:[f*h,d*h,.15],turn:[Math.PI/2,0,0]}))}return t&&c.push({shape:M3,colour:"#b5ab98",at:[0,l+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),wp(c)},"unitBodyGeometry"),T3=new ts(jo.radius,jo.thickness,6,24),ow=u(()=>wp([{shape:T3,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");function Ws(r){let e=new Map,t=new Map,n=r.clone();return aw(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}u(Ws,"clone");function aw(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)aw(r.children[n],e.children[n],t)}u(aw,"parallelTraverse");var Db=class Db extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new Tp(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tp(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Eb(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=os.extractUrlBase(e);o=os.resolveURL(c,this.path)}else o=os.extractUrlBase(e);this.manager.itemStart(e);let a=u(function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},"_onError"),l=new xl(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dw){try{o[ut.KHR_BINARY_GLTF]=new Tb(e)}catch(f){i&&i(f);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Nb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let f=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(f){case ut.KHR_MATERIALS_UNLIT:o[f]=new cb;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[f]=new Ab(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[f]=new Rb;break;case ut.KHR_MESH_QUANTIZATION:o[f]=new Cb;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};u(Db,"GLTFLoader");var Ep=Db;function A3(){let r={};return{get:u(function(e){return r[e]},"get"),add:u(function(e,t){r[e]=t},"add"),remove:u(function(e){delete r[e]},"remove"),removeAll:u(function(){r={}},"removeAll")}}u(A3,"GLTFRegistry");function Wt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}u(Wt,"getMaterialExtension");var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ob=class Ob{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ln);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fu(h),c.distance=f;break;case"spot":c=new du(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_r(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};u(Ob,"GLTFLightsExtension");var lb=Ob,Ub=class Ub{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ln),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(i)}};u(Ub,"GLTFMaterialsUnlitExtension");var cb=Ub,Fb=class Fb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};u(Fb,"GLTFMaterialsEmissiveStrengthExtension");var ub=Fb,Bb=class Bb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(s,s)}return Promise.all(i)}};u(Bb,"GLTFMaterialsClearcoatExtension");var hb=Bb,kb=class kb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}};u(kb,"GLTFMaterialsDiffuseRoughnessExtension");var db=kb,zb=class zb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};u(zb,"GLTFMaterialsDispersionExtension");var fb=zb,Gb=class Gb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}};u(Gb,"GLTFMaterialsIridescenceExtension");var pb=Gb,Vb=class Vb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}};u(Vb,"GLTFMaterialsSheenExtension");var mb=Vb,Hb=class Hb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}};u(Hb,"GLTFMaterialsTransmissionExtension");var gb=Hb,Wb=class Wb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(s[0],s[1],s[2],Ln),Promise.all(i)}};u(Wb,"GLTFMaterialsVolumeExtension");var xb=Wb,Xb=class Xb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};u(Xb,"GLTFMaterialsIorExtension");var bb=Xb,qb=class qb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(s[0],s[1],s[2],Ln),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(i)}};u(qb,"GLTFMaterialsSpecularExtension");var yb=qb,Yb=class Yb{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}};u(Yb,"GLTFMaterialsBumpExtension");var _b=Yb,$b=class $b{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}};u($b,"GLTFMaterialsAnisotropyExtension");var vb=$b,Kb=class Kb{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}};u(Kb,"GLTFTextureBasisUExtension");var Mb=Kb,Zb=class Zb{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Zb,"GLTFTextureWebPExtension");var Sb=Zb,Jb=class Jb{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Jb,"GLTFTextureAVIFExtension");var wb=Jb,jb=class jb{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(m),h,f,d,i.mode,i.filter),m})})}else return null}};u(jb,"GLTFMeshoptCompression");var Tp=jb,Qb=class Qb{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Mi.TRIANGLES&&c.mode!==Mi.TRIANGLE_STRIP&&c.mode!==Mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,m=[];for(let g of f){let _=new Ke,x=new H,b=new $t,v=new H(1,1,1),w=new eu(g.geometry,g.material,d);for(let R=0;R<d;R++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&b.fromBufferAttribute(l.ROTATION,R),l.SCALE&&v.fromBufferAttribute(l.SCALE,R),w.setMatrixAt(R,_.compose(x,b,v));let M=null;for(let R in l)if(R==="_COLOR_0"){let E=l[R];w.instanceColor=new Wn(E.array,E.itemSize,E.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(M===null){let y=w.geometry;M=new wt,M.name=y.name;for(let S in y.attributes)M.setAttribute(S,y.attributes[S]);for(let S in y.morphAttributes)M.morphAttributes[S]=y.morphAttributes[S];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let S of y.groups)M.addGroup(S.start,S.count,S.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),w.geometry=M}let E=l[R];M.setAttribute(R,new Wn(E.array,E.itemSize,E.normalized))}Ot.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),m.push(w)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}};u(Qb,"GLTFMeshGpuInstancing");var Eb=Qb,dw="glTF",Du=12,lw={JSON:1313821514,BIN:5130562},ey=class ey{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Du),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dw)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Du,s=new DataView(e,Du),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===lw.JSON){let c=new Uint8Array(e,Du+o,a);this.content=n.decode(c)}else if(l===lw.BIN){let c=Du+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(ey,"GLTFBinaryExtension");var Tb=ey,ty=class ty{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let f=Ib[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=Ib[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],m=Ll[d.componentType];c[f]=m.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],x=l[g];x!==void 0&&(_.normalized=x)}f(m)},a,c,Ln,d)})})}};u(ty,"GLTFDracoMeshCompressionExtension");var Ab=ty,ny=class ny{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};u(ny,"GLTFTextureTransformExtension");var Rb=ny,iy=class iy{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}};u(iy,"GLTFMeshQuantizationExtension");var Cb=iy,ry=class ry extends hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,f=(n-t)/h,d=f*f,m=d*f,g=e*c,_=g-c,x=-2*m+3*d,b=m-d,v=1-x,w=b-d+f;for(let M=0;M!==a;M++){let R=o[_+M+a],E=o[_+M+l]*h,y=o[g+M+a],S=o[g+M]*h;s[M]=v*R+w*E+x*y+b*S}return s}};u(ry,"GLTFCubicSplineInterpolant");var Ap=ry,R3=new $t,sy=class sy extends Ap{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return R3.fromArray(s).normalize().toArray(s),s}};u(sy,"GLTFCubicSplineQuaternionInterpolant");var Pb=sy,Mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ll={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cw={9728:Ht,9729:kt,9984:xf,9985:Sl,9986:Yo,9987:Sn},uw={33071:Vn,33648:sl,10497:Hn},sb={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ib={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},C3={CUBICSPLINE:void 0,LINEAR:Do,STEP:No},ob={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function P3(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),r.DefaultMaterial}u(P3,"createDefaultMaterial");function ta(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u(ta,"addUnknownExtensionsToUserData");function _r(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(_r,"assignExtrasToUserData");function I3(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}u(I3,"addMorphTargets");function L3(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(L3,"updateMorphTargets");function N3(r){let e,t=r.extensions&&r.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ab(t.attributes):e=r.indices+":"+ab(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ab(r.targets[n]);return e}u(N3,"createPrimitiveKey");function ab(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}u(ab,"createAttributesKey");function Lb(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(Lb,"getNormalizedComponentScale");function D3(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}u(D3,"getImageURIMimeType");var O3=new Ke,oy=class oy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new A3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new cu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new mu(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xl(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ta(s,a,i),_r(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=u((o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])},"updateMappings");return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(os.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=sb[i.type],a=Ll[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new bt(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=sb[i.type],c=Ll[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,x;if(m&&m!==f){let b=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,w=t.cache.get(v);w||(_=new c(a,b*m,i.count*m/h),w=new Fo(_,m/h),t.cache.add(v,w)),x=new Os(w,l,d%m/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),x=new bt(_,l,g);if(i.sparse!==void 0){let b=sb.SCALAR,v=Ll[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,R=new v(o[1],w,i.sparse.count*b),E=new c(o[2],M,i.sparse.count*l);a!==null&&(x=new bt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let y=0,S=R.length;y<S;y++){let L=R[y];if(x.setX(L,E[y*l]),l>=2&&x.setY(L,E[y*l+1]),l>=3&&x.setZ(L,E[y*l+2]),l>=4&&x.setW(L,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=cw[d.magFilter]||kt,h.minFilter=cw[d.minFilter]||Sn,h.wrapS=uw[d.wrapS]||Hn,h.wrapT=uw[d.wrapT]||Hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==kt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(m,g){t.parse(d,m,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let m=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=u(function(x){let b=new Qt(x);b.needsUpdate=!0,m(b)},"onLoad")),t.load(os.resolveURL(d,s.path),_,void 0,g)})})}let f=h.then(function(d){return c===!0&&a.revokeObjectURL(l),_r(d,o),d.userData.mimeType=o.mimeType||D3(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new pl,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new fl,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let f=i[ut.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{let f=s.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ln),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Lt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=tn);let h=s.alphaMode||ob.OPAQUE;if(h===ob.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ob.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ni&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){let f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ni&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ni){let f=s.emissiveFactor;a.emissive=new Pe().setRGB(f[0],f[1],f[2],Ln)}return s.emissiveTexture!==void 0&&o!==ni&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(c).then(function(){let f=new o(a);return s.name&&(f.name=s.name),_r(f,s),t.associations.set(f,{materials:e}),s.extensions&&ta(i,f,s),f})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hw(l,a,t)})}u(s,"createDracoPrimitive");let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=N3(c),f=i[h];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=hw(new wt,c,t),c.mode===Mi.TRIANGLE_STRIP?d=d.then(m=>$x(m,Eu)):c.mode===Mi.TRIANGLE_FAN&&(d=d.then(m=>$x(m,El))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?P3(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],x=o[m],b,v=c[m];if(x.mode===Mi.TRIANGLES||x.mode===Mi.TRIANGLE_STRIP||x.mode===Mi.TRIANGLE_FAN||x.mode===void 0){let w=s.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),b=w&&M?new jc(_,v):new ct(_,v),b.isSkinnedMesh===!0&&b.normalizeSkinWeights()}else if(x.mode===Mi.LINES)b=new tu(_,v);else if(x.mode===Mi.LINE_STRIP)b=new Bo(_,v);else if(x.mode===Mi.LINE_LOOP)b=new nu(_,v);else if(x.mode===Mi.POINTS)b=new iu(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(b.geometry.morphAttributes).length>0&&L3(b,s),b.name=t.createUniqueName(s.name||"mesh_"+e),_r(b,s),x.extensions&&ta(i,b,x),t.assignFinalMaterial(b),f.push(b)}for(let m=0,g=f.length;m<g;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return s.extensions&&ta(i,f[0],s),f[0];let d=new Vt;s.extensions&&ta(i,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=f.length;m<g;m++)d.add(f[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(sp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Go(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_r(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let f=o[c];if(f){a.push(f);let d=new Ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qc(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let m=i.channels[f],g=i.samplers[m.sampler],_=m.target,x=_.node,b=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",b)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let d=f[0],m=f[1],g=f[2],_=f[3],x=f[4],b=[];for(let w=0,M=d.length;w<M;w++){let R=d[w],E=m[w],y=g[w],S=_[w],L=x[w];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let I=n._createAnimationTracks(R,E,y,S,L);if(I)for(let O=0;O<I.length;O++)b.push(I[O])}let v=new ko(s,void 0,b);return _r(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,O3)});for(let m=0,g=f.length;m<g;m++)h.add(f[m]);if(h.userData.pivot!==void 0&&f.length>0){let m=h.userData.pivot,g=f[0];h.pivot=new H().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new dl:c.length>1?h=new Vt:c.length===1?h=c[0]:h=new Ot,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(s.name&&(h.userData.name=s.name,h.name=o),_r(h,s),s.extensions&&ta(n,h,s),s.matrix!==void 0){let f=new Ke;f.fromArray(s.matrix),h.applyMatrix4(f)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Vt;n.name&&(s.name=i.createUniqueName(n.name)),_r(s,n),n.extensions&&ta(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,f=l.length;h<f;h++){let d=l[h];d.parent!==null?s.add(Ws(d)):s.add(d)}let c=u(h=>{let f=new Map;for(let[d,m]of i.associations)(d instanceof Nn||d instanceof Qt)&&f.set(d,m);return h.traverse(d=>{let m=i.associations.get(d);m!=null&&f.set(d,m)}),f},"reduceAssociations");return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}u(c,"collectMorphTargets"),Xs[s.path]===Xs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Xs[s.path]){case Xs.weights:h=is;break;case Xs.rotation:h=rs;break;case Xs.translation:case Xs.scale:h=Vs;break;default:n.itemSize===1?h=is:h=Vs;break}let f=i.interpolation!==void 0?C3[i.interpolation]:Do,d=this._getArrayFromAccessor(n);for(let m=0,g=l.length;m<g;m++){let _=new h(l[m]+"."+Xs[s.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Lb(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(n){let i=this instanceof rs?Pb:Ap;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(oy,"GLTFParser");var Nb=oy;function U3(r,e,t){let n=e.attributes,i=new vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let h=Lb(Ll[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new H,l=new H;for(let c=0,h=s.length;c<h;c++){let f=s[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let _=Lb(Ll[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}u(U3,"computeBounds");function hw(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}u(s,"assignAttributeAccessor");for(let o in n){let a=Ib[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return lt.workingColorSpace!==Ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),_r(r,e),U3(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?I3(r,e.targets,t):r})}u(hw,"addPrimitiveAttributes");var ly=["idle","move","fight","die","work","settle"],$i=u(r=>typeof r=="object"&&r!==null&&!Array.isArray(r),"isObject"),oi=u(r=>typeof r=="string"&&r!=="","isText"),fw=u(r=>typeof r=="number"&&Number.isFinite(r)&&r>0,"isScale"),pw=u(r=>$i(r)&&oi(r.name)&&oi(r.url)&&(r.attribution===void 0||oi(r.attribution)),"isLicence"),mw=u(r=>oi(r)&&r.endsWith(".glb")&&!r.startsWith("/")&&!/[\\%?#\u0000-\u0020]/.test(r)&&!/^[a-z][a-z0-9+.-]*:/i.test(r)&&r.split("/").every(e=>e!==""&&e!=="."&&e!==".."),"isFile"),ay=u(r=>ly.includes(r),"isRole"),F3=u(r=>$i(r)&&typeof r.at=="number"&&Number.isFinite(r.at)&&r.at>=0&&oi(r.joint),"isShot"),B3=u(r=>{if(!$i(r)||!mw(r.file)||!$i(r.clips))return;let e={};if(Object.entries(r.clips).forEach(([i,s])=>{ay(i)&&oi(s)&&(e[i]=s)}),Object.keys(e).length===0||Object.entries(r.clips).some(([i,s])=>ay(i)&&!oi(s)))return;if(r.shots===void 0)return{file:r.file,clips:e};if(!$i(r.shots))return;let t={},n=Object.entries(r.shots).filter(([i])=>ay(i));if(n.every(([i,s])=>e[i]!==void 0&&Array.isArray(s)&&s.every(F3)))return n.forEach(([i,s])=>t[i]=s),{file:r.file,clips:e,shots:t}},"riggedOf"),gw=u(r=>{if(!$i(r))return"not an object";if(r.schema!==1||r.kind!=="models")return"not a set of models (schema 1)";if(!oi(r.id)||!oi(r.name))return"no id or name";if(!pw(r.licence))return"no licence";if(!Array.isArray(r.credits)||r.credits.length===0||!r.credits.every(s=>$i(s)&&oi(s.work)&&oi(s.author)&&oi(s.url)&&pw(s.licence)))return"no credits";if(!fw(r.scale))return"no scale";let e=r.models;if(!$i(e))return"no models";let t=Object.entries(e).find(([,s])=>!$i(s)||!mw(s.file)||s.scale!==void 0&&!fw(s.scale));if(t!==void 0)return`model ${t[0]}: no glTF binary beside the manifest, or no scale`;let n=r.names;if(!$i(n)||!$i(n.unit))return"no unit names";let i=Object.entries(n.unit).find(([,s])=>!oi(s)||!Object.prototype.hasOwnProperty.call(e,s));return i!==void 0?`unit ${i[0]}: drawn by a model the set hasn't`:{...r,models:Object.fromEntries(Object.entries(e).map(([s,o])=>{let{rigged:a,...l}=o,c=B3(a);return[s,c===void 0?l:{...l,rigged:c}]}))}},"readModelManifest"),xw=u(r=>{let e=new Map;return Object.entries(r.names.unit).forEach(([t,n])=>e.set(n,[...e.get(n)??[],t])),e},"unitTypesOf"),cy=u((r,e)=>r.models[e]?.scale??r.scale,"scaleOf");var yw=u(r=>_w(r.geometry,Array.isArray(r.material)?r.material[0]:r.material),"rigPart"),_w=u((r,e)=>{let t=e;return{geometry:r,map:t.map??null,tinted:t.userData?.playerColour===!0,cutout:t.alphaTest>0,doubleSided:t.side===tn}},"partOf"),k3=u(r=>{let e=[];return r.updateMatrixWorld(!0),r.traverse(t=>{let n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).slice(0,1).forEach(s=>{let o=n.geometry.clone();o.applyMatrix4(n.matrixWorld),o.computeBoundingBox(),e.push(_w(o,s))})}),e},"partsOf"),z3=u(({animations:r,scene:e},t)=>{let n=new Map,i=new Map;return ly.forEach(s=>{let o=t.clips[s];if(o===void 0)return;let a=r.find(f=>f.name===o);if(a===void 0)throw new Error(`${t.file}: no clip ${o}`);let l=a.tracks.find(({name:f})=>e.getObjectByName(_t.parseTrackName(f).nodeName)===void 0);if(l!==void 0)throw new Error(`${t.file}: clip ${o} moves a node it can't name (${l.name})`);let c=(t.shots?.[s]??[]).map(f=>({...f,joint:_t.sanitizeNodeName(f.joint)})),h=c.find(({joint:f})=>e.getObjectByName(f)===void 0);if(h!==void 0)throw new Error(`${t.file}: clip ${o} shoots from a node it hasn't (${h.joint})`);n.set(s,a),i.set(s,c)}),{clips:n,shots:i}},"clipsOf"),G3=u(r=>{if(r.byteLength<20)return!1;let e=new DataView(r),t=e.getUint32(12,!0);if(e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==r.byteLength||e.getUint32(16,!0)!==1313821514||20+t>r.byteLength)return!1;let n=[];for(let i=12;i<r.byteLength;){if(i+8>r.byteLength)return!1;let s=e.getUint32(i,!0);if(n.push(e.getUint32(i+4,!0)),i+=8+s,i>r.byteLength)return!1}if(n.length>2||n.length===2&&n[1]!==5130562)return!1;try{let i=JSON.parse(new TextDecoder().decode(new Uint8Array(r,20,t))),s=u(a=>Array.isArray(a)?a.some(s):typeof a=="object"&&a!==null&&(Object.prototype.hasOwnProperty.call(a,"uri")||Object.values(a).some(s)),"reads"),o=u(a=>a===void 0||Array.isArray(a),"listed");return typeof i=="object"&&i!==null&&!Array.isArray(i)&&o(i.buffers)&&o(i.images)&&i.extensionsUsed===void 0&&i.extensionsRequired===void 0&&!s(i)}catch{return!1}},"selfContained"),V3=u(r=>{let e=new gl,t=`blob:${r}/`;return e.setURLModifier(n=>{if(!n.startsWith(t)&&!/^data:/i.test(n))throw new Error(`${n}: a model reads nothing from elsewhere`);return n}),e},"modelManager"),bw=u((r,e)=>{try{let t=new URL(r,e);return t.origin===new URL(e).origin?t.href:null}catch{return null}},"onSite"),Rp=u((r,e)=>`${r}#${e}`,"modelKey"),vw=u(async(r,e,t,n=()=>{})=>{let i=bw(r,location.href);if(i===null)throw new Error(`${r}: not on this site`);let s=await fetch(i,{redirect:"error",credentials:"omit"});if(!s.ok)throw new Error(`${r}: ${s.status}`);let o=gw(await s.json());if(typeof o=="string")throw new Error(`${r}: ${o}`);let a=new Ep(V3(location.origin)),l=xw(o),c=new URL(".",i).href,h=u(async f=>{let d=bw(f,i);if(d===null||!d.startsWith(c))throw new Error(`${f}: not beside the manifest`);let m=await fetch(d,{redirect:"error",credentials:"omit"});if(!m.ok)throw new Error(`${d}: ${m.status}`);let g=await m.arrayBuffer();if(!G3(g))throw new Error(`${d}: not a glTF binary whole in itself`);return a.parseAsync(g,"")},"parsed");return await Promise.all([...l.keys()].map(async f=>{let d=o.models[f];try{let m=await h(d.file);e(f,{parts:k3(m.scene),scale:cy(o,f)},l.get(f)??[])}catch(m){t(f,m);return}if(d.rigged!==void 0)try{let m=await h(d.rigged.file),{clips:g,shots:_}=z3(m,d.rigged);n(f,{scene:m.scene,clips:g,shots:_,scale:cy(o,f)},l.get(f)??[])}catch(m){t(f,m)}})),o},"loadModels");var Mw=.08,Sw=u(r=>{let e=new Pe(r),t=.2126*e.r+.7152*e.g+.0722*e.b;if(t>=Mw)return e;let n=(Mw-t)/(1-t);return e.setRGB(e.r+(1-e.r)*n,e.g+(1-e.g)*n,e.b+(1-e.b)*n)},"ownerTint"),hy=class hy extends en{constructor(t={}){let{tint:n,...i}=t;super(i);this.isTintedMaterial=!0;this.tint=new Pe(1,1,1);n!==void 0&&this.tint.copy(n)}onBeforeCompile(t){t.uniforms.tint={value:this.tint},t.fragmentShader=`uniform vec3 tint;
${t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 texel = texture2D( map, vMapUv );
        diffuseColor.rgb *= texel.rgb * mix( tint, vec3( 1.0 ), texel.a );
      #endif`)}`}customProgramCacheKey(){return"tinted"}copy(t){return super.copy(t),this.tint.copy(t.tint),this}};u(hy,"TintedMaterial");var uy=hy,ww=uy;var H3=.1,Ew=1.1,Tw=u(r=>{let e=[];return r.traverse(t=>{t.isSkinnedMesh&&e.push(t)}),e},"skinnedOf"),W3=u(r=>{let e=r.elements,t=[0,4,8].map(o=>[e[o],e[o+1],e[o+2]]),n=u((o,a)=>o[0]*a[0]+o[1]*a[1]+o[2]*a[2],"dot"),i=t.map(o=>n(o,o)),s=[[0,1],[0,2],[1,2]].every(([o,a])=>Math.abs(n(t[o],t[a]))<=1e-4*Math.sqrt(i[o]*i[a]));return Math.sqrt(s?Math.max(...i):i.reduce((o,a)=>o+a,0))},"stretchOf"),X3=u(r=>{let e=new Map,{boneInverses:t}=r.skeleton,n=r.geometry.getAttribute("position"),i=r.geometry.getAttribute("skinIndex"),s=r.geometry.getAttribute("skinWeight"),o=new H;if(n===void 0||i===void 0||s===void 0)return e;for(let a=0;a<n.count;a++){o.fromBufferAttribute(n,a).applyMatrix4(r.bindMatrix);for(let l=0;l<4;l++){let c=i.getComponent(a,l),h=t[c];if(s.getComponent(a,l)===0||h===void 0)continue;let f=e.get(c);f===void 0&&(f={at:new H().setFromMatrixPosition(h.clone().invert()),reach:0},e.set(c,f)),f.reach=Math.max(f.reach,o.distanceTo(f.at))}}return e},"reachOf"),q3=u(r=>{let e=Ws(r.scene),t=Tw(e),n=t.map(X3),i=t.map(()=>new vn),s=new Ke,o=new H,a=new H,l=new vn,c=u(()=>{e.updateMatrixWorld(!0),t.forEach((f,d)=>{let{bones:m,boneInverses:g}=f.skeleton;l.makeEmpty(),n[d].forEach(({at:_,reach:x},b)=>{s.multiplyMatrices(m[b].matrixWorld,g[b]),o.copy(_).applyMatrix4(s);let v=x*W3(s);l.expandByPoint(a.copy(o).addScalar(v)),l.expandByPoint(a.copy(o).addScalar(-v))}),l.isEmpty()||i[d].union(l.applyMatrix4(f.bindMatrixInverse))})},"take"),h=new Ho(e);c(),r.clips.forEach(f=>{h.stopAllAction(),h.clipAction(f).play();for(let d=0;d<f.duration;d+=H3)h.setTime(d),c();h.setTime(Math.max(0,f.duration-1e-4)),c()}),h.stopAllAction(),h.uncacheRoot(e),Tw(r.scene).forEach((f,d)=>{let m=i[d];if(m===void 0||m.isEmpty()){f.frustumCulled=!1;return}let g=m.getBoundingSphere(new Mn),_=m.getSize(new H);g.radius*=Ew,f.boundingSphere=g,f.boundingBox=m.clone().expandByVector(_.multiplyScalar((Ew-1)/2)),f.frustumCulled=!0})},"boundClips"),Aw=q3;var gn=u((r,e,t=3)=>({shape:"foot",era:r,gear:e,squad:t}),"foot"),Ou=u((r,e,t=2)=>({shape:"mounted",era:r,gear:e,squad:t}),"mounted"),ai=u((r,e,t=!1,n=0,i=!1)=>({shape:"ship",era:r,hull:e,squad:1,large:t,guns:n,missiles:i}),"ship"),Uu=u((r,e=!1,t=!1)=>({shape:"aircraft",era:r,squad:1,large:e,stealth:t}),"aircraft"),dy=u((r,e)=>({shape:"cart",era:r,cart:e,squad:1}),"cart"),Rw={Warrior:gn("ancient","club"),Spearman:gn("ancient","spear"),Swordman:gn("ancient","sword"),Archer:gn("ancient","bow"),Horseman:Ou("ancient","spear"),Chariot:dy("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:ai("ancient","oars"),Settlers:dy("ancient","wagon"),Diplomat:gn("ancient","case",1),Caravan:dy("ancient","goods"),Explorer:gn("ancient","pack",1),Pikeman:gn("medieval","pike"),Knight:Ou("medieval","lance"),Crusader:Ou("medieval","sword"),Fanatic:gn("medieval","sword"),Sail:ai("medieval","sail"),Musketman:gn("renaissance","musket"),Dragoon:Ou("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:ai("renaissance","sail",!0,1),Galleon:ai("renaissance","sail",!0),Rifleman:gn("industrial","rifle"),AlpineTrooper:{...gn("industrial","rifle"),dress:"snow"},Partisan:{...gn("industrial","rifle"),dress:"irregular"},Cavalry:Ou("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:gn("industrial","none",2),Ironclad:ai("industrial","steam",!1,1),Transport:ai("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:gn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:gn("modern","rifle"),Paratrooper:{...gn("modern","rifle",1),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:ai("modern","steam",!1,1),Cruiser:ai("modern","steam",!0,2),MissileCruiser:ai("modern","steam",!0,1,!0),Battleship:ai("modern","steam",!0,3),Submarine:ai("modern","submarine"),Carrier:ai("modern","carrier",!0),Fighter:Uu("modern"),StealthFighter:Uu("modern",!1,!0),Bomber:Uu("modern",!0),StealthBomber:Uu("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Nl=u((r,e=[])=>(Object.prototype.hasOwnProperty.call(Rw,r)?Rw[r]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?ai("industrial","steam"):e.includes("Air")?Uu("modern"):gn("ancient","spear")),"unitLook"),Dl=u(r=>r.shape==="aircraft"||r.shape==="helicopter"||r.shape==="missile","airborne");var by=2,Cw=.285,fy=.03,Nw="#fff4b0",Y3=.04,Cp=.004,py=.018,Pw=.01,Iw=.022,Lw=.03,Dw=.03,Pp=.002,$3="#4caf50",K3="#e0b030",Z3="#d04030",J3=256,na,Ki,ia,ra,ls,sa,oa,aa,qs,ku,la,ca,cs,Ul,Ys,my,gy,vy=class vy{constructor(){G(this,Ys);G(this,na,new Map);G(this,Ki,new Map);G(this,ia,new Map);G(this,ra,new Map);G(this,ls,new Map);G(this,sa,new Map);G(this,oa,new Map);G(this,aa,new Map);G(this,qs,new Map);G(this,ku,new WeakSet);G(this,la,null);G(this,ca,new Map);G(this,cs,null);G(this,Ul,0);this.figureMaterial=new en({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new ts(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,i=p(this,na).get(n);return i===void 0&&(i=new en({color:new Pe(e),roughness:.75,metalness:.05,...t?{emissive:new Pe(e),emissiveIntensity:.6}:{}}),p(this,na).set(n,i)),i}addModel(e,t){let n=p(this,ls).get(e);n!==void 0&&n!==t&&A(this,Ys,my).call(this,e,n),p(this,ls).set(e,t)}addRig(e,t){p(this,ls).has(e)&&(p(this,ku).has(t)||(Aw(t),p(this,ku).add(t)),p(this,qs).set(e,t))}rigOf(e){return p(this,qs).get(e)??null}rigFigures(e,t,n,i=1){let s=p(this,qs).get(e);if(s===void 0)return null;let o=t.shape==="ship",a=Dl(t),l=xy(t),c=s.scale*i,h=o?0:fy+(a?Cw*i:0);return Nu(l).map(([f,d])=>{let m=Ws(s.scene),g=0;return m.name=Gu,m.position.set(f*i,h,d*i),m.scale.setScalar(c),m.traverse(_=>{let x=_;x.isMesh&&(x.material=A(this,Ys,gy).call(this,e,g++,{...yw(x),geometry:x.geometry},n,!0))}),m})}modelFigures(e,t,n,i=1){let s=p(this,ls).get(e);if(s===void 0)return null;let o=t.shape==="ship",a=Dl(t),l=xy(t),c=JSON.stringify([e,l,i,o,a]),h=JSON.stringify([e,l,i,o,a,n[0]]),f=p(this,sa).get(c),d=p(this,oa).get(h);if(f===void 0){let m=s.scale*i,g=o?0:fy+(a?Cw*i:0),_=Nu(l).map(([v,w])=>new Ke().makeTranslation(v*i,g,w*i).multiply(new Ke().makeScale(m,m,m))),x=g;f={geometries:s.parts.map(v=>{let w=_.map(R=>v.geometry.clone().applyMatrix4(R)),M=(w.length===1?w[0].clone():bp(w))??new wt;return w.forEach(R=>R.dispose()),M.computeBoundingBox(),M.computeBoundingSphere(),x=Math.max(x,M.boundingBox?.max.y??g),M}),top:x},p(this,sa).set(c,f)}return d===void 0&&(d={meshes:f.geometries.map((m,g)=>[m,A(this,Ys,gy).call(this,e,g,s.parts[g],n)]),top:f.top},p(this,oa).set(h,d)),d}body(e,t,n,i=1,s="whole",o=!1){let a=o&&e.shape==="ship"&&s!=="figures",l=JSON.stringify([e,t,n,i,s,a]),c=p(this,ra).get(l);return c===void 0&&(c=sw(e,t,{fortified:n,scale:i,stand:fy,part:s,ripples:a}),p(this,ra).set(l,c)),c}walls(){return p(this,la)??k(this,la,ow()),p(this,la)}figure(e,t){let n=JSON.stringify([e,t]),i=p(this,ia).get(n);return i===void 0&&(i=rw(e,t),p(this,ia).set(n,i)),i}plain(e){let t=p(this,ca).get(e);return t===void 0&&(t=new Us({color:new Pe(e),sizeAttenuation:!1,depthTest:!1}),p(this,ca).set(e,t)),t}pointer(){if(p(this,cs)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=Nw,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new zs(e);n.colorSpace=Lt,k(this,cs,new Us({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,cs)}label(e,t,n){let i=`${e}\0${t}\0${n}`,s=p(this,Ki).get(i);if(s===void 0){let o=document.createElement("canvas"),a=o.getContext("2d"),l="600 28px system-ui, sans-serif",c=40;a!==null&&(a.font=l,o.width=Math.ceil(a.measureText(e).width)+24,o.height=c,a.font=l,a.fillStyle=t,a.beginPath(),a.roundRect?.(0,0,o.width,c,10),a.fill(),a.fillStyle=n,a.textBaseline="middle",a.fillText(e,12,c/2+1));let h=new zs(o);h.colorSpace=Lt,s=new Us({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,Ki).set(i,s)}return s}get sweepDue(){return p(this,Ki).size>Math.max(J3,p(this,Ul)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(i=>{i instanceof ct&&t.add(i.geometry),i instanceof jr&&t.add(i.material)});p(this,Ki).forEach((n,i)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,Ki).delete(i))}),k(this,Ul,p(this,Ki).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,ia).forEach(e=>e.dispose()),p(this,ra).forEach(e=>e.dispose()),p(this,la)?.dispose(),k(this,la,null),p(this,ra).clear(),[...p(this,ls)].forEach(([e,t])=>A(this,Ys,my).call(this,e,t)),this.figureMaterial.dispose(),p(this,ca).forEach(e=>e.dispose()),p(this,cs)?.map?.dispose(),p(this,cs)?.dispose(),p(this,ca).clear(),k(this,cs,null),p(this,na).forEach(e=>e.dispose()),p(this,Ki).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,na).clear(),p(this,Ki).clear(),p(this,ia).clear(),k(this,Ul,0)}};na=new WeakMap,Ki=new WeakMap,ia=new WeakMap,ra=new WeakMap,ls=new WeakMap,sa=new WeakMap,oa=new WeakMap,aa=new WeakMap,qs=new WeakMap,ku=new WeakMap,la=new WeakMap,ca=new WeakMap,cs=new WeakMap,Ul=new WeakMap,Ys=new WeakSet,my=u(function(e,t){let n=u(i=>JSON.parse(i)[0]===e,"ours");p(this,qs).get(e)?.scene.traverse(i=>{let s=i;s.isMesh&&(s.geometry.dispose(),[s.material].flat().forEach(o=>{o.map?.dispose(),o.dispose()}))}),p(this,qs).delete(e),t.parts.forEach(({geometry:i,map:s})=>{i.dispose(),s?.dispose()}),p(this,ls).delete(e),[...p(this,sa)].forEach(([i,{geometries:s}])=>{n(i)&&(s.forEach(o=>o.dispose()),p(this,sa).delete(i))}),[...p(this,oa).keys()].filter(n).forEach(i=>p(this,oa).delete(i)),[...p(this,aa)].forEach(([i,s])=>{n(i)&&(s.dispose(),p(this,aa).delete(i))})},"#letGoOfModel"),gy=u(function(e,t,n,i,s=!1){let o=JSON.stringify([e,t,n.tinted?i[0]:null,s]),a=p(this,aa).get(o);if(a===void 0){let l={map:n.map,roughness:.85,metalness:0};a=n.cutout?new en({...l,alphaTest:.5,side:tn}):new ww({...l,tint:n.tinted?Sw(i[0]):new Pe(1,1,1),side:n.doubleSided?tn:vi}),p(this,aa).set(o,a)}return a},"#modelMaterial"),u(vy,"MarkerKit");var Lp=vy,Ow=u(r=>{let{r:e,g:t,b:n}=new Pe(r);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Ol=u((r,e,t,n)=>(r.position.set(e,t,n),r),"place"),j3=u(r=>[r.count>1?String(r.count):"",r.status??"",r.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),Q3=3,eL=4,Fu=u((r,e,t,n,i=Q3)=>{let s=new jr(r);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=i,s.frustumCulled=!1,s},"badge"),Uw=u((r,e,t)=>{let n=r.map?.image,i=n&&n.height>0&&n.width>0?n.width/n.height:1;return Fu(r,e*i,e,t)},"label"),Ip=[0,.36,0],tL=u((r,e)=>{let t=new Vt;return e.walled&&t.add(new ct(r.walls(),r.figureMaterial)),e.unnamed!==!0&&t.add(Ol(Uw(r.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],Ow(e.colours[0])),Dw,0),...Ip)),t},"drawCity"),nL=u((r,e,t=null,n=!1,i=t===null,s=!1)=>{let o=new Vt,{ring:a}=r.geometries,l=Nl(e.type,e.kinds),c=n&&Dl(l),h=e.model===void 0?null:r.modelFigures(e.model,l,e.colours,e.size),f=h===null?r.body(l,e.colours,e.fortified,e.size,c?"figures":"whole",i):null,d=c?new Vt:o,m=h?.top??f?.boundingBox?.max.y??.3,g=t?.at??[0,m+Y3,0],_=e.health!==null,x=(t?.over??0)+(_?Cp+Pp:0),b=x+Pw+Pp,v=j3(e),w=b+(v===""?0:Iw+Pp),M=h===null?new ct(f,r.figureMaterial):new Vt,R=s&&h!==null&&e.model!==void 0?r.rigFigures(e.model,l,e.colours,e.size):null;if(R!==null?R.forEach(E=>M.add(E)):h?.meshes.forEach(([E,y])=>M.add(new ct(E,y))),M.name=yy,M.rotation.y=e.facing,d.add(M),c||h!==null){let E=r.body(l,e.colours,e.fortified,e.size,"base",i);E.getAttribute("position")!==void 0&&o.add(new ct(E,r.figureMaterial))}if(c&&(d.name=_y,o.add(d)),e.health!==null){let E=Math.max(0,Math.min(1,e.health));if(d.add(Ol(Fu(r.plain("#202020"),py,Cp,t?.over??0),...g)),E>0){let y=Fu(r.plain(E>.5?$3:E>.25?K3:Z3),py*E,Cp*.6,(t?.over??0)+Cp*.2);y.center.x=1/(2*E),d.add(Ol(y,...g))}}if(d.add(Ol(Fu(r.plain(e.colours[0]),py,Pw,x),...g)),v!==""&&d.add(Ol(Uw(r.label(v,e.colours[0],Ow(e.colours[0])),Iw,b),...g)),e.active){let E=new ct(a,r.material(Nw,!0));E.rotation.x=Math.PI/2,E.position.y=.01,o.add(E),d.add(Ol(Fu(r.pointer(),Lw,Lw,w,eL),...g))}return o},"drawUnit"),zu="unit",yy="figures",xy=u(r=>r.shape==="foot"?r.squad:1,"figuresOf"),Fw=u(({type:r,kinds:e})=>xy(Nl(r,e)),"markerFigures"),Gu="rig figure",_y="aloft",ua=.26,Bw=u((r,e,t=!1,n=!1)=>{let i=new Vt;if(e.city!==null&&i.add(tL(r,e.city)),e.unit!==null){let s=e.inCity??e.city!==null?ua:0,o=nL(r,e.unit,e.city===null?null:{at:[Ip[0],Ip[1],Ip[2]-s],over:Dw+Pp},t,s===0,n);o.name=zu,o.position.z=s,i.add(o)}return i},"drawMarker"),Bu=new WeakMap,Np=new WeakMap,iL=.5,Vu=u((r,e,t)=>{r.forEach(n=>n.traverse(i=>{if(!(i instanceof ct||i instanceof jr))return;let s=Bu.get(i)??i.material,o=t.get(s);o===void 0&&(o=s.clone(),i instanceof jr?o.transparent=!0:o.alphaHash=!0,t.set(s,o)),Bu.has(i)||(Bu.set(i,s),Np.set(i,i.castShadow)),i.material=o,i.castShadow=(Np.get(i)??!1)&&e>=iL})),t.forEach((n,i)=>{n.opacity=i.opacity*e})},"fade"),kw=u((r,e)=>{r.forEach(t=>t.traverse(n=>{let i=Bu.get(n);i===void 0||!(n instanceof ct||n instanceof jr)||(n.material=i,n.castShadow=Np.get(n)??n.castShadow,Bu.delete(n),Np.delete(n))})),Fl(e)},"unfaded"),Fl=u(r=>{r.forEach(e=>e.dispose()),r.clear()},"unfade");var rL=12,sL=14,oL=1.6,aL=2,lL=-1,cL=-2,Gw=1e3/30-4,uL=u((r,{distance:e,focus:t},n,i,s,o)=>{let a=new Set;if(e>(s.size>0?sL:rL))return a;let l=u((c,h,f)=>f===null?c-h:c-h-f*Math.round((c-h)/f),"apart");for(let c of r){let[h,f]=c.split(",").map(Number),[d,m]=n(h,f),g=s.has(c);Math.hypot(l(d,t[0],i.u),l(m,t[1],i.v))<=e*(g?aL:oL)&&o(h,f,g?cL:lL)&&a.add(c)}return a},"idleSquares"),zw=4,Vw=u((r,e,t,n)=>{let i=[...e].filter(o=>!r.has(o)&&!n(o)),s=[...r].filter(o=>!e.has(o)&&!n(o)&&t(o));return{stand:i,start:s.slice(0,zw),waiting:s.length>zw}},"idleChanges"),Hw=uL;var Ww=new gu,hL=u((r,e,t)=>{let n=[],i=new Map;for(let[o,a]of r)a.forEach(l=>l.getObjectByName(zu)?.traverseVisible(c=>{c instanceof ct&&(n.push(c),i.set(c,o))}));if(n.length===0)return null;Ww.setFromCamera(new He(t[0],t[1]),e);let[s]=Ww.intersectObjects(n,!1);return s===void 0?null:i.get(s.object)??null},"unitUnder"),Xw=hL;var $s=u(r=>r*Math.PI/180,"degrees"),My=$s(25),qw=$s(80),Yw=5,dL=90,fL=1.12,Bl=$s(40),Sy=$s(45),pL={above:{yaw:0,pitch:$s(80)},classic:{yaw:0,pitch:$s(55)},isometric:{yaw:$s(45),pitch:$s(30)}};var $w=u(r=>({focus:r,...pL.classic,distance:24}),"defaultOrbit"),Dp=u((r,e,t)=>Math.min(t,Math.max(e,r)),"clamp"),Kw=u(r=>{let e=Math.PI*2;return(r%e+e)%e},"normaliseYaw"),da=u(r=>({...r,yaw:Kw(r.yaw),pitch:Dp(r.pitch,My,qw),distance:Dp(r.distance,Yw,dL)}),"clampOrbit"),kl=u((r,e)=>da({...r,distance:r.distance/fL**e}),"zoomed"),Op=u(({yaw:r,pitch:e})=>{let t=Math.sin(r),n=Math.cos(r),i=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-i,-n*s],right:[n,0,t],up:[t*i,s,-n*i]}},"basis"),zl=u((r,e)=>{let{forward:t}=Op(r),[n,i]=r.focus;return[n-t[0]*r.distance,e-t[1]*r.distance,i-t[2]*r.distance]},"eye"),Gl=u((r,e,[t,n,i],s)=>{let{forward:o,right:a,up:l}=Op(r),c=zl(r,e),h=[t-c[0],n-c[1],i-c[2]],f=u(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(o),m=Math.tan(Bl/2);return d<=1e-6?null:[f(a)/(d*m*s),f(l)/(d*m)]},"toScreen"),wy=u((r,e,[t,n],i)=>{let{forward:s,right:o,up:a}=Op(r),l=Math.tan(Bl/2);return{from:zl(r,e),direction:[0,1,2].map(c=>(s[c]??0)+t*l*i*(o[c]??0)+n*l*(a[c]??0))}},"rayThrough"),ha=u((r,e,t,n,i=e)=>{let{from:s,direction:o}=wy(r,e,t,n);if(o[1]>-1e-6)return null;let a=(i-s[1])/o[1];return a<=0?null:[s[0]+o[0]*a,s[2]+o[2]*a]},"groundAt"),Zw=u((r,e,t,n,i)=>{let s=ha(r,e,t,i),o=ha(r,e,n,i);if(s!==null&&o!==null)return{...r,focus:[r.focus[0]+s[0]-o[0],r.focus[1]+s[1]-o[1]]};let a=(t[0]-n[0])*i,l=(t[1]-n[1])/Math.sin(r.pitch),c=r.distance*Math.tan(Bl/2),{right:h}=Op(r),f=[Math.sin(r.yaw),-Math.cos(r.yaw)];return{...r,focus:[r.focus[0]+(a*h[0]+l*(f[0]??0))*c,r.focus[1]+(a*h[2]+l*(f[1]??0))*c]}},"panned"),Jw=u((r,e,t)=>{let n=u((o,a)=>(o%a+a)%a,"wrap"),[i,s]=r.focus;return{...r,yaw:Kw(r.yaw),focus:[n(i,e.u),e.v===null?Dp(s,0,t):n(s,e.v)]}},"settled"),jw=u((r,e,t,n,i)=>{let s=u((l,c)=>c===null?l:l-c*Math.round(l/c),"short"),o=Math.PI*2,a=t*t*(3-2*t);return{focus:[r.focus[0]+s(e.focus[0]-r.focus[0],n.u)*a,r.focus[1]+s(e.focus[1]-r.focus[1],n.v)*a],yaw:r.yaw+(i??s(e.yaw-r.yaw,o))*a,pitch:r.pitch+(e.pitch-r.pitch)*a,distance:r.distance+(e.distance-r.distance)*a}},"between"),us=u((r,e)=>{let t=e===void 0?1/0:Math.min(e.u,e.v??1/0)/2,n=t<Yw?1/0:t,i=Math.min(r*3.5,r+n);return{near:Math.min(r*1.2,(r+i)/2),far:i}},"sightFor"),Qw=u((r,e)=>{let t=Bl/2,n=u(i=>{let s=i/(r*Math.cos(t));return Math.atan2(s*Math.sin(t),s*Math.cos(t)-1)},"meeting");return Dp(My+n(us(r,e).far)-n(us(r).far),My,qw)},"lowestPitch");var mL=new Pe("#3f8a8c"),gL=new Pe("#173a52"),xL=new Pe("#e8eeee"),e1=`
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
`,bL=`
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
`,Ks,Si,li,Ty=class Ty{constructor(e,t){G(this,Ks);G(this,Si);G(this,li);k(this,Ks,e),k(this,Si,new Uint16Array(e.columns*e.rows*2));for(let i=0;i<p(this,Si).length;i+=2)p(this,Si)[i]=lr.toHalfFloat(0),p(this,Si)[i+1]=lr.toHalfFloat(1);k(this,li,new Bs(p(this,Si),e.columns,e.rows,pr,ri)),p(this,li).wrapS=Hn,p(this,li).wrapT=e.wrapsV?Hn:Vn,p(this,li).magFilter=kt,p(this,li).minFilter=kt,p(this,li).needsUpdate=!0;let n=new Dn({uniforms:Zo.merge([Ie.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},shallow:{value:mL.clone()},deep:{value:gL.clone()},foam:{value:xL.clone()},sky:{value:t.clone()},sunDirection:{value:new H(.5,.7,.4).normalize()},sunColour:{value:new Pe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:e1,fragmentShader:bL,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,li),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new ct(new ur(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:i,spacingV:s}=p(this,Ks),o=Math.round(e.u/i),a=Math.round(e.v/s),l=e.positions.length/3;for(let c=0;c<l;c++){let h=o+Math.round((e.positions[c*3]??0)/i),f=a+Math.round((e.positions[c*3+2]??0)/s);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;p(this,Si)[d]=lr.toHalfFloat(e.positions[c*3+1]??0),p(this,Si)[d+1]=lr.toHalfFloat(e.unseen[c]??0)}}p(this,li).needsUpdate=!0}height(e,t){return lr.fromHalfFloat(p(this,Si)[(t*p(this,Ks).columns+e)*2]??0)}unseen(e,t){return lr.fromHalfFloat(p(this,Si)[(t*p(this,Ks).columns+e)*2+1]??0)>.5}texture(){return p(this,li)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Ks).wrapsV&&e}follow(e,t,n,i){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,li).dispose()}};Ks=new WeakMap,Si=new WeakMap,li=new WeakMap,u(Ty,"Water");var Ey=Ty,t1=Ey,yL=`
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
`,_L=.18,Hu,Ay=class Ay{constructor(e,t){G(this,Hu);k(this,Hu,t.wrapsV);let n=new Dn({uniforms:Zo.merge([Ie.fog,{ground:{value:null},cell:{value:new He},size:{value:new He},extent:{value:new He},wrapsV:{value:!1}}]),vertexShader:e1,fragmentShader:yL,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new ct(new ur(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Hu)&&e}follow(e,t,n){this.mesh.position.set(e,_L,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Hu=new WeakMap,u(Ay,"Clouds");var Up=Ay;var vL=.6,ML=.05,fa=64,n1=.125,SL=`
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
`,wL=`
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
`,i1=u(r=>{let e=Math.max(1,Math.ceil(Math.sqrt(r)));return[e,Math.max(1,Math.ceil(r/e))]},"atlasCells"),EL=u((r,e)=>{let[t]=i1(r.length),n=fa*(1-2*n1);return r.flatMap((i,s)=>{let o=e(i);if(o===null||o[0]<=0||o[1]<=0)return[];let a=n/Math.max(o[0],o[1]),l=o[0]*a,c=o[1]*a;return[{_:i,x:s%t*fa+(fa-l)/2,y:Math.floor(s/t)*fa+(fa-c)/2,width:l,height:c}]})},"atlasPlaces"),TL=u(r=>{let{naturalWidth:e,naturalHeight:t,width:n,height:i}=r;return[e??(typeof n=="number"?n:0),t??(typeof i=="number"?i:0)]},"imageSize"),Zs,ci,Wu,pa,Xu,Fp,Vl,r1,s1,Cy=class Cy{constructor(e){G(this,Vl);G(this,Zs,null);G(this,ci,null);G(this,Wu,"");G(this,pa);G(this,Xu,new WeakMap);G(this,Fp,1);k(this,pa,e),this.material=new Dn({uniforms:Zo.merge([Ie.fog,{atlas:{value:null},lean:{value:1},lift:{value:ML},bias:{value:vL},cells:{value:[1,1]},pad:{value:n1}}]),vertexShader:SL,fragmentShader:wL,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,Zs)?.dispose(),k(this,Zs,null),e===null||e.count===0)return null;A(this,Vl,s1).call(this,e);let t=new pu,n=new ur(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Wn(e.anchors,3)),t.setAttribute("slot",new Wn(e.slots,2)),t.setAttribute("size",new Wn(e.sizes,1)),t.setAttribute("cell",new Wn(e.cells,1)),t.instanceCount=e.count,k(this,Zs,t),t}make(){let e=new ct(p(this,Zs)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,Zs)?.dispose(),p(this,ci)?.dispose(),this.material.dispose()}};Zs=new WeakMap,ci=new WeakMap,Wu=new WeakMap,pa=new WeakMap,Xu=new WeakMap,Fp=new WeakMap,Vl=new WeakSet,r1=u(function(e){if(e===null)return 0;let t=p(this,Xu).get(e);return t===void 0&&(t=Bi(this,Fp)._++,p(this,Xu).set(e,t)),t},"#imageId"),s1=u(function(e){let t=e.names.map(a=>`${a}:${A(this,Vl,r1).call(this,p(this,pa).call(this,a))}`).join(",");if(t===p(this,Wu)&&p(this,ci)!==null)return;let[n,i]=i1(e.names.length),s=document.createElement("canvas"),o=s.getContext("2d");s.width=n*fa,s.height=i*fa,o!==null&&(o.imageSmoothingEnabled=!1,EL(e.names,a=>{let l=p(this,pa).call(this,a);return l===null?null:TL(l)}).forEach(({_:a,x:l,y:c,width:h,height:f})=>{let d=p(this,pa).call(this,a);d!==null&&o.drawImage(d,l,c,h,f)})),p(this,ci)?.dispose(),k(this,ci,new zs(s)),p(this,ci).colorSpace=Lt,p(this,ci).premultiplyAlpha=!0,p(this,ci).magFilter=Ht,p(this,ci).minFilter=Sn,p(this,ci).generateMipmaps=!0,k(this,Wu,t),this.material.uniforms.atlas.value=p(this,ci),this.material.uniforms.cells.value=[n,i]},"#drawAtlas"),u(Cy,"YieldIcons");var Ry=Cy,o1=Ry;var a1=["idle","move","work"],l1=2,Py=.13,c1=u((r,e)=>({figures:e,stagger:Py,clips:Object.fromEntries([...r.clips].map(([t,n])=>[t,{duration:n.duration,shots:r.shots.get(t)??[]}]))}),"rigFacts"),AL=u((r,e,t)=>{if(!(e>0))return 0;let n=Math.max(0,t);return a1.includes(r)?n%e:Math.min(n,e-1e-4)},"clipTime"),RL=10,u1=u(r=>{let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return(e>>>0)/2**32*RL},"idlePhase"),Bp=u((r,e,t,n,i)=>r.getObjectsByProperty("name",Gu).forEach((s,o)=>{let a=t===null?void 0:e.clips.get(t),l=i.get(s)??{mixer:new Ho(s),role:null},c=a===void 0?null:t;i.set(s,l),l.role!==c&&(l.mixer.stopAllAction(),l.role=c,a!==void 0&&l.mixer.clipAction(a).setLoop(tp,1/0).play()),a!==void 0&&c!==null&&l.mixer.setTime(AL(c,a.duration,a1.includes(c)?n+o*Py:n-o*Py))}),"poseFigures");var Iy=10466244,CL=14082796,PL=5984576,IL=16773336,kp=u((r,e,t)=>{let n=u((i,s)=>{if(s===null)return[0];let o=[];for(let a=Math.floor((i-e)/s);a*s<=i+e;a++)o.push(a*s);return o},"along");return n(r[0],t.u).flatMap(i=>n(r[1],t.v).map(s=>[i,s]))},"copiesNear"),Ly=u((r,e)=>Math.min(us(r.distance,e).far,r.distance*2.2),"markerSight"),LL=u((r,e,t,[n,i])=>{let s=r?.getObjectsByProperty("name",Gu)[e]?.getObjectByName(t);if(s===void 0)return null;let o=s.getWorldPosition(new H);return[o.x-n,o.y,o.z-i]},"jointOf"),h1=u((r,e)=>()=>e?Ws(r):r.clone(),"copyOf"),hs=u(r=>r.traverse(e=>{e.isSkinnedMesh&&e.skeleton.dispose()}),"letGoOfSkeletons"),NL=u((r,e)=>{let{near:t,far:n}=us(r.distance,e);return{near:t,far:n,land:kp(r.focus,n,e),markers:kp(r.focus,Ly(r,e),e)}},"sightOf"),DL=u(r=>[new Gn(new H(0,0,1),0),new Gn(new H(0,0,-1),r)],"polesAt"),OL=u((r,[e,t],n,i,s)=>r.flatMap(([o,a])=>[[o,a],...s&&i!==null&&t>n?[[o,a-i]]:[],...s&&i!==null&&e<0?[[o,a+i]]:[]]),"overlayCopies"),d1=2048,f1=Math.hypot(30,40,20),p1=u((r,{period:e,ground:t,yieldIcon:n})=>{let i=new cp({antialias:!0,canvas:r}),s=new Kc,o=new jt(Bl*180/Math.PI,1,.1,400),a=new Vt,{material:l,detail:c}=zS(e,t.rows*t.spacingV),h=new Vo(IL,2.6),f=new Map,d=new Map,m=new en({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,_=DL(g),x=new Map,b=new Set,v=new Map,w=new WeakMap,M=new Map,R=new ml(1,1),E=u(Q=>new en({color:new Pe(Q),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),y=[E("#d8d5cf"),E("#a9a59d")],S=new Map,L=new _i(.006,.009,.03,6),I=new en({color:new Pe("#3d5a3a"),roughness:.3,metalness:0}),O=new ml(.011,0),F=new ni({color:new Pe("#ffb347")}),W=new Map,U=new ni({color:new Pe("#dfe8e8"),side:tn}),q=new Vt,te=new Lp,z=new Vt,Z=new o1(n??(()=>null)),X=new t1(t,new Pe(Iy)),j=new Up(X.texture(),t),ie=new $c(Iy,30,110),pe=0,ye=[[0,0]],ne="0,0",me=[[0,0]],he="0,0",ge=!1,de=null,Fe=!1;i.outputColorSpace=Lt,i.localClippingEnabled=!0,i.toneMapping=bu,i.shadowMap.enabled=!0,i.shadowMap.type=pf,s.background=new Pe(Iy),s.fog=ie,s.add(new uu(CL,PL,.9)),s.add(a),s.add(q),s.add(z),s.add(X.mesh),s.add(j.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(d1,d1),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let Ye=u((Q,N,se=ye)=>se.map(([ue,xe])=>{let $=Q.make();return $.position.set(Q.at[0]+ue,Q.at[1],Q.at[2]+xe),N.add($),$.updateMatrixWorld(!0),$}),"copiesOf"),De=u(Q=>Ye(Q,a,OL(ye,Q.span,g,e.v,ge)),"overlayCopiesOf"),rt=u(Q=>Q.flatMap(N=>{let se=N.getObjectByName(zu);return se===void 0?[]:[se]}),"unitParts"),st=u(Q=>Q.drawn.forEach(N=>{let se=N.getObjectByName(yy),ue=N.getObjectByName(_y);se!==void 0&&(se.rotation.y=Q.facing),ue!==void 0&&(ue.position.y=Q.aloft)}),"pose"),je=u(Q=>Q.drawn.forEach(N=>{N.rotation.x=Q.through*Math.PI*3}),"tumble"),At=u(Q=>{let N=Yx(Q.through,Q.seed);Q.drawn.forEach(se=>se.children.forEach((ue,xe)=>{let $=N[xe];if($===void 0){ue.visible=!1;return}ue.position.set(...$.at),ue.scale.setScalar(Math.max($.size,1e-4)),ue.visible=$.size>0}))},"shapePuff"),Et=u((Q,N=!1,se=!1)=>{let ue=Bw(te,Q,N,se);return ue.traverse(xe=>{xe.castShadow=xe instanceof ct}),ue},"markerOf"),Pt=u(()=>{te.sweepDue&&te.sweep([...[...x.values(),...v.values()].flatMap(({original:Q})=>Q===void 0?[]:[Q]),...[...x.values()].flatMap(({idling:Q})=>Q===void 0?[]:[Q.original])])},"sweep"),ft=u(Q=>{let N=Q.unit?.model,se=N===void 0?null:te.rigOf(N);return se!==null&&se.clips.has("idle")?se:null},"idleRig"),Bt=u((Q,N,se)=>{let ue=Q.original;if(N===null){Q.idling=void 0,Q.make=()=>ue.clone();return}let xe=Et(Q.marker,!1,!0);Q.idling={rig:N,original:xe,phase:se},Q.make=h1(xe,!0)},"drawIdling"),xt=u(Q=>{Q.drawn.forEach(N=>{q.remove(N),hs(N)}),Q.drawn=Ye(Q,q,me)},"redraw"),Tt=u((Q,N)=>{let{idling:se}=Q;se!==void 0&&Q.drawn.forEach(ue=>Bp(ue,se.rig,"idle",N+se.phase,w))},"poseIdling");return{render:u(()=>i.render(s,o),"render"),resize:u((Q,N,se)=>{i.setPixelRatio(se),i.setSize(Q,N,!1),o.aspect=N>0?Q/N:1,o.updateProjectionMatrix()},"resize"),setChunk:u((Q,N,se)=>{let ue=`${Q},${N}`,xe=new wt;xe.setAttribute("position",new bt(se.positions,3)),xe.setAttribute("normal",new bt(se.normals,3)),xe.setAttribute("color",new bt(se.colours,3)),xe.setAttribute("surfacesA",new bt(se.surfacesA,4,!0)),xe.setAttribute("surfacesB",new bt(se.surfacesB,4,!0)),xe.setAttribute("shore",new bt(se.shore,1,!0)),xe.setIndex(new bt(se.indices,1)),xe.computeBoundingSphere();let $=f.get(ue);$!==void 0&&($.drawn.forEach(Se=>a.remove(Se)),$.geometry.dispose());let Re={geometry:xe,at:[se.u,0,se.v],make:u(()=>{let Se=new ct(xe,l);return Se.castShadow=!0,Se.receiveShadow=!0,Se},"make"),drawn:[]};Re.drawn=Ye(Re,a),f.set(ue,Re),X.setChunk(se)},"setChunk"),setOverlay:u((Q,N,se)=>{let ue=`${Q},${N}`,xe=d.get(ue);if(xe!==void 0&&(xe.drawn.forEach(Be=>a.remove(Be)),xe.geometry.dispose(),d.delete(ue)),se===null)return;let $=new wt;$.setAttribute("position",new bt(se.positions,3)),$.setAttribute("normal",new bt(se.normals,3)),$.setAttribute("color",new bt(se.colours,3)),$.computeBoundingSphere(),$.computeBoundingBox();let Re=$.boundingBox,Se={geometry:$,span:[se.v+(Re?.min.z??0),se.v+(Re?.max.z??0)],at:[se.u,0,se.v],make:u(()=>{let Be=new ct($,m);return Be.castShadow=!0,Be.receiveShadow=!0,Be},"make"),drawn:[]};Se.drawn=De(Se),d.set(ue,Se)},"setOverlay"),unitAt:u(Q=>(o.updateMatrixWorld(),Xw([...x].map(([N,{drawn:se}])=>[N,se]),o,Q)),"unitAt"),setMarker:u((Q,N,se)=>{let ue=x.get(Q);if(ue?.drawn.forEach(Re=>{q.remove(Re),hs(Re)}),ue?.idling!==void 0&&hs(ue.idling.original),ue?.faded!==void 0&&Fl(ue.faded),x.delete(Q),b.delete(Q),se===null)return;let xe=Et(se),$={at:N,marker:se,make:u(()=>xe.clone(),"make"),drawn:[],original:xe};ue?.idling!==void 0&&Bt($,ft(se),ue.idling.phase),$.drawn=Ye($,q,me),x.set(Q,$),$.idling!==void 0&&(b.add(Q),Tt($,pe)),Pt()},"setMarker"),idle:u((Q,N)=>{let{stand:se,start:ue,waiting:xe}=Vw(Q,b,$=>{let Re=x.get($);return Re!==void 0&&ft(Re.marker)!==null},$=>(x.get($)?.opacity??1)<1);return pe=N,se.forEach($=>{let Re=x.get($);hs(Re.idling.original),Bt(Re,null,0),xt(Re),b.delete($)}),ue.forEach($=>{let Re=x.get($);Bt(Re,ft(Re.marker),u1($)),xt(Re),b.add($)}),b.forEach($=>Tt(x.get($),N)),b.size>0||xe},"idle"),setWalker:u((Q,N)=>{let se=v.get(Q);if(se?.drawn.forEach(Se=>{q.remove(Se),hs(Se)}),se?.original!==void 0&&hs(se.original),se!==void 0&&Fl(se.faded),v.delete(Q),N===null)return;let ue=N.unit?.model,xe=ue===void 0?null:te.rigOf(ue),$=Et(N,!0,xe!==null),Re={at:se?.at??[0,0,0],facing:se?.facing??N.unit?.facing??0,aloft:se?.aloft??0,opacity:1,faded:new Map,make:h1($,xe!==null),drawn:[],original:$,rig:xe,posed:null};Re.drawn=Ye(Re,q,me),st(Re),v.set(Q,Re),Pt()},"setWalker"),placeWalker:u((Q,N,se,ue=0)=>{let xe=v.get(Q);xe!==void 0&&(xe.at=N,xe.facing=se,xe.aloft=ue,xe.drawn.forEach(($,Re)=>{let[Se,Be]=me[Re]??[0,0];$.position.set(N[0]+Se,N[1],N[2]+Be)}),st(xe))},"placeWalker"),poseWalker:u((Q,N,se)=>{let ue=v.get(Q);ue===void 0||ue.rig===null||(ue.posed={role:N,seconds:se},ue.drawn.forEach(xe=>Bp(xe,ue.rig,N,se,w)))},"poseWalker"),rigFacts:u(Q=>{let{unit:N}=Q,se=N?.model===void 0?null:te.rigOf(N.model);return N===null||se===null?null:c1(se,Fw(N))},"rigFacts"),jointAt:u((Q,N,se)=>{let ue=v.get(Q);return ue===void 0||ue.rig===null?null:LL(ue.drawn[0],N,se,me[0]??[0,0])},"jointAt"),shot:u((Q,N,se=0)=>{let ue=S.get(Q);if(N===null){ue?.drawn.forEach($=>q.remove($)),S.delete(Q);return}let xe=ue??{at:N,through:se,make:u(()=>{let $=new Vt,Re=new ct(O,F);return Re.position.y=.02,$.add(new ct(L,I),Re),$},"make"),drawn:[]};ue===void 0&&(xe.drawn=Ye(xe,q,me),S.set(Q,xe)),xe.at=N,xe.through=se,xe.drawn.forEach(($,Re)=>{let[Se,Be]=me[Re]??[0,0];$.position.set(N[0]+Se,N[1],N[2]+Be)}),je(xe)},"shot"),fadeMarker:u((Q,N)=>{let se=x.get(Q),ue=Math.min(1,Math.max(0,N));if(!(se===void 0||ue===(se.opacity??1))){if(se.opacity=ue,se.faded??=new Map,ue===1){kw(rt(se.drawn),se.faded);return}Vu(rt(se.drawn),ue,se.faded)}},"fadeMarker"),wake:u((Q,N,se=[])=>{let ue=W.get(Q);if(N===null){ue?.drawn.forEach(Re=>q.remove(Re)),ue?.shape.dispose(),W.delete(Q);return}let xe=new wt;xe.setAttribute("position",new bt(Float32Array.from(se),3));let $=ue??{at:N,shape:xe,make:u(()=>new ct($.shape,U),"make"),drawn:[]};ue===void 0?($.drawn=Ye($,q,me),W.set(Q,$)):(ue.shape.dispose(),ue.shape=xe,ue.drawn.forEach(Re=>{Re.geometry=xe})),$.at=N,$.drawn.forEach((Re,Se)=>{let[Be,D]=me[Se]??[0,0];Re.position.set(N[0]+Be,N[1],N[2]+D)})},"wake"),puff:u((Q,N,se=0)=>{let ue=M.get(Q);if(N===null){ue?.drawn.forEach(Re=>q.remove(Re)),M.delete(Q);return}let xe=Number(Q.replace(/\D/g,""))||0,$=ue??{at:N,through:se,seed:xe,make:u(()=>{let Re=new Vt;return Yx(0,xe).forEach(({shade:Se})=>Re.add(new ct(R,y[Se]))),Re},"make"),drawn:[]};ue===void 0&&($.drawn=Ye($,q,me),M.set(Q,$)),$.at=N,$.through=se,$.drawn.forEach((Re,Se)=>{let[Be,D]=me[Se]??[0,0];Re.position.set(N[0]+Be,N[1],N[2]+D)}),At($)},"puff"),fadeWalker:u((Q,N)=>{let se=v.get(Q),ue=Math.min(1,Math.max(0,N));se===void 0||ue===se.opacity||(se.opacity=ue,Vu(se.drawn,ue,se.faded))},"fadeWalker"),setYields:u(Q=>{de?.drawn.forEach(N=>z.remove(N)),de=null,Z.set(Q)!==null&&(de={at:[0,0,0],make:u(()=>Z.make(),"make"),drawn:[]},de.drawn=Ye(de,z))},"setYields"),view:u((Q,N,se=e)=>{let[ue,xe]=Q.focus,[$,Re,Se]=zl(Q,N),Be=NL(Q,se),{near:D,far:T}=Be;o.position.set($,Re,Se),o.lookAt(ue,N,xe),o.far=T*1.2,o.near=Math.max(.1,Q.distance*.02),o.updateProjectionMatrix(),ie.near=D,ie.far=T;let Y=Q.distance*2.2,fe=h.shadow.camera;h.position.set(ue+30,N+40,xe+20),h.target.position.set(ue,N,xe),fe.left=-Y,fe.right=Y,fe.top=Y,fe.bottom=-Y,fe.near=Math.max(.5,f1-Y*1.6),fe.far=f1+Y*1.6,fe.updateProjectionMatrix(),X.follow(ue,xe,T*2.2,h.position.clone().sub(h.target.position)),j.follow(ue,xe,T*2.2),X.pastThePoles(se.v!==null),j.pastThePoles(se.v!==null),m.clippingPlanes=se.v===null?_:null,ge=se.v===null;let le=Be.land,ve=`${le.join(";")}${ge?" stopped":""}`,we=Be.markers,ae=we.join(";");ve!==ne&&(ye=le,ne=ve,f.forEach(ee=>{ee.drawn.forEach(be=>a.remove(be)),ee.drawn=Ye(ee,a)}),d.forEach(ee=>{ee.drawn.forEach(be=>a.remove(be)),ee.drawn=De(ee)}),de!==null&&(de.drawn.forEach(ee=>z.remove(ee)),de.drawn=Ye(de,z))),Z.lean(Q.pitch),ae!==he&&(me=we,he=ae,[...x.values(),...v.values(),...M.values(),...W.values(),...S.values()].forEach(ee=>{ee.drawn.forEach(be=>{q.remove(be),hs(be)}),ee.drawn=Ye(ee,q,me)}),v.forEach(st),v.forEach(({drawn:ee,rig:be,posed:B})=>{be!==null&&B!==null&&ee.forEach(ce=>Bp(ce,be,B.role,B.seconds,w))}),b.forEach(ee=>{let be=x.get(ee);be!==void 0&&Tt(be,pe)}),M.forEach(At),S.forEach(je),v.forEach(ee=>{ee.opacity<1&&Vu(ee.drawn,ee.opacity,ee.faded)}),x.forEach(ee=>{ee.faded!==void 0&&(ee.opacity??1)<1&&Vu(rt(ee.drawn),ee.opacity??1,ee.faded)}))},"view"),loadModels:u(async(Q,N)=>{await vw(Q,(se,ue,xe)=>{if(Fe){ue.parts.forEach(({geometry:Re,map:Se})=>{Re.dispose(),Se?.dispose()});return}let $=Rp(Q,se);te.addModel($,ue),N($,xe)},(se,ue)=>console.warn(`The 3D map's model ${Rp(Q,se)}:`,ue),(se,ue,xe)=>{let $=Rp(Q,se);Fe||(te.addRig($,ue),te.rigOf($)===ue&&N($,xe))})},"loadModels"),stats:u(()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries}),"stats"),dispose:u(()=>{Fe=!0,f.forEach(({geometry:Q})=>Q.dispose()),f.clear(),d.forEach(({geometry:Q})=>Q.dispose()),d.clear(),m.dispose(),x.forEach(({faded:Q,drawn:N,idling:se})=>{Q!==void 0&&Fl(Q),[...N,...se===void 0?[]:[se.original]].forEach(hs)}),x.clear(),b.clear(),v.forEach(({faded:Q,drawn:N,original:se})=>{Fl(Q),[...N,...se===void 0?[]:[se]].forEach(hs)}),v.clear(),M.clear(),W.forEach(({shape:Q})=>Q.dispose()),W.clear(),U.dispose(),R.dispose(),y.forEach(Q=>Q.dispose()),S.clear(),L.dispose(),I.dispose(),O.dispose(),F.dispose(),te.dispose(),Z.dispose(),X.dispose(),j.dispose(),l.dispose(),c.dispose(),i.dispose()},"dispose")}},"createStage");var UL=.25,FL=.06,Ny=.05,zp=500,m1=u((r,e,t)=>r.flatMap(({at:n,joint:i},s)=>Array.from({length:Math.max(1,e)},(o,a)=>({figure:a,shot:s,joint:i,leaves:n+a*t}))).sort((n,i)=>n.leaves-i.leaves),"shotTimes"),g1=u((r,e,t,n)=>{let i=e[0]-r[0],s=e[2]-r[2],o=Math.hypot(i,s),a=(t-(Math.max(1,n)-1)/2)*FL;return o===0?[e[0],e[1],e[2]]:[e[0]-s/o*a,e[1],e[2]+i/o*a]},"landsAt"),x1=u((r,e,t)=>{let n=Math.min(1,Math.max(0,t)),i=UL*Math.hypot(e[0]-r[0],e[2]-r[2])*4*n*(1-n);return[r[0]+(e[0]-r[0])*n,r[1]+(e[1]-r[1])*n+i,r[2]+(e[2]-r[2])*n]},"shotAt");var ds=1/Math.sqrt(3),b1=1.5*ds,BL=u((r,e)=>{let t=-r-e,n=Math.round(r),i=Math.round(e),s=Math.round(t),o=Math.abs(n-r),a=Math.abs(i-e),l=Math.abs(s-t);return o>a&&o>l?n=-i-s:a>l&&(i=-n-s),[n,i]},"roundAxial"),kL=u(({height:r,width:e,wrapsY:t})=>{let n=u((i,s)=>[i+.5+(s&1)*.5,ds+s*b1],"centre");return{topologyId:"hex-odd-r",centre:n,outline:u((i,s)=>{let[o,a]=n(i,s);return[[o,a-ds],[o+.5,a-ds/2],[o+.5,a+ds/2],[o,a+ds],[o-.5,a+ds/2],[o-.5,a-ds/2]]},"outline"),tileAt:u((i,s)=>{let o=i-.5,a=s-ds,[l,c]=BL(o-a*Math.sqrt(3)/3,a*2*Math.sqrt(3)/3);return[l+(c-(c&1))/2,c]},"tileAt"),period:u(()=>({u:e,v:t?r*b1:null}),"period")}},"hexOddRLayout"),y1=kL;var zL=u(({height:r,width:e,wrapsY:t})=>({topologyId:"square",centre:u((n,i)=>[n+.5,i+.5],"centre"),outline:u((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:u((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:u(()=>({u:e,v:t?r:null}),"period")}),"squareLayout"),_1=zL;var vr=Math.SQRT2/2,GL=u(({height:r,width:e,wrapsY:t})=>{let n=u((i,s)=>[(2*i+(s&1)+1)*vr,(s+1)*vr],"centre");return{topologyId:"staggered-iso",centre:n,outline:u((i,s)=>{let[o,a]=n(i,s);return[[o,a-vr],[o+vr,a],[o,a+vr],[o-vr,a]]},"outline"),tileAt:u((i,s)=>{let o=i/vr,a=s/vr,l=Math.floor((o+a)/2-1+.5),c=Math.floor((a-o)/2+.5),h=l+c;return[Math.floor((l-c)/2),h]},"tileAt"),period:u(()=>({u:e*2*vr,v:t?r*vr:null}),"period")}},"staggeredIsoLayout"),v1=GL;var M1={square:_1,"staggered-iso":v1,"hex-odd-r":y1},VL=u(r=>{if(!Object.prototype.hasOwnProperty.call(M1,r.topologyId))throw new Error(`No ground layout for the ${r.topologyId} grid.`);if(r.wrapsY&&r.topologyId!=="square"&&r.height%2!==0)throw new Error(`The ${r.topologyId} grid can't wrap over the poles with an odd number of rows (${r.height}).`);return M1[r.topologyId](r)},"groundLayoutFor"),S1=VL;var qu=u(r=>{let e=r/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Gp=.65,Dy=u(r=>{let e=u(t=>{let n=parseInt(r.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),fs=.22,Vp=.12,Oy={low:.2,high:.5},w1=u((r,e,t,n,i,s,o,a,l)=>{let c=s-t,h=o-n,f=c*c+h*h,d=f===0?0:Math.max(0,Math.min(1,((r-t)*c+(e-n)*h)/f)),m=qu(Math.hypot(r-t-c*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(i+(a-i)*(1-g*g*g)+l)},"halfRidge"),Yu=u((r,e,t,n)=>{let i=Math.imul(r,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),HL=u((r,e,t)=>({u:(Yu(r,e,t,1)*2-1)*fs,v:(Yu(r,e,t,2)*2-1)*fs,scale:.75+Yu(r,e,t,3)*.5}),"peakOf"),WL=u(({layout:r,ranges:e=!0,seed:t=1,source:n})=>{let{width:i,height:s,wrapsY:o}=n,a=r.period(),l=si([yr({cell:.7,period:a,seed:t}),yr({cell:.35,period:a,seed:t+1}),yr({cell:.17,period:a,seed:t+2})]),c=si([yr({cell:.45,period:a,seed:t+3}),yr({cell:.22,period:a,seed:t+4})]),h=u((z,Z)=>1-2*Math.abs(c(z,Z)),"ridged"),f=yr({cell:.8,period:a,seed:t+5}),d=yr({cell:.8,period:a,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],_=[],x=[],b=[],v=[],w=u((z,Z)=>{let X=(z%i+i)%i;return!o&&(Z<0||Z>=s)?null:(Z%s+s)%s*i+X},"index"),M=u(z=>{let Z=new Array(i*s).fill(1/0),X=[];z.forEach((j,ie)=>{j&&(Z[ie]=0,X.push([ie%i,Math.floor(ie/i)]))});for(let[j,ie]of X){let pe=Z[ie*i+j]??1/0;pe>=br.reach||n.neighbours(j,ie).forEach(([ye,ne])=>{let me=ne*i+ye;(Z[me]??1/0)>pe+1&&(Z[me]=pe+1,X.push([ye,ne]))})}return Z},"distancesFromLand"),R=u((z,Z)=>{let X=n.terrainAt(z,Z);return`${X}${X!=="Unknown"&&n.waterAt(z,Z)?" water":""}`},"readAs"),E=u(z=>{if(z!==void 0&&_.length>0&&z.every(([he,ge])=>{let de=w(he,ge);return de===null||_[de]===R(he,ge)}))return[];let Z=[],X=[],j=[];for(let he=0;he<s;he++)for(let ge=0;ge<i;ge++){let de=n.terrainAt(ge,he);Z.push(de),X.push(de!=="Unknown"&&n.waterAt(ge,he)),j.push(Jo(de))}let ie=M(Z.map((he,ge)=>he!=="Unknown"&&!X[ge])),pe=Z.map((he,ge)=>`${he}${X[ge]?" water":""}`),ye=[];pe.forEach((he,ge)=>{_[ge]!==he&&ye.push([ge%i,Math.floor(ge/i)])}),_=pe,g=j.map((he,ge)=>{let de=he===pp,Fe=ge%i,Ye=Math.floor(ge/i),De=HL(Fe,Ye,t);if(!X[ge])return{relief:he.relief,colour:Dy(he.colour),surface:Yn.indexOf(he.surface),water:!1,unknown:de,peak:De};let rt=Math.min(ie[ge]??1/0,br.reach),st=br.shore+(br.deep-br.shore)*Math.max(0,rt-1)/Math.max(1,br.reach-1);return{relief:{...he.relief,base:st},colour:Dy(he.colour),surface:Yn.indexOf("sand"),water:!0,unknown:de,peak:De}});let ne=v,me=new Map(ye.map(([he,ge])=>[`${he},${ge}`,[he,ge]]));return v=g.map(({relief:he,unknown:ge},de)=>!ge&&!X[de]&&he.shape==="peaked"),ye.some(([he,ge])=>{let de=ge*i+he;return v[de]===!0||ne[de]===!0})&&([x,b]=W()),ye.forEach(([he,ge])=>{let de=ge*i+he;v[de]!==!0&&ne[de]!==!0||n.neighbours(he,ge).forEach(([Fe,Ye])=>{let De=w(Fe,Ye);De!==null&&v[De]===!0&&me.set(`${Fe},${Ye}`,[Fe,Ye])})}),[...me.values()]},"refresh"),y=u(z=>{let[Z,X]=r.centre(0,z);return Math.max(...r.outline(0,z).map(([j,ie])=>Math.hypot(j-Z,ie-X)))},"cornerOf"),S=u((z,Z)=>{let[X,j]=r.centre(0,z),ie=[];for(let pe=-8;pe<=8;pe++)for(let ye=-6;ye<=6;ye++){let[ne,me]=r.centre(ye,z+pe);Math.hypot(ne-X,me-j)<Z+1e-9&&ie.push([ye,pe])}return ie},"offsetsWithin"),L=u((z,Z,X,j)=>{if(i>=6&&(!o||s>=6)){let he=u((Fe,Ye)=>{let De=(Fe%Ye+Ye)%Ye;return De*2<Ye?De:De-Ye},"nearest"),ge=he(X-z,i),de=o?he(j-Z,s):j-Z;return ge===0&&de===0?[]:[[ge,de]]}let ie=u((he,ge)=>{let de=(he%ge+ge)%ge;return de===0?[0]:[de,de-ge]},"copies"),[pe,ye]=r.centre(z,Z),ne=ie(X-z,i).flatMap(he=>(o?ie(j-Z,s):[j-Z]).flatMap(ge=>{if(he===0&&ge===0)return[];let[de,Fe]=r.centre(z+he,Z+ge);return[[he,ge,Math.hypot(de-pe,Fe-ye)]]})),me=Math.min(...ne.map(([,,he])=>he));return ne.filter(([,,he])=>he<=me+1e-9).map(([he,ge])=>[he,ge])},"stepsTo"),I=Math.max(...[0,1].flatMap(z=>{let[Z,X]=r.centre(0,z);return n.neighbours(0,z).flatMap(([j,ie])=>L(0,z,j,ie).map(([pe,ye])=>{let[ne,me]=r.centre(pe,z+ye);return Math.hypot(ne-Z,me-X)}))}),1),O=[0,1].map(z=>{let[Z,X]=r.centre(0,z);return S(z,I+fs*Math.SQRT2+Vp+1.2+Math.max(y(0),y(1))).flatMap(([j,ie])=>{let[pe,ye]=r.centre(j,z+ie);return[j,ie,pe-Z,ye-X]})}),F=u((z,Z,X,j,ie,pe)=>{let ye=ie-X,ne=pe-j,me=ye*ye+ne*ne,he=me===0?0:Math.max(0,Math.min(1,((z-X)*ye+(Z-j)*ne)/me));return Math.hypot(z-X-ye*he,Z-j-ne*he)},"toSegment"),W=u(()=>{let z=g.map(()=>[]),Z=g.map(()=>[]),X=Math.max(y(0),y(1));return e?(g.forEach((j,ie)=>{if(v[ie]!==!0)return;let pe=ie%i,ye=Math.floor(ie/i),[ne,me]=r.centre(pe,ye),he=new Map;n.neighbours(pe,ye).forEach(([ge,de])=>{let Fe=w(ge,de);Fe!==null&&v[Fe]===!0&&L(pe,ye,ge,de).forEach(([Ye,De])=>he.set(`${Ye},${De}`,[Ye,De,Fe]))}),he.forEach(([ge,de,Fe])=>{let Ye=g[Fe];if(Ye===void 0||de<0||de===0&&ge<0)return;let[De,rt]=r.centre(pe+ge,ye+de),{peak:st,relief:je}=j,{peak:At,relief:Et}=Ye,Pt=st.u,ft=st.v,Bt=De-ne+At.u,xt=rt-me+At.v,Tt=je.base*Gp*st.scale,Xt=Et.base*Gp*At.scale,Q=Math.hypot(Bt-Pt,xt-ft)||1,N=16+(de+2)*5+(ge+2),se=(Yu(pe,ye,t,N)*2-1)*Vp,ue=Oy.low+(Oy.high-Oy.low)*Yu(pe,ye,t,N+32),xe=(Pt+Bt)/2-(xt-ft)/Q*se,$=(ft+xt)/2+(Bt-Pt)/Q*se,Re=Math.max(Math.hypot(Pt-xe,ft-$),Math.hypot(Bt-xe,xt-$))+1.2,Se={au:Pt,av:ft,ah:Tt,mu:xe,mv:$,mh:ue*Math.min(Tt,Xt),bu:Bt,bv:xt,bh:Xt,roughness:(je.roughness+Et.roughness)/2,cu:xe,cv:$,reach:Re*Re},Be=(Math.sqrt(Se.reach)+X)**2,D=O[ye&1]??[];for(let T=0;T<D.length;T+=4){let Y=D[T+2],fe=D[T+3];if((Y-xe)**2+(fe-$)**2>=Be||Math.min(F(Y,fe,Pt,ft,xe,$),F(Y,fe,xe,$,Bt,xt))>=1.2+X)continue;let le=w(pe+D[T],ye+D[T+1]);le!==null&&(z[le]?.push(Se),Z[le]?.push(Y,fe))}})}),[z,Z]):[z,Z]},"ranges"),U=u(z=>{let[Z,X]=r.centre(0,z),j=Math.max(...r.outline(0,z).map(([pe,ye])=>Math.hypot(pe-Z,ye-X))),ie=[];for(let pe=-6;pe<=6;pe++)for(let ye=-4;ye<=4;ye++){let[ne,me]=r.centre(ye,z+pe);Math.hypot(ne-Z,me-X)<1.2+j+fs*Math.SQRT2+1e-9&&ie.push([ye,pe])}return ie},"offsetsFor"),q=[U(0),U(1)],te=u((z,Z)=>{let[X,j]=r.tileAt(z,Z),ie=w(X,j),pe=ie===null?null:g[ie]??null;if(pe===null||pe.unknown)return{height:0,colour:Dy(pp.colour),surfaces:Yn.map(()=>0),shore:0,unseen:!0};let ye=null,ne=null,me=u(Tt=>Tt==="rolling"?ye??=l(z,Z):ne??=h(z,Z),"noiseHere"),he=0,ge=0,de=0,Fe=0,Ye=Yn.map(()=>0),De=0,rt=0,st=0,je=0,At=0,Et=z+fs*f(z,Z),Pt=Z+fs*d(z,Z);(q[j&1]??[]).forEach(([Tt,Xt])=>{let Q=X+Tt,N=j+Xt,se=w(Q,N);if(se===null)return;let ue=g[se];if(ue===void 0)return;let[xe,$]=r.centre(Q,N),{relief:Re,colour:Se,peak:Be,surface:D}=ue,T=qu(Math.hypot(z-xe,Z-$)),Y=Re.shape==="peaked"?qu(Math.hypot(z-xe-Be.u,Z-$-Be.v)):0,fe=qu(Math.hypot(Et-xe,Pt-$))**3;if(T>0){let le=m[Re.shape],ve=le===null?0:Re.roughness*me(le);Re.shape==="peaked"?ge+=T*(Re.base*(1-Gp)+ve*.5):ge+=T*(Re.base+ve),he+=T}if(Y>0){let le=Re.roughness*me("ridged");de+=Y*Y*(Re.base*Gp*Be.scale+le*.5)}Fe+=fe,ue.unknown||(Ye[D]=(Ye[D]??0)+fe,De+=fe,rt+=ue.water?fe:0),st+=fe*Se[0],je+=fe*Se[1],At+=fe*Se[2]});let ft=ie===null?[]:x[ie]??[],Bt=ie===null?[]:b[ie]??[],xt=de;if(ft.length>0){let[Tt,Xt]=r.centre(X,j);ft.forEach((Q,N)=>{let se=z-Tt+(Bt[N*2]??0),ue=Z-Xt+(Bt[N*2+1]??0);if((se-Q.cu)**2+(ue-Q.cv)**2>=Q.reach)return;let xe=Q.roughness*me("ridged")*.5;xt=Math.max(xt,w1(se,ue,Q.au,Q.av,Q.ah,Q.mu,Q.mv,Q.mh,xe),w1(se,ue,Q.bu,Q.bv,Q.bh,Q.mu,Q.mv,Q.mh,xe))})}return{height:(he>0?ge/he:0)+xt,colour:Fe>0?[st/Fe,je/Fe,At/Fe]:pe.colour,surfaces:De>0?Ye.map(Tt=>Tt/De):Yn.map((Tt,Xt)=>Xt===pe.surface?1:0),shore:De>0?rt/De:pe.water?1:0,unseen:!1}},"sample");return E(),{sample:te,height:u((z,Z)=>te(z,Z).height,"height"),refresh:E}},"createRelief"),E1=WL;var T1=u((r,e,{size:t=16,perUnit:n=8}={})=>{let{u:i,v:s}=r.period(),o=s??Math.max(...r.outline(0,e-1).map(([,f])=>f),...r.outline(1,e-1).map(([,f])=>f)),a=Math.max(1,Math.round(i/t)),l=Math.max(1,Math.round(o/t)),c=Math.max(2,Math.round(i/a*n)),h=Math.max(2,Math.round(o/l*n));return{chunksU:a,chunksV:l,stepsU:c,stepsV:h,spacingU:i/a/c,spacingV:o/l/h}},"chunkGrid"),A1=u((r,e,t,n)=>{let{stepsU:i,stepsV:s,spacingU:o,spacingV:a}=r,l=t*i,c=n*s,h=u((L,I)=>[L*o,I*a],"at"),f=i+3,d=new Float64Array(f*(s+3)),m=(i+1)*(s+1),g=new Float32Array(m*3),_=new Uint8Array(m*4),x=new Uint8Array(m*4),b=new Uint8Array(m),v=new Float32Array(m);for(let L=-1;L<=s+1;L++)for(let I=-1;I<=i+1;I++){let O=e.sample(...h(l+I,c+L)),{height:F,colour:W}=O;if(d[(L+1)*f+(I+1)]=F,I>=0&&I<=i&&L>=0&&L<=s){let U=L*(i+1)+I;g.set(W,U*3),O.surfaces.forEach((q,te)=>{(te<4?_:x)[U*4+te%4]=Math.round(q*255)}),b[U]=Math.round(O.shore*255),v[U]=O.unseen?1:0}}let w=u((L,I)=>d[(I+1)*f+(L+1)]??0,"height"),M=new Float32Array(m*3),R=new Float32Array(m*3),[E,y]=h(l,c);for(let L=0;L<=s;L++)for(let I=0;I<=i;I++){let O=L*(i+1)+I,[F,W]=h(l+I,c+L),U=(w(I+1,L)-w(I-1,L))/(2*o),q=(w(I,L+1)-w(I,L-1))/(2*a),te=Math.hypot(U,1,q);M[O*3]=F-E,M[O*3+1]=w(I,L),M[O*3+2]=W-y,R[O*3]=-U/te,R[O*3+1]=1/te,R[O*3+2]=-q/te}let S=new Uint32Array(i*s*6);for(let L=0;L<s;L++)for(let I=0;I<i;I++){let O=L*(i+1)+I,F=O+1,W=O+i+1,U=W+1,q=(L*i+I)*6;S.set([O,W,F,F,W,U],q)}return{u:E,v:y,positions:M,normals:R,colours:g,surfacesA:_,surfacesB:x,shore:b,unseen:v,indices:S}},"buildChunk"),Uy=u((r,e,t,n)=>{let i=r.stepsU*r.spacingU,s=r.stepsV*r.spacingV,o=e.period().v!==null,a=new Set;return t.forEach(([l,c])=>{let[h,f]=e.centre(l,c);for(let d=Math.floor((h-n)/i);d<=Math.floor((h+n)/i);d++)for(let m=Math.floor((f-n)/s);m<=Math.floor((f+n)/s);m++){if(!o&&(m<0||m>=r.chunksV))continue;let g=(d%r.chunksU+r.chunksU)%r.chunksU,_=o?(m%r.chunksV+r.chunksV)%r.chunksV:m;a.add(`${g},${_}`)}}),[...a].map(l=>l.split(",").map(Number))},"chunksNear");var ui=u((r,e,t,n,i)=>({kind:r,count:e,size:t,colour:n,detail:i}),"plant"),R1={Forest:{plants:[ui("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[ui("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),ui("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[ui("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),ui("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[ui("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[ui("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[ui("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[ui("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),ui("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[ui("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[ui("rock",2,[.7,1.1],"#a8936a","#a8936a"),ui("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Wl=u(r=>Object.prototype.hasOwnProperty.call(R1,r)?R1[r]:null,"growthOf");var C1=["Ocean"],XL=["Mountains"],qL=["Mine","Fortress","Airbase"],YL=["River"],Rn=u((r,e)=>(r.improvements??[]).some(({_:t})=>t===e),"has"),$L=["Irrigation","Farmland","Fortress","Airbase"],P1=u(r=>r.city||$L.some(e=>Rn(r,e))?null:Wl(r.terrain?._??"Unknown")?.canopy??null,"woodsOf"),KL=u((r,e)=>{if(r.city){let d=r.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:r.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:$S(Qx(String(d.id??d.name??"")),d.growth?.size??1,e.filter(({tile:m})=>Rn(m,"Road")&&(Rn(r,"Road")||Rn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>C1.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=Rn(r,"Road"),n=Rn(r,"Railroad"),i=t?e.filter(d=>Rn(d.tile,"Road")).map(({offset:d})=>d):[],s=t?e.filter(d=>!!d.tile.city||Rn(d.tile,"Railroad")).map(({offset:d})=>d):[],o=u((d,m)=>d[0]===m[0]&&d[1]===m[1],"same"),a=i.length===0&&s.length===0,l={road:t?{joins:i.filter(d=>!n||!s.some(m=>o(m,d))),alone:a&&!n}:null,railroad:t&&n?{joins:s,alone:a}:null,irrigation:Rn(r,"Farmland")?"farmland":Rn(r,"Irrigation")?"irrigation":null,mine:Rn(r,"Mine"),fortress:Rn(r,"Fortress"),airbase:Rn(r,"Airbase"),pollution:Rn(r,"Pollution"),specials:(r.terrain?.features??[]).map(({_:d})=>d).filter(d=>!YL.includes(d)).map(d=>[r.terrain._,d]),hut:r.goodyHut!==null&&r.goodyHut!==void 0,terrain:r.terrain?._??"Unknown",vegetation:Wl(r.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},c=P1(r),h=r.terrain?._??"Unknown";return r.isWater!==!0&&!C1.includes(h)&&h!=="Unknown"&&!XL.includes(h)&&!qL.some(d=>Rn(r,d))&&(l.suburbs=e.flatMap(({offset:d,tile:{city:m}})=>{let g=m?JS(m.growth?.size??1):0;return m&&g>0?[{seed:Qx(String(m.id??m.name??"")),steps:g,city:d}]:[]}).sort((d,m)=>d.seed-m.seed||d.city[0]-m.city[0]||d.city[1]-m.city[1])),l.suburbs.length>0&&(l.beside=e.filter(({tile:{city:d}})=>!!d).map(({offset:d})=>d)),c!==null&&(l.woods=e.filter(d=>P1(d.tile)===c).map(({offset:d})=>d)),(c!==null||l.suburbs.length>0)&&(l.paths=e.filter(d=>!!d.tile.city||Rn(d.tile,"Road")).map(({offset:d})=>d)),l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation&&l.suburbs.length===0?null:l},"overlayFor"),I1=KL;var zt=u((r,e,t,n)=>({shape:r,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),L1={Coal:zt("rocks","#26262a",4),Gold:zt("rocks","#d8b13a",3),Gems:zt("rocks","#59c2d6",4,"#b05ad0"),Iron:zt("rocks","#8a5a44",4),Wheat:zt("crop","#d9b84a",5,"#a88a2c"),Spice:zt("crop","#c0452e",4,"#5d7a2a"),Wine:zt("crop","#6a2c5e",4,"#5d7a2a"),Silk:zt("crop","#e9e2cf",3,"#4f7a34"),Fruit:zt("crop","#e08a2a",4,"#3f7a2a"),Horse:zt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:zt("animal","#4a3424",3,"#2a1e16"),Game:zt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":zt("animal","#8f7e66",2,"#e8e2d6"),Furs:zt("animal","#b0602a",2,"#f0e8dc"),Ivory:zt("animal","#8a8580",1,"#f2ead8"),Seal:zt("animal","#6e7072",2,"#4a4c4e"),Pheasant:zt("bird","#8a3a22",2,"#3d6a3a"),Fish:zt("fish","#b8c4cc",5),Whales:zt("whale","#3a4048",1),Oil:zt("derrick","#222224",1,"#121214"),Oasis:zt("oasis","#3f7a32",3,"#3f86a8"),Peat:zt("peat","#4a3624",4),Shield:zt("logs","#7a5532",4,"#c9a47a")},ZL=zt("cairn","#9a9690",5),N1=u((r,e)=>{let t=u(n=>Object.prototype.hasOwnProperty.call(L1,n)?L1[n]:void 0,"own");return t(`${r}:${e}`)??t(e)??ZL},"specialLook");var Hy=u(()=>({positions:[],normals:[],colours:[]}),"soup"),Bn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},ql=.06,D1="#8c7a58",O1="#5f5953",JL="#a9abae",jL="#5e432b",QL="#4f87b0",eN="#7da33f",tN=["#c2b448","#8fae3e"],U1="#9d968a",nN="#4a4c50",zy="#6b4a2e",iN="#7a6a58",rN="#b89a5a",sN="#c9b48e",F1="#34322a",Fn=new cr(1,1,1),Yl=new _i(.5,.5,1,8),Wy=new es(.5,1,8),q1=new es(.5,1,4),Xl=new Gs(.5,8,6),$u=new _i(.5,.5,1,4,1,!0),Ku=new es(.5,1,5,1,!0),Hp=new Gs(.5,5,3),Fy={mine:[3,.72],hut:[11,.64],special:u(r=>[r+1,.72],"special")},oN=.05,Y1=.22,B1=72,wi=u((r,e)=>{let t=Math.imul(r^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Xy=.05,k1=new Map,Wp=u(r=>{let e=k1.get(r);if(e===void 0){let{r:t,g:n,b:i}=new Pe(r);e=[t,n,i],k1.set(r,e)}return e},"colourOf"),z1=new WeakMap,aN=u(r=>{let e=z1.get(r);if(e===void 0){let t=r.index===null?r:r.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},z1.set(r,e),t!==r&&t.dispose()}return e},"trianglesOf"),lN=new Ke,cN=new Je,uN=new H,hN=new $t,dN=new ti,fN=new H,Nt,$1,qt,Ky=class Ky{constructor(e,t){G(this,Nt);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let i=this.place.heightAt(e,t);return n?Math.max(0,i):i}strip(e,t,n,i,s){let o=Wp(i),a=Math.hypot(t[0]-e[0],t[1]-e[1]);if(a===0)return;let l=Math.max(1,Math.ceil(a/ql)),c=Math.max(1,Math.ceil(n/ql)),h=[-(t[1]-e[1])/a*n,(t[0]-e[0])/a*n],f=u((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<l;d++)for(let m=0;m<c;m++){let[g,_]=f(d/l,(m+1)/c),[x,b]=f((d+1)/l,(m+1)/c),[v,w]=f(d/l,m/c),[M,R]=f((d+1)/l,m/c);A(this,Nt,qt).call(this,g,_,s,o),A(this,Nt,qt).call(this,x,b,s,o),A(this,Nt,qt).call(this,v,w,s,o),A(this,Nt,qt).call(this,x,b,s,o),A(this,Nt,qt).call(this,M,R,s,o),A(this,Nt,qt).call(this,v,w,s,o)}}ribbon(e,t,n,i,s){let o=Wp(n),a=e.map((l,c)=>{let h=e[c-1]??l,f=e[c+1]??l,[d,m]=s?.[c]??[f[0]-h[0],f[1]-h[1]],g=Math.hypot(d,m);return g===0?[0,0]:[-m/g*t,d/g*t]});for(let l=0;l+1<e.length;l++){let c=e[l],h=e[l+1],f=a[l],d=a[l+1],m=Math.hypot(h[0]-c[0],h[1]-c[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/ql)),_=Math.max(1,Math.ceil(t/ql)),x=u((b,v)=>[c[0]+(h[0]-c[0])*b+(f[0]+(d[0]-f[0])*b)*(v-.5),c[1]+(h[1]-c[1])*b+(f[1]+(d[1]-f[1])*b)*(v-.5)],"at");for(let b=0;b<g;b++)for(let v=0;v<_;v++){let[w,M]=x(b/g,(v+1)/_),[R,E]=x((b+1)/g,(v+1)/_),[y,S]=x(b/g,v/_),[L,I]=x((b+1)/g,v/_);A(this,Nt,qt).call(this,w,M,i,o),A(this,Nt,qt).call(this,R,E,i,o),A(this,Nt,qt).call(this,y,S,i,o),A(this,Nt,qt).call(this,R,E,i,o),A(this,Nt,qt).call(this,L,I,i,o),A(this,Nt,qt).call(this,y,S,i,o)}}}disc(e,t,n,i,s=12){let o=Wp(n),[a,l]=e,c=Math.max(1,Math.ceil(t/ql)),h=u((f,d)=>{let m=d/s*Math.PI*2,g=f/c*t;return[a+Math.cos(m)*g,l+Math.sin(m)*g]},"at");for(let f=0;f<c;f++)for(let d=0;d<s;d++){let m=h(f+1,d),g=h(f+1,d+1);if(f===0)A(this,Nt,qt).call(this,a,l,i,o),A(this,Nt,qt).call(this,...g,i,o),A(this,Nt,qt).call(this,...m,i,o);else{let _=h(f,d),x=h(f,d+1);A(this,Nt,qt).call(this,..._,i,o),A(this,Nt,qt).call(this,...x,i,o),A(this,Nt,qt).call(this,...m,i,o),A(this,Nt,qt).call(this,...x,i,o),A(this,Nt,qt).call(this,...g,i,o),A(this,Nt,qt).call(this,...m,i,o)}}}solid(e,t,n,i,s=[0,0,0]){let{positions:o,normals:a}=aN(e),l=lN.compose(uN.set(...t),hN.setFromEuler(dN.set(...s)),fN.set(...n)),c=l.elements,h=cN.getNormalMatrix(l).elements,[f,d,m]=Wp(i),g=this.soup;for(let _=0;_<o.length;_+=3){let x=o[_],b=o[_+1],v=o[_+2],w=a[_],M=a[_+1],R=a[_+2],E=h[0]*w+h[3]*M+h[6]*R,y=h[1]*w+h[4]*M+h[7]*R,S=h[2]*w+h[5]*M+h[8]*R,L=Math.hypot(E,y,S)||1;g.positions.push(c[0]*x+c[4]*b+c[8]*v+c[12],c[1]*x+c[5]*b+c[9]*v+c[13],c[2]*x+c[6]*b+c[10]*v+c[14]),g.normals.push(E/L,y/L,S/L),g.colours.push(f,d,m)}}spot(e,t){let n=wi(this.place.seed,e)*Math.PI*2,[i,s]=this.place.centre;return[i+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[i,s]=this.place.centre,o=Math.hypot(e-i,t-s)-Y1-n;return this.lines.forEach(([a,l])=>{o=Math.min(o,PN(e,t,a,l)-oN-n)}),this.taken.forEach(([a,l,c])=>{o=Math.min(o,Math.hypot(e-a,t-l)-c-n)}),o}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let i=wi(this.place.seed,e)*Math.PI*2,[s,o]=this.place.centre,a=[s,o],l=-1/0;for(let c of[t,t*.88,t*1.1])for(let h=0;h<B1;h++){let f=i+h/B1*Math.PI*2,d=[s+Math.cos(f)*c*this.place.radius,o+Math.sin(f)*c*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>l&&(a=d,l=m)}return this.taken.push([a[0],a[1],n]),a}};Nt=new WeakSet,$1=u(function(e,t){let n=Xy,i=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),s=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),o=Math.hypot(i,1,s);return[-i/o,1/o,-s/o]},"#normal"),qt=u(function(e,t,n,i){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...A(this,Nt,$1).call(this,e,t)),this.soup.colours.push(...i)},"#point"),u(Ky,"Layer");var Gy=Ky,qp=u((r,e)=>{let[t,n]=r.centre,[i,s]=r.toward(e);return[(t+i)/2,(n+s)/2]},"halfway"),qy=u(r=>r.alone||r.joins.length>0,"drawn"),pN=.09,mN=8,Vy=u(([r,e])=>300+(r+3)*7+(e+3),"wayIndex"),Yp=u((r,e)=>{let[t,n]=r.centre,[i,s]=qp(r,e),o=i-t,a=s-n,l=Math.hypot(o,a);if(l===0)return{points:[[t,n]],ways:[[0,0]]};let c=(wi(r.seed,Vy(e))*2-1)*pN*l/(4/9),h=[-a/l,o/l],f=[t+o/3+h[0]*c,n+a/3+h[1]*c],d=[t+o*2/3,n+a*2/3],m=Math.max(mN,Math.ceil(l*1.02/ql)),g=Array.from({length:m+1},(_,x)=>x/m);return{points:g.map(_=>{let x=(1-_)**3,b=3*(1-_)**2*_,v=3*(1-_)*_**2,w=_**3;return[x*t+b*f[0]+v*d[0]+w*i,x*n+b*f[1]+v*d[1]+w*s]}),ways:g.map(_=>{let x=3*(1-_)**2,b=6*(1-_)*_,v=3*_**2,w=x*(f[0]-t)+b*(d[0]-f[0])+v*(i-d[0]),M=x*(f[1]-n)+b*(d[1]-f[1])+v*(s-d[1]),R=Math.hypot(w,M);return R===0?[o/l,a/l]:[w/R,M/R]})}},"roadHalf"),gN=u((r,e)=>{let{place:t}=r;qy(e)&&(e.joins.forEach(n=>{let{points:i,ways:s}=Yp(t,n);r.ribbon(i,.07,D1,Bn.road,s)}),r.disc(t.centre,e.alone?.09:.035,D1,Bn.road))},"road"),xN=u((r,e)=>{if(!qy(e))return;let{place:t}=r;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(i=>qp(t,i))).forEach(i=>{let[s,o]=t.centre,a=Math.hypot(i[0]-s,i[1]-o),l=a===0?[0,0]:[-(i[1]-o)/a*.025,(i[0]-s)/a*.025];r.strip(t.centre,i,.1,O1,Bn.ballast);for(let c=.1;c<1;c+=.2){let h=[s+(i[0]-s)*c,o+(i[1]-o)*c];r.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,jL,Bn.ballast+.002)}[1,-1].forEach(c=>r.strip([s+l[0]*c,o+l[1]*c],[i[0]+l[0]*c,i[1]+l[1]*c],.01,JL,Bn.rail))}),r.disc(t.centre,.05,O1,Bn.ballast)},"railroad"),By=.04,bN=u((r,e,t,n,i)=>{let s=i.filter(l=>Math.min(...l.map(([,c])=>c))-Ut<t+n/2&&Math.max(...l.map(([,c])=>c))+Ut>t-n/2).map(l=>[Math.min(...l.map(([c])=>c))-Ut,Math.max(...l.map(([c])=>c))+Ut]).sort((l,c)=>l[0]-c[0]),o=[],a=r;return s.forEach(([l,c])=>{l-a>=By&&o.push([a,Math.min(l,e)]),a=Math.max(a,c)}),e-a>=By&&o.push([a,e]),o.filter(([l,c])=>c-l>=By)},"rowAround"),yN=u((r,e,t)=>{let{centre:n,inner:i}=r.place,s=e==="farmland"?6:4,o=i*.9,a=o*2/s,l=u((c,h,f,d)=>bN(n[0]-o,n[0]+o,c,h,t).forEach(([m,g])=>r.strip([m,c],[g,c],h,f,d)),"across");for(let c=0;c<s;c++)l(n[1]-o+a*(c+.5),a*.8,e==="farmland"?tN[c%2]:eN,Bn.field),c>0&&l(n[1]-o+a*c,.016,QL,Bn.field+.001)},"fields"),G1=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],V1="#a39a88",_N="#c4b8a2",vN=.045,H1=.86,MN=u((r,e)=>{let{place:t}=r,[n,i]=t.centre,{plaza:s,streets:o,lots:a}=KS(t,e,[n,i+ua]);r.disc(s.at,s.radius,V1,Bn.road,16),o.forEach(([l,c])=>r.strip(l,c,Iu,V1,Bn.road)),a.forEach(l=>K1(r,l))},"city"),K1=u((r,e)=>{let{at:[t,n],width:i,facing:s,storeys:o}=e,a=[[t,n],...Cl(e)].map(([h,f])=>r.ground(h,f)),l=Math.min(...a)-.005,c=Math.max(...a)+vN*o;r.solid(Fn,[t,(l+c)/2,n],[i*H1,c-l,i*H1],_N,[0,s,0]),r.solid(q1,[t,c+i*.2,n],[i*Math.SQRT2,i*.4,i*Math.SQRT2],G1[Math.floor(e.roof*G1.length)],[0,s+Math.PI/4,0])},"house"),SN=u((r,e)=>{if(e.suburbs.length===0)return[];let{place:t}=r,n=u((a,l)=>a[0]===l[0]&&a[1]===l[1],"same"),i=u(a=>{let[l,c]=t.toward(a);return[l,c+ua]},"standOf"),s={runs:[...r.runs],lines:[...r.past],lanes:e.beside.filter(a=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(l=>n(l,a))).map(a=>[[t.centre[0],t.centre[1]],i(a)]),stands:e.beside.map(i),taken:r.taken,ground:u((a,l)=>t.heightAt(a,l),"ground")};return e.suburbs.flatMap(a=>jS(t,a,{...s,others:e.beside.filter(l=>!n(l,a.city)).map(l=>t.toward(l))})).map(a=>(K1(r,a),r.taken.push([a.at[0],a.at[1],a.width/2*Math.SQRT2]),Cl(a)))},"suburbs"),wN=u((r,[e,t])=>{let n=r.ground(e,t);r.solid(Fn,[e-.02,n+.05,t],[.01,.11,.01],zy,[0,0,-.3]),r.solid(Fn,[e+.02,n+.05,t],[.01,.11,.01],zy,[0,0,.3]),r.solid(Yl,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([i,s])=>{let o=e+i,a=t+s;r.solid(Wy,[o,r.ground(o,a)+.02,a],[.07,.04,.07],iN)})},"mine"),EN=u(r=>{let[e,t]=r.place.centre,n=r.place.radius*.62,i=r.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,o,a,l])=>{let c=e+s,h=t+o;r.solid(Fn,[c,Math.max(i,r.ground(c,h))+.02,h],[a,.05,l],U1)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,o])=>{let a=e+s,l=t+o;r.solid(Yl,[a,r.ground(a,l)+.035,l],[.045,.07,.045],U1)})},"fortress"),TN=u(r=>{let[e,t]=r.place.centre,n=r.place.radius*.75,[i,s]=r.claim(5,.6,.08);r.strip([e-n,t+.12],[e+n,t+.12],.12,nN,Bn.road+.002),r.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Bn.road+.004),r.solid(Fn,[i,r.ground(i,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),AN=u(r=>{let e=r.place.radius;r.disc(r.place.centre,e*.55,F1,Bn.smear,14),r.disc(r.spot(7,.5),e*.25,F1,Bn.smear+.001)},"pollution"),RN=u((r,e,t,n)=>{let i=e.detail??e.colour,s=u((a,l)=>[t[0]+(wi(r.place.seed,n*31+a*2)-.5)*l,t[1]+(wi(r.place.seed,n*31+a*2+1)-.5)*l],"jitter"),o=e.shape==="fish"||e.shape==="whale";for(let a=0;a<e.count;a++){let[l,c]=e.count===1?[t[0],t[1]]:s(a,.1),h=r.ground(l,c,o),f=wi(r.place.seed,n*31+a+17)*Math.PI*2;switch(e.shape){case"rocks":r.solid(Xl,[l,h+.012,c],[.05,.035,.045],a%2===1?i:e.colour,[0,f,0]);break;case"crop":r.solid(Yl,[l,h+.02,c],[.008,.04,.008],i),r.solid(Xl,[l,h+.05,c],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;r.solid(Fn,[l,h+.04*d,c],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),r.solid(Fn,[l+Math.sin(f)*.04*d,h+.055*d,c+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],i,[0,f,0]),r.solid(Fn,[l,h+.013*d,c],[.03*d,.026*d,.055*d],i,[0,f,0]);break}case"bird":r.solid(Xl,[l,h+.02,c],[.03,.025,.04],e.colour,[0,f,0]),r.solid(Fn,[l-Math.sin(f)*.03,h+.025,c-Math.cos(f)*.03],[.008,.006,.04],i,[.4,f,0]);break;case"fish":r.solid(Xl,[l,h+.006,c],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":r.solid(Xl,[l,h,c],[.07,.05,.2],e.colour,[0,f,0]),r.solid(Fn,[l-Math.sin(f)*.11,h+.02,c-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":r.solid(Fn,[l,h+.008,c],[.08,.016,.08],i),r.solid(q1,[l,h+.1,c],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":a===0&&r.disc([l,c],.07,i,Bn.field+.002);{let[d,m]=s(a+5,.1),g=r.ground(d,m);r.solid(Yl,[d,g+.06,m],[.012,.12,.012],zy),r.solid(Wy,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":r.solid(e.shape==="logs"?Yl:Fn,[l,h+.012,c],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],a%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:r.solid(Xl,[t[0],r.ground(t[0],t[1])+.012+a*.018,t[1]],[.05-a*.007,.025,.05-a*.007],e.colour)}}},"special"),CN=u((r,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+wi(r.place.seed,12)*Math.PI,i=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,o=r.ground(i,s);r.solid(Yl,[i,o+.02,s],[.05,.04,.05],sN),r.solid(Wy,[i,o+.055,s],[.065,.035,.065],rN)})},"hut"),Z1={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},J1=u((r,e,t,n,i,s,o)=>{let a=r.ground(n,i),{colour:l,detail:c}=e;switch(t){case"conifer":r.solid($u,[n,a+.025*s,i],[.016*s,.05*s,.016*s],c),r.solid(Ku,[n,a+.09*s,i],[.11*s,.12*s,.11*s],l),r.solid(Ku,[n,a+.16*s,i],[.08*s,.1*s,.08*s],l);break;case"broadleaf":r.solid($u,[n,a+.04*s,i],[.018*s,.08*s,.018*s],c),r.solid(Hp,[n,a+.12*s,i],[.13*s,.11*s,.13*s],l,[0,o,0]);break;case"palm":r.solid($u,[n,a+.08*s,i],[.012*s,.16*s,.012*s],c,[.12,o,0]),r.solid(Ku,[n+.01*s,a+.165*s,i],[.15*s,.03*s,.15*s],l,[0,o,0]);break;case"deadTree":r.solid($u,[n,a+.06*s,i],[.014*s,.12*s,.014*s],c),r.solid(Fn,[n+.02*s,a+.09*s,i],[.006*s,.05*s,.006*s],c,[0,o,-.7]);break;case"bush":r.solid(Hp,[n,a+.02*s,i],[.06*s,.045*s,.06*s],l,[0,o,0]);break;case"shrub":r.solid(Ku,[n,a+.025*s,i],[.05*s,.05*s,.05*s],l,[0,o,0]),r.solid(Ku,[n+.02*s,a+.018*s,i+.01*s],[.035*s,.036*s,.035*s],l,[0,o,0]);break;case"scrub":r.solid(Hp,[n,a+.008*s,i],[.05*s,.02*s,.05*s],l,[0,o,0]);break;case"reeds":[-1,0,1].forEach(h=>r.solid(Fn,[n+h*.008*s,a+.035*s,i],[.005,.07*s,.005],h===0?l:c,[0,o,h*.18]));break;case"rock":r.solid(Hp,[n,a+.012*s,i],[.07*s,.04*s,.06*s],l,[0,o,0]);break;default:r.solid($u,[n,a+.05*s,i],[.018*s,.1*s,.018*s],l),r.solid(Fn,[n+.015*s,a+.06*s,i],[.025*s,.01*s,.01*s],l,[0,o,0])}},"grow"),PN=u((r,e,t,n)=>{let i=n[0]-t[0],s=n[1]-t[1],o=i*i+s*s,a=o===0?0:Math.max(0,Math.min(1,((r-t[0])*i+(e-t[1])*s)/o));return Math.hypot(r-(t[0]+i*a),e-(t[1]+s*a))},"distanceTo"),IN=u((r,e)=>{let t=Wl(e.terrain);if(t===null)return;let{centre:n,radius:i,seed:s,latitude:o}=r.place;t.plants.forEach((a,l)=>{for(let c=0;c<a.count;c++){let h=1e3+l*97+c*7,f=a.size[0]+(a.size[1]-a.size[0])*wi(s,h),d=t.conifers,m=d!==void 0&&wi(s,h+1)>=d[0]+(d[1]-d[0])*o?"broadleaf":a.kind,g=Z1[m]*f;for(let _=0;_<6;_++){let x=wi(s,h+2+_*2)*Math.PI*2,b=Math.sqrt(wi(s,h+3+_*2))*i*.92,v=n[0]+Math.cos(x)*b,w=n[1]+Math.sin(x)*b;if(r.hasRoom(v,w,g)){J1(r,a,m,v,w,f,x),r.taken.push([v,w,g]),r.grown.push([v,w,m]);break}}}})},"plants"),ky=.26,W1=.3,LN=.15,X1=.5,Xp=[.9,1.3],ma=u((r,e,t)=>wi(Math.imul(r,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),NN=u((r,e,t)=>{let{centre:n,outline:i,owns:s,around:o,period:a,toward:l,latitude:c}=e,h=Math.max(1,Math.round(a.u/ky)),f=a.u/h,d=a.v===null?null:Math.max(1,Math.round(a.v/ky)),m=a.v===null||d===null?ky:a.v/d,g=i.map(([y])=>y),_=i.map(([,y])=>y),[x,b]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[v,w]=[Math.floor(Math.min(..._)/m)-1,Math.ceil(Math.max(..._)/m)],M=o.filter(([y,S])=>!r.woods.some(([L,I])=>L===y&&I===S)).map(y=>{let[S,L]=l(y),I=Math.hypot(S-n[0],L-n[1]);return{mu:S,mv:L,length:I}}),R=t.plants.reduce((y,{count:S})=>y+S,0),E=[];for(let y=v;y<=w;y++)for(let S=x;S<=b;S++){let L=(S%h+h)%h,I=d===null?y:(y%d+d)%d,O=(S+.5+(ma(L,I,0)*2-1)*W1)*f,F=(y+.5+(ma(L,I,1)*2-1)*W1)*m;if(!s(O,F))continue;let W=M.reduce((X,{mu:j,mv:ie,length:pe})=>{let ye=pe/2-((O-n[0])*(j-n[0])+(F-n[1])*(ie-n[1]))/pe;return Math.min(X,Math.max(0,ye)/LN)},1);if(ma(L,I,2)>=X1+(1-X1)*W)continue;let U=ma(L,I,3)*R,q=t.plants[0];for(let X of t.plants)if(q=X,U-=X.count,U<0)break;let te=t.conifers,z=te!==void 0&&ma(L,I,4)>=te[0]+(te[1]-te[0])*c?"broadleaf":q.kind,Z=q.size[0]+(q.size[1]-q.size[0])*ma(L,I,5);E.push({u:O,v:F,kind:z,plant:q,room:Z1[z]*Z*Xp[1],size:Z*(Xp[0]+(Xp[1]-Xp[0])*W),facing:ma(L,I,6)*Math.PI*2})}return E},"woodsPlants"),DN=u((r,e)=>{let{centre:t,around:n,toward:i}=r.place,s=Math.max(...n.map(a=>{let[l,c]=i(a);return Math.hypot(l-t[0],c-t[1])})),o=e.paths.map(a=>i(a));o.forEach((a,l)=>o.slice(l+1).forEach(c=>{Math.hypot(c[0]-a[0],c[1]-a[1])<=s+1e-6&&(r.lines.push([a,c]),r.past.push([a,c]))}))},"pathsPast"),ON=u((r,e,t)=>{let{heightAt:n}=r.place;NN(e,r.place,t).forEach(({u:i,v:s,kind:o,plant:a,size:l,room:c,facing:h})=>{o!=="reeds"&&n(i,s)<0||r.hasRoom(i,s,c)&&(J1(r,a,o,i,s,l,h),r.grown.push([i,s,o]))})},"woods"),Yy=u((r,e,t)=>{let n=new Gy(t,e),{centre:i,radius:s}=e;if(r.city!==null)return MN(n,r.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([r.road,r.railroad].forEach(l=>{l!==null&&qy(l)&&(l.joins.forEach(c=>{if(l===r.road){let h=Yp(e,c).points;h.slice(1).forEach((f,d)=>n.lines.push([h[d],f])),n.runs.push({key:Vy(c),points:h});return}n.lines.push([i,qp(e,c)]),n.runs.push({key:Vy(c)+100,points:[i,qp(e,c)]})}),l.alone&&n.lines.push([i,i]))}),r.fortress){let l=s*.62,c=[[-l,-l],[l,-l],[l,l],[-l,l]].map(([h,f])=>[i[0]+h,i[1]+f]);c.forEach((h,f)=>n.lines.push([h,c[(f+1)%4]]))}if(r.airbase){let l=s*.75;n.lines.push([[i[0]-l,i[1]+.12],[i[0]+l,i[1]+.12]])}r.road!==null&&gN(n,r.road),r.railroad!==null&&xN(n,r.railroad),r.front===!0&&n.taken.push([i[0],i[1]+ua,Y1]),r.mine&&wN(n,n.claim(...Fy.mine,.1)),r.fortress&&EN(n),r.airbase&&TN(n),r.pollution&&AN(n),r.specials.forEach(([l,c],h)=>RN(n,N1(l,c),n.claim(...Fy.special(h),.1),h+1)),r.hut&&CN(n,n.claim(...Fy.hut,.13)),DN(n,r);let o=SN(n,r);r.irrigation!==null&&yN(n,r.irrigation,o);let a=Wl(r.terrain);return a!==null&&r.irrigation===null&&!r.fortress&&!r.airbase&&(a.canopy!==void 0?ON(n,r,a):IN(n,r)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),UN=u((r,e,t)=>{let n=Hy();return t.forEach(({overlay:i,place:s})=>Yy(i,s,n)),$y(r,e,n)},"overlayMesh"),$y=u((r,e,t)=>{let n=new Float32Array(t.positions);for(let i=0;i<n.length;i+=3)n[i]=n[i]-r,n[i+2]=n[i+2]-e;return{u:r,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),j1=UN;var Q1=u((r,e)=>Math.imul(r,73856093)^Math.imul(e,19349663),"squareSeed"),Js,sn,Zi,$l,Qu,hi,di,dn,Kl,ga,js,xa,Qs,eo,eh,th,et,Jy,jy,Qy,eE,tE,e_,Zu,t_,$p,Ju,Kp,ju,n_=class n_{constructor(e){G(this,et);G(this,Js);G(this,sn);G(this,Zi,[]);G(this,$l);G(this,Qu);G(this,hi);G(this,di,new Set);G(this,dn,null);G(this,Kl,null);G(this,ga,new Map);G(this,js,new Map);G(this,xa,u(()=>{},"#keptCity"));G(this,Qs,!0);G(this,eo,[0,0]);G(this,eh);G(this,th);k(this,hi,e);let t=e.topology(),n=e.width(),i=e.height(),s=t.wrapsY();this.layout=S1({width:n,height:i,topologyId:e.topologyId(),wrapsY:s}),k(this,Js,E1({layout:this.layout,source:{width:n,height:i,wrapsY:s,terrainAt:u((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:u((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:u((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),k(this,sn,T1(this.layout,i));let[o,a]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-o,m-a))),c=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,_]=this.layout.centre(d,m);return Math.hypot(g-o,_-a)}));k(this,$l,1.2+l+fs*Math.SQRT2+Math.max((br.reach-1)*c,c/2+fs*Math.SQRT2+Vp)),k(this,Qu,l+Xy+Math.max(p(this,sn).spacingU,p(this,sn).spacingV));let h=this.layout.outline(0,0),f=h.flatMap(([d,m],g)=>{let[_,x]=h[(g+1)%h.length],b=Math.hypot(_-d,x-m);return b===0?[]:[{away:Math.abs((_-d)*(a-m)-(x-m)*(o-d))/b,normal:[(x-m)/b,(d-_)/b]}]});k(this,eh,Math.min(...f.map(({away:d})=>d))),k(this,th,Math.min(...f.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:i,spacingV:s}=p(this,sn),o=Math.floor(e/i),a=Math.floor(t/s),l=e/i-o,c=t/s-a,h=u((_,x)=>{let b=`${_},${x}`,v=n.get(b);return v===void 0&&(v=p(this,Js).height(_*i,x*s),n.set(b,v)),v},"at"),f=h(o,a),d=h(o+1,a),m=h(o,a+1);if(l+c<=1)return f+(d-f)*l+(m-f)*c;let g=h(o+1,a+1);return g+(m-g)*(1-l)+(d-g)*(1-c)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:i,spacingU:s,spacingV:o}=p(this,sn);return{columns:e*n,rows:t*i,spacingU:s,spacingV:o,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,sn).chunksV*p(this,sn).stepsV*p(this,sn).spacingV}heightAt(e,t){return p(this,Js).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:i}=p(this,sn),s=[];for(let o=0;o<i;o++)for(let a=0;a<n;a++)s.push(`${a},${o}`);k(this,Zi,A(this,et,ju).call(this,s,e,t)),k(this,eo,[e,t]),s.forEach(o=>p(this,di).add(o)),A(this,et,Qy).call(this)}changed(e,t,n,i=!1){if(e.length===0&&!i)return[];k(this,eo,[t,n]),A(this,et,Jy).call(this,e.length===0?[...A(this,et,Ju).call(this).values()].flat():A(this,et,Kp).call(this,e));let s=p(this,Js).refresh(i?void 0:e);if(s.length===0)return s;let o=Uy(p(this,sn),this.layout,s,p(this,$l)).map(([a,l])=>`${a},${l}`);return A(this,et,Qy).call(this,Uy(p(this,sn),this.layout,s,p(this,$l)+p(this,Qu)).map(([a,l])=>`${a},${l}`)),k(this,Zi,A(this,et,ju).call(this,[...new Set([...p(this,Zi),...o])],t,n)),s}showTowns(e,t,n){if(e===p(this,Qs))return;let i=[...A(this,et,Ju).call(this).values()].flat().filter(([s,o])=>A(this,et,jy).call(this,s,o));k(this,Qs,e),k(this,eo,[t,n]),A(this,et,Jy).call(this,A(this,et,Kp).call(this,i))}refocus(e,t){k(this,Zi,A(this,et,ju).call(this,p(this,Zi),e,t)),k(this,eo,[e,t])}pending(){return p(this,Zi).length}overlaysPending(){return p(this,di).size+(p(this,dn)===null||p(this,di).has(p(this,dn).key)?0:1)}build(e,t){let n=performance.now(),i=u(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,Zi).length>0;){if(i())return;let o=p(this,Zi).shift(),[a,l]=o.split(",").map(Number);e.setChunk(a,l,A1(p(this,sn),p(this,Js),a,l)),p(this,di).add(o)}let s=!1;for(;p(this,di).size>0||p(this,dn)!==null;){if(p(this,dn)!==null&&p(this,di).has(p(this,dn).key)&&k(this,dn,null),p(this,dn)===null){if(s&&i())return;let g=A(this,et,ju).call(this,[...p(this,di)],...p(this,eo))[0],_=A(this,et,Ju).call(this).get(g)??[],x=A(this,et,tE).call(this,g,_);if(p(this,di).delete(g),x!==null){let[b,v]=g.split(",").map(Number);_.forEach(([w,M],R)=>p(this,ga).set(`${w},${M}`,x.signatures[R])),e.setOverlay(b,v,x.mesh),s=!0;continue}k(this,dn,{key:g,squares:_,done:0,laid:Hy(),signatures:[],heights:new Map,keep:!0})}let o=p(this,dn);for(;o.done<o.squares.length;){let[g,_]=o.squares[o.done],x=A(this,et,t_).call(this,g,_,o.heights);if(o.signatures.push(p(this,ga).get(`${g},${_}`)),o.done++,x!==null&&Yy(x.overlay,x.place,o.laid),o.done<o.squares.length&&i())return}let[a,l]=o.key.split(",").map(Number),{stepsU:c,stepsV:h,spacingU:f,spacingV:d}=p(this,sn),m=o.laid.positions.length===0?null:$y(a*c*f,l*h*d,o.laid);if(k(this,dn,null),o.keep){let g={signatures:o.signatures,mesh:m};p(this,js).set(o.key,A(this,et,Kp).call(this,o.squares).some(([_,x])=>A(this,et,jy).call(this,_,x))?{...p(this,js).get(o.key),[p(this,Qs)?"shown":"hidden"]:g}:{shown:g,hidden:g})}e.setOverlay(a,l,m),s=!0}}keepCities(e){k(this,xa,e)}roadPath(e,t,n,i){let s=p(this,hi).topology(),o=u((M,R,E,y)=>{let S=s.directions().find(L=>{let I=s.neighbour(M,R,L);return I!==null&&I[0]===E&&I[1]===y});return S===void 0?null:s.offset(S,M,R)},"offsetTo"),a=o(e,t,n,i),l=o(n,i,e,t);if(a===null||l===null)return null;let c=u((M,R,E)=>{let y=A(this,et,Zu).call(this,M,R),S=u(I=>I!==null&&I.joins.some(([O,F])=>O===E[0]&&F===E[1]),"joins"),L=this.layout.centre(M,R);if(S(y?.road??null))return Yp({centre:L,toward:u(([I,O])=>this.layout.centre(M+I,R+O),"toward"),seed:Q1(M,R)},E).points;if(S(y?.railroad??null)){let[I,O]=this.layout.centre(M+E[0],R+E[1]);return[[L[0],L[1]],[(L[0]+I)/2,(L[1]+O)/2]]}return null},"half"),h=c(e,t,a),f=c(n,i,l);if(h===null&&f===null)return null;let d=this.layout.centre(e,t),m=this.layout.centre(n,i),g=this.layout.centre(e+a[0],t+a[1]),_=this.layout.centre(n+l[0],i+l[1]),x=[(d[0]+g[0])/2,(d[1]+g[1])/2],b=[(m[0]+_[0])/2,(m[1]+_[1])/2],v=[b[0]-x[0],b[1]-x[1]];return[...(h??[d,x]).map(([M,R])=>[M+v[0],R+v[1]]),...(f??[m,b]).slice(0,-1).reverse()].map(([M,R])=>[M-m[0],R-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:i,spacingU:s,spacingV:o}=p(this,sn),a=new Map,l=(A(this,et,Ju).call(this).get(`${e},${t}`)??[]).flatMap(([c,h])=>A(this,et,t_).call(this,c,h,a)??[]);return l.length===0?null:j1(e*n*s,t*i*o,l)}overlayKeyOf(e,t){return A(this,et,$p).call(this,e,t)}};Js=new WeakMap,sn=new WeakMap,Zi=new WeakMap,$l=new WeakMap,Qu=new WeakMap,hi=new WeakMap,di=new WeakMap,dn=new WeakMap,Kl=new WeakMap,ga=new WeakMap,js=new WeakMap,xa=new WeakMap,Qs=new WeakMap,eo=new WeakMap,eh=new WeakMap,th=new WeakMap,et=new WeakSet,Jy=u(function(e){e.forEach(([t,n])=>{let i=A(this,et,$p).call(this,t,n);if(p(this,di).has(i)||p(this,dn)?.key===i&&!A(this,et,eE).call(this,p(this,dn),t,n))return;JSON.stringify(A(this,et,Zu).call(this,t,n))!==(p(this,ga).get(`${t},${n}`)??"null")&&p(this,di).add(i)})},"#layAgain"),jy=u(function(e,t){return!!p(this,hi).get(e,t).city||!!p(this,xa).call(this,e,t)},"#townAt"),Qy=u(function(e){let t=e===void 0?null:new Set(e);t===null?p(this,js).clear():t.forEach(n=>p(this,js).delete(n)),p(this,dn)!==null&&(t===null||t.has(p(this,dn).key))&&(p(this,dn).keep=!1)},"#landChanged"),eE=u(function(e,t,n){return e.squares.slice(0,e.done).some(([i,s])=>i===t&&s===n)},"#reached"),tE=u(function(e,t){let n=p(this,js).get(e);if(n===void 0)return null;let i=t.map(([s,o])=>JSON.stringify(A(this,et,Zu).call(this,s,o)));return[n.shown,n.hidden].find(s=>s!==void 0&&s.signatures.length===i.length&&s.signatures.every((o,a)=>o===i[a]))??null},"#madeAs"),e_=u(function(e,t){let n=p(this,hi).get(e,t),i=p(this,Qs)?p(this,xa).call(this,e,t):null;return i===void 0?n:{...n,city:i}},"#shownAt"),Zu=u(function(e,t){let n=p(this,hi).topology(),i=I1(A(this,et,e_).call(this,e,t),n.directions().flatMap(o=>{let a=n.neighbour(e,t,o);return a===null?[]:[{offset:n.offset(o,e,t),tile:A(this,et,e_).call(this,a[0],a[1])}]})),s=p(this,xa).call(this,e,t);return i!==null&&!p(this,Qs)&&(s===void 0?p(this,hi).get(e,t).city:s)?{...i,front:!0}:i},"#overlayAt"),t_=u(function(e,t,n){let i=A(this,et,Zu).call(this,e,t);if(p(this,ga).set(`${e},${t}`,JSON.stringify(i)),i===null)return null;let[s,o]=this.layout.centre(e,t),a=p(this,hi).topology();return{overlay:i,place:{centre:[s,o],toward:u(([l,c])=>this.layout.centre(e+l,t+c),"toward"),radius:p(this,eh),inner:p(this,th),heightAt:u((l,c)=>this.surfaceAt(l,c,n),"heightAt"),seed:Q1(e,t),latitude:Math.min(1,Math.abs(2*o/this.extentV()-1)),outline:this.layout.outline(e,t),owns:u((l,c)=>{let[h,f]=this.layout.tileAt(l,c);return h===e&&f===t},"owns"),around:a.directions().filter(l=>a.neighbour(e,t,l)!==null).map(l=>a.offset(l,e,t)),period:this.layout.period()}}},"#square"),$p=u(function(e,t){let{chunksU:n,chunksV:i,stepsU:s,stepsV:o,spacingU:a,spacingV:l}=p(this,sn),[c,h]=this.layout.centre(e,t),f=Math.floor(c/(s*a)),d=Math.floor(h/(o*l));return`${Math.min(n-1,Math.max(0,f))},${Math.min(i-1,Math.max(0,d))}`},"#chunkOf"),Ju=u(function(){if(p(this,Kl)===null){let e=new Map;for(let t=0;t<p(this,hi).height();t++)for(let n=0;n<p(this,hi).width();n++){let i=A(this,et,$p).call(this,n,t);e.set(i,[...e.get(i)??[],[n,t]])}k(this,Kl,e)}return p(this,Kl)},"#chunksOfSquares"),Kp=u(function(e){let t=p(this,hi).topology(),n=new Map;return e.forEach(([i,s])=>[[i,s],...t.directions().map(o=>t.neighbour(i,s,o)).filter(o=>o!==null)].forEach(o=>n.set(o.join(),o))),[...n.values()]},"#besides"),ju=u(function(e,t,n){let{stepsU:i,stepsV:s,spacingU:o,spacingV:a}=p(this,sn),l=i*o,c=s*a,{u:h,v:f}=this.layout.period(),d=u((g,_)=>Math.abs(_===null?g:g-_*Math.round(g/_)),"round"),m=u(g=>{let[_,x]=g.split(",").map(Number);return Math.hypot(d((_+.5)*l-t,h),d((x+.5)*c-n,f))},"distance");return[...e].sort((g,_)=>m(g)-m(_))},"#nearestFirst"),u(n_,"Land");var Zy=n_,nE=Zy;var FN=u(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ei=FN;var iE=u((r,e,t=100)=>{let n=r.filter(({time:a})=>e-a<=t);if(n.length<2)return{x:0,y:0};let i=n[0],s=n[n.length-1],o=s.time-i.time;return o<=0?{x:0,y:0}:{x:(s.x-i.x)/o,y:(s.y-i.y)/o}},"releaseVelocity");var BN=8,kN=.92,zN=.02,rE=3,GN=50,VN=8,HN=10,sE=250,nh,ih,Zl,Jl,ba,to,i_=class i_{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:i}){G(this,nh);G(this,ih);G(this,Zl);G(this,Jl);G(this,ba,!1);G(this,to);this.pointerId=e,k(this,nh,t),k(this,ih,n),k(this,Zl,t),k(this,Jl,n),k(this,to,[{x:t,y:n,time:i}])}dragging(){return p(this,ba)}move({pointerId:e,clientX:t,clientY:n,timeStamp:i}){if(e!==this.pointerId||!p(this,ba)&&Math.hypot(t-p(this,nh),n-p(this,ih))<BN)return null;let s=!p(this,ba),o=p(this,Zl)-t,a=p(this,Jl)-n;return k(this,ba,!0),k(this,Zl,t),k(this,Jl,n),p(this,to).push({x:t,y:n,time:i}),p(this,to).length>20&&p(this,to).shift(),{dx:o,dy:a,started:s}}releaseVelocity(e){return iE(p(this,to),e)}};nh=new WeakMap,ih=new WeakMap,Zl=new WeakMap,Jl=new WeakMap,ba=new WeakMap,to=new WeakMap,u(i_,"Press");var Zp=i_,Mr,rh,r_=class r_{constructor(e){G(this,Mr,null);G(this,rh);k(this,rh,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>rE?rE/t:1,i=e.x*n,s=e.y*n,o=null,a=u(l=>{let c=o===null?16:Math.min(l-o,64);if(o=l,Math.hypot(i,s)<zN){k(this,Mr,null);return}p(this,rh).call(this,-i*c,-s*c);let h=Math.pow(kN,c/16);i*=h,s*=h,k(this,Mr,window.requestAnimationFrame(a))},"step");k(this,Mr,window.requestAnimationFrame(a))}gliding(){return p(this,Mr)!==null}stop(){p(this,Mr)!==null&&(window.cancelAnimationFrame(p(this,Mr)),k(this,Mr,null))}};Mr=new WeakMap,rh=new WeakMap,u(r_,"Glide");var Jp=r_,ya,sh,oh,jl,s_=class s_{constructor(){G(this,ya,0);G(this,sh,0);G(this,oh,-1/0);G(this,jl,0)}turned(e,t){let n=e.deltaMode===0,i=e.deltaY;if(i===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=sE)return 0;let s=Math.sign(i),o=e.timeStamp-p(this,oh)>sE||s!==p(this,sh);if(k(this,oh,e.timeStamp),k(this,sh,s),o&&(k(this,ya,0),k(this,jl,0)),n&&!e.ctrlKey&&p(this,jl)>=HN)return 0;if(!o&&n){if(k(this,ya,p(this,ya)+i),Math.abs(p(this,ya))<(e.ctrlKey?VN:GN))return 0;k(this,ya,0)}return n&&!e.ctrlKey&&k(this,jl,p(this,jl)+1),i<0?1:-1}};ya=new WeakMap,sh=new WeakMap,oh=new WeakMap,jl=new WeakMap,u(s_,"WheelTurn");var jp=s_;var WN=350,XN=.006,oE=.004,Sr,fn,kn,Ql,wr,Ji,nm,Ai,Ri,no,ec,fi,io,Ue,Ti,Qp,em,aE,a_,ps,l_,lE,ms,cE,uE,hE,dE,ah,fE,pE,mE,tm,c_=class c_{constructor(e,t,n=null){G(this,Ue);G(this,Sr);G(this,fn);G(this,kn,null);G(this,Ql,[0,0]);G(this,wr,null);G(this,Ji);G(this,nm,new jp);G(this,Ai,new Map);G(this,Ri,null);G(this,no,null);G(this,ec,[]);G(this,fi);G(this,io,null);k(this,Sr,e),k(this,fn,t),k(this,fi,n),k(this,Ji,new Jp((i,s)=>{let[o,a]=A(this,Ue,aE).call(this);A(this,Ue,l_).call(this,[o,a],[o-i,a-s])})),A(this,Ue,Ti).call(this,"pointerdown",i=>A(this,Ue,lE).call(this,i)),A(this,Ue,Ti).call(this,"pointermove",i=>A(this,Ue,uE).call(this,i)),A(this,Ue,Ti).call(this,"pointerup",i=>A(this,Ue,hE).call(this,i)),A(this,Ue,Ti).call(this,"pointercancel",i=>A(this,Ue,dE).call(this,i)),A(this,Ue,Ti).call(this,"wheel",i=>A(this,Ue,pE).call(this,i),{passive:!1}),A(this,Ue,Ti).call(this,"gesturestart",i=>A(this,Ue,tm).call(this,i,"start"),{passive:!1}),A(this,Ue,Ti).call(this,"gesturechange",i=>A(this,Ue,tm).call(this,i,"change"),{passive:!1}),A(this,Ue,Ti).call(this,"gestureend",i=>A(this,Ue,tm).call(this,i,"end"),{passive:!1}),A(this,Ue,Ti).call(this,"contextmenu",i=>A(this,Ue,cE).call(this,i)),A(this,Ue,Ti).call(this,"pointerleave",()=>p(this,fi)?.hover(null)),A(this,Ue,Ti).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return p(this,kn)?.dragging()===!0||p(this,wr)!==null}moving(){return this.dragging()||p(this,Ri)!==null||p(this,Ji).gliding()}dispose(){p(this,Ji).stop(),A(this,Ue,ms).call(this),p(this,ec).forEach(([e,t,n])=>p(this,Sr).removeEventListener(e,t,n)),k(this,ec,[])}};Sr=new WeakMap,fn=new WeakMap,kn=new WeakMap,Ql=new WeakMap,wr=new WeakMap,Ji=new WeakMap,nm=new WeakMap,Ai=new WeakMap,Ri=new WeakMap,no=new WeakMap,ec=new WeakMap,fi=new WeakMap,io=new WeakMap,Ue=new WeakSet,Ti=u(function(e,t,n){p(this,Sr).addEventListener(e,t,n),p(this,ec).push([e,t,n])},"#listen"),Qp=u(function(){return{width:p(this,Sr).clientWidth||1,height:p(this,Sr).clientHeight||1}},"#box"),em=u(function([e,t]){let{width:n,height:i}=A(this,Ue,Qp).call(this);return[e/n*2-1,1-t/i*2]},"#screen"),aE=u(function(){let{width:e,height:t}=A(this,Ue,Qp).call(this);return[e/2,t/2]},"#middle"),a_=u(function(){let{width:e,height:t}=A(this,Ue,Qp).call(this);return e/t},"#aspect"),ps=u(function(e){let t=p(this,Sr).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),l_=u(function(e,t){p(this,fn).setOrbit(Zw(p(this,fn).orbit(),p(this,fn).lookHeight(),A(this,Ue,em).call(this,e),A(this,Ue,em).call(this,t),A(this,Ue,a_).call(this)))},"#pan"),lE=u(function(e){if(p(this,Ji).stop(),p(this,fi)?.hover(null),e.pointerType==="touch"&&(p(this,Ai).set(e.pointerId,A(this,Ue,ps).call(this,e)),p(this,Ai).size===2)){k(this,kn,null),A(this,Ue,ms).call(this),k(this,Ri,A(this,Ue,ah).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Sr).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),k(this,wr,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Zp(e),[n,i]=A(this,Ue,ps).call(this,e),{clientX:s,clientY:o}=e;k(this,kn,t),k(this,Ql,[n,i]),A(this,Ue,ms).call(this),k(this,io,window.setTimeout(()=>{k(this,io,null),p(this,kn)===t&&!t.dragging()&&p(this,fi)?.menu(n,i,s,o,!0)===!0&&k(this,kn,null)},WN))}}},"#down"),ms=u(function(){p(this,io)!==null&&(window.clearTimeout(p(this,io)),k(this,io,null))},"#stopHold"),cE=u(function(e){if(p(this,fi)===null||!p(this,fi).menuOnRightClick()||(e.preventDefault(),p(this,fi).menuOpen()))return;let[t,n]=A(this,Ue,ps).call(this,e);p(this,fi).menu(t,n,e.clientX,e.clientY,!1)&&(A(this,Ue,ms).call(this),k(this,kn,null))},"#rightClick"),uE=u(function(e){if(p(this,Ai).has(e.pointerId)&&(p(this,Ai).set(e.pointerId,A(this,Ue,ps).call(this,e)),p(this,Ri)!==null)){A(this,Ue,fE).call(this);return}let t=p(this,wr);if(t!==null&&t.pointerId===e.pointerId){let s=p(this,fn).orbit();p(this,fn).setOrbit(da({...s,yaw:s.yaw-(e.clientX-t.x)*XN,pitch:s.pitch+(e.clientY-t.y)*oE})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,kn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,Ji).gliding()){let[s,o]=A(this,Ue,ps).call(this,e);p(this,fi)?.hover({x:s,y:o,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;A(this,Ue,ms).call(this);let i=A(this,Ue,ps).call(this,e);A(this,Ue,l_).call(this,p(this,Ql),i),k(this,Ql,i)},"#move"),hE=u(function(e){if(p(this,Ai).delete(e.pointerId),p(this,Ri)!==null){k(this,Ri,p(this,Ai).size<2?null:A(this,Ue,ah).call(this));return}if(p(this,wr)?.pointerId===e.pointerId){k(this,wr,null);return}let t=p(this,kn);if(!(t===null||t.pointerId!==e.pointerId)){if(k(this,kn,null),A(this,Ue,ms).call(this),!t.dragging()){let[n,i]=A(this,Ue,ps).call(this,e);p(this,fi)?.click(n,i,e.clientX,e.clientY);return}Ei()||p(this,Ji).start(t.releaseVelocity(e.timeStamp))}},"#up"),dE=u(function(e){p(this,Ai).delete(e.pointerId),p(this,Ri)!==null&&k(this,Ri,p(this,Ai).size<2?null:A(this,Ue,ah).call(this)),p(this,kn)?.pointerId===e.pointerId&&(k(this,kn,null),A(this,Ue,ms).call(this)),p(this,wr)?.pointerId===e.pointerId&&k(this,wr,null)},"#cancel"),ah=u(function(){let[e,t]=[...p(this,Ai).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,fn).orbit()}},"#measurePair"),fE=u(function(){let e=p(this,Ri),t=A(this,Ue,ah).call(this);e===null||t===null||p(this,fn).setOrbit(da({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*oE}))},"#twoFingers"),pE=u(function(e){e.preventDefault();let t=p(this,nm).turned(e,p(this,no)?.at??null);t!==0&&(p(this,Ji).stop(),A(this,Ue,mE).call(this,t,A(this,Ue,ps).call(this,e)))},"#wheelTurned"),mE=u(function(e,t){let n=p(this,fn).orbit(),i=p(this,fn).lookHeight(),s=A(this,Ue,em).call(this,t),o=A(this,Ue,a_).call(this),a=p(this,fn).settle(kl(n,e)),l=ha(n,i,s,o),c=ha(a,i,s,o);if(l===null||c===null||a.distance===n.distance){p(this,fn).setOrbit(a);return}p(this,fn).setOrbit({...a,focus:[a.focus[0]+l[0]-c[0],a.focus[1]+l[1]-c[1]]})},"#zoomAbout"),tm=u(function(e,t){if(e.preventDefault(),p(this,Ri)!==null){k(this,no,null);return}if(t==="end"){k(this,no,null);return}if(t==="start"){p(this,Ji).stop(),k(this,kn,null),A(this,Ue,ms).call(this),k(this,no,{orbit:p(this,fn).orbit(),at:e.timeStamp});return}let n=p(this,no);n!==null&&(n.at=e.timeStamp,p(this,fn).setOrbit(da({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),u(c_,"CameraInput");var o_=c_,gE=o_;var qN=["#9a9a9a","#4a4a4a"],lh=u(r=>{let e=r.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?qN:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),u_=u((r,e)=>r.find(t=>t.id===e)??[...r].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),YN=u(r=>{let{current:e,max:t}=r.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),$N=u((r,e,t,n={},i=()=>0,s=1,o=()=>null)=>{let a=r.units??[],l=u_(a,e),c=l!==null&&l.id===e,h=l===null?null:o(l._),f=t&&r.city?{name:n.cityName?.(r.city)??r.city.name,size:r.city.growth?.size??1,colours:lh(r.city.player),walled:r.city.walled===!0,disorder:r.city.civilDisorderDeclared===!0}:null,d=l!==null&&(t||c)?{id:l.id,type:l._,kinds:l.__??[],colours:lh(l.player),count:a.length,active:c,busy:l.busy!==null&&l.busy!==void 0,fortified:(l.improvements??[]).some(({_:m})=>m==="Fortified"),veteran:(l.improvements??[]).some(({_:m})=>m==="Veteran"),health:YN(l),status:(l.busy?n.unitStatus?.(l):null)||null,facing:i(l),size:s,...h===null?{}:{model:h}}:null;return f===null&&d===null?null:{city:f,unit:d,inCity:!!r.city}},"markerFor"),h_=$N;var vE={step:250,ramp:100,most:2e3},ME={step:125,ramp:50,most:1e3},SE=u(r=>({step:r.step/2,ramp:r.ramp/2,most:r.most/2}),"quicker"),KN=50,xE=.3,bE=1,ZN=.05,JN=.02,d_=u((r,e)=>r.x===e.x&&r.y===e.y,"sameSquare"),yE=u((r,e)=>{let{started:t,from:n,speed:i,rising:s,rise:o,top:a,going:l,stopping:c,fall:h,to:f}=r,d=Math.max(0,e-t);if(d<s)return{along:n+i*d+o*d*d/2,speed:i+o*d};let m=n+(i+a)/2*s;if(d<s+l)return{along:m+a*(d-s),speed:a};let g=m+a*l,_=d-s-l;return _<c?{along:g+a*_-h*_*_/2,speed:a-h*_}:{along:f,speed:0}},"motionAt"),ch=u(r=>r.started+r.rising+r.going+r.stopping,"motionEnds"),_E=u((r,e,t,n,i)=>{let s=Math.max(0,n-e),o=Math.max(1,i.ramp),a=Math.max(1/i.step,i.most>o*2?s/(i.most-o):0),l=a/o;if(s<=0)return{started:r,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*l)>=s){let x=2*s/t;return{started:r,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let c=Math.min(a,Math.sqrt(l*s+t*t/2)),h=Math.abs(c-t)/l,f=c>=t?l:-l,d=c/l,m=(t+c)/2*h,g=c*d/2,_=Math.max(0,(s-m-g)/c);return{started:r,from:e,speed:t,rising:h,rise:f,top:c,going:_,stopping:d,fall:l,to:n}},"plan"),tc=u((r,e,t)=>t===null?r:r+t*Math.round((e-r)/t),"nearest"),uh=u((r,e)=>r[0]===e[0]&&r[1]===e[1]?null:Math.atan2(e[0]-r[0],e[1]-r[1]),"wayOf"),f_=u(r=>r*r*(3-2*r),"eased"),nc=u((r,e,t)=>{let n=e-r-Math.PI*2*Math.round((e-r)/(Math.PI*2));return r+n*t},"turnTowards"),ic,Cn,Ci,fh,ph,nt,wE,EE,m_,g_,TE,x_,im,hh,dh,b_,_a,y_=class y_{constructor(e){G(this,nt);G(this,ic);G(this,Cn,new Map);G(this,Ci,new Map);G(this,fh,[]);G(this,ph,0);k(this,ic,e)}walking(e){return p(this,Ci).has(e)}size(){return p(this,Cn).size}step(e,t,n,i,s,o,a,l=!1){let c=p(this,Ci).get(e),h=c===void 0?void 0:p(this,Cn).get(c),f=h===void 0?i:A(this,nt,im).call(this,h,o),d=h===void 0?0:A(this,nt,dh).call(this,h,A(this,nt,hh).call(this,h,o)),m=[...p(this,Cn).values()].find(g=>g!==h&&(l||!g.flies)&&A(this,nt,wE).call(this,g,t,n,o)&&A(this,nt,TE).call(this,A(this,nt,im).call(this,g,g.stepped),h===void 0?i:A(this,nt,im).call(this,h,g.stepped))&&xE*Math.abs(f_(A(this,nt,dh).call(this,g,A(this,nt,hh).call(this,g,o)))-f_(d))<JN);if(m!==void 0)return h!==void 0&&A(this,nt,g_).call(this,h,e),m.units.push(e),p(this,Ci).set(e,m.id),m.id;if(h!==void 0&&d_(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++Bi(this,ph)._}`,units:h.units.filter(_=>_!==e),points:[...h.points],squares:[...h.squares]};p(this,Cn).set(g.id,g),g.units.forEach(_=>p(this,Ci).set(_,g.id)),h.units=[e]}return A(this,nt,m_).call(this,h,n,s,o,a,l),h.id}return h!==void 0&&A(this,nt,g_).call(this,h,e),A(this,nt,EE).call(this,e,t,n,f,s,o,a,{flies:l,climbed:d})}at(e){let t=[],n=[];return p(this,Cn).forEach(i=>{let s=A(this,nt,_a).call(this,i,e);if(e>=ch(i.motion)){n.push(s),A(this,nt,x_).call(this,i);return}t.push(s)}),{going:t,ended:n}}dropped(){return p(this,fh).splice(0)}endsAt(e){let t=p(this,Ci).get(e),n=t===void 0?void 0:p(this,Cn).get(t);return n===void 0?null:ch(n.motion)}nextEnd(){let e=null;return p(this,Cn).forEach(t=>{let n=ch(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return p(this,Cn).forEach(i=>{e(i.units)&&(n.push(A(this,nt,_a).call(this,i,Math.max(t,ch(i.motion)))),A(this,nt,x_).call(this,i))}),n}endAll(e){let t=[...p(this,Cn).values()].map(n=>A(this,nt,_a).call(this,n,Math.max(e,ch(n.motion))));return p(this,Cn).clear(),p(this,Ci).clear(),t}};ic=new WeakMap,Cn=new WeakMap,Ci=new WeakMap,fh=new WeakMap,ph=new WeakMap,nt=new WeakSet,wE=u(function(e,t,n,i){let s=e.squares.length-1;return s>0&&i-e.stepped<=KN&&d_(e.squares[s-1],t)&&d_(e.squares[s],n)},"#justMade"),EE=u(function(e,t,n,i,s,o,a,{flies:l,climbed:c}){let h=`walk-${++Bi(this,ph)._}`,f={id:h,units:[e],from:t,points:[i],squares:[t],stepped:o,motion:_E(o,0,0,0,a),turned:null,flies:l,flown:0,climb:{from:c,at:0}};return p(this,Cn).set(h,f),p(this,Ci).set(e,h),A(this,nt,m_).call(this,f,n,s,o,a,l),h},"#setOff"),m_=u(function(e,t,n,i,s,o){let{u:a,v:l}=p(this,ic),c=e.points[e.points.length-1],h=c.middle??c.at,{along:f,speed:d}=yE(e.motion,i),m=Math.max(0,Math.floor(f)-1),g=e.points.length>1?A(this,nt,_a).call(this,e,i).facing:null,_=e.points.length-1,x=f-(_-1),b=A(this,nt,hh).call(this,e,i);e.points.length>1&&(e.climb={from:A(this,nt,dh).call(this,e,b),at:e.flown+b}),e.flies=o,c.middle!==void 0&&x*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[_]={at:c.middle,lift:0,middle:c.middle,...c.via===void 0?{}:{via:c.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[tc(n.at[0],c.at[0],a),tc(n.at[1],c.at[1],l)],lift:n.lift,...n.middle===void 0?{}:{middle:[tc(n.middle[0],h[0],a),tc(n.middle[1],h[1],l)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=i,e.motion=_E(i,f-m,d,e.points.length-1,s),e.turned=null,g!==null&&(e.turned={offset:nc(0,g-A(this,nt,_a).call(this,e,i).facing,1),at:i,over:s.step/2})},"#goOn"),g_=u(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,Ci).delete(t),e.units.length===0&&(p(this,Cn).delete(e.id),p(this,fh).push(e.id))},"#leave"),TE=u(function(e,t){let{u:n,v:i}=p(this,ic);return Math.hypot(tc(e.at[0],t.at[0],n)-t.at[0],tc(e.at[1],t.at[1],i)-t.at[1])<ZN},"#beside"),x_=u(function(e){p(this,Cn).delete(e.id),e.units.forEach(t=>p(this,Ci).delete(t))},"#end"),im=u(function(e,t){let{at:n,lift:i}=A(this,nt,_a).call(this,e,t);return{at:n,lift:i}},"#drawn"),hh=u(function(e,t){return Math.min(e.points.length-1,Math.max(0,yE(e.motion,t).along))},"#along"),dh=u(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/bE,(e.points.length-1-t)/bE)):0},"#climbed"),b_=u(function(e,t,n){let i=e.points[t],s=e.points[t+1]??i,o=u(x=>x.middle??x.at,"middle");if(s.via===void 0||s.via.length===0)return{at:[i.at[0]+(s.at[0]-i.at[0])*n,i.at[1]+(s.at[1]-i.at[1])*n],way:s===i?null:uh(o(i),o(s))};let[a,l]=o(s),c=[i.at,...s.via.map(([x,b])=>[a+x,l+b]),s.at],h=c.slice(1).map((x,b)=>Math.hypot(x[0]-c[b][0],x[1]-c[b][1])),f=h.reduce((x,b)=>x+b,0),d=uh(o(i),o(s)),m=c.slice(1).map((x,b)=>uh(c[b],x)??d??0),g=c.map((x,b)=>{let v=m[b-1],w=m[b];return v===void 0?w:w===void 0?v:nc(v,w,.5)}),_=Math.min(1,Math.max(0,n))*f;for(let x=0;x<h.length;x++){let b=h[x],v=c[x],w=c[x+1];if(_<=b||x===h.length-1){let M=b===0?0:Math.min(1,_/b);return{at:[v[0]+(w[0]-v[0])*M,v[1]+(w[1]-v[1])*M],way:nc(g[x],g[x+1],M)}}_-=b}return{at:[s.at[0],s.at[1]],way:uh(o(i),o(s))}},"#stepAt"),_a=u(function(e,t){let{points:n,squares:i,turned:s}=e,o=n.length-1,a=A(this,nt,hh).call(this,e,t),l=Math.min(o-1,Math.floor(a)),c=a-l,h=n[l],f=n[l+1]??h,{at:d,way:m}=A(this,nt,b_).call(this,e,l,c),g=u((M,R)=>M<0||M>=o?null:A(this,nt,b_).call(this,e,M,R).way,"way"),_=u(M=>{let R=g(M,1),E=g(M+1,0);return R===null||E===null?null:nc(0,E-R,1)},"turnAt"),x=m??0,b=uh(h.middle??h.at,f.middle??f.at),v=(()=>{if(c>.75){let M=_(l);if(M!==null)return x+M*(c-.75)*2;if(l===o-1&&b!==null)return nc(x,b,(c-.75)*4)}else if(c<.25){let M=_(l-1);if(M!==null)return x-M*(.5-c*2);if(l===0&&b!==null)return nc(b,x,c*4)}return x})(),w=s!==null&&t-s.at<s.over?v+s.offset*(1-Math.max(0,t-s.at)/s.over):v;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(f.lift-h.lift)*c,aloft:xE*f_(A(this,nt,dh).call(this,e,a)),facing:w,from:e.from,before:i[o-1]??i[o],to:i[o]}},"#walker"),u(y_,"Walks");var p_=y_,AE=p_;var jN=u(({kind:r,start:e,duration:t},n)=>{let i=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return r==="in"?i:1-i},"fadeAt"),Er,rm,v_=class v_{constructor(){G(this,Er,new Map);G(this,rm,0)}size(){return p(this,Er).size}add(e,t,n=500){let i=`fade-${++Bi(this,rm)._}`;return p(this,Er).set(i,{id:i,kind:e,start:t,duration:n}),i}at(e){let t=[],n=[];return p(this,Er).forEach((i,s)=>{if(e>=i.start+i.duration){n.push(s),p(this,Er).delete(s);return}t.push({id:s,kind:i.kind,opacity:jN(i,e)})}),{going:t,ended:n}}end(e){p(this,Er).delete(e)}endAll(){let e=[...p(this,Er).keys()];return p(this,Er).clear(),e}};Er=new WeakMap,rm=new WeakMap,u(v_,"Fades");var __=v_,RE=__;var Tr,w_=class w_{constructor(){G(this,Tr,new Map)}size(){return p(this,Tr).size}trail(e,t,n){let i=p(this,Tr).get(e),[s,o]=i?.points??[];if(i===void 0||s===void 0||o===void 0||n-o.time>=1200){p(this,Tr).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}s.at=t,s.time=n;let a=t[0]-o.at[0],l=t[1]-o.at[1],c=Math.hypot(a,l),h=Math.floor(c/.04),[f,d]=o.at,m=o.time;i.points.splice(1,0,...Array.from({length:h},(g,_)=>{let x=(h-_)*.04/c;return{at:[f+a*x,d+l*x],time:m+(n-m)*x}}))}at(e){let t=[],n=[];return p(this,Tr).forEach((i,s)=>{if(i.points=i.points.filter(({time:o})=>e-o<1200),i.points.length===0){p(this,Tr).delete(s),n.push(s);return}t.push({id:s,points:i.points.map(({at:o,time:a})=>({at:o,age:Math.max(0,e-a)}))})}),{going:t,gone:n}}endAll(){let e=[...p(this,Tr).keys()];return p(this,Tr).clear(),e}};Tr=new WeakMap,u(w_,"Wakes");var S_=w_,M_={start:.03,by:.17,over:.5},QN=.016,eD=.004,CE=u(r=>{let[e]=r,t=[];if(e===void 0)return t;let n=r.map((o,a)=>{let l=r[a-1]??o,c=r[a+1]??o,h=l.at[0]-c.at[0],f=l.at[1]-c.at[1],d=Math.hypot(h,f);return d===0?null:[-f/d,h/d]}),i=r.reduce((o,a,l)=>{let c=r[l-1];return o.push(c===void 0?0:o[l-1]+Math.hypot(a.at[0]-c.at[0],a.at[1]-c.at[1])),o},[]),s=u((o,a)=>{let l=r[o],c=n[o],h=Math.min(1,l.age/1200);if(c==null)return null;let f=M_.start+M_.by*Math.min(1,i[o]/M_.over),d=QN*(1-h),m=[l.at[0]-e.at[0]+c[0]*f*a,l.at[1]-e.at[1]+c[1]*f*a];return[[m[0]-c[0]*d/2,m[1]-c[1]*d/2],[m[0]+c[0]*d/2,m[1]+c[1]*d/2]]},"edges");for(let o=0;o+1<r.length;o++)[1,-1].forEach(a=>{let l=s(o,a),c=s(o+1,a);if(l===null||c===null)return;let[h,f]=l,[d,m]=c;[h,d,f,f,d,m].forEach(([g,_])=>t.push(g,eD,_))});return t},"wakeShape"),PE=S_;var IE={reach:200,back:300,fade:600},sm=350,LE=u(r=>({...r,reach:r.reach/2,back:r.back/2,fade:r.fade/2,...r.falls===void 0?{}:{falls:r.falls/2},...r.clips===void 0?{}:{clips:{...r.clips,rate:r.clips.rate*2}}}),"quickerBattle"),NE=u((r,e,t)=>{let n=e?.clips.fight,i=t?.clips.die;if(n===void 0&&i===void 0)return r;let s=u(h=>Math.max(0,(h?.figures??1)-1)*(h?.stagger??0),"tail"),o=(n?.shots??[]).map(({at:h})=>h),a=o.length===0?void 0:Math.min(...o),l=o.length===0?0:(Math.max(...o)+s(e))*1e3+sm+zp,c=a===void 0?r.reach:a*1e3+sm;return{...r,reach:c,back:n===void 0?r.back:Math.max(r.back,(n.duration+s(e))*1e3-c,l-c),...a===void 0?{}:{lunge:0},...i===void 0?{}:{falls:(i.duration+s(t))*1e3},clips:{rate:1,fight:n!==void 0,die:i!==void 0}}},"clipPace"),DE=u((r,e)=>e||r.clips?.fight===!0?Math.max(r.back,(r.falls??0)+r.fade):(r.falls??0)+r.fade,"afterBlow"),I_=u((r,e=!0)=>r.reach+DE(r,e),"battleLength"),L_=.45,rc=u(r=>r.start+r.pace.reach,"blowAt"),E_=u(r=>rc(r)+DE(r.pace,r.won),"battleEnds"),T_=u(r=>Math.min(1,Math.max(0,r)),"clamp"),tD=u(r=>r*r,"easeIn"),nD=u(r=>r*r*(3-2*r),"easeInOut"),iD=u((r,e)=>{let{reach:t,back:n,fade:i,lunge:s=1,falls:o=0}=r.pace,a=e-rc(r),l=a<o?1:1-T_(i<=0?1:(a-o)/i);return a<0?{reach:tD(T_(t<=0?1:(e-r.start)/t))*s,attacker:1,fallen:1}:r.won?{reach:(1-nD(T_(n<=0?1:a/n)))*s,attacker:1,fallen:l}:{reach:s,attacker:l,fallen:0}},"battleAt"),A_=u((r,e)=>r.x===e.x&&r.y===e.y,"sameSquare"),rD=u((r,e)=>r.attacker===e.attacker||r.attacker===e.defender,"waitsFor"),on,Ar,om,Rr,C_,P_,OE,N_=class N_{constructor(){G(this,Rr);G(this,on,[]);G(this,Ar,new Set);G(this,om,0)}size(){return p(this,on).length}attacking(e){return p(this,on).some(t=>t.attacker===e)}fighting(e){return p(this,on).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return p(this,on).find(t=>!p(this,Ar).has(t.id)&&A_(t.defenderSquare,e))??null}add(e,t,n,i=t){let s={...e,id:`battle-${++Bi(this,om)._}`,start:A(this,Rr,C_).call(this,e,n,p(this,on),Math.max(t,i)),notBefore:i,pace:n};return p(this,on).push(s),s}at(e){let t=[],n=[],i=[],s=new Set;return p(this,on).forEach(o=>{if(e>=rc(o)&&!p(this,Ar).has(o.id)&&(p(this,Ar).add(o.id),n.push(o)),e>=E_(o)){i.push(o);return}t.push(...A(this,Rr,OE).call(this,o,e,s))}),A(this,Rr,P_).call(this,i),{going:t,struck:n,ended:i}}endWhere(e,t){let n=p(this,on).filter(e),i=p(this,on).filter((o,a)=>n.includes(o)||!p(this,Ar).has(o.id)&&n.some(l=>p(this,on).indexOf(l)>a&&A_(l.defenderSquare,o.defenderSquare))),s=i.filter(o=>!p(this,Ar).has(o.id));return s.forEach(o=>p(this,Ar).add(o.id)),A(this,Rr,P_).call(this,i),i.length>0&&p(this,on).forEach((o,a)=>{o.start>t&&(o.start=A(this,Rr,C_).call(this,o,o.pace,p(this,on).slice(0,a),Math.max(t,o.notBefore)))}),{struck:s,ended:i}}longest(e){return p(this,on).filter(({attacker:t})=>e.includes(t)).reduce((t,{pace:n,won:i})=>Math.max(t,I_(n,i)),0)}busyUntil(e){return p(this,on).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,E_(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};on=new WeakMap,Ar=new WeakMap,om=new WeakMap,Rr=new WeakSet,C_=u(function(e,t,n,i){return n.reduce((s,o)=>rD(o,e)?Math.max(s,E_(o)):A_(o.defenderSquare,e.defenderSquare)?Math.max(s,rc(o)-t.reach):s,i)},"#startOf"),P_=u(function(e){e.length!==0&&(k(this,on,p(this,on).filter(t=>!e.includes(t))),e.forEach(t=>p(this,Ar).delete(t.id)))},"#take"),OE=u(function(e,t,n){let{reach:i,attacker:s,fallen:o}=iD(e,t),{from:a,edge:l,fallsAt:c}=e,{clips:h}=e.pace,f=rc(e),d=u((x,b)=>({clip:{role:x,seconds:(t-b)/1e3*(h?.rate??1)}}),"playing"),m=h===void 0?{}:!e.won&&t>=f&&h.die?d("die",f):h.fight?d("fight",e.start):{},g=[],_=!n.has(e.attacker);return n.add(e.attacker),_&&(s>0||h?.fight===!0)&&g.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[a.at[0]+(l[0]-a.at[0])*i,a.at[1]+(l[1]-a.at[1])*i],lift:a.lift*(1-i),facing:e.facing,opacity:s,...m}),e.won&&t>=rc(e)&&o>0&&g.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[c.at[0],c.at[1]],lift:c.lift,facing:e.defenderFacing,opacity:o,...h?.die?d("die",f):{}}),g},"#fighters"),u(N_,"Battles");var R_=N_,UE=R_;var sD=1,oD=.04,aD=12,lD=u((r,e,t,n,i,{water:s=0,ceiling:o=sD}={})=>{let{from:a,direction:l}=wy(r,e,t,n),[c,h,f]=a,[d,m,g]=l;if(m>-1e-6)return null;let _=u(y=>[c+d*y,h+m*y,f+g*y],"at"),x=u(y=>{let[S,L,I]=_(y);return L-Math.max(s,i(S,I))},"above"),b=Math.max(0,(h-o)/-m),v=(h-s)/-m,w=oD/Math.max(1e-6,Math.hypot(d,g)),M=b;for(let y=b;;y=Math.min(v,y+w)){if(x(y)<=0){let S=M,L=y;for(let F=0;F<aD;F++){let W=(S+L)/2;x(W)>0?S=W:L=W}let[I,,O]=_(L);return[I,O]}if(y>=v)break;M=y}let[R,,E]=_(v);return[R,E]},"pickGround"),FE=lD;var am=4,ro,mh,va,Ma,Kn,sc,so,gs,gh,xh,bh,ji,lm,BE,O_,U_=class U_{constructor(e,t,n,i,s){G(this,ji);G(this,ro);G(this,mh);G(this,va);G(this,Ma);G(this,Kn);G(this,sc);G(this,so);G(this,gs);G(this,gh);G(this,xh);G(this,bh,u(e=>{let t=p(this,ro).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,i=t.height>0?(e.clientY-t.top)/t.height:0;p(this,xh).call(this,n*p(this,Kn),i*p(this,sc))},"#click"));k(this,ro,e),k(this,va,t),k(this,Ma,n),k(this,Kn,t.period().u),k(this,sc,i),k(this,xh,s),k(this,gs,document.createElement("canvas"));let{v:o}=t.period();k(this,so,o),k(this,gh,[[0,0],[-p(this,Kn),0],...o===null?[]:[[0,-o],[-p(this,Kn),-o]]]);let a=Math.max(1,Math.round(p(this,Kn)*am)),l=Math.max(1,Math.round(p(this,sc)*am));[e,p(this,gs)].forEach(c=>{c.width=a,c.height=l}),k(this,mh,e.getContext("2d")),e.addEventListener("click",p(this,bh))}dispose(){p(this,ro).removeEventListener("click",p(this,bh))}redraw(){let e=p(this,gs).getContext("2d");if(e===null)return;let t=p(this,Ma).width(),n=p(this,Ma).height(),i=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,gs).width,p(this,gs).height);for(let s=0;s<n;s++)for(let o=0;o<t;o++){let a=p(this,Ma).get(o,s),l=a.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=Jo(l).colour,p(this,gh).forEach(([f,d])=>{A(this,ji,BE).call(this,e,o,s,f,d),e.fill()});let[c,h]=p(this,va).centre(o,s);if(a.city)i.push([c,h,lh(a.city.player)[0],2.2]);else if((a.units??[]).length>0){let f=u_(a.units,null);f!==null&&i.push([c,h,lh(f.player)[0],1.4])}}i.forEach(([s,o,a,l])=>A(this,ji,O_).call(this,s,o).forEach(([c,h])=>{e.fillStyle="#000000",e.fillRect(c-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=a,e.fillRect(c-l,h-l,l*2,l*2)}))}show(e,t){let n=p(this,mh);if(n===null)return;if(n.clearRect(0,0,p(this,ro).width,p(this,ro).height),n.drawImage(p(this,gs),0,0),t!==null){let[h,f]=p(this,va).centre(t.x,t.y);n.fillStyle="#ffffff",A(this,ji,O_).call(this,h,f).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=p(this,so),s=Math.min(...e.map(([h])=>h)),o=Math.min(...e.map(([,h])=>h)),a=-p(this,Kn)*Math.floor(s/p(this,Kn)),l=i===null?0:-i*Math.floor(o/i);(i===null?[0]:[-i,0,i]).forEach(h=>[-p(this,Kn),0,p(this,Kn)].forEach(f=>{n.beginPath(),e.forEach(([d,m],g)=>{let[_,x]=A(this,ji,lm).call(this,d+a+f,m+l+h);g===0?n.moveTo(_,x):n.lineTo(_,x)}),n.closePath(),n.stroke()}))}};ro=new WeakMap,mh=new WeakMap,va=new WeakMap,Ma=new WeakMap,Kn=new WeakMap,sc=new WeakMap,so=new WeakMap,gs=new WeakMap,gh=new WeakMap,xh=new WeakMap,bh=new WeakMap,ji=new WeakSet,lm=u(function(e,t){return[e*am,t*am]},"#px"),BE=u(function(e,t,n,i=0,s=0){e.beginPath(),p(this,va).outline(t,n).forEach(([o,a],l)=>{let[c,h]=A(this,ji,lm).call(this,o+i,a+s);l===0?e.moveTo(c,h):e.lineTo(c,h)}),e.closePath()},"#outline"),O_=u(function(e,t){return(p(this,so)===null?[0]:[-p(this,so),0,p(this,so)]).flatMap(i=>[-p(this,Kn),0,p(this,Kn)].map(s=>A(this,ji,lm).call(this,e+s,t+i)))},"#everywhere"),u(U_,"Minimap3D");var D_=U_,kE=D_;var cD=u(r=>Object.entries(r.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),zE=u(r=>{let e=cD(r).sort((n,i)=>n._.charCodeAt(0)-i._.charCodeAt(0)).flatMap(({_:n,value:i})=>Array.from({length:i},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,i)=>({_:n,column:i%t,row:Math.floor(i/t)}))}},"tileYieldGrid");var GE=u((r,e)=>(r.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===r.x&&n===r.y)?.yields)??r.yields??[],"squareYields"),VE=u(r=>r.city??r.workedBy??null,"squareCity");var uD=.9,hD=u(r=>{let{columns:e,icons:t}=zE(r),n=Math.min(e,t.length),i=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:o,row:a})=>({_:s,right:o-(n-1)/2,up:(i-1)/2-a}))}},"yieldSlots"),dD=u((r,e)=>uD*e/Math.hypot(r,2),"yieldIconSize"),HE=u((r,e)=>{let[t,n]=r.centre(0,0);return Math.min(...e.edgeDirections().map(i=>{let[s,o]=e.offset(i,0,0),[a,l]=r.centre(s,o);return Math.hypot(a-t,l-n)}))},"innerOf"),WE=u(({at:r,yields:e},t)=>{let{columns:n,slots:i}=hD(e);return i.length===0?null:{at:r,size:dD(n,t),slots:i}},"laidYields"),XE=u(r=>{let e=[...r],t=e.reduce((o,{slots:a})=>o+a.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},i=new Map,s=0;return e.forEach(({at:o,size:a,slots:l})=>{l.forEach(({_:c,right:h,up:f})=>{let d=i.get(c);d===void 0&&(d=n.names.push(c)-1,i.set(c,d)),n.anchors[s*3]=o[0],n.anchors[s*3+1]=o[1],n.anchors[s*3+2]=o[2],n.slots[s*2]=h,n.slots[s*2+1]=f,n.sizes[s]=a,n.cells[s]=d,s++})}),n},"yieldMesh");var qE=u((r,{orbit:e,look:t,width:n,height:i,period:s,reach:o})=>{let a=n/i,l=zl(e,t),c=[(e.focus[0]-l[0])/e.distance,(t-l[1])/e.distance,(e.focus[1]-l[2])/e.distance],{near:h,far:f}=us(e.distance,s),d=kp(e.focus,Ly(e,s),s),m=u(([_,x])=>[(_+1)/2*n,(1-x)/2*i],"onScreen"),g=[];return r.forEach(({key:_,centre:x,outline:b})=>d.forEach(([v,w])=>{let M=u(([F,W,U])=>[F+v,W,U+w],"moved"),R=M(x),E=(R[0]-l[0])*c[0]+(R[1]-l[1])*c[1]+(R[2]-l[2])*c[2];if(E>f)return;let y=Gl(e,t,R,a);if(y===null)return;let[S]=m(y);if(S<-o||S>n+o)return;let L=b.map(F=>Gl(e,t,M(F),a));if(L.some(F=>F===null))return;let I=Math.max(...L.map(F=>m(F)[1]));if(I<-o||I>i)return;let O=Math.min(1,Math.max(0,(E-h)/(f-h)));g.push({key:_,x:S,y:I,clear:1-O*O*(3-2*O)})})),g.sort((_,x)=>_.y-x.y)},"bannerPlaces");var $E=10,fD=4e3,KE=u(r=>r-Math.PI*2*Math.round(r/(Math.PI*2)),"shortTurn"),pD=350,mD=2e3,gD=8,ZE=u(r=>({...r,...r.hitPoints?{hitPoints:{...r.hitPoints}}:{},...r.defence?{defence:{...r.defence}}:{},...r.improvements?{improvements:[...r.improvements]}:{}}),"keptUnit"),JE=u(r=>Object.fromEntries(Object.entries(r).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),xD=u(r=>r&&{...r,...r.growth?{growth:JE(r.growth)}:{},...r.build?{build:JE(r.build)}:{},...r.yields?{yields:r.yields.map(e=>({...e}))}:{}},"keptCity"),bD=500,yD=.25,_D=400,vD=.5,Ft,Eh,Th,qe,it,Ea,lc,Ah,ht,Dt,zn,cc,Rh,Ta,uo,uc,Ch,Ph,pi,hc,Pi,pn,Ii,Aa,ho,dc,Zn,xs,Li,fo,fc,pc,Jt,mi,po,Pr,bs,Ir,ys,Ih,mo,go,gi,Ra,xo,Ca,Lr,Ni,Jn,Di,Nr,Dr,Lh,Nh,Dh,Or,Ur,_s,vs,xi,mc,gc,Ms,Oi,tr,xc,Oh,bc,bo,Uh,Pa,Fr,Fh,Ss,yc,_c,Ia,vc,La,yo,Na,Mc,nr,Bh,Ui,_o,Sc,kh,wc,zh,vo,Br,Da,Oa,Gh,Vh,Ec,kr,Tc,Hh,Ac,Rc,zr,P,jE,B_,QE,eT,oc,k_,oo,tT,nT,ac,cm,z_,yh,ao,G_,_h,V_,vh,H_,W_,iT,rT,sT,oT,um,Mh,X_,aT,hm,lT,cT,uT,dm,hT,q_,dT,Sa,fm,fT,pT,mT,pm,lo,mm,Y_,gT,xT,$_,bT,K_,co,yT,Z_,Cr,Qi,Sh,_T,vT,J_,er,MT,gm,ST,xm,j_,Q_,ev,wT,ET,TT,AT,wa,bm,tv,ym,RT,CT,nv,Yt,wh,PT,iv,rv,sv=class sv{constructor(e,t=p1){G(this,P);G(this,Ft);G(this,Eh);G(this,Th,[]);G(this,qe);G(this,it);G(this,Ea,null);G(this,lc,0);G(this,Ah,"");G(this,ht);G(this,Dt,null);G(this,zn,null);G(this,cc);G(this,Rh);G(this,Ta);G(this,uo,null);G(this,uc,null);G(this,Ch);G(this,Ph,!1);G(this,pi);G(this,hc);G(this,Pi,new Map);G(this,pn);G(this,Ii,new Map);G(this,Aa,new Map);G(this,ho,new Map);G(this,dc,new Map);G(this,Zn,new Map);G(this,xs,new Set);G(this,Li,new Map);G(this,fo,0);G(this,fc,new Map);G(this,pc,new Map);G(this,Jt,new UE);G(this,mi,new RE);G(this,po,new PE);G(this,Pr,new Map);G(this,bs,new Map);G(this,Ir,new Map);G(this,ys,new Map);G(this,Ih,!1);G(this,mo,new Map);G(this,go,null);G(this,gi,new Map);G(this,Ra,new Map);G(this,xo,new Set);G(this,Ca,new Map);G(this,Lr,new Map);G(this,Ni,new Set);G(this,Jn);G(this,Di,null);G(this,Nr,null);G(this,Dr,null);G(this,Lh,u(()=>{A(this,P,Sa).call(this)&&k(this,Dr,null),A(this,P,fm).call(this)},"#pressed"));G(this,Nh,u(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||A(this,P,fm).call(this)},"#keyed"));G(this,Dh);G(this,Or,null);G(this,Ur,null);G(this,_s,!1);G(this,vs);G(this,xi,u(()=>{let e=p(this,Ur);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),k(this,Ur,null),document.removeEventListener("keydown",p(this,xi),!0),e.open&&p(this,pi).endTooltip(p(this,Ft)))},"#endHover"));G(this,mc,null);G(this,gc,!0);G(this,Ms,new Map);G(this,Oi);G(this,tr,new Map);G(this,xc,!1);G(this,Oh,!1);G(this,bc,"");G(this,bo,new Map);G(this,Uh,null);G(this,Pa,[]);G(this,Fr,null);G(this,Fh,u(()=>{},"#stopRestyled"));G(this,Ss,null);G(this,yc,!1);G(this,_c,-1/0);G(this,Ia,new Set);G(this,vc,new Set);G(this,La,new Map);G(this,yo,new Map);G(this,Na,[]);G(this,Mc,0);G(this,nr,null);G(this,Bh,null);G(this,Ui,!0);G(this,_o);G(this,Sc,new Map);G(this,kh,u(e=>p(this,Sc).get(e)?.id??null,"#modelOf"));G(this,wc,!1);G(this,zh,u(()=>{},"#stopUnitSize"));G(this,vo,!1);G(this,Br,!0);G(this,Da,!1);G(this,Oa,new Map);G(this,Gh);G(this,Vh,u(()=>{},"#stopArtChanged"));G(this,Ec,!1);G(this,kr);G(this,Tc);G(this,Hh,"");G(this,Ac,u(()=>A(this,P,rv).call(this),"#resizeHandler"));G(this,Rc,null);G(this,zr,!1);k(this,Ft,e.mapCanvas),k(this,Eh,e.coveredBy),k(this,kr,e.art),k(this,Oi,e.cityBanners??null),k(this,hc,{cityName:e.cityName,unitStatus:e.unitStatus}),k(this,_o,by*(e.unitSize?.get()??1)),k(this,Tc,e.art.id()),this.world=e.world,k(this,qe,new nE(e.world)),p(this,qe).keepCities((i,s)=>{let o=`${i},${s}`;for(let a of p(this,gi).values())if(a.square===o)return a.city}),k(this,pn,new AE(p(this,qe).layout.period())),k(this,Jn,e.walks),k(this,Gh,HE(p(this,qe).layout,e.world.topology())),k(this,Na,e.world.tiles()),k(this,Mc,p(this,Na).length),k(this,Rh,e.cameraDistance),k(this,Ch,e.lockVerticalEdges);let n=e.cameraDistance.get();if(k(this,ht,A(this,P,Cr).call(this,{...$w(p(this,qe).layout.centre(0,0)),...n===null?{}:{distance:n}})),k(this,Ta,p(this,ht).distance),this.portal=new vv(e,{centre:u(()=>A(this,P,yT).call(this),"centre"),centreOn:u((i,s)=>A(this,P,pT).call(this,i,s),"centreOn"),changed:u(()=>{k(this,ht,A(this,P,Cr).call(this,p(this,ht))),A(this,P,Yt).call(this)},"changed"),visible:u((i,s,o)=>A(this,P,lo).call(this,i,s,o),"visible")}),k(this,it,t(e.mapCanvas,{period:p(this,qe).layout.period(),ground:p(this,qe).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&k(this,mc,new kE(e.minimapCanvas,p(this,qe).layout,e.world,p(this,qe).extentV(),(i,s)=>{k(this,Dr,null),A(this,P,Sh).call(this,{...p(this,Dt)?.to??p(this,ht),focus:[i,s]})})),e.debug&&e.mapCanvas.parentElement&&(k(this,Ea,A(this,P,PT).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,Oi)!==null&&e.mapCanvas.parentElement){let i=document.createElement("canvas");i.className="map3d-banners",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(i),k(this,Fr,i)}else k(this,Oi,null);k(this,bc,A(this,P,xm).call(this)),p(this,qe).queueAll(...A(this,P,co).call(this)),A(this,P,wa).call(this),this.portal.on("activate-unit",i=>e.activateUnit(i)),k(this,pi,e.squares),k(this,vs,e.playerId),k(this,Dh,e.transport),k(this,cc,new gE(e.mapCanvas,{orbit:u(()=>p(this,ht),"orbit"),lookHeight:u(()=>p(this,zn)??0,"lookHeight"),setOrbit:u(i=>this.setOrbit(i),"setOrbit"),settle:u(i=>A(this,P,Cr).call(this,i),"settle")},{click:u((i,s)=>A(this,P,gT).call(this,i,s),"click"),menu:u((i,s,o,a,l)=>A(this,P,xT).call(this,i,s,o,a,l),"menu"),menuOnRightClick:u(()=>p(this,pi).menuOnRightClick(),"menuOnRightClick"),menuOpen:u(()=>p(this,pi).menuOpen(),"menuOpen"),hover:u(i=>A(this,P,bT).call(this,i),"hover")})),window.addEventListener("resize",p(this,Ac)),document.addEventListener("keydown",p(this,Nh),!0),e.mapCanvas.addEventListener("pointerdown",p(this,Lh),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(k(this,Rc,new ResizeObserver(p(this,Ac))),p(this,Rc).observe(e.mapCanvas.parentElement)),A(this,P,rv).call(this),A(this,P,Yt).call(this),k(this,zh,e.unitSize?.onChange(()=>{let i=by*(e.unitSize?.get()??1);i!==p(this,_o)&&!p(this,zr)&&(k(this,_o,i),A(this,P,wa).call(this),A(this,P,Yt).call(this))})??(()=>{})),k(this,Vh,e.artChanged?.(()=>{p(this,zr)||(k(this,Br,!0),A(this,P,j_).call(this))})??(()=>{})),k(this,Fh,p(this,Oi)?.restyled(()=>{p(this,zr)||A(this,P,j_).call(this)})??(()=>{})),e.models?.forEach(({url:i},s)=>A(this,P,jE).call(this,i,s))}land(){return p(this,qe)}orbit(){return p(this,ht)}moving(){return p(this,Dt)!==null||p(this,cc).moving()}setOrbit(e){p(this,xi).call(this),k(this,Dt,null),k(this,ht,A(this,P,Cr).call(this,e)),A(this,P,Yt).call(this)}activeUnit(){return{unit:p(this,nr),pendingTile:p(this,Bh)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,Dt)?.to??p(this,ht);A(this,P,Sh).call(this,{...t,yaw:t.yaw+e*Sy},A(this,P,B_).call(this)+e*Sy)}heading(){return{turn:(p(this,Dt)?.to??p(this,ht)).yaw,directions:Mv(p(this,qe).layout,this.world.topology())}}faceNorth(){A(this,P,Sh).call(this,{...p(this,Dt)?.to??p(this,ht),yaw:0},KE(-p(this,ht).yaw))}debugViewModes(){return[]}dispose(){A(this,P,nv).call(this,!0),k(this,zr,!0),p(this,pn).endAll(0),p(this,Jt).endAll(0),p(this,mi).endAll(),p(this,Ir).clear(),p(this,ys).clear(),p(this,mo).clear(),k(this,go,null),p(this,Pr).clear(),p(this,bs).clear(),p(this,gi).clear(),p(this,Ra).clear(),p(this,Ca).clear(),p(this,Lr).clear(),p(this,Ni).clear(),p(this,Zn).clear(),p(this,xs).clear(),p(this,Li).clear(),document.removeEventListener("keydown",p(this,Nh),!0),p(this,Ft).removeEventListener("pointerdown",p(this,Lh),!0),p(this,zh).call(this),p(this,Vh).call(this),p(this,Fh).call(this),p(this,Fr)?.remove(),p(this,tr).clear(),p(this,bo).clear(),p(this,xi).call(this),p(this,cc).dispose(),p(this,mc)?.dispose(),window.removeEventListener("resize",p(this,Ac)),p(this,Rc)?.disconnect(),p(this,Ss)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,Ss)),k(this,Ss,null),p(this,Ea)?.remove(),p(this,it).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Or);e!==null&&(k(this,Or,null),p(this,Ft).classList.remove("picking-tile"),e.window?.close())}flush(){A(this,P,J_).call(this),A(this,P,Yt).call(this)}mapEvent(e){if(e.kind==="moved"){A(this,P,eT).call(this,e.unit,e.from,e.to),A(this,P,pm).call(this,e.unit.id,e.from,e.to);return}A(this,P,pm).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),A(this,P,pm).call(this,e.defender.id,e.defender.tile,e.attacker.tile),A(this,P,QE).call(this,e)}measureCovered(){let e=p(this,Ft).getBoundingClientRect();k(this,Th,p(this,Eh).map(t=>{let n=t.getBoundingClientRect(),i=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,e.left)-e.left,top:Math.max(n.top,i.top,e.top)-e.top,right:Math.min(n.right,i.right,e.right)-e.left,bottom:Math.min(n.bottom,i.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:i,bottom:s})=>i>t&&s>n))}pickTile(e,t,n){this.endPicking();let i={accept:e,onPick:t,window:null};k(this,Or,i),p(this,Ft).classList.add("picking-tile"),i.window=p(this,pi).prompt(n,()=>{p(this,Or)===i&&(k(this,Or,null),p(this,Ft).classList.remove("picking-tile"))})}picking(){return p(this,Or)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,La).set(t,e),p(this,fc).set(t,++Bi(this,fo)._)}redrawArt(){let e=p(this,kr).id();return e===p(this,Tc)?"unchanged":(k(this,Tc,e),k(this,Br,!0),"redrawn")}releaseTiles(){let e=p(this,Ih)&&A(this,P,hm).call(this);e&&p(this,La).size>0&&p(this,go)===null&&k(this,go,new Set([...p(this,bs).keys(),...p(this,Ii).keys()])),p(this,La).forEach((t,n)=>{let i=p(this,fc).get(n)??0;e&&!p(this,mo).has(n)&&p(this,mo).set(n,p(this,Pr).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),p(this,yo).set(n,t),p(this,pc).set(n,i),p(this,gi).forEach(s=>{s.square===n&&i>s.after&&(s.patched=!0)})}),p(this,La).clear(),p(this,fc).clear(),p(this,yo).size>0&&A(this,P,Yt).call(this)}setActiveUnit(e,t){let n=p(this,nr)?.tile;if(k(this,nr,e),k(this,Bh,t??null),A(this,P,Sa).call(this)&&A(this,P,fT).call(this)&&A(this,P,fm).call(this),A(this,P,Sa).call(this)){A(this,P,Yt).call(this);return}k(this,Dr,null);let i=p(this,Nr);k(this,Di,e?.id??null),k(this,Nr,e?.tile??null),[n,i,e?.tile].forEach(s=>{s&&A(this,P,er).call(this,s.x,s.y)}),A(this,P,Yt).call(this)}setWaiting(e){k(this,Ec,e),e&&p(this,xi).call(this)}showActiveUnit(e){p(this,Ui)||(k(this,Ui,!0),p(this,qe).showTowns(!0,...A(this,P,co).call(this)),A(this,P,wa).call(this),A(this,P,Yt).call(this))}shown(){return{units:p(this,Ui),yields:p(this,vo),waiting:p(this,Ec)}}tilesPending(){return p(this,yo).size}toggleUnits(){k(this,Ui,!p(this,Ui)),p(this,qe).showTowns(p(this,Ui),...A(this,P,co).call(this)),A(this,P,wa).call(this),k(this,_s,!0),A(this,P,Yt).call(this)}toggleYields(){k(this,vo,!p(this,vo)),k(this,Br,!0),k(this,_s,!0),A(this,P,Yt).call(this)}zoomBy(e){p(this,xi).call(this),k(this,ht,A(this,P,Cr).call(this,kl(p(this,ht),e))),p(this,Dt)!==null&&(p(this,Dt).from=A(this,P,Cr).call(this,kl(p(this,Dt).from,e)),p(this,Dt).to=A(this,P,Cr).call(this,kl(p(this,Dt).to,e))),A(this,P,Yt).call(this)}};Ft=new WeakMap,Eh=new WeakMap,Th=new WeakMap,qe=new WeakMap,it=new WeakMap,Ea=new WeakMap,lc=new WeakMap,Ah=new WeakMap,ht=new WeakMap,Dt=new WeakMap,zn=new WeakMap,cc=new WeakMap,Rh=new WeakMap,Ta=new WeakMap,uo=new WeakMap,uc=new WeakMap,Ch=new WeakMap,Ph=new WeakMap,pi=new WeakMap,hc=new WeakMap,Pi=new WeakMap,pn=new WeakMap,Ii=new WeakMap,Aa=new WeakMap,ho=new WeakMap,dc=new WeakMap,Zn=new WeakMap,xs=new WeakMap,Li=new WeakMap,fo=new WeakMap,fc=new WeakMap,pc=new WeakMap,Jt=new WeakMap,mi=new WeakMap,po=new WeakMap,Pr=new WeakMap,bs=new WeakMap,Ir=new WeakMap,ys=new WeakMap,Ih=new WeakMap,mo=new WeakMap,go=new WeakMap,gi=new WeakMap,Ra=new WeakMap,xo=new WeakMap,Ca=new WeakMap,Lr=new WeakMap,Ni=new WeakMap,Jn=new WeakMap,Di=new WeakMap,Nr=new WeakMap,Dr=new WeakMap,Lh=new WeakMap,Nh=new WeakMap,Dh=new WeakMap,Or=new WeakMap,Ur=new WeakMap,_s=new WeakMap,vs=new WeakMap,xi=new WeakMap,mc=new WeakMap,gc=new WeakMap,Ms=new WeakMap,Oi=new WeakMap,tr=new WeakMap,xc=new WeakMap,Oh=new WeakMap,bc=new WeakMap,bo=new WeakMap,Uh=new WeakMap,Pa=new WeakMap,Fr=new WeakMap,Fh=new WeakMap,Ss=new WeakMap,yc=new WeakMap,_c=new WeakMap,Ia=new WeakMap,vc=new WeakMap,La=new WeakMap,yo=new WeakMap,Na=new WeakMap,Mc=new WeakMap,nr=new WeakMap,Bh=new WeakMap,Ui=new WeakMap,_o=new WeakMap,Sc=new WeakMap,kh=new WeakMap,wc=new WeakMap,zh=new WeakMap,vo=new WeakMap,Br=new WeakMap,Da=new WeakMap,Oa=new WeakMap,Gh=new WeakMap,Vh=new WeakMap,Ec=new WeakMap,kr=new WeakMap,Tc=new WeakMap,Hh=new WeakMap,Ac=new WeakMap,Rc=new WeakMap,zr=new WeakMap,P=new WeakSet,jE=u(function(e,t){p(this,it).loadModels?.(e,(n,i)=>{if(p(this,zr))return;let s=i.filter(o=>(p(this,Sc).get(o)?.rank??1/0)>=t);s.length!==0&&(s.forEach(o=>p(this,Sc).set(o,{id:n,rank:t})),k(this,wc,!0),A(this,P,Yt).call(this))}).catch(n=>console.warn("The 3D map's models couldn't be loaded:",n))},"#loadModels"),B_=u(function(){let e=p(this,Dt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),QE=u(function({attacker:e,defender:t,winner:n}){let i=p(this,Jn)?.speed()??"normal",s=performance.now();if(typeof requestAnimationFrame!="function"||Ei()||i==="off"||e.player!==p(this,vs)&&t.player!==p(this,vs)&&!(p(this,Jn)?.rivals()??!0)||!A(this,P,lo).call(this,e.tile.x,e.tile.y,-.5)&&!A(this,P,lo).call(this,t.tile.x,t.tile.y,-.5))return;let o=this.world.get(e.tile.x,e.tile.y).units.find(({id:W})=>W===e.id),a=`${t.tile.x},${t.tile.y}`,l=this.world.get(t.tile.x,t.tile.y),c=[...p(this,gi).values()].filter(({square:W,patched:U})=>W===a&&!U).at(-1),h=c===void 0?l.units.filter(({id:W})=>!p(this,Ni).has(W)).map(ZE):c.units.filter(({id:W})=>!(c.won&&W===c.defender));if(p(this,Ni).has(e.id)||!h.some(({id:W})=>W===t.id))return;let f=u(W=>{let U=W===void 0?null:A(this,P,_h).call(this,[W]);return U===null?null:p(this,it).rigFacts?.(U)??null},"facts"),d=f(o??p(this,Ii).get(e.id)),m=NE(IE,d,n==="attacker"?f(h.find(({id:W})=>W===t.id)):d),g=i==="fast"?LE(m):m,_=p(this,Jt).busyUntil([e.id,t.id]),x=Math.max(I_(g),p(this,Jt).longest([e.id,t.id]));_!==null&&_-s>Math.max(mD,2*x)&&A(this,P,Mh).call(this,p(this,Jt).endWhere(W=>W.attacker===e.id||W.attacker===t.id,s)),A(this,P,k_).call(this,e.id);let[b,v]=p(this,qe).layout.centre(e.tile.x,e.tile.y),[w,M]=p(this,qe).layout.centre(t.tile.x,t.tile.y),{u:R,v:E}=p(this,qe).layout.period(),y=u((W,U)=>U===null?W:W-U*Math.round(W/U),"short"),S=y(w-b,R),L=y(M-v,E),I=`${e.tile.x},${e.tile.y}`,O=p(this,Jt).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:A(this,P,oc).call(this,e.tile),edge:[b+S*L_,v+L*L_],fallsAt:A(this,P,oc).call(this,t.tile),facing:p(this,Pi).get(e.id)??Math.atan2(S,L),defenderFacing:p(this,Pi).get(t.id)??Math.atan2(-S,-L)},s,g,p(this,pn).endsAt(e.id)??s),F=d?.clips.fight?.shots??[];g.clips?.fight&&d!==null&&F.length>0&&p(this,Ca).set(O.id,{times:m1(F,d.figures,d.stagger),left:new Set,target:A(this,P,yh).call(this,O.fallsAt.at,O.fallsAt.lift+Ny),figures:d.figures,rate:g.clips.rate}),p(this,gi).set(O.id,{square:a,city:c?.city??xD(l.city),units:h,after:p(this,fo),won:n==="attacker",defender:t.id,patched:!1}),o!==void 0&&p(this,Ii).set(e.id,o),[e.id,t.id].forEach(W=>p(this,Li).set(W,{squares:[I,a],after:p(this,fo)})),A(this,P,er).call(this,e.tile.x,e.tile.y),A(this,P,er).call(this,t.tile.x,t.tile.y),A(this,P,Yt).call(this)},"#fight"),eT=u(function(e,t,n){let i=p(this,Jn)?.speed()??"normal";if(e.id===p(this,Di)&&k(this,Nr,n),typeof requestAnimationFrame!="function"||Ei()||i==="off")return;if(e.player!==p(this,vs)&&p(this,Jt).attacking(e.id)){p(this,Li).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,fo)});return}A(this,P,Mh).call(this,p(this,Jt).endWhere(({attacker:f,defender:d})=>f===e.id||d===e.id,performance.now()));let s=p(this,pn).walking(e.id),o=this.world.get(t.x,t.y).units.find(({id:f})=>f===e.id)??(A(this,P,oo).call(this,e.id)?p(this,Ii).get(e.id):void 0),a=e.player===p(this,vs);if(o===void 0||!a&&!s&&(!(p(this,Jn)?.rivals()??!0)||!A(this,P,lo).call(this,t.x,t.y,-.5)&&!A(this,P,lo).call(this,n.x,n.y,-.5)))return;let l=a?vE:ME;p(this,Ii).set(e.id,o),p(this,Li).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,fo)}),A(this,P,k_).call(this,e.id);let c=Dl(Nl(o._,o.__??[])),h=c?void 0:p(this,qe).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);p(this,pn).step(e.id,t,n,A(this,P,oc).call(this,t),{...A(this,P,oc).call(this,n),...h===void 0?{}:{via:h}},performance.now(),i==="fast"?SE(l):l,c),A(this,P,Yt).call(this)},"#walk"),oc=u(function({x:e,y:t},n=!!this.world.get(e,t).city){let[i,s]=p(this,qe).layout.centre(e,t),o=Math.max(0,p(this,qe).surfaceAt(i,s)),a=[i,s+(n?ua:0)];return{at:a,lift:o-Math.max(0,p(this,qe).surfaceAt(...a)),middle:[i,s]}},"#standing"),k_=u(function(e){p(this,xs).delete(e)&&p(this,Zn).forEach((t,n)=>{let i=t.units.filter(s=>s!==e);if(i.length!==t.units.length){if(i.length===0){p(this,Zn).delete(n),A(this,P,ao).call(this,n);return}p(this,Zn).set(n,{...t,units:i})}})},"#stepsOn"),oo=u(function(e){return p(this,pn).walking(e)||p(this,xs).has(e)||p(this,Jt).attacking(e)||p(this,Ni).has(e)},"#leftOff"),tT=u(function(e){if(p(this,pn).dropped().forEach(i=>A(this,P,ao).call(this,i)),p(this,Zn).forEach(i=>A(this,P,ac).call(this,i)),p(this,pn).size()===0)return;if(Ei()||(p(this,Jn)?.speed()??"normal")==="off"){A(this,P,vh).call(this,p(this,pn).endAll(e));return}let{going:t,ended:n}=p(this,pn).at(e);A(this,P,vh).call(this,n),t.forEach(i=>{A(this,P,ac).call(this,i,!0)!==null&&i.units.some(o=>{let a=p(this,Ii).get(o);return a!==void 0&&Nl(a._,a.__??[]).shape==="ship"})&&p(this,po).trail(i.id,i.at,e)})},"#placeWalkers"),nT=u(function(e){if(p(this,po).size()===0)return;if(Ei()||(p(this,Jn)?.speed()??"normal")==="off"){p(this,po).endAll().forEach(i=>p(this,it).wake(i,null));return}let{going:t,gone:n}=p(this,po).at(e);n.forEach(i=>p(this,it).wake(i,null)),t.forEach(({id:i,points:s})=>{let[o]=s;if(o===void 0){p(this,it).wake(i,null);return}let[a,l]=A(this,P,z_).call(this,o.at);p(this,it).wake(i,[a,0,l],CE(s))})},"#placeWakes"),ac=u(function(e,t=!1){let n=A(this,P,G_).call(this,e.units),i=null;if(t){let s=p(this,dc).get(e.id),o=(s?.by??0)+(s===void 0?0:Math.hypot(e.at[0]-s.at[0],e.at[1]-s.at[1]));p(this,dc).set(e.id,{at:[e.at[0],e.at[1]],by:o}),i={role:"move",seconds:o/l1}}return A(this,P,cm).call(this,e,n,1,i),n},"#drawWalker"),cm=u(function({id:e,at:t,lift:n,facing:i,aloft:s=0},o,a=1,l=null){let c=o===null?null:JSON.stringify(o);c!==(p(this,ho).get(e)??null)&&(p(this,it).setWalker(e,o),c===null?p(this,ho).delete(e):p(this,ho).set(e,c)),o!==null&&(p(this,it).placeWalker(e,A(this,P,yh).call(this,t,n),i,s),p(this,it).fadeWalker(e,a),p(this,it).poseWalker?.(e,l?.role??null,l?.seconds??0))},"#drawFigure"),z_=u(function(e){let{u:t,v:n}=p(this,qe).layout.period(),i=u((s,o)=>o===null?s:(s%o+o)%o,"within");return[i(e[0],t),i(e[1],n)]},"#wrapped"),yh=u(function(e,t){let[n,i]=A(this,P,z_).call(this,e);return[n,Math.max(0,p(this,qe).surfaceAt(n,i))+t,i]},"#onLand"),ao=u(function(e){p(this,dc).delete(e),p(this,ho).delete(e)&&p(this,it).setWalker(e,null)},"#takeAway"),G_=u(function(e){let t=e.flatMap(n=>{let i=p(this,Ii).get(n);return i===void 0?[]:[i]});return A(this,P,_h).call(this,t)},"#walkerMarker"),_h=u(function(e,t=p(this,Di)){return h_({city:null,units:e},t,p(this,Ui),p(this,hc),()=>0,p(this,_o),p(this,kh))},"#unitsMarker"),V_=u(function({units:e}){return e.some(t=>p(this,Li).has(t))},"#awaitsPatch"),vh=u(function(e){let t=new Set;e.forEach(n=>{let i={...n,units:n.units.filter(s=>!p(this,Jt).attacking(s))};if(i.units.length>0&&A(this,P,V_).call(this,i)){p(this,Zn).set(i.id,i),i.units.forEach(s=>p(this,xs).add(s)),A(this,P,ac).call(this,i);return}A(this,P,ao).call(this,n.id),n.units.forEach(s=>p(this,xs).delete(s)),A(this,P,H_).call(this,n.units,t)}),A(this,P,W_).call(this,t)},"#walksEnded"),H_=u(function(e,t){e.forEach(n=>{A(this,P,oo).call(this,n)&&!p(this,Ni).has(n)||(p(this,Aa).get(n)?.forEach(i=>t.add(i)),p(this,Aa).delete(n),p(this,Ii).delete(n))})},"#release"),W_=u(function(e){let t=p(this,Di);t!==null&&t!==(p(this,nr)?.id??null)&&!p(this,pn).walking(t)&&!p(this,Jt).attacking(t)&&A(this,P,dT).call(this,e),e.forEach(n=>{let[i,s]=n.split(",").map(Number);A(this,P,er).call(this,i,s)})},"#released"),iT=u(function(e){let t=new Set;if(p(this,Jt).size()===0){A(this,P,um).call(this,t);return}if(Ei()||(p(this,Jn)?.speed()??"normal")==="off"){A(this,P,Mh).call(this,p(this,Jt).endAll(e)),A(this,P,um).call(this,t);return}let{going:n,struck:i,ended:s}=p(this,Jt).at(e);i.forEach(o=>A(this,P,X_).call(this,o,!0)),n.forEach(o=>{if(!o.fallen&&p(this,pn).walking(o.unit)){A(this,P,ao).call(this,o.id);return}A(this,P,hT).call(this,o)&&t.add(A(this,P,oT).call(this,o))}),A(this,P,rT).call(this,e,n,t),A(this,P,q_).call(this,s),A(this,P,um).call(this,t)},"#placeBattles"),rT=u(function(e,t,n){t.forEach(({id:i,battle:s,at:o,lift:a,fallen:l,clip:c})=>{let h=p(this,Ca).get(s);h===void 0||l||c?.role!=="fight"||h.times.forEach((f,d)=>{if(h.left.has(d)||c.seconds<f.leaves)return;let m=p(this,it).jointAt?.(i,f.figure,f.joint)??A(this,P,yh).call(this,o,a+Ny),{u:g,v:_}=p(this,qe).layout.period(),x=u((w,M,R)=>R===null?w:w+R*Math.round((M-w)/R),"near"),b=[x(h.target[0],m[0],g),h.target[1],x(h.target[2],m[2],_)],v=e-(c.seconds-f.leaves)*1e3/h.rate;h.left.add(d),p(this,Lr).set(`${s}-shot-${d}`,{battle:s,from:m,to:g1(m,b,f.figure,h.figures),leaves:v,lands:v+sm/h.rate,rate:h.rate})})}),p(this,Lr).forEach(({battle:i,from:s,to:o,leaves:a,lands:l,rate:c},h)=>{if(!p(this,ho).has(i)){p(this,it).shot?.(h,null),p(this,Lr).delete(h);return}if(e<l){let m=(e-a)/(l-a);p(this,it).shot?.(h,x1(s,o,m),m);return}p(this,it).shot?.(h,null);let f=`${h}-hit`,d=(e-l)*c/zp;if(d<1){p(this,xo).add(f),p(this,it).puff(f,o,d),n.add(f);return}p(this,Lr).delete(h)})},"#placeShots"),sT=u(function(e){p(this,Ca).delete(e),p(this,Lr).forEach((t,n)=>{t.battle===e&&(p(this,it).shot?.(n,null),p(this,it).puff(`${n}-hit`,null),p(this,xo).delete(`${n}-hit`),p(this,Lr).delete(n))})},"#shotsOver"),oT=u(function({battle:e,at:t,lift:n,opacity:i}){let s=`${e}-puff`;return p(this,xo).add(s),p(this,it).puff(s,A(this,P,yh).call(this,t,n),1-i),s},"#puff"),um=u(function(e){p(this,xo).forEach(t=>{e.has(t)||(p(this,xo).delete(t),p(this,it).puff(t,null))})},"#puffsOver"),Mh=u(function({struck:e,ended:t}){e.forEach(n=>A(this,P,X_).call(this,n,!1)),A(this,P,q_).call(this,t)},"#battlesOver"),X_=u(function(e,t){let{square:n,units:i}=p(this,gi).get(e.id)??{square:"",units:[]},{x:s,y:o}=e.defenderSquare,a=[...p(this,gi).entries()].find(([f,d])=>f!==e.id&&d.square===n)?.[1],l=new Set((a?.units??this.world.get(s,o).units).map(({id:f})=>f)),c=e.won?e.defender:e.attacker,h=i.filter(({id:f})=>e.won&&f===e.defender||!l.has(f)&&!A(this,P,oo).call(this,f));p(this,gi).delete(e.id),p(this,qe).changed([[s,o]],...A(this,P,co).call(this)),p(this,Li).has(c)&&p(this,Ni).add(c),t&&e.won&&h.length>0&&p(this,Ra).set(e.id,h),A(this,P,er).call(this,s,o)},"#blow"),aT=u(function(e,t,{shown:n,ringed:i,inCity:s}){if((p(this,Pr).get(e)?.units??[]).forEach(({id:o})=>{p(this,bs).get(o)===e&&p(this,bs).delete(o)}),t.length===0?p(this,Pr).delete(e):p(this,Pr).set(e,{units:t.map(ZE),shown:n,ringed:i,inCity:s}),t.forEach(({id:o})=>p(this,bs).set(o,e)),p(this,Ir).size>0){let o=[...p(this,Ir).entries()].filter(([,a])=>a.units.some(l=>t.some(({id:c})=>c===l.id))).map(([a])=>a);o.forEach(a=>p(this,mi).end(a)),A(this,P,dm).call(this,o)}},"#drawnOn"),hm=u(function(){return typeof requestAnimationFrame=="function"&&!Ei()&&(p(this,Jn)?.speed()??"normal")!=="off"},"#fadesShown"),lT=u(function(e){return p(this,bs).has(e)||A(this,P,oo).call(this,e)},"#drawnAnywhere"),cT=u(function(e,t){let n=[],i=[];if(e.forEach((l,c)=>{let h=l.units.filter(({id:d})=>!A(this,P,lT).call(this,d)),f=p(this,Pr).get(c)?.shown??null;l.shown!==null&&h.some(({id:d})=>d===l.shown)&&n.push([c,l,h]),l.units.length===0&&f!==null&&!t.has(f)&&i.push([c,f])}),n.length+i.length===0||n.length+i.length>gD)return;let s=u(([l])=>{let[c,h]=l.split(",").map(Number);return A(this,P,lo).call(this,c,h,0)},"onScreen"),o=performance.now(),a=(p(this,Jn)?.speed()??"normal")==="fast"?500/2:500;n.filter(s).forEach(([l,c,h])=>{let[f,d]=l.split(",").map(Number);p(this,Ir).set(p(this,mi).add("out",o,a),{units:[...h.filter(({id:m})=>m===c.shown),...h.filter(({id:m})=>m!==c.shown)],shown:c.ringed?c.shown:null,at:A(this,P,oc).call(this,{x:f,y:d},c.inCity),facing:c.shown===null?0:p(this,Pi).get(c.shown)??0})}),i.filter(s).forEach(([l,c])=>{p(this,ys).set(p(this,mi).add("in",o,a),{key:l,unit:c}),p(this,it).fadeMarker(l,0)}),A(this,P,Yt).call(this)},"#fadeChanged"),uT=u(function(e){if(p(this,mi).size()===0)return;if(!A(this,P,hm).call(this)){A(this,P,dm).call(this,p(this,mi).endAll());return}let{going:t,ended:n}=p(this,mi).at(e),i=[];t.forEach(({id:s,opacity:o})=>{let a=p(this,Ir).get(s),l=p(this,ys).get(s);if(a!==void 0){let c=A(this,P,_h).call(this,a.units,a.shown);if(c===null){p(this,mi).end(s),i.push(s);return}A(this,P,cm).call(this,{id:s,at:[a.at.at[0],a.at.at[1]],lift:a.at.lift,facing:a.facing},c,o);return}if(l!==void 0){if((p(this,Pr).get(l.key)?.shown??null)!==l.unit){p(this,mi).end(s),i.push(s);return}p(this,it).fadeMarker(l.key,o)}}),A(this,P,dm).call(this,[...n,...i])},"#placeFades"),dm=u(function(e){e.forEach(t=>{let n=p(this,ys).get(t);p(this,Ir).delete(t)&&A(this,P,ao).call(this,t),n!==void 0&&(p(this,ys).delete(t),[...p(this,ys).values()].some(({key:i})=>i===n.key)||p(this,it).fadeMarker(n.key,1))})},"#fadesOver"),hT=u(function(e){let t=p(this,Ra).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?A(this,P,_h).call(this,t):A(this,P,G_).call(this,[e.unit]);return A(this,P,cm).call(this,e,n,e.opacity,e.clip??null),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),q_=u(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:i,attacker:s,won:o,from:a,attackerSquare:l,facing:c}=n;if(A(this,P,sT).call(this,i),A(this,P,ao).call(this,`${i}-fallen`),p(this,Ra).delete(i),p(this,gi).delete(i)&&p(this,qe).changed([[n.defenderSquare.x,n.defenderSquare.y]],...A(this,P,co).call(this)),p(this,Li).has(s)&&!A(this,P,oo).call(this,s))if(!o)p(this,Ni).add(s);else{let h={id:i,units:[s],at:[a.at[0],a.at[1]],lift:a.lift,aloft:0,facing:c,from:l,before:l,to:l};p(this,Zn).set(i,h),p(this,xs).add(s),A(this,P,ac).call(this,h);return}A(this,P,ao).call(this,i),A(this,P,H_).call(this,[s],t)}),A(this,P,W_).call(this,t)},"#battlesEnded"),dT=u(function(e){let t=p(this,nr);[p(this,Nr),t?.tile].forEach(i=>{i&&e.add(`${i.x},${i.y}`)}),k(this,Di,t?.id??null),k(this,Nr,t?.tile??null),p(this,Zn).forEach(i=>A(this,P,ac).call(this,i));let n=p(this,Dr);n!==null&&(k(this,Dr,null),A(this,P,Z_).call(this,n.x,n.y))},"#caughtUp"),Sa=u(function(){let e=p(this,Di);return e!==null&&e!==(p(this,nr)?.id??null)&&(p(this,pn).walking(e)||p(this,Jt).attacking(e))},"#holding"),fm=u(function(){let e=p(this,Di);e===null||!A(this,P,Sa).call(this)||(A(this,P,vh).call(this,p(this,pn).endWhere(t=>t.includes(e),performance.now())),A(this,P,Mh).call(this,p(this,Jt).endWhere(({attacker:t})=>t===e,performance.now())),A(this,P,Yt).call(this))},"#hurry"),fT=u(function(){let e=p(this,Nr),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===p(this,Di));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),pT=u(function(e,t){if(A(this,P,Sa).call(this)){k(this,Dr,{x:e,y:t});return}A(this,P,Z_).call(this,e,t)},"#centreSoon"),mT=u(function(e){if(p(this,Li).forEach(({squares:n,after:i},s)=>{n.some(o=>(e.get(o)??0)>i)&&(p(this,Li).delete(s),p(this,Ni).delete(s))}),p(this,Zn).size===0)return;let t=[...p(this,Zn).values()].filter(n=>!A(this,P,V_).call(this,n));t.forEach(n=>p(this,Zn).delete(n.id)),A(this,P,vh).call(this,t)},"#patched"),pm=u(function(e,t,n){let[i,s]=p(this,qe).layout.centre(t.x,t.y),[o,a]=p(this,qe).layout.centre(n.x,n.y),{u:l,v:c}=p(this,qe).layout.period(),h=u((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),f=h(o-i,l),d=h(a-s,c);f===0&&d===0||(p(this,Pi).delete(e),p(this,Pi).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),p(this,Pi).size>fD&&p(this,Pi).delete(p(this,Pi).keys().next().value),[t,n].forEach(({x:m,y:g})=>A(this,P,er).call(this,m,g)),A(this,P,Yt).call(this))},"#face"),lo=u(function(e,t,n){let i=p(this,Ft).clientWidth,s=p(this,Ft).clientHeight;if(i<=0||s<=0)return!1;let o=p(this,Dr),a=o===null?p(this,Dt)?.to??p(this,ht):{...p(this,Dt)?.to??p(this,ht),focus:p(this,qe).layout.centre(o.x,o.y)},[l,c]=p(this,qe).layout.centre(e,t),{u:h,v:f}=A(this,P,Qi).call(this),[d,m]=a.focus,g=u((S,L,I)=>I===null?S:S+I*Math.round((L-S)/I),"nearest"),_=[g(l,d,h),Math.max(0,p(this,qe).heightAt(l,c)),g(c,m,f)],x=i/s,b=p(this,zn)??0,v=Gl(a,b,_,x),w=Gl(a,b,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],x);if(v===null||w===null)return!1;let M=(v[0]+1)/2*i,R=(1-v[1])/2*s,E=Math.abs(w[0]-v[0])*(i/2),y=(n+.5)*E;return M>=y&&M<=i-y&&R>=y&&R<=s-y&&!p(this,Th).some(({left:S,top:L,right:I,bottom:O})=>M>=S-E/2&&M<=I+E/2&&R>=L-E/2&&R<=O+E/2)},"#visible"),mm=u(function(e,t){let n=p(this,Ft).clientWidth,i=p(this,Ft).clientHeight;if(n<=0||i<=0)return null;let s=[e/n*2-1,1-t/i*2],o=p(this,it).unitAt?.(s)??null;if(o!==null){let[m,g]=o.split(",").map(Number);return this.world.get(m,g)}let a=FE(p(this,ht),p(this,zn)??0,s,n/i,(m,g)=>p(this,qe).heightAt(m,g));if(a===null)return null;let[l,c]=p(this,qe).layout.tileAt(...a),h=this.world.width(),f=this.world.height();return!(A(this,P,Qi).call(this).v!==null)&&(c<0||c>=f)?null:this.world.get((l%h+h)%h,(c%f+f)%f)},"#tileAt"),Y_=u(function(e,t){for(let n=p(this,Pa).length-1;n>=0;n--){let{key:i,left:s,top:o,right:a,bottom:l}=p(this,Pa)[n];if(e>=s&&e<a&&t>=o&&t<l){let[c,h]=i.split(",").map(Number),f=this.world.get(c,h);if(f?.city)return{tile:f,box:{left:s,top:o,bottom:l}}}}return null},"#bannerAt"),gT=u(function(e,t){let n=A(this,P,mm).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=p(this,Or);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}let s=A(this,P,Y_).call(this,e,t)?.tile.city??null;(n!==null||s!==null)&&p(this,pi).click(this.portal,n,s)},"#clicked"),xT=u(function(e,t,n,i,s){let o=p(this,nr),a=A(this,P,mm).call(this,e,t);return o===null||a===null?!1:(this.endPicking(),p(this,pi).menu(this.portal,n,i,o,a,p(this,Dh),s),!0)},"#menu"),$_=u(function(e,t){let n=A(this,P,Y_).call(this,e,t);if(n!==null)return{key:`banner ${n.tile.x},${n.tile.y}`,...n};let i=A(this,P,mm).call(this,e,t);return i===null?null:{key:`${i.x},${i.y}`,tile:i,box:null}},"#subjectAt"),bT=u(function(e){let t=e===null||p(this,Ec)||p(this,pi).menuOpen()?null:A(this,P,$_).call(this,e.x,e.y),n=p(this,Ur);if(t===null||e===null){p(this,xi).call(this);return}let{key:i,tile:{x:s,y:o}}=t;if(n!==null&&n.key===i){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,xi).call(this);let a={key:i,x:s,y:o,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};a.timer=window.setTimeout(()=>{a.timer=null,A(this,P,K_).call(this,a)},_D),k(this,Ur,a),document.addEventListener("keydown",p(this,xi),!0)},"#hovered"),K_=u(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,Ft),n=t?A(this,P,$_).call(this,e.canvasX,e.canvasY):null;if(n===null||n.key!==e.key){p(this,xi).call(this);return}let i=n.box===null?null:p(this,Ft).getBoundingClientRect(),s=p(this,pi).tooltip(p(this,Ft),n.tile,p(this,vs),i===null||n.box===null?{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10}:{left:i.left+n.box.left,top:i.top+n.box.top,bottom:i.top+n.box.bottom});!s&&e.open&&p(this,pi).endTooltip(p(this,Ft)),e.open=s},"#showHover"),co=u(function(){return[...p(this,ht).focus]},"#focus"),yT=u(function(){let[e,t]=p(this,qe).layout.tileAt(...p(this,ht).focus),n=this.world.width(),i=this.world.height();return{x:(e%n+n)%n,y:A(this,P,Qi).call(this).v===null?Math.min(i-1,Math.max(0,t)):(t%i+i)%i}},"#centreSquare"),Z_=u(function(e,t){let[n,i]=p(this,qe).layout.centre(e,t),[s,o]=(p(this,Dt)?.to??p(this,ht)).focus;if(n===s&&i===o)return;let a={...p(this,Dt)?.to??p(this,ht),focus:[n,i]},{u:l,v:c}=A(this,P,Qi).call(this),h=u((g,_)=>_===null?g:g-_*Math.round(g/_),"short"),[f,d]=p(this,ht).focus,m=Math.hypot(h(n-f,l),h(i-d,c));if(!p(this,Ph)||m>p(this,ht).distance*1.5){k(this,Ph,!0),this.setOrbit(a);return}A(this,P,Sh).call(this,a)},"#centreOn"),Cr=u(function(e){let t=da(e),n=A(this,P,Qi).call(this);return Jw({...t,pitch:Math.max(t.pitch,Qw(t.distance,n))},n,p(this,qe).extentV())},"#settle"),Qi=u(function(){let e=p(this,qe).layout.period();return this.portal?.lockVerticalEdges()??p(this,Ch)?{u:e.u,v:null}:e},"#period"),Sh=u(function(e,t=A(this,P,B_).call(this)+KE(e.yaw-(p(this,Dt)?.to??p(this,ht)).yaw)){p(this,xi).call(this),typeof requestAnimationFrame!="function"||Ei()?(k(this,Dt,null),k(this,ht,A(this,P,Cr).call(this,e))):k(this,Dt,{from:p(this,ht),to:e,started:null,turn:t,drawn:0}),A(this,P,Yt).call(this)},"#moveTo"),_T=u(function(e){let t=p(this,Dt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/pD);return t.drawn=n*n*(3-2*n),k(this,ht,A(this,P,Cr).call(this,jw(t.from,t.to,n,A(this,P,Qi).call(this),t.turn))),n>=1&&k(this,Dt,null),n<1},"#moveCamera"),vT=u(function(e){let[t,n]=p(this,ht).focus,i=Math.max(0,p(this,qe).heightAt(t,n));return!e||p(this,zn)===null||Ei()?(k(this,zn,i),!1):(k(this,zn,p(this,zn)+(i-p(this,zn))*yD),Math.abs(i-p(this,zn))<.002?(k(this,zn,i),!1):!0)},"#followHeight"),J_=u(function(){let e=[...p(this,yo).values()].map(({x:h,y:f})=>[h,f]),t=this.world.tiles(),n=t!==p(this,Na)||t.length!==p(this,Mc);k(this,Na,t),k(this,Mc,t.length),p(this,yo).clear();let i=A(this,P,ET).call(this,p(this,qe).changed(e,...A(this,P,co).call(this),n)),s=new Set(e.map(([h,f])=>`${h},${f}`)),o=new Map([...s].map(h=>[h,p(this,pc).get(h)??0]));p(this,pc).clear();let a=p(this,mo),l=p(this,go);k(this,mo,new Map),k(this,go,null),p(this,Ir).forEach(({units:[h]})=>{h!==void 0&&l?.add(h.id)}),e.forEach(([h,f])=>A(this,P,er).call(this,h,f)),i.forEach(([h,f])=>{let d=`${h},${f}`;!n&&!s.has(d)&&p(this,Ms).has(d)&&A(this,P,er).call(this,h,f)}),A(this,P,wT).call(this,e,i),i.forEach(([h,f])=>p(this,bo).delete(`${h},${f}`));let c=p(this,Ur);c!==null&&c.open&&e.some(([h,f])=>h===c.x&&f===c.y)&&k(this,_s,!0),(e.length>0||n)&&k(this,gc,!0),n&&(k(this,Br,!0),p(this,Ms).forEach((h,f)=>{let[d,m]=f.split(",").map(Number);A(this,P,er).call(this,d,m)})),l!==null&&A(this,P,hm).call(this)&&!(n&&s.size*2>=t.length)&&A(this,P,cT).call(this,a,l),e.length>0&&A(this,P,mT).call(this,o)},"#takeTiles"),er=u(function(e,t){let n=`${e},${t}`,i=this.world.get(e,t),s=p(this,Jt).awaitingBlow({x:e,y:t}),o=s===null?void 0:p(this,gi).get(s.id),a=o===void 0?i.units:[...o.units,...i.units.filter(({id:v})=>!o.units.some(w=>w.id===v))];i.units.filter(({id:v})=>A(this,P,oo).call(this,v)&&!p(this,Ni).has(v)).forEach(v=>{let w=p(this,Aa).get(v.id)??new Set;w.add(n),p(this,Aa).set(v.id,w),p(this,Ii).set(v.id,v)});let c=a.filter(({id:v})=>!A(this,P,oo).call(this,v)),h=o===void 0?i.city:o.city,f=h_(o===void 0&&c.length===i.units.length?i:{city:h,units:c},p(this,Di),p(this,Ui),p(this,hc),v=>p(this,Pi).get(v.id)??0,p(this,_o),p(this,kh)),d=f?.city&&A(this,P,MT).call(this,n,i,h)!==null?{...f,city:{...f.city,unnamed:!0}}:f;h||(p(this,tr).delete(n),p(this,bo).delete(n)),A(this,P,aT).call(this,n,c,{shown:d?.unit?.id??null,ringed:d?.unit?.active===!0,inCity:(d?.unit??null)!==null&&d?.inCity===!0});let[m,g]=p(this,qe).layout.centre(e,t),_=[m,Math.max(0,p(this,qe).surfaceAt(m,g)),g],x=d===null?null:JSON.stringify([d,_]);x!==(p(this,Ms).get(n)??null)&&(p(this,it).setMarker(n,_,d),A(this,P,AT).call(this,n,x),d?.unit?p(this,vc).add(n):p(this,vc).delete(n))},"#mark"),MT=u(function(e,t,n){if(p(this,Oi)===null||!n)return null;let i=A(this,P,gm).call(this),s={...t,city:n},o=p(this,tr).get(e),a="!",l=null;try{if(a=String(p(this,Oi).key(s)),o?.signature===a)return o.banner;l=p(this,Oi).paint(s,i)}catch(c){p(this,Oh)||(k(this,Oh,!0),console.error(c))}return p(this,tr).set(e,{signature:a,banner:l}),l},"#bannerOf"),gm=u(function(){return(p(this,Uh)??(window.devicePixelRatio||1))*(p(this,kr).zoom()/p(this,kr).scale())},"#bannerDensity"),ST=u(function(e){let t=p(this,bo).get(e);if(t===void 0){let[n,i]=e.split(",").map(Number),[s,o]=p(this,qe).layout.centre(n,i),a=u((l,c)=>Math.max(0,p(this,qe).surfaceAt(l,c)),"up");t={key:e,centre:[s,a(s,o),o],outline:p(this,qe).layout.outline(n,i).map(([l,c])=>[l,a(l,c),c])},p(this,bo).set(e,t)}return t},"#bannerSiteOf"),xm=u(function(){return`${p(this,kr).id()} ${p(this,kr).scale()} ${A(this,P,gm).call(this)}`},"#bannersFor"),j_=u(function(){A(this,P,Q_).call(this),A(this,P,Yt).call(this)},"#paintBannersAgain"),Q_=u(function(){k(this,bc,A(this,P,xm).call(this)),p(this,tr).clear(),A(this,P,wa).call(this),k(this,_s,!0)},"#repaintBanners"),ev=u(function(){let e=p(this,Fr);if(e===null||p(this,Oi)===null)return;A(this,P,xm).call(this)!==p(this,bc)&&A(this,P,Q_).call(this);let t=e.getContext("2d");if(k(this,Pa,[]),t===null||(p(this,xc)&&(t.clearRect(0,0,e.width,e.height),k(this,xc,!1)),!p(this,Ui)||p(this,vo)&&p(this,Oi).giveWayToYields))return;let n=p(this,Ft).clientWidth,i=p(this,Ft).clientHeight,s=e.width/Math.max(1,n),o=[];if(n<=0||i<=0)return;let a=0;p(this,tr).forEach(({banner:c},h)=>{c!==null&&(a=Math.max(a,c.width/s),o.push(A(this,P,ST).call(this,h)))});let l=Math.round(p(this,kr).scale()*A(this,P,gm).call(this));qE(o,{orbit:p(this,ht),look:p(this,zn)??0,width:n,height:i,period:A(this,P,Qi).call(this),reach:a}).forEach(({key:c,x:h,y:f,clear:d})=>{let m=p(this,tr).get(c)?.banner;if(m){let g=Math.round(h*s-m.centre),_=Math.round(f*s)+l;t.globalAlpha=d,t.drawImage(m.image,g,_),k(this,xc,!0),d>=vD&&p(this,Pa).push({key:c,left:g/s,top:_/s,right:(g+m.width)/s,bottom:(_+m.height)/s})}}),t.globalAlpha=1},"#drawBanners"),wT=u(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,i])=>p(this,Oa).delete(`${n},${i}`)),t.forEach(([n,i])=>p(this,Oa).delete(`${n},${i}`)),k(this,Br,!0))},"#yieldsChanged"),ET=u(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([i,s])=>{n.set(`${i},${s}`,[i,s]),t.directions().forEach(o=>{let a=t.neighbour(i,s,o);a!==null&&n.set(`${a[0]},${a[1]}`,a)})}),[...n.values()]},"#besides"),TT=u(function(){if(!p(this,vo)){p(this,Da)&&(p(this,it).setYields(null),k(this,Da,!1));return}if(!p(this,Br)&&p(this,Da))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,i=GE(t,VE(t)),s=p(this,Oa).get(n);if(s===void 0||s.of!==i){let[o,a]=p(this,qe).layout.centre(t.x,t.y);s={of:i,laid:i.length===0?null:WE({at:[o,Math.max(0,p(this,qe).surfaceAt(o,a)),a],yields:i},p(this,Gh))},p(this,Oa).set(n,s)}s.laid!==null&&e.push(s.laid)}),p(this,it).setYields(XE(e)),k(this,Br,!1),k(this,Da,!0)},"#showYields"),AT=u(function(e,t){t===null?p(this,Ms).delete(e):p(this,Ms).set(e,t)},"#remember"),wa=u(function(){let e=new Set([...p(this,Ms).keys(),...p(this,tr).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,i]=t.split(",").map(Number);A(this,P,er).call(this,n,i)})},"#markAll"),bm=u(function(e,t=!1){let n=performance.now();if(t){let c=A(this,P,tv).call(this,n,!1);p(this,it).render(),k(this,lc,performance.now()-n),A(this,P,iv).call(this),c&&A(this,P,wh).call(this);return}let i=A(this,P,_T).call(this,n),[s,o]=A(this,P,co).call(this);p(this,wc)&&(k(this,wc,!1),A(this,P,wa).call(this)),A(this,P,J_).call(this),A(this,P,tT).call(this,n),A(this,P,nT).call(this,n),A(this,P,iT).call(this,n),A(this,P,uT).call(this,n),`${s},${o}`!==p(this,Ah)&&(k(this,Ah,`${s},${o}`),p(this,qe).refocus(s,o)),p(this,qe).build(p(this,it),e);let a=A(this,P,vT).call(this,e!==null);A(this,P,TT).call(this),p(this,it).view(p(this,ht),p(this,zn)??0,A(this,P,Qi).call(this));let l=A(this,P,tv).call(this,n,!0);p(this,it).render(),A(this,P,ev).call(this),p(this,_s)&&(k(this,_s,!1),p(this,Ur)?.open&&A(this,P,K_).call(this,p(this,Ur))),A(this,P,RT).call(this),A(this,P,nv).call(this),k(this,lc,performance.now()-n),k(this,Ih,!0),A(this,P,iv).call(this),p(this,qe).pending()>0||p(this,qe).overlaysPending()>0||p(this,pn).size()>0||p(this,Jt).size()>0||p(this,mi).size()>0||p(this,po).size()>0||i||a?A(this,P,Yt).call(this):l&&A(this,P,wh).call(this)},"#frameDrawn"),tv=u(function(e,t){if(p(this,it).idle===void 0)return!1;(t||!A(this,P,ym).call(this))&&k(this,Ia,A(this,P,ym).call(this)?Hw(p(this,vc),p(this,ht),(i,s)=>p(this,qe).layout.centre(i,s),A(this,P,Qi).call(this),p(this,Ia),(i,s,o)=>A(this,P,lo).call(this,i,s,o)):new Set);let n=p(this,it).idle(p(this,Ia),e/1e3)&&A(this,P,ym).call(this);return n||k(this,Ia,new Set),n},"#idle"),ym=u(function(){return typeof requestAnimationFrame=="function"&&!Ei()&&(p(this,Jn)?.speed()??"normal")!=="off"},"#mayIdle"),RT=u(function(){let e=p(this,mc);if(e===null)return;p(this,gc)&&(k(this,gc,!1),e.redraw());let t=A(this,P,Sa).call(this)?p(this,Nr):p(this,nr)?.tile??null;e.show(A(this,P,CT).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),CT=u(function(){let e=p(this,Ft).clientWidth,t=p(this,Ft).clientHeight;if(e<=0||t<=0)return null;let n=e/t,i=p(this,zn)??0,s=us(p(this,ht).distance,A(this,P,Qi).call(this)).far,[o,a]=p(this,ht).focus,l=u((h,f)=>{for(let d=f;d>=-1;d-=.05){let m=ha(p(this,ht),i,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-o,m[1]-a),_=g>s?s/g:1;return[o+(m[0]-o)*_,a+(m[1]-a)*_]}}return null},"corner"),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return c.every(h=>h!==null)?c:null},"#patch"),nv=u(function(e=!1){let t=(e?p(this,Dt)?.to??p(this,ht):p(this,ht)).distance,n=u(()=>{p(this,uo)!==null&&clearTimeout(p(this,uo)),k(this,uo,null),k(this,uc,null)},"stop"),i=u(()=>{n(),k(this,Ta,t),p(this,Rh).set(t)},"keep");if(e){n(),t!==p(this,Ta)&&i();return}if(p(this,Dt)!==null||t===p(this,Ta)){n();return}p(this,uo)!==null&&t===p(this,uc)||(n(),k(this,uc,t),k(this,uo,setTimeout(i,bD)))},"#keepDistance"),Yt=u(function(){if(!p(this,zr)){if(typeof requestAnimationFrame!="function"){A(this,P,bm).call(this,null);return}k(this,yc,!0),A(this,P,wh).call(this)}},"#draw"),wh=u(function(){p(this,zr)||p(this,Ss)!==null||k(this,Ss,requestAnimationFrame(e=>{let t=typeof e=="number"?e:performance.now();if(k(this,Ss,null),p(this,yc)){k(this,yc,!1),k(this,_c,t),A(this,P,bm).call(this,$E);return}if(t-p(this,_c)<Gw){A(this,P,wh).call(this);return}k(this,_c,t),A(this,P,bm).call(this,$E,!0)}))},"#ask"),PT=u(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),iv=u(function(){if(p(this,Ea)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,it).stats();p(this,Ea).textContent=[`frame ${p(this,lc).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,qe).pending()}`].join(`
`)},"#showStats"),rv=u(function(){let e=p(this,Ft).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,i=window.devicePixelRatio||1,s=`${t}\xD7${n}@${i}`;t===0||n===0||s===p(this,Hh)||(k(this,Hh,s),p(this,it).resize(t,n,i),p(this,Fr)!==null&&(Object.assign(p(this,Fr).style,{height:`${n}px`,left:`${p(this,Ft).offsetLeft||0}px`,top:`${p(this,Ft).offsetTop||0}px`,width:`${t}px`}),p(this,Fr).width=Math.round(t*i),p(this,Fr).height=Math.round(n*i),k(this,Uh,i)),this.measureCovered(),p(this,it).render(),A(this,P,ev).call(this))},"#resize"),u(sv,"MapView3D");var F_=sv,IT=F_;var MD={createMapView3D:u(r=>new IT(r),"createMapView3D")};globalThis[bv]=MD;})();
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
