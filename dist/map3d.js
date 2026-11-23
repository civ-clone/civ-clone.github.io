"use strict";(()=>{var tT=Object.create;var am=Object.defineProperty;var nT=Object.getOwnPropertyDescriptor;var iT=Object.getOwnPropertyNames;var sT=Object.getPrototypeOf,rT=Object.prototype.hasOwnProperty;var tv=s=>{throw TypeError(s)};var u=(s,e)=>am(s,"name",{value:e,configurable:!0});var oT=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var aT=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of iT(e))!rT.call(s,i)&&i!==t&&am(s,i,{get:()=>e[i],enumerable:!(n=nT(e,i))||n.enumerable});return s};var lT=(s,e,t)=>(t=s!=null?tT(sT(s)):{},aT(e||!s||!s.__esModule?am(t,"default",{value:s,enumerable:!0}):t,s));var lm=(s,e,t)=>e.has(s)||tv("Cannot "+t);var p=(s,e,t)=>(lm(s,e,"read from private field"),t?t.call(s):e.get(s)),z=(s,e,t)=>e.has(s)?tv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),B=(s,e,t,n)=>(lm(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),R=(s,e,t)=>(lm(s,e,"access private method"),t);var Ui=(s,e,t,n)=>({set _(i){B(s,e,i,t)},get _(){return p(s,e,n)}});var iv=oT(yo=>{"use strict";var ts,wr=yo&&yo.__classPrivateFieldGet||function(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)};Object.defineProperty(yo,"__esModule",{value:!0}),yo.EventEmitter=void 0;var cm=class cm{constructor(){ts.set(this,{})}on(e,t){e in wr(this,ts,"f")||(wr(this,ts,"f")[e]=[]),wr(this,ts,"f")[e].push(t)}once(e,t){let n=u((...i)=>{t(...i),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in wr(this,ts,"f")))return;let n=wr(this,ts,"f")[e].indexOf(t);n!==-1&&wr(this,ts,"f")[e].splice(n,1)}emit(e,...t){e in wr(this,ts,"f")&&wr(this,ts,"f")[e].forEach((n=>n(...t)))}};u(cm,"i");var Dh=cm;yo.EventEmitter=Dh,ts=new WeakMap,yo.default=Dh});var nv="civMap3D";var sv=lT(iv());var ns,is,Ca,hm=class hm extends sv.EventEmitter{constructor(t,n){super();z(this,ns);z(this,is);z(this,Ca);B(this,is,t),B(this,Ca,t.lockVerticalEdges),B(this,ns,n)}center(){return p(this,ns).centre()}isVisible(t,n,i=0){return p(this,ns).visible(t,n,i)}lockVerticalEdges(){return p(this,Ca)}nativeTileSize(){return p(this,is).art.nativeTileSize()}openCity(t){let{cityOpener:n}=p(this,is);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return p(this,is).playerId}render(){p(this,ns).changed()}scale(){return p(this,is).art.scale()}setCenter(t,n){p(this,ns).centreOn(t,n)}setLockVerticalEdges(t){B(this,Ca,t),p(this,ns).changed()}setZoom(){p(this,ns).changed()}transport(){return p(this,is).transport}zoom(){return p(this,is).art.zoom()}};ns=new WeakMap,is=new WeakMap,Ca=new WeakMap,u(hm,"MapPortal3D");var um=hm,rv=um;var cT=u((s,e)=>{let[t,n]=s.centre(0,0);return Object.fromEntries(e.directions().map(i=>{let[r,o]=e.offset(i,0,0),[a,l]=s.centre(r,o);return[i,[a-t,l-n]]}))},"groundDirections"),ov=cT;var Jv=0,Ym=1,jv=2;var au=1,tf=2,dl=3,_i=0,Dn=1,Qt=2,Fo=0,fl=1,$m=2,Km=3,Zm=4,Qv=5;var Bo=100,eM=101,tM=102,nM=103,iM=104,sM=200,rM=201,oM=202,aM=203,Jm=204,jm=205,lM=206,cM=207,uM=208,hM=209,dM=210,fM=211,pM=212,mM=213,gM=214,hd=0,dd=1,fd=2,Ja=3,pd=4,md=5,gd=6,xd=7,Qm=0,xM=1,bM=2,ds=0,e0=1,t0=2,n0=3,lu=4,i0=5,s0=6,r0=7,Fm="attached",yM="detached",o0=300,ko=301,pl=302,nf=303,sf=304,Gn=1e3,zn=1001,ja=1002,Ht=1003,rf=1004;var zo=1005;var zt=1006,ml=1007;var vn=1008;var Mn=1009,a0=1010,l0=1011,gl=1012,of=1013,zi=1014,ti=1015,ni=1016,af=1017,lf=1018,Go=1020,c0=35902,u0=35899,h0=1021,d0=1022,Xn=1023,Ks=1026,rr=1027,cf=1028,uf=1029,fs=1030,hf=1031;var df=1033,cu=33776,uu=33777,hu=33778,du=33779,ff=35840,pf=35841,mf=35842,gf=35843,xf=36196,bf=37492,yf=37496,_f=37488,vf=37489,fu=37490,Mf=37491,Sf=37808,wf=37809,Ef=37810,Tf=37811,Af=37812,Rf=37813,Cf=37814,Pf=37815,If=37816,Lf=37817,Nf=37818,Df=37819,Uf=37820,Of=37821,Ff=36492,Bf=36494,kf=36495,zf=36283,Gf=36284,pu=36285,Vf=36286,_M=2200,Hf=2201,vM=2202,Ao=2300,Ro=2301,cd=2302,Bm=2303,wo=2400,Eo=2401,Nc=2402,Wf=2500,MM=2501,f0=0,mu=1,xl=2,SM=3200;var Xf=0,wM=1,Gi="",Nt="srgb",Pn="srgb-linear",Dc="linear",St="srgb";var ud=7680;var EM=519,TM=512,AM=513,RM=514,p0=515,CM=516,PM=517,m0=518,g0=519,x0=35044;var b0="300 es",bi=2e3,Qa=2001;function uT(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}u(uT,"arrayNeedsUint32");function hT(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}u(hT,"isTypedArray");function el(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}u(el,"createElementNS");function IM(){let s=el("canvas");return s.style.display="block",s}u(IM,"createCanvasElement");var av={},tl=null;function Uc(...s){let e="THREE."+s.shift();tl?tl("log",e,...s):console.log(e,...s)}u(Uc,"log");function LM(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}u(LM,"enhanceLogMessage");function He(...s){s=LM(s);let e="THREE."+s.shift();if(tl)tl("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}u(He,"warn");function Je(...s){s=LM(s);let e="THREE."+s.shift();if(tl)tl("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}u(Je,"error");function To(...s){let e=s.join(" ");e in av||(av[e]=!0,He(...s))}u(To,"warnOnce");function NM(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}u(r,"probe"),setTimeout(r,t)})}u(NM,"probeAsync");var DM={[hd]:hd,[fd]:gd,[pd]:pd,[Ja]:md,[dd]:dd,[gd]:fd,[xd]:xd,[md]:Ja},A0=class A0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};u(A0,"EventDispatcher");var ki=A0,yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lv=1234567,Pc=Math.PI/180,Co=180/Math.PI;function ps(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}u(ps,"generateUUID");function dt(s,e,t){return Math.max(e,Math.min(t,s))}u(dt,"clamp");function y0(s,e){return(s%e+e)%e}u(y0,"euclideanModulo");function dT(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}u(dT,"mapLinear");function fT(s,e,t){return s!==e?(t-s)/(e-s):0}u(fT,"inverseLerp");function Ic(s,e,t){return(1-t)*s+t*e}u(Ic,"lerp");function pT(s,e,t,n){return Ic(s,e,1-Math.exp(-t*n))}u(pT,"damp");function mT(s,e=1){return e-Math.abs(y0(s,e*2)-e)}u(mT,"pingpong");function gT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}u(gT,"smoothstep");function xT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}u(xT,"smootherstep");function bT(s,e){return s+Math.floor(Math.random()*(e-s+1))}u(bT,"randInt");function yT(s,e){return s+Math.random()*(e-s)}u(yT,"randFloat");function _T(s){return s*(.5-Math.random())}u(_T,"randFloatSpread");function vT(s){s!==void 0&&(lv=s);let e=lv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}u(vT,"seededRandom");function MT(s){return s*Pc}u(MT,"degToRad");function ST(s){return s*Co}u(ST,"radToDeg");function wT(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}u(wT,"isPowerOfTwo");function ET(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}u(ET,"ceilPowerOfTwo");function _0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}u(_0,"floorPowerOfTwo");function TT(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}u(TT,"setQuaternionFromProperEuler");function qf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}u(qf,"getNormalizationScale");function v0(s,e){if(e.constructor===Float32Array)return s;let t=qf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}u(v0,"denormalize");function M0(s,e){if(e.constructor===Float32Array)return s;let t=qf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}u(M0,"normalize");var Yf={DEG2RAD:Pc,RAD2DEG:Co,generateUUID:ps,clamp:dt,euclideanModulo:y0,mapLinear:dT,inverseLerp:fT,lerp:Ic,damp:pT,pingpong:mT,smoothstep:gT,smootherstep:xT,randInt:bT,randFloat:yT,randFloatSpread:_T,seededRandom:vT,degToRad:MT,radToDeg:ST,isPowerOfTwo:wT,ceilPowerOfTwo:ET,floorPowerOfTwo:_0,setQuaternionFromProperEuler:TT,normalize:M0,denormalize:v0},Od=class Od{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};u(Od,"Vector2"),Od.prototype.isVector2=!0;var Ve=Od,R0=class R0{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(f!==_||l!==d||c!==m||h!==g){let x=l*d+c*m+h*g+f*_;x<0&&(d=-d,m=-m,g=-g,_=-_,x=-x);let b=1-a;if(x<.9995){let v=Math.acos(x),S=Math.sin(v);b=Math.sin(b*v)/S,a=Math.sin(a*v)/S,l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a}else{l=l*b+d*a,c=c*b+m*a,h=h*b+g*a,f=f*b+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-a*m,e[t+2]=c*g+h*m+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};u(R0,"Quaternion");var $t=R0,Fd=class Fd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dm.copy(this).projectOnVector(e),this.sub(dm)}reflect(e){return this.sub(dm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};u(Fd,"Vector3"),Fd.prototype.isVector3=!0;var H=Fd,dm=new H,cv=new $t,Bd=class Bd{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=i[0],x=i[3],b=i[6],v=i[1],S=i[4],M=i[7],A=i[2],E=i[5],y=i[8];return r[0]=o*_+a*v+l*A,r[3]=o*x+a*S+l*E,r[6]=o*b+a*M+l*y,r[1]=c*_+h*v+f*A,r[4]=c*x+h*S+f*E,r[7]=c*b+h*M+f*y,r[2]=d*_+m*v+g*A,r[5]=d*x+m*S+g*E,r[8]=d*b+m*M+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return To("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fm.makeScale(e,t)),this}rotate(e){return To("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fm.makeRotation(-e)),this}translate(e,t){return To("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u(Bd,"Matrix3"),Bd.prototype.isMatrix3=!0;var je=Bd,fm=new je,uv=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AT(){let s={enabled:!0,workingColorSpace:Pn,spaces:{},convert:u(function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=Za(i.r),i.g=Za(i.g),i.b=Za(i.b))),i},"convert"),workingToColorSpace:u(function(i,r){return this.convert(i,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:u(function(i,r){return this.convert(i,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:u(function(i){return this.spaces[i].primaries},"getPrimaries"),getTransfer:u(function(i){return i===Gi?Dc:this.spaces[i].transfer},"getTransfer"),getToneMappingMode:u(function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:u(function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:u(function(i){Object.assign(this.spaces,i)},"define"),_getMatrix:u(function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:u(function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:u(function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pn]:{primaries:e,whitePoint:n,transfer:Dc,toXYZ:uv,fromXYZ:hv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:uv,fromXYZ:hv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}u(AT,"createColorManagement");var ct=AT();function $s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}u($s,"SRGBToLinear");function Za(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}u(Za,"LinearToSRGB");var Pa,C0=class C0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pa===void 0&&(Pa=el("canvas")),Pa.width=e.width,Pa.height=e.height;let i=Pa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=el("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};u(C0,"ImageUtils");var bd=C0,RT=0,P0=class P0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pm(i[o].image)):r.push(pm(i[o]))}else r=pm(i);n.url=r}return t||(e.images[this.uuid]=n),n}};u(P0,"TextureSource");var nl=P0;function pm(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}u(pm,"serializeImage");var CT=0,mm=new H,$a=class $a extends ki{constructor(e=$a.DEFAULT_IMAGE,t=$a.DEFAULT_MAPPING,n=zn,i=zn,r=zt,o=vn,a=Xn,l=Mn,c=$a.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=ps(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(mm).x}get height(){return this.source.getSize(mm).y}get depth(){return this.source.getSize(mm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};u($a,"Texture");var jt=$a;jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=o0;jt.DEFAULT_ANISOTROPY=1;var kd=class kd{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],x=l[6],b=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(m+1)/2,A=(b+1)/2,E=(h+d)/4,y=(f+_)/4,w=(g+x)/4;return S>M&&S>A?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=y/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=w/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=y/r,i=w/r),this.set(n,i,r,t),this}let v=Math.sqrt((x-g)*(x-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(f-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u(kd,"Vector4"),kd.prototype.isVector4=!0;var At=kd,I0=class I0 extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(I0,"RenderTarget");var yd=I0,L0=class L0 extends yd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};u(L0,"WebGLRenderTarget");var jn=L0,N0=class N0 extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};u(N0,"DataArrayTexture");var Po=N0;var D0=class D0 extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};u(D0,"Data3DTexture");var _d=D0;var Lc=class Lc{constructor(e,t,n,i,r,o,a,l,c,h,f,d,m,g,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,d,m,g,_,x)}set(e,t,n,i,r,o,a,l,c,h,f,d,m,g,_,x){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=o,b[9]=a,b[13]=l,b[2]=c,b[6]=h,b[10]=f,b[14]=d,b[3]=m,b[7]=g,b[11]=_,b[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ia.setFromMatrixColumn(e,0).length(),r=1/Ia.setFromMatrixColumn(e,1).length(),o=1/Ia.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PT,e,IT)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Er.crossVectors(n,Zn),Er.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Er.crossVectors(n,Zn)),Er.normalize(),Uh.crossVectors(Zn,Er),i[0]=Er.x,i[4]=Uh.x,i[8]=Zn.x,i[1]=Er.y,i[5]=Uh.y,i[9]=Zn.y,i[2]=Er.z,i[6]=Uh.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],x=n[10],b=n[14],v=n[3],S=n[7],M=n[11],A=n[15],E=i[0],y=i[4],w=i[8],I=i[12],P=i[1],D=i[5],O=i[9],X=i[13],U=i[2],$=i[6],te=i[10],k=i[14],Y=i[3],W=i[7],J=i[11],Q=i[15];return r[0]=o*E+a*P+l*U+c*Y,r[4]=o*y+a*D+l*$+c*W,r[8]=o*w+a*O+l*te+c*J,r[12]=o*I+a*X+l*k+c*Q,r[1]=h*E+f*P+d*U+m*Y,r[5]=h*y+f*D+d*$+m*W,r[9]=h*w+f*O+d*te+m*J,r[13]=h*I+f*X+d*k+m*Q,r[2]=g*E+_*P+x*U+b*Y,r[6]=g*y+_*D+x*$+b*W,r[10]=g*w+_*O+x*te+b*J,r[14]=g*I+_*X+x*k+b*Q,r[3]=v*E+S*P+M*U+A*Y,r[7]=v*y+S*D+M*$+A*W,r[11]=v*w+S*O+M*te+A*J,r[15]=v*I+S*X+M*k+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],x=e[11],b=e[15],v=l*m-c*d,S=a*m-c*f,M=a*d-l*f,A=o*m-c*h,E=o*d-l*h,y=o*f-a*h;return t*(_*v-x*S+b*M)-n*(g*v-x*A+b*E)+i*(g*S-_*A+b*y)-r*(g*M-_*E+x*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],x=e[14],b=e[15],v=t*a-n*o,S=t*l-i*o,M=t*c-r*o,A=n*l-i*a,E=n*c-r*a,y=i*c-r*l,w=h*_-f*g,I=h*x-d*g,P=h*b-m*g,D=f*x-d*_,O=f*b-m*_,X=d*b-m*x,U=v*X-S*O+M*D+A*P-E*I+y*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/U;return e[0]=(a*X-l*O+c*D)*$,e[1]=(i*O-n*X-r*D)*$,e[2]=(_*y-x*E+b*A)*$,e[3]=(d*E-f*y-m*A)*$,e[4]=(l*P-o*X-c*I)*$,e[5]=(t*X-i*P+r*I)*$,e[6]=(x*M-g*y-b*S)*$,e[7]=(h*y-d*M+m*S)*$,e[8]=(o*O-a*P+c*w)*$,e[9]=(n*P-t*O-r*w)*$,e[10]=(g*E-_*M+b*v)*$,e[11]=(f*M-h*E-m*v)*$,e[12]=(a*I-o*D-l*w)*$,e[13]=(t*D-n*I+i*w)*$,e[14]=(_*S-g*A-x*v)*$,e[15]=(h*A-f*S+d*v)*$,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,m=r*h,g=r*f,_=o*h,x=o*f,b=a*f,v=l*c,S=l*h,M=l*f,A=n.x,E=n.y,y=n.z;return i[0]=(1-(_+b))*A,i[1]=(m+M)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(d+b))*E,i[6]=(x+v)*E,i[7]=0,i[8]=(g+S)*y,i[9]=(x-v)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ia.set(i[0],i[1],i[2]).length(),a=Ia.set(i[4],i[5],i[6]).length(),l=Ia.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Oi.copy(this);let c=1/o,h=1/a,f=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=f,Oi.elements[9]*=f,Oi.elements[10]*=f,t.setFromRotationMatrix(Oi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=bi,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===bi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qa)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===bi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Qa)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};u(Lc,"Matrix4"),Lc.prototype.isMatrix4=!0;var Ze=Lc,Ia=new H,Oi=new Ze,PT=new H(0,0,0),IT=new H(1,1,1),Er=new H,Uh=new H,Zn=new H,dv=new Ze,fv=new $t,zd=class zd{constructor(e=0,t=0,n=0,i=zd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u(zd,"Euler");var Qn=zd;Qn.DEFAULT_ORDER="XYZ";var U0=class U0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};u(U0,"Layers");var il=U0,LT=0,pv=new H,La=new $t,zs=new Ze,Oh=new H,bc=new H,NT=new H,DT=new $t,mv=new H(1,0,0),gv=new H(0,1,0),xv=new H(0,0,1),bv={type:"added"},UT={type:"removed"},Na={type:"childadded",child:null},gm={type:"childremoved",child:null},Ka=class Ka extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ka.DEFAULT_UP.clone();let e=new H,t=new Qn,n=new $t,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}u(r,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}u(o,"onQuaternionChange"),t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new je}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Ka.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ka.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.multiply(La),this}rotateOnWorldAxis(e,t){return La.setFromAxisAngle(e,t),this.quaternion.premultiply(La),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,t){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oh.copy(e):Oh.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zs.lookAt(bc,Oh,this.up):zs.lookAt(Oh,bc,this.up),this.quaternion.setFromRotationMatrix(zs),i&&(zs.extractRotation(i.matrixWorld),La.setFromRotationMatrix(zs),this.quaternion.premultiply(La.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bv),Na.child=e,this.dispatchEvent(Na),Na.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UT),gm.child=e,this.dispatchEvent(gm),gm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zs.multiply(e.parent.matrixWorld)),e.applyMatrix4(zs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bv),Na.child=e,this.dispatchEvent(Na),Na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,e,NT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,DT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(u(r,"serialize"),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}u(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Ka,"Object3D");var Ft=Ka;Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var O0=class O0 extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}};u(O0,"Group");var Xt=O0,OT={type:"move"},F0=class F0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n),b=this._getHandJoint(c,_);x!==null&&(b.matrix.fromArray(x.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=x.radius),b.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};u(F0,"WebXRController");var sl=F0,UM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Fh={h:0,s:0,l:0};function xm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}u(xm,"hue2rgb");var B0=class B0{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=y0(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xm(o,r,e+1/3),this.g=xm(o,r,e),this.b=xm(o,r,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}u(n,"handleAlpha");let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=UM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ct.workingToColorSpace(_n.copy(this),e),Math.round(dt(_n.r*255,0,255))*65536+Math.round(dt(_n.g*255,0,255))*256+Math.round(dt(_n.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(_n.copy(this),t);let n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Nt){ct.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,i=_n.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Fh);let n=Ic(Tr.h,Fh.h,t),i=Ic(Tr.s,Fh.s,t),r=Ic(Tr.l,Fh.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};u(B0,"Color");var Pe=B0,_n=new Pe;Pe.NAMES=UM;var Gd=class Gd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new Gd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};u(Gd,"Fog");var Oc=Gd,k0=class k0 extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};u(k0,"Scene");var Fc=k0,Fi=new H,Gs=new H,bm=new H,Vs=new H,Da=new H,Ua=new H,yv=new H,ym=new H,_m=new H,vm=new H,Mm=new At,Sm=new At,wm=new At,Ir=class Ir{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fi.subVectors(e,t),i.cross(Fi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Fi.subVectors(i,t),Gs.subVectors(n,t),bm.subVectors(e,t);let o=Fi.dot(Fi),a=Fi.dot(Gs),l=Fi.dot(bm),c=Gs.dot(Gs),h=Gs.dot(bm),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vs)===null?!1:Vs.x>=0&&Vs.y>=0&&Vs.x+Vs.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Vs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vs.x),l.addScaledVector(o,Vs.y),l.addScaledVector(a,Vs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Mm.setScalar(0),Sm.setScalar(0),wm.setScalar(0),Mm.fromBufferAttribute(e,t),Sm.fromBufferAttribute(e,n),wm.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Mm,r.x),o.addScaledVector(Sm,r.y),o.addScaledVector(wm,r.z),o}static isFrontFacing(e,t,n,i){return Fi.subVectors(n,t),Gs.subVectors(e,t),Fi.cross(Gs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Gs.subVectors(this.a,this.b),Fi.cross(Gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ir.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ir.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ir.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ir.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ir.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Da.subVectors(i,n),Ua.subVectors(r,n),ym.subVectors(e,n);let l=Da.dot(ym),c=Ua.dot(ym);if(l<=0&&c<=0)return t.copy(n);_m.subVectors(e,i);let h=Da.dot(_m),f=Ua.dot(_m);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Da,o);vm.subVectors(e,r);let m=Da.dot(vm),g=Ua.dot(vm);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ua,a);let x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return yv.subVectors(r,i),a=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(yv,a);let b=1/(x+_+d);return o=_*b,a=d*b,t.copy(n).addScaledVector(Da,o).addScaledVector(Ua,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};u(Ir,"Triangle");var qs=Ir,z0=class z0{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(r,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bh.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bh.copy(n.boundingBox)),Bh.applyMatrix4(e.matrixWorld),this.union(Bh)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yc),kh.subVectors(this.max,yc),Oa.subVectors(e.a,yc),Fa.subVectors(e.b,yc),Ba.subVectors(e.c,yc),Ar.subVectors(Fa,Oa),Rr.subVectors(Ba,Fa),_o.subVectors(Oa,Ba);let t=[0,-Ar.z,Ar.y,0,-Rr.z,Rr.y,0,-_o.z,_o.y,Ar.z,0,-Ar.x,Rr.z,0,-Rr.x,_o.z,0,-_o.x,-Ar.y,Ar.x,0,-Rr.y,Rr.x,0,-_o.y,_o.x,0];return!Em(t,Oa,Fa,Ba,kh)||(t=[1,0,0,0,1,0,0,0,1],!Em(t,Oa,Fa,Ba,kh))?!1:(zh.crossVectors(Ar,Rr),t=[zh.x,zh.y,zh.z],Em(t,Oa,Fa,Ba,kh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};u(z0,"Box3");var ei=z0,Hs=[new H,new H,new H,new H,new H,new H,new H,new H],Bi=new H,Bh=new ei,Oa=new H,Fa=new H,Ba=new H,Ar=new H,Rr=new H,_o=new H,yc=new H,kh=new H,zh=new H,vo=new H;function Em(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vo.fromArray(s,r);let a=i.x*Math.abs(vo.x)+i.y*Math.abs(vo.y)+i.z*Math.abs(vo.z),l=e.dot(vo),c=t.dot(vo),h=n.dot(vo);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}u(Em,"satForAxes");var Ys=FT();function FT(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}u(FT,"_generateTables");function BT(s){Math.abs(s)>65504&&He("DataUtils.toHalfFloat(): Value out of range."),s=dt(s,-65504,65504),Ys.floatView[0]=s;let e=Ys.uint32View[0],t=e>>23&511;return Ys.baseTable[t]+((e&8388607)>>Ys.shiftTable[t])}u(BT,"toHalfFloat");function kT(s){let e=s>>10;return Ys.uint32View[0]=Ys.mantissaTable[Ys.offsetTable[e]+(s&1023)]+Ys.exponentTable[e],Ys.floatView[0]}u(kT,"fromHalfFloat");var G0=class G0{static toHalfFloat(e){return BT(e)}static fromHalfFloat(e){return kT(e)}};u(G0,"DataUtils");var os=G0,Zt=new H,Gh=new Ve,zT=0,V0=class V0 extends ki{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=x0,this.updateRanges=[],this.gpuType=ti,this.version=0,this._normalizationScale=e!==void 0?qf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gh.fromBufferAttribute(this,t),Gh.applyMatrix3(e),this.setXY(t,Gh.x,Gh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):v0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):M0(e,this.array)}};u(V0,"BufferAttribute");var _t=V0;var H0=class H0 extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};u(H0,"Uint16BufferAttribute");var Bc=H0;var W0=class W0 extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};u(W0,"Uint32BufferAttribute");var kc=W0;var X0=class X0 extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}};u(X0,"Float32BufferAttribute");var It=X0,GT=new ei,_c=new H,Tm=new H,q0=class q0{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):GT.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_c.subVectors(e,this.center);let t=_c.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_c,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_c.copy(e.center).add(Tm)),this.expandByPoint(_c.copy(e.center).sub(Tm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};u(q0,"Sphere");var Vn=q0,VT=0,xi=new Ze,Am=new Ft,ka=new H,Jn=new ei,vc=new ei,an=new H,Vd=class Vd extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uT(e)?kc:Bc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return Am.lookAt(e),Am.updateMatrix(),this.applyMatrix4(Am.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ka).negate(),this.translate(ka.x,ka.y,ka.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vc.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Jn.min,vc.min),Jn.expandByPoint(an),an.addVectors(Jn.max,vc.max),Jn.expandByPoint(an)):(Jn.expandByPoint(vc.min),Jn.expandByPoint(vc.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(ka.fromBufferAttribute(e,c),an.add(ka)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new H,l[I]=new H;let h=new H,f=new H,d=new H,m=new Ve,g=new Ve,_=new Ve,x=new H,b=new H;function v(I,P,D){c[I]=c[P]=c[D]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),m.fromBufferAttribute(r,I),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,D),f.sub(h),d.sub(h),g.sub(m),_.sub(m);let O=1/(g.x*_.y-_.x*g.y);isFinite(O)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(O),b.copy(d).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(O),a[I].add(x),a[P].add(x),a[D].add(x),l[I].add(b),l[P].add(b),l[D].add(b))}u(v,"handleTriangle");let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,P=S.length;I<P;++I){let D=S[I],O=D.start,X=D.count;for(let U=O,$=O+X;U<$;U+=3)v(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new H,A=new H,E=new H,y=new H;function w(I){E.fromBufferAttribute(i,I),y.copy(E);let P=a[I];M.copy(P),M.sub(E.multiplyScalar(E.dot(P))).normalize(),A.crossVectors(y,P);let O=A.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,O)}u(w,"handleVertex");for(let I=0,P=n.count;I<P;++I)c[I]&&w(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let b=0;b<h;b++)d[g++]=c[m++]}return new _t(d,h,f)}if(u(e,"convertBufferAttribute"),this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Vd,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};u(Vd,"BufferGeometry");var Rt=Vd,Y0=class Y0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=x0,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_v(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=_v(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};u(Y0,"InterleavedBuffer");var Io=Y0;function _v(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ps()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}u(_v,"getArrayKey");var Cn=new H,Hd=class Hd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?qf(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Uc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):v0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):M0(e,this.data.array)}};u(Hd,"InterleavedBufferAttribute");var Nr=Hd,Rm=new H,HT=new H,WT=new je,$0=class $0{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Rm.subVectors(n,t).cross(HT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Rm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||WT.getNormalMatrix(e),i=this.coplanarPoint(Rm).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};u($0,"Plane");var kn=$0,XT=0,K0=class K0 extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=fl,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jm,this.blendDst=jm,this.blendEquation=Bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ud,this.stencilZFail=ud,this.stencilZPass=ud,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(u(i,"extractFromCache"),t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};u(K0,"Material");var In=K0,Z0=class Z0 extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(Z0,"SpriteMaterial");var Dr=Z0,za,Mc=new H,Ga=new H,Va=new H,Ha=new Ve,Sc=new Ve,OM=new Ze,Vh=new H,wc=new H,Hh=new H,vv=new Ve,Cm=new Ve,Mv=new Ve,J0=class J0 extends Ft{constructor(e=new Dr){if(super(),this.isSprite=!0,this.type="Sprite",za===void 0){za=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Io(t,5);za.setIndex([0,1,2,0,2,3]),za.setAttribute("position",new Nr(n,3,0,!1)),za.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=za,this.material=e,this.center=new Ve(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ga.setFromMatrixScale(this.matrixWorld),OM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Va.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ga.multiplyScalar(-Va.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Wh(Vh.set(-.5,-.5,0),Va,o,Ga,i,r),Wh(wc.set(.5,-.5,0),Va,o,Ga,i,r),Wh(Hh.set(.5,.5,0),Va,o,Ga,i,r),vv.set(0,0),Cm.set(1,0),Mv.set(1,1);let a=e.ray.intersectTriangle(Vh,wc,Hh,!1,Mc);if(a===null&&(Wh(wc.set(-.5,.5,0),Va,o,Ga,i,r),Cm.set(0,1),a=e.ray.intersectTriangle(Vh,Hh,wc,!1,Mc),a===null))return;let l=e.ray.origin.distanceTo(Mc);l<e.near||l>e.far||t.push({distance:l,point:Mc.clone(),uv:qs.getInterpolation(Mc,Vh,wc,Hh,vv,Cm,Mv,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};u(J0,"Sprite");var Zs=J0;function Wh(s,e,t,n,i,r){Ha.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Sc.x=r*Ha.x-i*Ha.y,Sc.y=i*Ha.x+r*Ha.y):Sc.copy(Ha),s.copy(e),s.x+=Sc.x,s.y+=Sc.y,s.applyMatrix4(OM)}u(Wh,"transformVertex");var Ws=new H,Pm=new H,Xh=new H,qh=new H,j0=class j0{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ws)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ws.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ws.copy(this.origin).addScaledVector(this.direction,t),Ws.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pm.copy(e).add(t).multiplyScalar(.5),Xh.copy(t).sub(e).normalize(),qh.copy(this.origin).sub(Pm);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xh),a=qh.dot(this.direction),l=-qh.dot(Xh),c=qh.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Pm).addScaledVector(Xh,d),m}intersectSphere(e,t){if(e.radius<0)return null;Ws.subVectors(e.center,this.origin);let n=Ws.dot(this.direction),i=Ws.dot(Ws)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ws)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,m=e.z-o.z,g=t.x-o.x,_=t.y-o.y,x=t.z-o.z,b=n.x-o.x,v=n.y-o.y,S=n.z-o.z,M=Math.abs(l),A=Math.abs(c),E=Math.abs(h),y,w,I,P,D,O,X,U,$,te,k,Y;if(M>=A&&M>=E?(I=l,O=f,$=g,Y=b,l>=0?(y=c,w=h,P=d,D=m,X=_,U=x,te=v,k=S):(y=h,w=c,P=m,D=d,X=x,U=_,te=S,k=v)):A>=E?(I=c,O=d,$=_,Y=v,c>=0?(y=h,w=l,P=m,D=f,X=x,U=g,te=S,k=b):(y=l,w=h,P=f,D=m,X=g,U=x,te=b,k=S)):(I=h,O=m,$=x,Y=S,h>=0?(y=l,w=c,P=f,D=d,X=g,U=_,te=b,k=v):(y=c,w=l,P=d,D=f,X=_,U=g,te=v,k=b)),I===0)return null;let W=y/I,J=w/I,Q=1/I,de=P-W*O,be=D-J*O,ee=X-W*$,ge=U-J*$,le=te-W*Y,pe=k-J*Y,he=le*ge-pe*ee,Oe=de*pe-be*le,tt=ee*be-ge*de;if(i){if(he<0||Oe<0||tt<0)return null}else if((he<0||Oe<0||tt<0)&&(he>0||Oe>0||tt>0))return null;let j=he+Oe+tt;if(j===0)return null;let xe=Q*(he*O+Oe*$+tt*Y);return(j>0?xe<0:xe>0)?null:this.at(xe/j,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};u(j0,"Ray");var Ur=j0,Q0=class Q0 extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};u(Q0,"MeshBasicMaterial");var yi=Q0,Sv=new Ze,Mo=new Ur,Yh=new Vn,wv=new H,$h=new H,Kh=new H,Zh=new H,Im=new H,Jh=new H,Ev=new H,jh=new H,eg=class eg extends Ft{constructor(e=new Rt,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Jh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Im.fromBufferAttribute(f,e),o?Jh.addScaledVector(Im,h):Jh.addScaledVector(Im.sub(t),h))}t.add(Jh)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yh.copy(n.boundingSphere),Yh.applyMatrix4(r),Mo.copy(e.ray).recast(e.near),!(Yh.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(Yh,wv)===null||Mo.origin.distanceToSquared(wv)>(e.far-e.near)**2))&&(Sv.copy(r).invert(),Mo.copy(e.ray).applyMatrix4(Sv),!(n.boundingBox!==null&&Mo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mo)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),S=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,A=S;M<A;M+=3){let E=a.getX(M),y=a.getX(M+1),w=a.getX(M+2);i=Qh(this,b,e,n,c,h,f,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=a.getX(x),S=a.getX(x+1),M=a.getX(x+2);i=Qh(this,o,e,n,c,h,f,v,S,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let x=d[g],b=o[x.materialIndex],v=Math.max(x.start,m.start),S=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,A=S;M<A;M+=3){let E=M,y=M+1,w=M+2;i=Qh(this,b,e,n,c,h,f,E,y,w),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,b=_;x<b;x+=3){let v=x,S=x+1,M=x+2;i=Qh(this,o,e,n,c,h,f,v,S,M),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};u(eg,"Mesh");var pt=eg;function qT(s,e,t,n,i,r,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===_i,a),l===null)return null;jh.copy(a),jh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(jh);return c<t.near||c>t.far?null:{distance:c,point:jh.clone(),object:s}}u(qT,"checkIntersection$1");function Qh(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,$h),s.getVertexPosition(l,Kh),s.getVertexPosition(c,Zh);let h=qT(s,e,t,n,$h,Kh,Zh,Ev);if(h){let f=new H;qs.getBarycoord(Ev,$h,Kh,Zh,f),i&&(h.uv=qs.getInterpolatedAttribute(i,a,l,c,f,new Ve)),r&&(h.uv1=qs.getInterpolatedAttribute(r,a,l,c,f,new Ve)),o&&(h.normal=qs.getInterpolatedAttribute(o,a,l,c,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new H,materialIndex:0};qs.getNormal($h,Kh,Zh,d.normal),h.face=d,h.barycoord=f}return h}u(Qh,"checkGeometryIntersection");var Ec=new At,Tv=new At,Av=new At,YT=new At,Rv=new Ze,ed=new H,Lm=new Vn,Cv=new Ze,Nm=new Ur,tg=class tg extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fm,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ed),this.boundingBox.expandByPoint(ed)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ed),this.boundingSphere.expandByPoint(ed)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lm.copy(this.boundingSphere),Lm.applyMatrix4(i),e.ray.intersectsSphere(Lm)!==!1&&(Cv.copy(i).invert(),Nm.copy(e.ray).applyMatrix4(Cv),!(this.boundingBox!==null&&Nm.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Nm)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yM?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Tv.fromBufferAttribute(i.attributes.skinIndex,e),Av.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ec.copy(t),t.set(0,0,0,0)):(Ec.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ec.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Av.getComponent(r);if(o!==0){let a=Tv.getComponent(r);Rv.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(YT.copy(Ec).applyMatrix4(Rv),o)}}return t.isVector4&&(t.w=Ec.w),t.applyMatrix4(this.bindMatrixInverse)}};u(tg,"SkinnedMesh");var zc=tg,ng=class ng extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}};u(ng,"Bone");var rl=ng,ig=class ig extends jt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ht,h=Ht,f,d){super(null,o,a,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};u(ig,"DataTexture");var Or=ig,Pv=new Ze,$T=new Ze,Wd=class Wd{constructor(e=[],t=[]){this.uuid=ps(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$T;Pv.multiplyMatrices(a,t[r]),Pv.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Wd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Or(t,e,e,Xn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(He("Skeleton: No bone found with UUID:",r),o=new rl),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};u(Wd,"Skeleton");var Gc=Wd,sg=class sg extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};u(sg,"InstancedBufferAttribute");var Hn=sg,Wa=new Ze,Iv=new Ze,td=[],Lv=new ei,KT=new Ze,Tc=new pt,Ac=new Vn,rg=class rg extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,KT)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wa),Lv.copy(e.boundingBox).applyMatrix4(Wa),this.boundingBox.union(Lv)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wa),Ac.copy(e.boundingSphere).applyMatrix4(Wa),this.boundingSphere.union(Ac)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Tc.geometry=this.geometry,Tc.material=this.material,Tc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ac.copy(this.boundingSphere),Ac.applyMatrix4(n),e.ray.intersectsSphere(Ac)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wa),Iv.multiplyMatrices(n,Wa),Tc.matrixWorld=Iv,Tc.raycast(e,td);for(let o=0,a=td.length;o<a;o++){let l=td[o];l.instanceId=r,l.object=this,t.push(l)}td.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(i*this.count),i,this.count,cf,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};u(rg,"InstancedMesh");var Vc=rg,So=new Vn,ZT=new Ve(.5,.5),nd=new H,og=class og{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],m=r[7],g=r[8],_=r[9],x=r[10],b=r[11],v=r[12],S=r[13],M=r[14],A=r[15];if(i[0].setComponents(c-o,m-h,b-g,A-v).normalize(),i[1].setComponents(c+o,m+h,b+g,A+v).normalize(),i[2].setComponents(c+a,m+f,b+_,A+S).normalize(),i[3].setComponents(c-a,m-f,b-_,A-S).normalize(),n)i[4].setComponents(l,d,x,M).normalize(),i[5].setComponents(c-l,m-d,b-x,A-M).normalize();else if(i[4].setComponents(c-l,m-d,b-x,A-M).normalize(),t===bi)i[5].setComponents(c+l,m+d,b+x,A+M).normalize();else if(t===Qa)i[5].setComponents(l,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),So.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),So.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(So)}intersectsSprite(e){So.center.set(0,0,0);let t=ZT.distanceTo(e.center);return So.radius=.7071067811865476+t,So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(nd.x=i.normal.x>0?e.max.x:e.min.x,nd.y=i.normal.y>0?e.max.y:e.min.y,nd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};u(og,"Frustum");var Fr=og,Nv=new Ze,Xd=class Xd{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Nv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Fr),n[i].setFromProjectionMatrix(Nv,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Fr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Xd().copy(this)}};u(Xd,"FrustumArray");var vd=Xd;var ag=class ag extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};u(ag,"LineBasicMaterial");var ol=ag,Md=new H,Sd=new H,Dv=new Ze,Rc=new Ur,id=new Vn,Dm=new H,Uv=new H,lg=class lg extends Ft{constructor(e=new Rt,t=new ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Md.fromBufferAttribute(t,i-1),Sd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Md.distanceTo(Sd);e.setAttribute("lineDistance",new It(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),id.copy(n.boundingSphere),id.applyMatrix4(i),id.radius+=r,e.ray.intersectsSphere(id)===!1)return;Dv.copy(i).invert(),Rc.copy(e.ray).applyMatrix4(Dv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=h.getX(_),v=h.getX(_+1),S=sd(this,e,Rc,l,b,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),x=h.getX(m),b=sd(this,e,Rc,l,_,x,g-1);b&&t.push(b)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,x=g-1;_<x;_+=c){let b=sd(this,e,Rc,l,_,_+1,_);b&&t.push(b)}if(this.isLineLoop){let _=sd(this,e,Rc,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(lg,"Line");var Lo=lg;function sd(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Md.fromBufferAttribute(a,i),Sd.fromBufferAttribute(a,r),t.distanceSqToSegment(Md,Sd,Dm,Uv)>n)return;Dm.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Dm);if(!(c<e.near||c>e.far))return{distance:c,point:Uv.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}u(sd,"checkIntersection");var Ov=new H,Fv=new H,cg=class cg extends Lo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ov.fromBufferAttribute(t,i),Fv.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ov.distanceTo(Fv);e.setAttribute("lineDistance",new It(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};u(cg,"LineSegments");var Hc=cg,ug=class ug extends Lo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};u(ug,"LineLoop");var Wc=ug,hg=class hg extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};u(hg,"PointsMaterial");var al=hg,Bv=new Ze,km=new Ur,rd=new Vn,od=new H,dg=class dg extends Ft{constructor(e=new Rt,t=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rd.copy(n.boundingSphere),rd.applyMatrix4(i),rd.radius+=r,e.ray.intersectsSphere(rd)===!1)return;Bv.copy(i).invert(),km.copy(e.ray).applyMatrix4(Bv);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let x=c.getX(g);od.fromBufferAttribute(f,x),kv(od,x,l,i,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)od.fromBufferAttribute(f,g),kv(od,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};u(dg,"Points");var Xc=dg;function kv(s,e,t,n,i,r,o){let a=km.distanceSqToPoint(s);if(a<t){let l=new H;km.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}u(kv,"testPoint");var fg=class fg extends jt{constructor(e=[],t=ko,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};u(fg,"CubeTexture");var qc=fg,pg=class pg extends jt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};u(pg,"CanvasTexture");var Br=pg;var mg=class mg extends jt{constructor(e,t,n=zi,i,r,o,a=Ht,l=Ht,c,h=Ks,f=1){if(h!==Ks&&h!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};u(mg,"DepthTexture");var Js=mg,gg=class gg extends Js{constructor(e,t=zi,n=ko,i,r,o=Ht,a=Ht,l,c=Ks){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};u(gg,"CubeDepthTexture");var Yc=gg,xg=class xg extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};u(xg,"ExternalTexture");var $c=xg,qd=class qd extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function g(_,x,b,v,S,M,A,E,y,w,I){let P=M/y,D=A/w,O=M/2,X=A/2,U=E/2,$=y+1,te=w+1,k=0,Y=0,W=new H;for(let J=0;J<te;J++){let Q=J*D-X;for(let de=0;de<$;de++){let be=de*P-O;W[_]=be*v,W[x]=Q*S,W[b]=U,c.push(W.x,W.y,W.z),W[_]=0,W[x]=0,W[b]=E>0?1:-1,h.push(W.x,W.y,W.z),f.push(de/y),f.push(1-J/w),k+=1}}for(let J=0;J<w;J++)for(let Q=0;Q<y;Q++){let de=d+Q+$*J,be=d+Q+$*(J+1),ee=d+(Q+1)+$*(J+1),ge=d+(Q+1)+$*J;l.push(de,be,ge),l.push(be,ee,ge),Y+=6}a.addGroup(m,Y,I),m+=Y,d+=k}u(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};u(qd,"BoxGeometry");var as=qd;var Yd=class Yd extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],m=[],g=0,_=[],x=n/2,b=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function v(){let M=new H,A=new H,E=0,y=(t-e)/n;for(let w=0;w<=r;w++){let I=[],P=w/r,D=P*(t-e)+e;for(let O=0;O<=i;O++){let X=O/i,U=X*l+a,$=Math.sin(U),te=Math.cos(U);A.x=D*$,A.y=-P*n+x,A.z=D*te,f.push(A.x,A.y,A.z),M.set($,y,te).normalize(),d.push(M.x,M.y,M.z),m.push(X,1-P),I.push(g++)}_.push(I)}for(let w=0;w<i;w++)for(let I=0;I<r;I++){let P=_[I][w],D=_[I+1][w],O=_[I+1][w+1],X=_[I][w+1];(e>0||I!==0)&&(h.push(P,D,X),E+=3),(t>0||I!==r-1)&&(h.push(D,O,X),E+=3)}c.addGroup(b,E,0),b+=E}u(v,"generateTorso");function S(M){let A=g,E=new Ve,y=new H,w=0,I=M===!0?e:t,P=M===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,x*P,0),d.push(0,P,0),m.push(.5,.5),g++;let D=g;for(let O=0;O<=i;O++){let U=O/i*l+a,$=Math.cos(U),te=Math.sin(U);y.x=I*te,y.y=x*P,y.z=I*$,f.push(y.x,y.y,y.z),d.push(0,P,0),E.x=$*.5+.5,E.y=te*.5*P+.5,m.push(E.x,E.y),g++}for(let O=0;O<i;O++){let X=A+O,U=D+O;M===!0?h.push(U,U+1,X):h.push(U+1,U,X),w+=3}c.addGroup(b,w,M===!0?1:2),b+=w}u(S,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u(Yd,"CylinderGeometry");var ls=Yd,$d=class $d extends ls{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $d(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};u($d,"ConeGeometry");var js=$d,Kd=class Kd extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new H,M=new H,A=new H;for(let E=0;E<t.length;E+=3)m(t[E+0],S),m(t[E+1],M),m(t[E+2],A),l(S,M,A,v)}u(a,"subdivide");function l(v,S,M,A){let E=A+1,y=[];for(let w=0;w<=E;w++){y[w]=[];let I=v.clone().lerp(M,w/E),P=S.clone().lerp(M,w/E),D=E-w;for(let O=0;O<=D;O++)O===0&&w===E?y[w][O]=I:y[w][O]=I.clone().lerp(P,O/D)}for(let w=0;w<E;w++)for(let I=0;I<2*(E-w)-1;I++){let P=Math.floor(I/2);I%2===0?(d(y[w][P+1]),d(y[w+1][P]),d(y[w][P])):(d(y[w][P+1]),d(y[w+1][P+1]),d(y[w+1][P]))}}u(l,"subdivideFace");function c(v){let S=new H;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}u(c,"applyRadius");function h(){let v=new H;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let M=x(v)/2/Math.PI+.5,A=b(v)/Math.PI+.5;o.push(M,1-A)}g(),f()}u(h,"generateUVs");function f(){for(let v=0;v<o.length;v+=6){let S=o[v+0],M=o[v+2],A=o[v+4],E=Math.max(S,M,A),y=Math.min(S,M,A);E>.9&&y<.1&&(S<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}u(f,"correctSeam");function d(v){r.push(v.x,v.y,v.z)}u(d,"pushVertex");function m(v,S){let M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}u(m,"getVertexByIndex");function g(){let v=new H,S=new H,M=new H,A=new H,E=new Ve,y=new Ve,w=new Ve;for(let I=0,P=0;I<r.length;I+=9,P+=6){v.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),E.set(o[P+0],o[P+1]),y.set(o[P+2],o[P+3]),w.set(o[P+4],o[P+5]),A.copy(v).add(S).add(M).divideScalar(3);let D=x(A);_(E,P+0,v,D),_(y,P+2,S,D),_(w,P+4,M,D)}}u(g,"correctUVs");function _(v,S,M,A){A<0&&v.x===1&&(o[S]=v.x-1),M.x===0&&M.z===0&&(o[S]=A/2/Math.PI+.5)}u(_,"correctUV");function x(v){return Math.atan2(v.z,-v.x)}u(x,"azimuth");function b(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}u(b,"inclination")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.vertices,e.indices,e.radius,e.detail)}};u(Kd,"PolyhedronGeometry");var wd=Kd;var Zd=class Zd extends wd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zd(e.radius,e.detail)}};u(Zd,"IcosahedronGeometry");var Kc=Zd;var Jd=class Jd extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,m=[],g=[],_=[],x=[];for(let b=0;b<h;b++){let v=b*d-o;for(let S=0;S<c;S++){let M=S*f-r;g.push(M,-v,0),_.push(0,0,1),x.push(S/a),x.push(1-b/l)}}for(let b=0;b<l;b++)for(let v=0;v<a;v++){let S=v+c*b,M=v+c*(b+1),A=v+1+c*(b+1),E=v+1+c*b;m.push(S,M,E),m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.width,e.height,e.widthSegments,e.heightSegments)}};u(Jd,"PlaneGeometry");var cs=Jd;var jd=class jd extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new H,d=new H,m=[],g=[],_=[],x=[];for(let b=0;b<=n;b++){let v=[],S=b/n,M=o+S*a,A=e*Math.cos(M),E=Math.sqrt(e*e-A*A),y=0;b===0&&o===0?y=.5/t:b===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let I=w/t,P=i+I*r;f.x=-E*Math.cos(P),f.y=A,f.z=E*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),x.push(I+y,1-S),v.push(c++)}h.push(v)}for(let b=0;b<n;b++)for(let v=0;v<t;v++){let S=h[b][v+1],M=h[b][v],A=h[b+1][v],E=h[b+1][v+1];(b!==0||o>0)&&m.push(S,M,E),(b!==n-1||l<Math.PI)&&m.push(M,A,E)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};u(jd,"SphereGeometry");var kr=jd;var Qd=class Qd extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],d=new H,m=new H,g=new H;for(let _=0;_<=n;_++){let x=o+_/n*a;for(let b=0;b<=i;b++){let v=b/i*r;m.x=(e+t*Math.cos(x))*Math.cos(v),m.y=(e+t*Math.cos(x))*Math.sin(v),m.z=t*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(b/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){let b=(i+1)*_+x-1,v=(i+1)*(_-1)+x-1,S=(i+1)*(_-1)+x,M=(i+1)*_+x;l.push(b,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};u(Qd,"TorusGeometry");var Qs=Qd;function Vo(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(zv(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(zv(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}u(Vo,"cloneUniforms");function Sn(s){let e={};for(let t=0;t<s.length;t++){let n=Vo(s[t]);for(let i in n)e[i]=n[i]}return e}u(Sn,"mergeUniforms");function zv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}u(zv,"isThreeObject");function JT(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}u(JT,"cloneUniformsGroups");function S0(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}u(S0,"getUnlitUniformColorSpace");var Ho={clone:Vo,merge:Sn},jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bg=class bg extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=QT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=JT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new At().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};u(bg,"ShaderMaterial");var Ln=bg,yg=class yg extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};u(yg,"RawShaderMaterial");var Ed=yg,_g=class _g extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};u(_g,"MeshStandardMaterial");var ln=_g,vg=class vg extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:u(function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},"get"),set:u(function(t){this.ior=(1+.4*t)/(1-.4*t)},"set")}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return To('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){To('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};u(vg,"MeshPhysicalMaterial");var Nn=vg;var Mg=class Mg extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};u(Mg,"MeshDepthMaterial");var Td=Mg,Sg=class Sg extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};u(Sg,"MeshDistanceMaterial");var Ad=Sg;function Pr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}u(Pr,"convertArray");function Cc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}u(Cc,"hasTangents");function eA(s){function e(i,r){return s[i]-s[r]}u(e,"compareTime");let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}u(eA,"getKeyframeOrder");function Gv(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}u(Gv,"sortedArray");function tA(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}u(tA,"flattenJSON");var wg=class wg{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};u(wg,"Interpolant");var us=wg,Eg=class Eg extends us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wo,endingEnd:wo}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eo:r=e,a=2*t-n;break;case Nc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eo:o=e,l=2*n-t;break;case Nc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,x=_*g,b=-d*x+2*d*_-d*g,v=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-m)*x+(1.5+m)*_+.5*g,M=m*x-m*_;for(let A=0;A!==a;++A)r[A]=b*o[h+A]+v*o[c+A]+S*o[l+A]+M*o[f+A];return r}};u(Eg,"CubicInterpolant");var Rd=Eg,Tg=class Tg extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}};u(Tg,"LinearInterpolant");var Zc=Tg,Ag=class Ag extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};u(Ag,"DiscreteInterpolant");var Cd=Ag,Rg=class Rg extends us{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(i-t),_=1-g;for(let x=0;x!==a;++x)r[x]=o[c+x]*_+o[l+x]*g;return r}let d=a*2,m=e-1;for(let g=0;g!==a;++g){let _=o[c+g],x=o[l+g],b=m*d+g*2,v=f[b],S=f[b+1],M=e*d+g*2,A=h[M],E=h[M+1],y=iA(n,t,v,A,i);r[g]=FM(y,_,S,E,x)}return r}};u(Rg,"BezierInterpolant");var Pd=Rg;function FM(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}u(FM,"cubicBezier");function nA(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}u(nA,"cubicBezierSlope");function iA(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=FM(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=nA(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}u(iA,"solveBezierParameter");var Cg=class Cg{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Cc(e.settings)&&(n.settings={inTangents:Pr(e.settings.inTangents,Array),outTangents:Pr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Ro:t=this.InterpolantFactoryMethodLinear;break;case cd:t=this.InterpolantFactoryMethodSmooth;break;case Bm:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Ro;case this.InterpolantFactoryMethodSmooth:return cd;case this.InterpolantFactoryMethodBezier:return Bm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Cc(this.settings)&&(Vv(this.settings.inTangents,e),Vv(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Cc(this.settings)&&(Hv(this.settings.inTangents,e),Hv(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&hT(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cd,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Cc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};u(Cg,"KeyframeTrack");var Wn=Cg;function Vv(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}u(Vv,"shiftTangentTimes");function Hv(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}u(Hv,"scaleTangentTimes");Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Ro;var Pg=class Pg extends Wn{constructor(e,t,n){super(e,t,n)}};u(Pg,"BooleanKeyframeTrack");var er=Pg;er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Ao;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var Ig=class Ig extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Ig,"ColorKeyframeTrack");var Jc=Ig;Jc.prototype.ValueTypeName="color";var Lg=class Lg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Lg,"NumberKeyframeTrack");var tr=Lg;tr.prototype.ValueTypeName="number";var Ng=class Ng extends us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)$t.slerpFlat(r,0,o,c-a,o,c,l);return r}};u(Ng,"QuaternionLinearInterpolant");var Id=Ng,Dg=class Dg extends Wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Id(this.times,this.values,this.getValueSize(),e)}};u(Dg,"QuaternionKeyframeTrack");var nr=Dg;nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ug=class Ug extends Wn{constructor(e,t,n){super(e,t,n)}};u(Ug,"StringKeyframeTrack");var ir=Ug;ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Ao;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Og=class Og extends Wn{constructor(e,t,n,i){super(e,t,n,i)}};u(Og,"VectorKeyframeTrack");var zr=Og;zr.prototype.ValueTypeName="vector";var Fg=class Fg{constructor(e="",t=-1,n=[],i=Wf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ps(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rA(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=eA(l);l=Gv(l,1,h),c=Gv(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new tr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let f=h[1],d=i[f];d||(i[f]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};u(Fg,"AnimationClip");var No=Fg;function sA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return zr;case"color":return Jc;case"quaternion":return nr;case"bool":case"boolean":return er;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}u(sA,"getTrackTypeForValueTypeName");function rA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sA(s.type);if(s.times===void 0){let n=[],i=[];tA(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Cc(s.settings)&&(t.settings={inTangents:Pr(s.settings.inTangents,Float32Array),outTangents:Pr(s.settings.outTangents,Float32Array)}),t}u(rA,"parseKeyframeTrack");var rs={enabled:!1,files:{},add:u(function(s,e){this.enabled!==!1&&(Wv(s)||(this.files[s]=e))},"add"),get:u(function(s){if(this.enabled!==!1&&!Wv(s))return this.files[s]},"get"),remove:u(function(s){delete this.files[s]},"remove"),clear:u(function(){this.files={}},"clear")};function Wv(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}u(Wv,"isBlobURL");var Bg=class Bg{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};u(Bg,"LoadingManager");var ll=Bg,BM=new ll,kg=class kg{constructor(e){this.manager=e!==void 0?e:BM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};u(kg,"Loader");var hs=kg;hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs={},zg=class zg extends Error{constructor(e,t){super(e),this.response=t}};u(zg,"HttpError");var zm=zg,Gg=class Gg extends hs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=rs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Xs[e]!==void 0){Xs[e].push({onLoad:t,onProgress:n,onError:i});return}Xs[e]=[],Xs[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Xs[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,_=0,x=new ReadableStream({start(b){v();function v(){f.read().then(({done:S,value:M})=>{if(S)b.close();else{_+=M.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let E=0,y=h.length;E<y;E++){let w=h[E];w.onProgress&&w.onProgress(A)}b.enqueue(M),v()}},S=>{b.error(S)})}u(v,"readData")}});return new Response(x)}else throw new zm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{rs.add(`file:${e}`,c);let h=Xs[e];delete Xs[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Xs[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xs[e];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(Gg,"FileLoader");var cl=Gg;var Xa=new WeakMap,Vg=class Vg extends hs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=Xa.get(o);f===void 0&&(f=[],Xa.set(o,f)),f.push({onLoad:t,onError:i})}return o}let a=el("img");function l(){h(),t&&t(this);let f=Xa.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onLoad&&m.onLoad(this)}Xa.delete(this),r.manager.itemEnd(e)}u(l,"onImageLoad");function c(f){h(),i&&i(f),rs.remove(`image:${e}`);let d=Xa.get(this)||[];for(let m=0;m<d.length;m++){let g=d[m];g.onError&&g.onError(f)}Xa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}u(c,"onImageError");function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return u(h,"removeEventListeners"),a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),rs.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};u(Vg,"ImageLoader");var Ld=Vg;var Hg=class Hg extends hs{constructor(e){super(e)}load(e,t,n,i){let r=new jt,o=new Ld(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};u(Hg,"TextureLoader");var jc=Hg,Wg=class Wg extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};u(Wg,"Light");var Do=Wg,Xg=class Xg extends Do{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};u(Xg,"HemisphereLight");var Qc=Xg,Um=new Ze,Xv=new H,qv=new H,qg=class qg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xv),qv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qv),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Um.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Um,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Qa||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Um)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};u(qg,"LightShadow");var ul=qg,ad=new H,ld=new $t,ss=new H,Yg=class Yg extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ad,ld,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ad,ld,ss.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ad,ld,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ad,ld,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};u(Yg,"Camera");var eu=Yg,Cr=new H,Yv=new Ve,$v=new Ve,$g=class $g extends eu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Yv,$v),t.subVectors($v,Yv)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};u($g,"PerspectiveCamera");var Jt=$g,Kg=class Kg extends ul{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Co*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};u(Kg,"SpotLightShadow");var Gm=Kg,Zg=class Zg extends Do{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};u(Zg,"SpotLight");var tu=Zg,Jg=class Jg extends ul{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}};u(Jg,"PointLightShadow");var Vm=Jg,jg=class jg extends Do{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};u(jg,"PointLight");var nu=jg,Qg=class Qg extends eu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};u(Qg,"OrthographicCamera");var Uo=Qg,ex=class ex extends ul{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};u(ex,"DirectionalLightShadow");var Hm=ex,tx=class tx extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Hm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};u(tx,"DirectionalLight");var Oo=tx;var nx=class nx{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};u(nx,"LoaderUtils");var sr=nx,ix=class ix extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};u(ix,"InstancedBufferGeometry");var iu=ix;var Om=new WeakMap,sx=class sx extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=rs.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Om.has(o)===!0?(i&&i(Om.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rs.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Om.set(l,c),rs.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rs.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};u(sx,"ImageBitmapLoader");var su=sx;var qa=-90,Ya=1,rx=class rx extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Jt(qa,Ya,e,t);i.layers=this.layers,this.add(i);let r=new Jt(qa,Ya,e,t);r.layers=this.layers,this.add(r);let o=new Jt(qa,Ya,e,t);o.layers=this.layers,this.add(o);let a=new Jt(qa,Ya,e,t);a.layers=this.layers,this.add(a);let l=new Jt(qa,Ya,e,t);l.layers=this.layers,this.add(l);let c=new Jt(qa,Ya,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};u(rx,"CubeCamera");var hl=rx,ox=class ox extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};u(ox,"ArrayCamera");var Nd=ox;var ax=class ax{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;$t.multiplyQuaternionsFlat(e,o,e,t,e,n),$t.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}};u(ax,"PropertyMixer");var Dd=ax,w0="\\[\\]\\.:\\/",oA=new RegExp("["+w0+"]","g"),E0="[^"+w0+"]",aA="[^"+w0.replace("\\.","")+"]",lA=/((?:WC+[\/:])*)/.source.replace("WC",E0),cA=/(WCOD+)?/.source.replace("WCOD",aA),uA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",E0),hA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",E0),dA=new RegExp("^"+lA+cA+uA+hA+"$"),fA=["material","materials","bones","map"],lx=class lx{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};u(lx,"Composite");var Wm=lx,Lr=class Lr{constructor(e,t,n){this.path=t,this.parsedPath=n||Lr.parseTrackName(t),this.node=Lr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lr.Composite(e,t,n):new Lr(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oA,"")}static parseTrackName(e){let t=dA.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fA.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=u(function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},"searchNodeSubtree"),i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Lr.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};u(Lr,"PropertyBinding");var Mt=Lr;Mt.Composite=Wm;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=class cx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:wo,endingEnd:wo};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Hf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case MM:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Wf:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===vM;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===_M){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Eo,i.endingEnd=Eo):(e?i.endingStart=this.zeroSlopeAtStart?Eo:wo:i.endingStart=Nc,t?i.endingEnd=this.zeroSlopeAtEnd?Eo:wo:i.endingEnd=Nc)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}};u(cx,"AnimationAction");var Ud=cx,pA=new Float32Array(1),ux=class ux extends ki{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){let d=i[f],m=d.name,g=h[m];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let _=t&&t._propertyBindings[f].binding.parsedPath;g=new Dd(Mt.create(n,m,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let f=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Zc(new Float32Array(2),new Float32Array(2),1,pA),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?No.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wf),l!==void 0){let f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Ud(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?No.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};u(ux,"AnimationMixer");var ru=ux;var Kv=new Ze,hx=class hx{constructor(e,t,n=0,i=1/0){this.ray=new Ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kv),this}intersectObject(e,t=!0,n=[]){return Xm(e,this,n,t),n.sort(Zv),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xm(e[i],this,n,t);return n.sort(Zv),n}};u(hx,"Raycaster");var ou=hx;function Zv(s,e){return s.distance-e.distance}u(Zv,"ascSort");function Xm(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Xm(r[o],e,t,!0)}}u(Xm,"intersect");var ef=class ef{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};u(ef,"Matrix2"),ef.prototype.isMatrix2=!0;var qm=ef;function T0(s,e,t,n){let i=mA(n);switch(t){case h0:return s*e;case cf:return s*e/i.components*i.byteLength;case uf:return s*e/i.components*i.byteLength;case fs:return s*e*2/i.components*i.byteLength;case hf:return s*e*2/i.components*i.byteLength;case d0:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case df:return s*e*4/i.components*i.byteLength;case cu:case uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hu:case du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(s,16)*Math.max(e,8)/4;case ff:case mf:return Math.max(s,8)*Math.max(e,8)/2;case xf:case bf:case _f:case vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:case fu:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ff:case Bf:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pu:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}u(T0,"getByteLength");function mA(s){switch(s){case Mn:case a0:return{byteLength:1,components:1};case gl:case l0:case ni:return{byteLength:2,components:1};case af:case lf:return{byteLength:2,components:4};case zi:case of:case ti:return{byteLength:4,components:1};case c0:case u0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}u(mA,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function oS(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return u(i,"onAnimationFrame"),{start:u(function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},"start"),stop:u(function(){s!==null&&s.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:u(function(r){t=r},"setAnimationLoop"),setContext:u(function(r){s=r},"setContext")}}u(oS,"WebGLAnimation");function xA(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}u(t,"createBuffer");function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){let g=f[d],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){let _=f[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}u(n,"updateBuffer");function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}u(i,"get");function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}u(r,"remove");function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return u(o,"update"),{get:i,remove:r,update:o}}u(xA,"WebGLAttributes");var bA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yA=`#ifdef USE_ALPHAHASH
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
#endif`,_A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wA=`#ifdef USE_AOMAP
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
#endif`,EA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TA=`#ifdef USE_BATCHING
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
#endif`,AA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IA=`#ifdef USE_IRIDESCENCE
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
#endif`,LA=`#ifdef USE_BUMPMAP
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
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,GA=`#define PI 3.141592653589793
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
} // validated`,VA=`vec3 transformedNormal = objectNormal;
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
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YA="gl_FragColor = linearToOutputTexel( gl_FragColor );",$A=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KA=`#ifdef USE_ENVMAP
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
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,JA=`#ifdef USE_ENVMAP
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
#endif`,jA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QA=`#ifdef USE_ENVMAP
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
#endif`,eR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sR=`#ifdef USE_GRADIENTMAP
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
}`,rR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cR=`#ifdef USE_ENVMAP
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
#endif`,uR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pR=`PhysicalMaterial material;
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
#endif`,mR=`uniform sampler2D dfgLUT;
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
}`,gR=`
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
#endif`,xR=`#if defined( RE_IndirectDiffuse )
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
#endif`,bR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yR=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,_R=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ER=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AR=`#if defined( USE_POINTS_UV )
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
#endif`,RR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IR=`#if defined( USE_MORPHCOLORS )
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
#endif`,LR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NR=`#ifdef USE_MORPHTARGETS
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
#endif`,DR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zR=`#ifdef USE_NORMALMAP
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
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$R=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nC=`float getShadowMask() {
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
}`,iC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sC=`#ifdef USE_SKINNING
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
#endif`,rC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oC=`#ifdef USE_SKINNING
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
#endif`,aC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hC=`#ifdef USE_TRANSMISSION
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
#endif`,dC=`#ifdef USE_TRANSMISSION
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bC=`uniform sampler2D t2D;
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
}`,yC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform float backgroundBlurriness;
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
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SC=`#include <common>
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
}`,wC=`#if DEPTH_PACKING == 3200
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
}`,EC=`#define DISTANCE
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
}`,TC=`#define DISTANCE
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
}`,AC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`uniform float scale;
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
}`,PC=`uniform vec3 diffuse;
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
}`,IC=`#include <common>
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
}`,LC=`uniform vec3 diffuse;
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
}`,NC=`#define LAMBERT
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
}`,DC=`#define LAMBERT
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
}`,UC=`#define MATCAP
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
}`,OC=`#define MATCAP
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
}`,FC=`#define NORMAL
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
}`,BC=`#define NORMAL
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
}`,kC=`#define PHONG
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
}`,zC=`#define PHONG
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
}`,GC=`#define STANDARD
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
}`,VC=`#define STANDARD
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
}`,HC=`#define TOON
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
}`,WC=`#define TOON
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
}`,XC=`uniform float size;
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
}`,qC=`uniform vec3 diffuse;
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
}`,YC=`#include <common>
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
}`,$C=`uniform vec3 color;
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
}`,KC=`uniform float rotation;
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
}`,ZC=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:bA,alphahash_pars_fragment:yA,alphamap_fragment:_A,alphamap_pars_fragment:vA,alphatest_fragment:MA,alphatest_pars_fragment:SA,aomap_fragment:wA,aomap_pars_fragment:EA,batching_pars_vertex:TA,batching_vertex:AA,begin_vertex:RA,beginnormal_vertex:CA,bsdfs:PA,iridescence_fragment:IA,bumpmap_pars_fragment:LA,clipping_planes_fragment:NA,clipping_planes_pars_fragment:DA,clipping_planes_pars_vertex:UA,clipping_planes_vertex:OA,color_fragment:FA,color_pars_fragment:BA,color_pars_vertex:kA,color_vertex:zA,common:GA,defaultnormal_vertex:VA,displacementmap_pars_vertex:HA,displacementmap_vertex:WA,emissivemap_fragment:XA,emissivemap_pars_fragment:qA,colorspace_fragment:YA,colorspace_pars_fragment:$A,envmap_fragment:KA,envmap_common_pars_fragment:ZA,envmap_pars_fragment:JA,envmap_pars_vertex:jA,envmap_physical_pars_fragment:cR,envmap_vertex:QA,fog_vertex:eR,fog_pars_vertex:tR,fog_fragment:nR,fog_pars_fragment:iR,gradientmap_pars_fragment:sR,lightmap_pars_fragment:rR,lights_lambert_fragment:oR,lights_lambert_pars_fragment:aR,lights_pars_begin:lR,lights_toon_fragment:uR,lights_toon_pars_fragment:hR,lights_phong_fragment:dR,lights_phong_pars_fragment:fR,lights_physical_fragment:pR,lights_physical_pars_fragment:mR,lights_fragment_begin:gR,lights_fragment_maps:xR,lights_fragment_end:bR,lightprobes_pars_fragment:yR,logdepthbuf_fragment:_R,logdepthbuf_pars_fragment:vR,logdepthbuf_pars_vertex:MR,logdepthbuf_vertex:SR,map_fragment:wR,map_pars_fragment:ER,map_particle_fragment:TR,map_particle_pars_fragment:AR,metalnessmap_fragment:RR,metalnessmap_pars_fragment:CR,morphinstance_vertex:PR,morphcolor_vertex:IR,morphnormal_vertex:LR,morphtarget_pars_vertex:NR,morphtarget_vertex:DR,normal_fragment_begin:UR,normal_fragment_maps:OR,normal_pars_fragment:FR,normal_pars_vertex:BR,normal_vertex:kR,normalmap_pars_fragment:zR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:VR,clearcoat_pars_fragment:HR,iridescence_pars_fragment:WR,opaque_fragment:XR,packing:qR,premultiplied_alpha_fragment:YR,project_vertex:$R,dithering_fragment:KR,dithering_pars_fragment:ZR,roughnessmap_fragment:JR,roughnessmap_pars_fragment:jR,shadowmap_pars_fragment:QR,shadowmap_pars_vertex:eC,shadowmap_vertex:tC,shadowmask_pars_fragment:nC,skinbase_vertex:iC,skinning_pars_vertex:sC,skinning_vertex:rC,skinnormal_vertex:oC,specularmap_fragment:aC,specularmap_pars_fragment:lC,tonemapping_fragment:cC,tonemapping_pars_fragment:uC,transmission_fragment:hC,transmission_pars_fragment:dC,uv_pars_fragment:fC,uv_pars_vertex:pC,uv_vertex:mC,worldpos_vertex:gC,background_vert:xC,background_frag:bC,backgroundCube_vert:yC,backgroundCube_frag:_C,cube_vert:vC,cube_frag:MC,depth_vert:SC,depth_frag:wC,distance_vert:EC,distance_frag:TC,equirect_vert:AC,equirect_frag:RC,linedashed_vert:CC,linedashed_frag:PC,meshbasic_vert:IC,meshbasic_frag:LC,meshlambert_vert:NC,meshlambert_frag:DC,meshmatcap_vert:UC,meshmatcap_frag:OC,meshnormal_vert:FC,meshnormal_frag:BC,meshphong_vert:kC,meshphong_frag:zC,meshphysical_vert:GC,meshphysical_frag:VC,meshtoon_vert:HC,meshtoon_frag:WC,points_vert:XC,points_frag:qC,shadow_vert:YC,shadow_frag:$C,sprite_vert:KC,sprite_frag:ZC},Re={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},gs={basic:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Pe(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Sn([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Sn([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Sn([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Sn([Re.common,Re.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Sn([Re.lights,Re.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};gs.physical={uniforms:Sn([gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var $f={r:0,b:0,g:0},JC=new Ze,aS=new je;aS.set(-1,0,0,0,1,0,0,0,1);function jC(s,e,t,n,i,r){let o=new Pe(0),a=i===!0?0:1,l,c,h=null,f=0,d=null;function m(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}u(m,"getBackground");function g(v){let S=!1,M=m(v);M===null?x(o,a):M&&M.isColor&&(x(M,1),S=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}u(g,"render");function _(v,S){let M=m(S);M&&M.isCubeTexture?(c===void 0&&(c=new pt(new as(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Vo(gs.backgroundCube.uniforms),vertexShader:gs.backgroundCube.vertexShader,fragmentShader:gs.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:u(function(){return this.uniforms.envMap.value},"get")}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JC.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(aS),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==St,(h!==M||f!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new cs(2,2),new Ln({name:"BackgroundMaterial",uniforms:Vo(gs.background.uniforms),vertexShader:gs.background.vertexShader,fragmentShader:gs.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:u(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==St,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}u(_,"addToRenderList");function x(v,S){v.getRGB($f,S0(s)),t.buffers.color.setClear($f.r,$f.g,$f.b,S,r)}u(x,"setClear");function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return u(b,"dispose"),{getClearColor:u(function(){return o},"getClearColor"),setClearColor:u(function(v,S=1){o.set(v),a=S,x(o,a)},"setClearColor"),getClearAlpha:u(function(){return a},"getClearAlpha"),setClearAlpha:u(function(v){a=v,x(o,a)},"setClearAlpha"),render:g,addToRenderList:_,dispose:b}}u(jC,"WebGLBackground");function QC(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(D,O,X,U,$){let te=!1,k=f(D,U,X,O);r!==k&&(r=k,c(r.object)),te=m(D,U,X,$),te&&g(D,U,X,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(D,O,X,U),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}u(a,"setup");function l(){return s.createVertexArray()}u(l,"createVertexArrayObject");function c(D){return s.bindVertexArray(D)}u(c,"bindVertexArrayObject");function h(D){return s.deleteVertexArray(D)}u(h,"deleteVertexArrayObject");function f(D,O,X,U){let $=U.wireframe===!0,te=n[O.id];te===void 0&&(te={},n[O.id]=te);let k=D.isInstancedMesh===!0?D.id:0,Y=te[k];Y===void 0&&(Y={},te[k]=Y);let W=Y[X.id];W===void 0&&(W={},Y[X.id]=W);let J=W[$];return J===void 0&&(J=d(l()),W[$]=J),J}u(f,"getBindingState");function d(D){let O=[],X=[],U=[];for(let $=0;$<t;$++)O[$]=0,X[$]=0,U[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:U,object:D,attributes:{},index:null}}u(d,"createBindingState");function m(D,O,X,U){let $=r.attributes,te=O.attributes,k=0,Y=X.getAttributes();for(let W in Y)if(Y[W].location>=0){let Q=$[W],de=te[W];if(de===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==U}u(m,"needsUpdate");function g(D,O,X,U){let $={},te=O.attributes,k=0,Y=X.getAttributes();for(let W in Y)if(Y[W].location>=0){let Q=te[W];Q===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),$[W]=de,k++}r.attributes=$,r.attributesNum=k,r.index=U}u(g,"saveCache");function _(){let D=r.newAttributes;for(let O=0,X=D.length;O<X;O++)D[O]=0}u(_,"initAttributes");function x(D){b(D,0)}u(x,"enableAttribute");function b(D,O){let X=r.newAttributes,U=r.enabledAttributes,$=r.attributeDivisors;X[D]=1,U[D]===0&&(s.enableVertexAttribArray(D),U[D]=1),$[D]!==O&&(s.vertexAttribDivisor(D,O),$[D]=O)}u(b,"enableAttributeAndDivisor");function v(){let D=r.newAttributes,O=r.enabledAttributes;for(let X=0,U=O.length;X<U;X++)O[X]!==D[X]&&(s.disableVertexAttribArray(X),O[X]=0)}u(v,"disableUnusedAttributes");function S(D,O,X,U,$,te,k){k===!0?s.vertexAttribIPointer(D,O,X,$,te):s.vertexAttribPointer(D,O,X,U,$,te)}u(S,"vertexAttribPointer");function M(D,O,X,U){_();let $=U.attributes,te=X.getAttributes(),k=O.defaultAttributeValues;for(let Y in te){let W=te[Y];if(W.location>=0){let J=$[Y];if(J===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let Q=J.normalized,de=J.itemSize,be=e.get(J);if(be===void 0)continue;let ee=be.buffer,ge=be.type,le=be.bytesPerElement,pe=ge===s.INT||ge===s.UNSIGNED_INT||J.gpuType===of;if(J.isInterleavedBufferAttribute){let he=J.data,Oe=he.isInterleavedBuffer===!0?he.stride:he.itemSize,tt=J.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)b(W.location+j,he.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let j=0;j<W.locationSize;j++)x(W.location+j);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let j=0;j<W.locationSize;j++)S(W.location+j,de/W.locationSize,ge,Q,Oe*le,(tt+de/W.locationSize*j)*le,pe)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)b(W.location+he,J.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<W.locationSize;he++)x(W.location+he);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let he=0;he<W.locationSize;he++)S(W.location+he,de/W.locationSize,ge,Q,de*le,de/W.locationSize*he*le,pe)}}else if(k!==void 0){let Q=k[Y];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(W.location,Q);break;case 3:s.vertexAttrib3fv(W.location,Q);break;case 4:s.vertexAttrib4fv(W.location,Q);break;default:s.vertexAttrib1fv(W.location,Q)}}}}v()}u(M,"setupVertexAttributes");function A(){I();for(let D in n){let O=n[D];for(let X in O){let U=O[X];for(let $ in U){let te=U[$];for(let k in te)h(te[k].object),delete te[k];delete U[$]}}delete n[D]}}u(A,"dispose");function E(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let X in O){let U=O[X];for(let $ in U){let te=U[$];for(let k in te)h(te[k].object),delete te[k];delete U[$]}}delete n[D.id]}u(E,"releaseStatesOfGeometry");function y(D){for(let O in n){let X=n[O];for(let U in X){let $=X[U];if($[D.id]===void 0)continue;let te=$[D.id];for(let k in te)h(te[k].object),delete te[k];delete $[D.id]}}}u(y,"releaseStatesOfProgram");function w(D){for(let O in n){let X=n[O],U=D.isInstancedMesh===!0?D.id:0,$=X[U];if($!==void 0){for(let te in $){let k=$[te];for(let Y in k)h(k[Y].object),delete k[Y];delete $[te]}delete X[U],Object.keys(X).length===0&&delete n[O]}}}u(w,"releaseStatesOfObject");function I(){P(),o=!0,r!==i&&(r=i,c(r.object))}u(I,"reset");function P(){i.geometry=null,i.program=null,i.wireframe=!1}return u(P,"resetDefaultState"),{setup:a,reset:I,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}u(QC,"WebGLBindingStates");function eP(s,e,t){let n;function i(l){n=l}u(i,"setMode");function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}u(r,"render");function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}u(o,"renderInstances");function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,n,1)}u(a,"renderMultiDraw"),this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}u(eP,"WebGLBufferRenderer");function tP(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}u(r,"getMaxAnisotropy");function o(y){return!(y!==Xn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}u(o,"textureFormatReadable");function a(y){let w=y===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Mn&&y!==ti&&!w&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}u(a,"textureTypeReadable");function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}u(l,"getMaxPrecision");let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:E}}u(tP,"WebGLCapabilities");function nP(s){let e=this,t=null,n=0,i=!1,r=!1,o=new kn,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,b=s.get(f);if(!i||g===null||g.length===0||r&&!x)r?h(null):c();else{let v=r?0:n,S=v*4,M=b.clippingState||null;l.value=M,M=h(g,d,S,m);for(let A=0;A!==S;++A)M[A]=t[A];b.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}u(c,"resetGlobalState");function h(f,d,m,g){let _=f!==null?f.length:0,x=null;if(_!==0){if(x=l.value,g!==!0||x===null){let b=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<b)&&(x=new Float32Array(b));for(let S=0,M=m;S!==_;++S,M+=4)o.copy(f[S]).applyMatrix4(v,a),o.normal.toArray(x,M),x[M+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}u(h,"projectPlanes")}u(nP,"WebGLClipping");var Mx=class Mx extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new as(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:Fo});r.uniforms.tEquirect.value=t;let o=new pt(i,r),a=t.minFilter;return t.minFilter===vn&&(t.minFilter=zt),new hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};u(Mx,"WebGLCubeRenderTarget");var bu=Mx,kM=256,iP=3,sP=20,lS=256,cS=16,rP=3,oP=new H,aP=new Pe,jf=class jf{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hl(1,10,null),this._boxMesh=new pt(new as(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=oP}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(aP));let x=new hl(n,i,h);return x.position.copy(a),x.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=VM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=GM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kM,_0(e))}_fromTexture(e,t){e.mapping===ko||e.mapping===pl?this._setSize(e.image.length===0?kM:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zM(e,!1,!1),n=Math.log2(e)-iP;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zM(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ko||e.mapping===pl?(this._cubemapMaterial===null&&(this._cubemapMaterial=VM()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=GM()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=lP(),this._integrationMaterial=cP());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cS);for(let o=0;o<=n;o++){let a=jf.lodToRoughness(o,n);if(o>n-rP)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(lS*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=uP());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};u(jf,"PMREMGenerator");var Zf=jf;function zM(s,e,t){return new bu(s,{minFilter:vn,generateMipmaps:e,type:ni,colorSpace:Pn,depthBuffer:t})}u(zM,"_createRenderTarget");function yu(s,e,t){return new Ln({name:s,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:Dn,blending:Fo,depthTest:!1,depthWrite:!1})}u(yu,"_getMaterial");function lP(){return yu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lS}u

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
	`)}u(lP,"_getGGXMaterial");function cP(){return yu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cS}},`

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
	`)}u(cP,"_getIntegrationMaterial");function uP(){return yu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sP}
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
	`)}u(uP,"_getBlurMaterial");function GM(){return yu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}u(GM,"_getEquirectMaterial");function VM(){return yu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}u(VM,"_getCubemapMaterial");function hP(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,m=!1){return d==null?null:m?o(d):r(d)}u(i,"get");function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===nf||m===sf)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new bu(g.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}u(r,"getCube");function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,g=m===nf||m===sf,_=m===ko||m===pl;if(g||_){let x=t.get(d),b=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==b)return n===null&&(n=new Zf(s)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Zf(s)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}u(o,"getPMREM");function a(d,m){return m===nf?d.mapping=ko:m===sf&&(d.mapping=pl),d}u(a,"mapTextureMapping");function l(d){let m=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&m++;return m===g}u(l,"isCubeTextureComplete");function c(d){let m=d.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}u(c,"onCubemapDispose");function h(d){let m=d.target;m.removeEventListener("dispose",h);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}u(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return u(f,"dispose"),{get:i,dispose:f}}u(hP,"WebGLEnvironments");function dP(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return u(t,"getExtension"),{has:u(function(n){return t(n)!==null},"has"),init:u(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:u(function(n){let i=t(n);return i===null&&To("WebGLRenderer: "+n+" extension not supported."),i},"get")}}u(dP,"WebGLExtensions");function fP(s,e,t,n){let i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}u(a,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}u(l,"destroyGeometry");function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}u(c,"get");function h(g){let _=g.attributes;for(let x in _)e.update(_[x],s.ARRAY_BUFFER)}u(h,"update");function f(g){let _=g.index,x=g.attributes.position,b=0;if(x===void 0)return;let v=_!==null?_.array.length:x.array.length/3-1,S=x.count>=65535?kc:Bc,M=new S(Math.ceil(v/3)*6,1),A=M.array;if(_!==null){let y=_.array;b=_.version;for(let w=0,I=0;w<v;w+=3){let P=y[w+0],D=y[w+1],O=y[w+2];A[I++]=P,A[I++]=D,A[I++]=D,A[I++]=O,A[I++]=O,A[I++]=P}}else{b=x.version;for(let y=0,w=0;y<v;y+=3){let I=y+0,P=y+1,D=y+2;A[w++]=I,A[w++]=P,A[w++]=P,A[w++]=D,A[w++]=D,A[w++]=I}}M.version=b;let E=r.get(g);E&&e.remove(E),r.set(g,M)}u(f,"updateWireframeAttribute");function d(g){let _=r.get(g);if(_){let x=g.index;x!==null&&_.version<x.version&&f(g)}else f(g);return r.get(g)}u(d,"getWireframeAttribute");function m(){for(let g in i){let _=i[g].deref();_!==void 0&&l(_)}}return u(m,"dispose"),{get:c,update:h,getWireframeAttribute:d,dispose:m}}u(fP,"WebGLGeometries");function pP(s,e,t){let n;function i(f){n=f}u(i,"setMode");let r,o;function a(f){r=f.type,o=f.bytesPerElement}u(a,"setIndex");function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}u(l,"render");function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}u(c,"renderInstances");function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let _=0;for(let x=0;x<m;x++)_+=d[x];t.update(_,n,1)}u(h,"renderMultiDraw"),this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}u(pP,"WebGLIndexedBufferRenderer");function mP(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}u(n,"update");function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return u(i,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}u(mP,"WebGLInfo");function gP(s,e,t){let n=new WeakMap,i=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let P=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",P)};var m=P;u(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,b=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let y=new Float32Array(A*E*4*f),w=new Po(y,A,E,f);w.type=ti,w.needsUpdate=!0;let I=M*4;for(let D=0;D<f;D++){let O=b[D],X=v[D],U=S[D],$=A*E*4*D;for(let te=0;te<O.count;te++){let k=te*I;g===!0&&(i.fromBufferAttribute(O,te),y[$+k+0]=i.x,y[$+k+1]=i.y,y[$+k+2]=i.z,y[$+k+3]=0),_===!0&&(i.fromBufferAttribute(X,te),y[$+k+4]=i.x,y[$+k+5]=i.y,y[$+k+6]=i.z,y[$+k+7]=0),x===!0&&(i.fromBufferAttribute(U,te),y[$+k+8]=i.x,y[$+k+9]=i.y,y[$+k+10]=i.z,y[$+k+11]=U.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new Ve(A,E)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return u(r,"update"),{update:r}}u(gP,"WebGLMorphtargets");function xP(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}u(o,"update");function a(){r=new WeakMap}u(a,"dispose");function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return u(l,"onInstancedMeshDispose"),{update:o,dispose:a}}u(xP,"WebGLObjects");var bP={[e0]:"LINEAR_TONE_MAPPING",[t0]:"REINHARD_TONE_MAPPING",[n0]:"CINEON_TONE_MAPPING",[lu]:"ACES_FILMIC_TONE_MAPPING",[s0]:"AGX_TONE_MAPPING",[r0]:"NEUTRAL_TONE_MAPPING",[i0]:"CUSTOM_TONE_MAPPING"};function yP(s,e,t,n,i,r){let o=new jn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Rt;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let f=new Ed({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pt(h,f),m=new Uo(-1,1,1,-1,0,1),g=null,_=null,x=!1,b,v=null,S=[],M=!1;this.setSize=function(A,E){o.setSize(A,E),a!==null&&a.setSize(A,E),l!==null&&l.setSize(A,E);for(let y=0;y<S.length;y++){let w=S[y];w.setSize&&w.setSize(A,E)}},this.setEffects=function(A){S=A,M=S.length>0&&S[0].isRenderPass===!0;let E=o.width,y=o.height;S.length>0&&a===null&&(a=new jn(E,y,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new jn(E,y,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let w=i===!0&&S.some(I=>I.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Js(E,y),r===!0&&(c.format=rr,c.type=Go)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let I=0;I<S.length;I++){let P=S[I];P.setSize&&P.setSize(E,y),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,E){if(x||A.toneMapping===ds&&S.length===0)return!1;if(v=E,E!==null){let y=E.width,w=E.height;(o.width!==y||o.height!==w)&&this.setSize(y,w)}return M===!1&&A.setRenderTarget(o),b=A.toneMapping,A.toneMapping=ds,!0},this.hasRenderPass=function(){return M},this.end=function(A,E){A.toneMapping=b,x=!0;let y=o,w=a;for(let I=0;I<S.length;I++){let P=S[I];P.enabled!==!1&&(P.render(A,w,y,E),P.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(g!==A.outputColorSpace||_!==A.toneMapping){g=A.outputColorSpace,_=A.toneMapping,f.defines={},ct.getTransfer(g)===St&&(f.defines.SRGB_TRANSFER="");let I=bP[_];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(v),A.render(d,m),v=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}u(yP,"WebGLOutput");var uS=new jt,hS=new Js(1,1),dS=new Yc(1),fS=new Po,pS=new _d,mS=new qc,HM=[],WM=[],XM=new Float32Array(16),qM=new Float32Array(9),YM=new Float32Array(4);function yl(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=HM[i];if(r===void 0&&(r=new Float32Array(i),HM[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}u(yl,"flatten");function en(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}u(en,"arraysEqual");function tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}u(tn,"copyArray");function Qf(s,e){let t=WM[e];t===void 0&&(t=new Int32Array(e),WM[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}u(Qf,"allocTexUnits");function _P(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}u(_P,"setValueV1f");function vP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}u(vP,"setValueV2f");function MP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}u(MP,"setValueV3f");function SP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}u(SP,"setValueV4f");function wP(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;YM.set(n),s.uniformMatrix2fv(this.addr,!1,YM),tn(t,n)}}u(wP,"setValueM2");function EP(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;qM.set(n),s.uniformMatrix3fv(this.addr,!1,qM),tn(t,n)}}u(EP,"setValueM3");function TP(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;XM.set(n),s.uniformMatrix4fv(this.addr,!1,XM),tn(t,n)}}u(TP,"setValueM4");function AP(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}u(AP,"setValueV1i");function RP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}u(RP,"setValueV2i");function CP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}u(CP,"setValueV3i");function PP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}u(PP,"setValueV4i");function IP(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}u(IP,"setValueV1ui");function LP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}u(LP,"setValueV2ui");function NP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}u(NP,"setValueV3ui");function DP(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}u(DP,"setValueV4ui");function ep(s){return s.version===0&&(s.compareFunction=g0,s.needsUpdate=!0),s}u(ep,"initShadowTexture");function UP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ep(hS):r=uS,t.setTexture2D(e||r,i)}u(UP,"setValueT1");function OP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pS,i)}u(OP,"setValueT3D1");function FP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ep(dS):r=mS,t.setTextureCube(e||r,i)}u(FP,"setValueT6");function BP(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fS,i)}u(BP,"setValueT2DArray1");function kP(s){switch(s){case 5126:return _P;case 35664:return vP;case 35665:return MP;case 35666:return SP;case 35674:return wP;case 35675:return EP;case 35676:return TP;case 5124:case 35670:return AP;case 35667:case 35671:return RP;case 35668:case 35672:return CP;case 35669:case 35673:return PP;case 5125:return IP;case 36294:return LP;case 36295:return NP;case 36296:return DP;case 35678:case 36198:case 36298:case 36306:case 35682:return UP;case 35679:case 36299:case 36307:return OP;case 35680:case 36300:case 36308:case 36293:return FP;case 36289:case 36303:case 36311:case 36292:return BP}}u(kP,"getSingularSetter");function zP(s,e){s.uniform1fv(this.addr,e)}u(zP,"setValueV1fArray");function GP(s,e){let t=yl(e,this.size,2);s.uniform2fv(this.addr,t)}u(GP,"setValueV2fArray");function VP(s,e){let t=yl(e,this.size,3);s.uniform3fv(this.addr,t)}u(VP,"setValueV3fArray");function HP(s,e){let t=yl(e,this.size,4);s.uniform4fv(this.addr,t)}u(HP,"setValueV4fArray");function WP(s,e){let t=yl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}u(WP,"setValueM2Array");function XP(s,e){let t=yl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}u(XP,"setValueM3Array");function qP(s,e){let t=yl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}u(qP,"setValueM4Array");function YP(s,e){s.uniform1iv(this.addr,e)}u(YP,"setValueV1iArray");function $P(s,e){s.uniform2iv(this.addr,e)}u($P,"setValueV2iArray");function KP(s,e){s.uniform3iv(this.addr,e)}u(KP,"setValueV3iArray");function ZP(s,e){s.uniform4iv(this.addr,e)}u(ZP,"setValueV4iArray");function JP(s,e){s.uniform1uiv(this.addr,e)}u(JP,"setValueV1uiArray");function jP(s,e){s.uniform2uiv(this.addr,e)}u(jP,"setValueV2uiArray");function QP(s,e){s.uniform3uiv(this.addr,e)}u(QP,"setValueV3uiArray");function e2(s,e){s.uniform4uiv(this.addr,e)}u(e2,"setValueV4uiArray");function t2(s,e,t){let n=this.cache,i=e.length,r=Qf(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ep(hS):o=uS;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}u(t2,"setValueT1Array");function n2(s,e,t){let n=this.cache,i=e.length,r=Qf(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||pS,r[o])}u(n2,"setValueT3DArray");function i2(s,e,t){let n=this.cache,i=e.length,r=Qf(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=ep(dS):o=mS;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}u(i2,"setValueT6Array");function s2(s,e,t){let n=this.cache,i=e.length,r=Qf(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fS,r[o])}u(s2,"setValueT2DArrayArray");function r2(s){switch(s){case 5126:return zP;case 35664:return GP;case 35665:return VP;case 35666:return HP;case 35674:return WP;case 35675:return XP;case 35676:return qP;case 5124:case 35670:return YP;case 35667:case 35671:return $P;case 35668:case 35672:return KP;case 35669:case 35673:return ZP;case 5125:return JP;case 36294:return jP;case 36295:return QP;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return s2}}u(r2,"getPureArraySetter");var Sx=class Sx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kP(t.type)}};u(Sx,"SingleUniform");var px=Sx,wx=class wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r2(t.type)}};u(wx,"PureArrayUniform");var mx=wx,Ex=class Ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}};u(Ex,"StructuredUniform");var gx=Ex,dx=/(\w+)(\])?(\[|\.)?/g;function $M(s,e){s.seq.push(e),s.map[e.id]=e}u($M,"addUniform");function o2(s,e,t){let n=s.name,i=n.length;for(dx.lastIndex=0;;){let r=dx.exec(n),o=dx.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$M(t,c===void 0?new px(a,s,e):new mx(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new gx(a),$M(t,f)),t=f}}}u(o2,"parseUniform");var Tx=class Tx{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);o2(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};u(Tx,"WebGLUniforms");var bl=Tx;function KM(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}u(KM,"WebGLShader");var a2=37297,l2=0;function c2(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}u(c2,"handleSource");var ZM=new je;function u2(s){ct._getMatrix(ZM,ct.workingColorSpace,s);let e=`mat3( ${ZM.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(s)){case Dc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}u(u2,"getEncodingComponents");function JM(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+c2(s.getShaderSource(e),a)}else return r}u(JM,"getShaderErrors");function h2(s,e){let t=u2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}u(h2,"getTexelEncodingFunction");var d2={[e0]:"Linear",[t0]:"Reinhard",[n0]:"Cineon",[lu]:"ACESFilmic",[s0]:"AgX",[r0]:"Neutral",[i0]:"Custom"};function f2(s,e){let t=d2[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}u(f2,"getToneMappingFunction");var Kf=new H;function p2(){ct.getLuminanceCoefficients(Kf);let s=Kf.x.toFixed(4),e=Kf.y.toFixed(4),t=Kf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}u(p2,"getLuminanceFunction");function m2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xu).join(`
`)}u(m2,"generateVertexExtensions");function g2(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}u(g2,"generateDefines");function x2(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}u(x2,"fetchAttributeLocations");function xu(s){return s!==""}u(xu,"filterEmptyLine");function jM(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}u(jM,"replaceLightNums");function QM(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}u(QM,"replaceClippingPlaneNums");var b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function xx(s){return s.replace(b2,y2)}u(xx,"resolveIncludes");function y2(s,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xx(t)}u(y2,"includeReplacer");var _2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eS(s){return s.replace(_2,v2)}u(eS,"unrollLoops");function v2(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}u(v2,"loopReplacer");function tS(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}u(tS,"generatePrecision");var M2={[au]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function S2(s){return M2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}u(S2,"generateShadowMapTypeDefine");var w2={[pl]:"ENVMAP_MODE_REFRACTION"};function E2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":w2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}u(E2,"generateEnvMapModeDefine");var T2={[Qm]:"ENVMAP_BLENDING_MULTIPLY",[xM]:"ENVMAP_BLENDING_MIX",[bM]:"ENVMAP_BLENDING_ADD"};function A2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":T2[s.combine]||"ENVMAP_BLENDING_NONE"}u(A2,"generateEnvMapBlendingDefine");function R2(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=S2(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=E2(t),f=A2(t),d=m2(t),m=g2(r),g=i.createProgram(),_,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xu).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xu).join(`
`),x.length>0&&(x+=`
`)):(_=[tS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xu).join(`
`),x=[tS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?lt.tonemapping_pars_fragment:"",t.toneMapping!==ds?f2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,h2("linearToOutputTexel",t.outputColorSpace),p2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xu).join(`
`)),o=xx(o),o=jM(o,t),o=QM(o,t),a=xx(a),a=jM(a,t),a=QM(a,t),o=eS(o),a=eS(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===b0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===b0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=b+_+o,S=b+x+a,M=KM(i,i.VERTEX_SHADER,v),A=KM(i,i.FRAGMENT_SHADER,S);i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(M)||"",X=i.getShaderInfoLog(A)||"",U=D.trim(),$=O.trim(),te=X.trim(),k=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,A);else{let W=JM(i,M,"vertex"),J=JM(i,A,"fragment");Je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+W+`
`+J)}else U!==""?He("WebGLProgram: Program Info Log:",U):($===""||te==="")&&(Y=!1);Y&&(P.diagnostics={runnable:k,programLog:U,vertexShader:{log:$,prefix:_},fragmentShader:{log:te,prefix:x}})}i.deleteShader(M),i.deleteShader(A),y=new bl(i,g),w=x2(i,g)}u(E,"onFirstUse");let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,a2)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}u(R2,"WebGLProgram");var C2=0,Ax=class Ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}};u(Ax,"WebGLShaderCache");var bx=Ax,Rx=class Rx{constructor(e){this.id=C2++,this.code=e,this.usedTimes=0}};u(Rx,"WebGLShaderStage");var yx=Rx;function P2(s){return s===fs||s===fu||s===pu}u(P2,"isPackedRGFormat");function I2(s,e,t,n,i,r){let o=new il,a=new bx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}u(m,"getChannel");function g(y,w,I,P,D,O){let X=P.fog,U=D.geometry,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,te=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||$,te),Y=d[y.type],W=n.precision;y.precision!==null&&(W=n.getMaxPrecision(y.precision),W!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));let J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=J!==void 0?J.length:0,de=0;U.morphAttributes.position!==void 0&&(de=1),U.morphAttributes.normal!==void 0&&(de=2),U.morphAttributes.color!==void 0&&(de=3);let be,ee,ge,le;if(Y){let Ne=gs[Y];be=Ne.vertexShader,ee=Ne.fragmentShader}else{be=y.vertexShader,ee=y.fragmentShader;let Ne=a.getVertexShaderStage(y),Tt=a.getFragmentShaderStage(y);a.update(y,Ne,Tt),ge=Ne.id,le=Tt.id}let pe=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,tt=D.isBatchedMesh===!0,j=!!y.map,xe=!!y.matcap,oe=!!k,fe=oe&&k.isPMREMTexture===!0,Ce=!!y.aoMap,Ie=!!y.lightMap,qe=!!y.bumpMap&&y.wireframe===!1,We=!!y.normalMap,mt=!!y.displacementMap,bt=!!y.emissiveMap,Et=!!y.metalnessMap,Ct=!!y.roughnessMap,nt=y.anisotropy>0,V=y.clearcoat>0,Ot=y.diffuseRoughness>0,ht=y.dispersion>0,it=y.retroreflectivity>0,ue=y.iridescence>0,st=y.sheen>0,ze=y.transmission>0,Ke=nt&&!!y.anisotropyMap,N=V&&!!y.clearcoatMap,T=V&&!!y.clearcoatNormalMap,q=V&&!!y.clearcoatRoughnessMap,me=Ot&&!!y.diffuseRoughnessMap,re=ue&&!!y.iridescenceMap,ve=ue&&!!y.iridescenceThicknessMap,Te=st&&!!y.sheenColorMap,se=st&&!!y.sheenRoughnessMap,ae=!!y.specularMap,Se=!!y.specularColorMap,F=!!y.specularIntensityMap,ce=ze&&!!y.transmissionMap,ie=ze&&!!y.thicknessMap,we=!!y.gradientMap,_e=!!y.alphaMap,Me=y.alphaTest>0,Xe=!!y.alphaHash,at=!!y.extensions,ye=ds;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ye=s.toneMapping);let Ye=fe?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,rt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:be,fragmentShader:ee,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:tt,batchingColor:tt&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:j,matcap:xe,envMap:oe,envMapMode:oe&&k.mapping,envMapPMREM:fe,envMapMaxLod:fe?Ye.length-1:null,envMapSize:fe?Ye[0].width:null,aoMap:Ce,lightMap:Ie,bumpMap:qe,normalMap:We,displacementMap:mt,emissiveMap:bt,normalMapObjectSpace:We&&y.normalMapType===wM,normalMapTangentSpace:We&&y.normalMapType===Xf,packedNormalMap:We&&y.normalMapType===Xf&&P2(y.normalMap.format),metalnessMap:Et,roughnessMap:Ct,anisotropy:nt,anisotropyMap:Ke,clearcoat:V,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:q,diffuseRoughness:Ot,diffuseRoughnessMap:me,dispersion:ht,retroreflection:it,iridescence:ue,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:st,sheenColorMap:Te,sheenRoughnessMap:se,specularMap:ae,specularColorMap:Se,specularIntensityMap:F,transmission:ze,transmissionMap:ce,thicknessMap:ie,gradientMap:we,opaque:y.transparent===!1&&y.blending===fl&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:Me,alphaHash:Xe,combine:y.combine,mapUv:j&&m(y.map.channel),aoMapUv:Ce&&m(y.aoMap.channel),lightMapUv:Ie&&m(y.lightMap.channel),bumpMapUv:qe&&m(y.bumpMap.channel),normalMapUv:We&&m(y.normalMap.channel),displacementMapUv:mt&&m(y.displacementMap.channel),emissiveMapUv:bt&&m(y.emissiveMap.channel),metalnessMapUv:Et&&m(y.metalnessMap.channel),roughnessMapUv:Ct&&m(y.roughnessMap.channel),anisotropyMapUv:Ke&&m(y.anisotropyMap.channel),clearcoatMapUv:N&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&m(y.diffuseRoughnessMap.channel),iridescenceMapUv:re&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(y.sheenRoughnessMap.channel),specularMapUv:ae&&m(y.specularMap.channel),specularColorMapUv:Se&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:ce&&m(y.transmissionMap.channel),thicknessMapUv:ie&&m(y.thicknessMap.channel),alphaMapUv:_e&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(We||nt),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(j||_e),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&We===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:de,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:j&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:bt&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}u(g,"getParameters");function _(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(w,y),b(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}u(_,"getProgramCacheKey");function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapPMREM),y.push(w.envMapMaxLod),y.push(w.envMapSize),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.diffuseRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.numLightProbeGrids),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}u(x,"getProgramCacheKeyParameters");function b(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}u(b,"getProgramCacheKeyBooleans");function v(y){let w=d[y.type],I;if(w){let P=gs[w];I=Ho.clone(P.uniforms)}else I=y.uniforms;return I}u(v,"getUniforms");function S(y,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new R2(s,w,y,i),c.push(I),h.set(w,I)),I}u(S,"acquireProgram");function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}u(M,"releaseProgram");function A(y){a.remove(y)}u(A,"releaseShaderCache");function E(){a.dispose()}return u(E,"dispose"),{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:E}}u(I2,"WebGLPrograms");function L2(){let s=new WeakMap;function e(o){return s.has(o)}u(e,"has");function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}u(t,"get");function n(o){s.delete(o)}u(n,"remove");function i(o,a,l){s.get(o)[a]=l}u(i,"update");function r(){s=new WeakMap}return u(r,"dispose"),{has:e,get:t,remove:n,update:i,dispose:r}}u(L2,"WebGLProperties");function N2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}u(N2,"painterSortStable");function nS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}u(nS,"reversePainterSortStable");function iS(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}u(r,"init");function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}u(o,"materialVariant");function a(d,m,g,_,x,b){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:x,group:b},s[e]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=x,v.group=b),e++,v}u(a,"getNextRenderItem");function l(d,m,g,_,x,b,v){v.reversedDepth===!0&&(x=-x);let S=a(d,m,g,_,x,b);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}u(l,"push");function c(d,m,g,_,x,b){let v=a(d,m,g,_,x,b);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}u(c,"unshift");function h(d,m){t.length>1&&t.sort(d||N2),n.length>1&&n.sort(m||nS),i.length>1&&i.sort(m||nS)}u(h,"sort");function f(){for(let d=e,m=s.length;d<m;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return u(f,"finish"),{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}u(iS,"WebGLRenderList");function D2(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new iS,s.set(n,[o])):i>=r.length?(o=new iS,r.push(o)):o=r[i],o}u(e,"get");function t(){s=new WeakMap}return u(t,"dispose"),{get:e,dispose:t}}u(D2,"WebGLRenderLists");function U2(){let s={};return{get:u(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Pe};break;case"SpotLight":t={position:new H,direction:new H,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t},"get")}}u(U2,"UniformsCache");function O2(){let s={};return{get:u(function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t},"get")}}u(O2,"ShadowUniformsCache");var F2=0;function B2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}u(B2,"shadowCastingAndTexturingLightsFirst");function k2(s){let e=new U2,t=O2(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let i=new H,r=new Ze,o=new Ze;function a(c){let h=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,x=0,b=0,v=0,S=0,M=0,A=0,E=0,y=0,w=0,I=0,P=0;c.sort(B2);for(let O=0,X=c.length;O<X;O++){let U=c[O],$=U.color,te=U.intensity,k=U.distance,Y=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===fs?Y=U.shadow.map.texture:Y=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=$.r*te,f+=$.g*te,d+=$.b*te;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],te);P++}else if(U.isSunLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,Q=t.get(U);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=Y;let de=J.getViewportCount();for(let be=0;be<de;be++)n.sunShadowMatrix[_+be]=J.getMatrix(be),n.sunShadowCascade[_+be]=J._cascadeData[be];_+=de,g++}n.sun[m]=W,m++}else if(U.isDirectionalLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,Q=t.get(U);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[x]=Q,n.directionalShadowMap[x]=Y,n.directionalShadowMatrix[x]=U.shadow.matrix,A++}n.directional[x]=W,x++}else if(U.isSpotLight){let W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy($).multiplyScalar(te),W.distance=k,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[v]=W;let J=U.shadow;if(U.map&&(n.spotLightMap[w]=U.map,w++,J.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[v]=J.matrix,U.castShadow){let Q=t.get(U);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=Y,y++}v++}else if(U.isRectAreaLight){let W=e.get(U);W.color.copy($).multiplyScalar(te),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[S]=W,S++}else if(U.isPointLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let J=U.shadow,Q=t.get(U);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[b]=Q,n.pointShadowMap[b]=Y,n.pointShadowMatrix[b]=U.shadow.matrix,E++}n.point[b]=W,b++}else if(U.isHemisphereLight){let W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(te),W.groundColor.copy(U.groundColor).multiplyScalar(te),n.hemi[M]=W,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==m||D.directionalLength!==x||D.pointLength!==b||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=x,n.spot.length=v,n.rectArea.length=S,n.point.length=b,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,D.sunLength=m,D.directionalLength=x,D.pointLength=b,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=P,n.version=F2++)}u(a,"setup");function l(c,h){let f=0,d=0,m=0,g=0,_=0,x=0,b=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(b),f++}else if(M.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(b),d++}else if(M.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(b),g++}else if(M.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),o.identity(),r.copy(M.matrixWorld),r.premultiply(b),o.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let A=n.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(b),m++}else if(M.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(b),x++}}}return u(l,"setupView"),{setup:a,setupView:l,state:n}}u(k2,"WebGLLights");function sS(s){let e=new k2(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}u(r,"init");function o(f){f.isLightProbeGrid?i.push(f):t.push(f)}u(o,"pushLight");function a(f){n.push(f)}u(a,"pushShadow");function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}u(l,"setupLights");function c(f){e.setupView(t,f)}u(c,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}u(sS,"WebGLRenderState");function z2(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new sS(s),e.set(i,[a])):r>=o.length?(a=new sS(s),o.push(a)):a=o[r],a}u(t,"get");function n(){e=new WeakMap}return u(n,"dispose"),{get:t,dispose:n}}u(z2,"WebGLRenderStates");var G2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V2=`uniform sampler2D shadow_pass;
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
}`,H2=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],W2=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],rS=new Ze,gu=new H,fx=new H;function X2(s,e,t){let n=new Fr,i=new Ve,r=new Ve,o=new At,a=new Td,l=new Ad,c={},h=t.maxTextureSize,f={[_i]:Dn,[Dn]:_i,[Qt]:Qt},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:G2,fragmentShader:V2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let b=this.type;this.render=function(E,y,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===tf&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=au);let I=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Fo),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=b!==this.type;X&&y.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach($=>$.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,$=E.length;U<$;U++){let te=E[U],k=te.shadow;if(k===void 0){He("WebGLShadowMap:",te,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Y=k.getFrameExtents();i.multiply(Y),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,k.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===dl){if(te.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new jn(i.x,i.y,{format:fs,type:ni,minFilter:zt,magFilter:zt,generateMipmaps:!1}),k.map.texture.name=te.name+".shadowMap",k.map.depthTexture=new Js(i.x,i.y,ti),k.map.depthTexture.name=te.name+".shadowMapDepth",k.map.depthTexture.format=Ks,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht}else te.isPointLight?(k.map=new bu(i.x),k.map.depthTexture=new Yc(i.x,zi)):(k.map=new jn(i.x,i.y),k.map.depthTexture=new Js(i.x,i.y,zi)),k.map.depthTexture.name=te.name+".shadowMap",k.map.depthTexture.format=Ks,this.type===au?(k.map.depthTexture.compareFunction=W?m0:p0,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let J=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();te.isPointLight!==!0&&k.updateMatrices(te,w);let Q=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let de=0;de<J;de++){let be=k.getCamera(de);if(te.isPointLight){let ee=k.camera,ge=k.matrix,le=te.distance||ee.far;le!==ee.far&&(ee.far=le,ee.updateProjectionMatrix()),gu.setFromMatrixPosition(te.matrixWorld),ee.position.copy(gu),fx.copy(ee.position),fx.add(H2[de]),ee.up.copy(W2[de]),ee.lookAt(fx),ee.updateMatrixWorld(),ge.makeTranslation(-gu.x,-gu.y,-gu.z),rS.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(rS,ee.coordinateSystem,ee.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,de),s.clear();else{de===0&&(s.setRenderTarget(k.map),s.clear());let ee=k.getViewport(de);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),O.viewport(o)}n=k.getFrustum(de),M(y,w,be,te,Q,this.type)}k.isPointLightShadow!==!0&&this.type===dl&&v(k,w),k.needsUpdate=!1}b=this.type,x.needsUpdate=!1,s.setRenderTarget(I,P,D)};function v(E,y){let w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(i.x,i.y,{format:fs,type:ni}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(y,null,w,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(y,null,w,m,_,null)}u(v,"VSMPass");function S(E,y,w,I){let P=null,D=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=w.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let O=P.uuid,X=y.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let $=U[X];$===void 0&&($=P.clone(),U[X]=$,y.addEventListener("dispose",A)),P=$}if(P.visible=y.visible,P.wireframe=y.wireframe,I===dl?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:f[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=s.properties.get(P);O.light=w}return P}u(S,"getDepthMaterial");function M(E,y,w,I,P,D){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===dl)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let U=e.update(E),$=E.material;if(Array.isArray($)){let te=U.groups;for(let k=0,Y=te.length;k<Y;k++){let W=te[k],J=$[W.materialIndex];if(J&&J.visible){let Q=S(E,J,I,D);E.onBeforeShadow(s,E,y,w,U,Q,W),s.renderBufferDirect(w,null,U,Q,E,W),E.onAfterShadow(s,E,y,w,U,Q,W)}}}else if($.visible){let te=S(E,$,I,D);E.onBeforeShadow(s,E,y,w,U,te,null),s.renderBufferDirect(w,null,U,te,E,null),E.onAfterShadow(s,E,y,w,U,te,null)}}let X=E.children;for(let U=0,$=X.length;U<$;U++)M(X[U],y,w,I,P,D)}u(M,"renderObject");function A(E){E.target.removeEventListener("dispose",A);for(let w in c){let I=c[w],P=E.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}u(A,"onMaterialDispose")}u(X2,"WebGLShadowMap");function q2(s,e){function t(){let F=!1,ce=new At,ie=null,we=new At(0,0,0,0);return{setMask:u(function(_e){ie!==_e&&!F&&(s.colorMask(_e,_e,_e,_e),ie=_e)},"setMask"),setLocked:u(function(_e){F=_e},"setLocked"),setClear:u(function(_e,Me,Xe,at,ye){ye===!0&&(_e*=at,Me*=at,Xe*=at),ce.set(_e,Me,Xe,at),we.equals(ce)===!1&&(s.clearColor(_e,Me,Xe,at),we.copy(ce))},"setClear"),reset:u(function(){F=!1,ie=null,we.set(-1,0,0,0)},"reset")}}u(t,"ColorBuffer");function n(){let F=!1,ce=!1,ie=null,we=null,_e=null;return{setReversed:u(function(Me){if(ce!==Me){let Xe=e.get("EXT_clip_control");Me?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ce=Me;let at=_e;_e=null,this.setClear(at)}},"setReversed"),getReversed:u(function(){return ce},"getReversed"),setTest:u(function(Me){Me?he(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},"setTest"),setMask:u(function(Me){ie!==Me&&!F&&(s.depthMask(Me),ie=Me)},"setMask"),setFunc:u(function(Me){if(ce&&(Me=DM[Me]),we!==Me){switch(Me){case hd:s.depthFunc(s.NEVER);break;case dd:s.depthFunc(s.ALWAYS);break;case fd:s.depthFunc(s.LESS);break;case Ja:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case md:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Me}},"setFunc"),setLocked:u(function(Me){F=Me},"setLocked"),setClear:u(function(Me){_e!==Me&&(_e=Me,ce&&(Me=1-Me),s.clearDepth(Me))},"setClear"),reset:u(function(){F=!1,ie=null,we=null,_e=null,ce=!1},"reset")}}u(n,"DepthBuffer");function i(){let F=!1,ce=null,ie=null,we=null,_e=null,Me=null,Xe=null,at=null,ye=null;return{setTest:u(function(Ye){F||(Ye?he(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},"setTest"),setMask:u(function(Ye){ce!==Ye&&!F&&(s.stencilMask(Ye),ce=Ye)},"setMask"),setFunc:u(function(Ye,rt,Ne){(ie!==Ye||we!==rt||_e!==Ne)&&(s.stencilFunc(Ye,rt,Ne),ie=Ye,we=rt,_e=Ne)},"setFunc"),setOp:u(function(Ye,rt,Ne){(Me!==Ye||Xe!==rt||at!==Ne)&&(s.stencilOp(Ye,rt,Ne),Me=Ye,Xe=rt,at=Ne)},"setOp"),setLocked:u(function(Ye){F=Ye},"setLocked"),setClear:u(function(Ye){ye!==Ye&&(s.clearStencil(Ye),ye=Ye)},"setClear"),reset:u(function(){F=!1,ce=null,ie=null,we=null,_e=null,Me=null,Xe=null,at=null,ye=null},"reset")}}u(i,"StencilBuffer");let r=new t,o=new n,a=new i,l={},c=new WeakMap,h={},f={},d={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,S=null,M=null,A=null,E=null,y=null,w=new Pe(0,0,0),I=0,P=!1,D=null,O=null,X=null,U=null,$=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=Y>=2);let J=null,Q={},de=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),ee=new At().fromArray(de),ge=new At().fromArray(be);function le(F,ce,ie,we){let _e=new Uint8Array(4),Me=s.createTexture();s.bindTexture(F,Me),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<ie;Xe++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ce+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Me}u(le,"createTexture");let pe={};pe[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(s.DEPTH_TEST),o.setFunc(Ja),qe(!1),We(Ym),he(s.CULL_FACE),Ce(Fo);function he(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}u(he,"enable");function Oe(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}u(Oe,"disable");function tt(F,ce){return d[F]!==ce?(s.bindFramebuffer(F,ce),d[F]=ce,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}u(tt,"bindFramebuffer");function j(F,ce){let ie=g,we=!1;if(F){ie=m.get(ce),ie===void 0&&(ie=[],m.set(ce,ie));let _e=F.textures;if(ie.length!==_e.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Xe=_e.length;Me<Xe;Me++)ie[Me]=s.COLOR_ATTACHMENT0+Me;ie.length=_e.length,we=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,we=!0);we&&s.drawBuffers(ie)}u(j,"drawBuffers");function xe(F){return _!==F?(s.useProgram(F),_=F,!0):!1}u(xe,"useProgram");let oe={[Bo]:s.FUNC_ADD,[eM]:s.FUNC_SUBTRACT,[tM]:s.FUNC_REVERSE_SUBTRACT};oe[nM]=s.MIN,oe[iM]=s.MAX;let fe={[sM]:s.ZERO,[rM]:s.ONE,[oM]:s.SRC_COLOR,[Jm]:s.SRC_ALPHA,[dM]:s.SRC_ALPHA_SATURATE,[uM]:s.DST_COLOR,[lM]:s.DST_ALPHA,[aM]:s.ONE_MINUS_SRC_COLOR,[jm]:s.ONE_MINUS_SRC_ALPHA,[hM]:s.ONE_MINUS_DST_COLOR,[cM]:s.ONE_MINUS_DST_ALPHA,[fM]:s.CONSTANT_COLOR,[pM]:s.ONE_MINUS_CONSTANT_COLOR,[mM]:s.CONSTANT_ALPHA,[gM]:s.ONE_MINUS_CONSTANT_ALPHA};function Ce(F,ce,ie,we,_e,Me,Xe,at,ye,Ye){if(F===Fo){x===!0&&(Oe(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),F!==Qv){if(F!==b||Ye!==P){if((v!==Bo||A!==Bo)&&(s.blendEquation(s.FUNC_ADD),v=Bo,A=Bo),Ye)switch(F){case fl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $m:s.blendFunc(s.ONE,s.ONE);break;case Km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case fl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $m:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Km:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zm:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}S=null,M=null,E=null,y=null,w.set(0,0,0),I=0,b=F,P=Ye}return}_e=_e||ce,Me=Me||ie,Xe=Xe||we,(ce!==v||_e!==A)&&(s.blendEquationSeparate(oe[ce],oe[_e]),v=ce,A=_e),(ie!==S||we!==M||Me!==E||Xe!==y)&&(s.blendFuncSeparate(fe[ie],fe[we],fe[Me],fe[Xe]),S=ie,M=we,E=Me,y=Xe),(at.equals(w)===!1||ye!==I)&&(s.blendColor(at.r,at.g,at.b,ye),w.copy(at),I=ye),b=F,P=!1}u(Ce,"setBlending");function Ie(F,ce){F.side===Qt?Oe(s.CULL_FACE):he(s.CULL_FACE);let ie=F.side===Dn;ce&&(ie=!ie),qe(ie),F.blending===fl&&F.transparent===!1?Ce(Fo):Ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let we=F.stencilWrite;a.setTest(we),we&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}u(Ie,"setMaterial");function qe(F){D!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),D=F)}u(qe,"setFlipSided");function We(F){F!==Jv?(he(s.CULL_FACE),F!==O&&(F===Ym?s.cullFace(s.BACK):F===jv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),O=F}u(We,"setCullFace");function mt(F){F!==X&&(k&&s.lineWidth(F),X=F)}u(mt,"setLineWidth");function bt(F,ce,ie){F?(he(s.POLYGON_OFFSET_FILL),(U!==ce||$!==ie)&&(U=ce,$=ie,o.getReversed()&&(ce=-ce,ie=-ie),s.polygonOffset(ce,ie))):Oe(s.POLYGON_OFFSET_FILL)}u(bt,"setPolygonOffset");function Et(F){F?he(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}u(Et,"setScissorTest");function Ct(F){F===void 0&&(F=s.TEXTURE0+te-1),J!==F&&(s.activeTexture(F),J=F)}u(Ct,"activeTexture");function nt(F,ce,ie){ie===void 0&&(J===null?ie=s.TEXTURE0+te-1:ie=J);let we=Q[ie];we===void 0&&(we={type:void 0,texture:void 0},Q[ie]=we),(we.type!==F||we.texture!==ce)&&(J!==ie&&(s.activeTexture(ie),J=ie),s.bindTexture(F,ce||pe[F]),we.type=F,we.texture=ce)}u(nt,"bindTexture");function V(){let F=Q[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}u(V,"unbindTexture");function Ot(){try{s.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(Ot,"compressedTexImage2D");function ht(){try{s.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(ht,"compressedTexImage3D");function it(){try{s.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(it,"texSubImage2D");function ue(){try{s.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(ue,"texSubImage3D");function st(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(st,"compressedTexSubImage2D");function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(ze,"compressedTexSubImage3D");function Ke(){try{s.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(Ke,"texStorage2D");function N(){try{s.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(N,"texStorage3D");function T(){try{s.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}u(T,"texImage2D");function q(){try{s.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}u(q,"texImage3D");function me(F){return f[F]!==void 0?f[F]:s.getParameter(F)}u(me,"getParameter");function re(F,ce){f[F]!==ce&&(s.pixelStorei(F,ce),f[F]=ce)}u(re,"pixelStorei");function ve(F){ee.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ee.copy(F))}u(ve,"scissor");function Te(F){ge.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ge.copy(F))}u(Te,"viewport");function se(F,ce){let ie=c.get(ce);ie===void 0&&(ie=new WeakMap,c.set(ce,ie));let we=ie.get(F);we===void 0&&(we=s.getUniformBlockIndex(ce,F.name),s.uniformBlockBinding(ce,we,we),ie.set(F,we))}u(se,"updateUBOMapping");function ae(F,ce,ie){let _e=c.get(ce).get(F);l[_e]!==ie&&(s.bindBufferBase(s.UNIFORM_BUFFER,_e,ie),l[_e]=ie)}u(ae,"uniformBlockBinding");function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,Q={},d={},l={},m=new WeakMap,g=[],_=null,x=!1,b=null,v=null,S=null,M=null,A=null,E=null,y=null,w=new Pe(0,0,0),I=0,P=!1,D=null,O=null,X=null,U=null,$=null,ee.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return u(Se,"reset"),{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Oe,bindFramebuffer:tt,drawBuffers:j,useProgram:xe,setBlending:Ce,setMaterial:Ie,setFlipSided:qe,setCullFace:We,setLineWidth:mt,setPolygonOffset:bt,setScissorTest:Et,activeTexture:Ct,bindTexture:nt,unbindTexture:V,compressedTexImage2D:Ot,compressedTexImage3D:ht,texImage2D:T,texImage3D:q,pixelStorei:re,getParameter:me,updateUBOMapping:se,uniformBlockBinding:ae,texStorage2D:Ke,texStorage3D:N,texSubImage2D:it,texSubImage3D:ue,compressedTexSubImage2D:st,compressedTexSubImage3D:ze,scissor:ve,viewport:Te,reset:Se}}u(q2,"WebGLState");function Y2(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap,f=new Set,d,m=new WeakMap,g=new Set,_=new FinalizationRegistry(N=>g.delete(N)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return x?new OffscreenCanvas(N,T):el("canvas")}u(b,"createCanvas");function v(N,T,q){let me=1,re=Ke(N);if((re.width>q||re.height>q)&&(me=q/Math.max(re.width,re.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ve=Math.floor(me*re.width),Te=Math.floor(me*re.height);d===void 0&&(d=b(ve,Te));let se=T?b(ve,Te):d;return se.width=ve,se.height=Te,se.getContext("2d").drawImage(N,0,0,ve,Te),He("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ve+"x"+Te+")."),se}else return"data"in N&&He("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),N;return N}u(v,"resizeImage");function S(N){return N.generateMipmaps}u(S,"textureNeedsGenerateMipmaps");function M(N){s.generateMipmap(N)}u(M,"generateMipmap");function A(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}u(A,"getTargetType");function E(N,T,q,me,re,ve=!1){if(N!==null){if(s[N]!==void 0)return s[N];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Te;me&&(Te=e.get("EXT_texture_norm16"),Te||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=T;if(T===s.RED&&(q===s.FLOAT&&(se=s.R32F),q===s.HALF_FLOAT&&(se=s.R16F),q===s.UNSIGNED_BYTE&&(se=s.R8),q===s.UNSIGNED_SHORT&&Te&&(se=Te.R16_EXT),q===s.SHORT&&Te&&(se=Te.R16_SNORM_EXT)),T===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.R8UI),q===s.UNSIGNED_SHORT&&(se=s.R16UI),q===s.UNSIGNED_INT&&(se=s.R32UI),q===s.BYTE&&(se=s.R8I),q===s.SHORT&&(se=s.R16I),q===s.INT&&(se=s.R32I)),T===s.RG&&(q===s.FLOAT&&(se=s.RG32F),q===s.HALF_FLOAT&&(se=s.RG16F),q===s.UNSIGNED_BYTE&&(se=s.RG8),q===s.UNSIGNED_SHORT&&Te&&(se=Te.RG16_EXT),q===s.SHORT&&Te&&(se=Te.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.RG8UI),q===s.UNSIGNED_SHORT&&(se=s.RG16UI),q===s.UNSIGNED_INT&&(se=s.RG32UI),q===s.BYTE&&(se=s.RG8I),q===s.SHORT&&(se=s.RG16I),q===s.INT&&(se=s.RG32I)),T===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.RGB8UI),q===s.UNSIGNED_SHORT&&(se=s.RGB16UI),q===s.UNSIGNED_INT&&(se=s.RGB32UI),q===s.BYTE&&(se=s.RGB8I),q===s.SHORT&&(se=s.RGB16I),q===s.INT&&(se=s.RGB32I)),T===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),q===s.UNSIGNED_INT&&(se=s.RGBA32UI),q===s.BYTE&&(se=s.RGBA8I),q===s.SHORT&&(se=s.RGBA16I),q===s.INT&&(se=s.RGBA32I)),T===s.RGB&&(q===s.UNSIGNED_SHORT&&Te&&(se=Te.RGB16_EXT),q===s.SHORT&&Te&&(se=Te.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(se=s.R11F_G11F_B10F)),T===s.RGBA){let ae=ve?Dc:ct.getTransfer(re);q===s.FLOAT&&(se=s.RGBA32F),q===s.HALF_FLOAT&&(se=s.RGBA16F),q===s.UNSIGNED_BYTE&&(se=ae===St?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Te&&(se=Te.RGBA16_EXT),q===s.SHORT&&Te&&(se=Te.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}u(E,"getInternalFormat");function y(N,T){let q;return N?T===null||T===zi||T===Go?q=s.DEPTH24_STENCIL8:T===ti?q=s.DEPTH32F_STENCIL8:T===gl&&(q=s.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zi||T===Go?q=s.DEPTH_COMPONENT24:T===ti?q=s.DEPTH_COMPONENT32F:T===gl&&(q=s.DEPTH_COMPONENT16),q}u(y,"getInternalDepthFormat");function w(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ht&&N.minFilter!==zt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}u(w,"getMipLevels");function I(N){let T=new WeakRef(N);n.get(N).__ref=T,g.add(T),_.register(N,T,T)}u(I,"track");function P(N){let T=n.get(N).__ref;T!==void 0&&(g.delete(T),_.unregister(T))}u(P,"untrack");function D(N){X(N.target)}u(D,"onTextureDispose");function O(N){U(N.target)}u(O,"onRenderTargetDispose");function X(N){N.removeEventListener("dispose",D),P(N),te(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&f.delete(N)}u(X,"destroyTexture");function U(N){N.removeEventListener("dispose",O),P(N),Y(N)}u(U,"destroyRenderTarget");function $(){for(let N of g){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?U(T):X(T))}g.clear(),f.clear()}u($,"dispose");function te(N){let T=n.get(N);if(T.__webglInit===void 0)return;let q=N.source,me=m.get(q);if(me){let re=me[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&k(N),Object.keys(me).length===0&&m.delete(q)}n.remove(N)}u(te,"deallocateTexture");function k(N){let T=n.get(N);s.deleteTexture(T.__webglTexture);let q=N.source,me=m.get(q);delete me[T.__cacheKey],o.memory.textures--}u(k,"deleteTexture");function Y(N){let T=n.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let q=N.depthTexture;if(q&&q.renderTarget===N&&X(q),N.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let ve=0;ve<T.__webglFramebuffer[re].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[re][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)s.deleteFramebuffer(T.__webglFramebuffer[re]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let me=N.textures;for(let re=0,ve=me.length;re<ve;re++){let Te=n.get(me[re]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(me[re])}n.remove(N)}u(Y,"deallocateRenderTarget");let W=0;function J(){W=0}u(J,"resetTextureUnits");function Q(){return W}u(Q,"getTextureUnits");function de(N){W=N}u(de,"setTextureUnits");function be(){let N=W;return N>=i.maxTextures&&He("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,N}u(be,"allocateTextureUnit");function ee(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}u(ee,"getTextureCacheKey");function ge(N,T){let q=n.get(N);if(N.isVideoTexture&&st(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let me=N.image;if(me===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(q,N,T);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+T)}u(ge,"setTexture2D");function le(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){Ie(q,N,T);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+T)}u(le,"setTexture2DArray");function pe(N,T){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){Ie(q,N,T);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+T)}u(pe,"setTexture3D");function he(N,T){let q=n.get(N);if(N.version>0&&q.__version!==N.version){qe(q,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+T)}u(he,"setTextureCube");let Oe={[Gn]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},tt={[Ht]:s.NEAREST,[rf]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[ml]:s.LINEAR_MIPMAP_NEAREST,[vn]:s.LINEAR_MIPMAP_LINEAR},j={[TM]:s.NEVER,[g0]:s.ALWAYS,[AM]:s.LESS,[p0]:s.LEQUAL,[RM]:s.EQUAL,[m0]:s.GEQUAL,[CM]:s.GREATER,[PM]:s.NOTEQUAL};function xe(N,T){if(T.type===ti&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zt||T.magFilter===ml||T.magFilter===zo||T.magFilter===vn||T.minFilter===zt||T.minFilter===ml||T.minFilter===zo||T.minFilter===vn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Oe[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Oe[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Oe[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,tt[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,tt[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ht||T.minFilter!==zo&&T.minFilter!==vn||T.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}u(xe,"setTextureParameters");function oe(N,T){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",D),I(T));let me=T.source,re=m.get(me);re===void 0&&(re={},m.set(me,re));let ve=ee(T);if(ve!==N.__cacheKey){re[ve]===void 0&&(re[ve]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ve].usedTimes++;let Te=re[N.__cacheKey];Te!==void 0&&(re[N.__cacheKey].usedTimes--,Te.usedTimes===0&&k(T)),N.__cacheKey=ve,N.__webglTexture=re[ve].texture}return q}u(oe,"initTexture");function fe(N,T,q){return Math.floor(Math.floor(N/q)/T)}u(fe,"getRow");function Ce(N,T,q,me){let ve=N.updateRanges;if(ve.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,q,me,T.data);else{ve.sort((F,ce)=>F.start-ce.start);let Te=0;for(let F=1;F<ve.length;F++){let ce=ve[Te],ie=ve[F],we=ce.start+ce.count,_e=fe(ie.start,T.width,4),Me=fe(ce.start,T.width,4);ie.start<=we+1&&_e===Me&&fe(ie.start+ie.count-1,T.width,4)===_e?ce.count=Math.max(ce.count,ie.start+ie.count-ce.start):(++Te,ve[Te]=ie)}ve.length=Te+1;let se=t.getParameter(s.UNPACK_ROW_LENGTH),ae=t.getParameter(s.UNPACK_SKIP_PIXELS),Se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let F=0,ce=ve.length;F<ce;F++){let ie=ve[F],we=Math.floor(ie.start/4),_e=Math.ceil(ie.count/4),Me=we%T.width,Xe=Math.floor(we/T.width),at=_e,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(s.TEXTURE_2D,0,Me,Xe,at,ye,q,me,T.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,se),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}u(Ce,"updateTexture");function Ie(N,T,q){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);let re=oe(N,T),ve=T.source;t.bindTexture(me,N.__webglTexture,s.TEXTURE0+q);let Te=n.get(ve);if(ve.version!==Te.__version||re===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ye=ct.getPrimaries(ct.workingColorSpace),Ye=T.colorSpace===Gi?null:ct.getPrimaries(T.colorSpace),rt=T.colorSpace===Gi||ye===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ae=v(T.image,!1,i.maxTextureSize);ae=ze(T,ae);let Se=r.convert(T.format,T.colorSpace),F=r.convert(T.type),ce=E(T.internalFormat,Se,F,T.normalized,T.colorSpace,T.isVideoTexture);xe(me,T);let ie,we=T.mipmaps,_e=T.isVideoTexture!==!0,Me=Te.__version===void 0||re===!0,Xe=ve.dataReady,at=w(T,ae);if(T.isDepthTexture)ce=y(T.format===rr,T.type),Me&&(_e?t.texStorage2D(s.TEXTURE_2D,1,ce,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,ce,ae.width,ae.height,0,Se,F,null));else if(T.isDataTexture)if(we.length>0){_e&&Me&&t.texStorage2D(s.TEXTURE_2D,at,ce,we[0].width,we[0].height);for(let ye=0,Ye=we.length;ye<Ye;ye++)ie=we[ye],_e?Xe&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ie.width,ie.height,Se,F,ie.data):t.texImage2D(s.TEXTURE_2D,ye,ce,ie.width,ie.height,0,Se,F,ie.data);T.generateMipmaps=!1}else _e?(Me&&t.texStorage2D(s.TEXTURE_2D,at,ce,ae.width,ae.height),Xe&&Ce(T,ae,Se,F)):t.texImage2D(s.TEXTURE_2D,0,ce,ae.width,ae.height,0,Se,F,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_e&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,ce,we[0].width,we[0].height,ae.depth);for(let ye=0,Ye=we.length;ye<Ye;ye++)if(ie=we[ye],T.format!==Xn)if(Se!==null)if(_e){if(Xe)if(T.layerUpdates.size>0){let rt=T0(ie.width,ie.height,T.format,T.type);for(let Ne of T.layerUpdates){let Tt=ie.data.subarray(Ne*rt/ie.data.BYTES_PER_ELEMENT,(Ne+1)*rt/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Ne,ie.width,ie.height,1,Se,Tt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,ie.width,ie.height,ae.depth,Se,ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,ce,ie.width,ie.height,ae.depth,0,ie.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,ie.width,ie.height,ae.depth,Se,F,ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,ce,ie.width,ie.height,ae.depth,0,Se,F,ie.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_e&&Me&&t.texStorage2D(s.TEXTURE_2D,at,ce,we[0].width,we[0].height);for(let ye=0,Ye=we.length;ye<Ye;ye++)ie=we[ye],T.format!==Xn?Se!==null?_e?Xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,ie.width,ie.height,Se,ie.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,ce,ie.width,ie.height,0,ie.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Xe&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ie.width,ie.height,Se,F,ie.data):t.texImage2D(s.TEXTURE_2D,ye,ce,ie.width,ie.height,0,Se,F,ie.data)}else if(T.isDataArrayTexture)if(_e){if(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,ce,ae.width,ae.height,ae.depth),Xe)if(T.layerUpdates.size>0){let ye=T0(ae.width,ae.height,T.format,T.type);for(let Ye of T.layerUpdates){let rt=ae.data.subarray(Ye*ye/ae.data.BYTES_PER_ELEMENT,(Ye+1)*ye/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ye,ae.width,ae.height,1,Se,F,rt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,F,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,ae.width,ae.height,ae.depth,0,Se,F,ae.data);else if(T.isData3DTexture)_e?(Me&&t.texStorage3D(s.TEXTURE_3D,at,ce,ae.width,ae.height,ae.depth),Xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,F,ae.data)):t.texImage3D(s.TEXTURE_3D,0,ce,ae.width,ae.height,ae.depth,0,Se,F,ae.data);else if(T.isFramebufferTexture){if(Me)if(_e)t.texStorage2D(s.TEXTURE_2D,at,ce,ae.width,ae.height);else{let ye=ae.width,Ye=ae.height;for(let rt=0;rt<at;rt++)t.texImage2D(s.TEXTURE_2D,rt,ce,ye,Ye,0,Se,F,null),ye>>=1,Ye>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ae.parentNode!==ye){ye.appendChild(ae),f.add(T),ye.onpaint=Ye=>{let rt=Ye.changedElements;for(let Ne of f)rt.includes(Ne.image)&&(Ne.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ae);else{let rt=s.RGBA,Ne=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,rt,Ne,Tt,ae)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(we.length>0){if(_e&&Me){let ye=Ke(we[0]);t.texStorage2D(s.TEXTURE_2D,at,ce,ye.width,ye.height)}for(let ye=0,Ye=we.length;ye<Ye;ye++)ie=we[ye],_e?Xe&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Se,F,ie):t.texImage2D(s.TEXTURE_2D,ye,ce,Se,F,ie);T.generateMipmaps=!1}else if(_e){if(Me){let ye=Ke(ae);t.texStorage2D(s.TEXTURE_2D,at,ce,ye.width,ye.height)}Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,F,ae)}else t.texImage2D(s.TEXTURE_2D,0,ce,Se,F,ae);S(T)&&T.mipmapsAutoUpdate===!0&&M(me),Te.__version=ve.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}u(Ie,"uploadTexture");function qe(N,T,q){if(T.image.length!==6)return;let me=oe(N,T),re=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);let ve=n.get(re);if(re.version!==ve.__version||me===!0){t.activeTexture(s.TEXTURE0+q);let Te=ct.getPrimaries(ct.workingColorSpace),se=T.colorSpace===Gi?null:ct.getPrimaries(T.colorSpace),ae=T.colorSpace===Gi||Te===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Se=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let Ne=0;Ne<6;Ne++)!Se&&!F?ce[Ne]=v(T.image[Ne],!0,i.maxCubemapSize):ce[Ne]=F?T.image[Ne].image:T.image[Ne],ce[Ne]=ze(T,ce[Ne]);let ie=ce[0],we=r.convert(T.format,T.colorSpace),_e=r.convert(T.type),Me=E(T.internalFormat,we,_e,T.normalized,T.colorSpace),Xe=T.isVideoTexture!==!0,at=ve.__version===void 0||me===!0,ye=re.dataReady,Ye=w(T,ie);xe(s.TEXTURE_CUBE_MAP,T);let rt;if(T.isDepthTexture){if(Me=y(T.format===rr,T.type),at)if(Xe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Me,ie.width,ie.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Me,ie.width,ie.height,0,we,_e,null)}else if(Se){Xe&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Me,ie.width,ie.height);for(let Ne=0;Ne<6;Ne++){rt=ce[Ne].mipmaps;for(let Tt=0;Tt<rt.length;Tt++){let rn=rt[Tt];T.format!==Xn?we!==null?Xe?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,0,0,rn.width,rn.height,we,rn.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,Me,rn.width,rn.height,0,rn.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,0,0,rn.width,rn.height,we,_e,rn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt,Me,rn.width,rn.height,0,we,_e,rn.data)}}}else{if(rt=T.mipmaps,Xe&&at){rt.length>0&&Ye++;let Ne=Ke(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Me,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(F){Xe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ce[Ne].width,ce[Ne].height,we,_e,ce[Ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Me,ce[Ne].width,ce[Ne].height,0,we,_e,ce[Ne].data);for(let Tt=0;Tt<rt.length;Tt++){let Mr=rt[Tt].image[Ne].image;Xe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,0,0,Mr.width,Mr.height,we,_e,Mr.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,Me,Mr.width,Mr.height,0,we,_e,Mr.data)}}else{Xe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,we,_e,ce[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Me,we,_e,ce[Ne]);for(let Tt=0;Tt<rt.length;Tt++){let rn=rt[Tt];Xe?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,0,0,we,_e,rn.image[Ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Tt+1,Me,we,_e,rn.image[Ne])}}}S(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),ve.__version=re.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}u(qe,"uploadCubeTexture");function We(N,T,q,me,re,ve){let Te=r.convert(q.format,q.colorSpace),se=r.convert(q.type),ae=E(q.internalFormat,Te,se,q.normalized,q.colorSpace),Se=n.get(T),F=n.get(q);if(F.__renderTarget=T,!Se.__hasExternalTextures){let ce=Math.max(1,T.width>>ve),ie=Math.max(1,T.height>>ve);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,ve,ae,ce,ie,T.depth,0,Te,se,null):t.texImage2D(re,ve,ae,ce,ie,0,Te,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ue(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,re,F.__webglTexture,0,it(T)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,re,F.__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}u(We,"setupFrameBufferTexture");function mt(N,T,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){let me=T.depthTexture,re=me&&me.isDepthTexture?me.type:null,ve=y(T.stencilBuffer,re),Te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ue(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(T),ve,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(T),ve,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ve,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,N)}else{let me=T.textures;for(let re=0;re<me.length;re++){let ve=me[re],Te=r.convert(ve.format,ve.colorSpace),se=r.convert(ve.type),ae=E(ve.internalFormat,Te,se,ve.normalized,ve.colorSpace);ue(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(T),ae,T.width,T.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(T),ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ae,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}u(mt,"setupRenderBufferStorage");function bt(N,T,q){let me=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(T.depthTexture);re.__renderTarget=T;let ve=me?T.depthTexture.image[0]:T.depthTexture.image;(!re.__webglTexture||ve.width!==T.width||ve.height!==T.height)&&(ve.width=T.width,ve.height=T.height,T.depthTexture.needsUpdate=!0),me?he(T.depthTexture,0):ge(T.depthTexture,0);let Te=re.__webglTexture,se=it(T),ae=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Se=T.depthTexture.format===rr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ks)ue(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ae,Te,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Se,ae,Te,0);else if(T.depthTexture.format===rr)ue(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ae,Te,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,Se,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}u(bt,"setupDepthTexture");function Et(N){let T=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let me=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){let re=u(()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",re)},"disposeEvent");me.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=me}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)bt(T.__webglFramebuffer[me],N,me);else N.texture.mipmaps.length>0?bt(T.__webglFramebuffer[0],N,0):bt(T.__webglFramebuffer,N,0);else if(q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),mt(T.__webglDepthbuffer[me],N,!1);else{let re=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ve)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),mt(T.__webglDepthbuffer,N,!1);else{let re=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}u(Et,"setupDepthRenderbuffer");function Ct(N,T,q){let me=n.get(N);T!==void 0&&We(me.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Et(N)}u(Ct,"rebindTextures");function nt(N){let T=N.texture,q=n.get(N),me=n.get(T);N.addEventListener("dispose",O),I(N);let re=N.textures,ve=N.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(Te||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,o.memory.textures++),ve){q.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps.length>0){q.__webglFramebuffer[se]=[];for(let ae=0;ae<T.mipmaps.length;ae++)q.__webglFramebuffer[se][ae]=s.createFramebuffer()}else q.__webglFramebuffer[se]=s.createFramebuffer()}else{if(T.mipmaps.length>0){q.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)q.__webglFramebuffer[se]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Te)for(let se=0,ae=re.length;se<ae;se++){let Se=n.get(re[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&ue(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let se=0;se<re.length;se++){let ae=re[se];q.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[se]);let Se=r.convert(ae.format,ae.colorSpace),F=r.convert(ae.type),ce=E(ae.internalFormat,Se,F,ae.normalized,ae.colorSpace,N.isXRRenderTarget===!0),ie=it(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,ce,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,q.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),xe(s.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)We(q.__webglFramebuffer[se][ae],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else We(q.__webglFramebuffer[se],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);S(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let se=0,ae=re.length;se<ae;se++){let Se=re[se],F=n.get(Se),ce=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,F.__webglTexture),xe(ce,Se),We(q.__webglFramebuffer,N,Se,s.COLOR_ATTACHMENT0+se,ce,0),S(Se)&&M(ce)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(se=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,me.__webglTexture),xe(se,T),T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)We(q.__webglFramebuffer[ae],N,T,s.COLOR_ATTACHMENT0,se,ae);else We(q.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,se,0);S(T)?M(se):T.mipmaps.length>0&&s.texParameteri(se,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Et(N)}u(nt,"setupRenderTarget");function V(N){let T=N.textures;for(let q=0,me=T.length;q<me;q++){let re=T[q];if(S(re)&&re.mipmapsAutoUpdate===!0){let ve=A(N),Te=n.get(re).__webglTexture;t.bindTexture(ve,Te),M(ve),t.unbindTexture()}}}u(V,"updateRenderTargetMipmap");let Ot=[];function ht(N){if(N.samples>0){if(ue(N)===!1){let T=N.textures,q=N.width,me=N.height,re=s.COLOR_BUFFER_BIT,ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(N),se=T.length>1;if(se)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let F=n.get(T[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,q,me,0,0,q,me,re,s.NEAREST),l===!0&&(Ot.length=0,Ot.push(s.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Ot.push(ve),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let F=n.get(T[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,F,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}u(ht,"updateMultisampleRenderTarget");function it(N){return Math.min(i.maxSamples,N.samples)}u(it,"getRenderTargetSamples");function ue(N){let T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}u(ue,"useMultisampledRTT");function st(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}u(st,"updateVideoTexture");function ze(N,T){let q=N.colorSpace,me=N.format,re=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Pn&&q!==Gi&&(ct.getTransfer(q)===St?(me!==Xn||re!==Mn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",q)),T}u(ze,"verifyColorSpace");function Ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}u(Ke,"getDimensions"),this.allocateTextureUnit=be,this.resetTextureUnits=J,this.getTextureUnits=Q,this.setTextureUnits=de,this.setTexture2D=ge,this.setTexture2DArray=le,this.setTexture3D=pe,this.setTextureCube=he,this.rebindTextures=Ct,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=We,this.useMultisampledRTT=ue,this.dispose=$}u(Y2,"WebGLTextures");function $2(s,e){function t(n,i=Gi){let r,o=ct.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===af)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===c0)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===u0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===a0)return s.BYTE;if(n===l0)return s.SHORT;if(n===gl)return s.UNSIGNED_SHORT;if(n===of)return s.INT;if(n===zi)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===ni)return s.HALF_FLOAT;if(n===h0)return s.ALPHA;if(n===d0)return s.RGB;if(n===Xn)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===rr)return s.DEPTH_STENCIL;if(n===cf)return s.RED;if(n===uf)return s.RED_INTEGER;if(n===fs)return s.RG;if(n===hf)return s.RG_INTEGER;if(n===df)return s.RGBA_INTEGER;if(n===cu||n===uu||n===hu||n===du)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===du)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===du)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ff||n===pf||n===mf||n===gf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ff)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xf||n===bf||n===yf||n===_f||n===vf||n===fu||n===Mf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xf||n===bf)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_f)return r.COMPRESSED_R11_EAC;if(n===vf)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fu)return r.COMPRESSED_RG11_EAC;if(n===Mf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sf||n===wf||n===Ef||n===Tf||n===Af||n===Rf||n===Cf||n===Pf||n===If||n===Lf||n===Nf||n===Df||n===Uf||n===Of)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ef)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Af)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===If)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Df)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uf)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Of)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ff||n===Bf||n===kf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ff)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zf||n===Gf||n===pu||n===Vf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zf)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Go?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return u(t,"convert"),{convert:t}}u($2,"WebGLUtils");var K2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z2=`
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

}`,Cx=class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:K2,fragmentShader:Z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};u(Cx,"WebXRDepthSensing");var _x=Cx,Px=class Px extends ki{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",x=new _x,b={},v=t.getContextAttributes(),S=null,M=null,A=[],E=[],y=new Ve,w=null,I=null,P=new Jt;P.viewport=new At;let D=new Jt;D.viewport=new At;let O=[P,D],X=new Nd,U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ge=A[ee];return ge===void 0&&(ge=new sl,A[ee]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ee){let ge=A[ee];return ge===void 0&&(ge=new sl,A[ee]=ge),ge.getGripSpace()},this.getHand=function(ee){let ge=A[ee];return ge===void 0&&(ge=new sl,A[ee]=ge),ge.getHandSpace()};function te(ee){let ge=E.indexOf(ee.inputSource);if(ge===-1)return;let le=A[ge];le!==void 0&&(le.update(ee.inputSource,ee.frame,c||o),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}u(te,"onSessionEvent");function k(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<A.length;ee++){let ge=E[ee];ge!==null&&(E[ee]=null,A[ee].disconnect(ge))}U=null,$=null,x.reset();for(let ee in b)delete b[ee];if(e.setRenderTarget(S),m=null,d=null,f=null,i=null,M=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),I!==null){let ee=I.camera;ee.fov=I.fov,ee.zoom=I.zoom,ee.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}u(k,"onSessionEnd"),this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,pe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?rr:Ks,pe=v.stencil?Go:zi);let Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Oe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new jn(d.textureWidth,d.textureHeight,{format:Xn,type:Mn,depthTexture:new Js(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new jn(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(ee){for(let ge=0;ge<ee.removed.length;ge++){let le=ee.removed[ge],pe=E.indexOf(le);pe>=0&&(E[pe]=null,A[pe].disconnect(le))}for(let ge=0;ge<ee.added.length;ge++){let le=ee.added[ge],pe=E.indexOf(le);if(pe===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=E.length){E.push(le),pe=Oe;break}else if(E[Oe]===null){E[Oe]=le,pe=Oe;break}if(pe===-1)break}let he=A[pe];he&&he.connect(le)}}u(Y,"onInputSourcesChange");function W(ee,ge){ge===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ge.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}u(W,"updateCamera"),this.updateCamera=function(ee){if(i===null)return;let ge=ee.near,le=ee.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(le=x.depthFar)),X.near=D.near=P.near=ge,X.far=D.far=P.far=le,(U!==X.near||$!==X.far)&&(i.updateRenderState({depthNear:X.near,depthFar:X.far}),U=X.near,$=X.far),X.layers.mask=ee.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let pe=ee.parent,he=X.cameras;W(X,pe);for(let Oe=0;Oe<he.length;Oe++)W(he[Oe],pe);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&ee.isPerspectiveCamera&&(I={camera:ee,fov:ee.fov,zoom:ee.zoom}),J(ee,X,pe)};function J(ee,ge,le){le===null?ee.matrix.copy(ge.matrixWorld):(ee.matrix.copy(le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ge.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Co*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}u(J,"updateUserCamera"),this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(ee){return b[ee]};let Q=null;function de(ee,ge){if(h=ge.getViewerPose(c||o),g=ge,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let pe=!1;le.length!==X.cameras.length&&(X.cameras.length=0,pe=!0);for(let j=0;j<le.length;j++){let xe=le[j],oe=null;if(m!==null)oe=m.getViewport(xe);else{let Ce=f.getViewSubImage(d,xe);oe=Ce.viewport,j===0&&(e.setRenderTargetTextures(M,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(M))}let fe=O[j];fe===void 0&&(fe=new Jt,fe.layers.enable(j),fe.viewport=new At,O[j]=fe),fe.matrix.fromArray(xe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(xe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(oe.x,oe.y,oe.width,oe.height),j===0&&(X.matrix.copy(fe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),pe===!0&&X.cameras.push(fe)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let j=f.getDepthInformation(le[0]);j&&j.isValid&&j.texture&&x.init(j,i.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let j=0;j<le.length;j++){let xe=le[j].camera;if(xe){let oe=b[xe];oe||(oe=new $c,b[xe]=oe);let fe=f.getCameraImage(xe);oe.sourceTexture=fe}}}}for(let le=0;le<A.length;le++){let pe=E[le],he=A[le];pe!==null&&he!==void 0&&he.update(pe,ge,c||o)}Q&&Q(ee,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}u(de,"onAnimationFrame");let be=new oS;be.setAnimationLoop(de),this.setAnimationLoop=function(ee){Q=ee},this.dispose=function(){}}};u(Px,"WebXRManager");var vx=Px,J2=new Ze,gS=new je;gS.set(-1,0,0,0,1,0,0,0,1);function j2(s,e){function t(x,b){x.matrixAutoUpdate===!0&&x.updateMatrix(),b.value.copy(x.matrix)}u(t,"refreshTransformUniform");function n(x,b){b.color.getRGB(x.fogColor.value,S0(s)),b.isFog?(x.fogNear.value=b.near,x.fogFar.value=b.far):b.isFogExp2&&(x.fogDensity.value=b.density)}u(n,"refreshFogUniforms");function i(x,b,v,S,M){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?r(x,b):b.isMeshLambertMaterial?(r(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(r(x,b),f(x,b)):b.isMeshPhongMaterial?(r(x,b),h(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(r(x,b),d(x,b),b.isMeshPhysicalMaterial&&m(x,b,M)):b.isMeshMatcapMaterial?(r(x,b),g(x,b)):b.isMeshDepthMaterial?r(x,b):b.isMeshDistanceMaterial?(r(x,b),_(x,b)):b.isMeshNormalMaterial?r(x,b):b.isLineBasicMaterial?(o(x,b),b.isLineDashedMaterial&&a(x,b)):b.isPointsMaterial?l(x,b,v,S):b.isSpriteMaterial?c(x,b):b.isShadowMaterial?(x.color.value.copy(b.color),x.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}u(i,"refreshMaterialUniforms");function r(x,b){x.opacity.value=b.opacity,b.color&&x.diffuse.value.copy(b.color),b.emissive&&x.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.bumpMap&&(x.bumpMap.value=b.bumpMap,t(b.bumpMap,x.bumpMapTransform),x.bumpScale.value=b.bumpScale,b.side===Dn&&(x.bumpScale.value*=-1)),b.normalMap&&(x.normalMap.value=b.normalMap,t(b.normalMap,x.normalMapTransform),x.normalScale.value.copy(b.normalScale),b.side===Dn&&x.normalScale.value.negate()),b.displacementMap&&(x.displacementMap.value=b.displacementMap,t(b.displacementMap,x.displacementMapTransform),x.displacementScale.value=b.displacementScale,x.displacementBias.value=b.displacementBias),b.emissiveMap&&(x.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,x.emissiveMapTransform)),b.specularMap&&(x.specularMap.value=b.specularMap,t(b.specularMap,x.specularMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest);let v=e.get(b),S=v.envMap,M=v.envMapRotation;S&&(x.envMap.value=S,x.envMapRotation.value.setFromMatrix4(J2.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(gS),x.reflectivity.value=b.reflectivity,x.ior.value=b.ior,x.refractionRatio.value=b.refractionRatio),b.lightMap&&(x.lightMap.value=b.lightMap,x.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,x.lightMapTransform)),b.aoMap&&(x.aoMap.value=b.aoMap,x.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,x.aoMapTransform))}u(r,"refreshUniformsCommon");function o(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform))}u(o,"refreshUniformsLine");function a(x,b){x.dashSize.value=b.dashSize,x.totalSize.value=b.dashSize+b.gapSize,x.scale.value=b.scale}u(a,"refreshUniformsDash");function l(x,b,v,S){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.size.value=b.size*v,x.scale.value=S*.5,b.map&&(x.map.value=b.map,t(b.map,x.uvTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(l,"refreshUniformsPoints");function c(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.rotation.value=b.rotation,b.map&&(x.map.value=b.map,t(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,t(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}u(c,"refreshUniformsSprites");function h(x,b){x.specular.value.copy(b.specular),x.shininess.value=Math.max(b.shininess,1e-4)}u(h,"refreshUniformsPhong");function f(x,b){b.gradientMap&&(x.gradientMap.value=b.gradientMap)}u(f,"refreshUniformsToon");function d(x,b){x.metalness.value=b.metalness,b.metalnessMap&&(x.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,x.metalnessMapTransform)),x.roughness.value=b.roughness,b.roughnessMap&&(x.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,x.roughnessMapTransform)),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)}u(d,"refreshUniformsStandard");function m(x,b,v){x.ior.value=b.ior,b.diffuseRoughness>0&&(x.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),b.sheen>0&&(x.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),x.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(x.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,x.sheenColorMapTransform)),b.sheenRoughnessMap&&(x.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,x.sheenRoughnessMapTransform))),b.clearcoat>0&&(x.clearcoat.value=b.clearcoat,x.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(x.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,x.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(x.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Dn&&x.clearcoatNormalScale.value.negate())),b.dispersion>0&&(x.dispersion.value=b.dispersion),b.retroreflectivity>0&&(x.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(x.iridescence.value=b.iridescence,x.iridescenceIOR.value=b.iridescenceIOR,x.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(x.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,x.iridescenceMapTransform)),b.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),b.transmission>0&&(x.transmission.value=b.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),b.transmissionMap&&(x.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,x.transmissionMapTransform)),x.thickness.value=b.thickness,b.thicknessMap&&(x.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=b.attenuationDistance,x.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(x.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(x.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=b.specularIntensity,x.specularColor.value.copy(b.specularColor),b.specularColorMap&&(x.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,x.specularColorMapTransform)),b.specularIntensityMap&&(x.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,x.specularIntensityMapTransform))}u(m,"refreshUniformsPhysical");function g(x,b){b.matcap&&(x.matcap.value=b.matcap)}u(g,"refreshUniformsMatcap");function _(x,b){let v=e.get(b).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return u(_,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:i}}u(j2,"WebGLMaterials");function Q2(s,e,t,n){let i={},r={};function o(v,S){let M=S.program;n.uniformBlockBinding(v,M,i[v.id])}u(o,"bind");function a(v,S){let M=i[v.id];M===void 0&&(g(v),M=l(v),i[v.id]=M,v.addEventListener("dispose",x));let A=S.program;n.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}u(a,"update");function l(v){let S=s.createBuffer(),M=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,M,A),s.bindBuffer(s.UNIFORM_BUFFER,null),S}u(l,"createBuffer");function c(v){let S=i[v.id],M=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,y=M.length;E<y;E++){let w=M[E];if(Array.isArray(w))for(let I=0,P=w.length;I<P;I++)h(w[I],E,I,A);else h(w,E,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}u(c,"updateBufferData");function h(v,S,M,A){if(d(v,S,M,A)===!0){let E=v.__offset,y=v.value;if(Array.isArray(y)){let w=0;for(let I=0;I<y.length;I++){let P=y[I],D=_(P,!0);f(P,v.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}u(h,"updateUniform");function f(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}u(f,"writeUniformValue");function d(v,S,M,A){let E=v.value,y=S+"_"+M;if(Array.isArray(E)){A[y]===void 0&&(A[y]=[]);let w=A[y],I=!1;for(let P=0;P<E.length;P++)m(E[P],w,P)===!0&&(I=!0);return I}return m(E,A,y)}u(d,"hasUniformChanged");function m(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let A=S[M];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}u(m,"hasValueChanged");function g(v){let S=v.uniforms,M=0,A=16;for(let y=0,w=S.length;y<w;y++){let I=Array.isArray(S[y])?S[y]:[S[y]];for(let P=0,D=I.length;P<D;P++){let O=I[P],X=Array.isArray(O.value)?O.value:[O.value],U=Array.isArray(S[y])||Array.isArray(O.value),$=M;for(let k=0,Y=X.length;k<Y;k++){let W=X[k],J=_(W,U),Q=M%A,de=Q%J.boundary,be=Q+de;M+=de,be!==0&&A-be<J.storage&&(M+=A-be),k===0&&($=M),M+=J.storage}let te=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new te((M-$)/Float32Array.BYTES_PER_ELEMENT),O.__offset=$}}let E=M%A;return E>0&&(M+=A-E),v.__size=M,v.__cache={},this}u(g,"prepareUniformsGroup");function _(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}u(_,"getUniformSize");function x(v){let S=v.target;S.removeEventListener("dispose",x),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}u(x,"onUniformsGroupsDispose");function b(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return u(b,"dispose"),{bind:o,update:a,dispose:b}}u(Q2,"WebGLUniformsGroups");var eI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ms=null;function tI(){return ms===null&&(ms=new Or(eI,16,16,fs,ni),ms.name="DFG_LUT",ms.minFilter=zt,ms.magFilter=zt,ms.wrapS=zn,ms.wrapT=zn,ms.generateMipmaps=!1,ms.needsUpdate=!0),ms}u(tI,"getDFGLUT");var Ix=class Ix{constructor(e={}){let{canvas:t=IM(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=m,x=new Set([df,hf,uf]),b=new Set([Mn,zi,gl,Go,af,lf]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,E=null,y=[],w=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,O=null,X=null,U=null,$=null;this._outputColorSpace=Nt;let te=0,k=0,Y=null,W=-1,J=null,Q=new At,de=new At,be=null,ee=new Pe(0),ge=0,le=t.width,pe=t.height,he=1,Oe=null,tt=null,j=new At(0,0,le,pe),xe=new At(0,0,le,pe),oe=!1,fe=new Fr,Ce=new vd,Ie=!1,qe=!1,We=new Ze,mt=new H,bt=new At,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function nt(){return Y===null?he:1}u(nt,"getTargetPixelRatio");let V=n;function Ot(C,G){return t.getContext(C,G)}u(Ot,"getContext");let ht,it,ue,st,ze,Ke,N,T,q,me,re,ve,Te,se,ae,Se,F,ce,ie,we,_e,Me,Xe;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),V===null){let G="webgl2";if(V=Ot(G,C),V===null)throw Ot(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(C){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Je("WebGLRenderer: "+C.message),C}function at(){ht=new dP(V),ht.init(),_e=new $2(V,ht),it=new tP(V,ht,e,_e),ue=new q2(V,ht),it.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),X=V.createFramebuffer(),U=V.createFramebuffer(),$=V.createFramebuffer(),st=new mP(V),ze=new L2,Ke=new Y2(V,ht,ue,ze,it,_e,st),N=new hP(P),T=new xA(V),Me=new QC(V,T),q=new fP(V,T,st,Me),me=new xP(V,q,T,Me,st),ce=new gP(V,it,Ke),ae=new nP(ze),re=new I2(P,N,ht,it,Me,ae),ve=new j2(P,ze),Te=new D2,se=new z2(ht),F=new jC(P,N,ue,me,g,l),Se=new X2(P,me,it),Xe=new Q2(V,st,it,ue),ie=new eP(V,ht,st),we=new pP(V,ht,st),st.programs=re.programs,P.capabilities=it,P.extensions=ht,P.properties=ze,P.renderLists=Te,P.shadowMap=Se,P.state=ue,P.info=st}u(at,"initGLContext"),_!==Mn&&(I=new yP(_,t.width,t.height,a,i,r));let ye=new vx(P,V);this.xr=ye,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(C){C!==void 0&&(he=C,this.setSize(le,pe,!1))},this.getSize=function(C){return C.set(le,pe)},this.setSize=function(C,G,ne=!0){if(ye.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}le=C,pe=G,t.width=Math.floor(C*he),t.height=Math.floor(G*he),ne===!0&&(t.style.width=C+"px",t.style.height=G+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(le*he,pe*he).floor()},this.setDrawingBufferSize=function(C,G,ne){le=C,pe=G,he=ne,t.width=Math.floor(C*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(_===Mn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Q)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,G,ne,K){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,G,ne,K),ue.viewport(Q.copy(j).multiplyScalar(nt()).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,G,ne,K){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,G,ne,K),ue.scissor(de.copy(xe).multiplyScalar(nt()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){ue.setScissorTest(oe=C)},this.setOpaqueSort=function(C){Oe=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,ne=!0){let K=0;if(C){let Z=!1;if(Y!==null){let Ae=Y.texture.format;Z=x.has(Ae)}if(Z){let Ae=Y.texture.type,Fe=b.has(Ae),Ee=F.getClearColor(),De=F.getClearAlpha(),Ge=Ee.r,Qe=Ee.g,gt=Ee.b;Fe?(v[0]=Ge,v[1]=Qe,v[2]=gt,v[3]=De,V.clearBufferuiv(V.COLOR,0,v)):(S[0]=Ge,S[1]=Qe,S[2]=gt,S[3]=De,V.clearBufferiv(V.COLOR,0,S))}else K|=V.COLOR_BUFFER_BIT}G&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),O=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),F.dispose(),Te.dispose(),se.dispose(),Ke.dispose(),ze.dispose(),N.dispose(),me.dispose(),q.dispose(),Me.dispose(),Xe.dispose(),re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",X_),ye.removeEventListener("sessionend",q_),go.stop()};function Ye(C){C.preventDefault(),Uc("WebGLRenderer: Context Lost."),D=!0}u(Ye,"onContextLost");function rt(){Uc("WebGLRenderer: Context Restored."),D=!1;let C=st.autoReset,G=Se.enabled,ne=Se.autoUpdate,K=Se.needsUpdate,Z=Se.type;at(),st.autoReset=C,Se.enabled=G,Se.autoUpdate=ne,Se.needsUpdate=K,Se.type=Z}u(rt,"onContextRestore");function Ne(C){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}u(Ne,"onContextCreationError");function Tt(C){let G=C.target;G.removeEventListener("dispose",Tt),rn(G)}u(Tt,"onMaterialDispose");function rn(C){Mr(C),ze.remove(C)}u(rn,"deallocateMaterial");function Mr(C){let G=ze.get(C).programs;G!==void 0&&(G.forEach(function(ne){re.releaseProgram(ne)}),C.isShaderMaterial&&re.releaseShaderCache(C))}u(Mr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(C,G,ne,K,Z,Ae){G===null&&(G=Et);let Fe=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ee=jE(C,G,ne,K,Z);ue.setMaterial(K,Fe);let De=ne.index,Ge=1;if(K.wireframe===!0){if(De=q.getWireframeAttribute(ne),De===void 0)return;Ge=2}let Qe=ne.drawRange,gt=ne.attributes.position,Be=Qe.start*Ge,xt=(Qe.start+Qe.count)*Ge;Ae!==null&&(Be=Math.max(Be,Ae.start*Ge),xt=Math.min(xt,(Ae.start+Ae.count)*Ge)),De!==null?(Be=Math.max(Be,0),xt=Math.min(xt,De.count)):gt!=null&&(Be=Math.max(Be,0),xt=Math.min(xt,gt.count));let Kt=xt-Be;if(Kt<0||Kt===1/0)return;Me.setup(Z,K,Ee,ne,De);let Lt,Pt=ie;if(De!==null&&(Lt=T.get(De),Pt=we,Pt.setIndex(Lt)),Z.isMesh)K.wireframe===!0?(ue.setLineWidth(K.wireframeLinewidth*nt()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(Z.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),ue.setLineWidth(xn*nt()),Z.isLineSegments?Pt.setMode(V.LINES):Z.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else Z.isPoints?Pt.setMode(V.POINTS):Z.isSprite&&Pt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let xn=Z._multiDrawStarts,ke=Z._multiDrawCounts,Rn=Z._multiDrawCount,vt=De?T.get(De).bytesPerElement:1,xo=ze.get(K).currentProgram.getUniforms();for(let bn=0;bn<Rn;bn++)xo.setValue(V,"_gl_DrawID",bn),Pt.render(xn[bn]/vt,ke[bn])}else if(Z.isInstancedMesh)Pt.renderInstances(Be,Kt,Z.count);else if(ne.isInstancedBufferGeometry){let xn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ke=Math.min(ne.instanceCount,xn);Pt.renderInstances(Be,Kt,ke)}else Pt.render(Be,Kt)};function W_(C,G,ne,K){O!==null&&C.isNodeMaterial&&O.setObject(K,C),Ie===!0&&ae.setState(C,ne,!1),C.transparent===!0&&C.side===Qt&&C.forceSinglePass===!1?(C.side=Dn,C.needsUpdate=!0,xc(C,G,K),C.side=_i,C.needsUpdate=!0,xc(C,G,K),C.side=Qt):xc(C,G,K)}u(W_,"prepareMaterial"),this.compile=function(C,G,ne=null){ne===null&&(ne=C),O!==null&&O.renderStart(C,G,ne),E=se.get(ne),E.init(G),w.push(E),ne.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),C!==ne&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),qe=this.localClippingEnabled,Ie=ae.init(this.clippingPlanes,qe),Ie===!0&&ae.setGlobalState(this.clippingPlanes,G),O!==null&&Se.render(E.state.shadowsArray,ne,G);let K=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){let Ee=Ae[Fe];W_(Ee,ne,G,Z),K.add(Ee)}else W_(Ae,ne,G,Z),K.add(Ae)}),E=w.pop(),O!==null&&O.renderEnd(),K},this.compileAsync=function(C,G,ne=null){let K=this.compile(C,G,ne);return new Promise(Z=>{function Ae(){if(K.forEach(function(Fe){let De=ze.get(Fe).currentProgram;(De===void 0||De.isReady())&&K.delete(Fe)}),K.size===0){Z(C);return}setTimeout(Ae,10)}u(Ae,"checkMaterialsReady"),ht.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let rm=null;function ZE(C){rm&&rm(C)}u(ZE,"onAnimationFrame");function X_(){go.stop()}u(X_,"onXRSessionStart");function q_(){go.start()}u(q_,"onXRSessionEnd");let go=new oS;go.setAnimationLoop(ZE),typeof self<"u"&&go.setContext(self),this.setAnimationLoop=function(C){rm=C,ye.setAnimationLoop(C),C===null?go.stop():go.start()},ye.addEventListener("sessionstart",X_),ye.addEventListener("sessionend",q_),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(C,G);let ne=ye.enabled===!0&&ye.isPresenting===!0,K=I!==null&&(Y===null||ne)&&I.begin(P,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,G,Y),E=se.get(C,w.length),E.init(G),E.state.textureUnits=Ke.getTextureUnits(),w.push(E),We.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Ce.setFromArrayCamera(G):fe.setFromProjectionMatrix(We,bi,G.reversedDepth),qe=this.localClippingEnabled,Ie=ae.init(this.clippingPlanes,qe),A=Te.get(C,y.length),A.init(),y.push(A),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let Fe=P.xr.getDepthSensingMesh();Fe!==null&&om(Fe,G,-1/0,P.sortObjects)}om(C,G,0,P.sortObjects),A.finish(),O!==null&&O.updateLights(E.state.lightsArray),P.sortObjects===!0&&A.sort(Oe,tt),Ct=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ct&&F.addToRenderList(A,C),this.info.autoReset===!0&&this.info.reset(),Ie===!0&&ae.beginShadows();let Z=E.state.shadowsArray;if(Se.render(Z,C,G),Ie===!0&&ae.endShadows(),(K&&I.hasRenderPass())===!1){let Fe=A.opaque,Ee=A.transmissive;if(E.setupLights(),G.isArrayCamera){let De=G.cameras;if(Ee.length>0)for(let Ge=0,Qe=De.length;Ge<Qe;Ge++){let gt=De[Ge];$_(Fe,Ee,C,gt)}Ct&&F.render(C);for(let Ge=0,Qe=De.length;Ge<Qe;Ge++){let gt=De[Ge];Y_(A,C,gt,gt.viewport)}}else Ee.length>0&&$_(Fe,Ee,C,G),Ct&&F.render(C),Y_(A,C,G)}Y!==null&&k===0&&(Ke.updateMultisampleRenderTarget(Y),Ke.updateRenderTargetMipmap(Y)),K&&I.end(P),C.isScene===!0&&C.onAfterRender(P,C,G),Me.resetDefaultState(),W=-1,J=null,w.pop(),w.length>0?(E=w[w.length-1],Ke.setTextureUnits(E.state.textureUnits),Ie===!0&&ae.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,O!==null&&O.renderEnd()};function om(C,G,ne,K){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){let Fe=G.isArrayCamera?Ce:fe;if(!C.frustumCulled||C.intersectsFrustum(Fe)){K&&bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(We);let Ee=me.update(C),De=C.material;De.visible&&A.push(C,Ee,De,ne,bt.z,null,G)}}else if(C.isMesh||C.isLine||C.isPoints){let Fe=G.isArrayCamera?Ce:fe;if(!C.frustumCulled||C.intersectsFrustum(Fe)){let Ee=me.update(C),De=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),bt.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),bt.copy(Ee.boundingSphere.center)),bt.applyMatrix4(C.matrixWorld).applyMatrix4(We)),Array.isArray(De)){let Ge=Ee.groups;for(let Qe=0,gt=Ge.length;Qe<gt;Qe++){let Be=Ge[Qe],xt=De[Be.materialIndex];xt&&xt.visible&&A.push(C,Ee,xt,ne,bt.z,Be,G)}}else De.visible&&A.push(C,Ee,De,ne,bt.z,null,G)}}}let Ae=C.children;for(let Fe=0,Ee=Ae.length;Fe<Ee;Fe++)om(Ae[Fe],G,ne,K)}u(om,"projectObject");function Y_(C,G,ne,K){let{opaque:Z,transmissive:Ae,transparent:Fe}=C;E.setupLightsView(ne),Ie===!0&&ae.setGlobalState(P.clippingPlanes,ne),K&&ue.viewport(Q.copy(K)),Z.length>0&&Lh(Z,G,ne),Ae.length>0&&Lh(Ae,G,ne),Fe.length>0&&Lh(Fe,G,ne),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}u(Y_,"renderScene");function $_(C,G,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){let Be=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new jn(1,1,{generateMipmaps:!0,type:Be?ni:Mn,minFilter:vn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ae=E.state.transmissionRenderTarget[K.id],Fe=K.viewport||Q;Ae.setSize(Fe.z*P.transmissionResolutionScale,Fe.w*P.transmissionResolutionScale);let Ee=P.getRenderTarget(),De=P.getActiveCubeFace(),Ge=P.getActiveMipmapLevel();P.setRenderTarget(Ae),P.getClearColor(ee),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),Ct&&F.render(ne);let Qe=P.toneMapping;P.toneMapping=ds;let gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),Ie===!0&&ae.setGlobalState(P.clippingPlanes,K),Lh(C,ne,K),Ke.updateMultisampleRenderTarget(Ae),Ke.updateRenderTargetMipmap(Ae),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let xt=0,Kt=G.length;xt<Kt;xt++){let Lt=G[xt],{object:Pt,geometry:xn,material:ke,group:Rn}=Lt;if(ke.side===Qt&&Pt.layers.test(K.layers)){let vt=ke.side;ke.side=Dn,ke.needsUpdate=!0,K_(Pt,ne,K,xn,ke,Rn),ke.side=vt,ke.needsUpdate=!0,Be=!0}}Be===!0&&(Ke.updateMultisampleRenderTarget(Ae),Ke.updateRenderTargetMipmap(Ae))}P.setRenderTarget(Ee,De,Ge),P.setClearColor(ee,ge),gt!==void 0&&(K.viewport=gt),P.toneMapping=Qe}u($_,"renderTransmissionPass");function Lh(C,G,ne){let K=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Ae=C.length;Z<Ae;Z++){let Fe=C[Z],{object:Ee,geometry:De,group:Ge}=Fe,Qe=Fe.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),Ee.layers.test(ne.layers)&&K_(Ee,G,ne,De,Qe,Ge)}}u(Lh,"renderObjects");function K_(C,G,ne,K,Z,Ae){O!==null&&Z.isNodeMaterial&&O.setObject(C,Z),C.onBeforeRender(P,G,ne,K,Z,Ae),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(P,G,ne,K,C,Ae),Z.transparent===!0&&Z.side===Qt&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,P.renderBufferDirect(ne,G,K,Z,C,Ae),Z.side=_i,Z.needsUpdate=!0,P.renderBufferDirect(ne,G,K,Z,C,Ae),Z.side=Qt):P.renderBufferDirect(ne,G,K,Z,C,Ae),C.onAfterRender(P,G,ne,K,Z,Ae)}u(K_,"renderObject");function Z_(C){let G=0;for(let ne of C)ne.texture!==null&&G++;return G}u(Z_,"countLightProbeGrids");function xc(C,G,ne){G.isScene!==!0&&(G=Et);let K=ze.get(C),Z=E.state.lights,Ae=E.state.shadowsArray,Fe=Z.state.version,Ee=re.getParameters(C,Z.state,Ae,G,ne,E.state.lightProbeGridArray),De=re.getProgramCacheKey(Ee),Ge=K.programs;K.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;K.envMap=N.get(C.envMap||K.environment,Qe),K.envMapRotation=K.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Tt),Ge=new Map,K.programs=Ge,K.programVariants=new Map);let gt=Ge.get(De);if(gt!==void 0){if(K.currentProgram===gt&&K.lightsStateVersion===Fe)return j_(C,Ee),gt}else Ee.uniforms=re.getUniforms(C),O!==null&&C.isNodeMaterial&&O.build(C,ne,Ee),C.onBeforeCompile(Ee,P),gt=re.acquireProgram(Ee,De),Ge.set(De,gt),K.uniforms=Ee.uniforms;let Be=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=ae.uniform),j_(C,Ee),K.needsLights=eT(C),K.lightsStateVersion=Fe,K.needsLights&&(Be.ambientLightColor.value=Z.state.ambient,Be.lightProbe.value=Z.state.probe,Be.sunLights.value=Z.state.sun,Be.sunLightShadows.value=Z.state.sunShadow,Be.directionalLights.value=Z.state.directional,Be.directionalLightShadows.value=Z.state.directionalShadow,Be.spotLights.value=Z.state.spot,Be.spotLightShadows.value=Z.state.spotShadow,Be.rectAreaLights.value=Z.state.rectArea,Be.ltc_1.value=Z.state.rectAreaLTC1,Be.ltc_2.value=Z.state.rectAreaLTC2,Be.pointLights.value=Z.state.point,Be.pointLightShadows.value=Z.state.pointShadow,Be.hemisphereLights.value=Z.state.hemi,Be.sunShadowMatrix.value=Z.state.sunShadowMatrix,Be.sunShadowCascade.value=Z.state.sunShadowCascade,Be.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Be.spotLightMatrix.value=Z.state.spotLightMatrix,Be.spotLightMap.value=Z.state.spotLightMap,Be.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.numLightProbeGrids=Z_(E.state.lightProbeGridArray),K.currentProgram=gt,K.uniformsList=null,gt}u(xc,"getProgram");function JE(C,G,ne,K,Z){let Ae=ze.get(C),Fe=Ae.currentProgram.id+","+K+","+Z,Ee=Ae.programVariants.get(Fe);return Ee===void 0?(Ee=xc(C,G,ne),Ae.programVariants.set(Fe,Ee)):(Ae.currentProgram=Ee,Ae.uniformsList=null,Ae.outputColorSpace=K,Ae.toneMapping=Z),Ee}u(JE,"getProgramVariant");function J_(C){if(C.uniformsList===null){let G=C.currentProgram.getUniforms();C.uniformsList=bl.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}u(J_,"getUniformList");function j_(C,G){let ne=ze.get(C);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}u(j_,"updateCommonMaterialProperties");function jE(C,G,ne,K,Z){G.isScene!==!0&&(G=Et),Ke.resetTextureUnits();let Ae=G.fog,Fe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,Ee=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ct.workingColorSpace,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ge=N.get(K.envMap||Fe,De),Qe=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,gt=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!ne.morphAttributes.position,xt=!!ne.morphAttributes.normal,Kt=!!ne.morphAttributes.color,Lt=ds;K.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Lt=P.toneMapping);let Pt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xn=Pt!==void 0?Pt.length:0,ke=ze.get(K),Rn=E.state.lights;if(Ie===!0&&(qe===!0||C!==J)){let Vt=C===J&&K.id===W;ae.setState(K,C,Vt)}let vt=!1,xo=!1;K.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Rn.state.version||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==Ge||K.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==gt||ke.morphTargets!==Be||ke.morphNormals!==xt||ke.morphColors!==Kt||ke.morphTargetsCount!==xn||ke.numLightProbeGrids!==Z_(E.state.lightProbeGridArray)?vt=!0:(ke.outputColorSpace!==Ee||ke.toneMapping!==Lt)&&(xo=!0):(vt=!0,ke.__version=K.version);let bn=ke.currentProgram;(vt===!0||xo===!0)&&(bn=xo===!0?JE(K,G,Z,Ee,Lt):xc(K,G,Z),O&&K.isNodeMaterial&&O.onUpdateProgram(K,bn,ke));let Nh=!1,Sr=!1,bo=!1,yt=bn.getUniforms(),mn=ke.uniforms;if(ue.useProgram(bn.program)&&(Nh=!0,Sr=!0,bo=!0),K.id!==W&&(W=K.id,Sr=!0),Nh||J!==C){ue.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(V,"projectionMatrix",C.projectionMatrix),yt.setValue(V,"viewMatrix",C.matrixWorldInverse);let on=yt.map.cameraPosition;on!==void 0&&on.setValue(V,mt.setFromMatrixPosition(C.matrixWorld)),it.logarithmicDepthBuffer&&yt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,Sr=!0,bo=!0)}if(ke.needsLights&&(Rn.state.sunShadowMap.length>0&&yt.setValue(V,"sunShadowMap",Rn.state.sunShadowMap,Ke),Rn.state.directionalShadowMap.length>0&&yt.setValue(V,"directionalShadowMap",Rn.state.directionalShadowMap,Ke),Rn.state.spotShadowMap.length>0&&yt.setValue(V,"spotShadowMap",Rn.state.spotShadowMap,Ke),Rn.state.pointShadowMap.length>0&&yt.setValue(V,"pointShadowMap",Rn.state.pointShadowMap,Ke)),Z.isSkinnedMesh){yt.setOptional(V,Z,"bindMatrix"),yt.setOptional(V,Z,"bindMatrixInverse");let Vt=Z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),yt.setValue(V,"boneTexture",Vt.boneTexture,Ke))}Z.isBatchedMesh&&(yt.setOptional(V,Z,"batchingTexture"),yt.setValue(V,"batchingTexture",Z._matricesTexture,Ke),yt.setOptional(V,Z,"batchingIdTexture"),yt.setValue(V,"batchingIdTexture",Z._indirectTexture,Ke),yt.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&yt.setValue(V,"batchingColorTexture",Z._colorsTexture,Ke));let Di=ne.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&ce.update(Z,ne,bn),(Sr||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,yt.setValue(V,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(mn.envMapIntensity.value=G.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=tI()),Sr){if(yt.setValue(V,"toneMappingExposure",P.toneMappingExposure),ke.needsLights&&QE(mn,bo),Ae&&K.fog===!0&&ve.refreshFogUniforms(mn,Ae),ve.refreshMaterialUniforms(mn,K,he,pe,E.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Vt=M,on=0;for(let ks of E.state.lightProbeGridArray)ks.texture!==null&&(Vt.textures[on]=ks.texture,Vt.min[on]=ks.boundingBox.min,Vt.max[on]=ks.boundingBox.max,Vt.resolution[on]=ks.resolution,on++);for(let ks in Vt)Vt[ks].length=on;mn.probesSH.value=Vt.textures,mn.probesMin.value=Vt.min,mn.probesMax.value=Vt.max,mn.probesResolution.value=Vt.resolution}bl.upload(V,J_(ke),mn,Ke)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(bl.upload(V,J_(ke),mn,Ke),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(V,"center",Z.center),yt.setValue(V,"modelViewMatrix",Z.modelViewMatrix),yt.setValue(V,"normalMatrix",Z.normalMatrix),yt.setValue(V,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){let Vt=K.uniformsGroups;for(let on=0,ks=Vt.length;on<ks;on++){let ev=Vt[on];Xe.update(ev,bn),Xe.bind(ev,bn)}}return bn}u(jE,"setProgram");function QE(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}u(QE,"markUniformsLightsNeedsUpdate");function eT(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}u(eT,"materialNeedsLights"),this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,G,ne){let K=ze.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=G,ze.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ne,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){let ne=ze.get(C);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,ne=0){Y=C,te=G,k=ne;let K=null,Z=!1,Ae=!1;if(C){let Ee=ze.get(C);if(Ee.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(V.FRAMEBUFFER,Ee.__webglFramebuffer),Q.copy(C.viewport),de.copy(C.scissor),be=C.scissorTest,ue.viewport(Q),ue.scissor(de),ue.setScissorTest(be),W=-1;return}else if(Ee.__webglFramebuffer===void 0)Ke.setupRenderTarget(C);else if(Ee.__hasExternalTextures)Ke.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Qe=C.depthTexture;if(Ee.__boundDepthTexture!==Qe){if(Qe!==null&&ze.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(C)}}let De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ae=!0);let Ge=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?K=Ge[G][ne]:K=Ge[G],Z=!0):C.samples>0&&Ke.useMultisampledRTT(C)===!1?K=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?K=Ge[ne]:K=Ge,Q.copy(C.viewport),de.copy(C.scissor),be=C.scissorTest}else Q.copy(j).multiplyScalar(he).floor(),de.copy(xe).multiplyScalar(he).floor(),be=oe;if(ne!==0&&(K=X),ue.bindFramebuffer(V.FRAMEBUFFER,K)&&ue.drawBuffers(C,K),ue.viewport(Q),ue.scissor(de),ue.setScissorTest(be),Z){let Ee=ze.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ee.__webglTexture,ne)}else if(Ae){let Ee=G;for(let De=0;De<C.textures.length;De++){let Ge=ze.get(C.textures[De]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+De,Ge.__webglTexture,ne,Ee)}}else if(C!==null&&ne!==0){let Ee=ze.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ee.__webglTexture,ne)}W=-1};function Q_(C){let G=ze.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=it.textureFormatReadable(C.format),G.__typeReadable=it.textureTypeReadable(C.type)),G}u(Q_,"getReadableState"),this.readRenderTargetPixels=function(C,G,ne,K,Z,Ae,Fe,Ee=0){if(!(C&&C.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(De=De[Fe],Array.isArray(De)&&(De=De[0])),De){ue.bindFramebuffer(V.FRAMEBUFFER,De);try{let Ge=C.textures[Ee],Qe=Ge.format,gt=Ge.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ee);let Be=Q_(Ge);if(Be.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-K&&ne>=0&&ne<=C.height-Z&&V.readPixels(G,ne,K,Z,_e.convert(Qe),_e.convert(gt),Ae)}finally{let Ge=Y!==null?ze.get(Y).__webglFramebuffer:null;ue.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,G,ne,K,Z,Ae,Fe,Ee=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(De=De[Fe],Array.isArray(De)&&(De=De[0])),De)if(G>=0&&G<=C.width-K&&ne>=0&&ne<=C.height-Z){ue.bindFramebuffer(V.FRAMEBUFFER,De);let Ge=C.textures[Ee],Qe=Ge.format,gt=Ge.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ee);let Be=Q_(Ge);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),V.readPixels(G,ne,K,Z,_e.convert(Qe),_e.convert(gt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Kt=Y!==null?ze.get(Y).__webglFramebuffer:null;ue.bindFramebuffer(V.FRAMEBUFFER,Kt);let Lt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await NM(V,Lt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(xt),V.deleteSync(Lt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,ne=0){let K=Math.pow(2,-ne),Z=Math.floor(C.image.width*K),Ae=Math.floor(C.image.height*K),Fe=G!==null?G.x:0,Ee=G!==null?G.y:0;Ke.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ne,0,0,Fe,Ee,Z,Ae),ue.unbindTexture()},this.copyTextureToTexture=function(C,G,ne=null,K=null,Z=0,Ae=0){let Fe,Ee,De,Ge,Qe,gt,Be,xt,Kt,Lt=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(ne!==null)Fe=ne.max.x-ne.min.x,Ee=ne.max.y-ne.min.y,De=ne.isBox3?ne.max.z-ne.min.z:1,Ge=ne.min.x,Qe=ne.min.y,gt=ne.isBox3?ne.min.z:0;else{let yt=Math.pow(2,-Z);Fe=Math.floor(Lt.width*yt),Ee=Math.floor(Lt.height*yt),C.isDataArrayTexture?De=Lt.depth:C.isData3DTexture?De=Math.floor(Lt.depth*yt):De=1,Ge=0,Qe=0,gt=0}K!==null?(Be=K.x,xt=K.y,Kt=K.z):(Be=0,xt=0,Kt=0);let Pt=_e.convert(G.format),xn=_e.convert(G.type),ke;G.isData3DTexture?(Ke.setTexture3D(G,0),ke=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Ke.setTexture2DArray(G,0),ke=V.TEXTURE_2D_ARRAY):(Ke.setTexture2D(G,0),ke=V.TEXTURE_2D),ue.activeTexture(V.TEXTURE0),ue.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),ue.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),ue.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let Rn=ue.getParameter(V.UNPACK_ROW_LENGTH),vt=ue.getParameter(V.UNPACK_IMAGE_HEIGHT),xo=ue.getParameter(V.UNPACK_SKIP_PIXELS),bn=ue.getParameter(V.UNPACK_SKIP_ROWS),Nh=ue.getParameter(V.UNPACK_SKIP_IMAGES);ue.pixelStorei(V.UNPACK_ROW_LENGTH,Lt.width),ue.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Lt.height),ue.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),ue.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),ue.pixelStorei(V.UNPACK_SKIP_IMAGES,gt);let Sr=C.isDataArrayTexture||C.isData3DTexture,bo=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){let yt=ze.get(C),mn=ze.get(G),Di=ze.get(yt.__renderTarget),Vt=ze.get(mn.__renderTarget);ue.bindFramebuffer(V.READ_FRAMEBUFFER,Di.__webglFramebuffer),ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let on=0;on<De;on++)Sr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,Z,gt+on),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(G).__webglTexture,Ae,Kt+on)),V.blitFramebuffer(Ge,Qe,Ge+Fe,Qe+Ee,Be,xt,Be+Fe,xt+Ee,V.DEPTH_BUFFER_BIT,V.NEAREST);ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||ze.has(C)){let yt=ze.get(C),mn=ze.get(G);ue.bindFramebuffer(V.READ_FRAMEBUFFER,U),ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,$);for(let Di=0;Di<De;Di++)Sr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yt.__webglTexture,Z,gt+Di):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yt.__webglTexture,Z),bo?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,Ae,Kt+Di):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,Ae),Z!==0?V.blitFramebuffer(Ge,Qe,Ge+Fe,Qe+Ee,Be,xt,Be+Fe,xt+Ee,V.COLOR_BUFFER_BIT,V.NEAREST):bo?V.copyTexSubImage3D(ke,Ae,Be,xt,Kt+Di,Ge,Qe,Fe,Ee):V.copyTexSubImage2D(ke,Ae,Be,xt,Ge,Qe,Fe,Ee);ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bo?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(ke,Ae,Be,xt,Kt,Fe,Ee,De,Pt,xn,Lt.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Ae,Be,xt,Kt,Fe,Ee,De,Pt,Lt.data):V.texSubImage3D(ke,Ae,Be,xt,Kt,Fe,Ee,De,Pt,xn,Lt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,Be,xt,Fe,Ee,Pt,xn,Lt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,Be,xt,Lt.width,Lt.height,Pt,Lt.data):V.texSubImage2D(V.TEXTURE_2D,Ae,Be,xt,Fe,Ee,Pt,xn,Lt);ue.pixelStorei(V.UNPACK_ROW_LENGTH,Rn),ue.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),ue.pixelStorei(V.UNPACK_SKIP_PIXELS,xo),ue.pixelStorei(V.UNPACK_SKIP_ROWS,bn),ue.pixelStorei(V.UNPACK_SKIP_IMAGES,Nh),Ae===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&V.generateMipmap(ke),ue.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&Ke.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ke.setTextureCube(C,0):C.isData3DTexture?Ke.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ke.setTexture2DArray(C,0):Ke.setTexture2D(C,0),ue.unbindTexture()},this.resetState=function(){te=0,k=0,Y=null,ue.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};u(Ix,"WebGLRenderer");var Jf=Ix;var xS=u(s=>{let e=Math.min(1,Math.max(0,s))**.5;return 4*e*(1-e)},"swell"),nI=u(s=>1-(1-s)*(1-s),"easeOut"),tp=u(s=>{let e=Math.sin(s*12.9898)*43758.5453;return e-Math.floor(e)},"share"),Lx=u((s,e=0)=>{let t=Math.min(1,Math.max(0,s)),n=nI(t);return Array.from({length:7},(i,r)=>{if(r===0)return{at:[0,.08+.22*n,0],size:.09*xS(t),shade:0};let o=(r-1)/6*Math.PI*2+(tp(e+r*7)-.5)*.6,a=(.12+tp(e+r*13)*.08)*n,l=.05+(.08+tp(e+r*17)*.1)*n;return{at:[Math.cos(o)*a,l,Math.sin(o)*a],size:(.055+tp(e+r*19)*.03)*xS(t*1.1),shade:r%2===0?0:1}})},"puffAt");var qn=["grass","plains","sand","rock","snow","forest","mud","tundra"],xs={shore:-.03,deep:-.15,reach:3},np={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},yS={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},bS={Ocean:{relief:{base:xs.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:yS,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},Wo=u(s=>s==="Unknown"?np:(Object.prototype.hasOwnProperty.call(bS,s)?bS[s]:void 0)??yS,"terrainEntry");var iI=u((s,e,t)=>{let n=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),_S=Float64Array.from({length:32},(s,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),vS=u(s=>s*s*s*(s*(s*6-15)+10),"fade"),bs=u(({cell:s,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/s)),i=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/s)),o=e.v===null||r===null?s:e.v/r,a=u(h=>(h%n+n)%n,"wrapU"),l=u(h=>r===null?h:(h%r+r)%r,"wrapV"),c=u((h,f,d,m)=>{let g=Math.floor(iI(h,f,t)*16)*2;return(_S[g]??0)*d+(_S[g+1]??0)*m},"slope");return(h,f)=>{let d=h/i,m=f/o,g=Math.floor(d),_=Math.floor(m),x=d-g,b=m-_,v=vS(x),S=vS(b),M=a(g),A=a(g+1),E=l(_),y=l(_+1),w=c(M,E,x,b)+(c(A,E,x-1,b)-c(M,E,x,b))*v,I=c(M,y,x,b-1)+(c(A,y,x-1,b-1)-c(M,y,x,b-1))*v;return Math.max(-1,Math.min(1,(w+(I-w)*S)*1.4))}},"periodicNoise"),ii=u(s=>{let e=s.map((n,i)=>.5**i),t=e.reduce((n,i)=>n+i,0);return(n,i)=>s.reduce((r,o,a)=>r+o(n,i)*(e[a]??0),0)/t},"fractalNoise");var Gr=128,rp=.5,ip=u(s=>(e,t)=>1-2*Math.abs(s(e,t)),"ridge"),sI={grass:{grain:u(({noise:s})=>ii([s(64,1),s(16,2),s(4,25)]),"grain"),shade:.3,bumps:u(({noise:s})=>ii([s(4,3),s(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:u(({noise:s})=>ii([s(64,5),s(8,6)]),"grain"),shade:.3,bumps:u(({noise:s})=>ii([s(8,7),s(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:u(({noise:s,wave:e,texels:t})=>{let n=e(7,3),i=s(64,9),r=s(32,10);return(o,a)=>.7*n(o+t(6)*i(o,a),a)+.3*r(o,a)},"grain"),shade:.12,bumps:u(({noise:s,wave:e,texels:t})=>{let n=e(7,3),i=s(64,9);return(r,o)=>n(r+t(6)*i(r,o),o)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:u(({noise:s})=>ii([ip(s(24,11)),ip(s(12,12)),s(6,13)]),"grain"),shade:.35,bumps:u(({noise:s})=>ii([ip(s(24,11)),ip(s(12,12)),s(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:u(({noise:s})=>s(64,14),"grain"),shade:.06,bumps:u(({noise:s})=>s(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:u(({noise:s})=>ii([s(10,16),s(40,17)]),"grain"),shade:.3,bumps:u(({noise:s})=>s(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:u(({noise:s})=>s(48,19),"grain"),shade:.25,bumps:u(({noise:s})=>ii([s(32,20),s(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:u(({noise:s})=>ii([s(4,22),s(48,23)]),"grain"),shade:.3,bumps:u(({noise:s})=>s(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},sp=u(s=>Math.max(0,Math.min(255,Math.round(s*255))),"byte"),rI=u((s=Gr,[e,t]=[0,0])=>{let n=new Uint8Array(s*s*4*qn.length),i={u:s,v:s};return qn.forEach((r,o)=>{let a=sI[r],l=u((S,M)=>bs({cell:S*s/Gr,period:i,seed:7919*(o+1)+M}),"noise"),c=u((S,M)=>(A,E)=>Math.sin(2*Math.PI*(S*A+M*E)/s),"wave"),h={noise:l,wave:c,texels:u(S=>S*s/Gr,"texels")},f=a.grain(h),d=a.bumps(h),m=o*s*s*4,g=new Float32Array(s*s);for(let S=0;S<s;S++)for(let M=0;M<s;M++)g[S*s+M]=d(M+e,S+t);let _=u((S,M)=>g[(M+s)%s*s+(S+s)%s]??0,"height"),x=new Float32Array(s*s),b=0;for(let S=0;S<s;S++)for(let M=0;M<s;M++)x[S*s+M]=f(M+e,S+t),b+=x[S*s+M]??0;let v=b/(s*s);for(let S=0;S<s;S++)for(let M=0;M<s;M++){let A=m+(S*s+M)*4,E=(x[S*s+M]??0)-v,y=(_(M+1,S)-_(M-1,S))/2*(s/Gr),w=(_(M,S+1)-_(M,S-1))/2*(s/Gr);n[A]=sp(a.shade*E+.5),n[A+1]=sp((1-Math.max(-1,Math.min(1,y*a.steep)))/2),n[A+2]=sp((1-Math.max(-1,Math.min(1,w*a.steep)))/2),n[A+3]=sp(a.rough+a.roughVaries*E)}}),n},"surfaceTextures"),MS=rI;var Vi={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var Hi=u(s=>Number.isInteger(s)?`${s}.0`:`${s}`,"number"),SS=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${Hi(Vi.rockTo)}, ${Hi(Vi.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${Hi(Vi.snowAtEquator)} + (${Hi(Vi.snowAtPoles)} - ${Hi(Vi.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${Hi(Vi.snowDeepens)}, height) * smoothstep(${Hi(Vi.snowSlips)}, ${Hi(Vi.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${Hi(Vi.wetFrom)}, ${Hi(Vi.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${Hi(Vi.wetUpTo)}, height));
}
`;var oI=u(s=>[s.u/Math.max(1,Math.round(s.u/rp)),s.v===null?rp:s.v/Math.max(1,Math.round(s.v/rp))],"surfaceTile"),aI=qn.map((s,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),lI=null,cI=u(()=>lI??=MS(),"made"),uI=u((s,e)=>{let t=new Po(cI(),Gr,Gr,qn.length),n=new ln({roughness:.92,vertexColors:!0}),[i,r]=oI(s);return t.format=Xn,t.type=Mn,t.wrapS=Gn,t.wrapT=Gn,t.magFilter=zt,t.minFilter=vn,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=Gi,t.needsUpdate=!0,n.onBeforeCompile=o=>{o.uniforms.surfaceDetail={value:t},o.uniforms.surfaceTile={value:new Ve(i,r)},o.uniforms.groundExtent={value:e},o.uniforms.rockColour={value:new Pe(Wo("Mountains").colour)},o.uniforms.snowColour={value:new Pe(Wo("Glacier").colour)},o.vertexShader=`attribute vec4 surfacesA;
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
${SS}
${o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${aI}
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
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),wS=uI;function op(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Rt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){let f=s[h],d=0,m=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(f.morphAttributes[g]),m++}if(m!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0,f=[];for(let d=0;d<s.length;++d){let m=s[d].index;for(let g=0;g<m.count;++g)f.push(m.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=ES(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let m=[];for(let _=0;_<o[h].length;++_)m.push(o[h][_][d]);let g=ES(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}u(op,"mergeGeometries");function ES(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new _t(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,m=h.count;d<m;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+f,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}u(ES,"mergeAttributes");function Nx(s,e){if(e===f0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===xl||e===mu){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===xl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}u(Nx,"toTrianglesDrawMode");var Xo={radius:.42,thickness:.025},Dx=Xo.radius-Xo.thickness,ap=.07,vu=.04,Fx=.25,Bt=.004,Ux=.08,_u=.012,cp=.045,up=.02,IS=625341585,hI=.18,dI=30,fI=5,pI=u(s=>Math.min(dI,fI+Math.max(0,s-1)*2),"lotsFor"),mI=u(s=>Math.floor(Math.max(0,s-1)/6),"tierFor"),Bx=u(s=>{let e=2166136261;for(let t=0;t<s.length;t++)e=Math.imul(e^s.charCodeAt(t),16777619);return e>>>0},"citySeed"),LS=u((s,e,t,n=[])=>({seed:s,lots:pI(e),tier:mI(e),ways:[...t],sea:[...n]}),"planFor"),gI=u((s,e)=>{let[t,n]=s.centre,i=e.map(l=>{let[c,h]=s.toward(l),f=Math.hypot(c-t,h-n);return{offset:l,du:f===0?0:(c-t)/f,dv:f===0?0:(h-n)/f}}),r=i.reduce((l,{du:c})=>l+c,0),o=i.reduce((l,{dv:c})=>l+c,0),a=u(({du:l,dv:c})=>l*r+c*o,"most");return i.length===0?[]:[i.reduce((l,c)=>a(c)>a(l)?c:l).offset]},"quayOf"),Yn=u((s,e)=>{let t=Math.imul(s^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"share"),Mu=u((s,e,t)=>{let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i;return r===0?0:((s[0]-e[0])*n+(s[1]-e[1])*i)/r},"along"),vl=u(({at:[s,e],width:t,facing:n})=>{let i=t/2,r=[Math.cos(n)*i,-Math.sin(n)*i],o=[Math.sin(n)*i,Math.cos(n)*i];return[[s-r[0]-o[0],e-r[1]-o[1]],[s+r[0]-o[0],e+r[1]-o[1]],[s+r[0]+o[0],e+r[1]+o[1]],[s-r[0]+o[0],e-r[1]+o[1]]]},"footprintOf"),xI=u(([s,e])=>{let t=Math.hypot(e[0]-s[0],e[1]-s[1]),n=-(e[1]-s[1])/t*(vu/2),i=(e[0]-s[0])/t*(vu/2);return[[s[0]+n,s[1]+i],[e[0]+n,e[1]+i],[e[0]-n,e[1]-i],[s[0]-n,s[1]-i]]},"stripOf"),hp=u((s,e,t)=>[s,e].some(n=>n.some((i,r)=>{let o=n[(r+1)%n.length],a=Math.hypot(o[0]-i[0],o[1]-i[1]),l=-(o[1]-i[1])/a,c=(o[0]-i[0])/a,h=u(m=>m.map(([g,_])=>g*l+_*c),"onto"),f=h(s),d=h(e);return Math.min(...d)-Math.max(...f)>=t||Math.min(...f)-Math.max(...d)>=t})),"apart"),_l=u((s,e)=>{let[t,n,,i]=e,r=Mu(s,t,n),o=Mu(s,t,i),a=Math.hypot(n[0]-t[0],n[1]-t[1]);return Math.hypot(Math.max(0,-r,r-1),Math.max(0,-o,o-1))*a},"fromFootprint"),NS=u((s,{seed:e,lots:t,tier:n,ways:i,sea:r},o)=>{let[a,l]=s.centre,c=[...i,...gI(s,r)].flatMap(x=>{let[b,v]=s.toward(x),S=[(a+b)/2,(l+v)/2],M=S[0]-a,A=S[1]-l,E=Math.hypot(M,A);return E===0?[]:[[[a+M/E*ap,l+A/E*ap],S]]}),h=c.map(xI),f=u((x,b)=>{let v=c.map(([S,M])=>{let A=Mu(x,S,M),E=[S[0]+(M[0]-S[0])*A,S[1]+(M[1]-S[1])*A];return{t:A,near:E,off:Math.hypot(E[0]-x[0],E[1]-x[1])}}).filter(({t:S,off:M})=>S>=0&&S<=1&&M<=vu/2+b+Bt&&M>0).sort((S,M)=>S.off-M.off)[0];return v===void 0?Math.atan2(a-x[0],l-x[1]):Math.atan2(v.near[0]-x[0],v.near[1]-x[1])},"facingAt"),d=Math.ceil(Dx/Ux),m=[];for(let x=-d;x<=d;x++)for(let b=-d;b<=d;b++){let v=(x+d)*(d*2+1)+(b+d),S=[a+b*Ux+(Yn(e,v*4)-.5)*2*_u,l+x*Ux+(Yn(e,v*4+1)-.5)*2*_u],M=Math.hypot(S[0]-a,S[1]-l),A=cp+Yn(e,v*4+2)*up;M>Dx||!s.owns(S[0],S[1])||m.push({at:S,width:A,facing:f(S,A),roof:Yn(e^IS,v),storeys:1+(M<hI?n:0)+(Yn(e,v*4+3)<.2?1:0),order:M+Yn(e,v*4+3)*.03})}m.sort((x,b)=>x.order-b.order);let g=[],_=[];return m.forEach(({at:x,width:b,facing:v,storeys:S,roof:M})=>{let A=vl({at:x,width:b,facing:v});A.every(([E,y])=>Math.hypot(E-a,y-l)<=Dx-Bt)&&_l([a,l],A)>=ap+Bt&&_l(o,A)>=Fx+Bt&&h.every(E=>hp(A,E,Bt))&&_.every(E=>hp(A,E,Bt))&&(g.push({at:x,width:b,facing:v,storeys:S,roof:M}),_.push(A))}),{plaza:{at:[a,l],radius:ap},streets:c,lots:g.slice(0,t)}},"sprawl"),TS=4,bI=.62,yI=.05,DS=12,Ox=.085,lp=.055,_I=.13,AS=32,vI=1821285621,US=u(s=>s<TS?0:Math.min(DS,s-TS+1),"suburbStepsFor"),MI=u(s=>s<=0?0:bI+(Math.min(s,DS)-1)*yI,"suburbReach"),SI=u(s=>1-.55*Math.min(1,Math.max(0,(s-.5)/.7)),"builtShare"),RS=u(([s,e],t)=>{let n=Math.hypot(e[0]-s[0],e[1]-s[1]),i=-(e[1]-s[1])/n*t,r=(e[0]-s[0])/n*t;return[[s[0]+i,s[1]+r],[e[0]+i,e[1]+r],[e[0]-i,e[1]-r],[s[0]-i,s[1]-r]]},"strip"),CS=u(s=>s.slice(1).map((e,t)=>[s[t],e]).filter(([e,t])=>Math.hypot(t[0]-e[0],t[1]-e[1])>0),"piecesOf"),PS=u((s,e,t)=>Math.min(...e.map(([n])=>n))-Math.max(...s.map(([n])=>n))>=t||Math.min(...s.map(([n])=>n))-Math.max(...e.map(([n])=>n))>=t||Math.min(...e.map(([,n])=>n))-Math.max(...s.map(([,n])=>n))>=t||Math.min(...s.map(([,n])=>n))-Math.max(...e.map(([,n])=>n))>=t,"boxesApart"),OS=u((s,{seed:e,steps:t,city:n},i)=>{let r=MI(t);if(r===0)return[];let[o,a]=s.centre,l=s.toward(n),c=e^Math.imul(vI,(n[0]+7)*31+(n[1]+7)),h=i.runs.flatMap(({points:E})=>CS(E)),f=[...h.map(E=>({line:E,wide:lp})),...i.lanes.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>({line:E,wide:_I}))],d=[...f.map(({line:E,wide:y})=>RS(E,y)),...i.lines.filter(([E,y])=>Math.hypot(y[0]-E[0],y[1]-E[1])>0).map(E=>RS(E,lp))],m=u((E,y)=>{let w=f.map(({line:[I,P],wide:D})=>{let O=Mu(E,I,P),X=[I[0]+(P[0]-I[0])*O,I[1]+(P[1]-I[1])*O];return{t:O,near:X,off:Math.hypot(X[0]-E[0],X[1]-E[1]),wide:D}}).filter(({t:I,off:P,wide:D})=>I>=0&&I<=1&&P<=D+y+Bt&&P>0).sort((I,P)=>I.off-P.off)[0];return w===void 0?Math.atan2(l[0]-E[0],l[1]-E[1]):Math.atan2(w.near[0]-E[0],w.near[1]-E[1])},"facingAt"),g=Math.ceil(.75/Ox),_=[],x=u(E=>cp+Yn(c,E*5+2)*up,"widthOf"),b=u(E=>Math.min(1/0,...h.map(([y,w])=>{let I=Math.max(0,Math.min(1,Mu(E,y,w)));return Math.hypot(y[0]+(w[0]-y[0])*I-E[0],y[1]+(w[1]-y[1])*I-E[1])})),"fromRuns"),v=u((E,y,w)=>{let I=Math.hypot(y[0]-l[0],y[1]-l[1]),P=I+Yn(c,E*5+3)*.03,D=x(E);P<=r&&Yn(c,E*5+4)<SI(I)&&s.owns(y[0],y[1])&&(!w||b(y)>=lp+Bt*2+cp+up)&&_.push({at:y,width:D,facing:m(y,D),roof:Yn(c^IS,E),storeys:1+(Yn(c,E*5+3)<.15?1:0),order:P})},"consider");for(let E=-g;E<=g;E++)for(let y=-g;y<=g;y++){let w=(E+g)*(g*2+1)+(y+g);v(w,[o+y*Ox+(Yn(c,w*5)-.5)*2*_u,a+E*Ox+(Yn(c,w*5+1)-.5)*2*_u],!0)}i.runs.forEach(({key:E,points:y})=>{let w=CS(y).map(([D,O])=>({from:D,to:O,length:Math.hypot(O[0]-D[0],O[1]-D[1])})),I=w.reduce((D,O)=>D+O.length,0),P=Math.min(AS,Math.floor(I/(cp+up+Bt*2)));for(let D=0;D<P;D++)[1,-1].forEach((O,X)=>{let U=(g*2+1)**2+(E*AS+D)*2+X,$=lp+x(U)/2+Bt*2,te=(D+.5)/P*I+(Yn(c,U*5)-.5)*_u;for(let[k,{from:Y,to:W,length:J}]of w.entries()){if(te<=J||k===w.length-1){let Q=(W[0]-Y[0])/J,de=(W[1]-Y[1])/J;v(U,[Y[0]+Q*te-de*$*O,Y[1]+de*te+Q*$*O],!1);break}te-=J}})}),_.sort((E,y)=>E.order-y.order);let S=u(([E,y],w)=>(Math.hypot(E-w[0],y-w[1])**2-Math.hypot(E-l[0],y-l[1])**2)/(2*Math.hypot(w[0]-l[0],w[1]-l[1])),"nearer"),M=[],A=[];return _.forEach(({at:E,width:y,facing:w,storeys:I,roof:P})=>{let D=vl({at:E,width:y,facing:w});vl({at:E,width:y+Bt*2,facing:w}).every(([O,X])=>s.owns(O,X))&&i.others.every(O=>D.every(X=>S(X,O)>=Bt/2))&&_l(l,D)>=Xo.radius+Xo.thickness+Bt&&i.stands.every(O=>_l(O,D)>=Fx+Bt)&&_l(s.centre,D)>=Fx+Bt&&[E,...D].every(([O,X])=>(i.ground?.(O,X)??0)>=0)&&i.taken.every(([O,X,U])=>_l([O,X],D)>=U+Bt)&&d.every(O=>PS(D,O,Bt)||hp(D,O,Bt))&&A.every(O=>PS(D,O,Bt)||hp(D,O,Bt))&&(M.push({at:E,width:y,facing:w,storeys:I,roof:P}),A.push(D))}),M},"suburb");var FS="#c79a72",wI="#5a4a3a";var wn="#7a5532",Gx="#5f6266",BS="#8a8f96",Wi="#5d6447",kx="#e8e0cc",zS="#6e4b2f",qo="#8a8580",kS="#5b3e27",Ml="#7d858c",EI=new H(0,1,0),Le=new as(1,1,1),cn=new ls(.5,.5,1,10),Yo=new js(.5,1,10),Sl=new kr(.5,10,8),Hx=class Hx{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let i=Math.cos(n),r=Math.sin(n);return e.parts.forEach(o=>{let[a,l,c]=o.at;this.parts.push({...o,at:[t[0]+a*i+c*r,t[1]+l,t[2]-a*r+c*i],yaw:(o.yaw??0)+n})}),this}};u(Hx,"Parts");var un=Hx,TI=u((s,e,t)=>{switch(s){case"ancient":t.add({shape:Sl,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Yo,colour:Gx,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Le,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:cn,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Sl,colour:Wi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),AI=u((s,e,t,n)=>{switch(s){case"club":n.add({shape:cn,colour:wn,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:cn,colour:wn,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Yo,colour:Gx,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:cn,colour:wn,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Yo,colour:BS,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Le,colour:BS,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Le,colour:wn,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:cn,colour:wn,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Le,colour:s==="rifle"?"#3a3a3a":wn,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Le,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Le,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:cn,colour:wn,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(s==="spear"||s==="sword")&&n.add({shape:cn,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),RI={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},Vx=u((s,e,t,{legs:n=!0,dress:i}={})=>{let r=new un,o=i===void 0?void 0:RI[i],a=o?.coat??(s==="modern"?Wi:t[0]),l=o?.legs??(s==="ancient"?FS:s==="modern"?Wi:wI);return n&&(r.add({shape:Le,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:Le,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:Le,colour:a,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:Le,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:Le,colour:a,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Le,colour:a,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Sl,colour:FS,at:[0,.16,0],size:[.034,.038,.034]}),i==="snow"?r.add({shape:Sl,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):i==="irregular"?r.add({shape:Sl,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):TI(s,t,r),i==="parachute"&&r.add({shape:Le,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),AI(e,s,t,r),r},"person"),Su=u(s=>s<=1?[[0,0]]:s===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),zx=u((s=zS)=>new un().add({shape:Le,colour:s,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Le,colour:s,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Le,colour:s,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Le,colour:s,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Le,colour:s,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Le,colour:s,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Le,colour:s,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),CI=u((s,e,t)=>new un().addAll(zx(),[0,0,0]).add({shape:Le,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(Vx(s,e,t,{legs:!1}),[0,.04,0]),"rider"),PI=u(s=>new un().add({shape:Le,colour:qo,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Le,colour:qo,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:cn,colour:qo,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Le,colour:qo,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Le,colour:qo,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Le,colour:qo,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Le,colour:qo,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Le,colour:s[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Le,colour:s[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),En=u((s,e=.05)=>({shape:cn,colour:wn,at:s,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),II=u((s,e,t)=>{if(e==="chariot")return new un().addAll(zx(),[0,0,.09]).add({shape:Le,colour:wn,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Le,colour:s[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(En([-.042,.035,-.045],.065)).add(En([.042,.035,-.045],.065)).addAll(Vx(t,"spear",s,{legs:!1}),[0,0,-.045]);let n=new un().addAll(zx(t==="ancient"?"#8a7a64":zS),[0,0,.1]).add({shape:Le,colour:wn,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Le,colour:s[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(En([-.042,.03,-.03])).add(En([.042,.03,-.03])).add(En([-.042,.03,-.09])).add(En([.042,.03,-.09]));return e==="wagon"?n.add({shape:cn,colour:kx,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Le,colour:kx,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Le,colour:s[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Le,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),LI=u((s,e,t)=>{if(s==="ancient"||s==="medieval")return new un().add({shape:Le,colour:wn,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Le,colour:wn,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Le,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(En([-.045,.03,.04],.045)).add(En([.045,.03,.04],.045)).add(En([-.045,.03,-.04],.045)).add(En([.045,.03,-.04],.045));let n=t?.19:s==="renaissance"?.12:.16,i=s==="renaissance"?"#3d3a36":s==="modern"?Wi:Gx;return new un().add({shape:cn,colour:i,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Le,colour:s==="modern"?Wi:wn,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Le,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(En([-.04,.035,0],.07)).add(En([.04,.035,0],.07))},"siege"),NI=u((s,e,t)=>{if(s==="industrial")return new un().add({shape:Le,colour:Ml,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Le,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(En([-.045,.025,.06],.045)).add(En([.045,.025,.06],.045)).add(En([-.045,.025,-.06],.045)).add(En([.045,.025,-.06],.045));let n=new un().add({shape:Le,colour:Wi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Le,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Le,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Le,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Le,colour:Wi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:cn,colour:Wi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Le,colour:Wi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),DI=u((s,e)=>{let t=s.large?1.25:1,n=.3*t,i=.07*t,r=new un;switch(s.hull){case"oars":case"sail":{r.add({shape:Le,colour:kS,at:[0,.03,0],size:[i,.045,n*.8]}).add({shape:Yo,colour:kS,at:[0,.03,n*.45],size:[i,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:e[0],at:[0,.056,0],size:[i+.004,.008,n*.82]});let o=s.hull==="oars"?1:s.large?3:2;for(let a=0;a<o;a++){let l=(a-(o-1)/2)*.09*t;r.add({shape:cn,colour:wn,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:Le,colour:a===0?e[1]:kx,at:[0,.16,l],size:[i*1.3,.09,.005]})}return(s.guns??0)>0&&r.add({shape:Le,colour:"#1f1f1f",at:[0,.036,0],size:[i+.006,.009,n*.66]}),s.hull==="oars"&&r.add({shape:Le,colour:wn,at:[-i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Le,colour:wn,at:[i*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:cn,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Le,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:Le,colour:Ml,at:[0,.035,0],size:[i*1.1,.05,n*1.15]}).add({shape:Le,colour:"#55595e",at:[0,.062,0],size:[i*1.5,.008,n*1.2]}).add({shape:Le,colour:Ml,at:[i*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Le,colour:e[0],at:[i*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:Le,colour:s.era==="industrial"?"#4a4a48":Ml,at:[0,.03,0],size:[i,.045,n*.85]}).add({shape:Yo,colour:s.era==="industrial"?"#4a4a48":Ml,at:[0,.03,n*.47],size:[i,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:Ml,at:[0,.075,-.02],size:[i*.6,.05,n*.3]}).add({shape:cn,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Le,colour:e[1],at:[0,.056,0],size:[i+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,s.guns??0).forEach(o=>{let a=o>0?1:-1;r.add({shape:Le,colour:"#5f666c",at:[0,.066,n*o],size:[.035,.02,.035]}).add({shape:cn,colour:"#5f666c",at:[0,.07,n*o+a*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),s.missiles&&[-1,1].forEach(o=>r.add({shape:Le,colour:"#4a5056",at:[o*i*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),UI=u((s,e)=>{let t=s.large?1.3:1,n=s.stealth?"#2c3034":s.large?"#6e7378":"#7d8890";return new un().add({shape:cn,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Yo,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Le,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Le,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Le,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Le,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),OI=u(s=>new un().add({shape:Sl,colour:Wi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Le,colour:Wi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Le,colour:s[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Le,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Le,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),FI=u((s,e)=>{let t=e?1.4:1;return new un().add({shape:cn,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Yo,colour:e?"#c8a020":s[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Le,colour:s[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Le,colour:s[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),GS=u((s,e)=>{switch(s.shape){case"foot":{let t=new un;return Su(s.squad).forEach(([n,i],r)=>t.addAll(Vx(s.era,s.gear??"none",e,{dress:s.dress}),[n,0,i],r*.3-.3)),t}case"mounted":{let t=new un;return Su(s.squad).forEach(([n,i])=>t.addAll(CI(s.era,s.gear??"none",e),[n*1.4,0,i])),t}case"elephant":return PI(e);case"cart":return II(e,s.cart??"wagon",s.era);case"siege":return LI(s.era,e,s.large===!0);case"vehicle":return NI(s.era,e,s.large===!0);case"ship":return DI(s,e);case"aircraft":return UI(s,e);case"helicopter":return OI(e);default:return FI(e,s.large===!0)}},"figureParts"),BI=u(({at:s,size:e,turn:t=[0,0,0],yaw:n=0})=>new Ze().compose(new H(...s),new $t().setFromAxisAngle(EI,n).multiply(new $t().setFromEuler(new Qn(...t))),new H(...e)),"partMatrix"),dp=u(s=>{let e=s.map(n=>{let{shape:i,colour:r}=n,o=i.clone(),a=new Pe(r),l=o.getAttribute("position").count,c=new Float32Array(l*3);for(let h=0;h<l;h++)c.set([a.r,a.g,a.b],h*3);return o.applyMatrix4(BI(n)),o.setAttribute("color",new _t(c,3)),o}),t=(e.length===0?null:op(e))??new Rt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),VS=u((s,e)=>dp(GS(s,e).parts),"figureGeometry"),kI=new ls(.19,.2,1,28),zI=new Qs(.22,.014,4,32),GI=new Qs(1,.03,3,40),VI="#dfe9ea",HI=[[.11,.2],[.16,.27]],HS=u((s,e,{fortified:t,scale:n,stand:i,part:r="whole",ripples:o=!1})=>{let a=s.shape==="ship",l=a?0:i,c=r==="base"?[]:GS(s,e).parts.map(h=>({...h,at:[h.at[0]*n,h.at[1]*n+l,h.at[2]*n],size:[h.size[0]*n,h.size[1]*n,h.size[2]*n]}));if(r==="figures")return dp(c);if(a||c.push({shape:kI,colour:e[1],at:[0,i/2,0],size:[1,i,1]}),a&&o){let h=(s.large?1.25:1)*n;HI.forEach(([f,d])=>c.push({shape:GI,colour:VI,at:[0,.006,0],size:[f*h,d*h,.15],turn:[Math.PI/2,0,0]}))}return t&&c.push({shape:zI,colour:"#b5ab98",at:[0,l+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),dp(c)},"unitBodyGeometry"),WI=new Qs(Xo.radius,Xo.thickness,6,24),WS=u(()=>dp([{shape:WI,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]),"wallsGeometry");function wl(s){let e=new Map,t=new Map,n=s.clone();return XS(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}u(wl,"clone");function XS(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)XS(s.children[n],e.children[n],t)}u(XS,"parallelTraverse");var yb=class yb extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new pp(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new pp(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ub(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=sr.extractUrlBase(e);o=sr.resolveURL(c,this.path)}else o=sr.extractUrlBase(e);this.manager.itemStart(e);let a=u(function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},"_onError"),l=new cl(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ZS){try{o[ut.KHR_BINARY_GLTF]=new hb(e)}catch(f){i&&i(f);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new bb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case ut.KHR_MATERIALS_UNLIT:o[f]=new $x;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[f]=new db(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[f]=new fb;break;case ut.KHR_MESH_QUANTIZATION:o[f]=new pb;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};u(yb,"GLTFLoader");var fp=yb;function XI(){let s={};return{get:u(function(e){return s[e]},"get"),add:u(function(e,t){s[e]=t},"add"),remove:u(function(e){delete s[e]},"remove"),removeAll:u(function(){s={}},"removeAll")}}u(XI,"GLTFRegistry");function Wt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}u(Wt,"getMaterialExtension");var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_b=class _b{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Oo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nu(h),c.distance=f;break;case"spot":c=new tu(h),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ys(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};u(_b,"GLTFLightsExtension");var Yx=_b,vb=class vb{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){let i=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}};u(vb,"GLTFMaterialsUnlitExtension");var $x=vb,Mb=class Mb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};u(Mb,"GLTFMaterialsEmissiveStrengthExtension");var Kx=Mb,Sb=class Sb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(r,r)}return Promise.all(i)}};u(Sb,"GLTFMaterialsClearcoatExtension");var Zx=Sb,wb=class wb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}};u(wb,"GLTFMaterialsDiffuseRoughnessExtension");var Jx=wb,Eb=class Eb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};u(Eb,"GLTFMaterialsDispersionExtension");var jx=Eb,Tb=class Tb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}};u(Tb,"GLTFMaterialsIridescenceExtension");var Qx=Tb,Ab=class Ab{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}};u(Ab,"GLTFMaterialsSheenExtension");var eb=Ab,Rb=class Rb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}};u(Rb,"GLTFMaterialsTransmissionExtension");var tb=Rb,Cb=class Cb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(r[0],r[1],r[2],Pn),Promise.all(i)}};u(Cb,"GLTFMaterialsVolumeExtension");var nb=Cb,Pb=class Pb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};u(Pb,"GLTFMaterialsIorExtension");var ib=Pb,Ib=class Ib{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(i)}};u(Ib,"GLTFMaterialsSpecularExtension");var sb=Ib,Lb=class Lb{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}};u(Lb,"GLTFMaterialsBumpExtension");var rb=Lb,Nb=class Nb{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}};u(Nb,"GLTFMaterialsAnisotropyExtension");var ob=Nb,Db=class Db{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}};u(Db,"GLTFTextureBasisUExtension");var ab=Db,Ub=class Ub{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Ub,"GLTFTextureWebPExtension");var lb=Ub,Ob=class Ob{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};u(Ob,"GLTFTextureAVIFExtension");var cb=Ob,Fb=class Fb{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,f=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(m),h,f,d,i.mode,i.filter),m})})}else return null}};u(Fb,"GLTFMeshoptCompression");var pp=Fb,Bb=class Bb{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,m=[];for(let g of f){let _=new Ze,x=new H,b=new $t,v=new H(1,1,1),S=new Vc(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&b.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),S.setMatrixAt(A,_.compose(x,b,v));let M=null;for(let A in l)if(A==="_COLOR_0"){let E=l[A];S.instanceColor=new Hn(E.array,E.itemSize,E.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(M===null){let y=S.geometry;M=new Rt,M.name=y.name;for(let w in y.attributes)M.setAttribute(w,y.attributes[w]);for(let w in y.morphAttributes)M.morphAttributes[w]=y.morphAttributes[w];y.index!==null&&M.setIndex(y.index),M.morphTargetsRelative=y.morphTargetsRelative;for(let w of y.groups)M.addGroup(w.start,w.count,w.materialIndex);y.boundingBox!==null&&(M.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(M.boundingSphere=y.boundingSphere.clone()),M.drawRange.start=y.drawRange.start,M.drawRange.count=y.drawRange.count,M.userData=Object.assign({},y.userData),S.geometry=M}let E=l[A];M.setAttribute(A,new Hn(E.array,E.itemSize,E.normalized))}Ft.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}};u(Bb,"GLTFMeshGpuInstancing");var ub=Bb,ZS="glTF",wu=12,qS={JSON:1313821514,BIN:5130562},kb=class kb{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wu),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ZS)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-wu,r=new DataView(e,wu),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===qS.JSON){let c=new Uint8Array(e,wu+o,a);this.content=n.decode(c)}else if(l===qS.BIN){let c=wu+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}};u(kb,"GLTFBinaryExtension");var hb=kb,zb=class zb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let f=gb[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=gb[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],m=El[d.componentType];c[f]=m.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){i.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],x=l[g];x!==void 0&&(_.normalized=x)}f(m)},a,c,Pn,d)})})}};u(zb,"GLTFDracoMeshCompressionExtension");var db=zb,Gb=class Gb{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};u(Gb,"GLTFTextureTransformExtension");var fb=Gb,Vb=class Vb{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}};u(Vb,"GLTFMeshQuantizationExtension");var pb=Vb,Hb=class Hb extends us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,f=(n-t)/h,d=f*f,m=d*f,g=e*c,_=g-c,x=-2*m+3*d,b=m-d,v=1-x,S=b-d+f;for(let M=0;M!==a;M++){let A=o[_+M+a],E=o[_+M+l]*h,y=o[g+M+a],w=o[g+M]*h;r[M]=v*A+S*E+x*y+b*w}return r}};u(Hb,"GLTFCubicSplineInterpolant");var mp=Hb,qI=new $t,Wb=class Wb extends mp{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return qI.fromArray(r).normalize().toArray(r),r}};u(Wb,"GLTFCubicSplineQuaternionInterpolant");var mb=Wb,vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},El={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},YS={9728:Ht,9729:zt,9984:rf,9985:ml,9986:zo,9987:vn},$S={33071:zn,33648:ja,10497:Gn},Wx={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gb={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YI={CUBICSPLINE:void 0,LINEAR:Ro,STEP:Ao},Xx={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $I(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),s.DefaultMaterial}u($I,"createDefaultMaterial");function $o(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}u($o,"addUnknownExtensionsToUserData");function ys(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}u(ys,"assignExtrasToUserData");function KI(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let f=e[c];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(d)}if(i){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],f=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}u(KI,"addMorphTargets");function ZI(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}u(ZI,"updateMorphTargets");function JI(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qx(t.attributes):e=s.indices+":"+qx(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qx(s.targets[n]);return e}u(JI,"createPrimitiveKey");function qx(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}u(qx,"createAttributesKey");function xb(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}u(xb,"getNormalizedComponentScale");function jI(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}u(jI,"getImageURIMimeType");var QI=new Ze,Xb=class Xb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XI,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new jc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new su(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cl(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return $o(r,a,i),ys(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=u((o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])},"updateMappings");return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(sr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Wx[i.type],a=El[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new _t(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Wx[i.type],c=El[i.componentType],h=c.BYTES_PER_ELEMENT,f=h*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,x;if(m&&m!==f){let b=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+b+":"+i.count,S=t.cache.get(v);S||(_=new c(a,b*m,i.count*m/h),S=new Io(_,m/h),t.cache.add(v,S)),x=new Nr(S,l,d%m/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),x=new _t(_,l,g);if(i.sparse!==void 0){let b=Wx.SCALAR,v=El[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,A=new v(o[1],S,i.sparse.count*b),E=new c(o[2],M,i.sparse.count*l);a!==null&&(x=new _t(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let y=0,w=A.length;y<w;y++){let I=A[y];if(x.setX(I,E[y*l]),l>=2&&x.setY(I,E[y*l+1]),l>=3&&x.setZ(I,E[y*l+2]),l>=4&&x.setW(I,E[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=YS[d.magFilter]||zt,h.minFilter=YS[d.minFilter]||vn,h.wrapS=$S[d.wrapS]||Gn,h.wrapT=$S[d.wrapT]||Gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(m,g){t.parse(d,m,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let m=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(m,g){let _=m;t.isImageBitmapLoader===!0&&(_=u(function(x){let b=new jt(x);b.needsUpdate=!0,m(b)},"onLoad")),t.load(sr.resolveURL(d,r.path),_,void 0,g)})})}let f=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ys(d,o),d.userData.mimeType=o.mimeType||jI(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new al,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ol,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ln}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let f=i[ut.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pn),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Nt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qt);let h=r.alphaMode||Xx.OPAQUE;if(h===Xx.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Xx.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==yi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yi){let f=r.emissiveFactor;a.emissive=new Pe().setRGB(f[0],f[1],f[2],Pn)}return r.emissiveTexture!==void 0&&o!==yi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),ys(f,r),t.associations.set(f,{materials:e}),r.extensions&&$o(i,f,r),f})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return KS(l,a,t)})}u(r,"createDracoPrimitive");let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=JI(c),f=i[h];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=KS(new Rt,c,t),c.mode===vi.TRIANGLE_STRIP?d=d.then(m=>Nx(m,mu)):c.mode===vi.TRIANGLE_FAN&&(d=d.then(m=>Nx(m,xl))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?$I(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],x=o[m],b,v=c[m];if(x.mode===vi.TRIANGLES||x.mode===vi.TRIANGLE_STRIP||x.mode===vi.TRIANGLE_FAN||x.mode===void 0){let S=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),b=S&&M?new zc(_,v):new pt(_,v),b.isSkinnedMesh===!0&&b.normalizeSkinWeights()}else if(x.mode===vi.LINES)b=new Hc(_,v);else if(x.mode===vi.LINE_STRIP)b=new Lo(_,v);else if(x.mode===vi.LINE_LOOP)b=new Wc(_,v);else if(x.mode===vi.POINTS)b=new Xc(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(b.geometry.morphAttributes).length>0&&ZI(b,r),b.name=t.createUniqueName(r.name||"mesh_"+e),ys(b,r),x.extensions&&$o(i,b,x),t.assignFinalMaterial(b),f.push(b)}for(let m=0,g=f.length;m<g;m++)t.associations.set(f[m],{meshes:e,primitives:m});if(f.length===1)return r.extensions&&$o(i,f[0],r),f[0];let d=new Xt;r.extensions&&$o(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=f.length;m<g;m++)d.add(f[m]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Yf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Uo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ys(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let f=o[c];if(f){a.push(f);let d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Gc(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let f=0,d=i.channels.length;f<d;f++){let m=i.channels[f],g=i.samplers[m.sampler],_=m.target,x=_.node,b=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",b)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(f){let d=f[0],m=f[1],g=f[2],_=f[3],x=f[4],b=[];for(let S=0,M=d.length;S<M;S++){let A=d[S],E=m[S],y=g[S],w=_[S],I=x[S];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=n._createAnimationTracks(A,E,y,w,I);if(P)for(let D=0;D<P.length;D++)b.push(P[D])}let v=new No(r,void 0,b);return ys(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,QI)});for(let m=0,g=f.length;m<g;m++)h.add(f[m]);if(h.userData.pivot!==void 0&&f.length>0){let m=h.userData.pivot,g=f[0];h.pivot=new H().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new rl:c.length>1?h=new Xt:c.length===1?h=c[0]:h=new Ft,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(r.name&&(h.userData.name=r.name,h.name=o),ys(h,r),r.extensions&&$o(n,h,r),r.matrix!==void 0){let f=new Ze;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let f=i.associations.get(h);i.associations.set(h,{...f})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Xt;n.name&&(r.name=i.createUniqueName(n.name)),ys(r,n),n.extensions&&$o(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,f=l.length;h<f;h++){let d=l[h];d.parent!==null?r.add(wl(d)):r.add(d)}let c=u(h=>{let f=new Map;for(let[d,m]of i.associations)(d instanceof In||d instanceof jt)&&f.set(d,m);return h.traverse(d=>{let m=i.associations.get(d);m!=null&&f.set(d,m)}),f},"reduceAssociations");return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}u(c,"collectMorphTargets"),Vr[r.path]===Vr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Vr[r.path]){case Vr.weights:h=tr;break;case Vr.rotation:h=nr;break;case Vr.translation:case Vr.scale:h=zr;break;default:n.itemSize===1?h=tr:h=zr;break}let f=i.interpolation!==void 0?YI[i.interpolation]:Ro,d=this._getArrayFromAccessor(n);for(let m=0,g=l.length;m<g;m++){let _=new h(l[m]+"."+Vr[r.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=xb(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=u(function(n){let i=this instanceof nr?mb:mp;return new i(this.times,this.values,this.getValueSize()/3,n)},"InterpolantFactoryMethodGLTFCubicSpline"),e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};u(Xb,"GLTFParser");var bb=Xb;function e3(s,e,t){let n=e.attributes,i=new ei;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){let h=xb(El[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new H,l=new H;for(let c=0,h=r.length;c<h;c++){let f=r[c];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let _=xb(El[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}u(e3,"computeBounds");function KS(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}u(r,"assignAttributeAccessor");for(let o in n){let a=gb[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ct.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),ys(s,e),e3(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KI(s,e.targets,t):s})}u(KS,"addPrimitiveAttributes");var Yb=["idle","move","fight","die","work","settle"],Xi=u(s=>typeof s=="object"&&s!==null&&!Array.isArray(s),"isObject"),si=u(s=>typeof s=="string"&&s!=="","isText"),JS=u(s=>typeof s=="number"&&Number.isFinite(s)&&s>0,"isScale"),jS=u(s=>Xi(s)&&si(s.name)&&si(s.url)&&(s.attribution===void 0||si(s.attribution)),"isLicence"),QS=u(s=>si(s)&&s.endsWith(".glb")&&!s.startsWith("/")&&!/[\\%?#\u0000-\u0020]/.test(s)&&!/^[a-z][a-z0-9+.-]*:/i.test(s)&&s.split("/").every(e=>e!==""&&e!=="."&&e!==".."),"isFile"),qb=u(s=>Yb.includes(s),"isRole"),t3=u(s=>Xi(s)&&typeof s.at=="number"&&Number.isFinite(s.at)&&s.at>=0&&si(s.joint),"isShot"),n3=u(s=>{if(!Xi(s)||!QS(s.file)||!Xi(s.clips))return;let e={};if(Object.entries(s.clips).forEach(([i,r])=>{qb(i)&&si(r)&&(e[i]=r)}),Object.keys(e).length===0||Object.entries(s.clips).some(([i,r])=>qb(i)&&!si(r)))return;if(s.shots===void 0)return{file:s.file,clips:e};if(!Xi(s.shots))return;let t={},n=Object.entries(s.shots).filter(([i])=>qb(i));if(n.every(([i,r])=>e[i]!==void 0&&Array.isArray(r)&&r.every(t3)))return n.forEach(([i,r])=>t[i]=r),{file:s.file,clips:e,shots:t}},"riggedOf"),ew=u(s=>{if(!Xi(s))return"not an object";if(s.schema!==1||s.kind!=="models")return"not a set of models (schema 1)";if(!si(s.id)||!si(s.name))return"no id or name";if(!jS(s.licence))return"no licence";if(!Array.isArray(s.credits)||s.credits.length===0||!s.credits.every(r=>Xi(r)&&si(r.work)&&si(r.author)&&si(r.url)&&jS(r.licence)))return"no credits";if(!JS(s.scale))return"no scale";let e=s.models;if(!Xi(e))return"no models";let t=Object.entries(e).find(([,r])=>!Xi(r)||!QS(r.file)||r.scale!==void 0&&!JS(r.scale));if(t!==void 0)return`model ${t[0]}: no glTF binary beside the manifest, or no scale`;let n=s.names;if(!Xi(n)||!Xi(n.unit))return"no unit names";let i=Object.entries(n.unit).find(([,r])=>!si(r)||!Object.prototype.hasOwnProperty.call(e,r));return i!==void 0?`unit ${i[0]}: drawn by a model the set hasn't`:{...s,models:Object.fromEntries(Object.entries(e).map(([r,o])=>{let{rigged:a,...l}=o,c=n3(a);return[r,c===void 0?l:{...l,rigged:c}]}))}},"readModelManifest"),tw=u(s=>{let e=new Map;return Object.entries(s.names.unit).forEach(([t,n])=>e.set(n,[...e.get(n)??[],t])),e},"unitTypesOf"),$b=u((s,e)=>s.models[e]?.scale??s.scale,"scaleOf");var iw=u(s=>sw(s.geometry,Array.isArray(s.material)?s.material[0]:s.material),"rigPart"),sw=u((s,e)=>{let t=e;return{geometry:s,map:t.map??null,tinted:t.userData?.playerColour===!0,cutout:t.alphaTest>0,doubleSided:t.side===Qt}},"partOf"),i3=u(s=>{let e=[];return s.updateMatrixWorld(!0),s.traverse(t=>{let n=t;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).slice(0,1).forEach(r=>{let o=n.geometry.clone();o.applyMatrix4(n.matrixWorld),o.computeBoundingBox(),e.push(sw(o,r))})}),e},"partsOf"),s3=u(({animations:s,scene:e},t)=>{let n=new Map,i=new Map;return Yb.forEach(r=>{let o=t.clips[r];if(o===void 0)return;let a=s.find(c=>c.name===o);if(a===void 0)throw new Error(`${t.file}: no clip ${o}`);let l=a.tracks.find(({name:c})=>e.getObjectByName(Mt.parseTrackName(c).nodeName)===void 0);if(l!==void 0)throw new Error(`${t.file}: clip ${o} moves a node it can't name (${l.name})`);n.set(r,a),i.set(r,t.shots?.[r]??[])}),{clips:n,shots:i}},"clipsOf"),r3=u(s=>{if(s.byteLength<20)return!1;let e=new DataView(s),t=e.getUint32(12,!0);if(e.getUint32(0,!0)!==1179937895||e.getUint32(4,!0)!==2||e.getUint32(8,!0)!==s.byteLength||e.getUint32(16,!0)!==1313821514||20+t>s.byteLength)return!1;let n=[];for(let i=12;i<s.byteLength;){if(i+8>s.byteLength)return!1;let r=e.getUint32(i,!0);if(n.push(e.getUint32(i+4,!0)),i+=8+r,i>s.byteLength)return!1}if(n.length>2||n.length===2&&n[1]!==5130562)return!1;try{let i=JSON.parse(new TextDecoder().decode(new Uint8Array(s,20,t))),r=u(a=>Array.isArray(a)?a.some(r):typeof a=="object"&&a!==null&&(Object.prototype.hasOwnProperty.call(a,"uri")||Object.values(a).some(r)),"reads"),o=u(a=>a===void 0||Array.isArray(a),"listed");return typeof i=="object"&&i!==null&&!Array.isArray(i)&&o(i.buffers)&&o(i.images)&&i.extensionsUsed===void 0&&i.extensionsRequired===void 0&&!r(i)}catch{return!1}},"selfContained"),o3=u(s=>{let e=new ll,t=`blob:${s}/`;return e.setURLModifier(n=>{if(!n.startsWith(t)&&!/^data:/i.test(n))throw new Error(`${n}: a model reads nothing from elsewhere`);return n}),e},"modelManager"),nw=u((s,e)=>{try{let t=new URL(s,e);return t.origin===new URL(e).origin?t.href:null}catch{return null}},"onSite"),gp=u((s,e)=>`${s}#${e}`,"modelKey"),rw=u(async(s,e,t,n=()=>{})=>{let i=nw(s,location.href);if(i===null)throw new Error(`${s}: not on this site`);let r=await fetch(i,{redirect:"error",credentials:"omit"});if(!r.ok)throw new Error(`${s}: ${r.status}`);let o=ew(await r.json());if(typeof o=="string")throw new Error(`${s}: ${o}`);let a=new fp(o3(location.origin)),l=tw(o),c=new URL(".",i).href,h=u(async f=>{let d=nw(f,i);if(d===null||!d.startsWith(c))throw new Error(`${f}: not beside the manifest`);let m=await fetch(d,{redirect:"error",credentials:"omit"});if(!m.ok)throw new Error(`${d}: ${m.status}`);let g=await m.arrayBuffer();if(!r3(g))throw new Error(`${d}: not a glTF binary whole in itself`);return a.parseAsync(g,"")},"parsed");return await Promise.all([...l.keys()].map(async f=>{let d=o.models[f];try{let m=await h(d.file);e(f,{parts:i3(m.scene),scale:$b(o,f)},l.get(f)??[])}catch(m){t(f,m);return}if(d.rigged!==void 0)try{let m=await h(d.rigged.file),{clips:g,shots:_}=s3(m,d.rigged);n(f,{scene:m.scene,clips:g,shots:_,scale:$b(o,f)},l.get(f)??[])}catch(m){t(f,m)}})),o},"loadModels");var ow=.08,aw=u(s=>{let e=new Pe(s),t=.2126*e.r+.7152*e.g+.0722*e.b;if(t>=ow)return e;let n=(ow-t)/(1-t);return e.setRGB(e.r+(1-e.r)*n,e.g+(1-e.g)*n,e.b+(1-e.b)*n)},"ownerTint"),Zb=class Zb extends ln{constructor(t={}){let{tint:n,...i}=t;super(i);this.isTintedMaterial=!0;this.tint=new Pe(1,1,1);n!==void 0&&this.tint.copy(n)}onBeforeCompile(t){t.uniforms.tint={value:this.tint},t.fragmentShader=`uniform vec3 tint;
${t.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 texel = texture2D( map, vMapUv );
        diffuseColor.rgb *= texel.rgb * mix( tint, vec3( 1.0 ), texel.a );
      #endif`)}`}customProgramCacheKey(){return"tinted"}copy(t){return super.copy(t),this.tint.copy(t.tint),this}};u(Zb,"TintedMaterial");var Kb=Zb,lw=Kb;var gn=u((s,e,t=3)=>({shape:"foot",era:s,gear:e,squad:t}),"foot"),Eu=u((s,e,t=2)=>({shape:"mounted",era:s,gear:e,squad:t}),"mounted"),ri=u((s,e,t=!1,n=0,i=!1)=>({shape:"ship",era:s,hull:e,squad:1,large:t,guns:n,missiles:i}),"ship"),Tu=u((s,e=!1,t=!1)=>({shape:"aircraft",era:s,squad:1,large:e,stealth:t}),"aircraft"),Jb=u((s,e)=>({shape:"cart",era:s,cart:e,squad:1}),"cart"),cw={Warrior:gn("ancient","club"),Spearman:gn("ancient","spear"),Swordman:gn("ancient","sword"),Archer:gn("ancient","bow"),Horseman:Eu("ancient","spear"),Chariot:Jb("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:ri("ancient","oars"),Settlers:Jb("ancient","wagon"),Diplomat:gn("ancient","case",1),Caravan:Jb("ancient","goods"),Explorer:gn("ancient","pack",1),Pikeman:gn("medieval","pike"),Knight:Eu("medieval","lance"),Crusader:Eu("medieval","sword"),Fanatic:gn("medieval","sword"),Sail:ri("medieval","sail"),Musketman:gn("renaissance","musket"),Dragoon:Eu("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:ri("renaissance","sail",!0,1),Galleon:ri("renaissance","sail",!0),Rifleman:gn("industrial","rifle"),AlpineTrooper:{...gn("industrial","rifle"),dress:"snow"},Partisan:{...gn("industrial","rifle"),dress:"irregular"},Cavalry:Eu("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:gn("industrial","none",2),Ironclad:ri("industrial","steam",!1,1),Transport:ri("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:gn("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:gn("modern","rifle"),Paratrooper:{...gn("modern","rifle",1),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:ri("modern","steam",!1,1),Cruiser:ri("modern","steam",!0,2),MissileCruiser:ri("modern","steam",!0,1,!0),Battleship:ri("modern","steam",!0,3),Submarine:ri("modern","submarine"),Carrier:ri("modern","carrier",!0),Fighter:Tu("modern"),StealthFighter:Tu("modern",!1,!0),Bomber:Tu("modern",!0),StealthBomber:Tu("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Au=u((s,e=[])=>(Object.prototype.hasOwnProperty.call(cw,s)?cw[s]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?ri("industrial","steam"):e.includes("Air")?Tu("modern"):gn("ancient","spear")),"unitLook"),Tl=u(s=>s.shape==="aircraft"||s.shape==="helicopter"||s.shape==="missile","airborne");var ny=2,uw=.285,jb=.03,pw="#fff4b0",a3=.04,xp=.004,Qb=.018,hw=.01,dw=.022,fw=.03,mw=.03,bp=.002,l3="#4caf50",c3="#e0b030",u3="#d04030",h3=256,Ko,qi,Zo,Jo,or,jo,Qo,ea,Hr,ta,na,ar,Rl,Wr,ey,ty,oy=class oy{constructor(){z(this,Wr);z(this,Ko,new Map);z(this,qi,new Map);z(this,Zo,new Map);z(this,Jo,new Map);z(this,or,new Map);z(this,jo,new Map);z(this,Qo,new Map);z(this,ea,new Map);z(this,Hr,new Map);z(this,ta,null);z(this,na,new Map);z(this,ar,null);z(this,Rl,0);this.figureMaterial=new ln({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Qs(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,i=p(this,Ko).get(n);return i===void 0&&(i=new ln({color:new Pe(e),roughness:.75,metalness:.05,...t?{emissive:new Pe(e),emissiveIntensity:.6}:{}}),p(this,Ko).set(n,i)),i}addModel(e,t){let n=p(this,or).get(e);n!==void 0&&n!==t&&R(this,Wr,ey).call(this,e,n),p(this,or).set(e,t)}addRig(e,t){p(this,or).has(e)&&p(this,Hr).set(e,t)}rigOf(e){return p(this,Hr).get(e)??null}rigFigures(e,t,n,i=1){let r=p(this,Hr).get(e);if(r===void 0)return null;let o=t.shape==="ship",a=Tl(t),l=t.shape==="foot"?t.squad:1,c=r.scale*i,h=o?0:jb+(a?uw*i:0);return Su(l).map(([f,d])=>{let m=wl(r.scene),g=0;return m.name=sy,m.position.set(f*i,h,d*i),m.scale.setScalar(c),m.traverse(_=>{let x=_;x.isMesh&&(x.material=R(this,Wr,ty).call(this,e,g++,{...iw(x),geometry:x.geometry},n,!0),x.frustumCulled=!1)}),m})}modelFigures(e,t,n,i=1){let r=p(this,or).get(e);if(r===void 0)return null;let o=t.shape==="ship",a=Tl(t),l=t.shape==="foot"?t.squad:1,c=JSON.stringify([e,l,i,o,a]),h=JSON.stringify([e,l,i,o,a,n[0]]),f=p(this,jo).get(c),d=p(this,Qo).get(h);if(f===void 0){let m=r.scale*i,g=o?0:jb+(a?uw*i:0),_=Su(l).map(([v,S])=>new Ze().makeTranslation(v*i,g,S*i).multiply(new Ze().makeScale(m,m,m))),x=g;f={geometries:r.parts.map(v=>{let S=_.map(A=>v.geometry.clone().applyMatrix4(A)),M=(S.length===1?S[0].clone():op(S))??new Rt;return S.forEach(A=>A.dispose()),M.computeBoundingBox(),M.computeBoundingSphere(),x=Math.max(x,M.boundingBox?.max.y??g),M}),top:x},p(this,jo).set(c,f)}return d===void 0&&(d={meshes:f.geometries.map((m,g)=>[m,R(this,Wr,ty).call(this,e,g,r.parts[g],n)]),top:f.top},p(this,Qo).set(h,d)),d}body(e,t,n,i=1,r="whole",o=!1){let a=o&&e.shape==="ship"&&r!=="figures",l=JSON.stringify([e,t,n,i,r,a]),c=p(this,Jo).get(l);return c===void 0&&(c=HS(e,t,{fortified:n,scale:i,stand:jb,part:r,ripples:a}),p(this,Jo).set(l,c)),c}walls(){return p(this,ta)??B(this,ta,WS()),p(this,ta)}figure(e,t){let n=JSON.stringify([e,t]),i=p(this,Zo).get(n);return i===void 0&&(i=VS(e,t),p(this,Zo).set(n,i)),i}plain(e){let t=p(this,na).get(e);return t===void 0&&(t=new Dr({color:new Pe(e),sizeAttenuation:!1,depthTest:!1}),p(this,na).set(e,t)),t}pointer(){if(p(this,ar)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=pw,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Br(e);n.colorSpace=Nt,B(this,ar,new Dr({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return p(this,ar)}label(e,t,n){let i=`${e}\0${t}\0${n}`,r=p(this,qi).get(i);if(r===void 0){let o=document.createElement("canvas"),a=o.getContext("2d"),l="600 28px system-ui, sans-serif",c=40;a!==null&&(a.font=l,o.width=Math.ceil(a.measureText(e).width)+24,o.height=c,a.font=l,a.fillStyle=t,a.beginPath(),a.roundRect?.(0,0,o.width,c,10),a.fill(),a.fillStyle=n,a.textBaseline="middle",a.fillText(e,12,c/2+1));let h=new Br(o);h.colorSpace=Nt,r=new Dr({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),p(this,qi).set(i,r)}return r}get sweepDue(){return p(this,qi).size>Math.max(h3,p(this,Rl)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(i=>{i instanceof pt&&t.add(i.geometry),i instanceof Zs&&t.add(i.material)});p(this,qi).forEach((n,i)=>{t.has(n)||(n.map?.dispose(),n.dispose(),p(this,qi).delete(i))}),B(this,Rl,p(this,qi).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),p(this,Zo).forEach(e=>e.dispose()),p(this,Jo).forEach(e=>e.dispose()),p(this,ta)?.dispose(),B(this,ta,null),p(this,Jo).clear(),[...p(this,or)].forEach(([e,t])=>R(this,Wr,ey).call(this,e,t)),this.figureMaterial.dispose(),p(this,na).forEach(e=>e.dispose()),p(this,ar)?.map?.dispose(),p(this,ar)?.dispose(),p(this,na).clear(),B(this,ar,null),p(this,Ko).forEach(e=>e.dispose()),p(this,qi).forEach(e=>{e.map?.dispose(),e.dispose()}),p(this,Ko).clear(),p(this,qi).clear(),p(this,Zo).clear(),B(this,Rl,0)}};Ko=new WeakMap,qi=new WeakMap,Zo=new WeakMap,Jo=new WeakMap,or=new WeakMap,jo=new WeakMap,Qo=new WeakMap,ea=new WeakMap,Hr=new WeakMap,ta=new WeakMap,na=new WeakMap,ar=new WeakMap,Rl=new WeakMap,Wr=new WeakSet,ey=u(function(e,t){let n=u(i=>JSON.parse(i)[0]===e,"ours");p(this,Hr).get(e)?.scene.traverse(i=>{let r=i;r.isMesh&&(r.geometry.dispose(),[r.material].flat().forEach(o=>{o.map?.dispose(),o.dispose()}))}),p(this,Hr).delete(e),t.parts.forEach(({geometry:i,map:r})=>{i.dispose(),r?.dispose()}),p(this,or).delete(e),[...p(this,jo)].forEach(([i,{geometries:r}])=>{n(i)&&(r.forEach(o=>o.dispose()),p(this,jo).delete(i))}),[...p(this,Qo).keys()].filter(n).forEach(i=>p(this,Qo).delete(i)),[...p(this,ea)].forEach(([i,r])=>{n(i)&&(r.dispose(),p(this,ea).delete(i))})},"#letGoOfModel"),ty=u(function(e,t,n,i,r=!1){let o=JSON.stringify([e,t,n.tinted?i[0]:null,r]),a=p(this,ea).get(o);if(a===void 0){let l={map:n.map,roughness:.85,metalness:0};a=n.cutout?new ln({...l,alphaTest:.5,side:Qt}):new lw({...l,tint:n.tinted?aw(i[0]):new Pe(1,1,1),side:n.doubleSided?Qt:_i}),p(this,ea).set(o,a)}return a},"#modelMaterial"),u(oy,"MarkerKit");var _p=oy,gw=u(s=>{let{r:e,g:t,b:n}=new Pe(s);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Al=u((s,e,t,n)=>(s.position.set(e,t,n),s),"place"),d3=u(s=>[s.count>1?String(s.count):"",s.status??"",s.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),f3=3,p3=4,Ru=u((s,e,t,n,i=f3)=>{let r=new Zs(s);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=i,r.frustumCulled=!1,r},"badge"),xw=u((s,e,t)=>{let n=s.map?.image,i=n&&n.height>0&&n.width>0?n.width/n.height:1;return Ru(s,e*i,e,t)},"label"),yp=[0,.36,0],m3=u((s,e)=>{let t=new Xt;return e.walled&&t.add(new pt(s.walls(),s.figureMaterial)),e.unnamed!==!0&&t.add(Al(xw(s.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],gw(e.colours[0])),mw,0),...yp)),t},"drawCity"),g3=u((s,e,t=null,n=!1,i=t===null,r=!1)=>{let o=new Xt,{ring:a}=s.geometries,l=Au(e.type,e.kinds),c=n&&Tl(l),h=e.model===void 0?null:s.modelFigures(e.model,l,e.colours,e.size),f=h===null?s.body(l,e.colours,e.fortified,e.size,c?"figures":"whole",i):null,d=c?new Xt:o,m=h?.top??f?.boundingBox?.max.y??.3,g=t?.at??[0,m+a3,0],_=e.health!==null,x=(t?.over??0)+(_?xp+bp:0),b=x+hw+bp,v=d3(e),S=b+(v===""?0:dw+bp),M=h===null?new pt(f,s.figureMaterial):new Xt,A=r&&h!==null&&e.model!==void 0?s.rigFigures(e.model,l,e.colours,e.size):null;if(A!==null?A.forEach(E=>M.add(E)):h?.meshes.forEach(([E,y])=>M.add(new pt(E,y))),M.name=iy,M.rotation.y=e.facing,d.add(M),c||h!==null){let E=s.body(l,e.colours,e.fortified,e.size,"base",i);E.getAttribute("position")!==void 0&&o.add(new pt(E,s.figureMaterial))}if(c&&(d.name=ry,o.add(d)),e.health!==null){let E=Math.max(0,Math.min(1,e.health));if(d.add(Al(Ru(s.plain("#202020"),Qb,xp,t?.over??0),...g)),E>0){let y=Ru(s.plain(E>.5?l3:E>.25?c3:u3),Qb*E,xp*.6,(t?.over??0)+xp*.2);y.center.x=1/(2*E),d.add(Al(y,...g))}}if(d.add(Al(Ru(s.plain(e.colours[0]),Qb,hw,x),...g)),v!==""&&d.add(Al(xw(s.label(v,e.colours[0],gw(e.colours[0])),dw,b),...g)),e.active){let E=new pt(a,s.material(pw,!0));E.rotation.x=Math.PI/2,E.position.y=.01,o.add(E),d.add(Al(Ru(s.pointer(),fw,fw,S,p3),...g))}return o},"drawUnit"),Pu="unit",iy="figures",sy="rig figure",ry="aloft",ia=.26,bw=u((s,e,t=!1,n=!1)=>{let i=new Xt;if(e.city!==null&&i.add(m3(s,e.city)),e.unit!==null){let r=e.inCity??e.city!==null?ia:0,o=g3(s,e.unit,e.city===null?null:{at:[yp[0],yp[1],yp[2]-r],over:mw+bp},t,r===0,n);o.name=Pu,o.position.z=r,i.add(o)}return i},"drawMarker"),Cu=new WeakMap,vp=new WeakMap,x3=.5,Iu=u((s,e,t)=>{s.forEach(n=>n.traverse(i=>{if(!(i instanceof pt||i instanceof Zs))return;let r=Cu.get(i)??i.material,o=t.get(r);o===void 0&&(o=r.clone(),i instanceof Zs?o.transparent=!0:o.alphaHash=!0,t.set(r,o)),Cu.has(i)||(Cu.set(i,r),vp.set(i,i.castShadow)),i.material=o,i.castShadow=(vp.get(i)??!1)&&e>=x3})),t.forEach((n,i)=>{n.opacity=i.opacity*e})},"fade"),yw=u((s,e)=>{s.forEach(t=>t.traverse(n=>{let i=Cu.get(n);i===void 0||!(n instanceof pt||n instanceof Zs)||(n.material=i,n.castShadow=vp.get(n)??n.castShadow,Cu.delete(n),vp.delete(n))})),Cl(e)},"unfaded"),Cl=u(s=>{s.forEach(e=>e.dispose()),s.clear()},"unfade");var _w=new ou,b3=u((s,e,t)=>{let n=[],i=new Map;for(let[o,a]of s)a.forEach(l=>l.getObjectByName(Pu)?.traverseVisible(c=>{c instanceof pt&&(n.push(c),i.set(c,o))}));if(n.length===0)return null;_w.setFromCamera(new Ve(t[0],t[1]),e);let[r]=_w.intersectObjects(n,!1);return r===void 0?null:i.get(r.object)??null},"unitUnder"),vw=b3;var Xr=u(s=>s*Math.PI/180,"degrees"),ay=Xr(25),Mw=Xr(80),Sw=5,y3=90,_3=1.12,Pl=Xr(40),ly=Xr(45),v3={above:{yaw:0,pitch:Xr(80)},classic:{yaw:0,pitch:Xr(55)},isometric:{yaw:Xr(45),pitch:Xr(30)}};var ww=u(s=>({focus:s,...v3.classic,distance:24}),"defaultOrbit"),Mp=u((s,e,t)=>Math.min(t,Math.max(e,s)),"clamp"),Ew=u(s=>{let e=Math.PI*2;return(s%e+e)%e},"normaliseYaw"),ra=u(s=>({...s,yaw:Ew(s.yaw),pitch:Mp(s.pitch,ay,Mw),distance:Mp(s.distance,Sw,y3)}),"clampOrbit"),Il=u((s,e)=>ra({...s,distance:s.distance/_3**e}),"zoomed"),Sp=u(({yaw:s,pitch:e})=>{let t=Math.sin(s),n=Math.cos(s),i=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-i,-n*r],right:[n,0,t],up:[t*i,r,-n*i]}},"basis"),Ll=u((s,e)=>{let{forward:t}=Sp(s),[n,i]=s.focus;return[n-t[0]*s.distance,e-t[1]*s.distance,i-t[2]*s.distance]},"eye"),Nl=u((s,e,[t,n,i],r)=>{let{forward:o,right:a,up:l}=Sp(s),c=Ll(s,e),h=[t-c[0],n-c[1],i-c[2]],f=u(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(o),m=Math.tan(Pl/2);return d<=1e-6?null:[f(a)/(d*m*r),f(l)/(d*m)]},"toScreen"),cy=u((s,e,[t,n],i)=>{let{forward:r,right:o,up:a}=Sp(s),l=Math.tan(Pl/2);return{from:Ll(s,e),direction:[0,1,2].map(c=>(r[c]??0)+t*l*i*(o[c]??0)+n*l*(a[c]??0))}},"rayThrough"),sa=u((s,e,t,n,i=e)=>{let{from:r,direction:o}=cy(s,e,t,n);if(o[1]>-1e-6)return null;let a=(i-r[1])/o[1];return a<=0?null:[r[0]+o[0]*a,r[2]+o[2]*a]},"groundAt"),Tw=u((s,e,t,n,i)=>{let r=sa(s,e,t,i),o=sa(s,e,n,i);if(r!==null&&o!==null)return{...s,focus:[s.focus[0]+r[0]-o[0],s.focus[1]+r[1]-o[1]]};let a=(t[0]-n[0])*i,l=(t[1]-n[1])/Math.sin(s.pitch),c=s.distance*Math.tan(Pl/2),{right:h}=Sp(s),f=[Math.sin(s.yaw),-Math.cos(s.yaw)];return{...s,focus:[s.focus[0]+(a*h[0]+l*(f[0]??0))*c,s.focus[1]+(a*h[2]+l*(f[1]??0))*c]}},"panned"),Aw=u((s,e,t)=>{let n=u((o,a)=>(o%a+a)%a,"wrap"),[i,r]=s.focus;return{...s,yaw:Ew(s.yaw),focus:[n(i,e.u),e.v===null?Mp(r,0,t):n(r,e.v)]}},"settled"),Rw=u((s,e,t,n,i)=>{let r=u((l,c)=>c===null?l:l-c*Math.round(l/c),"short"),o=Math.PI*2,a=t*t*(3-2*t);return{focus:[s.focus[0]+r(e.focus[0]-s.focus[0],n.u)*a,s.focus[1]+r(e.focus[1]-s.focus[1],n.v)*a],yaw:s.yaw+(i??r(e.yaw-s.yaw,o))*a,pitch:s.pitch+(e.pitch-s.pitch)*a,distance:s.distance+(e.distance-s.distance)*a}},"between"),lr=u((s,e)=>{let t=e===void 0?1/0:Math.min(e.u,e.v??1/0)/2,n=t<Sw?1/0:t,i=Math.min(s*3.5,s+n);return{near:Math.min(s*1.2,(s+i)/2),far:i}},"sightFor"),Cw=u((s,e)=>{let t=Pl/2,n=u(i=>{let r=i/(s*Math.cos(t));return Math.atan2(r*Math.sin(t),r*Math.cos(t)-1)},"meeting");return Mp(ay+n(lr(s,e).far)-n(lr(s).far),ay,Mw)},"lowestPitch");var M3=new Pe("#3f8a8c"),S3=new Pe("#173a52"),w3=new Pe("#e8eeee"),Pw=`
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
`,E3=`
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
`,qr,Mi,oi,hy=class hy{constructor(e,t){z(this,qr);z(this,Mi);z(this,oi);B(this,qr,e),B(this,Mi,new Uint16Array(e.columns*e.rows*2));for(let i=0;i<p(this,Mi).length;i+=2)p(this,Mi)[i]=os.toHalfFloat(0),p(this,Mi)[i+1]=os.toHalfFloat(1);B(this,oi,new Or(p(this,Mi),e.columns,e.rows,fs,ni)),p(this,oi).wrapS=Gn,p(this,oi).wrapT=e.wrapsV?Gn:zn,p(this,oi).magFilter=zt,p(this,oi).minFilter=zt,p(this,oi).needsUpdate=!0;let n=new Ln({uniforms:Ho.merge([Re.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},shallow:{value:M3.clone()},deep:{value:S3.clone()},foam:{value:w3.clone()},sky:{value:t.clone()},sunDirection:{value:new H(.5,.7,.4).normalize()},sunColour:{value:new Pe("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Pw,fragmentShader:E3,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=p(this,oi),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new pt(new cs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:i,spacingV:r}=p(this,qr),o=Math.round(e.u/i),a=Math.round(e.v/r),l=e.positions.length/3;for(let c=0;c<l;c++){let h=o+Math.round((e.positions[c*3]??0)/i),f=a+Math.round((e.positions[c*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;p(this,Mi)[d]=os.toHalfFloat(e.positions[c*3+1]??0),p(this,Mi)[d+1]=os.toHalfFloat(e.unseen[c]??0)}}p(this,oi).needsUpdate=!0}height(e,t){return os.fromHalfFloat(p(this,Mi)[(t*p(this,qr).columns+e)*2]??0)}unseen(e,t){return os.fromHalfFloat(p(this,Mi)[(t*p(this,qr).columns+e)*2+1]??0)>.5}texture(){return p(this,oi)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,qr).wrapsV&&e}follow(e,t,n,i){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(i).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),p(this,oi).dispose()}};qr=new WeakMap,Mi=new WeakMap,oi=new WeakMap,u(hy,"Water");var uy=hy,Iw=uy,T3=`
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
`,A3=.18,Lu,dy=class dy{constructor(e,t){z(this,Lu);B(this,Lu,t.wrapsV);let n=new Ln({uniforms:Ho.merge([Re.fog,{ground:{value:null},cell:{value:new Ve},size:{value:new Ve},extent:{value:new Ve},wrapsV:{value:!1}}]),vertexShader:Pw,fragmentShader:T3,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new pt(new cs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=p(this,Lu)&&e}follow(e,t,n){this.mesh.position.set(e,A3,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};Lu=new WeakMap,u(dy,"Clouds");var wp=dy;var R3=.6,C3=.05,oa=64,Lw=.125,P3=`
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
`,I3=`
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
`,Nw=u(s=>{let e=Math.max(1,Math.ceil(Math.sqrt(s)));return[e,Math.max(1,Math.ceil(s/e))]},"atlasCells"),L3=u((s,e)=>{let[t]=Nw(s.length),n=oa*(1-2*Lw);return s.flatMap((i,r)=>{let o=e(i);if(o===null||o[0]<=0||o[1]<=0)return[];let a=n/Math.max(o[0],o[1]),l=o[0]*a,c=o[1]*a;return[{_:i,x:r%t*oa+(oa-l)/2,y:Math.floor(r/t)*oa+(oa-c)/2,width:l,height:c}]})},"atlasPlaces"),N3=u(s=>{let{naturalWidth:e,naturalHeight:t,width:n,height:i}=s;return[e??(typeof n=="number"?n:0),t??(typeof i=="number"?i:0)]},"imageSize"),Yr,ai,Nu,aa,Du,Ep,Dl,Dw,Uw,py=class py{constructor(e){z(this,Dl);z(this,Yr,null);z(this,ai,null);z(this,Nu,"");z(this,aa);z(this,Du,new WeakMap);z(this,Ep,1);B(this,aa,e),this.material=new Ln({uniforms:Ho.merge([Re.fog,{atlas:{value:null},lean:{value:1},lift:{value:C3},bias:{value:R3},cells:{value:[1,1]},pad:{value:Lw}}]),vertexShader:P3,fragmentShader:I3,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(p(this,Yr)?.dispose(),B(this,Yr,null),e===null||e.count===0)return null;R(this,Dl,Uw).call(this,e);let t=new iu,n=new cs(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Hn(e.anchors,3)),t.setAttribute("slot",new Hn(e.slots,2)),t.setAttribute("size",new Hn(e.sizes,1)),t.setAttribute("cell",new Hn(e.cells,1)),t.instanceCount=e.count,B(this,Yr,t),t}make(){let e=new pt(p(this,Yr)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){p(this,Yr)?.dispose(),p(this,ai)?.dispose(),this.material.dispose()}};Yr=new WeakMap,ai=new WeakMap,Nu=new WeakMap,aa=new WeakMap,Du=new WeakMap,Ep=new WeakMap,Dl=new WeakSet,Dw=u(function(e){if(e===null)return 0;let t=p(this,Du).get(e);return t===void 0&&(t=Ui(this,Ep)._++,p(this,Du).set(e,t)),t},"#imageId"),Uw=u(function(e){let t=e.names.map(a=>`${a}:${R(this,Dl,Dw).call(this,p(this,aa).call(this,a))}`).join(",");if(t===p(this,Nu)&&p(this,ai)!==null)return;let[n,i]=Nw(e.names.length),r=document.createElement("canvas"),o=r.getContext("2d");r.width=n*oa,r.height=i*oa,o!==null&&(o.imageSmoothingEnabled=!1,L3(e.names,a=>{let l=p(this,aa).call(this,a);return l===null?null:N3(l)}).forEach(({_:a,x:l,y:c,width:h,height:f})=>{let d=p(this,aa).call(this,a);d!==null&&o.drawImage(d,l,c,h,f)})),p(this,ai)?.dispose(),B(this,ai,new Br(r)),p(this,ai).colorSpace=Nt,p(this,ai).premultiplyAlpha=!0,p(this,ai).magFilter=Ht,p(this,ai).minFilter=vn,p(this,ai).generateMipmaps=!0,B(this,Nu,t),this.material.uniforms.atlas.value=p(this,ai),this.material.uniforms.cells.value=[n,i]},"#drawAtlas"),u(py,"YieldIcons");var fy=py,Ow=fy;var D3=["idle","move","work"],Fw=2,U3=.13,O3=u((s,e,t)=>{if(!(e>0))return 0;let n=Math.max(0,t);return D3.includes(s)?n%e:Math.min(n,e-1e-4)},"clipTime"),my=u((s,e,t,n,i)=>s.getObjectsByProperty("name",sy).forEach((r,o)=>{let a=t===null?void 0:e.clips.get(t),l=i.get(r)??{mixer:new ru(r),role:null},c=a===void 0?null:t;i.set(r,l),l.role!==c&&(l.mixer.stopAllAction(),l.role=c,a!==void 0&&l.mixer.clipAction(a).setLoop(Hf,1/0).play()),a!==void 0&&c!==null&&l.mixer.setTime(O3(c,a.duration,n+o*U3))}),"poseFigures");var gy=10466244,F3=14082796,B3=5984576,k3=16773336,Ap=u((s,e,t)=>{let n=u((i,r)=>{if(r===null)return[0];let o=[];for(let a=Math.floor((i-e)/r);a*r<=i+e;a++)o.push(a*r);return o},"along");return n(s[0],t.u).flatMap(i=>n(s[1],t.v).map(r=>[i,r]))},"copiesNear"),xy=u((s,e)=>Math.min(lr(s.distance,e).far,s.distance*2.2),"markerSight"),z3=u((s,e)=>()=>e?wl(s):s.clone(),"copyOf"),Tp=u(s=>s.traverse(e=>{e.isSkinnedMesh&&e.skeleton.dispose()}),"letGoOfSkeletons"),G3=u((s,e)=>{let{near:t,far:n}=lr(s.distance,e);return{near:t,far:n,land:Ap(s.focus,n,e),markers:Ap(s.focus,xy(s,e),e)}},"sightOf"),V3=u(s=>[new kn(new H(0,0,1),0),new kn(new H(0,0,-1),s)],"polesAt"),H3=u((s,[e,t],n,i,r)=>s.flatMap(([o,a])=>[[o,a],...r&&i!==null&&t>n?[[o,a-i]]:[],...r&&i!==null&&e<0?[[o,a+i]]:[]]),"overlayCopies"),Bw=2048,kw=Math.hypot(30,40,20),zw=u((s,{period:e,ground:t,yieldIcon:n})=>{let i=new Jf({antialias:!0,canvas:s}),r=new Fc,o=new Jt(Pl*180/Math.PI,1,.1,400),a=new Xt,{material:l,detail:c}=wS(e,t.rows*t.spacingV),h=new Oo(k3,2.6),f=new Map,d=new Map,m=new ln({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,_=V3(g),x=new Map,b=new Map,v=new WeakMap,S=new Map,M=new Kc(1,1),A=u(j=>new ln({color:new Pe(j),roughness:1,metalness:0,flatShading:!0}),"puffGrey"),E=[A("#d8d5cf"),A("#a9a59d")],y=new Map,w=new yi({color:new Pe("#dfe8e8"),side:Qt}),I=new Xt,P=new _p,D=new Xt,O=new Ow(n??(()=>null)),X=new Iw(t,new Pe(gy)),U=new wp(X.texture(),t),$=new Oc(gy,30,110),te=[[0,0]],k="0,0",Y=[[0,0]],W="0,0",J=!1,Q=null,de=!1;i.outputColorSpace=Nt,i.localClippingEnabled=!0,i.toneMapping=lu,i.shadowMap.enabled=!0,i.shadowMap.type=tf,r.background=new Pe(gy),r.fog=$,r.add(new Qc(F3,B3,.9)),r.add(a),r.add(I),r.add(D),r.add(X.mesh),r.add(U.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(Bw,Bw),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,r.add(h),r.add(h.target);let be=u((j,xe,oe=te)=>oe.map(([fe,Ce])=>{let Ie=j.make();return Ie.position.set(j.at[0]+fe,j.at[1],j.at[2]+Ce),xe.add(Ie),Ie.updateMatrixWorld(!0),Ie}),"copiesOf"),ee=u(j=>be(j,a,H3(te,j.span,g,e.v,J)),"overlayCopiesOf"),ge=u(j=>j.flatMap(xe=>{let oe=xe.getObjectByName(Pu);return oe===void 0?[]:[oe]}),"unitParts"),le=u(j=>j.drawn.forEach(xe=>{let oe=xe.getObjectByName(iy),fe=xe.getObjectByName(ry);oe!==void 0&&(oe.rotation.y=j.facing),fe!==void 0&&(fe.position.y=j.aloft)}),"pose"),pe=u(j=>{let xe=Lx(j.through,j.seed);j.drawn.forEach(oe=>oe.children.forEach((fe,Ce)=>{let Ie=xe[Ce];if(Ie===void 0){fe.visible=!1;return}fe.position.set(...Ie.at),fe.scale.setScalar(Math.max(Ie.size,1e-4)),fe.visible=Ie.size>0}))},"shapePuff"),he=u((j,xe=!1,oe=!1)=>{let fe=bw(P,j,xe,oe);return fe.traverse(Ce=>{Ce.castShadow=Ce instanceof pt}),fe},"markerOf"),Oe=u(()=>{P.sweepDue&&P.sweep([...x.values(),...b.values()].flatMap(({original:j})=>j===void 0?[]:[j]))},"sweep");return{render:u(()=>i.render(r,o),"render"),resize:u((j,xe,oe)=>{i.setPixelRatio(oe),i.setSize(j,xe,!1),o.aspect=xe>0?j/xe:1,o.updateProjectionMatrix()},"resize"),setChunk:u((j,xe,oe)=>{let fe=`${j},${xe}`,Ce=new Rt;Ce.setAttribute("position",new _t(oe.positions,3)),Ce.setAttribute("normal",new _t(oe.normals,3)),Ce.setAttribute("color",new _t(oe.colours,3)),Ce.setAttribute("surfacesA",new _t(oe.surfacesA,4,!0)),Ce.setAttribute("surfacesB",new _t(oe.surfacesB,4,!0)),Ce.setAttribute("shore",new _t(oe.shore,1,!0)),Ce.setIndex(new _t(oe.indices,1)),Ce.computeBoundingSphere();let Ie=f.get(fe);Ie!==void 0&&(Ie.drawn.forEach(We=>a.remove(We)),Ie.geometry.dispose());let qe={geometry:Ce,at:[oe.u,0,oe.v],make:u(()=>{let We=new pt(Ce,l);return We.castShadow=!0,We.receiveShadow=!0,We},"make"),drawn:[]};qe.drawn=be(qe,a),f.set(fe,qe),X.setChunk(oe)},"setChunk"),setOverlay:u((j,xe,oe)=>{let fe=`${j},${xe}`,Ce=d.get(fe);if(Ce!==void 0&&(Ce.drawn.forEach(mt=>a.remove(mt)),Ce.geometry.dispose(),d.delete(fe)),oe===null)return;let Ie=new Rt;Ie.setAttribute("position",new _t(oe.positions,3)),Ie.setAttribute("normal",new _t(oe.normals,3)),Ie.setAttribute("color",new _t(oe.colours,3)),Ie.computeBoundingSphere(),Ie.computeBoundingBox();let qe=Ie.boundingBox,We={geometry:Ie,span:[oe.v+(qe?.min.z??0),oe.v+(qe?.max.z??0)],at:[oe.u,0,oe.v],make:u(()=>{let mt=new pt(Ie,m);return mt.castShadow=!0,mt.receiveShadow=!0,mt},"make"),drawn:[]};We.drawn=ee(We),d.set(fe,We)},"setOverlay"),unitAt:u(j=>(o.updateMatrixWorld(),vw([...x].map(([xe,{drawn:oe}])=>[xe,oe]),o,j)),"unitAt"),setMarker:u((j,xe,oe)=>{let fe=x.get(j);if(fe?.drawn.forEach(qe=>I.remove(qe)),fe?.faded!==void 0&&Cl(fe.faded),x.delete(j),oe===null)return;let Ce=he(oe),Ie={at:xe,make:u(()=>Ce.clone(),"make"),drawn:[],original:Ce};Ie.drawn=be(Ie,I,Y),x.set(j,Ie),Oe()},"setMarker"),setWalker:u((j,xe)=>{let oe=b.get(j);if(oe?.drawn.forEach(We=>{I.remove(We),Tp(We)}),oe?.original!==void 0&&Tp(oe.original),oe!==void 0&&Cl(oe.faded),b.delete(j),xe===null)return;let fe=xe.unit?.model,Ce=fe===void 0?null:P.rigOf(fe),Ie=he(xe,!0,Ce!==null),qe={at:oe?.at??[0,0,0],facing:oe?.facing??xe.unit?.facing??0,aloft:oe?.aloft??0,opacity:1,faded:new Map,make:z3(Ie,Ce!==null),drawn:[],original:Ie,rig:Ce,posed:null};qe.drawn=be(qe,I,Y),le(qe),b.set(j,qe),Oe()},"setWalker"),placeWalker:u((j,xe,oe,fe=0)=>{let Ce=b.get(j);Ce!==void 0&&(Ce.at=xe,Ce.facing=oe,Ce.aloft=fe,Ce.drawn.forEach((Ie,qe)=>{let[We,mt]=Y[qe]??[0,0];Ie.position.set(xe[0]+We,xe[1],xe[2]+mt)}),le(Ce))},"placeWalker"),poseWalker:u((j,xe,oe)=>{let fe=b.get(j);fe===void 0||fe.rig===null||(fe.posed={role:xe,seconds:oe},fe.drawn.forEach(Ce=>my(Ce,fe.rig,xe,oe,v)))},"poseWalker"),fadeMarker:u((j,xe)=>{let oe=x.get(j),fe=Math.min(1,Math.max(0,xe));if(!(oe===void 0||fe===(oe.opacity??1))){if(oe.opacity=fe,oe.faded??=new Map,fe===1){yw(ge(oe.drawn),oe.faded);return}Iu(ge(oe.drawn),fe,oe.faded)}},"fadeMarker"),wake:u((j,xe,oe=[])=>{let fe=y.get(j);if(xe===null){fe?.drawn.forEach(qe=>I.remove(qe)),fe?.shape.dispose(),y.delete(j);return}let Ce=new Rt;Ce.setAttribute("position",new _t(Float32Array.from(oe),3));let Ie=fe??{at:xe,shape:Ce,make:u(()=>new pt(Ie.shape,w),"make"),drawn:[]};fe===void 0?(Ie.drawn=be(Ie,I,Y),y.set(j,Ie)):(fe.shape.dispose(),fe.shape=Ce,fe.drawn.forEach(qe=>{qe.geometry=Ce})),Ie.at=xe,Ie.drawn.forEach((qe,We)=>{let[mt,bt]=Y[We]??[0,0];qe.position.set(xe[0]+mt,xe[1],xe[2]+bt)})},"wake"),puff:u((j,xe,oe=0)=>{let fe=S.get(j);if(xe===null){fe?.drawn.forEach(qe=>I.remove(qe)),S.delete(j);return}let Ce=Number(j.replace(/\D/g,""))||0,Ie=fe??{at:xe,through:oe,seed:Ce,make:u(()=>{let qe=new Xt;return Lx(0,Ce).forEach(({shade:We})=>qe.add(new pt(M,E[We]))),qe},"make"),drawn:[]};fe===void 0&&(Ie.drawn=be(Ie,I,Y),S.set(j,Ie)),Ie.at=xe,Ie.through=oe,Ie.drawn.forEach((qe,We)=>{let[mt,bt]=Y[We]??[0,0];qe.position.set(xe[0]+mt,xe[1],xe[2]+bt)}),pe(Ie)},"puff"),fadeWalker:u((j,xe)=>{let oe=b.get(j),fe=Math.min(1,Math.max(0,xe));oe===void 0||fe===oe.opacity||(oe.opacity=fe,Iu(oe.drawn,fe,oe.faded))},"fadeWalker"),setYields:u(j=>{Q?.drawn.forEach(xe=>D.remove(xe)),Q=null,O.set(j)!==null&&(Q={at:[0,0,0],make:u(()=>O.make(),"make"),drawn:[]},Q.drawn=be(Q,D))},"setYields"),view:u((j,xe,oe=e)=>{let[fe,Ce]=j.focus,[Ie,qe,We]=Ll(j,xe),mt=G3(j,oe),{near:bt,far:Et}=mt;o.position.set(Ie,qe,We),o.lookAt(fe,xe,Ce),o.far=Et*1.2,o.near=Math.max(.1,j.distance*.02),o.updateProjectionMatrix(),$.near=bt,$.far=Et;let Ct=j.distance*2.2,nt=h.shadow.camera;h.position.set(fe+30,xe+40,Ce+20),h.target.position.set(fe,xe,Ce),nt.left=-Ct,nt.right=Ct,nt.top=Ct,nt.bottom=-Ct,nt.near=Math.max(.5,kw-Ct*1.6),nt.far=kw+Ct*1.6,nt.updateProjectionMatrix(),X.follow(fe,Ce,Et*2.2,h.position.clone().sub(h.target.position)),U.follow(fe,Ce,Et*2.2),X.pastThePoles(oe.v!==null),U.pastThePoles(oe.v!==null),m.clippingPlanes=oe.v===null?_:null,J=oe.v===null;let V=mt.land,Ot=`${V.join(";")}${J?" stopped":""}`,ht=mt.markers,it=ht.join(";");Ot!==k&&(te=V,k=Ot,f.forEach(ue=>{ue.drawn.forEach(st=>a.remove(st)),ue.drawn=be(ue,a)}),d.forEach(ue=>{ue.drawn.forEach(st=>a.remove(st)),ue.drawn=ee(ue)}),Q!==null&&(Q.drawn.forEach(ue=>D.remove(ue)),Q.drawn=be(Q,D))),O.lean(j.pitch),it!==W&&(Y=ht,W=it,[...x.values(),...b.values(),...S.values(),...y.values()].forEach(ue=>{ue.drawn.forEach(st=>{I.remove(st),Tp(st)}),ue.drawn=be(ue,I,Y)}),b.forEach(le),b.forEach(({drawn:ue,rig:st,posed:ze})=>{st!==null&&ze!==null&&ue.forEach(Ke=>my(Ke,st,ze.role,ze.seconds,v))}),S.forEach(pe),b.forEach(ue=>{ue.opacity<1&&Iu(ue.drawn,ue.opacity,ue.faded)}),x.forEach(ue=>{ue.faded!==void 0&&(ue.opacity??1)<1&&Iu(ge(ue.drawn),ue.opacity??1,ue.faded)}))},"view"),loadModels:u(async(j,xe)=>{await rw(j,(oe,fe,Ce)=>{if(de){fe.parts.forEach(({geometry:qe,map:We})=>{qe.dispose(),We?.dispose()});return}let Ie=gp(j,oe);P.addModel(Ie,fe),xe(Ie,Ce)},(oe,fe)=>console.warn(`The 3D map's model ${gp(j,oe)}:`,fe),(oe,fe)=>{de||P.addRig(gp(j,oe),fe)})},"loadModels"),stats:u(()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries}),"stats"),dispose:u(()=>{de=!0,f.forEach(({geometry:j})=>j.dispose()),f.clear(),d.forEach(({geometry:j})=>j.dispose()),d.clear(),m.dispose(),x.forEach(({faded:j})=>j!==void 0&&Cl(j)),x.clear(),b.forEach(({faded:j,drawn:xe,original:oe})=>{Cl(j),[...xe,...oe===void 0?[]:[oe]].forEach(Tp)}),b.clear(),S.clear(),y.forEach(({shape:j})=>j.dispose()),y.clear(),w.dispose(),M.dispose(),E.forEach(j=>j.dispose()),P.dispose(),O.dispose(),X.dispose(),U.dispose(),l.dispose(),c.dispose(),i.dispose()},"dispose")}},"createStage");var cr=1/Math.sqrt(3),Gw=1.5*cr,W3=u((s,e)=>{let t=-s-e,n=Math.round(s),i=Math.round(e),r=Math.round(t),o=Math.abs(n-s),a=Math.abs(i-e),l=Math.abs(r-t);return o>a&&o>l?n=-i-r:a>l&&(i=-n-r),[n,i]},"roundAxial"),X3=u(({height:s,width:e,wrapsY:t})=>{let n=u((i,r)=>[i+.5+(r&1)*.5,cr+r*Gw],"centre");return{topologyId:"hex-odd-r",centre:n,outline:u((i,r)=>{let[o,a]=n(i,r);return[[o,a-cr],[o+.5,a-cr/2],[o+.5,a+cr/2],[o,a+cr],[o-.5,a+cr/2],[o-.5,a-cr/2]]},"outline"),tileAt:u((i,r)=>{let o=i-.5,a=r-cr,[l,c]=W3(o-a*Math.sqrt(3)/3,a*2*Math.sqrt(3)/3);return[l+(c-(c&1))/2,c]},"tileAt"),period:u(()=>({u:e,v:t?s*Gw:null}),"period")}},"hexOddRLayout"),Vw=X3;var q3=u(({height:s,width:e,wrapsY:t})=>({topologyId:"square",centre:u((n,i)=>[n+.5,i+.5],"centre"),outline:u((n,i)=>[[n,i],[n+1,i],[n+1,i+1],[n,i+1]],"outline"),tileAt:u((n,i)=>[Math.floor(n),Math.floor(i)],"tileAt"),period:u(()=>({u:e,v:t?s:null}),"period")}),"squareLayout"),Hw=q3;var _s=Math.SQRT2/2,Y3=u(({height:s,width:e,wrapsY:t})=>{let n=u((i,r)=>[(2*i+(r&1)+1)*_s,(r+1)*_s],"centre");return{topologyId:"staggered-iso",centre:n,outline:u((i,r)=>{let[o,a]=n(i,r);return[[o,a-_s],[o+_s,a],[o,a+_s],[o-_s,a]]},"outline"),tileAt:u((i,r)=>{let o=i/_s,a=r/_s,l=Math.floor((o+a)/2-1+.5),c=Math.floor((a-o)/2+.5),h=l+c;return[Math.floor((l-c)/2),h]},"tileAt"),period:u(()=>({u:e*2*_s,v:t?s*_s:null}),"period")}},"staggeredIsoLayout"),Ww=Y3;var Xw={square:Hw,"staggered-iso":Ww,"hex-odd-r":Vw},$3=u(s=>{if(!Object.prototype.hasOwnProperty.call(Xw,s.topologyId))throw new Error(`No ground layout for the ${s.topologyId} grid.`);if(s.wrapsY&&s.topologyId!=="square"&&s.height%2!==0)throw new Error(`The ${s.topologyId} grid can't wrap over the poles with an odd number of rows (${s.height}).`);return Xw[s.topologyId](s)},"groundLayoutFor"),qw=$3;var Uu=u(s=>{let e=s/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Rp=.65,by=u(s=>{let e=u(t=>{let n=parseInt(s.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),ur=.22,Cp=.12,yy={low:.2,high:.5},Yw=u((s,e,t,n,i,r,o,a,l)=>{let c=r-t,h=o-n,f=c*c+h*h,d=f===0?0:Math.max(0,Math.min(1,((s-t)*c+(e-n)*h)/f)),m=Uu(Math.hypot(s-t-c*d,e-n-h*d)),g=1-d;return m===0?-1/0:m*m*(i+(a-i)*(1-g*g*g)+l)},"halfRidge"),Ou=u((s,e,t,n)=>{let i=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296},"chance"),K3=u((s,e,t)=>({u:(Ou(s,e,t,1)*2-1)*ur,v:(Ou(s,e,t,2)*2-1)*ur,scale:.75+Ou(s,e,t,3)*.5}),"peakOf"),Z3=u(({layout:s,ranges:e=!0,seed:t=1,source:n})=>{let{width:i,height:r,wrapsY:o}=n,a=s.period(),l=ii([bs({cell:.7,period:a,seed:t}),bs({cell:.35,period:a,seed:t+1}),bs({cell:.17,period:a,seed:t+2})]),c=ii([bs({cell:.45,period:a,seed:t+3}),bs({cell:.22,period:a,seed:t+4})]),h=u((k,Y)=>1-2*Math.abs(c(k,Y)),"ridged"),f=bs({cell:.8,period:a,seed:t+5}),d=bs({cell:.8,period:a,seed:t+6}),m={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],_=[],x=[],b=[],v=[],S=u((k,Y)=>{let W=(k%i+i)%i;return!o&&(Y<0||Y>=r)?null:(Y%r+r)%r*i+W},"index"),M=u(k=>{let Y=new Array(i*r).fill(1/0),W=[];k.forEach((J,Q)=>{J&&(Y[Q]=0,W.push([Q%i,Math.floor(Q/i)]))});for(let[J,Q]of W){let de=Y[Q*i+J]??1/0;de>=xs.reach||n.neighbours(J,Q).forEach(([be,ee])=>{let ge=ee*i+be;(Y[ge]??1/0)>de+1&&(Y[ge]=de+1,W.push([be,ee]))})}return Y},"distancesFromLand"),A=u((k,Y)=>{let W=n.terrainAt(k,Y);return`${W}${W!=="Unknown"&&n.waterAt(k,Y)?" water":""}`},"readAs"),E=u(k=>{if(k!==void 0&&_.length>0&&k.every(([le,pe])=>{let he=S(le,pe);return he===null||_[he]===A(le,pe)}))return[];let Y=[],W=[],J=[];for(let le=0;le<r;le++)for(let pe=0;pe<i;pe++){let he=n.terrainAt(pe,le);Y.push(he),W.push(he!=="Unknown"&&n.waterAt(pe,le)),J.push(Wo(he))}let Q=M(Y.map((le,pe)=>le!=="Unknown"&&!W[pe])),de=Y.map((le,pe)=>`${le}${W[pe]?" water":""}`),be=[];de.forEach((le,pe)=>{_[pe]!==le&&be.push([pe%i,Math.floor(pe/i)])}),_=de,g=J.map((le,pe)=>{let he=le===np,Oe=pe%i,tt=Math.floor(pe/i),j=K3(Oe,tt,t);if(!W[pe])return{relief:le.relief,colour:by(le.colour),surface:qn.indexOf(le.surface),water:!1,unknown:he,peak:j};let xe=Math.min(Q[pe]??1/0,xs.reach),oe=xs.shore+(xs.deep-xs.shore)*Math.max(0,xe-1)/Math.max(1,xs.reach-1);return{relief:{...le.relief,base:oe},colour:by(le.colour),surface:qn.indexOf("sand"),water:!0,unknown:he,peak:j}});let ee=v,ge=new Map(be.map(([le,pe])=>[`${le},${pe}`,[le,pe]]));return v=g.map(({relief:le,unknown:pe},he)=>!pe&&!W[he]&&le.shape==="peaked"),be.some(([le,pe])=>{let he=pe*i+le;return v[he]===!0||ee[he]===!0})&&([x,b]=X()),be.forEach(([le,pe])=>{let he=pe*i+le;v[he]!==!0&&ee[he]!==!0||n.neighbours(le,pe).forEach(([Oe,tt])=>{let j=S(Oe,tt);j!==null&&v[j]===!0&&ge.set(`${Oe},${tt}`,[Oe,tt])})}),[...ge.values()]},"refresh"),y=u(k=>{let[Y,W]=s.centre(0,k);return Math.max(...s.outline(0,k).map(([J,Q])=>Math.hypot(J-Y,Q-W)))},"cornerOf"),w=u((k,Y)=>{let[W,J]=s.centre(0,k),Q=[];for(let de=-8;de<=8;de++)for(let be=-6;be<=6;be++){let[ee,ge]=s.centre(be,k+de);Math.hypot(ee-W,ge-J)<Y+1e-9&&Q.push([be,de])}return Q},"offsetsWithin"),I=u((k,Y,W,J)=>{if(i>=6&&(!o||r>=6)){let le=u((Oe,tt)=>{let j=(Oe%tt+tt)%tt;return j*2<tt?j:j-tt},"nearest"),pe=le(W-k,i),he=o?le(J-Y,r):J-Y;return pe===0&&he===0?[]:[[pe,he]]}let Q=u((le,pe)=>{let he=(le%pe+pe)%pe;return he===0?[0]:[he,he-pe]},"copies"),[de,be]=s.centre(k,Y),ee=Q(W-k,i).flatMap(le=>(o?Q(J-Y,r):[J-Y]).flatMap(pe=>{if(le===0&&pe===0)return[];let[he,Oe]=s.centre(k+le,Y+pe);return[[le,pe,Math.hypot(he-de,Oe-be)]]})),ge=Math.min(...ee.map(([,,le])=>le));return ee.filter(([,,le])=>le<=ge+1e-9).map(([le,pe])=>[le,pe])},"stepsTo"),P=Math.max(...[0,1].flatMap(k=>{let[Y,W]=s.centre(0,k);return n.neighbours(0,k).flatMap(([J,Q])=>I(0,k,J,Q).map(([de,be])=>{let[ee,ge]=s.centre(de,k+be);return Math.hypot(ee-Y,ge-W)}))}),1),D=[0,1].map(k=>{let[Y,W]=s.centre(0,k);return w(k,P+ur*Math.SQRT2+Cp+1.2+Math.max(y(0),y(1))).flatMap(([J,Q])=>{let[de,be]=s.centre(J,k+Q);return[J,Q,de-Y,be-W]})}),O=u((k,Y,W,J,Q,de)=>{let be=Q-W,ee=de-J,ge=be*be+ee*ee,le=ge===0?0:Math.max(0,Math.min(1,((k-W)*be+(Y-J)*ee)/ge));return Math.hypot(k-W-be*le,Y-J-ee*le)},"toSegment"),X=u(()=>{let k=g.map(()=>[]),Y=g.map(()=>[]),W=Math.max(y(0),y(1));return e?(g.forEach((J,Q)=>{if(v[Q]!==!0)return;let de=Q%i,be=Math.floor(Q/i),[ee,ge]=s.centre(de,be),le=new Map;n.neighbours(de,be).forEach(([pe,he])=>{let Oe=S(pe,he);Oe!==null&&v[Oe]===!0&&I(de,be,pe,he).forEach(([tt,j])=>le.set(`${tt},${j}`,[tt,j,Oe]))}),le.forEach(([pe,he,Oe])=>{let tt=g[Oe];if(tt===void 0||he<0||he===0&&pe<0)return;let[j,xe]=s.centre(de+pe,be+he),{peak:oe,relief:fe}=J,{peak:Ce,relief:Ie}=tt,qe=oe.u,We=oe.v,mt=j-ee+Ce.u,bt=xe-ge+Ce.v,Et=fe.base*Rp*oe.scale,Ct=Ie.base*Rp*Ce.scale,nt=Math.hypot(mt-qe,bt-We)||1,V=16+(he+2)*5+(pe+2),Ot=(Ou(de,be,t,V)*2-1)*Cp,ht=yy.low+(yy.high-yy.low)*Ou(de,be,t,V+32),it=(qe+mt)/2-(bt-We)/nt*Ot,ue=(We+bt)/2+(mt-qe)/nt*Ot,st=Math.max(Math.hypot(qe-it,We-ue),Math.hypot(mt-it,bt-ue))+1.2,ze={au:qe,av:We,ah:Et,mu:it,mv:ue,mh:ht*Math.min(Et,Ct),bu:mt,bv:bt,bh:Ct,roughness:(fe.roughness+Ie.roughness)/2,cu:it,cv:ue,reach:st*st},Ke=(Math.sqrt(ze.reach)+W)**2,N=D[be&1]??[];for(let T=0;T<N.length;T+=4){let q=N[T+2],me=N[T+3];if((q-it)**2+(me-ue)**2>=Ke||Math.min(O(q,me,qe,We,it,ue),O(q,me,it,ue,mt,bt))>=1.2+W)continue;let re=S(de+N[T],be+N[T+1]);re!==null&&(k[re]?.push(ze),Y[re]?.push(q,me))}})}),[k,Y]):[k,Y]},"ranges"),U=u(k=>{let[Y,W]=s.centre(0,k),J=Math.max(...s.outline(0,k).map(([de,be])=>Math.hypot(de-Y,be-W))),Q=[];for(let de=-6;de<=6;de++)for(let be=-4;be<=4;be++){let[ee,ge]=s.centre(be,k+de);Math.hypot(ee-Y,ge-W)<1.2+J+ur*Math.SQRT2+1e-9&&Q.push([be,de])}return Q},"offsetsFor"),$=[U(0),U(1)],te=u((k,Y)=>{let[W,J]=s.tileAt(k,Y),Q=S(W,J),de=Q===null?null:g[Q]??null;if(de===null||de.unknown)return{height:0,colour:by(np.colour),surfaces:qn.map(()=>0),shore:0,unseen:!0};let be=null,ee=null,ge=u(Et=>Et==="rolling"?be??=l(k,Y):ee??=h(k,Y),"noiseHere"),le=0,pe=0,he=0,Oe=0,tt=qn.map(()=>0),j=0,xe=0,oe=0,fe=0,Ce=0,Ie=k+ur*f(k,Y),qe=Y+ur*d(k,Y);($[J&1]??[]).forEach(([Et,Ct])=>{let nt=W+Et,V=J+Ct,Ot=S(nt,V);if(Ot===null)return;let ht=g[Ot];if(ht===void 0)return;let[it,ue]=s.centre(nt,V),{relief:st,colour:ze,peak:Ke,surface:N}=ht,T=Uu(Math.hypot(k-it,Y-ue)),q=st.shape==="peaked"?Uu(Math.hypot(k-it-Ke.u,Y-ue-Ke.v)):0,me=Uu(Math.hypot(Ie-it,qe-ue))**3;if(T>0){let re=m[st.shape],ve=re===null?0:st.roughness*ge(re);st.shape==="peaked"?pe+=T*(st.base*(1-Rp)+ve*.5):pe+=T*(st.base+ve),le+=T}if(q>0){let re=st.roughness*ge("ridged");he+=q*q*(st.base*Rp*Ke.scale+re*.5)}Oe+=me,ht.unknown||(tt[N]=(tt[N]??0)+me,j+=me,xe+=ht.water?me:0),oe+=me*ze[0],fe+=me*ze[1],Ce+=me*ze[2]});let We=Q===null?[]:x[Q]??[],mt=Q===null?[]:b[Q]??[],bt=he;if(We.length>0){let[Et,Ct]=s.centre(W,J);We.forEach((nt,V)=>{let Ot=k-Et+(mt[V*2]??0),ht=Y-Ct+(mt[V*2+1]??0);if((Ot-nt.cu)**2+(ht-nt.cv)**2>=nt.reach)return;let it=nt.roughness*ge("ridged")*.5;bt=Math.max(bt,Yw(Ot,ht,nt.au,nt.av,nt.ah,nt.mu,nt.mv,nt.mh,it),Yw(Ot,ht,nt.bu,nt.bv,nt.bh,nt.mu,nt.mv,nt.mh,it))})}return{height:(le>0?pe/le:0)+bt,colour:Oe>0?[oe/Oe,fe/Oe,Ce/Oe]:de.colour,surfaces:j>0?tt.map(Et=>Et/j):qn.map((Et,Ct)=>Ct===de.surface?1:0),shore:j>0?xe/j:de.water?1:0,unseen:!1}},"sample");return E(),{sample:te,height:u((k,Y)=>te(k,Y).height,"height"),refresh:E}},"createRelief"),$w=Z3;var Kw=u((s,e,{size:t=16,perUnit:n=8}={})=>{let{u:i,v:r}=s.period(),o=r??Math.max(...s.outline(0,e-1).map(([,f])=>f),...s.outline(1,e-1).map(([,f])=>f)),a=Math.max(1,Math.round(i/t)),l=Math.max(1,Math.round(o/t)),c=Math.max(2,Math.round(i/a*n)),h=Math.max(2,Math.round(o/l*n));return{chunksU:a,chunksV:l,stepsU:c,stepsV:h,spacingU:i/a/c,spacingV:o/l/h}},"chunkGrid"),Zw=u((s,e,t,n)=>{let{stepsU:i,stepsV:r,spacingU:o,spacingV:a}=s,l=t*i,c=n*r,h=u((I,P)=>[I*o,P*a],"at"),f=i+3,d=new Float64Array(f*(r+3)),m=(i+1)*(r+1),g=new Float32Array(m*3),_=new Uint8Array(m*4),x=new Uint8Array(m*4),b=new Uint8Array(m),v=new Float32Array(m);for(let I=-1;I<=r+1;I++)for(let P=-1;P<=i+1;P++){let D=e.sample(...h(l+P,c+I)),{height:O,colour:X}=D;if(d[(I+1)*f+(P+1)]=O,P>=0&&P<=i&&I>=0&&I<=r){let U=I*(i+1)+P;g.set(X,U*3),D.surfaces.forEach(($,te)=>{(te<4?_:x)[U*4+te%4]=Math.round($*255)}),b[U]=Math.round(D.shore*255),v[U]=D.unseen?1:0}}let S=u((I,P)=>d[(P+1)*f+(I+1)]??0,"height"),M=new Float32Array(m*3),A=new Float32Array(m*3),[E,y]=h(l,c);for(let I=0;I<=r;I++)for(let P=0;P<=i;P++){let D=I*(i+1)+P,[O,X]=h(l+P,c+I),U=(S(P+1,I)-S(P-1,I))/(2*o),$=(S(P,I+1)-S(P,I-1))/(2*a),te=Math.hypot(U,1,$);M[D*3]=O-E,M[D*3+1]=S(P,I),M[D*3+2]=X-y,A[D*3]=-U/te,A[D*3+1]=1/te,A[D*3+2]=-$/te}let w=new Uint32Array(i*r*6);for(let I=0;I<r;I++)for(let P=0;P<i;P++){let D=I*(i+1)+P,O=D+1,X=D+i+1,U=X+1,$=(I*i+P)*6;w.set([D,X,O,O,X,U],$)}return{u:E,v:y,positions:M,normals:A,colours:g,surfacesA:_,surfacesB:x,shore:b,unseen:v,indices:w}},"buildChunk"),_y=u((s,e,t,n)=>{let i=s.stepsU*s.spacingU,r=s.stepsV*s.spacingV,o=e.period().v!==null,a=new Set;return t.forEach(([l,c])=>{let[h,f]=e.centre(l,c);for(let d=Math.floor((h-n)/i);d<=Math.floor((h+n)/i);d++)for(let m=Math.floor((f-n)/r);m<=Math.floor((f+n)/r);m++){if(!o&&(m<0||m>=s.chunksV))continue;let g=(d%s.chunksU+s.chunksU)%s.chunksU,_=o?(m%s.chunksV+s.chunksV)%s.chunksV:m;a.add(`${g},${_}`)}}),[...a].map(l=>l.split(",").map(Number))},"chunksNear");var li=u((s,e,t,n,i)=>({kind:s,count:e,size:t,colour:n,detail:i}),"plant"),Jw={Forest:{plants:[li("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[li("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),li("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[li("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),li("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[li("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[li("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[li("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[li("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),li("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[li("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[li("rock",2,[.7,1.1],"#a8936a","#a8936a"),li("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Ol=u(s=>Object.prototype.hasOwnProperty.call(Jw,s)?Jw[s]:null,"growthOf");var jw=["Ocean"],J3=["Mountains"],j3=["Mine","Fortress","Airbase"],Q3=["River"],Tn=u((s,e)=>(s.improvements??[]).some(({_:t})=>t===e),"has"),eL=["Irrigation","Farmland","Fortress","Airbase"],Qw=u(s=>s.city||eL.some(e=>Tn(s,e))?null:Ol(s.terrain?._??"Unknown")?.canopy??null,"woodsOf"),tL=u((s,e)=>{if(s.city){let d=s.city;return{road:null,railroad:null,irrigation:null,mine:!1,fortress:!1,airbase:!1,pollution:!1,specials:[],hut:!1,terrain:s.terrain?._??"Unknown",vegetation:!1,woods:[],paths:[],city:LS(Bx(String(d.id??d.name??"")),d.growth?.size??1,e.filter(({tile:m})=>Tn(m,"Road")&&(Tn(s,"Road")||Tn(m,"Railroad"))).map(({offset:m})=>m),e.filter(({tile:m})=>jw.includes(m.terrain?._??"")).map(({offset:m})=>m)),suburbs:[],beside:[]}}let t=Tn(s,"Road"),n=Tn(s,"Railroad"),i=t?e.filter(d=>Tn(d.tile,"Road")).map(({offset:d})=>d):[],r=t?e.filter(d=>!!d.tile.city||Tn(d.tile,"Railroad")).map(({offset:d})=>d):[],o=u((d,m)=>d[0]===m[0]&&d[1]===m[1],"same"),a=i.length===0&&r.length===0,l={road:t?{joins:i.filter(d=>!n||!r.some(m=>o(m,d))),alone:a&&!n}:null,railroad:t&&n?{joins:r,alone:a}:null,irrigation:Tn(s,"Farmland")?"farmland":Tn(s,"Irrigation")?"irrigation":null,mine:Tn(s,"Mine"),fortress:Tn(s,"Fortress"),airbase:Tn(s,"Airbase"),pollution:Tn(s,"Pollution"),specials:(s.terrain?.features??[]).map(({_:d})=>d).filter(d=>!Q3.includes(d)).map(d=>[s.terrain._,d]),hut:s.goodyHut!==null&&s.goodyHut!==void 0,terrain:s.terrain?._??"Unknown",vegetation:Ol(s.terrain?._??"Unknown")!==null,woods:[],paths:[],city:null,suburbs:[],beside:[]},c=Qw(s),h=s.terrain?._??"Unknown";return s.isWater!==!0&&!jw.includes(h)&&h!=="Unknown"&&!J3.includes(h)&&!j3.some(d=>Tn(s,d))&&(l.suburbs=e.flatMap(({offset:d,tile:{city:m}})=>{let g=m?US(m.growth?.size??1):0;return m&&g>0?[{seed:Bx(String(m.id??m.name??"")),steps:g,city:d}]:[]}).sort((d,m)=>d.seed-m.seed||d.city[0]-m.city[0]||d.city[1]-m.city[1])),l.suburbs.length>0&&(l.beside=e.filter(({tile:{city:d}})=>!!d).map(({offset:d})=>d)),c!==null&&(l.woods=e.filter(d=>Qw(d.tile)===c).map(({offset:d})=>d)),(c!==null||l.suburbs.length>0)&&(l.paths=e.filter(d=>!!d.tile.city||Tn(d.tile,"Road")).map(({offset:d})=>d)),l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation&&l.suburbs.length===0?null:l},"overlayFor"),e1=tL;var Gt=u((s,e,t,n)=>({shape:s,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),t1={Coal:Gt("rocks","#26262a",4),Gold:Gt("rocks","#d8b13a",3),Gems:Gt("rocks","#59c2d6",4,"#b05ad0"),Iron:Gt("rocks","#8a5a44",4),Wheat:Gt("crop","#d9b84a",5,"#a88a2c"),Spice:Gt("crop","#c0452e",4,"#5d7a2a"),Wine:Gt("crop","#6a2c5e",4,"#5d7a2a"),Silk:Gt("crop","#e9e2cf",3,"#4f7a34"),Fruit:Gt("crop","#e08a2a",4,"#3f7a2a"),Horse:Gt("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:Gt("animal","#4a3424",3,"#2a1e16"),Game:Gt("animal","#a9835a",2,"#5a4430"),"Tundra:Game":Gt("animal","#8f7e66",2,"#e8e2d6"),Furs:Gt("animal","#b0602a",2,"#f0e8dc"),Ivory:Gt("animal","#8a8580",1,"#f2ead8"),Seal:Gt("animal","#6e7072",2,"#4a4c4e"),Pheasant:Gt("bird","#8a3a22",2,"#3d6a3a"),Fish:Gt("fish","#b8c4cc",5),Whales:Gt("whale","#3a4048",1),Oil:Gt("derrick","#222224",1,"#121214"),Oasis:Gt("oasis","#3f7a32",3,"#3f86a8"),Peat:Gt("peat","#4a3624",4),Shield:Gt("logs","#7a5532",4,"#c9a47a")},nL=Gt("cairn","#9a9690",5),n1=u((s,e)=>{let t=u(n=>Object.prototype.hasOwnProperty.call(t1,n)?t1[n]:void 0,"own");return t(`${s}:${e}`)??t(e)??nL},"specialLook");var Ay=u(()=>({positions:[],normals:[],colours:[]}),"soup"),On={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Bl=.06,i1="#8c7a58",s1="#5f5953",iL="#a9abae",sL="#5e432b",rL="#4f87b0",oL="#7da33f",aL=["#c2b448","#8fae3e"],r1="#9d968a",lL="#4a4c50",wy="#6b4a2e",cL="#7a6a58",uL="#b89a5a",hL="#c9b48e",o1="#34322a",Un=new as(1,1,1),kl=new ls(.5,.5,1,8),Ry=new js(.5,1,8),m1=new js(.5,1,4),Fl=new kr(.5,8,6),Fu=new ls(.5,.5,1,4,1,!0),Bu=new js(.5,1,5,1,!0),Pp=new kr(.5,5,3),vy={mine:[3,.72],hut:[11,.64],special:u(s=>[s+1,.72],"special")},dL=.05,g1=.22,a1=72,Si=u((s,e)=>{let t=Math.imul(s^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Cy=.05,l1=new Map,Ip=u(s=>{let e=l1.get(s);if(e===void 0){let{r:t,g:n,b:i}=new Pe(s);e=[t,n,i],l1.set(s,e)}return e},"colourOf"),c1=new WeakMap,fL=u(s=>{let e=c1.get(s);if(e===void 0){let t=s.index===null?s:s.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},c1.set(s,e),t!==s&&t.dispose()}return e},"trianglesOf"),pL=new Ze,mL=new je,gL=new H,xL=new $t,bL=new Qn,yL=new H,Dt,x1,qt,Ny=class Ny{constructor(e,t){z(this,Dt);this.lines=[];this.runs=[];this.past=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let i=this.place.heightAt(e,t);return n?Math.max(0,i):i}strip(e,t,n,i,r){let o=Ip(i),a=Math.hypot(t[0]-e[0],t[1]-e[1]);if(a===0)return;let l=Math.max(1,Math.ceil(a/Bl)),c=Math.max(1,Math.ceil(n/Bl)),h=[-(t[1]-e[1])/a*n,(t[0]-e[0])/a*n],f=u((d,m)=>[e[0]+(t[0]-e[0])*d+h[0]*(m-.5),e[1]+(t[1]-e[1])*d+h[1]*(m-.5)],"at");for(let d=0;d<l;d++)for(let m=0;m<c;m++){let[g,_]=f(d/l,(m+1)/c),[x,b]=f((d+1)/l,(m+1)/c),[v,S]=f(d/l,m/c),[M,A]=f((d+1)/l,m/c);R(this,Dt,qt).call(this,g,_,r,o),R(this,Dt,qt).call(this,x,b,r,o),R(this,Dt,qt).call(this,v,S,r,o),R(this,Dt,qt).call(this,x,b,r,o),R(this,Dt,qt).call(this,M,A,r,o),R(this,Dt,qt).call(this,v,S,r,o)}}ribbon(e,t,n,i,r){let o=Ip(n),a=e.map((l,c)=>{let h=e[c-1]??l,f=e[c+1]??l,[d,m]=r?.[c]??[f[0]-h[0],f[1]-h[1]],g=Math.hypot(d,m);return g===0?[0,0]:[-m/g*t,d/g*t]});for(let l=0;l+1<e.length;l++){let c=e[l],h=e[l+1],f=a[l],d=a[l+1],m=Math.hypot(h[0]-c[0],h[1]-c[1]);if(m===0)continue;let g=Math.max(1,Math.ceil(m/Bl)),_=Math.max(1,Math.ceil(t/Bl)),x=u((b,v)=>[c[0]+(h[0]-c[0])*b+(f[0]+(d[0]-f[0])*b)*(v-.5),c[1]+(h[1]-c[1])*b+(f[1]+(d[1]-f[1])*b)*(v-.5)],"at");for(let b=0;b<g;b++)for(let v=0;v<_;v++){let[S,M]=x(b/g,(v+1)/_),[A,E]=x((b+1)/g,(v+1)/_),[y,w]=x(b/g,v/_),[I,P]=x((b+1)/g,v/_);R(this,Dt,qt).call(this,S,M,i,o),R(this,Dt,qt).call(this,A,E,i,o),R(this,Dt,qt).call(this,y,w,i,o),R(this,Dt,qt).call(this,A,E,i,o),R(this,Dt,qt).call(this,I,P,i,o),R(this,Dt,qt).call(this,y,w,i,o)}}}disc(e,t,n,i,r=12){let o=Ip(n),[a,l]=e,c=Math.max(1,Math.ceil(t/Bl)),h=u((f,d)=>{let m=d/r*Math.PI*2,g=f/c*t;return[a+Math.cos(m)*g,l+Math.sin(m)*g]},"at");for(let f=0;f<c;f++)for(let d=0;d<r;d++){let m=h(f+1,d),g=h(f+1,d+1);if(f===0)R(this,Dt,qt).call(this,a,l,i,o),R(this,Dt,qt).call(this,...g,i,o),R(this,Dt,qt).call(this,...m,i,o);else{let _=h(f,d),x=h(f,d+1);R(this,Dt,qt).call(this,..._,i,o),R(this,Dt,qt).call(this,...x,i,o),R(this,Dt,qt).call(this,...m,i,o),R(this,Dt,qt).call(this,...x,i,o),R(this,Dt,qt).call(this,...g,i,o),R(this,Dt,qt).call(this,...m,i,o)}}}solid(e,t,n,i,r=[0,0,0]){let{positions:o,normals:a}=fL(e),l=pL.compose(gL.set(...t),xL.setFromEuler(bL.set(...r)),yL.set(...n)),c=l.elements,h=mL.getNormalMatrix(l).elements,[f,d,m]=Ip(i),g=this.soup;for(let _=0;_<o.length;_+=3){let x=o[_],b=o[_+1],v=o[_+2],S=a[_],M=a[_+1],A=a[_+2],E=h[0]*S+h[3]*M+h[6]*A,y=h[1]*S+h[4]*M+h[7]*A,w=h[2]*S+h[5]*M+h[8]*A,I=Math.hypot(E,y,w)||1;g.positions.push(c[0]*x+c[4]*b+c[8]*v+c[12],c[1]*x+c[5]*b+c[9]*v+c[13],c[2]*x+c[6]*b+c[10]*v+c[14]),g.normals.push(E/I,y/I,w/I),g.colours.push(f,d,m)}}spot(e,t){let n=Si(this.place.seed,e)*Math.PI*2,[i,r]=this.place.centre;return[i+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[i,r]=this.place.centre,o=Math.hypot(e-i,t-r)-g1-n;return this.lines.forEach(([a,l])=>{o=Math.min(o,OL(e,t,a,l)-dL-n)}),this.taken.forEach(([a,l,c])=>{o=Math.min(o,Math.hypot(e-a,t-l)-c-n)}),o}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let i=Si(this.place.seed,e)*Math.PI*2,[r,o]=this.place.centre,a=[r,o],l=-1/0;for(let c of[t,t*.88,t*1.1])for(let h=0;h<a1;h++){let f=i+h/a1*Math.PI*2,d=[r+Math.cos(f)*c*this.place.radius,o+Math.sin(f)*c*this.place.radius],m=this.clearance(d[0],d[1],n);if(m>=0)return this.taken.push([d[0],d[1],n]),d;m>l&&(a=d,l=m)}return this.taken.push([a[0],a[1],n]),a}};Dt=new WeakSet,x1=u(function(e,t){let n=Cy,i=(this.place.heightAt(e+n,t)-this.place.heightAt(e-n,t))/(2*n),r=(this.place.heightAt(e,t+n)-this.place.heightAt(e,t-n))/(2*n),o=Math.hypot(i,1,r);return[-i/o,1/o,-r/o]},"#normal"),qt=u(function(e,t,n,i){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...R(this,Dt,x1).call(this,e,t)),this.soup.colours.push(...i)},"#point"),u(Ny,"Layer");var Ey=Ny,Np=u((s,e)=>{let[t,n]=s.centre,[i,r]=s.toward(e);return[(t+i)/2,(n+r)/2]},"halfway"),Py=u(s=>s.alone||s.joins.length>0,"drawn"),_L=.09,vL=8,Ty=u(([s,e])=>300+(s+3)*7+(e+3),"wayIndex"),Dp=u((s,e)=>{let[t,n]=s.centre,[i,r]=Np(s,e),o=i-t,a=r-n,l=Math.hypot(o,a);if(l===0)return{points:[[t,n]],ways:[[0,0]]};let c=(Si(s.seed,Ty(e))*2-1)*_L*l/(4/9),h=[-a/l,o/l],f=[t+o/3+h[0]*c,n+a/3+h[1]*c],d=[t+o*2/3,n+a*2/3],m=Math.max(vL,Math.ceil(l*1.02/Bl)),g=Array.from({length:m+1},(_,x)=>x/m);return{points:g.map(_=>{let x=(1-_)**3,b=3*(1-_)**2*_,v=3*(1-_)*_**2,S=_**3;return[x*t+b*f[0]+v*d[0]+S*i,x*n+b*f[1]+v*d[1]+S*r]}),ways:g.map(_=>{let x=3*(1-_)**2,b=6*(1-_)*_,v=3*_**2,S=x*(f[0]-t)+b*(d[0]-f[0])+v*(i-d[0]),M=x*(f[1]-n)+b*(d[1]-f[1])+v*(r-d[1]),A=Math.hypot(S,M);return A===0?[o/l,a/l]:[S/A,M/A]})}},"roadHalf"),ML=u((s,e)=>{let{place:t}=s;Py(e)&&(e.joins.forEach(n=>{let{points:i,ways:r}=Dp(t,n);s.ribbon(i,.07,i1,On.road,r)}),s.disc(t.centre,e.alone?.09:.035,i1,On.road))},"road"),SL=u((s,e)=>{if(!Py(e))return;let{place:t}=s;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(i=>Np(t,i))).forEach(i=>{let[r,o]=t.centre,a=Math.hypot(i[0]-r,i[1]-o),l=a===0?[0,0]:[-(i[1]-o)/a*.025,(i[0]-r)/a*.025];s.strip(t.centre,i,.1,s1,On.ballast);for(let c=.1;c<1;c+=.2){let h=[r+(i[0]-r)*c,o+(i[1]-o)*c];s.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,sL,On.ballast+.002)}[1,-1].forEach(c=>s.strip([r+l[0]*c,o+l[1]*c],[i[0]+l[0]*c,i[1]+l[1]*c],.01,iL,On.rail))}),s.disc(t.centre,.05,s1,On.ballast)},"railroad"),My=.04,wL=u((s,e,t,n,i)=>{let r=i.filter(l=>Math.min(...l.map(([,c])=>c))-Bt<t+n/2&&Math.max(...l.map(([,c])=>c))+Bt>t-n/2).map(l=>[Math.min(...l.map(([c])=>c))-Bt,Math.max(...l.map(([c])=>c))+Bt]).sort((l,c)=>l[0]-c[0]),o=[],a=s;return r.forEach(([l,c])=>{l-a>=My&&o.push([a,Math.min(l,e)]),a=Math.max(a,c)}),e-a>=My&&o.push([a,e]),o.filter(([l,c])=>c-l>=My)},"rowAround"),EL=u((s,e,t)=>{let{centre:n,inner:i}=s.place,r=e==="farmland"?6:4,o=i*.9,a=o*2/r,l=u((c,h,f,d)=>wL(n[0]-o,n[0]+o,c,h,t).forEach(([m,g])=>s.strip([m,c],[g,c],h,f,d)),"across");for(let c=0;c<r;c++)l(n[1]-o+a*(c+.5),a*.8,e==="farmland"?aL[c%2]:oL,On.field),c>0&&l(n[1]-o+a*c,.016,rL,On.field+.001)},"fields"),u1=["#9c5a3c","#7d4a36","#6f6a64","#8b6b4a"],h1="#a39a88",TL="#c4b8a2",AL=.045,d1=.86,RL=u((s,e)=>{let{place:t}=s,[n,i]=t.centre,{plaza:r,streets:o,lots:a}=NS(t,e,[n,i+ia]);s.disc(r.at,r.radius,h1,On.road,16),o.forEach(([l,c])=>s.strip(l,c,vu,h1,On.road)),a.forEach(l=>b1(s,l))},"city"),b1=u((s,e)=>{let{at:[t,n],width:i,facing:r,storeys:o}=e,a=[[t,n],...vl(e)].map(([h,f])=>s.ground(h,f)),l=Math.min(...a)-.005,c=Math.max(...a)+AL*o;s.solid(Un,[t,(l+c)/2,n],[i*d1,c-l,i*d1],TL,[0,r,0]),s.solid(m1,[t,c+i*.2,n],[i*Math.SQRT2,i*.4,i*Math.SQRT2],u1[Math.floor(e.roof*u1.length)],[0,r+Math.PI/4,0])},"house"),CL=u((s,e)=>{if(e.suburbs.length===0)return[];let{place:t}=s,n=u((a,l)=>a[0]===l[0]&&a[1]===l[1],"same"),i=u(a=>{let[l,c]=t.toward(a);return[l,c+ia]},"standOf"),r={runs:[...s.runs],lines:[...s.past],lanes:e.beside.filter(a=>![...e.road?.joins??[],...e.railroad?.joins??[]].some(l=>n(l,a))).map(a=>[[t.centre[0],t.centre[1]],i(a)]),stands:e.beside.map(i),taken:s.taken,ground:u((a,l)=>t.heightAt(a,l),"ground")};return e.suburbs.flatMap(a=>OS(t,a,{...r,others:e.beside.filter(l=>!n(l,a.city)).map(l=>t.toward(l))})).map(a=>(b1(s,a),s.taken.push([a.at[0],a.at[1],a.width/2*Math.SQRT2]),vl(a)))},"suburbs"),PL=u((s,[e,t])=>{let n=s.ground(e,t);s.solid(Un,[e-.02,n+.05,t],[.01,.11,.01],wy,[0,0,-.3]),s.solid(Un,[e+.02,n+.05,t],[.01,.11,.01],wy,[0,0,.3]),s.solid(kl,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([i,r])=>{let o=e+i,a=t+r;s.solid(Ry,[o,s.ground(o,a)+.02,a],[.07,.04,.07],cL)})},"mine"),IL=u(s=>{let[e,t]=s.place.centre,n=s.place.radius*.62,i=s.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,o,a,l])=>{let c=e+r,h=t+o;s.solid(Un,[c,Math.max(i,s.ground(c,h))+.02,h],[a,.05,l],r1)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,o])=>{let a=e+r,l=t+o;s.solid(kl,[a,s.ground(a,l)+.035,l],[.045,.07,.045],r1)})},"fortress"),LL=u(s=>{let[e,t]=s.place.centre,n=s.place.radius*.75,[i,r]=s.claim(5,.6,.08);s.strip([e-n,t+.12],[e+n,t+.12],.12,lL,On.road+.002),s.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",On.road+.004),s.solid(Un,[i,s.ground(i,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),NL=u(s=>{let e=s.place.radius;s.disc(s.place.centre,e*.55,o1,On.smear,14),s.disc(s.spot(7,.5),e*.25,o1,On.smear+.001)},"pollution"),DL=u((s,e,t,n)=>{let i=e.detail??e.colour,r=u((a,l)=>[t[0]+(Si(s.place.seed,n*31+a*2)-.5)*l,t[1]+(Si(s.place.seed,n*31+a*2+1)-.5)*l],"jitter"),o=e.shape==="fish"||e.shape==="whale";for(let a=0;a<e.count;a++){let[l,c]=e.count===1?[t[0],t[1]]:r(a,.1),h=s.ground(l,c,o),f=Si(s.place.seed,n*31+a+17)*Math.PI*2;switch(e.shape){case"rocks":s.solid(Fl,[l,h+.012,c],[.05,.035,.045],a%2===1?i:e.colour,[0,f,0]);break;case"crop":s.solid(kl,[l,h+.02,c],[.008,.04,.008],i),s.solid(Fl,[l,h+.05,c],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;s.solid(Un,[l,h+.04*d,c],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),s.solid(Un,[l+Math.sin(f)*.04*d,h+.055*d,c+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],i,[0,f,0]),s.solid(Un,[l,h+.013*d,c],[.03*d,.026*d,.055*d],i,[0,f,0]);break}case"bird":s.solid(Fl,[l,h+.02,c],[.03,.025,.04],e.colour,[0,f,0]),s.solid(Un,[l-Math.sin(f)*.03,h+.025,c-Math.cos(f)*.03],[.008,.006,.04],i,[.4,f,0]);break;case"fish":s.solid(Fl,[l,h+.006,c],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":s.solid(Fl,[l,h,c],[.07,.05,.2],e.colour,[0,f,0]),s.solid(Un,[l-Math.sin(f)*.11,h+.02,c-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":s.solid(Un,[l,h+.008,c],[.08,.016,.08],i),s.solid(m1,[l,h+.1,c],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":a===0&&s.disc([l,c],.07,i,On.field+.002);{let[d,m]=r(a+5,.1),g=s.ground(d,m);s.solid(kl,[d,g+.06,m],[.012,.12,.012],wy),s.solid(Ry,[d,g+.125,m],[.09,.03,.09],e.colour)}break;case"peat":case"logs":s.solid(e.shape==="logs"?kl:Un,[l,h+.012,c],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],a%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:s.solid(Fl,[t[0],s.ground(t[0],t[1])+.012+a*.018,t[1]],[.05-a*.007,.025,.05-a*.007],e.colour)}}},"special"),UL=u((s,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Si(s.place.seed,12)*Math.PI,i=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,o=s.ground(i,r);s.solid(kl,[i,o+.02,r],[.05,.04,.05],hL),s.solid(Ry,[i,o+.055,r],[.065,.035,.065],uL)})},"hut"),y1={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},_1=u((s,e,t,n,i,r,o)=>{let a=s.ground(n,i),{colour:l,detail:c}=e;switch(t){case"conifer":s.solid(Fu,[n,a+.025*r,i],[.016*r,.05*r,.016*r],c),s.solid(Bu,[n,a+.09*r,i],[.11*r,.12*r,.11*r],l),s.solid(Bu,[n,a+.16*r,i],[.08*r,.1*r,.08*r],l);break;case"broadleaf":s.solid(Fu,[n,a+.04*r,i],[.018*r,.08*r,.018*r],c),s.solid(Pp,[n,a+.12*r,i],[.13*r,.11*r,.13*r],l,[0,o,0]);break;case"palm":s.solid(Fu,[n,a+.08*r,i],[.012*r,.16*r,.012*r],c,[.12,o,0]),s.solid(Bu,[n+.01*r,a+.165*r,i],[.15*r,.03*r,.15*r],l,[0,o,0]);break;case"deadTree":s.solid(Fu,[n,a+.06*r,i],[.014*r,.12*r,.014*r],c),s.solid(Un,[n+.02*r,a+.09*r,i],[.006*r,.05*r,.006*r],c,[0,o,-.7]);break;case"bush":s.solid(Pp,[n,a+.02*r,i],[.06*r,.045*r,.06*r],l,[0,o,0]);break;case"shrub":s.solid(Bu,[n,a+.025*r,i],[.05*r,.05*r,.05*r],l,[0,o,0]),s.solid(Bu,[n+.02*r,a+.018*r,i+.01*r],[.035*r,.036*r,.035*r],l,[0,o,0]);break;case"scrub":s.solid(Pp,[n,a+.008*r,i],[.05*r,.02*r,.05*r],l,[0,o,0]);break;case"reeds":[-1,0,1].forEach(h=>s.solid(Un,[n+h*.008*r,a+.035*r,i],[.005,.07*r,.005],h===0?l:c,[0,o,h*.18]));break;case"rock":s.solid(Pp,[n,a+.012*r,i],[.07*r,.04*r,.06*r],l,[0,o,0]);break;default:s.solid(Fu,[n,a+.05*r,i],[.018*r,.1*r,.018*r],l),s.solid(Un,[n+.015*r,a+.06*r,i],[.025*r,.01*r,.01*r],l,[0,o,0])}},"grow"),OL=u((s,e,t,n)=>{let i=n[0]-t[0],r=n[1]-t[1],o=i*i+r*r,a=o===0?0:Math.max(0,Math.min(1,((s-t[0])*i+(e-t[1])*r)/o));return Math.hypot(s-(t[0]+i*a),e-(t[1]+r*a))},"distanceTo"),FL=u((s,e)=>{let t=Ol(e.terrain);if(t===null)return;let{centre:n,radius:i,seed:r,latitude:o}=s.place;t.plants.forEach((a,l)=>{for(let c=0;c<a.count;c++){let h=1e3+l*97+c*7,f=a.size[0]+(a.size[1]-a.size[0])*Si(r,h),d=t.conifers,m=d!==void 0&&Si(r,h+1)>=d[0]+(d[1]-d[0])*o?"broadleaf":a.kind,g=y1[m]*f;for(let _=0;_<6;_++){let x=Si(r,h+2+_*2)*Math.PI*2,b=Math.sqrt(Si(r,h+3+_*2))*i*.92,v=n[0]+Math.cos(x)*b,S=n[1]+Math.sin(x)*b;if(s.hasRoom(v,S,g)){_1(s,a,m,v,S,f,x),s.taken.push([v,S,g]),s.grown.push([v,S,m]);break}}}})},"plants"),Sy=.26,f1=.3,BL=.15,p1=.5,Lp=[.9,1.3],la=u((s,e,t)=>Si(Math.imul(s,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),kL=u((s,e,t)=>{let{centre:n,outline:i,owns:r,around:o,period:a,toward:l,latitude:c}=e,h=Math.max(1,Math.round(a.u/Sy)),f=a.u/h,d=a.v===null?null:Math.max(1,Math.round(a.v/Sy)),m=a.v===null||d===null?Sy:a.v/d,g=i.map(([y])=>y),_=i.map(([,y])=>y),[x,b]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[v,S]=[Math.floor(Math.min(..._)/m)-1,Math.ceil(Math.max(..._)/m)],M=o.filter(([y,w])=>!s.woods.some(([I,P])=>I===y&&P===w)).map(y=>{let[w,I]=l(y),P=Math.hypot(w-n[0],I-n[1]);return{mu:w,mv:I,length:P}}),A=t.plants.reduce((y,{count:w})=>y+w,0),E=[];for(let y=v;y<=S;y++)for(let w=x;w<=b;w++){let I=(w%h+h)%h,P=d===null?y:(y%d+d)%d,D=(w+.5+(la(I,P,0)*2-1)*f1)*f,O=(y+.5+(la(I,P,1)*2-1)*f1)*m;if(!r(D,O))continue;let X=M.reduce((W,{mu:J,mv:Q,length:de})=>{let be=de/2-((D-n[0])*(J-n[0])+(O-n[1])*(Q-n[1]))/de;return Math.min(W,Math.max(0,be)/BL)},1);if(la(I,P,2)>=p1+(1-p1)*X)continue;let U=la(I,P,3)*A,$=t.plants[0];for(let W of t.plants)if($=W,U-=W.count,U<0)break;let te=t.conifers,k=te!==void 0&&la(I,P,4)>=te[0]+(te[1]-te[0])*c?"broadleaf":$.kind,Y=$.size[0]+($.size[1]-$.size[0])*la(I,P,5);E.push({u:D,v:O,kind:k,plant:$,room:y1[k]*Y*Lp[1],size:Y*(Lp[0]+(Lp[1]-Lp[0])*X),facing:la(I,P,6)*Math.PI*2})}return E},"woodsPlants"),zL=u((s,e)=>{let{centre:t,around:n,toward:i}=s.place,r=Math.max(...n.map(a=>{let[l,c]=i(a);return Math.hypot(l-t[0],c-t[1])})),o=e.paths.map(a=>i(a));o.forEach((a,l)=>o.slice(l+1).forEach(c=>{Math.hypot(c[0]-a[0],c[1]-a[1])<=r+1e-6&&(s.lines.push([a,c]),s.past.push([a,c]))}))},"pathsPast"),GL=u((s,e,t)=>{let{heightAt:n}=s.place;kL(e,s.place,t).forEach(({u:i,v:r,kind:o,plant:a,size:l,room:c,facing:h})=>{o!=="reeds"&&n(i,r)<0||s.hasRoom(i,r,c)&&(_1(s,a,o,i,r,l,h),s.grown.push([i,r,o]))})},"woods"),Iy=u((s,e,t)=>{let n=new Ey(t,e),{centre:i,radius:r}=e;if(s.city!==null)return RL(n,s.city),{taken:n.taken,lines:n.lines,grown:n.grown};if([s.road,s.railroad].forEach(l=>{l!==null&&Py(l)&&(l.joins.forEach(c=>{if(l===s.road){let h=Dp(e,c).points;h.slice(1).forEach((f,d)=>n.lines.push([h[d],f])),n.runs.push({key:Ty(c),points:h});return}n.lines.push([i,Np(e,c)]),n.runs.push({key:Ty(c)+100,points:[i,Np(e,c)]})}),l.alone&&n.lines.push([i,i]))}),s.fortress){let l=r*.62,c=[[-l,-l],[l,-l],[l,l],[-l,l]].map(([h,f])=>[i[0]+h,i[1]+f]);c.forEach((h,f)=>n.lines.push([h,c[(f+1)%4]]))}if(s.airbase){let l=r*.75;n.lines.push([[i[0]-l,i[1]+.12],[i[0]+l,i[1]+.12]])}s.road!==null&&ML(n,s.road),s.railroad!==null&&SL(n,s.railroad),s.front===!0&&n.taken.push([i[0],i[1]+ia,g1]),s.mine&&PL(n,n.claim(...vy.mine,.1)),s.fortress&&IL(n),s.airbase&&LL(n),s.pollution&&NL(n),s.specials.forEach(([l,c],h)=>DL(n,n1(l,c),n.claim(...vy.special(h),.1),h+1)),s.hut&&UL(n,n.claim(...vy.hut,.13)),zL(n,s);let o=CL(n,s);s.irrigation!==null&&EL(n,s.irrigation,o);let a=Ol(s.terrain);return a!==null&&s.irrigation===null&&!s.fortress&&!s.airbase&&(a.canopy!==void 0?GL(n,s,a):FL(n,s)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),VL=u((s,e,t)=>{let n=Ay();return t.forEach(({overlay:i,place:r})=>Iy(i,r,n)),Ly(s,e,n)},"overlayMesh"),Ly=u((s,e,t)=>{let n=new Float32Array(t.positions);for(let i=0;i<n.length;i+=3)n[i]=n[i]-s,n[i+2]=n[i+2]-e;return{u:s,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),v1=VL;var M1=u((s,e)=>Math.imul(s,73856093)^Math.imul(e,19349663),"squareSeed"),$r,nn,Yi,zl,Vu,ci,ui,hn,Gl,ca,Kr,ua,Zr,Jr,Hu,Wu,et,Uy,Oy,Fy,S1,w1,By,ku,ky,Up,zu,Op,Gu,zy=class zy{constructor(e){z(this,et);z(this,$r);z(this,nn);z(this,Yi,[]);z(this,zl);z(this,Vu);z(this,ci);z(this,ui,new Set);z(this,hn,null);z(this,Gl,null);z(this,ca,new Map);z(this,Kr,new Map);z(this,ua,u(()=>{},"#keptCity"));z(this,Zr,!0);z(this,Jr,[0,0]);z(this,Hu);z(this,Wu);B(this,ci,e);let t=e.topology(),n=e.width(),i=e.height(),r=t.wrapsY();this.layout=qw({width:n,height:i,topologyId:e.topologyId(),wrapsY:r}),B(this,$r,$w({layout:this.layout,source:{width:n,height:i,wrapsY:r,terrainAt:u((d,m)=>e.get(d,m).terrain._,"terrainAt"),waterAt:u((d,m)=>e.get(d,m).isWater,"waterAt"),neighbours:u((d,m)=>t.directions().map(g=>t.neighbour(d,m,g)).filter(g=>g!==null),"neighbours")}})),B(this,nn,Kw(this.layout,i));let[o,a]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,m])=>Math.hypot(d-o,m-a))),c=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,m])=>{let[g,_]=this.layout.centre(d,m);return Math.hypot(g-o,_-a)}));B(this,zl,1.2+l+ur*Math.SQRT2+Math.max((xs.reach-1)*c,c/2+ur*Math.SQRT2+Cp)),B(this,Vu,l+Cy+Math.max(p(this,nn).spacingU,p(this,nn).spacingV));let h=this.layout.outline(0,0),f=h.flatMap(([d,m],g)=>{let[_,x]=h[(g+1)%h.length],b=Math.hypot(_-d,x-m);return b===0?[]:[{away:Math.abs((_-d)*(a-m)-(x-m)*(o-d))/b,normal:[(x-m)/b,(d-_)/b]}]});B(this,Hu,Math.min(...f.map(({away:d})=>d))),B(this,Wu,Math.min(...f.map(({away:d,normal:[m,g]})=>d/(Math.abs(m)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:i,spacingV:r}=p(this,nn),o=Math.floor(e/i),a=Math.floor(t/r),l=e/i-o,c=t/r-a,h=u((_,x)=>{let b=`${_},${x}`,v=n.get(b);return v===void 0&&(v=p(this,$r).height(_*i,x*r),n.set(b,v)),v},"at"),f=h(o,a),d=h(o+1,a),m=h(o,a+1);if(l+c<=1)return f+(d-f)*l+(m-f)*c;let g=h(o+1,a+1);return g+(m-g)*(1-l)+(d-g)*(1-c)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:i,spacingU:r,spacingV:o}=p(this,nn);return{columns:e*n,rows:t*i,spacingU:r,spacingV:o,wrapsV:this.layout.period().v!==null}}extentV(){return p(this,nn).chunksV*p(this,nn).stepsV*p(this,nn).spacingV}heightAt(e,t){return p(this,$r).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:i}=p(this,nn),r=[];for(let o=0;o<i;o++)for(let a=0;a<n;a++)r.push(`${a},${o}`);B(this,Yi,R(this,et,Gu).call(this,r,e,t)),B(this,Jr,[e,t]),r.forEach(o=>p(this,ui).add(o)),R(this,et,Fy).call(this)}changed(e,t,n,i=!1){if(e.length===0&&!i)return[];B(this,Jr,[t,n]),R(this,et,Uy).call(this,e.length===0?[...R(this,et,zu).call(this).values()].flat():R(this,et,Op).call(this,e));let r=p(this,$r).refresh(i?void 0:e);if(r.length===0)return r;let o=_y(p(this,nn),this.layout,r,p(this,zl)).map(([a,l])=>`${a},${l}`);return R(this,et,Fy).call(this,_y(p(this,nn),this.layout,r,p(this,zl)+p(this,Vu)).map(([a,l])=>`${a},${l}`)),B(this,Yi,R(this,et,Gu).call(this,[...new Set([...p(this,Yi),...o])],t,n)),r}showTowns(e,t,n){if(e===p(this,Zr))return;let i=[...R(this,et,zu).call(this).values()].flat().filter(([r,o])=>R(this,et,Oy).call(this,r,o));B(this,Zr,e),B(this,Jr,[t,n]),R(this,et,Uy).call(this,R(this,et,Op).call(this,i))}refocus(e,t){B(this,Yi,R(this,et,Gu).call(this,p(this,Yi),e,t)),B(this,Jr,[e,t])}pending(){return p(this,Yi).length}overlaysPending(){return p(this,ui).size+(p(this,hn)===null||p(this,ui).has(p(this,hn).key)?0:1)}build(e,t){let n=performance.now(),i=u(()=>t!==null&&performance.now()-n>=t,"spent");for(;p(this,Yi).length>0;){if(i())return;let o=p(this,Yi).shift(),[a,l]=o.split(",").map(Number);e.setChunk(a,l,Zw(p(this,nn),p(this,$r),a,l)),p(this,ui).add(o)}let r=!1;for(;p(this,ui).size>0||p(this,hn)!==null;){if(p(this,hn)!==null&&p(this,ui).has(p(this,hn).key)&&B(this,hn,null),p(this,hn)===null){if(r&&i())return;let g=R(this,et,Gu).call(this,[...p(this,ui)],...p(this,Jr))[0],_=R(this,et,zu).call(this).get(g)??[],x=R(this,et,w1).call(this,g,_);if(p(this,ui).delete(g),x!==null){let[b,v]=g.split(",").map(Number);_.forEach(([S,M],A)=>p(this,ca).set(`${S},${M}`,x.signatures[A])),e.setOverlay(b,v,x.mesh),r=!0;continue}B(this,hn,{key:g,squares:_,done:0,laid:Ay(),signatures:[],heights:new Map,keep:!0})}let o=p(this,hn);for(;o.done<o.squares.length;){let[g,_]=o.squares[o.done],x=R(this,et,ky).call(this,g,_,o.heights);if(o.signatures.push(p(this,ca).get(`${g},${_}`)),o.done++,x!==null&&Iy(x.overlay,x.place,o.laid),o.done<o.squares.length&&i())return}let[a,l]=o.key.split(",").map(Number),{stepsU:c,stepsV:h,spacingU:f,spacingV:d}=p(this,nn),m=o.laid.positions.length===0?null:Ly(a*c*f,l*h*d,o.laid);if(B(this,hn,null),o.keep){let g={signatures:o.signatures,mesh:m};p(this,Kr).set(o.key,R(this,et,Op).call(this,o.squares).some(([_,x])=>R(this,et,Oy).call(this,_,x))?{...p(this,Kr).get(o.key),[p(this,Zr)?"shown":"hidden"]:g}:{shown:g,hidden:g})}e.setOverlay(a,l,m),r=!0}}keepCities(e){B(this,ua,e)}roadPath(e,t,n,i){let r=p(this,ci).topology(),o=u((M,A,E,y)=>{let w=r.directions().find(I=>{let P=r.neighbour(M,A,I);return P!==null&&P[0]===E&&P[1]===y});return w===void 0?null:r.offset(w,M,A)},"offsetTo"),a=o(e,t,n,i),l=o(n,i,e,t);if(a===null||l===null)return null;let c=u((M,A,E)=>{let y=R(this,et,ku).call(this,M,A),w=u(P=>P!==null&&P.joins.some(([D,O])=>D===E[0]&&O===E[1]),"joins"),I=this.layout.centre(M,A);if(w(y?.road??null))return Dp({centre:I,toward:u(([P,D])=>this.layout.centre(M+P,A+D),"toward"),seed:M1(M,A)},E).points;if(w(y?.railroad??null)){let[P,D]=this.layout.centre(M+E[0],A+E[1]);return[[I[0],I[1]],[(I[0]+P)/2,(I[1]+D)/2]]}return null},"half"),h=c(e,t,a),f=c(n,i,l);if(h===null&&f===null)return null;let d=this.layout.centre(e,t),m=this.layout.centre(n,i),g=this.layout.centre(e+a[0],t+a[1]),_=this.layout.centre(n+l[0],i+l[1]),x=[(d[0]+g[0])/2,(d[1]+g[1])/2],b=[(m[0]+_[0])/2,(m[1]+_[1])/2],v=[b[0]-x[0],b[1]-x[1]];return[...(h??[d,x]).map(([M,A])=>[M+v[0],A+v[1]]),...(f??[m,b]).slice(0,-1).reverse()].map(([M,A])=>[M-m[0],A-m[1]])}overlayOf(e,t){let{stepsU:n,stepsV:i,spacingU:r,spacingV:o}=p(this,nn),a=new Map,l=(R(this,et,zu).call(this).get(`${e},${t}`)??[]).flatMap(([c,h])=>R(this,et,ky).call(this,c,h,a)??[]);return l.length===0?null:v1(e*n*r,t*i*o,l)}overlayKeyOf(e,t){return R(this,et,Up).call(this,e,t)}};$r=new WeakMap,nn=new WeakMap,Yi=new WeakMap,zl=new WeakMap,Vu=new WeakMap,ci=new WeakMap,ui=new WeakMap,hn=new WeakMap,Gl=new WeakMap,ca=new WeakMap,Kr=new WeakMap,ua=new WeakMap,Zr=new WeakMap,Jr=new WeakMap,Hu=new WeakMap,Wu=new WeakMap,et=new WeakSet,Uy=u(function(e){e.forEach(([t,n])=>{let i=R(this,et,Up).call(this,t,n);if(p(this,ui).has(i)||p(this,hn)?.key===i&&!R(this,et,S1).call(this,p(this,hn),t,n))return;JSON.stringify(R(this,et,ku).call(this,t,n))!==(p(this,ca).get(`${t},${n}`)??"null")&&p(this,ui).add(i)})},"#layAgain"),Oy=u(function(e,t){return!!p(this,ci).get(e,t).city||!!p(this,ua).call(this,e,t)},"#townAt"),Fy=u(function(e){let t=e===void 0?null:new Set(e);t===null?p(this,Kr).clear():t.forEach(n=>p(this,Kr).delete(n)),p(this,hn)!==null&&(t===null||t.has(p(this,hn).key))&&(p(this,hn).keep=!1)},"#landChanged"),S1=u(function(e,t,n){return e.squares.slice(0,e.done).some(([i,r])=>i===t&&r===n)},"#reached"),w1=u(function(e,t){let n=p(this,Kr).get(e);if(n===void 0)return null;let i=t.map(([r,o])=>JSON.stringify(R(this,et,ku).call(this,r,o)));return[n.shown,n.hidden].find(r=>r!==void 0&&r.signatures.length===i.length&&r.signatures.every((o,a)=>o===i[a]))??null},"#madeAs"),By=u(function(e,t){let n=p(this,ci).get(e,t),i=p(this,Zr)?p(this,ua).call(this,e,t):null;return i===void 0?n:{...n,city:i}},"#shownAt"),ku=u(function(e,t){let n=p(this,ci).topology(),i=e1(R(this,et,By).call(this,e,t),n.directions().flatMap(o=>{let a=n.neighbour(e,t,o);return a===null?[]:[{offset:n.offset(o,e,t),tile:R(this,et,By).call(this,a[0],a[1])}]})),r=p(this,ua).call(this,e,t);return i!==null&&!p(this,Zr)&&(r===void 0?p(this,ci).get(e,t).city:r)?{...i,front:!0}:i},"#overlayAt"),ky=u(function(e,t,n){let i=R(this,et,ku).call(this,e,t);if(p(this,ca).set(`${e},${t}`,JSON.stringify(i)),i===null)return null;let[r,o]=this.layout.centre(e,t),a=p(this,ci).topology();return{overlay:i,place:{centre:[r,o],toward:u(([l,c])=>this.layout.centre(e+l,t+c),"toward"),radius:p(this,Hu),inner:p(this,Wu),heightAt:u((l,c)=>this.surfaceAt(l,c,n),"heightAt"),seed:M1(e,t),latitude:Math.min(1,Math.abs(2*o/this.extentV()-1)),outline:this.layout.outline(e,t),owns:u((l,c)=>{let[h,f]=this.layout.tileAt(l,c);return h===e&&f===t},"owns"),around:a.directions().filter(l=>a.neighbour(e,t,l)!==null).map(l=>a.offset(l,e,t)),period:this.layout.period()}}},"#square"),Up=u(function(e,t){let{chunksU:n,chunksV:i,stepsU:r,stepsV:o,spacingU:a,spacingV:l}=p(this,nn),[c,h]=this.layout.centre(e,t),f=Math.floor(c/(r*a)),d=Math.floor(h/(o*l));return`${Math.min(n-1,Math.max(0,f))},${Math.min(i-1,Math.max(0,d))}`},"#chunkOf"),zu=u(function(){if(p(this,Gl)===null){let e=new Map;for(let t=0;t<p(this,ci).height();t++)for(let n=0;n<p(this,ci).width();n++){let i=R(this,et,Up).call(this,n,t);e.set(i,[...e.get(i)??[],[n,t]])}B(this,Gl,e)}return p(this,Gl)},"#chunksOfSquares"),Op=u(function(e){let t=p(this,ci).topology(),n=new Map;return e.forEach(([i,r])=>[[i,r],...t.directions().map(o=>t.neighbour(i,r,o)).filter(o=>o!==null)].forEach(o=>n.set(o.join(),o))),[...n.values()]},"#besides"),Gu=u(function(e,t,n){let{stepsU:i,stepsV:r,spacingU:o,spacingV:a}=p(this,nn),l=i*o,c=r*a,{u:h,v:f}=this.layout.period(),d=u((g,_)=>Math.abs(_===null?g:g-_*Math.round(g/_)),"round"),m=u(g=>{let[_,x]=g.split(",").map(Number);return Math.hypot(d((_+.5)*l-t,h),d((x+.5)*c-n,f))},"distance");return[...e].sort((g,_)=>m(g)-m(_))},"#nearestFirst"),u(zy,"Land");var Dy=zy,E1=Dy;var HL=u(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),$i=HL;var T1=u((s,e,t=100)=>{let n=s.filter(({time:a})=>e-a<=t);if(n.length<2)return{x:0,y:0};let i=n[0],r=n[n.length-1],o=r.time-i.time;return o<=0?{x:0,y:0}:{x:(r.x-i.x)/o,y:(r.y-i.y)/o}},"releaseVelocity");var WL=8,XL=.92,qL=.02,A1=3,YL=50,$L=8,KL=10,R1=250,Xu,qu,Vl,Hl,ha,jr,Gy=class Gy{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:i}){z(this,Xu);z(this,qu);z(this,Vl);z(this,Hl);z(this,ha,!1);z(this,jr);this.pointerId=e,B(this,Xu,t),B(this,qu,n),B(this,Vl,t),B(this,Hl,n),B(this,jr,[{x:t,y:n,time:i}])}dragging(){return p(this,ha)}move({pointerId:e,clientX:t,clientY:n,timeStamp:i}){if(e!==this.pointerId||!p(this,ha)&&Math.hypot(t-p(this,Xu),n-p(this,qu))<WL)return null;let r=!p(this,ha),o=p(this,Vl)-t,a=p(this,Hl)-n;return B(this,ha,!0),B(this,Vl,t),B(this,Hl,n),p(this,jr).push({x:t,y:n,time:i}),p(this,jr).length>20&&p(this,jr).shift(),{dx:o,dy:a,started:r}}releaseVelocity(e){return T1(p(this,jr),e)}};Xu=new WeakMap,qu=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,ha=new WeakMap,jr=new WeakMap,u(Gy,"Press");var Fp=Gy,vs,Yu,Vy=class Vy{constructor(e){z(this,vs,null);z(this,Yu);B(this,Yu,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>A1?A1/t:1,i=e.x*n,r=e.y*n,o=null,a=u(l=>{let c=o===null?16:Math.min(l-o,64);if(o=l,Math.hypot(i,r)<qL){B(this,vs,null);return}p(this,Yu).call(this,-i*c,-r*c);let h=Math.pow(XL,c/16);i*=h,r*=h,B(this,vs,window.requestAnimationFrame(a))},"step");B(this,vs,window.requestAnimationFrame(a))}gliding(){return p(this,vs)!==null}stop(){p(this,vs)!==null&&(window.cancelAnimationFrame(p(this,vs)),B(this,vs,null))}};vs=new WeakMap,Yu=new WeakMap,u(Vy,"Glide");var Bp=Vy,da,$u,Ku,Wl,Hy=class Hy{constructor(){z(this,da,0);z(this,$u,0);z(this,Ku,-1/0);z(this,Wl,0)}turned(e,t){let n=e.deltaMode===0,i=e.deltaY;if(i===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=R1)return 0;let r=Math.sign(i),o=e.timeStamp-p(this,Ku)>R1||r!==p(this,$u);if(B(this,Ku,e.timeStamp),B(this,$u,r),o&&(B(this,da,0),B(this,Wl,0)),n&&!e.ctrlKey&&p(this,Wl)>=KL)return 0;if(!o&&n){if(B(this,da,p(this,da)+i),Math.abs(p(this,da))<(e.ctrlKey?$L:YL))return 0;B(this,da,0)}return n&&!e.ctrlKey&&B(this,Wl,p(this,Wl)+1),i<0?1:-1}};da=new WeakMap,$u=new WeakMap,Ku=new WeakMap,Wl=new WeakMap,u(Hy,"WheelTurn");var kp=Hy;var ZL=350,JL=.006,C1=.004,Ms,dn,Fn,Xl,Ss,Ki,Hp,Ei,Ti,Qr,ql,hi,eo,Ue,wi,zp,Gp,P1,Xy,hr,qy,I1,dr,L1,N1,D1,U1,Zu,O1,F1,B1,Vp,Yy=class Yy{constructor(e,t,n=null){z(this,Ue);z(this,Ms);z(this,dn);z(this,Fn,null);z(this,Xl,[0,0]);z(this,Ss,null);z(this,Ki);z(this,Hp,new kp);z(this,Ei,new Map);z(this,Ti,null);z(this,Qr,null);z(this,ql,[]);z(this,hi);z(this,eo,null);B(this,Ms,e),B(this,dn,t),B(this,hi,n),B(this,Ki,new Bp((i,r)=>{let[o,a]=R(this,Ue,P1).call(this);R(this,Ue,qy).call(this,[o,a],[o-i,a-r])})),R(this,Ue,wi).call(this,"pointerdown",i=>R(this,Ue,I1).call(this,i)),R(this,Ue,wi).call(this,"pointermove",i=>R(this,Ue,N1).call(this,i)),R(this,Ue,wi).call(this,"pointerup",i=>R(this,Ue,D1).call(this,i)),R(this,Ue,wi).call(this,"pointercancel",i=>R(this,Ue,U1).call(this,i)),R(this,Ue,wi).call(this,"wheel",i=>R(this,Ue,F1).call(this,i),{passive:!1}),R(this,Ue,wi).call(this,"gesturestart",i=>R(this,Ue,Vp).call(this,i,"start"),{passive:!1}),R(this,Ue,wi).call(this,"gesturechange",i=>R(this,Ue,Vp).call(this,i,"change"),{passive:!1}),R(this,Ue,wi).call(this,"gestureend",i=>R(this,Ue,Vp).call(this,i,"end"),{passive:!1}),R(this,Ue,wi).call(this,"contextmenu",i=>R(this,Ue,L1).call(this,i)),R(this,Ue,wi).call(this,"pointerleave",()=>p(this,hi)?.hover(null)),R(this,Ue,wi).call(this,"touchstart",i=>i.preventDefault(),{passive:!1})}dragging(){return p(this,Fn)?.dragging()===!0||p(this,Ss)!==null}moving(){return this.dragging()||p(this,Ti)!==null||p(this,Ki).gliding()}dispose(){p(this,Ki).stop(),R(this,Ue,dr).call(this),p(this,ql).forEach(([e,t,n])=>p(this,Ms).removeEventListener(e,t,n)),B(this,ql,[])}};Ms=new WeakMap,dn=new WeakMap,Fn=new WeakMap,Xl=new WeakMap,Ss=new WeakMap,Ki=new WeakMap,Hp=new WeakMap,Ei=new WeakMap,Ti=new WeakMap,Qr=new WeakMap,ql=new WeakMap,hi=new WeakMap,eo=new WeakMap,Ue=new WeakSet,wi=u(function(e,t,n){p(this,Ms).addEventListener(e,t,n),p(this,ql).push([e,t,n])},"#listen"),zp=u(function(){return{width:p(this,Ms).clientWidth||1,height:p(this,Ms).clientHeight||1}},"#box"),Gp=u(function([e,t]){let{width:n,height:i}=R(this,Ue,zp).call(this);return[e/n*2-1,1-t/i*2]},"#screen"),P1=u(function(){let{width:e,height:t}=R(this,Ue,zp).call(this);return[e/2,t/2]},"#middle"),Xy=u(function(){let{width:e,height:t}=R(this,Ue,zp).call(this);return e/t},"#aspect"),hr=u(function(e){let t=p(this,Ms).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),qy=u(function(e,t){p(this,dn).setOrbit(Tw(p(this,dn).orbit(),p(this,dn).lookHeight(),R(this,Ue,Gp).call(this,e),R(this,Ue,Gp).call(this,t),R(this,Ue,Xy).call(this)))},"#pan"),I1=u(function(e){if(p(this,Ki).stop(),p(this,hi)?.hover(null),e.pointerType==="touch"&&(p(this,Ei).set(e.pointerId,R(this,Ue,hr).call(this,e)),p(this,Ei).size===2)){B(this,Fn,null),R(this,Ue,dr).call(this),B(this,Ti,R(this,Ue,Zu).call(this));return}if(e.isPrimary&&e.button!==2){if(p(this,Ms).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),B(this,Ss,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Fp(e),[n,i]=R(this,Ue,hr).call(this,e),{clientX:r,clientY:o}=e;B(this,Fn,t),B(this,Xl,[n,i]),R(this,Ue,dr).call(this),B(this,eo,window.setTimeout(()=>{B(this,eo,null),p(this,Fn)===t&&!t.dragging()&&p(this,hi)?.menu(n,i,r,o,!0)===!0&&B(this,Fn,null)},ZL))}}},"#down"),dr=u(function(){p(this,eo)!==null&&(window.clearTimeout(p(this,eo)),B(this,eo,null))},"#stopHold"),L1=u(function(e){if(p(this,hi)===null||!p(this,hi).menuOnRightClick()||(e.preventDefault(),p(this,hi).menuOpen()))return;let[t,n]=R(this,Ue,hr).call(this,e);p(this,hi).menu(t,n,e.clientX,e.clientY,!1)&&(R(this,Ue,dr).call(this),B(this,Fn,null))},"#rightClick"),N1=u(function(e){if(p(this,Ei).has(e.pointerId)&&(p(this,Ei).set(e.pointerId,R(this,Ue,hr).call(this,e)),p(this,Ti)!==null)){R(this,Ue,O1).call(this);return}let t=p(this,Ss);if(t!==null&&t.pointerId===e.pointerId){let r=p(this,dn).orbit();p(this,dn).setOrbit(ra({...r,yaw:r.yaw-(e.clientX-t.x)*JL,pitch:r.pitch+(e.clientY-t.y)*C1})),t.x=e.clientX,t.y=e.clientY;return}let n=p(this,Fn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!p(this,Ki).gliding()){let[r,o]=R(this,Ue,hr).call(this,e);p(this,hi)?.hover({x:r,y:o,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;R(this,Ue,dr).call(this);let i=R(this,Ue,hr).call(this,e);R(this,Ue,qy).call(this,p(this,Xl),i),B(this,Xl,i)},"#move"),D1=u(function(e){if(p(this,Ei).delete(e.pointerId),p(this,Ti)!==null){B(this,Ti,p(this,Ei).size<2?null:R(this,Ue,Zu).call(this));return}if(p(this,Ss)?.pointerId===e.pointerId){B(this,Ss,null);return}let t=p(this,Fn);if(!(t===null||t.pointerId!==e.pointerId)){if(B(this,Fn,null),R(this,Ue,dr).call(this),!t.dragging()){let[n,i]=R(this,Ue,hr).call(this,e);p(this,hi)?.click(n,i,e.clientX,e.clientY);return}$i()||p(this,Ki).start(t.releaseVelocity(e.timeStamp))}},"#up"),U1=u(function(e){p(this,Ei).delete(e.pointerId),p(this,Ti)!==null&&B(this,Ti,p(this,Ei).size<2?null:R(this,Ue,Zu).call(this)),p(this,Fn)?.pointerId===e.pointerId&&(B(this,Fn,null),R(this,Ue,dr).call(this)),p(this,Ss)?.pointerId===e.pointerId&&B(this,Ss,null)},"#cancel"),Zu=u(function(){let[e,t]=[...p(this,Ei).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:p(this,dn).orbit()}},"#measurePair"),O1=u(function(){let e=p(this,Ti),t=R(this,Ue,Zu).call(this);e===null||t===null||p(this,dn).setOrbit(ra({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*C1}))},"#twoFingers"),F1=u(function(e){e.preventDefault();let t=p(this,Hp).turned(e,p(this,Qr)?.at??null);t!==0&&(p(this,Ki).stop(),R(this,Ue,B1).call(this,t,R(this,Ue,hr).call(this,e)))},"#wheelTurned"),B1=u(function(e,t){let n=p(this,dn).orbit(),i=p(this,dn).lookHeight(),r=R(this,Ue,Gp).call(this,t),o=R(this,Ue,Xy).call(this),a=p(this,dn).settle(Il(n,e)),l=sa(n,i,r,o),c=sa(a,i,r,o);if(l===null||c===null||a.distance===n.distance){p(this,dn).setOrbit(a);return}p(this,dn).setOrbit({...a,focus:[a.focus[0]+l[0]-c[0],a.focus[1]+l[1]-c[1]]})},"#zoomAbout"),Vp=u(function(e,t){if(e.preventDefault(),p(this,Ti)!==null){B(this,Qr,null);return}if(t==="end"){B(this,Qr,null);return}if(t==="start"){p(this,Ki).stop(),B(this,Fn,null),R(this,Ue,dr).call(this),B(this,Qr,{orbit:p(this,dn).orbit(),at:e.timeStamp});return}let n=p(this,Qr);n!==null&&(n.at=e.timeStamp,p(this,dn).setOrbit(ra({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),u(Yy,"CameraInput");var Wy=Yy,k1=Wy;var jL=["#9a9a9a","#4a4a4a"],Ju=u(s=>{let e=s.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?jL:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),$y=u((s,e)=>s.find(t=>t.id===e)??[...s].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),QL=u(s=>{let{current:e,max:t}=s.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),eN=u((s,e,t,n={},i=()=>0,r=1,o=()=>null)=>{let a=s.units??[],l=$y(a,e),c=l!==null&&l.id===e,h=l===null?null:o(l._),f=t&&s.city?{name:n.cityName?.(s.city)??s.city.name,size:s.city.growth?.size??1,colours:Ju(s.city.player),walled:s.city.walled===!0,disorder:s.city.civilDisorderDeclared===!0}:null,d=l!==null&&(t||c)?{id:l.id,type:l._,kinds:l.__??[],colours:Ju(l.player),count:a.length,active:c,busy:l.busy!==null&&l.busy!==void 0,fortified:(l.improvements??[]).some(({_:m})=>m==="Fortified"),veteran:(l.improvements??[]).some(({_:m})=>m==="Veteran"),health:QL(l),status:(l.busy?n.unitStatus?.(l):null)||null,facing:i(l),size:r,...h===null?{}:{model:h}}:null;return f===null&&d===null?null:{city:f,unit:d,inCity:!!s.city}},"markerFor"),Ky=eN;var W1={step:250,ramp:100,most:2e3},X1={step:125,ramp:50,most:1e3},q1=u(s=>({step:s.step/2,ramp:s.ramp/2,most:s.most/2}),"quicker"),tN=50,z1=.3,G1=1,nN=.05,iN=.02,Zy=u((s,e)=>s.x===e.x&&s.y===e.y,"sameSquare"),V1=u((s,e)=>{let{started:t,from:n,speed:i,rising:r,rise:o,top:a,going:l,stopping:c,fall:h,to:f}=s,d=Math.max(0,e-t);if(d<r)return{along:n+i*d+o*d*d/2,speed:i+o*d};let m=n+(i+a)/2*r;if(d<r+l)return{along:m+a*(d-r),speed:a};let g=m+a*l,_=d-r-l;return _<c?{along:g+a*_-h*_*_/2,speed:a-h*_}:{along:f,speed:0}},"motionAt"),ju=u(s=>s.started+s.rising+s.going+s.stopping,"motionEnds"),H1=u((s,e,t,n,i)=>{let r=Math.max(0,n-e),o=Math.max(1,i.ramp),a=Math.max(1/i.step,i.most>o*2?r/(i.most-o):0),l=a/o;if(r<=0)return{started:s,from:n,speed:0,rising:0,rise:0,top:0,going:0,stopping:0,fall:0,to:n};if(t*t/(2*l)>=r){let x=2*r/t;return{started:s,from:e,speed:t,rising:0,rise:0,top:t,going:0,stopping:x,fall:t/x,to:n}}let c=Math.min(a,Math.sqrt(l*r+t*t/2)),h=Math.abs(c-t)/l,f=c>=t?l:-l,d=c/l,m=(t+c)/2*h,g=c*d/2,_=Math.max(0,(r-m-g)/c);return{started:s,from:e,speed:t,rising:h,rise:f,top:c,going:_,stopping:d,fall:l,to:n}},"plan"),Yl=u((s,e,t)=>t===null?s:s+t*Math.round((e-s)/t),"nearest"),Qu=u((s,e)=>s[0]===e[0]&&s[1]===e[1]?null:Math.atan2(e[0]-s[0],e[1]-s[1]),"wayOf"),Jy=u(s=>s*s*(3-2*s),"eased"),$l=u((s,e,t)=>{let n=e-s-Math.PI*2*Math.round((e-s)/(Math.PI*2));return s+n*t},"turnTowards"),Kl,An,Ai,nh,ih,ot,Y1,$1,Qy,e_,K1,t_,Wp,eh,th,n_,fa,i_=class i_{constructor(e){z(this,ot);z(this,Kl);z(this,An,new Map);z(this,Ai,new Map);z(this,nh,[]);z(this,ih,0);B(this,Kl,e)}walking(e){return p(this,Ai).has(e)}size(){return p(this,An).size}step(e,t,n,i,r,o,a,l=!1){let c=p(this,Ai).get(e),h=c===void 0?void 0:p(this,An).get(c),f=h===void 0?i:R(this,ot,Wp).call(this,h,o),d=h===void 0?0:R(this,ot,th).call(this,h,R(this,ot,eh).call(this,h,o)),m=[...p(this,An).values()].find(g=>g!==h&&(l||!g.flies)&&R(this,ot,Y1).call(this,g,t,n,o)&&R(this,ot,K1).call(this,R(this,ot,Wp).call(this,g,g.stepped),h===void 0?i:R(this,ot,Wp).call(this,h,g.stepped))&&z1*Math.abs(Jy(R(this,ot,th).call(this,g,R(this,ot,eh).call(this,g,o)))-Jy(d))<iN);if(m!==void 0)return h!==void 0&&R(this,ot,e_).call(this,h,e),m.units.push(e),p(this,Ai).set(e,m.id),m.id;if(h!==void 0&&Zy(h.squares[h.squares.length-1],t)){if(h.units.length>1){let g={...h,id:`walk-${++Ui(this,ih)._}`,units:h.units.filter(_=>_!==e),points:[...h.points],squares:[...h.squares]};p(this,An).set(g.id,g),g.units.forEach(_=>p(this,Ai).set(_,g.id)),h.units=[e]}return R(this,ot,Qy).call(this,h,n,r,o,a,l),h.id}return h!==void 0&&R(this,ot,e_).call(this,h,e),R(this,ot,$1).call(this,e,t,n,f,r,o,a,{flies:l,climbed:d})}at(e){let t=[],n=[];return p(this,An).forEach(i=>{let r=R(this,ot,fa).call(this,i,e);if(e>=ju(i.motion)){n.push(r),R(this,ot,t_).call(this,i);return}t.push(r)}),{going:t,ended:n}}dropped(){return p(this,nh).splice(0)}endsAt(e){let t=p(this,Ai).get(e),n=t===void 0?void 0:p(this,An).get(t);return n===void 0?null:ju(n.motion)}nextEnd(){let e=null;return p(this,An).forEach(t=>{let n=ju(t.motion);e=e===null?n:Math.min(e,n)}),e}endWhere(e,t){let n=[];return p(this,An).forEach(i=>{e(i.units)&&(n.push(R(this,ot,fa).call(this,i,Math.max(t,ju(i.motion)))),R(this,ot,t_).call(this,i))}),n}endAll(e){let t=[...p(this,An).values()].map(n=>R(this,ot,fa).call(this,n,Math.max(e,ju(n.motion))));return p(this,An).clear(),p(this,Ai).clear(),t}};Kl=new WeakMap,An=new WeakMap,Ai=new WeakMap,nh=new WeakMap,ih=new WeakMap,ot=new WeakSet,Y1=u(function(e,t,n,i){let r=e.squares.length-1;return r>0&&i-e.stepped<=tN&&Zy(e.squares[r-1],t)&&Zy(e.squares[r],n)},"#justMade"),$1=u(function(e,t,n,i,r,o,a,{flies:l,climbed:c}){let h=`walk-${++Ui(this,ih)._}`,f={id:h,units:[e],from:t,points:[i],squares:[t],stepped:o,motion:H1(o,0,0,0,a),turned:null,flies:l,flown:0,climb:{from:c,at:0}};return p(this,An).set(h,f),p(this,Ai).set(e,h),R(this,ot,Qy).call(this,f,n,r,o,a,l),h},"#setOff"),Qy=u(function(e,t,n,i,r,o){let{u:a,v:l}=p(this,Kl),c=e.points[e.points.length-1],h=c.middle??c.at,{along:f,speed:d}=V1(e.motion,i),m=Math.max(0,Math.floor(f)-1),g=e.points.length>1?R(this,ot,fa).call(this,e,i).facing:null,_=e.points.length-1,x=f-(_-1),b=R(this,ot,eh).call(this,e,i);e.points.length>1&&(e.climb={from:R(this,ot,th).call(this,e,b),at:e.flown+b}),e.flies=o,c.middle!==void 0&&x*Math.hypot(c.middle[0]-c.at[0],c.middle[1]-c.at[1])<.01&&(e.points[_]={at:c.middle,lift:0,middle:c.middle,...c.via===void 0?{}:{via:c.via}}),e.points.splice(0,m),e.squares.splice(0,m),e.flown+=m,e.points.push({at:[Yl(n.at[0],c.at[0],a),Yl(n.at[1],c.at[1],l)],lift:n.lift,...n.middle===void 0?{}:{middle:[Yl(n.middle[0],h[0],a),Yl(n.middle[1],h[1],l)]},...n.via===void 0?{}:{via:n.via}}),e.squares.push(t),e.stepped=i,e.motion=H1(i,f-m,d,e.points.length-1,r),e.turned=null,g!==null&&(e.turned={offset:$l(0,g-R(this,ot,fa).call(this,e,i).facing,1),at:i,over:r.step/2})},"#goOn"),e_=u(function(e,t){e.units=e.units.filter(n=>n!==t),p(this,Ai).delete(t),e.units.length===0&&(p(this,An).delete(e.id),p(this,nh).push(e.id))},"#leave"),K1=u(function(e,t){let{u:n,v:i}=p(this,Kl);return Math.hypot(Yl(e.at[0],t.at[0],n)-t.at[0],Yl(e.at[1],t.at[1],i)-t.at[1])<nN},"#beside"),t_=u(function(e){p(this,An).delete(e.id),e.units.forEach(t=>p(this,Ai).delete(t))},"#end"),Wp=u(function(e,t){let{at:n,lift:i}=R(this,ot,fa).call(this,e,t);return{at:n,lift:i}},"#drawn"),eh=u(function(e,t){return Math.min(e.points.length-1,Math.max(0,V1(e.motion,t).along))},"#along"),th=u(function(e,t){return e.flies?Math.max(0,Math.min(1,e.climb.from+(e.flown+t-e.climb.at)/G1,(e.points.length-1-t)/G1)):0},"#climbed"),n_=u(function(e,t,n){let i=e.points[t],r=e.points[t+1]??i,o=u(x=>x.middle??x.at,"middle");if(r.via===void 0||r.via.length===0)return{at:[i.at[0]+(r.at[0]-i.at[0])*n,i.at[1]+(r.at[1]-i.at[1])*n],way:r===i?null:Qu(o(i),o(r))};let[a,l]=o(r),c=[i.at,...r.via.map(([x,b])=>[a+x,l+b]),r.at],h=c.slice(1).map((x,b)=>Math.hypot(x[0]-c[b][0],x[1]-c[b][1])),f=h.reduce((x,b)=>x+b,0),d=Qu(o(i),o(r)),m=c.slice(1).map((x,b)=>Qu(c[b],x)??d??0),g=c.map((x,b)=>{let v=m[b-1],S=m[b];return v===void 0?S:S===void 0?v:$l(v,S,.5)}),_=Math.min(1,Math.max(0,n))*f;for(let x=0;x<h.length;x++){let b=h[x],v=c[x],S=c[x+1];if(_<=b||x===h.length-1){let M=b===0?0:Math.min(1,_/b);return{at:[v[0]+(S[0]-v[0])*M,v[1]+(S[1]-v[1])*M],way:$l(g[x],g[x+1],M)}}_-=b}return{at:[r.at[0],r.at[1]],way:Qu(o(i),o(r))}},"#stepAt"),fa=u(function(e,t){let{points:n,squares:i,turned:r}=e,o=n.length-1,a=R(this,ot,eh).call(this,e,t),l=Math.min(o-1,Math.floor(a)),c=a-l,h=n[l],f=n[l+1]??h,{at:d,way:m}=R(this,ot,n_).call(this,e,l,c),g=u((M,A)=>M<0||M>=o?null:R(this,ot,n_).call(this,e,M,A).way,"way"),_=u(M=>{let A=g(M,1),E=g(M+1,0);return A===null||E===null?null:$l(0,E-A,1)},"turnAt"),x=m??0,b=Qu(h.middle??h.at,f.middle??f.at),v=(()=>{if(c>.75){let M=_(l);if(M!==null)return x+M*(c-.75)*2;if(l===o-1&&b!==null)return $l(x,b,(c-.75)*4)}else if(c<.25){let M=_(l-1);if(M!==null)return x-M*(.5-c*2);if(l===0&&b!==null)return $l(b,x,c*4)}return x})(),S=r!==null&&t-r.at<r.over?v+r.offset*(1-Math.max(0,t-r.at)/r.over):v;return{id:e.id,units:[...e.units],at:d,lift:h.lift+(f.lift-h.lift)*c,aloft:z1*Jy(R(this,ot,th).call(this,e,a)),facing:S,from:e.from,before:i[o-1]??i[o],to:i[o]}},"#walker"),u(i_,"Walks");var jy=i_,Z1=jy;var sN=u(({kind:s,start:e,duration:t},n)=>{let i=t<=0?1:Math.min(1,Math.max(0,(n-e)/t));return s==="in"?i:1-i},"fadeAt"),ws,Xp,r_=class r_{constructor(){z(this,ws,new Map);z(this,Xp,0)}size(){return p(this,ws).size}add(e,t,n=500){let i=`fade-${++Ui(this,Xp)._}`;return p(this,ws).set(i,{id:i,kind:e,start:t,duration:n}),i}at(e){let t=[],n=[];return p(this,ws).forEach((i,r)=>{if(e>=i.start+i.duration){n.push(r),p(this,ws).delete(r);return}t.push({id:r,kind:i.kind,opacity:sN(i,e)})}),{going:t,ended:n}}end(e){p(this,ws).delete(e)}endAll(){let e=[...p(this,ws).keys()];return p(this,ws).clear(),e}};ws=new WeakMap,Xp=new WeakMap,u(r_,"Fades");var s_=r_,J1=s_;var Es,l_=class l_{constructor(){z(this,Es,new Map)}size(){return p(this,Es).size}trail(e,t,n){let i=p(this,Es).get(e),[r,o]=i?.points??[];if(i===void 0||r===void 0||o===void 0||n-o.time>=1200){p(this,Es).set(e,{points:[{at:t,time:n},{at:t,time:n}]});return}r.at=t,r.time=n;let a=t[0]-o.at[0],l=t[1]-o.at[1],c=Math.hypot(a,l),h=Math.floor(c/.04),[f,d]=o.at,m=o.time;i.points.splice(1,0,...Array.from({length:h},(g,_)=>{let x=(h-_)*.04/c;return{at:[f+a*x,d+l*x],time:m+(n-m)*x}}))}at(e){let t=[],n=[];return p(this,Es).forEach((i,r)=>{if(i.points=i.points.filter(({time:o})=>e-o<1200),i.points.length===0){p(this,Es).delete(r),n.push(r);return}t.push({id:r,points:i.points.map(({at:o,time:a})=>({at:o,age:Math.max(0,e-a)}))})}),{going:t,gone:n}}endAll(){let e=[...p(this,Es).keys()];return p(this,Es).clear(),e}};Es=new WeakMap,u(l_,"Wakes");var a_=l_,o_={start:.03,by:.17,over:.5},rN=.016,oN=.004,j1=u(s=>{let[e]=s,t=[];if(e===void 0)return t;let n=s.map((o,a)=>{let l=s[a-1]??o,c=s[a+1]??o,h=l.at[0]-c.at[0],f=l.at[1]-c.at[1],d=Math.hypot(h,f);return d===0?null:[-f/d,h/d]}),i=s.reduce((o,a,l)=>{let c=s[l-1];return o.push(c===void 0?0:o[l-1]+Math.hypot(a.at[0]-c.at[0],a.at[1]-c.at[1])),o},[]),r=u((o,a)=>{let l=s[o],c=n[o],h=Math.min(1,l.age/1200);if(c==null)return null;let f=o_.start+o_.by*Math.min(1,i[o]/o_.over),d=rN*(1-h),m=[l.at[0]-e.at[0]+c[0]*f*a,l.at[1]-e.at[1]+c[1]*f*a];return[[m[0]-c[0]*d/2,m[1]-c[1]*d/2],[m[0]+c[0]*d/2,m[1]+c[1]*d/2]]},"edges");for(let o=0;o+1<s.length;o++)[1,-1].forEach(a=>{let l=r(o,a),c=r(o+1,a);if(l===null||c===null)return;let[h,f]=l,[d,m]=c;[h,d,f,f,d,m].forEach(([g,_])=>t.push(g,oN,_))});return t},"wakeShape"),Q1=a_;var m_={reach:200,back:300,fade:600},eE=u(s=>({reach:s.reach/2,back:s.back/2,fade:s.fade/2}),"quickerBattle"),g_=.45,sh=u(s=>s.start+s.pace.reach,"blowAt"),c_=u(s=>sh(s)+(s.won?Math.max(s.pace.back,s.pace.fade):s.pace.fade),"battleEnds"),u_=u(s=>Math.min(1,Math.max(0,s)),"clamp"),aN=u(s=>s*s,"easeIn"),lN=u(s=>s*s*(3-2*s),"easeInOut"),cN=u((s,e)=>{let{reach:t,back:n,fade:i}=s.pace,r=e-sh(s),o=1-u_(i<=0?1:r/i);return r<0?{reach:aN(u_(t<=0?1:(e-s.start)/t)),attacker:1,fallen:1}:s.won?{reach:1-lN(u_(n<=0?1:r/n)),attacker:1,fallen:o}:{reach:1,attacker:o,fallen:0}},"battleAt"),h_=u((s,e)=>s.x===e.x&&s.y===e.y,"sameSquare"),uN=u((s,e)=>s.attacker===e.attacker||s.attacker===e.defender,"waitsFor"),fn,Ts,qp,As,f_,p_,tE,x_=class x_{constructor(){z(this,As);z(this,fn,[]);z(this,Ts,new Set);z(this,qp,0)}size(){return p(this,fn).length}attacking(e){return p(this,fn).some(t=>t.attacker===e)}fighting(e){return p(this,fn).some(t=>t.attacker===e||t.defender===e)}awaitingBlow(e){return p(this,fn).find(t=>!p(this,Ts).has(t.id)&&h_(t.defenderSquare,e))??null}add(e,t,n,i=t){let r={...e,id:`battle-${++Ui(this,qp)._}`,start:R(this,As,f_).call(this,e,n,p(this,fn),Math.max(t,i)),notBefore:i,pace:n};return p(this,fn).push(r),r}at(e){let t=[],n=[],i=[],r=new Set;return p(this,fn).forEach(o=>{if(e>=sh(o)&&!p(this,Ts).has(o.id)&&(p(this,Ts).add(o.id),n.push(o)),e>=c_(o)){i.push(o);return}t.push(...R(this,As,tE).call(this,o,e,r))}),R(this,As,p_).call(this,i),{going:t,struck:n,ended:i}}endWhere(e,t){let n=p(this,fn).filter(e),i=p(this,fn).filter((o,a)=>n.includes(o)||!p(this,Ts).has(o.id)&&n.some(l=>p(this,fn).indexOf(l)>a&&h_(l.defenderSquare,o.defenderSquare))),r=i.filter(o=>!p(this,Ts).has(o.id));return r.forEach(o=>p(this,Ts).add(o.id)),R(this,As,p_).call(this,i),i.length>0&&p(this,fn).forEach((o,a)=>{o.start>t&&(o.start=R(this,As,f_).call(this,o,o.pace,p(this,fn).slice(0,a),Math.max(t,o.notBefore)))}),{struck:r,ended:i}}busyUntil(e){return p(this,fn).filter(({attacker:t})=>e.includes(t)).reduce((t,n)=>Math.max(t??0,c_(n)),null)}endAll(e){return this.endWhere(()=>!0,e)}};fn=new WeakMap,Ts=new WeakMap,qp=new WeakMap,As=new WeakSet,f_=u(function(e,t,n,i){return n.reduce((r,o)=>uN(o,e)?Math.max(r,c_(o)):h_(o.defenderSquare,e.defenderSquare)?Math.max(r,sh(o)-t.reach):r,i)},"#startOf"),p_=u(function(e){e.length!==0&&(B(this,fn,p(this,fn).filter(t=>!e.includes(t))),e.forEach(t=>p(this,Ts).delete(t.id)))},"#take"),tE=u(function(e,t,n){let{reach:i,attacker:r,fallen:o}=cN(e,t),{from:a,edge:l,fallsAt:c}=e,h=[],f=!n.has(e.attacker);return n.add(e.attacker),r>0&&f&&h.push({id:e.id,battle:e.id,unit:e.attacker,fallen:!1,at:[a.at[0]+(l[0]-a.at[0])*i,a.at[1]+(l[1]-a.at[1])*i],lift:a.lift*(1-i),facing:e.facing,opacity:r}),e.won&&t>=sh(e)&&o>0&&h.push({id:`${e.id}-fallen`,battle:e.id,unit:e.defender,fallen:!0,at:[c.at[0],c.at[1]],lift:c.lift,facing:e.defenderFacing,opacity:o}),h},"#fighters"),u(x_,"Battles");var d_=x_,nE=d_;var hN=1,dN=.04,fN=12,pN=u((s,e,t,n,i,{water:r=0,ceiling:o=hN}={})=>{let{from:a,direction:l}=cy(s,e,t,n),[c,h,f]=a,[d,m,g]=l;if(m>-1e-6)return null;let _=u(y=>[c+d*y,h+m*y,f+g*y],"at"),x=u(y=>{let[w,I,P]=_(y);return I-Math.max(r,i(w,P))},"above"),b=Math.max(0,(h-o)/-m),v=(h-r)/-m,S=dN/Math.max(1e-6,Math.hypot(d,g)),M=b;for(let y=b;;y=Math.min(v,y+S)){if(x(y)<=0){let w=M,I=y;for(let O=0;O<fN;O++){let X=(w+I)/2;x(X)>0?w=X:I=X}let[P,,D]=_(I);return[P,D]}if(y>=v)break;M=y}let[A,,E]=_(v);return[A,E]},"pickGround"),iE=pN;var Yp=4,to,rh,pa,ma,$n,Zl,no,fr,oh,ah,lh,Zi,$p,sE,y_,__=class __{constructor(e,t,n,i,r){z(this,Zi);z(this,to);z(this,rh);z(this,pa);z(this,ma);z(this,$n);z(this,Zl);z(this,no);z(this,fr);z(this,oh);z(this,ah);z(this,lh,u(e=>{let t=p(this,to).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,i=t.height>0?(e.clientY-t.top)/t.height:0;p(this,ah).call(this,n*p(this,$n),i*p(this,Zl))},"#click"));B(this,to,e),B(this,pa,t),B(this,ma,n),B(this,$n,t.period().u),B(this,Zl,i),B(this,ah,r),B(this,fr,document.createElement("canvas"));let{v:o}=t.period();B(this,no,o),B(this,oh,[[0,0],[-p(this,$n),0],...o===null?[]:[[0,-o],[-p(this,$n),-o]]]);let a=Math.max(1,Math.round(p(this,$n)*Yp)),l=Math.max(1,Math.round(p(this,Zl)*Yp));[e,p(this,fr)].forEach(c=>{c.width=a,c.height=l}),B(this,rh,e.getContext("2d")),e.addEventListener("click",p(this,lh))}dispose(){p(this,to).removeEventListener("click",p(this,lh))}redraw(){let e=p(this,fr).getContext("2d");if(e===null)return;let t=p(this,ma).width(),n=p(this,ma).height(),i=[];e.fillStyle="#000000",e.fillRect(0,0,p(this,fr).width,p(this,fr).height);for(let r=0;r<n;r++)for(let o=0;o<t;o++){let a=p(this,ma).get(o,r),l=a.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=Wo(l).colour,p(this,oh).forEach(([f,d])=>{R(this,Zi,sE).call(this,e,o,r,f,d),e.fill()});let[c,h]=p(this,pa).centre(o,r);if(a.city)i.push([c,h,Ju(a.city.player)[0],2.2]);else if((a.units??[]).length>0){let f=$y(a.units,null);f!==null&&i.push([c,h,Ju(f.player)[0],1.4])}}i.forEach(([r,o,a,l])=>R(this,Zi,y_).call(this,r,o).forEach(([c,h])=>{e.fillStyle="#000000",e.fillRect(c-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=a,e.fillRect(c-l,h-l,l*2,l*2)}))}show(e,t){let n=p(this,rh);if(n===null)return;if(n.clearRect(0,0,p(this,to).width,p(this,to).height),n.drawImage(p(this,fr),0,0),t!==null){let[h,f]=p(this,pa).centre(t.x,t.y);n.fillStyle="#ffffff",R(this,Zi,y_).call(this,h,f).forEach(([d,m])=>n.fillRect(d-2,m-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let i=p(this,no),r=Math.min(...e.map(([h])=>h)),o=Math.min(...e.map(([,h])=>h)),a=-p(this,$n)*Math.floor(r/p(this,$n)),l=i===null?0:-i*Math.floor(o/i);(i===null?[0]:[-i,0,i]).forEach(h=>[-p(this,$n),0,p(this,$n)].forEach(f=>{n.beginPath(),e.forEach(([d,m],g)=>{let[_,x]=R(this,Zi,$p).call(this,d+a+f,m+l+h);g===0?n.moveTo(_,x):n.lineTo(_,x)}),n.closePath(),n.stroke()}))}};to=new WeakMap,rh=new WeakMap,pa=new WeakMap,ma=new WeakMap,$n=new WeakMap,Zl=new WeakMap,no=new WeakMap,fr=new WeakMap,oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,Zi=new WeakSet,$p=u(function(e,t){return[e*Yp,t*Yp]},"#px"),sE=u(function(e,t,n,i=0,r=0){e.beginPath(),p(this,pa).outline(t,n).forEach(([o,a],l)=>{let[c,h]=R(this,Zi,$p).call(this,o+i,a+r);l===0?e.moveTo(c,h):e.lineTo(c,h)}),e.closePath()},"#outline"),y_=u(function(e,t){return(p(this,no)===null?[0]:[-p(this,no),0,p(this,no)]).flatMap(i=>[-p(this,$n),0,p(this,$n)].map(r=>R(this,Zi,$p).call(this,e+r,t+i)))},"#everywhere"),u(__,"Minimap3D");var b_=__,rE=b_;var mN=u(s=>Object.entries(s.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),oE=u(s=>{let e=mN(s).sort((n,i)=>n._.charCodeAt(0)-i._.charCodeAt(0)).flatMap(({_:n,value:i})=>Array.from({length:i},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,i)=>({_:n,column:i%t,row:Math.floor(i/t)}))}},"tileYieldGrid");var aE=u((s,e)=>(s.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===s.x&&n===s.y)?.yields)??s.yields??[],"squareYields"),lE=u(s=>s.city??s.workedBy??null,"squareCity");var gN=.9,xN=u(s=>{let{columns:e,icons:t}=oE(s),n=Math.min(e,t.length),i=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:r,column:o,row:a})=>({_:r,right:o-(n-1)/2,up:(i-1)/2-a}))}},"yieldSlots"),bN=u((s,e)=>gN*e/Math.hypot(s,2),"yieldIconSize"),cE=u((s,e)=>{let[t,n]=s.centre(0,0);return Math.min(...e.edgeDirections().map(i=>{let[r,o]=e.offset(i,0,0),[a,l]=s.centre(r,o);return Math.hypot(a-t,l-n)}))},"innerOf"),uE=u(({at:s,yields:e},t)=>{let{columns:n,slots:i}=xN(e);return i.length===0?null:{at:s,size:bN(n,t),slots:i}},"laidYields"),hE=u(s=>{let e=[...s],t=e.reduce((o,{slots:a})=>o+a.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},i=new Map,r=0;return e.forEach(({at:o,size:a,slots:l})=>{l.forEach(({_:c,right:h,up:f})=>{let d=i.get(c);d===void 0&&(d=n.names.push(c)-1,i.set(c,d)),n.anchors[r*3]=o[0],n.anchors[r*3+1]=o[1],n.anchors[r*3+2]=o[2],n.slots[r*2]=h,n.slots[r*2+1]=f,n.sizes[r]=a,n.cells[r]=d,r++})}),n},"yieldMesh");var dE=u((s,{orbit:e,look:t,width:n,height:i,period:r,reach:o})=>{let a=n/i,l=Ll(e,t),c=[(e.focus[0]-l[0])/e.distance,(t-l[1])/e.distance,(e.focus[1]-l[2])/e.distance],{near:h,far:f}=lr(e.distance,r),d=Ap(e.focus,xy(e,r),r),m=u(([_,x])=>[(_+1)/2*n,(1-x)/2*i],"onScreen"),g=[];return s.forEach(({key:_,centre:x,outline:b})=>d.forEach(([v,S])=>{let M=u(([O,X,U])=>[O+v,X,U+S],"moved"),A=M(x),E=(A[0]-l[0])*c[0]+(A[1]-l[1])*c[1]+(A[2]-l[2])*c[2];if(E>f)return;let y=Nl(e,t,A,a);if(y===null)return;let[w]=m(y);if(w<-o||w>n+o)return;let I=b.map(O=>Nl(e,t,M(O),a));if(I.some(O=>O===null))return;let P=Math.max(...I.map(O=>m(O)[1]));if(P<-o||P>i)return;let D=Math.min(1,Math.max(0,(E-h)/(f-h)));g.push({key:_,x:w,y:P,clear:1-D*D*(3-2*D)})})),g.sort((_,x)=>_.y-x.y)},"bannerPlaces");var yN=10,_N=4e3,pE=u(s=>s-Math.PI*2*Math.round(s/(Math.PI*2)),"shortTurn"),vN=350,MN=2e3,SN=8,mE=u(s=>({...s,...s.hitPoints?{hitPoints:{...s.hitPoints}}:{},...s.defence?{defence:{...s.defence}}:{},...s.improvements?{improvements:[...s.improvements]}:{}}),"keptUnit"),gE=u(s=>Object.fromEntries(Object.entries(s).map(([e,t])=>[e,Array.isArray(t)?[...t]:t!==null&&typeof t=="object"?{...t}:t])),"copied"),wN=u(s=>s&&{...s,...s.growth?{growth:gE(s.growth)}:{},...s.build?{build:gE(s.build)}:{},...s.yields?{yields:s.yields.map(e=>({...e}))}:{}},"keptCity"),EN=500,TN=.25,AN=400,RN=.5,kt,dh,fh,$e,wt,ya,ph,mh,ft,Ut,Bn,Ql,gh,_a,oo,ec,xh,bh,di,tc,Ri,pn,ji,va,Ma,nc,Kn,pr,Ci,ao,ic,sc,sn,fi,lo,Ps,mr,Is,gr,yh,co,uo,pi,Sa,rc,Pi,mi,Ii,Ls,Ns,_h,vh,Mh,Ds,Us,xr,br,gi,oc,ac,yr,Li,Qi,lc,Sh,cc,ho,wh,wa,Os,Eh,_r,Ea,fo,Ta,uc,es,Th,Ni,po,hc,Ah,dc,Rh,mo,Fs,Aa,Ra,Ch,Ph,fc,Bs,pc,Ih,mc,gc,vr,L,xE,M_,bE,yE,Jl,S_,io,_E,vE,jl,Kp,w_,E_,so,T_,Zp,A_,ch,R_,C_,ME,SE,Jp,uh,P_,wE,jp,EE,TE,AE,Qp,RE,I_,CE,ga,em,PE,IE,LE,tm,xa,nm,L_,NE,DE,N_,UE,D_,ro,OE,U_,Rs,Cs,hh,FE,BE,O_,Ji,kE,im,zE,sm,F_,B_,k_,GE,VE,HE,WE,ba,z_,XE,qE,G_,Yt,YE,$E,V_,H_=class H_{constructor(e,t=zw){z(this,L);z(this,kt);z(this,dh);z(this,fh,[]);z(this,$e);z(this,wt);z(this,ya,null);z(this,ph,0);z(this,mh,"");z(this,ft);z(this,Ut,null);z(this,Bn,null);z(this,Ql);z(this,gh);z(this,_a);z(this,oo,null);z(this,ec,null);z(this,xh);z(this,bh,!1);z(this,di);z(this,tc);z(this,Ri,new Map);z(this,pn);z(this,ji,new Map);z(this,va,new Map);z(this,Ma,new Map);z(this,nc,new Map);z(this,Kn,new Map);z(this,pr,new Set);z(this,Ci,new Map);z(this,ao,0);z(this,ic,new Map);z(this,sc,new Map);z(this,sn,new nE);z(this,fi,new J1);z(this,lo,new Q1);z(this,Ps,new Map);z(this,mr,new Map);z(this,Is,new Map);z(this,gr,new Map);z(this,yh,!1);z(this,co,new Map);z(this,uo,null);z(this,pi,new Map);z(this,Sa,new Map);z(this,rc,new Set);z(this,Pi,new Set);z(this,mi);z(this,Ii,null);z(this,Ls,null);z(this,Ns,null);z(this,_h,u(()=>{R(this,L,ga).call(this)&&B(this,Ns,null),R(this,L,em).call(this)},"#pressed"));z(this,vh,u(e=>{let t=e.target;e.ctrlKey||e.metaKey||e.altKey||["Shift","Control","Alt","Meta","CapsLock"].includes(e.key)||t!==null&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName))||R(this,L,em).call(this)},"#keyed"));z(this,Mh);z(this,Ds,null);z(this,Us,null);z(this,xr,!1);z(this,br);z(this,gi,u(()=>{let e=p(this,Us);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),B(this,Us,null),document.removeEventListener("keydown",p(this,gi),!0),e.open&&p(this,di).endTooltip(p(this,kt)))},"#endHover"));z(this,oc,null);z(this,ac,!0);z(this,yr,new Map);z(this,Li);z(this,Qi,new Map);z(this,lc,!1);z(this,Sh,!1);z(this,cc,"");z(this,ho,new Map);z(this,wh,null);z(this,wa,[]);z(this,Os,null);z(this,Eh,u(()=>{},"#stopRestyled"));z(this,_r,null);z(this,Ea,new Map);z(this,fo,new Map);z(this,Ta,[]);z(this,uc,0);z(this,es,null);z(this,Th,null);z(this,Ni,!0);z(this,po);z(this,hc,new Map);z(this,Ah,u(e=>p(this,hc).get(e)?.id??null,"#modelOf"));z(this,dc,!1);z(this,Rh,u(()=>{},"#stopUnitSize"));z(this,mo,!1);z(this,Fs,!0);z(this,Aa,!1);z(this,Ra,new Map);z(this,Ch);z(this,Ph,u(()=>{},"#stopArtChanged"));z(this,fc,!1);z(this,Bs);z(this,pc);z(this,Ih,"");z(this,mc,u(()=>R(this,L,V_).call(this),"#resizeHandler"));z(this,gc,null);z(this,vr,!1);B(this,kt,e.mapCanvas),B(this,dh,e.coveredBy),B(this,Bs,e.art),B(this,Li,e.cityBanners??null),B(this,tc,{cityName:e.cityName,unitStatus:e.unitStatus}),B(this,po,ny*(e.unitSize?.get()??1)),B(this,pc,e.art.id()),this.world=e.world,B(this,$e,new E1(e.world)),p(this,$e).keepCities((i,r)=>{let o=`${i},${r}`;for(let a of p(this,pi).values())if(a.square===o)return a.city}),B(this,pn,new Z1(p(this,$e).layout.period())),B(this,mi,e.walks),B(this,Ch,cE(p(this,$e).layout,e.world.topology())),B(this,Ta,e.world.tiles()),B(this,uc,p(this,Ta).length),B(this,gh,e.cameraDistance),B(this,xh,e.lockVerticalEdges);let n=e.cameraDistance.get();if(B(this,ft,R(this,L,Rs).call(this,{...ww(p(this,$e).layout.centre(0,0)),...n===null?{}:{distance:n}})),B(this,_a,p(this,ft).distance),this.portal=new rv(e,{centre:u(()=>R(this,L,OE).call(this),"centre"),centreOn:u((i,r)=>R(this,L,IE).call(this,i,r),"centreOn"),changed:u(()=>{B(this,ft,R(this,L,Rs).call(this,p(this,ft))),R(this,L,Yt).call(this)},"changed"),visible:u((i,r,o)=>R(this,L,xa).call(this,i,r,o),"visible")}),B(this,wt,t(e.mapCanvas,{period:p(this,$e).layout.period(),ground:p(this,$e).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&B(this,oc,new rE(e.minimapCanvas,p(this,$e).layout,e.world,p(this,$e).extentV(),(i,r)=>{B(this,Ns,null),R(this,L,hh).call(this,{...p(this,Ut)?.to??p(this,ft),focus:[i,r]})})),e.debug&&e.mapCanvas.parentElement&&(B(this,ya,R(this,L,YE).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),p(this,Li)!==null&&e.mapCanvas.parentElement){let i=document.createElement("canvas");i.className="map3d-banners",i.setAttribute("aria-hidden","true"),Object.assign(i.style,{left:"0",pointerEvents:"none",position:"absolute",top:"0"}),e.mapCanvas.after(i),B(this,Os,i)}else B(this,Li,null);B(this,cc,R(this,L,sm).call(this)),p(this,$e).queueAll(...R(this,L,ro).call(this)),R(this,L,ba).call(this),this.portal.on("activate-unit",i=>e.activateUnit(i)),B(this,di,e.squares),B(this,br,e.playerId),B(this,Mh,e.transport),B(this,Ql,new k1(e.mapCanvas,{orbit:u(()=>p(this,ft),"orbit"),lookHeight:u(()=>p(this,Bn)??0,"lookHeight"),setOrbit:u(i=>this.setOrbit(i),"setOrbit"),settle:u(i=>R(this,L,Rs).call(this,i),"settle")},{click:u((i,r)=>R(this,L,NE).call(this,i,r),"click"),menu:u((i,r,o,a,l)=>R(this,L,DE).call(this,i,r,o,a,l),"menu"),menuOnRightClick:u(()=>p(this,di).menuOnRightClick(),"menuOnRightClick"),menuOpen:u(()=>p(this,di).menuOpen(),"menuOpen"),hover:u(i=>R(this,L,UE).call(this,i),"hover")})),window.addEventListener("resize",p(this,mc)),document.addEventListener("keydown",p(this,vh),!0),e.mapCanvas.addEventListener("pointerdown",p(this,_h),!0),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(B(this,gc,new ResizeObserver(p(this,mc))),p(this,gc).observe(e.mapCanvas.parentElement)),R(this,L,V_).call(this),R(this,L,Yt).call(this),B(this,Rh,e.unitSize?.onChange(()=>{let i=ny*(e.unitSize?.get()??1);i!==p(this,po)&&!p(this,vr)&&(B(this,po,i),R(this,L,ba).call(this),R(this,L,Yt).call(this))})??(()=>{})),B(this,Ph,e.artChanged?.(()=>{p(this,vr)||(B(this,Fs,!0),R(this,L,F_).call(this))})??(()=>{})),B(this,Eh,p(this,Li)?.restyled(()=>{p(this,vr)||R(this,L,F_).call(this)})??(()=>{})),e.models?.forEach(({url:i},r)=>R(this,L,xE).call(this,i,r))}land(){return p(this,$e)}orbit(){return p(this,ft)}moving(){return p(this,Ut)!==null||p(this,Ql).moving()}setOrbit(e){p(this,gi).call(this),B(this,Ut,null),B(this,ft,R(this,L,Rs).call(this,e)),R(this,L,Yt).call(this)}activeUnit(){return{unit:p(this,es),pendingTile:p(this,Th)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=p(this,Ut)?.to??p(this,ft);R(this,L,hh).call(this,{...t,yaw:t.yaw+e*ly},R(this,L,M_).call(this)+e*ly)}heading(){return{turn:(p(this,Ut)?.to??p(this,ft)).yaw,directions:ov(p(this,$e).layout,this.world.topology())}}faceNorth(){R(this,L,hh).call(this,{...p(this,Ut)?.to??p(this,ft),yaw:0},pE(-p(this,ft).yaw))}debugViewModes(){return[]}dispose(){R(this,L,G_).call(this,!0),B(this,vr,!0),p(this,pn).endAll(0),p(this,sn).endAll(0),p(this,fi).endAll(),p(this,Is).clear(),p(this,gr).clear(),p(this,co).clear(),B(this,uo,null),p(this,Ps).clear(),p(this,mr).clear(),p(this,pi).clear(),p(this,Sa).clear(),p(this,Pi).clear(),p(this,Kn).clear(),p(this,pr).clear(),p(this,Ci).clear(),document.removeEventListener("keydown",p(this,vh),!0),p(this,kt).removeEventListener("pointerdown",p(this,_h),!0),p(this,Rh).call(this),p(this,Ph).call(this),p(this,Eh).call(this),p(this,Os)?.remove(),p(this,Qi).clear(),p(this,ho).clear(),p(this,gi).call(this),p(this,Ql).dispose(),p(this,oc)?.dispose(),window.removeEventListener("resize",p(this,mc)),p(this,gc)?.disconnect(),p(this,_r)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(p(this,_r)),B(this,_r,null),p(this,ya)?.remove(),p(this,wt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=p(this,Ds);e!==null&&(B(this,Ds,null),p(this,kt).classList.remove("picking-tile"),e.window?.close())}flush(){R(this,L,O_).call(this),R(this,L,Yt).call(this)}mapEvent(e){if(e.kind==="moved"){R(this,L,yE).call(this,e.unit,e.from,e.to),R(this,L,tm).call(this,e.unit.id,e.from,e.to);return}R(this,L,tm).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),R(this,L,tm).call(this,e.defender.id,e.defender.tile,e.attacker.tile),R(this,L,bE).call(this,e)}measureCovered(){let e=p(this,kt).getBoundingClientRect();B(this,fh,p(this,dh).map(t=>{let n=t.getBoundingClientRect(),i=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,i.left,e.left)-e.left,top:Math.max(n.top,i.top,e.top)-e.top,right:Math.min(n.right,i.right,e.right)-e.left,bottom:Math.min(n.bottom,i.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:i,bottom:r})=>i>t&&r>n))}pickTile(e,t,n){this.endPicking();let i={accept:e,onPick:t,window:null};B(this,Ds,i),p(this,kt).classList.add("picking-tile"),i.window=p(this,di).prompt(n,()=>{p(this,Ds)===i&&(B(this,Ds,null),p(this,kt).classList.remove("picking-tile"))})}picking(){return p(this,Ds)!==null}queueTile(e){let t=`${e.x},${e.y}`;p(this,Ea).set(t,e),p(this,ic).set(t,++Ui(this,ao)._)}redrawArt(){let e=p(this,Bs).id();return e===p(this,pc)?"unchanged":(B(this,pc,e),B(this,Fs,!0),"redrawn")}releaseTiles(){let e=p(this,yh)&&R(this,L,jp).call(this);e&&p(this,Ea).size>0&&p(this,uo)===null&&B(this,uo,new Set([...p(this,mr).keys(),...p(this,ji).keys()])),p(this,Ea).forEach((t,n)=>{let i=p(this,ic).get(n)??0;e&&!p(this,co).has(n)&&p(this,co).set(n,p(this,Ps).get(n)??{units:[],shown:null,ringed:!1,inCity:!1}),p(this,fo).set(n,t),p(this,sc).set(n,i),p(this,pi).forEach(r=>{r.square===n&&i>r.after&&(r.patched=!0)})}),p(this,Ea).clear(),p(this,ic).clear(),p(this,fo).size>0&&R(this,L,Yt).call(this)}setActiveUnit(e,t){let n=p(this,es)?.tile;if(B(this,es,e),B(this,Th,t??null),R(this,L,ga).call(this)&&R(this,L,PE).call(this)&&R(this,L,em).call(this),R(this,L,ga).call(this)){R(this,L,Yt).call(this);return}B(this,Ns,null);let i=p(this,Ls);B(this,Ii,e?.id??null),B(this,Ls,e?.tile??null),[n,i,e?.tile].forEach(r=>{r&&R(this,L,Ji).call(this,r.x,r.y)}),R(this,L,Yt).call(this)}setWaiting(e){B(this,fc,e),e&&p(this,gi).call(this)}showActiveUnit(e){p(this,Ni)||(B(this,Ni,!0),p(this,$e).showTowns(!0,...R(this,L,ro).call(this)),R(this,L,ba).call(this),R(this,L,Yt).call(this))}shown(){return{units:p(this,Ni),yields:p(this,mo),waiting:p(this,fc)}}tilesPending(){return p(this,fo).size}toggleUnits(){B(this,Ni,!p(this,Ni)),p(this,$e).showTowns(p(this,Ni),...R(this,L,ro).call(this)),R(this,L,ba).call(this),B(this,xr,!0),R(this,L,Yt).call(this)}toggleYields(){B(this,mo,!p(this,mo)),B(this,Fs,!0),B(this,xr,!0),R(this,L,Yt).call(this)}zoomBy(e){p(this,gi).call(this),B(this,ft,R(this,L,Rs).call(this,Il(p(this,ft),e))),p(this,Ut)!==null&&(p(this,Ut).from=R(this,L,Rs).call(this,Il(p(this,Ut).from,e)),p(this,Ut).to=R(this,L,Rs).call(this,Il(p(this,Ut).to,e))),R(this,L,Yt).call(this)}};kt=new WeakMap,dh=new WeakMap,fh=new WeakMap,$e=new WeakMap,wt=new WeakMap,ya=new WeakMap,ph=new WeakMap,mh=new WeakMap,ft=new WeakMap,Ut=new WeakMap,Bn=new WeakMap,Ql=new WeakMap,gh=new WeakMap,_a=new WeakMap,oo=new WeakMap,ec=new WeakMap,xh=new WeakMap,bh=new WeakMap,di=new WeakMap,tc=new WeakMap,Ri=new WeakMap,pn=new WeakMap,ji=new WeakMap,va=new WeakMap,Ma=new WeakMap,nc=new WeakMap,Kn=new WeakMap,pr=new WeakMap,Ci=new WeakMap,ao=new WeakMap,ic=new WeakMap,sc=new WeakMap,sn=new WeakMap,fi=new WeakMap,lo=new WeakMap,Ps=new WeakMap,mr=new WeakMap,Is=new WeakMap,gr=new WeakMap,yh=new WeakMap,co=new WeakMap,uo=new WeakMap,pi=new WeakMap,Sa=new WeakMap,rc=new WeakMap,Pi=new WeakMap,mi=new WeakMap,Ii=new WeakMap,Ls=new WeakMap,Ns=new WeakMap,_h=new WeakMap,vh=new WeakMap,Mh=new WeakMap,Ds=new WeakMap,Us=new WeakMap,xr=new WeakMap,br=new WeakMap,gi=new WeakMap,oc=new WeakMap,ac=new WeakMap,yr=new WeakMap,Li=new WeakMap,Qi=new WeakMap,lc=new WeakMap,Sh=new WeakMap,cc=new WeakMap,ho=new WeakMap,wh=new WeakMap,wa=new WeakMap,Os=new WeakMap,Eh=new WeakMap,_r=new WeakMap,Ea=new WeakMap,fo=new WeakMap,Ta=new WeakMap,uc=new WeakMap,es=new WeakMap,Th=new WeakMap,Ni=new WeakMap,po=new WeakMap,hc=new WeakMap,Ah=new WeakMap,dc=new WeakMap,Rh=new WeakMap,mo=new WeakMap,Fs=new WeakMap,Aa=new WeakMap,Ra=new WeakMap,Ch=new WeakMap,Ph=new WeakMap,fc=new WeakMap,Bs=new WeakMap,pc=new WeakMap,Ih=new WeakMap,mc=new WeakMap,gc=new WeakMap,vr=new WeakMap,L=new WeakSet,xE=u(function(e,t){p(this,wt).loadModels?.(e,(n,i)=>{if(p(this,vr))return;let r=i.filter(o=>(p(this,hc).get(o)?.rank??1/0)>=t);r.length!==0&&(r.forEach(o=>p(this,hc).set(o,{id:n,rank:t})),B(this,dc,!0),R(this,L,Yt).call(this))}).catch(n=>console.warn("The 3D map's models couldn't be loaded:",n))},"#loadModels"),M_=u(function(){let e=p(this,Ut);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),bE=u(function({attacker:e,defender:t,winner:n}){let i=p(this,mi)?.speed()??"normal",r=performance.now();if(typeof requestAnimationFrame!="function"||$i()||i==="off"||e.player!==p(this,br)&&t.player!==p(this,br)&&!(p(this,mi)?.rivals()??!0)||!R(this,L,xa).call(this,e.tile.x,e.tile.y,-.5)&&!R(this,L,xa).call(this,t.tile.x,t.tile.y,-.5))return;let o=this.world.get(e.tile.x,e.tile.y).units.find(({id:y})=>y===e.id),a=`${t.tile.x},${t.tile.y}`,l=this.world.get(t.tile.x,t.tile.y),c=[...p(this,pi).values()].filter(({square:y,patched:w})=>y===a&&!w).at(-1),h=c===void 0?l.units.filter(({id:y})=>!p(this,Pi).has(y)).map(mE):c.units.filter(({id:y})=>!(c.won&&y===c.defender));if(p(this,Pi).has(e.id)||!h.some(({id:y})=>y===t.id))return;let f=p(this,sn).busyUntil([e.id,t.id]);f!==null&&f-r>MN&&R(this,L,uh).call(this,p(this,sn).endWhere(y=>y.attacker===e.id||y.attacker===t.id,r)),R(this,L,S_).call(this,e.id);let[d,m]=p(this,$e).layout.centre(e.tile.x,e.tile.y),[g,_]=p(this,$e).layout.centre(t.tile.x,t.tile.y),{u:x,v:b}=p(this,$e).layout.period(),v=u((y,w)=>w===null?y:y-w*Math.round(y/w),"short"),S=v(g-d,x),M=v(_-m,b),A=`${e.tile.x},${e.tile.y}`,E=p(this,sn).add({attacker:e.id,defender:t.id,attackerSquare:e.tile,defenderSquare:t.tile,won:n==="attacker",from:R(this,L,Jl).call(this,e.tile),edge:[d+S*g_,m+M*g_],fallsAt:R(this,L,Jl).call(this,t.tile),facing:p(this,Ri).get(e.id)??Math.atan2(S,M),defenderFacing:p(this,Ri).get(t.id)??Math.atan2(-S,-M)},r,i==="fast"?eE(m_):m_,p(this,pn).endsAt(e.id)??r);p(this,pi).set(E.id,{square:a,city:c?.city??wN(l.city),units:h,after:p(this,ao),won:n==="attacker",defender:t.id,patched:!1}),o!==void 0&&p(this,ji).set(e.id,o),[e.id,t.id].forEach(y=>p(this,Ci).set(y,{squares:[A,a],after:p(this,ao)})),R(this,L,Ji).call(this,e.tile.x,e.tile.y),R(this,L,Ji).call(this,t.tile.x,t.tile.y),R(this,L,Yt).call(this)},"#fight"),yE=u(function(e,t,n){let i=p(this,mi)?.speed()??"normal";if(e.id===p(this,Ii)&&B(this,Ls,n),typeof requestAnimationFrame!="function"||$i()||i==="off")return;if(e.player!==p(this,br)&&p(this,sn).attacking(e.id)){p(this,Ci).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,ao)});return}R(this,L,uh).call(this,p(this,sn).endWhere(({attacker:f,defender:d})=>f===e.id||d===e.id,performance.now()));let r=p(this,pn).walking(e.id),o=this.world.get(t.x,t.y).units.find(({id:f})=>f===e.id)??(R(this,L,io).call(this,e.id)?p(this,ji).get(e.id):void 0),a=e.player===p(this,br);if(o===void 0||!a&&!r&&(!(p(this,mi)?.rivals()??!0)||!R(this,L,xa).call(this,t.x,t.y,-.5)&&!R(this,L,xa).call(this,n.x,n.y,-.5)))return;let l=a?W1:X1;p(this,ji).set(e.id,o),p(this,Ci).set(e.id,{squares:[`${t.x},${t.y}`,`${n.x},${n.y}`],after:p(this,ao)}),R(this,L,S_).call(this,e.id);let c=Tl(Au(o._,o.__??[])),h=c?void 0:p(this,$e).roadPath(t.x,t.y,n.x,n.y)?.slice(1,-1);p(this,pn).step(e.id,t,n,R(this,L,Jl).call(this,t),{...R(this,L,Jl).call(this,n),...h===void 0?{}:{via:h}},performance.now(),i==="fast"?q1(l):l,c),R(this,L,Yt).call(this)},"#walk"),Jl=u(function({x:e,y:t},n=!!this.world.get(e,t).city){let[i,r]=p(this,$e).layout.centre(e,t),o=Math.max(0,p(this,$e).surfaceAt(i,r)),a=[i,r+(n?ia:0)];return{at:a,lift:o-Math.max(0,p(this,$e).surfaceAt(...a)),middle:[i,r]}},"#standing"),S_=u(function(e){p(this,pr).delete(e)&&p(this,Kn).forEach((t,n)=>{let i=t.units.filter(r=>r!==e);if(i.length!==t.units.length){if(i.length===0){p(this,Kn).delete(n),R(this,L,so).call(this,n);return}p(this,Kn).set(n,{...t,units:i})}})},"#stepsOn"),io=u(function(e){return p(this,pn).walking(e)||p(this,pr).has(e)||p(this,sn).attacking(e)||p(this,Pi).has(e)},"#leftOff"),_E=u(function(e){if(p(this,pn).dropped().forEach(i=>R(this,L,so).call(this,i)),p(this,Kn).forEach(i=>R(this,L,jl).call(this,i)),p(this,pn).size()===0)return;if($i()||(p(this,mi)?.speed()??"normal")==="off"){R(this,L,ch).call(this,p(this,pn).endAll(e));return}let{going:t,ended:n}=p(this,pn).at(e);R(this,L,ch).call(this,n),t.forEach(i=>{R(this,L,jl).call(this,i,!0)!==null&&i.units.some(o=>{let a=p(this,ji).get(o);return a!==void 0&&Au(a._,a.__??[]).shape==="ship"})&&p(this,lo).trail(i.id,i.at,e)})},"#placeWalkers"),vE=u(function(e){if(p(this,lo).size()===0)return;if($i()||(p(this,mi)?.speed()??"normal")==="off"){p(this,lo).endAll().forEach(i=>p(this,wt).wake(i,null));return}let{going:t,gone:n}=p(this,lo).at(e);n.forEach(i=>p(this,wt).wake(i,null)),t.forEach(({id:i,points:r})=>{let[o]=r;if(o===void 0){p(this,wt).wake(i,null);return}let[a,l]=R(this,L,w_).call(this,o.at);p(this,wt).wake(i,[a,0,l],j1(r))})},"#placeWakes"),jl=u(function(e,t=!1){let n=R(this,L,T_).call(this,e.units),i=null;if(t){let r=p(this,nc).get(e.id),o=(r?.by??0)+(r===void 0?0:Math.hypot(e.at[0]-r.at[0],e.at[1]-r.at[1]));p(this,nc).set(e.id,{at:[e.at[0],e.at[1]],by:o}),i={role:"move",seconds:o/Fw}}return R(this,L,Kp).call(this,e,n,1,i),n},"#drawWalker"),Kp=u(function({id:e,at:t,lift:n,facing:i,aloft:r=0},o,a=1,l=null){let c=o===null?null:JSON.stringify(o);c!==(p(this,Ma).get(e)??null)&&(p(this,wt).setWalker(e,o),c===null?p(this,Ma).delete(e):p(this,Ma).set(e,c)),o!==null&&(p(this,wt).placeWalker(e,R(this,L,E_).call(this,t,n),i,r),p(this,wt).fadeWalker(e,a),p(this,wt).poseWalker?.(e,l?.role??null,l?.seconds??0))},"#drawFigure"),w_=u(function(e){let{u:t,v:n}=p(this,$e).layout.period(),i=u((r,o)=>o===null?r:(r%o+o)%o,"within");return[i(e[0],t),i(e[1],n)]},"#wrapped"),E_=u(function(e,t){let[n,i]=R(this,L,w_).call(this,e);return[n,Math.max(0,p(this,$e).surfaceAt(n,i))+t,i]},"#onLand"),so=u(function(e){p(this,nc).delete(e),p(this,Ma).delete(e)&&p(this,wt).setWalker(e,null)},"#takeAway"),T_=u(function(e){let t=e.flatMap(n=>{let i=p(this,ji).get(n);return i===void 0?[]:[i]});return R(this,L,Zp).call(this,t)},"#walkerMarker"),Zp=u(function(e,t=p(this,Ii)){return Ky({city:null,units:e},t,p(this,Ni),p(this,tc),()=>0,p(this,po),p(this,Ah))},"#unitsMarker"),A_=u(function({units:e}){return e.some(t=>p(this,Ci).has(t))},"#awaitsPatch"),ch=u(function(e){let t=new Set;e.forEach(n=>{let i={...n,units:n.units.filter(r=>!p(this,sn).attacking(r))};if(i.units.length>0&&R(this,L,A_).call(this,i)){p(this,Kn).set(i.id,i),i.units.forEach(r=>p(this,pr).add(r)),R(this,L,jl).call(this,i);return}R(this,L,so).call(this,n.id),n.units.forEach(r=>p(this,pr).delete(r)),R(this,L,R_).call(this,n.units,t)}),R(this,L,C_).call(this,t)},"#walksEnded"),R_=u(function(e,t){e.forEach(n=>{R(this,L,io).call(this,n)&&!p(this,Pi).has(n)||(p(this,va).get(n)?.forEach(i=>t.add(i)),p(this,va).delete(n),p(this,ji).delete(n))})},"#release"),C_=u(function(e){let t=p(this,Ii);t!==null&&t!==(p(this,es)?.id??null)&&!p(this,pn).walking(t)&&!p(this,sn).attacking(t)&&R(this,L,CE).call(this,e),e.forEach(n=>{let[i,r]=n.split(",").map(Number);R(this,L,Ji).call(this,i,r)})},"#released"),ME=u(function(e){let t=new Set;if(p(this,sn).size()===0){R(this,L,Jp).call(this,t);return}if($i()||(p(this,mi)?.speed()??"normal")==="off"){R(this,L,uh).call(this,p(this,sn).endAll(e)),R(this,L,Jp).call(this,t);return}let{going:n,struck:i,ended:r}=p(this,sn).at(e);i.forEach(o=>R(this,L,P_).call(this,o,!0)),n.forEach(o=>{if(!o.fallen&&p(this,pn).walking(o.unit)){R(this,L,so).call(this,o.id);return}R(this,L,RE).call(this,o)&&t.add(R(this,L,SE).call(this,o))}),R(this,L,I_).call(this,r),R(this,L,Jp).call(this,t)},"#placeBattles"),SE=u(function({battle:e,at:t,lift:n,opacity:i}){let r=`${e}-puff`;return p(this,rc).add(r),p(this,wt).puff(r,R(this,L,E_).call(this,t,n),1-i),r},"#puff"),Jp=u(function(e){p(this,rc).forEach(t=>{e.has(t)||(p(this,rc).delete(t),p(this,wt).puff(t,null))})},"#puffsOver"),uh=u(function({struck:e,ended:t}){e.forEach(n=>R(this,L,P_).call(this,n,!1)),R(this,L,I_).call(this,t)},"#battlesOver"),P_=u(function(e,t){let{square:n,units:i}=p(this,pi).get(e.id)??{square:"",units:[]},{x:r,y:o}=e.defenderSquare,a=[...p(this,pi).entries()].find(([f,d])=>f!==e.id&&d.square===n)?.[1],l=new Set((a?.units??this.world.get(r,o).units).map(({id:f})=>f)),c=e.won?e.defender:e.attacker,h=i.filter(({id:f})=>e.won&&f===e.defender||!l.has(f)&&!R(this,L,io).call(this,f));p(this,pi).delete(e.id),p(this,$e).changed([[r,o]],...R(this,L,ro).call(this)),p(this,Ci).has(c)&&p(this,Pi).add(c),t&&e.won&&h.length>0&&p(this,Sa).set(e.id,h),R(this,L,Ji).call(this,r,o)},"#blow"),wE=u(function(e,t,{shown:n,ringed:i,inCity:r}){if((p(this,Ps).get(e)?.units??[]).forEach(({id:o})=>{p(this,mr).get(o)===e&&p(this,mr).delete(o)}),t.length===0?p(this,Ps).delete(e):p(this,Ps).set(e,{units:t.map(mE),shown:n,ringed:i,inCity:r}),t.forEach(({id:o})=>p(this,mr).set(o,e)),p(this,Is).size>0){let o=[...p(this,Is).entries()].filter(([,a])=>a.units.some(l=>t.some(({id:c})=>c===l.id))).map(([a])=>a);o.forEach(a=>p(this,fi).end(a)),R(this,L,Qp).call(this,o)}},"#drawnOn"),jp=u(function(){return typeof requestAnimationFrame=="function"&&!$i()&&(p(this,mi)?.speed()??"normal")!=="off"},"#fadesShown"),EE=u(function(e){return p(this,mr).has(e)||R(this,L,io).call(this,e)},"#drawnAnywhere"),TE=u(function(e,t){let n=[],i=[];if(e.forEach((l,c)=>{let h=l.units.filter(({id:d})=>!R(this,L,EE).call(this,d)),f=p(this,Ps).get(c)?.shown??null;l.shown!==null&&h.some(({id:d})=>d===l.shown)&&n.push([c,l,h]),l.units.length===0&&f!==null&&!t.has(f)&&i.push([c,f])}),n.length+i.length===0||n.length+i.length>SN)return;let r=u(([l])=>{let[c,h]=l.split(",").map(Number);return R(this,L,xa).call(this,c,h,0)},"onScreen"),o=performance.now(),a=(p(this,mi)?.speed()??"normal")==="fast"?500/2:500;n.filter(r).forEach(([l,c,h])=>{let[f,d]=l.split(",").map(Number);p(this,Is).set(p(this,fi).add("out",o,a),{units:[...h.filter(({id:m})=>m===c.shown),...h.filter(({id:m})=>m!==c.shown)],shown:c.ringed?c.shown:null,at:R(this,L,Jl).call(this,{x:f,y:d},c.inCity),facing:c.shown===null?0:p(this,Ri).get(c.shown)??0})}),i.filter(r).forEach(([l,c])=>{p(this,gr).set(p(this,fi).add("in",o,a),{key:l,unit:c}),p(this,wt).fadeMarker(l,0)}),R(this,L,Yt).call(this)},"#fadeChanged"),AE=u(function(e){if(p(this,fi).size()===0)return;if(!R(this,L,jp).call(this)){R(this,L,Qp).call(this,p(this,fi).endAll());return}let{going:t,ended:n}=p(this,fi).at(e),i=[];t.forEach(({id:r,opacity:o})=>{let a=p(this,Is).get(r),l=p(this,gr).get(r);if(a!==void 0){let c=R(this,L,Zp).call(this,a.units,a.shown);if(c===null){p(this,fi).end(r),i.push(r);return}R(this,L,Kp).call(this,{id:r,at:[a.at.at[0],a.at.at[1]],lift:a.at.lift,facing:a.facing},c,o);return}if(l!==void 0){if((p(this,Ps).get(l.key)?.shown??null)!==l.unit){p(this,fi).end(r),i.push(r);return}p(this,wt).fadeMarker(l.key,o)}}),R(this,L,Qp).call(this,[...n,...i])},"#placeFades"),Qp=u(function(e){e.forEach(t=>{let n=p(this,gr).get(t);p(this,Is).delete(t)&&R(this,L,so).call(this,t),n!==void 0&&(p(this,gr).delete(t),[...p(this,gr).values()].some(({key:i})=>i===n.key)||p(this,wt).fadeMarker(n.key,1))})},"#fadesOver"),RE=u(function(e){let t=p(this,Sa).get(e.battle);if(e.fallen&&t===void 0)return!1;let n=e.fallen?R(this,L,Zp).call(this,t):R(this,L,T_).call(this,[e.unit]);return R(this,L,Kp).call(this,e,n,e.opacity),n!==null&&(e.fallen||e.opacity<1)},"#drawFighter"),I_=u(function(e){if(e.length===0)return;let t=new Set;e.forEach(n=>{let{id:i,attacker:r,won:o,from:a,attackerSquare:l,facing:c}=n;if(R(this,L,so).call(this,`${i}-fallen`),p(this,Sa).delete(i),p(this,pi).delete(i)&&p(this,$e).changed([[n.defenderSquare.x,n.defenderSquare.y]],...R(this,L,ro).call(this)),p(this,Ci).has(r)&&!R(this,L,io).call(this,r))if(!o)p(this,Pi).add(r);else{let h={id:i,units:[r],at:[a.at[0],a.at[1]],lift:a.lift,aloft:0,facing:c,from:l,before:l,to:l};p(this,Kn).set(i,h),p(this,pr).add(r),R(this,L,jl).call(this,h);return}R(this,L,so).call(this,i),R(this,L,R_).call(this,[r],t)}),R(this,L,C_).call(this,t)},"#battlesEnded"),CE=u(function(e){let t=p(this,es);[p(this,Ls),t?.tile].forEach(i=>{i&&e.add(`${i.x},${i.y}`)}),B(this,Ii,t?.id??null),B(this,Ls,t?.tile??null),p(this,Kn).forEach(i=>R(this,L,jl).call(this,i));let n=p(this,Ns);n!==null&&(B(this,Ns,null),R(this,L,U_).call(this,n.x,n.y))},"#caughtUp"),ga=u(function(){let e=p(this,Ii);return e!==null&&e!==(p(this,es)?.id??null)&&(p(this,pn).walking(e)||p(this,sn).attacking(e))},"#holding"),em=u(function(){let e=p(this,Ii);e===null||!R(this,L,ga).call(this)||(R(this,L,ch).call(this,p(this,pn).endWhere(t=>t.includes(e),performance.now())),R(this,L,uh).call(this,p(this,sn).endWhere(({attacker:t})=>t===e,performance.now())),R(this,L,Yt).call(this))},"#hurry"),PE=u(function(){let e=p(this,Ls),t=e===null?void 0:this.world.get(e.x,e.y).units.find(({id:n})=>n===p(this,Ii));return t!==void 0&&t.active!==!1&&(t.moves?.value??0)>0},"#ringedOffered"),IE=u(function(e,t){if(R(this,L,ga).call(this)){B(this,Ns,{x:e,y:t});return}R(this,L,U_).call(this,e,t)},"#centreSoon"),LE=u(function(e){if(p(this,Ci).forEach(({squares:n,after:i},r)=>{n.some(o=>(e.get(o)??0)>i)&&(p(this,Ci).delete(r),p(this,Pi).delete(r))}),p(this,Kn).size===0)return;let t=[...p(this,Kn).values()].filter(n=>!R(this,L,A_).call(this,n));t.forEach(n=>p(this,Kn).delete(n.id)),R(this,L,ch).call(this,t)},"#patched"),tm=u(function(e,t,n){let[i,r]=p(this,$e).layout.centre(t.x,t.y),[o,a]=p(this,$e).layout.centre(n.x,n.y),{u:l,v:c}=p(this,$e).layout.period(),h=u((m,g)=>g===null?m:m-g*Math.round(m/g),"short"),f=h(o-i,l),d=h(a-r,c);f===0&&d===0||(p(this,Ri).delete(e),p(this,Ri).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),p(this,Ri).size>_N&&p(this,Ri).delete(p(this,Ri).keys().next().value),[t,n].forEach(({x:m,y:g})=>R(this,L,Ji).call(this,m,g)),R(this,L,Yt).call(this))},"#face"),xa=u(function(e,t,n){let i=p(this,kt).clientWidth,r=p(this,kt).clientHeight;if(i<=0||r<=0)return!1;let o=p(this,Ns),a=o===null?p(this,Ut)?.to??p(this,ft):{...p(this,Ut)?.to??p(this,ft),focus:p(this,$e).layout.centre(o.x,o.y)},[l,c]=p(this,$e).layout.centre(e,t),{u:h,v:f}=R(this,L,Cs).call(this),[d,m]=a.focus,g=u((w,I,P)=>P===null?w:w+P*Math.round((I-w)/P),"nearest"),_=[g(l,d,h),Math.max(0,p(this,$e).heightAt(l,c)),g(c,m,f)],x=i/r,b=p(this,Bn)??0,v=Nl(a,b,_,x),S=Nl(a,b,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],x);if(v===null||S===null)return!1;let M=(v[0]+1)/2*i,A=(1-v[1])/2*r,E=Math.abs(S[0]-v[0])*(i/2),y=(n+.5)*E;return M>=y&&M<=i-y&&A>=y&&A<=r-y&&!p(this,fh).some(({left:w,top:I,right:P,bottom:D})=>M>=w-E/2&&M<=P+E/2&&A>=I-E/2&&A<=D+E/2)},"#visible"),nm=u(function(e,t){let n=p(this,kt).clientWidth,i=p(this,kt).clientHeight;if(n<=0||i<=0)return null;let r=[e/n*2-1,1-t/i*2],o=p(this,wt).unitAt?.(r)??null;if(o!==null){let[m,g]=o.split(",").map(Number);return this.world.get(m,g)}let a=iE(p(this,ft),p(this,Bn)??0,r,n/i,(m,g)=>p(this,$e).heightAt(m,g));if(a===null)return null;let[l,c]=p(this,$e).layout.tileAt(...a),h=this.world.width(),f=this.world.height();return!(R(this,L,Cs).call(this).v!==null)&&(c<0||c>=f)?null:this.world.get((l%h+h)%h,(c%f+f)%f)},"#tileAt"),L_=u(function(e,t){for(let n=p(this,wa).length-1;n>=0;n--){let{key:i,left:r,top:o,right:a,bottom:l}=p(this,wa)[n];if(e>=r&&e<a&&t>=o&&t<l){let[c,h]=i.split(",").map(Number),f=this.world.get(c,h);if(f?.city)return{tile:f,box:{left:r,top:o,bottom:l}}}}return null},"#bannerAt"),NE=u(function(e,t){let n=R(this,L,nm).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let i=p(this,Ds);if(i!==null){n!==null&&i.accept(n)&&(this.endPicking(),i.onPick(n));return}let r=R(this,L,L_).call(this,e,t)?.tile.city??null;(n!==null||r!==null)&&p(this,di).click(this.portal,n,r)},"#clicked"),DE=u(function(e,t,n,i,r){let o=p(this,es),a=R(this,L,nm).call(this,e,t);return o===null||a===null?!1:(this.endPicking(),p(this,di).menu(this.portal,n,i,o,a,p(this,Mh),r),!0)},"#menu"),N_=u(function(e,t){let n=R(this,L,L_).call(this,e,t);if(n!==null)return{key:`banner ${n.tile.x},${n.tile.y}`,...n};let i=R(this,L,nm).call(this,e,t);return i===null?null:{key:`${i.x},${i.y}`,tile:i,box:null}},"#subjectAt"),UE=u(function(e){let t=e===null||p(this,fc)||p(this,di).menuOpen()?null:R(this,L,N_).call(this,e.x,e.y),n=p(this,Us);if(t===null||e===null){p(this,gi).call(this);return}let{key:i,tile:{x:r,y:o}}=t;if(n!==null&&n.key===i){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}p(this,gi).call(this);let a={key:i,x:r,y:o,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};a.timer=window.setTimeout(()=>{a.timer=null,R(this,L,D_).call(this,a)},AN),B(this,Us,a),document.addEventListener("keydown",p(this,gi),!0)},"#hovered"),D_=u(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===p(this,kt),n=t?R(this,L,N_).call(this,e.canvasX,e.canvasY):null;if(n===null||n.key!==e.key){p(this,gi).call(this);return}let i=n.box===null?null:p(this,kt).getBoundingClientRect(),r=p(this,di).tooltip(p(this,kt),n.tile,p(this,br),i===null||n.box===null?{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10}:{left:i.left+n.box.left,top:i.top+n.box.top,bottom:i.top+n.box.bottom});!r&&e.open&&p(this,di).endTooltip(p(this,kt)),e.open=r},"#showHover"),ro=u(function(){return[...p(this,ft).focus]},"#focus"),OE=u(function(){let[e,t]=p(this,$e).layout.tileAt(...p(this,ft).focus),n=this.world.width(),i=this.world.height();return{x:(e%n+n)%n,y:R(this,L,Cs).call(this).v===null?Math.min(i-1,Math.max(0,t)):(t%i+i)%i}},"#centreSquare"),U_=u(function(e,t){let[n,i]=p(this,$e).layout.centre(e,t),[r,o]=(p(this,Ut)?.to??p(this,ft)).focus;if(n===r&&i===o)return;let a={...p(this,Ut)?.to??p(this,ft),focus:[n,i]},{u:l,v:c}=R(this,L,Cs).call(this),h=u((g,_)=>_===null?g:g-_*Math.round(g/_),"short"),[f,d]=p(this,ft).focus,m=Math.hypot(h(n-f,l),h(i-d,c));if(!p(this,bh)||m>p(this,ft).distance*1.5){B(this,bh,!0),this.setOrbit(a);return}R(this,L,hh).call(this,a)},"#centreOn"),Rs=u(function(e){let t=ra(e),n=R(this,L,Cs).call(this);return Aw({...t,pitch:Math.max(t.pitch,Cw(t.distance,n))},n,p(this,$e).extentV())},"#settle"),Cs=u(function(){let e=p(this,$e).layout.period();return this.portal?.lockVerticalEdges()??p(this,xh)?{u:e.u,v:null}:e},"#period"),hh=u(function(e,t=R(this,L,M_).call(this)+pE(e.yaw-(p(this,Ut)?.to??p(this,ft)).yaw)){p(this,gi).call(this),typeof requestAnimationFrame!="function"||$i()?(B(this,Ut,null),B(this,ft,R(this,L,Rs).call(this,e))):B(this,Ut,{from:p(this,ft),to:e,started:null,turn:t,drawn:0}),R(this,L,Yt).call(this)},"#moveTo"),FE=u(function(e){let t=p(this,Ut);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/vN);return t.drawn=n*n*(3-2*n),B(this,ft,R(this,L,Rs).call(this,Rw(t.from,t.to,n,R(this,L,Cs).call(this),t.turn))),n>=1&&B(this,Ut,null),n<1},"#moveCamera"),BE=u(function(e){let[t,n]=p(this,ft).focus,i=Math.max(0,p(this,$e).heightAt(t,n));return!e||p(this,Bn)===null||$i()?(B(this,Bn,i),!1):(B(this,Bn,p(this,Bn)+(i-p(this,Bn))*TN),Math.abs(i-p(this,Bn))<.002?(B(this,Bn,i),!1):!0)},"#followHeight"),O_=u(function(){let e=[...p(this,fo).values()].map(({x:h,y:f})=>[h,f]),t=this.world.tiles(),n=t!==p(this,Ta)||t.length!==p(this,uc);B(this,Ta,t),B(this,uc,t.length),p(this,fo).clear();let i=R(this,L,VE).call(this,p(this,$e).changed(e,...R(this,L,ro).call(this),n)),r=new Set(e.map(([h,f])=>`${h},${f}`)),o=new Map([...r].map(h=>[h,p(this,sc).get(h)??0]));p(this,sc).clear();let a=p(this,co),l=p(this,uo);B(this,co,new Map),B(this,uo,null),p(this,Is).forEach(({units:[h]})=>{h!==void 0&&l?.add(h.id)}),e.forEach(([h,f])=>R(this,L,Ji).call(this,h,f)),i.forEach(([h,f])=>{let d=`${h},${f}`;!n&&!r.has(d)&&p(this,yr).has(d)&&R(this,L,Ji).call(this,h,f)}),R(this,L,GE).call(this,e,i),i.forEach(([h,f])=>p(this,ho).delete(`${h},${f}`));let c=p(this,Us);c!==null&&c.open&&e.some(([h,f])=>h===c.x&&f===c.y)&&B(this,xr,!0),(e.length>0||n)&&B(this,ac,!0),n&&(B(this,Fs,!0),p(this,yr).forEach((h,f)=>{let[d,m]=f.split(",").map(Number);R(this,L,Ji).call(this,d,m)})),l!==null&&R(this,L,jp).call(this)&&!(n&&r.size*2>=t.length)&&R(this,L,TE).call(this,a,l),e.length>0&&R(this,L,LE).call(this,o)},"#takeTiles"),Ji=u(function(e,t){let n=`${e},${t}`,i=this.world.get(e,t),r=p(this,sn).awaitingBlow({x:e,y:t}),o=r===null?void 0:p(this,pi).get(r.id),a=o===void 0?i.units:[...o.units,...i.units.filter(({id:v})=>!o.units.some(S=>S.id===v))];i.units.filter(({id:v})=>R(this,L,io).call(this,v)&&!p(this,Pi).has(v)).forEach(v=>{let S=p(this,va).get(v.id)??new Set;S.add(n),p(this,va).set(v.id,S),p(this,ji).set(v.id,v)});let c=a.filter(({id:v})=>!R(this,L,io).call(this,v)),h=o===void 0?i.city:o.city,f=Ky(o===void 0&&c.length===i.units.length?i:{city:h,units:c},p(this,Ii),p(this,Ni),p(this,tc),v=>p(this,Ri).get(v.id)??0,p(this,po),p(this,Ah)),d=f?.city&&R(this,L,kE).call(this,n,i,h)!==null?{...f,city:{...f.city,unnamed:!0}}:f;h||(p(this,Qi).delete(n),p(this,ho).delete(n)),R(this,L,wE).call(this,n,c,{shown:d?.unit?.id??null,ringed:d?.unit?.active===!0,inCity:(d?.unit??null)!==null&&d?.inCity===!0});let[m,g]=p(this,$e).layout.centre(e,t),_=[m,Math.max(0,p(this,$e).surfaceAt(m,g)),g],x=d===null?null:JSON.stringify([d,_]);x!==(p(this,yr).get(n)??null)&&(p(this,wt).setMarker(n,_,d),R(this,L,WE).call(this,n,x))},"#mark"),kE=u(function(e,t,n){if(p(this,Li)===null||!n)return null;let i=R(this,L,im).call(this),r={...t,city:n},o=p(this,Qi).get(e),a="!",l=null;try{if(a=String(p(this,Li).key(r)),o?.signature===a)return o.banner;l=p(this,Li).paint(r,i)}catch(c){p(this,Sh)||(B(this,Sh,!0),console.error(c))}return p(this,Qi).set(e,{signature:a,banner:l}),l},"#bannerOf"),im=u(function(){return(p(this,wh)??(window.devicePixelRatio||1))*(p(this,Bs).zoom()/p(this,Bs).scale())},"#bannerDensity"),zE=u(function(e){let t=p(this,ho).get(e);if(t===void 0){let[n,i]=e.split(",").map(Number),[r,o]=p(this,$e).layout.centre(n,i),a=u((l,c)=>Math.max(0,p(this,$e).surfaceAt(l,c)),"up");t={key:e,centre:[r,a(r,o),o],outline:p(this,$e).layout.outline(n,i).map(([l,c])=>[l,a(l,c),c])},p(this,ho).set(e,t)}return t},"#bannerSiteOf"),sm=u(function(){return`${p(this,Bs).id()} ${p(this,Bs).scale()} ${R(this,L,im).call(this)}`},"#bannersFor"),F_=u(function(){R(this,L,B_).call(this),R(this,L,Yt).call(this)},"#paintBannersAgain"),B_=u(function(){B(this,cc,R(this,L,sm).call(this)),p(this,Qi).clear(),R(this,L,ba).call(this),B(this,xr,!0)},"#repaintBanners"),k_=u(function(){let e=p(this,Os);if(e===null||p(this,Li)===null)return;R(this,L,sm).call(this)!==p(this,cc)&&R(this,L,B_).call(this);let t=e.getContext("2d");if(B(this,wa,[]),t===null||(p(this,lc)&&(t.clearRect(0,0,e.width,e.height),B(this,lc,!1)),!p(this,Ni)||p(this,mo)&&p(this,Li).giveWayToYields))return;let n=p(this,kt).clientWidth,i=p(this,kt).clientHeight,r=e.width/Math.max(1,n),o=[];if(n<=0||i<=0)return;let a=0;p(this,Qi).forEach(({banner:c},h)=>{c!==null&&(a=Math.max(a,c.width/r),o.push(R(this,L,zE).call(this,h)))});let l=Math.round(p(this,Bs).scale()*R(this,L,im).call(this));dE(o,{orbit:p(this,ft),look:p(this,Bn)??0,width:n,height:i,period:R(this,L,Cs).call(this),reach:a}).forEach(({key:c,x:h,y:f,clear:d})=>{let m=p(this,Qi).get(c)?.banner;if(m){let g=Math.round(h*r-m.centre),_=Math.round(f*r)+l;t.globalAlpha=d,t.drawImage(m.image,g,_),B(this,lc,!0),d>=RN&&p(this,wa).push({key:c,left:g/r,top:_/r,right:(g+m.width)/r,bottom:(_+m.height)/r})}}),t.globalAlpha=1},"#drawBanners"),GE=u(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,i])=>p(this,Ra).delete(`${n},${i}`)),t.forEach(([n,i])=>p(this,Ra).delete(`${n},${i}`)),B(this,Fs,!0))},"#yieldsChanged"),VE=u(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([i,r])=>{n.set(`${i},${r}`,[i,r]),t.directions().forEach(o=>{let a=t.neighbour(i,r,o);a!==null&&n.set(`${a[0]},${a[1]}`,a)})}),[...n.values()]},"#besides"),HE=u(function(){if(!p(this,mo)){p(this,Aa)&&(p(this,wt).setYields(null),B(this,Aa,!1));return}if(!p(this,Fs)&&p(this,Aa))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,i=aE(t,lE(t)),r=p(this,Ra).get(n);if(r===void 0||r.of!==i){let[o,a]=p(this,$e).layout.centre(t.x,t.y);r={of:i,laid:i.length===0?null:uE({at:[o,Math.max(0,p(this,$e).surfaceAt(o,a)),a],yields:i},p(this,Ch))},p(this,Ra).set(n,r)}r.laid!==null&&e.push(r.laid)}),p(this,wt).setYields(hE(e)),B(this,Fs,!1),B(this,Aa,!0)},"#showYields"),WE=u(function(e,t){t===null?p(this,yr).delete(e):p(this,yr).set(e,t)},"#remember"),ba=u(function(){let e=new Set([...p(this,yr).keys(),...p(this,Qi).keys()]);this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,i]=t.split(",").map(Number);R(this,L,Ji).call(this,n,i)})},"#markAll"),z_=u(function(e){let t=performance.now(),n=R(this,L,FE).call(this,t),[i,r]=R(this,L,ro).call(this);p(this,dc)&&(B(this,dc,!1),R(this,L,ba).call(this)),R(this,L,O_).call(this),R(this,L,_E).call(this,t),R(this,L,vE).call(this,t),R(this,L,ME).call(this,t),R(this,L,AE).call(this,t),`${i},${r}`!==p(this,mh)&&(B(this,mh,`${i},${r}`),p(this,$e).refocus(i,r)),p(this,$e).build(p(this,wt),e);let o=R(this,L,BE).call(this,e!==null);R(this,L,HE).call(this),p(this,wt).view(p(this,ft),p(this,Bn)??0,R(this,L,Cs).call(this)),p(this,wt).render(),R(this,L,k_).call(this),p(this,xr)&&(B(this,xr,!1),p(this,Us)?.open&&R(this,L,D_).call(this,p(this,Us))),R(this,L,XE).call(this),R(this,L,G_).call(this),B(this,ph,performance.now()-t),B(this,yh,!0),R(this,L,$E).call(this),(p(this,$e).pending()>0||p(this,$e).overlaysPending()>0||p(this,pn).size()>0||p(this,sn).size()>0||p(this,fi).size()>0||p(this,lo).size()>0||n||o)&&R(this,L,Yt).call(this)},"#frameDrawn"),XE=u(function(){let e=p(this,oc);if(e===null)return;p(this,ac)&&(B(this,ac,!1),e.redraw());let t=R(this,L,ga).call(this)?p(this,Ls):p(this,es)?.tile??null;e.show(R(this,L,qE).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),qE=u(function(){let e=p(this,kt).clientWidth,t=p(this,kt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,i=p(this,Bn)??0,r=lr(p(this,ft).distance,R(this,L,Cs).call(this)).far,[o,a]=p(this,ft).focus,l=u((h,f)=>{for(let d=f;d>=-1;d-=.05){let m=sa(p(this,ft),i,[h,d],n);if(m!==null){let g=Math.hypot(m[0]-o,m[1]-a),_=g>r?r/g:1;return[o+(m[0]-o)*_,a+(m[1]-a)*_]}}return null},"corner"),c=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return c.every(h=>h!==null)?c:null},"#patch"),G_=u(function(e=!1){let t=(e?p(this,Ut)?.to??p(this,ft):p(this,ft)).distance,n=u(()=>{p(this,oo)!==null&&clearTimeout(p(this,oo)),B(this,oo,null),B(this,ec,null)},"stop"),i=u(()=>{n(),B(this,_a,t),p(this,gh).set(t)},"keep");if(e){n(),t!==p(this,_a)&&i();return}if(p(this,Ut)!==null||t===p(this,_a)){n();return}p(this,oo)!==null&&t===p(this,ec)||(n(),B(this,ec,t),B(this,oo,setTimeout(i,EN)))},"#keepDistance"),Yt=u(function(){if(!p(this,vr)){if(typeof requestAnimationFrame!="function"){R(this,L,z_).call(this,null);return}p(this,_r)===null&&B(this,_r,requestAnimationFrame(()=>{B(this,_r,null),R(this,L,z_).call(this,yN)}))}},"#draw"),YE=u(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),$E=u(function(){if(p(this,ya)===null)return;let{drawCalls:e,triangles:t,geometries:n}=p(this,wt).stats();p(this,ya).textContent=[`frame ${p(this,ph).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${p(this,$e).pending()}`].join(`
`)},"#showStats"),V_=u(function(){let e=p(this,kt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,i=window.devicePixelRatio||1,r=`${t}\xD7${n}@${i}`;t===0||n===0||r===p(this,Ih)||(B(this,Ih,r),p(this,wt).resize(t,n,i),p(this,Os)!==null&&(Object.assign(p(this,Os).style,{height:`${n}px`,left:`${p(this,kt).offsetLeft||0}px`,top:`${p(this,kt).offsetTop||0}px`,width:`${t}px`}),p(this,Os).width=Math.round(t*i),p(this,Os).height=Math.round(n*i),B(this,wh,i)),this.measureCovered(),p(this,wt).render(),R(this,L,k_).call(this))},"#resize"),u(H_,"MapView3D");var v_=H_,KE=v_;var CN={createMapView3D:u(s=>new KE(s),"createMapView3D")};globalThis[nv]=CN;})();
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
