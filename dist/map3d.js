"use strict";(()=>{var Zx=Object.create;var Ku=Object.defineProperty;var $x=Object.getOwnPropertyDescriptor;var Jx=Object.getOwnPropertyNames;var Kx=Object.getPrototypeOf,Qx=Object.prototype.hasOwnProperty;var im=i=>{throw TypeError(i)};var c=(i,e)=>Ku(i,"name",{value:e,configurable:!0});var jx=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var e_=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Jx(e))!Qx.call(i,s)&&s!==t&&Ku(i,s,{get:()=>e[s],enumerable:!(n=$x(e,s))||n.enumerable});return i};var t_=(i,e,t)=>(t=i!=null?Zx(Kx(i)):{},e_(e||!i||!i.__esModule?Ku(t,"default",{value:i,enumerable:!0}):t,i));var Qu=(i,e,t)=>e.has(i)||im("Cannot "+t);var v=(i,e,t)=>(Qu(i,e,"read from private field"),t?t.call(i):e.get(i)),te=(i,e,t)=>e.has(i)?im("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Z=(i,e,t,n)=>(Qu(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),H=(i,e,t)=>(Qu(i,e,"access private method"),t);var rm=jx(Os=>{"use strict";var ai,ts=Os&&Os.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Os,"__esModule",{value:!0}),Os.EventEmitter=void 0;var ju=class ju{constructor(){ai.set(this,{})}on(e,t){e in ts(this,ai,"f")||(ts(this,ai,"f")[e]=[]),ts(this,ai,"f")[e].push(t)}once(e,t){let n=c((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in ts(this,ai,"f")))return;let n=ts(this,ai,"f")[e].indexOf(t);n!==-1&&ts(this,ai,"f")[e].splice(n,1)}emit(e,...t){e in ts(this,ai,"f")&&ts(this,ai,"f")[e].forEach((n=>n(...t)))}};c(ju,"i");var al=ju;Os.EventEmitter=al,ai=new WeakMap,Os.default=al});var sm="civMap3D";var am=t_(rm());var ns,oi,dr,th=class th extends am.EventEmitter{constructor(t,n){super();te(this,ns);te(this,oi);te(this,dr);Z(this,oi,t),Z(this,dr,t.lockVerticalEdges),Z(this,ns,n)}center(){return v(this,ns).centre()}isVisible(t,n,s=0){return v(this,ns).visible(t,n,s)}lockVerticalEdges(){return v(this,dr)}nativeTileSize(){return v(this,oi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=v(this,oi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return v(this,oi).playerId}render(){v(this,ns).changed()}scale(){return v(this,oi).art.scale()}setCenter(t,n){v(this,ns).centreOn(t,n)}setLockVerticalEdges(t){Z(this,dr,t)}setZoom(){}transport(){return v(this,oi).transport}zoom(){return v(this,oi).art.zoom()}};ns=new WeakMap,oi=new WeakMap,dr=new WeakMap,c(th,"MapPortal3D");var eh=th,om=eh;var n_=c((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(s=>{let[r,a]=e.offset(s,0,0),[o,l]=i.centre(r,a);return[s,[o-t,l-n]]}))},"groundDirections"),lm=n_;var Um=0,Lh=1,Fm=2;var no=1,Ec=2,Wr=3,vs=0,ln=1,pi=2,Hs=0,Xr=1,Dh=2,Nh=3,Uh=4,Om=5;var Ws=100,Bm=101,zm=102,km=103,Gm=104,Vm=200,Hm=201,Wm=202,Xm=203,Fh=204,Oh=205,qm=206,Ym=207,Zm=208,$m=209,Jm=210,Km=211,Qm=212,jm=213,e0=214,Ll=0,Dl=1,Nl=2,Dr=3,Ul=4,Fl=5,Ol=6,Bl=7,Bh=0,t0=1,n0=2,mi=0,zh=1,kh=2,Gh=3,io=4,Vh=5,Hh=6,Wh=7;var Xh=300,Xs=301,qr=302,Tc=303,Ac=304,Vs=1e3,kn=1001,zl=1002,zt=1003,i0=1004;var so=1005;var kt=1006,Cc=1007;var Gi=1008;var pn=1009,qh=1010,Yh=1011,Yr=1012,Rc=1013,Jn=1014,Kn=1015,Tn=1016,Pc=1017,Ic=1018,qs=1020,Zh=35902,$h=35899,Jh=1021,Kh=1022,Qn=1023,Oi=1026,Vi=1027,Qh=1028,Lc=1029,gi=1030,Dc=1031;var Nc=1033,ro=33776,ao=33777,oo=33778,lo=33779,Uc=35840,Fc=35841,Oc=35842,Bc=35843,zc=36196,kc=37492,Gc=37496,Vc=37488,Hc=37489,co=37490,Wc=37491,Xc=37808,qc=37809,Yc=37810,Zc=37811,$c=37812,Jc=37813,Kc=37814,Qc=37815,jc=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,ru=36492,au=36494,ou=36495,lu=36283,cu=36284,uo=36285,uu=36286;var Ua=2300,kl=2301,Pl=2302,Eh=2303,Th=2400,Ah=2401,Ch=2402;var s0=3200;var hu=0,r0=1,Hi="",Bt="srgb",Fa="srgb-linear",Oa="linear",at="srgb";var Il=7680;var a0=519,o0=512,l0=513,c0=514,jh=515,u0=516,h0=517,ed=518,td=519,nd=35044;var id="300 es",Gn=2e3,Nr=2001;function i_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}c(i_,"arrayNeedsUint32");function s_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}c(s_,"isTypedArray");function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}c(Ba,"createElementNS");function d0(){let i=Ba("canvas");return i.style.display="block",i}c(d0,"createCanvasElement");var cm={},Ur=null;function za(...i){let e="THREE."+i.shift();Ur?Ur("log",e,...i):console.log(e,...i)}c(za,"log");function f0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}c(f0,"enhanceLogMessage");function Be(...i){i=f0(i);let e="THREE."+i.shift();if(Ur)Ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}c(Be,"warn");function Ge(...i){i=f0(i);let e="THREE."+i.shift();if(Ur)Ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}c(Ge,"error");function Da(...i){let e=i.join(" ");e in cm||(cm[e]=!0,Be(...i))}c(Da,"warnOnce");function p0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}c(r,"probe"),setTimeout(r,t)})}c(p0,"probeAsync");var m0={[Ll]:Ll,[Nl]:Ol,[Ul]:Ul,[Dr]:Fl,[Dl]:Dl,[Ol]:Nl,[Bl]:Bl,[Fl]:Dr},ld=class ld{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};c(ld,"EventDispatcher");var ci=ld,$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nh=Math.PI/180,Gl=180/Math.PI;function Ys(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}c(Ys,"generateUUID");function et(i,e,t){return Math.max(e,Math.min(t,i))}c(et,"clamp");function r_(i,e){return(i%e+e)%e}c(r_,"euclideanModulo");function ih(i,e,t){return(1-t)*i+t*e}c(ih,"lerp");function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}c(g0,"floorPowerOfTwo");function du(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}c(du,"getNormalizationScale");function x0(i,e){if(e.constructor===Float32Array)return i;let t=du(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}c(x0,"denormalize");function _0(i,e){if(e.constructor===Float32Array)return i;let t=du(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}c(_0,"normalize");var cc=class cc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};c(cc,"Vector2"),cc.prototype.isVector2=!0;var ke=cc,cd=class cd{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==d||u!==p||h!==g){let x=l*d+u*p+h*g+f*y;x<0&&(d=-d,p=-p,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let w=Math.acos(x),P=Math.sin(w);_=Math.sin(_*w)/P,o=Math.sin(o*w)/P,l=l*_+d*o,u=u*_+p*o,h=h*_+g*o,f=f*_+y*o}else{l=l*_+d*o,u=u*_+p*o,h=h*_+g*o,f=f*_+y*o;let w=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=w,u*=w,h*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*p-u*d,e[t+1]=l*g+h*d+u*f-o*p,e[t+2]=u*g+h*p+o*d-l*f,e[t+3]=h*g-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*l,this._y=s*h+a*l+r*o-n*u,this._z=r*h+a*u+n*l-s*o,this._w=a*h-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,t=Math.sin(t*u)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c(cd,"Quaternion");var an=cd,uc=class uc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*u+a*f-o*h,this.y=n+l*h+o*u-r*f,this.z=s+l*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c(uc,"Vector3"),uc.prototype.isVector3=!0;var G=uc,sh=new G,um=new an,hc=class hc{constructor(e,t,n,s,r,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u)}set(e,t,n,s,r,a,o,l,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],y=s[0],x=s[3],_=s[6],w=s[1],P=s[4],T=s[7],R=s[2],E=s[5],m=s[8];return r[0]=a*y+o*w+l*R,r[3]=a*x+o*P+l*E,r[6]=a*_+o*T+l*m,r[1]=u*y+h*w+f*R,r[4]=u*x+h*P+f*E,r[7]=u*_+h*T+f*m,r[2]=d*y+p*w+g*R,r[5]=d*x+p*P+g*E,r[8]=d*_+p*T+g*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*l+s*r*u-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*l-h*r,p=u*r-a*l,g=t*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return Da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rh.makeScale(e,t)),this}rotate(e){return Da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return Da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};c(hc,"Matrix3"),hc.prototype.isMatrix3=!0;var Ve=hc,rh=new Ve,hm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){let i={enabled:!0,workingColorSpace:Fa,spaces:{},convert:c(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},"convert"),workingToColorSpace:c(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:c(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:c(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:c(function(s){return s===Hi?Oa:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:c(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:c(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:c(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:c(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:c(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:c(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fa]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:hm,fromXYZ:dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:hm,fromXYZ:dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}c(a_,"createColorManagement");var je=a_();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}c(Fi,"SRGBToLinear");function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}c(Lr,"LinearToSRGB");var fr,ud=class ud{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Ba("canvas")),fr.width=e.width,fr.height=e.height;let s=fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ba("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};c(ud,"ImageUtils");var Vl=ud,o_=0,hd=class hd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ah(s[a].image)):r.push(ah(s[a]))}else r=ah(s);n.url=r}return t||(e.images[this.uuid]=n),n}};c(hd,"TextureSource");var Fr=hd;function ah(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}c(ah,"serializeImage");var l_=0,oh=new G,Pr=class Pr extends ci{constructor(e=Pr.DEFAULT_IMAGE,t=Pr.DEFAULT_MAPPING,n=kn,s=kn,r=kt,a=Gi,o=Qn,l=pn,u=Pr.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Ys(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};c(Pr,"Texture");var on=Pr;on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Xh;on.DEFAULT_ANISOTROPY=1;var dc=class dc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],x=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let P=(u+1)/2,T=(p+1)/2,R=(_+1)/2,E=(h+d)/4,m=(f+y)/4,S=(g+x)/4;return P>T&&P>R?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=E/n,r=m/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=E/s,r=S/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=m/r,s=S/r),this.set(n,s,r,t),this}let w=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(x-g)/w,this.y=(f-y)/w,this.z=(d-h)/w,this.w=Math.acos((u+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};c(dc,"Vector4"),dc.prototype.isVector4=!0;var xt=dc,dd=class dd extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new on({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(dd,"RenderTarget");var Hl=dd,fd=class fd extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};c(fd,"WebGLRenderTarget");var Mn=fd,pd=class pd extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};c(pd,"DataArrayTexture");var ka=pd;var md=class md extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};c(md,"Data3DTexture");var Wl=md;var Na=class Na{constructor(e,t,n,s,r,a,o,l,u,h,f,d,p,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u,h,f,d,p,g,y,x)}set(e,t,n,s,r,a,o,l,u,h,f,d,p,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=u,_[6]=h,_[10]=f,_[14]=d,_[3]=p,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-o*l,t[2]=y-d*u,t[6]=g+p*u,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,g=u*h,y=u*f;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,g=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=l*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*u,g=o*l,y=o*u;t[0]=l*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*l,p=a*u,g=o*l,y=o*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),is.crossVectors(n,yn),is.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),is.crossVectors(n,yn)),is.normalize(),ol.crossVectors(yn,is),s[0]=is.x,s[4]=ol.x,s[8]=yn.x,s[1]=is.y,s[5]=ol.y,s[9]=yn.y,s[2]=is.z,s[6]=ol.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],y=n[6],x=n[10],_=n[14],w=n[3],P=n[7],T=n[11],R=n[15],E=s[0],m=s[4],S=s[8],D=s[12],I=s[1],N=s[5],O=s[9],V=s[13],C=s[2],B=s[6],k=s[10],z=s[14],j=s[3],X=s[7],Q=s[11],se=s[15];return r[0]=a*E+o*I+l*C+u*j,r[4]=a*m+o*N+l*B+u*X,r[8]=a*S+o*O+l*k+u*Q,r[12]=a*D+o*V+l*z+u*se,r[1]=h*E+f*I+d*C+p*j,r[5]=h*m+f*N+d*B+p*X,r[9]=h*S+f*O+d*k+p*Q,r[13]=h*D+f*V+d*z+p*se,r[2]=g*E+y*I+x*C+_*j,r[6]=g*m+y*N+x*B+_*X,r[10]=g*S+y*O+x*k+_*Q,r[14]=g*D+y*V+x*z+_*se,r[3]=w*E+P*I+T*C+R*j,r[7]=w*m+P*N+T*B+R*X,r[11]=w*S+P*O+T*k+R*Q,r[15]=w*D+P*V+T*z+R*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],x=e[11],_=e[15],w=l*p-u*d,P=o*p-u*f,T=o*d-l*f,R=a*p-u*h,E=a*d-l*h,m=a*f-o*h;return t*(y*w-x*P+_*T)-n*(g*w-x*R+_*E)+s*(g*P-y*R+_*m)-r*(g*T-y*E+x*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*l)+s*(r*u-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],x=e[14],_=e[15],w=t*o-n*a,P=t*l-s*a,T=t*u-r*a,R=n*l-s*o,E=n*u-r*o,m=s*u-r*l,S=h*y-f*g,D=h*x-d*g,I=h*_-p*g,N=f*x-d*y,O=f*_-p*y,V=d*_-p*x,C=w*V-P*O+T*N+R*I-E*D+m*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(o*V-l*O+u*N)*B,e[1]=(s*O-n*V-r*N)*B,e[2]=(y*m-x*E+_*R)*B,e[3]=(d*E-f*m-p*R)*B,e[4]=(l*I-a*V-u*D)*B,e[5]=(t*V-s*I+r*D)*B,e[6]=(x*T-g*m-_*P)*B,e[7]=(h*m-d*T+p*P)*B,e[8]=(a*O-o*I+u*S)*B,e[9]=(n*I-t*O-r*S)*B,e[10]=(g*E-y*T+_*w)*B,e[11]=(f*T-h*E-p*w)*B,e[12]=(o*D-a*N-l*S)*B,e[13]=(t*N-n*D+s*S)*B,e[14]=(y*P-g*R-x*w)*B,e[15]=(h*R-f*P+d*w)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,h*o+n,h*l-s*a,0,u*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,h=a+a,f=o+o,d=r*u,p=r*h,g=r*f,y=a*h,x=a*f,_=o*f,w=l*u,P=l*h,T=l*f,R=n.x,E=n.y,m=n.z;return s[0]=(1-(y+_))*R,s[1]=(p+T)*R,s[2]=(g-P)*R,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(d+_))*E,s[6]=(x+w)*E,s[7]=0,s[8]=(g+P)*m,s[9]=(x-w)*m,s[10]=(1-(d+y))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Yn.copy(this);let u=1/a,h=1/o,f=1/l;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Gn,l=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Nr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,l=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Gn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Nr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};c(Na,"Matrix4"),Na.prototype.isMatrix4=!0;var lt=Na,pr=new G,Yn=new lt,c_=new G(0,0,0),u_=new G(1,1,1),is=new G,ol=new G,yn=new G,fm=new lt,pm=new an,fc=class fc{constructor(e=0,t=0,n=0,s=fc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};c(fc,"Euler");var Sn=fc;Sn.DEFAULT_ORDER="XYZ";var gd=class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};c(gd,"Layers");var Ga=gd,h_=0,mm=new G,mr=new an,Ri=new lt,ll=new G,Ta=new G,d_=new G,f_=new an,gm=new G(1,0,0),xm=new G(0,1,0),_m=new G(0,0,1),vm={type:"added"},p_={type:"removed"},gr={type:"childadded",child:null},lh={type:"childremoved",child:null},Ir=class Ir extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ir.DEFAULT_UP.clone();let e=new G,t=new Sn,n=new an,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}c(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}c(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ve}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ir.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ta,ll,this.up):Ri.lookAt(ll,Ta,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ri),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),gr.child=e,this.dispatchEvent(gr),gr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p_),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,d_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,f_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(c(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let u in o){let h=o[u];delete h.metadata,l.push(h)}return l}c(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};c(Ir,"Object3D");var Wt=Ir;Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xd=class xd extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}};c(xd,"Group");var fn=xd,m_={type:"move"},_d=class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};c(_d,"WebXRController");var Or=_d,v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},cl={h:0,s:0,l:0};function ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}c(ch,"hue2rgb");var vd=class vd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=r_(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ch(a,r,e+1/3),this.g=ch(a,r,e),this.b=ch(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}c(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=v0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return je.workingToColorSpace(Jt.copy(this),e),Math.round(et(Jt.r*255,0,255))*65536+Math.round(et(Jt.g*255,0,255))*256+Math.round(et(Jt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,u,h=(o+a)/2;if(o===a)l=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Bt){je.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(cl);let n=ih(ss.h,cl.h,t),s=ih(ss.s,cl.s,t),r=ih(ss.l,cl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};c(vd,"Color");var Ue=vd,Jt=new Ue;Ue.NAMES=v0;var pc=class pc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};c(pc,"Fog");var Va=pc,yd=class yd extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};c(yd,"Scene");var Ha=yd,Zn=new G,Pi=new G,uh=new G,Ii=new G,xr=new G,_r=new G,ym=new G,hh=new G,dh=new G,fh=new G,ph=new xt,mh=new xt,gh=new xt,ls=class ls{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Pi.subVectors(n,t),uh.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Pi),l=Zn.dot(uh),u=Pi.dot(Pi),h=Pi.dot(uh),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(u*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(a,Ii.y),l.addScaledVector(o,Ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,t),mh.fromBufferAttribute(e,n),gh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ph,r.x),a.addScaledVector(mh,r.y),a.addScaledVector(gh,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Pi.subVectors(e,t),Zn.cross(Pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Zn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ls.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ls.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ls.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ls.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ls.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;xr.subVectors(s,n),_r.subVectors(r,n),hh.subVectors(e,n);let l=xr.dot(hh),u=_r.dot(hh);if(l<=0&&u<=0)return t.copy(n);dh.subVectors(e,s);let h=xr.dot(dh),f=_r.dot(dh);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*u;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(xr,a);fh.subVectors(e,r);let p=xr.dot(fh),g=_r.dot(fh);if(g>=0&&p<=g)return t.copy(r);let y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(_r,o);let x=h*g-p*f;if(x<=0&&f-h>=0&&p-g>=0)return ym.subVectors(r,s),o=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(ym,o);let _=1/(x+y+d);return a=y*_,o=d*_,t.copy(n).addScaledVector(xr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};c(ls,"Triangle");var Ni=ls,bd=class bd{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),hl.subVectors(this.max,Aa),vr.subVectors(e.a,Aa),yr.subVectors(e.b,Aa),br.subVectors(e.c,Aa),rs.subVectors(yr,vr),as.subVectors(br,yr),Bs.subVectors(vr,br);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Bs.z,Bs.y,rs.z,0,-rs.x,as.z,0,-as.x,Bs.z,0,-Bs.x,-rs.y,rs.x,0,-as.y,as.x,0,-Bs.y,Bs.x,0];return!xh(t,vr,yr,br,hl)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,vr,yr,br,hl))?!1:(dl.crossVectors(rs,as),t=[dl.x,dl.y,dl.z],xh(t,vr,yr,br,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};c(bd,"Box3");var us=bd,Li=[new G,new G,new G,new G,new G,new G,new G,new G],$n=new G,ul=new us,vr=new G,yr=new G,br=new G,rs=new G,as=new G,Bs=new G,Aa=new G,hl=new G,dl=new G,zs=new G;function xh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zs.fromArray(i,r);let o=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),l=e.dot(zs),u=t.dot(zs),h=n.dot(zs);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}c(xh,"satForAxes");var Ui=g_();function g_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[l]=u|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}c(g_,"_generateTables");function x_(i){Math.abs(i)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),i=et(i,-65504,65504),Ui.floatView[0]=i;let e=Ui.uint32View[0],t=e>>23&511;return Ui.baseTable[t]+((e&8388607)>>Ui.shiftTable[t])}c(x_,"toHalfFloat");function __(i){let e=i>>10;return Ui.uint32View[0]=Ui.mantissaTable[Ui.offsetTable[e]+(i&1023)]+Ui.exponentTable[e],Ui.floatView[0]}c(__,"fromHalfFloat");var Md=class Md{static toHalfFloat(e){return x_(e)}static fromHalfFloat(e){return __(e)}};c(Md,"DataUtils");var ui=Md,Tt=new G,fl=new ke,v_=0,Sd=class Sd extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nd,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?du(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):x0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_0(e,this.array)}};c(Sd,"BufferAttribute");var bt=Sd;var wd=class wd extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};c(wd,"Uint16BufferAttribute");var Wa=wd;var Ed=class Ed extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};c(Ed,"Uint32BufferAttribute");var Xa=Ed;var Td=class Td extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};c(Td,"Float32BufferAttribute");var St=Td,y_=new us,Ca=new G,_h=new G,Ad=class Ad{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);let t=Ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ca,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(_h)),this.expandByPoint(Ca.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};c(Ad,"Sphere");var Br=Ad,b_=0,zn=new lt,vh=new Wt,Mr=new G,bn=new us,Ra=new us,Ot=new G,mc=class mc extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?Xa:Wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(bn.min,Ra.min),bn.expandByPoint(Ot),Ot.addVectors(bn.max,Ra.max),bn.expandByPoint(Ot)):(bn.expandByPoint(Ra.min),bn.expandByPoint(Ra.max))}bn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ot.fromBufferAttribute(o,u),l&&(Mr.fromBufferAttribute(e,u),Ot.add(Mr)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],u=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new G,l[D]=new G;let h=new G,f=new G,d=new G,p=new ke,g=new ke,y=new ke,x=new G,_=new G;function w(D,I,N){u[D]=u[I]=u[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,N),p.fromBufferAttribute(r,D),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),f.sub(h),d.sub(h),g.sub(p),y.sub(p);let O=1/(g.x*y.y-y.x*g.y);isFinite(O)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(O),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(O),o[D].add(x),o[I].add(x),o[N].add(x),l[D].add(_),l[I].add(_),l[N].add(_))}c(w,"handleTriangle");let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let D=0,I=P.length;D<I;++D){let N=P[D],O=N.start,V=N.count;for(let C=O,B=O+V;C<B;C+=3)w(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let T=new G,R=new G,E=new G,m=new G;function S(D){E.fromBufferAttribute(s,D),m.copy(E);let I=o[D];T.copy(I),T.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(m,I);let O=R.dot(l[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,O)}c(S,"handleVertex");for(let D=0,I=n.count;D<I;++D)u[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,u=new G,h=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),l.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(l.length*h),p=0,g=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let _=0;_<h;_++)d[g++]=u[p++]}return new bt(d,h,f)}if(c(e,"convertBufferAttribute"),this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new mc,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],u=e(l,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(mc,"BufferGeometry");var Pt=mc,Cd=class Cd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nd,this.updateRanges=[],this.version=0,this.uuid=Ys()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=bm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=bm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};c(Cd,"InterleavedBuffer");var qa=Cd;function bm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ys()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}c(bm,"getArrayKey");var sn=new G,gc=class gc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?du(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):x0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):_0(e,this.data.array)}};c(gc,"InterleavedBufferAttribute");var zr=gc,yh=new G,M_=new G,S_=new Ve,Rd=class Rd{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yh.subVectors(n,t).cross(M_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(yh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||S_.getNormalMatrix(e),s=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};c(Rd,"Plane");var dn=Rd,w_=0,Pd=class Pd extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Xr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(c(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};c(Pd,"Material");var Bi=Pd,Id=class Id extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};c(Id,"SpriteMaterial");var hs=Id,Sr,Pa=new G,wr=new G,Er=new G,Tr=new ke,Ia=new ke,y0=new lt,pl=new G,La=new G,ml=new G,Mm=new ke,bh=new ke,Sm=new ke,Ld=class Ld extends Wt{constructor(e=new hs){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qa(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new zr(n,3,0,!1)),Sr.setAttribute("uv",new zr(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),y0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;gl(pl.set(-.5,-.5,0),Er,a,wr,s,r),gl(La.set(.5,-.5,0),Er,a,wr,s,r),gl(ml.set(.5,.5,0),Er,a,wr,s,r),Mm.set(0,0),bh.set(1,0),Sm.set(1,1);let o=e.ray.intersectTriangle(pl,La,ml,!1,Pa);if(o===null&&(gl(La.set(-.5,.5,0),Er,a,wr,s,r),bh.set(0,1),o=e.ray.intersectTriangle(pl,ml,La,!1,Pa),o===null))return;let l=e.ray.origin.distanceTo(Pa);l<e.near||l>e.far||t.push({distance:l,point:Pa.clone(),uv:Ni.getInterpolation(Pa,pl,La,ml,Mm,bh,Sm,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};c(Ld,"Sprite");var kr=Ld;function gl(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ia.x=r*Tr.x-s*Tr.y,Ia.y=s*Tr.x+r*Tr.y):Ia.copy(Tr),i.copy(e),i.x+=Ia.x,i.y+=Ia.y,i.applyMatrix4(y0)}c(gl,"transformVertex");var Di=new G,Mh=new G,xl=new G,_l=new G,Dd=class Dd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mh.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),_l.copy(this.origin).sub(Mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xl),o=_l.dot(this.direction),l=-_l.dot(xl),u=_l.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mh).addScaledVector(xl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,w=n.y-a.y,P=n.z-a.z,T=Math.abs(l),R=Math.abs(u),E=Math.abs(h),m,S,D,I,N,O,V,C,B,k,z,j;if(T>=R&&T>=E?(D=l,O=f,B=g,j=_,l>=0?(m=u,S=h,I=d,N=p,V=y,C=x,k=w,z=P):(m=h,S=u,I=p,N=d,V=x,C=y,k=P,z=w)):R>=E?(D=u,O=d,B=y,j=w,u>=0?(m=h,S=l,I=p,N=f,V=x,C=g,k=P,z=_):(m=l,S=h,I=f,N=p,V=g,C=x,k=_,z=P)):(D=h,O=p,B=x,j=P,h>=0?(m=l,S=u,I=f,N=d,V=g,C=y,k=_,z=w):(m=u,S=l,I=d,N=f,V=y,C=g,k=w,z=_)),D===0)return null;let X=m/D,Q=S/D,se=1/D,Se=I-X*O,Pe=N-Q*O,J=V-X*B,ue=C-Q*B,Te=k-X*j,De=z-Q*j,_e=Te*ue-De*J,ze=Se*De-Pe*Te,Je=J*Pe-ue*Se;if(s){if(_e<0||ze<0||Je<0)return null}else if((_e<0||ze<0||Je<0)&&(_e>0||ze>0||Je>0))return null;let Le=_e+ze+Je;if(Le===0)return null;let $e=se*(_e*O+ze*B+Je*j);return(Le>0?$e<0:$e>0)?null:this.at($e/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};c(Dd,"Ray");var Xl=Dd,Nd=class Nd extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};c(Nd,"MeshBasicMaterial");var ql=Nd,wm=new lt,ks=new Xl,vl=new Br,Em=new G,yl=new G,bl=new G,Ml=new G,Sh=new G,Sl=new G,Tm=new G,wl=new G,Ud=class Ud extends Wt{constructor(e=new Pt,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Sl.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let h=o[l],f=r[l];h!==0&&(Sh.fromBufferAttribute(f,e),a?Sl.addScaledVector(Sh,h):Sl.addScaledVector(Sh.sub(t),h))}t.add(Sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(vl.containsPoint(ks.origin)===!1&&(ks.intersectSphere(vl,Em)===null||ks.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(wm.copy(r).invert(),ks.copy(e.ray).applyMatrix4(wm),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],w=Math.max(x.start,p.start),P=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let T=w,R=P;T<R;T+=3){let E=o.getX(T),m=o.getX(T+1),S=o.getX(T+2);s=El(this,_,e,n,u,h,f,E,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){let w=o.getX(x),P=o.getX(x+1),T=o.getX(x+2);s=El(this,a,e,n,u,h,f,w,P,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],w=Math.max(x.start,p.start),P=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let T=w,R=P;T<R;T+=3){let E=T,m=T+1,S=T+2;s=El(this,_,e,n,u,h,f,E,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){let w=x,P=x+1,T=x+2;s=El(this,a,e,n,u,h,f,w,P,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};c(Ud,"Mesh");var wt=Ud;function E_(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===vs,o),l===null)return null;wl.copy(o),wl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(wl);return u<t.near||u>t.far?null:{distance:u,point:wl.clone(),object:i}}c(E_,"checkIntersection$1");function El(i,e,t,n,s,r,a,o,l,u){i.getVertexPosition(o,yl),i.getVertexPosition(l,bl),i.getVertexPosition(u,Ml);let h=E_(i,e,t,n,yl,bl,Ml,Tm);if(h){let f=new G;Ni.getBarycoord(Tm,yl,bl,Ml,f),s&&(h.uv=Ni.getInterpolatedAttribute(s,o,l,u,f,new ke)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,o,l,u,f,new ke)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,u,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c:u,normal:new G,materialIndex:0};Ni.getNormal(yl,bl,Ml,d.normal),h.face=d,h.barycoord=f}return h}c(El,"checkGeometryIntersection");var Fd=class Fd extends on{constructor(e=null,t=1,n=1,s,r,a,o,l,u=zt,h=zt,f,d){super(null,a,o,l,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(Fd,"DataTexture");var Gr=Fd;var Gs=new Br,T_=new ke(.5,.5),Tl=new G,Od=class Od{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],u=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],y=r[9],x=r[10],_=r[11],w=r[12],P=r[13],T=r[14],R=r[15];if(s[0].setComponents(u-a,p-h,_-g,R-w).normalize(),s[1].setComponents(u+a,p+h,_+g,R+w).normalize(),s[2].setComponents(u+o,p+f,_+y,R+P).normalize(),s[3].setComponents(u-o,p-f,_-y,R-P).normalize(),n)s[4].setComponents(l,d,x,T).normalize(),s[5].setComponents(u-l,p-d,_-x,R-T).normalize();else if(s[4].setComponents(u-l,p-d,_-x,R-T).normalize(),t===Gn)s[5].setComponents(u+l,p+d,_+x,R+T).normalize();else if(t===Nr)s[5].setComponents(l,d,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let t=T_.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};c(Od,"Frustum");var ds=Od,Am=new lt,xc=class xc{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Am.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ds),n[s].setFromProjectionMatrix(Am,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ds),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new xc().copy(this)}};c(xc,"FrustumArray");var Yl=xc;var Bd=class Bd extends on{constructor(e=[],t=Xs,n,s,r,a,o,l,u,h){super(e,t,n,s,r,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};c(Bd,"CubeTexture");var Ya=Bd,zd=class zd extends on{constructor(e,t,n,s,r,a,o,l,u){super(e,t,n,s,r,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};c(zd,"CanvasTexture");var Vr=zd;var kd=class kd extends on{constructor(e,t,n=Jn,s,r,a,o=zt,l=zt,u,h=Oi,f=1){if(h!==Oi&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};c(kd,"DepthTexture");var zi=kd,Gd=class Gd extends zi{constructor(e,t=Jn,n=Xs,s,r,a=zt,o=zt,l,u=Oi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};c(Gd,"CubeDepthTexture");var Za=Gd,Vd=class Vd extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};c(Vd,"ExternalTexture");var $a=Vd,_c=class _c extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],u=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2));function g(y,x,_,w,P,T,R,E,m,S,D){let I=T/m,N=R/S,O=T/2,V=R/2,C=E/2,B=m+1,k=S+1,z=0,j=0,X=new G;for(let Q=0;Q<k;Q++){let se=Q*N-V;for(let Se=0;Se<B;Se++){let Pe=Se*I-O;X[y]=Pe*w,X[x]=se*P,X[_]=C,u.push(X.x,X.y,X.z),X[y]=0,X[x]=0,X[_]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(Se/m),f.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let se=0;se<m;se++){let Se=d+se+B*Q,Pe=d+se+B*(Q+1),J=d+(se+1)+B*(Q+1),ue=d+(se+1)+B*Q;l.push(Se,Pe,ue),l.push(Pe,J,ue),j+=6}o.addGroup(p,j,D),p+=j,d+=z}c(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};c(_c,"BoxGeometry");var hi=_c;var vc=class vc extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],g=0,y=[],x=n/2,_=0;w(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(p,2));function w(){let T=new G,R=new G,E=0,m=(t-e)/n;for(let S=0;S<=r;S++){let D=[],I=S/r,N=I*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,C=V*l+o,B=Math.sin(C),k=Math.cos(C);R.x=N*B,R.y=-I*n+x,R.z=N*k,f.push(R.x,R.y,R.z),T.set(B,m,k).normalize(),d.push(T.x,T.y,T.z),p.push(V,1-I),D.push(g++)}y.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){let I=y[D][S],N=y[D+1][S],O=y[D+1][S+1],V=y[D][S+1];(e>0||D!==0)&&(h.push(I,N,V),E+=3),(t>0||D!==r-1)&&(h.push(N,O,V),E+=3)}u.addGroup(_,E,0),_+=E}c(w,"generateTorso");function P(T){let R=g,E=new ke,m=new G,S=0,D=T===!0?e:t,I=T===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,x*I,0),d.push(0,I,0),p.push(.5,.5),g++;let N=g;for(let O=0;O<=s;O++){let C=O/s*l+o,B=Math.cos(C),k=Math.sin(C);m.x=D*k,m.y=x*I,m.z=D*B,f.push(m.x,m.y,m.z),d.push(0,I,0),E.x=B*.5+.5,E.y=k*.5*I+.5,p.push(E.x,E.y),g++}for(let O=0;O<s;O++){let V=R+O,C=N+O;T===!0?h.push(C,C+1,V):h.push(C+1,C,V),S+=3}u.addGroup(_,S,T===!0?1:2),_+=S}c(P,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(vc,"CylinderGeometry");var di=vc,yc=class yc extends di{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new yc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(yc,"ConeGeometry");var fi=yc;var bc=class bc extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,h=l+1,f=e/o,d=t/l,p=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let w=_*d-a;for(let P=0;P<u;P++){let T=P*f-r;g.push(T,-w,0),y.push(0,0,1),x.push(P/o),x.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<o;w++){let P=w+u*_,T=w+u*(_+1),R=w+1+u*(_+1),E=w+1+u*_;p.push(P,T,E),p.push(T,R,E)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}};c(bc,"PlaneGeometry");var fs=bc;var Mc=class Mc extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),u=0,h=[],f=new G,d=new G,p=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let w=[],P=_/n,T=a+P*o,R=e*Math.cos(T),E=Math.sqrt(e*e-R*R),m=0;_===0&&a===0?m=.5/t:_===n&&l===Math.PI&&(m=-.5/t);for(let S=0;S<=t;S++){let D=S/t,I=s+D*r;f.x=-E*Math.cos(I),f.y=R,f.z=E*Math.sin(I),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),x.push(D+m,1-P),w.push(u++)}h.push(w)}for(let _=0;_<n;_++)for(let w=0;w<t;w++){let P=h[_][w+1],T=h[_][w],R=h[_+1][w],E=h[_+1][w+1];(_!==0||a>0)&&p.push(P,T,E),(_!==n-1||l<Math.PI)&&p.push(T,R,E)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};c(Mc,"SphereGeometry");var ps=Mc;var Sc=class Sc extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],u=[],h=[],f=[],d=new G,p=new G,g=new G;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=s;_++){let w=_/s*r;p.x=(e+t*Math.cos(x))*Math.cos(w),p.y=(e+t*Math.cos(x))*Math.sin(w),p.z=t*Math.sin(x),u.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),f.push(_/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let _=(s+1)*y+x-1,w=(s+1)*(y-1)+x-1,P=(s+1)*(y-1)+x,T=(s+1)*y+x;l.push(_,w,T),l.push(w,P,T)}this.setIndex(l),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};c(Sc,"TorusGeometry");var ms=Sc;function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Cm(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}c(Zs,"cloneUniforms");function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}c(Kt,"mergeUniforms");function Cm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}c(Cm,"isThreeObject");function A_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}c(A_,"cloneUniformsGroups");function sd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}c(sd,"getUnlitUniformColorSpace");var ho={clone:Zs,merge:Kt},C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hd=class Hd extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};c(Hd,"ShaderMaterial");var wn=Hd,Wd=class Wd extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};c(Wd,"RawShaderMaterial");var Zl=Wd,Xd=class Xd extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(Xd,"MeshStandardMaterial");var ki=Xd;var qd=class qd extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};c(qd,"MeshDepthMaterial");var $l=qd,Yd=class Yd extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};c(Yd,"MeshDistanceMaterial");var Jl=Yd;function Ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}c(Ar,"convertArray");function Al(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}c(Al,"hasTangents");var Zd=class Zd{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};c(Zd,"Interpolant");var gs=Zd,$d=class $d extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,o=2*t-n;break;case Ch:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:a=e,l=2*n-t;break;case Ch:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,x=y*g,_=-d*x+2*d*y-d*g,w=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,P=(-1-p)*x+(1.5+p)*y+.5*g,T=p*x-p*y;for(let R=0;R!==o;++R)r[R]=_*a[h+R]+w*a[u+R]+P*a[l+R]+T*a[f+R];return r}};c($d,"CubicInterpolant");var Kl=$d,Jd=class Jd extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[l+d]*h;return r}};c(Jd,"LinearInterpolant");var Ql=Jd,Kd=class Kd extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};c(Kd,"DiscreteInterpolant");var jl=Kd,Qd=class Qd extends gs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(s-t),y=1-g;for(let x=0;x!==o;++x)r[x]=a[u+x]*y+a[l+x]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[l+g],_=p*d+g*2,w=f[_],P=f[_+1],T=e*d+g*2,R=h[T],E=h[T+1],m=I_(n,t,w,R,s);r[g]=b0(m,y,P,E,x)}return r}};c(Qd,"BezierInterpolant");var ec=Qd;function b0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}c(b0,"cubicBezier");function P_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}c(P_,"cubicBezierSlope");function I_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=b0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=P_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}c(I_,"solveBezierParameter");var jd=class jd{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Al(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ec(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case kl:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break;case Eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Pl;case this.InterpolantFactoryMethodBezier:return Eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Al(this.settings)&&(Rm(this.settings.inTangents,e),Rm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Al(this.settings)&&(Pm(this.settings.inTangents,e),Pm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&s_(s))for(let o=0,l=s.length;o!==l;++o){let u=s[o];if(isNaN(u)){Ge("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,u=0;u!==n;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};c(jd,"KeyframeTrack");var En=jd;function Rm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}c(Rm,"shiftTangentTimes");function Pm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}c(Pm,"scaleTangentTimes");En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=kl;var ef=class ef extends En{constructor(e,t,n){super(e,t,n)}};c(ef,"BooleanKeyframeTrack");var xs=ef;xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ua;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var tf=class tf extends En{constructor(e,t,n,s){super(e,t,n,s)}};c(tf,"ColorKeyframeTrack");var tc=tf;tc.prototype.ValueTypeName="color";var nf=class nf extends En{constructor(e,t,n,s){super(e,t,n,s)}};c(nf,"NumberKeyframeTrack");var nc=nf;nc.prototype.ValueTypeName="number";var sf=class sf extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)an.slerpFlat(r,0,a,u-o,a,u,l);return r}};c(sf,"QuaternionLinearInterpolant");var ic=sf,rf=class rf extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}};c(rf,"QuaternionKeyframeTrack");var Ja=rf;Ja.prototype.ValueTypeName="quaternion";Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var af=class af extends En{constructor(e,t,n){super(e,t,n)}};c(af,"StringKeyframeTrack");var _s=af;_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ua;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var of=class of extends En{constructor(e,t,n,s){super(e,t,n,s)}};c(of,"VectorKeyframeTrack");var sc=of;sc.prototype.ValueTypeName="vector";var lf=class lf{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};c(lf,"LoadingManager");var rc=lf,M0=new rc,cf=class cf{constructor(e){this.manager=e!==void 0?e:M0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};c(cf,"Loader");var ac=cf;ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var uf=class uf extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};c(uf,"Light");var Ka=uf,hf=class hf extends Ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};c(hf,"HemisphereLight");var Qa=hf,wh=new lt,Im=new G,Lm=new G,df=class df{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};c(df,"LightShadow");var oc=df,Cl=new G,Rl=new an,li=new G,ff=class ff extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Cl,Rl,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};c(ff,"Camera");var ja=ff,os=new G,Dm=new ke,Nm=new ke,pf=class pf extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Dm,Nm),t.subVectors(Nm,Dm)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};c(pf,"PerspectiveCamera");var rn=pf;var mf=class mf extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};c(mf,"OrthographicCamera");var eo=mf,gf=class gf extends oc{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};c(gf,"DirectionalLightShadow");var Rh=gf,xf=class xf extends Ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};c(xf,"DirectionalLight");var to=xf;var Cr=-90,Rr=1,_f=class _f extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Cr,Rr,e,t);s.layers=this.layers,this.add(s);let r=new rn(Cr,Rr,e,t);r.layers=this.layers,this.add(r);let a=new rn(Cr,Rr,e,t);a.layers=this.layers,this.add(a);let o=new rn(Cr,Rr,e,t);o.layers=this.layers,this.add(o);let l=new rn(Cr,Rr,e,t);l.layers=this.layers,this.add(l);let u=new rn(Cr,Rr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let u of t)this.remove(u);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};c(_f,"CubeCamera");var Hr=_f,vf=class vf extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};c(vf,"ArrayCamera");var lc=vf;var rd="\\[\\]\\.:\\/",L_=new RegExp("["+rd+"]","g"),ad="[^"+rd+"]",D_="[^"+rd.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",ad),U_=/(WCOD+)?/.source.replace("WCOD",D_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ad),O_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ad),B_=new RegExp("^"+N_+U_+F_+O_+"$"),z_=["material","materials","bones","map"],yf=class yf{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};c(yf,"Composite");var Ph=yf,cs=class cs{constructor(e,t,n){this.path=t,this.parsedPath=n||cs.parseTrackName(t),this.node=cs.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new cs.Composite(e,t,n):new cs(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(e){let t=B_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=c(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=cs.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c(cs,"PropertyBinding");var dt=cs;dt.Composite=Ph;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);var wc=class wc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};c(wc,"Matrix2"),wc.prototype.isMatrix2=!0;var Ih=wc;function od(i,e,t,n){let s=k_(n);switch(t){case Jh:return i*e;case Qh:return i*e/s.components*s.byteLength;case Lc:return i*e/s.components*s.byteLength;case gi:return i*e*2/s.components*s.byteLength;case Dc:return i*e*2/s.components*s.byteLength;case Kh:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case Nc:return i*e*4/s.components*s.byteLength;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Bc:return Math.max(i,16)*Math.max(e,8)/4;case Uc:case Oc:return Math.max(i,8)*Math.max(e,8)/2;case zc:case kc:case Vc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gc:case co:case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ru:case au:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uo:case uu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}c(od,"getByteLength");function k_(i){switch(i){case pn:case qh:return{byteLength:1,components:1};case Yr:case Yh:case Tn:return{byteLength:2,components:1};case Pc:case Ic:return{byteLength:2,components:4};case Jn:case Rc:case Kn:return{byteLength:4,components:1};case Zh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}c(k_,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function W0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return c(s,"onAnimationFrame"),{start:c(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:c(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:c(function(r){t=r},"setAnimationLoop"),setContext:c(function(r){i=r},"setContext")}}c(W0,"WebGLAnimation");function Y_(i){let e=new WeakMap;function t(o,l){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}c(t,"createBuffer");function n(o,l,u){let h=l.array,f=l.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}c(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}c(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}c(r,"remove");function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return c(a,"update"),{get:s,remove:r,update:a}}c(Y_,"WebGLAttributes");var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ev=`#ifdef USE_AOMAP
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
#endif`,tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nv=`#ifdef USE_BATCHING
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
#endif`,iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,lv=`#ifdef USE_BUMPMAP
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xv=`#define PI 3.141592653589793
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
} // validated`,_v=`vec3 transformedNormal = objectNormal;
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
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",wv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,Uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,Xv=`uniform sampler2D dfgLUT;
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
}`,qv=`
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$v=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iy=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ay=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oy=`#if defined( USE_MORPHCOLORS )
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
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
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
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gy=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
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
}`,Dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fy=`#ifdef USE_SKINNING
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
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gy=`#ifdef USE_TRANSMISSION
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
#endif`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform float backgroundBlurriness;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
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
}`,eb=`#if DEPTH_PACKING == 3200
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
}`,tb=`#define DISTANCE
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
}`,nb=`#define DISTANCE
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`uniform float scale;
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
}`,ab=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#define LAMBERT
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
}`,ub=`#define LAMBERT
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
}`,hb=`#define MATCAP
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
}`,db=`#define MATCAP
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
}`,fb=`#define NORMAL
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
}`,pb=`#define NORMAL
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
}`,mb=`#define PHONG
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
}`,gb=`#define PHONG
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
}`,xb=`#define STANDARD
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
}`,_b=`#define STANDARD
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
}`,vb=`#define TOON
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
}`,yb=`#define TOON
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
}`,bb=`uniform float size;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,wb=`uniform vec3 color;
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
}`,Eb=`uniform float rotation;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Z_,alphahash_pars_fragment:$_,alphamap_fragment:J_,alphamap_pars_fragment:K_,alphatest_fragment:Q_,alphatest_pars_fragment:j_,aomap_fragment:ev,aomap_pars_fragment:tv,batching_pars_vertex:nv,batching_vertex:iv,begin_vertex:sv,beginnormal_vertex:rv,bsdfs:av,iridescence_fragment:ov,bumpmap_pars_fragment:lv,clipping_planes_fragment:cv,clipping_planes_pars_fragment:uv,clipping_planes_pars_vertex:hv,clipping_planes_vertex:dv,color_fragment:fv,color_pars_fragment:pv,color_pars_vertex:mv,color_vertex:gv,common:xv,defaultnormal_vertex:_v,displacementmap_pars_vertex:vv,displacementmap_vertex:yv,emissivemap_fragment:bv,emissivemap_pars_fragment:Mv,colorspace_fragment:Sv,colorspace_pars_fragment:wv,envmap_fragment:Ev,envmap_common_pars_fragment:Tv,envmap_pars_fragment:Av,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:zv,envmap_vertex:Rv,fog_vertex:Pv,fog_pars_vertex:Iv,fog_fragment:Lv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:Uv,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Bv,lights_toon_fragment:kv,lights_toon_pars_fragment:Gv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Hv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:Yv,lights_fragment_end:Zv,lightprobes_pars_fragment:$v,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:jv,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ry,morphinstance_vertex:ay,morphcolor_vertex:oy,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:uy,normal_fragment_begin:hy,normal_fragment_maps:dy,normal_pars_fragment:fy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:gy,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:yy,opaque_fragment:by,packing:My,premultiplied_alpha_fragment:Sy,project_vertex:wy,dithering_fragment:Ey,dithering_pars_fragment:Ty,roughnessmap_fragment:Ay,roughnessmap_pars_fragment:Cy,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Py,shadowmap_vertex:Iy,shadowmask_pars_fragment:Ly,skinbase_vertex:Dy,skinning_pars_vertex:Ny,skinning_vertex:Uy,skinnormal_vertex:Fy,specularmap_fragment:Oy,specularmap_pars_fragment:By,tonemapping_fragment:zy,tonemapping_pars_fragment:ky,transmission_fragment:Gy,transmission_pars_fragment:Vy,uv_pars_fragment:Hy,uv_pars_vertex:Wy,uv_vertex:Xy,worldpos_vertex:qy,background_vert:Yy,background_frag:Zy,backgroundCube_vert:$y,backgroundCube_frag:Jy,cube_vert:Ky,cube_frag:Qy,depth_vert:jy,depth_frag:eb,distance_vert:tb,distance_frag:nb,equirect_vert:ib,equirect_frag:sb,linedashed_vert:rb,linedashed_frag:ab,meshbasic_vert:ob,meshbasic_frag:lb,meshlambert_vert:cb,meshlambert_frag:ub,meshmatcap_vert:hb,meshmatcap_frag:db,meshnormal_vert:fb,meshnormal_frag:pb,meshphong_vert:mb,meshphong_frag:gb,meshphysical_vert:xb,meshphysical_frag:_b,meshtoon_vert:vb,meshtoon_frag:yb,points_vert:bb,points_frag:Mb,shadow_vert:Sb,shadow_frag:wb,sprite_vert:Eb,sprite_frag:Tb},ye={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},_i={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_i.physical={uniforms:Kt([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var fu={r:0,b:0,g:0},Ab=new lt,X0=new Ve;X0.set(-1,0,0,0,1,0,0,0,1);function Cb(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,u,h=null,f=0,d=null;function p(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){let T=w.backgroundBlurriness>0;P=e.get(P,T)}return P}c(p,"getBackground");function g(w){let P=!1,T=p(w);T===null?x(a,o):T&&T.isColor&&(x(T,1),P=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}c(g,"render");function y(w,P){let T=p(P);T&&T.isCubeTexture?(u===void 0&&(u=new wt(new hi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Zs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:c(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(P.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(X0),u.material.toneMapped=je.getTransfer(T.colorSpace)!==at,(h!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new wt(new fs(2,2),new wn({name:"BackgroundMaterial",uniforms:Zs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:c(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=je.getTransfer(T.colorSpace)!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}c(y,"addToRenderList");function x(w,P){w.getRGB(fu,sd(i)),t.buffers.color.setClear(fu.r,fu.g,fu.b,P,r)}c(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return c(_,"dispose"),{getClearColor:c(function(){return a},"getClearColor"),setClearColor:c(function(w,P=1){a.set(w),o=P,x(a,o)},"setClearColor"),getClearAlpha:c(function(){return o},"getClearAlpha"),setClearAlpha:c(function(w){o=w,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}c(Cb,"WebGLBackground");function Rb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,O,V,C,B){let k=!1,z=f(N,C,V,O);r!==z&&(r=z,u(r.object)),k=p(N,C,V,B),k&&g(N,C,V,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,T(N,O,V,C),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}c(o,"setup");function l(){return i.createVertexArray()}c(l,"createVertexArrayObject");function u(N){return i.bindVertexArray(N)}c(u,"bindVertexArrayObject");function h(N){return i.deleteVertexArray(N)}c(h,"deleteVertexArrayObject");function f(N,O,V,C){let B=C.wireframe===!0,k=n[O.id];k===void 0&&(k={},n[O.id]=k);let z=N.isInstancedMesh===!0?N.id:0,j=k[z];j===void 0&&(j={},k[z]=j);let X=j[V.id];X===void 0&&(X={},j[V.id]=X);let Q=X[B];return Q===void 0&&(Q=d(l()),X[B]=Q),Q}c(f,"getBindingState");function d(N){let O=[],V=[],C=[];for(let B=0;B<t;B++)O[B]=0,V[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:C,object:N,attributes:{},index:null}}c(d,"createBindingState");function p(N,O,V,C){let B=r.attributes,k=O.attributes,z=0,j=V.getAttributes();for(let X in j)if(j[X].location>=0){let se=B[X],Se=k[X];if(Se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),se===void 0||se.attribute!==Se||Se&&se.data!==Se.data)return!0;z++}return r.attributesNum!==z||r.index!==C}c(p,"needsUpdate");function g(N,O,V,C){let B={},k=O.attributes,z=0,j=V.getAttributes();for(let X in j)if(j[X].location>=0){let se=k[X];se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));let Se={};Se.attribute=se,se&&se.data&&(Se.data=se.data),B[X]=Se,z++}r.attributes=B,r.attributesNum=z,r.index=C}c(g,"saveCache");function y(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}c(y,"initAttributes");function x(N){_(N,0)}c(x,"enableAttribute");function _(N,O){let V=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;V[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),B[N]!==O&&(i.vertexAttribDivisor(N,O),B[N]=O)}c(_,"enableAttributeAndDivisor");function w(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,C=O.length;V<C;V++)O[V]!==N[V]&&(i.disableVertexAttribArray(V),O[V]=0)}c(w,"disableUnusedAttributes");function P(N,O,V,C,B,k,z){z===!0?i.vertexAttribIPointer(N,O,V,B,k):i.vertexAttribPointer(N,O,V,C,B,k)}c(P,"vertexAttribPointer");function T(N,O,V,C){y();let B=C.attributes,k=V.getAttributes(),z=O.defaultAttributeValues;for(let j in k){let X=k[j];if(X.location>=0){let Q=B[j];if(Q===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let se=Q.normalized,Se=Q.itemSize,Pe=e.get(Q);if(Pe===void 0)continue;let J=Pe.buffer,ue=Pe.type,Te=Pe.bytesPerElement,De=ue===i.INT||ue===i.UNSIGNED_INT||Q.gpuType===Rc;if(Q.isInterleavedBufferAttribute){let _e=Q.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Je=Q.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)_(X.location+Le,_e.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Le=0;Le<X.locationSize;Le++)x(X.location+Le);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Le=0;Le<X.locationSize;Le++)P(X.location+Le,Se/X.locationSize,ue,se,ze*Te,(Je+Se/X.locationSize*Le)*Te,De)}else{if(Q.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)_(X.location+_e,Q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<X.locationSize;_e++)x(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,J);for(let _e=0;_e<X.locationSize;_e++)P(X.location+_e,Se/X.locationSize,ue,se,Se*Te,Se/X.locationSize*_e*Te,De)}}else if(z!==void 0){let se=z[j];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}w()}c(T,"setupVertexAttributes");function R(){D();for(let N in n){let O=n[N];for(let V in O){let C=O[V];for(let B in C){let k=C[B];for(let z in k)h(k[z].object),delete k[z];delete C[B]}}delete n[N]}}c(R,"dispose");function E(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let V in O){let C=O[V];for(let B in C){let k=C[B];for(let z in k)h(k[z].object),delete k[z];delete C[B]}}delete n[N.id]}c(E,"releaseStatesOfGeometry");function m(N){for(let O in n){let V=n[O];for(let C in V){let B=V[C];if(B[N.id]===void 0)continue;let k=B[N.id];for(let z in k)h(k[z].object),delete k[z];delete B[N.id]}}}c(m,"releaseStatesOfProgram");function S(N){for(let O in n){let V=n[O],C=N.isInstancedMesh===!0?N.id:0,B=V[C];if(B!==void 0){for(let k in B){let z=B[k];for(let j in z)h(z[j].object),delete z[j];delete B[k]}delete V[C],Object.keys(V).length===0&&delete n[O]}}}c(S,"releaseStatesOfObject");function D(){I(),a=!0,r!==s&&(r=s,u(r.object))}c(D,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return c(I,"resetDefaultState"),{setup:o,reset:D,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}c(Rb,"WebGLBindingStates");function Pb(i,e,t){let n;function s(l){n=l}c(s,"setMode");function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}c(r,"render");function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}c(a,"renderInstances");function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}c(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}c(Pb,"WebGLBufferRenderer");function Ib(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}c(r,"getMaxAnisotropy");function a(m){return!(m!==Qn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}c(a,"textureFormatReadable");function o(m){let S=m===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==pn&&m!==Kn&&!S&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}c(o,"textureTypeReadable");function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}c(l,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=l(u);h!==u&&(Be("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:T,maxSamples:R,samples:E}}c(Ib,"WebGLCapabilities");function Lb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!x)r?h(null):u();else{let w=r?0:n,P=w*4,T=_.clippingState||null;l.value=T,T=h(g,d,P,p);for(let R=0;R!==P;++R)T[R]=t[R];_.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}c(u,"resetGlobalState");function h(f,d,p,g){let y=f!==null?f.length:0,x=null;if(y!==0){if(x=l.value,g!==!0||x===null){let _=p+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,T=p;P!==y;++P,T+=4)a.copy(f[P]).applyMatrix4(w,o),a.normal.toArray(x,T),x[T+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}c(h,"projectPlanes")}c(Lb,"WebGLClipping");var If=class If extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Hs});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=kt),new Hr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};c(If,"WebGLCubeRenderTarget");var mo=If,S0=256,Db=3,Nb=20,q0=256,Y0=16,Ub=3,Fb=new G,Ob=new Ue,xu=class xu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hr(1,10,null),this._boxMesh=new wt(new hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Fb}=r,l=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Ob));let x=new Hr(n,s,h);return x.position.copy(o),x.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(S0,g0(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===qr?this._setSize(e.image.length===0?S0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=w0(e,!1,!1),n=Math.log2(e)-Db;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=w0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=E0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bb(),this._integrationMaterial=zb());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Y0);for(let a=0;a<=n;a++){let o=xu.lodToRoughness(a,n);if(a>n-Ub)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(q0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kb());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};c(xu,"PMREMGenerator");var mu=xu;function w0(i,e,t){return new mo(i,{minFilter:Gi,generateMipmaps:e,type:Tn,colorSpace:Fa,depthBuffer:t})}c(w0,"_createRenderTarget");function go(i,e,t){return new wn({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:ln,blending:Hs,depthTest:!1,depthWrite:!1})}c(go,"_getMaterial");function Bb(){return go("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${q0}u

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
	`)}c(Bb,"_getGGXMaterial");function zb(){return go("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Y0}},`

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
	`)}c(zb,"_getIntegrationMaterial");function kb(){return go("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nb}
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
	`)}c(kb,"_getBlurMaterial");function E0(){return go("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}c(E0,"_getEquirectMaterial");function T0(){return go("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}c(T0,"_getCubemapMaterial");function Gb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}c(s,"get");function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===Tc||p===Ac)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new mo(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}c(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===Tc||p===Ac,y=p===Xs||p===qr;if(g||y){let x=t.get(d),_=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new mu(i)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let w=d.image;return g&&w&&w.height>0||y&&w&&l(w)?(n===null&&(n=new mu(i)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}c(a,"getPMREM");function o(d,p){return p===Tc?d.mapping=Xs:p===Ac&&(d.mapping=qr),d}c(o,"mapTextureMapping");function l(d){let p=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&p++;return p===g}c(l,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}c(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}c(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return c(f,"dispose"),{get:s,dispose:f}}c(Gb,"WebGLEnvironments");function Vb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return c(t,"getExtension"),{has:c(function(n){return t(n)!==null},"has"),init:c(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:c(function(n){let s=t(n);return s===null&&Da("WebGLRenderer: "+n+" extension not supported."),s},"get")}}c(Vb,"WebGLExtensions");function Hb(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}c(o,"onGeometryDispose");function l(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}c(l,"destroyGeometry");function u(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}c(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}c(h,"update");function f(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let w=y!==null?y.array.length:x.array.length/3-1,P=x.count>=65535?Xa:Wa,T=new P(Math.ceil(w/3)*6,1),R=T.array;if(y!==null){let m=y.array;_=y.version;for(let S=0,D=0;S<w;S+=3){let I=m[S+0],N=m[S+1],O=m[S+2];R[D++]=I,R[D++]=N,R[D++]=N,R[D++]=O,R[D++]=O,R[D++]=I}}else{_=x.version;for(let m=0,S=0;m<w;m+=3){let D=m+0,I=m+1,N=m+2;R[S++]=D,R[S++]=I,R[S++]=I,R[S++]=N,R[S++]=N,R[S++]=D}}T.version=_;let E=r.get(g);E&&e.remove(E),r.set(g,T)}c(f,"updateWireframeAttribute");function d(g){let y=r.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&f(g)}else f(g);return r.get(g)}c(d,"getWireframeAttribute");function p(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return c(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}c(Hb,"WebGLGeometries");function Wb(i,e,t){let n;function s(f){n=f}c(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}c(o,"setIndex");function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}c(l,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}c(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let y=0;for(let x=0;x<p;x++)y+=d[x];t.update(y,n,1)}c(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}c(Wb,"WebGLIndexedBufferRenderer");function Xb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}c(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return c(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}c(Xb,"WebGLInfo");function qb(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var p=I;c(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],P=o.morphAttributes.color||[],T=0;g===!0&&(T=1),y===!0&&(T=2),x===!0&&(T=3);let R=o.attributes.position.count*T,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let m=new Float32Array(R*E*4*f),S=new ka(m,R,E,f);S.type=Kn,S.needsUpdate=!0;let D=T*4;for(let N=0;N<f;N++){let O=_[N],V=w[N],C=P[N],B=R*E*4*N;for(let k=0;k<O.count;k++){let z=k*D;g===!0&&(s.fromBufferAttribute(O,k),m[B+z+0]=s.x,m[B+z+1]=s.y,m[B+z+2]=s.z,m[B+z+3]=0),y===!0&&(s.fromBufferAttribute(V,k),m[B+z+4]=s.x,m[B+z+5]=s.y,m[B+z+6]=s.z,m[B+z+7]=0),x===!0&&(s.fromBufferAttribute(C,k),m[B+z+8]=s.x,m[B+z+9]=s.y,m[B+z+10]=s.z,m[B+z+11]=C.itemSize===4?s.w:1)}}d={count:f,texture:S,size:new ke(R,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return c(r,"update"),{update:r}}c(qb,"WebGLMorphtargets");function Yb(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}c(a,"update");function o(){r=new WeakMap}c(o,"dispose");function l(u){let h=u.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return c(l,"onInstancedMeshDispose"),{update:a,dispose:o}}c(Yb,"WebGLObjects");var Zb={[zh]:"LINEAR_TONE_MAPPING",[kh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[io]:"ACES_FILMIC_TONE_MAPPING",[Hh]:"AGX_TONE_MAPPING",[Wh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function $b(i,e,t,n,s,r){let a=new Mn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,h=new Pt;h.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new St([0,2,0,0,2,0],2));let f=new Zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new wt(h,f),p=new eo(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,w=null,P=[],T=!1;this.setSize=function(R,E){a.setSize(R,E),o!==null&&o.setSize(R,E),l!==null&&l.setSize(R,E);for(let m=0;m<P.length;m++){let S=P[m];S.setSize&&S.setSize(R,E)}},this.setEffects=function(R){P=R,T=P.length>0&&P[0].isRenderPass===!0;let E=a.width,m=a.height;P.length>0&&o===null&&(o=new Mn(E,m,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(E,m,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&P.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new zi(E,m),r===!0&&(u.format=Vi,u.type=qs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<P.length;D++){let I=P[D];I.setSize&&I.setSize(E,m),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(R,E){if(x||R.toneMapping===mi&&P.length===0)return!1;if(w=E,E!==null){let m=E.width,S=E.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return T===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=mi,!0},this.hasRenderPass=function(){return T},this.end=function(R,E){R.toneMapping=_,x=!0;let m=a,S=o;for(let D=0;D<P.length;D++){let I=P[D];I.enabled!==!1&&(I.render(R,S,m,E),I.needsSwap!==!1&&(m=S,S=S===o?l:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},je.getTransfer(g)===at&&(f.defines.SRGB_TRANSFER="");let D=Zb[y];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=m.texture,R.setRenderTarget(w),R.render(d,p),w=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}c($b,"WebGLOutput");var Z0=new on,$0=new zi(1,1),J0=new Za(1),K0=new ka,Q0=new Wl,j0=new Ya,A0=[],C0=[],R0=new Float32Array(16),P0=new Float32Array(9),I0=new Float32Array(4);function $r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=A0[s];if(r===void 0&&(r=new Float32Array(s),A0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}c($r,"flatten");function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}c(It,"arraysEqual");function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}c(Lt,"copyArray");function _u(i,e){let t=C0[e];t===void 0&&(t=new Int32Array(e),C0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}c(_u,"allocTexUnits");function Jb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}c(Jb,"setValueV1f");function Kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}c(Kb,"setValueV2f");function Qb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}c(Qb,"setValueV3f");function jb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}c(jb,"setValueV4f");function eM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;I0.set(n),i.uniformMatrix2fv(this.addr,!1,I0),Lt(t,n)}}c(eM,"setValueM2");function tM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;P0.set(n),i.uniformMatrix3fv(this.addr,!1,P0),Lt(t,n)}}c(tM,"setValueM3");function nM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;R0.set(n),i.uniformMatrix4fv(this.addr,!1,R0),Lt(t,n)}}c(nM,"setValueM4");function iM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}c(iM,"setValueV1i");function sM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}c(sM,"setValueV2i");function rM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}c(rM,"setValueV3i");function aM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}c(aM,"setValueV4i");function oM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}c(oM,"setValueV1ui");function lM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}c(lM,"setValueV2ui");function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}c(cM,"setValueV3ui");function uM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}c(uM,"setValueV4ui");function vu(i){return i.version===0&&(i.compareFunction=td,i.needsUpdate=!0),i}c(vu,"initShadowTexture");function hM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=vu($0):r=Z0,t.setTexture2D(e||r,s)}c(hM,"setValueT1");function dM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Q0,s)}c(dM,"setValueT3D1");function fM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=vu(J0):r=j0,t.setTextureCube(e||r,s)}c(fM,"setValueT6");function pM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||K0,s)}c(pM,"setValueT2DArray1");function mM(i){switch(i){case 5126:return Jb;case 35664:return Kb;case 35665:return Qb;case 35666:return jb;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return pM}}c(mM,"getSingularSetter");function gM(i,e){i.uniform1fv(this.addr,e)}c(gM,"setValueV1fArray");function xM(i,e){let t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}c(xM,"setValueV2fArray");function _M(i,e){let t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}c(_M,"setValueV3fArray");function vM(i,e){let t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}c(vM,"setValueV4fArray");function yM(i,e){let t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}c(yM,"setValueM2Array");function bM(i,e){let t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}c(bM,"setValueM3Array");function MM(i,e){let t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}c(MM,"setValueM4Array");function SM(i,e){i.uniform1iv(this.addr,e)}c(SM,"setValueV1iArray");function wM(i,e){i.uniform2iv(this.addr,e)}c(wM,"setValueV2iArray");function EM(i,e){i.uniform3iv(this.addr,e)}c(EM,"setValueV3iArray");function TM(i,e){i.uniform4iv(this.addr,e)}c(TM,"setValueV4iArray");function AM(i,e){i.uniform1uiv(this.addr,e)}c(AM,"setValueV1uiArray");function CM(i,e){i.uniform2uiv(this.addr,e)}c(CM,"setValueV2uiArray");function RM(i,e){i.uniform3uiv(this.addr,e)}c(RM,"setValueV3uiArray");function PM(i,e){i.uniform4uiv(this.addr,e)}c(PM,"setValueV4uiArray");function IM(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vu($0):a=Z0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}c(IM,"setValueT1Array");function LM(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Q0,r[a])}c(LM,"setValueT3DArray");function DM(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=vu(J0):a=j0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}c(DM,"setValueT6Array");function NM(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||K0,r[a])}c(NM,"setValueT2DArrayArray");function UM(i){switch(i){case 5126:return gM;case 35664:return xM;case 35665:return _M;case 35666:return vM;case 35674:return yM;case 35675:return bM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return wM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return NM}}c(UM,"getPureArraySetter");var Lf=class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}};c(Lf,"SingleUniform");var Sf=Lf,Df=class Df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UM(t.type)}};c(Df,"PureArrayUniform");var wf=Df,Nf=class Nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};c(Nf,"StructuredUniform");var Ef=Nf,bf=/(\w+)(\])?(\[|\.)?/g;function L0(i,e){i.seq.push(e),i.map[e.id]=e}c(L0,"addUniform");function FM(i,e,t){let n=i.name,s=n.length;for(bf.lastIndex=0;;){let r=bf.exec(n),a=bf.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){L0(t,u===void 0?new Sf(o,i,e):new wf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ef(o),L0(t,f)),t=f}}}c(FM,"parseUniform");var Uf=class Uf{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);FM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};c(Uf,"WebGLUniforms");var Zr=Uf;function D0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}c(D0,"WebGLShader");var OM=37297,BM=0;function zM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}c(zM,"handleSource");var N0=new Ve;function kM(i){je._getMatrix(N0,je.workingColorSpace,i);let e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Oa:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}c(kM,"getEncodingComponents");function U0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zM(i.getShaderSource(e),o)}else return r}c(U0,"getShaderErrors");function GM(i,e){let t=kM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}c(GM,"getTexelEncodingFunction");var VM={[zh]:"Linear",[kh]:"Reinhard",[Gh]:"Cineon",[io]:"ACESFilmic",[Hh]:"AgX",[Wh]:"Neutral",[Vh]:"Custom"};function HM(i,e){let t=VM[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}c(HM,"getToneMappingFunction");var pu=new G;function WM(){je.getLuminanceCoefficients(pu);let i=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}c(WM,"getLuminanceFunction");function XM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}c(XM,"generateVertexExtensions");function qM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}c(qM,"generateDefines");function YM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}c(YM,"fetchAttributeLocations");function po(i){return i!==""}c(po,"filterEmptyLine");function F0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}c(F0,"replaceLightNums");function O0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}c(O0,"replaceClippingPlaneNums");var ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(i){return i.replace(ZM,$M)}c(Tf,"resolveIncludes");function $M(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Tf(t)}c($M,"includeReplacer");var JM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(i){return i.replace(JM,KM)}c(B0,"unrollLoops");function KM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}c(KM,"loopReplacer");function z0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}c(z0,"generatePrecision");var QM={[no]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function jM(i){return QM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}c(jM,"generateShadowMapTypeDefine");var eS={[qr]:"ENVMAP_MODE_REFRACTION"};function tS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}c(tS,"generateEnvMapModeDefine");var nS={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[t0]:"ENVMAP_BLENDING_MIX",[n0]:"ENVMAP_BLENDING_ADD"};function iS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nS[i.combine]||"ENVMAP_BLENDING_NONE"}c(iS,"generateEnvMapBlendingDefine");function sS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jM(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=tS(t),f=iS(t),d=XM(t),p=qM(r),g=s.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(po).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(po).join(`
`),x.length>0&&(x+=`
`)):(y=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),x=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==mi?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),WM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),a=Tf(a),a=F0(a,t),a=O0(a,t),o=Tf(o),o=F0(o,t),o=O0(o,t),a=B0(a),o=B0(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=_+y+a,P=_+x+o,T=D0(s,s.VERTEX_SHADER,w),R=D0(s,s.FRAGMENT_SHADER,P);s.attachShader(g,T),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(R)||"",C=N.trim(),B=O.trim(),k=V.trim(),z=!0,j=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,R);else{let X=U0(s,T,"vertex"),Q=U0(s,R,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+X+`
`+Q)}else C!==""?Be("WebGLProgram: Program Info Log:",C):(B===""||k==="")&&(j=!1);j&&(I.diagnostics={runnable:z,programLog:C,vertexShader:{log:B,prefix:y},fragmentShader:{log:k,prefix:x}})}s.deleteShader(T),s.deleteShader(R),m=new Zr(s,g),S=YM(s,g)}c(E,"onFirstUse");let m;this.getUniforms=function(){return m===void 0&&E(this),m};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,OM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}c(sS,"WebGLProgram");var rS=0,Ff=class Ff{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cf(e),t.set(e,n)),n}};c(Ff,"WebGLShaderCache");var Af=Ff,Of=class Of{constructor(e){this.id=rS++,this.code=e,this.usedTimes=0}};c(Of,"WebGLShaderStage");var Cf=Of;function aS(i){return i===gi||i===co||i===uo}c(aS,"isPackedRGFormat");function oS(i,e,t,n,s,r){let a=new Ga,o=new Af,l=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(m){return l.add(m),m===0?"uv":`uv${m}`}c(p,"getChannel");function g(m,S,D,I,N,O){let V=I.fog,C=N.geometry,B=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||B,k),j=d[m.type],X=n.precision;m.precision!==null&&(X=n.getMaxPrecision(m.precision),X!==m.precision&&Be("WebGLProgram.getParameters:",m.precision,"not supported, using",X,"instead."));let Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,se=Q!==void 0?Q.length:0,Se=0;C.morphAttributes.position!==void 0&&(Se=1),C.morphAttributes.normal!==void 0&&(Se=2),C.morphAttributes.color!==void 0&&(Se=3);let Pe,J,ue,Te;if(j){let Me=_i[j];Pe=Me.vertexShader,J=Me.fragmentShader}else{Pe=m.vertexShader,J=m.fragmentShader;let Me=o.getVertexShaderStage(m),ot=o.getFragmentShaderStage(m);o.update(m,Me,ot),ue=Me.id,Te=ot.id}let De=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,Je=N.isBatchedMesh===!0,Le=!!m.map,$e=!!m.matcap,st=!!z,qe=st&&z.isPMREMTexture===!0,Mt=!!m.aoMap,vt=!!m.lightMap,Ct=!!m.bumpMap&&m.wireframe===!1,ct=!!m.normalMap,vn=!!m.displacementMap,Nt=!!m.emissiveMap,Un=!!m.metalnessMap,Fn=!!m.roughnessMap,On=m.anisotropy>0,F=m.clearcoat>0,Bn=m.diffuseRoughness>0,mt=m.dispersion>0,gt=m.retroreflectivity>0,ve=m.iridescence>0,Rt=m.sheen>0,Oe=m.transmission>0,He=On&&!!m.anisotropyMap,A=F&&!!m.clearcoatMap,b=F&&!!m.clearcoatNormalMap,q=F&&!!m.clearcoatRoughnessMap,oe=Bn&&!!m.diffuseRoughnessMap,re=ve&&!!m.iridescenceMap,he=ve&&!!m.iridescenceThicknessMap,ge=Rt&&!!m.sheenColorMap,ee=Rt&&!!m.sheenRoughnessMap,ne=!!m.specularMap,fe=!!m.specularColorMap,L=!!m.specularIntensityMap,ie=Oe&&!!m.transmissionMap,K=Oe&&!!m.thicknessMap,pe=!!m.gradientMap,ce=!!m.alphaMap,de=m.alphaTest>0,Ne=!!m.alphaHash,Ye=!!m.extensions,le=mi;m.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(le=i.toneMapping);let Fe=qe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Xe={shaderID:j,shaderType:m.type,shaderName:m.name,vertexShader:Pe,fragmentShader:J,defines:m.defines,customVertexShaderID:ue,customFragmentShaderID:Te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:X,batching:Je,batchingColor:Je&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Le,matcap:$e,envMap:st,envMapMode:st&&z.mapping,envMapPMREM:qe,envMapMaxLod:qe?Fe.length-1:null,envMapSize:qe?Fe[0].width:null,aoMap:Mt,lightMap:vt,bumpMap:Ct,normalMap:ct,displacementMap:vn,emissiveMap:Nt,normalMapObjectSpace:ct&&m.normalMapType===r0,normalMapTangentSpace:ct&&m.normalMapType===hu,packedNormalMap:ct&&m.normalMapType===hu&&aS(m.normalMap.format),metalnessMap:Un,roughnessMap:Fn,anisotropy:On,anisotropyMap:He,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:q,diffuseRoughness:Bn,diffuseRoughnessMap:oe,dispersion:mt,retroreflection:gt,iridescence:ve,iridescenceMap:re,iridescenceThicknessMap:he,sheen:Rt,sheenColorMap:ge,sheenRoughnessMap:ee,specularMap:ne,specularColorMap:fe,specularIntensityMap:L,transmission:Oe,transmissionMap:ie,thicknessMap:K,gradientMap:pe,opaque:m.transparent===!1&&m.blending===Xr&&m.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ne,combine:m.combine,mapUv:Le&&p(m.map.channel),aoMapUv:Mt&&p(m.aoMap.channel),lightMapUv:vt&&p(m.lightMap.channel),bumpMapUv:Ct&&p(m.bumpMap.channel),normalMapUv:ct&&p(m.normalMap.channel),displacementMapUv:vn&&p(m.displacementMap.channel),emissiveMapUv:Nt&&p(m.emissiveMap.channel),metalnessMapUv:Un&&p(m.metalnessMap.channel),roughnessMapUv:Fn&&p(m.roughnessMap.channel),anisotropyMapUv:He&&p(m.anisotropyMap.channel),clearcoatMapUv:A&&p(m.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(m.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(m.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(m.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(m.sheenRoughnessMap.channel),specularMapUv:ne&&p(m.specularMap.channel),specularColorMapUv:fe&&p(m.specularColorMap.channel),specularIntensityMapUv:L&&p(m.specularIntensityMap.channel),transmissionMapUv:ie&&p(m.transmissionMap.channel),thicknessMapUv:K&&p(m.thicknessMap.channel),alphaMapUv:ce&&p(m.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ct||On),vertexNormals:!!C.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Le||ce),fog:!!V,useFog:m.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||C.attributes.normal===void 0&&ct===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Le&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===at,decodeVideoTextureEmissive:Nt&&m.emissiveMap.isVideoTexture===!0&&je.getTransfer(m.emissiveMap.colorSpace)===at,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===pi,flipSided:m.side===ln,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ye&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&m.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}c(g,"getParameters");function y(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let D in m.defines)S.push(D),S.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(x(S,m),_(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}c(y,"getProgramCacheKey");function x(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}c(x,"getProgramCacheKeyParameters");function _(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}c(_,"getProgramCacheKeyBooleans");function w(m){let S=d[m.type],D;if(S){let I=_i[S];D=ho.clone(I.uniforms)}else D=m.uniforms;return D}c(w,"getUniforms");function P(m,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new sS(i,S,m,s),u.push(D),h.set(S,D)),D}c(P,"acquireProgram");function T(m){if(--m.usedTimes===0){let S=u.indexOf(m);u[S]=u[u.length-1],u.pop(),h.delete(m.cacheKey),m.destroy()}}c(T,"releaseProgram");function R(m){o.remove(m)}c(R,"releaseShaderCache");function E(){o.dispose()}return c(E,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:w,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:E}}c(oS,"WebGLPrograms");function lS(){let i=new WeakMap;function e(a){return i.has(a)}c(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}c(t,"get");function n(a){i.delete(a)}c(n,"remove");function s(a,o,l){i.get(a)[o]=l}c(s,"update");function r(){i=new WeakMap}return c(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}c(lS,"WebGLProperties");function cS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}c(cS,"painterSortStable");function k0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}c(k0,"reversePainterSortStable");function G0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}c(r,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}c(a,"materialVariant");function o(d,p,g,y,x,_){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:_},i[e]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=g,w.materialVariant=a(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=x,w.group=_),e++,w}c(o,"getNextRenderItem");function l(d,p,g,y,x,_,w){w.reversedDepth===!0&&(x=-x);let P=o(d,p,g,y,x,_);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):t.push(P)}c(l,"push");function u(d,p,g,y,x,_){let w=o(d,p,g,y,x,_);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):t.unshift(w)}c(u,"unshift");function h(d,p){t.length>1&&t.sort(d||cS),n.length>1&&n.sort(p||k0),s.length>1&&s.sort(p||k0)}c(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return c(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:u,finish:f,sort:h}}c(G0,"WebGLRenderList");function uS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new G0,i.set(n,[a])):s>=r.length?(a=new G0,r.push(a)):a=r[s],a}c(e,"get");function t(){i=new WeakMap}return c(t,"dispose"),{get:e,dispose:t}}c(uS,"WebGLRenderLists");function hS(){let i={};return{get:c(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ue};break;case"SpotLight":t={position:new G,direction:new G,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t},"get")}}c(hS,"UniformsCache");function dS(){let i={};return{get:c(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}c(dS,"ShadowUniformsCache");var fS=0;function pS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}c(pS,"shadowCastingAndTexturingLightsFirst");function mS(i){let e=new hS,t=dS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);let s=new G,r=new lt,a=new lt;function o(u){let h=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,y=0,x=0,_=0,w=0,P=0,T=0,R=0,E=0,m=0,S=0,D=0,I=0;u.sort(pS);for(let O=0,V=u.length;O<V;O++){let C=u[O],B=C.color,k=C.intensity,z=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gi?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*k,f+=B.g*k,d+=B.b*k;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],k);I++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=j;let Se=Q.getViewportCount();for(let Pe=0;Pe<Se;Pe++)n.sunShadowMatrix[y+Pe]=Q.getMatrix(Pe),n.sunShadowCascade[y+Pe]=Q._cascadeData[Pe];y+=Se,g++}n.sun[p]=X,p++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,n.directionalShadow[x]=se,n.directionalShadowMap[x]=j,n.directionalShadowMatrix[x]=C.shadow.matrix,R++}n.directional[x]=X,x++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(B).multiplyScalar(k),X.distance=z,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[w]=X;let Q=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,Q.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[w]=Q.matrix,C.castShadow){let se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,n.spotShadow[w]=se,n.spotShadowMap[w]=j,m++}w++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[P]=X,P++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let Q=C.shadow,se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,se.shadowCameraNear=Q.camera.near,se.shadowCameraFar=Q.camera.far,n.pointShadow[_]=se,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=C.shadow.matrix,E++}n.point[_]=X,_++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(k),X.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[T]=X,T++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let N=n.hash;(N.sunLength!==p||N.directionalLength!==x||N.pointLength!==_||N.spotLength!==w||N.rectAreaLength!==P||N.hemiLength!==T||N.numSunShadows!==g||N.numDirectionalShadows!==R||N.numPointShadows!==E||N.numSpotShadows!==m||N.numSpotMaps!==S||N.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=x,n.spot.length=w,n.rectArea.length=P,n.point.length=_,n.hemi.length=T,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,N.sunLength=p,N.directionalLength=x,N.pointLength=_,N.spotLength=w,N.rectAreaLength=P,N.hemiLength=T,N.numSunShadows=g,N.numDirectionalShadows=R,N.numPointShadows=E,N.numSpotShadows=m,N.numSpotMaps=S,N.numLightProbes=I,n.version=fS++)}c(o,"setup");function l(u,h){let f=0,d=0,p=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let w=0,P=u.length;w<P;w++){let T=u[w];if(T.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(_),f++}else if(T.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),d++}else if(T.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(_),g++}else if(T.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(_),a.identity(),r.copy(T.matrixWorld),r.premultiply(_),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(_),p++}else if(T.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(_),x++}}}return c(l,"setupView"),{setup:o,setupView:l,state:n}}c(mS,"WebGLLights");function V0(i){let e=new mS(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}c(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}c(a,"pushLight");function o(f){n.push(f)}c(o,"pushShadow");function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}c(l,"setupLights");function u(f){e.setupView(t,f)}c(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}c(V0,"WebGLRenderState");function gS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new V0(i),e.set(s,[o])):r>=a.length?(o=new V0(i),a.push(o)):o=a[r],o}c(t,"get");function n(){e=new WeakMap}return c(n,"dispose"),{get:t,dispose:n}}c(gS,"WebGLRenderStates");var xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`,vS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],yS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],H0=new lt,fo=new G,Mf=new G;function bS(i,e,t){let n=new ds,s=new ke,r=new ke,a=new xt,o=new $l,l=new Jl,u={},h=t.maxTextureSize,f={[vs]:ln,[ln]:vs,[pi]:pi},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:xS,fragmentShader:_S}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new wt(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let _=this.type;this.render=function(E,m,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===Ec&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=no);let D=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Hs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=_!==this.type;V&&m.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=E.length;C<B;C++){let k=E[C],z=k.shadow;if(z===void 0){Be("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let j=z.getFrameExtents();s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Wr){if(k.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Mn(s.x,s.y,{format:gi,type:Tn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new zi(s.x,s.y,Kn),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Oi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else k.isPointLight?(z.map=new mo(s.x),z.map.depthTexture=new Za(s.x,Jn)):(z.map=new Mn(s.x,s.y),z.map.depthTexture=new zi(s.x,s.y,Jn)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Oi,this.type===no?(z.map.depthTexture.compareFunction=X?ed:jh,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,S);let se=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Se=0;Se<Q;Se++){let Pe=z.getCamera(Se);if(k.isPointLight){let J=z.camera,ue=z.matrix,Te=k.distance||J.far;Te!==J.far&&(J.far=Te,J.updateProjectionMatrix()),fo.setFromMatrixPosition(k.matrixWorld),J.position.copy(fo),Mf.copy(J.position),Mf.add(vS[Se]),J.up.copy(yS[Se]),J.lookAt(Mf),J.updateMatrixWorld(),ue.makeTranslation(-fo.x,-fo.y,-fo.z),H0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(H0,J.coordinateSystem,J.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(z.map),i.clear());let J=z.getViewport(Se);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=z.getFrustum(Se),T(m,S,Pe,k,se,this.type)}z.isPointLightShadow!==!0&&this.type===Wr&&w(z,S),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(D,I,N)};function w(E,m){let S=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Mn(s.x,s.y,{format:gi,type:Tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(m,null,S,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(m,null,S,p,y,null)}c(w,"VSMPass");function P(E,m,S,D){let I=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let O=I.uuid,V=m.uuid,C=u[O];C===void 0&&(C={},u[O]=C);let B=C[V];B===void 0&&(B=I.clone(),C[V]=B,m.addEventListener("dispose",R)),I=B}if(I.visible=m.visible,I.wireframe=m.wireframe,D===Wr?I.side=m.shadowSide!==null?m.shadowSide:m.side:I.side=m.shadowSide!==null?m.shadowSide:f[m.side],I.alphaMap=m.alphaMap,I.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,I.map=m.map,I.clipShadows=m.clipShadows,I.clippingPlanes=m.clippingPlanes,I.clipIntersection=m.clipIntersection,I.displacementMap=m.displacementMap,I.displacementScale=m.displacementScale,I.displacementBias=m.displacementBias,I.wireframeLinewidth=m.wireframeLinewidth,I.linewidth=m.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=S}return I}c(P,"getDepthMaterial");function T(E,m,S,D,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Wr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let C=e.update(E),B=E.material;if(Array.isArray(B)){let k=C.groups;for(let z=0,j=k.length;z<j;z++){let X=k[z],Q=B[X.materialIndex];if(Q&&Q.visible){let se=P(E,Q,D,N);E.onBeforeShadow(i,E,m,S,C,se,X),i.renderBufferDirect(S,null,C,se,E,X),E.onAfterShadow(i,E,m,S,C,se,X)}}}else if(B.visible){let k=P(E,B,D,N);E.onBeforeShadow(i,E,m,S,C,k,null),i.renderBufferDirect(S,null,C,k,E,null),E.onAfterShadow(i,E,m,S,C,k,null)}}let V=E.children;for(let C=0,B=V.length;C<B;C++)T(V[C],m,S,D,I,N)}c(T,"renderObject");function R(E){E.target.removeEventListener("dispose",R);for(let S in u){let D=u[S],I=E.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}c(R,"onMaterialDispose")}c(bS,"WebGLShadowMap");function MS(i,e){function t(){let L=!1,ie=new xt,K=null,pe=new xt(0,0,0,0);return{setMask:c(function(ce){K!==ce&&!L&&(i.colorMask(ce,ce,ce,ce),K=ce)},"setMask"),setLocked:c(function(ce){L=ce},"setLocked"),setClear:c(function(ce,de,Ne,Ye,le){le===!0&&(ce*=Ye,de*=Ye,Ne*=Ye),ie.set(ce,de,Ne,Ye),pe.equals(ie)===!1&&(i.clearColor(ce,de,Ne,Ye),pe.copy(ie))},"setClear"),reset:c(function(){L=!1,K=null,pe.set(-1,0,0,0)},"reset")}}c(t,"ColorBuffer");function n(){let L=!1,ie=!1,K=null,pe=null,ce=null;return{setReversed:c(function(de){if(ie!==de){let Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ie=de;let Ye=ce;ce=null,this.setClear(Ye)}},"setReversed"),getReversed:c(function(){return ie},"getReversed"),setTest:c(function(de){de?_e(i.DEPTH_TEST):ze(i.DEPTH_TEST)},"setTest"),setMask:c(function(de){K!==de&&!L&&(i.depthMask(de),K=de)},"setMask"),setFunc:c(function(de){if(ie&&(de=m0[de]),pe!==de){switch(de){case Ll:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Nl:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Ul:i.depthFunc(i.EQUAL);break;case Fl:i.depthFunc(i.GEQUAL);break;case Ol:i.depthFunc(i.GREATER);break;case Bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=de}},"setFunc"),setLocked:c(function(de){L=de},"setLocked"),setClear:c(function(de){ce!==de&&(ce=de,ie&&(de=1-de),i.clearDepth(de))},"setClear"),reset:c(function(){L=!1,K=null,pe=null,ce=null,ie=!1},"reset")}}c(n,"DepthBuffer");function s(){let L=!1,ie=null,K=null,pe=null,ce=null,de=null,Ne=null,Ye=null,le=null;return{setTest:c(function(Fe){L||(Fe?_e(i.STENCIL_TEST):ze(i.STENCIL_TEST))},"setTest"),setMask:c(function(Fe){ie!==Fe&&!L&&(i.stencilMask(Fe),ie=Fe)},"setMask"),setFunc:c(function(Fe,Xe,Me){(K!==Fe||pe!==Xe||ce!==Me)&&(i.stencilFunc(Fe,Xe,Me),K=Fe,pe=Xe,ce=Me)},"setFunc"),setOp:c(function(Fe,Xe,Me){(de!==Fe||Ne!==Xe||Ye!==Me)&&(i.stencilOp(Fe,Xe,Me),de=Fe,Ne=Xe,Ye=Me)},"setOp"),setLocked:c(function(Fe){L=Fe},"setLocked"),setClear:c(function(Fe){le!==Fe&&(i.clearStencil(Fe),le=Fe)},"setClear"),reset:c(function(){L=!1,ie=null,K=null,pe=null,ce=null,de=null,Ne=null,Ye=null,le=null},"reset")}}c(s,"StencilBuffer");let r=new t,a=new n,o=new s,l={},u=new WeakMap,h={},f={},d={},p=new WeakMap,g=[],y=null,x=!1,_=null,w=null,P=null,T=null,R=null,E=null,m=null,S=new Ue(0,0,0),D=0,I=!1,N=null,O=null,V=null,C=null,B=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,j=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=j>=2);let Q=null,se={},Se=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),J=new xt().fromArray(Se),ue=new xt().fromArray(Pe);function Te(L,ie,K,pe){let ce=new Uint8Array(4),de=i.createTexture();i.bindTexture(L,de),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<K;Ne++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ie+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return de}c(Te,"createTexture");let De={};De[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(Dr),Ct(!1),ct(Lh),_e(i.CULL_FACE),Mt(Hs);function _e(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}c(_e,"enable");function ze(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}c(ze,"disable");function Je(L,ie){return d[L]!==ie?(i.bindFramebuffer(L,ie),d[L]=ie,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}c(Je,"bindFramebuffer");function Le(L,ie){let K=g,pe=!1;if(L){K=p.get(ie),K===void 0&&(K=[],p.set(ie,K));let ce=L.textures;if(K.length!==ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ne=ce.length;de<Ne;de++)K[de]=i.COLOR_ATTACHMENT0+de;K.length=ce.length,pe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,pe=!0);pe&&i.drawBuffers(K)}c(Le,"drawBuffers");function $e(L){return y!==L?(i.useProgram(L),y=L,!0):!1}c($e,"useProgram");let st={[Ws]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};st[km]=i.MIN,st[Gm]=i.MAX;let qe={[Vm]:i.ZERO,[Hm]:i.ONE,[Wm]:i.SRC_COLOR,[Fh]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[Zm]:i.DST_COLOR,[qm]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[Oh]:i.ONE_MINUS_SRC_ALPHA,[$m]:i.ONE_MINUS_DST_COLOR,[Ym]:i.ONE_MINUS_DST_ALPHA,[Km]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[jm]:i.CONSTANT_ALPHA,[e0]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(L,ie,K,pe,ce,de,Ne,Ye,le,Fe){if(L===Hs){x===!0&&(ze(i.BLEND),x=!1);return}if(x===!1&&(_e(i.BLEND),x=!0),L!==Om){if(L!==_||Fe!==I){if((w!==Ws||R!==Ws)&&(i.blendEquation(i.FUNC_ADD),w=Ws,R=Ws),Fe)switch(L){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",L);break}else switch(L){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",L);break}P=null,T=null,E=null,m=null,S.set(0,0,0),D=0,_=L,I=Fe}return}ce=ce||ie,de=de||K,Ne=Ne||pe,(ie!==w||ce!==R)&&(i.blendEquationSeparate(st[ie],st[ce]),w=ie,R=ce),(K!==P||pe!==T||de!==E||Ne!==m)&&(i.blendFuncSeparate(qe[K],qe[pe],qe[de],qe[Ne]),P=K,T=pe,E=de,m=Ne),(Ye.equals(S)===!1||le!==D)&&(i.blendColor(Ye.r,Ye.g,Ye.b,le),S.copy(Ye),D=le),_=L,I=!1}c(Mt,"setBlending");function vt(L,ie){L.side===pi?ze(i.CULL_FACE):_e(i.CULL_FACE);let K=L.side===ln;ie&&(K=!K),Ct(K),L.blending===Xr&&L.transparent===!1?Mt(Hs):Mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}c(vt,"setMaterial");function Ct(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}c(Ct,"setFlipSided");function ct(L){L!==Um?(_e(i.CULL_FACE),L!==O&&(L===Lh?i.cullFace(i.BACK):L===Fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),O=L}c(ct,"setCullFace");function vn(L){L!==V&&(z&&i.lineWidth(L),V=L)}c(vn,"setLineWidth");function Nt(L,ie,K){L?(_e(i.POLYGON_OFFSET_FILL),(C!==ie||B!==K)&&(C=ie,B=K,a.getReversed()&&(ie=-ie,K=-K),i.polygonOffset(ie,K))):ze(i.POLYGON_OFFSET_FILL)}c(Nt,"setPolygonOffset");function Un(L){L?_e(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}c(Un,"setScissorTest");function Fn(L){L===void 0&&(L=i.TEXTURE0+k-1),Q!==L&&(i.activeTexture(L),Q=L)}c(Fn,"activeTexture");function On(L,ie,K){K===void 0&&(Q===null?K=i.TEXTURE0+k-1:K=Q);let pe=se[K];pe===void 0&&(pe={type:void 0,texture:void 0},se[K]=pe),(pe.type!==L||pe.texture!==ie)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(L,ie||De[L]),pe.type=L,pe.texture=ie)}c(On,"bindTexture");function F(){let L=se[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}c(F,"unbindTexture");function Bn(){try{i.compressedTexImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(Bn,"compressedTexImage2D");function mt(){try{i.compressedTexImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(mt,"compressedTexImage3D");function gt(){try{i.texSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(gt,"texSubImage2D");function ve(){try{i.texSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(ve,"texSubImage3D");function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(Rt,"compressedTexSubImage2D");function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(Oe,"compressedTexSubImage3D");function He(){try{i.texStorage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(He,"texStorage2D");function A(){try{i.texStorage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(A,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(b,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(q,"texImage3D");function oe(L){return f[L]!==void 0?f[L]:i.getParameter(L)}c(oe,"getParameter");function re(L,ie){f[L]!==ie&&(i.pixelStorei(L,ie),f[L]=ie)}c(re,"pixelStorei");function he(L){J.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),J.copy(L))}c(he,"scissor");function ge(L){ue.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}c(ge,"viewport");function ee(L,ie){let K=u.get(ie);K===void 0&&(K=new WeakMap,u.set(ie,K));let pe=K.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(ie,L.name),i.uniformBlockBinding(ie,pe,pe),K.set(L,pe))}c(ee,"updateUBOMapping");function ne(L,ie,K){let ce=u.get(ie).get(L);l[ce]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,K),l[ce]=K)}c(ne,"uniformBlockBinding");function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,se={},d={},l={},p=new WeakMap,g=[],y=null,x=!1,_=null,w=null,P=null,T=null,R=null,E=null,m=null,S=new Ue(0,0,0),D=0,I=!1,N=null,O=null,V=null,C=null,B=null,J.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return c(fe,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:ze,bindFramebuffer:Je,drawBuffers:Le,useProgram:$e,setBlending:Mt,setMaterial:vt,setFlipSided:Ct,setCullFace:ct,setLineWidth:vn,setPolygonOffset:Nt,setScissorTest:Un,activeTexture:Fn,bindTexture:On,unbindTexture:F,compressedTexImage2D:Bn,compressedTexImage3D:mt,texImage2D:b,texImage3D:q,pixelStorei:re,getParameter:oe,updateUBOMapping:ee,uniformBlockBinding:ne,texStorage2D:He,texStorage3D:A,texSubImage2D:gt,texSubImage3D:ve,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Oe,scissor:he,viewport:ge,reset:fe}}c(MS,"WebGLState");function SS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap,f=new Set,d,p=new WeakMap,g=new Set,y=new FinalizationRegistry(A=>g.delete(A)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return x?new OffscreenCanvas(A,b):Ba("canvas")}c(_,"createCanvas");function w(A,b,q){let oe=1,re=He(A);if((re.width>q||re.height>q)&&(oe=q/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let he=Math.floor(oe*re.width),ge=Math.floor(oe*re.height);d===void 0&&(d=_(he,ge));let ee=b?_(he,ge):d;return ee.width=he,ee.height=ge,ee.getContext("2d").drawImage(A,0,0,he,ge),Be("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+he+"x"+ge+")."),ee}else return"data"in A&&Be("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}c(w,"resizeImage");function P(A){return A.generateMipmaps}c(P,"textureNeedsGenerateMipmaps");function T(A){i.generateMipmap(A)}c(T,"generateMipmap");function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}c(R,"getTargetType");function E(A,b,q,oe,re,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge;oe&&(ge=e.get("EXT_texture_norm16"),ge||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=b;if(b===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8),q===i.UNSIGNED_SHORT&&ge&&(ee=ge.R16_EXT),q===i.SHORT&&ge&&(ee=ge.R16_SNORM_EXT)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),b===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8),q===i.UNSIGNED_SHORT&&ge&&(ee=ge.RG16_EXT),q===i.SHORT&&ge&&(ee=ge.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),q===i.UNSIGNED_INT&&(ee=i.RGB32UI),q===i.BYTE&&(ee=i.RGB8I),q===i.SHORT&&(ee=i.RGB16I),q===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),q===i.BYTE&&(ee=i.RGBA8I),q===i.SHORT&&(ee=i.RGBA16I),q===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_SHORT&&ge&&(ee=ge.RGB16_EXT),q===i.SHORT&&ge&&(ee=ge.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),b===i.RGBA){let ne=he?Oa:je.getTransfer(re);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=ne===at?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ge&&(ee=ge.RGBA16_EXT),q===i.SHORT&&ge&&(ee=ge.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}c(E,"getInternalFormat");function m(A,b){let q;return A?b===null||b===Jn||b===qs?q=i.DEPTH24_STENCIL8:b===Kn?q=i.DEPTH32F_STENCIL8:b===Yr&&(q=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jn||b===qs?q=i.DEPTH_COMPONENT24:b===Kn?q=i.DEPTH_COMPONENT32F:b===Yr&&(q=i.DEPTH_COMPONENT16),q}c(m,"getInternalDepthFormat");function S(A,b){return P(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==kt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}c(S,"getMipLevels");function D(A){let b=new WeakRef(A);n.get(A).__ref=b,g.add(b),y.register(A,b,b)}c(D,"track");function I(A){let b=n.get(A).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}c(I,"untrack");function N(A){V(A.target)}c(N,"onTextureDispose");function O(A){C(A.target)}c(O,"onRenderTargetDispose");function V(A){A.removeEventListener("dispose",N),I(A),k(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}c(V,"destroyTexture");function C(A){A.removeEventListener("dispose",O),I(A),j(A)}c(C,"destroyRenderTarget");function B(){for(let A of g){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):V(b))}g.clear(),f.clear()}c(B,"dispose");function k(A){let b=n.get(A);if(b.__webglInit===void 0)return;let q=A.source,oe=p.get(q);if(oe){let re=oe[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(A),Object.keys(oe).length===0&&p.delete(q)}n.remove(A)}c(k,"deallocateTexture");function z(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let q=A.source,oe=p.get(q);delete oe[b.__cacheKey],a.memory.textures--}c(z,"deleteTexture");function j(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let q=A.depthTexture;if(q&&q.renderTarget===A&&V(q),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let he=0;he<b.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[re][he]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let oe=A.textures;for(let re=0,he=oe.length;re<he;re++){let ge=n.get(oe[re]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(oe[re])}n.remove(A)}c(j,"deallocateRenderTarget");let X=0;function Q(){X=0}c(Q,"resetTextureUnits");function se(){return X}c(se,"getTextureUnits");function Se(A){X=A}c(Se,"setTextureUnits");function Pe(){let A=X;return A>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}c(Pe,"allocateTextureUnit");function J(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}c(J,"getTextureCacheKey");function ue(A,b){let q=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let oe=A.image;if(oe===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(q,A,b);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}c(ue,"setTexture2D");function Te(A,b){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){vt(q,A,b);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}c(Te,"setTexture2DArray");function De(A,b){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){vt(q,A,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}c(De,"setTexture3D");function _e(A,b){let q=n.get(A);if(A.version>0&&q.__version!==A.version){Ct(q,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}c(_e,"setTextureCube");let ze={[Vs]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},Je={[zt]:i.NEAREST,[i0]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Cc]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},Le={[o0]:i.NEVER,[td]:i.ALWAYS,[l0]:i.LESS,[jh]:i.LEQUAL,[c0]:i.EQUAL,[ed]:i.GEQUAL,[u0]:i.GREATER,[h0]:i.NOTEQUAL};function $e(A,b){if(b.type===Kn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kt||b.magFilter===Cc||b.magFilter===so||b.magFilter===Gi||b.minFilter===kt||b.minFilter===Cc||b.minFilter===so||b.minFilter===Gi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ze[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ze[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ze[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Je[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Je[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zt||b.minFilter!==so&&b.minFilter!==Gi||b.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}c($e,"setTextureParameters");function st(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N),D(b));let oe=b.source,re=p.get(oe);re===void 0&&(re={},p.set(oe,re));let he=J(b);if(he!==A.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[he].usedTimes++;let ge=re[A.__cacheKey];ge!==void 0&&(re[A.__cacheKey].usedTimes--,ge.usedTimes===0&&z(b)),A.__cacheKey=he,A.__webglTexture=re[he].texture}return q}c(st,"initTexture");function qe(A,b,q){return Math.floor(Math.floor(A/q)/b)}c(qe,"getRow");function Mt(A,b,q,oe){let he=A.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,oe,b.data);else{he.sort((L,ie)=>L.start-ie.start);let ge=0;for(let L=1;L<he.length;L++){let ie=he[ge],K=he[L],pe=ie.start+ie.count,ce=qe(K.start,b.width,4),de=qe(ie.start,b.width,4);K.start<=pe+1&&ce===de&&qe(K.start+K.count-1,b.width,4)===ce?ie.count=Math.max(ie.count,K.start+K.count-ie.start):(++ge,he[ge]=K)}he.length=ge+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,ie=he.length;L<ie;L++){let K=he[L],pe=Math.floor(K.start/4),ce=Math.ceil(K.count/4),de=pe%b.width,Ne=Math.floor(pe/b.width),Ye=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(i.TEXTURE_2D,0,de,Ne,Ye,le,q,oe,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}c(Mt,"updateTexture");function vt(A,b,q){let oe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=i.TEXTURE_3D);let re=st(A,b),he=b.source;t.bindTexture(oe,A.__webglTexture,i.TEXTURE0+q);let ge=n.get(he);if(he.version!==ge.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=je.getPrimaries(je.workingColorSpace),Fe=b.colorSpace===Hi?null:je.getPrimaries(b.colorSpace),Xe=b.colorSpace===Hi||le===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ne=w(b.image,!1,s.maxTextureSize);ne=Oe(b,ne);let fe=r.convert(b.format,b.colorSpace),L=r.convert(b.type),ie=E(b.internalFormat,fe,L,b.normalized,b.colorSpace,b.isVideoTexture);$e(oe,b);let K,pe=b.mipmaps,ce=b.isVideoTexture!==!0,de=ge.__version===void 0||re===!0,Ne=he.dataReady,Ye=S(b,ne);if(b.isDepthTexture)ie=m(b.format===Vi,b.type),de&&(ce?t.texStorage2D(i.TEXTURE_2D,1,ie,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ie,ne.width,ne.height,0,fe,L,null));else if(b.isDataTexture)if(pe.length>0){ce&&de&&t.texStorage2D(i.TEXTURE_2D,Ye,ie,pe[0].width,pe[0].height);for(let le=0,Fe=pe.length;le<Fe;le++)K=pe[le],ce?Ne&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,L,K.data):t.texImage2D(i.TEXTURE_2D,le,ie,K.width,K.height,0,fe,L,K.data);b.generateMipmaps=!1}else ce?(de&&t.texStorage2D(i.TEXTURE_2D,Ye,ie,ne.width,ne.height),Ne&&Mt(b,ne,fe,L)):t.texImage2D(i.TEXTURE_2D,0,ie,ne.width,ne.height,0,fe,L,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ie,pe[0].width,pe[0].height,ne.depth);for(let le=0,Fe=pe.length;le<Fe;le++)if(K=pe[le],b.format!==Qn)if(fe!==null)if(ce){if(Ne)if(b.layerUpdates.size>0){let Xe=od(K.width,K.height,b.format,b.type);for(let Me of b.layerUpdates){let ot=K.data.subarray(Me*Xe/K.data.BYTES_PER_ELEMENT,(Me+1)*Xe/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Me,K.width,K.height,1,fe,ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,ne.depth,fe,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ie,K.width,K.height,ne.depth,0,K.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,ne.depth,fe,L,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ie,K.width,K.height,ne.depth,0,fe,L,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ce&&de&&t.texStorage2D(i.TEXTURE_2D,Ye,ie,pe[0].width,pe[0].height);for(let le=0,Fe=pe.length;le<Fe;le++)K=pe[le],b.format!==Qn?fe!==null?ce?Ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,K.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ie,K.width,K.height,0,K.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ne&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,L,K.data):t.texImage2D(i.TEXTURE_2D,le,ie,K.width,K.height,0,fe,L,K.data)}else if(b.isDataArrayTexture)if(ce){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ie,ne.width,ne.height,ne.depth),Ne)if(b.layerUpdates.size>0){let le=od(ne.width,ne.height,b.format,b.type);for(let Fe of b.layerUpdates){let Xe=ne.data.subarray(Fe*le/ne.data.BYTES_PER_ELEMENT,(Fe+1)*le/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,ne.width,ne.height,1,fe,L,Xe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,L,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,ne.width,ne.height,ne.depth,0,fe,L,ne.data);else if(b.isData3DTexture)ce?(de&&t.texStorage3D(i.TEXTURE_3D,Ye,ie,ne.width,ne.height,ne.depth),Ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,L,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ie,ne.width,ne.height,ne.depth,0,fe,L,ne.data);else if(b.isFramebufferTexture){if(de)if(ce)t.texStorage2D(i.TEXTURE_2D,Ye,ie,ne.width,ne.height);else{let le=ne.width,Fe=ne.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,ie,le,Fe,0,fe,L,null),le>>=1,Fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ne.parentNode!==le){le.appendChild(ne),f.add(b),le.onpaint=Fe=>{let Xe=Fe.changedElements;for(let Me of f)Xe.includes(Me.image)&&(Me.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Xe=i.RGBA,Me=i.RGBA,ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xe,Me,ot,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ce&&de){let le=He(pe[0]);t.texStorage2D(i.TEXTURE_2D,Ye,ie,le.width,le.height)}for(let le=0,Fe=pe.length;le<Fe;le++)K=pe[le],ce?Ne&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,fe,L,K):t.texImage2D(i.TEXTURE_2D,le,ie,fe,L,K);b.generateMipmaps=!1}else if(ce){if(de){let le=He(ne);t.texStorage2D(i.TEXTURE_2D,Ye,ie,le.width,le.height)}Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,L,ne)}else t.texImage2D(i.TEXTURE_2D,0,ie,fe,L,ne);P(b)&&b.mipmapsAutoUpdate===!0&&T(oe),ge.__version=he.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}c(vt,"uploadTexture");function Ct(A,b,q){if(b.image.length!==6)return;let oe=st(A,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let he=n.get(re);if(re.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let ge=je.getPrimaries(je.workingColorSpace),ee=b.colorSpace===Hi?null:je.getPrimaries(b.colorSpace),ne=b.colorSpace===Hi||ge===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let fe=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,ie=[];for(let Me=0;Me<6;Me++)!fe&&!L?ie[Me]=w(b.image[Me],!0,s.maxCubemapSize):ie[Me]=L?b.image[Me].image:b.image[Me],ie[Me]=Oe(b,ie[Me]);let K=ie[0],pe=r.convert(b.format,b.colorSpace),ce=r.convert(b.type),de=E(b.internalFormat,pe,ce,b.normalized,b.colorSpace),Ne=b.isVideoTexture!==!0,Ye=he.__version===void 0||oe===!0,le=re.dataReady,Fe=S(b,K);$e(i.TEXTURE_CUBE_MAP,b);let Xe;if(b.isDepthTexture){if(de=m(b.format===Vi,b.type),Ye)if(Ne)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,K.width,K.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,K.width,K.height,0,pe,ce,null)}else if(fe){Ne&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,K.width,K.height);for(let Me=0;Me<6;Me++){Xe=ie[Me].mipmaps;for(let ot=0;ot<Xe.length;ot++){let Ut=Xe[ot];b.format!==Qn?pe!==null?Ne?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,0,0,Ut.width,Ut.height,pe,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,de,Ut.width,Ut.height,0,Ut.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,0,0,Ut.width,Ut.height,pe,ce,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,de,Ut.width,Ut.height,0,pe,ce,Ut.data)}}}else{if(Xe=b.mipmaps,Ne&&Ye){Xe.length>0&&Fe++;let Me=He(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ie[Me].width,ie[Me].height,pe,ce,ie[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,ie[Me].width,ie[Me].height,0,pe,ce,ie[Me].data);for(let ot=0;ot<Xe.length;ot++){let ji=Xe[ot].image[Me].image;Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,0,0,ji.width,ji.height,pe,ce,ji.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,de,ji.width,ji.height,0,pe,ce,ji.data)}}else{Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe,ce,ie[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,pe,ce,ie[Me]);for(let ot=0;ot<Xe.length;ot++){let Ut=Xe[ot];Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,0,0,pe,ce,Ut.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,de,pe,ce,Ut.image[Me])}}}P(b)&&b.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),he.__version=re.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}c(Ct,"uploadCubeTexture");function ct(A,b,q,oe,re,he){let ge=r.convert(q.format,q.colorSpace),ee=r.convert(q.type),ne=E(q.internalFormat,ge,ee,q.normalized,q.colorSpace),fe=n.get(b),L=n.get(q);if(L.__renderTarget=b,!fe.__hasExternalTextures){let ie=Math.max(1,b.width>>he),K=Math.max(1,b.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,ne,ie,K,b.depth,0,ge,ee,null):t.texImage2D(re,he,ne,ie,K,0,ge,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,L.__webglTexture,0,gt(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,L.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}c(ct,"setupFrameBufferTexture");function vn(A,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let oe=b.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,he=m(b.stencilBuffer,re),ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(b),he,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(b),he,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{let oe=b.textures;for(let re=0;re<oe.length;re++){let he=oe[re],ge=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),ne=E(he.internalFormat,ge,ee,he.normalized,he.colorSpace);ve(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(b),ne,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(b),ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ne,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}c(vn,"setupRenderBufferStorage");function Nt(A,b,q){let oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(b.depthTexture);re.__renderTarget=b;let he=oe?b.depthTexture.image[0]:b.depthTexture.image;(!re.__webglTexture||he.width!==b.width||he.height!==b.height)&&(he.width=b.width,he.height=b.height,b.depthTexture.needsUpdate=!0),oe?_e(b.depthTexture,0):ue(b.depthTexture,0);let ge=re.__webglTexture,ee=gt(b),ne=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,fe=b.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oi)ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ne,ge,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ne,ge,0);else if(b.depthTexture.format===Vi)ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ne,ge,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}c(Nt,"setupDepthTexture");function Un(A){let b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let oe=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){let re=c(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",re)},"disposeEvent");oe.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=oe}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let oe=0;oe<6;oe++)Nt(b.__webglFramebuffer[oe],A,oe);else A.texture.mipmaps.length>0?Nt(b.__webglFramebuffer[0],A,0):Nt(b.__webglFramebuffer,A,0);else if(q){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=i.createRenderbuffer(),vn(b.__webglDepthbuffer[oe],A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),vn(b.__webglDepthbuffer,A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}c(Un,"setupDepthRenderbuffer");function Fn(A,b,q){let oe=n.get(A);b!==void 0&&ct(oe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Un(A)}c(Fn,"rebindTextures");function On(A){let b=A.texture,q=n.get(A),oe=n.get(b);A.addEventListener("dispose",O),D(A);let re=A.textures,he=A.isWebGLCubeRenderTarget===!0,ge=re.length>1;if(ge||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=b.version,a.memory.textures++),he){q.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0){q.__webglFramebuffer[ee]=[];for(let ne=0;ne<b.mipmaps.length;ne++)q.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else q.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)q.__webglFramebuffer[ee]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ee=0,ne=re.length;ee<ne;ee++){let fe=n.get(re[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){let ne=re[ee];q.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ee]);let fe=r.convert(ne.format,ne.colorSpace),L=r.convert(ne.type),ie=E(ne.internalFormat,fe,L,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),K=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,q.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),vn(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),$e(i.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)ct(q.__webglFramebuffer[ee][ne],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else ct(q.__webglFramebuffer[ee],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);P(b)?T(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let ee=0,ne=re.length;ee<ne;ee++){let fe=re[ee],L=n.get(fe),ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,L.__webglTexture),$e(ie,fe),ct(q.__webglFramebuffer,A,fe,i.COLOR_ATTACHMENT0+ee,ie,0),P(fe)&&T(ie)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,oe.__webglTexture),$e(ee,b),b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)ct(q.__webglFramebuffer[ne],A,b,i.COLOR_ATTACHMENT0,ee,ne);else ct(q.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ee,0);P(b)?T(ee):b.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Un(A)}c(On,"setupRenderTarget");function F(A){let b=A.textures;for(let q=0,oe=b.length;q<oe;q++){let re=b[q];if(P(re)&&re.mipmapsAutoUpdate===!0){let he=R(A),ge=n.get(re).__webglTexture;t.bindTexture(he,ge),T(he),t.unbindTexture()}}}c(F,"updateRenderTargetMipmap");let Bn=[];function mt(A){if(A.samples>0){if(ve(A)===!1){let b=A.textures,q=A.width,oe=A.height,re=i.COLOR_BUFFER_BIT,he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),ee=b.length>1;if(ee)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let L=n.get(b[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,q,oe,0,0,q,oe,re,i.NEAREST),l===!0&&(Bn.length=0,Bn.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Bn.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let L=n.get(b[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}c(mt,"updateMultisampleRenderTarget");function gt(A){return Math.min(s.maxSamples,A.samples)}c(gt,"getRenderTargetSamples");function ve(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}c(ve,"useMultisampledRTT");function Rt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}c(Rt,"updateVideoTexture");function Oe(A,b){let q=A.colorSpace,oe=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Fa&&q!==Hi&&(je.getTransfer(q)===at?(oe!==Qn||re!==pn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",q)),b}c(Oe,"verifyColorSpace");function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}c(He,"getDimensions"),this.allocateTextureUnit=Pe,this.resetTextureUnits=Q,this.getTextureUnits=se,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=Te,this.setTexture3D=De,this.setTextureCube=_e,this.rebindTextures=Fn,this.setupRenderTarget=On,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Un,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ve,this.dispose=B}c(SS,"WebGLTextures");function wS(i,e){function t(n,s=Hi){let r,a=je.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Yh)return i.SHORT;if(n===Yr)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===Kh)return i.RGB;if(n===Qn)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===Qh)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===ro||n===ao||n===oo||n===lo)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Fc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc||n===kc||n===Gc||n===Vc||n===Hc||n===co||n===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zc||n===kc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vc)return r.COMPRESSED_R11_EAC;if(n===Hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===Wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===Qc||n===jc||n===eu||n===tu||n===nu||n===iu||n===su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ru||n===au||n===ou)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ru)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===cu||n===uo||n===uu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return c(t,"convert"),{convert:t}}c(wS,"WebGLUtils");var ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
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

}`,Bf=class Bf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:ES,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};c(Bf,"WebXRDepthSensing");var Rf=Bf,zf=class zf extends ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",x=new Rf,_={},w=t.getContextAttributes(),P=null,T=null,R=[],E=[],m=new ke,S=null,D=null,I=new rn;I.viewport=new xt;let N=new rn;N.viewport=new xt;let O=[I,N],V=new lc,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=R[J];return ue===void 0&&(ue=new Or,R[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=R[J];return ue===void 0&&(ue=new Or,R[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=R[J];return ue===void 0&&(ue=new Or,R[J]=ue),ue.getHandSpace()};function k(J){let ue=E.indexOf(J.inputSource);if(ue===-1)return;let Te=R[ue];Te!==void 0&&(Te.update(J.inputSource,J.frame,u||a),Te.dispatchEvent({type:J.type,data:J.inputSource}))}c(k,"onSessionEvent");function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",j);for(let J=0;J<R.length;J++){let ue=E[J];ue!==null&&(E[J]=null,R[J].disconnect(ue))}C=null,B=null,x.reset();for(let J in _)delete _[J];if(e.setRenderTarget(P),p=null,d=null,f=null,s=null,T=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}c(z,"onSessionEnd"),this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,De=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=w.stencil?Vi:Oi,De=w.stencil?qs:Jn);let ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Mn(d.textureWidth,d.textureHeight,{format:Qn,type:pn,depthTexture:new zi(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Mn(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(J){for(let ue=0;ue<J.removed.length;ue++){let Te=J.removed[ue],De=E.indexOf(Te);De>=0&&(E[De]=null,R[De].disconnect(Te))}for(let ue=0;ue<J.added.length;ue++){let Te=J.added[ue],De=E.indexOf(Te);if(De===-1){for(let ze=0;ze<R.length;ze++)if(ze>=E.length){E.push(Te),De=ze;break}else if(E[ze]===null){E[ze]=Te,De=ze;break}if(De===-1)break}let _e=R[De];_e&&_e.connect(Te)}}c(j,"onInputSourcesChange");function X(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}c(X,"updateCamera"),this.updateCamera=function(J){if(s===null)return;let ue=J.near,Te=J.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),V.near=N.near=I.near=ue,V.far=N.far=I.far=Te,(C!==V.near||B!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),C=V.near,B=V.far),V.layers.mask=J.layers.mask|6,I.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let De=J.parent,_e=V.cameras;X(V,De);for(let ze=0;ze<_e.length;ze++)X(_e[ze],De);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,V,De)};function Q(J,ue,Te){Te===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}c(Q,"updateUserCamera"),this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(J){return _[J]};let se=null;function Se(J,ue){if(h=ue.getViewerPose(u||a),g=ue,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let De=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let Le=0;Le<Te.length;Le++){let $e=Te[Le],st=null;if(p!==null)st=p.getViewport($e);else{let Mt=f.getViewSubImage(d,$e);st=Mt.viewport,Le===0&&(e.setRenderTargetTextures(T,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(T))}let qe=O[Le];qe===void 0&&(qe=new rn,qe.layers.enable(Le),qe.viewport=new xt,O[Le]=qe),qe.matrix.fromArray($e.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray($e.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(st.x,st.y,st.width,st.height),Le===0&&(V.matrix.copy(qe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(qe)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Le=f.getDepthInformation(Te[0]);Le&&Le.isValid&&Le.texture&&x.init(Le,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Le=0;Le<Te.length;Le++){let $e=Te[Le].camera;if($e){let st=_[$e];st||(st=new $a,_[$e]=st);let qe=f.getCameraImage($e);st.sourceTexture=qe}}}}for(let Te=0;Te<R.length;Te++){let De=E[Te],_e=R[Te];De!==null&&_e!==void 0&&_e.update(De,ue,u||a)}se&&se(J,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}c(Se,"onAnimationFrame");let Pe=new W0;Pe.setAnimationLoop(Se),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}};c(zf,"WebXRManager");var Pf=zf,AS=new lt,eg=new Ve;eg.set(-1,0,0,0,1,0,0,0,1);function CS(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}c(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,sd(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}c(n,"refreshFogUniforms");function s(x,_,w,P,T){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),f(x,_)):_.isMeshPhongMaterial?(r(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),d(x,_),_.isMeshPhysicalMaterial&&p(x,_,T)):_.isMeshMatcapMaterial?(r(x,_),g(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),y(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?l(x,_,w,P):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}c(s,"refreshMaterialUniforms");function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ln&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ln&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let w=e.get(_),P=w.envMap,T=w.envMapRotation;P&&(x.envMap.value=P,x.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(T)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(eg),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}c(r,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}c(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}c(o,"refreshUniformsDash");function l(x,_,w,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*w,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}c(l,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}c(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}c(h,"refreshUniformsPhong");function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}c(f,"refreshUniformsToon");function d(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}c(d,"refreshUniformsStandard");function p(x,_,w){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ln&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}c(p,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}c(g,"refreshUniformsMatcap");function y(x,_){let w=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return c(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}c(CS,"WebGLMaterials");function RS(i,e,t,n){let s={},r={};function a(w,P){let T=P.program;n.uniformBlockBinding(w,T,s[w.id])}c(a,"bind");function o(w,P){let T=s[w.id];T===void 0&&(g(w),T=l(w),s[w.id]=T,w.addEventListener("dispose",x));let R=P.program;n.updateUBOMapping(w,R);let E=e.render.frame;r[w.id]!==E&&(u(w),r[w.id]=E)}c(o,"update");function l(w){let P=i.createBuffer(),T=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),P}c(l,"createBuffer");function u(w){let P=s[w.id],T=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let E=0,m=T.length;E<m;E++){let S=T[E];if(Array.isArray(S))for(let D=0,I=S.length;D<I;D++)h(S[D],E,D,R);else h(S,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}c(u,"updateBufferData");function h(w,P,T,R){if(d(w,P,T,R)===!0){let E=w.__offset,m=w.value;if(Array.isArray(m)){let S=0;for(let D=0;D<m.length;D++){let I=m[D],N=y(I,!0);f(I,w.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(m,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}c(h,"updateUniform");function f(w,P,T){typeof w=="number"||typeof w=="boolean"?P[T]=w:w.isMatrix3?(P[T]=w.elements[0],P[T+1]=w.elements[1],P[T+2]=w.elements[2],P[T+3]=0,P[T+4]=w.elements[3],P[T+5]=w.elements[4],P[T+6]=w.elements[5],P[T+7]=0,P[T+8]=w.elements[6],P[T+9]=w.elements[7],P[T+10]=w.elements[8],P[T+11]=0):ArrayBuffer.isView(w)?P.set(w.subarray(0,P.length-T),T):w.toArray(P,T)}c(f,"writeUniformValue");function d(w,P,T,R){let E=w.value,m=P+"_"+T;if(Array.isArray(E)){R[m]===void 0&&(R[m]=[]);let S=R[m],D=!1;for(let I=0;I<E.length;I++)p(E[I],S,I)===!0&&(D=!0);return D}return p(E,R,m)}c(d,"hasUniformChanged");function p(w,P,T){if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:ArrayBuffer.isView(w)?P[T]=w.slice():P[T]=w.clone(),!0;{let R=P[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return P[T]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(R.equals(w)===!1)return R.copy(w),!0}}return!1}c(p,"hasValueChanged");function g(w){let P=w.uniforms,T=0,R=16;for(let m=0,S=P.length;m<S;m++){let D=Array.isArray(P[m])?P[m]:[P[m]];for(let I=0,N=D.length;I<N;I++){let O=D[I],V=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(P[m])||Array.isArray(O.value),B=T;for(let z=0,j=V.length;z<j;z++){let X=V[z],Q=y(X,C),se=T%R,Se=se%Q.boundary,Pe=se+Se;T+=Se,Pe!==0&&R-Pe<Q.storage&&(T+=R-Pe),z===0&&(B=T),T+=Q.storage}let k=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new k((T-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let E=T%R;return E>0&&(T+=R-E),w.__size=T,w.__cache={},this}c(g,"prepareUniformsGroup");function y(w,P){let T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=16,T.storage=48):w.isMatrix4?(T.boundary=16,T.storage=64):w.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(T.boundary=16,T.storage=w.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",w),P===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}c(y,"getUniformSize");function x(w){let P=w.target;P.removeEventListener("dispose",x),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}c(x,"onUniformsGroupsDispose");function _(){for(let w in s)i.deleteBuffer(s[w]);s={},r={}}return c(_,"dispose"),{bind:a,update:o,dispose:_}}c(RS,"WebGLUniformsGroups");var PS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function IS(){return xi===null&&(xi=new Gr(PS,16,16,gi,Tn),xi.name="DFG_LUT",xi.minFilter=kt,xi.magFilter=kt,xi.wrapS=kn,xi.wrapT=kn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}c(IS,"getDFGLUT");var kf=class kf{constructor(e={}){let{canvas:t=d0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,x=new Set([Nc,Dc,Lc]),_=new Set([pn,Jn,Yr,qs,Pc,Ic]),w=new Uint32Array(4),P=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},R=null,E=null,m=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,V=null,C=null,B=null;this._outputColorSpace=Bt;let k=0,z=0,j=null,X=-1,Q=null,se=new xt,Se=new xt,Pe=null,J=new Ue(0),ue=0,Te=t.width,De=t.height,_e=1,ze=null,Je=null,Le=new xt(0,0,Te,De),$e=new xt(0,0,Te,De),st=!1,qe=new ds,Mt=new Yl,vt=!1,Ct=!1,ct=new lt,vn=new G,Nt=new xt,Un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fn=!1;function On(){return j===null?_e:1}c(On,"getTargetPixelRatio");let F=n;function Bn(M,U){return t.getContext(M,U)}c(Bn,"getContext");let mt,gt,ve,Rt,Oe,He,A,b,q,oe,re,he,ge,ee,ne,fe,L,ie,K,pe,ce,de,Ne;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){let U="webgl2";if(F=Bn(U,M),F===null)throw Bn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(M){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ge("WebGLRenderer: "+M.message),M}function Ye(){mt=new Vb(F),mt.init(),ce=new wS(F,mt),gt=new Ib(F,mt,e,ce),ve=new MS(F,mt),gt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),V=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),Rt=new Xb(F),Oe=new lS,He=new SS(F,mt,ve,Oe,gt,ce,Rt),A=new Gb(I),b=new Y_(F),de=new Rb(F,b),q=new Hb(F,b,Rt,de),oe=new Yb(F,q,b,de,Rt),ie=new qb(F,gt,He),ne=new Lb(Oe),re=new oS(I,A,mt,gt,de,ne),he=new CS(I,Oe),ge=new uS,ee=new gS(mt),L=new Cb(I,A,ve,oe,g,l),fe=new bS(I,oe,gt),Ne=new RS(F,Rt,gt,ve),K=new Pb(F,mt,Rt),pe=new Wb(F,mt,Rt),Rt.programs=re.programs,I.capabilities=gt,I.extensions=mt,I.properties=Oe,I.renderLists=ge,I.shadowMap=fe,I.state=ve,I.info=Rt}c(Ye,"initGLContext"),y!==pn&&(D=new $b(y,t.width,t.height,o,s,r));let le=new Pf(I,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(M){M!==void 0&&(_e=M,this.setSize(Te,De,!1))},this.getSize=function(M){return M.set(Te,De)},this.setSize=function(M,U,$=!0){if(le.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=M,De=U,t.width=Math.floor(M*_e),t.height=Math.floor(U*_e),$===!0&&(t.style.width=M+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Te*_e,De*_e).floor()},this.setDrawingBufferSize=function(M,U,$){Te=M,De=U,_e=$,t.width=Math.floor(M*$),t.height=Math.floor(U*$),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===pn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(se)},this.getViewport=function(M){return M.copy(Le)},this.setViewport=function(M,U,$,W){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,U,$,W),ve.viewport(se.copy(Le).multiplyScalar(On()).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,U,$,W){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,U,$,W),ve.scissor(Se.copy($e).multiplyScalar(On()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){ve.setScissorTest(st=M)},this.setOpaqueSort=function(M){ze=M},this.setTransparentSort=function(M){Je=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,$=!0){let W=0;if(M){let Y=!1;if(j!==null){let xe=j.texture.format;Y=x.has(xe)}if(Y){let xe=j.texture.type,Ae=_.has(xe),me=L.getClearColor(),we=L.getClearAlpha(),Ie=me.r,We=me.g,Ke=me.b;Ae?(w[0]=Ie,w[1]=We,w[2]=Ke,w[3]=we,F.clearBufferuiv(F.COLOR,0,w)):(P[0]=Ie,P[1]=We,P[2]=Ke,P[3]=we,F.clearBufferiv(F.COLOR,0,P))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),L.dispose(),ge.dispose(),ee.dispose(),He.dispose(),Oe.dispose(),A.dispose(),oe.dispose(),q.dispose(),de.dispose(),Ne.dispose(),re.dispose(),le.dispose(),le.removeEventListener("sessionstart",Yp),le.removeEventListener("sessionend",Zp),Ns.stop()};function Fe(M){M.preventDefault(),za("WebGLRenderer: Context Lost."),N=!0}c(Fe,"onContextLost");function Xe(){za("WebGLRenderer: Context Restored."),N=!1;let M=Rt.autoReset,U=fe.enabled,$=fe.autoUpdate,W=fe.needsUpdate,Y=fe.type;Ye(),Rt.autoReset=M,fe.enabled=U,fe.autoUpdate=$,fe.needsUpdate=W,fe.type=Y}c(Xe,"onContextRestore");function Me(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}c(Me,"onContextCreationError");function ot(M){let U=M.target;U.removeEventListener("dispose",ot),Ut(U)}c(ot,"onMaterialDispose");function Ut(M){ji(M),Oe.remove(M)}c(Ut,"deallocateMaterial");function ji(M){let U=Oe.get(M).programs;U!==void 0&&(U.forEach(function($){re.releaseProgram($)}),M.isShaderMaterial&&re.releaseShaderCache(M))}c(ji,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,U,$,W,Y,xe){U===null&&(U=Un);let Ae=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,me=Xx(M,U,$,W,Y);ve.setMaterial(W,Ae);let we=$.index,Ie=1;if(W.wireframe===!0){if(we=q.getWireframeAttribute($),we===void 0)return;Ie=2}let We=$.drawRange,Ke=$.attributes.position,Ce=We.start*Ie,Qe=(We.start+We.count)*Ie;xe!==null&&(Ce=Math.max(Ce,xe.start*Ie),Qe=Math.min(Qe,(xe.start+xe.count)*Ie)),we!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,we.count)):Ke!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Ke.count));let Et=Qe-Ce;if(Et<0||Et===1/0)return;de.setup(Y,W,me,$,we);let ht,ut=K;if(we!==null&&(ht=b.get(we),ut=pe,ut.setIndex(ht)),Y.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*On()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(Y.isLine){let Yt=W.linewidth;Yt===void 0&&(Yt=1),ve.setLineWidth(Yt*On()),Y.isLineSegments?ut.setMode(F.LINES):Y.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else Y.isPoints?ut.setMode(F.POINTS):Y.isSprite&&ut.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Yt=Y._multiDrawStarts,Re=Y._multiDrawCounts,nn=Y._multiDrawCount,rt=we?b.get(we).bytesPerElement:1,Us=Oe.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<nn;Zt++)Us.setValue(F,"_gl_DrawID",Zt),ut.render(Yt[Zt]/rt,Re[Zt])}else if(Y.isInstancedMesh)ut.renderInstances(Ce,Et,Y.count);else if($.isInstancedBufferGeometry){let Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,Yt);ut.renderInstances(Ce,Et,Re)}else ut.render(Ce,Et)};function qp(M,U,$,W){O!==null&&M.isNodeMaterial&&O.setObject(W,M),vt===!0&&ne.setState(M,$,!1),M.transparent===!0&&M.side===pi&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,Ea(M,U,W),M.side=vs,M.needsUpdate=!0,Ea(M,U,W),M.side=pi):Ea(M,U,W)}c(qp,"prepareMaterial"),this.compile=function(M,U,$=null){$===null&&($=M),O!==null&&O.renderStart(M,U,$),E=ee.get($),E.init(U),S.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Ct=this.localClippingEnabled,vt=ne.init(this.clippingPlanes,Ct),vt===!0&&ne.setGlobalState(this.clippingPlanes,U),O!==null&&fe.render(E.state.shadowsArray,$,U);let W=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xe=Y.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let me=xe[Ae];qp(me,$,U,Y),W.add(me)}else qp(xe,$,U,Y),W.add(xe)}),E=S.pop(),O!==null&&O.renderEnd(),W},this.compileAsync=function(M,U,$=null){let W=this.compile(M,U,$);return new Promise(Y=>{function xe(){if(W.forEach(function(Ae){let we=Oe.get(Ae).currentProgram;(we===void 0||we.isReady())&&W.delete(Ae)}),W.size===0){Y(M);return}setTimeout(xe,10)}c(xe,"checkMaterialsReady"),mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let $u=null;function Hx(M){$u&&$u(M)}c(Hx,"onAnimationFrame");function Yp(){Ns.stop()}c(Yp,"onXRSessionStart");function Zp(){Ns.start()}c(Zp,"onXRSessionEnd");let Ns=new W0;Ns.setAnimationLoop(Hx),typeof self<"u"&&Ns.setContext(self),this.setAnimationLoop=function(M){$u=M,le.setAnimationLoop(M),M===null?Ns.stop():Ns.start()},le.addEventListener("sessionstart",Yp),le.addEventListener("sessionend",Zp),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(M,U);let $=le.enabled===!0&&le.isPresenting===!0,W=D!==null&&(j===null||$)&&D.begin(I,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,j),E=ee.get(M,S.length),E.init(U),E.state.textureUnits=He.getTextureUnits(),S.push(E),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Mt.setFromArrayCamera(U):qe.setFromProjectionMatrix(ct,Gn,U.reversedDepth),Ct=this.localClippingEnabled,vt=ne.init(this.clippingPlanes,Ct),R=ge.get(M,m.length),R.init(),m.push(R),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&Ju(Ae,U,-1/0,I.sortObjects)}Ju(M,U,0,I.sortObjects),R.finish(),O!==null&&O.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(ze,Je),Fn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Fn&&L.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),vt===!0&&ne.beginShadows();let Y=E.state.shadowsArray;if(fe.render(Y,M,U),vt===!0&&ne.endShadows(),(W&&D.hasRenderPass())===!1){let Ae=R.opaque,me=R.transmissive;if(E.setupLights(),U.isArrayCamera){let we=U.cameras;if(me.length>0)for(let Ie=0,We=we.length;Ie<We;Ie++){let Ke=we[Ie];Jp(Ae,me,M,Ke)}Fn&&L.render(M);for(let Ie=0,We=we.length;Ie<We;Ie++){let Ke=we[Ie];$p(R,M,Ke,Ke.viewport)}}else me.length>0&&Jp(Ae,me,M,U),Fn&&L.render(M),$p(R,M,U)}j!==null&&z===0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j)),W&&D.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),de.resetDefaultState(),X=-1,Q=null,S.pop(),S.length>0?(E=S[S.length-1],He.setTextureUnits(E.state.textureUnits),vt===!0&&ne.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?R=m[m.length-1]:R=null,O!==null&&O.renderEnd()};function Ju(M,U,$,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Ae=U.isArrayCamera?Mt:qe;if(!M.frustumCulled||M.intersectsFrustum(Ae)){W&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let me=oe.update(M),we=M.material;we.visible&&R.push(M,me,we,$,Nt.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Ae=U.isArrayCamera?Mt:qe;if(!M.frustumCulled||M.intersectsFrustum(Ae)){let me=oe.update(M),we=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Nt.copy(me.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(we)){let Ie=me.groups;for(let We=0,Ke=Ie.length;We<Ke;We++){let Ce=Ie[We],Qe=we[Ce.materialIndex];Qe&&Qe.visible&&R.push(M,me,Qe,$,Nt.z,Ce,U)}}else we.visible&&R.push(M,me,we,$,Nt.z,null,U)}}}let xe=M.children;for(let Ae=0,me=xe.length;Ae<me;Ae++)Ju(xe[Ae],U,$,W)}c(Ju,"projectObject");function $p(M,U,$,W){let{opaque:Y,transmissive:xe,transparent:Ae}=M;E.setupLightsView($),vt===!0&&ne.setGlobalState(I.clippingPlanes,$),W&&ve.viewport(se.copy(W)),Y.length>0&&sl(Y,U,$),xe.length>0&&sl(xe,U,$),Ae.length>0&&sl(Ae,U,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}c($p,"renderScene");function Jp(M,U,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ce=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Mn(1,1,{generateMipmaps:!0,type:Ce?Tn:pn,minFilter:Gi,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let xe=E.state.transmissionRenderTarget[W.id],Ae=W.viewport||se;xe.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let me=I.getRenderTarget(),we=I.getActiveCubeFace(),Ie=I.getActiveMipmapLevel();I.setRenderTarget(xe),I.getClearColor(J),ue=I.getClearAlpha(),ue<1&&I.setClearColor(16777215,.5),I.clear(),Fn&&L.render($);let We=I.toneMapping;I.toneMapping=mi;let Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),vt===!0&&ne.setGlobalState(I.clippingPlanes,W),sl(M,$,W),He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,Et=U.length;Qe<Et;Qe++){let ht=U[Qe],{object:ut,geometry:Yt,material:Re,group:nn}=ht;if(Re.side===pi&&ut.layers.test(W.layers)){let rt=Re.side;Re.side=ln,Re.needsUpdate=!0,Kp(ut,$,W,Yt,Re,nn),Re.side=rt,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe))}I.setRenderTarget(me,we,Ie),I.setClearColor(J,ue),Ke!==void 0&&(W.viewport=Ke),I.toneMapping=We}c(Jp,"renderTransmissionPass");function sl(M,U,$){let W=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,xe=M.length;Y<xe;Y++){let Ae=M[Y],{object:me,geometry:we,group:Ie}=Ae,We=Ae.material;We.allowOverride===!0&&W!==null&&(We=W),me.layers.test($.layers)&&Kp(me,U,$,we,We,Ie)}}c(sl,"renderObjects");function Kp(M,U,$,W,Y,xe){O!==null&&Y.isNodeMaterial&&O.setObject(M,Y),M.onBeforeRender(I,U,$,W,Y,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(I,U,$,W,M,xe),Y.transparent===!0&&Y.side===pi&&Y.forceSinglePass===!1?(Y.side=ln,Y.needsUpdate=!0,I.renderBufferDirect($,U,W,Y,M,xe),Y.side=vs,Y.needsUpdate=!0,I.renderBufferDirect($,U,W,Y,M,xe),Y.side=pi):I.renderBufferDirect($,U,W,Y,M,xe),M.onAfterRender(I,U,$,W,Y,xe)}c(Kp,"renderObject");function Qp(M){let U=0;for(let $ of M)$.texture!==null&&U++;return U}c(Qp,"countLightProbeGrids");function Ea(M,U,$){U.isScene!==!0&&(U=Un);let W=Oe.get(M),Y=E.state.lights,xe=E.state.shadowsArray,Ae=Y.state.version,me=re.getParameters(M,Y.state,xe,U,$,E.state.lightProbeGridArray),we=re.getProgramCacheKey(me),Ie=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let We=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=A.get(M.envMap||W.environment,We),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",ot),Ie=new Map,W.programs=Ie,W.programVariants=new Map);let Ke=Ie.get(we);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Ae)return em(M,me),Ke}else me.uniforms=re.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,$,me),M.onBeforeCompile(me,I),Ke=re.acquireProgram(me,we),Ie.set(we,Ke),W.uniforms=me.uniforms;let Ce=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=ne.uniform),em(M,me),W.needsLights=Yx(M),W.lightsStateVersion=Ae,W.needsLights&&(Ce.ambientLightColor.value=Y.state.ambient,Ce.lightProbe.value=Y.state.probe,Ce.sunLights.value=Y.state.sun,Ce.sunLightShadows.value=Y.state.sunShadow,Ce.directionalLights.value=Y.state.directional,Ce.directionalLightShadows.value=Y.state.directionalShadow,Ce.spotLights.value=Y.state.spot,Ce.spotLightShadows.value=Y.state.spotShadow,Ce.rectAreaLights.value=Y.state.rectArea,Ce.ltc_1.value=Y.state.rectAreaLTC1,Ce.ltc_2.value=Y.state.rectAreaLTC2,Ce.pointLights.value=Y.state.point,Ce.pointLightShadows.value=Y.state.pointShadow,Ce.hemisphereLights.value=Y.state.hemi,Ce.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ce.sunShadowCascade.value=Y.state.sunShadowCascade,Ce.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ce.spotLightMatrix.value=Y.state.spotLightMatrix,Ce.spotLightMap.value=Y.state.spotLightMap,Ce.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=Qp(E.state.lightProbeGridArray),W.currentProgram=Ke,W.uniformsList=null,Ke}c(Ea,"getProgram");function Wx(M,U,$,W,Y){let xe=Oe.get(M),Ae=xe.currentProgram.id+","+W+","+Y,me=xe.programVariants.get(Ae);return me===void 0?(me=Ea(M,U,$),xe.programVariants.set(Ae,me)):(xe.currentProgram=me,xe.uniformsList=null,xe.outputColorSpace=W,xe.toneMapping=Y),me}c(Wx,"getProgramVariant");function jp(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Zr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}c(jp,"getUniformList");function em(M,U){let $=Oe.get(M);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}c(em,"updateCommonMaterialProperties");function Xx(M,U,$,W,Y){U.isScene!==!0&&(U=Un),He.resetTextureUnits();let xe=U.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,me=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:je.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ie=A.get(W.envMap||Ae,we),We=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!$.morphAttributes.position,Qe=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,ht=mi;W.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ht=I.toneMapping);let ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Yt=ut!==void 0?ut.length:0,Re=Oe.get(W),nn=E.state.lights;if(vt===!0&&(Ct===!0||M!==Q)){let yt=M===Q&&W.id===X;ne.setState(W,M,yt)}let rt=!1,Us=!1;W.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==nn.state.version||Y.isBatchedMesh&&Re.batching===!1||!Y.isBatchedMesh&&Re.batching===!0||Y.isBatchedMesh&&Re.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Re.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Y.isInstancedMesh&&Re.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Re.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Re.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Re.instancingMorph===!1&&Y.morphTexture!==null||Re.envMap!==Ie||W.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ne.numPlanes||Re.numIntersection!==ne.numIntersection)||Re.vertexAlphas!==We||Re.vertexTangents!==Ke||Re.morphTargets!==Ce||Re.morphNormals!==Qe||Re.morphColors!==Et||Re.morphTargetsCount!==Yt||Re.numLightProbeGrids!==Qp(E.state.lightProbeGridArray)?rt=!0:(Re.outputColorSpace!==me||Re.toneMapping!==ht)&&(Us=!0):(rt=!0,Re.__version=W.version);let Zt=Re.currentProgram;(rt===!0||Us===!0)&&(Zt=Us===!0?Wx(W,U,Y,me,ht):Ea(W,U,Y),O&&W.isNodeMaterial&&O.onUpdateProgram(W,Zt,Re));let rl=!1,es=!1,Fs=!1,it=Zt.getUniforms(),Ht=Re.uniforms;if(ve.useProgram(Zt.program)&&(rl=!0,es=!0,Fs=!0),W.id!==X&&(X=W.id,es=!0),rl||Q!==M){ve.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),it.setValue(F,"projectionMatrix",M.projectionMatrix),it.setValue(F,"viewMatrix",M.matrixWorldInverse);let Ft=it.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,vn.setFromMatrixPosition(M.matrixWorld)),gt.logarithmicDepthBuffer&&it.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,es=!0,Fs=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&it.setValue(F,"sunShadowMap",nn.state.sunShadowMap,He),nn.state.directionalShadowMap.length>0&&it.setValue(F,"directionalShadowMap",nn.state.directionalShadowMap,He),nn.state.spotShadowMap.length>0&&it.setValue(F,"spotShadowMap",nn.state.spotShadowMap,He),nn.state.pointShadowMap.length>0&&it.setValue(F,"pointShadowMap",nn.state.pointShadowMap,He)),Y.isSkinnedMesh){it.setOptional(F,Y,"bindMatrix"),it.setOptional(F,Y,"bindMatrixInverse");let yt=Y.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),it.setValue(F,"boneTexture",yt.boneTexture,He))}Y.isBatchedMesh&&(it.setOptional(F,Y,"batchingTexture"),it.setValue(F,"batchingTexture",Y._matricesTexture,He),it.setOptional(F,Y,"batchingIdTexture"),it.setValue(F,"batchingIdTexture",Y._indirectTexture,He),it.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&it.setValue(F,"batchingColorTexture",Y._colorsTexture,He));let qn=$.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&ie.update(Y,$,Zt),(es||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,it.setValue(F,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=IS()),es){if(it.setValue(F,"toneMappingExposure",I.toneMappingExposure),Re.needsLights&&qx(Ht,Fs),xe&&W.fog===!0&&he.refreshFogUniforms(Ht,xe),he.refreshMaterialUniforms(Ht,W,_e,De,E.state.transmissionRenderTarget[M.id]),Re.needsLights&&Re.numLightProbeGrids>0){let yt=T,Ft=0;for(let Ci of E.state.lightProbeGridArray)Ci.texture!==null&&(yt.textures[Ft]=Ci.texture,yt.min[Ft]=Ci.boundingBox.min,yt.max[Ft]=Ci.boundingBox.max,yt.resolution[Ft]=Ci.resolution,Ft++);for(let Ci in yt)yt[Ci].length=Ft;Ht.probesSH.value=yt.textures,Ht.probesMin.value=yt.min,Ht.probesMax.value=yt.max,Ht.probesResolution.value=yt.resolution}Zr.upload(F,jp(Re),Ht,He)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zr.upload(F,jp(Re),Ht,He),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(F,"center",Y.center),it.setValue(F,"modelViewMatrix",Y.modelViewMatrix),it.setValue(F,"normalMatrix",Y.normalMatrix),it.setValue(F,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let yt=W.uniformsGroups;for(let Ft=0,Ci=yt.length;Ft<Ci;Ft++){let nm=yt[Ft];Ne.update(nm,Zt),Ne.bind(nm,Zt)}}return Zt}c(Xx,"setProgram");function qx(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}c(qx,"markUniformsLightsNeedsUpdate");function Yx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}c(Yx,"materialNeedsLights"),this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,U,$){let W=Oe.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Oe.get(M.texture).__webglTexture=U,Oe.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let $=Oe.get(M);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,$=0){j=M,k=U,z=$;let W=null,Y=!1,xe=!1;if(M){let me=Oe.get(M);if(me.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),se.copy(M.viewport),Se.copy(M.scissor),Pe=M.scissorTest,ve.viewport(se),ve.scissor(Se),ve.setScissorTest(Pe),X=-1;return}else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(M);else if(me.__hasExternalTextures)He.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let We=M.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&Oe.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(M)}}let we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);let Ie=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?W=Ie[U][$]:W=Ie[U],Y=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?W=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?W=Ie[$]:W=Ie,se.copy(M.viewport),Se.copy(M.scissor),Pe=M.scissorTest}else se.copy(Le).multiplyScalar(_e).floor(),Se.copy($e).multiplyScalar(_e).floor(),Pe=st;if($!==0&&(W=V),ve.bindFramebuffer(F.FRAMEBUFFER,W)&&ve.drawBuffers(M,W),ve.viewport(se),ve.scissor(Se),ve.setScissorTest(Pe),Y){let me=Oe.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,$)}else if(xe){let me=U;for(let we=0;we<M.textures.length;we++){let Ie=Oe.get(M.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Ie.__webglTexture,$,me)}}else if(M!==null&&$!==0){let me=Oe.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,$)}X=-1};function tm(M){let U=Oe.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=gt.textureFormatReadable(M.format),U.__typeReadable=gt.textureTypeReadable(M.type)),U}c(tm,"getReadableState"),this.readRenderTargetPixels=function(M,U,$,W,Y,xe,Ae,me=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we){ve.bindFramebuffer(F.FRAMEBUFFER,we);try{let Ie=M.textures[me],We=Ie.format,Ke=Ie.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);let Ce=tm(Ie);if(Ce.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&$>=0&&$<=M.height-Y&&F.readPixels(U,$,W,Y,ce.convert(We),ce.convert(Ke),xe)}finally{let Ie=j!==null?Oe.get(j).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,U,$,W,Y,xe,Ae,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we)if(U>=0&&U<=M.width-W&&$>=0&&$<=M.height-Y){ve.bindFramebuffer(F.FRAMEBUFFER,we);let Ie=M.textures[me],We=Ie.format,Ke=Ie.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);let Ce=tm(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(U,$,W,Y,ce.convert(We),ce.convert(Ke),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Et=j!==null?Oe.get(j).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Et);let ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await p0(F,ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Qe),F.deleteSync(ht),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,$=0){let W=Math.pow(2,-$),Y=Math.floor(M.image.width*W),xe=Math.floor(M.image.height*W),Ae=U!==null?U.x:0,me=U!==null?U.y:0;He.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ae,me,Y,xe),ve.unbindTexture()},this.copyTextureToTexture=function(M,U,$=null,W=null,Y=0,xe=0){let Ae,me,we,Ie,We,Ke,Ce,Qe,Et,ht=M.isCompressedTexture?M.mipmaps[xe]:M.image;if($!==null)Ae=$.max.x-$.min.x,me=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,We=$.min.y,Ke=$.isBox3?$.min.z:0;else{let it=Math.pow(2,-Y);Ae=Math.floor(ht.width*it),me=Math.floor(ht.height*it),M.isDataArrayTexture?we=ht.depth:M.isData3DTexture?we=Math.floor(ht.depth*it):we=1,Ie=0,We=0,Ke=0}W!==null?(Ce=W.x,Qe=W.y,Et=W.z):(Ce=0,Qe=0,Et=0);let ut=ce.convert(U.format),Yt=ce.convert(U.type),Re;U.isData3DTexture?(He.setTexture3D(U,0),Re=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Re=F.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Re=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let nn=ve.getParameter(F.UNPACK_ROW_LENGTH),rt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),Us=ve.getParameter(F.UNPACK_SKIP_PIXELS),Zt=ve.getParameter(F.UNPACK_SKIP_ROWS),rl=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),ve.pixelStorei(F.UNPACK_SKIP_ROWS,We),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);let es=M.isDataArrayTexture||M.isData3DTexture,Fs=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let it=Oe.get(M),Ht=Oe.get(U),qn=Oe.get(it.__renderTarget),yt=Oe.get(Ht.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,qn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ft=0;Ft<we;Ft++)es&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(M).__webglTexture,Y,Ke+Ft),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,xe,Et+Ft)),F.blitFramebuffer(Ie,We,Ie+Ae,We+me,Ce,Qe,Ce+Ae,Qe+me,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||Oe.has(M)){let it=Oe.get(M),Ht=Oe.get(U);ve.bindFramebuffer(F.READ_FRAMEBUFFER,C),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let qn=0;qn<we;qn++)es?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.__webglTexture,Y,Ke+qn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,it.__webglTexture,Y),Fs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,xe,Et+qn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,xe),Y!==0?F.blitFramebuffer(Ie,We,Ie+Ae,We+me,Ce,Qe,Ce+Ae,Qe+me,F.COLOR_BUFFER_BIT,F.NEAREST):Fs?F.copyTexSubImage3D(Re,xe,Ce,Qe,Et+qn,Ie,We,Ae,me):F.copyTexSubImage2D(Re,xe,Ce,Qe,Ie,We,Ae,me);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fs?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Re,xe,Ce,Qe,Et,Ae,me,we,ut,Yt,ht.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,xe,Ce,Qe,Et,Ae,me,we,ut,ht.data):F.texSubImage3D(Re,xe,Ce,Qe,Et,Ae,me,we,ut,Yt,ht):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,Ce,Qe,Ae,me,ut,Yt,ht.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,Ce,Qe,ht.width,ht.height,ut,ht.data):F.texSubImage2D(F.TEXTURE_2D,xe,Ce,Qe,Ae,me,ut,Yt,ht);ve.pixelStorei(F.UNPACK_ROW_LENGTH,nn),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Us),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,rl),xe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Re),ve.unbindTexture()},this.initRenderTarget=function(M){Oe.get(M).__webglFramebuffer===void 0&&He.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){k=0,z=0,j=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};c(kf,"WebGLRenderer");var gu=kf;function ng(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Pt;l.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,g,h),u+=g}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=tg(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let g=tg(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}c(ng,"mergeGeometries");function tg(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new bt(a,t,n),l=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}c(tg,"mergeAttributes");var ig="#c79a72",LS="#5a4a3a";var Qt="#7a5532",Hf="#5f6266",sg="#8a8f96",jn="#5d6447",Gf="#e8e0cc",og="#6e4b2f",$s="#8a8580",rg="#5b3e27",Jr="#7d858c",DS=new G(0,1,0),be=new hi(1,1,1),Gt=new di(.5,.5,1,10),Js=new fi(.5,1,10),Kr=new ps(.5,10,8),qf=class qf{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,l,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+l,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};c(qf,"Parts");var Vt=qf,NS=c((i,e,t)=>{switch(i){case"ancient":t.add({shape:Kr,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Js,colour:Hf,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:be,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Gt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Kr,colour:jn,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),US=c((i,e,t,n)=>{switch(i){case"club":n.add({shape:Gt,colour:Qt,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Gt,colour:Qt,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Js,colour:Hf,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Gt,colour:Qt,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Js,colour:sg,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:be,colour:sg,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:be,colour:Qt,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Gt,colour:Qt,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:be,colour:i==="rifle"?"#3a3a3a":Qt,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:be,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:be,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Gt,colour:Qt,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Gt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),FS={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},Wf=c((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Vt,a=s===void 0?void 0:FS[s],o=a?.coat??(i==="modern"?jn:t[0]),l=a?.legs??(i==="ancient"?ig:i==="modern"?jn:LS);return n&&(r.add({shape:be,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:be,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:be,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:be,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:be,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:be,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Kr,colour:ig,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:Kr,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:Kr,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):NS(i,t,r),s==="parachute"&&r.add({shape:be,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),US(e,i,t,r),r},"person"),ag=c(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Vf=c((i=og)=>new Vt().add({shape:be,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:be,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:be,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:be,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),OS=c((i,e,t)=>new Vt().addAll(Vf(),[0,0,0]).add({shape:be,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(Wf(i,e,t,{legs:!1}),[0,.04,0]),"rider"),BS=c(i=>new Vt().add({shape:be,colour:$s,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:be,colour:$s,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Gt,colour:$s,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:be,colour:$s,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:be,colour:$s,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:be,colour:$s,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:be,colour:$s,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:be,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:be,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),jt=c((i,e=.05)=>({shape:Gt,colour:Qt,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),zS=c((i,e,t)=>{if(e==="chariot")return new Vt().addAll(Vf(),[0,0,.09]).add({shape:be,colour:Qt,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:be,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(jt([-.042,.035,-.045],.065)).add(jt([.042,.035,-.045],.065)).addAll(Wf(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Vt().addAll(Vf(t==="ancient"?"#8a7a64":og),[0,0,.1]).add({shape:be,colour:Qt,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:be,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(jt([-.042,.03,-.03])).add(jt([.042,.03,-.03])).add(jt([-.042,.03,-.09])).add(jt([.042,.03,-.09]));return e==="wagon"?n.add({shape:Gt,colour:Gf,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:be,colour:Gf,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:be,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:be,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),kS=c((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Vt().add({shape:be,colour:Qt,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:be,colour:Qt,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:be,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(jt([-.045,.03,.04],.045)).add(jt([.045,.03,.04],.045)).add(jt([-.045,.03,-.04],.045)).add(jt([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?jn:Hf;return new Vt().add({shape:Gt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:be,colour:i==="modern"?jn:Qt,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:be,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(jt([-.04,.035,0],.07)).add(jt([.04,.035,0],.07))},"siege"),GS=c((i,e,t)=>{if(i==="industrial")return new Vt().add({shape:be,colour:Jr,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:be,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(jt([-.045,.025,.06],.045)).add(jt([.045,.025,.06],.045)).add(jt([-.045,.025,-.06],.045)).add(jt([.045,.025,-.06],.045));let n=new Vt().add({shape:be,colour:jn,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:be,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:be,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:be,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:be,colour:jn,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Gt,colour:jn,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:be,colour:jn,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),VS=c((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Vt;switch(i.hull){case"oars":case"sail":{r.add({shape:be,colour:rg,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:Js,colour:rg,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:be,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let l=(o-(a-1)/2)*.09*t;r.add({shape:Gt,colour:Qt,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:be,colour:o===0?e[1]:Gf,at:[0,.16,l],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:be,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:be,colour:Qt,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:be,colour:Qt,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Gt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:be,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:be,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:be,colour:Jr,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:be,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:be,colour:Jr,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:be,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:be,colour:i.era==="industrial"?"#4a4a48":Jr,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:Js,colour:i.era==="industrial"?"#4a4a48":Jr,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:be,colour:Jr,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Gt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:be,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:be,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Gt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:be,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),HS=c((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Vt().add({shape:Gt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Js,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:be,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:be,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:be,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:be,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),WS=c(i=>new Vt().add({shape:Kr,colour:jn,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:be,colour:jn,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:be,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:be,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:be,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),XS=c((i,e)=>{let t=e?1.4:1;return new Vt().add({shape:Gt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Js,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:be,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:be,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),lg=c((i,e)=>{switch(i.shape){case"foot":{let t=new Vt;return ag(i.squad).forEach(([n,s],r)=>t.addAll(Wf(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Vt;return ag(i.squad).forEach(([n,s])=>t.addAll(OS(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return BS(e);case"cart":return zS(e,i.cart??"wagon",i.era);case"siege":return kS(i.era,e,i.large===!0);case"vehicle":return GS(i.era,e,i.large===!0);case"ship":return VS(i,e);case"aircraft":return HS(i,e);case"helicopter":return WS(e);default:return XS(e,i.large===!0)}},"figureParts"),qS=c(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new lt().compose(new G(...i),new an().setFromAxisAngle(DS,n).multiply(new an().setFromEuler(new Sn(...t))),new G(...e)),"partMatrix"),Xf=c(i=>{let e=i.map(n=>{let{shape:s,colour:r}=n,a=s.clone(),o=new Ue(r),l=a.getAttribute("position").count,u=new Float32Array(l*3);for(let h=0;h<l;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(qS(n)),a.setAttribute("color",new bt(u,3)),a}),t=ng(e)??new Pt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),cg=c((i,e)=>Xf(lg(i,e).parts),"figureGeometry"),YS=new di(.19,.2,1,28),ZS=new ms(.22,.014,4,32),ug=c((i,e,{fortified:t,scale:n,stand:s})=>{let r=i.shape==="ship",a=r?0:s,o=lg(i,e).parts.map(l=>({...l,at:[l.at[0]*n,l.at[1]*n+a,l.at[2]*n],size:[l.size[0]*n,l.size[1]*n,l.size[2]*n]}));return r||o.push({shape:YS,colour:e[1],at:[0,s/2,0],size:[1,s,1]}),t&&o.push({shape:ZS,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Xf(o)},"unitBodyGeometry"),$S=new fi(.75,.5,4),JS=new ms(.36,.025,6,24),hg=c((i,e,t)=>Xf([...i.flatMap(({x:n,z:s,width:r,height:a})=>[{shape:be,colour:"#b5ab98",at:[n,a/2,s],size:[r,a,r]},{shape:$S,colour:e,at:[n,a+r*.2,s],size:[r,r*.8,r],turn:[0,Math.PI/4,0]}]),...t?[{shape:JS,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Xt=c((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),xo=c((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),An=c((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),_o=c((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),Yf=c((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),dg={Warrior:Xt("ancient","club"),Spearman:Xt("ancient","spear"),Swordman:Xt("ancient","sword"),Archer:Xt("ancient","bow"),Horseman:xo("ancient","spear"),Chariot:Yf("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:An("ancient","oars"),Settlers:Yf("ancient","wagon"),Diplomat:Xt("ancient","case",1),Caravan:Yf("ancient","goods"),Explorer:Xt("ancient","pack",1),Pikeman:Xt("medieval","pike"),Knight:xo("medieval","lance"),Crusader:xo("medieval","sword"),Fanatic:Xt("medieval","sword"),Sail:An("medieval","sail"),Musketman:Xt("renaissance","musket"),Dragoon:xo("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:An("renaissance","sail",!0,1),Galleon:An("renaissance","sail",!0),Rifleman:Xt("industrial","rifle"),AlpineTrooper:{...Xt("industrial","rifle"),dress:"snow"},Partisan:{...Xt("industrial","rifle"),dress:"irregular"},Cavalry:xo("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Xt("industrial","none",2),Ironclad:An("industrial","steam",!1,1),Transport:An("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Xt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Xt("modern","rifle"),Paratrooper:{...Xt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:An("modern","steam",!1,1),Cruiser:An("modern","steam",!0,2),MissileCruiser:An("modern","steam",!0,1,!0),Battleship:An("modern","steam",!0,3),Submarine:An("modern","submarine"),Carrier:An("modern","carrier",!0),Fighter:_o("modern"),StealthFighter:_o("modern",!1,!0),Bomber:_o("modern",!0),StealthBomber:_o("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},fg=c((i,e=[])=>(Object.prototype.hasOwnProperty.call(dg,i)?dg[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?An("industrial","steam"):e.includes("Air")?_o("modern"):Xt("ancient","spear")),"unitLook");var KS=.03,xg="#fff4b0",QS=.04,yu=.004,Zf=.018,pg=.01,mg=.022,gg=.03,_g=.03,Mu=.002,jS="#4caf50",ew="#e0b030",tw="#d04030",nw=256,Ks,ei,Qs,js,ti,er,Wi,jr,$f=class $f{constructor(){te(this,Ks,new Map);te(this,ei,new Map);te(this,Qs,new Map);te(this,js,new Map);te(this,ti,new Map);te(this,er,new Map);te(this,Wi,null);te(this,jr,0);this.figureMaterial=new ki({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new ms(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=v(this,Ks).get(n);return s===void 0&&(s=new ki({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),v(this,Ks).set(n,s)),s}body(e,t,n,s=1){let r=JSON.stringify([e,t,n,s]),a=v(this,js).get(r);return a===void 0&&(a=ug(e,t,{fortified:n,scale:s,stand:KS}),v(this,js).set(r,a)),a}city(e){let t=aw(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),s=v(this,ti).get(n);return s===void 0&&(s=hg(t,e.colours[0],e.walled),v(this,ti).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=v(this,Qs).get(n);return s===void 0&&(s=cg(e,t),v(this,Qs).set(n,s)),s}plain(e){let t=v(this,er).get(e);return t===void 0&&(t=new hs({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),v(this,er).set(e,t)),t}pointer(){if(v(this,Wi)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=xg,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Vr(e);n.colorSpace=Bt,Z(this,Wi,new hs({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return v(this,Wi)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=v(this,ei).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),l="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=l,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=l,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Vr(a);h.colorSpace=Bt,r=new hs({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),v(this,ei).set(s,r)}return r}get sweepDue(){return v(this,ei).size+v(this,ti).size>Math.max(nw,v(this,jr)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(s=>{s instanceof wt&&t.add(s.geometry),s instanceof kr&&t.add(s.material)});v(this,ei).forEach((n,s)=>{t.has(n)||(n.map?.dispose(),n.dispose(),v(this,ei).delete(s))}),v(this,ti).forEach((n,s)=>{t.has(n)||(n.dispose(),v(this,ti).delete(s))}),Z(this,jr,v(this,ei).size+v(this,ti).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),v(this,Qs).forEach(e=>e.dispose()),v(this,js).forEach(e=>e.dispose()),v(this,ti).forEach(e=>e.dispose()),v(this,js).clear(),v(this,ti).clear(),this.figureMaterial.dispose(),v(this,er).forEach(e=>e.dispose()),v(this,Wi)?.map?.dispose(),v(this,Wi)?.dispose(),v(this,er).clear(),Z(this,Wi,null),v(this,Ks).forEach(e=>e.dispose()),v(this,ei).forEach(e=>{e.map?.dispose(),e.dispose()}),v(this,Ks).clear(),v(this,ei).clear(),v(this,Qs).clear(),Z(this,jr,0)}};Ks=new WeakMap,ei=new WeakMap,Qs=new WeakMap,js=new WeakMap,ti=new WeakMap,er=new WeakMap,Wi=new WeakMap,jr=new WeakMap,c($f,"MarkerKit");var wu=$f,vg=c(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),Qr=c((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),bu=c((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),iw=c(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),sw=3,rw=4,vo=c((i,e,t,n,s=sw)=>{let r=new kr(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),yg=c((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return vo(i,e*s,e,t)},"label"),Su=[0,.36,0],aw=c(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let s=n/e*Math.PI*2+bu(i.name,1)*6,r=n===0?0:.12+bu(i.name,n+2)*.18;return{x:Math.cos(s)*r,z:Math.sin(s)*r,width:.07+bu(i.name,n+20)*.05,height:(n===0?.13:.05)+bu(i.name,n+40)*.05}})},"buildingsOf"),ow=c((i,e)=>{let t=new fn;return t.add(new wt(i.city(e),i.figureMaterial)),t.add(Qr(yg(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],vg(e.colours[0])),_g,0),...Su)),t},"drawCity"),lw=c((i,e,t=null)=>{let n=new fn,{ring:s}=i.geometries,r=fg(e.type,e.kinds),a=i.body(r,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,l=t?.at??[0,o+QS,0],u=e.health!==null,h=(t?.over??0)+(u?yu+Mu:0),f=h+pg+Mu,d=iw(e),p=f+(d===""?0:mg+Mu),g=new wt(a,i.figureMaterial);if(g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(Qr(vo(i.plain("#202020"),Zf,yu,t?.over??0),...l)),y>0){let x=vo(i.plain(y>.5?jS:y>.25?ew:tw),Zf*y,yu*.6,(t?.over??0)+yu*.2);x.center.x=1/(2*y),n.add(Qr(x,...l))}}if(n.add(Qr(vo(i.plain(e.colours[0]),Zf,pg,h),...l)),d!==""&&n.add(Qr(yg(i.label(d,e.colours[0],vg(e.colours[0])),mg,f),...l)),e.active){let y=new wt(s,i.material(xg,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,Qr(vo(i.pointer(),gg,gg,p,rw),...l))}return n},"drawUnit"),Eu="unit",bg=c((i,e)=>{let t=new fn;if(e.city!==null&&t.add(ow(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=lw(i,e.unit,e.city===null?null:{at:[Su[0],Su[1],Su[2]-n],over:_g+Mu});s.name=Eu,s.position.z=n,t.add(s)}return t},"drawMarker");var ys=c(i=>i*Math.PI/180,"degrees"),cw=ys(25),uw=ys(80),hw=5,dw=90,fw=1.12,yo=ys(40),Kf=ys(45),pw={above:{yaw:0,pitch:ys(80)},classic:{yaw:0,pitch:ys(55)},isometric:{yaw:ys(45),pitch:ys(30)}};var Mg=c(i=>({focus:i,...pw.classic,distance:24}),"defaultOrbit"),Jf=c((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),Sg=c(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),tr=c(i=>({...i,yaw:Sg(i.yaw),pitch:Jf(i.pitch,cw,uw),distance:Jf(i.distance,hw,dw)}),"clampOrbit"),ta=c((i,e)=>tr({...i,distance:i.distance/fw**e}),"zoomed"),Tu=c(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),Au=c((i,e)=>{let{forward:t}=Tu(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),Qf=c((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:l}=Tu(i),u=Au(i,e),h=[t-u[0],n-u[1],s-u[2]],f=c(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(a),p=Math.tan(yo/2);return d<=1e-6?null:[f(o)/(d*p*r),f(l)/(d*p)]},"toScreen"),jf=c((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=Tu(i),l=Math.tan(yo/2);return{from:Au(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*l*s*(a[u]??0)+n*l*(o[u]??0))}},"rayThrough"),ea=c((i,e,t,n,s=e)=>{let{from:r,direction:a}=jf(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),wg=c((i,e,t,n,s)=>{let r=ea(i,e,t,s),a=ea(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,l=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(yo/2),{right:h}=Tu(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+l*(f[0]??0))*u,i.focus[1]+(o*h[2]+l*(f[1]??0))*u]}},"panned"),Eg=c((i,e,t)=>{let n=c((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:Sg(i.yaw),focus:[n(s,e.u),e.v===null?Jf(r,0,t):n(r,e.v)]}},"settled"),Tg=c((i,e,t,n,s)=>{let r=c((l,u)=>u===null?l:l-u*Math.round(l/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Cu=c(i=>({near:i*1.2,far:i*3.5}),"sightFor");var mw=new Ue("#3f8a8c"),gw=new Ue("#173a52"),xw=new Ue("#e8eeee"),Ag=`
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
`,_w=`
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
`,bs,Vn,Cn,tp=class tp{constructor(e,t){te(this,bs);te(this,Vn);te(this,Cn);Z(this,bs,e),Z(this,Vn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<v(this,Vn).length;s+=2)v(this,Vn)[s]=ui.toHalfFloat(0),v(this,Vn)[s+1]=ui.toHalfFloat(1);Z(this,Cn,new Gr(v(this,Vn),e.columns,e.rows,gi,Tn)),v(this,Cn).wrapS=Vs,v(this,Cn).wrapT=e.wrapsV?Vs:kn,v(this,Cn).magFilter=kt,v(this,Cn).minFilter=kt,v(this,Cn).needsUpdate=!0;let n=new wn({uniforms:ho.merge([ye.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:mw.clone()},deep:{value:gw.clone()},foam:{value:xw.clone()},sky:{value:t.clone()},sunDirection:{value:new G(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:Ag,fragmentShader:_w,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=v(this,Cn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new wt(new fs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=v(this,bs),a=Math.round(e.u/s),o=Math.round(e.v/r),l=e.positions.length/3;for(let u=0;u<l;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;v(this,Vn)[d]=ui.toHalfFloat(e.positions[u*3+1]??0),v(this,Vn)[d+1]=ui.toHalfFloat(e.unseen[u]??0)}}v(this,Cn).needsUpdate=!0}height(e,t){return ui.fromHalfFloat(v(this,Vn)[(t*v(this,bs).columns+e)*2]??0)}unseen(e,t){return ui.fromHalfFloat(v(this,Vn)[(t*v(this,bs).columns+e)*2+1]??0)>.5}texture(){return v(this,Cn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=v(this,bs).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),v(this,Cn).dispose()}};bs=new WeakMap,Vn=new WeakMap,Cn=new WeakMap,c(tp,"Water");var ep=tp,Cg=ep,vw=`
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
`,yw=.18,bo,np=class np{constructor(e,t){te(this,bo);Z(this,bo,t.wrapsV);let n=new wn({uniforms:ho.merge([ye.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:Ag,fragmentShader:vw,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new wt(new fs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=v(this,bo)&&e}follow(e,t,n){this.mesh.position.set(e,yw,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};bo=new WeakMap,c(np,"Clouds");var Ru=np;var rp=c((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/Sw)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),Pu=c(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),bw=c((i,e,t)=>i.unit?.id===e?Lg(i,t):Pu(i),"unitOnMarkerAt"),Lg=c((i,e)=>{let[t,n,s]=Pu(i),[r,a,o]=rp(i.slide,e)??[0,0,0];return[t+r,n+a,s+o]},"unitDrawnAt"),Mw=c((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||rp(i.slide,t)===null)return;let n=Lg(i,t),s=Pu(e);return{from:[n[0]-s[0],n[1]-s[1],n[2]-s[2]],started:t}},"carriedSlide"),ip=c((i,e)=>{if(i.slide===void 0)return!1;let t=rp(i.slide,e),[n,s,r]=t??[0,0,0],[a,o,l]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(Eu)?.position.set(a+n,o+s,l+r)),t!==null},"slideAlong"),Sw=260,sp=10466244,ww=14082796,Ew=5984576,Tw=16773336,Rg=c((i,e,t)=>{let n=c((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),Aw=c(i=>[new dn(new G(0,0,1),0),new dn(new G(0,0,-1),i)],"polesAt"),Cw=c((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),Pg=2048,Ig=Math.hypot(30,40,20),Dg=c((i,{period:e,ground:t})=>{let n=new gu({antialias:!0,canvas:i}),s=new Ha,r=new rn(yo*180/Math.PI,1,.1,400),a=new fn,o=new ki({roughness:.92,vertexColors:!0}),l=new to(Tw,2.6),u=new Map,h=new Map,f=new ki({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),d=t.rows*t.spacingV,p=Aw(d),g=new Map,y=new Set,x=new fn,_=new wu,w=new Cg(t,new Ue(sp)),P=new Ru(w.texture(),t),T=new Va(sp,30,110),R=[[0,0]],E="0,0",m=[[0,0]],S="0,0",D=!1;n.outputColorSpace=Bt,n.localClippingEnabled=!0,n.toneMapping=io,n.shadowMap.enabled=!0,n.shadowMap.type=Ec,s.background=new Ue(sp),s.fog=T,s.add(new Qa(ww,Ew,.9)),s.add(a),s.add(x),s.add(w.mesh),s.add(P.mesh),l.position.set(30,40,20),l.castShadow=!0,l.shadow.mapSize.set(Pg,Pg),l.shadow.bias=-4e-4,l.shadow.normalBias=.02,s.add(l),s.add(l.target);let I=c((C,B,k=R)=>k.map(([z,j])=>{let X=C.make();return X.position.set(C.at[0]+z,C.at[1],C.at[2]+j),B.add(X),X}),"copiesOf"),N=c(C=>I(C,a,Cw(R,C.span,d,e.v,D)),"overlayCopiesOf"),O=c(C=>y.forEach(B=>{let k=g.get(B);(k===void 0||!ip(k,C))&&y.delete(B)}),"slideMarkers");return{render:c(()=>n.render(s,r),"render"),resize:c((C,B,k)=>{n.setPixelRatio(k),n.setSize(C,B,!1),r.aspect=B>0?C/B:1,r.updateProjectionMatrix()},"resize"),setChunk:c((C,B,k)=>{let z=`${C},${B}`,j=new Pt;j.setAttribute("position",new bt(k.positions,3)),j.setAttribute("normal",new bt(k.normals,3)),j.setAttribute("color",new bt(k.colours,3)),j.setIndex(new bt(k.indices,1)),j.computeBoundingSphere();let X=u.get(z);X!==void 0&&(X.drawn.forEach(se=>a.remove(se)),X.geometry.dispose());let Q={geometry:j,at:[k.u,0,k.v],make:c(()=>{let se=new wt(j,o);return se.castShadow=!0,se.receiveShadow=!0,se},"make"),drawn:[]};Q.drawn=I(Q,a),u.set(z,Q),w.setChunk(k)},"setChunk"),setOverlay:c((C,B,k)=>{let z=`${C},${B}`,j=h.get(z);if(j!==void 0&&(j.drawn.forEach(Se=>a.remove(Se)),j.geometry.dispose(),h.delete(z)),k===null)return;let X=new Pt;X.setAttribute("position",new bt(k.positions,3)),X.setAttribute("normal",new bt(k.normals,3)),X.setAttribute("color",new bt(k.colours,3)),X.computeBoundingSphere(),X.computeBoundingBox();let Q=X.boundingBox,se={geometry:X,span:[k.v+(Q?.min.z??0),k.v+(Q?.max.z??0)],at:[k.u,0,k.v],make:c(()=>{let Se=new wt(X,f);return Se.castShadow=!0,Se.receiveShadow=!0,Se},"make"),drawn:[]};se.drawn=N(se),h.set(z,se)},"setOverlay"),setMarker:c((C,B,k)=>{let z=g.get(C);if(z?.drawn.forEach(Pe=>x.remove(Pe)),g.delete(C),k===null)return;let j=bg(_,k),X=j.getObjectByName(Eu);j.traverse(Pe=>{Pe.castShadow=Pe instanceof wt});let Q={at:B,make:c(()=>j.clone(),"make"),drawn:[],original:j,...k.unit===null||X===void 0?{}:{unit:{id:k.unit.id,at:X.position.toArray()}}},se=performance.now(),Se=Mw(z,Q,se);Se!==void 0&&(Q.slide=Se),Q.drawn=I(Q,x,m),g.set(C,Q),Q.slide!==void 0&&(y.add(C),ip(Q,se)),_.sweepDue&&_.sweep([...g.values()].flatMap(({original:Pe})=>Pe===void 0?[]:[Pe]))},"setMarker"),slideMarker:c((C,B)=>{let k=g.get(C);if(k===void 0)return;let[z,j,X]=Pu(k);k.slide={from:[B[0]-z,B[1]-j,B[2]-X],started:performance.now()},y.add(C),ip(k,k.slide.started)},"slideMarker"),markerAt:c((C,B)=>{let k=g.get(C);return k===void 0?null:bw(k,B,performance.now())},"markerAt"),sliding:c(()=>y.size>0,"sliding"),view:c((C,B,k=e)=>{let[z,j]=C.focus,[X,Q,se]=Au(C,B),{near:Se,far:Pe}=Cu(C.distance);r.position.set(X,Q,se),r.lookAt(z,B,j),r.far=Pe*1.2,r.near=Math.max(.1,C.distance*.02),r.updateProjectionMatrix(),T.near=Se,T.far=Pe;let J=C.distance*2.2,ue=l.shadow.camera;l.position.set(z+30,B+40,j+20),l.target.position.set(z,B,j),ue.left=-J,ue.right=J,ue.top=J,ue.bottom=-J,ue.near=Math.max(.5,Ig-J*1.6),ue.far=Ig+J*1.6,ue.updateProjectionMatrix(),w.follow(z,j,Pe*2.2,l.position.clone().sub(l.target.position)),P.follow(z,j,Pe*2.2),w.pastThePoles(k.v!==null),P.pastThePoles(k.v!==null),f.clippingPlanes=k.v===null?p:null,D=k.v===null;let Te=Rg(C.focus,Pe,k),De=`${Te.join(";")}${D?" stopped":""}`,_e=Rg(C.focus,Math.min(Pe,C.distance*2.2),k),ze=_e.join(";");De!==E&&(R=Te,E=De,u.forEach(Je=>{Je.drawn.forEach(Le=>a.remove(Le)),Je.drawn=I(Je,a)}),h.forEach(Je=>{Je.drawn.forEach(Le=>a.remove(Le)),Je.drawn=N(Je)})),ze!==S&&(m=_e,S=ze,g.forEach(Je=>{Je.drawn.forEach(Le=>x.remove(Le)),Je.drawn=I(Je,x,m)})),O(performance.now())},"view"),stats:c(()=>({drawCalls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries}),"stats"),dispose:c(()=>{u.forEach(({geometry:C})=>C.dispose()),u.clear(),h.forEach(({geometry:C})=>C.dispose()),h.clear(),f.dispose(),g.clear(),_.dispose(),w.dispose(),P.dispose(),o.dispose(),n.dispose()},"dispose")}},"createStage");var Xi=1/Math.sqrt(3),Ng=1.5*Xi,Rw=c((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),l=Math.abs(r-t);return a>o&&a>l?n=-s-r:o>l&&(s=-n-r),[n,s]},"roundAxial"),Pw=c(({height:i,width:e,wrapsY:t})=>{let n=c((s,r)=>[s+.5+(r&1)*.5,Xi+r*Ng],"centre");return{topologyId:"hex-odd-r",centre:n,outline:c((s,r)=>{let[a,o]=n(s,r);return[[a,o-Xi],[a+.5,o-Xi/2],[a+.5,o+Xi/2],[a,o+Xi],[a-.5,o+Xi/2],[a-.5,o-Xi/2]]},"outline"),tileAt:c((s,r)=>{let a=s-.5,o=r-Xi,[l,u]=Rw(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[l+(u-(u&1))/2,u]},"tileAt"),period:c(()=>({u:e,v:t?i*Ng:null}),"period")}},"hexOddRLayout"),Ug=Pw;var Iw=c(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:c((n,s)=>[n+.5,s+.5],"centre"),outline:c((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:c((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:c(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),Fg=Iw;var vi=Math.SQRT2/2,Lw=c(({height:i,width:e,wrapsY:t})=>{let n=c((s,r)=>[(2*s+(r&1)+1)*vi,(r+1)*vi],"centre");return{topologyId:"staggered-iso",centre:n,outline:c((s,r)=>{let[a,o]=n(s,r);return[[a,o-vi],[a+vi,o],[a,o+vi],[a-vi,o]]},"outline"),tileAt:c((s,r)=>{let a=s/vi,o=r/vi,l=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=l+u;return[Math.floor((l-u)/2),h]},"tileAt"),period:c(()=>({u:e*2*vi,v:t?i*vi:null}),"period")}},"staggeredIsoLayout"),Og=Lw;var Bg={square:Fg,"staggered-iso":Og,"hex-odd-r":Ug},Dw=c(i=>{if(!Object.prototype.hasOwnProperty.call(Bg,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Bg[i.topologyId](i)},"groundLayoutFor"),zg=Dw;var Iu=c(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var Nw=c((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),kg=c(i=>i*i*i*(i*(i*6-15)+10),"fade"),Ms=c(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=c(h=>(h%n+n)%n,"wrapU"),l=c(h=>r===null?h:(h%r+r)%r,"wrapV"),u=c((h,f,d,p)=>{let g=Math.floor(Nw(h,f,t)*16)*(Math.PI/8);return Math.cos(g)*d+Math.sin(g)*p},"slope");return(h,f)=>{let d=h/s,p=f/a,g=Math.floor(d),y=Math.floor(p),x=d-g,_=p-y,w=kg(x),P=kg(_),T=o(g),R=o(g+1),E=l(y),m=l(y+1),S=u(T,E,x,_)+(u(R,E,x-1,_)-u(T,E,x,_))*w,D=u(T,m,x,_-1)+(u(R,m,x-1,_-1)-u(T,m,x,_-1))*w;return Math.max(-1,Math.min(1,(S+(D-S)*P)*1.4))}},"periodicNoise"),ap=c(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var yi={shore:-.03,deep:-.15,reach:3},Lu={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},Vg={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},Gg={Ocean:{relief:{base:yi.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:Vg,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},Du=c(i=>i==="Unknown"?Lu:(Object.prototype.hasOwnProperty.call(Gg,i)?Gg[i]:void 0)??Vg,"terrainEntry");var Hg=.65,op=c(i=>{let e=c(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),nr=.22,lp=c((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),Uw=c((i,e,t)=>({u:(lp(i,e,t,1)*2-1)*nr,v:(lp(i,e,t,2)*2-1)*nr,scale:.75+lp(i,e,t,3)*.5}),"peakOf"),Fw=c(({layout:i,seed:e=1,source:t})=>{let{width:n,height:s,wrapsY:r}=t,a=i.period(),o=ap([Ms({cell:.7,period:a,seed:e}),Ms({cell:.35,period:a,seed:e+1}),Ms({cell:.17,period:a,seed:e+2})]),l=ap([Ms({cell:.45,period:a,seed:e+3}),Ms({cell:.22,period:a,seed:e+4})]),u=c((E,m)=>1-2*Math.abs(l(E,m)),"ridged"),h=Ms({cell:.8,period:a,seed:e+5}),f=Ms({cell:.8,period:a,seed:e+6}),d={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},p=[],g=[],y=c((E,m)=>{let S=(E%n+n)%n;return!r&&(m<0||m>=s)?null:(m%s+s)%s*n+S},"index"),x=c(E=>{let m=new Array(n*s).fill(1/0),S=[];E.forEach((D,I)=>{D&&(m[I]=0,S.push([I%n,Math.floor(I/n)]))});for(let[D,I]of S){let N=m[I*n+D]??1/0;N>=yi.reach||t.neighbours(D,I).forEach(([O,V])=>{let C=V*n+O;(m[C]??1/0)>N+1&&(m[C]=N+1,S.push([O,V]))})}return m},"distancesFromLand"),_=c((E,m)=>{let S=t.terrainAt(E,m);return`${S}${S!=="Unknown"&&t.waterAt(E,m)?" water":""}`},"readAs"),w=c(E=>{if(E!==void 0&&g.length>0&&E.every(([V,C])=>{let B=y(V,C);return B===null||g[B]===_(V,C)}))return[];let m=[],S=[],D=[];for(let V=0;V<s;V++)for(let C=0;C<n;C++){let B=t.terrainAt(C,V);m.push(B),S.push(B!=="Unknown"&&t.waterAt(C,V)),D.push(Du(B))}let I=x(m.map((V,C)=>V!=="Unknown"&&!S[C])),N=m.map((V,C)=>`${V}${S[C]?" water":""}`),O=[];return N.forEach((V,C)=>{g[C]!==V&&O.push([C%n,Math.floor(C/n)])}),g=N,p=D.map((V,C)=>{let B=V===Lu,k=C%n,z=Math.floor(C/n),j=Uw(k,z,e);if(!S[C])return{relief:V.relief,colour:op(V.colour),unknown:B,peak:j};let X=Math.min(I[C]??1/0,yi.reach),Q=yi.shore+(yi.deep-yi.shore)*Math.max(0,X-1)/Math.max(1,yi.reach-1);return{relief:{...V.relief,base:Q},colour:op(V.colour),unknown:B,peak:j}}),O},"refresh"),P=c(E=>{let[m,S]=i.centre(0,E),D=Math.max(...i.outline(0,E).map(([N,O])=>Math.hypot(N-m,O-S))),I=[];for(let N=-6;N<=6;N++)for(let O=-4;O<=4;O++){let[V,C]=i.centre(O,E+N);Math.hypot(V-m,C-S)<1.2+D+nr*Math.SQRT2+1e-9&&I.push([O,N])}return I},"offsetsFor"),T=[P(0),P(1)],R=c((E,m)=>{let[S,D]=i.tileAt(E,m),I=y(S,D),N=I===null?null:p[I]??null;if(N===null||N.unknown)return{height:0,colour:op(Lu.colour),unseen:!0};let O=null,V=null,C=c(J=>J==="rolling"?O??=o(E,m):V??=u(E,m),"noiseHere"),B=0,k=0,z=0,j=0,X=0,Q=0,se=0,Se=E+nr*h(E,m),Pe=m+nr*f(E,m);return(T[D&1]??[]).forEach(([J,ue])=>{let Te=S+J,De=D+ue,_e=y(Te,De);if(_e===null)return;let ze=p[_e];if(ze===void 0)return;let[Je,Le]=i.centre(Te,De),{relief:$e,colour:st,peak:qe}=ze,Mt=Iu(Math.hypot(E-Je,m-Le)),vt=$e.shape==="peaked"?Iu(Math.hypot(E-Je-qe.u,m-Le-qe.v)):0,Ct=Iu(Math.hypot(Se-Je,Pe-Le))**3;if(Mt>0){let ct=d[$e.shape],vn=ct===null?0:$e.roughness*C(ct);$e.shape==="peaked"?k+=Mt*($e.base*(1-Hg)+vn*.5):k+=Mt*($e.base+vn),B+=Mt}if(vt>0){let ct=$e.roughness*C("ridged");z+=vt*vt*($e.base*Hg*qe.scale+ct*.5)}j+=Ct,X+=Ct*st[0],Q+=Ct*st[1],se+=Ct*st[2]}),{height:(B>0?k/B:0)+z,colour:j>0?[X/j,Q/j,se/j]:N.colour,unseen:!1}},"sample");return w(),{sample:R,height:c((E,m)=>R(E,m).height,"height"),refresh:w}},"createRelief"),Wg=Fw;var Xg=c((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),l=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/l*n));return{chunksU:o,chunksV:l,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/l/h}},"chunkGrid"),qg=c((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,l=t*s,u=n*r,h=c((E,m)=>[E*a,m*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),p=(s+1)*(r+1),g=new Float32Array(p*3),y=new Float32Array(p);for(let E=-1;E<=r+1;E++)for(let m=-1;m<=s+1;m++){let S=e.sample(...h(l+m,u+E)),{height:D,colour:I}=S;d[(E+1)*f+(m+1)]=D,m>=0&&m<=s&&E>=0&&E<=r&&(g.set(I,(E*(s+1)+m)*3),y[E*(s+1)+m]=S.unseen?1:0)}let x=c((E,m)=>d[(m+1)*f+(E+1)]??0,"height"),_=new Float32Array(p*3),w=new Float32Array(p*3),[P,T]=h(l,u);for(let E=0;E<=r;E++)for(let m=0;m<=s;m++){let S=E*(s+1)+m,[D,I]=h(l+m,u+E),N=(x(m+1,E)-x(m-1,E))/(2*a),O=(x(m,E+1)-x(m,E-1))/(2*o),V=Math.hypot(N,1,O);_[S*3]=D-P,_[S*3+1]=x(m,E),_[S*3+2]=I-T,w[S*3]=-N/V,w[S*3+1]=1/V,w[S*3+2]=-O/V}let R=new Uint32Array(s*r*6);for(let E=0;E<r;E++)for(let m=0;m<s;m++){let S=E*(s+1)+m,D=S+1,I=S+s+1,N=I+1,O=(E*s+m)*6;R.set([S,I,D,D,I,N],O)}return{u:P,v:T,positions:_,normals:w,colours:g,unseen:y,indices:R}},"buildChunk"),Yg=c((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([l,u])=>{let[h,f]=e.centre(l,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let p=Math.floor((f-n)/r);p<=Math.floor((f+n)/r);p++){if(!a&&(p<0||p>=i.chunksV))continue;let g=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${g},${y}`)}}),[...o].map(l=>l.split(",").map(Number))},"chunksNear");var Rn=c((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),Zg={Forest:{plants:[Rn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95]},Jungle:{plants:[Rn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Rn("palm",2,[.9,1.2],"#3f8a34","#6b5236")]},Swamp:{plants:[Rn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Rn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")]},Grassland:{plants:[Rn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Rn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Rn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Rn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Rn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Rn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Rn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Rn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Nu=c(i=>Object.prototype.hasOwnProperty.call(Zg,i)?Zg[i]:null,"growthOf");var Ow=["River"],bi=c((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),Bw=c((i,e)=>{if(i.city)return null;let t=bi(i,"Road"),n=bi(i,"Railroad"),s=t?e.filter(h=>bi(h.tile,"Road")).map(({offset:h})=>h):[],r=t?e.filter(h=>!!h.tile.city||bi(h.tile,"Railroad")).map(({offset:h})=>h):[],a=c((h,f)=>h[0]===f[0]&&h[1]===f[1],"same"),o=s.length===0&&r.length===0,l={road:t?{joins:s.filter(h=>!n||!r.some(f=>a(f,h))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:bi(i,"Farmland")?"farmland":bi(i,"Irrigation")?"irrigation":null,mine:bi(i,"Mine"),fortress:bi(i,"Fortress"),airbase:bi(i,"Airbase"),pollution:bi(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:h})=>h).filter(h=>!Ow.includes(h)).map(h=>[i.terrain._,h]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:Nu(i.terrain?._??"Unknown")!==null};return l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation?null:l},"overlayFor"),$g=Bw;var _t=c((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Jg={Coal:_t("rocks","#26262a",4),Gold:_t("rocks","#d8b13a",3),Gems:_t("rocks","#59c2d6",4,"#b05ad0"),Iron:_t("rocks","#8a5a44",4),Wheat:_t("crop","#d9b84a",5,"#a88a2c"),Spice:_t("crop","#c0452e",4,"#5d7a2a"),Wine:_t("crop","#6a2c5e",4,"#5d7a2a"),Silk:_t("crop","#e9e2cf",3,"#4f7a34"),Fruit:_t("crop","#e08a2a",4,"#3f7a2a"),Horse:_t("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:_t("animal","#4a3424",3,"#2a1e16"),Game:_t("animal","#a9835a",2,"#5a4430"),"Tundra:Game":_t("animal","#8f7e66",2,"#e8e2d6"),Furs:_t("animal","#b0602a",2,"#f0e8dc"),Ivory:_t("animal","#8a8580",1,"#f2ead8"),Seal:_t("animal","#6e7072",2,"#4a4c4e"),Pheasant:_t("bird","#8a3a22",2,"#3d6a3a"),Fish:_t("fish","#b8c4cc",5),Whales:_t("whale","#3a4048",1),Oil:_t("derrick","#222224",1,"#121214"),Oasis:_t("oasis","#3f7a32",3,"#3f86a8"),Peat:_t("peat","#4a3624",4),Shield:_t("logs","#7a5532",4,"#c9a47a")},zw=_t("cairn","#9a9690",5),Kg=c((i,e)=>{let t=c(n=>Object.prototype.hasOwnProperty.call(Jg,n)?Jg[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??zw},"specialLook");var mp=c(()=>({positions:[],normals:[],colours:[]}),"soup"),Pn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},up=.06,Qg="#8c7a58",jg="#5f5953",kw="#a9abae",Gw="#5e432b",Vw="#4f87b0",Hw="#7da33f",Ww=["#c2b448","#8fae3e"],ex="#9d968a",Xw="#4a4c50",fp="#6b4a2e",qw="#7a6a58",Yw="#b89a5a",Zw="#c9b48e",tx="#34322a",mn=new hi(1,1,1),ia=new di(.5,.5,1,8),gp=new fi(.5,1,8),$w=new fi(.5,1,4),na=new ps(.5,8,6),Mo=new di(.5,.5,1,4,1,!0),So=new fi(.5,1,5,1,!0),Uu=new ps(.5,5,3),hp={mine:[3,.72],hut:[11,.64],special:c(i=>[i+1,.72],"special")},Jw=.05,Kw=.22,nx=72,Mi=c((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),ix=new Map,dp=c(i=>{let e=ix.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Ue(i);e=[t,n,s],ix.set(i,e)}return e},"colourOf"),sx=new WeakMap,Qw=c(i=>{let e=sx.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},sx.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),jw=new lt,e1=new Ve,t1=new G,n1=new an,i1=new Sn,s1=new G,At,rx,en,bp=class bp{constructor(e,t){te(this,At);this.lines=[];this.taken=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=dp(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let l=Math.max(1,Math.ceil(o/up)),u=Math.max(1,Math.ceil(n/up)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=c((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<l;d++)for(let p=0;p<u;p++){let[g,y]=f(d/l,(p+1)/u),[x,_]=f((d+1)/l,(p+1)/u),[w,P]=f(d/l,p/u),[T,R]=f((d+1)/l,p/u);H(this,At,en).call(this,g,y,r,a),H(this,At,en).call(this,x,_,r,a),H(this,At,en).call(this,w,P,r,a),H(this,At,en).call(this,x,_,r,a),H(this,At,en).call(this,T,R,r,a),H(this,At,en).call(this,w,P,r,a)}}disc(e,t,n,s,r=12){let a=dp(n),[o,l]=e,u=Math.max(1,Math.ceil(t/up)),h=c((f,d)=>{let p=d/r*Math.PI*2,g=f/u*t;return[o+Math.cos(p)*g,l+Math.sin(p)*g]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let p=h(f+1,d),g=h(f+1,d+1);if(f===0)H(this,At,en).call(this,o,l,s,a),H(this,At,en).call(this,...g,s,a),H(this,At,en).call(this,...p,s,a);else{let y=h(f,d),x=h(f,d+1);H(this,At,en).call(this,...y,s,a),H(this,At,en).call(this,...x,s,a),H(this,At,en).call(this,...p,s,a),H(this,At,en).call(this,...x,s,a),H(this,At,en).call(this,...g,s,a),H(this,At,en).call(this,...p,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=Qw(e),l=jw.compose(t1.set(...t),n1.setFromEuler(i1.set(...r)),s1.set(...n)),u=l.elements,h=e1.getNormalMatrix(l).elements,[f,d,p]=dp(s),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],w=a[y+2],P=o[y],T=o[y+1],R=o[y+2],E=h[0]*P+h[3]*T+h[6]*R,m=h[1]*P+h[4]*T+h[7]*R,S=h[2]*P+h[5]*T+h[8]*R,D=Math.hypot(E,m,S)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*w+u[12],u[1]*x+u[5]*_+u[9]*w+u[13],u[2]*x+u[6]*_+u[10]*w+u[14]),g.normals.push(E/D,m/D,S/D),g.colours.push(f,d,p)}}spot(e,t){let n=Mi(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-Kw-n;return this.lines.forEach(([o,l])=>{a=Math.min(a,g1(e,t,o,l)-Jw-n)}),this.taken.forEach(([o,l,u])=>{a=Math.min(a,Math.hypot(e-o,t-l)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=Mi(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],l=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<nx;h++){let f=s+h/nx*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>l&&(o=d,l=p)}return this.taken.push([o[0],o[1],n]),o}};At=new WeakSet,rx=c(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),en=c(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...H(this,At,rx).call(this,e,t)),this.soup.colours.push(...s)},"#point"),c(bp,"Layer");var pp=bp,xp=c((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),_p=c(i=>i.alone||i.joins.length>0,"drawn"),r1=c((i,e)=>{let{place:t}=i;_p(e)&&(e.joins.forEach(n=>i.strip(t.centre,xp(t,n),.07,Qg,Pn.road)),i.disc(t.centre,e.alone?.09:.035,Qg,Pn.road))},"road"),a1=c((i,e)=>{if(!_p(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>xp(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),l=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,jg,Pn.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,Gw,Pn.ballast+.002)}[1,-1].forEach(u=>i.strip([r+l[0]*u,a+l[1]*u],[s[0]+l[0]*u,s[1]+l[1]*u],.01,kw,Pn.rail))}),i.disc(t.centre,.05,jg,Pn.ballast)},"railroad"),o1=c((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let l=t[1]-r+a*(o+.5),u=e==="farmland"?Ww[o%2]:Hw;if(i.strip([t[0]-r,l],[t[0]+r,l],a*.8,u,Pn.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,Vw,Pn.field+.001)}}},"fields"),l1=c((i,[e,t])=>{let n=i.ground(e,t);i.solid(mn,[e-.02,n+.05,t],[.01,.11,.01],fp,[0,0,-.3]),i.solid(mn,[e+.02,n+.05,t],[.01,.11,.01],fp,[0,0,.3]),i.solid(ia,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(gp,[a,i.ground(a,o)+.02,o],[.07,.04,.07],qw)})},"mine"),c1=c(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,l])=>{let u=e+r,h=t+a;i.solid(mn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,l],ex)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,l=t+a;i.solid(ia,[o,i.ground(o,l)+.035,l],[.045,.07,.045],ex)})},"fortress"),u1=c(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,Xw,Pn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Pn.road+.004),i.solid(mn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),h1=c(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,tx,Pn.smear,14),i.disc(i.spot(7,.5),e*.25,tx,Pn.smear+.001)},"pollution"),d1=c((i,e,t,n)=>{let s=e.detail??e.colour,r=c((o,l)=>[t[0]+(Mi(i.place.seed,n*31+o*2)-.5)*l,t[1]+(Mi(i.place.seed,n*31+o*2+1)-.5)*l],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[l,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(l,u,a),f=Mi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(na,[l,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(ia,[l,h+.02,u],[.008,.04,.008],s),i.solid(na,[l,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(mn,[l,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(mn,[l+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(mn,[l,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(na,[l,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(mn,[l-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(na,[l,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(na,[l,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(mn,[l-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(mn,[l,h+.008,u],[.08,.016,.08],s),i.solid($w,[l,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([l,u],.07,s,Pn.field+.002);{let[d,p]=r(o+5,.1),g=i.ground(d,p);i.solid(ia,[d,g+.06,p],[.012,.12,.012],fp),i.solid(gp,[d,g+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?ia:mn,[l,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(na,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),f1=c((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+Mi(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(ia,[s,a+.02,r],[.05,.04,.05],Zw),i.solid(gp,[s,a+.055,r],[.065,.035,.065],Yw)})},"hut"),p1={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},m1=c((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:l,detail:u}=e;switch(t){case"conifer":i.solid(Mo,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(So,[n,o+.09*r,s],[.11*r,.12*r,.11*r],l),i.solid(So,[n,o+.16*r,s],[.08*r,.1*r,.08*r],l);break;case"broadleaf":i.solid(Mo,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(Uu,[n,o+.12*r,s],[.13*r,.11*r,.13*r],l,[0,a,0]);break;case"palm":i.solid(Mo,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(So,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],l,[0,a,0]);break;case"deadTree":i.solid(Mo,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(mn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(Uu,[n,o+.02*r,s],[.06*r,.045*r,.06*r],l,[0,a,0]);break;case"shrub":i.solid(So,[n,o+.025*r,s],[.05*r,.05*r,.05*r],l,[0,a,0]),i.solid(So,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],l,[0,a,0]);break;case"scrub":i.solid(Uu,[n,o+.008*r,s],[.05*r,.02*r,.05*r],l,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(mn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?l:u,[0,a,h*.18]));break;case"rock":i.solid(Uu,[n,o+.012*r,s],[.07*r,.04*r,.06*r],l,[0,a,0]);break;default:i.solid(Mo,[n,o+.05*r,s],[.018*r,.1*r,.018*r],l),i.solid(mn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],l,[0,a,0])}},"grow"),g1=c((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),x1=c((i,e)=>{let t=Nu(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,l)=>{for(let u=0;u<o.count;u++){let h=1e3+l*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*Mi(r,h),d=t.conifers,p=d!==void 0&&Mi(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,g=p1[p]*f;for(let y=0;y<6;y++){let x=Mi(r,h+2+y*2)*Math.PI*2,_=Math.sqrt(Mi(r,h+3+y*2))*s*.92,w=n[0]+Math.cos(x)*_,P=n[1]+Math.sin(x)*_;if(i.hasRoom(w,P,g)){m1(i,o,p,w,P,f,x),i.taken.push([w,P,g]);break}}}})},"plants"),vp=c((i,e,t)=>{let n=new pp(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(a=>{a!==null&&_p(a)&&(a.joins.forEach(o=>n.lines.push([s,xp(e,o)])),a.alone&&n.lines.push([s,s]))}),i.fortress){let a=r*.62,o=[[-a,-a],[a,-a],[a,a],[-a,a]].map(([l,u])=>[s[0]+l,s[1]+u]);o.forEach((l,u)=>n.lines.push([l,o[(u+1)%4]]))}if(i.airbase){let a=r*.75;n.lines.push([[s[0]-a,s[1]+.12],[s[0]+a,s[1]+.12]])}return i.irrigation!==null&&o1(n,i.irrigation),i.road!==null&&r1(n,i.road),i.railroad!==null&&a1(n,i.railroad),i.mine&&l1(n,n.claim(...hp.mine,.1)),i.fortress&&c1(n),i.airbase&&u1(n),i.pollution&&h1(n),i.specials.forEach(([a,o],l)=>d1(n,Kg(a,o),n.claim(...hp.special(l),.1),l+1)),i.hut&&f1(n,n.claim(...hp.hut,.13)),i.vegetation&&i.irrigation===null&&!i.fortress&&!i.airbase&&x1(n,i),{taken:n.taken,lines:n.lines}},"layOverlay"),_1=c((i,e,t)=>{let n=mp();return t.forEach(({overlay:s,place:r})=>vp(s,r,n)),yp(i,e,n)},"overlayMesh"),yp=c((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),ax=_1;var Ss,tn,ni,Eo,Si,In,cn,sa,To,ir,Ao,Co,ft,ox,Sp,wp,Fu,Ou,lx,wo,Ep=class Ep{constructor(e){te(this,ft);te(this,Ss);te(this,tn);te(this,ni,[]);te(this,Eo);te(this,Si);te(this,In,new Set);te(this,cn,null);te(this,sa,null);te(this,To,new Map);te(this,ir,[0,0]);te(this,Ao);te(this,Co);Z(this,Si,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=zg({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),Z(this,Ss,Wg({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:c((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:c((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:c((d,p)=>t.directions().map(g=>t.neighbour(d,p,g)).filter(g=>g!==null),"neighbours")}})),Z(this,tn,Xg(this.layout,s));let[a,o]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[g,y]=this.layout.centre(d,p);return Math.hypot(g-a,y-o)}));Z(this,Eo,1.2+l+nr*Math.SQRT2+(yi.reach-1)*u);let h=this.layout.outline(0,0),f=h.flatMap(([d,p],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-d,x-p);return _===0?[]:[{away:Math.abs((y-d)*(o-p)-(x-p)*(a-d))/_,normal:[(x-p)/_,(d-y)/_]}]});Z(this,Ao,Math.min(...f.map(({away:d})=>d))),Z(this,Co,Math.min(...f.map(({away:d,normal:[p,g]})=>d/(Math.abs(p)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=v(this,tn),a=Math.floor(e/s),o=Math.floor(t/r),l=e/s-a,u=t/r-o,h=c((y,x)=>{let _=`${y},${x}`,w=n.get(_);return w===void 0&&(w=v(this,Ss).height(y*s,x*r),n.set(_,w)),w},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(l+u<=1)return f+(d-f)*l+(p-f)*u;let g=h(a+1,o+1);return g+(p-g)*(1-l)+(d-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,tn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return v(this,tn).chunksV*v(this,tn).stepsV*v(this,tn).spacingV}heightAt(e,t){return v(this,Ss).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=v(this,tn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);Z(this,ni,H(this,ft,wo).call(this,r,e,t)),Z(this,ir,[e,t]),r.forEach(a=>v(this,In).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return;Z(this,ir,[t,n]),(e.length===0?[...H(this,ft,Ou).call(this).values()].flat():H(this,ft,lx).call(this,e)).forEach(([o,l])=>{let u=H(this,ft,Fu).call(this,o,l);if(v(this,In).has(u)||v(this,cn)?.key===u&&!H(this,ft,ox).call(this,v(this,cn),o,l))return;JSON.stringify(H(this,ft,Sp).call(this,o,l))!==(v(this,To).get(`${o},${l}`)??"null")&&v(this,In).add(u)});let r=v(this,Ss).refresh(s?void 0:e);if(r.length===0)return;let a=Yg(v(this,tn),this.layout,r,v(this,Eo)).map(([o,l])=>`${o},${l}`);Z(this,ni,H(this,ft,wo).call(this,[...new Set([...v(this,ni),...a])],t,n))}refocus(e,t){Z(this,ni,H(this,ft,wo).call(this,v(this,ni),e,t)),Z(this,ir,[e,t])}pending(){return v(this,ni).length}overlaysPending(){return v(this,In).size+(v(this,cn)===null||v(this,In).has(v(this,cn).key)?0:1)}build(e,t){let n=performance.now(),s=c(()=>t!==null&&performance.now()-n>=t,"spent");for(;v(this,ni).length>0;){if(s())return;let r=v(this,ni).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,qg(v(this,tn),v(this,Ss),a,o)),v(this,In).add(r)}for(;v(this,In).size>0||v(this,cn)!==null;){if(v(this,cn)!==null&&v(this,In).has(v(this,cn).key)&&Z(this,cn,null),v(this,cn)===null){let d=H(this,ft,wo).call(this,[...v(this,In)],...v(this,ir))[0];v(this,In).delete(d),Z(this,cn,{key:d,squares:H(this,ft,Ou).call(this).get(d)??[],done:0,laid:mp(),heights:new Map})}let r=v(this,cn);for(;r.done<r.squares.length;){let[d,p]=r.squares[r.done],g=H(this,ft,wp).call(this,d,p,r.heights);if(r.done++,g!==null&&vp(g.overlay,g.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:l,stepsV:u,spacingU:h,spacingV:f}=v(this,tn);Z(this,cn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:yp(a*l*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,tn),o=new Map,l=(H(this,ft,Ou).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>H(this,ft,wp).call(this,u,h,o)??[]);return l.length===0?null:ax(e*n*r,t*s*a,l)}overlayKeyOf(e,t){return H(this,ft,Fu).call(this,e,t)}};Ss=new WeakMap,tn=new WeakMap,ni=new WeakMap,Eo=new WeakMap,Si=new WeakMap,In=new WeakMap,cn=new WeakMap,sa=new WeakMap,To=new WeakMap,ir=new WeakMap,Ao=new WeakMap,Co=new WeakMap,ft=new WeakSet,ox=c(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),Sp=c(function(e,t){let n=v(this,Si).topology();return $g(v(this,Si).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:v(this,Si).get(r[0],r[1])}]}))},"#overlayAt"),wp=c(function(e,t,n){let s=H(this,ft,Sp).call(this,e,t);if(v(this,To).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t);return{overlay:s,place:{centre:[r,a],toward:c(([o,l])=>this.layout.centre(e+o,t+l),"toward"),radius:v(this,Ao),inner:v(this,Co),heightAt:c((o,l)=>this.surfaceAt(o,l,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1))}}},"#square"),Fu=c(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:l}=v(this,tn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*l));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),Ou=c(function(){if(v(this,sa)===null){let e=new Map;for(let t=0;t<v(this,Si).height();t++)for(let n=0;n<v(this,Si).width();n++){let s=H(this,ft,Fu).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}Z(this,sa,e)}return v(this,sa)},"#chunksOfSquares"),lx=c(function(e){let t=v(this,Si).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),wo=c(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=v(this,tn),l=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=c((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),p=c(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(d((y+.5)*l-t,h),d((x+.5)*u-n,f))},"distance");return[...e].sort((g,y)=>p(g)-p(y))},"#nearestFirst"),c(Ep,"Land");var Mp=Ep,cx=Mp;var v1=c(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),ra=v1;var ux=c((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var y1=8,b1=.92,M1=.02,hx=3,S1=50,w1=8,E1=10,dx=250,Ro,Po,aa,oa,sr,ws,Tp=class Tp{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){te(this,Ro);te(this,Po);te(this,aa);te(this,oa);te(this,sr,!1);te(this,ws);this.pointerId=e,Z(this,Ro,t),Z(this,Po,n),Z(this,aa,t),Z(this,oa,n),Z(this,ws,[{x:t,y:n,time:s}])}dragging(){return v(this,sr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!v(this,sr)&&Math.hypot(t-v(this,Ro),n-v(this,Po))<y1)return null;let r=!v(this,sr),a=v(this,aa)-t,o=v(this,oa)-n;return Z(this,sr,!0),Z(this,aa,t),Z(this,oa,n),v(this,ws).push({x:t,y:n,time:s}),v(this,ws).length>20&&v(this,ws).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return ux(v(this,ws),e)}};Ro=new WeakMap,Po=new WeakMap,aa=new WeakMap,oa=new WeakMap,sr=new WeakMap,ws=new WeakMap,c(Tp,"Press");var Bu=Tp,wi,Io,Ap=class Ap{constructor(e){te(this,wi,null);te(this,Io);Z(this,Io,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>hx?hx/t:1,s=e.x*n,r=e.y*n,a=null,o=c(l=>{let u=a===null?16:Math.min(l-a,64);if(a=l,Math.hypot(s,r)<M1){Z(this,wi,null);return}v(this,Io).call(this,-s*u,-r*u);let h=Math.pow(b1,u/16);s*=h,r*=h,Z(this,wi,window.requestAnimationFrame(o))},"step");Z(this,wi,window.requestAnimationFrame(o))}gliding(){return v(this,wi)!==null}stop(){v(this,wi)!==null&&(window.cancelAnimationFrame(v(this,wi)),Z(this,wi,null))}};wi=new WeakMap,Io=new WeakMap,c(Ap,"Glide");var zu=Ap,rr,Lo,Do,la,Cp=class Cp{constructor(){te(this,rr,0);te(this,Lo,0);te(this,Do,-1/0);te(this,la,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=dx)return 0;let r=Math.sign(s),a=e.timeStamp-v(this,Do)>dx||r!==v(this,Lo);if(Z(this,Do,e.timeStamp),Z(this,Lo,r),a&&(Z(this,rr,0),Z(this,la,0)),n&&!e.ctrlKey&&v(this,la)>=E1)return 0;if(!a&&n){if(Z(this,rr,v(this,rr)+s),Math.abs(v(this,rr))<(e.ctrlKey?w1:S1))return 0;Z(this,rr,0)}return n&&!e.ctrlKey&&Z(this,la,v(this,la)+1),s<0?1:-1}};rr=new WeakMap,Lo=new WeakMap,Do=new WeakMap,la=new WeakMap,c(Cp,"WheelTurn");var ku=Cp;var T1=350,A1=.006,fx=.004,Ei,qt,un,ca,Ti,ii,Wu,Wn,Xn,Es,ua,Ln,Ts,Ee,Hn,Gu,Vu,px,Pp,qi,Ip,mx,Yi,gx,xx,_x,vx,No,yx,bx,Mx,Hu,Lp=class Lp{constructor(e,t,n=null){te(this,Ee);te(this,Ei);te(this,qt);te(this,un,null);te(this,ca,[0,0]);te(this,Ti,null);te(this,ii);te(this,Wu,new ku);te(this,Wn,new Map);te(this,Xn,null);te(this,Es,null);te(this,ua,[]);te(this,Ln);te(this,Ts,null);Z(this,Ei,e),Z(this,qt,t),Z(this,Ln,n),Z(this,ii,new zu((s,r)=>{let[a,o]=H(this,Ee,px).call(this);H(this,Ee,Ip).call(this,[a,o],[a-s,o-r])})),H(this,Ee,Hn).call(this,"pointerdown",s=>H(this,Ee,mx).call(this,s)),H(this,Ee,Hn).call(this,"pointermove",s=>H(this,Ee,xx).call(this,s)),H(this,Ee,Hn).call(this,"pointerup",s=>H(this,Ee,_x).call(this,s)),H(this,Ee,Hn).call(this,"pointercancel",s=>H(this,Ee,vx).call(this,s)),H(this,Ee,Hn).call(this,"wheel",s=>H(this,Ee,bx).call(this,s),{passive:!1}),H(this,Ee,Hn).call(this,"gesturestart",s=>H(this,Ee,Hu).call(this,s,"start"),{passive:!1}),H(this,Ee,Hn).call(this,"gesturechange",s=>H(this,Ee,Hu).call(this,s,"change"),{passive:!1}),H(this,Ee,Hn).call(this,"gestureend",s=>H(this,Ee,Hu).call(this,s,"end"),{passive:!1}),H(this,Ee,Hn).call(this,"contextmenu",s=>H(this,Ee,gx).call(this,s)),H(this,Ee,Hn).call(this,"pointerleave",()=>v(this,Ln)?.hover(null)),H(this,Ee,Hn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return v(this,un)?.dragging()===!0||v(this,Ti)!==null}moving(){return this.dragging()||v(this,Xn)!==null||v(this,ii).gliding()}dispose(){v(this,ii).stop(),H(this,Ee,Yi).call(this),v(this,ua).forEach(([e,t,n])=>v(this,Ei).removeEventListener(e,t,n)),Z(this,ua,[])}};Ei=new WeakMap,qt=new WeakMap,un=new WeakMap,ca=new WeakMap,Ti=new WeakMap,ii=new WeakMap,Wu=new WeakMap,Wn=new WeakMap,Xn=new WeakMap,Es=new WeakMap,ua=new WeakMap,Ln=new WeakMap,Ts=new WeakMap,Ee=new WeakSet,Hn=c(function(e,t,n){v(this,Ei).addEventListener(e,t,n),v(this,ua).push([e,t,n])},"#listen"),Gu=c(function(){return{width:v(this,Ei).clientWidth||1,height:v(this,Ei).clientHeight||1}},"#box"),Vu=c(function([e,t]){let{width:n,height:s}=H(this,Ee,Gu).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),px=c(function(){let{width:e,height:t}=H(this,Ee,Gu).call(this);return[e/2,t/2]},"#middle"),Pp=c(function(){let{width:e,height:t}=H(this,Ee,Gu).call(this);return e/t},"#aspect"),qi=c(function(e){let t=v(this,Ei).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Ip=c(function(e,t){v(this,qt).setOrbit(wg(v(this,qt).orbit(),v(this,qt).lookHeight(),H(this,Ee,Vu).call(this,e),H(this,Ee,Vu).call(this,t),H(this,Ee,Pp).call(this)))},"#pan"),mx=c(function(e){if(v(this,ii).stop(),v(this,Ln)?.hover(null),e.pointerType==="touch"&&(v(this,Wn).set(e.pointerId,H(this,Ee,qi).call(this,e)),v(this,Wn).size===2)){Z(this,un,null),H(this,Ee,Yi).call(this),Z(this,Xn,H(this,Ee,No).call(this));return}if(e.isPrimary&&e.button!==2){if(v(this,Ei).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),Z(this,Ti,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Bu(e),[n,s]=H(this,Ee,qi).call(this,e),{clientX:r,clientY:a}=e;Z(this,un,t),Z(this,ca,[n,s]),H(this,Ee,Yi).call(this),Z(this,Ts,window.setTimeout(()=>{Z(this,Ts,null),v(this,un)===t&&!t.dragging()&&v(this,Ln)?.menu(n,s,r,a,!0)===!0&&Z(this,un,null)},T1))}}},"#down"),Yi=c(function(){v(this,Ts)!==null&&(window.clearTimeout(v(this,Ts)),Z(this,Ts,null))},"#stopHold"),gx=c(function(e){if(v(this,Ln)===null||!v(this,Ln).menuOnRightClick()||(e.preventDefault(),v(this,Ln).menuOpen()))return;let[t,n]=H(this,Ee,qi).call(this,e);v(this,Ln).menu(t,n,e.clientX,e.clientY,!1)&&(H(this,Ee,Yi).call(this),Z(this,un,null))},"#rightClick"),xx=c(function(e){if(v(this,Wn).has(e.pointerId)&&(v(this,Wn).set(e.pointerId,H(this,Ee,qi).call(this,e)),v(this,Xn)!==null)){H(this,Ee,yx).call(this);return}let t=v(this,Ti);if(t!==null&&t.pointerId===e.pointerId){let r=v(this,qt).orbit();v(this,qt).setOrbit(tr({...r,yaw:r.yaw-(e.clientX-t.x)*A1,pitch:r.pitch+(e.clientY-t.y)*fx})),t.x=e.clientX,t.y=e.clientY;return}let n=v(this,un);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!v(this,ii).gliding()){let[r,a]=H(this,Ee,qi).call(this,e);v(this,Ln)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;H(this,Ee,Yi).call(this);let s=H(this,Ee,qi).call(this,e);H(this,Ee,Ip).call(this,v(this,ca),s),Z(this,ca,s)},"#move"),_x=c(function(e){if(v(this,Wn).delete(e.pointerId),v(this,Xn)!==null){Z(this,Xn,v(this,Wn).size<2?null:H(this,Ee,No).call(this));return}if(v(this,Ti)?.pointerId===e.pointerId){Z(this,Ti,null);return}let t=v(this,un);if(!(t===null||t.pointerId!==e.pointerId)){if(Z(this,un,null),H(this,Ee,Yi).call(this),!t.dragging()){let[n,s]=H(this,Ee,qi).call(this,e);v(this,Ln)?.click(n,s,e.clientX,e.clientY);return}ra()||v(this,ii).start(t.releaseVelocity(e.timeStamp))}},"#up"),vx=c(function(e){v(this,Wn).delete(e.pointerId),v(this,Xn)!==null&&Z(this,Xn,v(this,Wn).size<2?null:H(this,Ee,No).call(this)),v(this,un)?.pointerId===e.pointerId&&(Z(this,un,null),H(this,Ee,Yi).call(this)),v(this,Ti)?.pointerId===e.pointerId&&Z(this,Ti,null)},"#cancel"),No=c(function(){let[e,t]=[...v(this,Wn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:v(this,qt).orbit()}},"#measurePair"),yx=c(function(){let e=v(this,Xn),t=H(this,Ee,No).call(this);e===null||t===null||v(this,qt).setOrbit(tr({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*fx}))},"#twoFingers"),bx=c(function(e){e.preventDefault();let t=v(this,Wu).turned(e,v(this,Es)?.at??null);t!==0&&(v(this,ii).stop(),H(this,Ee,Mx).call(this,t,H(this,Ee,qi).call(this,e)))},"#wheelTurned"),Mx=c(function(e,t){let n=v(this,qt).orbit(),s=ta(n,e),r=ea(n,v(this,qt).lookHeight(),H(this,Ee,Vu).call(this,t),H(this,Ee,Pp).call(this));if(r===null||s.distance===n.distance){v(this,qt).setOrbit(s);return}let a=1-s.distance/n.distance;v(this,qt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),Hu=c(function(e,t){if(e.preventDefault(),v(this,Xn)!==null){Z(this,Es,null);return}if(t==="end"){Z(this,Es,null);return}if(t==="start"){v(this,ii).stop(),Z(this,un,null),H(this,Ee,Yi).call(this),Z(this,Es,{orbit:v(this,qt).orbit(),at:e.timeStamp});return}let n=v(this,Es);n!==null&&(n.at=e.timeStamp,v(this,qt).setOrbit(tr({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),c(Lp,"CameraInput");var Rp=Lp,Sx=Rp;var C1=["#9a9a9a","#4a4a4a"],Uo=c(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?C1:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Dp=c((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),R1=c(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),P1=c((i,e,t,n={},s=()=>0,r=1)=>{let a=i.units??[],o=Dp(a,e),l=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Uo(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||l)?{id:o.id,type:o._,kinds:o.__??[],colours:Uo(o.player),count:a.length,active:l,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:R1(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:s(o),size:r}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),wx=P1;var I1=1,L1=.04,D1=12,N1=c((i,e,t,n,s,{water:r=0,ceiling:a=I1}={})=>{let{from:o,direction:l}=jf(i,e,t,n),[u,h,f]=o,[d,p,g]=l;if(p>-1e-6)return null;let y=c(m=>[u+d*m,h+p*m,f+g*m],"at"),x=c(m=>{let[S,D,I]=y(m);return D-Math.max(r,s(S,I))},"above"),_=Math.max(0,(h-a)/-p),w=(h-r)/-p,P=L1/Math.max(1e-6,Math.hypot(d,g)),T=_;for(let m=_;;m=Math.min(w,m+P)){if(x(m)<=0){let S=T,D=m;for(let O=0;O<D1;O++){let V=(S+D)/2;x(V)>0?S=V:D=V}let[I,,N]=y(D);return[I,N]}if(m>=w)break;T=m}let[R,,E]=y(w);return[R,E]},"pickGround"),Ex=N1;var Xu=4,As,Fo,ar,or,gn,ha,Cs,Zi,Oo,Bo,zo,si,qu,Tx,Up,Fp=class Fp{constructor(e,t,n,s,r){te(this,si);te(this,As);te(this,Fo);te(this,ar);te(this,or);te(this,gn);te(this,ha);te(this,Cs);te(this,Zi);te(this,Oo);te(this,Bo);te(this,zo,c(e=>{let t=v(this,As).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;v(this,Bo).call(this,n*v(this,gn),s*v(this,ha))},"#click"));Z(this,As,e),Z(this,ar,t),Z(this,or,n),Z(this,gn,t.period().u),Z(this,ha,s),Z(this,Bo,r),Z(this,Zi,document.createElement("canvas"));let{v:a}=t.period();Z(this,Cs,a),Z(this,Oo,[[0,0],[-v(this,gn),0],...a===null?[]:[[0,-a],[-v(this,gn),-a]]]);let o=Math.max(1,Math.round(v(this,gn)*Xu)),l=Math.max(1,Math.round(v(this,ha)*Xu));[e,v(this,Zi)].forEach(u=>{u.width=o,u.height=l}),Z(this,Fo,e.getContext("2d")),e.addEventListener("click",v(this,zo))}dispose(){v(this,As).removeEventListener("click",v(this,zo))}redraw(){let e=v(this,Zi).getContext("2d");if(e===null)return;let t=v(this,or).width(),n=v(this,or).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,v(this,Zi).width,v(this,Zi).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=v(this,or).get(a,r),l=o.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=Du(l).colour,v(this,Oo).forEach(([f,d])=>{H(this,si,Tx).call(this,e,a,r,f,d),e.fill()});let[u,h]=v(this,ar).centre(a,r);if(o.city)s.push([u,h,Uo(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=Dp(o.units,null);f!==null&&s.push([u,h,Uo(f.player)[0],1.4])}}s.forEach(([r,a,o,l])=>H(this,si,Up).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=o,e.fillRect(u-l,h-l,l*2,l*2)}))}show(e,t){let n=v(this,Fo);if(n===null)return;if(n.clearRect(0,0,v(this,As).width,v(this,As).height),n.drawImage(v(this,Zi),0,0),t!==null){let[h,f]=v(this,ar).centre(t.x,t.y);n.fillStyle="#ffffff",H(this,si,Up).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=v(this,Cs),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-v(this,gn)*Math.floor(r/v(this,gn)),l=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-v(this,gn),0,v(this,gn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],g)=>{let[y,x]=H(this,si,qu).call(this,d+o+f,p+l+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};As=new WeakMap,Fo=new WeakMap,ar=new WeakMap,or=new WeakMap,gn=new WeakMap,ha=new WeakMap,Cs=new WeakMap,Zi=new WeakMap,Oo=new WeakMap,Bo=new WeakMap,zo=new WeakMap,si=new WeakSet,qu=c(function(e,t){return[e*Xu,t*Xu]},"#px"),Tx=c(function(e,t,n,s=0,r=0){e.beginPath(),v(this,ar).outline(t,n).forEach(([a,o],l)=>{let[u,h]=H(this,si,qu).call(this,a+s,o+r);l===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Up=c(function(e,t){return(v(this,Cs)===null?[0]:[-v(this,Cs),0,v(this,Cs)]).flatMap(s=>[-v(this,gn),0,v(this,gn)].map(r=>H(this,si,qu).call(this,e+r,t+s)))},"#everywhere"),c(Fp,"Minimap3D");var Np=Fp,Ax=Np;var U1=10,F1=4e3,Cx=c(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),O1=350,B1=500,z1=.25,k1=400,Dt,Wo,Xo,tt,hn,lr,qo,Yo,nt,pt,_n,fa,Zo,cr,Ps,pa,$o,Jo,Dn,Ko,$i,ri,Qo,Ai,Is,jo,Nn,ma,ga,Ls,Ji,xa,Ds,ur,_a,Ki,el,Qi,hr,tl,va,ya,nl,ba,il,Ma,Sa,wa,ae,Bp,Rx,Yu,Px,ko,Ix,Lx,Dx,zp,Zu,Nx,Ux,Go,Rs,Vo,Fx,Ox,kp,da,Gp,Ho,Vp,Bx,zx,Hp,xn,kx,Gx,Wp,Xp=class Xp{constructor(e,t=Dg){te(this,ae);te(this,Dt);te(this,Wo);te(this,Xo,[]);te(this,tt);te(this,hn);te(this,lr,null);te(this,qo,0);te(this,Yo,"");te(this,nt);te(this,pt,null);te(this,_n,null);te(this,fa);te(this,Zo);te(this,cr);te(this,Ps,null);te(this,pa,null);te(this,$o);te(this,Jo,!1);te(this,Dn);te(this,Ko);te(this,$i,new Map);te(this,ri,new Map);te(this,Qo);te(this,Ai,null);te(this,Is,null);te(this,jo);te(this,Nn,c(()=>{let e=v(this,Is);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),Z(this,Is,null),document.removeEventListener("keydown",v(this,Nn),!0),e.open&&v(this,Dn).endTooltip(v(this,Dt)))},"#endHover"));te(this,ma,null);te(this,ga,!0);te(this,Ls,new Map);te(this,Ji,null);te(this,xa,new Map);te(this,Ds,new Map);te(this,ur,[]);te(this,_a,0);te(this,Ki,null);te(this,el,null);te(this,Qi,!0);te(this,hr);te(this,tl,c(()=>{},"#stopUnitSize"));te(this,va,!1);te(this,ya,!1);te(this,nl);te(this,ba);te(this,il,"");te(this,Ma,c(()=>H(this,ae,Wp).call(this),"#resizeHandler"));te(this,Sa,null);te(this,wa,!1);Z(this,Dt,e.mapCanvas),Z(this,Wo,e.coveredBy),Z(this,nl,e.art),Z(this,Ko,{cityName:e.cityName,unitStatus:e.unitStatus}),Z(this,hr,e.unitSize?.get()??1),Z(this,ba,e.art.id()),this.world=e.world,Z(this,tt,new cx(e.world)),Z(this,ur,e.world.tiles()),Z(this,_a,v(this,ur).length),Z(this,Zo,e.cameraDistance),Z(this,$o,e.lockVerticalEdges);let n=e.cameraDistance.get();Z(this,nt,H(this,ae,Go).call(this,{...Mg(v(this,tt).layout.centre(0,0)),...n===null?{}:{distance:n}})),Z(this,cr,v(this,nt).distance),this.portal=new om(e,{centre:c(()=>H(this,ae,Nx).call(this),"centre"),centreOn:c((s,r)=>H(this,ae,Ux).call(this,s,r),"centreOn"),changed:c(()=>H(this,ae,xn).call(this),"changed"),visible:c((s,r,a)=>H(this,ae,Px).call(this,s,r,a),"visible")}),Z(this,hn,t(e.mapCanvas,{period:v(this,tt).layout.period(),ground:v(this,tt).ground()})),e.minimapCanvas!==null&&Z(this,ma,new Ax(e.minimapCanvas,v(this,tt).layout,e.world,v(this,tt).extentV(),(s,r)=>H(this,ae,Vo).call(this,{...v(this,pt)?.to??v(this,nt),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(Z(this,lr,H(this,ae,kx).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),v(this,tt).queueAll(...H(this,ae,Zu).call(this)),H(this,ae,Ho).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),Z(this,Dn,e.squares),Z(this,jo,e.playerId),Z(this,Qo,e.transport),Z(this,fa,new Sx(e.mapCanvas,{orbit:c(()=>v(this,nt),"orbit"),lookHeight:c(()=>v(this,_n)??0,"lookHeight"),setOrbit:c(s=>this.setOrbit(s),"setOrbit")},{click:c((s,r)=>H(this,ae,Ix).call(this,s,r),"click"),menu:c((s,r,a,o,l)=>H(this,ae,Lx).call(this,s,r,a,o,l),"menu"),menuOnRightClick:c(()=>v(this,Dn).menuOnRightClick(),"menuOnRightClick"),menuOpen:c(()=>v(this,Dn).menuOpen(),"menuOpen"),hover:c(s=>H(this,ae,Dx).call(this,s),"hover")})),window.addEventListener("resize",v(this,Ma)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(Z(this,Sa,new ResizeObserver(v(this,Ma))),v(this,Sa).observe(e.mapCanvas.parentElement)),H(this,ae,Wp).call(this),H(this,ae,xn).call(this),Z(this,tl,e.unitSize?.onChange(()=>{let s=e.unitSize?.get()??1;s!==v(this,hr)&&!v(this,wa)&&(Z(this,hr,s),H(this,ae,Ho).call(this),H(this,ae,xn).call(this))})??(()=>{}))}land(){return v(this,tt)}orbit(){return v(this,nt)}moving(){return v(this,pt)!==null||v(this,fa).moving()}setOrbit(e){v(this,Nn).call(this),Z(this,pt,null),Z(this,nt,H(this,ae,Go).call(this,e)),H(this,ae,xn).call(this)}activeUnit(){return{unit:v(this,Ki),pendingTile:v(this,el)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=v(this,pt)?.to??v(this,nt);H(this,ae,Vo).call(this,{...t,yaw:t.yaw+e*Kf},H(this,ae,Bp).call(this)+e*Kf)}heading(){return{turn:(v(this,pt)?.to??v(this,nt)).yaw,directions:lm(v(this,tt).layout,this.world.topology())}}faceNorth(){H(this,ae,Vo).call(this,{...v(this,pt)?.to??v(this,nt),yaw:0},Cx(-v(this,nt).yaw))}debugViewModes(){return[]}dispose(){H(this,ae,Hp).call(this,!0),Z(this,wa,!0),v(this,tl).call(this),v(this,Nn).call(this),v(this,fa).dispose(),v(this,ma)?.dispose(),window.removeEventListener("resize",v(this,Ma)),v(this,Sa)?.disconnect(),v(this,Ji)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(v(this,Ji)),Z(this,Ji,null),v(this,lr)?.remove(),v(this,hn).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=v(this,Ai);e!==null&&(Z(this,Ai,null),v(this,Dt).classList.remove("picking-tile"),e.window?.close())}flush(){H(this,ae,kp).call(this),H(this,ae,xn).call(this)}mapEvent(e){if(e.kind==="moved"){H(this,ae,Rx).call(this,e.unit.id,e.from,e.to),H(this,ae,Yu).call(this,e.unit.id,e.from,e.to);return}H(this,ae,Yu).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),H(this,ae,Yu).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=v(this,Dt).getBoundingClientRect();Z(this,Xo,v(this,Wo).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};Z(this,Ai,s),v(this,Dt).classList.add("picking-tile"),s.window=v(this,Dn).prompt(n,()=>{v(this,Ai)===s&&(Z(this,Ai,null),v(this,Dt).classList.remove("picking-tile"))})}picking(){return v(this,Ai)!==null}queueTile(e){v(this,xa).set(`${e.x},${e.y}`,e)}redrawArt(){let e=v(this,nl).id();return e===v(this,ba)?"unchanged":(Z(this,ba,e),"redrawn")}releaseTiles(){v(this,xa).forEach((e,t)=>v(this,Ds).set(t,e)),v(this,xa).clear(),v(this,Ds).size>0&&H(this,ae,xn).call(this)}setActiveUnit(e,t){let n=v(this,Ki)?.tile;Z(this,Ki,e),Z(this,el,t??null),[n,e?.tile].forEach(s=>{s&&H(this,ae,da).call(this,s.x,s.y)}),H(this,ae,xn).call(this)}setWaiting(e){Z(this,ya,e),e&&v(this,Nn).call(this)}showActiveUnit(e){v(this,Qi)||(Z(this,Qi,!0),H(this,ae,Ho).call(this),H(this,ae,xn).call(this))}shown(){return{units:v(this,Qi),yields:v(this,va),waiting:v(this,ya)}}tilesPending(){return v(this,Ds).size}toggleUnits(){Z(this,Qi,!v(this,Qi)),H(this,ae,Ho).call(this),H(this,ae,xn).call(this)}toggleYields(){Z(this,va,!v(this,va))}zoomBy(e){v(this,Nn).call(this),Z(this,nt,ta(v(this,nt),e)),v(this,pt)!==null&&(v(this,pt).from=ta(v(this,pt).from,e),v(this,pt).to=ta(v(this,pt).to,e)),H(this,ae,xn).call(this)}};Dt=new WeakMap,Wo=new WeakMap,Xo=new WeakMap,tt=new WeakMap,hn=new WeakMap,lr=new WeakMap,qo=new WeakMap,Yo=new WeakMap,nt=new WeakMap,pt=new WeakMap,_n=new WeakMap,fa=new WeakMap,Zo=new WeakMap,cr=new WeakMap,Ps=new WeakMap,pa=new WeakMap,$o=new WeakMap,Jo=new WeakMap,Dn=new WeakMap,Ko=new WeakMap,$i=new WeakMap,ri=new WeakMap,Qo=new WeakMap,Ai=new WeakMap,Is=new WeakMap,jo=new WeakMap,Nn=new WeakMap,ma=new WeakMap,ga=new WeakMap,Ls=new WeakMap,Ji=new WeakMap,xa=new WeakMap,Ds=new WeakMap,ur=new WeakMap,_a=new WeakMap,Ki=new WeakMap,el=new WeakMap,Qi=new WeakMap,hr=new WeakMap,tl=new WeakMap,va=new WeakMap,ya=new WeakMap,nl=new WeakMap,ba=new WeakMap,il=new WeakMap,Ma=new WeakMap,Sa=new WeakMap,wa=new WeakMap,ae=new WeakSet,Bp=c(function(){let e=v(this,pt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),Rx=c(function(e,t,n){let s=performance.now(),r=v(this,ri).get(e);if(v(this,ri).forEach(({until:x},_)=>{x<s&&v(this,ri).delete(_)}),typeof requestAnimationFrame!="function"||ra())return;let[a,o]=v(this,tt).layout.centre(t.x,t.y),[l,u]=v(this,tt).layout.centre(n.x,n.y),{u:h,v:f}=v(this,tt).layout.period(),d=c((x,_)=>_===null?x:x-_*Math.round(x/_),"short"),[p,g,y]=(r!==void 0&&r.until>=s?r.from:null)??v(this,hn).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,v(this,tt).surfaceAt(a,o)),o];v(this,ri).set(e,{from:[l+d(p-l,h),g,u+d(y-u,f)],to:`${n.x},${n.y}`,until:s+2e3})},"#setOff"),Yu=c(function(e,t,n){let[s,r]=v(this,tt).layout.centre(t.x,t.y),[a,o]=v(this,tt).layout.centre(n.x,n.y),{u:l,v:u}=v(this,tt).layout.period(),h=c((p,g)=>g===null?p:p-g*Math.round(p/g),"short"),f=h(a-s,l),d=h(o-r,u);f===0&&d===0||(v(this,$i).delete(e),v(this,$i).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),v(this,$i).size>F1&&v(this,$i).delete(v(this,$i).keys().next().value),[t,n].forEach(({x:p,y:g})=>H(this,ae,da).call(this,p,g)),H(this,ae,xn).call(this))},"#face"),Px=c(function(e,t,n){let s=v(this,Dt).clientWidth,r=v(this,Dt).clientHeight;if(s<=0||r<=0)return!1;let a=v(this,pt)?.to??v(this,nt),[o,l]=v(this,tt).layout.centre(e,t),{u,v:h}=H(this,ae,Rs).call(this),[f,d]=a.focus,p=c((m,S,D)=>D===null?m:m+D*Math.round((S-m)/D),"nearest"),g=[p(o,f,u),Math.max(0,v(this,tt).heightAt(o,l)),p(l,d,h)],y=s/r,x=v(this,_n)??0,_=Qf(a,x,g,y),w=Qf(a,x,[g[0]+Math.cos(a.yaw),g[1],g[2]+Math.sin(a.yaw)],y);if(_===null||w===null)return!1;let P=(_[0]+1)/2*s,T=(1-_[1])/2*r,R=Math.abs(w[0]-_[0])*(s/2),E=(n+.5)*R;return P>=E&&P<=s-E&&T>=E&&T<=r-E&&!v(this,Xo).some(({left:m,top:S,right:D,bottom:I})=>P>=m-R/2&&P<=D+R/2&&T>=S-R/2&&T<=I+R/2)},"#visible"),ko=c(function(e,t){let n=v(this,Dt).clientWidth,s=v(this,Dt).clientHeight;if(n<=0||s<=0)return null;let r=Ex(v(this,nt),v(this,_n)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>v(this,tt).heightAt(f,d));if(r===null)return null;let[a,o]=v(this,tt).layout.tileAt(...r),l=this.world.width(),u=this.world.height();return!(H(this,ae,Rs).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%l+l)%l,(o%u+u)%u)},"#tileAt"),Ix=c(function(e,t){let n=H(this,ae,ko).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=v(this,Ai);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&v(this,Dn).click(this.portal,n)},"#clicked"),Lx=c(function(e,t,n,s,r){let a=v(this,Ki),o=H(this,ae,ko).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),v(this,Dn).menu(this.portal,n,s,a,o,v(this,Qo),r),!0)},"#menu"),Dx=c(function(e){let t=e===null||v(this,ya)||v(this,Dn).menuOpen()?null:H(this,ae,ko).call(this,e.x,e.y),n=v(this,Is);if(t===null||e===null){v(this,Nn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}v(this,Nn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,H(this,ae,zp).call(this,r)},k1),Z(this,Is,r),document.addEventListener("keydown",v(this,Nn),!0)},"#hovered"),zp=c(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===v(this,Dt),n=t?H(this,ae,ko).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){v(this,Nn).call(this);return}let s=v(this,Dn).tooltip(v(this,Dt),n,v(this,jo),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&v(this,Dn).endTooltip(v(this,Dt)),e.open=s},"#showHover"),Zu=c(function(){return[...v(this,nt).focus]},"#focus"),Nx=c(function(){let[e,t]=v(this,tt).layout.tileAt(...v(this,nt).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:H(this,ae,Rs).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),Ux=c(function(e,t){let[n,s]=v(this,tt).layout.centre(e,t),[r,a]=(v(this,pt)?.to??v(this,nt)).focus;if(n===r&&s===a)return;let o={...v(this,pt)?.to??v(this,nt),focus:[n,s]},{u:l,v:u}=H(this,ae,Rs).call(this),h=c((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[f,d]=v(this,nt).focus,p=Math.hypot(h(n-f,l),h(s-d,u));if(!v(this,Jo)||p>v(this,nt).distance*1.5){Z(this,Jo,!0),this.setOrbit(o);return}H(this,ae,Vo).call(this,o)},"#centreOn"),Go=c(function(e){return Eg(tr(e),H(this,ae,Rs).call(this),v(this,tt).extentV())},"#settle"),Rs=c(function(){let e=v(this,tt).layout.period();return this.portal?.lockVerticalEdges()??v(this,$o)?{u:e.u,v:null}:e},"#period"),Vo=c(function(e,t=H(this,ae,Bp).call(this)+Cx(e.yaw-(v(this,pt)?.to??v(this,nt)).yaw)){v(this,Nn).call(this),typeof requestAnimationFrame!="function"||ra()?(Z(this,pt,null),Z(this,nt,H(this,ae,Go).call(this,e))):Z(this,pt,{from:v(this,nt),to:e,started:null,turn:t,drawn:0}),H(this,ae,xn).call(this)},"#moveTo"),Fx=c(function(e){let t=v(this,pt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/O1);return t.drawn=n*n*(3-2*n),Z(this,nt,H(this,ae,Go).call(this,Tg(t.from,t.to,n,H(this,ae,Rs).call(this),t.turn))),n>=1&&Z(this,pt,null),n<1},"#moveCamera"),Ox=c(function(e){let[t,n]=v(this,nt).focus,s=Math.max(0,v(this,tt).heightAt(t,n));return!e||v(this,_n)===null||ra()?(Z(this,_n,s),!1):(Z(this,_n,v(this,_n)+(s-v(this,_n))*z1),Math.abs(s-v(this,_n))<.002?(Z(this,_n,s),!1):!0)},"#followHeight"),kp=c(function(){let e=[...v(this,Ds).values()].map(({x:r,y:a})=>[r,a]),t=this.world.tiles(),n=t!==v(this,ur)||t.length!==v(this,_a);Z(this,ur,t),Z(this,_a,t.length),v(this,Ds).clear(),v(this,tt).changed(e,...H(this,ae,Zu).call(this),n),e.forEach(([r,a])=>H(this,ae,da).call(this,r,a));let s=v(this,Is);s!==null&&s.open&&e.some(([r,a])=>r===s.x&&a===s.y)&&H(this,ae,zp).call(this,s),(e.length>0||n)&&Z(this,ga,!0),n&&v(this,Ls).forEach((r,a)=>{let[o,l]=a.split(",").map(Number);H(this,ae,da).call(this,o,l)})},"#takeTiles"),da=c(function(e,t){let n=`${e},${t}`,s=wx(this.world.get(e,t),v(this,Ki)?.id??null,v(this,Qi),v(this,Ko),d=>v(this,$i).get(d.id)??0,v(this,hr)),[r,a]=v(this,tt).layout.centre(e,t),o=[r,Math.max(0,v(this,tt).surfaceAt(r,a)),a],l=s===null?null:JSON.stringify([s,o]),u=l!==(v(this,Ls).get(n)??null);if(u&&v(this,hn).setMarker(n,o,s),v(this,ri).size===0){u&&H(this,ae,Gp).call(this,n,l);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));v(this,ri).forEach((d,p)=>{if(d.until<h){v(this,ri).delete(p);return}d.to!==n||!f.has(p)||(v(this,ri).delete(p),u&&s?.unit?.id===p&&v(this,hn).slideMarker(n,d.from))}),u&&H(this,ae,Gp).call(this,n,l)},"#mark"),Gp=c(function(e,t){t===null?v(this,Ls).delete(e):v(this,Ls).set(e,t)},"#remember"),Ho=c(function(){let e=new Set(v(this,Ls).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);H(this,ae,da).call(this,n,s)})},"#markAll"),Vp=c(function(e){let t=performance.now(),n=H(this,ae,Fx).call(this,t),[s,r]=H(this,ae,Zu).call(this);H(this,ae,kp).call(this),`${s},${r}`!==v(this,Yo)&&(Z(this,Yo,`${s},${r}`),v(this,tt).refocus(s,r)),v(this,tt).build(v(this,hn),e);let a=H(this,ae,Ox).call(this,e!==null);v(this,hn).view(v(this,nt),v(this,_n)??0,H(this,ae,Rs).call(this)),v(this,hn).render(),H(this,ae,Bx).call(this),H(this,ae,Hp).call(this),Z(this,qo,performance.now()-t),H(this,ae,Gx).call(this),(v(this,tt).pending()>0||v(this,tt).overlaysPending()>0||v(this,hn).sliding()||n||a)&&H(this,ae,xn).call(this)},"#frameDrawn"),Bx=c(function(){let e=v(this,ma);if(e===null)return;v(this,ga)&&(Z(this,ga,!1),e.redraw());let t=v(this,Ki)?.tile??null;e.show(H(this,ae,zx).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),zx=c(function(){let e=v(this,Dt).clientWidth,t=v(this,Dt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=v(this,_n)??0,r=Cu(v(this,nt).distance).far,[a,o]=v(this,nt).focus,l=c((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=ea(v(this,nt),s,[h,d],n);if(p!==null){let g=Math.hypot(p[0]-a,p[1]-o),y=g>r?r/g:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),Hp=c(function(e=!1){let t=(e?v(this,pt)?.to??v(this,nt):v(this,nt)).distance,n=c(()=>{v(this,Ps)!==null&&clearTimeout(v(this,Ps)),Z(this,Ps,null),Z(this,pa,null)},"stop"),s=c(()=>{n(),Z(this,cr,t),v(this,Zo).set(t)},"keep");if(e){n(),t!==v(this,cr)&&s();return}if(v(this,pt)!==null||t===v(this,cr)){n();return}v(this,Ps)!==null&&t===v(this,pa)||(n(),Z(this,pa,t),Z(this,Ps,setTimeout(s,B1)))},"#keepDistance"),xn=c(function(){if(!v(this,wa)){if(typeof requestAnimationFrame!="function"){H(this,ae,Vp).call(this,null);return}v(this,Ji)===null&&Z(this,Ji,requestAnimationFrame(()=>{Z(this,Ji,null),H(this,ae,Vp).call(this,U1)}))}},"#draw"),kx=c(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),Gx=c(function(){if(v(this,lr)===null)return;let{drawCalls:e,triangles:t,geometries:n}=v(this,hn).stats();v(this,lr).textContent=[`frame ${v(this,qo).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${v(this,tt).pending()}`].join(`
`)},"#showStats"),Wp=c(function(){let e=v(this,Dt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===v(this,il)||(Z(this,il,r),v(this,hn).resize(t,n,s),this.measureCovered(),v(this,hn).render())},"#resize"),c(Xp,"MapView3D");var Op=Xp,Vx=Op;var G1={createMapView3D:c(i=>new Vx(i),"createMapView3D")};globalThis[sm]=G1;})();
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
