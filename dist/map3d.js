"use strict";(()=>{var Gx=Object.create;var qu=Object.defineProperty;var Vx=Object.getOwnPropertyDescriptor;var Hx=Object.getOwnPropertyNames;var Wx=Object.getPrototypeOf,Xx=Object.prototype.hasOwnProperty;var Kp=i=>{throw TypeError(i)};var l=(i,e)=>qu(i,"name",{value:e,configurable:!0});var qx=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Yx=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Hx(e))!Xx.call(i,s)&&s!==t&&qu(i,s,{get:()=>e[s],enumerable:!(n=Vx(e,s))||n.enumerable});return i};var Zx=(i,e,t)=>(t=i!=null?Gx(Wx(i)):{},Yx(e||!i||!i.__esModule?qu(t,"default",{value:i,enumerable:!0}):t,i));var Yu=(i,e,t)=>e.has(i)||Kp("Cannot "+t);var v=(i,e,t)=>(Yu(i,e,"read from private field"),t?t.call(i):e.get(i)),ie=(i,e,t)=>e.has(i)?Kp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Z=(i,e,t,n)=>(Yu(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),H=(i,e,t)=>(Yu(i,e,"access private method"),t);var jp=qx(Us=>{"use strict";var oi,ji=Us&&Us.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Us,"__esModule",{value:!0}),Us.EventEmitter=void 0;var Zu=class Zu{constructor(){oi.set(this,{})}on(e,t){e in ji(this,oi,"f")||(ji(this,oi,"f")[e]=[]),ji(this,oi,"f")[e].push(t)}once(e,t){let n=l((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in ji(this,oi,"f")))return;let n=ji(this,oi,"f")[e].indexOf(t);n!==-1&&ji(this,oi,"f")[e].splice(n,1)}emit(e,...t){e in ji(this,oi,"f")&&ji(this,oi,"f")[e].forEach((n=>n(...t)))}};l(Zu,"i");var el=Zu;Us.EventEmitter=el,oi=new WeakMap,Us.default=el});var Qp="civMap3D";var em=Zx(jp());var es,li,ur,Ju=class Ju extends em.EventEmitter{constructor(t,n){super();ie(this,es);ie(this,li);ie(this,ur);Z(this,li,t),Z(this,ur,t.lockVerticalEdges),Z(this,es,n)}center(){return v(this,es).centre()}isVisible(t,n,s=0){return v(this,es).visible(t,n,s)}lockVerticalEdges(){return v(this,ur)}nativeTileSize(){return v(this,li).art.nativeTileSize()}openCity(t){let{cityOpener:n}=v(this,li);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return v(this,li).playerId}render(){v(this,es).changed()}scale(){return v(this,li).art.scale()}setCenter(t,n){v(this,es).centreOn(t,n)}setLockVerticalEdges(t){Z(this,ur,t)}setZoom(){}transport(){return v(this,li).transport}zoom(){return v(this,li).art.zoom()}};es=new WeakMap,li=new WeakMap,ur=new WeakMap,l(Ju,"MapPortal3D");var $u=Ju,tm=$u;var Cm=0,Ah=1,Rm=2;var Ka=1,vc=2,Gr=3,gs=0,ln=1,di=2,Vs=0,Vr=1,Ch=2,Rh=3,Ph=4,Pm=5;var Hs=100,Im=101,Lm=102,Dm=103,Nm=104,Um=200,Fm=201,Om=202,Bm=203,Ih=204,Lh=205,zm=206,km=207,Gm=208,Vm=209,Hm=210,Wm=211,Xm=212,qm=213,Ym=214,Tl=0,Al=1,Cl=2,Ir=3,Rl=4,Pl=5,Il=6,Ll=7,Dh=0,Zm=1,$m=2,fi=0,Nh=1,Uh=2,Fh=3,Qa=4,Oh=5,Bh=6,zh=7;var kh=300,Ws=301,Hr=302,yc=303,bc=304,ks=1e3,kn=1001,Dl=1002,zt=1003,Jm=1004;var ja=1005;var kt=1006,Mc=1007;var zi=1008;var pn=1009,Gh=1010,Vh=1011,Wr=1012,Sc=1013,jn=1014,ei=1015,En=1016,wc=1017,Ec=1018,Xs=1020,Hh=35902,Wh=35899,Xh=1021,qh=1022,ti=1023,Ui=1026,ki=1027,Yh=1028,Tc=1029,pi=1030,Ac=1031;var Cc=1033,eo=33776,to=33777,no=33778,io=33779,Rc=35840,Pc=35841,Ic=35842,Lc=35843,Dc=36196,Nc=37492,Uc=37496,Fc=37488,Oc=37489,so=37490,Bc=37491,zc=37808,kc=37809,Gc=37810,Vc=37811,Hc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,Zc=37817,$c=37818,Jc=37819,Kc=37820,Qc=37821,jc=36492,eu=36494,tu=36495,nu=36283,iu=36284,ro=36285,su=36286;var Ra=2300,Nl=2301,wl=2302,yh=2303,bh=2400,Mh=2401,Sh=2402;var Km=3200;var ru=0,Qm=1,Gi="",Bt="srgb",Pa="srgb-linear",Ia="linear",at="srgb";var El=7680;var jm=519,e0=512,t0=513,n0=514,Zh=515,i0=516,s0=517,$h=518,Jh=519,Kh=35044;var Qh="300 es",Gn=2e3,Lr=2001;function $x(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l($x,"arrayNeedsUint32");function Jx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(Jx,"isTypedArray");function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(La,"createElementNS");function r0(){let i=La("canvas");return i.style.display="block",i}l(r0,"createCanvasElement");var nm={},Dr=null;function Da(...i){let e="THREE."+i.shift();Dr?Dr("log",e,...i):console.log(e,...i)}l(Da,"log");function a0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(a0,"enhanceLogMessage");function Be(...i){i=a0(i);let e="THREE."+i.shift();if(Dr)Dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Be,"warn");function Ge(...i){i=a0(i);let e="THREE."+i.shift();if(Dr)Dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(Ge,"error");function Aa(...i){let e=i.join(" ");e in nm||(nm[e]=!0,Be(...i))}l(Aa,"warnOnce");function o0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}l(r,"probe"),setTimeout(r,t)})}l(o0,"probeAsync");var l0={[Tl]:Tl,[Cl]:Il,[Rl]:Rl,[Ir]:Pl,[Al]:Al,[Il]:Cl,[Ll]:Ll,[Pl]:Ir},id=class id{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};l(id,"EventDispatcher");var ui=id,$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ku=Math.PI/180,Ul=180/Math.PI;function qs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}l(qs,"generateUUID");function et(i,e,t){return Math.max(e,Math.min(t,i))}l(et,"clamp");function Kx(i,e){return(i%e+e)%e}l(Kx,"euclideanModulo");function Qu(i,e,t){return(1-t)*i+t*e}l(Qu,"lerp");function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(c0,"floorPowerOfTwo");function au(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(au,"getNormalizationScale");function u0(i,e){if(e.constructor===Float32Array)return i;let t=au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(u0,"denormalize");function h0(i,e){if(e.constructor===Float32Array)return i;let t=au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(h0,"normalize");var ic=class ic{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(ic,"Vector2"),ic.prototype.isVector2=!0;var ke=ic,sd=class sd{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||c!==d||u!==p||h!==_){let g=c*d+u*p+h*_+f*y;g<0&&(d=-d,p=-p,_=-_,y=-y,g=-g);let x=1-o;if(g<.9995){let w=Math.acos(g),R=Math.sin(w);x=Math.sin(x*w)/R,o=Math.sin(o*w)/R,c=c*x+d*o,u=u*x+p*o,h=h*x+_*o,f=f*x+y*o}else{c=c*x+d*o,u=u*x+p*o,h=h*x+_*o,f=f*x+y*o;let w=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=w,u*=w,h*=w,f*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*f+c*p-u*d,e[t+1]=c*_+h*d+u*f-o*p,e[t+2]=u*_+h*p+o*d-c*f,e[t+3]=h*_-o*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"YZX":this._x=d*h*f+u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f-d*p*_;break;case"XZY":this._x=d*h*f-u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f+d*p*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(sd,"Quaternion");var an=sd,sc=class sc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(im.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-r*f,this.z=s+c*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(sc,"Vector3"),sc.prototype.isVector3=!0;var G=sc,ju=new G,im=new an,rc=class rc{constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],_=n[8],y=s[0],g=s[3],x=s[6],w=s[1],R=s[4],T=s[7],P=s[2],E=s[5],m=s[8];return r[0]=a*y+o*w+c*P,r[3]=a*g+o*R+c*E,r[6]=a*x+o*T+c*m,r[1]=u*y+h*w+f*P,r[4]=u*g+h*R+f*E,r[7]=u*x+h*T+f*m,r[2]=d*y+p*w+_*P,r[5]=d*g+p*R+_*E,r[8]=d*x+p*T+_*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*r,p=u*r-a*c,_=t*f+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(s*u-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(e,t)),this}rotate(e){return Aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return Aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(rc,"Matrix3"),rc.prototype.isMatrix3=!0;var Ve=rc,eh=new Ve,sm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){let i={enabled:!0,workingColorSpace:Pa,spaces:{},convert:l(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Pr(s.r),s.g=Pr(s.g),s.b=Pr(s.b))),s},"convert"),workingToColorSpace:l(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:l(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:l(function(s){return s===Gi?Ia:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:l(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:l(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pa]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}l(Qx,"createColorManagement");var je=Qx();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(Ni,"SRGBToLinear");function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Pr,"LinearToSRGB");var hr,rd=class rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=La("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(rd,"ImageUtils");var Fl=rd,jx=0,ad=class ad{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(th(s[a].image)):r.push(th(s[a]))}else r=th(s);n.url=r}return t||(e.images[this.uuid]=n),n}};l(ad,"TextureSource");var Nr=ad;function th(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}l(th,"serializeImage");var e_=0,nh=new G,Cr=class Cr extends ui{constructor(e=Cr.DEFAULT_IMAGE,t=Cr.DEFAULT_MAPPING,n=kn,s=kn,r=kt,a=zi,o=ti,c=pn,u=Cr.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=qs(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Cr,"Texture");var on=Cr;on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=kh;on.DEFAULT_ANISOTROPY=1;var ac=class ac{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],_=c[9],y=c[2],g=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(u+1)/2,T=(p+1)/2,P=(x+1)/2,E=(h+d)/4,m=(f+y)/4,S=(_+g)/4;return R>T&&R>P?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=E/n,r=m/n):T>P?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=E/s,r=S/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=m/r,s=S/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(f-y)/w,this.z=(d-h)/w,this.w=Math.acos((u+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(ac,"Vector4"),ac.prototype.isVector4=!0;var xt=ac,od=class od extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new on({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(od,"RenderTarget");var Ol=od,ld=class ld extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(ld,"WebGLRenderTarget");var bn=ld,cd=class cd extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(cd,"DataArrayTexture");var Na=cd;var ud=class ud extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(ud,"Data3DTexture");var Bl=ud;var Ca=class Ca{constructor(e,t,n,s,r,a,o,c,u,h,f,d,p,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,f,d,p,_,y,g)}set(e,t,n,s,r,a,o,c,u,h,f,d,p,_,y,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=c,x[2]=u,x[6]=h,x[10]=f,x[14]=d,x[3]=p,x[7]=_,x[11]=y,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),a=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,_=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+_*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=_+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,_=u*h,y=u*f;t[0]=d+y*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,_=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,_=o*h,y=o*f;t[0]=c*h,t[4]=_*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-_,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,_=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+_,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,_=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ts.crossVectors(n,vn),ts.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ts.crossVectors(n,vn)),ts.normalize(),tl.crossVectors(vn,ts),s[0]=ts.x,s[4]=tl.x,s[8]=vn.x,s[1]=ts.y,s[5]=tl.y,s[9]=vn.y,s[2]=ts.z,s[6]=tl.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],_=n[2],y=n[6],g=n[10],x=n[14],w=n[3],R=n[7],T=n[11],P=n[15],E=s[0],m=s[4],S=s[8],D=s[12],I=s[1],N=s[5],O=s[9],V=s[13],C=s[2],B=s[6],k=s[10],z=s[14],j=s[3],X=s[7],Q=s[11],se=s[15];return r[0]=a*E+o*I+c*C+u*j,r[4]=a*m+o*N+c*B+u*X,r[8]=a*S+o*O+c*k+u*Q,r[12]=a*D+o*V+c*z+u*se,r[1]=h*E+f*I+d*C+p*j,r[5]=h*m+f*N+d*B+p*X,r[9]=h*S+f*O+d*k+p*Q,r[13]=h*D+f*V+d*z+p*se,r[2]=_*E+y*I+g*C+x*j,r[6]=_*m+y*N+g*B+x*X,r[10]=_*S+y*O+g*k+x*Q,r[14]=_*D+y*V+g*z+x*se,r[3]=w*E+R*I+T*C+P*j,r[7]=w*m+R*N+T*B+P*X,r[11]=w*S+R*O+T*k+P*Q,r[15]=w*D+R*V+T*z+P*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],g=e[11],x=e[15],w=c*p-u*d,R=o*p-u*f,T=o*d-c*f,P=a*p-u*h,E=a*d-c*h,m=a*f-o*h;return t*(y*w-g*R+x*T)-n*(_*w-g*P+x*E)+s*(_*R-y*P+x*m)-r*(_*T-y*E+g*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],g=e[14],x=e[15],w=t*o-n*a,R=t*c-s*a,T=t*u-r*a,P=n*c-s*o,E=n*u-r*o,m=s*u-r*c,S=h*y-f*_,D=h*g-d*_,I=h*x-p*_,N=f*g-d*y,O=f*x-p*y,V=d*x-p*g,C=w*V-R*O+T*N+P*I-E*D+m*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(o*V-c*O+u*N)*B,e[1]=(s*O-n*V-r*N)*B,e[2]=(y*m-g*E+x*P)*B,e[3]=(d*E-f*m-p*P)*B,e[4]=(c*I-a*V-u*D)*B,e[5]=(t*V-s*I+r*D)*B,e[6]=(g*T-_*m-x*R)*B,e[7]=(h*m-d*T+p*R)*B,e[8]=(a*O-o*I+u*S)*B,e[9]=(n*I-t*O-r*S)*B,e[10]=(_*E-y*T+x*w)*B,e[11]=(f*T-h*E-p*w)*B,e[12]=(o*D-a*N-c*S)*B,e[13]=(t*N-n*D+s*S)*B,e[14]=(y*R-_*P-g*w)*B,e[15]=(h*P-f*R+d*w)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,f=o+o,d=r*u,p=r*h,_=r*f,y=a*h,g=a*f,x=o*f,w=c*u,R=c*h,T=c*f,P=n.x,E=n.y,m=n.z;return s[0]=(1-(y+x))*P,s[1]=(p+T)*P,s[2]=(_-R)*P,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(d+x))*E,s[6]=(g+w)*E,s[7]=0,s[8]=(_+R)*m,s[9]=(g-w)*m,s[10]=(1-(d+y))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),c=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let u=1/a,h=1/o,f=1/c;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Gn,c=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),_,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(o===Gn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Lr)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),_,y;if(c)_=1/(a-r),y=a/(a-r);else if(o===Gn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Lr)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(Ca,"Matrix4"),Ca.prototype.isMatrix4=!0;var lt=Ca,dr=new G,Zn=new lt,t_=new G(0,0,0),n_=new G(1,1,1),ts=new G,tl=new G,vn=new G,am=new lt,om=new an,oc=class oc{constructor(e=0,t=0,n=0,s=oc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(oc,"Euler");var Mn=oc;Mn.DEFAULT_ORDER="XYZ";var hd=class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(hd,"Layers");var Ua=hd,i_=0,lm=new G,fr=new an,Ai=new lt,nl=new G,ya=new G,s_=new G,r_=new an,cm=new G(1,0,0),um=new G(0,1,0),hm=new G(0,0,1),dm={type:"added"},a_={type:"removed"},pr={type:"childadded",child:null},ih={type:"childremoved",child:null},Rr=class Rr extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rr.DEFAULT_UP.clone();let e=new G,t=new Mn,n=new an,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}l(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ve}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Rr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,t){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nl.copy(e):nl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ya,nl,this.up):Ai.lookAt(nl,ya,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(Ai),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dm),pr.child=e,this.dispatchEvent(pr),pr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a_),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dm),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,s_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,r_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Rr,"Object3D");var Wt=Rr;Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dd=class dd extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(dd,"Group");var fn=dd,o_={type:"move"},fd=class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),x=this._getHandJoint(u,y);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(fd,"WebXRController");var Ur=fd,d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},il={h:0,s:0,l:0};function sh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(sh,"hue2rgb");var pd=class pd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Kx(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sh(a,r,e+1/3),this.g=sh(a,r,e),this.b=sh(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=d0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return je.workingToColorSpace(Jt.copy(this),e),Math.round(et(Jt.r*255,0,255))*65536+Math.round(et(Jt.g*255,0,255))*256+Math.round(et(Jt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Bt){je.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(il);let n=Qu(ns.h,il.h,t),s=Qu(ns.s,il.s,t),r=Qu(ns.l,il.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l(pd,"Color");var Ue=pd,Jt=new Ue;Ue.NAMES=d0;var lc=class lc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(lc,"Fog");var Fa=lc,md=class md extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(md,"Scene");var Oa=md,$n=new G,Ci=new G,rh=new G,Ri=new G,mr=new G,gr=new G,fm=new G,ah=new G,oh=new G,lh=new G,ch=new xt,uh=new xt,hh=new xt,as=class as{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ci.subVectors(n,t),rh.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ci),c=$n.dot(rh),u=Ci.dot(Ci),h=Ci.dot(rh),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(u*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(o,Ri.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ch.setScalar(0),uh.setScalar(0),hh.setScalar(0),ch.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,n),hh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ch,r.x),a.addScaledVector(uh,r.y),a.addScaledVector(hh,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ci.subVectors(e,t),$n.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),$n.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return as.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return as.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return as.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return as.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return as.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;mr.subVectors(s,n),gr.subVectors(r,n),ah.subVectors(e,n);let c=mr.dot(ah),u=gr.dot(ah);if(c<=0&&u<=0)return t.copy(n);oh.subVectors(e,s);let h=mr.dot(oh),f=gr.dot(oh);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(mr,a);lh.subVectors(e,r);let p=mr.dot(lh),_=gr.dot(lh);if(_>=0&&p<=_)return t.copy(r);let y=p*u-c*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(n).addScaledVector(gr,o);let g=h*_-p*f;if(g<=0&&f-h>=0&&p-_>=0)return fm.subVectors(r,s),o=(f-h)/(f-h+(p-_)),t.copy(s).addScaledVector(fm,o);let x=1/(g+y+d);return a=y*x,o=d*x,t.copy(n).addScaledVector(mr,a).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(as,"Triangle");var Li=as,gd=class gd{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),rl.subVectors(this.max,ba),xr.subVectors(e.a,ba),_r.subVectors(e.b,ba),vr.subVectors(e.c,ba),is.subVectors(_r,xr),ss.subVectors(vr,_r),Fs.subVectors(xr,vr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Fs.z,Fs.y,is.z,0,-is.x,ss.z,0,-ss.x,Fs.z,0,-Fs.x,-is.y,is.x,0,-ss.y,ss.x,0,-Fs.y,Fs.x,0];return!dh(t,xr,_r,vr,rl)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,xr,_r,vr,rl))?!1:(al.crossVectors(is,ss),t=[al.x,al.y,al.z],dh(t,xr,_r,vr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(gd,"Box3");var ls=gd,Pi=[new G,new G,new G,new G,new G,new G,new G,new G],Jn=new G,sl=new ls,xr=new G,_r=new G,vr=new G,is=new G,ss=new G,Fs=new G,ba=new G,rl=new G,al=new G,Os=new G;function dh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Os.fromArray(i,r);let o=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),c=e.dot(Os),u=t.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(dh,"satForAxes");var Di=l_();function l_(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,s[c]=-u-1,s[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,s[c]=13,s[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[c]=u|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}l(l_,"_generateTables");function c_(i){Math.abs(i)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),i=et(i,-65504,65504),Di.floatView[0]=i;let e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}l(c_,"toHalfFloat");function u_(i){let e=i>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(i&1023)]+Di.exponentTable[e],Di.floatView[0]}l(u_,"fromHalfFloat");var xd=class xd{static toHalfFloat(e){return c_(e)}static fromHalfFloat(e){return u_(e)}};l(xd,"DataUtils");var hi=xd,Tt=new G,ol=new ke,h_=0,_d=class _d extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=ei,this.version=0,this._normalizationScale=e!==void 0?au(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):u0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):h0(e,this.array)}};l(_d,"BufferAttribute");var Mt=_d;var vd=class vd extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(vd,"Uint16BufferAttribute");var Ba=vd;var yd=class yd extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(yd,"Uint32BufferAttribute");var za=yd;var bd=class bd extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(bd,"Float32BufferAttribute");var wt=bd,d_=new ls,Ma=new G,fh=new G,Md=class Md{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):d_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(fh)),this.expandByPoint(Ma.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(Md,"Sphere");var Fr=Md,f_=0,zn=new lt,ph=new Wt,yr=new G,yn=new ls,Sa=new ls,Ot=new G,cc=class cc extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($x(e)?za:Ba)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(yn.min,Sa.min),yn.expandByPoint(Ot),Ot.addVectors(yn.max,Sa.max),yn.expandByPoint(Ot)):(yn.expandByPoint(Sa.min),yn.expandByPoint(Sa.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ot.fromBufferAttribute(o,u),c&&(yr.fromBufferAttribute(e,u),Ot.add(yr)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new G,c[D]=new G;let h=new G,f=new G,d=new G,p=new ke,_=new ke,y=new ke,g=new G,x=new G;function w(D,I,N){u[D]=u[I]=u[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,N),p.fromBufferAttribute(r,D),_.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),f.sub(h),d.sub(h),_.sub(p),y.sub(p);let O=1/(_.x*y.y-y.x*_.y);isFinite(O)&&(g.copy(f).multiplyScalar(y.y).addScaledVector(d,-_.y).multiplyScalar(O),x.copy(d).multiplyScalar(_.x).addScaledVector(f,-y.x).multiplyScalar(O),o[D].add(g),o[I].add(g),o[N].add(g),c[D].add(x),c[I].add(x),c[N].add(x))}l(w,"handleTriangle");let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,I=R.length;D<I;++D){let N=R[D],O=N.start,V=N.count;for(let C=O,B=O+V;C<B;C+=3)w(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let T=new G,P=new G,E=new G,m=new G;function S(D){E.fromBufferAttribute(s,D),m.copy(E);let I=o[D];T.copy(I),T.sub(E.multiplyScalar(E.dot(I))).normalize(),P.crossVectors(m,I);let O=P.dot(c[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,O)}l(S,"handleVertex");for(let D=0,I=n.count;D<I;++D)u[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,u=new G,h=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,g),o.add(h),c.add(h),u.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),p=0,_=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let x=0;x<h;x++)d[_++]=u[p++]}return new Mt(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new cc,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],u=e(c,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let c=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(cc,"BufferGeometry");var Pt=cc,Sd=class Sd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=qs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pm(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(Sd,"InterleavedBuffer");var ka=Sd;function pm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=qs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(pm,"getArrayKey");var sn=new G,uc=class uc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?au(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):u0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):h0(e,this.data.array)}};l(uc,"InterleavedBufferAttribute");var Or=uc,mh=new G,p_=new G,m_=new Ve,wd=class wd{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mh.subVectors(n,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m_.getNormalMatrix(e),s=this.coplanarPoint(mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(wd,"Plane");var dn=wd,g_=0,Ed=class Ed extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Vr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Lh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(l(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(Ed,"Material");var Fi=Ed,Td=class Td extends Fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(Td,"SpriteMaterial");var cs=Td,br,wa=new G,Mr=new G,Sr=new G,wr=new ke,Ea=new ke,f0=new lt,ll=new G,Ta=new G,cl=new G,mm=new ke,gh=new ke,gm=new ke,Ad=class Ad extends Wt{constructor(e=new cs){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ka(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Or(n,3,0,!1)),br.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),f0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ul(ll.set(-.5,-.5,0),Sr,a,Mr,s,r),ul(Ta.set(.5,-.5,0),Sr,a,Mr,s,r),ul(cl.set(.5,.5,0),Sr,a,Mr,s,r),mm.set(0,0),gh.set(1,0),gm.set(1,1);let o=e.ray.intersectTriangle(ll,Ta,cl,!1,wa);if(o===null&&(ul(Ta.set(-.5,.5,0),Sr,a,Mr,s,r),gh.set(0,1),o=e.ray.intersectTriangle(ll,cl,Ta,!1,wa),o===null))return;let c=e.ray.origin.distanceTo(wa);c<e.near||c>e.far||t.push({distance:c,point:wa.clone(),uv:Li.getInterpolation(wa,ll,Ta,cl,mm,gh,gm,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(Ad,"Sprite");var Ga=Ad;function ul(i,e,t,n,s,r){wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ea.x=r*wr.x-s*wr.y,Ea.y=s*wr.x+r*wr.y):Ea.copy(wr),i.copy(e),i.x+=Ea.x,i.y+=Ea.y,i.applyMatrix4(f0)}l(ul,"transformVertex");var Ii=new G,xh=new G,hl=new G,dl=new G,Cd=class Cd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xh.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),dl.copy(this.origin).sub(xh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(hl),o=dl.dot(this.direction),c=-dl.dot(hl),u=dl.lengthSq(),h=Math.abs(1-a*a),f,d,p,_;if(h>0)if(f=a*c-o,d=a*o-c,_=r*h,f>=0)if(d>=-_)if(d<=_){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(xh).addScaledVector(hl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,_=t.x-a.x,y=t.y-a.y,g=t.z-a.z,x=n.x-a.x,w=n.y-a.y,R=n.z-a.z,T=Math.abs(c),P=Math.abs(u),E=Math.abs(h),m,S,D,I,N,O,V,C,B,k,z,j;if(T>=P&&T>=E?(D=c,O=f,B=_,j=x,c>=0?(m=u,S=h,I=d,N=p,V=y,C=g,k=w,z=R):(m=h,S=u,I=p,N=d,V=g,C=y,k=R,z=w)):P>=E?(D=u,O=d,B=y,j=w,u>=0?(m=h,S=c,I=p,N=f,V=g,C=_,k=R,z=x):(m=c,S=h,I=f,N=p,V=_,C=g,k=x,z=R)):(D=h,O=p,B=g,j=R,h>=0?(m=c,S=u,I=f,N=d,V=_,C=y,k=x,z=w):(m=u,S=c,I=d,N=f,V=y,C=_,k=w,z=x)),D===0)return null;let X=m/D,Q=S/D,se=1/D,Se=I-X*O,Le=N-Q*O,J=V-X*B,ue=C-Q*B,Te=k-X*j,De=z-Q*j,_e=Te*ue-De*J,ze=Se*De-Le*Te,Je=J*Le-ue*Se;if(s){if(_e<0||ze<0||Je<0)return null}else if((_e<0||ze<0||Je<0)&&(_e>0||ze>0||Je>0))return null;let Ie=_e+ze+Je;if(Ie===0)return null;let $e=se*(_e*O+ze*B+Je*j);return(Ie>0?$e<0:$e>0)?null:this.at($e/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(Cd,"Ray");var zl=Cd,Rd=class Rd extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(Rd,"MeshBasicMaterial");var kl=Rd,xm=new lt,Bs=new zl,fl=new Fr,_m=new G,pl=new G,ml=new G,gl=new G,_h=new G,xl=new G,vm=new G,_l=new G,Pd=class Pd extends Wt{constructor(e=new Pt,t=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){xl.set(0,0,0);for(let c=0,u=r.length;c<u;c++){let h=o[c],f=r[c];h!==0&&(_h.fromBufferAttribute(f,e),a?xl.addScaledVector(_h,h):xl.addScaledVector(_h.sub(t),h))}t.add(xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(fl.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(fl,_m)===null||Bs.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(xm.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(xm),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){let g=d[_],x=a[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let T=w,P=R;T<P;T+=3){let E=o.getX(T),m=o.getX(T+1),S=o.getX(T+2);s=vl(this,x,e,n,u,h,f,E,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=_,x=y;g<x;g+=3){let w=o.getX(g),R=o.getX(g+1),T=o.getX(g+2);s=vl(this,a,e,n,u,h,f,w,R,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){let g=d[_],x=a[g.materialIndex],w=Math.max(g.start,p.start),R=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let T=w,P=R;T<P;T+=3){let E=T,m=T+1,S=T+2;s=vl(this,x,e,n,u,h,f,E,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=_,x=y;g<x;g+=3){let w=g,R=g+1,T=g+2;s=vl(this,a,e,n,u,h,f,w,R,T),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};l(Pd,"Mesh");var ft=Pd;function x_(i,e,t,n,s,r,a,o){let c;if(e.side===ln?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===gs,o),c===null)return null;_l.copy(o),_l.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(_l);return u<t.near||u>t.far?null:{distance:u,point:_l.clone(),object:i}}l(x_,"checkIntersection$1");function vl(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,pl),i.getVertexPosition(c,ml),i.getVertexPosition(u,gl);let h=x_(i,e,t,n,pl,ml,gl,vm);if(h){let f=new G;Li.getBarycoord(vm,pl,ml,gl,f),s&&(h.uv=Li.getInterpolatedAttribute(s,o,c,u,f,new ke)),r&&(h.uv1=Li.getInterpolatedAttribute(r,o,c,u,f,new ke)),a&&(h.normal=Li.getInterpolatedAttribute(a,o,c,u,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new G,materialIndex:0};Li.getNormal(pl,ml,gl,d.normal),h.face=d,h.barycoord=f}return h}l(vl,"checkGeometryIntersection");var Id=class Id extends on{constructor(e=null,t=1,n=1,s,r,a,o,c,u=zt,h=zt,f,d){super(null,a,o,c,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(Id,"DataTexture");var Br=Id;var zs=new Fr,__=new ke(.5,.5),yl=new G,Ld=class Ld{constructor(e=new dn,t=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],f=r[5],d=r[6],p=r[7],_=r[8],y=r[9],g=r[10],x=r[11],w=r[12],R=r[13],T=r[14],P=r[15];if(s[0].setComponents(u-a,p-h,x-_,P-w).normalize(),s[1].setComponents(u+a,p+h,x+_,P+w).normalize(),s[2].setComponents(u+o,p+f,x+y,P+R).normalize(),s[3].setComponents(u-o,p-f,x-y,P-R).normalize(),n)s[4].setComponents(c,d,g,T).normalize(),s[5].setComponents(u-c,p-d,x-g,P-T).normalize();else if(s[4].setComponents(u-c,p-d,x-g,P-T).normalize(),t===Gn)s[5].setComponents(u+c,p+d,x+g,P+T).normalize();else if(t===Lr)s[5].setComponents(c,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=__.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(yl.x=s.normal.x>0?e.max.x:e.min.x,yl.y=s.normal.y>0?e.max.y:e.min.y,yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(Ld,"Frustum");var us=Ld,ym=new lt,hc=class hc{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ym.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new us),n[s].setFromProjectionMatrix(ym,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new us),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new hc().copy(this)}};l(hc,"FrustumArray");var Gl=hc;var Dd=class Dd extends on{constructor(e=[],t=Ws,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(Dd,"CubeTexture");var Va=Dd,Nd=class Nd extends on{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(Nd,"CanvasTexture");var zr=Nd;var Ud=class Ud extends on{constructor(e,t,n=jn,s,r,a,o=zt,c=zt,u,h=Ui,f=1){if(h!==Ui&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(Ud,"DepthTexture");var Oi=Ud,Fd=class Fd extends Oi{constructor(e,t=jn,n=Ws,s,r,a=zt,o=zt,c,u=Ui){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(Fd,"CubeDepthTexture");var Ha=Fd,Od=class Od extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(Od,"ExternalTexture");var Wa=Od,dc=class dc extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2));function _(y,g,x,w,R,T,P,E,m,S,D){let I=T/m,N=P/S,O=T/2,V=P/2,C=E/2,B=m+1,k=S+1,z=0,j=0,X=new G;for(let Q=0;Q<k;Q++){let se=Q*N-V;for(let Se=0;Se<B;Se++){let Le=Se*I-O;X[y]=Le*w,X[g]=se*R,X[x]=C,u.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[x]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(Se/m),f.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let se=0;se<m;se++){let Se=d+se+B*Q,Le=d+se+B*(Q+1),J=d+(se+1)+B*(Q+1),ue=d+(se+1)+B*Q;c.push(Se,Le,ue),c.push(Le,J,ue),j+=6}o.addGroup(p,j,D),p+=j,d+=z}l(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(dc,"BoxGeometry");var Vn=dc;var fc=class fc extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],_=0,y=[],g=n/2,x=0;w(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function w(){let T=new G,P=new G,E=0,m=(t-e)/n;for(let S=0;S<=r;S++){let D=[],I=S/r,N=I*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,C=V*c+o,B=Math.sin(C),k=Math.cos(C);P.x=N*B,P.y=-I*n+g,P.z=N*k,f.push(P.x,P.y,P.z),T.set(B,m,k).normalize(),d.push(T.x,T.y,T.z),p.push(V,1-I),D.push(_++)}y.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){let I=y[D][S],N=y[D+1][S],O=y[D+1][S+1],V=y[D][S+1];(e>0||D!==0)&&(h.push(I,N,V),E+=3),(t>0||D!==r-1)&&(h.push(N,O,V),E+=3)}u.addGroup(x,E,0),x+=E}l(w,"generateTorso");function R(T){let P=_,E=new ke,m=new G,S=0,D=T===!0?e:t,I=T===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*I,0),d.push(0,I,0),p.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let C=O/s*c+o,B=Math.cos(C),k=Math.sin(C);m.x=D*k,m.y=g*I,m.z=D*B,f.push(m.x,m.y,m.z),d.push(0,I,0),E.x=B*.5+.5,E.y=k*.5*I+.5,p.push(E.x,E.y),_++}for(let O=0;O<s;O++){let V=P+O,C=N+O;T===!0?h.push(C,C+1,V):h.push(C+1,C,V),S+=3}u.addGroup(x,S,T===!0?1:2),x+=S}l(R,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(fc,"CylinderGeometry");var Kn=fc,pc=class pc extends Kn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(pc,"ConeGeometry");var Qn=pc;var mc=class mc extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,f=e/o,d=t/c,p=[],_=[],y=[],g=[];for(let x=0;x<h;x++){let w=x*d-a;for(let R=0;R<u;R++){let T=R*f-r;_.push(T,-w,0),y.push(0,0,1),g.push(R/o),g.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<o;w++){let R=w+u*x,T=w+u*(x+1),P=w+1+u*(x+1),E=w+1+u*x;p.push(R,T,E),p.push(T,P,E)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}};l(mc,"PlaneGeometry");var hs=mc;var gc=class gc extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new G,d=new G,p=[],_=[],y=[],g=[];for(let x=0;x<=n;x++){let w=[],R=x/n,T=a+R*o,P=e*Math.cos(T),E=Math.sqrt(e*e-P*P),m=0;x===0&&a===0?m=.5/t:x===n&&c===Math.PI&&(m=-.5/t);for(let S=0;S<=t;S++){let D=S/t,I=s+D*r;f.x=-E*Math.cos(I),f.y=P,f.z=E*Math.sin(I),_.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),g.push(D+m,1-R),w.push(u++)}h.push(w)}for(let x=0;x<n;x++)for(let w=0;w<t;w++){let R=h[x][w+1],T=h[x][w],P=h[x+1][w],E=h[x+1][w+1];(x!==0||a>0)&&p.push(R,T,E),(x!==n-1||c<Math.PI)&&p.push(T,P,E)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(gc,"SphereGeometry");var ds=gc;var xc=class xc extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],u=[],h=[],f=[],d=new G,p=new G,_=new G;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let x=0;x<=s;x++){let w=x/s*r;p.x=(e+t*Math.cos(g))*Math.cos(w),p.y=(e+t*Math.cos(g))*Math.sin(w),p.z=t*Math.sin(g),u.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),_.subVectors(p,d).normalize(),h.push(_.x,_.y,_.z),f.push(x/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let x=(s+1)*y+g-1,w=(s+1)*(y-1)+g-1,R=(s+1)*(y-1)+g,T=(s+1)*y+g;c.push(x,w,T),c.push(w,R,T)}this.setIndex(c),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l(xc,"TorusGeometry");var Gs=xc;function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bm(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}l(Ys,"cloneUniforms");function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let s in n)e[s]=n[s]}return e}l(Kt,"mergeUniforms");function bm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(bm,"isThreeObject");function v_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(v_,"cloneUniformsGroups");function jh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}l(jh,"getUnlitUniformColorSpace");var ao={clone:Ys,merge:Kt},y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bd=class Bd extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=v_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(Bd,"ShaderMaterial");var Sn=Bd,zd=class zd extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(zd,"RawShaderMaterial");var Vl=zd,kd=class kd extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(kd,"MeshStandardMaterial");var Bi=kd;var Gd=class Gd extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Gd,"MeshDepthMaterial");var Hl=Gd,Vd=class Vd extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(Vd,"MeshDistanceMaterial");var Wl=Vd;function Er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Er,"convertArray");function bl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(bl,"hasTangents");var Hd=class Hd{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Hd,"Interpolant");var fs=Hd,Wd=class Wd extends fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,o=2*t-n;break;case Sh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mh:a=e,c=2*n-t;break;case Sh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),y=_*_,g=y*_,x=-d*g+2*d*y-d*_,w=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*_+1,R=(-1-p)*g+(1.5+p)*y+.5*_,T=p*g-p*y;for(let P=0;P!==o;++P)r[P]=x*a[h+P]+w*a[u+P]+R*a[c+P]+T*a[f+P];return r}};l(Wd,"CubicInterpolant");var Xl=Wd,Xd=class Xd extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[c+d]*h;return r}};l(Xd,"LinearInterpolant");var ql=Xd,qd=class qd extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};l(qd,"DiscreteInterpolant");var Yl=qd,Yd=class Yd extends fs{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(s-t),y=1-_;for(let g=0;g!==o;++g)r[g]=a[u+g]*y+a[c+g]*_;return r}let d=o*2,p=e-1;for(let _=0;_!==o;++_){let y=a[u+_],g=a[c+_],x=p*d+_*2,w=f[x],R=f[x+1],T=e*d+_*2,P=h[T],E=h[T+1],m=S_(n,t,w,P,s);r[_]=p0(m,y,R,E,g)}return r}};l(Yd,"BezierInterpolant");var Zl=Yd;function p0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}l(p0,"cubicBezier");function M_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}l(M_,"cubicBezierSlope");function S_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=p0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=M_(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}l(S_,"solveBezierParameter");var Zd=class Zd{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),bl(e.settings)&&(n.settings={inTangents:Er(e.settings.inTangents,Array),outTangents:Er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case Nl:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth;break;case yh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return wl;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;bl(this.settings)&&(Mm(this.settings.inTangents,e),Mm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;bl(this.settings)&&(Sm(this.settings.inTangents,e),Sm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ge("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Jx(s))for(let o=0,c=s.length;o!==c;++o){let u=s[o];if(isNaN(u)){Ge("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let _=0;_!==n;++_){let y=t[f+_];if(y!==t[d+_]||y!==t[p+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,bl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};l(Zd,"KeyframeTrack");var wn=Zd;function Mm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(Mm,"shiftTangentTimes");function Sm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(Sm,"scaleTangentTimes");wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Nl;var $d=class $d extends wn{constructor(e,t,n){super(e,t,n)}};l($d,"BooleanKeyframeTrack");var ps=$d;ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ra;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Jd=class Jd extends wn{constructor(e,t,n,s){super(e,t,n,s)}};l(Jd,"ColorKeyframeTrack");var $l=Jd;$l.prototype.ValueTypeName="color";var Kd=class Kd extends wn{constructor(e,t,n,s){super(e,t,n,s)}};l(Kd,"NumberKeyframeTrack");var Jl=Kd;Jl.prototype.ValueTypeName="number";var Qd=class Qd extends fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)an.slerpFlat(r,0,a,u-o,a,u,c);return r}};l(Qd,"QuaternionLinearInterpolant");var Kl=Qd,jd=class jd extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}};l(jd,"QuaternionKeyframeTrack");var Xa=jd;Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var ef=class ef extends wn{constructor(e,t,n){super(e,t,n)}};l(ef,"StringKeyframeTrack");var ms=ef;ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ra;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var tf=class tf extends wn{constructor(e,t,n,s){super(e,t,n,s)}};l(tf,"VectorKeyframeTrack");var Ql=tf;Ql.prototype.ValueTypeName="vector";var nf=class nf{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(nf,"LoadingManager");var jl=nf,m0=new jl,sf=class sf{constructor(e){this.manager=e!==void 0?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(sf,"Loader");var ec=sf;ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var rf=class rf extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(rf,"Light");var qa=rf,af=class af extends qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(af,"HemisphereLight");var Ya=af,vh=new lt,wm=new G,Em=new G,of=class of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(wm),Em.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Em),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){vh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(vh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(of,"LightShadow");var tc=of,Ml=new G,Sl=new an,ci=new G,lf=class lf extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,Sl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ml,Sl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(lf,"Camera");var Za=lf,rs=new G,Tm=new ke,Am=new ke,cf=class cf extends Za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ul*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Tm,Am),t.subVectors(Am,Tm)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ku*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(cf,"PerspectiveCamera");var rn=cf;var uf=class uf extends Za{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(uf,"OrthographicCamera");var $a=uf,hf=class hf extends tc{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(hf,"DirectionalLightShadow");var wh=hf,df=class df extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(df,"DirectionalLight");var Ja=df;var Tr=-90,Ar=1,ff=class ff extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Tr,Ar,e,t);s.layers=this.layers,this.add(s);let r=new rn(Tr,Ar,e,t);r.layers=this.layers,this.add(r);let a=new rn(Tr,Ar,e,t);a.layers=this.layers,this.add(a);let o=new rn(Tr,Ar,e,t);o.layers=this.layers,this.add(o);let c=new rn(Tr,Ar,e,t);c.layers=this.layers,this.add(c);let u=new rn(Tr,Ar,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let u of t)this.remove(u);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}};l(ff,"CubeCamera");var kr=ff,pf=class pf extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(pf,"ArrayCamera");var nc=pf;var ed="\\[\\]\\.:\\/",w_=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",E_="[^"+ed.replace("\\.","")+"]",T_=/((?:WC+[\/:])*)/.source.replace("WC",td),A_=/(WCOD+)?/.source.replace("WCOD",E_),C_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),P_=new RegExp("^"+T_+A_+C_+R_+"$"),I_=["material","materials","bones","map"],mf=class mf{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(mf,"Composite");var Eh=mf,os=class os{constructor(e,t,n){this.path=t,this.parsedPath=n||os.parseTrackName(t),this.node=os.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new os.Composite(e,t,n):new os(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w_,"")}static parseTrackName(e){let t=P_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);I_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=os.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(os,"PropertyBinding");var dt=os;dt.Composite=Eh;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);var _c=class _c{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};l(_c,"Matrix2"),_c.prototype.isMatrix2=!0;var Th=_c;function nd(i,e,t,n){let s=L_(n);switch(t){case Xh:return i*e;case Yh:return i*e/s.components*s.byteLength;case Tc:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case Ac:return i*e*2/s.components*s.byteLength;case qh:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case Cc:return i*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Lc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Dc:case Nc:case Fc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:case so:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jc:case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ro:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(nd,"getByteLength");function L_(i){switch(i){case pn:case Gh:return{byteLength:1,components:1};case Wr:case Vh:case En:return{byteLength:2,components:1};case wc:case Ec:return{byteLength:2,components:4};case jn:case Sc:case ei:return{byteLength:4,components:1};case Hh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(L_,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function O0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return l(s,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(r){t=r},"setAnimationLoop"),setContext:l(function(r){i=r},"setContext")}}l(O0,"WebGLAnimation");function z_(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){let _=f[d],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(r,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:s,remove:r,update:a}}l(z_,"WebGLAttributes");var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
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
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z_=`#ifdef USE_BATCHING
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
#endif`,$_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j_=`#ifdef USE_IRIDESCENCE
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
#endif`,ev=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cv=`#define PI 3.141592653589793
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
} // validated`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fv=`PhysicalMaterial material;
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
#endif`,Ov=`uniform sampler2D dfgLUT;
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
}`,Bv=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jv=`#if defined( USE_MORPHCOLORS )
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
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wy=`float getShadowMask() {
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
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform float backgroundBlurriness;
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,ab=`#define NORMAL
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
}`,ob=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,cb=`#define STANDARD
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
}`,ub=`#define STANDARD
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
}`,hb=`#define TOON
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
}`,db=`#define TOON
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
}`,fb=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 color;
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
}`,xb=`uniform float rotation;
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
}`,_b=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:k_,alphahash_pars_fragment:G_,alphamap_fragment:V_,alphamap_pars_fragment:H_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:Z_,batching_vertex:$_,begin_vertex:J_,beginnormal_vertex:K_,bsdfs:Q_,iridescence_fragment:j_,bumpmap_pars_fragment:ev,clipping_planes_fragment:tv,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:sv,color_fragment:rv,color_pars_fragment:av,color_pars_vertex:ov,color_vertex:lv,common:cv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:xv,envmap_common_pars_fragment:_v,envmap_pars_fragment:vv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Iv,envmap_vertex:bv,fog_vertex:Mv,fog_pars_vertex:Sv,fog_fragment:wv,fog_pars_fragment:Ev,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Pv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Dv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Fv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Bv,lights_fragment_maps:zv,lights_fragment_end:kv,lightprobes_pars_fragment:Gv,logdepthbuf_fragment:Vv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:Xv,map_fragment:qv,map_pars_fragment:Yv,map_particle_fragment:Zv,map_particle_pars_fragment:$v,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Qv,morphcolor_vertex:jv,morphnormal_vertex:ey,morphtarget_pars_vertex:ty,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:ay,normal_vertex:oy,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:hy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:xy,dithering_pars_fragment:_y,roughnessmap_fragment:vy,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:by,shadowmap_pars_vertex:My,shadowmap_vertex:Sy,shadowmask_pars_fragment:wy,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Iy,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Ny,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:Oy,worldpos_vertex:By,background_vert:zy,background_frag:ky,backgroundCube_vert:Gy,backgroundCube_frag:Vy,cube_vert:Hy,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distance_vert:Yy,distance_frag:Zy,equirect_vert:$y,equirect_frag:Jy,linedashed_vert:Ky,linedashed_frag:Qy,meshbasic_vert:jy,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:sb,meshnormal_vert:rb,meshnormal_frag:ab,meshphong_vert:ob,meshphong_frag:lb,meshphysical_vert:cb,meshphysical_frag:ub,meshtoon_vert:hb,meshtoon_frag:db,points_vert:fb,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:xb,sprite_frag:_b},ye={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},gi={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};gi.physical={uniforms:Kt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var ou={r:0,b:0,g:0},vb=new lt,B0=new Ve;B0.set(-1,0,0,0,1,0,0,0,1);function yb(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,c,u,h=null,f=0,d=null;function p(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){let T=w.backgroundBlurriness>0;R=e.get(R,T)}return R}l(p,"getBackground");function _(w){let R=!1,T=p(w);T===null?g(a,o):T&&T.isColor&&(g(T,1),R=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(_,"render");function y(w,R){let T=p(R);T&&T.isCubeTexture?(u===void 0&&(u=new ft(new Vn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ys(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vb.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(B0),u.material.toneMapped=je.getTransfer(T.colorSpace)!==at,(h!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ft(new hs(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ys(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==at,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function g(w,R){w.getRGB(ou,jh(i)),t.buffers.color.setClear(ou.r,ou.g,ou.b,R,r)}l(g,"setClear");function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(x,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(w,R=1){a.set(w),o=R,g(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(w){o=w,g(a,o)},"setClearAlpha"),render:_,addToRenderList:y,dispose:x}}l(yb,"WebGLBackground");function bb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,O,V,C,B){let k=!1,z=f(N,C,V,O);r!==z&&(r=z,u(r.object)),k=p(N,C,V,B),k&&_(N,C,V,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,T(N,O,V,C),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(N){return i.bindVertexArray(N)}l(u,"bindVertexArrayObject");function h(N){return i.deleteVertexArray(N)}l(h,"deleteVertexArrayObject");function f(N,O,V,C){let B=C.wireframe===!0,k=n[O.id];k===void 0&&(k={},n[O.id]=k);let z=N.isInstancedMesh===!0?N.id:0,j=k[z];j===void 0&&(j={},k[z]=j);let X=j[V.id];X===void 0&&(X={},j[V.id]=X);let Q=X[B];return Q===void 0&&(Q=d(c()),X[B]=Q),Q}l(f,"getBindingState");function d(N){let O=[],V=[],C=[];for(let B=0;B<t;B++)O[B]=0,V[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:C,object:N,attributes:{},index:null}}l(d,"createBindingState");function p(N,O,V,C){let B=r.attributes,k=O.attributes,z=0,j=V.getAttributes();for(let X in j)if(j[X].location>=0){let se=B[X],Se=k[X];if(Se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),se===void 0||se.attribute!==Se||Se&&se.data!==Se.data)return!0;z++}return r.attributesNum!==z||r.index!==C}l(p,"needsUpdate");function _(N,O,V,C){let B={},k=O.attributes,z=0,j=V.getAttributes();for(let X in j)if(j[X].location>=0){let se=k[X];se===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));let Se={};Se.attribute=se,se&&se.data&&(Se.data=se.data),B[X]=Se,z++}r.attributes=B,r.attributesNum=z,r.index=C}l(_,"saveCache");function y(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}l(y,"initAttributes");function g(N){x(N,0)}l(g,"enableAttribute");function x(N,O){let V=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;V[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),B[N]!==O&&(i.vertexAttribDivisor(N,O),B[N]=O)}l(x,"enableAttributeAndDivisor");function w(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,C=O.length;V<C;V++)O[V]!==N[V]&&(i.disableVertexAttribArray(V),O[V]=0)}l(w,"disableUnusedAttributes");function R(N,O,V,C,B,k,z){z===!0?i.vertexAttribIPointer(N,O,V,B,k):i.vertexAttribPointer(N,O,V,C,B,k)}l(R,"vertexAttribPointer");function T(N,O,V,C){y();let B=C.attributes,k=V.getAttributes(),z=O.defaultAttributeValues;for(let j in k){let X=k[j];if(X.location>=0){let Q=B[j];if(Q===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let se=Q.normalized,Se=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;let J=Le.buffer,ue=Le.type,Te=Le.bytesPerElement,De=ue===i.INT||ue===i.UNSIGNED_INT||Q.gpuType===Sc;if(Q.isInterleavedBufferAttribute){let _e=Q.data,ze=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Je=Q.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)x(X.location+Ie,_e.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)g(X.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ie=0;Ie<X.locationSize;Ie++)R(X.location+Ie,Se/X.locationSize,ue,se,ze*Te,(Je+Se/X.locationSize*Ie)*Te,De)}else{if(Q.isInstancedBufferAttribute){for(let _e=0;_e<X.locationSize;_e++)x(X.location+_e,Q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e);i.bindBuffer(i.ARRAY_BUFFER,J);for(let _e=0;_e<X.locationSize;_e++)R(X.location+_e,Se/X.locationSize,ue,se,Se*Te,Se/X.locationSize*_e*Te,De)}}else if(z!==void 0){let se=z[j];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}w()}l(T,"setupVertexAttributes");function P(){D();for(let N in n){let O=n[N];for(let V in O){let C=O[V];for(let B in C){let k=C[B];for(let z in k)h(k[z].object),delete k[z];delete C[B]}}delete n[N]}}l(P,"dispose");function E(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let V in O){let C=O[V];for(let B in C){let k=C[B];for(let z in k)h(k[z].object),delete k[z];delete C[B]}}delete n[N.id]}l(E,"releaseStatesOfGeometry");function m(N){for(let O in n){let V=n[O];for(let C in V){let B=V[C];if(B[N.id]===void 0)continue;let k=B[N.id];for(let z in k)h(k[z].object),delete k[z];delete B[N.id]}}}l(m,"releaseStatesOfProgram");function S(N){for(let O in n){let V=n[O],C=N.isInstancedMesh===!0?N.id:0,B=V[C];if(B!==void 0){for(let k in B){let z=B[k];for(let j in z)h(z[j].object),delete z[j];delete B[k]}delete V[C],Object.keys(V).length===0&&delete n[O]}}}l(S,"releaseStatesOfObject");function D(){I(),a=!0,r!==s&&(r=s,u(r.object))}l(D,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return l(I,"resetDefaultState"),{setup:o,reset:D,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}l(bb,"WebGLBindingStates");function Mb(i,e,t){let n;function s(c){n=c}l(s,"setMode");function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(r,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}l(Mb,"WebGLBufferRenderer");function Sb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}l(r,"getMaxAnisotropy");function a(m){return!(m!==ti&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(m){let S=m===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==pn&&m!==ei&&!S&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Be("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:T,maxSamples:P,samples:E}}l(Sb,"WebGLCapabilities");function wb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new dn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,x=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?h(null):u();else{let w=r?0:n,R=w*4,T=x.clippingState||null;c.value=T,T=h(_,d,R,p);for(let P=0;P!==R;++P)T[P]=t[P];x.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,p,_){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let x=p+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<x)&&(g=new Float32Array(x));for(let R=0,T=p;R!==y;++R,T+=4)a.copy(f[R]).applyMatrix4(w,o),a.normal.toArray(g,T),g[T+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}l(h,"projectPlanes")}l(wb,"WebGLClipping");var Tf=class Tf extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Va(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Vs});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=kt),new kr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};l(Tf,"WebGLCubeRenderTarget");var co=Tf,g0=256,Eb=3,Tb=20,z0=256,k0=16,Ab=3,Cb=new G,Rb=new Ue,hu=class hu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new kr(1,10,null),this._boxMesh=new ft(new Vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Cb}=r,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(Rb));let g=new kr(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=_,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(g0,c0(e))}_fromTexture(e,t){e.mapping===Ws||e.mapping===Hr?this._setSize(e.image.length===0?g0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=x0(e,!1,!1),n=Math.log2(e)-Eb;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=x0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ws||e.mapping===Hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Pb(),this._integrationMaterial=Ib());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/k0);for(let a=0;a<=n;a++){let o=hu.lodToRoughness(a,n);if(a>n-Ab)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(z0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lb());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l(hu,"PMREMGenerator");var cu=hu;function x0(i,e,t){return new co(i,{minFilter:zi,generateMipmaps:e,type:En,colorSpace:Pa,depthBuffer:t})}l(x0,"_createRenderTarget");function uo(i,e,t){return new Sn({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:ln,blending:Vs,depthTest:!1,depthWrite:!1})}l(uo,"_getMaterial");function Pb(){return uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${z0}u

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
	`)}l(Pb,"_getGGXMaterial");function Ib(){return uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:k0}},`

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
	`)}l(Ib,"_getIntegrationMaterial");function Lb(){return uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tb}
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
	`)}l(Lb,"_getBlurMaterial");function _0(){return uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(_0,"_getEquirectMaterial");function v0(){return uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(v0,"_getCubemapMaterial");function Db(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}l(s,"get");function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===yc||p===bc)if(e.has(d)){let _=e.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let y=new co(_.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,_=p===yc||p===bc,y=p===Ws||p===Hr;if(_||y){let g=t.get(d),x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new cu(i)),g=_?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let w=d.image;return _&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new cu(i)),g=_?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}l(a,"getPMREM");function o(d,p){return p===yc?d.mapping=Ws:p===bc&&(d.mapping=Hr),d}l(o,"mapTextureMapping");function c(d){let p=0,_=6;for(let y=0;y<_;y++)d[y]!==void 0&&p++;return p===_}l(c,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}l(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:s,dispose:f}}l(Db,"WebGLEnvironments");function Nb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let s=t(n);return s===null&&Aa("WebGLRenderer: "+n+" extension not supported."),s},"get")}}l(Nb,"WebGLExtensions");function Ub(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}l(o,"onGeometryDispose");function c(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let y=r.get(_);y&&(e.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(_){let y=_.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}l(h,"update");function f(_){let y=_.index,g=_.attributes.position,x=0;if(g===void 0)return;let w=y!==null?y.array.length:g.array.length/3-1,R=g.count>=65535?za:Ba,T=new R(Math.ceil(w/3)*6,1),P=T.array;if(y!==null){let m=y.array;x=y.version;for(let S=0,D=0;S<w;S+=3){let I=m[S+0],N=m[S+1],O=m[S+2];P[D++]=I,P[D++]=N,P[D++]=N,P[D++]=O,P[D++]=O,P[D++]=I}}else{x=g.version;for(let m=0,S=0;m<w;m+=3){let D=m+0,I=m+1,N=m+2;P[S++]=D,P[S++]=I,P[S++]=I,P[S++]=N,P[S++]=N,P[S++]=D}}T.version=x;let E=r.get(_);E&&e.remove(E),r.set(_,T)}l(f,"updateWireframeAttribute");function d(_){let y=r.get(_);if(y){let g=_.index;g!==null&&y.version<g.version&&f(_)}else f(_);return r.get(_)}l(d,"getWireframeAttribute");function p(){for(let _ in s){let y=s[_].deref();y!==void 0&&c(y)}}return l(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}l(Ub,"WebGLGeometries");function Fb(i,e,t){let n;function s(f){n=f}l(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}l(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(Fb,"WebGLIndexedBufferRenderer");function Ob(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}l(Ob,"WebGLInfo");function Bb(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var p=I;l(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],T=0;_===!0&&(T=1),y===!0&&(T=2),g===!0&&(T=3);let P=o.attributes.position.count*T,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let m=new Float32Array(P*E*4*f),S=new Na(m,P,E,f);S.type=ei,S.needsUpdate=!0;let D=T*4;for(let N=0;N<f;N++){let O=x[N],V=w[N],C=R[N],B=P*E*4*N;for(let k=0;k<O.count;k++){let z=k*D;_===!0&&(s.fromBufferAttribute(O,k),m[B+z+0]=s.x,m[B+z+1]=s.y,m[B+z+2]=s.z,m[B+z+3]=0),y===!0&&(s.fromBufferAttribute(V,k),m[B+z+4]=s.x,m[B+z+5]=s.y,m[B+z+6]=s.z,m[B+z+7]=0),g===!0&&(s.fromBufferAttribute(C,k),m[B+z+8]=s.x,m[B+z+9]=s.y,m[B+z+10]=s.z,m[B+z+11]=C.itemSize===4?s.w:1)}}d={count:f,texture:S,size:new ke(P,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];let y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(r,"update"),{update:r}}l(Bb,"WebGLMorphtargets");function zb(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}l(a,"update");function o(){r=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l(zb,"WebGLObjects");var kb={[Nh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[Qa]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function Gb(i,e,t,n,s,r){let a=new bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Pt;h.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wt([0,2,0,0,2,0],2));let f=new Vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ft(h,f),p=new $a(-1,1,1,-1,0,1),_=null,y=null,g=!1,x,w=null,R=[],T=!1;this.setSize=function(P,E){a.setSize(P,E),o!==null&&o.setSize(P,E),c!==null&&c.setSize(P,E);for(let m=0;m<R.length;m++){let S=R[m];S.setSize&&S.setSize(P,E)}},this.setEffects=function(P){R=P,T=R.length>0&&R[0].isRenderPass===!0;let E=a.width,m=a.height;R.length>0&&o===null&&(o=new bn(E,m,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new bn(E,m,{type:En,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&R.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Oi(E,m),r===!0&&(u.format=ki,u.type=Xs)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<R.length;D++){let I=R[D];I.setSize&&I.setSize(E,m),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(P,E){if(g||P.toneMapping===fi&&R.length===0)return!1;if(w=E,E!==null){let m=E.width,S=E.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return T===!1&&P.setRenderTarget(a),x=P.toneMapping,P.toneMapping=fi,!0},this.hasRenderPass=function(){return T},this.end=function(P,E){P.toneMapping=x,g=!0;let m=a,S=o;for(let D=0;D<R.length;D++){let I=R[D];I.enabled!==!1&&(I.render(P,S,m,E),I.needsSwap!==!1&&(m=S,S=S===o?c:o))}if(_!==P.outputColorSpace||y!==P.toneMapping){_=P.outputColorSpace,y=P.toneMapping,f.defines={},je.getTransfer(_)===at&&(f.defines.SRGB_TRANSFER="");let D=kb[y];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=m.texture,P.setRenderTarget(w),P.render(d,p),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(Gb,"WebGLOutput");var G0=new on,V0=new Oi(1,1),H0=new Ha(1),W0=new Na,X0=new Bl,q0=new Va,y0=[],b0=[],M0=new Float32Array(16),S0=new Float32Array(9),w0=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=y0[s];if(r===void 0&&(r=new Float32Array(s),y0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}l(qr,"flatten");function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(It,"arraysEqual");function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Lt,"copyArray");function du(i,e){let t=b0[e];t===void 0&&(t=new Int32Array(e),b0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(du,"allocTexUnits");function Vb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(Vb,"setValueV1f");function Hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}l(Hb,"setValueV2f");function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}l(Wb,"setValueV3f");function Xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}l(Xb,"setValueV4f");function qb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;w0.set(n),i.uniformMatrix2fv(this.addr,!1,w0),Lt(t,n)}}l(qb,"setValueM2");function Yb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;S0.set(n),i.uniformMatrix3fv(this.addr,!1,S0),Lt(t,n)}}l(Yb,"setValueM3");function Zb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;M0.set(n),i.uniformMatrix4fv(this.addr,!1,M0),Lt(t,n)}}l(Zb,"setValueM4");function $b(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l($b,"setValueV1i");function Jb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}l(Jb,"setValueV2i");function Kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}l(Kb,"setValueV3i");function Qb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}l(Qb,"setValueV4i");function jb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(jb,"setValueV1ui");function eM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}l(eM,"setValueV2ui");function tM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}l(tM,"setValueV3ui");function nM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}l(nM,"setValueV4ui");function fu(i){return i.version===0&&(i.compareFunction=Jh,i.needsUpdate=!0),i}l(fu,"initShadowTexture");function iM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=fu(V0):r=G0,t.setTexture2D(e||r,s)}l(iM,"setValueT1");function sM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||X0,s)}l(sM,"setValueT3D1");function rM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=fu(H0):r=q0,t.setTextureCube(e||r,s)}l(rM,"setValueT6");function aM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||W0,s)}l(aM,"setValueT2DArray1");function oM(i){switch(i){case 5126:return Vb;case 35664:return Hb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return Zb;case 5124:case 35670:return $b;case 35667:case 35671:return Jb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return jb;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return aM}}l(oM,"getSingularSetter");function lM(i,e){i.uniform1fv(this.addr,e)}l(lM,"setValueV1fArray");function cM(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}l(cM,"setValueV2fArray");function uM(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}l(uM,"setValueV3fArray");function hM(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}l(hM,"setValueV4fArray");function dM(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(dM,"setValueM2Array");function fM(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(fM,"setValueM3Array");function pM(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(pM,"setValueM4Array");function mM(i,e){i.uniform1iv(this.addr,e)}l(mM,"setValueV1iArray");function gM(i,e){i.uniform2iv(this.addr,e)}l(gM,"setValueV2iArray");function xM(i,e){i.uniform3iv(this.addr,e)}l(xM,"setValueV3iArray");function _M(i,e){i.uniform4iv(this.addr,e)}l(_M,"setValueV4iArray");function vM(i,e){i.uniform1uiv(this.addr,e)}l(vM,"setValueV1uiArray");function yM(i,e){i.uniform2uiv(this.addr,e)}l(yM,"setValueV2uiArray");function bM(i,e){i.uniform3uiv(this.addr,e)}l(bM,"setValueV3uiArray");function MM(i,e){i.uniform4uiv(this.addr,e)}l(MM,"setValueV4uiArray");function SM(i,e,t){let n=this.cache,s=e.length,r=du(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fu(V0):a=G0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}l(SM,"setValueT1Array");function wM(i,e,t){let n=this.cache,s=e.length,r=du(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||X0,r[a])}l(wM,"setValueT3DArray");function EM(i,e,t){let n=this.cache,s=e.length,r=du(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=fu(H0):a=q0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}l(EM,"setValueT6Array");function TM(i,e,t){let n=this.cache,s=e.length,r=du(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||W0,r[a])}l(TM,"setValueT2DArrayArray");function AM(i){switch(i){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return hM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return xM;case 35669:case 35673:return _M;case 5125:return vM;case 36294:return yM;case 36295:return bM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return TM}}l(AM,"getPureArraySetter");var Af=class Af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}};l(Af,"SingleUniform");var _f=Af,Cf=class Cf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AM(t.type)}};l(Cf,"PureArrayUniform");var vf=Cf,Rf=class Rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};l(Rf,"StructuredUniform");var yf=Rf,gf=/(\w+)(\])?(\[|\.)?/g;function E0(i,e){i.seq.push(e),i.map[e.id]=e}l(E0,"addUniform");function CM(i,e,t){let n=i.name,s=n.length;for(gf.lastIndex=0;;){let r=gf.exec(n),a=gf.lastIndex,o=r[1],c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){E0(t,u===void 0?new _f(o,i,e):new vf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new yf(o),E0(t,f)),t=f}}}l(CM,"parseUniform");var Pf=class Pf{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);CM(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};l(Pf,"WebGLUniforms");var Xr=Pf;function T0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(T0,"WebGLShader");var RM=37297,PM=0;function IM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(IM,"handleSource");var A0=new Ve;function LM(i){je._getMatrix(A0,je.workingColorSpace,i);let e=`mat3( ${A0.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(LM,"getEncodingComponents");function C0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+IM(i.getShaderSource(e),o)}else return r}l(C0,"getShaderErrors");function DM(i,e){let t=LM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(DM,"getTexelEncodingFunction");var NM={[Nh]:"Linear",[Uh]:"Reinhard",[Fh]:"Cineon",[Qa]:"ACESFilmic",[Bh]:"AgX",[zh]:"Neutral",[Oh]:"Custom"};function UM(i,e){let t=NM[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(UM,"getToneMappingFunction");var lu=new G;function FM(){je.getLuminanceCoefficients(lu);let i=lu.x.toFixed(4),e=lu.y.toFixed(4),t=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(FM,"getLuminanceFunction");function OM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}l(OM,"generateVertexExtensions");function BM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(BM,"generateDefines");function zM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l(zM,"fetchAttributeLocations");function lo(i){return i!==""}l(lo,"filterEmptyLine");function R0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(R0,"replaceLightNums");function P0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(P0,"replaceClippingPlaneNums");var kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(i){return i.replace(kM,GM)}l(bf,"resolveIncludes");function GM(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bf(t)}l(GM,"includeReplacer");var VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(i){return i.replace(VM,HM)}l(I0,"unrollLoops");function HM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}l(HM,"loopReplacer");function L0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(L0,"generatePrecision");var WM={[Ka]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function XM(i){return WM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(XM,"generateShadowMapTypeDefine");var qM={[Hr]:"ENVMAP_MODE_REFRACTION"};function YM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(YM,"generateEnvMapModeDefine");var ZM={[Dh]:"ENVMAP_BLENDING_MULTIPLY",[Zm]:"ENVMAP_BLENDING_MIX",[$m]:"ENVMAP_BLENDING_ADD"};function $M(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ZM[i.combine]||"ENVMAP_BLENDING_NONE"}l($M,"generateEnvMapBlendingDefine");function JM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=XM(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=YM(t),f=$M(t),d=OM(t),p=BM(r),_=s.createProgram(),y,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(lo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(y=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[L0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==fi?UM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,DM("linearToOutputTexel",t.outputColorSpace),FM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),a=bf(a),a=R0(a,t),a=P0(a,t),o=bf(o),o=R0(o,t),o=P0(o,t),a=I0(a),o=I0(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=x+y+a,R=x+g+o,T=T0(s,s.VERTEX_SHADER,w),P=T0(s,s.FRAGMENT_SHADER,R);s.attachShader(_,T),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(P)||"",C=N.trim(),B=O.trim(),k=V.trim(),z=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,P);else{let X=C0(s,T,"vertex"),Q=C0(s,P,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+X+`
`+Q)}else C!==""?Be("WebGLProgram: Program Info Log:",C):(B===""||k==="")&&(j=!1);j&&(I.diagnostics={runnable:z,programLog:C,vertexShader:{log:B,prefix:y},fragmentShader:{log:k,prefix:g}})}s.deleteShader(T),s.deleteShader(P),m=new Xr(s,_),S=zM(s,_)}l(E,"onFirstUse");let m;this.getUniforms=function(){return m===void 0&&E(this),m};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,RM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=P,this}l(JM,"WebGLProgram");var KM=0,If=class If{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sf(e),t.set(e,n)),n}};l(If,"WebGLShaderCache");var Mf=If,Lf=class Lf{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}};l(Lf,"WebGLShaderStage");var Sf=Lf;function QM(i){return i===pi||i===so||i===ro}l(QM,"isPackedRGFormat");function jM(i,e,t,n,s,r){let a=new Ua,o=new Mf,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(m){return c.add(m),m===0?"uv":`uv${m}`}l(p,"getChannel");function _(m,S,D,I,N,O){let V=I.fog,C=N.geometry,B=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||B,k),j=d[m.type],X=n.precision;m.precision!==null&&(X=n.getMaxPrecision(m.precision),X!==m.precision&&Be("WebGLProgram.getParameters:",m.precision,"not supported, using",X,"instead."));let Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,se=Q!==void 0?Q.length:0,Se=0;C.morphAttributes.position!==void 0&&(Se=1),C.morphAttributes.normal!==void 0&&(Se=2),C.morphAttributes.color!==void 0&&(Se=3);let Le,J,ue,Te;if(j){let Me=gi[j];Le=Me.vertexShader,J=Me.fragmentShader}else{Le=m.vertexShader,J=m.fragmentShader;let Me=o.getVertexShaderStage(m),ot=o.getFragmentShaderStage(m);o.update(m,Me,ot),ue=Me.id,Te=ot.id}let De=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,Je=N.isBatchedMesh===!0,Ie=!!m.map,$e=!!m.matcap,st=!!z,qe=st&&z.isPMREMTexture===!0,St=!!m.aoMap,yt=!!m.lightMap,Ct=!!m.bumpMap&&m.wireframe===!1,ct=!!m.normalMap,_n=!!m.displacementMap,Nt=!!m.emissiveMap,Un=!!m.metalnessMap,Fn=!!m.roughnessMap,On=m.anisotropy>0,F=m.clearcoat>0,Bn=m.diffuseRoughness>0,mt=m.dispersion>0,gt=m.retroreflectivity>0,ve=m.iridescence>0,Rt=m.sheen>0,Oe=m.transmission>0,He=On&&!!m.anisotropyMap,A=F&&!!m.clearcoatMap,b=F&&!!m.clearcoatNormalMap,q=F&&!!m.clearcoatRoughnessMap,oe=Bn&&!!m.diffuseRoughnessMap,re=ve&&!!m.iridescenceMap,he=ve&&!!m.iridescenceThicknessMap,ge=Rt&&!!m.sheenColorMap,ee=Rt&&!!m.sheenRoughnessMap,te=!!m.specularMap,fe=!!m.specularColorMap,L=!!m.specularIntensityMap,ne=Oe&&!!m.transmissionMap,K=Oe&&!!m.thicknessMap,pe=!!m.gradientMap,ce=!!m.alphaMap,de=m.alphaTest>0,Ne=!!m.alphaHash,Ye=!!m.extensions,le=fi;m.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(le=i.toneMapping);let Fe=qe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Xe={shaderID:j,shaderType:m.type,shaderName:m.name,vertexShader:Le,fragmentShader:J,defines:m.defines,customVertexShaderID:ue,customFragmentShaderID:Te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:X,batching:Je,batchingColor:Je&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ie,matcap:$e,envMap:st,envMapMode:st&&z.mapping,envMapPMREM:qe,envMapMaxLod:qe?Fe.length-1:null,envMapSize:qe?Fe[0].width:null,aoMap:St,lightMap:yt,bumpMap:Ct,normalMap:ct,displacementMap:_n,emissiveMap:Nt,normalMapObjectSpace:ct&&m.normalMapType===Qm,normalMapTangentSpace:ct&&m.normalMapType===ru,packedNormalMap:ct&&m.normalMapType===ru&&QM(m.normalMap.format),metalnessMap:Un,roughnessMap:Fn,anisotropy:On,anisotropyMap:He,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:q,diffuseRoughness:Bn,diffuseRoughnessMap:oe,dispersion:mt,retroreflection:gt,iridescence:ve,iridescenceMap:re,iridescenceThicknessMap:he,sheen:Rt,sheenColorMap:ge,sheenRoughnessMap:ee,specularMap:te,specularColorMap:fe,specularIntensityMap:L,transmission:Oe,transmissionMap:ne,thicknessMap:K,gradientMap:pe,opaque:m.transparent===!1&&m.blending===Vr&&m.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Ne,combine:m.combine,mapUv:Ie&&p(m.map.channel),aoMapUv:St&&p(m.aoMap.channel),lightMapUv:yt&&p(m.lightMap.channel),bumpMapUv:Ct&&p(m.bumpMap.channel),normalMapUv:ct&&p(m.normalMap.channel),displacementMapUv:_n&&p(m.displacementMap.channel),emissiveMapUv:Nt&&p(m.emissiveMap.channel),metalnessMapUv:Un&&p(m.metalnessMap.channel),roughnessMapUv:Fn&&p(m.roughnessMap.channel),anisotropyMapUv:He&&p(m.anisotropyMap.channel),clearcoatMapUv:A&&p(m.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&p(m.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(m.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(m.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(m.sheenRoughnessMap.channel),specularMapUv:te&&p(m.specularMap.channel),specularColorMapUv:fe&&p(m.specularColorMap.channel),specularIntensityMapUv:L&&p(m.specularIntensityMap.channel),transmissionMapUv:ne&&p(m.transmissionMap.channel),thicknessMapUv:K&&p(m.thicknessMap.channel),alphaMapUv:ce&&p(m.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ct||On),vertexNormals:!!C.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ie||ce),fog:!!V,useFog:m.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||C.attributes.normal===void 0&&ct===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ie&&m.map.isVideoTexture===!0&&je.getTransfer(m.map.colorSpace)===at,decodeVideoTextureEmissive:Nt&&m.emissiveMap.isVideoTexture===!0&&je.getTransfer(m.emissiveMap.colorSpace)===at,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===di,flipSided:m.side===ln,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ye&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&m.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}l(_,"getParameters");function y(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let D in m.defines)S.push(D),S.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(g(S,m),x(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}l(y,"getProgramCacheKey");function g(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}l(g,"getProgramCacheKeyParameters");function x(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}l(x,"getProgramCacheKeyBooleans");function w(m){let S=d[m.type],D;if(S){let I=gi[S];D=ao.clone(I.uniforms)}else D=m.uniforms;return D}l(w,"getUniforms");function R(m,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new JM(i,S,m,s),u.push(D),h.set(S,D)),D}l(R,"acquireProgram");function T(m){if(--m.usedTimes===0){let S=u.indexOf(m);u[S]=u[u.length-1],u.pop(),h.delete(m.cacheKey),m.destroy()}}l(T,"releaseProgram");function P(m){o.remove(m)}l(P,"releaseShaderCache");function E(){o.dispose()}return l(E,"dispose"),{getParameters:_,getProgramCacheKey:y,getUniforms:w,acquireProgram:R,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:E}}l(jM,"WebGLPrograms");function eS(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function s(a,o,c){i.get(a)[o]=c}l(s,"update");function r(){i=new WeakMap}return l(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}l(eS,"WebGLProperties");function tS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(tS,"painterSortStable");function D0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(D0,"reversePainterSortStable");function N0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}l(r,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}l(a,"materialVariant");function o(d,p,_,y,g,x){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:x},i[e]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=_,w.materialVariant=a(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=g,w.group=x),e++,w}l(o,"getNextRenderItem");function c(d,p,_,y,g,x,w){w.reversedDepth===!0&&(g=-g);let R=o(d,p,_,y,g,x);_.transmission>0?n.push(R):_.transparent===!0?s.push(R):t.push(R)}l(c,"push");function u(d,p,_,y,g,x){let w=o(d,p,_,y,g,x);_.transmission>0?n.unshift(w):_.transparent===!0?s.unshift(w):t.unshift(w)}l(u,"unshift");function h(d,p){t.length>1&&t.sort(d||tS),n.length>1&&n.sort(p||D0),s.length>1&&s.sort(p||D0)}l(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:f,sort:h}}l(N0,"WebGLRenderList");function nS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new N0,i.set(n,[a])):s>=r.length?(a=new N0,r.push(a)):a=r[s],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(nS,"WebGLRenderLists");function iS(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ue};break;case"SpotLight":t={position:new G,direction:new G,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t},"get")}}l(iS,"UniformsCache");function sS(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(sS,"ShadowUniformsCache");var rS=0;function aS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(aS,"shadowCastingAndTexturingLightsFirst");function oS(i){let e=new iS,t=sS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);let s=new G,r=new lt,a=new lt;function o(u){let h=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,_=0,y=0,g=0,x=0,w=0,R=0,T=0,P=0,E=0,m=0,S=0,D=0,I=0;u.sort(aS);for(let O=0,V=u.length;O<V;O++){let C=u[O],B=C.color,k=C.intensity,z=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===pi?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*k,f+=B.g*k,d+=B.b*k;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],k);I++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=se,n.sunShadowMap[_]=j;let Se=Q.getViewportCount();for(let Le=0;Le<Se;Le++)n.sunShadowMatrix[y+Le]=Q.getMatrix(Le),n.sunShadowCascade[y+Le]=Q._cascadeData[Le];y+=Se,_++}n.sun[p]=X,p++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,n.directionalShadow[g]=se,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=C.shadow.matrix,P++}n.directional[g]=X,g++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(B).multiplyScalar(k),X.distance=z,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[w]=X;let Q=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,Q.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[w]=Q.matrix,C.castShadow){let se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,n.spotShadow[w]=se,n.spotShadowMap[w]=j,m++}w++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[R]=X,R++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let Q=C.shadow,se=t.get(C);se.shadowIntensity=Q.intensity,se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,se.shadowCameraNear=Q.camera.near,se.shadowCameraFar=Q.camera.far,n.pointShadow[x]=se,n.pointShadowMap[x]=j,n.pointShadowMatrix[x]=C.shadow.matrix,E++}n.point[x]=X,x++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(k),X.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[T]=X,T++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let N=n.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==x||N.spotLength!==w||N.rectAreaLength!==R||N.hemiLength!==T||N.numSunShadows!==_||N.numDirectionalShadows!==P||N.numPointShadows!==E||N.numSpotShadows!==m||N.numSpotMaps!==S||N.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=g,n.spot.length=w,n.rectArea.length=R,n.point.length=x,n.hemi.length=T,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,N.sunLength=p,N.directionalLength=g,N.pointLength=x,N.spotLength=w,N.rectAreaLength=R,N.hemiLength=T,N.numSunShadows=_,N.numDirectionalShadows=P,N.numPointShadows=E,N.numSpotShadows=m,N.numSpotMaps=S,N.numLightProbes=I,n.version=rS++)}l(o,"setup");function c(u,h){let f=0,d=0,p=0,_=0,y=0,g=0,x=h.matrixWorldInverse;for(let w=0,R=u.length;w<R;w++){let T=u[w];if(T.isSunLight){let P=n.sun[f];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(x),f++}else if(T.isDirectionalLight){let P=n.directional[d];P.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(x),d++}else if(T.isSpotLight){let P=n.spot[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(x),_++}else if(T.isRectAreaLight){let P=n.rectArea[y];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),a.identity(),r.copy(T.matrixWorld),r.premultiply(x),a.extractRotation(r),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let P=n.point[p];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(x),p++}else if(T.isHemisphereLight){let P=n.hemi[g];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(x),g++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(oS,"WebGLLights");function U0(i){let e=new oS(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}l(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(U0,"WebGLRenderState");function lS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new U0(i),e.set(s,[o])):r>=a.length?(o=new U0(i),a.push(o)):o=a[r],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(lS,"WebGLRenderStates");var cS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uS=`uniform sampler2D shadow_pass;
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
}`,hS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],dS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],F0=new lt,oo=new G,xf=new G;function fS(i,e,t){let n=new us,s=new ke,r=new ke,a=new xt,o=new Hl,c=new Wl,u={},h=t.maxTextureSize,f={[gs]:ln,[ln]:gs,[di]:di},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:cS,fragmentShader:uS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new Pt;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ft(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let x=this.type;this.render=function(E,m,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===vc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ka);let D=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Vs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=x!==this.type;V&&m.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=E.length;C<B;C++){let k=E[C],z=k.shadow;if(z===void 0){Be("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let j=z.getFrameExtents();s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Gr){if(k.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new bn(s.x,s.y,{format:pi,type:En,minFilter:kt,magFilter:kt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Oi(s.x,s.y,ei),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Ui,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else k.isPointLight?(z.map=new co(s.x),z.map.depthTexture=new Ha(s.x,jn)):(z.map=new bn(s.x,s.y),z.map.depthTexture=new Oi(s.x,s.y,jn)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Ui,this.type===Ka?(z.map.depthTexture.compareFunction=X?$h:Zh,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,S);let se=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Se=0;Se<Q;Se++){let Le=z.getCamera(Se);if(k.isPointLight){let J=z.camera,ue=z.matrix,Te=k.distance||J.far;Te!==J.far&&(J.far=Te,J.updateProjectionMatrix()),oo.setFromMatrixPosition(k.matrixWorld),J.position.copy(oo),xf.copy(J.position),xf.add(hS[Se]),J.up.copy(dS[Se]),J.lookAt(xf),J.updateMatrixWorld(),ue.makeTranslation(-oo.x,-oo.y,-oo.z),F0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(F0,J.coordinateSystem,J.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(z.map),i.clear());let J=z.getViewport(Se);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=z.getFrustum(Se),T(m,S,Le,k,se,this.type)}z.isPointLightShadow!==!0&&this.type===Gr&&w(z,S),z.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(D,I,N)};function w(E,m){let S=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new bn(s.x,s.y,{format:pi,type:En}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(m,null,S,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(m,null,S,p,y,null)}l(w,"VSMPass");function R(E,m,S,D){let I=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?c:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let O=I.uuid,V=m.uuid,C=u[O];C===void 0&&(C={},u[O]=C);let B=C[V];B===void 0&&(B=I.clone(),C[V]=B,m.addEventListener("dispose",P)),I=B}if(I.visible=m.visible,I.wireframe=m.wireframe,D===Gr?I.side=m.shadowSide!==null?m.shadowSide:m.side:I.side=m.shadowSide!==null?m.shadowSide:f[m.side],I.alphaMap=m.alphaMap,I.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,I.map=m.map,I.clipShadows=m.clipShadows,I.clippingPlanes=m.clippingPlanes,I.clipIntersection=m.clipIntersection,I.displacementMap=m.displacementMap,I.displacementScale=m.displacementScale,I.displacementBias=m.displacementBias,I.wireframeLinewidth=m.wireframeLinewidth,I.linewidth=m.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=S}return I}l(R,"getDepthMaterial");function T(E,m,S,D,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Gr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let C=e.update(E),B=E.material;if(Array.isArray(B)){let k=C.groups;for(let z=0,j=k.length;z<j;z++){let X=k[z],Q=B[X.materialIndex];if(Q&&Q.visible){let se=R(E,Q,D,N);E.onBeforeShadow(i,E,m,S,C,se,X),i.renderBufferDirect(S,null,C,se,E,X),E.onAfterShadow(i,E,m,S,C,se,X)}}}else if(B.visible){let k=R(E,B,D,N);E.onBeforeShadow(i,E,m,S,C,k,null),i.renderBufferDirect(S,null,C,k,E,null),E.onAfterShadow(i,E,m,S,C,k,null)}}let V=E.children;for(let C=0,B=V.length;C<B;C++)T(V[C],m,S,D,I,N)}l(T,"renderObject");function P(E){E.target.removeEventListener("dispose",P);for(let S in u){let D=u[S],I=E.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}l(P,"onMaterialDispose")}l(fS,"WebGLShadowMap");function pS(i,e){function t(){let L=!1,ne=new xt,K=null,pe=new xt(0,0,0,0);return{setMask:l(function(ce){K!==ce&&!L&&(i.colorMask(ce,ce,ce,ce),K=ce)},"setMask"),setLocked:l(function(ce){L=ce},"setLocked"),setClear:l(function(ce,de,Ne,Ye,le){le===!0&&(ce*=Ye,de*=Ye,Ne*=Ye),ne.set(ce,de,Ne,Ye),pe.equals(ne)===!1&&(i.clearColor(ce,de,Ne,Ye),pe.copy(ne))},"setClear"),reset:l(function(){L=!1,K=null,pe.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let L=!1,ne=!1,K=null,pe=null,ce=null;return{setReversed:l(function(de){if(ne!==de){let Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ne=de;let Ye=ce;ce=null,this.setClear(Ye)}},"setReversed"),getReversed:l(function(){return ne},"getReversed"),setTest:l(function(de){de?_e(i.DEPTH_TEST):ze(i.DEPTH_TEST)},"setTest"),setMask:l(function(de){K!==de&&!L&&(i.depthMask(de),K=de)},"setMask"),setFunc:l(function(de){if(ne&&(de=l0[de]),pe!==de){switch(de){case Tl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Rl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=de}},"setFunc"),setLocked:l(function(de){L=de},"setLocked"),setClear:l(function(de){ce!==de&&(ce=de,ne&&(de=1-de),i.clearDepth(de))},"setClear"),reset:l(function(){L=!1,K=null,pe=null,ce=null,ne=!1},"reset")}}l(n,"DepthBuffer");function s(){let L=!1,ne=null,K=null,pe=null,ce=null,de=null,Ne=null,Ye=null,le=null;return{setTest:l(function(Fe){L||(Fe?_e(i.STENCIL_TEST):ze(i.STENCIL_TEST))},"setTest"),setMask:l(function(Fe){ne!==Fe&&!L&&(i.stencilMask(Fe),ne=Fe)},"setMask"),setFunc:l(function(Fe,Xe,Me){(K!==Fe||pe!==Xe||ce!==Me)&&(i.stencilFunc(Fe,Xe,Me),K=Fe,pe=Xe,ce=Me)},"setFunc"),setOp:l(function(Fe,Xe,Me){(de!==Fe||Ne!==Xe||Ye!==Me)&&(i.stencilOp(Fe,Xe,Me),de=Fe,Ne=Xe,Ye=Me)},"setOp"),setLocked:l(function(Fe){L=Fe},"setLocked"),setClear:l(function(Fe){le!==Fe&&(i.clearStencil(Fe),le=Fe)},"setClear"),reset:l(function(){L=!1,ne=null,K=null,pe=null,ce=null,de=null,Ne=null,Ye=null,le=null},"reset")}}l(s,"StencilBuffer");let r=new t,a=new n,o=new s,c={},u=new WeakMap,h={},f={},d={},p=new WeakMap,_=[],y=null,g=!1,x=null,w=null,R=null,T=null,P=null,E=null,m=null,S=new Ue(0,0,0),D=0,I=!1,N=null,O=null,V=null,C=null,B=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,j=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=j>=2);let Q=null,se={},Se=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),J=new xt().fromArray(Se),ue=new xt().fromArray(Le);function Te(L,ne,K,pe){let ce=new Uint8Array(4),de=i.createTexture();i.bindTexture(L,de),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<K;Ne++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ne+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return de}l(Te,"createTexture");let De={};De[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(Ir),Ct(!1),ct(Ah),_e(i.CULL_FACE),St(Vs);function _e(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}l(_e,"enable");function ze(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}l(ze,"disable");function Je(L,ne){return d[L]!==ne?(i.bindFramebuffer(L,ne),d[L]=ne,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}l(Je,"bindFramebuffer");function Ie(L,ne){let K=_,pe=!1;if(L){K=p.get(ne),K===void 0&&(K=[],p.set(ne,K));let ce=L.textures;if(K.length!==ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Ne=ce.length;de<Ne;de++)K[de]=i.COLOR_ATTACHMENT0+de;K.length=ce.length,pe=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,pe=!0);pe&&i.drawBuffers(K)}l(Ie,"drawBuffers");function $e(L){return y!==L?(i.useProgram(L),y=L,!0):!1}l($e,"useProgram");let st={[Hs]:i.FUNC_ADD,[Im]:i.FUNC_SUBTRACT,[Lm]:i.FUNC_REVERSE_SUBTRACT};st[Dm]=i.MIN,st[Nm]=i.MAX;let qe={[Um]:i.ZERO,[Fm]:i.ONE,[Om]:i.SRC_COLOR,[Ih]:i.SRC_ALPHA,[Hm]:i.SRC_ALPHA_SATURATE,[Gm]:i.DST_COLOR,[zm]:i.DST_ALPHA,[Bm]:i.ONE_MINUS_SRC_COLOR,[Lh]:i.ONE_MINUS_SRC_ALPHA,[Vm]:i.ONE_MINUS_DST_COLOR,[km]:i.ONE_MINUS_DST_ALPHA,[Wm]:i.CONSTANT_COLOR,[Xm]:i.ONE_MINUS_CONSTANT_COLOR,[qm]:i.CONSTANT_ALPHA,[Ym]:i.ONE_MINUS_CONSTANT_ALPHA};function St(L,ne,K,pe,ce,de,Ne,Ye,le,Fe){if(L===Vs){g===!0&&(ze(i.BLEND),g=!1);return}if(g===!1&&(_e(i.BLEND),g=!0),L!==Pm){if(L!==x||Fe!==I){if((w!==Hs||P!==Hs)&&(i.blendEquation(i.FUNC_ADD),w=Hs,P=Hs),Fe)switch(L){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ch:i.blendFunc(i.ONE,i.ONE);break;case Rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",L);break}else switch(L){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ch:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rh:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",L);break}R=null,T=null,E=null,m=null,S.set(0,0,0),D=0,x=L,I=Fe}return}ce=ce||ne,de=de||K,Ne=Ne||pe,(ne!==w||ce!==P)&&(i.blendEquationSeparate(st[ne],st[ce]),w=ne,P=ce),(K!==R||pe!==T||de!==E||Ne!==m)&&(i.blendFuncSeparate(qe[K],qe[pe],qe[de],qe[Ne]),R=K,T=pe,E=de,m=Ne),(Ye.equals(S)===!1||le!==D)&&(i.blendColor(Ye.r,Ye.g,Ye.b,le),S.copy(Ye),D=le),x=L,I=!1}l(St,"setBlending");function yt(L,ne){L.side===di?ze(i.CULL_FACE):_e(i.CULL_FACE);let K=L.side===ln;ne&&(K=!K),Ct(K),L.blending===Vr&&L.transparent===!1?St(Vs):St(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}l(yt,"setMaterial");function Ct(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}l(Ct,"setFlipSided");function ct(L){L!==Cm?(_e(i.CULL_FACE),L!==O&&(L===Ah?i.cullFace(i.BACK):L===Rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),O=L}l(ct,"setCullFace");function _n(L){L!==V&&(z&&i.lineWidth(L),V=L)}l(_n,"setLineWidth");function Nt(L,ne,K){L?(_e(i.POLYGON_OFFSET_FILL),(C!==ne||B!==K)&&(C=ne,B=K,a.getReversed()&&(ne=-ne,K=-K),i.polygonOffset(ne,K))):ze(i.POLYGON_OFFSET_FILL)}l(Nt,"setPolygonOffset");function Un(L){L?_e(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}l(Un,"setScissorTest");function Fn(L){L===void 0&&(L=i.TEXTURE0+k-1),Q!==L&&(i.activeTexture(L),Q=L)}l(Fn,"activeTexture");function On(L,ne,K){K===void 0&&(Q===null?K=i.TEXTURE0+k-1:K=Q);let pe=se[K];pe===void 0&&(pe={type:void 0,texture:void 0},se[K]=pe),(pe.type!==L||pe.texture!==ne)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(L,ne||De[L]),pe.type=L,pe.texture=ne)}l(On,"bindTexture");function F(){let L=se[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}l(F,"unbindTexture");function Bn(){try{i.compressedTexImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(Bn,"compressedTexImage2D");function mt(){try{i.compressedTexImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(mt,"compressedTexImage3D");function gt(){try{i.texSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(gt,"texSubImage2D");function ve(){try{i.texSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(ve,"texSubImage3D");function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(Rt,"compressedTexSubImage2D");function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(Oe,"compressedTexSubImage3D");function He(){try{i.texStorage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(He,"texStorage2D");function A(){try{i.texStorage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(A,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(b,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}l(q,"texImage3D");function oe(L){return f[L]!==void 0?f[L]:i.getParameter(L)}l(oe,"getParameter");function re(L,ne){f[L]!==ne&&(i.pixelStorei(L,ne),f[L]=ne)}l(re,"pixelStorei");function he(L){J.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),J.copy(L))}l(he,"scissor");function ge(L){ue.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}l(ge,"viewport");function ee(L,ne){let K=u.get(ne);K===void 0&&(K=new WeakMap,u.set(ne,K));let pe=K.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(ne,L.name),i.uniformBlockBinding(ne,pe,pe),K.set(L,pe))}l(ee,"updateUBOMapping");function te(L,ne,K){let ce=u.get(ne).get(L);c[ce]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,K),c[ce]=K)}l(te,"uniformBlockBinding");function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,se={},d={},c={},p=new WeakMap,_=[],y=null,g=!1,x=null,w=null,R=null,T=null,P=null,E=null,m=null,S=new Ue(0,0,0),D=0,I=!1,N=null,O=null,V=null,C=null,B=null,J.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return l(fe,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:ze,bindFramebuffer:Je,drawBuffers:Ie,useProgram:$e,setBlending:St,setMaterial:yt,setFlipSided:Ct,setCullFace:ct,setLineWidth:_n,setPolygonOffset:Nt,setScissorTest:Un,activeTexture:Fn,bindTexture:On,unbindTexture:F,compressedTexImage2D:Bn,compressedTexImage3D:mt,texImage2D:b,texImage3D:q,pixelStorei:re,getParameter:oe,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:He,texStorage3D:A,texSubImage2D:gt,texSubImage3D:ve,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Oe,scissor:he,viewport:ge,reset:fe}}l(pS,"WebGLState");function mS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap,f=new Set,d,p=new WeakMap,_=new Set,y=new FinalizationRegistry(A=>_.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,b){return g?new OffscreenCanvas(A,b):La("canvas")}l(x,"createCanvas");function w(A,b,q){let oe=1,re=He(A);if((re.width>q||re.height>q)&&(oe=q/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let he=Math.floor(oe*re.width),ge=Math.floor(oe*re.height);d===void 0&&(d=x(he,ge));let ee=b?x(he,ge):d;return ee.width=he,ee.height=ge,ee.getContext("2d").drawImage(A,0,0,he,ge),Be("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+he+"x"+ge+")."),ee}else return"data"in A&&Be("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}l(w,"resizeImage");function R(A){return A.generateMipmaps}l(R,"textureNeedsGenerateMipmaps");function T(A){i.generateMipmap(A)}l(T,"generateMipmap");function P(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(P,"getTargetType");function E(A,b,q,oe,re,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge;oe&&(ge=e.get("EXT_texture_norm16"),ge||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=b;if(b===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8),q===i.UNSIGNED_SHORT&&ge&&(ee=ge.R16_EXT),q===i.SHORT&&ge&&(ee=ge.R16_SNORM_EXT)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),b===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8),q===i.UNSIGNED_SHORT&&ge&&(ee=ge.RG16_EXT),q===i.SHORT&&ge&&(ee=ge.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),q===i.UNSIGNED_INT&&(ee=i.RGB32UI),q===i.BYTE&&(ee=i.RGB8I),q===i.SHORT&&(ee=i.RGB16I),q===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),q===i.BYTE&&(ee=i.RGBA8I),q===i.SHORT&&(ee=i.RGBA16I),q===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_SHORT&&ge&&(ee=ge.RGB16_EXT),q===i.SHORT&&ge&&(ee=ge.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),b===i.RGBA){let te=he?Ia:je.getTransfer(re);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=te===at?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ge&&(ee=ge.RGBA16_EXT),q===i.SHORT&&ge&&(ee=ge.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}l(E,"getInternalFormat");function m(A,b){let q;return A?b===null||b===jn||b===Xs?q=i.DEPTH24_STENCIL8:b===ei?q=i.DEPTH32F_STENCIL8:b===Wr&&(q=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===Xs?q=i.DEPTH_COMPONENT24:b===ei?q=i.DEPTH_COMPONENT32F:b===Wr&&(q=i.DEPTH_COMPONENT16),q}l(m,"getInternalDepthFormat");function S(A,b){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==kt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}l(S,"getMipLevels");function D(A){let b=new WeakRef(A);n.get(A).__ref=b,_.add(b),y.register(A,b,b)}l(D,"track");function I(A){let b=n.get(A).__ref;b!==void 0&&(_.delete(b),y.unregister(b))}l(I,"untrack");function N(A){V(A.target)}l(N,"onTextureDispose");function O(A){C(A.target)}l(O,"onRenderTargetDispose");function V(A){A.removeEventListener("dispose",N),I(A),k(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}l(V,"destroyTexture");function C(A){A.removeEventListener("dispose",O),I(A),j(A)}l(C,"destroyRenderTarget");function B(){for(let A of _){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):V(b))}_.clear(),f.clear()}l(B,"dispose");function k(A){let b=n.get(A);if(b.__webglInit===void 0)return;let q=A.source,oe=p.get(q);if(oe){let re=oe[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(A),Object.keys(oe).length===0&&p.delete(q)}n.remove(A)}l(k,"deallocateTexture");function z(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let q=A.source,oe=p.get(q);delete oe[b.__cacheKey],a.memory.textures--}l(z,"deleteTexture");function j(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let q=A.depthTexture;if(q&&q.renderTarget===A&&V(q),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let he=0;he<b.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[re][he]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let oe=A.textures;for(let re=0,he=oe.length;re<he;re++){let ge=n.get(oe[re]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(oe[re])}n.remove(A)}l(j,"deallocateRenderTarget");let X=0;function Q(){X=0}l(Q,"resetTextureUnits");function se(){return X}l(se,"getTextureUnits");function Se(A){X=A}l(Se,"setTextureUnits");function Le(){let A=X;return A>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}l(Le,"allocateTextureUnit");function J(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}l(J,"getTextureCacheKey");function ue(A,b){let q=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let oe=A.image;if(oe===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(q,A,b);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}l(ue,"setTexture2D");function Te(A,b){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){yt(q,A,b);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}l(Te,"setTexture2DArray");function De(A,b){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){yt(q,A,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}l(De,"setTexture3D");function _e(A,b){let q=n.get(A);if(A.version>0&&q.__version!==A.version){Ct(q,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}l(_e,"setTextureCube");let ze={[ks]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},Je={[zt]:i.NEAREST,[Jm]:i.NEAREST_MIPMAP_NEAREST,[ja]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[Mc]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Ie={[e0]:i.NEVER,[Jh]:i.ALWAYS,[t0]:i.LESS,[Zh]:i.LEQUAL,[n0]:i.EQUAL,[$h]:i.GEQUAL,[i0]:i.GREATER,[s0]:i.NOTEQUAL};function $e(A,b){if(b.type===ei&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kt||b.magFilter===Mc||b.magFilter===ja||b.magFilter===zi||b.minFilter===kt||b.minFilter===Mc||b.minFilter===ja||b.minFilter===zi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ze[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ze[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ze[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Je[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Je[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zt||b.minFilter!==ja&&b.minFilter!==zi||b.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l($e,"setTextureParameters");function st(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",N),D(b));let oe=b.source,re=p.get(oe);re===void 0&&(re={},p.set(oe,re));let he=J(b);if(he!==A.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),re[he].usedTimes++;let ge=re[A.__cacheKey];ge!==void 0&&(re[A.__cacheKey].usedTimes--,ge.usedTimes===0&&z(b)),A.__cacheKey=he,A.__webglTexture=re[he].texture}return q}l(st,"initTexture");function qe(A,b,q){return Math.floor(Math.floor(A/q)/b)}l(qe,"getRow");function St(A,b,q,oe){let he=A.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,oe,b.data);else{he.sort((L,ne)=>L.start-ne.start);let ge=0;for(let L=1;L<he.length;L++){let ne=he[ge],K=he[L],pe=ne.start+ne.count,ce=qe(K.start,b.width,4),de=qe(ne.start,b.width,4);K.start<=pe+1&&ce===de&&qe(K.start+K.count-1,b.width,4)===ce?ne.count=Math.max(ne.count,K.start+K.count-ne.start):(++ge,he[ge]=K)}he.length=ge+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let L=0,ne=he.length;L<ne;L++){let K=he[L],pe=Math.floor(K.start/4),ce=Math.ceil(K.count/4),de=pe%b.width,Ne=Math.floor(pe/b.width),Ye=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne),t.texSubImage2D(i.TEXTURE_2D,0,de,Ne,Ye,le,q,oe,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}l(St,"updateTexture");function yt(A,b,q){let oe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=i.TEXTURE_3D);let re=st(A,b),he=b.source;t.bindTexture(oe,A.__webglTexture,i.TEXTURE0+q);let ge=n.get(he);if(he.version!==ge.__version||re===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=je.getPrimaries(je.workingColorSpace),Fe=b.colorSpace===Gi?null:je.getPrimaries(b.colorSpace),Xe=b.colorSpace===Gi||le===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let te=w(b.image,!1,s.maxTextureSize);te=Oe(b,te);let fe=r.convert(b.format,b.colorSpace),L=r.convert(b.type),ne=E(b.internalFormat,fe,L,b.normalized,b.colorSpace,b.isVideoTexture);$e(oe,b);let K,pe=b.mipmaps,ce=b.isVideoTexture!==!0,de=ge.__version===void 0||re===!0,Ne=he.dataReady,Ye=S(b,te);if(b.isDepthTexture)ne=m(b.format===ki,b.type),de&&(ce?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,fe,L,null));else if(b.isDataTexture)if(pe.length>0){ce&&de&&t.texStorage2D(i.TEXTURE_2D,Ye,ne,pe[0].width,pe[0].height);for(let le=0,Fe=pe.length;le<Fe;le++)K=pe[le],ce?Ne&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,L,K.data):t.texImage2D(i.TEXTURE_2D,le,ne,K.width,K.height,0,fe,L,K.data);b.generateMipmaps=!1}else ce?(de&&t.texStorage2D(i.TEXTURE_2D,Ye,ne,te.width,te.height),Ne&&St(b,te,fe,L)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,fe,L,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ne,pe[0].width,pe[0].height,te.depth);for(let le=0,Fe=pe.length;le<Fe;le++)if(K=pe[le],b.format!==ti)if(fe!==null)if(ce){if(Ne)if(b.layerUpdates.size>0){let Xe=nd(K.width,K.height,b.format,b.type);for(let Me of b.layerUpdates){let ot=K.data.subarray(Me*Xe/K.data.BYTES_PER_ELEMENT,(Me+1)*Xe/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Me,K.width,K.height,1,fe,ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,te.depth,fe,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ne,K.width,K.height,te.depth,0,K.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,te.depth,fe,L,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ne,K.width,K.height,te.depth,0,fe,L,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ce&&de&&t.texStorage2D(i.TEXTURE_2D,Ye,ne,pe[0].width,pe[0].height);for(let le=0,Fe=pe.length;le<Fe;le++)K=pe[le],b.format!==ti?fe!==null?ce?Ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,K.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ne,K.width,K.height,0,K.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ne&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,L,K.data):t.texImage2D(i.TEXTURE_2D,le,ne,K.width,K.height,0,fe,L,K.data)}else if(b.isDataArrayTexture)if(ce){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,ne,te.width,te.height,te.depth),Ne)if(b.layerUpdates.size>0){let le=nd(te.width,te.height,b.format,b.type);for(let Fe of b.layerUpdates){let Xe=te.data.subarray(Fe*le/te.data.BYTES_PER_ELEMENT,(Fe+1)*le/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,te.width,te.height,1,fe,L,Xe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,L,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,fe,L,te.data);else if(b.isData3DTexture)ce?(de&&t.texStorage3D(i.TEXTURE_3D,Ye,ne,te.width,te.height,te.depth),Ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,L,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,fe,L,te.data);else if(b.isFramebufferTexture){if(de)if(ce)t.texStorage2D(i.TEXTURE_2D,Ye,ne,te.width,te.height);else{let le=te.width,Fe=te.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,ne,le,Fe,0,fe,L,null),le>>=1,Fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),te.parentNode!==le){le.appendChild(te),f.add(b),le.onpaint=Fe=>{let Xe=Fe.changedElements;for(let Me of f)Xe.includes(Me.image)&&(Me.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Xe=i.RGBA,Me=i.RGBA,ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xe,Me,ot,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ce&&de){let le=He(pe[0]);t.texStorage2D(i.TEXTURE_2D,Ye,ne,le.width,le.height)}for(let le=0,Fe=pe.length;le<Fe;le++)K=pe[le],ce?Ne&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,fe,L,K):t.texImage2D(i.TEXTURE_2D,le,ne,fe,L,K);b.generateMipmaps=!1}else if(ce){if(de){let le=He(te);t.texStorage2D(i.TEXTURE_2D,Ye,ne,le.width,le.height)}Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,L,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,fe,L,te);R(b)&&b.mipmapsAutoUpdate===!0&&T(oe),ge.__version=he.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}l(yt,"uploadTexture");function Ct(A,b,q){if(b.image.length!==6)return;let oe=st(A,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let he=n.get(re);if(re.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let ge=je.getPrimaries(je.workingColorSpace),ee=b.colorSpace===Gi?null:je.getPrimaries(b.colorSpace),te=b.colorSpace===Gi||ge===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let fe=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let Me=0;Me<6;Me++)!fe&&!L?ne[Me]=w(b.image[Me],!0,s.maxCubemapSize):ne[Me]=L?b.image[Me].image:b.image[Me],ne[Me]=Oe(b,ne[Me]);let K=ne[0],pe=r.convert(b.format,b.colorSpace),ce=r.convert(b.type),de=E(b.internalFormat,pe,ce,b.normalized,b.colorSpace),Ne=b.isVideoTexture!==!0,Ye=he.__version===void 0||oe===!0,le=re.dataReady,Fe=S(b,K);$e(i.TEXTURE_CUBE_MAP,b);let Xe;if(b.isDepthTexture){if(de=m(b.format===ki,b.type),Ye)if(Ne)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,K.width,K.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,K.width,K.height,0,pe,ce,null)}else if(fe){Ne&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,K.width,K.height);for(let Me=0;Me<6;Me++){Xe=ne[Me].mipmaps;for(let ot=0;ot<Xe.length;ot++){let Ut=Xe[ot];b.format!==ti?pe!==null?Ne?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,0,0,Ut.width,Ut.height,pe,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,de,Ut.width,Ut.height,0,Ut.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,0,0,Ut.width,Ut.height,pe,ce,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot,de,Ut.width,Ut.height,0,pe,ce,Ut.data)}}}else{if(Xe=b.mipmaps,Ne&&Ye){Xe.length>0&&Fe++;let Me=He(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,de,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ne[Me].width,ne[Me].height,pe,ce,ne[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,ne[Me].width,ne[Me].height,0,pe,ce,ne[Me].data);for(let ot=0;ot<Xe.length;ot++){let Ki=Xe[ot].image[Me].image;Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,0,0,Ki.width,Ki.height,pe,ce,Ki.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,de,Ki.width,Ki.height,0,pe,ce,Ki.data)}}else{Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe,ce,ne[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,pe,ce,ne[Me]);for(let ot=0;ot<Xe.length;ot++){let Ut=Xe[ot];Ne?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,0,0,pe,ce,Ut.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ot+1,de,pe,ce,Ut.image[Me])}}}R(b)&&b.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),he.__version=re.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}l(Ct,"uploadCubeTexture");function ct(A,b,q,oe,re,he){let ge=r.convert(q.format,q.colorSpace),ee=r.convert(q.type),te=E(q.internalFormat,ge,ee,q.normalized,q.colorSpace),fe=n.get(b),L=n.get(q);if(L.__renderTarget=b,!fe.__hasExternalTextures){let ne=Math.max(1,b.width>>he),K=Math.max(1,b.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,te,ne,K,b.depth,0,ge,ee,null):t.texImage2D(re,he,te,ne,K,0,ge,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,L.__webglTexture,0,gt(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,L.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(ct,"setupFrameBufferTexture");function _n(A,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let oe=b.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,he=m(b.stencilBuffer,re),ge=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(b),he,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(b),he,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{let oe=b.textures;for(let re=0;re<oe.length;re++){let he=oe[re],ge=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),te=E(he.internalFormat,ge,ee,he.normalized,he.colorSpace);ve(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(b),te,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(b),te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(_n,"setupRenderBufferStorage");function Nt(A,b,q){let oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(b.depthTexture);re.__renderTarget=b;let he=oe?b.depthTexture.image[0]:b.depthTexture.image;(!re.__webglTexture||he.width!==b.width||he.height!==b.height)&&(he.width=b.width,he.height=b.height,b.depthTexture.needsUpdate=!0),oe?_e(b.depthTexture,0):ue(b.depthTexture,0);let ge=re.__webglTexture,ee=gt(b),te=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,fe=b.depthTexture.format===ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ui)ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,te,ge,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,te,ge,0);else if(b.depthTexture.format===ki)ve(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,te,ge,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,fe,te,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(Nt,"setupDepthTexture");function Un(A){let b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let oe=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){let re=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",re)},"disposeEvent");oe.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=oe}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let oe=0;oe<6;oe++)Nt(b.__webglFramebuffer[oe],A,oe);else A.texture.mipmaps.length>0?Nt(b.__webglFramebuffer[0],A,0):Nt(b.__webglFramebuffer,A,0);else if(q){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=i.createRenderbuffer(),_n(b.__webglDepthbuffer[oe],A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),_n(b.__webglDepthbuffer,A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Un,"setupDepthRenderbuffer");function Fn(A,b,q){let oe=n.get(A);b!==void 0&&ct(oe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Un(A)}l(Fn,"rebindTextures");function On(A){let b=A.texture,q=n.get(A),oe=n.get(b);A.addEventListener("dispose",O),D(A);let re=A.textures,he=A.isWebGLCubeRenderTarget===!0,ge=re.length>1;if(ge||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=b.version,a.memory.textures++),he){q.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0){q.__webglFramebuffer[ee]=[];for(let te=0;te<b.mipmaps.length;te++)q.__webglFramebuffer[ee][te]=i.createFramebuffer()}else q.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)q.__webglFramebuffer[ee]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ee=0,te=re.length;ee<te;ee++){let fe=n.get(re[ee]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ee=0;ee<re.length;ee++){let te=re[ee];q.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ee]);let fe=r.convert(te.format,te.colorSpace),L=r.convert(te.type),ne=E(te.internalFormat,fe,L,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),K=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,ne,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,q.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),_n(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),$e(i.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)ct(q.__webglFramebuffer[ee][te],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else ct(q.__webglFramebuffer[ee],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);R(b)?T(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let ee=0,te=re.length;ee<te;ee++){let fe=re[ee],L=n.get(fe),ne=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,L.__webglTexture),$e(ne,fe),ct(q.__webglFramebuffer,A,fe,i.COLOR_ATTACHMENT0+ee,ne,0),R(fe)&&T(ne)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,oe.__webglTexture),$e(ee,b),b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)ct(q.__webglFramebuffer[te],A,b,i.COLOR_ATTACHMENT0,ee,te);else ct(q.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ee,0);R(b)?T(ee):b.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Un(A)}l(On,"setupRenderTarget");function F(A){let b=A.textures;for(let q=0,oe=b.length;q<oe;q++){let re=b[q];if(R(re)&&re.mipmapsAutoUpdate===!0){let he=P(A),ge=n.get(re).__webglTexture;t.bindTexture(he,ge),T(he),t.unbindTexture()}}}l(F,"updateRenderTargetMipmap");let Bn=[];function mt(A){if(A.samples>0){if(ve(A)===!1){let b=A.textures,q=A.width,oe=A.height,re=i.COLOR_BUFFER_BIT,he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),ee=b.length>1;if(ee)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let L=n.get(b[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,q,oe,0,0,q,oe,re,i.NEAREST),c===!0&&(Bn.length=0,Bn.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Bn.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let L=n.get(b[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(mt,"updateMultisampleRenderTarget");function gt(A){return Math.min(s.maxSamples,A.samples)}l(gt,"getRenderTargetSamples");function ve(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(ve,"useMultisampledRTT");function Rt(A){let b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}l(Rt,"updateVideoTexture");function Oe(A,b){let q=A.colorSpace,oe=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Pa&&q!==Gi&&(je.getTransfer(q)===at?(oe!==ti||re!==pn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",q)),b}l(Oe,"verifyColorSpace");function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}l(He,"getDimensions"),this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=se,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=Te,this.setTexture3D=De,this.setTextureCube=_e,this.rebindTextures=Fn,this.setupRenderTarget=On,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Un,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ve,this.dispose=B}l(mS,"WebGLTextures");function gS(i,e){function t(n,s=Gi){let r,a=je.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gh)return i.BYTE;if(n===Vh)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===ti)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===so||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Nc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fc)return r.COMPRESSED_R11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===so)return r.COMPRESSED_RG11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zc||n===kc||n===Gc||n===Vc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===eu||n===tu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===iu||n===ro||n===su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(gS,"WebGLUtils");var xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_S=`
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

}`,Df=class Df{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:xS,fragmentShader:_S,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(Df,"WebXRDepthSensing");var wf=Df,Nf=class Nf extends ui{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,_=null,y=typeof XRWebGLBinding<"u",g=new wf,x={},w=t.getContextAttributes(),R=null,T=null,P=[],E=[],m=new ke,S=null,D=null,I=new rn;I.viewport=new xt;let N=new rn;N.viewport=new xt;let O=[I,N],V=new nc,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=P[J];return ue===void 0&&(ue=new Ur,P[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=P[J];return ue===void 0&&(ue=new Ur,P[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=P[J];return ue===void 0&&(ue=new Ur,P[J]=ue),ue.getHandSpace()};function k(J){let ue=E.indexOf(J.inputSource);if(ue===-1)return;let Te=P[ue];Te!==void 0&&(Te.update(J.inputSource,J.frame,u||a),Te.dispatchEvent({type:J.type,data:J.inputSource}))}l(k,"onSessionEvent");function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",j);for(let J=0;J<P.length;J++){let ue=E[J];ue!==null&&(E[J]=null,P[J].disconnect(ue))}C=null,B=null,g.reset();for(let J in x)delete x[J];if(e.setRenderTarget(R),p=null,d=null,f=null,s=null,T=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}l(z,"onSessionEnd"),this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,De=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=w.stencil?ki:Ui,De=w.stencil?Xs:jn);let ze={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new bn(d.textureWidth,d.textureHeight,{format:ti,type:pn,depthTexture:new Oi(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new bn(p.framebufferWidth,p.framebufferHeight,{format:ti,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(J){for(let ue=0;ue<J.removed.length;ue++){let Te=J.removed[ue],De=E.indexOf(Te);De>=0&&(E[De]=null,P[De].disconnect(Te))}for(let ue=0;ue<J.added.length;ue++){let Te=J.added[ue],De=E.indexOf(Te);if(De===-1){for(let ze=0;ze<P.length;ze++)if(ze>=E.length){E.push(Te),De=ze;break}else if(E[ze]===null){E[ze]=Te,De=ze;break}if(De===-1)break}let _e=P[De];_e&&_e.connect(Te)}}l(j,"onInputSourcesChange");function X(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}l(X,"updateCamera"),this.updateCamera=function(J){if(s===null)return;let ue=J.near,Te=J.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),V.near=N.near=I.near=ue,V.far=N.far=I.far=Te,(C!==V.near||B!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),C=V.near,B=V.far),V.layers.mask=J.layers.mask|6,I.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let De=J.parent,_e=V.cameras;X(V,De);for(let ze=0;ze<_e.length;ze++)X(_e[ze],De);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,V,De)};function Q(J,ue,Te){Te===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ul*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}l(Q,"updateUserCamera"),this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(J){return x[J]};let se=null;function Se(J,ue){if(h=ue.getViewerPose(u||a),_=ue,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let De=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let Ie=0;Ie<Te.length;Ie++){let $e=Te[Ie],st=null;if(p!==null)st=p.getViewport($e);else{let St=f.getViewSubImage(d,$e);st=St.viewport,Ie===0&&(e.setRenderTargetTextures(T,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(T))}let qe=O[Ie];qe===void 0&&(qe=new rn,qe.layers.enable(Ie),qe.viewport=new xt,O[Ie]=qe),qe.matrix.fromArray($e.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray($e.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(st.x,st.y,st.width,st.height),Ie===0&&(V.matrix.copy(qe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(qe)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ie=f.getDepthInformation(Te[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ie=0;Ie<Te.length;Ie++){let $e=Te[Ie].camera;if($e){let st=x[$e];st||(st=new Wa,x[$e]=st);let qe=f.getCameraImage($e);st.sourceTexture=qe}}}}for(let Te=0;Te<P.length;Te++){let De=E[Te],_e=P[Te];De!==null&&_e!==void 0&&_e.update(De,ue,u||a)}se&&se(J,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),_=null}l(Se,"onAnimationFrame");let Le=new O0;Le.setAnimationLoop(Se),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}};l(Nf,"WebXRManager");var Ef=Nf,vS=new lt,Y0=new Ve;Y0.set(-1,0,0,0,1,0,0,0,1);function yS(i,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}l(t,"refreshTransformUniform");function n(g,x){x.color.getRGB(g.fogColor.value,jh(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}l(n,"refreshFogUniforms");function s(g,x,w,R,T){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),f(g,x)):x.isMeshPhongMaterial?(r(g,x),h(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),d(g,x),x.isMeshPhysicalMaterial&&p(g,x,T)):x.isMeshMatcapMaterial?(r(g,x),_(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),y(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?c(g,x,w,R):x.isSpriteMaterial?u(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}l(s,"refreshMaterialUniforms");function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===ln&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===ln&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let w=e.get(x),R=w.envMap,T=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Y0),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}l(r,"refreshUniformsCommon");function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}l(a,"refreshUniformsLine");function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}l(o,"refreshUniformsDash");function c(g,x,w,R){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*w,g.scale.value=R*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}l(c,"refreshUniformsPoints");function u(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}l(u,"refreshUniformsSprites");function h(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}l(f,"refreshUniformsToon");function d(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}l(d,"refreshUniformsStandard");function p(g,x,w){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ln&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function _(g,x){x.matcap&&(g.matcap.value=x.matcap)}l(_,"refreshUniformsMatcap");function y(g,x){let w=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}l(yS,"WebGLMaterials");function bS(i,e,t,n){let s={},r={};function a(w,R){let T=R.program;n.uniformBlockBinding(w,T,s[w.id])}l(a,"bind");function o(w,R){let T=s[w.id];T===void 0&&(_(w),T=c(w),s[w.id]=T,w.addEventListener("dispose",g));let P=R.program;n.updateUBOMapping(w,P);let E=e.render.frame;r[w.id]!==E&&(u(w),r[w.id]=E)}l(o,"update");function c(w){let R=i.createBuffer(),T=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,T,P),i.bindBuffer(i.UNIFORM_BUFFER,null),R}l(c,"createBuffer");function u(w){let R=s[w.id],T=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let E=0,m=T.length;E<m;E++){let S=T[E];if(Array.isArray(S))for(let D=0,I=S.length;D<I;D++)h(S[D],E,D,P);else h(S,E,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(w,R,T,P){if(d(w,R,T,P)===!0){let E=w.__offset,m=w.value;if(Array.isArray(m)){let S=0;for(let D=0;D<m.length;D++){let I=m[D],N=y(I,!0);f(I,w.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(m,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}l(h,"updateUniform");function f(w,R,T){typeof w=="number"||typeof w=="boolean"?R[T]=w:w.isMatrix3?(R[T]=w.elements[0],R[T+1]=w.elements[1],R[T+2]=w.elements[2],R[T+3]=0,R[T+4]=w.elements[3],R[T+5]=w.elements[4],R[T+6]=w.elements[5],R[T+7]=0,R[T+8]=w.elements[6],R[T+9]=w.elements[7],R[T+10]=w.elements[8],R[T+11]=0):ArrayBuffer.isView(w)?R.set(w.subarray(0,R.length-T),T):w.toArray(R,T)}l(f,"writeUniformValue");function d(w,R,T,P){let E=w.value,m=R+"_"+T;if(Array.isArray(E)){P[m]===void 0&&(P[m]=[]);let S=P[m],D=!1;for(let I=0;I<E.length;I++)p(E[I],S,I)===!0&&(D=!0);return D}return p(E,P,m)}l(d,"hasUniformChanged");function p(w,R,T){if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:ArrayBuffer.isView(w)?R[T]=w.slice():R[T]=w.clone(),!0;{let P=R[T];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[T]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(P.equals(w)===!1)return P.copy(w),!0}}return!1}l(p,"hasValueChanged");function _(w){let R=w.uniforms,T=0,P=16;for(let m=0,S=R.length;m<S;m++){let D=Array.isArray(R[m])?R[m]:[R[m]];for(let I=0,N=D.length;I<N;I++){let O=D[I],V=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(R[m])||Array.isArray(O.value),B=T;for(let z=0,j=V.length;z<j;z++){let X=V[z],Q=y(X,C),se=T%P,Se=se%Q.boundary,Le=se+Se;T+=Se,Le!==0&&P-Le<Q.storage&&(T+=P-Le),z===0&&(B=T),T+=Q.storage}let k=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new k((T-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let E=T%P;return E>0&&(T+=P-E),w.__size=T,w.__cache={},this}l(_,"prepareUniformsGroup");function y(w,R){let T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=16,T.storage=48):w.isMatrix4?(T.boundary=16,T.storage=64):w.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(T.boundary=16,T.storage=w.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",w),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}l(y,"getUniformSize");function g(w){let R=w.target;R.removeEventListener("dispose",g),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}l(g,"onUniformsGroupsDispose");function x(){for(let w in s)i.deleteBuffer(s[w]);s={},r={}}return l(x,"dispose"),{bind:a,update:o,dispose:x}}l(bS,"WebGLUniformsGroups");var MS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function SS(){return mi===null&&(mi=new Br(MS,16,16,pi,En),mi.name="DFG_LUT",mi.minFilter=kt,mi.magFilter=kt,mi.wrapS=kn,mi.wrapT=kn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}l(SS,"getDFGLUT");var Uf=class Uf{constructor(e={}){let{canvas:t=r0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=p,g=new Set([Cc,Ac,Tc]),x=new Set([pn,jn,Wr,Xs,wc,Ec]),w=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},P=null,E=null,m=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,V=null,C=null,B=null;this._outputColorSpace=Bt;let k=0,z=0,j=null,X=-1,Q=null,se=new xt,Se=new xt,Le=null,J=new Ue(0),ue=0,Te=t.width,De=t.height,_e=1,ze=null,Je=null,Ie=new xt(0,0,Te,De),$e=new xt(0,0,Te,De),st=!1,qe=new us,St=new Gl,yt=!1,Ct=!1,ct=new lt,_n=new G,Nt=new xt,Un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fn=!1;function On(){return j===null?_e:1}l(On,"getTargetPixelRatio");let F=n;function Bn(M,U){return t.getContext(M,U)}l(Bn,"getContext");let mt,gt,ve,Rt,Oe,He,A,b,q,oe,re,he,ge,ee,te,fe,L,ne,K,pe,ce,de,Ne;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){let U="webgl2";if(F=Bn(U,M),F===null)throw Bn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(M){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ge("WebGLRenderer: "+M.message),M}function Ye(){mt=new Nb(F),mt.init(),ce=new gS(F,mt),gt=new Sb(F,mt,e,ce),ve=new pS(F,mt),gt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),V=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),Rt=new Ob(F),Oe=new eS,He=new mS(F,mt,ve,Oe,gt,ce,Rt),A=new Db(I),b=new z_(F),de=new bb(F,b),q=new Ub(F,b,Rt,de),oe=new zb(F,q,b,de,Rt),ne=new Bb(F,gt,He),te=new wb(Oe),re=new jM(I,A,mt,gt,de,te),he=new yS(I,Oe),ge=new nS,ee=new lS(mt),L=new yb(I,A,ve,oe,_,c),fe=new fS(I,oe,gt),Ne=new bS(F,Rt,gt,ve),K=new Mb(F,mt,Rt),pe=new Fb(F,mt,Rt),Rt.programs=re.programs,I.capabilities=gt,I.extensions=mt,I.properties=Oe,I.renderLists=ge,I.shadowMap=fe,I.state=ve,I.info=Rt}l(Ye,"initGLContext"),y!==pn&&(D=new Gb(y,t.width,t.height,o,s,r));let le=new Ef(I,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(M){M!==void 0&&(_e=M,this.setSize(Te,De,!1))},this.getSize=function(M){return M.set(Te,De)},this.setSize=function(M,U,$=!0){if(le.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=M,De=U,t.width=Math.floor(M*_e),t.height=Math.floor(U*_e),$===!0&&(t.style.width=M+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Te*_e,De*_e).floor()},this.setDrawingBufferSize=function(M,U,$){Te=M,De=U,_e=$,t.width=Math.floor(M*$),t.height=Math.floor(U*$),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(y===pn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(se)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,U,$,W){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,U,$,W),ve.viewport(se.copy(Ie).multiplyScalar(On()).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,U,$,W){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,U,$,W),ve.scissor(Se.copy($e).multiplyScalar(On()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){ve.setScissorTest(st=M)},this.setOpaqueSort=function(M){ze=M},this.setTransparentSort=function(M){Je=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,$=!0){let W=0;if(M){let Y=!1;if(j!==null){let xe=j.texture.format;Y=g.has(xe)}if(Y){let xe=j.texture.type,Ae=x.has(xe),me=L.getClearColor(),we=L.getClearAlpha(),Pe=me.r,We=me.g,Ke=me.b;Ae?(w[0]=Pe,w[1]=We,w[2]=Ke,w[3]=we,F.clearBufferuiv(F.COLOR,0,w)):(R[0]=Pe,R[1]=We,R[2]=Ke,R[3]=we,F.clearBufferiv(F.COLOR,0,R))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),L.dispose(),ge.dispose(),ee.dispose(),He.dispose(),Oe.dispose(),A.dispose(),oe.dispose(),q.dispose(),de.dispose(),Ne.dispose(),re.dispose(),le.dispose(),le.removeEventListener("sessionstart",Gp),le.removeEventListener("sessionend",Vp),Ls.stop()};function Fe(M){M.preventDefault(),Da("WebGLRenderer: Context Lost."),N=!0}l(Fe,"onContextLost");function Xe(){Da("WebGLRenderer: Context Restored."),N=!1;let M=Rt.autoReset,U=fe.enabled,$=fe.autoUpdate,W=fe.needsUpdate,Y=fe.type;Ye(),Rt.autoReset=M,fe.enabled=U,fe.autoUpdate=$,fe.needsUpdate=W,fe.type=Y}l(Xe,"onContextRestore");function Me(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Me,"onContextCreationError");function ot(M){let U=M.target;U.removeEventListener("dispose",ot),Ut(U)}l(ot,"onMaterialDispose");function Ut(M){Ki(M),Oe.remove(M)}l(Ut,"deallocateMaterial");function Ki(M){let U=Oe.get(M).programs;U!==void 0&&(U.forEach(function($){re.releaseProgram($)}),M.isShaderMaterial&&re.releaseShaderCache(M))}l(Ki,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,U,$,W,Y,xe){U===null&&(U=Un);let Ae=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,me=Bx(M,U,$,W,Y);ve.setMaterial(W,Ae);let we=$.index,Pe=1;if(W.wireframe===!0){if(we=q.getWireframeAttribute($),we===void 0)return;Pe=2}let We=$.drawRange,Ke=$.attributes.position,Ce=We.start*Pe,Qe=(We.start+We.count)*Pe;xe!==null&&(Ce=Math.max(Ce,xe.start*Pe),Qe=Math.min(Qe,(xe.start+xe.count)*Pe)),we!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,we.count)):Ke!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Ke.count));let Et=Qe-Ce;if(Et<0||Et===1/0)return;de.setup(Y,W,me,$,we);let ht,ut=K;if(we!==null&&(ht=b.get(we),ut=pe,ut.setIndex(ht)),Y.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*On()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(Y.isLine){let Yt=W.linewidth;Yt===void 0&&(Yt=1),ve.setLineWidth(Yt*On()),Y.isLineSegments?ut.setMode(F.LINES):Y.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else Y.isPoints?ut.setMode(F.POINTS):Y.isSprite&&ut.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Yt=Y._multiDrawStarts,Re=Y._multiDrawCounts,nn=Y._multiDrawCount,rt=we?b.get(we).bytesPerElement:1,Ds=Oe.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<nn;Zt++)Ds.setValue(F,"_gl_DrawID",Zt),ut.render(Yt[Zt]/rt,Re[Zt])}else if(Y.isInstancedMesh)ut.renderInstances(Ce,Et,Y.count);else if($.isInstancedBufferGeometry){let Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,Yt);ut.renderInstances(Ce,Et,Re)}else ut.render(Ce,Et)};function kp(M,U,$,W){O!==null&&M.isNodeMaterial&&O.setObject(W,M),yt===!0&&te.setState(M,$,!1),M.transparent===!0&&M.side===di&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,va(M,U,W),M.side=gs,M.needsUpdate=!0,va(M,U,W),M.side=di):va(M,U,W)}l(kp,"prepareMaterial"),this.compile=function(M,U,$=null){$===null&&($=M),O!==null&&O.renderStart(M,U,$),E=ee.get($),E.init(U),S.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Ct=this.localClippingEnabled,yt=te.init(this.clippingPlanes,Ct),yt===!0&&te.setGlobalState(this.clippingPlanes,U),O!==null&&fe.render(E.state.shadowsArray,$,U);let W=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let xe=Y.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let me=xe[Ae];kp(me,$,U,Y),W.add(me)}else kp(xe,$,U,Y),W.add(xe)}),E=S.pop(),O!==null&&O.renderEnd(),W},this.compileAsync=function(M,U,$=null){let W=this.compile(M,U,$);return new Promise(Y=>{function xe(){if(W.forEach(function(Ae){let we=Oe.get(Ae).currentProgram;(we===void 0||we.isReady())&&W.delete(Ae)}),W.size===0){Y(M);return}setTimeout(xe,10)}l(xe,"checkMaterialsReady"),mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Wu=null;function Fx(M){Wu&&Wu(M)}l(Fx,"onAnimationFrame");function Gp(){Ls.stop()}l(Gp,"onXRSessionStart");function Vp(){Ls.start()}l(Vp,"onXRSessionEnd");let Ls=new O0;Ls.setAnimationLoop(Fx),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(M){Wu=M,le.setAnimationLoop(M),M===null?Ls.stop():Ls.start()},le.addEventListener("sessionstart",Gp),le.addEventListener("sessionend",Vp),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(M,U);let $=le.enabled===!0&&le.isPresenting===!0,W=D!==null&&(j===null||$)&&D.begin(I,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,j),E=ee.get(M,S.length),E.init(U),E.state.textureUnits=He.getTextureUnits(),S.push(E),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?St.setFromArrayCamera(U):qe.setFromProjectionMatrix(ct,Gn,U.reversedDepth),Ct=this.localClippingEnabled,yt=te.init(this.clippingPlanes,Ct),P=ge.get(M,m.length),P.init(),m.push(P),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&Xu(Ae,U,-1/0,I.sortObjects)}Xu(M,U,0,I.sortObjects),P.finish(),O!==null&&O.updateLights(E.state.lightsArray),I.sortObjects===!0&&P.sort(ze,Je),Fn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Fn&&L.addToRenderList(P,M),this.info.autoReset===!0&&this.info.reset(),yt===!0&&te.beginShadows();let Y=E.state.shadowsArray;if(fe.render(Y,M,U),yt===!0&&te.endShadows(),(W&&D.hasRenderPass())===!1){let Ae=P.opaque,me=P.transmissive;if(E.setupLights(),U.isArrayCamera){let we=U.cameras;if(me.length>0)for(let Pe=0,We=we.length;Pe<We;Pe++){let Ke=we[Pe];Wp(Ae,me,M,Ke)}Fn&&L.render(M);for(let Pe=0,We=we.length;Pe<We;Pe++){let Ke=we[Pe];Hp(P,M,Ke,Ke.viewport)}}else me.length>0&&Wp(Ae,me,M,U),Fn&&L.render(M),Hp(P,M,U)}j!==null&&z===0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j)),W&&D.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),de.resetDefaultState(),X=-1,Q=null,S.pop(),S.length>0?(E=S[S.length-1],He.setTextureUnits(E.state.textureUnits),yt===!0&&te.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?P=m[m.length-1]:P=null,O!==null&&O.renderEnd()};function Xu(M,U,$,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Ae=U.isArrayCamera?St:qe;if(!M.frustumCulled||M.intersectsFrustum(Ae)){W&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let me=oe.update(M),we=M.material;we.visible&&P.push(M,me,we,$,Nt.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let Ae=U.isArrayCamera?St:qe;if(!M.frustumCulled||M.intersectsFrustum(Ae)){let me=oe.update(M),we=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Nt.copy(me.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(we)){let Pe=me.groups;for(let We=0,Ke=Pe.length;We<Ke;We++){let Ce=Pe[We],Qe=we[Ce.materialIndex];Qe&&Qe.visible&&P.push(M,me,Qe,$,Nt.z,Ce,U)}}else we.visible&&P.push(M,me,we,$,Nt.z,null,U)}}}let xe=M.children;for(let Ae=0,me=xe.length;Ae<me;Ae++)Xu(xe[Ae],U,$,W)}l(Xu,"projectObject");function Hp(M,U,$,W){let{opaque:Y,transmissive:xe,transparent:Ae}=M;E.setupLightsView($),yt===!0&&te.setGlobalState(I.clippingPlanes,$),W&&ve.viewport(se.copy(W)),Y.length>0&&Qo(Y,U,$),xe.length>0&&Qo(xe,U,$),Ae.length>0&&Qo(Ae,U,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}l(Hp,"renderScene");function Wp(M,U,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ce=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new bn(1,1,{generateMipmaps:!0,type:Ce?En:pn,minFilter:zi,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let xe=E.state.transmissionRenderTarget[W.id],Ae=W.viewport||se;xe.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let me=I.getRenderTarget(),we=I.getActiveCubeFace(),Pe=I.getActiveMipmapLevel();I.setRenderTarget(xe),I.getClearColor(J),ue=I.getClearAlpha(),ue<1&&I.setClearColor(16777215,.5),I.clear(),Fn&&L.render($);let We=I.toneMapping;I.toneMapping=fi;let Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),yt===!0&&te.setGlobalState(I.clippingPlanes,W),Qo(M,$,W),He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,Et=U.length;Qe<Et;Qe++){let ht=U[Qe],{object:ut,geometry:Yt,material:Re,group:nn}=ht;if(Re.side===di&&ut.layers.test(W.layers)){let rt=Re.side;Re.side=ln,Re.needsUpdate=!0,Xp(ut,$,W,Yt,Re,nn),Re.side=rt,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe))}I.setRenderTarget(me,we,Pe),I.setClearColor(J,ue),Ke!==void 0&&(W.viewport=Ke),I.toneMapping=We}l(Wp,"renderTransmissionPass");function Qo(M,U,$){let W=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,xe=M.length;Y<xe;Y++){let Ae=M[Y],{object:me,geometry:we,group:Pe}=Ae,We=Ae.material;We.allowOverride===!0&&W!==null&&(We=W),me.layers.test($.layers)&&Xp(me,U,$,we,We,Pe)}}l(Qo,"renderObjects");function Xp(M,U,$,W,Y,xe){O!==null&&Y.isNodeMaterial&&O.setObject(M,Y),M.onBeforeRender(I,U,$,W,Y,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(I,U,$,W,M,xe),Y.transparent===!0&&Y.side===di&&Y.forceSinglePass===!1?(Y.side=ln,Y.needsUpdate=!0,I.renderBufferDirect($,U,W,Y,M,xe),Y.side=gs,Y.needsUpdate=!0,I.renderBufferDirect($,U,W,Y,M,xe),Y.side=di):I.renderBufferDirect($,U,W,Y,M,xe),M.onAfterRender(I,U,$,W,Y,xe)}l(Xp,"renderObject");function qp(M){let U=0;for(let $ of M)$.texture!==null&&U++;return U}l(qp,"countLightProbeGrids");function va(M,U,$){U.isScene!==!0&&(U=Un);let W=Oe.get(M),Y=E.state.lights,xe=E.state.shadowsArray,Ae=Y.state.version,me=re.getParameters(M,Y.state,xe,U,$,E.state.lightProbeGridArray),we=re.getProgramCacheKey(me),Pe=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let We=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=A.get(M.envMap||W.environment,We),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",ot),Pe=new Map,W.programs=Pe,W.programVariants=new Map);let Ke=Pe.get(we);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Ae)return Zp(M,me),Ke}else me.uniforms=re.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,$,me),M.onBeforeCompile(me,I),Ke=re.acquireProgram(me,we),Pe.set(we,Ke),W.uniforms=me.uniforms;let Ce=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=te.uniform),Zp(M,me),W.needsLights=kx(M),W.lightsStateVersion=Ae,W.needsLights&&(Ce.ambientLightColor.value=Y.state.ambient,Ce.lightProbe.value=Y.state.probe,Ce.sunLights.value=Y.state.sun,Ce.sunLightShadows.value=Y.state.sunShadow,Ce.directionalLights.value=Y.state.directional,Ce.directionalLightShadows.value=Y.state.directionalShadow,Ce.spotLights.value=Y.state.spot,Ce.spotLightShadows.value=Y.state.spotShadow,Ce.rectAreaLights.value=Y.state.rectArea,Ce.ltc_1.value=Y.state.rectAreaLTC1,Ce.ltc_2.value=Y.state.rectAreaLTC2,Ce.pointLights.value=Y.state.point,Ce.pointLightShadows.value=Y.state.pointShadow,Ce.hemisphereLights.value=Y.state.hemi,Ce.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ce.sunShadowCascade.value=Y.state.sunShadowCascade,Ce.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ce.spotLightMatrix.value=Y.state.spotLightMatrix,Ce.spotLightMap.value=Y.state.spotLightMap,Ce.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=qp(E.state.lightProbeGridArray),W.currentProgram=Ke,W.uniformsList=null,Ke}l(va,"getProgram");function Ox(M,U,$,W,Y){let xe=Oe.get(M),Ae=xe.currentProgram.id+","+W+","+Y,me=xe.programVariants.get(Ae);return me===void 0?(me=va(M,U,$),xe.programVariants.set(Ae,me)):(xe.currentProgram=me,xe.uniformsList=null,xe.outputColorSpace=W,xe.toneMapping=Y),me}l(Ox,"getProgramVariant");function Yp(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Xr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}l(Yp,"getUniformList");function Zp(M,U){let $=Oe.get(M);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}l(Zp,"updateCommonMaterialProperties");function Bx(M,U,$,W,Y){U.isScene!==!0&&(U=Un),He.resetTextureUnits();let xe=U.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,me=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:je.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=A.get(W.envMap||Ae,we),We=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!$.morphAttributes.position,Qe=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,ht=fi;W.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ht=I.toneMapping);let ut=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Yt=ut!==void 0?ut.length:0,Re=Oe.get(W),nn=E.state.lights;if(yt===!0&&(Ct===!0||M!==Q)){let bt=M===Q&&W.id===X;te.setState(W,M,bt)}let rt=!1,Ds=!1;W.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==nn.state.version||Y.isBatchedMesh&&Re.batching===!1||!Y.isBatchedMesh&&Re.batching===!0||Y.isBatchedMesh&&Re.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Re.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Y.isInstancedMesh&&Re.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Re.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Re.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Re.instancingMorph===!1&&Y.morphTexture!==null||Re.envMap!==Pe||W.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==te.numPlanes||Re.numIntersection!==te.numIntersection)||Re.vertexAlphas!==We||Re.vertexTangents!==Ke||Re.morphTargets!==Ce||Re.morphNormals!==Qe||Re.morphColors!==Et||Re.morphTargetsCount!==Yt||Re.numLightProbeGrids!==qp(E.state.lightProbeGridArray)?rt=!0:(Re.outputColorSpace!==me||Re.toneMapping!==ht)&&(Ds=!0):(rt=!0,Re.__version=W.version);let Zt=Re.currentProgram;(rt===!0||Ds===!0)&&(Zt=Ds===!0?Ox(W,U,Y,me,ht):va(W,U,Y),O&&W.isNodeMaterial&&O.onUpdateProgram(W,Zt,Re));let jo=!1,Qi=!1,Ns=!1,nt=Zt.getUniforms(),Ht=Re.uniforms;if(ve.useProgram(Zt.program)&&(jo=!0,Qi=!0,Ns=!0),W.id!==X&&(X=W.id,Qi=!0),jo||Q!==M){ve.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),nt.setValue(F,"projectionMatrix",M.projectionMatrix),nt.setValue(F,"viewMatrix",M.matrixWorldInverse);let Ft=nt.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,_n.setFromMatrixPosition(M.matrixWorld)),gt.logarithmicDepthBuffer&&nt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&nt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Qi=!0,Ns=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&nt.setValue(F,"sunShadowMap",nn.state.sunShadowMap,He),nn.state.directionalShadowMap.length>0&&nt.setValue(F,"directionalShadowMap",nn.state.directionalShadowMap,He),nn.state.spotShadowMap.length>0&&nt.setValue(F,"spotShadowMap",nn.state.spotShadowMap,He),nn.state.pointShadowMap.length>0&&nt.setValue(F,"pointShadowMap",nn.state.pointShadowMap,He)),Y.isSkinnedMesh){nt.setOptional(F,Y,"bindMatrix"),nt.setOptional(F,Y,"bindMatrixInverse");let bt=Y.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),nt.setValue(F,"boneTexture",bt.boneTexture,He))}Y.isBatchedMesh&&(nt.setOptional(F,Y,"batchingTexture"),nt.setValue(F,"batchingTexture",Y._matricesTexture,He),nt.setOptional(F,Y,"batchingIdTexture"),nt.setValue(F,"batchingIdTexture",Y._indirectTexture,He),nt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&nt.setValue(F,"batchingColorTexture",Y._colorsTexture,He));let Yn=$.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ne.update(Y,$,Zt),(Qi||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,nt.setValue(F,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Ht.envMapIntensity.value=U.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=SS()),Qi){if(nt.setValue(F,"toneMappingExposure",I.toneMappingExposure),Re.needsLights&&zx(Ht,Ns),xe&&W.fog===!0&&he.refreshFogUniforms(Ht,xe),he.refreshMaterialUniforms(Ht,W,_e,De,E.state.transmissionRenderTarget[M.id]),Re.needsLights&&Re.numLightProbeGrids>0){let bt=T,Ft=0;for(let Ti of E.state.lightProbeGridArray)Ti.texture!==null&&(bt.textures[Ft]=Ti.texture,bt.min[Ft]=Ti.boundingBox.min,bt.max[Ft]=Ti.boundingBox.max,bt.resolution[Ft]=Ti.resolution,Ft++);for(let Ti in bt)bt[Ti].length=Ft;Ht.probesSH.value=bt.textures,Ht.probesMin.value=bt.min,Ht.probesMax.value=bt.max,Ht.probesResolution.value=bt.resolution}Xr.upload(F,Yp(Re),Ht,He)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xr.upload(F,Yp(Re),Ht,He),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&nt.setValue(F,"center",Y.center),nt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),nt.setValue(F,"normalMatrix",Y.normalMatrix),nt.setValue(F,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let bt=W.uniformsGroups;for(let Ft=0,Ti=bt.length;Ft<Ti;Ft++){let Jp=bt[Ft];Ne.update(Jp,Zt),Ne.bind(Jp,Zt)}}return Zt}l(Bx,"setProgram");function zx(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}l(zx,"markUniformsLightsNeedsUpdate");function kx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(kx,"materialNeedsLights"),this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,U,$){let W=Oe.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Oe.get(M.texture).__webglTexture=U,Oe.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let $=Oe.get(M);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,$=0){j=M,k=U,z=$;let W=null,Y=!1,xe=!1;if(M){let me=Oe.get(M);if(me.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),se.copy(M.viewport),Se.copy(M.scissor),Le=M.scissorTest,ve.viewport(se),ve.scissor(Se),ve.setScissorTest(Le),X=-1;return}else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(M);else if(me.__hasExternalTextures)He.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let We=M.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&Oe.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(M)}}let we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);let Pe=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?W=Pe[U][$]:W=Pe[U],Y=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?W=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[$]:W=Pe,se.copy(M.viewport),Se.copy(M.scissor),Le=M.scissorTest}else se.copy(Ie).multiplyScalar(_e).floor(),Se.copy($e).multiplyScalar(_e).floor(),Le=st;if($!==0&&(W=V),ve.bindFramebuffer(F.FRAMEBUFFER,W)&&ve.drawBuffers(M,W),ve.viewport(se),ve.scissor(Se),ve.setScissorTest(Le),Y){let me=Oe.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,$)}else if(xe){let me=U;for(let we=0;we<M.textures.length;we++){let Pe=Oe.get(M.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Pe.__webglTexture,$,me)}}else if(M!==null&&$!==0){let me=Oe.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,$)}X=-1};function $p(M){let U=Oe.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=gt.textureFormatReadable(M.format),U.__typeReadable=gt.textureTypeReadable(M.type)),U}l($p,"getReadableState"),this.readRenderTargetPixels=function(M,U,$,W,Y,xe,Ae,me=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we){ve.bindFramebuffer(F.FRAMEBUFFER,we);try{let Pe=M.textures[me],We=Pe.format,Ke=Pe.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);let Ce=$p(Pe);if(Ce.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&$>=0&&$<=M.height-Y&&F.readPixels(U,$,W,Y,ce.convert(We),ce.convert(Ke),xe)}finally{let Pe=j!==null?Oe.get(j).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,U,$,W,Y,xe,Ae,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we)if(U>=0&&U<=M.width-W&&$>=0&&$<=M.height-Y){ve.bindFramebuffer(F.FRAMEBUFFER,we);let Pe=M.textures[me],We=Pe.format,Ke=Pe.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);let Ce=$p(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(U,$,W,Y,ce.convert(We),ce.convert(Ke),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Et=j!==null?Oe.get(j).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,Et);let ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await o0(F,ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Qe),F.deleteSync(ht),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,$=0){let W=Math.pow(2,-$),Y=Math.floor(M.image.width*W),xe=Math.floor(M.image.height*W),Ae=U!==null?U.x:0,me=U!==null?U.y:0;He.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ae,me,Y,xe),ve.unbindTexture()},this.copyTextureToTexture=function(M,U,$=null,W=null,Y=0,xe=0){let Ae,me,we,Pe,We,Ke,Ce,Qe,Et,ht=M.isCompressedTexture?M.mipmaps[xe]:M.image;if($!==null)Ae=$.max.x-$.min.x,me=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,We=$.min.y,Ke=$.isBox3?$.min.z:0;else{let nt=Math.pow(2,-Y);Ae=Math.floor(ht.width*nt),me=Math.floor(ht.height*nt),M.isDataArrayTexture?we=ht.depth:M.isData3DTexture?we=Math.floor(ht.depth*nt):we=1,Pe=0,We=0,Ke=0}W!==null?(Ce=W.x,Qe=W.y,Et=W.z):(Ce=0,Qe=0,Et=0);let ut=ce.convert(U.format),Yt=ce.convert(U.type),Re;U.isData3DTexture?(He.setTexture3D(U,0),Re=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Re=F.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Re=F.TEXTURE_2D),ve.activeTexture(F.TEXTURE0),ve.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),ve.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ve.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let nn=ve.getParameter(F.UNPACK_ROW_LENGTH),rt=ve.getParameter(F.UNPACK_IMAGE_HEIGHT),Ds=ve.getParameter(F.UNPACK_SKIP_PIXELS),Zt=ve.getParameter(F.UNPACK_SKIP_ROWS),jo=ve.getParameter(F.UNPACK_SKIP_IMAGES);ve.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),ve.pixelStorei(F.UNPACK_SKIP_ROWS,We),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);let Qi=M.isDataArrayTexture||M.isData3DTexture,Ns=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let nt=Oe.get(M),Ht=Oe.get(U),Yn=Oe.get(nt.__renderTarget),bt=Oe.get(Ht.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,Yn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ft=0;Ft<we;Ft++)Qi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(M).__webglTexture,Y,Ke+Ft),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,xe,Et+Ft)),F.blitFramebuffer(Pe,We,Pe+Ae,We+me,Ce,Qe,Ce+Ae,Qe+me,F.DEPTH_BUFFER_BIT,F.NEAREST);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||Oe.has(M)){let nt=Oe.get(M),Ht=Oe.get(U);ve.bindFramebuffer(F.READ_FRAMEBUFFER,C),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Yn=0;Yn<we;Yn++)Qi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nt.__webglTexture,Y,Ke+Yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nt.__webglTexture,Y),Ns?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,xe,Et+Yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,xe),Y!==0?F.blitFramebuffer(Pe,We,Pe+Ae,We+me,Ce,Qe,Ce+Ae,Qe+me,F.COLOR_BUFFER_BIT,F.NEAREST):Ns?F.copyTexSubImage3D(Re,xe,Ce,Qe,Et+Yn,Pe,We,Ae,me):F.copyTexSubImage2D(Re,xe,Ce,Qe,Pe,We,Ae,me);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ns?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Re,xe,Ce,Qe,Et,Ae,me,we,ut,Yt,ht.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,xe,Ce,Qe,Et,Ae,me,we,ut,ht.data):F.texSubImage3D(Re,xe,Ce,Qe,Et,Ae,me,we,ut,Yt,ht):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,Ce,Qe,Ae,me,ut,Yt,ht.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,Ce,Qe,ht.width,ht.height,ut,ht.data):F.texSubImage2D(F.TEXTURE_2D,xe,Ce,Qe,Ae,me,ut,Yt,ht);ve.pixelStorei(F.UNPACK_ROW_LENGTH,nn),ve.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),ve.pixelStorei(F.UNPACK_SKIP_PIXELS,Ds),ve.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),ve.pixelStorei(F.UNPACK_SKIP_IMAGES,jo),xe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Re),ve.unbindTexture()},this.initRenderTarget=function(M){Oe.get(M).__webglFramebuffer===void 0&&He.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){k=0,z=0,j=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};l(Uf,"WebGLRenderer");var uu=Uf;function $0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Pt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let _ in f.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(f.attributes[_]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let _ in f.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(f.morphAttributes[_]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=f.index.count;else if(f.attributes.position!==void 0)_=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,_,h),u+=_}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Z0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let _=Z0(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}l($0,"mergeGeometries");function Z0(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let _=0;_<t;_++){let y=h.getComponent(d,_);o.setComponent(d+f,_,y)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}l(Z0,"mergeAttributes");var J0="#c79a72",wS="#5a4a3a";var Qt="#7a5532",Bf="#5f6266",K0="#8a8f96",ni="#5d6447",Ff="#e8e0cc",eg="#6e4b2f",Zs="#8a8580",Q0="#5b3e27",Yr="#7d858c",ES=new G(0,1,0),be=new Vn(1,1,1),Gt=new Kn(.5,.5,1,10),$s=new Qn(.5,1,10),Zr=new ds(.5,10,8),kf=class kf{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+c,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};l(kf,"Parts");var Vt=kf,TS=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:Zr,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:$s,colour:Bf,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:be,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Gt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Zr,colour:ni,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),AS=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:Gt,colour:Qt,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Gt,colour:Qt,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:$s,colour:Bf,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Gt,colour:Qt,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:$s,colour:K0,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:be,colour:K0,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:be,colour:Qt,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Gt,colour:Qt,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:be,colour:i==="rifle"?"#3a3a3a":Qt,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:be,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:be,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Gt,colour:Qt,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Gt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),CS={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},zf=l((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Vt,a=s===void 0?void 0:CS[s],o=a?.coat??(i==="modern"?ni:t[0]),c=a?.legs??(i==="ancient"?J0:i==="modern"?ni:wS);return n&&(r.add({shape:be,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:be,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:be,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:be,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:be,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:be,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Zr,colour:J0,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:Zr,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:Zr,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):TS(i,t,r),s==="parachute"&&r.add({shape:be,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),AS(e,i,t,r),r},"person"),j0=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Of=l((i=eg)=>new Vt().add({shape:be,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:be,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:be,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:be,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),RS=l((i,e,t)=>new Vt().addAll(Of(),[0,0,0]).add({shape:be,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(zf(i,e,t,{legs:!1}),[0,.04,0]),"rider"),PS=l(i=>new Vt().add({shape:be,colour:Zs,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:be,colour:Zs,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Gt,colour:Zs,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:be,colour:Zs,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:be,colour:Zs,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:be,colour:Zs,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:be,colour:Zs,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:be,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:be,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),jt=l((i,e=.05)=>({shape:Gt,colour:Qt,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),IS=l((i,e,t)=>{if(e==="chariot")return new Vt().addAll(Of(),[0,0,.09]).add({shape:be,colour:Qt,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:be,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(jt([-.042,.035,-.045],.065)).add(jt([.042,.035,-.045],.065)).addAll(zf(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Vt().addAll(Of(t==="ancient"?"#8a7a64":eg),[0,0,.1]).add({shape:be,colour:Qt,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:be,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(jt([-.042,.03,-.03])).add(jt([.042,.03,-.03])).add(jt([-.042,.03,-.09])).add(jt([.042,.03,-.09]));return e==="wagon"?n.add({shape:Gt,colour:Ff,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:be,colour:Ff,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:be,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:be,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),LS=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Vt().add({shape:be,colour:Qt,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:be,colour:Qt,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:be,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(jt([-.045,.03,.04],.045)).add(jt([.045,.03,.04],.045)).add(jt([-.045,.03,-.04],.045)).add(jt([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?ni:Bf;return new Vt().add({shape:Gt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:be,colour:i==="modern"?ni:Qt,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:be,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(jt([-.04,.035,0],.07)).add(jt([.04,.035,0],.07))},"siege"),DS=l((i,e,t)=>{if(i==="industrial")return new Vt().add({shape:be,colour:Yr,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:be,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(jt([-.045,.025,.06],.045)).add(jt([.045,.025,.06],.045)).add(jt([-.045,.025,-.06],.045)).add(jt([.045,.025,-.06],.045));let n=new Vt().add({shape:be,colour:ni,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:be,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:be,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:be,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:be,colour:ni,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Gt,colour:ni,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:be,colour:ni,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),NS=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Vt;switch(i.hull){case"oars":case"sail":{r.add({shape:be,colour:Q0,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:$s,colour:Q0,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:be,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;r.add({shape:Gt,colour:Qt,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:be,colour:o===0?e[1]:Ff,at:[0,.16,c],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:be,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:be,colour:Qt,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:be,colour:Qt,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Gt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:be,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:be,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:be,colour:Yr,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:be,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:be,colour:Yr,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:be,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:be,colour:i.era==="industrial"?"#4a4a48":Yr,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:$s,colour:i.era==="industrial"?"#4a4a48":Yr,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:be,colour:Yr,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Gt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:be,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:be,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Gt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:be,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),US=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Vt().add({shape:Gt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:$s,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:be,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:be,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:be,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:be,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),FS=l(i=>new Vt().add({shape:Zr,colour:ni,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:be,colour:ni,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:be,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:be,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:be,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),OS=l((i,e)=>{let t=e?1.4:1;return new Vt().add({shape:Gt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:$s,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:be,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:be,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),BS=l((i,e)=>{switch(i.shape){case"foot":{let t=new Vt;return j0(i.squad).forEach(([n,s],r)=>t.addAll(zf(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Vt;return j0(i.squad).forEach(([n,s])=>t.addAll(RS(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return PS(e);case"cart":return IS(e,i.cart??"wagon",i.era);case"siege":return LS(i.era,e,i.large===!0);case"vehicle":return DS(i.era,e,i.large===!0);case"ship":return NS(i,e);case"aircraft":return US(i,e);case"helicopter":return FS(e);default:return OS(e,i.large===!0)}},"figureParts"),zS=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new lt().compose(new G(...i),new an().setFromAxisAngle(ES,n).multiply(new an().setFromEuler(new Mn(...t))),new G(...e)),"partMatrix"),tg=l((i,e)=>{let t=BS(i,e).parts.map(s=>{let{shape:r,colour:a}=s,o=r.clone(),c=new Ue(a),u=o.getAttribute("position").count,h=new Float32Array(u*3);for(let f=0;f<u;f++)h.set([c.r,c.g,c.b],f*3);return o.applyMatrix4(zS(s)),o.setAttribute("color",new Mt(h,3)),o}),n=$0(t)??new Pt;return t.forEach(s=>s.dispose()),n.computeBoundingBox(),n.computeBoundingSphere(),n},"figureGeometry");var Xt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),ho=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Tn=l((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),fo=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),Gf=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),ng={Warrior:Xt("ancient","club"),Spearman:Xt("ancient","spear"),Swordman:Xt("ancient","sword"),Archer:Xt("ancient","bow"),Horseman:ho("ancient","spear"),Chariot:Gf("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Tn("ancient","oars"),Settlers:Gf("ancient","wagon"),Diplomat:Xt("ancient","case",1),Caravan:Gf("ancient","goods"),Explorer:Xt("ancient","pack",1),Pikeman:Xt("medieval","pike"),Knight:ho("medieval","lance"),Crusader:ho("medieval","sword"),Fanatic:Xt("medieval","sword"),Sail:Tn("medieval","sail"),Musketman:Xt("renaissance","musket"),Dragoon:ho("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Tn("renaissance","sail",!0,1),Galleon:Tn("renaissance","sail",!0),Rifleman:Xt("industrial","rifle"),AlpineTrooper:{...Xt("industrial","rifle"),dress:"snow"},Partisan:{...Xt("industrial","rifle"),dress:"irregular"},Cavalry:ho("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Xt("industrial","none",2),Ironclad:Tn("industrial","steam",!1,1),Transport:Tn("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Xt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Xt("modern","rifle"),Paratrooper:{...Xt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Tn("modern","steam",!1,1),Cruiser:Tn("modern","steam",!0,2),MissileCruiser:Tn("modern","steam",!0,1,!0),Battleship:Tn("modern","steam",!0,3),Submarine:Tn("modern","submarine"),Carrier:Tn("modern","carrier",!0),Fighter:fo("modern"),StealthFighter:fo("modern",!1,!0),Bomber:fo("modern",!0),StealthBomber:fo("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},ig=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(ng,i)?ng[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Tn("industrial","steam"):e.includes("Air")?fo("modern"):Xt("ancient","spear")),"unitLook");var sg=1.5,lg=.03,cg="#b5ab98",kS="#8d8577",ug="#fff4b0",GS=.04,pu=.004,Vf=.018,rg=.01,ag=.022,og=.03,hg=.03,gu=.002,VS="#4caf50",HS="#e0b030",WS="#d04030",Js,Ks,Qs,js,Vi,Hf=class Hf{constructor(){ie(this,Js,new Map);ie(this,Ks,new Map);ie(this,Qs,new Map);ie(this,js,new Map);ie(this,Vi,null);this.figureMaterial=new Bi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={stand:new Kn(.19,.2,lg,28),bank:new Gs(.22,.014,4,32),ring:new Gs(.23,.018,8,36),building:new Vn(1,1,1),roof:new Qn(.75,.5,4),wall:new Gs(.36,.025,6,24)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=v(this,Js).get(n);return s===void 0&&(s=new Bi({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),v(this,Js).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=v(this,Qs).get(n);return s===void 0&&(s=tg(e,t),v(this,Qs).set(n,s)),s}plain(e){let t=v(this,js).get(e);return t===void 0&&(t=new cs({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),v(this,js).set(e,t)),t}pointer(){if(v(this,Vi)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=ug,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new zr(e);n.colorSpace=Bt,Z(this,Vi,new cs({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return v(this,Vi)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=v(this,Ks).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new zr(a);h.colorSpace=Bt,r=new cs({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),v(this,Ks).set(s,r)}return r}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),v(this,Qs).forEach(e=>e.dispose()),this.figureMaterial.dispose(),v(this,js).forEach(e=>e.dispose()),v(this,Vi)?.map?.dispose(),v(this,Vi)?.dispose(),v(this,js).clear(),Z(this,Vi,null),v(this,Js).forEach(e=>e.dispose()),v(this,Ks).forEach(e=>{e.map?.dispose(),e.dispose()}),v(this,Js).clear(),v(this,Ks).clear(),v(this,Qs).clear()}};Js=new WeakMap,Ks=new WeakMap,Qs=new WeakMap,js=new WeakMap,Vi=new WeakMap,l(Hf,"MarkerKit");var _u=Hf,dg=l(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),xs=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),mu=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),XS=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),qS=3,YS=4,po=l((i,e,t,n,s=qS)=>{let r=new Ga(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),fg=l((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return po(i,e*s,e,t)},"label"),xu=[0,.36,0],ZS=l((i,e)=>{let t=new fn,{building:n,roof:s,wall:r}=i.geometries,a=i.material(cg),o=i.material(e.colours[0]),c=Math.min(12,2+Math.ceil(e.size/2));for(let u=0;u<c;u++){let h=u/c*Math.PI*2+mu(e.name,1)*6,f=u===0?0:.12+mu(e.name,u+2)*.18,d=.07+mu(e.name,u+20)*.05,p=(u===0?.13:.05)+mu(e.name,u+40)*.05,_=Math.cos(h)*f,y=Math.sin(h)*f,g=new ft(n,a),x=new ft(s,o);g.scale.set(d,p,d),g.position.set(_,p/2,y),x.scale.set(d,d*.8,d),x.position.set(_,p+d*.2,y),x.rotation.y=Math.PI/4,t.add(g,x)}if(e.walled){let u=new ft(r,i.material(kS));u.rotation.x=Math.PI/2,u.position.y=.02,u.scale.set(1,1,2.5),t.add(u)}return t.add(xs(fg(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],dg(e.colours[0])),hg,0),...xu)),t},"drawCity"),$S=l((i,e,t=null)=>{let n=new fn,{stand:s,bank:r,ring:a}=i.geometries,o=ig(e.type,e.kinds),c=o.shape==="ship",u=c?0:lg,h=i.figure(o,e.colours),f=u+(h.boundingBox?.max.y??.2)*sg,d=t?.at??[0,f+GS,0],p=e.health!==null,_=(t?.over??0)+(p?pu+gu:0),y=_+rg+gu,g=XS(e),x=y+(g===""?0:ag+gu);c||n.add(xs(new ft(s,i.material(e.colours[1])),0,u/2,0));let w=new ft(h,i.figureMaterial);if(w.scale.setScalar(sg),w.rotation.y=e.facing,n.add(xs(w,0,u,0)),e.fortified){let R=new ft(r,i.material(cg));R.rotation.x=Math.PI/2,R.scale.set(1,1,2.5),R.position.y=u+.015,n.add(R)}if(e.health!==null){let R=Math.max(0,Math.min(1,e.health));if(n.add(xs(po(i.plain("#202020"),Vf,pu,t?.over??0),...d)),R>0){let T=po(i.plain(R>.5?VS:R>.25?HS:WS),Vf*R,pu*.6,(t?.over??0)+pu*.2);T.center.x=1/(2*R),n.add(xs(T,...d))}}if(n.add(xs(po(i.plain(e.colours[0]),Vf,rg,_),...d)),g!==""&&n.add(xs(fg(i.label(g,e.colours[0],dg(e.colours[0])),ag,y),...d)),e.active){let R=new ft(a,i.material(ug,!0));R.rotation.x=Math.PI/2,R.position.y=.01,n.add(R,xs(po(i.pointer(),og,og,x,YS),...d))}return n},"drawUnit"),vu="unit",pg=l((i,e)=>{let t=new fn;if(e.city!==null&&t.add(ZS(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=$S(i,e.unit,e.city===null?null:{at:[xu[0],xu[1],xu[2]-n],over:hg+gu});s.name=vu,s.position.z=n,t.add(s)}return t},"drawMarker");var _s=l(i=>i*Math.PI/180,"degrees"),JS=_s(25),KS=_s(80),QS=5,jS=90,ew=1.12,mo=_s(40),Xf=_s(45),tw={above:{yaw:0,pitch:_s(80)},classic:{yaw:0,pitch:_s(55)},isometric:{yaw:_s(45),pitch:_s(30)}};var mg=l(i=>({focus:i,...tw.classic,distance:24}),"defaultOrbit"),Wf=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),gg=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),er=l(i=>({...i,yaw:gg(i.yaw),pitch:Wf(i.pitch,JS,KS),distance:Wf(i.distance,QS,jS)}),"clampOrbit"),Jr=l((i,e)=>er({...i,distance:i.distance/ew**e}),"zoomed"),yu=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),bu=l((i,e)=>{let{forward:t}=yu(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),qf=l((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:c}=yu(i),u=bu(i,e),h=[t-u[0],n-u[1],s-u[2]],f=l(_=>(h[0]??0)*_[0]+(h[1]??0)*_[1]+(h[2]??0)*_[2],"dot"),d=f(a),p=Math.tan(mo/2);return d<=1e-6?null:[f(o)/(d*p*r),f(c)/(d*p)]},"toScreen"),Yf=l((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=yu(i),c=Math.tan(mo/2);return{from:bu(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*c*s*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),$r=l((i,e,t,n,s=e)=>{let{from:r,direction:a}=Yf(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),xg=l((i,e,t,n,s)=>{let r=$r(i,e,t,s),a=$r(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(mo/2),{right:h}=yu(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),_g=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:gg(i.yaw),focus:[n(s,e.u),e.v===null?Wf(r,0,t):n(r,e.v)]}},"settled"),vg=l((i,e,t,n,s)=>{let r=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+r(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+r(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(s??r(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),Mu=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var nw=new Ue("#3f8a8c"),iw=new Ue("#173a52"),sw=new Ue("#e8eeee"),yg=`
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
`,rw=`
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
`,vs,Hn,An,$f=class $f{constructor(e,t){ie(this,vs);ie(this,Hn);ie(this,An);Z(this,vs,e),Z(this,Hn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<v(this,Hn).length;s+=2)v(this,Hn)[s]=hi.toHalfFloat(0),v(this,Hn)[s+1]=hi.toHalfFloat(1);Z(this,An,new Br(v(this,Hn),e.columns,e.rows,pi,En)),v(this,An).wrapS=ks,v(this,An).wrapT=e.wrapsV?ks:kn,v(this,An).magFilter=kt,v(this,An).minFilter=kt,v(this,An).needsUpdate=!0;let n=new Sn({uniforms:ao.merge([ye.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:nw.clone()},deep:{value:iw.clone()},foam:{value:sw.clone()},sky:{value:t.clone()},sunDirection:{value:new G(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:yg,fragmentShader:rw,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=v(this,An),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new ft(new hs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=v(this,vs),a=Math.round(e.u/s),o=Math.round(e.v/r),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;v(this,Hn)[d]=hi.toHalfFloat(e.positions[u*3+1]??0),v(this,Hn)[d+1]=hi.toHalfFloat(e.unseen[u]??0)}}v(this,An).needsUpdate=!0}height(e,t){return hi.fromHalfFloat(v(this,Hn)[(t*v(this,vs).columns+e)*2]??0)}unseen(e,t){return hi.fromHalfFloat(v(this,Hn)[(t*v(this,vs).columns+e)*2+1]??0)>.5}texture(){return v(this,An)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=v(this,vs).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),v(this,An).dispose()}};vs=new WeakMap,Hn=new WeakMap,An=new WeakMap,l($f,"Water");var Zf=$f,bg=Zf,aw=`
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
`,ow=.18,go,Jf=class Jf{constructor(e,t){ie(this,go);Z(this,go,t.wrapsV);let n=new Sn({uniforms:ao.merge([ye.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:yg,fragmentShader:aw,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new ft(new hs(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=v(this,go)&&e}follow(e,t,n){this.mesh.position.set(e,ow,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};go=new WeakMap,l(Jf,"Clouds");var Su=Jf;var jf=l((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/uw)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),wu=l(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),lw=l((i,e,t)=>i.unit?.id===e?Eg(i,t):wu(i),"unitOnMarkerAt"),Eg=l((i,e)=>{let[t,n,s]=wu(i),[r,a,o]=jf(i.slide,e)??[0,0,0];return[t+r,n+a,s+o]},"unitDrawnAt"),cw=l((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||jf(i.slide,t)===null)return;let n=Eg(i,t),s=wu(e);return{from:[n[0]-s[0],n[1]-s[1],n[2]-s[2]],started:t}},"carriedSlide"),Kf=l((i,e)=>{if(i.slide===void 0)return!1;let t=jf(i.slide,e),[n,s,r]=t??[0,0,0],[a,o,c]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(vu)?.position.set(a+n,o+s,c+r)),t!==null},"slideAlong"),uw=260,Qf=10466244,hw=14082796,dw=5984576,fw=16773336,Mg=l((i,e,t)=>{let n=l((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),pw=l(i=>[new dn(new G(0,0,1),0),new dn(new G(0,0,-1),i)],"polesAt"),mw=l((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),Sg=2048,wg=Math.hypot(30,40,20),Tg=l((i,{period:e,ground:t})=>{let n=new uu({antialias:!0,canvas:i}),s=new Oa,r=new rn(mo*180/Math.PI,1,.1,400),a=new fn,o=new Bi({roughness:.92,vertexColors:!0}),c=new Ja(fw,2.6),u=new Map,h=new Map,f=new Bi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),d=t.rows*t.spacingV,p=pw(d),_=new Map,y=new Set,g=new fn,x=new _u,w=new bg(t,new Ue(Qf)),R=new Su(w.texture(),t),T=new Fa(Qf,30,110),P=[[0,0]],E="0,0",m=[[0,0]],S="0,0",D=!1;n.outputColorSpace=Bt,n.localClippingEnabled=!0,n.toneMapping=Qa,n.shadowMap.enabled=!0,n.shadowMap.type=vc,s.background=new Ue(Qf),s.fog=T,s.add(new Ya(hw,dw,.9)),s.add(a),s.add(g),s.add(w.mesh),s.add(R.mesh),c.position.set(30,40,20),c.castShadow=!0,c.shadow.mapSize.set(Sg,Sg),c.shadow.bias=-4e-4,c.shadow.normalBias=.02,s.add(c),s.add(c.target);let I=l((C,B,k=P)=>k.map(([z,j])=>{let X=C.make();return X.position.set(C.at[0]+z,C.at[1],C.at[2]+j),B.add(X),X}),"copiesOf"),N=l(C=>I(C,a,mw(P,C.span,d,e.v,D)),"overlayCopiesOf"),O=l(C=>y.forEach(B=>{let k=_.get(B);(k===void 0||!Kf(k,C))&&y.delete(B)}),"slideMarkers");return{render:l(()=>n.render(s,r),"render"),resize:l((C,B,k)=>{n.setPixelRatio(k),n.setSize(C,B,!1),r.aspect=B>0?C/B:1,r.updateProjectionMatrix()},"resize"),setChunk:l((C,B,k)=>{let z=`${C},${B}`,j=new Pt;j.setAttribute("position",new Mt(k.positions,3)),j.setAttribute("normal",new Mt(k.normals,3)),j.setAttribute("color",new Mt(k.colours,3)),j.setIndex(new Mt(k.indices,1)),j.computeBoundingSphere();let X=u.get(z);X!==void 0&&(X.drawn.forEach(se=>a.remove(se)),X.geometry.dispose());let Q={geometry:j,at:[k.u,0,k.v],make:l(()=>{let se=new ft(j,o);return se.castShadow=!0,se.receiveShadow=!0,se},"make"),drawn:[]};Q.drawn=I(Q,a),u.set(z,Q),w.setChunk(k)},"setChunk"),setOverlay:l((C,B,k)=>{let z=`${C},${B}`,j=h.get(z);if(j!==void 0&&(j.drawn.forEach(Se=>a.remove(Se)),j.geometry.dispose(),h.delete(z)),k===null)return;let X=new Pt;X.setAttribute("position",new Mt(k.positions,3)),X.setAttribute("normal",new Mt(k.normals,3)),X.setAttribute("color",new Mt(k.colours,3)),X.computeBoundingSphere(),X.computeBoundingBox();let Q=X.boundingBox,se={geometry:X,span:[k.v+(Q?.min.z??0),k.v+(Q?.max.z??0)],at:[k.u,0,k.v],make:l(()=>{let Se=new ft(X,f);return Se.castShadow=!0,Se.receiveShadow=!0,Se},"make"),drawn:[]};se.drawn=N(se),h.set(z,se)},"setOverlay"),setMarker:l((C,B,k)=>{let z=_.get(C);if(z?.drawn.forEach(Le=>g.remove(Le)),_.delete(C),k===null)return;let j=pg(x,k),X=j.getObjectByName(vu);j.traverse(Le=>{Le.castShadow=Le instanceof ft});let Q={at:B,make:l(()=>j.clone(),"make"),drawn:[],...k.unit===null||X===void 0?{}:{unit:{id:k.unit.id,at:X.position.toArray()}}},se=performance.now(),Se=cw(z,Q,se);Se!==void 0&&(Q.slide=Se),Q.drawn=I(Q,g,m),_.set(C,Q),Q.slide!==void 0&&(y.add(C),Kf(Q,se))},"setMarker"),slideMarker:l((C,B)=>{let k=_.get(C);if(k===void 0)return;let[z,j,X]=wu(k);k.slide={from:[B[0]-z,B[1]-j,B[2]-X],started:performance.now()},y.add(C),Kf(k,k.slide.started)},"slideMarker"),markerAt:l((C,B)=>{let k=_.get(C);return k===void 0?null:lw(k,B,performance.now())},"markerAt"),sliding:l(()=>y.size>0,"sliding"),view:l((C,B,k=e)=>{let[z,j]=C.focus,[X,Q,se]=bu(C,B),{near:Se,far:Le}=Mu(C.distance);r.position.set(X,Q,se),r.lookAt(z,B,j),r.far=Le*1.2,r.near=Math.max(.1,C.distance*.02),r.updateProjectionMatrix(),T.near=Se,T.far=Le;let J=C.distance*2.2,ue=c.shadow.camera;c.position.set(z+30,B+40,j+20),c.target.position.set(z,B,j),ue.left=-J,ue.right=J,ue.top=J,ue.bottom=-J,ue.near=Math.max(.5,wg-J*1.6),ue.far=wg+J*1.6,ue.updateProjectionMatrix(),w.follow(z,j,Le*2.2,c.position.clone().sub(c.target.position)),R.follow(z,j,Le*2.2),w.pastThePoles(k.v!==null),R.pastThePoles(k.v!==null),f.clippingPlanes=k.v===null?p:null,D=k.v===null;let Te=Mg(C.focus,Le,k),De=`${Te.join(";")}${D?" stopped":""}`,_e=Mg(C.focus,Math.min(Le,C.distance*2.2),k),ze=_e.join(";");De!==E&&(P=Te,E=De,u.forEach(Je=>{Je.drawn.forEach(Ie=>a.remove(Ie)),Je.drawn=I(Je,a)}),h.forEach(Je=>{Je.drawn.forEach(Ie=>a.remove(Ie)),Je.drawn=N(Je)})),ze!==S&&(m=_e,S=ze,_.forEach(Je=>{Je.drawn.forEach(Ie=>g.remove(Ie)),Je.drawn=I(Je,g,m)})),O(performance.now())},"view"),stats:l(()=>({drawCalls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries}),"stats"),dispose:l(()=>{u.forEach(({geometry:C})=>C.dispose()),u.clear(),h.forEach(({geometry:C})=>C.dispose()),h.clear(),f.dispose(),_.clear(),x.dispose(),w.dispose(),R.dispose(),o.dispose(),n.dispose()},"dispose")}},"createStage");var Hi=1/Math.sqrt(3),Ag=1.5*Hi,gw=l((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),c=Math.abs(r-t);return a>o&&a>c?n=-s-r:o>c&&(s=-n-r),[n,s]},"roundAxial"),xw=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[s+.5+(r&1)*.5,Hi+r*Ag],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-Hi],[a+.5,o-Hi/2],[a+.5,o+Hi/2],[a,o+Hi],[a-.5,o+Hi/2],[a-.5,o-Hi/2]]},"outline"),tileAt:l((s,r)=>{let a=s-.5,o=r-Hi,[c,u]=gw(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*Ag:null}),"period")}},"hexOddRLayout"),Cg=xw;var _w=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,s)=>[n+.5,s+.5],"centre"),outline:l((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:l((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),Rg=_w;var xi=Math.SQRT2/2,vw=l(({height:i,width:e,wrapsY:t})=>{let n=l((s,r)=>[(2*s+(r&1)+1)*xi,(r+1)*xi],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((s,r)=>{let[a,o]=n(s,r);return[[a,o-xi],[a+xi,o],[a,o+xi],[a-xi,o]]},"outline"),tileAt:l((s,r)=>{let a=s/xi,o=r/xi,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*xi,v:t?i*xi:null}),"period")}},"staggeredIsoLayout"),Pg=vw;var Ig={square:Rg,"staggered-iso":Pg,"hex-odd-r":Cg},yw=l(i=>{if(!Object.prototype.hasOwnProperty.call(Ig,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Ig[i.topologyId](i)},"groundLayoutFor"),Lg=yw;var Eu=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var bw=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),Dg=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),ys=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>r===null?h:(h%r+r)%r,"wrapV"),u=l((h,f,d,p)=>{let _=Math.floor(bw(h,f,t)*16)*(Math.PI/8);return Math.cos(_)*d+Math.sin(_)*p},"slope");return(h,f)=>{let d=h/s,p=f/a,_=Math.floor(d),y=Math.floor(p),g=d-_,x=p-y,w=Dg(g),R=Dg(x),T=o(_),P=o(_+1),E=c(y),m=c(y+1),S=u(T,E,g,x)+(u(P,E,g-1,x)-u(T,E,g,x))*w,D=u(T,m,g,x-1)+(u(P,m,g-1,x-1)-u(T,m,g,x-1))*w;return Math.max(-1,Math.min(1,(S+(D-S)*R)*1.4))}},"periodicNoise"),ep=l(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var _i={shore:-.03,deep:-.15,reach:3},Tu={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},Ug={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},Ng={Ocean:{relief:{base:_i.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:Ug,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},Au=l(i=>i==="Unknown"?Tu:(Object.prototype.hasOwnProperty.call(Ng,i)?Ng[i]:void 0)??Ug,"terrainEntry");var Fg=.65,tp=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),tr=.22,np=l((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),Mw=l((i,e,t)=>({u:(np(i,e,t,1)*2-1)*tr,v:(np(i,e,t,2)*2-1)*tr,scale:.75+np(i,e,t,3)*.5}),"peakOf"),Sw=l(({layout:i,seed:e=1,source:t})=>{let{width:n,height:s,wrapsY:r}=t,a=i.period(),o=ep([ys({cell:.7,period:a,seed:e}),ys({cell:.35,period:a,seed:e+1}),ys({cell:.17,period:a,seed:e+2})]),c=ep([ys({cell:.45,period:a,seed:e+3}),ys({cell:.22,period:a,seed:e+4})]),u=l((E,m)=>1-2*Math.abs(c(E,m)),"ridged"),h=ys({cell:.8,period:a,seed:e+5}),f=ys({cell:.8,period:a,seed:e+6}),d={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},p=[],_=[],y=l((E,m)=>{let S=(E%n+n)%n;return!r&&(m<0||m>=s)?null:(m%s+s)%s*n+S},"index"),g=l(E=>{let m=new Array(n*s).fill(1/0),S=[];E.forEach((D,I)=>{D&&(m[I]=0,S.push([I%n,Math.floor(I/n)]))});for(let[D,I]of S){let N=m[I*n+D]??1/0;N>=_i.reach||t.neighbours(D,I).forEach(([O,V])=>{let C=V*n+O;(m[C]??1/0)>N+1&&(m[C]=N+1,S.push([O,V]))})}return m},"distancesFromLand"),x=l((E,m)=>{let S=t.terrainAt(E,m);return`${S}${S!=="Unknown"&&t.waterAt(E,m)?" water":""}`},"readAs"),w=l(E=>{if(E!==void 0&&_.length>0&&E.every(([V,C])=>{let B=y(V,C);return B===null||_[B]===x(V,C)}))return[];let m=[],S=[],D=[];for(let V=0;V<s;V++)for(let C=0;C<n;C++){let B=t.terrainAt(C,V);m.push(B),S.push(B!=="Unknown"&&t.waterAt(C,V)),D.push(Au(B))}let I=g(m.map((V,C)=>V!=="Unknown"&&!S[C])),N=m.map((V,C)=>`${V}${S[C]?" water":""}`),O=[];return N.forEach((V,C)=>{_[C]!==V&&O.push([C%n,Math.floor(C/n)])}),_=N,p=D.map((V,C)=>{let B=V===Tu,k=C%n,z=Math.floor(C/n),j=Mw(k,z,e);if(!S[C])return{relief:V.relief,colour:tp(V.colour),unknown:B,peak:j};let X=Math.min(I[C]??1/0,_i.reach),Q=_i.shore+(_i.deep-_i.shore)*Math.max(0,X-1)/Math.max(1,_i.reach-1);return{relief:{...V.relief,base:Q},colour:tp(V.colour),unknown:B,peak:j}}),O},"refresh"),R=l(E=>{let[m,S]=i.centre(0,E),D=Math.max(...i.outline(0,E).map(([N,O])=>Math.hypot(N-m,O-S))),I=[];for(let N=-6;N<=6;N++)for(let O=-4;O<=4;O++){let[V,C]=i.centre(O,E+N);Math.hypot(V-m,C-S)<1.2+D+tr*Math.SQRT2+1e-9&&I.push([O,N])}return I},"offsetsFor"),T=[R(0),R(1)],P=l((E,m)=>{let[S,D]=i.tileAt(E,m),I=y(S,D),N=I===null?null:p[I]??null;if(N===null||N.unknown)return{height:0,colour:tp(Tu.colour),unseen:!0};let O=null,V=null,C=l(J=>J==="rolling"?O??=o(E,m):V??=u(E,m),"noiseHere"),B=0,k=0,z=0,j=0,X=0,Q=0,se=0,Se=E+tr*h(E,m),Le=m+tr*f(E,m);return(T[D&1]??[]).forEach(([J,ue])=>{let Te=S+J,De=D+ue,_e=y(Te,De);if(_e===null)return;let ze=p[_e];if(ze===void 0)return;let[Je,Ie]=i.centre(Te,De),{relief:$e,colour:st,peak:qe}=ze,St=Eu(Math.hypot(E-Je,m-Ie)),yt=$e.shape==="peaked"?Eu(Math.hypot(E-Je-qe.u,m-Ie-qe.v)):0,Ct=Eu(Math.hypot(Se-Je,Le-Ie))**3;if(St>0){let ct=d[$e.shape],_n=ct===null?0:$e.roughness*C(ct);$e.shape==="peaked"?k+=St*($e.base*(1-Fg)+_n*.5):k+=St*($e.base+_n),B+=St}if(yt>0){let ct=$e.roughness*C("ridged");z+=yt*yt*($e.base*Fg*qe.scale+ct*.5)}j+=Ct,X+=Ct*st[0],Q+=Ct*st[1],se+=Ct*st[2]}),{height:(B>0?k/B:0)+z,colour:j>0?[X/j,Q/j,se/j]:N.colour,unseen:!1}},"sample");return w(),{sample:P,height:l((E,m)=>P(E,m).height,"height"),refresh:w}},"createRelief"),Og=Sw;var Bg=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/c/h}},"chunkGrid"),zg=l((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,c=t*s,u=n*r,h=l((E,m)=>[E*a,m*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),p=(s+1)*(r+1),_=new Float32Array(p*3),y=new Float32Array(p);for(let E=-1;E<=r+1;E++)for(let m=-1;m<=s+1;m++){let S=e.sample(...h(c+m,u+E)),{height:D,colour:I}=S;d[(E+1)*f+(m+1)]=D,m>=0&&m<=s&&E>=0&&E<=r&&(_.set(I,(E*(s+1)+m)*3),y[E*(s+1)+m]=S.unseen?1:0)}let g=l((E,m)=>d[(m+1)*f+(E+1)]??0,"height"),x=new Float32Array(p*3),w=new Float32Array(p*3),[R,T]=h(c,u);for(let E=0;E<=r;E++)for(let m=0;m<=s;m++){let S=E*(s+1)+m,[D,I]=h(c+m,u+E),N=(g(m+1,E)-g(m-1,E))/(2*a),O=(g(m,E+1)-g(m,E-1))/(2*o),V=Math.hypot(N,1,O);x[S*3]=D-R,x[S*3+1]=g(m,E),x[S*3+2]=I-T,w[S*3]=-N/V,w[S*3+1]=1/V,w[S*3+2]=-O/V}let P=new Uint32Array(s*r*6);for(let E=0;E<r;E++)for(let m=0;m<s;m++){let S=E*(s+1)+m,D=S+1,I=S+s+1,N=I+1,O=(E*s+m)*6;P.set([S,I,D,D,I,N],O)}return{u:R,v:T,positions:x,normals:w,colours:_,unseen:y,indices:P}},"buildChunk"),kg=l((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let p=Math.floor((f-n)/r);p<=Math.floor((f+n)/r);p++){if(!a&&(p<0||p>=i.chunksV))continue;let _=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${_},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Cn=l((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),Gg={Forest:{plants:[Cn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95]},Jungle:{plants:[Cn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Cn("palm",2,[.9,1.2],"#3f8a34","#6b5236")]},Swamp:{plants:[Cn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Cn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")]},Grassland:{plants:[Cn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Cn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Cn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Cn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Cn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Cn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Cn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Cn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Cu=l(i=>Object.prototype.hasOwnProperty.call(Gg,i)?Gg[i]:null,"growthOf");var ww=["River"],vi=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),Ew=l((i,e)=>{if(i.city)return null;let t=vi(i,"Road"),n=vi(i,"Railroad"),s=t?e.filter(h=>vi(h.tile,"Road")).map(({offset:h})=>h):[],r=t?e.filter(h=>!!h.tile.city||vi(h.tile,"Railroad")).map(({offset:h})=>h):[],a=l((h,f)=>h[0]===f[0]&&h[1]===f[1],"same"),o=s.length===0&&r.length===0,c={road:t?{joins:s.filter(h=>!n||!r.some(f=>a(f,h))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:vi(i,"Farmland")?"farmland":vi(i,"Irrigation")?"irrigation":null,mine:vi(i,"Mine"),fortress:vi(i,"Fortress"),airbase:vi(i,"Airbase"),pollution:vi(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:h})=>h).filter(h=>!ww.includes(h)).map(h=>[i.terrain._,h]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:Cu(i.terrain?._??"Unknown")!==null};return c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Vg=Ew;var _t=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Hg={Coal:_t("rocks","#26262a",4),Gold:_t("rocks","#d8b13a",3),Gems:_t("rocks","#59c2d6",4,"#b05ad0"),Iron:_t("rocks","#8a5a44",4),Wheat:_t("crop","#d9b84a",5,"#a88a2c"),Spice:_t("crop","#c0452e",4,"#5d7a2a"),Wine:_t("crop","#6a2c5e",4,"#5d7a2a"),Silk:_t("crop","#e9e2cf",3,"#4f7a34"),Fruit:_t("crop","#e08a2a",4,"#3f7a2a"),Horse:_t("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:_t("animal","#4a3424",3,"#2a1e16"),Game:_t("animal","#a9835a",2,"#5a4430"),"Tundra:Game":_t("animal","#8f7e66",2,"#e8e2d6"),Furs:_t("animal","#b0602a",2,"#f0e8dc"),Ivory:_t("animal","#8a8580",1,"#f2ead8"),Seal:_t("animal","#6e7072",2,"#4a4c4e"),Pheasant:_t("bird","#8a3a22",2,"#3d6a3a"),Fish:_t("fish","#b8c4cc",5),Whales:_t("whale","#3a4048",1),Oil:_t("derrick","#222224",1,"#121214"),Oasis:_t("oasis","#3f7a32",3,"#3f86a8"),Peat:_t("peat","#4a3624",4),Shield:_t("logs","#7a5532",4,"#c9a47a")},Tw=_t("cairn","#9a9690",5),Wg=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(Hg,n)?Hg[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??Tw},"specialLook");var cp=l(()=>({positions:[],normals:[],colours:[]}),"soup"),Rn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},sp=.06,Xg="#8c7a58",qg="#5f5953",Aw="#a9abae",Cw="#5e432b",Rw="#4f87b0",Pw="#7da33f",Iw=["#c2b448","#8fae3e"],Yg="#9d968a",Lw="#4a4c50",op="#6b4a2e",Dw="#7a6a58",Nw="#b89a5a",Uw="#c9b48e",Zg="#34322a",mn=new Vn(1,1,1),Qr=new Kn(.5,.5,1,8),up=new Qn(.5,1,8),Fw=new Qn(.5,1,4),Kr=new ds(.5,8,6),xo=new Kn(.5,.5,1,4,1,!0),_o=new Qn(.5,1,5,1,!0),Ru=new ds(.5,5,3),rp={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},Ow=.05,Bw=.22,$g=72,yi=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Jg=new Map,ap=l(i=>{let e=Jg.get(i);if(e===void 0){let{r:t,g:n,b:s}=new Ue(i);e=[t,n,s],Jg.set(i,e)}return e},"colourOf"),Kg=new WeakMap,zw=l(i=>{let e=Kg.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Kg.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),kw=new lt,Gw=new Ve,Vw=new G,Hw=new an,Ww=new Mn,Xw=new G,At,Qg,en,mp=class mp{constructor(e,t){ie(this,At);this.lines=[];this.taken=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=ap(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/sp)),u=Math.max(1,Math.ceil(n/sp)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<c;d++)for(let p=0;p<u;p++){let[_,y]=f(d/c,(p+1)/u),[g,x]=f((d+1)/c,(p+1)/u),[w,R]=f(d/c,p/u),[T,P]=f((d+1)/c,p/u);H(this,At,en).call(this,_,y,r,a),H(this,At,en).call(this,g,x,r,a),H(this,At,en).call(this,w,R,r,a),H(this,At,en).call(this,g,x,r,a),H(this,At,en).call(this,T,P,r,a),H(this,At,en).call(this,w,R,r,a)}}disc(e,t,n,s,r=12){let a=ap(n),[o,c]=e,u=Math.max(1,Math.ceil(t/sp)),h=l((f,d)=>{let p=d/r*Math.PI*2,_=f/u*t;return[o+Math.cos(p)*_,c+Math.sin(p)*_]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let p=h(f+1,d),_=h(f+1,d+1);if(f===0)H(this,At,en).call(this,o,c,s,a),H(this,At,en).call(this,..._,s,a),H(this,At,en).call(this,...p,s,a);else{let y=h(f,d),g=h(f,d+1);H(this,At,en).call(this,...y,s,a),H(this,At,en).call(this,...g,s,a),H(this,At,en).call(this,...p,s,a),H(this,At,en).call(this,...g,s,a),H(this,At,en).call(this,..._,s,a),H(this,At,en).call(this,...p,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=zw(e),c=kw.compose(Vw.set(...t),Hw.setFromEuler(Ww.set(...r)),Xw.set(...n)),u=c.elements,h=Gw.getNormalMatrix(c).elements,[f,d,p]=ap(s),_=this.soup;for(let y=0;y<a.length;y+=3){let g=a[y],x=a[y+1],w=a[y+2],R=o[y],T=o[y+1],P=o[y+2],E=h[0]*R+h[3]*T+h[6]*P,m=h[1]*R+h[4]*T+h[7]*P,S=h[2]*R+h[5]*T+h[8]*P,D=Math.hypot(E,m,S)||1;_.positions.push(u[0]*g+u[4]*x+u[8]*w+u[12],u[1]*g+u[5]*x+u[9]*w+u[13],u[2]*g+u[6]*x+u[10]*w+u[14]),_.normals.push(E/D,m/D,S/D),_.colours.push(f,d,p)}}spot(e,t){let n=yi(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-Bw-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,i1(e,t,o,c)-Ow-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=yi(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<$g;h++){let f=s+h/$g*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>c&&(o=d,c=p)}return this.taken.push([o[0],o[1],n]),o}};At=new WeakSet,Qg=l(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),en=l(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...H(this,At,Qg).call(this,e,t)),this.soup.colours.push(...s)},"#point"),l(mp,"Layer");var lp=mp,hp=l((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),dp=l(i=>i.alone||i.joins.length>0,"drawn"),qw=l((i,e)=>{let{place:t}=i;dp(e)&&(e.joins.forEach(n=>i.strip(t.centre,hp(t,n),.07,Xg,Rn.road)),i.disc(t.centre,e.alone?.09:.035,Xg,Rn.road))},"road"),Yw=l((i,e)=>{if(!dp(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>hp(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),c=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,qg,Rn.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,Cw,Rn.ballast+.002)}[1,-1].forEach(u=>i.strip([r+c[0]*u,a+c[1]*u],[s[0]+c[0]*u,s[1]+c[1]*u],.01,Aw,Rn.rail))}),i.disc(t.centre,.05,qg,Rn.ballast)},"railroad"),Zw=l((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let c=t[1]-r+a*(o+.5),u=e==="farmland"?Iw[o%2]:Pw;if(i.strip([t[0]-r,c],[t[0]+r,c],a*.8,u,Rn.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,Rw,Rn.field+.001)}}},"fields"),$w=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(mn,[e-.02,n+.05,t],[.01,.11,.01],op,[0,0,-.3]),i.solid(mn,[e+.02,n+.05,t],[.01,.11,.01],op,[0,0,.3]),i.solid(Qr,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(up,[a,i.ground(a,o)+.02,o],[.07,.04,.07],Dw)})},"mine"),Jw=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,c])=>{let u=e+r,h=t+a;i.solid(mn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,c],Yg)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,c=t+a;i.solid(Qr,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Yg)})},"fortress"),Kw=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,Lw,Rn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Rn.road+.004),i.solid(mn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),Qw=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Zg,Rn.smear,14),i.disc(i.spot(7,.5),e*.25,Zg,Rn.smear+.001)},"pollution"),jw=l((i,e,t,n)=>{let s=e.detail??e.colour,r=l((o,c)=>[t[0]+(yi(i.place.seed,n*31+o*2)-.5)*c,t[1]+(yi(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(c,u,a),f=yi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Kr,[c,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(Qr,[c,h+.02,u],[.008,.04,.008],s),i.solid(Kr,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(mn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(mn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(mn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(Kr,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(mn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(Kr,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(Kr,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(mn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(mn,[c,h+.008,u],[.08,.016,.08],s),i.solid(Fw,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,s,Rn.field+.002);{let[d,p]=r(o+5,.1),_=i.ground(d,p);i.solid(Qr,[d,_+.06,p],[.012,.12,.012],op),i.solid(up,[d,_+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Qr:mn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(Kr,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),e1=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+yi(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(Qr,[s,a+.02,r],[.05,.04,.05],Uw),i.solid(up,[s,a+.055,r],[.065,.035,.065],Nw)})},"hut"),t1={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},n1=l((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(xo,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(_o,[n,o+.09*r,s],[.11*r,.12*r,.11*r],c),i.solid(_o,[n,o+.16*r,s],[.08*r,.1*r,.08*r],c);break;case"broadleaf":i.solid(xo,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(Ru,[n,o+.12*r,s],[.13*r,.11*r,.13*r],c,[0,a,0]);break;case"palm":i.solid(xo,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(_o,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],c,[0,a,0]);break;case"deadTree":i.solid(xo,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(mn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(Ru,[n,o+.02*r,s],[.06*r,.045*r,.06*r],c,[0,a,0]);break;case"shrub":i.solid(_o,[n,o+.025*r,s],[.05*r,.05*r,.05*r],c,[0,a,0]),i.solid(_o,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],c,[0,a,0]);break;case"scrub":i.solid(Ru,[n,o+.008*r,s],[.05*r,.02*r,.05*r],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(mn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(Ru,[n,o+.012*r,s],[.07*r,.04*r,.06*r],c,[0,a,0]);break;default:i.solid(xo,[n,o+.05*r,s],[.018*r,.1*r,.018*r],c),i.solid(mn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],c,[0,a,0])}},"grow"),i1=l((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),s1=l((i,e)=>{let t=Cu(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*yi(r,h),d=t.conifers,p=d!==void 0&&yi(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,_=t1[p]*f;for(let y=0;y<6;y++){let g=yi(r,h+2+y*2)*Math.PI*2,x=Math.sqrt(yi(r,h+3+y*2))*s*.92,w=n[0]+Math.cos(g)*x,R=n[1]+Math.sin(g)*x;if(i.hasRoom(w,R,_)){n1(i,o,p,w,R,f,g),i.taken.push([w,R,_]);break}}}})},"plants"),fp=l((i,e,t)=>{let n=new lp(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(a=>{a!==null&&dp(a)&&(a.joins.forEach(o=>n.lines.push([s,hp(e,o)])),a.alone&&n.lines.push([s,s]))}),i.fortress){let a=r*.62,o=[[-a,-a],[a,-a],[a,a],[-a,a]].map(([c,u])=>[s[0]+c,s[1]+u]);o.forEach((c,u)=>n.lines.push([c,o[(u+1)%4]]))}if(i.airbase){let a=r*.75;n.lines.push([[s[0]-a,s[1]+.12],[s[0]+a,s[1]+.12]])}return i.irrigation!==null&&Zw(n,i.irrigation),i.road!==null&&qw(n,i.road),i.railroad!==null&&Yw(n,i.railroad),i.mine&&$w(n,n.claim(...rp.mine,.1)),i.fortress&&Jw(n),i.airbase&&Kw(n),i.pollution&&Qw(n),i.specials.forEach(([a,o],c)=>jw(n,Wg(a,o),n.claim(...rp.special(c),.1),c+1)),i.hut&&e1(n,n.claim(...rp.hut,.13)),i.vegetation&&i.irrigation===null&&!i.fortress&&!i.airbase&&s1(n,i),{taken:n.taken,lines:n.lines}},"layOverlay"),r1=l((i,e,t)=>{let n=cp();return t.forEach(({overlay:s,place:r})=>fp(s,r,n)),pp(i,e,n)},"overlayMesh"),pp=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),jg=r1;var bs,tn,ii,yo,bi,Pn,cn,jr,bo,nr,Mo,So,pt,ex,xp,_p,Pu,Iu,tx,vo,vp=class vp{constructor(e){ie(this,pt);ie(this,bs);ie(this,tn);ie(this,ii,[]);ie(this,yo);ie(this,bi);ie(this,Pn,new Set);ie(this,cn,null);ie(this,jr,null);ie(this,bo,new Map);ie(this,nr,[0,0]);ie(this,Mo);ie(this,So);Z(this,bi,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=Lg({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),Z(this,bs,Og({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:l((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:l((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:l((d,p)=>t.directions().map(_=>t.neighbour(d,p,_)).filter(_=>_!==null),"neighbours")}})),Z(this,tn,Bg(this.layout,s));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[_,y]=this.layout.centre(d,p);return Math.hypot(_-a,y-o)}));Z(this,yo,1.2+c+tr*Math.SQRT2+(_i.reach-1)*u);let h=this.layout.outline(0,0),f=h.flatMap(([d,p],_)=>{let[y,g]=h[(_+1)%h.length],x=Math.hypot(y-d,g-p);return x===0?[]:[{away:Math.abs((y-d)*(o-p)-(g-p)*(a-d))/x,normal:[(g-p)/x,(d-y)/x]}]});Z(this,Mo,Math.min(...f.map(({away:d})=>d))),Z(this,So,Math.min(...f.map(({away:d,normal:[p,_]})=>d/(Math.abs(p)+Math.abs(_)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=v(this,tn),a=Math.floor(e/s),o=Math.floor(t/r),c=e/s-a,u=t/r-o,h=l((y,g)=>{let x=`${y},${g}`,w=n.get(x);return w===void 0&&(w=v(this,bs).height(y*s,g*r),n.set(x,w)),w},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(p-f)*u;let _=h(a+1,o+1);return _+(p-_)*(1-c)+(d-_)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,tn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return v(this,tn).chunksV*v(this,tn).stepsV*v(this,tn).spacingV}heightAt(e,t){return v(this,bs).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=v(this,tn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);Z(this,ii,H(this,pt,vo).call(this,r,e,t)),Z(this,nr,[e,t]),r.forEach(a=>v(this,Pn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return;Z(this,nr,[t,n]),(e.length===0?[...H(this,pt,Iu).call(this).values()].flat():H(this,pt,tx).call(this,e)).forEach(([o,c])=>{let u=H(this,pt,Pu).call(this,o,c);if(v(this,Pn).has(u)||v(this,cn)?.key===u&&!H(this,pt,ex).call(this,v(this,cn),o,c))return;JSON.stringify(H(this,pt,xp).call(this,o,c))!==(v(this,bo).get(`${o},${c}`)??"null")&&v(this,Pn).add(u)});let r=v(this,bs).refresh(s?void 0:e);if(r.length===0)return;let a=kg(v(this,tn),this.layout,r,v(this,yo)).map(([o,c])=>`${o},${c}`);Z(this,ii,H(this,pt,vo).call(this,[...new Set([...v(this,ii),...a])],t,n))}refocus(e,t){Z(this,ii,H(this,pt,vo).call(this,v(this,ii),e,t)),Z(this,nr,[e,t])}pending(){return v(this,ii).length}overlaysPending(){return v(this,Pn).size+(v(this,cn)===null||v(this,Pn).has(v(this,cn).key)?0:1)}build(e,t){let n=performance.now(),s=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;v(this,ii).length>0;){if(s())return;let r=v(this,ii).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,zg(v(this,tn),v(this,bs),a,o)),v(this,Pn).add(r)}for(;v(this,Pn).size>0||v(this,cn)!==null;){if(v(this,cn)!==null&&v(this,Pn).has(v(this,cn).key)&&Z(this,cn,null),v(this,cn)===null){let d=H(this,pt,vo).call(this,[...v(this,Pn)],...v(this,nr))[0];v(this,Pn).delete(d),Z(this,cn,{key:d,squares:H(this,pt,Iu).call(this).get(d)??[],done:0,laid:cp(),heights:new Map})}let r=v(this,cn);for(;r.done<r.squares.length;){let[d,p]=r.squares[r.done],_=H(this,pt,_p).call(this,d,p,r.heights);if(r.done++,_!==null&&fp(_.overlay,_.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=v(this,tn);Z(this,cn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:pp(a*c*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,tn),o=new Map,c=(H(this,pt,Iu).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>H(this,pt,_p).call(this,u,h,o)??[]);return c.length===0?null:jg(e*n*r,t*s*a,c)}overlayKeyOf(e,t){return H(this,pt,Pu).call(this,e,t)}};bs=new WeakMap,tn=new WeakMap,ii=new WeakMap,yo=new WeakMap,bi=new WeakMap,Pn=new WeakMap,cn=new WeakMap,jr=new WeakMap,bo=new WeakMap,nr=new WeakMap,Mo=new WeakMap,So=new WeakMap,pt=new WeakSet,ex=l(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),xp=l(function(e,t){let n=v(this,bi).topology();return Vg(v(this,bi).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:v(this,bi).get(r[0],r[1])}]}))},"#overlayAt"),_p=l(function(e,t,n){let s=H(this,pt,xp).call(this,e,t);if(v(this,bo).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t);return{overlay:s,place:{centre:[r,a],toward:l(([o,c])=>this.layout.centre(e+o,t+c),"toward"),radius:v(this,Mo),inner:v(this,So),heightAt:l((o,c)=>this.surfaceAt(o,c,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1))}}},"#square"),Pu=l(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:c}=v(this,tn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),Iu=l(function(){if(v(this,jr)===null){let e=new Map;for(let t=0;t<v(this,bi).height();t++)for(let n=0;n<v(this,bi).width();n++){let s=H(this,pt,Pu).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}Z(this,jr,e)}return v(this,jr)},"#chunksOfSquares"),tx=l(function(e){let t=v(this,bi).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),vo=l(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=v(this,tn),c=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=l((_,y)=>Math.abs(y===null?_:_-y*Math.round(_/y)),"round"),p=l(_=>{let[y,g]=_.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((g+.5)*u-n,f))},"distance");return[...e].sort((_,y)=>p(_)-p(y))},"#nearestFirst"),l(vp,"Land");var gp=vp,nx=gp;var a1=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),ea=a1;var ix=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var o1=8,l1=.92,c1=.02,sx=3,u1=50,h1=8,d1=10,rx=250,wo,Eo,ta,na,ir,Ms,yp=class yp{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){ie(this,wo);ie(this,Eo);ie(this,ta);ie(this,na);ie(this,ir,!1);ie(this,Ms);this.pointerId=e,Z(this,wo,t),Z(this,Eo,n),Z(this,ta,t),Z(this,na,n),Z(this,Ms,[{x:t,y:n,time:s}])}dragging(){return v(this,ir)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!v(this,ir)&&Math.hypot(t-v(this,wo),n-v(this,Eo))<o1)return null;let r=!v(this,ir),a=v(this,ta)-t,o=v(this,na)-n;return Z(this,ir,!0),Z(this,ta,t),Z(this,na,n),v(this,Ms).push({x:t,y:n,time:s}),v(this,Ms).length>20&&v(this,Ms).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return ix(v(this,Ms),e)}};wo=new WeakMap,Eo=new WeakMap,ta=new WeakMap,na=new WeakMap,ir=new WeakMap,Ms=new WeakMap,l(yp,"Press");var Lu=yp,Mi,To,bp=class bp{constructor(e){ie(this,Mi,null);ie(this,To);Z(this,To,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>sx?sx/t:1,s=e.x*n,r=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(s,r)<c1){Z(this,Mi,null);return}v(this,To).call(this,-s*u,-r*u);let h=Math.pow(l1,u/16);s*=h,r*=h,Z(this,Mi,window.requestAnimationFrame(o))},"step");Z(this,Mi,window.requestAnimationFrame(o))}gliding(){return v(this,Mi)!==null}stop(){v(this,Mi)!==null&&(window.cancelAnimationFrame(v(this,Mi)),Z(this,Mi,null))}};Mi=new WeakMap,To=new WeakMap,l(bp,"Glide");var Du=bp,sr,Ao,Co,ia,Mp=class Mp{constructor(){ie(this,sr,0);ie(this,Ao,0);ie(this,Co,-1/0);ie(this,ia,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=rx)return 0;let r=Math.sign(s),a=e.timeStamp-v(this,Co)>rx||r!==v(this,Ao);if(Z(this,Co,e.timeStamp),Z(this,Ao,r),a&&(Z(this,sr,0),Z(this,ia,0)),n&&!e.ctrlKey&&v(this,ia)>=d1)return 0;if(!a&&n){if(Z(this,sr,v(this,sr)+s),Math.abs(v(this,sr))<(e.ctrlKey?h1:u1))return 0;Z(this,sr,0)}return n&&!e.ctrlKey&&Z(this,ia,v(this,ia)+1),s<0?1:-1}};sr=new WeakMap,Ao=new WeakMap,Co=new WeakMap,ia=new WeakMap,l(Mp,"WheelTurn");var Nu=Mp;var f1=350,p1=.006,ax=.004,Si,qt,un,sa,wi,si,Bu,Xn,qn,Ss,ra,In,ws,Ee,Wn,Uu,Fu,ox,wp,Wi,Ep,lx,Xi,cx,ux,hx,dx,Ro,fx,px,mx,Ou,Tp=class Tp{constructor(e,t,n=null){ie(this,Ee);ie(this,Si);ie(this,qt);ie(this,un,null);ie(this,sa,[0,0]);ie(this,wi,null);ie(this,si);ie(this,Bu,new Nu);ie(this,Xn,new Map);ie(this,qn,null);ie(this,Ss,null);ie(this,ra,[]);ie(this,In);ie(this,ws,null);Z(this,Si,e),Z(this,qt,t),Z(this,In,n),Z(this,si,new Du((s,r)=>{let[a,o]=H(this,Ee,ox).call(this);H(this,Ee,Ep).call(this,[a,o],[a-s,o-r])})),H(this,Ee,Wn).call(this,"pointerdown",s=>H(this,Ee,lx).call(this,s)),H(this,Ee,Wn).call(this,"pointermove",s=>H(this,Ee,ux).call(this,s)),H(this,Ee,Wn).call(this,"pointerup",s=>H(this,Ee,hx).call(this,s)),H(this,Ee,Wn).call(this,"pointercancel",s=>H(this,Ee,dx).call(this,s)),H(this,Ee,Wn).call(this,"wheel",s=>H(this,Ee,px).call(this,s),{passive:!1}),H(this,Ee,Wn).call(this,"gesturestart",s=>H(this,Ee,Ou).call(this,s,"start"),{passive:!1}),H(this,Ee,Wn).call(this,"gesturechange",s=>H(this,Ee,Ou).call(this,s,"change"),{passive:!1}),H(this,Ee,Wn).call(this,"gestureend",s=>H(this,Ee,Ou).call(this,s,"end"),{passive:!1}),H(this,Ee,Wn).call(this,"contextmenu",s=>H(this,Ee,cx).call(this,s)),H(this,Ee,Wn).call(this,"pointerleave",()=>v(this,In)?.hover(null)),H(this,Ee,Wn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return v(this,un)?.dragging()===!0||v(this,wi)!==null}moving(){return this.dragging()||v(this,qn)!==null||v(this,si).gliding()}dispose(){v(this,si).stop(),H(this,Ee,Xi).call(this),v(this,ra).forEach(([e,t,n])=>v(this,Si).removeEventListener(e,t,n)),Z(this,ra,[])}};Si=new WeakMap,qt=new WeakMap,un=new WeakMap,sa=new WeakMap,wi=new WeakMap,si=new WeakMap,Bu=new WeakMap,Xn=new WeakMap,qn=new WeakMap,Ss=new WeakMap,ra=new WeakMap,In=new WeakMap,ws=new WeakMap,Ee=new WeakSet,Wn=l(function(e,t,n){v(this,Si).addEventListener(e,t,n),v(this,ra).push([e,t,n])},"#listen"),Uu=l(function(){return{width:v(this,Si).clientWidth||1,height:v(this,Si).clientHeight||1}},"#box"),Fu=l(function([e,t]){let{width:n,height:s}=H(this,Ee,Uu).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),ox=l(function(){let{width:e,height:t}=H(this,Ee,Uu).call(this);return[e/2,t/2]},"#middle"),wp=l(function(){let{width:e,height:t}=H(this,Ee,Uu).call(this);return e/t},"#aspect"),Wi=l(function(e){let t=v(this,Si).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),Ep=l(function(e,t){v(this,qt).setOrbit(xg(v(this,qt).orbit(),v(this,qt).lookHeight(),H(this,Ee,Fu).call(this,e),H(this,Ee,Fu).call(this,t),H(this,Ee,wp).call(this)))},"#pan"),lx=l(function(e){if(v(this,si).stop(),v(this,In)?.hover(null),e.pointerType==="touch"&&(v(this,Xn).set(e.pointerId,H(this,Ee,Wi).call(this,e)),v(this,Xn).size===2)){Z(this,un,null),H(this,Ee,Xi).call(this),Z(this,qn,H(this,Ee,Ro).call(this));return}if(e.isPrimary&&e.button!==2){if(v(this,Si).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),Z(this,wi,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Lu(e),[n,s]=H(this,Ee,Wi).call(this,e),{clientX:r,clientY:a}=e;Z(this,un,t),Z(this,sa,[n,s]),H(this,Ee,Xi).call(this),Z(this,ws,window.setTimeout(()=>{Z(this,ws,null),v(this,un)===t&&!t.dragging()&&v(this,In)?.menu(n,s,r,a,!0)===!0&&Z(this,un,null)},f1))}}},"#down"),Xi=l(function(){v(this,ws)!==null&&(window.clearTimeout(v(this,ws)),Z(this,ws,null))},"#stopHold"),cx=l(function(e){if(v(this,In)===null||!v(this,In).menuOnRightClick()||(e.preventDefault(),v(this,In).menuOpen()))return;let[t,n]=H(this,Ee,Wi).call(this,e);v(this,In).menu(t,n,e.clientX,e.clientY,!1)&&(H(this,Ee,Xi).call(this),Z(this,un,null))},"#rightClick"),ux=l(function(e){if(v(this,Xn).has(e.pointerId)&&(v(this,Xn).set(e.pointerId,H(this,Ee,Wi).call(this,e)),v(this,qn)!==null)){H(this,Ee,fx).call(this);return}let t=v(this,wi);if(t!==null&&t.pointerId===e.pointerId){let r=v(this,qt).orbit();v(this,qt).setOrbit(er({...r,yaw:r.yaw-(e.clientX-t.x)*p1,pitch:r.pitch+(e.clientY-t.y)*ax})),t.x=e.clientX,t.y=e.clientY;return}let n=v(this,un);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!v(this,si).gliding()){let[r,a]=H(this,Ee,Wi).call(this,e);v(this,In)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;H(this,Ee,Xi).call(this);let s=H(this,Ee,Wi).call(this,e);H(this,Ee,Ep).call(this,v(this,sa),s),Z(this,sa,s)},"#move"),hx=l(function(e){if(v(this,Xn).delete(e.pointerId),v(this,qn)!==null){Z(this,qn,v(this,Xn).size<2?null:H(this,Ee,Ro).call(this));return}if(v(this,wi)?.pointerId===e.pointerId){Z(this,wi,null);return}let t=v(this,un);if(!(t===null||t.pointerId!==e.pointerId)){if(Z(this,un,null),H(this,Ee,Xi).call(this),!t.dragging()){let[n,s]=H(this,Ee,Wi).call(this,e);v(this,In)?.click(n,s,e.clientX,e.clientY);return}ea()||v(this,si).start(t.releaseVelocity(e.timeStamp))}},"#up"),dx=l(function(e){v(this,Xn).delete(e.pointerId),v(this,qn)!==null&&Z(this,qn,v(this,Xn).size<2?null:H(this,Ee,Ro).call(this)),v(this,un)?.pointerId===e.pointerId&&(Z(this,un,null),H(this,Ee,Xi).call(this)),v(this,wi)?.pointerId===e.pointerId&&Z(this,wi,null)},"#cancel"),Ro=l(function(){let[e,t]=[...v(this,Xn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:v(this,qt).orbit()}},"#measurePair"),fx=l(function(){let e=v(this,qn),t=H(this,Ee,Ro).call(this);e===null||t===null||v(this,qt).setOrbit(er({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*ax}))},"#twoFingers"),px=l(function(e){e.preventDefault();let t=v(this,Bu).turned(e,v(this,Ss)?.at??null);t!==0&&(v(this,si).stop(),H(this,Ee,mx).call(this,t,H(this,Ee,Wi).call(this,e)))},"#wheelTurned"),mx=l(function(e,t){let n=v(this,qt).orbit(),s=Jr(n,e),r=$r(n,v(this,qt).lookHeight(),H(this,Ee,Fu).call(this,t),H(this,Ee,wp).call(this));if(r===null||s.distance===n.distance){v(this,qt).setOrbit(s);return}let a=1-s.distance/n.distance;v(this,qt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),Ou=l(function(e,t){if(e.preventDefault(),v(this,qn)!==null){Z(this,Ss,null);return}if(t==="end"){Z(this,Ss,null);return}if(t==="start"){v(this,si).stop(),Z(this,un,null),H(this,Ee,Xi).call(this),Z(this,Ss,{orbit:v(this,qt).orbit(),at:e.timeStamp});return}let n=v(this,Ss);n!==null&&(n.at=e.timeStamp,v(this,qt).setOrbit(er({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(Tp,"CameraInput");var Sp=Tp,gx=Sp;var m1=["#9a9a9a","#4a4a4a"],Po=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?m1:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),Ap=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),g1=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),x1=l((i,e,t,n={},s=()=>0)=>{let r=i.units??[],a=Ap(r,e),o=a!==null&&a.id===e,c=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Po(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,u=a!==null&&(t||o)?{id:a.id,type:a._,kinds:a.__??[],colours:Po(a.player),count:r.length,active:o,busy:a.busy!==null&&a.busy!==void 0,fortified:(a.improvements??[]).some(({_:h})=>h==="Fortified"),veteran:(a.improvements??[]).some(({_:h})=>h==="Veteran"),health:g1(a),status:(a.busy?n.unitStatus?.(a):null)||null,facing:s(a)}:null;return c===null&&u===null?null:{city:c,unit:u}},"markerFor"),xx=x1;var _1=1,v1=.04,y1=12,b1=l((i,e,t,n,s,{water:r=0,ceiling:a=_1}={})=>{let{from:o,direction:c}=Yf(i,e,t,n),[u,h,f]=o,[d,p,_]=c;if(p>-1e-6)return null;let y=l(m=>[u+d*m,h+p*m,f+_*m],"at"),g=l(m=>{let[S,D,I]=y(m);return D-Math.max(r,s(S,I))},"above"),x=Math.max(0,(h-a)/-p),w=(h-r)/-p,R=v1/Math.max(1e-6,Math.hypot(d,_)),T=x;for(let m=x;;m=Math.min(w,m+R)){if(g(m)<=0){let S=T,D=m;for(let O=0;O<y1;O++){let V=(S+D)/2;g(V)>0?S=V:D=V}let[I,,N]=y(D);return[I,N]}if(m>=w)break;T=m}let[P,,E]=y(w);return[P,E]},"pickGround"),_x=b1;var zu=4,Es,Io,rr,ar,gn,aa,Ts,qi,Lo,Do,No,ri,ku,vx,Rp,Pp=class Pp{constructor(e,t,n,s,r){ie(this,ri);ie(this,Es);ie(this,Io);ie(this,rr);ie(this,ar);ie(this,gn);ie(this,aa);ie(this,Ts);ie(this,qi);ie(this,Lo);ie(this,Do);ie(this,No,l(e=>{let t=v(this,Es).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;v(this,Do).call(this,n*v(this,gn),s*v(this,aa))},"#click"));Z(this,Es,e),Z(this,rr,t),Z(this,ar,n),Z(this,gn,t.period().u),Z(this,aa,s),Z(this,Do,r),Z(this,qi,document.createElement("canvas"));let{v:a}=t.period();Z(this,Ts,a),Z(this,Lo,[[0,0],[-v(this,gn),0],...a===null?[]:[[0,-a],[-v(this,gn),-a]]]);let o=Math.max(1,Math.round(v(this,gn)*zu)),c=Math.max(1,Math.round(v(this,aa)*zu));[e,v(this,qi)].forEach(u=>{u.width=o,u.height=c}),Z(this,Io,e.getContext("2d")),e.addEventListener("click",v(this,No))}dispose(){v(this,Es).removeEventListener("click",v(this,No))}redraw(){let e=v(this,qi).getContext("2d");if(e===null)return;let t=v(this,ar).width(),n=v(this,ar).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,v(this,qi).width,v(this,qi).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=v(this,ar).get(a,r),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=Au(c).colour,v(this,Lo).forEach(([f,d])=>{H(this,ri,vx).call(this,e,a,r,f,d),e.fill()});let[u,h]=v(this,rr).centre(a,r);if(o.city)s.push([u,h,Po(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=Ap(o.units,null);f!==null&&s.push([u,h,Po(f.player)[0],1.4])}}s.forEach(([r,a,o,c])=>H(this,ri,Rp).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=v(this,Io);if(n===null)return;if(n.clearRect(0,0,v(this,Es).width,v(this,Es).height),n.drawImage(v(this,qi),0,0),t!==null){let[h,f]=v(this,rr).centre(t.x,t.y);n.fillStyle="#ffffff",H(this,ri,Rp).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=v(this,Ts),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-v(this,gn)*Math.floor(r/v(this,gn)),c=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-v(this,gn),0,v(this,gn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],_)=>{let[y,g]=H(this,ri,ku).call(this,d+o+f,p+c+h);_===0?n.moveTo(y,g):n.lineTo(y,g)}),n.closePath(),n.stroke()}))}};Es=new WeakMap,Io=new WeakMap,rr=new WeakMap,ar=new WeakMap,gn=new WeakMap,aa=new WeakMap,Ts=new WeakMap,qi=new WeakMap,Lo=new WeakMap,Do=new WeakMap,No=new WeakMap,ri=new WeakSet,ku=l(function(e,t){return[e*zu,t*zu]},"#px"),vx=l(function(e,t,n,s=0,r=0){e.beginPath(),v(this,rr).outline(t,n).forEach(([a,o],c)=>{let[u,h]=H(this,ri,ku).call(this,a+s,o+r);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Rp=l(function(e,t){return(v(this,Ts)===null?[0]:[-v(this,Ts),0,v(this,Ts)]).flatMap(s=>[-v(this,gn),0,v(this,gn)].map(r=>H(this,ri,ku).call(this,e+r,t+s)))},"#everywhere"),l(Pp,"Minimap3D");var Cp=Pp,yx=Cp;var M1=10,S1=4e3,bx=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),w1=350,E1=500,T1=.25,A1=400,Dt,Bo,zo,tt,hn,or,ko,Go,it,vt,xn,la,Vo,lr,Cs,ca,Ho,Wo,Dn,Xo,Yi,ai,qo,Ei,Rs,Yo,Nn,ua,ha,Ps,Zi,da,Is,cr,fa,$i,Zo,Ji,pa,ma,$o,ga,Jo,xa,_a,Ko,ae,Lp,Mx,Gu,Sx,Uo,wx,Ex,Tx,Dp,Vu,Ax,Cx,Fo,As,Oo,Rx,Px,Np,oa,Up,Hu,Fp,Ix,Lx,Op,Ln,Dx,Nx,Bp,zp=class zp{constructor(e,t=Tg){ie(this,ae);ie(this,Dt);ie(this,Bo);ie(this,zo,[]);ie(this,tt);ie(this,hn);ie(this,or,null);ie(this,ko,0);ie(this,Go,"");ie(this,it);ie(this,vt,null);ie(this,xn,null);ie(this,la);ie(this,Vo);ie(this,lr);ie(this,Cs,null);ie(this,ca,null);ie(this,Ho);ie(this,Wo,!1);ie(this,Dn);ie(this,Xo);ie(this,Yi,new Map);ie(this,ai,new Map);ie(this,qo);ie(this,Ei,null);ie(this,Rs,null);ie(this,Yo);ie(this,Nn,l(()=>{let e=v(this,Rs);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),Z(this,Rs,null),document.removeEventListener("keydown",v(this,Nn),!0),e.open&&v(this,Dn).endTooltip(v(this,Dt)))},"#endHover"));ie(this,ua,null);ie(this,ha,!0);ie(this,Ps,new Map);ie(this,Zi,null);ie(this,da,new Map);ie(this,Is,new Map);ie(this,cr,[]);ie(this,fa,0);ie(this,$i,null);ie(this,Zo,null);ie(this,Ji,!0);ie(this,pa,!1);ie(this,ma,!1);ie(this,$o);ie(this,ga);ie(this,Jo,"");ie(this,xa,l(()=>H(this,ae,Bp).call(this),"#resizeHandler"));ie(this,_a,null);ie(this,Ko,!1);Z(this,Dt,e.mapCanvas),Z(this,Bo,e.coveredBy),Z(this,$o,e.art),Z(this,Xo,{cityName:e.cityName,unitStatus:e.unitStatus}),Z(this,ga,e.art.id()),this.world=e.world,Z(this,tt,new nx(e.world)),Z(this,cr,e.world.tiles()),Z(this,fa,v(this,cr).length),Z(this,Vo,e.cameraDistance),Z(this,Ho,e.lockVerticalEdges);let n=e.cameraDistance.get();Z(this,it,H(this,ae,Fo).call(this,{...mg(v(this,tt).layout.centre(0,0)),...n===null?{}:{distance:n}})),Z(this,lr,v(this,it).distance),this.portal=new tm(e,{centre:l(()=>H(this,ae,Ax).call(this),"centre"),centreOn:l((s,r)=>H(this,ae,Cx).call(this,s,r),"centreOn"),changed:l(()=>H(this,ae,Ln).call(this),"changed"),visible:l((s,r,a)=>H(this,ae,Sx).call(this,s,r,a),"visible")}),Z(this,hn,t(e.mapCanvas,{period:v(this,tt).layout.period(),ground:v(this,tt).ground()})),e.minimapCanvas!==null&&Z(this,ua,new yx(e.minimapCanvas,v(this,tt).layout,e.world,v(this,tt).extentV(),(s,r)=>H(this,ae,Oo).call(this,{...v(this,vt)?.to??v(this,it),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(Z(this,or,H(this,ae,Dx).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),v(this,tt).queueAll(...H(this,ae,Vu).call(this)),H(this,ae,Hu).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),Z(this,Dn,e.squares),Z(this,Yo,e.playerId),Z(this,qo,e.transport),Z(this,la,new gx(e.mapCanvas,{orbit:l(()=>v(this,it),"orbit"),lookHeight:l(()=>v(this,xn)??0,"lookHeight"),setOrbit:l(s=>this.setOrbit(s),"setOrbit")},{click:l((s,r)=>H(this,ae,wx).call(this,s,r),"click"),menu:l((s,r,a,o,c)=>H(this,ae,Ex).call(this,s,r,a,o,c),"menu"),menuOnRightClick:l(()=>v(this,Dn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>v(this,Dn).menuOpen(),"menuOpen"),hover:l(s=>H(this,ae,Tx).call(this,s),"hover")})),window.addEventListener("resize",v(this,xa)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(Z(this,_a,new ResizeObserver(v(this,xa))),v(this,_a).observe(e.mapCanvas.parentElement)),H(this,ae,Bp).call(this),H(this,ae,Ln).call(this)}land(){return v(this,tt)}orbit(){return v(this,it)}moving(){return v(this,vt)!==null||v(this,la).moving()}setOrbit(e){v(this,Nn).call(this),Z(this,vt,null),Z(this,it,H(this,ae,Fo).call(this,e)),H(this,ae,Ln).call(this)}activeUnit(){return{unit:v(this,$i),pendingTile:v(this,Zo)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=v(this,vt)?.to??v(this,it);H(this,ae,Oo).call(this,{...t,yaw:t.yaw+e*Xf},H(this,ae,Lp).call(this)+e*Xf)}faceNorth(){H(this,ae,Oo).call(this,{...v(this,vt)?.to??v(this,it),yaw:0},bx(-v(this,it).yaw))}debugViewModes(){return[]}dispose(){H(this,ae,Op).call(this,!0),Z(this,Ko,!0),v(this,Nn).call(this),v(this,la).dispose(),v(this,ua)?.dispose(),window.removeEventListener("resize",v(this,xa)),v(this,_a)?.disconnect(),v(this,Zi)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(v(this,Zi)),Z(this,Zi,null),v(this,or)?.remove(),v(this,hn).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=v(this,Ei);e!==null&&(Z(this,Ei,null),v(this,Dt).classList.remove("picking-tile"),e.window?.close())}flush(){H(this,ae,Np).call(this),H(this,ae,Ln).call(this)}mapEvent(e){if(e.kind==="moved"){H(this,ae,Mx).call(this,e.unit.id,e.from,e.to),H(this,ae,Gu).call(this,e.unit.id,e.from,e.to);return}H(this,ae,Gu).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),H(this,ae,Gu).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=v(this,Dt).getBoundingClientRect();Z(this,zo,v(this,Bo).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};Z(this,Ei,s),v(this,Dt).classList.add("picking-tile"),s.window=v(this,Dn).prompt(n,()=>{v(this,Ei)===s&&(Z(this,Ei,null),v(this,Dt).classList.remove("picking-tile"))})}picking(){return v(this,Ei)!==null}queueTile(e){v(this,da).set(`${e.x},${e.y}`,e)}redrawArt(){let e=v(this,$o).id();return e===v(this,ga)?"unchanged":(Z(this,ga,e),"redrawn")}releaseTiles(){v(this,da).forEach((e,t)=>v(this,Is).set(t,e)),v(this,da).clear(),v(this,Is).size>0&&H(this,ae,Ln).call(this)}setActiveUnit(e,t){let n=v(this,$i)?.tile;Z(this,$i,e),Z(this,Zo,t??null),[n,e?.tile].forEach(s=>{s&&H(this,ae,oa).call(this,s.x,s.y)}),H(this,ae,Ln).call(this)}setWaiting(e){Z(this,ma,e),e&&v(this,Nn).call(this)}showActiveUnit(e){v(this,Ji)||(Z(this,Ji,!0),H(this,ae,Hu).call(this),H(this,ae,Ln).call(this))}shown(){return{units:v(this,Ji),yields:v(this,pa),waiting:v(this,ma)}}tilesPending(){return v(this,Is).size}toggleUnits(){Z(this,Ji,!v(this,Ji)),H(this,ae,Hu).call(this),H(this,ae,Ln).call(this)}toggleYields(){Z(this,pa,!v(this,pa))}zoomBy(e){v(this,Nn).call(this),Z(this,it,Jr(v(this,it),e)),v(this,vt)!==null&&(v(this,vt).from=Jr(v(this,vt).from,e),v(this,vt).to=Jr(v(this,vt).to,e)),H(this,ae,Ln).call(this)}};Dt=new WeakMap,Bo=new WeakMap,zo=new WeakMap,tt=new WeakMap,hn=new WeakMap,or=new WeakMap,ko=new WeakMap,Go=new WeakMap,it=new WeakMap,vt=new WeakMap,xn=new WeakMap,la=new WeakMap,Vo=new WeakMap,lr=new WeakMap,Cs=new WeakMap,ca=new WeakMap,Ho=new WeakMap,Wo=new WeakMap,Dn=new WeakMap,Xo=new WeakMap,Yi=new WeakMap,ai=new WeakMap,qo=new WeakMap,Ei=new WeakMap,Rs=new WeakMap,Yo=new WeakMap,Nn=new WeakMap,ua=new WeakMap,ha=new WeakMap,Ps=new WeakMap,Zi=new WeakMap,da=new WeakMap,Is=new WeakMap,cr=new WeakMap,fa=new WeakMap,$i=new WeakMap,Zo=new WeakMap,Ji=new WeakMap,pa=new WeakMap,ma=new WeakMap,$o=new WeakMap,ga=new WeakMap,Jo=new WeakMap,xa=new WeakMap,_a=new WeakMap,Ko=new WeakMap,ae=new WeakSet,Lp=l(function(){let e=v(this,vt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),Mx=l(function(e,t,n){let s=performance.now(),r=v(this,ai).get(e);if(v(this,ai).forEach(({until:g},x)=>{g<s&&v(this,ai).delete(x)}),typeof requestAnimationFrame!="function"||ea())return;let[a,o]=v(this,tt).layout.centre(t.x,t.y),[c,u]=v(this,tt).layout.centre(n.x,n.y),{u:h,v:f}=v(this,tt).layout.period(),d=l((g,x)=>x===null?g:g-x*Math.round(g/x),"short"),[p,_,y]=(r!==void 0&&r.until>=s?r.from:null)??v(this,hn).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,v(this,tt).surfaceAt(a,o)),o];v(this,ai).set(e,{from:[c+d(p-c,h),_,u+d(y-u,f)],to:`${n.x},${n.y}`,until:s+2e3})},"#setOff"),Gu=l(function(e,t,n){let[s,r]=v(this,tt).layout.centre(t.x,t.y),[a,o]=v(this,tt).layout.centre(n.x,n.y),{u:c,v:u}=v(this,tt).layout.period(),h=l((p,_)=>_===null?p:p-_*Math.round(p/_),"short"),f=h(a-s,c),d=h(o-r,u);f===0&&d===0||(v(this,Yi).delete(e),v(this,Yi).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),v(this,Yi).size>S1&&v(this,Yi).delete(v(this,Yi).keys().next().value),[t,n].forEach(({x:p,y:_})=>H(this,ae,oa).call(this,p,_)),H(this,ae,Ln).call(this))},"#face"),Sx=l(function(e,t,n){let s=v(this,Dt).clientWidth,r=v(this,Dt).clientHeight;if(s<=0||r<=0)return!1;let a=v(this,vt)?.to??v(this,it),[o,c]=v(this,tt).layout.centre(e,t),{u,v:h}=H(this,ae,As).call(this),[f,d]=a.focus,p=l((m,S,D)=>D===null?m:m+D*Math.round((S-m)/D),"nearest"),_=[p(o,f,u),Math.max(0,v(this,tt).heightAt(o,c)),p(c,d,h)],y=s/r,g=v(this,xn)??0,x=qf(a,g,_,y),w=qf(a,g,[_[0]+Math.cos(a.yaw),_[1],_[2]+Math.sin(a.yaw)],y);if(x===null||w===null)return!1;let R=(x[0]+1)/2*s,T=(1-x[1])/2*r,P=Math.abs(w[0]-x[0])*(s/2),E=(n+.5)*P;return R>=E&&R<=s-E&&T>=E&&T<=r-E&&!v(this,zo).some(({left:m,top:S,right:D,bottom:I})=>R>=m-P/2&&R<=D+P/2&&T>=S-P/2&&T<=I+P/2)},"#visible"),Uo=l(function(e,t){let n=v(this,Dt).clientWidth,s=v(this,Dt).clientHeight;if(n<=0||s<=0)return null;let r=_x(v(this,it),v(this,xn)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>v(this,tt).heightAt(f,d));if(r===null)return null;let[a,o]=v(this,tt).layout.tileAt(...r),c=this.world.width(),u=this.world.height();return!(H(this,ae,As).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),wx=l(function(e,t){let n=H(this,ae,Uo).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=v(this,Ei);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&v(this,Dn).click(this.portal,n)},"#clicked"),Ex=l(function(e,t,n,s,r){let a=v(this,$i),o=H(this,ae,Uo).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),v(this,Dn).menu(this.portal,n,s,a,o,v(this,qo),r),!0)},"#menu"),Tx=l(function(e){let t=e===null||v(this,ma)||v(this,Dn).menuOpen()?null:H(this,ae,Uo).call(this,e.x,e.y),n=v(this,Rs);if(t===null||e===null){v(this,Nn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}v(this,Nn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,H(this,ae,Dp).call(this,r)},A1),Z(this,Rs,r),document.addEventListener("keydown",v(this,Nn),!0)},"#hovered"),Dp=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===v(this,Dt),n=t?H(this,ae,Uo).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){v(this,Nn).call(this);return}let s=v(this,Dn).tooltip(v(this,Dt),n,v(this,Yo),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&v(this,Dn).endTooltip(v(this,Dt)),e.open=s},"#showHover"),Vu=l(function(){return[...v(this,it).focus]},"#focus"),Ax=l(function(){let[e,t]=v(this,tt).layout.tileAt(...v(this,it).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:H(this,ae,As).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),Cx=l(function(e,t){let[n,s]=v(this,tt).layout.centre(e,t),[r,a]=(v(this,vt)?.to??v(this,it)).focus;if(n===r&&s===a)return;let o={...v(this,vt)?.to??v(this,it),focus:[n,s]},{u:c,v:u}=H(this,ae,As).call(this),h=l((_,y)=>y===null?_:_-y*Math.round(_/y),"short"),[f,d]=v(this,it).focus,p=Math.hypot(h(n-f,c),h(s-d,u));if(!v(this,Wo)||p>v(this,it).distance*1.5){Z(this,Wo,!0),this.setOrbit(o);return}H(this,ae,Oo).call(this,o)},"#centreOn"),Fo=l(function(e){return _g(er(e),H(this,ae,As).call(this),v(this,tt).extentV())},"#settle"),As=l(function(){let e=v(this,tt).layout.period();return this.portal?.lockVerticalEdges()??v(this,Ho)?{u:e.u,v:null}:e},"#period"),Oo=l(function(e,t=H(this,ae,Lp).call(this)+bx(e.yaw-(v(this,vt)?.to??v(this,it)).yaw)){v(this,Nn).call(this),typeof requestAnimationFrame!="function"||ea()?(Z(this,vt,null),Z(this,it,H(this,ae,Fo).call(this,e))):Z(this,vt,{from:v(this,it),to:e,started:null,turn:t,drawn:0}),H(this,ae,Ln).call(this)},"#moveTo"),Rx=l(function(e){let t=v(this,vt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/w1);return t.drawn=n*n*(3-2*n),Z(this,it,H(this,ae,Fo).call(this,vg(t.from,t.to,n,H(this,ae,As).call(this),t.turn))),n>=1&&Z(this,vt,null),n<1},"#moveCamera"),Px=l(function(e){let[t,n]=v(this,it).focus,s=Math.max(0,v(this,tt).heightAt(t,n));return!e||v(this,xn)===null||ea()?(Z(this,xn,s),!1):(Z(this,xn,v(this,xn)+(s-v(this,xn))*T1),Math.abs(s-v(this,xn))<.002?(Z(this,xn,s),!1):!0)},"#followHeight"),Np=l(function(){let e=[...v(this,Is).values()].map(({x:r,y:a})=>[r,a]),t=this.world.tiles(),n=t!==v(this,cr)||t.length!==v(this,fa);Z(this,cr,t),Z(this,fa,t.length),v(this,Is).clear(),v(this,tt).changed(e,...H(this,ae,Vu).call(this),n),e.forEach(([r,a])=>H(this,ae,oa).call(this,r,a));let s=v(this,Rs);s!==null&&s.open&&e.some(([r,a])=>r===s.x&&a===s.y)&&H(this,ae,Dp).call(this,s),(e.length>0||n)&&Z(this,ha,!0),n&&v(this,Ps).forEach((r,a)=>{let[o,c]=a.split(",").map(Number);H(this,ae,oa).call(this,o,c)})},"#takeTiles"),oa=l(function(e,t){let n=`${e},${t}`,s=xx(this.world.get(e,t),v(this,$i)?.id??null,v(this,Ji),v(this,Xo),d=>v(this,Yi).get(d.id)??0),[r,a]=v(this,tt).layout.centre(e,t),o=[r,Math.max(0,v(this,tt).surfaceAt(r,a)),a],c=s===null?null:JSON.stringify([s,o]),u=c!==(v(this,Ps).get(n)??null);if(u&&v(this,hn).setMarker(n,o,s),v(this,ai).size===0){u&&H(this,ae,Up).call(this,n,c);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));v(this,ai).forEach((d,p)=>{if(d.until<h){v(this,ai).delete(p);return}d.to!==n||!f.has(p)||(v(this,ai).delete(p),u&&s?.unit?.id===p&&v(this,hn).slideMarker(n,d.from))}),u&&H(this,ae,Up).call(this,n,c)},"#mark"),Up=l(function(e,t){t===null?v(this,Ps).delete(e):v(this,Ps).set(e,t)},"#remember"),Hu=l(function(){let e=new Set(v(this,Ps).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);H(this,ae,oa).call(this,n,s)})},"#markAll"),Fp=l(function(e){let t=performance.now(),n=H(this,ae,Rx).call(this,t),[s,r]=H(this,ae,Vu).call(this);H(this,ae,Np).call(this),`${s},${r}`!==v(this,Go)&&(Z(this,Go,`${s},${r}`),v(this,tt).refocus(s,r)),v(this,tt).build(v(this,hn),e);let a=H(this,ae,Px).call(this,e!==null);v(this,hn).view(v(this,it),v(this,xn)??0,H(this,ae,As).call(this)),v(this,hn).render(),H(this,ae,Ix).call(this),H(this,ae,Op).call(this),Z(this,ko,performance.now()-t),H(this,ae,Nx).call(this),(v(this,tt).pending()>0||v(this,tt).overlaysPending()>0||v(this,hn).sliding()||n||a)&&H(this,ae,Ln).call(this)},"#frameDrawn"),Ix=l(function(){let e=v(this,ua);if(e===null)return;v(this,ha)&&(Z(this,ha,!1),e.redraw());let t=v(this,$i)?.tile??null;e.show(H(this,ae,Lx).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),Lx=l(function(){let e=v(this,Dt).clientWidth,t=v(this,Dt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=v(this,xn)??0,r=Mu(v(this,it).distance).far,[a,o]=v(this,it).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=$r(v(this,it),s,[h,d],n);if(p!==null){let _=Math.hypot(p[0]-a,p[1]-o),y=_>r?r/_:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),Op=l(function(e=!1){let t=(e?v(this,vt)?.to??v(this,it):v(this,it)).distance,n=l(()=>{v(this,Cs)!==null&&clearTimeout(v(this,Cs)),Z(this,Cs,null),Z(this,ca,null)},"stop"),s=l(()=>{n(),Z(this,lr,t),v(this,Vo).set(t)},"keep");if(e){n(),t!==v(this,lr)&&s();return}if(v(this,vt)!==null||t===v(this,lr)){n();return}v(this,Cs)!==null&&t===v(this,ca)||(n(),Z(this,ca,t),Z(this,Cs,setTimeout(s,E1)))},"#keepDistance"),Ln=l(function(){if(!v(this,Ko)){if(typeof requestAnimationFrame!="function"){H(this,ae,Fp).call(this,null);return}v(this,Zi)===null&&Z(this,Zi,requestAnimationFrame(()=>{Z(this,Zi,null),H(this,ae,Fp).call(this,M1)}))}},"#draw"),Dx=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),Nx=l(function(){if(v(this,or)===null)return;let{drawCalls:e,triangles:t,geometries:n}=v(this,hn).stats();v(this,or).textContent=[`frame ${v(this,ko).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${v(this,tt).pending()}`].join(`
`)},"#showStats"),Bp=l(function(){let e=v(this,Dt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===v(this,Jo)||(Z(this,Jo,r),v(this,hn).resize(t,n,s),this.measureCovered(),v(this,hn).render())},"#resize"),l(zp,"MapView3D");var Ip=zp,Ux=Ip;var C1={createMapView3D:l(i=>new Ux(i),"createMapView3D")};globalThis[Qp]=C1;})();
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
