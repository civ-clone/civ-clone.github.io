"use strict";(()=>{var Ix=Object.create;var Hu=Object.defineProperty;var Lx=Object.getOwnPropertyDescriptor;var Dx=Object.getOwnPropertyNames;var Nx=Object.getPrototypeOf,Ux=Object.prototype.hasOwnProperty;var Hp=i=>{throw TypeError(i)};var c=(i,e)=>Hu(i,"name",{value:e,configurable:!0});var Fx=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Ox=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Dx(e))!Ux.call(i,s)&&s!==t&&Hu(i,s,{get:()=>e[s],enumerable:!(n=Lx(e,s))||n.enumerable});return i};var Bx=(i,e,t)=>(t=i!=null?Ix(Nx(i)):{},Ox(e||!i||!i.__esModule?Hu(t,"default",{value:i,enumerable:!0}):t,i));var Wu=(i,e,t)=>e.has(i)||Hp("Cannot "+t);var v=(i,e,t)=>(Wu(i,e,"read from private field"),t?t.call(i):e.get(i)),ne=(i,e,t)=>e.has(i)?Hp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),q=(i,e,t,n)=>(Wu(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),H=(i,e,t)=>(Wu(i,e,"access private method"),t);var Xp=Fx(Ns=>{"use strict";var ai,Qi=Ns&&Ns.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.EventEmitter=void 0;var Xu=class Xu{constructor(){ai.set(this,{})}on(e,t){e in Qi(this,ai,"f")||(Qi(this,ai,"f")[e]=[]),Qi(this,ai,"f")[e].push(t)}once(e,t){let n=c((...s)=>{t(...s),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in Qi(this,ai,"f")))return;let n=Qi(this,ai,"f")[e].indexOf(t);n!==-1&&Qi(this,ai,"f")[e].splice(n,1)}emit(e,...t){e in Qi(this,ai,"f")&&Qi(this,ai,"f")[e].forEach((n=>n(...t)))}};c(Xu,"i");var jo=Xu;Ns.EventEmitter=jo,ai=new WeakMap,Ns.default=jo});var Wp="civMap3D";var qp=Bx(Xp());var ji,oi,cr,Yu=class Yu extends qp.EventEmitter{constructor(t,n){super();ne(this,ji);ne(this,oi);ne(this,cr);q(this,oi,t),q(this,cr,t.lockVerticalEdges),q(this,ji,n)}center(){return v(this,ji).centre()}isVisible(t,n,s=0){return v(this,ji).visible(t,n,s)}lockVerticalEdges(){return v(this,cr)}nativeTileSize(){return v(this,oi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=v(this,oi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return v(this,oi).playerId}render(){v(this,ji).changed()}scale(){return v(this,oi).art.scale()}setCenter(t,n){v(this,ji).centreOn(t,n)}setLockVerticalEdges(t){q(this,cr,t)}setZoom(){}transport(){return v(this,oi).transport}zoom(){return v(this,oi).art.zoom()}};ji=new WeakMap,oi=new WeakMap,cr=new WeakMap,c(Yu,"MapPortal3D");var qu=Yu,Yp=qu;var ym=0,wh=1,bm=2;var $a=1,_c=2,kr=3,ms=0,ln=1,hi=2,Gs=0,Gr=1,Eh=2,Th=3,Ah=4,Mm=5;var Vs=100,Sm=101,wm=102,Em=103,Tm=104,Am=200,Cm=201,Rm=202,Pm=203,Ch=204,Rh=205,Im=206,Lm=207,Dm=208,Nm=209,Um=210,Fm=211,Om=212,Bm=213,zm=214,El=0,Tl=1,Al=2,Pr=3,Cl=4,Rl=5,Pl=6,Il=7,Ph=0,km=1,Gm=2,di=0,Ih=1,Lh=2,Dh=3,Ja=4,Nh=5,Uh=6,Fh=7;var Oh=300,Hs=301,Vr=302,vc=303,yc=304,zs=1e3,zn=1001,Ll=1002,zt=1003,Vm=1004;var Ka=1005;var kt=1006,bc=1007;var Bi=1008;var fn=1009,Bh=1010,zh=1011,Hr=1012,Mc=1013,jn=1014,ei=1015,wn=1016,Sc=1017,wc=1018,Ws=1020,kh=35902,Gh=35899,Vh=1021,Hh=1022,ti=1023,Ni=1026,zi=1027,Wh=1028,Ec=1029,fi=1030,Tc=1031;var Ac=1033,Qa=33776,ja=33777,eo=33778,to=33779,Cc=35840,Rc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Nc=37496,Uc=37488,Fc=37489,no=37490,Oc=37491,Bc=37808,zc=37809,kc=37810,Gc=37811,Vc=37812,Hc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Zc=37818,$c=37819,Jc=37820,Kc=37821,Qc=36492,jc=36494,eu=36495,tu=36283,nu=36284,io=36285,iu=36286;var Aa=2300,Dl=2301,Sl=2302,xh=2303,_h=2400,vh=2401,yh=2402;var Hm=3200;var su=0,Wm=1,ki="",Bt="srgb",Ca="srgb-linear",Ra="linear",rt="srgb";var wl=7680;var Xm=519,qm=512,Ym=513,Zm=514,Xh=515,$m=516,Jm=517,qh=518,Yh=519,Zh=35044;var $h="300 es",kn=2e3,Ir=2001;function zx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}c(zx,"arrayNeedsUint32");function kx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}c(kx,"isTypedArray");function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}c(Pa,"createElementNS");function Km(){let i=Pa("canvas");return i.style.display="block",i}c(Km,"createCanvasElement");var Zp={},Lr=null;function Ia(...i){let e="THREE."+i.shift();Lr?Lr("log",e,...i):console.log(e,...i)}c(Ia,"log");function Qm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}c(Qm,"enhanceLogMessage");function ze(...i){i=Qm(i);let e="THREE."+i.shift();if(Lr)Lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}c(ze,"warn");function Ge(...i){i=Qm(i);let e="THREE."+i.shift();if(Lr)Lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}c(Ge,"error");function Ea(...i){let e=i.join(" ");e in Zp||(Zp[e]=!0,ze(...i))}c(Ea,"warnOnce");function jm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}c(r,"probe"),setTimeout(r,t)})}c(jm,"probeAsync");var e0={[El]:El,[Al]:Pl,[Cl]:Cl,[Pr]:Rl,[Tl]:Tl,[Pl]:Al,[Il]:Il,[Rl]:Pr},ed=class ed{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}};c(ed,"EventDispatcher");var ci=ed,$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zu=Math.PI/180,Nl=180/Math.PI;function Xs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}c(Xs,"generateUUID");function je(i,e,t){return Math.max(e,Math.min(t,i))}c(je,"clamp");function Gx(i,e){return(i%e+e)%e}c(Gx,"euclideanModulo");function $u(i,e,t){return(1-t)*i+t*e}c($u,"lerp");function t0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}c(t0,"floorPowerOfTwo");function ru(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}c(ru,"getNormalizationScale");function n0(i,e){if(e.constructor===Float32Array)return i;let t=ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}c(n0,"denormalize");function i0(i,e){if(e.constructor===Float32Array)return i;let t=ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}c(i0,"normalize");var nc=class nc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};c(nc,"Vector2"),nc.prototype.isVector2=!0;var ke=nc,td=class td{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],b=r[a+3];if(f!==b||l!==d||u!==p||h!==x){let _=l*d+u*p+h*x+f*b;_<0&&(d=-d,p=-p,x=-x,b=-b,_=-_);let g=1-o;if(_<.9995){let w=Math.acos(_),C=Math.sin(w);g=Math.sin(g*w)/C,o=Math.sin(o*w)/C,l=l*g+d*o,u=u*g+p*o,h=h*g+x*o,f=f*g+b*o}else{l=l*g+d*o,u=u*g+p*o,h=h*g+x*o,f=f*g+b*o;let w=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=w,u*=w,h*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*p-u*d,e[t+1]=l*x+h*d+u*f-o*p,e[t+2]=u*x+h*p+o*d-l*f,e[t+3]=h*x-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*f+u*p*x,this._y=u*p*f-d*h*x,this._z=u*h*x+d*p*f,this._w=u*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+u*p*x,this._y=u*p*f-d*h*x,this._z=u*h*x-d*p*f,this._w=u*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-u*p*x,this._y=u*p*f+d*h*x,this._z=u*h*x+d*p*f,this._w=u*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-u*p*x,this._y=u*p*f+d*h*x,this._z=u*h*x-d*p*f,this._w=u*h*f+d*p*x;break;case"YZX":this._x=d*h*f+u*p*x,this._y=u*p*f+d*h*x,this._z=u*h*x-d*p*f,this._w=u*h*f-d*p*x;break;case"XZY":this._x=d*h*f-u*p*x,this._y=u*p*f-d*h*x,this._z=u*h*x+d*p*f,this._w=u*h*f+d*p*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*l,this._y=s*h+a*l+r*o-n*u,this._z=r*h+a*u+n*l-s*o,this._w=a*h-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,t=Math.sin(t*u)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c(td,"Quaternion");var an=td,ic=class ic{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*u+a*f-o*h,this.y=n+l*h+o*u-r*f,this.z=s+l*f+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c(ic,"Vector3"),ic.prototype.isVector3=!0;var G=ic,Ju=new G,$p=new an,sc=class sc{constructor(e,t,n,s,r,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u)}set(e,t,n,s,r,a,o,l,u){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],b=s[0],_=s[3],g=s[6],w=s[1],C=s[4],T=s[7],R=s[2],E=s[5],m=s[8];return r[0]=a*b+o*w+l*R,r[3]=a*_+o*C+l*E,r[6]=a*g+o*T+l*m,r[1]=u*b+h*w+f*R,r[4]=u*_+h*C+f*E,r[7]=u*g+h*T+f*m,r[2]=d*b+p*w+x*R,r[5]=d*_+p*C+x*E,r[8]=d*g+p*T+x*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*l+s*r*u-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*l-h*r,p=u*r-a*l,x=t*f+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return e[0]=f*b,e[1]=(s*u-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*l-u*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return Ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return Ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};c(sc,"Matrix3"),sc.prototype.isMatrix3=!0;var Ve=sc,Ku=new Ve,Jp=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kp=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vx(){let i={enabled:!0,workingColorSpace:Ca,spaces:{},convert:c(function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b))),s},"convert"),workingToColorSpace:c(function(s,r){return this.convert(s,this.workingColorSpace,r)},"workingToColorSpace"),colorSpaceToWorking:c(function(s,r){return this.convert(s,r,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:c(function(s){return this.spaces[s].primaries},"getPrimaries"),getTransfer:c(function(s){return s===ki?Ra:this.spaces[s].transfer},"getTransfer"),getToneMappingMode:c(function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:c(function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},"getLuminanceCoefficients"),define:c(function(s){Object.assign(this.spaces,s)},"define"),_getMatrix:c(function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:c(function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:c(function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ca]:{primaries:e,whitePoint:n,transfer:Ra,toXYZ:Jp,fromXYZ:Kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Jp,fromXYZ:Kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}c(Vx,"createColorManagement");var Qe=Vx();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}c(Di,"SRGBToLinear");function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}c(Rr,"LinearToSRGB");var ur,nd=class nd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=Pa("canvas")),ur.width=e.width,ur.height=e.height;let s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ur}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};c(nd,"ImageUtils");var Ul=nd,Hx=0,id=class id{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qu(s[a].image)):r.push(Qu(s[a]))}else r=Qu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};c(id,"TextureSource");var Dr=id;function Qu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}c(Qu,"serializeImage");var Wx=0,ju=new G,Ar=class Ar extends ci{constructor(e=Ar.DEFAULT_IMAGE,t=Ar.DEFAULT_MAPPING,n=zn,s=zn,r=kt,a=Bi,o=ti,l=fn,u=Ar.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Xs(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};c(Ar,"Texture");var on=Ar;on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Oh;on.DEFAULT_ANISOTROPY=1;var rc=class rc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],x=l[9],b=l[2],_=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+b)<.1&&Math.abs(x+_)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(u+1)/2,T=(p+1)/2,R=(g+1)/2,E=(h+d)/4,m=(f+b)/4,S=(x+_)/4;return C>T&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=m/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=E/s,r=S/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=m/r,s=S/r),this.set(n,s,r,t),this}let w=Math.sqrt((_-x)*(_-x)+(f-b)*(f-b)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(_-x)/w,this.y=(f-b)/w,this.z=(d-h)/w,this.w=Math.acos((u+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};c(rc,"Vector4"),rc.prototype.isVector4=!0;var xt=rc,sd=class sd extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new on({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(sd,"RenderTarget");var Fl=sd,rd=class rd extends Fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};c(rd,"WebGLRenderTarget");var yn=rd,ad=class ad extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};c(ad,"DataArrayTexture");var La=ad;var od=class od extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};c(od,"Data3DTexture");var Ol=od;var Ta=class Ta{constructor(e,t,n,s,r,a,o,l,u,h,f,d,p,x,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,u,h,f,d,p,x,b,_)}set(e,t,n,s,r,a,o,l,u,h,f,d,p,x,b,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=h,g[10]=f,g[14]=d,g[3]=p,g[7]=x,g[11]=b,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,x=o*h,b=o*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=p+x*u,t[5]=d-b*u,t[9]=-o*l,t[2]=b-d*u,t[6]=x+p*u,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,x=u*h,b=u*f;t[0]=d+b*o,t[4]=x*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,x=u*h,b=u*f;t[0]=d-b*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*f,x=o*h,b=o*f;t[0]=l*h,t[4]=x*u-p,t[8]=d*u+b,t[1]=l*f,t[5]=b*u+d,t[9]=p*u-x,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*u,x=o*l,b=o*u;t[0]=l*h,t[4]=b-d*f,t[8]=x*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+x,t[10]=d-b*f}else if(e.order==="XZY"){let d=a*l,p=a*u,x=o*l,b=o*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+b,t[5]=a*h,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*h,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xx,e,qx)}lookAt(e,t,n){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),es.crossVectors(n,_n),es.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),es.crossVectors(n,_n)),es.normalize(),el.crossVectors(_n,es),s[0]=es.x,s[4]=el.x,s[8]=_n.x,s[1]=es.y,s[5]=el.y,s[9]=_n.y,s[2]=es.z,s[6]=el.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],b=n[6],_=n[10],g=n[14],w=n[3],C=n[7],T=n[11],R=n[15],E=s[0],m=s[4],S=s[8],N=s[12],I=s[1],U=s[5],D=s[9],B=s[13],P=s[2],k=s[6],Y=s[10],z=s[14],se=s[3],Z=s[7],ee=s[11],re=s[15];return r[0]=a*E+o*I+l*P+u*se,r[4]=a*m+o*U+l*k+u*Z,r[8]=a*S+o*D+l*Y+u*ee,r[12]=a*N+o*B+l*z+u*re,r[1]=h*E+f*I+d*P+p*se,r[5]=h*m+f*U+d*k+p*Z,r[9]=h*S+f*D+d*Y+p*ee,r[13]=h*N+f*B+d*z+p*re,r[2]=x*E+b*I+_*P+g*se,r[6]=x*m+b*U+_*k+g*Z,r[10]=x*S+b*D+_*Y+g*ee,r[14]=x*N+b*B+_*z+g*re,r[3]=w*E+C*I+T*P+R*se,r[7]=w*m+C*U+T*k+R*Z,r[11]=w*S+C*D+T*Y+R*ee,r[15]=w*N+C*B+T*z+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],x=e[3],b=e[7],_=e[11],g=e[15],w=l*p-u*d,C=o*p-u*f,T=o*d-l*f,R=a*p-u*h,E=a*d-l*h,m=a*f-o*h;return t*(b*w-_*C+g*T)-n*(x*w-_*R+g*E)+s*(x*C-b*R+g*m)-r*(x*T-b*E+_*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*l)+s*(r*u-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],x=e[12],b=e[13],_=e[14],g=e[15],w=t*o-n*a,C=t*l-s*a,T=t*u-r*a,R=n*l-s*o,E=n*u-r*o,m=s*u-r*l,S=h*b-f*x,N=h*_-d*x,I=h*g-p*x,U=f*_-d*b,D=f*g-p*b,B=d*g-p*_,P=w*B-C*D+T*U+R*I-E*N+m*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(o*B-l*D+u*U)*k,e[1]=(s*D-n*B-r*U)*k,e[2]=(b*m-_*E+g*R)*k,e[3]=(d*E-f*m-p*R)*k,e[4]=(l*I-a*B-u*N)*k,e[5]=(t*B-s*I+r*N)*k,e[6]=(_*T-x*m-g*C)*k,e[7]=(h*m-d*T+p*C)*k,e[8]=(a*D-o*I+u*S)*k,e[9]=(n*I-t*D-r*S)*k,e[10]=(x*E-b*T+g*w)*k,e[11]=(f*T-h*E-p*w)*k,e[12]=(o*N-a*U-l*S)*k,e[13]=(t*U-n*N+s*S)*k,e[14]=(b*C-x*R-_*w)*k,e[15]=(h*R-f*C+d*w)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,h*o+n,h*l-s*a,0,u*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,h=a+a,f=o+o,d=r*u,p=r*h,x=r*f,b=a*h,_=a*f,g=o*f,w=l*u,C=l*h,T=l*f,R=n.x,E=n.y,m=n.z;return s[0]=(1-(b+g))*R,s[1]=(p+T)*R,s[2]=(x-C)*R,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(d+g))*E,s[6]=(_+w)*E,s[7]=0,s[8]=(x+C)*m,s[9]=(_-w)*m,s[10]=(1-(d+b))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),l=hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let u=1/a,h=1/o,f=1/l;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=kn,l=!1){let u=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),x,b;if(l)x=r/(a-r),b=a*r/(a-r);else if(o===kn)x=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Ir)x=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=kn,l=!1){let u=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),x,b;if(l)x=1/(a-r),b=a/(a-r);else if(o===kn)x=-2/(a-r),b=-(a+r)/(a-r);else if(o===Ir)x=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};c(Ta,"Matrix4"),Ta.prototype.isMatrix4=!0;var ot=Ta,hr=new G,Zn=new ot,Xx=new G(0,0,0),qx=new G(1,1,1),es=new G,el=new G,_n=new G,Qp=new ot,jp=new an,ac=class ac{constructor(e=0,t=0,n=0,s=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};c(ac,"Euler");var bn=ac;bn.DEFAULT_ORDER="XYZ";var ld=class ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};c(ld,"Layers");var Da=ld,Yx=0,em=new G,dr=new an,Ti=new ot,tl=new G,_a=new G,Zx=new G,$x=new an,tm=new G(1,0,0),nm=new G(0,1,0),im=new G(0,0,1),sm={type:"added"},Jx={type:"removed"},fr={type:"childadded",child:null},eh={type:"childremoved",child:null},Cr=class Cr extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cr.DEFAULT_UP.clone();let e=new G,t=new bn,n=new an,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}c(r,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}c(a,"onQuaternionChange"),t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ve}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Cr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,t){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tl.copy(e):tl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(_a,tl,this.up):Ti.lookAt(tl,_a,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ti),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),fr.child=e,this.dispatchEvent(fr),fr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jx),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,$x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(c(r,"serialize"),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let u in o){let h=o[u];delete h.metadata,l.push(h)}return l}c(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};c(Cr,"Object3D");var Wt=Cr;Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cd=class cd extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}};c(cd,"Group");var dn=cd,Kx={type:"move"},ud=class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let b of e.hand.values()){let _=t.getJointPose(b,n),g=this._getHandJoint(u,b);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&d>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};c(ud,"WebXRController");var Nr=ud,s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},nl={h:0,s:0,l:0};function th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}c(th,"hue2rgb");var hd=class hd{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Gx(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=th(a,r,e+1/3),this.g=th(a,r,e),this.b=th(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}c(n,"handleAlpha");let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=s0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Qe.workingToColorSpace(Jt.copy(this),e),Math.round(je(Jt.r*255,0,255))*65536+Math.round(je(Jt.g*255,0,255))*256+Math.round(je(Jt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,u,h=(o+a)/2;if(o===a)l=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Bt){Qe.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(nl);let n=$u(ts.h,nl.h,t),s=$u(ts.s,nl.s,t),r=$u(ts.l,nl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};c(hd,"Color");var De=hd,Jt=new De;De.NAMES=s0;var oc=class oc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};c(oc,"Fog");var Na=oc,dd=class dd extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};c(dd,"Scene");var Ua=dd,$n=new G,Ai=new G,nh=new G,Ci=new G,pr=new G,mr=new G,rm=new G,ih=new G,sh=new G,rh=new G,ah=new xt,oh=new xt,lh=new xt,rs=class rs{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ai.subVectors(n,t),nh.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ai),l=$n.dot(nh),u=Ai.dot(Ai),h=Ai.dot(nh),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(u*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,n),lh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ah,r.x),a.addScaledVector(oh,r.y),a.addScaledVector(lh,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ai.subVectors(e,t),$n.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rs.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rs.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rs.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rs.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rs.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;pr.subVectors(s,n),mr.subVectors(r,n),ih.subVectors(e,n);let l=pr.dot(ih),u=mr.dot(ih);if(l<=0&&u<=0)return t.copy(n);sh.subVectors(e,s);let h=pr.dot(sh),f=mr.dot(sh);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*u;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(pr,a);rh.subVectors(e,r);let p=pr.dot(rh),x=mr.dot(rh);if(x>=0&&p<=x)return t.copy(r);let b=p*u-l*x;if(b<=0&&u>=0&&x<=0)return o=u/(u-x),t.copy(n).addScaledVector(mr,o);let _=h*x-p*f;if(_<=0&&f-h>=0&&p-x>=0)return rm.subVectors(r,s),o=(f-h)/(f-h+(p-x)),t.copy(s).addScaledVector(rm,o);let g=1/(_+b+d);return a=b*g,o=d*g,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};c(rs,"Triangle");var Ii=rs,fd=class fd{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),sl.subVectors(this.max,va),gr.subVectors(e.a,va),xr.subVectors(e.b,va),_r.subVectors(e.c,va),ns.subVectors(xr,gr),is.subVectors(_r,xr),Us.subVectors(gr,_r);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Us.z,Us.y,ns.z,0,-ns.x,is.z,0,-is.x,Us.z,0,-Us.x,-ns.y,ns.x,0,-is.y,is.x,0,-Us.y,Us.x,0];return!ch(t,gr,xr,_r,sl)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,gr,xr,_r,sl))?!1:(rl.crossVectors(ns,is),t=[rl.x,rl.y,rl.z],ch(t,gr,xr,_r,sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};c(fd,"Box3");var os=fd,Ri=[new G,new G,new G,new G,new G,new G,new G,new G],Jn=new G,il=new os,gr=new G,xr=new G,_r=new G,ns=new G,is=new G,Us=new G,va=new G,sl=new G,rl=new G,Fs=new G;function ch(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fs.fromArray(i,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),u=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}c(ch,"satForAxes");var Li=Qx();function Qx(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[l]=u|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}c(Qx,"_generateTables");function jx(i){Math.abs(i)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),i=je(i,-65504,65504),Li.floatView[0]=i;let e=Li.uint32View[0],t=e>>23&511;return Li.baseTable[t]+((e&8388607)>>Li.shiftTable[t])}c(jx,"toHalfFloat");function e_(i){let e=i>>10;return Li.uint32View[0]=Li.mantissaTable[Li.offsetTable[e]+(i&1023)]+Li.exponentTable[e],Li.floatView[0]}c(e_,"fromHalfFloat");var pd=class pd{static toHalfFloat(e){return jx(e)}static fromHalfFloat(e){return e_(e)}};c(pd,"DataUtils");var ui=pd,Tt=new G,al=new ke,t_=0,md=class md extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=ei,this.version=0,this._normalizationScale=e!==void 0?ru(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):n0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):i0(e,this.array)}};c(md,"BufferAttribute");var bt=md;var gd=class gd extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};c(gd,"Uint16BufferAttribute");var Fa=gd;var xd=class xd extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};c(xd,"Uint32BufferAttribute");var Oa=xd;var _d=class _d extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};c(_d,"Float32BufferAttribute");var St=_d,n_=new os,ya=new G,uh=new G,vd=class vd{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):n_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ya,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(uh)),this.expandByPoint(ya.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};c(vd,"Sphere");var Ur=vd,i_=0,Bn=new ot,hh=new Wt,vr=new G,vn=new os,ba=new os,Ot=new G,lc=class lc extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?Oa:Fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(vn.min,ba.min),vn.expandByPoint(Ot),Ot.addVectors(vn.max,ba.max),vn.expandByPoint(Ot)):(vn.expandByPoint(ba.min),vn.expandByPoint(ba.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ot.fromBufferAttribute(o,u),l&&(vr.fromBufferAttribute(e,u),Ot.add(vr)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],u=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new G,l[N]=new G;let h=new G,f=new G,d=new G,p=new ke,x=new ke,b=new ke,_=new G,g=new G;function w(N,I,U){u[N]=u[I]=u[U]=1,h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,I),d.fromBufferAttribute(n,U),p.fromBufferAttribute(r,N),x.fromBufferAttribute(r,I),b.fromBufferAttribute(r,U),f.sub(h),d.sub(h),x.sub(p),b.sub(p);let D=1/(x.x*b.y-b.x*x.y);isFinite(D)&&(_.copy(f).multiplyScalar(b.y).addScaledVector(d,-x.y).multiplyScalar(D),g.copy(d).multiplyScalar(x.x).addScaledVector(f,-b.x).multiplyScalar(D),o[N].add(_),o[I].add(_),o[U].add(_),l[N].add(g),l[I].add(g),l[U].add(g))}c(w,"handleTriangle");let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let N=0,I=C.length;N<I;++N){let U=C[N],D=U.start,B=U.count;for(let P=D,k=D+B;P<k;P+=3)w(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let T=new G,R=new G,E=new G,m=new G;function S(N){E.fromBufferAttribute(s,N),m.copy(E);let I=o[N];T.copy(I),T.sub(E.multiplyScalar(E.dot(I))).normalize(),R.crossVectors(m,I);let D=R.dot(l[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,D)}c(S,"handleVertex");for(let N=0,I=n.count;N<I;++N)u[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,u=new G,h=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){let x=e.getX(d+0),b=e.getX(d+1),_=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),o.add(h),l.add(h),u.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(l.length*h),p=0,x=0;for(let b=0,_=l.length;b<_;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*h;for(let g=0;g<h;g++)d[x++]=u[p++]}return new bt(d,h,f)}if(c(e,"convertBufferAttribute"),this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new lc,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],u=e(l,n);t.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let l=[],u=r[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let u in s){let h=s[u];this.setAttribute(u,h.clone(t))}let r=e.morphAttributes;for(let u in r){let h=[],f=r[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};c(lc,"BufferGeometry");var Pt=lc,yd=class yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Xs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=am(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=am(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};c(yd,"InterleavedBuffer");var Ba=yd;function am(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Xs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}c(am,"getArrayKey");var sn=new G,cc=class cc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?ru(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):n0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):i0(e,this.data.array)}};c(cc,"InterleavedBufferAttribute");var Fr=cc,dh=new G,s_=new G,r_=new Ve,bd=class bd{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dh.subVectors(n,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r_.getNormalMatrix(e),s=this.coplanarPoint(dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};c(bd,"Plane");var hn=bd,a_=0,Md=class Md extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Gr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(c(s,"extractFromCache"),t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};c(Md,"Material");var Ui=Md,Sd=class Sd extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};c(Sd,"SpriteMaterial");var ls=Sd,yr,Ma=new G,br=new G,Mr=new G,Sr=new ke,Sa=new ke,r0=new ot,ol=new G,wa=new G,ll=new G,om=new ke,fh=new ke,lm=new ke,wd=class wd extends Wt{constructor(e=new ls){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ba(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Fr(n,3,0,!1)),yr.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=yr,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),r0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Mr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;cl(ol.set(-.5,-.5,0),Mr,a,br,s,r),cl(wa.set(.5,-.5,0),Mr,a,br,s,r),cl(ll.set(.5,.5,0),Mr,a,br,s,r),om.set(0,0),fh.set(1,0),lm.set(1,1);let o=e.ray.intersectTriangle(ol,wa,ll,!1,Ma);if(o===null&&(cl(wa.set(-.5,.5,0),Mr,a,br,s,r),fh.set(0,1),o=e.ray.intersectTriangle(ol,ll,wa,!1,Ma),o===null))return;let l=e.ray.origin.distanceTo(Ma);l<e.near||l>e.far||t.push({distance:l,point:Ma.clone(),uv:Ii.getInterpolation(Ma,ol,wa,ll,om,fh,lm,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};c(wd,"Sprite");var za=wd;function cl(i,e,t,n,s,r){Sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Sa.x=r*Sr.x-s*Sr.y,Sa.y=s*Sr.x+r*Sr.y):Sa.copy(Sr),i.copy(e),i.x+=Sa.x,i.y+=Sa.y,i.applyMatrix4(r0)}c(cl,"transformVertex");var Pi=new G,ph=new G,ul=new G,hl=new G,Ed=class Ed{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ph.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),hl.copy(this.origin).sub(ph);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ul),o=hl.dot(this.direction),l=-hl.dot(ul),u=hl.lengthSq(),h=Math.abs(1-a*a),f,d,p,x;if(h>0)if(f=a*l-o,d=a*o-l,x=r*h,f>=0)if(d>=-x)if(d<=x){let b=1/h;f*=b,d*=b,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+u);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ph).addScaledVector(ul,d),p}intersectSphere(e,t){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,x=t.x-a.x,b=t.y-a.y,_=t.z-a.z,g=n.x-a.x,w=n.y-a.y,C=n.z-a.z,T=Math.abs(l),R=Math.abs(u),E=Math.abs(h),m,S,N,I,U,D,B,P,k,Y,z,se;if(T>=R&&T>=E?(N=l,D=f,k=x,se=g,l>=0?(m=u,S=h,I=d,U=p,B=b,P=_,Y=w,z=C):(m=h,S=u,I=p,U=d,B=_,P=b,Y=C,z=w)):R>=E?(N=u,D=d,k=b,se=w,u>=0?(m=h,S=l,I=p,U=f,B=_,P=x,Y=C,z=g):(m=l,S=h,I=f,U=p,B=x,P=_,Y=g,z=C)):(N=h,D=p,k=_,se=C,h>=0?(m=l,S=u,I=f,U=d,B=x,P=b,Y=g,z=w):(m=u,S=l,I=d,U=f,B=b,P=x,Y=w,z=g)),N===0)return null;let Z=m/N,ee=S/N,re=1/N,Ee=I-Z*D,Ne=U-ee*D,K=B-Z*k,_e=P-ee*k,Te=Y-Z*se,Ie=z-ee*se,ce=Te*_e-Ie*K,Oe=Ee*Ie-Ne*Te,pt=K*Ne-_e*Ee;if(s){if(ce<0||Oe<0||pt<0)return null}else if((ce<0||Oe<0||pt<0)&&(ce>0||Oe>0||pt>0))return null;let Fe=ce+Oe+pt;if(Fe===0)return null;let $e=re*(ce*D+Oe*k+pt*se);return(Fe>0?$e<0:$e>0)?null:this.at($e/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};c(Ed,"Ray");var Bl=Ed,Td=class Td extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};c(Td,"MeshBasicMaterial");var zl=Td,cm=new ot,Os=new Bl,dl=new Ur,um=new G,fl=new G,pl=new G,ml=new G,mh=new G,gl=new G,hm=new G,xl=new G,Ad=class Ad extends Wt{constructor(e=new Pt,t=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){gl.set(0,0,0);for(let l=0,u=r.length;l<u;l++){let h=o[l],f=r[l];h!==0&&(mh.fromBufferAttribute(f,e),a?gl.addScaledVector(mh,h):gl.addScaledVector(mh.sub(t),h))}t.add(gl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(dl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(dl,um)===null||Os.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(r).invert(),Os.copy(e.ray).applyMatrix4(cm),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,b=d.length;x<b;x++){let _=d[x],g=a[_.materialIndex],w=Math.max(_.start,p.start),C=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let T=w,R=C;T<R;T+=3){let E=o.getX(T),m=o.getX(T+1),S=o.getX(T+2);s=_l(this,g,e,n,u,h,f,E,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let _=x,g=b;_<g;_+=3){let w=o.getX(_),C=o.getX(_+1),T=o.getX(_+2);s=_l(this,a,e,n,u,h,f,w,C,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,b=d.length;x<b;x++){let _=d[x],g=a[_.materialIndex],w=Math.max(_.start,p.start),C=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let T=w,R=C;T<R;T+=3){let E=T,m=T+1,S=T+2;s=_l(this,g,e,n,u,h,f,E,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let _=x,g=b;_<g;_+=3){let w=_,C=_+1,T=_+2;s=_l(this,a,e,n,u,h,f,w,C,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};c(Ad,"Mesh");var dt=Ad;function o_(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ms,o),l===null)return null;xl.copy(o),xl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(xl);return u<t.near||u>t.far?null:{distance:u,point:xl.clone(),object:i}}c(o_,"checkIntersection$1");function _l(i,e,t,n,s,r,a,o,l,u){i.getVertexPosition(o,fl),i.getVertexPosition(l,pl),i.getVertexPosition(u,ml);let h=o_(i,e,t,n,fl,pl,ml,hm);if(h){let f=new G;Ii.getBarycoord(hm,fl,pl,ml,f),s&&(h.uv=Ii.getInterpolatedAttribute(s,o,l,u,f,new ke)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,o,l,u,f,new ke)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,u,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c:u,normal:new G,materialIndex:0};Ii.getNormal(fl,pl,ml,d.normal),h.face=d,h.barycoord=f}return h}c(_l,"checkGeometryIntersection");var Cd=class Cd extends on{constructor(e=null,t=1,n=1,s,r,a,o,l,u=zt,h=zt,f,d){super(null,a,o,l,u,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};c(Cd,"DataTexture");var Or=Cd;var Bs=new Ur,l_=new ke(.5,.5),vl=new G,Rd=class Rd{constructor(e=new hn,t=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],u=r[3],h=r[4],f=r[5],d=r[6],p=r[7],x=r[8],b=r[9],_=r[10],g=r[11],w=r[12],C=r[13],T=r[14],R=r[15];if(s[0].setComponents(u-a,p-h,g-x,R-w).normalize(),s[1].setComponents(u+a,p+h,g+x,R+w).normalize(),s[2].setComponents(u+o,p+f,g+b,R+C).normalize(),s[3].setComponents(u-o,p-f,g-b,R-C).normalize(),n)s[4].setComponents(l,d,_,T).normalize(),s[5].setComponents(u-l,p-d,g-_,R-T).normalize();else if(s[4].setComponents(u-l,p-d,g-_,R-T).normalize(),t===kn)s[5].setComponents(u+l,p+d,g+_,R+T).normalize();else if(t===Ir)s[5].setComponents(l,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=l_.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(vl.x=s.normal.x>0?e.max.x:e.min.x,vl.y=s.normal.y>0?e.max.y:e.min.y,vl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};c(Rd,"Frustum");var cs=Rd,dm=new ot,uc=class uc{constructor(){this.coordinateSystem=kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];dm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new cs),n[s].setFromProjectionMatrix(dm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new cs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new uc().copy(this)}};c(uc,"FrustumArray");var kl=uc;var Pd=class Pd extends on{constructor(e=[],t=Hs,n,s,r,a,o,l,u,h){super(e,t,n,s,r,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};c(Pd,"CubeTexture");var ka=Pd,Id=class Id extends on{constructor(e,t,n,s,r,a,o,l,u){super(e,t,n,s,r,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};c(Id,"CanvasTexture");var Br=Id;var Ld=class Ld extends on{constructor(e,t,n=jn,s,r,a,o=zt,l=zt,u,h=Ni,f=1){if(h!==Ni&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};c(Ld,"DepthTexture");var Fi=Ld,Dd=class Dd extends Fi{constructor(e,t=jn,n=Hs,s,r,a=zt,o=zt,l,u=Ni){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};c(Dd,"CubeDepthTexture");var Ga=Dd,Nd=class Nd extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};c(Nd,"ExternalTexture");var Va=Nd,hc=class hc extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],u=[],h=[],f=[],d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2));function x(b,_,g,w,C,T,R,E,m,S,N){let I=T/m,U=R/S,D=T/2,B=R/2,P=E/2,k=m+1,Y=S+1,z=0,se=0,Z=new G;for(let ee=0;ee<Y;ee++){let re=ee*U-B;for(let Ee=0;Ee<k;Ee++){let Ne=Ee*I-D;Z[b]=Ne*w,Z[_]=re*C,Z[g]=P,u.push(Z.x,Z.y,Z.z),Z[b]=0,Z[_]=0,Z[g]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(Ee/m),f.push(1-ee/S),z+=1}}for(let ee=0;ee<S;ee++)for(let re=0;re<m;re++){let Ee=d+re+k*ee,Ne=d+re+k*(ee+1),K=d+(re+1)+k*(ee+1),_e=d+(re+1)+k*ee;l.push(Ee,Ne,_e),l.push(Ne,K,_e),se+=6}o.addGroup(p,se,N),p+=se,d+=z}c(x,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};c(hc,"BoxGeometry");var Gn=hc;var dc=class dc extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let u=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],p=[],x=0,b=[],_=n/2,g=0;w(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(p,2));function w(){let T=new G,R=new G,E=0,m=(t-e)/n;for(let S=0;S<=r;S++){let N=[],I=S/r,U=I*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,P=B*l+o,k=Math.sin(P),Y=Math.cos(P);R.x=U*k,R.y=-I*n+_,R.z=U*Y,f.push(R.x,R.y,R.z),T.set(k,m,Y).normalize(),d.push(T.x,T.y,T.z),p.push(B,1-I),N.push(x++)}b.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let I=b[N][S],U=b[N+1][S],D=b[N+1][S+1],B=b[N][S+1];(e>0||N!==0)&&(h.push(I,U,B),E+=3),(t>0||N!==r-1)&&(h.push(U,D,B),E+=3)}u.addGroup(g,E,0),g+=E}c(w,"generateTorso");function C(T){let R=x,E=new ke,m=new G,S=0,N=T===!0?e:t,I=T===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,_*I,0),d.push(0,I,0),p.push(.5,.5),x++;let U=x;for(let D=0;D<=s;D++){let P=D/s*l+o,k=Math.cos(P),Y=Math.sin(P);m.x=N*Y,m.y=_*I,m.z=N*k,f.push(m.x,m.y,m.z),d.push(0,I,0),E.x=k*.5+.5,E.y=Y*.5*I+.5,p.push(E.x,E.y),x++}for(let D=0;D<s;D++){let B=R+D,P=U+D;T===!0?h.push(P,P+1,B):h.push(P+1,P,B),S+=3}u.addGroup(g,S,T===!0?1:2),g+=S}c(C,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(dc,"CylinderGeometry");var Kn=dc,fc=class fc extends Kn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new fc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};c(fc,"ConeGeometry");var Qn=fc;var pc=class pc extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,h=l+1,f=e/o,d=t/l,p=[],x=[],b=[],_=[];for(let g=0;g<h;g++){let w=g*d-a;for(let C=0;C<u;C++){let T=C*f-r;x.push(T,-w,0),b.push(0,0,1),_.push(C/o),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let w=0;w<o;w++){let C=w+u*g,T=w+u*(g+1),R=w+1+u*(g+1),E=w+1+u*g;p.push(C,T,E),p.push(T,R,E)}this.setIndex(p),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}};c(pc,"PlaneGeometry");var us=pc;var mc=class mc extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),u=0,h=[],f=new G,d=new G,p=[],x=[],b=[],_=[];for(let g=0;g<=n;g++){let w=[],C=g/n,T=a+C*o,R=e*Math.cos(T),E=Math.sqrt(e*e-R*R),m=0;g===0&&a===0?m=.5/t:g===n&&l===Math.PI&&(m=-.5/t);for(let S=0;S<=t;S++){let N=S/t,I=s+N*r;f.x=-E*Math.cos(I),f.y=R,f.z=E*Math.sin(I),x.push(f.x,f.y,f.z),d.copy(f).normalize(),b.push(d.x,d.y,d.z),_.push(N+m,1-C),w.push(u++)}h.push(w)}for(let g=0;g<n;g++)for(let w=0;w<t;w++){let C=h[g][w+1],T=h[g][w],R=h[g+1][w],E=h[g+1][w+1];(g!==0||a>0)&&p.push(C,T,E),(g!==n-1||l<Math.PI)&&p.push(T,R,E)}this.setIndex(p),this.setAttribute("position",new St(x,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};c(mc,"SphereGeometry");var hs=mc;var gc=class gc extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],u=[],h=[],f=[],d=new G,p=new G,x=new G;for(let b=0;b<=n;b++){let _=a+b/n*o;for(let g=0;g<=s;g++){let w=g/s*r;p.x=(e+t*Math.cos(_))*Math.cos(w),p.y=(e+t*Math.cos(_))*Math.sin(w),p.z=t*Math.sin(_),u.push(p.x,p.y,p.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),x.subVectors(p,d).normalize(),h.push(x.x,x.y,x.z),f.push(g/s),f.push(b/n)}}for(let b=1;b<=n;b++)for(let _=1;_<=s;_++){let g=(s+1)*b+_-1,w=(s+1)*(b-1)+_-1,C=(s+1)*(b-1)+_,T=(s+1)*b+_;l.push(g,w,T),l.push(w,C,T)}this.setIndex(l),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};c(gc,"TorusGeometry");var ks=gc;function qs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(fm(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}c(qs,"cloneUniforms");function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=qs(i[t]);for(let s in n)e[s]=n[s]}return e}c(Kt,"mergeUniforms");function fm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}c(fm,"isThreeObject");function c_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}c(c_,"cloneUniformsGroups");function Jh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}c(Jh,"getUnlitUniformColorSpace");var so={clone:qs,merge:Kt},u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ud=class Ud extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=c_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};c(Ud,"ShaderMaterial");var Mn=Ud,Fd=class Fd extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};c(Fd,"RawShaderMaterial");var Gl=Fd,Od=class Od extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};c(Od,"MeshStandardMaterial");var Oi=Od;var Bd=class Bd extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};c(Bd,"MeshDepthMaterial");var Vl=Bd,zd=class zd extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};c(zd,"MeshDistanceMaterial");var Hl=zd;function wr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}c(wr,"convertArray");function yl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}c(yl,"hasTangents");var kd=class kd{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};c(kd,"Interpolant");var ds=kd,Gd=class Gd extends ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vh:r=e,o=2*t-n;break;case yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:a=e,l=2*n-t;break;case yh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),b=x*x,_=b*x,g=-d*_+2*d*b-d*x,w=(1+d)*_+(-1.5-2*d)*b+(-.5+d)*x+1,C=(-1-p)*_+(1.5+p)*b+.5*x,T=p*_-p*b;for(let R=0;R!==o;++R)r[R]=g*a[h+R]+w*a[u+R]+C*a[l+R]+T*a[f+R];return r}};c(Gd,"CubicInterpolant");var Wl=Gd,Vd=class Vd extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*f+a[l+d]*h;return r}};c(Vd,"LinearInterpolant");var Xl=Vd,Hd=class Hd extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}};c(Hd,"DiscreteInterpolant");var ql=Hd,Wd=class Wd extends ds{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),b=1-x;for(let _=0;_!==o;++_)r[_]=a[u+_]*b+a[l+_]*x;return r}let d=o*2,p=e-1;for(let x=0;x!==o;++x){let b=a[u+x],_=a[l+x],g=p*d+x*2,w=f[g],C=f[g+1],T=e*d+x*2,R=h[T],E=h[T+1],m=f_(n,t,w,R,s);r[x]=a0(m,b,C,E,_)}return r}};c(Wd,"BezierInterpolant");var Yl=Wd;function a0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}c(a0,"cubicBezier");function d_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}c(d_,"cubicBezierSlope");function f_(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=a0(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=d_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}c(f_,"solveBezierParameter");var Xd=class Xd{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),yl(e.settings)&&(n.settings={inTangents:wr(e.settings.inTangents,Array),outTangents:wr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Dl:t=this.InterpolantFactoryMethodLinear;break;case Sl:t=this.InterpolantFactoryMethodSmooth;break;case xh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return Sl;case this.InterpolantFactoryMethodBezier:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;yl(this.settings)&&(pm(this.settings.inTangents,e),pm(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;yl(this.settings)&&(mm(this.settings.inTangents,e),mm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kx(s))for(let o=0,l=s.length;o!==l;++o){let u=s[o];if(isNaN(u)){Ge("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let x=0;x!==n;++x){let b=t[f+x];if(b!==t[d+x]||b!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,u=0;u!==n;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,yl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};c(Xd,"KeyframeTrack");var Sn=Xd;function pm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}c(pm,"shiftTangentTimes");function mm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}c(mm,"scaleTangentTimes");Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Dl;var qd=class qd extends Sn{constructor(e,t,n){super(e,t,n)}};c(qd,"BooleanKeyframeTrack");var fs=qd;fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Aa;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yd=class Yd extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};c(Yd,"ColorKeyframeTrack");var Zl=Yd;Zl.prototype.ValueTypeName="color";var Zd=class Zd extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};c(Zd,"NumberKeyframeTrack");var $l=Zd;$l.prototype.ValueTypeName="number";var $d=class $d extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),u=e*o;for(let h=u+o;u!==h;u+=4)an.slerpFlat(r,0,a,u-o,a,u,l);return r}};c($d,"QuaternionLinearInterpolant");var Jl=$d,Jd=class Jd extends Sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}};c(Jd,"QuaternionKeyframeTrack");var Ha=Jd;Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Kd=class Kd extends Sn{constructor(e,t,n){super(e,t,n)}};c(Kd,"StringKeyframeTrack");var ps=Kd;ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Aa;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Qd=class Qd extends Sn{constructor(e,t,n,s){super(e,t,n,s)}};c(Qd,"VectorKeyframeTrack");var Kl=Qd;Kl.prototype.ValueTypeName="vector";var jd=class jd{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};c(jd,"LoadingManager");var Ql=jd,o0=new Ql,ef=class ef{constructor(e){this.manager=e!==void 0?e:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};c(ef,"Loader");var jl=ef;jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var tf=class tf extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};c(tf,"Light");var Wa=tf,nf=class nf extends Wa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};c(nf,"HemisphereLight");var Xa=nf,gh=new ot,gm=new G,xm=new G,sf=class sf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(gm),xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(gh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===Ir||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};c(sf,"LightShadow");var ec=sf,bl=new G,Ml=new an,li=new G,rf=class rf extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bl,Ml,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Ml,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bl,Ml,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,Ml,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};c(rf,"Camera");var qa=rf,ss=new G,_m=new ke,vm=new ke,af=class af extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,_m,vm),t.subVectors(vm,_m)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zu*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};c(af,"PerspectiveCamera");var rn=af;var of=class of extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};c(of,"OrthographicCamera");var Ya=of,lf=class lf extends ec{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};c(lf,"DirectionalLightShadow");var bh=lf,cf=class cf extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};c(cf,"DirectionalLight");var Za=cf;var Er=-90,Tr=1,uf=class uf extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Er,Tr,e,t);s.layers=this.layers,this.add(s);let r=new rn(Er,Tr,e,t);r.layers=this.layers,this.add(r);let a=new rn(Er,Tr,e,t);a.layers=this.layers,this.add(a);let o=new rn(Er,Tr,e,t);o.layers=this.layers,this.add(o);let l=new rn(Er,Tr,e,t);l.layers=this.layers,this.add(l);let u=new rn(Er,Tr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let u of t)this.remove(u);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}};c(uf,"CubeCamera");var zr=uf,hf=class hf extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};c(hf,"ArrayCamera");var tc=hf;var Kh="\\[\\]\\.:\\/",p_=new RegExp("["+Kh+"]","g"),Qh="[^"+Kh+"]",m_="[^"+Kh.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",Qh),x_=/(WCOD+)?/.source.replace("WCOD",m_),__=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),v_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),y_=new RegExp("^"+g_+x_+__+v_+"$"),b_=["material","materials","bones","map"],df=class df{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};c(df,"Composite");var Mh=df,as=class as{constructor(e,t,n){this.path=t,this.parsedPath=n||as.parseTrackName(t),this.node=as.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new as.Composite(e,t,n):new as(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(e){let t=y_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=c(function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},"searchNodeSubtree"),s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=as.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c(as,"PropertyBinding");var ht=as;ht.Composite=Mh;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M1=new Float32Array(1);var xc=class xc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};c(xc,"Matrix2"),xc.prototype.isMatrix2=!0;var Sh=xc;function jh(i,e,t,n){let s=M_(n);switch(t){case Vh:return i*e;case Wh:return i*e/s.components*s.byteLength;case Ec:return i*e/s.components*s.byteLength;case fi:return i*e*2/s.components*s.byteLength;case Tc:return i*e*2/s.components*s.byteLength;case Hh:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case Ac:return i*e*4/s.components*s.byteLength;case Qa:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Cc:case Pc:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Dc:case Uc:case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:case no:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qc:case jc:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case io:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}c(jh,"getByteLength");function M_(i){switch(i){case fn:case Bh:return{byteLength:1,components:1};case Hr:case zh:case wn:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case jn:case Mc:case ei:return{byteLength:4,components:1};case kh:case Gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}c(M_,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function R0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return c(s,"onAnimationFrame"),{start:c(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},"start"),stop:c(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:c(function(r){t=r},"setAnimationLoop"),setContext:c(function(r){i=r},"setContext")}}c(R0,"WebGLAnimation");function R_(i){let e=new WeakMap;function t(o,l){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}c(t,"createBuffer");function n(o,l,u){let h=l.array,f=l.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){let x=f[d],b=f[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,f[d]=b)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){let b=f[p];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}c(n,"updateBuffer");function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}c(s,"get");function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}c(r,"remove");function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return c(a,"update"),{get:s,remove:r,update:a}}c(R_,"WebGLAttributes");var P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
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
#endif`,L_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
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
#endif`,O_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
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
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j_=`#define PI 3.141592653589793
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
} // validated`,ev=`vec3 transformedNormal = objectNormal;
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
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
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
#endif`,Av=`uniform sampler2D dfgLUT;
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
}`,Cv=`
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zv=`#if defined( USE_POINTS_UV )
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
#endif`,kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
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
#endif`,qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qv=`#ifdef USE_NORMALMAP
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
#endif`,jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,py=`float getShadowMask() {
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
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform float backgroundBlurriness;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`#include <common>
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
}`,Fy=`#if DEPTH_PACKING == 3200
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
}`,Oy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
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
}`,Vy=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#define LAMBERT
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
}`,qy=`#define LAMBERT
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
}`,Yy=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,$y=`#define NORMAL
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
}`,Jy=`#define NORMAL
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
}`,Ky=`#define PHONG
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
}`,Qy=`#define PHONG
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
}`,jy=`#define STANDARD
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
}`,eb=`#define STANDARD
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
}`,tb=`#define TOON
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
}`,nb=`#define TOON
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
}`,ib=`uniform float size;
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,ab=`uniform vec3 color;
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
}`,ob=`uniform float rotation;
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
}`,lb=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:P_,alphahash_pars_fragment:I_,alphamap_fragment:L_,alphamap_pars_fragment:D_,alphatest_fragment:N_,alphatest_pars_fragment:U_,aomap_fragment:F_,aomap_pars_fragment:O_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:k_,beginnormal_vertex:G_,bsdfs:V_,iridescence_fragment:H_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Y_,clipping_planes_vertex:Z_,color_fragment:$_,color_pars_fragment:J_,color_pars_vertex:K_,color_vertex:Q_,common:j_,defaultnormal_vertex:ev,displacementmap_pars_vertex:tv,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:sv,colorspace_fragment:rv,colorspace_pars_fragment:av,envmap_fragment:ov,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:bv,envmap_vertex:hv,fog_vertex:dv,fog_pars_vertex:fv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:xv,lights_lambert_fragment:_v,lights_lambert_pars_fragment:vv,lights_pars_begin:yv,lights_toon_fragment:Mv,lights_toon_pars_fragment:Sv,lights_phong_fragment:wv,lights_phong_pars_fragment:Ev,lights_physical_fragment:Tv,lights_physical_pars_fragment:Av,lights_fragment_begin:Cv,lights_fragment_maps:Rv,lights_fragment_end:Pv,lightprobes_pars_fragment:Iv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Nv,logdepthbuf_vertex:Uv,map_fragment:Fv,map_pars_fragment:Ov,map_particle_fragment:Bv,map_particle_pars_fragment:zv,metalnessmap_fragment:kv,metalnessmap_pars_fragment:Gv,morphinstance_vertex:Vv,morphcolor_vertex:Hv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:qv,normal_fragment_begin:Yv,normal_fragment_maps:Zv,normal_pars_fragment:$v,normal_pars_vertex:Jv,normal_vertex:Kv,normalmap_pars_fragment:Qv,clearcoat_normal_fragment_begin:jv,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:ay,dithering_fragment:oy,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:dy,shadowmap_vertex:fy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:xy,skinnormal_vertex:_y,specularmap_fragment:vy,specularmap_pars_fragment:yy,tonemapping_fragment:by,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:wy,uv_pars_fragment:Ey,uv_pars_vertex:Ty,uv_vertex:Ay,worldpos_vertex:Cy,background_vert:Ry,background_frag:Py,backgroundCube_vert:Iy,backgroundCube_frag:Ly,cube_vert:Dy,cube_frag:Ny,depth_vert:Uy,depth_frag:Fy,distance_vert:Oy,distance_frag:By,equirect_vert:zy,equirect_frag:ky,linedashed_vert:Gy,linedashed_frag:Vy,meshbasic_vert:Hy,meshbasic_frag:Wy,meshlambert_vert:Xy,meshlambert_frag:qy,meshmatcap_vert:Yy,meshmatcap_frag:Zy,meshnormal_vert:$y,meshnormal_frag:Jy,meshphong_vert:Ky,meshphong_frag:Qy,meshphysical_vert:jy,meshphysical_frag:eb,meshtoon_vert:tb,meshtoon_frag:nb,points_vert:ib,points_frag:sb,shadow_vert:rb,shadow_frag:ab,sprite_vert:ob,sprite_frag:lb},ye={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},mi={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new De(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mi.physical={uniforms:Kt([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var au={r:0,b:0,g:0},cb=new ot,P0=new Ve;P0.set(-1,0,0,0,1,0,0,0,1);function ub(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,u,h=null,f=0,d=null;function p(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let T=w.backgroundBlurriness>0;C=e.get(C,T)}return C}c(p,"getBackground");function x(w){let C=!1,T=p(w);T===null?_(a,o):T&&T.isColor&&(_(T,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}c(x,"render");function b(w,C){let T=p(C);T&&T.isCubeTexture?(u===void 0&&(u=new dt(new Gn(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:qs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:c(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=T,u.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(C.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(P0),u.material.toneMapped=Qe.getTransfer(T.colorSpace)!==rt,(h!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new dt(new us(2,2),new Mn({name:"BackgroundMaterial",uniforms:qs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:c(function(){return this.uniforms.t2D.value},"get")}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}c(b,"addToRenderList");function _(w,C){w.getRGB(au,Jh(i)),t.buffers.color.setClear(au.r,au.g,au.b,C,r)}c(_,"setClear");function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return c(g,"dispose"),{getClearColor:c(function(){return a},"getClearColor"),setClearColor:c(function(w,C=1){a.set(w),o=C,_(a,o)},"setClearColor"),getClearAlpha:c(function(){return o},"getClearAlpha"),setClearAlpha:c(function(w){o=w,_(a,o)},"setClearAlpha"),render:x,addToRenderList:b,dispose:g}}c(ub,"WebGLBackground");function hb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,D,B,P,k){let Y=!1,z=f(U,P,B,D);r!==z&&(r=z,u(r.object)),Y=p(U,P,B,k),Y&&x(U,P,B,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(U,D,B,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}c(o,"setup");function l(){return i.createVertexArray()}c(l,"createVertexArrayObject");function u(U){return i.bindVertexArray(U)}c(u,"bindVertexArrayObject");function h(U){return i.deleteVertexArray(U)}c(h,"deleteVertexArrayObject");function f(U,D,B,P){let k=P.wireframe===!0,Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);let z=U.isInstancedMesh===!0?U.id:0,se=Y[z];se===void 0&&(se={},Y[z]=se);let Z=se[B.id];Z===void 0&&(Z={},se[B.id]=Z);let ee=Z[k];return ee===void 0&&(ee=d(l()),Z[k]=ee),ee}c(f,"getBindingState");function d(U){let D=[],B=[],P=[];for(let k=0;k<t;k++)D[k]=0,B[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:P,object:U,attributes:{},index:null}}c(d,"createBindingState");function p(U,D,B,P){let k=r.attributes,Y=D.attributes,z=0,se=B.getAttributes();for(let Z in se)if(se[Z].location>=0){let re=k[Z],Ee=Y[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),re===void 0||re.attribute!==Ee||Ee&&re.data!==Ee.data)return!0;z++}return r.attributesNum!==z||r.index!==P}c(p,"needsUpdate");function x(U,D,B,P){let k={},Y=D.attributes,z=0,se=B.getAttributes();for(let Z in se)if(se[Z].location>=0){let re=Y[Z];re===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));let Ee={};Ee.attribute=re,re&&re.data&&(Ee.data=re.data),k[Z]=Ee,z++}r.attributes=k,r.attributesNum=z,r.index=P}c(x,"saveCache");function b(){let U=r.newAttributes;for(let D=0,B=U.length;D<B;D++)U[D]=0}c(b,"initAttributes");function _(U){g(U,0)}c(_,"enableAttribute");function g(U,D){let B=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;B[U]=1,P[U]===0&&(i.enableVertexAttribArray(U),P[U]=1),k[U]!==D&&(i.vertexAttribDivisor(U,D),k[U]=D)}c(g,"enableAttributeAndDivisor");function w(){let U=r.newAttributes,D=r.enabledAttributes;for(let B=0,P=D.length;B<P;B++)D[B]!==U[B]&&(i.disableVertexAttribArray(B),D[B]=0)}c(w,"disableUnusedAttributes");function C(U,D,B,P,k,Y,z){z===!0?i.vertexAttribIPointer(U,D,B,k,Y):i.vertexAttribPointer(U,D,B,P,k,Y)}c(C,"vertexAttribPointer");function T(U,D,B,P){b();let k=P.attributes,Y=B.getAttributes(),z=D.defaultAttributeValues;for(let se in Y){let Z=Y[se];if(Z.location>=0){let ee=k[se];if(ee===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor)),ee!==void 0){let re=ee.normalized,Ee=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;let K=Ne.buffer,_e=Ne.type,Te=Ne.bytesPerElement,Ie=_e===i.INT||_e===i.UNSIGNED_INT||ee.gpuType===Mc;if(ee.isInterleavedBufferAttribute){let ce=ee.data,Oe=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,pt=ee.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Fe=0;Fe<Z.locationSize;Fe++)g(Z.location+Fe,ce.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<Z.locationSize;Fe++)_(Z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Fe=0;Fe<Z.locationSize;Fe++)C(Z.location+Fe,Ee/Z.locationSize,_e,re,Oe*Te,(pt+Ee/Z.locationSize*Fe)*Te,Ie)}else{if(ee.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)g(Z.location+ce,ee.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<Z.locationSize;ce++)_(Z.location+ce);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ce=0;ce<Z.locationSize;ce++)C(Z.location+ce,Ee/Z.locationSize,_e,re,Ee*Te,Ee/Z.locationSize*ce*Te,Ie)}}else if(z!==void 0){let re=z[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Z.location,re);break;case 3:i.vertexAttrib3fv(Z.location,re);break;case 4:i.vertexAttrib4fv(Z.location,re);break;default:i.vertexAttrib1fv(Z.location,re)}}}}w()}c(T,"setupVertexAttributes");function R(){N();for(let U in n){let D=n[U];for(let B in D){let P=D[B];for(let k in P){let Y=P[k];for(let z in Y)h(Y[z].object),delete Y[z];delete P[k]}}delete n[U]}}c(R,"dispose");function E(U){if(n[U.id]===void 0)return;let D=n[U.id];for(let B in D){let P=D[B];for(let k in P){let Y=P[k];for(let z in Y)h(Y[z].object),delete Y[z];delete P[k]}}delete n[U.id]}c(E,"releaseStatesOfGeometry");function m(U){for(let D in n){let B=n[D];for(let P in B){let k=B[P];if(k[U.id]===void 0)continue;let Y=k[U.id];for(let z in Y)h(Y[z].object),delete Y[z];delete k[U.id]}}}c(m,"releaseStatesOfProgram");function S(U){for(let D in n){let B=n[D],P=U.isInstancedMesh===!0?U.id:0,k=B[P];if(k!==void 0){for(let Y in k){let z=k[Y];for(let se in z)h(z[se].object),delete z[se];delete k[Y]}delete B[P],Object.keys(B).length===0&&delete n[D]}}}c(S,"releaseStatesOfObject");function N(){I(),a=!0,r!==s&&(r=s,u(r.object))}c(N,"reset");function I(){s.geometry=null,s.program=null,s.wireframe=!1}return c(I,"resetDefaultState"),{setup:o,reset:N,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}c(hb,"WebGLBindingStates");function db(i,e,t){let n;function s(l){n=l}c(s,"setMode");function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}c(r,"render");function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}c(a,"renderInstances");function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}c(o,"renderMultiDraw"),this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}c(db,"WebGLBufferRenderer");function fb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}c(r,"getMaxAnisotropy");function a(m){return!(m!==ti&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}c(a,"textureFormatReadable");function o(m){let S=m===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==fn&&m!==ei&&!S&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}c(o,"textureTypeReadable");function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}c(l,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=l(u);h!==u&&(ze("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:T,maxSamples:R,samples:E}}c(fb,"WebGLCapabilities");function pb(i){let e=this,t=null,n=0,s=!1,r=!1,a=new hn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let x=f.clippingPlanes,b=f.clipIntersection,_=f.clipShadows,g=i.get(f);if(!s||x===null||x.length===0||r&&!_)r?h(null):u();else{let w=r?0:n,C=w*4,T=g.clippingState||null;l.value=T,T=h(x,d,C,p);for(let R=0;R!==C;++R)T[R]=t[R];g.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}c(u,"resetGlobalState");function h(f,d,p,x){let b=f!==null?f.length:0,_=null;if(b!==0){if(_=l.value,x!==!0||_===null){let g=p+b*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(_===null||_.length<g)&&(_=new Float32Array(g));for(let C=0,T=p;C!==b;++C,T+=4)a.copy(f[C]).applyMatrix4(w,o),a.normal.toArray(_,T),_[T+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}c(h,"projectPlanes")}c(pb,"WebGLClipping");var Sf=class Sf extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ka(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Gs});r.uniforms.tEquirect.value=t;let a=new dt(s,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=kt),new zr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};c(Sf,"WebGLCubeRenderTarget");var oo=Sf,l0=256,mb=3,gb=20,I0=256,L0=16,xb=3,_b=new G,vb=new De,uu=class uu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zr(1,10,null),this._boxMesh=new dt(new Gn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=_b}=r,l=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,x=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(vb));let _=new zr(n,s,h);return _.position.copy(o),_.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=x,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(l0,t0(e))}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vr?this._setSize(e.image.length===0?l0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=c0(e,!1,!1),n=Math.log2(e)-mb;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=c0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Hs||e.mapping===Vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=u0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yb(),this._integrationMaterial=bb());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/L0);for(let a=0;a<=n;a++){let o=uu.lodToRoughness(a,n);if(a>n-xb)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(I0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Mb());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};c(uu,"PMREMGenerator");var lu=uu;function c0(i,e,t){return new oo(i,{minFilter:Bi,generateMipmaps:e,type:wn,colorSpace:Ca,depthBuffer:t})}c(c0,"_createRenderTarget");function lo(i,e,t){return new Mn({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:ln,blending:Gs,depthTest:!1,depthWrite:!1})}c(lo,"_getMaterial");function yb(){return lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${I0}u

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
	`)}c(yb,"_getGGXMaterial");function bb(){return lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:L0}},`

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
	`)}c(bb,"_getIntegrationMaterial");function Mb(){return lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gb}
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
	`)}c(Mb,"_getBlurMaterial");function u0(){return lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}c(u0,"_getEquirectMaterial");function h0(){return lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}c(h0,"_getCubemapMaterial");function Sb(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}c(s,"get");function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===vc||p===yc)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let b=new oo(x.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",u),o(b.texture,d.mapping)}else return null}}return d}c(r,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,x=p===vc||p===yc,b=p===Hs||p===Vr;if(x||b){let _=t.get(d),g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new lu(i)),_=x?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{let w=d.image;return x&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new lu(i)),_=x?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}c(a,"getPMREM");function o(d,p){return p===vc?d.mapping=Hs:p===yc&&(d.mapping=Vr),d}c(o,"mapTextureMapping");function l(d){let p=0,x=6;for(let b=0;b<x;b++)d[b]!==void 0&&p++;return p===x}c(l,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}c(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}c(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return c(f,"dispose"),{get:s,dispose:f}}c(Sb,"WebGLEnvironments");function wb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return c(t,"getExtension"),{has:c(function(n){return t(n)!==null},"has"),init:c(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:c(function(n){let s=t(n);return s===null&&Ea("WebGLRenderer: "+n+" extension not supported."),s},"get")}}c(wb,"WebGLExtensions");function Eb(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}c(o,"onGeometryDispose");function l(x){x.index!==null&&e.remove(x.index);for(let _ in x.attributes)e.remove(x.attributes[_]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let b=r.get(x);b&&(e.remove(b),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}c(l,"destroyGeometry");function u(x,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),t.memory.geometries++),b}c(u,"get");function h(x){let b=x.attributes;for(let _ in b)e.update(b[_],i.ARRAY_BUFFER)}c(h,"update");function f(x){let b=x.index,_=x.attributes.position,g=0;if(_===void 0)return;let w=b!==null?b.array.length:_.array.length/3-1,C=_.count>=65535?Oa:Fa,T=new C(Math.ceil(w/3)*6,1),R=T.array;if(b!==null){let m=b.array;g=b.version;for(let S=0,N=0;S<w;S+=3){let I=m[S+0],U=m[S+1],D=m[S+2];R[N++]=I,R[N++]=U,R[N++]=U,R[N++]=D,R[N++]=D,R[N++]=I}}else{g=_.version;for(let m=0,S=0;m<w;m+=3){let N=m+0,I=m+1,U=m+2;R[S++]=N,R[S++]=I,R[S++]=I,R[S++]=U,R[S++]=U,R[S++]=N}}T.version=g;let E=r.get(x);E&&e.remove(E),r.set(x,T)}c(f,"updateWireframeAttribute");function d(x){let b=r.get(x);if(b){let _=x.index;_!==null&&b.version<_.version&&f(x)}else f(x);return r.get(x)}c(d,"getWireframeAttribute");function p(){for(let x in s){let b=s[x].deref();b!==void 0&&l(b)}}return c(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}c(Eb,"WebGLGeometries");function Tb(i,e,t){let n;function s(f){n=f}c(s,"setMode");let r,a;function o(f){r=f.type,a=f.bytesPerElement}c(o,"setIndex");function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}c(l,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}c(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let b=0;for(let _=0;_<p;_++)b+=d[_];t.update(b,n,1)}c(h,"renderMultiDraw"),this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}c(Tb,"WebGLIndexedBufferRenderer");function Ab(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}c(n,"update");function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return c(s,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}c(Ab,"WebGLInfo");function Cb(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var p=I;c(I,"disposeTexture"),d!==void 0&&d.texture.dispose();let x=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],T=0;x===!0&&(T=1),b===!0&&(T=2),_===!0&&(T=3);let R=o.attributes.position.count*T,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let m=new Float32Array(R*E*4*f),S=new La(m,R,E,f);S.type=ei,S.needsUpdate=!0;let N=T*4;for(let U=0;U<f;U++){let D=g[U],B=w[U],P=C[U],k=R*E*4*U;for(let Y=0;Y<D.count;Y++){let z=Y*N;x===!0&&(s.fromBufferAttribute(D,Y),m[k+z+0]=s.x,m[k+z+1]=s.y,m[k+z+2]=s.z,m[k+z+3]=0),b===!0&&(s.fromBufferAttribute(B,Y),m[k+z+4]=s.x,m[k+z+5]=s.y,m[k+z+6]=s.z,m[k+z+7]=0),_===!0&&(s.fromBufferAttribute(P,Y),m[k+z+8]=s.x,m[k+z+9]=s.y,m[k+z+10]=s.z,m[k+z+11]=P.itemSize===4?s.w:1)}}d={count:f,texture:S,size:new ke(R,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let _=0;_<u.length;_++)x+=u[_];let b=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return c(r,"update"),{update:r}}c(Cb,"WebGLMorphtargets");function Rb(i,e,t,n,s){let r=new WeakMap;function a(u){let h=s.render.frame,f=u.geometry,d=e.get(u,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}c(a,"update");function o(){r=new WeakMap}c(o,"dispose");function l(u){let h=u.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return c(l,"onInstancedMeshDispose"),{update:a,dispose:o}}c(Rb,"WebGLObjects");var Pb={[Ih]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[Ja]:"ACES_FILMIC_TONE_MAPPING",[Uh]:"AGX_TONE_MAPPING",[Fh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function Ib(i,e,t,n,s,r){let a=new yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,h=new Pt;h.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new St([0,2,0,0,2,0],2));let f=new Gl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new dt(h,f),p=new Ya(-1,1,1,-1,0,1),x=null,b=null,_=!1,g,w=null,C=[],T=!1;this.setSize=function(R,E){a.setSize(R,E),o!==null&&o.setSize(R,E),l!==null&&l.setSize(R,E);for(let m=0;m<C.length;m++){let S=C[m];S.setSize&&S.setSize(R,E)}},this.setEffects=function(R){C=R,T=C.length>0&&C[0].isRenderPass===!0;let E=a.width,m=a.height;C.length>0&&o===null&&(o=new yn(E,m,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(E,m,{type:wn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&C.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&u===null&&(u=new Fi(E,m),r===!0&&(u.format=zi,u.type=Ws)),a.dispose(),a.depthTexture=S?u:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<C.length;N++){let I=C[N];I.setSize&&I.setSize(E,m),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(R,E){if(_||R.toneMapping===di&&C.length===0)return!1;if(w=E,E!==null){let m=E.width,S=E.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return T===!1&&R.setRenderTarget(a),g=R.toneMapping,R.toneMapping=di,!0},this.hasRenderPass=function(){return T},this.end=function(R,E){R.toneMapping=g,_=!0;let m=a,S=o;for(let N=0;N<C.length;N++){let I=C[N];I.enabled!==!1&&(I.render(R,S,m,E),I.needsSwap!==!1&&(m=S,S=S===o?l:o))}if(x!==R.outputColorSpace||b!==R.toneMapping){x=R.outputColorSpace,b=R.toneMapping,f.defines={},Qe.getTransfer(x)===rt&&(f.defines.SRGB_TRANSFER="");let N=Pb[b];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=m.texture,R.setRenderTarget(w),R.render(d,p),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}c(Ib,"WebGLOutput");var D0=new on,N0=new Fi(1,1),U0=new Ga(1),F0=new La,O0=new Ol,B0=new ka,d0=[],f0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function Xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=d0[s];if(r===void 0&&(r=new Float32Array(s),d0[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}c(Xr,"flatten");function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}c(It,"arraysEqual");function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}c(Lt,"copyArray");function hu(i,e){let t=f0[e];t===void 0&&(t=new Int32Array(e),f0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}c(hu,"allocTexUnits");function Lb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}c(Lb,"setValueV1f");function Db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}c(Db,"setValueV2f");function Nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}c(Nb,"setValueV3f");function Ub(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}c(Ub,"setValueV4f");function Fb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;g0.set(n),i.uniformMatrix2fv(this.addr,!1,g0),Lt(t,n)}}c(Fb,"setValueM2");function Ob(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;m0.set(n),i.uniformMatrix3fv(this.addr,!1,m0),Lt(t,n)}}c(Ob,"setValueM3");function Bb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;p0.set(n),i.uniformMatrix4fv(this.addr,!1,p0),Lt(t,n)}}c(Bb,"setValueM4");function zb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}c(zb,"setValueV1i");function kb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}c(kb,"setValueV2i");function Gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}c(Gb,"setValueV3i");function Vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}c(Vb,"setValueV4i");function Hb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}c(Hb,"setValueV1ui");function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}c(Wb,"setValueV2ui");function Xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}c(Xb,"setValueV3ui");function qb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}c(qb,"setValueV4ui");function du(i){return i.version===0&&(i.compareFunction=Yh,i.needsUpdate=!0),i}c(du,"initShadowTexture");function Yb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=du(N0):r=D0,t.setTexture2D(e||r,s)}c(Yb,"setValueT1");function Zb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||O0,s)}c(Zb,"setValueT3D1");function $b(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=du(U0):r=B0,t.setTextureCube(e||r,s)}c($b,"setValueT6");function Jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||F0,s)}c(Jb,"setValueT2DArray1");function Kb(i){switch(i){case 5126:return Lb;case 35664:return Db;case 35665:return Nb;case 35666:return Ub;case 35674:return Fb;case 35675:return Ob;case 35676:return Bb;case 5124:case 35670:return zb;case 35667:case 35671:return kb;case 35668:case 35672:return Gb;case 35669:case 35673:return Vb;case 5125:return Hb;case 36294:return Wb;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Jb}}c(Kb,"getSingularSetter");function Qb(i,e){i.uniform1fv(this.addr,e)}c(Qb,"setValueV1fArray");function jb(i,e){let t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}c(jb,"setValueV2fArray");function eM(i,e){let t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}c(eM,"setValueV3fArray");function tM(i,e){let t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}c(tM,"setValueV4fArray");function nM(i,e){let t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}c(nM,"setValueM2Array");function iM(i,e){let t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}c(iM,"setValueM3Array");function sM(i,e){let t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}c(sM,"setValueM4Array");function rM(i,e){i.uniform1iv(this.addr,e)}c(rM,"setValueV1iArray");function aM(i,e){i.uniform2iv(this.addr,e)}c(aM,"setValueV2iArray");function oM(i,e){i.uniform3iv(this.addr,e)}c(oM,"setValueV3iArray");function lM(i,e){i.uniform4iv(this.addr,e)}c(lM,"setValueV4iArray");function cM(i,e){i.uniform1uiv(this.addr,e)}c(cM,"setValueV1uiArray");function uM(i,e){i.uniform2uiv(this.addr,e)}c(uM,"setValueV2uiArray");function hM(i,e){i.uniform3uiv(this.addr,e)}c(hM,"setValueV3uiArray");function dM(i,e){i.uniform4uiv(this.addr,e)}c(dM,"setValueV4uiArray");function fM(i,e,t){let n=this.cache,s=e.length,r=hu(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=du(N0):a=D0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}c(fM,"setValueT1Array");function pM(i,e,t){let n=this.cache,s=e.length,r=hu(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||O0,r[a])}c(pM,"setValueT3DArray");function mM(i,e,t){let n=this.cache,s=e.length,r=hu(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=du(U0):a=B0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}c(mM,"setValueT6Array");function gM(i,e,t){let n=this.cache,s=e.length,r=hu(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||F0,r[a])}c(gM,"setValueT2DArrayArray");function xM(i){switch(i){case 5126:return Qb;case 35664:return jb;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return hM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}c(xM,"getPureArraySetter");var wf=class wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kb(t.type)}};c(wf,"SingleUniform");var mf=wf,Ef=class Ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xM(t.type)}};c(Ef,"PureArrayUniform");var gf=Ef,Tf=class Tf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}};c(Tf,"StructuredUniform");var xf=Tf,ff=/(\w+)(\])?(\[|\.)?/g;function x0(i,e){i.seq.push(e),i.map[e.id]=e}c(x0,"addUniform");function _M(i,e,t){let n=i.name,s=n.length;for(ff.lastIndex=0;;){let r=ff.exec(n),a=ff.lastIndex,o=r[1],l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){x0(t,u===void 0?new mf(o,i,e):new gf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new xf(o),x0(t,f)),t=f}}}c(_M,"parseUniform");var Af=class Af{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_M(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};c(Af,"WebGLUniforms");var Wr=Af;function _0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}c(_0,"WebGLShader");var vM=37297,yM=0;function bM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}c(bM,"handleSource");var v0=new Ve;function MM(i){Qe._getMatrix(v0,Qe.workingColorSpace,i);let e=`mat3( ${v0.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ra:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}c(MM,"getEncodingComponents");function y0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bM(i.getShaderSource(e),o)}else return r}c(y0,"getShaderErrors");function SM(i,e){let t=MM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}c(SM,"getTexelEncodingFunction");var wM={[Ih]:"Linear",[Lh]:"Reinhard",[Dh]:"Cineon",[Ja]:"ACESFilmic",[Uh]:"AgX",[Fh]:"Neutral",[Nh]:"Custom"};function EM(i,e){let t=wM[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}c(EM,"getToneMappingFunction");var ou=new G;function TM(){Qe.getLuminanceCoefficients(ou);let i=ou.x.toFixed(4),e=ou.y.toFixed(4),t=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}c(TM,"getLuminanceFunction");function AM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}c(AM,"generateVertexExtensions");function CM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}c(CM,"generateDefines");function RM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}c(RM,"fetchAttributeLocations");function ao(i){return i!==""}c(ao,"filterEmptyLine");function b0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}c(b0,"replaceLightNums");function M0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}c(M0,"replaceClippingPlaneNums");var PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(i){return i.replace(PM,IM)}c(_f,"resolveIncludes");function IM(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}c(IM,"includeReplacer");var LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S0(i){return i.replace(LM,DM)}c(S0,"unrollLoops");function DM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}c(DM,"loopReplacer");function w0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}c(w0,"generatePrecision");var NM={[$a]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function UM(i){return NM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}c(UM,"generateShadowMapTypeDefine");var FM={[Vr]:"ENVMAP_MODE_REFRACTION"};function OM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":FM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}c(OM,"generateEnvMapModeDefine");var BM={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[km]:"ENVMAP_BLENDING_MIX",[Gm]:"ENVMAP_BLENDING_ADD"};function zM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":BM[i.combine]||"ENVMAP_BLENDING_NONE"}c(zM,"generateEnvMapBlendingDefine");function kM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=UM(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=OM(t),f=zM(t),d=AM(t),p=CM(r),x=s.createProgram(),b,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ao).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(b=[w0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[w0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Ze.tonemapping_pars_fragment:"",t.toneMapping!==di?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,SM("linearToOutputTexel",t.outputColorSpace),TM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),a=_f(a),a=b0(a,t),a=M0(a,t),o=_f(o),o=b0(o,t),o=M0(o,t),a=S0(a),o=S0(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=g+b+a,C=g+_+o,T=_0(s,s.VERTEX_SHADER,w),R=_0(s,s.FRAGMENT_SHADER,C);s.attachShader(x,T),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(R)||"",P=U.trim(),k=D.trim(),Y=B.trim(),z=!0,se=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,R);else{let Z=y0(s,T,"vertex"),ee=y0(s,R,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+Z+`
`+ee)}else P!==""?ze("WebGLProgram: Program Info Log:",P):(k===""||Y==="")&&(se=!1);se&&(I.diagnostics={runnable:z,programLog:P,vertexShader:{log:k,prefix:b},fragmentShader:{log:Y,prefix:_}})}s.deleteShader(T),s.deleteShader(R),m=new Wr(s,x),S=RM(s,x)}c(E,"onFirstUse");let m;this.getUniforms=function(){return m===void 0&&E(this),m};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(x,vM)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}c(kM,"WebGLProgram");var GM=0,Cf=class Cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yf(e),t.set(e,n)),n}};c(Cf,"WebGLShaderCache");var vf=Cf,Rf=class Rf{constructor(e){this.id=GM++,this.code=e,this.usedTimes=0}};c(Rf,"WebGLShaderStage");var yf=Rf;function VM(i){return i===fi||i===no||i===io}c(VM,"isPackedRGFormat");function HM(i,e,t,n,s,r){let a=new Da,o=new vf,l=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(m){return l.add(m),m===0?"uv":`uv${m}`}c(p,"getChannel");function x(m,S,N,I,U,D){let B=I.fog,P=U.geometry,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,z=e.get(m.envMap||k,Y),se=d[m.type],Z=n.precision;m.precision!==null&&(Z=n.getMaxPrecision(m.precision),Z!==m.precision&&ze("WebGLProgram.getParameters:",m.precision,"not supported, using",Z,"instead."));let ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=ee!==void 0?ee.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Ne,K,_e,Te;if(se){let Me=mi[se];Ne=Me.vertexShader,K=Me.fragmentShader}else{Ne=m.vertexShader,K=m.fragmentShader;let Me=o.getVertexShaderStage(m),at=o.getFragmentShaderStage(m);o.update(m,Me,at),_e=Me.id,Te=at.id}let Ie=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,pt=U.isBatchedMesh===!0,Fe=!!m.map,$e=!!m.matcap,tt=!!z,qe=tt&&z.isPMREMTexture===!0,Mt=!!m.aoMap,vt=!!m.lightMap,Ct=!!m.bumpMap&&m.wireframe===!1,lt=!!m.normalMap,xn=!!m.displacementMap,Nt=!!m.emissiveMap,Nn=!!m.metalnessMap,Un=!!m.roughnessMap,Fn=m.anisotropy>0,O=m.clearcoat>0,On=m.diffuseRoughness>0,mt=m.dispersion>0,gt=m.retroreflectivity>0,ve=m.iridescence>0,Rt=m.sheen>0,Be=m.transmission>0,He=Fn&&!!m.anisotropyMap,A=O&&!!m.clearcoatMap,y=O&&!!m.clearcoatNormalMap,W=O&&!!m.clearcoatRoughnessMap,ae=On&&!!m.diffuseRoughnessMap,ie=ve&&!!m.iridescenceMap,he=ve&&!!m.iridescenceThicknessMap,ge=Rt&&!!m.sheenColorMap,Q=Rt&&!!m.sheenRoughnessMap,j=!!m.specularMap,fe=!!m.specularColorMap,L=!!m.specularIntensityMap,te=Be&&!!m.transmissionMap,J=Be&&!!m.thicknessMap,pe=!!m.gradientMap,ue=!!m.alphaMap,de=m.alphaTest>0,Le=!!m.alphaHash,Ye=!!m.extensions,le=di;m.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(le=i.toneMapping);let Ue=qe?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Xe={shaderID:se,shaderType:m.type,shaderName:m.name,vertexShader:Ne,fragmentShader:K,defines:m.defines,customVertexShaderID:_e,customFragmentShaderID:Te,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:Z,batching:pt,batchingColor:pt&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Fe,matcap:$e,envMap:tt,envMapMode:tt&&z.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ue.length-1:null,envMapSize:qe?Ue[0].width:null,aoMap:Mt,lightMap:vt,bumpMap:Ct,normalMap:lt,displacementMap:xn,emissiveMap:Nt,normalMapObjectSpace:lt&&m.normalMapType===Wm,normalMapTangentSpace:lt&&m.normalMapType===su,packedNormalMap:lt&&m.normalMapType===su&&VM(m.normalMap.format),metalnessMap:Nn,roughnessMap:Un,anisotropy:Fn,anisotropyMap:He,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:W,diffuseRoughness:On,diffuseRoughnessMap:ae,dispersion:mt,retroreflection:gt,iridescence:ve,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:Rt,sheenColorMap:ge,sheenRoughnessMap:Q,specularMap:j,specularColorMap:fe,specularIntensityMap:L,transmission:Be,transmissionMap:te,thicknessMap:J,gradientMap:pe,opaque:m.transparent===!1&&m.blending===Gr&&m.alphaToCoverage===!1,alphaMap:ue,alphaTest:de,alphaHash:Le,combine:m.combine,mapUv:Fe&&p(m.map.channel),aoMapUv:Mt&&p(m.aoMap.channel),lightMapUv:vt&&p(m.lightMap.channel),bumpMapUv:Ct&&p(m.bumpMap.channel),normalMapUv:lt&&p(m.normalMap.channel),displacementMapUv:xn&&p(m.displacementMap.channel),emissiveMapUv:Nt&&p(m.emissiveMap.channel),metalnessMapUv:Nn&&p(m.metalnessMap.channel),roughnessMapUv:Un&&p(m.roughnessMap.channel),anisotropyMapUv:He&&p(m.anisotropyMap.channel),clearcoatMapUv:A&&p(m.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&p(m.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&p(m.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(m.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(m.sheenRoughnessMap.channel),specularMapUv:j&&p(m.specularMap.channel),specularColorMapUv:fe&&p(m.specularColorMap.channel),specularIntensityMapUv:L&&p(m.specularIntensityMap.channel),transmissionMapUv:te&&p(m.transmissionMap.channel),thicknessMapUv:J&&p(m.thicknessMap.channel),alphaMapUv:ue&&p(m.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(lt||Fn),vertexNormals:!!P.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(Fe||ue),fog:!!B,useFog:m.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||P.attributes.normal===void 0&&lt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Fe&&m.map.isVideoTexture===!0&&Qe.getTransfer(m.map.colorSpace)===rt,decodeVideoTextureEmissive:Nt&&m.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(m.emissiveMap.colorSpace)===rt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===hi,flipSided:m.side===ln,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ye&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&m.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}c(x,"getParameters");function b(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let N in m.defines)S.push(N),S.push(m.defines[N]);return m.isRawShaderMaterial===!1&&(_(S,m),g(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}c(b,"getProgramCacheKey");function _(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}c(_,"getProgramCacheKeyParameters");function g(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}c(g,"getProgramCacheKeyBooleans");function w(m){let S=d[m.type],N;if(S){let I=mi[S];N=so.clone(I.uniforms)}else N=m.uniforms;return N}c(w,"getUniforms");function C(m,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new kM(i,S,m,s),u.push(N),h.set(S,N)),N}c(C,"acquireProgram");function T(m){if(--m.usedTimes===0){let S=u.indexOf(m);u[S]=u[u.length-1],u.pop(),h.delete(m.cacheKey),m.destroy()}}c(T,"releaseProgram");function R(m){o.remove(m)}c(R,"releaseShaderCache");function E(){o.dispose()}return c(E,"dispose"),{getParameters:x,getProgramCacheKey:b,getUniforms:w,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:E}}c(HM,"WebGLPrograms");function WM(){let i=new WeakMap;function e(a){return i.has(a)}c(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}c(t,"get");function n(a){i.delete(a)}c(n,"remove");function s(a,o,l){i.get(a)[o]=l}c(s,"update");function r(){i=new WeakMap}return c(r,"dispose"),{has:e,get:t,remove:n,update:s,dispose:r}}c(WM,"WebGLProperties");function XM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}c(XM,"painterSortStable");function E0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}c(E0,"reversePainterSortStable");function T0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}c(r,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}c(a,"materialVariant");function o(d,p,x,b,_,g){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:_,group:g},i[e]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=x,w.materialVariant=a(d),w.groupOrder=b,w.renderOrder=d.renderOrder,w.z=_,w.group=g),e++,w}c(o,"getNextRenderItem");function l(d,p,x,b,_,g,w){w.reversedDepth===!0&&(_=-_);let C=o(d,p,x,b,_,g);x.transmission>0?n.push(C):x.transparent===!0?s.push(C):t.push(C)}c(l,"push");function u(d,p,x,b,_,g){let w=o(d,p,x,b,_,g);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):t.unshift(w)}c(u,"unshift");function h(d,p){t.length>1&&t.sort(d||XM),n.length>1&&n.sort(p||E0),s.length>1&&s.sort(p||E0)}c(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return c(f,"finish"),{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:u,finish:f,sort:h}}c(T0,"WebGLRenderList");function qM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new T0,i.set(n,[a])):s>=r.length?(a=new T0,r.push(a)):a=r[s],a}c(e,"get");function t(){i=new WeakMap}return c(t,"dispose"),{get:e,dispose:t}}c(qM,"WebGLRenderLists");function YM(){let i={};return{get:c(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new De};break;case"SpotLight":t={position:new G,direction:new G,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t},"get")}}c(YM,"UniformsCache");function ZM(){let i={};return{get:c(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}c(ZM,"ShadowUniformsCache");var $M=0;function JM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}c(JM,"shadowCastingAndTexturingLightsFirst");function KM(i){let e=new YM,t=ZM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);let s=new G,r=new ot,a=new ot;function o(u){let h=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,x=0,b=0,_=0,g=0,w=0,C=0,T=0,R=0,E=0,m=0,S=0,N=0,I=0;u.sort(JM);for(let D=0,B=u.length;D<B;D++){let P=u[D],k=P.color,Y=P.intensity,z=P.distance,se=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===fi?se=P.shadow.map.texture:se=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*Y,f+=k.g*Y,d+=k.b*Y;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],Y);I++}else if(P.isSunLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=se;let Ee=ee.getViewportCount();for(let Ne=0;Ne<Ee;Ne++)n.sunShadowMatrix[b+Ne]=ee.getMatrix(Ne),n.sunShadowCascade[b+Ne]=ee._cascadeData[Ne];b+=Ee,x++}n.sun[p]=Z,p++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.directionalShadow[_]=re,n.directionalShadowMap[_]=se,n.directionalShadowMatrix[_]=P.shadow.matrix,R++}n.directional[_]=Z,_++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(k).multiplyScalar(Y),Z.distance=z,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[w]=Z;let ee=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,ee.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[w]=ee.matrix,P.castShadow){let re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,n.spotShadow[w]=re,n.spotShadowMap[w]=se,m++}w++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(k).multiplyScalar(Y),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[C]=Z,C++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let ee=P.shadow,re=t.get(P);re.shadowIntensity=ee.intensity,re.shadowBias=ee.bias,re.shadowNormalBias=ee.normalBias,re.shadowRadius=ee.radius,re.shadowMapSize=ee.mapSize,re.shadowCameraNear=ee.camera.near,re.shadowCameraFar=ee.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(Y),Z.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[T]=Z,T++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let U=n.hash;(U.sunLength!==p||U.directionalLength!==_||U.pointLength!==g||U.spotLength!==w||U.rectAreaLength!==C||U.hemiLength!==T||U.numSunShadows!==x||U.numDirectionalShadows!==R||U.numPointShadows!==E||U.numSpotShadows!==m||U.numSpotMaps!==S||U.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=_,n.spot.length=w,n.rectArea.length=C,n.point.length=g,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,U.sunLength=p,U.directionalLength=_,U.pointLength=g,U.spotLength=w,U.rectAreaLength=C,U.hemiLength=T,U.numSunShadows=x,U.numDirectionalShadows=R,U.numPointShadows=E,U.numSpotShadows=m,U.numSpotMaps=S,U.numLightProbes=I,n.version=$M++)}c(o,"setup");function l(u,h){let f=0,d=0,p=0,x=0,b=0,_=0,g=h.matrixWorldInverse;for(let w=0,C=u.length;w<C;w++){let T=u[w];if(T.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(g),f++}else if(T.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),d++}else if(T.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),x++}else if(T.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),b++}else if(T.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(g),p++}else if(T.isHemisphereLight){let R=n.hemi[_];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(g),_++}}}return c(l,"setupView"),{setup:o,setupView:l,state:n}}c(KM,"WebGLLights");function A0(i){let e=new KM(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}c(r,"init");function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}c(a,"pushLight");function o(f){n.push(f)}c(o,"pushShadow");function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}c(l,"setupLights");function u(f){e.setupView(t,f)}c(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}c(A0,"WebGLRenderState");function QM(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new A0(i),e.set(s,[o])):r>=a.length?(o=new A0(i),a.push(o)):o=a[r],o}c(t,"get");function n(){e=new WeakMap}return c(n,"dispose"),{get:t,dispose:n}}c(QM,"WebGLRenderStates");var jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
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
}`,tS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],nS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],C0=new ot,ro=new G,pf=new G;function iS(i,e,t){let n=new cs,s=new ke,r=new ke,a=new xt,o=new Vl,l=new Hl,u={},h=t.maxTextureSize,f={[ms]:ln,[ln]:ms,[hi]:hi},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:jM,fragmentShader:eS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Pt;x.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new dt(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let g=this.type;this.render=function(E,m,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===_c&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$a);let N=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Gs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&m.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=E.length;P<k;P++){let Y=E[P],z=Y.shadow;if(z===void 0){ze("WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let se=z.getFrameExtents();s.multiply(se),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,z.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Z,z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===kr){if(Y.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yn(s.x,s.y,{format:fi,type:wn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),z.map.texture.name=Y.name+".shadowMap",z.map.depthTexture=new Fi(s.x,s.y,ei),z.map.depthTexture.name=Y.name+".shadowMapDepth",z.map.depthTexture.format=Ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else Y.isPointLight?(z.map=new oo(s.x),z.map.depthTexture=new Ga(s.x,jn)):(z.map=new yn(s.x,s.y),z.map.depthTexture=new Fi(s.x,s.y,jn)),z.map.depthTexture.name=Y.name+".shadowMap",z.map.depthTexture.format=Ni,this.type===$a?(z.map.depthTexture.compareFunction=Z?qh:Xh,z.map.depthTexture.minFilter=kt,z.map.depthTexture.magFilter=kt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let ee=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();Y.isPointLight!==!0&&z.updateMatrices(Y,S);let re=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Ee=0;Ee<ee;Ee++){let Ne=z.getCamera(Ee);if(Y.isPointLight){let K=z.camera,_e=z.matrix,Te=Y.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),ro.setFromMatrixPosition(Y.matrixWorld),K.position.copy(ro),pf.copy(K.position),pf.add(tS[Ee]),K.up.copy(nS[Ee]),K.lookAt(pf),K.updateMatrixWorld(),_e.makeTranslation(-ro.x,-ro.y,-ro.z),C0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(C0,K.coordinateSystem,K.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(z.map),i.clear());let K=z.getViewport(Ee);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),D.viewport(a)}n=z.getFrustum(Ee),T(m,S,Ne,Y,re,this.type)}z.isPointLightShadow!==!0&&this.type===kr&&w(z,S),z.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(N,I,U)};function w(E,m){let S=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new yn(s.x,s.y,{format:fi,type:wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(m,null,S,d,b,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(m,null,S,p,b,null)}c(w,"VSMPass");function C(E,m,S,N){let I=null,U=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)I=U;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let D=I.uuid,B=m.uuid,P=u[D];P===void 0&&(P={},u[D]=P);let k=P[B];k===void 0&&(k=I.clone(),P[B]=k,m.addEventListener("dispose",R)),I=k}if(I.visible=m.visible,I.wireframe=m.wireframe,N===kr?I.side=m.shadowSide!==null?m.shadowSide:m.side:I.side=m.shadowSide!==null?m.shadowSide:f[m.side],I.alphaMap=m.alphaMap,I.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,I.map=m.map,I.clipShadows=m.clipShadows,I.clippingPlanes=m.clippingPlanes,I.clipIntersection=m.clipIntersection,I.displacementMap=m.displacementMap,I.displacementScale=m.displacementScale,I.displacementBias=m.displacementBias,I.wireframeLinewidth=m.wireframeLinewidth,I.linewidth=m.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let D=i.properties.get(I);D.light=S}return I}c(C,"getDepthMaterial");function T(E,m,S,N,I,U){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===kr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let P=e.update(E),k=E.material;if(Array.isArray(k)){let Y=P.groups;for(let z=0,se=Y.length;z<se;z++){let Z=Y[z],ee=k[Z.materialIndex];if(ee&&ee.visible){let re=C(E,ee,N,U);E.onBeforeShadow(i,E,m,S,P,re,Z),i.renderBufferDirect(S,null,P,re,E,Z),E.onAfterShadow(i,E,m,S,P,re,Z)}}}else if(k.visible){let Y=C(E,k,N,U);E.onBeforeShadow(i,E,m,S,P,Y,null),i.renderBufferDirect(S,null,P,Y,E,null),E.onAfterShadow(i,E,m,S,P,Y,null)}}let B=E.children;for(let P=0,k=B.length;P<k;P++)T(B[P],m,S,N,I,U)}c(T,"renderObject");function R(E){E.target.removeEventListener("dispose",R);for(let S in u){let N=u[S],I=E.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}c(R,"onMaterialDispose")}c(iS,"WebGLShadowMap");function sS(i,e){function t(){let L=!1,te=new xt,J=null,pe=new xt(0,0,0,0);return{setMask:c(function(ue){J!==ue&&!L&&(i.colorMask(ue,ue,ue,ue),J=ue)},"setMask"),setLocked:c(function(ue){L=ue},"setLocked"),setClear:c(function(ue,de,Le,Ye,le){le===!0&&(ue*=Ye,de*=Ye,Le*=Ye),te.set(ue,de,Le,Ye),pe.equals(te)===!1&&(i.clearColor(ue,de,Le,Ye),pe.copy(te))},"setClear"),reset:c(function(){L=!1,J=null,pe.set(-1,0,0,0)},"reset")}}c(t,"ColorBuffer");function n(){let L=!1,te=!1,J=null,pe=null,ue=null;return{setReversed:c(function(de){if(te!==de){let Le=e.get("EXT_clip_control");de?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),te=de;let Ye=ue;ue=null,this.setClear(Ye)}},"setReversed"),getReversed:c(function(){return te},"getReversed"),setTest:c(function(de){de?ce(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},"setTest"),setMask:c(function(de){J!==de&&!L&&(i.depthMask(de),J=de)},"setMask"),setFunc:c(function(de){if(te&&(de=e0[de]),pe!==de){switch(de){case El:i.depthFunc(i.NEVER);break;case Tl:i.depthFunc(i.ALWAYS);break;case Al:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Pl:i.depthFunc(i.GREATER);break;case Il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=de}},"setFunc"),setLocked:c(function(de){L=de},"setLocked"),setClear:c(function(de){ue!==de&&(ue=de,te&&(de=1-de),i.clearDepth(de))},"setClear"),reset:c(function(){L=!1,J=null,pe=null,ue=null,te=!1},"reset")}}c(n,"DepthBuffer");function s(){let L=!1,te=null,J=null,pe=null,ue=null,de=null,Le=null,Ye=null,le=null;return{setTest:c(function(Ue){L||(Ue?ce(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},"setTest"),setMask:c(function(Ue){te!==Ue&&!L&&(i.stencilMask(Ue),te=Ue)},"setMask"),setFunc:c(function(Ue,Xe,Me){(J!==Ue||pe!==Xe||ue!==Me)&&(i.stencilFunc(Ue,Xe,Me),J=Ue,pe=Xe,ue=Me)},"setFunc"),setOp:c(function(Ue,Xe,Me){(de!==Ue||Le!==Xe||Ye!==Me)&&(i.stencilOp(Ue,Xe,Me),de=Ue,Le=Xe,Ye=Me)},"setOp"),setLocked:c(function(Ue){L=Ue},"setLocked"),setClear:c(function(Ue){le!==Ue&&(i.clearStencil(Ue),le=Ue)},"setClear"),reset:c(function(){L=!1,te=null,J=null,pe=null,ue=null,de=null,Le=null,Ye=null,le=null},"reset")}}c(s,"StencilBuffer");let r=new t,a=new n,o=new s,l={},u=new WeakMap,h={},f={},d={},p=new WeakMap,x=[],b=null,_=!1,g=null,w=null,C=null,T=null,R=null,E=null,m=null,S=new De(0,0,0),N=0,I=!1,U=null,D=null,B=null,P=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,se=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=se>=1):Z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=se>=2);let ee=null,re={},Ee=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),K=new xt().fromArray(Ee),_e=new xt().fromArray(Ne);function Te(L,te,J,pe){let ue=new Uint8Array(4),de=i.createTexture();i.bindTexture(L,de),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<J;Le++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(te+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return de}c(Te,"createTexture");let Ie={};Ie[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Pr),Ct(!1),lt(wh),ce(i.CULL_FACE),Mt(Gs);function ce(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}c(ce,"enable");function Oe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}c(Oe,"disable");function pt(L,te){return d[L]!==te?(i.bindFramebuffer(L,te),d[L]=te,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te),!0):!1}c(pt,"bindFramebuffer");function Fe(L,te){let J=x,pe=!1;if(L){J=p.get(te),J===void 0&&(J=[],p.set(te,J));let ue=L.textures;if(J.length!==ue.length||J[0]!==i.COLOR_ATTACHMENT0){for(let de=0,Le=ue.length;de<Le;de++)J[de]=i.COLOR_ATTACHMENT0+de;J.length=ue.length,pe=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,pe=!0);pe&&i.drawBuffers(J)}c(Fe,"drawBuffers");function $e(L){return b!==L?(i.useProgram(L),b=L,!0):!1}c($e,"useProgram");let tt={[Vs]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[wm]:i.FUNC_REVERSE_SUBTRACT};tt[Em]=i.MIN,tt[Tm]=i.MAX;let qe={[Am]:i.ZERO,[Cm]:i.ONE,[Rm]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[Um]:i.SRC_ALPHA_SATURATE,[Dm]:i.DST_COLOR,[Im]:i.DST_ALPHA,[Pm]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[Nm]:i.ONE_MINUS_DST_COLOR,[Lm]:i.ONE_MINUS_DST_ALPHA,[Fm]:i.CONSTANT_COLOR,[Om]:i.ONE_MINUS_CONSTANT_COLOR,[Bm]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(L,te,J,pe,ue,de,Le,Ye,le,Ue){if(L===Gs){_===!0&&(Oe(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),L!==Mm){if(L!==g||Ue!==I){if((w!==Vs||R!==Vs)&&(i.blendEquation(i.FUNC_ADD),w=Vs,R=Vs),Ue)switch(L){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",L);break}else switch(L){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Th:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",L);break}C=null,T=null,E=null,m=null,S.set(0,0,0),N=0,g=L,I=Ue}return}ue=ue||te,de=de||J,Le=Le||pe,(te!==w||ue!==R)&&(i.blendEquationSeparate(tt[te],tt[ue]),w=te,R=ue),(J!==C||pe!==T||de!==E||Le!==m)&&(i.blendFuncSeparate(qe[J],qe[pe],qe[de],qe[Le]),C=J,T=pe,E=de,m=Le),(Ye.equals(S)===!1||le!==N)&&(i.blendColor(Ye.r,Ye.g,Ye.b,le),S.copy(Ye),N=le),g=L,I=!1}c(Mt,"setBlending");function vt(L,te){L.side===hi?Oe(i.CULL_FACE):ce(i.CULL_FACE);let J=L.side===ln;te&&(J=!J),Ct(J),L.blending===Gr&&L.transparent===!1?Mt(Gs):Mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}c(vt,"setMaterial");function Ct(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}c(Ct,"setFlipSided");function lt(L){L!==ym?(ce(i.CULL_FACE),L!==D&&(L===wh?i.cullFace(i.BACK):L===bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),D=L}c(lt,"setCullFace");function xn(L){L!==B&&(z&&i.lineWidth(L),B=L)}c(xn,"setLineWidth");function Nt(L,te,J){L?(ce(i.POLYGON_OFFSET_FILL),(P!==te||k!==J)&&(P=te,k=J,a.getReversed()&&(te=-te,J=-J),i.polygonOffset(te,J))):Oe(i.POLYGON_OFFSET_FILL)}c(Nt,"setPolygonOffset");function Nn(L){L?ce(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}c(Nn,"setScissorTest");function Un(L){L===void 0&&(L=i.TEXTURE0+Y-1),ee!==L&&(i.activeTexture(L),ee=L)}c(Un,"activeTexture");function Fn(L,te,J){J===void 0&&(ee===null?J=i.TEXTURE0+Y-1:J=ee);let pe=re[J];pe===void 0&&(pe={type:void 0,texture:void 0},re[J]=pe),(pe.type!==L||pe.texture!==te)&&(ee!==J&&(i.activeTexture(J),ee=J),i.bindTexture(L,te||Ie[L]),pe.type=L,pe.texture=te)}c(Fn,"bindTexture");function O(){let L=re[ee];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}c(O,"unbindTexture");function On(){try{i.compressedTexImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(On,"compressedTexImage2D");function mt(){try{i.compressedTexImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(mt,"compressedTexImage3D");function gt(){try{i.texSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(gt,"texSubImage2D");function ve(){try{i.texSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(ve,"texSubImage3D");function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(Rt,"compressedTexSubImage2D");function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(Be,"compressedTexSubImage3D");function He(){try{i.texStorage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(He,"texStorage2D");function A(){try{i.texStorage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(A,"texStorage3D");function y(){try{i.texImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(y,"texImage2D");function W(){try{i.texImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}c(W,"texImage3D");function ae(L){return f[L]!==void 0?f[L]:i.getParameter(L)}c(ae,"getParameter");function ie(L,te){f[L]!==te&&(i.pixelStorei(L,te),f[L]=te)}c(ie,"pixelStorei");function he(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}c(he,"scissor");function ge(L){_e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}c(ge,"viewport");function Q(L,te){let J=u.get(te);J===void 0&&(J=new WeakMap,u.set(te,J));let pe=J.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(te,L.name),i.uniformBlockBinding(te,pe,pe),J.set(L,pe))}c(Q,"updateUBOMapping");function j(L,te,J){let ue=u.get(te).get(L);l[ue]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,ue,J),l[ue]=J)}c(j,"uniformBlockBinding");function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,re={},d={},l={},p=new WeakMap,x=[],b=null,_=!1,g=null,w=null,C=null,T=null,R=null,E=null,m=null,S=new De(0,0,0),N=0,I=!1,U=null,D=null,B=null,P=null,k=null,K.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return c(fe,"reset"),{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Oe,bindFramebuffer:pt,drawBuffers:Fe,useProgram:$e,setBlending:Mt,setMaterial:vt,setFlipSided:Ct,setCullFace:lt,setLineWidth:xn,setPolygonOffset:Nt,setScissorTest:Nn,activeTexture:Un,bindTexture:Fn,unbindTexture:O,compressedTexImage2D:On,compressedTexImage3D:mt,texImage2D:y,texImage3D:W,pixelStorei:ie,getParameter:ae,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:He,texStorage3D:A,texSubImage2D:gt,texSubImage3D:ve,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Be,scissor:he,viewport:ge,reset:fe}}c(sS,"WebGLState");function rS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap,f=new Set,d,p=new WeakMap,x=new Set,b=new FinalizationRegistry(A=>x.delete(A)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return _?new OffscreenCanvas(A,y):Pa("canvas")}c(g,"createCanvas");function w(A,y,W){let ae=1,ie=He(A);if((ie.width>W||ie.height>W)&&(ae=W/Math.max(ie.width,ie.height)),ae<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let he=Math.floor(ae*ie.width),ge=Math.floor(ae*ie.height);d===void 0&&(d=g(he,ge));let Q=y?g(he,ge):d;return Q.width=he,Q.height=ge,Q.getContext("2d").drawImage(A,0,0,he,ge),ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+he+"x"+ge+")."),Q}else return"data"in A&&ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}c(w,"resizeImage");function C(A){return A.generateMipmaps}c(C,"textureNeedsGenerateMipmaps");function T(A){i.generateMipmap(A)}c(T,"generateMipmap");function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}c(R,"getTargetType");function E(A,y,W,ae,ie,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge;ae&&(ge=e.get("EXT_texture_norm16"),ge||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8),W===i.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),W===i.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),y===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),y===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8),W===i.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),W===i.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&(W===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),W===i.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),y===i.RGBA){let j=he?Ra:Qe.getTransfer(ie);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=j===rt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),W===i.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}c(E,"getInternalFormat");function m(A,y){let W;return A?y===null||y===jn||y===Ws?W=i.DEPTH24_STENCIL8:y===ei?W=i.DEPTH32F_STENCIL8:y===Hr&&(W=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===jn||y===Ws?W=i.DEPTH_COMPONENT24:y===ei?W=i.DEPTH_COMPONENT32F:y===Hr&&(W=i.DEPTH_COMPONENT16),W}c(m,"getInternalDepthFormat");function S(A,y){return C(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==kt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}c(S,"getMipLevels");function N(A){let y=new WeakRef(A);n.get(A).__ref=y,x.add(y),b.register(A,y,y)}c(N,"track");function I(A){let y=n.get(A).__ref;y!==void 0&&(x.delete(y),b.unregister(y))}c(I,"untrack");function U(A){B(A.target)}c(U,"onTextureDispose");function D(A){P(A.target)}c(D,"onRenderTargetDispose");function B(A){A.removeEventListener("dispose",U),I(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}c(B,"destroyTexture");function P(A){A.removeEventListener("dispose",D),I(A),se(A)}c(P,"destroyRenderTarget");function k(){for(let A of x){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):B(y))}x.clear(),f.clear()}c(k,"dispose");function Y(A){let y=n.get(A);if(y.__webglInit===void 0)return;let W=A.source,ae=p.get(W);if(ae){let ie=ae[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&z(A),Object.keys(ae).length===0&&p.delete(W)}n.remove(A)}c(Y,"deallocateTexture");function z(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let W=A.source,ae=p.get(W);delete ae[y.__cacheKey],a.memory.textures--}c(z,"deleteTexture");function se(A){let y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let W=A.depthTexture;if(W&&W.renderTarget===A&&B(W),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(y.__webglFramebuffer[ie]))for(let he=0;he<y.__webglFramebuffer[ie].length;he++)i.deleteFramebuffer(y.__webglFramebuffer[ie][he]);else i.deleteFramebuffer(y.__webglFramebuffer[ie]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ie])}else{if(Array.isArray(y.__webglFramebuffer))for(let ie=0;ie<y.__webglFramebuffer.length;ie++)i.deleteFramebuffer(y.__webglFramebuffer[ie]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ie=0;ie<y.__webglColorRenderbuffer.length;ie++)y.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ie]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ae=A.textures;for(let ie=0,he=ae.length;ie<he;ie++){let ge=n.get(ae[ie]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(ae[ie])}n.remove(A)}c(se,"deallocateRenderTarget");let Z=0;function ee(){Z=0}c(ee,"resetTextureUnits");function re(){return Z}c(re,"getTextureUnits");function Ee(A){Z=A}c(Ee,"setTextureUnits");function Ne(){let A=Z;return A>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,A}c(Ne,"allocateTextureUnit");function K(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}c(K,"getTextureCacheKey");function _e(A,y){let W=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){let ae=A.image;if(ae===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(W,A,y);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+y)}c(_e,"setTexture2D");function Te(A,y){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){vt(W,A,y);return}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+y)}c(Te,"setTexture2DArray");function Ie(A,y){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){vt(W,A,y);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+y)}c(Ie,"setTexture3D");function ce(A,y){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Ct(W,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+y)}c(ce,"setTextureCube");let Oe={[zs]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},pt={[zt]:i.NEAREST,[Vm]:i.NEAREST_MIPMAP_NEAREST,[Ka]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[bc]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},Fe={[qm]:i.NEVER,[Yh]:i.ALWAYS,[Ym]:i.LESS,[Xh]:i.LEQUAL,[Zm]:i.EQUAL,[qh]:i.GEQUAL,[$m]:i.GREATER,[Jm]:i.NOTEQUAL};function $e(A,y){if(y.type===ei&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kt||y.magFilter===bc||y.magFilter===Ka||y.magFilter===Bi||y.minFilter===kt||y.minFilter===bc||y.minFilter===Ka||y.minFilter===Bi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Oe[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Oe[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Oe[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==Ka&&y.minFilter!==Bi||y.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}c($e,"setTextureParameters");function tt(A,y){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",U),N(y));let ae=y.source,ie=p.get(ae);ie===void 0&&(ie={},p.set(ae,ie));let he=K(y);if(he!==A.__cacheKey){ie[he]===void 0&&(ie[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[he].usedTimes++;let ge=ie[A.__cacheKey];ge!==void 0&&(ie[A.__cacheKey].usedTimes--,ge.usedTimes===0&&z(y)),A.__cacheKey=he,A.__webglTexture=ie[he].texture}return W}c(tt,"initTexture");function qe(A,y,W){return Math.floor(Math.floor(A/W)/y)}c(qe,"getRow");function Mt(A,y,W,ae){let he=A.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,W,ae,y.data);else{he.sort((L,te)=>L.start-te.start);let ge=0;for(let L=1;L<he.length;L++){let te=he[ge],J=he[L],pe=te.start+te.count,ue=qe(J.start,y.width,4),de=qe(te.start,y.width,4);J.start<=pe+1&&ue===de&&qe(J.start+J.count-1,y.width,4)===ue?te.count=Math.max(te.count,J.start+J.count-te.start):(++ge,he[ge]=J)}he.length=ge+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let L=0,te=he.length;L<te;L++){let J=he[L],pe=Math.floor(J.start/4),ue=Math.ceil(J.count/4),de=pe%y.width,Le=Math.floor(pe/y.width),Ye=ue,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(i.TEXTURE_2D,0,de,Le,Ye,le,W,ae,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}c(Mt,"updateTexture");function vt(A,y,W){let ae=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=i.TEXTURE_3D);let ie=tt(A,y),he=y.source;t.bindTexture(ae,A.__webglTexture,i.TEXTURE0+W);let ge=n.get(he);if(he.version!==ge.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let le=Qe.getPrimaries(Qe.workingColorSpace),Ue=y.colorSpace===ki?null:Qe.getPrimaries(y.colorSpace),Xe=y.colorSpace===ki||le===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let j=w(y.image,!1,s.maxTextureSize);j=Be(y,j);let fe=r.convert(y.format,y.colorSpace),L=r.convert(y.type),te=E(y.internalFormat,fe,L,y.normalized,y.colorSpace,y.isVideoTexture);$e(ae,y);let J,pe=y.mipmaps,ue=y.isVideoTexture!==!0,de=ge.__version===void 0||ie===!0,Le=he.dataReady,Ye=S(y,j);if(y.isDepthTexture)te=m(y.format===zi,y.type),de&&(ue?t.texStorage2D(i.TEXTURE_2D,1,te,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,te,j.width,j.height,0,fe,L,null));else if(y.isDataTexture)if(pe.length>0){ue&&de&&t.texStorage2D(i.TEXTURE_2D,Ye,te,pe[0].width,pe[0].height);for(let le=0,Ue=pe.length;le<Ue;le++)J=pe[le],ue?Le&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,J.width,J.height,fe,L,J.data):t.texImage2D(i.TEXTURE_2D,le,te,J.width,J.height,0,fe,L,J.data);y.generateMipmaps=!1}else ue?(de&&t.texStorage2D(i.TEXTURE_2D,Ye,te,j.width,j.height),Le&&Mt(y,j,fe,L)):t.texImage2D(i.TEXTURE_2D,0,te,j.width,j.height,0,fe,L,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ue&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,te,pe[0].width,pe[0].height,j.depth);for(let le=0,Ue=pe.length;le<Ue;le++)if(J=pe[le],y.format!==ti)if(fe!==null)if(ue){if(Le)if(y.layerUpdates.size>0){let Xe=jh(J.width,J.height,y.format,y.type);for(let Me of y.layerUpdates){let at=J.data.subarray(Me*Xe/J.data.BYTES_PER_ELEMENT,(Me+1)*Xe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Me,J.width,J.height,1,fe,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,J.width,J.height,j.depth,fe,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,te,J.width,J.height,j.depth,0,J.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,J.width,J.height,j.depth,fe,L,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,te,J.width,J.height,j.depth,0,fe,L,J.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ue&&de&&t.texStorage2D(i.TEXTURE_2D,Ye,te,pe[0].width,pe[0].height);for(let le=0,Ue=pe.length;le<Ue;le++)J=pe[le],y.format!==ti?fe!==null?ue?Le&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,J.width,J.height,fe,J.data):t.compressedTexImage2D(i.TEXTURE_2D,le,te,J.width,J.height,0,J.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Le&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,J.width,J.height,fe,L,J.data):t.texImage2D(i.TEXTURE_2D,le,te,J.width,J.height,0,fe,L,J.data)}else if(y.isDataArrayTexture)if(ue){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,te,j.width,j.height,j.depth),Le)if(y.layerUpdates.size>0){let le=jh(j.width,j.height,y.format,y.type);for(let Ue of y.layerUpdates){let Xe=j.data.subarray(Ue*le/j.data.BYTES_PER_ELEMENT,(Ue+1)*le/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,j.width,j.height,1,fe,L,Xe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,L,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,j.width,j.height,j.depth,0,fe,L,j.data);else if(y.isData3DTexture)ue?(de&&t.texStorage3D(i.TEXTURE_3D,Ye,te,j.width,j.height,j.depth),Le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,L,j.data)):t.texImage3D(i.TEXTURE_3D,0,te,j.width,j.height,j.depth,0,fe,L,j.data);else if(y.isFramebufferTexture){if(de)if(ue)t.texStorage2D(i.TEXTURE_2D,Ye,te,j.width,j.height);else{let le=j.width,Ue=j.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,te,le,Ue,0,fe,L,null),le>>=1,Ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),j.parentNode!==le){le.appendChild(j),f.add(y),le.onpaint=Ue=>{let Xe=Ue.changedElements;for(let Me of f)Xe.includes(Me.image)&&(Me.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let Xe=i.RGBA,Me=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xe,Me,at,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pe.length>0){if(ue&&de){let le=He(pe[0]);t.texStorage2D(i.TEXTURE_2D,Ye,te,le.width,le.height)}for(let le=0,Ue=pe.length;le<Ue;le++)J=pe[le],ue?Le&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,fe,L,J):t.texImage2D(i.TEXTURE_2D,le,te,fe,L,J);y.generateMipmaps=!1}else if(ue){if(de){let le=He(j);t.texStorage2D(i.TEXTURE_2D,Ye,te,le.width,le.height)}Le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,L,j)}else t.texImage2D(i.TEXTURE_2D,0,te,fe,L,j);C(y)&&y.mipmapsAutoUpdate===!0&&T(ae),ge.__version=he.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}c(vt,"uploadTexture");function Ct(A,y,W){if(y.image.length!==6)return;let ae=tt(A,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let he=n.get(ie);if(ie.version!==he.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);let ge=Qe.getPrimaries(Qe.workingColorSpace),Q=y.colorSpace===ki?null:Qe.getPrimaries(y.colorSpace),j=y.colorSpace===ki||ge===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,te=[];for(let Me=0;Me<6;Me++)!fe&&!L?te[Me]=w(y.image[Me],!0,s.maxCubemapSize):te[Me]=L?y.image[Me].image:y.image[Me],te[Me]=Be(y,te[Me]);let J=te[0],pe=r.convert(y.format,y.colorSpace),ue=r.convert(y.type),de=E(y.internalFormat,pe,ue,y.normalized,y.colorSpace),Le=y.isVideoTexture!==!0,Ye=he.__version===void 0||ae===!0,le=ie.dataReady,Ue=S(y,J);$e(i.TEXTURE_CUBE_MAP,y);let Xe;if(y.isDepthTexture){if(de=m(y.format===zi,y.type),Ye)if(Le)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,de,J.width,J.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,J.width,J.height,0,pe,ue,null)}else if(fe){Le&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,de,J.width,J.height);for(let Me=0;Me<6;Me++){Xe=te[Me].mipmaps;for(let at=0;at<Xe.length;at++){let Ut=Xe[at];y.format!==ti?pe!==null?Le?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at,0,0,Ut.width,Ut.height,pe,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at,de,Ut.width,Ut.height,0,Ut.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at,0,0,Ut.width,Ut.height,pe,ue,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at,de,Ut.width,Ut.height,0,pe,ue,Ut.data)}}}else{if(Xe=y.mipmaps,Le&&Ye){Xe.length>0&&Ue++;let Me=He(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,de,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,te[Me].width,te[Me].height,pe,ue,te[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,te[Me].width,te[Me].height,0,pe,ue,te[Me].data);for(let at=0;at<Xe.length;at++){let Ji=Xe[at].image[Me].image;Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at+1,0,0,Ji.width,Ji.height,pe,ue,Ji.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at+1,de,Ji.width,Ji.height,0,pe,ue,Ji.data)}}else{Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,pe,ue,te[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,de,pe,ue,te[Me]);for(let at=0;at<Xe.length;at++){let Ut=Xe[at];Le?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at+1,0,0,pe,ue,Ut.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,at+1,de,pe,ue,Ut.image[Me])}}}C(y)&&y.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),he.__version=ie.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}c(Ct,"uploadCubeTexture");function lt(A,y,W,ae,ie,he){let ge=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),j=E(W.internalFormat,ge,Q,W.normalized,W.colorSpace),fe=n.get(y),L=n.get(W);if(L.__renderTarget=y,!fe.__hasExternalTextures){let te=Math.max(1,y.width>>he),J=Math.max(1,y.height>>he);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,he,j,te,J,y.depth,0,ge,Q,null):t.texImage2D(ie,he,j,te,J,0,ge,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ie,L.__webglTexture,0,gt(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ie,L.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}c(lt,"setupFrameBufferTexture");function xn(A,y,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let ae=y.depthTexture,ie=ae&&ae.isDepthTexture?ae.type:null,he=m(y.stencilBuffer,ie),ge=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(y),he,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(y),he,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,he,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{let ae=y.textures;for(let ie=0;ie<ae.length;ie++){let he=ae[ie],ge=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),j=E(he.internalFormat,ge,Q,he.normalized,he.colorSpace);ve(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt(y),j,y.width,y.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt(y),j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}c(xn,"setupRenderBufferStorage");function Nt(A,y,W){let ae=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(y.depthTexture);ie.__renderTarget=y;let he=ae?y.depthTexture.image[0]:y.depthTexture.image;(!ie.__webglTexture||he.width!==y.width||he.height!==y.height)&&(he.width=y.width,he.height=y.height,y.depthTexture.needsUpdate=!0),ae?ce(y.depthTexture,0):_e(y.depthTexture,0);let ge=ie.__webglTexture,Q=gt(y),j=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,fe=y.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ni)ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,j,ge,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,fe,j,ge,0);else if(y.depthTexture.format===zi)ve(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,j,ge,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,fe,j,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}c(Nt,"setupDepthTexture");function Nn(A){let y=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let ae=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ae){let ie=c(()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ae.removeEventListener("dispose",ie)},"disposeEvent");ae.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=ae}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let ae=0;ae<6;ae++)Nt(y.__webglFramebuffer[ae],A,ae);else A.texture.mipmaps.length>0?Nt(y.__webglFramebuffer[0],A,0):Nt(y.__webglFramebuffer,A,0);else if(W){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]===void 0)y.__webglDepthbuffer[ae]=i.createRenderbuffer(),xn(y.__webglDepthbuffer[ae],A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,he)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xn(y.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}c(Nn,"setupDepthRenderbuffer");function Un(A,y,W){let ae=n.get(A);y!==void 0&&lt(ae.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Nn(A)}c(Un,"rebindTextures");function Fn(A){let y=A.texture,W=n.get(A),ae=n.get(y);A.addEventListener("dispose",D),N(A);let ie=A.textures,he=A.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=y.version,a.memory.textures++),he){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let j=0;j<y.mipmaps.length;j++)W.__webglFramebuffer[Q][j]=i.createFramebuffer()}else W.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(y.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)W.__webglFramebuffer[Q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ge)for(let Q=0,j=ie.length;Q<j;Q++){let fe=n.get(ie[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<ie.length;Q++){let j=ie[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let fe=r.convert(j.format,j.colorSpace),L=r.convert(j.type),te=E(j.internalFormat,fe,L,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),J=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),xn(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),$e(i.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)lt(W.__webglFramebuffer[Q][j],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else lt(W.__webglFramebuffer[Q],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);C(y)?T(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let Q=0,j=ie.length;Q<j;Q++){let fe=ie[Q],L=n.get(fe),te=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),$e(te,fe),lt(W.__webglFramebuffer,A,fe,i.COLOR_ATTACHMENT0+Q,te,0),C(fe)&&T(te)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,ae.__webglTexture),$e(Q,y),y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)lt(W.__webglFramebuffer[j],A,y,i.COLOR_ATTACHMENT0,Q,j);else lt(W.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Q,0);C(y)?T(Q):y.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Nn(A)}c(Fn,"setupRenderTarget");function O(A){let y=A.textures;for(let W=0,ae=y.length;W<ae;W++){let ie=y[W];if(C(ie)&&ie.mipmapsAutoUpdate===!0){let he=R(A),ge=n.get(ie).__webglTexture;t.bindTexture(he,ge),T(he),t.unbindTexture()}}}c(O,"updateRenderTargetMipmap");let On=[];function mt(A){if(A.samples>0){if(ve(A)===!1){let y=A.textures,W=A.width,ae=A.height,ie=i.COLOR_BUFFER_BIT,he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),Q=y.length>1;if(Q)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let L=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,W,ae,0,0,W,ae,ie,i.NEAREST),l===!0&&(On.length=0,On.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&On.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,On))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let L=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}c(mt,"updateMultisampleRenderTarget");function gt(A){return Math.min(s.maxSamples,A.samples)}c(gt,"getRenderTargetSamples");function ve(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}c(ve,"useMultisampledRTT");function Rt(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}c(Rt,"updateVideoTexture");function Be(A,y){let W=A.colorSpace,ae=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Ca&&W!==ki&&(Qe.getTransfer(W)===rt?(ae!==ti||ie!==fn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",W)),y}c(Be,"verifyColorSpace");function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}c(He,"getDimensions"),this.allocateTextureUnit=Ne,this.resetTextureUnits=ee,this.getTextureUnits=re,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=Te,this.setTexture3D=Ie,this.setTextureCube=ce,this.rebindTextures=Un,this.setupRenderTarget=Fn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Nn,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ve,this.dispose=k}c(rS,"WebGLTextures");function aS(i,e){function t(n,s=ki){let r,a=Qe.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===ti)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===Qa||n===ja||n===eo||n===to)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Rc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===no||n===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Dc)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return r.COMPRESSED_R11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===no)return r.COMPRESSED_RG11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===kc||n===Gc||n===Vc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===jc||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===io||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return c(t,"convert"),{convert:t}}c(aS,"WebGLUtils");var oS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lS=`
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

}`,Pf=class Pf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mn({vertexShader:oS,fragmentShader:lS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};c(Pf,"WebXRDepthSensing");var bf=Pf,If=class If extends ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,x=null,b=typeof XRWebGLBinding<"u",_=new bf,g={},w=t.getContextAttributes(),C=null,T=null,R=[],E=[],m=new ke,S=null,N=null,I=new rn;I.viewport=new xt;let U=new rn;U.viewport=new xt;let D=[I,U],B=new tc,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _e=R[K];return _e===void 0&&(_e=new Nr,R[K]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(K){let _e=R[K];return _e===void 0&&(_e=new Nr,R[K]=_e),_e.getGripSpace()},this.getHand=function(K){let _e=R[K];return _e===void 0&&(_e=new Nr,R[K]=_e),_e.getHandSpace()};function Y(K){let _e=E.indexOf(K.inputSource);if(_e===-1)return;let Te=R[_e];Te!==void 0&&(Te.update(K.inputSource,K.frame,u||a),Te.dispatchEvent({type:K.type,data:K.inputSource}))}c(Y,"onSessionEvent");function z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",se);for(let K=0;K<R.length;K++){let _e=E[K];_e!==null&&(E[K]=null,R[K].disconnect(_e))}P=null,k=null,_.reset();for(let K in g)delete g[K];if(e.setRenderTarget(C),p=null,d=null,f=null,s=null,T=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}c(z,"onSessionEnd"),this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",z),s.addEventListener("inputsourceschange",se),w.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ie=null,ce=null;w.depth&&(ce=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=w.stencil?zi:Ni,Ie=w.stencil?Ws:jn);let Oe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new yn(d.textureWidth,d.textureHeight,{format:ti,type:fn,depthTexture:new Fi(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new yn(p.framebufferWidth,p.framebufferHeight,{format:ti,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(K){for(let _e=0;_e<K.removed.length;_e++){let Te=K.removed[_e],Ie=E.indexOf(Te);Ie>=0&&(E[Ie]=null,R[Ie].disconnect(Te))}for(let _e=0;_e<K.added.length;_e++){let Te=K.added[_e],Ie=E.indexOf(Te);if(Ie===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=E.length){E.push(Te),Ie=Oe;break}else if(E[Oe]===null){E[Oe]=Te,Ie=Oe;break}if(Ie===-1)break}let ce=R[Ie];ce&&ce.connect(Te)}}c(se,"onInputSourcesChange");function Z(K,_e){_e===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_e.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}c(Z,"updateCamera"),this.updateCamera=function(K){if(s===null)return;let _e=K.near,Te=K.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),B.near=U.near=I.near=_e,B.far=U.far=I.far=Te,(P!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,k=B.far),B.layers.mask=K.layers.mask|6,I.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;let Ie=K.parent,ce=B.cameras;Z(B,Ie);for(let Oe=0;Oe<ce.length;Oe++)Z(ce[Oe],Ie);B.projectionMatrix.copy(I.projectionMatrix),B.projectionMatrixInverse.copy(I.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),ee(K,B,Ie)};function ee(K,_e,Te){Te===null?K.matrix.copy(_e.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(_e.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Nl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}c(ee,"updateUserCamera"),this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(K){return g[K]};let re=null;function Ee(K,_e){if(h=_e.getViewerPose(u||a),x=_e,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let Ie=!1;Te.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let Fe=0;Fe<Te.length;Fe++){let $e=Te[Fe],tt=null;if(p!==null)tt=p.getViewport($e);else{let Mt=f.getViewSubImage(d,$e);tt=Mt.viewport,Fe===0&&(e.setRenderTargetTextures(T,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(T))}let qe=D[Fe];qe===void 0&&(qe=new rn,qe.layers.enable(Fe),qe.viewport=new xt,D[Fe]=qe),qe.matrix.fromArray($e.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray($e.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(tt.x,tt.y,tt.width,tt.height),Fe===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(qe)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Fe=f.getDepthInformation(Te[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(Fe,s.renderState)}if(ce&&ce.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let Fe=0;Fe<Te.length;Fe++){let $e=Te[Fe].camera;if($e){let tt=g[$e];tt||(tt=new Va,g[$e]=tt);let qe=f.getCameraImage($e);tt.sourceTexture=qe}}}}for(let Te=0;Te<R.length;Te++){let Ie=E[Te],ce=R[Te];Ie!==null&&ce!==void 0&&ce.update(Ie,_e,u||a)}re&&re(K,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),x=null}c(Ee,"onAnimationFrame");let Ne=new R0;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(K){re=K},this.dispose=function(){}}};c(If,"WebXRManager");var Mf=If,cS=new ot,z0=new Ve;z0.set(-1,0,0,0,1,0,0,0,1);function uS(i,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}c(t,"refreshTransformUniform");function n(_,g){g.color.getRGB(_.fogColor.value,Jh(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}c(n,"refreshFogUniforms");function s(_,g,w,C,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),f(_,g)):g.isMeshPhongMaterial?(r(_,g),h(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),d(_,g),g.isMeshPhysicalMaterial&&p(_,g,T)):g.isMeshMatcapMaterial?(r(_,g),x(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),b(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(a(_,g),g.isLineDashedMaterial&&o(_,g)):g.isPointsMaterial?l(_,g,w,C):g.isSpriteMaterial?u(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}c(s,"refreshMaterialUniforms");function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===ln&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===ln&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let w=e.get(g),C=w.envMap,T=w.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(cS.makeRotationFromEuler(T)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(z0),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}c(r,"refreshUniformsCommon");function a(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}c(a,"refreshUniformsLine");function o(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}c(o,"refreshUniformsDash");function l(_,g,w,C){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*w,_.scale.value=C*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}c(l,"refreshUniformsPoints");function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}c(u,"refreshUniformsSprites");function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}c(h,"refreshUniformsPhong");function f(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}c(f,"refreshUniformsToon");function d(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}c(d,"refreshUniformsStandard");function p(_,g,w){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}c(p,"refreshUniformsPhysical");function x(_,g){g.matcap&&(_.matcap.value=g.matcap)}c(x,"refreshUniformsMatcap");function b(_,g){let w=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return c(b,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:s}}c(uS,"WebGLMaterials");function hS(i,e,t,n){let s={},r={};function a(w,C){let T=C.program;n.uniformBlockBinding(w,T,s[w.id])}c(a,"bind");function o(w,C){let T=s[w.id];T===void 0&&(x(w),T=l(w),s[w.id]=T,w.addEventListener("dispose",_));let R=C.program;n.updateUBOMapping(w,R);let E=e.render.frame;r[w.id]!==E&&(u(w),r[w.id]=E)}c(o,"update");function l(w){let C=i.createBuffer(),T=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),C}c(l,"createBuffer");function u(w){let C=s[w.id],T=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let E=0,m=T.length;E<m;E++){let S=T[E];if(Array.isArray(S))for(let N=0,I=S.length;N<I;N++)h(S[N],E,N,R);else h(S,E,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}c(u,"updateBufferData");function h(w,C,T,R){if(d(w,C,T,R)===!0){let E=w.__offset,m=w.value;if(Array.isArray(m)){let S=0;for(let N=0;N<m.length;N++){let I=m[N],U=b(I,!0);f(I,w.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(m,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}c(h,"updateUniform");function f(w,C,T){typeof w=="number"||typeof w=="boolean"?C[T]=w:w.isMatrix3?(C[T]=w.elements[0],C[T+1]=w.elements[1],C[T+2]=w.elements[2],C[T+3]=0,C[T+4]=w.elements[3],C[T+5]=w.elements[4],C[T+6]=w.elements[5],C[T+7]=0,C[T+8]=w.elements[6],C[T+9]=w.elements[7],C[T+10]=w.elements[8],C[T+11]=0):ArrayBuffer.isView(w)?C.set(w.subarray(0,C.length-T),T):w.toArray(C,T)}c(f,"writeUniformValue");function d(w,C,T,R){let E=w.value,m=C+"_"+T;if(Array.isArray(E)){R[m]===void 0&&(R[m]=[]);let S=R[m],N=!1;for(let I=0;I<E.length;I++)p(E[I],S,I)===!0&&(N=!0);return N}return p(E,R,m)}c(d,"hasUniformChanged");function p(w,C,T){if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:ArrayBuffer.isView(w)?C[T]=w.slice():C[T]=w.clone(),!0;{let R=C[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[T]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(R.equals(w)===!1)return R.copy(w),!0}}return!1}c(p,"hasValueChanged");function x(w){let C=w.uniforms,T=0,R=16;for(let m=0,S=C.length;m<S;m++){let N=Array.isArray(C[m])?C[m]:[C[m]];for(let I=0,U=N.length;I<U;I++){let D=N[I],B=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(C[m])||Array.isArray(D.value),k=T;for(let z=0,se=B.length;z<se;z++){let Z=B[z],ee=b(Z,P),re=T%R,Ee=re%ee.boundary,Ne=re+Ee;T+=Ee,Ne!==0&&R-Ne<ee.storage&&(T+=R-Ne),z===0&&(k=T),T+=ee.storage}let Y=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Y((T-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}let E=T%R;return E>0&&(T+=R-E),w.__size=T,w.__cache={},this}c(x,"prepareUniformsGroup");function b(w,C){let T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=16,T.storage=48):w.isMatrix4?(T.boundary=16,T.storage=64):w.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(T.boundary=16,T.storage=w.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",w),C===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}c(b,"getUniformSize");function _(w){let C=w.target;C.removeEventListener("dispose",_),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}c(_,"onUniformsGroupsDispose");function g(){for(let w in s)i.deleteBuffer(s[w]);s={},r={}}return c(g,"dispose"),{bind:a,update:o,dispose:g}}c(hS,"WebGLUniformsGroups");var dS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function fS(){return pi===null&&(pi=new Or(dS,16,16,fi,wn),pi.name="DFG_LUT",pi.minFilter=kt,pi.magFilter=kt,pi.wrapS=zn,pi.wrapT=zn,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}c(fS,"getDFGLUT");var Lf=class Lf{constructor(e={}){let{canvas:t=Km(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=fn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let b=p,_=new Set([Ac,Tc,Ec]),g=new Set([fn,jn,Hr,Ws,Sc,wc]),w=new Uint32Array(4),C=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},R=null,E=null,m=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,D=null,B=null,P=null,k=null;this._outputColorSpace=Bt;let Y=0,z=0,se=null,Z=-1,ee=null,re=new xt,Ee=new xt,Ne=null,K=new De(0),_e=0,Te=t.width,Ie=t.height,ce=1,Oe=null,pt=null,Fe=new xt(0,0,Te,Ie),$e=new xt(0,0,Te,Ie),tt=!1,qe=new cs,Mt=new kl,vt=!1,Ct=!1,lt=new ot,xn=new G,Nt=new xt,Nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Un=!1;function Fn(){return se===null?ce:1}c(Fn,"getTargetPixelRatio");let O=n;function On(M,F){return t.getContext(M,F)}c(On,"getContext");let mt,gt,ve,Rt,Be,He,A,y,W,ae,ie,he,ge,Q,j,fe,L,te,J,pe,ue,de,Le;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),O===null){let F="webgl2";if(O=On(F,M),O===null)throw On(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(M){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ge("WebGLRenderer: "+M.message),M}function Ye(){mt=new wb(O),mt.init(),ue=new aS(O,mt),gt=new fb(O,mt,e,ue),ve=new sS(O,mt),gt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),B=O.createFramebuffer(),P=O.createFramebuffer(),k=O.createFramebuffer(),Rt=new Ab(O),Be=new WM,He=new rS(O,mt,ve,Be,gt,ue,Rt),A=new Sb(I),y=new R_(O),de=new hb(O,y),W=new Eb(O,y,Rt,de),ae=new Rb(O,W,y,de,Rt),te=new Cb(O,gt,He),j=new pb(Be),ie=new HM(I,A,mt,gt,de,j),he=new uS(I,Be),ge=new qM,Q=new QM(mt),L=new ub(I,A,ve,ae,x,l),fe=new iS(I,ae,gt),Le=new hS(O,Rt,gt,ve),J=new db(O,mt,Rt),pe=new Tb(O,mt,Rt),Rt.programs=ie.programs,I.capabilities=gt,I.extensions=mt,I.properties=Be,I.renderLists=ge,I.shadowMap=fe,I.state=ve,I.info=Rt}c(Ye,"initGLContext"),b!==fn&&(N=new Ib(b,t.width,t.height,o,s,r));let le=new Mf(I,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(M){M!==void 0&&(ce=M,this.setSize(Te,Ie,!1))},this.getSize=function(M){return M.set(Te,Ie)},this.setSize=function(M,F,$=!0){if(le.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=M,Ie=F,t.width=Math.floor(M*ce),t.height=Math.floor(F*ce),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Te*ce,Ie*ce).floor()},this.setDrawingBufferSize=function(M,F,$){Te=M,Ie=F,ce=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(b===fn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Fe)},this.setViewport=function(M,F,$,V){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,F,$,V),ve.viewport(re.copy(Fe).multiplyScalar(Fn()).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,F,$,V){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,F,$,V),ve.scissor(Ee.copy($e).multiplyScalar(Fn()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){ve.setScissorTest(tt=M)},this.setOpaqueSort=function(M){Oe=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let V=0;if(M){let X=!1;if(se!==null){let xe=se.texture.format;X=_.has(xe)}if(X){let xe=se.texture.type,Ae=g.has(xe),me=L.getClearColor(),Se=L.getClearAlpha(),Pe=me.r,We=me.g,Je=me.b;Ae?(w[0]=Pe,w[1]=We,w[2]=Je,w[3]=Se,O.clearBufferuiv(O.COLOR,0,w)):(C[0]=Pe,C[1]=We,C[2]=Je,C[3]=Se,O.clearBufferiv(O.COLOR,0,C))}else V|=O.COLOR_BUFFER_BIT}F&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),L.dispose(),ge.dispose(),Q.dispose(),He.dispose(),Be.dispose(),A.dispose(),ae.dispose(),W.dispose(),de.dispose(),Le.dispose(),ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",Dp),le.removeEventListener("sessionend",Np),Is.stop()};function Ue(M){M.preventDefault(),Ia("WebGLRenderer: Context Lost."),U=!0}c(Ue,"onContextLost");function Xe(){Ia("WebGLRenderer: Context Restored."),U=!1;let M=Rt.autoReset,F=fe.enabled,$=fe.autoUpdate,V=fe.needsUpdate,X=fe.type;Ye(),Rt.autoReset=M,fe.enabled=F,fe.autoUpdate=$,fe.needsUpdate=V,fe.type=X}c(Xe,"onContextRestore");function Me(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}c(Me,"onContextCreationError");function at(M){let F=M.target;F.removeEventListener("dispose",at),Ut(F)}c(at,"onMaterialDispose");function Ut(M){Ji(M),Be.remove(M)}c(Ut,"deallocateMaterial");function Ji(M){let F=Be.get(M).programs;F!==void 0&&(F.forEach(function($){ie.releaseProgram($)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}c(Ji,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,F,$,V,X,xe){F===null&&(F=Nn);let Ae=X.isMesh&&X.matrixWorld.determinantAffine()<0,me=Cx(M,F,$,V,X);ve.setMaterial(V,Ae);let Se=$.index,Pe=1;if(V.wireframe===!0){if(Se=W.getWireframeAttribute($),Se===void 0)return;Pe=2}let We=$.drawRange,Je=$.attributes.position,Ce=We.start*Pe,Ke=(We.start+We.count)*Pe;xe!==null&&(Ce=Math.max(Ce,xe.start*Pe),Ke=Math.min(Ke,(xe.start+xe.count)*Pe)),Se!==null?(Ce=Math.max(Ce,0),Ke=Math.min(Ke,Se.count)):Je!=null&&(Ce=Math.max(Ce,0),Ke=Math.min(Ke,Je.count));let Et=Ke-Ce;if(Et<0||Et===1/0)return;de.setup(X,V,me,$,Se);let ut,ct=J;if(Se!==null&&(ut=y.get(Se),ct=pe,ct.setIndex(ut)),X.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*Fn()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(X.isLine){let Yt=V.linewidth;Yt===void 0&&(Yt=1),ve.setLineWidth(Yt*Fn()),X.isLineSegments?ct.setMode(O.LINES):X.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else X.isPoints?ct.setMode(O.POINTS):X.isSprite&&ct.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Yt=X._multiDrawStarts,Re=X._multiDrawCounts,nn=X._multiDrawCount,nt=Se?y.get(Se).bytesPerElement:1,Ls=Be.get(V).currentProgram.getUniforms();for(let Zt=0;Zt<nn;Zt++)Ls.setValue(O,"_gl_DrawID",Zt),ct.render(Yt[Zt]/nt,Re[Zt])}else if(X.isInstancedMesh)ct.renderInstances(Ce,Et,X.count);else if($.isInstancedBufferGeometry){let Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,Yt);ct.renderInstances(Ce,Et,Re)}else ct.render(Ce,Et)};function Lp(M,F,$,V){D!==null&&M.isNodeMaterial&&D.setObject(V,M),vt===!0&&j.setState(M,$,!1),M.transparent===!0&&M.side===hi&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,xa(M,F,V),M.side=ms,M.needsUpdate=!0,xa(M,F,V),M.side=hi):xa(M,F,V)}c(Lp,"prepareMaterial"),this.compile=function(M,F,$=null){$===null&&($=M),D!==null&&D.renderStart(M,F,$),E=Q.get($),E.init(F),S.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),M!==$&&M.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),Ct=this.localClippingEnabled,vt=j.init(this.clippingPlanes,Ct),vt===!0&&j.setGlobalState(this.clippingPlanes,F),D!==null&&fe.render(E.state.shadowsArray,$,F);let V=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){let me=xe[Ae];Lp(me,$,F,X),V.add(me)}else Lp(xe,$,F,X),V.add(xe)}),E=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(M,F,$=null){let V=this.compile(M,F,$);return new Promise(X=>{function xe(){if(V.forEach(function(Ae){let Se=Be.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&V.delete(Ae)}),V.size===0){X(M);return}setTimeout(xe,10)}c(xe,"checkMaterialsReady"),mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Gu=null;function Tx(M){Gu&&Gu(M)}c(Tx,"onAnimationFrame");function Dp(){Is.stop()}c(Dp,"onXRSessionStart");function Np(){Is.start()}c(Np,"onXRSessionEnd");let Is=new R0;Is.setAnimationLoop(Tx),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(M){Gu=M,le.setAnimationLoop(M),M===null?Is.stop():Is.start()},le.addEventListener("sessionstart",Dp),le.addEventListener("sessionend",Np),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(M,F);let $=le.enabled===!0&&le.isPresenting===!0,V=N!==null&&(se===null||$)&&N.begin(I,se);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,F,se),E=Q.get(M,S.length),E.init(F),E.state.textureUnits=He.getTextureUnits(),S.push(E),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Mt.setFromArrayCamera(F):qe.setFromProjectionMatrix(lt,kn,F.reversedDepth),Ct=this.localClippingEnabled,vt=j.init(this.clippingPlanes,Ct),R=ge.get(M,m.length),R.init(),m.push(R),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&Vu(Ae,F,-1/0,I.sortObjects)}Vu(M,F,0,I.sortObjects),R.finish(),D!==null&&D.updateLights(E.state.lightsArray),I.sortObjects===!0&&R.sort(Oe,pt),Un=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Un&&L.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),vt===!0&&j.beginShadows();let X=E.state.shadowsArray;if(fe.render(X,M,F),vt===!0&&j.endShadows(),(V&&N.hasRenderPass())===!1){let Ae=R.opaque,me=R.transmissive;if(E.setupLights(),F.isArrayCamera){let Se=F.cameras;if(me.length>0)for(let Pe=0,We=Se.length;Pe<We;Pe++){let Je=Se[Pe];Fp(Ae,me,M,Je)}Un&&L.render(M);for(let Pe=0,We=Se.length;Pe<We;Pe++){let Je=Se[Pe];Up(R,M,Je,Je.viewport)}}else me.length>0&&Fp(Ae,me,M,F),Un&&L.render(M),Up(R,M,F)}se!==null&&z===0&&(He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se)),V&&N.end(I),M.isScene===!0&&M.onAfterRender(I,M,F),de.resetDefaultState(),Z=-1,ee=null,S.pop(),S.length>0?(E=S[S.length-1],He.setTextureUnits(E.state.textureUnits),vt===!0&&j.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?R=m[m.length-1]:R=null,D!==null&&D.renderEnd()};function Vu(M,F,$,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Ae=F.isArrayCamera?Mt:qe;if(!M.frustumCulled||M.intersectsFrustum(Ae)){V&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(lt);let me=ae.update(M),Se=M.material;Se.visible&&R.push(M,me,Se,$,Nt.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){let Ae=F.isArrayCamera?Mt:qe;if(!M.frustumCulled||M.intersectsFrustum(Ae)){let me=ae.update(M),Se=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Nt.copy(me.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(lt)),Array.isArray(Se)){let Pe=me.groups;for(let We=0,Je=Pe.length;We<Je;We++){let Ce=Pe[We],Ke=Se[Ce.materialIndex];Ke&&Ke.visible&&R.push(M,me,Ke,$,Nt.z,Ce,F)}}else Se.visible&&R.push(M,me,Se,$,Nt.z,null,F)}}}let xe=M.children;for(let Ae=0,me=xe.length;Ae<me;Ae++)Vu(xe[Ae],F,$,V)}c(Vu,"projectObject");function Up(M,F,$,V){let{opaque:X,transmissive:xe,transparent:Ae}=M;E.setupLightsView($),vt===!0&&j.setGlobalState(I.clippingPlanes,$),V&&ve.viewport(re.copy(V)),X.length>0&&Ko(X,F,$),xe.length>0&&Ko(xe,F,$),Ae.length>0&&Ko(Ae,F,$),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}c(Up,"renderScene");function Fp(M,F,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Ce=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new yn(1,1,{generateMipmaps:!0,type:Ce?wn:fn,minFilter:Bi,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let xe=E.state.transmissionRenderTarget[V.id],Ae=V.viewport||re;xe.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let me=I.getRenderTarget(),Se=I.getActiveCubeFace(),Pe=I.getActiveMipmapLevel();I.setRenderTarget(xe),I.getClearColor(K),_e=I.getClearAlpha(),_e<1&&I.setClearColor(16777215,.5),I.clear(),Un&&L.render($);let We=I.toneMapping;I.toneMapping=di;let Je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),vt===!0&&j.setGlobalState(I.clippingPlanes,V),Ko(M,$,V),He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ke=0,Et=F.length;Ke<Et;Ke++){let ut=F[Ke],{object:ct,geometry:Yt,material:Re,group:nn}=ut;if(Re.side===hi&&ct.layers.test(V.layers)){let nt=Re.side;Re.side=ln,Re.needsUpdate=!0,Op(ct,$,V,Yt,Re,nn),Re.side=nt,Re.needsUpdate=!0,Ce=!0}}Ce===!0&&(He.updateMultisampleRenderTarget(xe),He.updateRenderTargetMipmap(xe))}I.setRenderTarget(me,Se,Pe),I.setClearColor(K,_e),Je!==void 0&&(V.viewport=Je),I.toneMapping=We}c(Fp,"renderTransmissionPass");function Ko(M,F,$){let V=F.isScene===!0?F.overrideMaterial:null;for(let X=0,xe=M.length;X<xe;X++){let Ae=M[X],{object:me,geometry:Se,group:Pe}=Ae,We=Ae.material;We.allowOverride===!0&&V!==null&&(We=V),me.layers.test($.layers)&&Op(me,F,$,Se,We,Pe)}}c(Ko,"renderObjects");function Op(M,F,$,V,X,xe){D!==null&&X.isNodeMaterial&&D.setObject(M,X),M.onBeforeRender(I,F,$,V,X,xe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(I,F,$,V,M,xe),X.transparent===!0&&X.side===hi&&X.forceSinglePass===!1?(X.side=ln,X.needsUpdate=!0,I.renderBufferDirect($,F,V,X,M,xe),X.side=ms,X.needsUpdate=!0,I.renderBufferDirect($,F,V,X,M,xe),X.side=hi):I.renderBufferDirect($,F,V,X,M,xe),M.onAfterRender(I,F,$,V,X,xe)}c(Op,"renderObject");function Bp(M){let F=0;for(let $ of M)$.texture!==null&&F++;return F}c(Bp,"countLightProbeGrids");function xa(M,F,$){F.isScene!==!0&&(F=Nn);let V=Be.get(M),X=E.state.lights,xe=E.state.shadowsArray,Ae=X.state.version,me=ie.getParameters(M,X.state,xe,F,$,E.state.lightProbeGridArray),Se=ie.getProgramCacheKey(me),Pe=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let We=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=A.get(M.envMap||V.environment,We),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",at),Pe=new Map,V.programs=Pe,V.programVariants=new Map);let Je=Pe.get(Se);if(Je!==void 0){if(V.currentProgram===Je&&V.lightsStateVersion===Ae)return kp(M,me),Je}else me.uniforms=ie.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,$,me),M.onBeforeCompile(me,I),Je=ie.acquireProgram(me,Se),Pe.set(Se,Je),V.uniforms=me.uniforms;let Ce=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=j.uniform),kp(M,me),V.needsLights=Px(M),V.lightsStateVersion=Ae,V.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=Bp(E.state.lightProbeGridArray),V.currentProgram=Je,V.uniformsList=null,Je}c(xa,"getProgram");function Ax(M,F,$,V,X){let xe=Be.get(M),Ae=xe.currentProgram.id+","+V+","+X,me=xe.programVariants.get(Ae);return me===void 0?(me=xa(M,F,$),xe.programVariants.set(Ae,me)):(xe.currentProgram=me,xe.uniformsList=null,xe.outputColorSpace=V,xe.toneMapping=X),me}c(Ax,"getProgramVariant");function zp(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Wr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}c(zp,"getUniformList");function kp(M,F){let $=Be.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}c(kp,"updateCommonMaterialProperties");function Cx(M,F,$,V,X){F.isScene!==!0&&(F=Nn),He.resetTextureUnits();let xe=F.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,me=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Qe.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=A.get(V.envMap||Ae,Se),We=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!$.morphAttributes.position,Ke=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,ut=di;V.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=I.toneMapping);let ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Yt=ct!==void 0?ct.length:0,Re=Be.get(V),nn=E.state.lights;if(vt===!0&&(Ct===!0||M!==ee)){let yt=M===ee&&V.id===Z;j.setState(V,M,yt)}let nt=!1,Ls=!1;V.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==nn.state.version||X.isBatchedMesh&&Re.batching===!1||!X.isBatchedMesh&&Re.batching===!0||X.isBatchedMesh&&Re.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Re.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||X.isInstancedMesh&&Re.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Re.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Re.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Re.instancingMorph===!1&&X.morphTexture!==null||Re.envMap!==Pe||V.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==j.numPlanes||Re.numIntersection!==j.numIntersection)||Re.vertexAlphas!==We||Re.vertexTangents!==Je||Re.morphTargets!==Ce||Re.morphNormals!==Ke||Re.morphColors!==Et||Re.morphTargetsCount!==Yt||Re.numLightProbeGrids!==Bp(E.state.lightProbeGridArray)?nt=!0:(Re.outputColorSpace!==me||Re.toneMapping!==ut)&&(Ls=!0):(nt=!0,Re.__version=V.version);let Zt=Re.currentProgram;(nt===!0||Ls===!0)&&(Zt=Ls===!0?Ax(V,F,X,me,ut):xa(V,F,X),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Zt,Re));let Qo=!1,Ki=!1,Ds=!1,et=Zt.getUniforms(),Ht=Re.uniforms;if(ve.useProgram(Zt.program)&&(Qo=!0,Ki=!0,Ds=!0),V.id!==Z&&(Z=V.id,Ki=!0),Qo||ee!==M){ve.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),et.setValue(O,"projectionMatrix",M.projectionMatrix),et.setValue(O,"viewMatrix",M.matrixWorldInverse);let Ft=et.map.cameraPosition;Ft!==void 0&&Ft.setValue(O,xn.setFromMatrixPosition(M.matrixWorld)),gt.logarithmicDepthBuffer&&et.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&et.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,Ki=!0,Ds=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&et.setValue(O,"sunShadowMap",nn.state.sunShadowMap,He),nn.state.directionalShadowMap.length>0&&et.setValue(O,"directionalShadowMap",nn.state.directionalShadowMap,He),nn.state.spotShadowMap.length>0&&et.setValue(O,"spotShadowMap",nn.state.spotShadowMap,He),nn.state.pointShadowMap.length>0&&et.setValue(O,"pointShadowMap",nn.state.pointShadowMap,He)),X.isSkinnedMesh){et.setOptional(O,X,"bindMatrix"),et.setOptional(O,X,"bindMatrixInverse");let yt=X.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),et.setValue(O,"boneTexture",yt.boneTexture,He))}X.isBatchedMesh&&(et.setOptional(O,X,"batchingTexture"),et.setValue(O,"batchingTexture",X._matricesTexture,He),et.setOptional(O,X,"batchingIdTexture"),et.setValue(O,"batchingIdTexture",X._indirectTexture,He),et.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&et.setValue(O,"batchingColorTexture",X._colorsTexture,He));let Yn=$.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&te.update(X,$,Zt),(Ki||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,et.setValue(O,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Ht.envMapIntensity.value=F.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=fS()),Ki){if(et.setValue(O,"toneMappingExposure",I.toneMappingExposure),Re.needsLights&&Rx(Ht,Ds),xe&&V.fog===!0&&he.refreshFogUniforms(Ht,xe),he.refreshMaterialUniforms(Ht,V,ce,Ie,E.state.transmissionRenderTarget[M.id]),Re.needsLights&&Re.numLightProbeGrids>0){let yt=T,Ft=0;for(let Ei of E.state.lightProbeGridArray)Ei.texture!==null&&(yt.textures[Ft]=Ei.texture,yt.min[Ft]=Ei.boundingBox.min,yt.max[Ft]=Ei.boundingBox.max,yt.resolution[Ft]=Ei.resolution,Ft++);for(let Ei in yt)yt[Ei].length=Ft;Ht.probesSH.value=yt.textures,Ht.probesMin.value=yt.min,Ht.probesMax.value=yt.max,Ht.probesResolution.value=yt.resolution}Wr.upload(O,zp(Re),Ht,He)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wr.upload(O,zp(Re),Ht,He),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&et.setValue(O,"center",X.center),et.setValue(O,"modelViewMatrix",X.modelViewMatrix),et.setValue(O,"normalMatrix",X.normalMatrix),et.setValue(O,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let yt=V.uniformsGroups;for(let Ft=0,Ei=yt.length;Ft<Ei;Ft++){let Vp=yt[Ft];Le.update(Vp,Zt),Le.bind(Vp,Zt)}}return Zt}c(Cx,"setProgram");function Rx(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}c(Rx,"markUniformsLightsNeedsUpdate");function Px(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}c(Px,"materialNeedsLights"),this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(M,F,$){let V=Be.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Be.get(M.texture).__webglTexture=F,Be.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let $=Be.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,$=0){se=M,Y=F,z=$;let V=null,X=!1,xe=!1;if(M){let me=Be.get(M);if(me.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),re.copy(M.viewport),Ee.copy(M.scissor),Ne=M.scissorTest,ve.viewport(re),ve.scissor(Ee),ve.setScissorTest(Ne),Z=-1;return}else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(M);else if(me.__hasExternalTextures)He.rebindTextures(M,Be.get(M.texture).__webglTexture,Be.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let We=M.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&Be.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(M)}}let Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(xe=!0);let Pe=Be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?V=Pe[F][$]:V=Pe[F],X=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?V=Be.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[$]:V=Pe,re.copy(M.viewport),Ee.copy(M.scissor),Ne=M.scissorTest}else re.copy(Fe).multiplyScalar(ce).floor(),Ee.copy($e).multiplyScalar(ce).floor(),Ne=tt;if($!==0&&(V=B),ve.bindFramebuffer(O.FRAMEBUFFER,V)&&ve.drawBuffers(M,V),ve.viewport(re),ve.scissor(Ee),ve.setScissorTest(Ne),X){let me=Be.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,$)}else if(xe){let me=F;for(let Se=0;Se<M.textures.length;Se++){let Pe=Be.get(M.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,$,me)}}else if(M!==null&&$!==0){let me=Be.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,$)}Z=-1};function Gp(M){let F=Be.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=gt.textureFormatReadable(M.format),F.__typeReadable=gt.textureTypeReadable(M.type)),F}c(Gp,"getReadableState"),this.readRenderTargetPixels=function(M,F,$,V,X,xe,Ae,me=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){ve.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Pe=M.textures[me],We=Pe.format,Je=Pe.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ce=Gp(Pe);if(Ce.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&$>=0&&$<=M.height-X&&O.readPixels(F,$,V,X,ue.convert(We),ue.convert(Je),xe)}finally{let Pe=se!==null?Be.get(se).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,V,X,xe,Ae,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(F>=0&&F<=M.width-V&&$>=0&&$<=M.height-X){ve.bindFramebuffer(O.FRAMEBUFFER,Se);let Pe=M.textures[me],We=Pe.format,Je=Pe.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);let Ce=Gp(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(F,$,V,X,ue.convert(We),ue.convert(Je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Et=se!==null?Be.get(se).__webglFramebuffer:null;ve.bindFramebuffer(O.FRAMEBUFFER,Et);let ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await jm(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ke),O.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){let V=Math.pow(2,-$),X=Math.floor(M.image.width*V),xe=Math.floor(M.image.height*V),Ae=F!==null?F.x:0,me=F!==null?F.y:0;He.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Ae,me,X,xe),ve.unbindTexture()},this.copyTextureToTexture=function(M,F,$=null,V=null,X=0,xe=0){let Ae,me,Se,Pe,We,Je,Ce,Ke,Et,ut=M.isCompressedTexture?M.mipmaps[xe]:M.image;if($!==null)Ae=$.max.x-$.min.x,me=$.max.y-$.min.y,Se=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,We=$.min.y,Je=$.isBox3?$.min.z:0;else{let et=Math.pow(2,-X);Ae=Math.floor(ut.width*et),me=Math.floor(ut.height*et),M.isDataArrayTexture?Se=ut.depth:M.isData3DTexture?Se=Math.floor(ut.depth*et):Se=1,Pe=0,We=0,Je=0}V!==null?(Ce=V.x,Ke=V.y,Et=V.z):(Ce=0,Ke=0,Et=0);let ct=ue.convert(F.format),Yt=ue.convert(F.type),Re;F.isData3DTexture?(He.setTexture3D(F,0),Re=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Re=O.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Re=O.TEXTURE_2D),ve.activeTexture(O.TEXTURE0),ve.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ve.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ve.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=ve.getParameter(O.UNPACK_ROW_LENGTH),nt=ve.getParameter(O.UNPACK_IMAGE_HEIGHT),Ls=ve.getParameter(O.UNPACK_SKIP_PIXELS),Zt=ve.getParameter(O.UNPACK_SKIP_ROWS),Qo=ve.getParameter(O.UNPACK_SKIP_IMAGES);ve.pixelStorei(O.UNPACK_ROW_LENGTH,ut.width),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut.height),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),ve.pixelStorei(O.UNPACK_SKIP_ROWS,We),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);let Ki=M.isDataArrayTexture||M.isData3DTexture,Ds=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let et=Be.get(M),Ht=Be.get(F),Yn=Be.get(et.__renderTarget),yt=Be.get(Ht.__renderTarget);ve.bindFramebuffer(O.READ_FRAMEBUFFER,Yn.__webglFramebuffer),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ft=0;Ft<Se;Ft++)Ki&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.get(M).__webglTexture,X,Je+Ft),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.get(F).__webglTexture,xe,Et+Ft)),O.blitFramebuffer(Pe,We,Pe+Ae,We+me,Ce,Ke,Ce+Ae,Ke+me,O.DEPTH_BUFFER_BIT,O.NEAREST);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||Be.has(M)){let et=Be.get(M),Ht=Be.get(F);ve.bindFramebuffer(O.READ_FRAMEBUFFER,P),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Yn=0;Yn<Se;Yn++)Ki?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,et.__webglTexture,X,Je+Yn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,et.__webglTexture,X),Ds?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,xe,Et+Yn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,xe),X!==0?O.blitFramebuffer(Pe,We,Pe+Ae,We+me,Ce,Ke,Ce+Ae,Ke+me,O.COLOR_BUFFER_BIT,O.NEAREST):Ds?O.copyTexSubImage3D(Re,xe,Ce,Ke,Et+Yn,Pe,We,Ae,me):O.copyTexSubImage2D(Re,xe,Ce,Ke,Pe,We,Ae,me);ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ds?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Re,xe,Ce,Ke,Et,Ae,me,Se,ct,Yt,ut.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,xe,Ce,Ke,Et,Ae,me,Se,ct,ut.data):O.texSubImage3D(Re,xe,Ce,Ke,Et,Ae,me,Se,ct,Yt,ut):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Ce,Ke,Ae,me,ct,Yt,ut.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Ce,Ke,ut.width,ut.height,ct,ut.data):O.texSubImage2D(O.TEXTURE_2D,xe,Ce,Ke,Ae,me,ct,Yt,ut);ve.pixelStorei(O.UNPACK_ROW_LENGTH,nn),ve.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt),ve.pixelStorei(O.UNPACK_SKIP_PIXELS,Ls),ve.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),ve.pixelStorei(O.UNPACK_SKIP_IMAGES,Qo),xe===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Re),ve.unbindTexture()},this.initRenderTarget=function(M){Be.get(M).__webglFramebuffer===void 0&&He.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){Y=0,z=0,se=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};c(Lf,"WebGLRenderer");var cu=Lf;function G0(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Pt;l.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let x in f.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;r[x]===void 0&&(r[x]=[]),r[x].push(f.attributes[x]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let x in f.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[x].length!==i[0].morphAttributes[x].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+x+'" morph attribute.'),null;a[x]===void 0&&(a[x]=[]),a[x].push(f.morphAttributes[x]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let x;if(t)x=f.index.count;else if(f.attributes.position!==void 0)x=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,x,h),u+=x}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let x=0;x<p.count;++x)f.push(p.getX(x)+h);h+=i[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=k0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][d]);let x=k0(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}c(G0,"mergeGeometries");function k0(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new bt(a,t,n),l=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=l/t;for(let d=0,p=h.count;d<p;d++)for(let x=0;x<t;x++){let b=h.getComponent(d,x);o.setComponent(d+f,x,b)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}c(k0,"mergeAttributes");var V0="#c79a72",pS="#5a4a3a";var Qt="#7a5532",Uf="#5f6266",H0="#8a8f96",ni="#5d6447",Df="#e8e0cc",q0="#6e4b2f",Ys="#8a8580",W0="#5b3e27",qr="#7d858c",mS=new G(0,1,0),be=new Gn(1,1,1),Gt=new Kn(.5,.5,1,10),Zs=new Qn(.5,1,10),Yr=new hs(.5,10,8),Of=class Of{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let s=Math.cos(n),r=Math.sin(n);return e.parts.forEach(a=>{let[o,l,u]=a.at;this.parts.push({...a,at:[t[0]+o*s+u*r,t[1]+l,t[2]-o*r+u*s],yaw:(a.yaw??0)+n})}),this}};c(Of,"Parts");var Vt=Of,gS=c((i,e,t)=>{switch(i){case"ancient":t.add({shape:Yr,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:Zs,colour:Uf,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:be,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:Gt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:Yr,colour:ni,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),xS=c((i,e,t,n)=>{switch(i){case"club":n.add({shape:Gt,colour:Qt,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:Gt,colour:Qt,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:Zs,colour:Uf,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:Gt,colour:Qt,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:Zs,colour:H0,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:be,colour:H0,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:be,colour:Qt,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:Gt,colour:Qt,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:be,colour:i==="rifle"?"#3a3a3a":Qt,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:be,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:be,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:Gt,colour:Qt,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:Gt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),_S={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},Ff=c((i,e,t,{legs:n=!0,dress:s}={})=>{let r=new Vt,a=s===void 0?void 0:_S[s],o=a?.coat??(i==="modern"?ni:t[0]),l=a?.legs??(i==="ancient"?V0:i==="modern"?ni:pS);return n&&(r.add({shape:be,colour:l,at:[-.012,.04,0],size:[.018,.08,.02]}),r.add({shape:be,colour:l,at:[.012,.04,0],size:[.018,.08,.02]})),r.add({shape:be,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),r.add({shape:be,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),r.add({shape:be,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),r.add({shape:be,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),r.add({shape:Yr,colour:V0,at:[0,.16,0],size:[.034,.038,.034]}),s==="snow"?r.add({shape:Yr,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):s==="irregular"?r.add({shape:Yr,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):gS(i,t,r),s==="parachute"&&r.add({shape:be,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),xS(e,i,t,r),r},"person"),X0=c(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),Nf=c((i=q0)=>new Vt().add({shape:be,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:be,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:be,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:be,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:be,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),vS=c((i,e,t)=>new Vt().addAll(Nf(),[0,0,0]).add({shape:be,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(Ff(i,e,t,{legs:!1}),[0,.04,0]),"rider"),yS=c(i=>new Vt().add({shape:be,colour:Ys,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:be,colour:Ys,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:Gt,colour:Ys,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:be,colour:Ys,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:be,colour:Ys,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:be,colour:Ys,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:be,colour:Ys,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:be,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:be,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),jt=c((i,e=.05)=>({shape:Gt,colour:Qt,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),bS=c((i,e,t)=>{if(e==="chariot")return new Vt().addAll(Nf(),[0,0,.09]).add({shape:be,colour:Qt,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:be,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(jt([-.042,.035,-.045],.065)).add(jt([.042,.035,-.045],.065)).addAll(Ff(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Vt().addAll(Nf(t==="ancient"?"#8a7a64":q0),[0,0,.1]).add({shape:be,colour:Qt,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:be,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(jt([-.042,.03,-.03])).add(jt([.042,.03,-.03])).add(jt([-.042,.03,-.09])).add(jt([.042,.03,-.09]));return e==="wagon"?n.add({shape:Gt,colour:Df,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:be,colour:Df,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:be,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:be,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),MS=c((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Vt().add({shape:be,colour:Qt,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:be,colour:Qt,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:be,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(jt([-.045,.03,.04],.045)).add(jt([.045,.03,.04],.045)).add(jt([-.045,.03,-.04],.045)).add(jt([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,s=i==="renaissance"?"#3d3a36":i==="modern"?ni:Uf;return new Vt().add({shape:Gt,colour:s,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:be,colour:i==="modern"?ni:Qt,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:be,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(jt([-.04,.035,0],.07)).add(jt([.04,.035,0],.07))},"siege"),SS=c((i,e,t)=>{if(i==="industrial")return new Vt().add({shape:be,colour:qr,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:be,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(jt([-.045,.025,.06],.045)).add(jt([.045,.025,.06],.045)).add(jt([-.045,.025,-.06],.045)).add(jt([.045,.025,-.06],.045));let n=new Vt().add({shape:be,colour:ni,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:be,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:be,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:be,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:be,colour:ni,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:Gt,colour:ni,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:be,colour:ni,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),wS=c((i,e)=>{let t=i.large?1.25:1,n=.3*t,s=.07*t,r=new Vt;switch(i.hull){case"oars":case"sail":{r.add({shape:be,colour:W0,at:[0,.03,0],size:[s,.045,n*.8]}).add({shape:Zs,colour:W0,at:[0,.03,n*.45],size:[s,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:be,colour:e[0],at:[0,.056,0],size:[s+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let l=(o-(a-1)/2)*.09*t;r.add({shape:Gt,colour:Qt,at:[0,.14,l],size:[.008,.2,.008]}).add({shape:be,colour:o===0?e[1]:Df,at:[0,.16,l],size:[s*1.3,.09,.005]})}return(i.guns??0)>0&&r.add({shape:be,colour:"#1f1f1f",at:[0,.036,0],size:[s+.006,.009,n*.66]}),i.hull==="oars"&&r.add({shape:be,colour:Qt,at:[-s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:be,colour:Qt,at:[s*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),r}case"submarine":return r.add({shape:Gt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:be,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:be,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return r.add({shape:be,colour:qr,at:[0,.035,0],size:[s*1.1,.05,n*1.15]}).add({shape:be,colour:"#55595e",at:[0,.062,0],size:[s*1.5,.008,n*1.2]}).add({shape:be,colour:qr,at:[s*.55,.09,.02],size:[.02,.05,.06]}).add({shape:be,colour:e[0],at:[s*.55,.12,.02],size:[.022,.008,.062]});default:return r.add({shape:be,colour:i.era==="industrial"?"#4a4a48":qr,at:[0,.03,0],size:[s,.045,n*.85]}).add({shape:Zs,colour:i.era==="industrial"?"#4a4a48":qr,at:[0,.03,n*.47],size:[s,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:be,colour:qr,at:[0,.075,-.02],size:[s*.6,.05,n*.3]}).add({shape:Gt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:be,colour:e[1],at:[0,.056,0],size:[s+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;r.add({shape:be,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:Gt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>r.add({shape:be,colour:"#4a5056",at:[a*s*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),r}},"ship"),ES=c((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Vt().add({shape:Gt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Zs,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:be,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:be,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:be,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:be,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),TS=c(i=>new Vt().add({shape:Yr,colour:ni,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:be,colour:ni,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:be,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:be,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:be,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),AS=c((i,e)=>{let t=e?1.4:1;return new Vt().add({shape:Gt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:Zs,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:be,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:be,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),CS=c((i,e)=>{switch(i.shape){case"foot":{let t=new Vt;return X0(i.squad).forEach(([n,s],r)=>t.addAll(Ff(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,s],r*.3-.3)),t}case"mounted":{let t=new Vt;return X0(i.squad).forEach(([n,s])=>t.addAll(vS(i.era,i.gear??"none",e),[n*1.4,0,s])),t}case"elephant":return yS(e);case"cart":return bS(e,i.cart??"wagon",i.era);case"siege":return MS(i.era,e,i.large===!0);case"vehicle":return SS(i.era,e,i.large===!0);case"ship":return wS(i,e);case"aircraft":return ES(i,e);case"helicopter":return TS(e);default:return AS(e,i.large===!0)}},"figureParts"),RS=c(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new ot().compose(new G(...i),new an().setFromAxisAngle(mS,n).multiply(new an().setFromEuler(new bn(...t))),new G(...e)),"partMatrix"),Y0=c((i,e)=>{let t=CS(i,e).parts.map(s=>{let{shape:r,colour:a}=s,o=r.clone(),l=new De(a),u=o.getAttribute("position").count,h=new Float32Array(u*3);for(let f=0;f<u;f++)h.set([l.r,l.g,l.b],f*3);return o.applyMatrix4(RS(s)),o.setAttribute("color",new bt(h,3)),o}),n=G0(t)??new Pt;return t.forEach(s=>s.dispose()),n.computeBoundingBox(),n.computeBoundingSphere(),n},"figureGeometry");var Xt=c((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),co=c((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),En=c((i,e,t=!1,n=0,s=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:s}),"ship"),uo=c((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),Bf=c((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),Z0={Warrior:Xt("ancient","club"),Spearman:Xt("ancient","spear"),Swordman:Xt("ancient","sword"),Archer:Xt("ancient","bow"),Horseman:co("ancient","spear"),Chariot:Bf("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:En("ancient","oars"),Settlers:Bf("ancient","wagon"),Diplomat:Xt("ancient","case",1),Caravan:Bf("ancient","goods"),Explorer:Xt("ancient","pack",1),Pikeman:Xt("medieval","pike"),Knight:co("medieval","lance"),Crusader:co("medieval","sword"),Fanatic:Xt("medieval","sword"),Sail:En("medieval","sail"),Musketman:Xt("renaissance","musket"),Dragoon:co("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:En("renaissance","sail",!0,1),Galleon:En("renaissance","sail",!0),Rifleman:Xt("industrial","rifle"),AlpineTrooper:{...Xt("industrial","rifle"),dress:"snow"},Partisan:{...Xt("industrial","rifle"),dress:"irregular"},Cavalry:co("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Xt("industrial","none",2),Ironclad:En("industrial","steam",!1,1),Transport:En("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Xt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Xt("modern","rifle"),Paratrooper:{...Xt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:En("modern","steam",!1,1),Cruiser:En("modern","steam",!0,2),MissileCruiser:En("modern","steam",!0,1,!0),Battleship:En("modern","steam",!0,3),Submarine:En("modern","submarine"),Carrier:En("modern","carrier",!0),Fighter:uo("modern"),StealthFighter:uo("modern",!1,!0),Bomber:uo("modern",!0),StealthBomber:uo("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},$0=c((i,e=[])=>(Object.prototype.hasOwnProperty.call(Z0,i)?Z0[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?En("industrial","steam"):e.includes("Air")?uo("modern"):Xt("ancient","spear")),"unitLook");var J0=1.5,eg=.03,tg="#b5ab98",PS="#8d8577",ng="#fff4b0",IS=.04,fu=.004,zf=.018,K0=.01,Q0=.022,j0=.03,ig=.03,mu=.002,LS="#4caf50",DS="#e0b030",NS="#d04030",$s,Js,Ks,Qs,Gi,kf=class kf{constructor(){ne(this,$s,new Map);ne(this,Js,new Map);ne(this,Ks,new Map);ne(this,Qs,new Map);ne(this,Gi,null);this.figureMaterial=new Oi({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={stand:new Kn(.19,.2,eg,28),bank:new ks(.22,.014,4,32),ring:new ks(.23,.018,8,36),building:new Gn(1,1,1),roof:new Qn(.75,.5,4),wall:new ks(.36,.025,6,24)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,s=v(this,$s).get(n);return s===void 0&&(s=new Oi({color:new De(e),roughness:.75,metalness:.05,...t?{emissive:new De(e),emissiveIntensity:.6}:{}}),v(this,$s).set(n,s)),s}figure(e,t){let n=JSON.stringify([e,t]),s=v(this,Ks).get(n);return s===void 0&&(s=Y0(e,t),v(this,Ks).set(n,s)),s}plain(e){let t=v(this,Qs).get(e);return t===void 0&&(t=new ls({color:new De(e),sizeAttenuation:!1,depthTest:!1}),v(this,Qs).set(e,t)),t}pointer(){if(v(this,Gi)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=ng,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Br(e);n.colorSpace=Bt,q(this,Gi,new ls({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return v(this,Gi)}label(e,t,n){let s=`${e}\0${t}\0${n}`,r=v(this,Js).get(s);if(r===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),l="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=l,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=l,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Br(a);h.colorSpace=Bt,r=new ls({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),v(this,Js).set(s,r)}return r}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),v(this,Ks).forEach(e=>e.dispose()),this.figureMaterial.dispose(),v(this,Qs).forEach(e=>e.dispose()),v(this,Gi)?.map?.dispose(),v(this,Gi)?.dispose(),v(this,Qs).clear(),q(this,Gi,null),v(this,$s).forEach(e=>e.dispose()),v(this,Js).forEach(e=>{e.map?.dispose(),e.dispose()}),v(this,$s).clear(),v(this,Js).clear(),v(this,Ks).clear()}};$s=new WeakMap,Js=new WeakMap,Ks=new WeakMap,Qs=new WeakMap,Gi=new WeakMap,c(kf,"MarkerKit");var xu=kf,sg=c(i=>{let{r:e,g:t,b:n}=new De(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),gs=c((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),pu=c((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),US=c(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),FS=3,OS=4,ho=c((i,e,t,n,s=FS)=>{let r=new za(i);return r.scale.set(e,t,1),r.center.set(.5,-n/t),r.renderOrder=s,r.frustumCulled=!1,r},"badge"),rg=c((i,e,t)=>{let n=i.map?.image,s=n&&n.height>0&&n.width>0?n.width/n.height:1;return ho(i,e*s,e,t)},"label"),gu=[0,.36,0],BS=c((i,e)=>{let t=new dn,{building:n,roof:s,wall:r}=i.geometries,a=i.material(tg),o=i.material(e.colours[0]),l=Math.min(12,2+Math.ceil(e.size/2));for(let u=0;u<l;u++){let h=u/l*Math.PI*2+pu(e.name,1)*6,f=u===0?0:.12+pu(e.name,u+2)*.18,d=.07+pu(e.name,u+20)*.05,p=(u===0?.13:.05)+pu(e.name,u+40)*.05,x=Math.cos(h)*f,b=Math.sin(h)*f,_=new dt(n,a),g=new dt(s,o);_.scale.set(d,p,d),_.position.set(x,p/2,b),g.scale.set(d,d*.8,d),g.position.set(x,p+d*.2,b),g.rotation.y=Math.PI/4,t.add(_,g)}if(e.walled){let u=new dt(r,i.material(PS));u.rotation.x=Math.PI/2,u.position.y=.02,u.scale.set(1,1,2.5),t.add(u)}return t.add(gs(rg(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],sg(e.colours[0])),ig,0),...gu)),t},"drawCity"),zS=c((i,e,t=null)=>{let n=new dn,{stand:s,bank:r,ring:a}=i.geometries,o=$0(e.type,e.kinds),l=o.shape==="ship",u=l?0:eg,h=i.figure(o,e.colours),f=u+(h.boundingBox?.max.y??.2)*J0,d=t?.at??[0,f+IS,0],p=e.health!==null,x=(t?.over??0)+(p?fu+mu:0),b=x+K0+mu,_=US(e),g=b+(_===""?0:Q0+mu);l||n.add(gs(new dt(s,i.material(e.colours[1])),0,u/2,0));let w=new dt(h,i.figureMaterial);if(w.scale.setScalar(J0),w.rotation.y=e.facing,n.add(gs(w,0,u,0)),e.fortified){let C=new dt(r,i.material(tg));C.rotation.x=Math.PI/2,C.scale.set(1,1,2.5),C.position.y=u+.015,n.add(C)}if(e.health!==null){let C=Math.max(0,Math.min(1,e.health));if(n.add(gs(ho(i.plain("#202020"),zf,fu,t?.over??0),...d)),C>0){let T=ho(i.plain(C>.5?LS:C>.25?DS:NS),zf*C,fu*.6,(t?.over??0)+fu*.2);T.center.x=1/(2*C),n.add(gs(T,...d))}}if(n.add(gs(ho(i.plain(e.colours[0]),zf,K0,x),...d)),_!==""&&n.add(gs(rg(i.label(_,e.colours[0],sg(e.colours[0])),Q0,b),...d)),e.active){let C=new dt(a,i.material(ng,!0));C.rotation.x=Math.PI/2,C.position.y=.01,n.add(C,gs(ho(i.pointer(),j0,j0,g,OS),...d))}return n},"drawUnit"),ag=c((i,e)=>{let t=new dn;if(e.city!==null&&t.add(BS(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,s=zS(i,e.unit,e.city===null?null:{at:[gu[0],gu[1],gu[2]-n],over:ig+mu});s.position.z=n,t.add(s)}return t},"drawMarker");var xs=c(i=>i*Math.PI/180,"degrees"),kS=xs(25),GS=xs(80),VS=5,HS=90,WS=1.12,fo=xs(40),og=xs(45),XS={above:{yaw:0,pitch:xs(80)},classic:{yaw:0,pitch:xs(55)},isometric:{yaw:xs(45),pitch:xs(30)}};var lg=c(i=>({focus:i,...XS.classic,distance:24}),"defaultOrbit"),Gf=c((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),cg=c(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),js=c(i=>({...i,yaw:cg(i.yaw),pitch:Gf(i.pitch,kS,GS),distance:Gf(i.distance,VS,HS)}),"clampOrbit"),$r=c((i,e)=>js({...i,distance:i.distance/WS**e}),"zoomed"),_u=c(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),s=Math.sin(e),r=Math.cos(e);return{forward:[t*r,-s,-n*r],right:[n,0,t],up:[t*s,r,-n*s]}},"basis"),vu=c((i,e)=>{let{forward:t}=_u(i),[n,s]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,s-t[2]*i.distance]},"eye"),Vf=c((i,e,[t,n,s],r)=>{let{forward:a,right:o,up:l}=_u(i),u=vu(i,e),h=[t-u[0],n-u[1],s-u[2]],f=c(x=>(h[0]??0)*x[0]+(h[1]??0)*x[1]+(h[2]??0)*x[2],"dot"),d=f(a),p=Math.tan(fo/2);return d<=1e-6?null:[f(o)/(d*p*r),f(l)/(d*p)]},"toScreen"),Hf=c((i,e,[t,n],s)=>{let{forward:r,right:a,up:o}=_u(i),l=Math.tan(fo/2);return{from:vu(i,e),direction:[0,1,2].map(u=>(r[u]??0)+t*l*s*(a[u]??0)+n*l*(o[u]??0))}},"rayThrough"),Zr=c((i,e,t,n,s=e)=>{let{from:r,direction:a}=Hf(i,e,t,n);if(a[1]>-1e-6)return null;let o=(s-r[1])/a[1];return o<=0?null:[r[0]+a[0]*o,r[2]+a[2]*o]},"groundAt"),ug=c((i,e,t,n,s)=>{let r=Zr(i,e,t,s),a=Zr(i,e,n,s);if(r!==null&&a!==null)return{...i,focus:[i.focus[0]+r[0]-a[0],i.focus[1]+r[1]-a[1]]};let o=(t[0]-n[0])*s,l=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(fo/2),{right:h}=_u(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+l*(f[0]??0))*u,i.focus[1]+(o*h[2]+l*(f[1]??0))*u]}},"panned"),hg=c((i,e,t)=>{let n=c((a,o)=>(a%o+o)%o,"wrap"),[s,r]=i.focus;return{...i,yaw:cg(i.yaw),focus:[n(s,e.u),e.v===null?Gf(r,0,t):n(r,e.v)]}},"settled"),dg=c((i,e,t,n)=>{let s=c((o,l)=>l===null?o:o-l*Math.round(o/l),"short"),r=Math.PI*2,a=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*a,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*a],yaw:i.yaw+s(e.yaw-i.yaw,r)*a,pitch:i.pitch+(e.pitch-i.pitch)*a,distance:i.distance+(e.distance-i.distance)*a}},"between"),yu=c(i=>({near:i*1.2,far:i*3.5}),"sightFor");var qS=new De("#3f8a8c"),YS=new De("#173a52"),ZS=new De("#e8eeee"),fg=`
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
`,$S=`
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
`,_s,Vn,Tn,Xf=class Xf{constructor(e,t){ne(this,_s);ne(this,Vn);ne(this,Tn);q(this,_s,e),q(this,Vn,new Uint16Array(e.columns*e.rows*2));for(let s=0;s<v(this,Vn).length;s+=2)v(this,Vn)[s]=ui.toHalfFloat(0),v(this,Vn)[s+1]=ui.toHalfFloat(1);q(this,Tn,new Or(v(this,Vn),e.columns,e.rows,fi,wn)),v(this,Tn).wrapS=zs,v(this,Tn).wrapT=e.wrapsV?zs:zn,v(this,Tn).magFilter=kt,v(this,Tn).minFilter=kt,v(this,Tn).needsUpdate=!0;let n=new Mn({uniforms:so.merge([ye.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:qS.clone()},deep:{value:YS.clone()},foam:{value:ZS.clone()},sky:{value:t.clone()},sunDirection:{value:new G(.5,.7,.4).normalize()},sunColour:{value:new De("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:fg,fragmentShader:$S,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=v(this,Tn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new dt(new us(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:s,spacingV:r}=v(this,_s),a=Math.round(e.u/s),o=Math.round(e.v/r),l=e.positions.length/3;for(let u=0;u<l;u++){let h=a+Math.round((e.positions[u*3]??0)/s),f=o+Math.round((e.positions[u*3+2]??0)/r);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;v(this,Vn)[d]=ui.toHalfFloat(e.positions[u*3+1]??0),v(this,Vn)[d+1]=ui.toHalfFloat(e.unseen[u]??0)}}v(this,Tn).needsUpdate=!0}height(e,t){return ui.fromHalfFloat(v(this,Vn)[(t*v(this,_s).columns+e)*2]??0)}unseen(e,t){return ui.fromHalfFloat(v(this,Vn)[(t*v(this,_s).columns+e)*2+1]??0)>.5}texture(){return v(this,Tn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=v(this,_s).wrapsV&&e}follow(e,t,n,s){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(s).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),v(this,Tn).dispose()}};_s=new WeakMap,Vn=new WeakMap,Tn=new WeakMap,c(Xf,"Water");var Wf=Xf,pg=Wf,JS=`
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
`,KS=.18,po,qf=class qf{constructor(e,t){ne(this,po);q(this,po,t.wrapsV);let n=new Mn({uniforms:so.merge([ye.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:fg,fragmentShader:JS,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new dt(new us(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=v(this,po)&&e}follow(e,t,n){this.mesh.position.set(e,KS,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};po=new WeakMap,c(qf,"Clouds");var bu=qf;var Yf=10466244,QS=14082796,jS=5984576,ew=16773336,mg=c((i,e,t)=>{let n=c((s,r)=>{if(r===null)return[0];let a=[];for(let o=Math.floor((s-e)/r);o*r<=s+e;o++)a.push(o*r);return a},"along");return n(i[0],t.u).flatMap(s=>n(i[1],t.v).map(r=>[s,r]))},"copiesNear"),tw=c(i=>[new hn(new G(0,0,1),0),new hn(new G(0,0,-1),i)],"polesAt"),nw=c((i,[e,t],n,s,r)=>i.flatMap(([a,o])=>[[a,o],...r&&s!==null&&t>n?[[a,o-s]]:[],...r&&s!==null&&e<0?[[a,o+s]]:[]]),"overlayCopies"),gg=2048,xg=Math.hypot(30,40,20),_g=c((i,{period:e,ground:t})=>{let n=new cu({antialias:!0,canvas:i}),s=new Ua,r=new rn(fo*180/Math.PI,1,.1,400),a=new dn,o=new Oi({roughness:.92,vertexColors:!0}),l=new Za(ew,2.6),u=new Map,h=new Map,f=new Oi({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),d=t.rows*t.spacingV,p=tw(d),x=new Map,b=new dn,_=new xu,g=new pg(t,new De(Yf)),w=new bu(g.texture(),t),C=new Na(Yf,30,110),T=[[0,0]],R="0,0",E=[[0,0]],m="0,0",S=!1;n.outputColorSpace=Bt,n.localClippingEnabled=!0,n.toneMapping=Ja,n.shadowMap.enabled=!0,n.shadowMap.type=_c,s.background=new De(Yf),s.fog=C,s.add(new Xa(QS,jS,.9)),s.add(a),s.add(b),s.add(g.mesh),s.add(w.mesh),l.position.set(30,40,20),l.castShadow=!0,l.shadow.mapSize.set(gg,gg),l.shadow.bias=-4e-4,l.shadow.normalBias=.02,s.add(l),s.add(l.target);let N=c((D,B,P=T)=>P.map(([k,Y])=>{let z=D.make();return z.position.set(D.at[0]+k,D.at[1],D.at[2]+Y),B.add(z),z}),"copiesOf"),I=c(D=>N(D,a,nw(T,D.span,d,e.v,S)),"overlayCopiesOf");return{render:c(()=>n.render(s,r),"render"),resize:c((D,B,P)=>{n.setPixelRatio(P),n.setSize(D,B,!1),r.aspect=B>0?D/B:1,r.updateProjectionMatrix()},"resize"),setChunk:c((D,B,P)=>{let k=`${D},${B}`,Y=new Pt;Y.setAttribute("position",new bt(P.positions,3)),Y.setAttribute("normal",new bt(P.normals,3)),Y.setAttribute("color",new bt(P.colours,3)),Y.setIndex(new bt(P.indices,1)),Y.computeBoundingSphere();let z=u.get(k);z!==void 0&&(z.drawn.forEach(Z=>a.remove(Z)),z.geometry.dispose());let se={geometry:Y,at:[P.u,0,P.v],make:c(()=>{let Z=new dt(Y,o);return Z.castShadow=!0,Z.receiveShadow=!0,Z},"make"),drawn:[]};se.drawn=N(se,a),u.set(k,se),g.setChunk(P)},"setChunk"),setOverlay:c((D,B,P)=>{let k=`${D},${B}`,Y=h.get(k);if(Y!==void 0&&(Y.drawn.forEach(ee=>a.remove(ee)),Y.geometry.dispose(),h.delete(k)),P===null)return;let z=new Pt;z.setAttribute("position",new bt(P.positions,3)),z.setAttribute("normal",new bt(P.normals,3)),z.setAttribute("color",new bt(P.colours,3)),z.computeBoundingSphere(),z.computeBoundingBox();let se=z.boundingBox,Z={geometry:z,span:[P.v+(se?.min.z??0),P.v+(se?.max.z??0)],at:[P.u,0,P.v],make:c(()=>{let ee=new dt(z,f);return ee.castShadow=!0,ee.receiveShadow=!0,ee},"make"),drawn:[]};Z.drawn=I(Z),h.set(k,Z)},"setOverlay"),setMarker:c((D,B,P)=>{if(x.get(D)?.drawn.forEach(se=>b.remove(se)),x.delete(D),P===null)return;let Y=ag(_,P);Y.traverse(se=>{se.castShadow=se instanceof dt});let z={at:B,make:c(()=>Y.clone(),"make"),drawn:[]};z.drawn=N(z,b,E),x.set(D,z)},"setMarker"),view:c((D,B,P=e)=>{let[k,Y]=D.focus,[z,se,Z]=vu(D,B),{near:ee,far:re}=yu(D.distance);r.position.set(z,se,Z),r.lookAt(k,B,Y),r.far=re*1.2,r.near=Math.max(.1,D.distance*.02),r.updateProjectionMatrix(),C.near=ee,C.far=re;let Ee=D.distance*2.2,Ne=l.shadow.camera;l.position.set(k+30,B+40,Y+20),l.target.position.set(k,B,Y),Ne.left=-Ee,Ne.right=Ee,Ne.top=Ee,Ne.bottom=-Ee,Ne.near=Math.max(.5,xg-Ee*1.6),Ne.far=xg+Ee*1.6,Ne.updateProjectionMatrix(),g.follow(k,Y,re*2.2,l.position.clone().sub(l.target.position)),w.follow(k,Y,re*2.2),g.pastThePoles(P.v!==null),w.pastThePoles(P.v!==null),f.clippingPlanes=P.v===null?p:null,S=P.v===null;let K=mg(D.focus,re,P),_e=`${K.join(";")}${S?" stopped":""}`,Te=mg(D.focus,Math.min(re,D.distance*2.2),P),Ie=Te.join(";");_e!==R&&(T=K,R=_e,u.forEach(ce=>{ce.drawn.forEach(Oe=>a.remove(Oe)),ce.drawn=N(ce,a)}),h.forEach(ce=>{ce.drawn.forEach(Oe=>a.remove(Oe)),ce.drawn=I(ce)})),Ie!==m&&(E=Te,m=Ie,x.forEach(ce=>{ce.drawn.forEach(Oe=>b.remove(Oe)),ce.drawn=N(ce,b,E)}))},"view"),stats:c(()=>({drawCalls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries}),"stats"),dispose:c(()=>{u.forEach(({geometry:D})=>D.dispose()),u.clear(),h.forEach(({geometry:D})=>D.dispose()),h.clear(),f.dispose(),x.clear(),_.dispose(),g.dispose(),w.dispose(),o.dispose(),n.dispose()},"dispose")}},"createStage");var Vi=1/Math.sqrt(3),vg=1.5*Vi,iw=c((i,e)=>{let t=-i-e,n=Math.round(i),s=Math.round(e),r=Math.round(t),a=Math.abs(n-i),o=Math.abs(s-e),l=Math.abs(r-t);return a>o&&a>l?n=-s-r:o>l&&(s=-n-r),[n,s]},"roundAxial"),sw=c(({height:i,width:e,wrapsY:t})=>{let n=c((s,r)=>[s+.5+(r&1)*.5,Vi+r*vg],"centre");return{topologyId:"hex-odd-r",centre:n,outline:c((s,r)=>{let[a,o]=n(s,r);return[[a,o-Vi],[a+.5,o-Vi/2],[a+.5,o+Vi/2],[a,o+Vi],[a-.5,o+Vi/2],[a-.5,o-Vi/2]]},"outline"),tileAt:c((s,r)=>{let a=s-.5,o=r-Vi,[l,u]=iw(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[l+(u-(u&1))/2,u]},"tileAt"),period:c(()=>({u:e,v:t?i*vg:null}),"period")}},"hexOddRLayout"),yg=sw;var rw=c(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:c((n,s)=>[n+.5,s+.5],"centre"),outline:c((n,s)=>[[n,s],[n+1,s],[n+1,s+1],[n,s+1]],"outline"),tileAt:c((n,s)=>[Math.floor(n),Math.floor(s)],"tileAt"),period:c(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),bg=rw;var gi=Math.SQRT2/2,aw=c(({height:i,width:e,wrapsY:t})=>{let n=c((s,r)=>[(2*s+(r&1)+1)*gi,(r+1)*gi],"centre");return{topologyId:"staggered-iso",centre:n,outline:c((s,r)=>{let[a,o]=n(s,r);return[[a,o-gi],[a+gi,o],[a,o+gi],[a-gi,o]]},"outline"),tileAt:c((s,r)=>{let a=s/gi,o=r/gi,l=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=l+u;return[Math.floor((l-u)/2),h]},"tileAt"),period:c(()=>({u:e*2*gi,v:t?i*gi:null}),"period")}},"staggeredIsoLayout"),Mg=aw;var Sg={square:bg,"staggered-iso":Mg,"hex-odd-r":yg},ow=c(i=>{if(!Object.prototype.hasOwnProperty.call(Sg,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Sg[i.topologyId](i)},"groundLayoutFor"),wg=ow;var Mu=c(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var lw=c((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),Eg=c(i=>i*i*i*(i*(i*6-15)+10),"fade"),vs=c(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),s=e.u/n,r=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||r===null?i:e.v/r,o=c(h=>(h%n+n)%n,"wrapU"),l=c(h=>r===null?h:(h%r+r)%r,"wrapV"),u=c((h,f,d,p)=>{let x=Math.floor(lw(h,f,t)*16)*(Math.PI/8);return Math.cos(x)*d+Math.sin(x)*p},"slope");return(h,f)=>{let d=h/s,p=f/a,x=Math.floor(d),b=Math.floor(p),_=d-x,g=p-b,w=Eg(_),C=Eg(g),T=o(x),R=o(x+1),E=l(b),m=l(b+1),S=u(T,E,_,g)+(u(R,E,_-1,g)-u(T,E,_,g))*w,N=u(T,m,_,g-1)+(u(R,m,_-1,g-1)-u(T,m,_,g-1))*w;return Math.max(-1,Math.min(1,(S+(N-S)*C)*1.4))}},"periodicNoise"),Zf=c(i=>{let e=i.map((n,s)=>.5**s),t=e.reduce((n,s)=>n+s,0);return(n,s)=>i.reduce((r,a,o)=>r+a(n,s)*(e[o]??0),0)/t},"fractalNoise");var xi={shore:-.03,deep:-.15,reach:3},Su={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24"},Ag={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746"},Tg={Ocean:{relief:{base:xi.deep,roughness:.003,shape:"rolling"},colour:"#33505f"},Grassland:Ag,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a"}},wu=c(i=>i==="Unknown"?Su:(Object.prototype.hasOwnProperty.call(Tg,i)?Tg[i]:void 0)??Ag,"terrainEntry");var Cg=.65,$f=c(i=>{let e=c(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),er=.22,Jf=c((i,e,t,n)=>{let s=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296},"chance"),cw=c((i,e,t)=>({u:(Jf(i,e,t,1)*2-1)*er,v:(Jf(i,e,t,2)*2-1)*er,scale:.75+Jf(i,e,t,3)*.5}),"peakOf"),uw=c(({layout:i,seed:e=1,source:t})=>{let{width:n,height:s,wrapsY:r}=t,a=i.period(),o=Zf([vs({cell:.7,period:a,seed:e}),vs({cell:.35,period:a,seed:e+1}),vs({cell:.17,period:a,seed:e+2})]),l=Zf([vs({cell:.45,period:a,seed:e+3}),vs({cell:.22,period:a,seed:e+4})]),u=c((E,m)=>1-2*Math.abs(l(E,m)),"ridged"),h=vs({cell:.8,period:a,seed:e+5}),f=vs({cell:.8,period:a,seed:e+6}),d={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},p=[],x=[],b=c((E,m)=>{let S=(E%n+n)%n;return!r&&(m<0||m>=s)?null:(m%s+s)%s*n+S},"index"),_=c(E=>{let m=new Array(n*s).fill(1/0),S=[];E.forEach((N,I)=>{N&&(m[I]=0,S.push([I%n,Math.floor(I/n)]))});for(let[N,I]of S){let U=m[I*n+N]??1/0;U>=xi.reach||t.neighbours(N,I).forEach(([D,B])=>{let P=B*n+D;(m[P]??1/0)>U+1&&(m[P]=U+1,S.push([D,B]))})}return m},"distancesFromLand"),g=c((E,m)=>{let S=t.terrainAt(E,m);return`${S}${S!=="Unknown"&&t.waterAt(E,m)?" water":""}`},"readAs"),w=c(E=>{if(E!==void 0&&x.length>0&&E.every(([B,P])=>{let k=b(B,P);return k===null||x[k]===g(B,P)}))return[];let m=[],S=[],N=[];for(let B=0;B<s;B++)for(let P=0;P<n;P++){let k=t.terrainAt(P,B);m.push(k),S.push(k!=="Unknown"&&t.waterAt(P,B)),N.push(wu(k))}let I=_(m.map((B,P)=>B!=="Unknown"&&!S[P])),U=m.map((B,P)=>`${B}${S[P]?" water":""}`),D=[];return U.forEach((B,P)=>{x[P]!==B&&D.push([P%n,Math.floor(P/n)])}),x=U,p=N.map((B,P)=>{let k=B===Su,Y=P%n,z=Math.floor(P/n),se=cw(Y,z,e);if(!S[P])return{relief:B.relief,colour:$f(B.colour),unknown:k,peak:se};let Z=Math.min(I[P]??1/0,xi.reach),ee=xi.shore+(xi.deep-xi.shore)*Math.max(0,Z-1)/Math.max(1,xi.reach-1);return{relief:{...B.relief,base:ee},colour:$f(B.colour),unknown:k,peak:se}}),D},"refresh"),C=c(E=>{let[m,S]=i.centre(0,E),N=Math.max(...i.outline(0,E).map(([U,D])=>Math.hypot(U-m,D-S))),I=[];for(let U=-6;U<=6;U++)for(let D=-4;D<=4;D++){let[B,P]=i.centre(D,E+U);Math.hypot(B-m,P-S)<1.2+N+er*Math.SQRT2+1e-9&&I.push([D,U])}return I},"offsetsFor"),T=[C(0),C(1)],R=c((E,m)=>{let[S,N]=i.tileAt(E,m),I=b(S,N),U=I===null?null:p[I]??null;if(U===null||U.unknown)return{height:0,colour:$f(Su.colour),unseen:!0};let D=null,B=null,P=c(K=>K==="rolling"?D??=o(E,m):B??=u(E,m),"noiseHere"),k=0,Y=0,z=0,se=0,Z=0,ee=0,re=0,Ee=E+er*h(E,m),Ne=m+er*f(E,m);return(T[N&1]??[]).forEach(([K,_e])=>{let Te=S+K,Ie=N+_e,ce=b(Te,Ie);if(ce===null)return;let Oe=p[ce];if(Oe===void 0)return;let[pt,Fe]=i.centre(Te,Ie),{relief:$e,colour:tt,peak:qe}=Oe,Mt=Mu(Math.hypot(E-pt,m-Fe)),vt=$e.shape==="peaked"?Mu(Math.hypot(E-pt-qe.u,m-Fe-qe.v)):0,Ct=Mu(Math.hypot(Ee-pt,Ne-Fe))**3;if(Mt>0){let lt=d[$e.shape],xn=lt===null?0:$e.roughness*P(lt);$e.shape==="peaked"?Y+=Mt*($e.base*(1-Cg)+xn*.5):Y+=Mt*($e.base+xn),k+=Mt}if(vt>0){let lt=$e.roughness*P("ridged");z+=vt*vt*($e.base*Cg*qe.scale+lt*.5)}se+=Ct,Z+=Ct*tt[0],ee+=Ct*tt[1],re+=Ct*tt[2]}),{height:(k>0?Y/k:0)+z,colour:se>0?[Z/se,ee/se,re/se]:U.colour,unseen:!1}},"sample");return w(),{sample:R,height:c((E,m)=>R(E,m).height,"height"),refresh:w}},"createRelief"),Rg=uw;var Pg=c((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:s,v:r}=i.period(),a=r??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(s/t)),l=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(s/o*n)),h=Math.max(2,Math.round(a/l*n));return{chunksU:o,chunksV:l,stepsU:u,stepsV:h,spacingU:s/o/u,spacingV:a/l/h}},"chunkGrid"),Ig=c((i,e,t,n)=>{let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=i,l=t*s,u=n*r,h=c((E,m)=>[E*a,m*o],"at"),f=s+3,d=new Float64Array(f*(r+3)),p=(s+1)*(r+1),x=new Float32Array(p*3),b=new Float32Array(p);for(let E=-1;E<=r+1;E++)for(let m=-1;m<=s+1;m++){let S=e.sample(...h(l+m,u+E)),{height:N,colour:I}=S;d[(E+1)*f+(m+1)]=N,m>=0&&m<=s&&E>=0&&E<=r&&(x.set(I,(E*(s+1)+m)*3),b[E*(s+1)+m]=S.unseen?1:0)}let _=c((E,m)=>d[(m+1)*f+(E+1)]??0,"height"),g=new Float32Array(p*3),w=new Float32Array(p*3),[C,T]=h(l,u);for(let E=0;E<=r;E++)for(let m=0;m<=s;m++){let S=E*(s+1)+m,[N,I]=h(l+m,u+E),U=(_(m+1,E)-_(m-1,E))/(2*a),D=(_(m,E+1)-_(m,E-1))/(2*o),B=Math.hypot(U,1,D);g[S*3]=N-C,g[S*3+1]=_(m,E),g[S*3+2]=I-T,w[S*3]=-U/B,w[S*3+1]=1/B,w[S*3+2]=-D/B}let R=new Uint32Array(s*r*6);for(let E=0;E<r;E++)for(let m=0;m<s;m++){let S=E*(s+1)+m,N=S+1,I=S+s+1,U=I+1,D=(E*s+m)*6;R.set([S,I,N,N,I,U],D)}return{u:C,v:T,positions:g,normals:w,colours:x,unseen:b,indices:R}},"buildChunk"),Lg=c((i,e,t,n)=>{let s=i.stepsU*i.spacingU,r=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([l,u])=>{let[h,f]=e.centre(l,u);for(let d=Math.floor((h-n)/s);d<=Math.floor((h+n)/s);d++)for(let p=Math.floor((f-n)/r);p<=Math.floor((f+n)/r);p++){if(!a&&(p<0||p>=i.chunksV))continue;let x=(d%i.chunksU+i.chunksU)%i.chunksU,b=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${x},${b}`)}}),[...o].map(l=>l.split(",").map(Number))},"chunksNear");var An=c((i,e,t,n,s)=>({kind:i,count:e,size:t,colour:n,detail:s}),"plant"),Dg={Forest:{plants:[An("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95]},Jungle:{plants:[An("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),An("palm",2,[.9,1.2],"#3f8a34","#6b5236")]},Swamp:{plants:[An("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),An("deadTree",2,[.8,1.1],"#4a4036","#4a4036")]},Grassland:{plants:[An("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[An("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[An("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[An("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),An("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[An("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[An("rock",2,[.7,1.1],"#a8936a","#a8936a"),An("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},Eu=c(i=>Object.prototype.hasOwnProperty.call(Dg,i)?Dg[i]:null,"growthOf");var hw=["River"],_i=c((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),dw=c((i,e)=>{if(i.city)return null;let t=_i(i,"Road"),n=_i(i,"Railroad"),s=t?e.filter(h=>_i(h.tile,"Road")).map(({offset:h})=>h):[],r=t?e.filter(h=>!!h.tile.city||_i(h.tile,"Railroad")).map(({offset:h})=>h):[],a=c((h,f)=>h[0]===f[0]&&h[1]===f[1],"same"),o=s.length===0&&r.length===0,l={road:t?{joins:s.filter(h=>!n||!r.some(f=>a(f,h))),alone:o&&!n}:null,railroad:t&&n?{joins:r,alone:o}:null,irrigation:_i(i,"Farmland")?"farmland":_i(i,"Irrigation")?"irrigation":null,mine:_i(i,"Mine"),fortress:_i(i,"Fortress"),airbase:_i(i,"Airbase"),pollution:_i(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:h})=>h).filter(h=>!hw.includes(h)).map(h=>[i.terrain._,h]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:Eu(i.terrain?._??"Unknown")!==null};return l.road===null&&l.irrigation===null&&!l.mine&&!l.fortress&&!l.airbase&&!l.pollution&&l.specials.length===0&&!l.hut&&!l.vegetation?null:l},"overlayFor"),Ng=dw;var _t=c((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),Ug={Coal:_t("rocks","#26262a",4),Gold:_t("rocks","#d8b13a",3),Gems:_t("rocks","#59c2d6",4,"#b05ad0"),Iron:_t("rocks","#8a5a44",4),Wheat:_t("crop","#d9b84a",5,"#a88a2c"),Spice:_t("crop","#c0452e",4,"#5d7a2a"),Wine:_t("crop","#6a2c5e",4,"#5d7a2a"),Silk:_t("crop","#e9e2cf",3,"#4f7a34"),Fruit:_t("crop","#e08a2a",4,"#3f7a2a"),Horse:_t("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:_t("animal","#4a3424",3,"#2a1e16"),Game:_t("animal","#a9835a",2,"#5a4430"),"Tundra:Game":_t("animal","#8f7e66",2,"#e8e2d6"),Furs:_t("animal","#b0602a",2,"#f0e8dc"),Ivory:_t("animal","#8a8580",1,"#f2ead8"),Seal:_t("animal","#6e7072",2,"#4a4c4e"),Pheasant:_t("bird","#8a3a22",2,"#3d6a3a"),Fish:_t("fish","#b8c4cc",5),Whales:_t("whale","#3a4048",1),Oil:_t("derrick","#222224",1,"#121214"),Oasis:_t("oasis","#3f7a32",3,"#3f86a8"),Peat:_t("peat","#4a3624",4),Shield:_t("logs","#7a5532",4,"#c9a47a")},fw=_t("cairn","#9a9690",5),Fg=c((i,e)=>{let t=c(n=>Object.prototype.hasOwnProperty.call(Ug,n)?Ug[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??fw},"specialLook");var ip=c(()=>({positions:[],normals:[],colours:[]}),"soup"),Cn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Qf=.06,Og="#8c7a58",Bg="#5f5953",pw="#a9abae",mw="#5e432b",gw="#4f87b0",xw="#7da33f",_w=["#c2b448","#8fae3e"],zg="#9d968a",vw="#4a4c50",tp="#6b4a2e",yw="#7a6a58",bw="#b89a5a",Mw="#c9b48e",kg="#34322a",pn=new Gn(1,1,1),Kr=new Kn(.5,.5,1,8),sp=new Qn(.5,1,8),Sw=new Qn(.5,1,4),Jr=new hs(.5,8,6),mo=new Kn(.5,.5,1,4,1,!0),go=new Qn(.5,1,5,1,!0),Tu=new hs(.5,5,3),jf={mine:[3,.72],hut:[11,.64],special:c(i=>[i+1,.72],"special")},ww=.05,Ew=.22,Gg=72,vi=c((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),Vg=new Map,ep=c(i=>{let e=Vg.get(i);if(e===void 0){let{r:t,g:n,b:s}=new De(i);e=[t,n,s],Vg.set(i,e)}return e},"colourOf"),Hg=new WeakMap,Tw=c(i=>{let e=Hg.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Hg.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),Aw=new ot,Cw=new Ve,Rw=new G,Pw=new an,Iw=new bn,Lw=new G,At,Wg,en,cp=class cp{constructor(e,t){ne(this,At);this.lines=[];this.taken=[];this.soup=e,this.place=t}ground(e,t,n=!1){let s=this.place.heightAt(e,t);return n?Math.max(0,s):s}strip(e,t,n,s,r){let a=ep(s),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let l=Math.max(1,Math.ceil(o/Qf)),u=Math.max(1,Math.ceil(n/Qf)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=c((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<l;d++)for(let p=0;p<u;p++){let[x,b]=f(d/l,(p+1)/u),[_,g]=f((d+1)/l,(p+1)/u),[w,C]=f(d/l,p/u),[T,R]=f((d+1)/l,p/u);H(this,At,en).call(this,x,b,r,a),H(this,At,en).call(this,_,g,r,a),H(this,At,en).call(this,w,C,r,a),H(this,At,en).call(this,_,g,r,a),H(this,At,en).call(this,T,R,r,a),H(this,At,en).call(this,w,C,r,a)}}disc(e,t,n,s,r=12){let a=ep(n),[o,l]=e,u=Math.max(1,Math.ceil(t/Qf)),h=c((f,d)=>{let p=d/r*Math.PI*2,x=f/u*t;return[o+Math.cos(p)*x,l+Math.sin(p)*x]},"at");for(let f=0;f<u;f++)for(let d=0;d<r;d++){let p=h(f+1,d),x=h(f+1,d+1);if(f===0)H(this,At,en).call(this,o,l,s,a),H(this,At,en).call(this,...x,s,a),H(this,At,en).call(this,...p,s,a);else{let b=h(f,d),_=h(f,d+1);H(this,At,en).call(this,...b,s,a),H(this,At,en).call(this,..._,s,a),H(this,At,en).call(this,...p,s,a),H(this,At,en).call(this,..._,s,a),H(this,At,en).call(this,...x,s,a),H(this,At,en).call(this,...p,s,a)}}}solid(e,t,n,s,r=[0,0,0]){let{positions:a,normals:o}=Tw(e),l=Aw.compose(Rw.set(...t),Pw.setFromEuler(Iw.set(...r)),Lw.set(...n)),u=l.elements,h=Cw.getNormalMatrix(l).elements,[f,d,p]=ep(s),x=this.soup;for(let b=0;b<a.length;b+=3){let _=a[b],g=a[b+1],w=a[b+2],C=o[b],T=o[b+1],R=o[b+2],E=h[0]*C+h[3]*T+h[6]*R,m=h[1]*C+h[4]*T+h[7]*R,S=h[2]*C+h[5]*T+h[8]*R,N=Math.hypot(E,m,S)||1;x.positions.push(u[0]*_+u[4]*g+u[8]*w+u[12],u[1]*_+u[5]*g+u[9]*w+u[13],u[2]*_+u[6]*g+u[10]*w+u[14]),x.normals.push(E/N,m/N,S/N),x.colours.push(f,d,p)}}spot(e,t){let n=vi(this.place.seed,e)*Math.PI*2,[s,r]=this.place.centre;return[s+Math.cos(n)*t*this.place.radius,r+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[s,r]=this.place.centre,a=Math.hypot(e-s,t-r)-Ew-n;return this.lines.forEach(([o,l])=>{a=Math.min(a,Ww(e,t,o,l)-ww-n)}),this.taken.forEach(([o,l,u])=>{a=Math.min(a,Math.hypot(e-o,t-l)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let s=vi(this.place.seed,e)*Math.PI*2,[r,a]=this.place.centre,o=[r,a],l=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Gg;h++){let f=s+h/Gg*Math.PI*2,d=[r+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>l&&(o=d,l=p)}return this.taken.push([o[0],o[1],n]),o}};At=new WeakSet,Wg=c(function(e,t){let s=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,r=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(s,1,r);return[-s/a,1/a,-r/a]},"#normal"),en=c(function(e,t,n,s){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...H(this,At,Wg).call(this,e,t)),this.soup.colours.push(...s)},"#point"),c(cp,"Layer");var np=cp,rp=c((i,e)=>{let[t,n]=i.centre,[s,r]=i.toward(e);return[(t+s)/2,(n+r)/2]},"halfway"),ap=c(i=>i.alone||i.joins.length>0,"drawn"),Dw=c((i,e)=>{let{place:t}=i;ap(e)&&(e.joins.forEach(n=>i.strip(t.centre,rp(t,n),.07,Og,Cn.road)),i.disc(t.centre,e.alone?.09:.035,Og,Cn.road))},"road"),Nw=c((i,e)=>{if(!ap(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(s=>rp(t,s))).forEach(s=>{let[r,a]=t.centre,o=Math.hypot(s[0]-r,s[1]-a),l=o===0?[0,0]:[-(s[1]-a)/o*.025,(s[0]-r)/o*.025];i.strip(t.centre,s,.1,Bg,Cn.ballast);for(let u=.1;u<1;u+=.2){let h=[r+(s[0]-r)*u,a+(s[1]-a)*u];i.strip([h[0]+l[0]*1.8,h[1]+l[1]*1.8],[h[0]-l[0]*1.8,h[1]-l[1]*1.8],.014,mw,Cn.ballast+.002)}[1,-1].forEach(u=>i.strip([r+l[0]*u,a+l[1]*u],[s[0]+l[0]*u,s[1]+l[1]*u],.01,pw,Cn.rail))}),i.disc(t.centre,.05,Bg,Cn.ballast)},"railroad"),Uw=c((i,e)=>{let{centre:t,inner:n}=i.place,s=e==="farmland"?6:4,r=n*.9,a=r*2/s;for(let o=0;o<s;o++){let l=t[1]-r+a*(o+.5),u=e==="farmland"?_w[o%2]:xw;if(i.strip([t[0]-r,l],[t[0]+r,l],a*.8,u,Cn.field),o>0){let h=t[1]-r+a*o;i.strip([t[0]-r,h],[t[0]+r,h],.016,gw,Cn.field+.001)}}},"fields"),Fw=c((i,[e,t])=>{let n=i.ground(e,t);i.solid(pn,[e-.02,n+.05,t],[.01,.11,.01],tp,[0,0,-.3]),i.solid(pn,[e+.02,n+.05,t],[.01,.11,.01],tp,[0,0,.3]),i.solid(Kr,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([s,r])=>{let a=e+s,o=t+r;i.solid(sp,[a,i.ground(a,o)+.02,o],[.07,.04,.07],yw)})},"mine"),Ow=c(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,s=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([r,a,o,l])=>{let u=e+r,h=t+a;i.solid(pn,[u,Math.max(s,i.ground(u,h))+.02,h],[o,.05,l],zg)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([r,a])=>{let o=e+r,l=t+a;i.solid(Kr,[o,i.ground(o,l)+.035,l],[.045,.07,.045],zg)})},"fortress"),Bw=c(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[s,r]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,vw,Cn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",Cn.road+.004),i.solid(pn,[s,i.ground(s,r)+.03,r],[.12,.06,.08],"#8a9096")},"airbase"),zw=c(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,kg,Cn.smear,14),i.disc(i.spot(7,.5),e*.25,kg,Cn.smear+.001)},"pollution"),kw=c((i,e,t,n)=>{let s=e.detail??e.colour,r=c((o,l)=>[t[0]+(vi(i.place.seed,n*31+o*2)-.5)*l,t[1]+(vi(i.place.seed,n*31+o*2+1)-.5)*l],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[l,u]=e.count===1?[t[0],t[1]]:r(o,.1),h=i.ground(l,u,a),f=vi(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Jr,[l,h+.012,u],[.05,.035,.045],o%2===1?s:e.colour,[0,f,0]);break;case"crop":i.solid(Kr,[l,h+.02,u],[.008,.04,.008],s),i.solid(Jr,[l,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(pn,[l,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(pn,[l+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],s,[0,f,0]),i.solid(pn,[l,h+.013*d,u],[.03*d,.026*d,.055*d],s,[0,f,0]);break}case"bird":i.solid(Jr,[l,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(pn,[l-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],s,[.4,f,0]);break;case"fish":i.solid(Jr,[l,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(Jr,[l,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(pn,[l-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(pn,[l,h+.008,u],[.08,.016,.08],s),i.solid(Sw,[l,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([l,u],.07,s,Cn.field+.002);{let[d,p]=r(o+5,.1),x=i.ground(d,p);i.solid(Kr,[d,x+.06,p],[.012,.12,.012],tp),i.solid(sp,[d,x+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Kr:pn,[l,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(Jr,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),Gw=c((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+vi(i.place.seed,12)*Math.PI,s=e[0]+Math.cos(n)*.06,r=e[1]+Math.sin(n)*.06,a=i.ground(s,r);i.solid(Kr,[s,a+.02,r],[.05,.04,.05],Mw),i.solid(sp,[s,a+.055,r],[.065,.035,.065],bw)})},"hut"),Vw={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},Hw=c((i,e,t,n,s,r,a)=>{let o=i.ground(n,s),{colour:l,detail:u}=e;switch(t){case"conifer":i.solid(mo,[n,o+.025*r,s],[.016*r,.05*r,.016*r],u),i.solid(go,[n,o+.09*r,s],[.11*r,.12*r,.11*r],l),i.solid(go,[n,o+.16*r,s],[.08*r,.1*r,.08*r],l);break;case"broadleaf":i.solid(mo,[n,o+.04*r,s],[.018*r,.08*r,.018*r],u),i.solid(Tu,[n,o+.12*r,s],[.13*r,.11*r,.13*r],l,[0,a,0]);break;case"palm":i.solid(mo,[n,o+.08*r,s],[.012*r,.16*r,.012*r],u,[.12,a,0]),i.solid(go,[n+.01*r,o+.165*r,s],[.15*r,.03*r,.15*r],l,[0,a,0]);break;case"deadTree":i.solid(mo,[n,o+.06*r,s],[.014*r,.12*r,.014*r],u),i.solid(pn,[n+.02*r,o+.09*r,s],[.006*r,.05*r,.006*r],u,[0,a,-.7]);break;case"bush":i.solid(Tu,[n,o+.02*r,s],[.06*r,.045*r,.06*r],l,[0,a,0]);break;case"shrub":i.solid(go,[n,o+.025*r,s],[.05*r,.05*r,.05*r],l,[0,a,0]),i.solid(go,[n+.02*r,o+.018*r,s+.01*r],[.035*r,.036*r,.035*r],l,[0,a,0]);break;case"scrub":i.solid(Tu,[n,o+.008*r,s],[.05*r,.02*r,.05*r],l,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(pn,[n+h*.008*r,o+.035*r,s],[.005,.07*r,.005],h===0?l:u,[0,a,h*.18]));break;case"rock":i.solid(Tu,[n,o+.012*r,s],[.07*r,.04*r,.06*r],l,[0,a,0]);break;default:i.solid(mo,[n,o+.05*r,s],[.018*r,.1*r,.018*r],l),i.solid(pn,[n+.015*r,o+.06*r,s],[.025*r,.01*r,.01*r],l,[0,a,0])}},"grow"),Ww=c((i,e,t,n)=>{let s=n[0]-t[0],r=n[1]-t[1],a=s*s+r*r,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/a));return Math.hypot(i-(t[0]+s*o),e-(t[1]+r*o))},"distanceTo"),Xw=c((i,e)=>{let t=Eu(e.terrain);if(t===null)return;let{centre:n,radius:s,seed:r,latitude:a}=i.place;t.plants.forEach((o,l)=>{for(let u=0;u<o.count;u++){let h=1e3+l*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*vi(r,h),d=t.conifers,p=d!==void 0&&vi(r,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,x=Vw[p]*f;for(let b=0;b<6;b++){let _=vi(r,h+2+b*2)*Math.PI*2,g=Math.sqrt(vi(r,h+3+b*2))*s*.92,w=n[0]+Math.cos(_)*g,C=n[1]+Math.sin(_)*g;if(i.hasRoom(w,C,x)){Hw(i,o,p,w,C,f,_),i.taken.push([w,C,x]);break}}}})},"plants"),op=c((i,e,t)=>{let n=new np(t,e),{centre:s,radius:r}=e;if([i.road,i.railroad].forEach(a=>{a!==null&&ap(a)&&(a.joins.forEach(o=>n.lines.push([s,rp(e,o)])),a.alone&&n.lines.push([s,s]))}),i.fortress){let a=r*.62,o=[[-a,-a],[a,-a],[a,a],[-a,a]].map(([l,u])=>[s[0]+l,s[1]+u]);o.forEach((l,u)=>n.lines.push([l,o[(u+1)%4]]))}if(i.airbase){let a=r*.75;n.lines.push([[s[0]-a,s[1]+.12],[s[0]+a,s[1]+.12]])}return i.irrigation!==null&&Uw(n,i.irrigation),i.road!==null&&Dw(n,i.road),i.railroad!==null&&Nw(n,i.railroad),i.mine&&Fw(n,n.claim(...jf.mine,.1)),i.fortress&&Ow(n),i.airbase&&Bw(n),i.pollution&&zw(n),i.specials.forEach(([a,o],l)=>kw(n,Fg(a,o),n.claim(...jf.special(l),.1),l+1)),i.hut&&Gw(n,n.claim(...jf.hut,.13)),i.vegetation&&i.irrigation===null&&!i.fortress&&!i.airbase&&Xw(n,i),{taken:n.taken,lines:n.lines}},"layOverlay"),qw=c((i,e,t)=>{let n=ip();return t.forEach(({overlay:s,place:r})=>op(s,r,n)),lp(i,e,n)},"overlayMesh"),lp=c((i,e,t)=>{let n=new Float32Array(t.positions);for(let s=0;s<n.length;s+=3)n[s]=n[s]-i,n[s+2]=n[s+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Xg=qw;var ys,tn,ii,_o,yi,Rn,cn,Qr,vo,tr,yo,bo,ft,qg,hp,dp,Au,Cu,Yg,xo,fp=class fp{constructor(e){ne(this,ft);ne(this,ys);ne(this,tn);ne(this,ii,[]);ne(this,_o);ne(this,yi);ne(this,Rn,new Set);ne(this,cn,null);ne(this,Qr,null);ne(this,vo,new Map);ne(this,tr,[0,0]);ne(this,yo);ne(this,bo);q(this,yi,e);let t=e.topology(),n=e.width(),s=e.height(),r=t.wrapsY();this.layout=wg({width:n,height:s,topologyId:e.topologyId(),wrapsY:r}),q(this,ys,Rg({layout:this.layout,source:{width:n,height:s,wrapsY:r,terrainAt:c((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:c((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:c((d,p)=>t.directions().map(x=>t.neighbour(d,p,x)).filter(x=>x!==null),"neighbours")}})),q(this,tn,Pg(this.layout,s));let[a,o]=this.layout.centre(0,0),l=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[x,b]=this.layout.centre(d,p);return Math.hypot(x-a,b-o)}));q(this,_o,1.2+l+er*Math.SQRT2+(xi.reach-1)*u);let h=this.layout.outline(0,0),f=h.flatMap(([d,p],x)=>{let[b,_]=h[(x+1)%h.length],g=Math.hypot(b-d,_-p);return g===0?[]:[{away:Math.abs((b-d)*(o-p)-(_-p)*(a-d))/g,normal:[(_-p)/g,(d-b)/g]}]});q(this,yo,Math.min(...f.map(({away:d})=>d))),q(this,bo,Math.min(...f.map(({away:d,normal:[p,x]})=>d/(Math.abs(p)+Math.abs(x)))))}surfaceAt(e,t,n=new Map){let{spacingU:s,spacingV:r}=v(this,tn),a=Math.floor(e/s),o=Math.floor(t/r),l=e/s-a,u=t/r-o,h=c((b,_)=>{let g=`${b},${_}`,w=n.get(g);return w===void 0&&(w=v(this,ys).height(b*s,_*r),n.set(g,w)),w},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(l+u<=1)return f+(d-f)*l+(p-f)*u;let x=h(a+1,o+1);return x+(p-x)*(1-l)+(d-x)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,tn);return{columns:e*n,rows:t*s,spacingU:r,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return v(this,tn).chunksV*v(this,tn).stepsV*v(this,tn).spacingV}heightAt(e,t){return v(this,ys).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:s}=v(this,tn),r=[];for(let a=0;a<s;a++)for(let o=0;o<n;o++)r.push(`${o},${a}`);q(this,ii,H(this,ft,xo).call(this,r,e,t)),q(this,tr,[e,t]),r.forEach(a=>v(this,Rn).add(a))}changed(e,t,n,s=!1){if(e.length===0&&!s)return;q(this,tr,[t,n]),(e.length===0?[...H(this,ft,Cu).call(this).values()].flat():H(this,ft,Yg).call(this,e)).forEach(([o,l])=>{let u=H(this,ft,Au).call(this,o,l);if(v(this,Rn).has(u)||v(this,cn)?.key===u&&!H(this,ft,qg).call(this,v(this,cn),o,l))return;JSON.stringify(H(this,ft,hp).call(this,o,l))!==(v(this,vo).get(`${o},${l}`)??"null")&&v(this,Rn).add(u)});let r=v(this,ys).refresh(s?void 0:e);if(r.length===0)return;let a=Lg(v(this,tn),this.layout,r,v(this,_o)).map(([o,l])=>`${o},${l}`);q(this,ii,H(this,ft,xo).call(this,[...new Set([...v(this,ii),...a])],t,n))}refocus(e,t){q(this,ii,H(this,ft,xo).call(this,v(this,ii),e,t)),q(this,tr,[e,t])}pending(){return v(this,ii).length}overlaysPending(){return v(this,Rn).size+(v(this,cn)===null||v(this,Rn).has(v(this,cn).key)?0:1)}build(e,t){let n=performance.now(),s=c(()=>t!==null&&performance.now()-n>=t,"spent");for(;v(this,ii).length>0;){if(s())return;let r=v(this,ii).shift(),[a,o]=r.split(",").map(Number);e.setChunk(a,o,Ig(v(this,tn),v(this,ys),a,o)),v(this,Rn).add(r)}for(;v(this,Rn).size>0||v(this,cn)!==null;){if(v(this,cn)!==null&&v(this,Rn).has(v(this,cn).key)&&q(this,cn,null),v(this,cn)===null){let d=H(this,ft,xo).call(this,[...v(this,Rn)],...v(this,tr))[0];v(this,Rn).delete(d),q(this,cn,{key:d,squares:H(this,ft,Cu).call(this).get(d)??[],done:0,laid:ip(),heights:new Map})}let r=v(this,cn);for(;r.done<r.squares.length;){let[d,p]=r.squares[r.done],x=H(this,ft,dp).call(this,d,p,r.heights);if(r.done++,x!==null&&op(x.overlay,x.place,r.laid),r.done<r.squares.length&&s())return}let[a,o]=r.key.split(",").map(Number),{stepsU:l,stepsV:u,spacingU:h,spacingV:f}=v(this,tn);q(this,cn,null),e.setOverlay(a,o,r.laid.positions.length===0?null:lp(a*l*h,o*u*f,r.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:s,spacingU:r,spacingV:a}=v(this,tn),o=new Map,l=(H(this,ft,Cu).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>H(this,ft,dp).call(this,u,h,o)??[]);return l.length===0?null:Xg(e*n*r,t*s*a,l)}overlayKeyOf(e,t){return H(this,ft,Au).call(this,e,t)}};ys=new WeakMap,tn=new WeakMap,ii=new WeakMap,_o=new WeakMap,yi=new WeakMap,Rn=new WeakMap,cn=new WeakMap,Qr=new WeakMap,vo=new WeakMap,tr=new WeakMap,yo=new WeakMap,bo=new WeakMap,ft=new WeakSet,qg=c(function(e,t,n){return e.squares.slice(0,e.done).some(([s,r])=>s===t&&r===n)},"#reached"),hp=c(function(e,t){let n=v(this,yi).topology();return Ng(v(this,yi).get(e,t),n.directions().flatMap(s=>{let r=n.neighbour(e,t,s);return r===null?[]:[{offset:n.offset(s,e,t),tile:v(this,yi).get(r[0],r[1])}]}))},"#overlayAt"),dp=c(function(e,t,n){let s=H(this,ft,hp).call(this,e,t);if(v(this,vo).set(`${e},${t}`,JSON.stringify(s)),s===null)return null;let[r,a]=this.layout.centre(e,t);return{overlay:s,place:{centre:[r,a],toward:c(([o,l])=>this.layout.centre(e+o,t+l),"toward"),radius:v(this,yo),inner:v(this,bo),heightAt:c((o,l)=>this.surfaceAt(o,l,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1))}}},"#square"),Au=c(function(e,t){let{chunksU:n,chunksV:s,stepsU:r,stepsV:a,spacingU:o,spacingV:l}=v(this,tn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(r*o)),d=Math.floor(h/(a*l));return`${Math.min(n-1,Math.max(0,f))},${Math.min(s-1,Math.max(0,d))}`},"#chunkOf"),Cu=c(function(){if(v(this,Qr)===null){let e=new Map;for(let t=0;t<v(this,yi).height();t++)for(let n=0;n<v(this,yi).width();n++){let s=H(this,ft,Au).call(this,n,t);e.set(s,[...e.get(s)??[],[n,t]])}q(this,Qr,e)}return v(this,Qr)},"#chunksOfSquares"),Yg=c(function(e){let t=v(this,yi).topology(),n=new Map;return e.forEach(([s,r])=>[[s,r],...t.directions().map(a=>t.neighbour(s,r,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),xo=c(function(e,t,n){let{stepsU:s,stepsV:r,spacingU:a,spacingV:o}=v(this,tn),l=s*a,u=r*o,{u:h,v:f}=this.layout.period(),d=c((x,b)=>Math.abs(b===null?x:x-b*Math.round(x/b)),"round"),p=c(x=>{let[b,_]=x.split(",").map(Number);return Math.hypot(d((b+.5)*l-t,h),d((_+.5)*u-n,f))},"distance");return[...e].sort((x,b)=>p(x)-p(b))},"#nearestFirst"),c(fp,"Land");var up=fp,Zg=up;var Yw=c(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Mo=Yw;var $g=c((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let s=n[0],r=n[n.length-1],a=r.time-s.time;return a<=0?{x:0,y:0}:{x:(r.x-s.x)/a,y:(r.y-s.y)/a}},"releaseVelocity");var Zw=8,$w=.92,Jw=.02,Jg=3,Kw=50,Qw=8,jw=10,Kg=250,So,wo,jr,ea,nr,bs,pp=class pp{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:s}){ne(this,So);ne(this,wo);ne(this,jr);ne(this,ea);ne(this,nr,!1);ne(this,bs);this.pointerId=e,q(this,So,t),q(this,wo,n),q(this,jr,t),q(this,ea,n),q(this,bs,[{x:t,y:n,time:s}])}dragging(){return v(this,nr)}move({pointerId:e,clientX:t,clientY:n,timeStamp:s}){if(e!==this.pointerId||!v(this,nr)&&Math.hypot(t-v(this,So),n-v(this,wo))<Zw)return null;let r=!v(this,nr),a=v(this,jr)-t,o=v(this,ea)-n;return q(this,nr,!0),q(this,jr,t),q(this,ea,n),v(this,bs).push({x:t,y:n,time:s}),v(this,bs).length>20&&v(this,bs).shift(),{dx:a,dy:o,started:r}}releaseVelocity(e){return $g(v(this,bs),e)}};So=new WeakMap,wo=new WeakMap,jr=new WeakMap,ea=new WeakMap,nr=new WeakMap,bs=new WeakMap,c(pp,"Press");var Ru=pp,bi,Eo,mp=class mp{constructor(e){ne(this,bi,null);ne(this,Eo);q(this,Eo,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>Jg?Jg/t:1,s=e.x*n,r=e.y*n,a=null,o=c(l=>{let u=a===null?16:Math.min(l-a,64);if(a=l,Math.hypot(s,r)<Jw){q(this,bi,null);return}v(this,Eo).call(this,-s*u,-r*u);let h=Math.pow($w,u/16);s*=h,r*=h,q(this,bi,window.requestAnimationFrame(o))},"step");q(this,bi,window.requestAnimationFrame(o))}gliding(){return v(this,bi)!==null}stop(){v(this,bi)!==null&&(window.cancelAnimationFrame(v(this,bi)),q(this,bi,null))}};bi=new WeakMap,Eo=new WeakMap,c(mp,"Glide");var Pu=mp,ir,To,Ao,ta,gp=class gp{constructor(){ne(this,ir,0);ne(this,To,0);ne(this,Ao,-1/0);ne(this,ta,0)}turned(e,t){let n=e.deltaMode===0,s=e.deltaY;if(s===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=Kg)return 0;let r=Math.sign(s),a=e.timeStamp-v(this,Ao)>Kg||r!==v(this,To);if(q(this,Ao,e.timeStamp),q(this,To,r),a&&(q(this,ir,0),q(this,ta,0)),n&&!e.ctrlKey&&v(this,ta)>=jw)return 0;if(!a&&n){if(q(this,ir,v(this,ir)+s),Math.abs(v(this,ir))<(e.ctrlKey?Qw:Kw))return 0;q(this,ir,0)}return n&&!e.ctrlKey&&q(this,ta,v(this,ta)+1),s<0?1:-1}};ir=new WeakMap,To=new WeakMap,Ao=new WeakMap,ta=new WeakMap,c(gp,"WheelTurn");var Iu=gp;var e1=350,t1=.006,Qg=.004,Mi,qt,un,na,Si,si,Uu,Wn,Xn,Ms,ia,Pn,Ss,we,Hn,Lu,Du,jg,_p,Hi,vp,ex,Wi,tx,nx,ix,sx,Co,rx,ax,ox,Nu,yp=class yp{constructor(e,t,n=null){ne(this,we);ne(this,Mi);ne(this,qt);ne(this,un,null);ne(this,na,[0,0]);ne(this,Si,null);ne(this,si);ne(this,Uu,new Iu);ne(this,Wn,new Map);ne(this,Xn,null);ne(this,Ms,null);ne(this,ia,[]);ne(this,Pn);ne(this,Ss,null);q(this,Mi,e),q(this,qt,t),q(this,Pn,n),q(this,si,new Pu((s,r)=>{let[a,o]=H(this,we,jg).call(this);H(this,we,vp).call(this,[a,o],[a-s,o-r])})),H(this,we,Hn).call(this,"pointerdown",s=>H(this,we,ex).call(this,s)),H(this,we,Hn).call(this,"pointermove",s=>H(this,we,nx).call(this,s)),H(this,we,Hn).call(this,"pointerup",s=>H(this,we,ix).call(this,s)),H(this,we,Hn).call(this,"pointercancel",s=>H(this,we,sx).call(this,s)),H(this,we,Hn).call(this,"wheel",s=>H(this,we,ax).call(this,s),{passive:!1}),H(this,we,Hn).call(this,"gesturestart",s=>H(this,we,Nu).call(this,s,"start"),{passive:!1}),H(this,we,Hn).call(this,"gesturechange",s=>H(this,we,Nu).call(this,s,"change"),{passive:!1}),H(this,we,Hn).call(this,"gestureend",s=>H(this,we,Nu).call(this,s,"end"),{passive:!1}),H(this,we,Hn).call(this,"contextmenu",s=>H(this,we,tx).call(this,s)),H(this,we,Hn).call(this,"pointerleave",()=>v(this,Pn)?.hover(null)),H(this,we,Hn).call(this,"touchstart",s=>s.preventDefault(),{passive:!1})}dragging(){return v(this,un)?.dragging()===!0||v(this,Si)!==null}moving(){return this.dragging()||v(this,Xn)!==null||v(this,si).gliding()}dispose(){v(this,si).stop(),H(this,we,Wi).call(this),v(this,ia).forEach(([e,t,n])=>v(this,Mi).removeEventListener(e,t,n)),q(this,ia,[])}};Mi=new WeakMap,qt=new WeakMap,un=new WeakMap,na=new WeakMap,Si=new WeakMap,si=new WeakMap,Uu=new WeakMap,Wn=new WeakMap,Xn=new WeakMap,Ms=new WeakMap,ia=new WeakMap,Pn=new WeakMap,Ss=new WeakMap,we=new WeakSet,Hn=c(function(e,t,n){v(this,Mi).addEventListener(e,t,n),v(this,ia).push([e,t,n])},"#listen"),Lu=c(function(){return{width:v(this,Mi).clientWidth||1,height:v(this,Mi).clientHeight||1}},"#box"),Du=c(function([e,t]){let{width:n,height:s}=H(this,we,Lu).call(this);return[e/n*2-1,1-t/s*2]},"#screen"),jg=c(function(){let{width:e,height:t}=H(this,we,Lu).call(this);return[e/2,t/2]},"#middle"),_p=c(function(){let{width:e,height:t}=H(this,we,Lu).call(this);return e/t},"#aspect"),Hi=c(function(e){let t=v(this,Mi).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),vp=c(function(e,t){v(this,qt).setOrbit(ug(v(this,qt).orbit(),v(this,qt).lookHeight(),H(this,we,Du).call(this,e),H(this,we,Du).call(this,t),H(this,we,_p).call(this)))},"#pan"),ex=c(function(e){if(v(this,si).stop(),v(this,Pn)?.hover(null),e.pointerType==="touch"&&(v(this,Wn).set(e.pointerId,H(this,we,Hi).call(this,e)),v(this,Wn).size===2)){q(this,un,null),H(this,we,Wi).call(this),q(this,Xn,H(this,we,Co).call(this));return}if(e.isPrimary&&e.button!==2){if(v(this,Mi).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),q(this,Si,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new Ru(e),[n,s]=H(this,we,Hi).call(this,e),{clientX:r,clientY:a}=e;q(this,un,t),q(this,na,[n,s]),H(this,we,Wi).call(this),q(this,Ss,window.setTimeout(()=>{q(this,Ss,null),v(this,un)===t&&!t.dragging()&&v(this,Pn)?.menu(n,s,r,a,!0)===!0&&q(this,un,null)},e1))}}},"#down"),Wi=c(function(){v(this,Ss)!==null&&(window.clearTimeout(v(this,Ss)),q(this,Ss,null))},"#stopHold"),tx=c(function(e){if(v(this,Pn)===null||!v(this,Pn).menuOnRightClick()||(e.preventDefault(),v(this,Pn).menuOpen()))return;let[t,n]=H(this,we,Hi).call(this,e);v(this,Pn).menu(t,n,e.clientX,e.clientY,!1)&&(H(this,we,Wi).call(this),q(this,un,null))},"#rightClick"),nx=c(function(e){if(v(this,Wn).has(e.pointerId)&&(v(this,Wn).set(e.pointerId,H(this,we,Hi).call(this,e)),v(this,Xn)!==null)){H(this,we,rx).call(this);return}let t=v(this,Si);if(t!==null&&t.pointerId===e.pointerId){let r=v(this,qt).orbit();v(this,qt).setOrbit(js({...r,yaw:r.yaw-(e.clientX-t.x)*t1,pitch:r.pitch+(e.clientY-t.y)*Qg})),t.x=e.clientX,t.y=e.clientY;return}let n=v(this,un);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!v(this,si).gliding()){let[r,a]=H(this,we,Hi).call(this,e);v(this,Pn)?.hover({x:r,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;H(this,we,Wi).call(this);let s=H(this,we,Hi).call(this,e);H(this,we,vp).call(this,v(this,na),s),q(this,na,s)},"#move"),ix=c(function(e){if(v(this,Wn).delete(e.pointerId),v(this,Xn)!==null){q(this,Xn,v(this,Wn).size<2?null:H(this,we,Co).call(this));return}if(v(this,Si)?.pointerId===e.pointerId){q(this,Si,null);return}let t=v(this,un);if(!(t===null||t.pointerId!==e.pointerId)){if(q(this,un,null),H(this,we,Wi).call(this),!t.dragging()){let[n,s]=H(this,we,Hi).call(this,e);v(this,Pn)?.click(n,s,e.clientX,e.clientY);return}Mo()||v(this,si).start(t.releaseVelocity(e.timeStamp))}},"#up"),sx=c(function(e){v(this,Wn).delete(e.pointerId),v(this,Xn)!==null&&q(this,Xn,v(this,Wn).size<2?null:H(this,we,Co).call(this)),v(this,un)?.pointerId===e.pointerId&&(q(this,un,null),H(this,we,Wi).call(this)),v(this,Si)?.pointerId===e.pointerId&&q(this,Si,null)},"#cancel"),Co=c(function(){let[e,t]=[...v(this,Wn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:v(this,qt).orbit()}},"#measurePair"),rx=c(function(){let e=v(this,Xn),t=H(this,we,Co).call(this);e===null||t===null||v(this,qt).setOrbit(js({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*Qg}))},"#twoFingers"),ax=c(function(e){e.preventDefault();let t=v(this,Uu).turned(e,v(this,Ms)?.at??null);t!==0&&(v(this,si).stop(),H(this,we,ox).call(this,t,H(this,we,Hi).call(this,e)))},"#wheelTurned"),ox=c(function(e,t){let n=v(this,qt).orbit(),s=$r(n,e),r=Zr(n,v(this,qt).lookHeight(),H(this,we,Du).call(this,t),H(this,we,_p).call(this));if(r===null||s.distance===n.distance){v(this,qt).setOrbit(s);return}let a=1-s.distance/n.distance;v(this,qt).setOrbit({...s,focus:[n.focus[0]+(r[0]-n.focus[0])*a,n.focus[1]+(r[1]-n.focus[1])*a]})},"#zoomAbout"),Nu=c(function(e,t){if(e.preventDefault(),v(this,Xn)!==null){q(this,Ms,null);return}if(t==="end"){q(this,Ms,null);return}if(t==="start"){v(this,si).stop(),q(this,un,null),H(this,we,Wi).call(this),q(this,Ms,{orbit:v(this,qt).orbit(),at:e.timeStamp});return}let n=v(this,Ms);n!==null&&(n.at=e.timeStamp,v(this,qt).setOrbit(js({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),c(yp,"CameraInput");var xp=yp,lx=xp;var n1=["#9a9a9a","#4a4a4a"],Ro=c(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?n1:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),bp=c((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),i1=c(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),s1=c((i,e,t,n={},s=()=>0)=>{let r=i.units??[],a=bp(r,e),o=a!==null&&a.id===e,l=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:Ro(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,u=a!==null&&(t||o)?{type:a._,kinds:a.__??[],colours:Ro(a.player),count:r.length,active:o,busy:a.busy!==null&&a.busy!==void 0,fortified:(a.improvements??[]).some(({_:h})=>h==="Fortified"),veteran:(a.improvements??[]).some(({_:h})=>h==="Veteran"),health:i1(a),status:(a.busy?n.unitStatus?.(a):null)||null,facing:s(a)}:null;return l===null&&u===null?null:{city:l,unit:u}},"markerFor"),cx=s1;var r1=1,a1=.04,o1=12,l1=c((i,e,t,n,s,{water:r=0,ceiling:a=r1}={})=>{let{from:o,direction:l}=Hf(i,e,t,n),[u,h,f]=o,[d,p,x]=l;if(p>-1e-6)return null;let b=c(m=>[u+d*m,h+p*m,f+x*m],"at"),_=c(m=>{let[S,N,I]=b(m);return N-Math.max(r,s(S,I))},"above"),g=Math.max(0,(h-a)/-p),w=(h-r)/-p,C=a1/Math.max(1e-6,Math.hypot(d,x)),T=g;for(let m=g;;m=Math.min(w,m+C)){if(_(m)<=0){let S=T,N=m;for(let D=0;D<o1;D++){let B=(S+N)/2;_(B)>0?S=B:N=B}let[I,,U]=b(N);return[I,U]}if(m>=w)break;T=m}let[R,,E]=b(w);return[R,E]},"pickGround"),ux=l1;var Fu=4,ws,Po,sr,rr,mn,sa,Es,Xi,Io,Lo,Do,ri,Ou,hx,Sp,wp=class wp{constructor(e,t,n,s,r){ne(this,ri);ne(this,ws);ne(this,Po);ne(this,sr);ne(this,rr);ne(this,mn);ne(this,sa);ne(this,Es);ne(this,Xi);ne(this,Io);ne(this,Lo);ne(this,Do,c(e=>{let t=v(this,ws).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,s=t.height>0?(e.clientY-t.top)/t.height:0;v(this,Lo).call(this,n*v(this,mn),s*v(this,sa))},"#click"));q(this,ws,e),q(this,sr,t),q(this,rr,n),q(this,mn,t.period().u),q(this,sa,s),q(this,Lo,r),q(this,Xi,document.createElement("canvas"));let{v:a}=t.period();q(this,Es,a),q(this,Io,[[0,0],[-v(this,mn),0],...a===null?[]:[[0,-a],[-v(this,mn),-a]]]);let o=Math.max(1,Math.round(v(this,mn)*Fu)),l=Math.max(1,Math.round(v(this,sa)*Fu));[e,v(this,Xi)].forEach(u=>{u.width=o,u.height=l}),q(this,Po,e.getContext("2d")),e.addEventListener("click",v(this,Do))}dispose(){v(this,ws).removeEventListener("click",v(this,Do))}redraw(){let e=v(this,Xi).getContext("2d");if(e===null)return;let t=v(this,rr).width(),n=v(this,rr).height(),s=[];e.fillStyle="#000000",e.fillRect(0,0,v(this,Xi).width,v(this,Xi).height);for(let r=0;r<n;r++)for(let a=0;a<t;a++){let o=v(this,rr).get(a,r),l=o.terrain?._??"Unknown";if(l==="Unknown")continue;e.fillStyle=wu(l).colour,v(this,Io).forEach(([f,d])=>{H(this,ri,hx).call(this,e,a,r,f,d),e.fill()});let[u,h]=v(this,sr).centre(a,r);if(o.city)s.push([u,h,Ro(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=bp(o.units,null);f!==null&&s.push([u,h,Ro(f.player)[0],1.4])}}s.forEach(([r,a,o,l])=>H(this,ri,Sp).call(this,r,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-l-.5,h-l-.5,l*2+1,l*2+1),e.fillStyle=o,e.fillRect(u-l,h-l,l*2,l*2)}))}show(e,t){let n=v(this,Po);if(n===null)return;if(n.clearRect(0,0,v(this,ws).width,v(this,ws).height),n.drawImage(v(this,Xi),0,0),t!==null){let[h,f]=v(this,sr).centre(t.x,t.y);n.fillStyle="#ffffff",H(this,ri,Sp).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let s=v(this,Es),r=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-v(this,mn)*Math.floor(r/v(this,mn)),l=s===null?0:-s*Math.floor(a/s);(s===null?[0]:[-s,0,s]).forEach(h=>[-v(this,mn),0,v(this,mn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],x)=>{let[b,_]=H(this,ri,Ou).call(this,d+o+f,p+l+h);x===0?n.moveTo(b,_):n.lineTo(b,_)}),n.closePath(),n.stroke()}))}};ws=new WeakMap,Po=new WeakMap,sr=new WeakMap,rr=new WeakMap,mn=new WeakMap,sa=new WeakMap,Es=new WeakMap,Xi=new WeakMap,Io=new WeakMap,Lo=new WeakMap,Do=new WeakMap,ri=new WeakSet,Ou=c(function(e,t){return[e*Fu,t*Fu]},"#px"),hx=c(function(e,t,n,s=0,r=0){e.beginPath(),v(this,sr).outline(t,n).forEach(([a,o],l)=>{let[u,h]=H(this,ri,Ou).call(this,a+s,o+r);l===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),Sp=c(function(e,t){return(v(this,Es)===null?[0]:[-v(this,Es),0,v(this,Es)]).flatMap(s=>[-v(this,mn),0,v(this,mn)].map(r=>H(this,ri,Ou).call(this,e+r,t+s)))},"#everywhere"),c(wp,"Minimap3D");var Mp=wp,dx=Mp;var c1=10,u1=4e3,h1=350,d1=500,f1=.25,p1=400,Dt,Oo,Bo,it,qn,ar,zo,ko,st,wt,gn,aa,Go,or,As,oa,Vo,Ho,Ln,Wo,qi,Xo,wi,Cs,qo,Dn,la,ca,Rs,Yi,ua,Ps,lr,ha,Zi,Yo,$i,da,fa,Zo,pa,$o,ma,ga,Jo,oe,Bu,fx,No,px,mx,gx,Tp,zu,xx,_x,Uo,Ts,Fo,vx,yx,Ap,ra,ku,Cp,bx,Mx,Rp,In,Sx,wx,Pp,Ip=class Ip{constructor(e,t=_g){ne(this,oe);ne(this,Dt);ne(this,Oo);ne(this,Bo,[]);ne(this,it);ne(this,qn);ne(this,ar,null);ne(this,zo,0);ne(this,ko,"");ne(this,st);ne(this,wt,null);ne(this,gn,null);ne(this,aa);ne(this,Go);ne(this,or);ne(this,As,null);ne(this,oa,null);ne(this,Vo);ne(this,Ho,!1);ne(this,Ln);ne(this,Wo);ne(this,qi,new Map);ne(this,Xo);ne(this,wi,null);ne(this,Cs,null);ne(this,qo);ne(this,Dn,c(()=>{let e=v(this,Cs);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),q(this,Cs,null),document.removeEventListener("keydown",v(this,Dn),!0),e.open&&v(this,Ln).endTooltip(v(this,Dt)))},"#endHover"));ne(this,la,null);ne(this,ca,!0);ne(this,Rs,new Map);ne(this,Yi,null);ne(this,ua,new Map);ne(this,Ps,new Map);ne(this,lr,[]);ne(this,ha,0);ne(this,Zi,null);ne(this,Yo,null);ne(this,$i,!0);ne(this,da,!1);ne(this,fa,!1);ne(this,Zo);ne(this,pa);ne(this,$o,"");ne(this,ma,c(()=>H(this,oe,Pp).call(this),"#resizeHandler"));ne(this,ga,null);ne(this,Jo,!1);q(this,Dt,e.mapCanvas),q(this,Oo,e.coveredBy),q(this,Zo,e.art),q(this,Wo,{cityName:e.cityName,unitStatus:e.unitStatus}),q(this,pa,e.art.id()),this.world=e.world,q(this,it,new Zg(e.world)),q(this,lr,e.world.tiles()),q(this,ha,v(this,lr).length),q(this,Go,e.cameraDistance),q(this,Vo,e.lockVerticalEdges);let n=e.cameraDistance.get();q(this,st,H(this,oe,Uo).call(this,{...lg(v(this,it).layout.centre(0,0)),...n===null?{}:{distance:n}})),q(this,or,v(this,st).distance),this.portal=new Yp(e,{centre:c(()=>H(this,oe,xx).call(this),"centre"),centreOn:c((s,r)=>H(this,oe,_x).call(this,s,r),"centreOn"),changed:c(()=>H(this,oe,In).call(this),"changed"),visible:c((s,r,a)=>H(this,oe,fx).call(this,s,r,a),"visible")}),q(this,qn,t(e.mapCanvas,{period:v(this,it).layout.period(),ground:v(this,it).ground()})),e.minimapCanvas!==null&&q(this,la,new dx(e.minimapCanvas,v(this,it).layout,e.world,v(this,it).extentV(),(s,r)=>H(this,oe,Fo).call(this,{...v(this,wt)?.to??v(this,st),focus:[s,r]}))),e.debug&&e.mapCanvas.parentElement&&(q(this,ar,H(this,oe,Sx).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),v(this,it).queueAll(...H(this,oe,zu).call(this)),H(this,oe,ku).call(this),this.portal.on("activate-unit",s=>e.activateUnit(s)),q(this,Ln,e.squares),q(this,qo,e.playerId),q(this,Xo,e.transport),q(this,aa,new lx(e.mapCanvas,{orbit:c(()=>v(this,st),"orbit"),lookHeight:c(()=>v(this,gn)??0,"lookHeight"),setOrbit:c(s=>this.setOrbit(s),"setOrbit")},{click:c((s,r)=>H(this,oe,px).call(this,s,r),"click"),menu:c((s,r,a,o,l)=>H(this,oe,mx).call(this,s,r,a,o,l),"menu"),menuOnRightClick:c(()=>v(this,Ln).menuOnRightClick(),"menuOnRightClick"),menuOpen:c(()=>v(this,Ln).menuOpen(),"menuOpen"),hover:c(s=>H(this,oe,gx).call(this,s),"hover")})),window.addEventListener("resize",v(this,ma)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(q(this,ga,new ResizeObserver(v(this,ma))),v(this,ga).observe(e.mapCanvas.parentElement)),H(this,oe,Pp).call(this),H(this,oe,In).call(this)}land(){return v(this,it)}orbit(){return v(this,st)}moving(){return v(this,wt)!==null||v(this,aa).moving()}setOrbit(e){v(this,Dn).call(this),q(this,wt,null),q(this,st,H(this,oe,Uo).call(this,e)),H(this,oe,In).call(this)}activeUnit(){return{unit:v(this,Zi),pendingTile:v(this,Yo)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=v(this,wt)?.to??v(this,st);H(this,oe,Fo).call(this,{...t,yaw:t.yaw+e*og})}faceNorth(){H(this,oe,Fo).call(this,{...v(this,wt)?.to??v(this,st),yaw:0})}debugViewModes(){return[]}dispose(){H(this,oe,Rp).call(this,!0),q(this,Jo,!0),v(this,Dn).call(this),v(this,aa).dispose(),v(this,la)?.dispose(),window.removeEventListener("resize",v(this,ma)),v(this,ga)?.disconnect(),v(this,Yi)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(v(this,Yi)),q(this,Yi,null),v(this,ar)?.remove(),v(this,qn).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=v(this,wi);e!==null&&(q(this,wi,null),v(this,Dt).classList.remove("picking-tile"),e.window?.close())}flush(){H(this,oe,Ap).call(this),H(this,oe,In).call(this)}mapEvent(e){if(e.kind==="moved"){H(this,oe,Bu).call(this,e.unit.id,e.from,e.to);return}H(this,oe,Bu).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),H(this,oe,Bu).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=v(this,Dt).getBoundingClientRect();q(this,Bo,v(this,Oo).map(t=>{let n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,s.left,e.left)-e.left,top:Math.max(n.top,s.top,e.top)-e.top,right:Math.min(n.right,s.right,e.right)-e.left,bottom:Math.min(n.bottom,s.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:s,bottom:r})=>s>t&&r>n))}pickTile(e,t,n){this.endPicking();let s={accept:e,onPick:t,window:null};q(this,wi,s),v(this,Dt).classList.add("picking-tile"),s.window=v(this,Ln).prompt(n,()=>{v(this,wi)===s&&(q(this,wi,null),v(this,Dt).classList.remove("picking-tile"))})}picking(){return v(this,wi)!==null}queueTile(e){v(this,ua).set(`${e.x},${e.y}`,e)}redrawArt(){let e=v(this,Zo).id();return e===v(this,pa)?"unchanged":(q(this,pa,e),"redrawn")}releaseTiles(){v(this,ua).forEach((e,t)=>v(this,Ps).set(t,e)),v(this,ua).clear(),v(this,Ps).size>0&&H(this,oe,In).call(this)}setActiveUnit(e,t){let n=v(this,Zi)?.tile;q(this,Zi,e),q(this,Yo,t??null),[n,e?.tile].forEach(s=>{s&&H(this,oe,ra).call(this,s.x,s.y)}),H(this,oe,In).call(this)}setWaiting(e){q(this,fa,e),e&&v(this,Dn).call(this)}showActiveUnit(e){v(this,$i)||(q(this,$i,!0),H(this,oe,ku).call(this),H(this,oe,In).call(this))}shown(){return{units:v(this,$i),yields:v(this,da),waiting:v(this,fa)}}tilesPending(){return v(this,Ps).size}toggleUnits(){q(this,$i,!v(this,$i)),H(this,oe,ku).call(this),H(this,oe,In).call(this)}toggleYields(){q(this,da,!v(this,da))}zoomBy(e){v(this,Dn).call(this),q(this,st,$r(v(this,st),e)),v(this,wt)!==null&&(v(this,wt).from=$r(v(this,wt).from,e),v(this,wt).to=$r(v(this,wt).to,e)),H(this,oe,In).call(this)}};Dt=new WeakMap,Oo=new WeakMap,Bo=new WeakMap,it=new WeakMap,qn=new WeakMap,ar=new WeakMap,zo=new WeakMap,ko=new WeakMap,st=new WeakMap,wt=new WeakMap,gn=new WeakMap,aa=new WeakMap,Go=new WeakMap,or=new WeakMap,As=new WeakMap,oa=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,Ln=new WeakMap,Wo=new WeakMap,qi=new WeakMap,Xo=new WeakMap,wi=new WeakMap,Cs=new WeakMap,qo=new WeakMap,Dn=new WeakMap,la=new WeakMap,ca=new WeakMap,Rs=new WeakMap,Yi=new WeakMap,ua=new WeakMap,Ps=new WeakMap,lr=new WeakMap,ha=new WeakMap,Zi=new WeakMap,Yo=new WeakMap,$i=new WeakMap,da=new WeakMap,fa=new WeakMap,Zo=new WeakMap,pa=new WeakMap,$o=new WeakMap,ma=new WeakMap,ga=new WeakMap,Jo=new WeakMap,oe=new WeakSet,Bu=c(function(e,t,n){let[s,r]=v(this,it).layout.centre(t.x,t.y),[a,o]=v(this,it).layout.centre(n.x,n.y),{u:l,v:u}=v(this,it).layout.period(),h=c((p,x)=>x===null?p:p-x*Math.round(p/x),"short"),f=h(a-s,l),d=h(o-r,u);f===0&&d===0||(v(this,qi).delete(e),v(this,qi).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),v(this,qi).size>u1&&v(this,qi).delete(v(this,qi).keys().next().value),[t,n].forEach(({x:p,y:x})=>H(this,oe,ra).call(this,p,x)),H(this,oe,In).call(this))},"#face"),fx=c(function(e,t,n){let s=v(this,Dt).clientWidth,r=v(this,Dt).clientHeight;if(s<=0||r<=0)return!1;let a=v(this,wt)?.to??v(this,st),[o,l]=v(this,it).layout.centre(e,t),{u,v:h}=H(this,oe,Ts).call(this),[f,d]=a.focus,p=c((m,S,N)=>N===null?m:m+N*Math.round((S-m)/N),"nearest"),x=[p(o,f,u),Math.max(0,v(this,it).heightAt(o,l)),p(l,d,h)],b=s/r,_=v(this,gn)??0,g=Vf(a,_,x,b),w=Vf(a,_,[x[0]+Math.cos(a.yaw),x[1],x[2]+Math.sin(a.yaw)],b);if(g===null||w===null)return!1;let C=(g[0]+1)/2*s,T=(1-g[1])/2*r,R=Math.abs(w[0]-g[0])*(s/2),E=(n+.5)*R;return C>=E&&C<=s-E&&T>=E&&T<=r-E&&!v(this,Bo).some(({left:m,top:S,right:N,bottom:I})=>C>=m-R/2&&C<=N+R/2&&T>=S-R/2&&T<=I+R/2)},"#visible"),No=c(function(e,t){let n=v(this,Dt).clientWidth,s=v(this,Dt).clientHeight;if(n<=0||s<=0)return null;let r=ux(v(this,st),v(this,gn)??0,[e/n*2-1,1-t/s*2],n/s,(f,d)=>v(this,it).heightAt(f,d));if(r===null)return null;let[a,o]=v(this,it).layout.tileAt(...r),l=this.world.width(),u=this.world.height();return!(H(this,oe,Ts).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%l+l)%l,(o%u+u)%u)},"#tileAt"),px=c(function(e,t){let n=H(this,oe,No).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let s=v(this,wi);if(s!==null){n!==null&&s.accept(n)&&(this.endPicking(),s.onPick(n));return}n!==null&&v(this,Ln).click(this.portal,n)},"#clicked"),mx=c(function(e,t,n,s,r){let a=v(this,Zi),o=H(this,oe,No).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),v(this,Ln).menu(this.portal,n,s,a,o,v(this,Xo),r),!0)},"#menu"),gx=c(function(e){let t=e===null||v(this,fa)||v(this,Ln).menuOpen()?null:H(this,oe,No).call(this,e.x,e.y),n=v(this,Cs);if(t===null||e===null){v(this,Dn).call(this);return}let s=`${t.x},${t.y}`;if(n!==null&&n.key===s){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}v(this,Dn).call(this);let r={key:s,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};r.timer=window.setTimeout(()=>{r.timer=null,H(this,oe,Tp).call(this,r)},p1),q(this,Cs,r),document.addEventListener("keydown",v(this,Dn),!0)},"#hovered"),Tp=c(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===v(this,Dt),n=t?H(this,oe,No).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){v(this,Dn).call(this);return}let s=v(this,Ln).tooltip(v(this,Dt),n,v(this,qo),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!s&&e.open&&v(this,Ln).endTooltip(v(this,Dt)),e.open=s},"#showHover"),zu=c(function(){return[...v(this,st).focus]},"#focus"),xx=c(function(){let[e,t]=v(this,it).layout.tileAt(...v(this,st).focus),n=this.world.width(),s=this.world.height();return{x:(e%n+n)%n,y:H(this,oe,Ts).call(this).v===null?Math.min(s-1,Math.max(0,t)):(t%s+s)%s}},"#centreSquare"),_x=c(function(e,t){let[n,s]=v(this,it).layout.centre(e,t),[r,a]=(v(this,wt)?.to??v(this,st)).focus;if(n===r&&s===a)return;let o={...v(this,wt)?.to??v(this,st),focus:[n,s]},{u:l,v:u}=H(this,oe,Ts).call(this),h=c((x,b)=>b===null?x:x-b*Math.round(x/b),"short"),[f,d]=v(this,st).focus,p=Math.hypot(h(n-f,l),h(s-d,u));if(!v(this,Ho)||p>v(this,st).distance*1.5){q(this,Ho,!0),this.setOrbit(o);return}H(this,oe,Fo).call(this,o)},"#centreOn"),Uo=c(function(e){return hg(js(e),H(this,oe,Ts).call(this),v(this,it).extentV())},"#settle"),Ts=c(function(){let e=v(this,it).layout.period();return this.portal?.lockVerticalEdges()??v(this,Vo)?{u:e.u,v:null}:e},"#period"),Fo=c(function(e){v(this,Dn).call(this),typeof requestAnimationFrame!="function"||Mo()?(q(this,wt,null),q(this,st,H(this,oe,Uo).call(this,e))):q(this,wt,{from:v(this,st),to:e,started:null}),H(this,oe,In).call(this)},"#moveTo"),vx=c(function(e){let t=v(this,wt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/h1);return q(this,st,H(this,oe,Uo).call(this,dg(t.from,t.to,n,H(this,oe,Ts).call(this)))),n>=1&&q(this,wt,null),n<1},"#moveCamera"),yx=c(function(e){let[t,n]=v(this,st).focus,s=Math.max(0,v(this,it).heightAt(t,n));return!e||v(this,gn)===null||Mo()?(q(this,gn,s),!1):(q(this,gn,v(this,gn)+(s-v(this,gn))*f1),Math.abs(s-v(this,gn))<.002?(q(this,gn,s),!1):!0)},"#followHeight"),Ap=c(function(){let e=[...v(this,Ps).values()].map(({x:r,y:a})=>[r,a]),t=this.world.tiles(),n=t!==v(this,lr)||t.length!==v(this,ha);q(this,lr,t),q(this,ha,t.length),v(this,Ps).clear(),v(this,it).changed(e,...H(this,oe,zu).call(this),n),e.forEach(([r,a])=>H(this,oe,ra).call(this,r,a));let s=v(this,Cs);s!==null&&s.open&&e.some(([r,a])=>r===s.x&&a===s.y)&&H(this,oe,Tp).call(this,s),(e.length>0||n)&&q(this,ca,!0),n&&v(this,Rs).forEach((r,a)=>{let[o,l]=a.split(",").map(Number);H(this,oe,ra).call(this,o,l)})},"#takeTiles"),ra=c(function(e,t){let n=`${e},${t}`,s=cx(this.world.get(e,t),v(this,Zi)?.id??null,v(this,$i),v(this,Wo),u=>v(this,qi).get(u.id)??0),[r,a]=v(this,it).layout.centre(e,t),o=[r,Math.max(0,v(this,it).surfaceAt(r,a)),a],l=s===null?null:JSON.stringify([s,o]);l!==(v(this,Rs).get(n)??null)&&(v(this,qn).setMarker(n,o,s),l===null?v(this,Rs).delete(n):v(this,Rs).set(n,l))},"#mark"),ku=c(function(){let e=new Set(v(this,Rs).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,s]=t.split(",").map(Number);H(this,oe,ra).call(this,n,s)})},"#markAll"),Cp=c(function(e){let t=performance.now(),n=H(this,oe,vx).call(this,t),[s,r]=H(this,oe,zu).call(this);H(this,oe,Ap).call(this),`${s},${r}`!==v(this,ko)&&(q(this,ko,`${s},${r}`),v(this,it).refocus(s,r)),v(this,it).build(v(this,qn),e);let a=H(this,oe,yx).call(this,e!==null);v(this,qn).view(v(this,st),v(this,gn)??0,H(this,oe,Ts).call(this)),v(this,qn).render(),H(this,oe,bx).call(this),H(this,oe,Rp).call(this),q(this,zo,performance.now()-t),H(this,oe,wx).call(this),(v(this,it).pending()>0||v(this,it).overlaysPending()>0||n||a)&&H(this,oe,In).call(this)},"#frameDrawn"),bx=c(function(){let e=v(this,la);if(e===null)return;v(this,ca)&&(q(this,ca,!1),e.redraw());let t=v(this,Zi)?.tile??null;e.show(H(this,oe,Mx).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),Mx=c(function(){let e=v(this,Dt).clientWidth,t=v(this,Dt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,s=v(this,gn)??0,r=yu(v(this,st).distance).far,[a,o]=v(this,st).focus,l=c((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=Zr(v(this,st),s,[h,d],n);if(p!==null){let x=Math.hypot(p[0]-a,p[1]-o),b=x>r?r/x:1;return[a+(p[0]-a)*b,o+(p[1]-o)*b]}}return null},"corner"),u=[l(-1,-1),l(1,-1),l(1,1),l(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),Rp=c(function(e=!1){let t=(e?v(this,wt)?.to??v(this,st):v(this,st)).distance,n=c(()=>{v(this,As)!==null&&clearTimeout(v(this,As)),q(this,As,null),q(this,oa,null)},"stop"),s=c(()=>{n(),q(this,or,t),v(this,Go).set(t)},"keep");if(e){n(),t!==v(this,or)&&s();return}if(v(this,wt)!==null||t===v(this,or)){n();return}v(this,As)!==null&&t===v(this,oa)||(n(),q(this,oa,t),q(this,As,setTimeout(s,d1)))},"#keepDistance"),In=c(function(){if(!v(this,Jo)){if(typeof requestAnimationFrame!="function"){H(this,oe,Cp).call(this,null);return}v(this,Yi)===null&&q(this,Yi,requestAnimationFrame(()=>{q(this,Yi,null),H(this,oe,Cp).call(this,c1)}))}},"#draw"),Sx=c(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),wx=c(function(){if(v(this,ar)===null)return;let{drawCalls:e,triangles:t,geometries:n}=v(this,qn).stats();v(this,ar).textContent=[`frame ${v(this,zo).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${v(this,it).pending()}`].join(`
`)},"#showStats"),Pp=c(function(){let e=v(this,Dt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,s=window.devicePixelRatio||1,r=`${t}\xD7${n}@${s}`;t===0||n===0||r===v(this,$o)||(q(this,$o,r),v(this,qn).resize(t,n,s),this.measureCovered(),v(this,qn).render())},"#resize"),c(Ip,"MapView3D");var Ep=Ip,Ex=Ep;var m1={createMapView3D:c(i=>new Ex(i),"createMapView3D")};globalThis[Wp]=m1;})();
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
