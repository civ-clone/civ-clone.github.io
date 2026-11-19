"use strict";(()=>{var J_=Object.create;var Ah=Object.defineProperty;var K_=Object.getOwnPropertyDescriptor;var j_=Object.getOwnPropertyNames;var Q_=Object.getPrototypeOf,ev=Object.prototype.hasOwnProperty;var Um=i=>{throw TypeError(i)};var l=(i,e)=>Ah(i,"name",{value:e,configurable:!0});var tv=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var nv=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of j_(e))!ev.call(i,r)&&r!==t&&Ah(i,r,{get:()=>e[r],enumerable:!(n=K_(e,r))||n.enumerable});return i};var iv=(i,e,t)=>(t=i!=null?J_(Q_(i)):{},nv(e||!i||!i.__esModule?Ah(t,"default",{value:i,enumerable:!0}):t,i));var Th=(i,e,t)=>e.has(i)||Um("Cannot "+t);var m=(i,e,t)=>(Th(i,e,"read from private field"),t?t.call(i):e.get(i)),ee=(i,e,t)=>e.has(i)?Um("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),H=(i,e,t,n)=>(Th(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),G=(i,e,t)=>(Th(i,e,"access private method"),t);var Fm=(i,e,t,n)=>({set _(r){H(i,e,r,t)},get _(){return m(i,e,n)}});var Bm=tv(Zr=>{"use strict";var gi,fr=Zr&&Zr.__classPrivateFieldGet||function(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.EventEmitter=void 0;var Ch=class Ch{constructor(){gi.set(this,{})}on(e,t){e in fr(this,gi,"f")||(fr(this,gi,"f")[e]=[]),fr(this,gi,"f")[e].push(t)}once(e,t){let n=l((...r)=>{t(...r),this.off(e,n)},"i");this.on(e,n)}off(e,t){if(!(e in fr(this,gi,"f")))return;let n=fr(this,gi,"f")[e].indexOf(t);n!==-1&&fr(this,gi,"f")[e].splice(n,1)}emit(e,...t){e in fr(this,gi,"f")&&fr(this,gi,"f")[e].forEach((n=>n(...t)))}};l(Ch,"i");var Il=Ch;Zr.EventEmitter=Il,gi=new WeakMap,Zr.default=Il});var Om="civMap3D";var zm=iv(Bm());var pr,xi,Ds,Ph=class Ph extends zm.EventEmitter{constructor(t,n){super();ee(this,pr);ee(this,xi);ee(this,Ds);H(this,xi,t),H(this,Ds,t.lockVerticalEdges),H(this,pr,n)}center(){return m(this,pr).centre()}isVisible(t,n,r=0){return m(this,pr).visible(t,n,r)}lockVerticalEdges(){return m(this,Ds)}nativeTileSize(){return m(this,xi).art.nativeTileSize()}openCity(t){let{cityOpener:n}=m(this,xi);return n.opens(t,this)?(n.open(t,this),!0):!1}playerId(){return m(this,xi).playerId}render(){m(this,pr).changed()}scale(){return m(this,xi).art.scale()}setCenter(t,n){m(this,pr).centreOn(t,n)}setLockVerticalEdges(t){H(this,Ds,t)}setZoom(){}transport(){return m(this,xi).transport}zoom(){return m(this,xi).art.zoom()}};pr=new WeakMap,xi=new WeakMap,Ds=new WeakMap,l(Ph,"MapPortal3D");var Rh=Ph,km=Rh;var rv=l((i,e)=>{let[t,n]=i.centre(0,0);return Object.fromEntries(e.directions().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return[r,[o-t,c-n]]}))},"groundDirections"),Gm=rv;var p0=0,od=1,m0=2;var So=1,Jc=2,ua=3,Ir=0,_n=1,Ti=2,ts=0,ha=1,ld=2,cd=3,ud=4,g0=5;var ns=100,x0=101,_0=102,v0=103,y0=104,b0=200,M0=201,S0=202,w0=203,hd=204,dd=205,E0=206,A0=207,T0=208,C0=209,R0=210,P0=211,I0=212,L0=213,D0=214,ic=0,rc=1,sc=2,ea=3,ac=4,oc=5,lc=6,cc=7,fd=0,N0=1,U0=2,Ci=0,pd=1,md=2,gd=3,wo=4,xd=5,_d=6,vd=7;var yd=300,is=301,da=302,Kc=303,jc=304,vi=1e3,Xn=1001,uc=1002,Ft=1003,F0=1004;var Eo=1005;var Ot=1006,Qc=1007;var In=1008;var rn=1009,bd=1010,Md=1011,fa=1012,eu=1013,ni=1014,ii=1015,Ln=1016,tu=1017,nu=1018,rs=1020,Sd=35902,wd=35899,Ed=1021,Ad=1022,Dn=1023,Zi=1026,Qi=1027,Td=1028,iu=1029,Ri=1030,ru=1031;var su=1033,Ao=33776,To=33777,Co=33778,Ro=33779,au=35840,ou=35841,lu=35842,cu=35843,uu=36196,hu=37492,du=37496,fu=37488,pu=37489,Po=37490,mu=37491,gu=37808,xu=37809,_u=37810,vu=37811,yu=37812,bu=37813,Mu=37814,Su=37815,wu=37816,Eu=37817,Au=37818,Tu=37819,Cu=37820,Ru=37821,Pu=36492,Iu=36494,Lu=36495,Du=36283,Nu=36284,Io=36285,Uu=36286;var to=2300,hc=2301,tc=2302,ed=2303,td=2400,nd=2401,id=2402;var O0=3200;var Fu=0,B0=1,ri="",Ut="srgb",no="srgb-linear",io="linear",ft="srgb";var nc=7680;var z0=519,k0=512,G0=513,V0=514,Cd=515,H0=516,W0=517,Rd=518,Pd=519,Id=35044;var Ld="300 es",qn=2e3,ta=2001;function sv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(sv,"arrayNeedsUint32");function av(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(av,"isTypedArray");function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(ro,"createElementNS");function X0(){let i=ro("canvas");return i.style.display="block",i}l(X0,"createCanvasElement");var Vm={},na=null;function so(...i){let e="THREE."+i.shift();na?na("log",e,...i):console.log(e,...i)}l(so,"log");function q0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}l(q0,"enhanceLogMessage");function Ve(...i){i=q0(i);let e="THREE."+i.shift();if(na)na("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}l(Ve,"warn");function He(...i){i=q0(i);let e="THREE."+i.shift();if(na)na("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}l(He,"error");function Qa(...i){let e=i.join(" ");e in Vm||(Vm[e]=!0,Ve(...i))}l(Qa,"warnOnce");function Y0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(Y0,"probeAsync");var $0={[ic]:ic,[sc]:lc,[ac]:ac,[ea]:oc,[rc]:rc,[lc]:sc,[cc]:cc,[oc]:ea},Od=class Od{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}};l(Od,"EventDispatcher");var yi=Od,tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ih=Math.PI/180,dc=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}l(ss,"generateUUID");function rt(i,e,t){return Math.max(e,Math.min(t,i))}l(rt,"clamp");function ov(i,e){return(i%e+e)%e}l(ov,"euclideanModulo");function Lh(i,e,t){return(1-t)*i+t*e}l(Lh,"lerp");function Z0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}l(Z0,"floorPowerOfTwo");function Ou(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}l(Ou,"getNormalizationScale");function J0(i,e){if(e.constructor===Float32Array)return i;let t=Ou(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}l(J0,"denormalize");function K0(i,e){if(e.constructor===Float32Array)return i;let t=Ou(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}l(K0,"normalize");var Nc=class Nc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};l(Nc,"Vector2"),Nc.prototype.isVector2=!0;var ke=Nc,Bd=class Bd{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3],d=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(f!==y||c!==d||u!==p||h!==g){let x=c*d+u*p+h*g+f*y;x<0&&(d=-d,p=-p,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){let S=Math.acos(x),A=Math.sin(S);_=Math.sin(_*S)/A,o=Math.sin(o*S)/A,c=c*_+d*o,u=u*_+p*o,h=h*_+g*o,f=f*_+y*o}else{c=c*_+d*o,u=u*_+p*o,h=h*_+g*o,f=f*_+y*o;let S=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=S,u*=S,h*=S,f*=S}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*p-u*d,e[t+1]=c*g+h*d+u*f-o*p,e[t+2]=u*g+h*p+o*d-c*f,e[t+3]=h*g-o*f-c*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f+d*p*g;break;case"YZX":this._x=d*h*f+u*p*g,this._y=u*p*f+d*h*g,this._z=u*h*g-d*p*f,this._w=u*h*f-d*p*g;break;case"XZY":this._x=d*h*f-u*p*g,this._y=u*p*f-d*h*g,this._z=u*h*g+d*p*f,this._w=u*h*f+d*p*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-r*o,this._w=a*h-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l(Bd,"Quaternion");var mn=Bd,Uc=class Uc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l(Uc,"Vector3"),Uc.prototype.isVector3=!0;var W=Uc,Dh=new W,Hm=new mn,Fc=class Fc{constructor(e,t,n,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u)}set(e,t,n,r,s,a,o,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],d=n[2],p=n[5],g=n[8],y=r[0],x=r[3],_=r[6],S=r[1],A=r[4],w=r[7],R=r[2],C=r[5],v=r[8];return s[0]=a*y+o*S+c*R,s[3]=a*x+o*A+c*C,s[6]=a*_+o*w+c*v,s[1]=u*y+h*S+f*R,s[4]=u*x+h*A+f*C,s[7]=u*_+h*w+f*v,s[2]=d*y+p*S+g*R,s[5]=d*x+p*A+g*C,s[8]=d*_+p*w+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*s*h+n*o*c+r*s*u-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,d=o*c-h*s,p=u*s-a*c,g=t*f+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*u-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*c-u*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return Qa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(e,t)),this}rotate(e){return Qa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-e)),this}translate(e,t){return Qa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};l(Fc,"Matrix3"),Fc.prototype.isMatrix3=!0;var We=Fc,Nh=new We,Wm=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){let i={enabled:!0,workingColorSpace:no,spaces:{},convert:l(function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},"convert"),workingToColorSpace:l(function(r,s){return this.convert(r,this.workingColorSpace,s)},"workingToColorSpace"),colorSpaceToWorking:l(function(r,s){return this.convert(r,s,this.workingColorSpace)},"colorSpaceToWorking"),getPrimaries:l(function(r){return this.spaces[r].primaries},"getPrimaries"),getTransfer:l(function(r){return r===ri?io:this.spaces[r].transfer},"getTransfer"),getToneMappingMode:l(function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},"getToneMappingMode"),getLuminanceCoefficients:l(function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},"getLuminanceCoefficients"),define:l(function(r){Object.assign(this.spaces,r)},"define"),_getMatrix:l(function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},"_getMatrix"),_getDrawingBufferColorSpace:l(function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},"_getDrawingBufferColorSpace"),_getUnpackColorSpace:l(function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},"_getUnpackColorSpace")},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[no]:{primaries:e,whitePoint:n,transfer:io,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}l(lv,"createColorManagement");var it=lv();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l($i,"SRGBToLinear");function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(Qs,"LinearToSRGB");var Ns,zd=class zd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ns===void 0&&(Ns=ro("canvas")),Ns.width=e.width,Ns.height=e.height;let r=Ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ns}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ro("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};l(zd,"ImageUtils");var fc=zd,cv=0,kd=class kd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uh(r[a].image)):s.push(Uh(r[a]))}else s=Uh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};l(kd,"TextureSource");var ia=kd;function Uh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}l(Uh,"serializeImage");var uv=0,Fh=new W,Ks=class Ks extends yi{constructor(e=Ks.DEFAULT_IMAGE,t=Ks.DEFAULT_MAPPING,n=Xn,r=Xn,s=Ot,a=In,o=Dn,c=rn,u=Ks.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ss(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};l(Ks,"Texture");var gn=Ks;gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=yd;gn.DEFAULT_ANISOTROPY=1;var Oc=class Oc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],f=c[8],d=c[1],p=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(u+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(u+1)/2,w=(p+1)/2,R=(_+1)/2,C=(h+d)/4,v=(f+y)/4,E=(g+x)/4;return A>w&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=C/n,s=v/n):w>R?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=C/r,s=E/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=v/s,r=E/s),this.set(n,r,s,t),this}let S=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(f-y)/S,this.z=(d-h)/S,this.w=Math.acos((u+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l(Oc,"Vector4"),Oc.prototype.isVector4=!0;var wt=Oc,Gd=class Gd extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=n.count;for(let s=0;s<r;s++)this.textures[s]=new gn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ia(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(Gd,"RenderTarget");var pc=Gd,Vd=class Vd extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};l(Vd,"WebGLRenderTarget");var Cn=Vd,Hd=class Hd extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};l(Hd,"DataArrayTexture");var es=Hd;var Wd=class Wd extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};l(Wd,"Data3DTexture");var mc=Wd;var eo=class eo{constructor(e,t,n,r,s,a,o,c,u,h,f,d,p,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,u,h,f,d,p,g,y,x)}set(e,t,n,r,s,a,o,c,u,h,f,d,p,g,y,x){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=d,_[3]=p,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=u,t[1]=p+g*u,t[5]=d-y*u,t[9]=-o*c,t[2]=y-d*u,t[6]=g+p*u,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d+y*o,t[4]=g*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*f,g=u*h,y=u*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=g*u-p,t[8]=d*u+y,t[1]=c*f,t[5]=y*u+d,t[9]=p*u-g,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=y-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=p*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*c,p=a*u,g=o*c,y=o*u;t[0]=c*h,t[4]=-f,t[8]=u*h,t[1]=d*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,dv)}lookAt(e,t,n){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),mr.crossVectors(n,An),mr.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),mr.crossVectors(n,An)),mr.normalize(),Ll.crossVectors(An,mr),r[0]=mr.x,r[4]=Ll.x,r[8]=An.x,r[1]=mr.y,r[5]=Ll.y,r[9]=An.y,r[2]=mr.z,r[6]=Ll.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],d=n[9],p=n[13],g=n[2],y=n[6],x=n[10],_=n[14],S=n[3],A=n[7],w=n[11],R=n[15],C=r[0],v=r[4],E=r[8],I=r[12],P=r[1],F=r[5],k=r[9],J=r[13],L=r[2],Y=r[6],Q=r[10],U=r[14],K=r[3],N=r[7],V=r[11],z=r[15];return s[0]=a*C+o*P+c*L+u*K,s[4]=a*v+o*F+c*Y+u*N,s[8]=a*E+o*k+c*Q+u*V,s[12]=a*I+o*J+c*U+u*z,s[1]=h*C+f*P+d*L+p*K,s[5]=h*v+f*F+d*Y+p*N,s[9]=h*E+f*k+d*Q+p*V,s[13]=h*I+f*J+d*U+p*z,s[2]=g*C+y*P+x*L+_*K,s[6]=g*v+y*F+x*Y+_*N,s[10]=g*E+y*k+x*Q+_*V,s[14]=g*I+y*J+x*U+_*z,s[3]=S*C+A*P+w*L+R*K,s[7]=S*v+A*F+w*Y+R*N,s[11]=S*E+A*k+w*Q+R*V,s[15]=S*I+A*J+w*U+R*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],x=e[11],_=e[15],S=c*p-u*d,A=o*p-u*f,w=o*d-c*f,R=a*p-u*h,C=a*d-c*h,v=a*f-o*h;return t*(y*S-x*A+_*w)-n*(g*S-x*R+_*C)+r*(g*A-y*R+_*v)-s*(g*w-y*C+x*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(s*h-o*c)+r*(s*u-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],x=e[14],_=e[15],S=t*o-n*a,A=t*c-r*a,w=t*u-s*a,R=n*c-r*o,C=n*u-s*o,v=r*u-s*c,E=h*y-f*g,I=h*x-d*g,P=h*_-p*g,F=f*x-d*y,k=f*_-p*y,J=d*_-p*x,L=S*J-A*k+w*F+R*P-C*I+v*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/L;return e[0]=(o*J-c*k+u*F)*Y,e[1]=(r*k-n*J-s*F)*Y,e[2]=(y*v-x*C+_*R)*Y,e[3]=(d*C-f*v-p*R)*Y,e[4]=(c*P-a*J-u*I)*Y,e[5]=(t*J-r*P+s*I)*Y,e[6]=(x*w-g*v-_*A)*Y,e[7]=(h*v-d*w+p*A)*Y,e[8]=(a*k-o*P+u*E)*Y,e[9]=(n*P-t*k-s*E)*Y,e[10]=(g*C-y*w+_*S)*Y,e[11]=(f*w-h*C-p*S)*Y,e[12]=(o*I-a*F-c*E)*Y,e[13]=(t*F-n*I+r*E)*Y,e[14]=(y*A-g*R-x*S)*Y,e[15]=(h*R-f*A+d*S)*Y,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+n,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,u=s+s,h=a+a,f=o+o,d=s*u,p=s*h,g=s*f,y=a*h,x=a*f,_=o*f,S=c*u,A=c*h,w=c*f,R=n.x,C=n.y,v=n.z;return r[0]=(1-(y+_))*R,r[1]=(p+w)*R,r[2]=(g-A)*R,r[3]=0,r[4]=(p-w)*C,r[5]=(1-(d+_))*C,r[6]=(x+S)*C,r[7]=0,r[8]=(g+A)*v,r[9]=(x-S)*v,r[10]=(1-(d+y))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Us.set(r[0],r[1],r[2]).length(),o=Us.set(r[4],r[5],r[6]).length(),c=Us.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);let u=1/a,h=1/o,f=1/c;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=qn,c=!1){let u=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===qn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ta)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=qn,c=!1){let u=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===qn)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===ta)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};l(eo,"Matrix4"),eo.prototype.isMatrix4=!0;var gt=eo,Us=new W,Qn=new gt,hv=new W(0,0,0),dv=new W(1,1,1),mr=new W,Ll=new W,An=new W,qm=new gt,Ym=new mn,Bc=class Bc{constructor(e=0,t=0,n=0,r=Bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};l(Bc,"Euler");var Rn=Bc;Rn.DEFAULT_ORDER="XYZ";var Xd=class Xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};l(Xd,"Layers");var ao=Xd,fv=0,$m=new W,Fs=new mn,Gi=new gt,Dl=new W,qa=new W,pv=new W,mv=new mn,Zm=new W(1,0,0),Jm=new W(0,1,0),Km=new W(0,0,1),jm={type:"added"},gv={type:"removed"},Os={type:"childadded",child:null},Oh={type:"childremoved",child:null},js=class js extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=js.DEFAULT_UP.clone();let e=new W,t=new Rn,n=new mn,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function a(){t.setFromQuaternion(n,void 0,!1)}l(a,"onQuaternionChange"),t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=js.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=js.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dl.copy(e):Dl.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(qa,Dl,this.up):Gi.lookAt(Dl,qa,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),Os.child=e,this.dispatchEvent(Os),Os.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gv),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){let c=[];for(let u in o){let h=o[u];delete h.metadata,c.push(h)}return c}l(a,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};l(js,"Object3D");var Zt=js;Zt.DEFAULT_UP=new W(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qd=class qd extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}};l(qd,"Group");var pn=qd,xv={type:"move"},Yd=class Yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),_=this._getHandJoint(u,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};l(Yd,"WebXRController");var ra=Yd,j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function Bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(Bh,"hue2rgb");var $d=class $d{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=ov(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bh(a,s,e+1/3),this.g=Bh(a,s,e),this.b=Bh(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=j0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return it.workingToColorSpace(nn.copy(this),e),Math.round(rt(nn.r*255,0,255))*65536+Math.round(rt(nn.g*255,0,255))*256+Math.round(rt(nn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(nn.copy(this),t);let n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,u,h=(o+a)/2;if(o===a)c=0,u=0;else{let f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ut){it.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,r=nn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(Nl);let n=Lh(gr.h,Nl.h,t),r=Lh(gr.s,Nl.s,t),s=Lh(gr.l,Nl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};l($d,"Color");var Ue=$d,nn=new Ue;Ue.NAMES=j0;var zc=class zc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};l(zc,"Fog");var oo=zc,Zd=class Zd extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};l(Zd,"Scene");var lo=Zd,ei=new W,Vi=new W,zh=new W,Hi=new W,Bs=new W,zs=new W,Qm=new W,kh=new W,Gh=new W,Vh=new W,Hh=new wt,Wh=new wt,Xh=new wt,yr=class yr{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ei.subVectors(e,t),r.cross(ei);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ei.subVectors(r,t),Vi.subVectors(n,t),zh.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(Vi),c=ei.dot(zh),u=Vi.dot(Vi),h=Vi.dot(zh),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(u*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hi.x),c.addScaledVector(a,Hi.y),c.addScaledVector(o,Hi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Hh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Hh.fromBufferAttribute(e,t),Wh.fromBufferAttribute(e,n),Xh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hh,s.x),a.addScaledVector(Wh,s.y),a.addScaledVector(Xh,s.z),a}static isFrontFacing(e,t,n,r){return ei.subVectors(n,t),Vi.subVectors(e,t),ei.cross(Vi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ei.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return yr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Bs.subVectors(r,n),zs.subVectors(s,n),kh.subVectors(e,n);let c=Bs.dot(kh),u=zs.dot(kh);if(c<=0&&u<=0)return t.copy(n);Gh.subVectors(e,r);let h=Bs.dot(Gh),f=zs.dot(Gh);if(h>=0&&f<=h)return t.copy(r);let d=c*f-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Bs,a);Vh.subVectors(e,s);let p=Bs.dot(Vh),g=zs.dot(Vh);if(g>=0&&p<=g)return t.copy(s);let y=p*u-c*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(n).addScaledVector(zs,o);let x=h*g-p*f;if(x<=0&&f-h>=0&&p-g>=0)return Qm.subVectors(s,r),o=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(Qm,o);let _=1/(x+y+d);return a=y*_,o=d*_,t.copy(n).addScaledVector(Bs,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};l(yr,"Triangle");var qi=yr,Jd=class Jd{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),Fl.subVectors(this.max,Ya),ks.subVectors(e.a,Ya),Gs.subVectors(e.b,Ya),Vs.subVectors(e.c,Ya),xr.subVectors(Gs,ks),_r.subVectors(Vs,Gs),Jr.subVectors(ks,Vs);let t=[0,-xr.z,xr.y,0,-_r.z,_r.y,0,-Jr.z,Jr.y,xr.z,0,-xr.x,_r.z,0,-_r.x,Jr.z,0,-Jr.x,-xr.y,xr.x,0,-_r.y,_r.x,0,-Jr.y,Jr.x,0];return!qh(t,ks,Gs,Vs,Fl)||(t=[1,0,0,0,1,0,0,0,1],!qh(t,ks,Gs,Vs,Fl))?!1:(Ol.crossVectors(xr,_r),t=[Ol.x,Ol.y,Ol.z],qh(t,ks,Gs,Vs,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};l(Jd,"Box3");var Mr=Jd,Wi=[new W,new W,new W,new W,new W,new W,new W,new W],ti=new W,Ul=new Mr,ks=new W,Gs=new W,Vs=new W,xr=new W,_r=new W,Jr=new W,Ya=new W,Fl=new W,Ol=new W,Kr=new W;function qh(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Kr.fromArray(i,s);let o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),u=t.dot(Kr),h=n.dot(Kr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}l(qh,"satForAxes");var Yi=_v();function _v(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let u=c-127;u<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(n[c]=1024>>-u-14,n[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(n[c]=u+15<<10,n[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}l(_v,"_generateTables");function vv(i){Math.abs(i)>65504&&Ve("DataUtils.toHalfFloat(): Value out of range."),i=rt(i,-65504,65504),Yi.floatView[0]=i;let e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}l(vv,"toHalfFloat");function yv(i){let e=i>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(i&1023)]+Yi.exponentTable[e],Yi.floatView[0]}l(yv,"fromHalfFloat");var Kd=class Kd{static toHalfFloat(e){return vv(e)}static fromHalfFloat(e){return yv(e)}};l(Kd,"DataUtils");var bi=Kd,Nt=new W,Bl=new ke,bv=0,jd=class jd extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Id,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=e!==void 0?Ou(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):J0(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):K0(e,this.array)}};l(jd,"BufferAttribute");var _t=jd;var Qd=class Qd extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};l(Qd,"Uint16BufferAttribute");var co=Qd;var ef=class ef extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};l(ef,"Uint32BufferAttribute");var uo=ef;var tf=class tf extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}};l(tf,"Float32BufferAttribute");var Pt=tf,Mv=new Mr,$a=new W,Yh=new W,nf=class nf{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);let t=$a.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($a,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(Yh)),this.expandByPoint($a.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};l(nf,"Sphere");var sa=nf,Sv=0,Wn=new gt,$h=new Zt,Hs=new W,Tn=new Mr,Za=new Mr,Xt=new W,kc=class kc extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?uo:co)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Za.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Tn.min,Za.min),Tn.expandByPoint(Xt),Xt.addVectors(Tn.max,Za.max),Tn.expandByPoint(Xt)):(Tn.expandByPoint(Za.min),Tn.expandByPoint(Za.max))}Tn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Xt.fromBufferAttribute(o,u),c&&(Hs.fromBufferAttribute(e,u),Xt.add(Hs)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],u=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new W,c[I]=new W;let h=new W,f=new W,d=new W,p=new ke,g=new ke,y=new ke,x=new W,_=new W;function S(I,P,F){u[I]=u[P]=u[F]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,F),p.fromBufferAttribute(s,I),g.fromBufferAttribute(s,P),y.fromBufferAttribute(s,F),f.sub(h),d.sub(h),g.sub(p),y.sub(p);let k=1/(g.x*y.y-y.x*g.y);isFinite(k)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(k),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(k),o[I].add(x),o[P].add(x),o[F].add(x),c[I].add(_),c[P].add(_),c[F].add(_))}l(S,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,P=A.length;I<P;++I){let F=A[I],k=F.start,J=F.count;for(let L=k,Y=k+J;L<Y;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let w=new W,R=new W,C=new W,v=new W;function E(I){C.fromBufferAttribute(r,I),v.copy(C);let P=o[I];w.copy(P),w.sub(C.multiplyScalar(C.dot(P))).normalize(),R.crossVectors(v,P);let k=R.dot(c[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,k)}l(E,"handleVertex");for(let I=0,P=n.count;I<P;++I)u[I]&&E(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new W,s=new W,a=new W,o=new W,c=new W,u=new W,h=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){let u=o.array,h=o.itemSize,f=o.normalized,d=new u.constructor(c.length*h),p=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let _=0;_<h;_++)d[g++]=u[p++]}return new _t(d,h,f)}if(l(e,"convertBufferAttribute"),this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new kc,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],u=e(c,n);t.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){let d=u[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){let p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],f=s[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let u=0,h=a.length;u<h;u++){let f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};l(kc,"BufferGeometry");var Bt=kc,rf=class rf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Id,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=e0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=e0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};l(rf,"InterleavedBuffer");var ho=rf;function e0(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ss()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}l(e0,"getArrayKey");var dn=new W,Gc=class Gc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?Ou(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):J0(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):K0(e,this.data.array)}};l(Gc,"InterleavedBufferAttribute");var aa=Gc,Zh=new W,wv=new W,Ev=new We,sf=class sf{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zh.subVectors(n,t).cross(wv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ev.getNormalMatrix(e),r=this.coplanarPoint(Zh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};l(sf,"Plane");var bn=sf,Av=0,af=class af extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=ha,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nc,this.stencilZFail=nc,this.stencilZPass=nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(l(r,"extractFromCache"),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};l(af,"Material");var Ji=af,of=class of extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};l(of,"SpriteMaterial");var Sr=of,Ws,Ja=new W,Xs=new W,qs=new W,Ys=new ke,Ka=new ke,Q0=new gt,zl=new W,ja=new W,kl=new W,t0=new ke,Jh=new ke,n0=new ke,lf=class lf extends Zt{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ho(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new aa(n,3,0,!1)),Ws.setAttribute("uv",new aa(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new ke(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),Q0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Gl(zl.set(-.5,-.5,0),qs,a,Xs,r,s),Gl(ja.set(.5,-.5,0),qs,a,Xs,r,s),Gl(kl.set(.5,.5,0),qs,a,Xs,r,s),t0.set(0,0),Jh.set(1,0),n0.set(1,1);let o=e.ray.intersectTriangle(zl,ja,kl,!1,Ja);if(o===null&&(Gl(ja.set(-.5,.5,0),qs,a,Xs,r,s),Jh.set(0,1),o=e.ray.intersectTriangle(zl,kl,ja,!1,Ja),o===null))return;let c=e.ray.origin.distanceTo(Ja);c<e.near||c>e.far||t.push({distance:c,point:Ja.clone(),uv:qi.getInterpolation(Ja,zl,ja,kl,t0,Jh,n0,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};l(lf,"Sprite");var oa=lf;function Gl(i,e,t,n,r,s){Ys.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ka.x=s*Ys.x-r*Ys.y,Ka.y=r*Ys.x+s*Ys.y):Ka.copy(Ys),i.copy(e),i.x+=Ka.x,i.y+=Ka.y,i.applyMatrix4(Q0)}l(Gl,"transformVertex");var Xi=new W,Kh=new W,Vl=new W,Hl=new W,cf=class cf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kh.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Hl.copy(this.origin).sub(Kh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Vl),o=Hl.dot(this.direction),c=-Hl.dot(Vl),u=Hl.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kh).addScaledVector(Vl,d),p}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),r=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,r,s){let a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,x=t.z-a.z,_=n.x-a.x,S=n.y-a.y,A=n.z-a.z,w=Math.abs(c),R=Math.abs(u),C=Math.abs(h),v,E,I,P,F,k,J,L,Y,Q,U,K;if(w>=R&&w>=C?(I=c,k=f,Y=g,K=_,c>=0?(v=u,E=h,P=d,F=p,J=y,L=x,Q=S,U=A):(v=h,E=u,P=p,F=d,J=x,L=y,Q=A,U=S)):R>=C?(I=u,k=d,Y=y,K=S,u>=0?(v=h,E=c,P=p,F=f,J=x,L=g,Q=A,U=_):(v=c,E=h,P=f,F=p,J=g,L=x,Q=_,U=A)):(I=h,k=p,Y=x,K=A,h>=0?(v=c,E=u,P=f,F=d,J=g,L=y,Q=_,U=S):(v=u,E=c,P=d,F=f,J=y,L=g,Q=S,U=_)),I===0)return null;let N=v/I,V=E/I,z=1/I,ae=P-N*k,ce=F-V*k,X=J-N*Y,he=L-V*Y,te=Q-N*K,ue=U-V*K,re=te*he-ue*X,Pe=ae*ue-ce*te,Ge=X*ce-he*ae;if(r){if(re<0||Pe<0||Ge<0)return null}else if((re<0||Pe<0||Ge<0)&&(re>0||Pe>0||Ge>0))return null;let Te=re+Pe+Ge;if(Te===0)return null;let Je=z*(re*k+Pe*Y+Ge*K);return(Te>0?Je<0:Je>0)?null:this.at(Je/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};l(cf,"Ray");var gc=cf,uf=class uf extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};l(uf,"MeshBasicMaterial");var xc=uf,i0=new gt,jr=new gc,Wl=new sa,r0=new W,Xl=new W,ql=new W,Yl=new W,jh=new W,$l=new W,s0=new W,Zl=new W,hf=class hf extends Zt{constructor(e=new Bt,t=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){$l.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=o[c],f=s[c];h!==0&&(jh.fromBufferAttribute(f,e),a?$l.addScaledVector(jh,h):$l.addScaledVector(jh.sub(t),h))}t.add($l)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Wl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Wl,r0)===null||jr.origin.distanceToSquared(r0)>(e.far-e.near)**2))&&(i0.copy(s).invert(),jr.copy(e.ray).applyMatrix4(i0),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],S=Math.max(x.start,p.start),A=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let w=S,R=A;w<R;w+=3){let C=o.getX(w),v=o.getX(w+1),E=o.getX(w+2);r=Jl(this,_,e,n,u,h,f,C,v,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){let S=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);r=Jl(this,a,e,n,u,h,f,S,A,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let x=d[g],_=a[x.materialIndex],S=Math.max(x.start,p.start),A=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let w=S,R=A;w<R;w+=3){let C=w,v=w+1,E=w+2;r=Jl(this,_,e,n,u,h,f,C,v,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){let S=x,A=x+1,w=x+2;r=Jl(this,a,e,n,u,h,f,S,A,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};l(hf,"Mesh");var Et=hf;function Tv(i,e,t,n,r,s,a,o){let c;if(e.side===_n?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ir,o),c===null)return null;Zl.copy(o),Zl.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Zl);return u<t.near||u>t.far?null:{distance:u,point:Zl.clone(),object:i}}l(Tv,"checkIntersection$1");function Jl(i,e,t,n,r,s,a,o,c,u){i.getVertexPosition(o,Xl),i.getVertexPosition(c,ql),i.getVertexPosition(u,Yl);let h=Tv(i,e,t,n,Xl,ql,Yl,s0);if(h){let f=new W;qi.getBarycoord(s0,Xl,ql,Yl,f),r&&(h.uv=qi.getInterpolatedAttribute(r,o,c,u,f,new ke)),s&&(h.uv1=qi.getInterpolatedAttribute(s,o,c,u,f,new ke)),a&&(h.normal=qi.getInterpolatedAttribute(a,o,c,u,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:u,normal:new W,materialIndex:0};qi.getNormal(Xl,ql,Yl,d.normal),h.face=d,h.barycoord=f}return h}l(Jl,"checkGeometryIntersection");var df=class df extends gn{constructor(e=null,t=1,n=1,r,s,a,o,c,u=Ft,h=Ft,f,d){super(null,a,o,c,u,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};l(df,"DataTexture");var la=df;var ff=class ff extends _t{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};l(ff,"InstancedBufferAttribute");var Ki=ff;var Qr=new sa,Cv=new ke(.5,.5),Kl=new W,pf=class pf{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,a=new bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],f=s[5],d=s[6],p=s[7],g=s[8],y=s[9],x=s[10],_=s[11],S=s[12],A=s[13],w=s[14],R=s[15];if(r[0].setComponents(u-a,p-h,_-g,R-S).normalize(),r[1].setComponents(u+a,p+h,_+g,R+S).normalize(),r[2].setComponents(u+o,p+f,_+y,R+A).normalize(),r[3].setComponents(u-o,p-f,_-y,R-A).normalize(),n)r[4].setComponents(c,d,x,w).normalize(),r[5].setComponents(u-c,p-d,_-x,R-w).normalize();else if(r[4].setComponents(u-c,p-d,_-x,R-w).normalize(),t===qn)r[5].setComponents(u+c,p+d,_+x,R+w).normalize();else if(t===ta)r[5].setComponents(c,d,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);let t=Cv.distanceTo(e.center);return Qr.radius=.7071067811865476+t,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};l(pf,"Frustum");var wr=pf,a0=new gt,Vc=class Vc{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];a0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new wr),n[r].setFromProjectionMatrix(a0,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new wr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Vc().copy(this)}};l(Vc,"FrustumArray");var _c=Vc;var mf=class mf extends gn{constructor(e=[],t=is,n,r,s,a,o,c,u,h){super(e,t,n,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};l(mf,"CubeTexture");var fo=mf,gf=class gf extends gn{constructor(e,t,n,r,s,a,o,c,u){super(e,t,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}};l(gf,"CanvasTexture");var Er=gf;var xf=class xf extends gn{constructor(e,t,n=ni,r,s,a,o=Ft,c=Ft,u,h=Zi,f=1){if(h!==Zi&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,r,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};l(xf,"DepthTexture");var ji=xf,_f=class _f extends ji{constructor(e,t=ni,n=is,r,s,a=Ft,o=Ft,c,u=Zi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};l(_f,"CubeDepthTexture");var po=_f,vf=class vf extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};l(vf,"ExternalTexture");var mo=vf,Hc=class Hc extends Bt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],u=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function g(y,x,_,S,A,w,R,C,v,E,I){let P=w/v,F=R/E,k=w/2,J=R/2,L=C/2,Y=v+1,Q=E+1,U=0,K=0,N=new W;for(let V=0;V<Q;V++){let z=V*F-J;for(let ae=0;ae<Y;ae++){let ce=ae*P-k;N[y]=ce*S,N[x]=z*A,N[_]=L,u.push(N.x,N.y,N.z),N[y]=0,N[x]=0,N[_]=C>0?1:-1,h.push(N.x,N.y,N.z),f.push(ae/v),f.push(1-V/E),U+=1}}for(let V=0;V<E;V++)for(let z=0;z<v;z++){let ae=d+z+Y*V,ce=d+z+Y*(V+1),X=d+(z+1)+Y*(V+1),he=d+(z+1)+Y*V;c.push(ae,ce,he),c.push(ce,X,he),K+=6}o.addGroup(p,K,I),p+=K,d+=U}l(g,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};l(Hc,"BoxGeometry");var Mi=Hc;var Wc=class Wc extends Bt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let u=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],d=[],p=[],g=0,y=[],x=n/2,_=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(p,2));function S(){let w=new W,R=new W,C=0,v=(t-e)/n;for(let E=0;E<=s;E++){let I=[],P=E/s,F=P*(t-e)+e;for(let k=0;k<=r;k++){let J=k/r,L=J*c+o,Y=Math.sin(L),Q=Math.cos(L);R.x=F*Y,R.y=-P*n+x,R.z=F*Q,f.push(R.x,R.y,R.z),w.set(Y,v,Q).normalize(),d.push(w.x,w.y,w.z),p.push(J,1-P),I.push(g++)}y.push(I)}for(let E=0;E<r;E++)for(let I=0;I<s;I++){let P=y[I][E],F=y[I+1][E],k=y[I+1][E+1],J=y[I][E+1];(e>0||I!==0)&&(h.push(P,F,J),C+=3),(t>0||I!==s-1)&&(h.push(F,k,J),C+=3)}u.addGroup(_,C,0),_+=C}l(S,"generateTorso");function A(w){let R=g,C=new ke,v=new W,E=0,I=w===!0?e:t,P=w===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,x*P,0),d.push(0,P,0),p.push(.5,.5),g++;let F=g;for(let k=0;k<=r;k++){let L=k/r*c+o,Y=Math.cos(L),Q=Math.sin(L);v.x=I*Q,v.y=x*P,v.z=I*Y,f.push(v.x,v.y,v.z),d.push(0,P,0),C.x=Y*.5+.5,C.y=Q*.5*P+.5,p.push(C.x,C.y),g++}for(let k=0;k<r;k++){let J=R+k,L=F+k;w===!0?h.push(L,L+1,J):h.push(L+1,L,J),E+=3}u.addGroup(_,E,w===!0?1:2),_+=E}l(A,"generateCap")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Wc,"CylinderGeometry");var Si=Wc,Xc=class Xc extends Si{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Xc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};l(Xc,"ConeGeometry");var wi=Xc;var qc=class qc extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,h=c+1,f=e/o,d=t/c,p=[],g=[],y=[],x=[];for(let _=0;_<h;_++){let S=_*d-a;for(let A=0;A<u;A++){let w=A*f-s;g.push(w,-S,0),y.push(0,0,1),x.push(A/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){let A=S+u*_,w=S+u*(_+1),R=S+1+u*(_+1),C=S+1+u*_;p.push(A,w,C),p.push(w,R,C)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}};l(qc,"PlaneGeometry");var Ei=qc;var Yc=class Yc extends Bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),u=0,h=[],f=new W,d=new W,p=[],g=[],y=[],x=[];for(let _=0;_<=n;_++){let S=[],A=_/n,w=a+A*o,R=e*Math.cos(w),C=Math.sqrt(e*e-R*R),v=0;_===0&&a===0?v=.5/t:_===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let I=E/t,P=r+I*s;f.x=-C*Math.cos(P),f.y=R,f.z=C*Math.sin(P),g.push(f.x,f.y,f.z),d.copy(f).normalize(),y.push(d.x,d.y,d.z),x.push(I+v,1-A),S.push(u++)}h.push(S)}for(let _=0;_<n;_++)for(let S=0;S<t;S++){let A=h[_][S+1],w=h[_][S],R=h[_+1][S],C=h[_+1][S+1];(_!==0||a>0)&&p.push(A,w,C),(_!==n-1||c<Math.PI)&&p.push(w,R,C)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(y,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};l(Yc,"SphereGeometry");var Ar=Yc;var $c=class $c extends Bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let c=[],u=[],h=[],f=[],d=new W,p=new W,g=new W;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let _=0;_<=r;_++){let S=_/r*s;p.x=(e+t*Math.cos(x))*Math.cos(S),p.y=(e+t*Math.cos(x))*Math.sin(S),p.z=t*Math.sin(x),u.push(p.x,p.y,p.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(p,d).normalize(),h.push(g.x,g.y,g.z),f.push(_/r),f.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=r;x++){let _=(r+1)*y+x-1,S=(r+1)*(y-1)+x-1,A=(r+1)*(y-1)+x,w=(r+1)*y+x;c.push(_,S,w),c.push(S,A,w)}this.setIndex(c),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};l($c,"TorusGeometry");var Tr=$c;function as(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(o0(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(o0(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}l(as,"cloneUniforms");function sn(i){let e={};for(let t=0;t<i.length;t++){let n=as(i[t]);for(let r in n)e[r]=n[r]}return e}l(sn,"mergeUniforms");function o0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}l(o0,"isThreeObject");function Rv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(Rv,"cloneUniformsGroups");function Dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}l(Dd,"getUnlitUniformColorSpace");var os={clone:as,merge:sn},Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yf=class yf extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Rv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(r.value);break;case"v2":this.uniforms[n].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};l(yf,"ShaderMaterial");var xn=yf,bf=class bf extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};l(bf,"RawShaderMaterial");var vc=bf,Mf=class Mf extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};l(Mf,"MeshStandardMaterial");var Ai=Mf;var Sf=class Sf extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};l(Sf,"MeshDepthMaterial");var yc=Sf,wf=class wf extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};l(wf,"MeshDistanceMaterial");var bc=wf;function $s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l($s,"convertArray");function jl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}l(jl,"hasTangents");var Ef=class Ef{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}};l(Ef,"Interpolant");var Cr=Ef,Af=class Af extends Cr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nd:s=e,o=2*t-n;break;case id:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nd:a=e,c=2*n-t;break;case id:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,x=y*g,_=-d*x+2*d*y-d*g,S=(1+d)*x+(-1.5-2*d)*y+(-.5+d)*g+1,A=(-1-p)*x+(1.5+p)*y+.5*g,w=p*x-p*y;for(let R=0;R!==o;++R)s[R]=_*a[h+R]+S*a[u+R]+A*a[c+R]+w*a[f+R];return s}};l(Af,"CubicInterpolant");var Mc=Af,Tf=class Tf extends Cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=(n-t)/(r-t),f=1-h;for(let d=0;d!==o;++d)s[d]=a[u+d]*f+a[c+d]*h;return s}};l(Tf,"LinearInterpolant");var Sc=Tf,Cf=class Cf extends Cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}};l(Cf,"DiscreteInterpolant");var wc=Cf,Rf=class Rf extends Cr{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,u=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-t)/(r-t),y=1-g;for(let x=0;x!==o;++x)s[x]=a[u+x]*y+a[c+x]*g;return s}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[u+g],x=a[c+g],_=p*d+g*2,S=f[_],A=f[_+1],w=e*d+g*2,R=h[w],C=h[w+1],v=Dv(n,t,S,R,r);s[g]=eg(v,y,A,C,x)}return s}};l(Rf,"BezierInterpolant");var Ec=Rf;function eg(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}l(eg,"cubicBezier");function Lv(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}l(Lv,"cubicBezierSlope");function Dv(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){let o=eg(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;let c=Lv(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}l(Dv,"solveBezierParameter");var Pf=class Pf{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),jl(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ec(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case hc:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break;case ed:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return hc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return ed}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;jl(this.settings)&&(l0(this.settings.inTangents,e),l0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;jl(this.settings)&&(c0(this.settings.inTangents,e),c0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&av(r))for(let o=0,c=r.length;o!==c;++o){let u=r[o];if(isNaN(u)){He("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tc,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,u=e[o],h=e[o+1];if(u!==h&&(o!==1||u!==e[0]))if(r)c=!0;else{let f=o*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,u=0;u!==n;++u)t[c+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,jl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};l(Pf,"KeyframeTrack");var Pn=Pf;function l0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}l(l0,"shiftTangentTimes");function c0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}l(c0,"scaleTangentTimes");Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=hc;var If=class If extends Pn{constructor(e,t,n){super(e,t,n)}};l(If,"BooleanKeyframeTrack");var Rr=If;Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=to;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lf=class Lf extends Pn{constructor(e,t,n,r){super(e,t,n,r)}};l(Lf,"ColorKeyframeTrack");var Ac=Lf;Ac.prototype.ValueTypeName="color";var Df=class Df extends Pn{constructor(e,t,n,r){super(e,t,n,r)}};l(Df,"NumberKeyframeTrack");var Tc=Df;Tc.prototype.ValueTypeName="number";var Nf=class Nf extends Cr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),u=e*o;for(let h=u+o;u!==h;u+=4)mn.slerpFlat(s,0,a,u-o,a,u,c);return s}};l(Nf,"QuaternionLinearInterpolant");var Cc=Nf,Uf=class Uf extends Pn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};l(Uf,"QuaternionKeyframeTrack");var go=Uf;go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var Ff=class Ff extends Pn{constructor(e,t,n){super(e,t,n)}};l(Ff,"StringKeyframeTrack");var Pr=Ff;Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=to;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Of=class Of extends Pn{constructor(e,t,n,r){super(e,t,n,r)}};l(Of,"VectorKeyframeTrack");var Rc=Of;Rc.prototype.ValueTypeName="vector";var Bf=class Bf{constructor(e,t,n){let r=this,s=!1,a=0,o=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){let f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){let p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};l(Bf,"LoadingManager");var Pc=Bf,tg=new Pc,zf=class zf{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};l(zf,"Loader");var Ic=zf;Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var kf=class kf extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};l(kf,"Light");var xo=kf,Gf=class Gf extends xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};l(Gf,"HemisphereLight");var _o=Gf,Qh=new gt,u0=new W,h0=new W,Vf=class Vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;u0.setFromMatrixPosition(e.matrixWorld),t.position.copy(u0),h0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(h0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};l(Vf,"LightShadow");var Lc=Vf,Ql=new W,ec=new mn,_i=new W,Hf=class Hf extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ql,ec,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};l(Hf,"Camera");var vo=Hf,vr=new W,d0=new ke,f0=new ke,Wf=class Wf extends vo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,d0,f0),t.subVectors(f0,d0)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ih*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};l(Wf,"PerspectiveCamera");var fn=Wf;var Xf=class Xf extends vo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};l(Xf,"OrthographicCamera");var yo=Xf,qf=class qf extends Lc{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};l(qf,"DirectionalLightShadow");var rd=qf,Yf=class Yf extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new rd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};l(Yf,"DirectionalLight");var bo=Yf;var $f=class $f extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};l($f,"InstancedBufferGeometry");var Mo=$f;var Zs=-90,Js=1,Zf=class Zf extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fn(Zs,Js,e,t);r.layers=this.layers,this.add(r);let s=new fn(Zs,Js,e,t);s.layers=this.layers,this.add(s);let a=new fn(Zs,Js,e,t);a.layers=this.layers,this.add(a);let o=new fn(Zs,Js,e,t);o.layers=this.layers,this.add(o);let c=new fn(Zs,Js,e,t);c.layers=this.layers,this.add(c);let u=new fn(Zs,Js,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let u of t)this.remove(u);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};l(Zf,"CubeCamera");var ca=Zf,Jf=class Jf extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};l(Jf,"ArrayCamera");var Dc=Jf;var Nd="\\[\\]\\.:\\/",Nv=new RegExp("["+Nd+"]","g"),Ud="[^"+Nd+"]",Uv="[^"+Nd.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",Ud),Ov=/(WCOD+)?/.source.replace("WCOD",Uv),Bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ud),zv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ud),kv=new RegExp("^"+Fv+Ov+Bv+zv+"$"),Gv=["material","materials","bones","map"],Kf=class Kf{constructor(e,t,n){let r=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};l(Kf,"Composite");var sd=Kf,br=class br{constructor(e,t,n){this.path=t,this.parsedPath=n||br.parseTrackName(t),this.node=br.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new br.Composite(e,t,n):new br(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nv,"")}static parseTrackName(e){let t=kv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Gv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=br.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[r];if(a===void 0){let u=t.nodeName;He("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};l(br,"PropertyBinding");var yt=br;yt.Composite=sd;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gA=new Float32Array(1);var Zc=class Zc{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};l(Zc,"Matrix2"),Zc.prototype.isMatrix2=!0;var ad=Zc;function Fd(i,e,t,n){let r=Vv(n);switch(t){case Ed:return i*e;case Td:return i*e/r.components*r.byteLength;case iu:return i*e/r.components*r.byteLength;case Ri:return i*e*2/r.components*r.byteLength;case ru:return i*e*2/r.components*r.byteLength;case Ad:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case su:return i*e*4/r.components*r.byteLength;case Ao:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ou:case cu:return Math.max(i,16)*Math.max(e,8)/4;case au:case lu:return Math.max(i,8)*Math.max(e,8)/2;case uu:case hu:case fu:case pu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case du:case Po:case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pu:case Iu:case Lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Du:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Io:case Uu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(Fd,"getByteLength");function Vv(i){switch(i){case rn:case bd:return{byteLength:1,components:1};case fa:case Md:case Ln:return{byteLength:2,components:1};case tu:case nu:return{byteLength:2,components:4};case ni:case eu:case ii:return{byteLength:4,components:1};case Sd:case wd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}l(Vv,"getTextureTypeByteLength");typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sg(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i!==null&&i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(Sg,"WebGLAnimation");function $v(i){let e=new WeakMap;function t(o,c){let u=o.array,h=o.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}l(t,"createBuffer");function n(o,c,u){let h=c.array,f=c.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}l(n,"updateBuffer");function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}l(r,"get");function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}l(s,"remove");function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return l(a,"update"),{get:r,remove:s,update:a}}l($v,"WebGLAttributes");var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
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
#endif`,Kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ty=`#ifdef USE_AOMAP
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
#endif`,ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iy=`#ifdef USE_BATCHING
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
#endif`,ry=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ly=`#ifdef USE_IRIDESCENCE
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
#endif`,cy=`#ifdef USE_BUMPMAP
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_y=`#define PI 3.141592653589793
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
} // validated`,vy=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ky=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#endif`,qy=`uniform sampler2D dfgLUT;
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
}`,Yy=`
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rb=`#if defined( USE_POINTS_UV )
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
#endif`,sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lb=`#if defined( USE_MORPHCOLORS )
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
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
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
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Db=`float getShadowMask() {
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
}`,Nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ob=`#ifdef USE_SKINNING
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
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform float backgroundBlurriness;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`#include <common>
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
}`,tM=`#if DEPTH_PACKING == 3200
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
}`,nM=`#define DISTANCE
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
}`,iM=`#define DISTANCE
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,pM=`#define NORMAL
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
}`,mM=`#define NORMAL
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
}`,gM=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,_M=`#define STANDARD
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
}`,vM=`#define STANDARD
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
}`,yM=`#define TOON
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
}`,bM=`#define TOON
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
}`,MM=`uniform float size;
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
}`,SM=`uniform vec3 diffuse;
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
}`,wM=`#include <common>
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
}`,EM=`uniform vec3 color;
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
}`,AM=`uniform float rotation;
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
}`,TM=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Zv,alphahash_pars_fragment:Jv,alphamap_fragment:Kv,alphamap_pars_fragment:jv,alphatest_fragment:Qv,alphatest_pars_fragment:ey,aomap_fragment:ty,aomap_pars_fragment:ny,batching_pars_vertex:iy,batching_vertex:ry,begin_vertex:sy,beginnormal_vertex:ay,bsdfs:oy,iridescence_fragment:ly,bumpmap_pars_fragment:cy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:hy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:xy,common:_y,defaultnormal_vertex:vy,displacementmap_pars_vertex:yy,displacementmap_vertex:by,emissivemap_fragment:My,emissivemap_pars_fragment:Sy,colorspace_fragment:wy,colorspace_pars_fragment:Ey,envmap_fragment:Ay,envmap_common_pars_fragment:Ty,envmap_pars_fragment:Cy,envmap_pars_vertex:Ry,envmap_physical_pars_fragment:ky,envmap_vertex:Py,fog_vertex:Iy,fog_pars_vertex:Ly,fog_fragment:Dy,fog_pars_fragment:Ny,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:Fy,lights_lambert_fragment:Oy,lights_lambert_pars_fragment:By,lights_pars_begin:zy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Xy,lights_physical_pars_fragment:qy,lights_fragment_begin:Yy,lights_fragment_maps:$y,lights_fragment_end:Zy,lightprobes_pars_fragment:Jy,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:jy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:eb,map_fragment:tb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:rb,metalnessmap_fragment:sb,metalnessmap_pars_fragment:ab,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:cb,morphtarget_pars_vertex:ub,morphtarget_vertex:hb,normal_fragment_begin:db,normal_fragment_maps:fb,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:vb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:bb,opaque_fragment:Mb,packing:Sb,premultiplied_alpha_fragment:wb,project_vertex:Eb,dithering_fragment:Ab,dithering_pars_fragment:Tb,roughnessmap_fragment:Cb,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:Pb,shadowmap_pars_vertex:Ib,shadowmap_vertex:Lb,shadowmask_pars_fragment:Db,skinbase_vertex:Nb,skinning_pars_vertex:Ub,skinning_vertex:Fb,skinnormal_vertex:Ob,specularmap_fragment:Bb,specularmap_pars_fragment:zb,tonemapping_fragment:kb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:Hb,uv_pars_fragment:Wb,uv_pars_vertex:Xb,uv_vertex:qb,worldpos_vertex:Yb,background_vert:$b,background_frag:Zb,backgroundCube_vert:Jb,backgroundCube_frag:Kb,cube_vert:jb,cube_frag:Qb,depth_vert:eM,depth_frag:tM,distance_vert:nM,distance_frag:iM,equirect_vert:rM,equirect_frag:sM,linedashed_vert:aM,linedashed_frag:oM,meshbasic_vert:lM,meshbasic_frag:cM,meshlambert_vert:uM,meshlambert_frag:hM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:pM,meshnormal_frag:mM,meshphong_vert:gM,meshphong_frag:xM,meshphysical_vert:_M,meshphysical_frag:vM,meshtoon_vert:yM,meshtoon_frag:bM,points_vert:MM,points_frag:SM,shadow_vert:wM,shadow_frag:EM,sprite_vert:AM,sprite_frag:TM},we={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ii={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ii.physical={uniforms:sn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Bu={r:0,b:0,g:0},CM=new gt,wg=new We;wg.set(-1,0,0,0,1,0,0,0,1);function RM(i,e,t,n,r,s){let a=new Ue(0),o=r===!0?0:1,c,u,h=null,f=0,d=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let w=S.backgroundBlurriness>0;A=e.get(A,w)}return A}l(p,"getBackground");function g(S){let A=!1,w=p(S);w===null?x(a,o):w&&w.isColor&&(x(w,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(g,"render");function y(S,A){let w=p(A);w&&w.isCubeTexture?(u===void 0&&(u=new Et(new Mi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:as(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),n.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(wg),u.material.toneMapped=it.getTransfer(w.colorSpace)!==ft,(h!==w||f!==w.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Et(new Ei(2,2),new xn({name:"BackgroundMaterial",uniforms:as(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=it.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}l(y,"addToRenderList");function x(S,A){S.getRGB(Bu,Dd(i)),t.buffers.color.setClear(Bu.r,Bu.g,Bu.b,A,s)}l(x,"setClear");function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return l(_,"dispose"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(S,A=1){a.set(S),o=A,x(a,o)},"setClearColor"),getClearAlpha:l(function(){return o},"getClearAlpha"),setClearAlpha:l(function(S){o=S,x(a,o)},"setClearAlpha"),render:g,addToRenderList:y,dispose:_}}l(RM,"WebGLBackground");function PM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,a=!1;function o(F,k,J,L,Y){let Q=!1,U=f(F,L,J,k);s!==U&&(s=U,u(s.object)),Q=p(F,L,J,Y),Q&&g(F,L,J,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,w(F,k,J,L),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}l(o,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(F){return i.bindVertexArray(F)}l(u,"bindVertexArrayObject");function h(F){return i.deleteVertexArray(F)}l(h,"deleteVertexArrayObject");function f(F,k,J,L){let Y=L.wireframe===!0,Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);let U=F.isInstancedMesh===!0?F.id:0,K=Q[U];K===void 0&&(K={},Q[U]=K);let N=K[J.id];N===void 0&&(N={},K[J.id]=N);let V=N[Y];return V===void 0&&(V=d(c()),N[Y]=V),V}l(f,"getBindingState");function d(F){let k=[],J=[],L=[];for(let Y=0;Y<t;Y++)k[Y]=0,J[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:L,object:F,attributes:{},index:null}}l(d,"createBindingState");function p(F,k,J,L){let Y=s.attributes,Q=k.attributes,U=0,K=J.getAttributes();for(let N in K)if(K[N].location>=0){let z=Y[N],ae=Q[N];if(ae===void 0&&(N==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),N==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),z===void 0||z.attribute!==ae||ae&&z.data!==ae.data)return!0;U++}return s.attributesNum!==U||s.index!==L}l(p,"needsUpdate");function g(F,k,J,L){let Y={},Q=k.attributes,U=0,K=J.getAttributes();for(let N in K)if(K[N].location>=0){let z=Q[N];z===void 0&&(N==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),N==="instanceColor"&&F.instanceColor&&(z=F.instanceColor));let ae={};ae.attribute=z,z&&z.data&&(ae.data=z.data),Y[N]=ae,U++}s.attributes=Y,s.attributesNum=U,s.index=L}l(g,"saveCache");function y(){let F=s.newAttributes;for(let k=0,J=F.length;k<J;k++)F[k]=0}l(y,"initAttributes");function x(F){_(F,0)}l(x,"enableAttribute");function _(F,k){let J=s.newAttributes,L=s.enabledAttributes,Y=s.attributeDivisors;J[F]=1,L[F]===0&&(i.enableVertexAttribArray(F),L[F]=1),Y[F]!==k&&(i.vertexAttribDivisor(F,k),Y[F]=k)}l(_,"enableAttributeAndDivisor");function S(){let F=s.newAttributes,k=s.enabledAttributes;for(let J=0,L=k.length;J<L;J++)k[J]!==F[J]&&(i.disableVertexAttribArray(J),k[J]=0)}l(S,"disableUnusedAttributes");function A(F,k,J,L,Y,Q,U){U===!0?i.vertexAttribIPointer(F,k,J,Y,Q):i.vertexAttribPointer(F,k,J,L,Y,Q)}l(A,"vertexAttribPointer");function w(F,k,J,L){y();let Y=L.attributes,Q=J.getAttributes(),U=k.defaultAttributeValues;for(let K in Q){let N=Q[K];if(N.location>=0){let V=Y[K];if(V===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),V!==void 0){let z=V.normalized,ae=V.itemSize,ce=e.get(V);if(ce===void 0)continue;let X=ce.buffer,he=ce.type,te=ce.bytesPerElement,ue=he===i.INT||he===i.UNSIGNED_INT||V.gpuType===eu;if(V.isInterleavedBufferAttribute){let re=V.data,Pe=re.isInterleavedBuffer===!0?re.stride:re.itemSize,Ge=V.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let Te=0;Te<N.locationSize;Te++)_(N.location+Te,re.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<N.locationSize;Te++)x(N.location+Te);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Te=0;Te<N.locationSize;Te++)A(N.location+Te,ae/N.locationSize,he,z,Pe*te,(Ge+ae/N.locationSize*Te)*te,ue)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<N.locationSize;re++)_(N.location+re,V.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<N.locationSize;re++)x(N.location+re);i.bindBuffer(i.ARRAY_BUFFER,X);for(let re=0;re<N.locationSize;re++)A(N.location+re,ae/N.locationSize,he,z,ae*te,ae/N.locationSize*re*te,ue)}}else if(U!==void 0){let z=U[K];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(N.location,z);break;case 3:i.vertexAttrib3fv(N.location,z);break;case 4:i.vertexAttrib4fv(N.location,z);break;default:i.vertexAttrib1fv(N.location,z)}}}}S()}l(w,"setupVertexAttributes");function R(){I();for(let F in n){let k=n[F];for(let J in k){let L=k[J];for(let Y in L){let Q=L[Y];for(let U in Q)h(Q[U].object),delete Q[U];delete L[Y]}}delete n[F]}}l(R,"dispose");function C(F){if(n[F.id]===void 0)return;let k=n[F.id];for(let J in k){let L=k[J];for(let Y in L){let Q=L[Y];for(let U in Q)h(Q[U].object),delete Q[U];delete L[Y]}}delete n[F.id]}l(C,"releaseStatesOfGeometry");function v(F){for(let k in n){let J=n[k];for(let L in J){let Y=J[L];if(Y[F.id]===void 0)continue;let Q=Y[F.id];for(let U in Q)h(Q[U].object),delete Q[U];delete Y[F.id]}}}l(v,"releaseStatesOfProgram");function E(F){for(let k in n){let J=n[k],L=F.isInstancedMesh===!0?F.id:0,Y=J[L];if(Y!==void 0){for(let Q in Y){let U=Y[Q];for(let K in U)h(U[K].object),delete U[K];delete Y[Q]}delete J[L],Object.keys(J).length===0&&delete n[k]}}}l(E,"releaseStatesOfObject");function I(){P(),a=!0,s!==r&&(s=r,u(s.object))}l(I,"reset");function P(){r.geometry=null,r.program=null,r.wireframe=!1}return l(P,"resetDefaultState"),{setup:o,reset:I,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:x,disableUnusedAttributes:S}}l(PM,"WebGLBindingStates");function IM(i,e,t){let n;function r(c){n=c}l(r,"setMode");function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}l(s,"render");function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}l(a,"renderInstances");function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let p=0;p<h;p++)d+=u[p];t.update(d,n,1)}l(o,"renderMultiDraw"),this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}l(IM,"WebGLBufferRenderer");function LM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function a(v){return!(v!==Dn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(a,"textureFormatReadable");function o(v){let E=v===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==rn&&v!==ii&&!E&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}l(o,"textureTypeReadable");function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(Ve("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:w,maxSamples:R,samples:C}}l(LM,"WebGLCapabilities");function DM(i){let e=this,t=null,n=0,r=!1,s=!1,a=new bn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{let S=s?0:n,A=S*4,w=_.clippingState||null;c.value=w,w=h(g,d,A,p);for(let R=0;R!==A;++R)w[R]=t[R];_.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(f,d,p,g){let y=f!==null?f.length:0,x=null;if(y!==0){if(x=c.value,g!==!0||x===null){let _=p+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,w=p;A!==y;++A,w+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(x,w),x[w+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}l(h,"projectPlanes")}l(DM,"WebGLClipping");var lp=class lp extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mi(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ts});s.uniforms.tEquirect.value=t;let a=new Et(r,s),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Ot),new ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};l(lp,"WebGLCubeRenderTarget");var No=lp,ng=256,NM=3,UM=20,Eg=256,Ag=16,FM=3,OM=new W,BM=new Ue,Vu=class Vu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ca(1,10,null),this._boxMesh=new Et(new Mi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=OM}=s,c=this._renderer;this._setSize(a);let u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(BM));let x=new ca(n,r,h);return x.position.copy(o),x.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ng,Z0(e))}_fromTexture(e,t){e.mapping===is||e.mapping===da?this._setSize(e.image.length===0?ng:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ig(e,!1,!1),n=Math.log2(e)-NM;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ig(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===is||e.mapping===da?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zM(),this._integrationMaterial=kM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Ag);for(let a=0;a<=n;a++){let o=Vu.lodToRoughness(a,n);if(a>n-FM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Eg*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=GM());let n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}};l(Vu,"PMREMGenerator");var ku=Vu;function ig(i,e,t){return new No(i,{minFilter:In,generateMipmaps:e,type:Ln,colorSpace:no,depthBuffer:t})}l(ig,"_createRenderTarget");function Uo(i,e,t){return new xn({name:i,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:_n,blending:ts,depthTest:!1,depthWrite:!1})}l(Uo,"_getMaterial");function zM(){return Uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Eg}u

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
	`)}l(zM,"_getGGXMaterial");function kM(){return Uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ag}},`

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
	`)}l(kM,"_getIntegrationMaterial");function GM(){return Uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${UM}
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
	`)}l(GM,"_getBlurMaterial");function rg(){return Uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}l(rg,"_getEquirectMaterial");function sg(){return Uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}l(sg,"_getCubemapMaterial");function VM(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}l(r,"get");function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===Kc||p===jc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new No(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",u),o(y.texture,d.mapping)}else return null}}return d}l(s,"getCube");function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===Kc||p===jc,y=p===is||p===da;if(g||y){let x=t.get(d),_=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new ku(i)),x=g?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new ku(i)),x=g?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}l(a,"getPMREM");function o(d,p){return p===Kc?d.mapping=is:p===jc&&(d.mapping=da),d}l(o,"mapTextureMapping");function c(d){let p=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&p++;return p===g}l(c,"isCubeTextureComplete");function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}l(u,"onCubemapDispose");function h(d){let p=d.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}l(h,"onPMREMDispose");function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return l(f,"dispose"),{get:r,dispose:f}}l(VM,"WebGLEnvironments");function HM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&Qa("WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(HM,"WebGLExtensions");function WM(i,e,t,n){let r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}l(o,"onGeometryDispose");function c(g){g.index!==null&&e.remove(g.index);for(let x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);let y=s.get(g);y&&(e.remove(y),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}l(c,"destroyGeometry");function u(g,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}l(u,"get");function h(g){let y=g.attributes;for(let x in y)e.update(y[x],i.ARRAY_BUFFER)}l(h,"update");function f(g){let y=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let S=y!==null?y.array.length:x.array.length/3-1,A=x.count>=65535?uo:co,w=new A(Math.ceil(S/3)*6,1),R=w.array;if(y!==null){let v=y.array;_=y.version;for(let E=0,I=0;E<S;E+=3){let P=v[E+0],F=v[E+1],k=v[E+2];R[I++]=P,R[I++]=F,R[I++]=F,R[I++]=k,R[I++]=k,R[I++]=P}}else{_=x.version;for(let v=0,E=0;v<S;v+=3){let I=v+0,P=v+1,F=v+2;R[E++]=I,R[E++]=P,R[E++]=P,R[E++]=F,R[E++]=F,R[E++]=I}}w.version=_;let C=s.get(g);C&&e.remove(C),s.set(g,w)}l(f,"updateWireframeAttribute");function d(g){let y=s.get(g);if(y){let x=g.index;x!==null&&y.version<x.version&&f(g)}else f(g);return s.get(g)}l(d,"getWireframeAttribute");function p(){for(let g in r){let y=r[g].deref();y!==void 0&&c(y)}}return l(p,"dispose"),{get:u,update:h,getWireframeAttribute:d,dispose:p}}l(WM,"WebGLGeometries");function XM(i,e,t){let n;function r(f){n=f}l(r,"setMode");let s,a;function o(f){s=f.type,a=f.bytesPerElement}l(o,"setIndex");function c(f,d){i.drawElements(n,d,s,f*a),t.update(d,n,1)}l(c,"render");function u(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,f*a,p),t.update(d,n,p))}l(u,"renderInstances");function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let y=0;for(let x=0;x<p;x++)y+=d[x];t.update(y,n,1)}l(h,"renderMultiDraw"),this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}l(XM,"WebGLIndexedBufferRenderer");function qM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(qM,"WebGLInfo");function YM(i,e,t){let n=new WeakMap,r=new wt;function s(a,o,c){let u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;l(P,"disposeTexture"),d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],w=0;g===!0&&(w=1),y===!0&&(w=2),x===!0&&(w=3);let R=o.attributes.position.count*w,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let v=new Float32Array(R*C*4*f),E=new es(v,R,C,f);E.type=ii,E.needsUpdate=!0;let I=w*4;for(let F=0;F<f;F++){let k=_[F],J=S[F],L=A[F],Y=R*C*4*F;for(let Q=0;Q<k.count;Q++){let U=Q*I;g===!0&&(r.fromBufferAttribute(k,Q),v[Y+U+0]=r.x,v[Y+U+1]=r.y,v[Y+U+2]=r.z,v[Y+U+3]=0),y===!0&&(r.fromBufferAttribute(J,Q),v[Y+U+4]=r.x,v[Y+U+5]=r.y,v[Y+U+6]=r.z,v[Y+U+7]=0),x===!0&&(r.fromBufferAttribute(L,Q),v[Y+U+8]=r.x,v[Y+U+9]=r.y,v[Y+U+10]=r.z,v[Y+U+11]=L.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new ke(R,C)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return l(s,"update"),{update:s}}l(YM,"WebGLMorphtargets");function $M(i,e,t,n,r){let s=new WeakMap;function a(u){let h=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}l(a,"update");function o(){s=new WeakMap}l(o,"dispose");function c(u){let h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return l(c,"onInstancedMeshDispose"),{update:a,dispose:o}}l($M,"WebGLObjects");var ZM={[pd]:"LINEAR_TONE_MAPPING",[md]:"REINHARD_TONE_MAPPING",[gd]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[_d]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[xd]:"CUSTOM_TONE_MAPPING"};function JM(i,e,t,n,r,s){let a=new Cn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,u=null,h=new Bt;h.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pt([0,2,0,0,2,0],2));let f=new vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Et(h,f),p=new yo(-1,1,1,-1,0,1),g=null,y=null,x=!1,_,S=null,A=[],w=!1;this.setSize=function(R,C){a.setSize(R,C),o!==null&&o.setSize(R,C),c!==null&&c.setSize(R,C);for(let v=0;v<A.length;v++){let E=A[v];E.setSize&&E.setSize(R,C)}},this.setEffects=function(R){A=R,w=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new Cn(C,v,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new Cn(C,v,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));let E=r===!0&&A.some(I=>I.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&u===null&&(u=new ji(C,v),s===!0&&(u.format=Qi,u.type=rs)),a.dispose(),a.depthTexture=E?u:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let I=0;I<A.length;I++){let P=A[I];P.setSize&&P.setSize(C,v),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(R,C){if(x||R.toneMapping===Ci&&A.length===0)return!1;if(S=C,C!==null){let v=C.width,E=C.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return w===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Ci,!0},this.hasRenderPass=function(){return w},this.end=function(R,C){R.toneMapping=_,x=!0;let v=a,E=o;for(let I=0;I<A.length;I++){let P=A[I];P.enabled!==!1&&(P.render(R,E,v,C),P.needsSwap!==!1&&(v=E,E=E===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},it.getTransfer(g)===ft&&(f.defines.SRGB_TRANSFER="");let I=ZM[y];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,R.setRenderTarget(S),R.render(d,p),S=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}l(JM,"WebGLOutput");var Tg=new gn,Cg=new ji(1,1),Rg=new po(1),Pg=new es,Ig=new mc,Lg=new fo,ag=[],og=[],lg=new Float32Array(16),cg=new Float32Array(9),ug=new Float32Array(4);function ma(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ag[r];if(s===void 0&&(s=new Float32Array(r),ag[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}l(ma,"flatten");function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(kt,"arraysEqual");function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(Gt,"copyArray");function Hu(i,e){let t=og[e];t===void 0&&(t=new Int32Array(e),og[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(Hu,"allocTexUnits");function KM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(KM,"setValueV1f");function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}l(jM,"setValueV2f");function QM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}l(QM,"setValueV3f");function eS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}l(eS,"setValueV4f");function tS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;ug.set(n),i.uniformMatrix2fv(this.addr,!1,ug),Gt(t,n)}}l(tS,"setValueM2");function nS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;cg.set(n),i.uniformMatrix3fv(this.addr,!1,cg),Gt(t,n)}}l(nS,"setValueM3");function iS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;lg.set(n),i.uniformMatrix4fv(this.addr,!1,lg),Gt(t,n)}}l(iS,"setValueM4");function rS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(rS,"setValueV1i");function sS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}l(sS,"setValueV2i");function aS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}l(aS,"setValueV3i");function oS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}l(oS,"setValueV4i");function lS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(lS,"setValueV1ui");function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}l(cS,"setValueV2ui");function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}l(uS,"setValueV3ui");function hS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}l(hS,"setValueV4ui");function Wu(i){return i.version===0&&(i.compareFunction=Pd,i.needsUpdate=!0),i}l(Wu,"initShadowTexture");function dS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Wu(Cg):s=Tg,t.setTexture2D(e||s,r)}l(dS,"setValueT1");function fS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ig,r)}l(fS,"setValueT3D1");function pS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Wu(Rg):s=Lg,t.setTextureCube(e||s,r)}l(pS,"setValueT6");function mS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pg,r)}l(mS,"setValueT2DArray1");function gS(i){switch(i){case 5126:return KM;case 35664:return jM;case 35665:return QM;case 35666:return eS;case 35674:return tS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return rS;case 35667:case 35671:return sS;case 35668:case 35672:return aS;case 35669:case 35673:return oS;case 5125:return lS;case 36294:return cS;case 36295:return uS;case 36296:return hS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}l(gS,"getSingularSetter");function xS(i,e){i.uniform1fv(this.addr,e)}l(xS,"setValueV1fArray");function _S(i,e){let t=ma(e,this.size,2);i.uniform2fv(this.addr,t)}l(_S,"setValueV2fArray");function vS(i,e){let t=ma(e,this.size,3);i.uniform3fv(this.addr,t)}l(vS,"setValueV3fArray");function yS(i,e){let t=ma(e,this.size,4);i.uniform4fv(this.addr,t)}l(yS,"setValueV4fArray");function bS(i,e){let t=ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(bS,"setValueM2Array");function MS(i,e){let t=ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(MS,"setValueM3Array");function SS(i,e){let t=ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(SS,"setValueM4Array");function wS(i,e){i.uniform1iv(this.addr,e)}l(wS,"setValueV1iArray");function ES(i,e){i.uniform2iv(this.addr,e)}l(ES,"setValueV2iArray");function AS(i,e){i.uniform3iv(this.addr,e)}l(AS,"setValueV3iArray");function TS(i,e){i.uniform4iv(this.addr,e)}l(TS,"setValueV4iArray");function CS(i,e){i.uniform1uiv(this.addr,e)}l(CS,"setValueV1uiArray");function RS(i,e){i.uniform2uiv(this.addr,e)}l(RS,"setValueV2uiArray");function PS(i,e){i.uniform3uiv(this.addr,e)}l(PS,"setValueV3uiArray");function IS(i,e){i.uniform4uiv(this.addr,e)}l(IS,"setValueV4uiArray");function LS(i,e,t){let n=this.cache,r=e.length,s=Hu(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wu(Cg):a=Tg;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}l(LS,"setValueT1Array");function DS(i,e,t){let n=this.cache,r=e.length,s=Hu(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ig,s[a])}l(DS,"setValueT3DArray");function NS(i,e,t){let n=this.cache,r=e.length,s=Hu(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Wu(Rg):a=Lg;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}l(NS,"setValueT6Array");function US(i,e,t){let n=this.cache,r=e.length,s=Hu(t,r);kt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pg,s[a])}l(US,"setValueT2DArrayArray");function FS(i){switch(i){case 5126:return xS;case 35664:return _S;case 35665:return vS;case 35666:return yS;case 35674:return bS;case 35675:return MS;case 35676:return SS;case 5124:case 35670:return wS;case 35667:case 35671:return ES;case 35668:case 35672:return AS;case 35669:case 35673:return TS;case 5125:return CS;case 36294:return RS;case 36295:return PS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return US}}l(FS,"getPureArraySetter");var cp=class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gS(t.type)}};l(cp,"SingleUniform");var ep=cp,up=class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FS(t.type)}};l(up,"PureArrayUniform");var tp=up,hp=class hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}};l(hp,"StructuredUniform");var np=hp,jf=/(\w+)(\])?(\[|\.)?/g;function hg(i,e){i.seq.push(e),i.map[e.id]=e}l(hg,"addUniform");function OS(i,e,t){let n=i.name,r=n.length;for(jf.lastIndex=0;;){let s=jf.exec(n),a=jf.lastIndex,o=s[1],c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){hg(t,u===void 0?new ep(o,i,e):new tp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new np(o),hg(t,f)),t=f}}}l(OS,"parseUniform");var dp=class dp{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);OS(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};l(dp,"WebGLUniforms");var pa=dp;function dg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(dg,"WebGLShader");var BS=37297,zS=0;function kS(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}l(kS,"handleSource");var fg=new We;function GS(i){it._getMatrix(fg,it.workingColorSpace,i);let e=`mat3( ${fg.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case io:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}l(GS,"getEncodingComponents");function pg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+kS(i.getShaderSource(e),o)}else return s}l(pg,"getShaderErrors");function VS(i,e){let t=GS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}l(VS,"getTexelEncodingFunction");var HS={[pd]:"Linear",[md]:"Reinhard",[gd]:"Cineon",[wo]:"ACESFilmic",[_d]:"AgX",[vd]:"Neutral",[xd]:"Custom"};function WS(i,e){let t=HS[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(WS,"getToneMappingFunction");var zu=new W;function XS(){it.getLuminanceCoefficients(zu);let i=zu.x.toFixed(4),e=zu.y.toFixed(4),t=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(XS,"getLuminanceFunction");function qS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}l(qS,"generateVertexExtensions");function YS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(YS,"generateDefines");function $S(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}l($S,"fetchAttributeLocations");function Do(i){return i!==""}l(Do,"filterEmptyLine");function mg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}l(mg,"replaceLightNums");function gg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(gg,"replaceClippingPlaneNums");var ZS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(i){return i.replace(ZS,JS)}l(ip,"resolveIncludes");function JS(i,e){let t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ip(t)}l(JS,"includeReplacer");var KS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(i){return i.replace(KS,jS)}l(xg,"unrollLoops");function jS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(jS,"loopReplacer");function _g(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}l(_g,"generatePrecision");var QS={[So]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function ew(i){return QS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}l(ew,"generateShadowMapTypeDefine");var tw={[da]:"ENVMAP_MODE_REFRACTION"};function nw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}l(nw,"generateEnvMapModeDefine");var iw={[fd]:"ENVMAP_BLENDING_MULTIPLY",[N0]:"ENVMAP_BLENDING_MIX",[U0]:"ENVMAP_BLENDING_ADD"};function rw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iw[i.combine]||"ENVMAP_BLENDING_NONE"}l(rw,"generateEnvMapBlendingDefine");function sw(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ew(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=nw(t),f=rw(t),d=qS(t),p=YS(s),g=r.createProgram(),y,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Do).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Do).join(`
`),x.length>0&&(x+=`
`)):(y=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),x=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ci?WS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),XS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),a=ip(a),a=mg(a,t),a=gg(a,t),o=ip(o),o=mg(o,t),o=gg(o,t),a=xg(a),o=xg(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=_+y+a,A=_+x+o,w=dg(r,r.VERTEX_SHADER,S),R=dg(r,r.FRAGMENT_SHADER,A);r.attachShader(g,w),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(g)||"",k=r.getShaderInfoLog(w)||"",J=r.getShaderInfoLog(R)||"",L=F.trim(),Y=k.trim(),Q=J.trim(),U=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,R);else{let N=pg(r,w,"vertex"),V=pg(r,R,"fragment");He("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+N+`
`+V)}else L!==""?Ve("WebGLProgram: Program Info Log:",L):(Y===""||Q==="")&&(K=!1);K&&(P.diagnostics={runnable:U,programLog:L,vertexShader:{log:Y,prefix:y},fragmentShader:{log:Q,prefix:x}})}r.deleteShader(w),r.deleteShader(R),v=new pa(r,g),E=$S(r,g)}l(C,"onFirstUse");let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,BS)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}l(sw,"WebGLProgram");var aw=0,fp=class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sp(e),t.set(e,n)),n}};l(fp,"WebGLShaderCache");var rp=fp,pp=class pp{constructor(e){this.id=aw++,this.code=e,this.usedTimes=0}};l(pp,"WebGLShaderStage");var sp=pp;function ow(i){return i===Ri||i===Po||i===Io}l(ow,"isPackedRGFormat");function lw(i,e,t,n,r,s){let a=new ao,o=new rp,c=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}l(p,"getChannel");function g(v,E,I,P,F,k){let J=P.fog,L=F.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||Y,Q),K=d[v.type],N=n.precision;v.precision!==null&&(N=n.getMaxPrecision(v.precision),N!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",N,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,z=V!==void 0?V.length:0,ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let ce,X,he,te;if(K){let Ae=Ii[K];ce=Ae.vertexShader,X=Ae.fragmentShader}else{ce=v.vertexShader,X=v.fragmentShader;let Ae=o.getVertexShaderStage(v),mt=o.getFragmentShaderStage(v);o.update(v,Ae,mt),he=Ae.id,te=mt.id}let ue=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),Pe=F.isInstancedMesh===!0,Ge=F.isBatchedMesh===!0,Te=!!v.map,Je=!!v.matcap,Ke=!!U,Xe=Ke&&U.isPMREMTexture===!0,et=!!v.aoMap,dt=!!v.lightMap,Tt=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,Lt=!!v.displacementMap,pt=!!v.emissiveMap,St=!!v.metalnessMap,It=!!v.roughnessMap,st=v.anisotropy>0,B=v.clearcoat>0,Rt=v.diffuseRoughness>0,at=v.dispersion>0,je=v.retroreflectivity>0,me=v.iridescence>0,ut=v.sheen>0,Fe=v.transmission>0,ze=st&&!!v.anisotropyMap,T=B&&!!v.clearcoatMap,b=B&&!!v.clearcoatNormalMap,q=B&&!!v.clearcoatRoughnessMap,fe=Rt&&!!v.diffuseRoughnessMap,se=me&&!!v.iridescenceMap,xe=me&&!!v.iridescenceThicknessMap,Me=ut&&!!v.sheenColorMap,ie=ut&&!!v.sheenRoughnessMap,oe=!!v.specularMap,ve=!!v.specularColorMap,D=!!v.specularIntensityMap,le=Fe&&!!v.transmissionMap,ne=Fe&&!!v.thicknessMap,ye=!!v.gradientMap,ge=!!v.alphaMap,_e=v.alphaTest>0,Oe=!!v.alphaHash,$e=!!v.extensions,pe=Ci;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Be=Xe?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Ye={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:X,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:N,batching:Ge,batchingColor:Ge&&F._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&F.instanceColor!==null,instancingMorph:Pe&&F.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Te,matcap:Je,envMap:Ke,envMapMode:Ke&&U.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Be.length-1:null,envMapSize:Xe?Be[0].width:null,aoMap:et,lightMap:dt,bumpMap:Tt,normalMap:lt,displacementMap:Lt,emissiveMap:pt,normalMapObjectSpace:lt&&v.normalMapType===B0,normalMapTangentSpace:lt&&v.normalMapType===Fu,packedNormalMap:lt&&v.normalMapType===Fu&&ow(v.normalMap.format),metalnessMap:St,roughnessMap:It,anisotropy:st,anisotropyMap:ze,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:b,clearcoatRoughnessMap:q,diffuseRoughness:Rt,diffuseRoughnessMap:fe,dispersion:at,retroreflection:je,iridescence:me,iridescenceMap:se,iridescenceThicknessMap:xe,sheen:ut,sheenColorMap:Me,sheenRoughnessMap:ie,specularMap:oe,specularColorMap:ve,specularIntensityMap:D,transmission:Fe,transmissionMap:le,thicknessMap:ne,gradientMap:ye,opaque:v.transparent===!1&&v.blending===ha&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:Oe,combine:v.combine,mapUv:Te&&p(v.map.channel),aoMapUv:et&&p(v.aoMap.channel),lightMapUv:dt&&p(v.lightMap.channel),bumpMapUv:Tt&&p(v.bumpMap.channel),normalMapUv:lt&&p(v.normalMap.channel),displacementMapUv:Lt&&p(v.displacementMap.channel),emissiveMapUv:pt&&p(v.emissiveMap.channel),metalnessMapUv:St&&p(v.metalnessMap.channel),roughnessMapUv:It&&p(v.roughnessMap.channel),anisotropyMapUv:ze&&p(v.anisotropyMap.channel),clearcoatMapUv:T&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(v.sheenRoughnessMap.channel),specularMapUv:oe&&p(v.specularMap.channel),specularColorMapUv:ve&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:le&&p(v.transmissionMap.channel),thicknessMapUv:ne&&p(v.thicknessMap.channel),alphaMapUv:ge&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(lt||st),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(Te||ge),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Te&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ti,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:$e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&v.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}l(g,"getParameters");function y(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(E,v),_(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}l(y,"getProgramCacheKey");function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}l(x,"getProgramCacheKeyParameters");function _(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}l(_,"getProgramCacheKeyBooleans");function S(v){let E=d[v.type],I;if(E){let P=Ii[E];I=os.clone(P.uniforms)}else I=v.uniforms;return I}l(S,"getUniforms");function A(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new sw(i,E,v,r),u.push(I),h.set(E,I)),I}l(A,"acquireProgram");function w(v){if(--v.usedTimes===0){let E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}l(w,"releaseProgram");function R(v){o.remove(v)}l(R,"releaseShaderCache");function C(){o.dispose()}return l(C,"dispose"),{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:C}}l(lw,"WebGLPrograms");function cw(){let i=new WeakMap;function e(a){return i.has(a)}l(e,"has");function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}l(t,"get");function n(a){i.delete(a)}l(n,"remove");function r(a,o,c){i.get(a)[o]=c}l(r,"update");function s(){i=new WeakMap}return l(s,"dispose"),{has:e,get:t,remove:n,update:r,dispose:s}}l(cw,"WebGLProperties");function uw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}l(uw,"painterSortStable");function vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(vg,"reversePainterSortStable");function yg(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}l(a,"materialVariant");function o(d,p,g,y,x,_){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:_},i[e]=S):(S.id=d.id,S.object=d,S.geometry=p,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=x,S.group=_),e++,S}l(o,"getNextRenderItem");function c(d,p,g,y,x,_,S){S.reversedDepth===!0&&(x=-x);let A=o(d,p,g,y,x,_);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):t.push(A)}l(c,"push");function u(d,p,g,y,x,_){let S=o(d,p,g,y,x,_);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}l(u,"unshift");function h(d,p){t.length>1&&t.sort(d||uw),n.length>1&&n.sort(p||vg),r.length>1&&r.sort(p||vg)}l(h,"sort");function f(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(f,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:f,sort:h}}l(yg,"WebGLRenderList");function hw(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new yg,i.set(n,[a])):r>=s.length?(a=new yg,s.push(a)):a=s[r],a}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(hw,"WebGLRenderLists");function dw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new Ue};break;case"SpotLight":t={position:new W,direction:new W,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t},"get")}}l(dw,"UniformsCache");function fw(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(fw,"ShadowUniformsCache");var pw=0;function mw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(mw,"shadowCastingAndTexturingLightsFirst");function gw(i){let e=new dw,t=fw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);let r=new W,s=new gt,a=new gt;function o(u){let h=0,f=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,g=0,y=0,x=0,_=0,S=0,A=0,w=0,R=0,C=0,v=0,E=0,I=0,P=0;u.sort(mw);for(let k=0,J=u.length;k<J;k++){let L=u[k],Y=L.color,Q=L.intensity,U=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ri?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=Y.r*Q,f+=Y.g*Q,d+=Y.b*Q;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],Q);P++}else if(L.isSunLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=K;let ae=V.getViewportCount();for(let ce=0;ce<ae;ce++)n.sunShadowMatrix[y+ce]=V.getMatrix(ce),n.sunShadowCascade[y+ce]=V._cascadeData[ce];y+=ae,g++}n.sun[p]=N,p++}else if(L.isDirectionalLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.directionalShadow[x]=z,n.directionalShadowMap[x]=K,n.directionalShadowMatrix[x]=L.shadow.matrix,R++}n.directional[x]=N,x++}else if(L.isSpotLight){let N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(Y).multiplyScalar(Q),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[S]=N;let V=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,V.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[S]=V.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,n.spotShadow[S]=z,n.spotShadowMap[S]=K,v++}S++}else if(L.isRectAreaLight){let N=e.get(L);N.color.copy(Y).multiplyScalar(Q),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=N,A++}else if(L.isPointLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){let V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=L.shadow.matrix,C++}n.point[_]=N,_++}else if(L.isHemisphereLight){let N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(Q),N.groundColor.copy(L.groundColor).multiplyScalar(Q),n.hemi[w]=N,w++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let F=n.hash;(F.sunLength!==p||F.directionalLength!==x||F.pointLength!==_||F.spotLength!==S||F.rectAreaLength!==A||F.hemiLength!==w||F.numSunShadows!==g||F.numDirectionalShadows!==R||F.numPointShadows!==C||F.numSpotShadows!==v||F.numSpotMaps!==E||F.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=x,n.spot.length=S,n.rectArea.length=A,n.point.length=_,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,F.sunLength=p,F.directionalLength=x,F.pointLength=_,F.spotLength=S,F.rectAreaLength=A,F.hemiLength=w,F.numSunShadows=g,F.numDirectionalShadows=R,F.numPointShadows=C,F.numSpotShadows=v,F.numSpotMaps=E,F.numLightProbes=P,n.version=pw++)}l(o,"setup");function c(u,h){let f=0,d=0,p=0,g=0,y=0,x=0,_=h.matrixWorldInverse;for(let S=0,A=u.length;S<A;S++){let w=u[S];if(w.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),f++}else if(w.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),d++}else if(w.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(w.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),a.identity(),s.copy(w.matrixWorld),s.premultiply(_),a.extractRotation(s),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),p++}else if(w.isHemisphereLight){let R=n.hemi[x];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),x++}}}return l(c,"setupView"),{setup:o,setupView:c,state:n}}l(gw,"WebGLLights");function bg(i){let e=new gw(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}l(s,"init");function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}l(a,"pushLight");function o(f){n.push(f)}l(o,"pushShadow");function c(){e.setup(t),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}l(c,"setupLights");function u(f){e.setupView(t,f)}l(u,"setupLightsView");let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}l(bg,"WebGLRenderState");function xw(i){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new bg(i),e.set(r,[o])):s>=a.length?(o=new bg(i),a.push(o)):o=a[s],o}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(xw,"WebGLRenderStates");var _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vw=`uniform sampler2D shadow_pass;
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
}`,yw=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],bw=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Mg=new gt,Lo=new W,Qf=new W;function Mw(i,e,t){let n=new wr,r=new ke,s=new ke,a=new wt,o=new yc,c=new bc,u={},h=t.maxTextureSize,f={[Ir]:_n,[_n]:Ir,[Ti]:Ti},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:_w,fragmentShader:vw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let _=this.type;this.render=function(C,v,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Jc&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=So);let I=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ts),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let J=_!==this.type;J&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(Y=>Y.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,Y=C.length;L<Y;L++){let Q=C[L],U=Q.shadow;if(U===void 0){Ve("WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let K=U.getFrameExtents();r.multiply(K),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,U.mapSize.y=s.y));let N=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=N,U.map===null||J===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ua){if(Q.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Cn(r.x,r.y,{format:Ri,type:Ln,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),U.map.texture.name=Q.name+".shadowMap",U.map.depthTexture=new ji(r.x,r.y,ii),U.map.depthTexture.name=Q.name+".shadowMapDepth",U.map.depthTexture.format=Zi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ft,U.map.depthTexture.magFilter=Ft}else Q.isPointLight?(U.map=new No(r.x),U.map.depthTexture=new po(r.x,ni)):(U.map=new Cn(r.x,r.y),U.map.depthTexture=new ji(r.x,r.y,ni)),U.map.depthTexture.name=Q.name+".shadowMap",U.map.depthTexture.format=Zi,this.type===So?(U.map.depthTexture.compareFunction=N?Rd:Cd,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ft,U.map.depthTexture.magFilter=Ft);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==r.x||U.map.height!==r.y)&&U.map.setSize(r.x,r.y);let V=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();Q.isPointLight!==!0&&U.updateMatrices(Q,E);let z=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:E.layers;for(let ae=0;ae<V;ae++){let ce=U.getCamera(ae);if(Q.isPointLight){let X=U.camera,he=U.matrix,te=Q.distance||X.far;te!==X.far&&(X.far=te,X.updateProjectionMatrix()),Lo.setFromMatrixPosition(Q.matrixWorld),X.position.copy(Lo),Qf.copy(X.position),Qf.add(yw[ae]),X.up.copy(bw[ae]),X.lookAt(Qf),X.updateMatrixWorld(),he.makeTranslation(-Lo.x,-Lo.y,-Lo.z),Mg.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mg,X.coordinateSystem,X.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(U.map),i.clear());let X=U.getViewport(ae);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),k.viewport(a)}n=U.getFrustum(ae),w(v,E,ce,Q,z,this.type)}U.isPointLightShadow!==!0&&this.type===ua&&S(U,E),U.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(I,P,F)};function S(C,v){let E=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new Cn(r.x,r.y,{format:Ri,type:Ln}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,E,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,E,p,y,null)}l(S,"VSMPass");function A(C,v,E,I){let P=null,F=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)P=F;else if(P=E.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let k=P.uuid,J=v.uuid,L=u[k];L===void 0&&(L={},u[k]=L);let Y=L[J];Y===void 0&&(Y=P.clone(),L[J]=Y,v.addEventListener("dispose",R)),P=Y}if(P.visible=v.visible,P.wireframe=v.wireframe,I===ua?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:f[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=i.properties.get(P);k.light=E}return P}l(A,"getDepthMaterial");function w(C,v,E,I,P,F){if(C.visible===!1)return;if(C.layers.test(P)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===ua)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);let L=e.update(C),Y=C.material;if(Array.isArray(Y)){let Q=L.groups;for(let U=0,K=Q.length;U<K;U++){let N=Q[U],V=Y[N.materialIndex];if(V&&V.visible){let z=A(C,V,I,F);C.onBeforeShadow(i,C,v,E,L,z,N),i.renderBufferDirect(E,null,L,z,C,N),C.onAfterShadow(i,C,v,E,L,z,N)}}}else if(Y.visible){let Q=A(C,Y,I,F);C.onBeforeShadow(i,C,v,E,L,Q,null),i.renderBufferDirect(E,null,L,Q,C,null),C.onAfterShadow(i,C,v,E,L,Q,null)}}let J=C.children;for(let L=0,Y=J.length;L<Y;L++)w(J[L],v,E,I,P,F)}l(w,"renderObject");function R(C){C.target.removeEventListener("dispose",R);for(let E in u){let I=u[E],P=C.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}l(R,"onMaterialDispose")}l(Mw,"WebGLShadowMap");function Sw(i,e){function t(){let D=!1,le=new wt,ne=null,ye=new wt(0,0,0,0);return{setMask:l(function(ge){ne!==ge&&!D&&(i.colorMask(ge,ge,ge,ge),ne=ge)},"setMask"),setLocked:l(function(ge){D=ge},"setLocked"),setClear:l(function(ge,_e,Oe,$e,pe){pe===!0&&(ge*=$e,_e*=$e,Oe*=$e),le.set(ge,_e,Oe,$e),ye.equals(le)===!1&&(i.clearColor(ge,_e,Oe,$e),ye.copy(le))},"setClear"),reset:l(function(){D=!1,ne=null,ye.set(-1,0,0,0)},"reset")}}l(t,"ColorBuffer");function n(){let D=!1,le=!1,ne=null,ye=null,ge=null;return{setReversed:l(function(_e){if(le!==_e){let Oe=e.get("EXT_clip_control");_e?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),le=_e;let $e=ge;ge=null,this.setClear($e)}},"setReversed"),getReversed:l(function(){return le},"getReversed"),setTest:l(function(_e){_e?re(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},"setTest"),setMask:l(function(_e){ne!==_e&&!D&&(i.depthMask(_e),ne=_e)},"setMask"),setFunc:l(function(_e){if(le&&(_e=$0[_e]),ye!==_e){switch(_e){case ic:i.depthFunc(i.NEVER);break;case rc:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case ea:i.depthFunc(i.LEQUAL);break;case ac:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},"setFunc"),setLocked:l(function(_e){D=_e},"setLocked"),setClear:l(function(_e){ge!==_e&&(ge=_e,le&&(_e=1-_e),i.clearDepth(_e))},"setClear"),reset:l(function(){D=!1,ne=null,ye=null,ge=null,le=!1},"reset")}}l(n,"DepthBuffer");function r(){let D=!1,le=null,ne=null,ye=null,ge=null,_e=null,Oe=null,$e=null,pe=null;return{setTest:l(function(Be){D||(Be?re(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},"setTest"),setMask:l(function(Be){le!==Be&&!D&&(i.stencilMask(Be),le=Be)},"setMask"),setFunc:l(function(Be,Ye,Ae){(ne!==Be||ye!==Ye||ge!==Ae)&&(i.stencilFunc(Be,Ye,Ae),ne=Be,ye=Ye,ge=Ae)},"setFunc"),setOp:l(function(Be,Ye,Ae){(_e!==Be||Oe!==Ye||$e!==Ae)&&(i.stencilOp(Be,Ye,Ae),_e=Be,Oe=Ye,$e=Ae)},"setOp"),setLocked:l(function(Be){D=Be},"setLocked"),setClear:l(function(Be){pe!==Be&&(i.clearStencil(Be),pe=Be)},"setClear"),reset:l(function(){D=!1,le=null,ne=null,ye=null,ge=null,_e=null,Oe=null,$e=null,pe=null},"reset")}}l(r,"StencilBuffer");let s=new t,a=new n,o=new r,c={},u=new WeakMap,h={},f={},d={},p=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,w=null,R=null,C=null,v=null,E=new Ue(0,0,0),I=0,P=!1,F=null,k=null,J=null,L=null,Y=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,K=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=K>=1):N.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=K>=2);let V=null,z={},ae=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),X=new wt().fromArray(ae),he=new wt().fromArray(ce);function te(D,le,ne,ye){let ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(D,_e),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<ne;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(le+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}l(te,"createTexture");let ue={};ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(ea),Tt(!1),lt(od),re(i.CULL_FACE),et(ts);function re(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}l(re,"enable");function Pe(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}l(Pe,"disable");function Ge(D,le){return d[D]!==le?(i.bindFramebuffer(D,le),d[D]=le,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}l(Ge,"bindFramebuffer");function Te(D,le){let ne=g,ye=!1;if(D){ne=p.get(le),ne===void 0&&(ne=[],p.set(le,ne));let ge=D.textures;if(ne.length!==ge.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Oe=ge.length;_e<Oe;_e++)ne[_e]=i.COLOR_ATTACHMENT0+_e;ne.length=ge.length,ye=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ne)}l(Te,"drawBuffers");function Je(D){return y!==D?(i.useProgram(D),y=D,!0):!1}l(Je,"useProgram");let Ke={[ns]:i.FUNC_ADD,[x0]:i.FUNC_SUBTRACT,[_0]:i.FUNC_REVERSE_SUBTRACT};Ke[v0]=i.MIN,Ke[y0]=i.MAX;let Xe={[b0]:i.ZERO,[M0]:i.ONE,[S0]:i.SRC_COLOR,[hd]:i.SRC_ALPHA,[R0]:i.SRC_ALPHA_SATURATE,[T0]:i.DST_COLOR,[E0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[dd]:i.ONE_MINUS_SRC_ALPHA,[C0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[P0]:i.CONSTANT_COLOR,[I0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[D0]:i.ONE_MINUS_CONSTANT_ALPHA};function et(D,le,ne,ye,ge,_e,Oe,$e,pe,Be){if(D===ts){x===!0&&(Pe(i.BLEND),x=!1);return}if(x===!1&&(re(i.BLEND),x=!0),D!==g0){if(D!==_||Be!==P){if((S!==ns||R!==ns)&&(i.blendEquation(i.FUNC_ADD),S=ns,R=ns),Be)switch(D){case ha:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ld:i.blendFunc(i.ONE,i.ONE);break;case cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ud:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ld:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cd:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ud:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}A=null,w=null,C=null,v=null,E.set(0,0,0),I=0,_=D,P=Be}return}ge=ge||le,_e=_e||ne,Oe=Oe||ye,(le!==S||ge!==R)&&(i.blendEquationSeparate(Ke[le],Ke[ge]),S=le,R=ge),(ne!==A||ye!==w||_e!==C||Oe!==v)&&(i.blendFuncSeparate(Xe[ne],Xe[ye],Xe[_e],Xe[Oe]),A=ne,w=ye,C=_e,v=Oe),($e.equals(E)===!1||pe!==I)&&(i.blendColor($e.r,$e.g,$e.b,pe),E.copy($e),I=pe),_=D,P=!1}l(et,"setBlending");function dt(D,le){D.side===Ti?Pe(i.CULL_FACE):re(i.CULL_FACE);let ne=D.side===_n;le&&(ne=!ne),Tt(ne),D.blending===ha&&D.transparent===!1?et(ts):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}l(dt,"setMaterial");function Tt(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}l(Tt,"setFlipSided");function lt(D){D!==p0?(re(i.CULL_FACE),D!==k&&(D===od?i.cullFace(i.BACK):D===m0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),k=D}l(lt,"setCullFace");function Lt(D){D!==J&&(U&&i.lineWidth(D),J=D)}l(Lt,"setLineWidth");function pt(D,le,ne){D?(re(i.POLYGON_OFFSET_FILL),(L!==le||Y!==ne)&&(L=le,Y=ne,a.getReversed()&&(le=-le,ne=-ne),i.polygonOffset(le,ne))):Pe(i.POLYGON_OFFSET_FILL)}l(pt,"setPolygonOffset");function St(D){D?re(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}l(St,"setScissorTest");function It(D){D===void 0&&(D=i.TEXTURE0+Q-1),V!==D&&(i.activeTexture(D),V=D)}l(It,"activeTexture");function st(D,le,ne){ne===void 0&&(V===null?ne=i.TEXTURE0+Q-1:ne=V);let ye=z[ne];ye===void 0&&(ye={type:void 0,texture:void 0},z[ne]=ye),(ye.type!==D||ye.texture!==le)&&(V!==ne&&(i.activeTexture(ne),V=ne),i.bindTexture(D,le||ue[D]),ye.type=D,ye.texture=le)}l(st,"bindTexture");function B(){let D=z[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}l(B,"unbindTexture");function Rt(){try{i.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(Rt,"compressedTexImage2D");function at(){try{i.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(at,"compressedTexImage3D");function je(){try{i.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(je,"texSubImage2D");function me(){try{i.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(me,"texSubImage3D");function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(ut,"compressedTexSubImage2D");function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(Fe,"compressedTexSubImage3D");function ze(){try{i.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(ze,"texStorage2D");function T(){try{i.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(T,"texStorage3D");function b(){try{i.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}l(b,"texImage2D");function q(){try{i.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}l(q,"texImage3D");function fe(D){return f[D]!==void 0?f[D]:i.getParameter(D)}l(fe,"getParameter");function se(D,le){f[D]!==le&&(i.pixelStorei(D,le),f[D]=le)}l(se,"pixelStorei");function xe(D){X.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),X.copy(D))}l(xe,"scissor");function Me(D){he.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),he.copy(D))}l(Me,"viewport");function ie(D,le){let ne=u.get(le);ne===void 0&&(ne=new WeakMap,u.set(le,ne));let ye=ne.get(D);ye===void 0&&(ye=i.getUniformBlockIndex(le,D.name),i.uniformBlockBinding(le,ye,ye),ne.set(D,ye))}l(ie,"updateUBOMapping");function oe(D,le,ne){let ge=u.get(le).get(D);c[ge]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,ne),c[ge]=ne)}l(oe,"uniformBlockBinding");function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},V=null,z={},d={},c={},p=new WeakMap,g=[],y=null,x=!1,_=null,S=null,A=null,w=null,R=null,C=null,v=null,E=new Ue(0,0,0),I=0,P=!1,F=null,k=null,J=null,L=null,Y=null,X.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return l(ve,"reset"),{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Pe,bindFramebuffer:Ge,drawBuffers:Te,useProgram:Je,setBlending:et,setMaterial:dt,setFlipSided:Tt,setCullFace:lt,setLineWidth:Lt,setPolygonOffset:pt,setScissorTest:St,activeTexture:It,bindTexture:st,unbindTexture:B,compressedTexImage2D:Rt,compressedTexImage3D:at,texImage2D:b,texImage3D:q,pixelStorei:se,getParameter:fe,updateUBOMapping:ie,uniformBlockBinding:oe,texStorage2D:ze,texStorage3D:T,texSubImage2D:je,texSubImage3D:me,compressedTexSubImage2D:ut,compressedTexSubImage3D:Fe,scissor:xe,viewport:Me,reset:ve}}l(Sw,"WebGLState");function ww(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap,f=new Set,d,p=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return x?new OffscreenCanvas(T,b):ro("canvas")}l(_,"createCanvas");function S(T,b,q){let fe=1,se=ze(T);if((se.width>q||se.height>q)&&(fe=q/Math.max(se.width,se.height)),fe<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let xe=Math.floor(fe*se.width),Me=Math.floor(fe*se.height);d===void 0&&(d=_(xe,Me));let ie=b?_(xe,Me):d;return ie.width=xe,ie.height=Me,ie.getContext("2d").drawImage(T,0,0,xe,Me),Ve("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+Me+")."),ie}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}l(S,"resizeImage");function A(T){return T.generateMipmaps}l(A,"textureNeedsGenerateMipmaps");function w(T){i.generateMipmap(T)}l(w,"generateMipmap");function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}l(R,"getTargetType");function C(T,b,q,fe,se,xe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Me;fe&&(Me=e.get("EXT_texture_norm16"),Me||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=b;if(b===i.RED&&(q===i.FLOAT&&(ie=i.R32F),q===i.HALF_FLOAT&&(ie=i.R16F),q===i.UNSIGNED_BYTE&&(ie=i.R8),q===i.UNSIGNED_SHORT&&Me&&(ie=Me.R16_EXT),q===i.SHORT&&Me&&(ie=Me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.R8UI),q===i.UNSIGNED_SHORT&&(ie=i.R16UI),q===i.UNSIGNED_INT&&(ie=i.R32UI),q===i.BYTE&&(ie=i.R8I),q===i.SHORT&&(ie=i.R16I),q===i.INT&&(ie=i.R32I)),b===i.RG&&(q===i.FLOAT&&(ie=i.RG32F),q===i.HALF_FLOAT&&(ie=i.RG16F),q===i.UNSIGNED_BYTE&&(ie=i.RG8),q===i.UNSIGNED_SHORT&&Me&&(ie=Me.RG16_EXT),q===i.SHORT&&Me&&(ie=Me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RG8UI),q===i.UNSIGNED_SHORT&&(ie=i.RG16UI),q===i.UNSIGNED_INT&&(ie=i.RG32UI),q===i.BYTE&&(ie=i.RG8I),q===i.SHORT&&(ie=i.RG16I),q===i.INT&&(ie=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),q===i.UNSIGNED_INT&&(ie=i.RGB32UI),q===i.BYTE&&(ie=i.RGB8I),q===i.SHORT&&(ie=i.RGB16I),q===i.INT&&(ie=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),q===i.UNSIGNED_INT&&(ie=i.RGBA32UI),q===i.BYTE&&(ie=i.RGBA8I),q===i.SHORT&&(ie=i.RGBA16I),q===i.INT&&(ie=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_SHORT&&Me&&(ie=Me.RGB16_EXT),q===i.SHORT&&Me&&(ie=Me.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),b===i.RGBA){let oe=xe?io:it.getTransfer(se);q===i.FLOAT&&(ie=i.RGBA32F),q===i.HALF_FLOAT&&(ie=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ie=oe===ft?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Me&&(ie=Me.RGBA16_EXT),q===i.SHORT&&Me&&(ie=Me.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}l(C,"getInternalFormat");function v(T,b){let q;return T?b===null||b===ni||b===rs?q=i.DEPTH24_STENCIL8:b===ii?q=i.DEPTH32F_STENCIL8:b===fa&&(q=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ni||b===rs?q=i.DEPTH_COMPONENT24:b===ii?q=i.DEPTH_COMPONENT32F:b===fa&&(q=i.DEPTH_COMPONENT16),q}l(v,"getInternalDepthFormat");function E(T,b){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==Ot?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}l(E,"getMipLevels");function I(T){let b=new WeakRef(T);n.get(T).__ref=b,g.add(b),y.register(T,b,b)}l(I,"track");function P(T){let b=n.get(T).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}l(P,"untrack");function F(T){J(T.target)}l(F,"onTextureDispose");function k(T){L(T.target)}l(k,"onRenderTargetDispose");function J(T){T.removeEventListener("dispose",F),P(T),Q(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}l(J,"destroyTexture");function L(T){T.removeEventListener("dispose",k),P(T),K(T)}l(L,"destroyRenderTarget");function Y(){for(let T of g){let b=T.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):J(b))}g.clear(),f.clear()}l(Y,"dispose");function Q(T){let b=n.get(T);if(b.__webglInit===void 0)return;let q=T.source,fe=p.get(q);if(fe){let se=fe[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&U(T),Object.keys(fe).length===0&&p.delete(q)}n.remove(T)}l(Q,"deallocateTexture");function U(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let q=T.source,fe=p.get(q);delete fe[b.__cacheKey],a.memory.textures--}l(U,"deleteTexture");function K(T){let b=n.get(T);b.__depthDisposeCallback&&b.__depthDisposeCallback();let q=T.depthTexture;if(q&&q.renderTarget===T&&J(q),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let xe=0;xe<b.__webglFramebuffer[se].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[se][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let fe=T.textures;for(let se=0,xe=fe.length;se<xe;se++){let Me=n.get(fe[se]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(fe[se])}n.remove(T)}l(K,"deallocateRenderTarget");let N=0;function V(){N=0}l(V,"resetTextureUnits");function z(){return N}l(z,"getTextureUnits");function ae(T){N=T}l(ae,"setTextureUnits");function ce(){let T=N;return T>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,T}l(ce,"allocateTextureUnit");function X(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.mipmapsAutoUpdate),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}l(X,"getTextureCacheKey");function he(T,b){let q=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&q.__version!==T.version){let fe=T.image;if(fe===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(q,T,b);return}}else T.isExternalTexture&&(q.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}l(he,"setTexture2D");function te(T,b){let q=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){dt(q,T,b);return}else T.isExternalTexture&&(q.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}l(te,"setTexture2DArray");function ue(T,b){let q=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){dt(q,T,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}l(ue,"setTexture3D");function re(T,b){let q=n.get(T);if(T.version>0&&q.__version!==T.version){Tt(q,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}l(re,"setTextureCube");let Pe={[vi]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[uc]:i.MIRRORED_REPEAT},Ge={[Ft]:i.NEAREST,[F0]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Qc]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},Te={[k0]:i.NEVER,[Pd]:i.ALWAYS,[G0]:i.LESS,[Cd]:i.LEQUAL,[V0]:i.EQUAL,[Rd]:i.GEQUAL,[H0]:i.GREATER,[W0]:i.NOTEQUAL};function Je(T,b){if(b.type===ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ot||b.magFilter===Qc||b.magFilter===Eo||b.magFilter===In||b.minFilter===Ot||b.minFilter===Qc||b.minFilter===Eo||b.minFilter===In)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Pe[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Pe[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Pe[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ge[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ge[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ft||b.minFilter!==Eo&&b.minFilter!==In||b.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}l(Je,"setTextureParameters");function Ke(T,b){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",F),I(b));let fe=b.source,se=p.get(fe);se===void 0&&(se={},p.set(fe,se));let xe=X(b);if(xe!==T.__cacheKey){se[xe]===void 0&&(se[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),se[xe].usedTimes++;let Me=se[T.__cacheKey];Me!==void 0&&(se[T.__cacheKey].usedTimes--,Me.usedTimes===0&&U(b)),T.__cacheKey=xe,T.__webglTexture=se[xe].texture}return q}l(Ke,"initTexture");function Xe(T,b,q){return Math.floor(Math.floor(T/q)/b)}l(Xe,"getRow");function et(T,b,q,fe){let xe=T.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,fe,b.data);else{xe.sort((D,le)=>D.start-le.start);let Me=0;for(let D=1;D<xe.length;D++){let le=xe[Me],ne=xe[D],ye=le.start+le.count,ge=Xe(ne.start,b.width,4),_e=Xe(le.start,b.width,4);ne.start<=ye+1&&ge===_e&&Xe(ne.start+ne.count-1,b.width,4)===ge?le.count=Math.max(le.count,ne.start+ne.count-le.start):(++Me,xe[Me]=ne)}xe.length=Me+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,le=xe.length;D<le;D++){let ne=xe[D],ye=Math.floor(ne.start/4),ge=Math.ceil(ne.count/4),_e=ye%b.width,Oe=Math.floor(ye/b.width),$e=ge,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(i.TEXTURE_2D,0,_e,Oe,$e,pe,q,fe,b.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}l(et,"updateTexture");function dt(T,b,q){let fe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=i.TEXTURE_3D);let se=Ke(T,b),xe=b.source;t.bindTexture(fe,T.__webglTexture,i.TEXTURE0+q);let Me=n.get(xe);if(xe.version!==Me.__version||se===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pe=it.getPrimaries(it.workingColorSpace),Be=b.colorSpace===ri?null:it.getPrimaries(b.colorSpace),Ye=b.colorSpace===ri||pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let oe=S(b.image,!1,r.maxTextureSize);oe=Fe(b,oe);let ve=s.convert(b.format,b.colorSpace),D=s.convert(b.type),le=C(b.internalFormat,ve,D,b.normalized,b.colorSpace,b.isVideoTexture);Je(fe,b);let ne,ye=b.mipmaps,ge=b.isVideoTexture!==!0,_e=Me.__version===void 0||se===!0,Oe=xe.dataReady,$e=E(b,oe);if(b.isDepthTexture)le=v(b.format===Qi,b.type),_e&&(ge?t.texStorage2D(i.TEXTURE_2D,1,le,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,le,oe.width,oe.height,0,ve,D,null));else if(b.isDataTexture)if(ye.length>0){ge&&_e&&t.texStorage2D(i.TEXTURE_2D,$e,le,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)ne=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ne.width,ne.height,ve,D,ne.data):t.texImage2D(i.TEXTURE_2D,pe,le,ne.width,ne.height,0,ve,D,ne.data);b.generateMipmaps=!1}else ge?(_e&&t.texStorage2D(i.TEXTURE_2D,$e,le,oe.width,oe.height),Oe&&et(b,oe,ve,D)):t.texImage2D(i.TEXTURE_2D,0,le,oe.width,oe.height,0,ve,D,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,le,ye[0].width,ye[0].height,oe.depth);for(let pe=0,Be=ye.length;pe<Be;pe++)if(ne=ye[pe],b.format!==Dn)if(ve!==null)if(ge){if(Oe)if(b.layerUpdates.size>0){let Ye=Fd(ne.width,ne.height,b.format,b.type);for(let Ae of b.layerUpdates){let mt=ne.data.subarray(Ae*Ye/ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ye/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,Ae,ne.width,ne.height,1,ve,mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ne.width,ne.height,oe.depth,ve,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,le,ne.width,ne.height,oe.depth,0,ne.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,ne.width,ne.height,oe.depth,ve,D,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,le,ne.width,ne.height,oe.depth,0,ve,D,ne.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&_e&&t.texStorage2D(i.TEXTURE_2D,$e,le,ye[0].width,ye[0].height);for(let pe=0,Be=ye.length;pe<Be;pe++)ne=ye[pe],b.format!==Dn?ve!==null?ge?Oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,ne.width,ne.height,ve,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,le,ne.width,ne.height,0,ne.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ne.width,ne.height,ve,D,ne.data):t.texImage2D(i.TEXTURE_2D,pe,le,ne.width,ne.height,0,ve,D,ne.data)}else if(b.isDataArrayTexture)if(ge){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$e,le,oe.width,oe.height,oe.depth),Oe)if(b.layerUpdates.size>0){let pe=Fd(oe.width,oe.height,b.format,b.type);for(let Be of b.layerUpdates){let Ye=oe.data.subarray(Be*pe/oe.data.BYTES_PER_ELEMENT,(Be+1)*pe/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,oe.width,oe.height,1,ve,D,Ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,D,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,oe.width,oe.height,oe.depth,0,ve,D,oe.data);else if(b.isData3DTexture)ge?(_e&&t.texStorage3D(i.TEXTURE_3D,$e,le,oe.width,oe.height,oe.depth),Oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,D,oe.data)):t.texImage3D(i.TEXTURE_3D,0,le,oe.width,oe.height,oe.depth,0,ve,D,oe.data);else if(b.isFramebufferTexture){if(_e)if(ge)t.texStorage2D(i.TEXTURE_2D,$e,le,oe.width,oe.height);else{let pe=oe.width,Be=oe.height;for(let Ye=0;Ye<$e;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,le,pe,Be,0,ve,D,null),pe>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),oe.parentNode!==pe){pe.appendChild(oe),f.add(b),pe.onpaint=Be=>{let Ye=Be.changedElements;for(let Ae of f)Ye.includes(Ae.image)&&(Ae.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Ye=i.RGBA,Ae=i.RGBA,mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ye,Ae,mt,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(ge&&_e){let pe=ze(ye[0]);t.texStorage2D(i.TEXTURE_2D,$e,le,pe.width,pe.height)}for(let pe=0,Be=ye.length;pe<Be;pe++)ne=ye[pe],ge?Oe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,ve,D,ne):t.texImage2D(i.TEXTURE_2D,pe,le,ve,D,ne);b.generateMipmaps=!1}else if(ge){if(_e){let pe=ze(oe);t.texStorage2D(i.TEXTURE_2D,$e,le,pe.width,pe.height)}Oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,D,oe)}else t.texImage2D(i.TEXTURE_2D,0,le,ve,D,oe);A(b)&&b.mipmapsAutoUpdate===!0&&w(fe),Me.__version=xe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(dt,"uploadTexture");function Tt(T,b,q){if(b.image.length!==6)return;let fe=Ke(T,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+q);let xe=n.get(se);if(se.version!==xe.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Me=it.getPrimaries(it.workingColorSpace),ie=b.colorSpace===ri?null:it.getPrimaries(b.colorSpace),oe=b.colorSpace===ri||Me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,le=[];for(let Ae=0;Ae<6;Ae++)!ve&&!D?le[Ae]=S(b.image[Ae],!0,r.maxCubemapSize):le[Ae]=D?b.image[Ae].image:b.image[Ae],le[Ae]=Fe(b,le[Ae]);let ne=le[0],ye=s.convert(b.format,b.colorSpace),ge=s.convert(b.type),_e=C(b.internalFormat,ye,ge,b.normalized,b.colorSpace),Oe=b.isVideoTexture!==!0,$e=xe.__version===void 0||fe===!0,pe=se.dataReady,Be=E(b,ne);Je(i.TEXTURE_CUBE_MAP,b);let Ye;if(b.isDepthTexture){if(_e=v(b.format===Qi,b.type),$e)if(Oe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,ne.width,ne.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ne.width,ne.height,0,ye,ge,null)}else if(ve){Oe&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,ne.width,ne.height);for(let Ae=0;Ae<6;Ae++){Ye=le[Ae].mipmaps;for(let mt=0;mt<Ye.length;mt++){let Ht=Ye[mt];b.format!==Dn?ye!==null?Oe?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt,0,0,Ht.width,Ht.height,ye,Ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt,_e,Ht.width,Ht.height,0,Ht.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt,0,0,Ht.width,Ht.height,ye,ge,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt,_e,Ht.width,Ht.height,0,ye,ge,Ht.data)}}}else{if(Ye=b.mipmaps,Oe&&$e){Ye.length>0&&Be++;let Ae=ze(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(D){Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,le[Ae].width,le[Ae].height,ye,ge,le[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,le[Ae].width,le[Ae].height,0,ye,ge,le[Ae].data);for(let mt=0;mt<Ye.length;mt++){let hr=Ye[mt].image[Ae].image;Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt+1,0,0,hr.width,hr.height,ye,ge,hr.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt+1,_e,hr.width,hr.height,0,ye,ge,hr.data)}}else{Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ye,ge,le[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ye,ge,le[Ae]);for(let mt=0;mt<Ye.length;mt++){let Ht=Ye[mt];Oe?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt+1,0,0,ye,ge,Ht.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,mt+1,_e,ye,ge,Ht.image[Ae])}}}A(b)&&b.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),xe.__version=se.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}l(Tt,"uploadCubeTexture");function lt(T,b,q,fe,se,xe){let Me=s.convert(q.format,q.colorSpace),ie=s.convert(q.type),oe=C(q.internalFormat,Me,ie,q.normalized,q.colorSpace),ve=n.get(b),D=n.get(q);if(D.__renderTarget=b,!ve.__hasExternalTextures){let le=Math.max(1,b.width>>xe),ne=Math.max(1,b.height>>xe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,xe,oe,le,ne,b.depth,0,Me,ie,null):t.texImage2D(se,xe,oe,le,ne,0,Me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,se,D.__webglTexture,0,je(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,se,D.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(lt,"setupFrameBufferTexture");function Lt(T,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let fe=b.depthTexture,se=fe&&fe.isDepthTexture?fe.type:null,xe=v(b.stencilBuffer,se),Me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(b),xe,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(b),xe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let fe=b.textures;for(let se=0;se<fe.length;se++){let xe=fe[se],Me=s.convert(xe.format,xe.colorSpace),ie=s.convert(xe.type),oe=C(xe.internalFormat,Me,ie,xe.normalized,xe.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(b),oe,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(b),oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,oe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(Lt,"setupRenderBufferStorage");function pt(T,b,q){let fe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(b.depthTexture);se.__renderTarget=b;let xe=fe?b.depthTexture.image[0]:b.depthTexture.image;(!se.__webglTexture||xe.width!==b.width||xe.height!==b.height)&&(xe.width=b.width,xe.height=b.height,b.depthTexture.needsUpdate=!0),fe?re(b.depthTexture,0):he(b.depthTexture,0);let Me=se.__webglTexture,ie=je(b),oe=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ve=b.depthTexture.format===Qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Zi)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,oe,Me,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,oe,Me,0);else if(b.depthTexture.format===Qi)me(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,oe,Me,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,oe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}l(pt,"setupDepthTexture");function St(T){let b=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let fe=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){let se=l(()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",se)},"disposeEvent");fe.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=fe}if(T.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)pt(b.__webglFramebuffer[fe],T,fe);else T.texture.mipmaps.length>0?pt(b.__webglFramebuffer[0],T,0):pt(b.__webglFramebuffer,T,0);else if(q){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=i.createRenderbuffer(),Lt(b.__webglDepthbuffer[fe],T,!1);else{let se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Lt(b.__webglDepthbuffer,T,!1);else{let se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}l(St,"setupDepthRenderbuffer");function It(T,b,q){let fe=n.get(T);b!==void 0&&lt(fe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&St(T)}l(It,"rebindTextures");function st(T){let b=T.texture,q=n.get(T),fe=n.get(b);T.addEventListener("dispose",k),I(T);let se=T.textures,xe=T.isWebGLCubeRenderTarget===!0,Me=se.length>1;if(Me||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=b.version,a.memory.textures++),xe){q.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps.length>0){q.__webglFramebuffer[ie]=[];for(let oe=0;oe<b.mipmaps.length;oe++)q.__webglFramebuffer[ie][oe]=i.createFramebuffer()}else q.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(b.mipmaps.length>0){q.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)q.__webglFramebuffer[ie]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ie=0,oe=se.length;ie<oe;ie++){let ve=n.get(se[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ie=0;ie<se.length;ie++){let oe=se[ie];q.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ie]);let ve=s.convert(oe.format,oe.colorSpace),D=s.convert(oe.type),le=C(oe.internalFormat,ve,D,oe.normalized,oe.colorSpace,T.isXRRenderTarget===!0),ne=je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,q.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(q.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Je(i.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)lt(q.__webglFramebuffer[ie][oe],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe);else lt(q.__webglFramebuffer[ie],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);A(b)?w(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let ie=0,oe=se.length;ie<oe;ie++){let ve=se[ie],D=n.get(ve),le=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,D.__webglTexture),Je(le,ve),lt(q.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+ie,le,0),A(ve)&&w(le)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,fe.__webglTexture),Je(ie,b),b.mipmaps.length>0)for(let oe=0;oe<b.mipmaps.length;oe++)lt(q.__webglFramebuffer[oe],T,b,i.COLOR_ATTACHMENT0,ie,oe);else lt(q.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,ie,0);A(b)?w(ie):b.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&St(T)}l(st,"setupRenderTarget");function B(T){let b=T.textures;for(let q=0,fe=b.length;q<fe;q++){let se=b[q];if(A(se)&&se.mipmapsAutoUpdate===!0){let xe=R(T),Me=n.get(se).__webglTexture;t.bindTexture(xe,Me),w(xe),t.unbindTexture()}}}l(B,"updateRenderTargetMipmap");let Rt=[];function at(T){if(T.samples>0){if(me(T)===!1){let b=T.textures,q=T.width,fe=T.height,se=i.COLOR_BUFFER_BIT,xe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),ie=b.length>1;if(ie)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let D=n.get(b[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,q,fe,0,0,q,fe,se,i.NEAREST),c===!0&&(Rt.length=0,Rt.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Rt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let D=n.get(b[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}l(at,"updateMultisampleRenderTarget");function je(T){return Math.min(r.maxSamples,T.samples)}l(je,"getRenderTargetSamples");function me(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}l(me,"useMultisampledRTT");function ut(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}l(ut,"updateVideoTexture");function Fe(T,b){let q=T.colorSpace,fe=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==no&&q!==ri&&(it.getTransfer(q)===ft?(fe!==Dn||se!==rn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",q)),b}l(Fe,"verifyColorSpace");function ze(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}l(ze,"getDimensions"),this.allocateTextureUnit=ce,this.resetTextureUnits=V,this.getTextureUnits=z,this.setTextureUnits=ae,this.setTexture2D=he,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=re,this.rebindTextures=It,this.setupRenderTarget=st,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=me,this.dispose=Y}l(ww,"WebGLTextures");function Ew(i,e){function t(n,r=ri){let s,a=it.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bd)return i.BYTE;if(n===Md)return i.SHORT;if(n===fa)return i.UNSIGNED_SHORT;if(n===eu)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Ed)return i.ALPHA;if(n===Ad)return i.RGB;if(n===Dn)return i.RGBA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===Td)return i.RED;if(n===iu)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===ru)return i.RG_INTEGER;if(n===su)return i.RGBA_INTEGER;if(n===Ao||n===To||n===Co||n===Ro)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===au||n===ou||n===lu||n===cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uu||n===hu||n===du||n===fu||n===pu||n===Po||n===mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uu||n===hu)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===du)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fu)return s.COMPRESSED_R11_EAC;if(n===pu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Po)return s.COMPRESSED_RG11_EAC;if(n===mu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gu||n===xu||n===_u||n===vu||n===yu||n===bu||n===Mu||n===Su||n===wu||n===Eu||n===Au||n===Tu||n===Cu||n===Ru)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===gu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cu)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ru)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pu||n===Iu||n===Lu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pu)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Nu||n===Io||n===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Du)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(Ew,"WebGLUtils");var Aw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tw=`
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

}`,mp=class mp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:Aw,fragmentShader:Tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};l(mp,"WebXRDepthSensing");var ap=mp,gp=class gp extends yi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,d=null,p=null,g=null,y=typeof XRWebGLBinding<"u",x=new ap,_={},S=t.getContextAttributes(),A=null,w=null,R=[],C=[],v=new ke,E=null,I=null,P=new fn;P.viewport=new wt;let F=new fn;F.viewport=new wt;let k=[P,F],J=new Dc,L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let he=R[X];return he===void 0&&(he=new ra,R[X]=he),he.getTargetRaySpace()},this.getControllerGrip=function(X){let he=R[X];return he===void 0&&(he=new ra,R[X]=he),he.getGripSpace()},this.getHand=function(X){let he=R[X];return he===void 0&&(he=new ra,R[X]=he),he.getHandSpace()};function Q(X){let he=C.indexOf(X.inputSource);if(he===-1)return;let te=R[he];te!==void 0&&(te.update(X.inputSource,X.frame,u||a),te.dispatchEvent({type:X.type,data:X.inputSource}))}l(Q,"onSessionEvent");function U(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let X=0;X<R.length;X++){let he=C[X];he!==null&&(C[X]=null,R[X].disconnect(he))}L=null,Y=null,x.reset();for(let X in _)delete _[X];if(e.setRenderTarget(A),p=null,d=null,f=null,r=null,w=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),I!==null){let X=I.camera;X.fov=I.fov,X.zoom=I.zoom,X.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}l(U,"onSessionEnd"),this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ue=null,re=null;S.depth&&(re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=S.stencil?Qi:Zi,ue=S.stencil?rs:ni);let Pe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Cn(d.textureWidth,d.textureHeight,{format:Dn,type:rn,depthTexture:new ji(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Cn(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let he=0;he<X.removed.length;he++){let te=X.removed[he],ue=C.indexOf(te);ue>=0&&(C[ue]=null,R[ue].disconnect(te))}for(let he=0;he<X.added.length;he++){let te=X.added[he],ue=C.indexOf(te);if(ue===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=C.length){C.push(te),ue=Pe;break}else if(C[Pe]===null){C[Pe]=te,ue=Pe;break}if(ue===-1)break}let re=R[ue];re&&re.connect(te)}}l(K,"onInputSourcesChange");function N(X,he){he===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(he.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}l(N,"updateCamera"),this.updateCamera=function(X){if(r===null)return;let he=X.near,te=X.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(te=x.depthFar)),J.near=F.near=P.near=he,J.far=F.far=P.far=te,(L!==J.near||Y!==J.far)&&(r.updateRenderState({depthNear:J.near,depthFar:J.far}),L=J.near,Y=J.far),J.layers.mask=X.layers.mask|6,P.layers.mask=J.layers.mask&-5,F.layers.mask=J.layers.mask&-3;let ue=X.parent,re=J.cameras;N(J,ue);for(let Pe=0;Pe<re.length;Pe++)N(re[Pe],ue);J.projectionMatrix.copy(P.projectionMatrix),J.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&X.isPerspectiveCamera&&(I={camera:X,fov:X.fov,zoom:X.zoom}),V(X,J,ue)};function V(X,he,te){te===null?X.matrix.copy(he.matrixWorld):(X.matrix.copy(te.matrixWorld),X.matrix.invert(),X.matrix.multiply(he.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(he.projectionMatrix),X.projectionMatrixInverse.copy(he.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}l(V,"updateUserCamera"),this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(X){return _[X]};let z=null;function ae(X,he){if(h=he.getViewerPose(u||a),g=he,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ue=!1;te.length!==J.cameras.length&&(J.cameras.length=0,ue=!0);for(let Te=0;Te<te.length;Te++){let Je=te[Te],Ke=null;if(p!==null)Ke=p.getViewport(Je);else{let et=f.getViewSubImage(d,Je);Ke=et.viewport,Te===0&&(e.setRenderTargetTextures(w,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(w))}let Xe=k[Te];Xe===void 0&&(Xe=new fn,Xe.layers.enable(Te),Xe.viewport=new wt,k[Te]=Xe),Xe.matrix.fromArray(Je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(J.matrix.copy(Xe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ue===!0&&J.cameras.push(Xe)}let re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Te=f.getDepthInformation(te[0]);Te&&Te.isValid&&Te.texture&&x.init(Te,r.renderState)}if(re&&re.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Te=0;Te<te.length;Te++){let Je=te[Te].camera;if(Je){let Ke=_[Je];Ke||(Ke=new mo,_[Je]=Ke);let Xe=f.getCameraImage(Je);Ke.sourceTexture=Xe}}}}for(let te=0;te<R.length;te++){let ue=C[te],re=R[te];ue!==null&&re!==void 0&&re.update(ue,he,u||a)}z&&z(X,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}l(ae,"onAnimationFrame");let ce=new Sg;ce.setAnimationLoop(ae),this.setAnimationLoop=function(X){z=X},this.dispose=function(){}}};l(gp,"WebXRManager");var op=gp,Cw=new gt,Dg=new We;Dg.set(-1,0,0,0,1,0,0,0,1);function Rw(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}l(t,"refreshTransformUniform");function n(x,_){_.color.getRGB(x.fogColor.value,Dd(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}l(n,"refreshFogUniforms");function r(x,_,S,A,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),f(x,_)):_.isMeshPhongMaterial?(s(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),d(x,_),_.isMeshPhysicalMaterial&&p(x,_,w)):_.isMeshMatcapMaterial?(s(x,_),g(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),y(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,S,A):_.isSpriteMaterial?u(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===_n&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===_n&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let S=e.get(_),A=S.envMap,w=S.envMapRotation;A&&(x.envMap.value=A,x.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Dg),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}l(s,"refreshUniformsCommon");function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}l(a,"refreshUniformsLine");function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}l(o,"refreshUniformsDash");function c(x,_,S,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*S,x.scale.value=A*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(c,"refreshUniformsPoints");function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}l(u,"refreshUniformsSprites");function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}l(h,"refreshUniformsPhong");function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}l(f,"refreshUniformsToon");function d(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}l(d,"refreshUniformsStandard");function p(x,_,S){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===_n&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}l(p,"refreshUniformsPhysical");function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}l(g,"refreshUniformsMatcap");function y(x,_){let S=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return l(y,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(Rw,"WebGLMaterials");function Pw(i,e,t,n){let r={},s={};function a(S,A){let w=A.program;n.uniformBlockBinding(S,w,r[S.id])}l(a,"bind");function o(S,A){let w=r[S.id];w===void 0&&(g(S),w=c(S),r[S.id]=w,S.addEventListener("dispose",x));let R=A.program;n.updateUBOMapping(S,R);let C=e.render.frame;s[S.id]!==C&&(u(S),s[S.id]=C)}l(o,"update");function c(S){let A=i.createBuffer(),w=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}l(c,"createBuffer");function u(S){let A=r[S.id],w=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,v=w.length;C<v;C++){let E=w[C];if(Array.isArray(E))for(let I=0,P=E.length;I<P;I++)h(E[I],C,I,R);else h(E,C,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(u,"updateBufferData");function h(S,A,w,R){if(d(S,A,w,R)===!0){let C=S.__offset,v=S.value;if(Array.isArray(v)){let E=0;for(let I=0;I<v.length;I++){let P=v[I],F=y(P,!0);f(P,S.__data,E),E+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}l(h,"updateUniform");function f(S,A,w){typeof S=="number"||typeof S=="boolean"?A[w]=S:S.isMatrix3?(A[w]=S.elements[0],A[w+1]=S.elements[1],A[w+2]=S.elements[2],A[w+3]=0,A[w+4]=S.elements[3],A[w+5]=S.elements[4],A[w+6]=S.elements[5],A[w+7]=0,A[w+8]=S.elements[6],A[w+9]=S.elements[7],A[w+10]=S.elements[8],A[w+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-w),w):S.toArray(A,w)}l(f,"writeUniformValue");function d(S,A,w,R){let C=S.value,v=A+"_"+w;if(Array.isArray(C)){R[v]===void 0&&(R[v]=[]);let E=R[v],I=!1;for(let P=0;P<C.length;P++)p(C[P],E,P)===!0&&(I=!0);return I}return p(C,R,v)}l(d,"hasUniformChanged");function p(S,A,w){if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:ArrayBuffer.isView(S)?A[w]=S.slice():A[w]=S.clone(),!0;{let R=A[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return A[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}l(p,"hasValueChanged");function g(S){let A=S.uniforms,w=0,R=16;for(let v=0,E=A.length;v<E;v++){let I=Array.isArray(A[v])?A[v]:[A[v]];for(let P=0,F=I.length;P<F;P++){let k=I[P],J=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(A[v])||Array.isArray(k.value),Y=w;for(let U=0,K=J.length;U<K;U++){let N=J[U],V=y(N,L),z=w%R,ae=z%V.boundary,ce=z+ae;w+=ae,ce!==0&&R-ce<V.storage&&(w+=R-ce),U===0&&(Y=w),w+=V.storage}let Q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Q((w-Y)/Float32Array.BYTES_PER_ELEMENT),k.__offset=Y}}let C=w%R;return C>0&&(w+=R-C),S.__size=w,S.__cache={},this}l(g,"prepareUniformsGroup");function y(S,A){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=16,w.storage=48):S.isMatrix4?(w.boundary=16,w.storage=64):S.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}l(y,"getUniformSize");function x(S){let A=S.target;A.removeEventListener("dispose",x),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}l(x,"onUniformsGroupsDispose");function _(){for(let S in r)i.deleteBuffer(r[S]);r={},s={}}return l(_,"dispose"),{bind:a,update:o,dispose:_}}l(Pw,"WebGLUniformsGroups");var Iw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function Lw(){return Pi===null&&(Pi=new la(Iw,16,16,Ri,Ln),Pi.name="DFG_LUT",Pi.minFilter=Ot,Pi.magFilter=Ot,Pi.wrapS=Xn,Pi.wrapT=Xn,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}l(Lw,"getDFGLUT");var xp=class xp{constructor(e={}){let{canvas:t=X0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,x=new Set([su,ru,iu]),_=new Set([rn,ni,fa,rs,tu,nu]),S=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},R=null,C=null,v=[],E=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,k=null,J=null,L=null,Y=null;this._outputColorSpace=Ut;let Q=0,U=0,K=null,N=-1,V=null,z=new wt,ae=new wt,ce=null,X=new Ue(0),he=0,te=t.width,ue=t.height,re=1,Pe=null,Ge=null,Te=new wt(0,0,te,ue),Je=new wt(0,0,te,ue),Ke=!1,Xe=new wr,et=new _c,dt=!1,Tt=!1,lt=new gt,Lt=new W,pt=new wt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function st(){return K===null?re:1}l(st,"getTargetPixelRatio");let B=n;function Rt(M,O){return t.getContext(M,O)}l(Rt,"getContext");let at,je,me,ut,Fe,ze,T,b,q,fe,se,xe,Me,ie,oe,ve,D,le,ne,ye,ge,_e,Oe;try{let M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),B===null){let O="webgl2";if(B=Rt(O,M),B===null)throw Rt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(M){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),He("WebGLRenderer: "+M.message),M}function $e(){at=new HM(B),at.init(),ge=new Ew(B,at),je=new LM(B,at,e,ge),me=new Sw(B,at),je.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),J=B.createFramebuffer(),L=B.createFramebuffer(),Y=B.createFramebuffer(),ut=new qM(B),Fe=new cw,ze=new ww(B,at,me,Fe,je,ge,ut),T=new VM(P),b=new $v(B),_e=new PM(B,b),q=new WM(B,b,ut,_e),fe=new $M(B,q,b,_e,ut),le=new YM(B,je,ze),oe=new DM(Fe),se=new lw(P,T,at,je,_e,oe),xe=new Rw(P,Fe),Me=new hw,ie=new xw(at),D=new RM(P,T,me,fe,g,c),ve=new Mw(P,fe,je),Oe=new Pw(B,ut,je,me),ne=new IM(B,at,ut),ye=new XM(B,at,ut),ut.programs=se.programs,P.capabilities=je,P.extensions=at,P.properties=Fe,P.renderLists=Me,P.shadowMap=ve,P.state=me,P.info=ut}l($e,"initGLContext"),y!==rn&&(I=new JM(y,t.width,t.height,o,r,s));let pe=new op(P,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=at.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=at.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(te,ue,!1))},this.getSize=function(M){return M.set(te,ue)},this.setSize=function(M,O,j=!0){if(pe.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,ue=O,t.width=Math.floor(M*re),t.height=Math.floor(O*re),j===!0&&(t.style.width=M+"px",t.style.height=O+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(te*re,ue*re).floor()},this.setDrawingBufferSize=function(M,O,j){te=M,ue=O,re=j,t.width=Math.floor(M*j),t.height=Math.floor(O*j),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(y===rn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(Te)},this.setViewport=function(M,O,j,$){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,O,j,$),me.viewport(z.copy(Te).multiplyScalar(st()).round())},this.getScissor=function(M){return M.copy(Je)},this.setScissor=function(M,O,j,$){M.isVector4?Je.set(M.x,M.y,M.z,M.w):Je.set(M,O,j,$),me.scissor(ae.copy(Je).multiplyScalar(st()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){me.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){Pe=M},this.setTransparentSort=function(M){Ge=M},this.getClearColor=function(M){return M.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,j=!0){let $=0;if(M){let Z=!1;if(K!==null){let Se=K.texture.format;Z=x.has(Se)}if(Z){let Se=K.texture.type,Ie=_.has(Se),be=D.getClearColor(),Ce=D.getClearAlpha(),Ne=be.r,qe=be.g,tt=be.b;Ie?(S[0]=Ne,S[1]=qe,S[2]=tt,S[3]=Ce,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=Ne,A[1]=qe,A[2]=tt,A[3]=Ce,B.clearBufferiv(B.COLOR,0,A))}else $|=B.COLOR_BUFFER_BIT}O&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),D.dispose(),Me.dispose(),ie.dispose(),ze.dispose(),Fe.dispose(),T.dispose(),fe.dispose(),q.dispose(),_e.dispose(),Oe.dispose(),se.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Em),pe.removeEventListener("sessionend",Am),qr.stop()};function Be(M){M.preventDefault(),so("WebGLRenderer: Context Lost."),F=!0}l(Be,"onContextLost");function Ye(){so("WebGLRenderer: Context Restored."),F=!1;let M=ut.autoReset,O=ve.enabled,j=ve.autoUpdate,$=ve.needsUpdate,Z=ve.type;$e(),ut.autoReset=M,ve.enabled=O,ve.autoUpdate=j,ve.needsUpdate=$,ve.type=Z}l(Ye,"onContextRestore");function Ae(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}l(Ae,"onContextCreationError");function mt(M){let O=M.target;O.removeEventListener("dispose",mt),Ht(O)}l(mt,"onMaterialDispose");function Ht(M){hr(M),Fe.remove(M)}l(Ht,"deallocateMaterial");function hr(M){let O=Fe.get(M).programs;O!==void 0&&(O.forEach(function(j){se.releaseProgram(j)}),M.isShaderMaterial&&se.releaseShaderCache(M))}l(hr,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(M,O,j,$,Z,Se){O===null&&(O=St);let Ie=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,be=Y_(M,O,j,$,Z);me.setMaterial($,Ie);let Ce=j.index,Ne=1;if($.wireframe===!0){if(Ce=q.getWireframeAttribute(j),Ce===void 0)return;Ne=2}let qe=j.drawRange,tt=j.attributes.position,Le=qe.start*Ne,nt=(qe.start+qe.count)*Ne;Se!==null&&(Le=Math.max(Le,Se.start*Ne),nt=Math.min(nt,(Se.start+Se.count)*Ne)),Ce!==null?(Le=Math.max(Le,0),nt=Math.min(nt,Ce.count)):tt!=null&&(Le=Math.max(Le,0),nt=Math.min(nt,tt.count));let Dt=nt-Le;if(Dt<0||Dt===1/0)return;_e.setup(Z,$,be,j,Ce);let vt,xt=ne;if(Ce!==null&&(vt=b.get(Ce),xt=ye,xt.setIndex(vt)),Z.isMesh)$.wireframe===!0?(me.setLineWidth($.wireframeLinewidth*st()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(Z.isLine){let Qt=$.linewidth;Qt===void 0&&(Qt=1),me.setLineWidth(Qt*st()),Z.isLineSegments?xt.setMode(B.LINES):Z.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else Z.isPoints?xt.setMode(B.POINTS):Z.isSprite&&xt.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(at.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Qt=Z._multiDrawStarts,De=Z._multiDrawCounts,hn=Z._multiDrawCount,ht=Ce?b.get(Ce).bytesPerElement:1,Yr=Fe.get($).currentProgram.getUniforms();for(let en=0;en<hn;en++)Yr.setValue(B,"_gl_DrawID",en),xt.render(Qt[en]/ht,De[en])}else if(Z.isInstancedMesh)xt.renderInstances(Le,Dt,Z.count);else if(j.isInstancedBufferGeometry){let Qt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,Qt);xt.renderInstances(Le,Dt,De)}else xt.render(Le,Dt)};function wm(M,O,j,$){k!==null&&M.isNodeMaterial&&k.setObject($,M),dt===!0&&oe.setState(M,j,!1),M.transparent===!0&&M.side===Ti&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,Xa(M,O,$),M.side=Ir,M.needsUpdate=!0,Xa(M,O,$),M.side=Ti):Xa(M,O,$)}l(wm,"prepareMaterial"),this.compile=function(M,O,j=null){j===null&&(j=M),k!==null&&k.renderStart(M,O,j),C=ie.get(j),C.init(O),E.push(C),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),M!==j&&M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(C.pushLight(Z),Z.castShadow&&C.pushShadow(Z))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),Tt=this.localClippingEnabled,dt=oe.init(this.clippingPlanes,Tt),dt===!0&&oe.setGlobalState(this.clippingPlanes,O),k!==null&&ve.render(C.state.shadowsArray,j,O);let $=new Set;return M.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Se=Z.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let be=Se[Ie];wm(be,j,O,Z),$.add(be)}else wm(Se,j,O,Z),$.add(Se)}),C=E.pop(),k!==null&&k.renderEnd(),$},this.compileAsync=function(M,O,j=null){let $=this.compile(M,O,j);return new Promise(Z=>{function Se(){if($.forEach(function(Ie){let Ce=Fe.get(Ie).currentProgram;(Ce===void 0||Ce.isReady())&&$.delete(Ie)}),$.size===0){Z(M);return}setTimeout(Se,10)}l(Se,"checkMaterialsReady"),at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let wh=null;function X_(M){wh&&wh(M)}l(X_,"onAnimationFrame");function Em(){qr.stop()}l(Em,"onXRSessionStart");function Am(){qr.start()}l(Am,"onXRSessionEnd");let qr=new Sg;qr.setAnimationLoop(X_),typeof self<"u"&&qr.setContext(self),this.setAnimationLoop=function(M){wh=M,pe.setAnimationLoop(M),M===null?qr.stop():qr.start()},pe.addEventListener("sessionstart",Em),pe.addEventListener("sessionend",Am),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(M,O);let j=pe.enabled===!0&&pe.isPresenting===!0,$=I!==null&&(K===null||j)&&I.begin(P,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,O,K),C=ie.get(M,E.length),C.init(O),C.state.textureUnits=ze.getTextureUnits(),E.push(C),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?et.setFromArrayCamera(O):Xe.setFromProjectionMatrix(lt,qn,O.reversedDepth),Tt=this.localClippingEnabled,dt=oe.init(this.clippingPlanes,Tt),R=Me.get(M,v.length),R.init(),v.push(R),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Ie=P.xr.getDepthSensingMesh();Ie!==null&&Eh(Ie,O,-1/0,P.sortObjects)}Eh(M,O,0,P.sortObjects),R.finish(),k!==null&&k.updateLights(C.state.lightsArray),P.sortObjects===!0&&R.sort(Pe,Ge),It=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,It&&D.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),dt===!0&&oe.beginShadows();let Z=C.state.shadowsArray;if(ve.render(Z,M,O),dt===!0&&oe.endShadows(),($&&I.hasRenderPass())===!1){let Ie=R.opaque,be=R.transmissive;if(C.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(be.length>0)for(let Ne=0,qe=Ce.length;Ne<qe;Ne++){let tt=Ce[Ne];Cm(Ie,be,M,tt)}It&&D.render(M);for(let Ne=0,qe=Ce.length;Ne<qe;Ne++){let tt=Ce[Ne];Tm(R,M,tt,tt.viewport)}}else be.length>0&&Cm(Ie,be,M,O),It&&D.render(M),Tm(R,M,O)}K!==null&&U===0&&(ze.updateMultisampleRenderTarget(K),ze.updateRenderTargetMipmap(K)),$&&I.end(P),M.isScene===!0&&M.onAfterRender(P,M,O),_e.resetDefaultState(),N=-1,V=null,E.pop(),E.length>0?(C=E[E.length-1],ze.setTextureUnits(C.state.textureUnits),dt===!0&&oe.setGlobalState(P.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?R=v[v.length-1]:R=null,k!==null&&k.renderEnd()};function Eh(M,O,j,$){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){let Ie=O.isArrayCamera?et:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){$&&pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(lt);let be=fe.update(M),Ce=M.material;Ce.visible&&R.push(M,be,Ce,j,pt.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Ie=O.isArrayCamera?et:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ie)){let be=fe.update(M),Ce=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),pt.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),pt.copy(be.boundingSphere.center)),pt.applyMatrix4(M.matrixWorld).applyMatrix4(lt)),Array.isArray(Ce)){let Ne=be.groups;for(let qe=0,tt=Ne.length;qe<tt;qe++){let Le=Ne[qe],nt=Ce[Le.materialIndex];nt&&nt.visible&&R.push(M,be,nt,j,pt.z,Le,O)}}else Ce.visible&&R.push(M,be,Ce,j,pt.z,null,O)}}}let Se=M.children;for(let Ie=0,be=Se.length;Ie<be;Ie++)Eh(Se[Ie],O,j,$)}l(Eh,"projectObject");function Tm(M,O,j,$){let{opaque:Z,transmissive:Se,transparent:Ie}=M;C.setupLightsView(j),dt===!0&&oe.setGlobalState(P.clippingPlanes,j),$&&me.viewport(z.copy($)),Z.length>0&&Rl(Z,O,j),Se.length>0&&Rl(Se,O,j),Ie.length>0&&Rl(Ie,O,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}l(Tm,"renderScene");function Cm(M,O,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){let Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Cn(1,1,{generateMipmaps:!0,type:Le?Ln:rn,minFilter:In,samples:Math.max(4,je.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let Se=C.state.transmissionRenderTarget[$.id],Ie=$.viewport||z;Se.setSize(Ie.z*P.transmissionResolutionScale,Ie.w*P.transmissionResolutionScale);let be=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(X),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),It&&D.render(j);let qe=P.toneMapping;P.toneMapping=Ci;let tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),dt===!0&&oe.setGlobalState(P.clippingPlanes,$),Rl(M,j,$),ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let nt=0,Dt=O.length;nt<Dt;nt++){let vt=O[nt],{object:xt,geometry:Qt,material:De,group:hn}=vt;if(De.side===Ti&&xt.layers.test($.layers)){let ht=De.side;De.side=_n,De.needsUpdate=!0,Rm(xt,j,$,Qt,De,hn),De.side=ht,De.needsUpdate=!0,Le=!0}}Le===!0&&(ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se))}P.setRenderTarget(be,Ce,Ne),P.setClearColor(X,he),tt!==void 0&&($.viewport=tt),P.toneMapping=qe}l(Cm,"renderTransmissionPass");function Rl(M,O,j){let $=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Se=M.length;Z<Se;Z++){let Ie=M[Z],{object:be,geometry:Ce,group:Ne}=Ie,qe=Ie.material;qe.allowOverride===!0&&$!==null&&(qe=$),be.layers.test(j.layers)&&Rm(be,O,j,Ce,qe,Ne)}}l(Rl,"renderObjects");function Rm(M,O,j,$,Z,Se){k!==null&&Z.isNodeMaterial&&k.setObject(M,Z),M.onBeforeRender(P,O,j,$,Z,Se),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(P,O,j,$,M,Se),Z.transparent===!0&&Z.side===Ti&&Z.forceSinglePass===!1?(Z.side=_n,Z.needsUpdate=!0,P.renderBufferDirect(j,O,$,Z,M,Se),Z.side=Ir,Z.needsUpdate=!0,P.renderBufferDirect(j,O,$,Z,M,Se),Z.side=Ti):P.renderBufferDirect(j,O,$,Z,M,Se),M.onAfterRender(P,O,j,$,Z,Se)}l(Rm,"renderObject");function Pm(M){let O=0;for(let j of M)j.texture!==null&&O++;return O}l(Pm,"countLightProbeGrids");function Xa(M,O,j){O.isScene!==!0&&(O=St);let $=Fe.get(M),Z=C.state.lights,Se=C.state.shadowsArray,Ie=Z.state.version,be=se.getParameters(M,Z.state,Se,O,j,C.state.lightProbeGridArray),Ce=se.getProgramCacheKey(be),Ne=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,$.fog=O.fog;let qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=T.get(M.envMap||$.environment,qe),$.envMapRotation=$.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",mt),Ne=new Map,$.programs=Ne,$.programVariants=new Map);let tt=Ne.get(Ce);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Ie)return Lm(M,be),tt}else be.uniforms=se.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,j,be),M.onBeforeCompile(be,P),tt=se.acquireProgram(be,Ce),Ne.set(Ce,tt),$.uniforms=be.uniforms;let Le=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=oe.uniform),Lm(M,be),$.needsLights=Z_(M),$.lightsStateVersion=Ie,$.needsLights&&(Le.ambientLightColor.value=Z.state.ambient,Le.lightProbe.value=Z.state.probe,Le.sunLights.value=Z.state.sun,Le.sunLightShadows.value=Z.state.sunShadow,Le.directionalLights.value=Z.state.directional,Le.directionalLightShadows.value=Z.state.directionalShadow,Le.spotLights.value=Z.state.spot,Le.spotLightShadows.value=Z.state.spotShadow,Le.rectAreaLights.value=Z.state.rectArea,Le.ltc_1.value=Z.state.rectAreaLTC1,Le.ltc_2.value=Z.state.rectAreaLTC2,Le.pointLights.value=Z.state.point,Le.pointLightShadows.value=Z.state.pointShadow,Le.hemisphereLights.value=Z.state.hemi,Le.sunShadowMatrix.value=Z.state.sunShadowMatrix,Le.sunShadowCascade.value=Z.state.sunShadowCascade,Le.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Le.spotLightMatrix.value=Z.state.spotLightMatrix,Le.spotLightMap.value=Z.state.spotLightMap,Le.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.numLightProbeGrids=Pm(C.state.lightProbeGridArray),$.currentProgram=tt,$.uniformsList=null,tt}l(Xa,"getProgram");function q_(M,O,j,$,Z){let Se=Fe.get(M),Ie=Se.currentProgram.id+","+$+","+Z,be=Se.programVariants.get(Ie);return be===void 0?(be=Xa(M,O,j),Se.programVariants.set(Ie,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=$,Se.toneMapping=Z),be}l(q_,"getProgramVariant");function Im(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=pa.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}l(Im,"getUniformList");function Lm(M,O){let j=Fe.get(M);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}l(Lm,"updateCommonMaterialProperties");function Y_(M,O,j,$,Z){O.isScene!==!0&&(O=St),ze.resetTextureUnits();let Se=O.fog,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?O.environment:null,be=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:it.workingColorSpace,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ne=T.get($.envMap||Ie,Ce),qe=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,tt=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!j.morphAttributes.position,nt=!!j.morphAttributes.normal,Dt=!!j.morphAttributes.color,vt=Ci;$.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(vt=P.toneMapping);let xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qt=xt!==void 0?xt.length:0,De=Fe.get($),hn=C.state.lights;if(dt===!0&&(Tt===!0||M!==V)){let Ct=M===V&&$.id===N;oe.setState($,M,Ct)}let ht=!1,Yr=!1;$.version===De.__version?De.needsLights&&De.lightsStateVersion!==hn.state.version||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==Ne||$.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==qe||De.vertexTangents!==tt||De.morphTargets!==Le||De.morphNormals!==nt||De.morphColors!==Dt||De.morphTargetsCount!==Qt||De.numLightProbeGrids!==Pm(C.state.lightProbeGridArray)?ht=!0:(De.outputColorSpace!==be||De.toneMapping!==vt)&&(Yr=!0):(ht=!0,De.__version=$.version);let en=De.currentProgram;(ht===!0||Yr===!0)&&(en=Yr===!0?q_($,O,Z,be,vt):Xa($,O,Z),k&&$.isNodeMaterial&&k.onUpdateProgram($,en,De));let Pl=!1,dr=!1,$r=!1,ct=en.getUniforms(),$t=De.uniforms;if(me.useProgram(en.program)&&(Pl=!0,dr=!0,$r=!0),$.id!==N&&(N=$.id,dr=!0),Pl||V!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(B,"projectionMatrix",M.projectionMatrix),ct.setValue(B,"viewMatrix",M.matrixWorldInverse);let Wt=ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(B,Lt.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ct.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,dr=!0,$r=!0)}if(De.needsLights&&(hn.state.sunShadowMap.length>0&&ct.setValue(B,"sunShadowMap",hn.state.sunShadowMap,ze),hn.state.directionalShadowMap.length>0&&ct.setValue(B,"directionalShadowMap",hn.state.directionalShadowMap,ze),hn.state.spotShadowMap.length>0&&ct.setValue(B,"spotShadowMap",hn.state.spotShadowMap,ze),hn.state.pointShadowMap.length>0&&ct.setValue(B,"pointShadowMap",hn.state.pointShadowMap,ze)),Z.isSkinnedMesh){ct.setOptional(B,Z,"bindMatrix"),ct.setOptional(B,Z,"bindMatrixInverse");let Ct=Z.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ct.setValue(B,"boneTexture",Ct.boneTexture,ze))}Z.isBatchedMesh&&(ct.setOptional(B,Z,"batchingTexture"),ct.setValue(B,"batchingTexture",Z._matricesTexture,ze),ct.setOptional(B,Z,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",Z._indirectTexture,ze),ct.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",Z._colorsTexture,ze));let jn=j.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&le.update(Z,j,en),(dr||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,ct.setValue(B,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&O.environment!==null&&($t.envMapIntensity.value=O.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=Lw()),dr){if(ct.setValue(B,"toneMappingExposure",P.toneMappingExposure),De.needsLights&&$_($t,$r),Se&&$.fog===!0&&xe.refreshFogUniforms($t,Se),xe.refreshMaterialUniforms($t,$,re,ue,C.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Ct=w,Wt=0;for(let ki of C.state.lightProbeGridArray)ki.texture!==null&&(Ct.textures[Wt]=ki.texture,Ct.min[Wt]=ki.boundingBox.min,Ct.max[Wt]=ki.boundingBox.max,Ct.resolution[Wt]=ki.resolution,Wt++);for(let ki in Ct)Ct[ki].length=Wt;$t.probesSH.value=Ct.textures,$t.probesMin.value=Ct.min,$t.probesMax.value=Ct.max,$t.probesResolution.value=Ct.resolution}pa.upload(B,Im(De),$t,ze)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pa.upload(B,Im(De),$t,ze),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ct.setValue(B,"center",Z.center),ct.setValue(B,"modelViewMatrix",Z.modelViewMatrix),ct.setValue(B,"normalMatrix",Z.normalMatrix),ct.setValue(B,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let Ct=$.uniformsGroups;for(let Wt=0,ki=Ct.length;Wt<ki;Wt++){let Nm=Ct[Wt];Oe.update(Nm,en),Oe.bind(Nm,en)}}return en}l(Y_,"setProgram");function $_(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}l($_,"markUniformsLightsNeedsUpdate");function Z_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}l(Z_,"materialNeedsLights"),this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,O,j){let $=Fe.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Fe.get(M.texture).__webglTexture=O,Fe.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let j=Fe.get(M);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,j=0){K=M,Q=O,U=j;let $=null,Z=!1,Se=!1;if(M){let be=Fe.get(M);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),z.copy(M.viewport),ae.copy(M.scissor),ce=M.scissorTest,me.viewport(z),me.scissor(ae),me.setScissorTest(ce),N=-1;return}else if(be.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(be.__hasExternalTextures)ze.rebindTextures(M,Fe.get(M.texture).__webglTexture,Fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let qe=M.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&Fe.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);let Ne=Fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?$=Ne[O][j]:$=Ne[O],Z=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?$=Fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[j]:$=Ne,z.copy(M.viewport),ae.copy(M.scissor),ce=M.scissorTest}else z.copy(Te).multiplyScalar(re).floor(),ae.copy(Je).multiplyScalar(re).floor(),ce=Ke;if(j!==0&&($=J),me.bindFramebuffer(B.FRAMEBUFFER,$)&&me.drawBuffers(M,$),me.viewport(z),me.scissor(ae),me.setScissorTest(ce),Z){let be=Fe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,j)}else if(Se){let be=O;for(let Ce=0;Ce<M.textures.length;Ce++){let Ne=Fe.get(M.textures[Ce]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,j,be)}}else if(M!==null&&j!==0){let be=Fe.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,j)}N=-1};function Dm(M){let O=Fe.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=je.textureFormatReadable(M.format),O.__typeReadable=je.textureTypeReadable(M.type)),O}l(Dm,"getReadableState"),this.readRenderTargetPixels=function(M,O,j,$,Z,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){me.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Ne=M.textures[be],qe=Ne.format,tt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=Dm(Ne);if(Le.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-$&&j>=0&&j<=M.height-Z&&B.readPixels(O,j,$,Z,ge.convert(qe),ge.convert(tt),Se)}finally{let Ne=K!==null?Fe.get(K).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,O,j,$,Z,Se,Ie,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(O>=0&&O<=M.width-$&&j>=0&&j<=M.height-Z){me.bindFramebuffer(B.FRAMEBUFFER,Ce);let Ne=M.textures[be],qe=Ne.format,tt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Le=Dm(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,nt),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(O,j,$,Z,ge.convert(qe),ge.convert(tt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Dt=K!==null?Fe.get(K).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Dt);let vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Y0(B,vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,nt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(nt),B.deleteSync(vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,j=0){let $=Math.pow(2,-j),Z=Math.floor(M.image.width*$),Se=Math.floor(M.image.height*$),Ie=O!==null?O.x:0,be=O!==null?O.y:0;ze.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Ie,be,Z,Se),me.unbindTexture()},this.copyTextureToTexture=function(M,O,j=null,$=null,Z=0,Se=0){let Ie,be,Ce,Ne,qe,tt,Le,nt,Dt,vt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(j!==null)Ie=j.max.x-j.min.x,be=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,qe=j.min.y,tt=j.isBox3?j.min.z:0;else{let ct=Math.pow(2,-Z);Ie=Math.floor(vt.width*ct),be=Math.floor(vt.height*ct),M.isDataArrayTexture?Ce=vt.depth:M.isData3DTexture?Ce=Math.floor(vt.depth*ct):Ce=1,Ne=0,qe=0,tt=0}$!==null?(Le=$.x,nt=$.y,Dt=$.z):(Le=0,nt=0,Dt=0);let xt=ge.convert(O.format),Qt=ge.convert(O.type),De;O.isData3DTexture?(ze.setTexture3D(O,0),De=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ze.setTexture2DArray(O,0),De=B.TEXTURE_2D_ARRAY):(ze.setTexture2D(O,0),De=B.TEXTURE_2D),me.activeTexture(B.TEXTURE0),me.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),me.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),me.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let hn=me.getParameter(B.UNPACK_ROW_LENGTH),ht=me.getParameter(B.UNPACK_IMAGE_HEIGHT),Yr=me.getParameter(B.UNPACK_SKIP_PIXELS),en=me.getParameter(B.UNPACK_SKIP_ROWS),Pl=me.getParameter(B.UNPACK_SKIP_IMAGES);me.pixelStorei(B.UNPACK_ROW_LENGTH,vt.width),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt.height),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(B.UNPACK_SKIP_ROWS,qe),me.pixelStorei(B.UNPACK_SKIP_IMAGES,tt);let dr=M.isDataArrayTexture||M.isData3DTexture,$r=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ct=Fe.get(M),$t=Fe.get(O),jn=Fe.get(ct.__renderTarget),Ct=Fe.get($t.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,jn.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Wt=0;Wt<Ce;Wt++)dr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(M).__webglTexture,Z,tt+Wt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(O).__webglTexture,Se,Dt+Wt)),B.blitFramebuffer(Ne,qe,Ne+Ie,qe+be,Le,nt,Le+Ie,nt+be,B.DEPTH_BUFFER_BIT,B.NEAREST);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||M.isRenderTargetTexture||Fe.has(M)){let ct=Fe.get(M),$t=Fe.get(O);me.bindFramebuffer(B.READ_FRAMEBUFFER,L),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let jn=0;jn<Ce;jn++)dr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ct.__webglTexture,Z,tt+jn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ct.__webglTexture,Z),$r?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,Se,Dt+jn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,Se),Z!==0?B.blitFramebuffer(Ne,qe,Ne+Ie,qe+be,Le,nt,Le+Ie,nt+be,B.COLOR_BUFFER_BIT,B.NEAREST):$r?B.copyTexSubImage3D(De,Se,Le,nt,Dt+jn,Ne,qe,Ie,be):B.copyTexSubImage2D(De,Se,Le,nt,Ne,qe,Ie,be);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else $r?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(De,Se,Le,nt,Dt,Ie,be,Ce,xt,Qt,vt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(De,Se,Le,nt,Dt,Ie,be,Ce,xt,vt.data):B.texSubImage3D(De,Se,Le,nt,Dt,Ie,be,Ce,xt,Qt,vt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,Le,nt,Ie,be,xt,Qt,vt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,Le,nt,vt.width,vt.height,xt,vt.data):B.texSubImage2D(B.TEXTURE_2D,Se,Le,nt,Ie,be,xt,Qt,vt);me.pixelStorei(B.UNPACK_ROW_LENGTH,hn),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Yr),me.pixelStorei(B.UNPACK_SKIP_ROWS,en),me.pixelStorei(B.UNPACK_SKIP_IMAGES,Pl),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(M){Fe.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){Q=0,U=0,K=null,me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};l(xp,"WebGLRenderer");var Gu=xp;var Mn=["grass","plains","sand","rock","snow","forest","mud","tundra"],Li={shore:-.03,deep:-.15,reach:3},Xu={relief:{base:0,roughness:0,shape:"flat"},colour:"#1b1f24",surface:"grass"},Ug={relief:{base:.03,roughness:.015,shape:"rolling"},colour:"#6b8746",surface:"grass"},Ng={Ocean:{relief:{base:Li.deep,roughness:.003,shape:"rolling"},colour:"#33505f",surface:"sand"},Grassland:Ug,Plains:{relief:{base:.025,roughness:.01,shape:"rolling"},colour:"#99935a",surface:"plains"},Desert:{relief:{base:.025,roughness:.025,shape:"rolling"},colour:"#c4ab78",surface:"sand"},Tundra:{relief:{base:.035,roughness:.015,shape:"rolling"},colour:"#8a8d78",surface:"tundra"},Arctic:{relief:{base:.05,roughness:.02,shape:"rolling"},colour:"#dfe6ea",surface:"snow"},Glacier:{relief:{base:.08,roughness:.03,shape:"rolling"},colour:"#e7eff3",surface:"snow"},Forest:{relief:{base:.04,roughness:.02,shape:"rolling"},colour:"#40583a",surface:"forest"},Jungle:{relief:{base:.03,roughness:.02,shape:"rolling"},colour:"#355a36",surface:"forest"},Swamp:{relief:{base:.005,roughness:.004,shape:"flat"},colour:"#4f5b3d",surface:"mud"},River:{relief:{base:.012,roughness:.006,shape:"rolling"},colour:"#5d7c4f",surface:"grass"},Hills:{relief:{base:.12,roughness:.04,shape:"ridged"},colour:"#7b7650",surface:"plains"},Mountains:{relief:{base:.35,roughness:.08,shape:"peaked"},colour:"#77726a",surface:"rock"}},ls=l(i=>i==="Unknown"?Xu:(Object.prototype.hasOwnProperty.call(Ng,i)?Ng[i]:void 0)??Ug,"terrainEntry");var Dw=l((i,e,t)=>{let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041)|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296},"hash"),Fg=Float64Array.from({length:32},(i,e)=>(e%2===0?Math.cos:Math.sin)(Math.floor(e/2)*(Math.PI/8))),Og=l(i=>i*i*i*(i*(i*6-15)+10),"fade"),Di=l(({cell:i,period:e,seed:t})=>{let n=Math.max(1,Math.round(e.u/i)),r=e.u/n,s=e.v===null?null:Math.max(1,Math.round(e.v/i)),a=e.v===null||s===null?i:e.v/s,o=l(h=>(h%n+n)%n,"wrapU"),c=l(h=>s===null?h:(h%s+s)%s,"wrapV"),u=l((h,f,d,p)=>{let g=Math.floor(Dw(h,f,t)*16)*2;return(Fg[g]??0)*d+(Fg[g+1]??0)*p},"slope");return(h,f)=>{let d=h/r,p=f/a,g=Math.floor(d),y=Math.floor(p),x=d-g,_=p-y,S=Og(x),A=Og(_),w=o(g),R=o(g+1),C=c(y),v=c(y+1),E=u(w,C,x,_)+(u(R,C,x-1,_)-u(w,C,x,_))*S,I=u(w,v,x,_-1)+(u(R,v,x-1,_-1)-u(w,v,x,_-1))*S;return Math.max(-1,Math.min(1,(E+(I-E)*A)*1.4))}},"periodicNoise"),Nn=l(i=>{let e=i.map((n,r)=>.5**r),t=e.reduce((n,r)=>n+r,0);return(n,r)=>i.reduce((s,a,o)=>s+a(n,r)*(e[o]??0),0)/t},"fractalNoise");var Lr=128,$u=.5,qu=l(i=>(e,t)=>1-2*Math.abs(i(e,t)),"ridge"),Nw={grass:{grain:l(({noise:i})=>Nn([i(64,1),i(16,2),i(4,25)]),"grain"),shade:.3,bumps:l(({noise:i})=>Nn([i(4,3),i(12,4)]),"bumps"),steep:2.5,rough:.9,roughVaries:.05},plains:{grain:l(({noise:i})=>Nn([i(64,5),i(8,6)]),"grain"),shade:.3,bumps:l(({noise:i})=>Nn([i(8,7),i(24,8)]),"bumps"),steep:2.2,rough:.92,roughVaries:.04},sand:{grain:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9),s=i(32,10);return(a,o)=>.7*n(a+t(6)*r(a,o),o)+.3*s(a,o)},"grain"),shade:.12,bumps:l(({noise:i,wave:e,texels:t})=>{let n=e(7,3),r=i(64,9);return(s,a)=>n(s+t(6)*r(s,a),a)},"bumps"),steep:1.5,rough:.88,roughVaries:.04},rock:{grain:l(({noise:i})=>Nn([qu(i(24,11)),qu(i(12,12)),i(6,13)]),"grain"),shade:.35,bumps:l(({noise:i})=>Nn([qu(i(24,11)),qu(i(12,12)),i(6,13)]),"bumps"),steep:2.5,rough:.75,roughVaries:.1},snow:{grain:l(({noise:i})=>i(64,14),"grain"),shade:.06,bumps:l(({noise:i})=>i(32,15),"bumps"),steep:.8,rough:.55,roughVaries:.05},forest:{grain:l(({noise:i})=>Nn([i(10,16),i(40,17)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(8,18),"bumps"),steep:2,rough:.9,roughVaries:.05},mud:{grain:l(({noise:i})=>i(48,19),"grain"),shade:.25,bumps:l(({noise:i})=>Nn([i(32,20),i(8,21)]),"bumps"),steep:1.2,rough:.65,roughVaries:.25},tundra:{grain:l(({noise:i})=>Nn([i(4,22),i(48,23)]),"grain"),shade:.3,bumps:l(({noise:i})=>i(6,24),"bumps"),steep:2,rough:.9,roughVaries:.05}},Yu=l(i=>Math.max(0,Math.min(255,Math.round(i*255))),"byte"),Uw=l((i=Lr,[e,t]=[0,0])=>{let n=new Uint8Array(i*i*4*Mn.length),r={u:i,v:i};return Mn.forEach((s,a)=>{let o=Nw[s],c=l((A,w)=>Di({cell:A*i/Lr,period:r,seed:7919*(a+1)+w}),"noise"),u=l((A,w)=>(R,C)=>Math.sin(2*Math.PI*(A*R+w*C)/i),"wave"),h={noise:c,wave:u,texels:l(A=>A*i/Lr,"texels")},f=o.grain(h),d=o.bumps(h),p=a*i*i*4,g=new Float32Array(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++)g[A*i+w]=d(w+e,A+t);let y=l((A,w)=>g[(w+i)%i*i+(A+i)%i]??0,"height"),x=new Float32Array(i*i),_=0;for(let A=0;A<i;A++)for(let w=0;w<i;w++)x[A*i+w]=f(w+e,A+t),_+=x[A*i+w]??0;let S=_/(i*i);for(let A=0;A<i;A++)for(let w=0;w<i;w++){let R=p+(A*i+w)*4,C=(x[A*i+w]??0)-S,v=(y(w+1,A)-y(w-1,A))/2*(i/Lr),E=(y(w,A+1)-y(w,A-1))/2*(i/Lr);n[R]=Yu(o.shade*C+.5),n[R+1]=Yu((1-Math.max(-1,Math.min(1,v*o.steep)))/2),n[R+2]=Yu((1-Math.max(-1,Math.min(1,E*o.steep)))/2),n[R+3]=Yu(o.rough+o.roughVaries*C)}}),n},"surfaceTextures"),Bg=Uw;var si={rockFrom:.97,rockTo:.88,snowAtEquator:.4,snowAtPoles:.26,snowDeepens:.04,snowSlips:.85,snowHolds:.95,wetFrom:.1,wetTo:.4,wetUpTo:.03};var ai=l(i=>Number.isInteger(i)?`${i}.0`:`${i}`,"number"),zg=`
float coverLatitude(float v, float extent) {
  float down = mod(v, extent);

  return min(1.0, abs(2.0 * down / extent - 1.0));
}

float coverRock(float upright) {
  return 1.0 - smoothstep(${ai(si.rockTo)}, ${ai(si.rockFrom)}, upright);
}

float coverSnow(float height, float upright, float latitude) {
  float line = ${ai(si.snowAtEquator)} + (${ai(si.snowAtPoles)} - ${ai(si.snowAtEquator)}) * latitude;

  return smoothstep(line, line + ${ai(si.snowDeepens)}, height) * smoothstep(${ai(si.snowSlips)}, ${ai(si.snowHolds)}, upright);
}

float coverWet(float height, float shore) {
  return smoothstep(${ai(si.wetFrom)}, ${ai(si.wetTo)}, shore) * (1.0 - smoothstep(0.0, ${ai(si.wetUpTo)}, height));
}
`;var Fw=l(i=>[i.u/Math.max(1,Math.round(i.u/$u)),i.v===null?$u:i.v/Math.max(1,Math.round(i.v/$u))],"surfaceTile"),Ow=Mn.map((i,e)=>`vec4 surface${e} = texture(surfaceDetail, vec3(surfaceAt, ${e}.0));
  surface += vSurfaces${e<4?"A":"B"}.${"xyzw"[e%4]} * surface${e};`).join(`
  `),Bw=null,zw=l(()=>Bw??=Bg(),"made"),kw=l((i,e)=>{let t=new es(zw(),Lr,Lr,Mn.length),n=new Ai({roughness:.92,vertexColors:!0}),[r,s]=Fw(i);return t.format=Dn,t.type=rn,t.wrapS=vi,t.wrapT=vi,t.magFilter=Ot,t.minFilter=In,t.generateMipmaps=!0,t.anisotropy=4,t.colorSpace=ri,t.needsUpdate=!0,n.onBeforeCompile=a=>{a.uniforms.surfaceDetail={value:t},a.uniforms.surfaceTile={value:new ke(r,s)},a.uniforms.groundExtent={value:e},a.uniforms.rockColour={value:new Ue(ls("Mountains").colour)},a.uniforms.snowColour={value:new Ue(ls("Glacier").colour)},a.vertexShader=`attribute vec4 surfacesA;
attribute vec4 surfacesB;
attribute float shore;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
varying float vHeight;
varying float vShore;
${a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vSurfacesA = surfacesA;
  vSurfacesB = surfacesB;
  vShore = shore;
  // Where it is on the ground, at this copy of the world: east and south; and how high.
  vec4 groundAt = modelMatrix * vec4(transformed, 1.0);
  vGround = groundAt.xz;
  vHeight = groundAt.y;`)}`,a.fragmentShader=`uniform highp sampler2DArray surfaceDetail;
uniform vec2 surfaceTile;
uniform float groundExtent;
uniform vec3 rockColour;
uniform vec3 snowColour;
varying vec4 vSurfacesA;
varying vec4 vSurfacesB;
varying vec2 vGround;
varying float vHeight;
varying float vShore;
${zg}
${a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  // Every surface sampled, so their smaller copies are chosen alike across where they meet.
  vec2 surfaceAt = vGround / surfaceTile;
  float surfaceTotal = dot(vSurfacesA, vec4(1.0)) + dot(vSurfacesB, vec4(1.0));
  vec4 surface = vec4(0.0);
  ${Ow}
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
  surface = mix(surface, surface${Mn.indexOf("rock")}, rockShare);
  diffuseColor.rgb = mix(diffuseColor.rgb, snowColour, snowShare);
  surface = mix(surface, surface${Mn.indexOf("snow")}, snowShare);
  diffuseColor.rgb *= 0.5 + surface.r;
  // Wet: darker, and shinier.
  diffuseColor.rgb *= 1.0 - 0.3 * wetShare;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = mix(surface.a, 0.3, wetShare);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  // The detail's bumps tilt the ground east and south, as the view sees it, along the ground's own slope.
  vec3 surfaceTilt = mat3(viewMatrix) * vec3(surface.g * 2.0 - 1.0, 0.0, surface.b * 2.0 - 1.0);
  normal = normalize(normal + surfaceTilt - dot(surfaceTilt, normal) * normal);`)}`},n.customProgramCacheKey=()=>"land-surfaces-cover",{material:n,detail:t}},"landMaterial"),kg=kw;function Vg(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new Bt;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in f.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(f.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in f.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(f.morphAttributes[g]),p++}if(p!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=f.index.count;else if(f.attributes.position!==void 0)g=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,g,h),u+=g}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in s){let f=Gg(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][d]);let g=Gg(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}l(Vg,"mergeGeometries");function Gg(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){let h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new _t(a,t,n),c=0;for(let u=0;u<i.length;++u){let h=i[u];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);o.setComponent(d+f,g,y)}}else a.set(h.array,c);c+=h.count*t}return r!==void 0&&(o.gpuType=r),o}l(Gg,"mergeAttributes");var Hg="#c79a72",Gw="#5a4a3a";var an="#7a5532",yp="#5f6266",Wg="#8a8f96",oi="#5d6447",_p="#e8e0cc",Yg="#6e4b2f",cs="#8a8580",Xg="#5b3e27",ga="#7d858c",Vw=new W(0,1,0),Ee=new Mi(1,1,1),qt=new Si(.5,.5,1,10),us=new wi(.5,1,10),xa=new Ar(.5,10,8),Sp=class Sp{constructor(){this.parts=[]}add(e){return this.parts.push(e),this}addAll(e,t,n=0){let r=Math.cos(n),s=Math.sin(n);return e.parts.forEach(a=>{let[o,c,u]=a.at;this.parts.push({...a,at:[t[0]+o*r+u*s,t[1]+c,t[2]-o*s+u*r],yaw:(a.yaw??0)+n})}),this}};l(Sp,"Parts");var Yt=Sp,Hw=l((i,e,t)=>{switch(i){case"ancient":t.add({shape:xa,colour:e[1],at:[0,.172,0],size:[.048,.03,.048]});break;case"medieval":t.add({shape:us,colour:yp,at:[0,.188,0],size:[.05,.04,.05]});break;case"renaissance":t.add({shape:Ee,colour:"#2a2a2a",at:[0,.178,0],size:[.06,.016,.06]});break;case"industrial":t.add({shape:qt,colour:e[0],at:[0,.18,0],size:[.046,.022,.046]});break;default:t.add({shape:xa,colour:oi,at:[0,.172,0],size:[.052,.034,.052]})}},"headgear"),Ww=l((i,e,t,n)=>{switch(i){case"club":n.add({shape:qt,colour:an,at:[.04,.1,.01],size:[.014,.08,.014],turn:[0,0,.5]});break;case"spear":n.add({shape:qt,colour:an,at:[.04,.12,0],size:[.006,.2,.006]}),n.add({shape:us,colour:yp,at:[.04,.23,0],size:[.012,.025,.012]});break;case"pike":n.add({shape:qt,colour:an,at:[.04,.15,0],size:[.006,.28,.006]}),n.add({shape:us,colour:Wg,at:[.04,.3,0],size:[.012,.03,.012]});break;case"sword":n.add({shape:Ee,colour:Wg,at:[.045,.12,.012],size:[.008,.07,.004],turn:[.3,0,0]});break;case"bow":n.add({shape:Ee,colour:an,at:[-.04,.11,.02],size:[.006,.11,.006]});break;case"lance":n.add({shape:qt,colour:an,at:[.04,.14,.05],size:[.006,.24,.006],turn:[1.1,0,0]});break;case"musket":case"rifle":n.add({shape:Ee,colour:i==="rifle"?"#3a3a3a":an,at:[.03,.12,.02],size:[.008,.11,.01],turn:[0,0,.4]});break;case"case":n.add({shape:Ee,colour:"#3b2a1e",at:[.042,.072,.008],size:[.03,.022,.009]});break;case"pack":n.add({shape:Ee,colour:"#7a6a48",at:[0,.115,-.025],size:[.042,.05,.022]}).add({shape:qt,colour:an,at:[.042,.1,.012],size:[.006,.19,.006]});break;default:}e==="ancient"&&(i==="spear"||i==="sword")&&n.add({shape:qt,colour:t[1],at:[-.035,.1,.012],size:[.05,.008,.05],turn:[Math.PI/2,0,.2]})},"carried"),Xw={snow:{coat:"#e8eaec",legs:"#d4d7da"},irregular:{coat:"#6a5a40",legs:"#4a4036"}},bp=l((i,e,t,{legs:n=!0,dress:r}={})=>{let s=new Yt,a=r===void 0?void 0:Xw[r],o=a?.coat??(i==="modern"?oi:t[0]),c=a?.legs??(i==="ancient"?Hg:i==="modern"?oi:Gw);return n&&(s.add({shape:Ee,colour:c,at:[-.012,.04,0],size:[.018,.08,.02]}),s.add({shape:Ee,colour:c,at:[.012,.04,0],size:[.018,.08,.02]})),s.add({shape:Ee,colour:o,at:[0,.112,0],size:[.05,.065,.028]}),s.add({shape:Ee,colour:t[1],at:[0,.088,0],size:[.052,.012,.03]}),s.add({shape:Ee,colour:o,at:[-.032,.11,0],size:[.014,.055,.016]}),s.add({shape:Ee,colour:o,at:[.032,.11,0],size:[.014,.055,.016]}),s.add({shape:xa,colour:Hg,at:[0,.16,0],size:[.034,.038,.034]}),r==="snow"?s.add({shape:xa,colour:"#f2f3f4",at:[0,.172,-.002],size:[.044,.034,.044]}):r==="irregular"?s.add({shape:xa,colour:t[1],at:[0,.176,0],size:[.042,.016,.042]}):Hw(i,t,s),r==="parachute"&&s.add({shape:Ee,colour:"#4d5340",at:[0,.112,-.026],size:[.046,.06,.026]}),Ww(e,i,t,s),s},"person"),qg=l(i=>i<=1?[[0,0]]:i===2?[[-.045,0],[.045,.02]]:[[0,-.04],[-.06,.04],[.06,.04]],"formation"),vp=l((i=Yg)=>new Yt().add({shape:Ee,colour:i,at:[0,.09,0],size:[.05,.05,.14]}).add({shape:Ee,colour:i,at:[0,.13,.08],size:[.03,.06,.03],turn:[.5,0,0]}).add({shape:Ee,colour:i,at:[0,.155,.105],size:[.026,.026,.05]}).add({shape:Ee,colour:i,at:[-.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[-.017,.035,-.05],size:[.012,.07,.012]}).add({shape:Ee,colour:i,at:[.017,.035,-.05],size:[.012,.07,.012]}),"horse"),qw=l((i,e,t)=>new Yt().addAll(vp(),[0,0,0]).add({shape:Ee,colour:t[0],at:[0,.118,0],size:[.056,.01,.06]}).addAll(bp(i,e,t,{legs:!1}),[0,.04,0]),"rider"),Yw=l(i=>new Yt().add({shape:Ee,colour:cs,at:[0,.12,0],size:[.09,.08,.17]}).add({shape:Ee,colour:cs,at:[0,.14,.1],size:[.07,.07,.06]}).add({shape:qt,colour:cs,at:[0,.08,.14],size:[.016,.09,.016],turn:[.3,0,0]}).add({shape:Ee,colour:cs,at:[-.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:cs,at:[.03,.04,.05],size:[.025,.08,.025]}).add({shape:Ee,colour:cs,at:[-.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:cs,at:[.03,.04,-.05],size:[.025,.08,.025]}).add({shape:Ee,colour:i[0],at:[0,.18,-.01],size:[.07,.03,.07]}).add({shape:Ee,colour:i[1],at:[0,.2,-.01],size:[.074,.008,.074]}),"elephant"),on=l((i,e=.05)=>({shape:qt,colour:an,at:i,size:[e,.01,e],turn:[0,0,Math.PI/2]}),"wheel"),$w=l((i,e,t)=>{if(e==="chariot")return new Yt().addAll(vp(),[0,0,.09]).add({shape:Ee,colour:an,at:[0,.055,-.04],size:[.064,.035,.05]}).add({shape:Ee,colour:i[0],at:[0,.075,-.016],size:[.066,.012,.006]}).add(on([-.042,.035,-.045],.065)).add(on([.042,.035,-.045],.065)).addAll(bp(t,"spear",i,{legs:!1}),[0,0,-.045]);let n=new Yt().addAll(vp(t==="ancient"?"#8a7a64":Yg),[0,0,.1]).add({shape:Ee,colour:an,at:[0,.07,-.06],size:[.07,.04,.1]}).add({shape:Ee,colour:i[0],at:[0,.092,-.06],size:[.072,.008,.102]}).add(on([-.042,.03,-.03])).add(on([.042,.03,-.03])).add(on([-.042,.03,-.09])).add(on([.042,.03,-.09]));return e==="wagon"?n.add({shape:qt,colour:_p,at:[0,.1,-.06],size:[.07,.1,.07],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:_p,at:[-.016,.112,-.04],size:[.032,.03,.04]}).add({shape:Ee,colour:i[0],at:[.018,.11,-.08],size:[.03,.026,.036]}).add({shape:Ee,colour:"#8a5a2a",at:[.014,.112,-.035],size:[.026,.03,.03]}),n},"cart"),Zw=l((i,e,t)=>{if(i==="ancient"||i==="medieval")return new Yt().add({shape:Ee,colour:an,at:[0,.04,0],size:[.08,.025,.14]}).add({shape:Ee,colour:an,at:[0,.09,-.02],size:[.012,.12,.012],turn:[-.7,0,0]}).add({shape:Ee,colour:e[0],at:[0,.055,.05],size:[.082,.012,.03]}).add(on([-.045,.03,.04],.045)).add(on([.045,.03,.04],.045)).add(on([-.045,.03,-.04],.045)).add(on([.045,.03,-.04],.045));let n=t?.19:i==="renaissance"?.12:.16,r=i==="renaissance"?"#3d3a36":i==="modern"?oi:yp;return new Yt().add({shape:qt,colour:r,at:[0,.07,.04],size:[.024,n,.024],turn:[1.35,0,0]}).add({shape:Ee,colour:i==="modern"?oi:an,at:[0,.045,-.02],size:[.05,.03,.09]}).add({shape:Ee,colour:e[0],at:[0,.064,-.02],size:[.052,.008,.06]}).add(on([-.04,.035,0],.07)).add(on([.04,.035,0],.07))},"siege"),Jw=l((i,e,t)=>{if(i==="industrial")return new Yt().add({shape:Ee,colour:ga,at:[0,.07,-.03],size:[.08,.07,.12]}).add({shape:Ee,colour:e[0],at:[0,.06,.07],size:[.07,.05,.05]}).add(on([-.045,.025,.06],.045)).add(on([.045,.025,.06],.045)).add(on([-.045,.025,-.06],.045)).add(on([.045,.025,-.06],.045));let n=new Yt().add({shape:Ee,colour:oi,at:[0,.045,0],size:[.1,.05,.17]}).add({shape:Ee,colour:"#2e2e2a",at:[-.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:"#2e2e2a",at:[.055,.028,0],size:[.022,.05,.18]}).add({shape:Ee,colour:e[0],at:[0,.072,-.05],size:[.08,.006,.04]});return t?n.add({shape:Ee,colour:oi,at:[0,.088,-.01],size:[.07,.035,.08]}).add({shape:qt,colour:oi,at:[0,.09,.08],size:[.014,.13,.014],turn:[Math.PI/2,0,0]}):n.add({shape:Ee,colour:oi,at:[0,.07,.06],size:[.09,.03,.05],turn:[.4,0,0]}),n},"vehicle"),Kw=l((i,e)=>{let t=i.large?1.25:1,n=.3*t,r=.07*t,s=new Yt;switch(i.hull){case"oars":case"sail":{s.add({shape:Ee,colour:Xg,at:[0,.03,0],size:[r,.045,n*.8]}).add({shape:us,colour:Xg,at:[0,.03,n*.45],size:[r,.1,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:e[0],at:[0,.056,0],size:[r+.004,.008,n*.82]});let a=i.hull==="oars"?1:i.large?3:2;for(let o=0;o<a;o++){let c=(o-(a-1)/2)*.09*t;s.add({shape:qt,colour:an,at:[0,.14,c],size:[.008,.2,.008]}).add({shape:Ee,colour:o===0?e[1]:_p,at:[0,.16,c],size:[r*1.3,.09,.005]})}return(i.guns??0)>0&&s.add({shape:Ee,colour:"#1f1f1f",at:[0,.036,0],size:[r+.006,.009,n*.66]}),i.hull==="oars"&&s.add({shape:Ee,colour:an,at:[-r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,.4]}).add({shape:Ee,colour:an,at:[r*.8,.025,0],size:[.05,.004,n*.6],turn:[0,0,-.4]}),s}case"submarine":return s.add({shape:qt,colour:"#33383d",at:[0,.018,0],size:[.05,n,.05],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:"#33383d",at:[0,.055,.02],size:[.02,.04,.05]}).add({shape:Ee,colour:e[0],at:[0,.078,.02],size:[.022,.006,.052]});case"carrier":return s.add({shape:Ee,colour:ga,at:[0,.035,0],size:[r*1.1,.05,n*1.15]}).add({shape:Ee,colour:"#55595e",at:[0,.062,0],size:[r*1.5,.008,n*1.2]}).add({shape:Ee,colour:ga,at:[r*.55,.09,.02],size:[.02,.05,.06]}).add({shape:Ee,colour:e[0],at:[r*.55,.12,.02],size:[.022,.008,.062]});default:return s.add({shape:Ee,colour:i.era==="industrial"?"#4a4a48":ga,at:[0,.03,0],size:[r,.045,n*.85]}).add({shape:us,colour:i.era==="industrial"?"#4a4a48":ga,at:[0,.03,n*.47],size:[r,.08,.045],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:ga,at:[0,.075,-.02],size:[r*.6,.05,n*.3]}).add({shape:qt,colour:e[0],at:[0,.12,-.03],size:[.022,.05,.022]}).add({shape:Ee,colour:e[1],at:[0,.056,0],size:[r+.004,.006,n*.86]}),[.3,-.34,.14].slice(0,i.guns??0).forEach(a=>{let o=a>0?1:-1;s.add({shape:Ee,colour:"#5f666c",at:[0,.066,n*a],size:[.035,.02,.035]}).add({shape:qt,colour:"#5f666c",at:[0,.07,n*a+o*.04],size:[.008,.06,.008],turn:[Math.PI/2,0,0]})}),i.missiles&&[-1,1].forEach(a=>s.add({shape:Ee,colour:"#4a5056",at:[a*r*.22,.072,-n*.3],size:[.022,.022,.05],turn:[-.5,0,0]})),s}},"ship"),jw=l((i,e)=>{let t=i.large?1.3:1,n=i.stealth?"#2c3034":i.large?"#6e7378":"#7d8890";return new Yt().add({shape:qt,colour:n,at:[0,.3,0],size:[.03*t,.2*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:us,colour:n,at:[0,.3,.12*t],size:[.03*t,.05*t,.03*t],turn:[Math.PI/2,0,0]}).add({shape:Ee,colour:n,at:[0,.3,.01],size:[.26*t,.006,.05*t]}).add({shape:Ee,colour:e[0],at:[0,.304,.01],size:[.06*t,.004,.052*t]}).add({shape:Ee,colour:n,at:[0,.3,-.09*t],size:[.09*t,.005,.03*t]}).add({shape:Ee,colour:e[1],at:[0,.325,-.09*t],size:[.005,.045,.03*t]})},"aircraft"),Qw=l(i=>new Yt().add({shape:xa,colour:oi,at:[0,.27,.02],size:[.06,.055,.09]}).add({shape:Ee,colour:oi,at:[0,.275,-.08],size:[.015,.015,.12]}).add({shape:Ee,colour:i[0],at:[0,.3,-.13],size:[.004,.04,.025]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.24,.003,.012]}).add({shape:Ee,colour:"#2e2e2e",at:[0,.31,.02],size:[.012,.003,.24]}),"helicopter"),e1=l((i,e)=>{let t=e?1.4:1;return new Yt().add({shape:qt,colour:"#d8d8d8",at:[0,.14*t,0],size:[.024*t,.18*t,.024*t]}).add({shape:us,colour:e?"#c8a020":i[0],at:[0,.255*t,0],size:[.024*t,.05*t,.024*t]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.07*t,.03*t,.004]}).add({shape:Ee,colour:i[1],at:[0,.06*t,0],size:[.004,.03*t,.07*t]})},"missile"),$g=l((i,e)=>{switch(i.shape){case"foot":{let t=new Yt;return qg(i.squad).forEach(([n,r],s)=>t.addAll(bp(i.era,i.gear??"none",e,{dress:i.dress}),[n,0,r],s*.3-.3)),t}case"mounted":{let t=new Yt;return qg(i.squad).forEach(([n,r])=>t.addAll(qw(i.era,i.gear??"none",e),[n*1.4,0,r])),t}case"elephant":return Yw(e);case"cart":return $w(e,i.cart??"wagon",i.era);case"siege":return Zw(i.era,e,i.large===!0);case"vehicle":return Jw(i.era,e,i.large===!0);case"ship":return Kw(i,e);case"aircraft":return jw(i,e);case"helicopter":return Qw(e);default:return e1(e,i.large===!0)}},"figureParts"),t1=l(({at:i,size:e,turn:t=[0,0,0],yaw:n=0})=>new gt().compose(new W(...i),new mn().setFromAxisAngle(Vw,n).multiply(new mn().setFromEuler(new Rn(...t))),new W(...e)),"partMatrix"),Mp=l(i=>{let e=i.map(n=>{let{shape:r,colour:s}=n,a=r.clone(),o=new Ue(s),c=a.getAttribute("position").count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u.set([o.r,o.g,o.b],h*3);return a.applyMatrix4(t1(n)),a.setAttribute("color",new _t(u,3)),a}),t=Vg(e)??new Bt;return e.forEach(n=>n.dispose()),t.computeBoundingBox(),t.computeBoundingSphere(),t},"mergeParts"),Zg=l((i,e)=>Mp($g(i,e).parts),"figureGeometry"),n1=new Si(.19,.2,1,28),i1=new Tr(.22,.014,4,32),Jg=l((i,e,{fortified:t,scale:n,stand:r})=>{let s=i.shape==="ship",a=s?0:r,o=$g(i,e).parts.map(c=>({...c,at:[c.at[0]*n,c.at[1]*n+a,c.at[2]*n],size:[c.size[0]*n,c.size[1]*n,c.size[2]*n]}));return s||o.push({shape:n1,colour:e[1],at:[0,r/2,0],size:[1,r,1]}),t&&o.push({shape:i1,colour:"#b5ab98",at:[0,a+.015,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}),Mp(o)},"unitBodyGeometry"),r1=new wi(.75,.5,4),s1=new Tr(.36,.025,6,24),Kg=l((i,e,t)=>Mp([...i.flatMap(({x:n,z:r,width:s,height:a})=>[{shape:Ee,colour:"#b5ab98",at:[n,a/2,r],size:[s,a,s]},{shape:r1,colour:e,at:[n,a+s*.2,r],size:[s,s*.8,s],turn:[0,Math.PI/4,0]}]),...t?[{shape:s1,colour:"#8d8577",at:[0,.02,0],size:[1,1,2.5],turn:[Math.PI/2,0,0]}]:[]]),"cityGeometry");var Jt=l((i,e,t=3)=>({shape:"foot",era:i,gear:e,squad:t}),"foot"),Fo=l((i,e,t=2)=>({shape:"mounted",era:i,gear:e,squad:t}),"mounted"),Un=l((i,e,t=!1,n=0,r=!1)=>({shape:"ship",era:i,hull:e,squad:1,large:t,guns:n,missiles:r}),"ship"),Oo=l((i,e=!1,t=!1)=>({shape:"aircraft",era:i,squad:1,large:e,stealth:t}),"aircraft"),wp=l((i,e)=>({shape:"cart",era:i,cart:e,squad:1}),"cart"),jg={Warrior:Jt("ancient","club"),Spearman:Jt("ancient","spear"),Swordman:Jt("ancient","sword"),Archer:Jt("ancient","bow"),Horseman:Fo("ancient","spear"),Chariot:wp("ancient","chariot"),Elephant:{shape:"elephant",era:"ancient",squad:1},Catapult:{shape:"siege",era:"ancient",squad:1},Trireme:Un("ancient","oars"),Settlers:wp("ancient","wagon"),Diplomat:Jt("ancient","case",1),Caravan:wp("ancient","goods"),Explorer:Jt("ancient","pack",1),Pikeman:Jt("medieval","pike"),Knight:Fo("medieval","lance"),Crusader:Fo("medieval","sword"),Fanatic:Jt("medieval","sword"),Sail:Un("medieval","sail"),Musketman:Jt("renaissance","musket"),Dragoon:Fo("renaissance","musket"),Cannon:{shape:"siege",era:"renaissance",squad:1},Frigate:Un("renaissance","sail",!0,1),Galleon:Un("renaissance","sail",!0),Rifleman:Jt("industrial","rifle"),AlpineTrooper:{...Jt("industrial","rifle"),dress:"snow"},Partisan:{...Jt("industrial","rifle"),dress:"irregular"},Cavalry:Fo("industrial","rifle"),Artillery:{shape:"siege",era:"industrial",squad:1},Engineer:Jt("industrial","none",2),Ironclad:Un("industrial","steam",!1,1),Transport:Un("industrial","steam",!0),Freight:{shape:"vehicle",era:"industrial",squad:1},Spy:Jt("industrial","none",1),MechanizedInfantry:{shape:"vehicle",era:"modern",squad:1},Marine:Jt("modern","rifle"),Paratrooper:{...Jt("modern","rifle"),dress:"parachute"},Tank:{shape:"vehicle",era:"modern",squad:1,large:!0},Howitzer:{shape:"siege",era:"modern",squad:1,large:!0},Destroyer:Un("modern","steam",!1,1),Cruiser:Un("modern","steam",!0,2),MissileCruiser:Un("modern","steam",!0,1,!0),Battleship:Un("modern","steam",!0,3),Submarine:Un("modern","submarine"),Carrier:Un("modern","carrier",!0),Fighter:Oo("modern"),StealthFighter:Oo("modern",!1,!0),Bomber:Oo("modern",!0),StealthBomber:Oo("modern",!0,!0),Helicopter:{shape:"helicopter",era:"modern",squad:1},CruiseMissile:{shape:"missile",era:"modern",squad:1},Nuclear:{shape:"missile",era:"modern",squad:1,large:!0}},Qg=l((i,e=[])=>(Object.prototype.hasOwnProperty.call(jg,i)?jg[i]:void 0)??(e.includes("Naval")||e.includes("NavalTransport")?Un("industrial","steam"):e.includes("Air")?Oo("modern"):Jt("ancient","spear")),"unitLook");var a1=.03,ix="#fff4b0",o1=.04,Zu=.004,Ep=.018,ex=.01,tx=.022,nx=.03,rx=.03,Ku=.002,l1="#4caf50",c1="#e0b030",u1="#d04030",h1=256,hs,li,ds,fs,ci,ps,er,va,Ap=class Ap{constructor(){ee(this,hs,new Map);ee(this,li,new Map);ee(this,ds,new Map);ee(this,fs,new Map);ee(this,ci,new Map);ee(this,ps,new Map);ee(this,er,null);ee(this,va,0);this.figureMaterial=new Ai({vertexColors:!0,roughness:.8,metalness:.05});this.geometries={ring:new Tr(.23,.018,8,36)}}material(e,t=!1){let n=`${e}${t?" glow":""}`,r=m(this,hs).get(n);return r===void 0&&(r=new Ai({color:new Ue(e),roughness:.75,metalness:.05,...t?{emissive:new Ue(e),emissiveIntensity:.6}:{}}),m(this,hs).set(n,r)),r}body(e,t,n,r=1){let s=JSON.stringify([e,t,n,r]),a=m(this,fs).get(s);return a===void 0&&(a=Jg(e,t,{fortified:n,scale:r,stand:a1}),m(this,fs).set(s,a)),a}city(e){let t=m1(e),n=JSON.stringify([e.name,t.length,e.colours[0],e.walled]),r=m(this,ci).get(n);return r===void 0&&(r=Kg(t,e.colours[0],e.walled),m(this,ci).set(n,r)),r}figure(e,t){let n=JSON.stringify([e,t]),r=m(this,ds).get(n);return r===void 0&&(r=Zg(e,t),m(this,ds).set(n,r)),r}plain(e){let t=m(this,ps).get(e);return t===void 0&&(t=new Sr({color:new Ue(e),sizeAttenuation:!1,depthTest:!1}),m(this,ps).set(e,t)),t}pointer(){if(m(this,er)===null){let e=document.createElement("canvas"),t=e.getContext("2d");e.width=32,e.height=32,t!==null&&(t.fillStyle=ix,t.strokeStyle="#3a3420",t.lineWidth=3,t.beginPath(),t.moveTo(3,5),t.lineTo(29,5),t.lineTo(16,28),t.closePath(),t.fill(),t.stroke());let n=new Er(e);n.colorSpace=Ut,H(this,er,new Sr({map:n,sizeAttenuation:!1,depthTest:!1,transparent:!0}))}return m(this,er)}label(e,t,n){let r=`${e}\0${t}\0${n}`,s=m(this,li).get(r);if(s===void 0){let a=document.createElement("canvas"),o=a.getContext("2d"),c="600 28px system-ui, sans-serif",u=40;o!==null&&(o.font=c,a.width=Math.ceil(o.measureText(e).width)+24,a.height=u,o.font=c,o.fillStyle=t,o.beginPath(),o.roundRect?.(0,0,a.width,u,10),o.fill(),o.fillStyle=n,o.textBaseline="middle",o.fillText(e,12,u/2+1));let h=new Er(a);h.colorSpace=Ut,s=new Sr({map:h,sizeAttenuation:!1,depthTest:!1,transparent:!0}),m(this,li).set(r,s)}return s}get sweepDue(){return m(this,li).size+m(this,ci).size>Math.max(h1,m(this,va)*2)}sweep(e){let t=new Set;for(let n of e)n.traverse(r=>{r instanceof Et&&t.add(r.geometry),r instanceof oa&&t.add(r.material)});m(this,li).forEach((n,r)=>{t.has(n)||(n.map?.dispose(),n.dispose(),m(this,li).delete(r))}),m(this,ci).forEach((n,r)=>{t.has(n)||(n.dispose(),m(this,ci).delete(r))}),H(this,va,m(this,li).size+m(this,ci).size)}dispose(){Object.values(this.geometries).forEach(e=>e.dispose()),m(this,ds).forEach(e=>e.dispose()),m(this,fs).forEach(e=>e.dispose()),m(this,ci).forEach(e=>e.dispose()),m(this,fs).clear(),m(this,ci).clear(),this.figureMaterial.dispose(),m(this,ps).forEach(e=>e.dispose()),m(this,er)?.map?.dispose(),m(this,er)?.dispose(),m(this,ps).clear(),H(this,er,null),m(this,hs).forEach(e=>e.dispose()),m(this,li).forEach(e=>{e.map?.dispose(),e.dispose()}),m(this,hs).clear(),m(this,li).clear(),m(this,ds).clear(),H(this,va,0)}};hs=new WeakMap,li=new WeakMap,ds=new WeakMap,fs=new WeakMap,ci=new WeakMap,ps=new WeakMap,er=new WeakMap,va=new WeakMap,l(Ap,"MarkerKit");var Qu=Ap,sx=l(i=>{let{r:e,g:t,b:n}=new Ue(i);return .2126*e+.7152*t+.0722*n>.35?"#111111":"#ffffff"},"textOn"),_a=l((i,e,t,n)=>(i.position.set(e,t,n),i),"place"),Ju=l((i,e)=>{let t=e*2654435761;for(let n=0;n<i.length;n++)t=Math.imul(t^i.charCodeAt(n),2246822519);return(t>>>0)%1e4/1e4},"fractionOf"),d1=l(i=>[i.count>1?String(i.count):"",i.status??"",i.veteran?"\u2605":""].filter(e=>e!=="").join(" "),"flagText"),f1=3,p1=4,Bo=l((i,e,t,n,r=f1)=>{let s=new oa(i);return s.scale.set(e,t,1),s.center.set(.5,-n/t),s.renderOrder=r,s.frustumCulled=!1,s},"badge"),ax=l((i,e,t)=>{let n=i.map?.image,r=n&&n.height>0&&n.width>0?n.width/n.height:1;return Bo(i,e*r,e,t)},"label"),ju=[0,.36,0],m1=l(i=>{let e=Math.min(12,2+Math.ceil(i.size/2));return Array.from({length:e},(t,n)=>{let r=n/e*Math.PI*2+Ju(i.name,1)*6,s=n===0?0:.12+Ju(i.name,n+2)*.18;return{x:Math.cos(r)*s,z:Math.sin(r)*s,width:.07+Ju(i.name,n+20)*.05,height:(n===0?.13:.05)+Ju(i.name,n+40)*.05}})},"buildingsOf"),g1=l((i,e)=>{let t=new pn;return t.add(new Et(i.city(e),i.figureMaterial)),t.add(_a(ax(i.label(`${e.name}  ${e.size}${e.disorder?" !":""}`,e.colours[0],sx(e.colours[0])),rx,0),...ju)),t},"drawCity"),x1=l((i,e,t=null)=>{let n=new pn,{ring:r}=i.geometries,s=Qg(e.type,e.kinds),a=i.body(s,e.colours,e.fortified,e.size),o=a.boundingBox?.max.y??.3,c=t?.at??[0,o+o1,0],u=e.health!==null,h=(t?.over??0)+(u?Zu+Ku:0),f=h+ex+Ku,d=d1(e),p=f+(d===""?0:tx+Ku),g=new Et(a,i.figureMaterial);if(g.rotation.y=e.facing,n.add(g),e.health!==null){let y=Math.max(0,Math.min(1,e.health));if(n.add(_a(Bo(i.plain("#202020"),Ep,Zu,t?.over??0),...c)),y>0){let x=Bo(i.plain(y>.5?l1:y>.25?c1:u1),Ep*y,Zu*.6,(t?.over??0)+Zu*.2);x.center.x=1/(2*y),n.add(_a(x,...c))}}if(n.add(_a(Bo(i.plain(e.colours[0]),Ep,ex,h),...c)),d!==""&&n.add(_a(ax(i.label(d,e.colours[0],sx(e.colours[0])),tx,f),...c)),e.active){let y=new Et(r,i.material(ix,!0));y.rotation.x=Math.PI/2,y.position.y=.01,n.add(y,_a(Bo(i.pointer(),nx,nx,p,p1),...c))}return n},"drawUnit"),eh="unit",ox=l((i,e)=>{let t=new pn;if(e.city!==null&&t.add(g1(i,e.city)),e.unit!==null){let n=e.city===null?0:.26,r=x1(i,e.unit,e.city===null?null:{at:[ju[0],ju[1],ju[2]-n],over:rx+Ku});r.name=eh,r.position.z=n,t.add(r)}return t},"drawMarker");var Dr=l(i=>i*Math.PI/180,"degrees"),_1=Dr(25),v1=Dr(80),y1=5,b1=90,M1=1.12,zo=Dr(40),Cp=Dr(45),S1={above:{yaw:0,pitch:Dr(80)},classic:{yaw:0,pitch:Dr(55)},isometric:{yaw:Dr(45),pitch:Dr(30)}};var lx=l(i=>({focus:i,...S1.classic,distance:24}),"defaultOrbit"),Tp=l((i,e,t)=>Math.min(t,Math.max(e,i)),"clamp"),cx=l(i=>{let e=Math.PI*2;return(i%e+e)%e},"normaliseYaw"),ms=l(i=>({...i,yaw:cx(i.yaw),pitch:Tp(i.pitch,_1,v1),distance:Tp(i.distance,y1,b1)}),"clampOrbit"),ba=l((i,e)=>ms({...i,distance:i.distance/M1**e}),"zoomed"),th=l(({yaw:i,pitch:e})=>{let t=Math.sin(i),n=Math.cos(i),r=Math.sin(e),s=Math.cos(e);return{forward:[t*s,-r,-n*s],right:[n,0,t],up:[t*r,s,-n*r]}},"basis"),nh=l((i,e)=>{let{forward:t}=th(i),[n,r]=i.focus;return[n-t[0]*i.distance,e-t[1]*i.distance,r-t[2]*i.distance]},"eye"),Rp=l((i,e,[t,n,r],s)=>{let{forward:a,right:o,up:c}=th(i),u=nh(i,e),h=[t-u[0],n-u[1],r-u[2]],f=l(g=>(h[0]??0)*g[0]+(h[1]??0)*g[1]+(h[2]??0)*g[2],"dot"),d=f(a),p=Math.tan(zo/2);return d<=1e-6?null:[f(o)/(d*p*s),f(c)/(d*p)]},"toScreen"),Pp=l((i,e,[t,n],r)=>{let{forward:s,right:a,up:o}=th(i),c=Math.tan(zo/2);return{from:nh(i,e),direction:[0,1,2].map(u=>(s[u]??0)+t*c*r*(a[u]??0)+n*c*(o[u]??0))}},"rayThrough"),ya=l((i,e,t,n,r=e)=>{let{from:s,direction:a}=Pp(i,e,t,n);if(a[1]>-1e-6)return null;let o=(r-s[1])/a[1];return o<=0?null:[s[0]+a[0]*o,s[2]+a[2]*o]},"groundAt"),ux=l((i,e,t,n,r)=>{let s=ya(i,e,t,r),a=ya(i,e,n,r);if(s!==null&&a!==null)return{...i,focus:[i.focus[0]+s[0]-a[0],i.focus[1]+s[1]-a[1]]};let o=(t[0]-n[0])*r,c=(t[1]-n[1])/Math.sin(i.pitch),u=i.distance*Math.tan(zo/2),{right:h}=th(i),f=[Math.sin(i.yaw),-Math.cos(i.yaw)];return{...i,focus:[i.focus[0]+(o*h[0]+c*(f[0]??0))*u,i.focus[1]+(o*h[2]+c*(f[1]??0))*u]}},"panned"),hx=l((i,e,t)=>{let n=l((a,o)=>(a%o+o)%o,"wrap"),[r,s]=i.focus;return{...i,yaw:cx(i.yaw),focus:[n(r,e.u),e.v===null?Tp(s,0,t):n(s,e.v)]}},"settled"),dx=l((i,e,t,n,r)=>{let s=l((c,u)=>u===null?c:c-u*Math.round(c/u),"short"),a=Math.PI*2,o=t*t*(3-2*t);return{focus:[i.focus[0]+s(e.focus[0]-i.focus[0],n.u)*o,i.focus[1]+s(e.focus[1]-i.focus[1],n.v)*o],yaw:i.yaw+(r??s(e.yaw-i.yaw,a))*o,pitch:i.pitch+(e.pitch-i.pitch)*o,distance:i.distance+(e.distance-i.distance)*o}},"between"),ih=l(i=>({near:i*1.2,far:i*3.5}),"sightFor");var w1=new Ue("#3f8a8c"),E1=new Ue("#173a52"),A1=new Ue("#e8eeee"),fx=`
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
`,T1=`
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
`,Nr,Yn,Fn,Lp=class Lp{constructor(e,t){ee(this,Nr);ee(this,Yn);ee(this,Fn);H(this,Nr,e),H(this,Yn,new Uint16Array(e.columns*e.rows*2));for(let r=0;r<m(this,Yn).length;r+=2)m(this,Yn)[r]=bi.toHalfFloat(0),m(this,Yn)[r+1]=bi.toHalfFloat(1);H(this,Fn,new la(m(this,Yn),e.columns,e.rows,Ri,Ln)),m(this,Fn).wrapS=vi,m(this,Fn).wrapT=e.wrapsV?vi:Xn,m(this,Fn).magFilter=Ot,m(this,Fn).minFilter=Ot,m(this,Fn).needsUpdate=!0;let n=new xn({uniforms:os.merge([we.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},shallow:{value:w1.clone()},deep:{value:E1.clone()},foam:{value:A1.clone()},sky:{value:t.clone()},sunDirection:{value:new W(.5,.7,.4).normalize()},sunColour:{value:new Ue("#fff0d8")},extentV:{value:0},wrapsV:{value:!1}}]),vertexShader:fx,fragmentShader:T1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=m(this,Fn),n.uniforms.cell.value.set(e.spacingU,e.spacingV),n.uniforms.size.value.set(e.columns,e.rows),n.uniforms.extentV.value=e.rows*e.spacingV,n.uniforms.wrapsV.value=e.wrapsV,this.mesh=new Et(new Ei(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1}setChunk(e){let{columns:t,rows:n,spacingU:r,spacingV:s}=m(this,Nr),a=Math.round(e.u/r),o=Math.round(e.v/s),c=e.positions.length/3;for(let u=0;u<c;u++){let h=a+Math.round((e.positions[u*3]??0)/r),f=o+Math.round((e.positions[u*3+2]??0)/s);if(h>=0&&h<t&&f>=0&&f<n){let d=(f*t+h)*2;m(this,Yn)[d]=bi.toHalfFloat(e.positions[u*3+1]??0),m(this,Yn)[d+1]=bi.toHalfFloat(e.unseen[u]??0)}}m(this,Fn).needsUpdate=!0}height(e,t){return bi.fromHalfFloat(m(this,Yn)[(t*m(this,Nr).columns+e)*2]??0)}unseen(e,t){return bi.fromHalfFloat(m(this,Yn)[(t*m(this,Nr).columns+e)*2+1]??0)>.5}texture(){return m(this,Fn)}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,Nr).wrapsV&&e}follow(e,t,n,r){this.mesh.position.set(e,0,t),this.mesh.scale.set(n,n,1),this.mesh.material.uniforms.sunDirection.value.copy(r).normalize()}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),m(this,Fn).dispose()}};Nr=new WeakMap,Yn=new WeakMap,Fn=new WeakMap,l(Lp,"Water");var Ip=Lp,px=Ip,C1=`
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
`,R1=.18,ko,Dp=class Dp{constructor(e,t){ee(this,ko);H(this,ko,t.wrapsV);let n=new xn({uniforms:os.merge([we.fog,{ground:{value:null},cell:{value:new ke},size:{value:new ke},extent:{value:new ke},wrapsV:{value:!1}}]),vertexShader:fx,fragmentShader:C1,fog:!0,transparent:!0,depthWrite:!1});n.uniforms.ground.value=e,n.uniforms.cell.value.set(t.spacingU,t.spacingV),n.uniforms.size.value.set(t.columns,t.rows),n.uniforms.extent.value.set(t.columns*t.spacingU,t.rows*t.spacingV),n.uniforms.wrapsV.value=t.wrapsV,this.mesh=new Et(new Ei(1,1),n),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=2}pastThePoles(e){this.mesh.material.uniforms.wrapsV.value=m(this,ko)&&e}follow(e,t,n){this.mesh.position.set(e,R1,t),this.mesh.scale.set(n,n,1)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};ko=new WeakMap,l(Dp,"Clouds");var rh=Dp;var P1=.6,I1=.05,gs=64,mx=.125,L1=`
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
`,D1=`
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
`,gx=l(i=>{let e=Math.max(1,Math.ceil(Math.sqrt(i)));return[e,Math.max(1,Math.ceil(i/e))]},"atlasCells"),N1=l((i,e)=>{let[t]=gx(i.length),n=gs*(1-2*mx);return i.flatMap((r,s)=>{let a=e(r);if(a===null||a[0]<=0||a[1]<=0)return[];let o=n/Math.max(a[0],a[1]),c=a[0]*o,u=a[1]*o;return[{_:r,x:s%t*gs+(gs-c)/2,y:Math.floor(s/t)*gs+(gs-u)/2,width:c,height:u}]})},"atlasPlaces"),U1=l(i=>{let{naturalWidth:e,naturalHeight:t,width:n,height:r}=i;return[e??(typeof n=="number"?n:0),t??(typeof r=="number"?r:0)]},"imageSize"),Ur,On,Go,xs,Vo,sh,Ma,xx,_x,Up=class Up{constructor(e){ee(this,Ma);ee(this,Ur,null);ee(this,On,null);ee(this,Go,"");ee(this,xs);ee(this,Vo,new WeakMap);ee(this,sh,1);H(this,xs,e),this.material=new xn({uniforms:os.merge([we.fog,{atlas:{value:null},lean:{value:1},lift:{value:I1},bias:{value:P1},cells:{value:[1,1]},pad:{value:mx}}]),vertexShader:L1,fragmentShader:D1,fog:!0,toneMapped:!1})}lean(e){this.material.uniforms.lean.value=Math.sin(e)}set(e){if(m(this,Ur)?.dispose(),H(this,Ur,null),e===null||e.count===0)return null;G(this,Ma,_x).call(this,e);let t=new Mo,n=new Ei(1,1);return t.index=n.index,t.setAttribute("position",n.getAttribute("position")),t.setAttribute("uv",n.getAttribute("uv")),t.setAttribute("anchor",new Ki(e.anchors,3)),t.setAttribute("slot",new Ki(e.slots,2)),t.setAttribute("size",new Ki(e.sizes,1)),t.setAttribute("cell",new Ki(e.cells,1)),t.instanceCount=e.count,H(this,Ur,t),t}make(){let e=new Et(m(this,Ur)??void 0,this.material);return e.frustumCulled=!1,e.castShadow=!1,e.receiveShadow=!1,e}dispose(){m(this,Ur)?.dispose(),m(this,On)?.dispose(),this.material.dispose()}};Ur=new WeakMap,On=new WeakMap,Go=new WeakMap,xs=new WeakMap,Vo=new WeakMap,sh=new WeakMap,Ma=new WeakSet,xx=l(function(e){if(e===null)return 0;let t=m(this,Vo).get(e);return t===void 0&&(t=Fm(this,sh)._++,m(this,Vo).set(e,t)),t},"#imageId"),_x=l(function(e){let t=e.names.map(o=>`${o}:${G(this,Ma,xx).call(this,m(this,xs).call(this,o))}`).join(",");if(t===m(this,Go)&&m(this,On)!==null)return;let[n,r]=gx(e.names.length),s=document.createElement("canvas"),a=s.getContext("2d");s.width=n*gs,s.height=r*gs,a!==null&&(a.imageSmoothingEnabled=!1,N1(e.names,o=>{let c=m(this,xs).call(this,o);return c===null?null:U1(c)}).forEach(({_:o,x:c,y:u,width:h,height:f})=>{let d=m(this,xs).call(this,o);d!==null&&a.drawImage(d,c,u,h,f)})),m(this,On)?.dispose(),H(this,On,new Er(s)),m(this,On).colorSpace=Ut,m(this,On).premultiplyAlpha=!0,m(this,On).magFilter=Ft,m(this,On).minFilter=In,m(this,On).generateMipmaps=!0,H(this,Go,t),this.material.uniforms.atlas.value=m(this,On),this.material.uniforms.cells.value=[n,r]},"#drawAtlas"),l(Up,"YieldIcons");var Np=Up,vx=Np;var Bp=l((i,e)=>{if(i===void 0)return null;let t=Math.min(1,Math.max(0,(e-i.started)/B1)),n=1-t*t*(3-2*t);return t>=1?null:[i.from[0]*n,i.from[1]*n,i.from[2]*n]},"slideOffset"),ah=l(i=>{let[e,t,n]=i.unit?.at??[0,0,0];return[i.at[0]+e,i.at[1]+t,i.at[2]+n]},"unitStands"),F1=l((i,e,t)=>i.unit?.id===e?Sx(i,t):ah(i),"unitOnMarkerAt"),Sx=l((i,e)=>{let[t,n,r]=ah(i),[s,a,o]=Bp(i.slide,e)??[0,0,0];return[t+s,n+a,r+o]},"unitDrawnAt"),O1=l((i,e,t)=>{if(i?.slide===void 0||i.unit===void 0||i.unit.id!==e.unit?.id||Bp(i.slide,t)===null)return;let n=Sx(i,t),r=ah(e);return{from:[n[0]-r[0],n[1]-r[1],n[2]-r[2]],started:t}},"carriedSlide"),Fp=l((i,e)=>{if(i.slide===void 0)return!1;let t=Bp(i.slide,e),[n,r,s]=t??[0,0,0],[a,o,c]=i.unit?.at??[0,0,0];return t===null&&delete i.slide,i.drawn.forEach(u=>u.getObjectByName(eh)?.position.set(a+n,o+r,c+s)),t!==null},"slideAlong"),B1=260,Op=10466244,z1=14082796,k1=5984576,G1=16773336,yx=l((i,e,t)=>{let n=l((r,s)=>{if(s===null)return[0];let a=[];for(let o=Math.floor((r-e)/s);o*s<=r+e;o++)a.push(o*s);return a},"along");return n(i[0],t.u).flatMap(r=>n(i[1],t.v).map(s=>[r,s]))},"copiesNear"),V1=l(i=>[new bn(new W(0,0,1),0),new bn(new W(0,0,-1),i)],"polesAt"),H1=l((i,[e,t],n,r,s)=>i.flatMap(([a,o])=>[[a,o],...s&&r!==null&&t>n?[[a,o-r]]:[],...s&&r!==null&&e<0?[[a,o+r]]:[]]),"overlayCopies"),bx=2048,Mx=Math.hypot(30,40,20),wx=l((i,{period:e,ground:t,yieldIcon:n})=>{let r=new Gu({antialias:!0,canvas:i}),s=new lo,a=new fn(zo*180/Math.PI,1,.1,400),o=new pn,{material:c,detail:u}=kg(e,t.rows*t.spacingV),h=new bo(G1,2.6),f=new Map,d=new Map,p=new Ai({vertexColors:!0,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-6,clipShadows:!0}),g=t.rows*t.spacingV,y=V1(g),x=new Map,_=new Set,S=new pn,A=new Qu,w=new pn,R=new vx(n??(()=>null)),C=new px(t,new Ue(Op)),v=new rh(C.texture(),t),E=new oo(Op,30,110),I=[[0,0]],P="0,0",F=[[0,0]],k="0,0",J=!1,L=null;r.outputColorSpace=Ut,r.localClippingEnabled=!0,r.toneMapping=wo,r.shadowMap.enabled=!0,r.shadowMap.type=Jc,s.background=new Ue(Op),s.fog=E,s.add(new _o(z1,k1,.9)),s.add(o),s.add(S),s.add(w),s.add(C.mesh),s.add(v.mesh),h.position.set(30,40,20),h.castShadow=!0,h.shadow.mapSize.set(bx,bx),h.shadow.bias=-4e-4,h.shadow.normalBias=.02,s.add(h),s.add(h.target);let Y=l((N,V,z=I)=>z.map(([ae,ce])=>{let X=N.make();return X.position.set(N.at[0]+ae,N.at[1],N.at[2]+ce),V.add(X),X}),"copiesOf"),Q=l(N=>Y(N,o,H1(I,N.span,g,e.v,J)),"overlayCopiesOf"),U=l(N=>_.forEach(V=>{let z=x.get(V);(z===void 0||!Fp(z,N))&&_.delete(V)}),"slideMarkers");return{render:l(()=>r.render(s,a),"render"),resize:l((N,V,z)=>{r.setPixelRatio(z),r.setSize(N,V,!1),a.aspect=V>0?N/V:1,a.updateProjectionMatrix()},"resize"),setChunk:l((N,V,z)=>{let ae=`${N},${V}`,ce=new Bt;ce.setAttribute("position",new _t(z.positions,3)),ce.setAttribute("normal",new _t(z.normals,3)),ce.setAttribute("color",new _t(z.colours,3)),ce.setAttribute("surfacesA",new _t(z.surfacesA,4,!0)),ce.setAttribute("surfacesB",new _t(z.surfacesB,4,!0)),ce.setAttribute("shore",new _t(z.shore,1,!0)),ce.setIndex(new _t(z.indices,1)),ce.computeBoundingSphere();let X=f.get(ae);X!==void 0&&(X.drawn.forEach(te=>o.remove(te)),X.geometry.dispose());let he={geometry:ce,at:[z.u,0,z.v],make:l(()=>{let te=new Et(ce,c);return te.castShadow=!0,te.receiveShadow=!0,te},"make"),drawn:[]};he.drawn=Y(he,o),f.set(ae,he),C.setChunk(z)},"setChunk"),setOverlay:l((N,V,z)=>{let ae=`${N},${V}`,ce=d.get(ae);if(ce!==void 0&&(ce.drawn.forEach(ue=>o.remove(ue)),ce.geometry.dispose(),d.delete(ae)),z===null)return;let X=new Bt;X.setAttribute("position",new _t(z.positions,3)),X.setAttribute("normal",new _t(z.normals,3)),X.setAttribute("color",new _t(z.colours,3)),X.computeBoundingSphere(),X.computeBoundingBox();let he=X.boundingBox,te={geometry:X,span:[z.v+(he?.min.z??0),z.v+(he?.max.z??0)],at:[z.u,0,z.v],make:l(()=>{let ue=new Et(X,p);return ue.castShadow=!0,ue.receiveShadow=!0,ue},"make"),drawn:[]};te.drawn=Q(te),d.set(ae,te)},"setOverlay"),setMarker:l((N,V,z)=>{let ae=x.get(N);if(ae?.drawn.forEach(re=>S.remove(re)),x.delete(N),z===null)return;let ce=ox(A,z),X=ce.getObjectByName(eh);ce.traverse(re=>{re.castShadow=re instanceof Et});let he={at:V,make:l(()=>ce.clone(),"make"),drawn:[],original:ce,...z.unit===null||X===void 0?{}:{unit:{id:z.unit.id,at:X.position.toArray()}}},te=performance.now(),ue=O1(ae,he,te);ue!==void 0&&(he.slide=ue),he.drawn=Y(he,S,F),x.set(N,he),he.slide!==void 0&&(_.add(N),Fp(he,te)),A.sweepDue&&A.sweep([...x.values()].flatMap(({original:re})=>re===void 0?[]:[re]))},"setMarker"),slideMarker:l((N,V)=>{let z=x.get(N);if(z===void 0)return;let[ae,ce,X]=ah(z);z.slide={from:[V[0]-ae,V[1]-ce,V[2]-X],started:performance.now()},_.add(N),Fp(z,z.slide.started)},"slideMarker"),markerAt:l((N,V)=>{let z=x.get(N);return z===void 0?null:F1(z,V,performance.now())},"markerAt"),sliding:l(()=>_.size>0,"sliding"),setYields:l(N=>{L?.drawn.forEach(V=>w.remove(V)),L=null,R.set(N)!==null&&(L={at:[0,0,0],make:l(()=>R.make(),"make"),drawn:[]},L.drawn=Y(L,w))},"setYields"),view:l((N,V,z=e)=>{let[ae,ce]=N.focus,[X,he,te]=nh(N,V),{near:ue,far:re}=ih(N.distance);a.position.set(X,he,te),a.lookAt(ae,V,ce),a.far=re*1.2,a.near=Math.max(.1,N.distance*.02),a.updateProjectionMatrix(),E.near=ue,E.far=re;let Pe=N.distance*2.2,Ge=h.shadow.camera;h.position.set(ae+30,V+40,ce+20),h.target.position.set(ae,V,ce),Ge.left=-Pe,Ge.right=Pe,Ge.top=Pe,Ge.bottom=-Pe,Ge.near=Math.max(.5,Mx-Pe*1.6),Ge.far=Mx+Pe*1.6,Ge.updateProjectionMatrix(),C.follow(ae,ce,re*2.2,h.position.clone().sub(h.target.position)),v.follow(ae,ce,re*2.2),C.pastThePoles(z.v!==null),v.pastThePoles(z.v!==null),p.clippingPlanes=z.v===null?y:null,J=z.v===null;let Te=yx(N.focus,re,z),Je=`${Te.join(";")}${J?" stopped":""}`,Ke=yx(N.focus,Math.min(re,N.distance*2.2),z),Xe=Ke.join(";");Je!==P&&(I=Te,P=Je,f.forEach(et=>{et.drawn.forEach(dt=>o.remove(dt)),et.drawn=Y(et,o)}),d.forEach(et=>{et.drawn.forEach(dt=>o.remove(dt)),et.drawn=Q(et)}),L!==null&&(L.drawn.forEach(et=>w.remove(et)),L.drawn=Y(L,w))),R.lean(N.pitch),Xe!==k&&(F=Ke,k=Xe,x.forEach(et=>{et.drawn.forEach(dt=>S.remove(dt)),et.drawn=Y(et,S,F)})),U(performance.now())},"view"),stats:l(()=>({drawCalls:r.info.render.calls,triangles:r.info.render.triangles,geometries:r.info.memory.geometries}),"stats"),dispose:l(()=>{f.forEach(({geometry:N})=>N.dispose()),f.clear(),d.forEach(({geometry:N})=>N.dispose()),d.clear(),p.dispose(),x.clear(),A.dispose(),R.dispose(),C.dispose(),v.dispose(),c.dispose(),u.dispose(),r.dispose()},"dispose")}},"createStage");var tr=1/Math.sqrt(3),Ex=1.5*tr,W1=l((i,e)=>{let t=-i-e,n=Math.round(i),r=Math.round(e),s=Math.round(t),a=Math.abs(n-i),o=Math.abs(r-e),c=Math.abs(s-t);return a>o&&a>c?n=-r-s:o>c&&(r=-n-s),[n,r]},"roundAxial"),X1=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[r+.5+(s&1)*.5,tr+s*Ex],"centre");return{topologyId:"hex-odd-r",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-tr],[a+.5,o-tr/2],[a+.5,o+tr/2],[a,o+tr],[a-.5,o+tr/2],[a-.5,o-tr/2]]},"outline"),tileAt:l((r,s)=>{let a=r-.5,o=s-tr,[c,u]=W1(a-o*Math.sqrt(3)/3,o*2*Math.sqrt(3)/3);return[c+(u-(u&1))/2,u]},"tileAt"),period:l(()=>({u:e,v:t?i*Ex:null}),"period")}},"hexOddRLayout"),Ax=X1;var q1=l(({height:i,width:e,wrapsY:t})=>({topologyId:"square",centre:l((n,r)=>[n+.5,r+.5],"centre"),outline:l((n,r)=>[[n,r],[n+1,r],[n+1,r+1],[n,r+1]],"outline"),tileAt:l((n,r)=>[Math.floor(n),Math.floor(r)],"tileAt"),period:l(()=>({u:e,v:t?i:null}),"period")}),"squareLayout"),Tx=q1;var Ni=Math.SQRT2/2,Y1=l(({height:i,width:e,wrapsY:t})=>{let n=l((r,s)=>[(2*r+(s&1)+1)*Ni,(s+1)*Ni],"centre");return{topologyId:"staggered-iso",centre:n,outline:l((r,s)=>{let[a,o]=n(r,s);return[[a,o-Ni],[a+Ni,o],[a,o+Ni],[a-Ni,o]]},"outline"),tileAt:l((r,s)=>{let a=r/Ni,o=s/Ni,c=Math.floor((a+o)/2-1+.5),u=Math.floor((o-a)/2+.5),h=c+u;return[Math.floor((c-u)/2),h]},"tileAt"),period:l(()=>({u:e*2*Ni,v:t?i*Ni:null}),"period")}},"staggeredIsoLayout"),Cx=Y1;var Rx={square:Tx,"staggered-iso":Cx,"hex-odd-r":Ax},$1=l(i=>{if(!Object.prototype.hasOwnProperty.call(Rx,i.topologyId))throw new Error(`No ground layout for the ${i.topologyId} grid.`);if(i.wrapsY&&i.topologyId!=="square"&&i.height%2!==0)throw new Error(`The ${i.topologyId} grid can't wrap over the poles with an odd number of rows (${i.height}).`);return Rx[i.topologyId](i)},"groundLayoutFor"),Px=$1;var Ho=l(i=>{let e=i/1.2;if(e>=1)return 0;let t=1-e;return t*t*t*t*(4*e+1)},"weight");var oh=.65,zp=l(i=>{let e=l(t=>{let n=parseInt(i.slice(t,t+2),16)/255;return n<=.04045?n/12.92:((n+.055)/1.055)**2.4},"channel");return[e(1),e(3),e(5)]},"linear"),nr=.22,lh=.12,kp={low:.2,high:.5},Ix=l((i,e,t,n,r,s,a,o,c)=>{let u=s-t,h=a-n,f=u*u+h*h,d=f===0?0:Math.max(0,Math.min(1,((i-t)*u+(e-n)*h)/f)),p=Ho(Math.hypot(i-t-u*d,e-n-h*d)),g=1-d;return p===0?-1/0:p*p*(r+(o-r)*(1-g*g*g)+c)},"halfRidge"),Wo=l((i,e,t,n)=>{let r=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,2246822519)+Math.imul(n,3266489917)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},"chance"),Z1=l((i,e,t)=>({u:(Wo(i,e,t,1)*2-1)*nr,v:(Wo(i,e,t,2)*2-1)*nr,scale:.75+Wo(i,e,t,3)*.5}),"peakOf"),J1=l(({layout:i,ranges:e=!0,seed:t=1,source:n})=>{let{width:r,height:s,wrapsY:a}=n,o=i.period(),c=Nn([Di({cell:.7,period:o,seed:t}),Di({cell:.35,period:o,seed:t+1}),Di({cell:.17,period:o,seed:t+2})]),u=Nn([Di({cell:.45,period:o,seed:t+3}),Di({cell:.22,period:o,seed:t+4})]),h=l((U,K)=>1-2*Math.abs(u(U,K)),"ridged"),f=Di({cell:.8,period:o,seed:t+5}),d=Di({cell:.8,period:o,seed:t+6}),p={flat:null,rolling:"rolling",ridged:"ridged",peaked:"ridged"},g=[],y=[],x=[],_=[],S=[],A=l((U,K)=>{let N=(U%r+r)%r;return!a&&(K<0||K>=s)?null:(K%s+s)%s*r+N},"index"),w=l(U=>{let K=new Array(r*s).fill(1/0),N=[];U.forEach((V,z)=>{V&&(K[z]=0,N.push([z%r,Math.floor(z/r)]))});for(let[V,z]of N){let ae=K[z*r+V]??1/0;ae>=Li.reach||n.neighbours(V,z).forEach(([ce,X])=>{let he=X*r+ce;(K[he]??1/0)>ae+1&&(K[he]=ae+1,N.push([ce,X]))})}return K},"distancesFromLand"),R=l((U,K)=>{let N=n.terrainAt(U,K);return`${N}${N!=="Unknown"&&n.waterAt(U,K)?" water":""}`},"readAs"),C=l(U=>{if(U!==void 0&&y.length>0&&U.every(([te,ue])=>{let re=A(te,ue);return re===null||y[re]===R(te,ue)}))return[];let K=[],N=[],V=[];for(let te=0;te<s;te++)for(let ue=0;ue<r;ue++){let re=n.terrainAt(ue,te);K.push(re),N.push(re!=="Unknown"&&n.waterAt(ue,te)),V.push(ls(re))}let z=w(K.map((te,ue)=>te!=="Unknown"&&!N[ue])),ae=K.map((te,ue)=>`${te}${N[ue]?" water":""}`),ce=[];ae.forEach((te,ue)=>{y[ue]!==te&&ce.push([ue%r,Math.floor(ue/r)])}),y=ae,g=V.map((te,ue)=>{let re=te===Xu,Pe=ue%r,Ge=Math.floor(ue/r),Te=Z1(Pe,Ge,t);if(!N[ue])return{relief:te.relief,colour:zp(te.colour),surface:Mn.indexOf(te.surface),water:!1,unknown:re,peak:Te};let Je=Math.min(z[ue]??1/0,Li.reach),Ke=Li.shore+(Li.deep-Li.shore)*Math.max(0,Je-1)/Math.max(1,Li.reach-1);return{relief:{...te.relief,base:Ke},colour:zp(te.colour),surface:Mn.indexOf("sand"),water:!0,unknown:re,peak:Te}});let X=S,he=new Map(ce.map(([te,ue])=>[`${te},${ue}`,[te,ue]]));return S=g.map(({relief:te,unknown:ue},re)=>!ue&&!N[re]&&te.shape==="peaked"),ce.some(([te,ue])=>{let re=ue*r+te;return S[re]===!0||X[re]===!0})&&([x,_]=J()),ce.forEach(([te,ue])=>{let re=ue*r+te;S[re]!==!0&&X[re]!==!0||n.neighbours(te,ue).forEach(([Pe,Ge])=>{let Te=A(Pe,Ge);Te!==null&&S[Te]===!0&&he.set(`${Pe},${Ge}`,[Pe,Ge])})}),[...he.values()]},"refresh"),v=l(U=>{let[K,N]=i.centre(0,U);return Math.max(...i.outline(0,U).map(([V,z])=>Math.hypot(V-K,z-N)))},"cornerOf"),E=l((U,K)=>{let[N,V]=i.centre(0,U),z=[];for(let ae=-8;ae<=8;ae++)for(let ce=-6;ce<=6;ce++){let[X,he]=i.centre(ce,U+ae);Math.hypot(X-N,he-V)<K+1e-9&&z.push([ce,ae])}return z},"offsetsWithin"),I=l((U,K,N,V)=>{if(r>=6&&(!a||s>=6)){let te=l((Pe,Ge)=>{let Te=(Pe%Ge+Ge)%Ge;return Te*2<Ge?Te:Te-Ge},"nearest"),ue=te(N-U,r),re=a?te(V-K,s):V-K;return ue===0&&re===0?[]:[[ue,re]]}let z=l((te,ue)=>{let re=(te%ue+ue)%ue;return re===0?[0]:[re,re-ue]},"copies"),[ae,ce]=i.centre(U,K),X=z(N-U,r).flatMap(te=>(a?z(V-K,s):[V-K]).flatMap(ue=>{if(te===0&&ue===0)return[];let[re,Pe]=i.centre(U+te,K+ue);return[[te,ue,Math.hypot(re-ae,Pe-ce)]]})),he=Math.min(...X.map(([,,te])=>te));return X.filter(([,,te])=>te<=he+1e-9).map(([te,ue])=>[te,ue])},"stepsTo"),P=Math.max(...[0,1].flatMap(U=>{let[K,N]=i.centre(0,U);return n.neighbours(0,U).flatMap(([V,z])=>I(0,U,V,z).map(([ae,ce])=>{let[X,he]=i.centre(ae,U+ce);return Math.hypot(X-K,he-N)}))}),1),F=[0,1].map(U=>{let[K,N]=i.centre(0,U);return E(U,P+nr*Math.SQRT2+lh+1.2+Math.max(v(0),v(1))).flatMap(([V,z])=>{let[ae,ce]=i.centre(V,U+z);return[V,z,ae-K,ce-N]})}),k=l((U,K,N,V,z,ae)=>{let ce=z-N,X=ae-V,he=ce*ce+X*X,te=he===0?0:Math.max(0,Math.min(1,((U-N)*ce+(K-V)*X)/he));return Math.hypot(U-N-ce*te,K-V-X*te)},"toSegment"),J=l(()=>{let U=g.map(()=>[]),K=g.map(()=>[]),N=Math.max(v(0),v(1));return e?(g.forEach((V,z)=>{if(S[z]!==!0)return;let ae=z%r,ce=Math.floor(z/r),[X,he]=i.centre(ae,ce),te=new Map;n.neighbours(ae,ce).forEach(([ue,re])=>{let Pe=A(ue,re);Pe!==null&&S[Pe]===!0&&I(ae,ce,ue,re).forEach(([Ge,Te])=>te.set(`${Ge},${Te}`,[Ge,Te,Pe]))}),te.forEach(([ue,re,Pe])=>{let Ge=g[Pe];if(Ge===void 0||re<0||re===0&&ue<0)return;let[Te,Je]=i.centre(ae+ue,ce+re),{peak:Ke,relief:Xe}=V,{peak:et,relief:dt}=Ge,Tt=Ke.u,lt=Ke.v,Lt=Te-X+et.u,pt=Je-he+et.v,St=Xe.base*oh*Ke.scale,It=dt.base*oh*et.scale,st=Math.hypot(Lt-Tt,pt-lt)||1,B=16+(re+2)*5+(ue+2),Rt=(Wo(ae,ce,t,B)*2-1)*lh,at=kp.low+(kp.high-kp.low)*Wo(ae,ce,t,B+32),je=(Tt+Lt)/2-(pt-lt)/st*Rt,me=(lt+pt)/2+(Lt-Tt)/st*Rt,ut=Math.max(Math.hypot(Tt-je,lt-me),Math.hypot(Lt-je,pt-me))+1.2,Fe={au:Tt,av:lt,ah:St,mu:je,mv:me,mh:at*Math.min(St,It),bu:Lt,bv:pt,bh:It,roughness:(Xe.roughness+dt.roughness)/2,cu:je,cv:me,reach:ut*ut},ze=(Math.sqrt(Fe.reach)+N)**2,T=F[ce&1]??[];for(let b=0;b<T.length;b+=4){let q=T[b+2],fe=T[b+3];if((q-je)**2+(fe-me)**2>=ze||Math.min(k(q,fe,Tt,lt,je,me),k(q,fe,je,me,Lt,pt))>=1.2+N)continue;let se=A(ae+T[b],ce+T[b+1]);se!==null&&(U[se]?.push(Fe),K[se]?.push(q,fe))}})}),[U,K]):[U,K]},"ranges"),L=l(U=>{let[K,N]=i.centre(0,U),V=Math.max(...i.outline(0,U).map(([ae,ce])=>Math.hypot(ae-K,ce-N))),z=[];for(let ae=-6;ae<=6;ae++)for(let ce=-4;ce<=4;ce++){let[X,he]=i.centre(ce,U+ae);Math.hypot(X-K,he-N)<1.2+V+nr*Math.SQRT2+1e-9&&z.push([ce,ae])}return z},"offsetsFor"),Y=[L(0),L(1)],Q=l((U,K)=>{let[N,V]=i.tileAt(U,K),z=A(N,V),ae=z===null?null:g[z]??null;if(ae===null||ae.unknown)return{height:0,colour:zp(Xu.colour),surfaces:Mn.map(()=>0),shore:0,unseen:!0};let ce=null,X=null,he=l(St=>St==="rolling"?ce??=c(U,K):X??=h(U,K),"noiseHere"),te=0,ue=0,re=0,Pe=0,Ge=Mn.map(()=>0),Te=0,Je=0,Ke=0,Xe=0,et=0,dt=U+nr*f(U,K),Tt=K+nr*d(U,K);(Y[V&1]??[]).forEach(([St,It])=>{let st=N+St,B=V+It,Rt=A(st,B);if(Rt===null)return;let at=g[Rt];if(at===void 0)return;let[je,me]=i.centre(st,B),{relief:ut,colour:Fe,peak:ze,surface:T}=at,b=Ho(Math.hypot(U-je,K-me)),q=ut.shape==="peaked"?Ho(Math.hypot(U-je-ze.u,K-me-ze.v)):0,fe=Ho(Math.hypot(dt-je,Tt-me))**3;if(b>0){let se=p[ut.shape],xe=se===null?0:ut.roughness*he(se);ut.shape==="peaked"?ue+=b*(ut.base*(1-oh)+xe*.5):ue+=b*(ut.base+xe),te+=b}if(q>0){let se=ut.roughness*he("ridged");re+=q*q*(ut.base*oh*ze.scale+se*.5)}Pe+=fe,at.unknown||(Ge[T]=(Ge[T]??0)+fe,Te+=fe,Je+=at.water?fe:0),Ke+=fe*Fe[0],Xe+=fe*Fe[1],et+=fe*Fe[2]});let lt=z===null?[]:x[z]??[],Lt=z===null?[]:_[z]??[],pt=re;if(lt.length>0){let[St,It]=i.centre(N,V);lt.forEach((st,B)=>{let Rt=U-St+(Lt[B*2]??0),at=K-It+(Lt[B*2+1]??0);if((Rt-st.cu)**2+(at-st.cv)**2>=st.reach)return;let je=st.roughness*he("ridged")*.5;pt=Math.max(pt,Ix(Rt,at,st.au,st.av,st.ah,st.mu,st.mv,st.mh,je),Ix(Rt,at,st.bu,st.bv,st.bh,st.mu,st.mv,st.mh,je))})}return{height:(te>0?ue/te:0)+pt,colour:Pe>0?[Ke/Pe,Xe/Pe,et/Pe]:ae.colour,surfaces:Te>0?Ge.map(St=>St/Te):Mn.map((St,It)=>It===ae.surface?1:0),shore:Te>0?Je/Te:ae.water?1:0,unseen:!1}},"sample");return C(),{sample:Q,height:l((U,K)=>Q(U,K).height,"height"),refresh:C}},"createRelief"),Lx=J1;var Dx=l((i,e,{size:t=16,perUnit:n=8}={})=>{let{u:r,v:s}=i.period(),a=s??Math.max(...i.outline(0,e-1).map(([,f])=>f),...i.outline(1,e-1).map(([,f])=>f)),o=Math.max(1,Math.round(r/t)),c=Math.max(1,Math.round(a/t)),u=Math.max(2,Math.round(r/o*n)),h=Math.max(2,Math.round(a/c*n));return{chunksU:o,chunksV:c,stepsU:u,stepsV:h,spacingU:r/o/u,spacingV:a/c/h}},"chunkGrid"),Nx=l((i,e,t,n)=>{let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=i,c=t*r,u=n*s,h=l((I,P)=>[I*a,P*o],"at"),f=r+3,d=new Float64Array(f*(s+3)),p=(r+1)*(s+1),g=new Float32Array(p*3),y=new Uint8Array(p*4),x=new Uint8Array(p*4),_=new Uint8Array(p),S=new Float32Array(p);for(let I=-1;I<=s+1;I++)for(let P=-1;P<=r+1;P++){let F=e.sample(...h(c+P,u+I)),{height:k,colour:J}=F;if(d[(I+1)*f+(P+1)]=k,P>=0&&P<=r&&I>=0&&I<=s){let L=I*(r+1)+P;g.set(J,L*3),F.surfaces.forEach((Y,Q)=>{(Q<4?y:x)[L*4+Q%4]=Math.round(Y*255)}),_[L]=Math.round(F.shore*255),S[L]=F.unseen?1:0}}let A=l((I,P)=>d[(P+1)*f+(I+1)]??0,"height"),w=new Float32Array(p*3),R=new Float32Array(p*3),[C,v]=h(c,u);for(let I=0;I<=s;I++)for(let P=0;P<=r;P++){let F=I*(r+1)+P,[k,J]=h(c+P,u+I),L=(A(P+1,I)-A(P-1,I))/(2*a),Y=(A(P,I+1)-A(P,I-1))/(2*o),Q=Math.hypot(L,1,Y);w[F*3]=k-C,w[F*3+1]=A(P,I),w[F*3+2]=J-v,R[F*3]=-L/Q,R[F*3+1]=1/Q,R[F*3+2]=-Y/Q}let E=new Uint32Array(r*s*6);for(let I=0;I<s;I++)for(let P=0;P<r;P++){let F=I*(r+1)+P,k=F+1,J=F+r+1,L=J+1,Y=(I*r+P)*6;E.set([F,J,k,k,J,L],Y)}return{u:C,v,positions:w,normals:R,colours:g,surfacesA:y,surfacesB:x,shore:_,unseen:S,indices:E}},"buildChunk"),Ux=l((i,e,t,n)=>{let r=i.stepsU*i.spacingU,s=i.stepsV*i.spacingV,a=e.period().v!==null,o=new Set;return t.forEach(([c,u])=>{let[h,f]=e.centre(c,u);for(let d=Math.floor((h-n)/r);d<=Math.floor((h+n)/r);d++)for(let p=Math.floor((f-n)/s);p<=Math.floor((f+n)/s);p++){if(!a&&(p<0||p>=i.chunksV))continue;let g=(d%i.chunksU+i.chunksU)%i.chunksU,y=a?(p%i.chunksV+i.chunksV)%i.chunksV:p;o.add(`${g},${y}`)}}),[...o].map(c=>c.split(",").map(Number))},"chunksNear");var Bn=l((i,e,t,n,r)=>({kind:i,count:e,size:t,colour:n,detail:r}),"plant"),Fx={Forest:{plants:[Bn("conifer",8,[.95,1.4],"#2c5230","#4a3424")],conifers:[.15,.95],canopy:"woods"},Jungle:{plants:[Bn("broadleaf",7,[1.05,1.55],"#2b6a2a","#4d3a26"),Bn("palm",2,[.9,1.2],"#3f8a34","#6b5236")],canopy:"woods"},Swamp:{plants:[Bn("reeds",7,[.8,1.2],"#7a8a4a","#5a6a38"),Bn("deadTree",2,[.8,1.1],"#4a4036","#4a4036")],canopy:"swamp"},Grassland:{plants:[Bn("bush",2,[.8,1.2],"#4e7a32","#4e7a32")]},Plains:{plants:[Bn("shrub",3,[.7,1.1],"#7a7a3a","#6a5a36")]},Tundra:{plants:[Bn("scrub",4,[.7,1.1],"#6a6a4e","#5a5444")]},Hills:{plants:[Bn("shrub",2,[.8,1.1],"#5e6e36","#5e5036"),Bn("rock",1,[.8,1.2],"#7d756a","#7d756a")]},Mountains:{plants:[Bn("rock",3,[.9,1.4],"#77706a","#77706a")]},Desert:{plants:[Bn("rock",2,[.7,1.1],"#a8936a","#a8936a"),Bn("cactus",1,[.8,1.1],"#5a7a3e","#5a7a3e")]}},wa=l(i=>Object.prototype.hasOwnProperty.call(Fx,i)?Fx[i]:null,"growthOf");var K1=["River"],$n=l((i,e)=>(i.improvements??[]).some(({_:t})=>t===e),"has"),j1=["Irrigation","Farmland","Fortress","Airbase"],Ox=l(i=>i.city||j1.some(e=>$n(i,e))?null:wa(i.terrain?._??"Unknown")?.canopy??null,"woodsOf"),Q1=l((i,e)=>{if(i.city)return null;let t=$n(i,"Road"),n=$n(i,"Railroad"),r=t?e.filter(f=>$n(f.tile,"Road")).map(({offset:f})=>f):[],s=t?e.filter(f=>!!f.tile.city||$n(f.tile,"Railroad")).map(({offset:f})=>f):[],a=l((f,d)=>f[0]===d[0]&&f[1]===d[1],"same"),o=r.length===0&&s.length===0,c={road:t?{joins:r.filter(f=>!n||!s.some(d=>a(d,f))),alone:o&&!n}:null,railroad:t&&n?{joins:s,alone:o}:null,irrigation:$n(i,"Farmland")?"farmland":$n(i,"Irrigation")?"irrigation":null,mine:$n(i,"Mine"),fortress:$n(i,"Fortress"),airbase:$n(i,"Airbase"),pollution:$n(i,"Pollution"),specials:(i.terrain?.features??[]).map(({_:f})=>f).filter(f=>!K1.includes(f)).map(f=>[i.terrain._,f]),hut:i.goodyHut!==null&&i.goodyHut!==void 0,terrain:i.terrain?._??"Unknown",vegetation:wa(i.terrain?._??"Unknown")!==null,woods:[],paths:[]},u=Ox(i);return u!==null&&(c.woods=e.filter(f=>Ox(f.tile)===u).map(({offset:f})=>f),c.paths=e.filter(f=>!!f.tile.city||$n(f.tile,"Road")).map(({offset:f})=>f)),c.road===null&&c.irrigation===null&&!c.mine&&!c.fortress&&!c.airbase&&!c.pollution&&c.specials.length===0&&!c.hut&&!c.vegetation?null:c},"overlayFor"),Bx=Q1;var At=l((i,e,t,n)=>({shape:i,colour:e,count:t,...n===void 0?{}:{detail:n}}),"look"),zx={Coal:At("rocks","#26262a",4),Gold:At("rocks","#d8b13a",3),Gems:At("rocks","#59c2d6",4,"#b05ad0"),Iron:At("rocks","#8a5a44",4),Wheat:At("crop","#d9b84a",5,"#a88a2c"),Spice:At("crop","#c0452e",4,"#5d7a2a"),Wine:At("crop","#6a2c5e",4,"#5d7a2a"),Silk:At("crop","#e9e2cf",3,"#4f7a34"),Fruit:At("crop","#e08a2a",4,"#3f7a2a"),Horse:At("animal","#7a4e2a",2,"#3a2a1c"),Buffalo:At("animal","#4a3424",3,"#2a1e16"),Game:At("animal","#a9835a",2,"#5a4430"),"Tundra:Game":At("animal","#8f7e66",2,"#e8e2d6"),Furs:At("animal","#b0602a",2,"#f0e8dc"),Ivory:At("animal","#8a8580",1,"#f2ead8"),Seal:At("animal","#6e7072",2,"#4a4c4e"),Pheasant:At("bird","#8a3a22",2,"#3d6a3a"),Fish:At("fish","#b8c4cc",5),Whales:At("whale","#3a4048",1),Oil:At("derrick","#222224",1,"#121214"),Oasis:At("oasis","#3f7a32",3,"#3f86a8"),Peat:At("peat","#4a3624",4),Shield:At("logs","#7a5532",4,"#c9a47a")},eE=At("cairn","#9a9690",5),kx=l((i,e)=>{let t=l(n=>Object.prototype.hasOwnProperty.call(zx,n)?zx[n]:void 0,"own");return t(`${i}:${e}`)??t(e)??eE},"specialLook");var Yp=l(()=>({positions:[],normals:[],colours:[]}),"soup"),zn={field:.01,road:.014,ballast:.016,rail:.02,smear:.024},Gp=.06,Gx="#8c7a58",Vx="#5f5953",tE="#a9abae",nE="#5e432b",iE="#4f87b0",rE="#7da33f",sE=["#c2b448","#8fae3e"],Hx="#9d968a",aE="#4a4c50",Xp="#6b4a2e",oE="#7a6a58",lE="#b89a5a",cE="#c9b48e",Wx="#34322a",Sn=new Mi(1,1,1),Aa=new Si(.5,.5,1,8),$p=new wi(.5,1,8),uE=new wi(.5,1,4),Ea=new Ar(.5,8,6),Xo=new Si(.5,.5,1,4,1,!0),qo=new wi(.5,1,5,1,!0),ch=new Ar(.5,5,3),Vp={mine:[3,.72],hut:[11,.64],special:l(i=>[i+1,.72],"special")},hE=.05,dE=.22,Xx=72,ui=l((i,e)=>{let t=Math.imul(i^Math.imul(e+1,2654435761),2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296},"fraction"),qx=new Map,Hp=l(i=>{let e=qx.get(i);if(e===void 0){let{r:t,g:n,b:r}=new Ue(i);e=[t,n,r],qx.set(i,e)}return e},"colourOf"),Yx=new WeakMap,fE=l(i=>{let e=Yx.get(i);if(e===void 0){let t=i.index===null?i:i.toNonIndexed();e={positions:new Float32Array(t.getAttribute("position").array),normals:new Float32Array(t.getAttribute("normal").array)},Yx.set(i,e),t!==i&&t.dispose()}return e},"trianglesOf"),pE=new gt,mE=new We,gE=new W,xE=new mn,_E=new Rn,vE=new W,zt,Jx,ln,Qp=class Qp{constructor(e,t){ee(this,zt);this.lines=[];this.taken=[];this.grown=[];this.soup=e,this.place=t}ground(e,t,n=!1){let r=this.place.heightAt(e,t);return n?Math.max(0,r):r}strip(e,t,n,r,s){let a=Hp(r),o=Math.hypot(t[0]-e[0],t[1]-e[1]);if(o===0)return;let c=Math.max(1,Math.ceil(o/Gp)),u=Math.max(1,Math.ceil(n/Gp)),h=[-(t[1]-e[1])/o*n,(t[0]-e[0])/o*n],f=l((d,p)=>[e[0]+(t[0]-e[0])*d+h[0]*(p-.5),e[1]+(t[1]-e[1])*d+h[1]*(p-.5)],"at");for(let d=0;d<c;d++)for(let p=0;p<u;p++){let[g,y]=f(d/c,(p+1)/u),[x,_]=f((d+1)/c,(p+1)/u),[S,A]=f(d/c,p/u),[w,R]=f((d+1)/c,p/u);G(this,zt,ln).call(this,g,y,s,a),G(this,zt,ln).call(this,x,_,s,a),G(this,zt,ln).call(this,S,A,s,a),G(this,zt,ln).call(this,x,_,s,a),G(this,zt,ln).call(this,w,R,s,a),G(this,zt,ln).call(this,S,A,s,a)}}disc(e,t,n,r,s=12){let a=Hp(n),[o,c]=e,u=Math.max(1,Math.ceil(t/Gp)),h=l((f,d)=>{let p=d/s*Math.PI*2,g=f/u*t;return[o+Math.cos(p)*g,c+Math.sin(p)*g]},"at");for(let f=0;f<u;f++)for(let d=0;d<s;d++){let p=h(f+1,d),g=h(f+1,d+1);if(f===0)G(this,zt,ln).call(this,o,c,r,a),G(this,zt,ln).call(this,...g,r,a),G(this,zt,ln).call(this,...p,r,a);else{let y=h(f,d),x=h(f,d+1);G(this,zt,ln).call(this,...y,r,a),G(this,zt,ln).call(this,...x,r,a),G(this,zt,ln).call(this,...p,r,a),G(this,zt,ln).call(this,...x,r,a),G(this,zt,ln).call(this,...g,r,a),G(this,zt,ln).call(this,...p,r,a)}}}solid(e,t,n,r,s=[0,0,0]){let{positions:a,normals:o}=fE(e),c=pE.compose(gE.set(...t),xE.setFromEuler(_E.set(...s)),vE.set(...n)),u=c.elements,h=mE.getNormalMatrix(c).elements,[f,d,p]=Hp(r),g=this.soup;for(let y=0;y<a.length;y+=3){let x=a[y],_=a[y+1],S=a[y+2],A=o[y],w=o[y+1],R=o[y+2],C=h[0]*A+h[3]*w+h[6]*R,v=h[1]*A+h[4]*w+h[7]*R,E=h[2]*A+h[5]*w+h[8]*R,I=Math.hypot(C,v,E)||1;g.positions.push(u[0]*x+u[4]*_+u[8]*S+u[12],u[1]*x+u[5]*_+u[9]*S+u[13],u[2]*x+u[6]*_+u[10]*S+u[14]),g.normals.push(C/I,v/I,E/I),g.colours.push(f,d,p)}}spot(e,t){let n=ui(this.place.seed,e)*Math.PI*2,[r,s]=this.place.centre;return[r+Math.cos(n)*t*this.place.radius,s+Math.sin(n)*t*this.place.radius]}clearance(e,t,n){let[r,s]=this.place.centre,a=Math.hypot(e-r,t-s)-dE-n;return this.lines.forEach(([o,c])=>{a=Math.min(a,RE(e,t,o,c)-hE-n)}),this.taken.forEach(([o,c,u])=>{a=Math.min(a,Math.hypot(e-o,t-c)-u-n)}),a}hasRoom(e,t,n){return this.clearance(e,t,n)>=0}claim(e,t,n){let r=ui(this.place.seed,e)*Math.PI*2,[s,a]=this.place.centre,o=[s,a],c=-1/0;for(let u of[t,t*.88,t*1.1])for(let h=0;h<Xx;h++){let f=r+h/Xx*Math.PI*2,d=[s+Math.cos(f)*u*this.place.radius,a+Math.sin(f)*u*this.place.radius],p=this.clearance(d[0],d[1],n);if(p>=0)return this.taken.push([d[0],d[1],n]),d;p>c&&(o=d,c=p)}return this.taken.push([o[0],o[1],n]),o}};zt=new WeakSet,Jx=l(function(e,t){let r=(this.place.heightAt(e+.05,t)-this.place.heightAt(e-.05,t))/.1,s=(this.place.heightAt(e,t+.05)-this.place.heightAt(e,t-.05))/(2*.05),a=Math.hypot(r,1,s);return[-r/a,1/a,-s/a]},"#normal"),ln=l(function(e,t,n,r){this.soup.positions.push(e,this.ground(e,t)+n,t),this.soup.normals.push(...G(this,zt,Jx).call(this,e,t)),this.soup.colours.push(...r)},"#point"),l(Qp,"Layer");var qp=Qp,Zp=l((i,e)=>{let[t,n]=i.centre,[r,s]=i.toward(e);return[(t+r)/2,(n+s)/2]},"halfway"),Jp=l(i=>i.alone||i.joins.length>0,"drawn"),yE=l((i,e)=>{let{place:t}=i;Jp(e)&&(e.joins.forEach(n=>i.strip(t.centre,Zp(t,n),.07,Gx,zn.road)),i.disc(t.centre,e.alone?.09:.035,Gx,zn.road))},"road"),bE=l((i,e)=>{if(!Jp(e))return;let{place:t}=i;(e.alone?[[t.centre[0]+.12,t.centre[1]],[t.centre[0]-.12,t.centre[1]]]:e.joins.map(r=>Zp(t,r))).forEach(r=>{let[s,a]=t.centre,o=Math.hypot(r[0]-s,r[1]-a),c=o===0?[0,0]:[-(r[1]-a)/o*.025,(r[0]-s)/o*.025];i.strip(t.centre,r,.1,Vx,zn.ballast);for(let u=.1;u<1;u+=.2){let h=[s+(r[0]-s)*u,a+(r[1]-a)*u];i.strip([h[0]+c[0]*1.8,h[1]+c[1]*1.8],[h[0]-c[0]*1.8,h[1]-c[1]*1.8],.014,nE,zn.ballast+.002)}[1,-1].forEach(u=>i.strip([s+c[0]*u,a+c[1]*u],[r[0]+c[0]*u,r[1]+c[1]*u],.01,tE,zn.rail))}),i.disc(t.centre,.05,Vx,zn.ballast)},"railroad"),ME=l((i,e)=>{let{centre:t,inner:n}=i.place,r=e==="farmland"?6:4,s=n*.9,a=s*2/r;for(let o=0;o<r;o++){let c=t[1]-s+a*(o+.5),u=e==="farmland"?sE[o%2]:rE;if(i.strip([t[0]-s,c],[t[0]+s,c],a*.8,u,zn.field),o>0){let h=t[1]-s+a*o;i.strip([t[0]-s,h],[t[0]+s,h],.016,iE,zn.field+.001)}}},"fields"),SE=l((i,[e,t])=>{let n=i.ground(e,t);i.solid(Sn,[e-.02,n+.05,t],[.01,.11,.01],Xp,[0,0,-.3]),i.solid(Sn,[e+.02,n+.05,t],[.01,.11,.01],Xp,[0,0,.3]),i.solid(Aa,[e,n+.1,t],[.05,.008,.05],"#3a3a3a",[Math.PI/2,0,0]),[[.07,.03],[-.05,.06]].forEach(([r,s])=>{let a=e+r,o=t+s;i.solid($p,[a,i.ground(a,o)+.02,o],[.07,.04,.07],oE)})},"mine"),wE=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.62,r=i.ground(e,t);[[0,-n,n*2,.025],[0,n,n*2,.025],[-n,0,.025,n*2],[n,0,.025,n*2]].forEach(([s,a,o,c])=>{let u=e+s,h=t+a;i.solid(Sn,[u,Math.max(r,i.ground(u,h))+.02,h],[o,.05,c],Hx)}),[[-n,-n],[n,-n],[-n,n],[n,n]].forEach(([s,a])=>{let o=e+s,c=t+a;i.solid(Aa,[o,i.ground(o,c)+.035,c],[.045,.07,.045],Hx)})},"fortress"),EE=l(i=>{let[e,t]=i.place.centre,n=i.place.radius*.75,[r,s]=i.claim(5,.6,.08);i.strip([e-n,t+.12],[e+n,t+.12],.12,aE,zn.road+.002),i.strip([e-n*.9,t+.12],[e+n*.9,t+.12],.008,"#e8e8e8",zn.road+.004),i.solid(Sn,[r,i.ground(r,s)+.03,s],[.12,.06,.08],"#8a9096")},"airbase"),AE=l(i=>{let e=i.place.radius;i.disc(i.place.centre,e*.55,Wx,zn.smear,14),i.disc(i.spot(7,.5),e*.25,Wx,zn.smear+.001)},"pollution"),TE=l((i,e,t,n)=>{let r=e.detail??e.colour,s=l((o,c)=>[t[0]+(ui(i.place.seed,n*31+o*2)-.5)*c,t[1]+(ui(i.place.seed,n*31+o*2+1)-.5)*c],"jitter"),a=e.shape==="fish"||e.shape==="whale";for(let o=0;o<e.count;o++){let[c,u]=e.count===1?[t[0],t[1]]:s(o,.1),h=i.ground(c,u,a),f=ui(i.place.seed,n*31+o+17)*Math.PI*2;switch(e.shape){case"rocks":i.solid(Ea,[c,h+.012,u],[.05,.035,.045],o%2===1?r:e.colour,[0,f,0]);break;case"crop":i.solid(Aa,[c,h+.02,u],[.008,.04,.008],r),i.solid(Ea,[c,h+.05,u],[.045,.04,.045],e.colour);break;case"animal":{let d=e.count===1?1.5:1;i.solid(Sn,[c,h+.04*d,u],[.035*d,.03*d,.07*d],e.colour,[0,f,0]),i.solid(Sn,[c+Math.sin(f)*.04*d,h+.055*d,u+Math.cos(f)*.04*d],[.022*d,.024*d,.03*d],r,[0,f,0]),i.solid(Sn,[c,h+.013*d,u],[.03*d,.026*d,.055*d],r,[0,f,0]);break}case"bird":i.solid(Ea,[c,h+.02,u],[.03,.025,.04],e.colour,[0,f,0]),i.solid(Sn,[c-Math.sin(f)*.03,h+.025,u-Math.cos(f)*.03],[.008,.006,.04],r,[.4,f,0]);break;case"fish":i.solid(Ea,[c,h+.006,u],[.012,.01,.035],e.colour,[0,f,0]);break;case"whale":i.solid(Ea,[c,h,u],[.07,.05,.2],e.colour,[0,f,0]),i.solid(Sn,[c-Math.sin(f)*.11,h+.02,u-Math.cos(f)*.11],[.08,.006,.03],e.colour,[0,f,0]);break;case"derrick":i.solid(Sn,[c,h+.008,u],[.08,.016,.08],r),i.solid(uE,[c,h+.1,u],[.06,.18,.06],e.colour,[0,Math.PI/4,0]);break;case"oasis":o===0&&i.disc([c,u],.07,r,zn.field+.002);{let[d,p]=s(o+5,.1),g=i.ground(d,p);i.solid(Aa,[d,g+.06,p],[.012,.12,.012],Xp),i.solid($p,[d,g+.125,p],[.09,.03,.09],e.colour)}break;case"peat":case"logs":i.solid(e.shape==="logs"?Aa:Sn,[c,h+.012,u],e.shape==="logs"?[.022,.09,.022]:[.05,.02,.035],o%2===1&&e.detail!==void 0?e.detail:e.colour,e.shape==="logs"?[0,f,Math.PI/2]:[0,f,0]);break;default:i.solid(Ea,[t[0],i.ground(t[0],t[1])+.012+o*.018,t[1]],[.05-o*.007,.025,.05-o*.007],e.colour)}}},"special"),CE=l((i,e)=>{[0,1,2].forEach(t=>{let n=t/3*Math.PI*2+ui(i.place.seed,12)*Math.PI,r=e[0]+Math.cos(n)*.06,s=e[1]+Math.sin(n)*.06,a=i.ground(r,s);i.solid(Aa,[r,a+.02,s],[.05,.04,.05],cE),i.solid($p,[r,a+.055,s],[.065,.035,.065],lE)})},"hut"),Kx={conifer:.06,broadleaf:.07,palm:.06,deadTree:.05,bush:.035,shrub:.03,scrub:.03,reeds:.03,rock:.04,cactus:.03},jx=l((i,e,t,n,r,s,a)=>{let o=i.ground(n,r),{colour:c,detail:u}=e;switch(t){case"conifer":i.solid(Xo,[n,o+.025*s,r],[.016*s,.05*s,.016*s],u),i.solid(qo,[n,o+.09*s,r],[.11*s,.12*s,.11*s],c),i.solid(qo,[n,o+.16*s,r],[.08*s,.1*s,.08*s],c);break;case"broadleaf":i.solid(Xo,[n,o+.04*s,r],[.018*s,.08*s,.018*s],u),i.solid(ch,[n,o+.12*s,r],[.13*s,.11*s,.13*s],c,[0,a,0]);break;case"palm":i.solid(Xo,[n,o+.08*s,r],[.012*s,.16*s,.012*s],u,[.12,a,0]),i.solid(qo,[n+.01*s,o+.165*s,r],[.15*s,.03*s,.15*s],c,[0,a,0]);break;case"deadTree":i.solid(Xo,[n,o+.06*s,r],[.014*s,.12*s,.014*s],u),i.solid(Sn,[n+.02*s,o+.09*s,r],[.006*s,.05*s,.006*s],u,[0,a,-.7]);break;case"bush":i.solid(ch,[n,o+.02*s,r],[.06*s,.045*s,.06*s],c,[0,a,0]);break;case"shrub":i.solid(qo,[n,o+.025*s,r],[.05*s,.05*s,.05*s],c,[0,a,0]),i.solid(qo,[n+.02*s,o+.018*s,r+.01*s],[.035*s,.036*s,.035*s],c,[0,a,0]);break;case"scrub":i.solid(ch,[n,o+.008*s,r],[.05*s,.02*s,.05*s],c,[0,a,0]);break;case"reeds":[-1,0,1].forEach(h=>i.solid(Sn,[n+h*.008*s,o+.035*s,r],[.005,.07*s,.005],h===0?c:u,[0,a,h*.18]));break;case"rock":i.solid(ch,[n,o+.012*s,r],[.07*s,.04*s,.06*s],c,[0,a,0]);break;default:i.solid(Xo,[n,o+.05*s,r],[.018*s,.1*s,.018*s],c),i.solid(Sn,[n+.015*s,o+.06*s,r],[.025*s,.01*s,.01*s],c,[0,a,0])}},"grow"),RE=l((i,e,t,n)=>{let r=n[0]-t[0],s=n[1]-t[1],a=r*r+s*s,o=a===0?0:Math.max(0,Math.min(1,((i-t[0])*r+(e-t[1])*s)/a));return Math.hypot(i-(t[0]+r*o),e-(t[1]+s*o))},"distanceTo"),PE=l((i,e)=>{let t=wa(e.terrain);if(t===null)return;let{centre:n,radius:r,seed:s,latitude:a}=i.place;t.plants.forEach((o,c)=>{for(let u=0;u<o.count;u++){let h=1e3+c*97+u*7,f=o.size[0]+(o.size[1]-o.size[0])*ui(s,h),d=t.conifers,p=d!==void 0&&ui(s,h+1)>=d[0]+(d[1]-d[0])*a?"broadleaf":o.kind,g=Kx[p]*f;for(let y=0;y<6;y++){let x=ui(s,h+2+y*2)*Math.PI*2,_=Math.sqrt(ui(s,h+3+y*2))*r*.92,S=n[0]+Math.cos(x)*_,A=n[1]+Math.sin(x)*_;if(i.hasRoom(S,A,g)){jx(i,o,p,S,A,f,x),i.taken.push([S,A,g]),i.grown.push([S,A,p]);break}}}})},"plants"),Wp=.26,$x=.3,IE=.15,Zx=.5,uh=[.9,1.3],_s=l((i,e,t)=>ui(Math.imul(i,73856093)^Math.imul(e,19349663)^1540483477,t),"pointFraction"),LE=l((i,e,t)=>{let{centre:n,outline:r,owns:s,around:a,period:o,toward:c,latitude:u}=e,h=Math.max(1,Math.round(o.u/Wp)),f=o.u/h,d=o.v===null?null:Math.max(1,Math.round(o.v/Wp)),p=o.v===null||d===null?Wp:o.v/d,g=r.map(([v])=>v),y=r.map(([,v])=>v),[x,_]=[Math.floor(Math.min(...g)/f)-1,Math.ceil(Math.max(...g)/f)],[S,A]=[Math.floor(Math.min(...y)/p)-1,Math.ceil(Math.max(...y)/p)],w=a.filter(([v,E])=>!i.woods.some(([I,P])=>I===v&&P===E)).map(v=>{let[E,I]=c(v),P=Math.hypot(E-n[0],I-n[1]);return{mu:E,mv:I,length:P}}),R=t.plants.reduce((v,{count:E})=>v+E,0),C=[];for(let v=S;v<=A;v++)for(let E=x;E<=_;E++){let I=(E%h+h)%h,P=d===null?v:(v%d+d)%d,F=(E+.5+(_s(I,P,0)*2-1)*$x)*f,k=(v+.5+(_s(I,P,1)*2-1)*$x)*p;if(!s(F,k))continue;let J=w.reduce((N,{mu:V,mv:z,length:ae})=>{let ce=ae/2-((F-n[0])*(V-n[0])+(k-n[1])*(z-n[1]))/ae;return Math.min(N,Math.max(0,ce)/IE)},1);if(_s(I,P,2)>=Zx+(1-Zx)*J)continue;let L=_s(I,P,3)*R,Y=t.plants[0];for(let N of t.plants)if(Y=N,L-=N.count,L<0)break;let Q=t.conifers,U=Q!==void 0&&_s(I,P,4)>=Q[0]+(Q[1]-Q[0])*u?"broadleaf":Y.kind,K=Y.size[0]+(Y.size[1]-Y.size[0])*_s(I,P,5);C.push({u:F,v:k,kind:U,plant:Y,room:Kx[U]*K*uh[1],size:K*(uh[0]+(uh[1]-uh[0])*J),facing:_s(I,P,6)*Math.PI*2})}return C},"woodsPlants"),DE=l((i,e,t)=>{let{centre:n,around:r,toward:s,heightAt:a}=i.place,o=Math.max(...r.map(u=>{let[h,f]=s(u);return Math.hypot(h-n[0],f-n[1])})),c=e.paths.map(u=>s(u));c.forEach((u,h)=>c.slice(h+1).forEach(f=>{Math.hypot(f[0]-u[0],f[1]-u[1])<=o+1e-6&&i.lines.push([u,f])})),LE(e,i.place,t).forEach(({u,v:h,kind:f,plant:d,size:p,room:g,facing:y})=>{f!=="reeds"&&a(u,h)<0||i.hasRoom(u,h,g)&&(jx(i,d,f,u,h,p,y),i.grown.push([u,h,f]))})},"woods"),Kp=l((i,e,t)=>{let n=new qp(t,e),{centre:r,radius:s}=e;if([i.road,i.railroad].forEach(o=>{o!==null&&Jp(o)&&(o.joins.forEach(c=>n.lines.push([r,Zp(e,c)])),o.alone&&n.lines.push([r,r]))}),i.fortress){let o=s*.62,c=[[-o,-o],[o,-o],[o,o],[-o,o]].map(([u,h])=>[r[0]+u,r[1]+h]);c.forEach((u,h)=>n.lines.push([u,c[(h+1)%4]]))}if(i.airbase){let o=s*.75;n.lines.push([[r[0]-o,r[1]+.12],[r[0]+o,r[1]+.12]])}i.irrigation!==null&&ME(n,i.irrigation),i.road!==null&&yE(n,i.road),i.railroad!==null&&bE(n,i.railroad),i.mine&&SE(n,n.claim(...Vp.mine,.1)),i.fortress&&wE(n),i.airbase&&EE(n),i.pollution&&AE(n),i.specials.forEach(([o,c],u)=>TE(n,kx(o,c),n.claim(...Vp.special(u),.1),u+1)),i.hut&&CE(n,n.claim(...Vp.hut,.13));let a=wa(i.terrain);return a!==null&&i.irrigation===null&&!i.fortress&&!i.airbase&&(a.canopy!==void 0?DE(n,i,a):PE(n,i)),{taken:n.taken,lines:n.lines,grown:n.grown}},"layOverlay"),NE=l((i,e,t)=>{let n=Yp();return t.forEach(({overlay:r,place:s})=>Kp(r,s,n)),jp(i,e,n)},"overlayMesh"),jp=l((i,e,t)=>{let n=new Float32Array(t.positions);for(let r=0;r<n.length;r+=3)n[r]=n[r]-i,n[r+2]=n[r+2]-e;return{u:i,v:e,positions:n,normals:new Float32Array(t.normals),colours:new Float32Array(t.colours)}},"meshOf"),Qx=NE;var Fr,cn,hi,$o,di,kn,vn,Ta,Zo,vs,Jo,Ko,bt,e_,tm,nm,hh,dh,t_,Yo,im=class im{constructor(e){ee(this,bt);ee(this,Fr);ee(this,cn);ee(this,hi,[]);ee(this,$o);ee(this,di);ee(this,kn,new Set);ee(this,vn,null);ee(this,Ta,null);ee(this,Zo,new Map);ee(this,vs,[0,0]);ee(this,Jo);ee(this,Ko);H(this,di,e);let t=e.topology(),n=e.width(),r=e.height(),s=t.wrapsY();this.layout=Px({width:n,height:r,topologyId:e.topologyId(),wrapsY:s}),H(this,Fr,Lx({layout:this.layout,source:{width:n,height:r,wrapsY:s,terrainAt:l((d,p)=>e.get(d,p).terrain._,"terrainAt"),waterAt:l((d,p)=>e.get(d,p).isWater,"waterAt"),neighbours:l((d,p)=>t.directions().map(g=>t.neighbour(d,p,g)).filter(g=>g!==null),"neighbours")}})),H(this,cn,Dx(this.layout,r));let[a,o]=this.layout.centre(0,0),c=Math.max(...this.layout.outline(0,0).map(([d,p])=>Math.hypot(d-a,p-o))),u=Math.max(...t.directions().map(d=>t.offset(d,0,0)).map(([d,p])=>{let[g,y]=this.layout.centre(d,p);return Math.hypot(g-a,y-o)}));H(this,$o,1.2+c+nr*Math.SQRT2+Math.max((Li.reach-1)*u,u/2+nr*Math.SQRT2+lh));let h=this.layout.outline(0,0),f=h.flatMap(([d,p],g)=>{let[y,x]=h[(g+1)%h.length],_=Math.hypot(y-d,x-p);return _===0?[]:[{away:Math.abs((y-d)*(o-p)-(x-p)*(a-d))/_,normal:[(x-p)/_,(d-y)/_]}]});H(this,Jo,Math.min(...f.map(({away:d})=>d))),H(this,Ko,Math.min(...f.map(({away:d,normal:[p,g]})=>d/(Math.abs(p)+Math.abs(g)))))}surfaceAt(e,t,n=new Map){let{spacingU:r,spacingV:s}=m(this,cn),a=Math.floor(e/r),o=Math.floor(t/s),c=e/r-a,u=t/s-o,h=l((y,x)=>{let _=`${y},${x}`,S=n.get(_);return S===void 0&&(S=m(this,Fr).height(y*r,x*s),n.set(_,S)),S},"at"),f=h(a,o),d=h(a+1,o),p=h(a,o+1);if(c+u<=1)return f+(d-f)*c+(p-f)*u;let g=h(a+1,o+1);return g+(p-g)*(1-c)+(d-g)*(1-u)}ground(){let{chunksU:e,chunksV:t,stepsU:n,stepsV:r,spacingU:s,spacingV:a}=m(this,cn);return{columns:e*n,rows:t*r,spacingU:s,spacingV:a,wrapsV:this.layout.period().v!==null}}extentV(){return m(this,cn).chunksV*m(this,cn).stepsV*m(this,cn).spacingV}heightAt(e,t){return m(this,Fr).height(e,t)}queueAll(e,t){let{chunksU:n,chunksV:r}=m(this,cn),s=[];for(let a=0;a<r;a++)for(let o=0;o<n;o++)s.push(`${o},${a}`);H(this,hi,G(this,bt,Yo).call(this,s,e,t)),H(this,vs,[e,t]),s.forEach(a=>m(this,kn).add(a))}changed(e,t,n,r=!1){if(e.length===0&&!r)return[];H(this,vs,[t,n]),(e.length===0?[...G(this,bt,dh).call(this).values()].flat():G(this,bt,t_).call(this,e)).forEach(([o,c])=>{let u=G(this,bt,hh).call(this,o,c);if(m(this,kn).has(u)||m(this,vn)?.key===u&&!G(this,bt,e_).call(this,m(this,vn),o,c))return;JSON.stringify(G(this,bt,tm).call(this,o,c))!==(m(this,Zo).get(`${o},${c}`)??"null")&&m(this,kn).add(u)});let s=m(this,Fr).refresh(r?void 0:e);if(s.length===0)return s;let a=Ux(m(this,cn),this.layout,s,m(this,$o)).map(([o,c])=>`${o},${c}`);return H(this,hi,G(this,bt,Yo).call(this,[...new Set([...m(this,hi),...a])],t,n)),s}refocus(e,t){H(this,hi,G(this,bt,Yo).call(this,m(this,hi),e,t)),H(this,vs,[e,t])}pending(){return m(this,hi).length}overlaysPending(){return m(this,kn).size+(m(this,vn)===null||m(this,kn).has(m(this,vn).key)?0:1)}build(e,t){let n=performance.now(),r=l(()=>t!==null&&performance.now()-n>=t,"spent");for(;m(this,hi).length>0;){if(r())return;let s=m(this,hi).shift(),[a,o]=s.split(",").map(Number);e.setChunk(a,o,Nx(m(this,cn),m(this,Fr),a,o)),m(this,kn).add(s)}for(;m(this,kn).size>0||m(this,vn)!==null;){if(m(this,vn)!==null&&m(this,kn).has(m(this,vn).key)&&H(this,vn,null),m(this,vn)===null){let d=G(this,bt,Yo).call(this,[...m(this,kn)],...m(this,vs))[0];m(this,kn).delete(d),H(this,vn,{key:d,squares:G(this,bt,dh).call(this).get(d)??[],done:0,laid:Yp(),heights:new Map})}let s=m(this,vn);for(;s.done<s.squares.length;){let[d,p]=s.squares[s.done],g=G(this,bt,nm).call(this,d,p,s.heights);if(s.done++,g!==null&&Kp(g.overlay,g.place,s.laid),s.done<s.squares.length&&r())return}let[a,o]=s.key.split(",").map(Number),{stepsU:c,stepsV:u,spacingU:h,spacingV:f}=m(this,cn);H(this,vn,null),e.setOverlay(a,o,s.laid.positions.length===0?null:jp(a*c*h,o*u*f,s.laid))}}overlayOf(e,t){let{stepsU:n,stepsV:r,spacingU:s,spacingV:a}=m(this,cn),o=new Map,c=(G(this,bt,dh).call(this).get(`${e},${t}`)??[]).flatMap(([u,h])=>G(this,bt,nm).call(this,u,h,o)??[]);return c.length===0?null:Qx(e*n*s,t*r*a,c)}overlayKeyOf(e,t){return G(this,bt,hh).call(this,e,t)}};Fr=new WeakMap,cn=new WeakMap,hi=new WeakMap,$o=new WeakMap,di=new WeakMap,kn=new WeakMap,vn=new WeakMap,Ta=new WeakMap,Zo=new WeakMap,vs=new WeakMap,Jo=new WeakMap,Ko=new WeakMap,bt=new WeakSet,e_=l(function(e,t,n){return e.squares.slice(0,e.done).some(([r,s])=>r===t&&s===n)},"#reached"),tm=l(function(e,t){let n=m(this,di).topology();return Bx(m(this,di).get(e,t),n.directions().flatMap(r=>{let s=n.neighbour(e,t,r);return s===null?[]:[{offset:n.offset(r,e,t),tile:m(this,di).get(s[0],s[1])}]}))},"#overlayAt"),nm=l(function(e,t,n){let r=G(this,bt,tm).call(this,e,t);if(m(this,Zo).set(`${e},${t}`,JSON.stringify(r)),r===null)return null;let[s,a]=this.layout.centre(e,t),o=m(this,di).topology();return{overlay:r,place:{centre:[s,a],toward:l(([c,u])=>this.layout.centre(e+c,t+u),"toward"),radius:m(this,Jo),inner:m(this,Ko),heightAt:l((c,u)=>this.surfaceAt(c,u,n),"heightAt"),seed:Math.imul(e,73856093)^Math.imul(t,19349663),latitude:Math.min(1,Math.abs(2*a/this.extentV()-1)),outline:this.layout.outline(e,t),owns:l((c,u)=>{let[h,f]=this.layout.tileAt(c,u);return h===e&&f===t},"owns"),around:o.directions().filter(c=>o.neighbour(e,t,c)!==null).map(c=>o.offset(c,e,t)),period:this.layout.period()}}},"#square"),hh=l(function(e,t){let{chunksU:n,chunksV:r,stepsU:s,stepsV:a,spacingU:o,spacingV:c}=m(this,cn),[u,h]=this.layout.centre(e,t),f=Math.floor(u/(s*o)),d=Math.floor(h/(a*c));return`${Math.min(n-1,Math.max(0,f))},${Math.min(r-1,Math.max(0,d))}`},"#chunkOf"),dh=l(function(){if(m(this,Ta)===null){let e=new Map;for(let t=0;t<m(this,di).height();t++)for(let n=0;n<m(this,di).width();n++){let r=G(this,bt,hh).call(this,n,t);e.set(r,[...e.get(r)??[],[n,t]])}H(this,Ta,e)}return m(this,Ta)},"#chunksOfSquares"),t_=l(function(e){let t=m(this,di).topology(),n=new Map;return e.forEach(([r,s])=>[[r,s],...t.directions().map(a=>t.neighbour(r,s,a)).filter(a=>a!==null)].forEach(a=>n.set(a.join(),a))),[...n.values()]},"#besides"),Yo=l(function(e,t,n){let{stepsU:r,stepsV:s,spacingU:a,spacingV:o}=m(this,cn),c=r*a,u=s*o,{u:h,v:f}=this.layout.period(),d=l((g,y)=>Math.abs(y===null?g:g-y*Math.round(g/y)),"round"),p=l(g=>{let[y,x]=g.split(",").map(Number);return Math.hypot(d((y+.5)*c-t,h),d((x+.5)*u-n,f))},"distance");return[...e].sort((g,y)=>p(g)-p(y))},"#nearestFirst"),l(im,"Land");var em=im,n_=em;var UE=l(()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches===!0,"prefersReducedMotion"),Ca=UE;var i_=l((i,e,t=100)=>{let n=i.filter(({time:o})=>e-o<=t);if(n.length<2)return{x:0,y:0};let r=n[0],s=n[n.length-1],a=s.time-r.time;return a<=0?{x:0,y:0}:{x:(s.x-r.x)/a,y:(s.y-r.y)/a}},"releaseVelocity");var FE=8,OE=.92,BE=.02,r_=3,zE=50,kE=8,GE=10,s_=250,jo,Qo,Ra,Pa,ys,Or,rm=class rm{constructor({pointerId:e,clientX:t,clientY:n,timeStamp:r}){ee(this,jo);ee(this,Qo);ee(this,Ra);ee(this,Pa);ee(this,ys,!1);ee(this,Or);this.pointerId=e,H(this,jo,t),H(this,Qo,n),H(this,Ra,t),H(this,Pa,n),H(this,Or,[{x:t,y:n,time:r}])}dragging(){return m(this,ys)}move({pointerId:e,clientX:t,clientY:n,timeStamp:r}){if(e!==this.pointerId||!m(this,ys)&&Math.hypot(t-m(this,jo),n-m(this,Qo))<FE)return null;let s=!m(this,ys),a=m(this,Ra)-t,o=m(this,Pa)-n;return H(this,ys,!0),H(this,Ra,t),H(this,Pa,n),m(this,Or).push({x:t,y:n,time:r}),m(this,Or).length>20&&m(this,Or).shift(),{dx:a,dy:o,started:s}}releaseVelocity(e){return i_(m(this,Or),e)}};jo=new WeakMap,Qo=new WeakMap,Ra=new WeakMap,Pa=new WeakMap,ys=new WeakMap,Or=new WeakMap,l(rm,"Press");var fh=rm,Ui,el,sm=class sm{constructor(e){ee(this,Ui,null);ee(this,el);H(this,el,e)}start(e){this.stop();let t=Math.hypot(e.x,e.y),n=t>r_?r_/t:1,r=e.x*n,s=e.y*n,a=null,o=l(c=>{let u=a===null?16:Math.min(c-a,64);if(a=c,Math.hypot(r,s)<BE){H(this,Ui,null);return}m(this,el).call(this,-r*u,-s*u);let h=Math.pow(OE,u/16);r*=h,s*=h,H(this,Ui,window.requestAnimationFrame(o))},"step");H(this,Ui,window.requestAnimationFrame(o))}gliding(){return m(this,Ui)!==null}stop(){m(this,Ui)!==null&&(window.cancelAnimationFrame(m(this,Ui)),H(this,Ui,null))}};Ui=new WeakMap,el=new WeakMap,l(sm,"Glide");var ph=sm,bs,tl,nl,Ia,am=class am{constructor(){ee(this,bs,0);ee(this,tl,0);ee(this,nl,-1/0);ee(this,Ia,0)}turned(e,t){let n=e.deltaMode===0,r=e.deltaY;if(r===0||e.ctrlKey&&t!==null&&e.timeStamp-t<=s_)return 0;let s=Math.sign(r),a=e.timeStamp-m(this,nl)>s_||s!==m(this,tl);if(H(this,nl,e.timeStamp),H(this,tl,s),a&&(H(this,bs,0),H(this,Ia,0)),n&&!e.ctrlKey&&m(this,Ia)>=GE)return 0;if(!a&&n){if(H(this,bs,m(this,bs)+r),Math.abs(m(this,bs))<(e.ctrlKey?kE:zE))return 0;H(this,bs,0)}return n&&!e.ctrlKey&&H(this,Ia,m(this,Ia)+1),r<0?1:-1}};bs=new WeakMap,tl=new WeakMap,nl=new WeakMap,Ia=new WeakMap,l(am,"WheelTurn");var mh=am;var VE=350,HE=.006,a_=.004,Fi,Kt,yn,La,Oi,fi,vh,Jn,Kn,Br,Da,Gn,zr,Re,Zn,gh,xh,o_,lm,ir,cm,l_,rr,c_,u_,h_,d_,il,f_,p_,m_,_h,um=class um{constructor(e,t,n=null){ee(this,Re);ee(this,Fi);ee(this,Kt);ee(this,yn,null);ee(this,La,[0,0]);ee(this,Oi,null);ee(this,fi);ee(this,vh,new mh);ee(this,Jn,new Map);ee(this,Kn,null);ee(this,Br,null);ee(this,Da,[]);ee(this,Gn);ee(this,zr,null);H(this,Fi,e),H(this,Kt,t),H(this,Gn,n),H(this,fi,new ph((r,s)=>{let[a,o]=G(this,Re,o_).call(this);G(this,Re,cm).call(this,[a,o],[a-r,o-s])})),G(this,Re,Zn).call(this,"pointerdown",r=>G(this,Re,l_).call(this,r)),G(this,Re,Zn).call(this,"pointermove",r=>G(this,Re,u_).call(this,r)),G(this,Re,Zn).call(this,"pointerup",r=>G(this,Re,h_).call(this,r)),G(this,Re,Zn).call(this,"pointercancel",r=>G(this,Re,d_).call(this,r)),G(this,Re,Zn).call(this,"wheel",r=>G(this,Re,p_).call(this,r),{passive:!1}),G(this,Re,Zn).call(this,"gesturestart",r=>G(this,Re,_h).call(this,r,"start"),{passive:!1}),G(this,Re,Zn).call(this,"gesturechange",r=>G(this,Re,_h).call(this,r,"change"),{passive:!1}),G(this,Re,Zn).call(this,"gestureend",r=>G(this,Re,_h).call(this,r,"end"),{passive:!1}),G(this,Re,Zn).call(this,"contextmenu",r=>G(this,Re,c_).call(this,r)),G(this,Re,Zn).call(this,"pointerleave",()=>m(this,Gn)?.hover(null)),G(this,Re,Zn).call(this,"touchstart",r=>r.preventDefault(),{passive:!1})}dragging(){return m(this,yn)?.dragging()===!0||m(this,Oi)!==null}moving(){return this.dragging()||m(this,Kn)!==null||m(this,fi).gliding()}dispose(){m(this,fi).stop(),G(this,Re,rr).call(this),m(this,Da).forEach(([e,t,n])=>m(this,Fi).removeEventListener(e,t,n)),H(this,Da,[])}};Fi=new WeakMap,Kt=new WeakMap,yn=new WeakMap,La=new WeakMap,Oi=new WeakMap,fi=new WeakMap,vh=new WeakMap,Jn=new WeakMap,Kn=new WeakMap,Br=new WeakMap,Da=new WeakMap,Gn=new WeakMap,zr=new WeakMap,Re=new WeakSet,Zn=l(function(e,t,n){m(this,Fi).addEventListener(e,t,n),m(this,Da).push([e,t,n])},"#listen"),gh=l(function(){return{width:m(this,Fi).clientWidth||1,height:m(this,Fi).clientHeight||1}},"#box"),xh=l(function([e,t]){let{width:n,height:r}=G(this,Re,gh).call(this);return[e/n*2-1,1-t/r*2]},"#screen"),o_=l(function(){let{width:e,height:t}=G(this,Re,gh).call(this);return[e/2,t/2]},"#middle"),lm=l(function(){let{width:e,height:t}=G(this,Re,gh).call(this);return e/t},"#aspect"),ir=l(function(e){let t=m(this,Fi).getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]},"#at"),cm=l(function(e,t){m(this,Kt).setOrbit(ux(m(this,Kt).orbit(),m(this,Kt).lookHeight(),G(this,Re,xh).call(this,e),G(this,Re,xh).call(this,t),G(this,Re,lm).call(this)))},"#pan"),l_=l(function(e){if(m(this,fi).stop(),m(this,Gn)?.hover(null),e.pointerType==="touch"&&(m(this,Jn).set(e.pointerId,G(this,Re,ir).call(this,e)),m(this,Jn).size===2)){H(this,yn,null),G(this,Re,rr).call(this),H(this,Kn,G(this,Re,il).call(this));return}if(e.isPrimary&&e.button!==2){if(m(this,Fi).setPointerCapture?.(e.pointerId),e.button===1||e.button===0&&e.altKey){e.preventDefault(),H(this,Oi,{pointerId:e.pointerId,x:e.clientX,y:e.clientY});return}if(e.button===0){let t=new fh(e),[n,r]=G(this,Re,ir).call(this,e),{clientX:s,clientY:a}=e;H(this,yn,t),H(this,La,[n,r]),G(this,Re,rr).call(this),H(this,zr,window.setTimeout(()=>{H(this,zr,null),m(this,yn)===t&&!t.dragging()&&m(this,Gn)?.menu(n,r,s,a,!0)===!0&&H(this,yn,null)},VE))}}},"#down"),rr=l(function(){m(this,zr)!==null&&(window.clearTimeout(m(this,zr)),H(this,zr,null))},"#stopHold"),c_=l(function(e){if(m(this,Gn)===null||!m(this,Gn).menuOnRightClick()||(e.preventDefault(),m(this,Gn).menuOpen()))return;let[t,n]=G(this,Re,ir).call(this,e);m(this,Gn).menu(t,n,e.clientX,e.clientY,!1)&&(G(this,Re,rr).call(this),H(this,yn,null))},"#rightClick"),u_=l(function(e){if(m(this,Jn).has(e.pointerId)&&(m(this,Jn).set(e.pointerId,G(this,Re,ir).call(this,e)),m(this,Kn)!==null)){G(this,Re,f_).call(this);return}let t=m(this,Oi);if(t!==null&&t.pointerId===e.pointerId){let s=m(this,Kt).orbit();m(this,Kt).setOrbit(ms({...s,yaw:s.yaw-(e.clientX-t.x)*HE,pitch:s.pitch+(e.clientY-t.y)*a_})),t.x=e.clientX,t.y=e.clientY;return}let n=m(this,yn);if(n===null){if(e.pointerType==="mouse"&&e.buttons===0&&!m(this,fi).gliding()){let[s,a]=G(this,Re,ir).call(this,e);m(this,Gn)?.hover({x:s,y:a,clientX:e.clientX,clientY:e.clientY})}return}if(n.move(e)===null)return;G(this,Re,rr).call(this);let r=G(this,Re,ir).call(this,e);G(this,Re,cm).call(this,m(this,La),r),H(this,La,r)},"#move"),h_=l(function(e){if(m(this,Jn).delete(e.pointerId),m(this,Kn)!==null){H(this,Kn,m(this,Jn).size<2?null:G(this,Re,il).call(this));return}if(m(this,Oi)?.pointerId===e.pointerId){H(this,Oi,null);return}let t=m(this,yn);if(!(t===null||t.pointerId!==e.pointerId)){if(H(this,yn,null),G(this,Re,rr).call(this),!t.dragging()){let[n,r]=G(this,Re,ir).call(this,e);m(this,Gn)?.click(n,r,e.clientX,e.clientY);return}Ca()||m(this,fi).start(t.releaseVelocity(e.timeStamp))}},"#up"),d_=l(function(e){m(this,Jn).delete(e.pointerId),m(this,Kn)!==null&&H(this,Kn,m(this,Jn).size<2?null:G(this,Re,il).call(this)),m(this,yn)?.pointerId===e.pointerId&&(H(this,yn,null),G(this,Re,rr).call(this)),m(this,Oi)?.pointerId===e.pointerId&&H(this,Oi,null)},"#cancel"),il=l(function(){let[e,t]=[...m(this,Jn).values()];return e===void 0||t===void 0?null:{distance:Math.max(1,Math.hypot(t[0]-e[0],t[1]-e[1])),angle:Math.atan2(t[1]-e[1],t[0]-e[0]),middleY:(e[1]+t[1])/2,orbit:m(this,Kt).orbit()}},"#measurePair"),f_=l(function(){let e=m(this,Kn),t=G(this,Re,il).call(this);e===null||t===null||m(this,Kt).setOrbit(ms({...e.orbit,distance:e.orbit.distance*(e.distance/t.distance),yaw:e.orbit.yaw-(t.angle-e.angle),pitch:e.orbit.pitch+(t.middleY-e.middleY)*a_}))},"#twoFingers"),p_=l(function(e){e.preventDefault();let t=m(this,vh).turned(e,m(this,Br)?.at??null);t!==0&&(m(this,fi).stop(),G(this,Re,m_).call(this,t,G(this,Re,ir).call(this,e)))},"#wheelTurned"),m_=l(function(e,t){let n=m(this,Kt).orbit(),r=ba(n,e),s=ya(n,m(this,Kt).lookHeight(),G(this,Re,xh).call(this,t),G(this,Re,lm).call(this));if(s===null||r.distance===n.distance){m(this,Kt).setOrbit(r);return}let a=1-r.distance/n.distance;m(this,Kt).setOrbit({...r,focus:[n.focus[0]+(s[0]-n.focus[0])*a,n.focus[1]+(s[1]-n.focus[1])*a]})},"#zoomAbout"),_h=l(function(e,t){if(e.preventDefault(),m(this,Kn)!==null){H(this,Br,null);return}if(t==="end"){H(this,Br,null);return}if(t==="start"){m(this,fi).stop(),H(this,yn,null),G(this,Re,rr).call(this),H(this,Br,{orbit:m(this,Kt).orbit(),at:e.timeStamp});return}let n=m(this,Br);n!==null&&(n.at=e.timeStamp,m(this,Kt).setOrbit(ms({...n.orbit,distance:n.orbit.distance/Math.max(.05,e.scale),yaw:n.orbit.yaw-e.rotation*Math.PI/180})))},"#safari"),l(um,"CameraInput");var om=um,g_=om;var WE=["#9a9a9a","#4a4a4a"],rl=l(i=>{let e=i.civilization?.attributes?.find(t=>t.name==="colors")?.value;return!Array.isArray(e)||typeof e[0]!="string"?WE:[e[0],typeof e[1]=="string"?e[1]:e[0]]},"coloursOf"),hm=l((i,e)=>i.find(t=>t.id===e)??[...i].sort((t,n)=>(n.defence?.value??0)-(t.defence?.value??0))[0]??null,"unitOnTop"),XE=l(i=>{let{current:e,max:t}=i.hitPoints??{current:0,max:0};return t>0&&e<t?Math.max(0,e/t):null},"healthOf"),qE=l((i,e,t,n={},r=()=>0,s=1)=>{let a=i.units??[],o=hm(a,e),c=o!==null&&o.id===e,u=t&&i.city?{name:n.cityName?.(i.city)??i.city.name,size:i.city.growth?.size??1,colours:rl(i.city.player),walled:i.city.walled===!0,disorder:i.city.civilDisorderDeclared===!0}:null,h=o!==null&&(t||c)?{id:o.id,type:o._,kinds:o.__??[],colours:rl(o.player),count:a.length,active:c,busy:o.busy!==null&&o.busy!==void 0,fortified:(o.improvements??[]).some(({_:f})=>f==="Fortified"),veteran:(o.improvements??[]).some(({_:f})=>f==="Veteran"),health:XE(o),status:(o.busy?n.unitStatus?.(o):null)||null,facing:r(o),size:s}:null;return u===null&&h===null?null:{city:u,unit:h}},"markerFor"),x_=qE;var YE=1,$E=.04,ZE=12,JE=l((i,e,t,n,r,{water:s=0,ceiling:a=YE}={})=>{let{from:o,direction:c}=Pp(i,e,t,n),[u,h,f]=o,[d,p,g]=c;if(p>-1e-6)return null;let y=l(v=>[u+d*v,h+p*v,f+g*v],"at"),x=l(v=>{let[E,I,P]=y(v);return I-Math.max(s,r(E,P))},"above"),_=Math.max(0,(h-a)/-p),S=(h-s)/-p,A=$E/Math.max(1e-6,Math.hypot(d,g)),w=_;for(let v=_;;v=Math.min(S,v+A)){if(x(v)<=0){let E=w,I=v;for(let k=0;k<ZE;k++){let J=(E+I)/2;x(J)>0?E=J:I=J}let[P,,F]=y(I);return[P,F]}if(v>=S)break;w=v}let[R,,C]=y(S);return[R,C]},"pickGround"),__=JE;var yh=4,kr,sl,Ms,Ss,wn,Na,Gr,sr,al,ol,ll,pi,bh,v_,fm,pm=class pm{constructor(e,t,n,r,s){ee(this,pi);ee(this,kr);ee(this,sl);ee(this,Ms);ee(this,Ss);ee(this,wn);ee(this,Na);ee(this,Gr);ee(this,sr);ee(this,al);ee(this,ol);ee(this,ll,l(e=>{let t=m(this,kr).getBoundingClientRect(),n=t.width>0?(e.clientX-t.left)/t.width:0,r=t.height>0?(e.clientY-t.top)/t.height:0;m(this,ol).call(this,n*m(this,wn),r*m(this,Na))},"#click"));H(this,kr,e),H(this,Ms,t),H(this,Ss,n),H(this,wn,t.period().u),H(this,Na,r),H(this,ol,s),H(this,sr,document.createElement("canvas"));let{v:a}=t.period();H(this,Gr,a),H(this,al,[[0,0],[-m(this,wn),0],...a===null?[]:[[0,-a],[-m(this,wn),-a]]]);let o=Math.max(1,Math.round(m(this,wn)*yh)),c=Math.max(1,Math.round(m(this,Na)*yh));[e,m(this,sr)].forEach(u=>{u.width=o,u.height=c}),H(this,sl,e.getContext("2d")),e.addEventListener("click",m(this,ll))}dispose(){m(this,kr).removeEventListener("click",m(this,ll))}redraw(){let e=m(this,sr).getContext("2d");if(e===null)return;let t=m(this,Ss).width(),n=m(this,Ss).height(),r=[];e.fillStyle="#000000",e.fillRect(0,0,m(this,sr).width,m(this,sr).height);for(let s=0;s<n;s++)for(let a=0;a<t;a++){let o=m(this,Ss).get(a,s),c=o.terrain?._??"Unknown";if(c==="Unknown")continue;e.fillStyle=ls(c).colour,m(this,al).forEach(([f,d])=>{G(this,pi,v_).call(this,e,a,s,f,d),e.fill()});let[u,h]=m(this,Ms).centre(a,s);if(o.city)r.push([u,h,rl(o.city.player)[0],2.2]);else if((o.units??[]).length>0){let f=hm(o.units,null);f!==null&&r.push([u,h,rl(f.player)[0],1.4])}}r.forEach(([s,a,o,c])=>G(this,pi,fm).call(this,s,a).forEach(([u,h])=>{e.fillStyle="#000000",e.fillRect(u-c-.5,h-c-.5,c*2+1,c*2+1),e.fillStyle=o,e.fillRect(u-c,h-c,c*2,c*2)}))}show(e,t){let n=m(this,sl);if(n===null)return;if(n.clearRect(0,0,m(this,kr).width,m(this,kr).height),n.drawImage(m(this,sr),0,0),t!==null){let[h,f]=m(this,Ms).centre(t.x,t.y);n.fillStyle="#ffffff",G(this,pi,fm).call(this,h,f).forEach(([d,p])=>n.fillRect(d-2,p-2,4,4))}if(e===null||e.length<3)return;n.strokeStyle="#ffffff",n.lineWidth=1;let r=m(this,Gr),s=Math.min(...e.map(([h])=>h)),a=Math.min(...e.map(([,h])=>h)),o=-m(this,wn)*Math.floor(s/m(this,wn)),c=r===null?0:-r*Math.floor(a/r);(r===null?[0]:[-r,0,r]).forEach(h=>[-m(this,wn),0,m(this,wn)].forEach(f=>{n.beginPath(),e.forEach(([d,p],g)=>{let[y,x]=G(this,pi,bh).call(this,d+o+f,p+c+h);g===0?n.moveTo(y,x):n.lineTo(y,x)}),n.closePath(),n.stroke()}))}};kr=new WeakMap,sl=new WeakMap,Ms=new WeakMap,Ss=new WeakMap,wn=new WeakMap,Na=new WeakMap,Gr=new WeakMap,sr=new WeakMap,al=new WeakMap,ol=new WeakMap,ll=new WeakMap,pi=new WeakSet,bh=l(function(e,t){return[e*yh,t*yh]},"#px"),v_=l(function(e,t,n,r=0,s=0){e.beginPath(),m(this,Ms).outline(t,n).forEach(([a,o],c)=>{let[u,h]=G(this,pi,bh).call(this,a+r,o+s);c===0?e.moveTo(u,h):e.lineTo(u,h)}),e.closePath()},"#outline"),fm=l(function(e,t){return(m(this,Gr)===null?[0]:[-m(this,Gr),0,m(this,Gr)]).flatMap(r=>[-m(this,wn),0,m(this,wn)].map(s=>G(this,pi,bh).call(this,e+s,t+r)))},"#everywhere"),l(pm,"Minimap3D");var dm=pm,y_=dm;var KE=l(i=>Object.entries(i.reduce((e,t)=>(e[t._]=(e[t._]??0)+t.value,e),{})).map(([e,t])=>({_:e,value:Math.floor(t)})).filter(({value:e})=>e>0),"netTileYields"),b_=l(i=>{let e=KE(i).sort((n,r)=>n._.charCodeAt(0)-r._.charCodeAt(0)).flatMap(({_:n,value:r})=>Array.from({length:r},()=>n)),t=Math.min(6,Math.max(2,Math.ceil(e.length/2)));return{columns:t,icons:e.slice(0,t*2).map((n,r)=>({_:n,column:r%t,row:Math.floor(r/t)}))}},"tileYieldGrid");var M_=l((i,e)=>(i.squareYieldsApplied?void 0:e?.squareYields?.find(({x:t,y:n})=>t===i.x&&n===i.y)?.yields)??i.yields??[],"squareYields"),S_=l(i=>i.city??i.workedBy??null,"squareCity");var jE=.9,QE=l(i=>{let{columns:e,icons:t}=b_(i),n=Math.min(e,t.length),r=Math.ceil(t.length/e);return{columns:e,slots:t.map(({_:s,column:a,row:o})=>({_:s,right:a-(n-1)/2,up:(r-1)/2-o}))}},"yieldSlots"),eA=l((i,e)=>jE*e/Math.hypot(i,2),"yieldIconSize"),w_=l((i,e)=>{let[t,n]=i.centre(0,0);return Math.min(...e.edgeDirections().map(r=>{let[s,a]=e.offset(r,0,0),[o,c]=i.centre(s,a);return Math.hypot(o-t,c-n)}))},"innerOf"),E_=l(({at:i,yields:e},t)=>{let{columns:n,slots:r}=QE(e);return r.length===0?null:{at:i,size:eA(n,t),slots:r}},"laidYields"),A_=l(i=>{let e=[...i],t=e.reduce((a,{slots:o})=>a+o.length,0),n={count:t,anchors:new Float32Array(t*3),slots:new Float32Array(t*2),sizes:new Float32Array(t),cells:new Float32Array(t),names:[]},r=new Map,s=0;return e.forEach(({at:a,size:o,slots:c})=>{c.forEach(({_:u,right:h,up:f})=>{let d=r.get(u);d===void 0&&(d=n.names.push(u)-1,r.set(u,d)),n.anchors[s*3]=a[0],n.anchors[s*3+1]=a[1],n.anchors[s*3+2]=a[2],n.slots[s*2]=h,n.slots[s*2+1]=f,n.sizes[s]=o,n.cells[s]=d,s++})}),n},"yieldMesh");var tA=10,nA=4e3,T_=l(i=>i-Math.PI*2*Math.round(i/(Math.PI*2)),"shortTurn"),iA=350,rA=500,sA=.25,aA=400,Vt,fl,pl,Qe,jt,Es,ml,gl,ot,Mt,En,Ua,xl,As,Hr,Fa,_l,vl,Vn,yl,ar,mi,bl,Bi,Wr,Ml,Hn,Oa,Ba,or,lr,za,Xr,Ts,ka,cr,Sl,ur,Cs,wl,Rs,zi,Ps,Is,El,Al,Ga,Tl,Va,Cl,Ha,Wa,Ls,de,gm,C_,Mh,R_,cl,P_,I_,L_,xm,Sh,D_,N_,ul,Vr,hl,U_,F_,_m,ws,O_,B_,z_,vm,dl,ym,k_,G_,bm,un,V_,H_,Mm,Sm=class Sm{constructor(e,t=wx){ee(this,de);ee(this,Vt);ee(this,fl);ee(this,pl,[]);ee(this,Qe);ee(this,jt);ee(this,Es,null);ee(this,ml,0);ee(this,gl,"");ee(this,ot);ee(this,Mt,null);ee(this,En,null);ee(this,Ua);ee(this,xl);ee(this,As);ee(this,Hr,null);ee(this,Fa,null);ee(this,_l);ee(this,vl,!1);ee(this,Vn);ee(this,yl);ee(this,ar,new Map);ee(this,mi,new Map);ee(this,bl);ee(this,Bi,null);ee(this,Wr,null);ee(this,Ml);ee(this,Hn,l(()=>{let e=m(this,Wr);e!==null&&(e.timer!==null&&window.clearTimeout(e.timer),H(this,Wr,null),document.removeEventListener("keydown",m(this,Hn),!0),e.open&&m(this,Vn).endTooltip(m(this,Vt)))},"#endHover"));ee(this,Oa,null);ee(this,Ba,!0);ee(this,or,new Map);ee(this,lr,null);ee(this,za,new Map);ee(this,Xr,new Map);ee(this,Ts,[]);ee(this,ka,0);ee(this,cr,null);ee(this,Sl,null);ee(this,ur,!0);ee(this,Cs);ee(this,wl,l(()=>{},"#stopUnitSize"));ee(this,Rs,!1);ee(this,zi,!0);ee(this,Ps,!1);ee(this,Is,new Map);ee(this,El);ee(this,Al,l(()=>{},"#stopArtChanged"));ee(this,Ga,!1);ee(this,Tl);ee(this,Va);ee(this,Cl,"");ee(this,Ha,l(()=>G(this,de,Mm).call(this),"#resizeHandler"));ee(this,Wa,null);ee(this,Ls,!1);H(this,Vt,e.mapCanvas),H(this,fl,e.coveredBy),H(this,Tl,e.art),H(this,yl,{cityName:e.cityName,unitStatus:e.unitStatus}),H(this,Cs,e.unitSize?.get()??1),H(this,Va,e.art.id()),this.world=e.world,H(this,Qe,new n_(e.world)),H(this,El,w_(m(this,Qe).layout,e.world.topology())),H(this,Ts,e.world.tiles()),H(this,ka,m(this,Ts).length),H(this,xl,e.cameraDistance),H(this,_l,e.lockVerticalEdges);let n=e.cameraDistance.get();H(this,ot,G(this,de,ul).call(this,{...lx(m(this,Qe).layout.centre(0,0)),...n===null?{}:{distance:n}})),H(this,As,m(this,ot).distance),this.portal=new km(e,{centre:l(()=>G(this,de,D_).call(this),"centre"),centreOn:l((r,s)=>G(this,de,N_).call(this,r,s),"centreOn"),changed:l(()=>G(this,de,un).call(this),"changed"),visible:l((r,s,a)=>G(this,de,R_).call(this,r,s,a),"visible")}),H(this,jt,t(e.mapCanvas,{period:m(this,Qe).layout.period(),ground:m(this,Qe).ground(),yieldIcon:e.yieldIcon})),e.minimapCanvas!==null&&H(this,Oa,new y_(e.minimapCanvas,m(this,Qe).layout,e.world,m(this,Qe).extentV(),(r,s)=>G(this,de,hl).call(this,{...m(this,Mt)?.to??m(this,ot),focus:[r,s]}))),e.debug&&e.mapCanvas.parentElement&&(H(this,Es,G(this,de,V_).call(this,e.mapCanvas.parentElement)),window.civMap3DView=this),m(this,Qe).queueAll(...G(this,de,Sh).call(this)),G(this,de,dl).call(this),this.portal.on("activate-unit",r=>e.activateUnit(r)),H(this,Vn,e.squares),H(this,Ml,e.playerId),H(this,bl,e.transport),H(this,Ua,new g_(e.mapCanvas,{orbit:l(()=>m(this,ot),"orbit"),lookHeight:l(()=>m(this,En)??0,"lookHeight"),setOrbit:l(r=>this.setOrbit(r),"setOrbit")},{click:l((r,s)=>G(this,de,P_).call(this,r,s),"click"),menu:l((r,s,a,o,c)=>G(this,de,I_).call(this,r,s,a,o,c),"menu"),menuOnRightClick:l(()=>m(this,Vn).menuOnRightClick(),"menuOnRightClick"),menuOpen:l(()=>m(this,Vn).menuOpen(),"menuOpen"),hover:l(r=>G(this,de,L_).call(this,r),"hover")})),window.addEventListener("resize",m(this,Ha)),typeof ResizeObserver<"u"&&e.mapCanvas.parentElement&&(H(this,Wa,new ResizeObserver(m(this,Ha))),m(this,Wa).observe(e.mapCanvas.parentElement)),G(this,de,Mm).call(this),G(this,de,un).call(this),H(this,wl,e.unitSize?.onChange(()=>{let r=e.unitSize?.get()??1;r!==m(this,Cs)&&!m(this,Ls)&&(H(this,Cs,r),G(this,de,dl).call(this),G(this,de,un).call(this))})??(()=>{})),H(this,Al,e.artChanged?.(()=>{m(this,Ls)||(H(this,zi,!0),G(this,de,un).call(this))})??(()=>{}))}land(){return m(this,Qe)}orbit(){return m(this,ot)}moving(){return m(this,Mt)!==null||m(this,Ua).moving()}setOrbit(e){m(this,Hn).call(this),H(this,Mt,null),H(this,ot,G(this,de,ul).call(this,e)),G(this,de,un).call(this)}activeUnit(){return{unit:m(this,cr),pendingTile:m(this,Sl)}}centre(e){this.portal.setCenter(e.x,e.y)}turnBy(e){let t=m(this,Mt)?.to??m(this,ot);G(this,de,hl).call(this,{...t,yaw:t.yaw+e*Cp},G(this,de,gm).call(this)+e*Cp)}heading(){return{turn:(m(this,Mt)?.to??m(this,ot)).yaw,directions:Gm(m(this,Qe).layout,this.world.topology())}}faceNorth(){G(this,de,hl).call(this,{...m(this,Mt)?.to??m(this,ot),yaw:0},T_(-m(this,ot).yaw))}debugViewModes(){return[]}dispose(){G(this,de,bm).call(this,!0),H(this,Ls,!0),m(this,wl).call(this),m(this,Al).call(this),m(this,Hn).call(this),m(this,Ua).dispose(),m(this,Oa)?.dispose(),window.removeEventListener("resize",m(this,Ha)),m(this,Wa)?.disconnect(),m(this,lr)!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(m(this,lr)),H(this,lr,null),m(this,Es)?.remove(),m(this,jt).dispose();let e=window;e.civMap3DView===this&&delete e.civMap3DView}endPicking(){let e=m(this,Bi);e!==null&&(H(this,Bi,null),m(this,Vt).classList.remove("picking-tile"),e.window?.close())}flush(){G(this,de,_m).call(this),G(this,de,un).call(this)}mapEvent(e){if(e.kind==="moved"){G(this,de,C_).call(this,e.unit.id,e.from,e.to),G(this,de,Mh).call(this,e.unit.id,e.from,e.to);return}G(this,de,Mh).call(this,e.attacker.id,e.attacker.tile,e.defender.tile),G(this,de,Mh).call(this,e.defender.id,e.defender.tile,e.attacker.tile)}measureCovered(){let e=m(this,Vt).getBoundingClientRect();H(this,pl,m(this,fl).map(t=>{let n=t.getBoundingClientRect(),r=t.parentElement?.getBoundingClientRect()??n;return{left:Math.max(n.left,r.left,e.left)-e.left,top:Math.max(n.top,r.top,e.top)-e.top,right:Math.min(n.right,r.right,e.right)-e.left,bottom:Math.min(n.bottom,r.bottom,e.bottom)-e.top}}).filter(({left:t,top:n,right:r,bottom:s})=>r>t&&s>n))}pickTile(e,t,n){this.endPicking();let r={accept:e,onPick:t,window:null};H(this,Bi,r),m(this,Vt).classList.add("picking-tile"),r.window=m(this,Vn).prompt(n,()=>{m(this,Bi)===r&&(H(this,Bi,null),m(this,Vt).classList.remove("picking-tile"))})}picking(){return m(this,Bi)!==null}queueTile(e){m(this,za).set(`${e.x},${e.y}`,e)}redrawArt(){let e=m(this,Tl).id();return e===m(this,Va)?"unchanged":(H(this,Va,e),H(this,zi,!0),"redrawn")}releaseTiles(){m(this,za).forEach((e,t)=>m(this,Xr).set(t,e)),m(this,za).clear(),m(this,Xr).size>0&&G(this,de,un).call(this)}setActiveUnit(e,t){let n=m(this,cr)?.tile;H(this,cr,e),H(this,Sl,t??null),[n,e?.tile].forEach(r=>{r&&G(this,de,ws).call(this,r.x,r.y)}),G(this,de,un).call(this)}setWaiting(e){H(this,Ga,e),e&&m(this,Hn).call(this)}showActiveUnit(e){m(this,ur)||(H(this,ur,!0),G(this,de,dl).call(this),G(this,de,un).call(this))}shown(){return{units:m(this,ur),yields:m(this,Rs),waiting:m(this,Ga)}}tilesPending(){return m(this,Xr).size}toggleUnits(){H(this,ur,!m(this,ur)),G(this,de,dl).call(this),G(this,de,un).call(this)}toggleYields(){H(this,Rs,!m(this,Rs)),H(this,zi,!0),G(this,de,un).call(this)}zoomBy(e){m(this,Hn).call(this),H(this,ot,ba(m(this,ot),e)),m(this,Mt)!==null&&(m(this,Mt).from=ba(m(this,Mt).from,e),m(this,Mt).to=ba(m(this,Mt).to,e)),G(this,de,un).call(this)}};Vt=new WeakMap,fl=new WeakMap,pl=new WeakMap,Qe=new WeakMap,jt=new WeakMap,Es=new WeakMap,ml=new WeakMap,gl=new WeakMap,ot=new WeakMap,Mt=new WeakMap,En=new WeakMap,Ua=new WeakMap,xl=new WeakMap,As=new WeakMap,Hr=new WeakMap,Fa=new WeakMap,_l=new WeakMap,vl=new WeakMap,Vn=new WeakMap,yl=new WeakMap,ar=new WeakMap,mi=new WeakMap,bl=new WeakMap,Bi=new WeakMap,Wr=new WeakMap,Ml=new WeakMap,Hn=new WeakMap,Oa=new WeakMap,Ba=new WeakMap,or=new WeakMap,lr=new WeakMap,za=new WeakMap,Xr=new WeakMap,Ts=new WeakMap,ka=new WeakMap,cr=new WeakMap,Sl=new WeakMap,ur=new WeakMap,Cs=new WeakMap,wl=new WeakMap,Rs=new WeakMap,zi=new WeakMap,Ps=new WeakMap,Is=new WeakMap,El=new WeakMap,Al=new WeakMap,Ga=new WeakMap,Tl=new WeakMap,Va=new WeakMap,Cl=new WeakMap,Ha=new WeakMap,Wa=new WeakMap,Ls=new WeakMap,de=new WeakSet,gm=l(function(){let e=m(this,Mt);return e===null?0:e.turn*(1-e.drawn)},"#turnLeft"),C_=l(function(e,t,n){let r=performance.now(),s=m(this,mi).get(e);if(m(this,mi).forEach(({until:x},_)=>{x<r&&m(this,mi).delete(_)}),typeof requestAnimationFrame!="function"||Ca())return;let[a,o]=m(this,Qe).layout.centre(t.x,t.y),[c,u]=m(this,Qe).layout.centre(n.x,n.y),{u:h,v:f}=m(this,Qe).layout.period(),d=l((x,_)=>_===null?x:x-_*Math.round(x/_),"short"),[p,g,y]=(s!==void 0&&s.until>=r?s.from:null)??m(this,jt).markerAt(`${t.x},${t.y}`,e)??[a,Math.max(0,m(this,Qe).surfaceAt(a,o)),o];m(this,mi).set(e,{from:[c+d(p-c,h),g,u+d(y-u,f)],to:`${n.x},${n.y}`,until:r+2e3})},"#setOff"),Mh=l(function(e,t,n){let[r,s]=m(this,Qe).layout.centre(t.x,t.y),[a,o]=m(this,Qe).layout.centre(n.x,n.y),{u:c,v:u}=m(this,Qe).layout.period(),h=l((p,g)=>g===null?p:p-g*Math.round(p/g),"short"),f=h(a-r,c),d=h(o-s,u);f===0&&d===0||(m(this,ar).delete(e),m(this,ar).set(e,Math.round(Math.atan2(f,d)*1e3)/1e3),m(this,ar).size>nA&&m(this,ar).delete(m(this,ar).keys().next().value),[t,n].forEach(({x:p,y:g})=>G(this,de,ws).call(this,p,g)),G(this,de,un).call(this))},"#face"),R_=l(function(e,t,n){let r=m(this,Vt).clientWidth,s=m(this,Vt).clientHeight;if(r<=0||s<=0)return!1;let a=m(this,Mt)?.to??m(this,ot),[o,c]=m(this,Qe).layout.centre(e,t),{u,v:h}=G(this,de,Vr).call(this),[f,d]=a.focus,p=l((v,E,I)=>I===null?v:v+I*Math.round((E-v)/I),"nearest"),g=[p(o,f,u),Math.max(0,m(this,Qe).heightAt(o,c)),p(c,d,h)],y=r/s,x=m(this,En)??0,_=Rp(a,x,g,y),S=Rp(a,x,[g[0]+Math.cos(a.yaw),g[1],g[2]+Math.sin(a.yaw)],y);if(_===null||S===null)return!1;let A=(_[0]+1)/2*r,w=(1-_[1])/2*s,R=Math.abs(S[0]-_[0])*(r/2),C=(n+.5)*R;return A>=C&&A<=r-C&&w>=C&&w<=s-C&&!m(this,pl).some(({left:v,top:E,right:I,bottom:P})=>A>=v-R/2&&A<=I+R/2&&w>=E-R/2&&w<=P+R/2)},"#visible"),cl=l(function(e,t){let n=m(this,Vt).clientWidth,r=m(this,Vt).clientHeight;if(n<=0||r<=0)return null;let s=__(m(this,ot),m(this,En)??0,[e/n*2-1,1-t/r*2],n/r,(f,d)=>m(this,Qe).heightAt(f,d));if(s===null)return null;let[a,o]=m(this,Qe).layout.tileAt(...s),c=this.world.width(),u=this.world.height();return!(G(this,de,Vr).call(this).v!==null)&&(o<0||o>=u)?null:this.world.get((a%c+c)%c,(o%u+u)%u)},"#tileAt"),P_=l(function(e,t){let n=G(this,de,cl).call(this,e,t);n!==null&&this.portal.emit("tile-clicked",n.x,n.y);let r=m(this,Bi);if(r!==null){n!==null&&r.accept(n)&&(this.endPicking(),r.onPick(n));return}n!==null&&m(this,Vn).click(this.portal,n)},"#clicked"),I_=l(function(e,t,n,r,s){let a=m(this,cr),o=G(this,de,cl).call(this,e,t);return a===null||o===null?!1:(this.endPicking(),m(this,Vn).menu(this.portal,n,r,a,o,m(this,bl),s),!0)},"#menu"),L_=l(function(e){let t=e===null||m(this,Ga)||m(this,Vn).menuOpen()?null:G(this,de,cl).call(this,e.x,e.y),n=m(this,Wr);if(t===null||e===null){m(this,Hn).call(this);return}let r=`${t.x},${t.y}`;if(n!==null&&n.key===r){Object.assign(n,{canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY});return}m(this,Hn).call(this);let s={key:r,x:t.x,y:t.y,canvasX:e.x,canvasY:e.y,clientX:e.clientX,clientY:e.clientY,timer:null,open:!1};s.timer=window.setTimeout(()=>{s.timer=null,G(this,de,xm).call(this,s)},aA),H(this,Wr,s),document.addEventListener("keydown",m(this,Hn),!0)},"#hovered"),xm=l(function(e){let t=typeof document.elementFromPoint!="function"||document.elementFromPoint(e.clientX,e.clientY)===m(this,Vt),n=t?G(this,de,cl).call(this,e.canvasX,e.canvasY):null;if(n===null||`${n.x},${n.y}`!==e.key){m(this,Hn).call(this);return}let r=m(this,Vn).tooltip(m(this,Vt),n,m(this,Ml),{left:e.clientX-10,top:e.clientY-10,bottom:e.clientY+10});!r&&e.open&&m(this,Vn).endTooltip(m(this,Vt)),e.open=r},"#showHover"),Sh=l(function(){return[...m(this,ot).focus]},"#focus"),D_=l(function(){let[e,t]=m(this,Qe).layout.tileAt(...m(this,ot).focus),n=this.world.width(),r=this.world.height();return{x:(e%n+n)%n,y:G(this,de,Vr).call(this).v===null?Math.min(r-1,Math.max(0,t)):(t%r+r)%r}},"#centreSquare"),N_=l(function(e,t){let[n,r]=m(this,Qe).layout.centre(e,t),[s,a]=(m(this,Mt)?.to??m(this,ot)).focus;if(n===s&&r===a)return;let o={...m(this,Mt)?.to??m(this,ot),focus:[n,r]},{u:c,v:u}=G(this,de,Vr).call(this),h=l((g,y)=>y===null?g:g-y*Math.round(g/y),"short"),[f,d]=m(this,ot).focus,p=Math.hypot(h(n-f,c),h(r-d,u));if(!m(this,vl)||p>m(this,ot).distance*1.5){H(this,vl,!0),this.setOrbit(o);return}G(this,de,hl).call(this,o)},"#centreOn"),ul=l(function(e){return hx(ms(e),G(this,de,Vr).call(this),m(this,Qe).extentV())},"#settle"),Vr=l(function(){let e=m(this,Qe).layout.period();return this.portal?.lockVerticalEdges()??m(this,_l)?{u:e.u,v:null}:e},"#period"),hl=l(function(e,t=G(this,de,gm).call(this)+T_(e.yaw-(m(this,Mt)?.to??m(this,ot)).yaw)){m(this,Hn).call(this),typeof requestAnimationFrame!="function"||Ca()?(H(this,Mt,null),H(this,ot,G(this,de,ul).call(this,e))):H(this,Mt,{from:m(this,ot),to:e,started:null,turn:t,drawn:0}),G(this,de,un).call(this)},"#moveTo"),U_=l(function(e){let t=m(this,Mt);if(t===null)return!1;t.started??=e;let n=Math.min(1,(e-t.started)/iA);return t.drawn=n*n*(3-2*n),H(this,ot,G(this,de,ul).call(this,dx(t.from,t.to,n,G(this,de,Vr).call(this),t.turn))),n>=1&&H(this,Mt,null),n<1},"#moveCamera"),F_=l(function(e){let[t,n]=m(this,ot).focus,r=Math.max(0,m(this,Qe).heightAt(t,n));return!e||m(this,En)===null||Ca()?(H(this,En,r),!1):(H(this,En,m(this,En)+(r-m(this,En))*sA),Math.abs(r-m(this,En))<.002?(H(this,En,r),!1):!0)},"#followHeight"),_m=l(function(){let e=[...m(this,Xr).values()].map(({x:o,y:c})=>[o,c]),t=this.world.tiles(),n=t!==m(this,Ts)||t.length!==m(this,ka);H(this,Ts,t),H(this,ka,t.length),m(this,Xr).clear();let r=G(this,de,B_).call(this,m(this,Qe).changed(e,...G(this,de,Sh).call(this),n)),s=new Set(e.map(([o,c])=>`${o},${c}`));e.forEach(([o,c])=>G(this,de,ws).call(this,o,c)),r.forEach(([o,c])=>{let u=`${o},${c}`;!n&&!s.has(u)&&m(this,or).has(u)&&G(this,de,ws).call(this,o,c)}),G(this,de,O_).call(this,e,r);let a=m(this,Wr);a!==null&&a.open&&e.some(([o,c])=>o===a.x&&c===a.y)&&G(this,de,xm).call(this,a),(e.length>0||n)&&H(this,Ba,!0),n&&(H(this,zi,!0),m(this,or).forEach((o,c)=>{let[u,h]=c.split(",").map(Number);G(this,de,ws).call(this,u,h)}))},"#takeTiles"),ws=l(function(e,t){let n=`${e},${t}`,r=x_(this.world.get(e,t),m(this,cr)?.id??null,m(this,ur),m(this,yl),d=>m(this,ar).get(d.id)??0,m(this,Cs)),[s,a]=m(this,Qe).layout.centre(e,t),o=[s,Math.max(0,m(this,Qe).surfaceAt(s,a)),a],c=r===null?null:JSON.stringify([r,o]),u=c!==(m(this,or).get(n)??null);if(u&&m(this,jt).setMarker(n,o,r),m(this,mi).size===0){u&&G(this,de,vm).call(this,n,c);return}let h=performance.now(),f=new Set((this.world.get(e,t)?.units??[]).map(d=>d.id));m(this,mi).forEach((d,p)=>{if(d.until<h){m(this,mi).delete(p);return}d.to!==n||!f.has(p)||(m(this,mi).delete(p),u&&r?.unit?.id===p&&m(this,jt).slideMarker(n,d.from))}),u&&G(this,de,vm).call(this,n,c)},"#mark"),O_=l(function(e,t){e.length===0&&t.length===0||(e.forEach(([n,r])=>m(this,Is).delete(`${n},${r}`)),t.forEach(([n,r])=>m(this,Is).delete(`${n},${r}`)),H(this,zi,!0))},"#yieldsChanged"),B_=l(function(e){let t=this.world.topology(),n=new Map;return e.forEach(([r,s])=>{n.set(`${r},${s}`,[r,s]),t.directions().forEach(a=>{let o=t.neighbour(r,s,a);o!==null&&n.set(`${o[0]},${o[1]}`,o)})}),[...n.values()]},"#besides"),z_=l(function(){if(!m(this,Rs)){m(this,Ps)&&(m(this,jt).setYields(null),H(this,Ps,!1));return}if(!m(this,zi)&&m(this,Ps))return;let e=[];this.world.tiles().forEach(t=>{let n=`${t.x},${t.y}`,r=M_(t,S_(t)),s=m(this,Is).get(n);if(s===void 0||s.of!==r){let[a,o]=m(this,Qe).layout.centre(t.x,t.y);s={of:r,laid:r.length===0?null:E_({at:[a,Math.max(0,m(this,Qe).surfaceAt(a,o)),o],yields:r},m(this,El))},m(this,Is).set(n,s)}s.laid!==null&&e.push(s.laid)}),m(this,jt).setYields(A_(e)),H(this,zi,!1),H(this,Ps,!0)},"#showYields"),vm=l(function(e,t){t===null?m(this,or).delete(e):m(this,or).set(e,t)},"#remember"),dl=l(function(){let e=new Set(m(this,or).keys());this.world.tiles().forEach(({x:t,y:n})=>e.add(`${t},${n}`)),e.forEach(t=>{let[n,r]=t.split(",").map(Number);G(this,de,ws).call(this,n,r)})},"#markAll"),ym=l(function(e){let t=performance.now(),n=G(this,de,U_).call(this,t),[r,s]=G(this,de,Sh).call(this);G(this,de,_m).call(this),`${r},${s}`!==m(this,gl)&&(H(this,gl,`${r},${s}`),m(this,Qe).refocus(r,s)),m(this,Qe).build(m(this,jt),e);let a=G(this,de,F_).call(this,e!==null);G(this,de,z_).call(this),m(this,jt).view(m(this,ot),m(this,En)??0,G(this,de,Vr).call(this)),m(this,jt).render(),G(this,de,k_).call(this),G(this,de,bm).call(this),H(this,ml,performance.now()-t),G(this,de,H_).call(this),(m(this,Qe).pending()>0||m(this,Qe).overlaysPending()>0||m(this,jt).sliding()||n||a)&&G(this,de,un).call(this)},"#frameDrawn"),k_=l(function(){let e=m(this,Oa);if(e===null)return;m(this,Ba)&&(H(this,Ba,!1),e.redraw());let t=m(this,cr)?.tile??null;e.show(G(this,de,G_).call(this),t===null?null:{x:t.x,y:t.y})},"#showMinimap"),G_=l(function(){let e=m(this,Vt).clientWidth,t=m(this,Vt).clientHeight;if(e<=0||t<=0)return null;let n=e/t,r=m(this,En)??0,s=ih(m(this,ot).distance).far,[a,o]=m(this,ot).focus,c=l((h,f)=>{for(let d=f;d>=-1;d-=.05){let p=ya(m(this,ot),r,[h,d],n);if(p!==null){let g=Math.hypot(p[0]-a,p[1]-o),y=g>s?s/g:1;return[a+(p[0]-a)*y,o+(p[1]-o)*y]}}return null},"corner"),u=[c(-1,-1),c(1,-1),c(1,1),c(-1,1)];return u.every(h=>h!==null)?u:null},"#patch"),bm=l(function(e=!1){let t=(e?m(this,Mt)?.to??m(this,ot):m(this,ot)).distance,n=l(()=>{m(this,Hr)!==null&&clearTimeout(m(this,Hr)),H(this,Hr,null),H(this,Fa,null)},"stop"),r=l(()=>{n(),H(this,As,t),m(this,xl).set(t)},"keep");if(e){n(),t!==m(this,As)&&r();return}if(m(this,Mt)!==null||t===m(this,As)){n();return}m(this,Hr)!==null&&t===m(this,Fa)||(n(),H(this,Fa,t),H(this,Hr,setTimeout(r,rA)))},"#keepDistance"),un=l(function(){if(!m(this,Ls)){if(typeof requestAnimationFrame!="function"){G(this,de,ym).call(this,null);return}m(this,lr)===null&&H(this,lr,requestAnimationFrame(()=>{H(this,lr,null),G(this,de,ym).call(this,tA)}))}},"#draw"),V_=l(function(e){let t=document.createElement("pre");return t.className="map3d-stats",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{background:"var(--ui-overlay-bg, rgba(0, 0, 0, 0.6))",color:"var(--ui-overlay-fg, #fff)",font:"12px/1.4 monospace",left:"0.5rem",margin:"0",padding:"0.25rem 0.5rem",pointerEvents:"none",position:"absolute",bottom:"0.5rem"}),e.append(t),t},"#statsOverlay"),H_=l(function(){if(m(this,Es)===null)return;let{drawCalls:e,triangles:t,geometries:n}=m(this,jt).stats();m(this,Es).textContent=[`frame ${m(this,ml).toFixed(1)} ms`,`draw calls ${e}`,`triangles ${t.toLocaleString()}`,`geometries ${n}`,`chunks waiting ${m(this,Qe).pending()}`].join(`
`)},"#showStats"),Mm=l(function(){let e=m(this,Vt).parentElement,t=e?.offsetWidth??0,n=e?.offsetHeight??0,r=window.devicePixelRatio||1,s=`${t}\xD7${n}@${r}`;t===0||n===0||s===m(this,Cl)||(H(this,Cl,s),m(this,jt).resize(t,n,r),this.measureCovered(),m(this,jt).render())},"#resize"),l(Sm,"MapView3D");var mm=Sm,W_=mm;var oA={createMapView3D:l(i=>new W_(i),"createMapView3D")};globalThis[Om]=oA;})();
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
